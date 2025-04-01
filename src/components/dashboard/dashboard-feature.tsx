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
    "3fa6N6nWHJnNCCPpXSDQvG2YvifVCfpSsB9gG8FWHFPGoHX1TYRdYUb795jx3udu5cqjGs7keDe4ZFcg2A2Lfkkq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "89f5xjCNPVY6NK4xD8YDKqAr2XYiUPYPm1FChRw2L1VSNuzxhXR1J1kZyjmaksLSGcLF2n84GPNPNhMnVvZ14Z9",
  "key1": "2zYo3WobpqntFGmm4wP8sK4uQMpQgT8GQziAiaSBX5mhciCcY8rUQgcvYP1oVLGtVeGcGg1TVtzLk6PTMhpWCDqQ",
  "key2": "59SHGu3oVqE921k5JPXctFceKkKYUtfqfCJDEcbprZnEMmWmCfQc3JeLH6gizq8QYs7r764pEqUk1SGbA7yZhLi5",
  "key3": "3xufK54fmD4WD8UnQAfoaWEmW4bNq64Xrea6zRD7VNUrkXXesNz7W9dZvRhjkzc2Rp43GGegSVoDVUR81yuLB4nA",
  "key4": "da3aM3psCsdjB8HiL3wiSxtYTJsFga1gBnM3S6EengZoG5nxkxqCTJPd2o1YgrpAFiFvrJEsFbmDqNDJGrvjx5R",
  "key5": "2x5F5HYB8gY37nSABPqSnsAh4BUUqAMa3xai53sLDmFcWtbKAfFoL4z85UkdCT8wkMuxSvM4qxbBaehagcB54A5K",
  "key6": "5MeyPfonQkPGP4apJRf1VaRSzd32PyfM1mNDkQxPb8xP5axxP5hnKiV2BHi3MUwts1Xb5BYQPDmh4sex4iqLZTCC",
  "key7": "2it6ipGDHjAuwDA8Sin38YoV9St3it7rEihB7EYkqDP9ELqZepEgZJLPjMeFJ9EqTL5XD3xmn1bzMXSD43CcL4Ri",
  "key8": "27xBTNNWy5b9A3saBYNCkrMAVBxu9EQ77z8Es65bz2rBnBoiApEhP967fYyzUS3jYz2iX4fyQyZgZFCuaENorXRh",
  "key9": "4Bvxo4Nsd28jGGZNDjqTuCmGSSoovt69j4xncnmEgwK9RGkXBZ98yYExPvwWQXyyJVb2fJf326D9bPtsj6AKcPUg",
  "key10": "3fz9hMjJBdPTGaFmxEZTaPcwwp5yVNXLu3F5mTazzTmd6A2ymb9skNfFP3VUKu7GPmGYVXaTrMXHobJoJznRs8QM",
  "key11": "2iLWndyoxTtUYTmBz2oyEpZqKsmj3JxmdDdAT5x3c2sFjdZER1bC4ooAEVxh3XGZ9K4txvXpJNTLazqrh8n35FNw",
  "key12": "2kcB4c8GmLCpSKJxkdcUt96ynSGr5HzJho3GrhQ6p8pMgtaC4f5642mDGFLXCQjZ7PKDX56fikGy3xqnHTf9uFzg",
  "key13": "3HeC3k62k8GZhbMSVyfYwqCTb81k9A1pcMty8y23JHKy3cFCQM15UsdUcA5gWAkKutr9ynKa8Xeo8jWAKjJiFsoT",
  "key14": "2z2W7z1tpBqG9GerjugFrqGZPY2qKWF7qWL3Rb6K2gRFadnnJeVKW2vWucVpHfeupUXCFEfuV2QoXvaSWS4iYCfx",
  "key15": "3LqqCcPu2D46Pc7e3BmW7mjcWHUb4d7bx1o3A6QBuy5bRsaEsTBxZDXi2Xk5BZcMkoS6yi6yJU1JUZHUXfKEZo2",
  "key16": "4eBL5hdnGgFNKiKmnMfAGyi7hksnuiqE9jfcmYMT8JEiGSrBFb65e3ENpLKzonYN4JBv1rPobda1CmDoe5PyhgdD",
  "key17": "4b3VbjBGRDoa3acGRndEEvRCWdXHBSYEstiZy7BDvdJjeRgEa2YN5zQy32MZXrJqUQBgNa2m4LQDzJBAFjxKjp2E",
  "key18": "HV2GGmnvHXJsxqxeN67raRkY636qMP2MGYcz6cP7qQDEYPpttzXVrJM42qWy4yC3yDKXkaCEmFMREvPkDYZtW3a",
  "key19": "4TXVgFWCA5iCbFpsaM25ZrjnEpwnmJtSLunLQYcJzLLR3737k5PsEBaNkAL2FkK1JmspHmF2NH72jF22jU3VQXAx",
  "key20": "3oLXe49y88fYsHUMcUtJNf5WgvV6QvboGueEow7sg9GQWD7gkfYBKNqenmaus9h8w7d7rCa8cdTkeWjrh3fnPKeq",
  "key21": "5GwLxgCv6KwMcB2qa7K2R65LwDRQHoBm2eJpvPZ7ofwaru8xsXxGKQpw2mdqSppska8gyQW6avZDdTfZ3RGDkuxp",
  "key22": "qejENP9SSuLjfQQyn2ihtFKxa6LziJaqhFh9TsZ6gjezAAyY4Ex5ZSftBpKstvGrp6y6FeZFjXiaoa4vfzbU82L",
  "key23": "5esN5pudZJyytnHptm5r4fu3kDedCXBJRt6cTyTYkTrkAfyuFK5GJtfzFfMQv1C1jzZN4XALEVobXHorZFHoNgQm",
  "key24": "UQqzCJ6AgqwXGN2CbtmnBLk4sQE2dbYBYLGNbEE9xqtV99yw9BXXUUopvn1eAHwQGmrEUsChHiJyHPKCxLbLfij",
  "key25": "4dJriLfffPugoQf9PPxTo1MfzCHtKjLzy8fvrhEqKYuvWQMxYkzJpsiTyhTaUE9GBXBp8ZsQK2NqsP9V5Mx8Q1o1",
  "key26": "R2sNvqKXKpZMoThPt7EM8KiWp3aQZpjPbLqb91y3WUSGFW6iHbHC14LWLnJZg78Bj9zPPgdfx8kWJpUyLDWKTJp",
  "key27": "vrHoFMNgyvMZ4R3UT7nTNyXQEBrMdyxryCcD2qzyyn5wpAuUsLg3HvyiHBVRU5BSGDzGcYJ4bduQxu1uYfnkk5N",
  "key28": "4M8ARzsHbeoN1mLdt8ydUezGm31R8g9eutW3cxpWPr4PmZUzZubbEnCck84zHafbcNQbc3vXgsfzNUy95U7uYUfd",
  "key29": "7jVGPzMKoF8wFUK5WAPw42uTNBeJ7mwdMuqjvsxZEhcvoMc2fYw5HtXC6LZCgSgWrvywr4C45WABNqdx3JZBN7K",
  "key30": "2S9h2ac1Ga3RXjoBpgfH88eo3j6a8g4oYpUD2vRfoaJojaLyebqy1zDzi9hqQxqAzcDoqKBr4gh834gdjDVTFhkU",
  "key31": "2fPgGYvuARMbTyAgpQMDy8sC1qbFZv6vYDCG6YvGUdRA9L7LvY7vfatjk9Gh39Bxbwt5jSzttuKrZvAWUWj4uhPB",
  "key32": "xiEMWvBJttRahZ7AMTVZ5FMTgkuepst8MpJzQRqRF5bMRFQWXoETxC3STTPHiFNAjfu4XxF6JRw2Bv8ZjmAF7zD",
  "key33": "3n5roMp3qMvYkBZdJG8fXeR5zaAabFy652nGPrM3YvbfS72xS2rWm2fD3AtQCCJiUPDfPVsKGs2azwz7VLuFMmEJ",
  "key34": "25sqaLTRGEVkogKDAFMU1eEMk3M1owdpynKXhKqPgvWndKWv3cr1DQ9wyMfc8By5VPFcjfNgBtFLom32QTapJZe4",
  "key35": "5MRfuDocbdsACSkLaLKmmMabW1eHQM3iGjyLSRJynxH7Weq5cXm3oypbdwHJT27YmCd5DuMtNUe9NGdeWjZGRRKy",
  "key36": "GQEtt2ZobHpErAodAms9iaA2eqtgXydYnSkyHLj4qVoB2JRPEFTZE9yw98FoGhLeCLA6dsWDbsUgSHCRtDxQr1A",
  "key37": "66cVeM97GtAKeCSnoNqEmsckmMaHzf2FttACTtP67yJUvxmhrDUZjCEbPSoU5xNyxQQxCsy5ZFnWTzffPwuQqF6Y",
  "key38": "2E7qogzaPBbxGY7xxxx55JDUQoHdzd6dqDYprx5RcvdC7H6JxzfNqxnC1vzvgzZCwBUpLqeb4RoyKBXzCncXPCQ8",
  "key39": "61n1266vzGuRdbL2jz5Z5UTtVdKCFY2HTj1n4Rywe3ZLzxPnJLdoLCkoUZHQxJn3CTWhj1jEN6hPhKQF1G1VRy1j",
  "key40": "5Xokp77hzWdPkkyWnub8Y1y7MVqFGBwxpBnv7WC678uzoVaH2mRo2Xvq4o1BBq9ZTpZFeoj8kAkmsk1JMnAMaEsW"
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
