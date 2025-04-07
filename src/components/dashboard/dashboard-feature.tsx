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
    "3i8sPMrTjpXvDQXUVQy5hJtGTxH4zWD7RHham9hQdNxfNVUQw5avS4RsF7J7asYFtvxRiMnKNbSRX8DACEs19EAM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BaWBfSmKM6LGN6Bp36pMW4g5bKW4M4Ty6wKMnccotr9PNpsYWQ7o9faKmCvcR9XATKJUY6fSvbP5siuJUqnUbG3",
  "key1": "5EdppjZkJbyQeQYEvqTm8HoorBB5FNwqppmuuQBZLg3NFZ75ZjLTtRw3mSJzx1tvhwSTw9XxU599BfUwFho8dQBt",
  "key2": "2Kcb7PVUntoay8USwGCBwuPMiCTnSqUsNkuvxLVqkSSyZFZ8mVKSo8Xyf4W5RFELdm31WRgDhzCuJs4tC4bEMct7",
  "key3": "2bvQG8ct1RqCgRcBHQpH5EbwYqKYSnnfGuGjvAeS4dWJ5aBDAPXRAuCLZEvzbz74hBLZTLtCXybsHJvbcveRqbEU",
  "key4": "2DyXb2c8TZ11GT4EP4jreDfMrHxPZYfd9dLBs2TcvQQqwFph9UHPBNPtYXAbmHekvUzZcCxHpuGyr8UUvHhM7NY",
  "key5": "4wx3fnuEnNETsENvpPXT7NqBxm1mTbcek3HEjbJVUaP7Vf1quTGVP87niNqYHJZANfjw342Qy4A8mxNLTXUDz4AF",
  "key6": "562uRsLVUGKRV7sqecNAgqCX189YCe1X7DeHkLnoyG6v6S54NNsai2kk4crpKYZrJxi1WBf1UuYzwJUUPkTTYdMk",
  "key7": "5kcHomppeAmu38HgYV8oBspZVz19kkWtq26MkMYXH82L7iLMhfs8LknKzCtPH2y6E5YeSztDWN5iPQ35YTLoA9Vq",
  "key8": "4F9Fh9i5ihYCoXhyjQgg644W2cFChY4tuRtX6hGVwbXyn1V4CoVsLgZkQ3Fxy7tYG7fSMLmoTs56CAU9JXuUPtUz",
  "key9": "3rVnMx2xiPCNMhPfKuLLjcgZxtdbQFhUQwGKqG6qB5SLysnDc4uqY3or3PENHYCP5v8bfhgwERPrGYC1LU2RUZE3",
  "key10": "5FtoAEJAfGGeEuoBxJw5ezrQDDb3vsme5WZzS2PcYpQFTk7X7KRUWyWoZyE5jF7szkBgMiWhz59eTneNHcnaZ3sg",
  "key11": "25c2MR4iHdGgnTihPob83oiELQwZhdgVrDLH1noYesVHUWTr98ePWwMAeVZW4yra2wRHSMsi4ZLEegrU2mMkApjK",
  "key12": "3xydXjDdeqJkZjEW4SQqwEcyGXLevrwh5B2krVhvkZhhQ3LCNs4TU2FKDQ8vL42aHFg7Eg38QhCdCgFR4zpMT4Vv",
  "key13": "3drmbFf8CYhi9kKNnwZ4rbf8GkZLAppxxs1GSr7AvwVjekRtR2nLgvaZpj8BRtzJ16CxH5USGygpvzevmmkZkW17",
  "key14": "5ai2sQnxr75jkH99tc6gMjn7bV2y6sSVdgtzkg4n3gn6BQhSGJBa4djDJPstppYnfQrwRkBRryvbqxG8HDfcjJjC",
  "key15": "29M6SZ8f26d5rxaJeS3wXnBXVpLsE9LmxaEQtUcemYLgSQcuoZ7ZunCbyvTSSwZx6GkqpGh2rztdTpgbPMt4D4Qc",
  "key16": "5VeufXviNTx5w6PL9cs2rov33pxDgWua4n5qBVJTHDtJBwTb9Mgd932perX7EZSywCRi8BBiAcML5CaGP52Kgzzb",
  "key17": "5fq8bhKsh3yoitKmGnfgUV7XjVq1yKafPNtCCsmcR3JACmt5oPvacqAyw8SvQ4yzPqktg2a7ouTYhqTckLNQBQP",
  "key18": "3xcFVtxDp2YZ3fywRuNM2RcCYkrBYVbgrsjN2kTCTsCePF89YgaSpN6hyp7oJzECZwbCW45G2xdQpkoVejV9GgTJ",
  "key19": "iyH1D6dEgrNvxSZiBwHTm5EWZyFAd3axYEGLBctabmCPj3re4BPMFGVMSr24A4FsApUFEmzMCJMoDEWRdHfPaTz",
  "key20": "3FxHpufDTg6XvfwwsFmYkSEN28x9FkB3ZKpDw1gnvwj35Unze7kWtf3v8VLsueL2FNfLNpNgjyVtXEY5TkmUkhjH",
  "key21": "4r2gdpMUCp1EVgMVJD3ttf7kEuBup4b2K1YsBvc8bL9Qemxx5x5a8bWKczZAECCTRg5x9iLfjLzZMPPV3XuXrX2A",
  "key22": "Ui7gQGHfhtbpfauE9Qja3R2i92XU2c64R5rt2rGR3iDVcUu5xJ2C6HW4fcNCisHEeR2DDf44urv8BWMTZqCRqYb",
  "key23": "4Y3TdNXne1nBXawbvVkBF4nmJKyCwdm3zdAJ4vVzENk5tXKRVCQJnK4YoacSzvWxJsPrJiDMPPCQMwn1LzsspcYV",
  "key24": "4Hs9Hhoj9yqrY47h9dvri5meeWKiFSLqJQdVynKAAXEXdxJysCkXBToznJzaYfwvrTktEouE9Q55RiAcmrVyy7mB",
  "key25": "4R4epsbeFS6cDHcjPXTm1WRFaQczo4TBxi8RuT7LLNUpXxicRaXNeaEKUpc1EzC49Ya6KLU5Mu427dmdUyuBtYVF",
  "key26": "51TJfygougmj1jwMYRyzwifE4KVfc3Y9MxQBuGRxBKGLUajVr3XjFrXn3475GuLL5AiLLXESSrtg2AMg85eh7Ewu",
  "key27": "64DVgWiiQoEHMTESjabKM98cbz2uWuCetwD2VHscLWnp21ZXPZcdrmLpfHLXqeYfRzsunc5GWjwbj38cN19XqBfP",
  "key28": "3ojqY5fnSzTNJq6sRMSDcxhtm8hhGUhmDB8zbMHek1Ftcebnb94n6syGwdamQBCGz5s5uAyWpRQTA4NXYkLSfjxf",
  "key29": "5XuxUH6ST4kcP9tgAyb9YeiYDwsFtesaoApPQYsxVJUgASBgaZESDMDFdLHZdsxfHHYc6DBznTMCojNJvRLmpp7J",
  "key30": "3fu95LcDK5adyjDR9pm31nihqBVvV2u8TsFMAzR7acCg4dYWRYq5hAAdxcDhHDBqU8UG7cPE8UTf3rg7NNayaRqn",
  "key31": "5oEcg6eg14bbf276GYKr8MUvmxbasbtBCHq5zR268KS32nRQnSCPwtenNQr9y41xZE4pUGUqE27YphdVd7naV7Bg",
  "key32": "4rKVcU1QCuNCF9y61WW5Qvj1uHBCXjpEr9SwXfxUuxW9ZhFAXmeELHyU5RGiPdNyc1Ty7tPiNAqR535cHLF5QHk5",
  "key33": "4cTKjZ2CCdSs7aYAz7UwCsb8ZpwGy484KbJesmJQYTNrcXuFTHDix1WmbcXVrYi5Kht8QPTAZgKcSgfUtcTXp69E",
  "key34": "TmSbjPPyEqSCjfPt2ZF8nnjrqdj8vm76pLHRSvNYMwj6LbDP5LBRenf6kpb7JgLpwKBRSXixhCM1QWVSYbsvguB",
  "key35": "xKTatPkPVfBbNAQFcqUtCwvczGUyopWCP4DZwAYmR9qyb88f8214VXpFceQqQTdRuV3PVPmwUJWQRMonkzuRBDV",
  "key36": "3m26aW7i1syDh8wTyP2NPoKwPQm1v1nekw4f4Z1URbnREAeoZNrCe1ppsmArXGtKL4KXVCzYRJHgU6ZKt87Tj4wQ",
  "key37": "28UVixeHzDRiiAPu88VccMRDHEWrNQP6oNbvxmbrMJMyxRW1xWorF3hH88ypRvPwo73EdcLVFgWW6BQNQdkFSNvL",
  "key38": "2SL9AXVhAA4Ep5Kv188tcn8iKHQqip9V4mRh4sByF7PAGaj5GPVHLxwLcDGXMFxtQx5S13mk7b5SFLjHt11p6eM9",
  "key39": "46biZRYhoCn6G1WSpo9RTvoASoHHR9A452eAUmu2cVk93nJMSGGAU58nx2ee7b6YakLTucjpaecCoAcR2eszAcnY",
  "key40": "3rqCQhzajhnCyGRQG5RWy7eNz9AWrbGbMGw9HKd6vkdNLhJNaL5ts2Ebiyxq2q1RZgYzFJ8uxatrsBJGB3y7u9Y7",
  "key41": "bisskGqWRQoJNF3o7FSSw9CCBiPamRoYwftJXcVn7RJVRyo6fJh8PtVAY3eeyTgjBTsnq1wDdB2VoqbT7rxED6M",
  "key42": "4AyEU2ufVNPxVCX4izq1h9Z45g1WdHzMy4EQ6XNFYDCzb69kmirJyK4fPtB62mF2z8XuEfbSctLmjoJaXMZ9bE9L",
  "key43": "3iKQmvxsXMRCWH4VCkMeCjb6PChhoh6uorCKxuJufjUqHxbbsgmMdusWZhd3z6fSEnooUB14MpwvzXsvWppCSuvs",
  "key44": "JUzrCQF4XYkRM2QM5wHQCFucWocVP2bg7VsTVrquGsnUSCQPcGuMVe9tzp3Y2fjPxP32TFgN8gHUVxQESK4ayBR",
  "key45": "4iqybHDipJFq9tNdNa5UsTEF3kBfK9vPkFJEwgY863kM53Z7swHbdFzaeP8CYsPuKxMHUEtog5ap6YwHD2rt2avC",
  "key46": "4ykUcYDFR6ENZjP1NAeQySFVSnmGSZFjgxGBSr1DrQjYAT11zNhuoYMchQKEcrCqKcxL7soi1myjzToj1oeqkXDt"
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
