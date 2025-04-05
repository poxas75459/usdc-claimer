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
    "oTZWorAdNh7odfvuZ2187ZdXx4upgFRSdoAHYLg1U5siH4mg5HeDeuaTNvBc52svpDvnVvksGVrQewWLtTYcM1C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CyPGpAPUfbuscpBjmBfbpJk7RPAqLktEtjwHp2Z9GLoPxsvgXkZcetJoVobxFnrz4csrsj8Z4MMfP28veCgR88C",
  "key1": "3Chxs7q5viTf4ns6gdRrrEfrQXx7BbGF4f4rCWQbuCCnadvvXmYbuuhTefJ4fgkPxDUtUnMfVKR7QN91xijUUXx3",
  "key2": "2ai3677rDu33HLryBGKryLZf7rbzzqEuLw2gH4YbJXcUUoPJVm3qMyhTv3CbzEe7XNachQZzziqAwpNqQ3okcHrB",
  "key3": "3QFbRQo9cJmswnZSYppqEbstmCWacLpcs9ANjP75g8MefD2TT9NW5p7n6GnKPV98JKt1zWroyXiaNGS2BPpb45Su",
  "key4": "2M5Vihi7j1CArVugW6dmenq3wScevNdqR2HkJQXq5jU1zWZa5ESAm5Xys3Z8oHFxJ1w7T4rFuQmDdgspbsYVEJwR",
  "key5": "3Atb2Cmn8eafKkJ39b1PcMHK5AzQPe2xeydQX9pyCuSjYpobUNXdHajnpNmfFd5Cp8kCJtRTXS2o9HyGr2EHH6KG",
  "key6": "2Pq4iw8iYA3USDGNCopgTPqLDwxdZBxKQF2SVSQDuJPJKN6gJ8LKKKFXWL5LhaSBqkx91PSCDzXSaU584phCF5aY",
  "key7": "5A9taw3bidLduDXVHYV8SsXVqGtPYrPBgtxSpRmaz39F3qiMSMoWQhwHDMaj2YissiuNdid1cD9C7q6uvw1RRGjs",
  "key8": "4wzAittvggybWJVQbxqv5wc6kMmuocDZoKLftVPTtoaRMGKJQDXSRh1uQiHMFqzRBqU5JHv4Qea35565dwV8Frbt",
  "key9": "41KgSXoAfLpj9MBBnMZY1LtY2RHxT5W74hot5x1QgVUfBaoUih5t9HQwPjMSXPDAKpBu24cn59bR2tmRALu4k9jM",
  "key10": "2WKx4vos7yFogDj2dUiXv5zKYszeEUX2NdQUFhWGCnLSiFxnCDDxsLYy3U1gPwwu4o6ZtZg4isrcs4Yjr54nm4c2",
  "key11": "iDTYzR5TqpnthW1FZYtiirSBjNMqprmgyAup1eggo2cBLBS5moxWEjML1uqkQu3RYsTbfPyGxNxZfRatsFZ8QdP",
  "key12": "5eWFAVdog5xjLtGeANmNC7cuFmgpBcTNNXPm1E9GH7DhY6uieLgbcG7uHHPbEF1yfd6izYqXVHT4akL1vgxML5Ex",
  "key13": "5piowBWED4x1jXKZ6CkC7ebWft6ygQFGtGVjeP5DA2qPk6S3rEW8QrbNBnUeDVMGXqLp3h821t98cGAW99gk7HcE",
  "key14": "35RbV6zcU6VSzVMV91wYpcHWfWE2voBRX4sqTaCYQm4H4TxkFbQ6qsDkKpm4jJ5fyVbgBxejo76aee2ktHYe5Tgt",
  "key15": "4QjK2Egy3SeuLvRfNC9vzQjvUnxy7jdNhfEgykrfBEdzUqVHMjhRbwkrKCZqqBsVYKsew5PTazD5etch7nwUuNSF",
  "key16": "5KVTAzZajGeXkpXFxeWwsMqFYMCA8uWCKMqcfMG5KmnJwFgsmFxybRJiNtKPJfKkUoXszWtk7WMSDD8aYZqgp4qS",
  "key17": "fMTV7MRL6in4CkN6FYAsY969vyMRWCnNud3SPMFYJivDGUmNxsA2KnZwPHsaFhwdLN5mSNXJcWCxthoKFhkzbWU",
  "key18": "3iBohnnKfrpPv1vRLxdmdeVwXFoUwYGukbQdWy7ggaUGNwefqQUVB5FdZCgruyocaDNynPmXkNSJmqN4kQFoVZNL",
  "key19": "3LkinsCcWN5h7KnLR6MLPsnaRGqdTyJJWmFh1dwN54QeU4LbsP5AWMKgyKhSVWo3DjJCE3WUuFBiZ6FtbqFh8NFq",
  "key20": "5zQ1ut9iJUyygP9acRrCwW7GF4otwQGQ5gwNKxML1yxUeJKXMdFKkg5EiJVeTYan3LCJwMjbghsNEGGs67fXbnKb",
  "key21": "Vr35vXENTkR4hUDsFxniSs2ibZUr8nMRMbbgonGePhhf6z3h4i6ppZnTvNRhwF93BLfhW2p4ptCN7fH2T1fvzGr",
  "key22": "4rSu3Z34GzoQ5iFZGhAcBpekuhkDSbfDGyDjyPekQXeSpGcTSVejLK2Vgh6JBuovroiHwpeFgAQpjHniKkDzhZA1",
  "key23": "4cNsLTQjy7ZtrK9sEX6VfPt5grV4nWeJLSSpYYHZ55to4SeXTF58AzSWojWxcaP3earRNNoek6DKHNa87ceqs85i",
  "key24": "AWQ8PWnBBh2BFfmK7DYxgq3em2VSmiDBsyjWV7eis6AWCroDauKXjW6pZiY7JTUP7TkkrvbJTvtDab6kbzyEMTu",
  "key25": "5LDS6YB9UFBaebMkmQ426EEfdcMpPDJVjuTMRsA4haPytnDGBGBbgneMiWC4fn8sNm9uteEid8E81QjrFHft36wx",
  "key26": "yobThSw6V2PfVzxwhWNy2ioqzVNNxiZDHrw3BNPQpXhiHS4bMcRMuBRun3kMsxKXh8kB559KuMzGieVkPbWUMbc",
  "key27": "48oBRrEgJbBVHm24pJNCmh56drPBnAWBNXKRTmDmkLbe7e1fssTjPyJdUu7YKVt9KvzHuFQ74k1Dkah96tKXtRyr",
  "key28": "4qGEyhCjRUXwFUmQmtn9saBBEtMNbAFyCwjVM1phXDFk2wgCxiC3X9MRPm6zyypWustFG3Z7UPqkWAHnwTHRntN6",
  "key29": "5YLzwcqCUwcarxpYaizwSe5kzdAVFiTd3F7YngPwMkqXtUUAz5F3ZkQq1wPUgXYsYaJvCktB6xuymoTZkKHBau48",
  "key30": "5yWHxNrMtH29JSn11KzwLVenSi6QEZPwz5XYtdmMkKnakoEmmKE7S34PTwA3VYvKxfAbfQg3HcB55aYY8twFVLLs",
  "key31": "hFw6uqGauZTPoRtvhPvsHx8FioxQtwXMa39mdv4RbTSHdkETetVUf1NApP5Wa3AUFGXheET5NieisdFu2usSU1q",
  "key32": "3BayyAj8jHz6TGzmquoyc7HzS2PwVijewxQL9VekCd1EVgmFqqggG38aDxcLQvWK7m6fjsgZQsiy5C6rfP7tNXy1",
  "key33": "666bGZZAu11YcNhCpBZcpg7EkrqNeMmZKYmZCnTnQKmbMutRcd39UiJb8ZhYZ9GBo3Zw5Bkz4mqVNGP4VhGjmptE",
  "key34": "67RxbHVUQeDtvB267akrTAbWeZQwvQ5o77fcZSTJ9aGk1ZEh7ek9koG99K1BLp6eBrDz8Mfop1fzMTdTeVuujSVR",
  "key35": "4HFVsCVLtpSmah6VB46dUYiC5uDH37ecrbazGf4sRUx9rHX7UaAvcHD1sfy35Mf8ihLxzCobV3RCjzJZQkfbc8bW",
  "key36": "3941YiczCEtBTKxm1h16B5fphVUbdk7N5WgiGGSeFuztHnGEAo7bL8ycEXzw8APtWTJXc8Fj1UoKq4pzGdu21YLF",
  "key37": "5dcntSRXmowe8bmkp7xQzFQopK2M3FuADDNSg1fgaQPvtTSAJtRD6MrJ8VFeTZGuvGwc6MzdXEqgzRqDzbsKxPWH",
  "key38": "RjpMcKYVvuHPZknGg7yHDgwcEpxndxAXdJEEJDjU7PpucG5bunAcwY2rH5U9U4Hc2FXuG9fYia3duQYtY63Dse8",
  "key39": "4s74w9je8jEuDjcNjukNkYidktaey9PRjT4zSGQEt9p29FXT4mq9R12HyZ6CEDHNgQyX4h717EgbUt6Zn5qomidZ",
  "key40": "4GKZ28ytrbJUqNmbzCeK6sT3oVszBN9pqQYBmNSSbCVVSHwCKyNRLskEZLGZqmdDVsmZuhoQiAWFPhe54uFeGfpc",
  "key41": "4xoF5Q2vmMCU5Mi3j4JMkp8yD2edhPeiRuKjtVDaWPyM38NKkC6T7comh87yJjnNMvksStY3gJzCxZCWAAD1soE1",
  "key42": "2vo5TzR33AyMtgnSFBAzReDdpV5S9qGuVo517KMBxUi5KmybcJhxu1hxFswPjr5PwgnKVHeBdWYGxgwmJNvr8Nqf",
  "key43": "3AejbSxJRJMXJMZzJZcpmn6egjmqKoRz74k7kBaR7BTewVPXKUA4pAvJV81JsWgDJLcooWHeQ25G78ZXHF4UxhB7",
  "key44": "31ryfbmBga5ZVf6PFMsauv9QrED8R986N9eWKJKCJiaLnznUL4sRzs4FeF1UFchCErRb45iyVJNwB3v59q3D2x6D",
  "key45": "BeSibuGkaHLH88FTZCwdCYdmRjsV3b6UqumCyqayaCUzPN3zFBWdehMoy4TkqfW3VVzPoq2hP9v4SSsvygiCgBz",
  "key46": "2Rm5M9vg7oEGUgnWVkvSNEqiYvHkicDm15UDohb6M9qoFtYNUBGUkqTPHrcFd5ShDQLS5txD37x3TmXjSzDTKwsT"
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
