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
    "3J7TqjSeBykaNckor5ZAkNiRfQYS6gNYQM3F2HCWYKycvu6b9bQkDiLfuAgrDhZbC261U94MyCErVJ7Ve7iHdvbh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36Zn2d12my24o8DkYnPNnzom8aRfBHS2LcVakkpdxR9rcQQ5Ywdzi5jQRCRn2kit6naSsuhN28gn6FHkRcddU6Mg",
  "key1": "4TBdGYKievmJsa1Tcrvo5MLk4zJW8j69GaG7XpMGsxoNTK9tQRb6HGRxDwr784mvYNB9VZreYSqwwPDXFW74maLV",
  "key2": "3CDAsPPaMh2W6ceJUti4iG5X4p9jKEmgtWxofH8vDWfjBWSa6z4d4aJiWyoLA8hyixWmWw2JXY5n5rjkZrvaRpXX",
  "key3": "3giUadbAZxFXAsvvtBtqz464kCmpbmrEL7jdpm5M44WWwVXNtBbbc6VaqJ4NMb1nUGoMd3U6omGJfqJCnD94FD5j",
  "key4": "51N9bf6EnipoiGt6mTrmcwnL17sgWcqBttEoP36YHoWXVPnEoa2ZsW3PvfESjSqtEZXs1wu7o3ZJvpYDBBcoD9Qk",
  "key5": "5oH11XpvmAYN9jDct6LRm9Cp42wHsVg9siPBBKsbfxSFLV3DK1bhhZAbRMMNNy2pj2KKsLz6nk9QBn8GBKrpYgJ5",
  "key6": "2HDYpNT2Ww7tXn89w6gZwYdNHe7CudNCTmn9JokP5tqfNKbJozowyeTRo9w3dkcPRavwkDph3Rrd386WMn35pweH",
  "key7": "2VEWHn2EabcFHZvaYdCtiMgYH8adbrmVYEkVoefKg3TdBdWfzUkgCw1L39CAXgtVEMD5vFW9kzY3MQGagz1FTeYr",
  "key8": "3Fs3iMr62ma8on21JZfPDthusNXgwZLD71Q12rYHRxxbdKZCUJR7FmzoVstTr8ZGHpuN9JMPS1oRfxriTt3xRH8u",
  "key9": "5ejn33yaxCJzhGnfxrKDGjv4G9DS1xiBMoVtgiBh6ybwbvmTb1d9RJYAK258KjEk2g49caiukmwXAdEzUxkxtfV7",
  "key10": "3TeP1mvxnQ8fhAsMq63urfo5PEH1sxsoGHAX37REGLFJ3aCsv9ksXXhoxECmUJPnBMZYgyvDY9n2RNCVaYms6CZR",
  "key11": "oM4k4FETbYxhSWpduP18aHvdL5peSuJaKu2KZfkcZGYsfxQKtpod5Yc1kzVhZ6aDNm3zS8Ko9qPD5JLgGbQz5tr",
  "key12": "55tUgAFLKohZWwgVgzbSBYWkowNwZxcNxdan37b6CeFzF7KTSPGAPTm8B9w2pWv2fQYH6Y6t7Jtg1m5pyB2YbLSM",
  "key13": "35gu15MPzkZ54ZpUHxwkcN2yT4ygCCYTXPmRv7haEaZHYMoXRmvstiKGDJ9DvwxUtHRM4Vk8myBxgNbqnQ1e8kF",
  "key14": "X7qnjtufEmKQNwQZuLAmtPjZFtkdq7Ss5uho6AMAVvzA6EEScRPT6GMUh63CB1gbKtSx6p2kEm3oStFcVB1HEuU",
  "key15": "5ko3SJWVWmyHKgfmGoWzKaoH56pdwUuJk7YnLmzhmW3wacdJbr7k8ao8pEb6pfkqxi1HwsdhPkRr7RZLYULQjQ5p",
  "key16": "UbMrSwCtSXPSPZt9xT5znU2o9Rm9PzHeE3J8nB5phmqTkcHGqVMZRKAKzdqWxZ1q9vq2TE8HbtkzEk9N7q5itiZ",
  "key17": "2iHP1DERfRwG9KvU6jXBm6BWKxWU14HFxYE9Qn1WLY6s1tQSZtx8wDvsFs15DvA6hrZHbzV3fVBVSXtuRXDtVqAY",
  "key18": "3j8SCbm6fASkNv17DrDpmqJpRZbQoabRzjZYBqW3LtzXckn6vNHyNLsGPxtUvLaCDoCL9soh6cLvaZB3QJDPpiUq",
  "key19": "4Swg5GXSbkm6EdRtXEcJpvMSg8BFni3shDG78pXTk9yz2TquWkf9e6jiQxvg6zrKcSfKW1C4No2v8f1EiZy4KQPK",
  "key20": "2gjFzfmMBY5a8qdVsdbKzoZoadzfmkmekwuFd9TYih4KVVXtbn6dCcZHCQ87vutuPDVcGSXUkFobM4h52dS7kv2T",
  "key21": "3GGmDwz15fSFZpDSajXEy593KiZaD4X1rs5GH3EqPEYd8wDXdN5DhKCfEtHXhHJ6WVCePD56gnwCRAvkWVzi1ANV",
  "key22": "5sKT2YxC7a4WXpffwyVFYcxDw1dGQ8QfixRtX8mK6JLGm7wyteZvVVHFyhhVbRAJ493soTnrzfB6eAoNMpnzygg8",
  "key23": "DmVsx7EykMRSzFbZpAbEQ5NcWRXwWAzfefAfSKGLq1QUgKRAgmp5Bo6uQhHMoDYHKc5m1feU2vCReLk8B325Anw",
  "key24": "4VA3gV9CNDXUvBgkbg6hHVfSg8FjU4i7v62BadCS1BwpgCAYXYLFGck5ugUve9zeSXdBcda3zbgB44EyZQbY6PC7",
  "key25": "2UoEidcwbngfzikn21oL46QeXNVTVLMwwMQrdQPdAaT3kWyVSH4hsaGXAg7WvPA7RjqjoJuFJFGemT7xKbFvC11v",
  "key26": "3y75NnWZrQNn8XDd4qG41SjnRheeDy6WiCcmQpqbBGpTbhNmznXXPZYxM7CQDRinjJkCwsn5yB7USf9YzoPD92b8",
  "key27": "5QeB9z8su9EZ8qFeNWNAiZyiKcPwLAJCeSTMSA4JWKiu2Jd4P881wtgLuYqdAbwtCJVWeBVeQTJzVhsnjgZGCfnJ",
  "key28": "me9kXMzYYSCkmFVgNnDQuVZ5TSnLWpspEaKKPZk9Uj9usgJDRisHaaYm9m96a1QfZRy7ue9kJbieW8Gi5PqfXc1",
  "key29": "28QJtRrpeskuGBfLiAVwVAUuSaCoyqCgbNkYgoq2v1YSFp1WDjk9Qqw4ggbPmYUk5Ydt6Pr33vC7FRA4wSrqqJcL",
  "key30": "bhRaNqqnut1q7NkgDzs8DXQjBcL9KGxWb5cZu4bF4w5zVwNxk9arwi6nzfzfzKr8xM39pFFUuJAJJp92AqWX5Zv",
  "key31": "RgVe49dd2caGW6tKC6wds3Ab3vfVxqptMGQ2RYXMqCDtbNxoAb9EaJkv2VY4bRnMShth8AKVkAGB2TeUm13QTXR"
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
