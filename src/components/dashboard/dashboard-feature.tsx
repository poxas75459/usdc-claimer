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
    "2qFsz33YkE14CPg72Y4yX1jzE6kuEHEvs6gz5P3tLwFzTVZzheQAe7G4nRpF2Nvsv2rsdp88ewKdgw67LR18eos2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3W9rvU3h61W6ERZ9xqBhCD5nWNbVDnPVp6DRuGacqT9Npa9Zx8x82TphD9Q2kBCoWeLZirXXWZHMaZGcNbdNqRk8",
  "key1": "42S5EUwr7gKuXFqpajP67DhsZi9tjBSe1S3HFuH4biE3Cc5ym49KbnCQAJo2KhMyVFuX2ay4LjKE9bNDXiActR79",
  "key2": "2z8ZKdupLNvHjJegAkPDvxzotRVJQ2bVoLTSWEjvxbepeGGuSYm345WrMrMbyZWdXT9f6bigN92eZeps2dnG9Rkf",
  "key3": "3AppvPCogfL8CrqA6uBQySC6j2NADGCkcGdTsmSgfqKVgGxfC5JRewwoAhMmsiJFcHcJ37JezBFA7MbmwvokSYwU",
  "key4": "2BdGxGKjxLXBLTTf7tx2TEsnZLtqDKVyjy44AqMmjbo1PRCgJFEssSYcgNKR4Uxy5goEXkb2MPfxMYMzHMB6YPRL",
  "key5": "2fbwS7BP6ZLCymZ7FkVDJpyPMBX2JSTaQLhg8e2wryvGN2z1BcexomWiNa7LmwuVKpVBKJU3PwYMS7Y8zP8P4pop",
  "key6": "2tXo2WRhgyTC6PWsb38hjaNfhBjYL6bmLK7CBmwp8epxa4EKaWptRRLqDWFJjcdgKvByxQrpn4ZMgM3ieigmyDLW",
  "key7": "2m1qbHxLSkKgAcoHeBpkn3qgq8uvetthS9zPqP9MVsNtuC5Ko3uxjQ1LsRRmd5iP987woihMxWs5Stm7JNk1gehR",
  "key8": "62Sm16cuQaSUbf2752vtrGydKS9KBKh5p3fJLvbEJjXn1icKEpB3K25xVjDyPmoRsfdtukiDkRPxKcUFf5oKE9Pe",
  "key9": "5Ccmoj2gCAzWPJxq9pku1BCkQkFs4hJgJLvfuqh9eFBn3AMSbEd9BUVSjnTigZJwqAVxMyj8vCTFfh6Bfyn2KxNf",
  "key10": "3nnnEFEsnYctCEf9DoztHfbmThokxSj6zYKV3QBgnz9WjhLjichcRkqjH3XDKuSw1zd3s6ZRv4VQbbUEGsSik8QY",
  "key11": "5AraUu5U1nWFaP5sy6L7wNc4A1ziWKQ5xmrbx5AiFu5wfc61oFAwbswNRugtnkdaLMy6JUVPmHzG1p2swwASUvbo",
  "key12": "kzFsrgv7W4nWuuqVJTEzC6nVpg2P1ub2xm8LqaemsnwDYDNqEHhDtEAMjdNQ6uAWugCWQM31SSiXX4uE8DpfE8M",
  "key13": "Wgh1cLcvE95qYxw8JTNwvJXrWK75dVBxVnKgKiKhdjaJ7ngD1x6aXpEXKRZxRCYpZDCiMPym5QtYEDP3ixDJnAM",
  "key14": "2hfG7QmZsCsDU6zTgf6rs1dqpzNrZr8dbsxWEiZ66JvABS4LMmMX3QhpxTUJVLXxNo3yXMnBc7KyEN7cvpPnxMtc",
  "key15": "646b9SwWzgq4whYrPdeyG6gHP6NqpdgmUtphLno8dMfUAaYZHtuD1EsZpagUqNJYPrbRuo4qAkVFMLzpB1VdeMQp",
  "key16": "36eeTi2zDeWHZGGSxznzEdUaBxZoGQfM8M92WDhJMufLhUu81kK8cQaERjxgcN8hTPrKFVVBQXGNov55N3wFHvHq",
  "key17": "9VPfV12kmWA9UErXXgZunzEpx2fXhCqydgUU29yqW4gCnT1Dd3yRVC3x361nd3RDhA4TZNbjpfxBk2LgmogdBZc",
  "key18": "2KzMq3t5amF273i2LjiNz7WwgPjFpGpJ9drxWr2A5GkN4fEAN5NjevoTAf46KR7ZajMFhtT59ZS5bNJxoPEUjKYv",
  "key19": "5sinTh9kCf6zWJSHjogtUNQvc2SeAiUgTfbPmawUi7WDc32G1RF9ASUZthdQBq2adVf2FFQH7XyfanoVEDdAiyPi",
  "key20": "21TLez3hC9bhGmHSvC5aRescnkUJgjy47zwQkD77w2bVWSBEd4KSRRJyq6K5pgomUDUtZMwGKiKQpHnj1r4pJw2P",
  "key21": "B1bysno6aGijubiYNNmaX7TZyZyb5PscnyM5JJBM1hSWZ27zZcNf4LEWnDmwFaPS8VMgrAidQoMsNTMH72cNTqm",
  "key22": "G46fEkgTmp5RfyeWqNHTB7toLGYQE3v8Gi8sprHt3jf6yJ4hDVree1x7HQc4tsG3znyZbyAaeRays1QXbQMXeN8",
  "key23": "4Bi4Q7ksN2QRivz3n8hfaToZep89ysLAaSC3Cja4KvBMdLt6dBoUy4yWXirQxPk9dChR12sTTKEGBWsRX92EyDBX",
  "key24": "sQMbCoHwDpsKzntpyj7sbNR1x4gcGv4FZWS41Y22xuxKDQLpH4dUJZ9oQH29WBUDTz1sM1BktP9tGHZ5DQ3pU4o",
  "key25": "4kDXV4NYHjUEmsuLzhYwqC9y9qoVKW2g64cpQYc4kW5W1uo218vETWZQRbBXJiCkLY74oW2Ma23SqqXGtdvUFYzi",
  "key26": "3sM3gACTBKyTrtSFba7u9vpHgmQE9JdwDfAqnuZ2QGqH56tBWpr1nS5oSx5s6p7dWhkdSt2UX6qiqEvsabBGCSc4",
  "key27": "24fz7JgXZGT7m5RArjgXQb85hWwGXNyU6BeJ6WJPwdC6oCsv5jXDN8AQVhzRNcPEupREPJEjw4EYUt3zfUJ4PGQp",
  "key28": "4L76ZpuL5ZkUjvH67AuLMC3JqdBGe2MRLo8KRLQG9i5n6WQdDVxSKyNBeciHTaFnds2H5ERDLU6HbVE5qLatpAwg",
  "key29": "27uXZy4BWEPDNcCWZrXjckWVE8MJRz72E4eV5qusrWb2AGtqBMdwSFZUkKM2qNWvySQy7W2Wjy3c8m3fSjivtiqG",
  "key30": "5xdAKPxSD5CJyxE7geE6s72k87hDFWRvy2eqA8DzdsZtbko6i1YMZ98b9UxkxWSCNiabVEPCkNnKAkE3DBoXV1Ry",
  "key31": "3pAkjh39VfuV8yP6nCeFoPEwouxmA9EMCpRegvnRYaCj26YQdix6tPMhiVSFa9cEiKbf1qKpS1dd2cqpavQ45MiH",
  "key32": "2apqAq6F1w5nesRdzJJkN3qEJxDnXFfXg3JZBNgQq2EyaiUSw3S1SFYQdKS8FXGBV5YXnwpjcnZdtmvf8ohqszk9",
  "key33": "2yiX5B6hnECyiK3TSxUiFhLck7HEa9NCvCWXBw8Q5hwVQ66rci8VVngmWYuC4wn1ihu1xVvpH39ak7kcYt362RFL",
  "key34": "EWq2m8ZxYeCPbJKy85L9Trgm1RgFwREUJsrvUrMGy6ZzcSXbxvFDFEjHjN4SgU4WcdKD278FzgXwrZg3Usp6vAh"
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
