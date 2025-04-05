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
    "5WrsRDCNoqbrhxmRYmdHPSQAyaE4A6E8ThKdiSpjq2HuLTcncTK5QyzB8iJSVpwwi2qDwFSJzpet2g5LbYjRWB6z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cg4LrFmLeThhaoHbBtYAG9MZci5Mjs4vMszBzro9dx4hJXsjg65KZqQEezDHXuYx7Xcay96bcTrE9xbP8zfpSsB",
  "key1": "3PGZetqbph2V8pxZCsYNKYo36GpFHEEKGoXFvALbhbQzTyEodYjR1sFv9Y2hGTb4xgMcGjRkQ9EvRYGkVBFh1qfU",
  "key2": "2sdZ7AcMZGVfxzzMQ1djPt6949QGk48zWuF4vZch23yoH9bxAJK3eKiwygmGmUBD2APLY4vH2AES5vG88SEU5jWw",
  "key3": "4duSv56tyjmvew7xwN9H6TGsnDUNDLifaZ6KL2CT4ycc9LzTTqgooM9P2A96p2YZNZFpADXezuJHEqY9ai4SaWtr",
  "key4": "BW1qAaNAZbhcN5RZ9B7PegKMnRg7zXHuJSRbPkmayH1fQgJRxGWuaDc3RKF7rkdGefLN7p4ihnoP2j9eZNoZ9i5",
  "key5": "5iMQJfjj7JYsT1Dx82zYPi3c4NgJ9EmsTgxnxZGyqbY73BFhYHeB8P7weppw14zHidPrrkrxR9cS1Z5DSi9cuzA1",
  "key6": "4kZDod7KrxqU7hm5pzaaEtesBJ1F53s59wmmMrn3BZjSgCLjS48wWawrMEvmTkfVZFwQTJFMnKGXr8RUPVRAtU8J",
  "key7": "64jwh7fjoKXC8NAbHrEEAfGGngKq89umoBD3vyU5CVBkPUsfzJgbNuyjwPApswUGahxG94EzmC9vPzeaRpUAL8p3",
  "key8": "3jVrfMQNPjRBShUodurLuULHs1C9yb1Z2YzjhJ4HyLmZ3tvPs8pnTsr14n6D19rqcb7WL7G28dsPDyJczZGJsGwg",
  "key9": "5Y4pVYXTjBccf4AveM9UrUDZRLjR3GriTrZbhXLoyorz5evEXHnrKiLEz9SpuFTqiqpH1P2d9rz4YdWrodFZHSHS",
  "key10": "2VeYWJrkdwonB4fikv7ExiMNdBjVPK8iF9dVPQYo61ykasRnG9Awr2SALCQ5zJ7UkVuuTbvydkxyBJTXVq8i1peD",
  "key11": "gYcANuH66a9gL78Kdqg4s6TvzNRMRRXSBQBj3Bag1SmkbY6RAW2gSEczT1VuRH6i7B1ASN8c4H8p2M1QeLNQiaU",
  "key12": "4w5ZixVNmPTh21dMnqH5SyvJJoY1sQxxdbGdJDqgjUvqUAw5dqaJRJsGY21gSxGeNj11dRx62wfijfb5CwJjnj1M",
  "key13": "5EHsF5BT2iVR2vTaXoz3d1siHiK4JgzEwWqP5Jw1dX3rPK525UB5i7SVSofRp6jcW4ZyXzrwKPsZDZh5J5q3rwor",
  "key14": "28nbrLYx17g4vZV6CKrM7qzRaALkbPas9EA6uFFmnn225QnUSsH5St1RV5g8KarYGe4yCps6CXahmzKbhcGyYcFJ",
  "key15": "47K9SuhYu33ySVovzj3MskyiASx66cTmiY5Cqz9XF9fPeX5AY35uicfKVJGPsvc1XY3swpxS3YXfAonwqbDP6tNf",
  "key16": "3HNyRnwEmGxXNuFRb9nyCM2S8xcL6zcibDV1T3LCRRuZ8CiFU8FKjRMg2V6h5ua3SfHMLuZsFWw5QeTvBC9FVEdG",
  "key17": "5yFB42qeodqUkeYgkYSBPK4aWzsytv77F6u2FGmGt6Ud7MnT6SBG2oaBAdQVvszxNPAEQLboMremPCy98VBe5nvS",
  "key18": "Bn6XQEZZMHXiureqvS3Wip7Kb7HH4bSgGcAw3ackyjFkW9E99Q3n7RosHs3wZiCkpwhHwW3Srdgzs92DFteySjz",
  "key19": "4nAQRDvdiLqNZmZgbRHGBPoDPHhi6tk3TCVZgJDd3Nw7xp6ghcyzrtSqNGnVskBhmVHretouD1b9m5RRJnNwABPF",
  "key20": "4PJH9i5c6c6fFkyUgnkHKGqnAp48wQmWVkntyMtr6mHZyuJ95YAzYRjfWqUYc57wkJfCDyWKUm2bFhrVEppGAMu9",
  "key21": "vw3cT2DbWMsPUBbQeXMYnPvyeHvo61mRf9mxnuh6u5RuivzS9e2mZUkAcSFw3SgCgFiERyPhVUaYmGhEvpEPJMj",
  "key22": "2DeBZ1Dw2tYyPxMUEFAPQYFMcRSUyPdcKTwLBsoQRaixPvQK1SDU7Be5EDAGhrwuJBDcjan6byvqm4B4b3k9PMqq",
  "key23": "5u6wTANPwig33XPqFsW8znPixYRfPqPqDpcNDFqzZ8rw7Ec26WpzHCFstnuQriGjHVj6tNyrHoA9MN9wvpWKd3n",
  "key24": "3XUJBuwjjhF5uaGqFHfw7R5SSG6QfBHV9S912Dn4tsRtrbwXpSgY2P6831nNksCeivzuLm46jinvL1KdkHJ61ofu",
  "key25": "493mbWmdtBznozDVY8DroUFgX6wDpPZqFhJYqLwk54Ey6GscRTtxQD1Aki63rF4AuhcbBSSUKeCRuTiDp3dK1yfT",
  "key26": "3ZEcEK63EgeRwXxMqUShcASabQTBtjwkccxv8zvYUd6tH7usHoSXmPxdDg8ArM1YWLUfsRiPpDdeFAsaVMf2u9ib",
  "key27": "4mUwzk6AptYWSBrwu9RVJBfDBPcnU21HEvvaCuzfnhyS5iG3n9TmX8QiPCcxgCfGPBtoWDM2fZFkTatYuyyoYvhG",
  "key28": "3aQXsySuFbLSXaeuZjrf6sL8Vb86HgjBfAf5yjaM1ZNiijJAsqiai7HeVwFrGNwW3s9CgQBhvFn7eWyeemP63kJa",
  "key29": "3Y14UftLAM65buxe1qwaEuQUWVPigTf6vXbJ6PAe6NLWmaNukSsELBYNDoc5mvwYgiKiSTzpc2WYb79GH8kcnpGW",
  "key30": "438zgcC9TABKpYXpdZ9yd3DP2dbe27bHXrASvsfF25CWe9ksmPsqWvZ4YDA1fQHaUtzMdVHfKD4RfiUHnZ13YaGB",
  "key31": "3yHrSqkdYyxYXxihh9AvvSZGr3syxFDghgF4e1kD93YXSYmWbM75LrjfQ4Xts3KmuL7otdxNFhXQ6kN6fvDf9SPe",
  "key32": "2vNFXgrC9Njfteidc2SugNus5U9XRostXkjRFtLxdtapo3pAkewZwDnK7EQHhdUNtvNeiALnhXPUQHajSK2yKE2h",
  "key33": "5mpKDVwCooqk5LgHZhKdM9zi3Rib3hzx1os2REiRQLw2NQncF8s65iwUJDxZdVDhcLtLBX1bxmgE5To5NUzdUjUg",
  "key34": "67qHbxPtBwcnRPyCkutHcY13iYdF8dLpRLnztQsWVRYmfXjsnqqU3FYJ6bEK4emvWsFKfwzaqXSuLATdR7xYtwEw",
  "key35": "5hcopNVqPCAyyyKuAY2iboc5qdmSD7W9X2GmC81EnJne5vzsuYNnGpxkWSghRSQ7Cnrg6jrMFfz7Afcp66n6TaKz",
  "key36": "4Usq3xUbB8MMDgF6KLsqgXRiDkrEhtsL2sFpN8qZXv9WsiXUSb4p89bgfvWzT2doUbVoBA824JvuonqYHJdu8Mic",
  "key37": "3yK5ZRTMmAxAgpKwfc8b7dzT3SDTtnp9ivntRnkGcpcHU578WrRSuxeM5yjLuHijtNHakgf7tDbFp6rv6NvFyyWp",
  "key38": "5qGktwioCAGLsh55ueXqSEDaXCcmWZZzV7VCN8YRfZdLAEkL5HTHu7K9etwTiKLifPuKWfacmxyogVtJZzibe2VH",
  "key39": "5DHbZk6FRPPeiv2DvuWVfUyTtQgpbgsHHDhVMxvAnp6bVDdscW97TV95A3EFYvfBGMwxkW55WbRt9QgGknwjiuJE",
  "key40": "5Njccv4WJZ1F2yB4fZdMuXAptG3PASojSjWaWryi2MquRrhuzLjFdJVFU4UCG9ATvjoF2NmBdk9yD87bz53wGCbp",
  "key41": "yX8zx58kGHuCHmmqa9xdGoXKwhVxi7HnAkX1RrJ3FZJWzCtfUhv5vRwBGz4byBVmfV3WMUFk8V8DHD5E1BWxSE1",
  "key42": "3Jh9x8uLQF8saM3o8QEgwQuU9fh62h39maSu397n61yhASFHrps5fyciiQgxXF8RiR8x6X2sKpJKuvY8bBRGkyt",
  "key43": "PnJyi7QpK2TusVhE1z4VbS2bZ5BztU2q12ZAf4Pw1fYsy7kLrzp55nuenNMmTtnbh8qPoCpWVgfU1jE6aq3o4HA",
  "key44": "WhYgvuyjtnPuVZUdh2wtqNsjSoyXMxpATBKXXNUA4nMNxBWAYc1Xyw2WmRMpom7FyddniUWESWXSvhWmvr26VrY",
  "key45": "61aona1wBMMsXhsBMrynRU2HSo2yeNmRcMBPLWJK4p4xGQF6K87G5GRAi4vacqoDNy9aRKuwic2dbrEDDahtjLV8"
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
