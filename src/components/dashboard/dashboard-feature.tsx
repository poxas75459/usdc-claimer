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
    "8kwgrp4cEtyBBoDGWhFWA1u71GmLjVRNJEGqhdNgQ9UPwNFg4qXX8bbFQnsfhXjhzGuufRLj9HQCxAQT7ZRevsq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nZrADnvc1i2szttFvpaUDcvfg2zEi4sG4pqDzGHZ18ovaQBnRNPG6NUNPDWXvQQTuwoLMRCJn3nhbx5qrVHmmSb",
  "key1": "2XWZYRHJq5cx1KVGRuCN9rYZZp5hr1AMfCa1yEPya8crnx6quJ7gxawWGfoCDaWtpxdiLknvT9iqrbkc8bkwEJ5p",
  "key2": "5h65dQyaAUKDG5b28hV5TLYcL9aouiJRDz2cz7LiEJqQD9784Yxcs4NcZGTZtBjN7m5vjzBG6tNN9yJdjwf1JjDP",
  "key3": "3vEmEkgu9BtroY5KAbi4npNStcky1ChtuXkchoD59yskQVxCGgAeXELvazCLN5LgF8D1Cx1YL1ARaCJh7X2Vc8Tf",
  "key4": "2x3ZLUi2V6cUnUf2TMDy95AQHZ6Ls87rbLY8mWbmtkSz7XZqmnaxHDi7WW6yg2ccVzKGLzYceDjgWFcpM1WRuVKe",
  "key5": "5G2ZC4X31xtFoPhUWNiPJce2bNzdByCooLRTs9LSwQd46PnkmTAQ4RomQ24R59PREj76KjevMrhT9zRH45uVn84y",
  "key6": "5zxkxaAWHWAJ52zpnm7yhJYbAWLXV48EKj7p9qfkJGDdTSxXEDrUzqyL2RmuySZ2UHca72WgSyd7UTtpZTgMxbjA",
  "key7": "qsSSBaf9PGdYcNCyBBEpm1QipWHY6eTdChahn1o1Jspa2LN95P3hLcstbb8kJvGm3QWWa3ZG7KijrdyY7Y42Hr8",
  "key8": "5t3x3Hf2camkCgezCrsUXZNHAgMzWXF2ov4Zmy1q9NjeEMa8EhaFQJD8Lt85kPX4AFm4rwjEtTPPtZ458r5PCHM1",
  "key9": "cnaquXR3RuXBS8bGJcLegpbAhNduj5GDNCf1KgAjcCHUdC3h8cTxBom8jUQRWYgZrzsbfcdjAp5e7PGpBmTn4YT",
  "key10": "65d9KoqjbZsL2P8GMhaatZYv9h7ZGL5CGFUyUx2qfsw8kYVL5bMJNdnEdG9HSoKGb2UWeERKWsmNqWMAZoRwRnNn",
  "key11": "43i3nr5fLY4fLa8ACNvh8UBZEp7ZxZ3DMCKsoZ8uK1KJyZAt17G52Wz62UM1GQhSfmfwHZEwUxPn3kDBffxYfR1t",
  "key12": "3L9jhxpcu3C69YRjskzkPbJcUhJ3TqCU2emchvfEFWvxnouP9w4zeMcNXTBFAAK6zT758X7TvLjUPiXUwZwpgdzd",
  "key13": "4L2ze5krYVoH5RzsgSRvCC7Pjg13yr4i7hbyz8wKS4YSnxFCNPd2WW9ns6dZ36LG3KfG6ZTWzmLSMgxb48Z77FXZ",
  "key14": "aVEhVksaQqbwBqGNdBPQbGvyEjcjDAS8hP7DTeZuKwqcnCpykyEp9BR5F4LZg3ZPMaP5wQrKtadZCSVqMiTMRrN",
  "key15": "2g5uEz8ibJdMePsSqSWyxxEqS41H9PdD83UB13amcA1HQP8eAFdDq5KMRTGsW5T1SkUXdfEnSvewdqD4SjRium4q",
  "key16": "328S3HB2FE3UejBnMkAH7snjK7xtJrCqHV1jomyU7mDQPRCo9bZi8rpwqmNKFJZ8WEJuAkbomFC5vAvv3wxstjVa",
  "key17": "5Upu5TYNJ47bUeuAKH1Z3bMQ1PVUsUYgPZ6ZmAfwHXYc9sZML2ft543AF6T4CRrdEjaHVWKypW1izQoQ32UxDryY",
  "key18": "ztZYK8jmbX6V1g3Ft3sTpptER9RJXzj5dvC4hU9NyVggBbdyMthg7HLFDyAKsWUfJ7EeHvwmWavhjiUeu1H7Q5E",
  "key19": "Y2zW85tR1zfJfdH8xGb6HSVW6gYXkTBTtKbKM2D29UBHGQvLtL4t2knM25QE3gVH5BhhyX9HeqeDaVbGMve3piG",
  "key20": "24PCk743BmeKaNLRgBn52AQ1vffiXP4ELpv3RqvAYuNpoVgEAWGydtKBe2BduZ59RZUtcFnLQeBvYhp4R16YWeBB",
  "key21": "5xP6JBHQVqZjAx8JHeHFZNVqhDrhFtSvaprRRTBoo5KKvLMfRq2YCikP9GwS5oMrEiQhQZRXsxsAADG49MDk6DN3",
  "key22": "3b24maNpYYzLeX9SJX2JAea5XQFaHSwYdbViBZAqKSX8UJ948LUkPwnKbqvp3UQfSkcBZ6j4SXYTxENJZTkT9tyU",
  "key23": "2qGJ7AUkjkZzUpy5nBpfnjqpShWJEYFFPJG747MFHMV2hjwdUeubnPsQuTJ5tSUydka4kazJ7oKjWag4LCXVHBSP",
  "key24": "2CRUmiVmqpuSMQAbM8BqjX3xwKgweMhBcgcw5zyscjj9tidtPiejfV2kawE8e4qzP8JvBn3VgtCJUhTEd2vaExtw"
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
