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
    "4f5RUzoKEYSGD29XoGtC2FfGH1bac5AmUYeXNZjQzmGJSrW9GD7TrYnUneXxpU84K4BfhkJfRJvPrCUgizffwKW3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4d49mk66xL1TjPLdju9mA8A1cCTKMwRCjHCoEp6fKSEmHhSvsA959ajngoBPxAXBJCz7ES4eb2vNYXtjuW1t9FKZ",
  "key1": "5QYPFwe8fw2jdEMXHiJHFXfuUG5EVMu5Vu7XHGJzytgdjKdU8gJzsQDse9Kbvqu3posHBkDSTr5wHUHKAEYES9PN",
  "key2": "4iMLeJPj17DPtJygefvJgopqQ5xGdwTFkQEVDiQcUwrkWUp7qMDac2EcALqpz7dMT2BM2feu7x3Pu1WqLuEH8t2N",
  "key3": "4b5hSB79yMmJqRTu76sztixxBDkMqi7eEc9LTw5bHX7mA6q7V2QBrGw3bdDm3eaZByhytDoYbGKK3wTYim91mNXe",
  "key4": "3PhGidaE3zKtRQu7tAVmxL1S6LQHkkkMwPSKhTRsFUgsLhgtrCm7y9RfKD54WaosQfknbYnxtrK4NkyTg3dFyfwP",
  "key5": "Q9ue24W4fQrBZPVsB6NtFTGSkegnzX2TFomWDKNeSUy1rtktefh8iBLwz4a9Zovn48MeQ7REovFJxyffQa3mMdS",
  "key6": "3D1n3y1SBgpyqT8wWgXWAY3vJ6ahFdkUefbqvz3X771SPGCzHEPDLnyrWdG8nAvGr1WaGUruexC3paxcDw6W4Dsj",
  "key7": "sbMwv1KAzPrxLeKTyJTJ145pxG7QMEFFPE1CiS5mEyW69pVK1g1V61Qo7kTkie3AfFG66JeWrmGiw1ik6VuHZN5",
  "key8": "iry9xBHJQHhZeKThSRqhJFyR7Dse7WgZ4KxrvKwk4Ei6RcxRw7JjCmXUHCsWbjZhS7itNmwhEjhFtdCzT5sDr4F",
  "key9": "5ZoVhnirDHve8sY4VdQanXMgUFHJJk6dTpp4Uxo4GZCXRLg73S5JVWmx6FJw3xMG12UPgCfvT84cvgAUMXsdN1Kg",
  "key10": "ti8MzTZgRD5m6GkaWMFXWAoYZjbaemSBKtWZ9JkNmmsA5FgaTFuVz8NNNuswUfqC8GWmCATahRJr85JsZ4P7ULe",
  "key11": "4jk4uYjYQSvrs2ndDMTcaoiJHD978gk3711PUG84dLZNPNHwu2T6JzxBzq3ypHZd3PuwfgDesM1v5Z56MQi6bqcb",
  "key12": "3Babs64qgiLESrjEQjw8tgcaRT9DvuMYdagivDsPsvYU1SXKnTuitzuN2foX1h5JFtzp4cRYVb1DwoLVEGso4hA5",
  "key13": "2U1EoKqSDzeCCPAdNrWRgmUXDga5FnMfchoHyYhEgTDnEhQQD7FUiNKofnGX6jcRsQPMPixy8vhBWNph6uG6iKtA",
  "key14": "5TakGYMieWMisTSAEqbi9888hydQoRzhk5VNxgCPKUfXeb2Avt1CEm326tHymJaLuYGwd7PnTrMBxwacJx6LMvdM",
  "key15": "5ukm1PRx6RyCiQNV2K84MMjs5mu14WaTM97P1X4wXWMNiPxUTCxRxN6XBYSJUNTSCVJLGkuNLvLv5o3jYBQs4SJq",
  "key16": "2mUR3FAKpm3fMu8Q1GRFpDst2EF39ydKwiGzuRNLCqSb5iQgiwUfK8ba3P3QVB7EsMkW2WdzRaz67LT16coV9edE",
  "key17": "2UDv84caB58oRAYe1gnbe8k8PpKUCtZjs1x4NAsGZbbUUAi9JFWRGWti1MGxVNgcWQnL3iXbSrRbxNLkRCFLhNdx",
  "key18": "59ir4nrp3unoqYFA5RwNZJoNJuNYqHgePAbZ8XoZV2sVYLxx2z3pYqXKhcWA5pgHJgB5Uvkw9MmFt6nRVPx9CoMQ",
  "key19": "29MNBj5NEh3RxSRKCGAg72t3469CxDULveLRviprHQEyLfF5iJD26CHViqs1JQDRhGfJkow5Xc9AGkBHNWVKfHEy",
  "key20": "5j8xfS41WyPiUXxDpToXtXoQLXRs2whuL4DZKra6ttLCk55ht3tUF4MzTn3fB4gAPATeQj3r3wTqzKkVZedkzh94",
  "key21": "4iZnYsWFuYpQwY7Rh8YEU7nn1KmMGoPz44b73pG2Hmkma1bJFoaLwYJyEKpV7zaznDs4NbgHxWvTKXX5EbVnBYgX",
  "key22": "Ax3FptSm2qyNFfMP8XyvbC9vL9mqAAUaAepz5V7wszUHy8JxuVzCFnqyjuT1edNdKr2dWpfKCxaHm9aQSD2jBFV",
  "key23": "5g6wgUaBuEvEBcq6eEVt8qFsk3eqVGo2Vrj8gxQwXnBKegLYp6etDrDUmQ3HXLBiFHFyfC57vxiqaLcfkqszXGon",
  "key24": "21eNrwKgGjNZvh8CDVE5Civm8zcCuDEtLhePSF8pSF1fTJY14LPvSwtoqeHEtVadqR11hnmyRupF99uVXktUjmnk",
  "key25": "3kob3JjP6NaHW6KskhoN137p77NUc6LSHgmR2mGt7jVrir7JxwKs2tUBSyaz2cbD2FDLewtgysmD6TmkQiSQCNQQ",
  "key26": "4995kRVUxug6U8bVyXzB8wNruE3tSaenwfJG1HLrH4e7WhvHuxtczKqdsbsP18RuyxnFb5LQTad97TPS4DhCXhqU",
  "key27": "38hQHJ47vuwhSLD2K2nKfQQrgPU55AZ43vkcqqibgJfUugZqqSsGVYp8hA3zZj8NjKukGBb6k4Qe5EdhKmuno5cq",
  "key28": "5fqdZM7Cz9p1A47NAEv9KC1k1q41d2wMiou7yLWq2Uk7gwUCv1EZJnQe7b4n8VYrKheDQg1j35mitdc5TaNEsBgf",
  "key29": "Bp58G8becxePkFnacEWMbBXkRRYQUxeFbxgynWoAsGoqMAjLS9xsugHXwhZKUoRBdn7HuqXTY2ZSYZmQVhxg9uK",
  "key30": "33u8ubsJCBLJDZM77rJByE64krwnCxVfJpKT6R7qafYJdNFP6aecyyqzzKTv92bKynzr1u6mJFQDF1WoTNBowfFb",
  "key31": "2AYeEiumAawSfVJ76Sm2GqfDDjMu4tEwtaSiRvkGH6p5BDYgoC8hMZNP7yMH5A2cThfW7oqFStBNYCzVHtgdQmhA"
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
