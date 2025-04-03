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
    "3GUnGhhgAmgJx2jEqy44vW1hF82W6YmMUZ6wJ14hwpqefhd2SqEJotcP6yGt7oiT6jDvZbRWhAWAhKsfQF2ZCZ21"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FyvNrj9kFjN7nLM7pk17fxwr2SRkjEhv7dNPi4d66dssuyKbYEnHxfQyZfHdchCnPDzzbMPboew9gctmnypivqE",
  "key1": "2GE7kTeAXtEatukMHrKqxempLK6VHKQioDZMxjkNujVNQEMD8JSxacke2kXGHbb3zJn3soRZwTByfvuZKuSb7zPu",
  "key2": "2pMB3BV1FwoTxVcha6FVfdWtPdfoSgerbDxaHpJ89nuPagZ6XRevwKApPYKYjfAvQhpjDU7K9PtzA2e42SSVFu4k",
  "key3": "3UGDTzQGrA4ZUGgGVahksEDeGzd8xGY9bspDkR77RAXGyhchStbDykXFjBZUUgbEUfHt7HyF88hNp4oEdQFCfxLH",
  "key4": "QTjU6n7gqGiX2DZauSVsMHoizwBh6sarGY7GGyJJnJoHN8c9xNcawshicTnvG7grDAcqF1RDTGrUxrmb1biq78x",
  "key5": "nEa4W9TGwgyaRbMM64yKZPF8mt7Ukk5hiwCHY599X4ZC12Pm5gbQ5ZLwgJsyRsmG9v2HWHcsPnV8Ma6PGPuJMfH",
  "key6": "67cSXqV4pq1V2JEpQVsNVtYrTaLgaYT1ZnX9kjeoywDrD9naNfUrwPjEwxrtEKAtmPPSs2qqsounmfmzUdkPoP7w",
  "key7": "LPw8CgGUqMnVkAwpXvVrZgVhYTftErLb9RjeQzmgPU1gxV2uz3zAyYdZuAr3s1ne2TbJeELCetVAxm7tLDKCCeP",
  "key8": "5FuyS5oBY5zBjPd8M5U3k8GteoQ88QcBAjEcrvPASwakd2x9zuqeGkK8ZzJVwbw2fsgp9fd6WXX7vgGbHADbFMph",
  "key9": "ukqidTb8u7UDdGfG1mLJJEuC5ugraBEz8H6HWg9sJMDgMjyXCdVWrFxtqizUw16vjYVHgMyNALqvRmSVurK3iGf",
  "key10": "4Vc29o3qctAsQBA7EqhEpbR4i4M1LwuSx6f6FSinuucrmc8LLb8jx1ms4G3vzjeREfe972yffxq2hw8RBHnLrwD7",
  "key11": "4jPjxhvme8qPT9rhv4dmKeiS5yfJxfypZKAEiwn832TBVH7Sn6MgYPsXoXzBYiNN6SMPhbwDLAoumtexByiJJf8c",
  "key12": "4T9QcYhsJw9fyatkb4wJ3QQfp5KNzWRa6zhqdY28P7DmqHW6KKTq7zAoYkCnNPeEU7zpkNZA4HrfgMk1a8DiWzFx",
  "key13": "5UeDUmLNkgNujDgTqvpVXQ5UYVRuSRZw98nkch3VQCzp6mqbdxRZhncHz5DS3MRvBsUxQYcZaFCErd2g399vDZWx",
  "key14": "6i5mzfxu75BvdYTH1vmG18ttqn3Z4P6SLpoxmGbpcbkgUVSv67rmWXyqohxMeijLEtTJs8545Jqt7mc587eH4Vu",
  "key15": "gHLVLRD22TjMFupJNzYCTTWvfQQUMaR2FPRWYagBQooV1gcdCAqcLhRtD6yZbTjQuW6eoWNv8y25ZuPTC366xNs",
  "key16": "2P3cuCDv6RrCsgkZAPU79Myz5eVnQwu9oCHPVegkEvC6ew6zsU9ebMWbuzbPzCRgk1AafLxHvZ8SHUE7DBbCk3Mg",
  "key17": "6G5rqVFGJNzsfQaCFXDphKAxmV5uEKeirRS1WawaD6i2UrNFhb78i3UoaR7PEw5N8en52w6uafANzbzDZC1hqo3",
  "key18": "3hxemA6uYMojTKkv1UpxHmMTGJPr3Rn4LSS79CmFDf4FsGJ9hkKchZXr3L7EBWv7QoPhofQ5DNSMk3c4xDWaQycd",
  "key19": "GukE595ujxLQdebduKsvr5aSphGrQoXS557wqtLbW1Phf9NYf7CnTnKEzsBQA5WacTXQwtf1SBQVmyHWK2dNkw5",
  "key20": "53BhV289Q73mkVLQux4R5RzTPcCif4TkxzZX7emQ7PzGWM9zSZ82VgXM4FJVcMG72GTRd1RxpZX55p8LmHpsvr2S",
  "key21": "2VL8BRm7YBZxGBunSKBih8Qr2UFEBW74eUpb5QD5QcmHLU63v1vHnqM6hYZdMqhoZaDTtdx6JNekX7dNALPNVcCy",
  "key22": "4rP5fpM8q78QjJ2goeY2AhSieeF4z4zrdNrAZT2CMDJfHz67gvPaKcKvkVZiVJbPRkUq8vWk8WoYybgxHCBwLbgi",
  "key23": "5xef1cyDB3Pz7djAWsGtZjkqs3TwSPfMfcS8hxDFWa8VRK6KuF5tuo78Ad8ELKNofpqqneoHvAunKsQtP6va1tEX",
  "key24": "35khdVNRWs4A8RByoCgzzNCKthXNXn4G6GEva4hLHP5Uz4zkrJGGPqHFxrFyx1JSxs6DN7x8zMtu5ombmDfGrmm3",
  "key25": "2pmfpVssywfXtBRcSpSE9TU6g1Z1wTUygo5VyfdnKthM9ybYBRe9bSFMBrDU4k4vMGv3mpbeSvwh8mzmHoZpfYeR",
  "key26": "3TfDAMuJQtqkyVPCECc4a5dqtkMp2fY6FQDWLibyHMYSBjaJvpbRQbUovvsrqG9qAZERe6PFHw7EBWnY7qnSzrHX",
  "key27": "3qdC5DBbeq93bJfbeKGmgRMTWa1HSBHg8MCfSzy8anTABJjfTmsJV1BEkGCzd3vWcUygCQLM6kHia9WSJcSsRiMJ",
  "key28": "4xioV8BVsjvEDZegm6LhPKq2B93cvNGJKSDwq6Ry9HpJCppGRyk3UPhdf1fykHHpXc2Shz5XKVBHDLbVQhyMaJ8Z",
  "key29": "3656wMHeEozTVfTXzmjmLq2ywCS3hXxvqk3dVQt69EVfRqA2vr3NrXUh6Pj9L1vyGZZAZypuxPqK2FDpU35eazje",
  "key30": "3MC59mENQHUUMuMkbN7ppmo5ono9X2Kp6uS4qUSvfXAJEsAUbygiZR9NY1qeJ93MgfiC8kLXKmQ7Fv9XE4oEWU3t",
  "key31": "yY25DXwZHstvFHbZHebFZNXKDRVd9d4zinE6pz9cAmRtwSVsts76KPQEUKfzFEWZkDrZkkgjEe8x8FELbJRXAip",
  "key32": "33uCuRWWxUjAAMRu3LsgwKwjbDskHfMrbfavyHYTqixx7AFPmi2K2hHfXjLab9GZQ9adrGRdcUoE6Nq99p4kh8tt",
  "key33": "65Wdh2z9Q9zaceJ45qCKwVcZrxTEMVrAKUm2EVr7bQhTJ85eTfpgR5D1sKoLxPm1CLeyaHhmp1MLWQdKqnKEbtEb",
  "key34": "ysSLRRAaKKirfbBoH6GoarnNNyb2yBuSF69QEUNaknALMsFzhfce2Tytoy96xGjZSsVzGAsGegD2JgErdNdygYP",
  "key35": "3F9bAq9ie62GSLEFBHBpYzTXvAMUiKbzEZK6sixXM5TUqbp34G46BuYzxr2cuQdFLfNXYDX7yRXN8CQSrCQY8n8P",
  "key36": "3vkpsjVLs4CVawq2NjBk1F6WCgs52rgNug3u9V7rW7GcHy4drCfC6BADkqTLnFPjgT3o8xHgkARFJS2FXCr7aBRr",
  "key37": "5SWEWateXzWyZvYLYZpr4eSw7q1a6qY1SMgngbYRCZqDnqR28cTwLPtVeZZGiZD2zVG9K4ZkB74JRribeqoPPQVA",
  "key38": "42JmK2cQ7jakXiXuERpk363iRZQozfNFsFT4UfJMXVLgFLBg3bzutfkoY5e6Fk3V8BC1zEfwdqM1Be2ADVTWsEiA",
  "key39": "Y1LaL9xtErcpgC139fYZtg3t6KLEu76UeaZG7hF1bRHdJSnDukbEXBpzLpNiCLHthBs226jSKgbvvENEKyZxqrp"
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
