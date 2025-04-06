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
    "55wg8PWjxEaeKxQwbaHCZoKNz315z3Sca8qW4pj734tKmBvHoC7R7UQkk8bWRYCQ3guZ1P2EbeGK1tzcGJpnqLU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "s4UUE8dTYmtxYHSdeq9rZeRQq3kR2dpGoir2GhmqzVGHUeupjkp9BuPche9phgHCizyxHxtN7CBpYG7BFXkqzBn",
  "key1": "3vX7WRPU218fPuxHDwfUsoTBiDLEJojXmucKfXLPGRYYfwSs1dHvTZTXVhpdUiaYFM3hnv2MNcCkUoLeAit3wwKA",
  "key2": "2vHh73aLPBiWD6Hxqu2XixNDxeFE6Z86VkmiFLjy7a5aZm4LjJPpL9MkNhTtfY5KEXyLcoXqEGMULdg9FYsmNP5W",
  "key3": "3ezNk8Lt2dxgjaTebobF8jvymBTWjxaPmGk8NSkZnfnb8iAdf7JB5ed7kuUXRDRw1ZzgCX3u1hbxBxmyQPnhPiiJ",
  "key4": "4v8jdvpWp1yDWRV9KJUvNpwJQd6bz4m8ErAhfjeqqfzzrYehBnkDCZEdnz1Pi5LGA5c6d4jJZu6cAS59u198TG14",
  "key5": "42HfLYc3Bh3oLMFWtFNWa9mKFZ2mHVA3gHXf25EJSyEFQLFimKnFBgVD9vcLYd4dVgu1x2PZaqHT4kno8512e7c2",
  "key6": "2zrNg2gZpf7qAx81VLoENtt2uGvmnGEqAg3qzMcC1xfmkMBdFGa7vUy57CxA6scAkyZkzD7ffDXnnoeWDvgCii5S",
  "key7": "2wsJAEzrWEtQSyyUsCuygSg3otNdXxhsLgyvmFiDqJXQQxNLSWjgGFWFdeuJnTzasoRGc9tAMwkakEWSrNjGTMLT",
  "key8": "5j7RKDbxbTxcyL4acaukkSAgRpzDVHJfuWDsmaAJ7AL2QM2P9Jtg2yPYNLunkKZ6bXynJADpQG4ZynJkfn8tzu5F",
  "key9": "3SRSCbzyrxgFrAwVYUZJ55VsZwGxiPAgXSQ8h7XrWaAKa5vEvnvS3wZ5sh5wBk1HVC2U978WACfDyqyy9KBwBa2p",
  "key10": "56Zjr4KgdQCRABi6zDtE3Tfixj8K7vBfW9joBz2VC1Zv5GyUSq2F51ujDdJUZNmQbpjWVxyimcHZ2b6fD3Jcmmb3",
  "key11": "1DTSjPkmwMv4T4ymviEHtfpf2dXXsGq7VoH5jbtHGHD9xEKnzfpGfvxDi6FNhEu1TvyViFtVH3wRoNsDZW1k541",
  "key12": "2hzKhbHLXp6V6mqgs7vncNi6eLM4BFYQfFctcUsVbdra6trTTqNUky2fXkWNgEy1Rda8DWC6zfhzf53aEX43wLuv",
  "key13": "5xC2d4rjer6hiv6JD1BKi7DeV7KfkTCuLyb8Dihcw68GckZwyPutdVo77BEDi7jiDXBs5sHFt5tZAdeq2Hg4m3hr",
  "key14": "jitEnrqqRWZniXtmMQ5xu689t6ayexcqmeDegBSsasHqLAqkxFcG7Hr9MTbR2r9wLg13eWvqBNBvuqVQRnHPyNj",
  "key15": "4nUPU1k6m8Nt1xUBBcmixaP2eEH1QZS3qPgf6i2eWWMixnK3qgVGSSmVeBUn2jL86hz3RjiQiKnK13mmkmXzfcZo",
  "key16": "2kQAvj3XBAuh8KLsKR8F7G3HWfZUCnsNZWFvm5J4tZGA4i2oWuGyxxfnPqTzEW3c4Lx6GhCg52iFtDoyHBM3MaPr",
  "key17": "3kYeCjtrVqqDfQusbXGzXysFkJDdizTgH78krpH9Y4az5rFFYA8aSQCFzzXKPCgTTbchADhGEdqZRT9vtXihsF8u",
  "key18": "42Sc3DGm6J4VT3d76bi1FzgRLrsC3YzdYUjkTrPETx8W5QKeCfb1vWa7nGMbTQrDHQ2YktL4CYB2pDW1g2aSQjvw",
  "key19": "3pfrq42HfJAsEyaH9NG4zBy6cR9y7RGsLsTssU3s354tHYq5QgdxviucSpeK5DhUq9W6SN4q6YiQVrKGWLRVvfmN",
  "key20": "46TS2b49QV8FrrW3ZTCTqKDFYiKji4HEj1BiPUZrd4ExBSRnotWnBKoZzm2WqwBXPvsGXZPpxmcfdaDm5kLt9tY4",
  "key21": "4XFFpxBspvad9JXKiTJTb6rGdQfNHP2nEZowpG75fairwUDZ64NVcy5ox6WNvGZddCMxW3f95YmbUayyacPwoq4Q",
  "key22": "AoQdhRAXHqCDPHsgUkdovitjzbaUmsqDFz6gMKFNS4A9Vtr6nrCeAmS3WrLRj73ExneJH1rk16nxvqTb7Md3UtQ",
  "key23": "zCZ3ocSkskEkFyejiHciknKX1963YNCXsDbrzdKQPE9cAzSCLysTnsCnf3d3fYZepYojum2dZWghQH9vhLXV4he",
  "key24": "Qjqy9LLPeWLhG4kGh9Z6o4Hm9aD5t1vr9UHD5UPUdKeQaDP3V4NsYXVFLEgnWn9vNYfTjP6gzbwBctkb2215muu",
  "key25": "4XKeVAeVhXJuoiZNvuUwMSJjWqAPjaV6EJ9A8CKHejSeLyxKkQgLCfAGxsM3dMHaJFQqr5756jC4eJbgrgabEGoy",
  "key26": "32XGdbE2CUpwtdy8cnhd6UboVsnsfNK6EWkU4VXCQ8uVsTSxML8aJ8FZiwiKPK3Nt5k744xuhSf92qs5aRcTRLbS",
  "key27": "4Nz28S9CojELnf3G5xG37tr19u8fk2JZAgJHnZi3tNicSzuFthRBJMxLgykTJmU8PQqtR99FvbSgse9Bsk85NSNb",
  "key28": "2MNeR7HYm4WJvikWPbwCBYMz8UZqjfQxNqXv2sy5sSay84okR5oKqdN3CTzdihtepXCbaweB7nQaguxCgrMhhMLr",
  "key29": "4PKmgJUzMujtraFngnoHgSJUm25iQpgY5Xehk7KdCqRPr8NEFT25cAN47RDsvgVqpxuroxhbFePNYSL5cL4Twkz5",
  "key30": "vJUxK3nZDZ1nMqof5BAJKcUwa1rbLDeq5TYCtQCusFsUEDnQPkYShV5gqHS3JHJomU88LxVfGYhjHN8zGRpF7hm",
  "key31": "2tEdNi2sjYxbJ8Ts3CMh5CTihDg5sceU8csUW3HKPoGwBhkk7EMzQwMU3QGaBRVxJEZhDSrnB1sE1CWSc3vJHSz8",
  "key32": "5Qm4xwnxpoHcWDJQMizgDiLoyF5VJGxDU7esd5Y5EJ9Hh2TcZoUBi7tsTfYTnUm4zbBdT39YZjvFsECAzbxqyDCx",
  "key33": "3FqWvD2jgWj3yHNbCo8LRtKzrLs1zcKAJotVSP7UXf6WTgdYpV7nWyyMbf3dXaD8dU17DV6wHvKqS1n9en6jMvm3"
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
