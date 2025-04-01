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
    "2KHZN2QBA1xfGgny2EzHmGcDwsZ2APm1KRtRcGXhdDbFBWXc4JsKNoxzKJJ2WdDeRLFwJQoY8QkGF3zAqBV7y7EH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZjhsLWqVqaNXTqxTNdJVtPJLGs7VZ8Ghb8D7tXpp6d3BoyukTb7JvhsjNfZQBDGCDFjcPPjfGNhDc5d7nNBdJY5",
  "key1": "3r7ZRbATQ37HCRcK89TdqMbnS2C5nSiTSY5uDe7xbXaq7LcD3jbPdDfmBynQZsntvXEmpTwqHZwuXpEM1Be1v9Qn",
  "key2": "41kMueDjHGGnSR4bb8DW8Ki9DJ18VGTycnrQ6pk72a25bmKdT14v9x82VTsBejhEHgR6StEcNtksTvdSF49nWYsb",
  "key3": "h3jKnwPxXXG7FrPihg1DGPypgetup8ZcEoSwpT91nUqxy83raHQzN1o1hJhjJhQqPD1sBsZQ9o8CB37MKuyTYrd",
  "key4": "2N798z5C9Tb7LPz9BFDJox1oxpyRcoFV4V6G7tjgnQ3aweGJ1PckfsYCGFdrBzav51ta4HfSumDymsKkUBQqzq64",
  "key5": "VP4a2HxxociiBXkvavYxygn7Fxa9rSE5q4mSryB684FpRHJDhaJ8VPTrtieaJ5PJe1LVHQidwuqftTvghVKwUKM",
  "key6": "3GD7eyYNcPAsiyAxdLcV53kd9cfZeiN1MLW9nAJ436DPyEdJmGdrRzxiorj6vu9SaYBvD31au1q6iWtkPD2qwstZ",
  "key7": "2s1dHe3sUm2v7TbM4CEKeqmuF1RRgtQL9iBa8CPeTVEE3sYHRsN7JKix7ErRseeNGbNe5LSVAgvw1rctcjPkyGKE",
  "key8": "nkgx1ZUzum4BTQ9voRhedoop2GNsxxGcZV7XDMPKzYsgRd9rDnw8nL4xdjKUC1NLVhbSKknkyqTdzq93dzokx6S",
  "key9": "5VqBpuXUKATZHSJyuMLWvUukzQktHXeZSsgs5R13JFC3kvZFEyTxJ3eyYjq7pHLQk2pWLCtGFgBfQo4wKEGCP346",
  "key10": "2GEcrQYFUQyFm8obiS1KvCg98hTJb4WqcB9d8SpEGpXBtEm8f1XzrQBf2JZvmQN8EoaDYZsUXZonZkBNwAyGiD3X",
  "key11": "vwrvNkKBASqG7kVVQXgu4fbZeaRpQHfd6UbjqR9c5D9VS2G8BDZ9Z3E2WvWyEZyoJzBTTmroVry9usUeyJiyfLZ",
  "key12": "3XMkFvsuDLkN97CLjrMQBKGXub7Y2oyx1yiGa3iRkhzuwbnZdVrBWDC2Z21LQZn1x5gkAXBubwz397DWwcJEo9x7",
  "key13": "5hr7fucdT6hgiKR2WhKsed76wLjggjFMxX7fSc4EnEjKEAwtXB7iwsVGxiAUSmtb3AxCEWMAmKG6VHDm32LBbBaG",
  "key14": "2juc2rittubCQacL9N26uAYKv6AAm8ZRQeEgRDcmV1DLc4BNy6M5uR7SdwSdzY1H2NNRYJMe6bJxZvs3e1r3bL4u",
  "key15": "4aY3LobJa1qNGxxjRwsjePfHrZzb8bbNxGnM1JqU3HoY7pQpVfTohggwwJvwYEjiYH5NY5T8Zks6gpyMtkbg2dvp",
  "key16": "4ELKKHMnYyH8ok3BYEDEBfUawc5oCBdeUfdSfHN8SwgeFCtBjpQyW5ueQi8vAro76me5RS4GHRRUJCJuRTWTUEDB",
  "key17": "4yuhonNn4XiRWBiqaPLwFoEhN4s5kuy87L7iB28NBXMxJo24QpGX2XomQzw1hZUULR6bQccdhXA45tsAMr7VHfeU",
  "key18": "55pRya3JjwKcHUb3DTuX42uasUyeVkHkcJyDaEEPsi8RDZnEyG39DQUkMTuFfwg3nob7R6f7HE1TCMADb8e5Cs6w",
  "key19": "5Lf5EAtQN5SVXfKbJACLjWZjFZKXuGKUUzQFc9qNrjoyBxxmUpgi7MAFVqJM8Ai6jXaERQUntecB4LRHhfNbNDFQ",
  "key20": "4cPcWfbKrG5SxWCgdYbqRxxpGQHuAM84x115wyXsXtDUhRComczyJPoFmQwVQRoQfVBEjayNdXPW8ZyyAcxqnhpi",
  "key21": "4oV3TR5QzRkR8bHDUU1wVJ68sATCzEbJXkgKTrxbA9Q7XmrMDizrU7YGDHWd6YpBb5qtijWneSWhAQyDr1VQFHFh",
  "key22": "3cdNPKwqa7MDHTKwuZGZMuunGSTEhpBZBQqWYHJQx9rJAx9Pi5QJzmxKP4G48AWAgbZjnSTLNFbYZkWS2T7H8zMW",
  "key23": "5ACwZ9i5HG89ntxUTtKQ2B13Pe1nMajGozJJYr7GhGpCALD1x5uQxrM9G575G3Yi5HfZVtt6qnXm3MUDPyULs5Sp",
  "key24": "33nX5G8uMN9tfW6psxteqCMM868jmhEaZk97xbu8VTohp1yDFqa7TiD3uwhvJocZs3Fh27kBH6o7wKoLiSc2HGTn",
  "key25": "2AAuJ4U6xUj9bsxxzLs4vvoguL2NajD9x9BA6Kno9XopRL8UaPedgKRQTG95o5itoJRa7sNtHL2DimetHqeWf1V8",
  "key26": "NoejbGK6o2vusAK2yVLcUve8BjdYJWQ4PeGewHRJP6SxAwQiktuStotbubFsGeGs6mFGQcMGuqFg9ytY87AbXdL",
  "key27": "2eb6wULRofztR9C1nLpHAqSq6rDXXY5FFVGzf6RQtSqr11nBKQXkrmRfjxi72UZjB5h39DQ7RU3ovZtP6XLcYwCs",
  "key28": "2K9WKEruNTDA3SfX969JmzWSCiUaRw8nt3JDk9KGCojpJSFjAde6AcHMnvmJZDv8bsxMBNEufoXDd5H6d7HCzFNE",
  "key29": "2q8wCwxBRyhywAqDh5rDSkBSgL7SubAvkjk5VRK5pdNG58vhB6zMe7iqr25Wx4GGQXuAsADeAD3qQK3vifqpzSe7",
  "key30": "nse8vkn56VhsxCgURBit962WJmpTEe4YCmdNyLV9Ue3Ukuf4qG6sioen4gXUwD2cbWbr2Ezu1tLL9zGWXpbNDkf",
  "key31": "jJwub2Mx6GJh69GM9Dn5WdLAPTF2Ay7SsnBmh9kcFxsz3qBtHYMVk3cNbwfRF2Xy4pR4LYKUvRPHB5d7MqC95fi",
  "key32": "2MJpqhVfyAERKKeiJoaR2n9CqcGXjdKFKsz87Bx6ffv9qVw5Q6enx9GehLFEVnBdYa7WKPep3pZi46RLwzqQCsqT",
  "key33": "2Uvb7jdGhQz2TKaEHUi2oaQDP613mgcywm3D1pDGMcfYTr535EgMMSpvzUGZxcpUB2Jz8LGBR57zswYFo4EuDbFn",
  "key34": "25ZLiLtyyQ2LNQqzQxGT3eNc5xEhSyjaKTVWXoVSP6aLWdgckrnY2gkcDwDQePnw6neRqFvSChDi15VC2Dcp8q9b",
  "key35": "5hhiV5Lnt9uh6ActpWQrM1iC6wgfcFZx89cjBvdcdvfBxY2GrSimxzEdF1hXghDiSJ8zNjpFdAwMLGmat7MvJFgM",
  "key36": "4Yqj8JqFmxY1bXGENQmSBLC97YVWEMTsfTYJmkChMYbHJs5CUWPWeU4zT7XNdLAJUYByAacCx27W8qPb1qxg3CBd",
  "key37": "4oKUmvNBcg7aArro8wz9XpZR1pZLU47prVZm2BPGR3ykD7kfaeNLvvmhmESgsNWhzEmJFLRQu54DY2rqKJviDV5r",
  "key38": "3h81dE2dKJkh3wirJVRacPxndDxgbEMWCQwfmtuPJUdrP9CgLeng21iLd5hrdB5DkzhG3BPtYwzcMQc81HaZqL1J",
  "key39": "3wiScbJ1Xg4986zxz6aqUGZ5NsPTDeGie6wY6VniFnGtq7QAhz1cqFSjgizN28G7JPEsHUNFg8g8oLQ1xwU1Lvjr",
  "key40": "3UtrzQvr3qFV6vtMnbcwMSN5kStM8n5gPUtWzmv1ug9FWP4mmE1ZuLGuEV8toPtbu6M32Te73EuGXgMinTzpJyfk",
  "key41": "2q7yZBL2Pjv4mxC92YWFZic6dfbuiyb5XHX4JdVRcFybqfRMs4DYqoeXfFkfnNBDq3GuyhqyBYWMLHF499pVHdrq",
  "key42": "3WvZJzwHo5eGGwyBuDf7VG5LbBtQP67TGnoXBPrGzypU38LKFkDUBEqUr3KJ1aEdXm2jZQs38ihKcdrDxLp6w4fU",
  "key43": "4zakuFCjVoGGvP5rAVmYC6KBpDx5Y48jedgwo5EaBDbcgNv2rP2N4M82aywCESUffetGkRMH4d8f5ogAmmtP6qtv",
  "key44": "5ifCV63x8rDAYEL6cJGRWeWAKsTR6VxJYAoqVoxMnrnMWXDVEHpeXCLcLkVXuCzs6eLB1XmZyzKWz9vonWz8CAZn",
  "key45": "4dTHwdfv24Xy444Rk7wWuG1MLv7W9bjgNMqQUDsU9hE3SMjYNNF2nnEARhvYuZXbRWx3Xn94jjNuNzXQNTAikCLF",
  "key46": "3UA7pPtYY7uLakFNT8zMVirF3RFnN1eAoN1sf1zBjVRUJmfjPUniE4McVkfhUfznhVwe81pfcDBznw99WoHVYAo4",
  "key47": "4u4LXRuNDHkTx7ANeB8uF7DW4qTwT4UvE4Wk8aETeqt972La6cjxHnsjtphXdMT5BFPxCNtSrFpypiV64HqnnTKn",
  "key48": "664Z8YWFTyGFDFcUpq2m8Vd9tsTSLt4tH3MTFdbbn2SUD5bTarkwcGw6PkGemEuvCcaNk5FgEFaZjhiTCyNXd9Sf"
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
