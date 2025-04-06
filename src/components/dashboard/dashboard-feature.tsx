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
    "4zQotvgTbuLpoVW4qT16ksUHFW9mTQZzvezT2iTX3TaSDk56AybKHmuGRAna6WKRwcCb8TY5mtw7owbBNVFBhGth"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "du9ds1zMdD7MiPKz8NXmDQwHFz2x8JgFFHGr7Sw1mt2BD2Q5vn82i5j5qxYMuQkrrmsJsNcdJZyfdbm8F5k9i2x",
  "key1": "3dJtUcUv3DbteDEEyFFutLJxva5BkxcUqaQ3rB2TMGrcsmSfSZgVeRYqNShHAkY66Kjm8xpE8EjXUP6g2jgEpEEP",
  "key2": "6ooxvxoVJQ6fY7P9zcAv1xSCSBhFv7u6ppnmsvNBbxRVXxfHg3s7wpjHEXtMF3JxK7F2Ei3KjDdk2ju5gAdrxA5",
  "key3": "12MsTfwQR9AwVfoNfiqWdU56YVUtzcPZKCZZZ82fwjPcjgFfDEfPU2DGEi6PkvrKfwsHfD5FJAQEDCsuDo54CXR",
  "key4": "5p6NZHX5f9VraNKKKWovzrP2Xf6Rafyjarnx72ccmP7gFjX9rZ83btGfk24oUF3Fv3iFAsyorJRrYEFi1AUsJoP7",
  "key5": "3RNbE7zVhriPJeYo8QyJAE23StaQrAJqHJJLL1Zf67moBUpSTjp32Z9wobsufsgpX4asCPZcDUerD4kWH9AaWLEa",
  "key6": "NfZQkyQwKz4XMxyZD2vsGxosiUxFT3GGNrRJwXvxoh8b5hnKcmDwtjj6LcrxqHsnAgdrT83LvdVUyPmQiJM7i97",
  "key7": "3efFjsBtEe4K6TeZFDWC1YBPG2n3vRMXTSv3AxRorxnf7pvWnYMBUZZMVoXqdqNvh6BVjZJGmtXUCyAAv4y7RoNz",
  "key8": "3HRRJ7oSQDiGFEfyM4AgvX4GQjcs8Zdco7dYAnTvi7fik7JgXWoKnASivsNorS71fnSwwW7RPQjbuBwyAjiLKcut",
  "key9": "2RRWxWnoc2gS7mw1eHHmwKUuUyTxzu6qiuSA1ywNm1krDR9EKxehGgkHDGFbjXsUHkiUNQ6yVuXAUCxh32wzBKfR",
  "key10": "54bYXj2qnfEP1w41iZ2qVAN1gCBK4TCXyGU4tZ2nWzaTwoMJUHsAppZTwEvaAUjM8PpaE5dhdBCscih2dxg2jjxN",
  "key11": "3kKG1g35WZ61zWSMWHWZCgcexuVBKT89nziXa5qc4qRZWANZBeKmRaAGUN2pVeGM1bDHLrsDuQxqwEWvUTZBTkNR",
  "key12": "5TXCU4fa8GmtKqFg6kLuHB4LFtKEMHcmH4Fo8V62m7pXBhXPhD446RMatLuRkPZMZFg7XKfA734RDnNC9SkKqrLc",
  "key13": "3JnuzmS6uPb7PxrQogHx1AUfrZuPimuka134Y8bcSvRzvoatMDztGqVVuSLSVoarc61LNMkskY1EupRSswchZnzw",
  "key14": "4re7rTUprMYYmpAZ92ar3NTKeL4JVGMCqFXXVGmRbsKZjLRpGwjrnd1o2fcbPzAR9veGrnWV4x5NwiHeFy8mEUbS",
  "key15": "5DQLSH8ytaf83XbHJSN9Lto631jn92sQAtnAy4AEASDqc1zPuF2xUd8rPkC5ooDTf9SP3ZjSy2gTTkrYqMmKoE2G",
  "key16": "21Vnc7TGBAasF7KycSKLv8gha2kB4u1NXdR89EbU736Z5D7mvvhtWxVL2GR668rkVY33Fb3Xf4SxxrsoFdcpJamp",
  "key17": "3K5VC79PCr2wJbFhfAeB4pLFQCh2SBNKvn2CeCzrRTHThkYgLwtPyYQxpm6FdBJBAU8F4zFNZERBjcKQTBmxPQm1",
  "key18": "J59R297BG52HWorkvq1grrXY1ogGH1frXoFLHHRg16wjQ4rPTR3aCLmyDA9zGXcdQpDwWeDaWFQVPvvYZCMyNSR",
  "key19": "eY4fjiQ2gwkwiTa7oj4aypJcugMjAk31igoDHE5my3jUvmyojtzRBC2QiTXovsN7SQ7kuP9ncz1ExCCy1xCXuuX",
  "key20": "4Ro9hSLQpvB7sxvQu3Gdoiv5sMWKCiL1s7Dsv3LPaxD1ZRZHhqFAJzNBoP27u24uZHWCn9YeAWthSKUDiKiwSftz",
  "key21": "wk2FP4RMDiAxfY4Q4o4YfHZxTzrimKGiy2MiLLhw58ZKmzLb6XKekPx6CuB4DHfxt4RctnPoBiPvU12XiQDAk13",
  "key22": "67RBJFVP4rXtJYVBFdpRDzv2nfmJWyD1mfatDE26SdfKmdU4gtfMuUR4C1NQMBwDmzYEdWCM7jdGys4qu1x3mqY6",
  "key23": "2gAMjd9V2UxD89botnk32fgd5P9mofbUcwSdZ7QTkoT8K87QbRVc9PP7Dx3i3EwndFVhYUL9uWnCYXG4bnGs8JdC",
  "key24": "299umZDtT6Yn4xYwXmtq1tFKUJ6yFZYtCqtyPJn2MNVBwy6VZkuvcLwM1TQjotv76hLr5LwX5XMnCoELbfD55QUu",
  "key25": "3FCE9Lat3UPe4yFr7MvfdpFa6K31p7m2iCsAbCqXBmFgtj7XpLekC36HdZAtckkFGorkgDPcyfpwu9jqSySdDHuj",
  "key26": "Ss38J3Xb5zrCCJdH56C9Qv29sRYupkkwh4x92Goez7earni43u6G4onEnbs69QveZ6TAyZnKKj2WYYCVLmm3G26",
  "key27": "3oD1xEUpM298DXx2uUt8HRyFfNxv6LgpXshFkPvQZQfQTgFMHdUUCHmpAEbH27Xumauxgi9aNmq6cW2FGNgYR4ic",
  "key28": "4Md1ZhCs19zSavzEAQPUKWjvdKfE78k7XgSMGD6hU4G9BWyfFnw87aydx1S7gP9a4f46Basu7CuqqvFwmnmsRSAA",
  "key29": "2Xn9SMRSHZwgaU6nogNpPLdoQfcpaG2r4q9sbosefLMAKDuRtyL9aK8TkWrLoXjsept1vwyfUuoABZpR8pGkEbLy",
  "key30": "5YDEkTTigLFk473zrBYgYzG1vhR4AUVh8WyNDMFYubjQaDDw5kfiks2yzZu8LwCdBboCFdxLbtjbhmUoVVDib5BR"
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
