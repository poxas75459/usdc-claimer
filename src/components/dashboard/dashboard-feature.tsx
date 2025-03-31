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
    "2o5jCepSmu8CzvyucQ6QoJtMMAfLbSdSyJ2E6gfUi2zF7AS8P5aHEzwH2Me81UvDDru1zeJ693jrqWKDovNGrcJB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RRrsw1gg2NdqbXr3UB4TPgrgs5qVsTugah59q7wWbbcC7zfz8QuLGMcpNcBAqAsC56bU2C9B2z8hQJR22i2WY25",
  "key1": "Y7dAfDxRT15esZy4Sukem6vwN9guoPbzMQEDU1aFrJ8Ca6fEvTScg7mNE7SwUquhqUxShGkjzSwtRQFyR53AbMS",
  "key2": "3xjXMtkAt9mLFKMeapppsi2MU5USt4cXLdmSGbNwhKNPPWAoA8m1834aGaXxi4K2hZn6dcDbumkM64Qx5guPaDVy",
  "key3": "3U9EJwY7cYz7eEAd9jAiMza2oZtksbWRT3hFGQ86V1EPHRUnNFTGk6Jizh6BHYbowBFnLR4NCE7v8CTz9XwTWECF",
  "key4": "5cfiWfTh4ZArxr7grFaPGxM2q2FVEH938Egw2tiYB8sSsm7B9Sf3BwKirPH3JNCAYseRagPiFQ6JmHy6wtAkKZ11",
  "key5": "5t2xi7KgBk4TS2p1vg4bcdhdedcdG3GzTKcduNXpCGfBaY2CAebPM37h77FuUAAQaEZHeshQDdWvA7vUvThHt3oK",
  "key6": "5Cx3b9gp6xFoV2iWkVtAx5ZRbiqnEmxDgT6ExKSxXDFZZZLxErnYqJs34FrzRDeWUDn6qpWbNbD4UBWzTf2EGoN3",
  "key7": "4JChCazaVLzEVZ6C6LQsGcqA8FoyLbwN5W1oNAKe4btgjDj1NVEufUkPV3MZ76DxKBopopsY44xYi4sX1tKaN3wP",
  "key8": "28Sb9zwRZTyykWq6kMAbjGtitgdFKUxr8crqhhbeikgjXcWVTdJqw7Zfh65H2rAeHVCp7LHAREHekQaxWbaVqU9F",
  "key9": "28ugTmrXPXn5dkJyXvjcBCrAYS1AuA7meQKqBRajqSPNnc3CTdAQKJTNruey3gXgqnKtB7vfucdTGZai9vrkViXz",
  "key10": "21WaAdSNyeHCjSn9FaDTD1ABADamWLsqTrqXPaGrnSgb6AevDR3SeKh4WbCsRmmaEaYzSCne4AhKnJ3c5rwDa5Yi",
  "key11": "3d2zYwLsuz325xkJLLv4W6BQ8oHj8CJpsTzzbgsfmPjVS3kiBepbwRP4NB4PnkTvAgqTS7SwY41ZrSW85t4J8v4X",
  "key12": "67N8yGTCLUhmwfU5YhCdew2RTP88rv83A64p68stkZcqJnrXJX2pNfvYT9ZGb5XPhAmjWPrqY6aVsg51qUSQVs97",
  "key13": "4Ng2avt1D3bLw99W5v2wnBLXwut96TgGYPcSxEmZF9nvV82zgEagAL7UGqu3VtsqTMZABs1TA8EetxeH1XFCVe7c",
  "key14": "2LoBFE4SduSCnNDWypZ4oZ7yQMj5JWzVEbqvySxLk6VSBtmyQvpSATzUZ5BRCYFKigHSoMpyWsUCrD3t7G1MP69t",
  "key15": "4pACFwWcjhPNVjkxPSa1ucaz5DRRt3RX5SkTyBqQ8yEXD7VANbuPLscQqRvNQC4bAUjDVSEGpiY7F61xXYkYfXny",
  "key16": "3WoFcKm6fLQVVRSB8AkmBjj4JanzRvXqRApPzDVu1XBiz7GX331HQ8SRkU15cSTPFYb7ZFBzNHKLXpJodqADPqBi",
  "key17": "4XBa7i6f6xztsHSsWH23Jqs5mUpvnwMbYsuGtC18ceQfftistkzawrxTouFtDgpH2yiySmWaEAsyqsZMAmzSubcX",
  "key18": "2yru3fpWmuHTDDiRycsRaE5vaVjtoa2basf5esEyfoecXSgSSKE8V2uq9sBRuMtzLZtqGZMGE6HR8FTXUmbz82gx",
  "key19": "bNKFbDTsw7RmD9w1U94W1srsGPhZqQvpFmBq9sx48Bkf5vG1SHBqxsfbCHA8zWqYt4DKNkJvv4M2YTS134Mt26N",
  "key20": "5FceZddBCZgGL1t9jkfnfzc47FsLRu8F3W4cGn4pBXsGJGNhWqccoqsenYdcMiFG6gSZQMR8XRY15HaxaKyYtVW1",
  "key21": "3Wj2kA2W4A4jg94ZwCDHj26rCyUzNm1HSdjiihsFCNjYrMP6EGXqtVT6vkdsVV3syCAfLN9qLKJDvKUxv6YTZdCF",
  "key22": "2upJ4WZDZGucKW9E2CUgwVTVLYmJEwWtgJJE3ysg3Ux7vBPkzseSzjBo3Nm2rdBgYBzjzFbR4UAnyfzhEVVvFdyy",
  "key23": "3wB8gE6JpAEzoiWXuCBiiM3rYKDrYqBQVjWE1eyvAFFGYxwPKsMZ8JASB5KcbcFXKYnNiW7A33qbCGFKd6CVg7Np",
  "key24": "21BU8KsW66KAt5n2msjwJGqt1eYvmoTyxP7EV5UzQ6qZX64qX9SbPs9nfNTzMcQfm9X3t3nZ2Tbw6vCMCfMKT1mV",
  "key25": "2Ycyq4CWQBa6AhA9BDgzpTHuZZNSg2c9VWD6C3QSk3CW6XVRHUGf1Exjpyd5AeKUfCijR97hdqqpFkFt9a9FU4wd",
  "key26": "JS9SdhCKDJFRFe7XaLUWJajK4Nj6gBn9Bt1BmqnYai8NJKTYtWAMH9BEXKTWu9z7vZG3HgUszS2dBLGWwvp2YAd",
  "key27": "4kCUM3qfG1mQY5sMu27x2fWRBLqEVubMWSizUXsBishbVF8nfiYki4c5VUWVfXPrS9mJFAq8qoUXdY2gsbYHksc7",
  "key28": "5P1vwK93nqN12KiwqxFR58ezwvL3Zmq3qEh3Bg98rhbEF9egtxzSpjawoTQD1t5wbpqQSM5AfcMVfUqHS7A6Cxz5",
  "key29": "5TmxswjQRJ8TEUNWeKv6v8MG7sHsduvSDtdiLjXcSiDVbUREZKNyDfLXFPHC1VPeffksWjHtFMP2rnNrPQUqgqmy",
  "key30": "2y6cziZabWHqu5CAFChbTYXkMM7deXXJv1uLqV3wHNHtakrjpGYQEu9384PEMDrs4QNMfx6ZRKqu4c2DXzEKfgNB",
  "key31": "3FdjUSQNggNncDTWkr8k5s9v152XnLSHc47fR9cZXwXti4fLSqGL2vNf7CdPxz9j6txAjjAKTxwX7c7G8CaskGAG",
  "key32": "p5qdj32tKWRN4ByQD8TiLMDvG87F6fVjdgvVwbgNNUTmedLWFWwbTRwSTNxFUmYRgTSzXa1jasv7GoowqdTPxWk",
  "key33": "5qW8E5HvH2vj68Xv3hMseohQyqt9X1ikr6VmZMVbi75Qiy4FiUwQBSWpcxxREpG59F4zQsqTMaGBnUanxXq8Y2Tb",
  "key34": "2dthkGQBTu9JN5iotFo8ufmkThfKeE6otL97jQijv5dFp2XAhHLdyni8VDSN88NkrpFsQMDHVzNLWLoLmAtDWVEB",
  "key35": "kRzsM7VhoqG43tymgHixXG4JwdK9cXYDhEJeYZyN7e42oRftZ5JCJkwVXS7SC3uZKgtZ3iELrkH9jHenZWvrJxZ",
  "key36": "PS1Tk1pPva6sq3hqtYqrUK4DYc3SJjDAw4eF8NKMGDn1wvFgK56GJGGtZ3R1ZrxHcsRa6VAvmmEghNVBV1wW7zw",
  "key37": "3HPuFLATBTpMPhi7JZdwWcerH7AMgJAokhCxxkGYuKHMYhEr9LZF5wfhyzmsTUDMMuTWLqF8nFC5Xh2KkTxeBPH4",
  "key38": "4mSiGUe7TWngkDfrnVpiLW7JV3kDWJXmyPMRZeXh5USWW6zZRMyQoXw5NSg2wtPvV7kjQhnjCurhtH9sZfnQiGyE",
  "key39": "32zgeG7CjXDcfnUEjCKdFtCpD8XpeBsNxxZqQMgMNtZeBZzjHmB2trPkiUT1MiGhe4ztNHK4cGdNwRSwcjFwFKnH",
  "key40": "529ibqsSvi7rR6dJbPA4bngmbyVwGf4FVwErpXeciB1byTbxXCwtaL4mt13WubdvgpoqFfkartJG3GaxCC9PCkex",
  "key41": "3HENWQp5A8yo8ZocatySpQ8cWh3dpY4VFUffQuqQcDDvM7L5s8AcuczBd72D8YDhLkKQQoLfgcruD5k7jy1RkwU2",
  "key42": "4NwBo9YDdSLdeRZUZdzJ7xh69gGa6YDa4eDVeP1nHL3b4SEAf2qSZmfEPm4ikoHphfau6w64v9zNcMGpufmHuSrb",
  "key43": "3rbPMjvrL8F3KNjiSCotUW3wF3nuUSVM83uG9CB9TdGyFmbJ7oTs4Gw4mtBwaLmCbpES6U4zZSVnzUjGFkczTbSo",
  "key44": "5v4skyAr3oumKsFhVZTXYJdTNSSvZuJyohTDcABsggXu6JRTbetUkk8EUQ9qBnayNYu3qy12ewykwPJxTDRRBvN",
  "key45": "4YRoj7JbHYmrjuaJFV9kTW2GsvicDQMLxicPN7cFiiQgWQeh26XDk4QBQu1ageaxzfniyYukjVL3vFA4auHcxpqV",
  "key46": "ejQ3B8eoTWQtPKKGRDgX5WM24U5voMj613om8KeSS9Wiy3uMg5WVafmxg5Q9nTU3dUgvtXdDcsYifF5GS3NotS4",
  "key47": "54DcxzaJHrt7Zs2MrHDQC7aromSfPJLXZXt9SFqBygDx9f5b6ssHHTvFmzcekB63wPhcTCzhHjPUNfnwF19yDYWv",
  "key48": "5d8tYwTZdpFjGnxSttwn7x9KYvUzxEi1myo7RefVnE8cxJYXqJ3Jm3gSJeu75oEBbt67ZxpHx3Yy4mkD91VzCe7y"
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
