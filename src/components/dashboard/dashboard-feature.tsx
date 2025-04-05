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
    "3vPsk7AJR7fGB5roTXyBnk9UNZrVv4jeXj3Aq9pyMV5qDjpbHgK43AwsgfZYY2a4kzLvkLX3vvUnNgZjtnXyUDtx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JjmmQ8ewm4e34yAVWsVAdvCKQMRJc1qs2iyGZxQMeiV49zr8uVuaKyfRuLTpfV4C49kzA1vMAop5ZhcEWQhRxfR",
  "key1": "zpgfhvRmcmgUoaEVxBQHjMEpgP4X3x7ffv7b6sjUg77oGodDfw4m2cZjMfs477QZHeYXSdtBjWwqUxfHbKEoHXN",
  "key2": "2ccL9oQ8QFdokchVRugz44DSnKJNGjjFRaoUEADi8AXk4CA1ZU8EwHS5NU7kvHCwoPgUD62p1bXYguvTk2TCDq43",
  "key3": "34E8kkcXqXFZ1mK1neMqucAQim1KqqyVTJBtGbpZrs2CMZVT3w6U2nu1izmBnErTdPXDWxYW7sfeLzbrPTN7kfYx",
  "key4": "2cwaJL8kyiwPQQq9o4JqpmTkAxsAJwrMuxmHqCH9Ksa4r3MTbxPjXgftYU8W2RRbfdTLo1mcQsp2oHXmZEa6yoSH",
  "key5": "5fS7dTtNaU1rnv82JYUnhwN8FU57wYAdAramYDE1nFNBxwsMnLevimcfGopbeDewoSCzADPNivKCnAfSAmYYdwhE",
  "key6": "3utcG3LE7r6KBpdsQfwRTBa46yBkrJ7RddaXDNcbgGZ3a3ePbTYFtJyjGp41YBADtbp8nKX2THpJCHakb9sF5jzc",
  "key7": "2bc2wiDHNhUtn7dMkUML4x3Qd1xkidL1gBcxwWwvsXK9bQ1NohgMxWvBch98e72jdXxY6UEDu8F2Ky3xXxQak9G",
  "key8": "3y7F7WZN5HAgopbNWHjiar9DYao35DQi6xhh2fVLZ2MTamuV6zuaDRAeYqciwYDNa9uf3jxAkPANftJ3APDxtKaF",
  "key9": "5sibsUHfAwimjdyHfE4r56mSJhWN6J6rkouo87dgszkC1RVs1rvBVyb6TTxs6oof1YJgUze9VXVECC3Sppam6q8d",
  "key10": "34Ba8ATTiB3yyU8yAM3ePU7uav9EDMcjMmexcTQQtYxeP24Re9cTe4ZNqS2i2Yt5GMWtwAbPb1qyC5Di8nHHnRYi",
  "key11": "9BJRtfBp6wH1LddcS8yxYfY9A6W94NNUGGDGmUqpG5Xxrc5iXfkKWhko12nCBAcE1NiGcPG4Mk84cvXcQvKEo7L",
  "key12": "5q726H6Bb98Va4DEhqymG4Z1orEjhQtAspfmKNQLAJJthJJBvwr6kXQTqG1imJngLMkocrYyRBCHjyYUjmfMmPgp",
  "key13": "4WAhrRByhntHJ5uN3HT97JFW3ewZ6MXKHufANkX377hfLFVj7CxwXqCFV1mukkYSmUwzJBQkQRQJ5E2DR8ZVr6sj",
  "key14": "1RoNg7CveJjERRDYETNWwYy8dYgS4XZ7gDPKXDXj56FG4J1dz1Rdz8GoYPTsv8xqywwt6J4MKT5mEMumtkramTH",
  "key15": "2Jy8KDqQKAc5rrNgqGucF3pxH35KXxbnYRhWuuvvhkpJQgp2nuzkJdb9sAHuJYuwmcXQwbhuGE7X5m7yy7wevH9S",
  "key16": "5LHhJMB1i9JVAbALMVA8vuvFB71iQLN4DnwCoS7KY7yymWYXFRW2qDq6CTG1j4kiGxiezUrBmM3v4fWDLJjx9zbj",
  "key17": "NbKGLZFmpuy9RZ6VNQcqWkNQWHGAZ1scScgmEgix5WCa26mDnALsRYFywUEZ9kqyYzDWYJD7i1jbQKYWRWsiURX",
  "key18": "3fuXEZZnnJukxTPw5q7da8m2rBxSQtB7sRW49xyZeByx5t7knEKDe6h7joB5gir6cKQESuPguLUtwVFH7tvZn1TW",
  "key19": "44re4oqRuKrcPAJdam5uPRiKLh37e7wsoi7MZKdRFLu4rmsnaitDZ4pfgqZzoaR7oG35JWbDBgB3bE78WiyW1ohr",
  "key20": "2GvKGTbq1a8Y77mJWqFyajhZHRhmzyW83rNTb1VxvXkV3zUkw2HS3myTANuVuRnohK9FnYrCq9MJbrjJny3Mhp18",
  "key21": "4UKyU4iyotPqxyd8zuB9ojGgokQyxL8LVmey9Uk9fcusn5JBvggA6NoegA1a77KJ2RepS5Euk3MW1oMSecqjmoMh",
  "key22": "555DQm3H1UAVqgyLTMfnEoca6Zs2w6qkWMDkMJoSAGUshXUN3pAGWQpPDrGAtfLmqn54pVowUrEXBu7paAv6nZv2",
  "key23": "zxvAFQgBdA2tVhY2ARoKpPNqWzqjwJMoqPfvThNPCC12kquHU5adu9B4qzomJrCATD92YPRpp6RCepDxf92jKfN",
  "key24": "WGRg93U9N7XbBDmgv8Z53wvBmANfh18cfxHspojFs63fHEwLQCztYjf2u5zV2DP82tGbCCcNAER3WJpbXUhY8tb",
  "key25": "dhpt4iLUuNpBah6R3vTKEb1gVZ4WkakhukosEs6nYLATRQPhTQo36QDgAa2uUGaVGHtFnmNC8DM1gj2qS9Jx21Q",
  "key26": "2KDgJLows5vJEku8br3VT7SWWqPZJitiWFWw3m4xfK4U3QbMwpxdcYs7DehxPwUmVjJrPuu5LGSwLTefBN1EjnJv",
  "key27": "5Zk2WiNvpm97BfebfufPC2rrpuiDtu6Cm2uH7C4yTH8NZMHJ4det22SkDBmxcWCWExSgBv6oy3U1HyEn2ouYAGw5",
  "key28": "5jGC3bzeyjQTKaUESPe8JwwMSByJetDHyxAeXNjqpoHwkTJrADKpdNzgwN3tbzUYndDSMjXTBwFnuuJsA8urEugn",
  "key29": "4xCbY1GY5TtNTvV7TJ6qamxSWCtw5vJeWrSXFjLibvvWsvCSyA6ifT878eS4zJHrSyeLozcW5WgKBWDNYfxo1Mdw",
  "key30": "4R9WnCG9SkEz7Zpqa97k279Ug2FBjWP5S71wBdXMjdafVDFZyTMc8H2bkXdmEfvx1xSfaAQNPLAsPCAUaotTTJVH",
  "key31": "3EpmPcoFo2GEyReKReUKujPRRBbCVvS7XLXnNp1stsTWbog4iCXdECkJAD5kpCS1Y2CAZQqAR32kNFHxaxFbyrP8",
  "key32": "4GkfE4y9aPZwPwejvCeH3Bfbyjx8w58zj1wnBaZARASVqy5jx2zs6EbhLo94DyEKnowXuPmm7U7wrJV37cDkStka",
  "key33": "4AchYf3dSTXzaYPjikqkxnKx6A9etxNDcLQqYULUicVS28nbGEyi8m1qEwMbrCBXoCgM72BmKY93mZpSKg91HwCG",
  "key34": "LHoFMWWm6Ex8YnaxTwXCZS2YKf1LQtigCvWJxdP6TVb5GkQubxSXHMnNByykCYkzaFcsAZjQnhvdRuGTUiupx9F",
  "key35": "4LdcpqxpCjux4TMWKFWQ1rCf7MQmsJPhVmt9CkNCpTsQneGN39A4aW7MBSkM3fDt7LeYdkkpbpkoJYktg5AqEmUy",
  "key36": "2xYUYBxhDNyeoFJyrQfa5KbhGEzqRXZbeL68ciai1RqCs8kLPhJ3Wy9AiovDugKgRLawLYp86FtJzvPBmSwURd8J"
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
