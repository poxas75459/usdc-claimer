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
    "4viXJB2fXRfXeLpTLyKM2wSnq4YUgwXjoRexD72fqT6tdCjYPedHJMn5g46DYzhz7k3gEcVvx42Eg1stn2VWtH5B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vqAS2SXPiTjN332DEXZLrfRSUU1Yjixmxiazs84y31EBb4dVvjjAi192665og5GcronKjV33KxbgbdZwCwyp6S6",
  "key1": "4m5ARjbYxRCjqAqfQcqGkPwGruwSxEoZNvUJNq8CwwYt2NUDFtcN6KYbWnaPqU6jZYuqcNEfFvAaNysFAYEibwqK",
  "key2": "3UQCyhojaB145ZWvDhL32NBxxxgmuDmPUJwAQ5uQDkpf7XwwafT1JMtiyHM2kfV6A1pQ4KdwC7sFhjkeksNz3BsD",
  "key3": "4WSkASY3UowQJguqs2NJcUyggHB8XVyFzByhfmsPQ3CSviUkrWiCcqYCSa3vA8S5UGyqZKoSHTFA8NJz2GRQLrEa",
  "key4": "4TgPB8jvQuQeEFScdFPPX7EnL1ddDNQWjEJTCEMNREA1xfcAafabLzuvKoNLCkrAFpu6CFWYJGnjry8MvJELYjkQ",
  "key5": "2rYNnA7T8XZ8Mz8mjGrvtodfD17N2eovuxcBC12SFpm3tJ1MTXoiEvZYDsnbgXYJRtBSg7UmgoXeqbBiiLhE9SqG",
  "key6": "5kt1Agzk77XP79q2CAPGHVVnooxCvvCMJHzHkPcvbkqivnkunJK8hjPiPp7h6GyAPSAUW2RML4rUzxNZNZYUChor",
  "key7": "f3BwwD6up4JPRmKToesKcuPWWybjP92mtXBQVxfZmdsnQJwR6BwS4P2RpRBQnP2V9CoxbUTvQou7gcMTmzNa9LR",
  "key8": "4bZt84zngUadzbtM7ztEzNwE3rhwzeQp12FzBz24smkQLNfx34SpYNCGB2wE9Yc2Twj3vYsW5He58AbHURzTarMq",
  "key9": "4N4ry7aoqJm7VXq4biNA2mQ1yvofu3WwdUxeUQKgCgpg7XajNgHWosLWRxdRM2Q1vX4YcnyNxGnF91AXsjednDp3",
  "key10": "TbMNiwfLRwwxXq4KbhS2j2as9JniPHrVeFY23BB3N4FnpKtpCR2Qqky8NiaQb9jd2m1yNVXf2KaEVvDG648zKSw",
  "key11": "4CobMrcUMUexJDEMwXoxjqKNAQhtZwDBPbmTKGmUgSPat8qg4A3TWRCwZYZ5opud7rBgFW85DeiaeV7bjsAa1n6H",
  "key12": "4S1GYvg4Xq495B7XpVP2ktzqfnow3xKgHLmjnnkHBNyngY98YJv6gSybPCVnzcJdBdoo4FDVj5rEo62PqE5hkB4S",
  "key13": "2Envhf53wW5hYvd7p5qgcDaarE5aNDfr2jHwSW5a7yFnNxQ9DTPKRttVbyG1KGRgkobZHHZuaAoVbKvEhs4yKCV3",
  "key14": "4GS3cbe3kVAnhp5VWWYyt6DPQ3viAHHg2eGP3Jxyijs4PqVi4ySgzC6i6zzdi4Z2MwR6ZXUgzz4Y2NweMY21JMB8",
  "key15": "3jFgqRhGu1pZFy5xxwJJhd4qVnG67iHEgSx6CJLpFa9BYdSUBaG3A8Co9FjyBCpgCNWWLcYNGDFh8zHZPbsZdktj",
  "key16": "3JVDWsZUhomnmyi5YnaZXjr37DE4CUh7sDCzLBJV94gZX5ToGGBs59DfMhEHtWdNbkb2ePfe7xLNaQmSeaQnZ7Tv",
  "key17": "4TuqoGXU8kU7GXrBQgYcWXwJRxDY7rXwB39KXh1MkYW981ZcQ3bzGBEmS35SnkNxBwDXrzKjsfVS3YjoJ2ggpkcG",
  "key18": "583QNweoq7jjeqMZ3joEUnboLJtmpZn8ADfcSJXkT62gPmMAfBEnkfYv97fyEDAJQkUFKKmL61SbuBQNRThXXPdR",
  "key19": "24fpYP7D9ksGagrtGvc9rd1pTcsBKkbz5Zk7Va9Nm8Dk5cxAAQv7pLURLNCkhrp7dCxozepzAgTdgdxTtnXS6K7H",
  "key20": "3uvjC5GrhKRMM9VxrdyALchujt13i9y5tRsKAjD5Xs1jQ6Vkv6y1CAQCcC3FkQVsUtuGKPKdmkJrEwS1NmutdajW",
  "key21": "2QKVa59YH6Lpj6Gnb71WwdHw8zj2JyDHboiYbdRqiji3Q3zosBWawz8JydgU36oXWHgxLzgXiNAJX9oZTCrRp1wd",
  "key22": "5mM8Pg4qxbhvUjvzGfQAYptXuM4zc75pwAEshS1rN3XVzZpCkUDsuM8PTq7AtSgZSCeWFkuUuifjDuvpw2Gg6inM",
  "key23": "3p8mByTyGh6PgHq5fU2u7qnjE8MLED2weqxjLLZH3deJaca8UXy2KcgHbnhfXccY57KKWXqet3du1TThuUbBWFo4",
  "key24": "2BQzTgu4uZSE3imL6gvWhdwiLWKXt9ZrXq9xHwG9EkxjmP1MxSDcZmysfzsiZqWHQXJjEGvC7RAcy3cgEdk86kFG",
  "key25": "5W8rWNPWLUuYWmNx2tBEAE7ahCWT3QDbwDTe62H6NqSGtvP5dcMr6tBsf4AVQEf1ALMM6xJ7hp5Sxe4WVJbNWfEa",
  "key26": "4fMDqdKhWtrCPtGjaQjDpPtRv4dBgSX5LZHN5KVwrNHSeSn85HJLVwnozXvnjJDWYkYcXqpEjpx8PYvpsQ7gu3pM",
  "key27": "2gD4wmwgN6g1XWMRcr5QgcqotfxYR8JsV7EwRwdCZydw1hJbfUUQxZqiKbnqtJQes7D7JFtZ3rFGJxp5HkPXtxxD",
  "key28": "5QjQEYnxY8Eke5EbstfZ3zYPRjZoVuP3jWok7M7AHK8vCjTovHhoaFbKyGW23q47GqGG764ShgTaXqGX5ZE9UtT7",
  "key29": "EeXuGKgozunxXQgdbX2akpYHco1Yqv9iPsNSm6EkDZ9WYSNasgiBFr22a2zmSfTz9WQ8CRsPFt46thprAPVqmhc",
  "key30": "2tA5SBWY84kHt9dvhKWaRH92ijqWbSyKofntG4tMnuRdThStDGFFY9qY1qJkRU5d5RGBrPAMMC3NDYiXRQ8AVFsR",
  "key31": "UsiQj2pRtJTVfv6GEG5FFFGbMwVCARsg4eYR6jsAHDppJSGLj18kvqcy6UFAwfGqovTW6776Mk1cnYBgPf7Zocg",
  "key32": "5HtodSXsssdfZSUmZqjXeG727hyuKSmYaZ7k4fhWhyhMMbZnjhJmb6FekRgB4ofzRM7MvnWqX3T6LZxU5JvhTLhc",
  "key33": "47dbtF69hYFi6yetm9AmyaA4GYd46eHXUkyUWKNyu4pFqyToLG1YoVb6iVpWfVRu6tUKZfYkmaxPUdbtju7TpyvV",
  "key34": "9H89hse1fPQ4kGhdzyGvh9ut28vXwx85yV7WhcwvK5mosiEodFFfFfbVo5kJwpSZXB8nSkpDFj3G3Te4VDkPRh9",
  "key35": "Phb7z1S1xPFYkgw9Ba5FpdWHmRepbR78sry8jwZ9Nq9bAECDF3R1cdYyRhYoUSxgbCUTi9mW77QCaHqW4TDN72P"
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
