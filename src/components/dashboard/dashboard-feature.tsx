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
    "3bXMok3cEqea1H72642GyGRbYKGTu8VFrrFXbepPV43uRtPktZJQFXoKHVoCH9FX1ZYkU41Jq4dDVNAZxEuh7Ew6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZCpoBDP3jrybG7UXdkoGXCdZgX1eLZeBohsPLykaCUiefPVTbNwPkYyF94dDq6ecPe3bdvjWwdhBqBwzhEJf7sp",
  "key1": "2LGj6TMxm612QPpAD9AN25i9qoTB7uqDRaGW1PEfLoizkpf74XtFpSTTCv3Kjm7n9ZadaTTtoLZZFT4Bn6LduEni",
  "key2": "2HoZ5PTXddLprhSTfgsBCPqVe6bgg6CRdFZQjoCGrZugkgQPBXugxkEN4MQgPhwAGiuDgrCLvLs18nL4VNrRd161",
  "key3": "4Vpq4GXeXhoRGkaiKEcFXMCT8xsaWSFqJ5YZabduEGxam8KXLJLDqw3i2LSidCrtQ3wGtNCEcziJLcCZWajVuEC5",
  "key4": "35Kuamsr6PJJmWLeSvi1rF3R4dKjNXwhmEvCtmiW2JgLKdTG1713Vqr2pfvFseWru8jUFH54Ao8wcDqWWPScfQ2N",
  "key5": "4ELchR6Qb1KgdxKsb8KpGK2LqAN7pYN2XT5ioToMQAaT63Tst37JL5UBTTUpR6QNFY5kd1bXeKr3KnvYBnTvzm7d",
  "key6": "4vMHNWiYF8TWM4uQTKkGdfaEu65fhjv6w7GUz53PkfiezGHKpemgnjeqd3g8XEyhahUHG6ZafH9hnLe3H4aAMHPf",
  "key7": "3PFKiessPY8ikjntGNW7J7bP9cXXKZyvBSJV51YkpZXB869pye1zv6G9BDVjVwKFJTTWH2JHXdovCLp6RcbRrULL",
  "key8": "5R9Q4uWPrzdGpYSiAf9o7Y2ouMC84BnWirgfqnaMiGX7Qx9YMbVgFXsnTugrWN3Npkm2YTVjP7pmSwMwgmSsZou9",
  "key9": "2FGh74nKc3qxxFgFfZrPmY9zmxZ6QEeVuwZnkw9pyT3BzgDUtCfjvj9XYSXUWSsnRVjMpJjkRsRu4DZPNKBGCHhP",
  "key10": "AN8xRad2XYhyebLMjjwftY6h1vEnRS7mT2RWX61LAgb2wTY37WH2fRgd95ncL56VyeM2oRfgf3hAjcnBnbyV9fr",
  "key11": "3vJVdcKJ97pwCjw9AeHHNQxg1ZzMFaiqciRYSfq5QXgzQNxEhkQ8GQU6ykSGrngAaBEEYJN5HP7tDMQ5vdVvG5Vw",
  "key12": "3iuTMXqchWmD1LeMKMa7vzA6Mb9YxA6Tqi1CJUwcAPnpbVeFWV6xWssf2kURk3Bn8kdDybxpaHg2uyeriUJxsFG2",
  "key13": "H7Y7pW6WJeyLctpAweFR3KRAT9jWUFqTwn6Ae3AEiGjTpdwEC9fnxPK3g77HVobGhDNtiMbhMV5dFTGGvXMiA1F",
  "key14": "4yfX96c9gHCBKWxyZV9LfTEHzWvpu5KHXZeCPJx5XEmz8cEUZhSwLEKnwPtjinzqn2anz4BKfpMRfjgBLHWooLzJ",
  "key15": "3SrJENMrwPMvwyn99WtKGckqWqxB897w8PNJBFbUXcQ8c4MXe5gULtuGvGyJxduE9Hb6gpNmoEskVLB8b1hJWN7x",
  "key16": "kGRKjPpjVfuUtcZEZkBMay2t1jTj7umbwnBV7M2gUMWLJhGSBEv4qsXwU3NG6tJewqkffxt2eTQZuQmEC6uxcir",
  "key17": "5K3ngNBCEhvy2BVTWu75QP1QhXLJpoyah7W7A4u7szwMYMyWRtCqPV553AK9dgXikQj4yL2uR1djPMEwnGZc7y3J",
  "key18": "3LSnVFA4TDGuvx94xs6UHXg5n9deH5WoFuytCtzuM4EbwJt8rUN9YR4nxM1QzEe7PHgyJRBnQMm7sBM4afAFQNo5",
  "key19": "4G6csSiFww1wvAUFw7JGZutB41dkJrbfjJ9GDPB8D9hVT9xjpE8TeGtzde5WcmCDhZ7LKj5osxVwbo587rWfeHng",
  "key20": "4CmiWrhwnUwSx3dZefjYpExw41YFKdxqpexALwFGSaWwCEFrwbxEo1a627Pz2nFAwJmKHi6NBrFuXDfLDQxy9SSL",
  "key21": "54U1jHHHT9RsxshMJkXtpP4jfzRy3hWgyLwDeqn9dbh1nsqogj7zXPofDkwVKXWAFhAQYgygNC8gUDDYdL8zLPi7",
  "key22": "E7tJR2RjBQAN6nZf6KaTTVLqjxvvAHap2W9MCStFkAMPbDkEpMStjG9CV4ZkekvaqskhiCQJQRhKMmTZuApihbd",
  "key23": "2TxycabyKB3AGXTFTurYogCez49nLFgEX4EoJ8AHeuwHG99YDxPN6ePtGoGvVdwrRXqGYn1sqcC7DjFAEB7aHRti",
  "key24": "RFWf7FLKHv9CyBdMqiWqNqa5Aan6Y8mWVpoGrxubSdGqz35FiN7FNpHn8cBdcGdbpaAk1LjorRdUHz7qMNvK6su"
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
