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
    "33CU2nwM4NG1gdtrhm4rL6BL4LCJrz4yJAbKr44MAwQpmx2XMsp83Y57nuCGoL7upCBFU2VGhoN62cPCS7f4kWkd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wzGv548MX1nWKH6xpWh8XfuBeUCg4Ny5wrhz3HSm5WWYpfSpmp1gKVbTNhQCQfkmqHLxAPZoXFVTkF2b3tA9sfr",
  "key1": "2PyuuzqC6pa6hQCuYW3KDUq9n2YgDi5GUSKcHdt18ASGoNQ8YugRsiudFvD6q2YHgP62zA3pPrH2yERFoAbEaJMi",
  "key2": "55M7fY4ZS7i7HykC5oJxvtmry1EkpuBvXTHyAdUG3pgBQBXHXVPh9zSZjtyJMpDzs9MCDGhStjQ91k1ZYDXGAsbA",
  "key3": "33i2SdnDNp38cWaxjhZHKa1KtSsWj1N5Bz7Z3tBHY677SytT61LqZAxayEU746gqC1e3he67aA3w6gmoKFVXPCSE",
  "key4": "5oE1SfAobRQ3XN1vzzYpQjbt6C3MiuvvN8HcGV3X9nS2ygPLmGg5yN16Vn9AjxE3YsKdWpM1qMdyyiyhJ5SdFC4h",
  "key5": "5oNMC2fTREfF8PeTQHrBAc11xVVYYk2qFd7AxkSVFYaez4WP8kh8Qa9socBSJSZF3E95RYXTVUn13SX43o6N56wB",
  "key6": "4MMv3RFEUvdvGYQ7CKSTryP1qczn3NCT2Lej49mpLPAppF4nBP4gF8PCtthPxdtPFaxpqxwH9n8xQ3pgirEwziv6",
  "key7": "5DU4NpYkRrtbnHAqxMpHcyEmDjM2fTGzAtoJTASvg5SDhJn2vsadtmuhF1MLD8bJS23AqD2BESWg7AAi5yifqWC6",
  "key8": "3aX3g8W1Hp1VL2YgunKcaV6susBjuCEJSd2hrTkg69PWmQ8gJaxaCS5SsJ2VsJ3QtwnLqaHwwmmyog7HLugZfLW8",
  "key9": "45xHf8QpTATHGJXkE2DcQAUcbZdhyE42N3Jei2pJaJuwu91ZoDnPifxMZVJi6vb3JshNH5DHarSJS6Uk2UykvWzx",
  "key10": "6p5juWC8bDiwrwJgcFoprVSVZc71XVMUq4rR9rmsdxbVjZKLS9FRL3XvCd6xgYryXafEK16ZT16NCh68tx1L9hq",
  "key11": "4N3cmdxbCmnH7ezrmcHN2TviAkxn9tDPButm3J6bJzwTYwBxsYNoZ4h47Q6CbHsGjG1U2xxo88EGH7NpCYGA2e9L",
  "key12": "3QgadtPU7nEUJHuQ6QTYBxZSqnqXhg5SNGJUPmgVJpgJAXeLuD1BdUGoB6xRMcxZ69yLPvz3FoAsp1gSoWVSPQqo",
  "key13": "5bA5fm8LEHP5vmnD28itPJ9dgDTE2RqoeveMu3bp8KKsH3QWbBjnuP9zRRx5N8iLatipWyTCvhXDWgW2CAvxYf7C",
  "key14": "38MUkutSCcdtzFWJPHSKZTunXRvf4QR5QRZn5NRRwfB9tVLgDRrxjcAWQzQjCWGDzatKJcFMMMQqUejxUh5dyLST",
  "key15": "VX1YhmJugUiZGqRtiHPXbbzEs6rG9Beo4HULs4Y6EgyB2Yi1spXpGYxLs3LroetuzHyHieWEc6Xt5tfjswkgqSS",
  "key16": "4rnwaQERfQ3dyq2KLweYxAtsKW2qPZdBsR7dTwPnUAKWeeKCDhqaS5BmPnj3gk7j4p79LijTyaNNuF54BBTbVX5U",
  "key17": "5aTbaWZ5asmhrobbW8pFuyis4kEJFkr1ztBGb59MqUKS5sLT3LPnnks3qZSroGjqK4J1qa18QJ4Pu3CjKjR6RyVQ",
  "key18": "3zvxWicz7nX5C3JSczLCNjrQyeSzAzo8ta6Svi8GL51t64J1gQq1bWhdgueMLy9YJgLLvWvVz6h68vuhVerKLjC1",
  "key19": "5NsVAHYGiVeDfd6KuLtBQP2ZTzSp23SWRSGJMYgDaYkDLFdM2JAos6QCoVyMPXczLzSBxspaA4TfN2Mqft7QgJhr",
  "key20": "3ER4WXLP29E2NeZ6FbWb2qiaRtDA5msdoD6fsFPg2dTP4sw8JUfrG5YtVxgLxihhhBoFFdnDTavwUaLYbtiFYr9Z",
  "key21": "61BkABQoPWmerjCmRKwgtXJgWMRaLMztNiU2A71C52nbKiDJdRtLkNWR2RUWssEAtJKGHHNiNpynWNA3uQai4twM",
  "key22": "371hZJ3JakUHzNnhVqrnTUsEBzxLh33iZtqiw1H7tAVRBUriMieLkgDuMePsz8cHesxxw1uTvsUT36HYLtdqgYW8",
  "key23": "NqRUzBtsMfURtP6Kz8gLi6niBPUDBKiiNAYoZ6BdrCL448U3EqPHRtct63GYti1zLtqikfS2KQMeRe37kP7TXDs",
  "key24": "2Mvma7Sc2R82NgWo6rADAyPuTzd8bboaXoDbvNLeuJdZ4qrUtpbqrMdenGLQJRtt1zt6E4mPdGQRpoQoMjkMxo46",
  "key25": "3Aq2wrPQ4PmCLYYrojGxpjzeR5GtyYsQ2LTnXZWxWdj1rstfh3nNruCUgReccER2L4PXcFCy4Hp93tyiHBKSxLzf",
  "key26": "fkQxhUyUxiTwxzL4DFf6NiD2sUVJZoTwmhDGNrQcisR295xWx35tT1Bbd4eiaZZuuzmFuG2rvmCGW6CsXab48zp",
  "key27": "5YpF99u2wMfosrodazYQfkPFbcfQvubhaYHLs6cWeASrimmJFS4gpnFNWwjJeuWe5LRcw3xe6ak9vYeMDfuV8rwW",
  "key28": "5jLR9ZdotzgpWUUCE6AViwWNCRM1VuMnkzTZPYB5QcsgC4iMjRxY1GQ5npw3gpjC8GWKPrNji4V1FqyMVTJmNKA1",
  "key29": "mFRdRtLp1qR91JYrYiwm8z19YQyBhdQBhziA33KrhvwQo3Xb4dV2zbvqqyARJ1VKY66CiobRBnHyDvUVw2pe13k",
  "key30": "MMrTceiygSftvVEvVdnV5i1UmBesJd783xzmgeoHBfbBk8ZfjQrg8jp1SVmYt8xBk53h66JjCpSbpihWLnXNTM4",
  "key31": "4Q2vocsCPn1caw2t8XnTtbkiqcftQeEtRi31c9yxbMbeGeT7q9v4VJXs2hsBUbcZnTnahzGPAppJwPTrN59RB85o",
  "key32": "5WnXVvNRUxa3632LW6Yxig993uEN3brPAazchWADhUJq7rzNhdb7mKgMMaSGgaarvxNhKNfqjZsgk5Hzj53PhZ1p",
  "key33": "Zj4n7SBaQzWq4T6k57NLRoY2GGfZo9TbpVtzHU5xrLsrycfRrhr2bzXGhrYvdRcqV4bAZQfQ62gvjvqTopwRFfT",
  "key34": "QNyW1HwoUjPRYui8aHuVuftvpSnVUVNjSK6N2QAfNCkoJc4ghgq9LH3kNirhdYpMCRoTGx2HEigJvaJ2BYxxJAh",
  "key35": "4CKKd9ny4K7Lo7pJrswT5Po6QedjEmmR3xfaqBx4SoswWd3yCm94BdjBuXirTBunpwXWtyrWebq7yUndt8yeUM3k",
  "key36": "mEJqFZG4yMYz5Myy6LkPtspYwd6XBLBtvMqrfTUDB3pUTyCLjZsMdj2uYid8gQyuHq7AntMe5TBBHwM3zL5LzAy",
  "key37": "5FVkh1c7A1WEqgfpH4k4RcvQuRXk6XZstvnZvWx63BqV3oGa6ChiPJ1ZiqotLssDsFMGdAYx1QRsFRFfen4NuvP1",
  "key38": "dHfB3rzY7X5aw9R7oNSC9MCLeRJRcU7neuY1DUaxFeF4V95Lhk676ARQKwyu1N1HxoQQGCzy3STbaN9S9UxGZdt",
  "key39": "4RS7C8ssF6p9diK53uwjqTGA2NZzVZtEuC2rHCEGCewYHw2srLwxPJSJrrhQDsyKeuCeuEcGaEAhPbYm9XETJgQo",
  "key40": "2GmVhGDp7kuavaUkPAmEC1DSC8hP8ENjfzL7woqriLa9savgw6SnneeCqDJ3SYXhCiBpbaxRzczmdhvKRLYrbQPg",
  "key41": "64A6Cs8nndHb83QnudT6YMQm4JCgi32cjm1crUQmEbUN1rNaZMuteJpkdCHfger3PQt59AcUeJmECzn9iDuZzfDF",
  "key42": "4e9iS8o8D7mhfZ9UwJcHrSvDiQHmGyQNebFQnZkVzbvuWNtynwNycTTXwvSHf9kY5zKTCe7XadpFK6PYJmA4NwBP",
  "key43": "2jkk4DW4UBZyLWTRHcNtJbXURzyVmbzNrt55BFEUHsTptb3WCNSd9bVyZR8yLR8Yy48KjtXiNUgbU91VML2Tybhr",
  "key44": "3WYHqFkhvSaQZz9aCUWRtxgegD6gyT7PBwfhdB9DS89wnQRHLFN67NkpFZE58vqEMaJJmFNFYJiWZQAWEmgJXnJX",
  "key45": "3SMvAWA83kE3AW3WEcPmNYGAL4RKQ2QMkodRuvBmeYT3VCMkkq5SuEho8uQWi2bJxx4Qgj4etLWAQWGxbrBLUsga",
  "key46": "4yfnojpE5Qy7cLdvuCQRt5nZ43x3Wqv2cbmCAz9uQAChZhL3tRZ57nqw8e4PThy7V3jJPYfk5wrz4Y7a2es3jkCX"
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
