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
    "67PKssftA4PRxiecx38UAAjD8tzX1G4Dk8nTEAoGGmaSMoFdgQAzXmrFEuvA7Z5JG1EVkMXmfoCP5QMtXM5Yv7wV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GCQYm66oysX7f975FSsF3W5NbJvC7DRY4gzGqcSq6nmcnXka68dERqExxoaJMPYChayCFfebDS6sdfYM4GeXFTr",
  "key1": "4qJ1Y1ayonV87WYBN3xW2FXcbhUpJz8QK7zf3Da8CmQzyAMFYm1YEQY13h7CxTAgYczQ2K9LBXuSsBkwQD111nWv",
  "key2": "51XJqy4aWvjahQkzJaAbu7zwuSR1dJxoXaL9YPXhLaoE14Wi14XGi8kMTuPvRopC5txxcXzhjnoqUWsKfntFbsZ8",
  "key3": "b2pFMRyX3T4hTMQYePe8jM6KBbNfFc3FadvG3jg3DgzWnKhyWpsyR3Pe1amHobn8ZcAWHmkCuGbyy4q4jqEnE21",
  "key4": "GL446o8vL1BPbi7s1xKD7R6uWn63K9EKaoXkXiTnULUsjoATGnza4teYbUwWJfWd1A3rrHneD6uFaKMcFPs29dT",
  "key5": "2HDJnNodx7yYHEqGjkAJr68tF9FNZzZ6XHMAW6XPSJnmvBpPD1h1GnE5cGX418WaLt5CP7EyyZ8jrZpKCL33Cfpu",
  "key6": "SMwYcJr5nXLpKzmCbXLXDVe4oyRkLQ63nLxBJ5E7NnFhSUgBG3QH1BMsciwSm9gfGrQ8GhjRaVfKGCdf2kKh2ME",
  "key7": "pG8yzmodSMswQzaVxDfqDrNFVZRRo1LWhktuzWTvyGs8arj1Ppzp96tpQVdR9K6sJcx93EDSPAybeHvj9zcwxLo",
  "key8": "g9tX22K1c5dubByMJaHeu9w3Loc9VgactkXrEFzu14NmyDhkMK56TxGhGmdXUi3AcYweawTPNdi9KLnuCFFWzyS",
  "key9": "298zyQqKEgSYCKyjUbNTBEHcEQNVxGBV8snogTJQkRZFGjMM9ft2duncofrKzPk2sg27KYyZTwEKQbqDWswekQTS",
  "key10": "p9VDPUX6LEDXJQcm6pDZ7JpwkC6sLhcFYe27eNNNzvrGRbTbGDyXMTzbxrxRmSTUo9PZC1SL5Z2v8bnjiwcVXBw",
  "key11": "4Vw4BaThdXnYx7nhHExa8x6QUEFpoW5HMFf8WxcJpY5RKvru5EEruMdfw6S5yM29z4oXZ1uH1TKoyzggi252kGff",
  "key12": "5fpiM4749BtwMujZZF5dxG7M4wFJAZWu8RHU1pN3gBw1jeF7gqzybNXMfwWEmu8AJsGdikXV9esez7rvD5SaPtxB",
  "key13": "5ydN94kAAAQw5SHpsbmQorVRTMwCWNpj3EuyTU8feC4qnVexrbjMydha9GtUeAEKuVzXPuzZakDiYY6rTV7fvr6V",
  "key14": "288urTVayFsoXCzMfnJovJpdpni7WoWhmB59VGEiMgY6Sr38wwEzJyxtqRopx2FkZpVcB5aop8wtL6jRhmJFLubK",
  "key15": "4hXyAbi7eg9uRWPcAZ9WvvQDoM2rbJmdARK9gBtZAJL2HEPaPqYamuUw5sZ2aNX3a5uShcNiV62jw31hxFUpnTjS",
  "key16": "5FygKuQ615JZ2AtGihPB3dKRdiyFjpd43REZPywtbGDuJc7UWmXkFktCEDJDJv9CEF4GgHuDUQ52JdcY2SFXmdnL",
  "key17": "56eCB4yHVfs5QMKQDmFhXDjBiDHMc8EPL3vLz8qxuQa6h9av6o82uDUtx4e1wjJcM4s6QCWn5LAJPqifQ4RAoT9H",
  "key18": "3nXAy1vAT6ySHg7oXYSw5Rquk1eUhk71wC6zzYyLYjfraiFswvLU9T8e3sus39Yp8ma8hpTSPNWH9AbjWqzDmtCh",
  "key19": "5Goouzbtx221dN7UXXMgg8wu9ndagUfxk27NaWnr3h4tk7TNf1EXmzieS34dmvMgS2XiQjfdqHsnm9rVLeEonLSJ",
  "key20": "5is7ZBwxkZp2DoQjAe4P2cSSehDNc4XZGoS15euivMndDKst7HRjHPB6wEiw8kEvtL24525ssSzYx6MSYi8ErEdS",
  "key21": "5CpUcLguvh4nVszCxYmNsm3mLvEmcb3yNkmuMhqMt4VPV667jWXgfpnjaewZ33QYK1LZsSQvJ13b1Kh8MUBUew4C",
  "key22": "5Ysfh9TsMfTHwnwCycK15QKe6mLsLB4ZZSQrgL9vZ3DggpaXvniS4bdkgMgAcU2b77Zv39kjXBVhr2R8KmutjP7W",
  "key23": "4HmM43m3SC5Tt5aZ1fT9R1VGwqch5RLTBQGE9RHir118AUU4eUu7oFnheTsUN4ocdZWpUy9dPTXWry7gWmmoUpRn",
  "key24": "39nn12qrtak8GutjDfC4fZmHCFzV2F9Lihi8BsV4XyngzTA8ziJJCPyn3rSd6GBq1RRnNa6s9skidhcfLhPvjiCR",
  "key25": "4zsNoZPLoKijzuVQJpYDpF6URxHGAoWmwtf3mfkbKZwb6RaWjvwgB7xQpvoMjxEqyYrDgDPSPbCR45wSbZ52HD3Z",
  "key26": "5NSZVopid2E5ZgPR1tttEDHgqsLxWVLWa25yzjoBTpXXJMTTxjqLh1GV8eqKRJ6pxc9WYtKerUDNbWP9fAk5tUNc",
  "key27": "5kTCSiHAMZrtJKnkGp2HFvfbcrSLJnaYTJtCFq3rBnY6tQABhSXNzBpYRhQsGJKTey5xKVnHCWQYgGH3vC1RukdK",
  "key28": "4AoyWNKozSPLuoAgnwH62dSFzTa4fhaK9L5YQ3qzEgSBg8xUrANAjyexLfLCg7KeLp6z4VQKGr7hw4xUsyLsj2ug",
  "key29": "3KWEAM1UQPpdVdPKaGeDnThH7nUmefgsB91xnbmK39ue2fssXSvL1EoHtkbYoaTc3WGwsXVeVZzvDtcjyhHzFkaa",
  "key30": "5thinGu8ydSqi4GZkUqUM5HqhZnMz5QjH9KHHqzkm3ErwyxETMxNBtzvXdnQaofGD1s6ikKKCym11MdBavjJYn2q",
  "key31": "1jrvAf6nA9n7aLS7QvyEg6EkYKquvgPkr9CEuw7KA1DoqzcxMfAXJxARTqZE6cqQh18i6i9cL45hqtN82LQ6nAa",
  "key32": "2dNDupFmgoXQgEJytdS5ASJa3CBZBugRs5McMCWcJMbAQwZ9ksmHtFgPt6rgb7gUWYnv8fUDXzLmpKJ2rNrk7vZp",
  "key33": "5DbuffYoxMNi8XPyheBSQpyednt8DFvv5MxGeVPpc6eJq9hJ3xMHvDVCzmsr5Uodiz7i3HQAmkVouTLraRd7xhEK",
  "key34": "23Y5nzdwvwkQ49avBKQ18mJUFi5zgDhJU6XcrVwNP6VBoHnj6fBPgETYuYx5H5Ta4J6BbZZy5owioK1H1RyGZEmK",
  "key35": "5VTG92CyznsS6DBGQi33zkGVEN1PbMHefqTWpCN5QMaW4VEQouhEUPtHjE9731bvFUPax3jahrX7Y2orp84Zp5E2"
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
