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
    "2mEUUod1n9oXMxkWaegiWFFLonUyfNPjuSJZbdhgASNCFXVpyiVkKZewqgE54rGmBRfh6VA2bupA6na7gzxZKiJF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uHb7M99DXToCLEPcCUR7cVZWTzfwSdGnV9RDsKnXxSgf1bDDqiNS4bdHhWYpSuhwUS2Nk9yNtfgBczfZMNxeEfM",
  "key1": "BcyisE3tB5wEm4jQSMdhWYHpY7sLMBebyFDx1pAvudqTR6LMP2R6tepDhcdQT4wEQCWKc1usHM6YG9HuN9iMir1",
  "key2": "26RKVWf57uGfbHGq4gGGPx26v74jHxawP7SsyGJ1HDU6HTTuJXkDrtbijMqBa8ihqfnEmKexik9iXR5txUh2LmJg",
  "key3": "26h8EVteDHtwhfE2b8xBPoaXW2we9RTSR475frbVrtgMtUcWzgL27cPkzdYj1uhKMshZeWbenEzAKcYjLTvm3oBh",
  "key4": "khCznxwTwVUEf5fnaAMyTjSxpLtUo8jgMkV5GfZkR8WCuxmveid3jnk2pGaH3828nwB6Kw7xzRAQX2evUJA21zV",
  "key5": "2Q2Cq2SstfB7emPtdTmF7cpWKLsND1nk5xGuNsoXuRJF7Ww2nmZs1uamiWkxbbrNNsVhD2F7sLsURD48bqih2aMk",
  "key6": "3uksByeE55EvyDj8sn26qwymZsuB6LFL9EDyrfc2qFYR6oQiLPvTbr7HPBPPNvaQCQBWepkQo86Vu6xVvN98MRxU",
  "key7": "4kYfnHe3PyR9kW1PVWUBxdqxkf9Um855uPbiHia45Ug6auHyyr5C5H89oQCL3JoCPS5kbyhU78VPXWqW3pUMXXfy",
  "key8": "5AaEp9caJAtiMnkgjBasDyezVnbAJZD3Djw48jSosD3uaATuAVC2DYEUSFiQFA79xEMJdeCXAFP2uBo4f4wZPvZ5",
  "key9": "4SZXSqfGr75nYFqHRWXZSi4TZD3v31JqJuhTeEo26E21tzvniesPzmr6U8SUkdHhui21kGjuFJY8CY31G6Rzoxkn",
  "key10": "2KgZcq5WDXe6GhvyxmfbgwSiLcUUsuVrH7fy7gjen9u4t4u68BmeAaqSjzCUHkX4purGhTqEW71Bdv6YNvUDxYBV",
  "key11": "2TuFSnEUbgw5GmVSVzVpZpyS7PgLZovsMucizHGU3aAH3pWsDq6t365MG4zwz8Xe24bH8YhMyZnpqN6HA6rHdTaU",
  "key12": "4UQtZrGcTAkTW6Tz2yPx3CrxhVkGRY4CofezWQt4hbfA63rJvA5MszovH7NUkqaHaT5yVToRTcJDy7opHN3KZW1Y",
  "key13": "67ggrHSHLaxtAw9rFwovGx9HNVM6MTtiyHFHM82tsRJdE99MfkrE4JjrTDykpR42WgPsEko59XoPc87UXyVnHbdS",
  "key14": "F73VDfEzH1VDZqjF68HdZJsWfAcZzp7bLc7DtpzmA1Ncecb2E4SS8LTry7U1zm6RrzWZL6AfoRQNcwYJYAuFvdw",
  "key15": "24jreTyDa9WpCoJE9y2HDGmGTx3Vz2KoWaaVaK1MGw1PCzZoXVVVEvP6TeTDwRdTSVL88eqWLJwUFWMTcgattdZ3",
  "key16": "5HEpqbTPjNSrtAh7PERjGaH7NVKE9C9atMRKL1LtoZYebYGgxaDdxg3RPUXfP2WJgxEeAuokE5FsfpyLdtHqZ7TS",
  "key17": "2zYEA4jPYDes98oCyyvhCw4qKmqyWBh2axvpfU72muNjPg7WXdXuX3EPxyei6EGtbD4QA47WFGWZsvBWtoyhZRij",
  "key18": "XUwH8koAurqqHafv8Afzn97ixMZv8vzM28ZDR53SSrVAZHkEBsw3RhWT33VcWPr2gXA2wWko3JYYpDh3sB39UBE",
  "key19": "5Gp5vBdFhyHeTWvffYNGoW3zg9FEhaaXWeWfFzJ4hnraMn6anKdKSYYz4X5NA5Z48iawQ8UQgtbgcV8bVXgZ5hLf",
  "key20": "9C99eCMDbpVbjyK9jH2YAiJNa5aVLRLfAqBY7YMEKCEEASGLZZZW3PLo2YWBthYmLL6p1EYYtpSQVKokERXkJcJ",
  "key21": "3DPDBHW1QyEJUMwqFZjatE5v8Uv5FeUhanGqxp82JJYcHETYpd6CSGqJpbYBr3Xvb5SQSuj3KxxhJysvTohCBksq",
  "key22": "4LBaCrVqmsKktb2KQEJ453JNjBqsg3ycZXtFow7b7wpWp8ycMm7W6VenDXYfvPiPqCrV2Sb8GwSdrY5oCt3HJoA5",
  "key23": "b3N3mMVZmyLAB9szymX7nTbh48YEn1TjpNvZkTfG2nYN7y4rb17Uy5CQdw3Lhz1HuV5AdeMDVmrySjs1C7Wvu76",
  "key24": "UDJ41qtndaTY1fgEXRbCwfwAry7Bk6qVs7vnPPYvf7ugfPtac8mFpKvybkSe88Lahuounk5ZxugreBFNP5gnbyM",
  "key25": "kgs8LqPCugzMd8jW2Ldm7nPc9yvdpAB1DrX4siLvxx8wYC2C3THDnYA6Q5DtstPTAJzqvM8MWQo92u3wBLKWFjZ"
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
