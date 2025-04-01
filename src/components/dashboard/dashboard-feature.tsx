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
    "5HgFTzzww4mHW2zJ7gD8rJskNqvn1JWmjpFtZudjMA7mNKVasbfE9YZGYy1iBRpCuqrHRWLNdrGebZFjVffbgbMY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24gZELrPXLr2izCLLjRh9VDkERtdnZi2W6KxTZRFx2YwgXunoMag1dWiSYnsexk3pir39VeuU7E9aHX9pvScKRRp",
  "key1": "45hTw2Y5rymnsbu8K4YEYrQsHeZ9u49pi463kmati1PkEpgXZh8ayZLN3Tdg5JY53fxyzhEsT1uyc3df25dBD4oQ",
  "key2": "5NrWJYxqFnbM6p8MH44bvynvjNFWfmuPhrVAWAHmP9iYg2u8HpaYL8ENvyTDY872MzeVADxs8xKVEvo2EpeKGUSr",
  "key3": "7PcxXfVgKu9bU2F7E35BfXPXH9o9Jo5BWa3GdZbmPyrRV3iBesGQ3nnoyVb7koHgwGyDDdak1rrAsafrbHLcYet",
  "key4": "5QFVFPDU1LgKZ4BoFjrgGiS5VVSsGL5bxvM27vrQwCBKmhm1cZGyeBn5b8dKm3UZqdVUbhknY8QvdnS3GBVweda1",
  "key5": "VnqLm8nesDuksdmAYuziutbi91SEHWbP9kS6HevGUGuEPVhPPjf4BHm2M7giHmenD4vBFHWXfLjDmfn5HJEVxEB",
  "key6": "3dpqgTgfS7dqQTqZor1BRNGzR8k2efu4VwhgFSh9Bpo7JXa6FeYwhWE4V3w7vq8bWM1AkQwAragDqbiqR7LBjk3z",
  "key7": "4bWd5FEEJhPR4sEgSqiiyE1Tvd1vK6zwxQ1HAAucN1ic7q4ytNDVPznWe2s41NhmUPNVKAWvYa6MabcjMvbRZS63",
  "key8": "61KYRJRKV9TbXU26ptNQGkWY9Ytfcnj3fLn2WYseBvMMqHSrNEoW3DgzeuNo97LRbJ8WnrGt7y1zYAzsE3hy5KW8",
  "key9": "3EKnwGuNVjb7g7VtmZvPQcBkNMrfwBn4PgYi4geybmX7DutFgiMR6DF1eUTgUECUnTXu1roJqJqB1pKMrBY9FpLD",
  "key10": "3bXELz8L8h152NwRQpQ5eEBsL5Xdi4mBksMkh2fTW6Meg25c3aAtAvSu59j5C691VcGu6GcvoL5QxFQFWVGGWc8s",
  "key11": "2UYjDTbnuw2DPHBj5Z63AWL4UT2814y6boXDGWnJfg3wA6b8PxwFg1zYSehzqCiHcrQty5PPZXbFxefVZaxfdQ7T",
  "key12": "58GjVFsNTKnQvrLUotdqRQQWH1Z9LyWLPNoa2Qy3G8mAP5e6MjJ6UZeNtWNBvfWkAvGDAx5phdmVJqPMYz8t5eV",
  "key13": "3rW1NoHCt5XLhDqvJqivQVVnRwrew51AFMPznokn6P5RJ23N4dpgoC1Dno4emCUbSmDKs6Ho3iWPFfaqSSgV2xFF",
  "key14": "5pjfmeiWKT7nHKnGx1XBRbn7RnFydPGQUoQpp32xYtui8W31bNnJYSxx6HBAAZKe4y7DZGxDLy17Rc276J1qWGX2",
  "key15": "5mtMnT7oxCvg792iknME6q4ynEZu3M9eEjaqmkiSXUKK2gKSGX1usFAgG7mVSZH1pXt3Wg5LWBoAGEf2EJUq94PC",
  "key16": "4Ahd4sXCS3JPFC4g2Et1wdk73o4HsAgnXPV6AemPfEhx2y23gJ7Qop8B4Lsn7qENiUWyKiRGeaiuuwZs7PHN9CWq",
  "key17": "5LAbixFT2aBJ4ppjSs2FESr7c3B2NBbrgdAC5MtKgK6ChHQhnDDBtPf4jopmp2RiTkgNNtRWjB9oqiADGB3pcm3",
  "key18": "4KKnKMrmkfKJ1KsxDSngmY2JjMKE5Tiu4A3tvddPPKuBejdvxnPpzfEsAZmhtQfHx5yJniSeWjApq9rAbUHQCvrN",
  "key19": "4ePuq6WPvkCALasD6gTkQuKFm3x1JMSLkCoaYHk1dVuR4kYcpv882tAXE2VgGiCHoAXXiqWTkYM4xGFuhgX8NDgT",
  "key20": "2RmNKzoLDFysmENHhEAY83nHTP3Qicm1KB8FTjPYKnpwg2hQZVdBhvKsPQ97AzLatzRmjUQv7HKbgwXxJefVaLMm",
  "key21": "5JuQrczvBMnf8gN6tgwMU523MmCw2mnk2S1PLh2nrayJXr4HuuzHSZy5feVaXswUnc71w2nG1HLkNyUcUpRHNcXn",
  "key22": "4pDeQEXWK7jcfx8DNxoNWdEE2R4vawRtdbthZCTqHeTiHM6V5TGhAcoEPCRGoA7NyKZFrXfHLynSGRE6oetv56GT",
  "key23": "2oNg9H5AzN5gQXQe4gxvdHE5TJGYGoYUSgKWxt3vgGBsoXn2RFSdJa8dTYHnffqFR2epVLXPEGj3e8BdWSTr2PPz",
  "key24": "3B1Qck1B3FS2GwsM8xs8dU99y1ique5W9LyN8BCmh67RrAq5J57z378XcbPD8frUG4LudiCF4iRYECR4r88vu9WU",
  "key25": "66meBZ1c7L1itQCADedjXPA1WhWNQ9HaxRiYLtWo6nfyYcrsxemaG3MnyDhvim2x8JBCmZTaHKCYwCp6LM8u9Q8Y",
  "key26": "2qZJr3kYS3WhgyTb93DzwMiupEPE2bGV2BM8y5UwZpDS9B3E3xQjftPiP34uP77xDqHDVkqzKgMoo1cRsxeSxVZN",
  "key27": "4iWofRyAeKTSWPKPAgdkxkgVWqvK3yMZHumnYWs4Pv5T6qoVBz4NgTz3CgKfjrAGQDwiLhThE5REB9Y3xaDhoqpq",
  "key28": "3Ry333QxtVGgY5as4seUsmiENPmCerUurNDcurY8vEVTMBjna5mkKujW8afAAvjpFLKnYuF1JCSAC6v8U1CYcHoq",
  "key29": "b4nnt3DqzFuNN2T9aqi7fmeSVY7BxwakCPQt8mwV4y86CT2Gwj1g5dVaGjHrjd43we4DT8xnQ2xJWcv1Htpx3hB",
  "key30": "n94eXGGLqaymmhkN3sJmtB5hjL1CQ9u8jPwCMChqVwnvC62qkveznkiQV9ZaeephbGSXxQjudn4T3gQQZRCeF7F",
  "key31": "5PxEZGpQy6i6ywnZUoat9i1erZ4hrTiEVWXWm7ZtYHJoasbTgtFYK7kodUyE6gccFF66TJKW5vfvnyXDfpxqeeAr"
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
