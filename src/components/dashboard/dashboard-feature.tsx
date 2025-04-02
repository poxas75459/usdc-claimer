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
    "UqcMUuaDZzzPvQn8wb35y5vtgg9QGzqtaX1GkoRzRj5AqyiLB12BND5cCYffTKif7RdqLJSEC8ciDRaVitCta7H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2suXNGEPdXhHVdvFdySrmutni9rvii3UkfgePzmnXqKM2G2p42Y6TWZaAY6CNdWPCvtBXoX3siWc7ZG7qc5AQBHc",
  "key1": "QR5NfMp5mSoaGHyPweAdYQrc7a2eBaCWGCQV5A3ZuZZjZJRk32jpb9raMvCSFSDQPb2b7bQzX43bitMzV7R9LYt",
  "key2": "5kE53z4Vt9juhhUyZBw3eZLVitzp2uimAVkSZHFCY4Cvin7nTe988daw3GbZCgah7js7GebTXH1awNCXJUCPjb6g",
  "key3": "3JuM4C5juZodmkLLDkj3asSb19RDgUXammfgqdvQKThGiTat3zYzdzAoDEXahnhy5Hm7iJgPg2VT4jhU7FsoZyeD",
  "key4": "29vvRJtYnwRsnvc64RPzL6Dbexi3hztnyhpiL6iFqtticnatwLQUG3CSGVytoDzHhWcLefdbizJWyZwspGprkv8B",
  "key5": "5EfyHheVVtdPrhG1KR3DNBB25dsAfMjSQoEEQFjZFiDJxKTNkGr9G2AsDXAiNsR3KY5o7DBsFLgs1e6ohWKsYfos",
  "key6": "G4vfaq81Zqj4L4SHs3MqaxXdLc7f6evNGUKzwkSLTiE7A55WhZAFXxyyq2NFhUMu7rMKeZDQTrXTj43mZs2dMEB",
  "key7": "YKTrWRCG8P9qq1ah2xUDGRVWxFNawYebiSc9X2ENxX8HWH6GZmncnJfL1TC3MT9AieouZ3RqERHEkXSrm1aAY6k",
  "key8": "FLwQuBVByCQrtpTLx4Jyj3ycVNxRgmF6doTPwX5axYkAAjThXYvYjb1yAMSxojKNraT1iZqV1b98L3F7u8Q37Ef",
  "key9": "5v8rAwqqsRk7S8BChfnXk5Gf4r6zz6D9qcxpYc6fvZHRRwaPzequo3XBo16Ad47nibq3tEQUSYU6ssiQwMghwsck",
  "key10": "WutXE7qFc7QRC1yoBNSBCw3N1nDUgVNdmGw6ptCKmesArCYMvszjBYGypCZsvwJ4utPWMs5wAjHmRuDkifpv4Tf",
  "key11": "2RqKxGg9vYS7pYRBhFypthfhhtxQA7JGGEUYU34bd9RZvpWwByE1H1jFEoansedTXbSgo4ivCEx4kPr7TeFJgPMa",
  "key12": "3HxJ6TRoSXsYMAayM6CspeQSVvjBbbsD2yvCJ3KVuxWF49FCgNpMF1nzAbNWHFiUV371BHCyqjeUyoKpfHoLARDf",
  "key13": "3TAMdPj8EaXP6fVu6o4WxDzjGucNwKbLow8nVNfLVhW55kbAajjN31Lhav46UfSLcPJwhQQgR8Jiqpz9orXn6KzZ",
  "key14": "5dpzY7PYYMZ8iS4sgXe1BbN5fKKsrzMevsozwCvmwkNUND9VvFhP4sySbTkpb61bdpG6aaPisJsdzpev6ePxuXCh",
  "key15": "4VDZWvBP5oouWTYpBkkSqCjeajT5Sa8Kva96xz8bhRD3FqvPRYLpL3L57D1G9vxqr5GrrS91bSkda8D6ruQtWD1K",
  "key16": "StX8zjsQ83YxAmYcdMEBdovA72J9ZiLbbFXoeetWhgxJjAZzo7bcUh4df5bSV1mSdNtwAJJC8Gk6afEBWAZpfkn",
  "key17": "5RzNbuUAQbpuzWZHKsVNDcteAAjSAVY3WtYDU6rj5YnzCZaezDinQzLnnW47sqDFa8Shdhf7diZzdceohuGznFZi",
  "key18": "29SNjqRJrawpzKJz42XXPEbcqwKVXhXsKuVz1x7JUjF8V3RTnnn4UuFr9DmsmALfHNFhvZjBNuXzjiq89HEyyuga",
  "key19": "3tRbeY3g332Vg71PNSpMJwWh5aL568AvYgusD6SM5VAQerADogPxdDSRinP2GDnFL5ihGJ7oTwTgjt2ohzw7CxnP",
  "key20": "DQBz9du6isD5e5fFKuvKbTkoHrxmfU262EtWieqmCEpRGj8nMwzTQXvmzQVwf2wCY9HfAx4EatmW23uyEZv8q3o",
  "key21": "asxaMv27TGbNAa1VqddeqhN9VeLebsto2s7UvDYkXe8BRT3Fz3nu6aSDn4dFBxq3LYJhAqGMepRziKKjeefeQAn",
  "key22": "52TBvfXi1HhEXryVN8iyg7PCMBuE5y5AYBz6jbeoebCim5JgDrTHLk3irWLmXA7itU9amqB2V5sbXHinQM6xaYxt",
  "key23": "PSGrcUA5eKdyW9q8XE6v7mGQsuPP8EJa33udN4kHS3nXv8pJFUnZreRDx9sqnHgeuedFDJGZWy79wfRgcu953Jp",
  "key24": "394XMTyasa7tdy3xXh3M7iHvrwf96ZsgCFFGnKzXPhB86H1CSYmLAXSfSNY3aiq9ffmCj7BWqLAVLJDtjfWksVH9",
  "key25": "2EkNDk4Pr8jVsJ2buYxFhVSMcEjF4ByiPLE5DjVVMgYM8VZ4P4HRhadU5V9gP8JvdEFhSk17XCcUanDJYnEHxuEm",
  "key26": "2CtYt1q4QcGXpmh6VEKrLV1HfhyDkPtrYRdrMHf8Xys5dUXe22U4esGL4CPEq9TA33iMtvZVJT53N9F4f9YLMrUb",
  "key27": "3eAcfUCw2Lz9g5MuEkHqn4ckw3rwkTCYUhFqZcQxJqjk7LJDUknpCBKgNmCy45rNb9R3XQC13GFGjfwFnc6sEv73",
  "key28": "4jqsLVPZ6PMKPBykZRw8qFXWf81dsQjPrsAMMPFmDcJi9KGpisiLiRiar3FbWDnTbwEDMnpqtSpZzWctwv4d1TT2"
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
