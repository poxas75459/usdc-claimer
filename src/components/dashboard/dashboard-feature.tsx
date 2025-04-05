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
    "5NCQGr8fQt1Ltkwffnpy7oVzU6bSgh9T3ARtxULjmAUBuez2npSBYrJPtFibosP1t3hakePBCPmqdm9WoSM2hDYB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Sb6fS9zGkPcf62eaE9XuVDP1TtJcYe8ywins1ct2xiviBRYZ95FUEZXp3nKptaEYEp52nZcrDW2zNVB2X6cQgBe",
  "key1": "EfpmKuhwnkUsHyHV23w6PsLcutiRyuvon6fvBgNm9kyaoQK7sFLvhJpdHwyg82NNeQkvHR5W4M6BzLV1EyJoVjx",
  "key2": "5PjEK93nFyLioDLAJ315ZzKQ8jcTxEbpqpqnGiHi3mBwdzpA8ScothgJEGAy7AuncG5YvDon17kUSPxEFQHX65WP",
  "key3": "V1KmNwizHsT9fn7fiZEdzePosADhxMK9HBUSKPnaU2iFJjKz8yhUfNEixhh6jovpHdQim8rPcp3Eivu2gQXWzt8",
  "key4": "gC8YdD9ocnbWWkJ4gWpLndubNV48S5mbnW8hiTLxPyDJk1x9jpsuqWjdmjgHEb1sPPHvTkeSp4N2SoX7Y3yXDNJ",
  "key5": "2ttFSETFjz6z9ydH8GweC887X9F5eoriQkakUNZuaZcz1t4umXrkMhD4qQLHdCSrheRUfsAEgx22bQFQZabWNVPz",
  "key6": "vf7HjRaxYqRYQDaBnuNVj6dXML6bbgzB14PD6SJ48MwtrEH4ywPaoEyzt3VVX6mq2LV3FQotNf8QEEa2iPLF8SQ",
  "key7": "2Dc4zNpVpab5ZPc2os8gbcFdHb1dgritpep6LDotZoZywfEF61MaPK52jjjpVrJCZ2YApF3uAAp6HPr9HadEkqHN",
  "key8": "4ZxpdcNzWp2pNFhmq57XKYpASQax4cccSFgZviBFwTF9ranzJYPLqrYsQ25KgmRT6c63Ut6PdJAdKtoLk8DShDgD",
  "key9": "6QLEW4bKyUHkZqQX6JYaFxojF9UD9uUhiKXKRKdUk87GovPznbG67YGysEhVVcHqcTys2mfh8rxUDpR9DDMkqee",
  "key10": "5e5gfh5FeCxBNWjMHXkqHxycS9nTbfcSXYQLkf3yjDHYukD8PCjByMi2mAzWaAaXUePLgcJevfR2PBvV6fjKYNbT",
  "key11": "3EsNZryH66oUkoaWemGqcX4c4hg8QHsnvh7jqLfcbSQc3ppjyog6esKGMQNyv7ANyL6VKbUt8mMxiLzeRjzczLKC",
  "key12": "5GJJfLXauJ1JP5ZQZb8XmSag8yzLyFHd68QyaN6vXxh5PihL9zFr4bBoYKP4dPdgmkL2YK4U665A6oJPVtejKCPe",
  "key13": "4aVSQ76yZvVWmbD9MYwDUyFYgTNHb2cCshNJwoC1TQfAtmuXd3GBwby1mezGmWNqsQuVA1jZyy9VU3dejqXpLLo1",
  "key14": "WGboxtU5CEJepEK8m7baXgXHsRL2wmAqAy2RYVpCb6LdEbaDiGWtffNw2ZZzv4My5y3nHG1ebUQe7XucSR4TBhn",
  "key15": "4bMQam9GUope4DLi1xRwjmtzsVQ78GVZPqjRJsLknaanvAGWHWwFQzzAoNE3GMvchah9bgsmiWdMiqgshtDgSLMS",
  "key16": "3T88TCW3wJskBxg9GnPVtGgfxXLYtyaXTaEQfW6mpEsyYoEifJpjJDCG7biifXvZdL1RB4W9JHQSCEgqNqD7i3vL",
  "key17": "TWc7zQFFpZbtxsDBkM9HVWS4tquQsvL3yn6Y5Xtd1bJ5vbhmsmvoyo9ityyy8JTHa5M3uRzpTk3oZoG1kjXUi1W",
  "key18": "3N1jgmfGAzeQSL88schJNLaZVk9QRTXDni5YaJkQhqs1Bh7syTRdfJYwpZjjePoS69k4qFVgB7wEDtmwmfyGHuoX",
  "key19": "52QPQUppneVvmjdk1BXQQyZf9XKng2w2QmucBmiZmfc4pUhAQ6i2Bt2Kz9bMqkosmGhABN4Gp4vpJwHnAQKukiov",
  "key20": "648fuUxkWkZ9kGsRRnkhBhVrV3BfotwQ81VqnWCao35BAn8bNapkWZHiNsLKyVEMNzjpa2WS3SkSnQifgyedURuD",
  "key21": "3QiZEQow915xP16LB4YzYNuvKhNhqC5jzXgBnbzN4vZ7JChW3k8PirGRJ5rk2zgUN13FEmAESq9X26f9TsFn1dyq",
  "key22": "2mu7KuCcScvvpdFVFS1ot7PvWgneS6Se36urkxrc6oLP4KsThuUrZV35EzRCd7LHH6dNzNUkRp7jjPVT6uDWGvdL",
  "key23": "5EB2SyJdS6VNGKgmGKN492nTKfoKirRWcDLGjbS7isLt4XTfrfcuNyQNA6pqTo5xk8dzS8vk9N8CWPBBU6nUHkRu",
  "key24": "4LA6N8tze7ayVPV9dCgnoXzn8DotVrHKEMAjqFYjzNSRwzcwkYgQynJzMcbebL1iBWkHDp7gEbiRs3toMW9Czfk9",
  "key25": "2FgUkY6KZk7iYCckPoN1T2iZuDRTXjPqdMMuDfPUwidg4218uhAT9cXWXs9sn9ydKxLeucRwsvpRTxokVZFJ7g7B",
  "key26": "2GC9j8iuykf1NfAUBcQeDpU5J9VLuypjv6NL2ykMWJQTZNVS9yPXFgLuQEbcLVMCTXgPTvsRFheDdw9HpYNkCPkx",
  "key27": "yodzuzjqTE2YZ2ZgBgqDKNztyNXcoVASVUDj7FZEZBGggu6wEhv7cuRNwvEfFTKkeHchEceRFvKdQnKx6WDoQLZ",
  "key28": "3PxrKBkFvoyAM78E7fxjKFCRWQMgbM6noiasbZr48wFajf7eoYXeWq8R8aHtQ24Cxi79Zj5cVyfyyWdvsFtvBi2a",
  "key29": "2KB13eWqwrLzq55N2QocV5X3TuiLyyfUxECzruR4rQ15h1FSqHnhFg247bPWPeMtVcDAu5e8DKaarsRAJ4bDZCya",
  "key30": "2pQE8JxLf3Q8KQJep8mW4WfnD4FJVmAWWuUXwCaJVjd9zqXAPAnzGivafkzninnkt5tkGWMeh9jSh1ACPmJN2etc",
  "key31": "29AnWeqvGQTNXf2u3JRYoGwgrt5ZexTY2iW5yMwaDNRy9YZXTUTeB5q3Td4BHvVKPxmkevfuQLJM2bppQTyoYZHW",
  "key32": "2P8VDyPCkrCeT7emMYv6a1Z87WBhtGypMPgD36bRSiCtHhsqpmCUfD2FjAsVy68TKG1FZJEuUtr7XvMKfWcaN5Ga",
  "key33": "UX4QpyZH5bv9Z68QMyVxwcXECsMnAoBK229Lq2SzAVeu1okJpzBdw6JArX1em9ncNZL2apRATpaRJ1xyZnrTdkS",
  "key34": "CH8hZUJFztzomi2NBCGXZoyEyQdZALs2ZEXjYXbuFhNgF3xvzhSA972QgsZ19TP4HxtfKXJg6vmtjcvMQF3CA8P",
  "key35": "4USe5VUv3aaz75GRtqMSY8TaFqWnJBinU3bN5vpLMogSCSMQKskNr7ykyp4JbeP8DWvdJb8i9vWB3ecSXp5tiSet",
  "key36": "5kQ2835CvPnYqsexB3XhZ1Svjpd6nNLviJERe5h2WXu35emjh8QuSL691S8rknvc6qbUzrcfZ2DKGFycPjc5G9kA",
  "key37": "3wLS3YTcWYND7drfuKtp3wKF7Tp9h3RBjkHzeCEcbKeuG7YdMeAZ1s5Rr1wJYtYDZxtdMr9uHHHUGRAdZZkxAiEo",
  "key38": "59CC7ZFjMXFPQs2U2WMpegTTGj95rinnAUCqTx8Z52RYgoXLWbb79SMqowbwB8tf13bVNaBN6kqkznb1Ppgxt5Kg",
  "key39": "4HwLouvVgAiMBiWLFJKyx77CT4Rq9UgwD5NsRZ3cnVL2VohmnoegsQAYfoyLHWPBKcpbmUGCwpTdZHjdVk9fyJXQ",
  "key40": "itd8Rwyp6vLoxHZxUe48Up2gv4JgZWqdABQHMCs7MQTmVhAs9XmWjN4nTwLm88thYMDCkjVkHsKBP5917CogC2v",
  "key41": "4a133uGULetmrULm6qnanMXkLkCQrWMFgdUBbmKBjdAkEhiTDgCcEoDLtD1vGdC1jaFKW3YNdx8Xo53dMNfj8rgV",
  "key42": "7ScMqqHjTj456tPicGWWGzt271xAspPibKmDphtJeYyqpWGnbZduQzcpj7E2X4am5GjZy3BCUijthJEW5DUcJia",
  "key43": "3uGWQdeUg93Vt11sH58vdZA5o3PrAa8fVFzZZwPLUWUbbqucURgZCHyS7EDGSyoBbMvGSeufykFU2hzZeMSiTwAe",
  "key44": "enZWRFZJG41X16QDtdEvGZMTcFEKen5ggQkVBjUnZjxBPVb79CG49mUiDQyi4udDiAFEJEX9iHBjmD9fzoSDVRu",
  "key45": "4d1Hxf89oF1Mwxua6aa2qaPBkg86x6yh7qGnBRTuGuW3h7PVBADnzLuoFpZ85gh3o44knUZMXUZrysZHXjBgk1gj",
  "key46": "vYdDgB5WGBdT4wvcaDcooWb9njQAyfmbe2heWJ7sUdxqeZxitwVrcex3yavy4gJTDbDXc2f2P6zMGHaLDku2waJ"
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
