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
    "2andakbLWfJgBitjvHwK8Yw7hT4UuaVviXLUBaWHvVUTNRf8zeVY4EPAx7541eqiBY9HxKP2JEG4fTFq13yd9Rw3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZodRZcNV3nAhf8LYFg7dN7SAwJfrceXLfM5rU7Pp6FkumVvpiMc3pn4ewY9osicsK5tta8B264S4jL5UWagUG16",
  "key1": "2SY5SSkq3Gko1LQhC5NmTfcFvRuBpyH8ymoGg1yGc4LnQhaxPQckdRDDcuLe9mYb2ZEwvX8Fx24WUrSYdhP3kCWZ",
  "key2": "rZhmF8NJSKB7ez59sQktYHN86nMwAmtXFB9wX6qnQFQqsVJ6N7WHkLo5Zk9vjY1EDTov9eDfWog4UE3RsJaVA1q",
  "key3": "6BfCDLGhwa447TzWMcQLZrTZNzyypV1Tna7a2njryW4zKZU7fFoRkXQ46FVPtjTNCRPa4BDN57L7aH2j4oBNCMt",
  "key4": "4Lc99EyZoMPJaP48kCFxmbG2oVdrtvmirnMvuKDiu5FTrV1qeTaFhosFUyN3cuMeBu6TEDnYk4rf5KcWupUmFmHg",
  "key5": "317TbCmM1YoRDc8x6D7zkmXSfRxnZ1mJQ1WmVxdy91gRos1R24GcZxjCkG6i9VBpoUiQftxZYhYHbGtbGEwXJ7u6",
  "key6": "3XBGUubFCL2Hsg7V3hyEcGWPgCiCWRWTmxJLViXmbRMwvKE66Asan2Q8hFo5p4eJ2sxxG8mi3aqp5Hh2Haj4D5Fr",
  "key7": "4VpJNuyzEC2yjstYkZAwQb4dD2JpeP8yGEiEqRetTzFCoggjHHyvY82XAefZfSpdhLUSLqRJLACNNMSwr8DoWQLL",
  "key8": "53mBe3qsEbGKcZE7arZRJKQtuEH1Det1U3Z8sk2eEPeVBVoxtpZs3aatZRwqR3JSn5WP2B5H4UwKR8ZRefecLt7b",
  "key9": "3hKBiQ6CLRni7z3zf6xDKASYoAWS7681EjdAstQi8nAiy91vAqNeaDE86HjYWnqkoiAaCsrw7qSoXqMcFf4j4C2P",
  "key10": "2pFV4UrUFgkNDVsYNJVci95AeLGundAusbUozCskEuzpVnSRkigHNfyiNj9GLBK8vhNcsYjdF7E4Wo7kA6ZGUysp",
  "key11": "29XhVe1mhnftp57DtJP2iWxJZjsUcGx2ovuAeXCCjbvzRkysFascXtTFYdUMLSY1CsWYCs5Bxv1X6R7kP2HiRAT5",
  "key12": "55KGgsgiXqNYoSXpjLG315H8TDDgbfRRcA4JDAYScfrcBgExjA9FcEn8phC9vw3U3JndgZf3ZynRhzmbEiMELQnB",
  "key13": "4rr6f2yx98oPBc8sSpLdN7yaksc8fJRzVgLAhpKuy1W27Z3H3m1ViCdYu53MatdVQngJeh4EJAHXxJGJsPu3UCWv",
  "key14": "vHycivNDjo7bRuRSCAMr4bjeFgjXdJxyQv8DVcqqt6KHTPsES1PeM4MeVpXCUvxFA2qJfWQJV3xr9yATEaADVXH",
  "key15": "nnedLFLk7GKNnA4Pjcq3yKXSL3mFgvDopd8i8ZbFVbvebkhnfoDeZQ3zMAavMVW69PsHiREvV6ZKxPxGNEsrMJY",
  "key16": "fPpLzaioM8py4PfxoKqvbdgerDHdA382S4DXpyxSWtKEYsNH4xS2YU8hVs83mLCmG5nKonGPVEf9kaqLWc8NZVd",
  "key17": "wkt6Gazk2XEawvk2Mgb8Tu12XcNHYTp3uZDyrK6u8dW3o9xhXLdFgin4HeDq4UMncYUDz7VhZkZ87iC7owZHoB8",
  "key18": "3Z3uEtSXnRDq6X299oKHcPCb4ysnuNy91rjKJGEZTybFMohr3VZh3i8CqzY73j6TDUVcdBTUjkFTn9X1phVxZQ5j",
  "key19": "4D49iwGYC5v3HfRLw75yKSRFhymH92AwLHMJ1SNKmNScoZ1GeGj134pv653xZCqhVjQeYxQGXrGSrqUCboXGkLNf",
  "key20": "3jZFtgr69YWYeDabWH4ABZ6T6HBfzbSgXinpTGXCohm5WuHeobG36ucM4HYsm8ge62kuBVd7kowSJJ7R23urMoUA",
  "key21": "4oAWrdeZRHUJJen8jhEA1go213YAbdaTW2qkKiG6sTov3vKEhbXNjJ8ERGZYxUaWmMkbpJYf54MzJ3KX6Vqx38KR",
  "key22": "2zN4CiEC1FtEKo5dha55xqfmCSrRNr3HE8dG5jX68PitJuCrrJYneLKS7sX9oEjRgPpgdFLSHnocBLuA7UDTpoY1",
  "key23": "5AmZX4as1rU2aLw1CJjLEztuypbUpoZPCWduGpBv4iS7E4XoLxctfmGqyiZXbAXLLLEfCRbRCtTJyuF1FSVo2WVt",
  "key24": "5GqmRH1qsMZyEUHFiGgy4RyNzgAsFHBVn6RFjwhjBTzcTjLyHsjzRwoRFbZZTDgxjn6Vnha1Ks8KkZRAzCbeULEg",
  "key25": "spSCuDbJ7HNkF3uaA9C61rqKfsSVw7FgC9Usc69k44jr4CWzaoFZ5MYeJa4nJX9PfgAk3MKdQHV8dvmpPPy7ZDH",
  "key26": "5oY4GYjsemyVru8qmhRcyupwVDpfVv12tEN24bj34xtTZSs8AMfP8KETogAaYJZWUCKaKJAmbatM25sQCF4ngX4v",
  "key27": "3TnM8pdMAGMes6LKrM6SLJ1dyZCmTdWVY5CARUnw5bqeR6Re8HLEMpphy5Yz9Qdm26qyJxprpogeJUKuhSdhFHxj",
  "key28": "5P23vPL8FounzsWjRx11iC7k2hYcfHQz6x529Hovpux7YADVqwQVusicxveFMUPh8GUQKGewTJVq2wYdWBQVdhuL",
  "key29": "2fjepXSFM6zLTx1oYaeDCwHFSWr5fKi5v3GfXEysEkjjYhmoZv4HxvsYMXbCXpoRfxxAzJi7Tcx1vmJZAobKdBFV",
  "key30": "3yfcL57JPA7TbcsRoYt3N9pPPUp2DxHCNbNncc3E6rPDC23esWDBoq8DEV3xoEEz5fsLqncne4EHZmWQZPe7JFTF",
  "key31": "274MDuwCbYtHu5Vm4CLNUG29nFrZgEXWaACMkDrjYcshwbcoRxmyVqhULmf5uWhEYSavWXxnifGLEp3k4mcpFQQt",
  "key32": "3CG8CK8seY2uwmT8KCyRmoaknJgudZisJ6i2ZF1DVHdZq5xEGf17Cf17maY6ghk8jD7KyVFrboHaQyusHb9SRqHh",
  "key33": "2P9RXjiBrHpxJT7cTH1fp6itAZBNNZcY8CE4xXeXwT9B2eqtHHNts9Uej5hLGSaPgNvut3GftngJiFbHX24hCtGy"
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
