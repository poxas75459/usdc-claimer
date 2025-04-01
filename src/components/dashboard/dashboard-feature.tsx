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
    "4Qn1CNKKDHd7HMbSvcNEEx94ydTSeRBPnkiFjm6VV4NSctbrfPQ5t911nPeuEZs4iE19muuKYL6aTfdYacqVe8D9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BnAS7cgrrDCwF9BXkDH6uTXkh3TEXgCGmitqtnDeV45SXAxQCYy3peSdy5xF915QAJPizY9LunhGuhzgk1dtRnH",
  "key1": "3TjpMbioJcMuUu9B4LSCKtEJ2H9iLuAzWnfv7je44GxW26ZzGdKd234rWkkBT4Mi37yxcpBcKxPDwd6fZLxncqAK",
  "key2": "2Usr3hHuYpqvFsobLCrKpM7se8Xb19kn8i94mHx55ASXLURaKdA1YU4jEnNSpjESY9iipjj796c8VFMFfHMQghTP",
  "key3": "5oxuL7LUDwT7nPU2tFBucGfJu44oUvCQbo99UHgjsZknsvniLKRXwjju3FujgdFGrHzPpqf4S7CBXC52eoZAC7Yb",
  "key4": "4efWpcFNKYXa55tWuxVFGhWVwcThHcH77EibBmPNSoKHFY4nWtjRTh5dbDbV2BzkQQVqgfk3fLat8C2sfXcnphJy",
  "key5": "378xSMPDzug1sngSJrS76B7RU9R16XKMbXVzGrCb5CjpuPabZPC7u27XwuGpN5KLQdZAVmbcYnXW5XwgKfWoHpfG",
  "key6": "3Xj8cGSJEKpaTBhmEErPy5H8PtnLn49FrRLHXXfAH8anCjWsiqMsxPzCuPVGoyNabgrw8PbHMuZ7ZVLVdqyRwiqf",
  "key7": "3CktiZAQKdTwwYfpVFYyWmudk75VEC6aJ9LF3wHcSGLvQPTdk4DMAByBP2RgQK9oNP1BUUx6urdVyaqNn184dFbQ",
  "key8": "aSRSEcqYe7bTYTtF6kP1hEvaNgc498kzgmL7eXJT437fDiga4HXEdCMAZWgjEPsaa1TmpP2xcr4rmsuuyQKHmc9",
  "key9": "5MteRnrzZUzjbSZZLq9EA6ZuVBkkRijMVss7DgWQW8ecRB313bWVnQiGhox2BNQ7VdKUPYT62v7vXkY7kXUka7Y2",
  "key10": "32HYbB1Y6qDJuin2LpnBXeFoNoFU1FNDqLXesxAXQ2BSbPzoVx6449ogtNXLJzci712sjQhRMVbwSqvfEuTzozJx",
  "key11": "2ErhicMGeeRqhuZ6VcaE4WiqBAXGiTLf6weGZoTCeyNQxmAhW9xtmbFSBpHEUNnqLiR7yjuJyrKgPkiwCAh1r3sB",
  "key12": "5DLnYXD7LwacRYiqB1MMTLJh8tmahBsnFd6RUuuKMyWWdMnNQmzmmPgmsoRZR8T4g9ZBqTYE9CwVz4iTLTYe3kYp",
  "key13": "5Lf26fCYnoF7bP4qdfaMEG1BAJhvzMWYDKBKSeTjs8iD8Vg7zghs2185s3gSka4wU727E5kDR5Xo71Dx2ouaWQS",
  "key14": "5JPzLnGUGgAAF1Z3Nn1nFwF7jFU192dA5bLsGcoBZkhbt7beLUqnTtbstzqwY7JGf7MxJxuAVRSU2gNoMdQtPnim",
  "key15": "5sWTaB6ny1877XroHxyyUEqc5YRddypPkmf9vUJ4sLtyqMM6o2WNbvZQk6PKLhHd25eKa2XYXRsyYytXZdJcEb2a",
  "key16": "5FGsd1rPUniHN1CaTLRh51jAXrV3H2yCcWCvxb9oVCefF99b6fncAoW3zAha37k6kHuhiQwGhUpsGRzbT63W2FhN",
  "key17": "4Qpiyiy5s5CpRCMRv7twKQQrAHBDaLnCaE4HkfcqGDRbk17Lso2Yy6kz3wb4mTkFhGtYYpJPN5be14UTGsE8TqbF",
  "key18": "5eVMkd1JqFYLpCRHZAXD8RNjEqHf2q7f6rHUzd8ZsotSkT8Lti5aDFyBHGpt2gESPWBsEumo3nGyAb6FdCLsSLRQ",
  "key19": "21Kg6FgFBoS73ikTTM3hmdCJMVjQy2Zy1uPowceiVkd6Jc7Vhf2v5QUAgy3j5C1zTnPehvqbnDydCzKuTmnSrihn",
  "key20": "CB4EUywDRZ8M8b7mpBJYg2WZgtakNusUYKpAh1NnZo9mMj9n5hY4MfEkbKaSDn2EcqY4UEbJ5x5HzzScDNL9PRT",
  "key21": "4qQdJ5e7Ctpp9utiwMXjysSpF3L7CYAFoxnS6trTPtxHWTb2DgjWcWkwxDgu68TaUc4wh6AUEjbPbhhJ45cLuaba",
  "key22": "2kmac8jnYsvEaMxkbRFm6Zg3xUd9U5fg9sC6sbWjR189FpT4kdNah7xgnrBwkYWQc2AUA1xphU1wFNjyxv8z5xbt",
  "key23": "4MCGjK4bbFPWGxBv6TpUonwr5ThN2NzKETJNKxCnU1ktnNR9vx2299MBAKcWG2i6J9AZhBe7uLrmsAacCx2F4GVQ",
  "key24": "sQgiAzqLHcSiArdnWao1dycHFFacDW1R7z9K8GBu2xKi3m9hxKSxhTXBXiv3J9M74qa5MvAPzL37ieWKuAufFWc",
  "key25": "5ehYQYmUrkickMSqh46CDANLiy6hxrP5gruymUMoHSwzKtoJiAf14z7PeXZp4pUvao33s1apkLiJFo9wm9bmXoyQ",
  "key26": "37fuQHmTReeJBJsCz2YCuAXUd2Sg2mb6J38j4KCa5ADyDNa65PzozsbHwKVXgka4BFAFwNwVeafKw8rjfo9F15R2",
  "key27": "2bdyZ2ifvJ2Q75KoWN2Bvn1qArLqDwT4UgcTKb3V2SMYi8a6XyvbATnUACvRTXePkcZpFyBpHGEEwH9tBYHL7cam",
  "key28": "3Dkoe1L2vcVyP1f1ogwFvAtGCJYmEuXbW8GTK93t846GTGGBe8X9tPf1R6NVfs9pstEEX55e1uPwcgv5D1GMhK7S",
  "key29": "4XWdyhkh9zaANRtTCuQeYkNq8hN5oakDP9ziBmw8ThLr4dQWDJLnm6TcgLYEDpyw7a3K9Lebub82oT45xP1Y1DUE",
  "key30": "PhTYjSng3SqfD9KkvNE5pQASjwTmXvzcgvsC6hnUahKSY1gPZLXhHf4a6ERP1gEacai9k7HatngZ62r3HEeZhGd",
  "key31": "3PJPvq4irgDNU1b4JsAJZuydWUBG5YULF6UG6sWfGQ3sNTKwjsSveHWipLvhjGxYrwsVaqpBzgAKMwk4aiuFTsmN",
  "key32": "3jJz1YmrNHrYQyM6MZTWqdEoCafXz5U3msQYXrv9WmFSAyQEKbgXDmVT5Q1jnsviezNvqQKjdCuvpn47XGkLUZBK"
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
