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
    "2HEWM2vv4w7oXMXXQRDnP6LuXHfopsbLpH4395QE9zijPmw4j8Mq2NVbsviaTrCuhDyRjDnM3cJeXPtVE2guHqfp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VkQXmnskA9JwV4eTfwR4dMjdQxbPuhSMA2NF7RY5RLGBdU66ALqTbBayHsy3TPkxN3PVM4LydMgvBjwABvKHJBA",
  "key1": "5yZupkaExLMKnCCr6AHnCifYvMSD8XvH5ManAFGwZcb1kGdu2rd8rA4k9DzyjC6SXNnccHYEq8iZJZ2fQnE6TT2o",
  "key2": "31YRnwvbNJ7HdrcpjQgZLuMdEFXSKBvjLuDQeYGMdZWYQJb8AFqXJWaYwxJP7LBhuuY5bSAj27amcgUGZEMD83GB",
  "key3": "LJtxbfDWNvJRTA97GDWXUFoFkETqk4kkYvmdCXQe6ggRRzdFhaYkLhPZdbQv5PqEj8nV64ER4LQWNYz3c3xmrVz",
  "key4": "23NxyDYQaWaqctzqK5mA3FiRBQGHp2XupVL32guiPjpmAHHNYX5GZUcbFYpv13BdGVeCnPbFEA2piyichbwXjFNd",
  "key5": "42g9hndLnbMMrZVDG3MEGRRCXhkHar5qK5waSJevjZsLnVdg1RJrH58ZZXPVzaa4UctjchHEMpJ5jzrwgBq2pUuD",
  "key6": "514XQPtKsG8iJ62Q9DpbRzx1pWH9Fb8dmF1gER2ydbrL6gKCFgSmesXBas3NKBjqc3U1mT6UAufg4znNdtJMhi7",
  "key7": "3h8Qy6ovP4MYvib4P4hoevcvvkz31Xvgow9WqHsAps611wwGumZCFpzKGA3ioWLxaUKZ3aehKjvJB9FEmVVE8w2g",
  "key8": "3fJu2CGjDAibsJ5vvgn39SZGZNC5LZWPGVeyo2zgA58YcNYTDk4JazDY9CkeTc2GbV8UWFmoKEgv969bCLEGyqyn",
  "key9": "FbEc44cYhmKr3azKmzqqvkJ5mQeaP8kJNAJ8Kce9g4wH5QEwz6kPRKhHtmek4UB8P95d6A7jiKoJ4hhgVSJW74g",
  "key10": "49CtTNYYU5rmQ8YfFeq9gZcvJ9qHNYHTCgJYzfgRUHoagoAAXjpmBCQ9b92Z3t1P1uy2pqzKA33FH817R6sX9ALR",
  "key11": "2AQTJjubhkjBgTnnmQNch6Q8BPgRxDXsQAG1UyQjT31wsT7daLPdjy1NoHF9miCLUgkw1bvtbauSxrV5MXj7GLPF",
  "key12": "YtBvad5YMHgapYePGALXAt2gj1xtZ95AxA3HdmthEQmiYcHdJwwcCaQbz3r7VGeZA4yNYEGkBnLAaqwSM5YVqFd",
  "key13": "TsSKArRES3ZFMeem3Px65UkZNca5QVkLL2fQrbqdKZDeKRLs6Ax4BVogiHc1zDzNNT3to8aMgtmX7cBwSNzw5S9",
  "key14": "4E1PJMBQRky1ZC8CZ6D2mpfU5gbY4TkFNCkT8c9HJeMVQLwrqVTTWfHZW9NqdxYDHskBzpdpaSYBeLowpP5gUEf2",
  "key15": "3eFhgob6fRRztr8xySEjcmtfY744UDsmG5Q9cALQbdkuq9QtBcHrVL7aWo4CzhRUfh7Y8CPWW4fujMXcBvVJJda4",
  "key16": "2D6iaYhzz9jNy883ZZCDmqPDKjmMeL8gugtbq2iHDTAumNeZwJcGtoDA7WxUXi7qg4G7pkLCaBVWkqX37PK2SRov",
  "key17": "4o2Bj4SeeisZd2cSuGfsX4kdVeuohD86KL3NYyT9VTqrTZwXN5PY2cXbZzT93s1U17wU7sUS5ZguTXPE8h3w1Lua",
  "key18": "2NMovCWZVn7m8k3Hz86j9qyusxWVQmUYhtw2VAHdLyLA9mwad8dRZcnxtAAh6qktSUVViMJRpBX2tej9uwobb8uW",
  "key19": "5rx263kbnEq6R6UCE4fdxkaVPRTTynMRfzipaUmVnKAD5pv6f46NNxrsz2f1vTUDMSb8mWXzzUgbH4uiyphmjR95",
  "key20": "423MJEJAvSiNvgV8UJxdaknRBR3ModxsT3kphtjyPMnjXDjvU4wVNZg457ACvHXdoM8fTcuDPv5otrdnEgomxeAN",
  "key21": "R77LVE2WpQNwRPcHuiXkWir8dHcJ2R3f2ATXr8BrUCWmbgjgw1jKZWvFxEZo8KDyZZBxve1vR4cRoTmRqCMbjbk",
  "key22": "61GY2ZckpKh2KZQk9AML52z1DWzZ7PgztoZhHS3rSJ1go1kymZrLw51G8e4d38jdRvojLMDfyM824npayxnoyEya",
  "key23": "3hkrpqBYDLiP1kZJzj7yDJtBToqiDCdGvPNv5htuKLYuf14YyGjkGvCsfyfqzvBJ2crUBVRFs4MyzeTtRcByK3me",
  "key24": "4U4nNSViBhjnquYMyUk8x7D2Rd2eeFRpZnmdQhGsaedbi7rtaJYL5uaVsX1QTmTUK4ec6LicpEuPqu4nuaxUiAdz",
  "key25": "65PSRgM1m7StjGZswHMkNnmbafhuBcon3SazYPf1xtxADM1kNExeFqt1akfRRWsqvNUCNhe8BoWY3kEqe4TtP3oy",
  "key26": "5d39dVMBqav5TKzsgP5Q8DQexdUzCYVHNeotLQhuHM6kyyBiAPzXyPEmoQkMmiL2rNjjFoLe8yk4ZRY7SHPBHxTC",
  "key27": "56VKGTvYcycG6HRoKLFcr7NL2Yve31fkWau8iCPFi3LxqV8tKdoutTts4rsGRpSCpcshzxq7UdpVm9P7kcrraJkd",
  "key28": "VufsgXFEfwDsx1YVV29hEGubdzcviWUyKniMwgqMeStfMoLVQZEft9dmmPkde5Xfg46Bmh6qwZeWrfz1pPgya4n",
  "key29": "2HVFyxstLwq8ip94RAiPtHJa5ZHUJFDNv1HYqApauLKKzH7bjRUipb41DLSWG6Xt4ueVDkJSqVF8PxidU1e4fBn4",
  "key30": "3S4XYbG9pbzqRP8WveqHLvjmpjvGDUVMRfw7Wur5aczfg5vJFsMGwce2XVsw2ZEr4JGrpUMQXAGFDtqYc6A8ZFEQ"
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
