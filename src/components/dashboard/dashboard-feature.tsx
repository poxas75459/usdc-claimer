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
    "3eLtD16Auzg2zRfKnrLzcqP4RHY4TK2GAXdbA27PAcjw9bE44hzFLCeRQjjLtLUdMXdBwwmvkSnM2huxzXgG7Xka"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HhhF1ExGGAmKQ37vnXtKVi793xVnCdr59MxZxH3SpNs5BSieHaL8eWZqW2c6fxPNLPGPFqDSAU3KG4Q21x5E1xs",
  "key1": "28GjYzeybePE2BzmBsQ3X3i8DY8Xcz5gsTTwnJr2aCBRfXtYqXEd1DA3wkGpB9o1Z3UG7rephT9WHsqgFfLdgboi",
  "key2": "5mkLMQupa3iRwRc7rFWbyFWTfrYyxvHmG8DEhGsqgC6R9C9AbZEMpvykjqreY5av5M12N1UUasFokbSvpWY3of9c",
  "key3": "5PdT8kELjZV2PZMckTvfDtm17Es34M5Q2ydThAFMQZBFdFz3DaBBncRqPRTttGYc6cwZiBXbENfpZJhBKsGguxoi",
  "key4": "5tCnhPgXupCYiWoanFbGpsRB8JqeBD165j5UeenpNDYd9UFtciTB5Hg62y18DdH9AAYi2bCc2TnnGNgyBdoXbAXK",
  "key5": "5o1eV4amiP11wgqnue3EwKQJM5dyKZ7icYDRhDhWAYm8GWJ9SZ7UJejZhL4knqGqzKXdQmP7NMkPKCLLFztrJcPs",
  "key6": "4BBWM5WobkYEqZYEbHdRv9LXRWLXmHHjFhUmcj9THCgpieNMcdNtakZnqqFjLRTvG97vegg3guzQjJQRyZSKRirc",
  "key7": "4gsYstuvc1oVgNyeF6SqR7PSD1HVG4aUmaRc3GxdmZxUo7AcTrgi92UEsA8FFkxDhhzob9oWLu7DiMFsWP6mYM7Z",
  "key8": "4QuJ1SJyHvuxwsfVHMw9ZUdoVpLJzpfs4ewJsMVBJTyUmmPHQXvzb7R3aEhqgrieH3iN1NpFhkM6e56esCA3c7hJ",
  "key9": "3Ad9rUHKKbScyrAXhW4nsqNYnzM5gkLSinoT6hh3KWuiRiAsWbBRNeJ6q4cik9AfaARcMt4m6S7F359acKBMwNRH",
  "key10": "2vzd4K3JJddWVjGvozHh5V3PBjL5xXbZyphjUnvefbc3WRqfQkwzL3WNwaJSL4LBsYm5BJusdmgSchcsmd38Zfjc",
  "key11": "4nV6CV6v49a5dcSH5scJTQj6pb4eMSaeJZm58f9hBr6QR77LCnn2hP25scxfod4etELRzDCZntxP63PRRzmY94cC",
  "key12": "vQvGvug1Nmb2uCYT7KWV7LmsTXzeS3ywQvKNYFQaTvV8MzDQnjWWAR56NEzZtauH2qEyQ7YNotjJQvzCEgRMWcR",
  "key13": "3iKTvU889fvnEQ7exyrRcUKvwEV3E4MrdrWHdDwDuXDwAPRUntfeZVnHpXZWf8tw5oYK6DigycPa2aYPpzHbTTKz",
  "key14": "3H2ynW2Ht9sGQLvb26pfswk35MeJKtoL83aGtyWwJna19Zh5hEcNKiHkgno6es1t2sxXMpjfgGE6aoDkJpqddo6p",
  "key15": "G7GqQUzijxPzK3VRd3P17HH9YRtF57bUjHy67v3kbL5GC9BYvYmhRbRa6RUEUfchJfz9qUhuLp5vx56rvZPg4nQ",
  "key16": "55Lq4FQX3LqmPripnheJoDX6XtGkQSQS8sDwwEFWnvvpzhNYHfaoJDaVYpwfCsr4SxUN6pKZCNufMBR8jPMnXcE9",
  "key17": "2jRY1jowx8WPUgpvRUyLeJQWHwx2Cht4mw8xL2vwZ2YJdUQYpXrdBmt6aMJzRvLf4cyQjkF7oK93mcNH6jJJAFhz",
  "key18": "3tBQ9wv3ToyQ3rsUqMW2TMdJzkJoeEqG9vNRHVVbYgXYqmCN2BH1VNsSr2r5kSFHei99f6xhoKVyNwJFRHj28xiu",
  "key19": "2dDrUZUFG6FnDpsZJYB8MG1ETvWFeKLvaa9rcWgQe4nhTa4ZP3FZwna7QV5qHU9z78yPTMdFRMh2qQsmhqGKXzer",
  "key20": "25t11W9uymAMLEFd1f41MpUdtKoxpMGoAxNtwW8PcEKfjd96zzPhARa3bprZbR8Dmw2DkMdiVfXqRWhYuENVQfoW",
  "key21": "3oiii47iXctA8uFWQndvKNDG63N2XDoL7pgnwjWyuHuJxMBd62h1stoN2pYkLXdnJRvRe2dFtPmkXPMjUQbWkgAq",
  "key22": "4n6Tb3mspnLYvyVn7SDDffQ7UzbjnFS2UKnkA83hRCftEvwCH2BKsQfAdAjKCim8L36yB3KL1U9Jop42Vy3aNdJQ",
  "key23": "2DvLUD5uexi2TCQRqX2X4Q4hR6jCgbQfUjju5mpUm7b9GJEwdoe7v5YWCESNo5x5awFUtG2w639NobZNTFEjFbpv",
  "key24": "4gRcqAXbU5cvmGnvPbDX3NTZWHNjbY7FCKngdbDZ5SmBndP4fnz8NDDHrNtbPCJw2CUjQ7SaphTSYDMnjNVcrxFZ",
  "key25": "2DgMFQtsnHN4ogasvFneDFvmoZzPCk8WGYUueWPKXDPT9t3dyierBABhox5Ua7AS9orWSQGZytGKiGLQFDh8bTGT",
  "key26": "U8KcCJTB9ExPjmD3hnH8BfQbrkDyT9MDoGZcHBBtF9iXCtPeLiTetnpBc2ZEffiAcJ2NbUEUFDpCu7YqguD71FG",
  "key27": "3CjAdDhKJ3eiXQo82eG9ht6AeYZxKdARV98DXKV4adUjU8LDxzU7trsrKRWWo4uvDkGeV7dh2DRnC3e4hzSP52UZ",
  "key28": "44uEKAJM7Q5KX3nrbwRmBe7HuvRavEeJwhyLza7oc8qc3WmfGx3Xd7gsKsQdq4q1WPei3AWjByJVJi5w57w8fFAL",
  "key29": "4JhEE9QDmRGfavZmL7aNqicNAJsMM3R6DMV3e7iTSLVJfaJWWNn3WkvrjxZUM2piCiMnPhhs7Vuz2VzDrt8su7Jf",
  "key30": "RyjDGnNrgCdjTXzRPma3VuoTvk1BffGv3YemjRyn5TBcwsTVADdupPvkBHMvYAtWUE3EYGnHj7C92aibgwBHery",
  "key31": "5riv3yVd52DWMJSoXLxq31z9gJ4i5HwUtsH5X29bnb5Ay5fJrbwSD9HooozhyhfqumrVmABoYXw31eYyDsJy1M4Y",
  "key32": "4ez9QxFXYmkFqKyriD1CoZZMhNFQwTW5Lk63LnNQn26UcqnBo8y3MkKXaRLGxBDeZAGbbgsCaR9UJqnqDibvPydN",
  "key33": "44Zvyy7pfcsency1zeXF6QkTtVHLAc2mpw8YDQ7h3Gf5d2vvna9KDiEWZs5NoKZKpk5bVtyG6y1LaS7Zj9G7yQrg",
  "key34": "3Wv8yYi3B4d9AemF9yZ7hGbD1gLykpcMRwBY6zCsmENtYbiFGG8Qxz8LifksjEEnMkiZgNoyhJmB4v1c5smVfH5S",
  "key35": "3Th3bMFGkZbnaoZD1roZrSBz1Rnvc83XbBGpfG9RDbeRMGurBqt5iZjxJSX3cJ1d2e4NJ7s9p5GsdPaNfJC3rsfH",
  "key36": "4tSZrWzPnhLPCABoSTMfiVhx8i81Hix2qk894vzEbKUHPJyGs1G6LLUSUqUiEeJUJpSb15Up8FRkCdJjeNexRMSm",
  "key37": "pjcWmnM1syoGzvw4pKKrRDXJ1mqibpXL2rRQRbcsG2LNsqAK6y6xHKm9v7X8kYfMBmX4Yw1FNYMcG92LWwu1heg",
  "key38": "4rGHudscocHzxrcX5VQpmYk3EYPTkYG3SQYpUTr9bqegc4HFnGCG94a9Wtok4Qd8FoD3dyfnG8YZSds6nqnZKkjG",
  "key39": "4Uxi1vBEopyMGTyWrU6a6HS1182RNNcUNpmoKwBCJDc1Hd6v1WhSefCdTnBJaMNQCjfW9uqVeUnjgoJudhBrTc8x",
  "key40": "4ancdQQvtrAnwth7b4ErwTw432dXGeWgCUqSujDYMmmtqTjJbFnX125vZLBjnb8uCqjLMGj5YfeqPNEsRcn5nWdv",
  "key41": "4d5QaffjkKiPSUdo51XHrydRA757sxYxWyDxXhH6cNpfiFTYRTL43nqTusREVUkLgGqtK4vu1M7xQaxg2YHS9Wpu"
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
