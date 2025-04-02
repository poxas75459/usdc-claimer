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
    "2MNK3BU9SCgWTHj6a667Y8ereNR2qiUjQHKQMcxMPJSwaxBgt4b1SDKxPdkK3bA1ABD4KEkWA6CEc6Bg78U8n1hw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QTGjReAGh8ab9ofQqU5rfs7Eu5gho89A7FD3CqgtCMH3v2Vy26mE2pG6nYozBEEocjuc6eAcbtwX5vAYGYupsgj",
  "key1": "35rNLuA5UKyTfSx1yiqhsf7nbqttb1Vz3uknUCqPfe5FymZRy9jWcKhbiGxtUFHmy6Upwu98rtpRs5cK7emnK1d8",
  "key2": "5S5J3h5H9Q6qNy2ksikx5ZEjbKDFwqMQNUVCL39sDdWsxgxDvMyK2cc1uZBSJcQwEBHc8wqaVzjX26XPURnihxiu",
  "key3": "5G3SCxtsqvVKKQ9TERKjFfB48x3e6LwLE9J71d3dvjKS8GukXxQTqr2p5xTygkYP5wfxJCwGRkxymXJGFamg4SHH",
  "key4": "22NdRe53kDMPwhLj1iPWVXLPrtxp7okdByEsR3Xmfo42KHPajwZeyMpmT46XxMqaq9tQoMkkHGNHQ4CQnRBkQzyJ",
  "key5": "2bdoGeFzUZwy24UwQSFDAHUwd9U5gcDXrVJLHrBmZFEipbQvbvzBP3NmXT4a1Yb6LvbGuqUdbL8mECimrJNqnN2Q",
  "key6": "3XfstNRxWQjkQC64sCiBcfxm44pLRgcdm3nEtutRRTjax2mBE6vfKFRR1TBRQ5LwWX1uG8F83rjamxfcZgNaHk3V",
  "key7": "54TCit8GApCooXWwrDTj5j4zCeD1FicPfHQSnuYAU9ygUvM4r5LG7JntdNyDW1Vj7LNQ2eHjMN26qMApPrMUxfor",
  "key8": "5rfXJHEJQog3PVi1G17Fn9NNApTEZz6AxRshQGPPS8ZSu2UzkM38j2BYUFt4yoQsmLDqJBEzUq9zsGGwPHcnnKYe",
  "key9": "4SERXuA8qDegS3PohrbUJG9vtRoor7x4pwxRhc5W7wB8FgKTBC3ZhvAFDfirRcHixkKFoE6h5mMunz9giZ1NNqFe",
  "key10": "4HCmj9nCuDF8wF2SfxJEHV7gRAV8ob6KZK2atRCpK7jkxvpg551EJNt7S3AGbwGjs3dq5iKwL2rG8gS9iGN5WWE3",
  "key11": "5fwhT9XKNcAr7rbWVdS31J3m8wKdDorZuREQzPvTKKSg1g39ayfsjxzKPqBv5Sv6wcrpj5GSMterLYqQqYhR4axn",
  "key12": "5MAJAZAUQHfVrSvVyZjncnnjSfiEgoggBir1yjfKzhuZem8ek589HC5BSwAQfjaecC66KD5EeBX7HPjZpxD3ihpn",
  "key13": "zsHXejBkuXNekDnYBshYEAePDhhsCqnrGr1oMw3hJckLGEuJK13xj8KkTrBLWhzi9WZ1La28HiCRPRUNki4MNvM",
  "key14": "4Gp8JsWT7YvPds9j3Gntj64AEVXJYPM4yDuXkameGVhiYibPY8dfSfxvCzsHQsiacsjmeVCwy7yWcvgXkszWBiAi",
  "key15": "2MAdvXU1NuqDA39t7KmiABNKVngYtNwjMY4chYtHfhM2sQRLtKXxGLQMyctrdb7dwyjvS7F2pSDxkxgWnKHzpAY",
  "key16": "woHw9huQutieT5xa6Ux1gjoRjRpvvLdhwUGHWikCAPWRqTiJWuzLimzcc99N9oB35RbzrUdUXYjmuPztNjFn3d6",
  "key17": "615ZXtL61WGmW9p8ka1K3qZ5q7MKtPBc94RS1X2YRNqaBo24hMN2ynhz2Hafg3QfS3U1JMWHrXr9n9fvA3V1J7dq",
  "key18": "3oiPEBDEHL5YXt3zdoYvQ3hzRyWZruYSv6XDjwkmWRavKrfUw6ia9RKZWN6mVRMEcbQD5QLNM6DZvK2rKZu7B2aw",
  "key19": "rDpXUudD84a1Qx6oJFb96r4fcU3tKkKuZBEhdXHGm924qjGoPH8ynYUzqxMFNaMYFJTAe1gY2RgGtgg8RSrvpux",
  "key20": "rVY9qCGEgKizfBguS8YF8miBSbGR5dJtR99YSXQjPUjYhG7ccX55F9W1RgnauoZRsd6pLESZ2wANviin6L5rZbp",
  "key21": "2JSevmDraHJdoV6a8iY2ynH8GHiKMY14NQXD7tdQvurDSPJE7L89C8urxdP5TLbWtHnidrYJV3xqi3sF2FTyUfj4",
  "key22": "3B2Xs7a9YgmgRoD5PLHmy9nQFRmzjQszCBGeY74n5pZwG5q6NacfpayQqtX99YaRUWJ8v76xHKSSBHbbfm5aXfps",
  "key23": "3h89ux4msrJZWr2G99MKrcnAxWhgBXLajbyEpX9AmGMFhRUmF7qsKsTQsty8mcQj69YHzMcDtLbPXpptrJCAjX2p",
  "key24": "tTzn4phstLcbxZc5TLN9LeGyXXU25XDLVdZth8nh7hKUsU8js5hNfsYjJ2tYXSpmHVqh4vvSS6mNdR1CmkR4v2M",
  "key25": "kYPqffAz28LzH7L7Fe3aidDmyQ7kUJsDmYn3L3bMJNPph3gJP2U3Ec65f1WYn82eUa3JaJqn7emrc1R4xg1WAah",
  "key26": "2MjPawfDwtK1tJjER7ZeFPmHRt78gq14tmVhhXj2w6nC4cAbqXYUjAG5dk887gucQvtL7FvvYEUuPdSzumm3oK4v",
  "key27": "53P568cqvhQ2XUKKfFMhBEWWsKovbtRrFGewMCJhtcdE4BtPHbcAW2M7doqMFM5aw1oA4KwqTdcnDeGHwR2uAUL9",
  "key28": "fqYQQzSSg8gFPuekm5Mv2ayeNMWxCdJLUw8NsYGExdhc9vC9WGnMC4DaD6PkiS42ETvhTdWDtNTrzSmSYgvfyi2",
  "key29": "47qzwxKUBt6gNgRDKG6zvHyKQN5fAY61JaTLvs12aznru6hiWAMpBgGSKMJiAMNGizUAj2PXCbqySjBSqt41j2pH",
  "key30": "4cDQn93XLfnHsaRZ8BM4PUXF672hJqPwyQzGgVSEmadxRS85NHvPJV5ZJ4RETvzSzd381aJYapDcdbiWevnLeqVM",
  "key31": "HPfd8ffMXAcNLmReznCSGy7DGLXiVr6ZSK5xPj9Hd7gzS2AW4oAg8YL5oRM8gkQAyQzeavVmYyisAZqNRB8qdCw",
  "key32": "4orwDTrnZLssFCX6U4V82cjh4QTWkBkQbqyWeZ5DdYzbD6HgPMKoT62yqruPPuCzy629CJdDiBT2hEF27nmr9xRM",
  "key33": "3mLpAGgGxZQJ5634JBmqMmwBonfLYStXDupq9qcHcTC1SYZXD72BWJRmqyP5ZtcA4foNzysH9orWip9viD1Cat5p",
  "key34": "3Ky4BiWZXoWzhdhyjJo94yBYickrNiWVo7Pw9R4kWDawNw3CmLTuWU79qcYqU5pw6EQvr7WxmN6UHnmGEreJcE9X",
  "key35": "2sGHcVeqKt8p7fgpMjpW4HSMkLS2j8BWvhsN8u7UU57mPQ8UYyLwXb9uD2HqgVa2mhg73XvKxEzr1ing31hxDTFw",
  "key36": "41vxzoLxmXhbaMTmU6DqjSxDyX9k77THyzjNsLx3PDa1hZvtZpCDKA3Ejb9SCPs2KVpRjPavQ2Bvz24vG83cT2TD",
  "key37": "2VCLVzxwc9VjHVQT8DLHiEbvf6NvCp7g1DhHCLc2wRJQifUxDEPkmm4beBWdH4UN42cDYEEinQaZAFAy5oHP2aWT",
  "key38": "9mxH2pU4Bz7S1XMrxfsz8MdcPcVDkEmrkgL5EvpxFiRn3qoq1T5cAUUCX9qhMjsNZUGZFLCjeCpj1EiMap3nnd8",
  "key39": "3kKBr8mcBcJrV84PUwGduvkcmDkHHD1uf3aA27v8p7WCVg5VusbTKPNTn84WKvRd2R6uhaLsW6pskmgnFiJJXPdj",
  "key40": "5RYhr2uoLnGWifDKXDdANE26sELrCcqyWS677TbrUuEtY5gaaNGqmkG4iBU83gPupa31Hpp4cmzkC5VfcBDu913L",
  "key41": "3N4NznSn1qY1n4kGZsg6W6xWUZr9NdcGqTLpAc2VPdRQUM7jamyjVMqjc5uZbDUbEaRfoDT8X41A9DWw6ij8FWPm",
  "key42": "2Dfp4LQmzVwukdxqCkm9xbHBDNu1aZQEWzGGHc8m1XvsD3rbEXHodAxKb99SBBJbDwQjLpPya2fPGx7T2xr8RuTy"
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
