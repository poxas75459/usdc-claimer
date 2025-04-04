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
    "489AhNS1CycTEE3XeF18ynAKNSGSQLC1r9rP6S8Beso9vJ81LtbyavRaYV7ofzv9tXzWeP8DURA5gz8cq2jXDLi4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Fb6f9LF9gxx6e5eGJzB1tx1s2EwWaViUS8bCbNFqVoi5hbSKPQvxpkTiDyXMW2vuNWPN2MPAFwm5wiBdY43hFPd",
  "key1": "2bEdxhGv3GvWnWiNx5zmoeFiYUPg3PHjokcrvMsAorWLPiXjxQonrgtLyuVrQrnMqiE9w9ehEctWQpu3TVAJfmeX",
  "key2": "4HVLjdbvnYZx1bWdMV5iL6S7r9iYKw9Je2ZE9B93atBQbL4PNF571G8JXpvvYMmtT9kdPZTRLz8MdY3iHtFBWaEe",
  "key3": "NhAV8SsGyoUhynwC8dZD3KdfCizy6gD8Mjfzp2uNmTbgyJmZegKTNc2fQsMgA3XCoHwq6w2TFD4Nsv8bBLezXj2",
  "key4": "2W1GLiNvi4y9Y3eqHyra5WN3dvLf6AQJhbX59QBnV15E5iqKAGc1q5iE69hu1pczMjK4i4ky7QmXm6ACnZuaaias",
  "key5": "4JbtzV7nbunUw38iwD55uFZEtCVv9BQ7ixAXSksKQ5G31dKFcadgaqpj4WL6PB3AXrytuub6oKxwu3FpBPa4Dt8B",
  "key6": "5kxJqcQkLnJHdvuusf9ZZJ9nf59fkGtjfoJpxC9Wa5nBqJxbCDt3t6MUHPM6yJozmXaFStoHDG3sVgXH8S4A5VCX",
  "key7": "29nMFSKUYHemVARio8oJxcMjaHzvx3rzggEcWybdwaWAt1dCn2hDUL3BUfsPUoDCTLJ6MVLxUS4jbc4Wrm7Bw4Q4",
  "key8": "2pZjzTH2vGJYDcnQ3KDpDxznPkpjbzLmCNb6LFqJZd2PF1eji8HWy48uHo2Ws5DQdVbo5nCUzcCr1vpvvfhmP7oH",
  "key9": "PFaJG4TSBNYQ9EsAYJsVW3bWg9uyEKXq3uwcVvFWna1W4J83trFWX9ngTWD7C2GXbgA7aaTJG3aqrp3JyvQ4vaQ",
  "key10": "2sChspAfzR3p7nxb3EsuVmxRf5KSywMsDfwwEMrRnN75vddLqnNsKrurPouJ3y9K5hGNWEbdsEwX9XbkMibp3kGR",
  "key11": "5W5vKXA7dGVF9jPyN6835b2256VEnXiE4wytAFxt3WXNTMiVw5s8LpMZeV5mJZwJ7UqkuEG1V5Mu5Wz5fL7BW5aL",
  "key12": "5mNE6evDZZJFYoMmFSENmotPUmiS5TCMtBmq6qorNfBDLo5jYaemRRctMLs3n7jkQFKBaWDszhQmnpLmfAdtAucq",
  "key13": "moH4c2xkjTRdM3Kx8Bj39FDR3xBGvWX6Y2qauf7t4eRp3Ft4KeqmW5xyvqeg3u6KpcL7YKwvnmyV8NBuQN2wRwF",
  "key14": "3aUhvbjYqkzxcfzxqY5qY1ixU9vtAWcAgnwgKiyMJdKrxbCgaugQKscKpzgrrgKAPF328ZNvW91LNfmPDh7NNTFK",
  "key15": "28EK769oXYDVob1gFsbq6E8NeUPo9SnUVLUVBnV6wEaZf2sFQL3akWj7nafY7pqEgug16P77hLUye6nSHdsMEMpW",
  "key16": "4pPAtfktzESyaLUjNGRVNZNSWd1BCgzETqDpM62Zhr2J5fWVhEgBcMzv1ideZwZFSmg21wiQC7eXkvSToRX16i7H",
  "key17": "471f2u9Uu2sxw7STrbM9Y4WYiX9TBozwGBAC8y8NZrydepN6XY4mMtkTaQjrZWsFht9fL6yMWJo891UupvmFtBDD",
  "key18": "2KLRBuUEffu2aNRQeRsmU5k4asBG9MMtZKJBbk3885LgEbJtMQ8B93bX977JqLw1CZAJvE2bMNiBKGoprTT7X2Y3",
  "key19": "2CLMVKJ6ECPivYd3MLimvBcuhLr8R6QBLtKACKs5PAC62ERhjk1kGbpWrxufxxFBQV7sGk7yjm5oZarvdpMr8Rkv",
  "key20": "3rSGsDE2nyEwUseCsmNDmHkhVHToNbRReRyTFHuk5EosBgLVrgDDEnPKysMtH8wTYApDLAD3yhPcp95Ltvdj3WYc",
  "key21": "2VPuATpCZTjqA8syYhaTWzC9QpyZRBeqy9TcHGqFRZWWQdbNcetA4zWZS4Ls4R1yn1prWnPMH2RfoX1yA4J9gdb",
  "key22": "4ty2HiC2TKVcTijc9WP5PcstuRxfjJR3QDNh1UgZhPtGFPdJ7VTVbWbaXtSCaQFjTctJWE5KUdETiJuMXcrJzffT",
  "key23": "ee5GKkpRvgnsJQ2r96gSDhcZ6ig9erdFGmwD3KCDpKPQRjgF1zY6czJBtreQu6bXct28T64ck3a5nMLDKkPpxZr",
  "key24": "4Qje3Afcu1688s25bxEQsKKBi8Ah5tGfXpJjuLLDxrhtzkUioiwkVYiWY1WCDc9ocTR7WfXdhk19osnrsYn2537R"
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
