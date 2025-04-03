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
    "5ytnpbxjc71amyixSohK7QNPNXWy9z9VjL9pPLpwjH87gfhtZYvYotpc7guCv3KL7qB79bAPWx9F2HXWpdyMPc14"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29ZGHSn2t6NqqFSrTp5bKnfcp7JRVwNBebf1pMPtszM7jQ5Eezom3Tx5kcWXeneSfhUeCdidUSZtLcm9Wp4717W1",
  "key1": "2qUBjuaZd1vsFguBC7k9SZew2rDoUohEtGAsYt6TE5TKLbdS2Q8FPNF6eYtVw29ozAuMUsrc5WYRmQWE3HSrDKLG",
  "key2": "47SspDFuN4hZCe7nkv9hTvMHZkexmCU6Gr8gxx7f5zn3R8TWvxazMPB5ekKK9kyLYftsostGBwL2ZqV8k6HgP325",
  "key3": "5UevuM9Lr28hZ2QVz38Dqbtd7YeDyrHYYDtGrbHKE52TMmCgetqE5nav4YRjEMg84pCZyknMRpxSLKJ3WAxcS4Qn",
  "key4": "46qz7i8tnPZjb84dXJLCpffpXANVeGdrFr1P3bQU3er863Di21VeDg5ZcJ6RHYt3dHqmXLrzfRhPjwupS1UT7s2W",
  "key5": "63Fu1uFR6dL5NQxcjGVYLxrBsv6KKAJbRvSbhtLwLBCAS5HEG55CcJZdauU9uMzhyNYFVj8R4XhvhwrNotqTv5Bq",
  "key6": "629p4yXXT1W77xYyj9Hh1wQ3CLWpdnqZibxXM2PHvdkrbcLEaFWiwwYQcv5sik9Uvqd4ajcHdV8t1Tyama8vaCi",
  "key7": "PAqjZN3AeX1BJLcNvQQRasmC8WoibgNThaaZDoo4sP49pVs4LGySk6ic5fu38nJUZXaMhneDSmnfR1hf862VZnx",
  "key8": "3gZRJBAWSQo7CHCq4v1DP6R1m2o2iEPL3AMDv8WJjQCAyNrdA9rJTev2c5GgNsvgdMP2jPm6dSvTuCW1C2JoD45f",
  "key9": "5ap143s2aszGJpueo52SUuy15TMMK3vDMakHrnyHXSwQj34QpVoLVZPE166jjo29p39FGYnXSvM1GHtFG41AKqvY",
  "key10": "3pLShEAhbTzFETjWuoVZPCkUtpPupCPCh2tRJbfknQsV3fKFsExPFx86ujSCo2mpY5Pgj5WLuuDUFSz8CnRiWGNB",
  "key11": "2ChbczsuyZjPgDBzn8km7Uv3Wvpac8eTSCwXaEeVHzMTNrA5QYmb6dZm9S3jQaonMtrar4pPXEX6vR68my2LCF41",
  "key12": "fgvp66o5E2Sym6ZQzgvsrBPwc5yLqyMYKhSnSz5BSw37D8mQgRg3exTPNAa635FJxJLfM5gAZEqMuF6GXWiqs1e",
  "key13": "2ywPb9PuVgRRwQjFh5MYcPCKo56u12bUb1oj9FJnU6b7GS3UjSee3CaMJHEU4W3TZjxvk4XMUZ14YwzmEnSfcme",
  "key14": "4Dm3ao8AVZzp347zokodoKk9qa5r4ZXu73VXdciBNY8DpL1qef84RVqvZHXJohnqyhkdT1b85FomPDk5HYvQ5hBS",
  "key15": "cPZppzYN8ohK82bKj11ojomKNojDHYSntRseuvwbhNtaFFngQHtEb2r9YhkuJS8TEStxwqW6dj7GewstPsV3wrT",
  "key16": "43zqP8QK1B2y4g3erDyXVyhCWUmUyZXRKiYd3ytHSJ8KyDHozFwyKX3EKB8jvhEyPiKpSf7FVMwv3UVgS8sGj5dB",
  "key17": "2LM7P8SURX3CWXG4xRaAZKodP6bVa1ovGXLewEBkYtJMzFn8BBK5E7RRnnqj89pbJ17kR8TRqdpa194pWGnr3scz",
  "key18": "5mUK56FaggXbbuQzRaZgvG7iAbT9Mjj5wJGEXhHWQA8fAsWd76AZw9NSbfySpUK3TrAkp9sM3JVdPM3HJE4PzQNZ",
  "key19": "2dSnssPuc7gzCwEYAz5czR8onK81u46M5pEdYJAFB3HsFZ8mACZ9TpY7oartPQyWJ4NgqRBnQPm4v7mS8okPCAiq",
  "key20": "2QHjacjXYWurMPzx7vBwgMBeM4rGSJ82XcoAiewM5WgPsiTpmDj2bftHjwtBuGs2ihnsHmvy1rPPVaucuUHnAmUi",
  "key21": "Pq83SdAj9cL2b265Z1vHFTiGP4jLXUrQSC3W3v6Fv1TfVJCaWUQ7FYnvPQMiEE6ReqJq77iRJ9WEvyn6uXkEYpN",
  "key22": "Cx3V1QzJruSFgJfHWaSL4kcue6P5cp8v2FuRqUEdcJ67Qobuf5Ve3AKRv8mzgt4atLLTdVxMtiUXRgvqEfsfB3K",
  "key23": "MccrEZWJ1hiXpiDp52A9N6WfQdnByK3TgeReqYURm5H7oBBhw9TNuLwyTL4ENaP1dJC8cv4L7mqqWPN8mjk9Md8",
  "key24": "56inTdPxtvVZ2yFNSsCh1KAutVLxyzeeJEhKFcWB7ZhfH1qvXssuKQCwMVSdsCTwDdaHEmfRZAZWRVKDbPiXu82A",
  "key25": "2P3Uims2zajr8V3pRh1MLavGdXBbZoneGqRKHarLZxjaysont6Xe9f2F9uNEuotLwreR8HGUCWec8f5yC63hcz25",
  "key26": "52EAC25vrqMm3fBnFCUuJydYeaCztk7ZUJpctY75aoLZBuRC6nLR2jPs5YAH1Aox7MxH3ambzNC1dQjHWL96htCd",
  "key27": "337fnhGq8xSrZgcGpaoMGE6f9vXzSeyVX1QwzcytPMBSffRb9HVrKLCYzoPCBS14h6smn7WPSS38EBDRtTCy4MEs",
  "key28": "5izE6xo7Bnm34k3jCHeRtLhPj5Rvp7knSfvWoaFNRb7aZbdVX639mLPDMBZHz6kN5F75Weng5VUZqR4a4hN9JHws",
  "key29": "JdRuTNYvvuLLoYerFmbHLYoJoj2DyejkUaPoBDUvczuUF6KBEN5r8phKrN1AsBGYjoEQ5kzZ7dKqfBH5izhdgPL",
  "key30": "XxuEryD5ZPrawGwTyjgbi6wnioHE86tabMUNvMdh31LJYePeXgr5h8A1nAaa7Y7QyaUKSdR1eiGUtqqrxVyjAEM",
  "key31": "3gkdZKwLbJGx1d5DFDC6vYdXLWuVUMjUEw1ku3jmqCMwzsct8J22Y9jtjUvTAuBpRZVGtr9VnvepvmDyFmRpghBG",
  "key32": "2tKs7cdkU3t6FYt9USjtYKwtuwaDQEPPTk7UFZd6kmyLtP2LH6fhfTvBGenXi8zJifX9KnHKXLXHVkx9immTbyC9",
  "key33": "5KX1FaY4kHh9YdgNYHxb5VAw8S3kDSQ2QfLkyJYd8bpfDVT6FTHELQDxMTN6uXK3dENVZnENXXqTg58ZrXgjpzsV",
  "key34": "ZEY4NfYtRjXJ3EYPPADpB59jT88BGhUzvsx68hzPfZaE3Q9wr4DrW1jqV1KMTjMGcNc9ZkU8qkA92o3YVEzGxNP",
  "key35": "XhZhBFsNj3t6sJhwz7ASBKYK9hhMLhhkg36EspRLDQusSw1nCM1pNafzKnK3oBEXTc5523Z8S6Dsi6kLugKNEHe"
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
