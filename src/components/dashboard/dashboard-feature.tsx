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
    "324HJr6q53hkQQsd1h9qETccbQoGkspqpKgX5Kh2xKGWWtw2GaF9pX7QJGkZB33h6oTbfsiBdA49ZDjdpkCoqYU4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bRYFPJb8WoB3U9a2d8mpndcsFBXVZ6hxiCHWKiuG6di4bDYyBiKwe372nQDKZQaLL8eQyN42RHroeMe5kpJcaZY",
  "key1": "48TGTtyxj1kLmvL5rWMT4uYbcpi4JA7JXNyfPbzWmeBLE5JnwM9jSTmdQe16H4j4xdcw7qshdbXcxn8hdNuYBGva",
  "key2": "4NeWgrmRKw7M5bWa8VTz8Mrt3dWqDWvXf7jpwAumJv3T1gPZtCgDJrru7xqs8PyYCaRcL7frL6UGyWHNfsD7n4tW",
  "key3": "4ZjuaMhvkr8v9xDFLANpuy6cc8bfVYGhY7FfmxzTJzZSgETPeioKd57Cy4WcvZQ12BTJmTng2ycNrRSVWXr3yiyC",
  "key4": "53vRtfvhiTFnNkrnFZgSApiVCiMCjBsZt8e3an5TtwEnY85QDhdfr8zN9RAb3UhvXir9ExhU8g3JPp9VLBAFkTH9",
  "key5": "4cv3WL3UugCtNegLUUQxYTFB5B6pz9mU82Rh9BTctqYRqJTBeFoxpbvSXzc6QCVmPmrGf4kxkX1AwdmdKZ3dG8zV",
  "key6": "6fxykspSo6z1a7DAH8UUsY8gJXpsmLXUhTWSQkfPUupA2pzs1que3ZysrFLPqiXGddHh2bYhcjkeRWr3jDaAJ4H",
  "key7": "5JzyBcdXoDBPh1bqBmQd1cz9iZCFVeRHvPmmtZTqksGY56etywNB2LJc5hhaYbcC6VPvLUKeoYFQgBWWvVff5qaw",
  "key8": "46UJacvDmaVUccasF9sci5ev2t2y3oSWdqihgykHcJCEkqDGfNDgstK9qnhCr8tY7cWhAE8ZMSt1PUK61ZYX451d",
  "key9": "5V5zgjAz6EAuaCyfjDAE4cpMrypEfGLqcxu23rP1ekeAL9xZesuwNe67WG5ZnKmgppeqGxgmnsKPuHe7KqoHSsyA",
  "key10": "4RzWqe1FwQse33TdL7CFNnnH7D5Pq4P7mHjt6N9mPd5G5ABDEhtnVGkcvFxuY55pfyHaPaSgEJbGKMqZ52FMyG31",
  "key11": "4oRHjmFv23YLBknVjR6frZGjGqEeU1ExUefxPDuUWGhPKvzRgM2Kf1z4bZsrycMvHGv55Z8kqmggw96ReYa3EKDn",
  "key12": "5xEjMUpShKUvUL7pZk3H2tejz9NciFdQMoXAsoNBu1jxQuUVbB4mFLRi8aMAqYiXbtRgtMUrwZUWDYFSVmf5QW7S",
  "key13": "5DRmQzimEkqA8GL11ZbTktBNRdz5MsGw5WDYe4tV8z82VMULJtZphGo6J8TkKUySCDWi35hvvTBQYEFoyD1QnRGc",
  "key14": "4xjX2ZdUUCLLmMf3X3e1B5TaentPFLYtmU9v5zT2Cq3HfVYWrhTdbL9JXf3V1JWZ4ETyXFYi2y5QgSBhtKoKndWF",
  "key15": "5eUYMY7iUxYQUP5jBL522n9Ej5Vu6212dirhrWxz3rTTTVgn3UpCbyWz38ryz7SAmmkCgxRDuBbB7Mteoh7X1Fno",
  "key16": "3HapB3Xe9MFztBhag4r5zu8Pum9kaNVESWceE3hBPuL3QiUoqADwrMKkkmJfmc1rro8gPukEHbVvWNg9b5RKsFe2",
  "key17": "3vGryzpdDmSkQHoUEghNhTq44yEihpYmsdQGvFZirT2QM4Z2dBzzCrEBMQWshkE8Hc2eYSaRcj2Q9io8Fn3ebqmw",
  "key18": "Dp15hKFY5SkHzSwL3hkLchD5WQvzmxLNM29acxkXXGLrkjv5TPMKhvtQotqWQZ5XwGexy9Qbivdm5AkLFNkpWei",
  "key19": "4Gew7rQRxw7UX7dvN7xg1W2RWqn3ykfSNeS6vDag49MDG4cLBusfiVG3eVQMVix9YJGgkhg19jXSYc8wpKrhUAyS",
  "key20": "Ue9qq1wgwa2mchhcaM7XuT5VCDsSNvKv1RDctoSKFptW6KFc9DdaYxFMYKsvhXH4ey2qwCLo35bWoWzDjzYnGU9",
  "key21": "4vXiWWVus1zmVBkRUJkPVHpVHheD46XRpyEoSkqssVZS1LeHAA8Vo9LwiHym5BNryudmwN9UMibHPE5pYDdbhoRi",
  "key22": "2jBT82Qoz7KTwBo9xT9KV6T18yCRbsYPLRDZbyU22SeTvoSqiCHb9dXhjPnSkrow9HpMLwyjRyNdiZt2iepACCd8",
  "key23": "24ZjCcTwuDQreyqkrtv2GvcTGeFnKvkTKwYNdeGswM5N2mXcPQ14J5cNjcssMd1mHFH1QHhbuArAmPVEn7HBAX9f",
  "key24": "3odpLtRFKtkpSZJcb37SaaMqVXkb9BtXHxUmHdW6XkV7gajJwi4mMfkipP12UtaiXGCcn7yd6zBrh3ZDZDN3puwv",
  "key25": "CLs9WyBQY5AR7avWw3NL5utEwWLr9DqXeXqunJugmwqmJVcTJxmgnaJt2K3duhLpHS7uThsYhG1pxvb184kcCMQ",
  "key26": "4WDiy2NW62apCzM2s8ryYH8MZT9zzm4NA5cRT1mib5LibmaRh2UYQsoytFceotsMprVJnxXcaRATsyeDSZqzzNof",
  "key27": "22FVJpABaw7YrWA5j7Xq4T6BD81TtRk9mEm2A2aRq3Tjy2SgWy25r8GN8Q8Hf39au4w6mujAR8U5g6zpnhsi8SA5",
  "key28": "5M87FWK7pe8WWiSp8z2Rik6KRhDeeF56AfPg38W3w5Y2VFzP9imZ18bLiFbh4vhCsKFP2t31rfji4JzXFNTFAYyy",
  "key29": "fZWMcajRrwBSNrp2J1nuL46DiLp76khb8rxwFkAKftrVJECCZbcQ7QUcCSDuAYVJEwE4ruJAr9REmBQq3YaUrEB",
  "key30": "2Na5xCxaudXsKpoTxwGZKqpAiGN7yPcdVgzmXXPDZcqXrY2crMJ3wJ9nAaUdUWxirLM8VyZog9PCTK26xu57i91n",
  "key31": "tU9VGuyxUMCWEXMqmDXZ2TyesbGREsiz6PnPcp996KopQFUqKHMVMLsycg7EEXR4zsmDZd9AqtyBDAs8TXTtuof",
  "key32": "37ZRCiNqfy1umaXmMFPidkHanpTkisK3VSLZbiyuYYZev6qjM7FaWDQypegGhoTPUTnECeJRfEFbzgUw3YLZU4kB",
  "key33": "3ADVVW1R4cCqLJYZZQNR636g337gg26YyDYC86kiNxP9qJzUubPTj13K2WgqgvQPCecUZttxFcUqSByDgC9Pvcox",
  "key34": "3SVK3zV76xST4BJ2NsZHe8aC8E8EMZbxpzzL97JsCdnsDMRu5HaNFpycY4XFiL55Q7fhS55ztd1cD4sAg8U6cGUv",
  "key35": "Brc9zcV4AFzu3S2fAcnc13f2LMa5sey766wATEHE1QMUS456aGKi4eS2cTdsKhVTyWGp7SnCCJrWFrJbL9eTTsz",
  "key36": "MCMseVGmyoCTyAX7Y65hKoTKS46qsZaSxSxpNsXkH6ZSkeUZqsspESNTp4e6c8r5XoNuYKwG1Et8LGnB6ynjoR3",
  "key37": "4rMWhArPvFGAdR4mzjFbt1i6k5dSqf86x8M2T7UY8JZGsDTyVoU1tbbiEBdcpn8EAD246EnDog4HTKNhFUf2wEgq",
  "key38": "4pAXveFksZi4XvQ8gjFCdabz47eEaEM94967wPdbcW51ezdhL9THg2xaf8pwv6su1Df3k8hhozyF2NJAf7FeVRpw",
  "key39": "66GYdAE7mQzoU2K6Fcn4ESNhnY6mhRJ3MysBo3wZLSattYAEQjARMjii8d9fXaUA1iiFpwrjZCwic2uA668BKxg2",
  "key40": "4SjZbsmG881w2jkcFuzkGHGkkwvu8SCbgTD8FVh1TdwmNYgfep1adaoajBzFMd7mkbJqdj83P5TR8iZiqBT7MVW2",
  "key41": "4XmV9ZBmnSPxfBWWpSmeTaK3HyCo8pLKkTJDjusScbut9FUhpGn5kzj7Yb4c6ByJpjPwuMZV2asGjpS1W6X2GCLH",
  "key42": "gZQoatf9aCgPBGg18PUCCUuJoEgHSr3hx3WmsDCHGN1vrok5mH5Xg6q4ttxDZ2YEa2VjdRS2RGNW271BS69rfpC",
  "key43": "5BRhQWPr4RYergXf914eBomx3c6RbVTGwAfePSZ21okwKktd6cz5SWAqdTvYkpiMxBKLg2HnYtDPQuoyYnD9vw4U",
  "key44": "MnYjWn19f5x7Sd7JMRFf8US1tWqgsWBn8A8dmsWR5NosHkkH4N1RUhfGawRNSVcYe3tsTFPUcUAh5Tj9i1gq72S",
  "key45": "5nq9KJmzVky8X1Nxk3LjGKS1H8vad3Y1qdmdwhi9o1imUCYE3cvh3S4FXY2DAjcAucUTgtxqba53nLtHB8EFeEKy",
  "key46": "4kmasjxumsBv9oadfDZ5w42McCgrukDQAuA8AJw7oKcf8N8MspSaSQUM3EhgxTueYZGabGXnFpTuVtwExwS2xNN7",
  "key47": "QqNoK95m6SoYgh5d3LHgbGak6vtqwaHwrnVJhqw2pF6ycHYzTZCAG9DC1us7W7PKmJXke4V1Tv3tQwJr9bqxHWC",
  "key48": "2mYCWPcLfPcQRWCaYrakuFHCujej5nn6qNcETAhgaKAg26Ty6S3GfBLBx1EH9tRanWz9jBLZ1XJaYMzjDbAKCc7c"
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
