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
    "36ork2r56sjHGcpKv4gzWV4fviD7XAoJCxd3dpnfsSmN4dPCAnxhzCrEixkzEMavvBzmg9EWsVJKZSdd6acRqcVh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36C22kKqPwtHmRvVAbUutTZK6s6DJkNVTsLP4LSu5zNuqWZEiaZWKCxrkt7ybG4LwSGypmDJDx614Ajoc19QD9F",
  "key1": "5xk8PXeKKSCXAnNm9ZCUf6R9twDVfyAGva16qGTE5j4QuzSWoURxX6Xd5596DDerCAkCS1NChzD3yvgSRSUwagkb",
  "key2": "2XaWLtaLJTLA2uQc89xe4raYXr2WzVSkV2NCdwFyEkt4uXT4mowJ1FLEC462beaF1RuCL3p7mHZR9gc3xpxjALL9",
  "key3": "3U8T2cJkttvKtVHFFNfxPAN9C5VKgSuBMj3z5gmRdavETpV89JjY1RWmg9icouHLFTZaDgjkmKjdQM3Ugnp2FMU1",
  "key4": "3egGU9eAyA5UV86od66zp9sHkbpTnisRyP8jcWdcnyxw9aef6onNa7ZBD56y4Ve6AfszTvJURBSiCodqR8ZRpv4R",
  "key5": "3SNHGYWo7vjh9mD4EmTsHUf9WELKDM3udAMVrQXkyHaULVQmuYMdzrSqg51snDmFaNZf5G9EEukr1hn3Dgc7RXXG",
  "key6": "5eFdxFk9iP839V9BhURYtVe7p7ZH7Twg1KReqXXHyb3QyjFGvMDdTXxsEYczNvtX6SVhfG8cPa3aE7Hn7RCDyaP9",
  "key7": "29Ff7TXFFFfR6tyMAPu3NygDxv3tvUvg4ikMyNtDUjMYXixyhKvBKpQ8znnQgGNS1fDdBWNx3QdnzfkFUUBau8iL",
  "key8": "2DPrexTmDAGx4krPkrZipm63m96zAmvqF7BwUJ5gm2auHGkzKWHDaS6ojxTTqD1vimkKcyncZFAX9JbiJpy3vW1G",
  "key9": "39LFsps3q6M3ppNAtBCc9VfWXqDL22QbtfRV7JPNjtQRKG8jXxDifk3fVpz1iUvBnseoKfYjgxvZzcW7TJ8sxZTB",
  "key10": "44nDWkHc52vRkZgAmN4GTwJrQdNneWs5X1cCSKwAqpq4inc45gxLid47QSvNMetUjFBkThtMwKGdyykoun3FpBJr",
  "key11": "5kenVxCq73BiCSTfCNPLnUSPdeRLi4rA3Dh5NhR179Jtc36Bgty69gNK8bt4sS1V6mjbnpqH62UAxPzetX2c3LAk",
  "key12": "9hMTEGUd4nbwhYKykYTthXk4uinouq1ua1iqY5WVeJeBCU76qBANiu3RnnZffr5EvaEgkZ8SuSE5zsnZVVfopa3",
  "key13": "3JcmgpPxHigNGb3TB9v4hzt9AXobVD3fnbKwzwTEcNvcBkUW9kNBPv7tnDXiXnx5qMrsM79x2VkWd3PUE72BH1na",
  "key14": "269jGRJTKa2pfYzZtJCVhcHekbHqJNLZrSc1YssWhTtNMvbnSSHDm2xySYc4cWATUejD5seBaJKbsWB33LkjvNJ7",
  "key15": "Z6N2vpjXFLbRjK6MALAYNJxVAu1Zodjigki1Vo5jQu9GdGYr6ewJ5covQZkJSYzL1WtE2DhQ9MpffuNvJRsVvr1",
  "key16": "4FoKS8fgbp99uFirUmp7YdWNgTV8wAhKEJ6FhN5PKyq9WxJF6Dchd8XoHXgnXktd7DwEe4iyy3UW83eeJrqFEjVm",
  "key17": "44tf3BXjMTMtkE9hWtfKkMi2cqbRWwvvyzhdMmDPWpMPnhYecWrziex3ba1fR3oYM6fJAnfmz7q6XMJTz8ACWsEJ",
  "key18": "5pyacnw1HLVjTZhefniEQKThkC8KNrvgE4WPQCyyemTzWbvQPj4sWXzyPXVdGbgXMNPW92TCZVUVKhg9q5S5sZZr",
  "key19": "4DDFA2BzzhBTuUgXtPVwaoDEsNASxeDx8PUUoiZjJaEkhq1SGGa1iG4X3YswpbuXa761X7i8dzTcsdLYzbDs6CFk",
  "key20": "35DJawjfPyKb3zfPbUKDzER81XZMcgnEgnPLAupgSVh8FaHNdoaMPA5mqmeaTT4Y4CmGbJRESC7jFNjK7TCwb9fZ",
  "key21": "5EPPkiEf2rimgffJMFBfSSghVJKx4egz4cygXaqziFKjJNEYQUft1wYqnuUpMF5aW7RJijsx3HEiQ92z9x6kQ4su",
  "key22": "4G7Dwm5dWGBiSLdkTVcQH8R2rkmsg2n7NaJq1GtAckW5EqijptHujyd1i4BgqyF3H9tLogHGt8S2WLrYxzWhPN3B",
  "key23": "5qiJXXyC2bGovqrHQW84tvfUzNXFxxooBsPrrqXp5QA7tvFBKoq18VSR79wTzjMjXKXAGFMqWMw6znvfUZyTeaMD",
  "key24": "2yuBLeeX445d2NorL9dRX6NwAR7hubQbKJ7MFmgnbubqPaiF2WYHSxHzXLfyeFgcdmsG7eFWj4fDuwcBARdVpzbH",
  "key25": "5qy15VhJSuLTp11oteHRhznM3bfF9esNfLBFbY4VdQTCwJBbH4v6SXaqBZwYHAHurKHoXtb7CaBvTnGitVLNstks",
  "key26": "4RkVb4wcUg5LVUNra4TLuvuSX8XRLwRaFNbzXbMcy7ZAQwRQcXhNBi2E8pRcsg9wY9jLBxFwmZcizVrfczsoFQ9J",
  "key27": "5m1VoE5uZRH4LRudYW16GwiRmHNJFX8RSb3RtVFZVGAt8nLyYbSAHrSyZcDjGoxNMYiZCXskoinyjXLa5CdpD1px",
  "key28": "5EiYqs7gSaEEDxtENhrLtK8scDskw29JjEVv9oCV8Hn2Ai7w5gkNKd4rYKa9wvn1F2zjimwgDggYSPcfLyCXEeuY",
  "key29": "29ZKMB9pC5hBunFUFU1SMeQJq9T1Mavc1vkb5xbch2RHfU42hVb2f2KGz8V6VpeXxy3Udx4r3WBHay7bBFQ7pL2E",
  "key30": "3GNcs5wwTR4nD5aK41tnrvqtZpU28Fd2M8y2BSbVd9Kv1XCGZgtcrRAv8LPPfdS9ZqYpgjWVCNgthfngFVi9X7rS",
  "key31": "5PCCya4cY632gkosQgy75iF9ptqt6PAS78uZqU5bka4VeZj17pb9djiYSxmuHU2KAby1osvdtNYK2iXWpcLJku1t",
  "key32": "61gahBvcCKEtAHosx1vuMZ3bGqGq9QYLEg4WxMvXMFzay5bgmzAWYNsGgKvxkH3tE6Tb24uWcgrUTqHFTUVfzJtk",
  "key33": "4GP9Y5fc5DfUYVciLQu9HDqHLiohrcZBz1t5iSzepShiURDKL7kAK6vwrcBtfSQJYyzjfu4miv6AHzms2fPhG856",
  "key34": "4FNw8Z2Zms7s4cNajBr133YPvZp5xuoWVTGis7GtSfHfyJ5cyrUGE8cNuDoQ97eFzFgDxF6couTidWw1eDAiHBGT",
  "key35": "48XrGyGKTAVu8DpSJWR8VMvYPjYQLKyBNd1cyduiLPi2qy7AoFwrredonDWWwSNbMBJQDJ6xZ3eoUstXR3TDt4wk",
  "key36": "MKQLr6hdtif9BCcJSfK6PPzL5FZdtjBF1hkTQjcB6X1wbxy7VK37efrntm6FeAcjfVng2jEBnW67S1XyE5EZ8vo",
  "key37": "SF56D9UW56WmtUn8zhcayV2FhPrNdQkiH3QA7f2Ay86x6XBcHbZm2RRhmaTfXVptJgqnRvqgUEtKEEDRRGfkGSa",
  "key38": "3jXfzRAy8ZRoD2289DD958snM2WkurWfTecbrbB2zcc1G3yt7EdpjCrsTbLEh23t33ZHYyntyFFvyXRHBNcRWFW2",
  "key39": "5MHyDPsqsZasBWmcDqzYDqA3ubTBHfrTMnaHttk4FJKNiSJHFc7VLYBJkecvSuz3ZCc192umpJJMBvCicr2BhcZk",
  "key40": "4jSfbSmz563WtezE9fGLrz9fgBfTxY1A5u4xidBfhbfZHjrZvJDB3WbTdYDwSu3MptQQKbx1zqbT8RJLWYcUNC8r",
  "key41": "pi87XRdy1Tv6wFVVCVLP19hALnX1ssNhs4Me51c7f4ZJUdyg4YfNjgbXkdPCnyEZHtDk5CZKioPcAybeePLbHGs",
  "key42": "39cu5BoQaEtjQYzsNNCHrJFyVM71aLiznUtuUGRkUBXSShYe9jYP7yQ7ofqeRVu1STjaw62xN5LLxFJZs3XEGqps",
  "key43": "28c4twYbDXbJVVuMr6nJHcekg1ubghLCau6mb2usJJWHCc2kYKQcxhN6fsvjWKDjGJ9JzepKfWBFmTVoAoQexkF8",
  "key44": "2REZm7XEwTtCASkz2oJMESqW2kwq1ddiQqjJqTqcoeHfST6pWN4GEzhSrUEprosjww3xgNj5mhAseSWukCeuVNMT",
  "key45": "3MHpsTpPfAkMz8GvSF8qzXVxF6Q7jUCYFxpRuUu9PXoVUH2Y2FTFgv1ifyJ2r2XoPQFLw54Su8QsrpmoYJrpDYTG",
  "key46": "HToaj9XnH9ihQSFY7Gbnvz3vcX8qGim1wmAbojYX1zXoFy3LE9ry2vCV5PyBiUPSYiDoXwY2GsJfDu2pk6byx1b"
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
