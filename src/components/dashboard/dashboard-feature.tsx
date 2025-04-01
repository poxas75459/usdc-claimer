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
    "343JLyf6K5o9167Sgt7y21Hp4FsQk76nZGLYVxp9j1DgcmRsP8nir5Ktroz6etUQBFgvoZRoqdYZmbSCe7qaVY4N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33Pcxm1khSWabjqk2P6RgmXzCWcq17H1tAFjfNiCrvbxEtmdXw9gMhc9D2Jws5YcidkAYWiCR8NirEQFqTfVeZjz",
  "key1": "2rRxWQ7pTx6mvES9DwfS45mWWJoxuFtybxELgR6L98njLStjAxkazjBJNnCL1pe951aLvXhyh9cFkJ3kNgUbiBaE",
  "key2": "3VHqyaRe6jtBW7eQaehJTf46ehX7WLM4WAZ1h1g8HRcLtGoJ4swgTDtvMRi7x3655DZBrEsdPSVLa4NjKFM11ya7",
  "key3": "3NDXz9DUjSWog1trX1kV8vCYHfEWCst1wFgwvUzYFGKdEF3cRgMVNTzAL5SFtLmNVxwna1XJ4oKQKEWvi4h14uuK",
  "key4": "2j4wraUAM6jDG499vsuV1wdvSsjSzzx54h9ePj6Dyh4Ns4qRU9eTdFV6XXuHo318J7oL71SKT9dbCfBEuowagCEr",
  "key5": "5jgsCDMy9K8AghzCr5T9UA6MXyurbpVo1Xa8aAhyi4mYX4H5vkWXp83oj3GzSd4Z3zU5hKToR9AesprdVKMkoVq5",
  "key6": "4Y3q3w5EbCZ4Wzqd38ptf79G1pPYh8qMAyYovjxQRrSrLtqDj81XiFPA74UxqyZ3E7VgSiVURA96k9y9gftQEbZU",
  "key7": "3ysbGCB2cRW3FkhSuDs5HuCfR5R6sVrLkmCSokaE6BgFuy9oDmAsaF7XZiakjcDDWDHFGmyozEhJHQyxoSf6G4fz",
  "key8": "4kpGk5F2jgnYfRV4gsqqnXC3WtV7KuaWMW5f9Rgn26YCqUki6gs9ykhKuSz3h7LzZ3DqpmjMUZeqCsPYwrK5Dx3u",
  "key9": "aSC9GfAXB4B6w8mdLp9D48xoigdkqamBArqJBDZG4vAi4PfPjbjQiQjviHJhsxbrQBCwEncNW9qwNctz5srkxPe",
  "key10": "4FXvbFyXo3SfVVfSReRZcvRX5U2eaM9SqjQp8ezb51tqujSqq6fmAuhN5DBa2uhS7gaXT2gXFrP9GmAtD5jaqAQm",
  "key11": "54uqSfoWAQz1eYrsyMvmt5KUait5XUhQWFfX6XreCQtg7HMc28ikrkVBhhym6pusqYH3KdY1UVfmnH8WHPjZuvcn",
  "key12": "5qsnf8LBvzrAKh1wjQgsJStMkDHcJJtPJPsu2BHUTmzMnpsdyFeg2LFWtNzhtDA5WNUmGYXsT6F3G4ELZ6Ak1vVK",
  "key13": "34cK7NfjHkEvpZsiCtTqTtggYzu1GqcumSH3joQHDbEyLX1AATb7wtjA1TQYE3JZtPxiETLPLrWrATuQrnDQ3oYk",
  "key14": "5r8ieou69a2tXMqbMMDoPDELzLUr3kWwVPPXyMsmuJJrA7mCFXdvQzhmPkrP5QWgECN3cMS49HdctGSGFz1jExac",
  "key15": "3mbUuPziRZbvr9m4gUKrtHL8WXY4k45SP4CwpK1rSHxv4pN4APwVhuVXjBNSUpMkesGj9GXzNaqf7zBs7j6gHucE",
  "key16": "26acqSSxoSWvhGH6aDLPt7AHmN6FFtHmrUZQAxGunTs3QRCvPbqajw5mEA7CpAcfPxSNEuvcz5KFwkuHLHrevGbt",
  "key17": "5uJ3R8kB9dFxz2NuKjghuKNaSX69WNyU6f2PPpLRFA5474pE6q7GvTKYqLE6f2y694tkAb64RroVxDW2YWkX5xnh",
  "key18": "3XuWNTd3pDcxYxEQckSA34wXWM6HdxDjZ6EVE7GzFV1WZoRCxUCFqWR4Wams6y4RabThzoaiCWWW5ngKGirH5qQj",
  "key19": "2MWQoJ91QfXjFuwEUbBD8i1yB12Vb4FYoFrmN3JbAygW9dJozPxEc5G2eTMPRqxrLwhfNcAX7uYwHjkoaZkTvpUe",
  "key20": "4dK2CrNYec3VpFjFWHapqCEVSodym8Yk4Li5aaZc2FH4NtDsH1KvPrx9nS85R7baUHoFD7FerudYjVphPFC2Tug",
  "key21": "4RxerbsxZTmtnz9qnqiE2yi1CWAK4ABSwrFxyVmuEoq18RgAtiC26Fm6B3h7e1L2m9wMxBFFHFz6xACjyNUza3CQ",
  "key22": "5Xk5YBECdFPJGnhnqouoTQSod8MdynpiunGERd4CiEenmC3BKXDL7DHy4hxG6hpt2iAxou2GtGkCRqq9tfkTdpK",
  "key23": "22oqYDfPuAXASmkvAQukmLraRRqkJsQ6zua7ZLDbnUEVSwxEtAvJSkvvPTP6rq5UWPW9dW6VNji28eWuKavrYR1H",
  "key24": "4RsF4EUYyUwJ11Whif4BomVDLDVXkCPbfwdqbYdE57ofB9qUSMH5AuDAWbZDcKjRuTYGCwha2s16jLihpSJ78E5s",
  "key25": "PJTgSLLtKRYBk6fcUMWv1rDn1wHkV49L3LcTAG4kFmn7KHNZgcbUAgECWXvJ8ZYrT4cQ1FyiZYyZK5kB5uNdgQK",
  "key26": "3ikypYbUBF9jti6hUt6iXUVEW2DFEqPUeUsZkUCCCMdtbXXm9RyYV7sjPYoaN33bVpN7AD2zzgYTMhmeNMGGCUGF",
  "key27": "5DRc69DsmQemDQFeVWjZXq7w5PNMJvaN7yiBSVP6ikBS4yZp9W9vAxmq8tKN2AjrAgswAUPqd41PSJdxnLSKhtkE",
  "key28": "2kRqGvt2DCgrNqEamqjv1yo1WkBE93fswro67yLFEEZD1Mk29dMn296vcsgphUvcK29a4WEyJs1MpBbxDu4N45bs",
  "key29": "3hTV7wokTWpakd7W5iroB7pH5QQhpGm89CVg9Xs796zxmF4hBo3hxr9avNoLXAWXyttFweX4S6sAvws75rJ8ZysQ",
  "key30": "3zX3yGQCW7puKg2cCb2esxtWwmrSvTLga5LnJwAUKqj2ntSZnpuokdh7PjqjjuCpuj6idAaKSdgx6T1TV7vgSgb7",
  "key31": "ieMfnHNYArSdtXFx7KmjU7E3vJRDizGx2pgH9uQZ1S2W8WnN8uXmrWQdtm5wLL6RKaRzvnwRe9Vw839irMeK9zM",
  "key32": "XupitHpd85qSdpXme2wXKQ7PrCDpuYRALkYEGrX8NKqCm8kZ3kBdfTw1Kf5zeSppauz9QSkD92xqgAyrnUg3Q2P",
  "key33": "5AJSJ3GoQm5VsmvLviTncZHC3UodcbbRjKbQ66nTc8nM36T5pV1RetAP5xR112jUUj7qqtTAjH8jBiy6mcGFe2jT",
  "key34": "5GHm63JsDSvQeW24Hn9sAizSqdyfb9aHCEZsBnM58ZoMfciM8fPGS7sQuysRN8fYdwYhM7XvS6nusedqYLoVua7D",
  "key35": "5E668HZVrFPxwtd5hJt83jHEPXTPqmm8kvteiaNPM9K7FcAWvBdxJZN1mJ9pU63JrNuvgSnTdJyK4i3wxyrVZ8AW",
  "key36": "2rAdVYXpjH5oKWuqY8ZXtdWEoF4WcTmSAT3SysCT5ABbN9FeM5CDmN9wasK3kzeWE5wbkiKnmt86tUJG3gBB4SV",
  "key37": "JkBU82fBem2rxkmi1ZPmte4mK3PRBWBwa5PXdqZjr44mvKpAavLdQdAJCN7ED8Kao7ooqfcW1mozKdK64K3MHFj",
  "key38": "2bEJMx3V3RZqUdVVnj3yyZgitjJzqHx2HyQtjzGWRszf2ME1wUYVMVqReK3YMe9NAh5viy9yq8fnyxPURfsouVmh",
  "key39": "2rYj29oujCpHEX4VB5x5Z32Ze1JgGkhWSVYQN4oQRWq7DV8pgnKxjVFHtc24LnLtFBdpg99GbjTiU2yA52wKL6xi",
  "key40": "2awM8HoTDEuD697pmZEGwaaUSZs9BDqpbmEy1BbByAzz2X7h7XGpdZZJpYVTkAKB1o69NE7e7NjzK3YWvsdsnZ5H",
  "key41": "4vf8vcyfBKaRQxNJL25B2DCPfT6N35B1tezqoaA8hbRZW4deiysAM5ctARTDEYT2ynsRzHpi7jHGtpaCwXMNxbG6",
  "key42": "5Zh9YuDKRUjfxp7ViHWjgVifW5idXRzxWm6fL12RcHggyLXGHnk11o9yLKcncT9AtjC7H6HvZDoZ8f2CZ6kgPeh3",
  "key43": "2tX2fQAtjYmaDnh21G9i33mSebwD9muCj7ebh3GveaGwobTS4JNGYHRiCwjGg21via3PPAwvbEczpS2cjHxEbWZQ",
  "key44": "4fyDH1U3nk8RR3Mq4HuD3Xu6GUx36d3AgZi6f9DwNgvxgt9SroGS62xwKyg81E8ZLcP155vVGZgV1uQ6rvi1sonu",
  "key45": "5GQF3pPMXcbm99JGRCyGBf24ruJ5q2jfJ7JnmCegUH66cTD7gECZkRSKpM6qrnMMvp9FB9MbeBcZsrrkWiAWDZyn"
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
