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
    "53wHTfsStjL84T6vQBj3XKKzUS3dLZSvQGBQ4WqGdXi5JVf6JqJTY3DjDaTtq8erTQzfE9HdwvfuXdNVHjnHojH3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gf7b1fVfNuQ9F9yKbpoVZg47hupyNzvMP6YJ6mcahgy5UrpC2ZPwLyrJMzgheGgafeRC3tzmQ5UN2gbzFqSYHER",
  "key1": "3H8BZdhtN2vrPwzLRhbHfmvSUsVjbvXUqPvzHD4ei22TuPTftk4xf3LS1EFfadydMs9hrzHYsbAFoNj3yB3NmGbU",
  "key2": "3u1Axj9yyV9Mv2GMUUwdGrYzYFrtdpuysua6oWDShxFNKCU8ZCgUEqWyB18rDh5DWNLCMYtJxY3xwBYqv8oJu1GK",
  "key3": "5KhJLSfeDztdjJE8UnVT2pDMXTx7iuYxxGayAAP8r2CVw1qYM6st64Ybvw16zRYYU5mke2WvZHPp6KDFViQ6Cuud",
  "key4": "3cLrKXTDNxu6rzMYRbEWPZWwLJzF7k6i3U4KJQiVQfjeNNUqB5j7xYw1Sh6SEdcoo5wPDZEKE5DL1WnSc5E8DGsB",
  "key5": "YaqH9t4kBHoVPxvXvAdUh3hqpi2eiXaTvXvkozfddpC5u7DBTcf5318ToF3wKrNN2vxX45PPscLWHU5sn2L98Md",
  "key6": "3K7ba58MyZdEUVBnqY9JMKZwJ3sVZiANBzfgsJJwnPBoF89yV2Yyez4ZBbP9BhgJjtu4jRLiRmauz9u2wF7dKE64",
  "key7": "4AAvo5pNcs1fbgp6LojmvKWL5px6iVdHvcpvJPS94E5Y86rA4H6ULLydC7TMPSbw4USLdVDUbQqnKjqtrcig6VP9",
  "key8": "25X1bWqjuNrDudi85k8LcfGnCwhh9tdWkiQyyWrMRvZ9TsyHQa51rfp2TMckzWvyLdRWvrThZiLj4V8XtSXWa7dD",
  "key9": "AF8G2AvgK2xm9LLQX9r4ji9AdKVQ43odteT19yVPfx3LPyHE3qs4wsSxGgK11iH7LUsgmTEutS1iypU66d9rEpq",
  "key10": "3WoHmBxBAzjiTghFzrYC4HPpbwUJ555HJkhrgb9aTPRD7MqYJ6t3p7WJvseGemf5AE7mjT16f1RhLK2JC9oP3Z9E",
  "key11": "646oZtB87B9N3TyLmUnJWqSNBGof5bT6AitnhWYx7gJ6SLJEZCTSwKhRuqazwJjhHCthbRKGgZsZnXewoKeEVMJz",
  "key12": "qLjnNezrguMLw5X1c2ThbYFt3YwV5ni926hHaNEjY2R91GkbegCBG7XmbwR7awCrunNkFUqPzejymdRkPFuZBMB",
  "key13": "3aJPYDTJqzLhaGruXAbAABLMrzjczFyJcAeEKFuVE6CY8DHranW9d23aW6qgJRJHDuXd5HGhE1QmFeGEPdmevo6R",
  "key14": "4EcuX1MTA1TEHqkw6Xb2i76Em7ZeXeqpcvL6CgqLjJF6NbAJDcLvp9S516isr7QqUWhs2Xg4D4a2tFrgtDh5S1YY",
  "key15": "5WHdMQCFW65dmNt3i4X8qGeAE27xbfnUZxRdeEaDQa1mKvaDbW7GQANxBoo2tuCda5S4hVUATtCB8fKZkCHKPkYN",
  "key16": "2XXRbbhLEiuA3FMDGZHp6i7MkxZWtFu7UA21AYJiKtiTQW99Wy3YuA5TpB9UxGHeNcdiuSdW1pU6VZdKfymADJTy",
  "key17": "23n5qK7iFLt3YNR9vBhExAnWvr2piL6i7hm3PhnMxW9qY9TXBYkcSp3PDs7VQd8yEpM137q6dn29V4fBnELykht7",
  "key18": "gZByat1PNjsdnZpjcvqxWogX7wJDeiXW8kJabVvaSvpN5pRNQrh5noBCD34J4dyUj337BdmW74Svxi9EThCuHkX",
  "key19": "5jUpULjxB8887aun8o3khSGH7Kv5Jm8WRNoVcPjXHeyb7spDEmYeTXCHLLJq82zvkGpYFcBmParQjFR18YeeTzHD",
  "key20": "52G6srbEV7zuUPqWuefvHawU7dMXdXrRjsNx69Rm7dme4tEesspZxKRbgaN22yKx1rqfMz5r8LgJrmMzVELu3fRb",
  "key21": "ec51oDzn4mHSbU3YemH7FTSgFdo2BpndfrMcuhxgfFXvLJP6X23up27qscMVc3rM8wsxoK9JAb6CGEp6E86y3iL",
  "key22": "3kdB95SjPmmAFdTHeFSWwQewN1wy2o2aKkwurVQPbY1kXiVBFUKmVoGCFNRkeac9WZeqXnPsxXo2PzauK6shB7EP",
  "key23": "3gJUdh3Tovdp1TEPvWPkxuMzzDUhzdyateyfcxcExTES7k8vqDoAHjWsJfLwf1gfMpjnF2asW4jN4aLiGLLPjAQT",
  "key24": "5Ejeyhj2FurfSQkEjSY8MGkhFQ58Q7JZKMdeV4hFk9SHj7GmaY88jbNhxkZa9PJmr9zaeBw679JiFtQEBnU23QMw",
  "key25": "3xS4VftXjfEEjbdnUsBhdVbAWJrAKfhq7N67J9Rhrv2a5Y5G4io2dS2hU4ZuW8iNih8ExXL4sVtRHLT7rYZsgC1",
  "key26": "5h91GbNzc9v91mrywGWrpyxj4QphD9vHcKTg4ukdoK21xrQTAJYXsrsfB2gXds4xR1FuCBQNTQZFdDWfgiq8DXeQ",
  "key27": "4oj8BSTrdC72sumTqnhkNGqkaUQW6Kv2WrrAUW1a1cm8BsxqqATkPkxKMUE6Rn19tYu8A2RnW6ti1uWyCEgXLBMY",
  "key28": "24CYJ7WkWtu9eHDFWbtAAtViLVgSve8ys95XQ47Ueb84SuyRFDMNr1scJtKTqLv8rES81bDRMC7am2ffUDtBHtEp",
  "key29": "4DoesN9P8Lmm2aKexCeMAZogyV1DojPjwNUohdr2H7kRZeqTZ7f9sYcYtDdG3xJbe5nvYn5VzwTRrf9PySHokKvf",
  "key30": "cnSDY1tJBchLZY9soiARSr6WnuuvzN2twbrwCth22GA42kQ58p3xQ4h7km8ok57YZTPD5Tnamg41pKp8oyNmPVe",
  "key31": "pVBBgqSNzWnswQ2Wz3RH4mHKe4jEWMNBzdvf1DUF6s5U9hwWx4wurLDrZGezdLeavMwXiEpTPWVddG9pnP6H6Fu",
  "key32": "yy6F7e6eE6U3guh6JWke1M1Hwbkt5uuFcv5vuNovZBHcgexPZMMvRhopiccmFvsCnJQQbaBu2J7jZKQTVyXPpQL",
  "key33": "2D5ZVFnfHES31w4tdKecpS9AWRwWZEwxX5G9GhZZS5bN9o7iDrZ4DkeQDF2ZJgqUFWyTGJsvgtoenMZ2qPKUVTC9",
  "key34": "4cH1pnnNFJ6CCHpjtXWcgipF588Rs8Ps8J49SfqQXRrDddBdbrEndunTnzNu2TT2bBVHBTX6BMRX1cRYnBXcX3s",
  "key35": "NZ5RaShwy9zXa3XjJ1hqxiDJrys1TP8ZYKp8znVNjFL7CqweG5Go2ejy8ymRT4ddUjZyZVT6kxqYTkViEWwBQ9G",
  "key36": "3iv1UArKUQXFYRvQnSVJayrmyFtWHUzzL4ABEqqkzBy94wQWY2XjFNuRnh9CdvGJKUdgti2Yw5BjRdkVWNnNBwWX",
  "key37": "2VwQFsh4V3EYfc7Bzr4XGW1S3iNosEDrdn3EQtsrvwPGMb1BhtqPMrxWfB7WTZGtED8mpiy47RbYsTvEQ4q4wJbU",
  "key38": "5YWTukrGDKDZGDVXoBnkQZFAgPCmrPqY4SB31LLzhUw8f3yPnF9gHdRjMNFmfKDSwm3Dc3RnVPiMDyvT6TWGQCXz",
  "key39": "39WSZHSjVK4FGXihzpnLuJHRaY9fSGaKLxVUL3GFmPaS4fMVajwgsqedcfWJJ2xvLqzJtmHjjbEc9pxHygy8Rk8L",
  "key40": "2PJrgXUFqRxJboD6UJ6PLYJ6zg6haer4Gn5AodsNXsyjEkVE1h7fBNpbhhAdzr7Ck9VGY1dLcce1Eipg1NUQnj2G",
  "key41": "5CqstA6c7hJHcrSLoygkppEwBtwn4ngxJHSf2sJRUC2vDBa72P7s2xqkgwMjydb9R9kLm4GvKgaR391T24KtaJCD",
  "key42": "5B7eJ8ycDGGJcyNKtqieNTsvXfvNa2XZq6M5Q78MjUPYL59gu9Do3oWrp6Dax6tdTXoG1e5hyGrBzUs4i8b36c36",
  "key43": "4PW8LAh29f8ArWa4ud9ghsVXp6jQg6coQfuxccUUG9vcesU6gkmxWe8remuGsfQV4NhLNpHAmTuv9fXUkeDcPVFo",
  "key44": "3d2kctz2o2N6Fxb4TuTgUWCoiwVsjjuareZijPUkSrBAXg3d7Tc1HPKJDJQv9xYbsE3pKVLzEMZ591dou7ZwZZmw",
  "key45": "2h6RAYVhx3Q3EU3zqkSjFPWYzNDMyqciU3ADMQJMyX5pRG5M2sDNhZL3X85v5EepTSKd8ZQJwL6yyzQLRML6dc5w",
  "key46": "2LtB9eGqNSCTBBS7vMnotUFraWYFJzUCTSMBa26zThbKRonkZZBH53WrbzBMNEnESdtH4LM8yaC63qmFDCC2au9t",
  "key47": "4AfruHMvq4siR7fWA3KrXYqV29XeUY3sGdJfwRmFecyQoG5U6krdo3QpwF4RzLWQtJEQuoNyuHR1s8zRFsFD55kH",
  "key48": "47vapHC8nZYYh7inp1NFU6ahiY9m8ysjWxVb18SxEV4gUFWaR4kFQ5ALbeSsPMKocnPvFyHCXaBsyGrtdqFWpT3x",
  "key49": "4JYN36bjaoa5uThRX6jAiMBe7QhGVB1uH1QzG9sJTkJpcpz4FZYgSiGxoGzrX5KyPx5fviqkR9Mc4VFW8CrMn26B"
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
