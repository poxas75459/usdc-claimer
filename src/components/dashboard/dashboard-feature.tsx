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
    "jtGEQTG9CHBVzQ3mdLS5duCdWsbBi4M35ou7o2ZF2WjrdLXYzgsm84yioBNqrNxNMMmhQ6SaVY1rJdtsno4yS2z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zyeEPNayyvxrLMCCwGuGRRnx54VZJSBHzwVYG93gPKhAGxBkM2SMp4fagRLTXPb46DpKyJdVs1qVgw2J2RFdtug",
  "key1": "4hbJDqr7DxPEdJmmNCVn6DbExB7ipCcd59BE3mzwqFtazJ4MAEVCbrfiwESggRor2SwtvNFpCsMC4vTeqvzqzQQ",
  "key2": "643xMr5L4XfS37PxwohaK5Ldt7kFsu3btyQpnkRXqMXdSj8tsbekMzNwT6WLXqTE3qyyu8Ya2fPJFUyGQH8QADuX",
  "key3": "31o1f82jYT9NQjZPAc3aPqms5AMGLeamSvFxQ7fmBjs7BgxXJAqyC4tRu3RYzcrXvurerUg8kfLLLCAkoDhsddG3",
  "key4": "23kBgzSUjoaBBSd1xvCdS6QVuWP9tCKJrdFCmgekYAR3Ah35YCnYrbesXWxLPhfmeeVxReawhYcKUnS1KBN1qUQU",
  "key5": "5A3ddC5tTnwwdpSchj9XhtSef3qZ5HEx4a6cAVbMDxzD3fQQCaWLA74METrYHd8hF8DgjPgithWoBQGxe2nwn7P8",
  "key6": "2RXxTx5BasWD4G9yTB5WoP173q5T2NRa4yutYmaqUZLdtK4sLCbJtp7bUXVZeUyugV1jZ4JH8WYJwxZkyGHqWg2G",
  "key7": "idnVkc16FigmnBodKtfQL1aRAkKG3n2LY5ewPYJhn16hPRCCJx5YgCagsuHgMTyUpDiTpWJPyw1ZAcRcY9tFNpH",
  "key8": "ryRApEzLiHrqBHupb9umt1BJZK2V9q6j6GNGpM8TVcPzAo82tFFvwB3oT65h2Bn5xyQv1UE59FEXHbcoiVQktWL",
  "key9": "BYzWCXA2sRhCxdLpWqzU8d8oux72GjXmLSukGTa2vW7FP5cfp7CEVrpUZx9YGQyDucHWSFbxiws3MQaicD3VmEE",
  "key10": "24U1nPci9bxRaBH4fc3gMzKzYU1WrWDr5octA4AhjWx91iodZ9z1SQVN5UwjzCM3W6BtvKrGams6ZDdm55t25vY9",
  "key11": "4u1wXQTJHSsNonKTmVrAyRNvG3QdbMH1pJNxgCVs4cAsv8zEN9QbFKg1k65f4UCFnAvPQxu359SVDovxMCKjh5KM",
  "key12": "5BzY1Hqy3M7MatcAiJtpbcfCuJdohnzo5WvAXUpGrAt9bvz1mzxFVNVXMMK9SkxQkeN5CerNQHjXhrAmQtMgxxhY",
  "key13": "VytbitprBN1Zmkj1WYosa8JpTZusYTWKi5GLJuNkKmaPWK88LhsnYKzaREG5XRXSC2TnjE4XWYSgAtxxxV9dFur",
  "key14": "54YjPEutRWNerBVgtES5PSLz3ubZf1oeBswKpbbHhH4khezfpTJBeRKD2SiBVYbSw3MffzdsicUrxHoTpEummjQP",
  "key15": "2wAGDv43o1F5bWMYCJPuDBLraWFxr3E4YhH2R545k3U3wsM3ZfxwsjHBRcpDz54PqRANoWcfim7JRkPZ7tY9QUJS",
  "key16": "Rh9ipGKSTMHtu8zWMwfJUHAenNcP16uToARn3qwPqSchtwqE8Hi4FEwbQCZ7Vk7J3TvpnnvsUWxXBsZ2MrFff37",
  "key17": "5p2h4G6D74jWgM96ShGagCut3JCoCpZHw18okcGzqEpKj6SYV5nqmT5qNRV4JkD842feUGTZzuB29B89zKEfVp5J",
  "key18": "4s2Y7E5cr79K7jgrTDVLtFdkLfM2rFMW5Aai55zgntbxhY9GPhe3tDmGuSurk8WdtrnxDGuDU2Gi2MmzpRnhZBfB",
  "key19": "24rbJopTD3dhk76gHEbLM7kW5JfqZ2uvwaDJJhqSx5Z48DThC4m2n7UaMS2d151b6LGXZLHg7qEPCC1bLzWbvaXJ",
  "key20": "4qMhW9fFCwKKNVY4gSygHUj6VA5PdW1UvSjYdE68rmKCSFVRdCbsWWW6KxrDAZEa89c9J91yRsw7MmfRxTvK4uYw",
  "key21": "2ShT26W53NwkJyn9AsDHpDsXwT7LePvw1aNbNYek4qmFMFZmjPs8Qr79PLZwG2XRkz97zKXMkwMpD9k67uiHocSp",
  "key22": "3KLhuhpGbRjLzaZJdELc3S66dPEaXifdsgEv13p2eJfHjA2yKE9tX7ETERtzBrVXu68aTWa6bY9RHywpQev87WWm",
  "key23": "4PTcGMwFjgxWHsuNdqJJxaV3YYp9zPUSQ6mEJRrVBDX643W4vGvDUXFAfF8dLtsgpfQPjRodZjtRBf9X6JDU3DYf",
  "key24": "ui7NUQ5xHtcrovUFqw5Jk7ZzkbeTGwN6EevfgcgTCeTDWRtT6nm1pBoquXWPXxkhW7xZEsc4J8kqDdKJFMjatPV",
  "key25": "3AScygzbnZvPi2SW9b3aukmXvV2Y3iLvE5mxzVbQeB4cAx5pVXgMymSLGNKMJpnt3uFtGQJsa6tzoctEGxckDenV",
  "key26": "2PUasctRF7u2GJutLqUCdL6wdVzgznBScg3hdRGXwYqrYtynV2raio18CixuxfDJfG35aSfRiynqDjeNvs6SLTnL",
  "key27": "3HSn1JHSzAaaZQPUgnTaFheQSKLD9XHUyfwvXQw9BTogYfesvF6YKieBrFFZQboeeUNdRUjuJUDg7gT8sjbMDbe6",
  "key28": "2arAqoxRSQLbz1dNxfXmToevpZttR7d36HwRgipeK9wEFmoRHwS7M3xzy6Hgf1d2dsQbknNizbwjdTpbpCESMac6",
  "key29": "2okx26w3jJ3XzMtMVXTW6wDMrCdQgbNQa1w4BGaGCKK3GvrzdpkPDJe3UYZu4FJXwChpkjPZuPzTrdWctNMCfXxM",
  "key30": "4GaWqmZqxpMHNBbTCF8Vrmmvji2GbtkMSMsxmoZ5E4BTBKe4SQBmESTyVNqC4LaKj9PhhDm7eDvb7YuCVdXJGFQi",
  "key31": "2YQKdhhCB4oWKgMYbLN6Vn21FW9xAQYY8EPCXSdpcQJvVFWmpWAWJwriTfv3YWFj6kXHXJFGhXsLEriYGwbcWTmB",
  "key32": "3cPiYFq7zdfgcASCNZdKFyJGohXbA4VEacwXdvCNY2sp5NyBTsBy5pmr5JfzcG9rB9o7bZDGftTHrE22sVZYNhpZ",
  "key33": "31PXhP2gUNzS8JodzZ6kQbwG7oUgeBpqXbLinxfEx2DBSrqVfBzftQNJZJt2guDqGMvRiS7J6SyDpLZVgotMFBXp",
  "key34": "wx3WrnTxeEghVQFwhUW493gtdViXBKMpFKGh4azsK3TvHzEWiuZMWFSFXNpvfhCBckPKyKahpB7dfCtXw1yyvtJ",
  "key35": "35RptwPgR9BgsEy6sqTfNfD4vK9MRkkBtehpTjngNiSEgEzcwfC64WSZnCLkpZDJ4BK7Tnag24pHkw5GYBbwA4mH",
  "key36": "5YzdUHqyjcUxmEEDGd8KGJsydJkFW4QVwhdKKA75FuGbLJqV7GzYpSMJvpSZgDa22jUPxkNfCvAzxWqwScm7XxLu",
  "key37": "4bG39xdMLT4nnRFPZaqsSnbKTtQy5snNTCVSAj74CHaFZnTg2QBogqSmLQzkSxNDw9KH1MVQaAFqojGXiEmKg9aP",
  "key38": "2xr8tBsDQEQF1KaaayjMNKzEKrmaMvutJ7qLju5Eo1hq4nszhs3AByfAvhvHhuNQBus8chA6uJRYXH8ooPP15mD5",
  "key39": "4HWGzBXkt4Fa1zPakezGLYGnPyG4qA783WwnxoAAFusY638ZW7tMNGTtff8nMZ1gFFiVg3mBwizFg1yLoyMFmUzJ",
  "key40": "3w9zDFobczXAqFZc4eFrMM7kfE9MUqB7Ed2KF3npxRBwCBpLh4cbVVLEHA1HsM5Ko1xdGj6K8QwAjQJMBixLrxGg",
  "key41": "2CLfiFDD91iTGH7cvicvV9MEEbpbWzaxoMEo6pmGeEWpi1SuyuPL8HY2Sgo2UT5UnmtvZ9WyKDwZiDii5q5VJLcV",
  "key42": "58AA75DFxc4CvfkkAYYYSVo6fZBbSdURVCqJE7oBSuNajFc7BeLmu6v7suSDaXehR8F6ysq3nLP8ctPYF3CRrMZU",
  "key43": "2nAFGgixWrWQ2LwtPKiULrgyujfQ2NiHYRXvKvb9ZdmnULZ8ahEFRh1HgAFCZEzjdefJbxDm7sKkgVZzr92MJozR",
  "key44": "4GbuhCBcpEi55BC39Wb7z1z2kv2wZdN5nXjV5VCdGtDEssNxK5AsDKVqZJZAG5apajtHQpb6GXEDMWsRFgqeuqxH",
  "key45": "3tF3D181NkAQWG2nfiravAGsRFxEdg8f8BfFhVvz9qksTn1vFxX7uDPo5agNKFGwU3CgS4NJLnBRPz1NqYXtSgn9",
  "key46": "2DXK9fxiRQTpt7F6iEsq16bmLowiuUQRyJSsx56SBvhssGop8uTTQfFU9TcGtMDA3dDU564vU1c48UT5B9HbuCbQ",
  "key47": "5EinxeUcLvvVQL68uKUTBeLjvVU5iNBzbF8Xz2udpJ4xx6qYwq8RT9Sp5G8fwwS5RftvkjoPJjzWbNVVJrfDtmxq",
  "key48": "2RwVpbobsqo2MaUFhrTzfDBAbPahx4uEBWgH6cGz7WTeoP3px7TP2EHDkztLBzLg5RPM1sSU26M69mUNNrMCz2ro",
  "key49": "2pAWd126xUfdtNfKZriW5Vgo91mwM9kuTDM2B99HF9qy7vAoCagXP5sB2BSUDQJw5LM3qDV5dBwrJbPmZss8VBJs"
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
