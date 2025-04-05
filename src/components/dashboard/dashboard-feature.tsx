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
    "H7jLa1VwrNycnZuqXEg8R6MHM7Eo9WmLFmZ2mQqTbzqh3dkvamKpDNqRADJAR4LXjupRCCq3A5esQnRQnbboobu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ubSrEP7WNwzzJegj99zPfip7tNNMpjzDMofufSDwuGSwj56m5KYDea3RAJZEVAzaKyxmDdpe3HjmKvzQafi2FYi",
  "key1": "5UY8wHXGwHnYpCGLVWPuqvdKC4DgsXEKLrVqidUkQG2txpdTv86We6yZpy31mKnVubcNs7tDjQjXnt9RsnvaKs28",
  "key2": "55FtrMa6YDLFX7mYrqWNeSir3dKHhQ74fgrqg21f2qnxSayucwsFCmqPHsoMmHFNtT4huzwoGs3XSLGgPEc11iYD",
  "key3": "iyVoxfGMAh3MRmCXB3JJBQ8bGuWAZFv9nd4jeFutcK2FCNk4KCsxmG3EX3Wj4au5qbD3LX5iX8EApfWZVNgHPZh",
  "key4": "3vRLB5WWV9yhKAuqsmXKo6shYTz78vANZaewfTPdSnEssgmfyju1GVF5PbHeza38YGnDdQ1Dvo8FDFfatHoHYt2r",
  "key5": "7ZCAGdMPgnZAMGTURe4nTQYMxvadqqabGNbYpuzHUcFvFrAUCKEZdJPwYfBRwPsuPQHoxEMVZG5ntEJFgtaLKis",
  "key6": "4F8iT1VWytmqJkkzMo2vynTduTCEVQa29ZLj8wVj6FeNE35qNhQbqCDH9Y9RkngmfR1V8B6jdLmSa7gaFz43xecM",
  "key7": "5HdB5ns7iBZaPxF15K7cDek2G34S7cYYUhMj7kBiF3PGXyyng6TUCoY3mZEcyJ4zNeH8SdBRAq1CrRFykGQAG4ub",
  "key8": "4gjsDpXDsiHRH1Wx1iykAm1hZ6qh8jfm8kPcx932QgnR3p6TPZAUPk7ThQf24BCCjQNFmZD3kFGBRL5JKwfv1RCj",
  "key9": "4zom6NDHnZ3ehEySb4NxVPWAGuCuoTwQLbMag5vjNtYFSxLnE4cHwdMs1DZSqoK3DzQ9pDHkSmy4Ybk1CKSoByrz",
  "key10": "5YCFmcmAGahYFK8nrcRRz1xbLw7E39uxnacvgF2evVfdLxg38YQJqKRv9Pq3tMUwssZbBy1J4NqiyNmUdFXmTAh2",
  "key11": "5T6cC8Aa13eMfsju3bApwdehWxtFvqneQ8TajLS4X8AeCbCXXM6bTMZvbC3J48bmGAbB8WPgy2GFnkfCFuwtt5sG",
  "key12": "52E2AE8KugiPz3U1V4ikREqirhktbyb2Jbxz5LdHkA45b9uex5jJ3Pyq7v69gqjL8pEFSRXe9MceDFENFo9avvMT",
  "key13": "4KSiLPwDMoTTBa9S3HGaf9S6iXrZn82myYfAZ1T1BDhG5vcyuEadkLmuLS1bykdXxyViyhVhg6VvRmsfyaXz65y2",
  "key14": "GWVQUsAuwHiXgxv3uDFdnb78rWsrJcAhauu4xYUavwHBmPm4SE4NZkyH5dtmtuEtdfmGEU4kcqqt3Bhkx6QsXFf",
  "key15": "2VN94ZsgQaxqbUdKAt9GZrd41wMHhJKcW5qMCzouskqAsDDB83hzaBaz4bdzSdaVpabJwTsVEJnBDjdVNMfkNaKX",
  "key16": "4bqRNv6CJyDUB7dkLKvQMWzAciKaJRhxRbgydsn4fjFMNYq3gXLvi1sV7FTNfaUMgMBBBLJ6XdhQxXqYQjtKnHe9",
  "key17": "2kHb7toona7FQQyZFK59LXjZVjPTzwD9bQ7FWTDPvb7BzZiGesVRYbaFvVRJjFjxG2tA79NHxZRFzPQeufq9v5NY",
  "key18": "4iAJkYtKdyZR8r8xXWEJiibUCYQLEPPWbsAxLUXzESKWwj8NmDyZj3aGTAKsnhVRFFMu8YvhDkGCHz8nq3JQXgc3",
  "key19": "4XTi5CJm9Q9a8kAtY7XJ4PrB6JnuBXf27fnHzbLjVpojyxygLgtKChxioXmHN2DW2opbza9FxhBoem7CZWjgc5cR",
  "key20": "4W8b3GZWZTGjCZM8WSZewfWSeTqXysa4HY7peSq152nEwkK7EANf4sW4CJAtjLCqGskvHkyaCiYp4acTCucWKsxJ",
  "key21": "PhRz3yXWoSSakA49W2eWbSZNfYmxavzVdt393gn2GSWDHoPwaPVehVcmniiwuMSkyrnqJYKGNL6j5NWPxsWoqoQ",
  "key22": "5pWzVSFo63VCZHJwxvJ1TqLNWCwQwF44PGQBtK4rNUzeZiQni7KL3XANMvAgvLNpByWt3zXZG8qHXnGLt3PaLUPC",
  "key23": "38GELVvPe3oQfx6vgTZLXFfK6vtKXK3xF8J2yZZxmwZju2CXmJV8GGKgrcpiAefHWzUxSsSzrZiB9SQAkd3goowp",
  "key24": "9ZB6uG5kxe59ph1JnG2jAAYMCmAfH2iTCnHsFnR52EKEBLaw8ysXtFUTbTwEoCJ1okb3gmU2U9GpjQMnu8jeP4R",
  "key25": "2VctmtzQSdjYqMCuEoeAf4g5QvxkP5N7QDW5ntP8XgHVPWfjZpDbvL81CCmrJWAGuhL9kgubdJYXQvXpTxMVbLkY",
  "key26": "BuWheED8Np9mPpeUEZP4Zk7k9vHNKJh8HavxL2zw3FnmFxbozs9Wd1XKwoUoYqfGGevC7bUwGtwJN89EYK6eBEC",
  "key27": "5b4pr9UPUBytEzDr81HPBEaCkwn7JLDRf2KH6jJW38nA21dhipNtUoKpBNVvRhdaQhXtd4GLcT7WRpbvTJmxLUXq",
  "key28": "3KdarVrivrjqNTutKRD56RYzGAVerc8L4nUkjaxG72xjabLiqQQbVWKWK9hcKVhKd7Rjxy8Z9i5wotGa7CccKwf3",
  "key29": "3RLSv5s4m3bEMhaTXLRWu78fJrcyPN4bmyFNNWHfHKX11GnD7R7pXyGUs3Q9Av6gtAEe2TCARuALpCsDvj6dNnL6",
  "key30": "2kh6fKWSzUS4sMqLg1aCqwm45B3aHcx2Wfi3JBSoBjRhkh5Cc8srvwLEgNzY2ZxhpE4aT7byRM4v1zZE9mZLgP24",
  "key31": "3xxip2xxFFkoY12tNYkh7Ciwg3Qa1qdKQSgP9GS5C5GyuWFcxpaCNDuMSVoxpPPnpcFWY7PpX94FDNWRzKW3WcT",
  "key32": "3UjUc3JXyCRfZAv3uPERpHhSZjejQ8fdbpiSChyF28sK8kK2pzkXK4w7XF5RZs2geodR2Vpe9oh7jk4eafuTBnTd",
  "key33": "2GckiBqodaFRnoGX1kqVH7wzGeDoMfS36qMKvwU9igtZpWAzihtatNHKXcrQEXd41wQKC2nohK7BHftFWVjxQeik",
  "key34": "4uAjw1B2RLF66HpbF7rex3r7sCzdZosL6drJZX5b4QuwBgHwsrBUsqUYgPRbj1A5BzMKTyqXmEzV359tfioGoSCb",
  "key35": "2Uy7LA4Lut5itXGwbhK2EuBUoa69G1AefHh78qF8SuHRc5pFxzvh1RyHRn2ueyyWZdpjwknpVoVTrkXtqSsW7JNF",
  "key36": "4rTYqjSnoMKM4GU6J68MMtGfxcTL4SryNghffvLnqg8vQVXscaFyBQEiDfpCVcwxjgUoV6atGHp6zmRC1vTHHZTr",
  "key37": "51tR9RUgc7Y1ZTN4zHE3QiwCkoGoNfAeRxzyQRfRW5YdHPV6zz1JZpJibQDUMbi4ovy9DHhUDYdE2w7jk1r3txLw",
  "key38": "3dTJg4bS6zNJaD7p8Lw2RpCCwGiAgZE39exCp5oquPYwQFWhrakShDFdno3kXPxy9o66jgpPzvku94tveDz5XUbN",
  "key39": "3k546A4DxLRNaFgnj4XcfbcxAvK8aw4dNva9p5ZnoBCW8gGjcNRQWtpqPXwkNQ3fzku9gAaounXa5aVWKCUMuLNo",
  "key40": "5zseiVos4TqJHmiZQs3zmoZ2RJPkzNugKXAv7BKVELav6YUGJgmZ6BpgdxhvPSbgWV34ED82tyvHR7gppv79dtkr",
  "key41": "3tWPK8TCGjm1uxomgmtV9Vx8eicfKLHLAn6NZb5E9urKaT7Cq9ui9o18Qtqh9M9EivhjU5BuTzTQiEW2aFXoYJ2Q",
  "key42": "22kp59EuQekkSAvLya25JXjMhu3fGXhjoP6gfCKQYwqCbcngNnwgWvAJGNzAeHhk9JyTQ9HDvA84s9DRPtKYiVPY",
  "key43": "2XW5zD1pBVTTR8SYqeykJdVaHnSXC1BTwGEtGSHaCv3bf8JnBcUzjwBXYoad7JcsLrJHZeo3PThJoau3qdjBZZqK",
  "key44": "92MwjUDGYuAKnaxeCgK2GFfpz3mbgNcV74BQR4xaN4JCxFdAndWyJ7iz6jSpZaGh4u4X2Hcikcwj4RP4wRndG3R",
  "key45": "2J7hUbhx5MRHY4NdgHP1zV8kKKpuESWCw3CjfkHJHqRsscH5rto7gSehJa4CRGRt5fPX8tP1gKSK8n5mJnZFU1pU",
  "key46": "4i39qtpLN83oHve9yJVhPoX8xfrzoZ69N6YJJry7LG2zTBefgXShPGCqjwVAyarpKaQkHoCdxxLoHdUgKQWWjSWr",
  "key47": "2Zco8T6BJpsW1SjgPNQd1YSUYKSNfDBjbcYb3C4pydsxbqHXtzyMW6T8kJnUQFM6yL863WuAdt37jRUC4YAgndqQ"
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
