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
    "AAFcaYe7RgofWjwcjwAhNQXumyj73TjQ2S5yUZ8kLodkisbNQfLbz7RypqFaUvPNxubtXVyvPkvvjb7kn6rNPgu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4we6VSiZVfEQoxseYV94TzxB5dDYtPTD6cY7aPAJZ4bCfvNXZ9JtgCbVNRKyfPjZ34iD4k7p4E3i7kmq2hBP6LyQ",
  "key1": "2AwSgYxRUZvYgoXfKYqTiVq3gfGuUmghuKkJqWX8SZVXAH17xSfDAPScXB6qo9azx9PYrodWw6HrhwFGiJ62fUpb",
  "key2": "3B3joriY55Z5zfZzrhBy6p5NMNSkCCdLCmsRsnUo94Yw82toe5CQvEN64GDqSeRbBY8wW7viLiKiuRRFwSbvXcY",
  "key3": "3axkzNkyVBPivQVAd3n7CKE3ahatyk6Ue5GHwGjcw6tAiwrJ7f6iDSkCevzYxZDRzh9h4TUKQqze3HM1SQT4wrHB",
  "key4": "rj8BqksKR1J9RA3YRMAoRsC1wkqydUHznMyzrQi4ckBWZ3Q9URZgKTiggg1ze2e1hwnLSXmE4swCMKNYppqR8wU",
  "key5": "2DJMMjwUYvPzcz44RdxacSKpuTALYG9KXiTiDwKQxuLkx2dyRzu7b8SyrBng1kaSzczKrBgaxTqTzqjV2Rx1ZbXF",
  "key6": "3mbnWuDy8a3Bj57ew9SGKx7NwJjbZTRVbym7Cthur9SnUeTcpFpsJqLAnpisLdA31T7XCEL2v9qGA9ZAdHE72U2J",
  "key7": "3BSjAMrvuTTDexsGGWWVMEz9DuuiUAN2ZRvihvXKjjWugVnhcy9mrDx4z6N5qevBcGtQ1quHi5GPqmXeqDQx9ZsZ",
  "key8": "2L1miMEQ5SDGhz16gWbg5rt846f2BWtTy1A1yqNeRHqAinN9AgDfdn23PsPPsSFkypRuXu3ygF2ipsiUQAFgfGe8",
  "key9": "3G478qEXA5iTj3j4UZkMFYqDNg3tTtpAVCiowoZEH28uUDN1umsxmzT9pfKVkcsUxsb9KDy4C6cjtw3oYnw6nobV",
  "key10": "3Zdcu3JwQFwP2oAvX8aXZXysqw7TKsGxDMw3ivU3TS2oaGVxP5ijxdgHzk3oXtxdMqtrps5Wrm93myTWNv3dK5ZD",
  "key11": "23Vp4u5XwAvU7NSwokt1QUz25yq5XFYLFV8L63LBVH6DxGyJH5MoSmrbYhYZSrqYa62zeAiz7mcko9rjDLpVHKQ9",
  "key12": "2S66hXejWWEr4ghGVkiFY4mvALX8MunqqPnWojcb24sLtQXN2YviT6fP4XwXvACAQMjjJ6dH9YAua7wynXRWs8pS",
  "key13": "4AJ37frtWHhgyLMkh68FzmvKqCKDzNX2LFw8Bg3XxSCgmSQAt5BWXFkfJJmfKVbZfJQHCsVnRAuxNDFjfVNpQhF",
  "key14": "5jMJ7HtgjPQtGw1sLyyfmbwaGBMJHyAKkWtrT2oRLQE2vWkfYdV52cNibdEW3M7T3cBtAkuQE1srpq2oeChKBGu2",
  "key15": "C4BdruiCrRe3obqHu4HHUJjE2cByFRZfMkWFfN4dPjnhX4E5A496rpbavz2h1KJapXJ3gAnJ9FSP7me6iD2HpML",
  "key16": "2dQLYaYuB6yrwe9QBdqkho1wAMaDL1Eqtnb2vNJRwnT3dFm4nqzMDRG6DmzQadVxBDJ6GkHPDiby4oNxMi6aWh1p",
  "key17": "3GAp871T8XjfgPMU3M4ys84yUYzXv2b3K7HQePDa9emmyFDt9MH1DYAebu67Viz61ixH1dx8AipeEJsHb8cExP72",
  "key18": "4r5TBxBSWNDrZn2RYdCnAvs7q6Z67BLtA6mCVCygJJJBxEq1wGR2XULJCUxsLyYRnQvJesCuguXE6N1MTXG4nM3a",
  "key19": "Lwb4mFU3MVVWkqUTZLanBoBpjMrWxZt1Y6ePyUWMkjLJwpZcKcQuBnrJueuyguvXPe8gjkCp6fP2HPBuUxDDudy",
  "key20": "2GZRmsp2M4WrsEfBvh4tNfj8H2A4SHuuR4nuVmH96RcEcsGaWYvP7vo3DFSsa69qCMXaguX7zysD1cnDRiTR6rgW",
  "key21": "4pqDBYjDBwYBdyk3DtnVZWc983RXzb8sbaAF1yT1vE89CDseQ38WpwinmCEXnsfpyN5LBTJ1EanSnuYx6eLwJGG5",
  "key22": "4apKADu7koHEMGngtFm8W189mhRhqK6SKnpRdzLfXTMRoVKUkdQwJsP9BDeKiQpwGCTXTw9Lci2zY2TzwGX8Cq8b",
  "key23": "2rJke9NnMFXbVs6mJ7HamfxwVpoVVUCCpDR4tdL2ce5jCW12x6LfeFdxXkBdNDHdCUWgRmqxnsAixtdnPEcHvBq9",
  "key24": "53V7RUWnWJv4uDFiN73RKT93b7s1gRSx6dQQF2oUu5d3xv7N3kQMBSuz584uHw8kPos25cyqLMVcmVmeMf8uvzCh",
  "key25": "4SioMDxSJm3HP96gjqYxcZxv5GK5xe6qTrGtZ4nbnejgfEcWhDLhLtT3EwTgSEiFWazsWvweAnJvaqarinQFbzbf",
  "key26": "5PEW2F6ZDGsqwq1W8iofUNazhqHmgNWdwszjusExNqafHdAKe9LRuNk3rhehC1tx2twGt3VVKfxbAiioAcHpemvq",
  "key27": "57zQXMoQgxDZNeBaKLcMrMHAVinZKQaDTv7mb8UpxdhqhJ9MntTH4gecdrx2jH4fPTkvaS7Z88hv4PzQPX9Q4nv8",
  "key28": "49dmkDfGtSVbWMNC2cXNqP6pVyaavhLXLhRGdjNQo3ZAKViLj8qJ5wCcrAfAduqJD9m9R4FnwKLKoFzSPCrV4ZtQ",
  "key29": "4sM4SfsZ5Zc8nYJ5BYutYbZvDtRqpbGDSFMYhJ489tGiP89XJQAe4MHwubjnDP632umrq5v7cNGwBeTYbeQvu1xc",
  "key30": "27dxhBXvpkqcxHGA4PQfoV8VGwasnEV6yV5CDSn4h4hTfZUxhRaPvKdfNKeQkJUe8JYpSWGTjZ33KTYoybntTCLQ",
  "key31": "5B85iSPHHR91M4xMA9VfpKYrvzDqZvMUAPaU4GbxH5bpbBPGQ2LdsShERe75dguGuVCaAiwkW6ei7j9hkCMyacvV",
  "key32": "3CkrysEvoLQAKtiPHiT9BNqCbbVy4hpZ9GSnyaH7R2XoPxAqnaU6g4tvB6wHDgmjShb4a8JzEKCGTHGepgvJXzKf",
  "key33": "yT7fR8WCZzEwx1ntmer1hREDFyqFtkszi9dpporFVhhkyDAZ4PPDy3DCeu2YopDChCrVJfJQbUe5JfoCQ6MsFPT",
  "key34": "3abnph7QJ8x9aJbuoafXXdWiwFu2fjLaz2PEjA1dfSairJtzxnNf9TidW8Rf1FVewc7imMt35HhQGqrwJ8fJjHqC",
  "key35": "5oEULa8ZPfXPxQhvjgZKvmQ8Fy6zLozeixUDbn76YyCpv25udXDvQgyZzZyJCTMr2rcj4mEKPxgKmXC2p8RfxxoF",
  "key36": "5kQGtaErbJG2yAwZuUrMGnehVNbaLtQUaVrQW9oSBF3VNMGSvWmKM8HnqzESKqcLzueNDA6MdtRnHy2TquyVuBwN",
  "key37": "5CZXev62gKBk1Pj9rqXRrWkdyFbRuxiA57HUKSLh8VJf2a8YajyKQFbZD7GmUygsPRFQSqBYXjFexkEtH7pVLA6M",
  "key38": "fcDtuD7Ni8YAWA7X9EDzcPTaDBJFkWTv5gcmUYoXMs5t8mX6F1gq2PGsip6LLG14zC78H2MsCm1zdFXUT1ymr4f",
  "key39": "2N4kh7xrEFc6XDcE7Fj3TYTeQgG3wZz3bt6UiqamDaKvcHWWTzSRDKfbbr88K7newr6hjzn4wAfjNEW2x8asn8yP",
  "key40": "4y8P8JW52cEzm8KLy8fM6Mj99xf3ask4eNoknoJxtsf6AxA7bwn8ykvXHqbeWKDvYokHwzgzKsZNVcoPFq3afLxw",
  "key41": "wuHvyYcG4hcyCra77dnv4p8BZuNCfmxKcsCKdj4o6UQnBN2WASYNegb7kvh4vDNhuWNqKJx9KhEQBgmBRLq79Vz",
  "key42": "2f7n7Ex9HXZ9E5DvPE7y3a6GPLAdjVVNKyoZs611Q7Sp5ZUD3LHWX6ieQa1PN4SkPYaaUjjNg5qtEyyZPk3k5JKi",
  "key43": "5ZfkV3nrRAdc5jHcNhcnZRKsHCLaxyQGsuux4npK7WBErcuG7FdFbLedZvLkXpKfqGRgADETUvjhQBpRUf2eU8iV",
  "key44": "2inmmqMFAoRe1JZ9JkMCSNKmKcS6fpgSmGkcd6ozeAXd42s2ff2pNwFe1LxrRgSQygBUBY9xC5KzHEC6gJqiAiis",
  "key45": "5SpCvHFcNho1vzdDe2W8FkbQccczWxZzhiDknVSJFPaurrGdaoAR9Acmyc4VBAJ669Q7T1GDYWGUgh96mm1DpWVL"
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
