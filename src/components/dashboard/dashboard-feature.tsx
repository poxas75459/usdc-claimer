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
    "2MzTWQTdJ9Ru9a3Zq2pVGEc2uCboyzwxjsg5auRELVoDwAoqV2o2S69ykNpeYAYwwHP1oxXRKTKPoyx4mHiLq8EN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aiD1o3vHviA5N7bn4h4tZwmwZfi5os2Jo6JdT9kRBwSF6EBPLKm7dcxQSQoxwJ8hrWvvmyWGLrkKXQPNvpy4ban",
  "key1": "5nWATmFRgav31b3pfKX3r2bVJ6YU5zPSiGH8sirbcLGHUTxG5mombNLSoUjrGFSUN62v9KQhhYK2SVoWbjLy54ez",
  "key2": "2yrtmVsbTNhokLXkSotVxSzsxuNr7xmPWH784eJfyGzjuYsqcU15xHPGdqqUspesZoB9Q56ckwyuh7HvAujznn4Y",
  "key3": "41ehNbsGqhBb6phcKqoQJa3J9pUfWcynHBs4s6evV1xj6ZCdp56wKChzDrv9ANp88GVxTF42NNPMhotyLobSe2an",
  "key4": "bqTraRcemstVWHvps3ngGJRV3oNS3Pfs6YmvEu64Sgpc4yNDR5ENXLGkTfdmN3g6dCWNBfugWRKzUFBkWvxUe3D",
  "key5": "4SfS4g8rb13SVCnZCysk8ihDJ6NFMVZvb3hu1fG9JFd9LEtFBoUVUZgeDagDxgVGN6nBRDuyXkz4sKK7nXoKDirm",
  "key6": "5mJyNUrTHiL1NVj5WRkWx3yVu1QURaDVYTRHcPrgijQgAA8rQDf5LMFpCTcKHvTTVvYgAyFfQHwn5tEgBAirSGrZ",
  "key7": "3sSH4fwvgixaAP2bJsVrPy8EFGs2hV9fkkarJRqGbm33aSTybgge2g58cgwZZAtfNwTbtHUBDEGhRmmZvaTUkUsu",
  "key8": "4PhRg8GBDp8CcoFDz926nkHX5iuLzawr8hohpCoEKgbhHxfUWHuM3cGTuZLrdXkEnrKv3PDZFkcPvKgxZX383XUm",
  "key9": "4sgyNc8P1NckwmrbdY4QSGrmCS4bs9YmGZ12NhxeuG3ng89KueGQXXzRGqq9oBbQdViapGd3pBcBVfGmPGeHvZvQ",
  "key10": "4B6ZgZaMLWs3QmHVECP2ozjWmGa2m22zXkzktCdhiyCtY5PXFLm5JSZYV8Bn27SojPGdHRFJeu1Phk2cY2gYnXmk",
  "key11": "3rmRVr3PVRU6D9EVeXfKfeG1C5ChnxrKYTfxHery93KFmM6XWMTdZdhz1iZ6LKpaCtrEu2Yo6xQU6EPUAhKwb1EW",
  "key12": "4pY29ezjWTrwMcTR8wRVPuyPrBesgvWVzaHUYzXm5gLmPH5PZ7jVBZoeMSw61xYLU4EsEdeWNma2wvfHf3CT3k5R",
  "key13": "ZNwxE31CVHBQYNMAus1DJQkm6nuf2713MjTdeMT29vRpttXnJtkwWorbmyy2DZZLaeRxTSxGKVN27rxCbS8hKiW",
  "key14": "2y7gYnbhjT7HvCtHWj1Zkzg2ZjMe5T61meJQwQkaemJiHAjH4L5ycUMoHeQtRYxqBLnMa1vNcDBXCojpD5wsovKU",
  "key15": "3xnEf1bVSizWt8BPJnTBntVHeiLVyjQVHQBqCmiL9kNyKb8kops7zP8Z6KVjEPoxxssTg88QUGzhXjK6cjYtnzKy",
  "key16": "DYntHwg2sZzCPdfB135hgEMK2LyjgC2njQ9YaW24h8i5Pe5MzGhHvzZmt9Fxid151yEyAFh9iJyc4RtZXrvaPFW",
  "key17": "KrNa8UYfMwgS4E5tzE3fbqSL4YMjN2VkZgammYGg9KR4ezhZzLmKon7K3N32PY6ofeY4Mca7PHYAGBFDM7osDhp",
  "key18": "qoqgHj7TmSvBnMr1MmLrykq5mzKQLm8L4sXzhLnXvVZBH28Js87y2cBwXySLD6FFeCg98qfTXhTfM3b6uksCDjC",
  "key19": "4oAD8BDffKGmpJckH24avtrxtswERNB2zoG3hUutseKJgcigdPPzVdondFhC346crUe7vEquChoreP3VuFyd9fko",
  "key20": "4HpWPUBjQaAZidM2xHUpEQJfzzxrhBgBEyijnhk3mztB1psRiXj4S4nzfnKZxWndMPwmvNdTQTtKrnahoi5ocfhN",
  "key21": "3rK4zFinNFkHerkZPJKkk6NL4xrAjiZZKpqqTsLpHEyFUi3MMWECtQTCp2E3iv7VnjpSG67o3AQ5LJTgrtXCRZez",
  "key22": "q1rp2g76BSrTH8NkXZ183zVb8M2H1JPEacbUouniwaPL7R3Zs769J7rrAGeH1rnyRspzK8mpdox4xvVjJvBSE9U",
  "key23": "Z3Ejz8wr5xD4vjxcvm4xVh86Now6VbCvprWJHA32GZehCvT5CEAVypvvGmRw2vUaRLw6qswGgora2JDUsxU5KM3",
  "key24": "5HhKf6DRDPKaLUmAxhNW9XEBzzkkH29VgsdG8NVnrqtVnnS7p8Xm8NQrp9zTZcDXXuqD3785FKJnyAc9BwGuuJFw",
  "key25": "3xhdLLWvDJm942DpZwazTPFqWHXqWNPRPAN8iU6JBtVnSjmyVVwEQ92LfvLyP4nk7MxvtnJWrZqY3tTV5yQWGmCT",
  "key26": "3xHQqsj433J39FN4DFQBsB31dg3d2gKoQPYQPBmQ3Q4Krrff9VnG47pMaKRqhXWhR1TuZKfWqqsfvPPkXxhccYNm",
  "key27": "5pL7NhYsiFAFZbeuNf7iKPvCsq3hSZSr4DtmFbgsZViyScScn3ufdmkEQmScoDLrrto27qdCYmcBEV9huAPpFzop",
  "key28": "3kUcLHo2KqutzVw3EeVmUiHrxDAquExhLTnBnMpffJeLkNewwU3iQ1Vwi3ioXprqqMiKcp6qbvTXJuG5rDTCjxqJ",
  "key29": "2Kb5bHAGVHecB4CgMHFxseTNFQryRdRqqAGVJbonZr3trDEzaRTrb3PBbU4ocTTK9WJMDm46MDGA3BypTw2CdUxD",
  "key30": "5yPwYnnTAb7Hi4wmmQgcyLaz9RkmAoAG2f5ezA3dEPR6v1Thn3RrNvXP19Atfi3LRk64LDRDAdELwG9sSvo3Yz2c",
  "key31": "3UNgei8yJhysF2akufVSLYHqxPezz3rGmCaRXEEGzFXjFjTZqMyYKtp8LBYwcmvA9CmuFbKvN2qsE2b7fXYrHYhr",
  "key32": "5gjpVm4fbvL63ch9YbbcGPG13ALBMHps1tgHbQjBHGcUJbHCBQNEtsVakq2R4GZmBPvr8APnhC1wkBaf3VHbceAB",
  "key33": "2L6xcYRBoEAuD7P2s6ZoeCNXmLMWv2qvghBDMWGk5BCjSSbnWrBwnZ9GgmKyYpApWVocDtCi2U8vJd4YNn73ZNgA",
  "key34": "4YF5PX4a9HbW5sYF2Hr4d6dkeoLgUZaRo84TFizbnDj2SwGYY3VYL8A7td55xQz426pgtNKmFMyUzbM4ngJyWV4A",
  "key35": "2UP2uHwWi8Ng8wahiiqdetPe2vPX724g6WVmJEC6XMRTbZPgyZP22yAYioTxzk9RdarnnwTafqep66hbxku5i81",
  "key36": "5kPkVoUzMJwyiFowFs3w4wcLCYf4seDbJYWU6zjUdbjvjJayrg4dAqQVFqXY3aNUuo3YY1bkznoVcUAuWrQQq1gJ",
  "key37": "4XzPHuekbvJhe7u4Dz1Nu8nWQNwFV5YLf5qjvv5FRvYToSUmvc5cAd77QtWUebGbhS2n8Mq97cUdom4cSnntAFCy",
  "key38": "afbbP74o2vaM617c8uZxwyL1krFsvZ2meoCQPPKMJdh5UYsqRKDansbG3fpqqms5sLexp4g5DpXM684y6mUdNRY",
  "key39": "2rWkpWKGn8KJVLiinuYZ1WYZTiVKdHauE5H2FxfJqBoF25QQWyhhrHSCPZi7Tr49d7XqoFuHnft7ErKABLgGXway",
  "key40": "cxRLq86ZhCbZM4hJFyRcnqjsD7pEZ7RrZN5hGVJmsuGQH8L6B4p4PyQBC8aUXLVWBiC1sN16VVp7mhGo8JiHAYX",
  "key41": "3Yx6ApodQTnDb1MQhXmcHSViu9MnpPnUuh23g5LryL1yi4QPex4U8Cr77fY7j4HHTyEhyPpetBcMu6tWKJmhrVdi",
  "key42": "5jb4SgCJ1ypfE5XeHKmPysHBNdXEszcAmPfGqpUB4UYrETqM5bV6cBQGFSjZUfJUFdWaULapaJPHjgGoSUEhF7bd",
  "key43": "4ZRYanscbMNHz3TkrRu7VJ3QHx7DhgisuRaQMNvis4UhxypoHyyVbMPET2fFqMXjUJtzQjeoToABVoatBoKWhbo",
  "key44": "4tHgAbLMGXpxVwG16NUXz7aq4eUpUmDVqK6bSjpa3Lba5FcXvHspR6huX8cN7tPwofQzz7n6tms5SQpxdkmfRi9w",
  "key45": "3TVyqzM4vz3P7s7qtodYZcaQfWUT3N59GVqU45STNBJRrrfe8pwBTKEq4oVrSYLvtejjahV3KFJ4tAUvs6rL4YQ5",
  "key46": "36RszYaU7JzhkpPLt86SraaAsa6c735Hs3ZFrM6cnCZGvEvQEUfabp8y4QoTpf8J2XjU5K7DgiLfZArxyae4g9AM",
  "key47": "2LceqYM4yGc6vKG14gVYSYBSTREuWHsAwaeQg1UW7rYLwuTFgGn3p43TeF9fuvNAv4Q5gszvynov5jKZK1tG4V55",
  "key48": "2fUC2Vqyx8WLSozEAL9ftHbe3MHMeUaaN164jenmNpVxZxpRMQj2Zc2NErvDeDnkw6oyX1hB6vfsEhtSC13uMvha",
  "key49": "4Y8tkpCmWdnQcP8wz8M9bH4dFSvZ4rGwmofcBKtqqEDDw91eDeNYiZzMs4qRnA5MgaTgegddQbGqAfEZsWQJM5E7"
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
