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
    "3rjnyJsqUSEDj7bTRtKAAW2EaPuJdbn6f8SiTSuRR8AMKMGSanPLzumLEhfRyyevTtHju9MyVcJxz9M5dA2sN1zm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FNqGGmSpVXb3pyFMasax8hTWvdtzEkMehHjEq1pf8yNLfRpwwNYTVTR66t5bdbgKGTCEFXKYqRgf9gYiyNBZTz1",
  "key1": "j68neQtFAfs1bqdJ5TBVTzTv3Mjoy5SctmupwfsfPcxp6YUs235JZfysr2aZQAFq6g5UH3AyyEpfLp4XavcssXa",
  "key2": "3jYtsCB5FoJ5ssQ8aVMkyVRUgveEHQ7LESeqdbwBUR7vHScPXLkR2RSsYgcddXRM8qubhvSqRBXRA56CqmthfVrh",
  "key3": "39us9NE4KYoTvXYunmz6TgdG7cAAqSQkdzo3bVCtWuRv3F4mUPjYr3xLcFQDRoJLoiYnki8kCR8WTLZVo8qCyv5a",
  "key4": "2gVvEsMhCKNhehBkFA4KjC9PFaCpcaV6bw1kiKKNHNVKLLUabQrBqXnEnaC8DwaidFvUMGBXqECWwxkHui2Lf3Kn",
  "key5": "V7LQRXuKZdqqGNSf8geB5AwQnjNS8S5mU5fgHu5BX7tnYJpCX79tmEqBhiPZWuD5ZZi6YtRhZLvzCErnMSurs8A",
  "key6": "5hPeHbS7UqHix1tF7eUFGzAf9j5umR7Jr8cC9gkBuvbKEPcRGyo4iX4gbiiTnDTJ1cwZq35fCG2yhN9QTSmyum3h",
  "key7": "3LwP4YzQMqAnVmJuw18piQyqzg1mazaPt74hc4TcLESbvpTB5mTkYYE9cRMYwQ5k7m8hnZhGmPMerGZWPfwygekt",
  "key8": "2pwbvEtF7wmmXQP62xg957YB2weBHrmhhGhfAMFCSTwYXix46Sx6kxF8F9Je8wfp4eiHbXbSj3gEkromKrYLvNwh",
  "key9": "3UjBjmPJKtG79PySRbe8HbJGYMfpNv625VMzeic96fzujH9kjnJshBwn8B8PervGjeaZ1H7GMhPNQFw7tnJg3dW2",
  "key10": "4qMho9CikXyqK5Cyp6szsiJ8S3f8dYxE2u6fE5W3oPjSVK6C944Z9cgaYzQHtf857zEASNasV14qqzNjiXgTuUsi",
  "key11": "8Qm5hDkefw4RsGgJFsmFgz2vYxxTueou4VVn2tNKsZ2ygwfBepEiDFijaVG7RaH4eeyA5akxgSXDDUHsadpKzfa",
  "key12": "4eEhb2bPk8oBH2CFYGQwuPGN5zpbc9916pTVfEMzmNBMS2TKH5jnzMvFoi6bitwN5z1jkZsV9rGH8kDUmDFkQ3zR",
  "key13": "414HHvt7WvxJxbnCgd7QbPAxmow3bYP6FHRMyfDwoJhMaD4Z8crz6FyTJaFHXn2MCC1o2mwDWYPkFiwsEnVtMvis",
  "key14": "5t4jwgDANbhjEHgeGDyMR7Jq29GSDtKbMidSCzNWginmKd7u4LG3rGjLNiMJ7KKoDTq7LS6TU63w7hXPi9QKeAXj",
  "key15": "3NKwmv5AiEuC3FuySPydieRVT2PHBD71ULm2UDjULwsVYhWaAME41Li6v9LTRNjDRWiiAauZJaSmPP7Jd2uMF6Ef",
  "key16": "63Y8DvqNAf8EkVHSarA9uVNLpdkQYQu6hRJztH5Yh3jzkzEP7sbFhsG3PD4ZuTaMNb1yXwoWiDMLvxuoKDoizdaa",
  "key17": "yQLKYR9ENCCA1sag46F3rYLNDCVrzYykYuPaXNbFEW5t3rMidfusFnAzrvbkrw3HkCkeMrm3zQ5wZ8p6orgd86a",
  "key18": "HM3VKBfCCgGZvNDKRpqRo6MPhCkAGzLhjfW6zjcm5KjpQ5k9V4ow3j8vA4fKuE3Tkh9dF3dcCD9H2JQgBvhHKeo",
  "key19": "4QJW919tRQZQzZbEZp2sgqFbrbY54c2MPEbxdXhCixJPMK6zaMz6Xr9Upfax6BgUFYGavgaVSBbHasBtkRCHSxUc",
  "key20": "4948Qq4XReYFqu6ChkxVi3fUu9gXEc2VjXg8CKxFWnMuRiJwZJuRfR3LWjDvRZrp1zQR9KfyRja2MZAehUBgJJo9",
  "key21": "2u9J1suAUgCdF4vSPsLZog6M9LJxRWM33RTCpyZ2vfBgk8srvVFpAN7YgTmbJfEt2wVp8TzBYV6Mv4zvBdGdCefX",
  "key22": "54XhyUB9woRamUrHmdL2NU1YFCimPZJr5qnLvceAa9ASvnmBRQiayhccKHagijj6tMEZynzSt6WRbNHssDyMqtqF",
  "key23": "5zxzYcS3KWV6YLZau9wWcSwWCD5UGU7k2j9Hwprujp3dVVWQVSqd6yWvXMfkuUnHjUbSUNaeqYJoDQaWiB1r9AT3",
  "key24": "57cu2NUdZd7HG7MQXZgXDL7FjHFAmbVnGMHiYa6kXhkn7g7xVgmQmBGQrstrAKgNht8U5Ho4rjvSwoRQdfE4bYGZ",
  "key25": "4vZBvEdm8D36P1FrUYtBVjbwNvpkuarMskXkxVT6QPRqrqtKfXYvkHWo6223pQnkLSj9ehFzYRC3nCgr1DDRc5eK",
  "key26": "4F4xvtd1ca9QmqJ5kWEZZXWZTa9BvJkDWuYnnv2eu6khb3iMz6bGzSVHAjTptFm1RLPiKVhAwRa3c3Vt1PSxXM5k",
  "key27": "xR8YSYt8fkoFJoDcFsQBBUicdXdtwK73FYrhSnqeN2LaNQcpcA78JWtxbC8GhnW8mPS8XA7qf4s7aAhWSCx2CVg",
  "key28": "hMXr8fyPJuogwXjtmytXiain6DH8CQMyft4dm6GSTaPRpR6bDAwuFo522Po7w4pmsPUTbqbNtWzYhocUdSY7H9K",
  "key29": "54tYwAdkBrrqa9ejuTpauXC8NvwVBj14K8PXiPEVSbTG7yUYs8SMzV4678d5uoBK2W9tVX7e122WoND3bVhMwtXw",
  "key30": "3ogBQbvYh9cseXNNqYcAMxK74NEVY9cBmMavvuWFe5wKaSaubGsqXrDBvwQeqCZ1NjgiTHFMiVQgfvSN3ZsBKpmz",
  "key31": "34VL6kjH7fdUNZmzmxc7vyNtVL8JP3MfJC5nmPJ1NK5GFD7zt7AmsJaJ9ay17ZCXoBakYRFhgN22jtPAh4ibTSsc",
  "key32": "P1R7CFD5bS6DcrDWhhAvDfBikLzJ7zUqydSzr7waQnr813D7wGNt4uFK9GQNexiZq1X4rUjuxSNsSmFk5pHs49q",
  "key33": "5HfKR4BuhzLm4erRZGKeKqmse8MdgDVAa5GTVwnYf47bUBCm61JszqTn7XeWSjGNsx9me3jioMPwzBnmup2xXz6R",
  "key34": "uF7BBBjC88YhRQDQXvLrLTdFHWVz45pmSrECsZGa5fGqwMPcUZcZpPYbYv6vtbm4RHjwTbuDYA4R98Usvk9EXZM",
  "key35": "5BVYzid2qhQXgjRxwqDDfsNfBusxPB8uzcx5uWhhvepek9iTEJEXKKNLM9zCvUsdWzy4vdwwSQDep5NRnaUdvBgo",
  "key36": "2cacwXDRdnwufrYEqWuaMRWuiG4AuyMsSYoo5Nq9znegWzc7UnFjPtQwPyTZ88VTUb5qcg78feidvT23faqxXRZ3",
  "key37": "3Ny3YAnpt9v7MtiQoXDdYEEbJsohviREDgCeQdSbqpJ6sTHmy9wNyyM6454nrbujTbuvzGKtC3HXfruLP82vsimF",
  "key38": "4xfVTfYKvdVJnBeToBDnE6sCt2SWMhPU2c4uPAWZAP23ojWtosh2QWFSn9QH2ygLKh3GT7tH8tuJrQscb4jvkmD5",
  "key39": "3xqTMtnPq6jAg4dEtgc5Mk9qUCfnUL19vhkCHybx5t61eNabwPM4cAx8sXWB1xGrSU6c7uHLih86foRVcScKhYNU",
  "key40": "2LbNyuYs76VD4zU1nuca6sDajtLRg7iozDryHhtCNASoUJSXE6Ci4Cinw67TgkT8iGTrPMNUGPfY7ReFqLicKKUM",
  "key41": "5VF1oWbjRqXc3HVcSTghGtMk35Q7DdY8b5e3Q1z1e1Bq63giYELPu5L1dBEH1PAkS4H6rLQ4HxQf7yynByzyevxN",
  "key42": "62gfvD1Ng8dDDyZxixLRLZGkoUbL477r18tMAuwuKZRUKRnXTqvwg1qVDFdWjicpY4Z9pxY8yfbRW6SSvjFVNCAE",
  "key43": "32SE7F4cTkycTeekVN9VeAf2YJiXPEHHkFbE88hLtC9uFwVDyFgATGvHHXtchmePeqyq7dRz1rnQkAAv5hHvKyR2",
  "key44": "2WxT5MA4hTvRJRjPTiFsWWMHdUDGQpgdcQeLvW685JDZuezKQJ8ytxxFvgkWXZpwMpG1oRCaN2Xu4vPKrRD4n1vS",
  "key45": "5rUJeViLyoNYHLA12DnAZLBnKLuWzzpUyA7QZstS4itJLXEUjkQpWEkDq6MoJu6W7gw9vNTKbHCVMjP5hBWSkBL7",
  "key46": "huBc8UTT3jvYZL6g4ppgf3mgkVbSUrMZJYmRLdCFBo4nbbovd6R3oMZiqqTUNWZAcWnJP6qjtDrxxvYuQVH8wVi",
  "key47": "3LV9UZgR95YD7qPYr3hYQeoyUQHe4j5g3LoU1buCk1VVtHspMZHj8nHqUG6EoXKwsGovZetT3JQkx2DJtT3raFbe"
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
