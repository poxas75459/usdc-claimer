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
    "KE8sjTLY2kFwCrgUVQyvXjXgmHXhjwd2V3zwwve99m4ReK8r6v8Dxxxn5L8Ys2jpAjL9LPf7XjqrZ7uwS7ysUkf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HeH6mtLmpZ1kWsrcH1FgXeUxKJZBVRaYjoE6Heeb3qLkzUbxpkyMKtG7FVSegvJ2amayqRDnwohhVLYi9XXXruc",
  "key1": "3oVTdt1rdvvvJxRTSiHSYh4sxVEScUajKRE9YtGQaSrKLG7aWw5hrKj8NZgakYpFibFQChDZVvof4eS7YoUtGMSR",
  "key2": "2uSMdBDc7tw2bCDAq7W6hGoT75saiuSYibkydaKjGKJcBtmZmg1wPhbngiQAeBw5rPVRB626GKJoWETKSXrfjNNN",
  "key3": "urUbN2A4HDSyMRE87uAag7dq136B4GgigKMbhriXvZ4UvpS9YL9tW6VmDZeEXcKetD6sDuqShEcLE5hBqj5qweK",
  "key4": "2FDfb82bXpPuUHVnWUf9YAMkRyToVF7Gnq7qWwPPrHtyTH6dhmuyq3bGjezfK2VaK9i79VvCAZQyvQJHv11qyLL6",
  "key5": "4gWvChDJYuNEt5zum4JoBuo7gWqHT4J7TTu1QbcKnXwLt4gH7Js37FBqvRhK88tEnZuBcu1XMxrZYJfDNWNMAggT",
  "key6": "3HbgnMEjAUV7JNQXfxA3uU4rwVxPQHPBXJsvkUGY8Q57cgyqy8XEZFHuRfGKRFhF6sGsbrriwVuv166L3YthVDqg",
  "key7": "cUzfZTbJvB1MX5rvy236Ce41PbgG4rzc9Z9otojM4EpVA2kaR8ZecHPW8tu5gG4mGRHzmozopvjAiUA46QCy7C1",
  "key8": "3cayvMr6QmKZEva1i5Qe9wcG1PDoHv5mg6x8EGvghunr6fdx86qr9RDtRbSCREouJPjyunze5VQhubKCStQ96KqV",
  "key9": "ybJ8vCvWiMqZJmHQRWVMGL3fBtDiswVa5ntYqr7uYPMAmeYwR8g5fqhWHqyuc4DGzzrceVchMjZqptFWKVWuZvA",
  "key10": "2Abn3e5coVHmEMBoQgidp4EuCk3kL51htMAT3qFtAf3MHzhk6kQUjhJy3osoTT3e9pCC8zg7kRSarNjxUsAtxoKC",
  "key11": "49w52VmtpBkAf6gH2Typh9JGRkuTXt9teqobsRz9LBiM8obiNbKWUnrnmC3b67qCCdssveLkfnHPg2mHtDb35GUE",
  "key12": "2LySMp69rSwJT7ELiTGMYBJ2HQXeaSqP13vmFTKVwpQ43WcGFxx8pFELu2Mopvv63RCQm3Djt9muzuBfe2EbK4WV",
  "key13": "5GTg2UBWbc5YepLoAaLkZyPafYZHC5WPzjReaUYa2KkQjfRELifrd7Wcc56oDc85ToqVaU6YUdPQjnWKh7GyGmbB",
  "key14": "4UnoxqER4LWQZQYPqrSTXJwzFosvMKURuSw8sGWbmNfVqSzLyciyQRAzs9F87Vojh6NuareWjtTFp6waHFtN4XqC",
  "key15": "4BVU95UkLzFfS1dEo9W5MFa5HcuVVYvt2HDjALFuXRuYifVH9pQdrifjm6MtAXrnhVuwMxCEBAeP8PrKDXrm5AtF",
  "key16": "5G3GEnYeFutcy9txgUPnYEkFy6rEr9ss52YPU2y1X1eKkBUirUKrxxAE8bbgQnGALvC6mXC3YbDWuUpUAEuvWYDc",
  "key17": "287mUddwTBtjrqdi6Yygp1eE8qVqMMs1HHAXQJfjVWJaUWx1PfqmjVDgMXnJC4urLQq2B9qoTndcXh4kqUHX2syH",
  "key18": "4ugCdhCSNQhuBVn1GKaYVtdUohNSGx9irQNpvXmMUUfNtnRYNaQaFHZiuh7ceqBJMXw5ja1MRJkQHvVwTpsLyZbg",
  "key19": "4AKXDgusaVxu4Yx6498FmsYXFDjFDXQQJirDpomPf7Ua5QHr24HW2b7mAFfKqnUHyr26PfpdWLF5TW1UZQh8uPES",
  "key20": "3PjqdULertTxxfiFMXmXsB9wfCLUYENdWZz2H71o7CMtiZa4j47vDDJexxqQWXajJTAQyCWSA4twVKd6hJJejdBt",
  "key21": "381W6qJL63t26armDxodDvyc3eUL8aSrkd2BAB1HDnFD7iT3F3ULNe3pe9gpzfgd6cJubGhpjoWFBHae5afbmJFW",
  "key22": "wrBkcqT8KuL1tpvSH6fWjKP8yZ7wEExX7R5uEsahiwWKaAdzYtdY93ZwAmUUXRC3UjfWQUrpRYqK5bvpUny4gBd",
  "key23": "33nvjCib5kubyKn7DipKT5mGjb9n6iuMCy8Po3Hnu2CMHt6we1dZQnPfaNNWFWemdBPcH2U9sVjMdWUH2bA72YAK",
  "key24": "2g5RQbrU8C9xiP1tqwmktAW5B8VtkwiL5jKesFGiQMDniZ3Sm7Gkwh1PhESTJsjjcfoEeu1bjYcXbLfA5rdsr3ZR",
  "key25": "2Lp7LDCeEfS7FLJEyQjnEUPJEADtC6pRJ1dj6fs7SojzNpcpwMgKQKnzdjVYqsRZUMuYp42nyeES9nmxh3gRz4Uo",
  "key26": "4csVue5HAoEJnMC9eDZme2zKK8Nvuto7DGcgkACnvYnsy9T4x7PHPyCSgPuSuyeZ83iwaWn1XbRSVDTJ3SfSt8ni",
  "key27": "2QTn6BaJ49S23YUpJEvAZMGXym3r4b4mEcFB7LSFHYKzQgMHwgM2HBBKEzq75QmdzEJtt2LJPS9FxwGKVfbTATWX",
  "key28": "3oo7j8WDrYLXKUBxcWuNLx6f7TiH5WGziPFr2gTV8BSevXER9fQeZ4GufE4Qz9DkkXHsqqaR56jiNGsYaoGknRcU",
  "key29": "4gvQ7V8SaHihLqkj5idvpLjFpygdRUmGbTZAoeAAHEWawVN9WvRZziQiAaSGQiCYzP6BRA86pR4Do7bR78K3y5cU",
  "key30": "2UN4YFP6RAMxKJFDPRqkvw7zL67XiKhLDsiQVPBMFhA8Xc9FPp52hjLYhPcTUt1jLeqENqSKwcWeAuGWmjvqA8Ck",
  "key31": "5brK7XxJgyyKzgNqJog3DNvaCMxGcVnyxZFS1sgwzvQJYQDfCDkaFVHCzKRidxGVxym13i75ceKFtgELREkL9czC",
  "key32": "5PcBqA3LXATe88ZVANYUjt47Z285PVcU17ryVGv816hB44hc7NBUvBDo76Fta2k3oW5uaSLBGKTi6SZtkJW97ea6",
  "key33": "rWF5c9SAUSZz2Csm7bBBqKCcYb7XgJBoi6D2Xx79DGCGL8BiWKjoXNGjmCUTChG69PDpSfBLdZHcsvDVyUgzn76",
  "key34": "zgJxh26F62gA2DoTcraXW2urtWT5PvUdPUaksqTwX27BuhBJ4wrK9Dmv5zPUqtUN9uQhhxP54JyGvwrmEohXYmq",
  "key35": "5hHdwuPfAcKqomm1ujEiWaHntyLkG13fvUeg4DW7j753Zi38WpTDFZckiuEGkGRzSoVc9q3LuQQkzxXe82R57zQW",
  "key36": "FUuxS2K6kjcoPcu6v8fo8gC766YpCCtjnBe4Ys4QTKdx4SRaXn2U5XW2jHSwkVJ3FyLx2QgYzQLkXz6EWQYtxyP"
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
