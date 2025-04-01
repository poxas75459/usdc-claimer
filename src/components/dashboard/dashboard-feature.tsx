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
    "hG2NHxLo7KsXwPZRExum1qu2YH6NVrmqLMVSgavoYrJJe7LrPN14Av2kbwNjADyhozywN5yKRjV3YyBZyrLK5dy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HVCLtKbAxPnMxkWt2RDo6VKv71VrPGWFCEHdWdHj4vU1ifv5tvWET5tRsPqqHYpCd8o4eRAe5saF8AtncrYnQr3",
  "key1": "5qZyV4Tq9x21d6EqyJQRxc8JC5Qkpj4njpTKqeiPXYuEMbFsMKb7dYqEsmy7Lt1oE9Pn1EortSMKx9ksHiqVkVek",
  "key2": "32mgLMhteR3ahF1v32bNkDcqTqYp7TKC64C8L5DgRRfdZAWASp5e8eWgA2SZm6Z53rMBrMWNwC2BPyEoBDXdDekR",
  "key3": "5sf1AZ5TikWtQAfXwmh3eWtRActGprJ1mcD5eiL3rySLBXFJy44HKnwfjYuTZFU5LhDPDwaDAHwiWkYNVpNfcBvX",
  "key4": "4NmtGKNpkME5nptxpRbjbdKHrD5ZDBi2VfPzQ49ucyD2iFwcWrE6aPEExFFQNvnV3TuBJ7ZVXjaFUwzWLo3PRnQE",
  "key5": "5ijmpimpPPZphRHhnJr27FmrJJuuTHgEV5FuvonGKWvrtBzHShgxiAnDnuvgXGqY9D9ApEghnvHrT3c5NqSqHW8N",
  "key6": "3aNWpED4hoHRZ6rv6gghXeiakGjFFX1KnQ2VMWmpsMG7YHrv5t9G6SEZoVkLpdDr1hm2iSbDE8pq9vjTvSer8EW",
  "key7": "MFKpmXfCyHpdYncNP8NtrhsF9demhZomWGmN89id2MMe2V2K6LGx9jHFUTjRBzDp7Lh5VuR24KfkVMKMW3H6y2R",
  "key8": "5cJvwMi4FMP5HF3ZoFWE5eRNpdyvkcw1jq3jpCmiQtGqnZrD16vDuKaLmrUqhYAqR7q7TutT3uaw9Ey7gfwZ8dWv",
  "key9": "3u69EhG8k3bRBr25JxHupeFuLX4SYNQ27Qc8uzD4pDbwThMPLYd2U5L62fhaqKAC7mZmgkdhiyz5Hev6s9isjxeH",
  "key10": "2Pdh3ysBvow3V5k5zCo7bybBMx3V2SPoLaX4jLhbLf1XuZ6ghZMLpyWkpKZv5sGYrhgSt3rBxgaPoCYMPAxHxoPB",
  "key11": "xrmCZvh4NZDd1U5LaXho169g2oHCYpsjfSkVJqRFyUdG1qqf8fP3SaY6EgVMrofssvDjb6W8NTDW1sFchfSnbvN",
  "key12": "iiT76caRuLGVKitHpbFJ3mW8Vh4NYjqi3wxe8pRuMfKf3h3u8iTGBvQxyPd7SfsmyoaHaEcLt1bGzcfncCxgVfn",
  "key13": "W8wdVbPV77nuxeb8tVYFFhgJQ1pb5uLoWLqRe7Ag289fCQWFseHzg3UJec2BrMvZHpPuwVNnzMECqmm4jhNPqrf",
  "key14": "52HS9FoTYxpTJkuJg3wCB83s5x948r6o97sLgASyAdrRtoHygJKb6x7dKyzJi3H1rGDyUaE19SCr6vEk1QdAkcrP",
  "key15": "3AXM267qLhJcjZWZo2cTj5vuyGTVbgPPk1f9V3R2VVS1GhQRmu79RhAg4YB9z47Hvod1Jk2J64CaFvs4ZUYrwFGY",
  "key16": "5QF8Kt3sT6ZspWzgbjPU4Az9kLEkGiYyVoFMFtuj75ohiWSsvahrxJAKGx9YzAs6bg3KdGRmavUDAWGNuVuWAp3F",
  "key17": "521uSvrPRoh6mFmWwyXDVnpuewzGqhiPcuPgakUykV1oGFcAHniqy8tZhdowFdsywvto2svAxQPg1V1ceptXkn3e",
  "key18": "4ja6R26mB1aYzDFUdeQM7a6UpVCCPScfyZMT9pAT97LeCrmeWGh6ZRfUVrRKfxqnYSvMQtYnvc3XhJuV6rH37fXP",
  "key19": "4ZphwXpEwV5yLfR3AsaXzkSg8RMaopRA4vVgeEX4VdWtPTQ72hSG2HN3YUaV9goJLev3pdYXwY2dHY6bab9aahGj",
  "key20": "2NmPhZ3N7iWgzxFPzjJcka6ojjFg8aAc4ePWLSCmt1pavZkAXgRjPBPbZ93urotredLZKq7uGa7v6nyVG3SWzFM1",
  "key21": "5TQ8D9qRbw4tyjiWSdqUhppwvC4pbNvHaWmSYF4TBeAje8nt9g5CugPCcRgCceJcLQLfmp42J9kcD1Vy9G1qktUT",
  "key22": "3qVna1GPUgFPsrscLdzcW2BMzAYtrAYBFWESNQWSKLsAjxi5b3mreqhAQB9pksa4M7WzBqf4gkkbeU73mMKmTD2j",
  "key23": "xuVfWcrm8LDRuATRiknssuCHh3YZrnmQywgUnuUTVj7hTc2h4fjMz2wCinwZcwsiU1DGVY21U4nRM8f5qhNoqGP",
  "key24": "51YHPHqz1uoSSpbrNJ2KZ4VEtNa9hewUHvA9cTc2rSvq6buKZVsDqwaZ5muwn1jNka3DERAskBzteKQGSm7sT47",
  "key25": "3DQpFYxGyEKprxDcgZqCCcTT9CmUePQ7zWaH7RFnYKZyJhKvzX8HtMHaoP6dQFZ5KiwuhFengdY36YsTYhqmEwVG",
  "key26": "V6pT7mHLt2r7LssZEcRHbs89gmKBH8dtEFFmrAw3dMvHqG2tvHKQPPNnW9hHpnMoWLuZQMnmBZgro7C9DWqW4mE",
  "key27": "5nie511sQ1xU2geMEVxjCj4Y5zubvG9KhEZnAEovf784tr6Ydtrfbnr9wqQ8UZ2rZH12deMX5hU1w3gxQmyySbCS",
  "key28": "2bsfU4PqPEFEizgDN5b2n8JD8edjKUXfo9BZc3W93feyo6QvfuLCXx8nHN9evi5tgkrKHXny11Fou6JcnatrZnQQ",
  "key29": "368j4wFe7Y53GBp5q6SSfPitdhtB7MVbHd9zzydi7tJs7tnC9HRpZKecwyD8Uk8drwjDNbweNo3TEaiMK46pu3c",
  "key30": "omgSu2f7RCfN2K12KjreQzst6abQ2FcDVpmsK9FTRcukLU9a8JzmGL2PLCuWXc1RwFadbjQ6miZSWJw2o8fsypy",
  "key31": "2KJoQ4hNoFbu25ki3Bf4BWcDAzTwy6x6dzLxjWauCJ6wPvkF4GzzGhigs6f2VGgwunyBFLBYV7XQKxGN1RXtur8Z",
  "key32": "5pmLHq5HD8JsNyRiruMMZMLHS9U369uArL9pKLT5YD8EAdCPD4PxfhvuZEpL2X4r9nhv12pPa7rCw96SPrrPTwCA",
  "key33": "NW7mmKGZxEbL9LifwGPo4K5VvbBRGidJNr9D1q8hapzxdADfmKZFTRUdvi5NDxNpMFbGK31QNQRqzXxdji7m386",
  "key34": "3pTzcNhBKRm1xvMv5gTNNnj7D9wHBmmJpUEbN8wCoTMbXStVBDAgLrozavhXwTqbDBKF3pFe3WMUSJVCtWZ1tQjv",
  "key35": "YjNqRS2Mkc1LQipWyAyKXXJYqVPE2Q7373WF4Xjgw6Kk7wiHGFQ4ecq2oofhbcp64yNtLfwBCeaQZ3VauKJqF7V",
  "key36": "GztKXBfvSmSqvVhbtTAVVeex7pNEfZN4NEtft96dnkuLHX21Wvvaut9Kc2VeGaKr8NzLifbmHSbHToiU7q1T2FF",
  "key37": "5DvBBWgG6z3pwrM6cKY9feFCvL6fkLPwW9Xemc1TMB4oVkMBipW6dwnUEsRWzDQSNnMYDVGy9TE1cnP7HxwFHGbo",
  "key38": "3mcVJ6fukSShTkDMPinqAGdMFmSBxNV4Q7yQ85gvAZtLLBaLS3XXgAwrk5nXJruroGSAQVEoBzYxPi4HtZpn3YZh",
  "key39": "3r9E6gQqNbNM1dovw1vMC6mP9fkv9vpUf6euGPhTysnbigpy1BBcmJ8YJsFFSY6h6tWFDvx8ighH4gFdEMjXwzYH",
  "key40": "3SQCUBBdVu8L4duqGGDaW2MGoC5oa6Rxor31VtCfyiFbuJt3vNRMQPhtNWbquzfQGuVmwaTW7CVnud8SGcjdsvfK",
  "key41": "4GofucenGvDhqa1en95yieqn8gg1hkPHdw9paPbxxnwp99hPjPmWpEzZB6BWLRZhdcE2tNNSP9TGb4QAppdPqrLH",
  "key42": "4SBrAYLJ9ESiXDtmizn4gd8UztU12xmm7NWbWznsKvumJpE5E4krzdwQF7tH1sNMPsYws1iLQrqv7RisAwEwyYdQ",
  "key43": "54pBDptfFBbs7giAxqWTAzHJrzAbEtCe9J536vc9y2mevacDuERPkYTxaNx464cKAbZqKwpgHkEmiA6NjuFK6Ana",
  "key44": "Tob7Wrw7dbdTBN3QQNE1L2avtEc1fNJewnMbbzo9ZRkAm8Vy3z8B9HxUZKcYp1RGyGA75uJEuPXknSyw4i4DBbU",
  "key45": "3Jndehr2zHxyxye3wtxF2C6fnUxDqbdqeJqFaWYVbwZwSbN8cEC9fPA3X7CKXMjTEyLZwjHL7o9BRkv648TiV5pU",
  "key46": "4cbPt47LGZFaCFGELKHSHsDoiDAmUihZhJwDivBzEA7xvkNmTLbNXXcBWDtAtSfd6cN3U5sbPQFm17Dr96jpbu6V"
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
