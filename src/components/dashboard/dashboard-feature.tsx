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
    "3FFvc9M2U1nBXSV8HrTFxTysj1ti4NCQ2SCwYvfE8aiRtpjEkJj2LnXqNQM1v4L3Rm1KYJmDAsysavQTd7KwfuDC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YUPeYA1ax24cwsUJRAUGh8UxBWGjEWHW9BHCYQyoeySmeAPDFXYWJzzfZh3hHd3b8MMJDPCNKVG462oHg1zgUBW",
  "key1": "ZHhpuaN9whMBBaK9jV1Af95yW6iF5ew9n9qjug2xUQ5L1ZeQGV21TTW31hvC2WMQBQNk2J4r8pW5Hs6mhN1ujtA",
  "key2": "pNu1eP5U3zTzRdLdqtj7XpLtY8ukjweK46mjkYm56T3shwsNKBVgCyS8E2udXfrwiyjar9qbD6uSgF91oG6Xpjm",
  "key3": "2drd68MjnBkAu2sg5gqVkyVJT8UNbpyCV4ZgL44C6isxpatfn5JWbgyzNFDN4qQarcBoLiawKY6YPnfTkxzHWoab",
  "key4": "3BGrYchJEB7XsdtGdGjrMcn7TX66dKGQ794bYFQ63jcmFWPtw54Wziup7MzduSHiYS5xArDq5HuEN2zWrJH6e1pF",
  "key5": "2gowRaTnkPWCCgtC6k4HZam4XV99o43DTz1Gov4nwrnaRfLQPaQiongLUi3kLe3E9Jghg8HQhwaxY9vbapSiCYxh",
  "key6": "5gu23tsFSpPMVuusfBfq2G3cfSqrj1pKD3PcWhKCXDqn8J8QHmBiPSWBGKnQ4of27qp3hpAPzgcUTFkhVcC4CXzB",
  "key7": "591odB1djmFS5xs5JfRetVsJHjAjgJxqDkbqe3HVKDzt6G8imAknKMcMckg9ziutSLYNXRcLojn9a3enm6Rgm56v",
  "key8": "pDnTWR8qKQ7k6ghgFBx7qTCUDHwUvoThzqLAogrYxEF14PSecDDK5rJKrwZgjLBqxBPcXAM3UFKBC5vCMBwo6e5",
  "key9": "4zJaVffTZA67z71fywuJbKU1JMcgJ6bERKvZTukA3Yta8Q9mGQGvDV6vz9Lyyu8sscjkd6tU86VG3xCDNMnfmyhz",
  "key10": "rKnjxHSdVqoQBqgWgdsNDjenFDYHexn8Y3SBsroJfZAKaVJDjRTV7TqKT9dB4b6kf2a4Wvij2yXxmPygKVB6LuV",
  "key11": "2kwkXZ2W88FmXBswKtAcaT32KS4FptgJDb7BJmyjTD7UMgSDErM2CWWT2fRSbma29pMzo3hRcKAQdxeQqFsvAN32",
  "key12": "2oVJhdQ2ur6s9LWCjNhMoKHdBHpbMH4A5y4jJR3fX8M7VEDT3reCC2RzqtQciYTeahyE7h5sDHT4KxURvvCkYEh7",
  "key13": "2ENFNGGn5z6rVBQc9H3CdsEC4qUGsbqqUSSfU24QBNYFxScKhp6cAUwd8H9nPYgKJNNsgCPafq6y6PzYWDN5iXMW",
  "key14": "33qa2J1W6XrTjkwQe9mmEDC8wt42xn2HwMmNnaqosT8bGAWAre4cTFFKhBc79YeHaXw51KccWKqn2kQeAqqz1KuS",
  "key15": "4b9AB8koLv4rhi8UCahrZdhxTPv56vvkhmZgDCrepgJmiki8QTLSGvLmFb7fEhEeTiFk6yPB72dkCyu68xAiEACw",
  "key16": "LHtKY4V6QP4jsHM52XPQtsGnKwL74NjVEgxBq6zrPSKn9LKwbDQsDUP3NQETc7s5vFiw2PWQzD9FjrgaR2g9Jqt",
  "key17": "4L5sdyArvHJxdJVNzTRuveEsLCEqMhTD5DMPohBVP1fQ4Nu2hMBzcLJNtwgxxhrEkwetJHrFCPYFXxKueSX7iTRk",
  "key18": "4KWahrCC29iN3p4VKgGVHfUUKkjKFF8g7SJauSxomZYgdkUDxWHhCCMzDwo6TPKmfYUzobKeZ8vAiuFjQEPJNLsW",
  "key19": "4awfYewHCttAVdqnFPdHejy2wdoziHnuEBQmjshDQs8h8gjkTueV691avR5nNHmp6AsLRsAMtASUxX6hC3DcR2Rp",
  "key20": "3YbgXjhQiCK8X6LVEaVanPWKy4VqaLE3TQ1ABQEG2NLBD63UUc3faaPftoGFGLNyKjG1Bhnd4WVW7imnpiLNvU9u",
  "key21": "4QTKABATGLqq6TErWbYieeXY4QBp5jXd3YYx4CLW7YY9KtgXB52JxcbKJWLPTDkxWvT98E9T6R3is9n8mVroRrBt",
  "key22": "2aEbZrxosDUzv9S1MU4XRyDoMfMSwpKUVUoisygpxJcn6SEQPjxryu2p14X1cqJENnPnV2BWaPtxx7jRDbywrGd4",
  "key23": "2JDxnRH95JpiEDbAj5VoAyumLbGRLYpqc2tpwZvZytwS6ppoJbbEUjnPJpnDTsmBQKxq65oy7tBsxnkW4HYgX5s3",
  "key24": "3WKoAWaRsEVsR9fGwihafhy6KCysGZQbpfZqGeJe6HPVfJAR4DurVrC8Rr6YFvqmrQvggyDC5riHhVGBaokYh486",
  "key25": "4UmJjbTGdfiR977bgoUmBV4j7wfuUrmrZ9Ntoe9TioejCx6hhkA2T1Y3wzY8y74zbgsHg6mKjbNySEuVWDcQUFPJ",
  "key26": "4oYkC2KuP7oB1kTRHotQxAqvSEZtpEd4cQMeMGaBLgsx346Ci2Vh2AVwkHoGcNsFb852YjSnrKGLv3Xp4HwiwwAR",
  "key27": "27p2AZwYws2D5phRTwyqv2Mi5HUnqid5yo22RHi4Df7x6sTSwnEvEmPva22Psmjf12M2J3WGXRKz9fJMctk6FimQ",
  "key28": "21wHmHNyLSLoyvyRjNuTMUL9qfzxiM7cEh9stSRJZLgYhkXj7FoUm7Jfi4y4gNCBvYmodn9yTrsoKXJcjEW4PM8n",
  "key29": "WbQuLDExgxXz5zzSr1Frmfec6WZomQGdXxNispG9C3jxLJfvfCpt2Y9tUCVJcM2xCzj6NqM74Wj3GPVJrMi6oMC",
  "key30": "36PMkACrrh5vDkv6vk6GsGZF2nvHSroNgMuViPw4nFg2Sd8kLxBPPPYZt9cjjKyrVXqKrfM6Xf5zsxkf1byvhdVH",
  "key31": "4CVpkfkmhowg7z6Hi18PNnsSgXko4vGAbm95tDEWzj7V5a6TJFHaRur7a95v5hGufh94X3gzAf9UHvndgKp6sfke",
  "key32": "5b95qQ1MYc23Sjkq3FqVtCpWw3G7KKfEtgkr41uJ3cZ8yz8ewS8Fy8GcPXCwHxgh3MRzzTC9DeHf4RfMayYpzuDD",
  "key33": "gAKjdD2CNmsCnxV2wrprXsghtxv3CuRJrbk11RgAmeKyh5dUpV2ZL529w5utzkufFnmJFp1JN56FgwLftggwSCq",
  "key34": "3GWYWw8ra8GHB91HvnSfjFUz2A4io89hfdQdwfyHeBDm3KaoX1YEEL2xnuEmK5ufyRpPFre3x5qa1QE4wqqbStS3",
  "key35": "mix9wwWckutP7WaeaGhFrKt7ZfDvDDr95t2cmoyRdVXWdDcZpoKkoKqVrZ9EXgX4CDo1yWP3deo43kWKMY4Rhmd",
  "key36": "63eCkAkBPqGskhqfiNFpX1uXKuwUjRHRNkTv378WgXgt5rAxGXfVFAFY6y5ppmoqW72Nuccqas8nc2Eb4X8uXuuH",
  "key37": "4a8BSBWE5dsv4kysJy46Jb2QokJbXxoevKXBxWo4gjUN5EX7Sm1z4RD9Ru7VmHPj6nrkPiEbamtoVBWvSTDd7aA8",
  "key38": "4Pi5e8K8CUfZchMcBnvHX8Gq4PYxemZchDQG7mxSkUDpSdqzgFyEWEAJY589F49GXYRRi5G2mtssDQpX2nEu3nrJ"
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
