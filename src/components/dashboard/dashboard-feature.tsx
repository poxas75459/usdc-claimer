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
    "ENwFY7JMzbD5TivNAHdQF4GGJKX5nNo15bLhc3h8qH4Jm9xk9Brjvghj52drCTBYCwp4bfXu9oQkaMAGJKMdFFb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5R377LCZaxWQqBNYGBLA7VqBkYeVStfjMi5r9dzrynepJY2SxJ4AWuuVa2B5WmjkGr3E5Vg4mgwpW6oVx3PHP8kg",
  "key1": "2H37WDzoKAjnW1zgj9yUMAkxkhmdNAqNDrBEdhvebryr5nTgpMEmRp7uS4YQyKJr8UVmjmf6v8Hc1M4zkeX8Wb25",
  "key2": "4jdTiQCKRn3SwnTLBRf5VhxQGvAMfJPtnXexA79oziBD1aAyuSsSysyeVHmNfF3hjRUnfKSfr7wDdQ8LjheXUj2j",
  "key3": "2rMfbt66QLh7GVcPiXguwndV7XR2YLQL8Evm9qsB2juAAQsxuv8AhV6tav5FczY4Tvf4ExeadJG5JC8C9Sr5BMbM",
  "key4": "5TYQDH6PpTrNcvJeUZ3MsgVKHNsMjdCr19RPEcqfHqmP9WVM4u9jGXyFrN6rJtvEpL86qRNe8eeDb78vwXxEQjcn",
  "key5": "5VEo1ct5ZrKFgcAMAZjFG51XQc5W9iPqLdNZupFGFaT12RG16JySAANa7KqRZR5GF4MLpMhdP4JtGAge6o5pWqZs",
  "key6": "2V7dLCvVPwwWWGgZY9PjDWztv8LZzJ4r8fro8Qvb2yBivoUWdyoBwtM2nDKWWCuiDosFNgipWBGepm3btLQsCsxB",
  "key7": "459qtobGkjLEHAGV5QwZ69Ka134AfvYGvc2rNw6X1d94NVRhk64ohabya3Rqssh4CZe94fQDgT5RnRzNkHsC1Gux",
  "key8": "36H5h9JHG87Arss591NkyHSsMttAJZAx7zb9MuRAbHPUpzvSRxeh6fC5C3hvFqqeyJWkhM4UCKnnLduxnKoRCrxo",
  "key9": "5Ve3oxmJdnoDSvzJ78bt2on2d1pS8oqnpFhZXnvD5u5yNwBxsfCwuTZQPPx6mvKRb1PB55LwHUNUqHL71MPbqMHx",
  "key10": "2d9PLgvegiAroTLqH3wBUgY7n32MUt7FZMqiuPHSLFNGBzaMJ6F5d8KYut7kGgoffGxm8PpRHzgLiRh2AtevxP1T",
  "key11": "5hj3hQnZB5g1Rqg7fmnKYJd3mSszyihxGZ5dfeeP2ePazMTx4f4vy7JzL7Mg8mfDwJECoEWjLY5x7SwwPUpq8EYj",
  "key12": "3MwLM29emvjZ7fegjJsHYVYVp5WZTB2FgsXhP7dFcXW6gahbzKnEHmqWb2T7YHDk2MNY1Q4Q9d9VYVEXWYY5sYTk",
  "key13": "5sC1GpbAip5VP56ZLHXGuhFW47LV4XNkNF7Ss3peorLpGKHGhzVm2uCBo9sqTzZCn7Hdk3nCzBG7749T6LmXW3H",
  "key14": "YZAWLLtNhuL3yZdsuMBSETCgQNqBKk6sRHVF9jDK5wNytyoK1nybNGD7HFZuvvqGfnwy3iGRMp8UPCjW42iZiWe",
  "key15": "pG3hSMiwtFExJ4jEAux3j5eVWzUHadu2viA6fYzqoS2XZ7dJUrTQv9wqVAMMXyhMmyJAWm1HZCqwM9auo4ZYcHf",
  "key16": "59diDZKn98FcqCgoBv8Bt8syzhcAf5KfEetpZmc3m9yiNiogRKNj2QNaXhNhEepFWfwn4fSm6BW6GEp2aUuAYsbU",
  "key17": "GrAALoa28Qvh5uNuJR1pkT9W3dvSMug2qzmy3thDX4WndjE8hYDxtdFirvBGjP2huXipuZPaji6J1Uw2FaPxG4Q",
  "key18": "54L7rYYyUTbzBztBNW91NFMWTfespUQPCEoRjqqYEgMtt2N4NV3hmomhA5VxC7JRMQ5yk21pg2MNo1AjHiQ5fABi",
  "key19": "3y9bUzMRJ9eU2tNWv7VcpJd55ABwwcr1WY4PtjVokLjMeg3bU7VFQqMuYN74sYjc1iX2zVc1b5jFwj2Zgx9ULoXp",
  "key20": "2xvudpFER1wtckopMaZ9recwmopQpMUaAsahyanSSqatkZYkzTcrjpH5RywtY5UP9m9xBSViZW5J3qChLmufvkha",
  "key21": "4689bZr3DnRP3MoYHgVXcKbDm6d5zfPmxg7uzQMB84r1H3rA6qfAtFSuSudLqpdstA2gzBkhCS8e4YXQaKYtAgRM",
  "key22": "w4HY2GDGv2MtYEcP7wVKLCNvDf99xYNP8B5oX2LP3kMjhqXFmdNaVUnAFfj9ye4dTDpLkUAsZdxiyhv6EHwDdJX",
  "key23": "66A2QctEjGyHUVh5rp4C1aaZvB5RrekLjxxrhEDzxeBN6NjnYwJZRTgzGJVzX4xfK5fvxv5nHxeZLhVxbtp5sHEB",
  "key24": "4gmPTzyjQaLqJkAQ2253sW2fXwanMoZg6AMwKkb8hSm64VpLWTPtNvCZK3DxaRuykV1VZK29dXDuro3P8RTYoyWn",
  "key25": "2SkppZpNen6Y4Jv6Mm6hvHJcUoGftDSTCWLuN6xe63x6psRahjBCvbxJKcnTFPCnMaAbuDMS2TQJHkhzQGw6WrnL",
  "key26": "4P3YXb9qzgpH6cxmcfHBCjD5YbgztnhMrTjLsJGGEQzoggQwieEmhBGQkeXycGw8VVLzPVoBHFSDH99jBF5HGUyY",
  "key27": "4yQJUQ2HbpXJrPeEVu6vkBzhaoDwkozcjHJb3KaiAdWTa51DTA4NrgsyFbmcFoT12hvRnYQ3JUH1hW8Gkq2Xzvwy",
  "key28": "5PGrp3rahHhj1iwkqVjPyw4PqaeYYxv28S1KM9kzanMdcS2QLBTq82SehC9jyKMJMfyJxKDYjwnwJrbeTauovCoF",
  "key29": "gBQSTEZfYQEf5tR6WGYCmZCeVh87B3S3SozG3FZy5nkxTX1MyTdgpqJCHatL85tpqx9w7WyVnWgrNpyXzKdobTK",
  "key30": "4mo8R4hHqvCvPhT7joMwszNuE8XkeLnFJwMXPMWp1fN3G6LeXQL6S2Zi2ehqKgdjKejjMZzMAXnsJ54aWVuqCUyg",
  "key31": "Ym4fA9HzaVC77NT9yAhqup3gqqErMFBKRLm6mwTkwdEUnoSZGMCCroEHfVmNaRUQkj5VVgudcYTbNfRN9HmWutE",
  "key32": "3nePjjEdHDpk2FL4SwJ31QemEzHrirMHXzZ1F2CbpcUJDYvsYeRAptoqr83TLkWXfUe7hbZY6Kft1d3F4W2ZnA68",
  "key33": "3inJsQdX2qJWxpwUb8VcV35bFPfTid2NsDgnC5HnFuyYSzXUnQCkFNn4kpsGVvUB2RhHRA4HRDmE9rZgyA1wLdjN",
  "key34": "48oFTucVuvt1MrtneqDo75vwTShRfiqGVJ4Z2gykiN2My9LYxCYAfVN8MtzX5iM5B1mRhWVF3dGgGbzyg1Adz3Hq",
  "key35": "65s5FeELTitWmCSQC8Lww18qBbuY5QJvsby4tiBZe2PCwmcKikp8SNRJZC9LqDkjJKtTH4dqyNd7c5w9d5UopyhH",
  "key36": "4KKaKxmHb1LdcZnHFs1DkupHyFS1otNankgSXpKWRMFqemfF7cnvxXtsTiYAgSVLUAnK5WuS6GaEtrM62zJ3WWmz",
  "key37": "EaqyJtDfCqyPaMYHYbmjXmcpWm7veXdpRLxsz6XZCBPYWLs8GhpjRYgmdCzhEkToyNs7BDMHBErMeVsrZhM2DBQ",
  "key38": "5hYi8ThxP8yWgvJAPjjUmo5giY8oocNbYZ8oVNeAJ6E7snqEqQMJSNJobaPUXdAK4F4ZNjHrUL37fjuuyYM4HzHN",
  "key39": "JcNSK3DooQUweLUizJkGuXhQzrHMs3zg82Uqx7BZDpNzZD7WXYVjqsxTGiBQNQTXYvoZFiaAZsChisHaWHzS8xY",
  "key40": "26feuKkrAAXSyYczGNoKtuxsXadFvFMuFY6T4pAJM2NxYKGPKBEWHVbicacNoheytPZh8CUuefBFRUzPpWAFdw8X",
  "key41": "4hYNx7XHoUQJ3b2bTyYeS6zfWKPTwQh31ZHXnY4S4om4r3skSk2F2Gu8Xt8ew5xSpq41EsAVqhWH8kKnHiLFrQsE"
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
