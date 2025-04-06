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
    "4fGzz1zGx6A68XwcZCxSv1ruyE78uhGyeSjN3sw3TR2cU4vrY2o4nueu2FkamVS2cwPXwJwbJfpBYzDCyZqU8rKX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4x3tbmLdmpNT4L9AkASX6qQVZ6vYHJJKCU6qFY8iJFxaPhpAxkZ5aCNcYRq6zBS52TKzJSEvoQoidcABCx7A5w4d",
  "key1": "ycZK1Vha7QwjBNSoy4imVh6XLeErJ6Yd2Nx2hQNLRa6ingFrjtogCB9SHM8nVNqGki5qbL1xeM49J7D74e9gE2x",
  "key2": "48cnuLadbhVjQduFDbnyVByWBCHA6iYhDHPjLgpx4ay8iTkb2c8PbwAN2fuuuvrwC5nvdmaXPBwS5DYDwzstfi5U",
  "key3": "5A5DBJZjCP3BbtphdH6dUBuEo3jAisp6mRkjFVeztWQu5YzmamaNJWeqwF64LdepBEEiU6A6sKvGZsqDLw5ETToZ",
  "key4": "4eR6XWZfLqKQBSGxByhciUcofZVbmShCGF6KEJqAMSEhdVfB4rNVqo2aS3L5nWMGYT46ager6ZPavx8gWj56MEQX",
  "key5": "5TvTPmG3f8ziDw3kxonoWEXHSb3P4uL8J6ZYJKvEG8a81Jpm2cJGmEmnhMB6WjrzJfLBwfJqDY1npgfL6BQ4qk4S",
  "key6": "4VNjc2xJjLFDrSaN78AVRnvHG24T6zcwvnD5AbC82Ufw7EUHNGbeqbBwwx2DrYLx76BNmaVh65zfeuTfE5KKToVk",
  "key7": "5s3zjCKPsV3Yx1CoKMxgubasTRRafSnf68AJCXkz5HrGTGStjDHCzpbK5Y7DqNDGUfgbGd1DiUiB2EuRacifjRup",
  "key8": "2Dq1ac7HWk2S9uETBqgSbx6VkoA8KseGUicFz3H4dTzJenRnvKjtrRk1uydhKvnNw9HAhpdxLv8TCitRk2p5rLC2",
  "key9": "8KnwVp5bRaFHgYpr4uMwR4LtGH6P9sqi2FRdDfkgd1uzG8XMXRUuEHRKMpLyWt9BxkxSRxAj7SDxXAcwiStpBt9",
  "key10": "awLQCSwaVbmhm9CzMF26tirCGHpSMr4g6ZYCQDZfEStdxHBBpG8b4wpyfCuqN5aqrRuivvma8U1WhDLUNVTkG6P",
  "key11": "5upqfD7nrGN86hKvYJK53eUEb5U6TGRZdxZMazCzbwqzfTqmbvkGyM5tmfXvXC6XevkQqsc932cARZNfRNsboXx8",
  "key12": "5taiNmZq7TBYN1UwJed6LoxCjeh2bVcZFx8sUoExZaY1iSQcF9BMUDbmfiQERFBU3MXHcf18HBr5bAtJWkAppdnH",
  "key13": "5rqdRZLP8PuwxNPh2jL2dcKrsnmLGbvhRK8HrsdzFDuznKMEESyw1CCskaNo6WA51gAPAQwoDr2JfRrN2oufaJMc",
  "key14": "44A5XsLhyS3ooTCqUGLJK41QCD3PivejGFbmrBmkAUiL24mfDZPW12dB2aMqKJwbWZxJHZAkTVEkshcZLayMJJW2",
  "key15": "56DZa17EqwR37tHtivSf1cwd8dg3RmHw6p6SHP2GuepxqZYpYkzzLEWAhrbjQquHSd7KSjyELmBNXssLxWUA6bg5",
  "key16": "5jGZnX7bZTwqhjQPupBYnkacFxsQEhyVnHdxPHFTetg87aUKrWjT3d8Ux4vMyD8RmDARH3fuaQm923ALd9JmUgQ2",
  "key17": "2GAJwbEfDjGx5P8Cma5MDLXqDvrDJjCNmhdY1HaYt7GHuY7HeWeryHLP1Duan9sAdZ37J5ZonEJS8uxa7MZKxBzJ",
  "key18": "3Eybgmx9XgBpNJRXb4DTeEfoHNpwF6RLgCMFWB76YTX2Y275PUmgvo3b2DNy8zTrPpxJUhQ5wKmCCkrvcoMSGNJH",
  "key19": "zGPUQ5eiAqTPkiVwHKq8W8MGAAnDNURVdNppxcUz63w3ykdw3CPKKnwkLbwkVu4P9LF6ZwN7BvYiBhos2XXPu3m",
  "key20": "38zHtVnWDLXDXwSe3mxZSTSrsxRQPQYTk4ai3KVtu1jtYfji6yyqW2ys1kLNY64hvVj2P5cag95VqA3XTXsxgkez",
  "key21": "vTuy8YPFqqeumZXnCacfamP2W42JPTqsgGN45YeMqu4HCES84qd3bGaV72BP3GA2HBn6LD31QS4wvQZ1mnka7KH",
  "key22": "4ywkbWb429wiWUjMRFDDz9firmdQ6LU5TPv4wqrcrbp7APdGi5LXV9BWvRRWozF2g88kkNDvSYK11bmDyBGpuTjr",
  "key23": "2Et15wrkZWoeaLStSpiuadyCuJDPpFYKZgJpkXmZcVEeBkA6qE1eAw8TMSEoQoL5pnPMaSphqcykUwjSVN92WkUm",
  "key24": "dA4rUvG1o2JTEqaHCvAr63CTVtNZz9DVmvixXdaYbCuRWw9LgDEGNPZo4ph2WW7Z8VoaGcomPvN1QUqP4iRVxBP",
  "key25": "3TfAyz4j3itino76zHjLigffK1kwhQWSUML92VcdKG5xd2CyK6zqsMvL5DGBcG6GDqgjVnoFztmnoR1uwp54AdPb",
  "key26": "4Kc8p8AefYpFi9HeAsaR7erSUP9UoDngZL212ZGiKMdaLCMdHs2LLuwBEX5afYZduq7AS9jwFKmHw1Sssb3qo7GE"
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
