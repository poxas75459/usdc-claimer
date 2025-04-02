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
    "hvqbqd5PnknRJrRqKnJacr8k4szfAbCy2ZTp9PG9GKMvxgHKFdR5mDX671CdRAFaofKpBMTbsSzvzphL42VuJRh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HHK1iwaMGRfMn5ms2a1bD2QgxABiW8nK16nrveEQQy9YU6F2FbW7PmC1JcGV5XVDZzxJDniAsXiiK8novw1uHLa",
  "key1": "27r3z4mFFMrJcJQg9brKonLgLqa6CanQTLWiSJwwKnvYNzNL361q2ZhVpLYhbFdE5LALWe7LW5xFz4UgYZUjJRd4",
  "key2": "44fsDZHqkkLAxaJHRu4RJZoU4UqWX18x71NpMGfDj2t9UcZNyitj5FF8VhPm5XMhT6w69aH7JbyMGsJUnMiMK8b8",
  "key3": "2gjiN6sD2V9SHwF2aDCAGjJ7x4uTza2CCSGkc35phVEqBLxP3Rp19rU6hfdwi2GJPppkSPpxPnCV5C2YBUiEHuHo",
  "key4": "5WoUi3wL8GRM45uMZEHgLrc5qGRxgoeZRxVYEL2BiT63xQtixiudBE9TMCczfoFGMnUcHTA19Q78Gjy7KFhQuFo8",
  "key5": "behEdZa7Hs7kYGzS16SDYsvj24G1FQEcKLHpzvyJyK9pqz2jcVrAQzsAy6d5JqrxHsuFFw3mSAK3vZNHE2jyRrH",
  "key6": "2Ac1xpFnL6pGvMfeiVsNojWaZBzBggwwP1fLYKVPzifgaEhQXNVEiceWCxTQLVoXbp7j8TCYAyiiy6A42EFjMQX3",
  "key7": "49qNGpCa18G2ANGfoGU9ZJVqTcdkAVDwLErFR8Dk29xuD9VsFQMbkwCRMpLxApuTR8SPFCqHLmaY8rJDs8F5GiZ6",
  "key8": "a7AcVTif1vA21Cb1x7MHwDBRkjhzAnr3b6R3rgbDdykP9MTSmXFJW3YSS5wvcDdyUQgY3qF3T4g1DewTuvfk9ho",
  "key9": "4VGrAojoWKcDaEUDxPKx53iPZFKCAACY2d3GmjrHBeWGWDfKbBjdNAQLjeY42pBraQpCoDuW5t9CgAbVbwyCnmwa",
  "key10": "5Fn1NenF2Vjaa5rrhQxH8JF9JsLUNx1tzo3vCu1rhCGQjyZpYstN18MibtviVjk6voRx9o5xpjrSYzjDmtrm5FWx",
  "key11": "24tZ7EGxoCK8pf15ii8xeSv894jLNKpcTyoDRq8unmP444sUqcwKNKkRoqFqYVWvUEXb284dTDFckFcyV1JvhugF",
  "key12": "D6bUDvrtd5dwRV5XXSfzV3jMhrfDFKWxJNkr6TMCXr6aVCNWeqwkTJak1CbVfSAyJdioCi8vSHAN1wRDCP2Pru4",
  "key13": "4ger5RnjiuZfCoEaohWMn8LnAPug96r27KCHvmhb6Ww2u93LPjTzFWFi6kwTYHsfFxfQmXhayeBScW9XdZkqYLRN",
  "key14": "35UNj1QphCzfSNRwJTL41hWNn5toBMDJH3f7objENWfvipnVuxHF2nk3v4ajXtYMmd4VMHkVsjXwWKc5wPRs79aQ",
  "key15": "tGu58QkvP8x7BDMoXybF3tPetdHgKCCETN3uUd94k6paL7r1ezcRP1RX7cGH4zVPcqVn4RFrWPiL3NXNJCuUmMT",
  "key16": "3qZnb398v4cf1rgUL73dbNfrEAiVYYmXXEPzT7e73SUfQZQ2d5t1ytu8xWm2j3LLd9T1qNCtuMnDxsVfccuF9QG1",
  "key17": "2WGc4gqdjH1SyHUsy1rDTqB1hhhM91GjL1UwAX8XGxeGVc9vx9g8DaEUPzbn5skTEaLXEhA83kuKAGNwpT6Hefp4",
  "key18": "4v5jBKvmNrWFSBHfkVbb4ij18fXyjBiWGXARmPdQKzCsuWKQKvyn4Ng51qKLBjs6S9UmMoF9gmVKgv7cWUKJ1nat",
  "key19": "4qzwSaQQihp4T3YJ441t5uEY6ExxcJryh47oRSm513iFMfSb93NM5PMNGgR69GukqgrELGDt6pxN4E1rBeN4vNMK",
  "key20": "4mF9vX3ea11GqzaxEgi1hRHYddunK2XEE3cUDnvmC5caG8tpvwuE2vPvGYtPBa7GVALJ8Xk99rPAtij7XXcRGkuP",
  "key21": "53vZgV3D4A8tNjq1YY73avVfCyx67Q9FqnT9YijSogruaPBjWitRzhRz7SQ7fR6pzajQjrZkyjjGnDVjNHupiZsY",
  "key22": "ALQb4ZVrwam1h3yu7FHLVJJTXEu1HDsbsuj8cuW97QsWFP82E9hB1n4S8yoSsFJ1agkz6X86tC3D77XBq6iQQaK",
  "key23": "2SEFFnxVvznnFYsY26PUbViuitSLRBUH4cUAch9ssk3cHEbHUb33qu2DxJVQsau2dWfe67FGpA6tFFsyneKMCMRW",
  "key24": "3Q77Axn5LLABQ3EJF44EyjMT9W2z5AkNhmMc4PGEtRmMmAq6ZkZ58RhWMDsEsiwugPGdFPUSR3sK4tH6zooaRzT1",
  "key25": "65EeADWHFpGU8LMn1WAgTw4K9uGGHawzXgd8jHDj27rq4cbuxxAiRNvbmQoGQTsT5MkmWWiGpPgwGc4k4pHFedH4",
  "key26": "PwbFS7znmuZJh9rcEsa1P4UP3r4AyVXkHv1zYxUqjTyULUPf468wKURAtT1NGLm4JHvRANwJyLL6KaUkm2JqkYw",
  "key27": "5A3FeJRLErefcx819sT72wZpxnhFsFT2runUGPYtCGP7EFMVonuGysru9nBzBsJVVVgAxHSxrRyFL57wLGwX1Nok",
  "key28": "5RAW3c5MAbBnytPcsgRPSjy467RftWATFWLKfznEm1h97bSFwCr99X4jbVm53czgNWhPzookik6FwfcyX7ZqoKJt",
  "key29": "3Dg7NYHSadydog6tazeDezwXeUVCdbH2GsgqDBwke7bpMEzcmVy8FY9CAz9TP8o7gYX3Ddfzb5o8JZq17H18J6h1",
  "key30": "3KzXvaqfxLA6Yt7zu9j8X3RvYEo5mLSqXK7yyhYERxddgsfACK8waqWfRPrYXAtcjEekRQBDhwojnV7QvtBiQHci",
  "key31": "3TDtJkK8xncNAGvbhcjWpLyvgF6Pd9XJtDsixteLfkos6dUSwfNgJ5X7j2LY4w85xJdyFmzMnrFJLRqTXxadyRBW",
  "key32": "2f9dLcWi3QUAJVk5ZoC2keKWDkhE1rWNS2eLEFLYrgLvKaVVGkF8mFwCowAFBFTnGaKQmt99D6Bceh2vGhuJYjXT",
  "key33": "v6RHkMhJzP4dVkLPXaivFfom3KE7XX9eLk61gmF5Bix2UXBpNiDS6iDGL3YW4Cz3o2gc5XHHUEgpyUAPAhXDNj4",
  "key34": "26kvDh9qPRgyZeu4qCE83ATqE9HKi39giKsmypbqhYU7PBRR7QGaiazRDHEMdYswowDW1ba2ysD49bgdoXtUH1XY",
  "key35": "56Qh4aisYs8kjhJqqkkZ9W7jJNutgpUrNTweQx6mhV21ooWcq8QWaPRb8S5YQKaWvjuXyFPnaT4dnupETbsqTx9Q",
  "key36": "XaRJgKJrcobPoAu6MZcyt3kjmjGwCZ7idcPc3wfCH5M86GcqWz2XfMj7sRtN2kvvCCjz8SruRXUQ8cSG36vDWXg",
  "key37": "5dt6w4SAHBFJt3jE71dAxt96ruU5VBYkQUvUbbrwfEYRhYQhicnTtP8ws7t7YyxbRASVXAmr2eJdWLWFJqX4hzq7",
  "key38": "5NbmnroKYuKpv1yCZd9TgB2t3fRxVQfgX8og3Dvskj2gJZnggYYzy7eQv4TMuTRxMtRxjk4QgVWqhTU6BBTSuFrC"
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
