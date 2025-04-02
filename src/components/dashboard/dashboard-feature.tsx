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
    "25cw25QY5zDPsrJiNhxMTEJuYmRre3RShpkTQE9QTq5g9f5fMEfPWLDu9y4PGHEWkXRACW59aiNQBYPA92ihjH1u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5w2TkCY3nJmdpm4y2yAKvkKKM4KZaetx2eNjYKUEgenWqQxUdVLApfdPWNuxqq5LBESKqhPfKFEfM3xjSiR8Ygja",
  "key1": "42FWp4xrkkTF2NMGvjvNgQXM7vzAv1PzQ5mrSBZug3rAcPWpdsaA8Wg7VQAaiS2YkHN9WgvZMK7zuSQFt89z7qpe",
  "key2": "4Q7SkcXafB9y4MjnHvQaQV8dnvHe5tkVzZxsNE8s6gWazAXWvpKh1CCajqLfX6pvvimCsWrUfB8UgEvPzuhHEGWp",
  "key3": "vu6gKagn4wSSoYh9ZYVLz6GwejBQk3ZGBY6q7E7R766zJELbGyhs3jsbBnD2SGYZNdTj8wYuxAFDenSKHDqT5xE",
  "key4": "5m7grXsE39vgzhvYoiL5RcBN3QkcXGhNeYjfx35moEdN6QCa3z9PTqo6XeKJSZXNqaf8rpxTVhCNV8eKY6XNbgXq",
  "key5": "3H3PoS5iyXits9DvqLggSEcfRBqY2Cj3qD3NisJkF9ThbuPaWBtXD6FxJPQTGRS8rbeHQDLGMg5gbYYj4v3dMpQT",
  "key6": "4qx33rWxZsJCyi25w2rYgkKMMZv7YhdZDFSNkg7SU86jZoqyUtqKFGtSdw2TREkQRJ7uWw61mtxc5H6TqHEA4sSj",
  "key7": "3fEG9q82NQx6GDUjS9KyTHLkv1rPzA7yjjmgLCfhggweX3P3GANhSq8ihUzWobRGdV3DpwBoUUBcbr2Xy73iVbdG",
  "key8": "2HPBSCVmYySUsXg3GBiNKBVf3N3ny5Q2sahzr8BPEYRGb39M7tV26Xcec4RfBCvXSWaww6nVuH1Vzczu9ux9gEd7",
  "key9": "64zkPuK6y1EpECxptMZEVktCVeGYgYMEyTCKD5JipUG7brsjpw26dYo64mHJhEXDpq77gJ5B2veHXYoqioae7Fuz",
  "key10": "7bhWQiTMLBWEhQfmUuSJiL5avTGVcmiYaZBBSZF54XoT282goWFgaeusRQMr34MdaP1LVbLHL1XuTwNPAkWdaSC",
  "key11": "4tYbUxwYXjrVzzm4nTUjzTmJgBdgQ5eXLgkeuttxGCRbXpgS2vJcu5xkmnLizGXWnxGkHuAciVyvWzjJ31aGtnqu",
  "key12": "2C356QpSiFuoTJmrCQpimUcxh91XbrBnwaUrmBQJsCUfLMCLbZdAEwF4Vp5KdTerjnLZKXvSCTSyaDqZ7QZmPNfu",
  "key13": "3u1WGtF41sPvoSFsiaJipQTKfPS46BriLdBnhUckxHAhWvPa8KMV4qSwjmggQDfhzLqgvv5sTPZoTTw68TSiouYZ",
  "key14": "4WVYndiuqgsMJ2z71PR5KvxTUCftKzARn269iyHoDPK95JBzRLpC9FPPYxvWHnb4dAqs3nqv6CJ9RKxnss2MePRb",
  "key15": "5eMhHJbrwboJXECdtZZpC7jvDLUGxmGSVkH517MsHtQUcVoVWXEH8dkHawYK4RhgAeqmMBtg6evXZzAYeVkALCRn",
  "key16": "3bLb5vRuaqwWV6HQ3M8ERQH7MjjrfZPV9dz158cX8Lo6FM72mbZqr6929Gd2BFXWce6uUFgkoVH2PesRSut8X8v4",
  "key17": "3ZeUNvTW9quDVpBM4zMfnG4eYrRjaUp3drr3B1wVc4s3AvSpgxtPPXxUQJYaWN9FJ26wopa7Ff84w1p8TpR5tdcW",
  "key18": "crRc287LHXuuykZXknggw2NqK2hnr9CjPuKd7ZZSkQJbjrBYoeFT773GFFGaph2A2BDxWphcSbVD2NgeFJPVWcR",
  "key19": "661cWhGk6jqqmtpTEzccLHLgfPMRkAHQhfdoXiFwKTyMrgqPNxRMvFLR2RPqxJLnw6RMzRnwXEeyehtpLr3knYFS",
  "key20": "3vFU3m3uFNGo1g8EHRfAyDTegcKaYJmRCzxhACNohX9PHibPBVsh1HYnkbBnTrWZTJg3XWCYpZVdKRMDbMcpbmcB",
  "key21": "5ajsuJ1obh6QFiz8DVqVeNo6XpS5TVDphMeyRvE4oGm2FVJLajjNmBktcNJhZNECffvAywho4JQbMABhRT3A5n1g",
  "key22": "3PT2iisLLMn1eCF6sopH74TMBDCN1P6iL2zXxXm8sNJmBqNCVnPavx3rvacg53ut8q6a8vCEhUiBhaCSWtz2LWA4",
  "key23": "MCnpQKqrZJpvbQkcaTRZqn7vFJ2R83LDZ22XQ9wG412ymPZJcd7sFBCX5J6Apn1nnck1smpRGCajHBhPsq3XxFr",
  "key24": "ukniwZJ5GKgwc7sohN52YvVAMSmJNFdojPtrb6WVjdpA3BznDmcDdu34BTWH2KBWNM7vpsAC9LDJ2Uwx4hERgoX",
  "key25": "4tzKVi2SmuTmxD5ojwotcki86kP987xD81rrd4Kt2oJP9zzi2zcNzCkxw1Bzs89jZ8zyc4Bc6Vw5S9d9zF6nj7pf",
  "key26": "NGvua8qVApFUagyGLkEdc75oKd6Wm9jrZt1vrJBdHeJxqwtJ8odBNdwwURsMRtdba69tYmYJRsT36367tThbi7J",
  "key27": "3FrMM8sAuQxQwaoBVXYoXBe9h4LbsB5UWJmwKvT83YF5yxsHJ3U7Ucd3wRDzkEZ4pocqYDz3CXsAXcyK3Y9t7KfM",
  "key28": "FvEg1ELQdVkCEx4q4kkLfZQCVbBV6ViKquCxYs96egyZtNX8F3RSrnhJQsQMKs4MKmCjx5VhGAYeTT8ynPosWWQ"
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
