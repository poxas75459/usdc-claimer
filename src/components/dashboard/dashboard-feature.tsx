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
    "5NTJbEsjhN35HSuj1b2vV9P7zyBzhhp1U4h3RNUjGvzWW2pJ9LauwMZzy5gY7RHjRZMSpNXWowTqLHDZoTxBsXrc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uimaaxqB8qk7HBM9MKXvNwpZ3VBZr1BEApGbiC87aqPmvS4wLbEBFAoLduzbrRAfmBnWUtdngpuLGALUV3aAunW",
  "key1": "4m3ruVzyy1DKsBUepEmgj2xAGrHceTCM2GkyqN7kUpQjeDPr29c572k2xA6biMPgcdX2VeYWP1foDq1DJZGbfrB6",
  "key2": "4SWxWUFNFXaawY4cTqBKRUrMyrgxQHkwJerWW8twPWETKNhrsNifZ21rjWj7xqthMJedJdUpRYCcGVVTei5T5QyH",
  "key3": "3t8qQ6ATaTZbigtQ2X8UvamKGPg5a4aXp4pKGo17UGWntVBTRnTydEtD761HPdvmp9udQmpdSwdKs25t2UyVrujG",
  "key4": "2YWaKoTKTZAseDXuWohdCiDTUmTHJhMyrAGJ7WhPpQSaPpcgiT5qDsBanBHiqTqomaEKEdpJhSP1XvW3qfiNmrif",
  "key5": "iz7EuHpHsJDez8Et8xjBQnRvdUc9ZguimXZZWoRm1eRmgN61uaNsE435GGNFXSQCMJp4aZphe1qD3CqKDPxHreP",
  "key6": "4FfXU4mDwEn9b5r88dZX5AGX9TDutbrD3z2Je7Kg82Q1ZiGv8ALN63yVLDEK4eQePeMgbdbMGAJcWzNieGVsbaC6",
  "key7": "4hDpiz9h3a4RGjbc8XoUS97rvT4uwBfoJgizjVwVdJvfdLCfd5c6QPHxVuVVF3wLfHR8F7sjLUKm1prwEmkLSKGX",
  "key8": "3m2kEZvJGcFGxPA2CUCuGxZafcKs2y3MXx988EMPAgm4qWvVdtDmpTeWoo6cpZdiggpZJng423vUAStfm73bsuza",
  "key9": "bmLnMWw4rFq8b5GuLqPMEGk7CJByfM4UXaT4GoemnzGLTCgVFkNZe7h4YvxTBXCKGtLkRcqyz7XkQFnFNc2YZxf",
  "key10": "4z3gV7xJYHjuEbkkyW6G8JvE6tgQGKExA3txbDBrjn9Veqhq13MNe25fo5Rs9XTyEse9YuwBqvrjXPp6kqbVji15",
  "key11": "RqT75vSAQ9yh5egNcmL3XxKZUfxK66zh5wgZmsjeJvoVHx4mLmrYdbU1HCbUwd4xi2ognMkv7w1yCmyWpKPyuFF",
  "key12": "WXccQLKzhpx3EzmPEAhTWwArHuBLqrjMCyUg2wFs1uSbM27u1QucLoP7fUUiS2nMchUr2GRKPzEv3UKtRaW5mZd",
  "key13": "57Ev4z2JMj27Sn7ktZqRuF53tYuuFFsPPV4ZyhopZUp37xJLXor9iRE9MX8m4jHHP1vH8h2wd52Tuv6skXvGJ14H",
  "key14": "2rxTEnhHtuF4zvwHQvY9RcdmEjoEvkQwicLgkWgMDmPdVZ3CZjYLiDjWRnNqU1gV3XJEypypqLGMCATjWMxPt1My",
  "key15": "NPmEuCJ9yEaF83XVttGkUPKTWFEYZhkWchPDaGtBdaMuMonmbwLbRSZmZwKVWrMnhAvmw9EXWYM4cq6AfRxX4oB",
  "key16": "3VPBPH6uGiX19eaDm5j4rJUuTQ2q7beYbLV5GGm19yiXumJd4S2SYGnravrx1FAxGn8rSVuUuYFvyXAJQgq7JdUf",
  "key17": "4U1o5hPGDLjZn2BRBySyaMgLr8vjLbfb3ZhethBUnCCfyFEV6grJ6T7joiTxsY2pMvSEcVscH99gSoPjVwQgXFuE",
  "key18": "3V4347guLyd3JnCBJHVFRu6njVRJpUM8kRE3vECHgnummmd3PuUNmyQKtYqWgK34BTetmAbjuFufp35qnJ6aS9rL",
  "key19": "65WbQg9dk1XHBqLnQGxTy722HNnj4N5aURjaG5h11tQL8TyD6CpQWaNWRtCjATjadX8SJGUvm8XncMQDzZDhFjQz",
  "key20": "4GKxF3mgh6BBUijgaRe9wd4NdLYihP8YRQzSoZioPgGgLEca5PDNcDn9L1r9JNLQToNVmWRch3eajGXMfJHSVLPe",
  "key21": "3D2hMrKCURgDjY1LBWaqr3yeeGUShvk1ZDzgM9TWJBE4jjRxnMFcYDi4CRYwRZ1FQp1oUaLbCmLtwXYtqc6pcNrz",
  "key22": "5SxHfDo3f7qaK9a9Pz499Hqrv7E9Jz3LVTRa2VmGxgJ7sdx8rN3shpMKHVgmXPF1AjQjMnugVSovzpocWMU86UWH",
  "key23": "4aqhsvjeUvPcvrD9nitAhs5rTBsyzcdTnqv1zXfx9mHWxCGRJ11RqSQAyax649CHQ3fev4PZtonFoWch5TmsyapU",
  "key24": "2mV2M3zWFw8iGwbRGmsWzKNoxGzea7hcV9Nt8NhPgLCukwMcmDtyntXRAWgGLoGCQrzfZo3W6g2pVBxbrx2nuF8s",
  "key25": "5gdFoJv4osFCengpcYMV6BVMJkzhirtF1CF6Ax4tWZoFihWQ1t9MPLptWbu8FGSPbstp4ueXHH1BKvc35uzy2xf9",
  "key26": "5NvitYmd9G2amm4mqhpCvqwucse99GTnNxBdDLW6kKdAK66E5cV8Gu3Uw5sJ1D5dUcoKSVRDWQo19T9C9rC3ZhBP",
  "key27": "4pxaTJw9BcCZ5j7WXtc933EvRqkwQRXuAx4yqmEJZYkvZN4LdJCvpoGvprUdXePNWUxZeLHsen2c3EvFDp95kqrX",
  "key28": "5uX6xa43abgWo1CKnSwVRVWrt2Z7Zx66YRfEoFAaWPXb7Z36y5NprzA1CixeSB2gfec1zHnKfcJHaWRSkjMSTC32",
  "key29": "5b2T3pQr7PZySUADHL8tGKmV8Z8SxrUHtcptiu3UAny8TAvtuJNNi2Ypv6e9CQHtyUnbcoPCyUWtp5gU2H9SYVWj",
  "key30": "ESkjrn6t1GQrbxY8BHCDJfCwgG9Hse4xKyFMbY7J57bJmaQQ8tJBHrLHrabx3mSphKVbAHWzHaWZrVXWNzfZ5H8",
  "key31": "2dB34PujTWtmLeYU5qGdym2V9kvUJLNpECSQm4JBrT4ykefdMqrHQ6kj5qi7GTK3br7144XPQSCXuFWms5dXStcF",
  "key32": "Ndcnb6ZaADxBq5TVVMXf8R84hhZDRUJGcnRpaferDPrmSXTu5bwQi641DmMeVcv6XX8brspkRCtM5xofaRwxbE9",
  "key33": "2TmBiDkNphqMQr99JDKEe6a75VQDXzFnTcE1KxJ8ZE38VVnfJC1LSvpwsaLpwdF4GmaoZeEfnsqJH8XykeBBvH6U",
  "key34": "5FWd3zRy3kXZKuS4CjwUwCDR7c1cY4vMxcRJvdAfi4V1ghKNjTXx4AXBBeF1VapG6VXRjACCWgXWJ7Z7ymayMPTd",
  "key35": "oaCrcbgE2WhY59oxkQiBarLoJ21J2J5YvGEL1cV81eGXx4LBkp3DzUiFXYWGkfMHKR11mycM4u7kY874WggjZBg"
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
