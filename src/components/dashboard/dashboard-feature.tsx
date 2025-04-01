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
    "4KZ3nvxQtupGg1mRqAu4EBYjwvYbLnXyeCk4WEi55HeAiGjfsXQ11nBfXNcuG16dhtivdBTLf5JFpbpyM5TrTmk4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kBLxvz87U7J4q6cL2rWKpD66QdtYYM5FhAeMiKD3J3Lx8xLh1jbCB2K7jWbS66T6JDEnbzaLQ4keQugkpeVzRdZ",
  "key1": "zQc5AEFXMMTSHL61jN4Nykz5azjeN84ibrMxtSHuy9fXjUDdvm94GYg1hJpRTmuYuLKQ3vmHDvR3dSnd4rKpnyX",
  "key2": "4BuGeF1t6TL6CX9ZmEVLT6Y4FhTazNwBxH9wgn9MKcQDPgP4jrRCmi4hohKfmG1KYCtdFGSEzEZneVTfKNz8gXE3",
  "key3": "4JnmLS3wpgqcd1x5sz7G3EHzh3B8oeCxcyNKS6gCSQuTdwbnDGNCMTBvsARNRTAUkSD8UXtNmEML44wWHr6dwMdD",
  "key4": "5Gz9zXe6ieCVzkfmH5YbBFBi5m58Ab7rZ7hd4cz8YfPiJayKd9gotKVG3CptUGpFrXE7VotARAEUdzHjNPTSbAq1",
  "key5": "PKSzA1oifE2sSqpMDYEoAYCrzoEmSv73PR3iqqYst5pcQYLxFBKV4wdE6ft3VESmSrE59bvBReesNh7bj4pSQvX",
  "key6": "hkTVLz6MEUCpXrTkSy5vVohSpTbXWPso2ujUNkywraAVkck44GJvia7kLUPHWF2jhLM6FXUQwQiX8ULUEg1TMM7",
  "key7": "2aiz9zVRbTNLj47sukkXqgBy2NtDjwDZLimQdBWsMSwBRXfgJCRJHe8D3r9MpCPopCXVXsXVy9SRTz8wWoCCZxAf",
  "key8": "4nCYnzqWLNfQe7KjZMs8JdHSMfmpS2keJvhj8sF5vyoakVcLrUx2jgmqhDLAycMbhCUD1BqFwxQPDX7ec9zYHpn9",
  "key9": "3UAgHd9riMANXkgfZmigyA892283zNDJBzDKo8EBtgsBxhBb2VULf2Kx4qSfRCyNvCc93YxAsnxAVwUWjLqt5xja",
  "key10": "uQBUZycGdvAPVoga2H8brtsa5MQYv9YeCUvePcPTAiQ8UDybFnnr4y3iAWFkArWyCfHDaVixqZQDLSdTrFM3hQu",
  "key11": "THZ6AXPmfE9Pgj5Qw4B4u1MddsVWVLyqs7ZGajP3GpgbKdxg911gpwbNY2iDWG9Tfc3DMzozXUgzRfAEqRxy2N2",
  "key12": "5mqmEMhz6KGoEpE4dNQ7cGqTvR7QRLroHhdyn5XTSAPqX7yViCnzLRer6DDzJFyY6KyJrnyQ3HcUDWUFFCDdx2PU",
  "key13": "jbiwG4CEvLEqFRdH6ms6SzYigkphVNCBZGZAjq5P4mMJZzySKw74uCxSm1FDv6pk1i71diUVNJtr5oGDB1A5HeR",
  "key14": "2PYEUGmzUeeg15UEmU4VqLeGueA7BuoeDqntdAA3oH5LqiQZtuPumYNhXdBYVuAmY7Ft5aFV68nx6rNc5pKDCTwt",
  "key15": "2BkzGPrvhfWtaFd5iPqjg8hGmjCGHVbXHUMXs5Q8ML68ihMUEQs4mijEcdZJzYmeg2FRjmfJLVLgxeZTJwG6xxWd",
  "key16": "3G4vBnMKwHjJkLY1chjPqsk2BZgBf6gjisQXxz7tu21i9EYjJ6x2eK3NyWZToScuDTZrdgAbYnKCmC5s8zS7fRdM",
  "key17": "3pQ3TT2NDttpEHJfKMQfvzDGShCgkVCQu5XagsGi8ByDYfgGo2kJ7owvPyesg2RPZRgasKZRTrxqsVeVwJ144bt7",
  "key18": "3GneYRRvceLoWbD4sBNnjj5JqkZGnAxFa8xjD4bRnRNPMHpKvjuoFP9CdwkR2FT46xBziJhjAffbopE76v7Ya3oB",
  "key19": "5dN1i1A2jaHN16Qub9hxAJzhpWanqaDr4PZNeArEDG4pW8MZ9RYSKe7TgP18nifgbZLtJMegc6UWssAoZut5m8G9",
  "key20": "QLvgYbist3eZmVZFHuHoUkCSJkhc4Ss6vwjvydg8Jm1cWjNouEKeiuRvvpuTgHo6a32s8RPvq8JtXpwz9y2tu4C",
  "key21": "5xRPGcoTVZmMuptmNTS97F9T3zXtzoVc8x9y8HXx3LyzANpvnyPcTKQiS9ZJpAzeqLvUD5KCATrwubEF8J8BSUA4",
  "key22": "4RmFw6fj2J7CmGPiUG6LTjjG462Kr5vtawT6VK5qCvgr9Q3Z17qqsaXyFQLKHuSDyBmHr3jDXFRpGETP24QRf4J1",
  "key23": "36KQZMiKDCNNa5aLxRqPoCkJniSTqD3xFhYgg63CCwnkZLzC3TD5eJrXg99T9AJcS4duPUbFeh2Fs8K2ErzqZUHL",
  "key24": "SGxFvEW7wFGzz1W5YKsYn8Ao81J9Em6Y2MK2gQwpaf7v2RptKG3xytZ5rHif3FM4paHqje5Ba6FbHA2pQXcCKWW",
  "key25": "4DE683gaebapRav9gCV1hMc7Bw8RYYAQXW2HjLrzCwX3nHoeGAxTJW23bALd3VVWaFSw67wBAXcjvEBz71p6DdMR",
  "key26": "8CmZsrRcaJkTbd2qGTtsuJmUV9udn2naqQMdCKD8cLxEaiXgDU8phERGudjka5BZKTgXToykCdmA5ADGoomJwhr",
  "key27": "546iie8bruUAvEv94p1mr2R848e8u93J9t4iLvx5S25PKp82Gb4boiP9nQZFGCzdkkYGEMMXUWx4ZksQwAJT9rXT"
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
