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
    "49ypxx5JV6SexBLYrkc4k9KKEvNBqj3mg6Adr81SLNTQyhABXNUaMRbSjg6ESq5YR5rr28yUrmuemRVHHDvu6XMA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vKG85N3EBNprLk8kGFRdmcFYTmmDPVMHhj5J1iy9epLtGuKN3sXy5gtPaGUBJv5Azh8oKgfeE93aJeBS2Dw1WhA",
  "key1": "p3X89d6oGLQXMnGzhwx1Ppvczm1vFVpgzBzuaLcQgsg7YQ9UDGQWpY1xYBEh91Vz2BaKnXJET9fuacL77c6kBcq",
  "key2": "2YQc1YaGratuSD436zfAKDBfY7hRg5uqTGxabErWBif2gNtxU1e9hudkoAgmn2v9am1TRCL3usqmk5Wmx5b3rW6j",
  "key3": "GZHX9uTFpkpAt2vFLW4gPjNnsm8pJ7e9GESprRR6ZDFFzGQThQChvxLoNXvmeUdJNkEKtmfZAX9wn6ZPUXFcZNd",
  "key4": "61jQc7f83ijf7YmR9ya9mNpWyszpAqiMKqAtkrigkQuwM9A9cX8hhPCiH7KJSNZZktZWwGJghZ83eKMHbURcoe5o",
  "key5": "k246CTBkQHHZ7H6woPHvetSp22NGUY6s84UeUy8huw2V7fs4GoXzvpjGBT5wU5ciueEyCz95wfwyZGiPD92nRQx",
  "key6": "SdwnHJsUjSiSgutQT3yd36k2Vq3fHbfsMZo2kuw8ddkSLdfeDa72QkQCzudZ6159UsQgjyFk5GjNiM68uWZbDjW",
  "key7": "WtgSPocv19rNP3pRcbGKM4bFQwe5nervkpko95NjSy3mSXszMXnohEGePd3HyryhNd5sBjr7MAwL3Zy9FGsRTPJ",
  "key8": "5MWPeuAyMmbqrC6Naa18syUgwBsMJwgzVcAy6P1xzgtB77P8kAdxUeqEtBmu9sjwwKsZPDXRPTg1bAGo9StheL4j",
  "key9": "2UwHFJVZ9VCZs2yLeZEKQRL4EDD54QPBbXeDrpMrVFBC22E2yK5PydDmPH9tuaubgkLkosxtdEphrwXbGC1JLwhQ",
  "key10": "3qNNpCAHtgMFRAYwKcUvis9cbNo2JD68VwtnCfyQzewDvMyyBya42pVJwZtCoyxkoVzMuPaguZMxKuJBxkSj6XCV",
  "key11": "4JfPbYMtcPfYBzNzRo4Yhbw1vsLr93yetrzyugV4UAxRSTo1v6YbcemFAKRJZxNdi5XZJMg2VGPMPZNRKdYkBH6b",
  "key12": "5nTT4JME5u3sFqVcsm1NDoins77xbVF3QwzBGzNMXmgSr1EbgFMALH5v9e38bejMfydYXDov4QqWSVroWcCZ9Lbs",
  "key13": "5UYYKa4pjcsaNtGqwaYHk5dH9aGPqXYHtgyMgZfGtLEzHcfVZwxeUmevntJY8PJJNRvH1hs7kwgjj4PmpsdiMRZ4",
  "key14": "4c7J9oVx382TsaQMksN6PCzfcdURP6Xvb5UcZ4QD5Ss7St1g3gB1K3LwV6jvme7Qh2RT1u6rhMs3mMdytJ5wt5Cc",
  "key15": "2g3g7i9P3hWuAPsFbTG7SoiaX5Y7LkKrZWXsXs3MFeRW7axC5ijQxCzQ7MV8TWqnzSZw1P66WJzdAhJvEBUMfYB4",
  "key16": "5KnZmqEcye3FmFRsaqu8Sv2ongbkDutTLdnuFJVTWCyNxbVvwWuWP2kgEHv7nUCJFxW8UWAvUrMyE6LZMfPbQFb6",
  "key17": "gsYJqCySpJcuxo3xQ9uvbv2EWS3gVAVgE9ts5BZJazrCqFstmyaT85Zyy1wRRK4KEHxzg5zNRPYW2nob5Q722zB",
  "key18": "N2SMzkXr5utbADNoYYsYbj37qtTpdKEV2LbXwVqt8ankxp4JpdJpbdbjoXFV1gX2QMtjedHRevyV9EUpLBAtK11",
  "key19": "RidJRYb6F9SARL2gKLkyn7q4ZXc8kVBuRw36Sog3XYGukVzfiAVGkEJxJGoMEEdWMCVZRDc9cdZ9nQakQUGyxQ7",
  "key20": "64TnZHQCjmsE4hXCCExuSTgcA8BpBuEC5vmDHJMWnyM44x15t7s4XU2NGNjPKSDB7hgwCMMz3QcJ5LewuqccZKfk",
  "key21": "3UFVVj1NCZmRpW8ZXUQqRBRFFrG371M4WNGMLUu9dVcqj67PhRc2S8xC3CLNbj7UNzcrfjtHFj7ieE1kNrHpTXk2",
  "key22": "5mK17f7zGjcZtBTzie4G4PJUXkDmLinjjNKaHdQTjmizewCSz7CEh6X4Ax9eG2VzSepVRq5fXpK4zCDvH9WaeijT",
  "key23": "NDEgD8uFRTDm7egST2aFnjQdrGUpmvx8uEavt3FP8fUqzrNXv67W8T2xpmrtDqA4GSH117EBoKHwrFrw8QSM1Pw",
  "key24": "5qoLCpjwQ3tFYq714pBRjVh6AC9Sir1hXvvWT7QyT4ahNfuoaGrgfEwoWW1cxTiKEyHZYRtthNjtfKhEcY5TR5YF",
  "key25": "4xPM3EaBjYSX57YLG3s9MFV4FLiAAJ7czwPA9LE7KgcMP87TaXao5HMYGst1CZzUZRu5GTtFk46SRKwWxAKkV7uv",
  "key26": "3KCa878a4f3WC1CoNReSEp4vXCGyefQnugkoh9GViNUbePaRZyPFCvkwt9tAJzxveC2HWeF1WGoHcqFSTNyTBToF",
  "key27": "q1n4puhSNspA7cFUuJThD2khfmhMHLzsGJaur2p3LsoGX3VMwMLbLLofY4krrVV7fodCE7cZ2CJCFcjsXs8a6eB",
  "key28": "238CyftEVp47VpTJqfhjVPF4xpnJuTGiNd7Zar3uQEqzge8Wy6m5mKNoe9yiVWKqFNyvm4ZWZvwrnDRFxZDHGnJN",
  "key29": "4f9otvyLfw2pgnbCE1Qh5WCULr6j6i1DHU9DnZqCttuBWfZmoYRhZhWfq356Ud5bdvxE69oAZ5N91V7qbWLMdfdR",
  "key30": "2cMF1Vq1fTMjqVMuDtz7a38d7N5qACFqsiwfG2EWeanA6Qf37HWRWRs4EcLGfgr63UD3qQ35FumZ8kLdwXApkqBw",
  "key31": "2ESwAXqSDLBGc32ezD7gFwsPAerqpmkNJM2JYfkHaf13P2nhFWmbdbmgHoiE7nyMD1xy9xYgkL7kG4xRJ1hq4eXN",
  "key32": "4wm2Q52kCsRYCkr5oFmzmERNeXmFncQFP2VYbbnbhB9fUT31Jua4119diaqP2WmA7gBFYj9KRJ2ZyyhZGLTEFFsr",
  "key33": "5qtiRCPBa9KGY1ompV6Px4iEthm32iT7TS7M8uCAJ9JF9EE7NxSniNJWuuMfGYYu1x9q4FcgpnqvUpFxN7cFbFJv",
  "key34": "58QpnDGEDZqd1ajq4UQwLPvVntRPWz7YKS7Tdn9Br5xiu3idBHqgvHWuNUGWxC7gpQBak1Hwgtd38pWykaLRy9ha",
  "key35": "31DBRjvGELhwK7pWSmnaDSPTxLz5k7zmBQCYEmv5hWkPKz7obhjipwynwL4dPiA9nxMRck8PwBiopUaZPZ4GNr2j",
  "key36": "5McTzSKpG1JqFzeWi6XYapib2ataK7WgsbQSthc76HQ4imxLtjcBjyjdwYsYHJcDU1ruzYJshyrCiyVhof4SjWUV",
  "key37": "2KYSLUHBLzE8xgavB4bru9DZEANjf9PxW8Yw1P6sNnmuprwrifzPKbQd5bM78aQsLAR9RHhyYpSb9fRB66M3wqhS",
  "key38": "VZVoHjRXKuK1HS6k2N4qmVSBqQ5pAypjPMySNW9r64Y8aKuPcuycLLoGgT89tLGsb9D41z2sntcDeMkgnmzuaB3",
  "key39": "3zsiRifVVYHSavumhnKpZ4YcH4pFKgwoQqDpscuVQNNxyFPJgvDSvy7zXkjVCWvNjWCVoz3JfDe2LCZ2dmVWDqnW",
  "key40": "q3F81qrbKjxYWjhJmp1kyGZkRK2vmjb4Wm95SQagkBPY1MD42jT7fYcZWoJJd8ybDXkxmqrAWHPec6joD9rCYfz",
  "key41": "5zDnkE5ptUg7ENT2DuL9XzWPERBLwzX2143YEZpat4MrumTfjwwvxqdqusNh5KmTGqrfcbEwiR15t1noTBGJx65e",
  "key42": "2cXWVtqG6se7Q1EZMqKBuWe8795Q1sYgLWynseUm5JMkJzdg5b1oxivJang74LTu3p7S9M79hdnq66693wCmjoe1"
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
