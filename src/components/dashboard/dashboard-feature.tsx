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
    "3h2sZrppyokzMD7t9FbBQA6yNSCdpgvTszYrJ5FFtUMGLnQTv64sMt6P9iNMecmZbhqK5V5piNM5YMCiu3LVb9iG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Uz9jb239qgAQcYBxNFYEwmhd8qeGtWjmRebta4x2RYGLKTM8rQdfNBX6huE5Nz53RqQdHvu89KggbkJJP5qkiSN",
  "key1": "2Af3ZFZYtjgd5sz34ZwqqAF9w7zseN1owJ3B1m6ihkUTPcTzYvFkT3pwEjC5EZqw6p6aCYBh7NjXdFSJ5hzC3De9",
  "key2": "4aHX9jTpgsGSgyD5DtCPinJLCkRUsHBpi9vY4U53zvSsFWzHgUuUMJxMbt8vueqchbTbjnh8keWxbAsqcqmneVBp",
  "key3": "1xKiLJoo5VrkQvj4Dj1xEabkvjaryrQ8Qbapc75kXJGpuyxG7ukssXRX4AC2HGG7rzVErKeXj2CgaTvppPtwmAh",
  "key4": "26bTEfvuXFaBCx44dqZxMjEZkRG6Qc5NcMpvrFReDjaXMXPBeXNQeLdExjMCRqD6SPSbwaaC13ENAirwuB6E6NPy",
  "key5": "4Es5T2DAKqo5oACLRMqANPipm8gKWSMVmE1vYpeJbjpvTFPWUmXvRo22AwBLEQXmuLQPzsaAgbLp6tZTJyntv9VZ",
  "key6": "246JNpTH4JCm2WLieqvhknvT8BAVwJQfr2A36JZNp71vT1kQcpdgvg8KD8wPyBScMvkMEPWgn2sZf7vposBVMJ78",
  "key7": "5YtiNBUFhRaw2rCP7t2Qb6s4JBMK6wgWyiKxb5N66yQjcKQ1P3RXKJsfrFuKj9oXLCU6tzNqeTqPN7adrssUxmnD",
  "key8": "2mRb5TrX6AjgLy4ewA5h75HVPK8HxMnSpK3nzhXgH8VhVKtR5JVHqFvtBj8WoufRiyokX6xGNn4aL8Z1cHn87cxS",
  "key9": "3rTLVPNPj2q3yNuM2TaaCw9aKSvr5rArGC3WkoL718nwxH9oLt2zouxjJLiAPQjysCmnNptS7zKvfcucmuuTJnoC",
  "key10": "5ZUMT6J4TdeWEWXFfEk7yW2YCi2WBy6WfvAA1jkQVMkM8qgR3Rw54EtiENaxXJR2edTDCqa7bAMyDbZDNjasQZke",
  "key11": "4e8AAufufaRdkzoMfseodJTMMk6MfqeFS6vSmsV6iJXbYmQpPu6uDYyQDv8JTaDUyQ145tUc8N1h1En1wLA8f9eD",
  "key12": "2rC8LmG8kAi4SdaVcVk1xbYNVrpHRyMMVpHzmG82WE3CLDFdT7koTZCpq2L8MUVy3hKadEiWWD6k5TPqwgM2bTXr",
  "key13": "5HrWaeCf4fs2kLdKae3pSFfSBPVe438UtNwMyYXf6wsXqZuvjhKwX37HC2BJvgwjPcen6CYLV1w7ZoMMEpkgNuNG",
  "key14": "1WgQvzcb8MALKUHJPnfSe7wEMAqNcut2o5XBNGB6r8XCwcpaS4Ah3eHS3MCEBmLr7S2ojfT3yNsp5ULo7jAWZth",
  "key15": "61U1Ee2wVXBQdFPSRCZqe1BVbpxXmstRPT7px2rL6hKLXSTuFBQfnL5snvJuvKXeVbhzee84c1B1HNYcsbRLCyhM",
  "key16": "4DHD8pczw1V5xFLfqnWHvrCdTCXXPWmGo8X6wZixrzZUJo8YRxkh9U2KAFbou3zdKGARuyZ2CQWSdjuFYkzbEvUm",
  "key17": "3AVFwdJwX2YhCCB1AJ5spGNdUta3yXYr8cusAJckYHsxs8vrFp58nbjaDpPpAUvo87Ay1B6iV6LJLsffLFa2cBzh",
  "key18": "W52fezfBbYbRQjnkTCCGEfJJDmEHD2xLa7WVA3XUcFa57h4zutH7rdDkYP4DLqDVEb8QExWya3Vd25Fbzb2rZJA",
  "key19": "YPqhMYctNbSYB229viHeBvCHPeQw1XXKPFvD21Q9ydoayhTpqCT3S8LsmUaRaaEfZsLCSxDkjR6KaUc3QrEZqqr",
  "key20": "52kyVUc2AZKNhMVs4BRKAAYdpXV5Tb42LYF97LQSkRF7sr4bNKHsBfytkMGLDkGQyZnYJaCtJQDWn4YSd6rbMyan",
  "key21": "2PEoPkC75XhrCLWEHVWriSNjyz89uWGKDuUGCbfLuUZaaDhtAJsKntNC8BeuU8MhRGU9oY13HB4rtFTJdxF7BXsp",
  "key22": "2vHXLhmAo78r6sdUZfcALH1aeD2HjQiePaSJECtPxk9o54PLtLbf6mDtu5tSXB2BSCyqH22C8hQ6kWjuTkXUAanT",
  "key23": "355myoP26VGDYhsZ6UQtvrk3Wz3jQGqzNGqqJMpJGFupaS5VFQRqwcZpNCE5s14Kc6MTqZg3H3bejpi4iyxSwZiY",
  "key24": "5AGYXJ5bTbFJtcsCfkFyc9mbXVfauctgjWBdA1JJ4KCQ8mFDYQ6bBFRqkMooxfsnky1L59m4xvdVZ1W1eNKkeiCX",
  "key25": "4MeK4fZKVDHxH3eeC1RFEqKbNWz413pBDfNq5Mf9qRR48nogRtLiFSbAHmhkFKus74AuDR2ED1hDZbYeNsMbAt2x",
  "key26": "5GDsXGLgWZYsyNDaUdzmpLiFneve73CDhTuSnDB4KVbtTo1csEgphrY6peUZzKuSVAE8kpkJJmhW1iayayr3XCXi",
  "key27": "2bn3Dsc5WpD2zmoE3J3713sU8UWURqJyXB5zLojH3P3VKD1MKGQ1v7F1v86HqdzQJaLkdRVRg1ns92kpgkBShcHM",
  "key28": "2knL3kWbFJfrnFWvALQVbbC5Hbuw1MQaHoumzk7omFAmP8ATgcZyrt9Eac4swbidL4aDvM9fccMsru5YWaBVSk3C",
  "key29": "3oyg9S1Q5hcHkxc22zszNjdAtzjSj3Cbwx8j3wN47nqw4T8NuwCMZKcMNjDE2x2j9spNgySWbyrptCjcWQKtc9GH",
  "key30": "5DGNsi3kVPLwfBbSo2cn5zY1qR6M1Ernkr3LYub3vrLossYCqVoWnKePWrCv2114hDf41162Bfi2Jm4nCWAP53b9",
  "key31": "72yYdJZK7wXRWhyMUHaYMRakhoYYbqw5poHCUfcSfymbbaiEMHK7hyTMuKo3ZgLDEzU5b86S19j5Eas3WoaxG68",
  "key32": "T3mMrSHtguG3mZqiBX5dnmi7kMwhesqn7puhdjvadHg72vGsAmdGg7bkNhYf7HpTM7frQDcSR2HhFiLjmu4R46w",
  "key33": "3J3a8DJjS1pvNNaiUcNUwN9DmbxqKB8kGvShd1X9xcPdp5bsTwi49LAg43AGW18cgXmPAPJ8PxvCvCfUb8DFGpZk",
  "key34": "4Xmfu88DvzHLrWyNawF58DmyDuVXZ9DS9WxGETC71aKhH86VNxKtvzroHhvDCkKp84XLnNdKk2sD1bWE9wyCJNCE"
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
