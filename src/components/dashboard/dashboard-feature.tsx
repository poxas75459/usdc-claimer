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
    "3uZJsN7S6LSCWqudqgsnVQsdZsLPEHypFcqFpwjBWrWgz4UaZArijz1pMm6jUAbzSzzG7fTau2n1FDqHhCx16NqD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RShz1Hah4wqLsgsmJAgJZnwfq5AqW9VUyYZCLQHbcdKn9VbTvVAUCmSZi5xUxYwJ3gJZvpSjEyuQDM7JDjCSP27",
  "key1": "5ezQErwUVUzsA93Ken5JEq1Z96q9SzgXTUevB3jwhwZchXH5anPe2NuWURbcrAZjXEfB6pJiaPM9Kx4hWsBKq15D",
  "key2": "3dqUMGXeNrXfy2gND2xYBhwL3aHD6gYGs5HodjtVEFwpUNH7efUtDibNVdgyYjHjtcDGA2jAEXs585eUPQVXckLT",
  "key3": "5zVSydGF1dk3YM8VHTusS9NUHV9GghH6QrKrWGvAPQrnYxeerfgwr82qR9cJutHStQQdB6bGQy72L4H48X6if4kN",
  "key4": "58zMR9fmVMTUAimC7xi6RCxHpi2gStsbwhyDKnxpnDz8PaCxuM4eGBMjQMRMKT3ZSHmsc3jK3vYQzcWLBfdFnUDb",
  "key5": "4TFzd9dSMA7VBEhk3r6zkqXLRZHsoBUfkA35odyiyj74EiTSWGbJEHPpdyusqnKBxt6nre62416wriciDtKHgXNe",
  "key6": "UH26txPz2vjaDsvhvnGyu62kRDm5oNU5DC6c5G4653SrpEcsuDTAq56Ev5STomCpG8EvQ4URcgHUWdpeCcpjUme",
  "key7": "91EEk7EuHBXRzLKsoCgbG23ivTAVSN4xvD5TjeBrJMPDcGG4Wnpp71CB8UYEXakq6wqeVvXThFG4vySupUPZKCf",
  "key8": "5CT9ELSSPyXPTcWWpryXVVyGLCZZjVTFRaFbvpYEhQrvNdXpHXcMbrhyGTKiQHFBMLGLKH3KLzpjN7567qMEAWao",
  "key9": "4q8cArGcpDetfGdmDYwhLcqJfqFrh8faPqMoFqvEpT46Fgnf3zV1B3Y3YtCcywuYG4QUafu8QdzfTZrRuHRuwWqH",
  "key10": "5LfXpGQFM5VP9DL6UbvWwgtk3eWnEm2cR4SV1kKrBdFzNwcpkSP6HrAAGC3Weh2QrreHZU3oEnhTjUdYed7qDDUC",
  "key11": "HyGeRVJAckhEhv1EVQPyGWkNDdWKisRq1uZcWLVCSN4XXvC3CMDD8hZtFCapCX1rNyEnDxBccYdo3RRe4yBsQkX",
  "key12": "2VbqJ4M4wbVvz76N35ebWGjixn3wdNbbSdVSXfNRvVezVQy7ic77inBjWwAvrWEjstVe83qZhkgDCdxV8hwW66xZ",
  "key13": "3td3NpnhBdyvN4APMBrYMwaUGm5uYHuveT56is68vfQ4tfYKfKjvZ3DCUjxp2AfVGL3JogAMASjrHMZN7RJM7jMR",
  "key14": "3LFjZBcqXXrb7ZcvPXPT4wMWvyK34NH4APv2VsfFEnkRo8rdYXUBiHGSmfPTsqGfF3qWhh5ZcXDc8Eh9qLpzkhwc",
  "key15": "5K3uNRyha33oEVZQhw8t5e2yrUCVgANnYJQscqLE7PvcxHeBp24J7DsHsd3MujgRG7hF47CLkMiP7pyYxtgUk6hB",
  "key16": "2TYHA9Fmbbux7VCgYRVSaYfshfwUa9eedrdAZJuair6bCXJuNsD2Z2dq7XWNzJ7eb3XxKxwDpEvTNDdJdxUHj7Ez",
  "key17": "wsD3vERwyvWHNo7ebQ9vhMz61HYBezSj9hNAwynNGLjDHVmENxkSvtzVC1QUkX1sm95KddbT3odh12qf6P1oQSg",
  "key18": "37NQ1J743DEaAX4cE5YtduU6V43ab4i1pzCEvc92sBPD1R3wUudBWUSKtqic6knAMDi54UNokF1iSq9SuPgPXefx",
  "key19": "2XaSVScnkJjfE4F5KmXfUzFnbbw5qhC39NrLSd35qKUBTYSmNKpw3CedkLXX7ucdzVpsWYj8NmD2hrg5SNcg9wHA",
  "key20": "SDoUWYqu8ZFsSr7EPEdvc6fmzKpXXyusa9moB4MZmCBjhgRdsFmjtRXJ7Za4yphs2mN1ubfHZQing9ipSgucbfp",
  "key21": "MdEWzkiiZzstErW5MJK9rbFPdXHCAW8gbpAauJecNqQDEXduzXRr8e192qkhrVtqkZMS68Zv7J4kJVWFtY4RdQg",
  "key22": "4TPCdyix5ER64bZG5TntNhxoXhQQxWZUAXfE4mWTFLd5poHTg2dK3UHe4kmBP9pcr4Tu2YPA5H3f48MGFvg1GPoc",
  "key23": "4VzKp4yvBVCkiLRuVD39UN7KfQKoMWsFAgEBiy7KqNTAm7XoC5P79M4ojKsU2a4aa6aQfL5hNtuQY27csh6WAP7s",
  "key24": "5keZpetFgqjJ7c6FhYyX8nqb5gdmZsWaUS7KN4fKNSbfsuSHHW4mTsc1yAnb3h2ADhfFugv3wCwgcH7a6ALmVLxM",
  "key25": "3KhzCeuZ4e6nF3T8ADuX9B5B1pwq6E74ihDuzMx3Gxdq9P3jHCZR7we7CCQynf5wFYB11eQJ7zeepDbTmH583ee3",
  "key26": "3jysFxS3BqScX9qVpRj8revCS5TvamsuPBUxM5av4FMujmX9RkjB5nTFcdjKDFyacY6Y5SFTjDmzS4sctxJbbAm6",
  "key27": "5Nam7DvoiZVNWNcHxYJNN6RhizJEGcngYKxgLBRqMGduM7K1iym6uGUxTDP6wcZBw6HPzxzksMsG4UjuaaDTEps9",
  "key28": "cQ8kBCuduj9ytwBJefWuE2NmFTLymbMRCUMwvJLbcTHoFD9RBgLuc7KRkDY1sSvrnEYE1v34hB55kTkMsTVCHCW",
  "key29": "5MLN3TRAhkTVfXS1bDy8qLTBhdFfMrnJw8f6KFG3NZpP9mh8Y1ehjvzALmwGmKjZct6VVSJD1vAW1huuxTksYaPr",
  "key30": "2RgLYhFB3LKCZpjSX4a8pTndg2BZeKkUUFCt1fBwQ28WKKprkH7Ebm63o1g73yQGan9XgavmUzWi3VsLzrE81Tgr",
  "key31": "5NEc2TT2gA4NphXTToDPXVg56Wjsn6m9Zv2ANBJFc6sTQ5NkEaQgaTbWate99PEYAm7wBSAhPr1cxznjKHoW59jX"
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
