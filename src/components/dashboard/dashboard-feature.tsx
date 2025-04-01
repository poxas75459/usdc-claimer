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
    "3TgXVMjV1KiH8HW8cU8GTP9LmzokSn7EMrYXX2ZkkTKf78GXgLHyDbDh5zfBqNmMmciCHdJNrG2mgJsxmqtcvuKx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yXYx2A2QeyFWvrQsBTgE6VMAZgj5mY2RhMdokwfDFCR7TEz8ZYUVNqURdeGW44gtqzWH6ZTbooJLqVdqTicyAUy",
  "key1": "36MtpcM1MrTQcPo4jA4XCer8ijm17gWFmsx8L5CJrZNnv77ouLZ89F2MLorgE9si7knBid1XwxyAAx2apkk4KBBP",
  "key2": "5jBV3HdeAgKvjAwPgaaNgt8ivcCixSBFYvuGVqN5ABSho7opvNvjWLhMsU5UxTut9WmkFBUgav5fASg6r2rNjiFT",
  "key3": "5wGFWJn4HXca5xZjxdKwFsZqNCWfaVuQNUAFu9z5kyqvJc3mpZiQSCVvTMqtd8h1aJdHA2SXdGQRhMnnyhveQA6i",
  "key4": "43Z8XkV12zhr7ZifoqxkaAxL1NSjGSJkBY38WpmkAdRARrfsmF3CoYSg48nJzRL3uZys4tAmzVEoxiCJ8AoyHdKP",
  "key5": "2Vnnh5WUK6zbnTVQcoJrpbdPKYVpbPbgF1zAdt7YPTES73cMHc2KzBwg2YBoYuy5tbFJWM9yQ3h66Vhx4bYy5EKh",
  "key6": "5wTXz1J7Bq4mcrwHS6ts9HANJdPN5n3AESZg9TWyPDh2zkiMsttmtnSGPBC4SrUXgZGnstZLE5q7YZWoDvhk1Zpf",
  "key7": "5cLvT6BwXJmPqqL363PGWtNE8ZTWbpN45xHV9nrtQjnoCpCAw3S12f9qzsEd4y9PjMWo8SkRtDBdi68Yu5PgxaiW",
  "key8": "3eocdKQAt5an2yTaJ46Ux4mFrJexJ5HCGD54DM4nTLkqBR9bgAFvRZPAThhcQBQBy876ghzPcEJvHmmWZqNinvyR",
  "key9": "3MaRL2EvhfRfJ633g74CM5s6TNSYuo6yw8NTKmW3m6URFhEvwrPMY4PYvYj6hiQN76PoQ7rr6HWEdAFHhRrnjWmJ",
  "key10": "45GV4XsqiPmq2osDdCd8GCP9wFNQvFVzYoHyh8aquyCo7exHG1HRPJvB51uq4aoRAJXBnFXf2sKnxDW5HB8QvLuL",
  "key11": "3EACwYYiGKzjA2YLB5XHWW9FZ1eeGBQPrxxLe1TEiBcSTcdoeZYQAwxn9qXuJUgWQ3TpST4axoAUZMYtQMf1wfrL",
  "key12": "x1omdCwVfZBuu7NA7nFiTestsyNTK6sZ4mAmAjvf8VBpMYvfv7Mtg6R6b3NjFXCGFDSLKCPvCNFPW3RzpLn6fpn",
  "key13": "3u57MkYdnMHRx2Uj5ZRU4apFCkiuJJgf8wyJuDLnbuvtoF6nPdLV9cLnJLkHHbTVfjde3y5NbFEWG7UDhHajkzhC",
  "key14": "2o71jS7EXeCqGkDWTSbBBM3CTTvoEQjojHCnCZrL1N6SJyQ6Tcv33HYy9d4L8miYKXKj9xc5oQSRE2fENHHicFsf",
  "key15": "4ESbg38CHay2kaaPLKmZzhPKne5iQ31V8z7B5tb9gu7Cxmq1bmuuhbCNKfG6DDSrmJkQqUDDou5u97vZtKgnZgBQ",
  "key16": "5p9cGpDUqr2kEQEuBYqcbYvWghBgPJjgDaFDMmRvFhAzavmuRwyaqz7p2caB16XRWD2nuvyYo9JA7h1ZnLzoxhgT",
  "key17": "3xkpz5CS6tk26gj5vVGfquKVv9JXsjzsVXweuzVtJa1dSe2zjZkSNhQtb4WzqL4FsehiXujWiewd7xAEQ7qMUyzn",
  "key18": "2Emszxus38zekQTuDHyzfAsaRtym7imEbQ6LTLwFD22BBydASxLQZgUb7CD1bfffHdR2yuAd3tjtrxuMEk5FEZFK",
  "key19": "skwaN7g1ogpfAq1WxxHT3QBegX2Y67fPgnBxkMbgnGZp9u5uXh7HpZpow3bKNA6PEe3i512pFh1Xwqvcw6ADYAs",
  "key20": "79xPb1Hnai2Cx3dth3Eow5BFgbqNhJWcr3WQ97dJBjCWepP4MsBCNHwwMaDJ3xAwSZsv5os1KtUfYze8Dgc8Au5",
  "key21": "5vWtJSvSCdqhBKvE9BjFVVZkNUzY6sqtiTbfA823RxpfJYLRVvUYNM1ryqWM5zhaupyoXE3vNxtVoMNTt8BWNRko",
  "key22": "4wufg6QGvZUSyjvoM1fgkdwXhKnmdnBAUV6RYyPtqRmhhGyPdy7t4SS4KfkLaEviMgT8ZDwpzCZm16Rb9jsAtCpB",
  "key23": "5jwffGiXkz52YXi1xFL2XGbS3EiSPzgzFqaXciaUfbyYskfei1ePbgxLQpEjjSpVdgMJjMtfttCwN7rkKVJA5yyA",
  "key24": "5uvLcT3KVZyrenbGYzVEa8t5cbbb7BEoYNE3GaWMFt8629UTZJcqniJ8LL9mn5U9FnGtEZC3xRHCg2WNRguaAM8J",
  "key25": "3XvLBf44s9T6T3qLtMjaDwrwbnjC6xbdjykDNn8LViBDPHeSmuenLw1xWR8biwbXAcnGHoXww9eA9ndN1P5pNWvg",
  "key26": "63wwkMVcCRyknYMHVxcvrCf4RtmHR9wkr8MapSv2VuyymVqYUm6fPcGJsdaUcCUWMUD3KgyWJFcJELXLczjWVHa1"
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
