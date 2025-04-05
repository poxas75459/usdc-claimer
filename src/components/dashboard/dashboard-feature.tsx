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
    "3wbdHAdhuZj7EXTjJj2WRpMg4cdNE5trC4E2Ep3JQ28C8LJCU7ynUmVLSVacvdPXwYgJdciLxXZGw2JvM8gtK8bD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WuZcNeB7GgueJKCJH4tLoCEPMUjyTANBzCv3nZPZ3GTk6hetQePKBswRxqERZFsQA5PqnrY3mSEWXqeSfXkhDsc",
  "key1": "5AapVujG6aPgxmSvKHguWZcwehjCEiw9pGvjTArYJCtZbKoGTUnaJ8y7SBNZPwHPuSNdwX1bfojFh8FjHeYsDPBr",
  "key2": "3SrGx8qta5jdt11nxDH4LEkZWeJjCX3po8Tvc4rP18WJGrcsht9GqMcM8guiqPTGdvDrpcygQ93hCm1jwe9vXqAa",
  "key3": "5dUBaExnmeCaiThWnJ1KHo9vwvvuL1MCBRjoVaQh1nH8ZdG87mk2227feZvCskz38gppZe16ycNhoqmkGTcsYCuJ",
  "key4": "4is1pGonfLH3UisvapGwYv4YBALAys6GVwAxpvEA46bRfBbAvu8hoMTmbLxkmsQSuMgmJvnufDWk8H5kr1LRbwFN",
  "key5": "39Yjy21HmKuiJiWVttQsASZxmPx1o7EoiXyL32QEFvtsWBUgspL9ja9Fy2KxRJ8sEGxmKRwNWPrC26Cv7i1ELkLf",
  "key6": "fxtfE9RiNmgbc2gRMuWAo2qwRCinM53CmPWsS4CKCyYB4ApY1ruocQFYCDwYoFqRLTJeMJLfsbrY2sXdHRNvpX1",
  "key7": "3orfTbbyd8EDVSzHS13eFLEDbYn2xawv8YTd4h3Tj8Br8fYuPasuiF5AjJR5un7UP8qj6Ua5ZQqKJzqxYpTRv64g",
  "key8": "5zMHCAXvCTe1KBQ3JwDQvKpkxUKPPvtytEmePa4hxc29cYUJEgE7vyeW4FZDMqTxWdLXhuMqjCBqzCuHTYfrRBte",
  "key9": "2UMvAC8xjQwKgdABVsqGGeqt51EtQx19Cq92i7epv6jc1a5WjyJjd7aRce8yLQhWWve6vTKaofLYcEa22fkpr6KV",
  "key10": "2yWqNjzNGwZqafaW1BSCMRq6jHHbSvLSKHVf2AgS6SuXBJZf2yjn1URtoigR3vyAPL7c8iz9MEMz5YJxWv2X2C2k",
  "key11": "48jPKYK62scm8b4PNZVWsZjsk9Ydiz1ZrE5bkGBup5FreyLEuLLtqhbSBScdFwMkKF1d6a3DB4S4sZWciMSw8STC",
  "key12": "h5VogR58bufWEYdHHQyDZ4SxXkKnTmfc2werXXgtKFcs1XYGwnwu7JzQeE8zExmn1q2RSve46GNoC1FmoCCpzUe",
  "key13": "5LYd2iwcf4iNsXiPEhf6EddfMjokad74EB3xfJsiQoqpWqwAAYyZmgCKBK96oVTvV8xw3NA1z6ggwD4MCJmCFmHV",
  "key14": "5dE7VTKo5q78HqsFN6oA9nhwbNv45rtRcp6j1R1DgoVpGpJTwk59Y7Rin2qz3ecHJcz5Y4kvZzRgLLFjd3SGNEvS",
  "key15": "5q6F1fuuyenhgiqAbwEQne3xAoLw62VdPGkUPj3ACPEKXHzL8sBXTDNgRr7S2N9JRas4wE12fTw7yind8XBQXUaM",
  "key16": "iQut9V7g7bkTc4brFoZAwBVfijHLp2r81tnZZb2Pa1M3jXXSgPTfLba2QxwiMErPnpVHdsPGc4wZ9LefEc4vfxE",
  "key17": "2XwZzhhYsH2VXY3MXsMmR5aVYD6FuAJbEmjVXN2nbkpABmNxNkxW4gyk6XNPRji8QVuS1QADVDaQ8c8RCX5uJ2sV",
  "key18": "bSiexmsccvqqPCKpFM7yJvJthSNcVdsvPic21avBQ1wmi5dovbnuSVPhrC1S36hUj1XcbAn3UdarmooZvd6zdv1",
  "key19": "5ZJ1k7KuvD4bh6s7peEranVCYE2ZmPiUY3rrQZkeDFTFfXhKFWqs9hJnxFqy2ev9BPwNt3iteGmtNeQkgchKL29p",
  "key20": "3u4QhV9KHNhrG8189jCspZqjHoD2zySfQQ8Bz3uD6TQpvkD3PTXapJ6tT7tYLrT7sAHJFAiYQFtTLcmhoZqGRbQP",
  "key21": "L8TCdUGeg4VBzmZ6FLKCKwSW7omvrm6GLyLvs1s35ZWqz6qAZFBNuRNNmwdXLmWxtuvpTywJ3AgFRBrw6NrNLX9",
  "key22": "3y5PBKSeH5pNggrv1xraNppkoL9cWScJxGdXnidKr1CsVjFwEnnuwcnPW3J13fYFCqWciadBhB8z6ojWANfxf8US",
  "key23": "GtfL6sspuQ2nqN5ZY6zJ3eZJHNkuUPKszeG5oniBcqcAtESimr1w4y7D5D6xZfXajWsNxM9QiyYccmQ25Jw9Ms4",
  "key24": "25KihUW2MPbR1MghA9AoWHrVR9JVihS5WmayVKMhsewjzbwp7HdEr69N4XBpcW5hmXEtDuGxm6vt21WpCZGq6d6N",
  "key25": "5TQhjEDeKoeUceiLY3vg98ivFf5NQP7qWsfYdZCAaRQB6q6tq8VqnstgovMyTDQEXg7yT6NZQts8in5Fn8t927ZD",
  "key26": "4fuGWkTp8wBxwqEvi9n4jbXPqphbFzxKCjzXpbRXMMrWiYkGUvD44LQiDawNb3ayT1DiSPRBXDU1URAE1E75NsSq",
  "key27": "22PajWPvd1FRquKGxbVPhjqeT6nddRnngyYwDmG76fvLVjxBM6MnV9WHJ5Z6coWKnSZLCb8L1ExZ9sZP4v6vCyoB",
  "key28": "sEqkhkiQzhVAQMUk88KLGKK7qJZR8yqTcZGrrtjcc2JSnXQZvNQAqBVSUxAw8QBrXNA6hqD3xwCLDSwyyU3efXG",
  "key29": "58BN2SVo3DitWGwSWYTH18aXBiZj9TUaE3KFMJH7U6wQXCgerGRAt75zDTrzXV1HRDs4L7EHfQYzfhRm67HwWScX",
  "key30": "3Pi1rph3xKSfR8pngy1LTg8q4H8bNz7noR4pr1BZmZe5ZQTUDRZ6WXF4ZiKq4kHCsy6uQQTA6bMxr5CpetuhaqA9",
  "key31": "55XVfh5Qx9NGj4msdapEFL5w9apdd5sXffwn8SHAA2syphhExaAam8SFk9n4KXtbzk2ntJxNL46ymWxg5ounHn6m",
  "key32": "2RKQQqWNbeiFP6avttNZcA9v6Nf6c9Btwdm1BeKRVQEnoYypLaFVHYe1awaiwey6tSVj1ybDoQbLCe9M448YuxqF",
  "key33": "2Pxw77rDZ11yGDeY9fFU5jqKR2aua5adWucGQAYnExo6sV7Bp7ZBJdbLkeMeTEqrcdowyeCMDphh3Zwm68YEEwTb"
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
