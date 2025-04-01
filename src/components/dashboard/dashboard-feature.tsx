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
    "39UDzrRWpuz8fbXtjXHuKNFGmSD1Y54C3a4kW8uVLjYAQEYcXCSNHFm5GM2khZknzd6zkE4iEX1io44ZCcUqZob8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uqmQm8Mq2TbZaAxpF5TUABhzQdugaUK5nGX2vv7iQa5kArJFUV1Tf8fCYuN87kxihi8hVsAMqj66MLofKyZb3m",
  "key1": "27pZhGyR84C2VyC4fTAywqtKeosGj8ueFbMeGXAdodkDSdL9t4e52abdEyeYSwDG6t7Tcjt83fY8sgaue4okNyNP",
  "key2": "nrfC2zZosCcuu25S8DAnCxGL4FLzLe1BFHyGwDBeA11SnpVtiKAQAXMVLb6YzBdfjUbmoL1EBhSFPooDFvZiJUQ",
  "key3": "4maCNwBZzd7bs47FJZt1hyyvYGnNYjdVLsm3HRgg3Wt6AnCkfx9oRj1DeCeKeTrywg6i8u39897ay9qYyA1PK4Bc",
  "key4": "2BFfPXzHZbSh6TeGYqPytAqj9Az9vuDLs88b75mNWaRXcijz7pVWtUP3QENRpSsJ2REeXRsQVbUu4XEotL9rK1aY",
  "key5": "3giFPTvyXPRtbYA18HXZbA7Qagg58yvFyma6zqUzZxf6xQ799k8orwb73WiseR1R3fQVRDsBBojDJxf4guvzk48",
  "key6": "5MLhAFDGfYpT3MFBmFyRnjospwckWmaWZqCdaM975RJfxWUx8bP5rKSijCxKMnrZZ3PkngRpsSQthhuW7yHtWK6T",
  "key7": "y2kxJsjURMZuWzz2CFgYQDWs28fMbQfPojTZUpBeFCfmAuhL17fNBky8iMUprXW6tGkuc5MnKKNyamMuu6A6dFN",
  "key8": "42zFQhyJ47BCFQeENCBEHUCfbCpjF5Y11gPcoBHARCqacqjHMdbxy4XfVWqrbGa76ywztXFGWo7aaz2bYXM6poNr",
  "key9": "65L7R5cn7bjg6vcuMnSGVymwUCHniPY7C8kcespWCfxfzFp3pWJamxVkgwjmmW413zFMRk8p9HMnGhHxfabCyvwK",
  "key10": "4fFdAgxEywx6Mb25s5aGfxHEZuFCQJqTaMhKoFCqcVx17EvK7s8QNw7cni8ETXuM4oXaxGfuYCHhQBCQwVhg9DxM",
  "key11": "4YD3E5nQVVQzmfkrpFboFqQyFbAyf1wZWXkvdrt5rUyETLg5VZNYNAYqhnysfqcBLBn5LuJa5ATbeNEuLiq99kdq",
  "key12": "2HSVXqXajx6NpT2YLLVj6K8ABpmTHoGcMQrdCQfFVxMC7k1ahyrvHWMjzaSdPEoqt4SuYmPRujoswA4zDR75zhP9",
  "key13": "5jDy7g6EavuRaj6y988MFuPBSiBa9jC3eAsHUU4WbvkV6eTVoRSWwgchQ2uSbd9hTtwTHR9dUvpAr412eqjGeyNy",
  "key14": "VupLCw6HhXkM59yiNcTRCvQXtsWJ13DAFgxUrvShxBxPU1pFQChRSjRdaFcjTmUrN1f4k8re6JEaLbEgTLQ7XL4",
  "key15": "vvFHqkaqoKA1DzZijJRWo4LKCnUaeYB4DmdDsJ2ChZgzMgLodvsY9ovuyvpBdbuNTLsUzMvhH4s6verPqmd6kPi",
  "key16": "J6FzQC2cZPJ4n3ZLVmwRXwKUUHScdHCK7S8ijK1p54FaK3Tj5uM5XuajWhD7T87adLsVuCg5wNhLubsik5Fw3i7",
  "key17": "45RxdrzdfpV4sQ2zk2nRatRWM9uYFpkAJK6anJUchFjFJbPBG6889xewGJE8MdSJstXUHye253DnoFvqe9mXkhNY",
  "key18": "5hD5zSofjLVLobFbJtQvF95Zu33o2zn3geCx1Lv35g51u4Wiqcc2iizGQ85mL8sZRAAdsWJBisnYzjTXEPWzpW3z",
  "key19": "5KtnWX6y3K5vJ7LBniwZf9wMwXDDRgqEpvjqaoaEueqfKJ6Ehpqyj6kkkGE9QixYnSuZomxTMANVCBvF64NW8P9h",
  "key20": "2s5kZceR2nrr5QpRBMGCwtDARwm9qdywCiGnTXJ2nyZUTevLhUADLSQe3veccZ1UhqgwJecxiuyZ6A7Kvh5nsErE",
  "key21": "21LYdPfTJVgw2oGsAYPmsViYBkFtjG2apw86edhKt6vBAWntueyPYc3kqhJnEULD5AF5HFJZVA6JpeKW5kBq4RNh",
  "key22": "3DoDbhjuSGB4pw8EfSjeSH9cCfCZBac7FvBc2kciQVSaRABozJJPtutTFT1nwxqSmgtZuUgwTQVHcws9jLcNL8EP",
  "key23": "3WfZxm7WkkdFxr5k2BERjuDnmQ62uHXxWLL4RnLXJmhq6vXFiWPSK1XT2oJnRe8BZL4wjcaySp58yRvszXkJS194",
  "key24": "5AJq74wtYrfvgCsgYGpeiiDdFWM7bAPogeaLhRJqFLp63aWk1HWKzu14XqynkSRJ9aE1ApnPP22HLnxsHZTL6rhC",
  "key25": "2iB8HopCB8EX32om6Jnusu3wPfTCjXuWyEkFAuEm9N1WxUyhE5DUxZRvDzYYr9Cc2euteusHC1XVEcaHDYDhc62K",
  "key26": "vK1BRRfQQbWFNvtti6jJFp72q2WsxEX2KNe5HjVf1ngwKbVVf7mtNYyHcBHuBeZVrrbDfDjmrEhVzKBDKpTVFRA",
  "key27": "3t62KCtUyUbvKUsEB13ZsSKKdwfDhFsGvyYXH2XLuwbnHkgzNwb49k8aaTLNUkYW7SAQ361dTPvNW8kGh8NwT6N4",
  "key28": "5GduWX6LSt9KADo71EfEoctJn6QgHEnMAXuSc3JB1h38NAqvWyHK2LvNqxLWXALnuYVaJYn5FLaF82UXoULEk2TP",
  "key29": "49kpTUkMFLHfaXwL7ZRCT9bN2QZuq3TBXNhmj1s4Qg4fzb588btRwCuELS2gnLYaGorEBMWkJSsKbBtAemXcoemm",
  "key30": "2sP46VJcAHgmweCA7RSEEwTAVkWvAnTKzLZcPcEJojhwsbcLV5VsCaUirjeiTwNSm6x7133TBVLQonsiFsPmYbs7",
  "key31": "5RQD6Ur2Xvwo1ef9A1h61pbwPtVuXnP3MKzmmRg2tiGKwJbYkZGbhXaipR3Fw12woRskA4MuQNGtyBen2kGeqpt7",
  "key32": "5MAwn48dayfCDAR5UWxtQpepzZpWvVj86v6SRHzqV3b76MGMVPn1VCSuL3kWecRLpGj5o3W4iaEoEHhrxpTb7S7t",
  "key33": "5oW4X1zF8nyBVx6Pq9ukuamDRmmydDYzJcFffrMLE4b3rkGqSyVUc5R8t2CKCoyn3ahrrzT9wfRFBmgH1rtEjLoG",
  "key34": "3Zx8x8ag78JRo9TLSdpTBuQuFNw21o7HPT2wguY45iXXeiTvXorvzAq2sLHvN8gruk5uRhadXwsxyYhH7ABwoGrN"
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
