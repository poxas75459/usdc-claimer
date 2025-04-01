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
    "5cZRGNCg8sxXiLh5wubPYufzEv5etZ5Phy23G8XSt1pTj1NQALCWMKApwrrhBUXCDMZ3VVb6LD2jM2RC4wyyDMe4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QCiDXAp38LSQC4wUUMALzXaWJV1uim4eEXWz5KuN4jNUyfpNti5aXxKKd4Wudq2Qz7FDdMD82FpcWaQ6caMqpQX",
  "key1": "4mGiJdmtJSW9mVRsnvkS3tPkek94LYjqXMs3FvWVEVxeo1j87E7nomsPCNBNyBg5SfnxxqSFckWNiiTCck91hipP",
  "key2": "dNC6crooWhPVRyGyDc7QVzrGa5KLDQGH5LJEXVsG6eKEGgpjgdNFWZZNWnFXF3QA9NkpmhYi26PhkRteSYdH5sq",
  "key3": "5MiCKeT9sN2zHC91epfGRcjX31YbwMqP3CXnfvdgJnuoFPaU1QUXz9jc7sNAWZQSAHZngupdA6Hruf8Vxzxw157H",
  "key4": "3kzcuCLryhMoeaX5JkzkCNqNdxQ159F1YJu1a1ejeJ4y5v44FJgH9xJSBQCkxhY5zodUvzSMykm73s8iF43oQ1kj",
  "key5": "5uDCkjW94KC64pwFistkMcbeMYieCfXMU67JWmzLwiJ1nRpx9KHoyHUmMWrhDdS8M2quKxRC1iwtMptQRVDCHhSE",
  "key6": "4YQuVtKNy8Wqv4stefZZuMVrNaCxYkGBf2tXWVWEup6mth678sF2huh2JfCXwFeyG998DHySvPD74erG8WErqQ7z",
  "key7": "52gG6SEjk7uRmCiwLNidtq3JZHtKu4QnMvMzfduaztaEzbGAPZTX1bfStxdU4Z7MegvuugsXbE3KEQNek7wLp8ei",
  "key8": "3MYNKyykZYqg5P1EdsPDy1sw5iydcEKVGf2qb6ZrSA2QXgwSLhX8RomK3hzuDxawiHq9s1ok6TGh8CZ8rP8x7VHB",
  "key9": "2161VjLcT6oTn2yU5qPxRP6UXzRbetWar2mJZeDWek1b3dM7Jb6RW19BGFphJLBgVZGoM6vH8FgUggRsbjg2B7ZY",
  "key10": "4GhwnaLMHQG9e312QZdyP4WcL3yGuF7GtZQ2jVfDkADykFUaxRDoz2aJNLaPtWqi8sFGRG38obTDiHxuKqeGQpVa",
  "key11": "2oyX3rsz8o4vNNaWwPhtoHWS4Caf4SA9UQJdN9UD8Gg1sV6MuDANVrHDuM9ENX9GNm82bKSuTvtxtWzKvGZwiahJ",
  "key12": "2Hh3vSq467Ys8zVopaQiLUrx8pB5WRi5mm2qS4o4yHTQBmhUMoTcsvCgFUUHpMMqrD8p7fNXksiz2a8WDXF7P76v",
  "key13": "47de6RcK5C6pakekVm6Dj3ur5YYD1JrvitqkgLWurTZdP2gCuaFn8p24rJ6pPoWD9qUkWWZXho42UMQ7r2CVZmFQ",
  "key14": "5AbiLU6oytKy1Tw8JKAuYPc6iCujzjmuL9PzW9V5eZLK8HmKWdySs13zsFTFkuLqxSgcZaAdsM9ApBVSZWrELKn5",
  "key15": "3vWwuz3gL9QPGUyfh5bSZmD6Vs3P9x3A55EiS2utaCnKeZLWpiqhWvHmRX9xDygAKGfMdW5rvqLqu5uzHiouNf51",
  "key16": "5KFhdC6fXhtpXkxB3Z2nTUER67YaV8E2cJHgCvY3FsNwS1QJVQeVWPX1YKC5bGSVKymn3oa9tXjU1CUgsXDipcLT",
  "key17": "CK6dL2aogzyDhypWqEqc8SR8g7uXKbHWxxFKz8DLrmtVJbmJ9vzLJdjyMnJn8BbwZJrX1f15LPZ1FsvKe54yQSW",
  "key18": "4dsAU3zwQ4R6LS6rdqpxnLTbCH7Fh9of2BtoAwzAn1CPNxPTzzAFjzuZoqcvWTHcfh6g5qGP58TN7rbK4pUWEVdJ",
  "key19": "265xHJKqqvf5vroa3memMmKWXyNqoFY3Ayxx81uzvwJphoUjyAwvrVv1DSkrir23tYckpxnuuWgnYX9Nvy74rKqf",
  "key20": "3y9C1pTfQyvC8o9VKJtWRT2XYGZseij2tw2MrwLZnHeWkytJZHDZZHxr2j6otFTraBwhxdinWqcEbCv2HwisQzhf",
  "key21": "4W8TgbJvvk3rLBRqr484UhPWDiDbinefdXZJzeRy4HkZeMjYXdE9hezSbeipW6p14TYw8mg9iybRsrp5wdiH1LPR",
  "key22": "J3qzjiCGrLGCyhahbJyt5rB4er6Uo6YG6r1jr1ynYeFi1XBZ4hzqDAFb44gCpJWNji9dmgX98R9oH1VccoJZXtn",
  "key23": "5pQoMX8u3pCmAtq7jQiN8rjkL9sHvT6JgbXiQNL3SfpzUZfxPsYGDJa9YcnbXXYVyWWZtkZwsowHBnRxGBJA7zRv",
  "key24": "5FxskdLucJshGUNPe5t9Kpu4bv2MBpb6Kc7emY3C3iiwntXbtE4i9Ppkz3DknXRFADkgLboA1qrUcTNVtfERBiqo",
  "key25": "4ANQGaeN9EgbWLQhTXZLZM8rxXUYaydJosVtBte9wSe1P1YjJyL5hEAwYCyCWaaX9sj4TKmhP3USRYgdyXP84wmE",
  "key26": "V48cNry1Tf7LVtS1dKpVddAENyGaCPUq6JLjMQpZdUMEgt2XNmM5gJsUmkdf3joS4jYBUuRgwVuiDUhqMXoVCzX",
  "key27": "5EKcYXDvPBeoyLQfFFPf3TgFwDkDLaozxQ2oZfrBq2A4NjRVZJuAVcQuRUYG2V3KzNpx188maRBGmjmEBiKpT1Ca",
  "key28": "2tCARoFoL2X3XrHqv7piFgjH7kCK4j6kgVPFM7QNKzyXfoqtAnTcmF7uHwcgEzZhqpwGguwY4uVfLGitsJtRfv24",
  "key29": "2i4x1sMJHaiwMiZYp3P8mvfd6PbykcbnKHXmyaGApaFNWfo2x59RE3MYMStN6QxsgLVnryHUaDFqeWJyPNwELcb8",
  "key30": "2n5yKE1FsAzxHS5hsTZw8Qao4ELSG33Dgr4vryfJuV3vKjikNEtqcKR73kUNUsDWLngU2ppZwC1NnDc3EP1UqayA",
  "key31": "5K1MsR35TBmy8XxsZjQBNmmQMkvd7YfxHhQ6cQReYRMnswXRuchTaVzV4bRNeVCKPSts6M3vvhuWFqKYqvQx2ZBc",
  "key32": "3FacQm1C7RHdY1Dc99hU41BB2T59G6iyQvJpRHiqHpa2GVZ3Z1i9sj3dpjFjz9PqkVfSW9qsQNsjxwX3T4XkqLwb",
  "key33": "63UX8NDPNpzrRGkTqpYTzcPqkT4dVxGHndbwkTmH7Qi9P6w4r5AHUUuT8uy4EDobD24C81JCHu44Y75t7uv3x5fg",
  "key34": "2MYCU7f5agv1sH3qZE1g4mzZYFvkrw8SRGT4QF8G1gBfMxnJdWtVj7Ej6Rf1fs79oArNzgbbNYeGG7uSAtjHZEm4",
  "key35": "3gVkHVxn9aqv9ofCDPB682kJDkwAxo3NVusg6xjUWMZ2zk2K9JoqPYAbf7x2HiX36btzv8KkMEQsZmitGN6Uvy1j",
  "key36": "5LYProp8J2AjZ93izrsY455ZCpXtxPuMmappxgiJ1TnJfQBMNbWYUBg3FDLVtwpksyZ9wLW6eC198phsCTvSUAiG",
  "key37": "XemJWSYwtirRYNf84XFcvmFk3EV2dhS9m6JcLnfqRed1Aot647oa7cEgCgMoHwhboAvxG6V8ToTXMVWwEhLw2iE",
  "key38": "amCDBtz42MSRvmeW4xieh4YSLsmMsCkDGMUsiU9HmxRnaNDEp381mF4Mfrmxde19fGwrxUShfHNbiuC6FgA9waK",
  "key39": "5LinKmuAQvoKg54NEUgZjUXsiCwgw1VpUpZDznp9nE57rrSVAsfE2nfjaiyGRwvTMv9SYQwpeyy9uSVGFBgGEei6"
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
