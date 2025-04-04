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
    "32dR6mmgrqjiXdFgiKzDwCmbzAqkJAqbAtnrK5F1g16n1f7MDgQ84SDkfuFxdbGgRBwsk68tqsJpwuBtRQQBWurW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41wiHsPH3Zjx594F5T9fcxTHhxHnG2ZDNH4ZHShr9525rqUmNBNQY9VfoQCgkag48RdwwtTtqFbrJhb7XeqLVed2",
  "key1": "5bz42X7ddMjuWo1DfzqaURWN2zeiqp4zfb4AUYrciZQQkjr7J8WvG2xiKd97zF3XCfVqgkhGV45fqvQcYLEaXTo2",
  "key2": "2VJgirHbE6py9gkzwwZCgH4CWBoAL5wiu6eJrxSJ3hReW4du7ZB2NunjDKnwVy8jkfxif4x2kisY1RjumsgXprb9",
  "key3": "5AfHyMirX1ZFUwytZJk1DiRCqiprHKF2TguRN1wMbnZhdE2qimXd7pNuKR747QQJ9ZvWQ2bT8Ga88MxFakgDPuzW",
  "key4": "5efBsRXbNPVFpY4wc75WoCpc4xtkURRmE1Q7CCcvZUuc1s6LfKybjpUT6J7Q4xKDGQEG4Qi3gFGtpvXtnfwiWxkP",
  "key5": "4qbxNkJuH9n68NTfkbumncfCZ8LsYm5f8D2tk2zgriuTw6TN9YJadDW9KM39Nh4aigieDXTrVFs5chz3RnmzEvMu",
  "key6": "yoQ45EwWSCku3wBT4YUxaHPbJmw6fsbinp7wpxSNU3NdPbAmhtSHEi3tyJW7JkSWwrLAPvUzaSEXijtpahHoaiS",
  "key7": "3GoSJbN7vaQSAjAJZ8DXsk8ukJkwor3QARE6PuVaXzhbSHGgr8UmKsNPv1WZQKFq9HCestw98JKTPMo16oSBpLwU",
  "key8": "NftRUQ7rZqSpCwR3ssSBSeMd8wYgzRU9wtGY7T35U7p1tPsvW73S1NKzqtEEQct9QouvhJY4cGdgbgs2h6uxKZa",
  "key9": "5KymvP2qFP5jiHzksig5UBYBZEab8tht8iGWSpLRmVk3xo2vaZxVeX4KM3P5y62pfViac6J7gtnfJ6sfV8GirEiB",
  "key10": "41RMdzZCM9hpYiC4Hjrc5uuhnNmtbadfonq9XQ7WwkiV7KfdAs3UHRxinbrXgV7NiRziGwtRj9MDiiPpLRaRDs6X",
  "key11": "3jTxVp33A5Vx8ZzKxh961ZU2mp9UR9UUevsnvtp3qWHxALmwowFw4McMz1ST3K1zxBoVgUWsEQ2NBCAJ3qTnBzw8",
  "key12": "ZppXfQXhSy4VqivQbrKtntvK4oVXvLvEce2jdKS8DhP1gBkgmFbVABZhQ9CvYjKXEhYnezUycgERM7mYyA4MZMY",
  "key13": "4u3vHyRNr1DMZAKBXtyDByXWqSRcoGhraueQVmwDy15KBwzq6t8nxUXdi9s3izFvYfjREyEMS8kC4si5jC73DCps",
  "key14": "3SujSCZB8UDcNkM5vPBFDzKsjkPBFncXiKdsiKjqFfZDaguVhnVtYvaWyRsWDVCJQrmKZwCcLPfrC6E4cgkFvVqB",
  "key15": "4nAsu8JzSqBgkUg48Z8EdevS1CmdUAYkWZVGDjonx8Q2CEbHs6SixNPcG3F3BRsV7XjzLyoJenvLoNxaZTYBu1qa",
  "key16": "3ymD7a7LMBB8qcpiZYAdLcMDrN4NfgoYUiJJVFPVhHPL7cZVvB4Ya5K4jjcEh7n3XzvPo8CmRNzEBZJrjccTWmVN",
  "key17": "m3eirGPkKMeN4bi7VgezoJUwjKg4DF4EJs6znYmgEvYEJ6hgffdVjcc8pP8cMZdR9ev7obZTD4KHgdmaLT9mCec",
  "key18": "u2JtX3cXnGiZ8Ji3CJe4L2FV7ivYFL4a5LGyrjbeuLvtJKeyNZHJAoybi6LoqYLq6GBDDErNtX8tfXkPAuyvHCz",
  "key19": "2RmjxhAaLcicGiMEWohTF1L1q7uH8jt7cArxSUABWKuwbT6bFFxyqjw7ZFhJJZb3uqKNwTo2rnXJmzNSP68XfT2v",
  "key20": "44K1k9gou6gU2i681kTyVfyTt2YMfV1JfAhNKrGSgWVQ7B7wEM6dbKyVFb5xiokpX5d8jwhNxYtEMyK2ZTxHfYAW",
  "key21": "whBzU16WXdSV1LMTzgiwMMQos5BaV5btcXTcQe9c7AmVNpLtZN3cPV83Zghf8eFtnewQWqE4i2vCEedzSVqeJuP",
  "key22": "4TvLJQZ6LZwBHL8A6eTU3DMUzKGbKugV6MZFhsejVvxn6cfLkuPj6KyBw113qUiRf1n4x9pHQ7bN3PviEBnchiMN",
  "key23": "4UkogknKv1DAH4mzJ2bpUKxeafL6Mf7fCHqddsqHNi7VoswG9LVkUmCZXkRztJATfnTMwWZq3NmkvraAdUGDhnsC",
  "key24": "5pxK8rWpxT4PQi9Yoq1pG2K6dXspByPkhZ8V43orgvE1xNUhmJjr5aVuKQNpE7xSpJYyK7FMRwo93brszxQiLXEy",
  "key25": "2x9LT3rfAQZf2q8bH833C89trvAZzr83eSafbZikprRUnfa7WaaoZfUMF4pEgJtesM6aF2BtBEhGFgfC2iDmYUZo",
  "key26": "2cyC5DoYPTWyJM1QbaMnrmjG8ZANQMnwhYQSMy7pVusKf6Puf9Eke9gViLM5NoZMDQZQR2nZyYg2BHGCLL4cZE5H",
  "key27": "64gS73zNF8oPvzJUqzYcTWuGggKct7tDqgVkbSicm7sFxmLqPLTuxKafW2UoizFQMoTtZzbRZL3zh3sACQvCKV87",
  "key28": "3h1jiMDiNpqpbEupeoJzCPi2PEVx82sdmBRU1ShjgLqhn1pcMcQNsrUDg37dXUV7Ts2dE3KQBc1R1FWTzsEQiXne",
  "key29": "3qDFZziNaNacuKFFVYLrAeRXsuab4WHMMwAwsdbBV8NesFSw1Ma2od2qU2VbDrJMrqwh66i8eGx9ND1GT363NfYF",
  "key30": "5tXdKFJxRAd91PCwHg5AuQ3KEoxj9QTa1EGPVgKCEbzjFuQxQxcxxKgZU8xPBzTwwbVACvJHZrqSftWVYuNYZkm5",
  "key31": "2MPhfHLGfue8LPbBDTbQ3ASaLgjRquMKUgJ6GBVG6ad86MPAcdnvXbWuPUggyTWZsUwkt3Gvn4fnZMpRqXYL7wyZ",
  "key32": "5rtXj1CdnGzemmvpy99ZSS5WaBGSkZ55waGUJ2JBe2sdKdxjWqFopDQuZYkc18CK9CRTkRiaXJtbKNMp5QaurdvK",
  "key33": "4KeoJUCVSGavoLRM47DNgVtPFYg1gpbAnYcSe6W51aTzLYiZKNye9E2ckgsLf86nTQwFpn6mhpjHy2jesgk6TSYD",
  "key34": "wxzwkFT7gXzjTVykWrtzbE5nPr9jwi8aBgGcmDhUpmZBhaRpBEzv55wuvvTBMBh4ecGhXPFWJjM5e6YLM2pEZXh",
  "key35": "45qtyfQnQ6CiFLYaUen3nrq2FdBPMAjSoAt8vHEhjXTJVSQ8AR3t1zfdL2wpGw2AKNKaBk3nDzGdz3b4vmFLUhBT"
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
