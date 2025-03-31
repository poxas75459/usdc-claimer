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
    "4RSJXx2ZXLGEADKReuha88uZojHhqteScgWK4FrPXLKRQMdxNTNkkUAhE8UkMr23KuCtnbx5phUwecSWw3nh2pEb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1PugGwdcLUycsPFusRTXdZeFsSnA6WgPPoA6zBXwEqL28LHdkLkWGAu529mC69qWmFiKAANzm7fnuR5wXvY27Zm",
  "key1": "2PbjcFqL9fMv8Lq6UeeGAfaWSuaUQ3sHZx4QXUueE4htfzNN46jogTDsQDTSrZwpmFaE1Lw9UnfLTJWfb2bZ2cNL",
  "key2": "BUMBTVMBtAxBpWeLreQUmxkYKmjxLf6WRZXJ14tMDvBKoqLj2g4BZ3Hcsn5d3htjzuh2qRdU5CxopNPW97NAVrE",
  "key3": "2KNnPyEddnViFyETr5nUXcPQRxKURjZz6i9WsamUMRYdFd6PbLcET4NToPRVuJmA8pCNF4Sek31Pzs7qDKv4mPG9",
  "key4": "3jHX3KegZs2FTVXanyhBsL9GMaBDkHJqF2NKYuueUCLyvFnw6NHNwuC1HPWBBDinY8DPCN5BL3C3tBpt14WSb8Js",
  "key5": "4rW2WPB4LQDHjNaHcLQXdWe6cTNjSXA766R5G1YmEtmqiJ9C5Xg194qWwJExqN6rnjcJ8KuFY6u9bsiq4yWiABet",
  "key6": "SqZcnkwyU3sNAeHYFZ3Uf6QrGNKerQMY6XdVpWQSYHSj1594YQGLym5ui9xyP8pzpVjBqnAoAS7ZJgu1Eh2doWJ",
  "key7": "52rJWkXoMpVxxyLxgRJ41H4DuNNYmeYuF2HRXmUPSd3zkg4Eu8w6W3jEau8DU197oibS1GVyySFfcTJ8Rj3NDwAj",
  "key8": "5QDdULKj8L1BJxzYEh555r4az5s77c9QexvNRwd21Wg7x6E8m5QbVZh6fcpT4BknfzgsWTid7h39E7HUrBMAQULH",
  "key9": "3duriJsUR89L8zk8s8q5EfcPyhFfzWAaFLWVdNERvJBHLAoUkDGrL4axEK7ug5NEi3wpGMzNhGuEgs2NG1M2rNKw",
  "key10": "5Tfj1kzWGKj8mDGrZg4zZEMPVvqePsYvsQTdTVseym5E89iDuC9PwHCo2WBLjqNkDdChWdkwRQtBWNngWrFX63jk",
  "key11": "3M4UU5FPRuUs25smZ2UfVhxrPFLgHH6eWBbT2agG7RLwG9jX6S4i9w4Vq3Ac1MVgE56pcSew24QwzzGMGPCUNGAc",
  "key12": "4LjxMCiuYHDNmSgAKYSEw3cZc3Wo5DM6cwnz5zm9tg1YsHaij7BetqMgU4FuVPY7VysYoASJTFpH1qGRzs9dSYHo",
  "key13": "3U8a8xZYnfiAzCaCmsDNwJoPrirZ2Foc8CG2Dc2ro3R2p1VJtBmXVrsFFGFefyyZJEv4i3KRtm6FNK2AERXVYmr6",
  "key14": "DYwfaCfZ1yWVouvpfpA7kW6hhsCYbbHZ2TnL6LVN7AiUtZjEmyTakueanpsuYsABmC22P19YCgR4XRh1hfNpVkk",
  "key15": "3TRhjA77QSPLAW11LpJEmRQsW2NFG2kajPpZEBgbVaSBFZvomBMsbUR5j5LdsmkDH4awCsG8KDWrT9G6kMwqTCyY",
  "key16": "3qhJq2E47QHRzSNyssL9fi342gX8mocJLwxXhfJ3GEgTTrHAyWWFey3nNDDSdphofmSy9iYv19k1uAP3N5QiRjzc",
  "key17": "2dA1LgyiVEZ1A4PLpiUF1WMu6xegV2Ct1xFJVbFRffxpiAgSQGKPaxvYvLUHbhMxnoUpxnTjrL9apMbAnRYnpwtA",
  "key18": "BvNcfndW5dGxGrEDcr38FzGrc7kNpxZUfxNNKqSfLAwhUYriQArPHAQAYSnF92VMbRtqRSSPgibh5Qx4WF9628o",
  "key19": "3CwinKKfUM3zzC4i5yqAFCxozpoeuZ5R8Qcj1HrZkCLcRp8uWTpwoP8JRfHJaVVhHRGqDNDAPWoC6SGsbHQvthsQ",
  "key20": "dRxKShiuCVcdNCwBG39fFSnV1bDga69UMryDXVXvKbysPhvht5M1jpRZ7G9n541wLe2957qbJ8P817hG8BLvMCv",
  "key21": "3S5GhTW6oZDxrSS8uZAGK9npAvF4nXUYNKSsVnSPaMHG4sucDDdtXfMYkptzCdAiwa7AJ8Fyf7oxT21QDSKDBSrb",
  "key22": "4UhiWZTHef7Vyijptd8m1s54gRzH7ByNxcvgCuosVWPESrqxpYaAuVtyozPQzjTroe6CqAxTea74pwTCGZmmjMZB",
  "key23": "oNFp6iAVL7uHaBsBXdB5hFbkcPH4JfZDedSukQa2nnvNUZ5gs4C89c9y7wa51FwRSWSKcmCsCHUvJE83rmHHYwG",
  "key24": "4VHdAonsZ3fQ5Cku5wt2iJdEugrcGJnpLPJM12CcwxDLErf2zSz9vxkND5gruqPNX8SmEGUi46gXsQW4DgDqjzpZ",
  "key25": "2cvtgLV9JzRoYkDWG8YHnj7Kw7BuPH5ZK1ywp8NdfQjUEdMGz2J347TvRD1JS9N154BicPYsJ9YoWu5S9GVyDoYf",
  "key26": "2A2dMG9Gy8UjN74Z1peLnLHsxB4WJGh5ARwJ4EgjRRbhzPtEutPKbXVG8pfB43cFA86CkqKKZgRYhRjxdrVNx9xr",
  "key27": "2sM4UVC14jjdGeWut9oz9XGXBxk9P1h83BvC4SrHYosNUD4PETrq7JCWEVoXZfqaKDTvkpF75GyvQPyJmsb6DJJJ",
  "key28": "2EzuKPfJFobP3tCpyvv3SUa4efUvVsDEfVWRXyFTj25DExBvrEmpDFVscPLWmhr5X9at5WzY162b6TMjR8McAGKw",
  "key29": "3DogEDbFsjLVXd1TPf7vwpz7MaN5UerP2vEXAXdiPVnnG2N1MtvxMLomVJPaYCNrJyP7Q7DpJtRcNKjXvBYBh6Qg",
  "key30": "4QaoKhmuV4oY6LKLz2h3XL2piBPSi1nv1Th44CnGm7kjqkrPLU6AW7K8V7RbzYQRij9XoaLXw2zn6RdqtB2487NQ",
  "key31": "aQpXXN7YvVBeZuq2XBSCzEENpUKHHxHsJTcZhQuXrxDQKS3oqx4aHPABaywdgbDdp6kyW8CPiphTXyGESvJkCpx",
  "key32": "4MpEvPYGKe9ZeQyoCbQBDooxynLm6J2gxj7ijeaAMjns5fax7ktXsqwuPMkskPz7NCYoo6hjnLD8ztFVYKyWy1ug",
  "key33": "3EDzebCTF8vc3fjfS1bteaJicK8Hn3vLcP4ZAfy4eLgiakuGNwo5XqxFERfJantVkuXEAVjsvJs3auaZTd1JkaNq",
  "key34": "59tQCPWP68PtadXpDJCjGtokEGGqo6wvhdM86VPxzmc1UAekEdrNnntPNePz4NxYQkbbRZZnvKKVKAxq5qyyx2ag"
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
