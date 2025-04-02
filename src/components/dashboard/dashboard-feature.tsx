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
    "2Wv3vmxYDdtGGQnT81e2NWpLecej9D8cb45UQFz4htGPada7hx9jSsZth2uA1QpZSz2znKaiCJgxiENFSYkmnhDU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EJj5VzZ7qbW1k6BNRpBHTf6wLvfTpjrpf9T8piZTXZ2un4d3dhcjQqBQjEWAYsmJgMdnDTdhYUjrjHuKRH7nRGq",
  "key1": "MuuFrta1kMY2ykwyykV3insrH4yRpaLpcrvJbJjjWc4tv2H8JbmcfMAxWh6ZWYSZ9NUPWLsQDd5HUK1TvDFQuLD",
  "key2": "3712M7ihzQCA8aCdvehKK6vo9KGc16atfbTcuMgwfKMzcq4NqQofdXWtm2MDuuiEkLMdmVTQCuekioUiFRFKEVYq",
  "key3": "25MkrD6euBjHczCqnL6tqWQXibQSNvqKtGBPQZ5MzFxqRpFryvQ9WoKsaPGJiXJMeZqvmgxBZmUbEa8J8Lwz8rGs",
  "key4": "jhUC22EKHVm4BLbC7mr45tKDdyubrMzDSqBWMUUZGEe2qWVDZr1KwPwJDBsJbZ6uUG1g6hZFaxADLrg6fBocndK",
  "key5": "4iddqkFK6rVjGiHvj9J8HbWSxjbeRJrV31jngLU8v8cwTkn8jpnR21eEgnkFyiB1Akta1dv2QF5EdU63iyamMDJT",
  "key6": "2eJXJaMcTsURF2t1LfzNAK7Fm8NdpKhWtfLD6Fjhh3u3gm3yKkkpszKLs8TrN9WEyP1zA9c3eF5gJZGCZ7Utj3uT",
  "key7": "4XEX8gc6axWca9eRQ7JRUcNU4TvHPzDGsNZB5vKv1tiH1Si5Y1M8JWqDiEt8KYqZvUSYMbSxn4bVYHT5a8KiQm2h",
  "key8": "3DHsbBHRbDhQ24MXSMyeyw7L22kNpz1pFy8a3mCA526gJzJQkWeaT6KQMR9p7ymRYxp2diWKKCciTpT6hhGens3r",
  "key9": "x4Dq7aAowYmHgz1PoyTPw4qRyMgjY9zYEbg4TA6b7RyvS3ioXdu9iSpE95YYqXMaXoaH8uihsLw8sCBsKd93vug",
  "key10": "W7ofJhBsj5EFqm2jmK7xXLvWCYjZPEgYr52xVsqC55oPdgP96SU7f1DwU8hra4WyBBRsbmc3YjxYwh1WJ2L4jx9",
  "key11": "5Q7dUa7zUpQWeVkJMLbb2XxTARF2DT3rZ2sC68F8Hhz7SbEueFTK5MvFzc2FxCUuTciVYh9ew9SHuhrFqHBcAx2g",
  "key12": "ESZYaG4bmLVXrnSvaV54EnyrdmQ5LAmUygwzkc5FmXq7LdGTeG4AUL7LsMHK8jBqLkoXi6dxGugBnJmvfRbUCyw",
  "key13": "KYQAjMrEKnQuV3qm76CfCR1z8LUU78SAyyjXew4bxXkedXkPK3sbbfE9UneNLXED2tKXXR8h25f2qGbNKY58rAF",
  "key14": "3yUhJnVux9q7NAkG8WV3jafoDvamXy713n9JqMTorSj9fRgLiqHQwZwMQ3kp3BXTdgvaT6BqLf5aRhyBPCTBUvN2",
  "key15": "3Ybi6P7vrXJy3JkjmoF6q58VDJ3EiiAtGzRgdUEB9r2aPYxCEogrzgTvvyvPK2H1Ch6kcNibnxQcujv1FXtzUnsU",
  "key16": "5W3AQdX3zeqCFomqypzyMh5qYh1seUWpiDr266JqMv2N4XZ3ox78xH6FJz41FQwVFFhf5CfMSZWV5fvHLSxfwe64",
  "key17": "4KaFBysC6RQFT8e8TCe31myYqE8JU4tTJBwkJsKosojj4JuyEjk7VcwrKm33VL7uuwkE9um9WsSwHPgyAqKszgWV",
  "key18": "Fu5uiWkBnfPTCEWAUr3UEW77x4qjUsALSog2EJR21ZC1bkAGUwCRpupqwyLZR38YeL6dvKqVzaA8KnWJRtRfamF",
  "key19": "46PEk8XFWCkvqG74KR54eJn9izeZvjQxMKmizSiJq46KqFP8JBtELJmLrEHuSL5gGBZDeiqNhN3zHzzXvhcZWvCN",
  "key20": "4iFzhTwG9CKYkbBK79f2Rzd3i5S4oRAn1Xu5X2EzAcu8wrtsXmA9GUryEm8DHCkfb6VHaPTGYpUtEkfof21viKKG",
  "key21": "3zaXmpaWU2KJRbSH3moTEmEVwFVT1rWyqo3gaGffCVDYNE4NajbmWF73iM34JuuU4EjZqZoz9MQMvVmRbVsA2kJi",
  "key22": "2k8Lwbxn8tmaMzkKRfNiF7LL8f4vRNeYTXjmYJF1iQeK2GKvEjh8Uygavsgb9W8FLzstEhotuS4i6tPXUnVHtkfb",
  "key23": "4DJxi6ntGAcSdDni87Gv24AbkmZ62vazZJmPfWFoiQZ4HVw1CWXubyRRLV2uVfdywNEMbZBrikc1H2KMS7DmzLq3",
  "key24": "4c614rUFi15uCxFPfd17pwv4bh6WA4W68dAfD5FWp4x3sBBccBtr3izHBkZRbRzvmTH8yhXq7BrwfWJfCbiBfvZE",
  "key25": "5XH55FrE3mwNqtfgF4rdedr5YH8cduSjRLpcmMriLADKQR7uAQKYJqCp9RmGEUNgmWH7p3S5Zt7rR4Ecszz42ZwK",
  "key26": "3oa75UNrzATcgiJVAAJjuZwbHURfTFBA7GvQw6BmAs1ZLdT3fDZeft4ezXVDqisab1jEaUE7e2RrRPySdG9vWz9m",
  "key27": "bYx1oJDmVj9PRKvDKUmBwyg8LhDpZNofF9cnGG5XehJoQMYnNKwKnbnLSvVozXZvUWBgwp8MVFuQr7izU3sqd3V",
  "key28": "5grxsz2hwWeNsp2n3eViw5ECMYxA67C2PCPbdFqTbxBBGxbaGMBUQt7LQSSNoWCwxSJfixgC7STF2ULdPxwtyRvG",
  "key29": "5hHz8BjTiWLtDvgogv6fUMgj7i4fpJu581Aezf2jGGtQV2AepLi9NUWa8Ts3XpGGm2eJQp3aDesGqvUTF9F6CRwD",
  "key30": "3HTKPw845fCuq8JoyPiNqHzziECmegwHH29B9uue6xt2KhM82yeaJzXfbRKfXyogsSRXk2PJWh9NTPi6QmcNqhtq",
  "key31": "4bADm7pMUwa1zAgTK9TckA9agTQM5WGMHganorHXbtgkHsUbSFi4W7JMR485HwHK4qipgiAL68y2WqnSWq4TDDJ5",
  "key32": "4hnUYLp6efPkMNexMWfZCr8uitZzLzCJBGfrMTYvSh8tjNiCb582KUeuVyEqEetjEsSTcfez7y1JjSWTyVCv9p2i",
  "key33": "4ypRehVtrJkSRMavnXPsybfgnLyDY3Ce1BtLK7bGD1iHW55rtEt3a3BvU7vQMB7ZwybAL8PHYhxHkqVvtSTSizx",
  "key34": "fUefcXf8ceB7tvy1Jj82ko5iUJhnPqDWvz3ytwXgbpGGDzKsvM7d9Y1W7cT8pAgP64rN6VvBAj7YV5XgtJS6fNh",
  "key35": "5mMdBKygwcx7WtLrfwbcUXZLtN2a3MuyTzf5yG2oLt5HCFYzyU36bDw4TJzkD6groLyJVGQmsLKpnntCPiYJ346D",
  "key36": "3eXrC3pqb5ku4cEZUSpAMsjkX4KPQ1WA9ykDfWjCLumQPYH9TB1UkCGScTEgs6f8bJ8QJGJEaUEucQNokRZTVTNr",
  "key37": "29ypupDczjYq3Y34MDuspaw2iq7bgGQL2chr7GAhAUVKVAvcw8udQApKd2dkusHkVYKeiTrobkcB5hDW6m18ZNEp",
  "key38": "4SGjjcNKz7tDo5EG474ykaRtHJLvBzoQuwy3saF6Ti7KGpPX5wBkBGvZzASCXfTQq8H78byzKrY2e5w6GAUUbTmY",
  "key39": "5i7H2oUDAPswfjLYpzE4yBL3kw71YzP935uvcLvxXG3zebihYWzz9y7Z9Sh8WTAMgmHFzCWzf2RJ7ZGbh2jSk6eJ",
  "key40": "5KfKpqEmsG5MsDyiY6yHgpGALmmhrxUpDAWfiY1VRmuW4HV83Aoshq6EKaqCVuLqFcVGV3VFZk47kAv9PLJPBWqP",
  "key41": "4t9z6rxa2iNQj9dT8L7XdZunb7mj2w1AMcUzHfybLw7z2BTLtwsNKFCAzTAPTZYffiv1odUqKehfusVUNiJfyRCJ",
  "key42": "22hkKZQXmrZDeW6JNV8uNtGWEnC1oQMew9hhsbhccnCETHi5fu7LXk9RiMCNYGWWxx4xnYekBBQov2uiD2oBwKme",
  "key43": "3uZt5Evfxmo6tyMPj3m3Kotgkq6GpghmGLqfCd2fuF9iAyr4tsrYdMKEr6H2PCxvWNSYqnx8Bq3RfV1XtamBfknW",
  "key44": "51QiJVfhixYZ15i4rBxSdnrGkdBHi5yhYnESxUzgzi3ym5Rzqrq1uc6ekBztFsW5WuAv88nbbrGHHd8jh3quTmyG"
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
