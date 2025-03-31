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
    "46NEZwaXAm4nUC8AEgyT6Hfdi8iyzKmem1JcEnP3cSufPN4oTLgpQCM17tEP5QmsRTQjguiySsipMdB5b5SxGZV5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2E5rWcveiP6oxptKzjiBorsGW4bwQQ3PwSWz4mf7ExN8jvhXNaysELLhcq6F9CyGvEbCwiJVJfoWt6nW3xGTZC8q",
  "key1": "2HaMXnm6dfCjSYZP2XUxEgDws8vsnGJ2iEHbShTy6HKpCzt891Luhun327vSGqnvjx23A2iBpSvYKv4ZcncZLL6L",
  "key2": "4wjajXMcxSyLU1utgdDV1hZFuxK6Dwfu6UgGBMqH3PQw5JB5ohmm2hfiZUsZo9gw3mo9d9RBtQZg32oRPsHKxpeF",
  "key3": "Rr4zwZb1LA1adptL7J2cTArGTc816c3jB2pJvmXG14AhH5kRHS7N1Ue8PBHcB8hWBFfa5a5cF9drf2C2J3mDjNY",
  "key4": "51G3xCsxsDP1oNBZDTdkxYxSnyscTASD1E1tPaXyrdEX8V3iuNAQR5H6VbXd84xxMTvQzK57mzGyPB6RMXy768qK",
  "key5": "2bYE1agaSCezDVQkzp9nA8PHw1QvRdTdRzFJreWmHmH58mjxbbCn2RSfKWWsZWdUwhcCwxb8YJT97M2qcnB98dLz",
  "key6": "3jfH4FbvVq9nnAWubwQfSNQfjhCv2Yfd7y3bmnmcJYMSoKsDhLCALwD5DgiJseCf1Ee9NyunVJh4T6Zy1aYSFY9d",
  "key7": "5xnhDkn4mWF3gTfUcP1P6MS5yukYiZ8EbHxhNSFR8ZgwuoSMwkhYef4EusFAW3WBQuE2cyW1DYcqvxU2gLWcagDm",
  "key8": "2QRRC2TZdwLqW66ronVZks2n46T6PRZxKb75zPviqqRZ5Rrxj4RijACeG1enzD8Giv2C3JUZRpVGoTNaAakTpPZ1",
  "key9": "uUDwxgB1pESn4QbtghHqPfba31LcDCUHwhaVuDaVYstEH6wBHj3oqibru4ZppNv43j8F8DsNu7GpQimeF3G8aEC",
  "key10": "PrkBhWKtrWTtsazWX1uFA2oHhXaPQgrtMan3MQj95hjrkVTQuCHXSfT56jP4BYKr6wetztsQNiopTzRvgy3gKKB",
  "key11": "4eShCNVsXdTwzjbHFAq8fsiF9dDLpcttAcWz29mviQYKRdw6C9JvjH81cL4dcg94NYDVEetNFnLAG5zo69wd5ioD",
  "key12": "4ufzwfUMd65TVCvZzQeLDL8KeTkEhmQzTWbSFNAJcc2hikVskTw951yKeP9WqB3yJ2jXk1XUTCFbG7LBXiNH2bSy",
  "key13": "u1ELFw62M1QjXsea4j1DRw4Q7kuAqzTFXET3iciHbj7g4pbeLq4Yr1DXbq9soNammN3qSmBMzSiXkua9TyfGKp7",
  "key14": "2L3TfGgfYRs9RffJU6svRNYYhopdXDFrt4McAABBPjcuNXw6BsPCXAFkDwW4Eo4gPK1pGFgeW95JC7rTGM5rA19o",
  "key15": "NT1gnACtEoE5jtpUpJeYTsTLgCc3e11avMyEqfSqKRQUdYkPCTBaX4NXK6iMVp7rXyFTTCUSaCjjJS8csjd6Nm2",
  "key16": "5qjm1xXUL4gGXa7j3e7L9AvLqizyDxFzBjJv3e7J9xsPBTmXcER8fWi2khugMDsJRQN5vf6rwWWxY8CYkmq3Z8uS",
  "key17": "5bfCoNDz6LyJXxdQyEyp3Q7Ym4hyiCaC4K6D9MTkVur8CKgheGgDnLW1b8JP3UkcGW8i16EyNbJZbX48paJgrgBd",
  "key18": "4AsziyhUQGBGqtYWw1qUjrfoAeXwxrwhKkVxtm3z5TumL4kMsZ6V3XcuCXCNYayvLFWfWiao3EJjBd66tbYdtZKT",
  "key19": "iENJxre7VdwpqBghfb9Yxe74HaCqB3ex3T8D45b7MksAiCy52druEkwxhqwhAaHyKrzmcnnNATV5rfemqLpWvYe",
  "key20": "5SZRRLXcwtFJuwcUV3sTQ1BmU7JQ9yQriTY2Za1WPWhVcyGF8FYfvgxZ21CQLoHzXViBUiak1wBHwKbHxjJRsB7P",
  "key21": "5rKsfuiN87WKGxUKmBkrRbBisyhAQZzZ8rHFE93FuMkKpbppqTyUgEy8gu7WZRExje4Tthcj3oJVh4FhCZkJRLum",
  "key22": "5rrxAazx9sUmKb36bKv8xoeJ8GkwuUfxuhoBw7pHV5huH2RvcJZnjGTgTk14sbGawcpQZoCQ4dxiQWCoVXryQC1z",
  "key23": "vNYat1KMk5ZPXFkreQ4UXP5D5zECE9Tp4365EL3oZnYVS84qHahvEQ1tKnr3XfDaYW7f3SbXHcTJ1YoEgaUpezm",
  "key24": "9uuxqGcrf7WXspXaiLDdcg4d15yU1ghWKi8D4WU7y3EM6cgNphg58J1KNn761gjStn1Rx9msAzsPuT5Rg6x8U4t",
  "key25": "rjoipXnatNMTUBFgdDoBSCsh8N6uEjLnNwgh5e1155df6uEvVHyxTPadwo8kvuy9VBcqs74sorZa5Mi4HMegXKn",
  "key26": "25kCSauftCgGKAokrfodSSRHeH53k6wNFF8zYmbcttH32KgUxxdD3TmTEizt7XhsNW7KgxqvkJEdVpEgHrvGejih",
  "key27": "2DwqCw1SzyetrFvkrT7shMKz8sKzMqvR6J52ck2H9EPHgDdSupHxu88YWhdB9offNZHXwHRndH4eR4KkiVvyWn57",
  "key28": "3thEkFHmU1rLVHjiLghziDceQsHKVstv6hFeBvBjufCqkL8yJVFgtuFa1YwUWzCZjjAm9aZ5pEEztNz1ca7moHVB",
  "key29": "2jsUYLF9NdbgQ42bf73hhdquGFV1Ng6avX5njLnFLr5tJk5Xfuyt4CykWBTCf2gQoS2g3R1EM8cDSTHfS7DZeqKa",
  "key30": "3v4mZbvgs6sKUDbzTkVR9nai6n1zUvhjBMbb9DtMWT8cjHnyCsep6aDz11Mgyovx7tRrQZ2kRZNFH8G5QgE5jmuG",
  "key31": "5W8uT9QXf9Ltmb7RFRFoFQNt2jgz2MHcLMA7oVZ2ueVPwjjes5vrVdZ1KJHFfJkoBRUofryj6iLN1C2duhfuuqEX",
  "key32": "3CDSvCirQ9tgocCxW2vcBAUfELa4LLQpQB6fVizcZKdUBcN8A5zQpgV1o5XZKcTxj2fTb91KBJHfHXcW13qX2xDf",
  "key33": "5KAuDDgf3h4GtKWDF5h938ti4kjNdJNDADB3wU3rEJXK9HfrvaQ3GBKS4LPymvWsQ65uNrgiCLpPabrfY53JjVBn",
  "key34": "4kf9Deztkyi1otkcPZL3q5q5RVvVZjWd6RSDCAz8BmgG9EFxUjMyeV9vHXDqSNMXtJXwYVk3VTB9veE2NuDHASGt",
  "key35": "QPqwjwrDc2fajX9Av4djSxaL8DJh9CRjqykoATKERPHK8AzApggSnZ3AzhncpPK13emk3ur86UCpN4acLETtJRg",
  "key36": "4PaHLNcDP9s1Ffeo13yQwDXbGGtnw1hFhpBggTZxGxMB7Fkrz3drZJTwjKvEVR2aUBpHdbhgEo6n4q7yTunpvJUX",
  "key37": "4kvvBdz6DMzYQv1Udv1hKyRhYk9SLYMfDQWT5PW64ikLFL6NjftafJqSiq3bCCWVTLuMVoQBrNVoKKFETC8cASQD",
  "key38": "yFdWuXLRVCULi6jQzMQ5wYFzLR3e5CZz7QTbxDaVEXysfEmVQem7MJtEvF2Ms5oJo5H3nTLYukWmCeSSAUSd5hP",
  "key39": "4XSNqv8WNkrPXNQSfRZWff4RhTQh731BNzviSCdyHfQeyii1y92M3eJTWhy4nLLGdQSsF7Qtz5vwrv6E3Umzbtj1",
  "key40": "22JjTv3jYirqVWXsKiqS3vtDZN62mVS7JmH6nb7HW2dhJRgmWgcBCtVvUoQ28YGFxBSjBxyAXNGSAig7jWYQDQcY",
  "key41": "3uX9YPH9TGj9FQET98e1m1XS7jeUFum16XqnhqDedjJ9deCtev8p4uGgN6gkzDLtTsoTKEsMEw3P4kwiHPExiPhk",
  "key42": "bmwVVKY268Vrsamb5PxC5Ee7eV6L74bY468KZA5qx2MKsoLzC4Tv8yT41NAafjhSEJoVKa4jLeCXFkxNmihUrSh"
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
