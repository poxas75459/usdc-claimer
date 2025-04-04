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
    "48feGJPPJLzDzZPowYxiymmBzkvKtcaLTGfV6uVdrAQoeFYtAxNBgPmcm5NiCBvpD3P3QWcKaZc5sFw9ZJZwfXJX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sswfxQWGu3D8v7GWSGWTtNmwKgc2JPDmUpGsY6QRb6V2Ju1h6YshJBYh5MZtcamQeZv9RyDknzvChLR8NaJgn9J",
  "key1": "2kC9HJ7MWCcZr7onAEeusUfKvtm6GnRJYjPnKxcMfNQByMY9xQnw3EZLpNDNFJc18TMjMBR8f5GnGGpZf8fTwaQM",
  "key2": "5ZhJBxE8UMAj5gUi4N2QHVVkYjVFo5xYJUSidBnAuJHmnREAsDa8HUiXh5hB6Z2CgiuNfoEBCX6iRZvcb1nZbZtk",
  "key3": "NY7TkgTrJ2R4Gepte8wATkrZ2Fz8NMKM4oQe2BCSatWvRFzkEaWbkfN1sZ2rG4wgPvmM1quNWnxoYyDcXnFmpcQ",
  "key4": "2XrjM1mst5AefTXsnCnf2A8TSpxKFo7AVjxFNGfuVDW9teyKZA7ZHLG1fkcd4XyhmtGbTrXrSxaDYGAQmWwvd6gb",
  "key5": "5NYQ54Am1WNrHuDqvDdxePvpaQGLkFcUPfDZ8d95z7KnK3z9CcBz2TqGtnaKZfy4xjWrwDJiPKWaggnUnj697uF3",
  "key6": "4vSEzJgY3thDVSTU8xnDmZS6YC9tpBF1zQi8jos5KmC8tx5rZog9qJiJyNaoFijZ7EeGzCf1iWf2KXyStfbyTkaY",
  "key7": "kLNg6CTkMLtRRxxCdPXLXik85CwrQv9BNBnAMGNtsLXJczs3FwzvbQjkVCxi9qeYDDNsuYra3T6CgLsN1LHEQyb",
  "key8": "AWYq5Av6JMJ7RYCQpJ4MNqmUUGTR1mBJcxSvajPNpScgE4VXCNKoomg4PRrswE7e2UJU7b2ywGBC5mLoBBivXZp",
  "key9": "51so8Bn8qCF9fhkRLNPeQxcVMAF8pqqzM9PkKF5gcP1wfHonFmRthkECgYFjEE13npNiGLKktLNnCxJGLgCXpgzM",
  "key10": "iz4GxPRvsWCPWycMniejPquNtZRpmbyTJwAWUXmYaWQnWB59n9ozHifae8WC3mLGmm1qYfmrhwXginZe7esqbov",
  "key11": "3SXoUvaUPVvDME3DyTSJL486BRzfhV9m67avjd7ZkhmCTCwvJJdPEwUeEKH6JS2QA9D1hyCPZpTwZPzHD4qmigMH",
  "key12": "489dJBjgFnyqM1EQewsz5pbwNc34kV5W27Yi3hemcYrrdzwzAZUoCSp2EjhcPJ7eswbn6gDWEjR6x3L72ARK4RTJ",
  "key13": "Vd23WkWYhix2JZKgHSNMSzPY7HnnrWTjXPbTcjd2qi3JhThcXdFGvrCvAmBXShG1qSg3imsaMc7Hg6Jo92jnSUi",
  "key14": "ydvVFTY3CC1KuRysP4VQvpWWbVqMBkjktspYMeYrSt5TWgd99z8kYdB74bvDnr39RWJq1DYH4jRXtrpGCiqELoi",
  "key15": "2THr9WFT5rtAgiMujTJyH6St36ggQMUhnBbTsDtD215DPrPTWgvxXUqozsddfZGbLHWNGGsUXX5h1Xkczh9ttqcW",
  "key16": "2ibPAocn14xDPcjKoxAtMHSGbxzQABe9mr7YWCqMaWwoDXzc4ki8okatcZk33scNmWYjSnXNHBqPshxDuvGAJ77m",
  "key17": "23qXxoVZpTwrgGh8cYyNLEcxgGvzgUkyqfZRncHDuUULmhj2dNW3qo9MNffQPRvc2CXYWVvyq7yAKUSR5RWEwufj",
  "key18": "2M6MGNbvG9FtF3W6EPcd9oj5updEuJJipDYxNNyz3TzZjQ8SieAxAtwEfmZ2AKVGsbU2Ceo5b8vu2kFkqTzVvtUw",
  "key19": "5dUcnRjL1iUJSqnjLk8rdBPWmWFRvXfe1Ca13fL9CwXLgc4WbNX2b1uaqNeBCJ1oWYixgvL6u3nAqz5fMWn4bP59",
  "key20": "MF2d8vQ2pkyZRnnobEp6cZiV4GnzupsoRVGLTwcDqonYrjpgAmCfXy9BLBSaZGc8SrUzZhkU9kK13zxAwqx269g",
  "key21": "5aFSbeB7997iHUCJ8Gu7UNehop6KZxXyj9uP3Q58c7eKzvhZHjd5wVRqgyMvKCuZc3GrazWiZRjQCY6t6grfsszw",
  "key22": "56mxmLVeCbcnp7ib5UvcMBmqtXQ9vp556oKZmkw6p3DSNYhoYKqM11DmoeJWmPr71azNfJZRcVMuFBxhBuVWDTXK",
  "key23": "2g6Sj2vhPN8KfShYEGnpSW1WFxLnfQ61T8WYC3ChPzN8yjKm8brQs3wpzWfCXsPQHK1fviDXsEmbYTCSvQERCD1q",
  "key24": "4wFLFC9sMvcNcm1PfbbuEt2ApHiFk9mgvU1cooaLhEQX4jMTaPzriqsVqpfKnqdSEzNykSRpetoF27PvzTJYBJKg",
  "key25": "5RfDpixLdZqS9vNS6xAmpPj1QVrZwpgi2vELkJVrNag6rxuAV7F3guj8Gj6S3Qmtpf9AXiZsn3CaU1gamT7Kt3nL",
  "key26": "61tnpN1M6qMSQf4kqFq5aywZfayqEynL4jy945y8XDDNYweTVBrzMrSsb2VpZyFcDhM53dfvN9v3V7QVppPK5n7f",
  "key27": "ar5dZneiqr4j2N4jfDCmXGBsqtEVGnTfAervCucXo9gd4sMpuqbs1oLFWNYP4SEfHMtqXKc8magTJmmGoYy1DzE",
  "key28": "2DWzHxdywFaUUuxxHaLGSeiXTi2VvSLpFvrhKpVxnibXB9SxzKgL7uy4d3f6BdL9r6hpb48YRBsKbVE9R8gJZVPL",
  "key29": "7PMXVBq6ocov3idkxAfGmapcPjoSC1rH6AMarMz4RksXejW3neCbBoQ5UzBJxiv4dofkkwfu5pewt4cKUBHdXot",
  "key30": "4Jrywa2ym7q6m997YihhjkNHXCob7UFVnPoaN37dMPEeMopnCqn9Tay6viMWwadLzPa8Jnqyx4t9Wnh4ppBZbGGQ",
  "key31": "2SiQcai4BeMm36ru6RPS3GPfz1a8GFv9ZumGnH77sS25BsSYMkpq8hwkm8p41JajfnncSZURwXXEzBWuf9YjGvQN",
  "key32": "4hcHudYP3LenbR8RqvNxDV7kUJ16CKYr2NESEv7gP9UehQp8nHZBiY5yw8GtPtJYGAKBpjW75MeGc9n2VnKAERdd"
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
