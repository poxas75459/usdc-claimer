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
    "YnaFwLdDkC4H98SCThH5RZFUQ7LP8ovAS9Nai6cfCgRS66riX3Luq2sL3YorZsmBbvHowzGeK9hiDgiW7t7JjRM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PZFgr31ML1aiv32qtwifaJhZD4JSmgnFoNF6cxpWf5PbJAnv6NLsPxqJP1ptV9Ri1oJWajpE5EH4oJe9wMjLBwM",
  "key1": "5e1xtEuaMq9JhNaHZjcLVxjazmj5GJ53j3sVamPQ1RgEDitg3sU1LLDpLKBqAwr2MZoUhEy6QNRxMcgf3WGVFRhE",
  "key2": "22DWr3AmTaW6PBtuETW2HonAZvgs6wpGLsXLZWrzr3m9yrEKAmEGdiTD66wgq73dR8qKMUmQH1y6hfooFeD65NKB",
  "key3": "53NhgtE4rkfPwS77Un2aeGr2AHkKpnUrh6WAEujsYLDtrb34Mz6aJbKgw45f5GdBDWs3WKsnuWF8LRdyZHnu28AG",
  "key4": "46XyQxUhHkCuvPS4tRhGB2a5Gv9kgjW68ZyziuB8p5auoTAh5oezHTcZFykbt5XYunh7eRVfURAr89UCk2DKWqpN",
  "key5": "44wRvj5khN5zL7Pjsah9eYeSPbXmcXRLhmoFNMeaCFY4ue3qHuNnfvAwmRurNMtFi3CdCvrsGxSBTAXui65PLHFX",
  "key6": "4wMeNeq3pdyBUEEgt9i1P25A4yJybLCotbD4DsLpqnjF9KDuUMY99j1MK5vtQfsKau9Fvh1ZHXMfY1oCrLjjk9nG",
  "key7": "27DnHu16Tnmri7eWkxrwXXvrWca1JjNqxPbVFaaYQBkHLyeu2ebZpkHA8opGmxdhmGntJieZgiuKMvBTdZnFCkvN",
  "key8": "3R1Atz4a2SJiYCwUyhpXNTbQx32QH9sfKYFpaZCKYwtpZqVMD1YEGp4RKe5iRibWY9wcn2zwtk7pqe9f1bRbUznZ",
  "key9": "VYRwz9BzRMVZqGtNgt4pxb1BptWEBUV8gwkh5nnUsLdguaJVRxhWi16ousc9wFQ3bUt53QmQ7NNmKLgYQsc6Tx2",
  "key10": "3JfpnKRjf7Ycdwwoj1uAFz7PArG2MMLLGbrypSgkxpJX9KtZ9HtrXhGCBjuY8bp8omq7CA74fTiRq4qLF6Q9vqtm",
  "key11": "ZHYwJ1fBRM9Drmh4a4rPVQaDCvaFcvSPsbS91aAymopbHnuTMspGn3tnZxKQPaerJ35t4XhqVisraJSpDLHKvrJ",
  "key12": "5kWhj8vatNkrrBy5a3KMwhaVmJDi9M5rmRguN3ohGnsomKBz6jPTzU4W7BVz27MA4XLbNMPX6TaMxaREEL2r7ywD",
  "key13": "4dTZVrAHDQHSs4bxzqdReXWiYLLJh4HefjRqL32pjLGd7HbbsuvPcMcZiYs1JfkwspwFQrtGG3pNNwVTqZbUPpSh",
  "key14": "4TAG5f5S7nEwu2ckxFzENzR19gwB5ra4JiabS8y52CMvWvUGxUU1kaXPrp9E7b28FCqsYqhiKKPAj1GCb8P6hfeh",
  "key15": "3M4rzPcFa9M5qvKYEEjaLfoBzK4MvRyPCSKDPFDVMCadjMGWMVgXAf3rC4RquNaUgJheu36ps7PjyqXhd6mPAgYN",
  "key16": "3urkyexzrYf2EAtTzUNZmBDduLc6vhTVdtsk59XTR4PnuBBfAfNb6JkATRfW8sXHh18YoFT7iSU7uQfJqAmAnJiZ",
  "key17": "5AyeVLj139XAdAETQwGCmexA4qAR1Z9MbAVyvVq97uffiq8ef8LCzovEKTtTWiosmbPJRDcSPjvZuGGY6PqfnFVN",
  "key18": "2rz7jugKG5thifjgqQmC5inbRxvmKA3WjyXcN2P1FRaj9GTKRc3MjKCqbfr83PNpaFPBE1ogWaXbjgevYr8d2h1T",
  "key19": "476nzfcsfCqiPmewKzHPEPydncSS4xJL6SPwfpPR2CcjMTJkxdYtjvWn8267NvqRBheTLaD8L2gQ14zVDEhHZLZ3",
  "key20": "63HSF7TK5h5Vh5BpQ1u3Dr4EMvvwDtPnEdS8u5XYByvBAkgS234W7RBftqUjVMamyxSKuixiA7C5yGuLNn9nLMs8",
  "key21": "5V85Q8zPB88ivSrx3B2HWWE14NZiEpZgodLhJUHFwE3BpoGDAa2Siesyn9L3sBfMQfjLsC18GJ7NRkHSkE5A5TtT",
  "key22": "kx2CTTMN6uKRoejZjqyTrhLXWvyvbgp38y5G4v7Q2aPZk9K86KktxRpfS8qkBgbWVvvxfXHFLjmY5hE3hrRuxJV",
  "key23": "3okrDau9rusBCU8jrXj7AA6yo3dqAebqnx9XeyFoPD5MmXzstxC4G7G8ovawz4QSjMEe2KtRKyzJLd5JTgYHSxNo",
  "key24": "2RnHMrAYspYTf75HYMEXN7vxbS4wwmR9UWgGk19P5ucm2pWu5G9rXUiHXKxGsTpM6APNAYuud1ZcLzd58PGeVaj4",
  "key25": "ntFAV43DLp18xhyGknd1R3CsLf4MyNBSztPtibKd4HWsPwp3q9oUn5QQEB2JeZ2H3nrYPkaqmsb5CVyvBhiQ9K6",
  "key26": "3gWn3rMRnzBFzTheUDHWGfbnYB3vSe7xukPmoeW82eKP4skFgs7b11Z6SgKgNDt7rYYj2PjNAJ5CkMbuyMpX1NAE",
  "key27": "2i41xaYDZt4BNYgu6wFQsc7HfSYsbUuN1d3Y5eJXWatgDKRQ1hdVtaFhVNCocXHnWXbR24zV2kLS9pGqFnyHbrG4"
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
