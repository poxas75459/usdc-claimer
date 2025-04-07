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
    "tMWyKezJdasPntKvTr88WYkgv62eNuY9uJp4tqdMWPCnxEdrAsJS6W8oYvy55swLeb13zUiqwwQWKRYovuyYDG7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mNxqmRx9WJYSNjsHhjnvpBgfkQ35mSUJ87rmw7K65GgfWnbLcbJxb56mEG4xZva11M515fPjYqwDQ6P4vmcL8UG",
  "key1": "4sFa3gGq3z4egKu1Wq9FPmm5ysZUwDm5Hfcr4nW5pgpmn4qKXrnxqyhGw4HiYwUHdnAK8Z7TQb1bkcnCCngrf3W4",
  "key2": "4Tey1zxrTipurQ9UerwefuPpZyejajo6PZWuNUrKPyxGpiP3DVyF1RkNT5RxY61NifouxMpcjzt2mVQ5LVvgr5hw",
  "key3": "4n3WrjWTRw8pitY16kGcTtt1JDQFDStdQ7DPGFs6bAvsj6dRxGr4tSsvXLSkjP2ihMXxL13dA1vCYAChrdhAoKpX",
  "key4": "2hLtyHDyDPr6gTZGMVh5kPymRF9zXPnVfCdXwyvdq19jSP1XrhfuptxfSqM89DZBwyPUNDoskUtYadtpkMYGhFCM",
  "key5": "3M4VR4sf46scLzmQXVWmFKUYSM6MdsxS7Ua3FkzbztkeGuHWVhK6FoLMuHpJE6SWJ281rKSAP4AVLB5AxVASmq2Y",
  "key6": "3U9HDcds8whtjvZWErFaxmGGGjvpScaE4zAjCntk3JxvjQCPAFQGKNDXMguuqMP2ijao462aJReGWUjGjgdiwY8E",
  "key7": "4xgGLDBvUbx3LYhbBe2df7Bqi8YXsPfvdZftUNyD8J1pz4aVxTNDttjNmSukGWSKEeuTQZW1RrTr5GZkunqfyTUp",
  "key8": "M4o1phTZW4GsQkdfKZkPTuARKotxk8cA3JPA1RzDjUDghFDwtenGoCTqc21W4zineFHfsPTTigTvU3UTSr1N9q1",
  "key9": "62hMk6jEVeGrajMacsnKDkZgVJpFVqvVH5rTkEGZWUrAzw1qijahizMKrMwRr8bNtEdWPFtEXvL2bRaqwGfPVBwd",
  "key10": "2Ei9iSPUAzxEe1WK7EHkpGp8VzEEokycyK7jBdyhfBUhje7WVMRZ3orVUHzhH4SX5mXSCx7pVxoXxMyzrX7q6NMU",
  "key11": "2DT5uQY2w8f6DMG5FD7PNLXuFAxapd2JHbpkEe2RPdfdPeKHoMpyDcsgZ9o8x6ybXAJtBWvPQouw5oTH3Ao5tDLZ",
  "key12": "3wknHmRAFc7NDB42W88xzs6KWnf9sr3zuaaQZgLzowZjGCWFjc1pfQHaVi1R5KQ5PPnAkUcWcgRKQVjdQF5gK8Rb",
  "key13": "5EFHCx4P5WwTjNmBNHn75ANyiKsVrSL3ZmgfX2LcooosvmwkMQfwTc9kiQey6Tac8GPmgVHjaobwnoZwMf1oJM7r",
  "key14": "5dCS6xiJEkS2wrLAACnjkoZcyCiVF285AycgocfAvm6d2YqkbUmJJW6dmUmCYHzDkvzwTGLoAHPMUJEHg11XhhzB",
  "key15": "3EMLEbGrEXdfKcoG6D2z4LiY2YUH4uHWrVvFhVCr8Pgri8MbuQ9KSNTu72Zfc17ketuLhn7A4XZxTzFyKBJhMrFi",
  "key16": "2E6g3WvMifeuidEa1WKCnLcmHxiqPv7Dnjf1bcEAaX6MMjdRToD9yn7JBb4CkWDK4eFBbWzr6uGA2Wozw33yQKaZ",
  "key17": "Bu4BtGLrHCPQRGWkAqYfnAbDqEk6vQidopayvbPZ9X9pXDsADLjFTK7uJSjkWQ5Z8xLMV7u8tEDeFSiaJXAnqzB",
  "key18": "zVGX8DfbbcmFR43KMW18hJnwDgJqoiRsE34SkdyVrYVWVq7xaaKgP2bQaVW79vxC6fkz3b4Y2rti1jU5s2vkTbF",
  "key19": "2Z19LnNkcN6D1PoBxpH9EB9qibS4CodrZFQUVy6jQcjLxjECdCeQEpBUZDDszW8sXqz3Zefz3XjjYmVmYtdPS4SR",
  "key20": "79igLLFe8c8VckoyDPQuQ6Xeq6hvfqUpSmDXBdpQJPQ8yuBbqZXidFW68s8gpXYGtMc2rB7aoNB83gxhdd5mPiz",
  "key21": "2dGW3L6orDhG9TdxfmDiuS9kdghh4QyJ6jfTQQgzHCDdfjsz4hVAxGPvSSNjPDZze2CWhZ2ds4iCnFoeAcxUL9Ba",
  "key22": "2AnCJ12XbFHKJNZfpimKwBFPLM7sn9tqaJouusmqTzXt8rABRQsRvK4g4bXRoDRdd4FP7cvUYozvzHfdS6vUjgKy",
  "key23": "2B26ArMtJDfLMj665iQ8MRc65919zuGEX1W1M39n7Zg4qEpyGE4ksqKNfRYR6ZU8tXSKG7R5ftABB5EWzmSgR5Gg",
  "key24": "35Q4ZXL7qF3xvTdnC86H6FfuquELwyqpfY8AGc7Yjp45Why6U8og6BXTPQmLkNrBH7YTRRiS7bfcN1mGQAaSQRYB"
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
