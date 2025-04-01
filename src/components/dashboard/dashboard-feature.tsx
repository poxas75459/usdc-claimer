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
    "3bmkQ9289zaTR1akYpsDdMVt7e81i4aVT9DsSRfRUJb8CagaqDNEkTLVLnHKxW34hb7DNkp1A7evkLP8sY7LMiN8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5E5CbLxxZK14PBtmc7HbuzwKv4sjPBZ4BLspHN2f3MXSNZ2p44WuasCw7eZWYAQBDYwbe49UfWgx1TfFUg4nk6Gg",
  "key1": "123BwJzvKLsK7GrnF8FnkWDGUHs3qjwkyxCLu7dBKDKpSK7pt99qpqbMVPQm1rQngaywWFJf8v6sHQgeBYAAmW5y",
  "key2": "59VQkxZGzcV9J4bAUKEW2w8EYcYYAaa9MPkB7VWoXZUE9TmCsBBfSTef5V4D3zmjW7dgdwPitXhUX9NkG1ACPFXx",
  "key3": "4DzJRNwpe5LMafL3DUZ6EAvazSubFi5zQwvV3gyKhJkPKSpGYeqiHh9FbjLPXw42Bu9GEYVzJ2AmBa4v1x6i1Xt9",
  "key4": "2UiVW3LD4GVmid4FKqcDpWmHvUCUZgqiPiWPLs48LQ5PhCgqX5UsNenXmZpw1SWNSW3E9y4hHHzVkjBkmmLUbdJB",
  "key5": "bWg2UWXwae5S8tcewT3qcAHy1mqmSpigZVF2zTp8KLLLcKJ5axDqw5Pmt53G6QYByEAzfAQ465ipFpEYSKbuBrM",
  "key6": "4ph46wkBDxCDDxwpYFMN4KmfyDHJ5K8zHW9rYwQdhWxKBfqdLnJexkL7i3164DLwDDnW1ypzAiNv3duaSVaJtLao",
  "key7": "4BXk2UjVGNHfNmEPMW8N1cpohHGthysj8KGM7Z9FKGJ7c32R6obUvb7a7UG5TJWWar8vny9vLoT6P3FMYx25W5id",
  "key8": "3L32DizttF4bAH5idgqTHxefr7DF7SWYg9kkP7VKeVkduqKqFDrXpzx5D9okRsAeff8fJVWKruH1ERctaSMZHeDZ",
  "key9": "4CQrySsCkYwZVDJQauZpVHcJnQgn37ms3tGL5APZiFXEb7qA792iterV7WYetAc5qLcDxQPpvKAUUo2DWA99BPj6",
  "key10": "4hfc3qdbMDp6sVvGWvGQhFNDoP2kCq5aY1FiiVDFwR8bXTJkHamuwGsLgLdWVG81vgTfxxjgPWbYfSwUnCHYbpp9",
  "key11": "34fhdrmtxbYUxNbW8xutTZcJuEY7d1bP1KkXk3YiH6jD7UzPziyKJWtTzLGZZqsKMwFNH6qCBRooekF4GN1XiFdu",
  "key12": "24HPAy8eR9Qj8XnBgzucaVt934RdrAwPZwTN9Lmoxgx3k9oDBbcQ8KFyHMVCPrnPerUoLQJ4QBEVwXpWgDtJwJHk",
  "key13": "3LqsZHehora7RoooyMtxiRxbpaN7UemYzEV2H3hok7CMNYoJHUzgcWXiJWNHHu2tAk8QtwzoDpb1BYdUHC9QJvzx",
  "key14": "Jh6VQHUXvEd6gGzFxWw1nu3kmV6agPnKKCHR5kxdi513SHgiypTfx1fLfYQKnydrTusedCwcKuCCsVhe4S9R1VL",
  "key15": "2h4fT2EfWpJ7YmgybyabSSoHAqAE5GD9EkKwP9r6otJuaCwc5z69qU6YdQceEu8ZKEK8EJ77RehsGGVLMJV4GWw5",
  "key16": "2N5aGBmax2Z7pQGc2ByFuyXLsB5jvh4r7F4MzYWfQzc5ELvz1Ux5fhLnawXHYp6MktAyPpATVt1jXyYxBjFkyKnW",
  "key17": "JVYYkfMwF2vAn8kBi1gJdsqb69nmbuJLBCgm3g4ecbr7XjjJ3pSmYMfo1qpZY7Wkcd7dRHykyxupDtjKrpC2JAA",
  "key18": "5kNfx7X2fmZnnpvfkxLayA2oRrYNiDwF8S8ApWz5XPf3iGoxCAfE8nGByVnnDbz2Tr86ckXLcJTLik3QdJ3DNDQ7",
  "key19": "43LNpXhYbntN2aiX4iuQZMgbaMdiWsVufEtrhzuYtwJxkiHsAGKZzCur6hzcqVjeL9n9GUnckSLEL7qefdsm7G7r",
  "key20": "2CgDjU9c5evrYxuPyo14HJWNBYzE6g7Teaw26jvUr9QxhnAJVMT8Br5d3ZbTGbKjwXELH6qLhQQXXGsnGkfMSgff",
  "key21": "nB4ZwJLt79MrGdK3SAbxo2kt24UcKJACi3yHCqJT6mkvUq8MuLaQUcVkb97cufn3tsJFHWZbHM5yhfVxsPqd31M",
  "key22": "tfuwqaCDZfK55WMqkrTdLGeQqswfLgNwdcraR82HEmRfQaHAvXNgoACZENJMG7NdFjXEbWK2xetbjngp9ukbFzf",
  "key23": "4awH83Yik8CKHKrhjSUnb5U5Dw64uHpnf2u1HjqeF9qh6ZdWYNJpGTDshvCygroJby14bfPWzZfSasvSKuE1ZoDM",
  "key24": "3AGWn2QtaRD7px7CXS2nXcaxr8K6XTYGFrKJBrRG4kTAmrxhuNC8d3nYf7LaaJCrPUzhf2PynRGZuFbDE5tPh1hJ",
  "key25": "5462kWyUTT2vqV9myusJ8YtGUDm8UYwzR1oZgarpvUmcxY6Uns5u8bN1haYUjnmMqT9Fe2EBxKXwsAzYZ8gMJRP7",
  "key26": "66EAHW7aeLTHMqoWndHwb8q2Z67YBZPqi8wiv98E9PrJZyy6U8Yg75FY8QvKPD6HCMPpnxdDk2ELhqmbWykGdv2o",
  "key27": "SkupKyDgp6m3qixsMPLNXbAD6Sz3W5Dnjm1srMqiwtfwdssgaGiZWwdF9t5cLcPes86yH6Kcmkqxx8cjPATEjD5",
  "key28": "3N4LXozdP5FhUNgAxccMRM3CbKod58y6Kk6oUqasyrTyMRScH6CscQxAGRREtdP4BXVzMxK8k8uGWhdqmQSGZ4kZ",
  "key29": "24FvCRbetRNg6JMzjeiZHD2NhXbVi8AKs9dgZ8VGKmiZisPSPHQguARmBpWSUWMTG87g7yBjcHLYqjCBWT5U8HRJ",
  "key30": "4emVM3x4F3dSsLYW7deSVTWqa1aP5tPtsmqSfuqPpocQ9YyGrhFAoug871rNSmuqcioXzsj4EdsPcg6FCWtXynf7",
  "key31": "BG51EDomMrJ9RwbhCEryAYTYtjvaqTKuLqzCwyDKGycesnZ2gsbZgefiGzuiGYRy7dqYZAtrG9dTPWTPBtGnCog",
  "key32": "gKpduDBKf4yfvywMLvc5GjQsEW8KqXVpPLKznSWLAvS9K7knuqhX67kK7LC8y1wJA36DBJf9pUayLCZULpr2NJE",
  "key33": "2sk6UCryhVL8rNcs1FjWk2DfMjUmsS1ehaAoaLYvSdHSj5ucPgGXFjzQ2StF5D6xTrpqHcGC4vs7JKjUZNpoXF5w",
  "key34": "4fyfF4qUtJjuEuHNiipvpXPD1dbf6saX4fmWSgBbq72XbXhni6NN6tFU8kfTaGzVpCfzrvvL6Ah56XvTSiZTHavU",
  "key35": "4yjYvHPTko5yYwtBDsXBivcRSmW6ciF3xKfreM3w694BnTj5hszypMQAuWUqgRsdt3ebgxgW8DeFwGt3uRG7up3b",
  "key36": "2n8ekJWHq87qDPDNzVUGzUMVqcsgffPiVHkc1bGuCjrQfp71BWVmvZ4thH7kiZwkAFzKQazk3vhs1m1qczjWKyb7",
  "key37": "3kUA7SHa1uvpMJQtD2q84EC3bJYwvJ6wBceUMDvvUbZF4UyKbkBSrjuuRSPbhxH7ZRQAfPye7WjdmVmsvbdW8JUz",
  "key38": "2D4Xoans56voG8pCam5bVVk5qnjGEmrVhyRP6uxMw9yaFXdSCuYVXqSwHwPv7NP2mhq8kcHJSBs2XjsiUotHSJNJ",
  "key39": "215Df5A4rQBsPCmqALxhcf7PgarkQbRzRVyK5YzUBrVXaqmBGShzhgZtSC1w6r2KMaErDySJGQpHJK2jToiStAFz",
  "key40": "2c481M2Bfsh6zvpDHrCfGeZAQXTvXiMdrRxrJ1XPo2ph5VJvCrcVdtY2wS9mLktXoJcSZXgGHo5rBKgN4SmaPM3Z",
  "key41": "44VWJ9SAC9RTLrpFrm1SV2Nb3m3GVt7xG5HZXtiS76tRxgSHAXpgVRECkykBeKBk5uERLKtRnq65dh6ALdopmgkf",
  "key42": "3SLxfqTvMvP3ex13W7p9TWgaMV1BgqnAFWzsPDKT9q2wmV18hnkmaStQ6eUkUZbAEoaL3too7UrkyR6pzrVv15Cd",
  "key43": "2AVDQc7bNomsBLDqeuMznihUA2973eJpF2FVBh18KZVcm3jUkVAAZypwqTSsgcph4yCp7CCTTN9biWNn26KWSHCS",
  "key44": "2QUzvnpsDsDCBmeT92n3UQJX535Q4F6vvDmQfev1qqXiBUQHZDniuPtRiPDZbbHfa8RTnRCbT99CzMdfBeDks59e"
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
