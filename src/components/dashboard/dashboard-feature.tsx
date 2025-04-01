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
    "3H55unpCB7az6ZjjryFB3reduDUsGN9pftqgPfU3yDN7VrGQCuzCTatYjjdvMMNpa6vQH53iBzdXyN3SKzFy98BN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49pjBbVDcNjq8KtPjiuUmRKAmo47i4ceaFUrGbMF3k9AvWt8Vd4SrtYLuBnV58SKCtU4R8MaHL7wFFPquTV9s7Q4",
  "key1": "66t5zuLjpwd7XJ6XBPYEGihfcyfSqDU9eghZpoHjhueSce1yFWUGwVxDEvA6fpzwUXWWHxvbegiE57sMR7hPwMpu",
  "key2": "56XxFsNe7WWzPUiSYGtuZric3yrM8doUiFWpr8F7R6PrRnMJ7tdzVXaPktXMJXWt7F6CfDdcmUfzps9hGdohTpmD",
  "key3": "2Nbb2UHayRJkQqPQ5hATXTRXuHaZ8UgNRLYWZYJphT2eJJQoz8NnrwX7X9PrUAnrKwjmdqmSEWP54V4vdc6Dqc9P",
  "key4": "3csYMtPu7VDXXAaRiaQfa9e3gmwwn5xe6LTzxH4PMMTLZAhjiX8r82df6z54nYzp5bQGRSj46ji38AaL2D7djKy8",
  "key5": "63hGFfqA23d5U9PTe7BdzXteTrpzmgAaLjAYVwxQT5Wqpp2ukyAw98WBPye5CvFTreGPB7eF3c6mCNgENRELRC2e",
  "key6": "34v7fayBWckN3cmmeu9t618ujEipZ4BjoaGvjzCppJTKavX59UiMiDeazqe4xmCxDwhkSXhzGSsYS7FHce5RRzyr",
  "key7": "5wTFeGsEVUurxbpjdnfaBAz5K1XTsdps7w7EbBAJ9nJCcpzsMxvpcLZQszaV8gxsGiqgsPaCszMLQpWNP5q4RRs",
  "key8": "3wEiDcA5jQKT9KVBR79eLj36mghBuzPr61G6uRaN5VGJZoyLapkKHfyX7YCrF7A95HVGevpfpsamjccCvPMonvAW",
  "key9": "454KditpcoT1B3NPuYxjopckm8GnkjPotzCH5SRkvZZdJDPRsCjkdwPqb4PM3LX8TLaR4ciYnECRSNGP1gbXQ5wn",
  "key10": "5c5qGT7jMLkJKBXLUwMNMG7dYVyh4dEEzKJ7iMQUW32bipPZt61RPXthQpQeNYguKu3xwdcR8v9FHwtyZMXsC6ye",
  "key11": "W1o3NU1V26rQgUBknaFeGgQzF8LdYfM8x2KXPSwDw5Y3RvfT2fCaLrzUiGGAzc2fH1peXBqLMiMD9igfNThusdT",
  "key12": "5qPsdL7mTwRd9VzjoYmAjVVAdWaL9nqTa4Mmkt6YPbvjcyZkpuSoctYxbmrcKyKGbAZrAFLpgJw6rpbxW8tBxF3d",
  "key13": "3xQ9KCTBLS1onToWxQmMtaPeiZpCXwfz2Yjcq84bg2cesrvbjg64SFeVJu2CkBQHbLWfwF5Vc4CNbCpsDMuUphMq",
  "key14": "4GQpxzM1ZYnX5HPD2dS7TT2xY1Gtq2DbQ8tBJrGVjEjLEVdJhXzrHRDhRDx3iFrpsgCFqsWTbNU4XjqmX2BKHc7M",
  "key15": "3LFyV8REHagmpWHb888DYDaE6hEaJMnFDcD2a3emxNjQzdUAVdkQf7rDojSerGSR5AZVbtr49ZWnMsFNCdbdLhjU",
  "key16": "CMeC9uA3MfnUzau1sziaQojknb7HJfD6iubCJVt9SJrXGyQh2mAY8isP91ajyHF4vWQ7bSDAU38Hwbo15grKAfj",
  "key17": "4ZZD1PDQgjPAH6cKYowQ9TrkyU32RDC8KWcihQuZ1ynN7YaS2gjLf8DyJmqndothZZv2DXE33hL5hfT4LLwzcDPx",
  "key18": "3ekonxFFs6f6fAJQ2bPfxPgngb1FuKFvC7FyFu8xqUtiSzXai1NiQYx6r2zWBFuZk1KRWRzuMLZ9gZ38eLFoJAbR",
  "key19": "BwBqBchMMtVD5uhR9atHHDCfEp4fhq9TSkdqi1tvk2HPpvQiMGMiAGAuau9qgjZuCr9bZJSDjo6YcBLJ1ZTNkbZ",
  "key20": "28roVMA1eWE77hqSmjc8e8bV5qt2W2WuWXWAkWb1KkVgcDaHL4rAYH3r6KXXwm5vmpBkb6e7fmjgvgWWkwcJ3PeA",
  "key21": "2B7tYYy7XRuKnTSFkVQzHh3EWLhgXKBho2YD8EfHodWR3P3hrqpyQDVmCvR5A3e2VhcFNtriKqnsnQk3EYjjoVBt",
  "key22": "5ABAUrtsssnauS1NyiyspeL328rrraRYehgtKekdLATFHRMt5bqSbqajmianMcw2jyEXaBL2SMcCW98SYHuiCdGQ",
  "key23": "DM4VFPyap4rb3SHscEsvZ5Jh7tnVnweo6JD23M9Qnf5Qx6pofeRYWpwF8jHE1h7SSghEXK21vRWYBJPN75rX3mH",
  "key24": "NmgxS4uttW9HirWvAM956xUsFvAfCrnNfFYV25QxjMBcgzVdZGQeioupZES8qybb5Y2ijGaWe9qWjrjvdtEmXTT",
  "key25": "3BWtxudUAK3XXUcxmeutNTFA7TMD59P2ecQWky1PeN8uAGyXx315vvYbcGFnnzD45hniW3ztzHXEoNP96VTjxv2q",
  "key26": "26EJ8k3ejDPvh548RX4u9o5gaWKTuytkEKQBUEEpbc6ew6TLCTJkUH2KXRTVUypbzSmTZjcd5svsbqnUG7xv5CNR",
  "key27": "5Agc1ZJ2LYLBmcqUiKyH1XX3rZeEC6AH8rFHA74UPRAZakf174Bksp34p3YzzceSUh6krW7ad1cbJLYLZeX2Gb4M",
  "key28": "3hPYBVqSaYEufNrhv6zqXGz4vAsecVM5RLV77Sca4MiJ3VvfnNWfLZivkyfmghbupREJsGbGJYhn2VknXsPNkLf6",
  "key29": "5sAtMGyjSUs3vHUUudZexx6C3HMQCeFB7NPAtYFaMRGcSKzZzXFfxKFD9DFFGQzwj2BhGSq1h7YdG1CaDPkQZm2X",
  "key30": "5kfzubH8c2Me7EfAivuPEh9LFwhb4uSoqaYq9mDh6Zzho37vzBZfX8QvxM8FPsPvYjDpsA4wkgsqQADq4sBVFPt2",
  "key31": "2bfbUForBdQYQ8dMZCX9TXM7MJ2jddZtEoNDYSkRFAD4xhs2aUYH8UuyVJweNKVU4V4JEtTWcpVtnv2R12P1GFaP",
  "key32": "4xBhyCfUKV2qLmQny4hbYXEWLn9DVzJo4eXJN7BALRwhszHReRg3JJ3g3GLNVL6YqTYseUXXRw5fjT3Z85pUiTRT",
  "key33": "UKvPwEDfd1BsvzYxv1msQf8Pj6NFidCPcrcN8gLq6Tocp8p3peGeyoij6R1RUtmpxupkycZaVu1jZVmsETAVLrt",
  "key34": "cWjbNp51CersQWsD3uhLeYDs2wdbn4zUBTcJy2aymzf825jWa8wfNhX7Ud2ASVmEijSY8yKESCweQxMir6LJ9jS",
  "key35": "2had9kde2ShWEbRJ1C4S2P7DcgjjTFPp3UbR6zpNwLhqD9riXTwbEhyCV2qLaKNHQZLYSseKDJYJF9eGtD57NsHK",
  "key36": "37QVHdVsFtGLcPebmk8MVGNryAFbzFz78jqPPVcXL5uLGkHSXjXX4Pdj8H86XeUSgCaDuXkfKMQAecNeV6Rah2EN",
  "key37": "3C1BVbPCGsUYNDsRCGXoK1cR6mPcLGkeZx4TYXRhikc6VG33pVGBnwR797cgcaHqebpqXWrpjYEC4wQyBVHKBig3"
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
