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
    "2EApZ9sypPc93QpExFNyJfbQUEgY6wV8ngNUiwuu9QdkU3faDHjvv9LGp4P2xqLjByZjH1Sq5rH1HYxMeriXErV8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4s4uxDzEDF3FTvyaPeN5TMHzigPRuEH2adwqNFDtgHYsFgNomt2TfvZCTvZhWW81dRA9depgRKBFW6Kcw41y2Uza",
  "key1": "58ecWJVF3mK7VW23XVdUM8J1Srnoe3gShjkH6KjqJtJcuu98PiPnH3HU1dAbg9dBazdPLALdnfdHvJHowNbtzW4c",
  "key2": "kAQUcWLPH8oCvcS13ZYiTV2eddpPtfFPxXPsJvxjmp4wNNLPvUmNepnAfdS2ua67Hnk9EJewcyasJGXQw3m8fiG",
  "key3": "2BF2u6GDhDh6e4sGgPE2bwd2qLG8tXmNJrn8fmYBraPTVGz6CvRX56m9KkA6XfCJFY1mb6R8HNxpMPjTN9srRW7p",
  "key4": "oQLkSBTYCJ7Dy18zo9LhxmAzJLM1dU6evKSpessyT6a39tEhzWaEbjJAK9DAH5r7yZQ2NAYacivDLNkK4Bt83CU",
  "key5": "3MZMMZ8ZhJLRVDwYPH43xkHiFrhuGLgM2KvsTbpt1WYAxrg4bE5UUonyQhk2gzAG4ewMPVh9GTamqtjqwpFjJoyH",
  "key6": "39Et9Y8eoXM9R92zRFXduaz5oy853tTF9gwJQWsx39hHTuUB7L7YB9PmvAPvjLe2uHPvZNKa3i1fq8jJYheUNfMg",
  "key7": "E2tVCxn8KJgmZvZ8Bg5RuvLBNAWbCRM6iZ4P3Bagwdu8ZneNpGqrx5noZQKv13eKFGGWMmYwm7KnQWJiH6mGsMD",
  "key8": "3f6Zzwo9pvBGKKrY3ZnndqG1nWatTZYVeg2i5JS2ieDYjZx9NhyHayj2wohSibaD3xp1g9cfBGoXwwvLPXXe2Ngi",
  "key9": "Rs4nXDpt6QRuCxXEuraEhepCryErX5oRA2GEEKDbDyuNCWDFXN4ZFDpZvK5QTT5smMdoQi5edpHZB5bTpLXAQPT",
  "key10": "3zGsxxzS9e5Bb8qBPLFEuTD5uaov41gnnRLeTfiLWtGPS13UerBRuhu5p6LTVCaWuL1fdAFbt2EbLYr74GYZNVTC",
  "key11": "5991tN2sGTGMKRYSUvwdziaBUKFucYZssefPPdZaXxsA4bo4y8Yp6W8rNJdm3r5xJU8xepCkCPdc3mPmXjdJ6UBT",
  "key12": "4dzHNge2oVPWXeqkR6ZCAWTjcgCfoh9pV8f4RT6DgDiqrj9X3etHMNw3L3ssHWmKxoRYc6otiB6zsV162uTyqKsH",
  "key13": "4oQQUEqZss1U7pEfLHXvBvWWvZyhYWqeQzYS6p4nRr9nDWGSUwkPbjUxiYdG5WhW9oMdSfCpD5ipi5V1x5eZ2crb",
  "key14": "38Toqy7wniJvt5NNSBthZTLppA9UX7RTmmJvvf2cfMf25nYecQXFRpEPwUibWPBNM4ApmyUu2pP516t79QqDEDYd",
  "key15": "3oUweNmTMddzzk16urbPqj3GjCifpegZAK8EMU1BPbQn9BinZPdrZU7oibH4MCuycKF46VUGAJChaJ7J7wuQyuhT",
  "key16": "2HmSg2qzi22w1PTN83qJ6Yy6fo2tQUGMwnfasckyGARmFdCB16aa2jbLTrCnMxoQWb3u1zgA11rDE9xWtYg4ajq3",
  "key17": "3JJSZdFf3LaX2RsbemLKTekY6QMsRikyRMRRCgiH3KpmrEm8znd7YMJ26DPTq5nK1wAeHtp5F5yLkQiBzHFa7niN",
  "key18": "FNaUvrr7Uk2vLz12ngsdkiJh4ATx8L3iyaFdowSNTxQXrgrubRHBb7zfBaN1YD7CkaCX6foREdVQDgntZKcvkfY",
  "key19": "2FYLd1kF9QTsUrTRW8ZMEXVFqnX6ieddZoxhUEKDCVcec2FYN3G5rteVF4BX9rK41rvMHwfDH3NMBA33aL56GZXa",
  "key20": "5qQKFiWnnhvtgGRwpYmYnTPmZdkmx9p6A7e6U3BXgeNdhCmdYc8dEJe3H15eRPW6LrwnBWgXJLCUtmnoVhgGqU5J",
  "key21": "3bZHrtmYqJCJdL9dFnY7i3HCeDQ47U9gKEQLPkNnhSHgmm1R9dF3bNiDywUT6NxmSUXeuZyFLEFjpfG7rTWxFBEQ",
  "key22": "2wFgARHdXYoZvp8guzfkRz8PqpyVp27bsLdA38SnPkcEqrWM72wmmdSb1Qwz3PSGbAXFEpMKgnHAvefvdHKS4iF9",
  "key23": "419e2qYV1mc9E6mKca2uGLbvp26dDkNaUsj8vETd965EvT2gx9GsbaGDmcgYkH1XtJpM9W2r5kjqN45HxuKAbuUv",
  "key24": "5FtHMuUrE6jxmhMB3cFV5W6YCS7LoQQwCJef6jgHQd1pM8hFvfGSaQsEY5dJPnswBzNJsg1jNCRUSJjzcsfQqLv1",
  "key25": "2JcL72HYAdQhv5nbuKo5aheh3DUVxaEWvkhaaACpvkZ45WRXERpAn9GThBNuzbZd5yWTi9wMo4zS3YHMDKNVGpPX",
  "key26": "487w1vwWCJQwTs7gxeq17YHQe4yAvaKSprkGWmGmf8DHpb6ne39Q6WQRFGEYBkzcouUxxdACkYVVHGGDiPHVcvU5",
  "key27": "4fvDXBuYCC6nouyJWhMmxJAcD9UDWzwK5kcGXPJGG3etLc32TVNF6pZCVZMPdE8zL2PemVNysamkE8Rj6FephzqE",
  "key28": "K6Jzj5pjqn6vZG9fBu2QTWhtGpMxnAji7o7XcGmcQ4EraUP9bFZGRKh23ixg9RrGU2N2XwnaG6fYFUo36PJ3Kib",
  "key29": "3xnTNKKhDr6Y96EpmFD9d313UDC3Nhf9E5UcotYFYTugzr6qbpRkgbvwmrdosvRqKHz3Pjf2yEDwwQLtFKLggs6n",
  "key30": "2Rk7h2iUswqWAPGbJi6wrcX3sFcaG4SGESWqngfK3hmoRq7rqm39jwA8mMGWvYFrTc2MKpuaKSXoXhFdd8fcLtFK",
  "key31": "4smX3iZsJdYLzWzmMWp5oDZdui7uLPWKdQJSkGmT6BDFeAKcGtADL6ihXvemH1ADVTBXayYzHSoj85N7EAxRQj4r",
  "key32": "31qoZK2Qt6aytcip3jZW5YsnGxyfK2bp8MP5cYLMiogCoGYU16p97FkdJQcqMScmP4XgERkysWVAJsM9caUCWDn7",
  "key33": "5BJy4oyR9hBiQRnpDDzoP2FZyxuwizE7Hzmmwa5YEfYXvNr9zXcfNKVFj9Eosqo3HrcCeYGnTd3sEDvwvzKfpRvj",
  "key34": "5aKdiaRezbsTADevJDpuDeePvFiqdKc9KsSUvm54Sw9ASoiCYEQi6aUcS8H49wB8hWSgccmZVH1DQeQNvQHSoP8k",
  "key35": "3qQ6qmubDPubef59KJvdgRaF2S65fcgqbbk8h1x1jwCgg9RppK9NoYqfwGsUkFBbtd8iGuuDyJWBmt9ZyudoQDy2",
  "key36": "Qkk3E9hwnh2qYLCZ61FVc34Egr1WGjfaXd8xpKi7Hddn5feiAQRVkALxzt6BdCMbPzAVFWJhZSUQvTAcjwZASG2",
  "key37": "4jAmYTgPxgkj2GxfKHnNutd95N65nquervgS2y4LkrqMFNgsQaUb5ZeJ3HfdwbD5qmptr2yjeVcShgLZfoJEHPGN",
  "key38": "3JRcnZiAA9WcFZLeTspqKAcVBXLBqHR1wCFwgdT6DZdJAx67ybK583SaWFEwTQtfX9gf9oHa3duozLMSfb9ZJ9Ej",
  "key39": "2G9vmcepjFbwTfUCeEqrUsJBAds2ero5UNgVJBfmo2j9u6vgk9M8ZsE46KZLx7ART9VfjLokot1iU8E3wtqFULFf",
  "key40": "5UX5yapRFiPLkUzKcKSJ7Jos9FdierXLUYs6F1m9atHbTg7umXjQf4gCuxWrXo1ypgwB2hMCU6hHqJBpA5s1Nqac",
  "key41": "4P3MQA8JmoEjqFgaoeGLR6TCV1YFaFGcYswCBA96SV2Yrafea3GJfAVJp2AUE8WHwcxyMzK8ay9T3gw54kJx8AW3",
  "key42": "3u7n6DtW37Uir1BNqifRuq5jEpZNfbQQeDygg3c2KyXTkPyGivDLrNWMihSKUdhpPT36YfTWKAgxcbD9ttNxnZfx",
  "key43": "4nK2cX3ymSXtVVbZzkcbBeJ7K3dMm6rkhAdVWspym6oydqrwC2f8sLJSS91VhV6XhFmKsZ8ov78QNSFzpYJw9fL5",
  "key44": "47D6qVw277UAHs6hmnyuGMScEgpZNCgEHCmjMH26kzxWv1MFQqUX6pHddEpJUMsiyRe2H7gPceeM1W21WhUAHgWz",
  "key45": "3C6RE55zeJz69kAXBgvPtUPPsQz23PbAyjq131eY98XZM7ugxzPRSgBpkvdzNqJcfMjM4MeURiWsjMP64Ks8HyQz",
  "key46": "5PnF3p3QqBmgtRqMtcmXaSfAAzVeySw2vwqxt3QjVftEEZ49PztJV4Whun4r551wVXdNfMwib2WJYQTf7Bwnh8p5"
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
