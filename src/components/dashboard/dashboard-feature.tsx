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
    "2epPt4AmUHQgXDJdb8Bg6tPP8tzh3n4UacKZy84fZNjY8KJRjfH4Yci1nvmAkPKVVDUTWb4cGDKtLX7vHJfgoX8K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4v6SB5wn4ukRpDCTZvG5EoE8wR4SpTkhx81aiP94iSrUxNg4EtdSChQMuNi5x77MZvdH2cwWk5n7SPEwdcrwpW9h",
  "key1": "QEfrELkyPvDDTadoRYNNnTsWuNbYo43pg5vm5REiJcSqhU3UvCnFc6BmzRvTTEu4ydjcV4vytZMgj35SKQ7VhRC",
  "key2": "2JBEoS1a8cJtbm3R8UxWaR8cFDWVNGxNwcCHrWdR66kTnfz6gnNg3kxSccnYNYdR6KPxiYzroYLG2ehLqwwcY8uL",
  "key3": "5yHkVdUQRAEy5eEgUgK8gEuBxQDcodk6RC5eQRy4z5xeQ3FtiPQgtcqUhCzvkChCGrTi5jPQDsADnh8gKWms2xCS",
  "key4": "3ysBnQVLrMkrVrsjyZAXjaESsvXtNxKN6ri8nsbAqkfdtHEEjtqqhyMmYLuuAUa4xzMgCJ13VFGPooEVJdzLTupE",
  "key5": "37zeWywHbD7EXtJcZdGPb5ewEu1NoroLtTLFH139ZQu47RfVVPccP7PE71Q5osvVJLbKtS8tCEwBT7EqhCLeS8YF",
  "key6": "VKAYLjevDr7YUsYaXW5S33rW8b6oux443t525PUchB3uMz9eETyNxtDHeMA5wGSmCsZjC4uodgdhefma9aYzVoR",
  "key7": "42LpQq8Rp2TuKcq8FJCdoh6SJU5e8dyiN8S98E67GR9jVpe1FGFoqX4UfnN93E55T81yMdsgRyjGcWbyW2eehX6a",
  "key8": "2xfLYHCm41H8i2V52CuXNbt96PGsnthPhDUKXQGZ97sjhMaT9UvbMbdBfaGQRa86MnNUWkwp2zadaGBERCK6BSd6",
  "key9": "4avTmucGNohqKsKSUUBEk44agXtHAXpKn7oWGrShE22uJeB1cJRzRjrDgpsUq1LWofZgcuRk5ec3pgDz85GDcYeE",
  "key10": "2aSAjchsfhwaDfX25ePeB3N3sJk56CqdZ8gPPAXVQUCRQYT8k2CsnGnS4pFuL4UjjexjhmGsgqGRMwBDRamE8dAi",
  "key11": "pgfBnhPQyUoXbSeUsoPrgEZ6n71hcCqhnjwFyHYaWXKYydoPNn9SbJNV8DmVEDfXWGbxLpFv62HMipoR2BmNMbh",
  "key12": "44kW8j4wMrupJCVLgxvqCLZmtkE3WW7z4X88gAda2JGLVRmbG8jyVTyU3GrfJQLGAv4QDQfhZDbfCjRqeVDVjYYz",
  "key13": "afQXbGEViGtwYCsZuXNYZDyxhgY39ezsFTEwJZtGg6hmeRLJ5tjgp8w1sxdNanVbgurPW1yrU8gqG8e8UwFSZmA",
  "key14": "2jGVffLem2mVCYDNpNhQRvB4TpntnKHAxBP31ZgZQWqaHZMnk8bY19ziDjKWH4SaVP8rrzSsj82x87isEEP6LrnW",
  "key15": "LRMMRpQFPNKmTMR1k6SV7qcSFT1W1heaztQPGktM3bRqGondZV8kDHsUqU485jYZdTo8okz1Vg4RYe7tYyYLQrX",
  "key16": "4jFP39oaQcTygsBiprVZKyNd5BCcEExdqXxEdikP96yfjKwWbvqseAHRkKwuKxqj3QWJnEUDmfxGgatGw1FiHYLG",
  "key17": "mPENaRSELb91MzVsNteHJmmPUtFgoLGoFbSGouSFyD3c174qi4Lp6KvjgvqnQ6KXnBNjbrpzfvAqZt9pmytVz3y",
  "key18": "4E44zHAXrMyxHKy4NXqQ84nX2js166SPPYY4PnqkDKFb9ZWDkA6se8Qa8PgNN8jptnRYegsTWh9e4ZShPWvnk8Y7",
  "key19": "2FYJQJzvU2gduiKma5ubMGNWd6HsY5isuEHRt7RmSpgFJ3Bfn9o3Lc8UGuH4xgxA3vufVTVWG4kcR8YUNs3czr3X",
  "key20": "5JKByQ7ZP8hFCuCKWbMysWBXKvE526pEaD2EC2aeg1n3NmERkmb9cyA713bgwEooaa71H5x6FpRnc733CSxGT2md",
  "key21": "5gQkePsxKyc4BEXazbFjzd2J1ntjHbZsrm4xBNGorVXtvx2txu833kqrAHLNdfHN1PufZesGPK21AsP6zmh7jS3S",
  "key22": "3uHpywS7gqnfw5y2Boip9CJcWytJ9sXKz5d3PHV1Q2KJb3SDBRepnG95d8vBzeeyeGETahEjugZE2FojA6tKRZPJ",
  "key23": "4K89NZRU5yDZgHRiySc9eno4muXLhGUsNjfsCQmXuEyy8VKxZw1gXdpkdsTbWwMXSdHFRnC2YjWERXQEQwWPQRAU",
  "key24": "5FE4aYwfBYHhrXrDhiBjiZtsWHgHDGVsgJ57ZL96HLoWR3QPzHhp3F4au5PM2qUyPJBRdokYug7MviUbrApfafHK",
  "key25": "5QVakLtL6YqQuFXi5Lxu4F9S3feCQAbVmQuQRaDQGVNtiFWanR37PCQUFhZS1fJhDsUwg9JKGkzXkBvwWyHfZYWP",
  "key26": "4PCfLxRDZKZ4hiALtdKt1q2Y3uDptYeZGRxhAPbR2n4TGMFtEYmxpDhnAByUCk97RaCvkS8W3Qo3s2JtWWb8RaLF",
  "key27": "3f8BL62RzxpFWaQfXX7KESGmGgcjfSrynQBZ3RoE4EmWDr9DL51f17ZTPMNauBgEWarWWdQaBdCTdo6ayTwCzi29"
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
