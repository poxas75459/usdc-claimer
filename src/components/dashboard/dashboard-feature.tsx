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
    "4kA6F9G4UpToBDswueJwTDEhmjwnzfBn9QVrhR2CffGNyNRzzjffho1jHPM2gjsAEdcXBNgWkSd7SucMtCsyBAFH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VfRwxkpLLRwEwBY67gyWjHpUG2CFXVwP2bLN88TTLvp4vvJoNjLWsgsNtqEgvSbwCD7WwdARiXAEaPHQLCdN1yA",
  "key1": "4f5uPwDhQcZ9kyszWJcFvr7E1siDbMiL3FBfj7VHUCiCDBbkoY5aS4SNPoyZg7agYfaPuFuBtHTNt8vy9VUS68xW",
  "key2": "4nTjaRaoABccnmL2bwsgEyAeni3DPYgW3fTDa9iTFmvo2te9dAyYaaju4zPE3bPVFSqDyau4J2ceLfGRGYJZMiEX",
  "key3": "2A4NziS6FpFuPvKHdTDe5By4YzMRecbqxy5BwgqW2AFB555Rr4LViSyjfSoKG9ET2qZvcid4pfDpcF3yxPFPARYH",
  "key4": "58zsUzHZaQ2gvYqDezS573X9uuxp6VNV4wUvWQGob2nptRUJigYyY5cVc8cvUtGApmyTKMvHq3o3MM5NGTUNqiBD",
  "key5": "59C34c8esrBM7vig3earu4dKsceZ5s19BYdoAYVg1ahdUJNKPA14aDxnxxke6gepNbFxMrqLQnfNhwXvz5mt5kxU",
  "key6": "3x4hNL7vjqxZTjkNy28UH9MycyLXVmEztD8Q3UcvfR2A5Y3cJaC7iSahjXrYnmEfXrxZz6u3Xs9mT9eGmng5YVLF",
  "key7": "dsFURpkKPuErR5K3VPW55n8zJLNE6EJ1am5KaJyuRyDkrcTmtE2Ebw76hhnXAC4kbXaTBstohJtgWvhCGeXnCm1",
  "key8": "2Mj23R2CDXD7qwXtENvX5Dz8AZECzPT62feRn75WaetY6eC9SKDVb7BAWjZnoiQi9QewDMNwdHyPuwunTJo1cJSa",
  "key9": "2P8uC2k86kCeAi4bRF5zY3wkewyRusTC5BCEpwRvodBzqVi28in2TWDALFrFiSkBEpNFJ81iQ6ruo9DJtVpDjued",
  "key10": "3CEkJs7Q5Hbo8qKPtnG1LM673MRcQDWA7md3CjXheCe1RQz39s8SfkZ23tb7pfpKTAB2YcZn7vACRLnPNEMKVjNW",
  "key11": "22TMDDyDtyP3q8hjxFpPwncCBLRMSu88CmfRuuFpbaLT6xKgojsvEssxoNTVv1FmpUThydgoaAhLrLz9BuxFSRDd",
  "key12": "ZC6KRxA7auS1A8RaBBJXhmDMU2UJ17U3rSPm2nybr6wJQLpLfe4msjr2n2o8GxBru75YcwUnJF7gQ3VxWVfKxKK",
  "key13": "rGEDkJEVD87tjDH9D1w38Q4DbBFPea3FX4CJRRwm7gXF27Wm45ruGF9i3Krhm6YYNGU3HXJP64QYLoDShuzst4p",
  "key14": "fsoyxKDoYzYA4wt2FQKbKgykb9A7xQFMbpgTMvzVNQbor55qoc9XWhy17wYXpVsDQkisZ9LKF33GRd7ULG7PAAF",
  "key15": "2J5nvoJAB3XPcoZojV45hKGo418UACsdJcYNdLXCZAerKD5TD8UD9Ax3noJtd8xwbaNzCXRTvJdFTUJjpwfxDy9g",
  "key16": "5oQHaiquHwfNHzHA8KLBgBo7AYZTWsDj7mRshXLTJeVKX8MLQBGM4n5ac5vp63P9nDppCdhZjQfjzRvT9QPMo3gV",
  "key17": "3dsGcPsVN1LzQKgC8arJCuLFPdzSH7Qpxp5wuTq7rDR6AfSkmWAZAzRxf4Ywb2buXLu9qUQEPHR1cXGWNan6W9i4",
  "key18": "3VAWbWPwHnA7P9oQFmF8VxvAnjFgFBc31qUpkafm7ShKMY3r4MJSxT26rUWnxdMi4peWhz42CALaN4KhvKeQk3CL",
  "key19": "4Me78su62c7zihnATeqjWNk9Ex72rYDKtaS2Xbyf6nLMEJy8HE4vBFMBoBqXjKGLFGEGbtzRAAqTP8er9HvcJ6Ux",
  "key20": "5nPA55piief443Muo2xRg7kRPZWNnwVMVSD2hvEzUnm2QTanG212r2anNHcWtqaFCY3CRzmnArZwZN7cE8CCzvaq",
  "key21": "4nfFfzVaNqnc7aqeznQRJDJjLdna1hMjveVewFhNeoBMk2Fpo5n3Ju8fGDeEJwKhoQSVMKkJU6hKexBcT4zjFx18",
  "key22": "DbaGcYyeuVjRx9FDCrhkSCcaB2pF7Mx9QkedHC3iyprum5QDcpSntDn1WJZFQ9BsrjTuyezMMDkbSVpeyHPm9QM",
  "key23": "W9tWace8JCc7YMQBQh8rFdBDgWzSBxGog8LCQfdczsNAajFBiVztsUeiBvX6Pg1szmMzwAsD1sQKECWavhtFU9w",
  "key24": "virss9cL8dPJse3X4yigbwUZwHYYt4fks5erz3ppEgQt7tPsUbYFG1htNewtchYAU8EL2G2hjZNdvtHm4qevVY9",
  "key25": "mooj6E5iV6CFBbAfRUgbGF53GwayZMiK61mWHognAKU5xgrt1MLVBj8uQXZWEKJYzCNiTsR31Dj215MoYQBjXxN",
  "key26": "5EnBZ96v7352xLRGvkuH4YvWGMofzd6oZiHQdmoMcUmh88rvDLqgMuz6Vnobp4DJTmsNJDooWB2LASNEcEia31RA",
  "key27": "4oM3z9SG9d4E4Py5Z4K6TsNvdmTGKD7mFcGLBtpX5VKMcgjnKpqgqCt92xCRNuyBhFxHoN7s2PGBAMfmbEgpJz2G",
  "key28": "3Qu7MSabdrHAgtHdAevToxEtsrB2EmvNNHcdSbK4u3V49pupF2vKmuxr6eHhaGjznQuiX71ggnDgQRwTYXbpMtLk",
  "key29": "55Evv2r4z34PmhgpUV6JJ5fkbApKj8N2LCboe3ctcmvKv1vurfgyJpSFMZoqgpKfRNwhzAoboRtJq3NksYUQ446P",
  "key30": "4vNVnykFTHFgHkWPQRLe8Ym6HmUfY6sV7ZN6FfctkKanCf5SW7sZYLpHeEtpZu9Tyt7iQu3KdHbAZf1k6dZJVRn",
  "key31": "4TXAsFZ9bWtNKLVPNka8em8R49MvdUXNtLqKP89jy5TF3HSX9aEQnDBE5THBuurfDYNBGRhkHByfAPDfW5DyLqfD",
  "key32": "5prVFrcd7Di6BMxiz1gRNMZoVwGrQxBxLs7BTAgR7gKDesirQy2M3uCagHbpchLivHEY4GJV9q36Z2i1ckWK5JHs",
  "key33": "4cuLhmzYrc647HQuGirxi7Lukdmbx6Va2vKrczj5qtYxK4sdVGjS2t5oLwEGDgo3dTMMoHRqkFr5GhNPHEZybgQZ",
  "key34": "xZX77zUuY9NQBTkyx3dW7p4BAACfvvqLQRc5cfAVYKhB7nJs8wyjCVAjJKjuQ8sb3zWHvHVuLzSztdugpxuYxDK",
  "key35": "3uDUBNJ6prru6gvNWP4nHSQ1kYNqnNSVb5YogquKUvUdVFUAmV45S1srHsyhA9xgoAJFm7jQKDnzhuLAQaCTLwLR",
  "key36": "RKcqSTXfhghDqVV6Em3j2zqsW4aqb2BDsKFMevpwEKNsRSG43AfAyCTY4WhnQtMkXfJqcixyWdzooDxFq4kW4tz",
  "key37": "5ZoXwEdNGQ7iZKJJ2VGyBPkMYDHd95U1gHYVGDjiQ5aWjg76JabvdeDNpdMobJLXVsKdnvUTmbGEyoS4znLtqEGg",
  "key38": "3kVdokjt74bw9BvBtqqG8jFVbh611inBtnAgX2qAj4cjQTNgC89o3fHfyQQtmC6xENdrrDMPhV4pVh5wcprQYkW4",
  "key39": "29B7ecy1p9nCY8hy2BAJwisjEA4ztoLixkQsGPxBUa9vrJ2brGeitZZEpBYgyjpX6k2qBNdc9Qnvf6ff48TvArzx",
  "key40": "57bSfmb1bEvU6gY8dQXb35kStTCfQGaEwidGYkezkC63z7iFgo3xihJd542xjCGoQz3aAALbp8LuPGSDqQZ5ucjk",
  "key41": "C9rBGFAfzPhvs8SBH8PsvCXcXgfAT4v1Fm261auQEnNesa6Ue2g5jLV997yfKokwtJRCoiRfnuhQDC9SrvPiZ8J",
  "key42": "45di3QGmP5uDsENdqcUn3AuHttJRK6AiPbVdwMFjActAmi9GxKzP2PCVg1w7rSLuXrNxMzEskWJYyASKVXLaH3UV",
  "key43": "39VaxZvQdeiXkh4Dau2cuHDNmgwYaUzQK52waKt41mJB7Cd3hYn16r8exNPTTJAEyBvEcJFAsbWLRXNz3hc6Rj5w",
  "key44": "3AtBUaGgWA327Rf8jKsH1Y2PFMo4KGwM5rkqC2SMKm3NAMfsBS6tSy6Mk6gtQCEHRD16kSpZK4VfYGR54WZGfXvk"
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
