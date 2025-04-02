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
    "52QLi6xC99qY4RFpPQ2s2k9sysbdbzZ43Piv9GWXHK54UKR1DLtkmkB1X4oDELi1YyCAfjCNeZitrgrs3JFzC8qX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "n4JV8jjpWD4ADgZ11EVHEfA21HWUanwXcco4Vbez11urNWvVBSJJHF8KGQh4bet7LuMbN8pV9xe4xfFnAubMQto",
  "key1": "2p8AbHg1MJFA2B7kpnBDmjuvFMxcpCWmRHWRXZSYmQb19JkTCr6heQvrwV8bzuuDJHqjAtD3iucmGfnwdpcdg7G2",
  "key2": "25kC53zqWbgAZVfrPbXYHXesUxkbTxcUguvnCutkUAV7V9bvaN9575Zt17pDDD2i54K86kZVdjeFiHsEKbfEKjBv",
  "key3": "4x9X5BFrXPADL5gVwe327avr2Ap8hFa81A3tNTkDAWEV3XXubJrRneqJNXQobnzGuRoDbfzqDJ1aUEanUQw5jTvJ",
  "key4": "4MzVJVC2L2zaePsQc94yvWxvfnffuUGnkoD7yqZcDkQGRpuucEamQAuPjMcPF5iTC31jTwYCpBKHNhZqTaiZ9gzB",
  "key5": "5BP9pQA6qFLycwATsNBLkF5ZM3rPDjXssbsui9cecXzZh8adpK35riCE71cETaHWnxdK4ofMRHApKNgYo5dmgmDc",
  "key6": "ef7f1oiW161PkaNnof57QD4W6ggeT9jvhb19tp7RADPCN4dd6m9xh7NuAm8F1h94znWDoYzMtPMD8Eg5maQCsUa",
  "key7": "3PEW6ic5rWcaXPBHyFCWAQBAvASgwTUmG5h5MVWHxemqz7ANH4nYFcy7AkbLPSsGXbsK3qk7VhHyL5qwP1AWUvWc",
  "key8": "BMTLyBAzQoim3WycU2RTe2VaAdT8CpRkxGp22YE3Bkrvd7Eu3FpQW2gkqmpEwtCLtgGw3RL6rStRo9eWwC5xwSw",
  "key9": "3gwSW8iJD38XD6bYgmhJfiem1uy2b1Dju8gSUmEFyBNBMvd3MHQebAEWJxkMKbN7V69w2mme95Kym6JP1TR79gQ8",
  "key10": "2cqsQVhKwJT6fP91fnWSWcPrb8VUkN5xUWyF3aAK1pz87BXsphjfphQya2MFkMuM16RMgtemufzmy5ECeLgBRgFA",
  "key11": "5Qi8DazRMB21vpvRugsSfZMUA4SY8FsrqQhUG36VFjZ1faC6GwnL6ibxPf3KhT5nyVMXo1dPtH7iwHmY8H48btRP",
  "key12": "3jAYCTfvDrBSdz21KsdzhpBd8inhaPbi5oWV7Mk7V2CUbRzspAum9kF6qDDLnmLraF3zSDVZi4wKtfGKWwFsj6RZ",
  "key13": "5QZLZPzavAp4awhxqNgTSWS5th5hNp3sybb7S4aRJZCgQvy1JnLEKXG1JTUYYgVqCt656DcfLpWqYMVxu5BsXEFp",
  "key14": "ZTSkKKWS9B5zNhkdR1VVHdfnyFeBgDHWdjx2ymPBGxCwvkJ9zaTVvn59QwP2uR67bgzWT7T78Frj19c7D9JBhho",
  "key15": "28vswwjc14wtjC7KwFfi6UQDB45dmqh9Z9P5LdgDFsTzvpu7dLk8Pjtj5kiVgjRtvjSEn9iE73D3azPjUaAqW9mp",
  "key16": "WP69znVY6U5fY841T2UQWVJtH2xSLJwptULFzNpyHw5Y5ycPRwRzCxSnxnGq9GrdKNBt6UZKVvANDzwq34zkMeW",
  "key17": "2RUpXFuaFfNfYjMsGjG86voK4mPwebHEQ8S1WFFNUTMwG7kHrfq1Dh1hPQMNAbXFh2gWiXqNvnZQHWU8gYdeH8nk",
  "key18": "2Wa54UMFeRZKmpvh4iqrxLGVEiZryF1kQcpCyXhG87kTo47mZ9SAxmFPcxWJUjR8zfnKqU46HLzSzHc2ESgRc5xQ",
  "key19": "44NUbPQjN8VD4yqRRW7B8aiqbM2xbvFqHQkSCUhBtzHkYKo74ivPkbaJmUEqncNN31x2SPTfVs1m61ttyxV4GXQP",
  "key20": "35gPcjijcCQTxECfjk8Xp2sU6ebCoC37Psuz7xSftqdmqZ1EKmtm3JhP6k4C5oLBB4etAxXYSMHMMBbwvtw5nSK8",
  "key21": "3EqgBjDDp4wLG3px3YemEuz7Zxu5GmKLhpWg3CYAutKSom9HMD1VjKe8pzeLbhrqR3ePaPn5RCJC26VR1EV1zBSQ",
  "key22": "2gtGpV7Nd8BL1gFjZMm6bU8GBcrX4FFFyJUtmXSbn1xEFAvW4MVdeKoLaGWGREbNRpStcAXC1kMALY8nhaPufEBf",
  "key23": "2T2rqMM5gkurdNF91JGZQbfct8BkHHigXTeSTFwQkVb6SFZWKjWUjAMx52yddXND8r3AkGcaYuNczJA7Lk9tyh8Z",
  "key24": "CgeNHxk1cxjtxc65wQ3x77fgKZimiuMpWfkv3K6kCLP8SLc4Ubb6mNq4ZjTyDeLmqustgjWcG7wq26yLC3264j7",
  "key25": "sFpXq2mPCg4PnXBzdECg34VizBSvsRAD4MqyHojh9vaJLPVYeteu4HsJmp4M1uEAns5rXfwRNJE6Thhdv3K4Hv6",
  "key26": "32zBoWGUY9nku43VD2zBdzKQWRFTfwB5L8StxkkLBNAQ8iE8Vuux5BM56pzPwNBAxFNthracmtUAKxCQHT8nxCnx",
  "key27": "4gB1FMxzste7jp6f2k8JgfcCqNTSj69KHaVSQv1hFxf6GxvaeHE6DJySN8KxDd95MHHmhfWVw8rvXvPZokyJB3N5",
  "key28": "3H9Jv6Wcp9FxzaXtjtozK6NhbaXmrke8NQ8bgG9TbXzVATDZW4dYbQu9pFiTeSyNUJZhNZMZ2AxR96K52TQ6pUED",
  "key29": "2zyi4nwFm2wELTQgBfQSNdG9ACJUFBkWYuRjYzrcTLcCdSM89zLecvddn2hHtvwFAHjYVXgJLMSA2TNn6z2uzfeL",
  "key30": "1Yh2YCurtUXPYndsDwC8Ugy9DwcKzKr59JHP2T8W1SprmkU4MDj4sgxFGgJxM4PCfh84UUTHETGtpim6ctqk6PD",
  "key31": "JvMSdLc4TX8KrhWa3TVRQgSCAWWPFVm5cqibPS4uD679YGuYjZ2euecSU4vRcruJHcbjzsg8S3yBT9j2qznPsiP",
  "key32": "gnaVHoWMX5k1PSZMpiZUyjHrUhs7yh3BovQ9AKPi66SAzQGxpTxPbfKRnbxNVsWq3eovYMvGCukyEVzbaYm2JXo",
  "key33": "3iZjxWP5qHPDLN278jmvAnEewvbnXijpx15oYwyzLZocQy3mFZKMHWExsWSQvMx3pHe14FCRi9Xe85Q6R78utts9",
  "key34": "YWY2zZzno2dHDvnt5nyB2sTmScdFUPCS3oRSE7Y3tivgAM4gYM87J3TETBQ974L8ZL1jCj81MfSES6hcUchZ5Jf",
  "key35": "2MBdqw5r8UuQe1h1CP1R6QfnaTYp9QRR5UTX6Uz4apgXcCGjsFdPS1savjtFMuiH2Riz7i5WBrpyJM2o3AFNzBPW",
  "key36": "5SmmWCKygGSakeUsp5PpMHxkNH1nknrTyRfYgaB5mp8qrzncJk2Au8fYFwFNKRvyf2NKMs4DB4fF1o5rttSMm5jJ",
  "key37": "33Kk3jMoBWH9YSPF7htE8uHW2vuc87yCC27jPpzdM2D4XmCpAHNnFkcbHydsCCWz12xHkaTrXBwwgDhcCGmfUDRQ",
  "key38": "5Xt8EzGMmjcSuesnehuKin26AbTgQgUKBZkxxooiAnjUZqzNXzCBJxi8APCJG6T73kN7aJMfXr8ros2JREgoDvrg",
  "key39": "tRFa9NeiY8yTKUoagLz7aHCfjWfk7WvddGLjYYgHdBnnaBrvgsqnPeCQJ11EC4KN6esg26NnMe3oGHzGJgFsvrq",
  "key40": "5RaFakQZE7QUfyNE1nQAL8LspQnMj7Cr8JHudiLW6sPqWaBFRc9d28LobsYE7d4wxxdiqAhpoP8SjL8zcVLzi5LZ",
  "key41": "4Ni8vCmUibdPH3T5x9NLkZAqVnHKDcTu8Afbbe4vQPxW3RmqgPeHop4tfeKwMgQJwBwiT6WGvhh5uGF6uLfWV3Tu",
  "key42": "39WpJ5WMd7NaMdSbaqLmdYeEmvjFwFvrsZ62K2VUMh6Hd4yUzWnjkt6gT7mAuSqrjv9LjYXdvGgqHawDFmfeXUjD"
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
