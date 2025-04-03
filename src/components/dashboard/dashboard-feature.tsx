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
    "3CLZSWYUSEx3pLdHyLu31KjF3VNhd2hoENz9VEcnSRXzPLrCQFS7UFSQ1HAbz8dZECEpKHDJV71oSyT81iqKQH5S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25LfVb3sqY3QKTh1BYtYmSYwAYQugWFr3cwfHfVu6KjkB5xrjawhEyDXHZtRtgmHr1BQ6RTfxy8DsHRGP5X968yg",
  "key1": "2Duv4FmwassWKydDkYc3HvQ3H8pvv3CiaXUYm1Rt19ebeinGdbSbAUjkzhX4UdHudtxFb5HfjmMjFACpqRVC7ouZ",
  "key2": "4hD62zRB8L9wwp9EwFNrr5H8yot2qhL1m8LeYF18AKD2t1iHLyWjuDk7LU376QKSFvdc5EEhiZhU2i4iKPkcVxGx",
  "key3": "65LzjpJHY6bcTfQaJnQ4ZQXZfApiydFwW58HhTN7hkRL531fpin5tTZoMcvKLcsSCxFf9ikCzqbWU6J1Nbx2DbFk",
  "key4": "3GG7AunSEp1RDSZSTCj8k1zMHKQui83hJ8k85Vsiq72NyyTP7NERcDio6JgoQYvDQ2SfXUQ7FGfKUYA6jVCoo1cQ",
  "key5": "4AhnS4PgxxVNRFChm5LZSm4XRvmdfsxBUDvgsT73sdj2h8xG1F7L1R5nbp3WVpLAft4sQHRfZJPc3UpHvX9TpMP9",
  "key6": "2neX46L3FxJR6NRxeXYgtizXZhxFKiXZ2mT8SVpKXj6hAgGuAqY2v7rvNaFLZ95nNaGFrnAUgu5Lym54K1cx9TA8",
  "key7": "5sotAQfC9GNEb2PapcRKRZPqTR3a8vq4KTKoKJcJsnhb25pWvLoABLaNSAsazsTc6Fz5MjLEkrTAD3Q2h5SN433G",
  "key8": "2Uvq6jrerkhS6txq8moNb8HWe8N9J9e2KRCDzUj12WrzFdbNvUUVNE9L5Mbfx6qaw8rGL4EfHJF7BdbMFq3AdRFk",
  "key9": "3i9FQmM2oNtpyEFXNvT6KjaYx1QTnCVNKeihgunFDoHcfTESBmEEUqSonKj1RkN9zCTajNv25heNK6MMv2JdhYoj",
  "key10": "21qaLKc21dXkvQVUrYC6ZMigBk6ePf2KgTUXVsWCCegzCy8QeGBb6nshMx1tD8vL581aY2E3gnLEULaU3VXFzyLE",
  "key11": "4cFEMPYCYdSs2s832vCScLBj8zfz94QnMG7dRBeS2s6Cn1K3B8AZ3H7hsy4uJkDuva1xevTkDCtGzUtsjb4x7JUS",
  "key12": "cdvDUqGuoukqLTLsznWvDRTYS5fcD4zf6Mc1k92C8tred2r88pzD3Ji6ZAiPGEpeEBZYwxG3inPKu8S3szMGdRD",
  "key13": "2gX2Bsv8nLEdfML661QZrnVPLvvU9RZEj9xMSTuhMb8NizqfG6L1HjWN96EekQJXbJ1CU6RAnHUzLX7YqojWqeY1",
  "key14": "4FSULCXXUp3NFPcyKZX1L8HGr43Wu7iHZ2Qxyzdi4pXSxS24GCBqhBSY91pKA8NmGvCKZthJREyfD5bd42QGNwd1",
  "key15": "2T6Zd28QvM9FfbWo4y5fUK2LV96k17B6UZPFUud47aJrmkMDUxfrQrxC7uvHoRisgPdcK85XgrXKc32BgxeBgdR",
  "key16": "2629JujZsCjyEhP4tF8uzJtmUR3t5TXcdumpD6HZxnR5tEuoe5F5VqToXSjdnGq2n7FFXhtEJCbvuDNhH84ctJVA",
  "key17": "5bKxq541X4A4yuhyHpZFkQH7L7acgm9tkiUGJk8jTjTEV5YwuX5CoBw1GYwj7Xhg8xkYi3KekSJhgTmhwT37YppB",
  "key18": "5WXP8VrX8zYNRwK4wAwonBKR5PkQ3JQdypRtGCr58NfY8hfL7h13n4RBk5tM7H55SdfeDjP8APisjGtcmEK8hbtx",
  "key19": "3TZ3JiEHajgV1nX6Uwbrvr1ENNUmrWz9YdWSzBTic9jQnKdLqCMq5a9c4DPjKNs8A6gyaQEA6F31WfVkYNBqNQHr",
  "key20": "56K3b3Gh2SMFtVMYvJiqLoQcFm2WE8g1iQ1ocR1caJdU67kaLvGitDjxb21vVQ2ARKbe6sG5umckzTzejnfk7yCj",
  "key21": "5aXkFzFyvv4sxU3o6gUf4nXUWmmYpxdzyyzBhZRwmtNC24LSaH2xHLUWHmUwzGQ1sTn5jeFWpYwPEpVswC7U8n1a",
  "key22": "48uCrvDQGvaegXTKon6Eug2qY7bkUrNRm6vRUhtdJNizJqqWQJRdAidcyV4VMAC1GuUWb4NAB7XvAznjv127PnVR",
  "key23": "aVqs2TZkWVbQ5JcZwhEARz6XB6MkZxKyrfPtR3ebg5d7YBV9gWMwXcmirXGyEbDZND4P7RZKjbBhZFXL4qqe1HZ",
  "key24": "2o5Dc3srEwfKXxcaXyGoMbjs4BDEi9Lgrqa7eP2z4WKEWWMpLrh9fXHwjPmyEp2oAXW8VU5AtbTmpmX2ixLosAro",
  "key25": "NMqVUM4So1gVBbXT76iuRmU8axQrLfnjzLY2aHAZtKdy7ipK8qxvxQcVP8GHEMoCXoQdL8W8SDPoVWXUHKtM9iN"
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
