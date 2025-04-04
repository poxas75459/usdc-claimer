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
    "4xCiNMS3bEjG5BoLeQCKvj8PLEx5wCwvYMukt9wNnWJUzRM6SKZiBB3YmADt2jW7DpV4ibCwM6ZXTJ4KFAC1MhaD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46sD87JK3DeU3BBakErxxfnYRT1Yscn8vQ17THdBegNfxyFYsuuuSdMGDYDkUvhT5npYJNCmgtbURY48D6R7TZvS",
  "key1": "5KhimCxyNw7yRx7aRCSxmWqxYys2fZaKUiqxbT4VN5x8CTmzRa7mY5Q4epfprhM1LT4D3vuQvMvowNzAtUeXAuEj",
  "key2": "5r8dcyFEZQ3WRV41xSskGXAKwNwv5hpq3bVWJUvLBrwPAmUpjUotEphRfyz33svzPEGiAr379N8B7fFPjkARrr29",
  "key3": "4c1VxagyXHiYcAiQNazuiDfsQt5JG545xNkjZrMKck2Dp6JBrNAvRs7SFDg56WKEeKKa1AtwfuCtF4AG5Y8Qgadt",
  "key4": "51jruxWAdHBdgJyThiCCJBhfV6Dx2NXM41FBzHfZds69dGTs6zikK9uxQN2ZXrJ6KiEoZHwFhtPXHx7ZDjWeHW9N",
  "key5": "65rLPFcgmgMgQ57uzvRRQ2E5hZQec2KnriZ5zswL8Dt4mwvsaMb9jbTqWUHVvSjFYvBVUmgZS2chuHteTdBpp6jy",
  "key6": "rDLpvoTbTvTSrXLMruD1uWDBjYZ6UQbkFNWsQiXUxuuodnnxArbJ6fANjzL64b5XFW8mV1ttbUgYA6Ai14Cip65",
  "key7": "3ro9pZSyhPQTeMPfRMumjFnjYANBW3ujgGVi9LytqdYhiWJ1L58Frd4Sr6bynN1eXeCC3erWk78kFaXzBqe29hZN",
  "key8": "b1fzFsMxbiLSLTxh8au1srDdFTLUnid9RL4gvvFjPkKGUmtxUQx3VkR9xe5s98q1QEXAH4zb8Vv4EnegF3x9Q8U",
  "key9": "5YXL953gJL5vgoE59UAfkju6BVDmzYKQ2VUjpH1N7yqv3KX8BpzrUrsfe8Aeu8Cv5WhuNyWEZHC8Nnb6S7fz9gM8",
  "key10": "3NSKnoxAwERd22zyyuvCdxrxUubh4VGNWKJJaKDuuo57Z51gwPr3LmUFZUnb1kzGwA2vrvZB3nTjAmxF37C9qYTc",
  "key11": "2CgsLA6neje8jbpWuGhCaSsEwTgm2YcMrdiKHLCrDiBdCML6epVwSAL9McUrSbny5eaojsVifMSK56RJgF8qbDE9",
  "key12": "ysrZUq91coPKX7rj6DKEisxakwhy6nzsBKmqt5yM5Rkory835BmbFi6RDLjUR2ZB3jNPC119itZjUnJANSG8BMX",
  "key13": "5WuhRuEiGLUVg1CARDFYttW768dFmuKAJp4ceYsxFgidGXYfKhQFHQ6s7RghmbosybF8SaNVjr4CQJaUtjWfbnSK",
  "key14": "5rtBTq5stsTAMn8rRFJaLM5pdJBCcpf6m5VaaQGfip6DnidevfBGUHpueb8CK41wGAYmXTgAStdXShqoT46Vxdwt",
  "key15": "3Un2LjNgXdiL79i18PZBRMKrmqCHAE9VrMeyxpBCm8vy8UfdXm46z1gAwCZQvUP8AZqagsoBJJMaG9mUd8HjiRpp",
  "key16": "3VrMv934iGK5yczC7sMAcNoBa3Cm6B4pVVtX7JHwipx2yV6SuKUxv8DCe2U7iTuP4M6wpit3usRRQhzD58VWMMMP",
  "key17": "4VHjZgaE4gMg57UsH177LYBcs7NuCuyjQVCjhSLqR6roze5NQGW7PWSACTLCP7sncZsLD9jufJkW4bDNMG94vS3x",
  "key18": "51k1cSiu19j67hiryt9rcyYxybJWtpwvL3wv8US1dziNoyfVTQaWJQQ88eP5XfjaWF6wfNr895YcLMFVjFHEJZLu",
  "key19": "3j1KoFt2aM7vyjX3QmE7MwHeoLgQxAKFLYnLUzFhsyWtmAZ39fUaJRy6ZCH9YTnXrUDVPTFe5uy6mncr5db1xWZY",
  "key20": "4LAytTYYPKPzMMSwt9WNC56D6YYNbY98fCLk9XzWPhZ2rock5YLck8PY6juuF4kMg7nyduLBTP8LrQHm2aj8mZHM",
  "key21": "65D8wLtQ2XbGtA59H6qmN3fa4tnwdUtgTv9E1dHgeGoCM46xF871NxZMA1whAMUbfupyK55uWyCZDm7f7VCYN9yz",
  "key22": "4iGdxX8L6Uj9JpoVSH85NvY7X1CMxnsTPiYXiAwjrsTBT2cCCd3c7MrEbi3K9HFzDWa4wc894rCa6dFbHTSqbDcp",
  "key23": "4Lf2qBY7RS5DjHcZq6LxM97pj2WDsAEie22EnS174RBLSFFBgVJvkY9nPMMZPMripbYLhT9LxLYrrNpFuGQqSio6",
  "key24": "yesTubYZz7vJrouJ7Mgo1fiUtgCfgnf6W1zcqTzHizTFkoM2bR9kPAXY7UDbWTXhAaGPqduutRzyBUoXhVMRNNs",
  "key25": "2krijTwZtqRNtxYNNow4nU3v8eWp4SCg5sjVEFB2mEc4bPdEWY9GFTg5SRMqysVhujRZ2UZ75VxmD9FX58NG3ZVC",
  "key26": "2W15X7vqZJG9rUHU8Mz6mProqfSKud1S9N11ijHWZQRou7bD964x3gyiv6DxAT3iUjzUbmdXWK9iMGKA6b2FC5gh",
  "key27": "3eFAaLAE1r6cSWL3amVbDhE5ePmbGq3iWrnjSHi5gQGrV8sWWSEA7Q9QfnE3bdk5UD6q5dMx9yckGr8SDnpaUWUx",
  "key28": "5YvLZ5q3kTM5jPMzAB2eGtRHkfQdNqZkmfmHeP4gLvjwd112K8rJzXJKfhSrQG8xmW1gqXWTPKqvbsdPn3Q2ESe4",
  "key29": "4BkUVDT59VYZK5tn2MzN3uET3Ep2Ez3q32EQXoogVpwq6mwiZ6EFH741HHBaXx6nCcouESdvTvhxLBWqK5bxwPJ9",
  "key30": "VtHXvDityJS7rmzqKKeLNrVMLQisToAjaoHkDq8PfnPbvx4RXDpmBpWcBietk717qUUnY1GDMpaRiHyKVbw2uDR",
  "key31": "4z3FHW25rcDU8LQER8vb8ifDUND6dd8saaTuGSz7XSkvmM5L49y4n7uWzPGvksy5VXaSE1etbW8t2DrnpNqpojqF",
  "key32": "2K7PVGKtRVhqed4pNbB7ETufeBsKdcenPsx3xL3mg7ektJ7BAcHm146J6UD8Un7tFiJXcRoGLevjX9s2Rm3Ap44n",
  "key33": "3UZuidNbS6XrdbZpHLACaqzhoF9zfc8iR3vrA2GTjb237N9gwix4cU8xMv82xhNxY66Rgp3g2qvNNDsTCmWbTjpW",
  "key34": "3j4ZtVMaDHBp4kGjSqmi55JiVwtruumvMETtU29ccx6J67wadAtXbz6don4Lv14eASSRitajt9d3HFvYUWvMak5T",
  "key35": "23QYgs4gmUkQkbv4TCay5pKXacRWxBbWAgDUHLVJLrYJYn2nBQiUrWXUrCmogpMtm5JGq8aLh2HuvWJrUtWXcbVS",
  "key36": "3K62JwvZWvVCZ2wCNpvzdWMa9zMjdBus1rzuQt1gnJAo42RUmmzdKDrvUHGYK1TG4GEiC48m4k4upHBjznBHhrRY",
  "key37": "fHX3XRyh9MG2yMZGrgES66Yso65FLb9YgqvoL4BYf5ji5HJ4Gw4RNCLRhEDrW9Y4V5Hr52WqjU4i4GnUeUc7Vat",
  "key38": "2BEufVSFUZfhEFRjs58E9tmKLP8oGX2v7ZXFuXfDCSkiCUmRHuTqUGC6oT73SXABpCLjhupadmNSVXj5xM5AUKxg",
  "key39": "3eufZKgYq6ULk65H7yo9Wb5yw865XB1p4bR5c2Qgn2dpzMEEPoRBxQPYTwYHthr7AfwTFpL7DHUQppD8xqAjCYLc",
  "key40": "2t8Gy7ttsUYeQbeemaVdKekjawWMeSFwsMd6gRsWQCMckhon94ekw7UvUTdtCUNbvEv5kus3MncmzWeHQKg3aBMX",
  "key41": "2nD6SjdVby5mFQnHX6SJDKdmAAKic3nCSwbTN4LPD4QMsA2R6y4NpxzopKqYu2NtVHPmpFs2gS7RXS6YcNB2NvJJ",
  "key42": "4Hs67cjJQnSa8qRreXrXgEzd5AdzP9vyKY3L2ebTPXbJ2dHPMhPLmKY5rLHmbS1iU4Ev6xs76QfPavRdaqV5DXwm",
  "key43": "2hdiRnwBtUrikBgWoTbnHqvC75sV241jwNh5TfKUxog9K7TcCWwVXfsA5Msvhx1G7vfMHPrSHLTrgjGw84ycfSy3",
  "key44": "ges1jWCZXho5pujYupytgWTHt124LqAe62MnfJKYmdWnTeEXTZmHggaXRV7G66zRFACGem2YLhu5qBY5TnEb2dW",
  "key45": "5dqNGg1V21GfWemLAySVPm3oH6Tw2DctUngPuWWXYQihD59f61xrKVKZLR44L766yVab4ywPVPbUWUSVG8Pxw9D5",
  "key46": "4k65M9HSedwD8gd9YEB9sCj99jrdVEiD8MAVePkUrrfi4JodQVm8pdHdV72zBAzPCE9mubcCNYUaiUpVctvJzExa",
  "key47": "2F4NaBh8nuXawb5kWB7iTZGK81NHN1stXLpsyjnfmKgAoY756ESCzXXyKJVMSXwNh6hSRSTwzHogaKCC4NJCPmpH"
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
