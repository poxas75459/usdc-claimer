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
    "4QkUqzxQ9P4mYddyVcZKREdYAdnUXFb5kFxAGuNw27Qd5ydJ5G9o1mireKaJuGEj6bwFDoPakb8kjHQ3y98hjrBB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32s3T6A5MGoAvHJz3Vr2i8cyBcQEXxUPad35wC6NafNEWCuX64x1GnyXJLpXaggDhvHG5idym686DesbcpQG5xi4",
  "key1": "5gqRSKoxwKCtc5oA4ia4hBXk2Rz3qye7WrwBZmtNnBCRbJNRAT7md4dmHiA18oaXL7fffxhGs5TXWpxnJKThs4zD",
  "key2": "33ixZPsbJ3iDTWFLTd8LUu21upAdbk1wXXQP7YSpRfqBaHWzfiH1YCdtUnaqz5Rv1eCLxMRcoqz1idFoF9hiusSv",
  "key3": "64UBNSMKab4m9agUe9AFs9Cz5hBPcXnuY14Kz2gHza6SFgY5zTcxXkCo41e77K7eS8pLRzCnzAmbRMFB7W2JPS16",
  "key4": "2Q1yFnHsTPjsngXQKpzxidiFkXCBSGe3jJvDMmFSCaAuvaLdWv1r1hmf69ZVGS2usnFshbtgNTn2FQcd6FAt55yD",
  "key5": "3K2maccD55SUCRmQbw1Vzghis1goXJRh6bVKt7eRh6QKksCDVVtLLTcFhRgaaLzyy2aTHSszWmbR3GzNa4KPAj4G",
  "key6": "5xJUCjsSpBUJqrEaUPUMQqJSvvzq9FAPp2fP2w5GrY8aZ7h4YrNxLY15zHdvNFyBS4QNery696RFSQzqdiwycrax",
  "key7": "ihNMNQHnSkKexPedSMwaRH3ZDYvD3m1FLe7jmTADt7idtQwJFyGjXupaLN6V3oY7fxPzac4VbAiKoCZG3PnkouG",
  "key8": "3DbM47WJSAJAJuvNHaPcWwZvkRRRcApZrAJ5FEdPXpihigVAT8NShaApJx3CGgNGT7Vzof8H71yatMofp7J1aDbg",
  "key9": "2GmtcQBGsdYMqsPe6z4zXpLeXr2wSrBYZZV9TWi6XwQpbeXwJWUNwk6s7hbwu9yBKqvPtAG8E1p3zvHGrJSvVFwN",
  "key10": "2ukWkKLNXTyLRrsa75xStEs8j8n2X6PsnhyAWkAzERspgi67iwZJfSMNMU33ZUXCyaMgLo9mMWrvkkTTnzHUcu1Q",
  "key11": "5j1zSiHAoeQkeFKCRvwk2FRJjbxykCL3huDEkjtUUBkdFPRGFqBktzyjj9V8txrz9syHJeAdrYR78z3zatUKtWGY",
  "key12": "4K8kVKSDWjY6H4jdoaWh8BCMHfa2rmuYKFuEAWQNgEAED31Y7DdGnnMFC1r8HyzENdcRypEmVDGKzpJbDGCLcBPC",
  "key13": "5KjD4w1joVK2qBRUDcDRP1fvRL4eHEL2yLrimfdE9aSdk5UQejpM26RpD8wZpgcCDSJMMpHFDQEycnCA4hsvaafe",
  "key14": "FGeTGGx45amcFhwUxrKTfyZS5A9pwAraTtTjyM3dQEeswjkpCMtDyBgsV5bdPRd1XHZwXjg79qycx2xNwMMuHbq",
  "key15": "2J84ZKppCeyQnekbJW33BBZidA2tdpwkMWFxcQPGPNWpoXEUT2Hvuu4u3zVA68shJ89xSvLqR2cyYMUuq8mtw3mu",
  "key16": "4Rdp8hXWwLTgdJcBVZz9M3qPbjvPrmfcCrZr1cfvbqtYx1uQiZ2eefYw5CceqZQqS58UURnkc2xSt7SY8Mjy4LJe",
  "key17": "3bPJiW7Lzcq3VDEmLoAVFXWEbE9f9wv4iLZT1BqHCVk435qEoHuH4Jd87deLhxyVRXFVxbZ6FGN3VDdS9GU6fWxD",
  "key18": "3ZbEDMp6JxHZT8bTcE8RHsSzsvoNisRaCDDuoHzkMYqPgcoQ9PSkfd2WaJg1zRZuVXmoMuU5KYvRjozUoEXz1TNw",
  "key19": "3S7BVJ5LLrjAzNFU2KJKPGRwFp9oo91hYcBd7imr93cuDeGb9guJN5SdWMByiFmFyeN3reHuZxsgcbmMJsJfbJ9a",
  "key20": "5NmWpwqqMYyW8gtfSuJqhMD6PXRUBYZQ2Nryb1tpHAHech96fPMNBfspvPrc2FzU1PWawFVtoqWHG5Q2UvvppGhj",
  "key21": "2Mx82ezzxkf9rWMDDpw4a8vgZsVPvqr9PMUTw8Dacf8outTK8HWmtiXnmeajGYU2RVXKekmmsVQpGT2aP3mRJEwZ",
  "key22": "4ryThs7vJum92qJEYKZdLhMXgwW1pqyLG2AXsyNtvY2d3ivejw6RZJNbGzmZAaTqAVjjSRyxES7FERowjeScYjqZ",
  "key23": "4AXMUVdkQ8aqzvHaCtvsMb6wbsr4x2fGdmU8M4FnJNmewk6aUcgBGvbTLu1HYmzpA8SiX8TLbhoLiF8NKApdYDtK",
  "key24": "5CPFEzpXwE8V5jEuFCSYJ1EZdF4RfnRZ6XDU9MXz3Ww7kuNvuEWNP2ed7D8pQP9wvqxir5WeWs4UFzzW4oQBbiLZ",
  "key25": "4JbwJtBmQsN2nX6VeiLjvrenWVZ8W8Y7jdJxkkT3QZu7amwru5Xy41mK2d3G9kPR2T9okzJyCqCsETFepLCLAop7",
  "key26": "3MYpW4x7D5TdZ1Xv8YLJXt29VZjtBuKnio6XVKF24R51CegNaKbUYfeGVb8SycuDM31XqhpwnaEYDX3xqij2Xu1z",
  "key27": "5CbjZW9iiMHhfG64FEPqMwixfxMEafs27RE1Wu225LL5upyEHDgDWKm4XgSLQehuAbVAg23sMcBmk2QDH2UoQTJz",
  "key28": "5epVbkQo6u4qGaiK7EPvnWnm6yQJFEsrFGjZHtEqcj3oD48GjPjmfKdtVKid4HHtzX15jgdwKubVF9pEjw5CYyA2",
  "key29": "MtAXJ4LzBJEUwAPyaQRrPBz9QfcKZ1F3V7xxuzDBot8412QYWHhUNzD4wzusaDjX9SXwR6LW19jPCsAAEdDZshr",
  "key30": "8xFvp9oD1DPgLV2XGZxqN5ri9S8y2JYjMLqQu1RyyvzqMdP296DY3xP1zCAt8f3ZS2y3mpnwzVu1HFgVfS9sXjH",
  "key31": "5dHGdFKNowb5Hs6tzugaiqGsVBTz64rTicW7uWSr69pL5jrRgCKLCRW5qVMds39UcnBUwXqoCYpEh7JoUcFe5sMW",
  "key32": "4wC44SgwAXV29ExgWg7muxrKgCR2QGjunAL3StwabrHMU38dRoeVqQcnsav1hZ1G6DvxbwcyRwwCw5KPThRSYdN7"
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
