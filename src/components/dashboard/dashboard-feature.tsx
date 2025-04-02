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
    "5Mh3ecRw32m1zcSsWPUNqTs1T65V6CiE1tteKuyGhWDCTUeeC1b8rCKFrciyNk4EJd2Q9kzsPq5DuAwkERzrhn23"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kS4XMMtAP1czyTx8j9YMevV7JAPZPDNVhuX4o3bmedsbuMRrEAU72eMsHMWTScJPh3JeETkeBxcamrV85DVhYkJ",
  "key1": "3UqMi5mtSsQPXKdFx4YaUvgSMx2hzvRwhVpMRQ9qbHC7gjJMsGjpaozok7kZuq76DRc4CB2HiWd5FXp3ZhjmKFB9",
  "key2": "3ZEJa95zVkMe8PeGKJvM4gGEavkpFWsuZFcyKRaeawimqvDnfipcVmYzS7qTUjpMU29Z6fwDDQVo4uYrG3LmXfi4",
  "key3": "gt6w9vgUwYn5KCcBdcGAnjdqzwrjNupv7Uuayv2jQA75eFxGj9gxk7Mt4ncgbXywr4dhTsBip8gupR5Dv5kxnSP",
  "key4": "5AMuo5BHrUHR2Pq2WTbgYqZs7ZJtdXZbZmxBkZGxT9fZpPpZty9mfQ86tR49Ha6xxgVew9tA4PMvU3w3drDAH1bt",
  "key5": "3QhF714Mto392GbLzbEypErK7CsCRuFpD41o8aVyx55aZn3GEtHpXALr7kuFqZ15xjkfohFzkQxUQ9MjRtXs4wtW",
  "key6": "66M4fS7DdgrUPLeQRdJzjNGiM2ZZ4q7emQaHdBwkHvoUGKF5SXvwueUmb5WoKnXr6Vj2UiyczaPvT4PpY8Czky19",
  "key7": "R6QZbtNii4Aqxkaym5actLzdyWuPdc1ZhnUTpxhkPbKjf4AVx8ahLjzhyY46K6osgQbrnw12EzaurifWjdosUzV",
  "key8": "43ZvMW1AzVtSSizK5XsaUokJn6cUt39TXtSZyNAugv831zHbgRPd16JJ2jDU1f7m5qJ3FguMu4aLxHVF6zP4bEcq",
  "key9": "3VHvqYMyfAzxNNkSunusggKGjdyFV8bigtGVqtAjNAT42GqRDNsDMMC5Fz7MfhGMbV5x4Luob1Fweg67cWYz6iio",
  "key10": "3AbXM2b8cL856q1md5CBkwdP1jgDMokFn64rt7hh9o1nhoHVvNDbUsSFiFUy4FVu8RhHGGFxqxBDfyCYivXV3YFZ",
  "key11": "x5jJysrXhN4jiDidanbVLAQQwqmjW5575hTizWP6iRPUoNKWwfRkECFgXYfUsTdk3LxUFB6LW9di9cLFud4Mkpq",
  "key12": "4WLerihYijufxeceSJPtMZBSFLdXU1xh3rh1x55ikRh5wt3E5FCG7X5AhVVZaiT64EwEZSUiPFodJYegonxbzCMS",
  "key13": "5siz6u76FsrjonASxKeLAQ9Jm4G5KADMsQi4EvqrwRzf1Y7vSocRYj2Edu7Z9GY6R3exV3zfJqofUJFk4QAVjrwG",
  "key14": "5XNS8nM8jnALMpNAspascBEqP7B1Xxfe9FQH144sSRaRts7n6FCPEnQ3b2VQFuWZ6qWsrmh253kCgvsvSDQjCosY",
  "key15": "feG3TwqvsMBxddrce5NHZE2M8KcxT4B1vrUmnK4mQktaVeuSyjPD2EqarhJGv138xfxbkbWVcN38k6uLSWHYoZA",
  "key16": "58RhxfZkCrJHvFWJwNwCtypbB4skKzRHaovZSu7ePGsgo9z1sHaW6AbGsTtqxp2grfxXzGTPnjZwkh4C9MUcZXBk",
  "key17": "4MEG63XH6kNQpoCvDBvLsyUd5PzDyfnQdH1pdo7pYtxRt6BvFUk1acqLAiafNeNypnPZk7A6GdkXjjcJJFn51umB",
  "key18": "4CEBGfT14hwHuCSgNjx5u9mJaymMALTDtmhbocTifo1rH9a7XHNNyASPy3PfwWveyBsyNs5vrGdrZgkmTWswr3ca",
  "key19": "3Z6vJiWcu4KESmWpR6TEUrai5p3n7exWVdMBZj64QWqryeHY6KioUYnfEjkGnVku5VcJyPw8sSYUsJoaST8c3J9y",
  "key20": "L18BKkq2XqQJHANhJba2PSwhDVF5EMqUHJGzb9ZL1RmSsRHfVHRfLGWz9U638rFjDG7iGNQnmf6FEXqK3qXsTyN",
  "key21": "28Kwt2voL6wy3dM9rjcadLYJLq8f8KF5x4xK6st5RUZKaZxRLS7ZZNvZSNEkscUs1H5if3oqinSYmPgVyo8vSrWu",
  "key22": "LkbnqqUyDWGv6qzjsgK64Fghx1FvwnM1KdrR5YPJ7fi537mEehsQqc4ptTx64B1SxmHj6xq5n3mzLchnkyKGEcM",
  "key23": "3GsqLqcyVYzidJpMLAdWXCqJX7tMZfVkz69Ssrs1DJtJtimvCF4fQqWyMZuUtiGBiVxZvDhq8uKVbhha1AKEnAG3",
  "key24": "4NfjS7hgc3iKBuzbQgrX9dwiW38Py3BGanrUGnbL8eMjQKKcW6WyPRjgdif2x5y4RFZT2Jy3wAvqkqx6jEZbhHYi",
  "key25": "2WQUXdbwcrajYpD6CMhSYLgY4rB8y5z8MoaT8wbVureEwcQZTzgSRKjrRAsPUYtmNnhAw7opC1Xh3H4xLbTAao1e",
  "key26": "3KNYFQoQhmBhGPFCEZpuXb7wLrmVwziiKEsm2VaPoUuwSqJ8uv7AJnZxvD6T8PMYDWArMc8ahpAfWs56kQymRcUB"
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
