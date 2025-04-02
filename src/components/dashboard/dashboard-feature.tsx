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
    "24ZncqQpSZQVav2XNBVKg2xeEVecGkxtdjyMFD3MU6GweDktVcrCxXrwtdpMRPNQydPgmmpDAAbQTobT3gZPTNyz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "642SbNHQtCBLFmCz8yGMy52najzAMYySitL9rTeNs5oy9bcCfhmhjzUKq5Swo5xoUTuCRD4a1TidFvX5ijPmVgKw",
  "key1": "4UJwmTeeDFxceH6AEGzLskmSsz8XnWtQ2aqqRAzUtoqp4VWnbNwEazSfBupXhtPBtjRoZw1bEmdKshFV5WvZoGfp",
  "key2": "33YnRHARxEafHZcrbLQM8rx18f5eYFLEDkzK7hmo6YjxLp5o3A5rMBzcjjVz45NJz1SZ233jRXRieaHjY7pCdFAJ",
  "key3": "fvLCZU6pt2vKnuxiaABGhRBiEbrX9Pfdhe2q8jFUmpC7uqZfxZyjrWWHn1AqnuyMRX3sB7oASFuRcDyucw3SX7w",
  "key4": "45xqfv9d6SiGpBHVsSrSnH3aMM2iSxx6ox8XJCGuaqmVQVmWUY4WuZmzyiVqNATXxR5kNgFhbZc4prYJd9ZgaLja",
  "key5": "2sMPnd6VY6Vz3YD4xJSfvyBPzKYWNLVbq65msiRHsKrLy7tLjjkQhQ28MCneD7rEC1K385hrESF4e52p8EDdWAps",
  "key6": "2Bt61s5RUqEAhQ67jH2oWF32UuiMWFXhAN8UcUqzvTRa64N219s4nCewBUwbEjEGjfWFEm3rb2Ua1iYh4D47Loxa",
  "key7": "5c17N4ETLE4KmoCDAoAxT3YU2xwPf3KBsonM4WdasSBEsN7WrCmJsR9Rar165ETtDnF9gEHSz4svwrZzzrHtbCAN",
  "key8": "51s1LdAp5UqLKmfWFYQ5YPJYoQNb2LXY1d8s8iE87EKq2NmSRtyWUopJPxiHKWzqqpGmQ4oDJvNXSMdkgje3LWXw",
  "key9": "bHnjsPFHJNmCXvUuCDKcTzKv3cvV4jFS6ZArRpu7TFtZLskvTKvZw3xgL4hXRExX8WVaLgJxahxQ3KsyFr8Fsd4",
  "key10": "3FyRthpL7yjQFtrtiM9naWVhga3S9cyXXJy7UaG6QVZiQd9oJGh85ThE2wNFFvHuMFPqNvw2qrZBpVbfkbyLYofs",
  "key11": "kZEDTPSgWd8TvyFWFrk2bQLuvroPN3aKySJzDJ7BnFvio4zZsJHm3Xj82Pk9Gz1pARGymjV1A9rXb5MAQTTAeAu",
  "key12": "4kUL5G28aW4g7irpNQ3qQ1WP22HzWQdGvbir4ip5Rx4Sg4X8k9TcQqrKHoEqAm8Cyd5eapw6LENzUtC7jzB21c7o",
  "key13": "q49Rvd5qUC9BDDX2MCpytYkwgFvQJiz9SFhCssF6ThBa5qdVVwS5ZNpDDvwoCP5wz56xPbLmy4fHCkMhJuUQzAG",
  "key14": "44qxKKp3SUJypKCaTiGQpGFnfp7UG4S4cgL97mppqAiHQPHk9o5jidFr929bEwbuwPMKejWUKucLKgPKs8p8i3aq",
  "key15": "4fgZNfq6cAsrJhGQyTN4zJkFAhQFm9HzLtt5ZPKd4qhzYo2fiULqV2pjH4mY14ARUQVnzzTUHAFdcHAEb1gVtGtQ",
  "key16": "4F9fKKbQZaGG3AMT6rkw9Ekn6bwzfrbKSWpW9cDhqA9hHjSs3FDsVGtmzkpSJhzkRy4Mm3A15pWeaLPZXXAggTGt",
  "key17": "2qqeWN8fhYWbsamaAkvB2CY4rur67TquwjDLDPZ4h24RXmAx1rAXhdkaDJua8MZMhj1HKRVUggdexmEgubzaoasy",
  "key18": "33dsJoiZFuoTy4w9js6XmVod7shLi6dxYRHniZjGC2Dx7f6shasuC6gBnthHHWqUAWZeqTYEWGPTPXQwfVcaZPFn",
  "key19": "3KBGFy9m1HLrkSaQD3HRzc3T58rDpFASLyxRUnaLd33di6MFJk8MnvrWUHtd8xWbgqr3XGo6Tr3dSeJRwtKRUAP6",
  "key20": "5sHv2X7Jrs2ZyM8UkCG3DUi6WnpNpeFokb1QD13PnUquTYLz7HhW7XHbUkHdSgp65o4yg5rrME4nifSGJVQGgb5t",
  "key21": "XVnM77KQTXhA766CCmqrD5gCGDmFXejKKc37qwNArK73AJHk8cjYW5NJeCCVhACiwQWeWamNj2Nk45tXVaJMESB",
  "key22": "5KM161616pFPtaLRzULhKksxcpErAp72AKuYiLmsSEPTqLrVwtNCiZjXX5eBjos86nLAQCe6nEU9ggH28NVdAAws",
  "key23": "236ui3b9MB9tPPfERzuj3jzJHFjd1KYnywncQGknzSP6TZG7z8gFEGXZXaxynRYtsrJpsPtyM1mmPGFHoupGoEQs",
  "key24": "2txcBEh5tmYLT4fZNYoAr8MZiGoUd9fufGNs5UD2baAvPqUgJRtS1JEsiLdxe1e6Q7kkhnVcvXYyDLLZAZNmbY3m",
  "key25": "2ZvZE82TbELhTgxBAj7evLoJxey1EATZKskXMjoAZ4DjrdyviUjRPdvwYR7JYgGFTW2XRNjYmugTNt8J1W3KkDyo",
  "key26": "62iAGciQMzyvfzS6CeZrpewjjwAKXRWyhDYuw2FvGaVFkF5CGTetSw7avCR5w9PLEMpUsgZPTi2uQ6zsZohjb78E",
  "key27": "48stSiWv5bo3ymv9BKWn2ADWqXEsLYXQUHsLdHV3heS2sRDb1wsJUBHdnu2cw8hg5yxAG4e3oNhCcMSD9uKLxv1T",
  "key28": "ViUDXFRJrCM3VWsaw6ZD2xLTkS1aSDd5dzVyAWZ94DiQwzfmN92QrnkV5jycPRcQZD16mMwCt9ErFedmNGharA2",
  "key29": "483BkER9oRas4PYAdF2zdUJt2NB2ftjsS6NmwSXau4DxwzGxgrJEvn41AjHRa9PXAxRiu74LNeK1tz15F4HsgKcj",
  "key30": "4gx5btyqEPsKtvFRLPUiCRbaeSbWdLPQCbcDjpA8pF8jjvYcrXP7jQ324S1L76q78DFLChTBRqhUJWvQiD1GLL34",
  "key31": "46ueFa5VuutTkDpNZdpMC1AkEgtkVRM8bAqqp1wkdW7JxSuvJpbMkQhGnBB9hXFvJ4vmZA6JEV1rT1vHrq13D89E",
  "key32": "3vBgQv4rrF44cQ6zCJ7zukhvdPFibM5nqF6GCeKCtv983DY7dmgX7DzLXQL5QPaJ8bgNBKuN5kJY1eWGUUUxBbF7",
  "key33": "57yYozigpABwZzTKbHVK7QvjCcy4nn996hP8jCpo6WyXN2VMDgKnt5jjS2SUUDAVQ55UJauHQsD3yZN4hCfp6P9s",
  "key34": "FbuaMd94xzfUw6PttQp65pPM53vJuoZq1EKSKRtPC8nZ1ue1dus1BNWFtC414h81F9aoByemDtKfkYL4YvEcRYi",
  "key35": "vKSQCWh6r65ezdVih2hFe2u5sz3tMk3dsEjpte99bL74Xh87EWgfvbb6H3EiFaEczbE3PXmcMZoxWeeHrjS3GR9",
  "key36": "5MXqdbSWoQnZH5pVaZLHrVsYxX5Zby6PAgUSM2pi1wELnxuWrqfvWaVLvrJmmPUWoJoUS3bEat5WG2QZYM8mCvmQ",
  "key37": "3Vzr1zr2V5JhgHBeM2yYQy7yRZWSoTzAeLWyCBXasYc8ufkjU1SsGsX9KwNLyquv4UWz7g2vGmS7geHMNs2Pi1Tv",
  "key38": "4U7eywAoWAcKkA6ricJLQsSitZR8MKbaZNuXSRcnAVo2ihvkdNSKjiqu28dEsbPAoxAtnBoT3Dc1hARaNdpLhZRi",
  "key39": "4kA7P3j4arMXAAvSQMe35yD2FEUY6BHLbD485gdxKJ4CCXY23fFEWq7odgs4EKiLDhsfzzy1yHjS5yHi6T8byf11",
  "key40": "D2yCvEd7f3deB9gFApEBN8vrfzmQu18ru5sbcxkpoRvaUCVeKqbrXz3rRBtbh54Bs5DeDWjVxDGcCYPUUhKJwPD",
  "key41": "2RFXh9bzkbGVdcLx5cHtXDmVVMYA9Fh6Vkvi8DHMKXWX8ALFpPxz3Dkmk2PEQNxVswV93J7UwSu2puUM5r9FFNVZ",
  "key42": "3LjjCaJpNBh4vHe57JEbAPMWCZeG1eKEK6AYmJ8cCQYn11jH5Dg5uvYcp2ktB7yNVTHxkV7DPSv3WKCiEwjiuTSV",
  "key43": "4hLYEymoVX2xfVRK9ffB93GESavCUzAzCZVoffp6fFkZy8k96dfDLwXB1es5Fe1Q1NrFVTsseb36j4ah8JjRoJrw",
  "key44": "5ZsWy3uX8kCqKyg8eQnDG2rvk8za4wxRAKLmsAhw6BQX2bUtUgYVp7uYy2Kk4JVU8TVvZB4sFCGzCKZQJmxcy5Vz",
  "key45": "2M28zpzog573Go4DHdBdqco7DzhARYcrPk8MfXgJseZfMkEz2NoREyGHQxF2ZnMvgWGNMxSUDMS5LXdGFfGHYPPF",
  "key46": "5R2BrV6axiF9WsxBLTR9Mj7iSCJae9yamP7Qdj2mM9CutmKmyH3BuatrrpSd8D2hkD3d7zyYTezjcjhbXpN48BY3"
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
