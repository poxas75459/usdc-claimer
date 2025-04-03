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
    "8xy3jUAM66ZVD9izwhnH8VGY7nuZwRjuqmigMDeTQWCiVuwSYqZh92xxku5TAWBAtaUCFakvxP6zRR1gub9F9du"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Mx6CF7euXBk1SiHABFpwKD3FMGzw8QLctWG9Mf9adxtUVekXbo6JeSD2xVGPnnMTJm2xm1ooTBv7Rzkxs4GNVr8",
  "key1": "3Uc32q6ST4jQem8NVso9YNJgxuiKpdZxBaS4cqtRDGtKiyeNPuJ46zrW5dMTE6f5Qx58xAWG5kWry5MfaTtvwXQv",
  "key2": "5hoRucmmQKfF6HwHj2LARcJ4VSXAd8t7KmQ313FocZpiZcarWfG435eD8jEixo8FHscppZxJsU9ZvK5kh5rrK87H",
  "key3": "5yZgEBwMFf4rj42YDwx4TLmKwKwJf4HjqcMRWVo42aTMGMEHDnyubj5b6MLP9FjCzhZwbp8xbhJjm2YonvZWNAqc",
  "key4": "4cxj82iwyZSvU3cAAWjavZUvmEyR6XqWnv4EE7xxMCeJwmUt5YmvavRsGrx8noiZRdsLrku5EFhP5goufnQVheTU",
  "key5": "4Aad3tFJh34GzPDacvz7KRcnzexBMYb36vpKxJe2zDCM3oF5X3mQTSRN4QoBko2ERKY57C5TQAxjjL2AztqihLT9",
  "key6": "3AMYdYoC1kARbSasNAW7uc8b3heXKnA9bKX3PEyNLzdhFgEeXNNNNF1TND57pSBbpLbZwVkJzvmeeSDk9sQzmQWB",
  "key7": "3JknXR2VPxnqtN1T8ZZeLAR8d1dao1Z5Hu2CYu54yE5XqfA2dZyvYGNjArNedUwvJfPAWPZkU6y4SVB95qdPTCAj",
  "key8": "2ajK9yphaFuHVynNtK74E6Eyk1t8Gix4ExhxY7TUNJGHLFkRyyBBKJvX4wyJrhKY3tHnigGBY1zSFhfM5YKVvaa5",
  "key9": "2ucMuTqGCv6JU7vvmS5WpiqBhr8NYBb3FHAB1BsJ7d4RQGpdYDivhysZQRvH3VvJ2vaHStsQ6KUzkkNPtCC61GbR",
  "key10": "mAtDRZPc5GSNtTVCF23mZmVsSXdwRUpoTt3rhGmGPhQx7fZBwuKYXxRgWuJi5b7FLfGYnw3bbiRVUzPFGRVqFbA",
  "key11": "3TSQ3PnYMQchaam6MsKnxQU8CnfiTQpwy5aiV4YpRGozGprwtLimqULzco5tso63r65UNrPQnqFrExNPSw2gTR7B",
  "key12": "62TP5PooFrE36BwdvDdPUxir9PMVj7E2Xbeo1cZTp1adn8mtpJnZE4V5bQoaeArk5oWDsBPFtD7cdkyM9kRCfFYX",
  "key13": "2B1u3Wb1MGRQCtyLGNsCAXybZPYWo8nNTEc4PdUiBqrZP5mMjoxJh3bXbFPMh3QBLfUqLZdFo1MdKaQtBq1dQ1Rg",
  "key14": "3qm1uNsZot4XLr7p1wMmodurvqjedG6tR7sFHBFTSmg9eH6XkiRmC3NRRrGZqDmEUXDzpnRDmsRhrVyKSBcbYTHq",
  "key15": "MqeHsVJ3iijvGh7q9KmRa4qNQhpu2tseHtpqGeuznhf2iJFLToK8gPzfwkkZT2ToPcYbJq8V4CRqdyTmKD3o1RM",
  "key16": "4B7GzLF6Z7E4AJpM7AG7UWhr4dbs1C5t2MDgSCZmnndzgwxQn6tNMLn2ivbbiNtSMFVTmA5FGri1xjpn9cfCpS6E",
  "key17": "5dZrzZqQv94KBjPgTZg3VJJJGw9693CfCFj6SZA71RJ1pozDyHCsX56uXB2S9yDt3ePRUphoCdFpofqAqjPTKzaG",
  "key18": "Q5VytoSv7qxs88xxvBEgwomgMibUqwo2758W7Cwi1rcsCreA7hYavo1jKTsBuSnHmJicQjoqx4rLr7iVFzkqJZE",
  "key19": "563hbdvbjMZnbjb8tPJvRLgPgqNT31RhpigPjdCHHK7qtzeeQGfXTdF21sQpkeej47HKus1LeT9BLNsvQqBCz18S",
  "key20": "g2tZ8icvCH2j3z9igCKhfscarDm3Tdjbf8QwUMSTjJpP6sgimijMysgYnHdoWDaVpimb3nCgpvQgEqrnibCMJvr",
  "key21": "2bEVY8x6msq8qAP1c4h4ZqgpWb1roFC4Zyf8vCqVKGCE3GkLsNSwmTCqnuKtDiQWZ6AYr8uYR7vD8Q98PC1PV8ih",
  "key22": "8EnrfonNamrZM8o9H8eW6kpFEkyE39edsBbde53w6KMkgdbTfWaCwNFv2q4HMTWcP34VFdVLathTqFMqkmFb2Bn",
  "key23": "2KfHtUowDMae83NaBPFjpnLrfwtCu3M6dcUCRAYxvadTXV1SqT7fvS3KtL4zL4U6AN2xNyUc2atnKP2w1m1tDfPn",
  "key24": "5oUaKVqCs9njsoaP9VsE2rpW5YQuJ1AxEbU3tGvAARQTE7kayxYC8kJNh4UcvU3qPswYV24ZJBDPC2umd5wwitaZ",
  "key25": "59vKhXoLLerRH1nfJHEYh9sSPQ9Y2Dgmr9MFGFTvsR3AtomLmv7RaH414SjXrvu8HFe2mZrQZQFXFMv2QWreFHDc",
  "key26": "25xrpqZRi8QsJnwCQEoL1Kdm1KbrDGyWmHyUiZ6o8WXxwSQa1utzTZUkabhLntEk6t5fzRJXFF8UrKyXxauySVnd",
  "key27": "2EB2gtHSSYyyo2BsMj8PR3uVi129zmLbe6eUEtoGM3vPs23kK5ZwDWGQNqKM15ir9mzcz3fjx73Ap8sjSENFkhs3",
  "key28": "57r2ZjyBgswtccuRic8MuDzUK6cgGmRmoiYUNuw64RQncrNwDHMhx9SqB51mPvDzekmBn9Nay7FADNucgvYvAypd",
  "key29": "7eYwRWbXhWhZy8kX9nxxkDJewJXDq2q4abARpAPEoD6FVgh5ob8NACnU6t5GWqhgAYFhaTHKjumsbWgVR63zze6",
  "key30": "2ZXGxsbREodPwg9pgjTLp34r4caFD3gXvDcqVbSrGHFxrxfpM54bGTZKczz38nc5g1cggUgJo6FMQ6FSYwSNqbQv",
  "key31": "4dW51DXdLnDj1BzUTthc9LsFbpwMWftZpwPqeyEoU1akhNn7Eq3i68GSuE1698neDFSvHjyrGvdgNSaV6V8j9eKa",
  "key32": "4BeqXkgXkjv1wn4NNVyEhzhCruTocbsJaPq2pVNzaFtaVuu6oBMqS9xkmmR5cGsoL3GJMTFAHVJYGPAKNh9bdwX2",
  "key33": "EDn5nr4gR9E4dw54rbidZh5ANqBPECaMzasVFY9kFJvCFMZBpWBhRmikfLzYvMqArMgoMkwTTdXkynXni2Y9rpw",
  "key34": "3Y5Hojw11nmygiuZxDwBQdw3xwGdnFtt7eGw9yuKRZeN5u4ptoyJWmHAZLe2xd8wTh2sqGPg9s98hRruzT4U3x6j",
  "key35": "3xd2qiao3riZTsN2YGW8p681euce4M1nCJXNeBE6CMbvyujWf2CFjmuUkN8X3sj1W65KsVrbdyXdJS2w9ThU5LL7",
  "key36": "3twUs5kJfUHt7Smhchn5AMu7wVTXh2rCGvNWKGrBd4FmBiH2RcZydrkAEAmiDyNUed6UcQwX8F53DFkADqsF3KoA",
  "key37": "89p7p7hcizUGGitcr8tZchsdihMjudsSQeefNE6ni1YpkWoiEFYHFGzm7a6zF5qKw7yiKPWhjprWyPMXFEWHQMp",
  "key38": "5Tnntn1SAE4EtgQ2DF5chZzu2pWVsF3N4QUSeYvLTV5A28NCZkPs7bQD7ZKBAVTHWDKDJU2RmG6YUTvT8qpjsDP9",
  "key39": "3EHEy1y9aA6AAnmG5VZ2e5NvzJNXKB6rUDztaooLrq6mCqdUuSae7cbUmYmgP5AUhx6J3T3Hp9jCn2aBikcLZfTy",
  "key40": "5H6vpWP91CoDZtn9Tve1fjAdq2zhLqEmPzbrGAes6S3fYX8EC53JAJCBiEgxfa9654r2dnfmUsJvxhrftuua3bBt",
  "key41": "4nFFF2YxGC3qYxtGV9AurkKgoKMMz8rxRYiL8v4jUsM43aoaNxmkdKjezPeRbXzKhfRPSn5N8HEY5fCK54vpx7Pv",
  "key42": "3dwbumNTJa772Ka4hSWhzKNXvXAeQRcqNuWyyVXy7x7QnccCnTt1GmcHB7yg4gumdbH3TsRZRuP47NRw5CiuQAr3",
  "key43": "52ZkEN8EBgJUXtu41W8YcEtMMrBrmNSrFxsFv7rJGW7pZeGb75dStRNrEqrENJE21jV8oaDN8UcthSgugfzjQNCr",
  "key44": "22L6Zc1Zv6UeN9XhuVQtPehaCSoZgkuHJQcpM2qRuTNXLKBVEybsu4xeLd4eY4f9zGXKL5uRXQMqrAQbGTiznQqF",
  "key45": "4e9QVq6YbS9u3NafKSSKMGtb8vC7exhSqQffc19g73G73qRLZ4HcAKNdwpmgHYkuDuU5urxPPrHn6gwa6ZG1PuWn",
  "key46": "rYRZDkwKFNApKJtd1YQxN66Ed4JuTtZ7R2mwq8eod6yDFNUC1AULXn8wn5iUhDXrkDeznUyG5iH3GYJySkgv5Pd",
  "key47": "2MJz39Ve4PrGXgqgueyxqFk7UQTNVBtRR2mhnjHi3gzBmWTCEtkyYeJafjWkqDEMAqaCCtRaCZhMQmjdxArcH7Yw",
  "key48": "3Q4BxBhpv1zeCkAKdBsdMW2aHALgegNaLSA63XpRpCQtk6CJBCDveb5AHDehxWHAc4zx5erqeiESbtQ3795CX7th"
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
