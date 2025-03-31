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
    "46gK9iBTmN8uuYajJW269BxGPRwfqF5bBFTuxE4SS6PEHmbAHR5gzhRgJv7UWbMDV7KLGptQjqacv3DRNJrLwfSW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xgSahUc8NcwMQUH7AmxRfaf33fUHqgGhDe2Q1pitMWRwX3SxS64tTAmhUD5A7Zf18m3SbMvX1PSG2gKUFgAqCET",
  "key1": "2kPCcTDSGyxNA3gJCPmHRzGo7VypN7o9LMCrRh4MWx5dXdgVBNpSbWjLLzHXxvS9FztnvhaxHyNi4LnFCcsgrS7y",
  "key2": "jKFfGhd2kfCDobh7dq6mm6emTp2T4EeE93gkRtthHXptSrT6UBNqi9DjJQ3y26ioEhjxcjDNrkRp6Z8P1DBmeSV",
  "key3": "5v66jAJyMF8XenzdDmeJxAYKRJYgJU7ugHFRGRQFF86sNQinxj5skXFWpatbPGxVJNtiq2GrpRKHfeWJ62ZkNwfj",
  "key4": "5qGesurqD1jWNTqkfBmYppeWu55oAkVcPdD4nHd22yHurUFpvSJWcon3nViTXFrvQj9VPfqv6CDgDqApDoeky9QS",
  "key5": "21ZRniikB27auxLzXPuZPuxyfVHk1BMA8kSSYcmmvvHX4ftE3ogVhYkUbHGqWxtiKCNeqzjVYC4phZDKiowkM6hC",
  "key6": "3L3xY1Q4iVxmaRmaiJXCzoYKTiE71P7AMEXb6h1yT6PcBRcPWrUT13nDZ6CcgJJMnaQifTpKAF9xSR6agWuBWYCW",
  "key7": "375F6edExf17vVxdUmZDW7Mdt88F1wawtFYyS4CsJgtbxKo7JUbmtD2A7SkrcNCVishkm6McxV9XkmENt1z8KSep",
  "key8": "4NXZLekU7FfRfAo4DCh6sUp12J7Fk3CvkdKzVDJ98tTraqbc1HrRsfJfNrb8osR62syeawL8pafZnjvv34yQNcxb",
  "key9": "3bz42Wpdesi2HNsc6C9bASdcqhXg8VAeLrJEMe63zavpoE7TnHNpcTUF6Pv84ABryZ16xc7zewS3J3Y1P7cEt13p",
  "key10": "2GPyqNANSQygAEmk3e2dtvNF5RVFLpVUuKipQcggkFBMjUC22NqTVsktVjfWrZ6BkYjaBTFdoS8sQNCtBMuYbGUw",
  "key11": "MKadwmvZWg8W3ziaiapek3msZvvFLHHcJQRg4CGW17q7RWkNEmuzL8yFN1qbSe9D5diQibYeNuiAvmuXDQRJ64o",
  "key12": "fGHDcfc76qyNC7PaScYfavvRCAcmZgH3PjFWPdSXLi1zEPVAeUXsNpwmv5H8EVKxzXV3dQBUVVY3u5x2sc2JTFa",
  "key13": "2vTbTB2kdswz6HpCUiPpMv5aAwzLhQwGd3PTDo9vRThB1pHidvzZBGR9CUoZgC7EyYLCvi1XTBEEGB33NN4eMsB3",
  "key14": "4tRgDVxwENGapeiqXFKiKHYUnxjfzgQbtmQLErUy7LoshbNXS35HQqWcR5UEYu48wFffk7sQKQPxw3SnDddhm1aU",
  "key15": "65iynh2EUB7nikA9NUth24DZBMABXELzoNUs2x63Jh4YXZ9yfDa9VnP68qwWp2p34d71YUaa1daPWkKjrHBrabCN",
  "key16": "469My23cYymms3gtPtct9YVEaBxr8Dc1PBdML9tyEhgT2gWwnazhV98XQKZSxFaiGTAUpEsyNYq8hHRGoZbcYGqt",
  "key17": "4CKkMe87QuP3RgymATfP18fmCMC1vX1FQt1bmnWbQCQoHaZn4Mass16NsA5Tp1ZSovdUgKiXzkmr2CeEECZFGwXd",
  "key18": "3nX2CeRNuxXgtw8wn8RK7t6qo2uGQpbDjJDNYKcq9xhsjsskBzLTyrG1FzS7C9DgbQQX6c6q4hV2PkUQR65zuL1k",
  "key19": "4C4ddsnbgbk6K43T3upytYfdE5VhJQJYk2i3kkgAkF43CqqcJmAHNtp5vj77APMTKkDJFknFfVjChgYoRU8QLoJd",
  "key20": "2zNgGC6u74jCnVP4QVz9Gbjhvc1RLDSszjX1rgkhjcQLyHu2wTqSZ9S3wfY4iGH3vD4uoSQLCvkoKFWu96ZFW2WA",
  "key21": "2qU9rgAP9rNdiPUqcVwRcL4dPZyMz6tAzy9n8A2M8jnfv6PvnAWVd89SqPdMx74PB8TWE13Dj4LbdTZ2NsFFWCRR",
  "key22": "2EJj1Xovsfv9UKQ9hymtSBs8CSXebGVAijmb6qVSQYbd8iX2kKWhFxCtfo1RnsgysEZeDQHRbniZt7MLNNVXyiar",
  "key23": "3zTPqh9GbfxUMbsDLxKSkZkAFVS9P7sYhoTHhrARvFPZgYMboG5LiZDyFgK6sZtXvoWa3CP52M45YoWzyAqCJie8",
  "key24": "3nezitn9ZuLru18Xgx1Vd3Aq4zMHt8zGM1VP9tyPKwAU5vcw9kLjavipTjJVgJ2nf6n4nYk6rtTLTN6Ha2FJMgx2",
  "key25": "5qo8BmYzk8wwKnYXfzLnT7iFvv19wu6MmbfKLTqgpJZFAxF4nM5GE5rb2KukwVP7VuW4mcDMLk8fGCx8d86asHZg"
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
