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
    "38hUfAtJV7y4n6e6mUVPynfWQMfQ23AC8bhR2uuzkivMi16RWRdgzG9nWu7w6hM3X18qKZ4JpcfkdMA8z3b1jujs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EdmXdi7yQDiU2UfdcEhZcqQDNJxVBnMethYwXALmRGBB6pH8DNooG9HaH6uJNkLsjTNv5jNVcYwt5JaXTGGJDB4",
  "key1": "2NoTiv5XBxhAFYb9AnCxma3j1zD4AHfeCrwGLUaQyakDAP2Gm9AG5hCc3zbQNJXubUrMx8659U9WngUvxjukT4fo",
  "key2": "4bafdeQMyBGEo1BKxmtxZuCpyjQuwbMRwkYfis6uTmV3aUgmCzrgYwRguHLAzy3LJQAeGTUDbyvhogUznkKdtgug",
  "key3": "3T3ydyAc3Vo4rCqC7iYcYHECFhfqwknAYL7fp7TYFktFfDE1QA2jNBbqbaPvgtHXqC71xT2kRPrJahgtPaSSpivk",
  "key4": "63xU9TQVp9xUxvTVEvVDTnfq7cMfyRwHovKuXxu1KQBkB93bQCDFFBFY9gu8PrTQYYTFNQkji81jdC2HniP8Y33W",
  "key5": "3rWWE1fCiHJbLxpbuU4MZUtNMpSjc7pMxcrCx2oPTwiffJFi283M8pP9PnaWm42RcWyTQFSCTWRFpCsRPQgxL2hV",
  "key6": "4Yv6No5uBKBNgbYrGX8JTXYKGGZthGhBZuGWxmbbjuuT95Gjy8GYWLZzZgmnprD7JVxeFb1AHWtoYPNLsffR93Px",
  "key7": "477VvWrWVfyHGhYFq5qHCcammcpaTUcj7Y5FCgP9HfvTPEjCdQGVFKQ4YuWUXeNhrJaKfdtPovzsj5iUqTn4oTxG",
  "key8": "2GvQPiDMM5Vx1fVFrSB96oTmV7LWj996h5fbmYyD4n5hd3MmiMM59jjb7YpUGC1cDA6tZYbcUP2Pzou1GfR3LbEj",
  "key9": "3hRRhqc49Aq2o1uvhh8eZR7ZcB9cxqkGx8AdB2yZjTd44H3vKwsN8Xk81XAZtjBL93u2LQt2bjywpUuLVKGSgyPg",
  "key10": "jRzaAWvKqD3xfdLRJaY43qqpJ4Zb3cNWACuYirCsLVwex58AquTFQv2CGqgGZR5U9ngRxVNdj6vEe7Rny2Sb9ZK",
  "key11": "2tQ75u9nXLhFrcrNw8wsyP4iAv343duCPnTmLdZh7AXXFxD3LmpXXzkUNCSz4eGa24Yq3yd8ATscYJx4snorswAC",
  "key12": "5Bj8JJNbWrkE2d6FojfKAtpYYvVbfY2Rmu29irMMRALn3E8Fapj2KegVWck56LTrt7HGWtGtNp14Us5ohuHnd6aM",
  "key13": "44unDJXuJmDyhgDEkAhzAVR3nP3G7UE64au1HqgTV5Nd8ZxpQW18GjTWfgSdpbDeQo7QHgCcA3CtJFudNJPN77a7",
  "key14": "5iCkyxJFNHkRNSWsEb9MRyopuN8Zcb9fXUWnxWM4ZhTQeXa9UHRFrcva54cV3wJtrFL69PJDM1sf3P1gkw1sij5D",
  "key15": "3pqLTN3pdSHmoA365zaA5xUB1qpvSz8oUwznPiEaTBSHrVW7X4yPEzQUvUd9gic18VvymqKTASive9LCNAU91ue1",
  "key16": "2HJHiUqg7xumdxcxqr5m32A1W2aKp22QmYW8KkqF9Zc9y2rGE6SWtjaG7i5ZALrXKr5oGrwHmfVfUvwxeq5HV2s9",
  "key17": "4Pv6b4dEPL4riFc7uJftnN36qacJfYWWXeeVULQPN2d6K4KRG8WWbqhnf93ypTrwyYUk8mhn7x4g6SUPaPP1dcFH",
  "key18": "3DUUtX3Ene2TMQNfXzr8xmK13FG5jABhNEUB2op2bwwtc6frqevnHpC4k4iaZN94LX2Wt2TAmTYrxzzkHdru8iqS",
  "key19": "5qQRXuLF8ufqc7WvxfvYzNX7LneZNxZSHhoWiN9qN1MynSLNrPHUHhQP97tkvgFhrrdJy9pMvqiYzDWnN9fRkWoC",
  "key20": "2Ug8FANmRi2s7pGamD6iQSVcFLP2AwVoYscV4F5c3PCQcGeraksJ6kFsiWAKbvw9pDRNUmBPcdQYjgpZBLgpeBM5",
  "key21": "2yUbVPoJqrcK7Web3wV7u71Q7yEzuvrnCJ6N125Y7vY1t3MVG33LyYiRSdRGCrcAQ4PA2WTkEKv38zkE6Cy5Cmrm",
  "key22": "2FWm2wphxK8QQaWwUKDPLBwE8NY3jgR8xSccrm58Z3cBV3SFYunFKt66m2CQmBzcKyvTVMfLJ69XWo1jZSeM9fmQ",
  "key23": "2XDWUrNhBV3iPAQ8Mja1uvFBsc7HNNDmYYYRAknbCMXKY83sFaVzbSfHx6RSLNB1HFKFcPQYuzzmrrXf9Ngysp81",
  "key24": "3MgMVVA7Ag3LGsBssC5jcD8YPmzcjNZ8AxJVqho24BDVS55dwbfugMEL6ZMQYpgVw7ePjj1fjuUEMnwVMJLVxjvx",
  "key25": "58NNQgqynnABjJD1D89U9hAQE3nm9sNJ686RBkP34LUnHU3nSk13Yj2Bd6fRBBniqxRgp7RD7BbfbCqCYgsF4VSG",
  "key26": "2AgaRRWsnqwCV6KH1AutVchi5PNGZFb9DyYq9aG98qJ4H6ujeFjqpVy1C7yk6CJ7iRjitEgV1aQgChbegr96mKmA",
  "key27": "5df93UkuZrSBNA2hSvFoLyaNr8Q3j7Ve3ekR9eBe9kvVV9P1mbwzQGFkVru9JeHDcMLt2yL6ttoZgNrCT8efCj2V",
  "key28": "54VBH989Q34qqzFqnyJP29CGme29X2yhJbCdkWd4EJmPBatq6VdbvfWR4XsEN3yYTSkfjyyd9dyii5DKSPT8fzab",
  "key29": "5XNdvPBwMRrsanAm2dFbvdPTnzamMqSLcvqmHNo6SNhEaFimaunQzbgL33EC3RXZoSLStaGzHbtCGD8U2xSij1PR",
  "key30": "m2nA59HDpnqABxrHmEqSMwfQoL83tagSZgshfZ1TWLQe4RnyAcTH9vheaQF7ZMjkbcVQnUgocrTBg49kpu3aZvW",
  "key31": "5kgEQGTiscu5gUKeXpBVt5F2wWXaWVEVdagARYqPXwfDVJn998CYU6BZ5Va8neQnGq464KmfHHhZsubC948CGoce",
  "key32": "2a92Tsq4r96suvUzsqVNGvkVh6DNcRpJdhrmd8L3aaEJNF4vKVKBEuRXmxatoeC6xkxjuPn4RLjw29sx1f1oev3a",
  "key33": "5xQdYGWGRt5Rwk6o73rvibmhhb2sM8iayEjESrmtr9kxPvdTWfY9Bb9DBaHpZzxjduFzAD9vcRF5erMoTaZKcaRe",
  "key34": "2GA353o12WHwTpBpwukTdL2pfArHT3XeR4r4aiRftkbgH27CjJujongM6wv5ciF2piZNTtbfSXTpGfWNjRM2TTAZ",
  "key35": "3oHaetuAfZSiWFwnGStpQGRUyw1zCEGuvy3wLZuaybffUhNbM6Mzh9q3e7RLiVpioEfNDvmh196jYJcph7BEfBER",
  "key36": "2An9Sk7TrWNF6DUD4WoqKtM4PPevRcCZR7KFzCV4cx6ntKwiCsi7eyYpbBqE9XDf6Tu7dUpubbAiPKg2j8EuTyjZ",
  "key37": "5K9WTRwSoZAGHsE3ujLeE8taGge77DzCG4KYTBrNhVuFhdLfYd2RqAfPFvfFs1Nfvo6bsyywHWaSGKR8vjUCgohz",
  "key38": "4gxCqxNqaqbUE94Y8CPKYq5Uk2Gt9x1Fz3xiRJmUdXBq5do5iqazdiPeJVJAyKEEko5vf4wg4dtibTJeGCDqxWga",
  "key39": "j2AaXavFuQoQCZAkmowcaPQSCQrgi4E2hScSBHJo1LnQ3gUXbW6ykNDiNKLjE6JCNQUDCmYWm6roDLM5PC3jLCW",
  "key40": "35ynLTRArB7CiodrgTwXUBBHH53r3SmgWHxcM1YMxdngsVQHCnC72xAowCppcdiTU55CuuAMLoSk9qNknnpKGjjZ"
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
