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
    "4awKf6f8TdHGkkP7Y1u5jZSnBWwek4iLFqURyhsN5PsGsG1hJYyuoHMeAjezCuZuTKN83v7JACnJYJULtQc7FxFU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57E7PLZHXKuBDFheashrMFdegja43JsUKpmjmD4YpgDccWHY7dWdAap86qwEX2QweqpaB2BLpKvcf4gCFs52xp47",
  "key1": "4zQnRAdy1kB5qmDpsvgz16JyiWmB9PnmVi1ufy7n8rqHT6iWNH1HzUSF4xQ6zBT7gYYGksgDPvEvxCqtjq3uXL58",
  "key2": "2GDQcCuUto9Hrx4keRiPRYPnrQ8Nrdxrw3StVdxmxnLgbCS4mPxqyu3mbggdfAMF65rfeNjEM3NTgQbTqKNaqBGk",
  "key3": "2yMv9HpcESLxgkdGzmRWTPQpQjbNs8BPqRUPxkhZ18ef37bcbWY2Yd5nE6RFK1jB6VjmcaRWvvyZVHpA5QVyPsjG",
  "key4": "4VjjRxsrVpKwD6BjsTgSQZSXn3525nDAcGe9sqxGgKYPn3hFYoySDX271uCGRP5LmGpWWTtXKQS7iGSojvjFr2rW",
  "key5": "23w1NXzEdxzkxjjiCEMC6dJdKU1UagvMiRBnGj1mrt69HCj575Aa5aSzpbafGPr3Ee5cqebyPLGub6os9qbm6oPt",
  "key6": "a8NDwLtL7MzdVPsRq1BRf41r48p9iTRQy5d3ijUMeBndDbNbd44JkAcBspYjzQxdiXkUzLfxB7V6h7PZ4FWydxs",
  "key7": "2RQ2kW899hz3ApAVxqwHQ2bmDGE5AU3ZvvqGPdRMRZGN1gr8ADEikZDu77LJJqYr6vcFCg7QRiQjRPJfx8kwHQLF",
  "key8": "3qbhG14yQrHwkq2iZBKZ9sa6SKwABgJXqKHcwhiowGAZYUmhfcMYuC7rHMFhHDXoY2okdJpd8ZiJn2Tg1Vyd7PWS",
  "key9": "5LpyAf8Qnp9apioRdXAJeeFanLxgZs53NpzaCVbFadzBvYhmjVjbbht6JhJyJecWXZ8HkMvKtF121mQRGQ48cq4X",
  "key10": "4erB7D1jF7CEy7ygxgooaQcrgEYv8V78FaXQd4hwrKKnxoUBaeH4UfJKZ4evaoZyofSrfpGt9e5etWKBZb2WgT3D",
  "key11": "5EYDgZAdTqppLgHwF3XFAaC428J3NaTaX2MH2h3BJjKCB4a4jBWRFQVgoTdq6RFLYdNimgrzJw1FTejFfUxpCkaD",
  "key12": "3yzwdrzEKs3wjF7seFNkh1sW5Rf1wBfcHbPAL2eGkdh5uphTy2dFVPKUhjhDto9Fi81cWJSS18rZwzEJBDwTqLGC",
  "key13": "2ZwR2mpmLkxcmSBBq63aoEHuZjDikyZmFLmJjzF1SWdfQgzGGxDXd196qdkyop97ePVdXPCfiPh8VD5uvTPT1Pzt",
  "key14": "3LUNMskxU5i2moiE4eLwkV2w4oCSdxZvWJf6K9o5qSr39td3AroiXQnNgQSHh8GNjQDNFpjpLSGxA8MpcevhBQoQ",
  "key15": "2HH5UKfcgiCzWnxMypjqRztHBRgpWqy292nWx7RHqr8koRfWEF3WiQd5tLwh2EB5FV4E2TbtmaHwiKsW45pfsuES",
  "key16": "2xnxxKABkHXwNej21X3kDvt1dSgsErYsc7FfwzegPKqZujswGUHH73tCtE2dhLNLewzWgPB7XmzrqZXNQDbkidZm",
  "key17": "4cd2ZoUCiFD7we6iQdEDmFJteX61QVaN1hkG3HMCxCCn3mQ8PrdJ5ZKcevWEuDwNfY8yPMZjiL9gwr2qrnTCdUjv",
  "key18": "4c3JQZBthzKvvMhzWbC6gpejQWVXS4QdanwyAktxrvCMPd987LLUNfycqCJuhnHK2Fyz3MQB3weiVh2qhA9ToPgE",
  "key19": "26vvuGKHYk3bWzmNasrPbFvX5Y8j424ZemzeT8wdX6WTxCp7asoUCFM55ENpF5bEd1w8x8BZB7bMsiTqCYSgCT7k",
  "key20": "5R5j7bEkwJpZXngFZ1stYU47HTTyWzDUWjXq1BCPheehYWKMXEuhXBmFQqDwRpK1ysibkUCbWLxhe17gBvKhQgTN",
  "key21": "4ZuZWbCtuPNCKpS8uHNwMBPDDhWKq8jXqY9c7ERh1k8xGw7RxuM5TNnDwJjNvuWJv1JvDQLSuVZzj9KcjNZmK2a6",
  "key22": "3zqz6NJso7gss3H2uV5qwX3VTVat5mMDC9sdb7Yfzg4sLPLTGETtKVReym2VhytNaCzDz2qQvrbMi44VmYK4F2Ft",
  "key23": "5xiyGRUxdd4s3SMaKyHKx41qroKEmedJJcK8vedxsb84MEoJPLP76FyctNcXnC2GJTD6MYTn5ny1ibfWSGAYoFRW",
  "key24": "XmM3HrypuRwyx5nWWJma9Rq8ygmL6VdwensvDb9u1cATPuC5j4UYVYQWTdbbcPGD9ZWoVLFTGX53F7gdLyxcQDC",
  "key25": "2cyNvKc9tdHhodqgdupNUGmmRAaWXUtoWrDC5pG8N9uskDMLxe89txw3DX9Q2ChuXRMmy7fyCtHakdFa4epFiLxt",
  "key26": "5nD6Lw1UPTjGoRCjhuE3uhoa3PLRZsaT25rgoQB3MbC1eL5XFYhD6cB5ZV2dKQ2oUZskimfzmBTNDdsTA8cisjak"
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
