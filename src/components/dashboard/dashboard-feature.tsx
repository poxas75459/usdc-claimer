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
    "FxqDJsaTmw1w81M6AiHgLRwqri9Cv44oKr5kPVmr46FD9ocCBXtbSzjM5JH6vM116RW2T2jpYuWoMk7NKSKBu3N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1kS4nH5HvF11wuz92kLtPUMB4HX6NHD3xqDXHdanenZCoBbBsD6uJUu4rrGiB3pyjSF1szrj5rSmVZGHXkYowwX",
  "key1": "3iQntF2GtKu8DCEdxsozHsfGdSabmj7oH5ztwExVJM2kQXqCxdYMvQxXmd4cqANXTm6qajmjKjSubhwHAp2qzakv",
  "key2": "5m5cwqwPsiRGSDwjTEZdzcc5hVbxAaHSw22NLS9Ts5NssPmSdgFh4K9bKGLRGfYePRChG7Hh3fqpbugnYhFGzLNT",
  "key3": "5Aiwvk7GLmNKXYXDzxckn2fzc4dWiRN1sirekxBh7h1zKRiYmYp4j9VAmDzvwP4EHDwGNbUsRsGwpnX5HwdNJnUC",
  "key4": "5B7DSUsaEH9i58jieRcwASmYE6qVGFpAzHv84m4hiwipMm6Hvmdjg2cx8vr52pDwa1N1sSTLscG3MgvxWAahR5a9",
  "key5": "2MBgEZWXKqKQ3Zx2mkjKScMsM7cRN5nK9o7b8P5KnTcBELWj3fmPP9Men42L5kR8oqoJdvE8tJHHDhKZBJQHzApQ",
  "key6": "5pUH6whSUP9NuHxerdEfP2BVoT8RM12szrnRxuE2TZ2Zsifjq8kXRokzn2k4kAf1uatNk2G5v5s6KnkCEnn61i9w",
  "key7": "sgChVc7iBhECkZu3cwG84u4tRCqLivGFzy8wt3NDpzSraXPo7zfPrcUUoxSxpTrViCmJHYRzXQj1MDDReGkZi73",
  "key8": "526UEWkKuVyuHgFvh2dQotowjyuWz3ttXYHCVXETPj8pW1vyQwTR1hBZ7C9aSNDGGGiunhv4uqCnvMAaygyZSc3t",
  "key9": "2FbgTz8dBhG6pSEGNm8irtjHgabC9DuuD2QuaAdFxQgx7Lk5FTDj2s78NdJseTdfeWv8auz9H9rKtz1ZEXQhLeij",
  "key10": "5n1EuWyhSqkReQiFcqpJAqTm8gWuHJ9gcjrKsY63hTXPR9P5U7s3Mot3hDAFTAPc553VBS2vsttfJyYzVqYHLyBk",
  "key11": "5U5kJMi5eGWsZS2wpwjvm6m1KP2SzfBaqHq6gagfJMz1CrvkzyueeNMt7vLPxKZu3hK7QB7GxHadCgcrFa1bM2Gz",
  "key12": "5rxYvmaL3gwxF2HvoeBTRnMNmwpXqsQS5dWQxyomvtkLPBHsSptkRN5mn8gYNG9oUSqyH9GaodWC5QdU6T3BjCXP",
  "key13": "59srkkso9GMPbzo6QLKCwNSFoMTpqmX7jzN9YiyLuyH3WquwZAsGbYKVCTz64Sg4iJGfrpWAkNBkHu8qcb81uqFz",
  "key14": "PFQtGxARsPHyMZuHMp52e2ScVHUGBTL6h6Tryn8pEALrTfpTVaNanNKDFVB4qP18iFEQCHrF7bubdWAHzoLzCpr",
  "key15": "5TjUw5EL6J5gWVMhU6HyA41Xx1NfWwG8fYTFxbv4U3YDWyuBy14Yeh8a6hunVgJpvXm4ZcBRx5Bd1CtKAnEXCA2m",
  "key16": "3cxo9dKa2JYBXaALHxK2qczH1WYkNPnvWyf8C3AtY1zbvYG8uRSWpLPFALFHRdLVy8aCJzHes8YKK6ZFBKyvg9Jy",
  "key17": "2GgvkEnLF4htZJcWY3FBEkctQS13qtCNWjJ8Grv5gUEaiuB3aTa5iXsSa5q5Kx4fvMY8DccsgRXTuW4C36RjPV9q",
  "key18": "65YqVnPcoaFnEwpUZDD1mPwATitTiMgWNPzkmQAScoXbGhW7UNaWRC8jG5iMM4D9TyZSgMS9EBhaSx7y6WnPwyST",
  "key19": "5Edp6WzCzLW7NvKkRcsS7sxHRCEVoRieW4HsyKFnBqZZamv9SHJiNkdNLS4uieUnjUgptvXTz5whaWKyUeRwcBHa",
  "key20": "4V5tVMfS11M8qDSWuHv9GbQ8U2Ea8jnU4zhFWF8SsEPwssUAjhaKDZ3MPc2VMFTKdv7Ckpn8D2J1DTJpcgzvkrWn",
  "key21": "2yboA5bN9e5tVekSztH5RphLUj9dgvSu3v9m2pGSd4PcR4h9MvCy9h5saSL2cSxhjMaFi6EQKigNxYLetidvrtiR",
  "key22": "MGJeEW6mcKfhXrkPugCcbXX7ETbAh1y5VgAr59CEw4tip5U19f6gVEzzte8obsWY2YQTN37wfqNw2d1hZiCPJFp",
  "key23": "3bUjMWKQfxGu8WiYb7D7546oUBimXcWn7doQxAa4mjro32pXduscCULum6hg51SP3v1vRACZweQtGYismsxADzo1",
  "key24": "HsTBa3fsUfdqqz2PmtsM27mAdBvYF2v4kPF72q4aNnwdoTw5t9mMvV1xX3fdEgtqZYJyQLXJ7QVxCAm7mXxMs6X",
  "key25": "n9uYJvCwhdEq2u8gsNrhrJGJVETeMCZJRFcEW9To5QXjvWZrRDSYGheBFoLea881172HGGAmiezPjSKFWirvqKe",
  "key26": "5rHWZj3vQDGpAuvainaqjVfzsYUEti4A6MAV78QcHPc6khBYtPBw2KjrKs2cw4bKog7Z9EAiadSKMusMSzw1B2xx",
  "key27": "5j18RGi9ac3GzrkdQKj3YPKtN71eVvU5FxRGZo5cbYr5JHiVPce6CPeeqFvy9FCHtRRNVggXijepLD3dToLYnogq",
  "key28": "bNEMazPeYZuMfCM18Axnn52JD6QRMpDVTWATGB22KcBqydr9ciNZAbAiCDfo5A7f6dazAag1qdHxz9S8si63X7L",
  "key29": "4MAsWGgAaokywrgbvSmE59aangt8KfDD57D3b1xJdAV3sQZbrS9NiuY2pnHDSv5rXNMfYLpmpjx8iRwfMEDmXGQk",
  "key30": "5APKHnFL7UsXiUUZPDo2mEU29K5RoQLCvwvJAGJNQ8EKRT4zJEWJBhhvZDH1Sd8R7fCGQ1bvuxkxQR7HwWK5EViK",
  "key31": "4Le4TNpa1u9u4NBkpXE8ZR8Jcw5riJu6uBrJkYrw2nfFuTbfANFqSsks27zrZfJNgBLg1vRXMv9z6587N2kkozHT",
  "key32": "5Mv5KD7ZzogRRy3GKqZTYajpASYpESGgcbKUCD1GsSHDT3bVpseLDzYXTPJ7QCy1CCjL4eBztEbsxg52nDt2hv2q",
  "key33": "R5HJJDxLiQ4FZjAkKUbDYveVhJmV6hSR4jFmEEQuRwdofsddTsEL6gZKimCcrN3rDxbcYcva6Atwoqqszw6TJBH",
  "key34": "5w2zv1P1a3JZz1pd7XZJyn1bLFi2nvvgXqTcpochRHy9ZntBhhZm5UyUN5ehUZbevYJpxkXMRzPSQFhcu5F9twC4",
  "key35": "4LuB8ktob6D7NAPY2RpfbkkPER8dPEmC6NV8icEUn4sPg6FgB4SsJh5W49BpmnTit2uRF27mCnBx5EFXMqRUYAVP",
  "key36": "49QQV2iEExUZMjZvt5F6joZzJnvLS4yTokiziRACxPQ2eQAjjBjNPZvjm2mcudq2e2eMnQgC2PBRxuDQojZnqdpT",
  "key37": "5zufWG5SYQVPJM4aXaJ5rYRwgNmy2LCiAPTvpZ8sqeKgNHauUkxFi3r2s5MxW2tq4SAacfHq7jE3Jj79LtGL2TRo",
  "key38": "2nwZ2cqrjLPnPRty3FhGTfMcGy2UrjA9ayoDvRQjVuRbWdVF9UXLg89QMxcmp8zBU8XumA9A7KDGhpvA3Keyv5AS",
  "key39": "4su9S6C5GnA92wPxc6nAvgxtu9qDa1yDtP5EMKkx51vYasvxCKEoXQCCH4HsxwZTFdJqUCudrJvs7y3AmWTZepLe",
  "key40": "5JP1ZPrZTy2RqHVzUrnZ7aYr9w3RbCWUwus6xxfhPPWHrenNbZbDspXnrFEwJCGQjSaLaYj4tm9kC7WaG9jUAhcN",
  "key41": "CEwCv3qZxvVnWnUwwUKRu99pTp5SndNWc2jZSiNKU3eewaKv1zHdqpt1DrY2B3v6YQMDdYRWNKxwuidX3MwLyTg",
  "key42": "fGkuqBPDA6HQhPP4K93dSqUmeDaYkgqgdWz4pXnacCcSbTjQx6HFHQaeHpKojnh8SNR76w1rQVCe7U5exfAxFWt",
  "key43": "5JmnYXMAPCRGDFNVvznYxc9vvFt4C9qGiG8ZwvXv19fcT7V6QGtyH3LkX68qtVobKZGYec2aXCCqukLtzq2AhnWa"
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
