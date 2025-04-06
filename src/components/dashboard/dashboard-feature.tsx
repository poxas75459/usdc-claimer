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
    "5yBSz8JHty4ri88GXKEJZy5kETw3AEvcoxCL9EGgtkFQa3E7tYA8dgNfySzgTPnBVJQRdB6S8XzmJGFg7YicY59H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FQJqQ6trXY16kmz2L5iyLRXYxWcci8YLvTct1JbJTiszbX5gUbxSniNCKpNEhG8hRt8GXUvbdTendRZJDB4uf8W",
  "key1": "4hELpwN89AciZBuzB9LywM5EwtXmM3TjV3YyuYjXHUbYw2jzrAjj2c7tNt8s9XP3BteA9aHrEB4Sf5uzg2fNLpFb",
  "key2": "39UhBBLg45bBMbDLTf7cCRyTtA85ZQio2sJ99vL77hGJiAtZney6uLJXqujtzwEGmTK7Une5smMw9Ldw9MtGzN69",
  "key3": "3ESSxK6dLzcjWPtNqWQEZmpEz65YYrFdTBhYVbikkNB2r8UYtPurr55ABYpsMNwPXJZHGRGfDU4YrsMyvivPNfzR",
  "key4": "3CvR9rSAir86rUPdxS28ecPPKwuLzM3ZZm8GWRzpSprZadVfnrEVqWBdXBTXhfREVW6G37tL2fz2UmDEkMFQQUqC",
  "key5": "65BQLGTTp4cdqGDkEVgzeBkzVWdZPY3pjrfcAjcghwhw6q52bdP6Nw2rmMPa2m7fPkU7TLiYirPPHL5LPtWWM9Wb",
  "key6": "5KxTfEPt84675iBfxYJiARSnA9BAsagEz1s2orTSGmyaFheJay73qsf3Y5s22yMYXxP8mLybbMYTuprKBGJ93pkV",
  "key7": "U7rhjSkaUfcoajASXNQ2ad5jMsbFAhxf7yWFSSpCuFQMKzu2JSe3HxLKToKaS3HAeXAbqUiZVVn5NLavomykPbQ",
  "key8": "2Vg9214Jss96PewFvwtF2R49sEPLQ7W687XqnVdfcBmZWZYHYExrFw1d6P9hd8bMvb1beSC6KUMkXh7mwaSzQkPx",
  "key9": "opQwEvJT2dRP82wp2AnGMtFmMuAA1dcTiVoSEdog5vfPcs8xJXMiWjby2jPsfWkMQ83DsBWPLLfhHwzBdQUbW5q",
  "key10": "qRBEHG3ymS17F35Px433C9KFFjypL1hArQhvvSEPCYinUTKN7pKY1Yw7hzf1RExB2AK4FQCtwoUrDWyqB1mU6om",
  "key11": "2C7cYoXiLq91LpZYxquEaABMKrP7HphiwWJDgo6VBA1rrdU6G7uCP9MLKEdeSk8z7kQ1d7ToYNwBPZPd1v5HsEAs",
  "key12": "4j9XPoSUZL4Bu8Ps2vZ5GfhA51C7K3zQr3m4QQJH2e69mqEmtR5tBCfsYSQdcJYnkbtf7WQw5YdcipECH5rvUeSs",
  "key13": "5sZb1oAkiEkHdjjnw5oQdyte4kN4RXH6kW4qLQmU3qvCvWWXSAxLfBjz1sPFRnePNJiLCSHTApHLRpq4Fzj5UWhb",
  "key14": "3UnHmdWcaRRLdLi3Bbc78a2EFUe52XhLTgC2fCzucVpzVro9iJzpWmSPLvNp3jt8gawSn3TSKttyHfy75GX4EYnG",
  "key15": "2uGeQ6yynKGMfRAmS6NLNyFhkHfEAPhkEjooAi1n2YQ7C2M9ybsEqc558yJ6xu4qU4XnR6kJxhcvpUVjRdxRbgiR",
  "key16": "4KgUJLJMxr8WTExjrn9MyijJavBumgE73u5ZFXKLv6Zb38Ge4wuqcdwJQJkcrXAAton7zY3smF8gv8wL3sL5EiZ8",
  "key17": "3ekzmEwq1YWhaZCSqa4tbmhAp6xUxVLooiWXnJDTkoFY2TFGhNM8XZ7ZAem8yPKDxUGBVpVyE677gG6uUkEbQsNM",
  "key18": "29Y3gtvrAcbLU7h34ghom7eGePjXFRE8MpmE7wZpdobJfA4GgrSo5qNqwkXUunWYzzNJeAEdDDGQUcSqTLsPbS4s",
  "key19": "2Sy5hvbTtqWqStuPamV1JU7CQCvNb6b8LNiardsBwAsrR2j9oVF3R7y2rHsgcVbsEhaRnDqaYGKiXXsGXab7A3wn",
  "key20": "2yP55fbMExXKduyewLV1MSXApnZd7GorrdZ2rVkAPvHVDX4zBH56sTMTysrSd4NYNZQyeNZmiXiMZbuR79gfM2ff",
  "key21": "5AncSxvmHnvWJPZFdic9jDx6eGE9q5D5M6Xx2FgLa6tFeX4wa8Uk8tdCUsuGG5XmwiFAMz6YthzeEbLDWm2Cs9mH",
  "key22": "2c7BZHTkioi485ogz1exEaYK2jRr8HNcKgy5fGSDixCG3yyYRBbMRQHk1wRV5FpmjS6bbk7XErhjyUeJSbHHfb3m",
  "key23": "4jTLzi1M5CeyGhoyBoBJjyzZ6Xtt69jSZx3aaz5s15Yhtij5P4TawTySrTtjUz1DTuuQvWNCdutzwMB3dFDUMsJJ",
  "key24": "3Kr73VTQEz3G4iBEEumgpkm3UJWSuTuN9BVbQcke9XmBa6usBrKxbAVYEPYJwFVFzC5bFLjFF6iFUc3vESjGNhXU",
  "key25": "4T8SDgYqWzSEzN7TzUMJdX9kCPMMj644CLUcisw1VS1osXsDo7Mt4BYQTtsLdTLejHKSYLAwtTdcxdS5dHngsVzd",
  "key26": "2NCP23qY3k987Z5Q4vv71F93hsimDyLbFumMzYSEu7vMntQR5Egw917REuiehjYPxpk4HESyN8evm4zVevTZtQLX",
  "key27": "zwrjEJfcxzJyr6ayEBtyN9tXxYAbDCA5xzNzwqRo9RTH9euovb3dYUuptjMjYjmy6FC42crxhgJN9bUAQsdexHe",
  "key28": "mZVFVzxhpuqSDRsTFJ9p84EAFBiokjv4BADbjkEY1jrpQThkyYFk1GefAiz2fSbaxcQWUEumhREzTbZXJocXD2y",
  "key29": "5bmrnENnwxJdcMRJzKSkV9hgM6YaTnMSXybPkfydMScQhvyLoUzZWV3GFJvXvSuqBZqMsVCmw2Z1C7R3fRU5rr15"
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
