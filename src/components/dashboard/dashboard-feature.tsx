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
    "4X8y61CuR7abi9veKSmZYM44v8DCy7tLfZq2ocAhCj1c6Cmy6NA2EMS13anTYTFsBNvjfrDXitxvrnCxf8KvqyY3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bgtp6FBasLVUVZvh4c7TP93XH3EXa7XgFSMDzWrCTXxTFSxsohT4HZDpYJUdiECQbavdk1mqbxEeVVQAGk7sMXD",
  "key1": "4booo9nw4fCqHxitYPo7fnzbTaKf9T21PVyCsPeV6u2vdurTxFgqc3vmuPaX3LdwoBPtkvd2kXoQTmXVk1j6zULX",
  "key2": "2WGjD3DRzFoyaBBy61ms6SJ9Ri8ct11BXabBmFFcEB83Y1TzfkKAzdTPTdbEKFSPFPHMp3wX6LWecVyw7rhWBM6b",
  "key3": "5B5551k3McgshHQW6Kuwj7CrYi1VHPF58xnKKnz1axfnfPixgATNnPrGTvG4XU1deXaAeCwLQvQxsn5ZcQwU9qfg",
  "key4": "4hptLxMTfVcnPmjHPvy7xkbfq2FDgMwA53dmBgAzjsibdNNdmVtJfftAknEpDYvkac7BPNz2xuMEswc9Q8mbMB28",
  "key5": "2Mr14XoU4qCQetmP2uCi3ZZUzmPi79VDPDtEDdC8gJe3VjqPTyf4R3DYZ1xFbwfo5iZkj5GenAw4AB68WTCBqRzu",
  "key6": "4RinqGmLoCJfPGXsDdSaM4NvCuaHzRXL7QgEdtxckLGyQzobijTQdqxY8KeBM15adSPeHpYHRWFYqX6DAh7EjvK1",
  "key7": "2sHKkhXUwypVezmMtHD45aJyH7d59YVchBVYCwXgXZjFdSxQv4yXM9vd49MKati94kxSTYKedqWcBAi2fLKugx6f",
  "key8": "4QwmjiAhqNWuk4rLQ6SACMxvWPzk5Tb3wF2Zi5gc6yHAR8B8uAELkgAnRwB15xHrP1mJvo3jiKTXbb8FRYSQdkKW",
  "key9": "5jccLA7is4sfd5X1bJSeY6tXij5oFRcL1Y7spcLFd78zuRsrT6zqPH5rSFuXp8rBAGsjhnVfNnrQyEM6i9nWFRKX",
  "key10": "5iLuEWkemqpoCx4HshsbB6sR72b2KhNxQugT88JTaVEroGcUkfYTWDw89fErBUEwKj1WctJiKM4irx3hXHpyHnd2",
  "key11": "3jTdN6TUHadKdwrsrK27aemot94LZ5WdPNRxzsxwhgrZm2X8DM5iQdPn2Fu4JzzpqDJi7Egnnni7imq2MCChhq39",
  "key12": "4ctKvB9n2HGrneNWCG1BzrLNcwjrqczJNyoo8Q4iHsGqv3z726aQNy4mEcckkXnDDwrqXF82ccdfDCLuivDk1snv",
  "key13": "5TbTW6ide6F5Y6c9LAEnR6EyqsVUrEQrSnUQX5JBvbNdJH5W8H8gxky5kvMzV6VdSW9CgBLCaZWgfLGPazBXhfC8",
  "key14": "2ibF3GhDuVesB1CKPPTeD4c2qngTFfop5YJmJdRAwdb3ijro5egrERYenM4S3yGRkfFgVfRrxwTxvoBMoJFnsJGV",
  "key15": "2a61ZdsqopQeeZ3Ao5aJdCTuvbkZfwgmjwG9ykjk1QTK9uCzXFgSmkoxEU9w5VXaGiyuC6h6MsMeFxQREruZFFsQ",
  "key16": "ih7GsU4B2SKkjjUjCDKw6VmNQu7rwVW9Locrm5wB8rj7tUXt1LMkChbcRetP4zE7nRiPZCk7D9f8RYpaPrFoUrd",
  "key17": "49EDS2QWWRLM9zLjFNfV3mnJDuXy3DCPrDJQUz9DF7mjHhfsbm6GcpRHHnM5Z8aWAjSRPKfWjAB76vc7BKZ8rZc2",
  "key18": "4oERL5drfLPEJWim1tozTrKjDM8KD2zV5R6toLj6VStcG2Q1ecJuz4iSWvgvJpd3VY7rXZUomqY2aD1UtkzuG8iQ",
  "key19": "4GA4RLM3Pdfpv9DW9QiWdaKLQcyRrRPohng6mXwEbLEGA9hxeV3UCtZkGKK6Lr8AckFHFvSN5PoZCzwdvHhQAJVy",
  "key20": "57G5nhrdy5azjVAqLUPcQcmZASGo88G9dLeke3Yt5iYKYxqqFrKWPNwhpERu2sMdQ41APmJpmu6BfuuNqGQcHJYr",
  "key21": "2ePmNrhtfHmJ5oZMXYH7zE6U8xDEKHB6nYX9Tf3dxzhKVQQNKN73ScximehB1rGe5qDDVrffV5iHUF8HmSgxNbt1",
  "key22": "ckLtUCLKxnyCYfAwUGstHw9NiD1Ewgaybej3nhoL6pxSfj2dzXLH7pJNU6PFtwk4yfwwcWUHHksTzbBGcxvN1sG",
  "key23": "5hERQooxXLWN5pedbQ647AWUnn9FYKkucVYUUfpBMA8sa7u8AAyyqd9sDZmKSNt1MoQwiwQnR9eLCidjpXKFpdnr",
  "key24": "7WpeBaviTz2UbtW7eUuGwqLJ5kMPLjZcvKgAwFA6jViDeGsPinzcEBEovRwkKwbVbG4JCPj3BbjHNg12fsdPwaB",
  "key25": "4swRNgkzQKRx673MoNg2G1sVzZLNAgNHrfQu9dQqoEbY18P3xNshmFZnGNmQMQLuEjc445TmfVyeeujWQh9T7ahP",
  "key26": "44mKasP8ToB11mEGTPHnLdt8ahvHkuWV3ANqv3mfHCictnqLXAycen8wmNsnGVgki7TH9qu5i7JMPDcJ2uFVh5Rk",
  "key27": "4BsUuUhGGw5wEPvxPAWomtAGhn93Wa65bV4CbPxUaCzKjUp2BmQDT3KswhYRaWaDzg4Xg3b3kCeWebWiq1JgrEmR",
  "key28": "4tnwfhSFBtQTeugeXRtR2c5cNeAiswVUWJG6qHBEEy7UXfVMmtwge7wLerdqWnSzv2fnmvanFMMPAmJaFZDGfMKU",
  "key29": "3TD5i3wESukK3mNwwsCY4QTHm85EWXw2xwPSKa8293LUu1VNknKRNRJLCCJw478GnLsBuHQUGQfwMM6tJwv26c95",
  "key30": "5Rw5KD5TyF2tjyNheRkiPgisuFUe1yPjPQzde2wKgxTyRZzSERACUXx12bD97vADTHNsw4oaN6nvVfiKgV8aJi2E",
  "key31": "2nPPN9SFQuvq7ue3MqHC6Ta2LDEHogs34SHXP1F9JQ8EPArWiHEw9NSjgLjGTs4qk6dKBE3t2Qr9jLNrLFk5aHMp",
  "key32": "x9cP8RvQVh1vnuavEFJBssnz97JwUTwS4MkVhB9R6qd7cnF3QsGXRz7TqUnVKvWMAUKYwrx4zJmxKXnm2uN7ek5",
  "key33": "5KMF8x38xJMX5Qmrcf5UGC4kiw4E3Sh3v3wcKm6jGqKmpqLGKnDbqn5RqeyTzHX2qrqwhQsVpuG679CT2RjT4TJP",
  "key34": "5enNbfw3NYW66nbUuqdYiKDHnRu3mDo6p6GjvzAZFhvQcC6NKz9gGLRF36qZrHUXykkYdNSvG2nUvK6ze1iydi4x",
  "key35": "4T5DQvuDP9q4MMjAF1bwD8NbLvJDzGNDfpEzj7WJayxBZ25iuqaKQxJB7QzSPwVdkyq5YLQNSpPNQ9kv25c9cP9x",
  "key36": "4yfGHyUejNd7NV3ZULL7MqevvHNDzaiA8WhuF1KzX6u2ov5YmBCAd7c3387XGZPY3uWVMA3GxPArskhPTq1Hue1m",
  "key37": "Gw1Hm8ZYJWq97YPEDC1zuuYR7vCvdoxh1B3xDJkmCScTkviKzntFZxaoDjjbZwDAQGYczaRH9d6Bpv94R6GaaxC"
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
