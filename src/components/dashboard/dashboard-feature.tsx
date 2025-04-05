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
    "4ANqN6Vo4jzCAVhVrKdWZnX1P2m9csPF6osg8xDuHFEfbg9K1gZcduZhZZqyj9m7J6mpFCVSE1np81mV4Ljbnpj3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2z32pkJcHGzcYf9qCMEShMgqXYqM6k2quV3tXBWikehbvhYtjs98ALRiXGphiqvpQqa8Rdg79H7UStLer1qsyGu3",
  "key1": "fj2d22RGueLiiJnYrwRtLJ7iRFAyL3MXVbxH13uwaS571q9ArJBVFBHtzYe26835ompZ1PXngUCLBcbNyTB9Va4",
  "key2": "2wPaHzjPotVMGUtbW1B3btDtjWWpxwUrMQhiViuGCKBry6YXPDYQRnomMoL7DSnRmV6TR2stKhT3xqwrZrMEZ127",
  "key3": "gAKvDh8yUTqtBdiWkmR46d9tZCRQQ3BH95rvJg33As97p4s4s6bpdy5JBGmz82JxjfemtPTriiffXcrsnTk38YG",
  "key4": "5vF3PbehZejk8KuKBTkWTqGAWs5DmdEkLt7m6iEMddkjTPXXd8EFmun7uVaSJ5a5GZfkhxWJyymGztdbXnaTmhTc",
  "key5": "4ELFGJ5jBWAicKpdWdg6REmZrUyFwhJ3VFuufqq1nbXBFxaYbR2yEbev9mepEFgq2uaKobFraXmK7SXD5jMmYpoT",
  "key6": "3kXx1s5sxSGtpaPT35Fk23MubspYmt7H695ejSUaCEMURSQ16qH9PMqMDjcVBdPvP9iedyWvETY64mDRoCpcFo89",
  "key7": "4pctJdZYRseSML2BXuKzVFRr2SXGSjsQFhKAJmoXh2JZ6MXPF4WwCSCjgTshadh4Q4E8LpRUrNBA1xh7JivAxJzh",
  "key8": "pXVZiCPUHimWDK9HBokZjbdw5QB7wWkX3TcKoRArUDWH1BNqUh51Adn6szu2rSnpg3y6KeECF8bzxDR6xKM4E3g",
  "key9": "2AEybaZuoLyXopc76k2XXNtXATJHh83bEhT1uqNJ394kjqgteg6GFXNE4gUfF53UFxL6qK1TL1SQJUy3dpBcRC1v",
  "key10": "2dDzxgWAF6C97NtUrojhpTQAVG6fPwgqaA5KRcJuarp1Xiw6yN5VdgG5nE7Lv6sninvCfbmjfFe6whMifJ7icWKV",
  "key11": "U1t9vVSbYLrhTxVL6D68EX3GhrNd1ZurD91GETR2ZFZfZoatqxh33K5MGkGZseJGqfZVvaRXnVvCnG7T1ALgPG1",
  "key12": "2g6vCkQNGbedj9KPMvBwUtsvEwJHSKrNk64K9E8wwTfY8tT9zfsYR8FsPyonq5wZnLWGXBkA5N8B3fJ4AwRDdzCK",
  "key13": "2FLWnqQyWtNjiELgEKhXydHxEk5bqfAQFxPSRKSau4btGvczv5ZKtSpSyijcwPHsNvdg8EHersCTWvLD2twH6mXH",
  "key14": "5WGNnmRKnnTQe7niEydXRQrAk7iGxSL6XRPwFbswJcmy8yxaZG5QshcNFvSUYEmHyqZMtb1wJRfzgwkxM7G9Qni",
  "key15": "2LsEr3JtYG63B6aZoTXAPLoJiP1kCoyXsh1Bfs9r3qPaMWLgeE4BuUbrXcu5uHWPx6TnFnupxDfyNkHDfdKscxDh",
  "key16": "dbrMQgCcwR7sXafJmNcWZmB4PLytG9DbHMqUZL4XHzKFy93SRicacwqe4p6v8q1SvAnxtGDbTMJuqKY6DgBhd2a",
  "key17": "LnBAeoGtfHevaybfvwkJNeSZ1CMuAma2zDba9om8H68gMDqaUjYePG3UJjfPD7zRASmXYxvNJDcHTRa9tFXJmTM",
  "key18": "SpkeRXnbr8UJPDLhxDbKeQEwPepMu8F88ekJxfFP18an71rrQUQMMcRWrippykSwALptxf3EHLrV1SLcS3JCuBi",
  "key19": "4duMcHMopHJBshWzmQCc9zRSrbstLm7vZ1gZ9hDUueq7QkwwwrfgcjNxhQ8RacNexwHPZMxLQxfaoQfBZRxHM2V2",
  "key20": "RrigKyPau7hibkXU3LoycMtDMdVhXuEessiMQPEtpYBRK8KoYoU56cQrFpb1aikmxz9qxXTSNXMgH51sxuHaQoD",
  "key21": "5FC1W9314qu5Xo2xhwsNTcvXrTpcTVr1MBD2uEwcP9p8MjeKaaaS92ySEuK8woU2h4vtaoE5zwFPfhs25uM8EJ43",
  "key22": "2SFfHvAwwGWFVCgqAStHPbgeoR8Zz3TkBFk2VpeTayG9gNC42Jzhrs5iD5UT3V4hmQSwqSPeBKXDGUjeY8YeXFHm",
  "key23": "37A2BEpUvnpc3LrJboJHSp9hDJWxMAs2NrmVaB1UMcfApsySBiFi7VSdpiKLt7YG8P2Pcb5rPrw1XdphCCncW72t",
  "key24": "4x2Gmx1kvKxrL6XFQCxBqVLnE9jBcX2hDcdSQ6WkfNuprey4xm4qEVyhu7ihU5iGY3dsXaTZYyDzFcjTh4fjdG4K",
  "key25": "5g7b3ZeycqE8AvWv5PLmNGVW6zURrZM7oT1tSgCb887SvkDYUJeuB3citNVXMjSfDqzARbu1nCeK1fRwXKA3bpyw",
  "key26": "2rLLaYz9inkchezE1wSnmtFj8dTFvtUbM1Lu8cLP6zeutpdimND82aC6KpYbw7427T8bxWZfm4BYxZ7jyosnGJ85",
  "key27": "5wKZyH9mBsR7i1cAqLgofvHHPhHrvhFVLNYcnWSSLMi1AGrcBLXHCtL4jDNw5NK6waLMEcqKVq1cwDZG1TWUfv7c",
  "key28": "4BNipLdVTPGrVfdqBgAAeGK5rTNG7syv2AqWXGS3SZftsYDePBptVSFnWrseMiVZktB1MaPkGEpuyss6ffqsr8y8",
  "key29": "4ftNShL3Pfcmj1i5USEq6VCxEA5B622kMYeHyY7GZQG8SztcRbQVQZxFwcD9X7Z8VCxJGz4X8bPzKha5Nu1PTUZk",
  "key30": "xrMgznsCgXCKx3X4vY5gHG9U5D4ECvmy2QXgj2dnXpmEg2yRKRPRoZS7KBAfiWGJdqRSJiXbuqi6dS5iPpVCUXb",
  "key31": "2WurTucjvQrk6Gcq8jK2fX23A1jQmrP3FQRDmeMcipq5tb3Mp4DXZszaqEUecoinkaf83Ci3NhKd5CmDACwPisa3",
  "key32": "4hfEs59R8bPWQWSC8i5yiTDaehxJm9WWnvTzY2K5EJSWHPJMLuFWjH1xEG8iguLVh3BegA37WNK9FsqJouNyAV6L",
  "key33": "4tRuZXnJmu2k8b5b9Eak4pCN3thkPJQ2HRMHYfpWf3qnVdCFkDcVNQLCge92df6H56jUrEjEAjYtCkGNBEtrBb9G",
  "key34": "4PGcTioUbkL3NJjutJ7huMqH85YnjDffYEkKSvwcbz73iZS11DDQ6E8meAQyaDLrjBjRBkE5dFJm8M5JTnxeBQUs",
  "key35": "2xaLjNonN1Aq6Pqd4o5BASjxSb2q9ocayL6YajUcB1fiuAG8FB1HuxPDzuxaRMvgLaC2mBqN5BpYzU5WdRHpwp8f",
  "key36": "Yr7GadPxWwEZBgZHKTQJziwQ1Hdz7Yj8Fc1drU4zC2DzchcsNZkEjBFcgUbBW6s6UTP6rVCUcPaKo1HxNrvVweZ",
  "key37": "4bTh9qDMbeZqDz6TZbkLu3sj3DGj4iJiUKpHbSkFEaGDKvRSk3oArpFLXC4ehBYSqhCm6vEe6R7mCREGf1JzTJxK",
  "key38": "2Eqnvm17YEWEE63n5Sp3cKCnHd9iupfbXbWecUuaXHJ3LYZVqmY8bKAPjJggBcFH7aC9HAStMYN3XdFzA6NAYEok"
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
