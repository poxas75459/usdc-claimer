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
    "3gP45TsSpWdNhiNy6aeHnYfeeFays5anv8wC9tJCcSuZMQrSauCiErpba52WYu7VTqE77SRdU3EMREvaMCFwY6hr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EPBUiiqE9GHe1CQAkkBSQLYiwpCzBJgsymJT1iceX6wUpLcVwVSajgHwiW9h3XyrkHCXVqAgjjtajJqPPtQx9jW",
  "key1": "26Kmx7JDs5uyzBYFu5h26Xcm6BpoQZotnKTj1oasaxmri4Cn9yzwjEH4B9AmiF9gRMDBZA56wBrCsXTnZeDBkHTY",
  "key2": "XxNYVn6pRABR5V2pJFGv9m751VT11wEyoLszXoCQqNtog8FNrEvPrwQV54ByYvv9csHZRgiE5gkxZuaeEg1zcQq",
  "key3": "7jcGJcefywzDJ1tZLiTxa9fVMVqTphmTYjMgpLFDpnCC12grEUZN7vhcYU6AHQY553xe7BpCGEdHTZbFffEDiNd",
  "key4": "fzFsUvyFg5Qro1bR3mTWomgLThR9uRcPEGsGAKxGEhnb6JZsXux6Ny6NJT55UPdCabwythLNbZfAfQaTLCLkcBK",
  "key5": "A4PDT1ZiwqX5aBUMm2v3P5h2bUVoPcfadjVSVxcTkzTYfgBUgpM3MkE1YkjRohA8AbwV28jeG8z4kRkiiaSZoXh",
  "key6": "4RC9bQjZb8bxBsazjAyRwe8HBvAyDY63TuaNHqo7gaDYUt2GMHbhXPKe2sprM1wv5D9j4QPwB1G4SjQTvJZxBNcw",
  "key7": "VNMuYmEzxriDSejywKZooXTqwUCj8VFTDEgo58GyFQQKghSr2Vmh1Yu9QHaM23uYVW2Kytx3hNZLPduxJV2Dfdf",
  "key8": "5DayiUcVDK5qtSUWobRVbJcmbP3LVGuAvfV5j6SVobGDcDw4SxTeWW3Nm8C82LhebvJa5qMXGnYg5xWcvcqwxfhM",
  "key9": "mRyiN5Q8YYCUwHqDLoMbo3RxtMC8G7m6MSz77Emf3UVjMxr2GKwEuQuzKCv9DgA35Ta7Tjo2tHGRwpLoQHdkLry",
  "key10": "2jq9e1w1uQ39oNg21wFzefpFqpvzkVMvwXGg5vcTHTrkhrtwuevVMXwBFbBR7Q6yNDyBDA9wKhPi32LfWbH3W6bn",
  "key11": "3ntTNvYdUAJ1yoMHzHoy2obmoJgYMU765yV473JWPaC1mgznmNBRgPaFRF5j3Y7DpPqMuyychB52K7Tqsn4buPbH",
  "key12": "5vBSDerBYnHDuba2WCtkoapJzbbGRNQeaAe8acYzwqsNLQKbnUSXEMjHSbnNGsgNKenE3oHPLNcHajUo4tvp4s3B",
  "key13": "46m42TMUquLzk6tgK9TbUvUEQ8ReaH8zifwrhfxgYaJaVV2U2m8REp9L7rafUDKoGGhNq2Mby3LjX6S3knzKLoaW",
  "key14": "4LHToQWjjypPbvcKQVYj6TXKfgyg44BqCoDLRa8GLfkwxYCdB3wuAE8zhyeFfesvSkz9Ygzp56KoYVTRDvr5TASg",
  "key15": "3wgmSGPKvFoKLWh89f1McZttPCUe9E4y67gSEU6XZcmZA5cAbxbstEwndWYKZ8gqN99nzthVj7L4rFHirGM6pvoh",
  "key16": "2wq7j7TK97YoNUN7tXdgECmCnupsDWX9S5o91a65FvWKugz8v852xQTFjuTVxjZj9zL192EBsyQF9j8do5eMcwWA",
  "key17": "4Ti1FrDXYuqPt1upnsrzDtyvaa6FTnFvwx9sCEZPPq752TUHAzignEvpuUWwuDLDd3bfLFEQUw94yLS9Bx5eF3mu",
  "key18": "Ar3Tp6NawJ3EC7Sepw5KptjtrAFUY5Z39xmh5U62HAy4m3LPPhFANwPvT8hHDXyKoG6tyroK3BCH1UbhX1929hR",
  "key19": "ybvxdJ6uYAyhrbRG2SqjRMdFdB3SepU2S3JiCBeghQGoTGNULQoLjrPdU1dfwpVzUWN5wv9tq1ENYQWkAapxNDn",
  "key20": "2CJWQPFo4wSATDnxFuLPKvLiv5tB5TE69o1yMjn2HYZoy9yt2yhSvkTkdbkPLYBNkosdNmZzBfFDCHfuPRXC8ipC",
  "key21": "CGJHLjE6HuTbsTcVt7gX7NawVH19vMPETUWFGeuXQFzcLiNzsL4x25Gv6FYBRn11mJAH9ZTtwbGd3XK8ryaP8xv",
  "key22": "2dTxc2qDH7s9JszYBUuhwZTGCbWm8KW8TpspK4SvQYr6TWPDGFw6srnJKEQYkgLT4YjJH43cumQTi4Xa5AJR41pV",
  "key23": "5D6ViHJFoxNZjYQkpDjeq6ckNpSjLXJBWoM4TXusvfFbLPmcycwFPEP2urfttwTk5XsQ2v7bNRnbbZkZpTqf5xus",
  "key24": "2URRw2hb9T9TXAJUyhfff7o4ADAyGC3QrZmJxL3GHXDU8dgTmoGEBD6emukf6E3ABFGEFD2QjFhPTzg2xYeJE6hT",
  "key25": "3712UGx4MuvYDtAcdMZLSLzU1PL937JN7ND9xXb8ghRjm9umcAA8iTg6frHdt1yuFEoWoyscyBg2QCxS3uayQ1GU",
  "key26": "2uYqK1LNWw58wtusAfJhhZhQxgp7z1R4pfGVcyWXb2KAkyex2M9JbgBQpLGJwamqNg4pcG98g6aSc2VAJ2vyqFQr",
  "key27": "2o7H2ztqyTz2Am4gKMJmWPrzeAx3TL3t8TCrdSFjd1o5nuTzg5QUQnHfBTYocKveaNZ5w8coPBp6JuqvofVNGhk6",
  "key28": "kZAAkWLvyNqEGLc72mRUPDZzAky77mJa3kWSz9oxCYY2XFV9pVwufV1EmHDw9RCuutfjFDLQRzAhXUcbtXwBiJb",
  "key29": "188KHx9ZNH2fJDWd5M7Wu795T9TNXamsoroZbiXKV9ThjgvxzTeE3SB2jyQPU9pQKv1jfMF2qcHMqPMfo9st4P2",
  "key30": "51vYZAxMUCVBmnpUd5YFKHmAfWFHFsVdUL8fPg7vXKXSuq6wW5ASwaxeSDL3AvQrfyM41UQfmeFH94mn2KW95Shy",
  "key31": "V1YWRhB322VLb9XmY8jT6qGF1NS4hkHuo4Fvx3pcsyLzcVCk581xhPS2TmmurRXFJJuphnVQUx3tWd8Bcwe1PB6",
  "key32": "2cGEnmeRxBQUt2fdvtb153rLBhSbqgbc1BUPyCaZWeXY58quJiP5fZYZ9M1byDwFeCB1kwLaGnTh4dG5rmZS4kZf",
  "key33": "4E8RuhzC8QVALspvjmJVxbTSPLY3ZZujcz46FT1Eg4eXbQ2K7zJhXS53SQgaoqegeE8aSCuRrc1mCwbJ9HRsJx8C",
  "key34": "5xbiUqV1zPBYBWGwcAvGxNANZQxvUeURXu7Gr51F4KuB5pB7tJu8dbWDZ8vmNyLkZ5nnxvuGvZ8MD8QDZnfSnbzs",
  "key35": "66EnsuZUqtcH3ebzSAYjs9b12PReSn4iYit8c9qyfqzpV1t2ntPSmJCyKLAJHASs6s1Y592GdGUK3iRQeVGoeLbu",
  "key36": "RyXwU4YpTSrH7Hy6T2VJhyNVuY1mM5NKVaRWck5We2bhh2KcSvaZ7yMTmjWbYch2ioS5asD3hiDbrrPVwV7NTGn",
  "key37": "2MFPJ7E1T7GmHbrzNDaNkE2ZbzyJK4qjwXaBWQHAQr38PssSZ9Y1MPmzNLeM9FSqipPdQGmau8BMcLZ1H3RM9ThC",
  "key38": "3JT3PKVHpp1v1x5PdZMWH3c3DZRgtMYPwhaWQXmpUx1VyZDJyjH8yLCzwqEk6Lx6ApmcpknSePGpuoQYZwYCn3fD",
  "key39": "3SRFnzRgQ85XJAShVQbqozAYsjxCmsmxTCaJA6gghctWJjpqJJ8tHBzb6mLiWs9Uia9NGaiHFo7RHTwiCVeqNfJp",
  "key40": "2rWM1gYiQLC82fyuKUY6A41GHuKk2GZG8HKvDxTmGY2FrYvZkniHA8tRsaHg25fFkBuKJZtVQhCRsSn8ZQcjVs5b",
  "key41": "4S3ePb7jSHMf2pN3boWKs6MG2VP51UKwokCrQ89CkQgtqdDfJzxjmv3YKDyzXgfNmAZyPYDRt5byRsimpFr2w9qR",
  "key42": "67FGRMsyjYrXuowcDWoXw53muUyTzcLqksdCZpegHsuFXamm7hGDTFFfN7aaohCpAdzrzzeLwXVmtVWUFEJdktpZ",
  "key43": "3jU4KvsQmm31ukaCTTvnBsr1b7p5ABw66is5FW1EBiMxBXnMFjvvoX2uutvVTws5dgvojEbLivVJGrX8AwXkwq5R"
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
