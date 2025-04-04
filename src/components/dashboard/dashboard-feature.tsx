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
    "UGNX34Y9EmZpVG467dRQQskwEc2fQvfKkv9mgnREbEp5pkCUzHKYJYFWxNtc3ZppkdfexyUexxegYiJ1nGq3H5n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aAuJspmEsbwjQp3dy6c2p2ccWGMEkKZ6RQw67LgrbMdnkLNFvTGcdMbf46uTiXZPZ9GRy2fQk3htMLBY91x6h1a",
  "key1": "TXjQTChZ15JS4TR3q8GTa7movnfHzdLoEktiRADXB4WEBN1oQQ46kiJ4dNefC3KagSYaHMDhrYkM4881CL59SxN",
  "key2": "2vAp9AoJDxQimzkv8bsdoTJPrersNrtYRAJVQ1vpP3KayL4DzTSYXPEgJ3yLjHVaHJu7G5zfFMNCmkBVgsfGBATr",
  "key3": "8nZv61wogEk1HB98cPZWCm4jb97UXnioc4zMMv7Vfh4nkmfhdsNz7SMcgeXmx8o72tbjV7HxZGjgVtmRtVKuHkT",
  "key4": "2wmimFGDsQuCLvDTV2HudMXwju6WHXbzxFk48hZP83raUK1nTYk8MZUSy4V4QZ2J7YjorVo1Tzcvtyq5qbF9bShM",
  "key5": "RXw7wrjUxB7zrXeAbFdFUMeyRKu4mR7xLxWmaQPKRMe52NBm7jQhYGBfq9pX1fe1ccEP2ngzrGcL9S4PprZmnu4",
  "key6": "5nkFSyh15tZogmvQ4EU2yKH9F57H2xrpUqEXKUpUPVXsLPU9y2gKGU9S3MXLUs8BC6kXKvxE534PPuQcvXufWD2q",
  "key7": "5vx7cafXGe7us3pWzamB2zrfnJ64HLgFHCHhmyvSN5Co53uuXZUmaYFovntdviNdz84ks9X8Pr8cKodCWBuS3dpg",
  "key8": "4qHo2NdHJCskwu6SNbvSmeBETm9twpEs4JZbXVdZPcYwuoLP4Lv8iBx65SN1F6b3pXQDVuKjcQKCRS15DdsvjNTu",
  "key9": "cCWQdkibfK1ZH45YXKcA7m9bACo3zTqAgWyBTqy1CCTzmuGC2CBZaEnDUzb4KkzEHVLty46dZ4AGB3ZdVckG2eB",
  "key10": "5WFwWz6T4WSVPvYV1dkP2qXZdkt3wNSnfovUK8mWst53eyzyJ6bdPmYZHGqhVuwA9MyLQ7FVFGZrar42MG5Gpc8g",
  "key11": "59iLwvXfh6nnuSe62CQcyGgFS9xYB6akSLrb4xZT1xhNfKTe3yqWXdyEfZRqvKPvVzjTAAVQXK8G7U6eH6DxGrkk",
  "key12": "2Q1qeP8sb6knsgx1A8UTo4eB8yAJxD5xCEHzsWA1QrTuYMD7u3TF1piLKn9fB7SYhfnfq1NJ1VSkosnnnG1NkjXx",
  "key13": "24mHwVgp5Q6FSUJAQwwU7Kc82uJs4UcHvHadEsAmbFZ6UvAF8n1FyY68qsM8QRd6BcPradkk1zvGqJ3jrq9X76xQ",
  "key14": "5HMzLfUXZmdieGgVHEPuBCV1SbndnHziNyPMZUrpnCjEEZgH7B7mTLweEbueqN4yVe5pXQU9BWYDXh2uxW2Wpoed",
  "key15": "2DPfqpuqsXhQmbX8wkRYnJQ3C2zNzGCJwnVLuBCEra4GBPJoBo6sPTGesxUEM2yTsSJCevYnnrscFJ1g9h7mTVxM",
  "key16": "aa6hTT86x3UXunqvWeVRfbmQsTryozf6KFzuyBmvQYTSPWwW8KJTeAuWFyMrbzhpoFB83sFo6m8iFTEzJSHi2Gu",
  "key17": "4mMYiRc2C9touEgPSZ9LCB5n5KT6SmQ15pCUSJyDhjSWBnmPjFDd1YShoYuj18sQbnsp7mgXb1HsHH1riGjc7E2G",
  "key18": "2aSmfhKKrbduaNVTUHt55Uqi3xYcDc5qKC3qUgcxnjyxF3kdgYGX2kKK7Te7khHKD3mUUZRwtXTg756dBdScYeki",
  "key19": "txvbkWDGJyYMHD1Z5uvM5sRgov76MdABvq3iyNWtVSj7DpNwa38Ck5tc6Rv23RmU2r1DrwWTH5734MF1A22YX2i",
  "key20": "52PSYQFKAKLnPzMcGqQPW6RoseokvnNRRMSUonZngXiEsC4Rm2zHtCGWLbWyhCH78gE5xzgwu9J7LW1jWTxJ6ipC",
  "key21": "3dPWnYVeh4yvXh8wSAKmoyLHU32PCgMhUstBvoEe4bxZn8Hm9XhXh2xy7j5wi6SEKixUpyejp42vYGUrEXY8xvUn",
  "key22": "3g4rVscRHXq9nroeJdz6Sn1fi32tTSomQbzrigaFT4v21fEDea9KSWzbBTuREnHEoZsSxwXffhsqH7BmorSf2x7Y",
  "key23": "TXYScLebKM4uJ542XXL6oMFDLPb9Ck9FB5h1AFn8tXwNnmgn9TR3UDhqUGdCpcY4A16njS716YWiNFejKbvJpAe",
  "key24": "4FnNzS5ZFQFQRprS2m3vxAJ9fRd7DuMFaiyaQCcCuDbuLNcbVjjaHQDcC9tyFAjQuRzmXfAsALMwgp6qnxPBAvnw",
  "key25": "2hCwq1sgHX3RaerdALCr4e8jHXcRp9r5Du8vv3genjj9ADowtXcjjQ5qnz2Hryo3pYwXkFh4HD5QQK5SKeS4nKaM",
  "key26": "2S5u9CFYxMxsM2aVVk52NVuvkFQVn2dBz4biVpfSBru4UDzW1wYrkKTKKT8qNe9E9ak5FPXCyciFJrzTtEDxZgdL",
  "key27": "5sMbVTq5hFKxgkTKJwFwvKcAMRvzoYV1nyvuMvqSSUH6cWT2cwenZt6TSkjLDuXuKr4T3W65Vj7F6PWGBoaoUrd3",
  "key28": "3x9CVLLnwPRLa27C637nHdNoM6NqyXCti6oc24znXawtjM94okEiCmD9HHaZjteAPQ7kUbDABVBR4VRepPHBhwM3",
  "key29": "4fvYvBYmKFfyMD1N5eh8sbE2RyA6CyFf5b79a9tvCKL7kHy5bMXuDjwGLaLAjjmu5dGGN2vsYjH848g3VraTt4wp",
  "key30": "3cctrCQTgqjepayN6nM74GA1141xoZXEjQVv3KdrTZMQ3g6LCUBTrVSNzwPdnUu5PtQUtBkVK56spFnKAVQ9zUpD",
  "key31": "3XftNWFdYKRp4LrPRApUsa5rcJ7kdY7Skp1FKA3yurGDNHrjAhMkzpD2HuzLCMhUcB9gSCWZPhKapdsh6gJVogCt",
  "key32": "5Po7HaUZSTG66mtTeFfTiSuLeBEpZA6MaLiFgJ9mcvRiCcmK4GgZJCMAZUqJAmidLFjrAdV6VCDrxF7duv2uQupe",
  "key33": "4HMXJQLoWpGGHhv7D6QGYwuURWddhhSuqC322CC47RqyYCwXu6kcNGPLFxhEFXjqqAutER3S4Am1L6u1D8SKwJJ8",
  "key34": "66sT2EBLWbpaSftP6hfPa1dU6ytbfY2abFrf24tSP88ydhEH3h95wqDvJ9icTJTFbxrGDSJDFMcFKHKwnEaXFz5q",
  "key35": "JBPTZXgsgjjjSe1oLVyv7WvqPHxbp6w4NLo8LJv4DdGWxxEP3WF8mcKHTyFHY1fBErvvaM7Zq5UBdrgfTDazF3j",
  "key36": "4eeoRF93ZaiV8Fzvg2kHhFi8gCjEG5LADf4Z6nAkc2ehJWm7jbeaJUQdEWXuJXJJtJmuLdywfAqkonTSLNJgKQyV",
  "key37": "65AxW3Su16SxpmBRX1zb8AQ1gMBKsxo6QdGgRCjdvZyZT3dGjWfaszbJckGyLrLvLFE7nD5AghiCx64QynU2KHVQ",
  "key38": "2E5nMATAeRVco4iWXMUXkogjZdJoiGYu1NKDsmkQ7QyafB7DypUMfXQQ8F6iNdtwfM76FmQxrHKVzS19ubLQ1rPH",
  "key39": "eT9PuPAwFGDVzYR195QtGYi7vvHdsr94SQTKrEk7mnMW4QRqRfmGi9GmCKmPm1PJpnRawAnhDULTSCnUkADAA2b",
  "key40": "57bf22b3beFXcp5CkBvMG8ohzuLDD1JqtM5cJ1BTAYsQt94h9JRgm1QxqQUYe9DzET5Q536YeUnMvMzcnVCdRKU5",
  "key41": "KuAuemsDYf4zfAwsvPJinxorGuuWafyS9sJLwf5EYu64C1ceBz1RYisvc5NNXqjkbKp3ZyBSk6U5N2f9SS6JWfQ",
  "key42": "2hfWkPpHMadR9A5AR94ja1qQvGSb1ytdY3eR9ZqweZGAzcxPPYZTockJPexZdUq5suYTiQAXjsM9mpNwNt72tQ17",
  "key43": "2aLwT5tLVGW5uyEahzd58MhzRpqARd4FLDQqaukTMEq5ynEbrGi92FEMwwkqhQvoFgR2tfzHCqpSQVhq6EPxQv5C",
  "key44": "4Z6mczzudQE3rgDUowadTBqT4ZKVtbmEW6AbRfkuHDB373xx3wyT5h6CyiPrvxVCqGMg35ujSkdZjxQVfQ9SYFe9",
  "key45": "YCy3gBv4oS99eQCVpCHt7LFk1zMQUXwJN8yhhhVgcadGk9jt1KQwJwo4UqQyYDJavZTtU4C1pqyCwJ8ZEd6gHg6"
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
