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
    "5wSKMWbbYddC6HcfG9xCap7gA5iXhYHvTHj5UvCxEvyPsJQn9gF5tpMk8hqFQrd1njkDmmtftT5k7buyZzbbb5gs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ogWmidpvqCVobQYMeKTzDuaDBLn9KiTuDTt46nwEYpNpChnMPX3Y3w8YvHrog3bU5cfAKXaoD2Unc82G35nTWTb",
  "key1": "uyayxrZDGv9J4H1wgyo3JsJBtN8qMTu7mnPHEevJ2kD98XySWvkcKT9WPZFeBgiSthF8RFsL1BtjvGbtCadVTqP",
  "key2": "UNBEQCU5ntKXqT9YvGnUkWJ6K4bZe1MewYQMUeDfxSsozUQc5fajrigxTkWQ3JNBfU4WH4b2JVZjJ9Srj1NNX66",
  "key3": "HSVvZnBYMioD9YtBoPW8y1vUwpF1YNXWfSbH46Dfg51EQAwAp6bAGDMQAnnKVdGyZ1ggQDFHufmgM7FzHcU6oJH",
  "key4": "31tNa2c7w4jm45kfgc8A1dK5SNibJDxDJFcJo9Gv44vWhyEs8F1eTKsnJUY1HUjQDLq5Xp2evvXVREna7bwky1uN",
  "key5": "3LvduQfJHsZBwFncZVcbJkPnbYgxEJNMokXTkNDpjUVg6wUbUq53rkhfEwRZMiDnTryTpUHYifTBzCmhBtgXCjA9",
  "key6": "gKGJGjAYpok3g5wc4myetbrovZhNaELppatSTxXXT8SwYAAN9k28vTp1CsejqZRByke4nZbJ6snSP8FneTrfW5B",
  "key7": "5y3GfDYxfNi2ZQm21fJjBEot5f3hYzNLnwrmqXmiTJm6Rb4iWR4SC3qEhsGHXfNkQpFx4URxmypX18Gcr6DbgnvX",
  "key8": "4h8CrGm12hsr8kXaNu67KPowRRj33XnyYQkKNoM3HwhWuL3qtCqQ7TnAmEqCVsBG7V4vQoWY9n7LWB522SjLUtVF",
  "key9": "5bgvWVZn1iMLHugxbmkmw8BTpLp4qDb4EYWNCodDNeSmK2KdiyFwww5pbfD26mLTrZqgZoSGtA8LXbm4WS1F93Qk",
  "key10": "8rJJMDFL4XfLRyQgbYEn6rzeZu2jiGwchL9mKY6cUWU4ii3z7KcdVLGDKgPByqegYzWMpQdBX3BAPZZXbKRYy7J",
  "key11": "2V96Tra2EPTDhE1zP9C7C7Gv9tBgBarRumkGToug6P4yxeHhWTGdPtGcYk1M4kyRRUpkEmeFd913GTMLBd9ZPDsT",
  "key12": "4mX35XywPi5Ea4his7JgDUJAHRSpo6TKrPzLn8u7iBQhi8sXb3imSKu4sCDZsMJTUJ5kF3yQLFQVbXiB7nhCiPoF",
  "key13": "8vsysTJ4gP4j3md5hzEhLCcP2zJDb14KUcNgjyG9GtBCEXBJEQzagjMWbeGfWP8bfTtjfkttA47uWWDiyWfBKMz",
  "key14": "NVz4wqtpcZwgkZQvJLGhSn1xzpnuy8t42PynNdZX78YmVbyCirBrWZB4ibWiNsivKhr6mDdTGScDH5QT6n7p5XU",
  "key15": "62e619nSGbuf9tWHWMYypi5y6B4SKM9TK79eg5cQjU4oCFThsbLUHmiFjt53MQSm6PHEHwN1a79uTDnef3ioNYno",
  "key16": "i14jFipiugAH5SoRTvxDHC2pPZgKuUJVMQnCPiTQZTwigXAkcrc8f6fgoFXuEaCobKMUuwsBHfnqcw9rMWRWaep",
  "key17": "5L8PSbz3FsE1YgfUrAJhHH1btkuYE7d84xnCapCtihWYwcptw1kXpGS2fVK53eXRWhopqif82Dd1Ewh2dybHoUV1",
  "key18": "4Ek2KjPwVvi5JpEuTKfiLVBbbTREVBmdm6b9oc5YAa57jgXzQh88wPaUs9KCqRa7Q5Sa8oG6n3oNw3GevcmD7DEJ",
  "key19": "495MUnsr7oXmkUF9NyvwUhbGTVEi4Ayvt8PDAMNwLgmHn6ngRGdsJEbByrXwkhynbRxyGR39KrSemdyceHnE5Q1C",
  "key20": "65zDeStcHkQBEUxx9uweQRyeMrgshkzhA1tTiW2oWbPep6sepPJ2d6iXiEJsodimyYui9EHbbpysZEqAKdMjfonL",
  "key21": "6249xRaSrgHPqpFdfDs1gfDYsdx4uFDvkRek4BHz6YYRDYqRYbxqcN9fj9pAtXRKGb9sUt7Yx1fMMiVNJET7Ha2P",
  "key22": "hqxXot7c8ZCt5qLxRFiw4QtRn8vFDbW9HXwQeNjcM1T68JHHiVSdXqdTHU9pT76NLqJQ7XtcMvZ4jFU7uy3TnSR",
  "key23": "3jvrk7WwiwZPz2QF2bHiFNH38BRR8ui5RnS9uJ1k4Q9LPzrZF4Cc9BatGfnaffomwARK9cs4D5BzaZZ9Lrg5Ua77",
  "key24": "56tSXKEwaWL8eM9U9wptXvsCh6ykJURag6RmMyYZRC7v8YfEH2q8sXiAMpEEcMcTReTFEBqz5ku36CHHFBCga7Pi",
  "key25": "352HrUzvfWhpBTxDk8X2AXcCBhLCr67raEosmdWwWiwvxmKQ5P8Z8q2HWXDULZxW2qzaWuKpmQtVyvZ5BvuYebxb",
  "key26": "2zCy6AtGB1CPmh1Tne54ZQo3cNEYk8MLtTFkzHjmSrpBpCCnK5cewMKxL4M2fzvgxS41hcydAdJFkJQiVURofBCC",
  "key27": "2PDaBpEobQgD43MpqtvuvMANKEVz6FYRtPuYXFCnCaLgjWQ7gjBKv39DwRMaHruRdWYwsbpVvi62vuNi8qoLGbsB",
  "key28": "4yjBs5zoHm4h3nSbVTEtKfqrMYcYqxC3Cr2Fk8uvZpVYthkJzmjYtSjdiHzdSKxEqweaHvSkxct57o9neZL5WpcL",
  "key29": "kpVcKPP7RhqQfAsJyzkNErygvA628X1kqhyFc5q3czURVF3kMz9v1cy6azMLptMLvnXTGUL8qsdJidGH5FVGDUu",
  "key30": "gc31yFVrysaNRJr879cDxMUaaci3eTty4mWS8pz5g7BypNkeAMRcVxPeMt3T9J5ekgoMUGJ7JLyXMrZp4RDFag4",
  "key31": "46z7wUNLEpEZtZ5aAENr2JDC1wU4fRF4LNdPSPwoDMyYDQYUchyojmYRUWbPVzfVHWDGSmi72XsBaWbs9obGGrP4",
  "key32": "3YWXPb7ydtwtt8PQjFdxQRQskZtparBpkSP9G26ZrQKMbGjyjzDQfgAYokgQqWnbSkpCM8DGgeSukAsikJBGn8aT",
  "key33": "22pKHfiw85Ew75CGPPRtARHP6wjGzEAq2f2bWUfMEfhb9pVWCePsBrcjaQkyK7w7Zsp8B6aMSnB57AEwEEkoyH6v",
  "key34": "41nYbQEF19MBY2aPPT2y7mS4FzBijqq4gd9hLoti2y9B9i1p5vjvPJ23jEjkfPuKAesnrgBJsjPoY4zk7SodKcHd",
  "key35": "kseFkY62uT1gjCqSX4oUdSH1L1QBFj1ZrvzNkKdN34pTPDGFyKx9HYVFDo5hd8V8Krid7HFNaGCQnMiWmBqWv1K",
  "key36": "4rG6YQ32HtjAVbpzDP2tvscvqwLUULQAvV9Jb8r4Pnp98JaVQSuaTRBHaHBU5aUf8aco33pLR8ghYa4qfzUXr1YR",
  "key37": "v4LtMkwqjoVjwBhcptoRaCpBsyJqdsMXaTrPTS3FtWmwt3o1BcxNP8BvuBK6QeCiKqGZJy1uMAdWYvUS4z2rtS6",
  "key38": "3ppT8UA7qfCviPBmyHY71mzmGusSeR1Tzhc4fpZU8zr8iY3HfwGwEfDpx6BPisUXXx6tJs75BetdmBXTUi8Gpm2a",
  "key39": "37oftfP26ZUj5BEQM93sLNJMBMRywQiN5YRfXwmJNwYnHBRcsE6p9WRXhp3fJDrY1iyxbrQKC177PzSmHoRozEEZ",
  "key40": "4i5v9y2zY5kvn95ZdqQBhvdxBpb9L9PpCASRXNQzDLESgd9DGrYHXfaxBEC9RbXrktGkmB1zUpBNZyyKGth25CHg",
  "key41": "5dbixhzVzKTZfCaQ4BcqHaY78gTHhE5SyARMWSNPAyrATsKgDYgwLWfF2sxYczmDCaPNt6DZ2m6AQENNpE66Eznr",
  "key42": "4JERwchPj9cnRXn9tBkcCQudwG1q7NdHM98Po8P6yAzK217fh1pKNpvJUYVyWvqG1NZ5eUV1tnFTyBdgGAchtiyZ"
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
