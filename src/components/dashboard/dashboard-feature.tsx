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
    "3AVrRwjAH75cNcTSeZtXd1rRrbMGpbURUpM2iFdKgMyLRjHYarnFz7ENn7H7Uv2LNyEwa8cQBiRRBD4qfdyoSLsa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QwPRJi2o5ghLs8g5YjCMPGtaUHLfY8tzDWYfToVM25nVd4Xd6jWwuTjffFWzuPYa5PHJeXqZPxqUu4aUVfCcboZ",
  "key1": "4tRmfqqGN93KA9BTNth1ztgTkUj6LdZRYh4KiBGNXHZBM7fTcfNqHnumnbkUymYLDVHK9a8vP8Qj2hWft5PqE5Tg",
  "key2": "3qAhrtEjV21ZMUFiyLG6hhnLVLeRL4iGzuiQsrvjA9e6untHRDvwyYmWsCgTk5eTorT6EqyA4E4SYXnk5vL55aWh",
  "key3": "3csb55gUvXNVtGUHTAxmdWHDLZ9vrC4T8P597eeb534ypeSU13M2ngbRPQE2U3RVYPKGP5Yzx24H46s75j39DZ4g",
  "key4": "65UhAb5sNyb4PTLcXGnKrmPvPVA8oDHwPZM5EYW6LhBAcXSavnMaVNbtkhrcqgPfySWLHPsFn17T5XHT2hB4hRXx",
  "key5": "2v2Y95WVG9YdyRdqLyuJQAp9FxZeQB7CWbcjeNwXkQ1k3EUfirz3YoDvHdeyiwJnDAB3dokVHRGn8AMEvSfkzqJP",
  "key6": "2Wvoc3rVLQwTpdEM4iXKJboWNctRuf52u1rN19t9Lo6gX9qdvZzfP6cphfpMs7jZjLtVv9vhiff5WHi3xaHyvFom",
  "key7": "3hobECrP57MaEid5iCXMMkYsosjGRSzzDBbcjVH8o8eRW4RuxNbduBNLVMB6jx6qGTn5VwQZ7UYykWBZDkqbQtAo",
  "key8": "wPth1N9VeobiQeqEPB4QLmQadnHWW3zBAekas4i4kTP745HTQQBT6u6HfGYUkVz7dsAJCDniiUR6nysUGNRFtZF",
  "key9": "3ru84tVF8H87BBCPT7LS3o5678pBRF3YZTsE65ejCSBt7t2PNz5GE4jE6Rt7ma6XscJTUMWxtob5RYfxDYAogmFt",
  "key10": "2f2Jsx2rGAxZSbbUKpwiD2FHFbGANc5YtDoEVTGjcCLAjT3bAFGFApjWQd3bfDkbLY5mCBzNuG6VTv4UrRu1nrxu",
  "key11": "5NUwYFJoQsWfWUno72Ezj7wJ6xfNeGdfr4zFoLJeax6nFNp2bk6ujVjfnUwSJCj5QE9YrguWYh6ZA5QTZ6rgpQtV",
  "key12": "4pu48qKL4gknHv339A3UL8HB8KXkuV4YvUbm9jN8xKxhQLzpx6qatEbTEKjD3Q1krJ6EWN3hsHPzbMxBA7QG2hdv",
  "key13": "4XYUfYF1e2sNfv1V71a7QzM8Fj57va6QLmnsXk8ehV1wVkGzSHzD5221CDnmLW3uzonGbySvxZwDm1z7FzBEpGRu",
  "key14": "5XstvCYhmPEiNdSbRyMmUpV9jd2QgKp64gGwHxYhgBPB8kvMFFCEKWe8RZrJnwLZaS9i8FhNffUF9hLQmPH9hDa9",
  "key15": "2jVxqVyePRHw85CgVPVxdKhEyDGoNxGb5DZn4BK3tYyYAeqZS4CBhW7ZG8bBm5rpcouyR98cNy7WPizueNQWEACU",
  "key16": "5T9PQVYykBK7vLLhQCPcEh3kesrqUyrrM9WRo75ZLXy69ux73EcLeJmxaJkNuqfDKcZLYeENV3VTCk7Td11SXR77",
  "key17": "5tKLWJrysHyGsFBSAtEgteJ2rPBv5TKASRc8AuFPJ5qhHUPWBHteGbL85spiXuLmC5ZuQj9k2LJnshBeraYrL8E4",
  "key18": "TPUGwFsCC6zMFKMfftNJjhRQPu4ApJx4SiYPek35VyEeKVbJTM9vZp5Q4N6oyBbKzAZeh8PRxbnS4aVmzFuMjna",
  "key19": "XtmvnMG7RDsVLvZRSqF5YJbBf8bmYrAfy9xo2cJ3XnonjDe5NU9NbXRUW82LYp8VrzZajATb6RyoaG5Q7tvSmqF",
  "key20": "4XHLkY5d3m7eUcdheMuKCx7FvSdEpdMXiVF5ZZfzKCdWGQUMxN71FQMNbXfaQk1Sa3JYLqcdgoa9XYrLWR6q9AwH",
  "key21": "5gnqu38vTPoLbXjPPkn2mNcXKgBURCYPFAFU87NKUfWTHJN85iq4yJpbtwTcy4ZLxGzbm9EYJ3kufSbx9znzvSgP",
  "key22": "c3hLFGRcqFUtP4zofbDmrrvWBoWAgpzqCwZ5zJZTAaF27KkiE2gN1a7WAtmxdcrUgWfVkr1J8go4RS1dF4JiT11",
  "key23": "x9nqz2R69bZYxWHWUd3TBohCZnvQqixdin9jx1ubv2Rbq8mze37uuoNioUQfEAALCvf3AmdDvHGo8maL4vVU8XG",
  "key24": "5Fg2hQbxDsPkb7qrv5fCfkKxh1XV1hLAv1yhKsa1oiWYWS41cfVaGZK6HzgPiR9m62Ljq9VqnKaTH552udf8aNYp",
  "key25": "4uGBrHj2MRBMe21SSvw6Y2BwCmw7SLHTPyRoeaeYaCmMVvrLo6aaBh1SPXY6eVLorsFYgEmig6gEwYdfbjUsYD7R",
  "key26": "pk9TmCRtAWZEj1G5dqVq2ftboedGRW81V5nqnMTmWod3CmbagaHXxzJBPiGPQLKmsPM4wRgpN95XBD55UXvnw2i",
  "key27": "kgvWy8UmKtMh6v177isQdkXnUTgGjBZPupJqp49Cge7EmvcPEEuFkN7dxL11ACjy7T43T18WrqcETcEr9CGce6M",
  "key28": "2LfAb6SQZY2kWHbuG4o8uEz7w5T8bzP22GvYzcwcFfwidBPVGLPozHfsXvH9qhw1qtpSd1JcAAueRaSLG9qFWqQ7",
  "key29": "sezFbNq1TwKfJM28tV4BaNMoMrQaLzwfJBwfBJfB448dSzH8YxEQEE9q4inu3q274Zf9DoFmdaXAzRXetATpUUk",
  "key30": "5xAwD4b1tPW7tmXjQ8DgXADAaKnPqEnX2eWJmNtxG2utvJJzq1H3KU2VH8eCugX4iZirnuVELqwyL8yzY6pGSmBf",
  "key31": "3yBFMyXbURrzwcFRNHjLc677poxUqwFbatUAUmqFbxpQvBsXqMsLdDCTyjFkvG2f9E9XiNy5wGVX6NQVRnNr8WzT",
  "key32": "6719TScpEnNkubnV75h53ypPVBTHUsGXsihkRHZzyW2KLntL3tSdYzp84EczRzdoYdWodvMLK2yqDstZZpqog32Z",
  "key33": "5eQfxCaepgaztuiEtATPGA97jJrUbJoiw6mC5J3dmWEoiJNmJTCoo4Zrwxrss9sLqA1PkutEEkhso4p6KgwenHuE",
  "key34": "359qEBRuxZsg2oYt7GnV4FD6V2jEY3Wm9Grtz2LcUV185UAzvPvuCNRgYrNtKkn6HAEbJkhjqAHzHSXTwLUrytuV",
  "key35": "2PFfZxHkcfA4KhZ2n9gwRQapfVL4RkVEYQ3zhH543sXyQoQqEf8Yavt7hZpX7iCfDPY5GLh79oKZwchQNrnyj3Tc",
  "key36": "4apmChsVJLZkpr3boGmew3v2AvEaV3mTXK23fa3jyFZfiaqC47YEzrJo6QY6d6kULXLSZpTV252oP4oD75Bv2HcM",
  "key37": "5D6GtSEzxXtHTKmuhh3EiitqSMx2BrEnb6CuSDRyuqG9VVBmjKJUGQQZHqro8rsTcxbcyWFZnVMFXcdyz6vnJyjD",
  "key38": "5KLdMHrBVtCVjejUFe2oBdSb1pufTk9PyYCp5XMeuhJq9ptuqWWyDtNttMJnWGyKZZzaA7Ph7mUZPfdCAS6Msjna",
  "key39": "5pZgYryGtS7ZCApf36JZZCNM6FM1fFeEN5h4mzZqxnENq7Bodc5cDYWPkqtdc8Y77s7M36uBpr7LVd4DEJwtNzDM",
  "key40": "5SpBZm5yAdiS5vtzadq5eWJ2bpwukXbZ2uGNrmN876HsSCvJBoELCwVZTN7wh43uJg7fpp2iEKGXCpvVctW1GFzS",
  "key41": "4TkXxN7pSYmF2Zt2DoUR6CJttQ8MjDurJATXdHuocr4p2NAHoq47UyR1cD588ocWzbhKVmRJ8YngK35EMbkbFmic",
  "key42": "3kXPykMsc7Zd2YnJwxzQCXU9XY64wVcuVfohM6jiyAm3LozTr9joSQFgUf4itGoYjpD4pBwN8pHrXpos1XB8qUpF",
  "key43": "21dC7aqdq8h5TbNiB8DQTYkzJ896rVsUPyrZ6s3kaGbBbeqeKwuZGZSYnFRZWFvpS459RYBHNik7SNhFXNed5Lyn",
  "key44": "4X4CfDf34JKNibUm87KQsQiBhqGhgs8RiU9XNUQQrrJ6Pj9GXNw7b2zaZiUnQWNoBCfukJE33M38pYJUGe4y3yey",
  "key45": "61GREp1iGGUq2baTFovHJAd9NjovyjLSPMcBqNqhfUB1nAeioU9HweVxfLLjN7SjXMUWnuQHViEU797akE8FGzNX",
  "key46": "43KUHnhGfRP9jScjFpMod641ZQf966PLGqjjSmqtiKsG183NcyiW9Te326q7fBwwJjLwvGMzJbPc9k7ox3KjVcTn",
  "key47": "51ZsfrJh2jFLztYXmxrx13UwM8xKoSzdC43Zs875NzEp7DwvmEDscCLnBrFdiAQKBX2hnxt3wKUtSBEDYZGQUYDR"
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
