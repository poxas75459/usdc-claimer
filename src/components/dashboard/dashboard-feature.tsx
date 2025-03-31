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
    "X5AhFrEkcjoKZJPXHLaAzUyyuv6Tmjyn3mAJcHw4Qi4JEfb11kEzBNRB4ftzSzbAqji8mMGm7YrYEWvUbbiEPGU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KjfMvmgFmgNpFiCcjbMUZPwBiLBYXX18ALWpYBiYsAwDyHRULSX3oqz2WzJNMHA2L1RfAWEFWVAPAeSvtgG19EF",
  "key1": "2Nq81BGxccQSkeZpUUzMtidh2ZpR5d34SpAr9GkYKp5NBroCvt3Bva6UqXB8uwHAoUS4jNBZvg7ZvZbPcV8qQpSJ",
  "key2": "5qM4c9TwnjSHH2SJkRrCdjHhQThAuB8CBfq5q1BCNUzYPDZhkVcU9VNRMUohipwdGYJ48Fe6gfpFz92u7Dp32yKc",
  "key3": "4WoPeiQ4KYpMJ3nBmY4uhxoH4R3mDLLNwP1cjNVuvMya1c1qD5Xm7aqzxTqy255RE29M2wahJAUbtQCyBTvy38Tg",
  "key4": "5sh7SC2MPPhrsNhtSQA31QecuWFsMkmpfiwZNtUDrrMjRTWhzwjT3JFqHNRBswAsNvoddvcpLESJB2Ndp7eoXdRR",
  "key5": "vSfofykctRkbotiuth5kbYWJoCdNyWUC6wziiRoySg5rBKzUivDT7zDrPu8TCzgaHzms5XGja4KwaVXT4QQNq55",
  "key6": "5VkmDKUJoQ6g4NaKmRyGxuFSqq7ggdRDCNk819WD3k5PsNdG89BYmvBwrYKF7XYCraKCpUCZoicsjjW16Xq1VQft",
  "key7": "5FRFeYVeDGdZB65bm4Xq8Mf87eNwi1Y6RZxJ863CSNHeGSFxtfMQMZy98Z12HmsUT7UgJqR16uCTTgBwfM5iE9aV",
  "key8": "jJjnZiHBRBYKr4b3o7qZjkiFawizykjFtov1hk5pRH2pUnZBA1fk2uNCLJbwj5JCJ8vpc4Ni4ybdEEJip4w9vDb",
  "key9": "4ARSJSVrs3wtaDSQMHDzDRSiou6Xuzx9kEeoyCsLBbNU2BsTopQvx4sjAKQcdeG5Mz6GaQVjMJ3PLURwRAkYXeG9",
  "key10": "4yVBqs6LsC9AJsHEXaVxkZ4YAEM1ZxbNgxPpph6xn4V7UurBxZH7LVQp4dwDYeJ66uqcPNogGbWziXFpwRe5JpWp",
  "key11": "2L3jT6kNRbwU4tvK7FsiRFzKeUKc2NbUYCxfXWEFYaJXik37ksFm2cTaxkXHKMoDeEmGGrrftHqhdx2D8nJ2pVAe",
  "key12": "4TokGyXm3so2wP4bECpNrCiBZU578xvFh1e8BbfbZBVVmz4FBUYQ4D6cR6YAhD3hzbmZEaQWJji2e1RhQcWpgnRa",
  "key13": "58GKPFbBXp1nqgwHdWeA91qXoSW6wdyMaG71ZBDCJguafZecaLCsG5Y2orsNHh9Mr82zHjmrbtnoHJjNWezn3USD",
  "key14": "4E9rc9nQfrs8y8LgGx7vvoXeqFecVpakkVAf6A5X9oYGSqfkTYdBgUF4d97ioKrcxWULT149Jc1Ltc12ZdypTJ3n",
  "key15": "3oL5xF6dKZWiCvDRAxq45jBeb75RqFMmy4ba4vikwintHnkAfYzT96bpVXR6NmpSoDb3PgJ9auR6rKybhbwVj2ms",
  "key16": "3XfykjQ7B9ovuBNKweWDhYrCR1VEATaGMVFbRXkufHmuf7PusE14YY6iTpfkhEwGRsDw12Jm5GM7LZgKqwDUYKUw",
  "key17": "5A7VHCEEnQ499EQ1GuFUQzcNFjk8KuXhU6HrbM9pPFWvKJCx2bmzDWJb9hLdQEkJzrb8av1P5tCFpTSY8jHyxXDW",
  "key18": "os4GFEsFS7dPwUjvRno5yW5tqhSbdrrBDKkgiLYUGKWs3MYGm5CyXEk9cfRwVsceBDPVqLaBUkn7M94hrfrfe5L",
  "key19": "4HH6kZyCKPpVmpovCeTDGiZ9aW9bzRixJ4dzXtQPc6F3xG9cYRnjh6nKFmTxgNW5WFhUE4qn9uYLNfp7sDdJ1wfV",
  "key20": "5xTupJzzPx591iErr9KpBsyhh2rSnMwwh5MJ46WHJGcoA8hghwTjAwSG6nTcejwNS1vZ6yUtj4h1iCTaxs7mn7Cm",
  "key21": "4B1N6ZMgrumf6t2XjhBg7NZ91aXoYgyFbbAAjrMRieEsqFw63jC5EnU48jRnGrzjywGud7uK7ASFYrEdgEtB2ysN",
  "key22": "4ob1o3oRTz7WcaqmycVM8NY68rPv6shFDdYpkmhP3RqhsxR1dNKWmsFoHvmmWE3g6GHA8QJeiT2sY1HU5bR8dsEE",
  "key23": "2GfyDXW1erA98WHShZc6846omtWYBxXRpkwANHsPDGsRtieD7YscMDuxrHs2FN4dLy4pTh35F5VnokJRx7onu1HM",
  "key24": "4LXkQzoq4zEFSF1gi42mLbdvWothANJjRov65ixTyPN1TpqS5UQhZhGMwYENmNAVE43HGtLK6sKMqk1KabEvttoK",
  "key25": "22Zif8kPCW7qV8r9Kwvd8ERKyPEacPphSpiNRGszXeVLwv6PPsZstUr92djJT1BfNwZknScxJr3avaT8oTFu6WUU",
  "key26": "YNnVezZyFTz3mWWsjEiBNWUH6HMXEt4uc88UaLgGRUrHLk6M6L6c7y2GExRVuBdB3aZkLwXn6sxRKPhXw3KfXth",
  "key27": "4eCRLzQZQVxXreqAJdvr4kTqbJSGRcbDgWbu248gPDH1gYLTHysCXEHHuGYvPqQ8SBnvthmmsFtEKtxsRfo9sQAt",
  "key28": "3EJ2jM9ETHuPwpAnX2GqBfsTQ8LE5U3J3jwdihEECKRQPG9geZnipV3Z9gZCk1Y2bFdf7hMDD1JohETnhFeAK1vs",
  "key29": "3xwgkqRjbiiy9fVxRZPkUpbcGqs49UhaNxv5DPQMYyu7nsUUdV5SjAEkwPqWiudzqVrVxFidF34BCqn4rEC8UnKf",
  "key30": "53Ao9Kn7rxr42bKJMWBLFck8UVCJBYF3mZybVMwY5wW2yTEKRFkAMTD7K9aJXcJiyeVZfBzieqs9GmRruQg8LH1V",
  "key31": "mqzED2cfWMWrdLRS1dZnsfGj2LMkbPVMZ4mKYKGGDJzsVeHW3RfDPeYkYesu9MzvzRaB3b6Htgd6zyVsqPFXi2y",
  "key32": "2FDTZA5jn6PiNw5t3mDmUe7qzW3HgoEMUYnPPL1mxhc4MLECAVkVtHYoHYfRWwJSxyEPQ9kmstvpERcLwAhKgfzc",
  "key33": "4B1a3GmvLP1ayhkUWzp3RNidC5hufHEw61ZDjjhGF9EbDBXvjqPgokjrvUMpXsHe8WmkFjrc9WRsMGPp9zDmqEty",
  "key34": "2Mcx5xKUFBXcE7ohmWWuaCP6GnQQjrZFStfC1Jfz7zjLiEj9ghzieUTrFGFRdTtqmw2Z5yKERBVDnMfiUqJVYMgK",
  "key35": "2epKMJe4TogTE4eZ6GdLVhU2u6CASxJ3Yx6fTDQB246mryw5rjkthqSFRUyWptu8oJKHSisHDZLKYN7NAcri76Ki",
  "key36": "4RjCdYvKksDMkn5hCuXCRR588cM3Cwvvf3GZJPWhTjWr9D7JPyH2bHFe3CFtVcjim9Mq9mQofe3RMsfZeEQV6wkw",
  "key37": "39iZ8TDKsmLJ28meMkvV7sZSc2aUBJt5SZb3qAXUcef6eLbTDWCskMNe2f9oGT9TJcQhsJoe4RWQyHo3SeUqT6WE",
  "key38": "2TtiBZuRF4TP3Tww6TgF4sD4etTByjGWXgeqwPnLeCXkQZzjJMiPsKRSFrZ2SB9R3BJsrKBTcFTVMh3Kf2WpLydr",
  "key39": "ocgBCkGqjTd6HHfyEJzBFBTCLEnAU8RLtRLoPDWsVrTRssCnoEiVtS2LoU9czyUCbGVRExLAyevMukCSGFvLffT"
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
