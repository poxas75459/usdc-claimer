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
    "29L9aDDH6Uy3ejAwVgSzMCVq4taEdveTe8zqyRracuPqNdcWmH9rvKUdKvCtVU6xeHe1jnft4Q6vKLMtGz7Qk1c3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rpjF2dwdBc66BiGGNG1KcRuByaqFhngUpqz6NFsvY52LxMqT7pW1fp82g6FdutqppHE1K16KfZ2uBy3mqvCxjtV",
  "key1": "39eEPh1zt6YxbkyxUutDrSicimE7y15qYFzv3KmeNMtJR51u2NLRzH966zc9dFJgjK1JN2kgBhEK6tJDDKX55Jik",
  "key2": "89UsAP8sc74QEykEJSv6NgdSkNUxmKbQgkZpFER3XyXDLZUq1JBpKstpRUbzbUVPcMha7bPS6r3JypsJqdvpnpr",
  "key3": "7UQnjiwvK2AgHTnEbxse1mg1TvTL9WJq8MysBkBNtuxRsCjL6pCGeTRRtvMJFn6Qp6LhZNEizWHLyGw288hEwex",
  "key4": "2B6qraUVL34zSpK5xGj2cdEGHUFyzwHXWkR5X8g6tMzkygHbTotvowGqDaisR7pijxABUSysVYM5jfoAT5GPtxyc",
  "key5": "3829nZmhmk4DH4qW52efMjh1E2t1BUwvegGmvk6VPmbVqD4Qm1fWCMWW58fb5oKxHZ5FYreSRFcnxZ5fHsTSGWZq",
  "key6": "27ye2bk8bLnwVwiqfBvyRVB2hmG744FaidZs8HtjHzFugq8MhDubqgKL3v6XSeQ8r6waKHtn6RJfNxmEhPsKQ9wt",
  "key7": "shRDgP4gR6QvLTH493cPTXqKxNCve1sYbezxfitptBuPERoufeowcmynRSPdSSruEgoozp6tkQ6J6V9fd38AbGh",
  "key8": "5G4h82QG1vgedoqMVphhchZHM25g8tmdavohmqEy4Uo35P2zQzGuHyrT2sUk6ZrZamR58CzAutLZLwWcYkHKFe7i",
  "key9": "5Pj1jZYXiMrYwHrHkgAbgo3HXc4FDC63nT6KPs2xPEgnhbWNeEro1JmHpQqybK4JWcAvtDtnbsvCfy6RzHFk3meB",
  "key10": "2UF9ahs6AkMCgvEJYZ85zHWGA4qjBS4x5bFmJ47m3Bbd4GjoCXExZcX4HmCkwXXmoV4a4KacknWMBkxaiStKdpyY",
  "key11": "2wLQCGGGt7ZHr1v7kH3uwA56ArzQm1rfst86bq2CvuRPTf6wZZM7oBz2m4MknXXAJB35A8MhGRM5Y1Kmm8cE7T7c",
  "key12": "5Hd97JW7xot2BU5fqAoAZDkM8WfRTLN4T8BYRfmBoeChq5ZsfsGczRyFtW8Ef3DDH4fHRmxXs87jA3bh3Rx2WShx",
  "key13": "HngJ5NkbJnxbJ75XFBFz5dRPQzvdzV7gKYT6R2WXexN8dqg1hoeZFwb55PHaxYuBWSsqVrkgwCgDUrVSMc3iK34",
  "key14": "4aMEU5vfknmv3BrpH2yQG5jNS8BGt2Vvsd2x4Hzmd2swE66UBCZaJQ4VHTjhGZNjUb5mWA6G42vyuWSsTHjFmE22",
  "key15": "43xbgp8xV5Q6UNLjhizAiYnLjP5qfPfKY9fcWBQFn7Lon5VEa6k4GFCywER6xwKPJxoEqbiaV9HErTmTs2itTSAy",
  "key16": "3a5aA53PzEr3eVdU3UxdHhoZsXjseNuo8pwTB8MRUaZ2coG4hV3iXMnNqBckdhjDyTMCTzGaQ3uzUztwv7x6iF5d",
  "key17": "3xZ4HGDxGFwBQEhw1eAPAhYnxvKMzUAJYtoj1cUVudhqfJCqqDRqKVYjTG9qtaaEdXC9nhMKNZ6bvXsLyG878pn3",
  "key18": "5aMCb8tEnbuFDYD5EosqHaRe7uUhApSy2JVhvCsYoSZnGbha6XJqCYymPp89zMbTotwrdSC56cTNgoYauM92Gauq",
  "key19": "3DHG5LG8FDKXe1qvw1Qvr9BjyjSFqkMrh9jJH6GWCP6ERDyu1VTif9XdqnoBknKaKgijDLAwmgdAh5WNis4Mvs4V",
  "key20": "Nnn4yG8FfjHWdFKjxL84cNauFYPbyaDivfKQfnDAWf78H6vestrGYJnCEkhW7c3e9sUkJuB2zKCQ2RidWDcaCLF",
  "key21": "39sRdQF4pTDPj1htWuDBABZmrjb9UVWpR4C3eGr1WeMiZSwf8RJjeYBxLU38i3sS4BT9QbtdsWzFq4r1a5NjL2wz",
  "key22": "3ZQ185NxaBko71kbtvUKNJbWUpLsEzwpiz3w1Rx9c7SSmoE1GR4Rhz4C5hxhM5b8osZh8umu8f9HXrjPbPv3DyUL",
  "key23": "5KWKgprww6tPW1B3JvgT5TWygSivA3kqY6UwLWb1bEo4s5e3MwHxhSGX5dNmS8gqsRC5MrTLKzbkxS4t93JXFFn1",
  "key24": "61HMZbS3Jpv48VbdpGNsWn14f6QFWWVEUUbxkfEHaKER9x4GKtsdWw9n7czi9i6mYVko1HrgWVAHPVbVidDGDQtc",
  "key25": "57fwzdZXuNxSV9Ewsvhxn7PiEZvaSxW8ajZVqBnd6aUXzAm8bUvusEy4zswXiZ2FnhjboWGRc6q3JXiYfkaynGqe",
  "key26": "52D9vzNUYfEZDRQVUDsGuWvKvZiMiH1ZK4vgV3tiTxMnf3ohZ55yoyAc8VjfqceKotrYQnKPZ4tMHBN7Cdyrbwz5",
  "key27": "REBCbNQsWZvgZQpFDwybMMk5GB6De8xjvQpzSamRJmKPyiwSdDMUzsCXfNqvg6zFFc8J7DhXdCnwRUohRGxMyxj",
  "key28": "4yHjkwJEUvRW3WDepK3V2coDS1j7Pd6zd7Dhnsh35TGMjHDqTxHhLKddy2nU59pkdNkKUirY2VbXmrVRyoHCMkra",
  "key29": "5ycgi9bCzunp2n2v6aKbfuSh1jGpP2uPbVXbBaNzJFeYuVpjNDHreYDtCww9Brvmm1thGZ6ZsnNJtr9s91DywA4d",
  "key30": "58ArFDVNJKHq3aFP6JcF527Q4hS8sMjwXiZUZLdnPDxgMN8bySeRL6ytt8uZdvQrtfS2P1oKxkjAV1G74vxy7WR",
  "key31": "2Bj1eB8L7c6AEYbQS8MRd5dcibRYWQak4McFL8PJRGR71TtCThahmWuH8DBiCNhcT7RwmdZ3qy3E9ErBgkouTCkj",
  "key32": "5qswnkdtFLcpqCinECGH5EebxJ8Azr9RWxJUqXWV97J8zBaY2HJay4yAg8L4hhT3dJFE6oapY2jtVYMUV2YivxVy"
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
