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
    "3wUKYxvRvvErxBPespssUsb9RmDxbkTpCQJwSuBcMRvhGM5zqT88EqaDJ8F4UnXXcKhj7Yy85YfUnd53YbY7YQKb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2W5fX21LxHpZ8jadjcDKwCP3iTaViDn2hrxiPjYarCjj438tKQ6B5A71j5qJrraT5VD9ubzwiog9sZRpzTvD2tqW",
  "key1": "5Uayw4wdnp6ATjw1v4h5QfCZ67M2YZkQKkm14a5XhTYQoK3TMd3Gtmho2qfT5PSq8zuGDxV8XnD6wtv2thCrwQEd",
  "key2": "5GtpkWdrAeY1P9egS64CMT6Wjdq3m3xEzDoj2iYpLqCe5qDKgQjCFvsuwMc8Cqtz628xRm6BK7jWofQ2LKferzrf",
  "key3": "5oUzWP8xA7j13DqRVRdUuyh176SYF1HRKysCFRQBvbjRDpC3p5Dg69k4oXQswLV14soWSW9wfLf4LFYzVhyMgR4E",
  "key4": "5gtnYdjciZd5PjqVbTN7DViUyqYtgx3s4QaNRGXe8Zxgi6n8JG36TUhX9iRRSFxZZVJ6t8jo9AHcjNe4QMBomsfw",
  "key5": "4pVsUcxRcfvyH2dRqaWte8BaTz6RXygP4JdSW8hyHhzactHyaSdp6Www2LDinWXHr2bR4KRxUbkgZyGu9nzLJ1Sk",
  "key6": "26CzE4tg5ZGwdnwzV29HA6MJ4XUNZkoQSdz81BUsueodss7yfXmHVYPKdLAw9EVoA1upisBEAY3ZRveNEmEoVWhi",
  "key7": "3mneLMNR6B8qsmFLKpzLD1rVYbbsvBEeiKKgSa1p2PC61dhtQiCaF3ifwMkWZVV1FHR8kZhDJCq99pHvBC49XZ8M",
  "key8": "W952Vw8SbBkZXe53XZEBxMdcoqrb6jBDSSzyrib4DtRzP58LGmwszmmGsqAVgPdCR3NFGDm5QH8dpV4kMJ3aKdL",
  "key9": "3Zoj8VnaFBFyuPVaqoXox4RzuGg7FL9Cbj5XH8qxD6w5KDoMw2s6gBgwmHzgkKct1Yz7j2fz8bX2yWxqjqo4ZKso",
  "key10": "3mZSvzw6u5dzULpQsjygbt2kEAvnmy35XoEqhZsND7uHvc5SFeDjw3rN9hWTqRFrAeWSofZDsVWDyTYX5zU63Bz2",
  "key11": "4K8JFdNnkEFf3XYUVKC9UHWNy5LTq1Vh3LG2DZ8FGiFN14KEfoaRKtvAXeDPfTjxiwoRTd6gow7HkCPbEJfNf8RK",
  "key12": "3WUafkoJvdUYyRpNkkVUT4btfNmHkLS9jYK7xi74XBAG7JCwUs7kHjhjfQVjKZt6AzNfn3DtKueCY7MftJjAMJiy",
  "key13": "3Lsm7DqNXmxG3VFi482Fa9DFhCSDuNDSjP7oVKd3WXPrCvcNYiYehpx3eia1ffix1byCN9q6Zvnodc2s6YnsKZzB",
  "key14": "3pfuTmx7mdifg6qUFaHhUpgKJBvWjBTR6q6whByZZkAbjpabbAcPSdqszQDDeRM26oNv5anC9YQnWm8ZstiF3bgo",
  "key15": "qy5WVzhvg8sWd6oeaUNryxT5VwezeqdhJoqrS3noxrotEscUDdkxvxhZKHbbc6jhf9PxvRBjqJPvUNZ2Yms6KPt",
  "key16": "6uwZMKXjm8TFg45TomSCbKKRmQzpmNM6nu9gCoc2V5CtRBZ2Jgk9WkbtJXvB28f1hC1M9HNKStFQ93cP2MWFX8j",
  "key17": "2UFBnMGfHdsmLEaW7r11BUcEi9LqtsCm5Jg4UpAQFTivbi5mHMcBYFQxmH8piNsY6fHHXVndyWvEQDQjhA56hTbY",
  "key18": "3fbYjdQ74rsnaMseNPufyNHSLLiDjabPoeWghnQFKNo58KvznXNjHuFtLjkK69Bw56sbmpfdRz8gksoFFfX7uAnH",
  "key19": "23ZX4TadMsHmMVnPTxJJTa4acUr3Xig9tU27TbVn65dPQjxWSAXvwMMws1MqEVNgVfT9CWeWQEdaCVyYwf8DDJN1",
  "key20": "53eJHs5VnPnFzrAQf1KHHQEtVqnyGLDHW1vajnzuZ7Wsux2gjmb4qU8U2GYe3cidLSqyd1oCG8JTJps9o4dWssrg",
  "key21": "4kvQjF4yXT41d8kEz5fqq44tXUSNx9JsWNkdq1bWgoikfy8XmnN6DcvLkHNbuvHrYAvJaxkgSRPNXXJfFshtPA64",
  "key22": "3srvnnkNXAaQ9NFmVGXyZcbLnMcRbdqXdEmFzZEEPytbWa2auVzyqXHQTkRx91LxPHpCgUH4MBYRzawZHvBn3VD1",
  "key23": "4xJe4cRSs1gd1TG8f7zKaBPNjUYZUydpVJvWFuwVh4Dzr9ZYDzSNkbvBmXbhRvwNKEFrN8HyzQqUAbim3vhYfL1v",
  "key24": "4hePerSKyTttW8DELSz6359JKb7qeNuFoKCBXcjTgvzPwJGyZxzwWPDwosxo9Bxsr3SwaP131xVkSftB3Pxkq11p",
  "key25": "4SL1JhEXp8Wq5gFwbtAGDtLoiLEQNvGuhJ25MWHCn8oiXa9d5hQ5sSAbamPJG9haUGaWKvevfweGPU4ytKyKpcyi",
  "key26": "2upzbW79FcqcKMqiBUfW8ChsL6vqGpRA2dtwbnuuwerYAi7AwPQembG81HNBCvA6BdJHVfBPs8JTcSfHdNXJdXrc",
  "key27": "u9CuKd9qiBHARRKHEnk5zuDLK6vzFgfi5Mmch2yJBLntJSwXa5Hw22S3McCU6y35KEnFLk3SLn5xm6GfGncuVDu",
  "key28": "2cAD91vi7ed6p1cYVQq5VzrRzUkkeqYEuSeMNdwptVeFJnzAHeFN8GaM1w4fXV4YtoPA9f12VGiBiBacp8RWbNa4",
  "key29": "2X8Hvri13qdd1CZcYcMnckKsMkZmTXkwx42D1G58rRpCVRxw1wYPa9w3wAsY5c4BHfAukZxySmAoM7EQATyDrMYf",
  "key30": "5dd917tHXSwQ4v2CwJdp8VZnVnRwiG2SKP9P2SJQ99HGzPJmk8mhpq3osozuaMhwDPq2Kz1wepRGQhPiWSeoaBgg",
  "key31": "3uD9iHh8Vui67mnghfducvzS3X8bSZoNFWqNHTuD38juzJAYJbEeLXJTS3stvFCGnQ9StzAB6MYncrNxTAMNuDx2",
  "key32": "5AHLCchvcAUZhw84QVVSuaKnQGLr7HZtNidKB9yojvCndtvbZ8AUbGJWzGrrYyknFX9wZMFdmW2djL5znnZnvjxM",
  "key33": "57P89yigzwN9M58DUnrNowZxSSoi1BSKWY2dVXdpjrPpoCDkawgfMxPpChWNfERyDSMoyqeFceeUBLHJnyk56WNg",
  "key34": "27xj9TuW6gtxTYKYs37bSNs4LGCCZ9j2UzABr9t9h1dAYb6gMHfFQoVcQerutn3o8STnbHwr7E7UEHaCcdJ6zxJQ",
  "key35": "4SeGo6Gf9NpumhPqDZBA5RsJ5o7V7JkiMKkz3qhwt81L1cGKJZMNbjNPmShMsfw7N5xZeErxqsp9DhRjZEAkmJvz",
  "key36": "21sZg6cJphiCXt1WTqdvAXhvUFxtiuJBmYL22pGzsSdWZxLG6adoRiwNBiE1S4kJcBRE1kUTJWbjfJvsjhAKCULW",
  "key37": "4jPqxeo7QSwQJGygzZbWwdJtBDZnrcBCz555MK2yCYSQDNi3H6MkbadbEQc4XWVkqyY1dS7JGQUnBYNN1DT2NQhE",
  "key38": "2Q5sp5EgE1AoznH6RbXwcSa5kfXCKz72kh8rDxqLuqUxeAoEjdX6Cz7m5bSrw5ayDn1Ud3NisDmpgqyBBdeZjxnK",
  "key39": "3cekfmYXKkzySEFAwg8e6V7DEp8KNYkn9x6MvKtN2Pm7x4RJkBULGMw3euMZ4zJG38r3DC7uvGiocr8qYKdAfhHa",
  "key40": "2TCUfq4t2cHtGpaTKdpwsZZmtEPMLEZPyNautJ2xK9VxbWdWwjgGsxLtK9T7aDKbj35U3SQ8FCEviCxq4XpWJEz3",
  "key41": "3avnnZwszu47E8KdjbfbCpzQX5QANWyZanS68kRgkeXPhmUE6wJKCL8KrYrkdCxFx3YAbh2NYRfG7gExEKybYCgt",
  "key42": "g54u44riimtfNYqASKwCKLDdC9BiHM3E62GBUwYgV4Ewo6ggyNxrqg8o6BBamCJrnoTAtWCbJ2JFke9L8tFQGCX",
  "key43": "4Dfc32K1aVrvEq33wxwEz7YxE7jNgbCMEFL581Q7DyVKkmU4j13T7z3YYZ1WY3BNPvixBdQBRTLTyNZ2g9BMrsrx",
  "key44": "ErrP6pV6rPbpAFywV26yfcPhxcELd4hFY9bjaFGKRYqWTECKWwjtLLzHoBjKbozQ3UEb2An2a9kiVTGz6yxFEWJ",
  "key45": "24GrKoFKbutnyYMKsCRUAT7Hd8vSZCteqrhZrzXFx8bLvT2PkyUX13w1NMVVJXrgPbg9L5KLHb9zCWSbjUKGNhyX",
  "key46": "5TLEGHQiDtsmAPTQrJz6vghZ16utYmo3GjLMjzVmWjqbeSinTS15Dr8QgNLkapfWuxJbuifMN3faMQasmqzw3jcs",
  "key47": "vhLXCLG7s9Q4W6ujdiBDyH5G6btgEMTLmmXugoepUrYbiSmAt7K9qVW8LkGJFsCYTjkXynGcDQcSR3xhSGenvWW",
  "key48": "4JNn8P4xV5q1XmKPGn6fXsbDHFeixQZPgLJFJLFDPT9zA7U74FfcsBmsUnLWijBHj1wEUtoVTTKoRyH6k3DJcnbx",
  "key49": "4GeYey65EgfMmxjYpGkuxc8xsqVoHQSvjB6B7zRPJhCXRFLqr8sbhHaoAndD94gw1BEwyYeNzXDpEXgLce2y7pZM"
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
