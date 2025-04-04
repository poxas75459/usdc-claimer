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
    "3M1JuKFhpwjtzViD5sGtjEJ2DVHzhT3jM5FAgTxuVjN4yqCrd1zLoWFCg7mG1hbpPe8rLPpwFcpWg14FUHJz3qQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MM8auHCrgKzwvbwmk3zUAEfSUC2JqxhqLvgQWdLkjmP32QngMwJ7QEpEqPZBLii4WXwTRBb3KDgSnYQmGkbqGTD",
  "key1": "3HQQkqKkbrqXkVVsteAtySG5xG5wV8Feq2wuSUKyKMRwqKpP2MsqtiN5Chp3jp7mFp1FUZKTgi7BHvqfqVvW9FD8",
  "key2": "cw73zSvzPpgWq4WzDxiQuh7o9f1LEbfPLQrtHpjLBDRi8HNRPnTucCw5KSsK2XH7NnDJjUU7UDXgr7nFZVmgU8f",
  "key3": "3s3ev1j7it7ZqdYxqDk7DvfZxzqKYYybWVLeJuPMhrfkR3pymoP5dtcRNaXSeU5s2sXa8JWKWFr2oonTAPVS8t7E",
  "key4": "4eqACi2pRxCmGShpjGvkgHHaWuhWhJSyUN5s8MQzELjFZTYA7h1MUx87u5ARhw49KiXFGyfs76eCedMu67ZgbFoT",
  "key5": "4wSYFkBvHfGf1UZcgMMsQsw9cVidL5MT9XKph1qNGZjMuFeK2maYp3NTg2E9D41tMmGFnSXudPVae9aDcsQRQ6vZ",
  "key6": "3yNzhFbPQeWms96xaM8c4M1KhoVi1C7MLJoWdcDzFZFKoTSdXHPADwrFqVZ59saZa1a6em51EyiiaadRtt4hAojo",
  "key7": "3hG9zt96sAWH53fdQPePmjvNtrHz2fsd3VwV1rmRTAbCFxyfXa1wNzB8Vo8wbhPXnoUqK1CtxZt6KV8hpkmzUojg",
  "key8": "2SXjQwjifVbMqXUSJ9vLQtG7Ld7kVMkcQg1R2JryRajsNquYJuRJizBTgKgbrQ2ncB8anU3S7yva8EQca7DPAuGY",
  "key9": "b7C4jdKaumjZAYo3CBZn8EcLuV8YPJyYKs8oQyVd41ZeJJHcLEvbvLQqDBC5zEyib8jEzvXHchWmrBZYCbdxd4r",
  "key10": "3VssBgQfainS2qDYPucEaMzgfWtRbhbMwUQrHn6ws2HhqsFapLvuX42w4JiTvs4VQShfYAE3gZohxUKDvxziabTp",
  "key11": "4R1Qn5aASeCSFqdLoCYkBUKkggvkn97WfMPDLVumguKoJkJmoLAQWfvi3tti9YPB4U1UPioZc58SdLXxU9msiMms",
  "key12": "3411jDFKLv5ujPVefipRURUGJcGTt9qhuAiUKUPqrLyGh9THos4ZoJ4PRE73ZRoCo7uUJ4a2Et8mQHa4AqFU75FF",
  "key13": "5AJBhQq6waA6CDwD12Kdw3tRoW8cwtGW246LvFcgLmVBwDPvpQa387Ky5BoTuPM5HgA1u7PPtPALRmJJN46bo4vR",
  "key14": "2amSi82xKJLeRQKPFAsRSLGRpMkFBGhMkn8nbedjGSBed5smeRqQg7Ac8L2aYbPy319eL8dMvCEbrzSdDP7VvoeG",
  "key15": "MZTxLJXMdbEBA2FbCgLPuDoT84EEWqCoGUaTYnt3FP6wR6EmHNqjH1WwsSkYaEegksLU9BrHX6Lpd5spUHRmj3m",
  "key16": "4YciZMLaqAwuRV7pHTaJ2u2FuuV9QNgAP4WmrigbJ5CxERmoorj8EiWosxR7Q5LGEL9NsNyS5hK6p9Nz245xip1e",
  "key17": "54BozMjHKtrLZn2tdigcdP9wvRtVwYsQEQMcZzpRoiidEknw1KbvVQTBxWZE1hCUN6Ab8EL1xnQdrdDkBfoctVZc",
  "key18": "2FjGiMvER8wqhYX4WnMpYthJE7Rz61arxoZWThicxh9jYfJPrxxJS6Z53HWrMJK1TiUjrSyLPQAXHRiQ1ayKNiLz",
  "key19": "2dtm1rDkedrV2AaTsmxzmNLh3beLF5hYMUg89NDvUH78HmFFN5JAzRVYR4B7BgpQwnNXASkdfJSQrr4jAMqStEkL",
  "key20": "5JMVhN9LKaPkaZwG6xA4kWHRgMUG8mBGMe21yK6xPXrYWbo3uu588FcTX3aHFCx3mpXjjpE9xsUd1h16g16vWnbN",
  "key21": "4L4y75JjvmBb4PmXk5spsQces8bCTsrRxScP1C38UaJWZdY7hhbxtxS6Eahx1BR23pmgrMC4BntFHpFpiFNfYJoy",
  "key22": "4uF9wfAUsr1SPm8woC3eozDuJn1PawNV7Hxe8kxyqeeWLPjX1ErNr3YRNHeGw7WH6cxeuTQf7m3db6iZx4EjiaUD",
  "key23": "4vWYaZfLxQymZmwSNrpjwKG68ozyLA3mYhPrvwrSUdQPViTMUmuR7Jmb3QXDSLAf8kA5FdYKKhL3HAe6XS5KgKVF",
  "key24": "378ehhxRgcDNxDDWrynJjujFyM2385QtWXYWEqJbpFtwZoCHNxUnZ5pXHtXnM79z8cvyqVQ3CJEWc8uv2r8S5VWB",
  "key25": "2KBPPtQ9ABKrRX48cbCBTLru3nuZ5ZrkNhGdZC45YQdctWYFonnyoHFd28L6EWkjPoW6aeenATH3pARSnmeBbnSV",
  "key26": "51yomzs1n81edFbQKpkbmvkrX8A6E8ZhH4WoSVg56MTc6rMiFD3YneB9HuV27WVKoTSC4FshzD8z2jW9SGe5paGg",
  "key27": "4KNzhqNJCL5xpeJbUR7PeZ6FRS72RsQJbHDC1vzzCfwUeCYNXpUuuaoYpfDqXo7TEuPetazs4xCvks53ePFXwtbS",
  "key28": "vvXHZtnSSTcR9AHKmwr2qSntGadcdUuLQMfNeeZAwAihVaH16NkjX7Akj2ZjVQVijU9PnCbvWyu7ejKPEwZZpi6"
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
