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
    "2j8qWjMJ8hC5HcHrBbwNVpzTQYdxzfKSj56boTqF51hQnnNm66yZHAUdScksYgAkvTKpQShpWA9AdmTQPDuPjGXq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2i2QeJ343M7uHjViYfFMuNcMzuE2z4yZ8vJGwtkaKbjYL2m1LXus3KyYZmdt3cMzr6DoWXPQLDnFoy3wQWAQ1TEj",
  "key1": "2x8eHfGiu8ATBgRqN1Zq1S7sxDzCRjbKT1Si3We67Qr6bT54GpiyXu3KnaacAjm6aFbZd2JuEJUgxfz2w8X9dK4E",
  "key2": "3UpHktXSmXvUSMx7tNhiYdVEkrmAdYN6goK6j8mhScM4csgrNUcPuccobhct1XTDsXHhdWh2yBTkMUxG9zWVg85A",
  "key3": "yKETYsN1oh6RRSUkZa6tEiZnwzzjo2FogNY6UcJUi91oaCZg5Nx3nT8sn1ZJKed21h1xp4UHrhvejSjpzGWGg8V",
  "key4": "5fQQi9FLPxdAm3qDjQ5cwgXRgDRmBW8mYyCi7BNMiMfmynNRu14qH3rq4iKaePiWMfkKYb8rjLD2GSDUCCLNC1Ug",
  "key5": "678bJVsY81cunbhXvK9YRkHuajohYeLubejNcp717DiH4dapFVqEZ1EJRVw1Ad79JDRzfdguVjGgEmyf55jxYTTQ",
  "key6": "4MH6yHtGgBPFgaKD5pYdJL97DQq6KXVw6Tqfcf8SnyFFcmfxfy1JLuBtK8ZAfEHzif2RMMB4yxTN661533Qfw8o8",
  "key7": "5XcR3QpBBrgJ2vNbTYqYAUowbxVAqh8ijkToAADbiGwi59G4NywaqzYDK3phQcCiJEc2sxErkLSKcgEmEjtYriaY",
  "key8": "KRQD5j7txFwpTNVsHW2URGfaivv5aNvJyR1KUuaCUtD8K67PidB81zanVH5LUwGZuKVCVmFoZ79yEBXYsi4jwUs",
  "key9": "3pspoVQKLHm18sWERtEVuAqcGL8gVpYhWVEVWGU7NZEY9GHyKuCPCA25sZRfGNGHBbBEVL6s76jvA4HEkbmnBUUC",
  "key10": "DGDLQFiBaQDBcWgoBzqigWALXfCCKUSsxypESroEqrWdLRVDxDDPr1DCid7CbEUTZoBEQzduM6RFVZmxgd2oUr4",
  "key11": "aHzZfp9FVyzPD2RXfmW4qzV4j4qbeBcL8oK2zcuy7BRd2HTKNTU7pe4QqRCfmY7QKSo4wT7qyZpZrruBnSBgNnS",
  "key12": "5Z6yn6PS5Z9MppLwz6awDahhtYmjnpHhb8tfdv8EM22fXoYSxfFMp1tQ4kHtn8LSXqJEvKB33YKAQC5c6LbWyhYN",
  "key13": "5AmP1h2J1AJ6NQ3VxpvjAMRASBjtKfjUd5Dakq925yTL4qfLa6y7wkH9cBqKDUqn5V8qD6LNuqdMf1e2nmTymgKw",
  "key14": "8BukkSXt77FxKkPZey4yx7nZ8bat5n1GDLmxQSA6CDDjQHGD1zE7nppah6D5FEovE3U6XW2H3qmRBFjVFKZ3mTm",
  "key15": "56dzFHK2QjEQauJV9DidbwiWPMR9TkYFvfdCPp2az9AWi3cQpCnNnRCajomLBnDkjq7EZiXutkwe14yuREV5apPc",
  "key16": "5exyPgF4R9kj8qcPgCzmmhCcerTfUa1YnFB5yJwd8UtbG3SE8mP57BdcseJCNopDkKUneSmTz8nTXS7YB6YNSLR7",
  "key17": "4Fy2HFSuLenHhTp1SKtFZRtvxaZqHQwFFUNkCHgM9xTbj69XKtfpxX75sWHnFwBtQDpnEzat4xL8yFWyx1ZqFESm",
  "key18": "2iwhux8by1k7pN1AZKUQgfdC4494MvR9q21xsh2XWX2LFwkKtRuaxMJ87gXcdc6uEvunUK2ZRCf6w3Hruci5fbfM",
  "key19": "3PYXQLhLpfgEabqmQ5vbF1L6EaaaaC65xoU1yaDP587aEgcUV2AEJUc9mYHps4FBZw6qgde9KB7n6RJPXmVpq71",
  "key20": "2QUpkC4Uvv5afxXL94dKmzuMo8iBHiyudUq3y4DgXsy5HeYKxhvRrrgnUGbB5AjEgXBVA4KfA8SuuLHoNTXggVdz",
  "key21": "3e6VkFUNtt84KrghkhZcdxcFcixV1mVKQeAivLCYMQ9eYzKZbxGQWKUtnHmZXwxWY3rBfd8VXBeCMJmBNkxfnMDV",
  "key22": "21j63Qu2chajrCJ6ZEjuerwB2j1dJPAYtHVUiZbj4mBexXGSEvnTDKKL3J6gRiiVWMhzKDsWbC7kRdXT8GsuFux3",
  "key23": "TuQfaVg33f8W234JY5ba6n25yvW8U7BHNSv7yC39MZ9f6q7oJqfBdWPxybqLQxTPHoVuLEZGiz8A9rZqp29Ypfm",
  "key24": "nzERKDtssLJLxRF5RtELTx8fvNoRmHdrHe3tRTL3YFAFFoQcbodKUUyf6F2sSmt4G9gPFWQQKCAsNoGbGxFLPdE",
  "key25": "MpRFXkTc5RWti4MrE5gBEao1ebX26dax33X5nvS4m1guzyy234H6HZqSXuu9EediUzyqZidGisYfUzjk4qYaHjP",
  "key26": "5co8VS4QR8fdbz7cmKTwJBGdwVQqBoEjpi1B63rahmjVjsDTbUuK32N6QzMFj8sqjZoiFpUyEiCUreYhcWY6Qxmb",
  "key27": "rKhYqxxcXbMaXVrMB53j6w4VQnjRjF7Z6oEsN7QMHEzSyxAYpk9vpW89C5tW2Zo3Km2v4Lk3kWSXN39EZjBNQD5",
  "key28": "3TdDRuQ79bACV4tfX84SQexAuyvxdvYx22YCRydvVnqKAnxUFKxwb8veABvoG2jVHEHjok7QEu4bXG7jb3A8X9yu",
  "key29": "atKb34PVmyyjj5g99vZybCgUszvY2obwxorwNBHuqLwSXkmz12KnaNxrq8DGrNS3n3Fojyghm3a41C1xRSCisAW",
  "key30": "333PHBF6WeASLVFY2FdHrV2PwztP5bBq77j4RhegwSMdZW8ckMM9JPdefGuxyYfDVS1TLUDeCGHeC34a9LUCAY8w",
  "key31": "GMGdtRVd18YwoQm2HSX1yonoCrpMUVBZP4ASM3h7mQwX6pR1jfwYTsxziLijXX8AR31mYNtGGoAgEiGQmpZg3os",
  "key32": "421jeHtYzd7h1989pWrryigMWcZEacwpAGM9NdVi87eFNXjCqKS2611iTzQoyq9tzcmpCevW47yDe3cpcQEjcyGV",
  "key33": "mnoqXMpTU4L4vYBfN1knDGSZPnYSsqEzxtAq5SMThkQrZFd5NCUQq557rv9bngikXzAZZyr68UHr73jVFAfKBPy",
  "key34": "62HEA5BxtLsFcN2DYz1ZrB2AU5B9g3myph3154hMwBWNzccYU7qRFkPEtiHgJaeRoNHFpMR9zo8BghsBfbNJmezY",
  "key35": "5s64bjEctA2umRr4KGS3GPATyx7mKkpWi6E2fbqPqqXoqRKoa1dqYSWV3ETXtDhfuakvXZa6TGXRtzNQanPeinA8",
  "key36": "dHjE4GifnchtPmvzfSn4YQ9Niy1xJHgZEKrZrq1aU6knwoJsNCyjGaY9RjiJ99vGjG6M8bJ6rksqonUXXchFCpJ",
  "key37": "32iaqQN3UudqnDyKfKNecwxfwpM3oUjjB6V3PeA6MD2AN5c4DZnos6VdKLUqpQz68qbGJdaSCaNtepu2FDaEtoNP",
  "key38": "35UTE6zR417uCV6m7CXFaMjt1GThCPGidqve3W6HGrVbhKCLZ3x8jDGr2sMbhDy6bgVVkgZoc3BPXLpQQgg41JDF",
  "key39": "2jcfxVkeXnbxWpX8VBEUBZednWJ5BjmVKCw9mM91LuymTzYgYHojBfYNYZED8VgLGpHuhnumh6CZniD3Bwb6eHiK",
  "key40": "2GT1nrRhzLBDikzstrkA87SdQhnAP5ar7nuX2pQvbztRwEHmFF57M5dKNG6HnkcoKAqfvBbYhVbTb75MDAXN8gFV"
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
