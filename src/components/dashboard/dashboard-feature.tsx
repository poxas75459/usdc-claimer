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
    "WreYam5z7vckHtP8DomEQ5DXRXjzRjemWpSBjphcg2AarmvxeGJravFYLQ924kNyssNWDGWx8qV5bmer4vaxhNf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56DJNjjPdv3dStATpTW2NntrQ5ueeYhHPjZRwWYJMU2W8yoUsyCNQYDNxfD8PydoHyEhjwgqVrN5CsVJR2TmLKdF",
  "key1": "2Y3YKSxzBL43kuBkkpBrJR5mNPrCDWEaDwb9udPbJEL9zVECmAZerUwcegHx6pDhpWr69R3veQYzcod2cDejkuko",
  "key2": "52WDf5aGJpEWvYgtSu2bAhYYxfdGhgYM6mfFQNBiFh313TDCFph13x7eP9GzgumZxz87PwE1Z6qmVTUjUfH9jXY6",
  "key3": "5dqXphdUmVNFMCfq2HmzzKeiwi7W7o4zHFpxDFe4HTXQWjphhVmt21c17Fwd7onHgyZZY4GDsALVKQ9sdXV9ht9P",
  "key4": "3VtrpdGktWKDuBMTaVML24uBhDEiRK1qjWtsAmWodzahSXU1jzdew92PnkSizCpEWayURXqGdKA2WkGjXrCmeQhi",
  "key5": "mDLwiRYZPxpveNVhZycVrdCyDJk1k7PbNqYXrfK9RFNe21ebKRK1E2ExuKEFNZyCDhs5W9bT9nUFtGJ4vtMjwfq",
  "key6": "2coctaQvE57MCqX3eSKzWivCVtHT5sfFZ9mHGvShCZaqyVk8arZpMRWUp8VvTnqx9Z9y8p32m6ignUiRnhbB88KZ",
  "key7": "Ug9YutKG7xHKBP8e2MeXd1RJY2g4GwK4aQz1EzBPTpqMH9WfGZWzvscns1pcapcoycs6ukUvSg39fKMZq84aNSH",
  "key8": "9e4oz6r17X9m899iJgenx1e9XwGsRXKS2VHTTiCzatYuCGPTg9gpez7m4rPUVaW556SLUguiS1HZutTcYnUoYTp",
  "key9": "2yDXum3adK5HALPMyh1jrQpt5b7F47ZcxyfYW311xWTn2r1nP449NATuPaziwXsd67Hv2ZS9PHYbgrCHeRypBNZt",
  "key10": "4eKT2Q5dzuB3v5cpRQefoQfomy1dMiyqoisv2exGKyf6yK3q4QUjPaEFKXiAyKpaYFp1aobboMzoEmd9Ea78HQmo",
  "key11": "2Xeqo43Sx3sFbPRpYJx4cgguSD7nu6xFQhQnX9zVySdvtB38a5cMJQ8G4Grq3NAU5SSGy3bwwszoeS5ir5bXAWZY",
  "key12": "4Pv1LWGZianbCUgpF4FQvwGEqH2KcjuQurURJi8iozmibxFNdZtZdVbdaBZqaiPWtgsDPoRDw3A23yrbKe893uo",
  "key13": "3XqWjGgR8hbNzMVS42AuuHqX3NnAmzzV988gZSpNNCWRzcvo3gKfi6nqQEoQbx7ESZgWtHeKAtqRm3ydUy4WDGde",
  "key14": "4ZHBarsjswJhnry1f3GvBm7zqGw7CTLHrnj92M1P2KcWPLkpTWafNa1qsFpxyRWqk2JF1b8eRBdQJJkQoTxm6o7",
  "key15": "3cpBJMxAc9JKrMBfhBo6GLvyHvHaMTHSA9YnguSCfjX67pqpxmsDbAwTV9srNTaxjRd3sxDUWsk8kSDam2bqS6kJ",
  "key16": "4MyZeZ1qM1KWvATuf7ck8f7CJ9evheRij5JcivE3eBRQmmUsvraBwNAKGExNWN22wgqiDHAYGB89a64LtALt9he6",
  "key17": "55ZTcDGjQ2n5tCdHFQtBBkDLZWh5uHMUnBj5DoJLaXNvxDhedEWTPLsapvUKutDz8y5ChgT3Tw6sSsqvVVkjYeJN",
  "key18": "28pQLm9pgXzskSFrVUTNqSVYv4vVdmZG5vodunFHkaLjPFwWUaWQUsC2ARk9Ut4F7dLk78qcqGMuZbiqSPc5zijk",
  "key19": "4mSei6UWuLnijGKxvQtM7wSZgChJXyxXEyS48b7a2QLC7dWsKXGZzRBiKuFUCw73A1K8R7D83fX3TVGT1oYyVib7",
  "key20": "5XcYDpbctA8QdrL5ymJHrv5YGaHUr5xsdKKDFFBohQb4NKMMKsdxgktz1M3DCBUttZdPDybKSXr9NVDKXHE2H3Bq",
  "key21": "3QgkwBAENGZ647wWFwCZXcVBRPt68YdGyRYL3BkbBX5p4An4RuJbhux754ZmEr3PjDRzZpLUEZ4d2pyCWSonBHF8",
  "key22": "5G6J7E7tYMpLDzDNY1w4usAWr722WJZVZELpHMfgtGVuPqQZnUkpc1LfKCL1JeBv4QJcZ2WbsGRboP5TRdwYPSCb",
  "key23": "3PxCjPbq5aWEt3AoVKEaF2YLXphSjmubJqBpF6xhMqmWjBMYAsryyA5sVnN5cq7s25nDSWiFgadKwuLjcuYQZT7S",
  "key24": "55Za9bj5eML3pc84tEMW5eZyL2BMJ3d6ozYkzLjTobMPdjZXB9z2QuDmod66zBazPXMXbajB7WR3pxcn2N27iicC",
  "key25": "5MWX8zWT5Bgsopc7ejUiB5LX6rDD7AkCArkPM8a5odEcmhuMgjVrwzNkT5e71JePbG5UKVzNps19vyYtYXDRrVVj",
  "key26": "668PFTj7sN8MMJZueiZczCWnmmmYw78V4GLMVZxHoQpeua2VBiVsFFxcjBAFFRDaouAxvVj4eXmxmKHTRrnnpMrg",
  "key27": "Kp7xZjotaes98m2kXKHSstKVhiH4cLxLVmpejEoqBcs4B4EJKU81wU5T9SBdbaYrYLCaPntiv6fAqk44zeeyhCw",
  "key28": "kkusR6eBB9nULBLznddagiLCXZc1kBZfcqQBW86AeqTaydywVcfhWv47C4yfhfPZ16KYrPUMF38V17XCifWwHTa",
  "key29": "4D7wttXxvp71baUYniE6FVD4JPPcFQCiGMt2nddkHYXPxSuEGpUwsyP9FMGM8N8wY615YFNBKtkAcztgjxwuXVcJ",
  "key30": "2VRvKioV4s7eZcwvA13cdoJGRL78QWtouENoB9v6NwDhGaQu3GenTMwACKhvn97CsEbB1q9RtDMvmsveqX35iYgQ",
  "key31": "5sFqGtMrDcP3bfc16FYEE9htinpQgtFkshJQuz28CkLe7SJem1ndXRWQ2NWP14Q9VhDiCdAfj5TtarDvMVZFV5pT",
  "key32": "446WdbUKv9MnvKXDcN9jscxitSJ6R6yTUbATdioCFRnwufZw6tVUxv3oL18S3bPEmo8sepYNrxKs9wyX44WpjwZY",
  "key33": "52nT6gS5hTmL3fdBhNKC5q6xCuTmuviuhLcN6R8B9ecWN8GHBQpWCDzgpgvx3EvpN4fJDYWs5d3dKx2MpwyMK5c7",
  "key34": "3xjAjLzw1DF1z9U6FkRpo2zkBVGtTKJ4cesJ7urc9ZxgZFf9vnzGrpTzJVh4GZRm99bgQor65u5jQ2kh15KfoiqC",
  "key35": "5mnSAs8wThhpL4zN7LjGFsUFM2TmhbhLETV3RFHQACg1LPYXyJ7NkBH4UPAYNz5Qn7zQBQ5umwxeZu1GDfqaL9t8",
  "key36": "4BX7GuuQmVTZJM6FRu94C7ufQS1MB9aYNt1aSWzg322ypJ9rGSvBuL6dB7LKmgRJTxoJfFsRTCYT5tgaJXfYPPgV",
  "key37": "3svPngaFwuNsmKVBBs1MQWGYUKuupy35X86kPALXTP8QTFL67bxZZiaS1TuvLqRjEz7qMi4frK5Bg4mNzYh6Kykk"
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
