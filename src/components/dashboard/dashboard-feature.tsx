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
    "2EnNadJ24ETqWBgNTMUnyvWmwHcoJzd8wxr1aLXnVj2ZHZXdWoU2QvSAJJZ6bojUafFo4DeRrJjTRbUpwGc3BVW5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "625VzGcURBSHmsouLwNoMCjH9NJAt9cfDn7ssb2jBqh6qrTkadD7HsmqXaPEmnVqfMkrQf1g3a1eYLyteZwW81ga",
  "key1": "32HQVwuiQVQD8aRNRtfzQgfe56X92CzcoLt5Rjuh7APHSRmh2ZGN1cpPBv56dwNuDiwQJQ6sUVeEj34FLjWPqDa9",
  "key2": "5uemWmwHzXcUSvz5YZUU1jW7ztK5ww3Lbzme59tHNgqbAgtt3vz8RYRB8DRcRDASeQ71AbMKphAhtsNZ67UEcakM",
  "key3": "3DyUQfE5kYX2QziQGsr6HEXU3pQ9JLJ6zmRo8yHxa8E9iuXUzW2FBhomeSTUZDKWxWWwd9NHx1eMJhRDgenBb2Uq",
  "key4": "JsKx5GJijn6XZEKGQvSkTdpJnwjnopth3DnpYs2yGL4o4GUW1n5LPixM8nQ1Vfp2JisnaDgC6Hq1fuzVn7uejis",
  "key5": "2z2L2gZijNDR5EJTs5v2WWgkytg8Uwdu1vCbVxiPCKQTb7UWULrbwbWS61ACxcQg6SYdktZAKXWSgTtJRd3YnaYK",
  "key6": "5F8DM95d3UzgqY4X68abAaWAAEnErAk3Mi4bAkf7pdJLsVUCQcwaKDrQwbmHMMELKcG3Wahm5tdrWshEZUz3Tz8j",
  "key7": "4SVu1RSNrQjQhynx7vJctTgW2BBhKnsoEUmmVqy2fzkLB8Kx8H1PSMkR27ovmCW3KkiSfgzjFEePn3ppd6mAw1cA",
  "key8": "3j664RvLASw4k8T6dKhGuEuiAJ4jeLJqPJQ7NaUHjrssBH6KDAFwGuUyGee8FRqdXHsErzVpkeDY1jgr1y3GC97w",
  "key9": "37wb32EWjnQGHu7aoEjbup7hWZrkgvH3KvuPtMtqgY7mSBvGQCiMmPmaZdZv2qxgJNTCrLWktp3wxUMpEvgGBx1a",
  "key10": "3WkSXcJSqrWxLWZAyFAu2vgtnCWTjt2S58QEAu4ogDroBWQt4GuRDEGucSe41FWtVeSjZts5JX3GgmQETjEqo1kR",
  "key11": "2y6GMeK41Xj86rf74rAktwQHgBYQwQUGQ9svpLSZGMgpds78cDNU8HZSv4NGpYWptfFKeu3xw7ADRB6jHKkNHqeG",
  "key12": "2LiDxGgE6vUkCUXLmJpFzS6xVWSMiCv6Ax4fEguscJkE1wyDDusNUW9VnwK4R8szKpChR6kRG9zyuFJmqYxN4Xay",
  "key13": "3CzdiraRabpJXT9VrCX8dnZi8ipNkiva9ZtmYXbzyGdhpuF7mNm8pNDCGvj8PVWysd4YrpdSkUe6fYvxDR4Nb4d6",
  "key14": "GUE7TsXV7D2rSpasBY6aNhYaxNzNS3c1h3c2mr8dDNfAZpLrX3vVfdqZKzPhfGf5zLfmbT4i5nqNPooDFwwHntF",
  "key15": "Sw5RZhcETjb7tT7QtSBayF8zDfNGGVf9ZMv7nQ1qhKuuco7fhat5HeFXSWswVifLgHjtQEPr7HgNiLBoAdoJQYJ",
  "key16": "3vRjvpgdUqazURfY9n7ipA2xn6uEyokAADBH2ywxVip6gnqtTuCGnLvr9NDJvaBw6YeKmpfqGNDyW2LiTKqynRDS",
  "key17": "nvKYofVJpQG4cTEmKJ9HHftxgY4W4iVtqp9qKcxKYyV8FxaiYJSLRqSFA9cmtatKLSMY2P6XtiEdFtehJ5g92wH",
  "key18": "2963nTSftswv2gi4KGhBrfDhoYEWn7zfyfnTbfAb9TCHvJXsi3oC46Cacj3HMzWcRwt9WXS8kgDmZiYfJpMY6wuE",
  "key19": "aire48vrssPX4Y8bsvUw1C738ynWyTGogsN4efwtn5fNBYFxPGaS9rTHxxDe3TAnqi5CxtmtFmo19vrc5q8iPXZ",
  "key20": "3Egpqo7EcnTTgEAn83QccbNP7MMYb6EK3V3VE6tWPiJncXW3PysnJtCkWhHqk2rwfPm69gxpyDniUAns6mQA62rb",
  "key21": "2RdwKX7p2sMyTtKihtHp4cprEPwdjdEo8wXPvasonN9LBkEFcEef73uf1RHn5VJCB8tTRvUrWFRRr2HHve7B5rBW",
  "key22": "5HV1tZ4S62M3hPo9uL4eGzpY3NWrJDm1NTAPXgdKmhWP4An423x91yzx6BVdrsCKU9saSy9uRxgbnENJnwsjT9Cf",
  "key23": "y3RSB58RQwrwz6VBbBUkj1dzrmA8qVBcySiXoEfEvpMAEgVHpMCCzXarazQeAWZmEcTCXwFW9tffwKi9MTsE6GE",
  "key24": "5LvWPMMoRV8EsmcrJVkT6thgTTPbzLQCHgMctxNZUpjbKmwVSxRyWiUgqzJm354vGDRUe59tLr38LKKW9cby9Vn",
  "key25": "8neJ574GwVCC3dMX9pVJ4FMekqfQ29WC5Nmtwo6m6EANLApewgGVxoZdbHrnQMFeKeo3Yg6fyxVghCF7SxAc1gV",
  "key26": "49UwTxyxsP3grxf1GgKjsby6Myv4rXfwmxvFFmmhYb4TvTs5TrAqDzUQHPLtcP69g5EeUkLoxvsQV8QmkCKj7Vhr",
  "key27": "CLbPhak23VUDeJrhoJVCiWP731gCYu2MiLasReZ2oCyyUBpX3cqT1nAbQBZaHJUQ9nrqKVtxUzL2iZNwqPKqo47",
  "key28": "L6fYSnTwJTvFrbrrYqD4yphvefsAGsq5DZxfzGMeQjh5XkQo9W1Rsm2uMDNeTBwJqZCMvpkkf9f8FTEjSUFj1bC",
  "key29": "4HmsfCYS7ckfYEpvu23YvNw8N2mzXiiq6dDvDfbm4QRgTa5kRWuMnBQb5gDVFrs1muYdsodAEbFL8L24FE1U7d1F",
  "key30": "knZ3n6fBwCxzU29ZGzbb88W7ihjPYU8xqprbHck8GHahs94dXMst4yPYHeg7VDpDVrLUi2Kd9fSWomCjcF8fKHv",
  "key31": "4X2boJgepzXzMnSuaTGAtvSsYYb6N7CCbmpYty3WqweQ5Uug9jwZzSNi9dVw6iYwS4SFdHfRrUZ2DUD94Do6FhuB",
  "key32": "2PWDgoNKVgft9kCwJ89ipP2rcHkUxUWunHCzT49ENsbTvBt5LYosMxgCGjTtqEfS5ucRsfdHRuzAUXipXWwBcSN7",
  "key33": "5nMVQVXLWb7bxQJLtyEwe1aUoQwAui9YsHnZXmqi7gr96UCkRKpvXeQ9LTZUnd8M3oY3YC2LMtosDvhxL96t3W2B",
  "key34": "2wtYjgB52VANVsmMRpyXLDcTaHsCXjRGwwYmDBb9j5HtCUsB18LRSLViULcSznP1b4LuH5hN12feHkcpCThYkdWg",
  "key35": "4MpcvFTYVTxohLkAQjpKoEBH7dBWv9XYEJAoS2ozDBGVRgfkzauW8rhMEu33vzDET9fP3tcLnahayvEEGMLsN49q",
  "key36": "3Rwp4HfapeEKm3t3utd77mdf1629L8pTbh4CMGgxfcW9iexePUnDrGY9NWmip5FVyBwrqD8jubkEnJ8tRyoPf6oq",
  "key37": "5LNrh9695HJe1n6uveFqadNCNbHomq5Ei6mG92cZY6hUpRkbhP9TbtzUqaEqXZ2ZfYoWaRr8cBfpZDVzTBRTH9xh",
  "key38": "N5JpbobTbb9sQ8pTTJHgGxeXD1uiiad8iv1aNtmmauPkgoPd2LYnhJ8V7ewwe1gaFxEGTdh5rdA31UX8rtayNSe",
  "key39": "5BkHno1CX3CvGhA6A7rYRPZYCgd394J4A3ALRbBbiBxnYgV3CvToRv6v6xY7TGB8SYUKRj9vCfidtDCGhziDbaLv",
  "key40": "4SVzLtaAErjMGBWyku9KkkFiuxwCJXTk1CrvVvXAsEuMEhuUA7JuxRHMgefVhKC8MYuQWF9n6XH1A3ddXX7ycnmE",
  "key41": "4NVpwvmS7AT8JRfZvfoRrd3iyawzHapLFcdGXAbWcE44EWs1veKSy64H983MsLeNwZ1Kgj8ZPF8dwvghoqEk4YEa",
  "key42": "2t28YDhBk2u9W34XfaYhRXtY1v3c34Yb95H1XMqRpMJi1HB8BbkD2suAUt2hHDZ4yML27XrbBcQRL6MoGttqsXS5",
  "key43": "321L6PypbJWjMgGnUyt8qX97NtJ36QkgdDpkuX8KfXv1PervCtSaDsVNPHqcsV3oyvogGF9Maw5DmqfYPu4rETb9",
  "key44": "2DGJ6PGJp1MvyJD6hHW5X3e7JXnPX4A8KxtGsChXBzuXc9Pm4sLLvfACkyJoRZJgHmgPm1P9qzPRufZvistkCrSF",
  "key45": "5T39SGFwCwKd8jm53vuJt9wGhJCDEA4QTKxsagANgWq9SDfnCSjWKbjdL9mcFD2iEnvtUsDxi5Rr5t74HYJmX8Pj",
  "key46": "tAkSYH9NDbbCExGf3V4SjtmhNU8wtvYN1oQJJC3GDgMLqzSqpZy7QYfiNHN6ShMnmA2SnbVUgpdbZT5y6pwssPX",
  "key47": "61QT9C21T3SPXFkF5J2h5MRr1KgyamTwPEsX6Mkun2rhLixVQF1cAgGu6msgLcZ6uKWUnWWV8H2cWBz7KQSoodXn",
  "key48": "dMHmPfetM85nG9jxDKxCiVw4PY2bZAtyeUwpLKgYVWBt7uPsZtxRTbNAjfbMaT5XmZ8zvGA8bY8n8Jfrb1JNuh8",
  "key49": "5Lmhz6j48bmGuRomGDbEaHDBNZmS4T7E5fVMH9cbpuLTUeS2eLjAsq6BGkTNzhpLz3b1eYQLxfBtRriPwRZUAcqQ"
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
