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
    "5c28qZ1yvTMitDiZVzCiBbaNSvM8ZCMbPx67139VedyNo7h7aUf7FGQuDmRLN6a5nRVpzDf8bKByv11ff4fg45Gq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Di6bsvDwkj7odtCo9aQ9nJaPKCaNpyBQnn9pY8fJDdNYhfRAFWUcPxW4g9VH6K2QS1JAYb7wFuHcTuDQWksPNVX",
  "key1": "5pQQpXLZRrXWzj5jSHNq8ic5ZBTMyDsd698govgoivVyjKWeUph7bNozUQQw2noUbgrzTn8HQKNJAS9mCp1rHso8",
  "key2": "3DitQeiPBRqSqzQkmmZHJvEZ6fzuXsmbWKfJ65TJQsDC86gA83v22Wnw6guBkL2YRutk4vGLa8DG9w3n2D9paB8V",
  "key3": "4bi5AvLaSP13minCgjpQPLaNsGVY2FDoS7mV6jdBUpuRwBvyELPyARiZn15oo4sQT43L7KQVsjtLC56UcZ948bof",
  "key4": "3tSdQEQh1PknadhfoxpwfQP94k5fTPWk46PfUzznpHDj1oLtSWgxUzykQsAa37E3v9W2hG64CN8Vd19ELjVUcC6g",
  "key5": "35rvygw4eiyhavzpuDexxGCNruFsN7H8h36BB2EXZg4ka6tMV6RNZkfzrw25noZcsrmgKkJ83KdQ4UJ7gLewwiLx",
  "key6": "3CJs4bfY4mU18eqSWyGZKX2NqYDtigrsBqWRxKuATbCjfJP7WAPYCep34X58F7AQeFhDsTzB6mXZqtXqQJY7P45Y",
  "key7": "3QnCrH2YX8nNoWnojCwakQZ5pQxawSCWm4Dydtk2CBjnG92j1DvPekAe5ueQ1gY9rdf9AphvxXymCsUq9SSAg1wQ",
  "key8": "2QhLsqz1QTXN5HUMTRSywQmTAKNDuvVKNxyVL5hAh4zL7jezTEKsv1YK4Z5xynprGK5o4p2GtXp4KKdrm7XDYuRA",
  "key9": "5ad7fHPj3UDPey1SK6T5WQkZh9xoqhuBW21LoBx8u2JnoHSx5pzTdzxXyBBQMFZyEJe8QXbSXqYGHqxRLtSa2cnX",
  "key10": "4eGA3uS2AEyeS1r2BmuMTcnJMhecaatqW6C5UDpmHkgV4qDLx3Y3fxTKRu6Xk4UKe5yGp4FMni2jBADUpg5jfVDQ",
  "key11": "BVWaZHwNeteLsHh8yAvhQr57EJS9Ddohw7b7g1Cg7y6pbVHzUEmyV2AXdEASC7AiZHEWFhHXB2DDFkPdz3kZRkb",
  "key12": "5vByuSwY3HpSTxiHTbx7u6UHTkP2urHDeBGJccxH6k9W9Xd8LuMJdeQqeBg3MtZerNffNaMBZroCSDrGnW91uUw2",
  "key13": "45sv4cgaxMVR3RoAuRBdrzv3pLuXsb1QN9KVnHzADSfQWzFDtdiBnmWTvpuLCnJS7ndMATc9E7NxaanCejcVRqDZ",
  "key14": "hmdyJYCvcAxmkUySFf3oDzBQYtHjDKrJ13yxSpbUiSJHA2nySQ9YiYmmNMu5HrTAz8CKAECouucmW58dDQJjkV5",
  "key15": "8CmgxDqehW5pRzSrtx2mCeFbP41rjhJDE6Mn193crMaXpgCWSfRjNfH4znU2LRst9j9dTGtoF53RuA3LnJCdQjd",
  "key16": "4j9Kv7iQ4YrtrVxsrhn5GCW5Exys7Mc3zBMc9aEZMy3DXnsL7CNjaLWDdbSYRLjaR6N1TcPEdAWSpnZopcR3r3Yk",
  "key17": "2fKpMnoduV7aaoX4HA1DZm42qEQ6PszL8D9n4do2aChmWAN5bqT2yi7ro8k6eFBB1wnTjsKov3vhuBxDtpsr97Je",
  "key18": "2TAVdGdca9xY4am7jyX7c23uNj7BTz91TV9MhAxab1kNV55Cp2eKrLoLkb3HZ3ZKUiihdqBq82uJXFwukZ6ajNyb",
  "key19": "3MdxVkLGRQFRcgp5AgZ2F7B2faNHBm9zh7o6mXGbQ1tcWrgbmFGupcMo8knmDtRUvop15odzQq7wUz8DpTk4ibPC",
  "key20": "3v9uyfuWnpDKvk7CZHp1AQfNQPANbfFYjBQmRXtzttQUyV3Tuh7Pu6N6qujs6DPNYrWGLknpLvSeMoDEruPX4ZaN",
  "key21": "gNeabhjLRkwNE7cNSFrs1PCZbNWSTFHFj32tFHCu7j955wbDii9W1JeeTrF82RozHPgSF32ennCEUW9FEqKnDfa",
  "key22": "4kfirTMc7szJUBxNaMyaEUJVWoidy8AJWDcBrRvJKCKp9QBwSzgnRhLvqfZREPa8QiDvvkYg3NgD9fdYMot6Bukk",
  "key23": "2MfTd4ggK3ioxYwUDjHE8YrYSDAsPYDi5WDZjytNbTtnaxtQ7H9C1AThK7CZczxf1VP26Y8MHm9agQLrDV9vhD1F",
  "key24": "5bohZY5bcRVnyVMdtnq9yTevxPpB6MXU9CRpH11mgjuYMK9x5GZ2n59B2SEpv7SUF6Wzq9ouYr5sxdmHLJUytb42",
  "key25": "66gnnHPHuLwkg5KmMGWNLq6FH9RnjtJy5rPFSyCQNEB8vpPLefTReHGho4xgBTccpbb4YhyJuQJDe8E5A3bMvocR",
  "key26": "2RABAvHr7TbzwzUZ9uB4xhV2zFfRGp2eqk5MAh6iUjVNHMrgFbaVRmwZK8PmxmwFv8D8cwmCwLFGC6EFkVmV2GUu",
  "key27": "4a9AmsVbMBQFqiLpRmyA31S6mJ1LGAPcteNGTsA5i73kH9SmqppG4f2Gk6KfJKLbpAdViNXXGDmavFPBjvkBeVoz",
  "key28": "4gnVfjTe7QHVDXjzs9EJEk8R2kUD8mzDDXbs3SzctaCRdi198QwWFJSEW1p8qy8dxoBwUFWDNiQL58BHz2FFxThr",
  "key29": "3ecYvdaoZXNpLYUGy52vciudWPB6TM6GSAxXtvnZK65YQKzKFJkx9bm1iQimqjHerFx1NRAVXexmPV4rCrwiM3Xs",
  "key30": "xg6t5h1TxeS8UdGCvEYHwp5aaxJZXDaPPkYeeQdT8B3Cj7pqY2dah3RTrGpC8Ek81nfWtQpMjmJpmqEyATTPq9u",
  "key31": "3UZRsY48rUQCQt3GZWqaeeJREbfeHnkKhGKHL6dT4dbNXW5b7mYd7nzjUZAvNpYURdpf4Sk4dPj5KSVB3jVapLmD",
  "key32": "4pk8SDb5eR3pgGGLYtcohdzeZLfr1FuGn99zYjqmffvU7q96vjXLUJyAQGQzersqSrSXGj4TNvXruYTshw3SkRU9",
  "key33": "2iL24WcF5sfghPrZXVEpSEBKo5myKenpnubVYdu84v7CqbrUC8gfJGQGQp7Yi2M3d1euU5jH3D4oofaPCUbUirMZ",
  "key34": "34F2s8ZvhzLbs3fRxsVAuwABCdn5MhSuf1Eo6vsj8V6QG32d323gCvgWDhbARmZ2zdfzZMghRm2imRouGHCHfTTi",
  "key35": "etLrnmPBsWJyEidRiYVT8iqAib3zFiSScZQSzLHJdZCbc9uJnFxnKCurF3KMESobaU1EVrJMBZ4oT8f5bnGWNTK",
  "key36": "GRgTqpSya4oHARPyXZkWtTgMnbFHkaaeEr2kFsqvS7QQTDK9vjFYcCKH6GwHvnrNEkbFcs5oWMNJogFNi8NQxAd",
  "key37": "LUpw2ThbvUXNNsAxwreF6pKqfZn8XEzaNEkSAaRZmza26CPwkJDzmrks2Y7cLGCbpCzBgwCm966kSCMw4wHGNTf",
  "key38": "46z1DHTCH6dsz4UA9ZYpEPjEoqrNppqzypnbRxrvSGZvnzR1489eupHFPA8ZDyxgciB1Wno5BHwWBrSwuVGV3a5e",
  "key39": "YqCwG9W8MFpzjJkXc7kuLfn3SsXmKtyk93N9kLtJsBaHnwrrAwKDFxq1bMokvoqmeerArcK6so5evv7fkNuRhkn",
  "key40": "47FRC4rsdpyzXqQfnjS5yLTdEfoMmGAd5uspMCUJM41NbKxk4PyaXcXUQMRURay3wBqw4tfZmXE9fzKososfAYeD",
  "key41": "3jStSXJkEMJMFR38HEQHJzZgjDwARzupgGMa2iZUc9pQnL8vMbuDq3oLXvDFHKnfFeo8KDT7ku4s6cMN5CQ5Hg2P",
  "key42": "2xKdpGLeDFutTpnKQhxWTQRhaShAyLfNQs8jK4WwH2YrhVurLdymMmk5TDygxtt41AidJqbHmhpgocJzXPDudR18",
  "key43": "28jHKHawY8FkdRj76RQ1zqmTHcTtZeLHeiDvrCao3kBfnKGnZTBGMDTE48H4P58Z52cGfv18nkjEPNvRvr8UpVVN",
  "key44": "3nSC8oXsLvSkDV9W8a995vvEkXWeFFsm2uriXAeCHTEDQSXj9Wf9FJwced64kdK14Tg8wyNrCJqP11gEUikzpT7M",
  "key45": "5JkBirHaSJyG9FGaEgy4v2aLX5x4MphTxFhAY66fgUV1onvSjhsy5nE6mkPvXuxEjg4aPQqSqep1TE83kw37uzyw",
  "key46": "4a9jjWoifBnPKYqzc91C42BFAHRo2vHV3usBLfYnTr36CHiKuXu2kbvpZKahBcp7NJd1j5WvBvkGEUDw68wrie2Y",
  "key47": "3XLaj4soAVCvnuHYN5ZSopbemXSycrPgCLuEA2GALmP2HCeiRrsgiKLyEcnHKi1p7JQJ43tWaFi3EF1ZW5iy2EpU"
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
