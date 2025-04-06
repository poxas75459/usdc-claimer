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
    "2T67ehxMi3CAcR8QgPFRhHAeVuYKVpxDLkVnCdeBTAmKZjqujAzSNeSLn7auZ8i7W1yadcYyn1knSPTBwdoUeF8x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PHkv3a1mzLV8UHLmhPUjh7dwzH5WcA6hn58MGVChSrJmjX3VZdJEhKGH6yvGGuY7tZoBUrRnnnLb5VUkpUBTBSF",
  "key1": "kTdgzTYUWvVTNa8si1cz8vBm3uT5LWrYsP1DVCoTtqXQcjuomNtaVnZJsX78B2yHMhCQaYbkjzig8tJ3LazGdkh",
  "key2": "5yeRzhVm3pgvu9FV4xac3weYLTb3iUpbycAMbDk9dbuyrTuRAvWEFnr3GsBMBWuxEJJeEReGqzTbGVyukrmjd8pC",
  "key3": "41gVRDKRZXStw4FCKhDn9uWsX3HKdPQKwLvuzeLTqGfguDvZ2bh7CCKkq6gREkVWeYjTEpY7LDYEhTDYkjFFqTFZ",
  "key4": "2mzUYKpuz3WaxpypnDPfAarZfAFoN7JGXhYsJGBCQGAoguzNT8oYegZZMLYK56W6s2jZVHiUrPegVr25mVn2obUj",
  "key5": "2Pjuwds2B8itq4Ky2uU6uMYVHDf4QUmEe3Z1k7PuvBWMnQNtgTfTxxYbPyfP92DZYZmkyu1VmHRUDo823nKjbyza",
  "key6": "2NJNjgpadvGoEgy5tbN6UpUtaXMBnJdJTdJJV5LEYCu93i9G7czqT1SabsHJhAAy2SeANoCttJyXzeunT7oZyt7C",
  "key7": "2dSweK3MP3xsH5nkAW6aKsgWeRezjWnmnjT9iJHC1RYRHqq95a3ubJxLLasei1W6NVHur1ZiAgYLgztZ793bF83S",
  "key8": "5s28RcwhKUdEevuH9zTu55VswLXXF37WK5Kd98mmqpbZA3MozjBcz9p35zKuLxY4PFaECFAmP4RFF5fznEgKrVQg",
  "key9": "GA46uQSpxF8EW7C56mYus5qXa21Rg8QZQvRWtB2iRLv7kVoV5mMdTngbQBiS4ZvztLBZxLcr4VwtSk6pxsfKz4A",
  "key10": "2x73JgKGoDkG4gvjwoVJFgyyWB8rhjmPCUqMfyrDdYz4jKLmqoR4KtqW3VSo2hjDvqtuhub5Gy9GRgK6qy7zGoEA",
  "key11": "8aAH657nouD4eSyQES596XLXxHj34CCbNCuhbRf19d46nS9harN4adtrS2uVm3aqFG8EAGo6DMN2CXaNF4kKEmk",
  "key12": "64nmkrzaRcSFLoBDaEQmumq31H5THkQNWPqPrny16J6Tc3EnZicDWVXBWTcthcFrm4V8vuLrp5ptBFEzGvLgFx7j",
  "key13": "4uf8Tp96LMqcyfnhr1ugXSpDR4uE9jUeRzNtBtET9HxyzVDUwsXfbvv4nJxccZG4WtaazemtisWmTjabJ2tQt6S2",
  "key14": "3vQNKEvp2qnzi7aToDUfxCM9FXWYJEM26PnNJw9YH5fQEMvM2edJQj7MuyJCuoH77wBEqCNT8aVqe5bRoCvivrvT",
  "key15": "3jmvxVubMG44yw7G8VdbsCAyxbJsSiPkHhZAm12JAQzYtus4GrjseAxHNzijf5trNRQcz1WXmyPxrrH6dTRTbgXF",
  "key16": "3y71XVtZqbcQGnLs1fFjTLj1SrNU3vgzHPT1rk8PqbETxWt3TFFY6JPigSjyrX8J9WbKitHwijuQVMEU8b5gerMq",
  "key17": "4xgckmorkGkFdL3WgLYcJu4MuTUBfZWsu5Mx7G5NWxow6pB5cdMJhmVstu2ffEWrB1hqB2DvdkuRMCHGkMPhC6S6",
  "key18": "4t1LQoj9TLVwMmG6Uvd8yk2Pt7j5ZmtTAaiQBHFCTnWyPUCL537mQLwVpYVxFsiy6fMJJBkvVZ77K35ZSkYYfwci",
  "key19": "FeeCzA34hhmByJUC2KaxmrpcNQtxGtQYECkFqdB3trTjGQaugLrNQFYrZN9ArBje9TxFUkQ5CjuAPdoxYsy688m",
  "key20": "2pGJrYZZHDkVGwTQMHHfM3boQjvuH2F3vWWnKxLiofqaEmNavSw7U24vnQ1mFUoZrHmxVw9hA71hB97NUtQhHRRv",
  "key21": "5pqGFQrGXLiCdWvFJZAGZo2JZPs8ZoZPLWeES5pjdiVXMzPCM6HJQqm6tXErjQfNjcNeyyoPLewgGsf4DJ8sF9aT",
  "key22": "3z5m5Jtj78epECLZn1u9TbEW9EvbfKkyjBWcADzLHrSTueM7wPPynhn28TswpnNhDozidwyNQfhf15deU1dasU5s",
  "key23": "4674m8FAH3FG1tX8kU8uYoweUDF3m1N1wAjM8YMgRtCtQSnejZVAWxNsYg4JgGQoaZMUVdEdd2BAydRrVTDmoCai",
  "key24": "ujrbuwrxP16HN1qysrHeUGg31txSqPsARMrLaQBkZPRQLvLB9X4mSVi43vvABkmh6pSk6zrgUA54oGBLqpTrtK7",
  "key25": "2uh6iwHeRfBx1vSA9W5F4Bz4JyxGD5uGDpEFXnAUuiQKpAPzxqwBNbHJ3vRcE6LXVn9HkuUjwAy3ew26x9CVLipJ",
  "key26": "4ZGXDs9i4w3i9FT8ovPqVYfwi7XKtY1DnwCmVSy36TJerRxruzTiAKamtjHLgsPapfdBhZp2md94RpHKfRQoLi8C",
  "key27": "3gT7dNPm1u5Po1rodYYvL6Fnq7FRyTZgr537YBjqknoZVV6jjSHRTpfxYx5mHmo7yRnTXaNbC4pyCEw6Nmk9C8Ew",
  "key28": "54HrD9g1YAz9Af3epSUWDVdABDUWfzWwds5Sw3319BmVg8M4x1pyL1wNH6T5aBsU1JdVBjsS1SLJ1zYVAQEcGuup",
  "key29": "2HsuCFZB51M3NVq7DSnk6kvEHKwnxeSAvTAQVjNUzsfTMbgzqDCf97rfeQkYBaZc1fUVNxEytEn72Fgxvx5zGv52",
  "key30": "4DWQaYoVehr7aM8ebDw9xSyoGH9XjHmiK1Q44ZYCbkSFmmdicSVUNGa8JbuVxnjJEJwNCNYjPrAW4BMt5WyvUzJA",
  "key31": "2JrMemn41XGLRk3ZUYK19SqvAEcDNcunm9yQFzbcrdCSQmpBSdJBaLrhTBbieWH7Vx3ifQX2svTWdREihr3eBmuj",
  "key32": "gAFbEbEh5c4EvZGwPW9Tq8ZiXvE4PTrkMMkTDdtrWw497ZXXu9hbExJSMcD7F4sksTUtKho4qf7VTZRB4DoA7PR",
  "key33": "26vecLbpwNyei2nqADhUuJqre8Hs22hCvFoq2SxEgZU8RNEEXYV4AMGthNEn8oormu47rS7zCfEfYRRsxcysyX1o",
  "key34": "2FeJmEjPcrM3Qc3qBs4jkXiZmDZRCcgBmVkTn7dcGimo921oy6L4CiV9oagwEstHFtiV4YAEtpfHN4uBU51JW4Xd",
  "key35": "2nfycZAxKCbxNzR11t2rRm5k5v3me7wz46x7uxM3oVMEaiSXqUDLg5RtZYY2LYwG4qYjxbYftWmCQjmRzkEYwbUX"
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
