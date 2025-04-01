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
    "2W4SCfXd3WuU3NWBpyN3DR63zHoJiioT7Q8HFfjTsQw6r27D6H1L5AU9ibC6eyVAFKQGQbGDuSJ2cK3tDR1ZQWTr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zPcwUbT9zqYXRhLuB55xemEsMmQbbryRouqG6Gz4r2GqpayFYxznohV5GzgnMCdbwUN9RDicVR6aY5no7UyUBgR",
  "key1": "3MtwKRAojPGV1kpy6uch2DaHusSTZrnjiUdTZPTbqL5w31UMmtuiG1nCk4FhLwS37ro2td3SACVFuEfrDVi1R5pb",
  "key2": "Ntnvu8a2mNTB3FUd6wrTMTU7DLeFaRrEmBvYCK5ZK6RWXdUiKMEQYE9iqP2SR2b2Huo4SR97WqaSgs5mt67xdJ9",
  "key3": "3rgGdGx2AJeSBt2RkHdLD6arsPtindFvLgQ4qrPCdPpPSWi1WGwNrrxN9SWwyGsJdTErHRZp34A85dxoub3asR61",
  "key4": "5bRciyyMieryiyrMhcMwJMpaCVkZghn89yVxk4KHpWTdyDrBPEvDkgqtk9PzDtK2LwiQrEvdBp2nB9q6rnuQkEpp",
  "key5": "3zA9AkPoGGKduMUomjWixtAvN7nx9HKGQzD8DxHTryX8vKK4yZgEpyqSvYaQ2xkZzurG6NgDWxUvedFBFjm3gAtM",
  "key6": "5XDhyvLhiHi9xSSSeYbqyLNbiL99YmMTrvTVR57W8f5u3DNC44wrqLeLSMDw9PtEfZEX9kULq6RibnWmXCR1NC3U",
  "key7": "2Gh8YJPjCWCbbZ9zaZ6cDMW5Svb8KYFz1HBBedc6LJe6L7k5P8LcXRGWuKjjyEkzHz8SPBbDDaebyxNc232ygqJa",
  "key8": "4nEzGJBqJxvpALiPAFoc2R3r2Z1PJVeti2YJ7FrV1qmXS4GGdC8mtzRR91CXNpz8Bge2rLER42dpp3yyH7kJweH5",
  "key9": "4iGrrhnJfKZFKafbdCN3r1n124yLgJL6dpQDAEybKh5Qg8JYB3fcm1GVJ5X3FD9aGDps8b4vXA6kiqHXyBTgWKcu",
  "key10": "4eQAXtRTy7VvyzvHezT2RJfqMopYLi18XgSr1cVavDjy7QAGT6CE3y1zB1S7kCPgeNVQQznBDmPBfPbFHQJVRViX",
  "key11": "KeRefHU9RY2PVMRFDRpDFQSgEjrwepErWr3YkCkq4yBh1CHbFnJrHPoF1265zLPXurH7Fix1jFTnbj88fn14Mss",
  "key12": "AJcmfVeFKzacLQWjmX8CL3TF1JGnVNzZu79Q4EWpdb3g2FqTRvcQZBCUokny81emJ1GPBH4bFtq6vG5j4dt9jey",
  "key13": "4f7tTYC3HkKaPFxDqoxpCVZ3rbN58p6VtPN7zwSqnagRkX3cxwq6zrbCPvMvh2qox9SEtR73Tu9UNWMjZeAJBwBE",
  "key14": "4sTuYYTooApyJ3d3hG8vX2aTjG7EFf59pKbdzJVXkAwNDxWZArB8Qe9zf6vkdiiExbzD6HiBMukz6G8fxn9WHG6H",
  "key15": "2KMQ11CwwdoMM25YTVVSsa4gYMLpVjtQR36sw8orikm2gBBTRwrLhhVQr67GRkXLS6hay49iHjrM684VBntsbyFF",
  "key16": "2Q3PHjqDuGH6DuWKVJ8ysjF39iNhaNqaWVqt3Lgk2o6yXxcjet9qF6kT2e32xoFw3unnt4jNAajZTTV8FrzWGnnL",
  "key17": "5bt1W7D8W6XUtjbdvY51jqgHLFCsvHTsa9L4VXUCPJCBJEfYPmqHdyk9RMjjz3rEWQdSHMegwB1MDtjbpMmm69Xn",
  "key18": "64aVQVYvkCn18cFH3G1ix1uNw5Rjpct3ZhEUNztffoyfKUV1fGnYpn51kVjgVLRPARsWMt6Y96F5WMCi7BtnXPeo",
  "key19": "2e5rNyC42puSUMFXDrctubfMw5Enw8wjWbkdukzdMf1b3tdtJD5JziwetsuZPJhJ1V7TuAcA8SRUmuhUVWcwhwkc",
  "key20": "22in4kGqS8P2xgV5XgUMECFAps5TqoemGucVMNb97h7rue5rTKVG632WcwX5rR5rh9heGGkUQL4YqU8ettWKE22W",
  "key21": "4uQH4JB5xU4kfU8c1pLZHHH5GNzcphktz36ZAX2PewUqPjNrySBZ5yhYQVY7qcbtWFLvFhyTrndzcbd5V4k2o8Wk",
  "key22": "P9ePTsHBszt4Lex286eaUdwJEDRkYJv2xrmPDzsBz4Gn6Yiyc1LCq2VN8KHLwoZNsXmvXZcMZza4o5Tk2uqjnLo",
  "key23": "ZtPR3xk9nnvyF1j59KUXEEsGmmoNEHtNrRByknv1og45bQKKbh6L4QgZpHa8KRfmyi67STuY5cYtLrGSbPJLJeb",
  "key24": "kWLQARN5F4gfPUkfaYNbgEXkw4mvHCCLXGri3kvqLquy7NHWEuiZ8zHkyeuwSKZaXYiJb1iy7PtR2nLyi71G5Hm",
  "key25": "5iDQ9S9Gau2qESE3nAdDnnNsgMGAojcrR4UwLKg1aNNr1JGyVGRpF873rTLuAbXPR3uNTcSsvWczwzcAXX61x2W1",
  "key26": "3b7mHBRH1Lz23uE6Zq186VHMqJXWHPEEauoLcL8Acng4Mfh9SC4Y7ZUSXuDS5tXZGhvp7u7oidzepKzYAHjg2AsD",
  "key27": "3UKesuV2F6UE1eLWRUwqT5reywTmQgo4wkJGHccn6dVkvMgucNJeAhGY3diY8VTqU9VU3kpSbYbiNNc8Yjctf2MW",
  "key28": "2kRk5PNSuAYLkzmoKDKD4eSjwqLLH6v5DCXs8xKerqRfvJnec36MwPZiG9b6AYfHdhzwb59ZfWfjfc9QD8kqHBwA",
  "key29": "3D1592UkDvwNPkfnJReGU8me9R4yBDPQdLj3CMsa8nj5kMUB2Bmmgf1QpHNwd7z8NLVEQL4yBJo2J9KHGNfydnpy",
  "key30": "2pTQaaCmFcrHaNVDgLxFLtiFZ8DPTc71Uruo4CtRghSJY1hsPgPZV3tMo5oBh25dW3sbnDiYvPjU1eVbYhDWfjgw",
  "key31": "uw6SZT8K4P6hwv2AudQz2GDzNXLuZCVwf6mg8M1moZbNBL9PLDEjFHQvWsBgfrFenEzvPzrTs2JaYMMQcdXeGsd",
  "key32": "5maK6xhDkAvMzfNtYhp3Dp1eupBYeK6vHh7tqXX7Hjj4RgFYR29VLkvdEPh9RC3eNGLkLrYNEz6JYfX1RQp28j9Z"
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
