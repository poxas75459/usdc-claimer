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
    "5AcaRHvjiCrUjRFVqTcYPWFhtQpRkSShKZYryKEkYJCDyCp3zQ7q11WJwEt1L5XFmQiboz8CbZRfg2EJ6CGfuiFe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QjiqY67KWhnLWqqiYq4qc2VWxdedqNrXfqLk3trcWS4FvwczGS59hzpW921vvnJkLb352qFVFBb78aHs8SQ3w7F",
  "key1": "2fVwsMxTKjV8r4Zp1CTv43RfDSy9o1pP7DNKReVnc2Cg9bugJtgU68nVd1QeN3M5M6LJKGdTKBKJS54puZUPPoj6",
  "key2": "5spCLaHBoi69PJkhCBNMZR784bhUiHZt22QEocDqBfnV5MWGpyeSJ4TQdEUn2HGYPm1hTmg4UKhrjWetSFRsiM9S",
  "key3": "gMwNRzoM4ELLkMohVi6V3fqqQHV4eciHCf7aE2RmvjgJrVEYvqN2QdkSUZVWxuyALWQpL6A53GTBtAa7TVjKAGy",
  "key4": "665A7yckztHKSP9GgU5Yqy66iVcUqPLZQ3mux87qFnc9jA2hXv4gyELwpurotewU5ZaztYMzK1nbLpBXhvc6wS9T",
  "key5": "tDy4Y4T2KfV3DSiyNdw6LDBYeqDEifme6Vx7gVS1AhTs1tPPgXcVoXDunj9xNynEgqk1QKhLHBWV1kH6syxSPti",
  "key6": "4paGGLihJjm7fHa8DbZrGJmLTi4Mi9nQB7WkKfcxDQP6s65wxebh6HiRWQntetcAhefNTQRXWq21jQY8Ty4V6WBC",
  "key7": "14qRdQDG3ryLSpxMdu5gbJtwkfXJGtH6s4xVhn8wfNSvo6qc73h8eLUzn3Asar3rv6iwy6MzpU9snTpZxnx4dHt",
  "key8": "4U8LohTk53ZTAP2MgunCnCurFC3LxwELoHzvNx7BW76hwo6M2T9YrkjCJusjVkmgsTLfVRFRoTnRnWGHV2TtF3As",
  "key9": "5oViVDERV5KhbxTKeL5EhbCuAmwyRVR2mpftqJ8AnXdVCwLvc2EQVkNC6ynT451Dg1tzRazobnLnTagmVJVsDk4b",
  "key10": "64DF51pyCNEJZc6M7ootWt2161xeKWBBigCbNnmssk66K6pV3J8iXP6ndQdF8E4NyZyQGRWwRnKXp8k8SRD1ygL3",
  "key11": "2rXdq7EeAjbJJAP8ANSXyvdLc7QLxSC5MU5TRh7V74XvQ9iwSgrq929PWQF6K3X17xmJUe3rdvkZMzN3UT8Ah994",
  "key12": "YvhUQsFtHGL4MRK3uYwpQaUrKzPtgdbcJSxLNve456o4pnXmJHQBxVLszJ9JLzxYNBbHGF6DzXBf6K1Ao7VZsoo",
  "key13": "2tSzPrRha4w8DPhBDzNMfejpC1GbhbnemjdUbLACkf9Nb8oPwsbAnRK8kiFURKKVFiDPgtJFEULjxfqpE923v34G",
  "key14": "4o4yztZAhwXrE98SeJn4nKDEB8Q6tCfvxsXnCkyrSPZLeXAcaCaJ1pHyhEmpyfHAm84B3xnC9RKTBxYYeX89CGKT",
  "key15": "5BXtSWviReVPcGixkmu7NXbR7qPjMY7uqFsAtE1ZqnPNi23yXP4DYg7WBFC38ur6EsFDqCtLb9vstuJynYVJubzs",
  "key16": "mH94KbwEzFrrhhFU1G9noF6aZip2MTsvVxR1aGcczTioHkncKVXaHJcJbeR3tzPwzKSnmwRcEAwKhXnmz1dCcR1",
  "key17": "3FzMdtuddZiYbtmTGqnBvNuKWqSNqbR3B2jHKjKa8BTtVEa4M7s5Dz6Heo2ws6iYhGN8Q1qsZZe1z2DJRsi6Es1q",
  "key18": "5M6R5dRdN1jynz9RJ8EKjPP6jc9LQBwpZMjVJhjGH7Zw8tzxo6ynvv4svPeuqLGn9ZL1Yd61htubYKyzARJPYTo7",
  "key19": "4YUkJPdAFspLhJRUxVhYwFUAD33d8pADFXsqwfUKDpXQw237HrBaZuFZgRtzqFsUU6pivXTcSgUmEWki6SaPCwrw",
  "key20": "5Tvh4qwQ3RGFUQsEdyYMP78CGongkiVkpn935rFssiF5BnUqvEu4tvoxi2N657VeMEDGDVoFTABuA9U7wLmSku5W",
  "key21": "55Uboc2itqVmdnhPfBLfMAfjy5yXQDXMZxhSujXRDscsEayYazAX3uKHiTXBanLnkRcfCUGoeJ5DNn1QAZ19PgPV",
  "key22": "4F8jk6KskskegrDkRHBWeU5tc9rWfN4Wf2TG7fLwLZavH75YUqbuB5HSncGrQokpo74yVXVf5EKxV9vVuHWuC37k",
  "key23": "4dLjwFSX7ewkZiDUoKbuoomvhWspTGGhbh8HYiftiPxCunnnw98Xpp6VCGBD7p6G2Ztp7CfMkxzy78RKUBBghoXb",
  "key24": "m3vmvkSSPHWRMc11wN4Z1ZtYWjsy8os31Gahf53VXbqcTfd2dCPjC3tNhip8A8hJYivFT7zB1oL1ckS7NzforoT",
  "key25": "qx7eAZcvZkndkjRMp336oikFMfTqZRPfyKjT9nCX9ziEiNXTgvoxe3etvAxsonU9DXgUXUFmHNxLPVYJXVepU6U",
  "key26": "k2UvdiNMcDhT4qF5aWzcMmHH1vUFiTcR4qLL7AZHjjJ2RXVE39AooGeSCU5n3CU1atJzg8UJaTbzKYiqkuSyVru",
  "key27": "5BDfwmoSwBNqMf465h5YHHktugR6Dx4Q8DXwP9aVtz74Dr698QR14Fn1KAHbbFWUzV9JPEv2akWZuBhfcxccxvwX",
  "key28": "Rqtr3jqXVushYGESx53Pxszy7tfT9sbd77RCNq5cFLb6oqyuSNbRWADra7hneGDifLjiekLAonPLTjhcT3Jmfkq",
  "key29": "2qA5eQ9GKfnQzGt1FEuzrHNSHUgQ352NC8BagXFQxnawXn6vZaBhiwgXcSctiCC9GtyKosUxXw9dqi5Mq5FK5BTH",
  "key30": "2kNrLJX1p4VeA2of7xNmJktoArSteCHHPRT7p2JQb15xx2Mmmwj7tkBwfWiwzw9eYS798PUbQt5odx2A2yVRDqPB",
  "key31": "67AfxvzL8Y51XQrdwwMQCRWbNmZXFpmtDXmsxZdBuLf18pm6QpoCs4PrHTVWhxXWqyhJbWsRNshxj8dJnDXDLZ1J",
  "key32": "2YmpDgTw2biqF5zfrpF65uYPe2e1KnJdAYThNrEqb2quFfFJYsXqoDFGsZw5n9AzGawjY9xcqqnEQHF7jXtqtQTy",
  "key33": "2V95vcpAGa99oaamv4n3JF31orWjDScsPRMDKYkeUCcXSkum4WKwgCGpkGBpZT817uBVUNcfobz3beaSzQsGCkva",
  "key34": "4Hv4ok9TbZbE7RmY3injSDTPfaQ8cphcV4F3FyPhGpKqdLet1RwTxH3R9SDGrfWcuZYJH7wnWh7yzHZCFDRNkPRS",
  "key35": "4GzCcKw89ZsSKL8X2s8rX6gtD71CEwMK3xXHGgi4dXcmh64kczz26FDm2zqikUK7HKpzUdhXPuWGe3st9FEJFC5g"
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
