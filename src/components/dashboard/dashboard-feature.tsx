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
    "5XrTYHRXz7fQ541y5zrGa1uBbzo86szUgTvwsKE6Ux71GsrmT1Amvgr1iQrZNfVvvnGJo7g1HWVFmVfeHEyAdzNH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Qv21kD2TP82A7UpKd9PU2P1c2igsBYB2FS2kknj1wetpm7W4Ld4vN9HbnWCVvXyWhTYi9pawzDVAwsz2VRcqNKT",
  "key1": "GXT7umSYSs9MnMbSkbPcTQHgmjjUyxt6WGeDQJCs9H6VG9nMFp7krYJvetvJSbkKfBmYvix6wNsdpEQdzw1PqgX",
  "key2": "4otDbpbwgXfVaEw8eonxE7pf67RfM36kiBwrtGyoQ9r7LmXaNeECj9utCF5mjxjzDd7DCM5msnvhCop8WPL54rQ7",
  "key3": "2tvrw4p5gkmtXZRBZRS1sK1EpTeX2X2aWTCKS6k2C3vxTeSG3X9y4zLQns3VYQS1yDUMuTYy5AqX8xaZ1dF1DbNV",
  "key4": "yBtxQz6NdbPFyUAvWM7UTr4PpPJGB5cpRH5E43H12Mxsx9xz7Rj1irEgFWz6aJSpi7xw7soX6NxJSwUZufQXSm4",
  "key5": "3rtAZLa5pkgjf7uqw1Ki8tc8WQcjWBooo5Em8eyh7Uz1MquUJupnUm4VU3UvJK8aep3GJGmXW6ptD6wJ4v6oU5Kn",
  "key6": "5UHwbA3rU21sBa19jqy4Jd6xCvzfXannmLZ9A2LSLebSTjXUR3pyLQ9s13Bhw3yRJrwNzwQfQVy3gY68aT5dJLUM",
  "key7": "4mTjWb31fZ118BHyR6HC5T8k4sLD7VsunHMzA8kZzNkt29RkHA5YgGPFq6bkhAK73x6jpQvQ6QuEuUu2AYpWepVQ",
  "key8": "2C7uzgq3MQfGjEN8QT3cwn7ynvTnZEAtsF6JQ3FdCxNTa9QjARzhnBqGtdmsn1siwdVSQ1CnWH1XvR6UNZcAaK2n",
  "key9": "39xaEbT9LXKRhBoWj1yVf78a1LCMZ2zAY9dt3PRkaxKAsiPLgEaSZt5mNVWrxKsi8dfQvQR6KrHbPhgPpG4Qx7Tm",
  "key10": "5a6AWwCJVCRPbZRWMHPvRTb8NmsmWzwrRwFc6dzqxUEyFsjyvBYxsoGzAqFXzpT4uMsmFF43mWbin9m56whiZNSq",
  "key11": "35YC2oDZEaf1oULrxeW5AEwrDAhQu8jdxbUiC2XeELULDYcMsmxCfZ2CgB18fhZF7fvxjh3wodsde7Lan3EfD1xG",
  "key12": "2MFLmhY3TEPDqyg88BcknBKzEQZV63Ct7aySB4YJcRBiG6kU4yTc9Ux7QUEZsPGm5MRf6qNDXnJCSCkVpUVwtZZP",
  "key13": "3h7FXWHpKNbtZA2fYHW9BtCXueA2KajzSnqwdWamo3TgQj8xbk74bi9LS62nvLonvRAS7Q5hhynyyw2SPmmC4ch7",
  "key14": "3b1vcYhQB7nW16vZm7W1PmoxF2npMFmNEyZJ18CDegHxyija58MuZ9xmbybVzuXGfx7v3FXtEST9LMVoMbrTVmm4",
  "key15": "3FGymu4wuo1eLgHgsaXafoqjVzrSJRaSgJEvxNUKAFKWMzfKwUdg6hgtpHYceUE6GbL3qEmSFE3EXpbC8sV4TZfs",
  "key16": "43HBCRo8HnAyAJb6fE2X6RvayQV45SsEY9CWFtcqgJ2ha8fyL1CveLPym1c7rPCu6uA3adCLt2LhDqWzvXSvTLUc",
  "key17": "3upJbb8c1Si9w6Qquq47jcwmYk9nAEgmiLhU18y4K5bP9rHt1BDddrmXjFDMr7WuZ6UxUc5ymESAAgqurTfjse9b",
  "key18": "3MMgWRfeN95WEyxXMu8AdrPc3HLMhJ8JcYPpyqoQCSaEWCjZJvrhfB2YZ7Q4X6wn5CV8mniG72iydsEruwdVpGUZ",
  "key19": "kgVDwCnVQ3wwwQFttWXa3nDinXBtVjdEYFHXfGXAwjtU8AHAuhSULxRxG3f468zvBhFFcxfxWDwhx7AH8fhYG7d",
  "key20": "2mPm7Cb2PthuTAi65ZNqNxTq7mTCqvawzDxK8UVj2rByHgjwKvHCwKgoEEZN231bVTwU9gHVumZL2vdCZz8LrNG5",
  "key21": "5Fp6fwrGFwiL1b5jiMTUwQ6hiUqVzoMmYZyvYnX9JmE62LRzCz35VHNTfk82wruWqvMzRrsvtNzWt5US4923JPfY",
  "key22": "2VNgfymxdGDppJctxzxPb6W2VBjpX4H5piuUNm8nyWoxEcXAjYPSUXjcyMHGxgLoHWt6MrMrTp6tJg5ZPinUdCvS",
  "key23": "4e8qUBnXPBrdxrk1Bk2seFNfQMAk5h7U552faCHb7fVbNi3XZqoALUMAuhBWVZXb7tDx831CrghY8zw7uRcpNDcc",
  "key24": "4Fj4fPbeMDvHGjrRqdBbNWjvmKZvdDEN1huPXi7TEGgSqoLeMWP3yGCmdMEdDVMQRNAM8i8QHvwns1R39wPc6Qu2",
  "key25": "3i4RZeiXba71d6Zmthk5dLod4PotVrv55Y31xWuxT5kMiEffCrEejSri1Dhu7ocUEFgzDv7sM5m1f16ZkgGeExyB",
  "key26": "5UnuZnSfJYG3xkX9qSrUS6Yp9UCDWUHz9xJigpd4Led2E3S6vsZ2b3ke7XhR3usiVXSivgpmVs6JXgKNy2MTxmWS",
  "key27": "4rGnrhSaEWgeuWWNJtAj7TQDeStshgDCCe6DJ2JYjHiX2NzcauCzc4xQzvYBLBkFppH6Vzoo2pqVyZUeCbGighwh",
  "key28": "47XH27UxG7uAA9w5h1fJCjXXHTu72nfmT3ExS9CxpDdSH1rYje81owPSnRiem4Q8tyXvEs92PzSk2htt3WHXdNZG",
  "key29": "4Z6fwCyDFkaUsRnq2Ah2hxg5TkEb4mv56iYNkvbn3FogbN1bsAEUSSytb5agafb2XkJgzLT7Xb7YEpAVYUoCDr8H",
  "key30": "5LUnc7Vk4ZbjdVpPT2HS6ai3dTTgQ3rs5jX7JevHkNoSGkoC3wvxCKKisbmS14bbgazaGu5mTmP8JWupsVmHrcdp",
  "key31": "4cbiBkXbj3BYHegwCz98hRSLfjAiWT4ueQtr6Db3uUgUXSa1r5To5LnHyv3PaSWV9UXyV7oU71simmzsgrHs2RdH",
  "key32": "fcEyKuMLeiZPPq8VBLxzkJFcKbfpjh2k3bHRCwvswj4VP6pGUat7dCyMa4DfigJZ58EvSTM6Lv7vb8hG6ZxWkdi",
  "key33": "5AHrmKqWD9ji6dSzJ8WpHDamuat5xLMuzmeWTUw4XdUQ6iqkwo7bhZ3tHhQcgmYwPQ6XFEYf1uwRFCevDpuRebV8",
  "key34": "22Meo9duxPneqKqPLhZfDcgyyDvqw7FszzCQmuLUBdoiwSVTq2nAYM13E8dBMkEkzcBYPV8nEJRzAL37gpWzLo3s",
  "key35": "5vHcXBKjgG53xQYwTy36zjazAj7E71KCvjgjddKqRQHwaa4YDd155dfRb8wtwgvKJycTjbmr3y8z1yLA6WMqDrx4",
  "key36": "3gUegWMjaHJzDQurGjz6nYHfRBUPyJdjMwSYMfiTtcAKjETRtKuLWqwn5gBanPPdumrW1zMBnnDED8wG2GgWNZy8",
  "key37": "4EzuAHZrUiKtaA3UdUX658hTVsUpdqsnXT1MoSfeEjXGSGDGRH8QL8fVex4Ynbz7XaTDATvVmF4HA7npLUtbpGZc",
  "key38": "43ukqXmf6BSNhC54GzT437ZeCxrAvQGQcVQxknuZncSwiysFgAw3TXFcK3HRUVrHrXaKY8wpf9fwNnj53X1x9TWT",
  "key39": "7gE3ftPUHLECg7j9jbKBGL14HwW3jhmSbwtfcPyqeea75BKq5vFL3BxxgYFRMqGSdmUMDsion8PuRaw2yxmKLqT",
  "key40": "3cJpzg1NWA6q8Wxt7GGkhEYya2gT8YGXFfSGiGAngNwjMpxEqLBvKXdhAKNqjixtRMYErVHvD7z756ndSW2EuNkw",
  "key41": "3X8WtJpfpC9bhL9zziKE9v3wUDEPHE9Aou532NJMBtwHNnrXCqvv197Em8jHrgvYUpTRd5qfC9DjuxuSWnG6HapV",
  "key42": "4mSA6kq11jjBUR782GwEa5Y3GVdXt6zSLWxtwPwRMpgjxd2BPiDUZUkZYsUaRN8ShCf77ZuyGVG4NDmm9tdhZ4TV",
  "key43": "5RaJjiase7rChdPmvZEhC47voLwodoFNnp62Q4B3TWkMEDRXUhuhokwKTNSBhkaQT48XtmXtHx9RMifDaChtrog7",
  "key44": "5ZcLnS5PwmKHsD1mYpUKwqpw6g4E3g5xjixrLSnfcTrVofQejv9AkmReojgdsqqW4VNHxEtJpBi2KXRrtKy4y8yt",
  "key45": "5J3DM1cGjAia7h65pCqpfM3unJQjJfisVSuPv28AP45kPWZYG6oQ5W4oKytHnDFY36ZXt9Q5GgEzidq837sLAGep"
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
