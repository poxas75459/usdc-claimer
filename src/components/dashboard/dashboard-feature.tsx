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
    "2VJQpxRa3kfaysWjPhtE8DR7cyAqG1EdBUTgmWvSjphCo5YuvnzA5c2wveqSmXgZ1DeU2m5ZXjv4txMZCLX4ZkMa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "w5XNmoTXSic4TFRYxupTJ1fRPqfivxKkcFxChWnjukaCABPLvQJtkRqNwDHHWpCvYQqY5zGSjXKBShUyAPsZeyN",
  "key1": "2Uu5fA6dbDnziXEUhZNPdYMB6mGUNDYqV7BBG56JcSLzXKeLZ3XmRt28AFnQZAZ14Jed3ivr7KyWLWRd3NdSKSs5",
  "key2": "2EHBmsRQtcZvy6nXrW5KtWQEzVWgcFvS4fj6GgBzoSySVzHj8jndzmVtQzqE9oJ5Q6zzNyGZuCrbQ2XFdCK2F6D5",
  "key3": "31hti686sDRh5x4nsCiAEw6FVGaABT8J2PhjAzRMheo7uort4JKZHetjZNewQYeUcUSvYmCj6Gdq2p5GzSRyBEE",
  "key4": "TgZB48PbTkLwF4KgBKPUCdZ3hb7uSB2ZhunTANDDZp7QsHNfaom3Pb6qgtyxxt7AYCWUNGGvgn4hG47KibfSioT",
  "key5": "5H7tjjtq9quSFxooJPebcNdHdYCfRXXMGwJTqr3G6GUbkmKek2FyhLSG5S8fMDAokSgqKDnDoxjHrL11sVPbwBLW",
  "key6": "5vDNFaJ51WbMb86SwgFfe35A9LPMWKpCPH95CCLSuyUKY95fiVhzoBdi14fppamC4MvrCj9fRSasrQZKphgNsHea",
  "key7": "2hjVRZvnxzriPv5AiymwkaFaxRfuXgb4gHsc2BT57tegGCkFCd8UL9yqMi2xLqTDYAwc28WY66bHbV8ofesEEHG5",
  "key8": "46uL8FPaGG7N92e4pMULVDDEH8CaaJ7hcp75E2LQ4JfVJ7e7FqpSxDh6dy3xQ3TTuMLN2ARLre8q1ApJr3KqFATX",
  "key9": "5U9mRtAhfkzgRd7dS642AHhVpUbs8zb4buLinJjo6LPp5QNUPvgGuNfFuAzjPrvXxQx3V2Rq2LA7bwWA1pwYNrBF",
  "key10": "5HVmocJ3zxY79aq5aGxvwibp73hxCZsm4K6Jpgxm8KGRtpNPBk2sEwTQhyDP372RGuHReENREdca1vHNaA5nVV7G",
  "key11": "2LKDynbRsdbvjoAHAewjhYV3ip8hHwKTN1Kkv9XyxRWEmMV5Z3ET7GNdTw9nLVjETrAB33jKFdmfCUiDAUVeF8z5",
  "key12": "5NwW5Z7yyvJyx1nfseQGTTsc7YEZDpaj32dQ5Q7PqLWgLAQTro1qkedm1uwrqKP9a7gMEnaXHmzQhhYKTT9qCunv",
  "key13": "2uUUaNoqQPcRvdCmub8TA6wuF6MR4CkSNAXM1o4z9KLkPFpBns7qPhU47rugwqkZCHBo1GDZ9GaGzY47dBn2Ve2n",
  "key14": "4Ua9mX3cnjdodYYUV888TDipv23KBkcnDWhjXXAY8PJBi2d6oh9CBQebrShawAFJAFqTvdzPL1BY8cW6pjouS6zB",
  "key15": "5wGBRiqBVNotWNKuJJMJgoQtZ5TEi4BzFSoa9g55bst8bsiocybR9KvC7XVkTN1irm9bWSbcCeJU4x79ghdfUc84",
  "key16": "2dP3ZhgRgZhaRyd9wEp2FXGFJTbM8GYr3kMU6ckfAZ3jUxZqEUoX72A6HSC8Gih2XNaS9HHNdfyrofgQC1ht5Rkc",
  "key17": "cgC6m3a92onPaYuU5AAtFnVtQ35shtTcnP7mc75L5MmMkoK5H2mQhcvrJkXsFzRxtsSRAKv5tps6BUSwNLn5SeP",
  "key18": "4v4rBK5rQ6CQPSaPqwtiH1JkMhDDVmZYK3s3gcDnvGVXAPoLbdZahJ4KdV1ssKQpkULwsNi3TQnJrd72VHEPio27",
  "key19": "5oLyuNvut15AC5aJu4CKHShSwAByDHXnRcC64aM27sSN8bRQN8EsuSaBN7eef1E2dayFAgpoajWTR6hTZjHpyVXz",
  "key20": "4eNXWrBpAPm4jZhwzsPtRkKCV6hLC3w9XUXQzdPXondN2QWZLRBCUnEmPkWzEGhCzRQFnK4zrw1oKunqpjPad5FK",
  "key21": "4WpQxMLuCbf3TUDW4UFLC4iEdag6Wxiaseu6hHjiygSXriF6zRvZRLWBGsnDp1Ux6r1iV2nvvTvroQar1EFRGyK1",
  "key22": "53J2G9DmJ3QmYyvJ5CCubX4GRssGLNntcH4AMmg6JTDnB2bwjDfsPPHj2WqF32ep9xJJoHdPYxftdR1rhrFdvZyE",
  "key23": "4X8EhVDw1hDrwe9ukFJp3DNLKmuvCrbFSjpBViRokcUSx1SMQv43DibYjoJbZT79Ujnr9kQKR6SwaGnVZDy9Digf",
  "key24": "5sqT3PKqjwR52eXKwoXuC3ACG1BXjvpfgV9T7gGFM79MD17Rt1QwwG77gbquBebd3hAmkkoEr6SHK5faVTzHnnT2",
  "key25": "3goAUfdPazNGEjWmr6GyLPDCZt4PXyuyonTJC28k5kCXYaonsJr8AUrLAzfv2mDgTXZrbDmnWEMJrgnSQHgcM2oF",
  "key26": "2y3ZHLGANvhRoqD6BuSgkTnj1TnxCNzJRxWwZurDzbumabQzVYGZWq5taTb4uSYSqq9VzAbSz82DZLVmMFEwy3oR"
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
