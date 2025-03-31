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
    "44mkGbGpdvboFiaVyhwAcUrpjSrRAvet454GC5GeH5HjNaW7xqrKrbAHh9MwCnPXD4DyovTQ5auJVCgFBVvwNcd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TERYK5rHviJmP7NPCHhd7M6gGZYf41JS8JkpXDpQn6XtEVheQaUEu6J6uwGQYd1whr8k1jGG7a7ooQw53wfVzNF",
  "key1": "3o1nFqjVVZBYfDrXqRXdUxfNrprAKfwBRCprwKY8M2Akx69kb56vtQbZYsAk1QqFJN6qRvNb4z6Wr5BbEQ5GAyhf",
  "key2": "4d9hBgmf8XqhnQB2MjyoWjimyLDkcB8fGBmFNPkWWuDmZieLNhyEZNjRq2d7EHSUYJGVYH8RtyajidbXTzopMijH",
  "key3": "2SHmNkR3bF7SiHtMroRzTwxQCEC3ACg2BaLdzrtYLynV1ss4tr3Md7oqN5gE7eCLT7SgC7oz1bhCRpWWTRGJRFAZ",
  "key4": "4r4nwDMbWfVgDXgZG9mvMUPCaW62PK494mYd86tAnFbAmykvdhXtgY73r23fVLZXRwcXGwgtgEB3sQjAecWGkExn",
  "key5": "5rnYxh6S5fHyoAf3JuaFvKvyAZsDq4HJVA2asBPdxCaJucRoMvJznSgu7kyoWqr3t2NXrM9iBfLWgMkoVkwteMgw",
  "key6": "3iWT3fdTqUvtAa9cD5R8wuL4moWaTmEuUHJT6TkJCFiHDB9SYHjZtNq78poTJ2C7wmgnrdU9PNHME7V6VeQdQ7n8",
  "key7": "2baTFSmUoje4AB7nMBG2ipPFe44rGTYGcdXrgD1LLjP5BmFZ7ByrDM3MMqNMDei7NNsvhr6xDpLKnWTMEegeUGi4",
  "key8": "nAdmt5MnxrVFcGu6jyqkvnHQgVUvCcxW9q4oY4AttJSdZAff5ff9eTYLbsrDt94McC3WU3aqrZy9gvcwXDGYu6f",
  "key9": "42cSuqprDya1Mkrmm3R4HECA6XZM2E5MQgJhBk8tnvCH3FuFtAjZ7b2BBCxkGi3Bh7KUrj7bxG3fJ9ZEzsoJxv1R",
  "key10": "2quBmnerRQ86fTWsT4aYVyRnJNGk4hb5RSVRadUJHKbfRijH5zQKyhu9iWLv9yFjhfVia9B2g7RZGveU1Q9Q1NxU",
  "key11": "3QfbPbK1ppj8F2uDCfByrTpVFX38VWguDgra3j58gjL1d4b8ZV5cKeHwEzFnHikg3zutJ2kwXDRmkqmTKeqZEDaL",
  "key12": "345KHPvJPPHGaJLSt9476yLNNHWC1wg56qyhPcxpRTSKT5RqV6ab95yZb4ybabrtxuVrqRBFFoVHhteWVwRTjzx9",
  "key13": "2K56rTMdrDdUdDwJ2Zkx4nQzPSZhVvRmM26HtTn9kSDFVJquNdQ3KPYMo1ADD4jJFEvBZMGC5yeyyiWtpWuLZWKU",
  "key14": "4N7FK89eo9vwWAMqtwN96Y5eqbZZgE7hjRhsX2kqeeWDN1wzxeosVFnE72ArR9m4aTYA3HqgbEyQ175zp74Z5bPz",
  "key15": "2xmhPYLRp5LmyMF5hR1eAnvZEtbse8x552L5q7KqGcHhEGpkp13rP7QACnpPH2KCRX5MJgtabW7feHMrgYPyCDrz",
  "key16": "461P73u9M88AEQhFGKbd2eBBa4pk1dnjE47z79oWBL84CnP48tE3KNywz2xYUPxvRuhGhiszzR3U3TFe7sWZ8zhp",
  "key17": "2zqBXURytStXqyuJr1SssR7D6JMAGGa1TBMkia65BFJTWccX4V42CRGusdTXe6VrnpQS5tJw4FB95bV73aXSmWFW",
  "key18": "r4aRJinMSJEtyebiUVvwoRPHRNrSoNpJ2e44VVApb3koJq3VWhvxpEmhfnrfYMAF57eftJNMheKhLUZoFLukkHm",
  "key19": "2tuKZHFcmLFhu4dJCSYgsSGhxuVhDuiwjXmDWE4svcmwBVPCEVJAeCUd7DZEQqH3N8ApWn14rLizLtyYetLD6p8M",
  "key20": "QobYxmKf4YdVQSx47ZKg8S5AfGH1c4fGXhX59gMwYikQLiXrePvC2EgR9wFMVr3ZBHZqMCV2nx8MYE6ewSzUaYC",
  "key21": "4HsnJwZRssx3TapgXxXCYBSc9wozrUt7xKcuHGHafizEcv8Zmp2vJSbWNLjiteuiGB3AqXq8UY5sqBivTY2WUv2h",
  "key22": "3mNicjEazjgsY7BFgL7UGVsEXCuSbpAFtLw4oGTj4EfKhWZqUj1BbUShpRtcEk5CBy8Hj9xfBTizAvD7d1FWAFeU",
  "key23": "2kVGVwfNuRutNZfzF2TV922ahKAtYhBeBLQQot1gsssNBmKh4fhsSt1mELfbjwycqLd233aqymKjoEKkNwgknLDj",
  "key24": "3hQPrubg8CuN7aVa55XnYMdWQ7sjMWKzidWVA8uPZUh1etUki6HsYVKNbxkoYYwAt7eJiYWQtGQ2spsREBTiWy6A",
  "key25": "2GBi7iD3qy2hiwzo5v52AqxXNAgPwYpyWudrsZjeRDNeoHEKEKL63u43nnrKPbFb8eTUksNPbYq1Yb7hjGkXFPrd",
  "key26": "3T2c2wRtkoEZMpXNUuX8KqHDzbW7WTmcCeKSzJQuwcyuBEsShCAFqqAfGCc3h1qgmnLSFKQpTsS7Yy3wfEVMLpTm",
  "key27": "3y5CcWDauEV28PGzgEYXN9NPtAuiuU1koj6eWTtyHFEhJkDGn3RCPWHZ6x7ULMvup54fcwnExbzAGLsmLnPweN6T",
  "key28": "53UdLfTKTdVWZLHqcR8Qt6snb31jktJRNF4QRYs7nvyxeKiuND25FPQ5Raw3WE8vz2mQKswp6JjtCqjXDP6P5wr9",
  "key29": "Vp9pH2y4gWUuBKpUv7Ju9XpwC6n39gg6Kyk7WHPjdcWHPhLmJAYyC7C1UQJe7SV8hTyKJ9rx4YUF341AUQnQ9va",
  "key30": "7FVg4ftkcfgwTVEutKYPKBz8yBx111L9PcihNSfr83YxyRxddjP375Y6oEzDoFwF8SYeZeC2rk28NzLaHUpqn1R"
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
