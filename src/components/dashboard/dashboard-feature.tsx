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
    "4BwL3eiin947BuSru1FuyLipxR39zHcmxbh6g6raQ6Ng6qPyaguPZ9mZ9ZSQAmw5kqbCTdsrNgvoJjABR7DcCcQY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aPveMUGTNk5hUoJKZzHywcw7bgpLrsqgpPad2owZfcFgUDXB95bF88SHn7s9EKkNMJZnDs4q4e7dybFnFq8equ",
  "key1": "63iFmXusCG9jVxS627VqBa6gfj4QJwtZgUNYwky4fThLVyxZmdgLPpwGn6UwVyGUM739qqXLevPNKBxTXrwCpeAm",
  "key2": "5oxG48K781Ui8x5NNGi2578F8vkTGV4Bnu6kEmTNcYyRu7UquQPQQfwJQHxkbJpdMuCPp7zFyy4T1n6LLac448Kr",
  "key3": "416k9BfQKVxKmYeeDb5JJhNASM2X88mG2zdRWUMuLMNacScR8ZEdQ6Zb7huycGKuLFELZfELwKy2F3u5U9VxxTMd",
  "key4": "5GtNatjopnZYtoa6Dehk9vQDaReiC3pWAvpw9YKM3eKCrax1dJDJBfABebG91HiGas9pjjD3Uwb2LF8LeDDuCXtE",
  "key5": "1YZdA9yYXi6Wrmx6LWrjfKCnw1PAEXzE9hyKx85kpDHmZKMLAWXmyuZY95i5HfPJgRxqWRsJ6VoZbmzZ65Y6Twr",
  "key6": "3Vc9CqtYfHbuyrkjUcaLk5Hhgonspr5DnAvSueS1cby8LtVhnbiuMkdH8eQqDdnWuK488zQ5eGtG3yK9uxHWRxFr",
  "key7": "64bjmWrcDAPJQa9oTdcyqjwqa9qqCxKif9oapJcjqF91X1tFW8SgsQYX2pkCr3GCU5ehR4yALHiUirUcx4fDEVpE",
  "key8": "4vYhwEtyHii6nJjLZE3hyEeieotTLN9YLUVMAFbcAWu6jkNVukP8nf5gDjWVeQ5DXUH2bZxaRAahkQL9PqcBDvcj",
  "key9": "4Ka5VySktDNU7Wn28im38ewytm6Ur9smKLS3jSyEuTAKECPsEJPJYXirQRqbcqPKNzk8AbK2u9moYhTcXfkf2aqD",
  "key10": "2EWyAjoCrSnvnDBo6wprwSqEEYR7W1KgLTKCRXrnwApvaot2akxy9oEBnfwAEiNHmkwDU81Fq7eBecUvmM3HTPCi",
  "key11": "yRqyhjJAJPLVfvTRt7DsaFAHDpqXMggWSTvZu3ywbAU2ZAcXGNh8LWs15VNpM4Cjr6GwJ4G8hnHRWrLKDU2yuhZ",
  "key12": "2o9ur2J18yUuUrLK9aA8znFBz9Bkyw6aKupDb1dbFJmAZkwdzuVEHCXYSamcCnxmxKAsFN7Bq8iyqbwnMRUNuBxH",
  "key13": "3Ks9eLiS1LXL3nBJ1NmKBZ24bhRYdjJkji3TEapHRfp9M9F3FcRWV5GUHuxcuuUoamW3Gc1uMK9MpVgJMq5MUtzM",
  "key14": "41bZJa4KcassqHE7uJsGsW5M758uYGtNjBmvr8FZMPnmTNt6YXPtQtknkAgEAWNkDBfVFusCh7dgCpw2crERwVbW",
  "key15": "4QZsSnNG5HkMLWbJe6g8nVZ6p7bDPMVe3KVxs4XRBM9st985E4LLndPXtPHWPA88t8PkSyqQTmpmk4UZLR9EwhTr",
  "key16": "3F4jAWVkAonUfFMYadM1VqvDUkZi4EdfbvnFx4ytaHPnTXjcNEfQAHKbt5MMwJT6ahuZfUF94eUjMCjprMYAhWka",
  "key17": "aGVSkjZKrqya3oxWjC1LRF8asmVta2y6zHtNfVEK3TCPF1iNnEuS1ZVPQdt38YodtnjycZj2n2HpqMWVEjAQtoP",
  "key18": "3ouxzbGk8yurKSihFDDenYugZNhSRK2nFgqLzuFyser4CVSwaA52k4s2qmL2xtSN9a4VVbc1JrVsJqeujG4eEVFX",
  "key19": "U2c1VAUuWjD8DeCM85eWUc5oVs93sob4nsEURyhw7j6aT3uRLHB5cXDhw25uzzvaVjKXj9GmjCxQDoJVq3voWHT",
  "key20": "3fYVdtgfW45cGXXBT4k8wmQeTGCFsNYAarJqoEPvSeMmKEhKafPMf7JfnpbCgEpBefVwWWXZJJYh4Uqy2BeTctgz",
  "key21": "3j2QjFe1NgGwWm3gpL8pVb7WroPMqQeURt2Z57Bevxz6vBhoyFhqEu2xCDaVGNo3FTFmYXsVEWrVzjcdKrNu7cX3",
  "key22": "4kHQ28pEkvCKkf7Ctp7LDvuQCZ6X627C7UVv3Uk6Qosz3zz3q7w6t1JeduwcwTt78VBXrth1L1xKSwiMgWfiXLJZ",
  "key23": "5yRnd4cxLZeYcWp7gykhznY2nnk1Z1QePpuQAuJ1dm5bY4qf7o3uGr73n7kEadLtHtzcN1C6Uom6rWJ6B4tqGCa2",
  "key24": "38FxTRmgceVhudMEcdH8UvRypQx2nDzkymTbQ3XKUMKSkmF3Xzf41kiwSaX9d4BFPSsTdmM4M1v7EgvqedX5zrw6",
  "key25": "3kfKtrCrixctYzyooPYLQiWQZm2oWbJ3Zpkq4HNR4tc27ZaZRoibpesxM4ZKu1hP5upEpRd4qonzJqGo9CtnN9w1",
  "key26": "4Mzh7z5hhNwQsENkjpZWqfENX45AGHcuFsDe5EVUKDMA78y1WiuEpbif7zd2RbvfaSrhBwUBFP5tp9hvJCeKVwUP",
  "key27": "5Xi1akrWR9TisRdH4m7vd2oKGWDeTHxFMKx6ZWDsZZomXQSgsFeums9i2mKAvmYK1mYsPvQXAJhRxUD8gUpGHCx9",
  "key28": "4itv3MgxxVVK8biuwDtJvnuZQW83sotQWAtcur6Rwc5Cdp8ZF65GaBrrWwbfzmgoUEKtfKaytFfoTUx5zprq5T6s",
  "key29": "2ER3yw4YnnhY7nFAWxvPwUN5AVHQuu8LJdMdnMMuWNHy7sRJBEd3UDGJpwt2h23UV8A27j53xLPzKg2nTJvarKWK",
  "key30": "26oFQsmuARXwvPiYwakv22fQkpCuNsifVRU3EXy6AkJCvMCNtkaqKtGX5yo3tpuck4eQdnRYoq9ob1d7rPjPCr2c",
  "key31": "2VegAiGsHgtrXNL9bgcd3GrTuWTvUDVYP7hDJfcCvzrJWpB7w7BfErqPbbky13MaXg2vrbofv3qh3em8igb34fp1",
  "key32": "4Gai3UgWm3Q3QFf6xDQcdvhfCSHGg3ym9buwpBerEWdpJVs1q3Bp7RcsjnAsugxshR4dTFTkTDe9rUTGWAaEZJUY",
  "key33": "UZvkkzdss4YDn2sV1ozyLjTyv7QgtQQtTwXAytyvo6QrwmP3wmG4XonZa6427h5nYQr6TBP3Wq9AXJtbh32tuiU",
  "key34": "3niqrHXNd1i3xgqsomfitfFfwq2putE2YTft7cB96QG3Y1n5u9FWT4c92u7FVPHEtSYKLuT6b8dNB49raHKPkhgp",
  "key35": "mida6M2RsqVX5v1jrGUTamtFqEGVZaQc8NTwtZSztYYk8SwnyVtJDyq9hUaW44cWCG6N5JtF5Bz5E2ngGqhxLAo",
  "key36": "2KRzK8ng1u1GFEDj9iKLsbJCiDe3kdmwkJ59vzavLTBwAjrtaJLJpJfPp9QSbAFb1ewm4Z8hCiEZuvLZbX8SBm5",
  "key37": "4EKHKevWYBrxG6T34eVtzbbNcw9ETGeHx13Cpcc7PqvgusWSNdpb75bY7aozYkUJYwkRtRg43WpoRfSvwEM99Tfr",
  "key38": "2cpyAhzPHZzJpp4aYJLvKUQZmaZ4QRdSqNDTypxLzST9HxBK1ewk6pzaL9xmivuCVdojuyKJnT8oU8JWvroXiZYA",
  "key39": "6FJ1coHQK3dn2wPDTUFg1thUeWNF9HVZ7zzxZEQhoMdbSeRDjrJxVTHgHjuUqTw4BZmcxDmfTdrPaxGkJq1ZJqF",
  "key40": "2s3Nvtm8JZMc2KwrzUebwz2Y1RuPPzZbEVPQWuPVEC8fnVWEG1QNrE6Tgn3ZpJFFmiSieJjCEdAtWeJzcva8yCbV"
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
