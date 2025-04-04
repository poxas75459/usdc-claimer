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
    "3otqGKWy7wAgJ3aVDsQ95T6Cdm2YnbfYJD74mE8XdPqBhWNGdqY1rvLsFa3ehC7wABDnBv66mxkQuBThL6n3dkk5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eShfSB6ZUFHmBAejxNoeYJ8CrPFYZsCs3mMDFzEbnNJceEXRdxfXBUhA2vpjhN2pgopB11EaR56Jc7D6urHx7gV",
  "key1": "3mGXBDTn5b2ZMuZDjmELjyZKUzSrqkKCMcPLho8wA61hGRnky78Lv3bbbxpHNj57PZQPuYzMvQiCQkg76bDhFPwk",
  "key2": "2Weu8U1bQ1bzPgJN419faKsUx3CQEvwViiVoQsYRjDLzKU5dgEsUxGvyKzJn3EYVq5dxtUk95Mut9Dzjcs8kReco",
  "key3": "5KhgyZU1roAmenjipxxtdJB1NicoajvL5ytSA3zCVqYvczxGN19iASovHTBBiVL2NydCnSbBTDq7yPvHTC1Z6JSD",
  "key4": "5EyvwLwSLRrj7TQEfM1LNXPJwbXCnS7vCkMn6GSySFspcZM9zYeQkok38xVDJ28MB3UDzmFK76Ksy62YpX6ZkFVy",
  "key5": "La177b8gTaqWCn4rgPcqNPeoMREt23nYThueTmMMkboCDXonwjpi8PNrNDaVPAUiM9wVpWpRgtEHStj7dVmW7uc",
  "key6": "5hhYK38tWpw3y8JPLrKNSSv1PEB8Va34cDgXXBTD8dGqZCNDqeuQpNqsH7jtRzgdujgbcpKQQ3wMQzf3HG8qitMz",
  "key7": "4FyqerHVUZdf972QKMj13CVcoR7p8mUVkDY4kWmp7V7UvA9HuK4tV1fT6XJebspyV4s4A2eTRmweRBzvDCiM1kTh",
  "key8": "3LRFeiwtVVNcAzcJeyBzUA6SadwBYJQ8PLWVevPfnmZXNWaae2yh7LdeHJZWgsNbg6NVeWaPQFDrfUL5cUrP8JKK",
  "key9": "3wQjmDNkfVyUbSWvk6k4TihoHUdeumuN12j61UkfSfPg1rqiq1v1tdJiaUKzHphj5xpgZVB5NBXrhxvoquit5wg1",
  "key10": "44iPYcN6x9H3piohtYw2ukmc96oqshtMQPJX8MSbZmYQD8ze1EDSP8S7ioB48V84M2htqGuV2f3XiMmh1eTTQ3G2",
  "key11": "54pVHGwJZsMHnkL7tSfgtWx5dGR9o2hAZoFAy6pVCZvPyF8Pd9z6uJcZHjwDvigF1rxsvEGAm45Km9WaAuQS4iy8",
  "key12": "5if4mHUwbDfmKSKuMn2ReYBEdFRguLY8LKFpWV9Xzn5Aco1PugY5A4UUDHGKDFC4zCLi55iQLEnCEX5AkDvazbLL",
  "key13": "4bQ3iXECk1rHAWcuNu13wfejFn7zKLJTMM52CPG3FmdQevf4s9dCNSg9m56DFwq6Yx7XFkNqDYrSjbz9GxcgZnxE",
  "key14": "3onF7ipn7GVand1a4XMo6TnxF1njVJ6pSMUHJYkjNPyfYDDyryK6RMAsBBtbVGHBXT9mNC9468zSfM23STvnGUkF",
  "key15": "VG7i5wCt5TC8c3ATWSu2nUFZp9jsS5V3PGVFpELcfyfxGRyTMMYYQU2k6WUyDrDu4eMVXJ1NKVtGucTzxzxxFTg",
  "key16": "5gQB5d5K1oJoFbuybXkjD2G5VePhwtfN3y1BXpGf2VzHxYeWcbzfJVR6ihikp1164QME3LUK8KvbCHde6tiiYUiz",
  "key17": "46GaK5WMf98scfau3DMvyy4bXjC261aixQjeHERknA5LUg8jWCc5BK6DXrthhABxDsvtwCgSqTmDuKE3cbvXd2cx",
  "key18": "48spPkxsVQA6VV9uHH7Vn2cTT4aP6s5QYHEajW5X1a8mH7RSSuRvEgBiw6Uyn4jbw7dZzGjBRuhDviqnDm1EL8Yq",
  "key19": "FmjBMC5WMtbdNqtDdxu9iC2bkCysyTqHB5bL5RggD4bd1xFiipJ81FAP282CwvPbXGPrsnqNXxEZuJz2FKZjRy7",
  "key20": "kBeuEviPVdpjhmHHfS2zFBwhAikLw5jtU8MKGeT7uwzeFrydVHjJnkrvyGCKspiYLy1wPuGBZ3Dxf2uK8eWMgRV",
  "key21": "5eCs5ZnbHRRe9bGWCXtAvE88PrZCCYWqdBtEboyzsgTsk7y5afj3uUsBk7uZDQBhSGQZRjUHKijJuE4xiHVbKxnw",
  "key22": "2aJ6ZrhBboxA7Auxx1YkEN6F8QH4qTH9JjgVgekFngGv4kttF1Ut7ng5t1euAxDnHbSLHqrL8xMfKehjwAcxeid2",
  "key23": "4jdZYMeomu1BEpji6ndXie8CYqqJF99VA6nJrSwp4iqLGoVz2ncxC1ZoptH9eHLmuAzPhm61NRrEFBbnmtWeKbAE",
  "key24": "3EF7y4kUkkUe6qGi34s7dnTqJjcrPVcMMbYuqbc9HF8BSpmq1HxGZ87JcC7rtShizra8fKXUXzK6wsryS2mazFN9",
  "key25": "2mKiafjmVgXyoRtcj9eEZ7rH843xRYqNucYC3fTH7sPud4ReMfmzkjAMipvGWJrooDpYkA3QSGnVBoNYvEK2cco7",
  "key26": "q9PSKt4VVFQW1hdzJ387EiRgHb9kuYtzYyEYB1Ybqyzz91fbSqSvQXNttKu5vqfH8YSpbT2mfRpmfhFe8CiUnRC",
  "key27": "5tUXk9pdvXWawtcsG2Wuzs7Z4JHvb8huEuGwvPEeYW1Kunf8WAtTHxACPxRkhntAAsR4pCNtyXeQgabrTSppTBa2",
  "key28": "5JQ2vcTimhZHh4HHYopGWFEa5XRaTrWjsN3ZAUAV2mUKub4SmzwpwmKWyyULESkvcUnnstGhCveZ3Z1VqCHmPbWC",
  "key29": "4JLiX8uez2jbhbkCHDtceEVuF5Qa1QfXeMZTdKPu34qwW2i1RV6Y51hXKfacTBwsqv61KKnmVWKHkpi5GWJnBNut"
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
