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
    "5hy9S74KiAePTNMHtJ7odS5UHoZ35abZtHmPr36vVhyc65rSh1iZcBxzMfGPVhak9PgxTji3qKgRQoQpKRnhvZ6w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RSWi6kg4DHD76Afo6KwM5tfMUEVJUY9ZrQXP77P8cxLgkMZammxzS4BJmQcpP4m6qdjEJSE8Za5WPwGuHKKt6aa",
  "key1": "5jWHQTZ4eixMpzsyuidV5zaMvvfLpQEezFdTw56EnAURaYNefFh7t84oLe54Fsvmp2MbskYypxmwJH2oHfaYYdqG",
  "key2": "adQ7eHpWso7b1ko9oajrVLSyago4v5uzuioWZG9dnzxbzPg9dNDeVmMziyt2QwbcSUChSPTHLkTNg1ZBqifCZSB",
  "key3": "4uqEmjKa5wvGmiQa8y5W2xPdN4EvdzqgspJnsQqXG1KKNNnEoEyxKFrfUHZun1EukMygGd3xpgBzykLG5AS16BZz",
  "key4": "2bR9EbCY49Lb3qPiRwJvuySVgknFbMQErXEvN5mQCnNTxNZoEjFydEpkvtqpzfcUWDdAoLJz8PdM6cPYeno2XU2N",
  "key5": "1NpLhfychC4K4Yt9xuuRiqosZ2W5tJRG6xNoukMHNraHE1X71ZWnU9rYCSuRZWU5mYkezRg2HjwLPJCzXbDW3Wi",
  "key6": "vXvjk7ZzmcqrXzYtjYf4kpx12fqvA8LEwNiCHreyK287Nhc2NWfaer53UoKMUhqN6JzNpD4ynQSbydDMM7cTPXB",
  "key7": "5A1VNkjj8GCeG2H5xiVaYbNj1oaDo4KdDGExvThKMb35TxkEr6VrEX6Hy5uJYub1xXwmQXv7pMFABbAHgpWa14UJ",
  "key8": "34FM964dME4PEx544TK4xVhWFQYbN9sRYkQwidcaZrCrKYEK2DxowyiSckkuWkZyu84E6on9GYn8W9tBqi2tDGdh",
  "key9": "3zkdtVgFuQm2E8PzQ27PDsAU8LVBudzrsuRxQGaxkjLSNj6autW1MGM4eRPCTaXWo9cjo7FqEoiBeS2fVPv2Yg5A",
  "key10": "3Hehnoh6zzUgnjQoQwYbdu54uKqanPGxEMjtVmPtF5QEy1ah85YpEdjejgTbn9v5NXnuSPuLGpdFRyxWwjpTz5Q9",
  "key11": "2czMDsLiikDSLArsYcp6kQpsrVYPZsXu8KWGtm6DfBwbni5M7PjyAc5Qjnf8fz2xPFDdrzhqxecBGAMRQjjUBYJc",
  "key12": "3Uv8p5hZeVujgQKMfgtVCWH8iQujKfE5kG17PVTRziMjgRfpVjYtCroCxmS3uBtGHHXbo4Sj3BxCDeHt4W2yQQqz",
  "key13": "i4bVR8rrnRwdpQukj6hSMiMoHFyrbtRHpp13CQ8FAmB7dFNo7mWTB3QZG7G9XCzkim9HTiRkL4ToRG7FrjCQpKG",
  "key14": "edCtQz9h3yDKHnyE6PAf72VR9c4YwZcHUvk9KrtJKvgoAuVHyxw4kZoM1jS31eYuwhTN6JCgofXEkBSNn2ey2pq",
  "key15": "4ECuLvbQeWYcfUpJXwFWa6UwDEx2Pggrr1cx1xUmZAMeyWdtkM36akr2odVaboSaFeWa7XZa9h8GVWJXYv7sT2Cm",
  "key16": "5Wu2mPbunei5jwCqqWnB4GtjKtmbhGfQ1D1qxbYVXsKGrnenRvArgRFDEfDwBVHRK1cwih17DoXeA99bKSsqaNUu",
  "key17": "1LAeEutWKHjeDwZhKn7W83df8t8XCVxvHhGuTPw2FXcbPBfFfN5bmLUdZN2dXdx2Xh9iP4fMSXrxESz9Mv2LdvF",
  "key18": "xfPwVgWCuFHhbSuxSnjbvDULCxRWtf9dwou8cv9UgH12ZinotwJdhn6jkdBeM6f7vWyU55jbSeZgVjHpKBoLxWZ",
  "key19": "5VTh8ek6topjcx1i6cjPA4WjELF8nC9F3DxRG52vpMzek9m6asQMAMau7a6segmAjVqgTYYMrH93bgCdStQxonpr",
  "key20": "3spFrWsLourXoYUeruebYM9RQRFGt7GUY2PxQSapGoxjmnwdvmcFR1pGCDrXEErN4RNNuuqYGpwk1VgPGMxoB88t",
  "key21": "2f4rofkdymDk5H34V6CNhM3P6fjxQWjo1v4ALkQgXemQKbUjxuFy8vPp2J53D5kW7eEotPWCEcyp8RUopT58mr1A",
  "key22": "omLvEHshxC44jT3SFsoyxz9wvTdAjwkwzJT9VF2GkhPdX73iSENUBGAF4q2E3rqMpXoN6jEbh1DgHt2LmeMdGw1",
  "key23": "4eivVGYqrG5to9HPVSYtbVWUZ7fTeHFcaLpHJbg9GaUBiCNwuj7RsJU74EtFS83uW8kR8iZARJv8u1YZTi7fDPmu",
  "key24": "4RSidN66wgpXxzss7XudtaVBpn5pyJZyGVLFbdBP8ZbupT4csTpfkVv9ogZPuH2XgEsWBDdNjqDGx8GgrNgCDZnu",
  "key25": "2adDeAi7rSyuihRjCLAMb7QGJTzccEFGUDNAxreWktH4Vq56HtkWTXEa7Sujb6a4oiick3oCRCTJi6Rb5SwAtmWa",
  "key26": "3SEzVpo23US8RwhMG8a1xawcvoEoBrqH3sQBsyYt3f5S9wUFhZPhfcrkR3hwVB6WPiyTwDKML4o3SPUo6yY4hmRY",
  "key27": "TC1UfQDt843UZ3swpp3vzsVHKPCv8gzMS6kgZ46mERb6vSyYnYxUqssXuUC9iaco61Cn3JutYSPt5MRoFHNTSyp",
  "key28": "5XNGxffe7PgYuSsNEhod35XqqS47h2LSjVhw4MEHjqrvtixt3UZNKmaprp82KAZCbd71x79q63ve7r7D2s5GSpcj",
  "key29": "mRYpEEY3xD9xi1REQuhkWoLtWRCKVMFxRCvyMoG3RSMFX3nRAAsMCp7AYggMVSi4gTw8aAMAHmkRHfCrSkkNA6G",
  "key30": "4jgMpwQmibkx7oYL5ftX9hsG5qjESD7KP5nr2sF5tR9b3eXixGWHj58nAnhMNZHjeZm7X4vK2kM4wGp9r8itvi8F",
  "key31": "4yftcDHn2HZoFdg5u2mWatZ1XsnaWZxB6UBERjAGvNxqT2e2Tp9bZjERqNiEo5v15GKaDfPDccgw6buebRs7iE3d",
  "key32": "59H6WPxKfZtiqFdFQCiyxVqpEyPBVAhU19eHFQDm4Cju4qyNwiG7b4kMp7HwMjVggwXnNvkJ8HVcM2nC3ppn1eHF",
  "key33": "4iANv1jPb5GZA1cDfXuYinSs7zsBy2uztpopLREvhPvABdkVLdSdUBJRkbQRv2RzxPjNLuATunGwNhaoftrJzPKc",
  "key34": "mGjzxjCXNurbJ2engF5XP9SkyoCdSAkLdvh9JebYfmV6WJ1Z1D6u4wnGz2mJ1xaczM8saPbWJdTpGWnjqCvraPx",
  "key35": "bkHQ6XnJ1kaFtuqqF7i4DtXdt6CaNt3Ud11EHmai8fvLXyCmqmgLKyHVpAS32Ku4ewFz18XcQaRG4SAxUVH24Pc",
  "key36": "BV9qp9Ab8v2LSSF17YW1xt5CgrdfLHFJTRdT1pWERtpLHcWzUQnTGwFWSNd6tTgXv4Q66YxXjMCtXYtp9Mh6jth",
  "key37": "5ePaufMLdVFV6ucZCNPT8uN5iBXz7zJXwefHSbsM32NsKK3T1rHkkXSKCZW4qy8CS8bxV16Sa35MB39gPdtGY6P5",
  "key38": "3bHcpKDTFFpxgU3CGwn6Sk7qPvNtJzRJoJYmB1oz6PHib1rbg9VKQMAzWLvi7uS6N5r3pd4r5QsCY4FGtnwwhwfz",
  "key39": "5wZJk8bDGAJt9mXAoM7V5kYmGy4AusR5YNFvyN1Vo284Ka1tPh9sB2PeSbE1n2XawxhzukgLt1vaeYHLcj29bTpJ",
  "key40": "3nTquKdkjfBCid2W4dKjvrpZzgi7YbaYaLDXMDGJyoyPE7MUPTx56bp6U7E16t1Nd2K1qdZGw8LKneRCmTZuzM9N"
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
