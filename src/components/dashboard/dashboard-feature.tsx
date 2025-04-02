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
    "4eV6KnNqqAVZqCoeUVyV23RVMjUJAqzexg9Q6uLDKZZxKKTUanyn4JmmJToUszfoLNF8Mp1wtkLd5wvBh8kpcgbc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BqAaXsauahokhNbX67ZpDzH1Tt55hcaSEiqR9XwtqPXzYHLMxt1999y7NANQpnBYLadcsJWPY27VLaij4eFq2KZ",
  "key1": "3j7LpXwd7jP3LDkXdLtroidnaZVkUyjJNFXxpGNzfRvWQ6jBgUpqZKhJxWhqiCzgki1yxzw265yWiyY6smd41HgB",
  "key2": "3Zu7Rh2eoeVNENicwVYoT6JECq7y7rzZQwRWunw3YYC3r3NDVXhNwn19DZth7rECv5xNfDcF4YYWo769oJ8skLEb",
  "key3": "4aRNRB18VRRJUrQ3GQiLfAj6NUnbGuT8DKPpup3aBDE5SqpKsqAGnGSjziVrD9aAxCYSMwoZwNDiiDkAswSqDvC4",
  "key4": "5Jh9VGyS3vs7bbg87wDBGsR2z5rF2KLLK74D14Key3F3NhNd5SS29Ud2WK8o1dV7FTfr61VWhgGxexpAtJHFmpMq",
  "key5": "5t62LZYmqjLVpEHWEtrW76EA66AfQuUVFMaW6v9Rx3Gndu4UopnS2ztoEWX6JhMTwpiJazwRo89HrKgFGnJ9KNgY",
  "key6": "5waPmsTjnnxjBJFgZJp2Y5gzWMoGEpb45c8eP7MVVRirNKtjQG3xS6rSTec6pACmkzLpoEdjkmuyxh9aaeo8wBQN",
  "key7": "4rCKgU41DoXJC5NzUQzPJP65ULRbKtUPCR7pVwWZP4QqEmQTP727ViU4W3LQ2faDbHnMZocKW4emMzVJ7Ny3Xwt5",
  "key8": "4PC2gZwnTbPwupd5VSVY72ybYJM4ZgfM71PAhSbjtHbXMkudd46kKBFhNPeo5cmcteiibRTJVbr92Bg1KkxeKBkt",
  "key9": "42n2hyNhc66mAziNv7WbNA8aoKQ6F4XK29wvALx8YFbLnsywme2VCwMf96QeMobimW3nGbekydWke7m8onC1fCUS",
  "key10": "37TghDHbjaULJ7Ltacv1wTMG4RPNCUoY7FoWCVnJQhbXSZ1ex5zrgUJCJo9NcESv9JfAoqV6h4tnTfMMN8j9XXrU",
  "key11": "56A1M5ynH48xcRptYQ8kLspiS6oGRB1Huu6YHMpMkGCpdscpempSwKUfR1zFJCH6TeXxBChJRz4PoWntTXKB7rif",
  "key12": "2WLUFtSiebGaNTrZCLRhgaAQZ2ysaZqo32Y9rPgg4tS4g8BDLgZidmKsY9Su2emHbcpebTy2E8ik2spfvaQCXa2C",
  "key13": "35PoXxwMuuTXPWwPuZY2ofxLePUTiHUJoqPhKXAJF9Twj6sPSnrFdKZ7T75fpeDcGjKB2sLu26qabRzMx17nN8NM",
  "key14": "gtCaYPPHvCptZmx7r9372SFTzSBnLzKL74VRdhoaHJRjxPshfekv7xCzNMHZWj91sa666cHFMD6fdPjhkMQapSN",
  "key15": "4ysobrskNZeoXZ6RxBEvYn1owzW5obzAvzodVh7w2vTRAMavTWejGQ7pKdt187ErDDPahnt9PMCfZbnrZeHYEuUv",
  "key16": "2rXoGZrQismcP8vMGSoTnGBk8NPekfUbmWS6B3UckgcEXbJEpTUF47Y26L9mv12xTN2umviNq7CLMmTuRJvwGe8b",
  "key17": "4yUWwbxvNPp1pJ58obdtzRCUwbezDXNpBzAx21LE7xCU3iZATsbcmjsVnuRBYqMytuJ882x2uNtQT2DijcaxeyUz",
  "key18": "3WV3avuUM3F54tM5UruzAu2q1gHFDxhMMYv5cDwLp3TWZPnwvbAVT2R3hSqocrRxMbZXHVzMfarjWFpA8YNe5UWn",
  "key19": "4at76M13WdbeycWpMyf88HWSo5kKGd173NR293iqasNgs34aqX1StSJ1oYfzyRuU1uPsoP1StWkcxkA4EQgajSKd",
  "key20": "1NbodJ1Q2FGtjJepKzViQr43tvDoSdvZc4FVdCvqdsWCGUH4LnmnEaKVVkZXk8ikgHoiETDa2Rb8mf2haVyMnSi",
  "key21": "31dxSiJGphc9vZcMozbktbBDC4EWYYCHnjgtdwCzwqVkwFXXKiUgmZjENVzu1LPzPB5ShGeyZs8DymYnmShWcwZX",
  "key22": "2g4PjjL1ypmvSNJ5RB4HkApn33CbbEnvLtJX4L63sDGHNQXUNKWjwHeV8eALZjbkexn9jPFienZm8A8KDbr1XqUS",
  "key23": "eJxbrDxN7PhV39GojAC7DVdnRoJcANB4sUusBEALzFBN2SSFHZ38qTFfpVxCt7MmUDVxLpxCVV5PJ63VJvK3mUe",
  "key24": "2DdsuUAkBE43dCdWJDdpuQHNMTQ3FxMSohPpKVRJd4ze9ouXXefCynEakaURzb5wpLKPA8tv7VJR6Ybhz5gpRE8u",
  "key25": "KE3TWVrKz9Wj59ZR472YeWui8KNMPspzTZd3H3PgTVZRBAWzkuNd3g9MzqxosVtah1mYGrmimriSMhu7Z64RMLg",
  "key26": "5cvzBDfyoCxzBxujs3mfBShYVD1XXuKzNFYFPHqA4rpgWNtyjif8xgB5WxzXMVstK8qQKUs1h9TBR7DwpSqFBzXk",
  "key27": "3Qh4pitpavGuVbTYX3FvBDroCqpYuD7B2giw1DKv66KFeaEW3UqRYBoQj9txg48GsFYJi13kw6ifKt9aEVHzsA7m",
  "key28": "2L5FQ7aYEdZpz7HubszTkwUvjDBq2hAdgqTJBDruy2jH8UTabsVAjtpREYZZfDbwHnN2myXXmtdP3dPmUncQGdHF",
  "key29": "213vUNnRqepCyeFbjW4Bdi2orfdXk3wZmHiMCETHo6SCe75gGgtuhMa2LRwHuPcy7hJPr3QRPQxaC18mEPgHQkup",
  "key30": "3VZSHb8AinTcX27TvikShwAR9KsYC8ny6zNKyPpfzkQ532ZnY1wHgnvvLVkhNQU2LJ9A6o1pEWf6Jux7dtFAcwD8",
  "key31": "3JhygRy2ZjawfTAAxxc9CM3vWQZNW3b9DFZyLB2DXhArqTSYnZATqst6DH9DPV2SetVhSNMYSSGkysfm6mCwwHVb",
  "key32": "3HBoKgtxRmJkDxQknojM2oSBEcwSttKeEVURvt9DcKeUEZYQd5MHbwfPwMLUUkdHriUdLDJK7ZibPcj67WoA5GgL",
  "key33": "421kyRs8afDboKpCf35WtgFS37f6kMS6KRz4zqYgFdvRrtViTifYuVAGp14ZHUEarPHeZUzhWHXcB2rACnPzWHVb",
  "key34": "2W7KC2v9uanQBLbyF7hvPMSmduress7ZnZdw8GaBzgm2BB4geCZRMr819T9bYzj6xu1m8GB5mLYQ1igMdUZsenZZ",
  "key35": "FbW6mWi7Joo5wySF3qn6Fm1td1ppSHK5w79W4AKv7rRGgMbLuea92EZu4tb4JMPLV2XKvFVnvs4AbGjQiUsqh8a",
  "key36": "3JEA5Qko98EE7kDa3ca71f9axiEHtYUky4piBaHuGYfXAmTsk2AAsAq8uxMGkHqwnNjN2ErsNVbzQ7UtYU8rg7oX",
  "key37": "5zdgdZ64pC4NxXdvSb3bse3wb4VxBu1Dq8HeqEfwFkxeQo6BuShbS6iHWd86U9yujzcVeHHPgfb4ChCLWU6U5kh4",
  "key38": "56LTRA15eVQRbXhypGMx7ccVPdjMs69g3L6dNQKGCsZk6A4LukXikhcY7DFJpyCHM37dRnPPHFuV9vZQHDgUEeQN",
  "key39": "5ifJbHyZ5YD7vdrCWdjmBnH1o2h9pPFPr7416TKgsAaewHj7fgeckzkyUrEBhgam63Ln4M7K7oQZyaqMN1w5hJLs",
  "key40": "3FFUuimSnNZKErpYawqE27K8S5gPco1Di28MSAc9VjNEahu8Ry76ay6qX671MEE1UZvLfFzQzPuqU1bZ7sh8soir",
  "key41": "2boaxDWagtHtGkNvtLZLX6QYof4bdowVta27ctB2Xbv7MgGi2vrg5h5Xinq5BnTV8Gzh848iBCeGj7HoUh5BzQwe",
  "key42": "4U7nrMWUN1GZfEj7N8LEhE4anxNnP4dhAcmaVHsd88Ny9cm1EGNUWn6Hsma72ZscCmb6qNWjNMMyEYjq7CuHGbKD",
  "key43": "UrWXsosK38CvbysHZKUh8FzyLJYPJmLmxuL1zJMNtwZ4iLp4CzxQ5NrTyHLp81TC4oUFt45q2DrKg1SYYodWH7c",
  "key44": "5gntafGLqGYDV7AGgdVVTb2vmVsLbtJoxgTLQSZHokWYxzNAa4bevW9CDBYWm8vdg4U931puNy558MbYYfZxFwBW"
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
