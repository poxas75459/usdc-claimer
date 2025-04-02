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
    "G3Liz8Wx6ejAwvafceFdLYpkH87bzcQdpHi3KTJWngbdkUnQwo1JZjLquKbkp8HV9ZJBJ8gZd6z25vQi9HjG9ty"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KCs5fX5Gc8rK86ZKEUMAFEMrUbTXrZB4XbqV9tSA2AuKqkdrdkfy55PZ7V8KpRTSqAUA7SYrz2auY3VrTgCZ4wN",
  "key1": "2GQbex2uKmD3uYReMLndSQUVYyz6KZewKCk15burPS6j4Fe8PRbEdDByBox8TeDM92a9zVxU2HK819ayGAhjriAf",
  "key2": "4MQvYP7UkVxrXqD7frczFseYBqiVfNNabfrq1jebsESJCi8wSkXqkVCj8fBNisfVimaBa6vBupQNsxUGc7xtaTip",
  "key3": "4CyhVBHnSt9MTkHvx1Qg1AhAuiRuLLzNJm92WfBNQtSKFPzTVaPUkpT4dRBHTuqCFYUWHkPNHKE5h3Xca9WF2rx4",
  "key4": "2VaPwozN2Sw7pcZvc3br4p3Htr67c5XqLhMxeYTHrp11H9fw4msHqFZSDawyJtwPaVYKeYDSD8aqULxTf6XDpWM7",
  "key5": "4cikLm7iTQuWgfbFukpqvLR9EAQ7CHDwhezySzeTnJmL3PtPCMnFT9T1Swb4pk1uvtAwiB9cx7J8v7P2kiXAomvy",
  "key6": "27DzktCFmLsiAqhghNkScWQmGgUbmYVrCFyGEsWwFfBJjbcCZEEhkHfBBdLWPNcv8mW8itFayEHZHsPbPPQwZoKE",
  "key7": "2B6WQsqKze92AiDD6anxBt8hA27VwHi2tSKT2eEd9KQ37PZLwFLCuFo32c7D3aj2crK65p3RPH7qeNmMLybFvkX9",
  "key8": "kwRoJ2bXhGxnzrVRvr6gUNAd5Ec6Npgn8f2e5Bdr3HiB89FkjwfjNLzJm9CX3gQtUs5uhRSib3fi5pU9VhPfam5",
  "key9": "5Lqd8WeFPS9ZDUJvaUWNLdncLcfJUZyF7bqD4Dj4LBYt5ieYjZHv9XaRr78bdS3jNSWnt6Rhj63yK2ismAt3o1Nx",
  "key10": "2hcJaWeSLPFL7Xjnmwf8iZevAuDRb3hsX7JLd8iNBtsG96Y8weGGhZHWhsjWUyX7bqjuvYT6ziqEFS5ittYXnQja",
  "key11": "KNHpQWNd2L35pmAAduz8GK5VZ75FdFzJLrWYXnvbuX1MLx1J56EaKBinANvegSMAWtApBxtH2YVc7rvz4iE5qJd",
  "key12": "39Q3EiEq3w922YzV3dMBEE19NYK48LcXvw4JhQsQto4rinFvabuYxgn2nJJZsu9SptrvMPHLWWh13zeFCMzw7hqU",
  "key13": "4zuwiov9scrPpGWS7AazjYUqZ5tAzUk2jwMErTR9TK4bywTXjmJvfC2yr4U5gCj4FqP2n3yqNjYES688jim7rpt1",
  "key14": "5NKQjb43MndYT6FJQv6HFZc7b5gM4Y32Sxx7Bw9NzvwPA8oezubU2XjR6NV2eJACM6ioS12Y3DtkHLJnmAmXoXc4",
  "key15": "25GvbARknuUH6aeKVphNAFx3Y2GRZTcHtHpGwhjEQuugt2fjeenqyRpKH2iorE8UoZLJ8JWjX7jgoDsnTXMjJKCA",
  "key16": "24sc6jX87d6wGa2hNae3MMB1acqAd2PpLR9TS3cCCPiJ27xG9rqyUtoAxb2STPJtqX5v2tYyCetyKiukF1XhU5qK",
  "key17": "2e25PHnyV9AjauvGCKHhj7rdU3vrdcivZmhPJS9KpPNcAGZ1urQL6pUFw4sVfaPdJTVW4rxE11MGg38SNqUgZLnQ",
  "key18": "yxgvcm5zN7Qp6NRH6gfK7RJSRoniDErEH5MKo5kheMt3vmCQwLqsY27zDEqoVLuEJPA4mmtK7N67QJ9GeS5exrM",
  "key19": "59eXVfqc8ZESgFTPWWBp1vhaGrM1ZNZixcFpCaA6SfVwuroNsVrJ3wqwx2GBVyXwiWCwiKomyFsrKeYEKSjfA8eP",
  "key20": "tkRoUh4ACy28hhvd6gZcHBrXca7U8ZExeZoEw3MP5t486sqXUFSC9S9mRHhS5tH21wtZhSf7JjZR794PBFbYgqi",
  "key21": "aDKKHZvN6SW4sdwjJAiDDWQFo6DpYUCXhBXUG8uGPD3fy5NY8zidzvrgqBRR5j79jNekbtMCWMFR7XaLgED5XKN",
  "key22": "3Um7cz8ZB6tPZoxjUobVf7KL5dGr7qwq9QbpEnbZg95GHWUemhsnpJ5MV9SXQhSct2CYXhkH2DSvRCYXq68d6fsM",
  "key23": "2brUX6Lk66XFJwtWpdLpypEvnenWXuFP74fqC9Fz3f8Xd1VkTvHaiRj7GJXFZMRxb76byKf39wPrvQrithesJSEQ",
  "key24": "2JxCqxHgTRTwkt6qD7oC3UJ4QTeoDfyuEBidQCmoxXrrWKoFKg9YxvKC5FejtZzh82wHaWrkfsQQNqRAtNcN84hp",
  "key25": "3biXP3HRRTLKf6swYR7xkfHYUErDt9wKKgX1XJvUGtnNDGtGRmw8LKBn8pZfPf9bQXN11CBA2RKxdd8hDCvJeAbx",
  "key26": "4y4Pnp73w9AeJp6oqN5Qum98YqBCRbbnRBJGMPU7YAJv1gnuXvSRyqkQFFNEmXiJP4DLhDCCn6N8MktdNc9CKnQf",
  "key27": "4mpe5YoYXSqLRqtDzRdXNC9S1Tk9p2XtUUj98axwRgAqVpZiJ3x1NmzsrU1ypVbiVvsfHQtMqhMMpa5WmjqZVyWn",
  "key28": "2w4CCHriNPEi6u7pXRWL8mP1KXTKVdGQ4nYxotcECDoKKY1fWfdg8asFUgNPTzvFSyHLuZpRnHkqwwqLNEuMAryd",
  "key29": "4Np4CqTMyqXqutWV7NQh1mBJcd6faTMDatMzsWH4cdMYYtpXJqPXVvgBNXG61Df1ukTmpHuN7RjUSsNSssYMj6PW",
  "key30": "4h9UAe89fm1eSVh9aoqgA9X2MDNt2wbEHVDNz43qhAjMX5qsCHeqfVkSsRtBGHRNi4TETYn7EnSdiAMAHGdPnPLi",
  "key31": "4FVyX3D9m7EDKw3hc6HaoQ8PEbDxnzyJP8EQmNG6rXs891gciLnBQBLRMB6XZSar2aY6FRTRY3PtiSLpekBDtSo1",
  "key32": "432uUXcmBoG75gq7Q8iLjcvzP5bDFfup1aa6YmV9C864ZZzK43SizcqcaQoeDrCg1ynp48j83ZjuUK61vxRQygio",
  "key33": "3BjHa3h9taEiiL6mDFGWEWGebHyjtJJqnETBKDHRJpRxFk189yqtARH842MzVRPnyeS5spbqP7h9E4pv7WwVZdXX",
  "key34": "geRar2CdHWLetjKGaGtjfZX1rfYG1UgQ7XstCi9zewqSQTTjgouWzXehpQ6GqnhHdrhTWx4qnBc4c2HLFyUARCL",
  "key35": "26WGbx7LcKdPtywkwqMBnfXtXjFdMKUiAiUT7k88uuMEbW6kk3tJcRNJpd8jciLqaabUAGxM5hewia1xJW77WWvQ",
  "key36": "3VFRtwiuwvrL7qYtuwsGPmrUHcqqCM2zLYtDYjGmuYv8kaUChKpi725vQ1Vr8TA4HR8UB3H3QKpQH8kxFogfAqfM",
  "key37": "3YW6XkTjBU2dNUJ3JqTh19YuoLRAZWH9mBe8zdc8G1tAd4Ptf5LYhixZunjX6cVDLSzLxtkKemmz8yaVomjgtsmC",
  "key38": "4DeK6dT9yGdBCUPbWCqyfJDEUqVSWHYMNEVFvzCPrAK8qbfr3LUNVArHDWLW9bmUC3pbuwwqLS9rsTFh3XujCaMa",
  "key39": "5kiJG2MKFsZSTcB8tTg1PVT6kYm58JgWwdBAMN9qjc8HW7ucCcm5d5h9GKqjq3koibC9CWuHGKNnZhict24hSZum",
  "key40": "BxDxkkVc4jK4muxPKKXHTghG8yHtfQdLSehb34H143v8ic7rwzDyvnmiPw61P9HNCWuimJhwjWi1RSvyN5qy2We",
  "key41": "2vzo1Dqvm6V5oHcq8kd7KastnwK79cKuFQWG51rJ5Z2hLJ96c77YkRgGU4FpowFvhvU1zKhsnVuemDmT3r6AH91U",
  "key42": "42C2Cx6ikSTLcP5F2X1MsSQC476Nmx2pkVbf86Aojc2fLHAstsaD9CBkgUCtaenZuxNrJ2Siu3uM5sZhja5KRtBf",
  "key43": "GMhxfuXKSMHBEws5LHS8BhWAhCMfAU8ZBVPuSWjdLh5stWpvsPjccB1cF7bPoxmvDqjujrDMD8SSBBySy1edNoG",
  "key44": "38rfT6ow7pWYUchMGNHhBcrt2aNj9uy5fZdunAZ4RQMZTSHvUb9JRQxXPraoU7RvyHgyWNF8xW5ydSnzFv6BdmHM"
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
