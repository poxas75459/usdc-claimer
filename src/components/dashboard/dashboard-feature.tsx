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
    "5Yr6Sdmk9yBv8ci6iVCUsNZT2pjKcfypHhYQDuz1ZPryhYQCTT5e6kh2HTm9j7MSaMLqEVSXDihLCdUUZ9ijCfyM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Yj1d8Qr7owweLQcKHQG47u2WXamnzgvGhyMftfd7TaC6GEVAQX4nXGK6raPRGzboLFyNCw9KZQTRMoZyH2hUPoL",
  "key1": "4D4honB5UvLqqoujGFnces8B7kYYNHbdT9A9x3ZurKjiim3m3A9kdWwAetkqpeyneSZzp8q3gjuMqGEpQ1sB7SPY",
  "key2": "5RP4XHfBn5aE7uN6qcnpjvUNKw8NKZVw2RXrQRonc3MssTb7PwyWUjfxG268UBr6nB9XNmDzb3aktEZAfhVQcqmw",
  "key3": "aZwSpvC1VDwMP5KKzab3BtPWwH2EKkXRNhSxopd8ki9qTHt3JDzT46e2CodE9m2xyFWP8FBUzafHwvx2dHyKiRJ",
  "key4": "MK1rGrUY5eeQo2eQiteSC5bMcn8UgD78LGAyzEdDfboR6nScDipgjcJtSVubRzXEZ7QbGb8QnCuVVFFjKbrUdpb",
  "key5": "2hWKbpbKQvEwAZ2vSoiq1uGtbxXf8N2PFAU3u8LfKaJNHznjr4xXp8NRTXYQbxuHLvRiMEuNGCFzuLyDeVcAFUGF",
  "key6": "3H7P4fiVLvz1yYcpFRmyVpT1WNa9pfoPVLApqwCebuvXU1ikSr57CLnWvYEvgz4jkriQMEsTmaVzkrX2hMAzDWdW",
  "key7": "3YXccvgfP4CAUUvj54LKfDCaXBwxTv1TWaSTusw7keoDfFGrmYPesHuXxGhiUMGxAgKXxSDnbDsxTok4CrfudLSZ",
  "key8": "5PCBpzMit7XuWA8ivCqNhtnHWdxaJf3GaWk7en1NG9de3nibkFzk7mwczkCgEk3oeWJfg2aoXJunq1eCawtmru38",
  "key9": "4PKLbfPrkY4pMFnEWopA4JFoXzGEFCVi8kbDwUkkPHVHAap9t5TvjsXrCyDyAFvwca8xhf59qQNQ3mYyYTktmsxE",
  "key10": "5EbuyRVozFM3VJ5y7Loqt5zLV6tnRFGLi1B6dVGkfzu1GzVAygU9SLdjtK2ZXVLvw3y7yg4ZkzS4GbJk7idqVb1H",
  "key11": "2cKVSsjLSHQYiRrgtcjNmBd975WRGBdsADfm1K3AvLivshvdq4FaYEUUnZxbGEUiZUYhmvyw9FEzBcWT3BLQ6m4z",
  "key12": "5v9vjc8G4uJEKmEUy8o9QyqD9eP8uz5xVj4YcebHNabTvYrcDdgnESVekFiGVpkAm7jsFonbynmVLAwfJBVTBwGC",
  "key13": "5KecNkG5Z969sGk3NdXnWqZ1Y7imKHf1MPhbJ8GEZMmm1TVKqdTkrAN9dsQHt24SfTThpKLcBhxkmW5S11Mr2itH",
  "key14": "5c4iLryAoAqXyQsWuUJ3CNtSKiaeWT1tmAvexvw1dbCCKyCYrhUoUHoWr3BGaLB3oCnEL9HFoRULbkeDY5VmHz7Z",
  "key15": "5C6ZDY4CsjQQNQ5gLdZvZiGhmR82o85aGs1Cpgm7sj3Sj2BR534ereH2kGpMnbWh5nEQEgA1mUMXTGmWRxQQ8nZL",
  "key16": "4PETjeTua82vZeRsd37L1Zk3gQF3anVqYv11vcEribA47ZijwTKjg91dyyJDG8XumH6izsnoZsg1iZEuhch3P53f",
  "key17": "xfrLyiQgZMFPEmjKJ4Wtv4YMwzrqv7agSEyhFPW2bSQLQNXsqn5v1LJZxn4gKk9bTsruYM3E5UvcDiZxdsPrdPm",
  "key18": "5eF8YwmHkxfTpyc2QfLpNozMZpD1UnnLnrcZ4cXSeWsqCQpyou48RQhcREkk33RfvGK8rubCmrDcnPDQj6XPhnCJ",
  "key19": "zhNYbPu7NzLvbsCmQ58MVhFK1WnKKZJxZe1NiHGejDykaN7cme8s76MJSGy4LvbrEWyP9p2kcaykaDX5zgkxgot",
  "key20": "38zg8FdoWaB5szZYkJZmqqLjvP6YLoA5gmohaTedMSSmBfaS6bChfxyCny9jdMidq31w9hKXKSb4xM7RwrMVLJoY",
  "key21": "2V8qdbyz6r4Fcbmg8xbi24QKouvzNNC2kB7vwS8cb68tfDF9ZeiqFZy8EPYS1nHksfxyUpYQBL8tSsxgdRFu7HGg",
  "key22": "UcFn7t1ifLUmUTVWrAvjLXazMhJKP1kN7EC3bxhkgV7R7QEozwheRSjejn7vuGnqFX4ecDzHPDnCfQUEN9f843J",
  "key23": "2FZybV6ANMEyMb1GWtp8T9f4BXXFbCfTCUiH2HggnLvHkNKcFSoMb4ZTX4j9jHhLNMMe3CdhAccL6rEJz54w1Qr9",
  "key24": "2xkKbrCrD8TFfUcTZ88uWucH2U2aF9g23hnT1uvpmrR2qTMDzuXQ97Ffy8X3Swa16adayhMUyQ7NLp7NAKNeC9c4",
  "key25": "2yRYsrvZCHgC7eyrVzXFNSiY9isp4jxDUpVsCt3ZUy7Ljgex2qbyWqy1wL3uWkkLtcTg597qX4ueWTdyQ3ia6e2h",
  "key26": "3AmBCmpRoqbSdiLwmoc4ffgoqL2mq5KpyUDWJhFuH5YCaxCiXpVRBmxCrJAwHF3DZddrSzXEkoDZF2AVr9fMk2Ac",
  "key27": "56K3Nwda85khRUKcXeE7SDB2w36FT6FuzFow6syhcGDhSiLy3NbRg5TR551kpj741wJ83yRvQyXG12xfvDSd1BEV",
  "key28": "5gxe9a6UzUf3Ukna2awQhHwdRZDxGMfivGJL58rrX72Noo5Qhndj6o1DwihpNBLaX2FnHmWvvDLSK2yTx8K9mztu",
  "key29": "hogSntCEmyaVbCMaSyxc1B5Dqq8vNUwJkFB2CRQUUSeBu2gkg3JrAsh2WVNnw6vRHcnpadmKqtBrVLk6geA2MxB",
  "key30": "24hLDSpwRoTP4N5pTdA2s9pXu6eQt8b89CN5zxXkrMya5yQpSDwcJMaBuokHpcaF1YmuSfnVZj9qo7f55WFwrL6i",
  "key31": "49h7BDxsAXvcLSqH7Vyhref9AgWeiFiZv1HzcpJ7fkQwnerXzL2XWPa98Jx8TvqncV85rTyXvCpCFJR1P4KVPS5v",
  "key32": "3qwJdgyPqBtJtwtxN7J7aMBbWk3g2uFt9g3Nhe58rbUGKmtXTXReoWwW6rdBevCN8Np9hPzhTnVqjBeiLZNQRjTc",
  "key33": "5L9tphbcPRg2Hdtrt68svHN4myXCBTWNAauSHyQZKvQyMQUrJRuA4zQLhqLCR1ky1pHqXgg9gcJViT6HnYHBptXW",
  "key34": "57q2xhc8q68zxQ51xdYy22WiExkzpwH76fuk2rs8L33GbjSasyoed4z56q2rPDG8PgYijpe6EnB5vydLo89uidiz",
  "key35": "5q3Pqk4V496wqRaKRUSCqnLVYunsWnixUnh3Ht3oJ4MkVW4WKJ3EbBYY4A9wuZULynrXfA79rKwWZHdmr8qXggcV",
  "key36": "4eAduBTPFZufQFhq6FTcVvBWHiqiCyZ1zwF9g9sC3D18o8nw1eqkc5p5wttwvjgPovZBYaQ5Xr4geqBKgoNeDLoJ",
  "key37": "5zLTEgLPDevUW7T5KARAU3Zdk4zHQivLmbaKAvm1NQjRFN5KZWzpVupLGo1Kn8ZJD41CW9ZAikUzqibzH5zRBWoK",
  "key38": "4rrbudUNK1bj3eavDGLpvXmTTv7YUjto3kqv5KPVehWSHUXk6SWz98BdGnK4Ahc88KbmPgYLATnTS11YUtyLtRJS",
  "key39": "5KuE5NfdQhzAAeeNUXApR2ru7X5pMJi89fnFY3mCJuFL9TDfJyb8inA3SswjwLmUuBuLzL268tCyXu6dRrU3XEow",
  "key40": "23UL8cXGqgKme7UgvtFtGCSZuAnBQvmso4fHuzk1pLeeY6LN6qYyLe3qxCQ1994ATQSRiyB8c5DPsQjNLoQCFCzS",
  "key41": "PFHQuZxDQSAcHsbppAnsx4DzzDWRC7XAMg98oB7mMk94NpXhdt7hhpNAXvJhW5mJzUf1JgthgamXLH1NwrRV7md",
  "key42": "4hh2ngGXBPftjvBmLGwrcx91ykkE7tq55Bkj53jupCjZCF6R6qcHLiGutRVed8FJTMiqUBwHHqM2iwQEmuwNRgch",
  "key43": "3Q54VYC5gvhMddYzUwnuk6ERSfYFhoQyKoSciGBf8G5tQXCbjhgTeTPzgzohSc9DoZzq9dtZnKfF8zmWHN5PESD4",
  "key44": "2vmtz84Qaa1ZQHnXZCxiREPLUYuBfVCWeVHBD5TGFXPjHZGtd4ChNNMLXtU5yhoF4oSLjCastSoyNFqfXGeB2mf9",
  "key45": "5Tgrt7ZEjJzKPU3RoJUxPkC7AgCBuNmtBF6YEncH58iWxjWgcnW7xYngA14wsYQPMSvqbtLbeiz44T17kVYCi3B4",
  "key46": "3M4eci1NCmhNSaHYbkn4vj5jLLYfkQTXy3kQa9Bv9hQzdYtDFaCeWp7uMBtUJi78HV7ghjiGb7BGPdVjFXJ5MuJS",
  "key47": "4mMGFU612Qz2vLxWqudgQvTEt8K4WTKQtWMmrvdjDGa9sFXfkYtEgXyYKeD8wxG2axjBpH9oFzyNmoA99E2bZqqQ",
  "key48": "4DSzxXvd9mqpQjDtxU8RYspaTXQdsmxjXQYRhiNW4zwRnnyyU5TXQqzkHAP8NWLmXz2km978Y8sdiWMvETAYScFj",
  "key49": "3SxUYCi7Zyj5wACt1qbTSqr3kbKpJuyGB4ASBLwDvhS5PYQpHAGwgCrCWVJM1RwhTSmY8CaVejsGpg4cHpFcwo1a"
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
