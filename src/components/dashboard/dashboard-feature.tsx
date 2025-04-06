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
    "n7JRAundCRc8kf4vRUridrTBdscCnvKiAGdckjKtR954GtvjP3Jb8CjPKDxxmV9SZHMv9wrx3r15P8gNCGT4rJR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27HwQEYa39HT4cEmU3zS2Wo3VErpTh5p3J3oPYgR9R1emsGrmCJCxAgiSaNaVqC1rLjNC7jNaDKGMNpGu2nriEP9",
  "key1": "4P3rsrxrAXRQ8jQKXKAJfGpup8vLqWeshPewA2mj9BMFHYKp488BbwJcsCsuJLLrmPFaHpQgmsrj2vGrTmU8LLtH",
  "key2": "PCZsRXNXaBA23f88q4nPtKjk9YovtVZpUCeGp15VmFPjyQkhMbyhepNG5RibtMEeUPH3pQw9rqKssRhoPmC8tLs",
  "key3": "4nfKgTSxpNeb7tbEThRWcYB4gSF9PQ74bcV1SGPGSpFyG3ff8JiPJKcAqJaRNrHkiBpdHYL9nqZ2ug5aNFu2gL8S",
  "key4": "5pa4qGM9gjN4Z9PhR2XatUo4PX6KHN9fjgWFBUyiVE7nubxFUpz7yQGb93jthJNBqXWkt5TTV4odepTRADiYPv6E",
  "key5": "4dxrdq2C6dWY3GYjWaTkgr7ByVZSKynArC2wMsHDcVfdo3tXZqKXFnPgBM2WozbHwKeQMn2tjSjpE9MZsz7BnqnZ",
  "key6": "4KPPKNyGgZvFLuwNhJqMHQonkX3hTdz8N3EnZyRte2YYB6r8Fa5xCdcpUj3W4rL3RQKESXPyBPSbnNUgbuXNafxg",
  "key7": "Y4Ke3qB3ZNWUQEoLDY1zqig5jmausB7ipNELyKGj8J9GNA8Kbb5tBent4couzAzPBVsNwNW5f1m88i7hNYA4Cno",
  "key8": "4cCCEaNQFK4vRzUsAZppLyxP6TTJJH5hxeM5YsJ1CQ6ZPtr3BCJVqUJWPib2Lgk3zALcoPy87XKo2ZyJAdpqL1qo",
  "key9": "5Ck9ebmfN3TQXqJYuS8XGzSitk4MWMRd9wbt5E18Erfpj3HZcFSS41PiARzQbngEv8rYRU2gFKDE7c7t47qz1Vu4",
  "key10": "5onLq6huMhMi9GAFT4oEdnuHJTh9vuasRPyovzeUXhvYyapBRDbq3xEMgkjU54CxszEh7QcqLDVceWYhHdJJP6Ch",
  "key11": "rXGgecLdpNbYusw1MPw2PwV6KpjkxitZH26g5h6RqA8PqcngWSLkyTsHJLh9Mdy2dxhY6mCsNpd1pnKVLqP7etn",
  "key12": "4eXBcybLxwjS7mDfpezjbcZM7sBQs2EfpFKaYxnDauLdahpFqMXdkq2Um8xTJHbJoKL7GcnT2k9D3DEG9J8SAM3n",
  "key13": "1ZrZQhQLQTgeqPmCWJiKKctiDH53EoDKeNxcgxZSaJrJwSCi2GwZhnsidhRE5jHXBfdFpLbAqCWqj5mrtnwDeiQ",
  "key14": "52BWTpSLVWcTetSwzeYqDNBVHLAuUVoXGj8aFK5QSQm6HRshQoEdkQMNqTtfpx9qUe5jCvnzNdmXgiM1y3n8SLgN",
  "key15": "3rMNMLYDBGJUmfb3MRPbpSPoJVSv6yJzo7m6JrZwUoAj4xU6bdk34PZ7bf5Nrr4WjbXB7zvVEUdJsnFixW3mPFxm",
  "key16": "59eeEZGoLJ6pdr39Twc1TmxzPbhy6GqNcJbh6ujAefoYHci5qGVnSciib8t3GMN4HMWTUoSBXztLhuuiDrkSMRGY",
  "key17": "J7DyGfXZ2ozpF4fmd3An8a5Ktaatrs6rjvQtyLvwTTCFDk2c6Xb9uVQT6ay41iKHP3WhFAUSavSXn4sNnKQDCp8",
  "key18": "3uSZ6RyXiuC5YcDBEEtgHJom13QmsSDqfJxgYznmoQYjGwbCTVRk55if3ufaBD1esXKpFwKTqDp4aqtVLB6sNBZU",
  "key19": "26qTFV5Caz6jvuH74y7bqmM1V293Ud1xp5sCdUm7ekWXAS6m9zvTNBc1EDVQkkkxyqCjADj5rJEdphZyGvHZUBow",
  "key20": "4gYkW5T6NbzqonghECCuW1xAiBdLdXQe2RVm63rFfWCoAWHTkV8KV6M448oLW2YevdGgci5oxq2DZSYUNw1BypXL",
  "key21": "2nSpcXLGu47yTWh19NF3nRToy5t4GjQt3fJ9V6XV3R436CgwCpvF4EsMzDY9qKiZs4uSgxV7i6oAUXoYPfUGwRoh",
  "key22": "22XGWGEYYwhg7QFtPcXk2GE8WSHiSD4rBV19CiL9bpiQuaWsNY9gqRsNs4nHpDT1Sn5dCNPBg9RTWp7g3RPnY8uS",
  "key23": "4yAStjg6AmtmV8kHKMTkbpNWg2jt51b2D8Nu2KCVUSk59fEWoH2u5MF1haCGFtPWcLEoJD3bfchynvteBt6MEYjp",
  "key24": "31N6wr8jjMP54H1GoC253qYDEPPTTY1Z8henEoAhtQxpfisLFjUy3khPogCGFt4ZwgBVmyvbmHjPfXudRkdhXhQ2",
  "key25": "5JC9cNmcmDCNm8ED9U1TGH1e3677DZkysJMzBcj4sAdFzPKqXTpG9BYk2NnBNGLqgKmzeguadEeKdt1Vv2KB8VSU",
  "key26": "2rfVNvuB5X4vQhzsHpM7derkMe2y3QCkkmu4wXcrSq5jJ2BBkSNRVv5scendHREEKxCsR3jNStGgRSgvzVzJfRbi",
  "key27": "4rD1VrDTxTPmsttdGUtbJKQmMf2UmScEnpiFJj59K9akfyZLojKnXV6PiqNBMcAuu8EvH2V4RKvE64tn4YFQTsHZ",
  "key28": "4X85g7sPh6QtBJs5gUBudTZfiq5LQm8CphBSSfNuovGp6fBmdFzWFThs6GjwgHxs5tBuLWxWoLgPBYmajGPebhnV",
  "key29": "4QZxfbWM4jM3ag3E5aoQdEqpdR8MmkQ7Ki4fgSe7xo1hg5ZYjbtzkbvUhZyg9EcqLriDTX3vFqMBY3MCwxSSsodb",
  "key30": "3qNd4K6jN97UFm5Lttmwod8kdpVwzcXj3MtS2dVcwTpn1H3351rCuCqrv8qHyHbV8XjzcNJDTJVLAADF9wBomZN2",
  "key31": "Jm5kghAqLcMLC8E4pGvgFahB7aD4KeVcCkq72Vded4yVkb3ouYyNQ5tjyd6oHMfVARFfKPkwWV71Qot8qCYzxX9",
  "key32": "dFNRgiPJaqyW1SfrTuuBkF4WwSLme6EzNPuPLd86PRLbp3keHtfwCKFfDnSgHTcmnmRhSSYXsZYHQ4urYAJzy1u",
  "key33": "4QGJLdkRcJowVyDvvobBYq7wXgfQJJ882yq5QTf613Hew486g8oyDFgpRDK4wae2sMAY7kggy4uuPE9sT4d4ZrAZ",
  "key34": "5qkiFHTpnafKevDcrff68nVH1Vjpb97wvKEMwuFkka1GHjfqyoUYVhN8aFtw6VNB1i7qMbXnHutDfQEK5C44hUZV",
  "key35": "26pwaxorTXJkcatgDMF9u9JUUPsuMA1rqX4Pvj53G2U93LLEdjqRnXHEnRaKHajTfMVXLAEfmyJrRrG2oQvm2X6X",
  "key36": "aQsUjdAi8HCYg99sCNSgoSE4tzLY39WbnPmjhcxvW3uyqSaAS3uMqbWaVKMXqiBPuVSDe3Qv2bKnkQcdmw9KMzX",
  "key37": "5jtLKfGE5rayQmw47FNSwKrPwjDtxTP5hCk1jGWarZbtAYdx1UKB4Xih9PoNgzAyypmCLQtKZJkFGYirbMq4QnJN",
  "key38": "5ekzLrmsC6Vk1Vdv2oGeK9Mia1Wc1wfgzvhuDZe7MPC4XLgfU8hYiUU7Q45A5JTK7YbF3BqWM24BAsQKp6XZAtU3"
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
