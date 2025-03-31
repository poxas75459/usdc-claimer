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
    "25gKB6Pft9Sb2Wik9rVpSfaCjiKHgC5qZ95vrbvhrwwQnDwuqDLqn7mzrsNNgf5PWAnem9EoxM3Xh3pnANstMtvC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JJDbgcn2u8qgUXEjqdAF91f3wF3e1HPcds6Dj1cak1JAzGFtwRrXRq7ZaTAcEQ5MZtsaUJxqywMxuKBNnnFkK73",
  "key1": "5GEARkA6Xmh4ARUvNpfXzp9JdvMDiYZNMvrGimY9XuRpPGbKFzhFeZzGTcqb4KWwB7ZD13ff4Y8YKGoHHKN2Bv1X",
  "key2": "5xRPSAcvcHAFE891CHuk92a6FPsDXGP1H4RpLnmdbeG4qr23qpRg4Wye8zj4vHpQqhLcmk8vWT86F13wTSyJT162",
  "key3": "FxJHsqmMpbyFtZok4SBqx9scByNZnhybavqMgTAxpQjEkwm3wFtygB7t4Uhvi4VguijqQjis884MN6wnfyWiVvp",
  "key4": "5JJbN5HzgVdFUnGEUPekZHdas3kuBM98uyHUEUo9C4TJQ2yoUuYRrLkdhquD466wSmQ4ZgybyMrCsS3RE3J9tLZP",
  "key5": "2q6pKsjyZvyK5sDkWmzftrzKQTiDqj5RAtUyPcxvai3FcneT85qCgZuGrMtnCNifQ4HVVNqg7bXCayURrD8dThP5",
  "key6": "2Q4eQGwcBMVPKYJPKvkvCxGgGnjuHqQEcpRAA7nJ1hnq9da6RQRB3gudd98DfgWhoCb8e2GzUteFbnULjvXoEwei",
  "key7": "5mLcM7EkcTahkxEUs2U8kGSGDDntBAo8CoGQN3YTbY3njM77mz9nbTdpapnZv7GYpH8TAMyBUP6Kej5qPvvUHDTa",
  "key8": "4TjqUgArMR2VGxw19s4vd2d1ro1KfzPWJ71Aq31S89Vn8pjkbE3A7stwZwTPV4E51VWMzGGw44gfkmSA93Hw69Ji",
  "key9": "2oLTjP41gXeaPFwcEzQRTZ6BC6jeqvwr33tAKNSfacNMzFAT4DCpWdPdLfFwS8Z1UQL44xufn6bj62VoyS4ZGjxK",
  "key10": "2PTmW6VZqQeyPuvEg37bPNLQq2B4eohpUdKXfozBp9pQgk2rh1zyhkHuj2CV1QG92TLCwE2VzPpAr7aLACDhDFXv",
  "key11": "5RX7H2ycQ1dFHppmiW5g7FHvBP11XAZVvgcz8kWe51MZZndm94Hqgvv25gBGZ62yALiug1pG2tYLNJ7G7YptQxPa",
  "key12": "24ACJGWmxDBp5esYtmrqQu32kGZN9H2j7SGxVU9q7uz3rbEYqcfKTefgqq826F1mgp12L3b1zdLmejwFDjFE9UZM",
  "key13": "s4q2uPWteF8tHHn3zH5oFi7ARYWHTmTCTMvdNdbXiMpyHmtzmy63BsC3Hkp6czxVZY3dkHJRWzDYGzu1cCokKUH",
  "key14": "274RCnEXTt9URibnS7ZVFDau42oQ4kVJWySzSpkfX8hG4fxvkZtCHkazPjbffH5SrVthy5Gk2njwEZNMdBz97ozp",
  "key15": "4EZbfyxWntjUQnuZ2rE28XcvppoVkir8DJK75umsGPqMeeZKE5gq1A2MnCWZVdbdwxNzs97Y3uc8cq7MPEbzkpMb",
  "key16": "2FqysX5sVcAzDFbLCRCnfJCRpcnMcbR6QctVHAUBpcGLMRf5gXvP8QZ9VSXmD3RNv5hhpqDNLd1oXpEALJPXcZHj",
  "key17": "4AAbrhWQiHeAjBBjntPNUsbmCbUDonfazYnLfa3zwQPBtLjzLYQi3WNq9Lbj2NdcgXwQCYSH8zptg7YyDcxaBnq6",
  "key18": "2USdYAGnHH2HHfdtB7Afrri4tSt9aDean7o72s8goaEGyRH29LYXmPfg2m3byNjWA99edkvmQv1GccTYZMNFstgK",
  "key19": "61o3tGy2CjbMEGboj8TwZFeHaAjhpgqNzCuEf1675kS7HLvpsm7E9cd9fG8GX2vi1JHabdDrEuZjqttZzPpS4uMH",
  "key20": "5VN25FC4Ry7caQrdV78XC8wxBuT6919iKmXYDRh4xbGiSdB4NJE49EsHbmGTT6EuP8JG2eQ7uadA2TJsM6yT8kcM",
  "key21": "EC64q9Pn4qJ24AP6Eu8gzQLn7kSnjWMqW3pmsMY1naMMvfhXp1xUabiVggHaSS5KWay9MMVNqniqD2rWuAHMhD6",
  "key22": "5dFPFnoSvyfNrNotdARTARxyVHsuPPKiBTV6P5Bi2bzKBoNy19y6z2SoW9zmt63aQJ74g1fYvhga664dEeHKE7xe",
  "key23": "2EmQwZakFb7AbtWkyQ1sGT51tnbD1efD58QWg6gc1wwWYuKYhnXzPREzRo6HyByhmwA5wpCoVyCQoXefKwpGxYrL",
  "key24": "47Us8qWnMFjFyaKkH4hUr614KY4Ne6deN4M3zmVF1CxP5P8vAAufbZb2QYnkzTvbGGx7cWwh315XNtpR1VmohqTD",
  "key25": "5iH5zsGtM1Vjx2Vuqksi5Up3VU3Ymhk5anZyCLw7WwWpMm2tamPzdRGiTpQLMcKw1irxMfHH62VXqZP28fhQrURc",
  "key26": "p4JGtiFzSjsoTuPWCDMicTx7L7RbexSS9iXv6xnDcdNFtPuwkNprPJigtyN16Aj4ZQJry4Y2Suy6ed6wEDyVnRk",
  "key27": "55dYcXTKi7mjHVDVrrmMdrSgPVf8QLqcY3qz5StJhgztT9LNKDdjy67PiNaTSKU3oSxrGL2D9Dd8iJo2NLz5Rx67",
  "key28": "ucfBH68ACPW5SXVJkw1UHCNpe9964Eksik6RG6TJFQvRxqkgFjoa1tTHRvbfQHtFRnpopxqmPtS2Bv8R9Tm4ZKt",
  "key29": "v1CDvWTqwH4Y8rEbqThjdxTWcVhrRW6X6SwCNvyydEMxKs3Uqv3ryjYYw5Riz9bUNSRWBaMaWPWJGxiQWZQcAuV",
  "key30": "34Ugoeev42QLosKZVMn7mX9Mn4W7kphehQeGu4Z8fWHkhwUkfzyEU6T2LrdhLGWnbAdxWbamamPo51oAHkfwV2ek",
  "key31": "2q4aXSasxux2rF5eNkTkeM6D8QswHCTbM2WMfi3To7syZX1veNKjnXzb31ZdqnaDCLEYSkWxQLKaJok9XKZ4LFdx",
  "key32": "5hnShbohT4F91cHZVLgy5Tv4heyQzExRT5Y5ic9iMi2wYzTdDVa2HUV9dG35BB9LLFoUUWc5Y5je22Ei2SbMM4Sj",
  "key33": "2VMEG9yAFo1Xxx2Wyg4rqcMsEDhZh6pKygg63aLfYhQoFDE3mLp3XvjmeLLQWcFuYabCYFfdPkvdcW1y16WSDpYX",
  "key34": "2hozyNY3wYMUQq4GZH9Bp9GRfSrYQkT5GDeNj4QwB43sXH5qaoAifnAueW2tZ63rk5X2cBBZi1oaPQTbU8hLsUwN",
  "key35": "53HH8G5fTMvkwKjxj5M8eeAJAqzE24QDh5mQiJeHygwMMUfycMVimAvCq6fsjnYihjypdJ8U2u3cBo1FToFarciu",
  "key36": "3EerkySSF8yFAhcHsFX8h7k1dGeVTGZUBdGARrSXA5qK54cUQzFPnC6LLeNKWnicyXb92BALaNUmdD2ftkDNQuK5",
  "key37": "4JciThx98MUKnuLN9Wye4zGc8xR2cFPYL6EaMdRVHaMbAf199R6u78ssoFXPss7qxJk88NxDSDHXdA3wQMxf2FjL",
  "key38": "PkxBoc8yFJyPWYB3ywzQFbiGCNw1tfUrrZDgmtqxk2CAGBX9qbNR1t11ZjYzZ5pXfaRcDx8hq3BVqatkPWMEuh1",
  "key39": "3NndA4TVZ6mhckMdzdhJUov2wkMAdRSLnMybJQP3sroxEFuqzCUQbGnJmNTpwttwK7D2YuS9Qg1kd76ZR7GG1vpk",
  "key40": "5pBFzgxTYyULyWZBgRrfoeGaketKob9adGttXfD5joSfXGCfKkgFisz6LFnXy3v2cNK1w71gjAVK4gSdrgky3kFS"
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
