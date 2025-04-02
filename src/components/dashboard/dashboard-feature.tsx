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
    "AjtmRVwZ8GCvhuRT7Nqh6p9ZLqhFapsedQHrqGGgwWacCKhzD69uypvSXcDN3AXnNv257bPq2XajGwW1XouPaxb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2k9vWyqtPTQD4o3vVASkWWfBV1c9gNA6J1pDdB7qrGVCd8FowG6fWoccGbsePATk5GY7ywhsFvB5TDnzB7EoaHK4",
  "key1": "thv1F3XQ1KHyMGeX2fGnjA83iBaq4BoDkWQrDkkPdFYuLaehMBMHNut2uJLtHpUAhTpkFmm9b3N51aAjzT5v5vh",
  "key2": "5VSqfbWQoYiViLnDgkhzRMLvK92vFDS8dxfT7MqvKyiPcFWNzedVDKKMULA4i4xzaju3WYaQKtH3mHMrMGLsa8W9",
  "key3": "65bZWukv9bQKLRDAu4GzQe4ZN8sfFAZYQ73YWpTbe8gzT84KmGhrX7WG9hLf1CrNcTGmER5n9Sm5t3MdUAp9PjHo",
  "key4": "4EnmVRsK4UdQVJQ8Qd4xX8yVCe3GnRfTTzgBobLrYxsY7gtSfiUUzy2wJDmD84tKAfhnLzJap48F6fNUxS6PWbMr",
  "key5": "46hcbD1NsnAYUwpGW6ccGLE6V56skyhVwyGsEJFS9Ku72FGUPucMRu9XePthc1tt6y6rgKveZL2LMDxmahuCD48h",
  "key6": "3WcMrRxd6JhJFuZbwN51aSgCRBAh8TTU9bYzGdsn8oA53B6pP1ZNocGoTgd3XSLJq2nVMQAYDuQbXX9uKVdkMWDu",
  "key7": "2EV2vr8CLNaf8YgaQmmqnt7EKdrdfF5dmD5wuJA5VnZevr45Mz6G3LgJcpxKQBGKuvR67hZTHMptpHKEZ11KBaWE",
  "key8": "4ACSB1wMp6ai6qBqbpFVXffP9XARD7vw3PwFezFR7E8DyjDhPLoeWzHFEqwftRFzkhhirx6X98sZaN5dcHjVTbSL",
  "key9": "3CbjZFqR8jrRDYKnjxpdKNk3SsaGHqif6s7PSNX9ydgKV6YWdMghgK8neKJG9RVk5Pp1pX8k1tzmzYhhgJbCqe8s",
  "key10": "24a8QMtST4arsWH2cTdCjq4MwEDQntUpEz81H6AGgz3o69CnrFwPhsHbcCKXrXo7n3TrJEg6zmkFZz8xfYKJEH92",
  "key11": "3sY66UHbH2QfBJUukr4ipxwCnAgcUUK18eVGXhCb5iBYBSuEi1jzWr7f2Lv1Q5MpyVxNmQpxSh74rDF5mzCweyGz",
  "key12": "5Wn6kZbuhzdGyGHSPtm64tzez8rVGL18a3GYca8snY7S8E78NR3qABGy1PMMHnooJgwFZi8xiBeM6uWsxyRhng71",
  "key13": "5v4r8dDgCp8Rb6Bvw2mwNH8RtcKeUwNKSzzcj7PkMopXpuPcFcXJTo7EfAgwvFyT13apUtPQ1YJaJRABX36B9dte",
  "key14": "4q4Dh7CSNKGYhVZWFp9nphVQHg3fbXXZj18bqwakGv5SfxxbdpXibzU9TQiPxMXvyyMbKsNJFwdtvbcBbYN3iySz",
  "key15": "rGt3x18nTpbodtBpcg41gPjYuGYp8xvm1DvVv3BHGWx6FB7DGV8BSojSnWNMMEw3Xq6BE6n3r9XHkvgrbZaT39T",
  "key16": "2q5uNbAeMbvgvWH4cm6FYRjcCNoxt9ZSHfW6zWGTE1TChhphn17Es6mBGv7SUB83thcTm8FvowTxmxemTSy8de2L",
  "key17": "WeCQYBFxvaob3edHxnjUdQRKreSAPobVxgXatWeqbx8aTfxR77TBwG7DBpYHsB9NPYyaGMRgxFBtjvzcaZPz8FE",
  "key18": "48r5xwmj27gX46XToTr31dmdxXu9Ef35STnKxKgWbJyq8GbdNEBMMiWjAazQNe1scEYSA29zqDGcLNYy274mCRkL",
  "key19": "CTZk5pLNaA2jfLbfF51HSj1YqnYhvZ2RRibZbutf93fApTxzKtD1wfWcsqsEhERBW3MjXbWoZxkd8uZ5q4fftsJ",
  "key20": "hV4LP9UFMje6YwAoUEobRiHREQUAH5KYzfFuCAFVysxogKoYYKGyj67sekj9rSJf5bYzJFpBmtoH7fAu4erkw27",
  "key21": "LWUwTrMjQogyPvRQkvbTfkuAU7RymgPrnDrv7eaPF4gwtsJSYtHt8ePSgsKhJuWJUFfDaSVsbsyT1GSJWNptLDi",
  "key22": "2fm2Kg11zhKnPZ5AGJMh3xsUnBPLeKnmkJvuGqCbD9KGvYHqKXhMFkj1Wni5qVKetkLuH6zsQ42BeAVv9JvK6VQE",
  "key23": "3jmvSJ9ktjuAD9kBYW77zwhSDegfUQUQzodWKi4h4zA2fGRrMG6mDcEMMRXM5gBXMENPyAgyXFPn4TKYhovdP9Gk",
  "key24": "5gJESuTtMLLXPQFdYaGGYz6h4gNPKyBNXyfzsMiZ2BbBvmHfQjGd8hbbFSin9SeRMKtfmvQfMnK2ERjEi1nkz2HK",
  "key25": "3fNw58oCA1eAA52afDZX6HBG115GbskPERWeg9VaiFtujkLUjJYytuVzJfVrpePeNJFKB5J95TeSetLkML1Kjs6s",
  "key26": "2p5w4yzZzkqHUmmGt8nM7XYtZyCtYs6vC9AizvFHXJRMrRoFFjuLWusKz7CqnFbnL4sEUH8r6uAAPoxYTMLJxQgk",
  "key27": "3cYGwCN28u1EXi7zN4jyVYeDTX7DdH8t7Mio44ihHsRuzWyQAtBmgGjE4Bj1jCj2r7xYGWQ8VEevtjP7rARWGniH",
  "key28": "WFpM6P33Rr2xZfqkc27JXYowsVyBG6YKwCAyhGtXAS679kukmi7KTNe6Vm2dN61SQLtMrLPyysUrDL88gwqUkLA",
  "key29": "4cYFHxxGFM8XhBLtBQzd3SwFsCeVSwXQ1NANzdpuoDYbcq1oy26vZeb8joDo6sYJGDNVu1C3UKHarbGdgx8Baa2D",
  "key30": "fpjta647aGYbNneqs6VMMoUDt4b7iv8tS7WNN4ZVhw8tLHiBXNcnQTGpVNEH9seyAmzEEeaSYhexEWUrUhuJ3kQ",
  "key31": "418M3txUWk3UxA9TEhekqSyUJNFCyG2SNvMfJM6ehtsDghFkEJ2MMENmY5suTPSEkrFmFrFQDJDabUNBz9r66X4G",
  "key32": "4XLQBWEE4vTwAmdFajnYzJDCr7Pq4EwrJbPPc4HPvP2ENC4BmpVNdcXaQyaX6FgauWF3PeksbbHN5kt6eDRjywbn",
  "key33": "2Dqu5pEewuYCpKU4DotyteSmGJBo5o878B1bWtGeso7ZwnQ85YQpNnQvuciGgD7xFSt3Jv8eVVnUTnpKbqtuFJWu",
  "key34": "5YDPpgkLXoqdvwNDcgD6TRpv1cNeNzbwYP3WHQLhEg9KvPfmJXVvnutrtkDkKt9uPSqPJF8t1TCxetnosqtxLgGX",
  "key35": "51u6oyBKVsiU8A3Y2T8rSe8ydeZR3aai5DYYPpLehw2aaRQ1GpP7N7ToJLjpu7BbtppjZdMAbmpvWTvQvkFj7z8h",
  "key36": "5mrXuZ4FyqmegNA7cWwubbcvt8kTc2EwtwsJEt2PZg5VYKDx546ycWmmriorUkquTe6zbdUYZHsw88Hubb3wHvHi",
  "key37": "5rF2irW1UXKSYX1GcaaipaK5E7R4H9xK9F5L6U91dAXbspKMbamvAZawMg9UCQ5SFsY5ESv2EcnrFtTA7FmC1Bsg",
  "key38": "5vAzhpc2smyMDNXEEujZHxbTMRJMEu4spQjn7VLD4n5dQRJyGtGPGh8ajXKEav95ivDCyav7T91op21rAN8rfX4J",
  "key39": "26N5d2LMEBys9U1Te7GDYY9LTutUEszTY5GVzR34rTzenXZFoFCtNXzjoMtPP8ohhXhSWo58DkZYdVbsfCR18HXC",
  "key40": "2XK9s98awTfhzqPtY3U7qN6QzzbfqLKrhHwNpS39kN7573GRTrjQuERsQEVh2BcoBFZmBsxA1XuhQWx5evi1HdMm",
  "key41": "58hbCgYMdaWkvYyYH3gG5KiTztTbejAUqbDgxbd6y2eHS1EbeH2tDXhbp1HxjJUsMXyXgxRjiGcNAjeKJPAQghTh",
  "key42": "5Ux7GFHc7nzqvwEe1jFqUDtiaDQjJdE59uanZyWiEh1SAtDP4UF5WNSqRx1t4BQnnapBRTYYoKzVoxgAHRcj3fmB",
  "key43": "3bLuYyJZnnUqZrPS3HnHDJdSyE4F5fWt7rJgEz6RYNUX3CEtsrpfvkGNsAAzowX23h4C5z3XCBpobGoTjjSdKADa"
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
