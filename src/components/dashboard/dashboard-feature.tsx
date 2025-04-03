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
    "2kajv3vaHyLf4gjGC3yTeXQjuwTPwE8XaUoYcZwVbrHaXSZDis6Z9dH88xjkRbLUMdamyJap7PPJDzhNRKkb8fJu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3msbEQng837tWSr9NW4zKtodb1u6UxLNP3bjuSV2KeApjDsjzyBCANuwbUavWYTs1a8g1sKy76bYXz7dUgvQRx3S",
  "key1": "2Xh187PnuQz3QjJkok5Kc5YPs2hmEeccbBBjEPTEZZ4KdFUQmHKc6cAMX1eXUUtGCpAxCs8tvjUHYeRCt7G2fsZU",
  "key2": "5QTBP5D4dL2x4GGxJbtGywcdDVreN34qiEgekSeidxp9qRq3Xa7mfojopKBCaS1KfbGr3uCTsHkDE6nJ3aALjAHP",
  "key3": "4RGP5MduR1u3JT5Tn9vDJitxodr81dy4gfHcpcbE8f4X28sprFuPSVRDVMRqFv3wKseC9P9AYTMNPZbqRW2QBP2m",
  "key4": "4uJzxT4bmXjLZabXazbWdq3SYvGTPsag2m3gt7qYXNyP3stQToC2p2Wq2DKZoGwVyTickfcsghtVJBqMd39kcBXy",
  "key5": "5243EcMrU6zHJ9xW8QiT9ptvq2ARLL52fodEUeeic4wPakL9SMpd9C3VEKvH2PNjK4fn9hWGsCTZkvRzZsog9U4j",
  "key6": "2Gni57rNHsFi4HwBe4jjYgvPd7ZkRHDKbBPpTyVF35pGSDjwWHMNnZMV2XvqNY9gTv1M4XCzJruCXDBAMEHh4DYP",
  "key7": "4YfyoGLBijsWKuPA7PzPD6w6oth3FJwNE1vDwvB2Py77X8QsAFB6RBp3RrUvtWDGuKfggRaqczcSo8pbkEsrgkPP",
  "key8": "3vqLi8sNFWx4NxJ4i4w8L7ypTmgX4GaDbywqMsKSrpu9ob8AM9Q9sQLjARTSiKvxV354EQfw1iB4j5DupuY6XXLK",
  "key9": "4NQHMgwXmRkGxh19vKVCBaeMgvHPj4FETFNm5DLQsKYFXnzuE57BYBy3nqPbdt9cc1D78VaLhy4oXXzqbwHRsL8k",
  "key10": "6UuVdCsPQANbBGnebdTxr6EsSe1qLQCGd1uTppmFnMPskc1ZmH9oeLSxN8DyWRwQKxLmeQt8cygVxHYuwQFNqf9",
  "key11": "5EvVmRVBoNnGJH43kJDQbAPz4X458TBgSFNnV5xYLPVLh6GRXnzQgjz1V41mY1nxMREo3dpHSp6aiwXESof4eqUP",
  "key12": "Y1dpTQ7XqdJp5SwiLDmnRHdsFEzcKDq3cHy9L64Vm7tDHTunCDpUptmMR6fUN8xYfQm3msJ4yWU5Bb5fkdqZ5kf",
  "key13": "5BBjVEgHePtMYpGjTsX6nS47ZdrdVG75fq1MYa16YKt4C1Lbzcg23ZgNpzKZFiMNGBAV6zANtkaStkKsubC3CDbn",
  "key14": "4Npv944GgmUeJGJZfMnRuQ2nBdwZ9AedRijomM15FJTqjsVb9VmR6ZNnQRVwNvBPfbj6TJJ4z3T9SpkNxWZDvCxH",
  "key15": "fJMcG2qfV6K9zbGpfxFd326Ns9CfV8mKcVwebWb2UaHAgSnfW4c7fGyPUooUxydNTnvwTSB3YwjaSWhRgETdztk",
  "key16": "3mjzWbtaeNmrjqGTdGX7n4G1JN5od7B2gwZDuupxvaUTzged9mbTQ3vXLarAxJPxDje9W1Nk9ri1Jde7EftGfiMg",
  "key17": "5KfYMRbh2FmRuTrWAuEs29dB2NpRX3pfaKo5x4iWtywBGwF6aWUP7YRwjbWqzHbPFGeE98J9zuKaa5mWnCuTRm6W",
  "key18": "5Yvh22KLfPZ9yY4yCMDEDeQNF5rbx4BHqQKgK2AhkqrCgHMfNLVyB3HoY8F45QdHCN4HFjxVeKsoGbRngoyEx1hv",
  "key19": "4uq6UivdpKEqqHMMK3vi2EfWhUrDWYzr68PVCrDsFyYSSySHz8VqLRVwfZrDmjBbWMJQf6oUpEjgdVxuSce1W73P",
  "key20": "5zWjgJn2oN5VuQXxRZdjF8zwrhkxzYgSK8CMu6Q5NHjpkJKry5A8WrBky1BwA2JRa3xLT8yyjf31jnJ5bCntmwZo",
  "key21": "5EwFMydGHQzez2bwVkA8i8u41cqskysZoeGezK9yjTnoun2mGDikjhcv48r4HCTWkiY9TbcSuguo7zqUkd69YVHk",
  "key22": "5DM2SoqBbXTXNChFkpJd1PFvEC3AGu7QhLFjWDyiaFQh8Nu8UoWJ8cipC7bzBNXUYGZtPEE5LYMA94m8viZCYCE5",
  "key23": "HYfptUcDGsxuktKNns8neY4p5WsxSqA1nKNfhFDD3eVLtfuVXsdNGUkmQEj9aiERYu5F5bKwzF9njicVCA6AkzZ",
  "key24": "4Ri18M4xsUyrGtg5635WY3Df6tutxsSTYz2zK6FdBFZVoiWR8L89QsHp8ikzeqpAFX6PDdE9EvLZFLkd7N8vc3TT",
  "key25": "4zUPCWfNnprY4PDt5xF5rtnWeqr573Agi2CviitAykeEpSEvMKD4D6hmgpwFAdezCoj2uFEvuMxnU17othZLaJEN",
  "key26": "3DBhdBqsbRUfjMcwVY8Vy3xyqenj8C7m7ZtMiH5NxU7vbWNpq9e3uwAvQdCdvo6QjWF9nUj3EcUeFUBSKj5Tr9oz",
  "key27": "2MF8kevYWeFyCr9ahTrpbKZifqUSoqtzkCqWgZZCwsf1URiv92H9h6D4C8HyHQGQ6UeKLjrknUUv3XaxSfaY2qAZ",
  "key28": "3u1WdhARnmiKS5P3sQhoXzF27KebzFDL1FAynfWZfyN41szM78K5K9EH6dLgUkYM1cr1AmMtVcppHRWa8P3yhghr",
  "key29": "3cP5XhqJMpJDzY8vALqbGYstvshMEQvUQwYAvLwQKr88JDfgeoXGt6Tu2kDGpbTo4ZJGmHBNnHEMsdbEq9jWQyzh",
  "key30": "2nApy23zPNdnHejtXgp6WBBsNmZXaHLqJ9eQ3EusNZsWdRxVEi3MP87EPJxLNEzViZZgSWPH2DjH6hQivopsAJH6",
  "key31": "vEHJqDckjSCNiyZ5kHZq3G5Wytt4c1adQvLygUNGd9sCW5mgwdqCAHKt3yZTpJhwvoMaEYGLUR7CBfhqrfUsS1W",
  "key32": "2MvLcSn4BKBK9QWVRy3iPu3Zr83bRpLx5tFDruKjdFCJ13RXU2HJhCJhQjv6WUu3gEYoetFCwCqknJvtmSyi3cFJ",
  "key33": "hxvDudyVfPtLZvhYBFPNCJSo2nBNfdkrWqfFUbsLg1yF6omGVeHHfQK5hUgRq1vyKvVfeFbZkFcRyUHcCXv3ERA",
  "key34": "Eue2MnRBRXq85tvJaREEPYG39NJTrPoniDYaz56hbuyBkFZ7jH8xA9eUHwQyq1iANXmY46hba38aemnL3EstM1q",
  "key35": "5vmbw5Yu7oQeXZndusucLZ6u5HoKGzGSBk2EoobDg5bJDCTKp5RB9WJZdWM7BnoimUXGHk4vd8heSPB6R9318tFn",
  "key36": "2BVmYgWSayfjv6doZvdxyQGs9h3yW9Vb858roaF6BUAVBYn34mDYoMwKpqTmzkysReMy4Ky32Ftjn8kH6netnAD4",
  "key37": "3rtxCVbB9UXbb5BwuszmM8Unj79QK79pQquJPcsgFM358b1XY3gGEJNadzNAMh4D4B8W5TsxG8JVQ9eksv5a55Pd",
  "key38": "61CYYkXshJFZRRnVZkCXS55LPQUk7zfebee5p26mej9y5kdJuox9s8uzRXnfdqoFWFXM4ZJSfg2jAcA7jQPCoCuP",
  "key39": "5gMcsv2geQoUDmAyuc6ueGrBJ5L4cd1D3U1tgor6qvMfZw3jvmSMXwdRZiaoWYgdf99BEdbuKs6cYCWhPombaz9a",
  "key40": "22woAWUu26hDdoxb9S5FS9oPdemG24wb45Lt1Z3ZgZigdg3P1dhUVfDMWe1qVLRxMwfxXzky7fZJZoWYkWRd6Ach",
  "key41": "3ycvExxds6Ty3Z4LMgF6UR1ujxvnuq47eTCWUsDyrUrD9WP2R2Zn2zm4ewQj7sGv92c8xAVgeKViz9B9FBbsjZU9",
  "key42": "3kQvHb1GNcQMhENUSywQytD5wWnuHZeB1XPpAcDbgCBsyK3hiEw8ySqvsFpzoJWZmr6ssHdAdLtogSTWKZ3xqBWV",
  "key43": "bzhiZBP8Cv4Hwwd2zpGqT9PDJsYYwrWnDCUc7t4ZDdC8yFF1Bxum73DqXNMHZ2yn9CVaXi5LXHVrewxksmZYRhi",
  "key44": "2RhCTAzZFwcGcesA1yvPbxtYEgCjgspSmgSMSHqxrRF6DoHaVj3HX5ZqQN9mbz5sMh3oBaM26VX2cfR1as3QUUdQ",
  "key45": "3no3EBxtJJCLvLrZp4gyuwQJN8z1iUaoWM2DyFPHLN3hJupp8gfgYMFPaiCn5nyN6rggVUpPWuGBsVxu3YtwY1bC",
  "key46": "2tGFfgeg8gyhuTGtHXoHtAHTkJQH2k6rFwoonvD7X72g21Hf2GSRVXRQjXiKuv9JBEAG4ZeDXGLuCkuPQxLt935y"
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
