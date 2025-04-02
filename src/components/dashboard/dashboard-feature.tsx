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
    "4B7D4Br3aYsxXp2k2u7py5iZSMTcBVBD6Aasyo7ckcHmTtcSRjyWULBYked6eZgGM67CQgLddX8zHQ5eJrdkdQY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eVf4BvZRa5rQ9NmQzxuAHTVY1TJd5krfWQFeejfhD6ZVi7Kz9QB7eFhTbYojQFeankDhBH8UaepAyDF6zLnTQHJ",
  "key1": "2jTZ6k8mXpGmKRnJDhnxxswpi8Zr1U1m3mmR7CRbgED94utK3gxN5mKcvi8sgZacuCU6u6d6SWzaaVLBckWg38tV",
  "key2": "5vePim4Ey5yBH6LA7QuagXBgiqYHGcfP2iEqm2kZpXsj4QMfbs9mcuvrqub71u8UtfFhkjmv9Hn5CGhbeyFgV5ZP",
  "key3": "3vzZzet2rfbxoBB8Bdcq5fsEGNruhm6zWfnvmuX4esDCpg9aJngQ2b7VzHiJgY4XLwdRosFRvZhYYHrT8uDaNq2B",
  "key4": "57uTbGZPhnWTgbsjCj8B8e5VHoqjpb5rhZmA16S51jpAnYnTdoxVJ88ngNwjzDgJGc6ETwdHksxPH6r3VJaN4uNW",
  "key5": "3bT9WuFkCLaBvarAPqHG2PQXkQ4B1nAaAjTSSC4hdmeGpcnBemiU26Sij4LZbhRTstihLm34TXGs9cHTy92BJnKh",
  "key6": "2pNm7Fn46xbQve29p4qcdAkXk6P4bX1erj2sHyWntKhMKYKiYjyUGzAzzTvKNPYxYb58ha55icRZ4Wrdnd97TeEL",
  "key7": "48kUytgu94m1teeMwTUsCobHUEex9HAQgFYr5NP1VR1sFEULW3AJtsp5LAAKyNahJE1tJaE3hUrGSuKyZXDiNaEC",
  "key8": "43n39gejk9zNitpE5Ua3sBVUQC9qDVHV31y4Lv9KvXNEpP7oGemSbRas2yYjTtyN9ZSNxTtZdUfRvTwtorYN8joA",
  "key9": "32HbSR65YLVJrENgFh2bxgzLkXUJagaHfsBouQMGjTVAGEEKbRXtQX8mkP9U4fPeU1h1bgQEpZRPRMP7uYc6JZWX",
  "key10": "8Mr4WmdAxPFoCemC97WrttwW8j6UCZr8rkC1HV2Z4UeWSYJ81dG4dMHyLMk67jyQjYj4EXhaknmz9nkAxH6MPTV",
  "key11": "zqt6da8xJkTrEJiEVZNa5eJhBNdYY5zckeKy9BHj91ZkhspX7jevCtVfpywy8sqKQQ3f9FfW9PtBsd9QCPB8Zxj",
  "key12": "3euFMngFMXsYKUNd2aYXbwwTYsLJP1LkbcDnPEmgWpwMSnVAZa3Gg9XHVQdEDvXFMcz1YWn91Vd3Dgb7RzgJhKvD",
  "key13": "5xAhffp6x15UsqyJfJQG8pvDePuvQpaXbLGwW7eY7B7LfLUxwn3ifCHU2AsFbv1myZ81MQWy6tTMADbsjNMp3fCb",
  "key14": "34gzsBU3b2SgMtTDQtJmxnM4Sjc5NfueHRPsyzpToJUmY1hy5yZV3gpHrRtEYTtd6C35noFUZMrSUcR6Fva27fsj",
  "key15": "2Qp5djUGYbdZDjzSg4sCuvSMBeBzc6KQhnPostLq5fcMPPbHsfQijv4p4nwbBwhMcQzP6KfLTYjaRPQFJiuHhQk4",
  "key16": "3zrwzCUV2c94L3VzAbuf2CbPR9zxdLvS9nywqf879yUr17SBnE7viKboRUhqmffET2dNL4HVs63Gw3fUkrJTsVvr",
  "key17": "AdEPs8aY6JYYRQvvePzM16cwetngXXdzn9g7iLM8CeRpxXeFd6UpSCxeuGR8NBNhVuWRGrSgHtrMwCVk63YimkV",
  "key18": "F4CSBRAdacy3UDSeyc4AcMbCDafjJsCzPAjCqG26H1wHRMAyrGPLMjgexaroV7HvvptFdLYk7d3zJVN2S5KL3wt",
  "key19": "2auvnUXTWm5m7attGeqewAZw2NGKiuHmwD1ShL8uKxYJWT3W5grPAaYAMu1C6hMwd7Vt3nTUguVUzFqqi1k9Z6V8",
  "key20": "3FyntJ1YepktY1vGk3aZDonbCnotPiCC4am9562cRwjB54Vd2MADJWexrtJV8yfaBeSGGmQVCVzdiLk7hzsZ8Z2N",
  "key21": "3aUVGGLzFkieEufSUhqfFuNjihGb1irXTBFVLXneoV1VgxTNEHP3WDp2RusQLhdsth1z1cZnPwoUt7bDC6sy8x4n",
  "key22": "3KrEr36iYq6UJM4bAMEmXjidkzQEg6nxSCQ1fWyUCmh9dzvCZRQ1sSmEbtGFqVnSR9yp6vicq2918TzevX9T4inq",
  "key23": "2xiaPQc72QTfWgvMVWk1fxQe2MyoQjocJ2sFeepFJVz1UDUg1rvwqhrqivF8ANSBrsbrkV5bN7pJDuzdKNHiXzZ7",
  "key24": "jwU711uTgXnbD4zcnW9nUEENrYhsnH5dw5T28LVjpxuGp9SSLUujZTqmX8tnso3qvQLk3vJwLmLPARSVeZHFRNi",
  "key25": "3Q1rbeuSCf8bWSyq55RVW1z71A529hGBTSmvwDBbuF21ztN5oGdBs9EbWvT3c3XGWZFtCSVMFkvJ2G9yZRKjhsNk",
  "key26": "4g1mjGsUfHFezu1V96GLiTA5mqzf32mcU1NmUyFpWnBVTvRZkHUfgfKiNy2Bb2ZTHcgQa3KRFM1Ra7qR1Hi3fCxZ",
  "key27": "3WYuUVrZA9tc7pSXUFhvmVKfE8yiUFFrj1BoDt8wcD3s5oCTS7jEqxvCuNN5tyam2QNxnFsoX41eUYSU3cq4Nu3L",
  "key28": "3TaGVTBhvTQGmm71Gnv1K2o2ssWiZ19TS4dbZrqaa3aVjyRyatjLnjqPdhAnoj2EDMXf3rK4aY7qTFPJMtnYyxJ6",
  "key29": "dc4uTf8vEDPUxQ8MiWxdijBCrnUFLEgMRemaM19GnF3AoW9Yj2XhYZG3d3VbB6VibTj9T183rC5mo9d1bkxATtp",
  "key30": "zm9RQNBKGnknpQkRpaLFKVNu1axVRCfEtKr7HZdqqNUY5pn4QnF6dHiMNkk7Bwpkix1UcyPKVztt5H1FK1PR5Aw",
  "key31": "3PcRitaTLW3yAc4jvHXJ9B1QSofgLYfKhCZEzcdpV5TniS6Ki7RdXFce47RBM64ZNFYaTwHf1CR3C2MwMRxpWRD8",
  "key32": "3ugydJkDiXrLHn7coKZzLknegLb4r5VFiByV7VFY7PtxSEsACaAdWym2pQPne9cFkFTRLUWiXQ3fho9tcAmvUpHw",
  "key33": "28MidUPqppxRNqfnLFxByD5rBZxVa5ks7orANmXanLykPpwsSrXJQ7RMthtFbtSu2ZWk3pspHfE4pUBHD4jQQBpb",
  "key34": "Qu7hEPJUVmejY6yuuZCQpk7YmNBq12t6NbqKiQPGkhXPsAQwFritWifMW3GVU67JRurTkkomG3FSvutB8Zq8snS",
  "key35": "37vKPFgXj4ZDCGidmviRzRBwNMUjmN3HTyiYceJm8Pn2B6Gyyprc3HgR9AB5cTMf95FHUYqThifTu5DfhWq67A7d",
  "key36": "kJBCtkZzBWFB3Xuu67HPPpFVdTAtvV2omscyBTWfDgBycCBC9vTEKMuTV525qN2XmEH16QqKkTDLx5fjoxFpnRM",
  "key37": "3sVpfENFuT8TQiATR1LP2TupeE1fpvRhBpPpUtfR2BUhY9c1oq39rosC47aFPVtGyRSNcLjc56dTKUSfjan3xwB9",
  "key38": "v4RNV671HkRctfMNJvZ9yd18wV9v9fSxnAXHJuqugeFdwdM1FYj5onwVb3vkd74yNpWFPddBK3qbdafjEJSuYb1"
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
