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
    "Fb4T9JUnZtXGtHiLUdvG2QPpYY3tB9GFWYdSWkSUVt9U3UqasVFNAUpR9Hx7hRyp28BrkqgSxs9xPf9dNzHJrd9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5i5vQq95brq9icotkEYuTjr8ZB1ZfLZWpC3r4mVok1TmW7poBQH6mxskstMxgHrNwBWoN1EdWby8oNjYhmvBCeFM",
  "key1": "Bi7fdBFnfHcHDJEqDfKMfrkcHSSdLgdW8FkEW1eULof4BQ6ERwznJNLSffQdJYeYDE9ZWpdDtH34r1aKELzgjnq",
  "key2": "54oy9yr6T2SvhvC2A1AcFfr6dijFKrPt226RrueEFPSKkQdpbyce1EtMYsdAqHB8N5rpDht2b7Z5b948nAjWrtPX",
  "key3": "dNUuX5YnpnN8Rn6fiLqZJ5h7Lq3AvYGGc66AQKBhW4ymAUyW4Ja97c8qX4VxeqrqgLPcpRathkojnoP74EkYLUK",
  "key4": "2SXYdeuySHr5w6hft3ujP6b6v3fwbULGqxgB3wp1yXGEHwtDCtdrS7m7w4Ly5tazfcRU97D89c4XayDB7Nm2kEK3",
  "key5": "2EmGVpvvZRPxF8Bf2yGpZ7Y5yTG2mEDxeVdvtESnxCt8yD6eKFDkGaqGTM5giJGjxpmqNf2GeCqYiSvDAsaNjsyQ",
  "key6": "4uLxKE5dbuBtMaKa3U4oUFpeUnx9o9zc9L67hLPpURktSKgqr3CknymdzuGqu1Fhc3tyWdRLJzsohqHYnWQAckP2",
  "key7": "4rwD4czQ3rA2ZNaRNZXpXRUH2obR3QFuTXJtvjbP5b6pt4uVmSVfacsq1AFHRKXizUPo8WAZMmjoF5ka2ha9Azut",
  "key8": "4kRqL84vPdGHDKHif4CSuLzn98cWkcEUmtrqGajkTWdUemE8cBbNczZT9B9a4CdDLCLgDNZJBRmHFGGMJoTbpjVo",
  "key9": "3KtKu7jXpqQ6pdQLszyJyU5JRnvVC6ruBsT77UvBpqARzYEUkrgohTSBnAqMn5U8zqu8dDukXCk5hhayLZv9iukP",
  "key10": "395cgUEGEv39LfHWuZWvmHLNV5neC2t5QLDq6xMVoruGrSH6RkY6E1wFW3Z9bowiXU8YzqigMVj3NtcGFSC8M342",
  "key11": "5ecPk67zXRiXBtygQQFqaHZ7mjXwesghzNU979XjxfEoufCEG858Ue4w81fYx8rEg7psFpTsenY8uMiGDRRrpzEY",
  "key12": "5DHyFzHrtLZFvZAxg5SkYLSwAL4eyMgfvjRLhKr8CEb2Ubt4QendwoVx1xRKQWTvxuWQSovPip2cuuutCVzoL3r3",
  "key13": "3YbCpaEkBhdbTGqyfC4r8jSew1kHggraABefvGwK8YnX3GFZguiFtWYLYdVJSTkw7TY9rmBubjaY5gardQNA8dvS",
  "key14": "Ss9oXVFEAK6gi9315Bx9VFA5e8hGzZCHWVf1grrfU5jFdeyUDkUpBXrcfVxR6ye4NwzF5eKCLzNfEmRWmhManHn",
  "key15": "5Cx93oMnEkowuRGRXoj7pmZbbwme4xjZ6gUqykHwJW73PVfEg8L5FHQTt2DLBGTZhRcj46Z3a1y8DwZ93mVyiUMo",
  "key16": "5J4VKa5R9nKounXu9UQuNtEhmETW7dtEHfb9j54jLi3HpiL1KvBYpw1TgpQTiVmrQRoDxt3tiVft5zH2AJ97LS79",
  "key17": "3DRQxXzCYk4naimtEa9HRcXamfdNv6Qx8VX44ciEjVp9tcwX4KLHyKriBKePS9sMxfGJrW2CcjdpCoCC3kR9Bvm",
  "key18": "4QjA5J2u5wy4ovDpuzwX7dwLuo97KbHaMadum8kBwCtiopfg9Cj9dZQ9pmnpouHHd3bKc1yTt2NCy88RfeoebYh2",
  "key19": "31eY8gHbVU4mAZWvTyB271jLY36uTWL4VPjNX6KBNm9R51sjD7djB4XdEhTjdfptQKpz1UJxYZ5YxSLdEHdPqV2S",
  "key20": "3A9Qk8hvXRG3brXVavMjFHojKNHyNXLgWV37xjPjcFhDJcqQqEzrZmN5Ub3rQWseRDGgmz9hZNMu6TxSg2CZpQ9D",
  "key21": "4648ZzTxHcoJrruWGTmd7Nzdqd1ZyD4wuwPkDThs6LqWj7od4BhqfL1uJsQPwsCnosTKWPZf3PLKfgqzbsrKxzmy",
  "key22": "3NtX5PqmM3wJzMAVGfHVqpm1PzmFfUQpuG1xM9Watrv5SjU6eWQ5Ey9YRMXoNA7BmYpn7yhxaot2Xjqf9mCPRoBy",
  "key23": "KffavS5V9TVfCJJ4FgyHhZpeAqSKPV4EDLyp1E85knncu3a62th3qRMdSj3MtCtMcr8aKXXnpMELGE76jga3KrZ",
  "key24": "5TxtdJYYY87LUaHH8RXmH71iXGnJs4mTdXibWfsvS8hXfvrFtjDaRXERk6yJP6tFoNhbFPdSamDvbjnVuSt1sPwL",
  "key25": "5bxR5qRtfAWXv76M9XtezzD7HT257nujvnU8F7RHDv1Pbwwh3i4CFdjbmdEmkKcQcKhG4Eo92uBh9e7g58qfuLmL",
  "key26": "56etv66w5feuwsPdPBH5xiy7ABtdZzzmiFbh67Qua9gAMJjirJKbNRXKZxcNbg2i8Lvw8MDFgqt8EFPGQ1avrahg",
  "key27": "62pCH2LSSnkhxuC65wNeNErFRCrfcmTwmuouC7ENEp1ZfeXsK8smKQHouMxGrYy8rKMp9Bwma7gF2zPSokHQxwco",
  "key28": "2VYFPTdxhAadLKXd6ht4gz1Z6V29dF2wU2tBPjJvCV48sJkg6cmk39HyiPmcsfH9K31fYov63vWMiWcheeWUxHNA",
  "key29": "32u1xi6Z4YnvH2MmyMqNmQckihZRBKyDyoXSD6a4LHh3RwGu4anqbHmqsDEUq8EbXmWuHLq724ERMcmHzLVeLHhc",
  "key30": "53qJYABGZZmwdAXRotK5LjLLuBsDxFEh1PT4TcE3b67nh9AjoeFV7QQRD5Gp5WuLtgi1XNNvBx2PS1y1iMhrNV9c",
  "key31": "qciYh2nD5PN67xZTT9TZbgYXAdZ4w9a2ZvvD6qyq5PYgEc4ky2kGy36A2SERaJZpE6YSc1MnhMg8BBDYPLSVEVp",
  "key32": "3KsLLQEW6SjGhrz16ykHuV3Z2JmJ51ZC3YfwZbL5yBfsk621kVuwo21fqRxZkRZsT8p3M2ZuaQDXEeBvoVKo3qo",
  "key33": "22ttRdzyFvThMeC71sh49PWuJox1kraKYM5PYe2XCU6QAQASNeoxokxWMPeWTj99QxU9q3dVZkoH3ftKYNXp3Pfb",
  "key34": "3tVrRb2tr7em9xqnk8jhkMeLf7xCDaWSSdtouV2Zy1vfFdUVNyfZzupesiL15WEovCZVZFs1EKXfn4iu89Gr9XMk",
  "key35": "56xfKCeKXARiKJcXe2xwP79keitsniDE9NcMjXUw7WJJwP9YFvEhj6SWusbGYC4DCv42PSDRof5NksaXrvZSjfLd",
  "key36": "65MsYApXUxBabXiiescJNXYYo9vzMpNjxB1qEvTVyx8PfhGFGeWLNkdVg7HRYyDnLymGv8CTBAzZQRLqhDJhS6sn",
  "key37": "uCj9MVZWbsDBqkcGwZNbrNj6tCgXEciYV5XHKA8UhxRHBFhUjYjYkJ9QPgYi1wA9eULMppc49ogjW1fzv7TTgtg",
  "key38": "5yZcj3DgTW6sGCnxYjeJ189rubVtUdZHtkzgbTkt3emD7hEf43Efy2xdqnoafzeK39MVVS4HzjhsRVLNzRXuidiy",
  "key39": "22V7p9fUiMk5Jss6Z4WWAVR2Nf8BQdKUnMMKjkTeajE6SoBiGg6ooUnfWyF879qcx9G4b5zuRcMrmM1A8HDJ2AaR",
  "key40": "3hjCEaXLvnRkCe7ECchafX9dDqDzkvL9x8q3ximWSr2KEfUMDvrxsiNu927seacuRNmVEUUv45rbPSvi6rowdiBa",
  "key41": "5EMRyyQdW5oYxqvHUpjKu14sHAtxjFFereDbMpuSi8TLidUfW2kyXQCuUu4ZpgUhdz86QNtWMMbYRENmreMVzNEf",
  "key42": "2UWupeiJVrtaUMzNqbK8rSePPiXqNDRjfzsRC5S6tbMSA1q1kYcMvMQFLAQP7fqqAPHUbB14dQt49RSTF2U8E3JS",
  "key43": "qAzVDHidyhksazztKmFyG6Khk3E1LFeYuBkUjW9pNNZVYHqfnmQL6aXsAwe151tSMK5DBqDiBGepHRoDyqibhDD",
  "key44": "4LsKo7YZbEf426stpxcSvuqUvMrCJmG9HzGfX4u2VcSvTRyLeNcTM2i7m6SvW8ASMVccyfdmxEDx9rYZzSztP6Bk",
  "key45": "2S4dPPKYJ5iu1MD5yCB4CLMifNxAfLJfPS6gerCNaZ2wj8q3A3Rhaar6YB1hZrQthdwj34u6Akp94nqSLx4bHGhf",
  "key46": "3TFozKmW8RX7ewQFZKFAvvhPhYUJXGM3priBDs5Q3XTfLUcjiqPXEehs1mYbuxDedFaU7eHTG15eNMQqjiERQWQm",
  "key47": "2YKjTFpSVMJ4qRtAyqN2ehKdXSfPz6xy3ScEU9yUmxXYQ8mor9NooiCJkLnabso9kfopyfsqWkaEtMzCgLeNCwER"
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
