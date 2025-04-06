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
    "2cvZJYPFxuijuT7KFeH4SNz45TDY3EFq3agRPANrM6Lxh8YAvyZCzNP6SijSzWyEEcMmmENS3EjkxCeid9fKCCha"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57QfLCtsCrX2DDJHvLukA1enkxqzPFwbERqespz1LE9YGvzfHr7G9ZidS2nAnGCy4ZjEgwycWZBikJgCYj98qSVN",
  "key1": "4QUoQ9CFvW3ceSF8nTeVW61GbUtfKsNT6BS8X1LRknSJAvJS8qE9QkxLfYxHJFcWU7QvUaMPSVP71rUydzjYr168",
  "key2": "3WUXxXVQXTo6FKTVxEmwdBk5sBqYxTZTbgvwC4LDF1FZawmY5W5Gc1DU2C6S4ZcycJ851Lx2mxt1SE58eLvZyiqP",
  "key3": "5YZ8CrNVAGedW5UkJm68bLSCdoPZ9n51FAKDA7wjeSWCnaPKshePifxpG4PAmtmHi8ggKrdnTSn4pPso2XqpyS1j",
  "key4": "2JgbUSKzfgwmnSLwHUcCjQcFHn3SE1zGSuBL3Pb14bmBcuWqkDdeq3LFKa6kuoVXKWdppRANb2ctphmXo2GPtjLy",
  "key5": "2ndn1QtXiRkrUX3QdutYKPvVVbfQCh9vhNPtA78fw6qP4WeTtFFp7P1nDk4UskDhpeNoC4aSSqaAEg82wDMdx6pe",
  "key6": "4VWGPcqCkMK9pRrPFcF29LGGpHgoUr35Fjxywv531f3LZWs5wsVBk13ErWYPfZAEzLjVhLG9ySA6Fxq8KJ7kaQ4A",
  "key7": "5cq44mn4ZLgJTkN1qRr5TLgyVuJsQCSYD4N9q7iPnL5ezWKcnRAp18EiUXY4L8W5SBjTbYV2rW7HhnTyMfrHkGLZ",
  "key8": "4wDsfWyq8y781pieQDeHLW1eCrpKHTL68mUZPoN7dhBLXnkEE8L9946xeVh1fiBhyb3eE7waM4q4V3SwtP5JXr8q",
  "key9": "pSNR3tZnYCsnbcV5bntSuWKsX7vdREuUzwHpmBTUxRBrUr6JuYcLvqVcZfvviC6nSywijSJRAfM4Ngr2ePYRotN",
  "key10": "66omtMi6AZez3XidmkNeHyobdvNV9cVDss6xCSA9v3b8K5JMLC4mt5MmzkXagD4RqMGK5ExNbBQVRwSLFsd2oUgE",
  "key11": "yWMbAMLahAJ37oj6D3X1r6fFcaPVRiiJwdVSbAXJfkqvmvCNHMvcFc6S1JQRLiKcw46skTYDqASnFLJPvYgAphy",
  "key12": "3mKyxPRY7Mc3tDWn1yzygFvsBFvVkWsa4SzqJEaREfZnpudLUDyRie9SoeJQnDuieNq3FbNVbJ6Z47JbE18L84pM",
  "key13": "4TgWFXtawQ1BSdCVGNPqxKELJ76pmpYRmyYLatdXTHh8AKS5s7QhmuZKbgGRvM3zWm32KFqH9bci6cSj6NCYsdAN",
  "key14": "4jdxphMhmECxdM5TzjTL8qWx3tEVBgrXv9ut9f2L84NM1As3XWuk79FjN877UsMaWNuNpWPNT465disjhFW8EeGg",
  "key15": "4rUQkeEbqrkCZYCgQ7ePDgv87g9SdLtv4p5Em5P1128oYePnDpAZ66KoFCJH8JCsHWKHBV3KU2LvNBYNjMbNF3y2",
  "key16": "3xf8q6PwjeQxzz5AoDiKK7PrKed4qN6fPTModw758Mtn1QZsJ23ouNdY7Hhvy14LLECf4AE4GQPXCkrWVb7azenR",
  "key17": "4f4g3KeTjzdGhfNYmMqGtFmb93jKYsTrumrruHYEjdhfYGFRpExvTe5hgDYc9HUh6LvCMjC3oySFMiUR5RQQZgJx",
  "key18": "3VrveghYTYtoQ1J82uEYVvngDYbu8wjkTCBM8Gh1ofR91KxWQxeHDiCrVL1hBVY5Essf1KAMaYjLFhDWLvTepoUQ",
  "key19": "67MDQNm9Zbq38rvJfmemXrAgJfBwLihQ1zg8mS3JNfz24jGCrv2ACrevzZgFZ77BJxAh89b81uka6ANGwoxtoUkK",
  "key20": "UDmoyBpoGw1gSKxv5t85PrF79Pf3E58oAp5GJtdEHpr1QqaVtQ2oNvsk3ajKdrKbpHFugHbxV7VQY2akqExp8cx",
  "key21": "4Jvt8YGPSTA9JnXdxdzTSGsoRVnHvkvJZ9ipKT9KDnH5fgb2uZHEeoZSeSjmanajdXKZhxD2RMp7QeC6vvduGPJT",
  "key22": "3qSbAzVbKaiaD9jEVQE9RiapJyaptjmGt54ZSRf3Qg96LdVjqn7619xMRh5cnX845QHFU168Wyjex22QpAc373My",
  "key23": "4weuWttLE1xLGwiM2dznqxbEpmdkt4CAoq18a47T7VwK3dMRNaekAnTY121pTR9cSm3rhsgXvKh5SdF9hg1JKv7Q",
  "key24": "3AjjnpLJR8AhGigpHqjkVYf8WDaKUKzYDyDorGXjxspgGVon4PPoGim3M5tWqb6AeUxgjdk2yQsMT47CcdKGdSNn",
  "key25": "2bEAdQk7AiCqvPbeVjWPRyBR5vpNXEEYUbZ5xW4s4cFE63QTabWhS1nt74FZz9aHywdHfvvg1ty868EYU1NEi7Gm",
  "key26": "2U7s71BR53tZqxv6EAEUmrLN5eyEPPCo3xQmPKcs3jeZvtRrFyK95DP8vsyYvtDreWrc8c881WWjm2MvEnyCHKfi",
  "key27": "3FtBixDXbjrcbbLcvDvFoDWk8zSTpLD75G8fN7peQxzaKSADEQfxcBGtkpBF7NXPCVfH4sP764qzfFhUSkKAb5yw",
  "key28": "4Qdkh6Qb9wd1cY8KLZdnLYMSNfgAVftkaExSLCDVMuU3qxo9UqRHAVMRu1JNtyRX2TvKaqJTVMBM6YS57QaD4PBF",
  "key29": "2bbUeqGiJXFbUxYiRxGnMMTMHNGapdi3nT2j5D9r9yjs1hEaMJ5zqFJLicTCNv3KuzZ5iZY2QBAFLzRo1LGLuiDB",
  "key30": "3E7StdwHVXftjENpHYXjkYzqpf2nkPV7PVc2JmBKj6uVkNKSgErdTLEEMT2PmxDQDiKzBJKp8PQiH571geSnNGSp",
  "key31": "2mg1BVTCEWEtggZKvq4Lg6FojdHEzaQAQGxR5uxca3QD1apFp4N8CHMSrFif37Ua2pJC2APxjjz2nmcgJoDgx19m",
  "key32": "4NnpLVJKoWdUEEhJNnwme1kr6yEPUofwquyGL1UX6pa5DTJXivffGZQkoify3hYSaDtNk1SQCYpVAoiGjmvuht2F",
  "key33": "5PFaAYuygUAJnFjYse7J3nenATZbUkhhLVi6jr6NUThActrBmjFNdEetH9fw6Fop1nY2pLuyCgprXGJWqZNhgWAi",
  "key34": "3YhRwaRDWFfDucYAQrDY5eou3RVD2JQ65G4m3r7dXjGZhvfDRde9E15tGuPo7am3UEDEKLGgG1143aguDWjsmTfa",
  "key35": "38x571Cfy59pCKuGLgAyoVhaPRbdKcCXpmFPu6FeJnxzPKQ2Y2FMEf3Ds18DLqrBXmj7qE3SzeaiDTFDTLbSbffk",
  "key36": "U6iV6z9pbDA7iMM1Jb9GWfzwvpifeFDcuXAjwrixUF23R353gtpcwe5VKpSwZYAFZiXb2JbaXaHyqgYdZxpQxd3",
  "key37": "2iYzGnZ1cW3rcDCmy12aAVzjjt3a6nDQxrFkY4qxFxFdUXnRZFKcaMA6KSbUNUiqYcu6VQhso6joSLQzPAqrH62o"
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
