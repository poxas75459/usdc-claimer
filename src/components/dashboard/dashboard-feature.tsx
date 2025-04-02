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
    "47BejDtvUZ5vtyVxdQ7uXaLgrXYvmeBs8SvFaA9DoW9FQ7o4zayjb4bNeZdeQHeDMhY68d2SgDGKEfydbtjMqmf8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uHHqxvmjzgRUmhRY39AAExkaUXZYLmo8WiBDmSKB4gJ6wjQBfr4LxkUYQ5WzLobweFfakdaAEtpDwPXg3HBPfdj",
  "key1": "5W5PbSvchHvHrdGe7oo2zuXGeZSdSgUZo8gZSa4YiaVspTtyN67LdW484SKWBdWB5xkU6vhWU2M8Pqo2KyiadGyQ",
  "key2": "4XCpd524hrnmHPAmgKuDRGN6EhJgaZHbLd8iFJQtFBXvGrUgvK1rhETb1oxsWSX14MijiDtp2VwpYu1GZBVmqf8D",
  "key3": "2Rm4XspE8tGN53cQE5DgWS6KYNmWPh5FA9PjszR6EBNoJPKCLbcdJDbWTqEH6Nd2qqgT25YadtxJxPJMY9XTUEQg",
  "key4": "3HfSAUd9mBb43Hj7PYCCEB9B2t6j5poie3SnuBgbLDzvgHNfQ8vY16jBxycJyfJHQDeDbdKdoYsnRWmh3HdYKq9L",
  "key5": "DNxnrbEqUoXFPqfpvQPCmkRhv8ydcmRN8WMqXdwJ4EQveeAzeZKo9EDRfooLaCDK4rxAYVYhoCrc8sRJmtnMFat",
  "key6": "3F16XWJS9zFaiW76CpngJCoAzaUrcH3KmMK93z3uQPE1hyGRCpN38WY4BqU6FjvaxTGmiCXLkAEsHZUxbMtTr9JS",
  "key7": "gr6CvQvX8KCifwTuCaAxMMWFkL8aBkAmrHSxTCmRFPqB5F73cGEXWjJWKYNRocAh4sf7ZE3tHJkwNGV8AsMUXsi",
  "key8": "53Rg3xwirCkvPSkA6YouTxJH6eAkn5z1ftNmHhUVBayQV6b7k1fYL3y8hvp9Xyx6WozeUUi37m5AArHMXv46TPXs",
  "key9": "5RAAGyzwiUwNEfArwHz1ymD8JovFwhaxArKXNT6gXXSRvv4aD471o2ehRuUhU3popR3BN4AUfjeqMjLSsaVuQvsX",
  "key10": "3cScBqUrC3fSvfZmQLCTQBrcVCoHNKNfLs8xWsDyiSCLiB9XLfiP4ohWVXg3V6taQng9BEXrNsmR8E26hyK4TuFM",
  "key11": "2GHjZM85G9UpE14FLZ6wB6yX2w2xkEQRsMEwrx1hUcChNbuNvLcRieBGaFeSxijEMGYwez2waHcKifQHbmzz5cQo",
  "key12": "2c1YCH1tYfLAUsSJpya9FhQkUF1v4VHw1SsKXNY5YdxhRbrzG988iBWtMV2PGoDq9o1MWoSRnHSiPNykppnVQe4Y",
  "key13": "5x77cgKXUYcHSxjV6LcrJvmm3kiXmbpaxW1ZfSpsgjfJtQyKJGQFzBkzC2xXWxwGnzkqDPRhERTouktsp6vrzivA",
  "key14": "crvnVxELzMxgnnxvKh6WBUTrVtB1SC6bTnsE2RhsrRtctJaNJUCUTYMXX663QeL3kNUWNjcX9MRcFQw3UALA267",
  "key15": "391vUQFhGf4qyPzkdrKneTJ3mqHZKTKyB1DVr3umZsBLSLSEsCCWRbmjeJwodvt4tzkYQXKZZLHtv7kBAGzAhWJL",
  "key16": "5jyRQLVCa77zAdmT2WD5Zid1dg9mk5JvK4r9oVeCmoLqKmxnibzRHQTNJE7vm2hPSPuQfCuJeDLdfU1a5QaaA2YP",
  "key17": "5VGM7fuWxKRwU6SQbAf8rnPzMaDxhFXSLkBxh51ZU2o77EznYrZp5AGxBESrUgC4wK67Qd2Z1WwxP2DzVMSP5iJc",
  "key18": "3LhsNohLhqKeU9uxMFMq5e9rKAq2X4HjiebqbcCVT4eoiDobSu2UrHZMTjiMtn6jEVyGHKvapJL9c86pKH6dMQ6W",
  "key19": "4AcnJMKKWZLyhWfdTiQSnbWoEQ2nZfGwtvBwApktCXcNfbF57zZChzgMSSQtojcAq4QxDvELJU4bkb39GymeeufC",
  "key20": "5Ue5UjXNYHT2sFZUBP3rBrQs8cwX4sTJ5iL92Z3R8cHz1CspX8c1LB67JM68C2ehth2wNvJQdMhbEedhTQJEp3UE",
  "key21": "2Qs7SVyazjo8QTTbEtrFv4rTKkkXhQu3Trt71SCX173Wk1NTohXydoXjybbBtYJXmcKjFPEZbVVfcQG5GyVPFcT2",
  "key22": "2EMJDFLPiF2bpFddheop5hLAZoLBmkVTjh44KhanHzsM6muS7eeNX6UFwmuctFS2yQxbb2xHCb89GrQ8ZhJLbm88",
  "key23": "eP3w76ETsGT7A3jMXCnM2sMtRyrwW3kz1U73PUbwk8jxrhQ4veypxsPKKFDG6owXH5Utv3sqfY8JUomoo43xUFq",
  "key24": "65hX5WeUifudsWCDqceuB2HkVpJNsB7P6yjuBhUCaUTi26nxvmdvqU3tYyn2cU9Lqs7BUrB5AqDqf45x7tjx1Qih",
  "key25": "3Hoh1CU8oMNqY3v9rWCB5K9f6vteVegMb3CGTppqWVfbghTuB1w4WS3ZCWmN6QBsJbn1x5E3NDuLLpqDmQtdm1zT",
  "key26": "126VQPmPBQ6aYCjk9imwJBHruiaoQttjeMDugbFEovroJp2J3k87yfR5ibNQZDCgXedi8AGTgPsbY8heLd1iWJdu",
  "key27": "5B4NSS59r3oxRLbpDwu3eyG8fd2GJDjU3GqEApaQYDqboRbV75RL4Mqzxh1g7jUANJKS8gAhN8p6ykViL7WwvnCH",
  "key28": "4DMeVAr5aTjE7uwuseH3R4tKDFTGCTucrrrcCResJGwUbbiJkGXKP7KA4Tq7iHfpdX34kny93ZhtmcZ9JKEwQv6i",
  "key29": "5EKo5x8fRMpj5XRihFhn62q461pyfv2oiHac9bxXjjPoPi4SAUkrdfbD2cD23puB1oXvbPVpkXkJ27QVxH2q2eFd",
  "key30": "21ootAwBJRo7zY271mcTQJCCcDAexseNRs3PXwLfiopMJUxzV4yi1SoNdiyhy3yb2YWCjp3FTQjZw1HumhzdxWYk",
  "key31": "5rVnGHKCdQhsQbzqtvcQ7hGp3fnFhadg6Egr37y9CZVrm5b3tDymxcXxgb16ArqyTFVqtEoLiG6ymA9Q83u5j6VZ",
  "key32": "2jDfduPFwRtf3Pj5aBcNf2aMP3PZ1WnoURsLC6LBSFmVK8oeJbrv3m9yBeZDTjxRhYUiuHM4AvKMTRMBB7a7b8hd",
  "key33": "5piDGBWwLnnEgrMurFKaBK3XKU5HRhVg4UZHQnmnh3i16nRdYTKG7gX1f1P9GNdjGZZ643jiLVAJEmdjUh7xPaC8",
  "key34": "4pxp51ew24uESDghz25f4XzoqHExyt1Y1xQHwZsNiHgKLok7nnmvakfKGTua64chuaDuRf7BtfHH666V4X2qEDgr",
  "key35": "wdgbsBPFUrEb3tW3JroFFdgwQQrRmeyZvzTaVnAK57FudcSzK9FTpZTvC3LTwBznGPtijutNHMDN6v8NahnR9RN",
  "key36": "5Ka9HjpSjMXAnEtJaq6gfpPGTLd7ZCTZhccLj6Um8XGUW3cDAr14fgyZcBNtnoYXMZA5G9ZGEAewz6ErK8zWCNBE",
  "key37": "2CjiCmqgrUVNs1BDYYtESu5AqMcDs1QVob5jAHuJts8Xkpwbq49ZePnymdau7bxU3Chc6kNbLcBU2QCAHMGag9MK",
  "key38": "2QkMEQqRJc7uv2L491KLwcrGjHBucuANEyxNHrWihqsbrhY1jB6y5sXH5Nk56GvRB6QTpDyk5coc4hEZsVHs27g2",
  "key39": "4e6Tp9XSHzz3GQg4akEwCRcdssnEQhr6nJiE5AkHvAt1juNwHd5NmhzSP5hcfJUmqGD2FTsZ7NJd4bEzPNFGhoTj",
  "key40": "ZroEobpXKcopVaradaoUZy94dkABKWLdhic9Ny9PJekm2wEyWPTjJiMQgq7Q4pWdSNqG53G8LptFeaB1nMrXvWu"
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
