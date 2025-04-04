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
    "LWuCFfrMQU597ShTuJZgQBfoo5wy1jgiFfJFVRXomsSNqgTFMzpYXMRrPMgoRD7CaTQqUMjT84BUJCsJYFrgunw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "337KHQsQmq8pktLNmQM7B2BNddAmHp3AeNmtW9VQo68j6M2GVm2E6HBbUzAo9s9WFWUPRTVDn2nw99pyJQdSvJ3i",
  "key1": "54qEiM23iAXbmbUV8BjdgEbeWgSYSgSuNqP6GQC5p4LDzdHCRTD4Mm2uunbAqBxRZdpwWKpQvxzKX6M9ofNnPDm4",
  "key2": "52AaaLx7J8F7bjFrLfGzAPwtwdJkzN3rMGScCngt7EgftWD7Wu9XybBjEmtjGnrczxWrUaH2C7fgakr45cbb8VJB",
  "key3": "4qXapG2e4sGkpPSm39ucaiuA5pPQtkgDjzLQjV6hczPUPphhx1AD7Xfpcc5HNMb2aJduBHh2AgdixyEAwe73EexH",
  "key4": "2wfVMmLzScEMRqdLvWE4NisYhmCDo4vZdxqrNBgdEL6qxFMaUM9H8AJ1cTP9aVnMyoxAm8eExZjWSGuhxKaZPTHE",
  "key5": "tt4aenK3tkMV8d973nn3aiBpikDgsXzAqTyB3bpEtRDnruDs5jVkt7krMP1Teiciy8R4LxDdbs6kCYpt1BV4SrJ",
  "key6": "2FZbTknVgxUPbLd513nBqoxDxUWVXigosSJFNNom15Eh5BMuNgo3Vka7oeG4nxXAbgY2Jan3zCd2MyHTq3dJ6Y5j",
  "key7": "3d3DZyjf9LTnpCiH3kFsFyVyq1EiKBWcx3AfTPT3KgbU5KLf1pyrWWnZ6Fx9JNsXpZRbxsqoXaUomuLR8XRhdErh",
  "key8": "wkd4TNrj7p4BfXz8B3Bpbw8JA7P7DKgQXDpViBd4dTySHLThVxbqdC15CkDG2okKRC3ahBhs4FL1XShUMEpTx1s",
  "key9": "5oz1pLGGxtBwfNJgmBYPWuSxMazMzP2EvTw8YUCZ7AN1Q9DiMt3AjEaoC34EBQSi1eHJmxz4pkgxtCsPs7sGkUoj",
  "key10": "3KfzVSEtNepiKDdoG6goJrHeWdjPkejMr9wRbp5G9U3CeNGouMdKMNHADAUVjAgWc1V3A9a3YLv4AC9hv9uYsBGf",
  "key11": "iBTYziqb7NxDpey18ADP9FiZZCBnJSSM7CLwuEcjwj1fAqrCCyncrZtv1vGqj7aidc2rJCG7uKuy14ZedjCNFVR",
  "key12": "2s2xHQpdr8ccz3WTkT4U8zoqzgmP8Rf4mt62t9zEGYiMPEmpwbdmH4KXCpKJNmRzaEpaKJFrjpCimn7RBjb3ZBKD",
  "key13": "bHyPmrcMU4hypBLqgDgna1tmugXiWs2jDzyv8dT2WtgVBMAwbKRBEUKVbmWXGR8zeMgoN999aKy4fDRmSLucq13",
  "key14": "3xT5SCckhSsk3MV2cSmFxzruQW8L1s5Rz7WTSGDrhedcsd7dR4WDBSLv9ssiMwjQJD83z8HNf6vGzNTiSmsA4F7R",
  "key15": "5HkABA4VtSs1UNqkHLw4UhUmqSfDdmaewwknPqcDwkocmceq9fSASzLn6jYPvi6mSPRpELZhHLjX4fjQFcu86Yw7",
  "key16": "2x22mQ6Eyz49GAL9hHQcHKwNiQJuurJMgk4wrPwhFqdVxNSACe2QwBDKq9QYKXUEna5QWJKSi3YdJoCSzby6oYRn",
  "key17": "5X8MGaVwJgT6L2sR6HDaT6Byn1YxDAeXnJNnYoRyH8uy4sB3PdpsQgpKBxcEgAigR5GNLZHfuEtCVZY17PmG3GAQ",
  "key18": "2TBp3dfH7naueKdxD2od1PRYbAQDxEm14J7B62LiCykHDoyhxMfEwMZknjmYv9tWgcmeBe2tr8ZhYo9K3K8pLXiE",
  "key19": "phkPJVTs1FLBhccNGNDCMKK4NmRPHPvMMMsPV2aDzB5v2MnP2PgeXZB3kTrvRSXdjBqdD1qfxUuRxcdYLvqhi1n",
  "key20": "3xF75Afphz8cJWjdruJ91KVTXGjoehfrMj9Gsjzja1mDtbY7k76Z2woqjqNFRcE2ee1gUx9bXERBPUFNVndkqKYP",
  "key21": "2EHwkx3mpWDMd6Prtx3ZK53UD1qCUx6aA2WS6JqKZCbMTAoa7FCrhZBcEJbbSGyPAC2R2Zqu7WRKuRmrG8V9bkU4",
  "key22": "3PuhQ3Sj85LfLRvV8UYmiLV82wR7vf5zdfXso8MbbHXEPdvMwHBUghkXeWKNPbuFY2p6aBmNtteo2wpQMN2r7BeS",
  "key23": "38bk27VdYdV8gxZ6y2ewyJUBv6rse5qVB4jQeJK6hjXrJQF5JB1g1NSNJ5CpcvXYZLmSqApwJm3urUy1kyLczcDx",
  "key24": "2ekn8AkYCCVjqvqP8ykwWMEcqWeMgpwuv9tL7Jy9D3bFqvg9fZBtdDUXtymGrgYeXEGqPMsmpbZL9im4NDFbrszE",
  "key25": "3eTNYXSYE4hH8VEf2fp59wU4jsLW14EA1qNAgBU5KK8i2BRaJjCoLyb9KYFQiqpQpXnGCx41nDC5YB348ciZg43n",
  "key26": "CzuGqeDJpNk4jGZ5D1bdq6Rn2DJwaUiyEdXqc1y4gZXRYLRyDeGjT26vM2ttehRRH6cYWMH2W9Z8fTQYwZvBS67",
  "key27": "4GAraRJNnCMoUhFCxDCSGtj2LTaTvnLgcG8HYGTsEAubS2iAvwVLF6fJEWd67Jqb5gACywKHSisqAf9qX9V3NGKi"
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
