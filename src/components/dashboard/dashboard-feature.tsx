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
    "4w9BRsUf7Taw9LM7S7CAaDfFGcSHuq18Vzq8aF5j2GJTHbWurNPLZoxCNus2GNp4GZAhjQmSn6vkZ89bGWocw1jS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QwmVCjWX6cRHZfpRpNgw3J2W2V79jzuXUFMJ72MxmaTDGz9P4dt4aCVoMhpKNryPnJv2n6AVxSCVPRVbZJyEZMZ",
  "key1": "34aGd3Ad4DbSyexrhTQGAhkkRYuVQHxkjBcQLdrykpniNE8mo2JypK1N8AZ22zXNPMjBJBcfrupvpqpw1cgMWU4s",
  "key2": "28GVZztSc2Y9oS3XSNoXHzva5aFN1B9pMFJqGTNG9uBG6FTT9MJxqyVpG1cfRdKuo3aZuZ1zxXWdGh2nvDja8MPc",
  "key3": "4VhPmutVdJL9wvzVKesEiwQHN4pV5rU1CgjebzGHxKjqJKovNhhs8nxzupTy63mQpjdVvELia3VtCL34gxNyejD1",
  "key4": "3PuDGdP6EMo1k8E5wEHs6Yjzn3e2CUC2gx4FmNPkY769WhZAEiCETkJ8tpcaX8FDCaqtozNKe5JJrWCrUGWoWvUo",
  "key5": "3XAdeqQxXxMHgsdKY8jyu5YBiPhJc2F9DWqXQa3d1MkEdZqkPLhwokeaYSuVaQBwNUGVG6XF9CBM6j3MytFAif5v",
  "key6": "2TTSLpAzeNxC2K5qZAWx4oNoeBYwnm2VYdPLqVDfaoU1TGT3VrzFM8j3oLrUcKH4mwgbRr7gsxtQEAmMLfe59xR9",
  "key7": "Qa4dhVH5gKZZFYQMMoZ7o2EwcQUAXu3xtu74k8QAmLYXVSfVtAPpftPRnghG7fG9SSikTRZ2hnHR4Qb2eNGAzxv",
  "key8": "2hmPSSkn7w18pTuABDbDnoKsiuEvQVvtPNh8jp7bqPtDtVTFye2oZom9r2kF6YCytGgf5j3kyZWAfku1masaN5Nc",
  "key9": "34NBPRxjudyb4vZSbFYrjGp4xR9TJ46x8XMVVyWuoBHAEnq6wstgCG9CK4sJw7hSJrAXpaGfz9VnUX5wPhNYyeow",
  "key10": "FZ4h73Z9yc1qP6Q4p6zbmGZANdjgJFDhKeGcBfBw7sh2R3wonT1kzqGiPWpTzophYiamdVLHLAiWG4pjWKfcFag",
  "key11": "3Yimg2Parbf2ynrYH3xmB8p8zSZygAZEkYHCm8meavB37UL9pFM7JkQotDs6SkTbdMiYZrByJgWLvP7H6fHtRkNJ",
  "key12": "49wjDy2MLcRPotQGvLmpk3riqABueCLVmiuWp1KdGjVRBfoJXb6eFgxdd5UpeF9VEdbLSjgbziSoeSP8MpiAGLtL",
  "key13": "3QgucJdecNBrvfDVN7HnPDt6QE1HqHBvj9ZfFvKepB45BDhFjQhRv81gVJtKb6R9VFLLPygevpfMbc5xQnuMUqZ4",
  "key14": "CfzBCuWcKUjCVWZm8mctbNTuMt6c5iufuELEyvfVpGzV74ehZD9dEiybW8SQ3nmH8jpsQ9Vkgjvw9qMq2oBCrSL",
  "key15": "2px4pMGHpUYhEhdqnn7ECuX2KChkwdu8zzyEEYnBhXn1YLAmkQMXNtfhQghcTE9Bm5kG52cvdzUC3vb76YsuTHeZ",
  "key16": "4N8AdNzJsnRTwXy4k9Ln4dvY7rW3VR3xaAbtRvSDYy9ZSodmR99mvdh5HnBp8zCw53w5MenVAeuJR8k8K1RL8tCk",
  "key17": "5mVuFHzM3G3nyuTE6wTr3AvAftTiDf5RZ3GMLr4pQwVgGRdyM8fyrLEs1fczirfDBVXyMfsJkXULQEMPDa1ixmYo",
  "key18": "51eawqB2EQwXW45p9Khz3TYr5iEvmiMytKhwg8tkVwq9YGuV9p1FxpHeVUCaGLuoiDYgWo5AL8RW1qSB2jvq8vEG",
  "key19": "4CLujeLponkxHVF1HXYxngDCfb6a3Gue88ZTh6a4LLWQeBHJredFT1UCV6HSswrzk4uL53dFFYYwpaYzcbYdQsQH",
  "key20": "5wqtnAUPVcCDAAP95TA9N5HHQ3raTha4HXPJpiLzarPTZXQnq8ntHKS3zrXTxa8UUrWBw7BYPiJaK4sNJyhe57HE",
  "key21": "3FkMhaV8FDxJ4i2iyYChEKPiM5UdX96mSBMj9VYtvNqeG1RZVywib9HZLWRLEgazRw8S3KT1wHFPncK2MBz5hnjQ",
  "key22": "3EPeLb6JvE1emiZvsRpKA62Kp9XkWwCKAF6pBnGuBboT1pcRofSLa87Nv4qRrFHqPqEbSTYcy3Q85ndrnAmaAtD9",
  "key23": "2oKAjyEdx1XFuErs6WCBsxFri5M9hsRkaRsKp7KthJgkRBBseXLFg5Ex5XZPKuZErGgcxoKWzusdY1hexVGMtan1",
  "key24": "5n6LFMwZJxfZyZw7KTw3oi7BfSZNVtQwtF57z2fqk2sj37beCLpLYVMg1EPeoeVkSCr473wDdtnmw8mGiNAVDREM",
  "key25": "3CxZ3WdCioHtKCt4s53pHmunM2P1Nzyu59rxW44wC2nwWezUcj47YKzf8hSJpG7uaD4Gv4CyszrNNQ6Z9fdAbzXE",
  "key26": "2HzrCnE8dt1UviMagfxSJapQE5k3Cx3UQiEJMHc4aKQYYHvTRyCqyMBxkgiQZuX5K7jZfxkrZikz59vHe23kyYhi",
  "key27": "2jYfHmk5dQMBhWkwBq9n2bk7oqK9fXh9TYDjdMn8kEbRB13cdHNmudHGxi1F9pYX3gDUTKEnHPqWoVPCtJruPe5E",
  "key28": "5cPtf6WS477ooMbHZbP6M7pSDfaFZPJwQFV98dn3zhPvVz3gvZcJmVqZE21ZhyPhL6caR87pUa2iWA7nS5Dqzg76",
  "key29": "xhp2Apx7pvE273W8RQ5nYr1E54RBLYyiurKZqCWWtQkHtz2Xhy8UvezWnyqzUf1A8xtuituWeXWSVn59MZj3K8g",
  "key30": "4bqvkHHGg1uRNh3GBkY4CMUZWRBEC5CEdQ91f8bUhnzdCtwAVTpBZCFPCkKkMxcyWeHUft2BKbmrGMdgne4isT1n"
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
