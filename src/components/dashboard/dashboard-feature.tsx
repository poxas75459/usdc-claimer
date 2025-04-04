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
    "5kwFP2DQ4LE7KPFovbAXewzFc64wGUNr3dJnhdBMjZAMEtMazKEpW1Gi7mJQWRb4sL8iKEDSs5z7K51zG6tLYSLx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BxTWoz7jyjnsddvH8RmHjQwRqVtq4FjLbyJ3oVH6GzqZpxaGrUqo6N3SbiPkak2G3c3HMaCCaXbFkAL7gG6AEVW",
  "key1": "3rTn2PjbhLNHExhaEeYuQneKEt5cDFr4dzAzZ9C9d3ppLE2PxpjWTHcFfC2WbvnwqMiPtvuAfoCtwDTxUKMn2DCW",
  "key2": "4U27WJvH251c3X5aRTZJ8t7ULYPr4yKywPJWKSgLztcVV7pFPNRm2TmpChtbXM64xqKLAGTXvtSaszVmbnamPbeU",
  "key3": "YtXn9BMYttydUaB9BwHBcRiQGd4MkXvdLdhJQA41QQeg54KcEBUMXYgd3X6HSswCgdmLYkcLfwRhyLf8sRvPHYA",
  "key4": "X7qgMsxa3V3adNzE9CQGzats6d6HUdcmi4WYofqFzof5gLDZ78XVYQTtJV9GG4R22rCJ3ZT4VEsrh5EYuhkYPA4",
  "key5": "WRRHPAPeGdMHYRNgoGhPDEwxmEnwA6nBDownyjGWiVD65JC3uYfcnQ4rno1cEbWLzsu8cBRQipe4jFWrWXApqkc",
  "key6": "5FQHvhLjys6fQpv4fDNbRpWFnCDVRuC6mW9gUMsj8DgLniyNfuMTHQFvqaRtJAnr1TU5ZWiNos6uCjmLuRjwW54v",
  "key7": "56RCwqriH2WZjjHTYKQSf23936GvqjkfWg6FfgJzKSZuEHvZBdX5gxR5oAJWkerR9PEVva8pEpun7Kg3KU3vQUxB",
  "key8": "5Ag75Yt5aoTdM2thxUvjKqRasaAXndiGXgcdSAezgAUncLaV5eT3HvzoBph2bMrWov3q2RsytD4qkEC2PtXSPuFf",
  "key9": "3LkQaijvsto8Ny1vdkijkYNY2jBty5S8D4FDs4VM1sSjXAXPrYUfqYCWtmtkR4puu71RiQeeathAUu6wQVmy7xBZ",
  "key10": "2GuKDTwhz3KxHXH8q8NKhhmiQ9neURkLxGdTouF2xoLDbgo5KLwGyKjRgaDdZU8PpFCYN2mCvYeFQfwU2cDccfN",
  "key11": "2w8Gf6uK4o7aT3kKTcAH18MkNieNrvKtSFTtqEg9PrWGC3tC9uD8MQ2znNGDHEm9Q6kxo3tsoAXDkWszcoMCatNM",
  "key12": "ctRA7e6FHs5mTePM5hhmscxdHHagRGmco3VNJHwp88UZdx3BpuAEU1XsTinovq2h32BAv3uK1JcUrUjKc9hRvUS",
  "key13": "2MZDyH8nSdtBMJDD3LteHMwWyDej8WndPpxzAgbToecvaNt72PMZiriSZ6XgTok45muRWJHqQgqNoeAGdBYDYxB8",
  "key14": "2jGZMQae8SyVns2xwY4hxGW9hfyGboUvrjEH9fwY9QMWiNRAmNUvvndPavB58d81SX6wQKxWs5843FqnBxVgUJP7",
  "key15": "4Kis5D1Po5ogLpcqgL3QtfDH6jHWP7nnwi8MRx7J1jFj2bMmL1wG2v7UsrZj6mMEAsaFbRPDbr22oXH8et8Xv4im",
  "key16": "4FdNsFtkJV7x9GhSoopbeCi7Dk11vkfZt9AF6o8usH5Va2Zwg7PhGecv3nqkrGoafSFJ8At4Q49bTcduZhLsbXvn",
  "key17": "2areTd5fRNxBW72bVg5c6obJ84q6AVo2MzkBJUKN3eDsan5mkBHRrSTEFE8nAokdRp921yTBoY5kcGwvDWTSCMDV",
  "key18": "2uqi1pC5DNqqSTNXEwBSFmYFTiXD52ZJEFrePJGd1aRxLM6LBDpgfcCQR5tHYPkqeTPRdjety76sv4BXp1zxe4iB",
  "key19": "5jPSvYH3FUKrvTRUymCeRsskLwyw6VoMNDnhnF6YjLQzkkRgxfPVNuqLGEoBwu9VUQBswBTHdWS6Xswtii5ypHM1",
  "key20": "4JfzR26hwwXd5ZrX9poMUdosWXokdfsGoTY5mcXNKGBhy3Tx9yCDwJgaMsDA6RnVQ3cnYMN3ArMgdfYdvRUWBPGq",
  "key21": "3uokRcGXSkm7rqKg6DQQDBCawXsd7NBcmFy4vhQmGD8jpbThxRtr9UcRqRsX7nPwJrx1GPyuVhazEmv7VHXi4zf6",
  "key22": "5vMdhjA7XiUscQNW5k7i5WgB5yyjhgoBnN1EMe6FBBK4VqjavpBg94Ct7zmrjJQyF3dMkAyTjz66EEHWvcTLNk1C",
  "key23": "2yhHN6nZHjUeDwAkUgpZuXiX7wShaXr77k645Rmr24GrHKpqq9wT7GbaTkidY73fdXdWRRauEjDWysjNx3KZ3nER",
  "key24": "4ghFpiQReY8gsLwmcvfDXxm2KyVHSTbJuZtwgPHDUpJefYDm2wuUGvKo2zzm7WivyUFW77xgGCnsoDJ6fxMAjrdi",
  "key25": "4sJjfGoGs6kNi6PhAx6PCCetmaSn23jgLYrWizhUfmGNcaUWu3YqLQbDqtyF5JwaNr3rM38EGSbTdwsfKZtdRMmi",
  "key26": "465xQz3tgxNJx7qXpeG2w3RYBxRSMYEzt8hjkpCNeN4q6hiNDfg8VjPb5Mgh4x9JKRMXhDyytu29sXT8DqgiriW7",
  "key27": "5cMSAqBJQXaaXV3R9MA4N8sk9XupEriiYB2VXKUoZi6ytP2SCiuNW3wMXaucCQMpuNCvJQ26BEk9suzToGbNn4jX",
  "key28": "2vfKFdzuuipMPa1WXTAjMcs8fKdfkuzLmYorvNJEzjHtMUQSJWZ9PpxqRkUajMnjfHLXaoETx8RZw2XHUbFnAhf7",
  "key29": "5M867GEDM2T5h7HF3yMjVeoY8QBYHw2pGt87UaaX8oy55yNxHHkCYX5QA2i6SBarMMZVVX6FnFAANMfMXp76jbxw",
  "key30": "4gftXZcTVKDhyxUUvKmvm7xCBLiGCEk81hbzxKGKeLqZrPdoZ3CYDcDFz1TUsVhRxwUyZ5BXkcDyApVesjbYAnWT",
  "key31": "4TiynFutTszxB9RHZf1FVwsZCXM7ge5f7Fb3ganppxThYQDTkEmz6dCztSnjrcwbNzMj5QMTq7zFJh6NvYmHyQDx",
  "key32": "4bkEA9d3UeYA4vR3vTVgumtCoEiDAmGiMvJZwBz1UFKQub5QSsg65HrN3fwzw3AArSKHL2cBcc5UPGpnq7VaYgZr",
  "key33": "2xrW4PUT85JgDSFjfjUmn6Nv2pH8VkPRMjJwkUa3qP7A5yaBvnD9fJXVSip6XnpzDHGET2YPKTznymJ4pTreiuYd",
  "key34": "5UpXFz61pLi1MukMJKBBj6LBYD2mGpvqwtjiuzKPmx5NGQN5SubTvsqCPKpH1aDYEN1WivARWDp4eT7cXbTCgyYE",
  "key35": "5cd3xnyzu8DjrAwGbTJcayfLGSMTqBwGDD9vcsnUYQWkHuM7qbFiNeRqbMpzJg6MAvdwCy3EiN8SpM3UpJZqjZS5",
  "key36": "2hq3VpzTjb12MvyKk9oNAAZXzneoLqYmzC3jWZhxGnwGU24cC3cd47qVwn6s2eVKekpzjnhjoBs24yqb8QjMjV6Q",
  "key37": "iNFZdu9zKyyu8pu9ZR7358PY98wHjhN2DpRbFhsb3mcs4eQ5w5ZpVjcAqnYhxRoeUbX1xQTJv1xFDMT5bFgNhus",
  "key38": "GLRsxHwRegU5NLSqcnXVNzVbboDvUmUHwva6ni52GgavuTBuE6iiXQwbUryRhPutxqkJDqNb5qRBGgat3BoSgFV",
  "key39": "3HWHDpmsxBDZo6QZ4MTJMQe9nuEZHW6vd7pHdp9vNS85dZmuDc8jUm1838onPVXfDbjNQ3azVFMk8LW7MSJxFgAP",
  "key40": "FbaWv2iJJ4QRBoJAuPKLyfHkCfeimSNPbfJZVNpGSEWGrm5YbieTpgroWC2JXqpaxDCDs35btimyk9bjQxQ8YJQ"
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
