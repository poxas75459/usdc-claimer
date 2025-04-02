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
    "2HrYJkc8rsMQGyZnrRvHp2XrdXzrstmvsAnZZwyJpnCc96mozyyxeYaRdztErmQZLet2bvkeyAqWgHe3EvYAhPHW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Jwgj4gJGvV1LznEZgumZnLTjHYr9EGyXZ7AEWXM5YLf4X2EMiDYk67f4acRXU4qj8yxSbr7bGvFL8NN3CvdQDzy",
  "key1": "2pMn8MjVTQfj3yRUf16bmjXhULcBcgqTBZS2B7RcZTAFNrpohkLZhFqwfUp3ZAVP6JvNKVWyXEaji11De1rB5XnL",
  "key2": "41priZgJ3gK64eomV5VBGiYiVHVkCbaqP55i4dwK9fMrgPwA7xu9QQfcyTTqmFRMEazDf9czNzkwSteFFJtdyubP",
  "key3": "57L1DXBp3fbbKKF1rhbxyGcrD8EJpecQqU9ekNmRjv1WPHUvxAnCirrUbU3DDNuPT1aHAA14Wn9CJm8PrzsfZGaS",
  "key4": "28nZWM3TUnbHGzURkLwqW7JSpQjkifMzxszku4stM2oegRwzNtWqRbWosYjpikY3nRLdy5hy14oyjaWzC8XWX9nh",
  "key5": "4ttGqScwthaowz8v3fEMEgycgV5PNBUWkxbBuUdbgJeNfustk1kGvVabXKRTxYxQqBqkJinfkeEA1bm19F1mDVgp",
  "key6": "3MhBWbsdZYGtJmQLPFVW9HZcLwV5gUb1GQJupbB1s9KXo3ZWfT8zs46okMr1Zzc1SEzqL4XGAWtDK21JEq86kWBc",
  "key7": "3imdhkRjEdAUUz6Yp5u45wyg9pPoSW66mhyoZW2EYBCX3THoCykTVhkCbRm2bVq1GoYEKHadbGYgmGena23Qcf9",
  "key8": "nxyypxAgfPJ7U5No29jyhKJYYuQpAMCeHUQ44Avh2uZirTmvi7aRE2eoC5yMq4uapryDGhJpkYAgt3u6wtSCbbV",
  "key9": "5ZfQrgaXmJHyx5vWEno7pP4mW5VjLTfgdLvN8VEM8Ah2aXPnDjrYeAhZj2nFmF1W1JeiM3fS9JFMFipd4FRJ7xYj",
  "key10": "zno149BvTQaEcvS4dYLxaVPS4vcsWWmSGp3AysnFC2eTkwSNgbTJVGszvvvStLagurVv4tKahjhvPrJq6Nrh7b9",
  "key11": "4dhPTBwGxiYac1yMwV7hESBMhAvFwerJ98N7aHtFX6gQYULA65Vb5npTuRmswSeajxHtE2GDtNF3bD3xz9nhysGK",
  "key12": "61pGUgjFaFFvcz3rq4Yy9yLY9Mt1b728kc2fwPZEVjgz7bZKbrYytvnRB7iucnoyYr2xzRF7Wric8vDN7FYsHMRv",
  "key13": "5tRyt1V28Rf45hFSYwhp3bbgZJbgQSWx47pp7EKniDaiD7FZqepeY9umzKRNcGnQDMhEWrZkiCNWEdZwhhPSwuxM",
  "key14": "2N8hxJuNNgB2KLhkoxpbr2KhSfZv9Z24BeqQZXaGtB8TY69pK9uTyFUs7wRDM95Uv3qGo9XgS8TexG2gdU3ugjgR",
  "key15": "5n8nGq1rAqdeCz7fNRW4doNN6o2y2vM6Zwy78CKGk3QtSwhsSf2XptZGFnXBkaPJ7KTci8QtctyHNjtZbbijGc5v",
  "key16": "Bf6souTkM7L66yktbJdjNARRcXbX2zpb8BBPfbDnrbdRG8RrPsnYcFNiBSEpUpcA7mxuJb3xhesWCYHzJg3Yf2S",
  "key17": "3mrDxCUvqD5G6Qp2mVDL25envEYzyUi9qTMVSEh6dkBGTTNwTsSmF664RmAEJA4fMb7Xx5NV3k8DJVin45Tr51qT",
  "key18": "ggwEYYzCCqqRSsUrV39VYh7ZCoqtQjH3XHQowkPGgcd4HLP9aioE6TdNMvW5b48uPfp1ic8LrUaFjpyLcSKs8De",
  "key19": "3hH8icNTbea8QH55K5AX8RZKDQAg5E33scYQhnQgm1voXQqRdJy8hR96RXXqV5JsDxVrH3ERDyQwQKzWLxy9nud7",
  "key20": "3ssAukB77wP1ERSv3VFx3UfXT1PFQcjuHT5Z3Hah5QNkZVPicCuAnMV4m1atq16rgmrsfXnRZZqH4VTPX3cNLsZY",
  "key21": "4cgLkePk8PtS7GVS4Dvu1VbYkgZKbppMAhx5LuBu5FjKoE5aekaasuvrV2VsETbjcM4YwGrhxpDvWkUSDLotnFBC",
  "key22": "4dmST7K1UMqtPTyYhx7g4A8ePpBdaZJFg8kqdKQFuRP8wLBbQq89AmawRiieL5zP7tQD2pKMcdYm4wG98e4seM1h",
  "key23": "5nCwcS1PjZzpRuYThjHkTVWZAxZz8dRFjc79gTboqAZnEVagagSjFvToFFuNnxsGCXnVF3AHY44mJ7sAsNKgdpMS",
  "key24": "3vy6PshZTgrb2GtPCVUeJRJLSYjRruNKV8qCwu7UBtGUpmHdSBSU977SmhsdBmtB83pn6UJmkPbUmZ5YJc8Jd952",
  "key25": "Rkt9BXbjvmnyDVg3H1Sb1MrzSfKgwMabH4XGrU1ZvHxHw4o5oYKqPGArGrLQLY6gi7k4g8XuuUBEykAoSiig6JH",
  "key26": "5pnFsDKs6PP7bSwmQwmHFrZ22VsgJtNNCgcRWPNsTPNWkMpMmoM6ttGhapJr3ecs6bq3tq89oTQZ4E7SprQBaf4J",
  "key27": "3dxb16FEH8iHyt5GZJHWDrasdvn5P6R9RDBAxQYad6j4PtaBZA4wHF39VRY2KQ68fUN88tn9RF9BiNjbX8xAyC7V",
  "key28": "Wuh5HeCUJYQGsJg9Gu3zgRwuqjq1faQ9GJuUt3kNvoJrXnrywM4zJcFRiLDppb3pNDFV5ZMEGhbcB8uzy6K3C6L",
  "key29": "3NCCoZxGHWaggyAVmauu3S5EQ61G87NA5TdbKLjmPYHBZRfphQyRzTj68P8ymNK5UpxYobcHzuTdbHW3hDjTQPJf",
  "key30": "xRMYunpcuFz9yKxrsXzEkRY3tziybzUPGCNcvR2U5H1dDrMByuTukdrMUHhBdDoQH4MBDCjzZt9wjHPFKVmmYNz"
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
