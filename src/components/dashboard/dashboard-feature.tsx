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
    "22uccNiV7oHTecrE9mDDhgEut19DYzssW6i4Cvm88QDoNPFH2oZbvwmUcNW5Nu2H4fvifH5EtxxZgg6Vikr8CqgB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63zftFDZJrWmS7xJ3U8Bp8zvD5EGF74UcEokiYumyH5RWu8G2QTWYLNiCL9z2BURprDKFP2wn5yJc9a8DJt8vsjC",
  "key1": "4Rfjyj9UtBNBnJySXZtVvxMaceA52U6NEvmkowm6c7qPexHWEBmof6KG4nasn26Xc6secqf1KWEi4Bdqgjw7MGeK",
  "key2": "3br2uhSUrdSzdPJkLH4SZzFFXu1D1qwkmzktfivQNUHaTL1NtizGkfzDE7bTUHUusec3wQb13auJLmGK6dz9E38t",
  "key3": "513yVxTCmMuzJUAVy9CXPd3CJCf12r3ZKdNgjVPZXUqAV1ePqz2MvZB3VEds33c9fW7YpTj744HNegj5gZ4TsLds",
  "key4": "5SUtjDLv5agwejQuMVkQQb9Wsv7wHgju5yQqgWj4FttsJgc2LidxDnPV9GkbHfn82Qaez94rJnPfdBwgj2ZArsHu",
  "key5": "Z8tW6o5qpR9deLmBf3QXh8MxFabEW19ZEJbCi12UuaGDZZCAXHADQLc4PSV7hGjYB4PHucgXRvbMxmeHtd9bCxG",
  "key6": "31XWKFRMSFMbBYM61gv3EnJheh2mfRgMqAQRWiTMdTebdpBixJUXXt1AtnxFaHDGuEkWdq4NsHM2VEVg1qoZnMii",
  "key7": "5jsnZZ9t7icYR7rWEimSsh9c1c2zgPa8swPgLjsyMgy15n18rGfNA1mMNuykA8C9ejxJi3oJbLTdZJCgZiYpgvtY",
  "key8": "616Ycoj2M5ZGme6HSVDEwxHEi5TNZAoxjKutwr5xbeiskPCykoLNJfrDiVRPmbDYKXobf45ntS9tqT8hVK85P4KR",
  "key9": "3HA6ed2f4pMf8wGcxjMhAwJSnGChe4nfNbiaEs1yT2CUTTcu2CCdZ51HgiZULync9fFy2tckFS2hEXJ5n8K5j4w2",
  "key10": "5UtYE61fS4VEkZdRzaSTkuSV6WhVBQRVgi8QcR88DWPdDrBQhvZeYzz4sHi6d2Adq8p8ypcbBjzY4pU4WEKuZoNP",
  "key11": "4yJu3kCtjsBAVqWa1YZ6PoQe5DBfQfZe6sR8pRUuRvHUKHPhbAZHYiwmmaw1eQ95A51H2hSDujVTCz8RBXVUWWuo",
  "key12": "3V2rTB8Fan4ck61GBfRUvr4WDtAGFHFzLJbghwiaP5nGAwehdfvFBRx6H1n6Q5tafztVMDzmwd2wvsf3ABC1PjJ6",
  "key13": "3MFsxKGsN1ZLsBNKxKfVcjrepW8ZBYa1Rp3cYYG9j78Q3saZwgqK8KvpEtUyuLBmpfijvR8R2U3QGQFZM5s4awxD",
  "key14": "1WWonnpj9UVX5k8nY4Ukp4hy4mhPGSuzTaaPNRYmYA3qfnncraRUGGNtW46n4exEvUwmmrtnjU9ynnifdGfjLz5",
  "key15": "4Ecjx4fWL9BrsX8sjLPaX7q2315ePs8UYa3emRteM2gK98othhUg3hWChbrpizxEqJ68Cxe28J16ncRFVVEjhu2e",
  "key16": "2TzPFu8xwSYbmJGQ94Fbvja4ToGhxR48jzum2o8ZFP9szggrorTWV9hrs4yiGyW4shfUuMjv8o3rFhmcJtyiG2vQ",
  "key17": "xa7asCGbbYCuYGYbVFpc82BvbrG87ZSxuXF5Wp2TmaRPXHb4HJJh4w7P1zWGKSiYqJCENdeeWNbWpAKD4jfmgmL",
  "key18": "59UnPh56PncaKwiBzLzjuaZpisNmtFMacZD8WMac6An3synDV1yHxNgEBHkaVgtDna1uCmjK2Em3kevDKT3tjd6z",
  "key19": "4jXtFu9ziuZ8uB48xZ1DMumGUrXvwA3MJ7pnZSxcRPUdJpK2cTJMvq7aya8iWdkKsfEL13BUMs1ENtMTv4mEm68T",
  "key20": "5uziLuZGEPGNmuNDQBxVy1XZE4FUEt1Pb3eK8nctPu7pTbP6NZzZ8QKpiBVW6m7HmLJMtHTeZZ3dNSa4ELNLTnEp",
  "key21": "4CNYnPvr4Yy7mZstqypArUKBFwyksBX2zTcmtn6qgP7JN7sFh8BaZLm7pBdC5pukSvxpENWsCh5BPibFoZ1bedu",
  "key22": "4V94VhEKBuek7YEaSCHDR5rUnpeRGF75Sw3wskSN1FLZimmXTrLRvLykpkKrwFcYpE26CrJfrJCJcJWmCUURk3nc",
  "key23": "3GitGaekSVut43kqmZTqczxvzfQR6mtmDQQ3g8LYZhDhqMWE6MjsVcHpJKTUNQiG7PfE8MTrPpXAZLLgby5s9Wkg",
  "key24": "62YXMobE5uYSesXUHvSLynuJnBGvmSQn4HjAeHPx3JoEGFG7E9VqVXggafHKnW4cLSwFZZKux7YUYbizy967D7Jj",
  "key25": "2JgSo49xwB6ncD6yU2BF9GWctUP18TNRfVd6pb7ZDYSGJnPCuT1de8x9CqyxxxJULNzobvu1Skx3rvMnLqwW2Cbr",
  "key26": "3QgsKfvgf5Xtjqk74J2mXGSV7UM1hacHwm8UKGs9NyKakMwW4chMeCweDa7dohrd244LZWsbfWVEgipLBsNxX1dk",
  "key27": "4gmCv4TWspivrC9qnywMxWJvD3j11y4Md2rjgevd6McCe1M3qHdwALnk7GRsnap7sPHbzMdJMwNGw4kZdF1Q7VNY",
  "key28": "2vNoXkccdFosnKp8uLhg5myX98mjgfHBdZnfSwJAH3f9yA5JGUM1Drc9UUpvrVa6hUng4Pt2JJvJ71d9C6yucCoS",
  "key29": "5RLPZuvRhJY1nBoZrsTvLy9KxXdzQyUT2Z1FryGcxMtWp6WfJLk8bvzE22vi3e91kC36KAUDrBVFv4Azv1QwViNG",
  "key30": "vCiZh2LQZM41PCuThkJtaVMPgtDKei1Pwgw3tc5yMzCXZD9epDCw9wj2NNDvr5ztoua9XMuSmBaQiixHfCLJwp2",
  "key31": "pdpHvp7LJ9dBmj8n4fT6gpYuo5N3D7t6x16v35RC87G9J267AGfMjDa6kVMph7ptrRTsG8Wf3gUjwnxCgFWVHrt",
  "key32": "omYKzgCw6y7HFPEj4sZrhifbYUDs9tPWiaCfJV3MntXDq9ZGtU3N2hB4szfVjyLTLikFoMCMT9zCpt2kDKcBy3Q",
  "key33": "3KqDtEx5pahVSHw5ohCpo3gUAfiakeu2VCgw32rieFgtBnvvBDgLburUqQVgbsXZUSKrJbxdqqAfvt2nPSQEQSgS",
  "key34": "5ZcTisRboFNigMGmfCTacPkKvDVUS8mdpADrsLtqny6dta8BXqZfccsfLFT5GbjDbNZH4TL4VBGzikPwUuy4PiGJ",
  "key35": "62PS64qrqB4ConsyBvFbwZho2bwS1jCtYWBwCm9xCaJtWVrs5YgYLf3bi3tiqPjh4dP1cKyyY98PtwVn5wBanVWS",
  "key36": "4in8FdyYa3gyS3t17ESnSsYgmLCf4HeQLP73Xw5iug4j4usokzDRbWyCSsq3PRhji5bMFGCLPt12vQqFEAW5hECU",
  "key37": "JfMP6tV2WBbVETUfmBtivYD7wsqM8fbSdEDmEAFovqsQgJj4JjsXzeaFRFg6AnJmq2Rm9ppQKd9XmwLFtf9jjrE"
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
