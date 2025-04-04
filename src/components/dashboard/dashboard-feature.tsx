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
    "ShbQkvncTe1YnuthgR6wSZeYTTpDvxDD6jPWqJPVtK4MiDnwYm7MHvP4cC6SKMsu4ua75uYsx3FXA9bUhNB15nR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NGxZnTwrNYKBgwjrfVAqUTX7v6QuXzDNusNQ5hVc4B3uYRaB7ZqgmHYDx4kUpEAexg1UJXDP74j5oVn1REecdEG",
  "key1": "35WGyqWfBPFjpx1icj5vB5wbMtFL6vqFVjKs8PRXQkD4HZF9ndMC3Qa5sWi2AUv1U9nWHsqMesfwDEyBDxuH3uCd",
  "key2": "2kMtPTGyPQzdoghHkteLUveVjuwo2CqayS6FLGZeWbYjxjycr4jvEZRGLJjcv8cGihom316kXJjZRXcTw1XJ5kUT",
  "key3": "3iRFUWLwkJ2sPA5PUFrLcLJtfbehAcCrCrFw5QM9fGmPWkmQhWqQ8QocWmT64RccBdCdvu7WFNA1doswUWPq2a2Q",
  "key4": "XAiBWPFz3JTwN4hwpodDSFkidyKwbkWHJhFpn548ajseceQd79ssHKG5cfbpiM85WUaPJsDUzxPKpkxXgJvx5M8",
  "key5": "4Kq5dFWa6nnHvLLLrianpjdy7i6cJeadXc6NYWGjneA4zJgWK5XGgoWi7SbfrLwsnv2AwhNtSj2LLpukwA1m5T47",
  "key6": "4Lh7n1CmPqrhuKVyneQF3naCNfKYSNnTQRksN64Eh4HQc71AxcRRuoqqqQ3vfMjtY9PcCU1QAZv1q3L6B3vfiYxb",
  "key7": "kipvJTi8mDswXPGSisHtRvCTSyv6sMAhyFeLP5XmVr8HYHG6kWcSBe9XvZVRQgMAV9DhakyncPazJLxdytdWzCc",
  "key8": "R8kiY2ZcYXKFqmdGvcrpfUEmgFUDaGAEbkzKsbNapUdi7iGPs56DGNCeEKxRcCCSuPRPVzWE3PequsB2PYhG98m",
  "key9": "5gRdQSYFUmJwr4ZyBcVko7NEcmKanHH8P5iT5uaAuNCMydyuCCc2PTJxDCsVCb3BPTHPQ256D876KPtDnoABm657",
  "key10": "Cg4SXo9xTcMvxP9VJYEUJv3BYTkfv9he7oQ77CHDjAaibNUfxcGHbiGxp7NVKgrvjVddriNsAMY31jJ9NxVVYwZ",
  "key11": "xrYh9worETHGhhKobN22byFy764nu8SiBEay1papLcML2jcRZuGK9NXM48U64K83GB4N38kmRpA8XVzPAK9ufcP",
  "key12": "2GEtkcXCBJbrz7hJ9riuGJrLGWSvteBzE3iGHvG1qH57KMey25y8evQF7MQVAEuj4DZytiezMEUnUkA3PeZrxmc6",
  "key13": "gMejiCW1qW9tpjY3TBkZZtFs6AhvcNsyVMu4yUdDAGa79GemPbNNWDGqqh2z1uas5dJzMgHxfRF8aPuePFrkuph",
  "key14": "5PAduaky2D5us1uX6UWi1vAnkjKsnN5LisC8zzQRdb8C8KpuYHMuEsobzNe2REnMjwHNQEvnq9ofiJAUesgvCATC",
  "key15": "443Q22foMeTqPk9qd17xku3axdgY1A59whPRZBZFGKDpLWDUxp4ZYBvx3vMTwChtKFz96ePztaGh6PsutyxW9md8",
  "key16": "25QCdQQ9qiCw4gyE4aGhGDqVhzkfkyTmqNWZghPywuk9LgY69oe4xtazmFcEEtLvZ8UuaAVLUXu2GhRg1SxxkPpf",
  "key17": "5bQ373s2FofwUrdiHSWznTQYwHiSD11y4mYntMS4yjh5QDVV76BZYyXQgvfKBtKYEkDBJoZiLn8rfBeWKE7i9ZJe",
  "key18": "51DBQnXGB9VKeBWPUsBc5iGhWoYZhRpcoxj9cP3ayE8EbAv3dw2zyU1DgioVnxYdC53NJEMfC3eTPV862tFckpmp",
  "key19": "56ybpskWxaSYWbHqZ38d25fDeqE8m85M95z5xj4vQdYGmDdH4LmigVKsnwqBiurDrJt6xEYR58FErb7AanJc9WBo",
  "key20": "5FbwdL4TykwWJmughm6ZMPvC76yKG61BMj4QRkBEk5kDF4dWxVb1gXk12MhaZRpeCxP99xN5RkzXRgpabEqVZbrz",
  "key21": "5yu4kxoBvUbm17vPRBy9D3wtvxLWKhC5Ur4UYsti3gXvQHcVo2y1H9XsVJkyyiVAtxdbzqGz1AwgauoEaCmhDHp2",
  "key22": "2nF8iH2a8n13U41WVE6QAsy7KaTYvmU6H1w8q5JrXoEa5gQrkBrXrwUzKDMipubs49BveZv2rZXiRVSv4fS6LLy4",
  "key23": "2Hn9AGcGNzDf4qf5qwbacB51ndGKuRe8FeChjsoLba9EMsrRBEF9b4R9PjhzoJge5T2j2KZ4Pzras1fpgKeBZYSr",
  "key24": "2BhuMYg3Hrmxy9YQJmoK1LZqASZ34JzohBfPf2VYKyB2aFkHP83ELYDUd19aDsrdJWad7FYBWm9KduZGk6i5krT6",
  "key25": "38FubZBXRJ3mVKgn94iv89tHgoXvNWAfYzgntowXrb72ReetvqacuqT8TB7Q2LSzz3NDs5dLEYM9U5s4wVnHXzci",
  "key26": "3BTwEW1vuqKa6RMMJ3JRa6ixs6eGsUR3Q73hZJVXLZzkUFF8BJP3CGUctcHaug2pV6sLLvhJaA1366Q9jfWdo2EN",
  "key27": "2Si34QyProvDQa35gasEPoivz9vtEyKaF2GmitFzBsUNmncuGFi1LTmgx9oEAS8KrNLZMAiNd2mtF8xfYoRx4Sa5",
  "key28": "51PKmYv6HG7JssseTLYREu1ftjNcskYbYSAP48uU71P5KpnXoMgHQ6AxyCSzRZ2HWbai7anUUi7ToyYRCAcySRsV"
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
