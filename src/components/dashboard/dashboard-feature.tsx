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
    "5BUTNFCJf5yukLr24bKkkEBJtyGRGae2cHjdWV6iXrXu41wqY19cRYsi6JG9938MF5UV8WoPtPjmTnK91Gz4j5tw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5syWG4vFY9eHvuhqMUwNNH1irvbpE6w124nZQ4VkxGD9HviG8PM7y8cKUqwTM2yq4ATcXvDktWJHk5gDdYkgC9Yu",
  "key1": "2vH2xFFYCtJQJcKPuxhxfefLgnzmYsWcktJ21vEZaCSPBYFFuyGSZEtYRTReyWj3qqacbH2eWRQ65jW22Su5k1Ka",
  "key2": "5aMbrkyS4mxRcKCBujPYDEMP9BbB9eUoAdQErRVG49nLLbGe432B5AbQ69ytYoghdWWsQ9Urv59tWrHeexECaUSt",
  "key3": "E5cU8QZ9XyDPFJPxBfEkkipLdgwRdi4N3SUTycBT2aydvxc4FLc2t34jxBSJpCyTkXhupKuKUeWxvztWVkwWr7b",
  "key4": "u6EiCR6mJNEF4ZzEQWnXyXYJ7Uaesks3JYgPQKs5sJN7gHiRhHZ4NAXiVk1jHCVkH2erWJWyNMCs1a57eoih2sr",
  "key5": "2i2cECxrSxuKf26tTXgP5hZBwhLJ7GybYE6kgKWDYP5zSFKNSTYMEpUyUFVxxP6d1R3294upFuJZgh5FZN8M837N",
  "key6": "dZsgGoYnEZyrBgSHW1VtyGHh1fYF2wpDGeGn2AmxTP1nWyfYJYWwZwczzfQFzCaTizrMhUxRdi42qaKwxhzrQDT",
  "key7": "5f918CHcJBTEgab2phDv5fjhaXY4ocvgnPhU5t5eZNVdqA72Yh5UJVou5TerE1h76X38dGz4DZumFryW8z982Tyi",
  "key8": "5Er3v2m4VxmxpD5QrVE3Vt34XWq4iDxSEwDQJZqsRQjB4wF44M8mUJLquX3Yhd267ZoTWrRGfEnC6HZ9VwuHoQzN",
  "key9": "4jRmk8yCKLAc1TGE82AnfsQjdPqfHgBC8v4gSNr6zJW17PmzN9Dy4GQhrW9shejzYv9CgsfZmfr5t2TiyP5cJeVP",
  "key10": "hX3eF8NB783N6uZMZ61Z4Cj1sHx3fbkMrusRU44Gr6K1jhLyQQDEJp6uNS4Pwu2rWPy6xQnWgwsrnFYC6uSqFeB",
  "key11": "4FSnTBoFypgZs8mCYT4RpQ3nyfmg8TsYjuzKNNy5MewvHAhKqnK9YQY8kvbJHgXbrBKQfu9YuACuXNHnCXN1jHyR",
  "key12": "4mQizxmpqkAonD5zdSCSEYNVADNui1GLuy6paUxQaKuLZp9PJkoraaSzsHRBZ2FECc5D5DyYcy5CpAsY3AxDRUB5",
  "key13": "5EyRSHbXqmrKs2rVjb6vJoXwSqPMaFfwA8KUJNcg2vuPHUNcRUm2uso5WQVpk4fws3gApSSiPPLjwVin7tdoWy7D",
  "key14": "4vR8eqh5hnKHtnXnAJCgE4RagVX3QVWyKzJJPztKuGgnQ3Tumn1yUrPtCNPTyz1Rm4NueGT4WqFernq4EGNP7FdA",
  "key15": "5kVZ4Wa3FVnvzPjPq1RD8aGNKUqxbmAxEgt8rFoTnuFWbzx1pSZxyWmgZuALygfYe4fujjffyqV7eEsmCodGWPqW",
  "key16": "56UermUjmx1WSTzFenDXhDem377MWFgX2247XzDvswQHAPmSpSzk2tdUFtL9LupjEzMyaoF3sFzUJk3HFpSmfdXW",
  "key17": "4RKVNXtBPHa4geierj121hNCtxkN1hRK9jvSqPXHzqra4UxaDF5Lj9nHdCoqk5Zg2oZwCshdE6Qu3JCUbfqxQW3w",
  "key18": "5KyqJAhYHJSrbNSBqpN5zQ1GvBoBacAnFov3ajsrqqdL9Q3KJAn67KydNNFRCkPG6XJLgwhQGvTjwFkU8BEuXPKp",
  "key19": "fxsBYbrCX3t1KwZsMrpzr8SqNgqH89d8CmTHurZ4P11BXGzn9ABCJnDWPGx85SxU3hafmUxJgdTTDQoyi9uLHnY",
  "key20": "4bszDxW8K2gwuz8TE3iRdcRvtsHreJnx9R6F4HNEbpFbUvqzwLULTSZ1zKVBFG4DyocJggY2brwqvwS3JmbwFSeU",
  "key21": "2bw4dPzAX8qz2faLgybwwBabBPC4QxeAuovHEnEXJ6FzwtvzoGo5cUczYD73S2tytGfBtfc2zHM8Qt9kw5RJPhCv",
  "key22": "2eJMeMWpMQjvWqPS29FphvNwqjgKRwbf8mgjsg8S1jaT3xv2FXQVoiFGvgqa4hPzHAMscVz2nDhibVvNSJek7r1u",
  "key23": "gGDCAH9smx9qhUqR49H97LYsHubPZ6GqJbUmwcG3Q55XkqjvNh17TqQmAZT8uw5kTLeuKScAURqT6wG77vBCQ1F",
  "key24": "56nLQT1NDE1UBwDMJDkiYT89xBzH4gX3uJsmbbDPM4QPuYXPgtQDz5xT3qFYY5tUmt2bQCZ9wf4QqJwwhg233uAH",
  "key25": "GPeXkJvMAbPrjCTW2MjnW8op1hS2fx9fX1NfP8ER7PCFsF9aKzhUVSP6zx8RTixEiUeY8XCeaEWtjJbHtEm6eqj",
  "key26": "4X4yJjLTuHHaoNx1vz1MQBoEEmbgcVo2k3AFjK2BT93pnv4hzwKLtK6zJELophneVmZMLssW5wUkRUQfV44n11hX",
  "key27": "67GFXFax8ArCYumvcgx3J4vjCWuGZEdxFb8gH8PNSCtxmpomj6LdcByfuPoKcdZENbzGrXQ4WLQVz49fcddPUbkn",
  "key28": "ZepifJ33DMFub49Y9d8SqYQ5tJM5jsxbJcymu8AN1HpwnN2Za34ok6CN99oLJs6wxs4w8voe6MCacpvfoNDSWXe",
  "key29": "3EVG9yVKk7ZbBE23a68tQfPK6523JR7SyA26ncdukePWss9fLwjJDZQZPyacK67CKhFP8s4AL7aJj9dVFCa2W6E7",
  "key30": "Zaj1uJq4YBFu4kv3h8C3X1JivYujumAFZWP8NDSd6SJTYgJqrUL77mt35WXWBHg3U3KghnffWpGtvMKZa3hnQqj"
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
