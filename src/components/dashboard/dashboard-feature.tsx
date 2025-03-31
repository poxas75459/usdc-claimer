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
    "313b6AbVDpH8j3CUy9CBzJ1KBQdqiRM4h8SVHmj4rxjuRGD2giNXopduyQUmY6d7qtZYWyNpgnPigJh83eaacV8A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iZboJpWYf7qJSM3RUNQZT7eGNGmvKH9GbrQj6WruqgUZiCHhxjBYZtkqwN6gZUA4c2LBVHJy4ZFyk58ryTpzUzL",
  "key1": "3op6CwWR4BM83qMef6WAX26zASjMmygFBSjkFVtM5ZfyUFK1Ev9VYgLWM6WyeSzFtyfEHsy7hkFTfRg8KbfjvZqh",
  "key2": "2ngGvsimrb8Sx3U8dJwfDbf7JneKCUS7igP7HHD3uLg7muAVjKNjKxJqJy7he8xtD5oiFidYSJprZmWqvbBuMfZV",
  "key3": "AKAxD5LYCWXUr6wW32gGN12FQMHawkgi1qGeksLYpBgEaod1mqE3527vNiunA6kPdYUE2cXFWCnymEV1KrBNudA",
  "key4": "3LDt4LMRhnKWhhYrQwTh8Dv5Zm12G1jNSzK6TR33kUr5q2bbJDwaZysL6CedKUt1G9oA8wAQEAAz6VxQqnHrPqBi",
  "key5": "4iQ6pRZL4xSugUo1eGKEURSTL9toE5yr4L6y1fnLwPfANxsp6Q6VJC4DJZmCE2Ktz8gKqaG2b1T9pBsAS9hPrM3k",
  "key6": "3uVMEwZ9gXKVTrSaZFPeTY4W2i2sMFo4HQfTdZYYb9gmYTMNXVPFC8CkdpxqqFkckySHni7JYgTtAsruSNQEpPM5",
  "key7": "2dGt5VwxVofQJxUydYJ4zsyjA7Tephd6W7TQFCRS1iaJv4Tp8DNXp1LZj4Rf3u1Unqk5keUfG6rrGBNnai38BCij",
  "key8": "hTbxwK62qZuQM2kNXr1wF7ijMmarqwhkkGe9f2tZ1u9vzTtjGP3aeoKJMV44AYxZLJHQbMaM71Z6jEJ4c5ou4T8",
  "key9": "3dEiHAHBkAyy7dETB5xVPABCvGbmzHshFRveDtmkVgzvT1rbkrv1DYyqNHvAZ9PSJ18jJFEMH1Zgt2xWCRp8e7Ms",
  "key10": "3pXNjt2L27AMzwsSenrs5MU9e7CLXCUDqd85MUPntPd36uyC8Qt7gJ88NDzXhkbV6me7yppk5fNFfeJUFrwt4H4x",
  "key11": "2f2g6XnsrwqWW3izgQJrPZJUxZQhzYmaUkqjm44tkz4sjqsaTGjwHjpY1Jpi8U1rznBTBEBQHzuYgzcvdYg24zqw",
  "key12": "jUV8BiKBuXTXedrbpHxmQQEPuvbmMz5yTL41UeUsQybYaRifHVgHTNuZ1xRPmVkuHTysYHxH6LgFnmCFJqown8e",
  "key13": "2JVAWHe8gneaeWDG3Dw3JPjvrHcQVHA7qybpsRmh8sVGf2uf9hQT4R6nDWojjfEY9Po5crYXv64RZpGPELSaLEKs",
  "key14": "2uu4owyS4Bzs6Jr8TBzEHifTXKxeBennAbMrM6PBvKwoLQZmeVcZNjty8rmtQH8H9pNY6nAG5GmTrW4z1Edg1rYi",
  "key15": "29yCy8kPthsz1GyvVKS6vDNi7rwqk4cSjwMJnX5buVp1FrdbqghFVUbHBm8PRRR4rwTNPMxsZz76XuPk6Vh8RKhz",
  "key16": "Co3p3F8TJ6Ekz68C1DZktjbVch3nWvW93KscwmeYfkjkGywK8JFwRtwxdXVynJFZHf79XQwBBQPMiMGRjRgGm3b",
  "key17": "2qVwNfDKR8cqw9mAPfjNP8i4fmyfhV53dfHKg9bcgyoYCxgKtkTp8xtDzZ9mG5A4ZaimrYqxo3DnNC98imzLxk5o",
  "key18": "2qGKzfEke6SZkEpDGGTcRPjaGifGLm1bx2QrFywbuGSxycdixawfVBztdwDE6m7GmCfSziua8XDs8qSbSSesfWU5",
  "key19": "2bsH9ptbKRKcmqYM4VmcH9ZLmTWufkb62RjbdEAUMVkULxM6fDNdWsaTzCNzGuZrkcnByr1zw3JWqSWdcEsor4rK",
  "key20": "4U2YyhrxzSqP4tsqLHhexdTAaFtkGp4Mmo6TTGvVcgTZi6amP5cqPKNC2U6nrAzsweggddhArPnvLxTBDLH2wpkC",
  "key21": "4cV25jGxT7s2X7ppKt1JafMkYvpMKXV8DyA9TxTq5zdJ95dEDHxYvJe8UT4p2kDaJDSVriHWTtf8BFUBE7wpeDip",
  "key22": "3hdLaU8VKTZ1LFm1GkVN4ymVyqNaC9ri4RSHsqqaVKZnZPk5RugWk7fHvMFsCpjhEWz1WxKfkn5amwZDB7LDcgeG",
  "key23": "3RFqGhm4B2gKYMqqKXBhvqzJ6G4djp4gPGks95ChXnHwp39RBoeX5eYGVzCL6c6qvxVUJhQHyFPHp9FxXtYZbGp5",
  "key24": "5y7ENNKbE7oKULDQyidgS9ozzZnCn2crvrRGLFFgoM15qqXqbxMdxv1pmBERvTwXasczmF7NjCnokR2Kuw65iiub",
  "key25": "goCqqerpnKrEyzVEZcHKqQoaU89QkwXFJ71vXowEbPgRRXgshxUofHP1VTdeSFFSTzkDvrs1i1A7KLo7tH2DiXC",
  "key26": "3YX6Ja7LB4JA4VxDsq7WhRgyuYrE1V3grFbREmeLGbkhKPKZj4L2Tpr8H4MK2i3aBiPKvSPpHweSvKGg2XRHS7hL",
  "key27": "5AxUbAqHaUdz58KJo3CUsitVNj9ueWx3dc9g39xxYxiSBUAjU9FQ83YLrPXVGPnRcxEQ8nrsbJiQZckbw7AsHba3",
  "key28": "3KbiVfVCP2XctxFzUkif1NQuriLsviKvdznbbCRuUmN8JPoMekSuaLbCzhSn8BDNG4JPCPvdE65TePH5yPE1Gb6m",
  "key29": "39foyN1DGmNguhpVQYpy9Wv31uVxxwFVsJW61WsRwX8uB8ctBYFsm4DKMUWeGUM8BJKGGqk8XAc9DcdEkXRNjdFS",
  "key30": "5sWbpFE2ugmNAN6a7FapENopFjaJLPruRvvLSTbmjDQwvK7BxD7fTjyQgHDrF3bKdf3eYZ6Yk7oo5vAdzYXvpe1t",
  "key31": "HHnWkw98C3YWtbGGvDGHmj6efBbHUe2n5YVeJJeuFWE2cwTqfW1MsAf4auMtw9VmJBH7YQQ7Aj1Xyt6Lt4QZsau",
  "key32": "2gdSxKrvA18mgThfrzu1vYYK3PJqoinzD8NpmtYpXVbsTd8972X1CJ9k3bJ7FAbsx9Zno653YKifawnWYHWSfTqJ",
  "key33": "5qichixzGH67rFkPSCKcWfQErE6oDXsU78NMaprr1Nn2MnFqcet9NopV6k9dM8Mx3J7wPE6YnGUCrQwtNbZyj199",
  "key34": "2LGqAFv2yNtASZQf2g8kSNNdGvRUziMfd7hLkgi3qmwhB18qq4oxwLJZfw1XgfDwVDBbrbqxiqLThVboUm3FGFDY",
  "key35": "3NPhqP26EcUaoZi4TDShe1uwe9fq24hJM7BHJeQfSKS1cCii99tRzWxvN1Lvn1qDNaJgk45yntgsGDQ6TqPsKMa4",
  "key36": "qvJvc2VAf7qExsX6mrpYRn4QeWnbxpoqRFud9BaGmnjSwv7nqVms45eAkPMvQ2TCkCR9wYsbvh3XaDqU7X2VGUV",
  "key37": "3v7cvNEdQrSAJ5BwewnRpZaL93TMy1oV46qFTSsyc69DGH4uM9KQ2ByX6aar32YsCnbvW4nfShbGR9Fv52CVFaQy",
  "key38": "2864qyk7W89N4gKwqdSVkoMnimFw8z41ijvHwNdEuVZAUu3jco7kVas8zQcDC3qaFxh1LcjBT9fPE3oxMrwxYMxb",
  "key39": "4eQXFw5NHjmeXKNMVEmhaAFeLaaWe6ws2XmEzUcsYUaECnnpBJDdCKS1aVee1nAeJrAEMR3nzmpZ7cUnugYxpP8J",
  "key40": "3Et3XtM5U8rHD6XRpnhS3pKhG8FtqSAy6t47NqZCCoqP98CKJ5wRVAvKxy1Se7NoKm5FYWoaAWdZy6HkPcDhMF8a",
  "key41": "345Gds3z7zdnmUak7Zngg55965ongegjWTn7nNgu9wGUio15CtYH4MHHogHGonmcemyYC74Xam4ex1XLRVn3KzbR",
  "key42": "DRnr9Y6p1xtuEn3EPGBC37N8AR4QeqsHDun1o9EfsNLCJgj3zNn3cbj7qqm5tWZcrfLeVdTwUe4feVfDK1k1KFA",
  "key43": "4zPavTKPA5FfMX2BsoCv3Pf8dsGdHGExhbNVsichZQNyT382XYsnw6bjD8p57f7BBDaty1WkZFa7ScAqio8ZiCFq"
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
