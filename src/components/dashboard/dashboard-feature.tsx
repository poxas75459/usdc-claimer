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
    "2pi67gt1J5KnusMn5rpW3meWSSLmNzTRhY8x6e3Jgp8BDXmTw8syA1CTsEjYuZbMzKwnKFBnV37wm2TYGVRQPfM2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2m3NRoDqjKoMPapJ5WYB9PQgv52oo5c4FwKuLX18wFxg9GQgMGXUiZnJ5btsTG7qY3zoHFG5JCyHyWpXJDKyMqur",
  "key1": "5A2rUF8TFHYDeZ5BA27RU31Be7r1Tzn378M8NrUxxLnXaFcXNkGEstTPKzHMJ55XL2om1eZRdE4F6MZMBTbCUKAq",
  "key2": "4azca27f4ywJ65r4eYTYnjUb2CegwxN13XYAqRCXWj2eEH3mkE5BT1QAtpMd8G9HBELJFdSiKL9Uk8bQHBX9Q2gr",
  "key3": "3LbZJpXQY1G9toBaxxXsbRVec7o3ZCnCJ3w6T6ePaBZkc8JV8yhYub8ARyd4c591DafzF8ZWdoynkYZo5uHA98BA",
  "key4": "4Hvf6KDRPu4Euf81GUuXSfLqY4Z84nsqgRjBPBK3mj4mKRxyjNXi6NpXTYqDUtbyri6BALKeVkS79PfZdVfYqJCk",
  "key5": "4BeGJsiqecGfBeBSUemgoeu6oeNdfa6QPczEnzC5anPJGi69xMy85kJh8Hg92Eva48AkvzV1twRj1chhrs1sChvj",
  "key6": "66Egtf4zPYYkSFJmskkVwhzMb1RHxKUC5hCvAQKwMAD48X6MwXAVxRWhPY6xzsVqpLcQKapdx4DaDZh86eGozS4J",
  "key7": "2aVScpCrrWs7uwBX1LGcX7HHWmJCLwitxmHZkbYyL37922WvZYen5p2wh7DGogN7KqtQUuMmPX5WMtSXtuy3uo13",
  "key8": "37ckuFArSvpZRhfyDym3aSRLJmxqzhAx6Kne9E9PW1WFRWXEUiN18aRh83b72o15EDYXDuSP2jrf2WMq2yuHfsAp",
  "key9": "3s5x3FdtxHy13F5AnddQB812XARUF7SC4ReSp3n9AtwJ3FLZVtXe7K94NjVVUBqaZAAmBZ6FWNdwSFP6cwzbKBxS",
  "key10": "5qqoRNLkRLrhVbSe6fbaDGTHZA7kznSbFb7tm9Su2iwRPCT4SCbkWzwNVA73CMavNkb8RfPvYXiazvrmaGryfsMh",
  "key11": "3ujHF6C9srWsexUxtQZoWz2aE8c4pLb9CbbZwRzSDdGd2Xzuf3NYcqBxp36behKT5CrH6uCjrdTTddg8Qpp1AHtY",
  "key12": "4KkRCJURZV5P2HhfBwMrJULsjHN4ruTr7hXkwzEYgSj1aQRGwhkiXnwiT4oY4vK5rtWHv2fWsYypqViUoPMdyAfp",
  "key13": "2XsLkSi5tQ2z43TL2bi2W2xWgKhJWQNHJVESrUguGRDrYBmEtAf2Ybz6c8Y491cG3fU43maK3PY9PFRsgDcfjHvL",
  "key14": "xGVRHpRAvPH292urnoZCpBqfYq66DNPGgvSd9F99L353GyrJaxKufsu1gUd15Hwm7eGabUFrfi3qYU8UFYctbcR",
  "key15": "bz29PYV44C3N8PcgHZkAs7jQa8ncjhkpPvfjFyyEHartwQKDBmCSeiWbCmS4dbjsYW8vFmpawK7TxNb4BpVcSFG",
  "key16": "4HoV12ovBEi2yEdNudDY9F65of6Pkzs3AXV4SSNodg4BNzEEqCyy4tdHu8fNEV7ZwRKfSg7mpsxkR2rehpFpzniC",
  "key17": "mAaZcUWqa6S9Qd5BCiGSrhJJvHbFEMM2acPm1B8t52KDdns5sjQPCXqWNRph4pbSG9KyJKDUhfjad3xF2t3XwJ1",
  "key18": "52PJL4ZNHe6A4Y5n3s2sGmdPN7mahsuWQPZ1hQowXfGB2edmSssqYBpnqRjBoDSVxsHEc71XqCVTMD7GHxMQr7Xb",
  "key19": "295jdY1btxZnYuC3sPGHGNVDzKyrH91UwaP8xdwBAxiPtoBR36dfMSzmsCRi6VpHsNVBQkf5N84xmbtXDGEPb6xE",
  "key20": "2poYpsXRW5kvD2AZtUWbfeq7uQNwoN7VAzHEgvL22SaoBCLCjCQpCEDDFoA1qDTbjJ1tS1xbjuHCz8rAq6wn2LxZ",
  "key21": "3WSqGsLjSdhrpLcTnXgLuQHGEc4ekmonwCFJPu2xigk3uMrgHo4zXV7vfTadh8szSHqs6GEQ1jgtX3CDZuUQ4Xy1",
  "key22": "58s5oXFX2EzZXF7HKXKFguafwLxGaUfo6wJuK7Tz5BwjdXn2pH8dHCC7Cpu1oTNgwMTgJZMksMais6WjAM5wQFQQ",
  "key23": "5dyrjKiiEw3SmRNW5Zbfoqkkj2oCCrqBWXwaMv3CREGKqL5XNiZNxaMwCdjmAxGD7pfA23tCh63CYLRBV3UnaZU8",
  "key24": "3RR7otMNWS8p7u32mQbuMvLyJWeMsJj6qhMV6TfzWbhHNT1DVUauGE8cDCiUbpR1xN1skAx4sotxCNM5Lmk8CxrS",
  "key25": "3wTUrf5SzsPZj6cRNLjrqdmZxcn7NtGE5XiDDghjgSXGA1ghoHdT8zKSB4XRrqkHdw5G8VU8pWkxEDkgRQxDa7jC",
  "key26": "3f341TyMHBSR32yQqDuQLgEEyLo8xDKMuksbKp5xS4XDE3w4MvoLNGjFLMENYrB9K1mnx3QYCR6jBWHgATxa7Pn",
  "key27": "8WJdcekrQ65cz3R2tKZuEH2JF8mTMhUXN6ubrn11m1TJPSVvx3ygKzxyR8kmzBWZbvUpSHTB982QuKUkyGmJTFq",
  "key28": "3kWMLJMisCvzirfr7JECUt62dBGkvLUx4bQfKb3MYD6hvm4Qh8rFoprzdXhR9MUoPmtrW4sdYgGSPtyaotxRa92G",
  "key29": "4zhgcwXjx5qcDVaZXAPpRmD9abHavoe83XSkNzWaypRwJ2imhdM225t3CXf9SaqbRVgjZDCBn6b9Zni9sF51Nrgm",
  "key30": "47VDxBYG2AcuGPxquZ9F5W2ToisrX7Vz43Jo7Dympvdd35vaNF5pwRPkrZGPh65mexpSKMuKfxMtP7pzXqgzYxtf",
  "key31": "3tb2shovqqoxAGFZeq5CDQ7n2V3T8k1Vq7GdW7YWSX49vktpiawRRGfh229o9R6xkQHFKqrykyYo4gCS6DeaSE3o",
  "key32": "2LyGjp4uNgUU7W6oYDcbPANhM7pw6mtPWz4TXFVNR7a1erK9Q3KDZLX6SpiBYa9XJw6Q8paSPfTqN6wf6j2FnDGH",
  "key33": "5kJRyjN4KUsijfaZfaFC8EJBzyC5ezLApjvXatggQe3dwJfCyPdjt4NvwS4FyVqY6c43uGrk53usmbWEkkLYeNRH",
  "key34": "4pRVS754Kpa8yQyN2x3cYXhSLxAhLTkYNYe2brdN1nQtfmntJvgpor7jZopzqxvn21WzLVjERjBALAP6LUxLu8FV",
  "key35": "3KyRucsx54d85KwcWdkNewguXV9bZSyGxde3PMDJJJu4NnPve2QWw4SAnsQ3sFi7ybxJ2v8HxyzAMGT6tiL3G9Yu",
  "key36": "jRpJBYuh3QCxA4jxPih2KQWU1bv57gKGYfukRAAg3Hox8UngDyVtwqKspFWZVGjxdJmeZefqCQZZmKgLTtQBxJh",
  "key37": "ZUJWb7TV6edKWFyZSrGBAb8GD7KHbbNhKiCpB5URsgNJ37HaJwg4UbaYEg2M6WN3NZkz2T9dPC6aqNscNeNE3Cm",
  "key38": "2w1mtZCnXLHeukh7Fg4WteNFaUvMVMxqme2UwdbZywx4rnXLQxUh3hw89HDjCyPiEiDL22wkjGEepkeAsWLy8qZD",
  "key39": "vFBDGX5Anb5b11f1YX3PnuxfiKvnbiaQEvKDF1sejWLVTsfjz13k9UDY8oESMxEm24itaYSiSzqFPdhsfTHoV2x",
  "key40": "3fhGpSKzKaLJGouyySxsUTj8ygBG6E4jEfgR2WkRd3KNbeTjc2chbqEuDguWvDte3CxRfLoiVp6MvfCpye4tSxit",
  "key41": "5WyhHAgaAMSgQn4qjSG1tSNuUXufKNfbeFGjRiwUaV7BCZyvo8evEuGt4oynwYqQFfpt8a7u4JTJvZcngLJMAg9W",
  "key42": "2qKFLsehuifAwCRVRgQccigSbpFaGy9wenAGMB7afHmRTKRmTSLmMWCHkV8jkcMEA9j4ea5BBRSCifqjPGZMitpg",
  "key43": "54jWYrV7SN44sQEJjg8n7n696QxFqjZh6mgvwrvs8Zi22m4KNY3dEhrGg3dEJEwAHammSH1PGcbY49A6xTLKmzSh",
  "key44": "6b4qq386CXyPpKbS53eDqkY2uWURgusKrdWSi9PCkuXZQtqREQUikjgH5ZxAzYkJmsUz6a4CKe9jbZP7gkNhghE",
  "key45": "44WTXWthYwtJ2hKieyFPWQjtEdUi14CpBhJigfFaye3qg1SrfPqns37ExF3kxEVQaWSbY829k1cW8DTtaGeHVxa6"
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
