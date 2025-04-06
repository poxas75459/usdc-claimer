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
    "27nX88Zfg3M4U9t9J6VBjhuFBbJf2okZ3kFsogoodt6fUqqztLXr4VFMagcfauTEJh7QF4Pqq9GvTkrBbSuuQSHD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39LGsUvzVzV3KU128GwTusFcgaMFK2SVhoibwXzQzC4mfmfLUthReAjpZLMYsezAocd2ayY5bjgcneyMm8b3ejnD",
  "key1": "5CTzBuPgqJMfBHVnErbQ6PYUeqjQovsrvJwifNhBXHJyf3jpBJ6ARHJXs76ta8URzYRwciAgc5SLfYsXvbVM2ESp",
  "key2": "3RknZ58oBE2yYPUgvj4T7MGFcpBeRtKVn4BibU1TowEu4YyaTabUqQWCWcjJCxD4BKGKCzfdXhCzN7nwkdE6E8rv",
  "key3": "2CRFsdG2VwsJoogaHV9qjgmum6PWtRg9q2CQdd3K5cBo3cyMWD5AdBHUEJ5jcyGTHjMpGfRPkBYK4grwKreA5Ac6",
  "key4": "4PN5MWSE5hKYatBbRmwEsLgbSv52wtXJAVp9qWE7WNdjzDr44RHAKWKuFqPCtXiEQK6Tqj8VECpvFfp7UA7YJKW6",
  "key5": "L1tWz1EkGSFT8q1Dtct2SkU8V1YA3sejUphb7XCQC2odnWPGQ3myWARtY3QCwtcbhaRQr5E5sFPbDhGVq2sMXc2",
  "key6": "26xq57iaDXdMZV54DHdgBFNvBNHfGrh4B8F92bDqHZqXBDkd6k2dhWSvD1C96sLP2kcTCF6LE6SxQ7mq9m4UEdvR",
  "key7": "HgWeHmDCc31x2Z4on23Wd7H7z7zr74MEhcttYypKLxrLRAh5jvbAthbfD4rH2xFW3bHd812Fsu92JFdJG3FhyPh",
  "key8": "2huf62UDThhYpRA2qDDDfBgbF4vEu8PWxfDBP9LrUFJQGyiUzPtnDZuCLvRXpJsMe9ZncUtxgoAN7TJ3T1tCGx3i",
  "key9": "2z61rtu1G5EKtuZYGfuQK5dCFd4SkYK4opPtYTMZaPE3GViCQFNs4YAU4ay9JZVB2ef3YRkqEFueWJ6LBpt648aJ",
  "key10": "4qvti8tYqxnJa4pK4krV7AzE4m6dKBYDpXb53pzytVCt2vuUAPxH9dfN3svR9XDuVZPzdeTjqBr7ZJfvLPFSt7pE",
  "key11": "3w1eYvuURV2Z3XfofdETo4NRiDWMEnkjA4eMWTFPNAF2QFYeJgXkpdYvZjR5jPS7XTpw6p8DipHFm8BRkda5r5nU",
  "key12": "hh2is9gREuR6ZhkRFSs1gW3TcncfQzEo9Uuny1LdjBSxrKW6pVGdLxFBbQwkcq2bBtKwjmarEWLyNtMS9ntWske",
  "key13": "8yKKt6vQs79fbWQU47mUtJakWzJrbJnGb5f4Zi4R5aimCTRLhh7bAnEpz5nkhAoaJ5Cb4UMtyVy7wRcK6UbEkLt",
  "key14": "2VmZB3LCQ54XbXVmRcXg7RXQXSpD5QwWuaH3HVJi9psV5N7z2rkbisoUWmzhG1WVxJxAjRjD4JXbxUNLVPXJZ43",
  "key15": "5RYWbCe3PxFPuQsDatRGAr3SprwqfX1G5jvoZgwqu1bFgCbLJhCdQ4dWf8wACDoRtoRAytcPmSi4gegfXNxrz84W",
  "key16": "4rw91Sp7dVDDBCp7gwkKLdyArCwVQat9eHouJWXNVUDQoSjCcDoHv6tkdYu2acZ7fRzqQLtWiUCEAT6yPaBB1CVD",
  "key17": "4ysipfa5WmJqgvtUVytUhhxBXFvJk9cpGq6YxZ8kcLW6JYPiSQKWWjJMXjQisxE8kdKppfRYPk5PEh3Ko55GFuwx",
  "key18": "5op9Ma4FkCDbro2QUYwKNXYdUrA3pQ41cgyAS2b7XjdDRvxoEv3J5fcpbwNrtCKw8enCbuwhWn3NozTxMKitpTKY",
  "key19": "2H7Y6AVPTGkSReTyCJNTvm4ZiqyZ6q1htDVC1ZFJF9MSt9iuyYca33JwJbYucxokGSMKH5vobRPVf1GPpetkFC35",
  "key20": "47MgwaAQaVSwMCKVNZbeuQesZSLZGyTCYPhwzdPDJtQ6Q5zHP524FbZeGEQ3quK6hWna6v2cEHRmMepxZUVk8LTq",
  "key21": "3Ag3CGJF1arYjzSD9de3VNPza2E9k2ncw4V4MU7hrVPXFgxusVzjFQguhsv2covZA4emfTnLMnqFUxBQmdsUiB5p",
  "key22": "pWWy4ZTKqkByjC2h4Mi7QkL7hDWufA1RztWmc5dz14XMeTXdMXRGDQ4nvTkG6rvNqnccKmTPPsWBFv4kyA9T9VD",
  "key23": "3aT6xgnXrJp1xFdp4tYAzW2QEyUMfpGb12BavedfD3tsHWt6xUhVY1qQTad5ytswCkQNmzi8tJ3ACATAY2iuu1uR",
  "key24": "3Lcjr6ixcuFZBT2i861AHkPVWwmhzq97CuKFYqCSMknZBwczt72RcsRHhX5D3jx6ciKFPhoN4t8foe88J5Wb8Htg",
  "key25": "5zNcN58RESoJi38c7NJLC7n6P1MauvG1dzhCCyiue8gutTSrChAitBSH3Nowb5PtQpZZJ4pV7BQK1T3tm9M9bvBJ",
  "key26": "2hq4zPp46kgDXcZ6mksHwoDAKUT3NtSBgiA2PfJsFcHPRPn6C52uJcETG7WAXxvcVtvCtKy5FDMLtkuziqSHiXUd",
  "key27": "4UarYreUJ9Xj9t7uHwW86uzKqAxYCBJB9L7BdeAJUbsecWSxF949gurPBukZLuXQP4pUfqgdfKRY7zdqDkGjLgx5",
  "key28": "4BoNogUZiqzE1jSvgTKqvzdub37yELWJRCxwLmkxSSaJpXuMHFuVYMkHBhhqJMXyQYyr8foERddUVTaHLHJGnb8J",
  "key29": "5LaCM74qa4P7c9WwWbNSDSfu5hv5DF3Ua7qbYcMyF6SDpMGvpvbLZxEbXXKASyMZUikYmiBEXWUM4MQrnyuzteDr",
  "key30": "3bEi9pFwpRE9ragZGgtHniyUgwgHGJSCWiovQefWiqZFQgghLEaCEj8RzCYzrP667QPC6pHsqhS9VV3V4zKTy4qw",
  "key31": "vffhQFBmaPLtvmwsP5UPqXW83pJt3KGpWniC3yBYBZNVQRzavykcP9FLFdmraCCYUfydqf2VEU4BoWBVAwZDCKb",
  "key32": "3wDSLfawUsR3XHQjQqnYBhLG3zo1qXTKHzS2yw52iBkhPFsykkyv4uD5qkndS9L4zj8Mkb8YmwC3ScMEhYrpB7WL",
  "key33": "45T6ZUegqdzo5Xf45DVrn7Z6fLX6JXGv6K6qL4MuUPEccuL33hCXBtCxuVE5V2ahBmb1rmLcLKccK6CoN7nRvRuL",
  "key34": "4xe5nLnuoNnGt5fJcnpvNU2jZwWtPXvLN4QVufC9LctPMRM6wLfR9oJT35JxHQnLMBgCrmBh5mQ4yuuUfHvYKYoJ",
  "key35": "3RugutXewqBA4Q6cYXZFbEeUS3WS8H9bDjnFgG3K2cm7RZM52JWgaxuWa67bfTBka93JLtUCdq8jYXxAhJVUG9yo",
  "key36": "3BaPTLP5qf8mNk8MyYVcc2yzrpyfbKjVQz1uggsRxPgQz6hwCBAuD54VHBZEK4GWfFCCfwx6K1mSvJqLqDTCeRFj",
  "key37": "3E8ENweTFHr9oCMttDQVih4KX7ppoR1tFvw9jukqgTcn7k41iQ4c4FuiWk2xnHtm2JSAuLDp1hrrFGLj8tY1Cnga",
  "key38": "4o1RXNAFXvNiNBdLnfbwN8wRmaJAy2Jv3mzUKohe6pJNkwXd3MjhWA5ywbN8mHvD82WoUJSuiYsqA3Lk8ebAHrBW",
  "key39": "4rKnwpiKqLbzvNu7P1pqHxfuiBzYkEgegdAX36aVuBd6SFY6df3Sy3JpdBYbgN1T288Pu49s4BZvS634okqmD4dN",
  "key40": "4jgYxq2bnZj6XgJTNY6u2SAzpmhKQ72d7aNVhgoHJ3E1CgfsM4KmpidQDLND9DE3JLurMhvd5f9LwuGSJHmgAmhA",
  "key41": "2rZTf7UNjvgt1UfY1acyJDVq1HUYw2DECr6h3quxdTo2q7VcbcdGzjpnWy6ax9gonYzxiRbnYbXqQSULW2dSVJaS",
  "key42": "4qXDA8nW73mhaE77CCrrkuzgZV3nYooBT6FPLPkoUWvkAi9AeA2CrTp3uBB1LLrsxgU7mgcnWgD4LeKMYaSKmw7z",
  "key43": "RFqaEYbRopD6pJq6RBmWVtnkZnrn8vRR646hF3ZzoGd6uNNbCYcK8VwQT9zMjqqQhbR9N7XDuboyH6e8C6z8gYb",
  "key44": "SHc7nTn2CWGQoKYxRWemM6NczsMScMh9KCJkzHJB5m5ZemnUeTScunKz8PFwc5awd2DEgjKFwb2LiiSLQMqws4n",
  "key45": "c7HReU3Pwtkrd2sk3JPbzkzqhLnxLBsBNvkHabMDBHrPdPB3WXqYbp9UjxPdb2XpQf1kavtTnP9XkY73Umy5LGs",
  "key46": "KhRKwx1YXUNpnxRgerpbvBrELSdgQFaqMU99pwC5vMK2MjdBVPDx8NEy5fbX5azXxWCgTCy7TvLrX9EGWMxZ31f",
  "key47": "2aVZNJNFauRogbTsVgU2zirywHfywdKnEcierbYSMC2xcdNAcgERMoCjQi7k8mqwUwTtmWVVxDFP7btmFBeZcmcD",
  "key48": "3dTcZdGbxjrMh7iuF4orQkW6E4emcM3mRB8ugRCtxoTudNAGuB1nnArjHYPYhfWFGgH7twFLv18ajpHzJ6xLKpDB",
  "key49": "28mYQnwqCgiVMjtfyif39QD6AG5buw5jA3PxxMkSpdRLF99DP5QaSFRpXWF6EnZ6TQSpKp52DgF66rWMgkm6Utpe"
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
