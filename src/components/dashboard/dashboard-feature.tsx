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
    "5oWYRDamBAjwKjH2vEWnCkTKYrzAnkuuF4omvMNEyZBiFjULzweeDRCqogyMPkujAudZ8huh8HJnPCuqCqP9iDUm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nqGizWcywid2wDV8zs3v8F37WtvWRNbDNTXL9BT2LYEWE2B8htnrAvjp1ogWRwtR5DXD8ST9cQ8YyxcHtwwQ3i5",
  "key1": "2yPLhdwUjRvYERWsk6v9XEqedRp5xWHGejkJHJbTacy4d5Hi4arYCrq9ZqMzKyYHvNuK4MW8x3ZD8AW8cAQ7Rydu",
  "key2": "3dy839ZPAJm2MdzF4JAcstAbyAuyikodkS4bbfDX8S3rxW8u3t9LT7EoMKwrSGBhPuH3QXfZN1ePEsQkBUpEWKFP",
  "key3": "3txkCAbSCDsFSm2hK77Ceb6JH36HLhxyUgVjdYs6Cy3Nu7cfwb3qWyj3DiHA76zWeXwgkUsac9QgKL6QCbR8xdGq",
  "key4": "61zX2HjzMBmWtujXhQ7tvXTDp3Eikte6yQqHJDEHweQzf5SZCD1fRdjiZbknjFU4RAjja1FUVCMHB3Y9xxkJKTqJ",
  "key5": "4zrqYDbD6PouEeuj45zPXAaLQFrkvzq9GjRBhussFbWbhFesFxsJ6nohS6CF5JT8oGeZ1brBKcWujqJuVbtk5H6f",
  "key6": "4u4ttuQiNjUgjLEhUEXpg11cnGMtdFC9MwaKDbekZpi6uTLePZ9DgDF1FWdueYEL6AJR2cDNXs66fyCfUtDAUiiF",
  "key7": "UBvQjYXDD2wji7EXH1HAxq5MZfvesJRSQvfw2mfYqvFjCJ6yR91U5rW775fSPTfWkxYFhxGQXHU6UokyZLzHzgu",
  "key8": "FCMqT5HMjYQRJ4bgRg5FFWHtAHyQEfprEFMms3NQYc6mqwBn5BvfXgJZavQPXpjP1Fc9gmS58S5GAPwH6NfCTee",
  "key9": "39z4atet8B8GRdovf589jgc8GBDrnz8SbMgQQj2zVH7UoLBBGLhqMsj2gUNVrMYsJ6Exh5MjQVP6QyBSpuYHgbzA",
  "key10": "3gxok7wT6EYaugLsUufZh31FSH93d14DrH7UwPMFftm4h7Nnd7XtZ6vhQQK5vNhUm2w9rK6mE1ruL2gEcggWPYnr",
  "key11": "ucFpLPPumYT8SutadWCuFUZdqpAy6vigqhBaaywsQBYWapq2X6SquzLeJkHFs2tf58Yr8ZjjfFQq8zwADkAznL6",
  "key12": "3yDYVaKSWvQxhrBjXbigDYbjwavw8Eab9megPRvV1NKZ6Nk9TA1jWvnLxBwX56y4ASgiT7zCM6wC4o9XpNMksrzH",
  "key13": "4SvnzEhCuhuviVKFZqsGZ91iiTUpPL42Ay72LhPttdGJotY2JQjNkBrGyxGA6HmGEu7dokPh7fS4PCGnSMZrHanN",
  "key14": "2dbateSqZ69HhB6ABSb7HmahrC5auBqZ55QWLCAHeeL8SYovqZ6Rh1CsCXxDcuBCcSgMF6HevvUMjZMGG7siWaJR",
  "key15": "3VjJNDoGiFDAhgUMGJpikuACbnW1NrWEuwk8Mbxx4TstJM6nwBewWGC3MBDY4EmQgf2HA2XsZkFAuBb7MBZ22aZe",
  "key16": "5zaVSiB5sKeuTyCHS7qGryobJc8g8oYuBaUpS7Y75Gd2z8XkyShAZ5jAJjR3Dn1KnmuJtaa7gz6noS7iUPRgA4dU",
  "key17": "2VKg7734ZAeNCXPEru7m6h7sKWtHZWCeXCBBiwq35subjDRh6GZjeuV3XfeZ6soNzJ1vtAUADrGh18jUWnsAM2Qq",
  "key18": "2Ft65wweyHFjHg1G6zP2ELvGu6cEe6yuWVUPhBcDd2KPQ9dPkYLsMGKC1XRvzr2FcMvSWW11Wh6B7gWrFKJehqTY",
  "key19": "Ar6CaetGM811i2zm2o4fTxmgu3aVkeftTwpfb8hrVGzh23QPEcjVssF2v32jeZnvh7em4emkjBqA3xSDYy48z41",
  "key20": "4J8jG475uZDUpjvecQtUEbvTwbiQDpap52kqcsP66SUJPAtd8s2i2To3jWocFxXSAG6YC5KTjTb8q5mkQksbTFmY",
  "key21": "4hXnCX2598NEAgVkQj6wyBcQ3c32RHXNEKnpmnsNaJgWqu4jr6XzCh1FghNrubeAhZGZBdXycx5anG79DGyjH5i1",
  "key22": "5PJ6obWbPcqbdJGmfrcCnT1UZcLRypm4rQKrwdoNQuq7iC5XDSL2AqPKeQkChisJiKMKMHCAamtE2bcqS7M14VS3",
  "key23": "3tkQVMFoaqCjbYR1pfz4uomXbnabLyM9wvniUnBMuwxDK5dPryzDcXbzqDn6YmEe5MdbCs5rakT6eSHELmH9p4GE",
  "key24": "542sazfEUtnSHX9v3KSMxGKSxaksQ4oLuG8EEGU4hrDAYtkm59QjtbXb351BRowWeYRvEva7RpknCfdCSBPRyQ8X",
  "key25": "2pTJPyfK3ojJ3xbB6Cq64yg72HSH7eyaLV7ETT6mdxUGseSSpbxwsoYb24HC9C6CCHZ7bd92Cr7Ai7Ues5BEng5B",
  "key26": "5Lmzc3gQRBay6zyiBrgFnsf6tp4FsPdTADfGBprhdYttpRKW9wR6Wo4wwmJuDDX6hJv7rxwqyckeNVyPvotU248Y",
  "key27": "fVUfMQ6M3t1A57ZnCXXKJbk63mWuhR3tHACjbZnYT5CJtcmMHNPJ7fWSMjBxNAJMxWh7QTkMDcwciJBt142vCvU"
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
