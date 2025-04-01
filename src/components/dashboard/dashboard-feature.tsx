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
    "4ww7WJB6ypjAt1n3MLmpefqAvzrXkdrwyFKBaPYnbYjJwFoeLkzGPMg2wbugpzfpmVwwCupwnzb7XakWrAKnwvDq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23aowNETiuHU4U4pSdSARKgLatN5zt3Pw1dniFVyXqqjNaSEgg1Amfg1mro29oxHeM72NsburdNPqj11kSXiVaLP",
  "key1": "63CpLhdhzLQmsYSuy6ATJj7GKeMGgabKh6aX4EWTvYFpxAu3PZM3CN3YEEjLsLKoq6jQ1NsLxXZAsYTaesiLyywt",
  "key2": "2pairvehLizMsYrsPAs1G6omLG3yFD6GaUHkbrXYS2uYU3sbkcmTJcpjPZPn4jvAYGBbCoNySBuwkzf67WkbanS7",
  "key3": "swr76HNLJMRxEdCfaguRBUsAhh1bfDDyndoA9oZ6N2xAVX7LhuU3p4viGUzc45NRApWnLpt1bdkAFpag9voDAEm",
  "key4": "3RLpMZDbzFWL62mCVRJFDnUd1pMEaFQisdUZ1EWfDwQXtJRmcUBa8LnDFLCfyNXJtt7ip7NwM5kDH7CEHJaxtPT2",
  "key5": "oiWtoHgX1K3j1mzHGNG8LpZgw3z1vgp4C8D5sZyN71Fn55iQ1AEbUeAqhSwEroLbKEdz6QCiokGjX7NyncpLhQM",
  "key6": "55tt6MenymxrUbd2KnXa1ULoxc1kWCHnCnMbRwzT7rJE5KodJNG89vnJKTXxb9VzpxTVigTho4KDkaRU2oaPdGUg",
  "key7": "4aowVmzwgRsX9RcLpsE7hwXRiWfw4UUM42EBJDZ9eoJ5AwJm1qnYX58eCTtjsLCtp65Kk3PP1stbdCYo6PL1bVa3",
  "key8": "2stGtNUKrAoMLd1SSrs88PqqyxJfcrLSoRfTCiWzVFtmiiqKNnpUxguz4ZK24ZXhn76YBMUNd9g686B4hnpNWeUM",
  "key9": "44BNNWVrAex5UawMwE7eFKNXdRSdShHoYgVN2enKV9xBR5jYmEQdP1aFETD53XcmFRov2RMDnYuGcRus6pvRJNbv",
  "key10": "4wCvNiH9DRbZKvMNsQbHmCbDDL1U6yzt13GNWQJhVpZbjxmjtpb3PeKmstfUBYu3mJU1VfNnwEujncMbUg8EEZnK",
  "key11": "2gXEZoy63uBzwfT5KVb5p8oa4vdv5SdSAhXxAjhxfTJ7ZC9KiFe1k7TaimFE635Bq4kj2aGYdqui7GQ4xpkYmwLU",
  "key12": "3Cn35pRii5j8juUaK6d8nGuf4AUtG7c7wbzTALFvKfeyCTscLDssWLCdphT6XaGRcYs5vGUSHjcWceZZpKrAX55J",
  "key13": "NjrijCQYbs98iqBRzf5nPps3eLhUojDLv2KyNuPcp4VqtPhXyciA6WCx4gsnHbQ3GVWEHBXw53Mk15dbYhZtJU4",
  "key14": "4T8vf3K63xmJwjv5urHnUCzD6tUFoCgNhvnxUXedmBqTgRN52pPT96QBrqowvrnxgTHgabJuSMX8315ELov4Yifq",
  "key15": "23R1Ya7aKHLQLv1DdFjjSpBM6w23XJa54tB3E6rTsimVUEwdN6iogEmMCHGf6wUhJiaZcUt7FspNb7YnPwa7bB12",
  "key16": "25XeNy4qoStn7ikBBRpPX97Xbiz1g4BNPumfh3JDmAq6zgfsm6j67LM6Rpp1cAKHMBY1ttPxdeg2SvUE7uDSoQfc",
  "key17": "5khLXsN5qrXwntdNf7ZMgakBU8JMWE2LpSpA3b7QqG16SQZJmH4jv4obLBKyqxaRRmuTSrNAEMnDkCaHneSU5Vsv",
  "key18": "2dntqSuM65CCPAYWSNkmzwcyoQD8oN9XgEDjjW8DWe5JSRadfsEfd6RcYCNW1SwVKkrdY1DfycEN2o2mMLtTYt27",
  "key19": "3nxdRLwMmjipwKdzqRrvhNBy2sk6TU1fFnA5Qi59c18TdZmmCafRDgSmiuGRQUmFg6MRQJmgnE49jQW2dovrDCVS",
  "key20": "2h9LafdwwHVypUA8LG2oZ13dKZvp5eKPQAMKoFwMobiuKLywo134CTaPFymkz4pSoQ4ETG3ThSvQv3U9FVsWL7EK",
  "key21": "5d2kRpYb5wNwBE1jgpdUh9bPuP9Ccn226UiJk6qJjEmA3PNLVWBdswfiZEHzi7LFF9mntuecnAfYe21pEhMXbyLu",
  "key22": "3MJjeYpinEMJHTxz8HDE1vMy3znhKM5qrcWDqeoNoHMz99KpASVVQ5gnsYHPPvK4drhk5EiXNVif3LAsSToLMafP",
  "key23": "5JzXtSxZc7Q9Mx5L2wu1nEVhVkfdJinHe78aGKB4fVJMo17nVQHuk8x9yG1unsGcWcwFkHABFZoKcrCLVAHcypgW",
  "key24": "3LBtyt4nbQKCjobtNJV4m6FBYhB6PHJJ8kWVeobadu2MDN7WJDaAbRzMf4Lyy6k2hchmH5xYUnbCwM1L7XXWdD7e"
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
