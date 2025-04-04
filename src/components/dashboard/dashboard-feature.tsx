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
    "4ndXMVhkT84iMmUnxBojVcw14RsYwpgK5ckikwzANXR6vUYTDVG5JaVk6jqEL5jFc52iNE1CHVB6rPQ9EREZc4We"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jDApwmv7kKvikyRQJGo1rsN1Ud8Sfx2M3ATQLuJow3y5EKvRWDr4MnhNDwdHMhujCGPjQM5dCeWaaPsuThs4xdZ",
  "key1": "LTUZWasHKTBZxWkFAHNftSHrwkedWU7ypfCTYQoQRpoJ8JdBnpiziUcLjUaPN5yvcfPhiUkYGM4GThZwEBPf4Fm",
  "key2": "5eaWAF7RKuv6TdMUP265bcsk7PkgxHKxL6YEGkA82JJYyyGgvWWrjCAz9JUYePEbSVivxJMJ1cjyWVKXw5UyP7pS",
  "key3": "pGqcoHmWf5ui8FDMTEEGwmoPZgejREMcd1BtxNQV6Sm9nidoHhHj1xDnhFihrd9d9Dg2s3aiuEP4jpRzGQojAk9",
  "key4": "2Npm3HVbhLZsbqghcVDtn63zpiVgRm82K8L9Y3MSvvkuZ2bSQdd47MmjQaZb93LwKWJkp5ttSRPKrRyG9GbSesDA",
  "key5": "3tPmW9tpJKh621aD5JwB3naLyqrU9EN6DskDDGB2m3Ki6cFFxAhCpF6khZbhdZ9Pr4RA5nNTVd3Xg4ZAzSB99DTX",
  "key6": "eNahdy8Qo3bwzKqSJvajseRG7EctKvu8FSWyxj3wiKpSZsmttgNMZvCBBTprHnUofRgTpAJzmZ6nuceHhdWnaX4",
  "key7": "5oEhqr7UUi1VCy4WxPNb8ZCC55xfyRdzNjrGA3aLxh61L9PumUCuMMy5KwtKZTBZnGEPuJyho5guvzTd1vHmfXUH",
  "key8": "4mMuEDGw9tQthP7zhu9fBvt1t5xzL3eGrKfW76LWt2CmeJxSGuSsZmEpdHXb9qk9ytNXKR9dBhqDKWLxqz5D4hZF",
  "key9": "2jNGGPnqmMbhecespVixXRx8CTdA4U8ncMoVJwDYXQ19P6ZJBeRSAS6uVYLPmU5wF33fwaK5UYrFW8JCYdp3njPA",
  "key10": "4x5eG5upXbBgQRJ6CmYYchiQjE45puRkgTT6p4Ua5iwCXdk8Ywbzxt3So9aGCteF3eXSKGFDuPPQ6ytxgRhjoVSF",
  "key11": "369T9DPrptsKt4wSShXQURFWxzgyHLv4YGKvmFkonD1ckATjeheBESQXPb7PcPJD4wcTHkfthGMvdouuhqAGMBJP",
  "key12": "3aiKdQsAwGbgMLwu6Q4rEn7vkqW5cMnFGvv5ZKFFchEL4Xkcz6Q8gLTiZFDFYLFVmWcUHjjukBSY3cvyjeLPLpw7",
  "key13": "4Jf8JsP6LC8rf6FM8xo4azt7ZuMyQMzNPrGQi31aMbgFaYhCb6DPyGZmKwmy4D3Mgiy2p5WFLrZrZEJi4rBsMYV5",
  "key14": "d8ydVbV9cJSQCL8XoGD8hq3omswyqTpgc251ANgmQUBGSi87rVTWpdSrshntUMqgtVW5wysQzD4PzJsy61iy4Ng",
  "key15": "3NScNxHEBCcMo4eMpBiaGJEGWhf3K7sD2TyMcda8KVzGpqs9kUb6KR2qRALfN2wTdHFx56XR2PuJRbj1cQnEsdSX",
  "key16": "4jnsmjBUDYffhBQ1CjeKH3ZPqTFuJpqmPzCMU86Hy1YydyW6mAa9mFVfE9ih4HN8iUsFioox8Qtc95TWFqaD4Kyw",
  "key17": "2t7i2hM4PYh2Qv6dHrNGG9CHwATaRUxHLsBZYmKKvKzebmyJqU3YSn8JHJ2GBhYxRVeD1vKF3q5E3RCqJk9JaSAH",
  "key18": "LuP3b64j4F9ZnPJzAwBmdLDjrKeSERGLsAbChYLHvZZEK1b5EVhZxy3AGD4erKdk1BPATe7Npa6AWMnJfbY1MLE",
  "key19": "2SgDzR3WpFgDVwkhMPM1H2wcQXFMQg9RbBBqQDC86sdJ8XisaeJzFF68sP6BjPHUhfxCckYRX1Uz6PTxRWzmR7kP",
  "key20": "Zm6t95g2DKFZJRePxxASKB1Dcbn1ebBhun9ByJPexxKfvMsse58i2Mgvd2AB1MGELgptDgQdpWyETGnbpwaPfR2",
  "key21": "MWx9iY4ndfv7agpWJ5Bwuyht9nz1BJy7grKP4NCVrQR6HCcxuNGCok5EybVwBBmpTJFQ37znVU27Q71vAWSRZyx",
  "key22": "4DdGrhyZ8sekiHkcPY2ZoGJ3bfRs73bK4X2JARLHofggt1J1R9ekxnbgmFThHYXn9s9i8CAo4yykekcaqysEUQp6",
  "key23": "5xfNv2wiU3giBsq4jjq9PMQf9vwtWqzDJ9xFv6H68YJBq2LohTi1XVQTxAmU1BhSJzfTtPkXeQKXPUSY1ttMpvVo",
  "key24": "5retqVFEH5fyjZyrNFYtTXWpbiChCkhUEoN4axLwVXRZLXM1sgqgAxtA1QRtEGRoEkzUsREzCkhqBcd986jQdE1Y"
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
