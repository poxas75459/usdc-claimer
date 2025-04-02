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
    "4HXcLbt6Hmik48pnuAJp3NS5uPb3X9EhLCdfgfChoCiWgYQkSz42QZFraWR5WYtpEs9UnDevyjJcMwxbgujZrt2G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2y5g48mwTHzJwDbJYRkZaPfb4fgBMAXZnKf9yxE88z2JbupziYbbqGSaocrQFd5kv2gaD54sSr4pgsqKiAmHEnBE",
  "key1": "eASLkdNx85Snp2jJfMNuvU1cC349CA3AJciW7n5VHFwUC2YhzLXEWw1qndzjtC85Evi2MLs3wwTwCHaENrHbnJg",
  "key2": "6355vjqYVgFxYB26ZdKaYeXxZBGWRw1Qq3ARcUE3NVaCqxxrMejcmjvDHTrhmP5oUUKSa7YKyRSY5hgHD4VHo6mV",
  "key3": "EjaTu8ix271SBsHEXkRKxRvWus2q5Z7CExjCaiePmuQKEQ85iRHajPma2EDrboYSu6AKexMsDUn7UDsDYGiBVXb",
  "key4": "5HsjyL8YhSAu8nZuEcmSkuhf8BPrCLsTawTpH75faqCwPuDGi5BQBGkyJZ3oNoxdHvg7vpwTiBXNWd3q8NBaA87P",
  "key5": "3YhsA2mp2DTQdjXzoiuNcuSySP8sxozBwBPGtf1Sh1kgjFnvNva3t1XJ2QYdomtDwKjP8uqzBYUcPasffvy5Cf92",
  "key6": "2LTY4hxQZs6RRoyF32XPqxW66rW6CQtNfTNzbEB1VgVDDVs7S21nBbQQdKiDAsTacaqAbYU2a28CgzrQXHQowi1e",
  "key7": "614iwT5vcCDUUcvrSfPf6Y3P2A8VpqaLWscz1858ruw2oUk4SZQSfk5vk83hnBPSsLam3Ty7rQPjMpn3SxsqVv4P",
  "key8": "3jnkRBYoMMqsegCvsdeBKubxFFdg2tto5tTBPa9R8gm7K2mJd6kMT4kUhZmLb5UkSUYswbR6Rcr98PSJ6aX4FN9R",
  "key9": "44AGQ17cxqfEu6WBmnuyVEWSWXfo7Thbww8Ttrs9eEFDVokw9ZAXgZm3Cj2knfNfkeeuruGXXqPWLtkc4tGh1YjF",
  "key10": "3giwh3pHJH5Avg7XZ5k6EVjMKnzA4T4vvN81RvgTotGHWTW7qDw8XoJZz29jjrkL6ZEnxWrnM6ucv1LkVjHApwGi",
  "key11": "2KfmwrNgedeYmmBusMcvVWbX8Sms2RAMwaFjU1Ep44kmaNEJzoiQpFbdEjFaav584hTpETMhNLFCY6GmWtJsyFbi",
  "key12": "4gxWpcHwrXBh3zgakBgEANmmjpWcZxBDsnnwVvS7RVhghz1o7PF6xEXxDgVUtC6XMBQ6tHCG6HFU2xcEqs9F46UM",
  "key13": "28cRKCFH5pRXHc7dkPWpED8TG4k3MyhJeZ79ZjyEh8Tq53suxZ1Qgm5kUz17H2jXArzqjFmztHrJBkZFDNS4yFZe",
  "key14": "4yDQoYHX7nEREfa2M7AUJ4tqDZPdSTKgiwtf3RtjAu55mqSoamh1cH1TGRxnnja78bK5dqQnCo6TSVhBWe8YBKwC",
  "key15": "gXxjWm6bZKJk3Tpeb5HJJh8hX8XxWehZFLybHE5UAaaChuKP5Cgz8Uu81oQmQkpb5WBAjA2CpLhCLA7yGJ1h9mP",
  "key16": "2SuJN2DMAMP4n9XnFvGFzbnrRnGCvWZ22nP5kvXMQkEh1ced9fosA31qYDMx1jjWMXz1Y9GnUN8KLnd9wwymdYk8",
  "key17": "2zvXNKZHQoHne2Kp3TZFL7bxFS9qxcXi51HP59BCrBcwpZpmKyUPvxgFPzZ9xsfDawDrgMTjTQmErNi8oiP3CM5X",
  "key18": "4969tBeiEczTWJbU2LbtJziqx7gQ3fBPNwbynHGoMpgqqrRNqzRv1jrKyGJTDCACHCqaXSuiityNFPVyGb97yGpS",
  "key19": "26dJMPhbvFsJhnmLYmYy838spGBYB1TxYPTBVLesGrtXK5pyEVAifYtnyWbaK8sGDChJ4kHHdD9kcmB2DB7W94B2",
  "key20": "3E7RUMXdcVncmbp7k5hkhRJvv3Z4bWw1DYH4mDzQG492Rn6BG2B5ckTdtZfztaGvn1wbZJVbK3nfpeRpjd9Yh6U5",
  "key21": "5HnJqeYPmKYaB8q136JRboPowfmTyWvMBhphQar3J2KCLZRFs5Ge4R25xCya4MfchaERL4MQUjVBSp5afWQaoHAm",
  "key22": "4k33fzz8VSmwKBUhj3LC1y1exvR5sb6LHx3234jbXmYGTU9foZKiW3rvTfdGFNsRgQFiW41E9XxTTPx8MCF1t5CG",
  "key23": "64wVV2tG2Gma8Wkwo2bEtprGcZNzVQE8uyyxbHxGnN1Jy7RZEMyhEsgznEwm6Mex3JDJswxCH2d2qLG5uZxxCqH5",
  "key24": "3c1QghekPgcrkNnaQ4cDaghdD1d8ojnSNtgYqKV2YXonsJxkw3VR8GD2mf2b7taf3BuzYLNC9WY3C5C57ng7imcX",
  "key25": "5kG5hTtaY8SpMR1tsu4gL32QcCvC8UEViuTPM4b39soMZYyKTsQdqCo71s8BVQKrxXJQ1JbkEianVyNV3Lm5YaRC",
  "key26": "2wnBTzh3dSQtpeQRPWHgJ8PcusftuPEWm2BEXLcHyjxpFTNCWv4QAwyTuoNKaGyjqqrGnjiDK1AuLztevJuGA9pZ",
  "key27": "FoznyHjkq2RfoSuUQKspctn2W9mphDxc8iq5bw2atfr8AVCTd3RdFYXGyNoQvWA61q4WYj8zJRQdThbnDgG3JCH",
  "key28": "5XS9LT6WzGB6euPtYw61BDxU62EzM26Pzes6rz9Ye6zuE12MEmnw9nXnCc7pyR4xBca2VitQCic54S3FGX8NK2ut",
  "key29": "4UtQBFWa6bMorE3eTespA2yuZcDuYwoY143L5HTL3RWHbCCieUSY2FN6Np1t5thaoyhm7NDbdCCyoKos4nrCgKSp",
  "key30": "3yUGuVtbVzhkhSKuFWaSNYBCsb25Yftvz6LiJh4LvEBBn6mDCC2UhwHqxznMKQbbsxAirgmKTasX29VS3Qiv2Lzg",
  "key31": "37WknWaXtMCrhqt5d4fbox4tyyQudtnj88NTk9ee9vAe9ejiMmyBfic24iF7T8L2cu5C3Kky4Bs68gArBcsBrQEw",
  "key32": "5GPy3TxqzYKbbUa3QYzAgTUn5pMYxQEsVSiR5Up724WzATzdD9jA9UxCoTfLYBSStsNM8Y6c8uXBBZB2EMMDwhgc",
  "key33": "2sYSJvUBbo3MyBxPeV9hST9sdLEirgr37Mx1RPXp9T5xa27eyBXfgsBYQvkJaGyPEWfqNqzdcm2Z9fKFFLPsTdy8",
  "key34": "3mrQtXpSS6y9MhxiXCcLDfLZxesBDfeK1G1foqEcKamZCPTim67sEkW99A6fH72qQn7ZXFHJgjeUbMLGPiKzoGH4",
  "key35": "4T8mpKiMEbtjmgMm1WF4hea7Mjy3yztHo84TMq5zsnYJ2uYJT1Ymdjejg8PwKENqUwjiUrhWFwbTWNdN5sijNw1e"
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
