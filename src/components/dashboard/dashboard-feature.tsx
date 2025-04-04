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
    "2FuWktamHu7PXZgzwApoHWASpeqcknW5pdh8FAYVFkMQjqBZHhisPQVbSMiuB9FoHfv8JJs7DE3WFzg4UEhdmmFo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2svHaXnhi32HqFrbwm3f9J5gxzQxD1WHu4uAtt3xG78j4d5evofbh55iVzNqvrX8JPAJvZzfkpEFCVvNmiPLzMe8",
  "key1": "5D3TQn5kMuPRvEZiKRWQ8SLsdxLJX3tG3ZXFWfNhVQY5LgT2yXictx46mq5jbTv1AF17D5uUDAjUUZUBgKAUAWY",
  "key2": "29xmkvHDSixZD1bJkQS4NVrvDtYPbjFnmnWTfrYDn4FAohxubUUdbe48AcG8g2Rc4ooM32pctr3aDHNbT7UjXawJ",
  "key3": "25tkUVH64DsNSzCRH2WN7vFiXqHxfrXyqYo2z5ZB8uuvExo16pgk611P8TgCaF5VvAPpixuz2KNH6PjTVvZH9QS2",
  "key4": "NT2b7NTjVVZJn5t1PvREHCkqKG2MeYpvZDHZajSKtWn9kayz3VKHuVesteUwBUcVEN2uYDjXPyPiNy566LGNdzK",
  "key5": "4uh8ogozEXq7nNY1XSDyghre1zuBvGvBYLJdrSZJaYhnrLWesGaTiuzHCAUKbuS5aTY7AHL2DYBGRjK4ZGLu28RV",
  "key6": "5xjzk7c1fzYiDn9v3LhaVNnxdkBRDco57UuxyKpVBGqwEVEAiy1e6retKWqMon6XLV9siEARas8LWcWBY8BUmU4X",
  "key7": "42jipZmHqAk3oNjz47J79syWWfH9coLqZEcX3qohVX4LCgX872qzD3dHn5qZVghwimsdRdjd2yWBYjzxUhMFVoD8",
  "key8": "47rFUVLWHqAFxytupqxztBpjYNeTjqutTDqXJh8FsC75nddBeT9e75yvwpU9Dh6J3vFp9Rkmz6qTHYjtxj6Qkuzh",
  "key9": "3CQjaAnaqtbCJXsyHSGpeLchEdH9QWuYYM1LNP4oBUy8VZ3cykDQcT49HS4bgMYZ2A7NJrAVPHFHWTLoaJhpnsnW",
  "key10": "2skS783SVVxbdhUeGZHG7nVeLU9W8qvxuYPCtNe6fA9uowJmMvej1Eu4pvEVVPveymKqeGcp3vCRHnAsp2pQycGJ",
  "key11": "2Gz4r9yL4MwsguSdaQVJbuRQkF9zFu1hCjoYg5dbYBLZNq7qTaRiZ7SRZu2YPgaYF1zAkDTLupBcwEmP9vg3pq3j",
  "key12": "48az5ymNYEugbc9ByxpiJ2ZfrLEbzhh18zHarN8wxoLh5qLgMHymhp8xSGq29Nw3X4Gp9cJsxe9jZ3gLd4wM3s9W",
  "key13": "3SheZA8469oz2j2Maxiv5z6Dp1kmRqHuicLELeLNpmV7z355QWPF3Qvs9oTaZFaejbAs7ZsfXfbZTDwBVzLunJRD",
  "key14": "2LopydQadsjZ8MkhkSqvFujMrKZ6DnWDP6PGfWPr8CmBxH2d6nXmQNWpx6mKt5jRWPfC39G7VgdWYbLwdfetospr",
  "key15": "2jvkLgrPy5QpD2ocfgbihkKmyH1JTDNpFoJo4eSx7XE1DsFhuwjmYuHrzv7Mjnvzrx64FibaETpjacC8NUdJ8ZzN",
  "key16": "wQM7b7qMBJH6zi2Am8n1PcJE89RLdW8dgoRdH4ciC6geMA8NrN7JZPypvd2mu7VVTWDRSxd1RLk2TSYKh1eaSjX",
  "key17": "59tqZPELDKujnzcFsrWNpD9grJELVCQCKJCBNBfeKSTGz3EwoCUUswsDSNRM65bjXQoxhC6qP3eKA5rwugZCDD8Q",
  "key18": "2d7U6UEV9mL2dwtkvWNxutRELni1BQtRWokgqMwAGEsrTYBPhhZ76gpJVitDV2rHnP6kd1D6SsJwJgAK3Tu1DjZ5",
  "key19": "4BevuK56DwwkGTPCJdi97Ckz2uFjhkNQe3Ww357Ga5i6dzWjvQceNiaf8bYXnkZgHUkCtudD9ZdbBRmm3ZgT83uH",
  "key20": "49Xqm87SaZYwzD3JxE1xQ9w7HLyRLNH4sa2W7zKHCjWKCKwqfMvjJp8TvwGCG59Ae98iBEjdgSx3qvCehEZcVDy",
  "key21": "2uKrpxwLfqNTnEcHgWBSTTGpPGHGmF8mij4NG95DSSopLYSzqvcqufuYH951sGee2pVnKDNzWpCMx1CPE5MDZL8J",
  "key22": "2QUKtieJoHoHQZFhtmEw1aXsSf6NrgC9qC19RxSNBj4e3gSWii87LTFFVWwQD1jbJeT7qKmZmnvePF9jYWr1FuNi",
  "key23": "34jZpxbEYvxMvpcfF7RzG2nwcd4znDLSP9Vhtsskk7312mhbcxzgoXVeMF2QSzkhTN8hy35kwCaGQZZsVmHYDs8f",
  "key24": "2xkT6rUXkXsqHcwc5vwKDn4PKHQs4tNM2Q2X519LFPMyXAvZY47gieWUs1znsTA2j4QeFrowS3PwmhKkhHBBnxDP",
  "key25": "5PM2MCBRCzEmcZ9LKEh9Un3MPSZajHnobuBYbpUoo9bosMSdGFYVuDTmWP1xTTWireRtDm3b9xERL7BtmKvYgXEj",
  "key26": "2avT5nurVP1w9ddC5nNc6hcML2Qu45kB8wQd2jKYF4cYEHoQ1LAcpLxs9dsdSnLHvkTWcQyKTgU8b2cet2gT8jF5",
  "key27": "5cUZzjXNmJwKmoc1ej3LJdXCbJd4vaBEij6q1WZKCWbh1wte8AZjaK2RmKeQEucFaK2QRGZrycekWmsVHWfSG7wK",
  "key28": "4LfR3jLLqLjezAnVGuahEQtpgVuzT3TUgncGodyiEu8yfQaD1J8GFt2e5yYuj2X2624wSRFXvLw8JkAisEZJLBb7",
  "key29": "ezrpEojM61KpowATjvKG5LQNxxqM1QJbW1M9UeQYvsXRzSaWVep8dMgd45zMKcAxgnJKMmT59edV8Ng1ZFe69vb",
  "key30": "2tQSrZzm6PfnqSVHAtmRLB4VemSzXa3sWP7tFRqStVwVxsiXL7uqsYvNaNFuACexE4VKjywvQVE5okZPcg28gxuB",
  "key31": "2kfYb25Fmtte7TNJ6TyFuyHiv6e6AZX5XzZBcmK74SAQKK8eFfJ3nPt3ALWDFNpWnyFEc2RqjT6bQtz2xnwAKjfh",
  "key32": "29gF4gZWSkF6t8ksThh72byjFNM2oumaC13DxmT8AqVidgjd9NQyYD83Ro3nwzMNHQAF5nTSFxc8Hd82xS6kWnW5",
  "key33": "wL7xTWrNFdy4pCYWXk7VC1eQnVrtuAFLcgM7eKMUH6NdFQWvdGQjpHXvzx9gbj67XwVJMVsojptm77fDhP3YMb1",
  "key34": "2c4tu5FBG8BohsAQh2pudn7yy2Zxaq4SqeriGrrC15d1hi1m8aiv6KZBZHAWh1YHxz1E8brFPdH14zGKBNjSEEPP",
  "key35": "3U2WM3kQHFowCWdkaSUxwxnqtZRFvo6o8srRnNBxfFd2xRDL7XQHU5QJaiRJDdLF9ZQixaFih7y4R2UMprVqTUtW",
  "key36": "uQQwpGx4mWFDq1itzd3vvKAbHEZMz3gDFdEUvhfcByD9ME1N56Rey9UkjD4EYLMeKUfcS2a2SwdxzUeWQGiECqz",
  "key37": "2oELtdoPPGfuF9qEm3RLSuj78JNgprb3NxUEzp4CRj9ts5GecpdCoyh3YwPxxz8enkHTtrFnyJHrrGgUTDpswU3M",
  "key38": "2FDRoGhbweyyML2mWyaJ1U8kuoodcw91dV4jcvnRhy3eecriLRfjEUJ4Ki5AX2VKHEeoKE9LThLAiZG4pfDcPPvD",
  "key39": "2vE48VYiCcgDK4FGUB6ccPyYG4GWyKBJWq2EKS8ioBxwBfxrqwiTSUunsd6x4KpUvUn2HCAEdbvitWpWVm4u4Ap2"
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
