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
    "2hL3t39u32CVHrT3KEfuBWLrxxFW6RzbfGCTTpuGg8yacdZjU9EuGN3C2MvV7Jf6kRRwxE94RdGZCECERA5vXuTH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WVsDaSKCKGo9X1nm5AhQSJqUYz8MKZYEpxwDFSoERRzCwwpD9bP3CtXxp8XV5JJuJBYgH6x6eYSWegXkvDYVrsp",
  "key1": "53vS2pbkMn31bZNcbpfqK4XX4H2KFsV4ewaKAs8qWUoECH4fUeXfeEtNQBBiDv9iEtVrhZ2xmZu4WrixEU9r9RrD",
  "key2": "KwGtcfjP4uRmw7tCXCjgkguTQ64zmTJ9rveDBKSXEmdLbmhYrvqBZ6kE3wvRM8s7QJeAbcNcBuzAoTfUoYjjLjL",
  "key3": "43BTY1VMaAp8E23FfB2FqN8MR7FALgWJyJid1k1mdsuXRYVnzZ9YpJWxrAtv2sP9BVwwspoD5ndtcRSsj3G6SWxZ",
  "key4": "ahM9tr1pRCgcyfknxE3GX3fcR4gtjbBa8d6teGcmdumAE7BuTZgjsWbw3v12Gdutj1XGejkAw8EowS7wy65sgho",
  "key5": "2nkPJ3DZT5azZXetuHKjmdXW5Xwzk1XsLAUUck5R4Cp6TSxDFHRRhKjHwvrMPFnLCPwbMH5cXoCaMtWoRqzN4s4A",
  "key6": "5ByazfEeUTzqrWGSiLiNQVxJCr9KQLZuw7QnBUDykZ7EfmK7tkTw9yfk26JTBQ6P4YHxYrSXF1utUUPgWfU7C5zS",
  "key7": "3Rn1TSLWmpfHc2gxtGRDQEXwRLrMVphd1GLeZPXyMTGZrayntngLyCUZhHCWSzL1htjmtLJ7gY45Gz75WQBexrcd",
  "key8": "4VY6uvDbKNbrcEMLWkiuDtm3gt5mNYS4Gqqn9hUeEJ3NjVUDcEcgmNDD8YDxznbGf1iCPSQxWXphopQS8L2GE8re",
  "key9": "2bb359mrMgk4CGQ4PCi6HLWUw79Ni5yKQ3cGxKyTeUNQaFtWxBPuaBmdYe7qhbaJTe2Mp74BxygyHeF5mYgGxFj7",
  "key10": "8RsDkk4xngVvXCKmbw6QasP1CaBxCNWWT3D9Vc3u74EBGFcpoMfgc6vxSGTu5kFWYpv162AEVG1Hga7jp3BX31s",
  "key11": "2teidtnKnC4mrtpfiEz5U4eDWYfZiarH8YaUVgh5ckddMN3rhLpghQz3LekAoS2M8Qh5pRH6MwxBCUjT4W9nnDBr",
  "key12": "33Zjy8dbvZsSQJc3LeApmkA6iPDepb7XAwgk7o1xgHBgQu2FerNA64LYhMo4rvXSMM2DfD3NnWQz8u83YWyBivM4",
  "key13": "4dzzALv4X2qqcsgL7mt5MxSF1ajGFZWxtQpWgVDYLzVMcmHgv1ukVdzNNw8HBrwZ7GJBobaBWqvj9Jja8hqFW6ad",
  "key14": "4oqj7LwrZTvKQLGyRduLs9LKd6sMtg7oq8GeCtNgUju22YWfjtczoFrxVAGS8NLA5joanooiGPY54suoFazXpmt1",
  "key15": "2Z6NBXbhizXfQCYkpA5hnMY4QW2irFu5QyF8G7FTZNi9tB49YyXYBLPWDxaW5FnLGVXgjJEgGEdy5hXPjrNY5Am8",
  "key16": "3jayCXVSCnbetnr5B8gaBVYmzz2UiVMk3KqHk6VdeftKmjngzcSaWH8wKJjQhPGwumZuYzdV2PnSuUmahzxPksuZ",
  "key17": "4XHyLbEAsE9pEc7azLaox15g5vaouyWqRGVtWsac4mT3pDVJS6js7tHGgu7XCPQfir3QU6iH8a1BpZKgWrhgnt3K",
  "key18": "3naxF2HdXS9Gp3A39Phh26c8jF8RvBDKuYS99nG53F6pfFAEGpaDRJ2AvWi85QHgfG8whq2yepPsowyYTQQprvm6",
  "key19": "3DYRyBS87Ffr93hzjJyovkDRWZqTMqrHrgf8NVSDVTKtbTdKmMDNjHKPsYMByFBov6vNvYxpARp2wETcWyFK4faA",
  "key20": "nTrL3QTmkTXaXD71fpUW9Kr9X9a7QVWVWs6N6QTBT9Ef6tZySLFrk8vE9Y7idgjGn8oPXQBizBF9YACK97gT2M2",
  "key21": "2mhr7VUX1NAN8XPfU5U5BDBgismNE86p2gKqao6bXWqNvE644utQveDh2vSuxc7cf81pG6k1ryYNL8GxXd5Fpwer",
  "key22": "2dAcHKhuEpZqkt8GUPf3BYzcFjf4qYZMxDSwjgGFF6qk71H4G5Xm5ksEG42P7tnidZSmSYT4uBEDV3meLW5zwt4R",
  "key23": "46jF1vpLTVcWJyNH2nSEb7otMugYgbKm3bG1uXZJ9rpNkAbXs3oJTGkHkD3DvnPYzSt4dRCn6vjQi4jNd647rnLk",
  "key24": "5FDufTkGq7PbrcCvo51wkMx5YwHqKXcfC2CDBjzhTjvt2h789uVmn2maMLyKZUg9snhyvJy8ehv2JrTVZWjzGazR",
  "key25": "zZFH9Y1BdXa2V2pGQ7zofd9NLDDGRVxJLfHoy8XHerfXwyCZBdfDZeXYy6oEoF15dpJWYeBb7Mz2smmLRyAx6PW",
  "key26": "SJdBUmHRuTtCtyAs8fgaVPTT7K1F1zAhb7avuwNKiaG8qDC3P17uZ8DCqBEDPzRYpb2wvub5Tha5GiV1egSGdkU",
  "key27": "4BYKLqRLZeWcNkidit3eyxuC8SwDco4UezVNac9GcNbp6U8doKyRiduxiQPhWcoDyi9HWMm3qsb2jGTSP3Lv2qEW",
  "key28": "53E7YsuegHkCMSE13fruZbKmib3xyC6tHXMjvivEiBnYNjsqLdHWURVUYG75L8cXo3wu5L51EuZhwLnE1tBikwWb",
  "key29": "3RLhFg5uRev6TJS6SRek1otRTM3PiHDcjeAnABaaXLVM8bGSsTKjpxPrMwLeAzobZVbCom2B9C6Rpy5vcFJuP14E",
  "key30": "J5VZvSv3qrdaohKQb2SMTuVnta6zsCp9jVdtBPHb6kagfVbAmvb4ajY2WVuBcrERF1w57WNZ52QZwXJcKDr6RSq",
  "key31": "5JfvrwcVn5AiDdJ4pi3ur3F3w9TrDaM6axnRGvRznRkTcgoFckm3iLiDy2hf2AcSVRFV2KJ4gTkvJZwawcsc3sTL",
  "key32": "4bgGEceAuQfbFJ8NgcChc7BgJUY3b1bUp2sMS171HnaEqje3S1HEqqAaVJ2vGU8bJBzFhSTf5uiqrXzLjRYYBRcb",
  "key33": "FSuPHdtypALTt6ei9bT9cBSuHofcTDPJDCAK2RsufnKvQzB7eCWmr9ufxkAfHGcoJaG7FBxTsvT5fFmfLsV3rMM",
  "key34": "24xLa6J6F2vqXjiPwqVgHyocP8eV94v3h5onSgvpBSrDcBod1zY89N78Hoj74vXYqu54HUP9h8St8mQD91zEJzac",
  "key35": "4GUJRULRVA8FLNcfrdnUQ4MdZHhxE6N4NuD6NWNAH63sNk2vz5txvvW7Zuogvszf3rSthULEgoc3FB2vCH6kuz3E",
  "key36": "3sof6r8z6852gztdeHnwJNJUo8Uq3EcHDWyi3ocsjYYebkVku792aTE2fF2i4ZaPeNwaMw7gus1odtx6mi5tWjZE",
  "key37": "4HU93vxEbTJZrMAqmuNpkmtxD1FJuJ6YhgBoWrL9zfDumAn17EgVjPLjTmc23jcUAEWiN2hLRXH9UTTGjbMN7LJc",
  "key38": "4qgiozG4ZCRspPUkdSxp5fv97ti8pc2yQQJMjiPefCTr5xSJ8xGRME9mqh7VzLLuGzu7o4zet8CLvzhY39FJSFeD",
  "key39": "4kUqXn4hieTpCXPMwM1C7PE4z7BpoJ6VUiviULaMt2gPgR1BKQbfEWyeKbyxKh1GX5PUNu61nNACFjQEUhUjJsCr",
  "key40": "2HYNnH73zmiTNbn2wEUBkzKAAhBXqN5pfcUSV5FN3x6eKFJ4wLZAd5TCM1SHvLxYMjpWgKxxjb1t53sokoWPpyjA",
  "key41": "GsvTHMnU9JfNgh2oGCKQRPzHCo9ajZ1FWttbUhbkvE2XdbXforyvgftryVP5DbST2hbzG2trzQodXKRUjruSAbN",
  "key42": "667FPLb3V2cUrQhNCW6gn7CnxsHeqRrZtW4BmDYKV7rSCnJsGhwuAgyJwEkwY11iBgnoM8aeyNeFMvAMxtHURmSx",
  "key43": "Lr28qXqNMKTAxZgXmzY8oazCHbXRx8pQqYN3KXrgR7A89Ry9dUjBM84T5kD9HEzLLeUZuqr2XecpZv7Fmfmt98W",
  "key44": "3dAmSJwM8ULzsaz7yT4rstdZqJnwcjpqbmkCmYnrtduBhArLcnRU2czrwyP2YG5GP4SF2AhXSPWf4PGvV8RJHi76",
  "key45": "2Kc8zzGQ6grLJtLH2gTeaTChzhwZKU9XnmhHDBW1pwxgYNvonZchioBWQZGVcCGEBvdXmgDw5Ra6AM3ej727ZQVj",
  "key46": "5YTE35VLvQ62YaChbqMMepURKJaSyiBGeYsRTuAjmrUwTSWy81GwGYv8juuTUrw1buio3ru7QQcNjpRMByreVrGn"
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
