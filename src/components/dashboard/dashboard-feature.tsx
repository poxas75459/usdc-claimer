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
    "4QVyLMvfX7A52pAhohK2bWkT6wC6rxMwKBmxTMwfS8WynBZ8i1kCxPHH2oHUbu5nszWXsMpdVxHxZR8de7ENBX1z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uZkBAS26JV5LkcZybhQTdREYmSYvpsvQsoCWS59UgeczEbe1JF9XmHEX7yr4PUvsEKn6mRwfAAuoTacMDMqBXyq",
  "key1": "4m4BKSuL3dRfhvbuwMj3qcSMVtPDm5q7vtSF1JosPncGVm17divP52ijeKX3EJypvrR7r9aRcEPkpCFDedjTV1n4",
  "key2": "2Y7u9NY2ZGNtVyL5jKzd3niGscbeFPPhJcMSz2EwmCuofzkTxz5wJ581CYxpuBpmbqNh6K6kGYxhTPrC5YXLv51e",
  "key3": "3p71YeygyvDtofeg8jpcc97Pc5AJi4eiYTpPbA8j9D9wFvkTe3PZzuKzjubx4fRqChTnY8bDS3ijAaJfxTC7RHxJ",
  "key4": "wNe7xK1ipKjWFJVnJkX6MyC6vqhgL8FbcJbbAPTRexmPbxiUMhz8acYg88TeFfPArt3Debdx7iv473qvBdSY5TG",
  "key5": "4W4tgu5gnbWGy5RwGEzJjpbUjTRo7vkSQi54tUNkYu312mymFskQvn6jKjwH9KvxpUV97KvHEf9fGeYZ35CUNrDV",
  "key6": "dznfwym8VFVuqEiPv8pPhNgHu2SwRkUDrVR7NTHAqYnR96M5TAcLs3DmksbHzqEcCFyRfrPJZ8BZXpL8AiE5C58",
  "key7": "NA9wVasiJ5JkR9vXtbHxZ3tFx3FTaUMSmE9Rg4ENaS3jY1dRCwRjoBNU7Sy8SUY46Ns6zBf1YTTDwVKXfxJ8tkN",
  "key8": "49XeCq9HQCvHL9n73aBk5jLzNpy8MWmQyoCmEscpmsrhuD98JdnR6Kj9QAN8SfzSxaEmycNZv6ZKVHWyuGTFzT2n",
  "key9": "q2qyZogsLZvVxa8g2uLX2MfaGrUGG4qJta8c9cCSnPKEFxCQwZA9r6NNwrBYqedZSJDCxWNNHWRgtRR79HnMM2K",
  "key10": "4E4D9UZzu2YVU5pnZ5bvq9qBpfN5T94UstoejPQaTPEWtgqHoDYKbiuhQAZG6vJNB7xXm8sXVX4ocyDHmVuyZD3Z",
  "key11": "hnK8ZuHAkSRwzuijU8GFn2VdCDrko2CazamEwSaahdCukT6HXXdECiA1BwLQxnZYNAg6Qr8umnA9mpAjAUHfYUv",
  "key12": "4W4nkFRGz1TMAV6h9BRZyJtc99ormNx4Rg3PgVayQYjPdP94D5XrnpzzP12YMZPGXG3TZiXtJB3bFUVhSRizvkEM",
  "key13": "u278gd36FaetCGAXAziRFSfuqcugJSNSE2f8LZSUCxQtE9BL55SBvKqJgwXpReFmv4q8v1Nj2PYsb4gbPLSfat1",
  "key14": "2gRafq491pVFCuf9SwLK4tfzw7y3KQA8VZapitHQBRdNiN3AKMzRgJxSQUsTSnoNg5xcGah49DEVyJtq4KBZSLtq",
  "key15": "3XjPDB5v9x4m7eZ2TWNXHHPVQVUTR3bwSe2D9a9Cn8jTD3gZnTKo2f3okN8xTaNdYf5PwWbJz6zpo5taf3L7pKEh",
  "key16": "4y3EMKzJUoK2GVNGbD9MUc1xwM7ogfeCYbJwGqBDDpyweDfZ5nyCz6xcN1JUYHYthCsbYnEUJdyWCyrJnACXGWMi",
  "key17": "3XUpt3yryfjmuvpbMXAERv7EcYyw7M5P7y4WnX8tr8bKWswYiZYVXJckHP5g15KncpAUecgwB7vGkqMWaTH1XKRg",
  "key18": "3FwPDEmpniVB12FoHvxAWcaQfYVUEhQkpKGd3S5ZHBpqrnAwKtP9Ta2TagUdSmurNTV5HEd2oBixihvQ4BFJb88D",
  "key19": "4orX8hoRR4uG3Nd3Fm9Afs74mmX5iHrSL44cViUXn4ZrxuNyKShQShkVUrcfzcim7fXHuaR3X91YhnKn5sR9iBUW",
  "key20": "2JfXqURCUxNUf6UgPVMBeoBf9HTw9tRDSbgeaJ7Xvpk7bLBm27oceLXevHC1Hfc7HiSBsMNkqBdsgAMYcepLYwnT",
  "key21": "123URUHEAiVWH33xYcHtm5NoqbsHHWvA5L83pc31e6dnTosScXyNvh8aiuGzCnrWDj922j39Wxq3WjzYY9er97gJ",
  "key22": "2kmga8eaNCxxS2m8XTdnvu6xzURaSyZ76MitGZiBEgE7SxQMxya5TAsAnRNUexFnLDnWWjXXRL3HgLg7mqGRerYX",
  "key23": "4QAu875DvmLFuFjMvbK7W8hgdgY7fdavPGDMQvVBUUEii4NhHgPNQi18dwDMwZ23WEAesUmQh3yWJYQwu9FrVeh",
  "key24": "5v81XGruGAXjDkBhwLn5BWF5yGEJU5yyCi7g3taC3dhACekgxDgHTrQuiZqAzLNCddVNXKpHRrMvgBjShiLBwGn5",
  "key25": "55WyW7i5AX7WdUKpairHxfY67yAfU8khyeRFUTzoo6Kz8kArZSfQLKPD7yHmEQHZYXDLC4oyph5HVuozC5bst9w3",
  "key26": "2oHN2ZotgtDDsBkzBDt5GuB9UjT8LmaTjyEEkGXypEW1VdnzrJbTGtUukGk5szu9wq82mbBP78gaSGkDqz5xTFf1",
  "key27": "5pPSyz2YFCPhLR5DkUAqMtLXEdoUcvDhNiDcUd2KdW3F8J89GyKnhSqeRy1mvxTYjK73XwFnny6S8NZes7nThXd9",
  "key28": "TFuAbLAPdSjjChbKcTt38rWbw5T1xFYR5Dt3nWgtiExG3Nv642NCKrYwnhfULSSQkuKWFdQf3ez1zRsim5Lh3WW",
  "key29": "rb1Ac73Uebeo6EkLFmVQ2V1xCpqMdgnxBhJi78z6SUrXd4eiiZcSkwbtFkeyQMwQbqiyYZrf1zcJFKUA9bjspyk",
  "key30": "5hp4qfZiT9xuqHoS44yG1TfHdrwtnyCvoj8rvskiFkPp3wkFGoN8RmzjM8Vj6Kp1U8PH6CWBxL2HgMZySYMmqghd",
  "key31": "5khJDFDX8UAJ5tQBYjpVMqhXWfWgpwgWKNCGaAsF6cXbPJcNvtJbPcPhCKxiyTb3oAMS6vjZgHoqehtVig64B8gN",
  "key32": "4Sr9EJ1jJBPn6BKVYvTxsjRkpgeHxSHLMBrqBHFWN3vVjjRMMq3KYH8N3FcwHCdFSBdJW2azGBWHuuMtDkFGYM6b"
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
