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
    "2oceNHC5woRyobAhQrXD1k9XAi7NEbhwcW9TM1NWWu6AXoKg3FhKMUA129RtgdnvE4Z8CHQ6wmz6rc1UEwEmQWgK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gxyxUjoTE6LGPTuY6ushmd7c3R1vQMYFrrysMKe5HzFGW9pd2m7qFSyYAe1pn4KMHDtQvC6qspDWSAdzMzF325D",
  "key1": "3PhvSooyqtyqauMZJJy4N361eoKNn1qdVA3FjnzCvLd98EocpzxUmkBHDgc8waJcAFw3tfiTnzVy9VFAsmJC15Vm",
  "key2": "mRRTBeHvT7VMHHLvroWYjW1EkUrNjQCiCgTqdX41dHQS6GCEh8EcM9ubek4ypk5VVnYm2pop5rnrBs4DLtkcSRT",
  "key3": "3k4AZNnFHnCWhGCzgExQxNFR6r517NzAYdx3r2yzDZ1nocxsM8kNXEsJSBFecUWfiNH7etVdBMn82f6G1ZEVBXow",
  "key4": "5NpzbNyzKE27osJQojdq75sVBbQps3t7zHBysJuYbc7iR2jNdG1qkVAqkBZCSFzLBSLx74vW8eja3stn6XRr5Mby",
  "key5": "21mrDVjopT2H63LNCP7hhzzs6WgGCzR97ZpPugQXd3W5tDwoj8QDALQtYwcsD57CF3e9wVikEem3wUAh8vo3xUHn",
  "key6": "5weHDt511nSNGUSUtotp99kPeQBobVkeADQF87GSATeTsBrC2n15DJGZUL2dSUzUjhyedj1aM8ArnCgAzJy24DX7",
  "key7": "4qZHNK5pQVdQ9uC5jnjfWsWgdUeDyx95LfNQFR44ArndNEbwwzMLd4YokqWtmZvGRMWMQYE4dtzxwJzpLtzbuzPc",
  "key8": "54BqmFJYFqbXVLDmpzgdrSisGx7iUrQiYVoAPt9wu1pCvPaKCckxgw7a3UgA8ZNtHtGHk36V26eh1wzARsca982G",
  "key9": "XaCrurJonvCtNxSPWRpne4wZQRMSxzNLL1oP35Cgn4wSFuonbmw6bD3obLw3ANxiYx3KNNKmVC4hRGgJvXWBuAe",
  "key10": "4eAPdDF5XTnvJNJYJeD1F69eipwT16z6erDPNTfthagNgDQ8iQUi2ouVFJxpwngmYQNDbuBvLSkiTTW7Rtp1rhCn",
  "key11": "215FFPGfucE9Jrz4But49t5hQWy9PBFM1jbLtM43191NgKKDtqpnpfmuRFmbTH43wGkhVJZishYAYEF4RyTLznkU",
  "key12": "2vxYLr2UH2SzzKbzm5UeoPm2sXpNcFWBBfQgDsM5SeVkS3nVw1EQ5TpY4LWFevHJRR19mbCW3aiwmUG44A13gKix",
  "key13": "3z84gMrD5KV2yjXi9Lzjf29hW1xCeUjQRh2pWW9m9WrLTKEtup8X8spZvaM99u1wuK6gUDhJwLanEoKTMFG6bHC4",
  "key14": "29MDa2t7L4C4fmsjb3icsK7w67mhA4xG9FXhxzUPkcrnsysx5AWVKcxNZLLnCWJ5jwA4vhXjW8cpbmptwVZtnFRk",
  "key15": "3QMZ4scpmebKjovmZwKdzLdFpjzirWHmf5cp1E6C9UjnfhGGS6NEfBHRj9P1mEuEF1mqpDAU1TXeNCMjsGDzHUnx",
  "key16": "615S8AEM67Fhx9RQthbb5y1Eg8LVzxyiM19hR38bY8jstYQ7PquFzMiDhnRWYr1iUx2AkSt9eNSuqzKC2z2HctJh",
  "key17": "3bbjw8n8t8iDd9jhKzUfKiGuR6w6YeVhbaaJPJypz5jD31XkuWhcA5NeaN16pStxitzngJGQqvZcgwEjCkxjX5jV",
  "key18": "3xXZsfNxRRGeBonyXKrFCcbstXmc5Na6yPRVhrS14pZYxHoJzxRkni13ZSFVCpkMz2rpKEPJfHUgyc414hPaK7c",
  "key19": "3RcRE79KdM5NzctUuYPjjLwPkW18r77Ez5ttJxdbfEr5DFucXpGjJABnKnxonM62xndviJtAJB3iC3NUXrQWyMtg",
  "key20": "23wBroGPyzSKFG9VZxgTjc7bzwqYxhL8ez7UrpqHpmoBmYKtyJbbCya8sihyMko3hPPkg5HwhR3DdQYb64JPww1T",
  "key21": "2aqYHG9oLpgH6DNWJwMhpYvnfnoBihaQeFv5Bf2FigXpy7QoNd2r9Wq47NYNuCKstxtqu8vZnaTNax2EQPrNgXJz",
  "key22": "54De5pQ5PjymfGLoXZ7BxE5FjwLPVseFkhcDj7kQJ2EsUiEKu5abbXRpcWydzP8Cw1jX4rodxNTUL1Wqbzvc7Tqe",
  "key23": "PXPPtEgFZTRAe4h3aQ3yoiyXsDumxLXgKn4QnTA6Tz1jJXWRAk7RXsDCKBgsGuw7z2mEnTUr5VzJ8Uhp1Hdc8Fg",
  "key24": "4ia18xo2taBqPvJvdA117h4nXdX8k3xQ8jLKbQbD1AtttLvGNZr1bNcArsJPYwGRxzjvGutTXCUrbwHnbYJmVwoh",
  "key25": "45n7LGJJkhYy7wUm9iTQPJP5YFhQKUXpXTFJmmJTp8nnuHWZbRPrKK4dfrX3Dx9bVUKvLWbbXaZqyLkf1isTUoW4",
  "key26": "49qggqJvjajuxqtZyZrNm7wXrZtatVJv6GaFVcWCSXBpAAcDN5rqBKNuj8pLW7MHLTn53XT8kK38kRsUyAXJnQv3",
  "key27": "5XVBHSUCdHXPH63p5FMo5SJrdwBm7ebZrJkktHfN9Y1onPik9e2gnjjCk5URJ64sDWdbcmUoYpgLhoDiAN3ECQCj",
  "key28": "4TnzF4iBidEzAwkdo5vbZL2cBXiRRRyMQbkBWjpcCGq9JRbWTPgFgP3Uya2gLbcxZaEGjhJn6CsWcKbssagFtF14",
  "key29": "42fkdUMutirKsBU14zhjEFZCTAZZfvrS6RuppY5aZteKvPHYzZrdhyc8KxJ7UpCUPC925stSAp51Ftj5sQd5hG8r",
  "key30": "d3yDtXdERyvQ77wjhxtoVTTcnBnVAeQzqfhX4tquKacACXo4T8APmiNmASbqUXAxbTXYBvJDujdAkb3mGD2zAF6",
  "key31": "3FEfUnK5hH2pNidEoqBoU3Y5yfVbH6rncr4B3EFU865nFx3Ydfdx6JsB9VrVSnnVRsvSwX6YLDWjBz59UZzNs7C7",
  "key32": "Z8ZJQuyH47bDcTPZbgrxyVQKYiydfTaK5faRzFne4xpvossw25cYvofg5uQpwRgrXgpGdVkbWfc5WdGgAAyUeP6",
  "key33": "SMreKsJgfVgGqKPELH7XvpAq2cQQz9VJwJXuycHC2wKM3dUmaEcz4WirXEQvMSDnezn6JJojFX3Q83nuCZxpHbz",
  "key34": "52BxYhvYwnCy3yfQwJeBbsZzMMPNCf93Ym3u2sf99Js6dJMeh1TewE63JzBX2vu1N4jjDTSAXPc3cYvakR4QHeMV",
  "key35": "3AXqx1fukzGaEiYcxXpfM9hfkkw1scAhCWxA9d16KMB1Wz5SeVBMfNWvf1zPZ1bHPmnDDVgbk75V4kjYCqetXb4c",
  "key36": "5ByhP4J8jdUXFzd2LX8UJdD5j85AaGo3xEHLFXZPpRj78DBzFettJKv1QRj79cUpjfjHa5WvnPoiXY5YDDUXmicY",
  "key37": "2zkJryASqg1u2pxocZWdRfKnsyJXUa1mRnPE2xC3T5Y5m9XhNWxvmmEUfqdVHV3rcfK78xqXfgrFQ8Mz847tdcca",
  "key38": "5HhHknKkaV6cQyfXekY71G8DS9P5ik3wxs9ejpMxNhx7VEmSWfDYHpsNHvmVsQR9Ge7q8wZUKsc3ifurHWSxspcj",
  "key39": "2t46BeRmJmesgcdHG8giGDz5FBWYx3dP3C54pW3b25ADG6ohJvhgLptbGYDTAQbZpu9zYYCy7dqHnRdFiNGESiPu",
  "key40": "dBL5qi9Vid7dvZHPE9Sr1q5knxqHHMNbnUsPCu87K1qpj9DrWaieCWskE3fQk1jWowshQdkb3UC1aCUWtKWN3SL",
  "key41": "3dkyU23qk3CQtCtWv194SWP4D92q463thPVm4fcE32k8yrWVJoBpwBtFeo19KWZwmZPaMEAqvRjGCwajqJgCDP9T",
  "key42": "2me42xZefEc3xjHRemdRyotCp64ZYamCGLBYfcdH3FzAsjduYbzYDf9xBhQbAELLAU3UzrPttuDcjqRcVoad21nv",
  "key43": "2U9Zg5x98fXoDAtKGbywjbsJiqHeTqqd5C64PX7YrUwxwPdor1MG1GWLDgq2qYbBSeCVFCCr9CNTVoKfZ3Noucts",
  "key44": "2Z5bxLrxG5dPMeUMAU7R4ESCSv3Yp18VzXjReyJiGDjSARkdteaK9LmyP6MR2BpanRoy3zzaBSe1A3ZcxK547WNm",
  "key45": "SBgrHsKuMBEifrHorUW4nanWyyDLYYJkY57YcZyNniNV2h1bHY2jaXTB3XA1qmenTEMqqudFTDJ7mp8kiDpZ3L6",
  "key46": "4RRYh28XhCXdZk6TSsTL3LW4btmFSLg7EiocEYysqE2zuYbNaQmUL13BNTaPfKqLWwCnR6EVR2kfik15NnVj7S4Y",
  "key47": "29b3Am6RkUG7f6SuVG1aUPWJC2UYWPMBr2JhvwofHnVr3MhJodJXSfwut1zC51Evb4XxDW8ApPu9mq3pXsQsYEjR",
  "key48": "4GC7gjnaJtMYC5E9fd5ADRex9hfBuroMtcX9sMx6tVeNkeCpAypsQwZ3cLe2shGXSDhzUxaaJL7F3uDyxfbqLt1H"
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
