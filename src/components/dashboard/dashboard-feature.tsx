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
    "2qeNKbkSgXEAtMjq4oe7Y5gmafkJCGRJSpZHHKASYvAP34dh5CgwwpHfQyY8WznTzSpwtvvuW3CKxzkcKCZRbyD6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4V3na6FJhZDuMnXZC7SFQXKuFHBALa3xD7ReoHktauseKV1svfYqrWKbRYVA3rFV8q3ZbymosdG6yraX3uyRsRwX",
  "key1": "3dxXM5NNmpMGoU3iB8AP2tZsenXZnpXyr6r6SreA8XAAVPZ73DdaChN7ARXSRsLUVq1gc8TVQf4GmCGYZ3cyj23F",
  "key2": "2unr8Cm8GpcURvMtjh2jpG7pEL8Eismn8unB5qYUxDNiidMD43SxjMLyUHnY7mc42oeB6jeAGzQAqTD179daGJo4",
  "key3": "62UpxzYHka185NcFrY5n65wT8p7M1pSjaBL97LjWpBpYmBhKpPHodQRML8tcnBqYk8iyBJo2TzzGRz9WtiPz9y3Q",
  "key4": "2k2oP45AMAzmTL5azMGrQpKD7hHENh5QfH1XQSKcfa9G195D2X8h3X4V6EgL1dkofJKkDVGWfxiU59qP1rhkmunm",
  "key5": "2P1tLAWXBLRY6q6w7WPPA5CysjCP3kJJWB4STxCKnBzHhxpeBoAt2Fg4ASy875mfKoGByJwL5NAfGYq2ro1matSc",
  "key6": "C5eHu99USXZveNuEg9VLiSEfua4YF4zRZ8aMEPEYP7pazHTniXzSteyp3RUmUSBsWhvtuPykaU7hZCC36btr8uC",
  "key7": "HVvmEZjnBjJF95vJo67SoyrepWxnkN8Z4htWRwgxKsb6UYhQm6o7HPLjmESSRVaQ5Y8avNQVFdyqU5XVTD7Jbww",
  "key8": "3Hrvgy12k8htamyLHEvWkzp1m6U56yZZewxphUNyCjp2zgopCJbA3sVtYFxKS651VpqQUeggzVhhndXb4se8dMDU",
  "key9": "3QP3r4mj4MopADN84KyGjGidGEddQEgd2A1jmHSJqzhVxGwQHed5SrLPpu2sLXGgeGeyQCtb7aVfLymnAuUB4Kxq",
  "key10": "21Qd5JPnsoeVgUwukACwohQP1W9w9bvD7dMdweWhztffPX2UVgwr5eQCKKWJi6pz5KKa1AVLVvcKNhvJJf2ma5rD",
  "key11": "3d3zrjt7dCp9EuLooCGyEhk6AhjcKpCwUqDZjdfMskpCEA78f8rxwZw6RFm5EiDHfuXwAWSNgqmXKwYSHKakJvzA",
  "key12": "5vH2Ww6Bw2rVbuWsnTfgya9R4LiTmBcd7sNNwC9K8g7ths65LjXqbwe8ZT9JcRym32inby75gjU1E4eZYJ2DgZnG",
  "key13": "XmD9FieBnYGPVe3BKAQQSqNrUnEH7z92dk69zLg82pEtYX2PRZRBurrJXsDjujGUZciUx5UbepN178uiPSVkMyS",
  "key14": "5jCxo8EKWi8sLB68vyBKksU11NPbE5i5fi6RuQMzCgwLpaRkQ1TnweBBN5YiwuFamFom1ofM9u5ochJpvCsb9vs4",
  "key15": "2oCneRNk7mTqvCUQ6353eaLuS3GsbRm9kAkXkz61quL56vqaz2v9aSYCZAmusnvhjXteegGMpE72VTpdt2xD1She",
  "key16": "67rZA1SJFR4YguPLhUBgst8xbF5foPLHbTMM7u3GFRTi4tc4uRDd8MFw8CkNvX9QM7zJGPkTTHUuq5seTW1fKuTD",
  "key17": "3T3t19Yb6yFmWPzAnPHRDH5K9y62ThApxEYqzRyFU6XxwGrKMdHBt4UKyRKHdPdoEWqWN99rCLaSVCBNbG5TAUsV",
  "key18": "2ZosW3vaDaGe1oiUvYTTm8sFPAo8LyRva7FUQkJ7qh6mvwNNKagr9XEpbH2WPDXUCRtFUGWtbBuFGffFb8Scwb3U",
  "key19": "omCwybD85F3EyPR5pimkKSBiv6LFa8oS9GyfFwKKh57SifXoV1ahjMu7D8BAgU8infbmmgg2xFkNpagHBd66BDi",
  "key20": "dJefabjcQ9oMEv784ffT9h8NPr6rTdVY1ABt4ybPYzfg5LF1Nam96JiWQetUn1ssKQhDKCQK1NZeT1FuTe1GxGr",
  "key21": "5GvxKUZTjZxu5imHp41yq8anKdy65SzoGb5P8TnEAtX6hUdqzjbcKKaM7TmpFBzZQSKQvJ7v6XVAQQWF5ngTDgoZ",
  "key22": "2GpUrpFedHdCKpgjQxPRnVqHnErT2nsNTWyCgaPZQZzLNKmdMd6NLPSHHFsL3AUc6fQu8jyDRFfdfj7NCUwgdbbT",
  "key23": "5S2o5QaRr6cs6XZc3hSc1kUe3PHTkABH4sAt8WJ9858DQyMuZwkHmJCwizLKX6YgrMxBvWpxuM6mt6QpUXeS3Ljs",
  "key24": "5UNETGTAeC3uMVoj3kuC7rKj4pGWssgQ7n6z8kAX8YE8egfyD2qaorUmtorfw978ZaJwGG4FACR93gbKJscbdEw1",
  "key25": "4Tqp329qHMHgjwc2kDNLKEst5WCHhccKbiZ8Qbs8pri23bVC6tEZLrA2BEbUbbLqP3uoJ37DMdg3rPC8wAwCaAPS",
  "key26": "5VHWdPbxMdDuXSG186vJyTU5typSCmGpUZdsk7S6abHQLhqGq5wiYMZWHUVKxjUH4eC24rrupwzsYfmbfSprj3BA",
  "key27": "3gHqFnBrKoLGQhZsoeUCXHRQ6dkohGVWVSYE2Ar78WTwQ6ShrWm9UkUWa27AYhrzaEK3pYeCv3t2HLkwNTKNMizY",
  "key28": "5Cm1oZmL48NwLA4Kg2xNmmBoxabHT7STqACzb3dE9EDt3DNacYccYdPK224brjVjcdWZj6WHTuBB8y3j3xXRkC7t",
  "key29": "3hFUgM7w8AzZn1o9XB1ZYhNYcHBHmaHxNaPzkJF4ZkHxof4gLvbA134QmAGBzoot4atuwqSEhvUtWb11KM3rTLoh",
  "key30": "komV3hvhDqzMH38wFw7teqDW52ftmsoCyptNkCshcapYtvHbT2LGujbXnz3vYbymmddbfKfzocKqwE1BP4eyySM",
  "key31": "2Btdf5Cf9CVp3y473YVcRaFBPtzwWkbtx339JNDitjSWSsCjqkRdbtR97bfwedRoQradrw8gbsp9AUNe4KSQxwhD",
  "key32": "3K6yVMYFGLyW1HemXnoKH5LLvnxUzfoqQY3XFW94RZDVebfwPge1B9XYD4SE2qcmVgsEvN7fffrX2bNLijCpy5Mr",
  "key33": "3RdrUxDFRbf4Pft1pnyjauB51PgBmdNt2mAfVsCTEF3qpK8pAwMZzNetLBaVxU8Wqwt3VDFzqwZWJVrzZYNHYrfo",
  "key34": "zD2p83zuYqf1qyQAJeL65oGaUhehDLegYwGu6LghJLvEgyVFKE2kALzfGK2yN6QhVhLoohpU4Hw2HVJmjKYo4hD",
  "key35": "5Akin6GPJ3ZB8dMjSDYTM6jWeHcUX9pRxmP1f9E2tnxnSpwwRuvkMm2CVqUyE9zxAYhAV1KkCoStapto42DuzJW4",
  "key36": "Grt4WKPMxfDeDRxu9utaC8juXeLuU7BjLzXsfkxp8W13eHDjfbD7En9XsyEsuPrX4gSB8x4JEx7uaV2D8SS9efQ",
  "key37": "3sGfA2wVN789V3M88su82Bd3FqVRp8h6FVnBCWHq8EkFEnDur3TyxYLpqmksbB2ua17MH7bbFeDn6HxxXFM4qdBq",
  "key38": "4Y4EeWgeTJmxrnPkYKWKhagNkRGmpMBdqgurRPcwurHMNqqaYAaNMCA7yjgWR53fqtBqfKkcrtiFKDwnphdW9sNA",
  "key39": "JmXVEyTW86gaZo1k9W5U3t8iEaonX7Asa7aQbhdifjti9YyLSy2dVtimSQLu57iLyN6vyFSYzaEi1EF3kFfX1aG",
  "key40": "3fT3e5g7gawndrGvfBRa65vxFChqGBUtbwwcA6WocmH3JfvWw9woTc1EvAu8iL9gaC6AvP2cq9PJ4by7seKDiSj3",
  "key41": "5GQ9HdETGFd5H7NAod4dFngygM3aZ98Q3Ur7JBSxM8G9DZ4yDRGLVZJjfX2XBZbHSJMAN9HfJHPKELKQvbwqV9MY",
  "key42": "4E6FeRjcU1GryoZsY6iYmMeRqNf6Q4DuppgEZD8E9VssWahUYDL3fYLUKFT7jHXLKGpyWRRugP3x4tZkChm8dinT"
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
