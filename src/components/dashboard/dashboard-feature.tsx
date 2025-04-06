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
    "2G45YeK1U9Q8h9rs7GwmGW9CLRfFVU7BqYWvzSs9tgFDDBMGJtsB7d3f1X8TgpwQpTPyJAnnSSDmCv2AcYokTp1A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3e2Evd7NdCSLWBtekbqxdnuJY13wf6R3xS7AkhstZGkuQXeqDchG2wytT5cM41xaiy1GSgbiQwoMsacgDp5Ccqgs",
  "key1": "2sdYvzaf51n5Ek6MWq57xsCEznSe8TosbXNn1GcTo6v9cJx1UVGs3ejhBQVK6ZKZMQTYSFvkLbzAWijmkQUFW9j",
  "key2": "5cS4hAAWTjdeSbmqAW6XYqTfNEeiAUmvbGRTmiskp3E3QUWPb9Dp8f55bSztbHLW83RxYtZdUeNiWm2iJcotDFgP",
  "key3": "5T6SD74s2TqcLqWBg72G2w1XpTsFPwvavBMDiid2ii3ZebKhAb4J8BWh7Sxwk5xULUxAFSdw8jCTE7AArsDBrhM3",
  "key4": "9vrByEKj1QTahBbMVBbBUBRSx6fS5KoCjb2vkwtgyroNkP9XuxQiQYYBajbs5Tskd5Ku7aAHbS49CS14r5G2PJ1",
  "key5": "5t7jV3iGPXbVuJojqGAVM4sCpQFp7iikkzX1eT8sg2PJJL9GFc6y4AvhtSnH4wLKQ2U4pPj96JrYRKw7frGvxQBS",
  "key6": "2hBrZwkPwbKAL7mCZFdvd563TtQeeBQGFaCJySPqtAbjSRkMpUr447No6xbFjAqe55to5MtbV7KypRmfAg2SV2iw",
  "key7": "2F937PPaH4rcZbXsFUCgvPjxWTegJ52hXs3B9uCjtmx1XTud7agcXYhZbAfZ55WT2GCGzGbq9kzN2fn5vQKyPEfo",
  "key8": "37vtyYudLKwFo1oSzRGtC4kUa71ijKyvm3uoisDtyWQcP7qNnknX2ahw8DrwFcpv8RB3323Rv8Qc4YjYzx6MBN9x",
  "key9": "3iZ6g1qgTBxNQg1iNbVUCoHSSSWiePBd5W62Fiqc1HRousunEPuhQwtPdrRdKwqXKbvhW7Kt7T22XVoo95LL3gvz",
  "key10": "3dzj1gNHdQ6GvaomLj4KUdss8jfDKcQacB1cSLyHGxidBife9sMt9og38y24qokP7w5mr9b4mdr8CvhD9FB9TUzz",
  "key11": "2qHtUJB9Rcg3shHutvpKFZ2QVDWrZ1mu2aQPRJjDHotsW9iHQs7JjVdJKTvHNvP1Wbe87MPRSMzyX9XHn6oZ3M19",
  "key12": "4e8URZ2z9aUhPrtEmhz3Ask6FybP2abo8h6ovrSs1EhnvHN6ktZ3EhHg6wTCLjhviDhmbcHuV6sde4sY74KgW1UX",
  "key13": "3GEAWzjSMy7mW8LgV83o5XS3nXWcvVA4kWgQXaaMiHwV4T1VygsDxKQrhARKWfsVwQdBWS7RtCEjPqELtFvGuhRo",
  "key14": "ut56PaZK7E2Fww49WoTwnknSvmjW7Zg7NqDrwvfgLgb1djfGYkfTf6rFDt69qdC31TwiaHCV6MBXxJ4ttr7pAcY",
  "key15": "DFT3ScDHrMFi4pcCr4ekoSNNAvmt3NTj5MaZ2NQhG1Q9xuk9eoYKtABZ2XYoZoEnCwzf9ont51BmfFuZg9LMxhv",
  "key16": "3d3V9mLoXjFi87evK7soFMp5FVYPcxohdZ4S14dXXYyXvTo4XCGKABoCsa1Wtzm5nZT6Z147neMWwNo12RLxJmZ8",
  "key17": "3SgWqa4z1YLfzTbTRaAoQ4TdmjKuB18prtrsXaJvmsLaVudxExJgS7dYQU8z1MayrcjHaWDPZ4TcN4rqrCDHzxZy",
  "key18": "5Ts2N3YiGvmwAjNEnrDPrrwB1VmMhe9w2gtJLKHXknqgML91yBdKSUsgUsJpDauM6RAYS2gvijkie2Pxs9rNGHXj",
  "key19": "2YDTnb1wdZZjvi8eXjuLDY8Hn2HR3eHxqTScxRTBJurSuMHp1zJ3FZJvrZTMoWQThRhkBmcNPPUrEHMExkGwGpbq",
  "key20": "3oHXuGrHa9GfwyTThYA75jKnx6estH4LypULTk6D1em3meyiE2vshP9FCQCketwHpptXsMJ3BQrwk8b6Pq7hFmHZ",
  "key21": "27BBP8G3zdVLejjEP9vF3dviRVd4vBs3MXgvBnR5xwZy5ax5tnCwMtU8PgxHUKxw5TvxE8trTgpBj9HhfYxUGMZE",
  "key22": "4zqaUsHEuGvzHqCrX6KneEcyENw5yYWJAcsH6AtTXymSRahwUxLQqoccHmeuVo6xcf8UdCyBbnvDhpzccMjLCghV",
  "key23": "3oCcpEsxK3EzwxSQT8JFvzZuFWnw3zbppYXPRJNA4iHvJyqj3K9gpb61VLbM5LchZrHgs8bAqPP2jp4BQ9oqdH7i",
  "key24": "5if4FQnRdKx89KtiKxzfq4bMxfX8DbvxzkHdY1AQ14tu13b4HXgCQnBV6mabtS9X1pJ55pPoXcXvLBH6vFuzUyoe",
  "key25": "3gpvtNXUfcyiYTN3KpsEiEbg5e8mFa7NV4bAf5UgEa6n7CBsh9jGzb9svTx9RXmtFMib7sJh3XNXApmJimNRmfyZ",
  "key26": "4DBi8cLTDJW95cYk5SJMBnG215hRhcZ7wSg1Evo3hkZkupPi9zGae4BUqhYX5ekRPXPmh3V8VUbMceVMTWKxetYU",
  "key27": "4i5cL7Rc4fodWsBVNDqoo7aqyeNSthDqLKeMKggRoaQkudbhQTUMC6rnsPzEqUASE2hYDi4FwC7kQMbL5NrYCYtt",
  "key28": "5AHdwMxKRYaZQsMRkrRSsWBzvXrSkrCNdcWzD3soB5trRZKtwtWrKU1NwczaaZxS2Nzwy9F5ajepmSvisui15BW7",
  "key29": "3MXy8MrHrQDo5AKRh9naVWCyFH6s66T4sGUUaWdPDBTyu7Z8Q63qvc3idRBC7R8DGbAAyBSpHA9zFEsZsohRWo1g",
  "key30": "3ECUwX3RkkZAJM9tJimqYnEB3ivJvqdfoMT9ts64v1peQ35pmPgcYSQF3CfE7diYWcDXyY6cbfnoKe4svDyvbPoJ",
  "key31": "41SnjZYZypMtyTvdkPb7V2ng8G7jNw5TECapfWwyDV431mb48CMFpCPWk4fV9aiNUieLALjLa95kFqAik8CSi8Ro",
  "key32": "3GgYnsfGu3m1aYcXz4o6Qp29fYot2BCgtgMUg4UxRak5RXc8NAeZEyvZT9FRow22m2dUdqTF79wZg9EdrruE8tny",
  "key33": "2oXnZqUh3Gj9ueYsYTCtU6JebquvSDKgUbdJ4NzU2ZNciv4obeBfyV9hx4KrjDK7WZQbEMBxAzjmJVaodfZiECqQ",
  "key34": "3bcbMdrPYN1AYVrw6GMcATapaC178aq8BEze4w3Apg92W8iDsFLEuqSUUfY6H4eg2aMweB7cye2dbAcwT8sQ7FRB",
  "key35": "qHZZTrbY9mcJ5U9zqXWrEL7PTFP9ASRLs4cXz96NaAdtKBFcfgCFELx8sdCsDX1XB6ZqYnCtRd5yvQT5HDUhGXw",
  "key36": "274kibEDiiGCEsm2QGk6ciTdXMUvVMBYWbatC9naETRkiTbE2tCor2gg61Cje4ipYs4iBX7ojFjCdv1tyfiWwBLW",
  "key37": "o5upHPwsx7HaGN7gj1JiRD7TsLa4BQp6nnSRUnzKNMTjRAFGMTijmMECtHcppBov5QTPyf9KHTXX1PCLR1aQafJ",
  "key38": "26ZuiihZs4mmWgg7GXudUeT8oGDXD9vT84Pw49Zgc4P9gNRtGuQYH6mpg3qANLP5rsnkhSdhX3XMtViPZRmgsh1a",
  "key39": "31buWKaVgFANtNHdRA6rtbkSZCEyzUtdet5yeT1dDpg7VsKgZ56NX5fm34dUH8AYcAPmip55gnBi9hkBSYHNbdPh",
  "key40": "4pNrE1CMUEaqb5VGQF7VJDpGFxc2HnfZ1UBDgHbHa9mKDLfm7R4JGuh61aXXAa8my54hQ5Fu6RaFKtiduJtRFus4",
  "key41": "2wFhBj5MiuTzxognBq7pQbcXJffmBtXbADyG4XGb1ccuLdXdEvD4jrMt3XbEbgeXoDAWxnwmcC7GbHN58DJKTqoS",
  "key42": "5yghcTY2h2F8bZxkkaRo7qVtETBcM6h1E6KfArFqd1gbdRFMc14TgiKNG9dKhpFtwVsYtncCJEnX6dy9vZRiCxaf",
  "key43": "4dps3nMwaVUDAsMBVHziacYVrvFpxipDeTjQbV4anELiyrqMY4wnAmVdX8ijX6LNWQdTauHMz2JHH2ZvMRyggwfN",
  "key44": "3izhrw23fzzzz5ZDN3N28x3xKHW6AfvEhStYC5erfZTktPZWbgevVLeMLYwtMTNgT8ePyPGpqVvGKCzuytn6Ni5E",
  "key45": "2AKiQJKPLSEs6xH5vtskqPBBvEaq9up91ce94RnCA8zYY6ZDS3X7n5YsFt2GunYVgL7pBBCNtqvBZzUHd7kJLYWM",
  "key46": "3ruZYFw2cVJfo7y1om2Le4Q5W59zmKtVrDr9t5GV3Wexygpbwx1MEHUHJ3DvX69ueqYqzhm4Mrc3hVFowndGUVB8",
  "key47": "QbLrt6nDj5iHsvp43tXy3PZhKZH7mbvQ1FEppW21PBTzkvnzPXYMbnwdAbP2Y7NZEXLMFiQTjebp7itNaZikNN6",
  "key48": "55KGfmNRpiLNLwF1wQMvm6DKJUX2RekWykLRE3QSRi16SiKAc9hsfnFaLnRNVmvQU15vJsHoJQv9QpbrHBAbsu3B"
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
