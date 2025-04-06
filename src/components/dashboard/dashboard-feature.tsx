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
    "3TGSm8DfvS9Zd2odi6KzsMXgvxevkTYSCm1VDUf6VQi66MsBxSp4mhgSnD1T4TqZhgSLHsPpDwcJNFsYnMZRfzm1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GhsLqZdHss7QJPbRrFRMhMNBNkBVah8SFWQymeCYf96PYg9aWEZKUzCXni4TjBkrtsK6pkbUJY1kGNpc78G8dwM",
  "key1": "3hkxLhG2hMtbqNGuMTW8FD5ExUYGV3dKX9hjySrV6PLBhXu6fVP9xWyJ5yjZT2ZKXTk3QhC3DTdRkXsMteCj8TkZ",
  "key2": "4xQihcgfjkLfZYnsZjYNmknJNnznFzA9UudyhwtRxoiudUv1Bc5y7fsTiPRQsAidfTUVdjgF4Eba1v1HgutA9by1",
  "key3": "5vJMAqVHEXoRZBayz9AB9o96rzXychKQaerLn88yeUZYM2Bd6d2aQ274wfpN1pgqELb1cu8vnBoZ18bqXoREMjd8",
  "key4": "5nBHmkDGUB1LWi8QexLY8vrzhynNvTuiu3Q9o5QQtyJ7Tn5Jg6m1LcVxmJ7QvE5i8zMKwBYNg5CPzKX781myKemc",
  "key5": "5N8g5HM3NzUd1Hf9qnVUUfyHQQDD45M8YaUEyyqvSetzhKXN8r8QL7mQAccgS2NnfKfYnP5ahjtCL1C7YB4ziDvG",
  "key6": "4i4HrRrGp1r26X2maBnRNx2ybqEwnYfY5MhkkXexEc1C8WegYXHAo9oWWo5J3LJY7uGgFwovypLU8PkNRA4Tn9ev",
  "key7": "3wihkqw3q1BPmgcm3rxVJYJwTg9T528J7DWCQqSd4hMnkdzN7GJC7CXEbQhor8J5RvYKUY4B3UdUmukuFHrC6DZa",
  "key8": "3br65wbqfkhT3k2bATAXJwrqFvW8FSbJ9oQkLGuonNT4Ty1XxiQLbFH451wmnFxxZU6d8SCDM1VAtjLmUzPgTGaK",
  "key9": "3KmWeJoFPxVXcCdHcxqvjcTFo33WsU4cEiuiCp36uygaPMY8MpxqLDPAwHUYP15c51KCCUcRKkj3UeznwsbTmcQ4",
  "key10": "5JB1jY911vG8HE7VY9q5JKtFPM5w1N2CtRSaT4KHKsbCNPsRC1kZFpFr8f8udtKkqk4M1mwRUKKH2oUVTw87wd42",
  "key11": "5sZ2yV9Tdep6AcwH8HUykco2EbcxQs4ZirSQ8F4fRi9a4MWQzVbbeXbHcswCTjbvLGxtnSFbP6ZD9yB9hA8HesXn",
  "key12": "oGfJRpazY4UhPZ9mK2AzSoBJPm5GW71WoZmR1eb8WED5Xdyhn7rzkjkjzgDivXCAqmQqSaGxRhhXoF4HyegqK7e",
  "key13": "4cZuRRKNgFAuf2Pi3YiEyqtLJeby3FVoLbfc27dZgDM1MgWp6JqdknjddRM7MCLJ5WzA3jZNK85QtDHaUQKidqWM",
  "key14": "41xhaZjtZrACzr4KwPefPMM6yvWEaCZx4uzwbkr6nXEmxfVkfwfSKYqW4FiavjMqdvXfkj6PxZryrwEnkqBVMKY6",
  "key15": "2VMkdoKR13ZxUS93ZZedy75PyCYJQbi2WJGLwksJUhFVDMwQsgzWw5xkX7NvxmhxLYUrCuAVMAVpAgQkysBjYzzv",
  "key16": "2kyzBWPRDgtpy2Wjgfs3C63z8bEWq9HRJmfGFJHbu4JduL6ngiK9jbd9xKL4rqUKgJU4oefREf74jNELABshiLAt",
  "key17": "4CjBBaKt1pDLwCJ1Q21z2MbMV5HekXBXpwXTKqsvpDAPPXuUkCdUf2XETbDS7oB7hBQW5fExZzYMofMcdDhk2gfr",
  "key18": "3QGmvGEcvo8fEBR9wN2TRxLsnxyGWB2StA29AtrHMzfyajhaWMtQqkmvhGBnRKYGDbkL5wo84cCNwTJwzqGfc2Qq",
  "key19": "2gW58s2RMqaXywZp3YkYpKjckRj9s3vnGJyRSjhZyg9c7U6pKP6Q4gkPFGShQo1WiCXK35DVrcWV8U4srcTUorJ1",
  "key20": "2hiAqmrhZphcqtpq786G6Gqh2FS9zBbJy6C8e7r9RRu7U2YD1L5ybXFzaQH9SjVPsm2zi2Frxf58stfAdj4xtwkB",
  "key21": "5dWCetmPMRUTbjXvzwGjcxd7NCYWWLKmgQ8uGZi9XKtoXucxm2tXDwk6yuNdx4izKgpTzfMuNfTmkSRWRZbZJMgv",
  "key22": "4iez1TvY8PbHvzAT8Tm67YeDiZLbN7LtwDqNDbAguCf1Go9jXhp5TkKJVn9a4tqekV2ndkkwXYreEfzDbkY7CJZh",
  "key23": "4R7fWUjL2Bnouyt8xNxWEEZoThHhB8hRor8dYzychpGNkTCdJc26bz3GxsRVGUFUPdriARNcNmjUhsztk3X1sjbs",
  "key24": "F1VVqnbg57Ay7tT7Hyjo4XZG2T9ndzHVN8f7pNeeVGJSucaQ5oHqmnN49UiUr9Q1YpfnUBwZcCNYV8jEQdaEHNe",
  "key25": "LPhy2XxmE6YkVK2msVFi7om4sMphuamcNvCifHuFS35dfEFDMxXcKizw6Ynv9NHq9WBpabEXwU17T8ZpbB9wGmB",
  "key26": "5qgLnYAEfEL5npZ4Tog4DzaGnRzFtSMu4g6WtJQBZYgudXvRJ5f1DR2mkWq6DXJjFfYcRRbXyKXYSfR1jd5uFx5d",
  "key27": "3rBxG86B3acYp1bgYyheYVCVPf3AaQyw1qqb74Km7E8HEiGatFvMFDUaQMuPtasjavnXEC8xpJxjhPiNgUxzSDvG",
  "key28": "28eUfFcACbdBkg5CfB1a38haeMdumCNZgjkUpsv9MvCE1jypUNeZvsFoUpYivEA3RjbVy4b6UtwLWSywPkPaC4HB",
  "key29": "2bNiPCjPRxvwceQkRovXmejLUxbyHJigdq5oaJYDHmqzvwxbCVzNbFPyxRotUxXpJYsDNHgJnvs2ECKb99ydbRZS",
  "key30": "CT7pE67DpDQDn8d6k3Ao8DxXWABrbXzxjRL1yRTuRHnduHno4e7ttbkytyEgqpFJYowopN3MxBg49pA1bsip36z",
  "key31": "4Pk5wWVq58XawXio6JH1FNEJrVY82ufqbkc4BVBDNgzA3csp6yPVz5STTfZbo5Wubczb9JGaUMw3D4GPNFJpTaPp",
  "key32": "48GufwDYxYNJE6bhY42bAMkC5PsGLzPPr4WMe3qxBLdY8EQdp39t76kDAUQ7rNfbtujHD3nJSk3U8eCFjUH8gtfe",
  "key33": "4JFEastXb2VAVUn4veeNjE1dK3y3ss5JoY7WxY3bcCAcs9R5ZhpBRhfojbJ3o4bsMvkYm5WbGjCi4cq9HTYN6Hxp",
  "key34": "63edcyU8CjNs8Zg1PYBESSUEx2GHJ5Ry3Sz2Z4kAfdmai555tKM8MqymGEYT2u28vt2Cm29Sk3FkSnjZBNWni6Zs",
  "key35": "3p9asiWD4jFSwKqBu3opiD6tate9DzfnykU4D9FuhtVtiAvLyNgaE83sUHDxdnzas7qGCxb9Vuwtb1AoUJ2ShtQ6",
  "key36": "5GkVpsFxWUqWitgZEWmr5E9MkhPrEtPbn6w8rZ4qH9h4NdAEoXMaQh8geUWQPTdRhRvwdzEL1mw2FvbrjoD7sPZE",
  "key37": "TG7BWc4iii3Axv1FAMu6cruEPLEq4VSUcgajXkyCsbdrydj4ooACssnUN7gMEr7cg2CGWdw7WNVMx1xG7csLHkq",
  "key38": "62bQtxWgLHBcVWNtsK7Ehi24jF8bTz77WW4LjWfWNyTzeeRCMNmmu9x8kRn6aHMzJ4KtY1ah4GdkgPFCroFyTbot",
  "key39": "kBazRQdadXzWJx2LZ5qjGYsTatJEEr2XR6XpdJVnDj7MrZYXVraqDQZuhvoWNKkSDsgW9cNVHXexWVJ1xFATtzc",
  "key40": "SvBJwX1YFfZRaALrxYDZzsH8ecK8EWvTfwzVfBVx3o7LDbd3C2L4HbL3rj8tBwd6LHwKgZdiMTNLE2bNRtwHsrG",
  "key41": "2PKyT9RGtBpQ6erbMzEdTVmjb5QwFAizAEJu4WbseP82PbzZm1Gcnn2L1Je29uhKmUnymYpGHaxXeB2Th5Xh3b9k",
  "key42": "4wdTNgVTzdTm3MDFDDazZs54zMp1DVbLt8ZT1ESrSLxkTY2ioNqetpnGDovimpJ4wYNRwAeT9NssD78HWjiAqx4E",
  "key43": "4FvdnzZX9d2G5n5GBDSeYgX1HkZfvwrGzS4tqSXjp198f1o8z7Yqn4fvdgVsqcbNRVB7XDqJJzV1szkoqAT47vTr",
  "key44": "3DiN8yb6RBoutC35z5HsigKn6Cv883XSeaPjD5wZ2Ki7wWsuixdvyhMfeqPW45VXmyqLwovvRhfK6GHr8MLq8CLm",
  "key45": "3PgKxe49F5h7ZEd7ee5EoNfCuutGXhXXNeG8BZHVUkaVDf2AZSjZVe1vUvfZBrCeTVSaQmCvinPhWsu8BtvPez2Y",
  "key46": "5XvRjGnDEtjaoDpD1qgGFSmJHGS9io65o5gdPagdrEWjY7depzDtw4XDpLKCAaWRWSoMxsajmxi7ZGDjgATgRCwt",
  "key47": "3ReUFS4baJa299fpSuHy13qv6b39L9gSsxAwHVp8HarpbARzwo8hYxkoP5cSWz8q7XA4uhRJBn66UJ8G7eHrA4Ci"
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
