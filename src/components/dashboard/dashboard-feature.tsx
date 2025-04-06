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
    "2Bd7rEKoVX3wG5wZ1N8p1anACe79BFVQnXysTzgoJb8jayaveBomWHTFB4YGkdcjjamWn1vrcBFMAxrxSY4gepC1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TwsYR8zh12bgJ5qSRf8b8gKRHFPTKugzi7ybZ924HAPfobenTPc2f7VJvqd2tZPZRCSk1m3N5xK7P45NQ3azCRn",
  "key1": "5FSokkeDr8Msr1WzqJvq8TpvJ2zDBk8EdVQ155nf68q9nf8VWzpxidj9wGcA7NBiMFMpKnPm6Uv5TMpn7BWq5w8i",
  "key2": "4a7EUw78fK12bPoDyQNAcqUkZDf79Dt2iBp5GtLKfcv7dry6fDPJ9S4dBvN22YdAYyDvqvrhkRqYx6vxaAFGMY84",
  "key3": "N4RYHjsFMan29PnDQu7qj9DR1kxzSyxnoaQusN2wkaxdNbAC3TgA213NXpLRS2YaPApKdz9aAvAKQKJr9Zp72q8",
  "key4": "3QrnsYLXCPpTP4r4Sh56fLmT3KiTGxLX8gd3RxJpapCjAnEKk514mg8YX6CNJnB6A8zkLHqFJfc4w9WNJqgBPVf8",
  "key5": "4ExKiGUdAFuRU8kmckFDY2AWMkehHj7WBZ4CveYFTKqDhjxt39RgV2ysdieVnQfDUrqZBFNTtyJq632QpiWCdH9z",
  "key6": "qdBqvDdHUdYLztwE8ZJ8boEQ5E8PqigdqY67UgFkPeSEKuBUYMjg7oJNSknYGDVZ62SpvqkhXAAnbXXSvW2VadK",
  "key7": "5Bejr4MsYZUgJfuAeGDMEWVq3WvEftMXKhkBx1tnCGQ2fYVK95YRw5M3wcF7mBAac3LdfQw7zvFa8k7vT93X5oZB",
  "key8": "2f1dGBAfj6Y87s23uC155c6FWphGe4Y16N3rKCHfr8s3m3B8AwtEJGutNzZjD8QpoS9d6oxu9hGJ2eBM85XmpTLK",
  "key9": "5sCpAUZbcfqCZR1sL9n4xSrC5Zn1DeHVRxwjTw76SSupV62cqMVBqdB5bY4utat77RbAEGCegR2VhvKEZZuPFDNV",
  "key10": "21nehKJ7Y5uLP6BwyzWYr9AiVo9gGFfk1c8Aac5sU5b7W3h5R8ims89AD1mNd7d8YZVrxpiLidFb4qvpffwfBY8L",
  "key11": "2XUyqhT5hRV4RML2ZimbG1YSSScg7bA7AsUgWzezZCg1ZSEQUGMqHgXMqA2NSqnUPB2j8tSJu8AhBrQuWixdFSW6",
  "key12": "3L19nqwgbf8L4SjMHYxSptuAnvoaCEtKRymaXtvEHcQyJH2WBAced3yscV1vxQGjiGPVq6DfEvUKkE4B1uHsPWiN",
  "key13": "21E9rfJhzMnCwj7emF9xTNLG6oTqEGcFyhsEY74ijaSSrD9k1P6yZnS4sKvLeJkxxiPb34ChVYeX5PAasdoCNa3c",
  "key14": "5oEHutRzYuWUH6GRuae2uxSEtVBBJiXeFc1S27QRBLZ6eHWHvRAgq1XPSVQRxGFpPRXmfruedeKjvXM8NB8MB9Q6",
  "key15": "uTyhsWGbYzVLfvEFZJGo7xLwD7bQmRw7PtzgTD6eJiC6YShfRp3mb4JSVGfGHNABBwpqieNkW2coTBteoV7qWmQ",
  "key16": "3W9nS6WFAvnwqDoc4ZRbKWmgwxvxiL9EBU7VmC1qBw1SdktLP1ScBog4WnQoEYXN5FSL1SueSbwpchZypzhsqb4j",
  "key17": "3ofgQ6cp7hmjvB4hn6gQ31VS8iQxfnszUUKhsammZgN7TEAqjZYdjuPpsK1TMrYWgLJeTcPQuiKg7idfQobx9HGc",
  "key18": "3Gftc7vdUDpxVrCHUvyUHiUxqgEkf459A2xpGjLLtEiwXwiMqgWmmoFxEzQ5kXvEfymsEUjBMeceyH5dy4Z59RnZ",
  "key19": "3BmW1dhRxwjHTW6MzZTZfd3AgPREDMhLa7oz6VNMrA37sUkCS4oAfohKoLGgMHPBSV37jmAej5Vr5rAeVNdhXktW",
  "key20": "245wbFm7SFePtqgEi86RDwwT9axC9hZDwFwjrzLFtKrBQZJyBJHyRriEHz5pgiwYbYdYdzJV3yb8c9hEVfzSA2D3",
  "key21": "57uz68RbzmXtiY26fiz5SdeGVJFVFiFZJZYN942b2M7fe9iCuCR6tmrV9XKAkfGomEy2Ewpdjsj4nfAi1seSd9tq",
  "key22": "3tAadv1hKboMfvsGidW8yyYwGZqWKazEd8y5jfKEj6v1vcfzVQdwENvdZ2Sn1L8L2iAdQnzYr4DkUPdv1g2HsQUz",
  "key23": "pJLVKYTLaNPSFFo3SDHqFV3FV6cdEGDiMh3sdAjuazCy2vbvSg4BbPwQP2tAvqmCDTBzqmanK8EK7zwYutFxDWH",
  "key24": "HcH6x96ipfWd5zvVcAtXiuVa5hpHqGsei6NQbadBb8uTF9yvsVGvqb9xbHbS8coNvzyTdPMDfH7T2o8zMTXBXGn",
  "key25": "oXF8wW52hGhRvJfVQWoLW7hRmxnxazkaWCtkJpJX7KqqpNe9faJqhCTtKVy94xN5XpraiSinq2Auvvo8iE8sP2J"
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
