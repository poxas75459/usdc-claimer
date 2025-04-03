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
    "2uGBFiHqrjJVaib5HAGYiZNP6SzLgExghxapeY93MSutdKBUAbA2W8f1WLLj88d8TAzxA76is1gGh9X66iKiaQrW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WYzZCriPWGpZZMc61WKVSKFz3zC15uhtuGb8gz5vtwEPfpJWYQJfVJuXyvU4S7muw5YwoEC5koCk9fc6soF12b8",
  "key1": "4uhbrb2QNTbDQrhLx5RDaVxi6gx6oUKGkZZVgURkjRa29vaNEQE63ATQ38dTsKxuPWESm6CRdBPUto3hs1mud7Mo",
  "key2": "recMxepMPy5PCHfD6jdxLiKjJYu3fhQjA9oxPJ2bv73kTKM4VpPfVkAYASeNgy8FLQJh8QMiFFXTBMQjfiSUL5U",
  "key3": "2oAgr5itfXhdoJTnBFtmx1km8EgHtdmWN44CqPDZQrXaj7pPeQqDLnSJ5KEPnMeNarZucHK5kriEA7dxvZhK8Dny",
  "key4": "2wr9i4o7U13v6WtbZ11TRtUBrf74TvLmr78UHScQWHtkKRfQeNMJG5kGyaEch8uGfzRdxAivCGUobzPnbhdWkaSQ",
  "key5": "4n5hBQtPa7yxkvarwnWgDDQdD4FJNtx25g1vB4kAMprVqQekt8tHj3abPEbELySxAdYbHeS8weL2Wb6emDGVPU5L",
  "key6": "5w7JzPu9q5xRxXADxgLt9eD2URBoan2HvyCZqr8xS34fYicJq6wPhTEeYkthrzKPYJa8kEFvsS7m29tGAFidz5Fc",
  "key7": "4HKwDprDtPQD11c9r28qeC6fdwnANSX5ebR9cdCePxMywpZmo5j5UaPKKBRdm8dEGRDym7Uv62uXw8HbKFueU5Vr",
  "key8": "2X4QDC7D8dQzRLawvwmx2yTySn6BDQ2Dvw9N44MhZH8Xbe7aw6MA1akK2wTFYMRaCKqwcqs3Ci1Ha6ZHnxshUZfN",
  "key9": "3Akgdaw1c2Bm1vBWjeqURi2TavJy9vFXDNmAqLtfxbuaU6G9fqcHNXu9PQ5JRUWBXxiXvq9kDusnTsRiqAKJRtKU",
  "key10": "31vhKEBDo6VF5wdmTYejJ1jBSRtBUAnnEAA65Ch1mD7kNdZs823xvT35mHYNwa7h5c5RaEutttHTEeZeZGUUXRTJ",
  "key11": "3YY5KHZ2m66MCktVwgr1f89nzreZoiUBBq2Qfa4ZuDxfZdtjB8mPQce2QfV3mstZqmbR92GdAqxdVdT2Ei5x7aLQ",
  "key12": "5wdj2njETB1Lw5B7EA5o8hVK4SXpJiogc6DpjDedSzhLN3v4Mc4bq6ooMHrdsvF9bZtH3hD4uNmKsJG43ei8bZBB",
  "key13": "kCmWCz3hos72SWqejZV369e65epQ99YrrcrYTVhQjpk3umLSBnGGGxu9RWGeuSfq3eqfZe7tbCZAyNEcqpmTbFn",
  "key14": "2hobXB9TkHRJ5fRjB4jMFhYaNykB7dVG2fx5nYmSCKXm5kC23WXM2yAKg3ngysuteH5wsqHg1DDK9wJPPqEQjhAj",
  "key15": "DFaoKD71pyZfwQGd6Mcf2tnkkcdQwujMXK6XFwcuTfRCYk662Yzp6spJRYjqRgbJ2tv4ergtNhe4iqotAQxzHpM",
  "key16": "iksWHd3ee1WpXmaTYdUn9dVipjqiFC4bC4ZGC6ZF91tyBBNnoSSLdbSMXUaZjuSjfCyaiyfSm7Wr9YKXnAqpFZD",
  "key17": "4ZDZfUgkaFFgcwpdk3X8UMVvnge5bMWo7eK7rNPnEbqbJR4sQTY6DACwsR4A4qV1D4r9vG9t5Wnq8eZ4Qbgi4THY",
  "key18": "2SfBAXZwnfP3EKA3Cp35G3bb1afGUbDAu7cbs4cHqUE97WfCyCS4acBbLq9jzWj94zfwZreKG2qDc9qsQWZBtbW8",
  "key19": "45t7wCdmVdo159MWh2T6jJdaeRizMYDN6nSoW4Ew9cjikppVPnXs63m2LsPDBvpsHPBHAux5QJpQmWVRwWAvGTKj",
  "key20": "45cHkfTj6ZWdx1jpWHvsux9cia4449XWSt6f4c3LLb1emZNPBBxgw36YhkTCCuW8x9cMBzPZNuzcysBTfT1JW3mD",
  "key21": "iUYVVn4ebzUgmTrBtWYi7gRsex6h1kGoUtmCMRdcPFjdVawr5nMDyP2wrKrTMtgaz4j56DMoFYD1sdkeWswCM2B",
  "key22": "5vG24rqiykwBEB2d4Lxvi7i6S9ua9RfD3tDsjbmhjRRUDtgQu2WTvPWKLpDNuvHrgx8bSugCB9xyUgZPtyizHDgL",
  "key23": "4QqL9fvNcy5tbcVm1rxjcEhAxxMjRrEa7BZGtaYrYNrVnL2LpWoWEFkbb5JWZaz8aEYY3CgSkoiNSz3vrxyGjhps",
  "key24": "63Q21RRhvhA6aMJNL3txxSLpRkbfj4ayf5EdUzK1HigUmkKePCnA71cT31UJm9AXahwkrBwaL7NEAoQ5rfzgVmYd",
  "key25": "2kkwh4BrSZQeHtfxQvfKjMsmsSG1PjRYVxFWQJrTaR82f6aD8PzeiY2B93fcEiZTFLGVP7kJr2cULMAohJ5JSZJG",
  "key26": "3KNk4wgGR2nmgp2BQJ2aVNFS3GB99uprLTi58bMVPtXEZBpipUbyELGud4ZoJh1USmWzs5pwAaWHbPyziat3rD9U",
  "key27": "3UxPTZVs6t73HoNiWdN4dgE2TkcPi1Pz6EHKXwWD1Vzt4SbAyFFFDXP1J31jzQwr3p3kwLZUy5BtzGSpWc8zEzEm",
  "key28": "3sn3eSJFCevj7pcWwT6JzYgJjeK71VNvb4j45Zj276Rc5X4QezkgccTm2k6PTcz259xvYYgXcrkg9BV2kCY4PoLM",
  "key29": "5vhc3jMDmL5B5sPvYDyLxArmWJMQynNJcNC5RySbtmZJbcR5VL43BKVz5QGNFdqTAU67o5VbFaV2UAuHDrayrPRU",
  "key30": "AU16YdmXb1qxJZ8uHeCod8ipyvkdUMGq1YJa5ZBADZurLWTGnT66yx2rWjR3QkdxoAdr7qMkyTyRNfFLa4HVK2F",
  "key31": "4rJXfyfa5MiXV7873iqgZV7A7gwf2DKmxpt2cRfGxt1GbAr1rS1N2z4sTVL1tfFyJ942YLnPdvYBTTZaGN12EZiq",
  "key32": "g9UfbdbuiznbAtUxx8tHyfe7x59e7E6EGgad5ahEMQ9axtXbzzJVkvpUxEKLbjWJxBKQggcXu8i3CZnwwwhS7v7",
  "key33": "tf1xk1ew1GhHfmtip3ARQkd6p5LZbfn2VWQfSoWnZYymDmXpoqH6wHXn3f8zHh1KfV17w6JhhaCBQGX7da5kwJU",
  "key34": "45pqAACfZELYJ8L6d75XqdNefmfLkMQEwjGikJqqdsuAtddswVxqojxNMWgU1mqpKGxJUQ5wchCyEd57A2vLM7fa",
  "key35": "4yusEFyGJHGJw5eeZSnacvNMgvVJPdZyp5PypNKMv51UvXaSvB7HkZJ3RjMXBQNxBcATEUEvRbxCmEjAgF38EE3h",
  "key36": "58ReAWsfGScwuY6VfNQQkNVWxoJT6c5EmpC69sUfWtr1JFcwtex7nhHLXYshugGCT8FT4rvyyTu5HDKax53D3hop",
  "key37": "5v8ENzoZFsAgJwmGJwR11jJAv16VQDJtMHt4VnM5iyrRYkeCBdnCb9PQChc9xr9VZK2nTzbm6ceg6F7qrvDNaNTx",
  "key38": "o32ySce4mq8AJgyykGe2tBLFntdzBjiNEgQ7gVde92kLm9DzuPp6vCBUUgDhZLpvchZcta213W9HU2FrrxGgcor",
  "key39": "4TBXZQGhH91VXVRffg1QzFg2Y73NQ1GVtyrdLTZrzLoL8bgGNHdzhK6BppxRcnpnfXSqquTbZrki6MgQCgZt52p4",
  "key40": "5iZkXrgdkkSMQkNcDBuxcr5z2mZEAg5n1umWUjt4RhLPDJYYZKMxKTDtbBofHG9puZ39CPAfDyHRbcHkv7VUCqae",
  "key41": "3zb7vGCkJmFYycuS6Nmrrz8svUUPGAdcv4V3RsZtNKkAxH6mFxGW2Mz8bUSQ8WPGxDEprG6JaPSMnDujFLrvNcCm",
  "key42": "2Mz1rx8GCSjmyX71w7BBCFgHTLwMzwsx3RwwikhtFrJhVRXd4eqfminkSK2yxjLgSdfJZUX9bijb7UR9ufnDhMeZ",
  "key43": "5bXiAeSGh7aPu2LQCJCE5GTTnS16czu7j4Yy8BP92fxuku2B3yGJB21FJBa8bMTBeLKz2k1UgkpiNxeMriaz3b8m",
  "key44": "5YqgpTnLrzkykLhuqvVgKkMJNC4PXWm8xfG1m4EuFjorP3LY86Y1zR1dzANezk3CaX5RYsVmfWDdh1fkU4rjQNxn",
  "key45": "3fs2RWwuGPom3PzzZoxbLxhZJxm5RXsvbJgmkSUVP5NModKaiA9kHHBuHvpb9cdQvsarKJy6vhcxU4gPiJjSNGHR",
  "key46": "4za8B1wqjXbzSNjmA1EpwVQC4gUqs1JByqo35hMU8ksNEeYANEzcoxNqj1eSWwZZjsv4kDsgyUoN3Sx69NemjqSG",
  "key47": "3WjQcB3zv1zDfkST72uiRJSiijjz5SUnL4qYZyfLtmo95Kqf1FB6qAgeqVMb4g97S7YxxRExqeRXW9sNxtNt6KZ3"
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
