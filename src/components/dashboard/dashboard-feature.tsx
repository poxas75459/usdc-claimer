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
    "5y633gH1pUKEPc947NyuRiaxSu1bi5nJBUWYD2imnyTYUDjnUypxcfkQ57kNVCL7EsWj74MjihKUpoNvywTqBN2J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Xw52pHNNoYPRQNKY2nJpcJ7j36CHnt9qef7ibn1BNwWvhRmcCu4FkwRdRWHqxTPHym3ZfjZY3hzUMhcVLUEhSjh",
  "key1": "59tgPNF3bXvDpYpuFEt3jG3vqktHdWrvz4nwYJBkPwU7WaLmumjMMtfVtfDhSDCvKDjD1yLUN45pKzWvWHg1bCDX",
  "key2": "2NLW4fkf8jsQbCrwohGNjgvZ5YHzTMwof4mBXipuzCsZoMxWmM6ZRqDJBKzvta5XziaM2ofqP3wpjwvswV62EXJQ",
  "key3": "5SksBMrohX6H3GKmAADvnovNkM7vAYSWFVb8Sjxd74yz6N9Vj7njw6mGRvFRzVhMWsZm3xNBRaemyMCwLfdKHAxD",
  "key4": "5HFz4vy53n2QhoMfCHbzq4E5j3USo3U2usTDxkdSYsjugbhB2mD2fJwUN48PHz3jjGmRh5AK86ipNXnaHJMqmLn5",
  "key5": "399bzHULDmw2YX9Gx5av7BeFqqX9iU12mtnMKVHosTvtQwPhRF33jCGTVHHqsi1J4fjDx9FtQjjaL5xpY22tzrAS",
  "key6": "3vUsLz56MfqQHYNY9HDt2fwPyiWghxGWfM265TerWANKS5UenDXTPzGGDuk1f41TouT8fNnvDQEiRhVqdoSJ5sNz",
  "key7": "5F2rZwxDtVFKuRjJbqMEoxdfZQuNzMHLHwNDKV8yDtsZRET99sSKb1NorN3hsfbRaqFdJfNksT6N6J5zXwL6h8HN",
  "key8": "438RvqHUewGZHjGfHWH1yBcRj4TXeZnLD2i6hJAcpX4hnPPc6VVhMMcpYgUbRNuwi73rHh5xecRt7gyN4Kbbt1Dm",
  "key9": "3nmWxCqkhPVCbowpkMZRMWXtFGoJeHgEbq7uaxgRzMszFeRtHuYzH6pu3pMQm2fJE8PUJVjkVcpxc4XYNyRtZnxY",
  "key10": "Cmj3MZ6ipiHFFnHw6tdk743xkoJJJZo92nu15RewSm67reSkVm62151dUvTfyhMBS8Pp1Uw29s6sjRV8Siw3zon",
  "key11": "4hEhGtwZKkkRpcQpr6k5tA1UCausG79Hv3jPKw3pLHFRyzowFcYno93je53YBXFtPceYYudt4Sm9TemTZwWGYX1z",
  "key12": "51ACJUKsNRrbHFVpk8PwQm5vDZAEQGJQ1Ak3ugzVPJBQ6wTR7UNTnZmNpxQjDxR4DwdgEWAezmRM5tVTHfncwG44",
  "key13": "4y1RuHjnQpCknnuxGSbaMZAK9Y5bVUi1u6mmahjKRb25ykJt4RrZHSMKHgn8KYBf6fB4rNA2TyYq2M3qhuWErKjg",
  "key14": "fSTvhUx8SW75ZEHhNdKCWUZv2pY62KAose88usbCKTad7jGdhxgwFHboffWcMEfM1kztJUAuGrwFrR3qnq2StmW",
  "key15": "4wyhw3hkqcTemhzRQQ95nCZ1sJ59W8eetW9Z3DmCc3NevoWX2t3LZUQqS2ZxPh5EPRexMTowPK8bdEJFukFecWBn",
  "key16": "MoFMgutwEMegf3dVH1L4onm3RnFafqh2cw9JK2SCwxRfUnKijUTS7WWFNcmyhAJzdcQEFC6YL4nmca6rJwvVULb",
  "key17": "5x7X4jtrbJzF5CfAkmdwBARSrbp7wDX4YMwZ7igDhNaQVUhERT45TiqzqdkXDfxswFDNd1bNzWtX3KVSWa9k8qUY",
  "key18": "2kQGYqHEHHCkorxFWCChLNH3kfpoZXbk38o9huMRmz3ueoi9nUixwYNstFfG97bf1ey83pi2m895bdVeM8AicuGL",
  "key19": "47MzEmhykerFKB5oaDN6Ufzipw83t6fojD9CNpFNQYb679JSXoLo2TWjksrcFgpW9BUahaps83V3cvAxUGZduXX4",
  "key20": "5DfGydHQC52ciQtRmfkpQZSNhCNrpGxehWi4p9ZEPgUzcXZibqjmy9b9RxmEc91ZHa7psd6cRdtGG2KjyZ8CMcpZ",
  "key21": "4iYVdHdaAgn1fMg6hTktzU3jf6SByprL3X6JX38kUXRhKywPXPwT9qp3ygngwoRoVb4y4JKp5RYYn4kqmq1qwikL",
  "key22": "2w3V56EdnaGD66Kgv7Pk4cJR3eczW8AnodJqG3P8uzSDEvaesHNw2MpxTUEsXexkLvjMWm7Fa7vSNJye1CFDhiNY",
  "key23": "2etwGe9AQTUfHAUshYDE6pnt1MU9xTBhaXVsqjhVyfANwqQ9KAA2RWEb2HM2oRHYqg4xKD9ZXXJFufpoRMof2ZNq",
  "key24": "2shwDBfC1KpHuub7vLEAs3m8x1zfSs62qZAAwWyxWMaDpFUkv1B6mJqnMQngxWqoYxScZc2JSJYQV4JHqvkAK4qN",
  "key25": "52KHxCuDspuehBJvjBdpCGwD7jWJGoSi2r9xga9oHVV3rKjKGptaiD3Q7icmLVNFKPVDJbGTzP46BWzp6SpEeEyY",
  "key26": "VfzQHBh7irHi49WtpT4Dpv2o658XiG9oBQe4izedkMo8YgNWZiE6biYH8GY1Rmmc87QKt66yyQBsiEpMXYMpBKW",
  "key27": "2b9nBLy51BXzJFWJihZfCbYuxFXXXjT7fUioiqT7k3PZrGDUmS8mRmjdi1jHnstZnmv464mi8DYxb3sU4ccrfu75",
  "key28": "27BqRqSYawABrv2Z5btJPKoyVV7NMvX72skayfjPCfvxT58JKxRKa2PQRVpuPyaAFBx8iQ1nen76tBVtR7tKREuv",
  "key29": "3ZEKtSg8JvhVxLHU2NYVGQXF4EvZwkZBGPSF4XKjjUw9d8kG3SkUujiTvMcw4UrJDn7x1xXEpok8tVaydeX2tELV",
  "key30": "2T7kYsKHRP6jxXTQ5nD3jNi5GdiG4cYz61wMjSU1V8KV36F1GULPaGGeF8eFgzh6HwV3FE98GHVftR9rTdfGTvKi",
  "key31": "5DxiuxkCCLYGxJ51ApDi8445oyLYRRZ2xsrcyX5TYn8u9VZxt3QiX7a8XZ5JFrrybkpZGECC1xT8xqzYNHb5DQCn",
  "key32": "2iuYKK3Ck2aVgkwgntejXc1HMPc3n1VSNVZNbtz1BigcBdHc8wXXckmTZbv77Gc9V4jWe4SUQmqdmwZwDmZk5p6Q",
  "key33": "61QGF3WqQXuGURju46XqYcdhD88X579WUQajMBjR2F3Mh9xJY6Z8ZJEV8v4qyTz4Lnnd7iFz6W6PbcEJpv4Qj24a",
  "key34": "38sKzM7DqShU4dw5M1RrVRWJDoXtNJZENY86UyHMkzth98Q7BqYNi5G6DRFqZY1o14aPEzTTkzpGMQuouiB6Evvc",
  "key35": "4rgkwZd9LLHsBhJQJuLhKUh9XP1UVzABNhr35TtJfZypf2ozYrXdi95KGTTwuYTRSdLrCCE9T5fXn3P1ywrzmpUf",
  "key36": "igymfcDcx8TbDnywBXRQFiiGeSA7LtP2Z8V88ZLYReh71LLpJBWgk29busxpJsLmNgSAntkN1MyD8ub5J8GLYoU",
  "key37": "2KZo4MvCkTjcQAFDMVgHt2ayxQUVZygvczA4MNXZPx9eHMj41hW7ASqWD4gMc4WpxZ7WCD26WeMQJBMnJbqNMr7P",
  "key38": "3XXgPRGWmwopZUNCXji3UZ7g6dUVSwUFy59u4ijHyPM7uSy5opAFmzQmZ64WTVhb6RgNxKbqXDwvS6J5X6YK3z6m",
  "key39": "4pc9kjiUFK5x313Z43AvKgk395ELrGAy87isi38aPQzBBuo42HTzGcjAeiNYcMDJZRDNvZZUBNmCyiT9zLV16ktB",
  "key40": "3dh26c3F9podGm1fotDQ6ThepxvV2UYXhKekXsgZjKev3MzyDMUcDhsJtv4HGB1d97gw2veT9WKQaoW6PwmzCVy3",
  "key41": "5H2WdLTZxzqywcMSRhNLK7dFokAUDu8eZXo96MU5ra7ueZqtynrqt6qGpUhdpNFcsLxL1CGYhQiAqcVyyegfUXfG"
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
