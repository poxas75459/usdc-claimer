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
    "2VBoCZkarU21Mg6CrRek7fC7q2z8RhL4xh74Yxxd47zyBGsKfnqNC1Ti9bqV9PR9W9Ho8LU8Y3eRiNFjzfwCHx4N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ByihV3XGshDF9QzqwP5Z2QtwksLu9GiHSMSCizAcArK7q69VrecWdhxRMRXgjShpMQ1n3o7oR9QdGsZDLc8h4AX",
  "key1": "5PA9dh2QE6nrPsM7QTQUHsXzN6eGuFKBPzUnQzvnWgqECfXvvTgGjvCoGEcJbgztSM1kLHXtkSrfAa7RdmDA38dA",
  "key2": "5bjuhkJ2ZvYJUpQntNETcwL3vgV4fU3j9BfzyhHf5qU4qPVpYRFpLbaA1Naps5tkPpPBcBMhXRc1DYek4Qdk9J42",
  "key3": "2FX87CBfpxYseKNDDPaZ6ti7BF8RkyjjnSxKYvYBLr78UaXaN7qu7Ft2qC66MkLG9yJCcr9fri6tDf1ZBSaPNtcV",
  "key4": "4kQsHgYhMNk3qZzVB6VJ4RxiAsWeKGxHpKBPQgHsokDg7BJfCKo4U9PkkrmFovJvqy68qZTCgNeN2C1Q6qwDPzSe",
  "key5": "3s6sdWqCbgQNmYoGomFgWB2o3t5xLAvhxXNfUm8MkyJFZd2STGR147PtiQRhz3TDK66wyJDj2zZct3YNTkJnwoXV",
  "key6": "5ZoMd7MkG5w7VPQc9mtGh8Nji6CCeW8CsaUH3HA3p2vP8NXu456ZNRGtdnZ9tJDBSwWbAjckns7buAUSt98AoGJN",
  "key7": "7sFmm6woyAxKARxVWMWmogijDLEwcUGLMhvX1bzk7YjirP469weKDQ3KTLomdw9hznPyPy71H4KhuL4gkz5Fmns",
  "key8": "3zuRefQU5FvUGSBLBiaTp4LPYPjgrSyjPRakR4frDwFoU3Xbp9Pgn4wE166eugDujMmYdcAmsJc3TG3YAxsxZuyA",
  "key9": "3NB4jLZX8spL1yFgDjJ2fLYzusDQQEJKWPqKbJ9vC8au8nkULW7m13MAnpgrpUD2YeVgGNaQcrugiWwSkotGRz44",
  "key10": "nbqkqA2CDWMn7BhASFnQrt9vgRg27iHHhAdLKZu56vHryhTZaXtXjrPYzsXme9xuawLSE7Cp2PDFXQfcwCTywXC",
  "key11": "3S4Ydzb9tXkgThNLRCkRg6NBE6ULVBG5idLXxbu4bAGUPCCVWNLaNdo2Qqsb9fro9rMWqdC8jyWRxGhuWrYwe2Bo",
  "key12": "3DoXqxJuSRJR1ygSp6N8BgYEzJgN7KhUkm1EinvGxXmFBtGkVy34uFg2PZiuoDezY5JrnhoAYgg91TXtrLzF1gbr",
  "key13": "49hMK5JJifo6bHQtXVrjaF8WjmqdpvkKJm1hY2wQFoPYCehk881PSMx3D1QtV8b16K3hvzVAmMwSXekg6yQGnN8o",
  "key14": "352pU4WbtPCyQFNS21wjd4bvVS5PXFBHyTeiuAjBWRxTcuErpPFDjJwJPXez2sX7LB143Sh4zXAHiWPSXst4xYCF",
  "key15": "4B9bXGX2abQ6umMECnixUUGk8BmhX6avR2zDFcE12YsKa2va4o5nTnaTf6LzRfhHg8ebexRxrGroehtcsuaeQ7Yg",
  "key16": "2D7p8xS1Sv9zKnxMjXCg5iEbBw7p4Vqo5yF4jYS29d1gwdjpfxxr7MNXC6H1zSEKUhCVErFRMBs5tRaNkQk6ENAs",
  "key17": "4BSau723bU7j25FgP2k8QDSYxgMZknejTpgQrqafxp8teCYbSc4BwvCsjQc2aXNJwiK5ppyCPazfEzv3BW32qrdH",
  "key18": "5NzzsTFNRZweRALWHzRGw7D2DpTVrou58RH7r7b1aXYYQihv4MqyDmWE74XJ8AgXVsteR46LGRW3TnqGxdL9NUWr",
  "key19": "5vSsBq8wRChMoDhZcafuYTmqCosGvqpUHa1gt7R7QqFuAwPZ36hJ9u4BbK2FVNuMLq5mg7sK26x13vzsgcntuDYo",
  "key20": "2dhzx5Mfgopbwo6adXw1eUSKeEGpB34WVTmpAFejvrFhs6nV1qFBfhwm7GP5XxyFjoznh9g3ErhwhqfaaT161wV",
  "key21": "4krRua3fGvAdUjwywBtDtXYwCSyzFn6Pqjw5QCUbsdYPgHnCscksZctcpQW2zeEuadddYKi2raDdtmLzMzmPKAZy",
  "key22": "4e8Eme7Z1xD3nfTWz4fK9YDT47fF5Hs7fnK1sBziUW6iP9isUjX79EBAS8dg5vGcUGE64MmZXKsBCJiecPMVRdSS",
  "key23": "4JCybfjcgbmyphpJeRMiG8FpCKDVH2nGa16djiREu818A8yv89FubH77ExNNj5c2P3qdnrBZbmM7LwxbAfH37miy",
  "key24": "254ezRVKzvMSzLKBY1jppFiAyhJK94VuMCaJ4XDSnCv9rK3Fh43smscMFvE7kMZDaQFzVkuasbHtzE9uSSLf2wxP",
  "key25": "2pzJVfF1GhQNzcuzu88bzKnwk5L23ob5K7pFbQ53dGKRsu2B8F1wkqDofR2vgRp7yUzZ33SE2PmX6m5uGt48heLU",
  "key26": "qxrHrBWpmC2NKVoaPvaArEqMYBfNbUfbBXJnfc4qre6ZSEUu6iC7xuVGWgq1ow7L2d6YB2rvVLaZ5aiYkchdt43",
  "key27": "3nV5qaXFH6ypFHbCeEuFMXqSdcQrVvQfbFc52W3ifSqUTgJwLo9yNWUw2fSPNoKLwfZQ32iXoEXySotYFANHXjDe",
  "key28": "5iC7tpk34gKpExjZY33WhYAnZtxAbRoxPjUYYhRipkMp16BV2HfAaCBN2YQhkGtFbDP3pGaKNYQFXtDGoopmfm9L",
  "key29": "2DCaMegUoaPb9nQR2QMjhYXYB5YidJ2dWYZPpAwHgegT894jP4ryjuCEQL1yZnefMpdAcJKsi6YaJCKxo39AUXES",
  "key30": "2GtHR9Z9L22MVBRLkWF4dvqy6xo9brn482eUfZ6C3D3gpcyGvBp1UWYgV8UT5vt2rC1oka8ZrjDRZh2GxW6UNC7Z"
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
