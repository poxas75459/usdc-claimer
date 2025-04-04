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
    "4P8bwQVk59UQ6exSQPy6GK8FcYQiR2GbqsVgNUPMRSWCMThzRrYv9KSnNuo3K6TT54C4Rvc95tvb2FZ8ZEGvyWLE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47mZ2vGRtdbwTUk3AGZDXATmsKzAnxnhyXeqMCYDYLNXN1FjxrhBsctsG99JULJfkJYii5j9Vmg3awfvWDEb3Tfx",
  "key1": "248ycyBFauDaDrQLhmhSRDs423vxVQ57eAcs4E2kxfyR8ZgSZAKd36xGMfS2tQVLrBcY4tFtKo4h6j7hi6JpabCo",
  "key2": "4HgnwUCHQ8Sr61ozQyzYuRZhByrrCpcGFozsabAfumJYRwCPmJBpnJgsV2fczf7HLWNUKa7hmcZX2p8BwEiTJRht",
  "key3": "4232RnnyFsXHywPZo7y885LKzzwBqVCf67UxAbQcjz6QPmKiUnvUQjnWdoFF1nNyE9nawqFZdwrkzQ4idwEuHJzr",
  "key4": "2s2Nc6EhNNTztnDdS7g7FuPyR2gtmw2qzyaMGVEevMfewYhzTyx4KyJbuKCaLWrvuvbBU3A4AXoHK5DjqQsm94Q",
  "key5": "AY7hNUzCVPTcgFCwE5PCTqYSqGmisV3ZXacxFbBLR2rt7KbQgLJiiVmBjEBtR5HQasnZGAvSjkfnhaKsP8mKN9d",
  "key6": "5PYa5BhvTrNNXY6bsakD3yHyUiXr9rvcCFWpQiv8fcx7MZQ64jYLtM7d2TzgkbfDtWyArhcLy444A7oJ4zUrJbp6",
  "key7": "5CNp8c4CGyBbfWk8rv5rEbEu9mfDPTUZPTodDyXwysTt4JqfUTqLWsX5y1DgXUMbsTxQfUL3s8vnRF7UB5jFkQ9v",
  "key8": "292wJxXz9T52KFfjSFzsfvDwJoFKdhd6hXWPkcKfF56tERSWd99k8EX3G1wYcykZJiQTvN9Qo7sYTEanFddju45c",
  "key9": "2f4ieag5uNekUM77D26AXmGBGrvbdpNA7QUMyueKNK7zhc7vmGDmUZ23kJTc7To2d4R8K5B1mZhTo9x4ggLKB451",
  "key10": "2MQrSm2mJE1xeN6m8fn3CnpJxRuB1uTHeZbgFW3wpCJfzDUmao4gUGXYFMYjhkxChibBBxNXyMrwPQbNCZMCgk8D",
  "key11": "4VjVJ9SsFEuQh2cakULJjumbiMEoVJ44GHKv9cn6BNwNQoymq2K64XQy1pPcRL37ytoqVh3MQBuQhmZcYSXgrRF8",
  "key12": "3N5agqdmxpWRJUMnLP5g5rd9gHXnVhAf6WCikvgTR3NsDYGQ4xwWkroWdMKbQceivq8Guu6UquMS4osDDHq5SJk9",
  "key13": "3pvTQY1hXFNLnchY8wMbYsUcM2QstbDvFgpDc7nAg2BcrSgtDq6cayFEJx4DZsSzV18HP1677GoqLkMmkiQu2tdj",
  "key14": "5yvio7mUctzFsxqWEYfUkwgvj5qnKsKmJcFB7s69dg2ahiPLYkYKNoeqvNfS9QsYyJ27exHPFBzeooUXD6Pa14ZF",
  "key15": "3s45miDqHQ6WRCambHfMJgZdJo2gK4PhE5a875Lwt97z1i4fqPbFV1RmnaXb934TEm58bGRy7bcAxBh8fPAcsboP",
  "key16": "2ZyL1myGeejpa7CYEwPdwZVVFMeB4vUccimCzf4QgPDX75hfemJrQjATBSYaTKWqBu3EvQrdyA7sprUQV9G1L8pT",
  "key17": "4RPWPwx8BxBomxb7C1YYpE1Jevj2B56kquP1xbfW7fXVxouXFJH29RCEcCURYNgaq5oGrD4dz2r8vZQtS2kiWCFu",
  "key18": "Uye3qQRHV7Xh2U8JjGWAhs8XZtZri4t9JwThqJdn8BG7hxu4yeTVREbhh3txmV5myxAt8xdZa5ZHforGFqe8Ah4",
  "key19": "3nWq95TB7wimAUfEr7hgQAePPmRnWHrqz4oKQyEbhWMqDMxYkYEepHP6e19rr6auuS1hXzMyRNq9tzYjpBy3HVS9",
  "key20": "kMcokPNS7yRT6BvXiSDCwMnUfJEC5F21KDWx3r3k52pwRFQs8xb7Po3an9EhxUYR62ixK7Xsb37jgdCnbnvYVH1",
  "key21": "94GJG8dA4KxohEYSw4UiSUGyEjNivq62AMyr6b5wyx7bx2Gdbg3M1N6XJr3TUPKJWKi2Xa7p9t7bkrHS9po5vje",
  "key22": "24M8fsj1qztD968UrbkWheHSXXWaL2ZDRtRf9HhERwPn1Un71X3tbZBeTVfPpDDbT56Ab6bfLrrYj1rATjBJw6Qj",
  "key23": "4o9fNJoC8rEKuGhbWa57KiDjd3xLaJ48CwEZyMgVNJPapnMe9edZMcfCtcm59y8mVLwFW6V3JgctcfXgbbEDqFby",
  "key24": "ox8USruFrhVjg6wTEyH6iMh4LtM57Nwga2BUYdJkAgLpZGcpTgP9x5NxoB2MLtADxZRVMxQQTpE9RgCLTDNQ3Lz"
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
