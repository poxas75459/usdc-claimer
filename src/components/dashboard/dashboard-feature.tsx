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
    "46UxRtN3TuWUXgqgKmywZKePzui1WstDEuq6yXknsQAXZ8hAL1ivNG3kRVQMQ8dUECjjETw933o49gXSGd2L7D71"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VJQg8kFVyz37tZ7ugZgy2aiz7dzHef1zF5P94RNgt7YQsNL5c6Rbw4pPcTGPQ8hV7SM39fdDSzBF8PRWXYKMWED",
  "key1": "YuSr3xKkXoDDjZ7ALmVB5MF1WhRVPrZdaww9mMcWFqzS6SZamNmuy63J8tyEM6ZcCvk9TghG3EKf4YEHYjtHxzj",
  "key2": "2NJeZLQzzZKoQZsNjPXhGgpiLbVmDswWf17yHKUG44xkW9tUpmA7odo7tseMTv7uLjeo1sAFCtuEoJpFFb9atRD1",
  "key3": "22R69vcvwm5xR4BV8EkqwUkhz9MHXdApcH6zs75ZcrTeFGWSPePwFyge45tbUV1PtdUJrGSzL14EyoJfDWUfjcMt",
  "key4": "uwW3N9okJ6EuxUY1nJFGuiFppyRVrh1PK6XLsnXL1TUwGtE9PL7frkHxDvTUyECQ8KpJ3gBJM7YhqEq5vxSeFH3",
  "key5": "2uMsCSGyNsHtRCMz6dPJAHTd7GBVcBxz9kdugZDdjH2YWxHgrwdfsvafCpMK8vgEgEcWrT1ePE4opri25tiHUW6K",
  "key6": "2WQ3UAgQjqaAZZZC7hrUBjMmAXb4EtdzCoUjxiWyiX4fqvpfqaSq3XqjL2apq9vhhWEc1LKjfYKS26inRGdm2E84",
  "key7": "3e4ZKo7SXAtCAff3K6VdTf13gLaAf48VMhokQWb1WaEL7kn3YaCn5yzmPXxBLH38cFkaoJmKMEz93Bdwb87pTp7P",
  "key8": "pjCYBGah96HqMBCvm5AxpFRsHcfUcrLAbaQepg57fSEKxhTPrGqwB26ApLqnYCNhKrxdRtwRDTjMQa4XvCvfJ3y",
  "key9": "36uWmTbmQDN2o34thLEwbVNj8vx4esVWf3FYHijMjsX6ZiuyH5wLaPpmSb7Y2ZeGbpjn1ucKfBk5DF8Dq1RZKUZH",
  "key10": "5dYffxHRc3U5NcaL3aJgemjWsG1Ld2BoVLCKZ8eXYVdFxhS5XJrXn7U9kVX81AyM6wg9PPcq1mZTbN9m96F1Xh5z",
  "key11": "4dMiGbBQ5pNEycGn9YCPzi9xZ9GWd3W5TiNAtrqbZXAZMjCk7ofuggXUYVTbvhe1ocJYaoCS3WLJNgGALnQWjvgx",
  "key12": "2a7tPDrDw2TRLDVynxvhybksrBsJ2Fy8qFM2dQ9MxvnNEZoDDEhziRYUAxJvUj3R5T9WWmyaQ3PrGmQUfv87nxfM",
  "key13": "4s1Ld7UB2Vnyh8vAm2x1DE8UGMuN7nBCB12ygbzTTmKVwMjBbGm2DYJjfedb2NmvnZQ3jNeWNgCyHpfwCrWvpMZL",
  "key14": "3q9WCwYruLYeWgJpnxJycprETP4q7BD7zHn81eRfeue6NJHJp2t2cvd74mo1EMkkTCLmEXrk1rSK63Be3V9ZDm1z",
  "key15": "5LyCNSWdUqXEdLp9A9MVyYh1uC9sHK6EEGMbUfvzPTmimX7Lpr52McKwC149CFvwmkXMb1xtjTHNeyvQMtFTAG45",
  "key16": "3Zd7xF5HDgC33qnEyoAa2ouc5yLPaaUUnsJfo5gNFPYqGA1BSJX5vpbqgxJ2ErxSs36cMJs37JqgnWghcrpmpo3M",
  "key17": "66tfLYvXMSGqfp4HEQD1FdfieoaKC3vn6NHqKt3cqxcZxb9emRTwGoBRLrBJS7HiVf4sTWmFQGa5ywKAw2k1ZqjU",
  "key18": "312Tf8cAuM3w7ivLKvoAqqZvmjmQBLSkysABBzEVEsXKAc8rUFr9stpXTc7v5u4FNimcCkxF7aXYUs94MjQymAJW",
  "key19": "4MFK2Veq5MQZY6cuPsJocAQQvgMga2PwVq8XNi6JT5VV6arUHxpVNPC7CBQTTkiyFpjHF37iZ9xqj9hRGPwZDGpj",
  "key20": "2fT7ePB4t7Kxg9C9cVHgS5L3XLp76JD6rKoUGfQ6EnNypF4z2i47u4KMvssbecg8DVMVEmCArauemsyCWVduND6q",
  "key21": "2CX2q9dKXqCEBYzXxtR5HMSDvoDMVvgj1G4dLE4UHG3GCHksDgHpBFiFx6keg8HZoejxk1mGD5uWJ98y7fvVkSir",
  "key22": "2zsvuDaXqJQi1ZGzeVHVboTw3BFsEzjepiR6VLpaYj2K2uFkoTAbSLxn4RKRieytuUzvB3YU2Hf11k3YqNCGLkxa",
  "key23": "5J6vJNdorrHBimZ2DJKsLevuYJHNLYouznbjy33a7nT23RsoAWT8foiNTMg3ppjmdSmBNKbYyqDdNaotiCB6TBSN",
  "key24": "5yLaAy5Wvj8W95MLyzmTMiDWk9joJa3UWxN48AJQLUKqnKFNa77prfsxK4WBHR7xxpbjZrE43XLeA5irYDbqYZiU",
  "key25": "5ozWtZE5bMZx7uE3TPUWTduBYfps9BccMU6QsU1xobKBbkWkBaeQgzLmX7J3aQ8x7xdM6v6kjyf2BQ3yMvLXuJTB",
  "key26": "jm8hbsSmWoTqX8YVQVaR2oAxLKHYDARPhtEtU3LT1DmnSLsYwT4pknSfAVcshEzr2RBWcMwSpfUX97KjmSmdDFJ",
  "key27": "xTW447Go8yA6zRSvaoiEqiGZYrN7shJ9rPMRvdKxgikkyR3q3XfJ1eGRgNpfLj3vQU9H5rZLgjhTewg3fmvvjWe",
  "key28": "5TZ47jcd2rXzo9Bph58GXNyCy492xie3t1ULH8SL7X8ovc5U5tJ5QeotaYwxpQuy4vHBUg9rS3ct9HEUbFmLgrNR",
  "key29": "4RtTTt39eiw7dBrL7ABia3Pva9KnUnYio9BgEohLy5zQ2fpsdEb5DdXWSMsfML4Ck9PSmbyDQSEXHxEMqQkVFUhS",
  "key30": "kwAMhQPiTygg4iaksD7gbgLmXeRdEXoXuVjreh3FDHMT3SqmxZxtqe1nggsmJHkW7RzvzXaUBuxXZLxharVDihz",
  "key31": "4xYUycyiW8Mo5rfiVn59ekJvhMBG4Q6tGdooEQSnbmxV9XZwoXCu1LZcf9QULQqVwPd3U9RQDBugz7aYoQqw4Sww",
  "key32": "12AFcBUZjVwnbax5yebjZv5sLthbr3FBSac53pbzgLm3MAS1c4qnMiGUVubttR4QuUcib1UwYsogTXcivJRyi5Ui",
  "key33": "4339gdsAG5xco8dkGX67E5nuU26xh1uHatp67LPrEdCmqbn7LhEiaBhpF3XN87md8zMGxqHZHB28K6Pxrsoko9vt",
  "key34": "3Pj3cXj6W3buVepKcrKde78oQ3rkhFpNvTTjt7FnxTpHqxgqUfvW1wiz8P48CHy21MaKXuNpCNqcHbmth46w747c",
  "key35": "3wu5nbwBXqeTKWtTPxbCsFcbK9UutMunEiWYmWSF5tW5Hx68LKsDTwD2Ab6CAVYzdMSwP9EsrCSvMffiwpJJp8v2",
  "key36": "GEtwhmmjKP3CmRUfNWcStYvqTiSsakGsSc8p3tge7je6GyTm45277Hnq4UAEXfLBmQB1oR3fSx6hLeVt7ptvBAg",
  "key37": "GEnekWGGAi5DuTsB4H83c912E9H7XugyTWWPu1cb5HRhx7fVp6jXqpiLNWj1STUUmKJdcgfNmRmSHY1kcV9VZRC",
  "key38": "37efWuzSUU1X4WELPcv7MeWpZaRMVnS6QJP6gFW9zZSHitGFvsHThPkf72rCmTiC7ZmqJLbHjHAn68txgy9m8s4b",
  "key39": "3jEYSb6ARTCbNzndNui9XfhKnPEEA5Ww5wYhcE79KrGaJBEAt2mKvNDuk6ZAvDDtHPpCX6n3SmETZFsC6pDw3j6S",
  "key40": "okigq1LkmHRsrBYJq6moMTPARPpAxSYVt1FYLKgSh3t6FiHdAKhp577Xf2P1Z426Zcy2D3SdpBjA7iAkmTY2oYK",
  "key41": "3Hhgjvo43GvT7vNxtZAYWzbAXN95Cft77dnsWEgiV57GL5hgYmnZWLw2m9JehfdLmv1hYChi6heckR1yDFNFXjiv",
  "key42": "44zPtEb3kDx9nh88LwTEJKL2gosW78Q4cQmoTyA3K6oXMdcnTjjqQC3NLnjFEU7WKccv9JuKQGvDx4vdHvv5hWTf",
  "key43": "4EhX2wLTACrAtVdWAsJnpWjcSHhxj7Sd8SRnvWZSDVoDVwaoXn6fRXFx6g8rBZKbzVSRiYFnfdtb4irvaGGEhiBb",
  "key44": "2LZv3Biv3cnW3aUNrChPzzzHR2MJJEHfFKtyU4DqrD86d3gfVhkRMzthkLmZ39G4yaoqvuh1rKkaGha4wAgcPrfh",
  "key45": "5dsK9jfQ1P4CRgbbDjzfadMXCe9u4pcZngQqDon1My3Py3KNToU6Fzck3qwmo6ZSUXbxTjpGnaxrNbmZX8LgFPmB",
  "key46": "4BT9Dgzs3Zm4gryRTCfJrf1f3BrgXiEk1ejPknZCHx5SZAKd6FdL8W7sAs7gstvFvcJBraJLEnqjVZujkVMACYsH",
  "key47": "5Q5kGtgoJTtwVPjxpm7mGBrdPbfauTt2J6aFo4gmJde7cdhcLSckT2TYy5uts8TEZinCTSqCXKeLXHEnf6SBGaGu"
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
