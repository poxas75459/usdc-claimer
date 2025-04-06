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
    "4L63wtUvPtijXv5syef9jSuGEyn9x9fM9aUNemQouaaDy4AySYLHUUvETLjdcnjBHcxfbqBDVpbo7GXkyLEptiP3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TpVK62P8q2CezCFyJNmxTYFDDWMzeUEuxhxsNNyxRVodEPFgtTExfgTUn1wGUqoZD8RvsDBA15uzi9jnRS9XfR7",
  "key1": "3Cfje48ZkzoXXKWCpusKFGigaNBASfWrfnkrPa6u8G4v47CkkJvJCHLc1Ubs1SgpCdgzEJqtMmvVSsdjQhHYXXgG",
  "key2": "4p837pHiA3ZjkHYskga252ceY18hmPmoyxbZ4DLfym8jmufpaY8UC59Q4adbZVz54waMERcvLV2DbpU1ARdkVAap",
  "key3": "3VzpdbDn8viB71iAy8CVXjW9uSM3P8R5PWqqdHbU1EJG8tbwf1jHTVNQLQL7puT6N1EWN6VqaKZRufqKwhCY7T6L",
  "key4": "2LqN97GAxayVh1ux1fYfvhzGb5pJPHAtbj9a72M3Y7C1hiWuVdhCBcGjd98ci9x9HdxjZFjqYdpydy1Uc3M8iu97",
  "key5": "5Yt37qpNGxHxi9an6EEDX48sUFqdycBEY2ZVYQXLywzUPpWiS1kY1i4vf4jQztDESXZU9eEc3sY9kz15RxsoqvTQ",
  "key6": "5RQStKkA1wSH51ZPzrKny83M6NEH8xmF59rN2ktrWtM88WirbQc7Bnf69dLqKLEy2um651bxCccnXGub5km4WngB",
  "key7": "31JMcq3gHTd3pByG2QkVT3ZS38NuWv4gkkEArQM3Tn3Ck78yZqC8X1Ttfi9iP5zWRhAYUU7tNseijNnxPGtR6iqM",
  "key8": "4YhiJVW8uwvHuhTcjm6KeH3QCJCzEyENYSLw3gPJwRD3KskVgoyK2oXr7FD2BtkqgqHNL5PwncuPcCDPWLbWUpey",
  "key9": "3eBgrjzQhrkEobxma8eT2MqBkkmeyFMSvW3e9uXmJ2v8BQMc7pRcC1WRSAr3kncV95VsXH3s9vFv32484Rwc5zo",
  "key10": "2pJHPFQc9Lsmi8rcVw7zLKdPSkEWyKCgBggPDGxmKjVvEjbexXQUPvyxNciaeo9uYaRCtB2dNZH5GZQ5zy4aSfWH",
  "key11": "4rFSwWFKo1nyN8HiderUnsadCUpRcDznm9GjEn2WGjS3NZktsYJt6iqj2LzpZnDDReBKaomhYZnSv3MNLGrZRLF1",
  "key12": "2sQEBmcqvYqFoxK9DwMdibJweQmX3nd51LQTWnSGwmxzqDaeZPS5zcB15q65u3R5VVv9E9yqx7hNPg5hi8yCjpBz",
  "key13": "61ExeNXqNLMXDZ7QGg9kd4MW8xKx8KzTuBoip2gDjfVMVeZ4GctnC2LoD8hgfNc4MXcfojsjS8wtKtF6RXZTbRQy",
  "key14": "4m4eYXcZDxwSzonUNwFE29A78YoQsLfgrMC53avAfFcwmTbwWoKM9MF76ujEb9eAFGayDhZX1z67o2fJzJnPKWND",
  "key15": "2kVELHgCej7n1U9ByKzoqz9p3p7gvozwedLoa6w1HoNWETqnQxaj3Wg1RS8vjNCT2u4YoWdti6gzrHqw6BkZMzF3",
  "key16": "yqyuKXaXbihbYn693KaYwZZ5fT5w42YzuwBJyD6agpXwYKHk77QpYJEKZzvrttBiWDZzeRPbPCBeTzcXYPHWPVM",
  "key17": "GqGKKJPqEQPTGQzT8uV9MQAfTKhzYJZkFwn2m1AaRqZLFS8bAxbyp6dvTWputQYKp6qYYbgwSUyQ27d6vkm5Nj8",
  "key18": "34WHgpRc1VUKQdxU2uVReBa3ihUQ3KqAk1TCH4iVnGDCBaNvnRVHGWGc4awuUKZqqgd3sJRZbrwKKKdQuu94oP1b",
  "key19": "2YYCNxQcA92Krmk3AoLJJgtweCj3a1SbZBj5uKNbMFZk219s3PDLnv5VwndxCH4sn6tXGP6JwkgwLyYow5RLeffe",
  "key20": "Sx5Ft8NipXPtUuKxa6uCL4GW3Tp1RcXSisbN5CT7FxvCsAxgn7hsnAgWnjrZqC5fRSyPzzUvRwUkZ9UThBwKktC",
  "key21": "2Xp266kQ5gYVikC5F62UGJnWmbLJB2di3Qhdd8rh2XvJa48zmDcQ5MdihrkuAp7qYY5un884oAFA6DWCCsapa37D",
  "key22": "4N4inCq9X78UezzXJYLBTYpmfDL7saUNcVWXpid3xhnEdBvUrDYJLD6UMoNWhWvqJFr8u7yU2BbxQ9EEBhYyZ4zS",
  "key23": "2wWNAMtaoy3Cv6kCSTkvfxaCTTFxo5vhtBHFP2pLzpxhrxy2xFHKo8d4AYTbiy8KjUcS31Xz2QS5yxjJikKn45sH",
  "key24": "3FGoaeEjqW5u66FRRNwJhFTWDojKViu7W5siRFUvrd2NdFcv8p5NAsUK3GQnAFcbnexSSD5oYw2ys7mwnuSJxNeE",
  "key25": "5Ce19MVBSuH79QQ8SUujQBfPrXtCUG3XqUTb76diVtBmfvxbu45FJSh6jdodHsrdWhU5YT5i7pUUTeWzhTEA4pMn",
  "key26": "AtHeiEkJRiE6KD3RZAPT5JsWZs4Yt6NrgupYmWoEp69w1qELLPTGM121YVgydD871iDzNbN9rJwHVQ2LuVcxiii",
  "key27": "42QPcuxrnyoPV7v5Y5W5gvK7Dv3ZqkhkWHnW7GqLjFpRyMEYpgMAhj2DiFJeNJR1tZc5CUJQtP9pkAaiBgzpFvsH",
  "key28": "27Q1TTZyjbEBnrVZbjykBiqSM9Ww3o9SM2y4STGMKKDzMEx3ghAFh29YUJ5HnPxEWq6pRkUWjREeiquy2sQYFiLr",
  "key29": "2vGQyqds7VAdzj16u7G8YKbhtEGpBC3UCVx8pbfDCdTs8ajkVKbNzPy271H118JzCUZPgfxPjaqeQi65uPDjGaPF",
  "key30": "2Cprb2jpSwMf4CtFyCiHLPypXT3D5XKadtwv5tzf1YwdY3ghPbjbocfiNFmHo3vVP1Q24WC35L3bc9yBMdukYvBZ",
  "key31": "51sb4GUTrjzcFBaS7Wx8Kf4XndN3DrCy267vknuxxTyGtvouH5mW4ctyZAKNir999dvHKgATqtTavwGHm1dmdLkP",
  "key32": "3wnmDNLA7GoLRXrfZQR6q8Qmghw5vsoMKLZJqNbENMMCybwZxfuvHPLnVxWVmBujfzg2Bvi4GbntMXLeGzh9Sq87",
  "key33": "2UDBHGfmanhasvLyyTeiYkJCyLUJZhTXfiX8ao7ZRtMxdUVNPBUJXUPdq9nvgDRaSsrRd5Hvhfkc4CwfjjPvUFpv",
  "key34": "2YQAnHv5SULoPKwYj8f1z2xmrZPrtJJbm5W6K4aPVwEQJUcM4suF76ZGffrap4c77T9uKPtJNf4vMx9n7Ytm8wtp",
  "key35": "rUkG4Ziimzzjpqc1kWet4arYFC16ssC46KFdCz9NHPauiqYJ1XXAWwQqV5ngsab1RP4zUvWfFUZUoqYThNaCcjQ",
  "key36": "5Fs7gTTdK8y3CjYSk2z8gGB7NQFUsHCWZdeWFpmF9nAHrS9J7GfYEyHEk11ZFvgrNyD7GEudqxdxuhPVHsGnKuyF",
  "key37": "3TRtdM5SkagkPfEaGbP8597qau72zTaUMEHgwo7wKGYx3tLRnzrM9iL3y8xP7tZtyEQBxrSwk928nhyaEsbjcs3U",
  "key38": "41Wh6boC8oupMaDxSfj3UgHo6GC5tJQvMuhMhqGnCziy9yyU1XHM2mbwCU5h7vWZQMv5SXTNdSmiVhJDxxTG9v8H",
  "key39": "XFi4SrhXvr7sJhm7d3VwSq78CZCRuCeT9PSW1YVNivckS7pFZtXTGkxmNhxbapnz3j64JX6WQL9Us49UPbtYvGA",
  "key40": "2NYCyMp27p9Pezqxouff5EXhqXqFwT7fB69KriMqFnKvJsQLHNxT819nyHPyFwa8xjVVqM8ZRXSQuKU3odzMgjbY"
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
