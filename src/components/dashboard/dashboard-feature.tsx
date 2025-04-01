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
    "5rZ4uGVfSRUuh4Whjwp8XMfXYs3vE3UpFudw1uCULaE8svrv5xobtr7WuMCRXWAHNNyMaRqPouNH2oEt4Q5JMsBA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rnYEkFNmdULNmh2vmqhoExY6HsbTCPNvW6c9N9Ys5arvWJQMVtm1fsE8kok5n2mfUrzWjD8QfzJKnzaWLhK1e5y",
  "key1": "2FvqHfBpe3XkTA97FTTm4ZG1FaNeyyspi3KuhhjohJ4jGy8iUoWZuxpXSkTALXKBmWC43nyHsCyKYS59TZLLobkm",
  "key2": "2fHuBqYkUQdqpjCznoqTQxh1yYouwxVi2MnmXwSYJ6GRFBr3hwTqsEBDTque5Y6uvhLLPyc2PhRGfYerPczEXGLu",
  "key3": "5f3F29NuiA8Vf6xJJNhjWaG78PHvam28rgi6Tpqh27YziaGs2S37rmF1iTcbJXBAhwftFC1MSTpG769vMzJJdXyc",
  "key4": "5ABmTkcii3g2khatF8p6kgCvaBQJjMMFgnctKzdHG2P3p31ujRJtsw9YokZUDTbUkeJHMDPGdKkP2rprrnGN8wd1",
  "key5": "5NgTTjEdTNyMx8LX5g2JfpuzSWw8PU73bkcEXQxB7cDrj2fL9uzUZ61ufae6CqWzqfVC1KkorX6qY8QNLWw1BC4S",
  "key6": "3JM6Xdht93P1KSddoEqRNszwMaNUGsShaQiebSSEiRCMH29nUAeppABCE1Hcvmvb8Nyx76x8uLhDxguj672XTdkh",
  "key7": "5xHuYVEx7qGXvbjjZ8Tvnz8FJpcSuyskTGyGgdHjeYX7HkCVhPCaEEk6Nj487Y41BqGoNsn8sKhaDb4EqhQW5fx1",
  "key8": "5XcBBVAwFMdjLsv5p3Y3hM73chVqa7iWzNK3mnWuD7EduVXFRGA1ZQadSYXJxibGJYdhXPBYPDSmLW7w1L3GkdJM",
  "key9": "2iUptWm3t28qp1NSDmrF4py6bKeJz5VNrVGno6hLTw6XUut3LmkTwSa1nTFEpR3Cew1J9A1wBtaZLfugBZ6WdGZi",
  "key10": "4CFN3HFfdFzcjvfRvismEvzTyx1u7VikkdATEs6yN6amntfuXWKWkofsoFT4S9ybEr3NWkjWjxUyf2GJ62xZ5wQt",
  "key11": "Vb1gWxaZWcsdTsDHLntPjVuWoW4rfgh3ix5tunz9Mg75Wgf7PeAM1mynN3Zbyr3DVVJhzHb2tb8p62fxKxuYvLi",
  "key12": "3D69NksW7LEtvMH5fcbkWTsBrj1CTu2ixRUvqijkhdiCBWpyCWr5pVHQbYZe1Rc4BtrrBSc8tqhozEJ4z6KoFuL3",
  "key13": "54L3WhJXXNdoSGwLnBMMCpZ6JoXDLzDSSTy1NJ4g2TJpm17r4kTABuy6N6C7JBNMmCsNd6h7MF4yXh4FQoRkAVSU",
  "key14": "5NrrTsuWd1woFB11kiNePD1mQdMdWLbwsGBDvEf7vzL243JnBfvEW7uDpWWJrceGHDYg6UNcxF6RjW7vXGsWrwCf",
  "key15": "5jyEbWGJYSjvNfxfaCZ3AAdR5TJDHm7iM3iRBzkYE1kP7ogjkRQXaj9KwutPZWytoKMFCRimSWMzhSjGpB4TK5FU",
  "key16": "56u2JUmHTWDjd82UVg6oxW5nz5nbFqG2rBNWoU6oc1amrDGm6MLfeCgHGhjFiGEMiMzcTjE8pw4FK7CU627KK3XP",
  "key17": "5ZjVYpbfMX7o8dQGjtgAYEks9hRv7iWF1NzxKCqojvndBYr4w5fcffh9GTSNgwnVNxjBsgNGooNK24wnWgfzQ2UL",
  "key18": "3ffKQxDfBJoa7Fcb8yafKokEiaG3xeDqgeYepjw7X2LJc2HpHDGLdddcKeNLdFQp2q1qvkJVjZW9sUN77bGt2Fmn",
  "key19": "2RJNZ1Fm37kEgKTfVyhY6xhBTgjvDzCAiB3ZoEUrbor7B9dqNUiuSxUsatBeAn4SDJ2X8kn1QaUpuCp8wZ5Pp6ae",
  "key20": "4JgsYYwFQjvyczRzTykp3CrhEcv4KHQpnWmyJyQkeH2vBwNRjoZTdBnZudxbkpxUzkYCAryANQa6koum9KtCWgc5",
  "key21": "5XSTEtkFKKEsDsv4ctbkstvAnmNgV4VrTuC8j22LvrfG8XxjsMPTnBk6HUF6JX7GTBBDXA3cADA1SgHFYLfMXXDH",
  "key22": "eV8zsdGbK4LwreQga6CewN8cLZXHqUpHNiAQnxhowUGWiXY6U4WfPY8T1P51uyWNSV3d7NsgMZz2PzWyV8HnNgo",
  "key23": "cR31smzfxpZ2nkRWEr8xWuhfdR6wGi7Wu8onDaPL7oNmEBtjzFgRtyjWj7en7G18LegNbNmuRaWcJ5h2wVTJr2R",
  "key24": "59ygS13bBXj8ZWXVJeFzTNE5pd2szo26xuB1q9e8teKatpir7ipGk7FcXwNU68ABH481Bje1AthkafbR6NDrYLwi",
  "key25": "2SNNd4De2xTpui6vZ5Gkb8Nw7enDLk2QdQJW4Kf8gRyC2qMiJfotfHRZdP7ixQnqGMw7ebACJzqNka56vBD8uLuS",
  "key26": "3QCvsiZJWGQpvZ1hJuxzzDEAVqX1ENdtEZq1ZKpJvy1QmHhN2hLXKoKasUkdp7M2KkTQpcuC56W1qU19pNesx8g",
  "key27": "44XVFggWmfFMa1jh31VC1ZuruhknDUxchAACgcdndshPCoAL4nQHoxJfqsb3LX4KsSb9ZrGLPCT7cs9LWhstg8F3",
  "key28": "3Vb6GunWDRmrUr2DJn5qHudtJM4i2swzkVxfiJYanQTx1QMeLo5vHSggzVaRm3Fvws1ujx6cLRyjm6zjG4LE4dkh",
  "key29": "5uni98hzWPvSGnyYbhYBfEao3oUbTMBy44Xhko7s69LFyacY3RX3jRevGVbkduybq36f4tUjYstt6JriWQPNJna8",
  "key30": "5dFY96jr92x6GF9gRSAS2sXuZNp4oA7Akn5M5EMCM5uKvFPLwkc5J5v6W59T91BfQm5bW4fccTy4kybJqL6fHzot",
  "key31": "3UuBaeTW4dkVE5QG6w9rxDFEw5fnaZ9wZFLxZq61kcb9Z86vuFh3XnuMBWpZmkKBXRo42rZHTxWRuR5drfX4ZGGC",
  "key32": "4zkU417FCDYFfDBZoUkHEwd3eFPxySTrURccKKDF1MtMH2i6ZKncMNRMeytJGHtgXbN7NnKBazXsj4CuKN7sYk1m",
  "key33": "2XJg3S6eWa3EA8ZdtmKhYaGmzAsxbxq76oGEscyMBv7mUNhZqftykJ9SkNR36jy6Y8oubmqWEYj1W2R6oZtPejJa",
  "key34": "2Qo5K342M2UQevpB7ZDXv33JwjH3GgTitQsBH9rqCfvzwdhh4Q6QqKdsAMNTVpouFeEdhszaxskNfwYwBf7JEkgR",
  "key35": "pmkFrpLVm5ftEExydthSF2ChyECZ64mWMRCUoEoBxYX3K5boeJxSBVM13Cvhp1biMBjYSn8hmLHJCTd8nxZPVGg",
  "key36": "652tfhHpkLdSNbJH68abJUdmt9DPhuxbdma9Qb8rVnfyfFpgiCy9AYdrJzKtrc9L1TZVjtCEcxPgRh5exxPbeQBP",
  "key37": "4YcSRUnH5pn6J94RESZja3mMFnKQw72XtygHKXVbeF6KX8Y7gbbRb86F2CxxEr3Vxhm5W1LG5Xzjh3h1F2rur7iF",
  "key38": "mDj41hBpJJP8aTZeyboi4W5BudSYJnSdmkaJajFB4x9TEkLydXpLhoRTEv4VJFKRFEy25Xznv2835yUZgbsMxsn",
  "key39": "5ZTMdZDtEJqGPSJJ6LG5LUn6TvxqvGpaZtF9Eo65dCiuJ6Yqyh4VzmEPgV6SrSjYRNBrhaNuCjLhhZpJ4Pb6mCxN",
  "key40": "K7VKffhJSjkZLPgtvtHoZuhxVXdFtKBvwDMVjx5ykd2Z7MhZYjqAusDju5mBJesw94iJKx5ycBG1EoCmxTXPGiA",
  "key41": "3Tbb9GgnQXEwn8Xt4e1tFSjgTjou6ypt7HF6yA54nYDGYgCUGmWoDRcLHaviD3X1Vv5v752nQcBms8ccB1t8jgCZ",
  "key42": "53tUaKjwSd1JoCT18HmVAHrvUu3mY78Y8aijUBVRVzPustftaQrPoprahz3twLSFJRdJqy3xYCghBeBVZHiEcb9z",
  "key43": "5uNFatRiPFAT5DbHtm5686YMbSE7XfSsePP9ZvFyfAJhpk1xqD9MEBwPjNhDsMo83NpAKLRQQbtK1McrBzitT7En",
  "key44": "3Wk91TSgCrbmRR2fhzE2zLhzpWmrwLrNhWsBEjAy8Jrnu1RPdzhWn75AF3ttBcfAN2uBsUsK4rac2mRY7AZkY9GC",
  "key45": "3CSo2ipu5EhZKg61iQy58StWm5AqgJF4BnywMQfjeg9DqGKKDXivkKgZkN7EB1TKon4rwji2QWiHQG8VCn9eyWwf"
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
