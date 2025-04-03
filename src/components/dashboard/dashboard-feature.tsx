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
    "5Rb3DzPiv1YD8jUttTWoctwcT38Jb3FRbDn8RL2zrH3Zqa63shfmScdGcuc9qnkkkxDhzkzk519cAmnzwn17rr9z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5scVyAY8qcEBVzT7n6xDpwtDmioJRnPNBAkXhHPkpKLStWHp1jhAPLNux8nAT75mdu5yXAELCV9hiCHMWDZeMhGF",
  "key1": "4MUTLtYhuJoNdgeoT5AeGFh9MgRakQrL9358YqhF3C495TZHmdKsNx8LUUYScs1ZAhdr9cucpARPPNLuxodCdx3J",
  "key2": "2iAidHDGABm1RXkBMPRo2MdZeznXdLvgFz1ME1hHBQTz7hhpf2Ugogbq2u2bkbXoMoAGSss8fvWkW9G32auhkR8n",
  "key3": "iXoepAUiorACwChDQoYyo8PSSmZqwSRNckQL3E1VQnuHs5CUpo5jhWXAmY9bsme42F7ZTjK4piPWewzHVWiauzV",
  "key4": "51GScYip3jjHsNqPJ6y8xHQDDdz8QMmBTyjgHrfRMgpAkYe98ukYTokNaTTfsgox6NNcHWXkopWTDhPy42p96Ahg",
  "key5": "4ZAtSTz4tgD1nh2gTdHrbfgofpjkrnhH6X27eAYx9vcomxCgCaovy2X9rrN8YqLxZ9WR3ph6sbLZtcXF5Vj45gmG",
  "key6": "hpqH3vqELhCddLxcUtJkZQQ313bbJi5oC9CGgrgBrpGkuA53ir71Seb3d34Jai4JJHDLnnEruifDCbQjGBqVP9U",
  "key7": "2JAMYJFXqzuTF84munuGuvWNNhSgQK3vHFub47GYT4MhqqzrmMByb1b1kioRXQE6PmZjjThN69Vg34GcSgaD3uz7",
  "key8": "2qWdMiB4MG9yA6hBaPGyPV6wogWCf6Ecqd2jqfV2QFpg2vZGfj8vBWhHxgzp9jUJcsG5ivFQi2SddYWQw7rEstsC",
  "key9": "3jP1ezekg8SSf8ymwJAeUw6x3ZMuz1rsXv8aG2X5uWsarEexVswswWnmyvSBxGtAtZeVa9t2Lp3DJ1tp2sGJKwgZ",
  "key10": "h9wgGHmcynDKQmdC8MdTymQgCak5CbRfQpQYhJFy3YcsqQbNmZe3B9UPo3EkcRw2v5hGVfnRGd5ZrSrVMsBqiCB",
  "key11": "N55QyG5iMhAGzBu2LaudGHwhVuP3oyovdJ8xfN8hstXAJ81TsaCmNWS92KZpmnyHPpb4Q63fJPR2iaKcLFYmHva",
  "key12": "5rm4vndcrwF1nCCa9e1MprEh6Ep59AhNSHLQtcK2D8SDBwzTkQs5sGe7JsVRDHMUVm4faZqb3m498KHegfikmJLU",
  "key13": "5F3SFvB8tnTnVaGWNRSstf54Kc1v6r9KpHjnUKfcPuoVrGYamDcUGgpgpcgE3Qrat9T1cVcdLreVZ3ccgRuqzdEW",
  "key14": "5yNpueFaXM8HaRhuDtLm7SqjE9cGxxPs8rMFHhoJ3L9MsyxUpCch8fUezMcVVDcTQbJ8x41awquri6hViint54Zp",
  "key15": "3gX8yTyatkr6oZuqHyCFcUDDJBoi2AVWTXB1PxctcLxsDtPdboNuHUDYHiGpg3Au8PNFcFpJGaq2xQjaMDHisivf",
  "key16": "23YGxcZLZC4n85CTJFMNBGDW2VPMiBHr983HHUASBBQHAdK7j19nUc9mNqeyNeRvqCXPJQEgGZ1Z2eFDjZwodFwc",
  "key17": "4dzUpWZaWuY22GLQcgX4QscFURWr1TynaHSsaMaseTd5TxQorsvJDZ5aMy9HbPg9GqQPvMehBVfP25AwjnDQL7QR",
  "key18": "5UkVjqGdg2KwFe8zoDQ1EvNdExWzGw1vDs4cZFmdYe64ybxQFBVM8MrZnw192bzaL4DLb1ubEuqgLQezYURXNQCC",
  "key19": "yVZ2MV2KXRRv48nW9m69jiK4F5dfMdijr9ucnKVBETsVf8ZWmZDBRjpwrFatZmDVAXbZNGwcg1qrvQPKYzMZxxj",
  "key20": "2EGfaWECRNrwsnY2pu93SVQBAWfvsXGe4hf9YZnAPYkao1JDqdaG73xUQ9NHJkRuvzDnGHLh3wtGoK2oM979GuDm",
  "key21": "3kC2a3cMN6BSrMYBLmLC3YWaa2be2LbSP74REiCjFsi3MhYBRd2fyWKxLPCYwb3buS852xcwULPbYqiLHnXn52MF",
  "key22": "3t3bWzyfz4qgmQ3eLaVhW6F8zpEVVpBoCmELFzNYBdKikLCYTdBRosWzAP9qu55rie3ZfKrRf25dT7G7BDL5Kj48",
  "key23": "2Si1E8ogLVAPM6eLiFDto1eefbXfvYHT1D3LxkZ6TsccAYSPbjSN5TccBEUng26dENHCYgQi6LNaQyKBCgA5tqs1",
  "key24": "48BK1zfm42xFg1w1RJxmXUpie5CgCerVWNJzdj9xk9Cvoh89KA2XHnFJdHBUAm138bF78sXpNLft5zcGMjSiqeTd",
  "key25": "37PRYrGbWu8zxHPEi3iPLoiPobp7QVG7UGvmEpSSEY2ZNAgYBmyZxBrYNaNYbvTxX2B7xGHTGb73dzaXQPi2J6r4",
  "key26": "2Up3Mv4aoDtt1DTsGprcZ9jvP5KZKrFwvcv1BkarFh939fAq1pTJBXYUeibFw8bWPbvF52UiUz1DK2KeEw4XNob4",
  "key27": "Nmr5GVZhKGKukguGaW7td38caUMudWiAR5B5HahMcjamPSTrz2DzxXWQATdAWeNRPjXFRPoNvk8jeF3YnFwTC9o",
  "key28": "pSRgPgYQKM48jLDFgRwXWraZHc1F5ndRY79YWgAdhMgMWZNHwcR5ia26ZSKqG2Ccgbsv4ys35gyhruASWiA1QQw",
  "key29": "5yV7Aqyfbfi1q7EavD5v5HYSF1wMcRaKER86jB3NnHEvd5fieHZY1KW3Hrqy4BpdJoMeMrbQmZagq9qreuvLuykG",
  "key30": "2ha3Ey6ckhTqopK9Etjn9XBXV33G72dv5Prk9fgSoD1ZeHhZkNS6Y3S4cpAaps3Wcu5dZmsPgPmrSk5k3TpT9HRS",
  "key31": "3RzzmfzAStkXDKLiKcq26vQq5csVKgEYU9Ywx9q1xGXsNWDhBavE3VD92jARGioikrb7mzDikuNYnicJxWTGZdkb",
  "key32": "5cN7JGnQqr1zurVWZTy9iUiEnnzk1kjRVssqWJn4UYS5EtweTesooas8cYo47T5Vcc4rfmQMTwc86ZRvm5CQHEMZ",
  "key33": "5uXQK8LATq8fNPQWWQ6p4B9HiZBSenQNTVGrPY7qEkJPq8YCgm8VTRHKNNFEMLdMnmitCUy1jkAv8X5L9VEnvbVy",
  "key34": "67ky71wo9T2T5cV6WSrFRdna3grsB8V6C5QhgsiifdfTNvGaf4Vvp1PwgW4C9pi4zitymPw3wwCw1iUNXF586RSW",
  "key35": "3zpX7kgZN7sR5RmMRFJAu3wjsph2JYPGAL2fdoNtE1AmUDnb7tGsSrGKcd687DiibuMYvCKGG9B3nqNWG7FHRyRN",
  "key36": "4rQx6Htq3ajF1LvoXftYFdBmWbtKKo1KdnXyB1bvTr9sJEU95DUfBjBsR5LiFytpFgUauyxKmUveYVDWC9G5NtKs",
  "key37": "4xjbNqbZjmafoDNBs7Wmp8rDbLSMLo8jyuk6XKEB4wyXeo7D4rxRHTyP5GKMKynXogA3nZztZA4WtJQpfxxcpQMH",
  "key38": "iMfVAKzphvE1YX7uKAYENJj4wMqSMPkgusNa9HqnMRcvCTjrinab9CN4ghfRkLyd5z2R4nLzxQesUfWMKmtvpC8"
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
