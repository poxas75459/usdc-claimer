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
    "4d5rZvHHyudHRCVWUcmvmzUeGdMcJZkDkGnQvXR7FxhiURP2goGVkaGShFAUZcAinY2BJLVYaGg7ME6hPQAyHS8p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yEjXzS469E44SbJUyWG3RN7NPNdyQ1JhKPs9wY17EcJqySbiZMq78g5h8frYepEoKi5NyiNXCscxNxkUBehVL1G",
  "key1": "29Z74hwn17xNh179d7ndAbV1VkkiuUPynVeC9i1J8UrfaAWgiUMZ2VJgvAKhLLhF1cGxgfTcMyJdHXnVWquSg4Sm",
  "key2": "Y1NdmnS9ehimrwmhZ4Y7jZFzVwJkAxsdcfqjz1xPvVJMVgULCa3TBnt8YuqNFYoPxhAj65QH27RKuauT5A5LuYs",
  "key3": "svyj9pVcdxq9Fi6hV45kMYFcgJ3KNccovZZgNsJ19W5NdYdwnVDWaP1fL8KZ74Bn8S2teFEZQJMhdfNNfy95Krt",
  "key4": "PcVSa8nfSkM7MRuaAe7uLkmJyMq52ULg7AHWJP3bAbRg9hjvyM9Tnp4R5TbvZmBJgRj6asb6UpF8gzVk5SZCU2W",
  "key5": "5DHRESJBHT5Qf5ktW2evkFa8bn5h5vY2QYCDb8fkjbiJjouQXm4KRNP98SPeGPQQMxyVXycBmyfD4DLHsMq1Qka3",
  "key6": "3868JqVZHTgKtxDYCCENjMcdNvo9w7y9GGJWSFbsdMUuRii7udEFrRaAsf4b7teVwGzCLFJFiUF4g3PvUi6b2gDY",
  "key7": "2sJFnxtc7MnRKaY9AAHJG2JSUbrGQsGMNYBwUuudJEW8y58eXksQoSYZ6AWR8XcR3ZDiBFbm7j1p9iyCJi24SAFv",
  "key8": "3Mng8b8LJkAidoqzBxtqXhvdjNraYFUqQjspgPNgmDHXkqmnG3FdxVCHJTeQtWK9F2GNvuHsmdzc4nZwqMvW1Lfm",
  "key9": "5JV4vUphcU8pj2f8i7EvJ3vFVSRqsmB2buZFmB9Z9jhE4k8zpUDznztz6YrQdNRt3g4eU4Yt8yNLR28Xn3QHLn6G",
  "key10": "3jg9QisPbHwudbPGwCnyJRBUVtQcywnYcEuK6msEBYEJ3GeSRPhceALf9L4k1GuSrQn6prSw4Qs6K4v49EDuarTY",
  "key11": "RmTigddKAEU1iRJYAXQYseka596cGoNgzNa4CW6RFfciyTicgvGSBJDZouL5WLcrDJ5EgCVrCXNpWUnuMf6rSkg",
  "key12": "4mCfHrEjxB8chQfNudF2nsPt4VEvzyXsUgZ7oQmd4b8V18mxWxC1xzqLhiQGLPkqmuB55EBbwnVzWMsFP86yUTb8",
  "key13": "3zy7KxJJW9oRh8RDpcDVGNwUqUrWvVqDTQP14DkjcuQ74UcA6f6tqCrx5Rx2bAZbixy7AVpgmfbpDExwboPH3EvM",
  "key14": "FJhUfr6T9QbMn3Sd7GMkHqmjwR45whhE2JeTbs7Cq9C6LFmGzfN8rLR4rm7Ai5ZQMs5JorwjrdnsBuvAa6gYdMk",
  "key15": "63A373uYLmchRkiy73RCcmhCZBco82tvTNUfAGfC6GVc7on47QJXdGHLnccEZ4Enxhm4891bUSebQB3gjGxSsRR8",
  "key16": "obVBds1RaAivje6L2rAnxfzzqs7yMGBoweZbmEK5onVt2buHgo4LcunTTGNoLtm9qcT4zjY6raKeuYuA2ZF2CwT",
  "key17": "5CMCo6zA2yp2jpEWycS8CY9maVhPWc5DiciTrN2m2H6dT3Pz3JmWQHS989EfPvVjWMeqj4rmZeSgyU92gtRXzpjH",
  "key18": "4YFKUoNvs19pu19rNLfhvoZgiyDyrHEnMJqsor1jLjQe9TLky693ChLePorbMck8VyV3sZ9fFpfpP7D4sWzMGaBQ",
  "key19": "kgNqxHzYw1i8xvFrm4SDYjGWYP7jPSSfbFQ7Prey2QtzQZu2ktzqNBpyDeVmYkdHaaqat5siqWvr7D98SPmeNRc",
  "key20": "5maFZn1hjMV3F9QNuvDnKeDmQxRvbUGcbroU1zg4LA2GoiNghDFBdQKmZosVhDD1dZQ5y2rsgm2rbTN76AJ4htHJ",
  "key21": "3BvBMQ4nKo2Xmh9biQNF4GVBhmnecpbENzcDSsqsoGqybZB4hGBLsaiVwhTNscyKpC4KUe3JJ3mcCFqeMhKLwv4C",
  "key22": "54ZeT9hUxbZHjeoYxV3woPkaMTDJHt9BayzztaehgFG6xt2866ijTZquzzgdTv3ptQqG6T2Qn8BDwpzwqLMzJ9PN",
  "key23": "4Z2NMUAeEAGiQi6q1676pu6hAAGuNyhPJD6Ai1FqK4N4piBNSEBHzucT7FqPetzq4thwFSPC2zAh5kknMurx6h5y",
  "key24": "36uecrfVYoRkkjocnc6cxPXYaRqNv7oTdoDTg7U7c5RkSRe1Mn4sFQNqYt7NGekV7KfWd39ag98Pk6w9maRFfmgj",
  "key25": "2kLQvMCgPRhktq7eURuctiLihz3NDGJXCdJ3WivUZbYDAtGBzLpFF9cbZiHQKPTKhVUEf6BQScipQXJkS3ssNB9i",
  "key26": "5AefTLfxJ2hvRoBj6XujDMRURJENvhsRmT3AmXHVMMWeEjRa6G7e5Pv6WnkH8ouMY2g1DKeMt8Lk4nrimh1tvK5u",
  "key27": "4nPA9bXcgcg7FxXnctFVXhoAaYMo5t98ZqYFkoACsaj3qczCM5sfS9z7s6QaKXY2DZMbzjdpUVUu2ovuA7dijAVS",
  "key28": "4ka8HmnbJRWDP6nnDshkLrXu2CrcBvMcGUe1BTxWv1AigjNhPgR3iLekDmvCMgoqdFSGKUHCZAs1XC63YqnNT9f1",
  "key29": "eR7DPj4gdbmp5gsAQsHitPcV97zNC2uxDGeck7bQ4oBxNAj22i885cMtfaSbGDj1nxs1kuoR5jdBNRzjVAt3nBT",
  "key30": "2L14qwWJMaxju2N8QBUZ78srvByWY15QV64XnTJZLkTprNB8zWjFHtnz6vnwcvuaUUP8TL9Dp1mSTrKkrMFGTmME",
  "key31": "3XCeD2V1TcDKRPRZqt1uejppnHFkEg6pq8KF84ir6e9jsKUpKuTyxkBdnyZ9TYfsPxgSJjFQKVrt2J4MERAcJD4p",
  "key32": "4Sev3kcTGAJq551YEXKHipkyY7LwqdCjf2gMWU3eCCLyy95YsWcr7pUyjxNhWNvQHBjgUQ9rTj1VmKXfRPxzMnr8",
  "key33": "3p6P8ZxEy6qz2Yx9ttCSwbL9GPDUMGHR9UnGss3z6JPz9BjjQXGtYGxeqZuXtQA8izFHQTn7JCrFMxQLDZq5JsSs",
  "key34": "99aJgjPVvPjDj9uXPym5tCnY2smM3xGZDJwHgRpEta3WRA4uCKutHZPSPr3Pm8M5QAJvLNsHa6w7gpWawuxorig",
  "key35": "5tg94bZMdvZtaZYtrPgcZ1dvYeL13sFL5E5w8U3NCuCALFwz496FHy9iUtQmi73JxacuU4fWRojZxm7MSegM14GC",
  "key36": "hCuP5wWzMsgafkkBy4Pz1meLqpvdxrnJEAnSNZeiQHUpFfQNWWED1yX4XoofY9KMuf3jaAaSgEuWaKd5JwHLPRV",
  "key37": "2sK9AwPsLrSALLPPSH7sBtbiZ2M77HRAsUsHCA5UVtuosrmFWrGPN2sFD2bqwR8vLLgtqg3fX6GihtYYAFSftV5A",
  "key38": "4GC1k4ecWC5bCFKsQ4o8WPGumJes9JUb8Jp3vAp59sCuQL9uUfPoSNtppFLrv1xUreQ6McPti3hNYzTkFiJdoSZx",
  "key39": "4fDyXRTaZFru3KjaSKFDJGrdh111Uj58uMqg87TQZhTLgBSocBZr6ZLH2uqcLbba7EyUyYjXEuNigjN77yfPGmap"
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
