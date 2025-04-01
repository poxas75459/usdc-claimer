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
    "aGHEUB4J6NBUsfAwHckLtVMsR5ab37jLH1i82Yn1dzhU9XL1wQQzRLYu578bTmVymY2ZYSXw1PWEcVn3MBE4ghd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YvjYqoArhDoSPWfjuG5vv9BEWsWyAWjkQ18kcWEtiqePCt2ThQDouQikcRvjZ6EtrTyffp1ZJGcCVQfCaKEe5gJ",
  "key1": "2hHUHkj45RmAjjGxJcWj7pm5UiCRvuXVfPF3DdxR2TbaJNSR86AUnMhqGdPkKc56iWrQeZSYiLZFPCmzMj8FLgN2",
  "key2": "5rJtwjwmoNKXWxAbJSBpzcMzmbweUbUMu6r6RtFBVaBi4yu3FGGYJDis7STfyCmdyEXgjgciUuHtqntx8UPJYsz6",
  "key3": "C17ewDK3K7AYfREpqRH6oGjzxiGvb7RxKXKWqyF3VjoZP8XCBxcrsMC6exSxCpWTHk5Jpx2HR3KmFPnquVPwCYx",
  "key4": "5EaoUyPkgt7J2RE291A3vbr4c9tqMDswkSEGeG2u7WtS6WyJw4z5Q4v2XkqfgqyAcMeGTbQgguMpabB3JSWiieFh",
  "key5": "oYy54EVA3w1se85vLNGNXWVDB8rENbMQjEx7kGPXXd1iD8UYxHyc7XF7ksViwoPv6SUpqAT2aYWmy4ZDEuMjjsy",
  "key6": "4hWiykf2BFhivaqehxDnUUqGBHy6F5hi1jPVKk21QqU3sU8iNZH9hq8aLXQZhJedrimsj3TNYp2sTEkFvHRoVDEJ",
  "key7": "5Q6Uo4onREYKyjTHuLBMEtgdh4nTfzW1BD4QCJpt39LasMMZ6SnhbWZ7gRmFuLJPrTNgXgUHL19B6gm8fA4zNuon",
  "key8": "4ppSQVZ8TXvjxtaNwtczLxHbdQn4sTe5PmJPemSSLdg9fLXFQzjNj31oqwFtjcEp1RVkcVYmriDJHeXhJxuPzaN4",
  "key9": "3FRWntsNJPdRGgCY9y4S6dT8c55do2vkos1nxqVFo7hRG2A4RAvyqhte84HWvG7mcJdRiRJG8q9ouSBkNwFyaZEG",
  "key10": "5kHNVbKFBALNfmMbPB5TaVmngz8q9WdsytsDGaDmantWmfhrSrqSeZ9u7HkeiwtqBHN7rU6psEt4WEb3f72BDbKx",
  "key11": "TUKBbP2GgKYqg6Y3ayXRiyESoWV3dKZ3T4TpQeuP5PvobQfjVpVXqKzQCkiA9dV6SgZVy3NCvhZ3tkp2enFvEMH",
  "key12": "2W463tkU1C9H3de4dqii699LFej9keySByLin4siwqkmPvymd82N3mmjRAri66BGTYwFV9YybD9Ew4cdqx86vhaP",
  "key13": "5YBrBSgSKhFTbCqfReo7AFks3qaX9uk93aAG9Kc88uY6JPQ4baKr59c2K5bSdnaXaX2GPrEHei6GT4qipsjvhJsV",
  "key14": "5F3iA3Mn8GAsxMjaYpYDSeAT13n6FrHehWvpfHyvkNWLZxQ3vvMMgKRA55xDALAEeiBZZ3E2zqXGQHUngf6j2ddm",
  "key15": "3F9fQTz7RZAuxYZvLRDDrxuGemtTPibWLewG65RYBAwC9NX5MWnFkTuRe71SJNZ1dbEMmimkctPCZ5SzFVz6gnv3",
  "key16": "4BNiVm2uYkCtNfDGeKg3bfUf2EJA8nt1njMDQgLSeaKz48ye9nzVLnysnoPLXDFvux1HAp4uKjjb1XePpQRnDBkq",
  "key17": "5Kby9cLurj3ERiMra2neYdkFdrjCJ32DnaWcJMzaKLAn14qXxxh7Jw1Zu7J6EpEkAfxW2P52U3WsCLpcTivTQSir",
  "key18": "3QKa3XTzW1SmGUmz5nZJpNrooLWLnVj8pRNnA9YRne6oPxxdyzqrJFQv5XddDNm3UAdV5uvG9yud5CQS2RVxnrb3",
  "key19": "4tPcxu4h2NKNBawVsZPKMuCg5qjVDkH7zcdKRXbq9f5eFErFMDymtFWfHyYBMkavnD7TEVBwf2zepj6KuTdi4juZ",
  "key20": "2iQtswMkJbhtGQANCqmFXTssebHTWHtyFyaaZNg4yfMCsEe6BhvQP6Xd85ek8DPr8KJEqikzzEbWEoqUtogBWgPW",
  "key21": "48RSri7ex5iuDpAxCtYv5FuQxGnDZV8nxs1oPUfZ5Gy85DRMkPw2BGXnHNtUMMNpiUFwvJX864fh8tr9ADFB5TqF",
  "key22": "5H5n2HYWSmPXAi1e575QE9CsGZ9dpJhk8SJUwPnbuRZSECjaWPSUyGJMpNAJtd687AYPRewMyNoC9YyX7rFKHxPH",
  "key23": "21F7RkPpn4c4QqevpWf2nesC5xTsnyUtP2QEsqeWk4VyCYdjHrjas6VAdrUy2V8UJwUVpKyToLoesMBHzRZSt6hd",
  "key24": "5TCfnBGpEuZHoh5GhsVViGXuZiHe3QXp2VwydbPQjLp7ng8Lhjmuv3NZdydNgErrCE3aRi9LbZtfKRK399Yr8x1f",
  "key25": "HiPjsfBNdnJpNfDWU22uAPQotwB27wELCZxXbpNEQtBd2CnV1ddXjAzLXQjQUZ9sdSAM4VfXxQqW7VE3pjEuayr",
  "key26": "2mRU6on11GYrgqpjRAky5hfr4t7X7DstHpLwupZZ1ZbqeTMG4S776k5dkvq1APQYEHFHHywXf4zn5n9oqEsCoVxV",
  "key27": "5UaaCo31YGL3vkiw3t4muAotrU6zix271TM2iGCh2roYFsgPagPyagke46aPNJAYV2x6axY9kAqq2gsbgsHNL21b",
  "key28": "2JR8wfKFBCnx5wLrnpC13tcGgfGyXAtE3DZwudxBkeDAviBHkKkbZBrBrUJwth7VXNMpVmt73vNL47uaqeD9YuBM",
  "key29": "5RrdkkxfMqQRJJjckRVDkVKWiewYgiQNaWxE1i6TppKKJp9SrDLid4GtKoD2NG9qLhRiTx6KxznhzP3K1TN88wpM",
  "key30": "51S2DWB6Go1z4cjNWZJtMDjxkcf3wqo7DTgGkBtp9Po5kUZ3HGwuo83uY6xVAXVPefjFrRarXHxEp79hh3qZqp9n",
  "key31": "4VhvXBbzM6x189z3xRkCAMKrtrTYeHtY8q5h1kfoHpFbYUhjYDUXw4xNrUgkyZkujuimm5zdcBqJiGFKrnVUETW4",
  "key32": "dMF1u8zcgQ3fCmPP8nwDSqe5o4axu4KvcrnS9VM5VZMPATpWfNnrxSoVRVoBbNUaEDWGLNrCfeDEHbyhkhVWSKM",
  "key33": "3bjgLWtLS2yFTVZUSABWds4Ytzc8QUnJEbFGyUhfhhFhTTYUGpKsK3wGqTj6NBwc1ZB431nyZkrDND5HXxbct9WX",
  "key34": "3VXKfyG1qjTLe2AZ7MhDfNCYHc6EcDdEMq38NqFmzCmjkc7RESCYQhqu1RhQd1EkYMufZ1SKmhEuEoxjwME8skqE",
  "key35": "4G781tFTdXdt7WpCykMXefwJB51Jghwvmb4BmtzyojFMtz6YQJo77QPXn1rciHN6Xt9BcinxauRY2DNupUeRAHt5",
  "key36": "32ewCKvD5UA56hh5ayaJf8bd6JdXr89mzmvZoLCvMeAw7ynyLEaU4P9wmjeHeiAvCVh5WtzzStoo6hhsSGbu5vpt",
  "key37": "NKAK4XuWVkvZBFh97RLCLKX1LVVrGCLVDinCT74MBpADfj8f9LjdJY9y9UQNgNTVm9AiCynsw94fhLNQrmRq1Fj",
  "key38": "22gcD2N3jSDBLX9XEFCFwKFFH7SXbTytKGCVTL3ATHqr8WtptAuTTpN9UDZMAp3AZEcjm1fsCkiNFjYHeMfuFTJX",
  "key39": "2Qs3Jqu6DEPk3SNSyfj1yXmB8wkGsfwmnyvFyCaJRQiP7kcRuSvVUAacSfK2G97NHL5ZtBK9vcvKQ76XrnMJJHSs",
  "key40": "5if7BYpiYig8NZYKL4VF74ZfGB8R5wjzXT2Ax4HfDUzYRMcTBjQUossNfnBrKpx8exb1p3q6aLpa15dGHVKZRxZg",
  "key41": "48BgjweHtauePvfV3dzGqir7VBVQLZozEyD8fzGnZ3Cd1q3gHpzRrBrsyN2Mitu8eZy7SU1eZFkTMxEgwPeUbY9J",
  "key42": "sthiy42RyKnYUqTsZNPPaw4zAmXrvgDUeZgntYdbDabozVFKdNSmQW4xfq7mRRTCAHHGcSuFgoj9vNDvViA2ss7"
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
