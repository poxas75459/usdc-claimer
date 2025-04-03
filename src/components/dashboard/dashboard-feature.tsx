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
    "uP58aaazbpbfyrGwyEwC1geHEKJjsmHwQ1d9HEHXa21zb32BWKGLUkLDPDCbvommtjAJQ9Voqwwqfp93jqVxdY8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DeFvQSV9Du6adoykgsqPpru2KG2Gi9Sizi4LW2m94UbosZg6npMSbPvDHNJ6aUnvakS5GTv41pUDptWEU4EEsMU",
  "key1": "2fDYY5wrqy8oYDp9Nf4dqWFddhVkUTkigSuNwivWzdpQaTizwV45C1hVshouZsg3167A5JXBRxNh3ETv4XuFfVNs",
  "key2": "DqPUqpP9StcLooSiL7t43qyLVf46qgqxHAHdDkE45yBwrAhBrJLx8PimdUrJwJmzNbTdHvHrzJ9nyCWrRn9sV2y",
  "key3": "5qQd7ZrZrJnn6MdtgEqPuo5axarLK5L16yhgfpoxqA2Nn33CcMgMJFnHmSg2dQDMc9waNM9XFQxyj7ZGCezDVPQw",
  "key4": "2X68s84dDKXN8Xkf4TkEzHcuBPxwsML3NnsyUdk3am2NWGYjon34dngHFgjEjkgV4dJpSJpJSfyRZj5XG4tHun5e",
  "key5": "4bsbWCfQPJ7d4GR2kPiWb45kaGEYgqVL2PsNEuB22VRM4NC46cai756M37WV9rnCAMVtr7qzwKAvXnTgLneYFuF5",
  "key6": "5t8uuSfjpbaJ11hFv8yFokvDR565wEZo9TgwriuzbdiZsbCUE1xqLc6a47pxwD8jBu19nHvoXME3KNKoZBZVPGYu",
  "key7": "5goFmJ9G4uftvtyT5YtCkJrq2zr6oEoh6VZtg5aqFxmBvWtboQT4AfuXzoqXkFW8vmZxhgNW2YXuE9mDDkmT9eAJ",
  "key8": "6j9B9f5H5sxx3CP3eQRZg8H2ZyVSGvhAQDPgmSu5xL5xSfW1gE9XhVnxZPcag28ZML15xgF7opjz7TTnSQ5x2mu",
  "key9": "2ftZkCvs9atn4qB95CRYeUxfxFVCaccU5c7SWiEEgfuWLySe8TC45WRgvpWAtQw3fKkiSF4WPswm9fZpfwjK5vai",
  "key10": "2WuG869iJh2F5pkcERg4dqSc1ZjFhpnXR7Q188TZQwFkECVJhDEFi8iC2hugY8qh3tJZ5MN4NKiDtvi2UztT3gnm",
  "key11": "5ktmb9JLLVtTZxhbrqWrpoLYFNRUunyzNd7xr7dLPx8JCFYf8HsKNSttwuK4jyMsHWnCHv6UAf5ok9Nq9b4wYT4Y",
  "key12": "3F9XmbRJweL2e6Xrau4uhgtyThLwDqt49qbYEHAXY8nKDQVVCkk1743HmMKf7vnbMxtzuzFwYVYd1i5MqiYesApb",
  "key13": "57VQiRZHxAnfhyGKBfw53SLtzN1btHVodF1bvEBZsQV2SEE9H5QVadtSymyrBhSu4FKsWCgca9WPnHMrCuFEJLcK",
  "key14": "3hMN17YyYQQ6MRRy11xFePs76R4WmVBpqteyDUXK14wGxnSbCrYmKssyScvLtVRJbMLKGg7ytDHPL6R6iXBPHQpX",
  "key15": "58teHHfA8hWHS3F3DBSC6CKPGpF4YrBrNezBHqg9iY6b7FQGZLk18DMDgybSuYZwr7oYNPZzijsMhnQNF9Su1WF8",
  "key16": "4kcdnyjuMe1ZhWqBVok6WcipREwJrnDDpAjdbpSsxFLC4TRCbvs2efy7isAReRuSA3YKQtk8XPCJNfo7nsoc9FnQ",
  "key17": "3GS6yDUnzEBUsCWGaQr6m5UUPcpEvWv2FjqosxHYqyxB7kpHSLNp7G74ynnn9t1oQKnXBrinb83X5T1hBSwZDhZb",
  "key18": "4TR9k4wyUSCm7ZYzH2tn3p8yyose32RexxBhdjb6hLdHzGmq9WpWeT8819fHkfm8LHqnE5WXrUFwhSbMaA2a7vWt",
  "key19": "5D5SUuvzw6W1XUEjZGJnwrXXQ8pgFnhcMmXr7vKi88TVS2U7BkW5P3rQFPV5YFDACt6PWk9FJiHypunb5PSQspwo",
  "key20": "44wAgV3xC65YbGZjb12n6fC83iqUjLUNsokecdqWWphT9VK6mTVEzoxkDZ4UbunS86ychnVaLQcZoYo8DLXveZat",
  "key21": "2U1KggzyApk9KnqQmrdsTgND1G3jQgXcRGiHsjtBoTjffyp9ZwEXp4NgsfPLhjjGk27KeaHv1DWFYqZhYMBMyTJQ",
  "key22": "4gikkmTZAYcJkJ8QynQSW44DAwku7sE6ST3J7rxfZ7vgVHawLgeKWBsQPi3iP9Dz1eJHcSy4mtm6FE58gwyS2suy",
  "key23": "4Efzs2Do1pi9uRu7QYvkUcEYKXuPkPtEWQRqmGMfa1XPMTQAS7rmAEiBEsvwfyYXAgV3Y8U3AZZnXMNhKJXomxEE",
  "key24": "wMND3gmVogjG51q5bxVFQU8R2y8yhY53JbzohGQgch5aMWhDDRcYMUCKjFipfoQyXCcohGEhaSmFv15bQAS1C8b",
  "key25": "3cUu18PBNLGNR95srwqkV3HNV2p5sSXXHaacXt2nvrWfHUtDMPz3F34YLnvZyEf31pzXv4k73SvRvqfbivX4rUPw",
  "key26": "2Rt6otgVeMmLqx1Ly244Su3CETwz8u9BEUpWo5SnX6RW8N1f4revqA6kfr14SJARw1bddottJbA4G36Jxq61TAmH",
  "key27": "2Zu6SmBr3sQZCsYGdrQaGnwDp1j5Ya7CkHyULoSgxsXX27gL1JX4JPBUcwYirhboZmb6tFKo12F8GsL5Tunpze3o",
  "key28": "2SYa2mhqX7nL9SbCMJ6fcdPWw1DCmRwrtte955bhGE4n72UjW78sc4QsZKbwb5Aa96riPj6cB6JAdgqNBLtjthYm",
  "key29": "4gzprgsjohuozRi5DMrJPrMEGj8wzmXguqyCBwd5z5WYQePx9Vd964PaYrqux6287Q4dxScVZ2yejcUjgoGXRx63",
  "key30": "2JnxxK6WhbTAnSXCDmT5qNQQXFHbPgBoCBtGdCX5iwbsojmBU5vUZzPT9dzq9hu4cZntWRiTqjpDmg8HpwibBCxA",
  "key31": "3ck4n7UDyqSNBDkgzFvrJnmjbN2iV34AE7n5DQFLuEDFdtbMc2x3bTKRrXMLSy7BnWhE3WSXyNbwjctcvtK3DKEQ",
  "key32": "2L4koZ7H59a8N4k4Bjw1CAGY6ig1reAJBPGfukFTdF32n1aAKYvfoaRXkdD2sF9HdZ1z3sz6P4q2npgasyQYWobC",
  "key33": "3xRHfBmVJ2CxZCpZM1H1tbVSAtzpU9eTNaqZgXom32kngTfDNwtfXDK6ygsXmrjVdNwFj7RKxeKWK25EvCSEfQ2R",
  "key34": "4qVcBV716paqKZqFRTBt5ECXzvdGpD7CbWbDq1QsSwYomhT7VkZMe8dWe4Q1TgNWCrWk8zTcFWFwQRW4HadTTtyy",
  "key35": "5ZrvKpo4ApRUddWQvtqTXRSN5dc14mRTxHV2XxnaL6PEsmxNoNZHyc1s63qEze2ckGtTmUik2Ju3tsYuwXJ2Chky",
  "key36": "2NuktsKukXQ7Ts2Nz64geeE1DBtrwi7vuTU7KCGsjVPppstGbg86foqsxugz2Y1JzADNfNdig2Sq3jW5kn4QbG1H",
  "key37": "4ahiTsACV5vsGzmbCwivQS5hBwxN1yFKQGJ9VZR4avPRm6jH2hKJ249CfDzhL5QE3x2FWaWBgEsHpxqkYBgDgT8T",
  "key38": "4oNmZtsveJoMZ44y2j7i9vGn9iqgEtPba4LdjKAG7SVRCNKWkmoqeKP6ipxAxDtmKvyo397kShTyGqhEEu4Nufga",
  "key39": "3A5M2kKpXPYs1Xe7um9x9rhtDQZrPeGMih6XVX4vBcdFaAHEHUKS63xm4osmsyGMUJADeUqZfS2uKwM4j3Z9koVR",
  "key40": "2bF1ZscDi8ufeow4pJm4QYvMVXjbgagAgmn2S13A8uLhkLHuh72tSEEoLLCSpYmMNLYRGzQKq4JxzFQ4rUba35R8"
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
