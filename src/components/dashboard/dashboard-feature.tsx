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
    "3i11mYjDg1R8JtheGWiZMtgokgwZSXLkvJuNEdCvLn5s9WD2eEe1s7FBJdRkU4gRbXnE7MzaKfrAEuV4pMBVJqbU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MoxqYfPkqVd9aNFWpmYgraNn28VUFKxYuEVm5PZHZZQLaSb5LSc886bDo2H7AktKc5LbKsp9jgWAQhFioXErwiA",
  "key1": "2RGiqMnvuVLavUmxQLUJYAyNhXxRQrefya7rtKh7hx4pQREf7FVLkzKZNsW3etwSxZbwpqvWR7c43iTJYWdNpZq3",
  "key2": "T7UEKBPKFytcSa1mCLZKqC5MH6reD4MxvGKn2ZdMmbPF7hoVYwNXmmh8opwCMxEaSoZcoyK2ygYkbkgsuWvmcAY",
  "key3": "5gwseK7j5yW88h5fc9s6rTfW1jqVNoL16SF7f7sLJqmHoTx3JYdutYqSVFDH6S2nAtYDQaW9P5wdjaA5QML9VCAR",
  "key4": "5bj5PyrPQMg9dR4xGbEDfjFT67zDES26k856dSYJvdTp9WsDvqkz5dPBKbfUmTSPMU9Lf554mE4NbUC4FdG5HSkK",
  "key5": "4Bi1zZgL9orVrZZc3znSwwhj7bqKhdLgXHoSgnb8qBJC1u9uRLKed4293kRHkqGxQRr6yASkbB6WAFiqFA74Fpij",
  "key6": "3zAkrPR1nGFsSLoJKrB56mXpCHj9522Ei4xYTSUUjurbg3fqfZD5YaFDBhduLgNRNjJEaSkYiJXugCdLyRifk5dp",
  "key7": "3MDtCt9LMfRvkGy5uhkSU8apRQiE6L1VEMD3nyvJ8AaHASMN9D1VvQnJfzt6Ct9BQiTiL7Wo8qY8gHsCt6NvgsnG",
  "key8": "67Q2uxwTznVFrStPevzCMqph5Yi7V5EMvP5MfmthG4tXyQuM6MmNc453xrADmCZyYuYQkfnQCBsKSEBo2CCpCVUS",
  "key9": "4VTMYHkw7h2EPmBCzFbWYbrWAizbSmXVgUtMbfiKsECyhUG7xyh17r1sAxthSyCG5XZswctmJmdATtad5tchvZHG",
  "key10": "2Cy1PJFj4BEnPyXR7LezT3ZWVMPnEQSkYVeQHtkZvLywoNoySpzSjXC5jfkzqb5T76Cn8V5gCfLRkWuvxuk5MFY3",
  "key11": "ee5XBYs8xDWgbZQwxVCe2gUyTAaTaTcnZZy3fMYZojZTRRhfMP44HWGjVTM9x5qev7aWFe115mQVEAFiUkGLEir",
  "key12": "2N95ijEXd2xnEpmBYyJWbj9nWT6sTkGzSQbxC6F12JM2UcgasrP2EMf3whnv9D6RJnwJCCQXyp9BBCV5SSbGKDQj",
  "key13": "3cq1xHC2VQ1NdNZd7UedD2RXS2hHVLtmX7DeMRzdZR2Eck3EELY6Sobn8Ra5R8eGTFPbXhMAtbadYQieqif9fNY3",
  "key14": "25BxQ8frS2bQqsmktWSbVEFuQzKh6uyHqpmNnzfPqpA4zAdGGWqVkStPfKBXWqHZ1uz3BL9d6mvfbaKx14zKzSet",
  "key15": "pX4TPR9fECkQNFdb5NSs79uU4LydwoyPMRtXAwUG7dEERBhmnnDZoBwmwvVkqQGDXLyw9vKYjT3TrX9T6Y3NR1H",
  "key16": "4vAjuz1fUSuPauigeGHAAE9LAxb1hWKUHwWLrK8xcdiXQCkb5JgvfjQJK4PajQDRjwEyxdZhQtr9ZZKQVd7TUJcc",
  "key17": "2tJpkRUmiz3oXA474sEifeChpQtYJTordCT12W4AC88FxjUcWqsNoSep88bQS9JTpy9jSDJCEFFJFG2H8gZVzGuS",
  "key18": "4mYsByyJSEsx4AnGjRWHHYYh9ZghzaXxnDxWkBUn9ptdoe9GHktJ6yjhQ4giQNev5gw19Cqb2C6WWYpL2rFRGTKt",
  "key19": "485S6oXN25X7uQmpyjPUJKtSeKbECcC3NC8nEGEiXAXQGJkDxPGgfPkESNnpfChhWf5foNQaFw6q1iqWFtryyAJx",
  "key20": "3ZBKpxZ5qxycat4UkCBTDpqunecYTerueeL1DuzcQEUQoDHiJ1VitNkcJuC7CNTHwXc7dqKkVeJpfP4u91YDJYxN",
  "key21": "2KjzZSW7b1zTXpE73EimQyjYLFuqo6q8WJUHDTqejA8X2epgzgvN14kzqCd1qm3b8Eyfa3EeX2w1x1vBxBnZpJ4S",
  "key22": "3RELMmmY2PqmjmbhpZx6mXMVwg7r7z7g94YhDk1fVLDqoayQafKnoR2UhAHDyiG4Fjida2V5L4zpmCAqBzYEYaka",
  "key23": "4C4hGABjYvf7XHLFmDPcGoTYZfN9HnZHmiMJXi3bR2tyiP1unBaVLv5JnMUXewnE4KiV4HDRipHYaYKdmDgUK1ys",
  "key24": "3WmqtTNNhzBk27TcdZneEfhKss2QiPXhkwPwB4XXeWxssEQcykyU4FpvYzGpKqf4PMWL4fbs5veZpL8A3kC1df7P",
  "key25": "3hU5zyDRSCuJFR3q6YadqAsyMHRPrdJGfBaMC3EaSfuw6wMwBEA6kCC6Q99Hxj5F5VPSptF7NXD76uCBsRBeio3n",
  "key26": "2XASWz7b6JAT9MxKYxJex6cVWEtUV4wgx555T9WLEAx2ckyQ9VVaWcY2TdnJvEkEEZjbzDJkopcVzU1EQLaYWNGq",
  "key27": "4Y67A3upsLvBumonUoznnqtVt24nHVkwGuTLmvEmGrS1sWjpfM5TAGAtrGpsadi2diz1u4EpxbL6DWHf3THRrC8B",
  "key28": "N24MuD66A4y4gxfsbjivWesHSZ8RUwZjqYwSR3WNQAQPyeREVLkirm4zNSgi2JrkTzc1SAMvRDwUikagd1P6nZX",
  "key29": "4BbaSLwvu27Jay1FPh1yFsrAjB5PdsaS9vtjdWY2D21ZNi5oNYhFCxCAbapUfPN2ak1ojbv6FCJLJx6jxDFEXztW",
  "key30": "3wk2Gn3GBL13Fo94d8J49fgvmg2RMxo2rPv9tEzvY5ot713AfFKa9B1RZRsuzQVx2gUBFrLHJojncsewuN2XfpRT",
  "key31": "5ECxrSnk7dXxE9N4J1Si9c9vDrVXgLzAeyJ2vnSUk6wk7gzSXkMxqwLeriHojF1UQ3dNCg9yev5FCCkLzdBQWAtF",
  "key32": "22jAnWL4PBSQ8M6AP8p3UH6KrhPEti7fbCqfqPAGamAsg55wDGDRTrNPFsCxMN9gJKSDCJ7zvhVq53yMavyB2Qi9",
  "key33": "3vpWuERs7Bq3VWmxnTkgA2joiwjDmF4RrGqDgzDDiGNPFKwYH8u54YgDYS78b5kT2ANtcJVrm4U7k1Cab5zJHPqb",
  "key34": "KputPF5P8EzmNvqsE3T3CjbtdMC9UwrZ28uWLJSQH3HPd8tk2sfbQbfy2A7Dyw3ksJLnXePjkwT6HUTfuZrvJYr",
  "key35": "4YrRMATaLqhCB6P7Pu4ip78iBLSixW1Mb6uYm3hX2XAsFMkCginvVkT2zGuaL9d925ez6RzGNadxJK7r7q198wFg",
  "key36": "545pXqoJHyzDDdjGFvyZQXLUv2rEaGNitpWnCSamKVBUW7rAUFBRsQhdaW1n655EGTHzGqCq2pUc7acvxfHGujG5",
  "key37": "2JUZQgXpfMTkSiPnBwbMZqSTRDspus3CrSJ22CQPJNkC3tVg2BdBWHFhKBtbmUH7Kw6Yes2cP9wB8rcxbyidnHBV",
  "key38": "2L2gkHtdePrxhwD7dw5VcUsZ1cfhtuTm7ZYhCKq5N8KBQcVjKRQo3wtgkCBK4P83waKVcXVn3bvC8VwsRZUzzr3P",
  "key39": "4v3N6NMuUjDLNRnaRQknxzwhbdi1Mew6x6W6HtyzwhQFCaAakc7AgNtvGG89esmh5Gwmwbjmc44WTiN5wuhmbLNo",
  "key40": "2RbUr4w9iVXcN6etoKLeNMZcAiukWnQ8Fees4XXpjbJ4MzK7ajxJaxmtrHaLaVPTejUn6psFP14RukGFDvu3jtJG",
  "key41": "3B3cfmfZccZsxwW4PwQ6fp6u17UJYhsgii7zF6G6rmSpBcWPZJSzEXjHkCx4gVq21wnQk4E6twWcfQ4LEQkt6mTG",
  "key42": "QTeyDQKhneQD3Fprnt7c8EgXxPqvqJKTWY6xS77SruQTaJecaFXfvAjkBw7SjQvuPX4xLoCxeEiypo1nC9MwUQR",
  "key43": "65C72Fm4Ayxiyt1zmt2bEn9wXmLktC7etohfVWJGEL1gffz3kTWKwrpqnW1SiAfV9dH2b2UyTGzWVBjA1REPPAfM",
  "key44": "2CadGntrja4JBEMvHLcw8iRWDyX23JVELJ4zVHgXjmgYaURitVj5dbDrGxE5QZs2iHPsUcNA2tw8ezLnEvzLFTUE"
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
