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
    "2Thq1hmw2eeT2JL1RN3iQZtsvqKn9V9NgZp3Da7K5JQhPQoMnbzhDWRmoRvhm4eZYdRVHdZBCp8id2f3z6uj4dTA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HwUXF1s9wcTDWsf9ps3gGwzeV6sRG22FFwtaFJ8M39TFRw7h9QVkiXj5Z7KAWiQwfUJo5KWXen7Axt38Bi3Hpho",
  "key1": "rEGH78duxKHXSEYZL2vgbUoUvpUcHYV6VTeWPqc1wNX7kg9iUfHEm7U3iUGC4DARQQq6inKaT8HuL5zhHaCrDW3",
  "key2": "JF4xqbyCpTamZW545BtN5matERUDpMGS5jBpz7eGEdB7sKPFPvcwR6AnKwB6h7Hs3358BPynADWtFenPGgun4QH",
  "key3": "5pAkNEFbABMbxrcT5nJDm3rhjeX7mCrxiwCSJk7KfM1byGX6JzL4aEerRZ64vYZktjgpsb3Z8qqGgYcuwzotB5Hu",
  "key4": "4UwWgRkAZNTB5TsUsBvqhf831sFQmXCfTCv2EQ7zLQ3PLWkqggrk6GVD7s718LsvKms8BhiKfkxgfVWApe3fCvmk",
  "key5": "4EL2Ex35TsPSbVQ2DLMu18A8STwxpQgTkPYy8aGjzJrwbir6RwhRB6M31SAvYL4nvua3daxaVRwacCigBQBgtzsM",
  "key6": "q66LB1Na8C14ASyuXjPE3nWJLAk63A18kEbPrpghzCRufV8S6VMyAqiAEF6yU1iSmUBMCTXz1AkL8LPxoiKRDY6",
  "key7": "5NYPefqv2r9RChwdZq1QH4boiwRn67q9snEqNa4CyyYYCFuGaG1DpmPmg77EgerTjnggNVAr7oWCTZpssbHP8B2n",
  "key8": "1x8MhUK4BWQzwmAYvbf8NZzxi5Etea4SDpkKsUitc3eWYiNADR1CBkhrE6Q4d5yfYKmDnFkSCuxqeb6K1HuGju6",
  "key9": "4YkmcnvThv1PoAXywHWS6s4d4wDieSS9Ny5RTsGgh4zGuxsDSdTrH8C3dvt1e7Td2NrvyJAzG3GYei5jpQ7JUKbm",
  "key10": "4N4Wy6fzbn6o3ogNNqd3hQxbynzYar2YzWAAhrcdwDVx774MFcMDaqksvE1E9nKUMMXNQLiUGVoRNXzgmZHxXqtB",
  "key11": "5hF6KjgMFbddwFYbddzkTuAdawZ4CpqKMPXq389hNKi6kzdig8UXVweFXyBFEauFrrSxFPGR5hfxHi1Up7369Bat",
  "key12": "51Z1gmkqhJxiRgP7GBmcG4z6u6xrPSEJuQhXVqj9G918B1vHFgUg8JDVRBSN8mHFf6DhQbaFBoq1xNhDV12JvXFP",
  "key13": "2oXFV2NvLd66UiPYiAsx4HfTfJVp4XYWa6w4Eft7XEdHZ2Qxybq8fccuDS1v9PnBK9cGbHieVwf6deGRsGRZMbhX",
  "key14": "2gtkabxbiq9nAUZpNQRXn5BSUxqqcaqF9rg4w6xxdjhdxpU12p43rAQ5x24hC9DyVJ5RXYhReit6VC9NhUn9qgYb",
  "key15": "44RvUQLLeBeWH7TXt92W39rU1VY8Y7dgxVSc41M3vP34wG9SUdN3vjST8CKDvnzswTHDHd7FaDMYUimK1puf6N71",
  "key16": "UpEKPCghFjH9ZCWgVXW1KhSx1FFXgEMoNf75BPRtq1Ckqm33UAP2L39ASWphKmV7Qn9Jm62kpCNavdWdcBuk9BZ",
  "key17": "kroiiV3qefzXrCWbXwZRRmkJDcB85k4pVKtnTsU6DeHWnKo9GDhCQwnK6gai2USpEH53eTkx9jT9bSgjLGoxUJd",
  "key18": "PR544dTH116bvCm7jjz699pEKuz3amQnBGaafQJydqEF8apxw8gLYMEx2u15GyAhyzGPQgCo7paLAw3WU1XEBA2",
  "key19": "4tcetTwZnfmzyEmAS8wWu3cVjyP74xpXX263DgFj6RNh9zqT7Zu4sfNe745Ut6abX26L9PXZxmn9qdEk3Sjqjier",
  "key20": "5xqwur33P5iU3njazRJ9prTQtCnHR9mkM69nJ4peu3kL7gs9gPVVhYpgr6HCiA19Pvw5n69i2M3AVasDBJkXPR6L",
  "key21": "21jNFi2MABMofRZYQjh2yPYQ84JN6qUnZhbgJqvUK2YSMQdMzP4in5rfSELdEaihiqwaHSwGLbUrVW9jcebXkGyt",
  "key22": "5TEPFKM9Tcv1795CXL7cHBvy2UpiLpbtEKeBKeVhNhXMeNgzfC7mdCC5rzn7WaYnefVFW9MJWyrQVKemDfJy6itF",
  "key23": "2dUBMe7qeAu8GurJKhoVKfHduuNqX14NagMuUbT5sxRPPQ1g3scAcuqspk287SrqEd5MsXzL3oNZBGEu1WEU6968",
  "key24": "QsHFFwUp2gwWuBnWJddbXNptKhXhMiQrnXF8PiuVir5W97vmUe47nJvLyq9XnWn3ZEeMAcsWb6Gs3bbQno4R8FD",
  "key25": "SiFqMvLX6ijGCbUcSKHG2CsG1YjuJZ2766WfKUBCZVqZZqMVxSFqKKhXVwWNLnw915XEs2US88AiusPTf2nu34y",
  "key26": "LoZpd31YA1CbnbJemTxwab9Ptpv1xLUiMSuowjT6e8owKQ2r8wxmz3FmbGKjcPdYW2S65pzUtcWSttaWoZVRcFV",
  "key27": "4EykGige1NSFEYE3aeBx4A3xxiYBbqJMaesWsypFka2F6xHZET429SBx8YDLFrxaRCuaLacka9KCubWQ29csc8by",
  "key28": "21sMBFd6covpwoXBphd8iXRDQqsrP6ihgGgbK4yzD4DhUsvYvrF2KHuvDR1ZA9TCZnu8ZZoDv1CH1BQ47cgd8Z3W",
  "key29": "pguaiYB5kVrYJ4fon58BUYjWvFVB9Ne95d33kujdR2nnhBr4ohKNBjNcX5HQMM1Q6jSfYRQwXrT4mKHw76bgibm",
  "key30": "N5XgPDiERgm4y217Sk7DMBQkDtqeG1QeLcp9SJqRPmq4o32hXgWCQt2gBCqUddSzyoTqA13NrbJmtvHARCpxENp",
  "key31": "2Gy82Jm8HVcPWTN9T6HRfwPG2iUgqQpXRawG9mXu58nPjvsSCSFPG5jLXcB1MxSxbeeAmjDLGcv3B5tgDAKUP3Gt",
  "key32": "3KaNf6mWfbRasdTzmhbXfwEp2JC3oTo8FL8wjisB2MYykAf7FgJDVV8auNuJn4vGVtrUtPC252RWJbAf8kSCi4ic",
  "key33": "3gWDKvWkTBdNk8XrSLNrn5KKTNyVr2VkNtBWywK9H4fR5SA3Qw48puKcreEXuMFUsiRnQTTPhNLgAUvUoJHjQcCx",
  "key34": "2pFAjoP3wBVSigQ5tA7Qzba1Q9NWBnrqxG7oZeycpdsf7gvrbMkjF4DPcCdgtG9ouBhntqPkocZVuJwgAWwUayze",
  "key35": "39BwrVgSD7FDRw5Rj8f7cgngLA9gy5RivB6hmsCV52Q8jkmHUyHnSRLq2zq9ShsT7amHSfivwG5cMTvSx3Cv2LhW",
  "key36": "KrvJkA43DMixkLQqK1XwniNcK954htxKYhmm9iDVzJnaHh87ejiNhURqavS1ZBTizkwDBbUHuTsBNR6GLZ9SooP",
  "key37": "2zdstYrUGbDXb9vWUWS7JogfHa5tE7t4eGSzJbrmCfxat4EyjquYWRN5xVqDZfywDz2DFFNoUD8JNxVvwAVowvMJ",
  "key38": "3xz2ohLaSJasaBFYBvrg5dfTCEb7iy2X1deEW2BFSGWw7S9C4AyZhgXhBTjTkbVFkhwXh6evM7mhDHyN8FwgjEHH",
  "key39": "4j8jEGU2ePdx6R1AGdM4oapP7vUETwPGfNajTJzNYPPpGTatR9ZTUnasAWQVWNuoDYZWVWirHDwr9VC8PzNjGrtX",
  "key40": "mwBFpf4eVkWnFfM59F72RJLLWTeQ5QNoRXSN4iZQMaetT9TRB6LCsc4j53QMVpLM3JKxvdiar1JiBZyzwx7tY1x",
  "key41": "3MaLsFFYqoGy8Y2Z26xjm9j5icVfUaahhvS3U3b3MUgBoTTdcaVxvGteW9eTCGG1ddvMKYBejU3Lh5wS3Lg1gdaL",
  "key42": "5TfR9Co9Ap8Yn6TtYxFKVha6kSjt9YSDfVhVWHJoprb4s8BGvFxMdDs9nDxNQuzdpbpiVQCYsE5nWa3rV8mBYNuz",
  "key43": "28qECs5G61hR75sFG3sWKEZFaJaL9Tcas8xFL8JXjujc6rervqFPtMj6wu98v2swyiP3YxFJdbHsRxg3sB8v9GRg",
  "key44": "2R7NfZkesVN2FxMffSU5wXwuSSgzUeyhoReN1WzzLYGpZVdxax8QquAD1cjqj3j5eZGH9rTtTT8CYSGUCdC3drtj",
  "key45": "3MPy2TqcaLdvAzpNnCFweF6jfS7K6TxddokBr1UhgEBoy4rVoTY69us4t2Uxq44LnXCGDhCVuhryqJ7FpudVUutD"
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
