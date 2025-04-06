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
    "3AF8Fynhu25jsgehMACbdmNNjPfcX4FEJ15hN8iYXKJyBZzEkRBdQqNiTzHW2fc4hR2Pa9KauefgehX8FCgV8gYi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sZrjo38E924hQgPisp4XJrh1xafMnFA8jBqdbBaBgr8P1KUnhuZbA9G58PoCkLTygML6XzRA92SkVSF65Af7amc",
  "key1": "2qYdVe3QNKDn3T5bq8Xd3sPtjcXfEVmorxoFABwadYpjfgr4CLucXtcvPtm72uRLzLDCHqEUgakx87h42PEPPzSW",
  "key2": "5a8g5vDh5b2zJpZ2FDgnmn39SFrCWGKinomDBx9BzFSNYiLq2JjAaFJpGHzYQJrekjfKPEcG89e5WKMAMxMufCFr",
  "key3": "TczvBgAqrT6LdXqgX4QzKrHovLrXaNcXfBLCPT11AS8bDsavYJXhGQmEqd2m99w1hfkqGPGXYX13DxeBTiLeErY",
  "key4": "4uo14VUHgLZ4du5J817MDhdgDt7ZXC3F2k44CoVHhx4DoEL2KuFEnNbU8oArVKyGXTSfZ6X4LQGoYe7JeWLshS9a",
  "key5": "2wwoGZKri8vuDpCpsJUYjBtPPLoM6A9kyQuP3JzKRNfcFCYqEtfptwCJSgQToYLWigV53RXRFRHHTVxpT5BTNaMv",
  "key6": "4dqyVdcmbZqcnAHFZ394Lt6byEDrF6GfEjxU2kVXqSM4vapPMZ6WDznUz6uF4z88myaTvsjCTSVUkVwwAJqD8gk9",
  "key7": "4cASgGRGb3bm2qmT6YpZByynjp9V1ogJes62jpVsrrC6Pc4adDLdQTMFfvaegUA6LrXSZ4HwhmyhidQchdAV8stS",
  "key8": "35eDsaTKe7dqZCN53weFWfFuKqfd54BbZCWJv4hXeyEU41LJayMYzCxf1BkFNVmdhKFA9ePL4LGeqfE7DHfa3KC1",
  "key9": "3aShhXLyeV8hhZ6oCgjsbcQjWNUHnp3iftpiVnri1WbhnPh1rbq4vyZo8E3mxAqrtKVKd739cpjMfwXPUcahwuaf",
  "key10": "4UBT69BJQebKgRdTQDAyXe9hgKtrb6ii89dCuMxuVfPRNyPYTfAmW9zHAFX4CBtw6SmyNMjbYDTT5Kx2PLtgkKZd",
  "key11": "5niehYmLTCRRx7uAqZSdvxBdPwRVLpNC9tKkcxnEhjHb54kCjSdswzF7Q5fgfHM1QJpHqPWv2L6Zt7YoUwgowCpv",
  "key12": "2urrcXiZS1CxsUtp5tEBTqGvwdA9dnTyRfXnMzeEiw9j2wL1er4UndYcz1tUEkbiVe4yx28pVAG5cW7iZrYZwmE4",
  "key13": "5NQZ7P7qepo9T7mLabmu4pApoVksQoqrznturgRH44jqABkUeN19gueL9YL81bVL1KufhdzCAWbvoGicpGG31QLs",
  "key14": "4UKvLtw3o1DFhbJfmtxpGUHFPZXhgaanzTd1BDqDX5cPxiyRCPwmMr5b75mhjNpW2sjrSaz61gaSUxoDG6QDgK6c",
  "key15": "3omXxWTYauUzdxpRnJpyJN8GUqL4rEVs4Skdfsn9fir3cKcFBCU8f5E2RW5SNJXrorcy229Di6o45NrwFVtqjyE2",
  "key16": "3397Gatr2nDsDaYxhTWhUKpMkhwJWL6MYyhP7F9TdgGCdpuGhG4iyjeqaBw23Jw3koSpCcA6KeJCWgD9pL2VNrBp",
  "key17": "k9pJ6fkTR9UhSDpk4vXipNkRj5kz2ustXEUToK1BAmpRdu2CZxb5TnGorC8HByb8RKepUBBs8w7d1FrJWunkKno",
  "key18": "9cXaqijoQ3enpZqgdYkpNZhmcrNbidHowHPzWrA97ettTzwCpqjkixtQ65xtij46opFJXeWWBfNcjCoHsXHczZ6",
  "key19": "4kRCnEmgFUV79f5MyT1pEtuXTqgkELnDb5pc6CGCJfwgeUjXj1Y2tedHSpF7zgXWXizbGzDJUdom7a6PsA6JyzDN",
  "key20": "5geRZj7ZB3bNMhw3Ac8FnjB9M9xzm9SkcFRSKYisBbo3v4j7NwjN4dYfAhVF5vyewmVPmBwe5tgqoUuHwGdPfXR3",
  "key21": "m3HJ364fmFUjReqoSTfzC7RiA2xTjQDVtTjGd2Wc55VsKvrDkSfVsDoLbcuXDTDyEsAK2gjFnsVqbXgmj2TbcjS",
  "key22": "2rSTvLRjujhsFMPxYqMx3XzkpF4CuVPk9aXvxJb7bTU73W65eDUey9ookq2eThfjkMgSKrLEJHPvu1wKiYxDfsMQ",
  "key23": "2aKHnrnVijNLgYeLePzBymKvcdEfwkrZY6oa9Yg3EFfwPqWiLhE4HJRy9Z4YKT4DCUT1ccYkAW7zLfS8e2hHfBdM",
  "key24": "34NcdkyE75MqwacVRDUoPXe9sZA4CKb9YC7N6mHJsZ8Z8md7iM1jdSX2TokRepQ8iPKQWXAP4TvQoau3jxfbYy2i",
  "key25": "2PKMX36swwAwnhn9ovmG2oGNi4vVC9259ReyMTfGWWYpXTnZWhxfpr2L1zvaWfpuEcFuQcsjho4cBR4cQv9haxyK",
  "key26": "4NsYfzk7sbc37FQUonKwG6ndHjFcJhZMfKzNhno7R4X7C5uAUWDM4Cj8f6PZFqWDcpHDnn9rTtTPzc8HTbbL2aNe",
  "key27": "4gbsP53b4wHSaYUPMdqyr1Gwe8QmhNgbWmsCmdsbHuxrBLT9361mA5bWFvjooepMRTG3qmMbkEK2Q1DueofFrNaB",
  "key28": "4H3tBTXyLUoCWs15Hi5KKnHLDZj7LxsPWPatR4DTua23S93m6Ap9M5s19rjTTZEFFsyhd37ovMRnCQb8dynQtDnu",
  "key29": "5ZqY7NJXtpChkthYvN49AjqSUp153tsnXk6Wq5wL6iw6LmZG7koC5TnMVi4nSYt8NfwPaM31A5dbhhDQv1UL9j14",
  "key30": "4iyRcuaPqTcErXG4rx6PaS8G6eyxaVgjVi5g6N7MCM9Hia94qNq6Vx6S7EL3PUUyu5bFTCKBFARFz2NqRSjQ7BX5",
  "key31": "5m39H6mLEfW3wkgZyS3Bm64uV5J8rKEKjbspZTY6pXWmqNzv9sztmZGVoLoMe3TLmu2MvxXxBpnhyFxDdeZWDE18",
  "key32": "cxCrWGxVpBtB8wR9Rh6fJjSCVeAieqASNT8NVGbJc837PgQHUUwHThdtpbpzwwKFeej9wDp4xXjLjPJVYdGJAH9",
  "key33": "33KEsXhS7eFHfZAgugiyR5sarJ1FdgCLaS7YLbDMbjxp7rJEHqPexkxaJuXzKuEnvZHrQswtYhMjeR55gaUGZ1tv",
  "key34": "5eFuogf9uQHACe7LToq8h4JPB6b8CrN48Hv7QToCcCrqcNcaFifafEBvME8dG5b68WmDTdRH73WM8nj8NhMxbq4W",
  "key35": "5hQZt9hKWVGJ7o8c1aF7JjNLkr9NtYXTPcg19tEBnv7ADrvtBzHTZNgknrBcbGooZjy8YztprxxUsYTu616oBDwt",
  "key36": "1UUnTWNxYxSTjMvrcqo6JkTKRXdem8xJBWZtRv1cZHg3KPbVMYzU9rwHUEdmwuJD3cjsaHsLaeWK6fB8aagmkCS",
  "key37": "5iL47UD3xFciJQxZ9uzkiMy2ikfZmxMxkcag8P6GZSm42ANEeW3yVBFwXR4B4Q4JCngq6XCJJ64QunT6xTTcMQZk",
  "key38": "6724YyeEQqQUm8byyr9wmCS7mEYUzBQF6mM3isnEbCmwWF2WD8M4mRz3KFNRMWFNap9uqzzvEUxMbXguKHR9P8Y4",
  "key39": "5UbE6uskq9V3xBkZvSqMGXxTNAED6FrbFeTG5SnB5fcqSogqQ8R47jESKLsWS627zsCgijEFzJdpgJUEwGktk74E",
  "key40": "4thrANvftBkFAVt7NAu7W8UkWyL41XU5jYqNngTXvyXsHKnjCQ2E29jrJ4FZjQLEAAqGyTvbXwQv3o2JBJVUT9VG",
  "key41": "2J6NeZccjrnHcCdm5M6PEcVeXv9ooGYkvbfqCfJqcrzYt5EM7brbDWuXq3GWVERYMyJTZHrFv8xKjsTpAj8jNAZR",
  "key42": "2pWMtKVAvWV1WMsJQC8St9FetFPck72XGg5w2bRdETcdHKkCQgJJmt8W3WAhRwS11eo1NEdZzoME6wJx5ZHKEphG",
  "key43": "2Pnxh4gew9TUkJupJHZsr76jbV5miRPZ3qE9eDC9Xdwocb9x3zRfyWwKfXnsconNcNXRoAJkMpjVfUQ32fwpCB4x",
  "key44": "485DsPzsMjDN2YbthYURksSCHceDLPZ8bjgSJcyWyVV1XzQLHDBQwuQPTuES39cKaf6zBkVPyj2K5NmZzZLrxq5H"
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
