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
    "5xBtxexgZMzKN3NudVtrRgHBvsjY5s1AL6Ggw7dz8PQi6Zt356J5DpGhYWDtJf8a2hwKaV5XiYioAmCf2JYDxXZT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42xsGmS5rnge9JLDZjFbVmEgbJwmZAAziMJG2qNMUYDVkCjMPL5AnXqVyT44fX2fV3VbPyxYu9BKfRGbB2mhqKK7",
  "key1": "2AoSopov8a9KQD4yG28i2A2LrBCfRqySgxZqhERPQK2L5pLX1osmRneeA6WacZ8HcctaVJL7B7vBttwfB9NiHE1W",
  "key2": "5tMdg43Ef7Bhc8PSEkZ2qeTzeQhqKhoiA7TXqTaA4sJcqv8iZGh2cyTuZDnogR8Q8Ptra6JvM1r7AAdEKg5CN8H5",
  "key3": "59K674KEMbtExgecKAAfgPqtQvEYhuNcCdQvEV1WU3HnVuPSq9yEWUdiPiWGXyXLPmwysQAE1RcJcz31kAhv4rFP",
  "key4": "3H7vbLAEkCQLae2WUoTYRAxNkWdzSGkt9BeYk1Dixb8K1MXT8NKRCRrypjVVa8kcTiAVoTTVK4eeUF4zWC2XGB9x",
  "key5": "4W1Eni5WGAb9EVfXBFtevahZhEDNwU6UWGxMqAZpejhMgn2yYRMRHTjFgzLV6ug3WKCfhoX7mjuqYSG9FeRnx28i",
  "key6": "47kAbJ1qrCUzXzA876T9Lm9ThaPvAVNTmkzwii8v6owH6En2RRPXcff8wvS799vSz6rsdFroSQp2zfEQhcyLLLZq",
  "key7": "5EBTDXDcuaaVvwFjHPuSNvy8XCXC6TjRHMEMVTcUssgwv8Rx6WCPhNA8i4k4xR9B3Q53ErwTMFr1PF3s9eQ8JTLB",
  "key8": "5SM9BhdHBQxckfuqJZ9faTPeqg7PKinMSoRSSBY6hJJyNksiXN8cP5eMwMzsHRNwEnnWboe11uMUZZquVWrKydz6",
  "key9": "5gSDYuwcNfZPi6o1Xe5EwFfssoiqKiGt6c8PUigh8fLsLRGFN5fpRCWJXhY9H3cc6v5CLeVkXoPkBDXG9gDY9Mvw",
  "key10": "61rP9JkyGfTEre4cteogMt3rFTSo46XHciZ7mien7dFjXXuWLaLkEKQDPRXn8fD2pArpqVmNS6F2SB1yXCCKQDRY",
  "key11": "7hG2AbUfUDiv2rGuqeahTk58DCmNwkveUBo5SSUsqJuiGmCLfPFzc6iKRKngXe76K8QCoqn8MyJRCAGisVLLLfB",
  "key12": "43pKFesffYRwLVYKQC5mCQuW3GrUkyjqscfaYpaQn7mPdMFCmZAg1doiG5Z2GDinkq7QN1b6LDmmJWVVW9s3FAUV",
  "key13": "2oFRrxjm8DnfQVXsZttdfsYJw4Cq6f4ggqvT6uWw8Rn1r5CHUBMR6RwKHfSyYLWjeoMRa2MRVkUxRMRc1gBQmCyC",
  "key14": "2BWcFLbX4xoFmrpnKBd95Y2VWPhX32QoziBvwKtrWZWP5JWWcS5XRPzJXmqJB5zTdUXEjbbZjgKVUAPyEYXhiQXZ",
  "key15": "SLYcAUu6MuDghXFo1tMcRUr61ojqkiqa9zashCW79sq31VPbsgXMH3QzbVHgoPgu8zrgYEZeczq1ML386MH5qfE",
  "key16": "4bveM9nHTYBDpnP5yQCeQ2Lx8u3Fz11wb1h7SopggV8hyJHMqVufciA6si9KiZkssXzZeEgS9kfLM4bi6Dscn9kC",
  "key17": "5HoRpspdD54NMvbb3TDdphWe6PcsyvaRnmcHYu6GNuPaVobyLp5ReeQPfectWSUfq4pkZ5E6zxpYRrJwnZSn89re",
  "key18": "61BXKe765trNg2MEs6cKrpKRKF98psqo63Z1NmcHpJ9TzbnLMx7JpdNsK6de3YYGVQohAT1VKJqPHg4fwsxwft1k",
  "key19": "3Js6WuVoyhSaLCVpd1tura3K3DqKfApq9ZbS75xdmRWWKXrzDR3XEngPEY621UFxKE5zzHnTb681tfYqNx3wAoPJ",
  "key20": "626BLtXH66Ykpd3Dfsq7NJbmF8Mkygbx9WfcGscmntM1RdqhjDK6HmiJUDm5yuQAmnzejoV2XuZRTNaigBwYC592",
  "key21": "5Jnu2xsdvZtCaB7qzqGGjx9vy54M8jVwpye2cu3X2soQzqh6M8D2hbiEdTGMREipHRQHZb176jyaPY2zwPhQyWe3",
  "key22": "XN5qkwPJfoUDMGbdv8eEdD4Qw3pHVxnirTjfQRqBt7vHNZwXhW19AGUsmFqu2ZPxNMNAAhnGh9Gsxs7f3bfx8pu",
  "key23": "4dFbgqJYKXrPKajpKy9rbEd9z8tMXqHAETexBwZrfCiHZeeTANjDSLKMGofiuxfnakNvqU5x71kSccGFyyD484fH",
  "key24": "2BuSwDv2AbJJEUs5D23hBRyzFzbpY3avsey17smTYrvuYRRNHFFdH13otuBsENQs57KeGBAfSnTPneo5xmfjyZnB",
  "key25": "3VV6sQQjcKurexDNTPSTkqsvPumytb686funy18ncEg2YReg7CS9uhcp2ECTbiU5hPPqkPcuCbjfAsFcTBTdZt4Y",
  "key26": "2iru1ZbPTfg8VtYnkoiLmQ8wcC82ckHN7etXvoNBmmkDNZ7mvxLBGFFAxGM7nothbgvaDLYypxLUuYjHR6j5JTrA",
  "key27": "4Ti2JJ8EAFh631PX55URjmuWXefddeuqV3by276RWaB5GouDa1DdGR7MY2Q6n2XnMby66dqH57yN8bA21MdyG9g6",
  "key28": "A8k8AxBtbA24JRUdobzHMgPbQnYvNSQEEX2npY3NX7B533mi5WDu6ABTEvM9pNhzdxkA9UAGUoCbNMYa6RSX9Ex",
  "key29": "4RkTy8V1dVRrF4pSmfXqGtVN34put6t8iTUV9gQS5QfaFZ1sExwuJnuv4mWtDizBxWktTTXhLwqpcb92eCLC6Fug",
  "key30": "32PJXbCPfmHQQwC4dpSmw8oJYVSXZ4gXVn82voHmRekAHw9FAcRon7d8i5pbdLyLhgDoTQzQ2r4oLchMFMds6WL8",
  "key31": "22NeQCHzSBytiWMMMCSGYhc9A16pU7x2zD1exGGZ7aRctk6GKumPLSTTZEZFNunXpZPf6Wmrq9YcXnTPH6LBjn2q",
  "key32": "4R3KiLXvKJ5KDzAqyoU2aGiSbWc1PAFNxiV8FAMf2sqK2C5uAG6MBGXFiNUY6vQc9qPpUsx6KaCsQ1G5BkzEbCxz",
  "key33": "2DSwWHi5y2w6ZNJ95449s4aNzFAGoKdhjoTFh7FKiDaRokkeAexG8q3zNGTpUXxMj1o1VpDpMuNZdxZnm5N6qWK4",
  "key34": "4kWRQGqKeAyCBAxu88FXzrFoN9FJSUAiPtVWm7XKE8Zpns3gaTwxvtRaLyT6ichnPoCGtcThEQUYBuEF6porseC8",
  "key35": "4nEnuLqRxcbjd3SdRSQzEd2QSKRvja69CXjzDyedAQexKRsHpgeF1tYMQMa8fM1d4QbfZyyep5D5AyDYFqb8z9xf",
  "key36": "btGojQKgs2QKoV55gFNxXtkjdwRfYQAwuLJukvtdc6T5yUnjQB9bnSM7gU6rQM3HHaJyeqp87cGLZAYW3jWGBmK",
  "key37": "4jNcipxSGYfH4GFvZwQ2KBsoN4jcujtStyKkmzv5pJ9UXXjuaifgfWLCX6DfvZVuBFBWE7MfMnqXZuuuK2865zqC",
  "key38": "3Vdzx52bBdBJg3c2tAQHYyfePwPE7N2UQ1DdChiQ3nQq4Qn7bDj4ov7wa5BSC6riFCxnsPUZ5wKV93WMkLfvkBAK",
  "key39": "mQZBuKD51epz5AJPRLMbp75dgD7mWDFx6ai9tD9cPFWb5RRSDb8gtkHFb8VmPcoCXXaqJqQRqYA5Yw8XvVwgmE2",
  "key40": "4V2K1KycYq3fMUQko3nyZVArpM5KVjNKzv8pCFXCaK5nxSAw61uQETqns63W8hWjCoADQEhqL8x7LS7pYaWUw72g",
  "key41": "NZ1yUYFAJPnNGBNe2sFn7rn5XAipFeepqSwg5BKEJhQRPxYo5xKBhApsA5fmuP3zFnZb5wikkPmeK16t6BCPVKZ",
  "key42": "25MhFdUo18MRKbAYcLEERujR2FTAi6LT6vZKMjR9puogMwqz6Z4ZeqVCAwJdjmbq1VGsX4BgkxCZTfV2jF2N1HVb",
  "key43": "5susDw34hYqLDevz2vad8XSbN9PyFsKYjbvpYEioEjCvG29KSeLqLez8CkGuADCg7G2D962huuG99n6sDMnJKW8r",
  "key44": "5uEyDNKDBAmpcwaZTj7VeX8bLRKkZcwvQ7ZbG85qWV383hSAFBYQcYjdJLdcgqoKmpLwbuz4Y1FxUBFK5rHj8eeM",
  "key45": "4hSVCLGEt4DTqVrk2eTsrtVjfkJ8iqFFWBGnc3xxrWxsFAvRbzijpBVchmkmxZKvtHBLA3gLBbbWDwqaS6GEqsio",
  "key46": "3jxdW6Vyj7jeEQ1sXdi5NX2hCXNsg3SFyGYimqwVRougGXU6niYa2w2wbpdfbHTHaZJAoYjqmRUUg2HCBtVSWBB5",
  "key47": "3zudwz8naX4Cwnha6MT1ZwHMUzUA8N7ko13cWgmSCeUXyt4GAHxQ3WCrZWer8nufTkCEejqwwMjbHDQijAMRRrLq"
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
