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
    "3k4YuXtqCi4RrcCXnuZT8Xzqb6EHuyNYXNnL73s9yJpGexH9FYgPgkgZRcn7Q3C1KpRM7VDmDiV7Nr2P4T9WQSoM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eFjqrbShte8ZUQnPmvc7qXvRwcVmZtxCmrXMmLagwavsTCDe7ogs9sHGnAhP9JcLvJN699dKNH9jvLu1cXVQqhG",
  "key1": "3ayW33ebMrXuTbT76MWpNwENPbWNNdu87atT3zwqF3pmVB4Hcybu2EpgV4R5mScuMjFTWGx75H5qTw71y1JEyi1N",
  "key2": "2AQDDAtyabzCFA4PCiYh5fvyTbx3sbutUpQq1p5936KgwtVFSyxpERECjqwrMSTgskC8VeumgNcu3X1UQkc1p5RW",
  "key3": "57gNcZ3Hf7NxEz9J3Sms8EEiDe9w2HxbS8FaDq6wed8QJvqJwL7os4vU6LnaUQKwNdhhcNwA1SyAJguFK5S8wzet",
  "key4": "3SYBZVksrVgZ4FTCpyUWhNJfPhWpihSg7QomkVaqoKSSq96KW35YTYGFpyKaMKuLmxFDs9e6QPfTv16hSnDRhJjY",
  "key5": "23d3KPJkXanMU137nDoQi8FJounkTzL1t98poYLfNY5yN4oNxWGDSuEcYFiz1MJjCV4gVoAfzKvY2ukjDM3PHVMP",
  "key6": "8pds1o7F3q5Qk4wfyv1DzwK9fVLy5X6pJomJkVeUj4gjdgTGJY63QMm8xdCiYdH5Bgj6Ta7UjmnaZoa26FNFa8T",
  "key7": "2tCYGFw512e8RJLgNQyMW4bxhYzdeGw25v47mEpwKd7w8tum7Cw9FGYe18ikRFUpbi6ruR1UZ182umQmC2vBn1ZZ",
  "key8": "L11TeUZtxg9ikiF4vZTZezDGW9ZE7BXN1ReiN6S9cT2t4kwmTY1jUSWJ6xUim7qZJ36JQsNas5vUXFwLpP6L7qm",
  "key9": "jFxKTZfUJY3xzPnc59oNaW8Bq54Keve4yNAQAZyu4VKjF9uUeWf7NoQx1RfgQgLkXRsHjr19PJ5ndE1q7qVr7RC",
  "key10": "7XAk9fbmd9Pk8GKFwDeZ5VLNC6MK4zjhA3tcqqShrzfEDMNTVVAtio1HqguzQQhADKNLPCv2Z3SE5R8XC5SP9j2",
  "key11": "5L8U6hRkPuLGjzb8uAiB9RhrznpeU2DFy6WvEbXazS72yxuoSwy6BpMB7oG1UEE29WMiss3RGRZYV2YsJoTGaQrx",
  "key12": "2n2h1QfpZ58xNY2V9YcoUwaggfdstJYTacfhesFf6U5fP1S1sHYGwFnkjYHYRx53fhksQDHYcHgfsWo5pmX4SueQ",
  "key13": "DzWx5StJPNW7ehdMVJffh4GmjnCqEjuaj7XESRAH291mu34ggmnyreLoNrQ3eEU4EaXoTyTfa3b5R15EK3rGeXL",
  "key14": "rCRCf5J1KTSPyEVrvpLWE1roGJEY2dgCtAmc5HE4mbf8kG56qK8sP7wheGJ5PLSp1YKiA5Xse1WTbY22Y1iyzYs",
  "key15": "2SjwPYFiG1iLUcQG6zhLoBScVrvFV9tQkq2oRMg1PA4uhjEPftZFamtXKNDgsyfJojwuAMihN2XhFFuWeWEi5ura",
  "key16": "xQFjeaWVPAFJGykH1sa63UE3eNvq1h1M53nLgM14kjuKn3X21ggeXSsGyhjS8uJ7X1ZYR3kB2HsCkYGVqo6LPMZ",
  "key17": "3NkfF4XaijwBrfyvorXLiFAkJ7bwshsuGfV2vwugjVUhbNjqQahHrLoRpJ2L2BxPGxR3z5svUtMR8iN4QYSAroh7",
  "key18": "2w8xHBprV9CqwHrDJAgrKscx7DxDaz8yotSNvbpE8dWksd8STudQhnYhDUY6b7eS8mkpX5wAYp73k6vxjSrakU3F",
  "key19": "4KawgvhuxnrmTpbHPzcPiep8x5ftUWEyBoJj8f6XcPTCmedUF52bB7vm8sBWF5wC1irdxSDAFmPV1Wg5zWBBupUZ",
  "key20": "573ZPfZ19TtHvcGKo5KnkzonZxXjuuRir7buWQtF5jRnuaitK6ELeMRV92CKD7NYD5PsnUTStUcrLuQeG11ETAQj",
  "key21": "VCqRQnkRd8R4PEP8FG7FSLmBj61hovSKBW7iYErfMG5jkBxLwFcRpGB1YmYngFAzL7sBFNC6HAgFRcZMyCJt1B1",
  "key22": "4VMY9xLnZBDhvLZfCaX5cLjYgu91aeDqiEVzLEfMQ2cCSCLKYeUPhZgC7zWAqyhPaqRbbsBUuQcjceRziQ6aU7Ej",
  "key23": "2PjnTWPADexh8er7e2uFyys7PiDRm5wc4LqW66pUHGwyAvGhzL3bHq6M8uBkyMP1fFLyGcAsuhCVwejjLGNzJ9mq",
  "key24": "4aTe8xPjP5xY3TQWGJ5vqJrbJHYyGJqqHCZDBrhjytjAjhHeKAqXf1KkJofbdXPdnAHuqfQn9VuJgAmdee4Vessz",
  "key25": "66SQ3P1rw5NUwzYGL66wwameHAFiyoUkLLtdw6ALbaCppR6gp6jVudXGd7QFzrGiiMjyqMntSJn7bT5ZfiLefy8u"
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
