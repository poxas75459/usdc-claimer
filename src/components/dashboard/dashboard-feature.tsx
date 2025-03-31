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
    "TD4kHwGFRqudUURkXbMVpX5v6KczuU3weVZw4SB1C4C1FACdzABsQbeGMydN1E9V5iEfGchn8ACXiZdQ21voEy8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5v2jdTWGVSwrn6eo8Z28qa1QxSezNuuo7rooL98bTDgoBmJYh4oPLH3Ar6GKyr9iU6cVdUcjtf95mGvNQak9qRqq",
  "key1": "gbjZH28JLM3w943kX86XF8RcYdaNUy3amQgsyYTAPp1LQryykApCuNNXMKmjxAK9QUfzifFT4qLMDd89THrJYYj",
  "key2": "5X9oryEXfCcxMYwK5RHcnA8hRv8XzEF3XQ3h7G7We4fq5MDsZ6aQR9Dztv4VGFyzBnPnc23WbZBfKR9Wha52Bz8t",
  "key3": "51xWt2MBKcuanrJZm1Z9WdwBQcWYiXpDmDSdbkeMmxiYF9Lj2DuLcPr5CtCwDWH7vmi6MZm4sDdW4kKoFUkuXngA",
  "key4": "5mXERJWUUm8u6L4QuhKHgbPJUBgvn7vadxDqd5tqsxdzjdYCiSsyk93cCiwQ2eCtay7neiNP1nojFbfMS1MaQ9EN",
  "key5": "2o1XcRPfuN3ZgUMYzEdUzq2dvExh69ZXnD2Yk8E9rB4MnfRQ6VfqoFwe7ejSYj11drJ46KaBdzQt4BzHHWUR7p61",
  "key6": "x4JNVJY1kxHavMKQ9megfHTASUkrqfiRAsg38y123CmtF8JdYMXNNEUZccWE21TF9Njyg4R8yJNnJgX6BicpfiQ",
  "key7": "QzpwSTSu9hVuzYn8LmqNkRBCsCukCAsvoGEwkrPgVR9urnbTag5r4XEeUnzQbZKMmQJerXEiUyXJdf72WyG2BpC",
  "key8": "2Vi65uPRy91as2p47bHzGEgSqoyBB3ozupX7PYoRgRbD4ZM6W79cnrY7AxEWYyHPMuVy35eAgxGUkKgWu1nMfXV6",
  "key9": "4fZhhXjC4VLMgwoVr8hH4qSiJN5yMXVTKe3AKGoiVB9kJvqAw8CFXiMKryYDzQRkTXKdLuMQF9PyftP2VnzxggFr",
  "key10": "2XBLwaPXJcAbJW1cV4gY7VtdNJRz3wVwDhVfsZkeGaxaGK5NRQXDDpG64RzXkVyMtcLCn5qZWBU5vBedU2ygAjrH",
  "key11": "4pagCr8VyffQxQdadVJ7itJk2orz1SiuTdm41Acb3EXZyvY3rpZKjsRnko2uEqLHhtXMHvjxo4HuAgQf88bF8jYF",
  "key12": "4M6BG4rKdbW9Xr7sSr93NQXZh1JdFuKWjokA6R23T4XEmXkQBQDT4X51oMge3r8EeYwdQ22cre92TgX6iT4kHfQi",
  "key13": "2pp8QKVRjt5CtFK8j12HdMq8zwe855YrbzCGkierLnwx71YWtLuQut6UxL7YWHThGxoiGtKzX6D6HeYUv2ys28co",
  "key14": "5nV1dJWvS9hM98fXHqckSr73qmfHBtcbUD2vVrr2X8UGCd3WMj5yehry2qcKbo3ymP2srRV6era6S35bf9eMxmou",
  "key15": "2jt2uRTen9K66XSfAVuznHyFricSnpB54Y8SkLQvuJHq9buzdvuddJdrCqP7KqDDUMiFCiMQ6HBu8B7AEUX7cPo6",
  "key16": "3BVMrJvGTdzFc5GoEQsdxjz5hdagi1SBiTtduRwfgoNngFPYTT5DJcqv56N9LrVK9gz1kD6MdQwCuCBRYnnkAULd",
  "key17": "36DKJYkXnnERGSGMXMov6HrShJU9PjcYn5T56nCSy9CG81Xh1rRkydiF58W6tqpVpiRGf6w9FjDvvSqnK3JJ1qrc",
  "key18": "L1uL3ECnsyYvLpWWB4kDeFuyfFMJhqFChQrU7vNa4NzQMstEZRaPgWDBnJ13kispt593WFJb2cAkY3QHhQ7i5BG",
  "key19": "677EE5oTm22cXb2aRwMqQWoBsfv2ex2KSr8veoKeniFkUYbLkkaskoMLhDJCXQE2qEXTsKx3qpneLcb1AJFexjvT",
  "key20": "51L7q7tfWQEdYgbcGYWAwpYR6kkKddj6GfGZfMZuo38tQ3ZfVbjXesGCHgkvahFxtK4PP7gA7sZjYjDUjUmmF5b2",
  "key21": "Q8qZbf4AsbdKyt8FvA2TNSmMi3x88vMpTAeFaqWTmngP1QdL8iUNJZxATxujZX7PJ6QauiGxmSoR1RP5VEiUj78",
  "key22": "5NFxUrRBJiuxmGYuqhTTxjAdqCRL6wGB2jRdCrXp8bX4vRXFJnG2ER6oRwHPAtnbUkpHe9PtofDfhDgWc5EVA5Km",
  "key23": "uQG3HqmZ4ZfzDfzAtD2tzjs7ZyeLd3yT1RawQDNaMvBHrg2TYiTJGFyZngSDZjHseLqLMRs8BAmxsQrnEEz2zqY",
  "key24": "4mZh7SMkiupkMAv6uZf7QAet6ANdRkC7hQVxtr4w5ktLYzgNjkZzXUAm6pLpgRLtWNuZSBLkxLEaQsXF4Xx8e3sX",
  "key25": "2qSe7HzjB3eooB5PUWYvJXsdKGgTUjb8K73xzxvTzRGHvBhT49TSnQqNEo9WB3zrTDHNvocCZvAVu19JYwhKsBoc",
  "key26": "K5NwoqUSzKKnm8cTgLJD4DZvNWtgqBEXTGKfhwtGa6dCnzNBAVETLQeH76cEEEVj3aVNDoG5qtWHL79Bwt9ykht",
  "key27": "3cVYv3MDtQ1yfkSxcLUphov4hGDgQwnTwQ37fNNWxZ4UraNaBdr5JZfEseyoFEz3D3Xh33ntUVD1tJnUFQ9RnWeQ",
  "key28": "2MZuYcEjWhGEcQN5VCLdJCA4tptamnkoc2nd7am1dejpAyKh1HSkPYZhBpiSeJ6926NZea71XWm6q8NRCsXpJgqW",
  "key29": "4XHrLZtk1Ab2QpDH13ALX9BZZapiA9H9cV9L6w32YKxPDZzgg6XsJKrpbtuqq4v69ViawvQ4JxzfAqNkhmYkd9vL",
  "key30": "2PXfsiDVEtXbSySKadAs7pAa7B1FWhPqVvQbvZ1PMQDrKR41AKQvahyxkT8TxodggkH7PkCoGUAeeqaWqjA9W9PC",
  "key31": "49NiBe1ne9Vzx4jbCjCgkwtSi7JaK6Tapu6jvXMVWbsUP22kW4sXWrM3X3nLVzhfAWN4wwnXkQvSXqmTXTqEcrcz",
  "key32": "5sfSiuBQq8o6t7qFGY5oPrvrf3AMAUTmYPaSLjVGCWtnyw9d7mZ1actrGzxtrSbj9JfV2AiNFur1urFqYvba1J24",
  "key33": "2Aih6bt9CqYnre7MdpAgAYDHc4S9DXs32HTkb5nBvJoNLsCHprGMT2f1nDaGieKdndx9S6K6fH4tRt1v7uiRejuw",
  "key34": "3M11Lm6bmMNmPuD6Y8ojfmCrpLJzArGKU798rXpYzF8CBXWv4wa92fRCbNGYzVxyiz2L2PXZkdWiqf5w9vJwWvj5",
  "key35": "3CUNW2BiHo1ea4nKs4VNZQ8keLbMhPbhqLb1wfRNMsm4q6g5YgBcabKFDmozrHNLPsYWBXPGsNaukPdJwgyuAUy9",
  "key36": "o6WJR5YkVsD8uWpYCYspyApoTFfQiqNmNNmiAUMF6qqcoJkSBUrBE59r3daN8nBcnFByNUVTMHW39NYYAWeh11V",
  "key37": "5H5BtToTQaU3wdmTkSezwfKUFrtE8v7E9jjF1zm46LfFovet7MbumbzQ54DJ1ZT7J1H5SNTYKTkYzfuHhYueTDMh",
  "key38": "4GrhYjwZPgN82ASmXfwPAsUTXjW7HUrt4wHrAvwJgfRCgUmUGw1sxizKJFkNx9Huq52ybQGPgNa4ZPhh2ggTmvyA",
  "key39": "3EwLNVGXKErbWk5i2ppxB5LCuDeiXKPjbMHBhZ9xqr2apedyUKJAMZryrnMdaBxJWMWvfMVfKRSd1b6XmESb6Wcn",
  "key40": "2D3iPqQCYJYTiGq6dymrBbN66uPpGHd8uZx29SndosoAsjQyWh8Kkkohr6cmrtJuPmhiXAwu1W74vD4WEbXeDe5D",
  "key41": "4VtbjbN3qHdTREvKHDad7xz2cSj4yh4jBAp2nunDNoToiLQASydiu9HHp96rkBXn2gfBY7tGr8gfjG3kS2zCUAvj",
  "key42": "3GGJkoX2j86r8WsgV5fQKKYx94s8EYHR8sqcuSVeb7ruMpaUvtRztaG9yF8NYfFRvALS8zRcvXemrZTi7dLypqhZ",
  "key43": "4mkXV6Zdefwc6Xze7RSd6Am1XqGjaY8YH9y539WFjyWNQVz9ib4jqefp2kbN8LnuKVWZRkj8hQMai9NnbNwmMLB1"
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
