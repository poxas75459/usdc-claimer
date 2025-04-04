/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "4EW5VeLjZtQ7ANFoSJMY8zR37ZZvfQv8jVbTh6AH7V9N5nFwdBRembN8mP7Mq1FtLWB3ieJuSV8SypPA2svqChKY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "giwtpbygNCBMXenB2aCK7gibQeJafeMxfsHUAe9mpUwWgJv9WLZEYf2KFNmkmASBiLX8CUX47RxvMtqFc9rsvjR",
  "key1": "2DctjHyeR4p2AHAh5yrbU3QcodykPi82QbCKeAtttcB2f2wr1VXNS3u9W2iYM677Um6EGb8ywMYC69dABWaq8YMa",
  "key2": "25KzcyP66zm1cbZ4t5YvVZQ899T1LkNqgMMziQTy6UtnemftgANezipCQomnSNCxQK2Lhi3i5ZPmQxzyefa543hM",
  "key3": "249RZAMsBZ2aTreKmYYqzMurP86uiPnmjie6HS3gu4mnZh35KBuisTvSSZUTvBh7oM53nNNcGNrTMFUzfxdhnEQP",
  "key4": "5uumX6NiZQWt68BVVscvvRDVHfLgdggApjt7BPTAiWXnM1hhS3XWEr1pAvJ69PhR4qeGPNh4SpNsBx3VC4Ctorq5",
  "key5": "4TtZ7vhi8ahH5UYnKvTTjuj3WpA4xhvWzRpH5UmdXDxcBVzreivPqAtuLACNu5nPjA1ynwjqxEBYrUxz3EfN7kZq",
  "key6": "5LaZVwDCA6z6EKkYNadxrEMyfV26qyejZ8ypFNioujwCAiqfMivsWiCN9xUGjf2EBvkQPbLzET1ouKct4f4umseG",
  "key7": "2WpAB37iuqnb5wxJzucokFPL7PVYXPs7HuJ5D4qhdWaaEXBah1aW9LTG6kHYK1oWxE9GacpnFNZYczDgmknPfmqY",
  "key8": "5CghKYxQ9QAVFbpPX16WGw2mFwwzfJwxY59zPo1rG8JAAKuCit7i7YCtvhG66UX74Lrcr4Jyyw4CYcgBrFFfwJzj",
  "key9": "5q2mzjs16jKRm6K4r4Fe88ty36QBhL4oBjNyRgt2YhMZ6edN9xJDuwn157BbHHz5CPvGLUJJvgJgHKNx4GGz8hBE",
  "key10": "2mPuiuHUrFC5pZNArd7hCQpfoYG7x8Fr8z4nEHFx7T1GWQYJqfnACgkEGYWHxmBn7Q45eiWFbLsBHwAoxgk2GJCf",
  "key11": "2MHjijDFLs5v2aT5f8QFiMJvWF8ER6aRduNgCsCDFGYf4W9GCEBUdtXmMVAQWuKq5TfFEBUr7e9CZgXMu8P9EVjF",
  "key12": "2vAUtJhqsEX9KvcJmpeRsW7KSRw5ifYSPizB1qKRe4ofviFfeRXCndHYKj7ypXeYwWVUUFZqJn5HryvJFwh5nBn8",
  "key13": "4XYAR1EDDXxRHAgFxoUAyduQkT7ijZK3RT1sjPPWr61uVgzpKtD1Mxi7f7VJmxtrpPiPWJG9cZ6hkG3F74XPYS5U",
  "key14": "4EoqZW5g1Lx4FH1yR4jpmD445xuYbsMSt4uKV4VPxpsfM5hjZjz4VhgFvZ4btux4CefB9NqiPVCJcSMESfH7ANGq",
  "key15": "5MSmiVSUHEu2idmczSb2gWsYAtFdf9xGq3qu26pRCk2zYYob9JbNSyhVbgGMaDbvU5T265oboz7JanVAEtEQX6FR",
  "key16": "4baUdHk2W71NJz1hxobtCHiPLpR7QoX4iAr9QrFc8GV5sMwUX9woinUUXy7cFuG4BbWn2C9CYdXFmxN3iZw9U5Ly",
  "key17": "3vzE3eGu1euCTZPY4foX5iHk28i3pkfFjVqo3a5sshmyXzLPREnNoth2ui13V7hHzkxekJpEy7aWLTjuFqf64vNT",
  "key18": "4HERGBs2ZpkpApDebWHC6pymhpLt5YEuvDsU4UYtH4xV8fRzAyoTUNWn4KA7TYDRgRfmxakTsXvjsHVqks2H6EqH",
  "key19": "2JcHF493Ayn3tsdh3uCFCuJw5YvGvcFeUWopQyRoAmHSg8rTKr3rFrZFaQMfpjGoYGp336cPKYbndLm45KfzfHho",
  "key20": "3AEKs6PEhJnYnQicqfRX4VfzzyDdxBytFoVD65b562AwbifVzTqha59kDNwFuzxhSvPT43VxNGQm6ufVo55MH7NG",
  "key21": "2G5it7bhQyqqngZJW6W3nn6vLnmBi8B2tGA35kj8LpDK4M6ZVcN2XApVixsBP7wN5GH81DixiGa3HGjzFsXzxheq",
  "key22": "5SQvdih2qAHb78s4sfCSKBq9vTaoxV8mgFYdwTieNqeSBXgJrqqhsBpTHmp2zLLhyH111eBndcibec4e7APBnAN3",
  "key23": "5jgiVjGNyeBbss6qpjanct8Kvft1irSZAsHWucfrbC4XyWtYvKBhwekDqahpGRzuceicBb9aZBHE4jsjuiZeGFuN",
  "key24": "33F9PhE3kEqTHBTECpn5kZ7oU47kCooH3E5HUCJknFu1YbGH5RniXXhJpiZgU1oLBQxtGpMd4Z8p7gXVTiAi7gNB",
  "key25": "oyYczTZaPahRG2U2LCQ3uVnv1qM3JAKk7DeywBrBPLRbn5HupE9URXXWb7wGJsiLUMa9th5U782F5Zg3krWXb6w",
  "key26": "5hXsYeTRbNXk3cfTgTA47RoRSJeBx7LJ56Up5pdQxS8m84nYfQ9Ug4ndkD78dBVYoWCqZCJ2K1om7RTKnQSGcCtK",
  "key27": "4vLvJ4hRrmqE3AuErUzvV2YgFU8UJc5fD9NoHdk2j3WeSAcRncH5jFpxREi4jQnszADeWyC23DpBV5H3WN1EdCSf",
  "key28": "ycJmfKVKQu9vwCJN2GpTsxngsap88ExKv1QFgkBej5F7xeRWMi9agQQikWxTLzSFc4JZJE1i32Xr9aM8wBsCbn5",
  "key29": "5pEUD22qnkULovp94msLi5WSWBXVpQK7jAbafPLxMXV6Wxkkv7hBwMkFE9dPaHEBjmfVFQG2wZszBmYSevPgCTfC",
  "key30": "smPQsYune8jTNBtvsor2ActCreW2NAEVVaXiMcSVbXLLrwRuc3h8y7exEdw1SraqLsXMZ4uS5ZJRvRnypZH9rEo",
  "key31": "vswJAsbckxBqg3dmCwVg7Jo94zcfxFbyX3k6mZNLqZTuj5ogXPgZa9qVUhAcj4gfWSVHR17mY5dXuJnyTKS5S8X",
  "key32": "5Nb41KEyF9hkf3ccXdi1CJVEhnMRj7VjHQefHcSLjcKTEK9FPrDWZ6tfLPZ25WpWxHeyMrjLrxnYXgUraQUzmSPH",
  "key33": "EM9vqCuqHdCnD4j9LeeqkxpZaZC8D3HnPJzJFnesbdvG9XEXxDFc3Br6s6WexU5Quv21LSdL8U7EaKDvRvdZhob",
  "key34": "2U2ovKCSGYXWXpVaMHvyjtARjpFnUsQujoisC5FYSQC8nU6odHsBNwfR7aWkswdaiSgESKQAda7fQ4RJCHSiL35R",
  "key35": "5ET68FcMwfN6JLUKwhSy5KuKbXgkoMTisVsWdvr1cSj4uhwkJXafsFFrLfYXCEyjPXiMGVAoTrfvScSspgemw5b7",
  "key36": "4n4Yk3b3rJFWfKvkDfMdQijQpuKakR6jj2Ag1EHR9hQEieati4teGipbANJBYHkZWciTTi8WaknpYaFVaA4F8wEr",
  "key37": "5nXAHgHucjLvViV3GWChobEfQyV52A1omYHGxBWN8Rkh5k9MdSm7msB7jUeCjXDpyi2gfsnf9WrPCYPmjctvV4P8",
  "key38": "tJ4fBU4uxXb6fyz6caxhRkDn6XED8TsYgs3PfHZM5H3eh4jYjgy8qZFavp2N2xew9oAjNwgH6qRxZ8cViP8KigF",
  "key39": "4WJXy3i1N6VX5KxiMd1jnd8sbsxJyJRvXh2Gi78nkMXZsLqCVcrQZMXEc4MayUeRXL64Gxm8uirY4bjEeKG3UvFz",
  "key40": "671PzTiJytkzSqRvfeXFHJu1EQyL8eSVK9iRa8fnER2qUAN5vq4gwGC89o1LczbZZoDeV2veu2Vt7b7tSN3KiTod",
  "key41": "65vxygJc5VUHKZ7Xb2R29aFdbBpHWcZjyvGyHDgAHoSurafLuCLrXAoA3dwX4sWzW3xf36F1wwu52qmQcWiwybmY",
  "key42": "e5mbQoq13SK2hxu9MDkHwVp6eJ6PrTAfP1kYVRikAWetHCciek647PZKBcGiWV8JBJP8vXugVePqPbMQAyWb9Mg",
  "key43": "27NVD4N3r4hu284GBRgzaB9B6iH3tMjF6kLx7sXtHgY31fboEb2Pm2sBoLdQQys48Wr3ByfV3d7C383mYtnkb3MQ",
  "key44": "3YW4ULsqvZY9UgPX52uni8TwA6c1CoDuVCkTLouWW2Ha5mm8sHXoHgWehhddGhm3NCN2VWPUvUcnCkLPAfCnJPr5",
  "key45": "2tZRU1GKyJNg6Zt7FwTkxa6BnGdbbWEWUxJUPTj1y2TE9JyeWML68J6v1NbQhKgSEQHrj5pWVFsjwg5tfdBjiQSi",
  "key46": "2L4eVzvcy26LZLYgNvZasaczXhHWCA2YKYVPzbaKVPPfp3qLkzx3QFh3mhnsc2zi9kBGM4DtvhnmKdcEqYfXW4r",
  "key47": "3piBE6BVfQJw2i32uyuTqmpQeuj2xitM6CfhcgcjdompgfSJ6smgAxtGacqBAcvYXTKeCnwd3M4fo8NHn1hBSCNE",
  "key48": "2prMaJ9WWKVenMtKwVzBRNzKFcLEQdwnu14n8hSJyVTwQ8H5zGjLxJwRqm6JMeAKYg5TFufNGALEAe5SrCPsPSfR",
  "key49": "2XWXMGcswLpn51tM7nSANLtVQJFgUKzaz6zojRCZhycjSJRw5GGCcXNwak9HiNS5rpJhoyW2CNrevyrPAtghesAJ"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
