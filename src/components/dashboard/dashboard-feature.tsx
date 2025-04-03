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
    "42XaYGJSquAyKRob3BBc5mZ7ucwoYQ2p3dtVnRk5V2XvwemRmGwnLh73bLHPWwxQ7LMHM5RPzsT5xjNPZTpz1VxA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RoHKNUkS6qhCKzNDvaiAZcJF4vBaD8LfLmZSbPGWoLs7HzGEbvHYJbK2HNLsAsuV83qxX8KxQt6m18XyT1u8qzS",
  "key1": "2x8T25bdqbjeM5yjNXhK5VWCAHKQbaLPjF3bKMHxJGKxdtgNhrM8XVem9AP3NfGPqPWbYp4bhuq27KfoipmgjSjV",
  "key2": "5MvsoRCn9sKuX1UiNjyoBDsZoTHEqcGp7rErx1xBTpVNn4AA6JVWRo5AzPxnQGfe8RCQsWW9DfTtVqy46tWS7sG4",
  "key3": "3JxKikJ9UDPNEDrDHLVVLAd18bMBbNePtN8frjLLtjHYJHS6UVSmu6TaFzggAZXyvfqrvKGqwkQ1WmDFHERdnwmR",
  "key4": "5Cso7Au18vD9kNTzXHnY9vWwgSocSasbewsuLpyRAo4vie1sSuuR3M3axTcF8eod3eR9A2QmwN13PC9hBbbSBaCm",
  "key5": "3kR3uQutjTteYV7zxYTvpwKDiTUTRsbHJgsmfQwU6SAL6YnM69YR4FUddiW5HtTdKMtnnf6tEpGeta3EAb5JywdC",
  "key6": "4wahg8FpAVPSZyGgciRWjyB9JZ153vbDKKn5oW8PQwpU2awzPeLmd3rFKtQdJboiJvapaqEMdonw5uA54Vq4GEQV",
  "key7": "NpPpuqdSPiapcvHnUx3GzvAN95Y1U5hu6pwNofmqGB581ZqioZwRj4h5hE9arCGDeNnnQ8tBuxDPpAXRQ1jwv9t",
  "key8": "5mqKqLX4DHDXdVVCsUnFmJ3Bj5G7uxr4xPnZdYvW2Ya2RighHaqd6f4cqrEPzxBTa7BHCojRBj1MWSZoqhxfoG2M",
  "key9": "2eVUfsX84HNDskb6vPA6dQs1k27EpboGKwUWhFKAm56YopEpXa63sHoGUq4yCsq61UxP9A5Wf1kvqRBDM6XmoSMK",
  "key10": "M5kxPASMDhCATYfCiEdsRscujPvjwyCQwEMRYJtcPKFLh7RnR5bevExEr262BWsijrXZ7AnaDPWNTfi7FA5mNjp",
  "key11": "3EC1cyQKzhxuPSZUEopMroPuF7ThyH3o92ZzncRYgP9hbzsqAeK8sc4Ydz9fSFBeHsEpSpop3jWwkxDFxJnzJDs6",
  "key12": "4Qn3FifWADm4um3xH3ZCXKvciw7687XNipUwZ7m2pW2GU2PkSKeSg4e9NQ6qDgy1dkgTTVTTjC5pHdzjFqVgd6pK",
  "key13": "3jMcNkYH5Qnx7kyxnBi85b5p7CUmbZrhXWzveRLgA5s5BYtCPoyNjc2Ut6a4fmUZdMHrXbvkizNE7W9T8V1xjgxU",
  "key14": "31s6MDix3z1LX5q7tED9gJr4twVXHwop3HSUZKymFusNL9Gu4K6BSsLbnS3AKKzutS9coevaND7PFae34Cs1yKdo",
  "key15": "4XuAjU8pw4FQnJH213dw4Luaqpifi4octyojU5baFbhQGoxTCEEycA3DcmYZGtvBwN8U8t4qgz8iu86xrZFXP2ve",
  "key16": "7mFMmovZFuKHAmcZa9fuXenvswJEHJdiUfmk5WmE2aXurHCkPEZXW1hEMASfZbsMMQsSC5dxQUTx9bDiSKzHevK",
  "key17": "36miaxqjFQTHpkkq8x3nKfAszabPiCfGZr6tq9w8hFLNKmfBGjf9SPa9Vf871eeh2YjzYsTkRmanPLae7PmrKMeD",
  "key18": "4KDvQbQTvrAwJntA4Vu7MUT1NHKFPtNKD2EPRwBAuenboDs6y2kJFxthSnVqSZjHf1uwQ3RW3oQ7cd2p6h9AfinU",
  "key19": "48WpDHvbfqDYYBAwqEYGv4ssB2cxd37ajScKvUsW223eFh4t77EHNu8YAc1zsnjV7XtEq4EdydkLmBMVzFd2PUhP",
  "key20": "5xA1pxoWpXNcmgt9FFua3Xah6pyabGKgDcpW8wT64ZBaadxBNanPBfZ9W1C6PHXyKSym12aBwjZegNJ6hmgL3Bwh",
  "key21": "4jEHZYphUnrmABcKr9CB9Xvag3nfFurYU5rZ4w3koxdWVw1pHJd5NNi4s1Xps5st9SdaiHZzfRQrCBdsEPa6ztvn",
  "key22": "4RU3gQxkpmWA7EJi4cdp9GvUggXJekFcALpkwC7t22VMnGdwhxio8fg7dCQTtibtqKpfYwdSjUGMRiHpFqXeGosZ",
  "key23": "59bcLNod5tXs9nbqHNHyMByo6KJXXyWegDGMuwGVCmiA1UYrodPCKCCvAsgndfPB1oHu4cL1LQkwg7WmtoJp4iW2",
  "key24": "5vqFciXy811G8VyHUmyFmThwdJH14q2xJ6ux48qJMRuXu3UCsLnxemzCerrjDT5Uy3zmauxPYgJddw8dqFM6DXgp",
  "key25": "53ZEkFXMK9pkvhP5fD6wMsa7nSvT3CxJpj4ig6C1EKAFiSRe6JML6HRRsLDx3Zqidc6vszBXDhDQiBVtjXWgaos7",
  "key26": "4c5aoBHRNvuwHjfLtey26417QdYDH6ugp8EpcEfTyvqhsKBTysniqu5WKDiaLChT7oZw2pGDikGPSqfipeMVNKxu",
  "key27": "5ddTq6ghYwWzDKHVwfmqWdWFDdMdcBQyqXoTWfQJ9MwW87ZdCA7BQ58TiD157zqXo2SEdKtrAjQcMTfNCegdrbXD",
  "key28": "WaXzz64ugpQ8Sw5wRzP5r5oDKuinmupbYRAhp3MB2vqW3VjjXrrvPW85Q4WkAEEH13Zd77XtJ9nZnyP4wEbXNPe",
  "key29": "itkrWCv6S51RcVQj6AM69CV4y3hTm6MoPzcpTWrYoYJznWjsNv1igj3NeeozQk4CETDhWezuEZ7goRjonSdLdAf",
  "key30": "5cLDtKk3HZnHFKnb3osTytjAfiurcLT3c1tEX2wr5Fz3aKZbuuGqR7fgPERKQnTXdKmdSXy9hooG7pZQkmQxF6Jx",
  "key31": "455Hvo1iQC6VwRXukEfBdPra76rP1JEmx3C1VqD9jGh8XgonQwKs9AXA1zjkG5uY86x9dGoCejEyrzZac8yDMh7M",
  "key32": "9Y7Aw59K7XPZzqeyRmRU6a3d4rZrc3V9fYuDjAdPDxcRhkb32kdAZSSpfyccysMiJCS6N2AekJx8tcxoo3AMiFo",
  "key33": "2yvV3BKMXPfDDdZg8ch6VVNAvtJS5yA3N7cpur5ckuqDgi71Xd22N2iJwUQ5o9uWFMQ4bb12DRDAyRNs3LCqJni4",
  "key34": "4GLfyJkhQjysv3rn2f4Wsk2a8rqpf6XPdcJhQocnXhApyNE3orKANhqjy5ub8gbbzmAHf2qNW3QfJCZ4fiLraN8C",
  "key35": "33zS318pceFndd4oPkTNMJZ4vN433P3VvLihmtV3zyoUenBKTow6AHTHUWAjk4zJCwSyVbpVZFHjA5r2cPWjtJDg",
  "key36": "55GtZxz3DueapG5ZfkfHSfWoRKeQJwW3nV17Zr4K8pGPusW28o5g8JaAEfCk9DXGCLc8LPozxzieq6ywgyADzc9h",
  "key37": "2oUt464YFuN4MVuhspyPKkiAgpJhno7tNJ7NmDRMMGQjLB74pRL2Ptb9sWaMaZfksq63dV7wXZTVt9RgcRdAVqFU",
  "key38": "2oWPgCAPemwBa1rFWR6g6L4ic6WvayVRib8Ja3dtr5193knpJ6kfgU6gysYSiUZR6CANdwFDBTmG3tVH3t7j4Pwy",
  "key39": "4Ddaj1aWuGVhdEAY1q2wZtcdC7ifjcDQMxBTgEQNNRMrVZ7dezFuqky9Ak69MHBcLAjcjiidni6Lq79m3krgbFA",
  "key40": "45DgF6umh15vWsQYWGL6Ye8u8ZBPydEd9dS2SCYDosPcgue8xASsopFSmRuDf3tabdF65oyqVBp9x68BNYnNJr3S",
  "key41": "4spRdxcWaR2ZM48Em2DJ6hHFwtNWApPacmu55p5mg8H5R7PodVCjkFqdL2ewDti1wWmpPmiDKXnbgHCaYj1GZRGr",
  "key42": "2cKorAixhZLSRbqKwcKUajVwbZz383obk9PbZwXCfFgnmJ5GRooDqTddSToPU3GPqwX2MNcdAKPa3kLhXvret9GE",
  "key43": "5yrz7fH9At2sQGvjQYkpeSN4hxVtw28jpN4pU6rGHySdbGsjwJeJgg69Wcw7s6tUAs7xH9KZFz3rXLg1ypTwd9kn",
  "key44": "2aM6UqadJFnhwXFyG9Gu2mpohz7W3xE226HDwPcoJfxvTjY9VAvmAeZ3cQdQTs6LBZMJhSg75zqMHTWMm1cmkJxb",
  "key45": "2Zr1mjqEeDtfFJqAXj8Y6GRJYiWrkd5XmJog3B7QmUXuNBNW3nDbQJUq5q1Qg8dWzQFr7GZXN6Vtp8CBqhX3iqDc",
  "key46": "bCTEv7R67HBijpGqx6jELpQnvwhtRP9qsE35BftRp1pRgCQckujiXwSttJ2XfqeRMDZt5nmkuXUfTfKrkGgSbpM"
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
