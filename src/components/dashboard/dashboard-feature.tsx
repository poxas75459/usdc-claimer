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
    "5HBdBSZu7TYAB35dF4hEEXGAPhxFCCY97kzz1s8QiErsNjxerdGwRtnLCork2JNpy85yRdyCMfpGB8pKV9kVMb9c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JEgy1xGWutwJny1okbrPqLHvL4dH9pn9RCvkgqZJWKy3i5NTbMhtJUgjiFDQNdE2WHRpFwQQ2dWRxTsSZreXxFG",
  "key1": "4RYXSmVpTVgfjW13rtpb4ZNDQU42MggQDuwTbNFR6UB94LdNtgVYbahTyrz3WfDiv5A9moUDAh9VjhXJCGEd5sJb",
  "key2": "34ycCwejnVVjdTESCoc12rquM7uD2JPPevJRpTakxQSJ3dfF69CG8xBknrN4W3JpWbBP7PjooBCrWP4k1BoVDdnx",
  "key3": "4LaA8xjuVFmEmNc9Lr2FnWc3Pb7ZbY2rsJhTHWHPhEC6PLSrfsFp1sbVw1X3XdFsN65i8SFv9y3MCoAxuu2DyVam",
  "key4": "5LSd1z7P35zfdSjqquQPA1nJB7AciA4YZqnuoVnnC2szWXBvNJ4gBBwBZVmXoD62eECVHNZ2o8v9Q3Z5C1QBYh6U",
  "key5": "2k8uZxVkYnwy9vaFNtGJMwzeJLEY6XSYuzfMstd6w1JKZaEcJzcguF1oM42rbv1Vv3HGHNUyU5yJTUi1rWFEHv38",
  "key6": "4iXUY8XWw2cQ353TQkzbKtJKNVPeeheTFB5x9RbzjShxKNtXqqNJi1S3XWxDRJpsxXnrVxRvyNi8HyKXCUAtKUtD",
  "key7": "4f4gAZQr3qnzEZcFgwboLUvn9GXTmVYW3THZ3i5WabfyY5FiByJ8F4y2Af8cekXsLbTaAGNsKm9hYVg9oQNzs7xj",
  "key8": "3SXcUaBZrCecEMJ6ELtszMkkkC8ZMwvaGQk8igQt7jVidTLY3LLJ9z4bFNKGE1tJDTkvijtSwC2Q1jWyw8txxiqi",
  "key9": "5DeSi5sVnLiTqbd2Khcmoehp4eR9Ak5yeGBum26Jxnc8GJvhbJbj75aS7fUCTh1NFDhWxMFZE9RJZYsKAU32EKDs",
  "key10": "2NSCftbSR1U7hauQx3zYP2eTXHS1TqRUdBAoWESUxouAsFWT1SnWR6zsJuGBHYEmHiFPu11TAnbjhx5Q12dV8G69",
  "key11": "3cH1zLLcAwVRMV4aAbySwtBDnNR9SuSGgjgRqwb9QuCByfxxi4YZkTt6ihNFiEjYho9mfW9XBvux4v88HvG2Virb",
  "key12": "35kmzU1heiQQQCfADkE84qq8oVppKRMEcqp8KyrWAasvuRRrP3yvkLChVY1ugbx6u7twEiSRN4EwqAwyUX8m5i2h",
  "key13": "2Tg7d2zo1MnSJ3PP8eowBPGjvbtGdaHZ6tk45UjV8Cjrj3W2MKeBbW6CB9iLDudLsBHgbkKm1ktYdCs5PyNREsWR",
  "key14": "531pRQK3PTmeckUxBA6uepws5rKbVn5Q3862yh8KTXaCFK5JKGcnJJ9YyTtqPDaAA96bwFutKGYAx4p1f2V7XyrK",
  "key15": "4haaqJ8jNGcNG7LTrbiEwnm4R9EiWmez6x8tTmf3ajh9FyNFN394L9mE8fKL8rHAzZw3agcf2iwSWZnTes3kpLYT",
  "key16": "42j4mgkJ7vvPBCkQdHnnxDYDZpWN16qjGzc5Qh7yapXP8kjm5FCnY7M4xFoZU41cjTPaQar43a5o1eNAuezcbtTx",
  "key17": "4Lk3qKEJyAxWUxDad9mTDZAC7mE8e6rUXdsfUrcTNcMTMUGPGzXpzJQeB4cpHTuiBEPHmjL1hjKex1iB4ipn3Wwg",
  "key18": "54nvM2BbJn66397wta5tayq4B1hy1A5LMU6nZDfvNsSFczjR79YRvA66ta3Xw2vrvkwvGtBHES6bX8c7o6tUaFNf",
  "key19": "2mSeYn3Tvx3eGGwuw64srJLy55UEs7qxvpnhwQeBJTRvwpDuz514bvZGB96w7Paujb512wjvvmF5u1LCLHjmgn3a",
  "key20": "28UKk5d3bTSx4GFDsiiyiAtCoPNZoWvpRzpQKL4WwjqRMfNmSGN9o5wCwH855o7Nb3gLACuG3F4ZHBzSDw9VJoAn",
  "key21": "3P6tverSuWFzVbjm9qxrCxxKfAnPEYAkTuWKAsrixx5MStx6jDHgAwCjU1d77rh1N8mi3SSX34c4GwVAVU7uuTg2",
  "key22": "5U8PWU5TPgXWWb4GfEh2THUJ6WjwQ9XtTHSkBiAyd6tHjZbsyUojpP9uk6T25rHKXhFaVLoCBDZstBm3fi5oaDFH",
  "key23": "HtQx12drZdsKSXB7UK2c8YN6sT1t1Mfcv11BHngGrhHVJCRhmy983SpRpVCugTcxY9PipKdSrngPVphDcpniRxe",
  "key24": "2oi2W1dDayhf4SGZs6hhx2LyYoxmkyLgfJjTk94dyVjxXUN9dqALjLkKk5sLH8DMgiRoL92tGGM1nAjRQp71fXeQ",
  "key25": "4eupdbMCcRyuga15dGJgWRsrjgwtkcLQ8VKZPSVwM1YEzYqq3Dr3VP6zeYcXJ4dFgNfdZcKpEo31xLkXK96v9WXr",
  "key26": "4zg4g3RkUxh5PTRXjjUof4h7Rm6hyxLxBCQ39tPhde9jbHEeec5EC4abzvYdtaevf2sj7BNJjmqjWXFEyuqBuZAP",
  "key27": "qAQ429bQzoRB1X97ZUTunSjjcCTgwq4ZhRSr3yLA7knetfT9k4Wxi9Tm6v6SrPGu2sL49Zo1BGi9bBwXp6BQZcR",
  "key28": "25AbTSiKus7vvDsGDfnjYRfwMWaJpmKgzoZyGPCV5K5fGu4yMxbcssjpTQWMAF4KbbcCxvV3BAzgpPu7c5vymirL",
  "key29": "2DTyzq5yNWEikh3ngbvg1ssdPrBE32SkPfLM4FHUUgPPfW9WFdG3tkNNLvh6RVTqzZwMYhEjiZi3Be8gFkgqW2ck",
  "key30": "EdHPVSoAhE3ibJDEbr1voCHdrQEjGg8bcvoxXFSjdiKuG1BPnZMpSwQJNVzAeLyQ8NW5co5vYt2XHRoWr7kRapg",
  "key31": "4TDGefU364oR8i7LvdXaRywejxrtE5CxuHuuaEXSiPcsKKbGXypquC8qAg53nn64132FYN5hobou5L2YqDM7LXMF",
  "key32": "exnPF2FC52VLJpg69m5xjjpb22Akk1A2PtPKih67GBPAyf6bHtj243vTq516UmhutEsg5yFn9XqsQbVNStmDr6J",
  "key33": "58FohGZ8ZGeebxgnfwYfu8savwiz6zXPYX3e24xEw5d548dz7u8SWSHfSopxhLpfjSaqJb52GvVLJUFzPmKhxGNh",
  "key34": "q71voudtpuCKQZq5RozVEk72GgzkKXik6TutTHCtwAqxagin4LdKuPkYcGh17tsR2o1d9sHUz7wYUP1hfiAerKe",
  "key35": "5Rm9EBHndQ93dDbDf5BnV1y9qtxUHVay3YtiQYGuyUHaSrpm5geH9hGGKqSDB7mWM2oxKxdCofNYLjawwjbEobab",
  "key36": "4qhNCqc4X6REYkkoripfMwudj678wPseJEo3G6PXvZSmTsNJWwMxGCwwAW5PWAFKwNP82NaxjqwJxhB2EtPxwYQY",
  "key37": "5Qn22sThFaCXy3rPPFPavCUQm56qHYYLKeEaFmu7Y8sRukxfQkC6CXjz69DNEGpzwDyuF16LiHcPPbSJzLMkVacW"
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
