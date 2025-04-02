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
    "3cqW6Kcb9o2f475NmRsM3tGfNLNn9t6a7mwq2fSDV2QBzm4eifGu2HnMNBknhHA32WJ1zQPfAUxX7y4VRzAjXsHL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Na6uFQhRA8DggRebtkjtweiswbFc3yPipaiFWVcuVLfPUNT196XJQAP5nXFz3pRxCynmMDGMharmWTvBG26kprr",
  "key1": "21qgGmiBbuwR6xMDjxy8kDiCjNwiNJEkEtoRhBggZkJ8eFavEMLRAwj5CiKdPTWyaRP79qiLdUh1jKnkGqz1Ts1q",
  "key2": "4yqT1WE2s4Xhzw9LbimKvqU1fUpGV56RLTvhRNpagxBrEvHmnrQHWDRLhSpVPkKuDbCsw9VBf3KdgXDJ2TVpHTu1",
  "key3": "3UQzo99Vmx3N1unWeb4rjZsdbFEJWyWr5Lds7UdKm4oDs49d7maqpMwp3AVWtwM4t2wafYCpgULueAJvA6TyAMpX",
  "key4": "NnVf8DfXtk9Nh9wngWiDKmZDomTnvYuEq6EtMPCabccUFS272Zcnd6SDw7KGw44QLgKfkCsT4umzwRC5FPy8LQC",
  "key5": "5Bv1gbnxnsrz1mtSV9X1jqmEGZymWFAEg474CrrvUP4EZ7arJm1N286HSvzp9aBdgjgdqvuyFTGMuMUe6rAQs2AA",
  "key6": "XyiLs5U6BwqaobybwzTCzWFfmQ2FSjPwmjcZnkiinc1D83rn1BFC7YrEQ8gwbS9M7e1wBA7RWYDCLvwvRvVdmg6",
  "key7": "AUQThfDHJ86utXYkYNs35JMVwPyh4ANYxZ2qXZMpqHf9jS8H1XitkLUmUEY9LTiKoAJqGqCDDDFiYRhyGmWdmcH",
  "key8": "Qu25m859LqoCHXwAC65t2X62tXypcver5sm6WawKHNaCf7X7xNBPzVw89usuzfYpBxBgtDmPih28htNDczM4Mkr",
  "key9": "2dpN3XcVQjoo3deCtNe3PHHE399W6CRx3jqJPsuwW8Q4hJw1zA53Fh2D5SapWPFQh9vzgNt4emAAVYqBCamUgNgY",
  "key10": "5j1GHuUmCn5N3xjdSRVmMDkjQBwF6cHShAN2qRio2LRaHqsEV9pHXA6JgA9vNkMX4SKdgK2tjbMsh3VDZirum4aB",
  "key11": "7ts8hjwqeaE1ktZWn3AEEWRmPE7m7CruQ54b1jUATzHMLz82hG3oyXVfFXX46X7A15s5Qfw9rttcWUhRk6Sak8T",
  "key12": "3UW3EC2auTVe2mqL2VZev8U5WTBCbQcWp7eid3Qjc3bRfzcEYxpCPY13Fq4LxGLTk8ZtsnDFbRMemB2Wfs5JYmq4",
  "key13": "m1SyZmnFWdFePsSxjqhTRHNVR6F9FMjwxkt7zxUrCzW7zaKU3oeV65ujSVmgJUJtAAUhmWtSAtdcewSPgBqyj25",
  "key14": "tvzKG72S5nSMEWZz1uYUsYEVjwNYdRPZqkRDF4VkaxFP2fo3Tv5j9TZ6mLSmy52cTRkw5DXqyfJRzvADAZysXv5",
  "key15": "5ff7kbWrxLECf8jDxZ1qTqgmp4UFQ5V74yrKZkyGmzNMJSi6kAWFt117J6672zpEgoBNdgCqBvrqWrNpPMiSdnvd",
  "key16": "39Wrmrnm3MFLwh3CJMAW6iRAtQjDzVdg4qXEdYcs8kfpw6XFJRKjuKV55k1SQAxjc6G29iyCVUnmRV7bimjfqSWV",
  "key17": "2eidkpZXiwZR9KBebke3RcPfGAqVocJ4AC7s25yysmcMqdRYthy14gjiu17cCdqQZYRh4LEKg69PFsi7xK3JY4wp",
  "key18": "57B5LmUmQZGzy55WEW4ctvExZvYqQcdrvFV8LJdYYHm1FEwznEfTCMAQdiBcUKJXv686qjyezMqJ3xuU13vez1Vb",
  "key19": "5QSbjUPE4LWLWS19XKYgStnnfcb2zYmSwH1MXvJQzvheMmJxsW1uS3KW6b4ksjyQ31WKizYWEFRT6t44JJBY4Ghz",
  "key20": "5FG92DM6mEvhAKjNE2AxpBKZd8Jwxpea6ghJHiFYtUdLt2g4mTp5wfoBWvLSoXVLivjU3WpTNxigwSTQin9wzuJb",
  "key21": "4xRxiPUZkW4HJKeQJFRcgboZFCo5XkHnG8HjhgkzkmHd5t7pdDEvq4iGiW7rt3Z954FkmmyhhEVFtUPZyUxLe5zQ",
  "key22": "5kmFjeUjt9VdypQ98cU8U53hatuW5ZsmB8zu45t3us1jVKZxd33EuWLJmF8EyMsvn4HRrXAsSsUuDwrNW6YxJhMh",
  "key23": "2icH4CU7SwsLXRhaoAXeRgs3YppqkjxpBc46QxVCwiLgPSvnuV7bZjsgUJu9u4RZn72MMWDkWkgLNpXxgmN2c88d",
  "key24": "3sEWPPb57mSYZ7joPGh9RSrC4eBZbrFfeGv1mPHz87giMx2gYbU2pT52KdKpnbZ2qive1zNSUhg9ABqTgsSf7sY8",
  "key25": "LsXoTWStGmNDSEKqU9HA8uACwBGuYCfNZSh7nyCysyQs5AwUYq8gxki6AhX1ATsaL1CuEYDNFWsrqkxvrgh3FPS",
  "key26": "3hKci5zQk4ZrS1MVjj24X9YVZxquaNEDMZTUXui1kFYSMJ4VEDTxRvRYGx2dtzx3V73hvNMDvKy42AfjdxJSrFMS",
  "key27": "47HxD1ZYfVUYXmRdt5jH12KRvdpdUAVBr1SAWhXvSqGcLbUenMt2aPy3iZPSV18abat53K4mHNnFzTMhPqwDZqSm",
  "key28": "497EfT581jPjL9x2mQxoHJXMp2oCK2a9SfTMKjXgnNkxkKmkb8atTskEwtnL6nhpiSnrmUSc91rsXi6BjHnXbuDR",
  "key29": "5898iZypeNasKYVNUByrtZMYC7h3qdGhvAhU34fNMh3bYVeS5vhqMBSMACMgz2yDexjjFK35CuqHrAVjD4XQzyqr",
  "key30": "2R26s6jZGYxtw91DicYrfdXk9x2asZjBwUV91VnWVp5PCP6mA3qacpakg17kUha1D5MrWFeWua2B7FDn5Q1MnTHe",
  "key31": "3ZWZDFb8iWmfHG8pDrkBBzx3r3ntWLQyw6tsfGogBBxR7p7kDQh1APJP1hadVRbW9B1hAzZu1gGLKPuXwf2d6FF1",
  "key32": "3ijZASNVYbkG6AhvfRNYGKYpjE7ALtyxsVBGfS6NH3JCDmR3rKYtuj32RpKbffLrZijmN2TvG2yfgT3Pgi3TVHeo",
  "key33": "5aT4gKc9JeU6JYLNtS5F5HThKRKKDfwhVJpggYTCUXqLRssimyqrkVaNXJW3G39TeCFgLLLPW8ZJjWtepoCRvq98",
  "key34": "m3pMnQDYUapS77dyBkLoxctrbC4Xu7Xur6B717xErsVW9Nd579xQmQHptc9VTSxrpy6vKNegV56LoWforEJfSRy",
  "key35": "3UT5swkewJ5fHb3mgVQ2Y2YZ3FbKYJdTtyBQGtnuH3Lws8STGZopH3EnnxpkwKpGUZHBAYaJ5TD3GKtXChUDToLy",
  "key36": "27L4iringJbvb5qWG9a7YPUpEoDagvCRD9yMihAJPaCLuZwmMUGeDUuB2Ut3TAmrfGPqLi2qwh4WfEmHC4zMuApi",
  "key37": "3a1eUdRriduYVoTRKrNvWLFtBweUPYs1ZCwbkCdA1joZ1RBMp7mi9xpvuGGor4UFqo3j7CyUAKcaEFU9UCzg9HDL",
  "key38": "3e1NUCytE1WgpDXDvMLYwRVsz6ty7Fc4JWHp9nRiDycR22BzWTL1PhGT1KsvRfmPjst7xpPz7eWP2f1jwLke9vUG",
  "key39": "4kSG4w2DnsfeNaYErphKwyK83kCnDP2s7mRz7MCkwZD5QHnDmeKHtW2ejvmVbXubwUmGKT1mqocUCcScToLCTMn9"
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
