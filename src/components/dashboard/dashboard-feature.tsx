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
    "66aMHb9jSMqpGcng7onJS19nqgRohBorphTS3b1bTopessqmhAM3mLMRNNvZ3zYPKMUySQHvRdSEFyztwGfaM2gc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QTM8vNVWwirfMZsKkcJMQ2qe47HcRi6FssrzYtcZKoXnMaN7yFFheg31FCqR9uyzQAtLFFprVVeHi6QykSfqjQA",
  "key1": "4dmUwGGfR1XLX5ZJnar5ky2DikrS5C2Wf2hZY54HmDMG9JMHHWQxUrmMU6w51X2ZWTWKj8n7acM2m5R5eXxQJTeG",
  "key2": "gJXs527wrB2nytD16HhrfnJyytXkbNqtepZ8cjUXfmdGt5XpPs2pBccpigaK1DMDcZiZZzkiVQG8WMAZctMd4bB",
  "key3": "3SmopsLZQsjBUK9xmrhJxR9zszCQKb8c7ErikqB1C8T9xver3PrSJhckD4RghU4oHsK4fymPv7SYXBB6iAHWs2Zn",
  "key4": "3gjTErSNr3dRWPvCrKVV8rWXrpqEyGCM1a19QWgJEStLbGzFL8hQtNDYMaErdtcNdoycCK8ed9mrzkcSz2D86SbA",
  "key5": "4VvsZyUYMsk1vHHjMx52AJUyA5cZ17cpa2bsSds6g2Y8UHUQb4L31oac5vJxpxB3fXbW4KGuRfS5hfpVaTHbY9dp",
  "key6": "37zGGnfL5DF915jFEBBRViwuyd6RftARvAy9677DfCtAxePvzwmTrX5qLddCziqxBxvZkQiMwSZibV8p9QFqp1uf",
  "key7": "4MdWsj3EHyYHva7jEubL7s9k6Z7fkGpAkcavQAX6bGvV69f5iRAUezxBAwWLfwxPa2FXD4nBQjTFectgtRJttpWg",
  "key8": "5pScLts8MNxWNxMTFk8PJubWZd7A9y4vVGQZtcpp2pWDWeyivrSRQKT27wRPz2MjGER9rf8wStUigRQbtjqsDcho",
  "key9": "2YxM7Jt5BW51UaE8acJapX7zQy6wF3E86T4jFyFuuRv3qb9ynC5jVDjV3yD7qcMQY3DMPwWAQohuVyGgRRZ9Jjxw",
  "key10": "3eSMDw98CouJaJ1jJoBk3TAXVBZDeXQ8nQzAQdgKw64kjPtB7fvvCq2Z2K2ebRfdxDqXAmdCiPTVM3rteTmwqiGG",
  "key11": "3zdkTK4E1MtUrSxwhYTYp7QsVSvZbzMvcQaeMW2VrxVXz8748AJcDahH2hHDo2mT8qb7YCvLPGh7SPxiJvJ6Qikv",
  "key12": "3Rwpjgt9UHcb763T15WwMSuoNdzXiF9xF1RuwU3g9vxZfjfyWgGjKMtJL3mgSuSGvQufnHP2dUHJtRVhmTe7pe1F",
  "key13": "5s39xpkF1qv9xZxZqcE4eNRHtDEnpwm23dAtCQuXEqQAvBXqUGsBCVjcNygXZpucbmPvXLdCPeLLDWkjKgUs2eH2",
  "key14": "3WzyHxV6A3CFQ9r2q62T2UdHSkNYRpL6DpKxT6HdKsVZRyzmNPfzHm6SvA7PCQfyZfhddnVkKU9Ki8wooKwWJCUR",
  "key15": "21oT3ftE7UVwogvC8K1qgw6TVTry6UQf3v2fcWzV5G23Wi9v5ZEPm7j6jQoNadLBt8gZq7aA7vBkzXKmLgAeE2P2",
  "key16": "2LgGGKTsM9RKoMJiez8fHXkoZzGr8wEX8bouvVzFVRungEzpz9EyrXTahVZt9qakQhEWaUMrhq9CMtFN5Fp88TRP",
  "key17": "3syK4hfxaYyAmqK5JN7wr9cJxELuoxNEMFaWpi1zTfVpR53SBuazxmeTdkrNs96QcYN8tb7iuxTovF6hCkbjKDeC",
  "key18": "5JGNR3HUA2MMYc3ZxE2grTtsxESa1dn4h1VhxRVTLmesvDF31fcXnTxJFqmVjPK929i8P9ceRAFUVtsPppiMBf91",
  "key19": "4J98P8d7s2f1Qp7fmNRhumYU4nqo6PVxEoDkGAX1YUX2prfvtFZJryPSLoxX1Tc8S4takY9eJX4jeFwyWjrHQhV",
  "key20": "5RxtpdEnMwJ3en5NiLucCxedQADBxSRqiWkkEMSC7pBxiZhgx3C1FkLF4bjeRr67agmGx4xnRMNBpGukAm7qiyEZ",
  "key21": "FxFcNG9XLJQzo7Cic7KL7yUEH8N5cWHqANsvzZJFB489qQKR53fLwRqUDFqdcRaipnAhMvzKxifrZNvVZ4qbYpg",
  "key22": "2EYZSi2Q77PiCJYAmcMcQyfUjQzgXrNhXGUqrhAzwKfjaRbYQuRQA57Z8vWELuT5FMZzZqpckYQ4ydwnnD1wSLuY",
  "key23": "7VWdLgbQurN1MHm8H36LNdXE19zGocBwL6pYSiP3CNh6dmfRYFoL1AeVaNTCUQJi7rM1Zq7PnEHCuhKmJRd6VaF",
  "key24": "3d5Av3kHgqCboxjL9if8k7BdmJ4bn5SS4QujxiUCbfFwUomqHAq8CJgXFYEEEt18jZDP1RgiMopdqD76by496BvW",
  "key25": "2mzUuc6P5BfXyCvwb49L8Xe2tyMrEM6ikZrCqHug2jFukU4aoWZDpo87wWBnQ7cqy2mq5n3Mj4GsLKdYs8pY7Kzg"
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
