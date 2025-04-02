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
    "45hDBDKPi6HJsAhhwNTH4apMimJLpMvfP2mgd7DH7XV4uUj6iMQ24D2KYn9e9ns6TQ2PcarwgHj6jLrbf8jGRQwY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uWqkaXa9Pf2y4At5sCiBYnppwv37mTwkVXBesRddmR6YaEGgHnA7ou96g3GTcbbigGrXdMZjJu7X5JrY5ZppJQ8",
  "key1": "37jGSki87E6NdJbraNYTQSdN6ixPakGyt3L2JcMpUF2qraXhm9BKnoXk5XvKZViymwDKvWUDnmMMvW2arvfsgFps",
  "key2": "2meBicgBVWGmmAcFCm2aqS57vsFD23u6R3WfLS7ye3Ry2EzuxSj7ChogZ3vCgtDd3i8Tg3twvzBT8rbb8dhV7FMT",
  "key3": "3w8jViB7SJ7SnhWD3JTeFv5JipNMTa2taRkEHAN3h2d42GKNYzk4AQpoLBAZWkJ1cCQYFLuctNPk4pZoa3e5J66K",
  "key4": "rVQDqoAn7RHswiYVfzbTC2DBWDhNftnsr9azer6APeGBBYKJZDsSydCwE6EhcyJrDm4QuVqS6SgBBoLh1qnsDCY",
  "key5": "56CBQMYAjsKFwEWwRtz4yF6dvPZQfGVsh5sbF2H3gBnMorgojcvozrtpkm2oYgdtfMr1AcPzd6KZWBktKaPtD8Wo",
  "key6": "4iWKaSA681KECKcLUga52ZK2dpqZjnBjgQok2tsLN5KDQFE3uLkUpqHCAEnKbM8J6Shzhv2su4LikeuRzv5fenmy",
  "key7": "5ydttVuxKcqjGuGYXuvs7orrdbDfq5weZYDbxAEfL56QARyNxqQwHNcPu2HXAnhNwo6FPn5A3jirUZtFzM2F7GkQ",
  "key8": "65vwJhAF6TP6NA6eEnZyTxysPA6URvEsENFz2e5wqVRszjQ8KiELGM9i9qGoctQQRHZ6gHUxH6UHCXZxBZcruic9",
  "key9": "5zoopmNXPTzMLE3Kuc6UpnxJ4gbwKsQZdHMrfjkXENYwJxSN25AnFn3uXhZNUMvoEonyWzGs5XQavLK9jjmtBajR",
  "key10": "3fZYrapxDwRBdFgaHkM8gkVL4tzZZ1gM2qBXB6hsE1odeedjsembQf29ZDP3kBgwWeADNb9vBt7nHTLGTmjZzPzH",
  "key11": "4UpxGxsF85jb3DLkdHaz7KLQ5xgjcCERz2YR4PWpVcnkTPPpfpM2YK48fNppbQLWVNTAWWbkjz5Y6ZRLsiwdDPMQ",
  "key12": "4QvmEMKQaKESxCikLVXRPTUwRCgM9ggJpR6cM5wKZdi6cvarGYYpL9GnDnmLTojSXq1AN8rg15smkoNpkYKzjhDn",
  "key13": "5a2tWJDo7F8aAoJnib4X3Ju1wZdbkWhyzjamQj2yrysowWYNYk2yTm2HBxyYbHfdeDaXyffi345GwzKyWJYMTQ5f",
  "key14": "2wQvjxdsJYS21zPxGJ9xugoLQ5b2pn9QFUrNmB7xQ9GMd8oaAGDmh8nBe6ezBLDXDit2XACHD86xrenvF9tP6bwp",
  "key15": "5j8GNnJsKWsyCx6UEzGXsMD8ggEV6garFhUpPBCvucCBngxZtjaYNCvYHCqX3Bw3pD7oUDunKfj1PyctyJhk6bmD",
  "key16": "2D7NbqveGkWNJnr4JdVcoXuejPUecQBvyZiPyTSDfCKKDr6iMj3qBAvFGQ4JjR8zekpNj6bW8iWsEehy4ATiWSo3",
  "key17": "rZ2iQVpeR39C5Rpbk92RJfDqJj6DscriBxuTuGqcB6arAqWBf3Jos3w5ZjYwVfFKqz54qhgx5Z15P79xnya3B6s",
  "key18": "3RWwuQ5nPZCsQR3ssUJAbBdgXoCU8akEceKt9qNsV33w1VXXLrSqL2hHKb5LZZ8sxCjEccMJ8vtRdPuXdwCsk1BX",
  "key19": "3aFxWQbDpeL9fRcBScVc6JNshtX5XXP9UeNZEU35LbHAuDcaCmQFH7UJENzLgdnbqNTJLFPKwcpFUGZVPsWDHKPK",
  "key20": "JL6YcQgs2UosAN68eiuXWyRLdwK52VbszE6LXow13KApBt8GiAAot7ugF9byuskSX1Ff5FCBARWPGUanaRCwhax",
  "key21": "4pRZDxKEeMApL5wi4rCtEXFf6S6v9ME3ekr56yBX7bzjJDsQs5sPRYzedw8nEM26hbZ3tk4rAme3BsohUTtTfPwu",
  "key22": "4tiKmXTLhuMo3d3jXHmAee1UaT3Ltnqcpi9quSyorjUij1kfXCKXLcG8sKiBLNhff5qz4aAju2CEhzvLRrZc21DG",
  "key23": "WWjVvxhM5bP9pA9X9AXdAtzU35mndba8eFbMr8cLBYAaJBDnVCWvDCqcR7N32Ft8GVWFGSdSquRQw2WKai5A8oQ",
  "key24": "5FefUSaP1MiLGV8rDNCHGqFSPH6W12s8g6W9Zg77hPiSNshph19eQz83ojoVqtTWp8RkYLJrQeBeXS8GWSHhMVHS",
  "key25": "KiyeYyn6Ff2YY79Xh6yzgtg43eHm7QexZptcMn8VCoAtiW55aVvz6ayG8FQ2ChujefwYaRwab5a7xFRjJEHQnEu",
  "key26": "5Qq56c6DW9Y4YHfz6idEjrg4jRAc3poNbrLNh9SqfrQ42wxjLkXbiTCsodJzDbcbmYihineSKvUBn97mFKe1kuye",
  "key27": "5CuAr4aJShhAjJiUdVxqEYMxy7YwCDctx2XsfHdkxXGnfKnnV9AvF59LydPQGxPtEpCM7DvjML52S7BYA4hLCRtr",
  "key28": "Zdw2kc4cX2E1oThfksK2xc8X5xjBgFHRHQhjTmCxd2oxkXKngz1nV86PLqZjbXrbkqGg2ZDRCei4VftGTK77U6c",
  "key29": "4BUvyhDuhCJwspMJ7vx19mR7QnwLdqLGQ7bdaST77GnsBEDmtzpNQi6KC6QCV5P8MT9GFyhGuMHjncmrhX5EWKEi",
  "key30": "3qgjbZYKaGZeVtugxPA57HSowdZFL4ykWV5NQi9JBiu6dHvuUb4gp2RLMeF7Bux19SfD2xd1vNCW5rLQ5G997fUP",
  "key31": "5iZXNGCsn1GTyDMAntboi2knsaQBife4bQXmqmgme68WD7x19E6m9opsAL34jJain6JuTu7tsP8xLAPwmQgwU1mV",
  "key32": "2N1KBqtuo8LF3vnozJV7jAatizXgmmZuMFCfxPLu5YXMRNWav56XcsNj6yXzLEYQjERGFcQdnmMfx3216cT648oe",
  "key33": "5ouGCQmfePmhfz58hMVieqbqhj9qXZ5iPFPX2JUiiui3EkwEuxidTn4P2uKuynKQ7L5n5EZRYgmoEiMCdKLaPUEa",
  "key34": "3sx6vfGcxTnGuhbQH5bHpnisRvgcgNiyNVQJm2MSLCDeWNYvkWRfsp6jp1AbB9hWe3xKb8y5gfEqpLCf3GSSzKNh",
  "key35": "LFv55yhJF88v3PpCHYPoHyyj4BDvAeSyC9WFSXPMaw6ssdzYsp1g4jJHRrWvRsFxwibYRyTFL1CEYD9swmJBnQt",
  "key36": "4pJvJRH23GMaDcBrprMu8SpfARvroUafHA9hq7qCWNc7RP6D54VtwM79Q4p7De3K6hP5gH9pepqERRpFJRcaHozR",
  "key37": "4pjSwcBsKnrJWXvpTfC7hg1oR2TZanHfA4jSDHkLo147vwGfnEDWsnrbdrUR8DUCJEahPqaG81JidQEk6ypUPZWn",
  "key38": "4RYLuiFCQvEGnaCkKPnULQAa3ZnhgLvZTPPZ3HBmcbEAkeiRRtiUdeiQqKmTpG3vVtYafBb6ndP32SRDvS5VmHgu",
  "key39": "h2dpRcudxr5E6sMuhZq3dzxYs2mK3Fy1tkLM9XZoLiAqQ8rUEvb5YLQ9tqFQBh6p9rsbx3bxVRJnX4s9e7A5rA7"
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
