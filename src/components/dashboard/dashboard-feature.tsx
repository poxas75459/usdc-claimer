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
    "2oH9JWAeh98UqKxKJAXS3CJMB133mCoZ7bKs51Q7N1cCD7iasMHGK2VFLWSBj2XWAw8tYCfCt3JhJQYFqnMpgApT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fkS1qnuMrn7wUEi9WbxKcoHwprKJd5JEmJToU3xrdsbhcLwhGZQZR8DeRSivoR5UUpTFeSPMEXAJtnEBpc2Fcy3",
  "key1": "44ddNS3Wf3EFh1tXTP5N6ijoVMzni3LCFrdadRUqFcgoGNnLBk7Wt7EPBGUGorXEhqCFFL674aVmamY7vdn3xVK1",
  "key2": "5Y58DsaQwNThUv9X5aVt5DgKQEMy5kX39i1PmC5DZBKyWxqdFYPVFG4HvgBSrqYsq9uJZspyETHTDhYeF7sQc5f8",
  "key3": "5W67rTVmYJGS7Y5E2MfYRvFL6HL9foF83fG4eo2gC8R42eMq2DioQaJ3N61xhwxca6RXg16MsW6rUppXTVpK1DFT",
  "key4": "2ufmsYMckgfUGyvjzVeWuhzUC3ymxU5oSWYLjAQuKSeibm2nv5sr4pFycymAYzniet5JQ5ajc2roU1jNrDnTP5oP",
  "key5": "5J24c8SDn6LiMLyLLSKhhusgHD119fvF6M131sUkNJAEUvpyGnJeBFQRi4S8xhYVjxkbN1GmYNqvDat421SKhfYU",
  "key6": "5cs7uxbg3bEmE4XTLHEUdfBEsdMtDid2KwPfKBQph4sg6z8LBsX7XuLMS7a4GY9JfGpHxJVLeHDDSHveMd4bcRak",
  "key7": "3u9NzpyixJQcK6YqK9CWNW6PKLiFJnvJu6jAw3CKxgDyDnQh6V5u6CYWentawiFeaBuP5HNzgBkzH5jYfZM8BmSR",
  "key8": "wU3FKAPe4aoCekqUjDHHWVCy1LX9XuN2UraEjDH73VwFs8Rf7gihb8hQ4hhkkFqwSftfqtSrBmvwah8Lr4xeNfE",
  "key9": "2o8n318pgMu6QWTkXGueE7jVZFLP1x1L7LBdFssbSzKTghUC2PHfRmyBi77W4zzEXr2tKg8F44kDhHhKwankrv7F",
  "key10": "2pULbrGkKwV3wBvEodXimyge6TChAMK2ecALtER12R6nvoiMd8PXoRBBSYF4P6jZAzMG5De1FEcUVmXYjv8Y8hAj",
  "key11": "2pVc7sSn7Z1YabMT8tu9NCJ8NAukDbEfqqNH9Pis7763bGSHGPxvhtCTfwt4whFJXqBHbdajkV7yhD8wNnTmD8gi",
  "key12": "5N5go9trJ31gtpQ2Vqd7CfY8p6BK1hRGCXgM5PutXi4svF9jJPLxsmYgn1zJ7EHD8V7HyrR55pEPmSo1QTd814UP",
  "key13": "4UgoFjFQErDvFXLfKpyjB2Heq5USRjAFgn5gr5Su3HEVEFUVn5JrK2eAWLBCL1uwT3FEgrUMtTdSBBJomMepSdjz",
  "key14": "3wYh5hWigxkRtf3UqL2a9SnrSG9WRknivosVgKDnpwRXDeThVRMeNQ3wvasSevmQGwk9QBHf1iyPyvZD5KnetNuH",
  "key15": "4Rpo6ibT2QqVfFkLACiSrooQxSai7sSPDJPQemRPiwdMbMuwJcmCx4uDvHmg63amijAokXXcc2s6hrUNRhY4YoyS",
  "key16": "2woDH53TMnE3Anf7NvD1kfdRPaPdSzAD8eBd6KQnAF4Lvit8vMECraJJNRy9KxmsMNPyEYaKzmKA5f56eiYD5phF",
  "key17": "yXmxnMNU4QwFUnKdgb8aUt6dj9tWbdG1Pxb5TKu35vCiDXE9Vgrvx46BLgA8fCeJmT6CkSySu92AZSBhT2FgmAG",
  "key18": "5XaWtyQywrXwWUXGzBJRDkgqgdtC877vnT4WLZXva1zNoryDd6JFcQnwuG7wH2ZrC5i8Va3VDtHDG8m9gn9WNog6",
  "key19": "5VLo3SKMmjiAUaAHFkL4Q6zkfJsiad4ip1Juv8vbXGcZbndjhZtJw8ucri7sUC5DyZgp6v5CjKM2AE4kKuPgDzFV",
  "key20": "Yt9XeCcLGV6qfCw6Dr3GqFzz8CcsjXLsKYqTbsqFV4WQuZ74pCGwWQsCeNHvBbDXCsGhM6YwHXF4vP87nuDjEGt",
  "key21": "24xqTStgPM8Frzmj3VG3AMVL7c4pmyqu8yGSUT9MP9GWmdUTd1wxLXE8uyNkyMRbLdeUw5aEmAgr29dyiaVbaiDy",
  "key22": "5VDh1hQU83UUJFevYZvBNA4iZL7UEvDkiA4cNbVofDWBFiG8sKqAUPALHYFoQPk7vgQpRXzNk6XFLx63ZjGNX775",
  "key23": "4kZKGvHnukjeaVjTfuWCkM6iRDy25fZLNumkVyYq4ezfZCkpMmqsWLAYyBFikoG4GqwGXSwTagx4Z7pF1ipxr6Ls",
  "key24": "54apPZokLz5sQkgxfQpFW7FhbtyxfeXJaRt7aaVUzThtYHjFdq8UPCw5Ma63eKXhjrKoFNMhJBwfcC6B3tD23phm",
  "key25": "2X6Fyfy2EZy7TJt6g2u39VMrNkmN9hMYzEd68z6ao1bGDtpy6aSGAu7GL5USWk1VeiYQZVAJD3HHx6vL8YxXRMLv",
  "key26": "3uoR8Rv7tZs7dyE4nwsWgMD32bXrM4o3Y4bdzf3W7GJxBtARyzEpt6McYbWZ4Fm6TNuNfvmzaWH87YbH4bExsKSa",
  "key27": "5riTk1g1qwhdNtDPhHJqU7BcshAEL3EuhFqx1UV69bDSzJ8n8nFCSuNKuYvXMVCfLxfqKGeXnzHvo8kG9KFE5cyN",
  "key28": "SYadTpYjUxBhbyJaJaHasFi7cjfmt8BboaairhYKAy113sEQYPtXJPjrhSp1EBJcXkdtcr3jZ2hyQ2oAA6JbU6x",
  "key29": "G4oqjPfJzSTwTr5cYfBQPJ2jsZbr7waKgGPg3bJUx9P4WMxKoX3qYhwXrR23MPHySipdZTBEBSxPemUxaZ5VVJc",
  "key30": "2vtjMUcGpKhRB7ZqqWMXeMzwUGHeiqaGS7HnCrY2AH7oHDd6gQcJ596Jhc3EyqVuZ2rSbxHidLZ8W8qhK5v2FWcs",
  "key31": "Uh2oykpmNrPpi6kVcasauyZ63spY7eiaaHrkGdxkNHS1vZigJW7WWb6diwhpQLTksJgRTqBvQ3wH7vX891R3mzL",
  "key32": "5LPzP8BJBx4tX6RqP46oCQ5finuG3rwY4domJFvpCRsVpL71r6ug28u9EC5i439DspRCSotvcQjHFdA6aMmPRUcr",
  "key33": "wF849ysFxhFEJwAwn7DMTWgurBFeozZHXXJteAV1exucd3qq128xrw7byEYxfysMDduy7xWEwUzK8G7aep1d5bc",
  "key34": "2Tvpxz55XMzvyqkrpKApDgXte9d7zp9byUUFN89ChXEDhyssH4KCYpjCzsoEMJrTX2ccXnezXeVW1dSeCPTQ925a",
  "key35": "6M72xSqNyiKs75tPvmxeBoaFYz3UDrppBYJJu9vQCKuQbep9SJAEFXeKNunS8Zc591gmrXqsE1ZtXsVymVsKQkf",
  "key36": "4zK7kUKyQgEgC3yRToRUpQLh1M7yASg5RMrWnKVPi2AcdWmNB2xHupiK5GBrzETroHVp6XqmWTni8TDqyVbrcxLa"
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
