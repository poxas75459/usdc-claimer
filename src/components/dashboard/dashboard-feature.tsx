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
    "4LPuzKJD4EzTGbxbW4EyZHqpBKvcF47hAJhtszmgaVnfyvgn1T3bLr6oSc2on3pXnxdDWT5b7ES4zPMvGC5PcB3p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hv5QxfnwzoNA8gmYme6dp41vV7dZAwLJYTPt5SYjCDZigD8FnqGSjGY3HsXoVXadHYaSR2se8ExFsRcRc5qQhr8",
  "key1": "53FS8yxgGip4BFpMXNJpJdRSytkWcTCYwUjGzQD457Z5hC9HPwHYPapxo6QBpsTiTPC436vk4fpJ23F2hvxBqFo",
  "key2": "5etyeyJy2LGv9oQiNAU1dznZGvrX2dUufkeDtXZhSn6W1BUebEV2fiuKpRTbunUTDGFYKo5KAd34X1LZaMd844i5",
  "key3": "55rwx3K9apEwMeEnhs5WRrMb3U7Ech821UTMvF3gvLzNugWzAGU8tLtBopfxpRy4Sf3wRMrYzVnS77F3mMkVzofD",
  "key4": "4MsLvf5f3vmQSmSQh8oMnLVGbKu2s8obFWvwpwWEMU4tKze5trvvePsAXbZKmj9P5HUwJ7A16o66J38Shp5yVEaq",
  "key5": "2W5EDYx76G2pgpAg3LHDBWDjCQdo61WC1qfwBTwY3hLzdvMR7QR7vY3dcC5dUQbDkktdLJQQQCHnDYxEa9pGh1PW",
  "key6": "29jnwsUAUNSpWZoQPpnFwTXfKjRXcngttApDSrEfsERhBsP9RmKaVgjY1beLacKuB3q1D5vjPgPeSncudMmtA7Md",
  "key7": "6g3Tpwsa97k7FPJBzvLtxddKszA4HBAoTbcgEKFWkxStFRa2tPooqG2GLV6QVoatxwGVg5zZq4mxu6jhxAa73tv",
  "key8": "HXWjZZvGzvqY7eCzUFasoffJsJfJnkeCn2duCMq3Yaunf6DGfhvytRSNjqNQeZWed68aExd96kLSCpRrRK3vAND",
  "key9": "4iQa25DP7z85eD4njkVuHVTsPLDZUQb7tApcYfKdQR55qLK9ccigkqzJqrjFy3E9LMv1ad1cpnxUYgZGy4dUrBmW",
  "key10": "dBRRgNQ1dTycmxZyYXrfM1UfLSPn7oVNDALXND7sCECPFGbev8uP2WYoagxpn63XAxQL5RGLniFGxP7ZbrhyFvg",
  "key11": "4tNtueNvd922gi4fmQbuJKKMMSioHzufo5EcxsKYfuvg6hZEuEoo7RohkigPBeNM6vkJ26jwdtNByMtkwhRGQFAA",
  "key12": "3atfCJLhPTfGQRoSoejTHFUnY7UrcfGjBUm95ZkSM5EWqaYhx6mLjPdzCKhe2gEfdvab5jx5MwMz3K6QC9sQW2Hc",
  "key13": "2yRopezgFV9kFW6AfrJhiRWJaP4JJkD1CNcBHJ2hCXKZKiQF7kdDgYt2pszQijWNQjNRkfxHMfYBnnX8b1ehhNqo",
  "key14": "3tmpSAXskBfXtWbrenN2jLQwRxMg1GDZ4DQdBr3EaX4rDVjtWSTectCRxB4BFVyTWQTvfS5XvSSK7kDvsQtKZHwG",
  "key15": "5y3qTqfxC6k296iy7z6JQuMQv3QvUwvpDraf5JFk2zHk6xu3Mc5eYCK4satetx8jCihXS8k7ekAnsBKFYFXfVxj7",
  "key16": "oZ7FfJGC6BM89MLXUkB4KBUXZqKAaNLdc1p3HKurcU5AXFeQRrKqQyceEMpa7DBEwQqyAb2mWwL7aBTm8tghHGp",
  "key17": "1Ev7n8WyadZ6q6ZFkQeYrWj1esV7RoDvd6gcMoDfLzX9yhwanc9JMb4tLdZoo8kgsJ8cJ5Px3EcPyqB4hvjX78r",
  "key18": "5XT65dfCAMqxuN8j94xqGotd8CBtpuat8NandUp45AeaX9YwTywwDDKigDwLzhsYCDar1CJJsfjzK1FbkrXWD33J",
  "key19": "2vktxyvX7gkzybs4hrnLzPXjhgDWHU384bkc6XgUgsNVkuCUKSW9XMwpJqospU2ckdWK47LNucgZpCKctFpEgqem",
  "key20": "2AZi7MSiFN3NG2EM7ntQZ9FaYkdEfz1GHdaeLamLnLCApypsKrz7BfUv7BhM3VXLpsgpDiXzsSxHRpiA5a84RCWZ",
  "key21": "5QZwEiSudbu3nFF9WgLokS91jyodc45USHdEy2KytAGzKdDkDgBrYdaXFEaXNnDUbc2pqskkha8ByW6t9oopDmE8",
  "key22": "58FJuqeX1Qme2rcBTURHNZhFME1VxdiZEiBuwFKoDEzboRJPqxRGWGwxk9sXttRsZSuEnaah7YoxWCAuEBnonaAf",
  "key23": "4nFURMpcoPdv7PWSBn5dT39Q3zn79TjvfoGgY7HVbPRn3ToUbcvMLHJiVCeZ5eWBW15rPeTdUeKocSiAyPSsNCx1",
  "key24": "4riHS4eM5SZFTZmZ8FbmMTCoUpmYa8LPTrom85P6ykwV8UawNELvXQpXrPpiijzwXnM2TY96YQfkPdbKJDkbunkg",
  "key25": "46q2yQYdVD1jLntUk2LZTNaXeW3WEGFSfB8NZ3SPici2t4kx4DKjWQSfm4wjjsAWgenyzN7Px2B15tE8DExgYyVf",
  "key26": "24ZJqWjoMJU5RPLaGkKHVzYKxHVNoAxQyWmtPzi7SogVLi97E8oCjciSHEbnwHxC5uXbmPvdymczKy1AvQDMbBcf",
  "key27": "3nmJDiHPdY9Z8Qiu31pVahtUkXweyBsubzbnDsWQHiMpwWAo2DWWY6EtETVYmrCNGzFpqqtQ1imsYgVA89rMDuVo",
  "key28": "54mBjjHuWwrF54oGG6YhmzBt7Rd5sVPAAPTmDU9Pv5YbkcEH3qbBCy2Y61XABSs32sBPS4Q4LTDG5tkhARmuT2Sz",
  "key29": "396zmzG7d5NadJCScTuv7VhfVgoMwVkNxspLfN9QrqjLih4XZVKifc6XRVDxXrThkxpvqxHMj7TAr8aBippswqLC",
  "key30": "2CF52wr7xqUEhACyryGR2husGdw7Lufont54Y5B8bR6de3LnVxv82J4JdtkdgrocyRq9eNABDiai9a1iKpkZGmjQ",
  "key31": "5qcPX9MeaTXUgZLjrAyvcvejikMCcRbZeaCZcWAu2MZ8q5Fng9b1hhWp7AVDveq8rDe5ZAH9k1TUwux5eC6HeBeE",
  "key32": "4qgknyRjRSzMJD6ky3wp8sMwVaB8XVLVvEND2EmfwqZ1jKiU5AG3wg4BP5UZqGHt1KAC1GNf6vSzaTxCdqHEahYv",
  "key33": "26DTMnzzNEZy1eGdd141EixCZhVtKmUfqWe2vAx2JUoJ2sQ1UgDKsC9rWh9X6PUBBo2z7PXSNxjm2nFx6x1yHyvF",
  "key34": "4ZVJwfjgv2a4Ff5s9WrGS98iNHSYiqvmiQ63cH5Xd6KXFsgT94XSezEa8dRuxBVPqxEpsseDE3uDqQy7yK9CXSnn",
  "key35": "5G2gyDMgniG1tKcWDPKzAQkeDTPir39Q962xzmyunwcLAGNhhrDaDBdyGzZXmbYVNGVJQuHKnTLbLpM2vurZ5HEW",
  "key36": "4oJfNYbgCE3Pzj5UhfF8BpsiD8QXGFvfhy6tFj1K8snagaCxKFcA8e8ABbfAUbEY2mhD26Z9n6bC6jyn7SnBDoBx",
  "key37": "J9VF5eYLkjVpFmDpaMy4TGvBKWJiCFYcTL8s7fUqPjWUiiVrAEQTEVT1cv7Zd4XZBgNrALZZMVrGvUn7dcCtjco",
  "key38": "2MHvr74MWhSp9ZRHew9AdRhx1cutus1manv7gA3Yb4Grybe6Cce4qU5KrvWzCGN7WNJ3zUate64hetLEpN1TJ4qB",
  "key39": "3mv8zYLfga3a1ufu5a5wyj3TQ5LsXJ6iwjvdRa5mBdBzYa9gmXyu7G49v7Qav2Qkxmqud9h8VkfY7ZwBAg4PXNyd",
  "key40": "3naz8jau41xEdvEeLLiCAnASSGkXC9wHtV9ABbg1pkwqSQdGPWdHeLR1AmkqAkyqirJefgwWRBWP46JF3JqT81ZY",
  "key41": "26KKuuoK1N1nz6NrpWorMUrzqGPHAnhocz9L6DrvBbf1f2rAQFVkELkM4f96aUAKCUh62tKu8L2bJcVLany3nzwb",
  "key42": "4g6yRLCKDJzAmnc9PNePhBwY64cJFWS6513e5RHNF1Kv49gvSh1AagiaNctERhjVCTbCDoP8QMRistpdVnSxSN6E",
  "key43": "5F34aLrqKPuiTFcRkgERUtVzdZUseKeKdW8u9eLFmCudHWHeacsqxhN1Xs4hjs3NPg5HSJ6jmRGWWVMcUkJgVBPa"
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
