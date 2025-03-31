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
    "3LcM2a5ytLvMirk6wNpQtRhscPM3tYavRokYuETTVfubU27VDaMiN42NArovhZzJH4Ry1FbopNEirE8eao7HaT8w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tb2A16mwqH2gjikw7ZZnKPBE6WKgCvqm5adtK6TKnjgjBpb3Fig2Tq9PiSyF8wWFYTbC4wVmk9Lem8Rxobw3yQj",
  "key1": "4EiaePKnCsm65E5RvRH69tvLCJVHC1Qzvx4nGqx57vcAHNCnoahuTA6zSCYMu3N6io7WQWvdXeM2mMweXAiz4Bvr",
  "key2": "2hSNGD2KAZjexYXReCyuxeNLuivgEA4sb7sfCoWPPDUWdk1x4WmyX4D2Y26WuqbTxoLeJeqM9s4HRJAASuKe7PT5",
  "key3": "4KuvnLz45xytgLXDEixaSaFbPD8cdSWhjrVVuBWCDL8v6gwGTjJ2kEYQhBzMTDGyYemc9NRy8NvtCdXbwL6KmrqP",
  "key4": "3LqpW8k435u6uU8xLDB4ks2AbQ3EGKdzrnib37cMRbxZzHCDN7NURKaAvr6uFzVm6FXxJgG2fJFbqfcQMZbPhxeh",
  "key5": "ZSFWtGyZPW5fGokXjKQhc3X7y6GF4Mru7Y5PA51qacEZ5msKvt8o2FtNyKnkmqx9nEsaD3cjaBkGcdMvimMGXbX",
  "key6": "25XgwedqxnRhMUUQKiW4xtCMthUJ5TFeQn5VcdjFxJcrxrSTuC1Phk4o9Q7JXKbQ5fxdcHZ9Bsndw6goyiieyqEg",
  "key7": "4Kmz5C3i4VooNcM3eCgxRVr9p4ibKe2QJqKNdEHwdg64V3ZPqaHzkFqq8o7eqqgiVujrtdEXCrP9GkjKRTLyrpwD",
  "key8": "5ffKSc3ih5vQb8Lb46mRWS8ZhEcVobt1AxBxXdqkpmTerxh8VcmDFVurVAjonJtbjsMuWDJphx7speB42i3XdWqs",
  "key9": "2hvFkkVYhCWzJMPyjonvSrtS8qTokZkMbRUHdZcebxszx72KyGEQSFJ7YHmDWyexucub9A22gG1rVEfzhzqd5ehw",
  "key10": "58BKu3XKN8m19Ezob6iqmKU1kwNnbRJ2pFiiQeLP453nUfdhpPU5fusDGTsgzYG2DnMF5TGkxk3kEK8XivwrvuTt",
  "key11": "3VzAQNMapT2ihBnpSd3TuSTC7wnxrkxumu2dYdEkvK1KLtQNu5LVPtjurc6D6nUSbtRwzFDY3usjqq3cypGvyt1D",
  "key12": "3piESZ7Uy2pajYKUu1ohUHCJAo4MdHZe3epjFqVAuyT6STbnhvg3VbVV8wAb6zyK9mUDE6QspwF18deSTuhtm6Dv",
  "key13": "41SJQoVLTnJNtGDuZxUwgC1WBy5n3udS4gSEUBFyWPA6GKA71z4unpEunvm1EcHiXfNfVW4NfTm9KFQvCkhJCTFj",
  "key14": "XE8hS9cTnF8qUz61xB59o6TiSq5Dtdn7kvpFbvKcgxkMQ9wFbV4ESgCx5dxNtKpApjfD2Mte2cZQDEosTxkjywc",
  "key15": "4UxJa7yNRADQcp5eCvUYaoajCFNoKAy61jaKoCehpDfyg1x8rzyZ2wEJ5ckEvH1coTUZtW8dsnc8chZ6KsquFP4s",
  "key16": "5Qzka7fiRquuXzJh9hGS5fNkWRSjecyX1wUyvNxgaVKKr2JK3zTkb5kKYy94Z3mQ3ss9hcw1Yc3iqxK6jQCZHNUU",
  "key17": "6PKMm1wHGfLVCdGR9xpcoMAWHkFsxwimjx2gZcBTYh4fiDp8jaEe1fNikejsUCMpGi3hw1nafu7X8rJUJGvsgXD",
  "key18": "2TZXp3VL4E67JPbZyLrQCTVxFUzW78ZRTe3eXtya4WqGcoUVuTWKCwXezumNzgV1DoBwrxSN7BdLDiQMaMfCr8HK",
  "key19": "2z17xEYbeA1RGtauRoxfbuEhq1oU7juQNJYnJe1pAGXjyDvMgqNiLHUL6UYBFk1BE134uXgGsM25eovoAEkc8BEK",
  "key20": "2guvK3ALRnh8hzhLD3rkpL6W47t1CxLVH5RkNgEH2Js8dn3J5X36pH1weWmnF35FNtE6bLArzFv9GXeBHDMXjHUd",
  "key21": "UGZCPsbXZ4gcktTf46E7tCXdDBSuPQQFV5xhwTzbogZAVb9m5o5oWac7rioG8kWKaw2ZEsGTw2qkCdxKfWfzCGo",
  "key22": "5tAK7HMxc4wZGqcoUjWQWohkZyN6avJfCrhwevUkLqcpTHAsc2yT1jPHYNTEeKVvaUvZtDCuUDsmt5RXQUvp7gY8",
  "key23": "xzcJdojDSwJTuNsMbR6ccX7g6SrqxQAhZzn4K9V767i77zaZCS538dsrfuEbt3CFRvhxCi8KMKgy2LvAhWPyFHy",
  "key24": "62C2eZ7HYSo9g11KXaLNkBTfwLGVPa4C2t9v6fnPdJ4Dh9XnWg2nPXnyVQRo9Fr4qCvvvJXvkU2xW6t6r3dX3Uxc",
  "key25": "Pt3w3EEresvWF9Aa7qNUqtu76whCCV9tjQMjdJEWRNqyYYMY87T9dpo6QfMUWqhDhymZzuoX5aoQNQX8WPnJ42H",
  "key26": "5wbewvn4m1UfEfcQrXTiafG6ZHLPbZnqJ5TiUEYYa4qbgrD4dHLPtic1C6GvLf8X3JA9p3VABPFX5wkPgPmxYQiq",
  "key27": "4Xsrn5vi7bNoU4vuqUW14D3xR6WxYqhHZoXX68gosRGfio3bJn4bfEuRquWGvSw8AX9exuMmTGPp9NuxsFCEY26u",
  "key28": "4dA8aw32T75jEc4AuKRihZgYckzduaVxW1c53KuedFJbkHqHaRJATStREp4V5KUoiP9q6SbHZoNSD9HuigEshTUg",
  "key29": "U2fBc2nTxZoru78B37zP6Hbs3wy8u2UrsGkXHBmV1utSvhEfZARB5ZcSebDGpdbdvpH6EXxPBAZnTYNAgYwVVKJ",
  "key30": "3po43qC4iJCtBCoXh1bwtynVeiM6tiZSRQe935pC46u9LRDrjkdV4qTKPmTVff6tAuiNLD3YfbSUgBCp8dvjj4f",
  "key31": "36r31MKwqt9UiHxisHiUyjBkaXbUDCmruhvMupPkndVoT8GkwWt4r5pKzXaKSa2bW3MpUr1YDXLQJvjhw8NrPPpo",
  "key32": "3TrpXom2JLSi88HNrWFwudHgQVq34MdBdwTxaeSJpFthYXuskPvjGBHu5JbzZnyRFj4jryqqX5hW542d1pRDrM5L",
  "key33": "nt1bMpt1NP8tQu2Ac1zFbVMB6R5dT55TXnSNkhxkH5BfKPaHqNNgRndEPEWUsvSCMiD2HhTrrGBAiBUHcCtLsZ1",
  "key34": "36M4TFeQ3X5ehDHph8g4gjmeKomvZW5U3DEQeKj6VRYB2Z1kCjxcmPQoiCu31ksPARS1D7RGiuyknCdW3P4kyKiy",
  "key35": "35riz1JMmYDWQ9VLpMVwGR4kfgewEUiYWQxXLbmYhgyR3RFHVoAB9SyBHHyW9C4UasM4De5JMeFuBQqRm64nVAXW",
  "key36": "4zxzDDM1rFRrQV2rHeEHyoQ3ZXQmPULBWU3mk4nxpyaPDrr8DMrLruFLxBguMheQ8fijDjRNwTB4zNHpPE9VQF3R",
  "key37": "3ZBfyc2im6fsfkVFWekUzjVGnVN4HFkacfZJ4jaKosJAvfuGJCkRNAJ5iqiPZiu2bETRJ16diWRTGHrzkNZUREgs",
  "key38": "4xiaqrbVqer8EizY9nkDpiGfnQsudpH8nSBCZD6GHcjZU5wy2MjdgYQepmpBDpi1c3LwwfqgfMxTsbdNAE4KvoY8"
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
