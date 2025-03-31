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
    "usfDV4wgXDSRfGcrHg4Wwi1LGVbKTmdbhHynhf4W8xp7ALZ4FCgXfLdVzRotYcN8ctA4y1pVPNCcuYqZq4XappQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2S3qgaDC3ZHSHzLWiD6hcQrTtNZK23eU2CsJZZiFqz8K6gTtEeX7EDN58sj47w8GTn3vLmdAoSsLg8eDrLyEyiox",
  "key1": "5cGbNbdsQk3WTV8q7isiN1RHMjCj5soaTtCQQdUx4TAufiXncPhQC95qwV4TjUhTTJMvNvRqJUdfk4W2Jq3t8wqj",
  "key2": "66uJ4KWQruTqC6F1QweGdtGgbeL2CQDdX91ugC9M9U56bRAzS6sMbB4qkHRZt23zes2aVNZW3wPuqLLg7Zb41bpV",
  "key3": "3mxNJkUPpiB7Kq5KdFM47CjU9PicmVuwsrFfh4nGFJuXcAHYnCEdZeQ9v3nosuQnGR23tZqtxcVHLKACUUFzvLKp",
  "key4": "2JsZgfg969GY9WZpkYBASBccZLZTLcx1hJjghfteUdDbiJfTaL3kWWnXfsSevpipUEb7WNcfYDAhbuReW66cb325",
  "key5": "5kzNEe2Y234oYDyfyWM9fo5sKbmKG4YBmS7kVF1jFYvKCgE5337NNvNun75hqMtmZ6hNDrJbhRMBMzbi4C7UHbRs",
  "key6": "39ymRMf7DqUsAZu5s6dWLi4w4hdS3Km68FdJaxdkcHibAzui3ok8XvCPPUZV1BKwFnUHNPuHUr6CU5179RHCU1VK",
  "key7": "67LqrCaUfxTfEnN6WZJ5bN6mRTquSxLQNdNQQHMziRXdEFBv9EPVK9pSacU8xzArdQMDMKA9QkuS511VkJCw5soh",
  "key8": "frtLkgJdmVsdnzxfahpAM4jZbbEgd7uJQJpwqDJh2jEki2yDQfokacHh5ka3tjsUt3xJT1PTuKkPkGPqhsLjCVq",
  "key9": "Leu8bEvViNVBvZQ8TJpXJh924kffZmZh8oXYgQoXjkjmpUKSbmQy5zRLJFetPfxubLgincHKWa3RcNzLNaGwBT3",
  "key10": "wptpFc26xMz7ekipoWq4f31AF7TU1dcFTP4Wc78rgdkkAfXKWZ8MLff8R6D8a5RShzuqwcSibh24N6D7QsMXvuJ",
  "key11": "4ZeKnvrEFhXi5mLDVJ98ZFnVm36h1hXQdtmmoaF7PWbWUu24gNovmL6KTGZbEJodX5GsGJtdgyPwGKUgzNLYsunc",
  "key12": "5pcLL52yhhPq8Y52PAhutCBJe7wntZbEHBgmhPQ2kvzr7rcFRVMdruCUdWgtTgaS33DRbRyV7yK32nWtvrSC5sK",
  "key13": "47viNjhee6HjdGQpvqDVnB5wTwUeoQtekkRuyBehAD6mxixVJy7S5zqD9iacvnaoa6DhKpMKdrLXdketWa6w7KAm",
  "key14": "eDQxN14pQu3s1xBuJBu87A6FQudciqua8XKA6UuiYaNcjc8oSLhBnVvydYMUGRcHiamdKwu2sXxKvDFMZCrCdB2",
  "key15": "4QM9J5smTSj2qCwivD6jAS4L4KsTdbchz9AYn9o88a1TVrbgurnAPyLVHVDAkQfigWfiHW3Swa7oJ3oRRq4jYJwZ",
  "key16": "56HVEsbNhAm652KkJ2cncy2c68SZwpKonWKzFrkczHns7LVNLr5mePhH89nKLfJy2ouepjppExEc7bbsYkedLEEM",
  "key17": "2bVvAkasY43eJtarLobXTo8zU5hZbCT4aTSbZu95yCNmHMv2zvDT4nmHp4tdZnvqupQZyzaTHvtjchsqZQ5xCx7r",
  "key18": "2GeqTjwsSqevn5SfgJfKYy4RMymfZp4rEUooR2jdoChRx58ZkQ9bpZaKJUYoxP5cuVQZxxWEkpdgFAWkNr3uYVbU",
  "key19": "r8cFxgkbTuks4qspZRFiqQHBSsg9aLPwZPKff2UaREX5afVnhQyNGc51C6wy9qtjXTd8kUc9W1rhrtM59DXPXd6",
  "key20": "3mhEjwFqVA5t7PYmtjNHcZ2KbuGXdFNnVy7JyH1qc395mdeKbmBBcwL6vzUYJ4DBYCwT8cmTxB12E6NgmzbeR2Nn",
  "key21": "5kmswRqUvew69mqk5TcwT2wG9L7zYbsfBSYF17PqBDdTwTBmDEvn4MPeD7micwAaDU7ySoWf54cQipzVEeTZFAR",
  "key22": "3CvSarQqdHrT8FrBc2cSAeTW5kt1GRUKimTEFtYVGqo6qnrpMHjS9HNeHUyue36ZCdgAV4kLyFfwZtuBQVEcqCfr",
  "key23": "3rmYStVYiyEAeJ3AiZ3odyEbjtNSM1RzaKb6fx9FUqGhR7jxCM19QrJMimukX2ETRn1BaQsuh4PqBRsUiZsdcE4m",
  "key24": "3PRzBsWZaYwMRLHCNPdPaHLj9G9dTGfJdTMnZ4TYUCJB4iuFZ76Vg1J8S4sxKDEUGzam27dfziYYciyqf9k642d7",
  "key25": "4KfFL7xaxRmeDvVt9DLcuCSQ5NzGA31D6E4YTqh49jwHcBsV58nZdWuuNK6GmLhLhBZ9NGZ6gvjz29uAfLXXfAV4",
  "key26": "5jixPXmvkmwMsPPLGjF26N7DQitABM13DBKuFqXut1swzhZQ8KnsHttZUbPe5dLY6QnLbyve5eue5cAC65Ztxkpt",
  "key27": "2mEpNg4WMZ1hfm9zUgsma2Cwtrfd53uSQ2BbnyAfLq4W1ynsy3b95LCoyQV98A1ZLuGDcTTyCEcybU5A4RWGe1fo",
  "key28": "58x8Cdhnd7vdfqAeSNMoSjNN9mTSGYvFRPx8WvBBeZmZ1XTVqJ3Tuv7QTN2Has8CQ1Ji1GGWwuiZHiZhcxXZGThF",
  "key29": "437o5jKchLNyoTM4i5Cen7QP4o62qSeiMcedd7G8G13ZppEM66691yozq674J5e2YLV3gNcN4rqUANVMswbpTTJC",
  "key30": "3CEiv3BKv5EsqCqaPiSKxABbmGmaiGdM8nbR5YWqy6ZaU9DvFwkQHGWHwyoHo6rV3huGV8xBhk7bFUcfvAi8ZmvV",
  "key31": "4QxeXoH1psZT1dpWcMrTcm5vFtS198Mtv9krxSnWnqsW7pgmmvvvUC2eXUFPQyZpR4QrViihYPFVe25Y3qrcAsWM",
  "key32": "4kkJ6VUphqqoeWTZsrUqLpahdYp1YdJNbjKssis67mpiXPTPy8uNqR9Gbp4cVN38BqZn7PuFsaPfiuSU7CAjc5hw",
  "key33": "51XfXGTE7A2N9MTg4rLBQZEaeNL3p8wfx2gk6ENwC7z3b1smuuT8kmAXkMMxxEe6DLeYS5sz7X6QqDBC5yN9nydX",
  "key34": "2BGqoonwdhbddAeYMnqkDut5eeSCTXC2YaJ9wLNEeLhKWCAn4Y5maywfkvsrTG3VuT1Ym7AYQmYFZ3mqga7i7rQc",
  "key35": "s9qn9FWU5ukJHWrda9ftA7URpYf2WhM1VYhkukqwTqAF5vc3psTFMYtZ8GJPhQ4uLeT8V6sSh74mA1NBipQLGMJ",
  "key36": "V9vbFXThdnqYiVnzLE1pNnV1ADspSKfMeAk1eCcE6z8FLEMQLmCvf9vuSAApCV9hcbRjK2es29GNGTqRp5k2EjK",
  "key37": "5Enyhvbi1w38ceFRPuk4PmBZWeYj5ZKWSwBxJPxeugo6akLju6zsTUmxLABuqUPpSWxpyRWiUAoyPfqX3EUZC9ML",
  "key38": "3pEGWkAw9NvXLoYCM4DgUoQKSivD9nhQBSpDbgJ4wQrdftvs75Bfq3VWdaZ18mb6T9y5zpS4V7uQt6th2qTBr3k2"
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
