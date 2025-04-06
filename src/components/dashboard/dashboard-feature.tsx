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
    "4Sq7xcvM5TjwN97UfUZSiKBwFoAiJqRt5KMagKiJHPJXCLzKDXg8G3P6ALcXPfZDda6rAE3tsQjwzWbjy1yf9CU1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4C1SMPME1gmE2x1L4rdnL3VPTWQEfWLQcNEti1X6gKSXxHUPMDG8TMh2hGGTNfVGe3Y5mcozLtUKpkNmSTyC8bPE",
  "key1": "X9CfX7vUhR4mCeJWHxAcZwQN1GZRgGxUyEY8sJ62ZVaPYczNpBrhrJnmLrBHTxSP1Cz7cCjyLXCBezgLUVqnr4T",
  "key2": "Dji2uZiJ2xBcq7eY9GDvhCMVKjqF1KJeyRHckEGLYgPs6hZaZFbh1FUoLFguG4LooaPgvYB2f65UzfNDWR6XNUs",
  "key3": "28usbBJy6JFuWuT1mCWYuk4yAARQJifMXWxauoo1XL6M1vKhvVXeraUAndaXCyeRcTYaWPNfYACHiiuqHdyNTzSB",
  "key4": "2n332Ned2rL7TaebfWNKam5C1FGGevJ36eycD55Ue6LbCmbBaTmLmbuYkZXsLNsDE2goKnDS3NLDKBvwrQm6whjj",
  "key5": "mZHQN9QNZiVCAnfQco6bCmQzDfzF3hCsiwTLUDsV1Unn2ZtwoJznDeXnuL9tNiqH5NmqV95h2N43hsBvdUnhcwE",
  "key6": "2Jo81BGmZs9ENefLy9cnYRtda8av8wUgiscZLPNTL8CMySK21ipn8GSVx8CLVfo9juqmUwNBCP8Em3YHnD8WA8Hz",
  "key7": "3o72gatssnDfMB8xD2yiZv8Q7cCqkrWbGXMj45XPSu4PfEsrSYAA38dhgzrteonSwY9Wzv1jYvVpA32y1BuHrZec",
  "key8": "3pf6BCtM3Goyb67SgLCuyiybwMJbt827CtbNgZ87bBVaYfDzs511FEvb57kveg2ghnRTASjHb2QnhagkWH2k5i21",
  "key9": "28ZofVGGiG54gwaGZzvuJ5dvff4ehZEK7vWLsjxADqgjUAfs15ryRN7EQoWcbaCspyiDj7MWyhxMsM5xT89KZ8nA",
  "key10": "65swjB5h8j8rL7YL83ktFFBhdmzzCJCjuvn7BLj8kvUKeRRCi28dqkBfXKw6WkU9J6kJK54FY5wFDm6r84JnCzV5",
  "key11": "4vHgeBexeFtVkhHa6GibttZVaQgLYUmpNRR9XWL4LzaapbpSa3dpL7T1qmszafUFG9fPjKNAryScUhpUdk45LCK",
  "key12": "4Fzo1MGTcr18niJFjMPLzgLgbpVcS5JfEJ6UY6MNUpDjoTUJm5BSi1hn39iA32mF2qF8btr6tSBLsHeyopv2ZBVv",
  "key13": "5dsQcJJ8eKQMLXL9zwzThjaL6vzYnjaqCHb29S7xoiMPBgYAQqT1w2kMbT1y8Cn3gBXAistaa136CCzc9qNZKJyU",
  "key14": "KxDtfVm9px8kSrx9vRUps761zeHeugyhE3vgRzMgWLuTnNHiUv7qhsrcp91aW5xoyT3P5SgNzsS9LCJ8dqNTn5e",
  "key15": "63oxnQCZyhBG6PnK5AqjVwUGBqA1dMkDYdX4fYmDpEMTgCyGr5vXHWs2qZpNTy4dFiELEP8yKDKYHiZDtzXmeQPY",
  "key16": "2dJfPLnEbv6NZTPBBkogd24K4AAecZQoGdizrNaST3F8o18kNzRgcyCngSA6QTaSyoVegVAot8R6sxcEgmYdrmgm",
  "key17": "5JFRnMeAj2GkX9vu97BuRBh42428KNdbcEC7n58TBCPJ97orLGaxyg4vAFw2Dkg4FxpQmxYdt1dbiGkT4W3UcUQ5",
  "key18": "4F3wWzLn28pqR5538ZJAQFy1zLtnU87Hvu6yiTLKC3bayvB6KtuQZqPMcYcJCFxdpn3epWg7W3HoVPZTuSEJyEQ",
  "key19": "znpdgu9bVinerm9PaNbKuMBBJFBi1ztjRbA9KpbFRbBainfCnkaJGycp5bveWFRgqwqJ6ua3WAEjCPnFmDEu37Z",
  "key20": "5FGeKCzPPuKt1et7XipjqpfSFtF96TMQr3RNCnUqViFSZs9swxUByUtUSFS8iev37NByxg7FGdMPcJpq627mkoSG",
  "key21": "4cv2fkHLMbJ1dnSJSBb4SY3qqSPWPCREvLVCS6nV13GasC3T682n2gXYAwAywu2SXKCeCPJfFikLw7F4zucu8szQ",
  "key22": "3HHCTKoGHbAB8gwMvC9gxbSNAa9YbtP1naWwzRgUfHGPRiT1znenNYeewZgmJ22UhCq7n6G4v8aHdWoHyfEN7akK",
  "key23": "4wAhkg22eqtsnPbiknKTNMjwApxutDmn3bJKBmwwjzPovBdiFqsJ1Jg6jbaN9qWxg53cdiyQYtDvDLuii5a5TEe2",
  "key24": "352Z4o9Se3YfRX8WVzskxP6JbYukTq4PgB83Je424vvNiCNeL23fDnFHBB4LZBK5jf8oy62wTKatqAh4WgZFwfgu",
  "key25": "CDTkd5MpU7JDaF7D1tSqPASSp9DXpH1vuL5XssVTya3KjpjgYEvyrFTFBpm3jtydv5hzfy4MaVN7M4f1qrECusa",
  "key26": "4fn9BrxVMadywTeCVkHR1Ws347ggZQvDcDtETUnaYUNkKBFnRKGiEoVpCi4VgZSU2gdRk6jFbum4UMU8a17uwDms",
  "key27": "2Xt4283UxKaHhKCAYRAgp5184DtSDVdFAybkse5UAKsLDKczBF9sdQFW2uc49SUyAZZo8v8UoJxUzP8xumU7Ew47",
  "key28": "5jiATvnf67RZAeZusxYd5kBqNbvSFwSr5mtk4UDnueCAx6QXycs3WrmKYobUhp1K91rGDQhnDsFmaAgBDv8nKh8G",
  "key29": "EoWHfaytKRATAR8N68Yxby8uteZLDZT17rHizH8iDQZsThTuU4D6CunvCkNUhsnZr6Vzuokmp7GHd7iRfM2jP4S",
  "key30": "38uCLYeRNZ2iDTmrdmF733e9b3fNX54S85gNbNd8xEETbdJUz8T7wevfBsErojEozWJAGtdxjxcLXrpTBLXZNyY9",
  "key31": "4DUzpZn46u6DN3EG51Y4jcRnfC8mMnUWTdA8dMEbbuPBTCmhMzRok5ecdTfSs75BHfvUu79aXmtLPxPg8sKJpChz",
  "key32": "41Tt8vwfEfVgWHbGbk4vApdyWyAZ5SxEDPLh5id2U8WLeuDURobp9MaxwF5vE54XYLTnMfLQAYm5AuQLyXPKq1ui",
  "key33": "5xazbo2cVfhu9PzYBYQ8KCeBsmWWSX45beFPt1z7Qxarq9pFRA54ahiPvKKoMfwjFBV7mo5L2rNAzr7SRPcB8PtU",
  "key34": "3PVWWysQDzuoL4HAeCG66T6mjm81fTQAt8adkhnJNQn9U1HwUCJgjomvsKTCKE9MWfyKGhbYNj98msHVaT3EQUAJ",
  "key35": "pnhX8EsLp4bJuGhpNkZiA4AQDA7v56PFsjWc3PyqGDB8DR2Jk4oXsWAoF3UeN5Vv37EA8WjJsxhYivnv1GKJGKZ",
  "key36": "5vh2P42C5RCoZjALru7ujvLpMJXcQWrwumHn9Dpx13Mf4GS4xyzzb7KmEpEGFeVY1FmtFfTbSFbq2bmqTaXhryTi",
  "key37": "45EUrvHPF7AwFgvhdtA2BNvrwSoX6AK8YzDnGyfLvpiyDTrM3mTAAxC7PRdaQ6ySR34mPhQGFuFkvhSWJ9Z7VRuo",
  "key38": "2rfaU2WVeYKJT21XQ2ef5u94aAbtoERLF34wFQQ2KKh7ZR82CkVKgbeu2JG713XQqfsmNkevCMnX6k235B23xw9g",
  "key39": "3P2dVUyu12NtMUmewxxJh3MpVtf1qJL6xLhGnHS1oF1n3AdMq8QgnhCekFVVwi77jE62Df5ke4vrzySc9bvwRTPy",
  "key40": "3VxUBB8u6XhPLaRDdk9QLBHoygUkGuJZMZhGsCqjSNfKWd2MunyuZ1npWHwiVCQLdfYQe9znEoKbM73UQYRWJgjW",
  "key41": "4GDYjTuUDMTkYSSaoyWSRmFcByCKWMUfngRnnVZXQdNcTGZLtcRBMnSJgx3U8D1umgZn9yvjfTZTg3FWzGx9LDiv",
  "key42": "4Z92hR5cwXWccD1F27DmLFMh185bZRVWsejVhrNanVDXi4P88zeGCh2pLEM4ewkmuNfinF12grymzCs9L87LuYt9",
  "key43": "5d4Re4Ro32Xz3DsdSmBJX9sgcw2cXG7Yrng2ifjtUaqEJCVYo8YNCzzH4HSZgGU8vFyXBFexvzodn6Eu3sWBFUe4",
  "key44": "3U69zboVCqotJ6iASHDaiZWixwA3Bb7yGccHSLRqZrz8UCbrSBFWs5etGBjz2PDkdiFhLSkQ665Fdu1bZRBmFRXW",
  "key45": "Wr2wa5hWU1gDcGvfSQPzwXpn5ctZyLqQSZbncGtDmLRWsyDzRokT5vbLWKynehsVB5BQrwU9e81y51sRzzUkZzv",
  "key46": "3rTWBfBDoUxj1vFhciEhdzJUt1k99tZJ6hXnPYk628CWEHKJWvcay2csXC376YXrWG88q3L6BhwkM5Cs1MwTjrnA",
  "key47": "2hAd7Aks6sWos7sfpabFR65nyPBaJ64uvmAfFmxsvGy5brAWvxoMSvm3s269nF1etGCYkPfgv6fSv8gDtD4R81KN"
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
