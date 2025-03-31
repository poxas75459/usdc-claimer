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
    "5VR5hG4LzmbVkyUvBhjLB95WPiWRZ973JULeX2i6HovH7YvGC2bBJnCLLs5szhnP8LcxN6tQbR8wjKdU8rkPqW2d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pDLCfXjuQaijQ5Kp3ajqzGBfYMXhfYVPFASxymSeAzz92NfytiSYKUmD57FHLiE6As6PJX7517H7knkv1HkX4vQ",
  "key1": "3ffHf9b66UF4wpJ1NmwZ2UPu5y2rgk7J3bev1Di7SRRZ7AwL8HCWCAXphE2i3BKq9Htug4hr3Gjv9FQh1zEGCzYN",
  "key2": "2nBNXsqo21qyURwfXMHRuyS3FPWhohqvCcq7tLDufgtDDwaXaz5gXsjo4KvaMWqyxKr5mqvyABooGLXCECrnuUS4",
  "key3": "GMhFRspqk6hkGYySzx4tjMLJsiEHS4jjm8dzoiZvDQidjfnx4FoDpZdhj7y3CH9Uo7DYMfmVNKob17mBaQ6VE7G",
  "key4": "31rHhMS5MGbdmsnBZUD6iv1qVGM7zKddVLcRWfAKfMGRcshstvyWYeDvMCJHTLkgVW9yuAsWYpKMPUQ3UShiHGk8",
  "key5": "2Wg42RfLZ6b4tkysbRt1SSFrVreUBedTsCKckFjQ1Bfbfm1H1EsWbTX4bsGhotsHjqALW6YX2bQ5DPzndM3MY5Em",
  "key6": "5tj4m8kJq5JExPYbPZiPAiYHgaaCArmu1LFQwzQ6geu85CDBS8gTXvzLncjEYi7WezK3icb7JfMVYCczzA4k9uYH",
  "key7": "2VUuVpcJziaMvXHCp29nynvovczWjJ7K9MXAi5aHpYy7t6KnSmC51ymGosPNgQyXP426awwGPNZ62jmLYUeqKSWV",
  "key8": "BozfR5zogUdY9sncbpJJ4rNzmUUMPK4RJByyBp69o4h8XsWKpUd6GgCXFGirFJb7m6TaMvR2uNS1AoHRmNK35fd",
  "key9": "5NahwNtHuAR1sSpz7Lx18Xjz8P4ao4cgVsF1x1jFupeEumGCVsuNH76u9VDBUfyyGEGdiVemsrWzTKJvPP2DR7cn",
  "key10": "3utNen1svgxNnxsoxRAFzQkZmn6QNiDDVwD1jwAnFS9i76SpChn9Enwky6QipCjTmmhiL7saE7GSqFQeGUF5a7jq",
  "key11": "21r1BberbWit3SpJvkb4jGDUUX5qVCVJbZjWF4RYvCetEdVzs3mhbah62kdcDRdTsRLwNjmGAb7qpfZcUvDzFwSw",
  "key12": "4tHbv8Fisk5YMw887PfSecw7tcp93UmyMkkbDMTm61ZctLngRp2mDKiMRzcRzgvp2gLYGdpNVwTs5Br5eeMumnjZ",
  "key13": "3TSympVNf5VkYFQ26AqoYwm3M7AFfAFnN5TnHQH2q1FrGQntMhnmnobzG2YguiBHfAMfGfCDCMGv59rzJQosLqvT",
  "key14": "2g6G9oE6W4Y8Hp9v3epg7hbRpigdt4jiru2oFhj4chUfHH74o6UYRCqkxPKzoGoJnpBA8PfuNDuvbdFBUwT4r1Xk",
  "key15": "MscCZ4pTwmKDyduyZ4B2M6oXuYY8pYCBb9C9bSJNpkGguCoWSkb9719d8iqg2YLAxUWvo5LwysAsPEu49f682Ma",
  "key16": "2KDMtm6YoWjxpmg6JufP4ZFeM3FoJmeJxe3oXBSqvE9LJKHrTJhVfi9nChocPv5JR6wsG5TA9Lxm5pqFNRnPwdrX",
  "key17": "2e38ERvJScsJLnBAisTXyh62PTPHE7AhMpxEzPYMwctzQhU9nnKCG4Y7sVX7y8sofBmtXdFHb3SLxa1bfGLzLF8z",
  "key18": "2ubxmSc8iLS7tJpkewTH6LoHCunZaDuY87M7NF8UEweJ7xww4enXhNkKFocGm3CBmtqGB4CvNFVbN7EAK4Nmr6D8",
  "key19": "2RWSkYXBHNZerZUJCtKJrVKbwh8jyojrbzUKMkRdGatSWT8NYjb9SY9w42UifvR5KXh8D1DtaGb5G19FwLWNT9hj",
  "key20": "4wBHkQy5fnphNkkXq9dWRYC87Uof1tyLYoENJo3TLDpTxLsRJ7U8Exom7ULcQEgsRuWMV6iuHATZjpPBb33uRorQ",
  "key21": "62fPDwEa19NZuD71oLe2cs6NnM5F3Bvk2Wv74tt5rCnLYM4xxTB2tEFWZJ6VchthKpXvYiu1EBdwL79DVQ9K2hYa",
  "key22": "4q9Vts9wXC1mksGu3GLSuqejcE1fMDxaRGN5Fxdwxd8S7mNaf3XM74yu7ap3xwwUsMdeQEkDfXh1zXNzuDw1UppD",
  "key23": "S11qY8tswGBEtbAJHscd5CDYGxt6BCrELR7JLpZmJXmjre6oAcYXYh9zQVPcY3tv6VpNMNbsdbKWSgpvcED3uvt",
  "key24": "2zLb2GpQbXEh31Q1weLYqHodSD7aDZjMx5qBSX4fnsthvWhLFwSyjUPURgkNWG1KYaVLrkFLN3bnTyDiVBQmpUdQ",
  "key25": "2uPxUpH6b3VnVtCNurx3yFPXPJQky2pzQSBq3Fa2s54k9DGiEMQ6RjawzATgToJ7GZrmQjEVXadgXv9qpSNRn8wh",
  "key26": "4PatmBDPR4iuFrE5jC9GX9dVDNFLzt8jkDobCt1TqrcRMVW2qqLNBGvJjCVnfr5QnZJQwzWs5CUFz7ycLi5jB2SG",
  "key27": "5ZPuqb2eywZGGY68TT2oGsrXtxUpFPtqyGgzFmESYf85MUVZPxe8ciJZQmJPCKGnZZgxsRMrTGrjWee9PbU8uDMb",
  "key28": "3zrp6dMyuR8LWSPuZScXG1i8a7j42Xm7CgJXJ5Tvq2PtwcSMXMRuJuhUvAWbxHTe4VHnaRAyyk6qnEJ3Ty317cc1",
  "key29": "5jDzc9jRa1p62oQwiANFVX2qBndszQMrQhNWo98ySzR6jci8s4vAfeqPcLncesUYdvtpy1DPaWAuYcaqByjbTqY8",
  "key30": "2FU2QCJrbbeRmTC6D73ywtVceW1CMgh7kHZ7hm9c84c1U2NHwgU46wdifHznUsVxKttGy48EyhzwvNbjcy9rdCL6",
  "key31": "3UUFgMvwqe1BbzP7JWgPsBnVav9riChzQKV1udLmQ3fH5jHudvT9bhQu2eu4mo3tXYEDq7tKum5hcvoxteiMAbJG",
  "key32": "45sSFksLF4bb8Rm8wxWSPXgcH6tH6Zw2nCKikMNcobNLigNe6dTGHZJGjXxmDNcffXb8WX9jth6X47TSpjELxvRX",
  "key33": "4DCnq3TTu8YJukQfxgLEDcQT8rVQvBb667qYicbkdiZMcn6gvN1SKmFRjNodMa6B4tNwAkUye8i7hNMNd3y31pZA",
  "key34": "4qFbm6GdYEZjfqTqSvxpMhKvLiDYXUJEkS5K3snxQBV4P1xNK14QzNHLsKW3WR2hhNUBs1rUKkBugXEs2kR2vuvh",
  "key35": "2k5uP7YwadVYphAd8EiMZYQLkGqjYuwQL26QDnaxgpXcfFs7mL2nVuMGhhk4VtAXEv9qZyt9X76jpNrxy9LeLxKX",
  "key36": "2nF3EiEiFrtf2NgVnSWCTyJ6CwP1fz2wvrMazBgKgKhKA5tVA6YGufoYXucwK29ETz9U4u5AgjdvVA7AoTcqRWw5",
  "key37": "3RLeSGdS71nEj5eeQNmmbyWrT1JZY9TWc7z3ZeZpmZNscraw42sWf3GeLnSDBHdmxQiGcuHY9FoPfnzXVegah5ph",
  "key38": "4QjLQXRRiWTZHA857tgFse6BrwVnxV6B8qp85QopR9iTwN64397ziSNaVC4wVQC3rYrC8KWEfiyT9pxTFFJncxgF",
  "key39": "55bd7vdyGfxpMNpegL76oZZFsE9cmbraerXG4ZN9UHQNz9ajJKn8NtCktFmv4D4NMHeQXPQ6iDYVbeEAP1nL2czt"
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
