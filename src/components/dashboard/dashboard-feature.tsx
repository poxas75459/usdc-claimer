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
    "3HKmNKWtjoTkL7BJ75sSKxZJ4WofqAL5uQRzbTWdbsJoRZCHuCKxQtsiscXPK9Ta6ffGfNhmSFKLSezV2GSjNMgz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EnopBG3mJYipKHECkhVvW1dUBq1cwvXy6EmLxTbvBmadkCJjSAbghSyxEH3xatqNpqMuEXbNFCycwrna9yLmSpZ",
  "key1": "2krkeCKDfq64tgxCRquHDqGHXPxwn5FDX7TT5T9uMBNzW7ngBiVXwSN5J6MyRBfCYHev6ERYcA1qncr5hisZYmPP",
  "key2": "3H26Yz4wsErTtkYc2LNfHsP59c1CkTdohkN6G7EFMC5uAaJCFr8jht5cpYHK8K5tbCfdzgy84wcee2yMrWLPjVp4",
  "key3": "3LmrPp43RgUkavu6K1HsegLQnHmqacs77F3ZAWrBeWKymtVGFVvnkPNQD4oDPkpRh6mQq8SpHdd8CvEi7jG3TSFU",
  "key4": "3K4yPNqq3Bhd39Pimf3EJ9kWJ9AAf6zzoUeBZtzz4dfkeHj6pSCr4tDCX69LzGmNHZ1Dt2vcMK2PF1YRWoNng9ZX",
  "key5": "5JiWBHNa4M39L5kRNNUzLgtrsq9sf6edokLdBu9VtjKb4Sv4FycKuxzGRACizR212u41GBGNd9ZX9PwXNdtHgpJb",
  "key6": "4EnD6TEUQ4F4efZYQE6mRcG7HoUwjuFfzTbc1qFYA8nrTRRXAiranKCyQPYWvDVWBgTY9RkoPDeMVz5vsJsW5mxa",
  "key7": "2GvouCcjSpgtLeqJRAZqUCiW2eppJntpRAScZrH17p6pEp7soye2pC2ttti7sKZXrpa6nHuVZB5VuTjev3ZePd3n",
  "key8": "3yPiJ5Ppe2VLcmbLUNuBrqgo385VTSHwzBT28xyj2RXQHuDH1UtJUbFbVVABCL1vk4WGBn1yRRiAAA4ZrRdwqnkT",
  "key9": "55yxYicMXDm2wNNkj2XG7GzG7yM9k6bEDCPVmnHB7kBGjfmqzy9jRUyEmKYGsZAM9Y3tknXw3uhysF7qr1jNmiC9",
  "key10": "rT6JpiYvUMEZTyYKBjm3hWUJbdNGp1y9Cydwae4EapiNbNm2WAncrUG5thJY1Vy2t4gRoKRUx2TKTP1u2w3eF5X",
  "key11": "5Q16aHEw9PqH1mpjFiG9rXJcYkd3A2QanQBpmCaFY8bm1DpPrPs76d4dCo5VeoQMb3sUQdpBCxyHwF5cXwPr1e6j",
  "key12": "5oafsMNJYRrq1Y7ATPdgEsZUf9i3CnC8YTApicM8k7zaN6xZA6YKJtS5FTu5sh2BaMYv1qdnAvh47Qb4H1iLiLis",
  "key13": "5tnrdPhZvVi8FRzbWsxkeEnSFBqM8nNJFr6gPMrxPiAhTnZccekcMWT13ARVH3V6NbmDjpmkkTWTJBM1EpJUqHan",
  "key14": "2sGGpuunPkyfq31F4dsr2by2NVPVur7kZfuWxmxtgUKaztg1NWdMrKf5JP7Mk6wahvVEqn5xxKFr8btrX3vPwXhG",
  "key15": "5TFKmQNejioEfMCbCYjaKfacU3yd2TM17LFgGnfbwoxDws438ujssUKk6fJJRGz6eEG9dw4xraG8cMPYbqSG2vcU",
  "key16": "37JWYyCYzWRq6D9jBr4HL2CdwQyt7pnA5uEiF7y9ZdiAr4qR9A2x2XwRJeLTxPKg9K482h4TN3vFXoxPZHvhDsKr",
  "key17": "5P61oZUWmyrLrjdhdL97jbg7LG5gtfz7vxcVCdUb4ZH4ik6uDJ3FcSckxhybpXHSP5zwqLDJyHVwUQ9AK5K4722Z",
  "key18": "3GyQ1SEi2YMt5BHFYkhYh9jcsMeAoGuhup656HaXVheZVKXEoH7X2s7aeJzrknh64fisAkB2erR6Zcj2tSxJTmVL",
  "key19": "4dQUxN3YfaRQibYXoYYrsAebisvUw62dLPdmyrw6EMrvjynCkp63U1Z818KCGm49dHfdp6EpNz7xFRwQNMgqkD2T",
  "key20": "2zCZEBCUwhoXmXsy3EzZwSNyvNkWiEfSwSokg7MwPH8gVWKcw7S9RsmBTK6jprPbLbFUmhyu6CkGhb1w1qb1upxr",
  "key21": "5t8qwf1qXT2cfqVKfjNMGZjFMBNprHQCjvYH4EKorw4jZxhM1u9cV2h9Xp9MXChPKuAeZAQsTqt8BfyW1ox8Zuk4",
  "key22": "4nZJsmCHCPcnHervsAG9GX62rDzpsnK2WuqWGCGFc829LhbGB8cWUTTcC1Z64Q6uMTVm6JVSotPcBwLofad39uFx",
  "key23": "j6VomeaeGMqH34o8QskecxhjzQYpQSRmSYmxEk7PTRuVnvEbP8wR9w6MvdAFtyndikXsWzBE6KRghsjemCrY9PE",
  "key24": "gsVquWDSFoBXjmBScD52WiphHaXDHXWmgaokJRdNJ9vPUCifJxr1jPge5ya1QFV9mkbebATUeX5M7z6EXtDS7dY"
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
