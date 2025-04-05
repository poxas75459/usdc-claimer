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
    "4BFs6ijJtA6ayw8tWc3Mbheo9DqyJCHAHiwFFgAHEi4tojfH6aSPh9GDSvthAVwAVnzAB6ZxmjZLZLh1k71ek3ri"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HTU8Tep64oYy8vANjp4ETCwALaPPFbwnph1txi6bj4wpRVFrLfEeJYVJ254cSNX5KMHSQAABSRrMgReDPLS7vEY",
  "key1": "5uCSoKBQGNKzWD1kG83p67VG6kWZGrzkQWwxCojeCFF4PFY1GpwY1NDjXCyxMWLrkcpGSJp1ydbwbmpZWiMsiasg",
  "key2": "5EpNEpZBM1fHtVuGiQMfDSipFF9BkZAYHrzYmQPqk8dvcQpdSZu8dNmire9UXgBdRKMyEXj9vPpmYQttGWA7pgk5",
  "key3": "SabEFr67LHAyXuTFXMCikD8dced3m5eUGUaSpm5iEAZkRihcrfv8x5KwzfHhE51HaqvB7GxEnCwUfXtNn3FwWy3",
  "key4": "5DAdXGmknP9KzAMC4uEcj6kGSPXv6DmhjwyhJiJXGy6Ur5vLSUpJz16MgjrqBSDxMgnwVqenuFJ8PEpTXiJaAxj5",
  "key5": "Vc5v32j24P5NNuX59a7Aw33Qdr919hcbCVYMUnjTmqJSpVJwH2s1vqSNH8pQRYbaNwBPbfSSYrcD31EpH1s4yHU",
  "key6": "58zv1DPzMkcJJFDMcFLLPa7rHQbZt53jbbNvgksrNWj3Zv8STg3g6gyYArXTEDwR1hghXRKHcxrScYSW7tmoerg",
  "key7": "3r2EUHkuNyEyw2EBXNu2RPh1EUkykHPSU2GgifQC267GzD1mmKfAp4KnsQL7hKKpurnAg4TmAvax19PPkYxxMZfp",
  "key8": "5aeNSiDUkRv8NCkww2mYye64fTUycaVSCckZLfhJUZT3FtmHcpB5vMkhmg6UZH2AGc94cYhnqkKECFvZUUTN5xGv",
  "key9": "2337bVhkzaTavWxFnAAVnf8SGzbXJs4dRDEbH38y4N8LDseyP9hh2HPdyygCtQCu4WaZCHCA2JU5U6UajLnErdxS",
  "key10": "3AFQxPur9R9zm7nQSpETYN5w1m9vDteLqxFSMy8eUoaUqg8DxSjTJszkypRe7AzRtRaJmNXqcM73ewdTo3KMLmoX",
  "key11": "4xTatd2rWX2YanbPzb531zV7GjSiooK8HG4Nwhyd5am6MQh9k9pVT7KowHyCbfme9SQh9Po1QCWWYjF7t7yXrDv4",
  "key12": "Gpx6RtptGhGvaB4L9YNVMQJeS5bJCEFU4ycidUrqLryArJ4AGmDY6d8fgD3xxqvzNnrTPWRNz32BMictPbKrPcc",
  "key13": "4NtAcReNJmJWr9ySwzA31N5RfYsDqhMmP5bPhDaWxUGtHLz9LtzqBuvkVYsVsH7ehwhsdwCccbJLQPYtd3xLkC2",
  "key14": "ZAsvZ4aBXyFxfgfFv1dFCo5YPy8uwRLZYMQF2kMT1Vwmiqi4xapcd7CgN6YNNfypR25LxR8J9Y7SNQtCq4Xw3SF",
  "key15": "2KzgcTavRRFACp8e7UhF9LexdBp1cGCf5yxzf28bwC2TwMVVuLbt8CqZs9DeotQvt9smbgvFifQJMwWQnJrUcaT4",
  "key16": "4hVoAnoXxfobD4wWLy1V4YnLpP9TrLoXZo2ycHU8pzQaPE1Q5UUazhc6o5s7y9raxRBLHG2Qd1fLxeGKtDN8jWnc",
  "key17": "2TxjNC4wFArTPrVFh3xq7Tez36mJukt8rJvmzKJZL7CuJYMTctdXWVBdPLZ3NZa7s8GhdzyjYEguzTmhrpC1Uv6A",
  "key18": "3cRLUxoQy7Lqh8Zx7kPtJazDPy1NqwVu74MaPzV1jrMpMoq3gGBL1FmZakynXWE9oF3d7koFVZimzEpE6vNN2Va1",
  "key19": "4EACoj4k5PRB47RDP159VdE7cetXZm8p2Sc8mZo4E7qsRujNBjR9fyzYgws1CAUgVTzT13yjStUph7TnnVGXs7Hz",
  "key20": "3KBY11p5DeKorG7oAkecuLmTBvrb6nuvZzk4zTYwBCxFi7EMun4o5zRRRsyv3yEMELLmsjnPNkiBrJ5kgM3UWtyE",
  "key21": "TG5YRg54CchZKu8iwEEKBR9Rzz8TeL7XvnzrEd1wmBzH8StpJr4CdaoiJBxVqQMoQZvhJcYYWPSYFN1fvf35fYj",
  "key22": "56vNekQ2oug4NQEeWftHBdckt9y38EsAzRDG5XCQwAwF5SLTk7Ae1o9igJjbX6x3jzuc61B2cjyVmyPcczio7Zeg",
  "key23": "4EaeeAdthDrJXnyijCzqm8j6tfdvwAYUknMaQ6JMJNHve7tfLqbvceRd1GkqbmJ5NHiQ6wkHTVPCM9ewRS8PKXit",
  "key24": "2yvQizKKk421LUQnhwB5tisKH5kqyvvMvJBQMTFvzfEtsmA16fdsQj345sdmNh2m1sgxPSHcyD31KVaEYHcUxbEe",
  "key25": "4tPsLD84ZebM8acTf3bmCt9th14kvUaz2DV6MdnywJDva7ZRNfrFWbSXxsZFiXhBLhqs8VjyKn8PCfXk99abW7v4"
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
