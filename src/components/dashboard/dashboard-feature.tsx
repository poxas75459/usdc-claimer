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
    "UyV16r9kMjTbsUVNEKVKXdfydbNqSb8MY7xURN5HCiGrcoWd6hxKsQ9H9ipP2PeVN8ESQvihtT4L9L7V6Kk9sLv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DiozWZDQHmXPUfmTNwLySPv5mLW7TqVbQbPFGgRfNjEu4sEfgR4Hw9cU5VYn8KhXD4stTPMU8GoYLRb69iZYUZF",
  "key1": "4NTjJzvYcxwFv9RRsUTTshvWTf5yVGCkyKb4CxcjiUh1tKQqyCKX98v8HEXf46FkTCtvUFbRDGjDhimMv4gPBCC5",
  "key2": "aFyqdWQ4qQpEVuZJXQa7u8mZpSx16P4kPVLXVtEQodtUt4ms5fy1X9AXCx1TY4inYj9XESo1eDoL1dauRap1DMY",
  "key3": "22q1EH9dRVicK5TR4ijTZbQpjm9gamaC4yMQRpV6C8yBoR5hugDvs7mpdy2GuHG2We6YHm6eYjFLAFRGMcqGaSH8",
  "key4": "5aGFbN2nog48Ag1ZaUDRNo13fBESdVZhabWDRKsdTP6PEjhMJ35SYMeYby7HQR4nZRN9umQX6CRMMYE8guXSa8E4",
  "key5": "3dvE9bU8eccsCc1M8PmAg5JqxMF1thanyGdn2TfjFDnJxSFfb92gb3VP9uRnMGuszCMSTX3hZg6wuANc8EN9HoM8",
  "key6": "25gGbujeeS1V8ep6xWTG7etG3ki4ApLBrWhLG6qLZNS7THWzDaNq9NwfBTMP1TMdPfqXwDaQ5mXFNQjyyLRCRaD1",
  "key7": "4WjSRUAyEFcPmfFTjpmFaqvfj7qiP1R1Kn4VDqwZtBWdhSsirJE1ysFCf3NVX9YGqM4Yrsthr3X7nEjQ4962n2uk",
  "key8": "3ZmknTrMRj1wud1XRMNirfS9TfztXKrHcfQ9tGsZr8p5VUnw4itH6fsejbTVinHQ2mEY8oHcBP8n99v8gMKoh1eC",
  "key9": "4RwswEWPZ9bDUowXj45JY5CXRhjpxsHsKd9H2uU4VRktQqB4NcBkFJK24kZ71CGLgM5vV39n2VQChFE77Bz7PE1",
  "key10": "3HmrZEEZUwhP2CzSrUkgkpTzGcfQxxrQWX38aTf6yAVqtkQWDwxWJp9oBLtaBB5xumVkMGikiHmqnXc7ctAexKhP",
  "key11": "5YCQdprodiSeE8S4TsFRmEeU3EP9DykFhgLT8NBo4HaGENkWH6NrKm8pU6hNdK7FKPcQ4hcdRmVfFMAHAq4KuzZA",
  "key12": "3t9LGxxXT1m2BzkkEeoqPmisMdrTr8Qm8H1gRi73PPPH54x5ePgidCaFqUYnVv5Kirf35H4AiSCtf82YRGyb3q4g",
  "key13": "3JVUWTUFej8Drnfgi7MPCHQLwpdfrHXZy7HccPQNpMfkFUvykSCiNqq87bqCZEieS9JN4QqfS2TLZTkqrnALL14",
  "key14": "3n4qycc3thTj2k1JSrWD6L6VfUd4U9fkqhCagMQcX5YosqZsCido1PQ71KUgeCuWYkP9qAWCsiGjmKmmAAvM6RaQ",
  "key15": "5FUByHrjgHwhz74uSDLMmpxYSnoq3v9uHdESi8e5iYi258hqY7eLPXDj2gB31MoJycLg1j6mTn1Ut5g6ZCKx1FE8",
  "key16": "4MFn6tCtfz6uXuKDWJgZD4WUMdb6fqk3tEmb8858cXqJ857sgGoe4xJ1FMUJcw8Y7nHnSTZAuJVDBFkSsFBe3mgW",
  "key17": "4EDnMx9x5ZxNiWDwTbhbq1vQYAaHF5tUxJW8QPgLZ3fGQ5gM6dch3fVzQ2dkyb94Z8fteXiELo3xbxEXVrCptSwW",
  "key18": "4zwWnthBxAMqCgWHi5zfAAUSptsD7YxeSgTsqWw1WmSzug1VpA8PyvW5Dd5iDz5yQciPXc7aii49RmEU2VaZ8dLe",
  "key19": "3LXFTZmbqeJS4uuDGkeRiVzBcNSx5igVYfzAvLoqtMxtrcwsEjfRayKBigLnGtth2nPiwH2cXFEs8p8auAsdep3z",
  "key20": "64hiSUdY5pwREgMG2ZehPoeoy1RzYbuFFQgurYwTtw6p84PRuqwPLx6Vwhkj11jT31xfNUVSgvFhgvbmpBuwyhnA",
  "key21": "457aDdbv64W5DkE3pYdhheiW6wYYGEsU8Yxs61PEP6nBZfuLsGk1oxADuUTr3Q7HZ1xbRmezehMiUhkFW7t23mvv",
  "key22": "5opmxwixn9JhRohmCwCwPYD2PUqpxWtUFYSGym8QNFtdtN9K1FQ1kRbp5cxJK4avZSJBUm5TPtsSwtuKZ6YZHuPT",
  "key23": "291N7sQLMAQVWZtpvynCYVrtsMv2fNbPu6ExexGmVeJJ8mbzHGNcNZjQDUdXwvLi7MkTSca3N15EcUsZ5g1C2myG",
  "key24": "2eMxVytNXhjqKPhXQjsP4ZYeKH7UQv6iQoC8E2eaZzYUHsQNp71MvEb2gEar7HAjmyVfyknWzc5B3fd3LMZhqVRE",
  "key25": "64Mr2sfdhtAUi5Q8RZ81XC8TgD52kdMEyy8thyS8aAUEocsMCf7gXTGfiaUqfqDBrmjGWm8N8ivbFHVFusaj12tE",
  "key26": "ksJxKZiXVNNUfjuvqHE6Exi3nJPGQvjUjRRwvhnSeERVr3ycqNF6fWdSA5MkNV5fDMp18gj2Cs3fmv6jb68D9SJ",
  "key27": "2yhXvSsDwY85a2TnsX3y4Vg1xyRR7c9yb7ZfKaB568qhEhAUjHLo4G1q1GbmWbYNNJtgYgueAR4otAhPD2mw91R5",
  "key28": "patAqquaghLWaALaFTt6KTdKhAas49dUNmFpdwJryCmQCd1QLvMZqK4NJGLv2oBrnJTV4RJpJx2FTMaQvxWgbs5",
  "key29": "tP7TJw5g1Gk1PaCS4yCNhwGcEkMmm3UKF4j5sH16JxmEvzFYm4gCsH1o82wVD4VFfVWoJqrFvrCrGBk5LatpKMj",
  "key30": "58NrV8p8GxnHR5fcit3uq3qLXqMBHyPLDnVCghYW6AWkrvgVMcEFUpeW7U3Wz8n9wDJeJRGvMsAQZe3AYbUvCfqz",
  "key31": "nM72xknD2JnAdhccH8hx8kpfsbYiwKyQpLK5jBj8qzJNukLHfxzAr9PUCERejUwR2Jma6RvrY5riskMP8igAfuh",
  "key32": "ZP2YPii35k9HZkPrbnDYfALzBSTVXfqXtJXK1vLuiExkHw887TeNyFUyuYxsuhx91eZThW8ZiFNxUDNBDmceYUV",
  "key33": "2f4XoQM4ubDmENJUP7z4XLQfyTbas6osRBHXbiCSNDHmsW3FauNGCbGoB3kL5AiUTGofKEQ2UH1ofS8imteqX8q2",
  "key34": "3sTDnLgaztyJthNATLdy8bcnM6JTtRkU3HNm5MB7mUEAmkWH9UFBdE3DyRXUu9MfBz1MFj97GmPNPbxAFNWj1JBC",
  "key35": "3dTLRt2ioqfvDpE26SnkJ7AwVnXW8DAci7kQu94Zi9w5Q3QWEZXiHY7iMc9hDjJFEMGbLGYiG4siVrHwrrJdvZMJ",
  "key36": "P8iykM5FApzWfY9zsYqrXVQ9d4EhmoVNdXsmu8dCsGUutSyPSxYowMVbd4zrxxXnfDUgfHpM61BTpRGhFTHPTnK"
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
