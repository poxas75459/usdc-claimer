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
    "2bC9sFCJxsUynChsejwRAX8fNw1fbqRE4HHLFZdvmdongbBmtnpfSE5r267tyMJx7ka4QqbtQPod6J3MXqfBLXm4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "F1GF27Q499FbFjEKFSGqwPsB4znBBzabivVXJ2h1Zj2YNLeoH5yYkwE3j5JdRybbYXYFCmxmeudzbdUeVfnfZFC",
  "key1": "63nwFxN4Nf6dJgNroiCJPJPGWAaYTgu9upHXXdQ4iJWuX1Yp6STWgB2FUk3qFW5J5desxUx8dhD8Yo91sJT6PGqb",
  "key2": "3bDGznQY2hGZAQmRC9V6t74uX7QFRYzFG71kxHDCckpe1QxV1tFSdgHNS6DucuDiydt185YGjJ9VvrGk5tdpaCK1",
  "key3": "3oTGpZ859bRp2G6tKTdPGGUiK69HDvkvtrK54ag7zxTLHanD9MQwVDyxmzireo8RmQmkirsmkhVEYLmxo7ZfS7bi",
  "key4": "2mAgJAtkBFgqYmUxSC6JZxKNEniPHauFFF9F4VmZpTmyyv9MKKpseTygAmaZr2fCXE2YAKjoLhCh6jB5ptk5erPJ",
  "key5": "5xrHz3y9MM5QmujvRdijVbVhZKL21BUPycB9UrJMAeCTWytkjnfz7rDuG33Lo9r1rZz5D5PmMbpiEFR9LJZPRCwX",
  "key6": "3EtMjpLHjwTqAsSHfneQi9qPT5H4KU4cMSNQwsdLavP2wbg2PQowWHimXvDjtaMXoNHsr9UfAhqYgeRb3QRE6D4Z",
  "key7": "phgc5SCzN16P5ioxcxRcJo5Dfr6PdwiRcKwdbomyhQ64mUYxJNmXfx6Ddn8Dfansms1moZfHN9kdZhy2TyzzohG",
  "key8": "4GdvdGBLAQiXDbBXYkJFjG2gp3BtanYBwkvFR26Z3zApuvxB8buPiYvehRZij4za1McECctA3i8u2hHEwqrMefEz",
  "key9": "5ucie73fo4PiMuAGmSKHPoEvqvV91zEdc4JHR3Xo3f8513MdhySfunFgr8mgEAbB3BTK7Tp4QqHStoNmNC7kLYxx",
  "key10": "5PNRgZTxa6BVg7uyCrP8BFKbDQrNz9h8vxgx75K4pzBSL246Nh9VHdTnotvjgzaUGAxTnamjZ1Qd1UD9tW4sKSJ6",
  "key11": "wP1Vb9LJfAgBGgUHq5KegVz8AqrJ8J7Zm3JvELw63rfPArqvgF3n9aDfZstACi3yr5dpJwSxQKsPRXp1qtBrU8o",
  "key12": "5T9eqFNm9HRHPy14z4zxDy3isMoujR8CYNpqdo9gprfg1xfVqPZiFJ6xqSKfKBKd2BkG8Xgnh9viHAgVxq1MxuLP",
  "key13": "2GQZ541gANDp8fAcyLoGDGP2bkeQ3QcWu1gbUPKNJVekqgHbkb7UumwA6sVYRBVema7tB8o5yBKEUu5nzeQrzBYN",
  "key14": "3Abb7675i7f8AeWRda1TqrCjJqeRv7yWiX2dYYHsKFrNgv1C4Ph7c5rtvYgeuzasJcCEznWAiPFTH3evmruYxscn",
  "key15": "4BGuUCNdq5yFLgRYJnhwgr2jTn6U2zw8x6JzAoFgudYCPfvWiuiPHPvobr5fpHD1jaWN4JPGCTYDh4rqofnQtxXp",
  "key16": "4WafcFNxSN9MN1J3MrJjYCcsLNe4jdghrRBA3y2xYDcrUtrWGqBt8B6suDsQcHdqJyCD4V7GrvV9eNg7zdQpDg8n",
  "key17": "KHpM2Ye3hN95v8SAujL1NAX6TijSwAMZNFq4oNVzMWruMS1ty6k8rVyen64rWY6Y9d81RhPUfJ7Cps6hJg77Way",
  "key18": "3xyuEsfmj1mAHt1hytEdTzGG9CmzswJdxkBCztGGwmkx2Ja3UkiR5VSmRJUQmAZD7vfXJ8eqbHVUZwrxiVV5PQAq",
  "key19": "4gr4KuCqZzMfNR3KKPvxrLQfTJX7cvi2p3ibxbQsNQMb9gpb9gB1Z7hzgyJuUkHqm14jz7tpmzzZzDYm7JEwzqaw",
  "key20": "5csfSruHPhhKwunTEW2GpsW5zZedmLs5jPwubmR5aZMQut1UWSma33L8zwjHKiLSEfnG5LZux9nZHNcCrpTbX6u4",
  "key21": "61nVk6RkadJh1ccds6jdrpYtdgoD4YqWQmhtwZPom7goMpTEbFnjsSCAzfxXGdiTzQLeCAAipMc5nxHFD2SCZmHf",
  "key22": "W9EyJNx1dL8B34rb6gj31dbesQhJ8Bq9VdhqEw4pRC2hgdi5DtVEsijqAHxruTfqLepSq4vaJkMmHg22tW59YKq",
  "key23": "41ZvtTG6RysRmfZHmg7Rb5VvuoLn2j3ekgv74qVVvXSLJrVrsSvZh5USQ8rEAU4vbmwMWZHC6sS74w8ff4syfv9P",
  "key24": "E4q9ZAsDyeoSWy7vfFWZKs2rbT9hMGeJ2Begpk4ANc5pSUqYvspfGhDWLsWbnfgr3QSiLfd9T8wQVuiDLdcN6vz",
  "key25": "4eScrXxXJHVK7USZ237vq2veHmh4RoCqGBFftfL2hRFiP7C93EVoPtmf7UwmaPcGsSnY9qbCvArdSiGa4foEBKkS",
  "key26": "3arUU7jy21rqvLkQxBcwqPfUHyUPMe7zEB15AYs73VMUe1AmLLZ9phhgfur4gzHBhFjKchnCAGFhDWPqkzMtxgSP",
  "key27": "3BjotvbGseo85pCQfhUStXtQqu6CZhKeyXbGfcbUeaEXERpTqn98fN2SRc6mnTYCWq2iwCq6MHsGv91NHeTYKjLj",
  "key28": "388pQiBYttCDVyL8akRpGJxDaXeKjitvVnFzePanffrSfWbnoTQTsCN8UwU72L7ap6ySmuy6c2u6A3ZzkhPMopD7",
  "key29": "3X9tabXRGKigZtZhwUqf448J3tsx4cD86ZxG272VJ62KuG5v8rWwgoX8hNVQ5HFvSamzLTBrKaKerZ8rbsFshdGd",
  "key30": "t5zksook8xYp2t5xooiWQu617niMTqNPqmX3Uc8FUFz7XafFJUQ883CWY5J7gtnsv9sVrPcgBNuYjuCFga4YyZA",
  "key31": "3Y9jB64dTmrFnJWzKVkg5vRgKK8MQnQBVVjuS7cS1Np4rC7fZ3c57t3TfyWNv5KYFw2HSbtoYzatFAGzfd4GbnjU",
  "key32": "5geNydNfruwuhnqng13wHTqRpwrD7KVX3KGmtBBQcQtsQPdbXEHD8z1jYRRjdt9eNrLXCf5BXNGpS5ZzgbePtCzd",
  "key33": "mZjGFeeQSZmwEsJT3jNLF4KQiM84i63NyAd9N8gMX8RWcYB5E5k8Mvf1LJDa5mxw16FGb6LqaQ4nVK4dCWi49wx",
  "key34": "3fZZVJpRuamaqiXNjNdLcp59xqj28ReRKMdDP7MzpsnzsnVAwg5HLAhu3FKaWXMxirjJGNmjgoszEsp7SXAC6GhR",
  "key35": "dC4M6RQo6egfTYRjyHA6Mz8d4iVHqjXFcKiVEPMxKCwkkomE8QdYAPJjHup4r6trDCG5uvuRjfwYZQaQ1Sksukk",
  "key36": "3esW4y1emwp6gUJEmmzCcDbLZpHsvx28oQJcaSSmci6fgqsWtib9xJMmHPMW9xvwvzUX5T7QA6GbJhifvDdNDPTG",
  "key37": "2HA24koCxi3VKB1U88STRrgFX5dmKttbEYmQ9jmT877i7eiNrt6Kae9Ey5w2SyHHAFysCuA4EnxAoPQEWPf3ndQH",
  "key38": "5vmFWCjRWGpNuRUsnrVwgqUKqyZkp7dXxtr9Cvwxhi1GP9zsBRgMbUFs4UXrqCj2BwYbk7yuxRY1PCNWDCSau1s2"
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
