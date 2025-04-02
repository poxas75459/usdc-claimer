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
    "4vU6nWeYgzrUFxS3pAf5MnK95jpxdeFLuF7rSYQnLzLuC5eqs5kvsUAtAaxGfHkk9YhLFNa5K4H7zUeDrdjZ9AJ2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VXgCtVVizappv9mHu9H5BAKT98DAhxjEErVndVFDXD1uFuvrX1VMyNDjHzXDkULa2kKNb7ZNk72YPBvaKBWTdCD",
  "key1": "1ZZg2AKUjgSWxYKf3iiZvu7ar3vRWYvebZeBMzAa4Zs9UDkTuKL71VTSKWrUJJDwyxmMfuWwmXE2ea3huiJ5p22",
  "key2": "4eRmVsrkm7EgYUiC2bPEbE9eo6izZUaUFBtaGeNd9JK5efXnYMdxFrTUsmcUmdU6rnV3svU49zVfSC4BWfNRvgZj",
  "key3": "5238oK4Y9vJ7PxaTbFXXscsb1pmpetpVcevaCRYiGjMw8bicGZuyLrR87x4askZsiX53vBAqwk3hwXTTBejXbUS4",
  "key4": "AXZsEpZV9NJvgpQkhm7MyaD2h9zxuBQoVx6L8oSjdxxj5ZGb2AJEuy2SPi1yHytzRVD3vooRn4UP1daF3oHDpHa",
  "key5": "34NQP1zxo8HQGHtmxcpNyzbLYUXh1V9E6zjehJUReKxyHAeJ3PQJcr8j8hCoBQnu2TGXWigd8foCoHT48oewCh8M",
  "key6": "4aUvGCTDkZaU2spX26AYR1DT9KhRhUMEBG8geZowv8eAnDgpjYEjR5qEZgXuRtrtjkibAspDSAujSGjibcZC5Q8s",
  "key7": "2T9RPAwUuFwpB3c8HfFhz5Q6PSM7wdBjPXM8hZAf8BsFjuyjZkx9HHv9cdibWxBn5Bsra2j7MqTErC8fN2gDLA6B",
  "key8": "5o6i4ZpT6L64P8Te1zQVzBEVRWizrxk4Y2eLQybXvh69JJaEL3eaWiKULWeeGsPNKFtWf8Mr4HdqapsKKwTSKXrU",
  "key9": "4uiWhDHk2YVi9jxNsUKDgUoZqt5xUfos3y5rKXvXZqhvUqH6e2hHgeLm1B3uRvE11c3ZKppmL9bvR3kNPKeTPdjn",
  "key10": "2SEEeSWgQjkh3D1VK1L37aRGv86vrA1xGAHKc5JgM3oiVED216bhQV1xJqUidZdjnRebMBsTbNoyHyySduda7M2z",
  "key11": "48HCYobhec32WbiVSWDi2imAkWM2TmERwU6q9P29MzUTDUZ4nSznuqNiwSi1wDDNBKy9x6wXf2af5u1XTj46AhkX",
  "key12": "5dmbNYrfcyqaxn2W2L3kn3nL2XQtXreP3f9fXcBNpKhLFVhgP3TaRiJfGBxJmvS6FzyzXRnk1tXaxChSeJ3oq7gu",
  "key13": "2ic4eVjs7fL9WaqXzZHBgQMqUkKZWjvT2ypw1PsM6t4bNnre7mxJiU7NPHbSm3urwsGCKwSYms3D9yVMstZfeQtq",
  "key14": "4FTMY4Bf4g6Ymw1jwEfmN4zmBAAvwNRj4jcEhaBEWqa9rANtx8aaRYAa1WBv1gixKeCY8GLiAuWj7XCtVJ9y7xVu",
  "key15": "5UwjnCBSthqghpyoiEhy7CMax7pmXTcNamnehLCmGpi4cnPo8rqSWdSSSpMsurf17iegEnYKmkq5eo7wep1FW5q9",
  "key16": "3Hn7Kk6sXRwoxuLcwYioGKEu9hkgUV4MVawUU57vBNdHVKk9A31rXpu7wNGKxusZzJdXeWnXECFcgmJXXJNNwSZn",
  "key17": "2WonY5GYzM2WBxTAbj6xrgTZJy4pdCKUhpcjwz9gfnbhgEmpGYbHRc9tTWJWuQBtXjuowLa2amraBJ8u9VGi1T1r",
  "key18": "5pGdXbXLbhwywGrsVzyzZ7NbowgtDiXmKHgbD4GC7eChh63xfPrqArFFaznwhKBJZSQ2asG2J8qg9tpSELZAVHNh",
  "key19": "srKqucTC8bGRf2Csa2xo8x1Uov7sKhLZCXfuRN4e7cMZQaDqCRa3mPzqTJUjjhYLct8uiEVAk4tJpp9LFAQ2a3b",
  "key20": "49YjfpKVs2Dj5qMFzCdmRTfgw24oDWXPMEWv5HJ5Hc4HZ1B3F9WJMC5iF8ktcVbWqYNgJufcfm7B1KGoC424g1p7",
  "key21": "4qc5tvPYRYo1rf4TsX6CvEStVFBqAAswGbLFK3R6mxSitwHdtgDUKKGHUhLXMbL4f5xSVFJ1B523MuRkXurtz4P6",
  "key22": "2sCZZR4gerXFCAKZkiTRevj5S7zJuaqcmtzuSg1MvjfeTpC14xQeDNv3XrXKXzZ1JnV16hEt1yUQzfkt2hXJ6ASf",
  "key23": "287uwt6L5cCsnnLDfeS2vsXU4ceRXbkaRDSKMnCrvXAZyLJNkYsyJLq8axRBrriVibsACi4JNaEaemtzSRtod2ke",
  "key24": "44a7dHNEfjE2BUQZe2uNaekG3u5L68ugADRfTZh4Zw5FG5cQwcYiXfTACto4FVRRvPi6TrGT4PFxHUUojAfkDhLP",
  "key25": "52bjTHvkTamRhtGVSfw4iP5JAczk4XZHxTh3Q1gNTH2yAcoYmTRsfSB8sSwLkoG7AdbvyfpAowMc1dWV9AhQXoMD",
  "key26": "2tSbzUyuwdvAzToHfxWhLYzs6Uy2m97PDSumLEu4C6jwTzJAvztWM7E1Ug1Ct4NWrCNPPELRDXj8Eu3QXG7Ernte",
  "key27": "5TuHndya1NDxeTdB8hTGuJBLqirLHPPRLPGPDUMYKAibsZYzTxTWzYjMCtcgrR4ji1SyvSTvdkALXGTo5Pe6pEF6",
  "key28": "2tWvjJ9DBoac2qHVsDXA4SskEqv5T22JQu6c4kKn2RtwPpAjHT6vgAqRk4Vo7Uc151KK3LJhXH8jPLcSywCfPNCn",
  "key29": "5NgRSEZAi1967GRbLyGxiGgRnAqUfArt3MrDSKfgr9Vwm3ctnR8maJQouLvRmszXphYJKWUMQiHi3tf8PTsQvCEx",
  "key30": "3uw7tYigxXPNNESvN2AKdyrL76drWNEAFPaikfgkrf979h1kuaRvEsmTwp3pthL5wtY7C2dp9PEYPT1r4eGFJk31",
  "key31": "3zfuxuTDuXNtUs1Hy2T4sq19b5F9MsSM2zXEC5oNG2VMVFVXHFHQaGHERxC6NtXQscyXKowkYdabuSn9fr6sgmdY",
  "key32": "2nhrjUon1dJX7p1w68N7Yti5LVUtKbkdQjexgXjDaxSVoLSehxp9T3kz1aqtgQfwEALPSxdz8E1DThJtjXXwuT8G",
  "key33": "2Jhy1TkpKi2qnqQQFyx4ZngeDt1JduRQ2ihMATcUSK5sJnrvWFHDFYvLqR5f1gNDnWZKUJe2K8oNXWwyDd1MB2cA",
  "key34": "oarWPVifYS4MA2mYLif5sWhVCnbNYQuMRFX4TCHKzGvchF5EgS5aC3sYYPpHFCn47maY8hmWxAvQevgRTu124Tw",
  "key35": "37oFdUYwDbvgEjtguPjt1i5tcMFuNcPBsgrg1yzCDtc5Aej1qEm27fLsFd4Nbqv8PyASLEm1KzpaHThHM9cs8gn6",
  "key36": "2EpQTc6J1nHgzid9AofVWLSx5W88gkJpMz2syvov4HT1DhFLd8wNH6Kh33e8C8xnj7ETM9FEKySaN97LTiHVrJyn",
  "key37": "iUx9i9gWuvB4TekU1wmULCy74TLHuY7EewCwpbUcVPKydUGNeF8bo7yMRAtTwQkDHLz2oPYyzN7EHbZewEej6HX",
  "key38": "5XC14ksrEaeT9dQXJQhxqzux38PxipopnAiyxXDdsH5pVmH5u65qSUPNMjhzMwLoTnH1gVctRgFbFgczCafRXGBJ",
  "key39": "3meuMBh8p1a3hNxbzVrvgKBkSnRN5av9PZnpJYneEhQUVUBgpZRi2dZwqCTCgBGmkLDG1uDPDc5djaiCfdFzsRjh",
  "key40": "52rB7KKomcbEoUpGKnW8t9GcDo84QcsqGxQ2reD9nMCDqsfkFBURu3XCahn5WHEZEEijFiXqXfzpSdgBU5R5VerL",
  "key41": "5fwfvtar5gqBj9c5Q3fAspyyaaio7jca1SouriFSeJYNRhueJHFNTVCKjpBMjyZegVMaedmRaKrLDUsbCCbeBR9C",
  "key42": "2Tt7WvShGFVMNykfaXAp8pb4MfmjYpmxeqyfaKR8KAAzR955XAA6NAKNjNGKheibMXbUBhdEB2LputypvB9DPRds",
  "key43": "84s3wkZ7cPNfw3fEz7PsB3BUSThL8ubgvXFbGqyzesok7QtkhEPktYJx8V5AabNjvZYqV9P6WUKEyNhQHG44iFE",
  "key44": "LQPczEV4PifLVDQAp1XDNAgXaSU7uSTaU2MmQuyRRX9tD9SihFkssafL5KbCeNT11uHLcR6T9dBMoEAdzGZtzqt",
  "key45": "2GbEFzFQThTVkJ799RygWDh55wYUxDA2kaJRUMjmPv3n1hvSJBnmeAsdvK4HVeCHyciAk84ooZQ8oCb2hgiaw3tF",
  "key46": "54xrA5Jk7HgmN5ozpoX5CmnuUt6eJP5RVeSCPAtG5VEUKzCt9q9tU2DSMZVmsigtTzGWGy9zjz3xaDLDSGzUZVZD",
  "key47": "3aCZVyPVwQvMng9LjMNzRzB92EuM96cZpq3P2PHvS6xMHE7PmNLFAEh1z3p4CXABLB1RRGidgr5ekK5GychR6Ni"
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
