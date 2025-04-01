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
    "5Eo8vhjxzMWoZBaZXC3ryR3qaUR5Mvc43PoGsc5FZJnXpZJSaWctWVrVLdRFya2cpVUWwhtZAsAYJZtKxJPJVJZB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5v27ngG6dmZ4SwGoiALTp5Q6iJ1aY7W4GanjRB4HaHBds8rh5TqwgFVRJX8AgC7YJqTB1BpdaVMuYK7ddXZ8A65p",
  "key1": "pjGyQrMWE3ibBLGYS4RDFj1FCrsio5M7SgfafK3FcsE7PwDjg82o5o2vDJfYq9eJHdo22UAcFE7FqSrt4Ha1tEh",
  "key2": "5NXb2wPkqqXjip5VUNxVX7j8CyVc7iGCnWfsev2us1zaBJqYEpooN4o7GUNvFM5YntQFB6GZMhmk2TVqFbSnkhGC",
  "key3": "CqMBrDrRCQft6RRPXc5kZobRbHkhXgYSLe5wc8pHbxKWLy5LmeyvTj84T5rXWLsjD97CaiQBhwT1WX8DZ1hXJ4C",
  "key4": "WqyPf9xgLoMk7B4H4k49imVj4kU9E4sDyMjN6j9dtRYiXgaNEaeW7zxzCy7VCmi9y4GgNTdyd9B6PR9Q3F2JoFR",
  "key5": "g55MeMJTrCSwUMNFf7etcEa4ngicLWRHVj1qYAXxdvGDbEidxHtydi5DgmvaY4x4nd1zwnD5ZfnyyNLjJs3xQem",
  "key6": "hnNq7oaEs41T2TwdtEoLaxQZsMsseFya7ymroWE12NN31Anafxnf3nRu62JLGZXKRx91SFGgxyKbkhuH2zUzXUT",
  "key7": "2jQPcUgLuQbrzQoNpwXndWEW5yTLMDjeM893TcW6AomcbZ8uinA4MGpQQoCghWbEUYmmKyCnut8vJY4xD8HUUcf5",
  "key8": "433W5CfiNnCzUjr4CDepm6edciMohuY8H3rP1n19tM1mPxhTpN7kaNNnm7GcAoHtwRTgZexe2RofAoT7FUG3iuf9",
  "key9": "5bsN8yGztGssiEqENQJatZnL71gAJvYYeb6uyGNhiYwxW6aW5p6RHWbBes1phPnm63LAHXBscpiHSjpXvDdg2uNa",
  "key10": "5zcQanS8EJ5oU7sVgf9uoKjihx8HTWKVjhdGz1mN8j83uAwHFr7E8LcknJFLT5ir8Xfv4Bwy15JgCsoWKNrcATj",
  "key11": "4UosQVdsN1FGZ8m8PGLHToLtdHjHxyE2Qtwq55GjZJvZQBbGysDDNSgcyJivJ2haCZ5oJ33WM7FmShBXH4bhxirC",
  "key12": "2jwEJRLNRVXtnqiAZntMZRQAChNULHT9qqxuHY3nLVXpzwvnQjaVpFcXCbo165szk1KFnQvcpwksgrJTJvqpfmX",
  "key13": "NUh3HitdkVsnf2GkFVc5JEbJoGXqgWkarwxmP3xLZu7Gu5aFPsqJ77PaZU11m5u91QVEc357SmmeynfCBUote6B",
  "key14": "5ogX1A2h363EqZb1jCmZ3cLEajxyGXkc6NzJdv1koJ3eDHv7t4FGNXJ1gQGhEWLm1wsdDSFQakJZfvUCRfGvMDNv",
  "key15": "29yotwvwHYsnL2LyayVaw78ETSxtWvj6pXk8dy3fsCEK9zQ2uEDEBnHAoHaxhahJ5TdsK4CNvhhohurnYpis1y1b",
  "key16": "3HCoWe8bT23QvTbexjcU5dqrCZyZx4fdAJzZr7YA4UaQPTDHvpTQevQ8qMq9ZGPjZcuuogritrDUS7enDB4Zvncv",
  "key17": "63FGkyPEAXSVhipS8BeqNbYrpvwKhMfF8TgKL1dYGsjG3bxUVhXrX7rw9JPzxJE2gZrJ4pK43K7a2B7DMiBUfppQ",
  "key18": "1uyn5yWZdXuMSas8iJzvZ5yfiupwqrYoVdcJLdSfKMK3Yxq7iuPMzRPt3CDF2kT8Q1g8B9SiDTtsn7GzAxgRuHL",
  "key19": "5qMHV6QhuuYUGMP8rh4WDWQdX56xWjNJ7mmLdCkPhs6X1EFcjE9uGjN3XurerSRm7ncgPiLuP6QU6ZNBZ1axmqQc",
  "key20": "4GKuuoFnqyDZkgsbwmuR9FNMkXgirhtAKs7M6ni19zvUhK9nVb3ag8tLtcnUULpexwWkLbYnbVHiEkA6Dw79LRav",
  "key21": "52kHvAFUBh4QR92gcCYWieKeTGSZuRfsFRy6CqKR7np7J8XewchpqFpTNKejsk7gk2aUeEmpHZVcKCJetm84XWYB",
  "key22": "5pM81qS775oDWugKZ7Y4XaEWZNpkrXHAawzZBYGJcc4eEdMErwhzDL1H7rS1Cv5yyfhxEzFY7Yd4ETrTekJEqoNv",
  "key23": "2pjy9QqTaFvvSaXi4ePY1shLAoDASWebnkF4YD6yLfk8Wj5pyUevvbUGDQp5k6fQtBMs5WXGNZhiLmjTexS4PzBC",
  "key24": "5h8ua7BR9HSKGLXELiBaxcb9VMRBUE2ucuhU3ACFpaFk9vahv5VVBE19Q42Dh6AfFwCiSS8ddwKQEbhM6XAxYr8a",
  "key25": "vctTaLhLFbznNZdyxp25m1NNqUm25iqq9NJwVUmZ3Z5jofynEP7uyR1dem6SVEbojnahak6eHoHvbp7ti7MDixN",
  "key26": "4uuWkHDd1ZRL3p8VXyedypG8oRHXuDpAywPtgyFiPkWuuh1VShEB44Nf27e7hshxoL3o7xMejoGgYqQhoerdsxxD",
  "key27": "pMW19CvgvPXyrWL1FTFXZCTbuRty2TEv9Ag3vh2esFRwJDPopmA9XDMNC1zKC3n1HiWZyMpjw9HYAWDrDrKpWvs",
  "key28": "U4nkmtdyFnDsX4E8uxY4P2m6UeVWHTdKs3VhhJcv7NxugXhdKAJLrDbGXDkvR7VSFRtL2j74UcR8qVoZR1sygWP",
  "key29": "sgPBoHBFdFSt6Uznn1WoCxAPFeiHxd2aqKiADumA437EAmbukpkXgxEGxK5xaHQTk7tLtCgXMtwjwbY8UGGPM7Z",
  "key30": "22x5Ed6nnmk7SZqjKatPQ1xJThtDK4sdXXjzhQbCo8Qfo9TWt54LBbad2Hkv9QBnKzquc7BKCEG1NYyGgtSKCe1Z",
  "key31": "5kCuxx7ftDeT3tWschTrvTQwd81ed6n6Mor21YCM1oavMxyihE9o9giyK9KEWsiMd1D51W86d9jTy2dh7oj6ccEW",
  "key32": "2gxkPFYbSibmREyjxpCUaKt2PtUJYhbCVUALEiXYUbEHVC5BYZ2iqJcbD35RN1Hv8JFCxZyYMmPXN3oEFmSvLfXy",
  "key33": "2CKLkDispKrWLnUw62Zd6JPrzHZ63NaK18eXPhYMVaScKXzPrKoVJq26ZiCiiEYV9JZoEaJPZh5yZnWibGSqaiTV",
  "key34": "3P9aS2UxQtZLU1qS8KyB4h14oVBVRCed8mS3kRxP9G7mTrwsGKYwGsvubWYmvZndBatdBp5siCE6xsvRSR1vHP1r",
  "key35": "3EuzkteJSygt6jpMs42Svug8ER6wX1Xrw6gxwMk4maauZAx2HT6v156FsLFZPGGiwuEbeGALQDo4TZ1a89nwEUcL",
  "key36": "5zr1LsVudTmXudmzp6UrGaHbKGy5Z4oLBRyDcDL9U6QKJMsFXLrKUT36HJ4o4sokYAszZBrLgQrpVTT9rU2WSS26",
  "key37": "3whe3SvjTaq7t2h4MEmdamwFyvJKLDYjsf7YSuHrHsQ6saKrujNW27piw15k1wnYBnqMTHTdzV84Nm8eX4XK25dS",
  "key38": "4NdfjviEJpjeYXA5tvy81J33KVQCTZ72qBwnWQCF9k5VQYNE34ko953U5cQDpJ4KFxsVD4WojJKDgvswCRcPUvq9",
  "key39": "42f3dGa883wS989cTFDceSoBncczY7xqdZBmqUFhD36EcngXBDrLhJfxGf1yQ37iGN6EUpZrqEpprzpaoNcxCdF2",
  "key40": "TyjHjDJunUHykya49oYngtGePTPQjU2RHQjMJz573VVKv4weThxySbaks17czBP3W2f1nggRj8qcJ33tgDNC7Ch",
  "key41": "2s849oEFtHHVAYn6ESg4iyF4gisyWsZKNipFLqd6hiSLHj7FyEvxvJexi8ZaSC5gWK4kCoW8kJzseNTyEWbo7Jo7",
  "key42": "28Sswbf6KAL8GstYspABZaW9y2AypKeVhVcVpM4cGSfJ4E3w9jJUwzrSLyUKhFbyA8tMDBCtq5htvgUsdxT8e7eT"
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
