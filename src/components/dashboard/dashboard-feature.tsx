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
    "3BJF151Hz5NA8TVTYeT24smmFzHy74vuHwisDQh9U6Yg8QhzfN6bciGkWaU1WCFbkCG42MQZasqXLn81yiHqKSFb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kQzxWiZd2RgyvsFnvYyZoe8MeatuXH1D7GzoAreZNsHoQ4agc3UnfNwAPYS29cBjb83AwBkVA2CZpUS5HW3zHaV",
  "key1": "Mk8LdrGXhohBAWaXJAn5nfsY8ejsmgmcbGyaB3DMcr3bXrvqsL4JCVixvLCan7TU7e61vGBGdg3ZqwAC6JcVCtq",
  "key2": "4G93VPLxNXoH5Y3Uajbj6kSf4ZcgSunS851LnEVgcseqzwgDHEdShW2kfN1K4r8ufpM4jc9KMtbWzq5muJm4oEpS",
  "key3": "3i4QNLx4ZuMHtk8ByDosiqy9KQ2y311B7ob4M5Wz3vmuzS2WRkS5TyodQjtqd2mG25iLZ8NHcWVwqL6rFeYzTSmR",
  "key4": "4LGDfcDjLNRxHkJtbM5UvPqY6Tc7WqUj8YNW8ZDwNMMLnKeVW3VdZP4FmWtww7cDsFaPrypCMPZTbKwFYw6ZiLT2",
  "key5": "638iK6Jj7fG5K7rhoAps3AUE6EsMDYtc2EbN2QHnneJ84QAFqcPNAWq5qAbzMuz12uD2woXku2cBocaWbZrS2YHg",
  "key6": "3nRv36PkBZHgbPtxxU8nqyN3HnLM24WWRpdhahELfg3H8mYPzXjJS6jDkLvDnA2og2sKmn4ZC3fA4Z6nhhaFGwDu",
  "key7": "2uEGkPiEN4xQmzhop4ueEqBcTHs8w7iCW3nJ38n37WVDHCwrsujXeXcS2zsPcUvBN2cF19o6YH5cFT6MYdweWnAZ",
  "key8": "26Jw89rgwkJmTiHQvgHJAdrRomM21yeTn6iCL4zJwbzhQvd7Tfn6fGRv6UnKKx23owdBZHFyuBzynU1uWhhSD8vQ",
  "key9": "5G9m4rTKP3egfUG8eiTXg5dAyQGAzDmhJqvnqz5hozcJ3JLHWsLuH2rvJoD5s1onYVnNEnf9JXw87LPhBKi4Mgqc",
  "key10": "4Urc58DN8yRpidV3hGG4ak3ZN6GspRsnyi5Xc236dX97Z9Hsn27frJURcQRHLtEvGAUeCdSiLMqm6qbAK1FuirUm",
  "key11": "55szZCHy4UjdwoX65hefxgP2k9a9LyDLigXodxAqcnY89kkCo1bLfd9m5teEx87HYwGW7TyJBUc51dCGHiWoDggc",
  "key12": "57bbaDkxVN6zMnS83vPCCqKkpvS22QSP3Sxbm91f9pLE8Bbrin62WZ5k1XwshNHrfvZYVKYKiLyVJyV2FXAAmSsg",
  "key13": "4kX8ns7MQMrh9kGrcEsk8U3iWmnUtytZjnaB3pUd7Yeg8pU3Gxo5Yhd11E6T24ExbAagAwdabBHKNCq2iRJrBNno",
  "key14": "45sauZh4c8afyakKbUutddTEHbmiKp1QeDdQHgSGLmSw9x7QN8PAcWk8LJGNC9JGrrLnFAjFKrMP1FaP2NKeK1u7",
  "key15": "165vZRKE4DqhxFxbmZLz4a5ccxSFCxE8uvpiHaHx4PXp5sTKBv7KMZzvX1wKdZLyM7hiuAkvTX9vnaqS4bGTair",
  "key16": "4DqBzXUp5vyowp1nstpRpoRhLoaN2TJHafK5voP9TyoBjZP5LedRcFMe6dRPAwWqbHBc3V72CjTUK6iTZiH7nBPj",
  "key17": "2XLEuP1S2mp2taFPF4fnumgEAbQbPcZq2gzTcL6K9iFCmXriFGrGBAZvRaadJeEFZP7j6i8oLz6sxBs2XYooMpUL",
  "key18": "7sfGmbnazpMj5MMtMGnUDrN14BXmbZQN9QBunLjcot6VwsVVUB9dUSvQ8BEYyDtbM6GpSNqrYb63PjUBF5g3Xt7",
  "key19": "3jUB9xhx7uigJ1PNEMg9agN4D5VXHJcUtKbYcXFqv1sTVHK61tQHTLEDW1JuWNkiH8cr91MiuERduDWc3yko8LTs",
  "key20": "3rMoFyhBS8cXvZpwF9F4MV4rMdFeab7gNpfSziU9zivxNZ5fUVgRinMWaRoHSRNUZPub5FAjdeSG82fmEGCUYQKc",
  "key21": "s469PTHAF3FvTFGNodKjsTUXEzswcybH1YC2jQDmH2xfWTdZKbfS5J4S653jVsGACaUncw5o6AiPmLMhYQvCYij",
  "key22": "4XJxvGp18JE9oJ4sUeDfJZCDxjjeHHx5VTz2BQqLDMi9z8euQARfTnebhDvRPA5XYN4nfr9TuMzRkacgeMDPXrcS",
  "key23": "4YmBSrgsJDfwaMh4fnLm2eJEAYVCXfMe1rZspLyK4YsW2x1pymQ6Gq46MHLTAJ13Rf6AqT2zXJUaRiNKW9S8CU94",
  "key24": "3zoMfQkWz32FYbPGJhPM4koinZ17o1pUZ9UCFrRB6MmgochDQhXZE6mf3R3MYV9guDKbEcVdxFLCt4CAzbwgyN5u",
  "key25": "64NurrZCuZmd75E7RHVJdEA9FaGf5E1GJSpa4gGS5YxSg3RMdvFggZDw8pYEDSibkRoN3SWrJ11BjfBuu9Ky79U8",
  "key26": "3Qgwoaq5kLG9Qnkik8GvkgeR4U9sXeV2k1ZB1PvxyHxWCTyh1TrSHsTQ6HE2ZEK6guJrLvwW46k4MFVXdrrzCcaW",
  "key27": "3MrqSVPKfMPazDNrhe6eqUK4g3cLQo3WGrtsVYBxvXCpUs8KJV9VeGFdsNM3PhQNRDg9mXqSQekidM1ovGysBFNZ",
  "key28": "2xfkYh6fbWTNJivjcCpsRGMhG3WhdqQewPnJZ8iU41S9bMdAS813fNQXUrftVGi9YevYTeWc4qZPnXXZCCz5L7Jp",
  "key29": "3XLq2yP3cmWAhxR9KJcY2UasqynH4vgMBD4U9SQGuQfL777QiXeefxY8pqMmTThgBmso7nwQEu2VwEkNiZ7CvURX",
  "key30": "43SNd6X4EzGvmX7erBt8DmnhMF4o8UB63mNLFoDTY8tDNydjUHEJeWuxuHHg5cdK8YKSEifzxzY2HEvjBLqQmLXh",
  "key31": "3MaiS9doZy42s3M46U7xZtZjVyGfKmvSpi5CXTTFAEx5AGGPFu6FdTjibCJVzqNGdw2nBzCYxJQoWLTMgMp9VBVu",
  "key32": "2E3hF4mbr4Tzvk53oETmVzgsoDvq1odzfqBmX92aHAMUqdH5vGCeZm3VE9bgECaofV67R8nKkhimXs8jwGSKdPcc",
  "key33": "2Jr4zs7WmeSF8jRJJqzP3taY2yV7AXQ3paBa7heKeBYRwEcBbkoZD72DyUCPGEj73WoQfZnkmaPqjZyqwc2HnbUG",
  "key34": "35jy9WRyhyayNKrBAXowZfKhFkwWHVsq6VkpdEJ726ffbatrhWJk5NyYk5bAxQFx4jBo5taTJocuGRJEAg2L5tvC",
  "key35": "4Jk2GK5FrUvZFDUqLkGiHfcnyb6QD8WX9ZtS4KkV96u4RGkTuKHGd7WQBvqSEffzRDKSxzS5rkfBd7bWJiGMQyyp",
  "key36": "3cDgcMZYv6JVR7SAKeHxbpCPXDLccVNX7HTPfzxpaqXkBywZQriTYRudEDnYUs1JKZue2tDcRbthUNKomUEUJ7bt",
  "key37": "rmcKbcERgCaZM4oo1V8NXi9fGSTyTw8WawmgPvgjdFLFjxWbV7kn5MFJodvBKZ4bf3CAw5Ykzv5zd7PM9XEz1S6",
  "key38": "5FvQPvtuio3nMH1r5dU4vt5nmCKLa7j5Vatnr7mYeHHL1BPR6i7LtagP9C3X3X3sgtY7zb5tpsJZnKhLaH861dpy",
  "key39": "5UPnGCFDAGzGjAyEEwbXHsGnXnRdPnocwZmgxRCZmc5FU7qt4dC87NbKR3B3FyMcbWSWCe8DSyAuQfj6GdKxcDTL",
  "key40": "3imcqWfXtFq4F3B4CYFiyoUWQT7t3Y6KsnjnByL6EjgVMJupfhUKj8pakL2YVSxWA5hNN6AvSuoonZov4hqmAsyG",
  "key41": "67hVgDcFEb5mstnJZqigVfmBqC9SWz9PwY6B9gereGkk4LrfS6Rnom4g3rZ11k32J5u4Aw6arPZSDDxkmFFfEGDK",
  "key42": "CYz34QZiXdcehPrdmYv1xLNkBWZmoYapH4EXMLpM71QjBDPPoHULxXkxW5DXDFxmxTr3CJBZCtHqAqdxeSawgaz",
  "key43": "4VZ7mV2AVCKrtxUTNmBYzu8sFh3dFcux8dGgVz42BGDfnnD6wPXrcDisAApC3gprz4dgWvViM4yp7ArY3QRe5sx4",
  "key44": "3jPoLEuLXYkuQjf9HXnSa3QEbNteVD6kLj66LpxSiCULJXJGP7xr8sKiRLUt6bbJ66VwwmmB4Bn1xL8evkyfATzr",
  "key45": "5jVbU7jWQ8BEGftXxXSenGb8ewoFvJJs6N974NrPwTM4CFisFdWHCZ52YWkckdjVtziut4tTEZ9xoNDhdUXz8wWu"
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
