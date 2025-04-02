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
    "5FBN7iSruqUQgXJGn5vNpuRxu8rQBexR7q95H2gFVxsC3u5DwnazSeL2zbgm133WW7fxjrVXZMBKa7pq9UdmmF2m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58RBcdgVKuDPAyS2N87St7phj7RWuX8vRAvk4UfEoN6Usz2hQNweBTcqLn7Kb5DmBiTrGX1vxD2xoTD7FR2RKdxq",
  "key1": "4G7Sg7nw8YJZWCwAY9XiMwR4yYeDfPYRiMwawukXxRLtrxys6ifWt4RjSBqarjejew22q2Fxe3VQ3BRtVDbRcsiv",
  "key2": "2RZ6m7ymH2wWzKu2akZtfPYK9H79NovamBW6wbZLopfA3LoJWFwLdoPfoLmZZebhZCUDgUUbM5G3GjCZxv7HqNbv",
  "key3": "gbnd1WRV272UgQYnYvNvyktnctPWpLYG7Xkdn7vVwzADttf6riaRieqXz5nRChzD5FG121ZGUgUkkhiEAuXU8zN",
  "key4": "E5B2PdQMYw5UcaPvoXnCA3Up36XZs3xbgAh2MSGvc5GweXwD9Lf5vqC6TpPZvP8d66SP2KVKaTa4BcXt3msmEmM",
  "key5": "6THZdD3LLT3rp5Mjk5r4HFiU2tuJEBUc8oFDuShMrpEDLK1a3QLqmoUdMwuT84KGFyj8pC623vGfskf4LoF1Eet",
  "key6": "DYykVUtnHSsSqHNnVewBGH9c5v3Wahvq8WW1k8E4oYko3BDhG1pW5twsfVKz3aAzeyAa3E8FqS5TZaZZCMsWqmJ",
  "key7": "5etUcQsPH8ajg6KygHdhGCoCsVmYx3wXsu7m2tNaNTwUiSUXoQizGsxFdDegoeccsBNdCwSsHyb4zLjFoDX6njyg",
  "key8": "62wH8sbHJm54HuwqZhgfCriMNqz5JTP48rSGPSqawN4K9b3MW2vdyJTrN5cCoRun7oTv76mqGzxX2Q5K8XzFstSJ",
  "key9": "2xqdVtHYRMxSja3ecjMH5221aXB124zRH1MBjdGA7LRTeAWvuPfie9wN1zKrDm64WSjoFFL8LRuJZBS5aC1N3UgA",
  "key10": "647XC1JcJh3ks9DhwBgtgXTFG44x9uvQfLZSAnBVfcHrTHVegUVkABczL2i9SKm2UfA3XitByhYZaVJYAshpq7nW",
  "key11": "wUEtoVWhwG4tvKAULjAZJ14v2vmxXMkVDqVdfUSsANrPpLhUauWspEhJvp9RuZm7grDin51woLK5Q7zdN4MdiSD",
  "key12": "3bPQkcXgXRdXRBFfJbVjMgY26voqpwLegoAe16mc2L8pb9PuGqYNTtWwooRN3eK8xP2u4iTd2ZweNdos9xrbVn8d",
  "key13": "5C5QxXyuzLv3krAK2kngoPF4WjXPCDYC5UNU2y4onW3VFgmW4RxCqA91WEpB7DMu1yBjYqEnKhF5vDZUj2FgQwWx",
  "key14": "qYqboVid9LCcBgRZG5i7JbPrH4kTHPmDUukHKWe2tb775HGwUjWb9vZJkrRtBamYxJxnwdFhBsjdhBgcrfWbfTi",
  "key15": "Pyhw6WPnV6qgBJ6mn5Ryp7SmU5tEZkKnAJHewPrZNJDENioqWopaiYSiD6jvfHAJjfxAWmtxm5mxJub9Gc4r3t3",
  "key16": "2cq2J2VQBtbPPM1VBCpxjkr2kUYTMNCfi8Bn9LiGTU61TaGBXvGWpTo7L6THhTrw2M6NWcKCkaLoq8b2Dg1xDuEq",
  "key17": "4dP5MVdyzf3VXA2RQuHxYMR3a9URaicG8e6495LZZ87WSWmgaekJNySwTJqKywWpDcvZY8bedJMPURNKkJbEXyFD",
  "key18": "223iBJoia2oLFKVfYVbAM9HDVx17n1DLb8hQoF3M1Hjc5R5aJUmrhxhVrTmStqeG3CbpnYupatYD7BgCZY78hZay",
  "key19": "53Vf8EVtMC8RqKUPGmGDEZukhHCjyHMh4UufsAN8bQAUTe6vc4zYQMjBnAdx9KK5hh5Y42ZHbUuyE2zvhTaMNjXm",
  "key20": "2gNxtTSFxW4gWdR71H1S3qf8Wq2XUdZ49kUUqiyo4yznbqJAVoVau2oDBvrzNJNcRGTKEVKiq6b1QmWMr7YYic9r",
  "key21": "5pf3gQVB7yBfWH3pJ67vgJsF1KiCyLvixBAL5Y7VLULACmpqprRXWRmrUmFXNHreNnvFb73R81DuEBfZkizasQdv",
  "key22": "4VDEFSRGMjnm4oB2fe7D6XF8n1wfUZ5HmVNmew9P3bePZh9a1vqJv5ggqBNVD8DJ7KZN2rGxdhaUJ89skQqbQaN9",
  "key23": "5pUFTRKqkPTnXDMteRT9GJtqSwb2nfkoAtf27MsZXwdB7xAocoCTgfLnnbpUkTyXGUm2e18fFMafxs25WHuPHtKV",
  "key24": "UkthKJt18gsUpKMw8uskbCEUhyNaZqpzbQfYkK89DH6CUxZaRPnhsuhYP4XPn5fiB3NUhvEHdUU7y7SarUdByhS",
  "key25": "h8mBPjt5Zh5USeyuesZYnRhDKGzJjZm28KP5vT7ehrcZGA8buEp3vwymRuDBTMM4dpXmAPeUwJiVaq8wQ6MsSfY",
  "key26": "2BzifQW2V7Cp3uEc9LH9rF9H3hweorg7gFSfi2nPjZoNFgCisYeY57VrTApnfTUyEYbmj8cpvtPUhCYvGU2k3ZeT",
  "key27": "2RTyXLC3BUpLeMEdhxaBpd3pWUB7XixtsjR76dRrXrgCgMT5WUWXD92J7VxtBPKn8wPWF8knXhNMDgjagPuNREqG",
  "key28": "3egxax74kFoVcMAgty9CmDCd5NBLMkYYtJcgwpWS5y1KkFRHuS4wUYXVwRZ2rfdxRzzwu3uRwhhzwGRtBj49f27",
  "key29": "42Kn3DiAzX6c9nDNBEoxNpqKyxeByKnkMhiCpCDJYsUAfFq39Wfobprv4Ye9sT1ZX5UGMLs5J5K3hdYLJMjata2h",
  "key30": "4JakvV439EyHMgKqFmx5rsS3v2oETGWszkBUfD7MFPEgybqdnkdp7GDgBE9kuLfrHBv8HTjZ6DXf4JrmJEMxUkAX",
  "key31": "4MBd1rJpgdc5ekgfQAqahHZbSRtmqfL3tL8MuAa7dr3vMgTun7WH8mQqPKLgDFQVtabeH7mCwPCVjiFVp6Rd5gU6",
  "key32": "3wkbkDbbPc1C8zg6kuuYfqBLrGtGCr5tNwV5SZDvxoki9tHeLKk5M4yKGti9pMzokbSr1wv3FU6SJGCnbQcgoVaJ",
  "key33": "4roxUwDDYq5yAZS9KMYnAaxmjtRDpRM4Lk6pJtLtmfzvcpajNkWseRPct6yH6jBphK6kE7mdhSo1Xov4J3uDZXh2",
  "key34": "dALxgqf3J94ePMv7GF91LtHENMbM6x4sCEpkejvZbQDqmpTmhUD7ocinodgjEjVcnLxbQ2rDpWwGnmVSAM6tsP6",
  "key35": "4DyMgJGovNDHRzanimF8EqchctGXUWJst8wQ91BMqXwBsDpvr2553Tm7ec23v7dk3pW1GuiysaSCcfPV1ZbudE9R",
  "key36": "5coJ1bA4sQb4un2RYvzj6fXvzsAT75z38cBHJ3BXLt3kJzvT8sTjQFrZ6N5ubYkzBodLmjFrsG3mfTzAFje9JyY2",
  "key37": "KQqfYhB2FG5nnx4EWsdPS8nGFxYKDs5uvjcBzYHcjjzgx4qBJ17dBq19PX7R8e1FWYZx32eArrtmqBbR8NyekGa",
  "key38": "2cuNkHKxPuELLsYLCn5dxMW3bax8fUQ2siVVT6YSUeTTwgUfsXRTjxLcTtBbpPeHPwPYUPFC8WTKu2bmnJHpopbf",
  "key39": "4msnuLvE5YBuZq5eYezERnK2BCjWzn8YvJtUji9gNDwfhqnYR79iZ6Xr6dCjirT7a62vwmyoyG8wWasuzgNvxSh5",
  "key40": "4tv4ygDB75VWWgsJ4cvLZqyU4YyiJBJmxx5KjyNJaSwyWyJM6b2CnzExzfYyW2dZ2mZudTRkyQ1RhAHMSaNEhMW6",
  "key41": "tuSeTsMnsnds3Q2mGj1X7aSAdciWFFzKFwUM77ipMNFks45JX7asjVz1582N9wNNN7dFQUu8o7NVGagWDF9VuwV"
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
