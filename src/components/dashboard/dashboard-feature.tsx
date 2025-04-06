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
    "afZMEiGYd52gML3RT91uYiBJk4mB1B587EoFmKb5TvFcpF7dLWn7cA7vqdLVEjg8spLmrfQUeJCZaa8iwJwcJve"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cesRLs8DxvdmGRWZ44XHCZ6auSS9yqbj4SV2gbBKCxDSRg9burREnRTkYtvTM7HrTqiVFxprR7EFieaRvVVcAJt",
  "key1": "37z9dr29YR5PLveFbxAvyJTTKXs5YeegyX4LrGJpAXH2KApvGZzvfmKSRyi3SLyZfbqYNUy1xLv9fNGi588NCqNB",
  "key2": "3Cj8gtjFdT1gGKKaJLHEWXC4N8f8PsAz6ccBF35H8JqdQBmJp1VEQ4ri1AkLeX89N3G7Mu4MunbVMxQgQg6CS6Cf",
  "key3": "b8mXKs8qN31sUsQeWp8UR4jUmaemsT6MhJTzkZ723j1teeiYovwPyxdqJiirJjQWhQhYRDJ6rYLkL1bHcqKcDWF",
  "key4": "3FnSJYM5qxj6kFZzQoMtohk9DBVuQyLodZbKwu41eVFfQfFrjoCBgx9veHqfiTMuC3JWYTv6shwBmuPVPusppq4E",
  "key5": "3a2kHorm76hBMz3Gp3ssaCr8Xo1GjVc3YM4GqibyygqG21CF7mvC5krSQpoceoUWkGXYUhCYL5souLo9LPhRedGn",
  "key6": "52F44DH9iJoLXeT3WvuaXgDSpJbtX8K9RHsS8ED3KVJjh5FgA7uKSu8mMtRog9iLqF7YYLz4GGob6Kcte3eEvUEw",
  "key7": "RjNhVNKX2wx7ZYfqwLhU3M19dsFrSWsxPnhzAVs5VtBiJwcsfTKVBoEnTxVMTw5RSwaXaZLJntgj7XgWyPsLcjD",
  "key8": "47pgYgzB5JHE32tUHkeUFcfnJBeCNMBQZRYifHkNXjg5wC81Ei1mfuczwfTC39esjEb1cdwd3RsKkqoLYbK2n18Z",
  "key9": "3ZqPPqhd1u4jqrwRqk2CsfRFFsqRfUh9MKM6XPxjQq9sJPrGWtuRjrUAD4B3PV1Kwhdqeyf8SGANSohSh8oSUHLQ",
  "key10": "nvZ53Eji9Q7ruFR9jerd29vwwAa9LhPF16tMMHedmPZjdHpu5C65utGQffohqhH2WGmsrdizXNom89mnN4FWKku",
  "key11": "4eF4XFNn7SGvBXFCAk8yPcwEgW1zHhzsCdra8u1zaNQmz5unC4hcvdL6XxuYw2KjFP6jvX2HnK4cnZcbzJ1oAxzN",
  "key12": "2FSEsytAhN9NzHgPfMHPXS76wmdKdUKQ7ibQRX7DDUFALtmTVaD4rCckWmKwswJ6Uz7xDbhSY1eaotWXqzqBrV2o",
  "key13": "2ht2rV7LYf1Yc8uZCezixWXbBUp6zFx837X5bhA9aVHE8GzSd9CpywwVtDp84un1K9pWffPvDo6MJwuSZ8qM1VUJ",
  "key14": "5r4wH4idMYUcertWMHadCT43deDE8rMzv44fzApPnf9YSR7YFJy4cMBTJkWzdmY27r9rq7DoAQ1t1JHN8JN9svfp",
  "key15": "4eeqcnxrdNmzZWzZdAKkQbKJ64v24mHHK9TAG8BKApfGhqRfL3R7m6Pso2yDg4BW6LvP3Fh2dqsW8qDjukjuvsnb",
  "key16": "41nFrEjvm8PUoiQXYPYTsKTpG7489UGtu4LW6xza7KfYnSUXztyMTtm7Tbz7gY4UJyMuh6am3qWTrRyvVLe7nmXD",
  "key17": "3wCpET5MhMPRXbYg9cTxqj2nfT635bzfSkp5Gwgn5BmnFFohifNHNoNybfxwV35hpq9EstwwmAxkg4qHuhqwDZim",
  "key18": "5ymLqvDeophA66pXLYnqCn9TFHMi4eH1RJTe7PFd1D3CJrdkkA9ENjVrqBs3ADah3MtrebScGRbARYh4uaCG9pq9",
  "key19": "portK4hM4UdwxYbYpfrQowRreyBn9QZophDK5DPLcFWDCBKb6DQ6ZWsN9p2ArRmZcWdwVU7bJhN7j1NqkBj3DwZ",
  "key20": "3MqSa94iQ7NXdAKdeD59oowYyfVJcjXKcMk4hYj6PpiV93ofcyQiDfheERhz5PDpAuwJDsXYUeEU1kQSiYrp7nhY",
  "key21": "5Bey4gVQm1DhA7q3gfBqAEPi6Cuz3hNsGW8w9X49BbtykVbF7PNmTgRy43EQXAiT3tSHUwUWR1RwqWZNetTeP3Nm",
  "key22": "5GJLF6FTDcZAnZrv1WoS16eiMsUEhCQUTm1tnpWeLVW9W5RCvgv1aEyYXsvQMeosg5fuAqWMky4VdCD8JrmbeWP5",
  "key23": "2DxWTjd242EVfK16Z3SeDnxJmQxzCo4sP3zxwQobBzd2V8X641ZyDr9FLPMMuuZ5EcxFAjKTKuLEMGx5kXnPiiue",
  "key24": "cStFBEEnhpbAKMF7zVtZERAKFa3HhnizcYvKNR9miHp5FdeM49ou65rYWpjqCHZKXzUsAzH9L9i8cSFr65cR4id"
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
