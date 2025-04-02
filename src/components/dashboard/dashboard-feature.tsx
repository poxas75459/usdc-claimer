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
    "53bd43q23J1V2tcPqPswbpZSXLPjdXXDWVNLcz52btMd6nm5eT9ahBUEhdL9rMtgjYp2zeCUxqjw3oqWqoRsjfF2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zyai28a8cwSSfB8YVJRzXr7QxN3jXcBabx9hY3UieGJbDhaWiw8M8BTH3bXwtNoTaoXTBZepuksBaTDL3HJQuij",
  "key1": "61vYgd6Td9cvhc3ax3rNoaXKG6ZEhcapFnfhCM6gUuBxiZ7NqhcFdwE5zwxCB9CBzEEzBK4tLHRWa8Pr55YFb2e6",
  "key2": "8oGgsGwAa15HHTbZo8KdqpwoCWo9UzrKKocLFgWcia5DQecHYCKYUStS5kr49PS8gTriAPxsdgQBWnxu1krCugT",
  "key3": "5STChVoEmzg55cVo583S9Xen6jLFfZv3Yjd2r41N6LkBmdduRSiqaSqvCNPcxL618v9o5yBRNPDQDuDchVLWZ1bo",
  "key4": "3QEw7P166i9rZ67BUmrguCNmyw5XosYiDyvwe3YuxoaGCmcHpcWH7be61nVf4x22duxXFGPwrkxFcLHykw7kV87u",
  "key5": "3g5PzAf8ebzvS99y1wLnYcqMfG9RNNBMnSbecgHmvgF1okc2bfShUeqG9DkYGk7gw1cvgFkLwQZhkqLEakbSykvK",
  "key6": "vP1Xm9rf7kNmpnDbGBUE3FbzX44qDuKTbzqQzFFigFxK898vdqSjz3mixPxfYWXGhbzDU3B8K4DV5uHEoy12G2w",
  "key7": "3gU5ioX8ipC7YmFc3fgnq4rWi5UCYvhELYUxbThuz2WSYNmums7cUjxQFzjvCy8uYaQgpPjoTESWBmVuUmxwXoR6",
  "key8": "4YnrFhREydGAYLkzZpuc6A17J5VAaj41DXUErMN8gorp5BoibXTd4a3asT2YXzUUJt4bjgyLS9WCxNkCbKewSJpc",
  "key9": "2zRP1MXo7Et2DTcWN7PFR2ZM1zNwqx5sCsTJyUyXsrjQaF5h6emw4CRKeft5KrXT6Lbo2VZUgNsDnhVvbA3ZW258",
  "key10": "4GLKUkDxEXjTteT39VJx1Qd9NbhZADjvJ6XYYjykMZT1jTyeQBPg2SLPfunM7RXKvFV3esxooy8EJyQVybaz8DN",
  "key11": "4351TP8S78fKAPR61gRPe5woPChgPbEnzdGrNrK2uFZb4CbJmvJW6Cp1XPTQVbW18cN7wnB87NW8MCWMqCTKFAkR",
  "key12": "5cA7dWmxAF3G8AdbpV4sKjyNz7ANajB7ezpx6BoTGoHMekxRiFa2vTkdXspMSH4ALRS6PBTnENPrJWwFW2k54Efx",
  "key13": "8xcQQEgnRdwe4JbzCxkqGMUP3DDWA3GDLaYbVN2u79RiXTg3hYr3ijpQNtyvNaD6tRX8WhebttRskHE2SmnkKhz",
  "key14": "3jyztDUTCeBfpoVpYM7i2JnnuJzLv2GPLLjR8LFf2atVK1NNYNXKgfKs1DXXpod1jvsLcztoEvAn5SRLAZ9cFUyc",
  "key15": "5dgW3pDoxm9P6SCXdY2xXL8bCBmUD7GhByrp9EpbiVWEodn5ayYHnZXUjYyvnydB6xMdggxZiyY9gBCMfUKry3tT",
  "key16": "3ea98f7Aj9jSfCp8RiX9A7tLoRNbGyDpaH65ZHDY7DXpgxrcHoYuHvhD9dvHN5fsxbX7X3cxAeYRfLGza9yycj8t",
  "key17": "4KdYsP8NvaczUPwkKqbnm8crhyt8Erupoxacofdka54RqJj2V3Df5T3kvmkrgXPzHsD4wfaAQmj9uPEWHr1P1f4F",
  "key18": "rQ9ozYpEMeTM7MYh4h3k1htkjTLdWEkYxTfZE1dQakkFHnnfTqoeCiDWpJi8y3gshZzAjUJRPgoH4tsEjjNi7ba",
  "key19": "4AbDJXa4dsjxwV9mpvpSoEsxrcvZNweShneBFH3TYk383iGLPJ21cbDEtsLTDwtyQLhcZgLxArcbvDaPgUxeznZT",
  "key20": "4V17XJTbr78kP1N3dsZaygt1DFJUGZGCxdE5WNbJTST9i6WT6FsBTWit3HV1ZW17eN6WQvwNPv7ccMqBLzWbjiGs",
  "key21": "jbheiLbYbX3qYbMnbgcxPq4nNwbEgVhEiDMTCPvPXEHKPqwALJDFSjsX37m3Cge9iNxjm6G7sWz1mxyDpmJLr8M",
  "key22": "2VhovuKvBPpXeBdYh1PPusucbRp77nawriL5qvwrBBopF7a7DhP3mwLB77say849UNgDSH3CYr7S2QQyDaXgwU6L",
  "key23": "2XbvRZK8rTLR1zK3ppK9XzfaYhbokaMYH1vNbJWbz43iSijPVmHMSfHA1NAHU8BbEx2aR3kMBYGJgdxvFpHh3esW",
  "key24": "4tKdmi7P53PLsgDWSEBXC1292CD765a6RF9RBAYw1eiGoP1JhX1f1AfsfaXXs5ouU3actDVHYx6tNHGUdyVnu2pw",
  "key25": "4F489BdDp8WQs5duYnCbYEqeVjMswpMuy5pyVsV1zVC5WgNENPyfhBRKZSFcpgEVC5r3vAqWHhGkDAbot9QZhadd",
  "key26": "2wo8zSG5WKqsqTo1fXNxqnpx4J1Bkbz9FwwwytVsQr2faqf5QZjsiD5Mirr5Jddrxz44GUmBuaMX9mtd1qGPGRkH",
  "key27": "3ss26eNDf3w3fkcF5YW5kyN35aGTEWw1C9hhdkkbNPtvuYKQvYShC8jmdJnWxr54h4u4cjPC1STWMb1PvD9am3p7",
  "key28": "TSgbaoYGXhnsGJHjgDY6gy6HJEaUfKa3QUNMcfde91xp2Z2amwTg2uHD373jjqTXdSZWDyDdbm8b9s4H4EZS5MB",
  "key29": "3PVQWH11v8Br2RCfyc3tLoXoZUQfNArHyE92qBzSfHgLACenjcdVJtCueTqmLzouUrMKM9BdfVJ45WHgXfEVWRZ4",
  "key30": "2jFGBpHM1PhEb4PE3YdzXXtTptinNrd6LagWizFdMfJo9KsEScxZFfWyAKgFVEW2uczZyPD2qkcNSa2tWcTUGnE8",
  "key31": "2mknXr8X85GP761kKRoGhqRew7MRdDfs7cTgKPHDMZgjEempHijJRLmLv5SHcTXBQ4s19JpMwYYvijPP1Bar8Kyf",
  "key32": "XeceJ8ZGfwsSCtXLez9QCvcs33KvDbauEsBFR3PJDzVzhAzqwo5WjYLfQkkgo6D2gFkFxY6ncqZEWrvUiJZoRwV",
  "key33": "j86AWAfmZBmX9ncAXrerTbtFqUfTTHrnchxC4ivTmN3pgVrfZQTx9xq1rY7D79L5nWeh7NttkK672mJoMpKcBY2",
  "key34": "VizU9BbL4L3WgqMxyLWGNUnPWjN1bLhihk3fdRTtv179vcu9mFZPLpJVFxdHAZfLV7adUP5yWLkwNLfTE9fLNtQ",
  "key35": "4bfrhXq1pR9UAqvAoXnApmrEVXR2M78UHBKuwdF5fvwVdnf1U9dzbuBHvKanceCB4iRxsaFiuN1mK9psUkBrDkLr",
  "key36": "5mcpPBSM25EPSu87eRx3E594D4FjR3uBAeS98u9xNXxXkdgyNECQKLLpEwcBxBoUFdScD4K72mAspv5satoCsqEk",
  "key37": "4B1WJXeyxbMWWjL4TJ5MWRQvpG2276ffqQ5729uxv9y3DWny7c8Q1UhLmmkp2AUr82qoZbyaSCa91XaVEwrbcN1W",
  "key38": "3y84Kq85egXJZFUMYU6vH6EGuehryFagJDndtJ7rv4RPp7NMQMouhL9pmyGjTktPDHb6BLyKpiYcJbKmNzX2n4iK",
  "key39": "cTkNuToPjREgKBs17gMDHmywha5omSU1W7RZzzYHqEGbXCLTQR3nhXpkhRFaykbLQv5VLfEVUpr35WgcAJa3o5D",
  "key40": "3ZDSX3V3fTkGzf6hqgUdv72L7S1poGqwSiNidDo2ApnfMpMipKEzuqLziN3fSfa8casE25xbD4D3bCgU1xm7nmwL",
  "key41": "3aYSMyyjQdw8RMdsj5AdshLS7SE1Md4borexSyP3AVrkuWKKS927XTSJiJGZr9evV4Mj1PFWpU7CNMpDENiW5k9W",
  "key42": "L8Nwkv24SoMdVgAyRGjsEVi5PyX7XMohJzp6HqAXsNfCdbdk5rU4n6SMf7iGwMbhCRA3hKVCEzfuk4Aso5K7KUa",
  "key43": "2wqi17jwApCZMpZqY4Lmq3YbnBHWa51B3XPm9P3bWwTCEPqaRd9Mi7Z9peCAMwYwmkmigpGMXhwe6FVmLwa1WS7d",
  "key44": "2dRUgN4zLVgttDpRJ3ur11L6RXrvGaPBMmc4ZFKZyfqDPbb94tz4UxSPaXBycREsWqcG8J8iRc8zzpNuQpKCJsGv",
  "key45": "2ASqgaFSSZJ7cFpJ6v6VqctWfCxjixhhST3ne4Bmdy93jwR61FhVs23uJ4Z4bS4Qf5y6FypP8rc8p77YE1a4u2Yb",
  "key46": "2uCbMQVsS7ae7Pf3VDb8V1PRwyaEWviT7LfshKNoi2rvmksRkmLscW67ms3QhBNdMikeq6cMLXQbDp38JsKUyCNv",
  "key47": "v1hac8XU2hjF7BRVG5rgshfzCVye45e15UaYJ8P7fLc8kPrWtLqkYmGBcW6n1EuH5DDJVKGasxqeMx3HS5wdmRL"
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
