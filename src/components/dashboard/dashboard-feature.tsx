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
    "4uZeWy1GQxdss8y5JwYpLDDudH3rkDboTP1aHAusLJoiFjW8vdAH7ohdwQUSCZfUajFoTMbAdbU1WZvvkTLb1y4h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33koyZyJwfMi5VsSnRYjY5kbAUtTpfVU6eD8SgHhopkoNt8TE2hgdeTVtvoiJtcFyFtdAj1dsjchjJaS6hm51Knt",
  "key1": "5d3596voSdfFXaQnbMdvKJZhCofAmYhgzD4VXAHay6SmeErXQsLmtUTURMhdLv8ZsMW7XVFPhaHs5KCTxZGotHn4",
  "key2": "2qJ1GRPfNMcNVEAp67o39umxYx76Z6qEbJMJvvP98To3M9GtxepZbJibLtuUqokYusGBehbnfKSGYzK1bjpHAUBK",
  "key3": "4J26yjXwPL17wYHkFK2KczAC48R5NL4Qs6NWYjVDSXX9GWoZPgtbvJpkjAz9ZB7RiMuwjo6xeKwP8TpSKgJDiCtm",
  "key4": "3marne5qXfSGTE4dEv9FSGp88ytwB4QwwsCmKay9hj2ESPgZAD3BC8ooATLY8LPJHBEvfxCkRBdduimUpGVao73x",
  "key5": "4Vx3nn6RM6fieCu9mEx2m2vgM6TkUPT1bmNdKnLEB9yLtHmJvoHB8NLzMnAgLHpEWDas7zcJpmpSJog1Gh9pJMhd",
  "key6": "ZYUt3iDaWyV7ysTzEzZutBs4MoD3Tvgv14CybpxgWxuHAz1gVzu8ZY6QheDTk8ZeSrCdX4rK17Zj3UQeeGEMcUP",
  "key7": "5QbKNhR4zfdNVASbBckbJcBCoAb2EE78oXJqPrvNzThartYfvbbJM2bLaH4oGNnELsVfu9rS8nU2CrAU3P25drKZ",
  "key8": "v3q34ksvUmNKDpfEEGQcmNmKCs2tEyyaaem7cgAK8VXt7oqbz7B1DNncPvgRgahazWavLdrZEdmaVULbeFuDZ2r",
  "key9": "fcbS3Q4tDYAu24ZMVtMeEhWWai3sj4mA1RjvC1ceSb6Z1EhDhNk1fC28NjdmYoquUJTUHw4VdDKCtYaB9ba395p",
  "key10": "2FU4BH3Kwdw6yoHb9D1ogzaGdUJXTE8cgpctqoUZzzhY2TjhLZ8smRp7DQt656nmJmb75yLfJk3H8aMTYvgAYVzA",
  "key11": "NLN6DkpedeJ1SaMXMMFQJpS36sp3cFQGSPwk2H7FonUyxqjY5tFP1mVSLFC2shoJ4t1xShc3h9XycHWqZDL8D2c",
  "key12": "5S5pKAssX3NQJW56prP3dYbFVsL9ubHVYoeC2mHsjzNSnvKEWoEk2KEYX6UaSbpGsu5AmSSa9pwnjtomfgF3CVRd",
  "key13": "3WD4xGfgu2bXvns1oNTFXH8tsqmzCC12c3HBCikHdF9KeokyRn8MNPB14WRskjgaEA9KTmYezHx5XsQE8cBEEiYQ",
  "key14": "429nson6HcyduEFkUhxhZCQNcy3XNjB8kBr1QDxReLfCciNEKxsapQPikMLtZduqbUqsKH1Pp6gaLPR58qf2KQVC",
  "key15": "22aqfZ1YyER3e9cX3zCTCf4AscVT6PyR5pwqU1UpVrJevRQFTTYKDwTknh4Li6vm6g3HZsSaNcg6wm8BPswH1jch",
  "key16": "4oKNZZZABYyjimZuNGUaAwohcF5tcxqKMZFPqExMNN58MLfWx7R6ji2JRuAC2g5n2RxV1mEKNNAspxGmabbcoE5N",
  "key17": "5Zcgw8oJf2MnQ2hQ96Mk9dwLXJz3fbpx6edyJGUhkq3RmMvn6j6yHFzHrFswU2xM5T2xYZL3rDvmsBEzxstv2Nn9",
  "key18": "2mFuG5LNCG2j1UuJrLx9K8tAFxzYKA4rbkMnLGJtHJSwApF1LVRHJ4JeqTSqUkpAEHPNKDJHfG1QNUQyXpfaAVU9",
  "key19": "3JxNdJiBPtcBw11PNyUkP7dU9vGZ4YV8oeHuZTXFUH1eKxVzBZHPMwMZJu7sZ3KqW8guvV5v24dyfcubqWH21axz",
  "key20": "3Ed7jSqFobznMjbhKxg3Nhuvgoco2ByYKjTJjk6Sdvh4duxAFFyyycTKpiaj3YDaftK7bSFnWZyE8zTpZ9zdG5hE",
  "key21": "tJzXw1c2EXhPJSTVzqizK6U3pP6izy95avnrC18dMFTXPjzC3wkrSpMmugg2iWGsxZgYyKdMR7ySVn3CwVxA8Da",
  "key22": "2vkKW81jsSzp2N6HYnfTNyoXEwB8pHib1AMnmYzfMHJXfi4pAmm6xu14pQZTT6oKpXF1AwHFQdEzpcziip3QUnNZ",
  "key23": "62vzWQPZnGyw5FijDsBaT2wezsjbQYrxJXDcm2NsLutfz3mGBim1pTWQVrjqD6Bz8QZac6kxoQikkSuRd4jLQ6rz",
  "key24": "2SnuEzj9Rjh6kg5H2fyqyG8WqXpytbR2vTgCsoiiqGZV7P5oTPgLmE5drQN7Y89tp3FFjdPt8DC3jLCMYTpcgxGF",
  "key25": "B8crorB8owXk4NvGLanDUNH944Kuv61jgS39u1yx2T7gVUXnW5vhHZDmANistPY9kRvBQqRTCTysnwF5JHRu5dY",
  "key26": "3KWUReXyuxLNcAU5tasHGuC2h5yuumXw9HMCGZj9mTfZvRFWj4hagqEHcPZ5MyM6itPesg7KaqxD6hMipQ6VAKeU",
  "key27": "5gTwZDTftDx9H5knEWiEjSL1qPbLGgvrmW6hveBVduGU71sDXWMhFXAmJssT7ZsHdSkUxYkvzQb2oajn2W3ZfvoD",
  "key28": "3CbePbHGAdJQtgScWuV9CJmC4UZrHsKRiohXVQcbZFBy2xL8xqsx2Q5VEurqEJ8wNqFUWhzkW38v8Rx43VyQvLDN",
  "key29": "2RS5r4GaJCRtrRrkdrqg4gMcRXgGENE1DkwvrT7o1wC1t4uNDCBXquE25YbMEEaajjX5WbLuGf4haJMprMZdH5LG",
  "key30": "22od2ZrvzpFPkKf4EMkUYXBxKwTHiYbrYoQVP2LgdFfWLMBfZjDTUpNd1pGrUvmNvKN48d6ZByQmwj9JAYxfAbQc",
  "key31": "3DRt3r5yVKY794hdoNLmtjuAvfCy4kPNn2pRiJPkVdk3DKenNgD1AZhkijAoD759sEFgf5MYnYTv8rf5GURmt2T9",
  "key32": "2eMe7djJ7G9Gnm7BTfMkagsa6WFG9MYRqaRigE3SowkYLbfuyM3gPVog5qmmcKkLUciLjfTt3CPgzUCoNCrNFVtw",
  "key33": "3zaJnmcwEHxGbmvF1Pogz9Yvgm2fnC81h81wgs7VCZgCxGE7UZQq6zMbXjy1zWVxVBkcvsAyseZwCBdWjquM6UxF",
  "key34": "jgaQwZEc8CGYVq1WHm6EvZqCB4D9tA3bdqkL1LKp3Rt2d4A6JtqTF1knmu3Zkpa5qNfDynyXqQeyLXpKsxZ9H19",
  "key35": "21MkoRbv8hRThvwDBLS67zmPaN5t8Hsi9J26Biy1SxD2XiEXs9jWgGPUbGYVSz16n1bpKmFzPH19nGSbNVFDn7dc",
  "key36": "3R4264V8YYcJ2CP7jSa9oC9Ukd12UKsNUCxC83zhTi2xzjezCmkeFnPvsHYDSoycULaoF61iLN32iiqKGkD3VNz3",
  "key37": "4S7362kysYVC67CDgEN7Ka9PVDCd6s6w3JaXAVVCd38Hy6MPS1efJb9wY2RDcjjD1iqtgkPiVghXNc6VC4sSYdwE",
  "key38": "2mTcfwRrJZQSmTBh5RSmyQovQubRPHgt2hRBSbhjEigRs2tD72xPipz837LcgtrogSQZqnM3Vu9DwZuTF1yfueWS",
  "key39": "y8RK419wuzTsEVkP8T9CpDjqEjSWgshRsCyz5A2rgbFA1TeEChaRcU5EdKzq9Wmk6S67b7mKHMbanY27tX4okgZ",
  "key40": "4Qy1XkRzE8Rwv5TQjgquSekLDrwoYM8c9jAxP4eTo5u66tPHNQ3NeE83CejGem36DziLBCbHVJWBY2GGzLUUEMjp",
  "key41": "4j2aXtv6EHcmediEEjiSEvMwzQZ9DnhcxXbmk9m5Acoks394CkRztJ4eaEkyX5U3HRVuLDmg2ujcg95VoCqKdMDe",
  "key42": "EyT7ZG212oa77fckvv8zYXtLfAxcU7Kq5rmWWy39NmLKvf6mn1KuRPrCyeWV7DqF3bvNk4uns9PfbzKb7mNi1mA",
  "key43": "5XgzeP2aNFtNacRiXLJWZ9sBCMrqf43U4uDuqiUf4pMcway7CqcaXNT53jk7SZdiR24QeD7NqSrEhbzJMuiUbqHS",
  "key44": "5BRMjdKocRVCxCN6oynES4E8JG6YDpr2AiQuiUGTBBwPLuUAWmV5LjanNoS8ec1WFp1eyVYaYnZcN7XQps5aY4oN",
  "key45": "5rH5vDoirsG7p9BxSSjJyxC38k7iHYi1fyQSJS3srxUikGsBoeRNxULGVzGTCkbxAUjoGLaKHFaFfANoYVL8jSn5",
  "key46": "4X5qJvXsWyeiHNwAF8yXaN6q4sRaLSKJzT6dTP7Ptd1eKU87WHPxtwuUXqfuomuZQWv4gPXGzDDRk9AqgDMFpjNZ",
  "key47": "2WSbAxBrwQhgGsczSK5rssuKtdpfb1KWCPjQx7v8KH1Jz4bWLyV5q5nsNfoKvUZMvdGQP6hupymWWPWTUMwWs6UF",
  "key48": "4LFDBh6nxB2jKXAXDD8PR2xCh8v2cGfB9YJkUHzQH1mNdrnENzjZvnz6w8Wk4t3uJU2Hp59vCoEvDwsEvaSYj2aN",
  "key49": "5ZVdLX3mHbYBnyoxoSHfV1ScPJiixpmzphUUVk7eQ3qTdtrWVa3jSoWpDw8S2CYadEgdt3nRp2yYP2fCWwfAoAvB"
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
