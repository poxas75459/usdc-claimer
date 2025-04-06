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
    "3b9BTRW4kAF8UwdHxpxrGwPgeFk8kxo6fsW2mx9dL2tBjX8xxTcSNJdvBtiBvSxtFDqu4AUb9devSeSVrfagSiAF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Us7UyETCJrmH2Jiip19HZkYZjzLvpRq2baf1s373Sj6Zzur3fVJv9gK4LNAs1igNhhWzb77hLRUEQQadqustLPn",
  "key1": "4maqciGgGmuxXMK8PxaduLxUVpbWjE83amc2fJkea8spAnVAnsb9BiEdvM3gQyMVcpk6jTGUyryZU1zUW38g5xE6",
  "key2": "2YtebUdrjkyNM12T55RDoPwZ7xBeSqQ47nsibeFz5nupfWkzczNWQfWEAekVeh4nTfEpzqxd7B82S2fLRUknE6CF",
  "key3": "K1mEZBjB4Qh5p9fiANwZhZK49MDrcYkDpSaDDBQSGSr74GDPpYyEknG7xAFqZDJghvLvXTjiLgtB7rXg5eD2eRP",
  "key4": "3rC996aAaiS74BwqcHrmndHbifgKMFSzrqaJxEDD7yJMG2TJz3KpaFxVRp5igSW4kQfTJ9rqb876mvH57dciyroT",
  "key5": "3c44Z48cwPc8Hpjxm92HfLnusC13TEWSSYMkj5Rs4ketJMgu3GTUdLRAuoSS35cB5hUjNaBZZLUtjv9RQe3SCEJF",
  "key6": "FegrJi2fW7vwLPcEp5w9gvL8nhEYA5w1RPGp8YJJK3KgjqBZPNQ2KnTmRVU3yEkgagZUB7rnfzBNoj3pBfKE3d7",
  "key7": "3rPwjNq8bWqFgf72jUhiko3RG7upmUHsb8WBMo7EUVxS4cokNWEnZVQy9UWwbgxTtGGyeD1N1AWvT9LKmNL6ttzh",
  "key8": "59DgMyXdeggAXtpCgjTzHvTDwh5zNpPXyS73QFjqXrwB53LEbFZeBdMPZHtDy3r82h5yguD7kLYwoCu9bZHNtGAt",
  "key9": "5gKq4UHnvn6FGZfL2weaPm8EVzadCbwwKq6A8f9k5SZwPGoEwEMG722b9vVi45MnADW6uwKU3j3MqnZeUCcCdKoZ",
  "key10": "cxG3h4qWCV5YsF4xkuVPsqDVvBjU5DtCN4qGJMPhseCtErBkfwDjwr9M2f5h2m7MdTpUiL2YT4yCroRk5yY5HeW",
  "key11": "3BqS2UhowwnDDraixoj4qZq9uUJBdaYY9LHryPExargK2Km72YPKsErSUJ6oEb4mv13o3Bkaj8fzy3MqMBHnNbAh",
  "key12": "4WiuSCscPGiRE6TLvKqi3JCjraZRtMVm2vjuGq9PPY4oau1qgYFmYRHtzhUjgqVkNaGedJqX9furu1JV3DUZEPiZ",
  "key13": "2c4UnVGjueBjTUhnerBZztisJQcgQwwkHPwjeTrefjZ7APbDQVXK5QWD2xZauDhxoLWWFn9T8WuYTEhHa8r7r66W",
  "key14": "3ihyNtsagvBmKKyWFhX3hqgM7hPUc3TfFfmUspJkv7rEDHK1aBHqiL46aWC9dLHWWqUDaSgswRTNVgRRP4Gg6PQo",
  "key15": "3DvuurchbjgQ9ct2bHii446wonq3rWgDu5Ur8UA43Gw59jE7h2Mky7hWB13ADpNGwCmvsLAJnxkALSfQ2EEGDvm9",
  "key16": "3iVGqpw1HYSnnCxoNC5k5qhrBmPxRXd34So9z9CwKyxaRsLJvFweVQmGEBjaMf7bt8CAtBM7yMV5jzCWoXoogwjE",
  "key17": "3UEVgjLMLg1kvLDRe5Xc5fio5TcB57pWDWqwTVnFMTm3S8FW6M7aWgtZMg2QpZ9WLFxNtVUuEFNRSW8TuAN29CuE",
  "key18": "3tW3qB7fMi2YV6k8J8YFZoYBovE47PwtuiMp8c3sMC9YUwrMTzxitGZBSKD8mVbFoE285kFchbUTaUbK9GJzLgqu",
  "key19": "3mjbDTvExgikm8TPjv6a3xcauzKbGo1NGvzVsP3Ap17HfZxbQRUrDgAkFpmnBCQyxnhu7NnRXwFbw4C91BKAuG7X",
  "key20": "3Yyq4YheuCU6DxubRydNVujBW4uVF5JKf8BU3r5Gk8D2yDCdnFZqQoaRHthRiPSk7PLgkgjQ8eiR9xBeZ4VT5AvB",
  "key21": "vVhXEeU9CRF54D81rdDcF8fyCzjA6WiV6FpKh9XStocGQXxx81oQuwxwqhwFGWNNVBrJrP5brBiu8vW8s7MddJA",
  "key22": "2Tf7HHbUDWvwEMpGN2t3nVKxvP2e9KtPKzcMfNgDs9vB25RU2TMoJvuZo1NnmXuMRXcuAv8c26EYLnbio4cbC8EB",
  "key23": "5bNYqxkwe1252of8xrkfxQAD9ZsmiaKNwu61qkuh63cvJukQ792zNoV83mFnAz4b145kkEJXv4pVuyX3888ocgn7",
  "key24": "3E3kqJRKVDLA6fMG7FPFzrCtxCzsNfPmHWhBQwL8VPTvrhvjp8TeciVugTERWGJXofLgd7RJ9Ws4iuPsYDMAMjQu",
  "key25": "4UCrcsccmJvfFPLrsq2yqHBaJkZXqeDhEJqqJyiqNg5v7yrfYrbmGLKCUC5Mhb84pQcJ8fnRGKekj19CpavcjVN1",
  "key26": "4FKes3Kvmjcpwj6kM2y7aFauUpCuKXb6UNmN4iW4W4vaSrJjanFrh1ajhJnLT1Y67JEquCR3ARnN6zCtZUQbjgVE",
  "key27": "3NvPKBsb4BjPW5d4ucG9HQP5tEr2RgmxXhpaFJEq7zoRxjPdKKjVWmf38M88JNkY94v34XTiCto3jBTM9H14PwvL",
  "key28": "5FxUoWpf3MFhMNjBzfiMFbv7NNnFZrgqhAV5Zsbpa6RjRYycap54uVp5U6WsUeA9H55k1umFsN5YrMu48aubS95B",
  "key29": "ftab9D6CSnvitAtP4YqhXiJ7qL1Sd8iuNmxDihAAgAs9jfMj3Ska7rHbcYVPYnwkuWqgfp6WNGignQoaT5ki8F2",
  "key30": "58jPKsh28sCupHyt1dDDebAFG8jjrCBR7KwXka2RKt2vsFhXQYp2TrjnCgnWRzb9k2abw4gnkfYbL79NZbeuHLDZ",
  "key31": "NWM7ZuRbf5K7h2heLnwNF48Giy1pUv76CgW9XsiVKttUnxQzQkX2Ta4cYuaRBDPx4RBVUZfxB7Tc9vUVf2EU3eh",
  "key32": "3anUQmXNggQmB5dAG7qqE1phXrqSzAcJiVQYrmoXpgPXCn37xr6FBBebBQYHJPJbqc9Lt1gCqKsbadjetZPHCZ9s",
  "key33": "wcFawGiePj2xY9KHztis4aTUcoHnjQNLGkXkAuJ6MRAfvrsWgiTKGeU9cxGPqgq7qho2sdqQbvSXNNx3WqqaJJe",
  "key34": "4Yymp113Z7GmogL5neAQNSqGENeF9NkT9wMK4KhZDbo8vdPynZJsDQKcp15oXidiZLoqCFwDW9q9TRKGNNrCknvh",
  "key35": "3yD9D5LNXm2UPoVCVM4DzWX6J68jGVEsHo9UEtHsNVF8JYoAHbd2wDfEPELQUaij5zoDXpqhq9gSyj3bxqcNsiTN",
  "key36": "2kKfJoyE7eDweqMzSAFuGu8aXgmLciKDoMHyyhuKwrBf2ysTyPs3EYPJtYK6HR4nN43dweYqYc4F7ygt59Ae7EmA",
  "key37": "3CRmhacynTvg49R8YUC97nnNcKg3YBpKYUVZHoSsGuYVvWYmRYNmNcTHKRLUyYqLdpuAMRzjrFd5Zf2bz6oULCaT",
  "key38": "4R56nSfspsm8drQqcUALHtT5xL6Ujcpd38Pu1y62VJa6LjKDzV1hsrnvScLUFSDZdqB8PxwRYquj3mHD9XRQ7FsE",
  "key39": "4JbmJCdKvTUvkyb5ipkkD6hCPFVtrq6aURzvEdH6dbzEtrL1VYZ8YaAtB8d5ziKuG3nGasm8qCbTsNztK1xqvmx1",
  "key40": "4QC6gBbx2wLiYSiet9iTGS8mqJ1Pa88tihUZMBx6QDzRw1Qjxeny2FxWJGa7hohUqyGiyMdQL76Uf1UApgiABZjB",
  "key41": "5qzDFD71rk4fEnWxd1UfwEk2HuCc7DGaywPFj7NZpdNrDjHcd287FdeC9YShegfHoAa4F4UEiESf2WzgE8FBfgcJ",
  "key42": "eU64GpBf9uwLciT9JCvkkafvYzWfggbbooxrUqqkAroAbcjToAxTJsaR43X8mdSwqwL1z2RTaS4LJdosroa1Z4m",
  "key43": "4Rbt4nTQxSgfWfwKfG9uH1a4hnpyzdp13nqBpSjKezqSr3kwBGByYzSuStQ5mJsdERT9xvg3Gb449DvXAyme1mDA",
  "key44": "5HCfgVkDUjqKmBZb2VGJnwJmqC62nmqdQKzgLUuXCeLgJYGLfePrLH9GCYBWeXxEmpSqL51qo8Mp26FDbDJ8RU1p",
  "key45": "3hdVhGzUQWq1Uxpk1oPDEgaKziBKASQQUejmtpfBu6p83gN77tktVUfwpPMwQ2gbutAEquPSzUFPZW5Mpih4Hqy5",
  "key46": "5NKwQ8n5gzz2MbvkXYf1hJi2efQPewGobjBjLto19hyKfQJ96rTQAtnGHvxFmeq3cBLqdVcyPDJrz5WnKQ2yB3sD"
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
