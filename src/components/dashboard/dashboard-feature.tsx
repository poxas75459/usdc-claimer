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
    "3FgfUhXRcLQCpoFsEjc84GtZca59UawNDejPy1qHJ1PQvcmeQeqVzsW7gA9HRdq63n1ipnxhrXq7FiJHtJdduUH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GHrHe3mi2AzMgWiHSrpAdh2FyXUAj5wzdDPfJaMBTBtgfh56QtcxxpqUtqcQV2TRc26tvetHe7RGUhRfRMXdGLn",
  "key1": "2iZ7fK6UszYrH1QMFxQ4xCsn2G8v3QYwy9mShfdUx2oDsLgAgFnhVqkgvydPqBjA5kvHiySNoENfFXoQA4AjAdN3",
  "key2": "3YdEqredRDKsfRMWBPh9azLgdH55W9EVmdEv5KvK5tAAskr5kDQy5untFJjotCjCeXNw9BCir5mAVxEsdHL26dFm",
  "key3": "3zVEzJfMbKU8rrw7eigJH1HqpxxtUqpycawsmX7VyAogPtiSwgad2iJw4KdL3cZCn8hLgt5HwwobwLXiPaqTEyTD",
  "key4": "5xNAqviyAdWioq6h5tVF8qBHvbmUgurHmUeCZGT8oAyc7v2tavhuaK58PptrkfrFrkyHmnfohGJqh4gZR9QiwdPL",
  "key5": "43uBCUK2Ltc57XvCAbfecZWsyVFNwP4ZP8mdqjnSChKZKgxssATSSsUNqy7opcJU6anq7sDfq8etM7J91NMguYVD",
  "key6": "2ZtUdqceB4N3ryBso9TFZGtGNXEisaGxywcqizhjhbAC5iW3JikC4wDncKcLujNhCVRs3YJTSQKbr5B7Kv9iaPRY",
  "key7": "2BhuqHE8EzgVw6t8b9L3VvCmvBCzEBE7oQGgCnYwSvzdThwQXi7pZ6CgoiKS6xL4PAC8ujGMGDHT5bCWs3e1UAkC",
  "key8": "2WjapuhTDxQsMnoqKbf2sGifqTEcjdKcA6gBkKDhuTuf1fRrJTzGgPoxM9nJFo7u3g7trprX6KJyqVpFCbuJYyL4",
  "key9": "5yAjjjcj4XzFTfSihbu4HWLQCqSZbRK1Q8egi73VPSkNcbPL6UT18ahecNAib57pGCPk5ZjYFXyMdCeq153EgqW4",
  "key10": "5PLLAqBLZ2Aivm7Zgbpn4dU8nuMUPc4nSeVEZLWEbxHAkASVhckpLu7ZhPDQ3gqbejYAFhomY5ArUWht2JuEa1g4",
  "key11": "34w9BbEreUBeYNDxZz4QQkMoqKWB4YqeCPQxjHD8jxnLyb8L7EZk7VUtJgcw4whBykc36oPvGhhTmJPU6Ytc8AJL",
  "key12": "AShR7jYPCj7SNyo97pZgRCcMNs1YFZgj571HDs7xm6MDGU5HpPYPMbWmD1Jqj1yYPt2rJHnKToi3oYyEXdYEvTi",
  "key13": "4gyKpBAkR523mJwwPfGEin4J6yQH7MQ5845sN4PuTqNbMxV3Ud9FYovC3Jj6AHmoX2ja6XdmrXqrehp7WLci3HZ3",
  "key14": "pd1KmxmCpbNLtcAsfxuBDZjaGWRrJFkJst7A3m8FyArRb24DqqyVdn7zk4NBSNRJZezWiGiWKLMiqxhbxnDJY3G",
  "key15": "Ef4zCLksRQuEkSFU6mxy6ftFwui6WuxymSQkFdz8CTXyGzzb4VJnM5rbu9BXVM4HoKuQ8jLNdE5e89JUje1WgJM",
  "key16": "4iUVVkad1WirBjZ3uXJQAfdMVyEgKbMWn5NFW9Nr4RoRXHWmiGBhKaHhgYSpNx6HfCDwj9v6WGEgvxfd2xG2YrGD",
  "key17": "29c8EpBx3Z51hfyyuFmVLfER74Mnwkp8aHxBg5QJNcwVuZaNYcb5spsfBkkNRi5LJYkK5CZepX84HbTYJDUC1SpC",
  "key18": "5fhyWBEnXAhK3oVVZdjE332GFf3dWZzXexvaK697VD867eKmtHksQBDCw5YHFv19H7HaEvMEkJnj5Nt4KDJengbv",
  "key19": "d25sPnGHv2WcVinnq5jLAj95FxpZkizk4pbZvHid3bWAqUam1rxnnuhUYPxY1pocpJwTzeZvc9P9DZ7xcvbgqP2",
  "key20": "5GsWSqnuj4vhuCS9A2ekVoNfx7xgruSYXH5t8GEWtHcVoqajJmyyj15GxF93soYkL5uCQjP9eokGkbDJTaroEQnK",
  "key21": "4ZGxBmJ5WuEd9Gmwo7yz79jGbN5SeoQ1hpASS2nBQpLn4tABG2swAwzK5bFwXQFRXCLE1pV6pkkLAkFfGoPGqXjJ",
  "key22": "vW39peYyd1z1BU7TL9XXrXpeWrctzWBbXDzMNYNAWFsk6BAQdza5iCzZFzDm8fn3eZUwGXDZZVo2UU6LBoJMhDW",
  "key23": "34ghUEDKTSwFFLLBNtJWjXNBCLWLQ7b1BoDLpG572hLKfMmN2WCc6QgqXEgmx8gRDL53F1JLcqBfHNztDocPggFc",
  "key24": "3ynpSAqNfbhk4zN6VyguDP4xKupiXvJyoW4xqba5oGmPf98DQcBqquKpPYkdeMP82QPvaHHdb6hR9tKJ9YJcJY4k",
  "key25": "53oK291BHhbQb5n5XWNBkVpkpSvNLEKd5hfS2FBXdxUT6cd6Zwzxg1q9aiGL7R61yQvk5XUZkvpniz6xyo4ZrzPB",
  "key26": "5LMMgsFJWgS8LmmsaD9VBeKokLyziHJyuHvkgkHqmBPDWvZGNj7vmwKcGYKtsjiiLGsepLYBwhPTnzjobtcbyd9N",
  "key27": "5Ysc1cvNsjMdCQc1oiqGVEV4dnXuN2iuBBtbrNzrUKyAMHxup5NS3mMLxc2RUYWUGDxwFht1DrmEFY8rBGNoLqox",
  "key28": "5QiWvVYzaUgb7WxKBYBHU7X35HvEB9WKq3EFcRjucV9xjedi4gVJLCbrgzsXdy4Cwz7jnZ7TYrZbYdK8DKUWToyF",
  "key29": "5nWYDWpwsAhJcAa4CxMkziwBujNA673BHVuMfKo4ghaRMSmfeppdS29dKQ7mxcpTs4jh6qLGGrAKxxb8TyHGM8Tt",
  "key30": "iQuPMEso3pBJwtuLyDNELoq8KbgWTh3Tqvjov4F2FWRxSpPrrNACjY29gnoULtpEDT8YzuHatQoF3J1mMtZdub8",
  "key31": "8eyPaWRN5EkcgQXpvHRWdLLbikiDQpvNCB9XbF32zsbL98yxSREjy5aGafW4cyid5G3xcmMpQ27H6hJCBPA5fAo",
  "key32": "55LTCxY2C9krMaQJpnxZaWkxu5CfSmpjbcnfGEiqVVRCo5LJxtkPCcDfkWJstfnTRU9qAZTZvq3ZCUhhApnbt91D",
  "key33": "2VCxpmu7Fuus6EKZKKFQH8Aqg65aMV6hN1aD1AvcyfdNHU95eMZVFoPVfHvz8RTEwCqVVd473EvAp8kSkXVtd1nw",
  "key34": "yKPHaUsFkuTNe3oC7zHnysCcXaPY8a1BYCeW8w95VgDAhLoSFdGnpsnMipCmZAChrKaCLQwk2wLkEJtSeQH9Gcg",
  "key35": "2Kv3yk5KcSWN6Zbx4Dvd8HQcDTvfdZQ5c6JhcXZv2wKzgE6WDGqpSKcz5ocMdiJp9mSTEXigncVTQHaUGE2RMreq",
  "key36": "2aYam7QRc3KbH9YSrMfuxsjefFe6bZU7GJsYPdS2NPmGP4nBHbqitaMqgGN7kGkQLJJygFSrYMdyLVrbzLtECfS3",
  "key37": "2o8B64vCSg6eR12xocnMarFMqhdUscGXzn1jHeqWXGm3CgSvBt1gDQ4tpnzSXTm5bvrQ5RL1Jek9iUkMRQgTL1Wy",
  "key38": "41f5FcNhcnEBrt8hN1HUjhevY2m7qGSDGC9WncMebnerYt5DefjUfr7CSNCjMSSoLhnvZqEke4FPZK2V1mE15vZ1",
  "key39": "4jebzEYWXPLVp6pZ5CgWrHAgohEWmduRdbdu28V8CHQijhF9L2dW9rtwCEgWXmza6sHzh6GCwAVX1Gq6ZTPHxXRS",
  "key40": "4AaZvMW2q4mYnhZKFaFRnXwSZYcZXDDTP9cV9T2KjMhruKizRW6R5GB9pLsZ3pPBqJPACjumFpvN7tm4movaT35D",
  "key41": "5Hoogz7SENWNKhttBcJkz4FcjGAvhfJK7VoWPG6Ep1jGpWgfCHy9FnyR2e3FUe1dgG5tH6Dpg3MkKbm6sqg5f3JN"
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
