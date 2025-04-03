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
    "3mWtVgTyUwNuBerZyYXBe8zDUTtnngX373NQzW9apCRJDyQ55DcjZDgStP7pDR9eNkzn8ohcNmpGjxaydjhCy752"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aTKaXd4Zk9DeTocDPodfe8jX7hJw6nyLutF46UwXLkhe6gkfz63gweCdgeKbxzZXmXhk9p6x1ZxPj4tSKuXYF6U",
  "key1": "2jRNbXJrnc4rWPJ9RbeFfEEFPAHUSPndF2PYSaQafVMdtoq4TAc1r4p1CPN2GFE6NSVw8VpQfPNwUDAtBq1oU6KS",
  "key2": "VhsLKrVVtTLhWDn2e8kVpFriKTiBQd5maPoDkjdtkoY6udL7qTSeheSJGj5jGEAGxDutiNQRkJXqu1EjZf8iU6z",
  "key3": "GQgYPDqCZYV8YgvQUj852trAcjhXoyvbHQzw5TcnE6m3nJ6es1fJPAauDEPZpQ19xiJAsVvvuYu3GxSRTYLiBG1",
  "key4": "tNQ3DKBEKJnDWMsu1PxsPpTUQXsGMp4M9ACSmAAVowDpizMmwuPR3jqexvYJDeARfSzpcc17n89gGhRMEzJo9Rq",
  "key5": "tfK9vfFJKaZSBDmYic6ecpvC5Jxk4kvUrxCL85xZp4onASEbKDenAy1AQn4uF8u9EFxwmoMScQdgiMg7L2UKvTL",
  "key6": "4uA1w2ne3jNmzfeGqRJ38EZS5R9MFw3YkzCbdRZSiNeiGHpk9ZXKRrD1ogWRxZnkWZKikEYRCtothW97WaqWiFQH",
  "key7": "3EiEJy7nLG2fgb1YrQLSzkaoiqqwys4WGBw6h2LfbnQHaL7fJVpF8pDwJZNhCqB1uJoFaXM3LpYGvpe4WzLM1kua",
  "key8": "5zuxQiTXYguPTGKGKwaJuY9XGvjHYmcAcDqYPu2YWzxCNNQ7chCE9TPkdQSkeGVuabWt9HrKoEjb2vzY3kPviYUo",
  "key9": "393cwVe8c9DPiT3FdDpScwXpzyZPkm9LKp6etgirpuDwkYmgXEA6tBzxiaCfmHwyHbWkRruof285Xek1WCmue5hb",
  "key10": "2dHDa3CzrLGSDJdL6FA8WaW5zzrnXZGVpBgaWtXGMe5wvSCCwxQVYxYNhLfpU5yeuVM1P6X5pECr5zEtKaSCBivi",
  "key11": "3euoCdcoRZcLDQbxq6EgayY1tDkfW74xcBFuW4f2Ymas5nBBBNvYgJJ21ZYXLJknf12x6kwLaVmCBNvLpSb9izu9",
  "key12": "4Q4C6gKjLnT33AwkekQeswoD5d6UyPJW5qBYSvCydwAqHqhpfQyuZJX3XBV4KQQZAXewG85UL1dAQnHXXHuYsBz2",
  "key13": "5iP2eKbWUjZKsH5aUHBznxQsyhB9uGxCAGVpkcLpjubim2UpHex31u9n6NBRjP4CiZJfZJ21RaAJZP2tqT1yJLx9",
  "key14": "5m8M3zbq9iDMm5Wau1DfsPWpuHEKqN6cfiRQJAtv8ANCHq8jJF1fhUqdLmt1icvr3xA4eck6HBZuUyYzJMFWsJXJ",
  "key15": "2R26qmP2B7vxVFmWJ7yqRKPAzR8Tut3tQ6pMvezj5o1TkPxM1KBTfAUGmEDdmgtvqGQitmayRyAnDcVGS3TA8rf5",
  "key16": "2UVnfPty7syaK717nMV89S8uFTYzdmsWEgdv6CiyEji9U7txT11ivx7t9cQXUhmaSLTKzuzeiPT2NhYMoSNkpAqH",
  "key17": "etm7t9ustrkWbQZWPxXiDv1Ac9KLuEdcC1Rssh2xhHG8W4tCitTPw8PMzJSgay19MUEdoFUmCPufg6UBhZ24JXg",
  "key18": "5ccS9RUY58JvWVhuhCy3SZBwffHFUtUPWVWNQiDSvNF2mqwTaxhDxCrod8ZaU6DGYnD4ag6Sy14zBuxxVAWpQsp9",
  "key19": "5TFjMTQkZCvqdeHNk53Wg2nrzX4w5L9PN5ZcefeawXbWxdEpWvGrFbHWFhUshoDCxWvADm1t4B211Aj1cohUG3B2",
  "key20": "DSPoP1SqtAicRgWa35aXQkY2yD77egSJTDMut2PPv7MwrtjjkxyoKqNQLyyepVrX9Tmc6V92JrqNrkXGfVH7fxa",
  "key21": "31nWdEqcTzmp3y8xMyyJmraTXusCFt4Jipx7c8u2DaJowxxwYGJSi8KvJ7PunjxDQU9qTo8LGFpy2MYqVGrcEDTf",
  "key22": "5ssUUZrCY6Zc4JyYCvHTVmeyq8TqYZgtxMeeV64FvPCVW9t8HuZoqtwnoAzJGx27rWtpjAAy2wAWQyceFJvZxke4",
  "key23": "4s3dZv3maxHPesnXUD9hyzCa5EEkK8z1Z89StiddD5REZxXaRbemzDTahuBnxDUdtXEAjz2QTep8xD2t2tY2qTCQ",
  "key24": "5Cftf6AJPh6cxhX2eJTbPH7ARiASUz7DWUFSYXbkcion6C7Wv4uoTBCn9oZxShGFzE1yFU9Rp4vnZcgJzU1XkaWW",
  "key25": "597qGmhXWpVJfyqkSgZfE11Ts5GYymfCeVBahNwz6wxZkbMHsbs7KJ1717vMAWynmK6EBPvBAmSWpuNBno2m3AGW",
  "key26": "4mhgo2jm1zGEVSyYXC5kYzexm8PdcF2VcLQ2BE6xkBhbXsFRiXGZR6Lb9jSjPqaf8RLDnhnRfdEpqwfGLAtnHnui"
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
