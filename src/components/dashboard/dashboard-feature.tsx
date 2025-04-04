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
    "38EAAHVhgmUJMP9GSxVf3Z2hauN7Ag53U82oyMJyRC9ijrMVXtP8ArNb8vWHhKMkj2H1TrpiNH7ds5j48eDeE9M8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aUQv2Sjhu6kVJ9kMFC5mZnkmWVyVn5duKkX89EHQa7ZhBGCHi2ADkQVeuZHLYhj5R2bBT9okrutDsA5MQCXavYQ",
  "key1": "jhAvg7Q6iFxrjcWqgvo9hfUGjYHwjKPhsFb1eYgcnbzdmTyY5t4e4QV5NhKjFqoZN5EzzPbgeUczLqymez7VX3p",
  "key2": "4KH99AmeBnDR6BjJeZgcnNSYuueNaT9PVHzAY719bWk9755R3ga9Ho7fLV8bEoGL2HoUT49T27BitF2NmAgZRjhW",
  "key3": "5ssaGFmCBR3BwpHhZh1sec26fyF1bvpzggALWuXKBnNYkJCG9d1NgmkCxzYX3nRuSJ7TauMrjTV42EzasjaixCYd",
  "key4": "23TucgwNVmEiHW5icN1LR7A5d8fn4cW1jkuWe8dbEKy8xf7YxW1MqLEVAWYsY4mmPKiJ4wCZXnBeqC3XY14fzYbS",
  "key5": "4J9iuYNoiHq9rMEqVav44rWXVttiDW4gqvM39xnK58opx49Xyh9EMgVAEtd1SawfVXxbBn6x7XozoGWEo4HroLwG",
  "key6": "2RhMzqEPzRPj4DrqhEKZ9vcCfkvH8wzoghi7EkRSSujQasLMwDnW8nR7Zx7eAXiebmw3MCsPcLPaA5jkR2QBaEUn",
  "key7": "3maQ56tYguFTKdouUgHvJ5DBqAJSFmPzL7sVaBmNZsc4w3iJbqu9YrnnCJULeTRCaizjR6dTjvT7rZ1uhuYUhEcD",
  "key8": "5ihSKsSFXtXS5a4LATcRgJ5VC6gSpeW1rqMLDrjSrkUtzxfzNRhztDjMVwutHpQ9Ufe8MkpxWK8EVNm8m3nFaPPZ",
  "key9": "4R1Cx7Jds9XEJPQZeJSmV7zXvro7aX5eAc93rjH1isHAR4xRBniUpnuRv6sR8dKh5MLzXaxdkD6EpNCFVjZgZo9t",
  "key10": "2grZBv7AeGcPUagkzNo6Fk5YXL4cSpuwGozh6Pcp5SP8Mx22R8DqVWmMkPZJay6oqRGVtxRGVFZ2tNKxMnZduPch",
  "key11": "4rikdQD5j231UP9wmMmoXGGdfZHC97C9kQipPZVkzGHwEGhnGA5hVbVX3dWkZJVd9DVgj7GZz4eXCL9ec3qvfAkH",
  "key12": "XyLougZQmZjZB2s8nsiXrAv2tRpuEq7W7iX8WQAsL8kWQKFMx98WE6mfqvHtBHFjBRSJMUtavVFrPnHbVm98cPc",
  "key13": "2L8KBUewNNHpjkmepKBHgb7CmBJeKvjLgRugxKZjZ6KH3B7jEP4gaMXS9FjuEjHtuNWL7Rp3wUXSwvG5QmtGUMvg",
  "key14": "p6MmYg8xDQgThSeReYtQXPSEcB1Nt5wzZ8zCJDhDLPHMZBB96w8LDDe2Y3ujdgnmQs1rBXgXvReB3CXjE8UbjEA",
  "key15": "5ZFWgwni81LQu6sW3P2udJJig8G9FbRrM99GfcJ2xc54pee3SD8YnNt81xdSA5ikjpYJs39WtDmLJWP77p64ppK",
  "key16": "2W1LcwWSimv75fwTQY657ZGT3khW3GFNuxBf6nJ4bT8KqCqpubAAZrzhP8MdZFds2BpPPZcYqdEtN9TdQBmVzaJq",
  "key17": "2d1dzWfqWpcXHEz32Lh3WqjYURNAM1LeSeTeV7PbkXJqhZuGijW6FJ8MeQoDC7qioz1si7VQU4qtHMUBt1uGgCUn",
  "key18": "3DnapFrVSV45PUA8cEWgZqeXKkg85KPojGvUYxZwwFkrb3tsDdnr6GvQtBt8D83bAAgHJhPzbhKE2DmDY58o2gWq",
  "key19": "1DQbd7yzh8JpjuiRVG2nJT2c4WGCHSwrmVdwR9mzdFVHf3TTDpKESRVCpihirHYfvRzEqwts64XwuFmK3B89p6S",
  "key20": "677wz5HJsEfFuVZzWQSoQUWrRV9GkGm2JUSJpnZxfRhnxdU9BgnvJwnL2LreAW8ipS3hK3kkU933TpAGZSSQiVES",
  "key21": "2F1k2PJQsdJ6JNMLBCwmHX7G3A4ACaCZHqTjHaN11sUb6YcM216FYLxT2EUntia128wQfJ5wJFCV8JyESzT4QkrP",
  "key22": "QGK6ugqE1SKbpGzD31wVu6v6ZUhbaWFXksZHWcqEEMLP5Z32XyHYuP4BnrjjxUWJ3LAQWyei1Xs3seha8fHxHGz",
  "key23": "5q3diu9TctsprD1YuenqFxUEDbRZ6NWyVDgTgBWefmq3Ud7js2S7jB6D6zrQJLL4gooxtdK5YCt7GB96DHNk1uGj",
  "key24": "4ug65SVQR93eb6f2nHMZYX9zwVkPKB13BPasskFfrAfLTJVfRSVT32gfr2ZXUXHCW582hGGijEtYiTwVQQqypeG6",
  "key25": "5QoEBHEzU6LaSkyMBBGB8q3ZzcDa7FKJ2wTQwVuYMBXJzv5MDF2sXoxaSw6skLbRAHXrnpCZgDXrENBGcj6LYCZh",
  "key26": "2bj6tbzPnwVdBBckW26CRfF82Jgc9yVyUt9zxsDRpw5wTpSPHJazVr9ndkiDf3Ko8D5fE19Uih7rJHLPcabmrqoQ",
  "key27": "2PB32AtNezbxnY5uhuJVGusK4Pt9ZgRJny2WUrz6VmdstJboKfU5ue2pZLwavLYwHGVUyP2yQqdM5d1RW4NBqB3L",
  "key28": "ViwfTg6TKXbXrYzHP1CCSyhWHh6rEn3fsXF3AtectEhHXaQXwydiHBgZHrAEjcuAUJap9DXQxUhSYf8nR4GbPJi",
  "key29": "5WwvXrswkL9krP5MmCUBihmiBhJBMDiy3QBcY4VJBi1gACPYoqbMSM18gk5RAr1ATpBVy12rGsAebMwe3kfiB8fa",
  "key30": "3NzxKqu19nLBVog1W68UjsBwvUutMwrjTA8FtF6kD24PmcLHxtmpozCDHBwVQ2YmA7qjCPVNuNnxeafSubsgdqfP",
  "key31": "3LTirDqca6NhdyLHUpJdw1HW1EzpDYAEDYqMJqxixUtt65rCK6PyUZtwakSXYPRWMbZpQeiPdeBNFDS5Aiomfiur",
  "key32": "41tfk7FNEMjMPqaq7w22KgW1AEP4Xak6rkB2Vude5tBachh3zuRs8qZJ6wRx1NJrkqztQxzEoPv3tCaiy2HXewff",
  "key33": "5FMBb1PgrviUHucrd7WYaT1vpuLZXFtz5i8daJ38ULXXvTUf9M1pNbfh1JVVBVLAnG6FKv7Cr9nKGi313bBGnBzY",
  "key34": "2jvbjSsBoDSihhuo9Wm1r8Cn9yefXhgVSdESLEBQhnPtx1xSJAHoQEygN9iHidWdQQS3dZav2f6f1BBzyTim6Ze1",
  "key35": "3UbJQjJYNiCP78rVXgDPATW6yADSZ2XUQCVC4L3uApsMmecDMtNZ3TwwastSZDxHPzoeNLMAUJFw1pL2PxutoKYV",
  "key36": "646s5zG3zWvCLNQSL9K3qccZSMgwi3Ho3ehx54ktaSWRgvHQgRZB357AbLbse75Ugr12eT3AVU8GLsapGMibUdZq",
  "key37": "uyYExNA3FZz7VXkED4EJTczfj1iMHcUEcRg8RttDQ8MDhzyBqdUPwyHn58U1JVQLm9xTyM1Zgqz2DmLjRfaoyAy",
  "key38": "2B2h3WSZCsMTjhikcCvyjbdewnh6YmiZTGRaUYDbCF9jFyyN8dqSHZ64kRTySVYqApfGj3NiURjFRZyMxfzgL9PE",
  "key39": "3PBA2FwmGpPZwMtkJUoa4ziuMWCfGT1DHaSUN2kKVJ6UfH1rBh7KeAKRPG1mKcNcMz5Nmgt2Rz6XARsAUrGHBDQE",
  "key40": "3XhHH994VDAkkH9ucys3RdWkdGJpskCMsGT4gA1pU5evzUusHSVngGRMJxap4FSezvWzzjZNKPhHi79hMdxb9Rpy",
  "key41": "ybtWyDMeuK2zhW8MG48FP3tqNidfgrABjeWA6Ko6iJhgGnCGNKG7oKfxKPCS2dYtDCVFTtmM3MeRodCa1dnbCYH",
  "key42": "8mGq219Nh8exkjUvuGgbCBtyZh23RudfYxFD67fazfDHw58TdbMEWbFtAj6efHnkHDY79XAS4oXvFaAbEB3e6Nr",
  "key43": "FWgKZbvPAdHw2js6NxLoCd3HKRDesb6YeN4QznNbGaWbtxE7iEzm5yRA1SCbnwQaysB7dGiDmZNmC7fJ2SnE7Qj",
  "key44": "2cqpff4PLXQ1qggoe9DB5Br4mrLJEzmvKsRkjGNJ9npqXrVTgBcXWXBuGwHxc93EnVpacqzmd1mQXwQHUt8PogiR"
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
