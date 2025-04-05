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
    "3CKKESEzCshzRndUwA3VvkM5EuWD7YiCdEhmugT2evr5qRRa6qcZWorZGcyd6kb1mpp4KmCbrvFs5pVuzTEEgWBC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rZyHiUVRrGb2h9Ycbb3gZfDfKzoydf4ZJhi4f4QLH7D17djfjBqi12MVMbt2Jd8eGcAUSzqVmR46fhxCCDufySA",
  "key1": "5rK3vUjszJjK8j5f3c6QKu63idQUiHg2KfGc9rQdZmh3pFxgbFWRCY7UVFyuB8PhbeLTjRTEw5AHRBDcDu98okm7",
  "key2": "3jums5GHxLFTrTMRRsvLLmXJELn6e1NQwafzFF4md7jsfy6XEwPuCSdaurrua5TmDaSx8g95BKfP1zS8AX7PpsU9",
  "key3": "5UzL5fD6HgSXvLV8XT8rXtDaerdC4sZCy8aXjp1dnHrKayrc5BkY8AWoCXAxWp72hd5gu4DHHsLufLys3VtVye1k",
  "key4": "3CgDwQAjXkpdxQ7oDbZoaJYU1ZnbaYKNi9PFVKfV2aN92nfH9iX1bTerjTBkFZDfngq6NvDhdfLQ4ViNFRFQGQUp",
  "key5": "61KTx3WCsVMiUzFznkA5MKDdU3e3gDSnpM8konxPJk1nk38rHE7oUfNjzGEKXASLBs7oRQpjAED7yoodjQz242Wn",
  "key6": "4xAwQv4T6ZMBYBBGLVuiduhscmjnxL8xj774tuyZMadRQ6ryzr3s6gkkAFng91tRbKUjCVdAuyNEa2SWsATfvJpQ",
  "key7": "4m9eiSYG8D5zvZWmcAVtyxCJHq9GsEwE31mgtBw2TKGdwZq1td6Z5g4q2RbhMTuC1Kv7cYiLzrZR2zPSKCviardn",
  "key8": "tfWjRARPvW3ayXNaDYCBjf8Azt2h51uMoWKJoBue3Aa95w1KAP1sQ9KyWakiMoLCcwSZmy6kqNEa8KPafygY5c6",
  "key9": "4qBPwy11q8YMY29kHYC9gSY6faGytTH9q4k99s4FMYxYXzPXKCJP6faELnvP1VNCtRXj9UJRPYw9c37wLXs1YCEj",
  "key10": "5Wvbs5bCQ9gzyKmHAPHmDLryFBVG3gTYkzm7QcEPPMvtzECaNcfjTK2HrYSBY4ojTra8uSaqfSwXiVPVaNefz1X",
  "key11": "5GgFBNoxVeS4iNttDQogiopwMP5WU9Go9WnEDMwCCX3FHPjc3TGrw18qtNryHBdoKz6GMoQbM5rFFQQq6uqPru4d",
  "key12": "3BcPjhXjx15Urd2ET1kf4EE7UtJJZ2hgYTqYaJCBi5Un8sHea82QC6rwryxFp9dHiHBDVzShJqEX6k571y1mzLUA",
  "key13": "4Z9U2x8HU3QDyZpimGxHhHUGytMspAJZgvhWcFNuixRNSY8MKirpZ2hDjefa6jgVDfJ9xz9S7zjDDeeYAopKt8ww",
  "key14": "4ZmWubVwvNfdoHvLAATF7SZLAcnwAmtYoCVpehWFvrM7MvX2F2UDQExpFqNxxv2H3PL6PkNVLcw2STD5ZQhrZ3TM",
  "key15": "3KY5uLLCAyCmoijbrR3mdLRxP3F5zAAAy1GnmqrgX1DCwB1PV4fESR8scsmJm5HGQnNzLUod3GnNxp6WwwN76oHP",
  "key16": "5KkvYMxBVfWanTxntstThNnmcSxv5x19Ts1QNwm7oEefFCihTJYsQK9Zf9QhwW1sHF1yttzgx9uoLrN7L8Edv8pe",
  "key17": "3CT4hczQ7dffRJc3ALL7AFXsZ6fNiTFhzuNMDKbwr7Reqq4UMdEiwjdiMQgMNj7BgAAbigRRLPRJoFAYKF9aCtmE",
  "key18": "62odavKEC4daizm63EkECWNVCeum4sP1uxqzfsxQmEqW6R3H3ZVA39n42aJ9zAcSvd4gNMNZEHp9uNqAo33bE7kC",
  "key19": "5oBU7sARxheqQJVJJvyQezp8bPD8vzukkT28qohqkNQp8gJbwzMkxGn1srvGBVUawoWEWdCqBBT5tjKNJBgJ2KtV",
  "key20": "jB9wDq7UAcZG8XMWm6wTvw9dQc5N2AyxVBU2Tc4xcFRFagrvE4u9DpfKQMKMYzig4q2eCWAprk56gS87JB3h9kg",
  "key21": "3iQjZpQPgXQTYs7KxyS6rYWyYMjgeRqWZSoqBGpjArm9HCL7iFsJhrkvAVz8PuZWKFiGbbSFwsyVFfipGmTFHy5k",
  "key22": "3ehJsTe1V3721ec84XrsKwHUL2gutXo7JqvT6jfYgrzbmfrKcE2UcMFBygxLozqcveAyWNWSyr8jqETyi6zFpWGF",
  "key23": "63uJ1easj2rVS2KP2v1bRd9PJqnYDdqeP1LGZmUr1pMQAyA4nmhXpYosgZ4iR3R1D7aZwoYQscNHt2CMFFycjPuD",
  "key24": "4LybfZw8J4rRPpaHkiVynyASZiLVo9f7NPrZy4GX5zF96rw5ttqMc8dRY5o8Rrzm8bMWJN4eSK6mjzToEPwCnMrB",
  "key25": "5TzezNo39faH2aHF9WrUcHP27EqypS8LTTFaLGRguiz1UWYZ63Axq2H5HZiBp5rkKhocNp65HSCPbjjH5Lfgn2k7",
  "key26": "4gQvgXNNoyhmm1SypejpztDKTwyNNSsNjdPmw4mQjFdj5Z8HN3uqkCCoG7xwBkKP6Y63NGjJQ1Qf8bu3xWiPTFJo",
  "key27": "21mP5iSKJMprvtCeMW9uWJP8xQUbyedxfJTHXjxgGoHAMJJ1cckdEkjrEEjby9jjyt6hQoFRqcnm2nxaUUH9ry4o",
  "key28": "3X41V2xGE5dx7ELqvVeKKbb4aCfy4Q7yVJapZjeiViK1BULXECntjsK4Hh57ZFNfAJPG4KVaRxjRoHAUQUjXWwFf",
  "key29": "grWnjq1ny58kg6qp4WHZ4iVFo2dCmy8q4XGuPmJWaHwFz2exFEpgX2QBfLJoCxHZp5ukGfuWnstRXW1eRKCzATB",
  "key30": "61EU488dH7fFycYjMuPZU6UdH4dJVB9QsfkNwqX4QMrgBMMWc5gCFaHtjrgsD156rqSpRMc5Qp2Y9otMFgbGL4Pn",
  "key31": "4UNRFJ1qszK5akt1ZyXnTK7xk9JFFQzWj5uFKya9rVmMY1v6dd7EtQ7BathjwagVbbx5ZFFaNXwurhFBPaXK32US"
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
