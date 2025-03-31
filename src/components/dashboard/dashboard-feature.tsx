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
    "5ibVGiKL4mu4t6K3hAPLyEEfUM8kfcvRiuS6sz9urnedzRFFVMbVMJGMfzijCXG4ajD96ZQy7LD4SnwawHF7S27T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZCgBwcbCg1hyhY5HBHkiKdh5MFno3KUYvjWtxxYQLy7JqguMBYBvfJinNLh3nEj3vpQjFTLDfUXqkTHqnszwqt8",
  "key1": "WNdvnaC8QQW3PmeUwgMc4wUYVQFH343KNAwdZ5tx4yJ6HFmPLbBWRxwGi39ia3TRcaiBZUfAWPe8cruhyjfgMmq",
  "key2": "3gmDBuFjQusuZ3UCcFF7ccpMFXC49mwabgwwAkyZWg9ccBGEJRm2efDwRsmTM38xQMthyNWPNUi3r3TbjPMGLKTQ",
  "key3": "2CDdw69dZYVrfXmx6LXYUMDFkynHa2g7kmP2eZmcBxresu45Rj3mXVqFhxrs7QdpeU9WxwdNHM5egWK1UAaY5tpv",
  "key4": "34TcEA38dmsGuHsg3TYo5MEtPKBbLLUMWNcZSk8mhvRiCJUoSGouoAxfpFoLNt4rc3hzPy4QcJGeC7E8yuUf4co7",
  "key5": "oazmQzFAnWn4g2FXubEnmhMS8ad5nfEuXbxymSuh25fq6BdpWQH81WuMNmFmDfo5W6dKo6kgZ66svaj7AvZtGpx",
  "key6": "3rEYW3PoTorYjYsqcdSUuTvgtG6hov1JjsnrVNrokLrFAogHMKTjgsRYPKeBYJGCTwUuvqimFV7CdbhMweV1LaK5",
  "key7": "5rUV8CYUKJEPcMK5s2hxvBPs3NWuqpM8WSwMuTEuPzBCdFrpDA8yFgpZ2LWhQLGBf73onLgxFcBCHunwLy95SbHm",
  "key8": "5i8yA6a5gcNXJ5RL8KZoHqPzJKUmedzCRdmPqbpMfb9rR11j7YCHaFkQxxUxPvo2TNsoUPRF6FCmDRgLBUoB7NYU",
  "key9": "5FoyBDXghAmvsHBrdugsv8wcHDSa4fJLpmdCpq7D1fjLbFSpW9jHQG3p4i8bFcNLJuvzaXGRLFsTsU3CM8f4A3gX",
  "key10": "3AVXQaZrcW4z3Jq14E5HmdWWqYoEZTmt4C4HjqeKMNZYYQV8tEDkpkNng5Gh1Jh4L3zq85VhK88vbp3fvgBXYSAy",
  "key11": "48KFVzS8sUEwbVgnHoV1wCb6dx5CAs9RDD2jihiwTpXH24sDspAvvnnguHa7CUVdvwXfKFWbVbTmywoPVnhYjAeY",
  "key12": "38xdRFVNFbPoay8z5Fnr7RZTiQgst6UQrvEbJPoGTFXUqCxzGHxAVLhhdPMMMKxLpnzh9YqsupEv8C2sVpsREJWX",
  "key13": "3SYfqeMSCtUoaHYYciNhsngmSf3nKjnACxwYhdxQYgkumsGkzPi5Jq87DjjYiShmphNfEdMdTHRNakgkQKB7EsEa",
  "key14": "3Dk3mUP7xLAGuRFPvpWbHyXioXJPxeX17tSbMkks9jQ6R9kMU5XAt9smNfhphA55474c828CYgBwMegAhJxQ61kq",
  "key15": "4kis92HLcWdtzekTsLkMR5W7DeJcFfKooSFr8x2zgNXct3TbzeVXABXXUN258KxeShyTkvvZNyuKW9NK6jcdyCCJ",
  "key16": "dbw3qK4edftpHLxApwzoXTqmVbmXwYL28utF7dXANwK1fKLUKwpReD6EJXyGeTFSHN3CsmS7qGxEGSwjcej6kQA",
  "key17": "4ruTcqoe3ap4ULVcaz7SHqCqTWpKufTCGgJDHHjzkaMnoLxxMPNfJWNPXFGfNAaGiw31PmNpBHLFdd1kDhZbPWn9",
  "key18": "2DxUTAcH6YA4urAbpqoQtUmiWZjnWLSGMeRU6hmhruBf448WRfyaLMe3Mj2FCzSeYq8YaE2CdcE7dtYogF6BoNTF",
  "key19": "3DLPw8v8yqe1zMQgY4LtX7jTdkx7nrc1FfkgA5yDX8GcrnZBSAgFzCVjWg9kZinv4e3QabjCGa6e1kBpRE91BDj8",
  "key20": "3NyevkwnYX1ZNZ2cnpTzqQHtai6AfV4mYLfipGAzeCii6HDNkbUtN3p3gawaazergNHKNkaKk6yLi3PLn5oj2ZMe",
  "key21": "3CtFK9y37vd9q6f3FLoPvbzPftnAYK199NHuuudaTz83rb5RYK3gSzKD2bXphKs5WknMdHhxtz3Xb7w8kfn1KRm4",
  "key22": "3QRPTU4Nnd5xB7br4NPGJYEXvDsDJ2jPZZfKPQWyGKEeYifnk7QYYHdtuvZeRXKvY4NttWXhg2PMPdxVLeMbw7ru",
  "key23": "3ozfLa7m87FjCejft71QZFkJQN4g4pbWzUz81HZfJnxFfBwrmt2WUCrpvv2u922v2XELsV4rX2WnS7V5d6xmdKSR",
  "key24": "4agfGSd84f2BRNegxqSosexYj9jwxk5kiCnd1Rrp6NgajT1J4G48DuuNBYUkoHAHgtfpCecQtEeiNcX54PnpuR9S"
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
