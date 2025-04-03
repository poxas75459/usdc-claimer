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
    "2WxHtMB23LVfLiEjPHrbQLPioxWdxM4Ni5Hj3uum6vyQeUhTH41tBxXYt7SEzqPDwmNwQnUeZLoLgYn5nXZAVPxi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZACUxvw32hXHFzibxyhCHXJt93RSx4rq2UHKo7jd59ango191Br7erihigA95gVnwcVZenzK2CKH5baEWW2CDLF",
  "key1": "5PKjbhRuebGKKLHecsNSQdhjPvf7XBoe91LdyCkhhPpmKXJ7RmesJXw7FSQVD9ro4KKhQdFgZG68zRPNjZwkMVtb",
  "key2": "3FJ3E4J9ZNfZBAuxFoP9sN9NqvSgeKrsnixVEk8YGjvv1bJSUNfifm5DSvtYrivemsboiaQ8f73j2xkrYa36CPtj",
  "key3": "35zrURpUfhRPqoHmfb8X4CJeYypWjbgrHMUiWFcYtoK82SxFDWsWysox3k5CnW9RMvBg8DijrNdA3nHX3xg8YbiD",
  "key4": "26wwRFAKNZQ3TZqrpSpsKNxK7mkiCoyEFogM9cJkvLaJbc6wZ5TFpCagPhgeT5pQkU6TgPpHdDt4bqcMJR7re6ru",
  "key5": "27XwzmDyDBXt8er77GBLKbnqYvWjzBSaTej66SXxFnYUpUVJHxJ3jBASa3DB42GfnCcZWspkARhEf8PcEWEVuRYJ",
  "key6": "5cbQRhPDTWzYGLXXfNZgi8SnTD8ewxdn1pH3hmB9FN1EhGXu9rk35K6VCwV1JTTxdLyaLnHqByB4njK21Dt1WjjK",
  "key7": "5siHBreCcqm4DFvVnFfeuwJrf6FgnSmyFvR5QYutyLW1SdDs8Qv355eJiqC1ZPvWm58fpFdQh3tqtPc819bfvwN8",
  "key8": "24nfgTncEySssvL8UsCa8kVKfrsLo7xkakmyhLZgbhMk1C7s8QBCUCYPZcVigt7RYSLwdtBH9sZ5rT6SVFGr3Uyu",
  "key9": "389UFbfZDdsZzA3Rxme3onVk8MJEmaUBjfgFHhWpJi7sMRjeowvPqL3oMmXTCR3QGMTc4gYUPoFXWZvQdDnHoWH7",
  "key10": "51kZeae6NkAc14aUC2b5wK1USVjULBwTM6s9G4jkh5jXsRSWSDvpCodAVnrchQYYDuGC7VReZAiwuqF3HnzTPLCm",
  "key11": "4VBc75DdJH6dkYzLfJ9okxC259DKUfmvhqrJ1NCqimTLoAxSgSeomeLLUpkvthLaGGcesmhPgPugcj74c72Td6GL",
  "key12": "4QVmDvQj3mcfevxtsQdCKGxu1WYM1BZLmk38ysRYPNsT7Lsdx3GFWKe792JK1duxM8oZV6AMYADi3D79wEGUZjio",
  "key13": "4rMCW3bJ7yQRZqcTeELizUdsWZjHBfJc3qPegPvxEXVjn9RXhDZPP6Ncx9unE3wK3r5ymYkf3C32kKdaVBCG2MXs",
  "key14": "J4WK16kxouaTwwKBnH8SMfoQkE7baHASyumywCBMKvAhpy7Frw8vfnSwKGiALRB9D1xcKJh6a4T5aGtuJUtVxsJ",
  "key15": "3QBrFn3p8ixk3vHubVM7D7epm4ZrHgdPNAWFdk5qHqK8Crc2Hdu6J9iVyRpH3U8myxPnJePruL9jRpTt1HUqRTPA",
  "key16": "43LUfWcxGEptgzXD4k4v6C3Zq9Aym25ueuQjdRH75Cd9EiBJrorVNpKq1QZ1BC3JWVe6QrTM2ofVC5pauS5L1PTe",
  "key17": "5EVU8g9Z2iXCs2vCbq9s6p4fD75sP19grP5y4i3hdVS61DMAeRmCrnK6xmgcnjmjibKQHY5r2mGcvw28WmSpozRr",
  "key18": "3Xsna5ZonfSdzKFGYv52CkYtcTfKvemyFyqvL8zSND8nWqNc37mCyXVAzPpPy5mrnMQn9RoQaPcBDAZevmd1vhVK",
  "key19": "3VEuV2FWvZZyjZdMxYYffGzSoAR4H4ADkxFyqRBiQpYasbiPUjbZY4m2KkFmERo9CfsLKvQaC1YMoFDqKXFqaCqg",
  "key20": "3VTYdvgvEQedji57vJ8L8jjn9RC9fVqbGj56A2k3TQta4oumhfYU4i8ponpgV5siLJZeY8GqsdzjbPyDUW4HicTv",
  "key21": "5diYKzpuAgKazzJeucWpGBqyBWXHb5s8t2Wb4F8MjK3FFMcCVf4UA6tYiURuaaACN31taN2bwDyvsCTzAwfdZTX3",
  "key22": "ghXdkP4wvVMrW3S9wTx59yqVr5GPMzSRze6XN1aQyDng5Z7vpyLXtp3iqYqqvyme16T8pKcejtq7J6LpJAQbNkL",
  "key23": "5uFJBmUzg5sofKir3DsvXgWitjEwCtFVJXU4vr7DbRN631b4nCzE8XVd23WyXztBXruyKN9LNbxDTeVgVSRwxRcF",
  "key24": "M4wb56HwzudbF4aoiw4JGikhdSb5GavyoNvWNZHeAN1iMz4jfgPxR7mLaLVn5RJoRaqU6UBwKYoJwS7uDzAmdCb",
  "key25": "4xpcQuqTqCSLy6awhpWJ3hv53qXpUtwGARBBUi6PCBfP97NBRUMZfFNNg77ixyjSWnbXFaiQVxuQWMY7suENNmeC",
  "key26": "56Ekc9h3nYGBJJi868HcK5RFXTfiBjNvb2xWZ1EoxWedQgPoSJd4JSX2ms1pS7WCKYVSw98et3swnsByEALnx3bj",
  "key27": "gQv1QknzVM1dQzgpCeLKc2Fm41wbekkBeBtfPDu8aJ3djtq9XDuBCRhUM9o4tDzRbn6Lxa6H6r2DXLeqMe4sMnv",
  "key28": "2mWVhTy8DgjTodWeAZnZqpX2dduh2QyDoA6UVrSk6i97oSLw3XKAYLbjp6pMHg7BqMYjmCY5hf9bLmGwCwK8TZrJ",
  "key29": "2ctoyBnJoCp7y4xHdTGSQiwJGa3Lzpm3mBJmv3xBxycBuSzsug9yZwn6rZWrKQScDbcrzD3TTHaHzwUsh3teBESg",
  "key30": "21Req3RHhpoUrAykQWWvUk6kVtSR6Lhrzm2VygUofdf2ZnPCeDZ5L8EEBpX4HNKGMsh2d2TisV3bHAC7aWHwpxNL",
  "key31": "wkwyRaLHJXKgsbsE5QH3QhqG5nYrDLQKyf92tkC5YisbZFUw43ift8WMorwy4S3RRV2YuSABwg9JpvArKSN8gMk",
  "key32": "3GNUv7DjaEyDjA8BTn8NiEHLUJyphQQg9LPz3ukQYrNERu7ZAKSuNokNXXrPUWsu1dm6XZ2FXWh9si2mYZrDhRW",
  "key33": "tiQ2bJdjEfzhqFK1qEhXsHgcuCwjCoNNMg5q58SybdADpg4VqtjtkH5mDe2K6TZzBxENC9b5T12DXxqyBxdiMVK",
  "key34": "5Qy7AMjCaG2yJvZvTWGSuPLvvNsJTU3bgjm83R4pBDYzDQtwYhjJhc3QGo5NBtvPn8j97XAQjs61zk4cG7sKLUdp",
  "key35": "h4VadgEDhDoKFD8RHeqGBsqNJVG95agdPgJehTyGeiJuKoyu73nwetd6fKiVzjkSKemBsuTt5zekrWaZDc9SgsZ",
  "key36": "5fVGY47vi8VmKwiB5S62XFagAmVkSoJ1NgeQxfQt1NvGjkBtMcic5gMwLwwXSRgNjSYPthik5TTLHMCF56KJjXoh",
  "key37": "cgHucTSVCDCwMjq7UW1Fzw7J6mju81TaDTkeEB4uHVGSVGzZySFJ2sVREYKgQNZKLsVsTwzEvfQ95ECamxotn8v",
  "key38": "631BWCq6TiWaDEJpbEaRDRULHo7nw1acSGYhQdrmva8cHzq7UL2aktbPHohgCcEsbmweUkKxEtbirUie5wx5Y6AF",
  "key39": "3ZBigm8njRqmgSzXWGPge8f1FBBDtcgvx43ofpxKAAERyy6ACDF72b1aDgfYwZCLLazW8ty8shd6SDcigLbhncxe",
  "key40": "4f3cT3S9hN1ftRs6sskJQz8aqNVdpVSxMNy57r5eWfcBKhoheD8Cd6HphthnUNRe5q1FQG1vkdk7QjUANwwN39jR",
  "key41": "4kTPiNHHdHqjpgEjKBnJ4qcETS7JrBdw4Pnr1VB4SEjGRKncfvvaThqvWvbFMskkowuNXmG24M7DEppxxbyjxouX",
  "key42": "wqG7j8tcKjRXsyFuPXQdMk82P9nesXfRShJithQ1Liv6wWEHK4skGmbJq9xAvce9mP2iiD2DVqoyg31EooaRzL5",
  "key43": "gbh8xgKvfJW5sdaJsbUQ2pFcPM2sT72pMQFwYJtwrqTABYu5WdLWCLLuSEsKz9Hk8F7rzn8k15HaucggRuJwxG9",
  "key44": "52cYuBCCNci4heTVfn18fWUTjz27MMk44VsePykoGtzXmGCzj73r39tT9FQUxtgH3ugsgMFQxxc5R1WwKK46RpXS",
  "key45": "4RbAR1FJ36yAE12avetJ7dRQbFCWaLydiVFEqyDEcdUrrdWDmn8w7m8phikz7ac5f8v7iE4jKZ1iBkBjFd4h3mCL",
  "key46": "335cC7bh6WfdCPeFBjQiDCpHCnHNc5XdPBsoWVGkBw93pqP1HEg66RpWYJmzmtuLEDCeJyVeSs5xMjXJsmxXC4fK",
  "key47": "3cQfEGEpEdsxqH5gRnbRq8jghDvR7aUQaVrt3p5BddUrzN4xRLBjBYMnmeRZBYK8WD9RQ5SA7nTLamK27BQ5Ht7D",
  "key48": "4DD4k6zJD1bEZfgX2habdUYmfsxNVtRS1t5P6UoXQ4DYQveS9Fu8T9Ym93dFywJjfwMytVnhLSJshKuVDU86YUAP",
  "key49": "44jMdgK2MLdgLfDRnyHy6HwEzpAYnrqqNe58Z7mYqXYtkAxayLJuSMKYhZ7EcDtDTvTTBr5DMrdHmHr42xqMLYMy"
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
