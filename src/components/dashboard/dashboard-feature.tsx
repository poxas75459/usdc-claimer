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
    "5EuEP376tLRs6VL6ujiYrrVKSzN31RYKoDCXhSBLb823yfQa17iackxBnvkPL13KSAuEnq6Vk5g9ZxsvVBPU2DWR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5omeyVvMKezUpMQ8qJUeWjaX4bhHCC1iPxb9f5XFzHdn11QF95DTbpQUzdafcS4MiEjKSyhxZCvwhzrxPH9FVctQ",
  "key1": "6Pgh9CgYbdXyZVCHg4z1q7dJ746Wiof9TJERU9UC3n96JFpb5Hf7At5NzhBzXVC5q4jGxbAcVVWBzuUM89Xcrct",
  "key2": "4Wypqj2ei1oqy3kUjZwpJfFJC12zDfvYbbnihMeDYoSbWyvPgZ19nTVJfUrEm7xZ5UvtQLfc5RSrV3AYJYVcn81V",
  "key3": "32n4g5GGbEUjrpzWKqboVkAgYBdf9rL5YhNXrhhEjn49wiHbAVwgvEXjojj4zLv9Hd5yM4q6k9UfoZRwzVpx6wPt",
  "key4": "2FMhraGZ3ZphtjQth82KAKEAkhgpMymN9wmz8UxCMvURvzMnt9ctYXTrCF6mpQMU84EvrRPKrGcdCQASbSrNUZAY",
  "key5": "2RZLUN6FNfNvAp5gAhsT6gUCyMhDtNvZ3WwWcaoGLqmajFe4gJU3q9M1aoYM8iJugwzm75QyJ3gRPJDxFc5MHvU5",
  "key6": "3owShV5LK5GR6dd9SdPcprQ6w884hFPjoBmcsFgUxyPRQkYEL4F9VFiT5dsnmBZvD52xzGQ8feNSGAU1uThBM9Nk",
  "key7": "3LZZy9TLdgnVUAock7msABY816rY5M1FGrEuLyqLP6K2SvxpDg56aJUYD9oHu3vnNVpNEhADwP9fCmp6tgySLb8g",
  "key8": "4vbo4iJioBR4kRMuBZVw6vFMhJWb7jWvDQD1Vh9adLVKtT7uaNze2QJZSQTVNe3BB85LLEznAegRLqyCp8Wk1bkr",
  "key9": "4i6BosJXX8qJVCt3imv7nqqiLXe2EUz54pZjHDF36oJhaQzzJstgaszCh8udJK37fHHmPzrJJSop7gbzKPdZrzUh",
  "key10": "3uALftYx2dfPvNZHv59rc7UMkiUa7GMD8faUi4RGFq4t9DAqUjHBMENaHFqzdoEAk3CNzbbvxVNYi4WbZA3sEhwa",
  "key11": "56784zw29jvTRNz1tJh9aCawUEpNnXYguvxFs2vfti93sgXNLqjPamJjnmjYQUyinS6envMApiho7UPE1w56gwuv",
  "key12": "2RmrmaS2Db4cgcQnNXnSZLwyHKK6TazGe5xJfYLFpQtDjyu9FV1fevH7beWRF6nKBQoekZ5TXfCK98XFivTtpuYZ",
  "key13": "66V4VLnz6oNTRhHCvUBKSJ16wjY3283YTFB7YFJRXnEvm9dyGZz63wSCK1zmb39637gyhU9cgg38aRgKWjyuYTsH",
  "key14": "3xfEVXTQ3QqRved69u79HZroLkxD6mZsF1vfQQUPnR2wpaph2jTbbrDsw9N3KgdehGuFWXGHYBmsYRpKt2aa9HHg",
  "key15": "5rBbK1BQj2dWw9KsmSwxyUHmLZuQDMckrFSPdy33Nbqx6dF3mgMb43NJe3dWh7RE9utBxdB38hanG8YcNc5jpieo",
  "key16": "2njybUrDDEtP6AhK8fCDt1wHakY6SbxfDXS5uVbrSRqmqaegwstf7LabGvge2BpyrQKuqucKYuYEac1zJFtupuT5",
  "key17": "3LDQPwcN65PGJMqShtxTo3uMk9KpYdqww4wGZ1yPXhZ8fUu7AaoiwRgoo5zg3GLD47KgsuY55VDhzbeSY7u28qMt",
  "key18": "xfaiezYnoBgevHd8HBYcU4sn6QyP2FHP8kvAdpXbSDMU1gE5Vd7zAmb5eNSbhjeUMb8VntJhaEKNGMJ2t7UNGHa",
  "key19": "4iEQAErJ1MAtroJ8iqCwbBJT7shQWUmkPprwmgkRj8ErsS9yqrpTWYeCBYfcvLruybMSL3KFZnCFBfkMQvYHKqs1",
  "key20": "53KT7U6uytEYpy3haVCxfeAKTPvf7C5A7QThypoqnvkTVmbK3xdubhHzcibMj7VMx7B86rripi1dXTx6b6CVoq4N",
  "key21": "5c2mR7G88squkXeyQFo6ifLH27jLWC1kiqsTorpGctGMZH7khssZJYNiSLPpa5aHntqr1WqJ9iUGbn6Zfdet73Vq",
  "key22": "3XDy3PHqCQsL1rAabjxcihpF6B6v6TrediJmBzsKgHyWkdK4TWL9Jvqqg33iwXyQifq8nV5WvMunEgFM6KQGyE4k",
  "key23": "5VfQ6uvrYtQjEEEWtxMTwCNqXPGGL2wcZc6Q5XKhNrwBBdcPygUYTwZKXxY5cw6GtPQ8vQGfUqVjCk9gLkvmbeKv",
  "key24": "gb34DZ6rv24mYGYZyxbkUV7BVuugREek8bnev259d1V8kQxDqAXw7ffGAUvx5GQtUwcLSpoWPqrMY7Nq84SrBHk",
  "key25": "3oC95xxUDwDd3ZcbUiPGKFPpiJvKTdhVunQBAFguT3wx1fH169RqMZfXJbT7YdtHJx78xu6jW4x4VNCZmucXThKG"
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
