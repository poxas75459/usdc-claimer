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
    "61LyFX8cWAihrWZRxVAEuBzbpfNJFoHYXPSVrXDW3nNfdaD91wkAWfA7wqK6UYW4NmZwKQTztc39y1v1ddGJV3TC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BV9KnSvTPAV4SQ3u58HiqvY1ZG5xYvCmqEx8zNpxHJo7386W5aRFusnWoUoVJr4UMHoNh6my3tX32uFRo1zcw2v",
  "key1": "5ZDpvjoRDY4wMdrqJq6Yo3QVq98VS2GEeZAvywFduXuL5KR5eYVHrnUuznSs8UtWYL2rBiPsmFfFZLFJwbvLcgos",
  "key2": "2azWUiSMVvotenKtPo4QadAyGU8xtyVBw1sXKL86umWn7aDnhqL9PajP5JYLUSpuQhQqRyC9wsXenevGUd3EmGmx",
  "key3": "4W6uPtYyiQPSSAooqCCcUEiNxsL1GX84MixfJny2E4DRXzYiC7haUYdTgkzUmo9VDZugXEXvNXBsg7p53sVqaVGC",
  "key4": "5Vm9BDKnCLccKE3yn57eTUgCB58a6hkLJrtAd6Ksr7SJPbZVq9aKnqBxCdguU12SECiadzkvNctcbNmUvU4yyML",
  "key5": "223YSnhFwBoKx7JrVoGEXx4Yz6wzAMu9CqiRxUZyN8wD9jdXZ6ukmYyT8EmBYZXzWq4M5BS1QP8GTKjkB4GuhK15",
  "key6": "3auuNeviWSVeHTunALCQ2TiRYMxVXnJziWu5xM4f5evvuESFcx9u7gciPRStF4pz8fd7uBKuw1xLK9hgdzNunDxn",
  "key7": "4Qk3N38529RayPQteEetweMJH4K3bB99pu9n9VQpTrF3QgF6nncmQQ3MHudAp8LknCeA4f42ER7en6QuoezdxWje",
  "key8": "CNzvE4yBJCHTfzmsp47pxqBhaWk6Uts92aFaVPVv8NZK1FbTK9VdQf6Z6qovaxDBB5MHVmr2XP6JMw9a7fhHDFB",
  "key9": "2vU1keAaCM7izZviVgLzRHLXmhMx2b44qVHBBzXBgSeqEKzSsSHp2kyP67pXar4P8xvg2H3uoQ6HXvnX5g8dnDtE",
  "key10": "57h2u6VVJFsauPKJS5jWoRAS5vS4wgNqomNSfWviimCLSG6SMCnKp2WpVyEUy1HMSfpNkfDrVxzbiRwGSoquq9sg",
  "key11": "27UsBhNURAGpQQLNc4bkZQSLRyWaCMoCczLpee8jNiGsJUdtYpsW1tQnjXB41aCKeQzLbzFu3GFtF5HP3QnUxmDh",
  "key12": "2vtX6NQmDYXnXm9ZTEGpk6SMWwn61zxZCRSNwfWmJTAGxuziRqCupjbG3BYUvVSUk3XciDEQojE8EjD8ifQGCurQ",
  "key13": "3Sybw4vS7ykQq3vrnKXNmiU3ZEK1cqDzWbxi2vW6mAoUfX95detj9wpf8m59upjh8qigCvrds9iWJsu8yvvwY8wf",
  "key14": "U9vGAbaLU4mCuoehFDRQY1J67Ari9gFAqHhQnvxKv7dPso32viVEdNGFm3JwWXhn2EZWA8uVQpNJBZxUDr3yYe9",
  "key15": "5Quw4SvX7iJtvkfMtdNFoJ9uN8ezDJfV9eQnWunK6L887zskyABTYq58EQ9FR2urqL3LZveDjwUw7mVW8zCynE3Y",
  "key16": "4eCerXMaujTEEED5TJrji9RuByJ2iqRHdUNb9HAk8XuB6HPEvAYg3q2DRbzHextkb3P7w1JJYTNvZLvrfh1TzNCN",
  "key17": "5fska3syP3RtWYmGPZSgppyZ2yxvMNBZqHDk5kFKnnY6CBts1Ro5RTqbeWMr75xxQkP7AhM3FPrNdKFmLh6Spe67",
  "key18": "4SZmJuyiRZ3AjkQJmr8UqdmJL8AeQjQDEYgUuF9kSrYBeTfdmcAavfDxw2D4PD46MU4hYM99xwiQLGttU6bY994G",
  "key19": "26iAXhb4gYUAnQ13s4x54Y7cLiGWjCbkFEvwi5pNgPPkGxY1TRNF7m7SxbDUGxh8f8g2zRcWAJrHzEmR73SnQoqy",
  "key20": "2sXpz7GwPyoChDwHZt5Rz4WPTH6wRtDsxW69Xx7Bkbmo6tcGiVSCbfY7oXYQVGbiH5r7ZJGV5xtqLAE86Rc9xUvN",
  "key21": "d11CffjgGNcQMocLXdYP8eMSHTR8eZdMZWyZVDYwLRj17rSMujyhuFX62H2uHSRVHGm1fYJExcTZQMN1m4uhxxi",
  "key22": "3VDEMiebECCQYf5EQVWGaNanz9x96ptaGFhpEruY9kFaq3KSJTcDL8xsHWhME5ubkyfurKRWv4yiByRQD2n3ZCVG",
  "key23": "5Etnq56owckXHn6vce6TMDs6HuujserG8ysBTutqsguV7e7gzVR6yvCcdwnBR9wE5297f3GbLYHNL68VoWGJmuv",
  "key24": "mv7Lp5hHWUbEvPEmWZ6QC7sLGdqwLPbSkpy7JEfPLCrhDVry9HC7kigAdPzFpnWDTd4Ux5T5gmG9DDNYcfiRS83",
  "key25": "NuPAEP5Ry2q3JGZAncYMdcBS4q11LxtU75L5cJo4kRDYpMTe4VGJpBQMreKcCEnntcevWTn45gVdwmbvPwCkEaE",
  "key26": "2YZr5Y7cWwBs9pZZ7ZyuKnKJmijcTuqi6Zdo4gEBG1fDf7RgWE3CFXEyAE4CQJ4WWBBfa8ubzB5gfMNAx281q6BF"
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
