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
    "5Zc2epUhQrGCiVKBbAFfamnsSAWtaH1SNsUrTYp8fnhiy67UfUBHaBaT9RuPgfXjjGFsHffujx41XWJhWR13feYX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55gEJvNpocL7hdaJbRDvQEJ1MtnkVpCh4Z4mWUNUxvzhV89BPoDW2wtrqTCvy7RvRb7pyCgdUNZGQm9TcJc3HrSV",
  "key1": "371iN9vPaNXUiE1a64CRC3zcuKg19XrwTxeuBzyxrd9oc57Ch8yJEu23ZphekSj7arZUnTGfYGC4rqimLu2h5djs",
  "key2": "3QEE8bcdpsv5mrcBp9gRmGqWU7K3sJo3Pb5d26VECy7K6A9Zsbnabzc6G7JWuUmB7QgURBCUot5zQZ1vsAn5PUHE",
  "key3": "5smJFentNMHqJyTn86XJbf2L78S3FwcnyREwujWom4KtpEj7quqVfMxz768r7Wy6YGtGU42mj6uySXyWRDMdkLFM",
  "key4": "5UxEkvcyRawAfg5QHB8rB6FmPV8FT6sLyLP4GNMM4QQMKRTTzHbRGtCe9Jctcsj2ZPbAmgCruMoU5PZTLVCpf77p",
  "key5": "2ZiRLWqcANX8Ki6GTy6Rkzu2eQuAH2hNiC1murjDMjyM4tkhfUCvXonrz6yxsmxi51NEFLLLW9RghueCvR1VsgXA",
  "key6": "7ubMNoDEXSv7zKNXZKgNnHnGrPmkkaUu2MR9N6rFWQCXQjbPsooYfeEpNehMdvaKzz8EWm3GBvjcZ5JVviF6Lsb",
  "key7": "5o2xkmkLytJPJxd43gCsDTvFwmti3fmzxWJQ7rP9VMBQ45GEiVZCxrgJpdNRkNTkQj4usjX5Hj9niGMho9joMiY9",
  "key8": "78NvwqdeaceNDoKMZ1BSj2fsJqBRYwTcPceRJmBzLgS5jYLJrSmW22iybXYfmnYfdGJ25VFFv1kYYj1fZpU7FuL",
  "key9": "2XnBDKDCzsaxq1LkEhEyXdB9XVSC2ngSKRmjy4xEtXdiDm5rg7Gbjkkq1Qsu8yfD6kgWTjU6g2HocEeNTkBDXP5o",
  "key10": "2KU8Mn4QUhybvKxHb7rsmiDaE5M6f1ryGe89RyTHWhwxe9dECVFVx3w8YKrzgk1SyAidVLhMsu7BhFUwecKwJqF9",
  "key11": "4wKdp2AbKuaXnmQ3vNsrreCj8kPtPDsEGZaErpRXCQQ6ocVegTth28BdoWDARAh8U5Sif55qQE5jrbXyPoFRuMPs",
  "key12": "2Kk31Daed6JWLxNT4vdocgL82EgNjAh4SqHA2dFTr1NMZJjCzJJVWMjAZR923XUMqRzc2ep4C6PRjGhPWbizVVy2",
  "key13": "58LiaZtAxybjyAS7iLopVzEPkixCj4gZQnUpddnUnVdQfZtLM2d9oFv1hcZu9piedcsrQ54ebfa4LvufVDSGF6eM",
  "key14": "3tf84du5B17BKUhH1ojvp5syXx7pmArHRRQYcYE18Rf8y3KBs81feX4nWEhu4ZnF5wNy5kxTB8icHfStGi5e3sb9",
  "key15": "4FVxb3czTuxk26yKnQjJWbehhekvhTYy9jm6fBpQMvQvXYs7Tga2NwwcNmaz2WPdhcpxzz6ok8uh2Sokc4ooVqtd",
  "key16": "2ATaVsSTjY8VeGdzehZMZRjYNxafrYRgZX3FdyFiTUD3f7btqMz3sTugMwX6iN4Ku51oCnHuBqknsY3aSLJduNKz",
  "key17": "3uJ7xt8VwBGrvhFeH5Z3kSNPG9mn5RMGBb8baxtrqoJwpNxw1wsYoL5ffeYp2uUSuMFdW8vkCnK55T4gQL1LcNqa",
  "key18": "5gc9ter83nXXeTd5FupbtVKWvKbRz34TTVBoh2er9NgxUeXaxhMLUmPfDtsejKTuJv5qsXMBHhjGnqpV8wsq61ch",
  "key19": "5NPs47PuB7dnUkTKjP9aZHqW7xe9sYQiH2RtBYQPe772VKSyDSumGEwPu6yQgm5uRkRAzpaX3fNs4xi5k8H5LLxp",
  "key20": "635LZE4zCj1wXzL2jeDb13Tgk1xM3zVPgNzPBVbhcnUBX2o723zKzjWWYt5kYJWYkrWVvSB754Lu9woGaNPb78vs",
  "key21": "2HvshHhSM9WBuoQT6NbaNV2Kj7sTnNUXN1372R8aRRMWkkuJYhj42EuHrqmzkRPLNhR1nsL8MuLSDaK4UQU1SdaU",
  "key22": "3CRM8er2XMqhYRnZmaLi6cZG1ti7bRx5fV96BU8seaXGnVWdYiGbV2wrYFWarHwMfDiR5Uph3VyfvxSMo5kJdoGq",
  "key23": "5BSbjNX5B6ZCBK1DUtouPJn5bj8EDQjzLeLQykPZn84go72Etr6VNDsky5E8hq4JbD7DFwosEvGW39eKKV9wyM8M",
  "key24": "vJXRhtQ28Zv9U4vkVjt93JvoEKQSyCf45nebzKa3sgUvXy42Vr9jJB2NHxTt5GJXQ9Ae1cZK8v1fPjj3Uhfq6nm",
  "key25": "2VVC77CSYJnTfV8es3FLXoGzWdY2ZRcwy1B3iT9GiNedSKyXrshoR52cBNLpDsJGZVmrkrUJMHush1WAhjHo9ehC",
  "key26": "5TG6c3U2X7b72emTxpjYUo2WQknt1kjceDHWnsKPXLLzFV4s9f6KNsHWKR45k3pNHzsJZ4AyDv7nZ1HUoXZsrPkP",
  "key27": "3mptoY11n2R8MQYqRnHBd4UpwLPvPiJREBEoxcbbMzeKG8ewTeRnptrREmwwwjh1HE9R69kgn83T86Tmzj1136Kb",
  "key28": "5YK1NRiJH763rEHdHh48rRDG4ZcY7rRPpJHjJRkTb1v9rJxkrkwVe92HVnxJPWNWuooyXNAzUxMoWSSwYaPABkFS",
  "key29": "34PQrXzLQYiFc79GmGknVc6vhsrVRmJpUTEiu4cUNaQ6BV6ZWRZcjEAY4YQcHBY6ycnpmovfvHRsrQcK1ZrQ899A",
  "key30": "5JjhZfLGM4RvVCrghDNSN9aEVFFYJ78ondxNhWXko3oUYveqm6adcZJgP5RNTEmfqPnVzsgS2rwLPhJ26uaPEjMX"
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
