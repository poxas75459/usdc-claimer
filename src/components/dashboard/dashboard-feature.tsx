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
    "5tPKEVRg5WMMNYsJhDgGCtjkMZGswJASRJo6tGjkoGNCG5XnQ5ej9qBe5iKpduzkF2TWwEKEo6eUbW5cevjN3LaC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2248mGmJFsMEXGPRT1RLPCBrvawNZ1G4juLpzms1MMebc5Qo84GvQu5kaUrczcW11kqGy8R2AxaxaPnUU4G3rXau",
  "key1": "5kLK84TWYeJ254QdC9tFs26gqk5qpQQd2B9txbaWjDa9jt4BoJ7ZLChoNA8Zr7C951CUYjjbnEsHkifyEiKAzsWG",
  "key2": "2Qcg1JykaZyXGJ2bzCh27NmJsqn7qusHj9TsCSMGkSmoxMSYPcYasNkkgpLPGT84HgfvEJEVkXBAF2Bc7vCqzb4F",
  "key3": "4SYBZyomiXBhgdS1kicvLSuTwg8Dbmht5DpRQxXBTaxHYv5pvokz768KfhrKvGRYdPD13gRWsr1C7tnPWWecE6mC",
  "key4": "4PDRUMaHDS3VDx35BtWUfWaHFDiEaCb2szX2mDcsXAbuNKqmks6BEYsnXHvZsTM4kWZ8eQet2vz5StRtFtcUWNFM",
  "key5": "5k2W7UJr6cY5FCd3Graw6LLAbU1v1s9fyPvqeWS8RoCzy8UtRWEpNwccfwVsLwj4xicj4fdG9Ecbw3phiY8mMWCt",
  "key6": "5aqgpMXe9vT4h39EeLWhxj1xZCHoZZAWawLUFEFip5cYsVWVV7u2dYZxcJyBBkpR3FdSQRAt9g5oRj7C9PHCfxzd",
  "key7": "5yapnjs1KgJNsCpMjytL8d8wJatYNDdaoge1wXtuE5Qhgspd55HaJeMNSA1o97Rwmffa9ycuB8DeihKqaCHPkvka",
  "key8": "3EWZdNFGQi3BmapNGB8aQ7dGZ3sSJCDfGxJNQPHKE5j2Ug3fQr7dQKeocpWcDahpUj43CpmAPCEv8r3hz3RgKVGo",
  "key9": "3Q9ur9fQ9UoGKgMz9mKng5kGJaiUiye1DrNBWUMepxrxPCVT9wr8GyZP3dpTvQTosDiAT77HHZJqLJdytKkYSZMd",
  "key10": "3XrXUeqJi4L3ieNwdfuwNsJdUCqtSXcHyysRkjrG8Wj45wYdL4kfBY9LxKARJtP3BWC8hhNWawM9zBY6BgcwKiMr",
  "key11": "4mpV17PXF9ugtHPWPSsG6wvKgNMZraxXdjnwtoQBKqPAQTYR6axJ3uwA5iigeV1fS5RPYPHfuERDLri12PZ1ZUwC",
  "key12": "3HNcqwmmAAFUDURXuxQWGPJe22vMUpLsZ8nkwHw6VfPvaK3yxs2ohWBun3bYcAR7U4Nmvsxw4cePmNHZPRupjSt1",
  "key13": "4FRKT3nV8Paop9Y8T1kK8cmyyZv2bQgZJobC1GLDB8uC43QHn6tuDSbvtUpnfvkoXx64Js1WhEoifY8usuJNsSL5",
  "key14": "WTHgqcFZ5rrvDf1KrQRV7jdqn6At88tMSPJUchfc2WLqdmdrgQLwutyBExFJypoz1zDukXEjceKqjg2Spy3xLFA",
  "key15": "5WLszAHqp4DMCJQYrThoA4n9qTgY9vFK3uxYRgDD6mPx2Ae6GSy1JMT1mCWvpiUxR9N5eGcNx3onPdXahzREFS6D",
  "key16": "29cm3ejUYp5SYfijQxH6xCZEFsF3XjPqLSx1YzKLgoc4ZKjc4eNEaVDAcEhUXXDiYboWpBA5WisPtMgRDvvav4rf",
  "key17": "VwGjDprCVV8waU1PV5noq9CmNpYBLQ6CRr73EHtZeAXtbksQqJA9Z5q9mcfvn1ixT5yWTcrkj1FDYDaWoHdSL3x",
  "key18": "4h1qzGRnQwXon1ssATNPCvRaMCAWMY6ATxiRpnoFdwJDzW3nFezYRnr2TuhD3FWWZ99VxD925MuXLzYamoizL33f",
  "key19": "4sKAJPvEnjWuQyx3EkGCvJQJoJokhWL9rEbiiR4uG9vhqYyyrS1pzZnFVEThvaV2KdqPWYWEiVun3qx5ZMAQfLnx",
  "key20": "61UogRMi7B823LiNJ2oUUyYR3Ux7oHYRgX3BoUo8JwwkecZ9CpceqCDhRqnQa3xj8YNxDfukS5GCS7KfW18AJbtN",
  "key21": "5B33zYKqbdxqioL1MxjK3pyLYCRvBEq2Myhy47zCPEkXGcH37GLohZkBmMPUsdEGDzye7MffsPS4PvDHt7MnNJ8Y",
  "key22": "48aUCwJFb7DscEHx21mg8Nd8KcgshD3bWEgQwcw38VQze4kVqvABEEh8shDixP4iNqjWRbrivfb5B8A96EN2JfnD",
  "key23": "2tbjt3NXU85zSmPVXnNqeFNqZRsXJzwzNJeRNXerhy7BSEgN62A3eUKMZwF1pgQVZiLGj872KYbSbTw55P1etPW2",
  "key24": "xHZnjV5LFSdPyBoDBbz3JDUpTeXDCBdFxgVRYHbdRBn1LQ7YNfPzhsfVPJzuUvqvSi29PrHwPDaiVAfWtdtTtA3",
  "key25": "VyHYFfw8LEBvqjAczoFkQS2hZSRuhs6SABCr1Adf1fxxpmA1vCKdm8ynSjgP8xVGpy6oFL6QGEDRJ2jvMPtwf5W",
  "key26": "2Kq2wgpGJ7vWk8uNVrSNSAEpNCUnvLz7yDABy3CdaApFaPHeNyGovR8xDcjKYK8jRu7HYCitgf2tahum5z692Mji",
  "key27": "a5vX6FJPiJdaEEFpVBrbxAqYNaJr5xWRwvY39NvQ8svuiVUsVHiCrgnY8f4KayenybhmYRbh1ysAsVMPVikGjqa",
  "key28": "2oGJFdPxp5dhyNC89xk1qgG5de2zBNvGejEE9JoUEqESjwhiqsrRcuXT6yBrCjXMukjNu9NL2Gh667ettdBrDZRB",
  "key29": "37rQYkDU14UFnu14Gg33nwKVSPRq8xVHb4Z4Bmu2Y4NJrXGvPHupz8VrJKeF7jgMrSKaqsE6jtjrQPaFqTKfzxjS",
  "key30": "2iA61U1xwd1ACAHuadvmXF8SymxW3N9qNDqiMmXQrbmWPGHGtBbWudogQiVDARG1sc7DFvJNVvgbncsPaZzoZK3k",
  "key31": "2shATowPpAXKRaURyMUiNjhau7wQSDyWqE1qaJVVHeTcEbt5haownKBFcocai1hMuPutfodcJN3faW3QCD66FkGX",
  "key32": "yqjjuTxjHSxub5S39pEHjPfboF17HSc8nxRtcxzYyMtomkvn7Dkn9tB1qcAPeSubmvDzrPNoxbbzR8cVRKMFn1c",
  "key33": "2Z9A3cGrWHoy2tPCkb4sh6XEbuhyZVbBSCS7pokjrJMM2UnJr3tqrrReufS23Pv8MfSXrsAugf9MoW8mZBHxvdeH",
  "key34": "4ShjHPvG3xjWttvoLDYbuxfaFybVcF6T1MyQXzTQ2AaL4vKnjKPenigZjfKU2e2fhGdDJX9qJHpEArELd17TXRQy",
  "key35": "iriG8PxJR2Du3XNRHhTT9g6WkJ8niCSrDdPMxfZF81pT1jSemyioJCkrXwXMu5DxvYhBVJQozYUKpSJEymJ6T2g",
  "key36": "WtnBr8xJtv44zmsqcomNBxNQuyHd7XmoXSo3TTMy8JyCBmb5y9ygPhEK96iPKtrWxet5WhihAphgrt5UXxvVFxn"
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
