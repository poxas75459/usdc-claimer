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
    "58mMA9LkD7zHptmr8hRqpaHTs1mmjD9yETad2ZJi1cUckP4VYSfwJdTq5Tc3KRq8w79gJV2AT58mTyXNk1jRYppF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dG8dDTdyToYQf81e48G8HYRxbZSJ2qTzZoJZLicrPcfw7rm6y4bT724JnQ91N8FGyX1VcG3RBjAuHxJVQCKn9NV",
  "key1": "65Xi7HJuEGoWGwPH4TSJW29HgqxXiaRpNk7gh3WetmK3KyZd5AfVSGWcgi8GSZo9CfA1uV4w2dbAxMh3Kp14bkPe",
  "key2": "SzzNCgvixKQ4Aqv45YqNxegRNYuncUJj7xgc86RSDQBFKtRrTurDpdg7xR11vdddcuoy6YAmFejjGQwUBsFPJxD",
  "key3": "66HfKa16R7jovr4ePmgdZ5Gq9WAtE8ht4eFgHnAtERyzqoyvSH4vxLhtFGFZxzz2MRb3GKbmM6mvR1HrHGH3vjGn",
  "key4": "37c35Cs4QTm1ieYCXAgr44876YMfiZjmenCMUA46Dsek6ch1qURxV5TXxxv7qc5pK4ZQQfdTLeMqjaRuEXnh3AfR",
  "key5": "4w2VDwiHPPjgddsY7gH1wK9UN6MEBz3hE5cdA2RMC3thHXdcByf1X9xT73o521rUDbxdmhboFjWeryFWQJVt382o",
  "key6": "5n5RaQZXV2t3mqm14RCGyEFnKMgnWmP8GKT8VKzRuQMDo3dyEVGGovTg5LCzWhQopXNU7EeKEKiRvQHGSNjtndpA",
  "key7": "5Tx4x6XckvYa9jyg6im5vY1ixZqAadNHQ5Cvs1w73PdBB3md6ybLnEzz3CLVrRQ7hqUHxND4vbJxiU6fix78nuiA",
  "key8": "3DfkSTJi867nthDEic9235WLXh4CEVX1WcDzg864GStf7GbAp4VhYKoCqfyjRXnvDB6n25DxF5cnft9gtFccYW1K",
  "key9": "4X2R496so4xBWCASx7MDvrb9QJTFEM4gARGCBDbZZBGh2bXuZ4VBTfxNe6HCxyP7dXTZdGpkPc5nF2jWz83wF7dT",
  "key10": "4ktCBZN6f8cXxqFN7puCJRUwpobXwWzYmCSeKfgWHj7HqoWGyYf7Ev8QDKKkTbDCsbxqUkLiUpptsLXahkvosziW",
  "key11": "2bJntFj3Sc9wuYKD1KVJppsQJsc675PXSBtADTLCb5X3MZy67w8MFBMCSUydh7xWZjce9jR9FRyDasa5rVog1q3h",
  "key12": "2BhVogudsWPSLSm815rdCWSR2Tj4VcwWnXEARyUZrrMJyTcckj9E9VNk2CAiP37hfRT8h24RzpwkHBZgTB5daYbt",
  "key13": "7LB824a5S2US6fpU4ZwM9eWFtRvyVSKwyg59YQbAT4GXHmh1bSKa1ujzpKAGBtrcmxRKFtGrRLU1MZLtuSy2sg5",
  "key14": "3kXyvU7qy5SZEwWAcCGQjoZ8nC3jbPT2vbkY9NnVe8yAgDTijyFejACar3rXTw8kmh3amjHr7CrMFLxrdktDdBpN",
  "key15": "PyWomqhQDSSGwm7rZgVHzLohxD4Vfiz8bgot4HvD6MrrsStxYqZtuCCQbDWT6rov2T3ycMm1sdtENBcg6gp9zEr",
  "key16": "hCNqstZsgsQH38KvB85385ymqK91ytQoUToBvzF9FuZiZJrSCRKvhgSTZqpiZQKSzyz9V7nvGxht7xPn6ts2Qhb",
  "key17": "2YDuLTiPoE4W5Pj3KqyBcrGS16bGdM3jn4HMzvGhbq8i13DeTg9S25npha9Nok5oFFWkF7ZdDaAuHSnKe23L9XiB",
  "key18": "4jCm5xYDnSuTLNdvkz9WFj2FkkX74XPmFZLQtt6xskCQTQkJhMxXpHFwHme63J3hagf32uJpU4ybpDEH9Qhv3C9a",
  "key19": "P8TrjEoF6eLHB8kCVGSYDw4EQWwZvizjATnGuPbk1dvtQ493vjbSqC9FtkU6ppyMQsGtK468UKdYdFEtVyE7gFS",
  "key20": "2y4Lzz9ZSMiJbQRXYiVnQkrM1QhduS5GAGNEgL7WPBdxFjAxrg3izBvWAm7H7cnEGCYHqb5yPjgecn68JucbRA4c",
  "key21": "4Sk9WzDyUjBtZnC83L95RLupWEV24ETuAQmTrgFGZ4CazyEhLbeEYxaZ883fZ4P4zL4M6Ms7HtjXRLsBghv7sQBY",
  "key22": "2N9htwHpN3VoTuuh7wWBD4CT588Pd8hfQJ2QWk7g15TKkNwd9jDhe7LqGK8eWCciwTCk15jEJ2ZgBREz3pXm25X8",
  "key23": "5Kx6g96RDNb4orhVKrQdJkUmk31o89rGKEc9NZV3XnZKSo9qGdtGpi4Qzt1NmqNrTiKHGNxNW8hAeNDznP3fW6dF",
  "key24": "3wbKnvBcHEZbP31NZP7HXtXVcuyNomhC7TiJadYKyTD3ksCqQKWZa36XXgtr3s2ENE8tv5Y5xicWFydwPCyo7Ggz",
  "key25": "3t3LyqhsKmsprwUA214cgfVgs9DyrSWteSEEoFwG8rUhFHqdsUJvFtmVeM76sXDA1BGeEaJuCsACL24q9eGJCugr",
  "key26": "4p9scEM3f5QDwnrjoGmxR3LAotqjeAohBVtFBKiZC6mxketdomKqUACpBvmGraGbWf7arAX8TAvRrVPkj1FcN3WW",
  "key27": "5b3oZsCoX8FvmjSXaXBbMfWagSwHhnjMzpoeVa1RytXvV17WKLPvt73GR4y2J7dNE4E2PTvzzmi5RyUuTrNxVBL",
  "key28": "CEVWidW8LfitbZKE64tjnnH9z3iKSGuFjezkEc7NiTWk167HphPBGgk26k6CXB9kK68h9nS8Hu7pwSSvwYcdkdd",
  "key29": "5FCXrGFNPZf14ctaJ7mzH9m7pMG29DehZtXEsUAu5YLdsmbwbvucMt4WHEmTAQ6xLupqsatv1sQkwpepJT4rT48Q",
  "key30": "3bMeQS2U4LHP7GjRjU3H1ghwYHE86TJRT7sW3WpZA4vVm9FgbzsB6H7zLsyfmhTZer9iKCQJBUAsH1gd5XZise7L",
  "key31": "33Zo2GiMZjNzftVeuHgFiH4pg4vNJJWrkzcDoo36ajV7LkVbLJKYQ8QbENXE7MYT22ABN3LBKB9pH8ezM2eqbMNP",
  "key32": "2MpU7BAqfpyNYbfaqfBxH7abFq2zN49PYDLy9W43ZEy7gULVwSJhXp8CLgTHZ1vPbeVhMx2uwt12oTox24MiANr9",
  "key33": "2ko73enm2RsjwCD1ZLYDQX4Z8Bmu2to9rEBtKJWfmVfbNgLvRBiPQfeKnGwB3XXewDL8ivJkoJCcYtTpy1rWry4K",
  "key34": "37kRYCmqpUErYro7GoT9j8vDtVuGkjMugXkL7zXVvnHFptfUhVGwkamZs1QT6hWRCayGrgJwyj2G7egraB4YHa3T",
  "key35": "2HPeDa86Ww5vPpXn59TRJSBA1FC1M1Uu2mTJLznjpad5q9WRjP9caHajqeHr3AZNpHjQkDipvR56HTRWYyNSkR5o",
  "key36": "4NXVGVqf3HyEjuUANtz75s9ZgqQLKMVFTwxUBH5Y8mpC6GN16SRnoxfGvL9Uu4epvH5zyJid2wCRpL9FXM85ghwj",
  "key37": "4N7i81ZgGMYue9SAdCGHQDw5jmJM6u3XGpZaeBBv6GqvQw6zR1msSHVrtguYMF9Ymgojp5WidYq1A3kTEUjQCbCH",
  "key38": "2iZ7vNtXWnVv6HfUrwRzdTCZf1xsAXqEgBUgTNajR6Z61r1jLDXcWce6894sbmWsVHMuJ9RPEzXLcdQctgezcQxJ"
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
