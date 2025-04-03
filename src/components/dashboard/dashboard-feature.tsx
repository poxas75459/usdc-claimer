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
    "4w3XFufWKNRpzhQigyWLwhK6ZzjHgsVTZvxm15rJkfqHMWVJUdCyjwj2E3XkMthsVYoYMEkbHSpuUpLNjbExHJFQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Q1sux39czTUXFgUcXzbdBGoUX54wSf5RC1TMwxyVZ5KWbj7ACXVKGmnvzuqYLCpHkovJssbvmPP76utizc3rv8P",
  "key1": "k9wexLPtHtSQc4WHwFJtnqA3YsGodhHDwbVAQsxgrHRQRbBvHccXjqdozYRtYsJdvSuHKAAqidvXPrjrneEaGvP",
  "key2": "3DeV1GdFBfaYmuWTNMNJWqHZRsfAJw8j3LMX4pWmr34WtoCWj4YE18SQnQvHyqJ5wr4of33VDq8erMzJQQqwvikt",
  "key3": "2g6E4CixzEZu2VE6JLWeuEuEaCgNy9WMuC6kSatLPeRven9Rnfd6upPsaSU9eTXitGefFEJSbe6Vp3Sk7MHbFrLN",
  "key4": "4poSv5THf4sw9FgCHBoUet3hf7hcigi2rqVubB1kSQ9g4Hh6w82SNTUeYDSXsNHSjqYxQRh5rJZWkEwuMH56bEWn",
  "key5": "2qGHrvoSLWMsVHrGBeQMgwzfftWwr7rLTWQxtq63GNH3RHspzdrfXGSE8UbDm4dEV44NWibaraS7MaFShAyNy5Ux",
  "key6": "3LPdcjDr7kSNyL4ojjh8TQYurVeBu5avNdG7QRFFRMPwoyLQtxWBFqWSP2X3XocR9sSptLbwCeAmRBqYUfsG4qrz",
  "key7": "4FTEYyWgVswgVDc8hnqyDhyG927bN77Sks5AFKXSXi9tfY1H79MJaVbDHWizHmqWM8nsHgHU5smFsawTR9Qp87Tj",
  "key8": "4tFxsqUod6BRUjYYYDuAEwGJTMBSAiB5m78TSPmw9Bui7hGoAeNjjCv85ikYC1N7qqrjEF5qWvkNN4kFmPGesW94",
  "key9": "2sTDxSyoto5XU5Bez76qu8EvEpSSSiKfpe8XkGb23H6iL9z4f4AiLvYLvX5R41XkyXUdrUwuQJbtWPa4LEwpMXyW",
  "key10": "5kALysuSLHaUESmp5bYQpMeXkwBv3kmpN7BESvWaiTqyhm8byqn8HNheTwKKeyU3sRLKpbq2P1pDszFW73oJFt8U",
  "key11": "rCiYzDtW9fPqiQX1av32aFQkuz5ZXGMRWtanuTEZ9w4PNQCStSpujaRaj1n9nnbXCpqhWMPWMURgg2aWMmvWVKi",
  "key12": "PPmRBQmVAq924q7yjPZUnCyEU8APgJe4nAAnjCR4yapDcyZRyAHtf5cYbLLnpgb7mUtLop6x8zE9EmECkMk1evu",
  "key13": "5oee4uPykUf8jzY992WXYFzcyrAJ8hhZHYJwetPB4XxwmkhW5aCBoJi2gS5mvmePsbpTqnyJ1Q2Wjdi2x3YaAJBL",
  "key14": "4FKQD33DcMK6oF57St1c1GvqU9vz5Qfic2yENeaYzy1rniXTMvAdEUE5CnhaL6BdUVVFSpetnXLm2C1xNUgvePJu",
  "key15": "2DUTFqBRsktudfB32bPHzZCK5zYr24gv6XENEoShDi58JfbpNMRMv3pDZUKHehyUNCw3efZsd8ppXZ8hiK2TroWW",
  "key16": "942T8HiTyc8VdxgkKk5y8PdKmaoU26F1mgLEBZ98NUpRQ8T7DahYaYhHcJjstibmr77rV86LmFRMUtidZxN8A1a",
  "key17": "7FFdmHeQ2jhrvcqAxsrUm77zsLnF5uSZzV84AsNWFABEFCN5xmT2yDMNC6oG2ZZLkafApFK1G7svwsUJzcaFBJD",
  "key18": "5iKy1DgeTLYLH8FkmGPdb2gKdjAVE2UTjii7Ci7K4EfK6YqU6hh9wqaXK3s7LRaCutoQtMf838A1APVw9yzL7Hhu",
  "key19": "2RSKdPqWakaqrzD2UZXQMkyoUECZBttrMry5THSWXp86TJY1D6f5Vx2YJVMGjZRbW3rkpLfuvH6YRGg7bfysaPb9",
  "key20": "4DRy5woZYT63Xy9yxVcWphdr3WJEJj8Eg7FFidpAuejesaFJr5Wc57uQv58PYPz3CyWrhjopEkwiJSpo2x8ANnn",
  "key21": "3RdW5TKjW9mrSYu3SzzPurXkGFBNaQrAVjvMPWVLAL2fRru2pgeqQr5LCABmM6P21XrHtwUWiNkDTKEXARKVXeL6",
  "key22": "5Hz5dgWxTKM4GXgKDRytmrrDYKXou6F4Sb7R2pZ7bjdZ6UcVyKPQGxEBV18mJ2ABfiBQYhW8UYJBe6cpTMwhobRd",
  "key23": "2E5fZD3dgMR7UN71JP1egXyQwuE6hgLF1iDccoyQvr9egjcHKGeVhCgbhU7zbhfMeqgSrdo2w4L6PeGqmDKc6tsY",
  "key24": "RJPMSaEojiUnrLsLLTNWGT6hXLLCPxF8BGncLNxSWJ2kD5qKop8KEf8MvbiX7TU31xfzv3BSim1HiWAjiS3e9hd",
  "key25": "2q3XH7kUEaYLdgS2A3hBWgUkXdq9wHGenS81wTLdHkoeG8ozBmtAx1Z1pZP6BfXMvvQMPyFSRE1CWGpEiJkkK3UE",
  "key26": "6fiQnyFHErWiAHZzihehcrTL3SSbVUXwPdi6mDMMkCXhVaDTEQbNU7btjmkfzCWysNN9bvEkJAGwdAxaeqCWM4X",
  "key27": "2k49bCQqC5GQEaBFVpA1BFtDGYxCVT8ivcx4kFwzFUGxAcyUycwnGDzvBPU48F7VGHidS2iAuTvR9oDar78RpPSA",
  "key28": "2tSJpJr7tuV5so6oL6b2r59hrFYWpS56t7TVtZHMzDmre2cfmCUGgVKZLi41zAeKXcaN1SejfdonTpBgedSyKZpU",
  "key29": "dpxLAgVw1CdcvB1Z83sPoZkdy4DVwi575iZLoZpfugduPw91Wq6iz8rLGKnmF6gQFfe879F6jxXXj5KmhVATJ13",
  "key30": "4xsobzZPFk46wyExE53W5i9e84UQg1azHjx16oJbjQ6Wcmw6QUmKGjoQqJSEjvw9QVye38ai85ahTSDiBmGbRCMJ",
  "key31": "5YkRfqG7CVpx2xF4VWy961L8MvDfAAHNFvCoXsu8j8CXbSt6SrhwUfT6Vb8f5HsWULzGBmE89adyzHkxerhzmBq",
  "key32": "31WHab42UfjC8Pk77hhTsvrhAqtCYqgaWxLDNhxGGAD2LumQ8gTahosJBteKUCork7JVzGJr1FSDYRMqdHYWWhy2",
  "key33": "2fFN4ywNgLs9j3fv3yXuvHc6B9Atrh7KwLZnRqzvshs9A5qcfEH5aoQGFfxdHwAbGmdoQ9xQAnZd5BPG5way1KTY",
  "key34": "452dbCfsgbJnEuVUvYfGgvaw6X62BwgKUHat6BUYfTKfxfRPt3MrK324V4zfEsuqrxx3M2GZRne5YxYhuNZC4Gms",
  "key35": "2RQEtBPNjfupDX9Pce9xxY4sAbVwL3oMYTprtBP2MaKgvXfKxFnuGo8eyaG4xoRiht71py6rJPFBUrVXC1fyr325",
  "key36": "4jgMuQhnB4BR4L8o8ZtLbTjq91r9B5o6hGSxJUfzTB12mPAHN5RXgZtW2WS8qZnuD8Tzamzu9ngnkZtj5bR4kouF",
  "key37": "4dXXa8feCB1zKayyiUjMrSEvbVqMWfNV6JbGNzYVNvvJvKg6wSy9pBNjsWP6wBRyaLJv4Jz6Cg7V6u6vWducuonG",
  "key38": "5qoTQKaxG2kjPpT63gL3wsu4V2bJAd1bpqEwyfLMNtiiqJCs4rhoNhp5Fjooajg72nEgRo4DkVVEXgGc5rPewaHo",
  "key39": "41SYtGLbRJXF1dd9HSnPrA5tdjgG8vQT4gpXfDUp3F4CCruPWS1Hh4xtQgGcZCzSN1TCF89jSZ3yZqfEoTaRJ8f4",
  "key40": "59SQDc1kF7gAGcXfPqRWE2xBxdQrPfm116zNvmd6GLUzVFF8tJ1uSaA2fVNVN3wfD3x935QKP9NkcpwtexkfgDiL",
  "key41": "3UDFuXzKKzanbR6jKvHEXzhhMoGP84GX1ntRFp3D83485R3MDvtt8BjK1TWRLcCjpcXmv4ULtaE35tgmaeQfw3HN",
  "key42": "5edoznJP3DGsPiRgm5LTjNqzrjzjHdRPC4L7hgJRneNECsh11phNJQJRnnCbeFZXU5iaraXBoNLmi9aC8ihRmRqJ",
  "key43": "5pwDp2Q44KG6s9fzKPv4gqKaLd6bmbVmVTmaHHuwU77ddBJFKcD57grYEBk3mQYqct7Hzh1EQdkvZZJtCzPQAMcK"
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
