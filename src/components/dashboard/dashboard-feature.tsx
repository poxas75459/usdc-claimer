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
    "3Z9hq2K8tLXuXzD3cnfov2tiZokcBjizwdao7RwK9bc8Jxe8XsfgqtdJ7UVuUcaaSm3uvFdHJ69EP2NbkPz4zr37"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zw9Zgod4tpV2Px4trFdev32CaXRhqSXNVuY1xx5w4Dw4g1wAJXXiwy1Bd9W8tok6bqQhChpRDHSFPeH4XAStkqo",
  "key1": "42VsJYbjvnwL8Bb5nQUPoPfykM8ZMt98ai7NMnjx3nNRr9CwEqzbPZwzMJxzchkqXvxgemZQoWsSsC3dXLKRaVy8",
  "key2": "2o1xNjALCZsp87GHtU3tZ8kPZhpH6Cz5c8VM3wE5bKxMmGXYZDQLqM5Qf3hAydSKdrtGUUmX1rQGkDFC5eBQCFVu",
  "key3": "4FytCfSadm9h2A4pHv4m6HuwQ4zBkSGmCZLrogrLE5iuW92SDxmwjt3DShkgmnM8YpwUbwKrTGrJgALL1tczhr65",
  "key4": "4h5dbci4HgsvbwEYKkmwoPFFJ449aaP8WjyxxS7k8wAa1BaAHoeTXqZwWCkEE2oM8p687L4fXsPUZc6LHZqKv6ZC",
  "key5": "25VUpPwEv5tQ7YNUstHdTvSEByEVjcH9i5BrZ89SMm5J9Rc3GKrabxHkFykWCFncPLRUNCx21HUNRZFujjXdBkXC",
  "key6": "4PMiczwsjmJJPe3PnD16rBzse6eLBFNMFMSqoAABUFdLAb5fMsLWawRVgnXBHSkhte7nSApzBckM2zV71MrsjeYz",
  "key7": "49z4a5sTrWiyduSyRXe5AocdnNkk2PvyQAYfE492HnGtSqYeFkogXmVsHkgL61aC3Mqfr3pmbk9KPEfx1EgMzCxM",
  "key8": "3y5zm3RY1p5MfCwQyQpwsLXmeZ586GLYi8P1PHwBSr8JAZogn3SFFLaAZX64SdzBY1vnstMJ8vrg7V8P84UZgDGV",
  "key9": "3xzFvXQLMpr5hZRfvR5JsxRwDUroJ8VbECdNhEsJkdwqrKraK5eXd2jAz68N2t9S8xyQwE8Kqj1fwiLRs6yDhbkV",
  "key10": "bneeMXT3m8pyqtoYZL8VVvRHdFi5nib535fBQFtJfcb8ggiGXrfuNp8zPNLMga2K4NqNMEBVxuKjLMbbtBCB65M",
  "key11": "2WA7EFygANyDrVBtMZQsBxUbKeH834pUKPXrEwMrPXh2HGCayc7RHswALcgWwPTHhMkxutUt2cfpSgYshuJSAU3U",
  "key12": "63K5bUGqFvgbAX3UvU3npTFKFk5xuropTDH69YcUX4MhU7GLAstsDrUtdLornJLLEZ1dGkrrUAAdNQHyaPuTNwjA",
  "key13": "2CLy8hNh9sZNSCpLa7kEF9UKjV3ubvfbHhdNtNPJ7HL328bfj5RfRfL7TKf95sJ2ZfGogm3RSGbVb3k6vbRZkEGR",
  "key14": "hWc7ymiXUj7Ptz3YnLsNGEbfeb9rVPocFaLS8dYxfZqCM7pj7c8qg4x1enF2SRaMKr4EuZRw4aBHBEzQqHPLRcy",
  "key15": "jHcUxYf8ApNAwySiH1opP74MWSvTe4PgwcTMJoEU6RwwH6mDerZZuTU7PJV6KB4Wd8SWJAb2T4SfdAAxijyzodQ",
  "key16": "4c599FacBG4WdeezR51kxFs8cScviZjkFaTRH9XfvY1bVPH3sUioz7MwFcVJXSANJUBqgin7A6MaUeKFtE2UR9iZ",
  "key17": "3Jerg59R45Lgpuy7x66GEJTWJFoyLk4TwBz9y8768hWVDC5GFASWMt2nxSN5rJ1Q4x8RrbZc6QAneVLwZmWgvqSp",
  "key18": "2FxNvxPvAi72jQQshFL9JDdyi9H1rMmEhDuy9hnVpW5xASGorCKRopLMtzCQhmfssrcUBJiK2GLyciL1qXEbjAky",
  "key19": "5rZVu4hVM251gwz4TdNaHRNxaYdQxaVWkPKY41aoNzW1vSKHHogNoYU6ooocw8T9mopLMQwbqavLyuLzz2dnJR4g",
  "key20": "4eYFAmsTCM2VgDuzjfcxUefBgktPHjgxRSfpWndSctt4zY3KvhN2TFHhi3QE6DuMqeJJ4crBX3nq6AAKfW7k8U3d",
  "key21": "5pvF61MxioThC1o68KsSNytd9WTyj5yBbFNRFfipdL9CVKEBEETK7Jck7cWZ11PxBeNVZUZmn6pSPKY4LNtGVg2X",
  "key22": "3qnWvuZNiuBAAawUr7Ffr3kYybjRcypqPiwiLFeQ1tWGoL4AreucPwf6Ty5KD8HnBory2vXvUwPiQVcppU4edj3S",
  "key23": "4gsLM2r98YdG4VpHa4JCi1LEqqtSwjpN8YeWeehQw5xjpVwpqdRo6fwEp8D3XmtLwDJvfuT7UH9MeNVwpxkvvAxJ",
  "key24": "36oBWmEUnwJSYXbNP6tZFgLRQkmNBn6Qr1ocn4DmCNBFxGWJ3znW6zp8MP9Yn61zDQjFwPPewpjhME9vgEAuZmCh",
  "key25": "2LKsBRkXEPyMyE7brPTpxDYFEBMmUseRsi7gKgzt9fhEZtonVFEF1gdMkP1yyTxqpvKAyCoSoeFMVNudvhBxw39d",
  "key26": "2CwRHCyFKK9PCskjSA8KFZNUyEFqXjsM7aKXmdkph4DtMUjozrLVpTGqb8G31c25gPPDv8AWjkwPT6Fw4hm2kioD",
  "key27": "5AKQ93zkoa61KcebSs5yzWML6CnjmiuoMHNbuco3J4mWRYA48oe2vCWdnwS8hi8iyzjvg5aFncLsxbMDJYPVvE56",
  "key28": "4zP3L4Jtrs5wxDeDcnwG4aFA2SC5C9zKZ947B4AFkdF7TcviaWrsEcAeTu3BSfzWcHQHCN7DqF6udadzi8Ye22D8",
  "key29": "Ku7wFfN8ZvLheKs3vwUEQQ9XBohqbFUveAJJp1wz4Rz3TTN4wfS4nnL4Ag8tZc8Ujr5GCCtVvtxTFCW4hDtPCTA",
  "key30": "3wSgcYxpSg7auv6R8Pz5DBkB1snDsRbPRUcqKT63YZ8ocoFNsmjoHR3woJnXBvVH3vADHfyAoGoijXnoiKhN1Je8",
  "key31": "5QUHuEqScszDPMhN8hrnfXb7SD85Na5LVxFexCKW9MQ4xxpymfDwgLANY7JoFiP4DJgv6bhu85VNAywr3aXuYTLu",
  "key32": "5iWh7wmUcAtqvmaoDS3hMr7YhXZr1PUJDmeoDRSjEamMUioBZUoBZAqAJmRCA4ZM82hj6n6V18NC87GYr8nRNGJf",
  "key33": "4phYoaMWikJJzbWzqpAtgFaaN1Hcuuab3kPXp4dKXN6AHfWh4hLNkyPcMrPV944FUK4iFgqzKh8R7FynSiveJuvy",
  "key34": "3HaDK6eMqpXwbtV7R577Eo1uUiZ7dcE7hcyqr3u5kcq2MftLwie2CPCADoYpNFJutsfKmKe7o3cAaUGggyhnHeZY",
  "key35": "2aj51bBencahBocZZ9T9xaJdib1sKA9rhh9yxwirQdgPemYdTXiZHXotu5YHVEZesLBE31YFQyD5GFjjdM2Dxq5u",
  "key36": "CUn6iV7QAZUANrYy52biqPQubAr2bgXg3thXqKGBcsaPRrCRfmq7zo6kj2iJYb94SSxximLXmjaq7dCZ8hqs2uN",
  "key37": "3NzymGKqC7uUM6AdsMoaQmGWprdrtpZSCZXahGF22ZSTontVD1NiEWx1ShAuKRf41Sfr62wvXLJkQchx8nLPkNT7",
  "key38": "2puVqenHwardLhzrHupmFXtqKKVYQ98pCMvN9fb9hH1umhpcXUxHfqnsyPEuwSt6XNr89swfP3oqBTK9Qt7cyXQW",
  "key39": "3ts6ma73oHV9xUM6Bda3fHiurmTfg7NuSwR4G3rg8b93mVygJCcSK2H45Uqi1kLMsnbhrVXeDHTzCF2ECrbGPYZV",
  "key40": "3PW34NZi4RzF452jN8ZviEgu27MxbKKUQmnTvx1F1Dk51zVS1MP5kBvKSQNsfVXtxVb8JSEMZdeM52bjR9ixNd16",
  "key41": "mEpt3x8RvBj4wP1PZpPGuGS8GoYmuoRaA1bdWWUfAuJWEsFPWFtk6xorYPedo4rqdzSZSCMpwxkPpbrP3gWQ2G9"
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
