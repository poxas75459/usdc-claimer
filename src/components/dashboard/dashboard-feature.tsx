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
    "qhYwrxNud6FPPv97bjfMiKEiH6Nw9brrz4mZFSR8jviRygTsjM5unKQio21mzrm8q37qfZut3fM7qqJodKg6EGt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mJy5sr5fLrZEuUX8g85tPxuKkw1bniXSq6fCSiQSreYCz7FHQZemMd2SM1PHMmfmtnQFBf2yPqSTndL6eVu6fuH",
  "key1": "4wARouMTozVhqmC6sdUMd441jibLhbAxTgoUJwndsuHxoSgLzpHnWF5ckR4tnHFwmH9wB1M3U5MeWmPuG1P1tKse",
  "key2": "hyPCpAsWrbsxZoL5WUVLzymRPR3gWLB3kuyGx1uVk4EsBixX8dem1Kvo7e3MN7j4eiGduLwvv3Apk7phYs3h6QG",
  "key3": "YWdFWmBink3LyEs3wb9bkzWQ7EdUP9ERzPPiK4fnREpsSh5fYSFDUUceSp9zKsW3SoqmjmKovBrctpeGPWtJ8fL",
  "key4": "37n7NJPificRKfLWySQFiFwzYeQTWd3vju89W9z2tbezBVFceZRn9Py6DfE9QUthUAn9GU53RtnoR8yWtnsyNwcb",
  "key5": "2dK73K4JtVLD7xAPx98jEx45nFSQDL5qfwmivQoSGvhRGaL3x56aQH8f4Px6cQQWjughpA7eFYBeVwGdw7TKEFGV",
  "key6": "53GrcYt9dAwbz2x9HXpDfsan57Ck18qENYTKnmAp3nUH8U5mojjuiHHbaaAZSEBf9QY2scYknYnnYh15jczEcMyh",
  "key7": "2hYuUEy6eJuVxECEMx9X93WxU2X9iWmhoiD7cZTV1N3ZCg3TcGa2wGwsTKqWZBXM6SkxanxCSU2bvATd5DX3gB8T",
  "key8": "649MTx9gWkaUNKd9PQfcutmrJ747ZnJbadonR1Ha4KQiRCsswXw2Ydja8f95idVFwmRR7RohqtfNvkvyMR8NUWZS",
  "key9": "FhFP6tMPE2MrzV4khYfZJayuqqn4b2tJKyAA7CWhFmZKTww6B123meYjDuHxP9PYpAhrjMgyVkattycBxtMgVYg",
  "key10": "4YranNUAEdkufM82UhYtHwRXvWmmVMCLAoEmr1c5rvo2FN3wGeNAgQGyTWFCSLWji5M24dpyUdw9yxUL2iqKt9Fj",
  "key11": "5Eiz1p4wrkGck72ejNsMaYbM5ousu1iSMgvb37U2sThPLUR4f19knMVYUzpKDJH3E17ahFCPHWAYecDfRGkQJmDx",
  "key12": "55VxMeAohGDkqoBXJeLQ5XvYUNSB2Tr6RLPGRdPhhiuVy6mg2CuKP9aV9A6hPvRoa2phPm8iPi72ShG8goeQNahy",
  "key13": "5JuzKg7172Pk5rVNE6fAZaUath31Rodyq8tfT4Fz6WSTApmwhzEBuGrKJiGebBJwxkwgcrVHf5X7EAvSd7RJ9Lyj",
  "key14": "7NgtU7NfAAskW9xLWRQwMdsMxj12zsrFhuarR5HK8zKyKMqMAsXZ8GXiyd6Yg8apobc6fdgRuDexyMY6prMXuFP",
  "key15": "sFZxAo4HPbm8xAwDqh8SoCv7vmDMp8enmjQp72ZsTUENHn7A9ZVJENbYKMExoehQvE2g1pJhmNkFee4Fo4jVmum",
  "key16": "5ZoEWBva83FSfQrPXtZTmr7RAtLNoFg2xZU9VLtgDAnrLrLo5zFkyZgJWwwxa86T7kaStR9CcdtkJjQgzgpfbxhz",
  "key17": "2Bv4vaDTPBGof5ATZQiWhjw8gpHBYbwGQjqQn4nzLfTMbPm7u74jnsKptxtzE8rnqU8yspF7sFq3CXThAwdCtKg8",
  "key18": "67UXMHSqPm2gAcav23HQSejddtsRbpRcawZuT83YmWjRfoSLdGQT6k8ckr8kcGpu7i1hcFrDspoDkXuLChmnvxG3",
  "key19": "5HxJg4Rzf5mDonjEwsgh9wrRACZ4QP1xAAwNa4EjUfGS1hXb5FHY95JBuzAJ265USdtswShisvmLVSVwyUxEbp6M",
  "key20": "5gm7t9ArGBj43s353p69aVNcP8VGAHAPFVg46oHJTYjJN6LAouwW3trNekr8eXcCpRyfWuWKrcpgMdFoUBzid7Ed",
  "key21": "gK3BTWm21m71ocHCv9LvJ1JmVaYPa3nxiYvK1FCiGF5wz7Yc41k5QwLmwXbQtEyzmGV4NPmbg2DcLC7efq2Nqtn",
  "key22": "3mYN98M25q2Q4JsoEwaDLknL7qh91tKxkmRHiw1DBFymmsoSjZ5nnKsCRrkkBzhvgDxFGUXD9aLVLngSkFT75Abh",
  "key23": "374UXuQyiTnLNPdgx823pz9kdArivfwuFHWHDdgVzXgyuPrj3ee9jthieo1z8KaqaKmRcEe6ZZ885TSRgVLVH3KY",
  "key24": "4P3piNkpnSHS5RWm2QHvzhaSZi2rNmPMpAETeHAdqcRuiHMHE7mu54BH8iHLJmWoPWzQDdbmbwHuw1gMrzksbpmD",
  "key25": "23T5j89BRUAscixs6fPc1sUsM2NcmdrNch7WurNnZ58SmRhtShP1WpkcJN5dfMYKv8d9LRNGtpkaqrvrmqESTKJH",
  "key26": "5j6JMFvW2hRFQYd9BxD8ZWukExwVAgtf8SmxUbccisxYSjXgegbUeWythKEVpcLhiLo9JHqrXLe6hQ9ZkV73HiCc",
  "key27": "41GhSM5TokJjr8s3s2UutTVQ8v5LoKNXXaRgajtY7TuQJw4UKLDgzYkJ4HP7eC94HEUQM31GDRpVZ7ivKqHcZCYa",
  "key28": "3cmfiw3iECdLh14XrNbGucPV5uyM8junL71Wa6tosjGyAisk2KDsv8GnrGSzeqzy4QU5xAKjuNM9upG3UQGetdZu",
  "key29": "4Kpo9kCMCTXibrStmXWiLDH4pQzVY7k6bN6Wbvytzf84Mq9w9nWhiiYpWzbC8FC37D6beketnfrWzQhgpsSXs6P9",
  "key30": "5h9SHaz5Nnonf4F5dZu8fQeDqA24LbVnwe7zS1zQAKXTFYTdzfvEiYNnvX9Fsu4zRS3g9APq9iApN8ew3BZFmqeW",
  "key31": "5EuPRk3tameUShvn4HbpFrj6vx1juMSf2jy2G7UHeYkXP7w561qey1K7BtrYr7nnf1X5m9KHRZBqATvX39t6Jpnt"
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
