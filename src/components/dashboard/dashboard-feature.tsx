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
    "5qvuFyrrbU2NwoRg1zvfXKi1N5zJQ4Un9yM8d228rAGvhSMDmLhFZXweWCJJ4P3dWDeaiZRJrCX8RBYSZCn2vwuY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wRgsNF51qa3se58asptVKWJfae1MZdTD1ccAJjuGz6yFf4Tr4HnBAqSyYcRCXNsk3MW4eF7B87GqyP6zNcKVXC6",
  "key1": "4tfd72wgdFVjvwJLkXspmHno1EtPQimbMBP6zoSJANGdziDsd8zdbjC1JLYAoy1GD9YUBDPkkRg2yV9nj98BNSZj",
  "key2": "4DNkBM9SmkhdkkBPNiAGoeUr2vz5mJRK9HLihSoSmfW3abNHYwQbSfpCnb2wrA2TD8vyph9HsizkMjchhxUssukX",
  "key3": "4pVXv3XSKFYoMxowabYZ7Kgy777fqSrk22TTE7RBxMpnFDAZpi9kkf99D5RtbAmwWo3EMpMRGQTL53QbitWF4a57",
  "key4": "6pSmXMgWsrTtGeUC9zgjHYWVeNcbuYW5Whi7tqENJUPygcyUGsaB2cBjuYV8bzZ5KGQ4Xphm2Eh7ZRcsJFyGmkH",
  "key5": "2Gqu2NoxKDTKeToHYHVe4h5LzEc3REvnpj6YXtu5dYjiwSTAnym2DjDeMXVLebyZMv8AL8rdj88BbCN5tspFRMq3",
  "key6": "2hP26f1dexZAsD5tKy1thvjj7xBBZ1tgXWVVV1FWCKpApbcnAwqb6wrfieAfgF7TjioP2JjjrZQzDQFj9X856kuV",
  "key7": "3WUcthqBtLJkr6w6weraVkhQgAxVXLaHMNgpjV279FEKJrZLJd37CnR7GEEjgeHACuGjQ6Ab63wkGAAVHgoRGXzS",
  "key8": "3okHAWFAdSmUX5a5ybSisGcw6cM2SBQU9vf7NfTcmUTNDYLvs8o2i3QZ8yaQojyfQsYDAqMAA8hLCQ6Y8Cq8oYii",
  "key9": "3FqazPsRfTgEyTptiUbGN35r3MTHGLZitU4MmGGCg7DhD4wAVdoDhfYfD2EHMXUaZGz1EjFR5Eo8YQicxfepsFQC",
  "key10": "4k2qw7tg8XN7pam9GD5PrKKPoAeUoaXzej9kkYJfnKsW31MYoYrojLaFWt4YbRCnU49tmYqYGGcddoCzbhPz3zbm",
  "key11": "2TN7h2RQ8R2Em5zMj74YrAEbA8yGLpptuVgmjpMbdio3dvuBjZora3nVyDmdm1Hbi3PahMQhcDDmrKgf8DcrfC4D",
  "key12": "3bGVrC6omAy3F4PBG7uMJKRk4iPCbdPXjkiuJ3EmtyhbBVrP6QvQj2QZmi587q92KmzLVuBFukt5YzaHZrE8T52o",
  "key13": "3rDQVJYjp9hNf3HXfQ3ATX63hZSUNNtttYX8z7GuDUPJNxFm5ExbLnQSjF3F7xhADbbt9xctgXeaNMUPit384sCx",
  "key14": "2cod3DFB25Ki6A1Bsx8ZHYCsYNFk67nnYj9GYyZS61uwNjuXQQNNifNgQAt2JQTDE8ApaLi4L4Kgq3qmsuP9WhN2",
  "key15": "36D1YC3d11aw6gDEhacofjEttAutwePH12Qjm3gfSAmUpRJbZ6jx7V9sveBR4msyFeJwgM7VVK2LP4Qi2djGGZJd",
  "key16": "25E9ahKktnb2M9e1cgfihRyFT1NJrnehJjhibxPpAn4nYjHhPXfTHgeqGMi8DaMenmmcyeMPrpjJPLgzhpNLsoYw",
  "key17": "5abV7s24jwKtBY7m1mjayrxmM6j69AJqAd21Cz9uFkh5dWqC3CgHQy4hnmzQGJ9zaKLXpi7ekYtP5rAS1ynZLa5N",
  "key18": "2Qumpe8DKEsVdqWJSPhJxawRTdEeAvYoArsEvUatcQsZC6twRMuwe5c5vVezd2sLgjoR8zhFFetT5Z4wjqJTpKh6",
  "key19": "NJnND68dv1ouEPVJGd21WSewaMHuCNUeetscbMktTuZKHf8xfPwo98Mh6aEpLfqGLGJebmvSJKSdvqg3XRtw1ES",
  "key20": "4j47Z6YJRR3BcMyFNmn1wub1muQALuJsVGEYxr1nXEX8kik6WNweoZmaPkVPKKchw1RqLtSibFcNBk97zSEb4tR",
  "key21": "CZMHmzAFyA1RSvrRdth9geyHxUxwgcqg3Usfh5eV9zyLgP2Z2yRDcNwLbustLTEARCx6Ey1i1zhcC8Cxh4CRjCv",
  "key22": "2HTBMjPkCZAUvpykkn4m2HFSjLNtoNUafcozY5c5sCmqrxhseSV7uH8mnyX6eDYfM8teMdMCJUnEZSESEJnmP7t6",
  "key23": "57Aw2WksBaT9cH2c8QJEjkjBdRVtxSquxZUxcy1PsRV4KPnip6Boq75oRj39nPNh6TbssC96tdNEmhtoFyph3oHt",
  "key24": "1WBNxrKarnuANt9zgSRSwuwM9ShbFc5AWuwoj5FQAkkgXgNZHn4NdS7vEqyC22QDBBfjy3DdN81BQ7vnG5ByX7G",
  "key25": "38xGv5xM4NQWdcNFLNBgHKxPF3GDGgrjai8dZXLgevqaFEZ8g7959c1qLDyA96JoG4wGzbmdAAZxGQqBuDwwsjLe",
  "key26": "3gNWKud3CG6DSE99SfQEpprPPPBp6pt1GvxMF4ZSn5nzisnKtCUk4rhEwgx4eatZVtXbENBgByZkp2nxNUeN54yL",
  "key27": "5kaM1NAEHQa6JMdnxxEVt1bwHFkKAxwkAJnDKcwTtHjgCTKGUz4iuTWxrt7AwZAAj5noNM7Qd3vbhta1jSWXP9XY",
  "key28": "3HxYhtzoguJfs92a1gF9we4fVS6CAuvtvk7fZQDFRyGMwYRyaRsa6hrXtSUwrdTgWmUyV4rDRyx1t4SVt6CVhpcd",
  "key29": "4d5iRNXCyXJQGCZ1QGdS9sVd5WckJaLvkP5RiDGWuzvqEheh7mxD6DczHhfrUZ7JQqwMnTHVtMeX3v3YbuaFXLWq",
  "key30": "28erEi3MBfK1AbDbif4xzoC53mYT2sRmy1S3qfnkGDMzXhY2QU1g7Jp8MnWcvGq8GwyDFUd9FDAi5bQMafX2P9XM",
  "key31": "3dbhyjHaweHSeiJoMTh9J4w8BxrjynuzXHeb7yAKYpT244BzQS34GsBmUZqTkZT13Hh1LBXWztBkTtgDYTa95qLr",
  "key32": "5ovCDFFNp7Kg3s2Hv3QpEqqyBa6eccWmzogc4GrDkfbNjMqMWE52qRrFY1z6MHJT5ZtBfWx68r8gZ5ToyeZbrZHN",
  "key33": "5o29cPnhEyo5kaetRzCp2AXw3dNSaZ2AuoaS9fd1vMRNmydp6GXBmzd6jaLTLXyDWGDXoV1fUX8cNHe4ZuCWCiby",
  "key34": "3YstjaHsdpGvQo3jrPXZX5jW4ymZ4hzaTWNefQEBckSuXU9yBXiqwXY3offhmNWfjDd2HQ7LKbtwKT4tGJShKuK6"
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
