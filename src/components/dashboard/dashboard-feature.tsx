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
    "5XiYMHkPjd9dpzA5DrNotyhL5ATjRdWXDHRzZuSRpCdTeEg2yUbFnRe6WEpPoAAzAUyfL9NbV2axhZPrE9M6so2N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hS4cEths3uu42tkvhH5f2Ez87wUfUjCAgMTKCcPzwgbz1645bCVuz4iv6XY9nckJz9LeYvS6Q71hVhBvYYhcqXS",
  "key1": "4TL7dAnRZgoJSbVFiqwkeWFRpJVJJtKjWmemWef6intUGn8byVngd98RVvvBGdQFh6L5PtkcE8YwVVJJpqf1a9Ld",
  "key2": "EYcUKGo6EV2jf23CuSZmmzUSYUuzFuDDXVN92WA9Mwx6SiPSZWDmdaG1RbanCeARGyeuiMQMEDiX8NHJxKGyRyd",
  "key3": "9wYq7N61Vj7orBJeTHqruxrwSdnMK9yD6paQnCW5Y43ktAQfaBBfruDD98NBgQj1kq7VxWm4oe9fJhm9FVU6PPr",
  "key4": "5KsNALpAL6NPqWftryGZGg4ULnGj64rpsrAmLocZcVn37yxdqSDFSDzziiwfqNpSbunwUJSvUmATyjccukdb8G4w",
  "key5": "5SPDGMjpiSA4KLnemZDBLZK9RLEAaV2FtttcKcjZxWa4cDJBmkVgUD6xnWvpHGwKkq8zzCRj6aUPaY4ispVPLdMn",
  "key6": "5vYvWJKfNf4cYdud5dmvFPbbJUEiKSMDZKL55MR1V7KrhR2zeuXfkhqTNSNMTEtLC3Je1mJd5exrXWoRHgiTuzps",
  "key7": "bZChLayLyHDwALNsyfntVtTWsAS3sfSfb4TQdPRtQq9X19huH2cyQdwCuPPDvorP37E4DRuXnqd77oJPF9RGU1s",
  "key8": "54BZgxhJkyd1FVng5AGigJLmXrtd2VNNFFGTy44wrV3afjHxA5ph3jA8uFCwQ1cYrJzXo3XGVupgZTa2T8T8nV7F",
  "key9": "WTRYVpRcAyJeBgqZ9u14BMper3j5PKd8dJ4QScSim3TSNFJKJZAJBH5zTxQD82rKN4fNUPMUPi5feBqQSR3VaYV",
  "key10": "4n36jmnPx8HSTeAAmr2UnkFAhR5D57novQg3sqkWQMBAFCb5knKchtpQF2o59GqSA7GH5DYgrGeAX5Gyc7hfRtks",
  "key11": "5irDKBeSiZWVGP6FM28dTSMKYM1nz4KHJbaHwc8AqAvv5h6jxu2QtTQh4YftejCnJ9VgB4rH5TU3dsKm3krbGNfp",
  "key12": "21BJjmC4w46bHHaphNhfAWXaxmYC4c97UyYMnmmvVuzCwwPTdPrdmjSqKKKjFdDvRoCn73fax7V9SP25rQvCowzy",
  "key13": "fJ21nzAoFScdynBxVaMsMDPdvAmJxR7EA9BVTf9KDrhAsR1FW7jqwAqPbDRx4u3EW5NNqiYn7eaU26qdPgn2e1D",
  "key14": "4kVwUmujMDGzd9nvjVoW2Qc5YQ6xT4YpEzAsGQQvwBnuBbDygmssBb8oRqQkBNgixcwqQSedEY4KdZkP2MnfbCdu",
  "key15": "LroTBKBRms6Y97ZuxdGPMTd2k9K5hzrF8Wuqq7PgVRovfRkmjpyiThtrzqEPWYVRaamsWQKysB3Aq7z7t9bxxna",
  "key16": "pYdTjCgp7nk3QMifPiruwf3gFWuuaACkfKiuFDXaJxu6NgWAL6qcULwNueGV1tzzAMuLXRAh46EHEbxTVRxHhsm",
  "key17": "3czRKJnNwLLP39xLf15N2Z5jGYG8bWP6Vvgd8NLJzZwRafhZTzfz1yvtaQYaU9g9NpbKmRqCwUTr1XcD1BpRDrdx",
  "key18": "hudDrtCLrNJwVgWpwZixd3BcQP9TJSm4276McvuTf6ZSDSVeg2xVwS9MiD5mmteojWBGdeC5Qk65G62GKwmU1z3",
  "key19": "34nuG3n42kEvTnNZwBfJ6LxcYdzUkjhqsMe7fX6isPZNMCFhrNKGvXEQCQJbHZqHaDXK2wy5wudH3r4YceZvgfth",
  "key20": "2XvxcNiPUGbuARBgpejYojkE428W2TAQ3bq96eXEkjsMTQUzwfRAW3PFD979V7tCaQ7u7jq2TLoDKvPUjpibsDPL",
  "key21": "4kpbc4XJ87BxJco9vtMfz72zG6D815JXx78kMqhZsDJwQJdkEQwaqtmdrbxoXPHsia8jDzf7ReNKTZw9wwFPdkrx",
  "key22": "2DTiFVjck3C6PJBxsfXN31CpfbLTvv6BSuBEGqMhKC9cGjwKcGjM3x8RF4b275AmXLPCNgP9kEDdrJzrZ2P2swPR",
  "key23": "4EWSjFi1pxdWStKNiLw5iPh6W7NQhnTKUdpmqDiRkXfxmod2VB5RLeMPQHemuCB41Lqymp1AFg1c28DNF4bwWFzW",
  "key24": "3NCvVUFrvYvSz7KBzfyphNZSbRskHV4ziRPFwEZr3spRoP1QUScufRrurLWmt5M67LTcpLrx5ks8ZvmqE9HYRXfG",
  "key25": "2QGnmzBpXJM25Vm1rf1pugLWJh91R4M8eUofp8Mu61vNfTTQLNwfMpKJfFAdrsUZ2pN818Eag5LuiyENvd8sViPx",
  "key26": "2pWRPPDVsfPNP7jnuvhmPjBWtWPY1LAm1TyUtMxpgwUAynuyfikBjBJHFxQAL9QJPydXLGfkzXfuU1X9k6qh7Ywj",
  "key27": "2mMvNSdN1WgGUvQ7kBMSV3st4ujP4brnfJTuVFCE3yekueWpShxgwSVz8vpgJ6rpDyBxAUcR88u95nn3BRzkZGvh",
  "key28": "GVcdPLGA9YZertFo3R2sLpKpLaK7HyNZAuow7K2rNyj3LvizSaTkfALh3vJNDbBAxf1Dz3EfswXmsQhaGUZGCeC",
  "key29": "3VF1fbjjRXfmLascauX6dRXGW2cAXdKhX5imPTQvvWLCNgUkVqvFAEro7y1B27kAgQM5CZT8oBQ8GwR6ZBMUkxRV",
  "key30": "ZoSuWZRcL5YiXDpTLw7HQr7N3Dh2BxneZXN3c4anTBQtA8X4LAERo3h161BMjMSLHuZFBxi6Q7TZnkfrdXR8ZPP",
  "key31": "2MhJ7FmXV4JWUar9zLqBzqHf7nXCj7PAtnNck9xcjM7bxTpNSQpzGqmLJKCFe88fY9b98mLoKUu2CnHA4EFF9nUt",
  "key32": "5sCu66P5DurJSVZKsd7sta6ToFcCY91R9cCGBV3vNrHZN2BogtHTuxDuoth7RXtfsDzAUM2Sb3VSYaXi1JitkiSx",
  "key33": "5Gv644aJdAjoR4nMU4vYiSvhJpwQT6ajJPiqespfpHKcX48E8KMbsFjvaoaNbtJiPDdgYKRPN6FJ6xMsh1dmiGmd",
  "key34": "3zGk1v623HHxxEUGCcJyrTSJrpuE22cBx424eHZtFgArdBfv1WtUZUMivQnwkbmazP79w471n9CnQuc26hY85d5t",
  "key35": "2zpY3j1JHty25Fjdrd1GPr8JTZZDgpQTaZUXWGGCQERTZfwnaUhH48wAgCk1eVunGPb5apwS6xDiAMRfgCcEiMk2",
  "key36": "59beAxRfez4FfscgoHWyDVH6BeWkZyrsz8NhUBjeJXuMEmfLv23dvCQN3FWrqMJsYVapWQtNL6CmGR7Y9BXrrYwk",
  "key37": "ZbUNuFbmTuovkvLtALC4StQfj8NZhaoTpXPkr9WaL8h5p3NH3HMDPBCr718eSMZ135GhgKbgSiQqLtCCvyXFddE",
  "key38": "YJn9FCS6RHT8pEDivYYfWNKCEJtv7DBVoK6An4Xuqde1Tap1tXx7bcNwsWymKMjbx3Cj2QeweMYTg9EC6yqEj4Y"
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
