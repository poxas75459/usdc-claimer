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
    "3WxvzX3QPzApj51ady6dQNWkG2fdeTQk1FMkKBGnr1BQSiax3ms4e8hunYdQwZTYBNit7AgwDwdFQGhg82f2dU59"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CEkSsGbZ1mqWcG6sK7v57pAV21kLbDJGiqD8YWruuyJqFjhmQXMTchJNFZm1yJrTHiCHS2RSz9aSR9B9b5baeHK",
  "key1": "2wSB619ejsQUX3exnfcQHmS8CWYaitHDEh1LXhmLQaMTRxVzavo2y49PJnPViryMNQdLCZLSEFtkoni3CTtaLJqa",
  "key2": "49yC9ZoQZLidAewKJDv9Byef9hDRwDckVAGVaNJGARLHxa8v58iPo4Ds3yCXqZZhxwCabD8DDTL2JU7guJ1sAyvH",
  "key3": "pjwMBRPWGL3615Dm9hnYjdGoXy3re7Rgq92i3ayprAT3MWub6HMYMvF6xbJCiG9GRoD3XMz66FBW7kKpi4fZeQH",
  "key4": "2dNXmGDCyDAAWMEeUGXvNMphoP9iWGEibbphB3RFxVMyhtrzwQCCgRaXKxgKpvgFW2zqoLYsBLqRYkiVsW1qNssv",
  "key5": "4DovE5rX1SFjJgdFqMUuT4YMvoJNHZehtDA8TGShQi4wJ1upC2XMQhN22qZ2kKLetjnR1PFVaNKbar1VzbzXvBPK",
  "key6": "FPwx6aq4viW4HqMAjm22VPG139iVsTdmFXtJ3QB1Z2iz33QxTCxPn7VM2VfGYBcEm68e8mUsvW6mpgPPwdvWo1N",
  "key7": "9jpHJzxjH7HvMe6cxsRpMGNzuqss68tPR4yv7a4VARxdRgHNHwu4i1borFHCbcZTh9Zp9vHwv7MT6V5vXhDWpFp",
  "key8": "xXUWfYYjUUPpDHYPi86j3bfwTgwRKKy4FaRMgyZSHwCfR1cLnNowNR7e7GtedubZhNsBT7NoecAEzPJX3cKFgCL",
  "key9": "5NCigGxqehJ639gfHRKNDbEcJH7SfMZEgmR5pP7X6KtU9Zowk1XR4GhSkEHPRZ2CcaeKFyirnf8MRndWBBcsa88x",
  "key10": "4BK42WgR4bjHobW7CW4UNWWBcSRyzHQVWHzpgcptBo4t5whcNb5V9s8nYuiwENygfiBnJJUjD6MCzow6CpP84KGo",
  "key11": "4KJHmCSYhQ84ft2uD6f9WqM4Um7YA5Z8LB4c7UrHBPU8XaAK61M3m5k8avAmznQN8SFMsWmwTa5SWCcyKXWw4MU3",
  "key12": "4To7SbGngzJhvAoJrdcnvHC2K4e9fL1FPxo2uPaGZ69uGNQECRJoGda2Aah1xHWuS1q1q7RHWT9uy19uL7T3GXoM",
  "key13": "3fAwUJ5rkDTBv7n3vzNcqSuG5ze5fcEMjhtTackcKFkvozNQjbebWkbatYdgyTAwwaQudGU2WKmZUA951nBdBARD",
  "key14": "1Bb6A5RKoWrSK2svfCHmhWJmxzuRXAyCVGvwKYkstQzrXo4WkWb5iv9cC4ha3uJbfZxQwhSU63q9Edyr8DNmjqX",
  "key15": "4E44sTaMQH4rGJrf3oAY5SpepkVE5ynf1tMmBEcNQK3EKKGqaSAoyN1dP5fNDXoFE5Xie6axoz6tvtAr5VRiPqwY",
  "key16": "63ttDK34dcsf6dYo5FhCAViJfW5YQ24mhshFd3zBXPVa6frTSNZG1LteAWeWAJNir1Xmd7Q7tmxC7ozH6vne8yzV",
  "key17": "4B2ut79bgBJ4CM2HL7tuHFgEt5y1fNGMw37waVx19H3nzBfZFAxwUkKG6MAt149owGfRMpW2k2WGWPsVZrMNKH7M",
  "key18": "2D9kJRpZxyM5Bw922XR6MkPoYvUnGRVpycM3t6WjJpN542XaXcah7kXH4j6xWgB4EugM4viaki3PnpD4sbdJtscb",
  "key19": "37ECcXzjg5MKcenwuDmod9dE17trsTu2VBBAuVaymmGk8HRt8yxMnmoR9twUKqksuurfBoS5YCo2EDLqytPwGqeS",
  "key20": "4FaHcX3CzSecD2R5GrSgya8pkZUDRvvn2dhqjRufWZFgEaZjV2gNkzxzpMH4XFKxHEvDoXgeQfNPEKcRqdUokVky",
  "key21": "58MsEgcGkrX9snPgetVZxe27uJVikWGSR2XKbUmrxPMYphoXUVzU5pBm8pwbJJ8YM4uJsJu5zRLhwvpAPYavySt9",
  "key22": "57FurTGEu4Trq6Stx5xTiu1w8sG8p7cn8SJHXEfCEuwF2KPqwArpETQtshs2zfJpK55zCYQu2RpQULdcxAeWSAoL",
  "key23": "2h9UWXAomRSooy2RGyoD6GSwPZjyC2ZtSGzpFcLmsEKMCMdRDHkJNrUQCmqQaTdoJGUXg79AVqg9KbHFFfLSoRSj",
  "key24": "4egiqpxE2pFnAmBxHKxDTBNSxwiarw7CA2dNxdG5hQzdrUT8ifXjo3FtzxAoViYq25wDg6KHzkepW17AdMiSr5qU",
  "key25": "2UzFN61kwNnSWDWGbMjPYSC8VdTswYTLFKfaSzWXafny1jVKM935aT3tyfZfAYHWwCkTK8off8z33SQo7qdS7jGC",
  "key26": "4aY9XBFKiTgJ8UuNnq7k25Myokf5tWy67oYAopRCwMtuCEuQsLPYNZftQx4XJFxqLn7JgYXSrUtzjRAntaMrtH4Z",
  "key27": "4S9TUB7SG59vQqB4GcdHnSFWHvKSek1H7Xwrgt63t69aFPCebkx2TbTd9tomw3P6W3UsJw8p83zDnLusqhn2PALW",
  "key28": "5uCc9FFMaM7M4DiRRWFAuCmKNUZvW1tc3mkN6hg9Yi2RmdvbzXeimKkyVUyrzUAA65ZvK32uAkDHzzVCikZ8UUVT"
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
