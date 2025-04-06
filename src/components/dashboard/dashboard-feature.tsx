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
    "3bzvFTWbbAjCt56vUZYWiiCne6pRDdxigL5N3FBHtxZy8X3TYy8v4NvWYvEtEyNS1erBfUuudTrxJrbVyCyU6TjG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sKjW6p21kEuh3YZtMrt7kEbXbcvKE7kwqptkxTYbTpaxShNockY98tZ8t6UCRqTvoZNMVPMd4iFUPSLaJVY8agN",
  "key1": "7i9muHAMsS4WieXibeYFcNyj6VDUt1u1jeADRWi8485H3oqfkHAW4AmkJzp1cTCRssT2Gj8mPZSNjvDtiR9pviP",
  "key2": "2Ma9cm2SxHHGVTJk7ZQxK5cVS2FZ9XSJV5qH2LZAHKfjfCudyYubHd1RdDoBLwqS2JetCwpFXSf1SEfsbHXJLThK",
  "key3": "3VqkSdzsakYc4q5NYvnxpiDkuHiHGvqK341wsw3UfnTNibng8xa6S52fQ1z7gQCxLnsRvKQnUFJboiAEfNRjkFfq",
  "key4": "KQbnov9jEp5FgYUuKM8a1GScB1sUVC2hXPy5oW2m3EgfxzyxtnyvXzxXy1vrTfVT4KeeykLXmww68HQX2CdMjq9",
  "key5": "cKL8VoTfByZa9DnboocnsMCqhUiN5GagdkrXrw8VdGfsFe7hDEbgZdZoRPCghWMzj7pTob7ohpT8WeqPNuPcHxe",
  "key6": "652xm2B7FQae9hqw9xZQwRUFJiPybZWh3HBtaT39RrbctnCnVnnrZAFPVgRGZ7ALvPTw9ry49ijstjDq6WP29mhA",
  "key7": "3cqaaNBKhkUZgU76AiCqvCGSMaBDkCokWqxfndGDqTEF3cU3sMZdP6VaYz8cqs6U6TB3YEK1c1KCZk7KTqMhfnDp",
  "key8": "2ssPiys94seobLYRfnQ5RC6bYUy9jJpMPMAZqY6yxX9WK4RXD2tbeVsdFtVCEfBkz3jHGyjLmjEygQBDZoEUXYRV",
  "key9": "ke34tp8Qn5hBBUEDDVnKmAZ9ZFGAj85tAUCkVwwN3UF64DeAA7jPWuRZsjgUkjasYVfj8PeqHX73haFEEHtWEyp",
  "key10": "2ChzLpMz8BpHUsgm54U7Ay29QNNqLhegTaWd9KAFPgBdHjncN9csQUzMJvHh8R4RDvs9qAjd2j2nJgK8NthX3NFe",
  "key11": "2CacF92q5Ganyg9kpjKjb7aNzzeYmK7zMLk3Df5bP5RZ1jJht2aZWw7DNSbi4Q9AvccPpcFoh7sTCYuR3VnF966a",
  "key12": "4p1GxX26E8dQBFvW4rH9uxW9nnxJQ6oRN1RAYcxzg1oFgX11gAVWmdFb4ixMTKarwJcBeYCCMH44g6hg1RjQitTb",
  "key13": "4RSeMTdouSfQjRBHRWHXtJkaxk4JCJCdQZd44axYBqtZms2gprVY3bSDsZyNELnTbok4zVdppvmuyMxogMPGNNTx",
  "key14": "3Uu2PayuDyuUpfcFaYrENGkzbkzmh2AhJtzUPVFzPXA7u7TUKvQKFm23dX7NT5JDJYvPWTMXARdteSpcrMYd8G8Z",
  "key15": "4oUkzfUbH3pMcRvJscFBg6htU1NnC1vKz3WxpmNuE75okCp6XLaGpccwsFU3yrHhKK1xhTEtgKXfhfvb8KY4SC1G",
  "key16": "2eJxjHJYyZP2kWEXrNGuui3szksJQTAuYjkiKeEH4h6ynqzsBaYL9NtUr4x1BhcowipgCrw4Nbvc7xMEHY97mvQU",
  "key17": "369LPU7Z8HEMTwZAyCxGV6qREJZ9gXcKvqLTcjiBnoFNJetPs7WZJY1Uh79gDjZm8nodmdJYXnT9k246KtjEtSKM",
  "key18": "5t7kufHc8jZ7RKn7RfFUS4KPdBr6eShb2UDUca5evi1KdpdwA4LJ3HoQb43Dj6oNxaLTjW6sgbkDKAWj3BBvQ9BS",
  "key19": "2oWHYQjrTSEgQiMHRMABgaB1xhLuT4uFFaDwusK61nF5xXAMV5a5DEcbKp8wtxtBgbzK812S9VfrZLoLoAz32Y3h",
  "key20": "dXnJESsZEWp2WxUbuCDDFnyp8FZmKVwPq55gMLrXMQD3ZVaAjxbiRU6B2oKtDxDH1UiqtJP2YgCbKfpbLBSjvca",
  "key21": "15LEdyrHhbc98WZ7vsAnv35ktyCavBbBpkcMfqZ7BudPCgvK7i6wThSBYcXdcCnrGgivUSFgHBS1DpjFnp37C2P",
  "key22": "3aWVy8LKDWZr46Ws3Rq5Tw7oCc4gdEhkzzvHLgJiraKoCpeWtSXsvdCoE1GxaivXCJcXsnFYhqhaTzpgcJhqkSzo",
  "key23": "2NW7kTvetcjyDAEnrdoQCjEAQaPrsrShFbUMij695q1618Bo54KoE9LMHdx4YMvJCVScgBf3U16PwPXLGLDfN7ut",
  "key24": "49NE5W6dcYDKyP5zvg4X1qTxosQUnSvKyKRrf1ESJArQpV9j5Vh9kxKovRR4Con32nyLrD8uvDms7qatdAwbr84A",
  "key25": "46hC5S1hWpXTEaKLgLQQc2CQkt5HEDccNaxcDreXsctErxLuUFrSzsFV44KHBdUKhWE1HBfwdoe2tZKjDuvSgy1b",
  "key26": "4vsG4u53Mc1YyGKK5MMy3ro9nnqGrhFHoF71koNBc4By1c1V418THdFZTH4cV68oKKHCJHSDAp6NnEVK81Adbb3z",
  "key27": "53dcw2Zn2HyP97ZBtJUuotrYAUqyJiF6JrefWf9Lp6BRi8e7U2hxSfA91NSyyHJkp27jsDUF9UfLXqKCned96yQm",
  "key28": "5zEeB5V55jo5dNXxZFY7fgFskZi6DsFuQKTFx6ecJDUKeuZGSn8HNAhw7C85L2424eFJtPa87zuVXexTw5atVDuS",
  "key29": "2Q7e636foh1WrPoWxQKhzVotrQvgNKf8NaWTT6MpfapNMCDwVPoqQz44MRP17W3XJ8huMqBLFMkvGCWCPay5z8MB",
  "key30": "3qebgj4sNgnkAbZKmdpbzWuNWTqxnbU7VQwwWTmzkzZBfuzL7D1JT8hP4VHs3ipfi33sXQZXWvVvqs6tNGXhB5wE",
  "key31": "2QqsvvoDxuxiFjbh5zHoB1sHCaWtiBd15ALnxaT45R2U3vMwoFGrdtQTAZ1xQb9WZ6cSqr1uXNAD2PxZoc9Vk5KH",
  "key32": "3VYRt32q2xLo6xiumR1wnRZNjyVfvLG1W7U4yxJ8qpVvdKXL4t1qDSzeFq4et3QFjT5CWSPhqLWkDKCVEpT4hM9j",
  "key33": "2MpPWpU13Emrozgm2USu4RhY8TqTgsiNjRRc4ERb5M7PNWSTzvyGakkyrFd64YjMkZkgYpSCMN1PfhzCLSNTAd8k",
  "key34": "3zbFWRmquzJb3V7ztaU3JLnzrzLRTHyFjDAL622xFArD35tp7cTzJ6UNBzc6HV1RSHjJ1U7x8UuYSMk31bXtULFR",
  "key35": "2MLXXCp4joa8z7z2xPx1WsJxU34vtFg81GE8Rssj2VxQo6B67Z3phjyCByjFS2s79RLjoQUKgasg5K4WwyvWf2fZ",
  "key36": "2217m48kAuSR53gRqjK7GoVrunGzDqSk9CPWuzP1yrHvfPmdThKPbW3TWaZ1JZWd2bMvUW1z2y4SqwxEqS5LbjGm",
  "key37": "3gsp67dBqZ7FkVBge5FuuHD2XbAQGKFQAGMhSmhG3vwJBeNJJbx4wikdG3uZuRQfiVM5GcVpbm3C2NDwL9fFcHeK",
  "key38": "22p318kw2LbmooHQ6z4qDjyfWmj1KaKi6N3fxJRb4jF78T7ADqRxnUSo9WRDopubYqKDZqbHYRhsJX73yTDPFtJ8",
  "key39": "3yZZL1gchokVFxNH4S6w4tZqgcM2MV8a8DAEBN754KBQu3Qo3u4QvanRrheHp5VZwfp6bHwhcWCsTdreLSCJMZP1",
  "key40": "3E5ASzLwch7k5tpxLzWsjh82Q3YE6VhkptA6wt96sH4GNthsdJRg377Kfn1GMoyFZA49aj1uxHc7yaA6QF4ntzcm",
  "key41": "3Dk6NvbHJYRmoGs9fDDiVunFAdv3gfFevSSFXBQQSiPxcFKWnFhiFawJqn7Tn2qhKtjJUzQTXUthunfooV6xD2xn",
  "key42": "3wwMsz4BdkNgoEr21GtqxabsbQBuFS2xEibj7fGSgpmt6AHQALDUptgYv87Xi3vYKJVBYLLLf9nRy3SLjznrbrL4",
  "key43": "3aAZZ54kTcrQ2fAdZSBsuoWJjTwUtdPsQwdvFFG1MeThQYMQo4MZvprx6eWuT8K4A25qwTdvFBMEUXWF69zDzopb",
  "key44": "2wSYhrTmgE2yUp3rzf3B8Y9hvLpvKT4EybavSaukaKqd6WMmDSDzTfPSPGETMmppyiE8cNNoYAEkWDDn1dZkPqVo",
  "key45": "3Lt6rAfWKJmafedaVBmiKowdPndBHjJYAvMpq7qpie2ooZpP2oMdAQnbPb9xWPxeAz4z6wE8g9EtGZXjQc9NoMFE",
  "key46": "45hf4VA1RJb4Pc3Mk59Y3Ct85scC7TLUvqoN5hftNn2Lj77XrArqBmNN1seysVwakSftsadSXgwLnevyiBonuozo",
  "key47": "3tHKQbQRQKGpnJDBhV3rRfTGCTPr1WaRxy8faCpZPcxzfCZY1RnT3nCqeeSXC6RaE4KCDWbMVKy9LzdpqNY5ZDBR",
  "key48": "3DTGL9Si4FPnrj9XGq5xP26UquDgwwLCzVsU47BfBzcTXkjmWdXcZmcMiXFAiNpDFg668Qgy37oEBReUvF7ukirg"
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
