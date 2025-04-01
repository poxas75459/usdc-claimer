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
    "5yaa3Tt9n6Rq1sRw8Jz362uRSW8h5rwEeCfASvTtiKb2kCFdV2kQbWsbSbgG6DMjoJsjHiejrDR4GoWtWyetm4vY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BEvqGj5sWQZUWF5NgJRrPyMFcTChu63YYhGzmTN1pvzN7Z1oWZEQxU3mZ8pUP5FR5rY1mBS2kajmJnXAjkVK3Hj",
  "key1": "3j19aPQphEFroUvCEPDh4UBH1LeSEDKtk572QPBSuNDVTUsCCi2TNo6owknr31GfJCjzqjhPf96gujn4WzeLk55J",
  "key2": "3TvfxaPxGzCVB7R4nRGde795nni2gkDpqLENWPq1AGPbDtGjX9HjEP3HSCUwNZraPi7qerTb1bETaaPyyCbDNCHp",
  "key3": "4A73y75a8uZ9QDmFHq3vCF1dPGGRbwmdnt3295axttWwFxG5YzNyksXJ5QZEBBY5jFLU8tdSiCuh3nodpG7wyhG4",
  "key4": "65nkzC1HmT7ojiaFAxfTnKgWSUs5MYjsgJEbnvAR7szDe1D5vRLoPg1eq4cwvLutnjmcVErLQchzhCk6aALjS3q6",
  "key5": "3pELscZfyirvSQVbybqPSFZmfFSvVz8P8GfNdQh53HdmPMS1HAZvAPRrEM8oLYa15Gtm7HwJ8GpupuSNTuwwDf6Q",
  "key6": "5hJuCyYXSp9mEGJ6hAR9m1FhwXHnKnLZwHGcsPXYb8DWzCPYvnFtJWiGCYKRVajiKuZ4AXUJjNv3enFP4PvdckuP",
  "key7": "4RvsvH9zPve2PpyAwUJfPPnVmVyDWew4XkHrKWnaKMcAUs2c8HXXgUCLHsNWkjLpcgkjKjqtmNveDdjvzDUyfam7",
  "key8": "jL1DC6CN9hYFQ7FtBQFkk2v5g83Pd9URioBtiAbCh6eeZVp76Tk16tWkyRzJYxQ7AyJAPuz5GhHGcdUiwNAcVsr",
  "key9": "5nD4xHAmXbeX251egkiy4mQnRKUMZTqAx8oBvW5U79epGzcYjn15nrVF6ciTnnm9PBp3xShGr5fAmyKr9KmmDuno",
  "key10": "mcx1mMj8XWGLP3Wh9vQynMkiyRivm8L3MTTQk2C3Dqxxh9hNUYsSEb5vXaD9nm1syMQvjeFHrU5VUCLas9vMg8n",
  "key11": "4FvuyH7fMW49VmBgtHjF3Zpa3Fo5WDutdWYaXrARFYFunKNpsg3DJNzELXRCm97pPRgZBf46Kha9ybd9hyR389S",
  "key12": "5zLYJMwV9NHmVu5Vydfz12xzWpFMdx6DnTKmdomawrrJ9a27FmLV1AP4891r3XQBtVxBEmFJ483KQsbxSNRJXK5X",
  "key13": "4QRYSsyH3DCRJ4LEobrsAtQHK5V5p4Vfvd79EPa7dU28xVC3HP7TceexLwnqtwP5szQ5EqkXg6jqjejT9WhWGXEP",
  "key14": "2kP1hKcFVLiYV1S4W4cjksKxSctqCYoUZgPZbA3VdnSrz7QpgjfC5fjo6khqunAT3tWxR3XFr9EBkkovaiP16s8f",
  "key15": "SW2qM89g1Ckxxqv5kpNezx6Yigw7iDAw2ypKTjdpFRybABuSjQrQ2V9pktUneF6Ac1QykcVbfBZxNGkEcheNyF3",
  "key16": "3r3gNLms43ZKNuzvqMLzN5LAGeha4PBhYbR5QjMAiWEHyzMhcuxrgA3XgfNb6RGREpTvo6Psowvr7MUMwsPsEekg",
  "key17": "xARg6DMvNQVY2Cv2ENz5Fzd9L4KGsWkv9SEpeibDPksM97HKLPDUwovRrZXmFAuv9kr4fJU9XnfjtWVYbUwbfgS",
  "key18": "4CXVZjwx1hjwWWdTgSkQkLwiD2D9tC7maqGypF1JJbcYR2YRQiTccuNqx4NmWsnfpXwCXsHSNRQZdxARDEK3JBg5",
  "key19": "2UaAboWHX2tRbb2q21DjSrGncCFCWp8BqAaYCPDSSpax7SXDafb37irGBoPzkBSDUA1ABHN4EUW3TzCV2zhvVYVC",
  "key20": "2ka7xAtwCTNG1jxx76nEnTnCkh8is4PCpjQ5PYBYVtDo8fDhRZ6YBs7xasR7Q4FwarqACH48nEBShHmViDoo3GV1",
  "key21": "2PHzBMBFuh5LjQkiTfzdUHPQT32QuTLA5CJXCk7aznTA4H1sKccMEtsQwYtTLYChQJjbuuDPdg33zNrz2ScwwJBF",
  "key22": "5uqikgnmc2uifzmmMfvB8ZsM5ByPNUW1eGn8nrtxdfQAPvDe3rHLJDqErtY1T8p1Mvk2UDXqpyggSDcXN3KdBD41",
  "key23": "5d9JzDETp4XL9f82HKe4pvyhW2Yb6qhaRjzWvWsj6M522hwnJzRjAEsPZUzPHMyVjEE6icpF4tAKGgvHAVJp24zj",
  "key24": "4Q4fGaRNfg2A5Z9wDw5PBkExUPr1exfgttoyQHdqMEQfvQ7pM3TRSv61xCSepfeLJEPLZBBq1d5asxC2Ngu33VzH",
  "key25": "45jDD8QzHcr1c6GNWDpHmVFdiJwYDC4Tv3tuLZEVQyJ6tug4C86CSvhdvRcUMcAtW2RryVrNNANSpiVtfdCtbYXQ",
  "key26": "ZBLgf6Wz3zfbAe8ebMZAAcJxSBfPKbgYxKGysRE94gdUP44WeiiWDuN1s5wENRCok3LEcW94PXUAUyV3eaEdJFS",
  "key27": "2De7qYktnHWDGVCLtH3pv9BnqW5pUyP6bt4bHAEFACiSkfk6NqwUi65g3iV8LgcBcp7BccaqMmGJfKnpZrTyaJyB",
  "key28": "5pPFvFSX1DCmAp1N7ZsEZRQ5eETM3JEyTErPGxBbshKqyydE1iuW4bfPbJrBPVPicsWWtimYVpNZZ3tfae9qETtZ",
  "key29": "2rTkXJ9Qo5DHMNvJLCe1tUqdKDL7M8yRa1AG1WzWHhe5DRvoz5ijz2FkUWumfqzc9YHZ2zs2dxJ9FruUoTZb6kpD",
  "key30": "3zbKNkdPKJXhVgJnJduzPZM5bkbPZqskuqEKs6tnFoeGa3QtupLFtAq5UX8GGTiycuTXzD5W5iMuBBaAUnwqK7mQ",
  "key31": "4FMiHMGTU7H3DPSYSeoWhb4oqVNUV6o5dNzbbofDcrrJ92DR6w6oDT2mhxxVhf6BN1Ze9AoZPmJ8NJ77JB4MWj9S",
  "key32": "4YXHgVPhh6NQwqXSYj9AYFA6pfkebKAZWVtYhk6Kvp24x9Ap78BY3G2GHcAeXiJiBbbPru3cYYk2REtwqt8Gk7bS",
  "key33": "2M3Z7e4A5znT5gcHwwG8zeqSSx3tq7WBCN7owi8Tz92RC3BS6rtuKdH78ey4ZUeeNr2VkBomLEy5xMuqHMns7Y7u",
  "key34": "4Yq1FqHxjkEihE7Mvi7H8jr6mNGDqW8vCyhXJ8ujuTssLGi8Pu3XSjQpUU88F82UMyCro446mvu8HePDsKN7WWA6",
  "key35": "daYxuCTpwDqpwNG8qLYTN7kfKLpkKjqUrBxj6QQ6ogs8UbcxUTPL1fQw3GV71KoCco4am9iNYsDPK7RHHfs4eCG",
  "key36": "4GXerPxHYs5vJa3rzFJcAkvkiA3yQcGnKoZd3QVsaicc1wZxkTFE46mXQ1LaU6cAMntiN45LF5sYGtmuJUNEzhoa",
  "key37": "4yT7JYMrnFc5xHgEfdyjGnwGcLYxSYVokuqxDKgSjz4zqLj6JBx358Z27LfnxScUaAjBQ7nEjExtaEPoK3ZtECu7",
  "key38": "3iBFxknZNDufEcCNMiN6mTVW4meauftNjpcs2c6iQRAyeJeKNHU6EvohuwTWgpc497dhdhxjLkAbqJhChH8KHQF6",
  "key39": "2vXjKDCofGmZuot49auJJi4dqwiKjMTnHshGpTDEbpFdz4FPnjBQ539CUXUDXwk8PhemtYfKbMhdCLwtHNMcBtpU",
  "key40": "T1ePjC62zA7WNxD3yvuiFTcXBVH7VSiwS5krxauRVCXYSU35kZENrxw2TMXho2TQU65jXxFrPVisnfXaHYa8JFf",
  "key41": "5uNNCADWm9ZHtbxRuLoFXdMUP9JytpDzmGtUpNpvJqqX61qjZhEHfWgCNDhL49nEbd7Lw5h6oiWcNSN7JoX8jVWD"
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
