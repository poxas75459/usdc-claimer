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
    "5xp6Lcnuct8912twdjujy3NmVeSH8hB7wLtnWpEBSMQgoqq3KkqTfUeFEb5g1DzKu9KSL6Bfk5TM2VGEGbEzVTN1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "udsvzNkUPk5ZQpFebDZDNVuNTNZeP34BLrvPWhWzrfmjw4HsMFrWSMEbZdhAwCRvA7j479qnaXs7AUvviPQEiQf",
  "key1": "sR7xTwqwwt5u4NsEUtLQeykygT3WDYyDWjuzhSiPc4vqDBam6zsqYN8zqZ9NPPBB7MA8Qd9BMTd2S1qw2HCVURK",
  "key2": "4fLkN5VodEBw97rvpDd7LngXCrDqoMcSVwp7gYcvnr5zHWKAsYXorooSALv9zZXdM47ijMpmkNGqE288MAk9tVW4",
  "key3": "2ZxYFWauvVVJiLBHRuTYo76KZ9Z4gCeJvwvDf1KXN57TCAVVPmBpLrXZjYnJaidkuT2iAKoic9HtcJCZy8AqS8Jn",
  "key4": "3QRMqnkQNQvcuABzx7DzDcBZ7r9gie8rRFZsHnfhMnb77XHVUYZHkCoTmbCmZEyASjpCzUuivSSGJir9atMsJZmj",
  "key5": "3fsiA7Jc8gW4tC4xKw91emmGkss1hGPbWsd7RcfHMrGyUhBzQzCSqQh53GjwSJyJ5pxViQt3dpiNX9ngfhShp6a1",
  "key6": "3vD7CfX76RXE8VywadjkYcdN8bocMHiekf8L1j8wbpX6QMYjDpmoRhhS2jkQ2RzYyQSPeSs3EDKqrX1KdWdCXtDL",
  "key7": "4HfsVXobyRDakEG2BJTf7YCv6diQPHyeFB6dUw1DBJL4Ux5PApi5izs3UE5UBCDhxZnZEry27thAga6u1GF8btry",
  "key8": "31ykMrLZqytUeevCjUrovUTT1JEjAzK9nH6JTPyWpexHfqHF1XC1ZdanrEwPPYNpuxoujPjMFP61CAefGKVwoyHk",
  "key9": "5ozT5kiiZtxxaLfD145oEYt2y7WnDqHgVprYDWeWvGwKeco92LMHP5snPso2Mr79dph7pfM6B5GFMZegszRiy5kU",
  "key10": "PEadrdXZHVuLxr8XuGYAEkCYBQGMvUfEUUCv2eUkRnBDUy1p8dKJFr4NQJUqw2AJhp76ed7kipKhb8wan8jZHdQ",
  "key11": "24xAsxbAiSAuvY6uVq4gs5hG2ea2f8fXHmTpqQZrd83NpqjDhpK2jqtk499hQSMp5xfkNvC3FM3zWVq1oCbN9beu",
  "key12": "3FSmEBqVZCrokiwYAss6jwJmJ5oPtHmndyUbCeSAQzNnCsfyirxKuWAkzhZGyXxKdsbGUaKU2RWgdyertGtkhCAc",
  "key13": "5D5BD4PxfMSriozAoc8pCHhVtVgrWPSArXpcryj14yyptDaQP7HdqrxerGvfwSV9WFrXesbih4ryttURFtLCiKzS",
  "key14": "3LNirBhsyp3kx7kJ24acDncWyzscNrNnP1grayBXds8eJWZ3bVeMnr8qYpaLChNJcScduEgox72s7jtiuVuMpDTn",
  "key15": "2z3k2crkcKMz8dj4KifK9wv1U316ksFZ83PLfSi4NvuBSjVSpFyPS4QNwnHMbtUoc3vLk6jHYf1275osiPhYjZk1",
  "key16": "3UFKyLoFrZYFq1FZmVzWBGi5JNsMLbgibV5ewmR5mNcXM9eqNHSDBdd5pLoN6SpqgFtYXjFvyNyJ3FexL2RUYYUB",
  "key17": "4aVPc1S3tyzGRMiD2LcGHUdH2vZgAuKRv4Mcn8DPEnmnsPgNoCJSGdCjaifqwB2ioRxN3kRiVZWjnqzCCnhLjnam",
  "key18": "3jKDXS4Px2WUbB8zx5gGM3vdt2K8BwizMZ6vPBCPvVrqdupDiSbuK1WDTVA8CmoFLu4z5TF32oxwStVUhdKYmS7Q",
  "key19": "2tJZoNk6XJLip9aC5frpvQtRsWR7jezszGCp4MTDfotfdU8NwjtpdoWw5TELvjmrPCYRFquHmbQgn5A4KTtoUZma",
  "key20": "4Auk2EXMVBP3DDmgpV7wRTfnqt9SyXADnb2XbydF5aRBgwfEsD7NPzNPJhK6CPi4skcSibC1CS5C8NHxspfatQcp",
  "key21": "qsRLDZiVM7Sm8wtAvTjFbj84KA6smYw4qB9XSRJkaB6KRjSFQM6TiwKswRG9PKD9yP2a75upxgSTa4SuFMovJ6r",
  "key22": "4ZpP6kr4RattpYQ1efvnjmuj6sPCZhugpX44csnLJtxzRjoRddkc4h4iXnytFhJf2wHsRW7uuyWwMuFmgC6TvcTz",
  "key23": "5v15yiBcypUnAmNVkYDwGFt7ZPtuYotebQsf6rARsT78sQdC275uyJRNKEYk1V87E94xqPfUNPsMXNB1a3SgbFWX",
  "key24": "2fs9P1tk1Y9bSToLvZMEPHE7moxEPfyWQb7jLubk9hsWMQhVPSY3guVpuq92afgpUUbdvVAtLca97iArV1g8o5sA",
  "key25": "4DTB2cw68Su3m2m4FHeETCMRyjBbfmGsZD6pHMr4ytscF93pvt9BCpAe1uzZNFxiETXfsWFN5owb7C7yud8QQimP"
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
