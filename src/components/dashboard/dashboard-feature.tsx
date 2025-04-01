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
    "3DSJspn6yYWzr9uB29jpvDiSB4beTjhP5NBRbP2rqZUGurwRq4HA2CuULcTfYaFmY7tezdtTeenCkVvaFqk6pNF8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "isPa74yr7jLaHDvTof2g8YVcNabgwHap23w1vXVdzxZ6vEgxJ7PkwJqSqS2EQHi17wchxRphj2hwsJRG8DXVPKe",
  "key1": "4jZ844VTaKmPWFz7wJn4JDkByR2DZc4iP4z5WmZjVui7Q6YdMf7UqeYy8uKCM3Z3TRbJ48KXQPQw7UQsM921fGjS",
  "key2": "321mqwgayrJnrGFew5F78RjnaCiHc97Xo6dqhXnUEN7qe6EPWpYaiy6ufpjCwrqAh29p6YEoow17Qv2vzKe3G27q",
  "key3": "2D96qzGqEnQVJGcKZC52BTzdYKiYG5CEYStJerX42itFHWexdib3gHnFUBHnynpuBeBJcUxQC1GMBNB7vGh6gwts",
  "key4": "3kvA2NA8MjY4KUmVaDzv8xsFSsPYvMomoZU86zFFzcz2Mq3on1jtjxSoH8DTn1ZpcBYQLNSYjXaBqFfDfDqNRYy8",
  "key5": "5DQ8ZFLE9ZY8GJYbGLwcVSLnRvE5PgcQMwyEyK9L5idZkymmPR9Nqc4yxDqnFrbPxhGeH7p24uavF48DoLBFncq4",
  "key6": "2L6PXV1djHmxdgTWuQDeqdNB53dRpZwZM24psXNTRCs364hVrTHB8JgdHycghxxXa3joF1sqvNsoNwqG7paFSZhS",
  "key7": "5z7KQPi5a5rH3GjMx9zmQzDviUbuzTnbmo4MiFog8rJU88ns5UDgu57UyKnY1jMroHZzZ78MczR2oYiUGV91KiNd",
  "key8": "5YyjpaZTVqPADxmr61QEvyAU6mPo2BaEDKzg4kvVDTkPh8XR29MQNYnjwz5PE8ddUyGVfubjDaBuxZp7VhyYar5A",
  "key9": "3QCwxYpg1gHmuKZowRxGZAgYKSfnBcKDU5tLiE4EuGhaAXcdxmjSEFELpYrvMWuvfFGUZqvXyyrNvQRm2h4otgeH",
  "key10": "4BvvnNVgG77MSSnoeABN5B5XWLUc4VPpZ4HaYceWZE3Ht954BZoARuK7NnkF583xXTfwb1Ef5inWDKErjvn4N9Ci",
  "key11": "4MbTzvMoPLKfViBf7WboZGEqxHuLiWb5E3jWkKRmojFt2DxcxPE9141MNgw3e4KRPKXZy7F6xf9TMLGRK3MJm9oK",
  "key12": "5drGMztwdnHbaX3KDiR8EqyoiVVLnJ8ympr92dZBHrfyTEJ4mhdNhAzGsVGW8QtX6aWwoSv2JGYUE4imoUEYhiMd",
  "key13": "TGNgW6zvTeFh5hWN1mYM4bwaFN4mhnFJZc38R62LB77EuK8BGdvQxsx83DRMYWyW43FtDWZee8omAs8mXssgn16",
  "key14": "2Qrw6kSsTNpuUJBxwV3BbBmNjLQxJwd23y8B6cedFQtsjceiEQQRDDYvCSVuD3H3FxorZFj7KeFMs2z4XsEJ4hZn",
  "key15": "bMGRPXcDmgXuvkQfSrBvS3Em9LxaZdxFYEDHDxFAJagwDZ9HZ1G8YW79iX6eaunQnC4qJgGDQRpbYs8pLhr4Shj",
  "key16": "3167vCaNJ7V9UswUVCThpaKVpBuC9ip2AkfDDWAXeaJMC6aR8PFWMvyyW4CwQssperVPYSRrM7kBkJPRJPaDs1fZ",
  "key17": "bisKnNopxFPA4f2SPGjKGf1CZChuNUYsMBCdnxYUT8n6yYHZpbLwyMUTG3hBmGNfmQazQ5XVvNw7TUkiedcgvHE",
  "key18": "4NtBjCofVBCikYFg8pT1f5jVQSBsVKaTcrVd3H3mf6BPFsznst1XUfpr3ru4MeT6Cm1nHFWXrSFBBNBCRiv6Yiud",
  "key19": "5NaR742JxYQ5tXbCUqVcZiv7s4Chmtt8Bodit4xfMX5VCkGw2zi46MVy2MnSjhKFZn1msZBxzDBWhh3aoUB1eELj",
  "key20": "jTGRLeHHtSsxsVzNQyVQ3xWsxf3TndRMFRd1zKCixMxAgWiJSaMb5Y65PWcyYPQ85dgJ9oLUJtCcRJW9QALzvbs",
  "key21": "2ECxnNHrpJP2MCQZmXz3apphtZ9oZVprNQ3eegTtNxdQzcgQbTLSyGxdUcWacycbJGKnMNL59TZzTTUtif4N24Kt",
  "key22": "4JoYRLXgYkwnPSiYdCNtqhf1QzjVh2BCwZQgYVdhSCrefzNmCzVyHQxTtixndgJLPC18w2PhHHcd1UMpHDtGPu9t",
  "key23": "128k6WDmZY4x63oqax9DDsxD52YHxnCdL2FuKdXrEyKvm5jBjjVNdnTgzwrr3S7q3gNUyCymYjxWP1vXJdxJxDC1",
  "key24": "4RmvLMrCyvBrW4tJ3y6dx8vEpFkP2p7xpbq1idEhRSKBQfmKJgvYmNr46GAyXVmtxJ72jpkxJZSA3bC5ostJDrHK",
  "key25": "5mxegVUHcgbJ9WVLs4ackxenjeoPcfXDBAUHALbnSU5gjxfds1a4J8hx4aYcaVgvHD7eVC3kH7kJiNrgfUeuMk1L",
  "key26": "gkgKe3B451zCpcWDX2dMuNfUohGyyeiM7PcQzgPdgpJDjx483Coo5ndweZZBdmKjWCmNCxX18E8E718Zmya5YyX",
  "key27": "4n8W4Fkwdvh18tE1b2y1LpbbNx4x8jeVVyepn9N4e7RnmEZ7L19Pb4XmVPV2nmf3TpxkiqJertmroKKPnPBfGZpV",
  "key28": "23qfshYzz4CpT4REBomUotvBcr7CYwmgCJRJEaW4QJ4UzqA2L62uNH6mCB6Z5YoUJwJU2dBpGWTLjh72Sk727mCR",
  "key29": "1oC3qfEtcafNEuF29xP5M56d5Sc8qspnH7ziqWUhMGiyMetKUNnK5tUWjPRswbtcMNPqgSwrwehGudTvP49dEB1",
  "key30": "3zD2NUuMYM7QUJYfkGDiCGrwPi4VNUNTWxx85mdXygCjfAgvtaGrEujrxtcbqSgsacTUiNZoK9d7qBuGVDMCjED6",
  "key31": "61BcyAUwKy761E1pAfArxwrJ1WhyKXncxbxKifY4HrazF1ccnvLuMsEXcCB8C3Ufd6E3ryafsSEjXUnwYjEp6Mem",
  "key32": "2SUhd7zT5h1B4B8J6SbfqEXg7hFwHLmVtYDX61agwRzh4Zt8inz6wMZtMC18KD5p9RxAH8YydVDbGqSbiUJr1iEh",
  "key33": "382cWArRXq8ZQ9W3njixRpn2WA3pfqTPeyd4ziLqfpDFLQ78QbjaQrTy4FEtPG6bAbSGkB9CBrzcBK5JTgMH9NXB",
  "key34": "2TPRCjEcYL2i8BJUcrRZyiE7TFeBYjz3sJ55Bc1zAeoRt8Dv4FN8mVo76Xbp3kP37tR7Pzxw8xENA7xhjq2ok34y",
  "key35": "ADfD5TfxAqeHZrHYLmhe6KoVxrAYJWomQmScgUppvvdsW81u1d4DV1TvazMpqPrtnjf1Rx8sp1hmDCbrbPTP3X1",
  "key36": "4hvx1rNAcjh2kr3ozgxXA4FQqPdPZVkCzkzd8gqvY7EEqqLk616QBDY2hW7j6YfSJnTVsKxm2AxyR8qFvk6hZZba",
  "key37": "2t3LcJV5aBZz1MjLGmnYWqmxg4YHTeDitmUhRmrhYaqNbjwcixSddh3duzpu9Ak631jwk5YFYnPVACsFjCoFsSNi",
  "key38": "5REPtXjbPS1gZTXoAneFcjVLtundiQQvVAsTpq8StkeoSgLpGVtE9S4pQ6N1DT9nWZwQJttuztD5QNpKUsCmU2Ug",
  "key39": "5f9xVoeAVzkm5Xur3FVqC5RYhsnyQzyE2YhnPq3FifvDoeiSr7qCN5U8pVSVKQwpLutSQEBJoUaHgtQyq7xAkDYK",
  "key40": "3nNDyuAxmuh8vSZG6RbJeegFGWaykgpA8LHdgfxHKCPjinznfppbL1mHJug1teGknUX15r9rQo2NBvsYNRPAZ7g8",
  "key41": "5BEnMJb642LE6R6axXuuCjWkkSxajuhk8uyrFtuNEXzFo5SohAimWy943esee6694jHHtymCiVwfGbRk63APwAJa",
  "key42": "5vXgWS1LLNWMLvaRAVjnQ8ZprUW12KqfuTaEbxr1wMwAWkvebBkGs5zsMp4otsucxzoDrq3XRemEsThbLaCkuEJW",
  "key43": "5nvPZhmhjahAmbXnojmmexSwmN9LNcXZQHuxhdGRHuQLAvZpnxyNVnraq2HCW3iB4e2iB8WVtPko22Cwm1pUudtr",
  "key44": "2jzNezjG7gyFaTg5g7EMRN8or6WnK8YFCcCRxemuqgBRsuivXaG9MYYJ2mwncErVv46bPks7ffrLfDaVzRXJZLXR",
  "key45": "4cEGAC1WWVJQPuvBStCkzCpkjAUNGU3K6XXSz2gfzF9TWxf9XhRRrvQqsUU1CTSi7QpFt48LHDJ4d28mMCgN1KEa",
  "key46": "3MUH5Ge6gHvmDM9fH1k2crfuFbEno9tkwaQtmDEXpYdbm3Gr5yFb3MsAwbUBkS4kcvgAa8estnzndLccziS4A1Xs"
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
