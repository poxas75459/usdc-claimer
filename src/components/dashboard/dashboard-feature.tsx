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
    "2ci6bSMzLtWt2tKZTcNGK9G7obAc3NBFfGx3GNwGkwbJxonjMoYaVc1dWGsYLRa4ea7ff7FKNXfSNXppNQY5bHYF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Hcmyd9Z3PMJNqpAz6ufFCJjPzxrAZTJJQa7fcyZfiegRhwDWQfSeR55ZiJ5QdyGGAcR8xzmicmndjmkeUQdyyGh",
  "key1": "2S98NWdwqYSN8Y4X8TSLuy7JKMchVc18zLPwLFDtRieLRKojpketTksXgasxVYRsXvsS5jm375wXFTrqPKiSuMzq",
  "key2": "YRwf27bWESpmhUhvvaYu1vMFVvd25pmcAKst7wZf9hgueb1aVJGVheLU2628PJwfw1Y7VaHcFevmhYXxuyML21u",
  "key3": "5r7Lm33aRc9YUzdAQRLqqt5675FGDskCrF2e2r4CCiky3iDh4dijKU3BBqAYEQgNuDxQDSAUFc6SbbhzAByBnvP1",
  "key4": "yHxEfCLeeJ5vomTdRWB2zTZwn2dThxnUgcoJrL5RujHqQPqx1ySjCFZTy9MQevvaksq7Ud7tirpyS3npTcfGGyK",
  "key5": "4eCV1jVovC7riUceuu4HGNyyLtuwRVrsdBj7FfPDEN4ijhtNvBd6B81CA7RxPyCyYsDUaCiNKxfDADTzLjv4wCFV",
  "key6": "7mzrW8dwLy8VqGMUDqFeg6Dd3hfKNT5NCe1z3adFxnmLeGwxDuawKxSzRiaeESTUe7L2xxTvM7B9Mpwz13Z2wTP",
  "key7": "3rnRrbSv3k4Bbo2Yp1SppSrWiS7MjpucgAXpLnKHymkbpbC1Cd4kt3G2BASfxENmkTMQpeLXpyxS1UeukRsLccW7",
  "key8": "VyHoCwCYQbWSEYq3Uw1Lcp1pQoe45RxKbEAHdaf7Po2D2XpjAdMSvEfcbn879xYAVeY3Py9Vaef8BuXrzgdzuhF",
  "key9": "3uYxzH1YvE9eEUFegTB79XGzXu7jSNF1mbrAi1SkBrh32vreyBLhNs4pJN2aMo1T7zdAyG9ZAhLKevarD7wPNiMp",
  "key10": "2xmTwLppHiaDYHS8YzgQ33N3PX456eRvc6hykTDArKT1oLR9ZAcBNqw4P5RWsmHQY9J1dZ54gGknU52PEj63g6kg",
  "key11": "2d8b5sstCE9SehVm7w54fmSDcoZUN4bEXrppfzbU8vMiYtV6DT4RXLVAiWmvijHjhpPFf8iiiAARHKbT1cYddodV",
  "key12": "41VoX6q7HyVH3yQw1SPCxmQx1x8FbtVoZL1pkthDE7jJ1b7teTJ73ChqQzt6isYzPZUUcDPFYwJNu6rGUZYCReQD",
  "key13": "4wJY9LPdjox8WCKryNbxja8e2nzoVf9p2hFjspPe3oeZT1cMMgEdn8H5keuaFRUhfmtAhN5bRdojBRU8tvSKeYMu",
  "key14": "S1gERwfwGFeCSGtGzhUptksGvobT8qaAY816AyS4SbN1RjnxBTpuJtHAfVSsYJcBZLJKXN8iB59Rcm391vC7VJ5",
  "key15": "BHz7embZWQqZ5dv2AWmGKGgJfJrM9BfcHD2pcLLXtnW6sE7ZpK7WSPpYSRs9B61zans9gj5XSYdKTJTDMXo83xm",
  "key16": "g7nQCAR9cjdUsCNeSv6Gbrw6giW6xKNvHcBVtdNHxpfW53bMxDv5VV6U9efvCC93AkcPdN8CfTkojK7mrthnMQp",
  "key17": "2xrjB69z1yQyw2ZMPmhziqKmGhSHnjTEzLk7N7Ed6Z2UG6zXDeF4wZgnxzR4HPCdATAf9cAi8ViWNRY87Mt8WYMQ",
  "key18": "3dTuH7hxfYEL2X1idvn9XRuq1XwcGkT3jqdrTmy36NUrJaiEdm99dfqeSP1oCvux9pMaQd33cXebiJ7DkPi7HTUJ",
  "key19": "3jRHzaxS1ZCmioMwzyLzrTT97SB3LTTioJdbGkPQ1Ui7oqWJPuooLcTg2ToiKj974iavLeEBvgtv6SxHz6YAiiNG",
  "key20": "3vBAYV1KNgKYpjfoRbDQKpTGZTFJy1EcUY5FR4TbTKVa78NNhjxHJfR84XtWpKf6pWqb9kmpnPKGsewdsooxQ1oB",
  "key21": "59gFmJYZtBanZrhhyhqzXPkked1JSBoziqZHqNTSGd3uXN5oncwyAy8JKMFPRjV4HyxaagWyzP83Dtb1aBCxCosN",
  "key22": "3qdaosznSWeREVa4HmaCWd4SjkjaXsXKybr8mrrr68pEXg1T8mXSfsuoUAQibZJ9erjdJZuMhgumnqqGDyFQjzUr",
  "key23": "2dt3kqNCWXz9GnDqsZig7FtZM3gdph8NYv28GdQZs3ubktcgdZpexBzUbPh1kGNSLo9sMQYbh6WASsD4UXsxNvYG",
  "key24": "nwo14gWSRP9KqhwAe4Q4KjFSUwuuAZB4iDrFBUWNVQTSSvPuVpyvWFPzfvmFaypoZ2qzaNNAc59fJdR8KDFjcL8",
  "key25": "J9qZ5mqN1LYjPs9ZsaX7JEuTNuNTevjUoyPZyhA4fZUA6WMRUYRDoTJwxBX79hPQghwUgrJNudW6aXSosV3vdeH",
  "key26": "4a1CRPzPQy5pqaysAzJMqUXDB3T1EEaiWSkaCAuTohSmuw1F1mKPsz9n1AuT2gBz43hL2N9DypnmkXNvSTNCgRKK",
  "key27": "4oUEuXVpN2gXYJVRhDSPQ5Cj9yt47KhXixQmbmwTX3h4jnAyPbshSFA3YNo1io2SXHG44FkTSRBtnGjC6BDEhQBj",
  "key28": "128uiGQLBXQEEZZtTnaUjoZG3YtNrFUP8i57sVc5dBLr1GH7eEyjGDReo1692TETT1vnE6U6mZecFoofRHDixJw1",
  "key29": "BLUAMaarD7ALUtAZRXNejpKjCbzAW4bERhyTnuCZKUwd96jenVkSjdivFNx5qNotyZASJJBx2mx2mKP9isj7Dua",
  "key30": "4TgcUDN3nfhBvrgTifDG5nQoE9dmuBynQo44ZQRPD6edEzdFya2pCF1bErSL6YXsqitsGBH2HWS3i6PG3WgUoPB8",
  "key31": "2a6VDb5LeXzz4Nrxkb7BsWudRZcSivypdzBXtBjbyhSoBWV9DzhpDb6sQ7XexQBAzoR9XShrwoRGiVkbFyqJR3Fm",
  "key32": "5LR5qd54fXrvmeiwAfDx2qnXwamPQAh8J5Xq38fgPhPbBxRp9nKd3nN1xAFnTuNhCDYFQyzLcrEoKKj2spVJamLr",
  "key33": "3x2MnDgv7CRWtB6227oNYurhf3dEhMuPmvGGSGRa7KQbuLS6B36H56RiKjCubaQHryZKe5PZUL6XKN94aNJeDiJZ",
  "key34": "5USXZVMAxvBScowPFHLyvFtaPoPLiUtJZLQBdvNG8AdHvGsD545i3ZaxXtVZ7zrzL198mttnqWQpsSJ8eY3sA1a6",
  "key35": "5jPs9qu183aF8y1HTFog2fLgV8YbUQ1ejqCCQE2REckXk2pvK5o7ewyPzUgp1Nx8YC52xgxMCcbvr1TsnS8AUvfS",
  "key36": "5hnaQUeFEKfTnFPTPj4md6pVBogdZNYn3BMWojZb5NmCVGpHARrCVCJaRwSDD57BJuVaWz5cZCwrRUBrDx8vMGyg",
  "key37": "2TcWmML7vyqcRuPfk7WUw3EbyiF7cnZoM4zbQLtQsUqAdWC2iaDyefVmVRNZZFDwfjqwhJ7jc8U3RPiBzXNyThNV",
  "key38": "28EwLzuRTgDZsijBLMPK1MdY3XBPyLDFCBLujoLYvftHGbMmhU4xANrZcwcu2biiQDxeqE9Bmwpkenzj6f8gAHed",
  "key39": "2ZPLLdubLNajhybCcwVJK6nqWipEEGuYAUctDpBCbK5f3grCHbuKjYbGPHj47m3zbDsHP77gK1cqpaAmvFcDvEqL"
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
