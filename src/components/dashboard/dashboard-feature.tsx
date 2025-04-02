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
    "2aMPFa9942jxEG2JxWA2iPan8zfcQ3s993JeDLLMEPwvq6NS2XHEXNiZKKLk9emntBMJNMBaiFF9np5eP6Ykaee6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65zHe1zi1RuMGDz41nJHDKfmRTSvrQrceR1qm4ayP1ZQfjoyVg5ZZrwEFG8EjPUXSqBMnUJCKQZ7vhMjUvMnRKGn",
  "key1": "4FwfkaCsiAoXu5AfZFF6hdpvNpxQKcpYLFvXah1wq78152PZgkEG6CWCydp3C5xz687bn2nyJV1qwtWzp1YmqpqJ",
  "key2": "3uR1fNBQtuuyXa5usyFcMTBmASHwLMNnAkuRECYYo5SwfGuZjySHZvgT68AP7Gv27HC5rt7hkJP2wGu3ui6kiZFA",
  "key3": "5rA5gR49SsTPySEPVP31A5FJAaVxchFZtRUz11rhdftRMCFbDSvLinKJvhgLHixUHXYpvRZr5V8dbgNtm2yQmJ3E",
  "key4": "2sxYBTxCYb2qNsjEcfgNcyTQuVrbEJuiFD78ZCmnDmyRMzUVZpJkqKWtCnQ2B3uwCk4Hq5Cx7tU17Btxb3P64b6g",
  "key5": "2fNoWz7W9fD5ZnzPPAgSWPoNYZvzgpzyMPH47x9Hyy7eGRcCVAHkbSDwn7ntyj7eqxiHyhAmrDA5gwnfMmQ67HrF",
  "key6": "4KdjnyVdQn7hqmnywQo6mUSAkgyRM7L3K1XbT1yeQAU94A3UtMUCQ56BWwpRjvaFzEy7Q2oDMnFU8cg2kYFxWZi3",
  "key7": "2ko96A1Ads7GX7ctmmQQ9g3pUnCtiACV2M3eip5HM6wrrirrEjzkH1zrosAf9qttiM6HafSZNQb4CFvDC5RAEury",
  "key8": "Ug86g4nv4E6BLm2RyndwuFaVGCCyiLUitSobTmmo6fzuYDmXfupdYfjA2saaJ7k1JUkvZraZchHfR6PVCyPSkog",
  "key9": "38e3GcpQWcecpXw97KjGnH6BePjnj6iDwXrVARt7tzmfgVQBT44aVZN43iT46WLFD4FDg5VzS7bagoKD8mR7YefR",
  "key10": "4JXwL854EE9r4cvmxSQuErymWW7Mtw2w8oJmZgcGYCPfhh1yH2hAsz7eSoJEUnzHmGgCekCY5eweS3FbYuJfeywN",
  "key11": "5CMut3q3Xo7FMRF28FwPYmFK2dyRB9R3TXpsQqCUK62zeHTCCA5wG6X8tPKPFdPnrwLcLVBiYTS4fSZyFAEZj1hq",
  "key12": "35Af5vWseQ96gmyAZdgCbXcEVTvEJC8cMLZMUKhZHBmeh6MU973HTmhn4uPRpg1TLfKoBQV5eY5dgwQLdpBzWWiL",
  "key13": "2dhEziw5x8h1t8KB6KmbqS74xY21zscv3PqjLpKvUNN8iHSBHVFjeGMkHzSQiBhyUPK5DADuMuXPEBPCJ4hn4jbH",
  "key14": "22rx1z6FuumCuDxhv8dtWnA2AbUNmSpw8YCdRmx6YDmhUKKk9fBk4NqY5QFPxPS9xQEZ6Md3UVy5t7h8rEvKEMKC",
  "key15": "3FcNrxHQWhRTE5D5kR3DDuftAvj1rKiWYm9s2o7RtLs5LYKUL3WkFy6AqAhaw9b8G9W24T2LZz3JWsZxcfNSupUx",
  "key16": "4VMdAce12GS7USXvdP6CUPoXWcJtChc2W1ws1J8C8YJqirRL943muamAdmZf1VdnMQGZULe2yJz18NGWcTcgVa9w",
  "key17": "5cxYw5PMr6TiGwrTEoFi6LWHMsgALkfe166JMtdh59RCfVC6uHmig5mBB6mmF9NsWgsxA7oUeqLLUoc1F1WUrFxk",
  "key18": "3atDgufEqhBG7Rj3Qh4ztHsS1paMLbRG9ToA9sC8oDMaYRyKtYuziMs2QiK7jEfduNVuBmk2wAyZSDxVW2F9nhXj",
  "key19": "27hUnZFBnRCriTkZNKWVDtPdj3kMM7gaKspXG3mkQ7orL6D9yot9WhZ24Z8ChxXt3TTTDpZySJTdmKopcVi9XwB3",
  "key20": "3SUcYug35bYVyabXKPJCtMgNdbLRdqsJ8GhdQVDx5n9ET1YT8La7D3ePSY9pBS8EGZ6D99pzMRwyNYgzKEF35r7V",
  "key21": "4D73soKqYpdsXFSdHDdXFXumYGc9t5HUgkw4zRsvTMdnBitccqpVf8PFdasWLRAsarFwgfjcFWZpBvmSUxb2DAnX",
  "key22": "23wdfQ5bMu9z8vQzo8QEQ46mbqAzFyVq4nb7DBEuUfPZwbMshuKgoyHw37g3sTgbA3RzvaYsvEjbwsbDMd8F9n8j",
  "key23": "2AzwwpL1hHppKnKPJaCMdaZiCUGemYELktvdsDeW2fKnuL8Liu56eidMpEV1CpQFbzLZv3FAJLQhQHpRKeJmAvVa",
  "key24": "4QzsJaPhqPLYJe4DdXwr29no1DqaKdQCcaxmpK5tS4xnvCS4cJYkH2B1SRA6aT5FRJSe6yivKV5kWE3fHbj7HLLJ",
  "key25": "3am541A82quuqAbnL7zEshFWosmRoy5G85ypBnsc4sBGtaKQM2ZsUx3XE5XyaWrAigLn5QgfcmM4Poe4WERj5iKp",
  "key26": "4BAN3MX5pEEzSDtxtfXYr4FS1VfaDYB5mazhL61KwebvQYeVLvTBGDJEysqidMT5jKPa98ya41mJdX7JMKBBBgT7",
  "key27": "mrpyuCEKo4j71Q1fyE1ZWmJpRFYSuhiQchkEsxZHPVpiypJyEohFpXfJaq9P661kBgNx9E69TWWskRxYBjyZ4x8",
  "key28": "3ksNpc5Z2hEXziAvsA7jxj4pfkZTWndoTPq9MtnmdDtJhcESX57U8EHAa4hBmuq1dXJYERJJwhsL8RZN9DQW5jxA",
  "key29": "438w51gr48qZRtLreRpP9bo2DBV69ord4AoqrM8khoWu6QyMiMw7w2DPKJswvUvKsHzMgMGGaBcRdu29VDvpV2xW",
  "key30": "4wCDX3xdw4SLfz1gpG9bq3hmrDUyfy9B8NecLHEMRv4M2rJdXzsN2K7LSvC7uraMtCXeHjB2CTKuWqfS5jYhc1g6",
  "key31": "jCP7srhf6LujbkDQYcC7p5PK81QvBupW9vdFc3uhahRcjgF7CRWXqE3w86sd1X8XAv9snhEyzypsZpLMn5vqh2J",
  "key32": "ryuX8KYk3Epa53bb8Mbp7EgJgnXjo5evikD3QCHxSmqnVek6zvAk6UX1MYUE7d2DrhENksujXY3d9CWhcj4JJ7x",
  "key33": "1JCVz5qh7cS2t8zq9f4xvJFLniTJJzUbxgFg9hj5VTzE2f7oL5kFp41p9vkZGMbZ5hA2QVieqZprTNbeJszq3Gn",
  "key34": "1xG595R2mXMcWnjWMErjvZ2xGToUh7PWKEGSanhLqdX22U31X7H9De3qQdq5vHgrDqWW4h5EzAQw9KkPYMrfT3d",
  "key35": "fY1pnt5Jiiu4Cpog7cBDGCvSs5xt8gauSXHkg9A2ALyBkHFVnQFfxdeATQ7RXH2veN2LYKqDpA4VMMEjSFr99Bb",
  "key36": "haLXb2LSbAaFYJXPZsWKc2XP7YsGoqU9G3Gt3QUDrHWTKF5ZQwnsTozeQsyvqca3ToXQfkHEuDRw6UAnrTuRG2y",
  "key37": "3g9ULRCkPAvY1VtcJTgS3HEVRkMi5tEN4axf17pFu1h9BafUhDkMGzChNGcrsNJeQ8dK7u3AskWm5AdpiDiVTJcf",
  "key38": "5pofRUfhFM7TgmoZUKySNnAR62gUxfZiEcQZ1T3KhBGrnJPPZfqLj7WLEtrMVzNEALcmYvSArzmnxoR4Krp6BBkW",
  "key39": "5vmkmHjRhJ2bA4jtqW7yGoL44igvc97hv6AC9XTFY9sMmp13w36fdELMya8nz1n66PbFtHJG52qtAmB8TSPmPAAe",
  "key40": "421mfzqBaAucF63wfYCRtCFCQbSRxRYS3TWVDtSPx3azEvixCWj6sa8To8FZApaM392Pp3XwjsfVB3Go6bci4nRV"
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
