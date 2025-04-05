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
    "3vQxypTjcsxtSaVcmhbKtJ4oPaX7thwgxX3iZ1oaAnH2bAoTb5GcxFeXxt8UNPwofSTPxLjLmtZyjYe5hcuG5Tvt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28u4bGhADr9BBWskvoCB8uxJi3hnoMpkwPLjM8G5GQCxt7i8WEBqH7H6MyPMG69oxnBZyChpnH3QB7tNFX76nNwQ",
  "key1": "XgVpBp6PHadqqAa6ep7Lf62UwBR4qrzhXTkNWF99RXz2S9hrwvuRbCaSEx4JeJJtsocNgjqXMv3Ht8FwQxFVHW9",
  "key2": "yz4WZPH42DjSfxHa6pfMzGfizLEKqAyLMQJMNbbNkApdS8zUzGcn3M3X1njaXZ1Um1eH3tt8mjTADB9nQEsm25a",
  "key3": "3mndDxZWjiboSiQro2o3yehVt2hD9HWLqV3y27dfwWRNFtr19zSvLEE4HZiGmcEjAayjWt49bTT2Vfv6oSJcceNX",
  "key4": "3S3NgV43E1Pn2RiDvxvEtzbQdAPjXSdstjn5G2CQrt1ZR5LcxBzH74TPjgfzqCNqmECdq2UhHCrAziUYPwj4b5n1",
  "key5": "3kdigpmZCV8uKk9LJUFyknwGroeZTRWgYqwVs7Fp7X285rpoiXv6uDKMgYgzvTEdnhQUC2ZHDi3GDbAHbGpuQuER",
  "key6": "4dvMBe2FvYY8G76SLQ2u4yDPvTuW3QVQB3mJRYvguL6rS1FuzknqALnYWGHr5j669mfPehNLksusJavjvaKeNYd4",
  "key7": "5KPp6dGCj5EUdLWBp4b4x2BNCniqwQeBziT1mQCYpxPVPQg1jBuW6AHEAEsSYym3URMj1wBaw7FjE3Jvq6PQQNnh",
  "key8": "2gebAajia6yvQMSKvMmyn6qUXzoXRshS6w7H5n7K4RHYzQJ9d4qkNbQJGooFd61TVyEgJQnEFNBnowY8edPHtvXh",
  "key9": "5DxucFhdPiq8CdQ1j9FekzH9zdz6vPWmemNanj29h8FLvBmWfpvV6tJtqywW3djtHhAn5aWU34Gtk4MKk8x3bgU6",
  "key10": "P9u5sr53oCigaUSg77HijLT3G7eDpauHXkAcYmBHVGFEXW14jB3yEYpv529gxjkqpbppCYLfPYqF75SruL1WRct",
  "key11": "3SBXhEDAtUQBF3AK2vmybU3oeN2bwV2ggZq2T8Rpedajd1GGN3K4gcpyuHik5iSt3AuxUB6W2w6K7tDjNUBxN1D4",
  "key12": "xSaDNKsMNbuUVE1veSU4HmZU2AGaYE5NyXUjNWCcDQUGUHkD5dhD54DaZPK5WCdH6hAZEdDk5qSHMKACFhT1pZh",
  "key13": "28SyfyrttxNaG9Qh1j68kUt3iwjdcxpX53BgVnJLFGW869iycKgZfcHDLWtLLpEgUf8kCDj5ozga2DtCnn8z3SRx",
  "key14": "4qRarFFhkExMmLEBsgBtmPxKAxd9Z1gvSG9Y633yncEDHhsqgYzcny7NgbWCp1VqhYiLcpu2U9TKSnbvfxXCnUD2",
  "key15": "ViSYTykC7JUJVkRZ24VbpYfBS3ucXf2WB3S8WAi9SsxJzN76WHqYCi44miCn5zw9wAq4CzD2cGpMSEMK6STfzA5",
  "key16": "soEeHBENQP8B9emy4FeRMTxiu5hxRxw3KL4V1HfcVQ3iuT23bDrufXiWn5Dsp7dZpMBJQSGLEQ6AELXNFMzBWRZ",
  "key17": "29TQJp3FNdJzqqQSZvNd2cQmDPJYEEiriA4Hr67e5NDTCshVwsS4qfvGmvPjUpqa9auHqfDY7sgX5br9vPpgW8cV",
  "key18": "3BayMzY9K4dKe2XuGri1GFNVUCQDBYHCQfDKUaABW17fF4vizQdUJmxasTZSq9fVDmSpJ68yPGYRsPb6AYGrdkJH",
  "key19": "5yHPBRFykPaCF4Gi9USkHhe3EdHgRa5i8vwrWz91VFRciR27a1tcj2xwz2ua5AJKhtfGnjAwyar4e7GNf2GXgQBo",
  "key20": "2WsJk8GgRQXyAaTuzxcLnZ9yV8rrAVenGC56eqCB4pXb9Y7hXi1FSa45RwFg1p2dauriPd5fiSAaTMG6kHb3N3CF",
  "key21": "2VFRna5QsTQbPrfL9qktD7mESCXHQXC2u2TjrcgRRnsRikG6kCcm29xHq9GT8QXMjz4rfv3QZD153voUBX5LH4FK",
  "key22": "4VzivNPjg3VACQnSqaYnh2D2xcBAkw7usK39gu5LbQ3o1XKc76MYTvzJmNExuovos9gYALZihjcSJTE5qjtG622f",
  "key23": "5CkxU8SEAxMG9qKNFLbixBmjHNCocUGdbPXyBUhQgSxmZbQv24PFT42qLfpKmy7bRhj94qMMZqQWQ1oWt5R7EMvm",
  "key24": "4hBmpJ863LGABz8975XpTVsSqRdzt7uhJiVBL2fPd12DrhL2bhA5my72UGhqCMNSmMhyiJPRgSNqVnHuvSiWK4Uz",
  "key25": "5tQdXVsrRrdtPenvREf5L7xiuFAxZApmfUwqMeUEJdWvHa6ELkzPLm8bgaK3rqVcmYXQs7NE2jixrbTLtqXTkqYx",
  "key26": "4nGDU3ups88LvZJVrMJSYBHaAUFyyCkYS2BbXhG7PnYcZXZ34jJggdkZSkN9GD2WFee6wng1x4EWicihtBXJhoTG",
  "key27": "5q74qSKsVUJKoELz967i2iru6X4Z5DXv6PGaqbcGiA5WdGpzi8CDR4fxc7Ap9wT5QAyUe6R2kq16EVwyrC6wR213",
  "key28": "5cSPR4BrNp1E8a54roX1VBDCTjAt7bb4Qpg2QZwCQRi85v9uNJhiwmP7yP4SMg2mWdScX4VfgSYe2yXaBKztUeZ3",
  "key29": "4yC4ocPJDqXnGAYqXsCKNgrsmCnzyb7iwUjP17YYnU7dg8iJ18ZpJ6UW3fb6fSsNvr69YybuVvA3VkRo64Pyw1Ry",
  "key30": "3wj3uqwwiKtwHhjVFvU2znQ4B2uxRbZc1WLiwzA8wM9Qi6k5ciqVosA1gfFKagBFhzBTpLofBj1kaajZQhfJk5QD",
  "key31": "3xMM7YaxGU45yiNV98sD3geNhJMXU6kEMxvgYkSjPBNwaVxCerZxxDLLvEGRqAD6wpGg5aV5qB43erZyH8sXUHYq",
  "key32": "2pK5NzGTXLBQgBZhxn3fa3dUArYmB4hr9jPnwbkfC4iJDUksHjNhmp8kf6gaaMw38pJoTHUhE5A8ZA27sxxcj5iA",
  "key33": "2gGvz9vNgEoKftTepCQ3qLNdrFazZVXDSyzqhSTa4QxRVVZMEadA7L9EGnRK3QBdHPpZ7FH1BauCEih6LTE8pEFa",
  "key34": "2CHEGM4Eb536g4m9PNea66MzQXd4uDnm1cuqcym7VchrF2h2nCmGsHT1zuHP7cQtVbfLthDz8vNVbSTtywonLDhA",
  "key35": "28bgDGwgZ7gVXrkvxZpWC3QDf9qkyRLhNccfGtkDsj67ii4z51bSvRc5WdPnFtDMsvgnfy9t98pYEb9ktnrH9mXK",
  "key36": "54PFiRMZCB5zgbg72VB8z5wBG1v8cqai5eyLwN3KF6LFwez9Yww4MA8fxVh8AwBpVys6d1CSvbvgMLk4MphoAHQv",
  "key37": "4jz2ueoLFjii5SueYczRuhLfru3arAcxJPGJwyhyonj6raCTQiv49GX3GHVcrakmkTMDS6QppeaSAKD1Wbhgaqss",
  "key38": "3ejt5cJwQuzg9oUxRMyiLGTFiFmJXjC251twNcHsUt7r1p92dkzkHyvaB6trZPsisRVnu2rnRVsqbJZ4qdjAN3Fr",
  "key39": "2QKTau5eGwuBDpLRZYhvmXLERUL9vYEctQ1M25c6rdgWggyptfgU1BLeAhdfkzQNRKEE79p3EBd9yi5hQs1kVEsM",
  "key40": "3TwAf9wZEFDDFVtGBBrp4vPHw8k8VidkpXSKabrfRq4LCQE8ya6Zuv3gU1B6A2o4Cfg2wHc6gBwA2KbneRqT1UyM",
  "key41": "3rcYK3xRw1C4q2cdjbcGH7CNX2yQPSshTQU6DE9tx5JsUf4UsV34gz1wkvAvtBkPTGsHc48BQ2m179verR1cb25x",
  "key42": "Y8aWjQjNT2JcPRn856UTAB7hdWTyoKHkq7hsMHxoVxDFiNUGQTEbfew7swAM1BvLZVr8WoNymM3nKAQk3DZV41Q",
  "key43": "4ZhiQCBJdXDf5qdQHECWJZ6gHHNVz4TPHD9omBemqwHhQVdfMjSeJL8hK1ZLeQhXzj8qumSYbmAAPMKU3GicM3Bp",
  "key44": "aw9xJeVDeG1GeCHzjHJjSBsz9y7pMHm3M1QbrDY6LXGKzRSr7XEmqhvLBDqbAcfozje6V6TPtdM57JKpspRAi6V",
  "key45": "3P2usv8hBqLacfUFpyQur6PNKGq6PXa4AgVJR1TEHnY5tRFMimpiKJ99bYPjPnQToNcKKkPaZLdqEcMwA9CKqgqe",
  "key46": "emwvnceP8CYdBYt2EiXaLsuQNf2sdfHBnVnHqiVnQm6VzV17F2mKioHpbBe3X1BfiVRSVhjNmFA84hZE8D4qUg1",
  "key47": "2rGYG9FtuLbJka7TZTR7eSJ6rZnADqQY3njAUGovuSPdkHk6tNLnXP8kKSRu6tgEyNFvJBNRuALaq7oSeD8z1Wet"
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
