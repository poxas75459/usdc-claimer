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
    "5UKxQGdeoJBAi1xDV2sGHVaMCya3ZMHMD6CrhrxobrnVRYiydJvW3v5VFZTtbsuAT4F9iSsoLTqKdLxtgzwDMi5M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qFkaxgNcXeMsVfv2rFr6whDiFkP96C477rv7Zeam6TshYf31txGspAhwwhyM8SaciCojhWqkuvu2XUVRqkE9kFr",
  "key1": "s1W7wNXapbQ3EWnNLHLdGKVgo5aCbU2nEaJQiMvBfAbr8CDzW96wtKGD4pot1APHUjknJ2A6QY3anfhe7h3hc4w",
  "key2": "28ePGS9KCEjTnQ1pxrno5MJvnZnzcJ7UiAEpnLhF7MkQ93Hkjzz1LUF8MGmFPgqdh6Z3sbC4EKyHJuicTt8tViiR",
  "key3": "JeAj8RqgXaE7dP1cxhQGLpZ4wn68xkrCSYbZKB7cRQkLZ7BKGfRPdVjJeN5BgdbkULkRmDwaPojKRLBcrx2SfAT",
  "key4": "4RCbT2LrdfmC7fZKRhahc2wpaueA3QhJR1fgUheruRK5Lo6YQ53ZqU448hAWtcTUmgY4kiNyDZXFYmjWX5Vdzg7o",
  "key5": "5zv8MvvPCbbd49wJGXuyBvi936q8NSwYgHjKywM5jKEHAijsCUE3CV5bnmDGVavfUfUUicEMABFa4cH83cHwevmM",
  "key6": "FLdyGu82giJCRHibogAsVVzMbfVGyE4iU4BQYqhvpyz2qq1sThYwnnKxg3ece6SUqj7dUo6UqAMLio6cwiVJANm",
  "key7": "37QSbzzpJfWKQG9Hbbv9SpKLCqspbxjhg1xEqT1kqGgt8fd33h7paZBTsYqZ4zDdpaJVCg9cYRwkJsKJ4RaZoMbs",
  "key8": "2UnZYD1g7QPTLWZZkBid4v2ces3Joixs376DrXjpaSN9ZrwnTh2Y7iNxE8J9ynXSBHyr8ZAoGF9tbFdEtV6LJFNh",
  "key9": "3ZKJkc5PKQQ5eVorKp7wKdLuexHbEYrryjgyZtHuHap3DC3185ouG3TAgbMfxerkMdNu8M9nSiAnznN1EfN7F6Ss",
  "key10": "QCVHZNn4fXXmkKtJ2BRa36pcu7H7eFXMMLNeTjRkZitSZbuVqFL4RJXgFt2USymV1qofemBJWnBe59G8Mn8VW7T",
  "key11": "5yVat3DfN3pkwNPJHYZa73WtKcCR5BCcMoYARFLKs63GLSPcHpWy8XD8M7uC7HcnUzg9zMAmb6QU9FM51NpnaQWc",
  "key12": "5jXPVXySBFyw3QZg9Y2Dys9zmD67J6W2aGBL1ALNza79PJuZLj1L9zrQF8mQaK9obL6TCT3vgRrwcNqKCZXLStDg",
  "key13": "3ZxxuDTSmis2MSxvKxsgg4tqvqgSeWUBj1wUftJxypGNeAmLAaJMpM1tnPbbA6DwkAUMNRTZSfPtGZaJAtjNBECu",
  "key14": "3EnFXaTTnAXHHFnarYK3AWNLWp7MWTyD2SGbJ4J19sySJB4oJFLerchpccSnQ4j1HZgZZh8YoGEQziFxPE58Ltcd",
  "key15": "2D8dXxNdJLAQV1gbsSojBvxE3DfDskdkZWzK17PMzZJgNsFZWBSnuAJuaG5Rt9BsXGiBSmVA2c3ghcHzbycqrPep",
  "key16": "3ffGEaCdMnUfzjGpqoCETYetqTv8AkWZUntdxtqWTLBXnhgy71sxfyzZBAWZCGNibSk3x3xcuGFf2RvDKvZj1ht6",
  "key17": "2zuy22mEV5FpuVn9b7X2wrmXM8Gu4i9sytRgZsixL8AW41eeVdAdf8VjmURpH1v8meJMwHqgdGJYFjsdLnD23MWy",
  "key18": "2e3aLG679KxyhVnJxwiPQLRPj4Fcg4sUcVnNnKy2CEKLg5o5oUZrAmjj5mkceLuHbY7xYWVhPuJSrawkpN4oBgqj",
  "key19": "3B9F54gof94g54VN6BgTBuWFkQiDVKNdWgZcgczeuADci6qDMZAZ466f7LEhR4dhncuTH3J87p8KEkSxNQRtgreE",
  "key20": "4Z2EAWqSeoWpq4F3ebyVL4cJZo1u5c3NuEvwciFVEkJS6ARedjpv2nWMgiBPG3cJAUnopSmTjur4u6FCsHqhgtoG",
  "key21": "4X53nQwyKD1L76oQ5TQVoYsTjGqR6KiwFA8WFEXfCKTGiA33BiX4PMR9Vn8LX5Zh8kBiEKgmRfyLDmQcCuhBQzcz",
  "key22": "KtEkLyLSHxSmvePrMWE9vBZe4p9RMK5u5sAdppn96437BHB8TUZSdRGq6nbxU32FsyRLyebU5BbbiLkQDpzrhBb",
  "key23": "39bLiTCwnoYtFXZUDzCy7jdiJXEKk1Rmkdu45Qjf9kpm5jBYwiACSei1RYDYLc1qMp9Y69C9qZQqXZNaC8sdzpfJ",
  "key24": "3Ncczq7AdKZHbt4queBNkoz2JgcTys3569Q9z11BBoeCvq4BVr9wFh7skg34dRbsmLDshawGEnERSashh4f9YoRw",
  "key25": "2pgmDG9bRm6rQeJbgrQvepfd4awzV4FjAn3wHbe38vjSEmSP4LjpvLTFHoDPaFUARbXVxfWwboAPCunf2H7L9yhh",
  "key26": "42tgEZRyoj9tcUomZVv7t7Et9gi3aJu9tNBhR5xqNTMkEvtw7BE4CJnpDXzeHWBovHxnL6JK7N8xDbGMjYPHfB3K",
  "key27": "3jJJePxWdQaMLyxKMsd3zyttDC94h4Whpe9ZYuLhQR9edgrkSiejiLzNzs5Ss73nYwM1ET3nZsCoa1A8rNtuduqK",
  "key28": "2aPdmWsbjPsBbTb2LqC2vMsdbvrukK8ysBxvwVYgxtrLzrvxQF3aoxToguaL5gG4VzkT71NUk3NVG2tHYDdHie7",
  "key29": "2XU6vVB9GrUvrAFg4AXFsihRy96bixVs3X8VonheFLuuwv1rwW9hWpdhDbdEy3cAU6sbRDksCvoRnrKEwF6BtuLn",
  "key30": "3Hf3ao6qLNW6vxAAm3Qz8tdnSy8j2wPDr82idbA16hfbdWRSNqvUNx3xj7jvtzfS54eYouwDAYaG9jxSoSUDtsiB",
  "key31": "nahtcUZAvyiWJax9Yi8s9D7eiyqnDyNu8FW7FnU4YKvnqqzkJeCiDtJXZ1TQPifeAQuBTUStJpjyNw8Uz19UDpY",
  "key32": "577aZfUexzvVrd13HhRAidGyMbZ3akwFKdnuqHVkWkVGM7Xse2jfSZM7NGa1gK2NFeqm8TrYZ8NNfV3g3CE2AHwU",
  "key33": "5hXT9tVeaoy2azJnmNp4D3uhDXmDYf6SmE2PYezsWEnYXSpFHTGeBynjnXrKxZxg8MPd8cwwLdbTtq83UG5ZeN4e",
  "key34": "5ZZNZMyQdPDXve2r8WLDaVp2dufN75UpH1gFab4R81FLtkSN8jBoA2hEKW2mUexm2hgEastuqSwm3Ng9FGqE2yMV",
  "key35": "5RbnFyLGsUB3vNmLeqZp6j2QPyLNUrCaNdvLFZzVLHgNmutKYASHka9Hvkmy1dGa7mrJcbhT5YzWectbMWQFLmem",
  "key36": "3tSEAHH8JvvGVE6kM9E2B98ZY1nKpCXbShZGcanVJ1nytXcPo6QYYDyfz4idp5PQW4gTpHX9u2uryXjvhSyMgBxW",
  "key37": "5v3vUbEaeEsr5KonhJLbf3jqPPL68pqy2aACrnHHC8SYGXdfKFFhbcSYnYjcQAPi35qHuMzVRSSQuxf6EivuoGrT",
  "key38": "4zd1HvdgYekDAF2VQdTokzT5V7bxJ87J1HoGr9FP4nbrQGMaLNQG4znduYsC4ssrmwokjVt8MGGLb5s1oUj7rHXD",
  "key39": "4GeugtD5cZ5jHxshp7nXjQ3zx8RxZJKdmMiS8zpdK6WEPT1xv3MJHMs7pPrTQorXoRE17WYJxBdpRg8yNZoiXZCe",
  "key40": "Syemmt6QQBJa89AbgEf1pyCHMPiexU7ukRinPWYHxpNzWh2WszeW6rWJCNhy4aGV1Fo7mVzAGCFENPWUzKmRHZC",
  "key41": "79EMkCXrnuUHFMP5PZgvKmCdXhLA3n1hcoJyUruJggh7AWyjQv8p8epBfKMXMBc6azyaYrk3Rjaaj6jAkX5YZwe"
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
