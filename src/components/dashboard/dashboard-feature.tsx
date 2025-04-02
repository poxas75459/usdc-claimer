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
    "4zrJNtR3xRFpa46LJfe98eahatL8i36FRHDevSBSVp8Menq5BnnJcwavwBiYbZbMAtWBtXqMBL6Ns4EFWSZ3n3nx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2y2r6fp5JdauHxeEvSabjD5pM9vnsRpxCLbYmwSgCGeSmQmTaVUA6pCz75csenuPwk8uh9qtwNMNbGQdz1yWjLn6",
  "key1": "c17iyKYh7u8Ua632X8N8HNeyG6Fq5NVuUM5J5qrhs77MBHvNnitVMeH661CFb9QXHev1ZVDTj5N5NLQrsR95mKF",
  "key2": "3ojEHENXf28DmJr8HrfsNqTcDoxbWQKVgVnUMQkdbPssKqg4mbJCfCK3nqQ9phPypxN7vfyNdj4zZJRUjxZMdkr1",
  "key3": "4nvVjvCWCAdQHRBTN5KiToEpHUHuhrhZBZEQ7X2QmmWU7zkB4TjCrtVLeYf8NSjPYBJosB4gNxSxZbDFuARzxFjm",
  "key4": "MGsDGceXXo7EqPETGBgXZPSniUTSN7yRCnA5jXPN8JGngw5hkxgPbw6ija6XJ7FEh1m1n8TcmCEoZaoYRA1ZQMj",
  "key5": "63msTs8nq7t6Zzpob3z8u5abTUbScUsdBdN75eptERXT3zdiPNp8Rr1vjL3RBPmFfBWuff3u6Cm3TvXjf2pbrZ7t",
  "key6": "5Vh4z1BGHQFtJMzpdUn3FULVdM4rrtafKBWAaSGQoDhk8VCVZ67Qzspy2DajnshUokCvQd97xMDQ9AoggTqW69qL",
  "key7": "4fgFwQQDdge2aFK8L93tV4SrsiAhxB1V5p2wt3yS6LmBBrW6bJcEsEiVAyoUp1N1JEEqWkfhsUYurDQJXDPDYsKA",
  "key8": "4JUPsVxkLdGh8MVHoX3vnzkVWtxr7EiGixhCsfkAfkwzFXH1GFCphF5YGgiVPnX5k3g8RCJP5NB8vLavGutaafeX",
  "key9": "AUZWhAgJqvQX4JiVWJoaRpL2gaS3AMB911euW26PPiEL1EBftHMxEwN5eocYW11zXVxMHRRTbnHbRANJLEYB3k4",
  "key10": "2gGchvNzsY5chy4vHnw1xXpUxSxBa8erixxpiKa9wRsXViDYciNzAmXJnjc4BUeEjrSEocV4hWA1S3rSHidT1zCp",
  "key11": "26KN7gaabPb4gmUfYPqrHHrBN3bidDwUKcpyHPyaiv5Vmif63vfJQQuK22JNqU8LVfEG5YKdDvtXAN9ohRy2gsFJ",
  "key12": "5XFMoBnJs8CRZNarcnhiuVq2x7ojszHBa4DR8NCYLkqEwgy9hYvSWw7bMYpTcjQiVS4HK3bTaJUuJuUPhhBGi3KM",
  "key13": "5c3e4p62LAphGyo6sYXvQGPR3ua31VYVuHQjD3rAaSCZA3fv8gR4xWkEa77BThqQdiDipZSU3P7CSgUTGRuEk1f5",
  "key14": "3gm2P9TMcdz8kv6WZ6da6K885feq7vzob9vEGvaxT1bL5p7UTdGJ7eSxSq8LPP8QeeXvbcBeAZhGETnSYPiL6YtS",
  "key15": "6241wacDeT7WPxUeuvJtqspRS4aJJFe7Jj2n5NckW3S2cSs8beM9BiCoKgExrsc7tF64KjJ63vU83N53QU3L6GxY",
  "key16": "5FdJyuHMmNfcD454RK1VHwdNkSV7ZiCpHU2F5RTdXr27nnH8gePHuY8wicquBvytLrp8QxX8rX1JvokYXJcGNvQi",
  "key17": "4AAxvGFStadSRu1jcfsUvMNzN52GT6mb3ckSt8YSmt4kGYyVk8xYvU9mq58tk35zmsSXMz3vbLMbrCUwT2G23Twd",
  "key18": "2GjmzPR6BWQ6bzHPbJMJTA5UUvZG7WVzJBADaFcDqna7Ttz8p5UJPC9h46xYiSWznLjPTzW8L1otD9vyeEGkn6JP",
  "key19": "5gHDQzoeajEdfdcbYW8zTvVyerrYsmdGEoA6Kt4mvTMDqMNSZmSW3tCYjYF3uBamLgXkUHSk2nAX6EpkGtLRbKer",
  "key20": "N3EsoHQxpgc6qB5dX2Rdo6QVD7bwVb6jiMGFcdNgZr9cc6RAvEttdPFvDqDz5FPRfYdGMDdcPYaTDKTBA971qBW",
  "key21": "3TGGKw2VsAq844sDghJ9kmRvSAaTt2diKgZQyycRmMER5XP4DiB8TLnVrzcw3WSAWa1bvWDgVqusMCciWRSpnvSr",
  "key22": "2cvFfBESCdNX6SzAosPnGAg86GtFxSR5Ymw3vvbbT4VVxnGNR9DByxif9YyBqa7YX4Wcn92JeAopBr93v39kcQ3V",
  "key23": "ZVhx56yU3K9PRVRM17s3WUjTeKt7diCBapz1wDV33Xgz3v5Nq2PZyRDemNuYjS6drSJ13Ypf8Tu9qFuddpjj63k",
  "key24": "61p1UgNYQJj8QUkY1SRAEqhujYZu6e8ZNVNu5Frmm1a1aMyczAjkRMUkVeGuCMimBmror5tbR3zeThrhWP7zuXCg",
  "key25": "5g6gBvh5ru1pQ2zYc2EiASeE7TZHEFUyjcuBc5MKCekMGhkhxKqH8NySNiFMFGT5SHQSDu1mCFmEsJTAkhBpcVRW",
  "key26": "3g4kRc7PXmHvrR9ZaLPMWrfeykv8hHLNEu6HeftAjuz4o8jATj4M3uGFzdKnKiH8ojvbaB9HEoY4z2nuyx5YGDUB",
  "key27": "LuVbavcSprR26LuC7qw6j21EnjdSxv4DvViyxmuQhD238tGJawHVeqnguCnHxbBj43zNYgQkzH5VYYCojRpeznF",
  "key28": "QDGot7tKdoxaqaSWvEKjeMCMLimkVacctSBo6fW1GHbbgqS5asqrk8eMQN3rfeWdtYiaJr5SDJFpn2vhfz7U8VS",
  "key29": "51a7BDFUjbhfTc61S3bUJygxUkTdi6WszYWNN8vmMGwq5iumExDdiqt8puDU888eC7M58iGCu2GYvRusK9qm2Vz9",
  "key30": "4Wnqce8miKB3raR92qzUTQhrZFpLK3vW1K22EymmgknDEW88wy8yucxxkzxKkNFux5qX6YwB8nJavwKrivGosqDJ",
  "key31": "5Af1UnFXH2KwsCmnAs5ESE5him1dcr24HkULuH5HYF4Amri182WF7U4JEFpm1v2uMwigVERhaFzPrFqgEaQnRKyj",
  "key32": "hnnXCWjuuVZuEb7JAHRHrsRNLofZ5qeUbocJytHRcC16h1tWyQxLzumXB99kk8Gzetfgf53ZHpqQCo35p9r6MUM",
  "key33": "4557dNyPL641vXqCfZ39ErnLw12mzW6hkKqz3Hd8XUU9UsfRX7Vu9xywYW19PYWx8aNDH4BznTLY6ouet3pDFXhZ",
  "key34": "4JXK3ijrmHq9c48Zvh4TQDTS9gsYd7ho6Uu2R9EPz7PKNgZcDxgoKwTNwxQMiQDxme6to4SqJPPJWjDaYomHVM8n",
  "key35": "4hfE1E2ucWbFKpoUXuT6ZRgc1xeW5xQbB8UTRhME1GJcv3FTSeMVUdhrHn62NnXpwsqAj9DfaZoMqEAwJvzSpbH8",
  "key36": "4ihU6gWREDTN5JfsoudLuNxENwA12Bf77crHWRMaXd4uvyuZuPWW23Fexv6h5jEwnWHcdm11NHcydEhfZE1tstCA",
  "key37": "3ddWuACoS58QjiLGv6XczKDUtH2qXpmARLd1kk8Xz92mLdEu8432K4SDG4sA5Xk2SeWDcN3nt4oSz8uM3oy3LEkf",
  "key38": "4NFWUxympMKkTGCtKoTZGhb82Fs2SHPt9cLH2dnS6T1aai2FBRn5BqzGewVMH8Xizv2onobLFWqVYBAjKrVyEWVz",
  "key39": "5bwq5CfVQDbvLovfRwxXxcGnHyVmEbUYNxTXUPvvKnnHhZ3f6r46hKxXFqBuEJa7GLAFDVTPkXGrsfMCFsXNkExD"
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
