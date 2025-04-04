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
    "FtaEWAX9hcbq4b7fJJi2LCXegF2JG9CiYgcoUymXpG4M3JDZ3ncRuHNyAFSkhAEi7piYEtcMHS7ULyvD2B1VnQH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "238sU8G2ui3NHcJp7wW2W2MYpkffo6eTvfQuDkcCYSNnMd2UJQRmFypS95kATf2J2xSSKB7LgGYZewoQ4yRZpeyk",
  "key1": "4w4KaDR6mfhUFWwqkk3xmZynd5kUAqBZjdsYPbmsJkZQDnwi6fgiqQo5s19SybrHcXZxkPDomfaQmWfPAsrB52Cc",
  "key2": "3ZYzkdityPSEreNGazxnJPqM91yBCMDVZXmUgC5RDrzkmpWsEQFduM9vPCEjnm6SMmWuBDPddQ6ckFzGLi3MKqt5",
  "key3": "3BqxAXomeQHNoVtnb9LzwzKgGG2jGZMH4CvAYa449Mrvvy6twDKmLCoHHTgD9HGJj1Ce8VtbbQdDpe5TKfWsf7vu",
  "key4": "2H57LTopbehdp5PA5rabjNsqoQGtuq2dBvwK9KdqWW2qLegf4C2bhEJUsbnRQktFQmLkhdgW5T3auQsV8uGCj4pp",
  "key5": "3xVk6EQViwaSfh3koXeQcybv3EXvHhGdaH599xQMz2L2KFsNjmYbCGBE5nJRjHbcZMx5EQJ5zGtDtDMYEs2Pufc1",
  "key6": "2wZaSSuzaZWZUp74rxbBs4roYymVoy2pWjkt97Q33B9MD3vqCSG952vYTcUVj2ZQfj6h4HACnU1sLjkCHQ4WCsEC",
  "key7": "4hnDmykS3r8BDQDdshvB6QobF3yDypNAg6hrvyC1DYfXA4aQQQXzB8au9DxANk3bPF4Hx2YJvJFmNXEU2hph31ow",
  "key8": "PsTqFKABqqf7yviLtZa5vqaG4s7zif2hCqVukEKF4grgr15oruErHQC2XBEy8B4xcuqENPtjNsob2GKAjxbTwcv",
  "key9": "4eoKbThEw6wgRdJdsapbE8qfxYjozS9vG5BsgUitGY5svYwsVp3LpDqD8HXrz43TQp69rcnmtETm3aTQQskUraj",
  "key10": "25nUue5Q7QvNWrtK8PfiGmnuShpPUkanJA2WW9cxyB9xcMD8DpNgA36wMeFqDtum72eA1TKgGa64gTwqqFYXsxDQ",
  "key11": "5fQPkzox4tUDF1yPuhSbsBw2VyNkY47PGv166v7rGC1tCj3CmCa2cGupSfqrFbeqvNsSynMhwQxaYSpcJ4kfk69B",
  "key12": "283SRrmZUNW38ioxAXnzzDH2Hzkgmx2y94iTFeUpkbqB2quC6CYZBc5ximEgUGcSt3Touionv3xr5cmejG1adQCE",
  "key13": "3JfJgac1VrDAQJ7ZnXp4DFAeCcfSokPv3H1rWKh4vzMQcFwmVrMF4qs1DbeDNYDzrGKgNn6T1uGmjqFVZeqBuWM9",
  "key14": "51jJbjMya8AMXU2Qq9rJ9kLahRh5vaRCvrv2kJt6sh1CMcZsaRhzcJTmexRq2rshkQticmjyJfQEx2sp3pcNWT9V",
  "key15": "4yQ9xySQYmv1rfdjXFmjHKbtp1DinBpQAmtGUdEdrKLCKQn7NNvEiatmLmppBToE8XZVCmLiZLAXGB6d8hgdSEPn",
  "key16": "28o57fwsbYMRmqRxu5vZKWBcKjR9p91sPbJcszn6MCdEboZrLMTnQdb2indM6nYxFLD65ghiuANc4M8SBcpTCdMj",
  "key17": "2nFfnvNQ2yuz7KzaN627BDHCPZP63xEhygC8tTjKp8dW4DpGsFeDx1H6AZtdH6Miw1qxMe4J2KsGQbbqsdtYksLK",
  "key18": "2TQGQEwiFGMDPc3u8e4JmzqrTE1sDu1vjXVnBeSCCtLnb1wWbPyL7nAXnyhG4aDTaqT6EhN8FL1MXVHrQsAZEkd1",
  "key19": "wJMRExXtRgb3MomtSZvBGxvCbVtRujoUqaVrCgnvqNGKcPXMBJzRQmEdGjTetqPaViWV8UiN3aHL4UcZMzFk3XH",
  "key20": "5soLjWt1ZPnPkCwUzdsxQaoCgreLU53kRndM6PEfdEb1FdxongPGEA39jZS9vE4Axr7Kx5wmFByXNN5DF9Wz1KSm",
  "key21": "3ARq9Q6HYFDenryX1MrrwCWAmm8tVeZ86KGMomPjfxk6QCsdArnesJdo2MTZgNYmXdSTQwUfkfWXojMQgB8keav8",
  "key22": "5XvKx44beBuYorpcp5EWJsPpiyp7NXn39tVvecmJP2NteEnZE18dT7tBFwaXTCbgneADUwRdDZmKBenGUXYeupRS",
  "key23": "yrZY35MEh815EA6GVSEbTo2oSmCYB5wXXD7GAv9Eg1vUUhVUVABHANXTCvRzvwyANi2DuuaA8pFVmaB5pko7o4N",
  "key24": "3TxkvvrJvu3fhmeWjXgYhjBx2FjjoDYi4DaFJuN5EmGqtmbmRNvfy6Yk7GM6jhxD8Hg5EZ1xxc2ZQ14z3eYvdADb",
  "key25": "5wG8WRDhwiBe8RRk8T9w2entJ5NSQiMWtTnQL5fABQF7bnywEgqNSfEh7jFWTea6fF1G3ewvy12dMU1DyW2yWq3g",
  "key26": "5pN8YBRgJmEV5nnie4kvFauttfJG8tuihxnznBcouZBCfagPGTvr5SU9HTCC8mCLFTPZFf98udGHfib7F5pPLru5"
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
