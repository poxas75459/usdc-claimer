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
    "oCgFHE6b71uwHhDQXztoNibc4cWuyYvaUrQogTtoE13NJNSvTn9k5MmrUnyBSE1sQ1LaY78VTKrh4z9tgjdXeEH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BdFg22Rgmeuv7xV2qYYLkJRGDcfxzkVNXykzUZTTbSkTUgMHf4HEPqizmRuDhpNd7uGADaDYNDFqeojQQiZEg59",
  "key1": "3BLF4ZKJ81b7Xfnzx4xdVRGVBk47ThfAbks9hLxEHkveuexfHaEtz1fPNbB4EFH378VCV5fatwiCZv9KMfe7un21",
  "key2": "RnHbqa8J6v9x7t1cLwm9ZTVBb8oa9crVggJxzVBQi2ZsSKEFXggUdMpK6o3sL1zZf5YvZupcHuH5cGjDaAuPjah",
  "key3": "4Rosa4Bo3TLMH2qn8vKWFVeiLUK97cv2s2r6zo8EQp1MBeTH5oibqXPwataEQuALDywsLY5KBZXCrZ9cC6UMyp76",
  "key4": "qVso3zfpHJEfAWptDwDPVz97xeQBFMqQqHBmRhJR5uQJHMYiEx41pAghFckb9JFHW6AkoCtEzUdSRvp6oZ7FkaX",
  "key5": "2HPFWoa7PhmiZbvvEJJamzBn9oEP4tw9b7EAed6w7B7oR5LgtD11UcjjzkpMUsxLSW9e8eRNXy6FP5fSM5QArnkg",
  "key6": "4bhbzDK9yAobZhQpZReonjDN4SAwFLhCzhmVJANbmt3GsCyaetqsDJPQfGgMXGJMyFKk4N9zpee9TfzSu7tkRxEu",
  "key7": "MFNmm3gxbNSn3UxMxqGqBjmX9LSm9rCHFYrT3e6fZaRt1yfbhEiuhY9Q3CJfVyDtE4MTVFisNNKNVgoNkLGoxjp",
  "key8": "2eoVwEGoypv7syB2p8S2YpQ25tig8ExPF1ZeaCavM7F7dES7BtGEbzSwCc1Q895mE825rSg2v922bhcc7oYRWXiY",
  "key9": "4TbTA2R7CHue9Mn2Bg2XEK3NgkYEa9jqM3R1DzHKmchHcsbRZCAp4QNYb7RDbtTDQyyXJC8hmkFGf1GCSHvj9ht7",
  "key10": "38jmsMm9iQxz4JDdkHn5znyA7wJsJwG9fEguPiDaCzEVWWgRrZTLAiycmfBkTQeiFPSB5xU4mtoLnPksL3RK6U3r",
  "key11": "2TdBNLqwrDTLHLqhFdJtRc3fuj3eBpaPCdrXMWwAziY9LbkQFxJMEF9UBpJumNX18GKbxtStmGmFjUENQmzSphA3",
  "key12": "2ZuJRfVNmFMqVLSVnC668qxstgM5KZBYvRHkcZJ3RXjqnEXw6HWDjStsaYXaiWKfN7WZWNZYjkVngCkcUioVU4AG",
  "key13": "4UMbty5oFQXNezeTjmEMYXrNUoRZidZLPJtkXhZW5Hb3DfnE1xkCbZDSNSMqJeubG2mkKMywK42Et2DCGgywD6yH",
  "key14": "3o3VjHj9GYzbJjqvbJa4ZbUj1BwUhQnn6QMpWP6hTwkAcn1q7o5FEFnP22YsyW7rrn9qTitrAxDi4dWrim34fgML",
  "key15": "22qTRzq9Pm98eoAzneEadgi3PSACmPW96uBYVN9GeJupoCX3VWnC8Wo3YgrnzBn3vV42b1giyYcUjLVUrKhYjUTo",
  "key16": "yfTQhaxcnvHN5ZqRDXm1JRzF2kVDqZB6dboFzdn53Tzz5wR1qaq7o9VHmMyPypixfgVjTr2qHbj1bkU31M5A3XP",
  "key17": "hd1FqGvXJkYkJgNgkxkrC5bAuDxewiZGaFUr8kDZ1zRjG3o9j6WFZECR3Zf9N4jGmUU9s6GGgPbivNVD8j8P1hp",
  "key18": "4SVxkMDsjVeg14L8YHQoLKMqF96pqRZt4ZwzQgvKrA918jz13fd4AQjT2gis1fzyyzTwHLjwjyfnNEtUboVt3QT3",
  "key19": "2cXRJT3NUgfGzeDqFUkmStAzewVRGUHVFJz1vXdE8pBsynGbYPrFg5iU2grhFieQYM3kNsVk7UMUWb9pPgUfLbeo",
  "key20": "rZnZAfxwXA6gqEgSnRUbJUvr9waAa1PatoZHyiqeUqtnXgohmQ9NW8Nb5ngWFkhQAjdPDAe2CE4ZqPL84kDWKwh",
  "key21": "3HSkjAg9hYf8kV97QiwRebT5mso7QYNs6A7fJcnCHFgNXubLzpy42EjhcSSGUBxmBuLNomRoX6uLsnSMTX3oUoPT",
  "key22": "4BensikoH5cY9XKAMAdGMyTrKxXsjnZFkERwpq77vEVZhJ6V6rdcQjVUEWuG93aapijFbQyZR7SvVSTdXvtQdCN6",
  "key23": "2fThNdRUSLHuBZifCapeajFggsiNeTYA3C2e4Jn3BhZyx3rBifKXKt4BEZx1GnvZkh9m4FJ5UtT7kykQaePUmxam",
  "key24": "5iKLNQyQa43tMzVYz2efEJVpiuX8G5p8WdxScjJ9zF1aLji5eSisJT7s51JUWwvAqcE7awuTKAAvETJPLbNW4Ac1",
  "key25": "5Jmp43vx1gGj6zkpY5xY7BVBPf8ogLaFqFfzx4daV4NL2g7P6TxA7TMHgCrLvXymEKY6Devtc2WgynMnZ86Uxn9S",
  "key26": "5SV9GnCjE13tXujA2Kqm1gxzsp1qZ4NdejhK1zMpRMcX3FUoAUD3m8fYgdzzgM84xc9dDTkDWE8doUpjXGLkZjGW",
  "key27": "3Q6KwUobPRMtkbwq6STkyuPvbYn9aQUXgmibjnf62uLLXtSBkTSpttLmH6dHJy6rCm3f6TDANA33ePvpkBZXpJFn",
  "key28": "2JDQWFJ528GVQZ3VUNBDNxEju9PvLUDpFPKuwE1MnWJ147FjWHGL4NXYiWbtAe3fUMvCjA6Pj3rt4TV22EA7XsoD",
  "key29": "oceRwMNc4w4msSXuwBHJ3sTd7YxSzw66LB7QTpfJnNZxN69iXFitfqEbPQUYfzs5qUKoszwLpMubxXbKAy5g1Np",
  "key30": "5enoiadQXqa3yDLDrXJdKxySVzgGjPHu85P6MnwPgxt81aWkv1VuRC1BmvK7gK7XZwwMAhoq3BTg3Fz87QZhjsQk",
  "key31": "42mKS2GzvoefUaY4QiWx7ERBoLjDdnuvdhWRiucwzJ868S35t2Q9YZkVSM1S3rKmYpVvT1ZtiMCTFWj3xF6uzi54",
  "key32": "3PRwuDHJvRbczHUGGmNpcBCB4pDxtgWLegw7vhipXi8jKewrmHm4YqSPz2EpE25rY8unmfwQ56nbQyWdRBAnyjD6",
  "key33": "2QFV8E7axTHAEa55RaUDBLgySuNpFf4trzSKuw9cqcPFdJz9M8cuL6pKiEa9ePWkcUwsB9oVFKawnYcCBgwKcUvJ",
  "key34": "FAGhniFyrR3F55A4YyfhTjB6apFwq9njRrEizZ7SBypJKUi8sTsXPAHkraoj6ad3eViE79ua3x7nfe78eJwfYwt",
  "key35": "4p5Y8wzvaYUc7hAx8r9X65MnnWD2iRbsLMEgK8BAPoPnrM8BWzsZgZGzhNc5veLXQ796jdnbZyVgxfLexTBTab1p",
  "key36": "5U2dsKssQ48PoXcAA8WQmBf7oxYb8x3Za7dy4M9cHtzzzpJfSGyFKwkR7DGa3bhaHwpDZaMtyZ3aX9PxRP5T7XC3",
  "key37": "5Yba1JYBPHdQKeFTE91GCBFwbXVstr6DBWUmE2K7d6oiQHEXrKJ2RbEGayZREZLiKWeoNzAjkc9zvkrBCRyixEVz",
  "key38": "1wR96G4bpyKMRm4o6RpDUSg7M5FQxbjf9aJB5L4JZWS5ucYPB8d4zGZVquAjjYCqg6DrQe1QbEtfFVYzVFTd5pW",
  "key39": "3VffcK4sFn1mk9KD5FNcwPKKoVrUQ7EgUVuZ6ncJ6BmxQPLUq5UGRCNY46dHd2fFLkkFgtSP9Na3ncjSXt274KoV",
  "key40": "vWyAQJJmoXsCfpped6cLSJZaTJmJJALw5NoSJpyTwRdX4VpSJV3uARWXQo1NP1228niFydNb9iqr7Xov1CfGt6c",
  "key41": "41xJd5tSgFpFrnitPR7TkhitEzfVBoV3FSBWuq3mv1mg5G8zDaPdLJcBU2nDZ8WTuBkcZrUivF2oykURcgdBAKHW",
  "key42": "25L9ePPxrRbhiz21pgMxW7wQvxxwQJKJwLg9iyHhhg1s4cu7uKKJXctNe3exnyGmnfRtdzLzsisD6re1qHCD3Eoq",
  "key43": "3DdpwaEhFPaJkFcAA3hptqbLedTJzyKgk4BcttGcWxhk24Lk4Sgcq1DPQag8ZYXaLJDbkhk8M3ieVpnKF9c9xjTK",
  "key44": "Dvv7X7P8xtT2e812Wk2weZdPBVnTA2TUrDkENKV9yETzfWS7aDHNtcKq68UMhpt1QYduWkcCS88d249htqY4G7L"
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
