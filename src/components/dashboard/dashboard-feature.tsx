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
    "3kAhJ6y2qH5vsFPhxStGSLfs4zkJRjPPMVxZUhjkYtYHwnNUDfHH1HvXfKYNH55ooLCeViqBhWYprVyQ9SmzWv1z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JGmU5nirHjN2MkC3s8SMWBjv17gqdH25V4Yhzc1qgLwnsr81JoVJ4YpCQWUJLcT2B9f4FysmBpd1yUyGmX65SFh",
  "key1": "31Lhduohmiho9qsmz1NQd57NkH9aeWQwwQaNys8ujYM4D9ULHb8nNMB26MdheUaa6hLaWM8bwds2AYMJnPKZtJV7",
  "key2": "4L48dJZGhSg8KSbTkQZqnntQf6HKbBs2BXFBt37Uo6P16Pdy3KZuFrEqVgGqXeQ2nZmvMwXNH3SbzWKXa8oTDam5",
  "key3": "5CtQKZqVPARFUCLSP9k7czsd3GnraeDieEsXoPy4cHfFqhiQmJLdspfvrRYwz4bt9obbxbeh2HPA7G3NnfuGJr7K",
  "key4": "tthZM6esJerb5FvxJYTAutMqKQhgDdDign2C4HdgbQHdsBib3Yg2r367GzrWHS5HeuaBDH5sCF2PEStywyBkLSq",
  "key5": "2uBGHnGJAByp65AsYt52wpWGBredRYY4U1cCaVgXiR8AUchtG2bDR7LMdG8CpT2qDs3ci6H5an627vnnbDTSsVUN",
  "key6": "5JDqKsvNN1ELDfpiZGPJDGsBMSorcJtYYxxcju7zrRF5FVJjQhkNbEiAYU2dXAE2D6Da3sHinCfKN1nhYK2CMSZK",
  "key7": "4cTWBUn1qxMbiH8Jc9FKvrqqTBL7tV4E7UpBpjv4BGY21AywEzMS5tvFYcqHqvcrp1Sy4dBgjMszzMJUVCPfXu5z",
  "key8": "yF3YK9ZSJ1LnaDU7HQpVBi1eXeAzjuEmnumyxL2YiMmitGgQg12som5pMan7NBkPiQumSn6pd6jSz3E6ki3HgjS",
  "key9": "VaDf9vNfVAmUgVCqN8yxZS6LZ9g9d2ffhTbznpfhARHJSz4PysPSUF7C4VLbuTWVJ7ZbDeBPvedNevEuCQnGByW",
  "key10": "3GxguWifdqjNKa3QmhzxYY16o5nD6b2eNNwdXvvJp7oiCcnJcZ8FvNLRiFd5xNbNvGCDerWUXxzrxeNLAx2u9Ubt",
  "key11": "3uBLG3bjxPUF6qnEfG1Aay5b5vksJF9iFeBabsxqUCcWNkzYC1ZsmuyToKA2zb7nZ3d4sXJdC2XxGcuFZMuwScgY",
  "key12": "qF3pJVSC1wk6fiq6WKLWMdTp8Cb2QpvQSSQmMn7cYw7PftDGcNhKAWjMEWNJM4MitwLgLerK6f4PavfjMnYDFiK",
  "key13": "3LL2QSbSo84z6McJFiwCnPu4Sg4qsXToZ2jS46d2LZFuK2cStXGw1Kmt6zb9Z8xGWUNWZwM84PJpynMEqUBqzcpH",
  "key14": "67eJRATQS96dNrehF7tDFDsEjoavfYTSJ4Q9TQJmxdS5dpY4PjfCAGFwsd36m978MsCT7ejavEini2ngxjAPjA71",
  "key15": "5oRDJpnB9w1nr3CzLhiV7LadNuZb8RTC5nAAnu816o4EYC4oFPhQGDaaeXqnPWCC8LD6MyEWU91GpxL2hc7dAzoP",
  "key16": "2kRSPKayBVUHhyDq3DbTXiQMfBQVdWsN7837bbLvabBj49njqm6j3nZ6NxUzSUYRxC6j4Y1LfcJwuQQxHmEWWDL5",
  "key17": "3SpKvFL8SrPgw5p4FXkaVgEy93KwM1tkpmZ74m1zeaw1h5X72GmEjVjHprSd2ENi2i2ARjfULYRU7gCPN4Ax2DB5",
  "key18": "3Vt7C3zcgU3MtH9H5sqdCPbY7gwb69vThCbdYFC4Nc8ZVEVTGZkZw5nKikaoZSZA3DW6kcvjHszT8iwo6aGMV43d",
  "key19": "3HG8GhvDwUTzJjSaz6WRRFss3M9FsdhqiENvRAkikNDpoGLZjET6dF4E3scQzKTCmLcC2Q7stpePb4vfNdEfTL2p",
  "key20": "sNtCeyukJLrSMbiKqS4UASzMAgCLjp8sDQC1234Rqp8tatP7TbGpBo4mCaKmEJbmomdgji2XCnreUT3dkirgNxR",
  "key21": "5cKzsDNG5mJA2wB7reKqkEfzCQPUEJuPbSynEQRGYpvLmEtbsGvw4UCayQgXuWoycfEgmGdu9Fcz38z2toEvXgRs",
  "key22": "61nnB1X8HQvWoKbm8nUjZT5wkJxLQ5kCam3wACZxu7m8ztnZUL2FbnqLbHscUDp6JWt4xgZALWwgANnZQazuor5",
  "key23": "45G5J7oXHjwAfRrrrRiD9SUNWseR2KECy2QqyJ4mudVYmoJwGrraybuJ18KbBvQzU84vKnQB7gyLYLj2zZreEnUo",
  "key24": "3Fx9EpLPdvxFguezoTRUVDFmUgZC16W6HfZ9ZSRXouXa1YoFCbAcVvrSh7F6f36UL7Uu8koEDpYV5BTvDF6yugj7",
  "key25": "63QBsne99z26i5rnkYvmR5BLHyNW2ABLDm8T8ow85toQg8ULuN4S8vVEUdtKHQhNmkfFzZYvxykUYmKHgHLMBmny",
  "key26": "5AJzq6rRMqzakNMztdb5SeuakuofckrVQjVS189r3C3cYodtxcHyfWdKMNMkccUhk4MzHf5ntLfE57HBXAsvpDva",
  "key27": "24a6LaCAeaM4FZxxUBDgVNorGz8c7DMGDBvYdgU6TTE6dD6sgKpT9kR3P1mWu1UvHujUc88TtWRGxif1PJ9KkZ96",
  "key28": "38GjQ4FqdS5T7tLsrYHiiSBgVz6HM9WCxDRBexn6jshRY9QmZVyxksBmtzJy3hPpxN9KSbHLBEHx52a1pseizqX9",
  "key29": "2uQ1zLLDxf4B5gzon22rhQJkkEn7AAb1xqCfaZbJYkpmoYg9Wp57oB1iU1mf8r5BH7nv5Y3evhVGshHYaKtfKRDv",
  "key30": "4j7dwdc6sVXLVn9zvJwqAMtGdGQrkQDVesphp74HQDsgFKsqgv1msTFoqQdtMbem5x69w5GiWXNRYLbFrSTxFW33",
  "key31": "2RPuGanY2yig3aTPTBFFshCyuzmuu3byUirmvHfcp1Nn8VDWaZMeceXTPBjt6EMoXtJWWMhLeHQEmGCiT1cD5Dwv",
  "key32": "2cti4hASevSqHi2rFQF5u3nRrSo3Z4dFQz3yrRh4uCLtbUysinEpPiD9Vka6W8doZWK9KVG9VEQA75p2EWFn2pEA",
  "key33": "4sK4xXZz5RBRqi8dA9o91ddgkRdujSLToRUvoca6hJcotGXxKds89MC1w6VowfJS48yZ9J9EepMpk4jhuVAeZRpc",
  "key34": "njzUqjRreL7uuzZv5wBJQz7wTYBRGXTE3HbKLcjCgHpZ3eaEe4UcDEgMZmmUEDNvpoo6t33zH1fjkwGg58Z32NP",
  "key35": "3TFkbWrSVBk1BVZz98p6dBVAPCjLrjsC97tsUVS4LpXsbAyYuFB7ucPaTEHKDGutfEyVrH7t7HfmjqQKakZfeyNj",
  "key36": "3GhLEGLBUD1BUQXtmEi9PLJ8Z7JwefKfcZztmHp4HuXLsVic9NET6p8UcRur6ji2kZypaNVay2SntSf9DsLYBJvk",
  "key37": "3gvWfYVGH4WzJCtXrMgVHwLdRc9BHgStJ4EVz2BWsjbTAZGizfib9pktn7P3fUcjhgQZJfDYFqdSMJefhQkaqRQu",
  "key38": "vggatvPk6pa1Rqm1Zwu59hZmuUdpNDLCaNVEWYXRmBgJSCxGQk3hN1NWoZ3aMkExAnQ75mwmTvpsiv9CazaqE2P",
  "key39": "4FWjSjdzo78Te32v6DRdnpck4xypP9pdw1JJ6L8WmrzhCfo5tVnMdpGfCuVfRpZSCoKNoUGx3eR9776sjoSYecob"
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
