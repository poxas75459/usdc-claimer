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
    "5wCfwCJAWgh16tnSwU8UvstGddyXGFXWMTAbJVbB57SBMDaKvVNXTV9dX4q8FXDLQmCx2N6v7G2ZJTb6LSzfSRyD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dJ3sRNhyAW3ZAoiRnr2f29G5jUiduyNKFEQ1KFbnwU47G2whghmPjCGQqt6jF6wV8dzpeUJGmGa1gQYTonQRPSt",
  "key1": "28JobPB6Rdp3hcd6pvMadU2wp1HXVUXzXGNFChDs7Mtx5mskVhCPG6hu2j5B74fRfN34mANvs2Tq3RvZm1TP3KQ6",
  "key2": "3s5Cy9bygyh8bpM6sAxGXCEEvuKX1wHuxrzBkJLMUTzERd2Aqcr4pACYJSTmeSPcnkEFYvFFo6g71bjzsiBNV29N",
  "key3": "2fMAkKQBo8pQx7gDJNcVs7Lr47hnAVE3rjeXsboAUkMJhRRHarn6ZZ43DF3H76eyYaikznSRFf13Uu19yVLviFcv",
  "key4": "5tHX6N8GQPWfvWjzsVUq4Xv1zRvH3viCvXFf3w566P56k6rtmHrm4icknwTdFRGLeJN53m4HkShmnnacJw6VhKXo",
  "key5": "5BmoyZKRc6ESW5fmE9K59KSGRBKW2xRFWEQSdfge2irRPgLNaaKDNLGbNqWe9ngCNYr7averr2tHd2Qr7FsHmXJG",
  "key6": "4u8WHsAYS2RhrRPsdzetkWJomBJujHA6U9pc2vah8VBbTYJqfvnHRZ13AAZuESdEJJh7f9vvwNQ4ZfQ8zJmwEpbg",
  "key7": "YtPhK5XsmaHUcj526q483ropDGPFQdhHA9F8zsWN1qZ7Dp6uLPcvRgvQJN1jNCBYPxm7b7YTf9XyKCdmbk5MnPK",
  "key8": "2h2ssD3FWsmbWhvoUoL4ot8WmyNVezHXCnNKUEY7gM6KXKuzicNWVdX31LTg47fsZdh8cvwVvun53hVi1y8BKHn9",
  "key9": "4J7V2FWKCF7FgWCcJZ1GVmh4cxv1U9ySf5hTGm1ML8hjpkuP996mrRmqMNRqPgcEB5FHU8yXvNCZ75drwKJcSp55",
  "key10": "3zjvFuuij9PURfm3zfKWfacHmupS3UjdQxkscJgw6pHwdp9nhJyi7K6svfAACjXAHNQwBTm8DyS7YQx1WtwadJg3",
  "key11": "3H1LktdR6UjUWdPBxDkFu6EAWmMorSTs8KHyRfBkU11q5Tu4tDvRs9VUmnHnT1kqvhKnjoCWCJ5MpVXFdsxuiNbt",
  "key12": "2xxuc323DQWV2nUhiMwWFrKoX7q9rTVbCGVkrvc6kKsG4DmsNjm9F8mGbMuNYDffrkuV6szxgmzYMNdvS3JvTN3g",
  "key13": "5GmnyVkUNLu82FJ5FoHryrrvfYJDcDRaZNCd2zbp6rMNbhhEvwVbMnDkkb6fcWnrMJixLojyMctwh5jYcARedgAT",
  "key14": "wbgJuC7zfBCxZ3hPDHPR3BCS4u39NSQvAARV8LMQJKXf6wbd3JbDSrrcesMvoLKNG4PETy5BDmuUZDeYpfTNXcb",
  "key15": "5rp2ZtYYZQaULdVcujAGHH2oSYaFC9iKap95YF73ckPvvKiWyrwnMbxzDLDUVrwkRcRcRybZ9ZCknZ7qpn4UorRQ",
  "key16": "4grrxJ9PYsZBXrTcdFaDytSxhz31V7fMCo5LVC7DejMUtvD2rEyBTMxjmJnZ4kJXwDzTXKZEmorQA1bEw2Fx2rhd",
  "key17": "4UaUvJExbACzaPusumaetimVgTobqFGY4LmXHv27pZ4r3LEUABtLYQ4hoB34wZrsnaQBYo4Kp1946k32bNhsBzfP",
  "key18": "2sQixTcHTuM2fuo6dF4XuajcVgpdUhY3UDsF3yM6kc8xHkgfHXU38o1Vy6iB6eMDxvmqkiVW1nNonLSZRNRBWWDW",
  "key19": "5T42kCrHue1XAZmEMunNQubeY3tVDmuZCXgfiGMgXU727GDUsLt1YmDVFm2VP63s3yBAsLgEqfXopjKFmqNdqiET",
  "key20": "4Z3QuymqkfUZDrNAJxP5skvhXZ2ALvisxHcnGQ9CbSvWJaTpMWw5XF2AV2B2kTGcNF7yNidBp98UmrLyYEf9H1K8",
  "key21": "9mFettXnYeTQPXpPkdd9csRck6hPAhBNVCdYkszbhbYsBjaWAs4wgYm8czScuukMvhTNx9FVDuzNjEon7zUZkQt",
  "key22": "4kPVYhVW584T7kfvzvaJizqKhCDnwafnw45kHHNFiKHHHb1EafccTJdM6e4FQB3cYHWHBXnKhjmDB8wY4e1TR55i",
  "key23": "X7d4E4o61ndenNY8HKrqvV4tP1mwVDjn65Ygyg3BZzzFNBnicqv4HYvfFKKKJzAE5Ao7KzehQP7Cpfj8NdqrYD5",
  "key24": "34NfnqztGwvWRPj4UkeSUhZ6GfqrA3zrN2twUnL3hZNmC63huaBfhZ534PdRGN25s7vkU23Usgq7BFYeUawSbFzw",
  "key25": "Yi7xCE2yr5B7gPZvZ52uiMPw6DdNJfsdBFJDc6yfoLa1NF2x64L1X5jjCmeSMHDV8WWfMNNKunrdu7KQDVr13Wv",
  "key26": "2xhm9WYEikfwHFyV7QxpaP4Ct8P9FN6FD29fTUKpqkmCLfqQ7G4X2SKASRpayZTyo2BgqVBYZPvP93jAM3Viu2Ra",
  "key27": "wP53grZkuw59SzQBeyFYXMj9XJRHQtXyjVjFmEtpue7gxLezfUvfxss9h68zfWkpGAj8VbsZc3SmTqKMsUxsYxY",
  "key28": "3KAjUhb9f5nbQv217JpkMhLRfTVat7v3vsP6KJMjxkaTcrRB8rXEQLmkPz938hHUQXFvjwpgsEHiw94JDvH21B2z",
  "key29": "3cDJpQVJA2qALzqTrz7og2prNuuiyY88Ht17A3mKqtZHJcjXCKYmVuk96838CpJS13LFWJJtz7NoR3YF9vamCBxt",
  "key30": "JRNXhgJLYqjwWnv74gPXLcV2GfNbDrunoh6H2tmmh3nhHokanmXTRdTCZ69wr4E6Nn3yjgD8MTkXgmTHCVcSajD",
  "key31": "RhUz25nY42Fh5JmC7BWZsF7qnR4if8HXVUnCfSEtuESY2qiU7QFQsgWDZ2yrszM5FLyjUzLFWt81CqPpJ5rp4Lr",
  "key32": "2XrMApG5xtAG7naqLiDUwQdnBDw6Nis4oGJaX3364CMt7Pb9p4xWujFsudhrRmnZBFqTNmKMaosm7Vnc81jQwhAA",
  "key33": "4XqR5Z7Fv8HJ2du635Skc9wNTWsxytjEZmWstMEgTDQbm6vbUEAAPfemYFjLgzn8oR9oRfG7nsgSio7qqH8hxBvA",
  "key34": "42dLbUguMweN4HkALF1PTB61inv4k3AXSeqxpiLvnEKKBtTmWH8AEbqTjun1dTSi7oBuWqcVvTeQGnzsJN4NtcBF",
  "key35": "2wxJMsfedweF5ruk8r4549BkEgpRaWj3K6FP1dvA2KKhoaoKnjWo53wMBYdQvoDipsuAM1Woz2jaKYEkUsC4yX1J",
  "key36": "5kWZ4U4Wy3CGFMy6RsbxZ4QnbBfw1NG99FqDi3E3AD1UZqpdjnYN8nf4gXpJxzM4NwSEFuDdbtZKrVbQtuyPYynn",
  "key37": "NZ8G89sML7fN6CCTKBTzrZpXfF8VKGN9tY3miT7hsc1nwQdyqiR9bWfqVz17JGXnR8ogujKEWaeSGH5guPCGLb1",
  "key38": "4FEUTWwTtpkBvAR9rBuDZtDv6esKCgR89CffSkr9MHve9mcZEuhpU9rPj6En2yoU6tZXenoydCK1gNrHwrQH9Fjm",
  "key39": "WJXZ3VN6Xxdhg1zhKmFYj4dY4UNNW64RGjV3fAT3HVrDxPAnhgiKFi9EGeiAF3hedm7cA4Lr4UN1bE7vXKidLj4",
  "key40": "5ePzvBzh6tPjgFYCVunUiFUuTKQtRxmBJ5DNJY6sLiboiGwywXndC3zetriEgaB4Q9Wb21bVQtyefW13rWfNY48V"
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
