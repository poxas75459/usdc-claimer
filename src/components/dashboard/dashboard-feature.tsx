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
    "3nBacTYXP4iojAf7YEYjkVS592WFpcSZQjZvsKsgWYbSMTZE1cpNooE71nVuAWS1pWLxsGsroEJjrGaD1PEuhq7S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Kta1gCbLLwR6aLWp2H4KRHgJbaLFDABcyBXdb4nDm8ZLkBKi1oM1CCsvVDKXZVv8Hvu6BvegFkE1arAJwSguMrx",
  "key1": "3uprFcHsAmWYoWBD2AL1NPR6i653UaW1frWZbBcwdmBeUE6EUzSVYYYCZ715dRHTYbRWxCywEzXVUAcJUz8DpCbh",
  "key2": "6Kq9Ed481nLBRv4nMExzMXNn3PcGpGqpBySPNhRNEve58t8ozY1yQ6anZzwgGkLHvysbYrv3KvSqsFbApRSY25P",
  "key3": "2nMf4QKv3zrMwiHfF1VVF5mGq2P2uoGJubRULCH2RdTiu6dHLs8yjWe5RWLBzy3Rue2dQiw8tWCj7NPaxADPXGwr",
  "key4": "4iQMgxk3RzAd8BXQ7hAQorMwDajwipfc8Vuao8voM5zFdfFSnhXmo84Awj1pqK8gtvrrBy4C9QXdX3yArUwjoMsf",
  "key5": "5Ut9oLUpt9NpNkN2LbfNNxYeAFLnhRzioPv4ytskPncRdSQaSPYVWMz8efRSMeN7Ryci4ygvSNx5z2JUcQMEwsW6",
  "key6": "qS5fj9uhd7WWToqZA3PaXkeAP5ZCjSTwrtro5EUeHtJP1RcMN1ZVQ3WMYs8CwUDFwj8RZfoY5xF6xeugS8rVED8",
  "key7": "4Z3kyq5FgnTxCX2jdbdzqtLY35ZdZg3dFyMW1WRFYJJauLCx4yTwNVue7HmsUJvqbPCkRR39TkGmzcSTHkudZrwC",
  "key8": "4areATzvu3yb2H2VWEHkdd4SqK9EiSVtXVAmBbZLtdHwrBE5WWcsGK9w3NJqU7rjrRpSgHs1ryHuLU6HmKvhGegn",
  "key9": "3DJLJvJNMmfvkMJvjLxk4m5xf1UFTm9peZoJ7LstxTwubJGVK5HNdN63CT6i5xARUvcLVCfvHrGiZRzwXq4KsehN",
  "key10": "3EVG5FBduGkYssNQpW9sCLzjsd9ytmnNH4tm5ACLoocJRcizyupAYGnQAs94v91SbFriNtZujNPEWLKE8GyCY8Bf",
  "key11": "53bvr3iGZDJqvhHFcEw5D2Zh9bFTutcw833LqjXqDACBzpgSxjMefCiD2VXsN2MAQxXCabZ1b7LtjpK5CcDyGxnX",
  "key12": "4PXecUsU3DtjFQiif6fwotws46SoeFWcAzkR4RbM7nWYASYaihgjiX3kDEBRKMxqYBrSVDffRuN9BvUiij74UtSm",
  "key13": "477WoqCDTTZ6ibJkx5k5t9xAaDjGPgxdG5B5Ly1KYiLjmnYnV8JNkUWMPnyWkQLPEShVN4QcTyfjW4QteaWfi832",
  "key14": "2WwUMDgWqtXbGRV8Fm8x2vZx2nCvDebyMEy3tZEHV6pK3oJwZVaCna3TQy7r8fEXS2raSkbrxsRskQGqQCXNA1zB",
  "key15": "46gGi5gSb5H2czcZpoyBbUh3jJBBadb7cUYq6eb2LVGYaGtxDKXr7hUn6auZ91RHrvaPCqKd76uga2dV92m2nkHi",
  "key16": "2z6UXYT3SmTr5HuBZLHa6DNhtbiqBtTYPoxpXEb1kSCcWUeTCxre3pkGeiDxjdujfZvFXipJ9Q99UdTTtyBaJDo4",
  "key17": "2DzdWMGVSYemFj43vWjGrHAiZGdcgUqmnbVgH8NcpJCDP5w9EKEgio72BiA4eRzeAxDTH1hyvUt99j1BZ79wXU7C",
  "key18": "1W48hhDxLGqMeiJboXw4tPtqgGi1gFmosHB9X7CfNHgMy6McZLNjMJQ47xwh9rebx6Egm3Fv8z8qaEPzUZ48aSh",
  "key19": "3Cs7B8Y2ZPDDbFHQxy4t5ebbmPxTcCnsuFokss3it6fLV1xSXQP3cE67DDv7picoy6KC3jNNv9AKFPB7bho2vnWC",
  "key20": "2RW1wJ6jdioA3i5VL4GMUekqekEqW24NRAgRxkyddjk3dULBd5svJLj9PkWQa5aVyoi3m97sQ7exkkNPgryYJ8dh",
  "key21": "21KWAQpeitsvwbaPaRf1YATNjKTE4vdJyi8NJun3BSwqH5vSu53Z6fsJCdDfAtNnDzPvFnVAuyURsMBeYhFvvL8A",
  "key22": "3jLtTtdC9FChJv9aChSxArBDfLCLjZhH7iLa12nWeQFPYGh5dfgLBDtojgie76pXBmsbDRqBLEZLKgPcGuUfSxKg",
  "key23": "4WBUMAsk52L5WM6VjoofXcfXCT4XTgjmzQUB1qucWYuux8JAy1mEH8233r6EmHoTumad7e57kZJk8qMJ5qJTu7Vj",
  "key24": "5c4NdUUFMhVzmB4FgBXes2VcoT3VxAfgGdEvQTHvciZXLnSgCH3Rj6B9Jmis9Ub7RSyeqzt9x6RLmR88MiApRiHG",
  "key25": "54shkGvSo7S6gRP3neySmzcCGxRnawkQkDYzh3D2QSRYE58KUAyjksYdFLbCeCxJjzMUYKbkLdax8kbfqr9rvrcw",
  "key26": "G5k85r8Qv63bdKXTEnmkEvL43v4S6bJWpc7o9qKe3FpK6JBHyVdM3Fjd5HcnZaARq7AqD9KdE3y3UhLargurUC8",
  "key27": "2jXZJBu8VbxEY5Kg4EUVRiNCLVvDbcvPA83dYN1FckfRxkvuD1rQotqNAHTrSJyVwG3G1BGYdiBPeRD9dYAE4mtr",
  "key28": "4YTZvQ659SQtUtxinLPSGdbPoRFfVWehohXtaHkAtzHNPBHa1Vs54vxN9YEeytsyAXbq3mg993iJTzPdqTxWic4J",
  "key29": "2Ac4E3i8p31Jr5h6VwhrVcYwWhdHwzoGnyFqqKgm4ZDyPnmNhP8GRRgZcKgE96eLL5PabBttoD7kzd58qvAyxqaX",
  "key30": "29ZtotsSER28ktBkkZXeP7H9JpQUenK3u5F9eLuqw2eZ5YErToTtU7TyDunTQ5v62gwRumkKQ2UgdmwMGYf57e9q",
  "key31": "36VjkT2WMLm85VLTy9bspZhSUMKhwbvK8hMy6jq5toLNGX9raRqgnUyCt5fbfezhRu1cqh6hGmN9mo2GkySzzftS",
  "key32": "5GAcTg9SdEH2PXzbVQFkBAuDiWWj8ShoKDfbu1vo71SUjjQXii6fhiNr18fbaeghTDzW34ZcKMBJLvd4rTsDD9g3",
  "key33": "3bqXakTCtiT4iS4RA486L35q6hVYjB3pW63D6iRaUGw1GAaqy8BnNgjwnVQNqSXZ7uy2cY4nKqmzSL1F9gZH4bGZ",
  "key34": "4P7js2PTdphULqcm8PzFzQ7hHZS78nuT84N81KHAwQm65HLrCmMEZUUqUKTkA9tzwhCfqJnPocMp8ywtRXci7xdu",
  "key35": "UWDxyMr5WVgcdFkKFzcybPYMEp9qw8WZGbuAt6YGagzdR16eN5CsTF1FRvD6NkkCacuzyC9CgT7PtjAHecJ3mdy",
  "key36": "5KvfijHcbALXGR8Dk2uuQUZcVCKWRdAeie7aNK8iNnNudEfZ5yuFf14LZe2EgNGqbMWmpQSsiVc2MyWVzJKiswVL",
  "key37": "49SkZQP8SvWWaHzVF75Znx7xY2449jqAKP85xdW6gNEZkbd2SQP3iwVa3UXH8uEpk8aXK8KEJXnxYwTiySxKtqxj",
  "key38": "dDRHGjqk1pMbJygNpcqhuB5vgpBKxdWps1Q2P2r4BsCizopbqWiWmBcTw5qKbAmMxnG7YXBFAhi3sGcnwVZmhdH"
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
