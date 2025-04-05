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
    "3jASCJzWi8aYjF24htQxzHMkRRbne41UXgGR6scr7hptXLZ1eS4NE2iCFAMyqNf6EroX5Z9giCfxdyXVq4CuxHbE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FharCUH3qTVYPsfJsY4ENHYwEF5JCKJDfej7YYmELTzYkkTQd67sw5v1P4y6uWYV1dnCmUPHg4DCnn72VkjivQb",
  "key1": "Wt3fKdhWas4WiMSTpiDJoJFDujKcULKHNKV21mUU9Vuwwo7gSL6pgXYATt66Dvm58SbcktDcxpKg56Y5jDUtZno",
  "key2": "4S4hKd2dz6ET7SC1fSxy3Qcxr4Uihoc7vvhFKoB1vAbpJE56bLTqu83kQuiFtngwbNR4w3dvgwhvdfiv3nW6SGXT",
  "key3": "4vf7KyJip9b6gGKRd2DjCYR91jntJT9RwWWQwy2whTsiJMn95CNe2NuGJDkjkmstqoXM5T3xoiREq71tBQu6BGMx",
  "key4": "5jMuGLcZihtBhJMtpXWRrUUmx77fhfUFkfKc9MzrxsXdqBJqfDAHwub9Mu6rmxhXm7YGRbxppyfWk51VvAiMF2m1",
  "key5": "4kKoadoWGjQRabfs9tQPae2CLBc3YqgZuh5y5SiuNRn8K2FwJ4gpezGix1kTK17oYXLhmHpXmsGgNYQTq4L2miGM",
  "key6": "D9DeyTFB6YEwkcxZoZaMzWbDkJ3hCey8xzXh9BmcXwgBKPG7jV9KTTuauAV3w59TRrTDSPLZVqoQcLaTkmbfPw9",
  "key7": "3ybmqZv4XxMhCWnfbE3cQWuSsGG2YaDmArbRVGRVUQVTY9FepGNV96XYcvsRsFvf7y5sMUHSv57XdZCAjCaefP5m",
  "key8": "4oZqN5ZuFewXCVN5bVeH3ysnkHNEPxnDnpE9PpMcyqCd1Fmwo27zbLHHHDGFGxUqVgUVSKMfd5wLWVhu8Aubf3sc",
  "key9": "5zLpa5hjriccU4sKi4bt1YXqS1j1aQwjuPTxVNo54NoWecaF8nm49LZymuMeCevGBXnyJ5nRFixLMbrEVw3qZkKB",
  "key10": "5WBBTJKEYcDVgBVjUq8eNUTZ9usN7RsJWaZkKTSrNktpzeCsqesXfdj6gx2dSpGvy8mV1u94db8rZ5xUBXHTs3oU",
  "key11": "4JwzEQiMCLGhVgW4qaWgPQW3Vj3ZYW19Zweux3FxfeYM9coijFMP7jqM9hsiY4xbsGtaiR789KycpixwGTGhAtjC",
  "key12": "5VMENWxLpYPKLAvtwZ6RhWCkBJnyzKNPMKJmPmTXH2J8BwwMtkrdTh3ive9ttGX7DUuA1RwShKKBfCdVtPNDNPC4",
  "key13": "BiDyKa96dYowXt6N5xQnQwhufj4H51copHvZccFj1snwBhGYMKkF1r2MP6EDAxPC3uB215bZtezyBYuDTJ2SEZt",
  "key14": "62SthzTQ5ukq7nYPGnXRtBY1CaDQShxMpQhzjQTAN6s1TiehbzgKydtX9EofrHQKJTDN23va7LL6u1kXiFubioEu",
  "key15": "4hKuxg6fgHQkQY7xomxk5Yj2XJkci9FRtvphE1he1XQBiqTyFwd4owV3ZxZVyG9iFguRHKbWfT7bef9Z9PyVdiCg",
  "key16": "2GvXGroJp6oEjWcUFSC1nDHiRddXQNYnxoYpFwcp6kkdjie8ByhstkYM91fEDX8nNmdixYkroUsHTPXwEuCiTH5N",
  "key17": "3UELeMGhbF39ZZqp9UrZNRkEzdkqB411JQt3X3SV3f4Wc7oaPv2ueLE84FoN17tNA8LpVGzmdLcpaYhyRKYkvnMH",
  "key18": "36mNtT1WXZ7dzboxDZkUSbXAptgnGrFnvXZvjxCH9twDq8wA939pjtqcbPnDxC116x963FCRnYefwQwk92D1U5eZ",
  "key19": "2NanrxuPF7PJ8bJX1GQxCaUWsEJUFjvj2wfiiCZHkSG5jFdMge6wrm5TJYMqaCqR1gJzPS3KjAFGNqHuHtoSycr6",
  "key20": "4ycKjYaEjrwJycecbUwqC6H3vqRYiowGhH3ajNS43UpA48eK6Ny4DeFmLE3kgCxou8oLmr8Z5sQdxgCAGRwZVGYL",
  "key21": "9WrMhwoXusGpsYcdKYA3byKbqKbM5xeQz5SqvqfMffNQ2RkDTF4CSDpF4bYApAr1o65HnMuk6nrv8zJ5iKjuBkf",
  "key22": "2tA79xQpWisNkUeR6qiR5kYvaxNb9NuuaWn6pp7wnY8DzkayLYFdfxX1zzPaYMTY4gRpe5crAf8Mdurq676HnfjM",
  "key23": "2hHHtsbu6TyA49CnzGZtw6ZxoVq1j3A7GG2RUt4HTZB9fjoJwyaNLCjETbxVdBnhYqdnTonVN5aL1JrCojj5hEnR",
  "key24": "24HDMSBmFHPafmREnohh2FmX73S843Zdu8RWbTtsKGoRtxAquBX4n9DHr7XLjZPmgDU5EGx4dvdSSfV8fkEhC3Jp",
  "key25": "5E5ESBoTLcBJYQ9aXE73vGbuDyZRX6TiPvz9Z5PU4rgxLQhDP9dVAxRWeH4tHcMRan6Awvd9TmmBYg35Ps4qR2jK",
  "key26": "d3HFGpfSyk6J5Bq5PTuL5DpNNZka2KFX8riYRRiaScLfC9ojMyX8zXEf8Ay33xF7wmjkqBMghLiFfA2DYQdWpDv",
  "key27": "3yVfcaaiMTaU51jHqbi66nusWPcJyNoQT5LwnN2QXZWLaAfv9BM3G6FLYJPRDwVkstCuyfcwH9fPMHPwjdHZF3pa",
  "key28": "P4cNYqQbMYfVbKRBVSi7DCv8931ELhnYDNpq81DNZpbJMh4qBDU8eCEmKNinwaPdCi5iwUrhMvW3xw1y1USJyyD",
  "key29": "4kNsaWSxy6h6Tz2WeYDPFNPgY7wvo4RTnksQaaFxzbi7p6mffA2zK4AvJ8kzCZ6YALdUKBBCMo9aeoAeKTRzCZZD",
  "key30": "4EFzQkVfcfcanLbUfs9YsVhp9W8E1NV95gmpNP6Fv9Nmmf16egnVGJYdJjXvcjn5Rvmzi1973Gxijgfvhf5Dk2WQ",
  "key31": "3KfKXiFqpQpt88XrEvLaxwcxbPqNQovnsCNi7EC4HkVx62XDjPksVnp4wSQcDS91q3jh7iombrKJW59on9NFSmAE",
  "key32": "E7eLGiAUmxSL5zQzS8HcuXd3bP2wUiZf4QQCP75zyJPj6QLmkvxryPd7ZUJB1dGix5tJMMxTMCKUKjUT9dK6b3u",
  "key33": "2C2prn3qw61vkUg2JmizhUVgA3vP6vXbA1PDCZZ7XN1oRDXeJfXdqoU4gu75uM526Mo9tzG7t1MxjNwLD9cMXV72",
  "key34": "2QtQT89uPgUovVxbPvF3yjF1wkwqZe9w564eGMpV4DENbR48pRNjEz6b9PbXv2TqYe17YQ6cap3cAbi6K7CLyxMd",
  "key35": "4gLxrJYU1mLwF5mnFZsGku4dMhqmVAZRhGCC68BZTvoyicAiKX2bvTa4ZimBLMwbCaes2GADARoiAtnhpv1ghiAb",
  "key36": "4sdSRHdfcFDB8H7Qv7p3kFst5wpSdtEk3Lf1LTBuqcBSvQZvkDPMii9VHinbymG8q1xNHEVBzAe6jDQaVVn3TFTq",
  "key37": "5JYimLpHTqZeAutTTUTXqww2gTA4rKxo1KRmj25znQeXYcrWHhqMUrGpBB9hp8oA2JrGYkTMkPwuksJuzSve9c3N",
  "key38": "4uae6edWzyVozL1AQefntH4SqC7uQ45z54RFkKvpoWxHsHBUocE9G3JZNk2ZtGi5zcRMhAXyBXbBXW5RbeWAtubT",
  "key39": "53dCUwMoRUCZu2LMtNnBrqDxwLjRDL5ULW2nE2kXiD3zeEruBV9ogTDDDfWiBQYBhQNE3EtBoYqx2CArNkcHNgd9",
  "key40": "4AxB6aaSQxjneb1ieAqBtvDzcRP5MWZjhN5ocVooqByRkzHXdeVJGt1jYetEkcyTvFB7PJMwtD1GZczG6ecppDqN",
  "key41": "4RmpCZ3yYf9EUhR422V4cS19Fw71oZNdj3VWXzcLhaWzZUJdWryH9S4iJZHC7wx9M3qUhgmr2izc5SpwyKtAMyuj",
  "key42": "2bWUNfnNNqkUkufgfHyCSxWNFVMshTdbcsRj8be6z6jSTuRKxBjUbLX25BT5FB8FtDGdUPVPPKNU6LDq3Q8aJRgZ",
  "key43": "4dBoHxmYBBxD8fsbwke1XdTBCdYYaU42VmrRHqfxfFGP2i7KV4JnvwEdf4XbmjKWyhk5uAHBhjWVud5BqYMFWpsm",
  "key44": "Mn3joPtDysrNCJoKyNg2VqwwyCQfdsjHwNmaa8kpmztPbrfZRGW6EvdrrgGscWUPp5T3yx7htDgvSYBHtyCb63r",
  "key45": "5HSZgv5S99UAhr1MHt94pMs8tYKBk8DcB8ULBvoahNhkZwAWeszhUXhfUsKBxbhPQjKGkbb93BrHF8e8FBbGci9E",
  "key46": "4SdZnWbnkionQnXSzb5iDfaJsgF7gK7P2cHWnAhqvgDJGH8vueK8h6H6rMLdt7jBooXBiJiDkBbpXT3unGZewS22",
  "key47": "2PX7tpNtqEtTpaPyG22gm3um3JwM6tVk78AxcFoHDbdmyQQJK8DLfXTVSRxiQeqaFPEh5eah9TYPEuMbDi8YzAM1",
  "key48": "5vHLLBkmdFvScBUbNxHwsZ97oddoa24Hb3Y9eXQuL5nKKCK6yFDAuaegwmqVABvu2qSkWqrYLnFhmZV7Nj2LeCru",
  "key49": "3Zf9wdMiaTLbj3oofLX7sfFrdni8VQ1nzxUuRt8E4TZDQHmqHiEThSdBXgH5We3xb7YuarvNzgKoh456ZTkYB5VE"
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
