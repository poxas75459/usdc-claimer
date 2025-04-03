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
    "497KWqbB3zeYwbppSm8XDutxN1bLtmPPKihFojRk8bfkzsirid77TgctwCW4EG4HAhxvf4A2Lz42STALgK6tt2cr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TA3iah4GzoT2qRkfCH53eRCNbFa9QYyp2C1FZteLedQWeJkP5T8F5QiHPzShPpmzYng9PCsYykkLKR3yxbiot6n",
  "key1": "zdvZzAybyTMbYYitoXvYdpTPGZT7ijh8GiYnfUsbzdaxTVi4cSgBuLg4BYrKCCx21jtM8F6dAPekWER5FiLmGqz",
  "key2": "5Vi2ZvCxHEWDjFZ1UM7zXE1v2K9kxEmmQ4CfWFMq5eXRFeyb6c2KSwT64QX9uoqsnWfJVQhY1mppaDT6UfQ4Xkqm",
  "key3": "58kyWjGqqyC6L2N7QFfLejvSTfS4FQ96PvQ1YduYoZ8ncqZMdM6pqwLrzoJC4E2opdU8a9mGXJmkD75sDQYF2Uw2",
  "key4": "5uW5VW1Byvr3gyvhkjQhxFF2gSWhDWDeZwfKy9ywSjUKHnpBU2E454BtWHSFnSootNKjFMS9JBbWnk1P6NHpxqsh",
  "key5": "2Z13pLVYYNyjVdHoTUB7ynCDjijo7Z1D6Rj6DgqvNU5AdyM9kKtirVKhfqDk7gJLAmm6yAdyDW5UiQuhznYbJcBg",
  "key6": "2n9NpqadiySpNbHXmgm6osFAZAknpeejZUhEsqHE8ZabbtVWXPxXaUqSZ3o7UghAStDFP3So2NzW884gzVn6uwL2",
  "key7": "2TWpaZQwbK8wpjmgxtAGR7HsdL8dtHVzwn9A42cpvGBGuF4qDMixNs7njSXQgrGZkkPUjGM6p16ghcWdnrRri2fq",
  "key8": "3fiveduxd1NJ1hRYypXDvxN3HAawDwSh41ugUy8dkTtcqbrcex95e1x5JPN6D72KYorPcfYKSq1o9rNhM7XvQSrG",
  "key9": "5NnUdGFyqdoG4khCyDx3QwrDqfM3stSS3emLXxgAiyfY2h7tqFuzCjVMu6HSjm8agzS1D1HY9rwLCrNZPh7J8LsT",
  "key10": "4EjPnoCr1YMkUL8sWX8tsTjq7AjBLvMLKrmXbW1AGmzaxeLQfVbYXKBmepRU9YsMZ5heB3atwyBM7WvmwgxrhRrZ",
  "key11": "3Vob7QF3Nxt21NgzsZKxsniGvUdt8Px7HsXX6VQzG7rNpCGBSejYSCpxnxmsXz55KKs2EgAmhLRC7SrY5CVCxAt1",
  "key12": "4iF2yYyxR5jSrCd38CVtfsGWX1UqrARCAHeMThELkXyTQbAFgkvpJFFonWDyAZfQqrH4CtuYjrSKCfdEj9juyogK",
  "key13": "jUMfZpJX6FL2sSwrr53RKk9c6FCsndsMeMcKLW2Uxpj9TEFJXiiXGTimzKpyJGvW55ynnPMJgr6Qm2y8p4er4gs",
  "key14": "2QdkJVohRtSuYVD3gg66mPs2JQM9pcXX8M47XyadcEiF7BeLqWoU7ikfjZrLnuLnvghJwvREtMsYDXfNBGNcXJSk",
  "key15": "dBZa78PgrCv94vwyzFc9ZUuGYWBN9Nw7YgUfF19aDSb6BaW9umdUo7HLNmTxpSuHk7qE2DcfDxsTdb3kpxcN2wL",
  "key16": "4Gg3gw9UyBvJ2yJcoouv8Z2Dx2yZ9Wm68GqA567PsLJb8Xf2QLkjkXZzfppiZMySHLf45eHZ9wWNpV6mFmSQ8oUA",
  "key17": "3E99qr2hoouGsdfGgYrDRJeFa1jrttcpGCXtjJJH3GD7PWW1CaPhbfwTkdJLZxeE3rbYyuwz9yHE4yAKSwwrmQwX",
  "key18": "4hZ1BUrx9ZjivusZzunS9e9kAQJrKP6MHSN3iZEgwG6eL1EPQR18D7zHctWfPmcw3pM84dJThrELtcjHpzv2mwmi",
  "key19": "R5GgP3gzSacSru5bpgkEdsw2U5afhJepjrip6W4aMPVku6nBCfVYJ9mS1jauizaFFjxaXto9FQg4kkcWQtaLBkW",
  "key20": "2H7bR28qnxb75cdDnW6xBSNqkzWP54LEazYXKBmG37A9ZXPaMugdgbQ3W3FRAzJLKZQmKm7BTSV82QmZKvVZVkcq",
  "key21": "3Hsqiy5BitMApw1yFP9179tfB8aVc27g9GAnuwbzUVXHQ5egVPqKCC74rUffREyZmSz6enPkUgUY9jDbLxaZ6rQ6",
  "key22": "x1C41rbpmw1yGxbDSf5vw8P97UcM5LfRSCFJJZLY94byfnbNikZV9GUMkrdseNMATcMus8YuNqUs8EjXHfL3Ex6",
  "key23": "21E63yr1SP2CGrxgjWY5vsiXGHVXGBN3qa5j8q4QZzkySP6AWRCgGZ3oCiUp88j9GbCrphCPURbjLYPvLdxukef7",
  "key24": "3et8rkcgnrUUGzyPu9VkvBhvHMmeHLXQ1zfUb4cvxg7HVwgFrAgJwgtKY6PaQbgV7ArnLp9QpkYk2W59S8Vk2chf"
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
