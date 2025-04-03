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
    "2aeKEdUK27692iQrzh85RMzow2r9QFZWF3a7PAYM2mGVFo85avNEJZVYi1x9aFFxEFM8NoRoduMtW6nfKRPGaNvU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eR42eXwvDmyKViMUJ6JNJeQ6Qb6tQnW676ZxkhekTDACgqgQni6dBRX1tGFCQXzdjRXmvxsbRkYYtWsBrp9FDkt",
  "key1": "5P8WnjLqEDM7WVzCuYEAfii1PVsrL5MAK7JGNeG5XyTf9kG32efy2ae55uhqBdxb8YdAGQVvFQCnLftFW8pxNq9B",
  "key2": "44Hh3CQzKUz7ic4XEiQ7Zg3T2tWwxuRMnxKh1YMAupHkoAtiFftYhRGRP3DuwxKaoMixecNJn8sBpUzS74jUug5q",
  "key3": "3zX9Syd62L3uj2hUxqGavAAwSjZMqjv6CcouDYLmiN4yeiHQteh16MpFUEp4wvLyXuzn4vDSqcZKiVEbRG6MGszU",
  "key4": "5uTjgPJCzfyqRdoNRoHGEvs1r257ZWJQ8vS1sSNhBwnVA5nZwaa5MbiGKcpUs8TZftecTiSjPCnDtPQ99siRcsAz",
  "key5": "H1zCJHEYyh2xKdqoGL2z15BHUmpjt2VtYxY358L24UK4Zqbx7z7y8JBM68u46tjX6Jynt9crE64JDtvUjq6tHqz",
  "key6": "podiRMRWvoyfxf3WZELe2bEfqadRjmsHyJMwnzUJV2ZsErhD3oFvgGhKiKHo4yRyKctNBNSBsZK6SHFxEMMUK4K",
  "key7": "33cFtCyeYUYcoaEZmmX4SjYk5q6v5SvGGyA9RK2wqoZxusTafYFRDV8QjsS2FwRzr4JAgbzgkSbhrQM1oXooad1w",
  "key8": "5vrDMPKhvAomkYVzJ1HFGDGQVGBSa6V7CGsSYpG8qo3CgmGfrnW8ayme3fDA36s2WihyHM8dPjgWjw1VwTCzNXzC",
  "key9": "5hHpU1xHu6BDqs6jWPLTUgoiG67BsemfWGNguHWWPBoZrnXB5sEJXFGKmDoCgCboJyp4MeoAq2HP5GzE1HGHYpkv",
  "key10": "5URirT7i15qrG7xjn7fizsoVc9Mp8Eyi3eBcumE2X3zXH1WVj3bqe1qmPFnnaxi1aGDZPaAbBvM55EgenhtEvJ3A",
  "key11": "3w94NzcqWJszLHa37sGeotJA6uZWWVW9E7AoST36P3xqmU1gyuMEmu1P4BU1qJbrM93uKGT8TFtwCo5Am6DoFNM9",
  "key12": "58QaqWABHs4pd5JSY2vsHGvNeDeqN7Y8qepgPSAPF7uS8NQaifcLnPVj3zNUmy9Uu2qUbwwWfgCJ9Rr9Gn3p6Rz9",
  "key13": "3BuVRVJJms6iw9nvhts6smAn2zziEKuRdpbCGTwKuyB9ZAmXjKYCRswLTLz3aHYxz4ifkKpeFAftL7U5zehDdwoC",
  "key14": "247QdaP8HWs61JBbiMrMav1Ruar7v1MoC3P2sd5quCfEBregHLt8tzEsi29AettmrbRBh1weDUQNiMjWMFGqW5fK",
  "key15": "5PQF3ELfU63QrcxqxAX3PK2xa4iAu68YxckQ31htXNAzkjfGwWJ8uDYUwGecKV9Z33xPRbRUcTziAewtGr4255CN",
  "key16": "2D2Zs84oEuBxvb9dvUWV1eExxyKTE4f4N93EbaJ4YokU2zvouHcnKe1FEhfamgUVn132MnNVhrhJVfmN76anJsJo",
  "key17": "4T5DNmM6SoWisGNFJUmxfEFjLE1rqv2BHSkT2BkH7XZphrU6BPwjosxR46aR3j9QWDGoFpL9xThGhsZcKBnXWX6e",
  "key18": "PWjAGKgQap6MQKQhSvD9Ent4ZuCD3HQyjw9jVUS5QHhooGimBs7AQbTecGv1aetefxQmUitXSDRXgJzgN4N8ovQ",
  "key19": "467rJvM1F4RVp9nAGjLSJH4wmGE4AF6oGWFtoMzcrQ8C1eHh9XqKVgfpqtqzAeTca4pH5LjVYyVYdb16ywy5NzgH",
  "key20": "5fGN2PKfpExSPGDN4CX4127i2N4P4iXTNe6bYx3mhP8zUua8U3wu1xmSAk3KhNvNrYmrPXY8VmR1vzRM4CrRJj7R",
  "key21": "3qsupX5BX1Z65GL5uNY4EV21CcigKvVkXxZw8QB5USb2vkmMxKhtCmuim6VDENRfstGfofBxSyrc2dAju4ZfYnv7",
  "key22": "5DBetM94cq2KvoqU29afd1BBH4YJzqmNmizCrzfaQASRGGd36d2S8GdTUQN1BJCGZLoS3Zpag4ukLVdNWPMeRx5z",
  "key23": "4MvNxs8wJAnN9yNE6mQrhLkD7BQbSjCsBQbPZGvGJF7vuGQh6pH2UjGxBdAfhhpUECkTuHEGfdg5N2nWiy62AXjg",
  "key24": "4C1RaJEWuCQVH6ws11hTKZZXA8TSkdA5oAS9p445EGQ9xVVfR1J6VhgwVFRuotbQMnfJUeNystHNVois6tFUQGEo",
  "key25": "2kbfDvYt4mUqPWmLd6qjBaYarsAFz9YXpRjrtBXFhKhPd3hyQ4iPe1YHAeSwEAQs9GVpKNbuHgLCnsWmx9UyhPXr",
  "key26": "4otgYZx5AQAfW3WEhWx2eLMf78BdQRPtnGygaAmg4MDD9DQKfgwUmPUYPGxYNmt39hcsva1uPymz3u4oohSYzxve",
  "key27": "4MRvbqDKtHECC5Uq7YFKTLpxcwb7KnEcJPWfwAiKZUHNuDvjQsWCQ3et5tGFpA6GKYGmet6dWXDtoZiJEwkSGxk5",
  "key28": "QiWZ3m7aiUUv2pwH8nCZodbHaHL5bXbVSBqQXRhudNfPD36HDS9p2cfeNB7y2UCAgA21CmcLY9VTdjnS1RSERGZ",
  "key29": "5Qt96h28ZimbWY9745yUgG9U39PoeWEXdVMhf3yCTf26Psq1owJJkd77ZqsPqBnyFas3HMugHJmiL7XCveiAujEb",
  "key30": "5jekLqzv8Y6CJXAANpwpmJhwvBNW8PzNAfKfQEyL4G2n6kxdYgari6wjp7eLm1WefXrmfiW7sJxmcjKVGj15sAXG",
  "key31": "4sW1b3L6BUYE7EwTryn1YGdZ2coseRHk5ocbGGnhavQFVD2b2DVS77JE7AuQi4DLzeJLZkqDYdyRMvyUaJhGPX34",
  "key32": "2AywZ4EtTPp6ttsZWnQtYa2Uw4GFB2RwxumG61kk5Yzx7YgcUgmZKGrex1aYXo7Yx352hQWdipDhxC8pjWwBwAMq",
  "key33": "4qQx3Dj1ogozoF49o69NDroxYRRo1BHfatFggmtSsMkbVTqMoA7RTH2gsqRD4anSFXi8tAWQm25zjDNhdhC39jSc",
  "key34": "ou6rstEzZZsMLR5prdSXqeLYgfp4s7Wvf7xieTCmWSLd5hu4fMP95u6Ki8pXDifeB2Niffrif8sB9baXdwNJLnE",
  "key35": "Dd9Fw2K9Je8cxH4isCuKoZAMeBgRKUFhJdLJvfHzbvdKmSTxkcV3CnXSYCHfvf4ao9GQLdr6JNNqVSQh8CaUpuu",
  "key36": "JD2pcnKPFRLwLCE8K6pUmmfQ58aQEqACwgnGEraZDJ5c3Ckcio8J4y4HFJ4t3ecqJHtdZaujvrZKSqEoFHBFP97",
  "key37": "VabxE9M7nVx7vZiLoVt1ZHurLnTpwEJptN3wLsYanFWvC93nSFBM6kkYpYb8cM1HqdAtRjwEsmTTmm69Rccm6GZ",
  "key38": "2didWFuXG8tSfJC9iBsx2nJbNts8waPW17R49a33CF9f1byDSGktotddLy415RLyqNa7Ndv1dem4SQu9sLsh1XtB",
  "key39": "3cBVPxK6dYc7nEL4t62WdkzwhaBhCqquVzTVBjRvLHPXo3CoygqXN7QRZZo2wr9zg8VRa9DjkundNCnTtT46XK6o",
  "key40": "3YVdu8kCiT61Fv3Q3MLkiuyTm5u9FMsvz69SuvMutBYvYGXemzKTkdXBXQbodCQy9FpnnBBnNSqZFbsXPDjqDrZv",
  "key41": "2dGeYZSSozTgaZ9YQpnaBYsMUBgm8fXqztNdyiSDKzHDU4sGfuwu5hY8tyRFZ5nHwzmJC2p6LvFwf2TW3XQQ213r",
  "key42": "487xPG4zgfGHAvA9zpE4oG9dcLakY9hn2HzNC2KbXZcd94wpTTMAciaekF3WMw2YfPWjZoRXA6KLRK3g4dBhWWGp",
  "key43": "5Vey5UuWxCDQVyt6fctpCnftRxETwpSc7ARFa4b6hen28iiFAWuMJYLk1EWKBJdAQSFMgfWthNbd6gmHV59ffcxW",
  "key44": "4S5D3hsEyVJWQSwom1o7rPPSRXf9QsXT5NxWJwAawNkHV4F8fffrKXHbBLwtZSeZ5EfjZoUxUbzCXK53pjXzBjcJ",
  "key45": "4qFoYvHm9fnaQch4VxGdsFF2sgZZdWEz1zjyuJWGxi2Fuh9vRnzJjjxcRLPd31d3PjbJiqK2PsDq2pn1UvDpa1zQ"
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
