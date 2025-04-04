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
    "gLUjU6s2t6fCivWp8SCf5vF5RAQpnhZTW41hgXpo5oUiqkBzZitD1fSCdHQciS2QQfUsTn4pRnaPAyg81b1X72h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rfVefWHw1TU1yfyrTDG2ta2fQnfn1hhtyv58jVMpfn6yavfJ1QEodBcEEp7d9pVcUtXbQJmr3uoj8TB5oEJfZYe",
  "key1": "XCNq3yicP92d4XAkrfMF4qsLDuLU14WXhBkev4TeZHAXwzr81Vz7J9cxrpaSNFhuwJCfSFdinhgEn6QTKPgcBMi",
  "key2": "5SFRK43nrmaFEEcT9PrGgDmRi67Rd2DF6wcDPv79BRs4NmuwU4Faxt7iR7gfpkpKMihBKmrDeUSfRvzgH1A1AMyb",
  "key3": "4kB6RPg8SJk4FQ4W8LL5T2LszijGNiB8ecusW41ihancfXtFxGcKvpbqDMczWeQ69SbLx7XJxkASCyRNdH5xSTwp",
  "key4": "2UmKg8r9uoD3gLppYNomT1mqwrf7jMsnpxj8kMVDdpZpbgtPnpRCoTLe4M3fnLZBX8yiac41JrmRy7xP9zXdb74w",
  "key5": "5S6p77vUWs554MU3UeCzf5MQauUSPQREZhwjymwmzwHXwecGjXiXpwafo3XdNdaetQDKTqtUAGetjYXwZT7aeBbd",
  "key6": "5DRCU4X3Q6EP1t9tKMUSLwffGEoGSoHZ3tJCEA4bK4iUWL9cmhY8SxNr1SFGXpDgePrMCKfwdWWmQ8fP9kUNRAx7",
  "key7": "47bDrvDxTmicQhRWSWeWAzzxvMHSWt9hfcgkThbBQGzLGi7JHVR4MPTNw2D1AAJwFGSq2NPqLetYoaqopMhaSw33",
  "key8": "3fxajdvUn81V5qSCc8U6nen8s4FZLRpxcFwQYpTtVHCSLTXqg3F19PHCNKm9AnixmPo3aU3C3bQBaBHMZDMmnak6",
  "key9": "4UYXJEd7qkG3z1HnQHf57eaHMj2FbVdmZAxkgUX6iaKvDqPYFdUmhqFdy1CvKMRaqJ8WYJV1eWEPHUPR3g9csemX",
  "key10": "5aZWX9HNNhYj65Zzn4woaaFeSMWFGzQtZm6zXWKKTk7WL3KjoFDwgPKhgLTBEnQvA954LKZ9ZH8vGZb6b4CDpgHU",
  "key11": "idCH2wLdNFYHQzMoLvBbF1mNPdjQTfMtFkSS2pMHZ44GupR38bAA55AnxwG1WiateV1CprMiCBWEYtZbeZ5RhuB",
  "key12": "ETjJbDTbWdV8JAZxpMowgM3H25JeEd2hJitni4yA8zs4mHLDU92dExB5TNE1zFjKPps29K2ZYXHr89ZxM464mYs",
  "key13": "4uJn52JRhEuECok2XXxikxqtZMd6agpc2nezjrRdgyUCaNNM2kLifGdGsvLnWMffaYHyxXarLhZ4CJD5M6WbNyh5",
  "key14": "27NJAnBfpKfwcMP1pBjiCnMbEb95S3U75388BGSNSoTBoLYwrhSjUf3i9vPFFbFRDG6K4Po5XS8QkBaYCFW3obJk",
  "key15": "4dMLdvPkFFeKirj94dSzgqv4KC2d9SZmGQNBCipFPf3MokVwegooZMQnRZvHkZYQRkS4gtZ5V1hfHyECL5DNLr5C",
  "key16": "5ku6uf6o3HxLjFaGRgARgBe7qzcwgQV94CP1QAkCe1snemL28nAxg4kUr5ktsZJXk2CXSM93cfHV4c6kdCbZHhYC",
  "key17": "5C8Uyd9wu9M3GhYF3jyifLeVqXUY4RDZEPddwFRUfWdE4NCGBDRh42eu69L2aSmbj8W8KZz25nLLdPLYNWJNu8bh",
  "key18": "5x4qr7J1Q2ExtytvLoPpBCnZxShNz2LsqbSvsFr66nUXeUtrEXeWm2xgKByNBucXrHNF3Fwq3fwjSjyetXcrAext",
  "key19": "RwNnjJe3xEGiXdRdmvZBG6jeXMRr513TauceHVbhJeoW7mah1XcLWfU7cwYRDdZqwaBWqx7PNBByuWgDyVYGfJr",
  "key20": "4fCa67CtE1Kau6AecBDqGtoYnXMppAjUKTaSRvUyFBt1cowg212SXj6aTf7CKxyUaPCn641kdefFcfYcn6UkNvG",
  "key21": "5xBryoK4ARG9uXykPD2cKYNUrjJJYQFMHWPF9wbT2gTnaM9pBwjUzcKgXzc9MsvBjvp9y5KdVbQuC4JQURRiiWXi",
  "key22": "2FQor8dYbtRQboS3ZTpvuJvrf4231A7Z58zRWVhvBkTkfwxNytVYHe9vvexHLuE58JESM1vtr1BnynQ2HuePqpDu",
  "key23": "3QSaKuzJjNiLxmrxV7h2ywJWZbccvRzdQozmELZY789tsxqqWKnNtgYk4tpgm6GMv99VxJGiGp8VRjnAszHARYWk",
  "key24": "5P1YfP5SivoW4hF3i6uFgo3dfm7pHcxaN2GtK4Cjm5sBXUaV3Xih9CL1DYvfCcf7K2nWnJujmzmPdQyh2yNT9Kjw",
  "key25": "2EekQMqcCnCbeXE7mcbYo5tkHbf3Xv7KZXpZMmzEkrVCdHZksyrhEJyBse6kEyt3DVxyvKSRAc2Ziuoe5XzTn2Ny",
  "key26": "62N4TceTHTWVEH8PNCvXwvnJ3MFUozHJ7hhgruuBoaRDTAUG7f8n81b7gnSyGRTbKe35rXkxU4uYEEsCdhDDeFg9",
  "key27": "31cLUABFB4zeooRNTtXK8KLt61HKdmoYQHLZmj7Fx7peonBx3uvgi2gN6E2GHwxS1oMjmP9rRsjT1BcnPmXMXjkP",
  "key28": "2vw8VNMLwLz2PMetJcEWf7jDLpYGGRjf6HqkkCvDjzeMfBFuTCT272mdMM5bAksRPaswQ6wnVBzRxhVRZFmK7CrU",
  "key29": "2zfsGXyb6S5j1kooy77v24Bejweswbr27aHVepz8FE5dKupV34tHgaaY6XuYu3DkaycTrsLpPWdztfE4ER5SviTA",
  "key30": "CfL1cayvQrf1rLmPeMSKBiRwpSZxjEQptgAFJLZvBKnf75ih6MPYsGyviPaUTUj3cmTaMjjF6mJHZ9sT2DgEdou",
  "key31": "4HV6HdbueeKkmeZRdxYiD5XeLnEkFtoBzP557KvqgdJxGTJrMvkwjH2oUr2bnWRpBVyhVnst3Cqm5cCwh3Nf36Kr",
  "key32": "2X5PQhu4G1kCj35QXP74uBDFXESQ5PR9engR8V4LYiQ4TXqaNg7zyu5hvbnCFbudsvw6H2aLEdo1izER8NVV5ijK",
  "key33": "34QCy1euFyZULS4pjR7HM4yoXNGGsLoXdTc7ch4CSNTUmtVdvGnBs41Zcr9zFr5nN7GAtFV1LK8vE12GxAJYPxBn",
  "key34": "5BrwQuQoVFjcGRXZrBaejn2hbVshVNYzehTUjA4ssM61mTfoCpNZ3mwnWakWdMdoGokj3R5SV6SzTFQzGAHLamSg",
  "key35": "3YvXZX4bZ3roJj33pSFcY6Dvuusizt8RJrGy4274MTVsZ6K7EDFPPsG7qTrMT1oQtd6tYjYZVajyetms9M99gFvk",
  "key36": "2XVw4ZF1WHEzv5K1jjeoYupzC1F9hKa2i2cxHap6Wp6VRKCndoArwtDrGfQsmBKKhnbLyB8EF1hNHBuNHGxHHoUs",
  "key37": "3qLwVmNt5U8NFoUbQBkDLFmm5tfEM9vf6P5nKewZJQMgmbW5gys8uDyKFp85CG954XQP2h36vug6fderA5zh71iX",
  "key38": "448vS2poEejDeqVxgskmasut52L1V1QSbFgnmffbCTwiot7Em35fkrBsnHeUbx3motAr1YfsvonWTWEb6ETEBAXE",
  "key39": "Eq36hzma2VhS3ndvzGwxr73jfR7kbgubq9NM49DPb1QuLH7wXUQXwUyeNk6U9eeKDqz3eJbDjM8pLmYb5yicXef",
  "key40": "JBxaFq1Q3q3UtM4Yc7PHyNnqdbw2g87qW5TZjwrCoYU7QTYGirAgybXXdbGCFzQoRSe5RYA81QWRp8UVvx7AbcV"
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
