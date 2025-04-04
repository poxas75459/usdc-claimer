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
    "4LeZZZAr5sYYS1JWyymEx9UTogD9mwAbZXJ6CyyaRex3ZaPNWb1MzedyR6Sq4NFmGdopLLfKrkMPgSvXrXx9fyDf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45vRNpvnhrSt5xTMM1NGb9qeM3JTMtaTAWrbZTm61YxacMVi6NyPRFLZSBGFhCrZLnMpHZvQvzX8KJeEvGWsk39t",
  "key1": "2X8emDebp5qzZJeAqAbm1FyhMbv1PYajRSgqQwGsqPCrDyT6fcU2ppTCkPGudNo4cP1dbS6u1GcRE1ZgPAd3zdBQ",
  "key2": "4YQkPJYh5ztdt1A6xswaKMFocudz5YRrzJrPesjxK7QztKXC4iiNh2WLVk1Eh9EKZWgYsu9pZRUGiqbw8c8kNuYJ",
  "key3": "4JQNycYq1oobzkHLPKTBFejyveEVb7rUc3sM8teZajJhmAUiqikfpTEBSgHQrQ9By3S5VwuhhyEkFeLJdnxhEY8b",
  "key4": "7hJZyUwcoCC8t6xDDzNqsM1fMS22SJEzkwVTgv11kqX24L55xrD7eUhXhNY6Lkd7vjN1vzB8n7G9jtQafXJWxsB",
  "key5": "3d78HuGYmST9AW7C5vTpqg6TsfAunKQSZ2HCsYXWQBVWbBPR4HbjUXnJviN8nc83AG3wDtCwaLPbJwyshcazfJvv",
  "key6": "k9DHXjTXZdeyuirupPQHBSVGtR4a4tdYmKDWhjAQ5ivXr541xabky7oNwBFgsMWC6q2s4o43rCsbiYy4rTgA9ko",
  "key7": "5EkRYSZrUiWsyDxDC2sqThEGcdiTAoJtnvdSD3SqyLAqn8y9gvNCujKQYM7jmEiATFqoBNH2CRgFXbLe22af64xb",
  "key8": "4EVLdbWwGNJfXBZ2sKic3nvjmXjFxoXaMzkPWZyg6L4LeUSEQWEPMZn6borSWADWk8tfPrYUzTuS49WGN9N4FHBK",
  "key9": "4BxhTNZ8J6iu8gLAPPDR59ouv4fmhiMDq4uzcToTmbRoF8BvjyvRZNeiVURZgTCjyk3m9G22nUYCTWdzdgL1bp59",
  "key10": "3bU3kZMyZh9fQBvojtELF6Ck3VxLZaqeLvXvRw8DacMqUvts4JCqiBGdqYrRHUEdYUz2QG6dpbNov8Y9dRmqHkNw",
  "key11": "2Yk3ESawcQUe6w6RchuYsZ97JrBxW65dXRA9fuLXmvkTsneGH7YreqyPJ8EqPy2z1UZSf8WdTSdH51aDjzw2R24h",
  "key12": "4WHWG9MewHhKQq1wCfHEvZo4kkqyBwCb2xxjjjA7xdBmfKCuHck8waCXg6Qpw4nSTuV8WFkxgZLTQdnhRKZZ8eH3",
  "key13": "3HnRxGBFCJjFAGJhp9yggHExUhiAPnbDRrU1vE66JfKWahJaFWi6nR1ZieFChBKXoQQzGpdyRPv5eakDex1bdGZn",
  "key14": "49cqQMDV6icvMU5ncj9KS3dpMCvUgc3tcumNXrp75FftJv3Zb43sEHQu1m7fkeAcP5jUKXoUE9Kp4eUUctSrb1f2",
  "key15": "2YuFHBFuvqVUHBiYEbCJ2zH1wb2HKqxiBKEcsUT3fVQChwPSPH24kysa2RdyCHL5XxUe35Y3Qf42f43EP3ryDLFW",
  "key16": "4n9JGddGChnBGQu65fKSP7RJjNQ5UN9JSXUNsHFfe8EJMrmjr8JxJutiKrkehLzhaUVn35bAM97d4gJ4rXuthkvg",
  "key17": "mQxcxkFQPePbdWBC7Rxt1nBXVa493QqbTpTnJ1NhYTiTNtp8gwTgHeinqDF14mjy1xApJk54vgt8R6Dx1itRxwv",
  "key18": "5ojtDVZjfMmrjt59X3EMNznnAefpAbbV2QGA3dQksiffywZAyjfz7xuGMezfpH5CusepEtugcn4FG9XB7cNdM2Mj",
  "key19": "5Ve3z6RueMvTx5rqmrmrQNgmfBd39zWHP7cKiGvJn2iFwRxBfkYV7AmVE483o8wJcKuv9tNJ8CqmPuXs6nECbmAD",
  "key20": "aG3GhN5U4hREFCKfriNfySd9RKrfoQaB4md7xkMP2dYUVDwPZEixoDUeUxT8wxyYZuwuFgFgR7wxAqmQjoLorXZ",
  "key21": "3qgUXhYDAykheHopTAn1MrBP4kH7BiKujSg8iE4zdSk3j7yn8pmU1UXnonmGPyjJ9wCsCCbmTnARg3tyCCPHsTnm",
  "key22": "4TbjKbaudVgmdrxz9dVqgrKRPRHc5mnuBV5ecs7KU9hVGw3bfVhzZE3ydRuHFwrt5rRV7sfG23xq2u1kt8D6dePF",
  "key23": "5gGU2saReqkzNcH1yAGiZjG1Ww8JHZkXnFbLU1mQ9mTydVUTDo4JuSRTJ1r1nvkeyerEK5xfkTbRd76v5s3oC76x",
  "key24": "36aKEzJ7vEt2D19qJhQEazKx7WRMrfxxhFbU6t4RzNM92bWHKBReCMsmKKmtPtW2JavFmetnYPhAtPbY9Es4QrR2",
  "key25": "2zZVs8YEcrzicd6ahp2fiz5SWDkc8xLqqvUa5ASrQYw6Kv1zFg9kyKvxurFKpWPXsSyzE4dkRxsqsnY2fnb61E6x",
  "key26": "59C3SWDASNcGJWkQNem3RzMw5HeSP48B5U5xjWEnfJXhcvtNcjLQ5Dwoakp4HQRPpmqgDSPvsCSaVMm3R1Dhhzno",
  "key27": "3jUyFjejtaBwBCimakxStSrfqhruqShVGSgwgTLZfSZ5MCmER9VpFo1VGJM53T6DcELr9NdUP1nXNAxpmhKqf2XK",
  "key28": "27Q76QnRmTFttgqycwd3wbtb8AeiPSUK314hVPHRhsPupnkRiRTQer66F41sTWyBS4ky76pHCg3dBn5Ydf9pjBCh",
  "key29": "wRBHAwEH7tiEhPFBLuaRcx4Z3JCgsktxX2rqMJZfZ2qmCDcCgb5RcL9a4DmmtHPxZiW9Bf1RP21dT1hE2d47RPu",
  "key30": "tv3rcHMpywpXfba82Cgw62DLVFnFaMtwQYk6G7ssaWHpb61fRFyqzE9BJrpVFNWn8hZLcyFF6mNHSEpJCjt7usM",
  "key31": "3qun3NjiU4U6YAKtiJQSGkum5VP87mqxsmBU567HvjUxmEtdq5ZBEHy5VqeksoPwzo3pE2xf93VvjHF4Yh6eabTK",
  "key32": "4yCW8wW9jwTfzpK1Ga6CyG1dCDg6HfywdqnQ1f2KtGHmPZCBkzaZmYwJnY1mYmNPj85b7B9W5sSUbF4q5mdyJtpa",
  "key33": "2yB2y4SbEYQ7GWb7rR71HP8cAJhoNdgeY8sCwgn31J1zxx4ji5x8WGvtEaXuChSdMXMt9TwBbgRLWQ6Z6mT6Lct8",
  "key34": "2CJ3SUSZuxhesxLtb4nZyJDNpxCNYDWur8KLaASSQMzNdNWuTkPaRDtsRxiNxfcxgvdVtfxzAQPnowEByRiVJ8Rr",
  "key35": "5kr1LmMWTfzfWuuiVam2PHbAQ5XC821qTnG2DSxXkoen9ynfQeX68jfw77sUCHNPkXrGS3QMau8UMekb4qSwgQRt",
  "key36": "4m8AjSyJ3ySReTinLxMLshknbyPKGTryzbHwi2ow14C78scL46bzmapq21RaNUNaiffD1j3XooZJ1LLx1to2jSM5",
  "key37": "2XynPcDfvbXVAnuTHiF6WJfLNYtasXK6eomLNAUGQ1DA75LfvmfQzMiyhZBgvjvMMtbRu8YZEQWGnvRRnUT7FnQw",
  "key38": "oXvUsXFkB9bp15Q4zAJMBZBkH4k2rNbnJ325kR6VZSzqVygGCBxSjfThEdwF1ysffQ8YDbhzXtvT8k61VVLX8v8",
  "key39": "3kMCK6NCECsqoegmRhbakC5LA9vnDua5LEHr9qpgczUTipCQ4dYf6EwTEf7sjhzndtNQh3DBpFPJAy8vxVbVqg7G",
  "key40": "3GWBUxPptU42TKThB9DsvuCKRixdpj4ApYUMMdV8rpoCgypM2cxmKfqyaarmSkvrqsRNx3SMLh5aWdo8mtz7SpZ6",
  "key41": "621f3Asm5Ht2DysK8sDyWw3zdtLnfWcx45mX93qocmk8curg1ZfNd6Zb54wLShXdWTmnZUGp5APotzNtXUi1hqhu",
  "key42": "4aFPpmoYvMvDLa4JToRdzj3M1vxizJH4LS1i8EajieWv5XrSaJA66oQ6d74i5obyVoZFqZCNCN4CWePS1Et11jGk"
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
