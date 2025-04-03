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
    "4DV8RCwKn9Fn2qbYYVdSG211mJmvHoaFozwgZUbgbz5U3G2fJZX2fHPUehKCGYAA57H9Mf57iAXMYmxGk726iczH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SZcj9mosfuwKA82A7iXtD4MupptB3pwd687tiwjzJDVuSNu9mzNBbLcfFPD1mDHhfZJJ5hLK7R1seC5kM1tuVqT",
  "key1": "58SKs2EBhdSCmPbgvmrSsMnBWhnLLVV6XzBkofEBn3Ppio2ActExiiK6MesVV43Mrjg1zULa4RytesFFufHH5eo3",
  "key2": "49XB6AqeJ1mQwzkhM6T1sWMoWrV4upLpQFR5Amzq82q5ezPxNCFt5TJTxuchUiVno53s2FyyjKa3xnsdYTL7G27r",
  "key3": "4r4ffKADhXCGSRLvSwykiWT1QZg8Z694SHxPXFwMBRNDyd3MAZ36mmm44UfGfSKJJ9UCwmXVBECqfNqd51X9q6ps",
  "key4": "2RUtu9SQZHja9jrp649JeAZ6znVXqDQApxLjLn5faQaF1Uz6RPuDNTcMkck2CamS39D3hCzhB8w4mNn1174AAvQv",
  "key5": "3BzSZiMUPfwwB55HPKSaDgEjmYKqcVSFw5w7AJaHa7yY7mNxEmQHu7JsEVGotCJYGndCChdXfjmchbnD16xXFxAQ",
  "key6": "4yo6BNgKJaveL8fifpm23JrDKRVmiWnRbikvyx3aXFWinssLLwqnurgh2wJ7aJxLPuuk5qXSMYpkT6DsQjN1Yiqx",
  "key7": "4mrgTNnSQs19uUKAsu8iAmNsBDhrVoQxCcQKVKerE5xYenK77Z8mgTotfPjZiBccWKsRCC4e5f6F7Ug1P9fq1GVN",
  "key8": "5LBEkvBJrPmhxbtJgX5zYeP9Hfpm4QdmnRAbqpJqowBs7NYiMdqpAMEGhqRVT5TdTogDFEcpEHHfbkQwLR5k1Gd",
  "key9": "5Dxva2DF2rfcS48FpBgsVYPetcqeQrbQq7G96QiGneJTZthLKEPHu7BToK3VCv4f9hnKdiwaLm1wWELb9UWqJHmV",
  "key10": "DXfLsFVeQBDhLLxDS2B7h8yn73EEYv84RWm9NzkdWdtTBsPPrsoedJEtwqHBNsBJ8hy9fcPT4thJbgpWT8SkuV7",
  "key11": "59x7H734ZpsSCa2eo1vN2S6rDuk8mw9UJao9UcDBMwxNLvyXe4PRGUD5rM26KSY1taQfa9MBR5CtQZ9R1CRs7AUF",
  "key12": "2PkiYJarLu3coecb4QP72DfLN6UtNJoXxKqZD2CK3WwGL5Jj63WNMSxAWTwv8pMo4LVsLNxSescYJ2tYLKGePbg3",
  "key13": "4pfDgxBLhHJoBMHPic3Ah4bK2rkwcsYixH913yYWChvhxrQjeyqR8N3YLJykXqUuMpAjTFB9e2qjri5SgegPF49H",
  "key14": "4NrDfHJg6hFCSJ6SYHMKjak1Za2fcUtXDxnJhP3gCSsh69JKiVuPuyGoL4K53GsQCGQwJvmLDz3RiU4hC2pafm1b",
  "key15": "5BWmBfszNJgTojycSkWB7Z4oAxJHFoEkFDzpeGYMWyuHSaQasLoDQewhMPXFFGDKvQQiqowWZrwpza6NntPdNBnu",
  "key16": "2QAAjRo79M7oFf5bEMGhCh1STDcDUQT38y3AdyMKnucm6TX6nvP5PNoDpW38A7U9AHSjymTajzPZxC4q7gqYFJWK",
  "key17": "Pshvqwj6Mg1b8tdjgNwKBdrJRhW9TByckFBvBrmRPFhvjd6QbkhqfshhEZqg9iB4J51Xmt9YBbNPXC4YBdhfinH",
  "key18": "5HKcrMizA2JkgSTJzNp7NZnmCL4wDmqG83ZHc2CZ1idt8TABdj1LHuoqpXzimpuNs5gjHU1FH2VRdwot3Z12pE5L",
  "key19": "5xmCABmEkwRcJdqLnbMUxh7mhbHP8cwvX2eYEaDqN8fRAj5yf6grfpzwGodvod74AtWH1HQcMoLKoq8FfTiP5HeT",
  "key20": "5yzKeqpiRQGyHSyjS6s9c9PYUWkAh8t354FdLCzcw3pqW5PQMHaStk5RhmodEJ9GnnQwipiQhA5vcUTgeeCo3wL2",
  "key21": "44H7SkCYZmt9T88QAdCqELud3XUZdN9t1qihiL99HhLLzhTdSgPQonV7DgKFuMvfwkn5BiztP5uyfrwKrz8gneom",
  "key22": "3PmDZs6mayM5mw77orFZepiumRz6TRdXg3Hc45zdR79ZhWZKnmGEkpKS84L213beUg8FGeeiC3oCP1fN4ewH18f8",
  "key23": "dvgsLoqAuVFekB1k7nVqd99THdbnf5SKMGfBFWd9J3CkEmnPHHa9pwwmtrJWbzsoFL2Rk1CNth6r231JipAbik7",
  "key24": "c4rtFJA9he1kLGTxa9QmrKYDrgTsoq78qbmGWGpsW2Qa5aj7eBty32sMvUvmGpFAoEUn1vRW3Xxgiacg4eDSBL9",
  "key25": "o3z4uqXaZ2aK7VEsgie86cVweEApdA6uhRLrsvoUs9vVEPpctTdunVTMqHM6MZNrgafCpDJa1nvkCYCWXiuS6Rj",
  "key26": "2rzvgv3zCQzKsb41aKEXXZsYfcXjhQMJu8izDnSpqCYSXodhFSMLmu7keZpgHRwJVpifEQeMXm3nDKTcXUPLfSTV",
  "key27": "5YWTKVLT7hBCKTdsJGfmaB9QynZrmb2xHnnCVk927Dhh2964Bf44XLSNywNju6U3eJ6cG5VYUfs5z832excT3fER",
  "key28": "4b1wT9BAoaxadqL4ar9cC9jvSgRmdXp6MzAkbYR4AGQVnRJCR4soZfz6cu9k8VDJkEoyMChS5xgfiJiW1aJmvrfQ",
  "key29": "21ndcB7MwsPCy51jGM4dfddhsRdqtaeCiLpBJJfKSuUW3k366NdQwMmcGWhn5vQDsuX4J6E4zC4WPvY6mKjGs9Tk",
  "key30": "2H7Uf7b5YVVB74JQLGBsddY6zKDUURZEpSmmPVvnuFpQ6reXUv5ECS4JWtUyFQ7jzRkXsiuMBj5v6SEaBBQsTtBP",
  "key31": "6DPSiwXjn4o4WGTCtgp5JDBjVeaRh99bmxGeehcJwv4Gv83FAAddw3yDDknxQLZoZciW2W2ytAUbkAWjQ4nMdKe",
  "key32": "2a1D3imWUqxNNEjbdWRUt8CiDrPp6vRcPnNaoawG4KjHV9iExiEbWwaEF4cjBnJi3szAzrJdP6bzCbyvcUyNaCPH",
  "key33": "2MrJPTttwzmhnHyMjZGYp56Q2wu4e2NKLPEVUdkXLVNSBRfTjkscCKYyNjftuBdEskxF89B7pNWgQ451X8U9YfrE",
  "key34": "4T1Vt8HM5CVDUa9zngPuGQbA8hMueWrrsJDtQWgp9WJ6TVcAdyfAPgn1XHjk7AQBwHgt1arDqAi5tcWqvvzg4U2a",
  "key35": "54CHP7sDNYYb3D9YFYdW2Nx7PqBQHr8wGywYe5Cjkd1zD7am9cksdkTNpJHhV4XZgr3ggv3i7ostw2tZYdpRsW3t",
  "key36": "2KgbPMgaPLJHKH7R6PBzqWsxdhkdzANMTR9m9LZgwvLvyjqGc4Fsry2powSdxi2zzRb5ACNwvjxyD36EtvW3ENKn",
  "key37": "5BMYgJP7XxAYjJcvydGX3SCF9tDYXQ3WDZiyU4kdtCThSFbZA3EU5DGcaGE6yJTt55eFVxRiFRmqteHxgryLriYk",
  "key38": "32aarFnQ5W9VCrS4WzA35Cc2g7x2FGV8yB8VNYvbDUXMGrJkx3ta2naPQWqV67aWKtuw6wBX8kEqzqygApfYuH8N",
  "key39": "2p2LrE4NwtLVWaJpfvqFswjhJPedNgDDC8pLvDLymErD7Z5sHogLicwWD5LcooX72jxVWX2upbWrNbmKQJdW9gk9"
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
