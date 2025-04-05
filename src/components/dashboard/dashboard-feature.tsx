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
    "5Q8TyTrL7QjSxcuPVHkWwBDYkVthRhWF5NkXxvqm6LN4ftZAtzC2Z9ZbfLJ2LrcmUvSRjH4rCorXs2YYLznxorvE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3n8Cc1Qk29fMX1ayKoNEDk7BVyi39Nb4w7v8R3kESXT9ieVAT4e1vy35TwzJWzh9p5YzY6KoZ5M2SbyuyKa8KbJD",
  "key1": "42dUbjuLqQEBMKAKNcWtQhbRGvXJG43aNf3n7U4qQqGzQLGDmdp8n7PVbJDYWMKS3aj7xehcH5etcCXBsLiLtaTU",
  "key2": "21W4MXyVQWkwBWQ4NDvSgMP4fy4tx3i3FU6tM259qae48wXSd5P6YjFjxuWfsYz6iY7Ct7gbDCaXsNnKg4nVigfg",
  "key3": "2yjPNDpkck1cs2Jd1envVC7iWBuzeMMAYJC4XjHEtFiX4ujuahkR6hcaRzEKAiZMmeiTct7ngKAXyFScWgByFdtb",
  "key4": "TEW48hCJggyF1ZwU38ypvf2SjhaFBAC2rGtHBuHx9g9zp9NcVjRPB9Sd3m4aZAFGAb8YpLUcLE9VHT7q7F4MwoJ",
  "key5": "66PrjEYFdi8VGn2aag3GurBni4h3M7BTeQ384ERpL37vRjFKp6bSezrkiV4CbuCwi24jYPdCqPfbKCAzupRhvKd5",
  "key6": "kM12HXjrHs6MYRyywhtSW5bie76aYUKqRysJKrofQgNxqTvYduV7ptwQn9MwyKA9ABfFXjcnVyY2GztM9vzk864",
  "key7": "55AKfF6rfcaqrnVsTa4hAXPDptUvXuT6BVZZBYzotFgpqtdFAMAk9131sGjgVMXJ8zZ5e3uBgPh1T2tKQT6owVH9",
  "key8": "24ZwYqe588j5cf8887dEWDfNoBb5C6s5jjKxbdP7StwfPyxvmn66dGazajxj1DkhKdfwfkt2JTjSR5SCVvhd9Z9j",
  "key9": "59yNkK4zLDmvYpmFeWnj9YyqDWbGRyJkocLHKBMuak92SXa3dibVBbm1jraYeRyetjuzEtjpoHmMdDjEHMYq3KUP",
  "key10": "5WeVXNaqZwmvYC2jYA5Pf9sRkidpbetDhzSTPick7m76toYvBXXgTfb4h9CDUAHGhsW3GfbGFEpzhVi2rR9mohXG",
  "key11": "64YpyzuP99aPTzhHPj6i3yBPEJXTkpVygtCPByQM85CeutnMXhUvfpVSDpZL8ZgkGnMaqLu6b69DXGrtdQeMSEm5",
  "key12": "U9muBQsZzPD24w9hjq8TLnVQdjpHEMGWosMA8nFBTF9k1P2BqcVPULWsSRWG1mBhfQfp3ax5vhdt5k6gUetSuVZ",
  "key13": "3XE7LSYwgxoNQnT5EocoDBYXFtaD52KJzwZVTpC3Dt6bYE8vLWRKHMCca87amxR1b9od83X4PLb6xgnJXrAXqgbz",
  "key14": "3vzKQmZQefVRLgQA56sYC2jqPYHrtgdRqLeeVuDk76aKiqYxVWNDm9jxooDcg46avkjz3dwp6dJ1FQWi4PtqZR19",
  "key15": "3yTtwCwzksQ9zHkQPJQXkHB4Eg3QYiiziHmLm8kqRB9HGUc24WYnJp3TDFVNT5hb8sV6fEbsktJmqQ8pdF18NqPq",
  "key16": "4cxzHHvpB7B5W6dM6tP2sDTZbixVBZC2AVsbYgHmxF2PPktcta2noz2YxUrhNX4Bh8Sxk8WKaRnouw2wtZMEekVw",
  "key17": "2WZaxJSJgSofW781YGXEPQYakY7Vcrj3V4hyMLKKao579drrgjtxgroNNhF3oUc6ZTwJUbUVVfb5o6oU4RycsXFT",
  "key18": "2WJH7zfHanjNAHRzppVMeoevMrUUeMaRQ1yNR3BxrT6FEoSX3iATpepVKEFLaLjBqx5bdSJqNEeXiB3fuuKv9iDT",
  "key19": "5MN6HsFkjueV8T8q2KAtD28bu9P6kyy5iSGYH5WjynkN9pmaLsGr3rxTX84ctgXs2KWxEyfhjTCujw5VV7HPajnh",
  "key20": "4CuqeFYQtU8wwL4VkSTNQCgC3maFjk4xhe2sTTeZYkDcMr3jimkpaagdiiaxfRBbydLU1i98efoNkbjzyTaZUmRp",
  "key21": "2eWahwurjMFAiz36tnGzG8V4ZA9zJPTCzbdJDdXQXBrnhqfT8b3vTUKtA1ov7CNPCz3m7272D96othC4jytfaTuE",
  "key22": "2my3NHm4rcXir3ch9gTrsh49XWMVpkRPUDmD2ofitrgqgneDpNaLnmNR22QyRoqsBMCVP7RPEdzENYyTGFjc97fz",
  "key23": "6GinNDsAQyynKXrUHD7dxRTdDqTkkkC25kDSht9WHniiNnxTfKGD4E5FtnrwuK5n4EARbMrKXPDoSuC1rnU4A2z",
  "key24": "4pZLtiwvyMARdcm5ERXCpY5RHATF9hYojdopnTf3siPbvAGh6NfgspJmdn275zThCYdBN5AfeKmZKwEfwnQx6UU9",
  "key25": "5PWFgEqDr5sBoCBmyMUtwZtqZnQ79bXt4kunq3ULVXsBUR8N1xfChfuWYseiquPWTYK2cdKaro8tpJfvVxg4MX6K",
  "key26": "4SnQRnanMUa5TP8jGnBmMLv3Ls4tzs7LYQQqJkRcpNViym9qTeyTxFv9AvkMPJtBLikam5Rp3wsjnBUA2cJkB19z",
  "key27": "3C3AEgiRGsJVNvHvjwJGCqE9MbrRyt6bHU3pxKV7Sy8vj1zotSsNMZiMGNiqDhqvhDrBiQ7BZr4wNxrJZPNDnt8e",
  "key28": "fmmk8iAqwfVjbQBFwGBYydXVv91A8Bt1KEiYMk7hGVPK3CRYmggNehxtfCYhdzzB9reR84t5gemGjjgiCoobyXU",
  "key29": "3ceKgNcksWnKcqbhqhNp1c2RgNPNm9djUZwcQB8QuUA9D9J6VMpb1EFvPjTzfHATmEpSHRQGhJdec2XswV8f1uBG",
  "key30": "59CvexFCzbUbsC9pAkShFNDw3rHRQHkL8GXbuQpMzqhNrDuvLR38YXccRVXHnpMiA1NDxP6UQRH76c2XvhuzX2f2",
  "key31": "4CFVPEPF6S7UqY1FsiWrV9d7xjNqMRVsi7y2pj44e4XEdqSwwniyFjtzxpm22X1NZfN9t7u8jpRtY4T1ejuk6JVq",
  "key32": "25Tqe4rX4wHJX5xuMebgwSJM2D4MG2RqGbPvdjyRUPA38vfbNRkYWeqzhiuyaR2CA6KD4B4roByJ4ihN3UpZfeW5",
  "key33": "52mKZCsdxYQwwmo5KPFrEv5C4JAHwcf6uY2P42mJH3kr8kf99a8gh6D6JHrvofCqksr5CapePhmY55Kn9Lub9MkQ",
  "key34": "3cMZisra611XXZZ5f7YpYFEihvPmoqKkqGsbfKRRVRva2fJZ5y3sWerpjSdKYjpfpndADk7n8dhALpQRERyPNJQR",
  "key35": "3E3tsqotpMGo2DiVCmaykMXoeXnzfbZzuqx5nZsKew2EMpkzqQdZrn1PEyR4soKBpGSBEjsSYN4wVm1wYnfiuGhk",
  "key36": "25GLPgbVMCUDn2GbH2MXdWprgcLfoQR4FiDQwUV4twTkuzVfLwMutsHvsPbEGCUUqR24qQAGyCi4tKthQqrs7rXV",
  "key37": "3GLAUcb9SMpUDaVhxmjdkYhpVFLYHgxDqLVHRQ4n5N8ZMYko64Au92RRg35wZmh7wZ4tpjKxhKoekUBVQMMnduVb"
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
