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
    "5iMCXYGutfxiT58ugFUhH1fEnswTLzbfuVQAL2Pk1LrYsyoRkBZ8aKswntdTJvH1hVFCMMWSsSDUmPgQYDYWsmNa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FdnhDCuxmAmkPdrSSqyfwen5NqVvz1thGgeBRr4rniTedfCqS5TWnEyegknwjp5bitr3zs6bxemhmVrnfwYhZM9",
  "key1": "3DkVUEHiU7bByLbqhYPKJ7wqSUDwoB1raC8YRUHxAXS5cnjQvGWDU6jaymfe1RYhwrWmPc4Sb117yST7RZyUC3Ra",
  "key2": "39gyPSQmJDwrB3UmVNBtXzMMJxMxGhsF9zcykYBEdBARjvnEMx55a3gahimZFYGkGzUVW8hzDgu9XAoLa76SwJJK",
  "key3": "39RPSHpTkqiKgwT4MM43nT8pcdJSZH6V5SMYc9xikzVbUKHX6BHtBJoB4TupfwXFMBSGwe1iqqXsYwXFxp3QxMCS",
  "key4": "2sN9siQk3oVtF9EaJJ4743oSxL7drhXrYpaopTBz6qXBxWdK9pBZDHAXxJ5MjxsMZK3oNBnQ9XnwSBwrjUgJ5LR2",
  "key5": "3JU5SjdePrBF88jjKhN1mSHRSJZpWBy36eRFkqW855A6wimKGe8ShZTXESS6QagTRxunSfMtmUtDwhJoWyNeEGEk",
  "key6": "4GqKEjjpyGTSn8FtfFGpGfWodrsyu41Cdp3Ykpm3TDHcHwXyEj9ndziMhzvC2AT512VwZU2KyXhcWVUSTcW9n1te",
  "key7": "2WiFtrH9HFxhrk3rbYJo7oWmZNVLPaJZNxndkqAoyBBAqUXhA3qRR74e6yaS7hRyS2RbEpy28zEAzSvfM75zVpxs",
  "key8": "VN74JbznXqaU2S9e6jAS6MA4APmmEZxejrFZPM8cHNaFEdcn5pxQPPpG2V5JpmEXztR4JQpYQ2V7XxXMeT9NzWW",
  "key9": "xXBidZwCdXENxNDYLBFAXnEaAQDtuybFt5JP2jUpXAoVehnaNFrdKKri5e42YWN2ozZuECpEtsNPfDvEevf8aPU",
  "key10": "CiyuJZDVHhY1M4B5a8v62yXut6wz6TNejb4j59fR3hwppxvjTdFQ381CwdMsHEZxqp7TRiFoJrnT8YNwP4oPUcK",
  "key11": "3CtbitS4YP2n6SxyFEfsANsnuEqkSz22JWSK4vFi9Urm8cJEPNCfB18C3yPxqo5zNbWFaaK7Lj3RB1UX4yQ6qm7N",
  "key12": "3wuBzhWMJYYTfjxXtggeqtreXihrZucGEmAa1kyA9fAd6ib2JCGkFyWrWsDTFPJktif2QSNFNNqAySpuw3rWpLCA",
  "key13": "3Bx1LryawHLsodr5d8TSfnshVZbjz8TcCZwHLvMtm6SnD94zwtowC27PvEKqh7uMmXiXRP2WpgLzaoNMFDs1aeZy",
  "key14": "3R5Fo8qBj4McivFqduiVgckk2fg1SBrbFXFxSmJ4qPE8E6TK3BsFva4efEmpFxQsmKBEqSCkr5772JJXTewXJzJA",
  "key15": "5zHRkXucxy43aYLQygKndq2A5U4u3uUTFcv6DppxipruC8JToUjdjyc33VRKkAakA1C9czKH2RuGh68XqjH3NuxH",
  "key16": "59zvT5WjQQyfFdACSZYqvKRqmWrN5BSfjSgdnxsJRK4ydYuX7aP9G2dx8mDH4zKUXoxrqszJ2ac5NMiAYGvAf3jg",
  "key17": "5YndjiBjus3NsFaufh9kdNoqhQLUrt3TtD3NmK6vN13N5MqjGByhTe8FDx6oDttDvYxHERVCd41rjAnBfMoK2vUE",
  "key18": "5sdNDJj89A88LiJgMRBanuK9ZWsxbTQs9YCy6sMGufFnkSVHBFTsazcBh9FcZNBzaACV5D9K9hgGL97DYm4T4LbQ",
  "key19": "2xkN3XveXamz6R5J561i8ob13JE8c7711f9akSBHPjfmkrUCvYeQGnWV1ofskxeLuRMZN7YfQT91jXPyDLXqth66",
  "key20": "4eeMCqdqXdtEXPFBRo8wGJ85o5GNR3pUZY7UpMcnHKdyCynQTobrDVEbF6pDTNN7QSm3tLGAnhz6n7nE2WxMPrzK",
  "key21": "3r5eGJrWdSYNsnJgBeYap7FnXvxWm1wzFbKZegy2YDX4pnq9kWPD1hWvQr2HYVzrFidm7Qojq8pKBMoQQNpkv7Vb",
  "key22": "4qFSVCdd7D18JQbSyd9Dj9EgKzbFzg82ybNVsyxsKAaVnRG5oB661iyCdoDKDjpqJcQAG7UYNb9QuAaiDrWS4LXy",
  "key23": "5SHnNpxqFdi1yoKdXdqkNBCJXYA2b8KJLR7F4Bxfv8Sbdh65PMq77cC5y2yT36GYSwLFXtqVnmxVzCGbnxAxTHhD",
  "key24": "MVr3uxAB4mZwLvmPWmYyFRpdx8fpgzqA6Rx8QJi9LWd8CuYWWCz7KRysDccJXxybfAEn6u9HYCBsa9gXwYYfJB5",
  "key25": "aesFjpFCRA1HCaHscZy76VVtJXA3hRqri6NPZ7z5onCJk3f5TkP4UwXvar4mgFwNLoscyiTahkAxotDHDWhwR7H",
  "key26": "PfCqmgq2NyU2JaH6rUc6eKq4p4KuuKvvnxhmPsi9egsRLZtH8ce9gezTdyEhWB5po2ushYth78T8AXthRB1P54o",
  "key27": "4WkHdaZpW6h499LomYv48wYZzW2X6fbG57oQwD55jpQAQhHwmuM4idTg8sKhtkUf4Nn49zU1sykQWSH342om9sud",
  "key28": "MKDNfqvoZ5FeXCVuHGwEzEvXmaQo22XcwsQwypiQoGrLkanYBYLkDer8otxBreQKbds6tYJXAaXQDhTVqryxxxu",
  "key29": "55oS5PqasMap8kpgLcZ4zixrUA5H59m4QD9hRAAeHtr2s4EqLxBggv5Puiu8rggdXRWQXA6hPBaJTa58hvLY4PvW",
  "key30": "4rnaoMD3NML37JvwumotLEqnL4v7EYBokybZx4XHGCGd5wLpbXwQZSjjiRkxkUzqZf29xAhZnmv2qP7qiEEwXcHg",
  "key31": "3KyaK6MADajvTccpmndrPHB1xRmV1SXv73WwTApwK9kS2NybPgBuDGKTLgq8TSsD1WU83ey3NhN6vupb1m3j1CD7",
  "key32": "eU1YKag58qmk8mcEyvdxo3KNELduFTd6C6zjgA2onqzzdpZeZVCgCd1gHAjho2iYdiWPP8KMUTwHbR7RB21aPLj",
  "key33": "3PFyZnwJAT3h74Y84QruWVa9TT8G1TBnoREBxiPJASzjMVJA6tWuyDUD8kr3rsgw1N4Gu5hVvdD5Z2DfBoDKD2pF",
  "key34": "37ghAeRZ3TFNcUW3AM3dNicqJFFFaJzoCohmmcSCtoEbj81unpXETQfysve1xxLkMkSLeRGpTXDyXNibsHkwuUS1",
  "key35": "3DDA6G854XJP8hEu1KbTrAW16ZaNqyeGt9SAvwCyCUbqVHpDxMtTZLaSRWHZ6nid6K61TSN6CLJ4RMyTuPPG7Pjp",
  "key36": "4VNL5XQkUPiSuWf5afVnGGi1AuRr5PD7NZqcrrFD89X2Pj7jnA2roATDMbAs4tCtmTpVsD5VxbN4ne1ar16y2wJ8",
  "key37": "3QTwwJEtkSyZ8FA2AsgBPocPmYb6HrdCWm5E4e6KcqLi33Qn2H2rKqpwzDcfBP8Q2XNPxbYpvr3mfp9zwJe19pHs",
  "key38": "5KtvfJpHZM7Lqmie7q1TKGFrGEoYPqsWvMAHkZSPHHnVax5xwqJNKpLXg8oYQErDhHfYHZv23c1gWT7rZDcGs9HZ",
  "key39": "5d4nzo4DD36o6WFwzDgX9GiNHky4gpRz3jAt41rB8V7BBhx1VFYssnrYiXZneqygBRLZjYN38PeaCgEhFXxsBVPF",
  "key40": "3kpHhrYwkUYuT75UswMcPfj8Q8uV58Yt4hceNiXWgaW4HzmYqAC4YHKxq3dNkHQrV5iU4nrtp9R1pLpLbq7edD2U",
  "key41": "4Pca7wZ8hFKxd2in3fSrbRHkpfFC2dRQ2V6U9yH7wdE1hzHUsPE9pjubnJmjnYnxEQVyhsVs1djgUZ29b4Y7p9CM",
  "key42": "SvxMxPTQWqWK13RZ1K4AxpBQ7DNqaTYsFdx9s4gvGXoqnC53zEJGWsMzEeQcT6wwVrt9LpGHhuN3yiDt61BcGyD",
  "key43": "38SndqgGKaYAz94RZGtoWfRVrvKTSs85ivvwxTS6wUWoEfx4mb3Q5dif7pwL5Cq8X8vw5RQLqnqJspNHBGoS9Q2C",
  "key44": "w6ju311PPNfJwWaong49Bw4HkS5sjgJaDiyXfzXYRrr5WNH4oJrSyFTnyabyGpDEahCkwsEgaY2ReRLoyfwRZho"
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
