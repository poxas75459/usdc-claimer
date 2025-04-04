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
    "2gaMDMwwiiKzxTmvQUhKkBynN3jxAj79ecSKew7Wnmi2ywbHkxA7yZm1fXxM3nyi12abrG9R6yXjUWwUTYq6S5Aq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mWZ2UaDMwDvSVfTaSTs8LYqM61TYzn7jE7GM82Xg3jQxYEv6U2zGCuKYzTbFKnF9jC6DihcZCpdzhHmgMjBxJdk",
  "key1": "2e2iMnVC2H7HCHvsVfppKcR6rw6x9okp8dyaNKbNvEiEM9Ab3fra3k5bQcNHALwbgpAFidXG11Jbjv5fj2RLUWhK",
  "key2": "2BchpZoNzBfx38wvSDZUAamBijacfF6DshgnvxQporu5csBbUL7eBi9VDYiCajRS81eSAhNGmLEg8vf4rCdJae7T",
  "key3": "5EQVZHRAoPzRM257Auqv9Pgd33Hh59LR41H8h1MbfozdJk44ihsFdQ5FfvbnVkn2Zdy1DUTzYM1b87wr8CH34ui6",
  "key4": "dHtvya55vDmumavJ2goM9BQNpw9ePBJSzatzvGQeEtvLt2qWdUGsupEjwyfmV2XYziaa85rCBXMT5C8xGHBcFKi",
  "key5": "4A2GQMNzKdWrU9KkEiLAqRy393F8eoTn97G8X3utHvRaYrTtPcncoUwbGnv9L97Rvvt4sHPioWganeZh3qSGyN2t",
  "key6": "4rnttKdpidoL1XaovteqoDRN912ofVofUfHtVREUxn8gTtzsSBsr2Rv5xoyhKDaRy6dxobaPJE4amQVsqb3MAoX5",
  "key7": "2iNw8LXARNMv3Zab5JveCh9ybYTqzbPrBSzByVxDB3CDLXYWrs6RbaPkRuseEDq4UY42iT97Wqhf5TDqahM98aT1",
  "key8": "4rFrV7kwWNJsAbtaJnAKPZdS8A9vuCmEP9LSy3UWUnU1ko6KLnteJ4GcwTnRpTadvjSQmoYW5xz3n6T5ExnsDZnb",
  "key9": "3BHi6m3wTN9uwPnU4VKcUdC6pEsgGqwiuGmrfbgWQYjfehUy8QbvkVARWbqvRqmuNj3usyXwq51th8rCfAcvnFQQ",
  "key10": "2GwZpeJ6JgDCvZmMW5ir2oYY1LyxQmrhuXinXpQ5eS7AmnRXnEQzD6Jsm1SHJhsgZnycX9HLKzHHasdab2KgqqvU",
  "key11": "3hbNBSeUbeiyJQjoz2Z3WCynNvo988XJMYsujqyLZAjW5dcieRkwmnES9NXGzeAUnuTJkHVmBR4ubfE8va6y1BQT",
  "key12": "3XP2Xnup6MjPTRwvaYnGCaqN1uX3bThdJn1HNEgR7yx98Wws9PBVLtBU8kVqx4MxDZ5LSDDEXC6Wq4RjxienJoaD",
  "key13": "H2ypgwLZNuDpxcHtkMzrrfMDbWcFmTa2Ds7jSigZ2entM8F3Cyjrb7h7fXWhQp6ZD3eeuwB2RVKXexKPTuXfPUb",
  "key14": "3YJCJz3D89czMiWQhEgdNNH7x9r5DsTkoERmHBG7abmxSHqzAsfiJxJ6eGDgfjp8tvXWaPTVYtKTKd9MBQmvzeGN",
  "key15": "4cMi8eBmZ8Zeoa59CbcdtBkyfDg2NCbX9SGjqtXmyyvF7Jp9ro6qLSn2PH77tvcZBq7DuwHsDXDWDXnfngsKmA8g",
  "key16": "2hrzDS5LvPXnPmHj2TAY4qa3Vuk6EDUJ9psgYQWCqDaaptMrCV5ZqXqzmM4WeEKiL2Pc51jtE5RDBbvrCxbNUNXT",
  "key17": "3nPJFvs26SCVFYJu24ZX8bk5CWycGbyEExSaACSYsFuB6UC88LVfdDP3XuVvGLaNDZHWntEUR5qjLDHG4vg1ttdb",
  "key18": "2LBN19TG5L1jgUFxYdujmo7GMynnnPrhAvSok9WkYkahQ19pz63CJY1EaEHKZZ37iWRmpWejH2uPWz6yZCEMqULf",
  "key19": "4WLkZJb6qfUKUmkJaKkQp8wyZF1T71wz9GKMcPibVGNWiazC5eGMr62BGu3sitAk37Aan2zyEYboL6Q6yMBGCZYD",
  "key20": "3e11gQoT5DAWsYy3u7tR6Pjb9UBTdkcBBP7tyQGsSJUEFAjy7L6QZh3TERgZAAoEkZBPMDss6jJimkPcf88jUeo2",
  "key21": "3hW1GKSzoQsKuKsEaTxmMcBBQaWtjod9CAkJNVZFNuDjJDsw2Mu2YZN6PHEaXFbRGS6GgJvfWWnkJfsJ8SVuVBiR",
  "key22": "3qZ92fknr5pU2ETM9XwTd5x4cvSLYu5r2ZhxC7yX4yT8qJQ4DfYNsicLdnuVahWRERF4o7x9gkaiiM9vjXq632Ju",
  "key23": "4wPEQHmas5HtVbpxy5RTeJi4wFVtEQEeiFkvdVa2VPYzDh2hHnorFLURHM6bGyvryNR2UazXbtqHb3scKakDcZCU",
  "key24": "2XQ6YQSxSoEbk5SZM9rU2azL84ZRQDSm3oeaq3kUtQbcxuVa3j5GjpduxZ64yZYyNVcYWzxHwrifHHsEba7zgX9g",
  "key25": "4C53Uc2yxoGKdM7ZrShTVKHtGXuVXtG8thuJ7aTm1BkNvYnb4QCHQJRyuiNw4HaDsotH5QZYz4htM27YtrbHrjwr",
  "key26": "3NtbgPh8YaziuH3LVepZQVL41WnpCmDe2QiF81fWNANDHeusMCoRZqbk7r6a87Ca7N2PrQ8UBu2ccMi49pWGgMRL",
  "key27": "5cPY8yUmqFP6LhyC4XwZopnNS1GhtB3Tb7s4pkHHHNRtx3APbSFxEteZqCkvAuorwXYQpL1U8dEMHYtSSgNMJt5v",
  "key28": "27EmiC6aG39snUGoFqtnvbjKrVdFJBoGNk8thTTbijovtpZp6Ems45quQP8x7NQMYjiQNbNoA9s59sLsM6GUxvTF",
  "key29": "4HkEb9iEFRQizi9uMDqSLECytVY6fpEqEfo8P8unmk9H6C6BZ4qQYDxkHmTr6D2fdjigktSzJ4795K75SBpf3Sxs",
  "key30": "4e425KtJ9pJXj7nWs235KBLkP5mPrcCnVwCvqSZwPFwM29qZv5pMXH9BTM4FVBTf2wqxsVyomg3UofmwCHFykwE3",
  "key31": "3RtyLVrJquRyKJewkzN6VZUbmLETnafEJbzsHhLbPMcpbG4sxETUSqpsm3TKjyvpZEQ6t4XSSpDBXP5cSe2H8CYK",
  "key32": "3P4AsTrbNTztmWgWaVUBGN711e7d2vJUc7bafurtsYDs65PCrLvGhuEH8HzJe1L9gfYaPMR6xoHqKhpCtbEHzGLA",
  "key33": "ZUhDdRbMz3feTBdsTZ7XbZbUzRJTz4a3SRbUayLd18yEKYeFCQAwD3zpaEn752LwTwKfWMxkdQkAskrh15LG2MN",
  "key34": "25R2rcq9uUNH2SYyTCT4Ciu1AoDawxbyHfu8G2bn64Chc1MWDpZYquFQcrzfr4J3Fpr96fgBty512NmDMYdwV64D",
  "key35": "2aWqxQycgJfdyqayzadeb3r8xN6M7yXvBK8Y2sjX9ybRLDWmsjBaPup7mtaGS9drF8q9svkipBajN2dSxJ3tsezJ"
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
