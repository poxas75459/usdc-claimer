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
    "BKT4o6s16WWhnEtrpmqfho6JQaftt8Chroac9EHNSMXfLvMVppZt77mwhRZM1YaAi7XpFGNLA3sTt4RsQzh3YWi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QFRbZVtb8pvsMaBZkMLJrAaFp42XvgdWLSrGV9dkDYwsGK5xyudhtqYLJKrh7pyfuRXAYBoVj9yRhPahjEEjAGP",
  "key1": "RZqauaEkb81RM8c8DhCgpdadR5CeQyZrd6MYPMcgqDEsqwNQy8sLaVd2TAWkp2AhdhQudpGjAXvMX9eUySWtUgF",
  "key2": "Jb94HcZmngZn8RAcYyy9hsbVTUkwUzQok8vDTotzyVbYjX5u9KTcW4dYcB2uFcQaAHcktxA2fA7PxmxdnLb54bC",
  "key3": "2a7cq6DRE5bXKzVW3rFLzgKksKxoEmwX5KEe28od2NoqfVPhk42HHtGAj7d3Bsde6vfx59veBcbSPibH54nVGggK",
  "key4": "5y3UvVvUhnfsmt1Q6De6xCYEWiLnxzks57qd8Xrz5yifGEvpTkU4MCDvnFLWoPp9BQcEY14tmVZTTcqCah1dGA2X",
  "key5": "4UAt2M3N1139H9RNQH3dbpmisrjQuaWARWVWd9bdJFhL3WSvB6fF2v3j3SXApZZH6su2V1tBPm8yHFqKNufJArbo",
  "key6": "42eR1ZA2uPETkkJHWJZ1QB2qRTNUJkKzbRkJeeZ1rABuncQBjGEWw4jZwQpq3e1LRu5t7FK76TqsD1h2LoFZXPdr",
  "key7": "2e8CfSwCfsJs6EQJF5N7vJjeE1DLdECo7hgbH7xbYYCoXazKetVX5fG3Gen3tWc3TDd4bG9m41DDP4JCLEJmtANG",
  "key8": "66MSHtf5Utorv8swHFyx2p9p3c4sH1zZeL4MxMEGhC6jT4R3iXSjF4LX2BcW7UgfxFb7wfWneNEhYeywDNVRSjy2",
  "key9": "3m6X9C7CYtJuoqzN9vskkyJFNq7gB1FYXiqLFJY21fPEQ79h92SDMG3vhrKgQorX2SCGeBWHdpLGw3r1fVzNgxr7",
  "key10": "4HH8MSHb5mtWmsYm7KqZEhAyJtZ6rSE89GqYJxBdB8VmPkxXBv5NynQCwFN39ZajhE6q39yRZdM1EJUcBdZBG7qZ",
  "key11": "4jrx9VKoqu6X2pvt6d58t5pMsE3p343owfD4qMwH7XfYkqjkV1skXpsgHgGD83KsD73kL5eidsbzZtLMtYm2YDEd",
  "key12": "5PxqPmxfbu8ZDNG12yg8dt2aw7Mgt3sgis3GJYKCUke9EupZKyQHPhQRfTqqvtHKSxnhUikMjXowy8jPxrFNewiK",
  "key13": "5BW7HQ6SbZ6tHXMAPUvd9PvR53BwfAEDJLqAn92dGPB6eroQZSrjYPN7XNYhFTd5r8QbgTJRHx8CktQnaYb3vv95",
  "key14": "2kS352h8XgPt2EHagyt9gt8v8ATEsPZfAuHnjVmgdtDpVc4Gvj96JG19xxLRdqAg9PQsJRG7BukLNSfzo6VsnMhV",
  "key15": "kxrhf3pHHNiiVN3dp778mswxUxGqe1Y8DDqJMcDWAhsaHGaU7TQpMjs2SiYR1FTS3soyS7Fh8eHsBm9Eo1Hrrtk",
  "key16": "2bBTPenxZzQpD38dhgsT6BRTgVZHEAQbCvZyWzyPmJiWZ6ofYW2n696oGnL7o4K8AYoq5X1jrdb69rvMoEdWydt7",
  "key17": "5bwoCsdcGoQGQhrvz2Jv9KQeyjSoJCRjMTgZ55UV4JSZoSZAsiGCYYptv4sBDBR4v9T4ftqYngxibBBiz7hMGNEx",
  "key18": "2NAE3Vgnx69PtnGtPVe8N1iN3h4dj6DrPKdx3PMWSM8PK5T1nv5AYUetyegD3WfT6ahzfFhPoxd6YkBAn3Kx3Z5s",
  "key19": "4r3dukbnSdcbm3Firz33a4vCGR7T3vpUGHT4gQTRSKZrcZtUpVyxDAD8Z6ZGXGSKv7vvzjWAxUkomDEBZEtat7Kc",
  "key20": "3Aj9vqUXkf8fsw3g7pSpkN8XkwLqjhVdePLfx1dV13ZndzX814jrzr1jMGBmNLcU4CoWkq5PxXdcYnfWiUBaD41J",
  "key21": "2c9eCG74T2uvfqYW8UbPzzaMdPhMfEdTN3zrqYurGiemY9MKWdnNfbrscJFE2mDtcLDZVkAUBAFp93ozVJj34A8D",
  "key22": "4MKM8i4f1iSFA3bis8UyLrurTSsVCojcDi4SEKruF6Ge95kDNj71nPtBjLcwH1C46s863RLJjfi8qhhsXMXMh6P9",
  "key23": "q6Eaj2QJY4WyiM6kyxygimQfsozCWKcEBaHrhkFB2KNZqcsW7zmSBwCiAiBgGXKFk1u8ZTSmEaf2ssJCrx3g6N8",
  "key24": "2LydrJJtRCxjQUfj6LWUUhGto5DReRDecbT8r9gS9Hje3pFmWqoT7dcBdFY2nQAkXsz8B4giJWXsCk64pNVCe66c",
  "key25": "3Jxtqr7ekptRKi39vuupJZ2UPBU3SS6dZT4DFPiykW7vGqd6ckpBGhzEhk2ULtdELUAjGCsxpP6F1MRbECz9VqHp",
  "key26": "2SkAs65wAZJmVT9kvAKuMEm9CFmUMynXo17HhnRBuhCwz6E3gGbjgTEVqRkrM2E9V8ULQbJ7wMYQQMTNEyYJA13m",
  "key27": "4DowsfjEYCvbBGNgDqMGDfX6iJvjBoNZnCHishWKrpbJGe5TEQ4CRBiYbKgGi3SrGABmRJFXPowJy4QSUV7yhnNM",
  "key28": "5MHvxWTh6ywRDsWUpzPh71tS8dyjCnVJWx5mMSzuT9dHHfN26Q3vB5Pso33XAEtU2dfiNgjHgWgEAqHCFPYoYEBA",
  "key29": "5vjK9RW1Pr8QDJY6teoD7zcLW2XhtJJFTvd172dFtTmQakvNNJYhxkQP9bmavHmQhunwk4jsQx2UMeRnfRB5qc9k",
  "key30": "2vb5geSdDz71cTbPSeePbhA6VUEfFsdGijS45xAe5nZ95cZjSjTmMFuAZZyeMHfiPsdNanik1hn3UYauWv87agH5",
  "key31": "2M9zRjx17Cytviem13Yy77qdTqHnMFcRUzDG1Q7RRQt8rWGSwZwmvfeM8GCKU1zwiwUeBCDRuisYgzbD1XFwdM5s",
  "key32": "417i2BgbfgnRwtRpBKk2VHSzSc7XbxFQ1t1k8c9nUjNB4Uy1JyjVAiHTajJ6har7Nd1juhCkFaT6DeyfCqD8VTGa",
  "key33": "3mxMhD3byKE4T6urjddkfnYhqjmjUgSgNQh5YxK1P3Y1s784u5nWM1cA4yqojkc2rEWbsRzGo5M2Z8PicDrA7s96",
  "key34": "4jw7rLvzD4r1fQwPXuYFVXUGTcXKLvGAvPXh7csWGUufH5sxeogq5zvtsEXXCEoA9pt314Z5brnUaBsj1jwXvF9",
  "key35": "pE23WH9EKypMee6zJ6CsxYzq97afMbEi7BTeWw2RSkegYrEfbmhP5T3AQUMcG9iU7RFdTgM8WygF7tYDEfiiXST",
  "key36": "3dMnozy3CqZPXqNWXgoNZudt9jMb6NQ7nsRhuvKe8BJ1cyxUyeh1cTzMBtdxmu4VJR8Mb7LhNwXowTZwQELkdE8Q",
  "key37": "3e2xo2r495AzLY9MVC3W3CtiTFoc6penHJLm3wkosRajSjNmSnZiQz63wDcxeXmZaHJDkAmQUbbX7dEPHE3y1Ax8",
  "key38": "5N23X6BBr29Pzta2U758pBBjpfW94TK2rmwwmDyeQsyLhq3MtijhZJ2hxRPWn1nnFR6pVPzZt1CWf5ubuno958TG",
  "key39": "2fShEg2KkeEAvqFiUAPvsoiBcj4zrxmWoNwGWMhBWmXzhasViRBBhHf6VRFicZcZG3K62fUqzaPjai5PPFFmCHt9",
  "key40": "o9sFUPRG7fGF1xmiVRbJxfE6WX2tb76ph2PQ39aSc9RAUncK16dS2wcGVpQQXjMeRKspWtD8LpoePrbrsyH2AGv",
  "key41": "27qk5wJCL6x29mFijwBRnEoKU86Epmz6SiE6DA4uL9BNw1MaMZjz9ZHK1iwF4m6bpEL3dbVFZfm8CKG3DcA4AdZR",
  "key42": "2872nNycmDASJJvWE625RH7jKLuyKsKQDedFZ8fTquHuDLeY756MWcHtKUYq1ScUSMLBZhJswCRANvfoFAhTRidc",
  "key43": "4RpzLwd84wapAgekPe4ZqwNa79XMV7AEgyhdaeSUj5rtpAvfXFv6yYGVbnYvVrTWVAdXxLgDGkK7kGhfeRBxibUB",
  "key44": "5vQBiTdZYghs2pR4K2K42ohThTcH8e1dQrMdyxAF5spb3u3UwLH9V632RjFZ9NmmSaSyZoSWgcE4HxcXc3oDLxv8",
  "key45": "wSqGzit881DCz5fRLj1az8meAQey28Fu6y4Lt7pDt2HLD8W8gdTWJgxrzddZMvbyuwY9HNu7ggGyjMZwbcotAm2",
  "key46": "2NvDU5XnrLYQAD7HXwyAzfXKqa999JLetuj2qEbmBtV8bKcaUkTv7qRqzazWinnNwiUkXkMgTGVi8JYTFShLvnJ1"
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
