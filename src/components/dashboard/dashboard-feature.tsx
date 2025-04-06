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
    "VKToRu3SAaQxyieQDVQovoprHmmvjv9avwvnWHUYE4e6tCL2wy9iE6ivvKSyUhs7ymNLqy9YkmW7hYAmeTA1SU4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BbTiYEmgMuCczxYMCeJrASuKJwxTnvG2k7EWnM7UnYbW9EefYGy5uefSVL9mgYEXAdbAVfNjgx87YGh9Pdstdx7",
  "key1": "65vP3NaNRxeztUgNNgQUATWQaT2HtmayYBto32vdGCRpdVCoKpkocYwsnkgs221kDJtqKrHhVUJqxFRqAWLtEEGv",
  "key2": "64L8rJFrLfMZaNHqLA6s8pp79LBhtBj1m3WsqTM87Cz6m1BD9kQE8e79bRhvA4XJua2wHU6o3uqTMjekorHpU7SB",
  "key3": "4fT8BnxQchdhQJ5XrbA5fRCqjwPpjxE6BLdJerMjgUv2EfNgGrXaJDuZv5JHXWFVZ19igVNyhsDHrtJcgBkWVMiP",
  "key4": "2XZkdB8bupZUmjteqbgqKMcui56No7oCNkBK6YQzu5n83uKNhGJBhdzeZadTw7BEYoMnnKymrQfmy2RNbUqwcSts",
  "key5": "3ujJTkpvd6Q9Dteny2VcAE2LqNi4hJF4443pJB2c9EQ8kLbGusyJ1ZWaTakL41thaXuDkwdKfupbm7GxZr6CYCc8",
  "key6": "5s9cmXhkf4autNCAHCe3UDWw1CjgmEnqsZ7b9tHCGHpw5EWkPAfxRo3RZT2SCjgf9dZq8LtPjLpjjtqHjt4dSWUy",
  "key7": "3KuAT1a3rzv8HkJermBEi6j1q5kYsiJKXi4pLVpVoZXrXwo9rbRqxuxSECyBsxmRDLgHvdAyXiFiJdRkR5SLuppq",
  "key8": "53fDU22yVM6Xa4trijdPUf7UKNFALNY8FpCJiLv71yFHbg55WnMvFX3LjpBDnyV26D4ppdNFebjfpUS4a6wjtEXW",
  "key9": "3k5Nn6zxrTTzZvPSYz6wa2XFZHcaWjU9mqiw2NCmxz9G8kG8bRwB3vAJ27NMQC2n4arArnNuVQS9unLFTi9USyom",
  "key10": "66QjHTDi5Hh16rjutP24hE66do5FS179gvEhTKrgqFB9FGnYRP7e8oFzKpphskdTRaC1THCpLjafpt5wBzGpzpcz",
  "key11": "4tUag2PxrrDDaK2tJSvktGMShWj1v9rty6yfUFVfUxL2nwowSMt6MDKCog7LPsvQNRgEqVrbPjAKbrW5JwXqpLwf",
  "key12": "5njYsjXo7RECyggxT9Nsdvcmdio12jKesYHY5NLfTCGMLp4Cgi45Qx8QoBUYe7dtzJ1PKLwR8KdvUf9cWJ7muAJ6",
  "key13": "4zFguZXSef8tCANmbZWS8jK6bec7Hf6AfJ3zCkYfDa8KSkMeW39A5s6SSJ8zqJ4q9ZTg3tHjYGGjFRmQqV5BRqff",
  "key14": "4tCi9Q7NXpdMfaQMEm3s3jR2rYeqhhjXBePsfg93z4z9SbADEpPRWbnE5iiejj9FEK5zAdDdKFXPEQhr2y1Fy3eA",
  "key15": "czWroaa5REsUJ8n2JVLXVrdoe4VMwTHe1B8sqNJLouvV29XeM41J65ndEfArS54okjEmd4Xei8NZmNHHqHLYJNa",
  "key16": "2ZPkVdJ1Tt3nyfcw7TKH1BLDDDyzki6iRrNwRu2nvkk55hWwu3CHYDXAffpBnm5dn8RBsmrEjWKYzvNsbeaWbREm",
  "key17": "4Uv7Ts179fXaA84eKbgBrG561iNcthGNqDrxiVrPBM3q3E8hmH3vk76DDQKjBhFtBJZP5jEBB9FgYtFeSg2omKJi",
  "key18": "5ag7MomfrW3krGCLuqM5gMrWMakY5sGzW1SKSvAMQsZrZ7ikKZ5XfvzEf5Toe6FBUXbLYE8Fway8n7ezdfim5942",
  "key19": "4Dfg5xYHhvT3oJiqQ5deRopiTrJAyiXDjajJHEXsLV4SrN1Pt6vFb4dhESX6qhacXtyjiP6DZ8a9grn4EDX9ABv5",
  "key20": "3nhwHmtcBzqHC83ds5AwzUJgsc9gPa8zSSPMBmBu39e97Ymy1FVFNCKhoaNrY7YaHnBk6m1VqG7TX3XEQfJbYeHo",
  "key21": "2Tyxdt66bVGF8RyDZwwCeKgwpN5iuxS6SHRVjiFreFgAKEw8v9VZueswLvCYB7M3cujLNL5XQLaiwgKGefBGZR5d",
  "key22": "56qQV2pdaSh9hdQkEnUxjWaHxgxQ5c7pzHVCjy4rm1h1FP644Vf2WdDBPKS58dbuzoYLcW2JM5rh7BK9DhyhJnTM",
  "key23": "22hZgrpkxX2xvGTAvi7VEDmdsRMCnYQHpZkmZnC2AjHjdDAZwLV5zE3JLP7qFhKTztKFbG8zjRj1rP6W28pQnmFW",
  "key24": "4PjNNZstpD8Nu4xXqsEP6HyMxsCQu5Mv81axXFrGNvgsqd73JFkWQi38Mu5nUmTck4AwN38AP9z5wHpYMLA1RwGm",
  "key25": "F5bHm9MsE5SVTkciLHfYFv5ESH9D3SdSEvLfTzk1BQ2s8ZCRYAZNHRdFrZKqyhkRqutk6DtBpZFZrpeRz9cfBDK",
  "key26": "2QG6pABa8564qJBJtKL3HTVutyL7U35yHikBdLJRvRnT8zLqnBPVa9ZmMzP2DKaBnw4x4N6gKJE6KjGXWqN7Ck51",
  "key27": "3PDhMrj4g94kLWoE4QHJvdZ529RY1537PTavFd1snKKh9E3uAfMhbSR8AyMGNUfRtiqASgJRoNCAJnTwfKiG4D8E",
  "key28": "34TSVkmPDBH1Nt1DnrFm36woCszQJMFX54s33qTUUvCW2CNqDeAv2ZQcaB2ipGN675UxTvDtUzsKdeWtBwmfSQM4",
  "key29": "4kSCRyZPtzL6rmoizu3FgoRk1pFtgAKB1A9zt1QZfACpW5v4UhQCTsLJs2hyZ642ZeqcXhhNB4Ae18NLdBj3stbU",
  "key30": "65Vvrkdxjk4bb5NDw6FT4bRBgjPHLxce3bqWQfQPDxcritHwmdpjMD8viwiPhaiSKaeQjezTZsMnrE4DsT9yZdv8",
  "key31": "2xbPPGpYaVfaETNJWQdtfmJgMoHbCyCxFVCnBgvuWZu8yZBRgKuN63HNGLLxJgBnM97ZazsgBUpun85pE8ShbtTA",
  "key32": "3MPXfkePc7H1w87wYAfCDJSEa2fQmCSChtk73kTcjfeYnsQcDWRuMAYaJ8pcPjaanDVU1VBXR47T8zRp34DaZV7c",
  "key33": "2yJdsuGLK1VsNQ7ePE1F99JsohmaXP2Pbek3CJmNVJWPseRUTMdQfW3LWdr33Cs28TaoAWPMjEtRap2WPaN5Jsuy",
  "key34": "5jGnfLFRRaexZtR7FVnEvCcvATt5ZavmX1CvvgvF6N69qxXphh2S9Dz6SMex8sA1FP8zXszRuNffWiLcXHnpYA5E",
  "key35": "2JJ3zBeqcohrcyQ6efccgFksfSAhFZdtX7hAE5VAydovqH9R9BQKnXJzTvjcHEvEDRvn3BTyB55RKB38oJHRca2d",
  "key36": "tFqnhGoaLAbM1rieK8RSQ6ERvHLKRPvXxrGXdnXDaBjXnfRHT5BsAhCVtNW8bnDLfwucdPdxzDxEqA2xZw8y3jx",
  "key37": "3pkKNeuyUUMiVCwtej2dLkdSpLPnehBBKnB13m7ALjhjMqjia7e2WEZSu5ZMBybxggY53z1ybxatMWMioDn1KqiA",
  "key38": "4RZf4Jq57Hj3KxUCNqvYd9EEtvkmbPqHbLDNC6XBZicTnLUvfxcccesdhZ2q8nzbiDfgyuSY2jKgFuzqEUdGj7iP",
  "key39": "21wVLq2kp2YyVz61d5QSj9qGtvBYpXsocMYqEEfE2ehHktk3qTqYimLVCXrBSswXSHKqqvwsppKV3G266RB7YwDb",
  "key40": "5rT24yNivxWWZjM5YLyo6kTJh5iJ8V6zovufz8nN3K1DGWfpXRGDZtyindJep26kCBUewR52uUfaT5Hsh89uALyH",
  "key41": "NuAEepHJHgeCW1ZAvfgwPjADwdesZbqspyDPmVhimJ5FPeatFQH3mZ7QmFpavmjp7gp77n49t2riBZmVYfUCyrS",
  "key42": "2tVKnonSEJPA8hnVW7gSorzQfqSrp8FfbwUpzPTMhaz7aVetD7dQ4pEE6mesGMV6GKL7NTSECFo8V4Be9kh6CUa",
  "key43": "qciJ8y9KoEuiAzF95NaH6UMaK3yP6kurW8hEovYamTasQurogHuvmye8xZGgyX17LG2rWa85PxDpzu6cSn6KgH3",
  "key44": "8kGr9GMcbtrCimbiv88r7W13FkChym4VtWL8nrjb7iguAyWe8gWu5deNETF8ma3KdRPmk1qMmUPrDqbRsN8Yo1x",
  "key45": "2gwyBKdrjkdgwdh4L6WrTAQk35bPkb3iihLcWRjvcjeekoU6QGosWVkgax4cQZPnJV5qwbUuy6JwfdteoyPfgSy6"
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
