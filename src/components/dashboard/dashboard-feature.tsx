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
    "3RGA3Bc8X9FjeYcZvkHg7EGS49wgm38uWBwoNggKL3FZ4LE92ukttwm2kDSeuJTrxXzxwcKLVNRiK2q9LQcP3Bnu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sGePKXMWMyWd9GdAR8NADzGhDNhVMWJRpgt71m16XACu9u8c4LomCUdJDACriqPrWdnVqRRrFm5cS8bjTsf6usG",
  "key1": "5tjKStPzNMXD57kuVKwLgjYSDpwoGDAAedrwB7iwQc71DLars71QzybX7o2svoS3NAWp1X1JKGnBDUeN4GydV3MD",
  "key2": "5YLRzXsKM1pbRPCobCoz188h8c8tnNQR2PcTmgAsbnUEQNneTKLdkP2haC5ohMwiK7x63wfP51gbPachA4tjYyPz",
  "key3": "4ZLNmTcX8AcVpAoybU3R7BwhqtLSFKEN9CfqSW7VNpghV3LPaV8WZDjB7yH79csN9rS5m12w2JqvZKKYdSjEW9GL",
  "key4": "9A5d4fYqqwHnVJsPcCE6ejbTd1kp2k6Rg2ETds2b1XwKHEU7HfvCrhgT8K8TXYTD4To3BWZuAv2hzxARU3dbKok",
  "key5": "3XwApsZDUVxb7Ump2Fh6cur2srhUiSDfvo35triz9LTRf1KigoGFZfWcFcYmzrpYGhd81DHgaXBKZ2GnYzMhdme",
  "key6": "59k2yDGby8s5AezhrTtRTey53yG76omqYjnon4RLKnkH8qnS4EdL9VrPZJYpyubLPe4t1MT9MMvFaSirxFwJ8ktx",
  "key7": "4qRBuPtanKerbqXGtWyezLZb7QMV138j9cs6Gu4zonpVtdxXVv9DFZP6G3iVNKaqw8N62zQfccVb5UKYYv4A5FRZ",
  "key8": "42BWV5Y2CnwHp4Rchr1iRHKW35MQCFdqgtwKzx6Nwwtdhu4vQJTUbh3bW8uwoRM3eMQfZLxy2R5NbmAN6GC3wHax",
  "key9": "2L2nCn59tpb1cK5enPuiY3WhiJzCNACtWwLvpEPeZT1eKCL2rymHqP43aLMnHCNYPm6Z3axLEv3a2KDasr4FBq7s",
  "key10": "5jNoFxotpehKeAkaWnmQfZ7BNdibt9MFrCUarrZVFnZ7xavndN6LeWst6X9AQssNaRoS7XKFKfMetSdTH8ekzD6N",
  "key11": "ddjF6Ve17wSoun1AgK61KAtWA1K74tBSXyhC4pDMdkEdQH9SWN1Y2YNfKAfghSWFazSKRrtRRYrNShRbXTnCq7E",
  "key12": "2zKNPJGdZe5TEqN6z61WBRocZZE7Q6EvR45AcCiNT2e8VNN76UK8c8mRreF6pa6A3cgHLWZtRMk4V64Y6qFeH6Fj",
  "key13": "5BGR57ib2kvW32gjVsw6kAh82gPuWpfnB29RnD5FvaTJfvqRoXu4RUBoph6KDWvqVsTzF1H8mcyneLwHb9e3wKPH",
  "key14": "5NpZBWJANC2YXnDtbkGWrNRbrfYHMCa6d9uvgiJMMSri1ayZhcgJDPaQQHMEhFriMj45wZf5dQWF7WssQXeui6yV",
  "key15": "27nPmBBqBH4dos7WhVJyUdJ1rmMEPMP49vBfQwVbu3obahhtmzgvnSSNEhgS8H9aACh9U2PGTp1fTSwo9GJMaF9v",
  "key16": "2qEv9GQUoV3gYqqcdWTebs6M2jK5dgpgoDmJTg3xWWEg276UnTwxA24VtJPSBd2oVNNoW8fTss992v1yXN8u8Giv",
  "key17": "5Hq1yj1nAaUDnh1qr4f1dVMUQT47sLt74LyVnM526HyTRAxMUsV2Ew8arLp7PoQNQzCztbAaC4BdePP5iCb1ugwz",
  "key18": "23pRdnQt2JWt2qayMUKvM8bgoBYzWM9H8pe6hnCZMAXzCXPKyMAgsp2HVUAcj7wGWL982gNZ2LYDTZe6yZKG3dRq",
  "key19": "dEsC3RQ9ttveSmNTEZ5Mrxm32rs7CqMV8kU63s39AtkF5wSc3saTf19ZaZkcD1MFBCJ9p5Qe45t6BPxE6YubHPf",
  "key20": "JwMoxo5moBP31HowBheB6aZT8tWxFP1a5bvoW6PW3xkwpJv5VcNyWqq267hu1k7JPLwNzPZnihmjHLwud2MsNKi",
  "key21": "4rrqZjsLhC2EgpsqCJNM9MuZREys6bLdnfu6GN6uB64AkznK9e2vPu79fHu7DkpfY275bwwH2P8PKPCps9EinYPY",
  "key22": "EGkHsK8UvHjjLW5FnGWqnpQj5E8e6e83E1FptHkVVkP2CmuzB2GGDS3T92xrzv2FoWhScWpoxsUoJqB6eVMvG8m",
  "key23": "L44dD7BdeZFi1EqKkZvBxw9GJNogiHJXnZzFoadRKGWNdjDfU63gGRRe4oGYscfHfyTkG8RvfVKzGmqrwmHTajG",
  "key24": "2vpWKLQNuhXPcWWQNUnG7rfnhbUr7HdLSsjcTN5LQQuo1zTxWWbc9TVjBGsrGavdP4t8x6cwtHHLhFZFfQN8MNNJ",
  "key25": "eSQba18yQzsgCujYmJLLGZGfr1pnbPU5UakfKbWv5YzoCATNDjJWS6eTeMZ51TigWkcgejBjzGLNptH5dCEUaLp",
  "key26": "5gKgzDzcLYDPAAR2uv3uAkiXE9MXjqh12rQTGRrHTT2zJ4dmqVZ1NU35nSZvRdYupVHGRjjCgjNLcRXrNXSNdRbu",
  "key27": "7RyDWQUTaSMSRwwXphjNoCFUdePcCwbAdNiJRMCDp4T6AeFXGEMpjHpGtVEVFnFUGv9QdsWYvRg1suAqQMn8k9z",
  "key28": "5LxqQe7xPFAEvuaKmh69aHX5TUKYqYWTGGmgGTi9VL8dE6VCT15dqdkm1gY93ofwboPcV8QUmEEvbRK3VszHZfvC",
  "key29": "pqV2mi4NiYfnaYirf6wJX1nQkxtQTvymxk4Dhz9QeszFj1ubgTkV4yfu6couKMcLxkfQPr4287jFTnxCvD6Yvo2",
  "key30": "2djuc9iabnLcx9WriYiajsmHS2qLEcWHKJ5ugc66V2UQWxUKxQLL9LwK5cSWJ8A5jsW1APtJCNQPLZPpiJ1xRocr",
  "key31": "3rz743GwVdcBPM577x6LW3VnZrSQic4JPp6Fz44j4BtfwGH3RUK6yGvRBbiWkxhes8q7754FfcmCdPNF6kMV7fg4",
  "key32": "5fVL2wmgVnCpuCgRXH3W2uPhamtFJ8cGCFFTsRht5QpccM59SrdwtYs7PNRDF7z2icwbrcdHCdRrHEE6Vr2jwRrY",
  "key33": "4yUJy9GQvS9niXgVHLU28e2zsmvY6oEW5RDkfmPAX6NhXif4P84LER4LKqMu3qc1TwFHa75q4xjiovSKDvHzSs4Y",
  "key34": "5jAyRsN3hRVoqjpUkE9qFGgZVjhjSWpaSyMrs7SDzno42xeYdimTU7EVMqZdRWJDNtoEGe4T55oKaLPVyy9JZi29",
  "key35": "24b6Rp5dXyQMNnjAgJMP3hxwDawvVeqjeQQM4UMytqrsFTKAacx2QncETRhNBYmuPy3bhhA1WYpfjvFPFtt3qBWr",
  "key36": "2XVaQd8ZDikQztipTCyyvXPhHVXtAL4kSJFFmPWEecp2rwXfdzY5kVyQkgw4FetNad73ou4SxCpcHdqaf6reCaLC",
  "key37": "2sBFgYdPTes7Kzm1H7tSr8YupKAYxtwrqYVb5kYKiQisTHrdgU1yR1TeEvLqGve5oUePmoUksPcGrTpZd8enAkc5",
  "key38": "5xBQyYEp5R2RBkqdGZgfbHq1BgEgxccf363PpQxqcEJHEkK9vNVFw3xJhbhCNmK4csTwVMdDxXG9EHkNAfH1sK7V",
  "key39": "5gtJKUMoXi6fgcRaEhDWVp2mBGFemayACyvugH6Lsy3hhsy4GxXWid1wLMv8nDxYipjXHZ9wS4Rwe1Fo7YnPiSgy",
  "key40": "5RFk2P4HusGKng2FvFdTR5x3jX6nChCGsuVrCZnrVcPq2GxEZ4RTYE94SrRJpJZLA7bXSopUn3tirB3b6gHJBEKW",
  "key41": "4TtJXv9dgaxwW1zqX73r5dkWyCSWj8vK98sR7b8h3RSX2BhZ8DbTJgmhUi1zafRcRQHkUoNQYwQ9vtCyGLesH56x",
  "key42": "5dWVktQCNSWHModkphiYCBhxqsK9FQYJYcP7r5C1BqTumGEeG8QZRPZutpW7uSC8KXGB4eaam4TiAZex2zudxirP",
  "key43": "3ZBSecHZ4HMaaEsQMaDsR4465UWNsjcTFmx3VzM1wKfttKX2NsYkoaBEeBT7kciuWkhzQbj59aeP7ysBNiaeqpRh",
  "key44": "2KSAuN3aiCRwYEuoiS6xUa649nPuMKTNJP7obgbnm4MtNy8DbHjgFHmaMAjjQWiYMyRKq7qzzWAWQtbTyBzmgMSp",
  "key45": "2ue4W3fdCkuqDwNn6u3LMBi6vY5TbXQZm27AxiVCGZLERMp1wEVieVJxsvDy2wvyGSFrrrC639ComrYLcLMNnaxf",
  "key46": "4tvrnUTLpi69DButpYe1THqT7nFKgGyduDC9SLdNpmgwoz8iz7wH5mKoK1dBMcwFJm85ShmttDVLyNLqCaQmp16X",
  "key47": "3D1meSFenLumunBwt8XfCjwX6FQNZSY6fcvv6tRbo9jU1hi165SLpfQk3T8iedHAin881ULxNsuTPyS1TszNUT7a",
  "key48": "moWY86SqDgWvRkzJzbRwJHZZk8wEy2A9xXYtF2oHxQzsg12NWRtt5BrSFHGrfnmhyHtKvxBErAa1C7m4aK6Q5SZ",
  "key49": "4EL56rE9chhMpRrXY8k4psA48a2H74tr6pWEA7rXE2mt6ssaQpyigHyjxMF4iecUqdmAM7xkA9bAcEkXbw5sRowz"
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
