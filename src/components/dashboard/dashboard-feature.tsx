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
    "aqL9GspUof7enUJkUDM8BpfeJkPmECArBt8Le3s8V5Y6BT61qWkSMAJkJ6nUZgHA9LAL9Mo8N99YdVnD3prCt44"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1Vv49KAPFx1qiTbSEPAixiwiDgeUTKAZdiT68oUgL5FxrRDr4bHfyH4TK3BTpZeSWLKWCoZpd6y9FCHQaP5hXNa",
  "key1": "4mKpHSyjWe6fz79gBx3p6jxUXWP3hR15cizBjEyQXErDianJZ4C3ErmdVqsPsqXsb9HuTkNaaLYxjcChc8aVn9EY",
  "key2": "4xRswEm85rhG7AhETWkTwFh8KJhAkAX5MfvWpmLZrmctX5xDryz6wUz2JCchVyN7x69vJcBckmLGJv6ty2bYCCfn",
  "key3": "39ARYBcswrMTjQz8fGNWZGnbAkSWL31vACv3FEM796vTu1siQBjdbfRwky7imefW4ThMrvwKf3SgR61rwe94KKyf",
  "key4": "2WwbPHkXKVWSzgL7TN7WwYaiTbqWVwD6oZqykxpoi6Lfxe69xbD2c1Czao8m6KpMhrVsG6tW2xYLrEdE6u2QDPbE",
  "key5": "2PGyxSMseZiN7wChusJrMdGKMGwEMH8zicBK5CvWygM3g5ZHiFHFJphjv1ZeepnqtvLD1D8RbE3XzgkaJSGKctV8",
  "key6": "3YRxByMUhx5LFeTR7arTBPjyXzGZvKKuo9v7M13bK1pS153znQkQZ6zEjX5FhsGF1KxjQU5SWQB6HGzrEwGTHuYe",
  "key7": "2WPfqboRzMgBizH5qHLjZBLeoExPhQE9cr8UdzcrGDdajpYiNABbkbosSXexUmvEMZMBnXSzxMx9LJBNai2cCDZL",
  "key8": "47Nhyh6QoE96sgbjX77utzcXrPba28VvyoaDqnpPA2KrPRTXuXSkum8fG23UfPxgWxFkCCZTRmw5N5qDNr1poQ8T",
  "key9": "3ig311TKWM9YPWigK5HphW3yKsmsTXuDUWp44pCF5YosgVSdZJSKoQZhtNwQ8BrJmyHwbp5c1vgMbFdrfHf4Dyqf",
  "key10": "2MjLqogLxPRnGVdrBNLCdhXJvVJrtG1UtiGeubsvshhXsCLsQk7AgDFyzo4CdNXUz8MaFhRDG78gReN6XBhmUypN",
  "key11": "7axtpQmJThpgt6bFthLXmZ7dgRKPiL9ZVtzyDUJFpck2iX5oDP5XdaCB5Mym7by7NQoyhC1Cw8VEGcbJAmHvFLA",
  "key12": "5KasVgADrggegzCDwfGgGw5WH2opMoPQccQsmdpCYXWNpyMjQMFaDCXTLeweHwdMFg9HrcHuYnWqB6j7XQRExDWa",
  "key13": "5B3ESAy7LiJ9yRbsZUGnW9T3tPf6WGKuaHXBe2iuMcwHQZjAFCpspKYpUcWwHGag43T1zXu2LWJm1SfT6rJ7NH5u",
  "key14": "4K268WSz3imcqziVzCs4KWt1CzaNaBoeUCE3Kn6SJ11AEKFmsmtXotUPet3eJHz9oouipnCV44PcQ76u1QFa1oKM",
  "key15": "4eY1sJy46MXDZuv4jeiZMnXKYMMByxnfSiCEELpqJzwheKjwPFnB7ND3wbyeuNgHJBYRNa2sXUcmTAZHtXsMtnbJ",
  "key16": "3zgbegmTf8jpyWii9xCb6z4aYRi51WXh3bRb3Qra65d5Bvcxvdw96gi6MRudDNigFkgKTq2FGssSZw3zFCxjb1C",
  "key17": "4DMPvpGvStJknNqQ4BTh7JcwGDGXGhV6GT45U4uGvSkpdTZu3YfHRpNFcqWC8gvnLAe6ugrDz15vCA9ArnJzq6ia",
  "key18": "5vqdFeuQPKMcseGeHHpDketwyxZJ9ASdftzbcLqfgfSkmnBYZnp5D7pSHTzoHwY9fsLQXy1FRAx2aAre6ro8s973",
  "key19": "5AL398Hdw4K7zcVfcc5uxpvN9tHBTVpaCsQh7vGmFaQGzH9erqTxzeRNyUgHd6hx6uSLtiwzc4JXF35JpkQ34W1A",
  "key20": "4yWj1qV5BMeMKLpQ9wELPsjEy4SmLUQJUwehLy6V1mvH7rNTqM93uaHkd8Jq9vpB25Z4wqVExbKtfytpeqSwFKmR",
  "key21": "tstLEFSs3VATcx4ucGQioKWcZmQziahGPqnagNRLQFsv6iYAhMxiFD7hcpKnZYujSTbiVLArNHWrPY1jF4L5X5j",
  "key22": "2wJr5jzRp2p93YArXvbxbxPSWeXSbCybz7b5VYXuEWhmecxwvjkECw98TVBDNMVndmdCBrpYKPxDQEWeSp4q9ZFh",
  "key23": "3feDRLCdgkVUMcBSYopwCmHJk12Do2qK3CR1VdTgEHz4jVdfbGQRLKLb77VRm2gi76y43kamfZw77QAKGvxEnMZo",
  "key24": "5ZB1BSuRjVLH4Hw27gWh5B2JiFmhefvFpxwxwBU7YCfmrDeQpJFUxFDjLUiR3necHNhuYeFZqqFdWCNuuY1PxmPs",
  "key25": "4YfF55dCoFzhHdgf81Zmm47EezbGPrPdSDSGTBamVmJTrW6deiT1W8iS8QRrVhETn2hbMuxnuYHEAErhcYmcNjEp",
  "key26": "sCNaJ1VpZTz54TGDeNDSYQdiFXrmK9ViVs3p2gt9tn8Xqe1X8CLo4hmQwM33e6XKrUFARAY2VYDd34dPHqSj56G",
  "key27": "xqFCSWm9M8oimWjKH6Yz4Xa2BrdVgX9sAWzaKopUVtRGUSCChAkuBv5yKxYBdQEEBNF4M1SGz8C9LmEYKcXDJ5a"
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
