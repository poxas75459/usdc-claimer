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
    "4X8dGaTPeGsrw8A1W8ycnpJ4qwKDP1qvFigKR1wLJFCqwMKX8xBUR3usmJ33hw8p9zDYDiYZ89GdbGSe1uaUTiXx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GDhLiC4moaJLoVworzc6PjkxT2TE3XPg6NxTSSL6C6VgVD9YruhmV2ejLtHhC9iQXxuHGhqfz6Si3v15xzfvBHz",
  "key1": "2Z2Vq3XWVqBdjFrpmRcEgpLFoNa83hfnYKRUwkBn1sai3DWZqDEkaqmT6qRvhwCba3gBpGEKuhksKS1C3m8b88wN",
  "key2": "3aVcfkBNu9MEtUXFoxyrf7f9BxUf4YcveypLnBgYVrmhR2ZVcJWrtoGENdxpXwQCn8h2BAhcsxVeZFzR3pZ4Q8Fk",
  "key3": "4B2ZqjcGEYDiVaRFmHxomwULcxhWe4TgUvpYTypEvEGSuAjCpSf1UudpBJidUTEgdB6yDRSozTrSpFgyk4HobhGo",
  "key4": "5QgpD3ubfmHA9roi8AZYFxDTSGBUhx6CpXhVyh4LbErTEjuq3XBmaGGSqLj2hcX4ABHF5kjHHfctS5k8Qm2mKxP8",
  "key5": "5WsB9DmjiVAZPKSCs9Kb41cReJSzcjyAoi5SuFXSL28Kerbbn6RHQj5TZMbfZc2oESy3wt5SQ2oaJCnMvUCp9ZyM",
  "key6": "2ktPMnEerRYu6PQrGLakgkbsvofSF8kifWh7HgLhdfyVEcr4yjAD4gqXkYaWp1wNVRPBsTHCLfVdfcwfSU7jrqcq",
  "key7": "2RQ4PDMBQiab46GTkgBfGj354VEp3S13xEonV4m9izsfnA1Apgsz2tZpQuiPA5jRJcGtMHZB3zLdXFRmCUYgvXgM",
  "key8": "3ewGruvwP4GEiaJUHY1zrX7Pq7HqBVnTu4rP517Z32YAkjJuEsL14XGBmjHem2TChAiG4qKebQbVX7PfMgbc9oCP",
  "key9": "5d2L1nkAKS9Sq3ff3oScL27reUvUiRg2CjiRKv6GgyiFubQrhvRA5E882ar38i33yXiQSxx4crgS78ZHxa8MhEoo",
  "key10": "mComnvwL6TY6BZvrmckwGmq6BpeyfmcokoZFGM1H2JdWC2EU4QAFxNyJZz9Mv6jHL1Nuxpdc5xvsXiWNxYgeczF",
  "key11": "46RCH24DieyDvjHhz8t8mgHHddbnU1XXCgcgR8siN7mGcXavHNEtSaEWwWvg2Sok5GhXhYANtCZH5YadEz27fKbN",
  "key12": "3WbqpQMnASfvTNdzWoUkDr2BDd38bruDj3Zh79YiDiZzeWa15h8FkdAREedaD5TtxsoqBF4344EFfhiD78GtZXye",
  "key13": "2Gmf9QLUMFDiPeZGm2HcxRkkg4QXWb5hRw9jrpetRDDHTnMXfKPCPY69LEaL2ftnZpertXocGeu6RhTkXz9rnBHL",
  "key14": "2CQhRwc2Qic35ykqhiEigj2oygUdfdR32U6npqGjfnHev7nMArLyyLmgzfZQtj6DP1aZvdEy13YBiK6exWt1EM1g",
  "key15": "4hh54kEovr4C7ZcVAaMf1C8SPHZrtVMkTFrEm4kgPWFJkvcnqp98HtXNoMB63gMpVqG7N5Ecu3GnuAr4CVpiAwsA",
  "key16": "ob6kigosoY9vXxj7dpvJvnWGxvxPS23ZNLN6Guv4tnr5GZNAXXeX5xBcoJ2nnMPaEv55XsjLYkfZZWQ32wsXhpb",
  "key17": "c1DxosZtkQXeyt6XRuKwF9ieLqYyt55d8aWbDFegoYQzMcbMaEHWiSJJUCsrWXR4z6K43grfuuhrUEtJEjLPLJg",
  "key18": "5oxhMiDLXykwN8SMai5JhKk8ocQXjRgh16gzxAj4C7XFLanjTsmVc8mEWdYSoirYQHLpwYkypCfqSMmr4HtkddS3",
  "key19": "CjfKYWfSBh5XnAjCbquCawLjneJHifTPGuuMfETLZSGfT6u4XXR6b6cUBok4fQvVxEvcAFQ9yqU3tvWWPtSLBNX",
  "key20": "5ZvZkocrfjkTASj5Gz4FUSX8cMrhSRzLdYkptq3qL39XPhZKWsTLAJJdVQhjw3iDbUzD6z3gXvGw2oQ48C1AKyjJ",
  "key21": "3i8e1JVbvBXjBocqm1vzB8wmLaKtmiTFu6hH2XLezNpRH97XAMjHgjq17GvE9mMZMUhsp8JxXbRjDeFy2cWFq6ds",
  "key22": "2f5P4uqCWnXeoYCJovvzMEcMuxLQGT7WhqRyG1SNtmk7TmSUnH5iBDkeFxYQ56fwv3etS9NRDDbFYNYzhaU3UtRo",
  "key23": "39SgFVVVyP5Lo2RzURbtF8crpcX9cMuntxajwWx1JX2Tm3Vaxg4i8F2VeGgxrANDJQAyPvstrZDqaV6e5auZQ7QV",
  "key24": "41w93hz1qJfYoiKPGBCUTXTiZWRL85ui3YMhV5WjCKjvLTtaj7gcYn6JLwzvQvrVKHhYTnAZ2FCJ39EzaKxBSDgC",
  "key25": "38EkkqMAe2VhPYR3ohQmQQ5LdFbuBmKN6SV6EpvgGspJVfy58dAkjozY54Yc2kkaKMVZoeYtAuVtdFKDimgA4mNk",
  "key26": "2FQcDZjgXjFubEgbEhhMG8kK6CGrKgZwCQfvM1xA5Pms2vxTnanXAyDVMr1q6KVMftdyQoVMAmhM8DeRurYkxsb8"
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
