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
    "4Eyzux6YkvwYk8cChvxcGDvRZWyQm7wdCChoHyZN2pUbxCnnmtYT1R7D8AUya8552KinUxX8rqGXCG4JC29grB9S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nZdprWh86R4MKQQsrAB9qLVmM7KueMPx9XzKJuPDfPo6rjtUFoPsfvgpizDmFgK7BzNswUDbgrfLq5h81VXPcmo",
  "key1": "3j7oyYA1eGPAAuHKfeBbuqQMLP1G1hXUmnQ4jf6dxrHoV2iHYVfFjiHPU3mXiAB7KkJFz4uki5zQ6XAzwgrKLLaW",
  "key2": "3QpRiwpBpmPdd1ryyPdHevfAM5mwjRmPmc4RfdJsLweAdLDfUJUpBPUpAc16dLiySThcq1Lbobfo7UuqPejfTvor",
  "key3": "5PsYpSMJxWkcZa5R3wtYmxVpsQkWCJL9efLJ22v1mVDJ41TKsCujwNtmBWBXyvby3RzsCXQSRXWFF5sxPkwVcJeT",
  "key4": "5bQjggh3xMKDx6sA1T7fytRihNi6qyGH3egpZn1is3TZn3zPnC9PASxNLd9sppeCGdEs4BzQizEZak4VnZLzzsfo",
  "key5": "3mmxTr4Djj8464ubFpjKuwhV4btDM8LLbcDW4STkreFvEtso2LFDbPFZ68WYKZxiyftXPmXe6BjoTxxK7Yfo3Ao",
  "key6": "5R5Qnu58FNYMtoJpTL4tGNjDPP9ydnquFPc4KMwT1hyTAWvheHfaRH9T1BiHRtwcQcHNLt588vRriqRhYfqCQAS9",
  "key7": "5ib93YRh7pBcFVQov2UVZcQLxdy1ZNkHptCAhgDk5EpU8DtGb68mU3FLP4ZrzQn3r4S2rSA587zARoDVEFY8hVgY",
  "key8": "jg27ZyecpcRHXZvqUhgrP4Yqhny8gwWkWearFjwWwj5Va3MaTwadcAogG8oCNiPoKip9V3MSqPNG9DZz64nC2FA",
  "key9": "2FLrGWL7Hr6iMPNSCY6LkAs6wo1YZhKt3N8mXELw1eaaxZcpKFmFKY2Wn3Ss6EpF7VEaGSwegtPAGvfqf6ex3LPf",
  "key10": "39vgmq2Aghtvk9oDGZYWgeJA2mU179AN4gmxj3tr4e8vyvr3qhwq3MjWoLwUKo1X33VrvWGHu1xvaLJTcafvZFJF",
  "key11": "5ZRDgyJg2sLSRBbEXnGd4A3SADrXUvHWozdus5sksgAQnKLqZuoJNVJMwTiABipKzKok3vRpsrR7sYojCZrYh2N6",
  "key12": "3Q63ff2ERokgVahUhRgTNJqSMLKtUwsRsR8LSFrPo5vFyRtnjxVZkiHzDZkMhhpunkspNPnHfojzSnVqYTvp5vnn",
  "key13": "2H9f9qZa4mZL3kfQFjdzf18or6HmR9NUN79uVSHtKT7oN4RznYvnYAPiQJQ1bezsYfAAawhLguzvauBEp5ugKdLr",
  "key14": "35CUzzRhSvT3erLyfXPnGQVPb3o8CyYEojjj893cANmtv7rp2PwL2j4tVd8up3cte4ttjiSB9nmgRrQ6P9tEyxjd",
  "key15": "eanmC3mJ9pp1HTkEytE69fSHQX1eB3ehpe5FDajHzruvhRWheqJnumJ2E4TF6GFyohbPMF8RTni95YxFmCwv72Q",
  "key16": "4iHS2GGW7CNLCnzX5WBY6Dm16q5HU1w4kPepZKU5tfrojVmAHkAZiuiDLxc6rTbqgEPGPZYqRCQeFjTt95cKb29k",
  "key17": "2DsYvhPZmco3TYWzVJbdfhoXU8nA1hADu6EPjaEDMjd8V1A8E68GTNWqkSvmZXir5s2nGa3RstN3DJuWG936XKvu",
  "key18": "2g9oF63fpZXsSYgFhW75kkqAPTvZgVX8ZV6EKFSmJhDXvfhis94ruWSpy8yUt736dxwRPGuC8dN91ZJND8hTeyPm",
  "key19": "5JJpw4pEj2RLiyUtA9pZvwqiw6wP3ATTVrkad3fQgySNTyAnxnhBJHdkeHW9Go4vZhDaHaPLbaGaVCxVj3LmHJ3r",
  "key20": "4QC4fpfdeGcaWC3exw2iKsFva1btfxvBsqQHGXjLdJCyqf1V16eQko7R8M7tJGrSUY4HAgfMF7cg3Q5dGhWsG14b",
  "key21": "32xLHdWzybHHc711ucYkAQAPuvz3emWLSTpX1wWe5r2YbrbdhCgHu3TC1rNL8xfRFyrXEyHiJnhBpG5TsCqttaWv",
  "key22": "2SFFtBjDdDo2H4e8AEpRuxHHdE9JELjL6mjxym7DvFbBN8DSzQhQaL3Vfb4ZFU9AY4d2HfoqrXaczqA4jE9HS1Ef",
  "key23": "5m5shnJuBmEGvJefviLPXeEWoQSpLjF1dfCENJ6ZCz5ND9WVU1jyCjHGzDH8EtMRAJ7bV42FQVkzkfyMBmv2Y4oL",
  "key24": "58t4HArJvjXiZpXZs7DwWKDJStREYsXeiuHjaHDmFPXKsVGSX6W1rRwMZtFZVjXeuKW6gue3aAZoBBPBGfMADnr6",
  "key25": "2YPvChvMwWv51o7Mejg6TEpuKQkYQ27JPGFtkUsHEC3agJd5i2g6b5D4FyMvd7TicFf1EuU5EKgBmfQUeJjgMVUZ",
  "key26": "5CHU58Yqeu6hFPkRT6KP33NzKVM7MoVhRTNQPzEtERd2bDqMwNLfcT5GE1qM4HU5QfJZkYARuSkkfgpBaRwcmR8k",
  "key27": "4ZuqCiyJRC95XDSqDPM8aTNEwXZg1xYvym7KUrGK1NP7s6FKhWVi1A5YyNaJ4EXcuLznXRUco2Nq9aqaR7DCYemd",
  "key28": "3nFyJvwjcNaxTxwnoQwtKzZUBv9T2pcRZe25mitbMnAUxxrjLTwW2wyiMKXLqzinr9sprffQhq3w3b75UxtoSa2p",
  "key29": "2Tg9oC5J83THnYNeYK37gmRSDP1q86rRpFdeVuBGm3PBJB5czWryhBE8QBMVYRtoUU1AsY4Md782r3naL9kEcSjg",
  "key30": "h9Vc9fHKqBLMjB4RkM6fjxoUrFh7w4VMXF9PbELeMBT4r56oKBW63BpjQN4vHWz35HomPkekBGKHpMeKaJ8YQeE",
  "key31": "47aqtYr9EJT1CUvgShRxG1Xwy8fq4vTS7sCJfHjDQ8rfS5s2i6YQoc9da3tpqKPGQuDvUN9b8oWkjXxJH5RMCKYE",
  "key32": "33SeC2WEdcKsosgwiDhjzoGDtvNaQCQTihm8GCmbiWxa6wPZfe1dauH3m9gfmptHJwtD84oQ9khvFNqnCEE1v56Q",
  "key33": "aGFpyFrS6L359bg95X1Arg7KM2nrhK6nYoiNVM7kRuLan8db3ga6nXYDMEsNwaS5xMpMcn2SVm3HjCXigEwo9Df",
  "key34": "2cVJ9D32GtmDCqsdf94xbnvMVxzQTSbmfyzkfKRa8aVRakT8jhsiLuMgT2KdkRvkeLQZdkUqeMYYyCcbqYvpmkBC",
  "key35": "4qPxjuQQsT1yBjvPM2PQbjZYo5uTug6YNPFpCraq12j4nvApVix16b4MyW7hbcjzeCvPeoq8uRvguhRZzPfJpzEp",
  "key36": "4ebbxruegevG7owAFkNfbW3cAfu5hvwgnxU7YsCxBNzogp7siSdF3XFjzxNUTcyH1Ls4Caz9ZJFLe2W57SLxUAzN",
  "key37": "4sVjsh76iofyVfQW83y5rr6UrMNUdzNu7WGwZvoPmLhGt75dAAktqTQbiBZMkpZxC3pNCMxAihodxPtYRSDLMGZn",
  "key38": "5wQcfY4zLzkfZyH1hVhW3qAei8E13V2EvarL5iBCatXBCgHpCUKmPvJVmQxBs7WJs9KNLfZvuGgPd8rxL37DA6Mo",
  "key39": "4Tn2SJPFBMHjJLXsHjMqaSkaz23SqBRijuk3nrtVvC89ZtAtRsszDXjkSsAzaoLpwbBacV9WbeCRDB4T3xknYZvw",
  "key40": "2fx7srnEQzVYcCdnZtLN4qya2zu3qJ8rR9EkYyh5ZJLSwSLjS9vxQDgrr7hz6UeTkdjSWXBmfzYdPnJpNpfA9m4H",
  "key41": "5rmkKt95hrrCMWKTAJumkVCdGJ83VZU732tS4sNkCyAnnJHgHHYhhTAybbfUzGnwxbzxgov5AsTiRfR4BarxT45H",
  "key42": "2RCPWLFcNocyPL34TiP9s1AEUXkBvgrKZ8h9Z5Xz1Uqmm3j1rmJesg9uG5qoJSGQW38UXs2f2FP81XmJ7xBkhNsA",
  "key43": "5hKyJuBJLUhPvQpgCejfeKovGzfRwGfw6Gfe7Z2WX2WnRWJx6NUQZHtMonnt7znT2o38fFJ8u2iHkbusMSKqiY2L",
  "key44": "J72UxTYMDjtpifWGTE279Eo79hz5sgxP75Hq9BYmAEYstFSmrKHnnLcsbwrVFPCEzULpeuaLNuHqRxqLK1Ms53n",
  "key45": "jPrJai36UdfvKyn49XZDpiGaxSrAJ3PYKjrAyFxh1yhefUUUcoNM2tW4hVRL3PZ5a56hJKucxZNvA3eJekrTyhj",
  "key46": "2hvwV5cBRQuWx9E9sm5TkdZFee5ArVemFLoSYtMvm79PygrGb4YxgvR3BCmh8AL9CPwtcCvLrDt8oboTC7z4zv8y",
  "key47": "3S3MweET8vSJWwVXsG4HzDvopM9m9kHDFHJShJ47MdBNHosoEMmhtCr31u2bRmYK6pN6KZpAGuto137JifheHdhK",
  "key48": "CBPPPfHnNVpTWKjCDfC4CKjqBmqmW1McbPKqBLRCKnFGXDamdpycQbgZUseWT3HCj54GQFGgQY9Z9BQVux3mHfy",
  "key49": "diYD839xLUfNEzxPSBptRuCsCJNjZGkXgmjqPAS7ds4hbRnbfa5kqB66ErbcPKbTPTxPenqGbByYc16s14qwNt9"
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
