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
    "3pF7X5wQ3J5yiYaZHhumKDY7iBCSDjYhNUFV1Nn5GgS14GwmRDH2x1cCNSs6tWsXeSvRgidD4Cw4WeqkxFLezH2y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5o9tnwUtTYD9MjxHDknNkiJjSUP94a9QoAn3VK3JUg8ogh8zpxdgGiFJYQZRPxu3ZtrwZ9LWTWdMygwe9h77kVwd",
  "key1": "5oSzFWyZPgQsEhHsv5bHii6hb8KMEKdVSZro7xxCuQiagxepj1wgAqVaFfG91fhJ5yddbLdbj6fTfNXBRYMrCefP",
  "key2": "wVCTJw9SQU5tDU3mKzuvq4JqmN3VsMWSkmhSpJ6NfmDYaqM281SaT32VYN2HNKegeFZ32oZySW2tJzzXTkE7RAY",
  "key3": "5whgD9euop1rteJ2emqzvB9jzhdTmD2foA4pXMrcY6WNX22h7HqshBHA935kum3j5uz4HKApYG1x7Qci75aEZBAK",
  "key4": "4bD6dCBjcWa4tu1J7cNNxsWmexeK4eZshtBWowAYoe7dbxLcJyHUsEHT6pz1t1XwWB8UCpxUNTyP4GZq2NafVRff",
  "key5": "3JiLgNxvJnj61dqgiHDwyAxMkSNiTYY8boJuMudSjkrJURbRJsZpuMxUV8M4NJrZuFUYGUpBb56nWxJrSzPMKunf",
  "key6": "3VRvBt5U6BF2NJRq3Rwpn95rSgBP9gywsu9jou4uaoZGqztvPeGiB3fw4aFXxknMVW3VvEi5t8wZFs96bjBSuDhM",
  "key7": "51ZLZJ77opStSuw9D96v1RffyQ8GcDNu5Kj2hgWkjJE7o3fsSRJ59eKxnKiE3YkuhH1N2jMBKm9c7GC3P9dCwVpG",
  "key8": "5rinwiKT8J9CHMSGGr5V45a1KAfTuR2YTCWeurXmTwJPT4zuYerVzZCQ927h5DeDsgtUTC6YgKpZzk9CvnBNxv7z",
  "key9": "28CheHv5TzLm2dGwWXkyZaH1X7DRmL2sc2pBfrSQT9S3PqEpYbQtoUpZGt8oJiGarob4hoFiBBNgkk1EdzxcHAcC",
  "key10": "67Jmcm4CwYTTdBjsVQ4BFoRyNyRiV5QuFLtop2jPq33mw3q2QZWVFzEqwUjnq5af7DwLuZ2WTofLMak1FikoDkaF",
  "key11": "36KGpXieZ2XtGgiUmbnG6Xtp8ypJFnDHVsdkJfTB6McxrXN5pWAVJd9yaVHNZkaKRmE2tee1aWMunSvaJMda7v89",
  "key12": "5qu3W81mmR7YW2SkbEs3TvmpzH9bUoWJtHJrDV28PQVwc3onYm3jtpbCFhGFWydTE6SQNK9X9oMAf7aqfx7yKDKb",
  "key13": "2zDpnCekV8JLkmSmX7CNPHKtpYMHx6fVV3AWcsQ9CjBD63SGjku4uFH6tiVNRfYNN2HWM1b2jzjs7UkoMCcXxGiB",
  "key14": "SgGf6EUe4oLYTGDzWA5iwDcdtcz3AKL6Xh1W1LpDJYzpe5v9Y9raCjLdpgN8WxWb8rKvN3hVMC7k8453Tjz9HXG",
  "key15": "2AAzxwD3e5CsFmt7RDd1aV8zbhTKLJiHY1tAoDWhDLHM58dw6a7UBRzojcVYsq4kdsLkYrQf7y1JCdN2EXJbJGP3",
  "key16": "3G3EgbNcMoFF19fnTueiG9zSZq27dnc4cNWgvN5T1y74ykHXioMwXMgeJuasayUQt4TUcBqqiuNgfpNzn6aPhQXM",
  "key17": "2v7ymgZyhmViGP3DJNhYKQQKK7DadenuhaeGBZ31CYhxR6Aq38rai9sy2HQewYtHMxF4NXniz6zE4iyEbtrtqRbg",
  "key18": "3gsKCqLKnDWLbxNTkR91RTHhnKzSgsh5j2ph94t5GQGRzArXAjGmtzyka4Dq3xe4SK3UD9STsHssQ9QTdyLnSewm",
  "key19": "5JybE3NqRRuoc6WpFbSb38X2qYunuFUjXyULzg2JcT5wPKVPgBv4KXBdXGY6YKHojKd9TcECtERzYTCcKN3G6D2F",
  "key20": "2ZJHQY2UktVUFuLYbzC5pYxxpHtgMKSzqjoHqVK9622iW6qMJPbAMgWaNg71fkbm4DbxtLZohM2gjEGR9aeNH3kE",
  "key21": "61vMmoxYsB5S3g34aaaBUTyyx6N2PGoUpTLnEkbrGv4sdYz2emL4zEBcGGzM1sxTC2FDxidbqiVaoG82zS4Y7jU5",
  "key22": "VnbiLA29JzJEUMcYJEfps2NiHy71xndP6noExF1CzzRzgtudVM6jzeUbKqHGoVcCRHongkMVjdXpYzTffjTgH1h",
  "key23": "2caJP6LYb74ynoQYUBzUR9irSTjZbUAwvzD69ViFH6bfxU3PNPKUZVw3JGiZqGSQGBZwfLN6UQ6wegBv54kA9EbT",
  "key24": "4sraz42rqkb5HRJ6bGDKb28tUyWBJrTKyKQdphhi1iUGPn2GdNkqhMEnLFxcNnh52Hu8UQkFnuvKSQdXi2UmVLa6",
  "key25": "2nrT9LYkemBF3fuAPQYcuf77DdhbGzVcZB5YrrzSCvru2SJQ9hqkVVckYoxaHVLk4LPzHbQer5SKdGFUc6ea6YCZ",
  "key26": "2rJvNHzrYrZHKgE93NJS34chH7vqD5fDMZJFChdtXaz83kPfDU3e5zZgxjZtJfspvmWkk7sQww5UWoyTDkNnTXgX",
  "key27": "5JuvJEzx2jT6m6bzatGvD88GJ6ENEZKoZT5htQva6nGJhrsAxKPurTNmTZZUeKbejZ6fcc5dhFbTvNGgqcuhSLif",
  "key28": "wkeQipegeSEQXapJmn2oJnRgDfztNbeXy5qMtvCm9ETeAUpFRfsw734Nq4djjQ4g1ZUj1SBZbzfBXgX4aBNoWn2",
  "key29": "2qNBMpLAxU9u1J8qqutGoGnrZjZFTforS2bveiNCNt19J4JBe3ezUhgCzVqrfTFN4gkG4agkeTbMVNULHEkuZfbX",
  "key30": "5mDCeM5wf7SuEL4pccSPkC95HRJxM4gf5wC8GVo3rBNKvx27PSJTXYicbJc2q4HCp8dGq649h4t9Lv5Z7nGkAAzc"
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
