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
    "4YwztiaumZN3okL8fn8Afkcy7DG3XMzeYUudHXnVAV7SEM4TLYJ7TjPaAvbRbxrDoCPzcfZQyQJPx9dexvwzwPcV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5L8ic7jwCMQeFDw4xRvpByVTcMzSGC1duk3pXusSGe4oLCE4qKbbgfaCTNozwVWwa4MVtYr6V3zNayxKdfgpbhRp",
  "key1": "hqLkFcczAb7UjDCX5pXgjdPMYvkezs2ChpQGnRKr4NWxzcyDeS9TDBs5VWwRR15cKCh3mr2rRAhQNkvaX6UycgS",
  "key2": "BBUgkLhh1XdYphoiFmcPWPY3EVupswrsjKL1bNEN36eKMFWSin8VczepMTWvxVHhjjNhqZ6wNsFrgMR8rdsgTBo",
  "key3": "2rY8Zv5A5d7M1f56oonyXXnDvgSpMvS5LrdSdzwCx83RiqvHFC9tkUAkFTENzgZTppeAj4Lbt6dR5PkyUky5gFha",
  "key4": "5u57c2Ndixd6T8oPXfuYo4dPw6kEU9jiGUrbUgh1W6hdQ8AW9YncsDobtbgna3zXowFPw44F1MAbmyrcGixEnedy",
  "key5": "5YNJiqQtW6B47vSgcQP9ypaUCybm3DBS6AfKqaPofRGX2veU3wzZuAeucqZMg1q4NxSq9BJfPa9FHxJmETU6jPUv",
  "key6": "4Yr8h6snQVGci3gktyQjVsJBLVv6qCwEyiJsnoGVNcCP3G8skPdZcofoA9u2jicWZhxvWAYuRrHEH6LnetJBgyY",
  "key7": "2LBZ6eLseNRka4TCdxrowA9QwbCMhdRjuNVBgcrDbkXNvf5z14XVU3FWSvF7Q3NZ8vizxfHHC9SY589hFuxWLy3J",
  "key8": "4PKBhsqp1t6W2oSShnc9Y3EE6VGW1WFJu2usZoEi6VpNkFLdiSiiWUEhRNbrPZPxZkxDZdUFoMRa9YwjQHvCQmJh",
  "key9": "j1dJZYLhbQFWi12BEd7wedDfqNU39YaHXnKEYvGyVGFpnP3fELKFs4h3fpy1cjGTgxPS2jrkX82dt4X3BACEqLW",
  "key10": "2P49agMKKZKsbwPjNoYxwKKSskVENL4QhKXaqhuudS3DFXm8JHbRHoqCZ9s75akLEf9yZgo6ELnfkQhQa2msanBZ",
  "key11": "2HobEsuETgS5AVtXPK7shvWdugp6fyjtmxBLgjmLWaKZ6SE3jJkKnW1W47kpc3Zh7ELhbaUT5JDeK6QLgfJd4UA6",
  "key12": "7DaWBPyMz332FNQnHamZgSUK4GXSMjnQCo5YNGFd7YvFetivoMZCiyrG7n6mk2Q7gq9DDAUsV9WKeGTCutsGvVR",
  "key13": "33AaKtvS4bntMCGQnaL1rErCm1BvBNgrkrXXF16vYZok39GAHQRCGtLYrp2CbgAKwsGiCfwqJJRoosHDR8sedsWH",
  "key14": "3V2iYyZhFSLoWdGVi45yhdWgwsynMkA29tqsd7SqZi9LHLX5S76q21sppieSt6XFvdRbe3atQSRe6qrfUUSooFy3",
  "key15": "2mdEM1RXM9iToEUV13QCqdaMKiAWDsRoE55ErYWQSnRcJtSaSN9zMzu5sq4dzUnp8ecEiRhQ2jRsKQuxND3iUvYt",
  "key16": "4hLpye2iHEWVw6FhSKekXcFg5TW3MQ4iBAbuRwxTzWNJzprqa1Fo9ETBkzND3CQs3n8WL78Ldp5FUZApK2feqdZg",
  "key17": "2ZUtqRGa1BDpiryXEDKdtVevHJKVDeCewb8ZWeKtj6pjJBVr2k7oYnuM8Ztc9gMpzygEhEcxZV3AydHBn5yXKQ46",
  "key18": "41LsJUFAiaWkLdzRbGiwYxHtVkWSxLQuDL5pkP7iyncShB2W6KnskjDaDtNYSp9mhrrtnKg3VfTFwswBQ8ACy3FK",
  "key19": "4LxQmGe8YoHSA5fidXqpHhj52Cg1m3tU1h9TTxSNU7pgozDCkmc9LDGKqfda13QzuVfJxhdhopn5hy9X7xZBiXo6",
  "key20": "5odygXZJLQj1DSM7VkVc6Zpzo1zqWcpe6WcBFb3z8TpSvVActGzg31eLPHepPQ2F6oU4TkSdxppZp1XEsdbNjcjg",
  "key21": "4YxAWzTVP2WEP8bzjMhWwVb2Gy81YDzKMgi7jrUUqiYZTZqXNAKJWHHxP7T5ghoK7Qt4UPTCbAP2grp6NpGqTnUF",
  "key22": "2pXJScBFfgj28VPLBgs7xcQc6gjyjrxGHZuHf34FDM7cTWLyw2biHoXurjLX6h3Hray4AGy51cif1EtpwgrvqEeE",
  "key23": "2XkjPqrew3as2o1Z3HQCbp2kqnucg9TKGvrGUcPm7YSNzGze7hPkrgXSsfMSUwcksPoG5UtxDDM7Jcqk8pfdxfqN",
  "key24": "XhqPwSooX3j5iwYsWShonJk334ahmaJcRqAyCMgFWbjvkXfFSVzy1cpUACG1q9zhusvQdnhpQLVTJdnKRniHnxv",
  "key25": "37rwbLpib6HwvsAVyeupm6f89GqfipeAiYEFfp338mqQYRRxbN5v15vtijoVwwBRsVbjmwrUTC8QuYQnmCBQB7D6",
  "key26": "4ts1kmhPmXSS6kneGJijLe2cfuobGMZProQgX8FzDdeCBSnRZctF9mFj1h9Z1NJBp9XpS2rBxVB52TNUNp13xsAu",
  "key27": "5H52ku6cwcL6jf13B8HTLeWFCKboa4GEoeGNQGBzKPSGwu9RpY3AD7WVADaYbmJ9phPRvsx9JrVnrgcfLxtMpH9D",
  "key28": "5CVYT8onPhkTJ476yMryGyPov9FFwrVpfgJVvyLyw3wBJAtXKYutG84SeQpsjw4jw5iGiLCg6Nfc5WnjW6TPA7ru",
  "key29": "37ri6H45Uw1WdYG89rsaAboSvyrptqvbYne7LLCM841XojWqQaV3dkoGT1GFAyYSwGiDCN7zVFuMAXZnV8uuwmqu",
  "key30": "35RSeZLvT3hsSaGeQibMzZTxCR9JHtrvZJUaVWJcwL5yhjh4gWySVWWYT8KfeyksueFnSwtnzVSYwSbR25zDZunk",
  "key31": "3ER4uiWbhvnKcJAcCjkTiSPjUEZchsocJDPt5ieujRwx6LHJq7MH6hqLp4pv7rSNLZDAUDJB7TMgbzb4y2bPNAPM",
  "key32": "4F3PDxPNdmRHFecEHCR4HZUUUGimWcgoY7jxEed9ey7BAGcUzmRWUnfeg8Q7HxjBn54UBvqy4EsafLt59hNtGqJw",
  "key33": "3mzbzFmN3boozG6kLG27khX6qXSxbnD1kj9GXzY8FyaK5KdhVg9hxKCVpsbxC4ragafsztc1ahNXgfEEYjindF7M",
  "key34": "MDksPdTiL43i6UedpuLFGUd2KUQoUewp5zAUQs3yQ44BM6yAYSVaQtwXR3PM2yLwhcwt2Q3fh1mxr3mzF2Au9nJ",
  "key35": "Qrac5s2CA2WJhAACTGp7iiSLMpq4msVt3YF8s2dNs9BQy58jzxFDQ3uFWZY8hYpouP4YWsw2Ph3gEVR4AH6acgm",
  "key36": "5iEPBjE3c9rzP6nEKTbHMD5zyJNxCW23yefszgJSvbYKapfxNoB3z62mmkrrTmHKoL2wPUDBbaFTByPsQJWwvuyf",
  "key37": "2Kvt77A5Ra63ZWj9d297d6zBwkdW36oxZkugLvYZL3T6PNHjyPgJDGSJFLx9HVksYPArA5GznVdDP5rdK1nhiHBi",
  "key38": "3KHJz2bhA2Mar5B4HbG8A7xWwWjzbqUXNsQWXEnZYT9Arx8XSAXCcM2tXNYsmKHkMjTFBmqUZ2xtFuje2Xr5LmCQ",
  "key39": "3AqMJfL9T4grwJjeFWSz6s8PnhcJ2HJFFMYNpvSriziLAkYnQE1QR9PKL3GdoWJ2deyadhw3u4EogW9TSsYSs5bF",
  "key40": "4hYXmT6tYLSHD3ePLE5AXHGJ97pSxpWrDf9WGxwX9EHCcWYsUw7HMzucZgMgzV2BfBHnqAtCz21rSDFVimLchUU6"
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
