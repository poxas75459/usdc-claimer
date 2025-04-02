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
    "4kQw8sxJE5Zu6RF66netauCasoJtvgQ8dbQvh3p2BAGawQZ16TTG7B1zZJ2xz176iH22gavVqx4TPYCFWwuM93zz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AJ56bADqeG6bDHWwS8bFKNaRvxPasLPHvzhMicu1MiSFKrGz24HHbApdW2Ky2P4V5kR1KW1WcoaPGfWyeoiEay9",
  "key1": "3pWF9HdtxukBitLHYjhk64iucM7HAgBn2pXCe2n3gxiT5Qb1LG1vvToFF7uWTi4JhZgZrohRpdTkJ7LEkyhGJ7yq",
  "key2": "sdmzggGkHPuq5qjpizJJZB63GzsJVLVreUbifN1NGiSrCcVBnVY9cEshxZxpGPPDS865ePJsYXaNWgYTKKiTVve",
  "key3": "4C94MS5H4EyHEHcwUZsVAgseLsmb9xMaLqL8xE6xuGVpC4ZHjWvmS8k9ZM17jxBowYhj7i7bd1bzmGjN1menjH26",
  "key4": "5JXTWGuv1FCunV294JfZZBEhSoVYYj7RvVKA7y9YVGxVQFetX74iJdTR2SVY6KZGVHJuYR2sqPRzhbo7HvC724Nq",
  "key5": "2MEk18GHV7R7QthU4bBxzN4WjqVgG3fdQ93unL8rZ4PziePwDUKkCZcay8H3WiKPYph9S96KGone3AC9zM7BpWzS",
  "key6": "25gx4AJByMvzLqQ1LthiPZFDSMSEPx9an6F2QQUYSs4ptTepePE5ejeTTATF4dgfaYCQyvfigigC4QA1cocZaLbM",
  "key7": "2RDj2EzRbSp78zySAr48SDGRkf8P4WbKfbzoZaqAdFszRr5vLiofXJ5CcN1qsGHuddJLSRPUkuHqTyMbySmz88qS",
  "key8": "3tAR5J7GoTs1gywmqmwFkHkFZvwNnCFRo2V5FJRdGav8dqpJPkiWDAGUaRjvs3eRwSDuH59KH2zkyJoyUN9AZXPV",
  "key9": "3fFpGqGhyVt5JAyL8qtcNPit3W7UVYZCpGhT4Z6NmFVNTZGa8kka5odb3jJmo4CDMXJ7BnAGewecX8K2gtwbVVkr",
  "key10": "4DViS5wxaUJc2EaFtg4MnG4T1q3D8KBzvKKfWNHm3UnCZDtDs4SqzKeA3wkEGGXjhCVsHcNxinGh23wWY11rzUD5",
  "key11": "31oNNpr2KENU9NvVD6zK1aibMXPjbZvQ38myKDzYRtG8qwzAUQUaS98azbKzLbEJr1PZnnEYyKnBSVVMS2TsK1VB",
  "key12": "5w7uUz7astH2K7hTEBrKWKDBwjS6PbWqsEdJKocDHL9WZ4yyhn6VrShXDswQm3f7Z3rPYTbJzHMaKJoZVG5cc7zV",
  "key13": "52sLDYRBAifmodCusXvhLPiAuFaYmLAjghFKH4WBhWLcTmBz5xhEsAfLqYtBfBYuuA2VqDdmng7hhPLCBQNBwYfz",
  "key14": "2tEFcs1spwm2gsGdQNgJgveggoEzz1dQUnGyX84reYiaUKhoifuuCjYy2GChx2FD7GvoLzxamTqXKFLkVCnwJuzk",
  "key15": "3fhP1SWqnwDZubLsSEBZwo9bvcQsjxnEQ6szo7JaNAG8a4eBSSJ5U7qJngfr9aZTdJiNbbHZwn9KZguqHESzSjdm",
  "key16": "4K3YuY4FTUvvnaYBhVbJn7TFCEKfWWq9hEA3mbXTz8E5CqK5RpmfTcA7jFoDszX9h6WcvPUsAQ2rNFs7qEPYLB6Q",
  "key17": "Z6aazDcqVscrErwpEtj5eNb7swPY3XCHVYLS6ze6XjwoUcZmHURJC32syN1KAA1zEGECedWwFjsAbgnFm9v36Nt",
  "key18": "3eGGpLGyvx2ETcjETo3ykrKxXRs6cksffQS2UDCNmGkmWBSZ1ckXJAr1meGTFpV3T7Uw76gQFJJcNHRu6sniAts1",
  "key19": "XWqcsRtf1K4Z9NDGsmFwAGK4agCjRNi7cHtNC6yEkhuEvTMyS5JPQ9MY7LfeSbefpHhmXZD3dvF8jdZrRfZ2LxK",
  "key20": "2FvCcYTMjHHws3Se78LX3ZWemUvuRDcoYFHqaq7MQRoUadjZ1t7Rr6TDwqvpxtDXLyYZbeL3pup57XaG4KPhBtN",
  "key21": "5KAGCqojM9aJVV9ZU2cv6xQyKQi3Kh8mUFkcemqdLwDAnRAGohXMn3TJTMDiFfhypRwnvQDLnXFJcQs7TfTFt7kW",
  "key22": "2Wd8trr9c3LeBYtWUdDmfmdu4pejntVq9R9cstg1HWh4Rn7gATMYQ3XjVTwiuq9DkNYAi36MvF7hBxUaqpbFVvHp",
  "key23": "5D1fG2xhU34LLzwSWrjzp4tWtq3dX19R3upHV6koFm6e2srgctiRvXMgTXmXMqcNGLPGa9nh9UBVV44KgWaLV7uM",
  "key24": "45Vo5h24GSrqCou2HgCjB8dve3RFuvnBDsbGff3kqK3frRmps32jTg5xjYnpXtFqgDDYkgwyp6NuGJymXLjjooKm",
  "key25": "4dBgkFbjyrewZEFMq9z7iRVryVxbz7YixhibkJhQUm1LqpkeBeuGZdH4HYn1ZynSj8fbwL238e8wkaJC3HHBGeLk",
  "key26": "4j2sRgKPV7mQsC7QcoGMkNn12BaQY9jrsrKebMLRuawxXLcejDxWg1BTHmgN6ndAmUJMRTcZFhHrwAfwHC4VLowm",
  "key27": "RazzARmkjCguq8w5A8s8kK2vd4EkUfM3m2KNhpgMnWeo44XzT2NAfGSnAmB6sDhDv7ititDwXSf1LwDCeSwxgXt",
  "key28": "5NTw6QLZJUih2P76zsQuXXNcuu6Wzb1QLdR4jTxeZck4njuerRRzzLTjgPdBYwG3jEv7eZUCwbykurDMBJBkEYXv",
  "key29": "yYhs2KgEsv1nBopLu8W7MqsiYHtNDb7yrnHV6y3XYzT2WZBwYb5V9QWK8D9yakF8MM6ajBkGQ9J5bSxwdqsd3aM",
  "key30": "5egK7hjMyUq7hmrLwoSjztmUr4fCwYZ9RaDfeC91WMPQGypKbmVwNdnt3fcLHRXDpy2aKZB5MZD22fLbUByuULGS",
  "key31": "21HRg2eexUyaNtoi94DkZEErDBVAYzi9sNifoLL6PG4iTcAmqAn7ef7C6pJq8bchpBejkBmc3P3mLP9PALBBQjxD",
  "key32": "KvoTRf3SwP68xqQ9U1L3pFRveJ8XcGQfiSoeeWSi3bzNAnChCxV87KqV5Ae4u6ANRWKvc1SoFK1AKukdWyxokLm",
  "key33": "35K1Pc9u13R2z5K3XctR5KpzJUzetn2A9jbjtdbhyQPb3LhtzPMHQF9mPgwFPiZ6pnfHu1Sm6znscNghFRfvVpQW",
  "key34": "3ttMZrBheWQkyNE4rfhsiHLuGH2MCZQWMpBXhAb5dXMq8A2SEqho9fU7K52cqMyPC2dYXHPMKoKaF9L4MjwFS52m",
  "key35": "5z7X7tHHnMQoc6F68rMqAggBdnqe449oRLxNtnknv3TH5owSJUDcGPa1QU2PXH1wXTZoq27FiYKAvmSLLzcAyUiS",
  "key36": "3y9T7XZtxerRU9JdhuhnHXXxDDGAoRTvYGCy7EnreScpekKMiNnsGuuL9UXfi3DXYJXzRRXra4fdQ2R15doKZyDz",
  "key37": "3a83gshbQ68wD78VFJ5dpxoGH2n8E72w2J6nFHFDhsk4PnAdtSsFrWQEw2VLMdRBMnV57472dUDvUVS9cj5AxSUZ",
  "key38": "4utCAHFpTDkppdHFZ9iCgzMwGy3YjugY2pC76VpSsDwR7wuJNbQUKJr5bwYCZcFqUT9vvuqmJ6ZmfPCDyEem5a9A",
  "key39": "2VtyZng19Cvjmg74JXZMXRCsrpNEb37QAjuoeDNLCw2Yk8FtNLmoFfKfMga3pLfVdnm1tzVtWPxVix56gTG6xMHN",
  "key40": "RKtZvZb4XS8mGps2PMHVtuHoq454WF26vaauW3YRhyZkzb8jhJncurwgg6Nord2KEL7x4ZWmSeteZYvrFKuHZe9",
  "key41": "mnp1YJ97shTScpcDidKoa84hta8Q13xCrpsGMjk3ELrcxwyucDDNinbf13vfSxC2R4cnZVsUANTy2JEjHo6Vby7",
  "key42": "2ELDu4pDFY1Qq7hwNezBSdsAVrSVcZ9mQAFuFGMWtGhJAmjNw5oCZmXmPV9vox5QSjsjq6cweGTx8prUfgrgESiD",
  "key43": "2vHaGfKnhRyrbvNduSkzXKwVchE34DzSGLLXQyGNCemeCuwwggQUGUDy3TPRpsJk6vEfTbiVkZPNPN6yXnDULyKi",
  "key44": "2q5hBc2WTLzm1WpCSVPmmbvMYYzXGPA8nNmfKKN5riZNHPY9hLBvvgAneLcTPNCHzkVr1Eyn9VbrRDjf8Ezs9PZ1",
  "key45": "6nptyShGLTkvV21bej88H9SXRp9MfZrxK2izsXR4cv8Hj6HBzB1VJMQ7YZdrFF5kLkvKv9Qfjr1XD59V2CpZGCe",
  "key46": "63fShF3toYkxWwQe6uNwBbwWHzSHSx3HRuLGUbdbErW3cobS9Cb4E5e6kbaLobTAzqDTvrYmtc7NMuuQXY8gs8P2",
  "key47": "e2k4ZBFXw3BaJNJEvN9gUTnetuG3gKCdckC4DVGPSAbKHRakARrjaWHKDE7KGZBXGzcXzz3k9dzh2XAumHCJ1V6",
  "key48": "3HuWHSzPGS7x2XNzAbEqM8VS3FCHL9KckewYqZYEuatSPE55xYsMs7ZobfvjMBEiZuUTyTL6Sff1sKUGYV1pwkXQ"
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
