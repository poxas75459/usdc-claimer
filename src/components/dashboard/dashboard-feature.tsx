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
    "5PQhBw7NY6dmyriHEf17RE394dADH8HyutaMxsrdVXzeysgnJFXDnJ2pV75eFwsNr6GEMzcQ6FLQHQyB3Kviy3TJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22v2Bprm1A5YVhWe6CEjVnuvnkiu9sAQ9JEfuh4B5D3V4yP2d3RJ5CntGBStPLuAshuBicY1SCn8K8WyJ8qoia86",
  "key1": "5V2Ky4GiXSqRgo3RBTHRMNsFFeg32EJbyXBSMkZw1zt9bayoaF53yUAM62sdfShiYZGgdBZ2oHuA6AowDLimNK2M",
  "key2": "3D5dTDFZJ2Ce7tsSZxbpZhqaXsE3MjufVxeA6giNf9ReQDTtyx7GKmBUkWkyqAaLBFtWYbaqheSgv6oZs5B3a8wu",
  "key3": "5uZzERQYN9G7AsmXp5rnHNa9rC3Aa5tNWsW1ghwdh3SvR3rGS7av1cJYJ3BKW6AmLkrMRUfuQkeHW67ZRrDFyFSD",
  "key4": "2WwRF8oSbCJaBFYw9oYFTgN9V79f3rDSPsQWGDhZJ9qnCExqkv8nWwEgW2d8QUUiTtMQxWQ63rNX2iUgyMTDdGqb",
  "key5": "QdLSBbJdt8vU96wNg7WogURvgSz3mWjobJGEeyZZGZfpdojssVm427Vnzn8Kg4QrzvrP4coMTE2oSEPQ7usGGWf",
  "key6": "4tT7ijzpQfbdMyP2FVpvU5jEmxaXpmNvXi7tPqMTxJatEqWnXbK8ZUe679MftcLgwVsGL9CQpUSrsvUrmvp8Fvqa",
  "key7": "2qNaG7JqFHs2Ki6vkk6EeFQpmkjFGjTJrzFb42vDYQAVDd81EQrDHRpc6PYEteGoUFakTrbPnSKjbYqUgBNWESQL",
  "key8": "4tavaS3EsaQ4BzJ4M19bVMpKQciTaRPnW6Wjdx3CGZRAZBNMLLMUawHLeEnhjRFiRRLDos3aDwBzYE5BRDyLFCEk",
  "key9": "54aBbmiCmkE9JteE57cARwYGpQmFbB6rKxUEvBNkx9WAG5ciwSbAUkJxnjpy4wuRyZdCrFvhoKmJsA2BJYgdfA7",
  "key10": "4PtpgtDDpbxphMciUhEGM6XD4ftbNhs4ZazHi9MVHzap6UACohkS5NkmgmxbhBTYyx3VuiYehGQWJxJ981wXhpiQ",
  "key11": "5Qg1mThFKv18RXvWTvKpgVU3ghoKystpQ96L1joAHjG16oenMZxY6Qo2agZY6iZoAF5wfvk61rXSE7fbKDpNL1Co",
  "key12": "2PnVn4pN9hu7EcEndrcRaSRMnhDFqwwukRsrTK5oGNgVQMtVGp7AJszC3koqJxxYde8V7EPFMrdv8brWiuLLFxRd",
  "key13": "125HKHgqQmCaBYdaF9R8sVUKxzM7fQw51Bg6esTade2vru5bmTfDMuZJ5KYpvrjkfoKwhQdVXgtjpgeGSbZ9nAGg",
  "key14": "5aP8CaCf8MTkzjSbauhGB898u2sHJf7nkgb47RfSzChLNZuMxyEwfWRBV8Sb7V8yy6XQKrrd6vGXVedExbKqpidw",
  "key15": "3ZK2CWjiCeh71FYebCdCR5nU7tB19WUu2esK4KMubrwuiDJFjzb5KNoz4CqAuorx4CjcL5MTLKuGN8KoBUhcnXG4",
  "key16": "3zgrrPax3dWNyuBdDAJpLkZKGjVk2Y9841wGvgsKU2PeJyGSizAAfeTbgjhGgvpXtkVvJktdJ5PmZk1Gx5QxReFx",
  "key17": "44Ze62uj18ayfdKHFhD1TSss3kzFLQaGmySy5Zg2jznYGvz6RMV9zMurTkNQyKi2WMedztBNc85vu3XDryPZmqnV",
  "key18": "o2aBQmiQTYJTbgCrFAf7FiBcVGgoDiMfSouzgQ5pbkTCrUwpnNe7gAxMvK2WJfqoft63bqSpbw6fUMW9i72NsJT",
  "key19": "3jaE6mJGNpDw5su4JgjarNWWYxwBgEUALVaxoHKm1ybwAU9UQZCqb7h2bbFJFXvrJnwXpmbufDf6QNYJpwfXPtcD",
  "key20": "3fkQLczNHdrTHiAHnSwHy48t5rPbsrUEWhnJevDjy5kvofJzWsZoZ8WjGa94YyHjo5uQaYdhUx3AedNzrzbmRVBE",
  "key21": "67rjjHpoW8vcHGrjod4R42pNuj3rw9i1wj3R5hJbx9XgCCqzNPQ3tqDKRXdyFUx3ugkr3ETkQGq5nwTEax1zjJN2",
  "key22": "34knypqraPbtkNAYs6DRDhCETQtDrZMmtnuuLptA6MUgG97q57P6RCPgXAdNGRNXeS11xn13dgWEq91d3bF9sbRw",
  "key23": "4zUFrRqpHzmjVkMV2qSDoc6qC3c5WgW6i37J5huipZhRgHymSMrAsQwsxiuzfci4j2sjSqSXVqVDRuvYXSh7AdB7",
  "key24": "3M9NbRGfZpVFrFvHr7EZ7Z9H76LqXjKD7yV9XLMATmkwbWQ2Fd3kHhjzHe59cH9m7o8LgKgwMnZyiGQqcsCc3kq2",
  "key25": "3QzvUYkN1bT7339momrN8wZdgw5PDRnEym7vx3CpL9pSGAw5z92z3CRqyEXBXHR9beBHdj2WK38ZaF6asFgLALKk",
  "key26": "4iBQGqwWfhxKyGELJ9TFYrD9AxFxZ5WmsWz7ZLG4CwpiE97Fx8Jtv36gnssriCXn3Akrhwhzk6BWbSomQt1u68Uy",
  "key27": "4emsFDZ4BC6TRQXVz4nYpjKhCnV3nofhaCrzTuzB3xpX7dLfobPbheCg9b1NhEW4BXeuPfXbGHZmHqLUqf7Dc8Z1",
  "key28": "3BSCPVBbS8pxfHgdw6WpPMRuCapvAP2Kw4xJyjCrZuHP6rkfQpcTPrEKqz6DMqqzY5cgcembTkSzhEWTY6VmxkUM",
  "key29": "Pe7cCWGoq2AAzdVoyonsF8sHCXErH4Jvi4jLA5UX68cuXDpweowoNJVn5AAcJwYuEEYAJfDySq6YPTV8m9CFj6V",
  "key30": "2eyzfohs9ApYvGfzrdbCYiKp93WvyTitMa7TiQxL5EYtihJQyfYxPPkdLFdYgP2masuUEekL1JX7uQ6CrKFjj2jf",
  "key31": "4Ps6EtsP6wVEMSkHShbbp7GjUSCxQFWB7s4GuzxREsysYCS434ZD1fsgZ6MgjAMSwu75zw8bCMyisRLYK9F7mNfH",
  "key32": "4RzoNGApyC1D94tWHmC3Yo3bATA1cJTcgDWqERcvEBrwcV82yjyJvE2gvpjQzUXAU6cNC4kQQDBDC1o1BKvmjFjs",
  "key33": "34y3XmxoaS9SS9YRU8AqCgferNyqdpM6dNgGovHWRmsu1WNHrzwjcL5W1SX3p549Y6V5e9fCR6NV3P7UYrPSHd34"
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
