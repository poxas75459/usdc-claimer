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
    "8Ltihs9r4TMfjio17KeWYRS6SHNgwgVUFGzLdnuCU44aLsgu2cuxhw2Z3NMEH7b4etEakyVz4RVAPjCLzU5r5oQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BEcb6wnbBppsLNaNyQuTTkS9G7BF2bthSb9Z4Rmc1AwtwQtEm6mf5xf9nTiH2LhhAxWo6qwMAoMhAhYPhSXFuyB",
  "key1": "5zHZdqkdEqsqZybXox4oTBoMis1L89JL4UK9b1b6SixvKwRihPpbBfxLS6LVkQYBecqAXBxSc4K8Z9oT2UAC9P2i",
  "key2": "5Pwch1yNN2bseQLeG2k1mfbYiBB8LEWhrKq6uQymY7mc5o2PJFTVeRHqQf7sXF8JbHxDz1fvGNJ9ZdLyv5ApCciQ",
  "key3": "5xc4qttmuw3jq8KNDiqEmKEuTHFQXuoDkYyEj6qYR3iuanhWxDr6tg8UDL4pas9GBiso2Gdbdurk3Fju37hN3AJN",
  "key4": "5qJe9ctxVieSQHKMsjm642PeWZ9PDwRLU3r3S6QTkdkyLMCWE6UJLPzt41awshi6cc8ZwUwe6jAfznk1BPjoREhn",
  "key5": "3337GNBXhb53seGA7XUgvEtKjx5NGSU1oooGth21bunPqYfb7U9CYz6DgmajB3ETWarPuA6kSHjqP93JCLvksCYg",
  "key6": "2RknSCY87F2yo3yDZsqjzChvPnwDLqF34PBW9MmTFHLSNUuupz4WwHMy3UnuoJsfcc39F6mWEwJbkd5odMiD6ik7",
  "key7": "5XvUajPDzL3RobHCe3dyqPxQRGugh1keVty8MFY2pthHVJyjb9W2dsAijCDRpiXL2YH3jBRi9A5RAr7XYc8eqcMg",
  "key8": "2Xs1pdNSmeGMUB7GqNHRp8epggpvQfu9Qx75fC5Xda6AUqMBtRpsVhXGCAQa5Pgw61TH4dZqeag42JzHiuoseNKJ",
  "key9": "43xrZoiw2w3ohY1BmvfBxAyGVudNzWavXbJwtD2D3qtt3y2ejoW4ULf8WTQ9sxq27fd21GuqrYVpiQqfVamQ8gKy",
  "key10": "2Nw2knsQjdHuWLdZVf9rSmc1iuk5UVfmSkeqXCpNqTP7Xei5LPKjJz49RtddUK48ARxygTx5VxGCjXyRJyrtd9WS",
  "key11": "3Lwdo2CW7LRhhd6spcUCmYJvXiHo5Conpd9zHvY6ap1XmNW25Nm9T7pxbuFXDuF9mZDXHPWbyTHUaWerAZeTJsRp",
  "key12": "59t6hqnqk1BLiPfZgGg8f4EkE75e8Jo1f3rQ6Kchc6pYcQV9bByi1HzBBqj9YfARCHAVvFsXNt98abd5GAeJvVw5",
  "key13": "3g4Eg84zrYJzPLhKeE1beSvhB5UR7FdyKZgtA3wGgQ32TZYGYjnUuyvaZWhxtJBDmcxoNeUh5PxMGyM6hTHoBgqW",
  "key14": "2RpcVr4HxUGxsv5iS9xEcDmS9f3PY9TAoKLgpXwir3YN46aU8DA4wgZR7W3B7eN3zTa9R3cnuNY5c32PutRUtMwx",
  "key15": "4h7ShH5JYjo88CyBSH7ri1wwxS27CkWEyZjHDm3KxkzXojPxoYMGrdTU3rcsfBdniSgmHx2Nrx2szB9R2UozDdbg",
  "key16": "3c65NTNPB8YpUVvQaSjtFi6G5d8Uvnsr36PpmzpyCNdzna69cYdDeBuPRo11xG8qjs4yeFKH17d4QUkWzpn8xFeh",
  "key17": "2ocMaZtYkm74VUMdmn7172KHSBei4PBUFAYvPJSJMASSEaem5JALjD1b98no6oayJvEynNQ49QdbHdM2JX5XKAYn",
  "key18": "28CKjinZUP5SDaeWEyJg5E9rBgt2iqbtp8cJY3oB7fDq1soKA2fyeLTFRa1VhzQJzeDr73fteqicsYu9LEmJPh58",
  "key19": "4JwZcyxa6uvN2euEftEhhqHDJjgGtUkZ9jHAh5B7kDJ4kQpm6VXA7wPjALfBtvDtCMh4mBcyZ91xWbfyqCvy8PtD",
  "key20": "3Q3BDTREo8PDUenKuZHeunWaEYKL7HEZn3beskHTvFTi7GM7M5ZuXo3RvSsVUUCVkHNveKzRWTkwnit341RTxwvj",
  "key21": "MnBK8NNuZEKk6cuTPFuPMrGW5dAJFqYpjrGNAsJ3UBauX9QZrCTfkcT27u1udqqBmh6zfJEgpE2d9W3YuX7CfDM",
  "key22": "2aVaggkoHargS6xpuGZBKar31YWfKEzVY5xFroCHa8cZoKcmnKWNsxw89qxqtb4HeubaWM9opZsb5yQS1euAhNzQ",
  "key23": "4xV678DQnWtH8UBHVmuXHnFkoV8BU8HjQh6Pd2efwo3fWGnrQvKPgN2UGf3HLipNKfaPodqQe439CKRsfvBDc7qG",
  "key24": "2cBJpjD2b2QUiGPCzwQhZAyziu49jKLTuWCdicnE9cRnkZVcndWzAX2DH4svjBJJUwPdfG1FjsH71xvX7kfdxCVd",
  "key25": "29fE32KyDaxRJghZDrwwRZfBgCXfdPvgRht72RzcjVz79GDebSgeY3k83Hpg6UW1Di7TyNtJvWj8EsZu8tCNwUXX",
  "key26": "2uXbWthb11pLhDL7a9ar3M3CN9DK7piL7q8Q7h9fBJEFDsG81i24kM72XQcfJDRih8t7gTZx8SnAzXmb58VAnqA5",
  "key27": "mhzxF917KDTTyGF8Gct5jy3RTXnvtkvQK9X1S4B87MA6PNieeEv5LPxuapjPNCVJMqdGEwLVKRX8eYxK6TxpEKM",
  "key28": "2AdXt4tZD9YCyGgSM9nHVRSS11JZaK2YbBk2HpZz6sSJxUSJjXNHRJVwB6KzWV6b3bn3Dv6CHvHqqeqLRD2nkkYq",
  "key29": "37iPtWFdVshcXr4HSzEWakjVge3RsmPyMjxkVyckMygdBwvMH42VsBgcoo5zGxihCEDy3BCr8cdENh9d6JanSUYp",
  "key30": "5mds4gBgBL3HnUXvYH38QiaJewueGfkHf9pXcxVTPoZAsvyG3oKwe4jg5D5M1XbVAcsGRkgu2BfDfpsBe2HBGn2S",
  "key31": "3oUVKc4TbVS6QetCbWGma4Z9HJJuxz7TdknEZF2tFvBje6w4QAnqdK7C41NUyrX94qFrEGpPtrLZJDwaJHfQojjx",
  "key32": "4sTpntdKqLBUk1CEmsm8X7bDTxTMVAVh5GxN7QD8VRwRFskVJ9N18Cf2bCtDt2oX6MViCuWjtVQBVqf4xioGBeab",
  "key33": "3ycm2fZGvnTD53WErLRHxCgyakH9WiSp69NyYvPXHB22NV5r9xGV3z3APpRMuPvcN18S4omdFkSnwSiiFhk8fA91",
  "key34": "AqM2bjXKKZenuwVAY1RNEq4WLRFq5iU7Bf7R2QvsepykPY5abEeCaFcVgn5E5X5nUfFhDXRC5ZAerda3cZY48yR",
  "key35": "4Dzia3KZdPPJoPNrHLmoX4vTdw4fy4BYxQ7osNQmJQietd2JZkmn7na4sF2NiY9e5cGDbA1fRvhf7UnLgXVAiP5E",
  "key36": "3V8WmK3uNWVPTUYr1no4wTrqMezaZFS9PuKgFnhQLuSqPZc1AovXFuLgsH3cYcim6akW6KEv9EC7TiCm2jp3CWMF",
  "key37": "3niBMJEpow29j4RhtiLfTux4tfLhvz9P9LnkSEm95r9CDDzVs6ECjv42k6caZmx8CwAoQM3vZyDZHBXSCQTt5u9h",
  "key38": "4Hd9asCJKmBNG5jybFcfb6zywQdL8KcJZrHMGDMmqBKp5HUNzijFXswwDzgUmv5WKP54eLTkCcrRbiEJKZsVYCY7"
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
