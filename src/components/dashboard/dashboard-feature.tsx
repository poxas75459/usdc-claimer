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
    "3pd7RdQrDAQGbsbKxxkomJAc4Q6WdRTJjNc1vVSiRtUNuVgCsXFQ3LjV4rhMNogJRESS4JGcSMoz6MT2iTCtDbPd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "B6L4C8wMepV8FZQXHFouNTrLtUgQ9jpkfikuRBPUQsmrQN69eteXhn6KExBVdVoAoxN5tuEUBWJ5kV3JpJ8mfhn",
  "key1": "5iRvTS5N4HB4aWKrBhav5q7puxSmcVHygFmhKSHqHVagSqDddFzKkM4VWwumwTtjdoM8gWyReDmcKx7DJk1oqJHi",
  "key2": "2oEneoshgsLG82HejygjkCMoKdA17vGVdk9uPBDyMoU4Wab5g7G1NodPNCCy4XdVtAqnxrWWJhaq3D6h94hFuWXA",
  "key3": "3VY2JrbGdypd75Z6ZwetMWfHoYqtcWw4qGGsMdhtNaQtmiKZzSieezCbYbqQ48wTmdQJYFMEvubxMoKohfMNLisU",
  "key4": "3gJL47upybrMLiUx585MXB2tyu54Z5bhToybM9RtFjPWbBNooS8hDkYFJ3Yu4jAXWnNfC5GwUzKeUC5tsJuvpTpf",
  "key5": "36GSBeUyvM3yz3eWzEZJ7L1XdQb83eYFNxb3tGfsMKQDhTfYX7xZiyd7ZURt7pojNswTWA4Bv95w2ivWuheoWNVG",
  "key6": "5BvSZTNCNUsxmspe4aTSgXy69kX3HBNEAMmhxtEGx6jYFoVfReBrRQUCDM7PL2UUgPrtNF817EmtDVbP2pitNGx2",
  "key7": "dKKFQwWwrvmyqJFGe7qZFjuJ2g87FwTmtyRBjFT3UV1EsK2hoATJxUjhSPs24YkSNnMTLoKbWKUQnig16yyEYRK",
  "key8": "3bDt6q99RkJNBZrc72iFa9Az58Tcoy2WUGzWDTMW63TV5gQ6JT4eUVHBpeKryzwKe1TY17r93VL9xNofgfsPFzkX",
  "key9": "5XQcsYnJ1nHVFmVKDecLNNDSdZQxtf2HGEy6fqTnUWvJeXB7sgH4ZWXHceTJzujtUdvrkqwDEmUiHpeZFmDpE4zU",
  "key10": "2tZ9do9qEzsfSm8YZ8V4fAiNesKApVBN6WKvRe1wg2VGvRMnA7CWsnJdF6SwZnFeLp1S2dYD9ug2U35JcHkRbrnW",
  "key11": "5QgHWGSjsYgX3agKn7SemEodsgY1k8vmkMmVbnqqjwZ2YMZScqGj4fKmk3kpRFppJdJ6XddHgvVRMbFJVTeQKnv1",
  "key12": "2bP8Pxw3fQZAvwX3Vh4kpwdE9RThDM4bAkpWiQ9RvP7UMRMbCBRTDmaJzarzz4VtTuYoLTgvQhHVBiTptwohcLUV",
  "key13": "ZjxmQjNZ28uAjMEiFwsXQLtVdbMP5ccFer1SEXiWNoPC6W3qSZzRK7vpWWVCn2dacL7mXBkXNmXyHLASbkUVdqY",
  "key14": "2NZdFPF5MU5ntb31XmHyzNLmg83Aq815VU5PcfoFYgaLs37r9e14Uhvpn2wmsH4TzfszhhfEf79q8DVjEjdAVE2w",
  "key15": "3M7uYcFBdfq7jU5PXxF9dJq28oV8cTrX44W7njBSnH5L18fK4WvC3DW1ga2QmT8kHtvw5GHjkmuBwD3biVzohWDh",
  "key16": "4zrZcmqXZu6HKx97VhQyAism4it6o5xoJbNEEExPuBxoDmwdMdA3F86Q1xTqx8A1Qv8rvnbxRcRsJWkBCKN9BXgf",
  "key17": "5E6nTHAjKxoTKLzbr7P6hSNE6RYwzsmRVcKKxwS4nsVV366cKpH1wxskuFwd7QkuVvsHUMPX6HRzs9WmkQvZzQQM",
  "key18": "2svvjQnMxWRp2UbjwAiQG1PtrWy8xC1q9dyr4r2GVfZtLrsB7zj59a4uvTK2x8hLLiW8hH9rLScYZZALYkzNrysq",
  "key19": "tQCCeVBSdMHYnYv3BW7sJgpygHXnG9gTviKRWFsAxKLdM2951yp9Vq1JzQYB1QUXdPo5aMCgkKWpvfkdVxU6ksZ",
  "key20": "J1NMhrktMrBd7MVNGbxpNwGeVZ4eotk9eyaFVpZbJFqBdvEaZYKnyuo6PynCQQ5YWFN3T1rHGm9i1oHYhaEnbhW",
  "key21": "KGeAcna4buGUYaoNJs3gwgCKZUXjRPNtwJXLbJ8zqFqusDYg8jbpcTgWwHbZSRWesqBxtESpQfCrzaehwziBnpA",
  "key22": "4rWMK8bVwayqR6ZtK1mxS7VJWN1iaRvGDXmjyGtYegxa3SLZRj2U4uia59sFk4BqbRGK2arTbT6QCk11gCoQhDx9",
  "key23": "mcpZViT7g2BpVyMHkGUiVzbZzZd3RT2Zk7swLyZjMLhA9WW87KXPEofwnKM3SoJDpBPcYdyeAe2WNeFGqHsR3M4",
  "key24": "58EkURtiWAEvqapyRveti6Z66mLE45frYuATGbo5WPMe5XsZ3fEr6pjgYataAGpGBNrfsidAENZ76uuCfRf26C4A",
  "key25": "edNwwfCkgfEkBoQNZJrFF7LiSEeyakx4ywMEGKYW1QE8vHefApwiuRrUoNN2NC6b2vhMEJsj1ishbLKHkBRazZU",
  "key26": "4dzewxBef99ZfdpQiQukz1WVfrfcnoaLYDJLZuq6TfPWAh4FMSw1p8pjsUqm1DkwWeYakrKraRC4jQohz1NZ2Kxh",
  "key27": "FyRCyKrGWFmQQTwyCs315u4oyyRDH7WvdNYP5kphfB5Tzj4Rk17DrYhY8eD3kJ3kzga9HJaCueqiAPHCKnT9nQF",
  "key28": "2dJRCuTx6EBwJEf8RtpmLxsyrFJsafb9zFcx5s425bJKGro2NNCaHbswhnixNwzPVfqAufhQ7i7qQPd6PXnBxFYT",
  "key29": "4Edhs9W97FPUzza8eymA3pYAKBD42Yo3MCX3yTuphaAvEX9uG8X6TmzD6jW66XHMBfAkJcv3XA9eoyFrMqt65w4R",
  "key30": "cjVcGZM8uwpMypoGhhZJ8pnQLDugquq1MNv1uX3Stsb8epQ8p8RKCrurrA54tTSoVw7GzjuTxnZWWZeXZmjSN3f",
  "key31": "8cdgEq3DSeQAycsRW7NhSeNqkR9j7fp28QSTcGuBKeLsGn7m4HmHuUTqVCaSo8nDpUnyciEp3G6vqCThY7qQcLx",
  "key32": "35ZL8xs6ZyzD3i1zwGLoYvbd6A96msCNPgnZqs4k8F4SrxY4Mn7WRbaVnmqSMb8jgaS3aJUDanoHmqj3JUuGdqnw",
  "key33": "2gyfTYFrKjkqVAzznWWwkHbKRoGocV3sa1fGYxXs37XM35YPU1VqVciXcpUcG8RNeKdtjoPpcbnvbxesaaukFk87",
  "key34": "3fzCvDtjiyCHQTPgVmRTmcamxhTssMvDwNp35KYn9XteJmSRNJedNX43p2m53Ynep6S15LEKKgRG2LE5DJCcgNvD",
  "key35": "2o4E17pDw4iWB2Wfxi9eBo4YFGRDvnkG5JAoMQ3mTzMKB6jwns3q33YtTkNidsmomqL6H9UWWaKpETpZgKHt5YW7",
  "key36": "2bxSz3dqNSHKPFsw2eCCbZr2McmEtziMMje3pj3YRZYtobHvGVRphJtNiTyYZ8G4TVkXyJaxkBrAvoSuaH8itmNB",
  "key37": "32pETCEgBWtUgQe2j8cjb9vRH98sBXKssNyYR2D99xz5rgpF7sQ81N97XX9zJCPD7ks9QNKETgLcjwuCX4hoBTDy",
  "key38": "5grRHR6QQtJgQSvEPpaVkJah95LByDWK5ibtiriA6WWrsrSk7irzg1uSpKCPUj9RFKonsy8CTEbDENSaCtEaxcv5",
  "key39": "2jPkG4JUYUt1j9NfR1R3AaodvESNxRE41YFXuda2yrg1gkMaxuCBMdyDayazWZ7QYHeSP5B2agAdAQN84XqF8AJg",
  "key40": "56PjR2ibwwqnDxRJ7WaPXQaDS5XhBrb99BC56ZoU7HP91iHMNQArfKyWUhicEkuFoNCkTYaXsppYW16YSERJZVw",
  "key41": "tZJ6MSd1xH8xQbE87vGRGrs7Zkb3uKCJg2R32j5wz1KzaLHyXzMDHiy6TNTvzXx1vmRdpRt5hvbebGRfDiDwXdY",
  "key42": "26b9p8vN19rDMFyT8KQRLCxJvxTnmaVbUXHaLWjYpexdMB3b8DSC8mj8Bxf8b7bfwvdEyyydQJCVUa4Nu1cLMUgD",
  "key43": "5Hptw9n5RrD7XXiaXiWsA2s5RdHo4H7VZtZBPuL12jv9rfx9SPpUWgdGJ9Bv9Gdzp8QeHgh2hDTkQognjYYoNVvN",
  "key44": "3MmspqqTYgiH4TFsd8VFyvhdYfGVfJ73NxiuVNbh4TCGt9jJF8xu4bYkFeXyE68AqSawqUQRufK5UdHy89HprnaD"
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
