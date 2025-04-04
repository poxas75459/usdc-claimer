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
    "5DSUKHbdam5WJjKFttvLH9zoKApHFyTv9zuzvBUw6xpvsog7KKnLNHz6zrAP5ETAQeMn1kf34NidTEiQCZUJRYxS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MNAwvsuL3C3VLSZoNb2SGxGstVv4T661iebH9oPnN7Ybthw7G7TUrmpr1x7SHzAGdDgNiGbxCmEvQncYtuytHZ7",
  "key1": "foWnovNQqagzuHBqiexBfEBCu9zoCqxb6GbtR64ZugazEmyffo36meAApoWs2mKjLtJguus4652UaRPahs7dL9b",
  "key2": "2W1nsCzYJz5Mi1jek7cUKd52PXRNh4HaYvmQ5ixmjiabrig5iCYfU7wXAnaUpbM9aJ3ngR1GKi9SRARrsUHThjWU",
  "key3": "5MyjLha4RuLGfi1pVx1hRRWCSuFfStNoGpuqW5JjmBZzUEnSLLEZAkjPuTywVLd747fxcgjxmXLJhvJVigt2FRjY",
  "key4": "Xnu2X5tzo9CXWcZkVJVrGc8LcEpsALmLLYpDkpVVN8a7e87KvCe5vgxrrw2HJSEQ8G53rHJURk2jikoZrbhRnmf",
  "key5": "615Kb6jD2KbRE7dkG9UwMAXDU9SrMB9SunmzRjUBcfAPHQSjP6W9miKtwCXkcMT6WPMFogQw2axBfGV68HYH1CeM",
  "key6": "4cotbFLsqvR4TrePK1KtDQuBfPzvKTW3uer3bh4L7AdxKSy6oyYJf6gzAztcyXZyLhk2dtoE2RvfZWRgZoQ5cDY6",
  "key7": "5FkW7rFa8cWxJkabTnETvWaraeixkTE2F96YDSaUwBWQYrmCoMGjkdxpmGxCQNLWJ81sCDrBc1gLixW8YV9Xrohe",
  "key8": "2YEHp9NNVCDF49FmKkHzLanDXky6RcAdhqZD2J662b5M7eELkGjPQUKN5kBqq8QVLgiYpNtr9q2F5yjCvob6o1mu",
  "key9": "22LynEfa9gFf6sABgUkRLFY7v7bh4wCSYYfCiBemWNe2q63FJUDY21JVXtGvUCdN79h9bDgjnHnMHmvPV6GVyDVc",
  "key10": "2nPS3pyMtn3p4L6S9YKL9CEHTrJhLh2howgHFkDgbao1FzX4mzfWLdLq4H7eh6ePGiwGb4ajFN11gJHd7nnmjU6D",
  "key11": "zR1dGNPicqbfS5njriJdaE2spvzai7kggBkMRxeCB6HZj9mCt9aJaNrRaybqRqTdc9zZjR6zRdYTHAKdmwq9Ucw",
  "key12": "3JgeUanbjPTDPo9h1tzKhw3PAcG3QrEe6bUD8dNfjS3y4s4ZGDUuDXZAwfpfDXtSwHEnXFkLWrrM6ZTdHdq7n9x",
  "key13": "3bFjgRcTjpzTtTzpVMVAVa3DS2Mq3tEWStnMvG3Wd4V6267HyGWL38zmqGH9HxF5YfFBergqgqELw3DjTjDJGnMx",
  "key14": "5q4sPCccCohMmW9eVm3PysRW7FNiCD9SR3T6NGqoUdZNzZExH6USMUiHZhEXociQo7qkGjmAqSiW3C7QRenfWCsS",
  "key15": "2fECpRXheyvP4c8vqiNVgduRrm7sXrMP4ppyVvxh7G75X3W3r2tKXX4hco4Mz6AosgUu1vt2E74mREoe4VnvRTRy",
  "key16": "4dnortZvMRmsAxRriHw9KpTb7upxAnTs1VKz5QYJAguqmdG4xQPXVmE1YwmakCt9UXYaS1cbX1HKXAGnC4DjG2n2",
  "key17": "3q6twr2YVGB9Co9enNNL39AWY4K9QP7oWatGqjKUWwvv2SiFoYAwLhEuqANP9gpnH9MtiA3kL1gJD58dwFgAZUrn",
  "key18": "FYd2weoXQazfqGhp8sMtHgewCvTvt4VdrkoGbUKGbXmrptx2c1oCX9BsSETeFSEGDDpMX7ChSCF3SJrnQZjc57m",
  "key19": "fwh8MzWqQyANxfZyJHqRgA9MBvWHkuTTBamN2mkLPMMJrix2DSouASmbbr7SP3AnFcFfe6vePNgHRNUwXRWmkYQ",
  "key20": "3mU2xtUqFofNQJVr4aTP6pBmcJcfcNvGVoNmUAAw1rVcz5aVkPvgeJyLStfZevZzR1u4KgN2KJfr85WBze5ja4kV",
  "key21": "5ivK5j8xdPXcQPbT5jQh6GV2bFWMiuUy9rPPLhzVNW8RdYTMHuaSR1zjVLXjA6Zf6e28dpv6D8BW79oQjMSgTc18",
  "key22": "RUEGJHdB6Zuu8HmYvcg3gohxuX9XXokQGfdXThWAhb9v3YAx1oZmjePWuh85LoNkrVKneZSm2oyNmfC4hffbCMZ",
  "key23": "3mF6v9CcXqvbN87E5Sf8edkF2sFFCg96H2rQ2jsVMaQWeju3YFwAirxsAJikNUGjdhF37jnBVahuTucR7E7JM5bi",
  "key24": "JZh7qSVNQHEVzcB25NFjgNYvpUuZuHyrjqowLwmNLVP3BzdUa86ZZxbSD2Now4vhqF5wBF3wqgpeWoRBKjvy6d5",
  "key25": "4KiiDD7kQayEadLdS7KUd9fFvjhiy7ogYgjSqst8AzpMX71h2GyZzYQUiJzSdwDBrZcSmy1q671z7Nx1RMBbFH26",
  "key26": "2wZZjgX4nwppcKQ67ngiY56ActVgNnfemuwu2P7f8urT9FUqz9Zdqwy8sHdE5mWQ8SozdUXYSC6cZ8un4bSxd9EF",
  "key27": "5fbKyYMPiyoUUmGbEi181nKpCQx8t7i8JHPH2Myi7PHQ3cPG7FPS4fLLV7KMV1jeQuKuZcenEHMWR1Wb2qTqy4gT",
  "key28": "F3B2QuvNMZHFMorzS3yNMrXs6PEm2yVm2FXYYA6mfpVUuo5R1doKijMdmT1EtsFPcVnzobXc3pmPfTyDPLotGV7",
  "key29": "2L1JYmaZJfeyM1PLEEeJ2cEPC8WmJrgzcGvmiwHWUa6WQM52hZPQ7tamLK6MgthVQjSSr9YZMLrK18GwoQbDCQ8t",
  "key30": "Py1MH9PGeEHmMgBxZqA6TAEvNr3QPZf1verL379q9Di7XmS2KKteF9ygXen2cqbffvm5anY6c86wMgB77qY5au8",
  "key31": "5wWxSKcBJvXeS7xf8PDZ8hMczQBPEmCMjrWAu2aUakbCKJZJUSWF1DVhVP5rCxCBjCZWYYwogj7e2YTCR5mbaw2y",
  "key32": "3ZSHEgupF8jmAinZtAAvq8rkd6KgpzcQ2TavnPLQhYJxPdCgBMootYnwi6E1AehWHGmVDbTpaPXkypn8iooaWMBA",
  "key33": "4hwxA4neuT3WEHeJLQmpeCNjaYaxfm5tABsVH3prRfNyXdNKpnQ7CYvQzhuRntE5pmfBHmwSXnWxvEuS2tmCSU8A",
  "key34": "4nXbPv1iWikgim3Uf43Rdk3MGLEJNPPAkJ27RedkQNuppornLUNfwdyApT8RLHnKQXB6mRfwMGuMP1E9fRBcTAsc"
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
