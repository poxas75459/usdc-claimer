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
    "2u9JH9mmFBcTje6vX4uxXudwB3NuvFC7GC2sCh1hqeKo7FpaumMmGjtAdFsLFieZsN273J2m9hMmvZKbbRW6cog7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Y3XhGVgXT1LXbYakdL9cG9ZA1ZN7AeMaiDDHydgKgjXxJVKneXuBVXfzGBp2d9KAJchrE7NpjWucDJiorH3Hack",
  "key1": "2WGgkxUKF3dECMgSJGQAUw8SsckCBZ8KM7xBKEMcmxsidAWZzwNn4CHV1qj9EWRgyMPC9FjjPQ72gqLVXGUEjAVd",
  "key2": "5VifipsVL1xE8kfnoA8J1KeHa5Drq4rZv5cFLAbuUZHVeKwroZaSBGe4YcbrZzPT2jTJhrGuAYHjQMkaY9aUF6eL",
  "key3": "5N7UG2v79XGB47rKeJjoh9MuuUFL81hSgHR3T2eLFkQovW8d9oy3a91sgkeiYbgnKQVJAYUjqo8WGfGfhis9gU8",
  "key4": "4mQpYTKHAtZ9FaWbf6cDPZ9a5Yrbft53USF2W3BTuagkPzPjcV6YWPkEwPrDYzVaW1WG9SRq6eS2q7GCjKKiuowh",
  "key5": "42J8NTpnfZRkN8NP8Fx5JyDvr79Xne3oMzDQzCyj74m4bBxMkNQun9Y5G4NPBcsYk7KwfA1MEAZRXQPjRT1qEGFN",
  "key6": "5tSXzHtzTmBoJPtgHYMb26iCUCuSNRrUPoZTm3b5WbWoudtkRpX2nHpBgkDrr4KcVptVnfM3Zz1JYTstyNpwnrqL",
  "key7": "2VmScE8ZZNUpxErjVCxRDyNCbsJTuNJzj7x41MxUBEgBhVRGWKbxnT3UCXTLcA17G1XatizNWS4HFnxKd2vAkcao",
  "key8": "4MVz7A9L8jCCFWdqKZXFzNeY2TvQ6hxTZ2PNbA6VhYvzrvqLEN35sbheBmghn3jxsey8rLJaa8SuyFYYj5sAcv6V",
  "key9": "318o9rugXJvBdkSFxDjAoQquJZP1BS4ySnB7tNpPvBaQZfzqkFCcNq9h6Y5CCWErSog1YojhaY4mg6EAJwzLzqGN",
  "key10": "32XZ9DfaLu6fz5ssZnveRJ4uBHErhucU28qasYg2wLcfpefV1yvtzNpbYBy8C5C81YypgRzFDrEJf7g9VpkKVevv",
  "key11": "4xiKFZMqmeZzEfKDLKeGde4Z5Vaq5rzv9BE6eJ9CqpegqaCEexcUic9zUZS8mGReiHbTdA6sZU4wRNwKoxwFLp5U",
  "key12": "3KUehx3wb3PWuBSpG6aqfyqDQPb87GwGynNpaQyMbvgnFHsqn9X3sbdMwrTX5L47hx9ZQGaGzf6sDkWvXVtN6e1p",
  "key13": "5Sdd8jo9Cqjmj1ArAW5755AwjB2CkGQyKGhGZP2PyzRo7gQu2KdgxTiqRy2iPXNQifX7FgUwXXGFQ3vRN3wj3XFn",
  "key14": "5pWYsSz7Eq5XRcccSqKLRpDmF9aiuVnJnrVDE3kHAB5fg4vVczrEnU2acb9rLTHn9SRFLe6a5N1gvkfgYGxttg9p",
  "key15": "4enHbYh7EGrcmcBEdeUwBuNHgEGH9TVGanS6sAqZrJvgoFSEQG1XSETni3PeTvVtFttX9bkVuxm6QEG7vsL8xWEy",
  "key16": "5jEh7rnPtd6DxXpjqGzRgn2SzBX1s12j3GHtBvbuC7izTGuQ5PeMgheWTdTuTVKpq3pDhRU6VqPk17Zd2VK5dZMe",
  "key17": "5XRLDVUEgbiBsF65L5YSrs2aejckRHqsM8qwVXzpUFv5XLnwCEfUEu4uv6kg67yKUTvRahaXDPdMbrReVD3NdCDn",
  "key18": "Ff1beivWBGoCroDN73XjLbRbtpAjVqiyX3hL1hgCMAqcri7T8WJLL3hssDZivZNNRWP13JnsV1AZusqUfqpv1Ly",
  "key19": "4ZqsjBkuxNdBH6DGgu2UVvx5e4VR6EG1pbekdqaTsxmqnmEg5gETd66R5BfpzmDjowzdkBDcXx88W5NtTF3ubvxY",
  "key20": "23km732qEn5yWb7xgExF4i1h9AiG6QAAXF8GCExGTJysZNwhgCGhpMVam1EXbgULwxFFGFR6YhTAJvA4Z7g6AUSS",
  "key21": "3ce4hJWAToaxEHS3N89ybSjvKyqXrhh1BEnRqnxgP8tuMWNB6CBma9Fgvg4UwMnFdicQFEPCmtJZF81Q57wA1Za8",
  "key22": "3nq1UYm51JWAQjKq4rCqZdbxfj2NF5gTheyx6rt58VwD9E4YpokcNNVMRkBoZXRFaCXZ2oVash568w4qECEmHYKg",
  "key23": "36Hxmcm16gDJsDQeT3XJF1sbEejQmVa91Mu7QuZ2bWHiYanzjpe7cq4k2qL4KNVjtwvpXsv1Bs1Dpzd2NT6jkokV",
  "key24": "2B6vJvtByeUjVF6GistkiSTSj3qdZHL36eVPVPfrSpd64qrJWxwAj8W3fUtH3oWF4z243dHTwAmM7WJLiV6Nif4W",
  "key25": "1yv7oumA2wHaQj1HdkqPtgPtYvMemPHEUeW4iTCpmhdDS4X45dmdYPXj4MvLBXEeJH4Fxits5o939AQwqos9zGd",
  "key26": "qncLjd6qZppYFLe38DCxWTVSR2hXjfmyjvsyUMLD8XkKfFDsFQ3KoAqKbK5Ahjo9VkacPab2vfZC3XwsrQinJJ4",
  "key27": "64SWHN7nyi6w91k4CFRW3ABRH8wmYDQzRuBB5JUQKjNEc1Rhgbt9jhK9jjoontYZQZE3KoAffTibTZxCACuUuk62",
  "key28": "vti4y5sdgr123JvpwQACMqKvGBqSCNS8sQeLByMutbk2MXSRVBbvVcSdt4hP6cXhCd7peyQcBZiBFPb2Av2bcme",
  "key29": "5XNEMaevzrzbmbxve9SWeEHbXrttyoX1sCDTo2DiHjD2n762XyDzm19a3XXWcFQTjahHJQM5dQqgdhD1Ce3dkfFn",
  "key30": "qPBcoD5GiPz5vqLgaVJ3m3dqYTvxFx82w8WyVaSZcwBCoQjMAZfYpjgc7aPbCF1PZ3W6NYUSDwGXeiwaSdizmY3"
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
