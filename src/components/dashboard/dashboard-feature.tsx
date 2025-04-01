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
    "zxASmm7Sn2MtTYGEhGJJHS7XMVYiu3326e93dqojnPpF7h4n9L5WzfkdAFwoZ48qTiX7TQfJ4vigVEVZE7TYyEw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cUH5L2QbUvizF6fCsAhN4XRbcvrtDETceMdJfePhS6jcoPfusjB1xGkQESiFiEZg6TtvUbxJ4qmZ4KZ8jTytPTP",
  "key1": "KHoAHBh8kA3YfrCMkkHPr3Dk79t8ZG6VmfycvKVii8WkhoJ39DyM4ERZhNHksW56CkhX6ckyWRp8fu6MZe5dxkr",
  "key2": "5qcCjZiNvo8RueiNxNpxXrHq6rDupL2yX4ukBmkidRbhiZSSWGefb5hJRUDJ9oE4bP9NQEGjRtj1AiHjkVqudimG",
  "key3": "SeH8FpuGTYCnCuyGM76vZDCrncJTD1UbQYA3oPsAPyCvciZiX2tCyMZWFegiNUNBygbpEWfcY9L5DsPDpnEmtEb",
  "key4": "4np3CiPoNb9oXvAQBsDNxkposyoibWH8FAC1n2TXREcfFs1ACApsXyDecshXpct96ptm4d5MKNPycrey2yawPyKH",
  "key5": "2keKiAPuzTaov99VYDMGW88Bje5Lc8aDbckGtEWpAkMRD9YPuAYpmLQbx8xMrsoBkgpGZfb3imt9bzEt9yiLWpTz",
  "key6": "442KCTMVm9hyJQBRWnPB2q991n8sRj6cfPbbJvBHycSFDo6DTgbsvWt4H4weytvehdxzPS5e2HuSeG1YHFemY8Vs",
  "key7": "3naKFBoFmHfPb7PW8vAa6AqgPhwCFwZydaDWV1st6hzGwwh4YzNdnQde5AZg6WesNLshjZJGAkPgaaCuSMoBgXkP",
  "key8": "3HiPTAtUdRMFumGoPpz9QFDbfyh4UYd4rfApyHLa4vo4f5qFqKSH3MJVoosegegqeRd1M1baN63YJDJpA1h8fW1D",
  "key9": "52utphbWTkmn6J1kidr8p6bS5YxvS5mnnzbN7rJSEC7rH9LTLpLVVUoMkurTaXVBpsamZyhuX65znyGVT4fYFDX1",
  "key10": "39boBU67PwdFKA5BDRHoeJt1x5DRJu8ET8X9aGxsqzsAA1Gmg28r3xNd4VNp8EzCPSH4MMiJhh678TJK5ShdVSXX",
  "key11": "2aKJxy83jqptCaGJFMf36hhET1PnNRc97vEDy1RTYxiWkL34ZnayhPEWGE2XxdFLrMqzneFXuERoiev8L2wf11hm",
  "key12": "5yg9KJobkSreJL43KAuKQu5ipgwqUeztYTNwA1VffaUDREr4u4EhFobX9JdT11eDcniitxqdSqaM69RJrAHxtJDo",
  "key13": "rWa4WF8r1wCJtAQmJXVFtQSTwyircjFirxhsxYxLqnJy1YUzGGygNXfG4fVZvs9dCavs38dxWUYfwSHuoZ8BBxA",
  "key14": "3Pdsc7YwgoCXbY3f7whe2qrA3tEmRbMyhAj4319R82zNH1PQz7Ke5zR7a5F3zE53boQQ6bopNib411hDkp7bfUU9",
  "key15": "48woitQ1uJqRaA53QoyMpkJap8w7iwRBqpyACyoQFMcff87FKBxeWwKmwWhzw2oAi6SQPxAbSMyzP5LhMmywNGp9",
  "key16": "4uM16E9kmmCREyt3vwL3aqP9rgJqpZ7efgQb1Wo8LAnEHc7S9CxyAaqxK1fW96QfPXKJhUZ47gQVNtangTYsxWqk",
  "key17": "4PDeG2yU9yTJBEnzsv3mCK4b4h3wxb8Jr8yx28BX9P6KNAGw31YUxr6MhZ3cgSqhPxAFVsUanWdVyRRDYgmPGSmj",
  "key18": "5mr1w6rQvgJk3fRArKYFZhF6Nb82sHgRWdoRWdM6Na84CXE4sv8GXVNAjMRif8DrTanerTcDkKutRKWr27oDZzYS",
  "key19": "4Z9CL95RLE98SteYds81u8YPmH9zBii6KPkjhVNDRKFYuADfTtessLGDrx9eEk3HoDdLKVEWYxEV62ADaCLqygaV",
  "key20": "64D3kecbhjT5M7NQzJDCahe14w2cAqADGb7gNSM9RyHpfrn3LXscxVCtteJCEzk4AbGy8Xt1Bt8MkcJNRb1xpRet",
  "key21": "3pAdFJb1bpeTbA53PxCxdMMLsHw7H8h8pyfCM3ZuqvjqgAWkV2ncRAsfJYcQbzpYXiBXAZDBSU3wSviFjgGS5Poj",
  "key22": "3pa2TEhXnCkQxFsnqUvFwXXcxydcaBErAJ1aS63FCuuZFeZvQX68KigJUGthxtc8bQkyaGcXTYFQdrRu24XnpP4s",
  "key23": "5qMofRackG7Q24EhCxyp8MVfcpBKqucXoSfiwSvordpv7F1mjh8V1Nj94nAnqcp96pUWGXfH2ghdzNN9eq4XoHHW",
  "key24": "33H1KW3i1buc6EkQSGxY5eF5cjFH1Ek7s5fE34CogtjaMvy5PHRwSztYYSMNPS1vifW4mDscDDiTuD9JtkM9puL8",
  "key25": "gBm5GaXEiafSt2nYK3V2QmC197gnZcBCMMiorDhfpbdxUtYAk5C3aVevgidQQz6WgeMtMA4mv25XUWipUHXb2XM",
  "key26": "UL5XfnaD9DEmSUSjfgFMVEWJGJyt4rCZLVRcw2kmLTkBJwFJ8HzmiJWupV3vToopwcWUBNKdVNH5ctbz2JANt7x",
  "key27": "2RKaeAiu3cCJnUCCFd3H1JqT8T7j2vDrDu7ZdRGKz3PR2WhNKrbmrvcSPhVNTkDqpt8YRuc424N8aoG28kLC5zQ2",
  "key28": "5JVBRi7o2KC2rjPViZ2MExwehm84m2QggVdTPaqgsWouwmKN7hdHbYS9PzqtjD8rwsauWc1ukDXsq9qSsaRxJR5z",
  "key29": "4fJe2ddQ3MfcbucU1mo3RXNLT9sAnXNUpZUM3nrghVqh9YAaKjySL23QD68cCEmdUeHsXdkZj9D5eYSegr6XCed6",
  "key30": "4NcyUnbECyjTNTWkzTZUjkyF4HuBPwKvJzR5ZGyETU8zPViH6MooYWJ9oBrcKtLskrCAWYKNfHZsUHDRRZR81Hcw",
  "key31": "4ZL48mYD7auV8x9BxF3juNWCR6AvbrR87w8Q3xj4tBavfD3Effw2rrjNDAeYcBfGzrAuKCEFFfVndoYpUActEWEy",
  "key32": "3KoBJkjMXnMCmKqyy7DZveMHf5NcUkBVZ9aSJYNS5pqtJF1SEqdhPMryXkqVz2DvWfQUqWa9oMW8knEygaz1BKy1",
  "key33": "5dSTGPV4nNB6sK6fuPFSM7xdyFCFQoQWyHGhvQU4vowdWarsz3tJtADsx88XnXWq4XmHeSKy5gqqQkbXkEnNPh9p",
  "key34": "3W9bqMDt2kjFT9Ru6oMG5gCtmPbVguQ4gPtXJRijn7eLmW1L4Xa4TDkNYKqrD7Q6rdr4WtirUS8herMSLrmZKBnZ",
  "key35": "2FU6BQbZm4ETBDH2BPhiyBBpYsHmq67pqAayVZ9AiVgHcfeggkTMizGxeT6on5LwCZsMYeLTUigGqPzEbzcoFDDH"
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
