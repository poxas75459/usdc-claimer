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
    "2DZj91hrmFmYAQZMYinzJPLYLi1VKKrvCgqSajpy9zpbi6cmLMBZ2uj4EBP1jfMixbwvQonQKoGhPWjAN7dr4ULu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rVZW5MXMwca3GFCW6te42RpgHtSMQZnDdMas68hvzcuwTAXgrGePHGRA5dBNwU2C8JK4jcTpXdRw3swrM5kvFBk",
  "key1": "34Doe7XRvoCihQ7NK7eFaZYiNBfcDXZW12CG8tHvX7z94t5PzgCD4W8EFZ2f9HNi1kfSBSxp2GZg5gNQEkpjpEGZ",
  "key2": "5ehGXbh5tBoMkL51HahBFEsQVApBVc9r1u1YZnXAB7W64Su3Pbv6RTesXRxkzwMv1TxXdqMYCtjEVzpxifzwWuzW",
  "key3": "28p9uYdBogeEc1aeZxFEdnQgs7FchqGyCCSudT56kdhPYceSozNJBUbSSTw6gM2Hb3eJ7MVTW8jgavoAZFgpGm2Z",
  "key4": "H6wdeawjon3H5rhzejqSsp6ZnDFgB1jgc84zAnYCHA1J6G1KmkRxLaqfjSv2CQXsqaFFVWLX8KpfKca6rofEujz",
  "key5": "2N2paH2FP1qvfBEo9XNTCNstJ2ws8RtaA3ULiibpKNb2PRz7fZ3ggBBA2v1x2nfz3N3Udj43QyXfcibhCx1bxbXD",
  "key6": "5NmrUmbS6NkAyVG9Eg1Bau134wHoqb9WU4Wx4uifahMbZoZcttbFcJAevDwnwnp1GThTamduVcuWdAN9U1BzxeA6",
  "key7": "5MW2DWXtm8ddHbDP5aUeACrudcdt9ZpcjQudfyb1TtQwMN6RwX9XJnVPrZz88iLwScxKSmNm7qhKhn8mhbTN9L81",
  "key8": "3Teu3wUAwpr9R7KisFCn83iW77nVTHHpN3qdnAyZXzctv89wceF6waXGnUwXiVqJ39HidRnrcPDfGxdBii95pBFY",
  "key9": "4AMmounr74btzM5bm4PyxAa3HjEsC86ZN1QVi7pUGJhuAnTjkfkgBTG7pT1gWkKNrkwziFdDpiVCmuRLbfMyvUtV",
  "key10": "2pGKNppxhA37kzGC94SCH9SoTGJc9UcaZjrQ3nxpwtWCLYZKQzGXjZ1NxbeJeeFGYRLpEX1gwTFxJR88qbcbkEtP",
  "key11": "4W1XgWDwh1ZMYLMjHwDwihoDhWqpx6eHr9Lq6QM7Zz1YSQwo9GLX7rxuiQB8DSg6Sj8dP5iRjewYY9hnn2hxivbw",
  "key12": "5sfV3WPD5kLqxLxduKp2xemjDTTSNTXT1zcR2B3p7gdgkc1hukyLC9CcAVb3ynqpiee3YV2JPUxUErjLALR3QuHE",
  "key13": "566VDjjivb8M85DkEbGLY6mbZE3QCqQ3hmmuiZ7iPeqLsvuMUs429snXvgHzUuSbPk1mRpC4NPRmSwxatZu9mqj8",
  "key14": "5z16p2jmvdsqKMso1bpGQU4y9M62EawhgUyP4gzYyVLJomgi4kY9kfqfNepQregSbw2vG8HcVPh4AWVG8PmtR9sm",
  "key15": "2xFabbvKG9HS1vDCYJ8hRCUmerfi5mCZSK2kX5KKYZKpGwDyFRCfXRAozGcuUGpgy1hidpst8VL67KLdj6vcuSJw",
  "key16": "4bFErobaueaLWbcuysPEnQ6VbS8SrYnjnPrg349bYUGJMuk1PkT3gU9QKydjgwUKuRitRQUHNJg6HMXK3q6XfKcN",
  "key17": "4ihjkSxVXPS4EpZ5XjGjJqZAMHqWvLCE25NZHiBmqpYY41iVfkKx1PupDuyimEkvvSzjeFhyuNXVdY2uLHfRTZUp",
  "key18": "QVF5VbiHfqmbgrcZFcoo2LwBwQ3uxtKgL8guzUkYKh4UDdrSGxXBEsNDo1WCTcoMmueTkeDZTZ93XYPb99MqW9v",
  "key19": "3CJY6y8cwGgZpbZBTVC4vmvzuByfM3BnSki4ZxNE1dHvdgWmtspPKLPa6WzFXTLprC85ownBKDTeyBNeRfTZtWXr",
  "key20": "BkMVXdjH394mtEcQvG4gBwPxF7ug4FtUXTueWK7ee9Wp14h8UbUwxAbP9Ksx3f6LfCh4oiZ5kKtBfUDAVyCME98",
  "key21": "2zDYJyLaJvsEKUAGCHpVFZpRwTKLVckVEcS7UykjGWJjCQyKzLkHz6KXJQ2hfcfZqgui3SxwJhtRtH1TsjK5ty7V",
  "key22": "3eHkC2b2CpezXBwJffTmCQxqTEeS8nEwnodsBx9B5xRreoBuqRmctjMqioxTo5GeKwivJtWX8mnWGBSNLsFycigQ",
  "key23": "3TjRP6QD8rLLrv6D3tbu3wQc6gh6DYVjMJF4vK5eLfpxnztpQR3mSwQFyrpMnpsmCfc7brremKQo8U2RuZ2RiYUe",
  "key24": "4h2sHFjjAJDWtHEMmzrDW8E93ugotfzzjbFCd8x9eu35dHx99gkg1YEUJkrxJ1evAmmFVa3mmFLhkMowFuer5Z2K",
  "key25": "3dLC9iFXmznzoWPndsZHPXDbLiKTV6JYaNfCWp2yYuMxyz8LCsXW2TMRmgsdT1SngawhvU8EVDwQJdiB4NqqCaGv",
  "key26": "bK3gw3ymXUb2cZfktW3aVTPzZmtzufekJeZSaZ41XKZt1BbfMqG6rk6SHaQb4jMD1sdnuEWUte3KVt41wf5NDnk",
  "key27": "48ECPR1iy1PmP67cdkjwPRvT5JXHNSJrm6ikARWS5Ezp5Qhrw5NwgaHhSCRNLBqM9KB7mMrEqCZngDdm5xauJSK8",
  "key28": "2pJWmAq3nrVnGRdyiaKzXG4EpQHP4f7dqshhigtqwSQiiJmKykCqDUzVjdaqzJ5xuwU7ExtAq6eYtetEBbxHkkxn",
  "key29": "3U8wbfwbubkv627u3seAayiuPLCWnmHmC96Dj7aDCV8YMhNTUUW3QbZZ1tK4R8U5HriaXZQqbMAnFyQ6RJCZFuMb",
  "key30": "2tozRmazGRkmsFcKjBYLnu6PLgRwFXVXj6XKHCzH3VbcRuDkKXpJXB1PxMPodRbi3YwSvy9h1N7p2vp1dn4y6dKg",
  "key31": "59qsrRaxyKbhMpZdoMc6SHBpojg2vuNhP7eyxLzGTmYAC6mfdGPxSnUAMTPeWrMVoKAuuXfwSw7erzz9Jx8VgGim",
  "key32": "jD64x7YfkiJeD3j2bCKg1NaVSETPpBpp5YZy5AViHj3jWvFD7LHokg3EX4XZCDQiJJrSLLidooygtki2ppc57jF",
  "key33": "3yeuoC17gk4dv5328tcr1e84t3oZT9YZB6ZNfQo2YTo5VasfMUbntcH5K1yz4aXoPDxbodGeqHCEw5ALCK3Wo82M",
  "key34": "3WoRyWRUi6LvGphWW7dPzwBrimE554Cs7P99vEj69rFXc2zV1vn7V6ChjDqcSGzz2QTdfhSYGgTKc5yX8YN96cde",
  "key35": "8Hd7TbKshC5X5TsakNRSRqditx87PTkXahWJvfpxG7JQpX8hMATUUUEa6wn9yU8UbJ5bgcAryefsTd42WgMuTGM",
  "key36": "2EN8RPxTZkRmtne6wnJ5X4aXRC2kniy4HuUdqvSyXRppbbLr4cyseYFx3VH4NWofjCNAtnwYBQLX6fNtSScaUnGD",
  "key37": "3NQD4DvJJ56VmXGg9g5Ng8gY7jWkag9SvmuR8AuxmPGScR79qDCsCLSk8fgGkfbhPxvidQYoAoS5HtpH1Hd9QcBi",
  "key38": "6ptqyDgAoHwRPVw65BsPsFKSK7pBqSJKZNAVrvzLE288AJxKL1YaJnXbeC3Nsf4C5upxZySwZh7k6L8yyQ78XKu",
  "key39": "4zgddtgwvLvzrthJPqCogPwAKFCUBKuiFWGPjyzkFrD6rR62jFqvSQKMHQ26FM8X2879zENfN2zXi2ceGRMjHc76"
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
