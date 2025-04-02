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
    "3PCP4Y5kYMf8UMVQttgTxXjrNKHYcQQZoz1oyokYKZeDoDeS99o9XHmuk2ya9SdS9wq6FB1NmnoCXbwaT77BT8HQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RY6aMad2nB3bNjTgyzpg6SKbBC3SczVXPif6j4P1L7sNDtVbA8suLjHeQHuapPz8UpyKts3xfvweqc93gokF5aE",
  "key1": "36TFFqnKwb63gYEGt16568Fm75WfS5YZLwFUdKXtWj1DbvacZ3x4nNxuof6Ldj1GzqqZNopWFgskqGkYn5dTev35",
  "key2": "2oPQFFbo2EBgaEXSaxgaece9CwBHBFSmS582FYRDQSz5ksvNM74LWwDQL9unmak23vtm5Dhrd2iTkRhse6QgdMPE",
  "key3": "3fGzioXrA7qmvz7V35jZSiiMuicDquDR5RqRbePcycJ3j8fmYX8mBKVJZ6wp3sXswNtKh2Ty7Kpbkk55C9fSfzAV",
  "key4": "q57uiYUJztvFj8yZoG95PdSojRpt4YFu9oc8wpmXJoMbALGVWso5rMWye4BH76QMPTbyAJWziYYb4JMmtr5fTK9",
  "key5": "5ufspWwcrF6Pa8NMeYfb2FoAWmhS7hgtn7kaPo3beha6eP1o1H5ktYJSoUnvnRnQtXxBdxkqcqbFXV7nwrYPe6Fe",
  "key6": "Fw12sWxA6jtcf6Lvv7opL8b6YyMFk4kqtCFK7FFMvGSVg4yPMfs2b7stWjXarfnLFVptMbEAYXNPRwt4X7FEoBD",
  "key7": "5npmEc9XdyqtMrpUtGtobDtqC4kHzboZziq8fg2VtMs35axvT6maZPfbaNjRLcvfwTZCK75oYdhD5uoCPKzm2wNq",
  "key8": "5kmDoPu4uWduVnRPzAkcsKaV1f3RcSpNmJgtcpXtcr2kyYmmVNnUqMYpP4w2UupPAH5diPqZe7H8rPy3RrASCzF8",
  "key9": "4j1L8aA6bsKq9sQkYBLrKhWUC3w6U2A2eEKHUvPkMph6yB1MjdKz9WcS5ECVMZhVSw3WLShSqmEZT2SJX7evkHUe",
  "key10": "5fb3LbcQ5JYmfmx9VNGgwniZ4j9vgiqpeiR6KjneW6KrQsVCgxEhCCDL8UasZBvQcQu1HiNysEmRwSqxNuoyqePb",
  "key11": "TzVUtAXWqusvu7yoVPz1g3MVAxhA48oNNotJe1zqrbJkQZ3fJ4uE1iCFyHFoQ9Z3gcxDYPSVem8t1wsxv9f2F2t",
  "key12": "2VT25ELQBfQBJ1MPuW9x29SrAv1fsKuohkjNun38db5su2LcWJzTN9AfZGWDUQ1jxbtDxbkgy8zCTibmLzjKtzcS",
  "key13": "MbQ26t15FitKaQg2CwMgboHAVCwHRS5Hdk2b3W7MzfxcPHDTuzhe8kct5PEcicFCVnAGdqpMrZvc9uqBKF4VR3x",
  "key14": "4nySodBBioyWzxFk6j3afkGxR3dZsYw7HV5onvKduPQMnGd5A8EucZZi4DWB8dNcenaAc8gNXxnK9GLmhTai6CFN",
  "key15": "5G44GwdYR1GztmHfK9GoQi9vtsznTWjiWYyD9jXXnifyMFLhXhqNCpkNpVe2uwW9NotzBduVFqZBFXJdgymY65fw",
  "key16": "2vKG6GhNB5xT2YLcf6RJM8Bfyvf28CYS7a4ro3RRDfsesfVy7FFJ7iNfbysbfDHX3XWdScF2CW2DxcHojdfKtWZp",
  "key17": "5UFV9gi116f2FcS9HjsRGJTYSMYrFYp2FYv886skanXJRs13pGi8srez2Qh7y4xNu9qXfnojZuqK7Qaajk2W87wC",
  "key18": "3xKqhLHHZfbS3qRxxG2HPeMvzDA7f6FxDm75QWtGn38z9Eg98zC9iMBSWYMyF5GxQh4wgic7WHKHus2tCzYKZY7A",
  "key19": "3bRfoP77xTKhv7sGRBTLQK4s5K7Ds96yeZc7NAd3Pq4PrU6wThTTUC8mff6szfWsJATQCuKrCaixf7Z2Ykjmiy6P",
  "key20": "39TGEytqNvaPtFFpNDYgkPVnABUKneYFEPPwUFRNzbbRGafT8ZitR7gDDHtje1h5e5T3Cwupx9YwRjYe1ty1mHA3",
  "key21": "5o7RYT3uaRJnuGxtUCULqhwsZys8SmEAbYT72vv4go1LxYnvaHTo9tR1z53UvZaepHFzfVbCfFawkiX7fwc7Upv5",
  "key22": "4a59Nz39QGDA6RKsEwXEcMnyfJuu1BMMuhUpsLFr19ewcET8F8ryRshX38qz2uNLHJ2gWj2Ub9pkzw4vnU4Futfj",
  "key23": "4xz7xF3sFHW7edUhs5xpxpvz1ggbBScw21TRzji84VZ8JwdzLmQA5buG7oQBs89f9R6HZhgDELFjeVZLPwtgmsAd",
  "key24": "4zg1hQ6Koac6Y6Sjog9B1q6Es4adUscddH6R67pDbJiGkW7QFo5otcGMo2STkFTiszeKXgs9X2mTv5A5ZoPvGZLr",
  "key25": "ei86WNkj5SZdGKxmSAjaFHQQtF57XmunLVTF9SKd3jpi94wrPFPwYX7ApbDiEZTtGCoFSeEeN9UhbQCR6TE56CQ",
  "key26": "2Yu6YtJN3fiYfN8aFSYre6V6aaY72cdprarJ6Pk4b87n8SUrkT2QmGxoGKx5uZu4A9iYjxwrVMPc2bxrUSw11UQf",
  "key27": "3w1UsA5EshzAcFNHW6taVCYsVwWzLoeXUzn7494jP5HPKBfYdMjRCBb1RTgscrpJoxgGHsRaG8JWf9M5YpkFiZZr",
  "key28": "4CGMsZyLRCi5iJA2noXW8XeRnKpzzQmn38CsEKaFv7D2THN2EsBHWtaghokK9EbuUPhfjLwzqZEwMUnjxiV3q2Hm",
  "key29": "SY5cSChAVruRkCx4X3yW1J3J3wwH3ZseWrW2UXPzTuRhEmfund9Hwm6kVQK2wVerb9UmP44K8saUPVSmEdacJEr",
  "key30": "tj6ivuAb1aV8nV9R6aPoPWhLPTdjsiLWD6DV6EarEZHCQE9GHgFznqyea76BUVFvEDAsWz6pnz5VQ9B4jt1HagX",
  "key31": "4gBnqh6fDbAs6CQacMw93XQNReb9A1AnuHGmEegUruBNqBb1iA9S3VszEwHsJtQgRgX585gcwnQWZSYqj26yyahw",
  "key32": "5HmQcNWpqMJNCh6KgdRku4f9QostjaWhpMaK1MXPPDY9Kt8Z1QKYkdHENMgBUgevwgRSN1TTnTmnhzsTobBhg69w",
  "key33": "2yaTxxqeSyHCe8Mx9FwDWH6As5QvBNG3ZpVAdaU4QebHnEqmM37mKVChgLddYSknbLZaWQvitPAzmHFtbim1VNn4",
  "key34": "4UgS5cxDdNSvgsYEnMVQcAn6umCkYYHtzvHBR2s3ebmeBn6os9vWhxAqjK7rjnyBHJkV1o3uaSRRZ8uWQf4wT5z9",
  "key35": "4RMthMwcPXHuPX2DoDTSaLUcJrAvkbt97gmL5urSh5aAGrtHRbYi5MVn3iwEFQYqxJDuiJD8Z5Yj2QLrHso7dUzN",
  "key36": "5jfxFBM9Pffpgo3AiBo2mLPdGF6LhSKPyoJRPsNt9DakLU2SwqVAvnrcVPaVshp1mQfFV4jGaCyX9rkssQKTmDBn",
  "key37": "593deseZkAY3ScPqe7stqNiLnvPY45caGDwASTteRZXr7Jos86bkbrdqF6wyjVrcWjQYQGLHHtNV33GJ4phwqmx4",
  "key38": "5tRoUrvXfjxJWe5zzqv8Qw55yMnVVxXUoEdqUGGVPZ1JjkjMi8r1PYuXUpWisVMWiKsNKNZavPPMoNNx9rSQ4Koa",
  "key39": "2sSrK8kmewtKPNn1yNNXceSVuNQTWj8YrnoUKeaKnAPTZAuuDvrRK6NzhicU29Cs4LmKX1nnY6Z6rEXZYPaqpLDU",
  "key40": "23P4sqHMwMjUfvPi8BRAFticPNKjhRZhCVi6ZTkjonU46jdaA5dzXkKVPhK4A9TSHCs4PCG47JBNhLGnCChkdJez",
  "key41": "3nE7RCSWNsozdiUUkmLVMmyxAjUzrLLbTDQ7GjMvA2xJkVHE1rSg7TpvKabEDoLCn9QTPi1bgSK8Muv1ngVxWqki",
  "key42": "2sJmGB64uX9WSkD5wmgLzH395hp1mmDJrPQL8bUA2p9JuNaUDwNgWMDgzYujvygpWD1Np11nxWsfdfrDctEHeypH"
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
