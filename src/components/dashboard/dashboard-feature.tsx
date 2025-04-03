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
    "32f7R74JjvWxoz36okfZhZJdnnFzgXNcN2hrX2kzv6dUQ7y5A6j8ksdvXfnrWPfmNkJwJVBemBcEJC8bBWrGF87G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tWf9F7QYLpyjM2ytxczvubdsSaUQxx7ZvpunnRjwuFNXEzgwBafbSq5mvuJzWUfoWN2xX1JQYpRFLPjHaDZo2Hz",
  "key1": "5U6a3A24dBYB6VgKvoWPyRfbqLLxuKfcsjvMMm6Dq35n32EEaasZECvm1sk1SCWbGdU4G38Eu2YayxKJaaEBAdF2",
  "key2": "fzXvfmVnGqqkPwiaFHsVNoH3huFmDprSBXuty8fCvxN9xaP7DnKuL1NgGqDFUet41csQCuFdD7auW8CamQN1en4",
  "key3": "5h7swbB6wXTHUNAz1D8SZk9bnCyukBsYxBKXzcnT63W8knAUBNnWm7z8YGNytn2ANYpqbCqKPpxPkVzaLUPZMDPR",
  "key4": "5XY3RVMoMkmAPi8cdPBRkMxeafsDU7B2DPhZ8xSgsJ6HVkEPxVgUqB2QjJYZxejcagNj9oher8p98FQwj7a3Dbk5",
  "key5": "2LTuuW3pWeX1GDPR8298HaxyMihacpSNaypD6PPejTdJttNy1nPb3PuCSN45Gm34mGmk5WAmwZjyqbp2FvPv1gv7",
  "key6": "4cdHbzTwfK4fRacFedi26ehTiMgiz6pK8T77PkNbyi2izgJJUWTA2XGtUhZEnVd2sfsh1HPVxj6T6w844bfWMAn",
  "key7": "2HB4LvWsfbsoPNEUC5uVSh6yFV1udyShaF33WrkHvh4Hmq8bA5jaBMZ3RWgJMWsUNodboyEUmLF3x2Rf2smzchKy",
  "key8": "7vF96jGsqFBTuy1zkQqLzDZBJTrwf1RPVA1Tan6SViquBimS3RS997WzEAYBLiVTUu6nCveDaPQiTNVNUQMhTFn",
  "key9": "5acSrTAQRfthK3HG3uPDAiGzF9SqugYE9LBawgm9nU9poTYrYACA6gVLsVgkASKRJpdrmCroXnA3eTtqcfZubZjE",
  "key10": "TJyhoCSFAfKT61PvKEXyDmSsgXBy4D31MkSxexqDGQ2eAqDRpNcdTzwsQCF3xS2et8foyk3UFxybDrDJ9UPPbp9",
  "key11": "2h6JuyjNLZVx7H45avTLhwCCWV9D9QceX6Hg596hahAs4gZNLDvoN8LBypECDLrxR68yj4DPaTrKrDXeEjGbXknd",
  "key12": "Cxb2EDLRMnq4aCwt6ManzkNb1XdBQSqT3sXuR5kVAifT5W8RKudERDbpu112ENbKeidZCGT3TjgTxwxXtahhf3x",
  "key13": "4Zr4ygMeoTKiD7qgrn1qV89TDQa2owtbQiUUVi1wsXigTr8ci13WREcvRrCEGtopSdxcgZUeuXczUnMegdktzYpX",
  "key14": "2NvqPmiWjhMboLRqHVgFWKdLyNTKBitq8u5uRESw1Vd5dNw7915b3eqiETjgqbR7dJUSoVCrkhoLz1vyQ8FG1B6b",
  "key15": "3CCHGG6rkZbwMJs2rWP3nsCXSYP9zWQAizH22cDsZSFxgRWrBdbB6PV9eLowc21xFbV6XbnAnG4dZu7feqY5Msym",
  "key16": "FZ5dTUsA4aZYPgAnLnwtTENpTz3p4zptPAHa2RhaP6B335dDJwq9yCyG1c7zf5cFoMkF9f7fPNgmieWGhKDjhQs",
  "key17": "4BZMvksR5GBJFKYYNq9H4iNMu5rozuVR2SG4vd8aSwWmWjH2P5d6KaiaSrgWHhK2fmGsysiMZp9mPU83zZm3WnPM",
  "key18": "2DzaYpbzighRu5DQa1gA6bGF8HJ3yzYTh9zyvkYtUwAfh2H79d8qqUTYnEpi94e52w76AWfJArksywLZL9iTBNbR",
  "key19": "4QAj5soFSQrxPeJYKme4GFeoqmGD7gjhCk7pc2r5k56JvGnbGgFXLp4HqQUYvk4XExHuGcw5QTz8cNK8GR4jf9Bk",
  "key20": "5PdEGf7Jjj6G6E46p4DK3e6QK86kSi1iR6M9zNFcdK2ReWMexceJZeJAB2LdNXi1qmnD7p9y4BVVFWoouK71Lnbp",
  "key21": "4WhVYFpzkbUUUamDtFx7nSJjH1JG99EeLgxC95H3mQEFALymqmr8FJHUGQUjpjudJdXQ3d6Yz1yiR3eHQDCYUbAU",
  "key22": "3hz6xKPKrpRTWd4T2pyQM17gXJSN9CSmcRHNSrnJ2mZ4LHkNAGVbE81rgWXAiuXVuDaFQkwynPx3bqerorSDApGa",
  "key23": "4kWY2YfTAmYdZnhUJbRwaGe7a9NXZZoRNMQwjvTu9QFgnqbFUGPXG6eLrd1BEXrReeAK5o5Xx39NHEVr6HHeBXKz",
  "key24": "4uofieThusB3fmdcBGwVfPdVpu2TJ3R5AgrezjUWkirw2h5Nh5pwBjGXHEuGa11Upq7iHjn2khDojhe8fZNwLPvd",
  "key25": "4bawwDqxtuMbk4Vt4bb2vKqsEsZ1eNcsmhoozhh6fenbioBpU5H8v2oUqK1y6kkyGuJu1yWJsjX3xqpbgG2dSpvC",
  "key26": "2rgvxBWn9Wsjor1T7zwTg5HkWiYfGtrP1t8yaK8UW3WCcwmKwsu6VNTKESHXYbz3GQswA4HoSHRJuJCNr6uDferp",
  "key27": "44uKLtW998jdLQS6hNrkokXNZuA2NNaq8PvdcaVNuW9g6tgc8oAmLPhAHrWyaBdgtYU1iAZKcm3AvpPzUJDTbmTA",
  "key28": "4hdi7Y6qKi9KQsFzfptMjCFV9AMnLR1V8PpQEDhoDstnuX1JRMca4iRS1iborDpzJ8e7m7ogbWDN1i4oXSJvL9uB",
  "key29": "5Yagpo4qP2BzAy8PxPgN8JmvkDZzGJbMXqeUdoBg5kV9MoHVGXJFdZpsVyeYerJT25saZuZ96Kn59unmwVfFc75z",
  "key30": "3gegukFyD2nSommtUJ5gdUxTwbByStvt2DfT5UdTjt2k2xwaYSgXUtqcgairvxGD9hKmrHpGLx57AvpGSw18JoM7",
  "key31": "5s9A7SDBm5ZYdHvNetCG8NCRRDvs1dScT6d3JVQLau5zXH21YMv4JYRbM8AMksRnMa8M9eYgJYueUTHxuB3oZ8j4",
  "key32": "5XZ5jqU7jgJLHxefUUiookPujHZA5sikR9B7sio7Z4rqf1YaTGTtaAwrhqrp9QKbbtaL7YrCkUsWq9Ca5yftrSor",
  "key33": "5K1GVnoxPom3V4JNcFpxsNYMuGt4bQMbybyJ2YEFh4CvyWUw9VRKJe1z6cSuHXRRfn7xHaYWST4gvPheSngUFpVU",
  "key34": "547hDPkETAKxo5pqD3T8tKnSz833ykCKxaELcqCo8mgLD9u6EYjLWrPu5bHANbrsY1cpk8nGhZMX2M7KM4qAkDv6",
  "key35": "4wr8rWBxR4Sruo6L1FKedmGv34NU1h4ker4LdWWyqfkAhSRyoqQ2qYrNnM12DnjS27Nq5xuvN7w4MtKoihe2Vy9o",
  "key36": "5GiBBa74bDZ1qCWVimdMwvPitLYBDK1qZ44XqYypcc6jtrDk2HAcn1MHsfeRALpJKZg6Q3XBaZ6jEaWSxnFVmXrp",
  "key37": "i42Q8Nz8rCZRqmLVEPCajhhUcms2hkx4F2CiDHTp7Yqd5AoBZoQRbLtBSwwLanGrEhVoDNJ7DyRC7xXjZRTkXcm",
  "key38": "2j6sWMr4pCwdpXTpDiaEpkJwnHYKQHqavvTw3vvpgAAMLYcXohptRf9FvHPoSxzNtYKRPw7YSD61Li7NFoXV1agv",
  "key39": "39zievS2Pc3J9hjFbuz8WV8rvUmVG1hDhxSdVayms8NNMshnbaUQqjrdmEpvc5Q1hAvSa47cKNYNyoY6bmQoVpsZ",
  "key40": "5VZ4Rgx1qv1dAyShfGo26yTLgRcvSVsPU9XrZQXE1iPM6dAb2oo1ZFyK1WUR7GvpaRU7oH6FXWHU41vs5JNpUzxk",
  "key41": "41WSM1hikcuNrGiEr5adLoEAC814ThoHczhhksS8E8D8eaBzgyH9yL64FwzByLPFD1xmhafwbcGEgMbRtTcPaymz",
  "key42": "4UuRoRkXiMRAjv9TKRDvSguxmxUZRGFyEvqDGrneE5jSXm9rLZ3fZvbHX83REGHWPic7Az37qzCiDKPdw6i7rBJc",
  "key43": "2Kcu9d2Se9iK8v8hueo8Ur8XBuNsviRvUqkrt5Wxaw7fmtFZ9pG8igPxXfg2CL9dTquK2bGYFF2ENB385y3eitRo",
  "key44": "3GzK8B4cXCG5HB7zNAE1u4Rz55FeXQyN94Zpx5QjrChu7GbQDhdkUJLtnuEF6QpmusYeR9MPSvetw22mD915Jm5c",
  "key45": "28DVN72SknKJhBrKmYKYNg2EaqtjqGXzj2cWeKGJxLwypDFS95SNUp7PP7e8V3VfFu8yqTCZdcqni3WEHU3Bs6zF",
  "key46": "ZQvkDLyKqvosDqifxi2nLqvxEkaSsjM3pgMsABfTxMcQx2JQVVCjF477VjkRwwWgwcemTVYJj6qyMPHkvohqRWg",
  "key47": "3NFFpNjXZSQuGvGUGgzr9pdCiNPHRz25ih27LAgWnFE1j3fjKA49GsVUV6vho4j22nyoEJFq7PcR9MNFrrgX7aSN",
  "key48": "4dRTAzDmaEWbE1EzUDpgMjgdi7dVGyNrQR13WcKHk21baiBMmTruLhfd153ibUC5fEHA6nrGNPByHGBXXafVfX6H"
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
