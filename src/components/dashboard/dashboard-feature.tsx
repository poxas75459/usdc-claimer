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
    "qrVG3PCJgREjTBwMUiNNeJ16XpakfewMo8zLff4fYx8bKrhHQjawj6mZkrne1pzN2FGDqgNJKosbc5Bid16aGuZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fnACx3MzyiwpdrnCsp3LQAPtM4LYGgXQAKma6Emw7Jdy1DX9nxKT4eYs5ZQQErNBWKPfibGXpn5xew6wEiW6nh3",
  "key1": "3SroFK826GECf71qgFi1ajYpw7Aw4Lv3odZnsooU4o7BXyLgeZt86mrZYMoeNN43owDTu5Ar3VcAhv6Jemm53rQh",
  "key2": "31DohA4sTmvvF62PDKhD9QivsFL3VzvuTaRTiy9wn514or2MyzoN9KzjRLj3Bh2SGFjDfseehBZ2FMXPguzRRHzB",
  "key3": "4GeJRfSy2Mp5TuSdt98qYrcnduwR9dNVcpHFFVvCmPR2VBroEYibvWkzbi4eZmePSLJDDXLdDqsvDpjNB87tRKuX",
  "key4": "4U6RTfsestHorbZgSKGzb9MvxvdyMYVNQN4kEvfRrPsUGQe5RoXxL2qmTcQ3QwB66ihEwsxTdNnYJy48aERKTx4s",
  "key5": "4zM1YPs53qQa4Be4XoFiYwCuHcUxsjNfaDJDQyPdwEyFykozHFdQVfbRZveARL6PH1n7QVgDVoNqnqjf1DQvz9ir",
  "key6": "4emT2UtfSFWFeLc18a7dyfA3nThorQmC56re4jpwWd1PrakLiTXH6hcm4Z3YBiCMM98UqbRa9CVDt4ot8KpkJzhZ",
  "key7": "XpmmfHWx6rDDfR2ZGoQQDXgK5oKAi9wtaT8T1MuNTfquSxRrWuacjsEfCiCQaHjXwNwgBbxcHvrayCjeBoopxw9",
  "key8": "ixZs2HiwRUhAygqVrbdnTuiTNVnmJgGF73LB9uQykoa5pxyuaCabkSwTPJxM84gW6iUUDaMvK8tXc4jggcxPBzm",
  "key9": "3rR5XQA3KRxX93DBbNCrssnc4FVyQDiNR3eatwcXAq41rt1M9tGp7FZb3dMFFJcAHUbtRjBWoVCfUfD82EmcwKta",
  "key10": "2VfLsHBxavLGTzMheejuSdsDGCJtPuj6g5D98RRjMkmQZE3U3A39hUk8txP2GLT4ScdtZPwoEvYiA9CRxiY2xhbV",
  "key11": "4AHGUp4HmWuTnaPmj94EuEhG28chw4jSVmz5SZxfd97gfPnBV8EPHMVRYaRPeDSDiJ3JC5okb3tkSAeZeCQfsi5n",
  "key12": "2eum8X7ez5LYrDYhzci4Xhj9tatwuNLP9hjqdLEwKViaoNWaw4VYN1zmVebxsB7gKeVfcbP8TECB8csZ5d9N5SKs",
  "key13": "4jo6pAudiXYzMu94G7vR5F5uFcjg8onG45dt5w236xtFoKt6rW5ejJkZwLtir94KnTMJdQaEjrNjUukQXGRGpQrj",
  "key14": "5ywhrSXVZxLu22v4DoGuuzfxKpEetXzJ3AEtRjXhkdCyeqmFBtCWg77gpfFfaMKaVhR1MLrtx2FUqqR3gzHAGrJn",
  "key15": "4izrByvWWREq61m49Sm9GYoQtvqPqtgCDe4T2uBTjmdARv1ou1KjBrmi7om7b6nPKf8emJ13mWEwwTawCNDuHetE",
  "key16": "5qN7T9stgbP69GrQzkSLc7MtGQ8YWhntBZgb2vauD3ufSUjBACXLb51Aa47uCb5L6JA9xXAGCPHfRA2UoxvL4LW8",
  "key17": "3UHaXFZKo856wGvud1MSF9ZLjyxjNiq5y5yRKT9wu2MvsdYexVwGtL8Kx5RtihVNVXSNkGsbATn1rG6PQ5Crkcbs",
  "key18": "4VGRKfp87p1t4KghrJkBPgwVdVi3sKrqjYLNJyK1yHtAgEdCJKurVY5a2VuATFRYLzuyiAnR6zAvLo4cqh3eAs3K",
  "key19": "3zn8zJDGjWSPMV6fyfnABvJCQUXYMynjfz1QmzHHVgadXjD3myUFhHNa4iETuxq6QLAikdMmhjik7C4XpS3JAaGo",
  "key20": "3bwQJpCgTS2mkLzhrjph1RwozyzDAW47MYKJd5QSMa9vuFVFAcP9EjFGWdA4MrVJbo18VmzCmdj1Pd8mUYapiY97",
  "key21": "dFvpU8UYTKNVGYLRB1BPAKn5gD8bbKVXoMBnPjRd64Waf6finMNCTvMYw9HkZbCENMQJr5Fzcn3S2vjyMHSAh9V",
  "key22": "4RQUdBVHQdvWuDBvPHnRU2jQ9gP9kTUvWWcwDNej2pxQQJYZ1BfM1efHitg4FUKWDLrezG1jN4YRU8mo3v9gzx3T",
  "key23": "3RtkDaiwBpCAVvLLPLiXmtGYnibMrjw1cbdNEaCDKpocNd8fUFnu3BFBzt1SerfeHnfrLhLCVZP22asD16SHXx1L",
  "key24": "5QC6PRb6rrSjuf4rHESLr2ZMveuxh6DiVaUsfmcnxVVFHGP5UnCB9DSp8t2sqvAAHeVVj3bzxsRsGVkhWuGN6kif",
  "key25": "59myKuNqwRTxLsnDnWCB13sis7WyrF1XR2EJmXZEf1sPQDkQ8i4fN81ZqgueJT1EQrBR1TtijtxWFjYkookiGqEG",
  "key26": "2KaNrbtAeAb4uJPKD6gaGwUSfjVTAJYV1cviBA5roTeVyk432Xp3dFrSymkR4cbvcFT8vK1b7XTnAS7Jmr5oBSas",
  "key27": "YxG5M9w4xAsVCPM9pBt9cJCqK95jBd5nPy6nTPmy5AHhEwpHCWmMQFVFFFBAV2zN3aQU64cPHvptEpwvXCAnWsn",
  "key28": "4Y7DQMqWXqCFuVxs4sj25zzQgBu46oTvU214bye2RVj2hcReb3BwZCuanbNoU5qEURk2YtDC3mbKQUEFs2RiUSgf",
  "key29": "5ENBEg8FmqdiRXPgamzm5VndZ4q8dcWveSxRuQhUMgtWhJA6zmnzuVTXxTAeZ4YPR3PSS2R1ANbJtu4Bt3NMd2NE",
  "key30": "5HpiMBJ4scRteCV9JXoatRKKAfkmmmmgLo5Cx3TU4AVXdMgA1uoZJ8pFSK1v46xpmcMxZfYYsxbfp3ttHrn4XfV7",
  "key31": "Q7qBbcZ5jgEMTCLsn6mYT4ScLKHPkNpvzAo2zhZJpKMvyQBmT9SnLDwfPWe8zDBu1UU1vA8WzP3bwL4wmMdSpCr",
  "key32": "2FXUzwZPpvA8z8rMqWuKgQ3Zzk2avHrYXJABniCxS1XhiAJjL7UmS4FfY9Xc6QZKkbtYFUk9eenKczwN1W2piCKo",
  "key33": "3eY7HwCAW2hg6HFRoeBveZHFSrnL7UTfLokp47qp14LQaTzeEQiLGovK5aVjtSfigSd4cwoZJVJQdCAqNMj1Fmki",
  "key34": "5Na86mMETFvQAZGHKcnSwnEko4a1wFDr8EpdWyeDuV6w1qnQg8AsyHypGNGc69f6xxjPCwq7xfqE9ednvDPJu79A",
  "key35": "2sXYbnfAh2fEXR2zaLZR2ys3bMWafCF5snFcnwxLcjCbMPB6PtnuZ3Hrzgy7tPHto5NRHxfAUPyG9kZj5W6Q7P6N",
  "key36": "51WgB9BvjkcphwSdRSRc7MektXB2bLX1prRfCTS1B4gVLgHdDAwiPbYCqXPfpgVXyWoSfsJmGpFpKihFw8SsoBRN",
  "key37": "F9DvEw3BJeLrukg5iXpTE4TpYTNt7sVT21jdyXxNsQZoYMMSfLnS1fYwvNdHpns5uN8doBC5LAA5wS1fGQo2dFi",
  "key38": "2tNyxfEc9GQcYPQrhbWUTeJ4si2pZvFSMefPs8h6ywJH2K632F9uFcmTTaNL3atHC2pPu6gKSksbrdDWqwturjJ4",
  "key39": "4KPtVbVVpxjHVqerE98o1xLVu59mAGCGvzQx9S2XBChk85KBQiJu16tZX9J6gFevt8TVRU7VbH2atfqfMAhjZan9",
  "key40": "2qpPWcHLhSL2XN4iK9A87nbpguuLjB3kNPrXmcJTW5Mdx3DsQodJ3iPZXVdpTBMYxYLz9LhTExahj8goFm6vtiFg",
  "key41": "2MqwGZLtSYZnhsNYVdSN2uJn7McVxQToaDGG1qUBg9dKHxAoeqHAcao1QGxzjBJC19Xq845jSAVBwcS5a97rTqpa",
  "key42": "5uJmLRZ9uicELncNceoRY5zc9G6pNfj2NUbFvJvVQjhFV8p5xtQL48gNkA341UJv3vc4AK2zATBri6fdt6DAV43B",
  "key43": "5nQwJGXcpvUAKM8z3DFRrnKjgEgc2PUP2bAN9La8q3a7kQ7F342Yok1RhT8jYvQ6ybUdG4esXZ85szZVh3zRLs9N",
  "key44": "53nXGXHKmELgadvea6xvNU7jVcFbDHo7aBUJ8KVFrvFPoGehvPLHXSmfN3ViTHHGhu6Wvh4TWoJwb6MbjeP43daj",
  "key45": "2xM2KgkntaTUnFCYqMKcEZzzgcr2qN4N9duys8ddgyCzqmvqDnJbP8hADN95ifeDiNg4Zk6jAhnpMouwMUZugTqe",
  "key46": "rtGntQJWFzhdM4KeAkPsgmNXF8ZVLQgtZPhQtSVfSrwngj5zSbjnz52AZMhPJztkq1HtJbcgpjbztFK4fLAPAmV"
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
