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
    "439dDkjTquDWtNHpjiZN5ND39GCx9AippjB1VNtBN7eMRWQcYJVQ7a263ZeVanr3Ae6coSHHJHCqLnAazp7hvakM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ttR3wjCzGDPsRPThAcETE8oSJ1mMxBSb3JZvoe7ntDGVfpKAhJ4roJojCaaX2zKQ4tLdqmTBRJyyd9Tjnb5GCp9",
  "key1": "4fLaCkayqDS4eF5yiu8tybXDojQf2iFD2xhoHy4imwvUXSfyVZVTfuav5eT3C3cqA9gCtRxp6x9ia1ABBcSPVqi",
  "key2": "4aM3AkYXEcyBT6T7u6sj6RXNgk8ufa7faGi5frt7BQiiLSCYVbnSRGWw9MPc2yit2ghKnwduYpfzh21hbvGPuNdp",
  "key3": "3gVavFBTRPYy55K6GJC1ai4A1bzukR67GL6q1hiBCSApyHDuqAkhm2djgCsA8iPX93FBGW39NWLUD6b4LUkpcHiF",
  "key4": "3jowcdhSZG1nk7U4qKurSjcM41RZ7zFXgJU2MspzqZVzTFVhZecBP3GnYcWkPqSbQPiL5DPiXL4sm1pw6Fi3e3sT",
  "key5": "3S3z4SqaCwjLeftgvkaW8QAEo3McVzmBtLhx84sDm73nzcLmDFQzDmEa8tTsew2CDcyyCbXE4fYeB4mntKit8D1k",
  "key6": "2HEARF3kBwXTCdGVdUVEAsHj5VGFztivMZUzdNpprMNR7yxPRcEVpVSosFcwNjFuw3GW7qUmDpSseZNrF4Qk22yv",
  "key7": "2V5i6BwxgjwvkbV9fDgyvuNJLUzDmsAvtx9HWoHdTXpHoaan52shp4TFSowyfSBc5LdMSJQmtQ6MekcdPCwTMsGz",
  "key8": "uGRbBxzKUsPypdzsFzo854FuCVMUtaNak942SmQhjtRFbicDaVcL9txmVMFXKLKcSRrDZwzPv1ThpKzVJmiGj8r",
  "key9": "HLke1XVWTuz3b7XcTFhbdkxACvpoGFXeztxbiCFWS3qSsvorAq1iuBuF8HNCYhtExFJJW5jHLhB6C45sMYmwCJ3",
  "key10": "5neWYpmxRhgdfEMqxKsrdSc1gHA3bUFAHGRWRXfUTKXfxQshfX1zLMgEpPzPxn5wEgo2tyNTNUjFbopbTHS6VAdg",
  "key11": "41GpDgExHSP9dUKV7UwqmuHN54FJ6fgATjCVjoWS7tX1WKprmDsut9eJW7ekNwihBqEUJHnvMMBomq3rPdBxwqzQ",
  "key12": "2Wphm2eC5ZbmuWqdeoTqUssXtozfmFSkBRuRdUyN8rfALaVffUBTLqjPo5Dnr1ZzKvE4F8hjvnTs4kWPeroANX29",
  "key13": "5KWsG4KB92VohHrZ5inyTvdzrGFNjcfJuLbjoNDUeLBCMRfJR1ZgQN5mLgakptMqMYvQEoz5xBFKQKxkZWxfjjy9",
  "key14": "33uywNHYf3LTnpVwWjjaKtsuAGhcjNTqDFgazeLz1DBaBaoTEXpGRbBx6okY6KfXDvE8HjFM4BP3NULuww4UvimE",
  "key15": "goztggciJKFjCWz94r7tyTmgqchXGAqGYPoF37hfzzpauyzTzoyBaAbYuTBu2aHqxGAgmYuuMRN7w5bLXww7tNy",
  "key16": "53tjmjxFHwF42DSxoPMAd4yA4CByDGewLuEHvhrJh4Tq2s6uJwK2CabuLAbdvBJ4sfjjXATkBP455pZ864z2yY9g",
  "key17": "5yqHcUjsJg8TvR8HsEerQjV1owU48goBE8GFXQTYTV7x3ghYkbfi3vinPg94BS6iuUJF2VCWG3qjFvgzNzXLSb1y",
  "key18": "2ucpQBYujnUcBip4qHd2VAzFgWE5jhwmK62gZfNQwYcW5GePoJaqrHbqnQ4RmqBKjEydtFDEKmUKS1e8GMh3UB1X",
  "key19": "2nk74JrfQ2V78V9yvqn9VFkdRWnSiNZfQNVFBN1cmyTs572PgTQuYpFDx2cXU1A7FyAJd6EJLBST4QYQKuLFQB8d",
  "key20": "9dWDg8jEzMKCUSzY7N43xiUG8R9EoQZRyXWVxczNNFP3B52n1iyz1mpKKy2R3hzrj1wWJbqw9Cvrrx6ySGH4Zu9",
  "key21": "DEiqiekETRhRxTyxCGUhBZCCRCuHoorZv7rQkJQgFNr46Z6fRaw44qBWXTzapB5RQz7jmtnATby6xWsWo7bSo5x",
  "key22": "3yGuobxX98tVrTM3LhyhdsNv4Md6qvd2Fj1preqFYH8WdVdv3ynHFzdgnFj69ZMBF2RdS8xCA3496n3EopspxeYB",
  "key23": "WZXe1NUpD5yvEwX4TUQGbKJUBeJHV15LEStR9yUasRXGJf65GPikJH2b7rCjE9FhbFYYd2vMKEiqRaJcnAFaoKy",
  "key24": "47gJJdZx2GHEUvfMWnQKdWkkRkGwjAWj3261LcSeS3wRxxZSkrosRnDwtkH1U3CGrzNh3QhqqxCBac87dqSWyLZi",
  "key25": "4gXhbUj7F2E8xesL2nvisMe9qQm7m6o9mSPeRuc5ffDDU9ouLuna4akKpLDo5kGTLcN4ZHwj8ZDqqK8yFHz1VizJ",
  "key26": "26p5i5ucp7U5v2CfAnodrmh2ZLWwp4aNG9KTXkJqd7VokEenHuz2LAB8J78m7BygPn7wUfZfKDGMr7hj1pYDpJEr",
  "key27": "Xg4BMKS1VZZjNEbp3VRgMSN4kEZPgj8yML9jpjDYfQC7QyhcPA8xDf7qLFQ4W2j5W2WNpugqwKi1h3XD7aWYoe6",
  "key28": "3rn9XbytxydoQeHCvxA7EsGHPv9pb6AmN9ydMQkJqwDH8mtMX7JiA7KAxtpZnpkhxvXZhJqo4nPPSjfyDRnGw3Qz",
  "key29": "3FC43a8DPMrbznHmYwhomMqXaWhM9MqofWD8LsK21EAk1GHN5ZmHQGCj94vmJNe7m7ohwAUmvVSUrbFRNBuMVh1Y",
  "key30": "4JghhXtqjR76RGaQLUBSyaYAXsjfqTK2nebzWv4JtZv51341Rf8GQMH8aNYASDzi7MNutn59nfSgfW149v3WqV6Z",
  "key31": "hPM4EP4xWKoKnrqBB2GfJFHKXj9r2sZfKXmHWeMThPA6Vu13ncuygmKnHSMzy9pu12NnsU7NP7rTk7DFhYbwTVk",
  "key32": "2ySfUNqix7uC8LCmmnk66vRaN1rL8mhwzkGZWCGMKDYmKMFUcjQ38QAzhXoCAZyTZ4BeS7uTSDpzrgLYbEBiKPqk",
  "key33": "63KLmKa1L7vFPzrwrktxUpcdnawBRAa7tRj1cqLvXbK5J3oruuWLsAPtsJsnhuTuWuMUN7x6gdMwrmgrFtUPX8FD",
  "key34": "3yL9nHk7rZpoecw5m93mjbBELMg4YGZjEJ8N463QZFuPoATZKCGb3R8k1V8FU9GANUAcVFuLcfMZX36jeqyQVbg5",
  "key35": "2nqvQgbwWauuyYEVweQQRsS1Sv2rqfT5WKR5ndPb5KuYKcGPRAMYQSbaFXSXJhVPFiYBo5GLq6U5MGnqGNYAqYXA",
  "key36": "4k7B4WskorACtAABAbBtkdmyPE5C6X5Hq9jCMGUFKxq1frFsEMfWqoUmCZDenxJVCCSmZ4q7HdGkNwkbLPB4rUdC",
  "key37": "3wfEk5Upgmk7hNBW96hqB4MgKPHbw53fC2uDdmiG97YqopHyCkEcS3K9uECTGgecXiAwL1SKVW88YoPgTmwanuf",
  "key38": "4vHgFFjrNV1G8u4crM5vXmDSGaP66xszF2qwtuCjFiyGK17s6bwyLxop3GnGtoPUsXFN4peQHWFTdZF87KFHuLze",
  "key39": "3sFFtGWvp8rdCJACfAvg2fTQ9YTyM7QxZFCfKQdGRXmNKQdMgvyMA4TcoW5osCCSHwuWZzth5nFePguTDKsKAf62",
  "key40": "2uARBYKqhPE1ZEWRLMJh3MkHfKy53M83MNTLVSKqEKaWnFReriMahQvEFjxpDGNPUW3EUTLm5DQN3wD6fh9iJCJ9",
  "key41": "4qxgwEjYKUkakajQ9XXoGN1FNAK4HLBBdJuxambfZ54kx57uiVCszXwaLy4E66KhQg8qtNU3LdwdviMe3qdiJKTY",
  "key42": "3geVLUiFVjKSCAwLqHNjWKzHpGfqg5eXZozhrCFxZ7D6odbGanP4YuDA2wCzuFZe1MmePLr8YwGMWDVpLgCqGFpB"
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
