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
    "z1V8YKHHS9ZqTb656bvuV3WHAX3f38buBv1yP82dmb7nA4Qx8TDpWAFeiGYAqjkGmXMxmEyi4D3YUzQBsA7kNwG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TNM8qaHzX1sEoRYos6yBxGYmTM92T6QdkPQg8gf1ng91WZSnceu5nE26SpHrzqHPtPWAWvwjkLAumXrCJWrqacH",
  "key1": "4DSxdh3FTC7nwwg59RoMCU6DHvwJCd2NshyPVzfwd1WZgdkcQpW9d6xnTdnRBriaHgGr6ZY78ttZ4EZFEFZvMDVE",
  "key2": "5yh6VBBRAQ64cevzcBNXcgUjYt4zgViZWi2mvUrRR5A8saFvixhhsq4AWfmb625bLFynbq4gy1VSJaPgj2khFsnM",
  "key3": "47aUgPS6WjFQ5HZS3qSKDSdotes8CHCKREqJCm5UJm6qXHTPEJN8vYStaSWLTBkjx98o8rXVrtBWdhxW595rZYqQ",
  "key4": "Z6CKDXf5h5nH7UkHuztHyW7rvDAhmSF6aN4whzBnhGAtwT2zVLNoNj9P6uHk8rzgnosYzFfRa6BcsT1KSE9NgDj",
  "key5": "3mgDmm1NXykyBRNdSRMihiEPQxMyxhDnrdqW7WpgFe9PR51TFq4adtmw6K6rFDxuvqfaH7DbSsDLUPT1zajztzQ7",
  "key6": "5jEPRsSENVfPkMD2devWWNzEireUoQx8CLJWdVDgNKbzVhwQQfDfhmYzkAmEUz5WpLkGaQdRzXhcWCkdhfHgV3sp",
  "key7": "22B7erVKiiBwpiAMSer3YVfYFRjcg7zYoZL9iREbwHpYShW9LDoc4zc4ftJxjU8madDnbSSAPGBr3pfvgVefAkRV",
  "key8": "s8Som9UW8Cm1R4xXRj9toU7tyKAsYUREDAr2GUL9PmVbdBdCq21uFFfgpU6grANMkivBBceKBs9vvHeQ6XbJgUy",
  "key9": "2vRTMuvkPRAmnAqF2JcKmGCCrbTq5aSUToHE4c3CFjZYzKVedQyweD8L95hqZf1jn6pMsYh5Zy9M5CtqVXVyqnwH",
  "key10": "RXip8EhRKYcKkfcZWVtP5CBGXX2kQboPypHSjXkoHwGsuYFRArQinFq8M5Nvwnh7ZY2CdhpHRpzqbvAjC7jAsuv",
  "key11": "5DLWYvb1tZ8u38SKJTHRCUxx2ooZbWQoiSnPkqnR5qjpmQaUmecRLviq3bwkKZm5gqyokZHL6jFieL5k8dgpAfx",
  "key12": "5fZZwqDB3nWuT9XXpUUs8rHP3cYyCUqM52fJwNYHZxUhXuYiK78oii53UBRSHU83q2BXx66LuiMHarXDixnHRTPB",
  "key13": "5UhL1NZ2U2GUV6LY7d9MRyWL99gEMbkrqNbuNzqxpi8xRm4ESm8szVUMWpMsq3VUUqikA2TwS213vA1qQsQJn9o1",
  "key14": "3fx9xKeZCg4Za2puoSRnKiDv2Nk7ZNabY5cYTqbAE1CmEbq5jzPjwLBVkNogtjHedaVySiDSuSRHdPam6VrEnvq7",
  "key15": "3y9LtYDSdVzb2zdnCbUTBM2ovG6XuJDnuP82ExSpPSs5h7KZdBVCmS7GVSb6oEKiK18uCUVhRaGJBKat1iVTt45a",
  "key16": "2uqyLnNwdR2r42TwBmDu3xo7EmNbnf5LZ8eifjbbFESfVSgbj6HthujHBcHQMqXKqrzvqasCUBfMsGcirirPRbtN",
  "key17": "27B7ugFEkHoYzEmqsaqQUt3z9e24UeRRv33KskzX32A898kwSv7QWdo7dk82oaX9Bd7jnWbg2zHkvXA1XgmRpEb7",
  "key18": "2eNXgtmUWYKhkRZQmksnJtMw849EWz5eWKYsRwQ1FtkkVExMzCrAQUi7MmsnE3hwdzJCXMpH8GrNdfcLjmZjpvk5",
  "key19": "5RySMQ47pbmCnxG1L2WRXbJNxSPjeXZPmqwZqX3L5dHGdvCf7MfFmuyLFRtqar156czK6QftMWAWYVcfkmuNZAY",
  "key20": "WtfWqBhFN5tic2fVggW7VDmvwanpCXCetbp87UQ9FZhmkYJCdvmAikQARdzCSpneftBfN4gJs8JZrt4tbHxDxf1",
  "key21": "3vm6BSdkpUJ7yAjhBL864QVbWVHDywNgNFUAQnUAdR2apBzorxkLRC5Z6nRwZzHNTpTB8ga45F5AqdWFcoh6h222",
  "key22": "eB62JeeC55kEcf4M8g1BhSfyBNzZKDaiD7TeWYbjnUeHetRs4dmrkgMfCZcAotT88YSzbyhnmM4Q9Mix9NFzBmW",
  "key23": "5qSA6LBUFscxC1HvCtjhXDCAUqF9PvtNUiGijCWNaEe662iDZufRqWSWTFAiy7i41TGiAH7EjV5YT3mRpN7yJza5",
  "key24": "2oMCKagaqf7JtGxzUUPdoTJvpX1nn5jBiTui3fz8X1tFs69hkRnoMo2zSfFpJSNebrEbQvTcoW8PPnJWTRsNyAiW",
  "key25": "24nNR8vdDW2e4Ga3KJA4iT1u7KzAujgiyeiikULqsHRfRRPAsQWXAjLbq5ffdfyRppmgFDWWNotZDh8CbvM6XWxE",
  "key26": "Yc2XdgC6rjXdt5fF4HTVUsfhxj8rK3Denh8GD4fhact6ucVp9bE8njQBcqhs5RuybjryX8N17RBcXqP2Z67x8tm",
  "key27": "KCo2dXP7fW9qSujJy4MvKLxxpsA2r4HtS8NHdbSCV1JbTXbiaBZHwj5spZ397eZQyMnhUZNyiwWz9Ry4TNbHXG8",
  "key28": "3vtkaLR7T56GYnDwhqFt2YqJUxzc4Hy6L9wp55NFqASviuDmjvQSoGzvuAG32GvNCmfQ6eStff1Xmt1HLu4NgG7L",
  "key29": "41mkGtkw9vHvAttfEsphi3FQkYHHpfDc833TRsGE51KxFryFKcxGWV14Y7aVSTdUXemNsQA7uzfyuH9vxMKHZ3ps",
  "key30": "61SEUj1XaTqve1fWb4pcm5e7P3JSx3uHXt8eXoheDHyuC8TZpAYTGMLptqB28kLgjUEvaAjKnvp1zRgqwG1SvTd5",
  "key31": "3duyhMxKsfSp8CYw4qX6FDUoYRgNyQnYLCfrUsjbavyvNpzR6EPZfKBxVLvWn8xv3hR7A1r2mxtomq6TD7aEF4Bz",
  "key32": "5563RH7uoTT9LTuyqhuHfRbH5ZdehqDvB7jWKqG6dsVMzuvrY2zi4kkHmT1bS1AkHQsaSzc8UiP85uDaLpi55PfK",
  "key33": "4Yz5RC2WTcqXpnQ3fXsVC8iwu1K26XXFBsMmzdhF86yHngi34rZboeBjkGVgJvGJyPB688nVKrVizj7HByr1EtSv",
  "key34": "527cQpBMuw33k5htM6cbWYA5GQz3PQDkTDpCuk9jiiAbsYQwWeeBV2DGjgx3bhKUejtCXpTWUEezqe8qe4HDWsyN",
  "key35": "4t3k7Bk8RxthWwfkCFGnMjhVPcPAHUmatuipj8uDikvdkDvREqbsBVMXtNBFSY64PRWDWjRc4ToWzFQJDpJw6rGH",
  "key36": "5iAuC9g53MDYmkKfzSjbrJEaNHdessDAhKhdHTN17M4L8sUmPwcCMP4vM7rKDGPrfXEzgmYWLFwg9duLkGbRCk8T",
  "key37": "4hqpUh66zBxZEHV6M13c6HHvasoRrnGfwr1C4myNekDsP66Df5UfQLK2ag7Ddt1w2SLz8uSeLa5amrwqRpao6A5w",
  "key38": "5htWsVk22HXE88Ap54q1SchQ7y594qpoHjtdfVKh984tKm29sHrpXRL8xraMNEKHGR8RRm9JuptzTuXpN5FwBWgY",
  "key39": "4MpnS23Wrt4HxRFj94Lqxj2R2RKZo55ELSQE8pAwMpdgHrJ7AduxNFzVk552GdcD8rkVw75AaJ8F3fJCTeW1Zq82",
  "key40": "4TYv22zqFzJFdiTzETbFo19pxbx7qspDdcPKcT8Lz38WseiM7tffUmkXcdQ7o5kc1j4mf28PEMWxpXf1KttFuVki",
  "key41": "3Vd4k78BxnFiSrBaeYpZSMFr8niKKhDZ1FvcvgN8U8R2MzyELNfEqXxjS9GZUoGvVSAMJtfttfUn69Pp5RFkqJmG",
  "key42": "29fYr3SFrk8QFBeAqU9n8v8u1KLzw8FiVmDai2upGKhb6yYFX6Be7FTXdwyu12jJn2qStbMhpUgg5kmVBfr1pDvC",
  "key43": "5FR8zEHdoD16c2J1veZoQFmzs6M3sHBKZXfdyBtUidugwnDkP2tBhi7qsWRmjxvmw2qQDnTiWkbgYm1KJSsnSfny",
  "key44": "5GVYRFeZYGXbBxMopiPN7CjtKKUXhzqaSRg9nNxb34xRZg6WRata4A1Urcoax64UMMAGmBJArHG4H19ybWAKFj75",
  "key45": "2coYbhY1ETuLZGkajoQ4Q5VBVFRevGYZNDM4xewwf4i84ZH7LHxeozoqB6zNNUN1zvn4sehdUL7Ma4QNEy5fg5me",
  "key46": "5UvWdQNqhzivXzES5Q53HRVo2URdMQmSP6aQGDAPjuxzTXnvKnmFKspUbrcg6ZyELmZ6gPUPWqnxsdeMPKxEhaWg",
  "key47": "d2zMfpG6ntYcTNvT9DJRusvTkq8f3nTziXciHdXUZ3WthFYbvxrdjCRTQpPC7aFesj8SZJPrfVvVjA3yb7Q3TqK",
  "key48": "3XBazz1GhKRzc3sgigHapTdaBTJEkMjz3Queda6Tap7LDuuxwNCsQ94BmsSje5Y3iJpQtLZZUo7aZrnNqjhq2Urw",
  "key49": "5YGJcjHiP1KCC59UbEpY3cfv1ncew5uLd6s5tcqrafNLo7gszoRiFN2kNTkRTmL2qkH7cYuWdjS2mQ32zFhdFvtg"
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
