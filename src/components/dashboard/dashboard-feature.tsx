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
    "4yDbtCW1KKMkM1XiPhh78MjJi5Ncm9NVPywnD4sghW4EPT5rmQ4BxMYYtAma8rEUHHidA3mbAbkkrnDjQvX1XrU3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZoDSHRodKUjET5kqRYSnHD3GxZWWstdXV6Gy228hcRXjZdntgK5X1dCcqt57TpRZ6BETvR6JnGcboSNeYKcpXvC",
  "key1": "fgrTu6KaoWKqv72XjJJUwQ12DhExpYUcGsr4PZSD9CQsAMkTsZRVt8hNBQVGaBj91faEiEFukMXDqPGH91FXKdg",
  "key2": "5DKsrFZnnEZvD1pFGRBP1oV1G1wGfdpMj7ViF84D9qkZ19gwPa1rj4ayqSkCQpgynAoVeW4Dvy1K7KYEkUc9T2zV",
  "key3": "vWBHMMWHUuFQeXGmuvkiLhVEdd7zMLqFNGtNnRh8DgcpDNrEgxSTZNxa4TcLRYfsnr3mHinVnqfKuDQy7HkveUq",
  "key4": "3vcXu5L3DYzTYKdMDxEhTYUheNcjY5w2Y98KkYuNUnSmsfsnj6ogsizymMtjrJQusqnRrDiQL5w53L1wKaanhPVU",
  "key5": "guQqZtJgSrqfnWSpGLzGgPT3wsxDMAb1nahDxNmrmhZbq5zoDraMqxD9GRNAWDVU7XvxAfcFHq5eoAiQ6eK7kUr",
  "key6": "EgjLZtMBFMGiy54ZD7ikz2s2MXLRj1uew95s6JSoZgaU33LQmCgiidNtfCu9geJtLbtXf1PhL2ENTnD8Jg9gFPZ",
  "key7": "4ZFJ3anEMt7vpcjTp7YzCHVg3szEEfwp4h5qrwVuii3j2NuU6uUzsB25Q1AzmjKbQezBrsuC5xtgetAGK3BoM5R3",
  "key8": "5yonFaGkNf4TB3booTU7MfB9YiyYktPmSeejVxLUKFa89zVJa8CStcs4zJ1wEJDtbzCJ2Euae7aJLvSexqjWyjjm",
  "key9": "5yijg1DCiKQjHGsASqN4GpZpjQwBw8LpacMNpv7NYyHxYs6cebhbtyBFf4aoK9nUmPbwx5jqhJL2MJDGta2uEKwD",
  "key10": "5AtXuHKLW2TRbi1esCoUAo7Z9uCGB6fRS6sE7FfbHcGPzuA1QrWziR3Y2Eh3xsw5c2cE16FLLz43qw56sDAikAT9",
  "key11": "4Q5HexYwZPGzSVmpoaue9G8cSHzNWijt4k3big35a2H5hadEEVfJ1uYaA16kB1N1fVnpSEvA6VkfUY4AJbDK3hxw",
  "key12": "5TezpEBrPRSBYRWsFEph17Kz4DDoQUeBgeTWiqEkHHpEboQiNtD9wLEgz4Xzb3ZSdu4Np52kCmmEGCsw9GpaokAM",
  "key13": "XGzcBPouPKTZRPgaTUtVBGzqsPPJEhhYLRVF31XgE1J7CLqT8v3ECmLz9QBmnbH7UC5Ve9aDRdrtsKRnFgq4NMC",
  "key14": "xAZSt8Ym1vuuQ7wSDyTLNFhu35RQPtEqfoJRsH5XTsfXGFS4qaPS4nYCgFp8ux8NuLt8ZWvt2k7S778UkYqCWZn",
  "key15": "65MNjqSvdFs7ZezscsR5MeSd2HEe6Ruy2th21ET1KbiVKYz64g2cUyZ3ywFeUJWsoknvUq3Bgg8sNozDxBM5HbRF",
  "key16": "2qsgMpKWH9dJD6WsXmAkLae52bxTkDiWHU9JErGxceT7fLNJDSuPzYhDXKMLSpKk4uMv9Einf19LqkHb1NWTo8XP",
  "key17": "5yecHt2yP6vMt3trhU5XvG5rNo5Uiw1qxCnfeQCJtcrM2yZFdQ9gTXSYSxtu4EWkhNcngN5WMq3A9hrh1NZPqU9C",
  "key18": "nzmnucFsLCZiCZeDp6KYa6SeWTVtGxrGjWKRPkfMpL9JCupw8h17S2pmdcHsz37on5oHFJBAUGDpzeLDbsQrv5q",
  "key19": "5BBBqnTmKgay9YeSDbe9daRoY84maxZ8mikd5ewi1oL2ReUHZ8ZRf3rQsuAY86sbjiz7zUDEkJodUoyQbLLZ9Vzv",
  "key20": "4w68WedVZQVpmhpgvxQHVunrm3PAD44MuYzcUjJZtBik45mEQnTG7cgmzargzE9UKoy4ZJEPf2WuzEscwKvQuWsF",
  "key21": "4dVWVAQjTCeDXhNzbVKFvryjzm5seyN2kN1jJDiUSA34s6rfhCCT8TRZrwATHF4g3CbJKKLpo475zXZfFZvCh11M",
  "key22": "38w1b42M3QnUPViSAsNqhA6S2yWcLjuzzD6naJAP6adXcPqeLiyESBL2PvC8xuaB5QmwissHrCSN5DszhnKLZ5w9",
  "key23": "4497fZBEu8UYEhwoe44m7St1Tr1yLtpNhELWapMV8vD2Xa6skoGf2CiTFCZbYD3yusAxFaq3TEkuRRUYrEng8LLn",
  "key24": "Zi65vQ4r5NiesTt47j2pVuqc7eoBrU1v6opDecCprynyDceRSe2HnumxuTySQrmhjyprcJC63b3ipLQRoS6J3eS",
  "key25": "2vKY9eb24f63rBdBw9LUvisu2pHWeJAm941pgJxPotLjq8BXbRRMTgA772MR75kyVVsvfa3wPoQTKTXyhZqufPZ4",
  "key26": "5tSZozZwu7wFvpVVXREJXAuu1eLzG3Tr9K7pcaaFN7oAJcRkvydkfgT4zPmUw1fyngqnyPyXLGFNxRTAmiJvHLqV",
  "key27": "64ncPv15MREcMVabgzErHfoKFe6hArDaCWeXkKnjy2G2dnYs5K7quyZraMKwbQWnSta62oyRXcTdEfYCgiN2V5oN",
  "key28": "42HhrQXEDrCTkou5oBCE95EJPbLVbu47R19xXYQZPb4KybFtQu3eCe19igYd5rYWrPamZHU8kZHNjwpfKAKg8xmd",
  "key29": "3BiF5pXQreNyuTW8qhsHS2AioroUrrVfsCcTE9mCQL6XTLZjtwV7g1mwQzLRUe4eMUwXV36BFJB57S8zg8DtLKxP",
  "key30": "65pKEtor3QB1D62f1GRgMPfd2jcEGJBSY7yjFUFcnwfQ4QpCpcH7HRBBUH7qRpySL1jGU5P6xrm4XVFCknyNm9Tj",
  "key31": "2GgfR8St8i2KtNmU4ZwQSoNAtsjyFxtD3g9VBiB85TiFaZ6Y3Q8AeryoTdn4NXuLoAABUAnJuX9WsdivpB1cBRxT",
  "key32": "2wrzGvkP4UsKonehCfLrM8zALnXnzFx6QtBk3Y6iMZYT6LHgbN6UtP7GxnaFvDevtQYF9wfk5kfJCSqxbPacZKW4",
  "key33": "4cKHG1NVGn6ktXxhL1rGEmLn5ESxDLBWb4QC3yNwWJfUSBXSA3FFSWSvmrt82HALF4nmuqzPRu7wVGRVHJ1Zha3K",
  "key34": "zMox4KuPmTe1guVwmMnvh6A65psajZvkEC48iQvqwK317NQpuuzTZbNNLGbeLns4otdjJLhtGXR23tEQoQvzqXG",
  "key35": "TWY8TCQnqjViPkzF2nD7s7qWFNCVjCRgPHSj92PhSBHK7ujvkwYLdChR8JDMWkSwcMFjbnMkoskw7yTB2sCJWYd",
  "key36": "576uGcXZggmNToMzaxWzmGSQv1Xu9RB3KVAVV2nubxqB5mFUC7xbzUG52xP8fkN4BPhjjKoEwbGWaj4cRcGtTGrJ",
  "key37": "LWLQBEJFzbTjoR6XkAEibm42ygdLTDWpXu7y1RDSwkefYftx3fkuj4EQM83dWZpicGsmbndR66AnGrrZCKxs2Vb",
  "key38": "46KXzTMnPk3GGYG4s7m3rsVYxgedrthiWCdSpBrXqfqAq5tuoyzL9o9jH2ENsh8Pmhk2WP29jmgC2Gv79ooRbEbz",
  "key39": "4xZpRU4WKGVTZJvfgdaTousjBvWdadC7NSTedVodvZSrWCYhbPShTGW7NDVsHBtirRdd66UWmNKQeHFYyNj8AsJD",
  "key40": "5rkCmwGptf8hK5u4T66U6NQNBF9ZpZALSNkNKrfYSd9sbqNaNrqs3cGNiRwCFLtaXrUEdNgefipSvKtEbmpQjqev",
  "key41": "n6gGn3GW1CXA9Uh6aKfh7UDcTTrsuTosUtV6q9TF8W3Ze245Kihd3DBoqAvueqPFji4XCK6ikWz2wah5fpFAvTy",
  "key42": "gnfGqSyfNngCNe62fasjo4FggA2f82rviDQwq2F7h7CMy1X4wyXoxnSKAhfxYa1NQqyAu4nbtZaZirUeZpDcZJU",
  "key43": "5yB3YzFVGjDvuZ6EcH8hQvd6P7yZKPYi53p73XqHVtzVK3NPb6oJQjyvJwaYWJHucf1VV9xuksmFbGj5uubHkmar"
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
