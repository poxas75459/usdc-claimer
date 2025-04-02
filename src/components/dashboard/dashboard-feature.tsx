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
    "7X5g9iqgLXhX7kf94dBMGECST8nojCDzrLNz2iyGSoiBGEuZaHnzmZtKZ7YaFKYP71Xd6JwVQsBACEXYFVcK4m9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2F6Q2RCC86YDLLxcgLVLdAaVFWcfnnYJ7wjzALRYHv3i8ravF71ttgK1t5zQgp57Fv24kciUQU1yXV1Rx87ZYpst",
  "key1": "MQv2FkSrHhU6uioMohFNgvSdUWe61xCAE5nqKYUVNtQr87u6kEU642waQSSqzqn6aUMn3X9Jo2x1UsA3SdNdVow",
  "key2": "3TbjKQ4Q4iRNgYyssTMJjt6XnaQkye4WU2ytEwXQkoJvKHir8GPFG4XvoSaw2XiWgAtt1iWxTtn8vkAXviq1AoHT",
  "key3": "65XgqL7fRmEKjZftXPb9k35wbaBD6giixBs31vozcoJ8oHqWNPJ3XLJk4ErJkEeJTqowAcxa9jMcZGkPC2W68Mfr",
  "key4": "3yRZMYZfsYXya4sPqUWATL7MvN7QPruo6gwcKg1vFd3y6mfdZXjmoQY6nSCYnyosq4S8fwSmbnfE5bBVEG5DAhwF",
  "key5": "5Wfvy4P8Aerzvi1RAnRNiBcAKUj1ibZmmxLmwxp5g5ZsKJP9X5MhtH1ztzvDR9irB6UwpFE5vrabnevA2Nkd32Td",
  "key6": "3nm8wqMz5VdBGLXNaTHydZdwRYrL4iaGheEjJwZgychnnn8GEgBvNNDRSPcPqF2aAXDv4yTDhb7XUphmyr3MDm4N",
  "key7": "4518YFbc15zH8u1gA7UcQoA9pgEwDGqbjCdxnwnPq7jXpzVSBRJ6QwRxkLxyChFZur8sWTeeXTWvtRUe2Bb1ALfB",
  "key8": "34YmE1Jfy2gaeUVAug1AGUnmwJCkNYNZDV6D2equQ9YpMfFdt6zL1JpWCk2AN7tGw81Ce2wJeYFFno2MDxX6RpQw",
  "key9": "nh9xPtzB17mKd2CFN8giTqUqQKoqbhoBXnJSjksr71iYeHiogeMcXPyZ2vq5Strv91kCkK2ogAr57Gg2ozB1Phf",
  "key10": "5GPhWJzjoqkgzPRsy1wBEFci6AxDtQkq67AtB3BB5wdt7q9ByszrtzWVxXWSWaoCyREQrFxFKWWUevs5qhK9ataN",
  "key11": "2vhzNYhN1QCKsx3fqNtXqTnFeRhnYTvbMpSKo8ahYfdBpp9Xj4JXfufuQbPj9feBCsCSyypP5dYPfHmFsUFpcnAZ",
  "key12": "4DRbLERHvN1JMVGuGPNYpZHcwvyYmKTSr9CEioM5NeHBcX9Scu1eMAVbZq98Qc4rekroRBFHoESfUvFFMqJq6vUW",
  "key13": "qSA59Bj2uCbXgD9jBkdeQcA79ZSJWpycsBHLzbasSUAByptWdYHQHBpz2Fbo95a7P5E7gGRs3kQq6YMME3jdJnC",
  "key14": "HgkBBRqcuJ9p9AEeP5g89s1sLjhBFR1QqQiYjQB4N2zJ36AqtcdxuoNhwB2sp7f7f4uFTZYT5F4jR8LsFKMznDF",
  "key15": "4QJDzi7EyXF2GnkTTsef1dU8GUvxg65t7mUTt9H7eoKvMqD9fuvCMdXneBhdJ15L9TSmozLDcFowKL8LoHU9P2ca",
  "key16": "4HmYWgzVE7LkdB3Fi1pqro1Yn5s4wjt7gkvBB9sZ7HyRDeinccMpeHxp49LXkNH8L3HtvtCvcFDhdmUauzcXmKAk",
  "key17": "5bn53ZdHMeYjn4Tns1esA9LSVqBEvssEUrtySeCfogEDZ3DcWALZoj1m2X9Zo19awAEKaDMqvNFg53GZtL3drWJU",
  "key18": "3qGRGTqFSHvKq4xMLVcndVar6aVJoszWzjUd4heJsB76QVPU3Bv5KpUvdE8b1wumHKhY2SuvJioiatv1itgXRWnv",
  "key19": "S7BLtRrvscjTMVWNzhQrTSuh5pdBgsn1VdKj2GW7X37xPCMLW5bDuQjuzUgsgPTUVeVh3BhBqRjytiuWFeUsojB",
  "key20": "wetbazQV9e2Lh75hUm6CQYuUzXvM4Np2MUaeQbfLGd4rYfi1gUbzKPWBemhz8jnTcVUtnN1Km5zawWQZ48YPUEi",
  "key21": "2t6AMcoGgeMsQhrPetmLgYmyuiUG4RGGdYwW8xMUH1m2Q4koCge5M4YJdtfQ8S84LrK4J5qejLLhMVXYQA1UYZZr",
  "key22": "3RB1RkcFSZzcwdUF67T5TGRxHXJQ79h2ok1TSSx2zHwt66kfKrA51wQiyj1NmNRB4LWTW1d2CRH3tsDn35gP9bGi",
  "key23": "3cJ6rb8aU1u6xBK56YLsmfdEUiY3wHHkzFJPUf32pBriuBFvWDaeLBG6z4Hyo4pMbLj1ZVdjtYhKr7dDMqgnjyzT",
  "key24": "5jbqNkuC4XPjmmTfBLD4mbeYHymEfTy4WijPNojgrK52KWwccVA9EttHknJrWS9zxTgWs3uSDW7kbMKD9HXUqAqm",
  "key25": "2v6nMk8p5MQMES6xd2S1vCf7tRsBYxgAwAmn6DaEtEr5n4wdk7cxzZCz6PMYbyvoDts6mgry9d4cnwPy9BvFzWML",
  "key26": "kHeD2xyYjRUz7DNj4UBjM4X5jg24AHtSdMV8RwNkDAx92Mg6PfERU3YYcsM1G8XxYF6qnFNVrhXz1u2K7YbJdeM",
  "key27": "4is4FactPSFKihDGddYPdc7Hf5BU5LqTZKRZx4umQgKn948gXdanaE1V6HHtYV7mG5eXbUfu1Z3vBQcHzFCNKy6m",
  "key28": "5dF3s1eRQH25Y5cEmu2hssYd6XTfRSKEqKGBDyAr31sxBmcuLYajQMi56bQycLobvBjCqq6WBLxnPkyhvPQHEPbh",
  "key29": "2m6VmygBMym38mDDag4Hh1ALxTURmaCJ3T8pEmmkx5bDXceUhDoWMHL7yMji6U8cR5pxqm89LHnA2R6kD4dy9K48",
  "key30": "PrrKzEQGbqcsft8QMsEGezM9btgwT2NDsmkh8Qg9LrHaA2LDKQXpsjoDNQm4Z1FRZTVjNXuN6BugmEuDpkeH9Ui",
  "key31": "4D7rnE8s5QB9yVnHzHvj8DgFmq6fVK1VanatVydgEvFCmgZRgzJBMJyBBwpWTTYAuD2f7D4biK2HpCea5yYkwm6n",
  "key32": "4jpJkxpSwm8MBwWuKFikQTjqGCW3v8buAdXuqha3DwhP8nUZA4ebi6Tbm2v88XWwFSwjuhdpUmebXJddeUfxzoJf",
  "key33": "94JPWY6hZEWij9MbHfhvoCraWW7ChN9tsx1NeM6391Rq7QuzWd1XF734sedufD4BidrCxirLHhp7qSfo8SppeQG",
  "key34": "4a28KPtCafdwDZ4fdycAJ3CCbfzeAiM8tuJg7NhaN7HveSywd8qKRUTmApuspWtBqSkeFMcn3jbv5aep7M3XJciE"
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
