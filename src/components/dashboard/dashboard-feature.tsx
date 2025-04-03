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
    "fvemyjCZoJ5AuFURFeQ3gMUuYAcgjF99RsiEaZYCDaSfX6copkn67sLwg192LkXwRhfuq6vTomiS3qxaAmSBMUt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66rJFbce5iQc97uXiijBG9mBuHXsDofMsrohUMeTeRBL3ja69dTBWSRTb9FghiSyeGqEnjAjoKBJEUDthY7sAMLb",
  "key1": "XyuP2tKYrqzBVopzH4vX1yFMvqDBkZguHerxgd9rJf7mvyGviHoF2Sz3ix2qCQ7cZAABSWjrZDNgvEkHcFZuExe",
  "key2": "3c9jTVUH9X1rp6KergumMTvfK1wooRHCRkdd8uWDtgXgmc655SmQ24ajBskAkmcuRuAfxNePzYV53bKCDsCWuqsV",
  "key3": "4Lbsw6GB1KDcwHheXhHAxiW66Lu6UXAaWWV4nbtbv7FxUwHH5iubH7URkrQezS9i82HP4powAh8zwzz6MRgi4VbD",
  "key4": "3pRdEwegYg5ysBPAheM512PxnYcvxhBCnkS9QEbjsQdapQAa79hs9Rqjw5qNhEv7zPPnce12UGJgfsUE4z6xBD4J",
  "key5": "2ECExQ8Ag3caVgQoTeJyqbkUt9en1rvpxWkPg562niGxWGwxQ3vBGhKwVdpiSftpLrrZSTmmZPB1cq7CkeZ5x1px",
  "key6": "f9UKou1RujUn4BXMCHqu1xF88etUV7PzjG7Xrjk19w9K2AhMySErNsgan9a4DLai5WWmuEZXUAZfGXMQF8H2k4T",
  "key7": "22jobkSzrRybEUDaJujQoqGLfcGPXjSpduPobnvnBSvseLXcQax2x46UzdsojuxQV2Jj9SzPjjSYPvUTjJsLauxA",
  "key8": "EkmUvfWHnhRBwQMfzqv4nydVvDBHB9gPNwuDfRcidzoeqDMU2pTEvM3iwMnsAEVqYdrDGtPnFsXq19oxzjm63Xf",
  "key9": "5EuUrKBBswuTzZQoYVQzFSZtT931uDQJBmS7U4YySrqotkQNenhGNi7Yusi8NNxBoNNknZE4HLGXkLrk9m5JD156",
  "key10": "3k8D33W8cvanRAmVTtxeBjw34inBF3Y3ihnXeYpKzEtmnn994JAvTNGbkFv6CqDGr4nUSpEPMrreHafnKy1TBjZB",
  "key11": "3pvaRKFXcoqiELzzWp3dCzBDxUiGn7PDaAeTEsW1o8XhzissUs65S8opyAJG71Q1kesa6AU1L74VtjHrnPYSnoyg",
  "key12": "QNeHZg96SF7DLZKnYfFJgEBkiEZT1ooohbGUowCHaQaejeS2ggo6HM5B1jQHktEp5pwj4nKCZGdz6Ads6HwJTGj",
  "key13": "v319axVc95xapY3jACoswmkGhq5hAFHaCqAiPbCSA6NbR7i9rwpfv9PCUQr5bwUwip7pe57DzqxaW4EWQ8yrRmk",
  "key14": "5vgMRWQHzWchdtabSEp3Mr1MH4AVcdLWshghvMHS2rKCmqgkSpU1NeqtmGEVV2awJBM5xLAMzQhfuaQRAmKhWyuN",
  "key15": "2bpf8z9BPmorHmQq18wPPY77PEHJGKu6BTDkb8XBHXF9QQd3qxcimTHzX9KBeyX9Qho6ELjapuEij8WHcQ8gUzP6",
  "key16": "3f2jpaYPvCQxkScpVQsVXqwm9fz96oVkjDn3WaC8sWSvZbibPwqzSrfWUnp9CGbo4gcx1FH26MSUN4abr6Lb4yBN",
  "key17": "4uC4NeMSNh2C1zHvQKy9Lut3WZNWwvqisGJ5z3EaL6U8HxM8r8SDTneKUPbfsuRi4WF9Bu7R387J5EKAgdyFt8Rf",
  "key18": "4i3WrgJKAnJuCFbvzz138NbbRccRADeqhCN4srCXuaJSzX74tLPUCAEZCd9NAKo2oZhigUapjiZMsAVmvy2eXiee",
  "key19": "MEEyMqoy3FF2Sybfaicf86da3SdXbQboLCWshAGggPcy8hL9B8R5nSw9zAuD1884Vrxzo8eGUa2sG47T8UxEFvE",
  "key20": "2zeWoGqX2AeKoC9jmta9i6r4be38taAqggi9WnBsbeRGWLYpdUjtNb1JqwLUb7A7yp9aM331T66gMLbBFisbrRv6",
  "key21": "5d6CcEeztWJiW8zXF6uvSkAgMWeKvSy6Gfd1cqRVeDf2WNYNrUFWYwZ94zQdX26f9e182qXuxmHLRoZDwTMJkqnx",
  "key22": "2XtXgiujuvCwehUPrgWR8doVTzQSNdmp62tm7zREYa1d8veBTmpStVNcHPpwUEnV3WgEp4rRTMLn8sBzKsE8BDvm",
  "key23": "5ns75QrNVMfuCNjvxAh9wxRR53pXCQEEyFwWGTL9mTfZzDrf95edvfQ8BSRkpJ86jAiHKDfcdG7DaZvgQXaEPgRa",
  "key24": "2C1VyxrP1dYuQ7cFcXiMRAy9sSPAhmxHpp6NXuP6Xsoi5Bs2mbLiLBEmJFYDGQSNPSuW5nzfpfUYa6zt6bpiwaZF",
  "key25": "5bqCnUqggDn8rWGK9y1e8htq9o7dYQNBFq4x8gDTYjmbbtju44xpp68Vr8RvFn26jD1oQLqYPTzZWhzAfzJzSbgh",
  "key26": "2cHZdo8eefxkP86pCTaotsEZ98W6JMqsXw5Lgy7PAaT96FBT6sVEa28xhABffJ5dq3k2CQ3nHQsKwrqrphvzFi9x",
  "key27": "3e569do5AyzvyQQcNDn9NgqTT5mTk6z9veiQQoLcd8RWWejd7ZpwBNVXRgeFtHLoFxpmveMvTSg4fHCiHWua67RB",
  "key28": "5C1eMpxWMRrmnqfyXHRASEMZeziJTvvjWdgAwRJrK94BEoL5dBv9Qn9BDoHEx6pdSFVzo5MCT7vPDdt6Tmvt1Bs1",
  "key29": "4o2rfNCh3ByGXzxmEDiemmsFzfWRZRn8YNArFHBU3jFdpKdzNM3qJPkY9fNmDDaJot13mpmoZFWeJRHjPWUEm7rp",
  "key30": "3SKLZZZPk4YHUr48Z7AEA45BxUD1st5Y1SeccgRxZtobv1rn9S8gBtGDCbwQjcmNsDJAy4NiEvvWBQ322JzFQmzK",
  "key31": "4KtgeK4FiJy1BYNHN1N7MRo6mqrgLaLR9vfXwCGukkfKHoHx9oHsPRhXqW9Yk7YU5Q64dWNcDiGn3JgxjdGaC6Wr",
  "key32": "5Nbe6tPR8x5aVp5Ef4JpQPr7sm1Qphb4QJNfZwikgZpRPEPR6si4nDn8UDVn2tmUbLsYrxhxJysrSB4n3a6eJkCj",
  "key33": "41xqfLE3ANN2nXCqAkW22spoRTFemp52YsCXtC2ktsMnPdtFTKrzUSCbnHFfEokh7PSADpCN1Z2MsXAhtD8CkVNv",
  "key34": "5yQ33FGQ2P6Bi9z5hjwvAgAh5LQ1UCwErhKpF8eBnRGmtBRLeCpSoPRGEDVbn2AVCndoee2gs7taV525zDPL89x9",
  "key35": "xMgzxZmAG6Y3b36dNbA48Zpx6EqJoxagtg3UWR4JzVzQQbvP9yecWs2CSq2MzmTWz6aYntWrnQRhPLMAD3HpVLC",
  "key36": "5y9UQfY2t4TrGjhfXnyzTZSU3o7FjLyLFVMtuAB41FqAbJmxW1rfrAmSEuCvTvTkn5JDjxXaWgg7VnkGgCLyRddE",
  "key37": "3FjVC3WEpyKjyacLk9g75R1M25q4DXNndNT72WPuDK6W3LMxBZUZbS941Ee9n7cF2m6K9SbcpMESg9tTq2DkjtF9",
  "key38": "3JCnefPb38D63CwTRwSh7rFpjzNrJGL3vATmDFNDe2Z8AreMp2GLwuoxJrGh9iGcAT129xHmybrmJ8V65MpuCxWx",
  "key39": "3VQpd5efQtAgJvaoRntd3C2roKdbVa1DEdpNzbnVDNxrKBZZuNGrigEhM5cpk57oRB1bPX6cnZZBUgUWgzoBYWPG",
  "key40": "5mrBgZF4eJoxuo1v7dGDEufkV5xRJwSx5oqjzM58YGbjbyivZKE8GFdMeTzD75mdTnLCKtiAu2aXmpzXT7LboRUB"
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
