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
    "5zmsbyCYfW7dBRE5e9SJbsCWAWAxD62N3V4JgVxoNzLibndH6UiyNcixKupHA589tvHHMujM7Cyukr9LRxqcmtAR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cT2FKctqBUWVnFaD2z6ZA5qVGNZu5WFbaR3SRoM8bxkHxoMPxYtiWXxZcESj4LEitrjFfcjxBrucHeo9TSotfhh",
  "key1": "3AGKuF6MZj4HiKbs2U73CqbXVfLbrw1m6KKcBuWko2r8S8CkjhGgNztf6hGCmTEqkQBWQmxtAqoJgJGwrXLf7WWH",
  "key2": "3AMmyu2rqanQ1qBgpcsuKe6AW3xJAVkHVX2RtDMExTPqbezrPzvSLFv22q99char5WtqKhDd4HkN3npCK36MQ9C2",
  "key3": "5go8r3eSfFZ9WA9dvLVnYxPMvBZP6tb86YjPCk8FExtM2LKHtvvGeW87RMXXixLwBKAKv9tERggvFdYRsL39kLMu",
  "key4": "4uqusnJA86i8zeUAEzm9ox9Ed3Bog4ApnLN8ByvuwKABuPL7zyhAoc8Fds5Lgvo5FBRc9fGhykFaBbnUoobk7KF6",
  "key5": "DZEPje7fkjorJCJBdcZLWXfm7GVfqGyGYjaqkF2eRgD1pK5bEi613v9YuBrgy9a939adgnsaRw1Bc74YkvfR8mP",
  "key6": "3DwGbSy4jTx863g7qwUjhXatd4QgBr9Cz5q7NcmyoCmwzQnQa9JV2cWi32ssnimZr57BNdPpz8YRoTgeyeVGAKWr",
  "key7": "2Fbuh79uGKmNBQY5f56xQDetEvrypTfR889azgZ2NX4K11Nnd5zSm8yjAcXW2pXWGTWmN7HE3wsrBefsxFsKkkYy",
  "key8": "34Dm2vpMPxE2vP5rjaw2vsq9DCrBxdTyqBLgUcJ8Es45BRQBnshr8h9SKHRfu95yhzdq8BVGmFYzC6YoHBz9RsPt",
  "key9": "2Vnhzetdqw6TTGFNLYWitFCF7W6e1gBXKrdzWVDFeUKJ9iSP92GvRq45L2L5qfmiMdbwoucJnkaVRLmVxeDJjBLd",
  "key10": "4kCzNqoKftz1mWLE8bsv3Gw13WXexXa92XDHxV2MwaEc3obEoHwAWRpfUGhg6G4QmGq1afJvVSYT9stJoG43K1NW",
  "key11": "2maDpx3TYjU51rqkbSroFKNrpUBBJtwTxsM7S55CH1fQ8CLbsTDs3GpjuPFNdfw3D8YxnS8FDUXeL3t4SL3uEgpp",
  "key12": "4y2xD35YihH3YJkcPe5asGTGHMiDzyAoeuFebwAmqSig3iAGmGS2CYDMZMmLetGWe584bHZcJCYsdpctLVJaSmU",
  "key13": "2XuEko187idMWirhLKjj9zRrupYxSGfqxmm9ebTFdifm8aaZECWXFA3AAyT78FoPQS3bgUNoGADGTNDRd9STFYMA",
  "key14": "58YqrTbcfafGin1Qczvqcepqz47B7E54UBpvtB81KFjXRmnm8MA5K1qzU1JTiKT43zJVPvcBCs7SdT24Y4HLrCeh",
  "key15": "33UAqMP4C5xuG46uYJEEFsFveKNT2Xf4YVNAG9vQqRXt5qgaY86wvF8gnnLXKs6aYzXRXfJzhegdK75BWTHvoy8V",
  "key16": "4nKPZ8EQYbN4k35XMBFV8Ae8TJvoNETdKfNny65BiPDCgLzitz3SmEi1CtwuC7U3nXUDkZzpzmak5EYRVMxEtkre",
  "key17": "5hoK38znhMUZhVEYqWa12iXTGTs2RibTs4zNYHtYDGPgi8At5ZYJXNrKpVdHywxfSBWr6n7Hc8WWB9m6c797Kr9i",
  "key18": "CaAkTTbVTfjgSEET37SBdtnGBWgMNnN5RFD9MgyGMLg6hp7ALAqYqmPMiCeYDXnAXGKp15WgixMFHecR8jpqcjm",
  "key19": "3erCiQkK5xrnjp3XoEFGLhjAbjuQVtKgBLzrwDV8iFwC7LePhW1RGdQZhwFd9AKkFZZf7bT4VdpmhMhfepQr3z5X",
  "key20": "3nu16B2eUBFJpaCa5E1QSzHtZnZY5yhEEJnZtkFo1GYxAtxGJaa5uMwwZToQ2eJ6tH6YJWPZ8Gg4kvd7gRXXXh5S",
  "key21": "2c2dUEBMzxyYYNxvn44inGkAGp9kzwzQFALJPz1V4ZdxRKii1NKMC43ywAZW6RmVUvjP8czNPPnMfG6uVeyzecjw",
  "key22": "3MRpkAbVo81s81FKA52stQovq4wwgDqZsCWf2uVc48cAhFjUVzz5r2T5tdCVqD6gKnof3MvyHNjx8mXkMV9PooQv",
  "key23": "63q53X4Fy8CqSjsU6XM4uDR3U9KAF6iUSS2mac2UKvDwjBfiC2hCciPDBPkq2QRJhKJxdVAqi7piKwTJxDPASMJC",
  "key24": "eheLiux2LEz6CJFpwmwZner5csSiMjeEQyU5B9H9pjawn9FHQr8nVBgWt1DtB2uLBGyAtNxZpcFJJhQnHmVbTRw",
  "key25": "3u8MtPVRGSix17XjdPcuuaincA97w6L6QysBK9zQX2ynNNs9cRdnjHbDmFGWEfNnQnnSpfEZB7Gegm2N7nhE1DWq",
  "key26": "5vdFLuEKvTmQ6LTAKeBVtfKwptn7t1GW6AZG6T6VY16xaGCJZG8ink6mUTLctsPoX8dgABk95SR5HF5bcxkuwAn5",
  "key27": "7MPjoGfZLr3QW5KPJamcKKWq2Pa49DSdGjR9CjCLigNQUKzLf1BG28yxEdfCJnesqHCNqaNp1R1wx5QgsRBUNbX",
  "key28": "59XEb5C92EDi88wg4kG2gtngNVAwFjMRx9u5CTpYaQfBe8zpDgo4C6NZyGDy8pCX8LuX7R7R8nQ5wy59z5R8w6aB",
  "key29": "5vjXb5q4ApA7VQFnQfaZtgRBtPcGaFw2RN5M2JvLWTsNnVJGCyMrYRaMWwXwr6UCmMacdjJXRzB9PsLPAhgg7Nvj",
  "key30": "QwSJYeDEYBKV7ARhbz4wWgdAxfVYdoH6WQ2VfanyP4qedyxsNuG7bJHBxMnr3o57moGaXQEf6cfR4woiAiqABfC",
  "key31": "3ekAbenGHgiQzRTgpk5kDe5X9QZxr6vMpK358GTJL9EW3vJEmuGnRcPg8Sye4D694a8xCu8twdYP8WMh1CgDzqo7",
  "key32": "5Ae1176wenwUCwrKYG4W1h8Aarg7fKPm2k9digMpi3NKN3DZfK4dVEwjNkS4E6MEpEsbgG6y4FGi7urPFECyVTxG",
  "key33": "4spoRy2LWZKUMQKhHqLGsi3RjAuanVj4wYTD6qjBaAeEWyhB4orjGdqjAKXy2NPU52KGZgoJwB2F6KAfvBQ15Hnb",
  "key34": "2QWzV3wyEoYBtAXUZGATSQq68enFHNCMhBDjwYSnzYwZXVQ3wA9bnVzLGsgVK7ZKJvT4jidW5azTcdiQkD3GqWzu",
  "key35": "2pmHb42BJopUxRJeZHhNZYpUrwUiAeucNKeVKffTYQpt6Smaejvqs9ZoGeZDh9gqQwUjczVHUWDxDykn45a6xnTd",
  "key36": "4vY6QGAi9ETJZ7NUdVwMtCzf9KfL4PURyBviLKHkKykxucfvugT5JR3vfEnG4R64grhb6VXYtuuHfJAinpCUZX73",
  "key37": "2AozLn9wvJiT7d7xM84CMUxzBe7ndeQXvv852C2z4JaocdTcP87qXNqdPn4TH7envB6un8L22KR7PbGR3Sj5XH9q",
  "key38": "4rCtNw7qpqTKXk4TsXWsowEP9sjU9nkTaPHWuwuLk2QfFgMGgnzzsstVrVejrRxdJVbEamCGZw6aCCxdooWDmFWw",
  "key39": "WqV1DJPTLJnMAT2zYDMsY86QvJVecBpZ2J7mw3kewVicJo1jqoc8EkgbeNyeRtky8tRYshxGNqguVXK4NnuUPTH",
  "key40": "5YVuDh6sv6V4BSjYDkoc1ofUpWSbMLNhZUJytSELeAHVK38ZT7NTQ5Qrcdh8GwTHxtmyM5QvhSEkwTSfSKLN78Hy",
  "key41": "onJpB6Bs1CBTAJH5eE1w2ftXPgUPLoH1jJTAAzknT4EsygRyXFWEyvFffvNbx22jo5sVu9HFyMKeChJXayXkhxL",
  "key42": "ZSZPXo3PasxpTWpY2jkSVhfYPtzamNBufZRqu9EQXcCGVwVto5L3hPZ9Bqg6kP2xqfBCpgyGonmZa6gpWcBAtX1",
  "key43": "2C3PPfbFNpseMYVz7TcFzqEox3Hx7v7aUtsMeXH1kbjBjiHT2GhgJDcKUNqcvKQtPWhFjnYsBKrWUckQnn3SQcC9",
  "key44": "3eS1FotM2jKwNCUusvtBWGTmhijonupbbAb6FabUudXweSnvNfCUgqXS3v1w31TtaSgKiBuiwqrcsmMnEAg9wnwu",
  "key45": "5d7tvGssoUUynvyBdCnzupRqvDp8aSMevEEcEMW29gcq1WGfrDjQnhuHnuimHnwS3Nvng6mbVHxVVhFumVn3t28b",
  "key46": "4zxzbbjHLp5HpXMk1D4a1qKcQnZZkbrdmo22Pfs12Fm2Bw71WHQmcgSu7eszKDsdYqZMzufGrV8FY5ydKs9PP8S6",
  "key47": "QrHuKVuhbeyoLGqERJ21TKif6pgheV6Xc8v2HsfUjqXCqWdaV7p4UH2wnPuikkvBegpk94dD2tXhUiGgtqGqdrC",
  "key48": "4dFsunpJMWdfuNzK9ruoDCiFAPKhFKjM87Q8nx4v3Rk3sHm4G4bJSfAU3FAmoHzDJ32iMQi6nHE82B6GQfxkVpkA",
  "key49": "46PmgUERT4Y238jT8SztHopwD1hPqXyKJN3XnYjYKebLZQnKuzVXfRoDVmo58zUoG69mdX68hm2eFDGrtgPD5svm"
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
