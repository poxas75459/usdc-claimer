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
    "2sGWtPnGctHzbQdADdT2hFQvYdrzZA6yWodnjy3pZT3VbjnmnQkaZEqT4Pj2CLNu3qvJFZGMFm5XjtPWwE1oZrRy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41ZneaYdjDhDV8ey8jAi3wssdAefhtKozs7qpRSKLR6T3PWRJ1PWNhXNm4HBVLAG5KY8jncei35GvEUxvxrQZfKm",
  "key1": "9jHSF7aquX7d5yZoFeoBHBkgN12tDLpR8S14L7SkaeL4hyBSUG2XExtPu3PYBubx5FPuzQYEHwx2J3C2xZJSMpt",
  "key2": "Q9bwjfbaYSnhtLZamajKot2S1CPTcFa7bpLpDYiX1C15DF4BUoSYsJ8o7zJL1cbZr9iWkrVaY7eyNoevYMpMsvo",
  "key3": "4TQSZ3hnumxjvqL7yxSFVKMmas7tcASwLWZqe7DswFZKuHBxKmXV3t7CoeuguBZuKufiKxanma1gbRiDe1NEnWkZ",
  "key4": "5wGz46rNzC1faVviWiHXKEHkzBfxoTDxHBjhLd2f2BvLw6qaSq1kBkQk4WKJVayzbQ6UrpT8vPw5PKbD91Byt7Ao",
  "key5": "4Bbxqk5Jq24hwU3Bb4hEDtuBLVXNWS9rkgwomvwqmQPTcsySxEUgcQSY8SLcDDMzpJwunFRoycpagdecKzBafqre",
  "key6": "5AWGcdfVhMdr1UVW6vJNZG3avDsNqKchFTu9Ah5yaZYaPEN1Y8CXfE1cREPd7SpkK2PWERK2ChGG4y7NsEFMGtc1",
  "key7": "26vj3bjFJVvdkNycbxfGavaAYjHe16PcURE6qf5tJkF7qM2pyepoFvLXnCyg6frcnnaMwsLHTGrVMoyCMoJZoPRn",
  "key8": "3ukMCWNxNcJ9GM8exR3aH7BWeEgu8i65v2NCqEVCfUxnfhod64HvNo1FUPHtwZA7XYJKsJ5UKHrVWg3takY9wxS4",
  "key9": "3MPJ7rNGNhMQNYztaAAh1u8CsJQMQc5sK48FgV4sfgRkcUiTdWtUKd3pfe2WKhqmRnwzYBQ8aoDHUJ4RsfmyWwRE",
  "key10": "3dT4ohzDuakZGvXx9NLnNuLKk7dWyJfziGF8yVt8uDecGKGn3U5pbF6zonxKh1pQiMHDhyAn74nfAY9wSJC4wtjc",
  "key11": "54n9VY6HELzpos1sM4Kqg9WxnHaAz6frPP1jviQwDsGdK6PHeUA1iYydbskyAZ38YFCPHJyFd3BiAgp2Nbm38u2D",
  "key12": "5rnjRBu4oifLHTxyfTWd2aPsGFyr2DL7gL2sxKiuScni55jv3ZAJq3GRfcgUfBtSoxJFe5GX3VTPTZL6weN5jKz1",
  "key13": "25WYPN2S9v5PXoTRRWW1os4yRXBnZVPUA7Yb62n2sAdnBt9xRNEiR342ocJ9SSsHooLobnw24KS2wnNeQUVfcqdf",
  "key14": "NcZoHT9oumTMpgjZxZURJEcYbcyLcwV6YHdBA9BwPj4HYwpC9bQKt868AUz5Ka4Rgf4PnCqtsSvekfDg5g61S9t",
  "key15": "56RKRZcv6VDaNb66oyEAhLLDpGULdNbm9gEJHEewXzuee4RGCaCxToaw4tSpCmbeS1L7vb4NYt78rhpYbtH1DxML",
  "key16": "wHPd5N3v1eySQXy3bLLFLdD8Y6pPYY6gAdicSjZZdWuszkZC78BP3ActKZk227yDhtxpmPJndhd792jevR9DUbM",
  "key17": "4wkoReeu7srLfstES4zFJvEYAYqhjKzAo3ERDeo2i8MYPkguxTP1Qz66AogGL5suGaMNrZV74n2otytvQxViyMHe",
  "key18": "62YU5KVQJvXyQy4UPxeVppeDzrZLcwvtmShsygFDZ2TmSVTt5cuafE9vnLv6hs2v5Bd8D8fDnqSxysDWhdsPG2Ey",
  "key19": "Uu2B3JYuZV6FCNg3iAbKucMBCbK7uiMYaxLJYnCQqcYb4SkoKB84yXtCc1M5FkuzFQP7YHv7TVWAvweqztASrWH",
  "key20": "3dxfLkUk53GBQof5c7sfro3RzwUeZnAXv8sfowPVHDBjYigU3k2Bw5YUxuJsjR1zUbDnR2SWA8SatUdxqssd4ktX",
  "key21": "2ekqxxpEtsnrksacQ61JFBkUzrMk4zWwbz247WbFJ26pvrzm9EprzVSt9E9PdoPDQ8SB8Pe5EtyWtcg83f9AtqYV",
  "key22": "52p4HHvRRkkG8jr5gCJbmTkRqKqZubNaqDsJLJRnG3u2rpX5jXFQKRACPUqZB4PFtieuVaCtCa9j1AHT1nPyEFfk",
  "key23": "2BLP7CUk6EGca15U9pp35M3nrxstLpyBZvKVyju2tzMjjW9pQUA9bd9xsiN7Qcpgd9RCR8p4GGuzwJDi2fS3vagE",
  "key24": "4MYazUQZZF3PCdd6Kqp7wDyZXvfjLxMtr7vBrn2LyHPPGjA98MRGSedp6ZJ7ove5UNDvLp6PHLSV479vrC5gs4mT",
  "key25": "3PYCysDuX5eXCqbRjV7R4c3uNwFLfjKc9KoJ8AsjAbSHdQwkusXg4pXtqt5r8oNn2XwRE8NK7ZbF8k5HerEWV8BH",
  "key26": "3r6VzRTSSUxfVLcmdyuNHLZAL6AinviVNCqbFreWVJZAe9qefZ4jvkYx7Z4CMCTwkJAbKsmWf9vUijTNStg1w7ge",
  "key27": "2x6Rb6dCVk9QGWPttvx3XkcGdFCd7yr3d6N4e4RGCfibJjyXnfZYdvFD1xLGVkTWvANRwDe8XfnT5vxwycmVUmAi",
  "key28": "iDZgYCXPA3d3HVpvZNd16nWLBQZuQmddVjxTw8kvcYxLDPQYdiG4DjpNYBdcA2WXQFubNhjj88bTUa8ThQAxRAA",
  "key29": "4s5fEv2Wp6htAGa2J2tzxzEd7Q6STXYFn7PyuZHtn6KpHWEduuD2jhGeDV2T5sdWH2puuvCMo24kaFgT95VcTKyW",
  "key30": "4681YtEhezGPeQ83RYwEnwiNuca8Qf6q6rgDsviPpxdKF4rxXShZMaLveX92dSkRwcDsSaky9txqr1AkrShk5Mnq",
  "key31": "3iR2QwXv4Fv4u9kCYaDABNovR5xgavVaUFWeSzNqj4kXXevY3kD3uWVJ2oUT3BKYjFvnDRH79pUtexhJt1hdMTCr",
  "key32": "3DM9RhjA1eCBu4rgKw2X7uJDNoLNvqLtHjC2HFyQxcGWPtcgJQ3g2Se2Q6KjKgwfLmbk7N5ioYsu6iU9b8dPMsyC",
  "key33": "45VAX24qZ6C3zvVcqHRzGpqLtXXFXwVo9ZX52njS6ZDLQQbt3TRYtp6sVXxG6mkULLJHb8Yknrt9bfniC2HccWZW",
  "key34": "CjgjSsdYvADLBW1NuQv14SQ3ZUsQqFm2YSTPVsjkbQC4Ys7FpdjpnBPoNjzjQQ2Y24C6FyYgK5cSBRqpehNMsGV",
  "key35": "zFRCKnKWeKa51RkCX69Akk9PWcuLgj6kctJVe87sh88rNMtofpBK5BTmcQ5E9rsuVd8ZLt4k8u2A8haNwv7z5qt",
  "key36": "57n6uwr72VFCPDaoQTKxcatntqcc8qPE5Z6UuCKWNTYkMsaGqj4SAGwjMDJxqWHvSPbnKXWtHof92QmtxUgKPD2k"
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
