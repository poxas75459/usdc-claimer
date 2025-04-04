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
    "s7aVzva1fjhbVn92fuHkF6Q9aeaw3oevVZbXEBaXhPvF1HdmitVhk1p8MLk4uZsdY89kJdd59DTavLyyBmmGVN5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GpRcNKeC4r2fhoh3FsRhbs45qKQwUAoNG7UbXe6xZpGk47W3gzEKRzcTRMMspM4uKfQ8Vj1U6jNn4GYd7LQ1TKG",
  "key1": "58w14vaMpU1T1csvHGTW9ztMpxsfgKpy3REEakZxSFTKcWVzNuBd4XS9Q4Cyybmj2NCZhW1kCNE8AnH28ZiCBPzc",
  "key2": "62WEsFfY8Y18EMRvsjCgR9WUeV95zc6ssxprR5d9vreZNXh8Kcx2p1HgyYZde82bYTc95izjcZWN1XqRcMGFZvSD",
  "key3": "3ArS5Gy2RyMAF9R5dcHMtkuVRszn6SkSsGoihHnNwhbXN4McAxJNwywdxPACKPqVAnTKRTobMsUhrfELaJBSAPLU",
  "key4": "3RVHpuA9h5yBq26kqcA1MGkvr9cazPU97kfhaPCwoUiTZbV8zz2Yb35ASPSZh8e9F52r93F3Svyu1SWJSbb1pxFG",
  "key5": "3EEUwv7ZzvXxAysUUnSY3rmh81RLeQk1SrYP5x1jrhxbMsnFozm3JyRn1CS2JaHbVkauiWYyVZT4nShqh5EMsZiy",
  "key6": "4xAWKkiULMjJhPx27TpmSSgK8WygxGpWJxkppSU2JN62Kf77Ph1nJJLcW28vgP3uKxYTcdJRbhCuEJ1d2uncKiTr",
  "key7": "2TTbASdQmFou4Tgpgs8CmuRMkX71tWsHqXidxGWujfjUURiwHLtCkWqCosSkVW5667JEGKuLyAt9JZbosehkX8UU",
  "key8": "26XGLADoXZG3tCMsWnA9dEAevohVg8xWAyPpzWG74EZH5bL5XpVBzjKaUZESUm39YzoZ2yTTHrPLLbwp1fqMM4NU",
  "key9": "59SHKuFNJbYpsNU8Sy6VPtGUH3pmDQqYAYASwM82bT8ZtR5RqMHTXDFBtqskqxyvqRb7A1VoYueyKSPPvjBgWLYm",
  "key10": "47LrrxfmzckfQgbsqFz9Uj5HWsbNYd27vCTy6GnedZXxnPUEAxyKmSXhYH62ydwgFPYDbEoMKq3AYZwS4GXzU98g",
  "key11": "5VowXos1Y4WdaocVCm9cSsBLFLwxjdCeT6LCYU9hxVN6JPJTWXksgfmPpJ6K9R7RBeahR7pVJ3Cr9hrRLDeWKhTB",
  "key12": "3EWcGBJ1sxjzHMcvEtW19dgEnBBrtNoXZKPiuB7YppSw1VYd4iCkmgxNiHUVKnJw84Gu2SqtwHK8yBqUpxh9DLsG",
  "key13": "2b42oGzyRiZybHFAdbU5riTRnvdTyyh59Go2pQVxiGjjjZhXFczJi91jbq9PQxEh89yUSk2HZYruFczaugDBkUPw",
  "key14": "2tTNY22tLLsDD1DmJReht9tN3bBgaHQeXQvnyXSQTkJx76HcRgouWAd4Hc4Jwt1LiowuhryGxU5gm5WvzGR1Dkik",
  "key15": "3VfVuh2PnQUQfqZve3XYoyd4XkNg1ntA1nawncRqY6LrbgGhs2DpUy34tizTJtG9UbneRz4wovteuH61strjxmwx",
  "key16": "2js7e2yLnschcNDLknYAAKNhMC2ooQdGeAoWRrAbp68Bmxb4ryh782TspmVE6kXT13bF4pcJpEFdM7ZzKWgYqHJZ",
  "key17": "2GwMYH5RN38yZEWbLkyuiijLSuVpz6ScobfKcjjEdrRpdzAwGeVF8fwazaLZEtHU6Csi6f8vgKYfrGnEUN6qiSH6",
  "key18": "4xbQHTXmcB1nqnKxTCNHBxnN5b3XcmZanrKMaGnnK6tBJKM4TwiEDgbcAoUC8Y5RDt38xaEBXBeNFdnsTEvH25YL",
  "key19": "2377QcibR7zqzfM4A2HnavXz8TkLQS7rneScH9Z7YVKZBwEWdThNYqJmjM5toD5vyXKpjsNzJYWWQcXAsoBL3mU1",
  "key20": "5kwuD9D2vpro6eV2DBLNJL1ZMcf1Kv5M7iPWULXEeLZAkV6Tt5A5rmUyAwEqRhX6rvf5iRbNdMmLxyrxCeXwXrzm",
  "key21": "4pTs6YmdAfnXg4tEeQ1jY7kcEDY8oo9746EUrnFFNhfSe21f5gPeAMhk8YjieRhV6xDknbhNmdVdGta7PMmP78rw",
  "key22": "4S5GAZHxRTa5oGSTLoCnP6hmqzYgNgMAxrbMT7znr1jSHNbGeHUbUrDiCMhkpQoahtdwNCmQN3ApNnGpHEiMPczB",
  "key23": "3C5YVEk7yb76wQLtJsnrf419ipynXvfBmhNGnWYsZXKpsvMNDsTudxRxeVbn52xN5TbK3PGeWuq8qkeUSYq1Wx7o",
  "key24": "2o5MxG8Du3CzBaVN5h8cSeaR2bkWi2TNBrtsf7BQgxjaJj8Ls3Tz4zThRsSJyXZzGbFFUwLN7mDcjW3YEzLMqw4H",
  "key25": "4KzNvR1mrLYxP4qXZhkpthAnHQ4Q3SRuWtYzaGXCzMMdqYvGixWxkaUzFppWogCaaHLSG6P3ywckcMdLha8pUETN",
  "key26": "4V9d8KAgs9C8kK1fkLYJvvUXXUcY3B2PSyXtka1vgYSSvjQLNbcyqXrcp2LKXW3EwrZhz2U6fJBhoS1SmZjq8uEp",
  "key27": "5bAD9W993sNfYkiFnRdWwqnPZNxkPeyGCJnfW4ANvqUmpJyecgMqKKrXtJpWbg8Hj843Vw88SuVzmSV16ScJAGg1",
  "key28": "3LPnfzsm9vqhDBDdah81o6svHXyhCeFV4Lh3w2i9JbvdfGugM9S4D6FK1acx3JLe1yk4eQcGYzkkXDXQxYhfjZzS",
  "key29": "5ikjz55SJFr9BxSCRnqBSuQeJUKWxysxajqLqQiF9Hkv8cLAcLnxy4k3LR4EAvVp2xg7CoiPaYcuMAHThaowGncH",
  "key30": "5JE3EAEdxfrxBPYSJ9LDYX85NFCe4C27M1CJaDEqvKoFwjuiKDWyWMw36Pk1dmos5ArJw1sHfHJpvmoHibG9kUXp",
  "key31": "3oGWqjgMn7iWo1pn2aGZ6MuTHUc58p8MyMoYmbmpaPLhrKWRYYqbEgpLNfMWuPJTmTxsbmBKVoCNfx4EnLySUfu3",
  "key32": "3NHi4VzBwEZdmmJexZzmdpyXnAq4YTD5Ex2eyNsG4fKGT7ss1jLbCittfRFDyK43QLvBQhPbFkt4xAaChfCQXzP5",
  "key33": "Pxv86P65Yvo6TweRXCPqQ5MNtdYD66FcEM4sb6M3aYdU2zFTJbWcWrC8XRavRqYQ1gmKZuNBHaMGMoC8RZyFJB3",
  "key34": "21fxf18TuJ3dq5NbBQrRSn6K8ihuHoRVZfjQf8xLFHyyF7vSgxYgBHMHmZ9rTJSvd1fVAZyAtznoLAhgEfk2ynCD",
  "key35": "4C5CCvoWmWGnebLjQGthYYZihAbDbMvbsRPnGJdnQTiHJPUCQNVAXo9h47u8Pd2NZxuDybNq1cJm8QHX5RWgxt1v",
  "key36": "2pJk6rtx4dZ2VfMz1VCTE51w7mBBphCFyo84mx9nqVxWx5K1SLfm9isYiu9TdF8pNKcnvarTZZGZC1uArwqCeNr6",
  "key37": "FhHYwUfjLkV92mYyHnxK9X3Q43CRNo6rKszwprzTAL7s32xoPTt7vcg6gASPwLnbn7StkSKpLnnyJKwiz1wVW6T",
  "key38": "26iLReJGkieTGFMGEE9i1qQNZbsJKShkDddJ1Ki7DSoKf4H7RvyHLw8Av4UBQYPdJy6hkZfupEaEyXTvwN2FDf7F",
  "key39": "4kFDCw8aqhDH9FdwxURjhq6tHuZuhBFYAaeUUQvFhkst2HfmqZwuxEKZezZ9327wYPMpeocHQAay55iXGPRQyxMn",
  "key40": "3jBdRgeDwkir9p52xw6mN93ciMUC5DCut474tS1QGyoPrHXBeAG6HcQit4QMuTTtnNoxhAjE8DtsB7gDYuJkS6F7",
  "key41": "4viTnkWkjEbxeM4w6Ae5R2SnWeUHrcDoDF981SY8bhGjKqKyJWyMj2cTKzqNfBXWv4N3yuDjGiEqQ7EcHt5b557s",
  "key42": "4ih7nS3eP187oMWa6SkYy1cdwtQFGmVtSuMbqeSX2uG42YYQpjGVrNAMb24ZcP4Wj8gAK2JFYaCz7Z5L1cUxEDDy",
  "key43": "39u3TGLYR3VriMokqTP83EDTMfmmK1M6WYxgdMCbmy9rEccEPSruvZto22cK3E1BuQ6aszdkJoxvprkoyABztH8",
  "key44": "UnAwJVwearzwWLwpaq5ZorRFiPxGFiV1dJr4Z5w6Mc8a4Dpgh21pgogZKFdj9A6QqVNHX56uVujtdsuDHthpp4a",
  "key45": "nPi8NXUahyG7Kxf8ukWYzAcg8rh3dcdc35xJPCfghRY3BjMd6qckHS55ByAGGnZ7NnE53dJiQpJpatzdbifyeAG"
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
