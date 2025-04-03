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
    "4mxErYchwYp11W1rm8xZde2JQdTuB4MxXpF9NKjXs85Vjym97vHNGGPfvXeo7e24JxuU7AzoyZr2ezLnfxgc6JNZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Dj6azJg11soRGGL9pg7vStYDQpKwmqDDUzmu1eBS4zAqdJEvGfM3UDuzMtB6wVSa3xw16MhpW5utHZ9W3bsSAqJ",
  "key1": "2cgkAVFvxrp8fTFioFLd5orsidQqMDeXUPT2C24WtdURB1zJbJ2z7gKfoGUkcaMzbFk5K5bFTaRS67WKi9T85gDZ",
  "key2": "5g5JjxUmuswyiXtjQe6CMk7ixMjcTJPaER4VJrCouW1KkSz3kC9mqSmd7XRKtqK91ThstrUamqQHYXdpJeghE5p2",
  "key3": "2jcrdgNZiKiVcFo6gzDx5mmcEwgLnF1W2b7epXRtyQtTnfbdzPjKcYkvHapuVjkxqSq41jNDAsNqV6BbiKTNCnDS",
  "key4": "3maxVqmYnFtx4ph8SP3YLfEXSg12ZbuXvFM62Ejkf8AyKdwEsE3gZMv3UWjH7GoCqT2RjezCezmAw2fYh5BTSuXp",
  "key5": "3thQuEGxJHzAbT9dPitKw9BU2Ay8dMEpRRk34oZtDpCabMuBfWhSAWnQ2fqAoRdBpLF3CssVAUuesp72W8i9bxiG",
  "key6": "3xgkiw7Li3y7Kce9X2sZ9rbBD7t69wg5pS14JjuNCwMXBJZcT2muj4iXcNDbnkjH25yPqoQiFYS4uk5BikXsKTEd",
  "key7": "2MEjnFCaoMGg6LMBsMAx2UNsJdKr2pz1puKCfhA52jYBmhuNA71sTooMkqmHwVbc54yDxceHHpGppbJMUxhQUmvR",
  "key8": "22fTNiUDSRrVpLc1VqKvsWFZhBhfdf4FVgdR98ET9G1F7kYCtzNCgWPxWcg8MVS9vM9QVJLeRCAjE4phAVAGRGbA",
  "key9": "3BdAJuDLa9WPchDrGk9NhfAjyWPZpKbFzsN7aQtY7eAX9nE4KQaeRE8qkZkAjWBqYyGroQFvP42z53s3EE21N9RB",
  "key10": "2H2ovPLGY2BzMihZFXKkWDTL6LKefjX1sVzv1FoFNijwWK5eAhTvQyaNbVu2rn4tg85H9EDJRfeeqhbPEcunHrHT",
  "key11": "5bR9eUrGroePhcteRPcHgT6LMKkpBPdPma3GSRY5qjJDVrqsnZuCyX2CBkXm6sDAYzWe5WrTqSxiFKDUvAA5kGd1",
  "key12": "341McBbmkbKxSGMdR3fQys1P35v4pTJaLFELRhwAKqew3ttvecXU84xoUmWr2TTAgYihomhFUyecioAc2Kk8NWNi",
  "key13": "5VnCYNMc9CdZtdyA5NkUksvSRjT1cthRd8vDpDUHU7fMxXaFJw7GfLK6sFBC9U1mzKaZyA7mK2Ku63UaMPc2XGpg",
  "key14": "62i5STwKwZn2wmpyyFPTTLaVRma2jmc4ECxGR7rTiJjFimvCpd5dvMptcSSYtGXPrqtHKqpEzUMJddP5bpUPiMdP",
  "key15": "571oxXW5njeM76QcTYiM6TRLYkHQRZS8xRPadbu8UJYwHs81cqnCjVnTNf94QVyaLW5sxikZU5gSY8Lg1a58nmbt",
  "key16": "2QMCWW51t1FJLVf33K1S2d6PFqNkvfg7YZxwvanjVW5dzgEVdftKn1fs1vDoZ7LJ9B7gZiDjxesUJSkqVqkqHrf9",
  "key17": "5Haa9DwEQ1MLhmCMFuhdvZxojZpooLLtbnxLkw4ytR6o9KZHPzPrSRHPjdzwD34KV8xfKRDKaeipd54AqANKSRKm",
  "key18": "3i9iBrqpCJbPVTa9RyWpRyswCTZg43DyG3hxgvmXU5YwdtnrYj85nhG61wkK4jhQoqLadMiQJwnFibazKSnzmBdf",
  "key19": "2NAm9sNxakZrEHA63t3WTC26tLmp4Xu3EoigiAPiYyATarmzsCmGnfF1MAty1aQPvtTBZxitYzSsif7HRj7GprQZ",
  "key20": "2bE8sdW7bJh5FtRnG9Y2GVCKeR1KPcxHkmkwsTXaE3ik6rFnhWfABuxtvLyms3hjY6CQ8ckYUvCHU1FjSz2fENBn",
  "key21": "3YPXEF9YLZLjN9CupUKeARxtvTAdm35jNS2t3vXoBNhmxwTJUrXjnP61G5MckSNsdHgdTWyXDkEKzKqFM2N4Napk",
  "key22": "382ZMkuxLQthMz2QBkQKQe7wSuXRX98rhsefChWBCXUqYFBuPZzhBFXG3U1CwYeNSCLz2UNadKCNoDeP1jkFspTe",
  "key23": "4AhhiD2ZqCuKetKZsQ9yR7Ld9ugr1DATP7zfjFFNFHP6KhEKqAit6aXKdK95RUkqFsqQogz2NjuUwDq9r1hVWkQ",
  "key24": "54ZcCBXS4SFqSqdMr6Pm1iqoKjy9SRassKkJ5269b1Z2wkQgXP5hdgc7jwykWLLTNpbzL29SZsk8sYVxZmF2aspF",
  "key25": "3NPj6YUwXYpBysy6KpfWrKBfcbdqe2wDaQ7xYN9L6MSvJD6s1EXHjbsY818E7gwx2ag1k88morLCeFJhrWGJ4opu",
  "key26": "5NUcVu2aCR1pGEzrA5i7gpRtshH9T9QF3nUhm1fAG1eKvtcz336yPt3GySKFrNBJKJpTsp87Hsrod1ekkvBywp21",
  "key27": "3uc8Zx5br855QT4kDEysUCGmNpoWtVRC2uDtqJcpydmdRjEbzFWhzoaFdiem3BBLigPhthL2H9njRRV81DvjECtL",
  "key28": "4m1QAXjhbRbbw8aJsWRV6fdjK1HUWjVn7xw89djqq34QEhp5aYFSWgDPk3v7hhctyiCNqyXh7aBZxpJLdFaDqwtf",
  "key29": "4k1UbzyhUwUZX9tSAG5oJoTuzhfjcfYrF9Zhh6RjrG6TSYhyBZkYhwU5nk5a3XKV7BHZRy6VJ9Xqeg7KkzUXQMeR",
  "key30": "2hykHiYcrfNsVYrCLSnbr12buJdL1sgkp2EULuZmydEFRnK6qyZd6HRTc2hc84D9rKSxjP7QuUmhJwcPgdjpGffq",
  "key31": "9DbnGTGMqyPhPxui7aJFbZ2jnnXwCkSUhV6efAqtd1pfDeTuBGW4ALENUSk1QZV3WZ3RqtzkphPs2DM5bppbZgQ",
  "key32": "2LYAtQgVkoY1Q7Xcb3GiFtSCvy6AfD167b36CM9yG6gPZU96fSgDr7QGnvxsEbYK35mjnZH9h6LfJCAjz1HYzYcS",
  "key33": "5jWszayX8VNcHn1CApfyQTU8WHc1YWLbDdtYX5KcgdqRxac71oAznADjgVoA7PnBHzJpVg5A68aEfTZFpmBZ4Sm",
  "key34": "3vHgiMRUkfgLTcaN7JZGeFik7L995bd7XNFEmpwnnc6JZQ9Yfg8L3tQq7SbzA97ctfDuu7imnYVUATUFkKCpn8b5",
  "key35": "62L7wF9XproX8qe6Q5154inzbiEkcxMAoepyfh8ANW6ydox7mRmXoCo2t1QnVu3PBVkFjABMifCqeWAbqZKYkG61",
  "key36": "5Jp2B8ejnqdYJxWAPZYibvCjYKHKMibN2T4dBgLKEkxp18Prwd5D5oFiwqteLC1LBwhAaYypqWKdqE5Rc5Bq6vu1",
  "key37": "3LTx1XQ7ZCir3t5dg2kcyUShUWj8EPvCQjgQwLfxRyHUEcNDcMNKAHWEYQBZUum5yYLyg2UvcyuP1k9VxG3aqFqG",
  "key38": "3YAVTeZNrKgppPyAvsFy6snRJgTm61zTwekvSomtqwC3yWGGndspWzxwX91CMactoeRR8o67qDpuMDUrmkLEFhQv",
  "key39": "31uMYFZim7aoEf4L91ZCNBJeXpv2uDKAoDDDuTdcrPSNFw53payxZQx3jTgirVjRWSh5irb6inVdBM8DVirdeBtc",
  "key40": "4WroGkDah9U3jxutqcrSEo7AooixYrYssrADhB4UsSmNm41fjgD4akPahcqiMG1jrRp3asFgudTrVt4fJgvHGr3n",
  "key41": "pv4W6HyjQ4zsvxBF4bW7qto4xWDjHMFsp9vpwtPJJECgWnKQhsgkriD4aMdEzYLo9PLMqYzQyKnBj41bW6wVHmA",
  "key42": "3wVPtWYQVQb4Whrp698nSvApoyj7yKFzLSUCZv9TxQTXHV5KDmX5mqtnAAHx3EdT7RYGefLc3YG1KxKuPnBcX5iC",
  "key43": "5H3yjN4YWcRfMQLuLrgucVpzkcJW1LF1BbCL578bU1puKgn7szbhyv7KPpF9tx5TJY5wjPpJuHn3P9oSWa1EExQ8",
  "key44": "2vW7V61k1JJZRXpPuYdZRCWr3XjLSGHXj8TZoiAkqksNUPaHcmieJ4dYCzzFDJn2jgYh5LzFVR2FiCM7JeTmQ6YK",
  "key45": "38TdSKQaxMJVFSJUGmkyEnw7iJx7uSowx6Yp3TEhnWYtEHiks5uZA9eJNpPLoXyFTgFaYjpuGX8xyeE6vRBmiux4",
  "key46": "4amUN3EYfDapZRYvac5igS4r7GjpBNp9SYnfBuFZExGPJ5RXB8YrJDEAuQC578s1mdoKNNaxbFQJhAqwjLwcHSkS"
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
