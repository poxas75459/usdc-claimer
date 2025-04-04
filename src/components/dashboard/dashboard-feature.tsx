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
    "2hqY2avuoUXetWL5p1Ax13svTqsTDbW6oaLHRgumWf1XsEHDciczuiE3K9teq6YdiABMnUqJocbPmQQBrp7sP9eV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zrBDT5Z7EGgqc7fF6YZRMEhc7fj4HmYuSi5WAWXBWoiCTFWAzGFHKwNDX1sEivZNUneHPRno1o9rhmfn86kVVf7",
  "key1": "jTz9Y18ugtwJLEf1cEVDQpHrp9Lmfh5miS1XFjWFdEW8kNuNGw9DcSjqRcc6awhU65p1usArdcGLD2fGeUKdeU4",
  "key2": "2KqgbxU6XSJ8aNfvtKn2v5UnkCXB7BZqHYSmFsPFFx21cjXmPfDygFEMCoy4VSFqD4751o8zvZZ162wbCrLWS2WS",
  "key3": "5dBNQnkVZjepb2Z11cGuxnM3YqZiND7PPonf6Cd92pWC9HAf36YuByMuE26SrFz7WN2nwLRuoEzBGek89mWGHUB1",
  "key4": "km7X61AVLQMwsjQRfgLtQ3ZAwHfgZcqoR69UcLiksxN9CHVXEzVLs8CN22qbX8CtU76nvTSpyKPbv1nTtaWvGvY",
  "key5": "6DkHXvVgNXadxRjLJcW84pm6BhEJtWk8MFBGGngD65HUy8okDGSGDGu4gdjLmqieF9G3kHznA2ua5ZDkJEEyf2a",
  "key6": "2GT5VNrSKUQU5wFe12RxAs7eEpKstqpZQ3rPyLCC9RqzXiGAc8UviK3LqwzDM8AbRsaVhkePVt56mSnLSPyCX4Jr",
  "key7": "cfUrWkNLD3WS8rQFmXz1Bw7bjADDXtVou3JqBnr8yTWm4h3fRQ3NYrpfTMGZuMtRPdi2D5o8kiG7YK6RF6ruPD4",
  "key8": "3Haqk2J8VYYVRjRiCQYRJvMkuXgvxXUa6QZMBrLLvUSbpXuMy12zFqjfD2uavYezcXmy8MmENqk3qsQRouxK3iks",
  "key9": "GVywsypv8uo1mcNMcZVqTkJ3r17Vzy5USVXiGzShcNHQJupa6F6e7hvWFRWEdCPtQi6pUu9moAUUGgZ9GJLjANV",
  "key10": "42zAPQQKL1B5z7LVYEQJyVpLPEKK7FoBrreiqGCNMbf3E7VpN8z3G9EU6Jei4SjS1WRhxN1znNgRt2XhWMMibpyK",
  "key11": "ip2R22gnuucy6V3kyC8AzJDyqgbjExyEEvCchz1pMpxp7FhYgcFWiXqTAuquZMyMMCuTuyZATye6hrpExdLvcrt",
  "key12": "5vjYSzkf1xfHdrxuS9kAVq2jNsguGf1KadPYBbKeBZ1SZWsprWgdxshXSGw8oiHXoQRCVffry77nN9r7pYkscgMM",
  "key13": "vaGqsoqhS5mzvvhJfGrRLYxAudXkQFTfb3GG5PpSyZrD7TTTZySxXXpRbipeVS19sRwHjDR2yJBFBcA1rixZHr3",
  "key14": "2pEU416E4setr2McW2jRBLqZFxEz83g67k69cRjBjVYTzhnsYR6TkeocW7Htrjx4Dezs8aniddA88WDF1PpAEhBq",
  "key15": "5VasrynyA8bwZvyprUdBFELwMppSmVwnrjtbZuzxNE5AXAnG7CPyrXJ8rxvstU4EBWPrRWAWq328wgPa9g6Rh5V8",
  "key16": "MYygUnRCeEegaGonw9ykM1TfY7WR6yeXGnSNug3yhaYskDtBm3KVwud3HLFRYMdmUPoDtTkLeERCX5a5gENuE65",
  "key17": "4CRW2FVo3vh2vbNc6HwzuvXnzSfRwQFRUe5ovsNrhoDGFCPTZxZh2vRUqnQ8EA5xVLaSttAWogjwegTtyvitAnTH",
  "key18": "32pMHHuRJus3Tie2i8WHHwpaXCGVVM6CS7W5SxmAm52vb5kXMp3zBZUhJyVdMJLrbfVsFoTXbfqToCn6kZ9B3R5A",
  "key19": "3dLGUEvfFtarg9sWStqZPGUPBnMxtqZRpsw8SevWsF4CAz42zYSX6kabmtYUgtNMWFQaU1URiPwKVVucuMv8dG45",
  "key20": "2xEnEnvE5U3Dd46pVNUBjk5CrwZiYVAvxbVS2VyGRhtymA5hmuXQKXzbi2U77jb9C5cjZwLqiFk6CsUARM9QCEs5",
  "key21": "27mcMZtFEi12YJNFfrVyXUNJEgnUPd4yvUXuHS5jbtBQWBiDVoPg2QrnF2NkU7JxdKAxachJkGATCCJa5Sjbu1Cj",
  "key22": "wJhiuSjwP89Enoz4HbF7sowtzhzwsZ4ZgpMMFaQiHtmDhYJVAvyZmJZokBxXnSAViLEvapkeujMZFr9hYam61wR",
  "key23": "41YkCU98cm6MKhfb2sVZYbSm3sfZmMVu94GFdKxfVtV5X5z1Vveg5kPQtrvoaHb1wqx1XjJy23hKgy8N8fBmzBEt",
  "key24": "2nsaSf8W5r4JHGyjKV1VDywkQ9X93z2GWDf7tNtZpp1RSqoAYA3vJobVyFL87PucsF2u3MKqbBmVVedznwtkPZRW",
  "key25": "Jd54zKAQPpwNQeeofLo7ifqbTL4LgvRZcf15Cr7CV5yRn48drc75j9LJCww4yvUnLXkkcd4n1B73bxUQCDuyPQj",
  "key26": "5Xxc9Qe4HfCsYuDR8imgMEWHEqaUJvT8RSc66MQDX2WkCUKQtZy49yroRSGGry355rFaVhXScSRz9NXRSM7i5pgJ",
  "key27": "3Z3iD5CaztH6MAoM7k4ZPWiRY5fBZJyw1sruaMKwNKkWyq2PeCWq9XFcM9C9vSKs5pSKBbc7nBoHwGU8Zenx9gB5",
  "key28": "5tjH9V2m3jKZ9MqhAZ2W9MNci44ZNAs2ffRFoC87e2WF7m39XpazkdnUAGUuYbzoNYQ9cFTrUHfMB6BHcduKoqCU",
  "key29": "5uWf9c7dnxz5gsmBVXdyvwn2bmj3BnVubxbZL9fwHmrqxTpcNy7YQ2z8NiCxbGPq87cTzU87YmDTTepcdS6zLmRg",
  "key30": "316am5u3PjZGoHmB7ip9abART3dqjanMsAMt6PtHE5y83pook7Tnq9FDJWktMUGAHQrx8LAA4HxvnB5vJbJT55Gw",
  "key31": "2FVLh7CEQexb3JG8ZAhgCq4Y4HWfzuYy4F6NPYCmLee2rRy6VYwRFg9QB4FtdXQszk7Fy7sz2euLPcAE3oPXzgs5",
  "key32": "2M3P8xAA2RM8KDU5ty9iYXCzkGj9ZCwGhwBTTfz34P9o3K5H2x9uayPqJWhdzgZXuzAtH9sZgkhqeNroCjkGHAtP",
  "key33": "3Qt8639AfuqRuehfoSaKdf7EnPqE8Ew2PsNDcyWYHgwxe7FckMTcV8cvz8wQHfYPLUDZBifYbrPhK5TnDehERPDk",
  "key34": "5oS9sUHmuEXqZFAEdbKgji9y3Rnyx55PqnpeHxXsmByfkszRUnjUpJvQY9nW6nRdSnEpxE64vqWWtg9ZaYBwVP7b",
  "key35": "kbidEALzPcdzXgLjKRJ6s32sVQWUgUu2fMmLzWRYHwCxUGghFTFn4bUMoyTzKMo8ZMX4p325ZdsCQk6791YBXGU",
  "key36": "5BgfNd4b2AMxS9rjkGGtaHS8psCQKWC4tTzms8E9rFhVh2e3qhrncDYsB2s4oNbWAfgEnrfEvuQdVxmqCQQmMnYT",
  "key37": "2KDahqRenTKpCJWzTGCNJrxn4ywZBSu3P2uUq12F9M2XRYfwNgtZnaBXh5yi35VKT8s16b6ABuSL3JKTA7j4b4g8",
  "key38": "34xbiRu9Mvm3owcKYsEg4pR6MNGexFXQ33Yf8WGefqsrXV51wWR4zT9p57FW9BpC5dBJKdcmmuJfFNMBuGHjezNk",
  "key39": "52VQt2Ldn78eTw435XDYHV9bXUqBB1EYJ33wWgRHBZm3og6gzjdm6jpGU4L5PQXZof5Sg33dNNjrJRmd8anwcBtG",
  "key40": "2GkQxNQXw3L2ot3SGkGYz6WhuAwhLVYSh35eXXH7bXQbjcepzBcCwHWBWxcDZRVncqp1bUDEJ7d79iVBcrupCKWo",
  "key41": "4eMLCXfsCTFmwytCFH4RefroarxjW5g3NSevgyyUc5gwDvZxfvRPdkd6KLS1Nbj5EUKmZdvNqi7P2Rn6n9y9LkHv",
  "key42": "5PJNaJw3fZGkVzrNLc2CFj7BVUXjKT76CpMi16xdj7bKeeSRKd26JT7n9USJkBNxZK37WxkYETLJEyFJ8afjP7Bf",
  "key43": "5sULLj52neS8gXygHFDNGLN3B1HG9TH6knfWHaggy2C6XeLja4rAxbLjQAURkXNHYVRkJAuobdfFvJKjRdVGiMAt"
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
