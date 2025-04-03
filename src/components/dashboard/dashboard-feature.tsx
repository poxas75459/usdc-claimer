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
    "4Y7ukiSdp9aAg4ZgJUR85Cxse4RWLXneKSwhagUQuSPeE4xhkvQQLwBw5ZbPbeautkMXLiLKN58EovvhNfXoauWE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KPwWrhxGYm9HSCKyoHVr3fM8yr7xAKsaFJLqyJfdsswUfKUr2scmnu57BoESsH5Y7XbmpszK1dMFSzvUJvxQNvv",
  "key1": "5Npctr1JMKJwNi69cUDqJDHEwvEqXkUfyv4zLdNhiA9K9sU4DU298xNrDvMLrXEuLiBrS1MXAEHbvpKqWyhHHCdo",
  "key2": "qWzz7mL9v3HkN6BtMLaRJMNtbQZ2eygdRJgx8C5uMTAF2zFmbbhwHQ52bz5MK2sRfChcqn6YxbEaLBSjxjgaebp",
  "key3": "5vpypK5XFhwqVk4nGz5KBUnWkZsfirUEVNgUseW2ctzW6sCYcbGZoJkbVm61F5pAZKN1PUtKZssXWdcArfqneYbq",
  "key4": "36bhnvMvJafHHHiRyANE7sB8hbdWffvVufaNwHPGZ6ej6UsLqddJeMPpLWPJ87UPNyjRBrc3TLYzxMnJUkGNc7Qk",
  "key5": "3x2Rr2YRxoLkxbFVHqgpYMCUKrSgNKiJuKNfbw19cAokf6Q2jvW4dYCpoR2nKjgYPHxbGjNpH3EJmVso9QYdGcbv",
  "key6": "2XJUSN9PUujf2HReAmmf31zsFDPU1qVjGrv1QiuiiHxfgsViLuDBmwxuN9U8hEE6uhDszbFSbLgaNUTApQRcL7JF",
  "key7": "2jng84Pg4WW3YpKdpu89tAy5EmYnFru7ggNVsgPJqjydhR2pevYAPJiiiqLcFVww6BLB43jQn7jgfBRJFsubvw2t",
  "key8": "5QXU2XRaSAPf37xm5YbeyevU5Dz6DX6Y5h3MbnXgDBBFgy32vQn6HUUqboq6mXkJ7YZCtc2uz3X4zww4rQ6T5oi5",
  "key9": "5Sx2VUpYrqkJ8ySntXfGDvbww9zWaADqks2PLmd85Tt2hpdwK1A8BJXRVA5bPqvC9fbqLMeKooNFnduxgmfpjAaJ",
  "key10": "vBVwxeAA5BRrHG4qoRErPaR45txdNqee4apeXrQRDFQLnjMY4Fjwd6e5oYdWBAkzH4bGtraZBzuGqweKHbao95Q",
  "key11": "2ptKESYhUhxqPCY7zN1h2kKZNZkRGyYuoPhPWwhCVvkYX57Unuf8SDYQH9hY2WeQBfBAwnR4v3rQS6KNrs3mZZUJ",
  "key12": "67Vn7YqNt85VxHuF95CkWybzakvU5fJX7PXZBQdH2GpuBjy1qg3dWZ1sfc3N31Vs2dY1enbuMq6TM4is6u4roc6T",
  "key13": "5cPdbkKmXJ91PKv3vi6xJwy4gzM5Hm6yzyVDCngTtEE7Ae8hp3QU99q33qmnnnG4D1xYYtBuk3uNSK5e9DWXXK6w",
  "key14": "Lay3UitrbfPwFtyVVQzYJvSxu4M9163hJPmi21AXNkNosppNbdL2PUhKE9s5PygPSXt9NKaPVQVEq37UwGkgvEm",
  "key15": "5hEJBCkh19LgL91wMu1ZSxa2Z6LvJ2UeZQPVc7AjqweqicX2xAjLSfmdLAdD8AmkHeFiUhf1bvRrwg3vvQxbqeBt",
  "key16": "5c2dar6Dxt4XGXDoPZmQBbCaNuMNonyYMxK8aJUxDiUG6btef1Fw4N2XHKDDtbiJd38vKtB3aeZESfrLRGQ2zBTq",
  "key17": "3F6kUsFkp9DUZNqzebTppS6PEp8bASuvWUEt8Mgu8Psu3S1qu61EaDrXHHTqyea5x7wxojDQqtaExbnnQ3AeeGzv",
  "key18": "3RvnrShFiFa449b5NNd9ReiQkJeTFhMoLDcbXC7Nzk4s6s1xhXcP2axKhU87zDUrTiPPckgvpfhbwX4m9uB4gyZZ",
  "key19": "5ZhedCXz77yyZ9SSGmy5xtFDZmL4q4UuWETpm1zafAWVvjveNXCvJoqCrc26pDNVJpKfuqFX229bMHsPhSQqzf35",
  "key20": "S5z1D6pVxMTXgQ5hLbsJqhJxKTikZe5BvmHcWkPhNpePS1YMgGxFMM9gB2CZWLRzLtrTNeTs8BLoz81aab1NJcD",
  "key21": "3fYUe5Sc9oKJBPb6LP3bBq1W9NLGdL1wHwDA7QqLfwBRepLPaUnkj2Rf1GkdkeFpYzgaXaiaAsgs1tDCyVLpur3S",
  "key22": "2Gr4jcPWnc9JR2x64PfhjjC8PbwtzJzNZQFLRayCbUmgLmgWw9Xc91Rcxza73QpASWMbLnh8UsPF2LWhm3fS3WS8",
  "key23": "3FzArBZvxoSoiS8iLFtoFn14wu4GJ4wCJEo6hr49NpjfDi5brZ83xcLETqzDdEbbXBrt56xBFye9RDFDaWSvAYsi",
  "key24": "4UN5mzyAQ2HSQNgyXsLRghtiZNsNLuyX9SBL4J1RY6k7RaXeB4pu6zjuD1ohiXrkpg8PQdzbCWYYZXHJzkegzLDM",
  "key25": "5FF9CtML8BiBmTjMbMnuHrmA2hrTWmngTTqan2Z6qi9wU3ocWj4t63NHh59sndKQRTaMySw7CgAbhXb3nnxc5467",
  "key26": "2h5v4FP6XjfPmQda4GKhd4vG3x28XhgEtixLKfeC3FERPDpqqNaF7UyqGmLLixB9EHWrMaPchRAcKToRnau9FhQS",
  "key27": "tGQjJQair2R3chjAXjoC1jztSbVM8GEyRSmNGL7BKtC9cRDwkRLHv7PNR2njVQHT11KXwRksA3CpwPJiMJueLbG",
  "key28": "4AQaDCqS9zYSx3dztiHPUYcFKvjeivR1Dt2wfMC8wuqzz8rWbj41u4mz1DoJosfQjpTYDb4q2DgfCudZVtxAkMyP",
  "key29": "55uqsGYZxrsq8ufFyYBakfeD8JA8i9ijZbif88xMNEtqUcGSTF93AvT9G38GcboihMhufStLwEf7XHcUib2V3ssm",
  "key30": "LC1AWJU2r3Qd4gk9QM5gZG6WRwwBhWsi2C1bW7oGtHznrW1sQ9NgP5GMmavymxfaEphCdhRk3uiD2SKrwGhiXRH",
  "key31": "3NcVq3WSgiitXFWKn5G4sag3UrnsgrzcW8JufKWisAy4LxrJCD5LJiCSNec33B8uLGf2pdRLwdViV9bgzUBJqg3Y",
  "key32": "26jdHVSJWjyZoM2mbofRHVvYvWLRF5JR8u397czUtq3SyPX7C7n5ECtcZhtz5GXeyP7rEjXrCuudTkVWXrrN2dqn",
  "key33": "58krypKu8T1HmwXavK9nWiA2WZiRdbGFQ1B4yjcrcWZ1ZvqnVMZ2UiV6yLpXAk8hpQTJRPc8TZGGBHpX2g2DKG9C",
  "key34": "2mhKYv2CFq3J7F8TWWcdvKfTzJkvsFAM7Nrvqy7HM52cesa519pWebT8hCRhUxc9scq3Fn8cip6rPfQ1pM3tbAe9",
  "key35": "4uyjXAo4JZCFvkNSnUH3GKKmnH5hyh8QosYWTiQtUoUWcTmR12X84VPM4HG3epXzbTVmAnZ4uqQzwmqN33czXgCb",
  "key36": "4ehqU8D3sYRjRAFMwsSF1M2Efay5HAhdjigSwkoaqTF6ELKDowrpxBxbJMUKToMRykfjp9rqnD2pakVxrQaZLedw",
  "key37": "4uefwpPeG2rcZReU7gK1UrmuNJVcxg1zCLGnqZvLyeuCaGZEbZNm1DAYuPG5KAi5vdbvbxkZiuSzZHww2CKT6vYy",
  "key38": "3MXk9r3mSp8Sb8KTVwRSiCMjpieQa43tBvCiRTUJvAgrbHJMBJh3jMWEexqHa5Aj1oppLzZfvKswyotPTCobPEev",
  "key39": "4oTdGXDmkEcf751kaFjKSXZsCZUR4Leep8uLsq6xcpbS8yxgw8TRuUgeGPtXJMHCas1RRSqknCx3j2byDjDQazff",
  "key40": "584HDvQJJZ2ZbUbT5GsJDhz5vfxxtiZuyJZHn7HyuvFLaGTCt9mdncnzKhEQPxdJXWZzsv4xJRheP3k5TCb6wWPp",
  "key41": "2yMtjUkcYHppigJtuwyfQ6M5gtZfvMB31QrobVpS8jAgNuq2PuEGbyb2AGnMRJD3Y6Hpa3Pm7Dt2bmiewdWTkGaQ",
  "key42": "5yX1uAK8tYD7VgjNKCdo31TjRKGk8UP2NbhTzfiCw68tyswUC6QAaJ8rRuJ5hRzw44Vj76w9ye98P6tGCzzCmPsf",
  "key43": "G84huXaVHf3mLdoDpSTdUdWqNKaceFFZ8JZRtTNQvcjtGNKZAjSPGKBD3NhC1e9ner9pTn3RsKhMY8M53o3Pfeq",
  "key44": "3nCUoPSagurwXCWJpF5TaqpV9p2jU1RwD4t62aenxuiyzSPjgozjyM2xZWzpSgB5zjKYkZL81PBeWY4riFwmQtwh"
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
