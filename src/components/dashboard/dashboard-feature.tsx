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
    "wij26ns5kP3zFWmZWAqyq1TV2EmE27nF475TcpqqP2ACC6MQxcRnJfoK6rT5ZzhewLS5zN1p8D8KWVg4yN4uMzM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5i44xgYpyhje8NPmm877JF7MacGUyWBr1McCLAT98d34bmnATA2pKxtuVgMrPLGh4TfYekUm95eQuLNv4tqqnSZJ",
  "key1": "36636vFKRkGjT8SEpUHrFSDwi6dP4ZUwjVCkBkEHXWbcu9HPH33Uxri3mdLPDqAZoC7of2hqwtFn5qzezpjVS7KX",
  "key2": "47iNyYFtzfDhMhUowCkSdCpGkXt7wSNfDAaMveapLpMGHtCFh6TmDaNxHyqtzeAzqB9H6HsxLb7pVJYqPBcCMdyS",
  "key3": "5ppCWWVEqu9rxnugYMaYCYHDyyvNXBppyPy5kKSEZVXYNk5yS3XhGXguESb8Wpxmh4DqBxoNd5Hou4GT2pFMoYdK",
  "key4": "8s2avLhJx4B8BB3AWya1kqY4tJkvwhtrktdHSs29Swam8oNK7oAgMNyg9DLxdqE5D5YRLXr3gfTBqFNNq2ehUT5",
  "key5": "36piekdLjM64Xa5Hpwiox7HC8hVw77BZRAHHqfNf2JnSK4CeWDpxAKBM7gJj8cPCMe8j1Kv54Q3oUFka3g6FcrzM",
  "key6": "2jbLoWZRvdj8QVMGiMofi4LL3yiuimK99Vgn9joJNw8P6ranwj2tB46oKjh6a28PY2Pz7ddxhdwgiekPNCJ74BnE",
  "key7": "45UTQFsL4RD3P6uox7hAghpZkhbdLbFE8c77phoitcSErV2wntof9DuUeoMK5mJ52NhVUWki5LKG8MEEUeXaGz88",
  "key8": "2hAMGCk59ZBa82HYtaEFGi3kDCW51GuVJD85GXaxuC4NK2o3MBDCz251ftbVRkDBfPAFKogBbS2ExTTfMpaeNGzU",
  "key9": "4QMqHLKWsYTbUuDiZi7TH29Msb6Qr3hYv2L2BpSVnhjmqMd2NHy5hrdJYUqVykFs6VS6NAgD4crydK5Lv8fC3wjb",
  "key10": "3Bm8SKpP9pgtyvVTTfaD3AtXEov6aKCTehDxCtSah9LRxsHFtoFad8oqnG6J1jYQPmAetwzetS3LVPuPKLDiDLqr",
  "key11": "3HR22ykGTi8UKur1dUuVqEsKdtxKKMkFsdvPen1aGFQz2tRx4mXwSb9TEzZueTsD44kYqi8k9bvGmQz5Q3yLhSgZ",
  "key12": "3ytcNGQAQ4hpMDbPbc51dYJzuwJ9ytde94QPQo1JthPyVBwXe8t9SFwVZgyXx8ZyeNDqTyajHw7yzLEtiRqZ2eUm",
  "key13": "RXrYSpzZHBuRaH2eMV1fE5JHtNctN3vAVeUqxijHfevHL8KKxhJANMbM1PzeGceAKB5a1REo6UgsaLpGT9VJoY3",
  "key14": "43uUzbG671ZmP18wRmaqwh74vVs8JWYGhQxXi23YJ9hyuy6Hvg8E2fY92pXwSvSG4tBBVcimAS6v4Wm57DdkvNZM",
  "key15": "2jspj4HVZCvZgrwvNKid3ksnXLHTUTdvWZZArKfLkeFncoTKXaHcKdz8cyHKYZzXKX9m8XNnsasya78aR5HLdAEB",
  "key16": "2TfbAaSLJpvMYhfNvdr6i6cPbTB6qM1n24eTUY2fErrCBjV5LZfwdexkzVcmL8FCswtWFzc18Hc9yhbt6XxfEsWv",
  "key17": "4q7CX5ouevRXsKEiLm1HJ6iRCbbinQsfquxFsGb51RrWudRTzJx5mR39sxVm84zr5eWPjuQMgS8fRN85iFn54VP4",
  "key18": "4kQhHncvnFQp7ZnRjck8CAMgKXbCsRVSb8ZLfqEFwEuXCVgkwURQANVx8KF5WsmL5T6r2noFHRuY5mH4YqNyNv3P",
  "key19": "SuewUwbM7DN38WmmH3PHvMUqkwfgh8fY2WRmQRwZfXypMCis6J6Z6NFm61bq9zhuDhVu4TctWAmyL9yz4dVY7LC",
  "key20": "4d7ou1yvRvmYrsbZhkDypunkehmx4nwPY2siuzMfp9zRXNRHksigzLtmRHCTptfeAJ683r7ntMueayT2m9SpmFtV",
  "key21": "4PWJsbtggxopxt3oKkyChj2tb8GyVjtc7Ji1tFGvxQvSA8JsccxqaURx36YT7Z63sgvjMAuehmxH9HzdetBwdUyc",
  "key22": "53Wnvtv5ra3vNbULEGBtMauJF9i2wju9tcqvAY33A6WmzK6CpRjrS3bXw7dMrJpUPExNsCZ2C9T1Qjf4FeUdXjQC",
  "key23": "5kkkoS8QyTjLVqqxQSrRsrSbjFrZHiVjyRWyhUJX9Y6ZQ9fdsmuagxRnYp5nmFZ2uZkuqicN525qdSoobJvoWa1S",
  "key24": "bmpqjkVbVAG1xhSC2T4okjGgTJneuyEa1XMCt9pj4VBkH5Nim4fhFvKyvzxyJj24aM4eqnDxYLDybk4CcTWevge",
  "key25": "qfy4XtoCbzHJvJ26oN1XoqCpophNDxyFQCmTejGkSqgdoHCJTF7xowyfBxyCvR4PSCuN7sjyTrEpsxaKY7GCgZs",
  "key26": "5HqHMaaZisQWoQ1U9C8scYM1x5pvM1Y5namqMsbb8YPMdkthSfq8Z3ber26MKA3VY3rW966uChWcUL76pXk93S8S",
  "key27": "3RmbNjcoU2dDa71GCRJJCFASJp2rgk7mhzMZVE4a49rJjVhLiyuff8iz4Y6jXpizE6zbbMCsMJBjQ1wMurPwM1ju",
  "key28": "2pha5xCZ3PGtriLoaoFH2FkoEBg8uhWBUZJpz4TDrJb5zfPBeQcayG24oKHYcBuHb4Wpx6s9fxzB8NhXR7keNPub",
  "key29": "FbDT51wSKh1xu5jc93zJa4iHDR7df6NpT2Wxpqw61MXVzMKZBi9tR137xxk5SUcKfPUq8JaEfWhJ8NPkZMfya5R",
  "key30": "2VRGV4i1Dfr5meHcAJEcvgAoTcY7AFk9cbqk2CZ9q7zqTMZs3od8SFh8u7PtEJVZAw2eSRDLUycW83m6TwzJbZN",
  "key31": "3Bxmy6euy4ur3vYyKHEmoNhCvkwArpY1WgC8kpaTkBXhffuxJn4HgbJtBHk5ihT6Sm4RnY52qZQiwSQ3RTyTHKFq"
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
