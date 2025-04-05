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
    "3vJnCj1djrN3RCAVjWW2YGZzcSfRykc5PQuSfiicPjHbAZMfzsjsr6YKCKSZDqVMhwjJeyewPnH5N4ytsr8hxegz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2c33a3FndK8mqkMmhdK8GzuYKmUd6Untq34RT4rwgUt23duoChCud7YnWeaWXpM5kaED3wqWfGvmngWuF8sCemrZ",
  "key1": "3mvDufvXrbpaSFap4VQB2ymHHY2itmv6vfA8kuCUJQtRRYeNJcgjA9JznGHV6g6PDgX4cXP1GHeoeNLv9APVcymP",
  "key2": "3fN71JmN286vTpYrQos4GR4mWrP6ukucx4pMCbbPdG23nqYH48wUJFE8AUPciXbs5W1v8ZyWpStP17qqvkrFwimw",
  "key3": "3BTnrtdmC1EZ2EDtNovQKr7vzR2XQRyZS4kWWiQKUo9UULnnfGz2wuGg6wgctwzjrH876dLfnCuPFRmZdpXEQhDq",
  "key4": "3v7knX5eXvEanUWb91fJQbDXs8r5MHHKhsVSZJDYGSjA7ecGpQqLCT76oyjudR1Ua1RTUpjkUHWNw32SqMw79U7B",
  "key5": "3a7w4gy1A8vzpbTVxGBJL7qL1yCdzw2sErkWtC8ciVaz1KS73T2C79ArLTbkmqvcfm7zcPKAReJKjcF1uJSHRBmi",
  "key6": "2qp57ktbMTeWC9ZaZxC4wkChTHzyt3YwgRsxrH319TXiX2oSWQqP87fa6EwQLk4PSpNzjkdUWa6R2X4Dne8M4U9Y",
  "key7": "4Ft3T3Cy9dnSbeH8nRSoa6jTcuFDRRSicuQZSN8gCumhaqcnLtC9noMTnjiDKuePE21EBsYe7oJHsy4B1xUNmBnk",
  "key8": "5cJa9QxxxPwsPNaaCnXhd7kX764xg7Y5RtqQjTSoSnHHDKN7UhAdUjShmu57LpY1Z2HVvn5JfcrY6S9Ve3eyQNP3",
  "key9": "2sXz2ckmpwCJZxf1JvLVwU8VsbLxcgFwotnzCbveJPpHUUJQ25JXmKP3868Q3YSGvzUhBqaQQ1TY5Lp4YJet71Ko",
  "key10": "fkXASeNpNuKXWffUwa4QjwyRKmncauQnKXNjpt5cEKky4FGy42JCw2aUCgeTPpk5RZntgqwR2gGsNiji2CnqUCy",
  "key11": "4wSry2yrnvny2mt4XNpvCkyPh8fWEviuDBRrK8bGYEEB2Boe4e4HWa8C9jjoKVEasZMaLLk1JkALJZxLTUXnJ8bT",
  "key12": "5YvFiSauu9mBrpL91zfQDZpiBzbrMEbVXfQWvm3xTstHBSLfrERKL9yizMZXeTxWyEAL5w4RY7dNLtHj13jv2eRy",
  "key13": "3e2P8wrwdqY2tpQ9nwWnSDvc7URqVTNwpZTYYh3yRTAMPeJv7dNG8mPEompKGeuZi2sbqdQU46Bw6JBupRyr8zyY",
  "key14": "3LtmsnwbRZAWRxVUh9cFymTrRXXg9z3M8BdHVq7Bsysv28fjRbaQMKwr1KnKrtWkSJzHzo6pH6k3C44PyDnrbRs9",
  "key15": "2iMHP1U6FAYwp8pPA2H9Qrzc3PvRJJRj3pkPorv3mfqei5kWwXzYMWnKEuFoDFetTywttEUxVQYA3CJdvL2TLaR1",
  "key16": "2yLMmiFMMkreMR7xMzjbBzSVZTsGxVVb9gS1dVpiiDtjFvxtHA5oi3wduoYA8t5B7kn4KqAB2mZnv4Dy3dzw3eWM",
  "key17": "47SMTtcjY8hLafgBPpUGuF2Kw1StmX9yibboXf3i2auUppgxYpFuxeFEj7wUfL5GEMDzSn8mFQY5Z8kCgbxNiQLm",
  "key18": "2mLYsALKBGJgEiDkg8DrQ6r8vNodn4q6k2dbibSAsc2FG6jPhrTiKCHUDx1Nm9DGHGsTNnbiuUmZQZ49eLsypsk",
  "key19": "3AC6BwNpGnk4UpNNKP4Uk9w7McYcCv7FLjcB1biGezfHs61Hrea6pjTqG9nsjLMXZhfjfS8AKKb3QaCR3xnD3Zk1",
  "key20": "khFv8xVBnggmvxwePA7WAUyCHqSMNzfsKCEHjitXm2xQxcyDXPhYaFSVgCsd9DVFGEGwxZkgGnnuueHMvHr53fp",
  "key21": "48ncoAS82ESsBRKtWF6bYuw9LB8qm8vT9T3iCyQ2q6XpVMuDJQuxYnyUvGqXx6n7eRhYuXNCsaGAX72o2ZYGapdM",
  "key22": "5DU2dvAmYBX4EAqgdycPqDdf8XyrxGSoeW6ZDWWeWaXjnyrYjR1hsLkMPpKjbmKpPWHqjxc66XNkpmRJ2G98VqLC",
  "key23": "5coChhTngKTdAxoNrXupDUxPC2hhjkiq7zV63eK5c9N1C2efu9sDjfG7iYkpUkMd7zwUMR2WdH6nA5BWq5wJfmXw",
  "key24": "4x2vzP8NJQeqqceCdx7rnfyzPfiBcJa475ags6mJXwumuU7HvzqYP3HPVYcvTUm1DtPuTCbpad4nPrnGyBnE8Up7",
  "key25": "2SFfShrcVFy2UVpi5iSa9XCYk9HPmFX3hGBCbttaUyJPz4jaqjHghRgChZW9rTgnEqmvHw3SNAELPev4MEs46gcb",
  "key26": "hwuGUnAmeTdjvot3NqT4ym6oqejjLLbuPNHEKiWjAoQrMkxf3LknTgG1r7akGVmQoQkWTba9davpFvBDwHewr1d",
  "key27": "3g3TKR3RYmn3Ukib2qkV5yvV4DmUD69UbNnAHM5GHQkSKgjCtoRH9HpGDhf6C7j3h4we4B6eDpNw3a4J6yX3PSe5",
  "key28": "5KUq28LTFYX9mgkoFUCgLaisWuemCbwPz7dkoeV5Sz4ArYDz8DtjijRrGTDPjBDAzcjuVERnQiLf9S92b4zm4EkF",
  "key29": "3jqWnLAbbd3dGeUAEVrF5MGw9vaAYX6orZH4jgjrG4MZAdjqHVaVzNERQ7FnoorHLAcoYXURYeR1wzPPEDHdRbJz",
  "key30": "fBZxTvWipihNDXMWjZkpymSw5zpfAW6SBW3LyVhexBx1hvriFDwTggsmEmbVDGWw9GP74wbAb3Yh7Da8nuw6Gbz"
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
