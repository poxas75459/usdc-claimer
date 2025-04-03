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
    "gsNZn2PP7WMuxvbAeYpKfG4NcrCEoT4GhGnUch4D2G7prtnUvb2BQPUZnWqQRYqsuepZCmTFSjoatbBqwbm7d15"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TfMNgfZRXXL7YoqE2MGa6zM1cDa3RBWhQyj26kVR5DHFMFTJq6iMDwEtqNpSU8etfGs61fHshmDmLL8MzPXfBBa",
  "key1": "5cqXvMZ9mHvAEGr1mD4SKXXhPPLQUutHjCGptAQBADdR5jauF2W4p9d8sDCn4e883zZZ8cHPts76DNe1nkwj8weo",
  "key2": "5RPkeLb9nC6Ew3iX4fAX7ee3RpoWGS5CGoUQ8L2TexauSc32NAFrFt3oQK6g9WEdYa5BSspQF7fVzpXmmqcZSzUA",
  "key3": "GEQT49kBVJHZ1jrP6YhoJHccFLXkftCsa7mKT1bVFsBieV9w6V1eocGViMjKABQr9qsJqnNVoWt1twtUUFnP12f",
  "key4": "4wJuZuKwKRf9BK9jSTEtfobNan6T5JLnNvMkZhZGen75xdLcWJs1f2nq7RmZcJG2zoQPCtz4BUVp2bguxMCJGuQ6",
  "key5": "64BTuc26sZfq2weY2GQEA3bajFSE3xf1hnfRcne3mRZSBTygX7iuH4RFWRtAnpMnTzKxLKJDC8DJ4jTfEDsm7KKA",
  "key6": "2NDp8JwMQmDfuBjBaCpwKR8QVkMNxPUgP79Joef5iG3yiweBD6xzFC565iqwNAd9Ku7vjoRdtHKcPq1mgyYBmgE3",
  "key7": "4v6YohTvT9BizG78bWCJCiZfWsVU8ZEUZeWz6eyrgpMAxCFoYqUedCZhYVFruUq3D2cDJ12zqVDqpKqXk1Ft9Qqk",
  "key8": "4AE1sKyCH8Wh2NVhB1vmr4Thaf8pJy5eiHfpKdRKDdAyZhre3ih9RaNWamBLRgRz3ixHU448xd4MZC3JBhv2ReNz",
  "key9": "3kGK9GReMeeummFHqVYeeShzk56GbTE4MzLBt35MWfyAqeanPCrfUPw4rwwRw1GhVuus3tG3HoxJ1wa9XyecuAYK",
  "key10": "4PARW7eNWmHaTKXJdENDcPRmeVsgQCDXRxxasQxhJBHhkNaUcFnwRCsfTeLhWmcmD8fcnZ1LuT4c5KnVi3DDsmzN",
  "key11": "5g88Qdy7nBaNWsKMhYiuBeuy8WP2XNzJnTNEx153EiYE72svzP1UawvwpPSqVUbhhjYu59YMF4YL2z72ucWftvK4",
  "key12": "3mgBeoPs4xg58fHohj98qbkfCpSYRjcFY9Tb7wUCoR1ZhBf6w8wGJAfwgChmFc9sEVZsVnAr7cJbFDHqr6SALB31",
  "key13": "3b4CPAt7AWJYjQJ2Md3anraP47e6XaRo6nnBg5Zy5ix3J488PouCQqMPZV9jhT3ZcSFa7XEEXjWaigZPM53vnABw",
  "key14": "5VRkSMEQ9stNYGUaPxqnyHUqWorKk5C6PKiZT5uWQ3EJFio4WCe9Nn4q2RC1Mu8nAQLs9WMARZUo5tRbg4msGj3C",
  "key15": "4AhCA4MEoZQWSU7hPFbs6ZHT4C89fCVyLdT3m3Mb9EBHXCcRqa86MNWZGhaSDEbuFTyXitjUXucks49gfBWCwtqP",
  "key16": "5gHAxsTk69J9dhcUiGpK3cHcv3d1P5rrPHUic5u4RyH1fidaEMPsrhtpxghUaYhA8SDaA2nbyLnv1jYhvfhaNgbc",
  "key17": "3Pzd72XgYNbuMsRcZCap58jDr3p2PaJ2QbsdMDtwTrqMMV6LG52C9Mf8NnTZyV1x6BTrtyiQeQftNhfvymLM6Aeb",
  "key18": "33ix1mDHb6C11DwTtBpMdgLQiKQ9eNW6uFBZapzQ2CXWcAitTYFrinAcTKLw5BeCJ4v49VK7wyPYp7LtG7LWkDcQ",
  "key19": "4CMiKrwxsBj4WcQjXfg1LyKHy53rbRaFC1d5oowvQiRwWYbCcajNDBNacfZgKtGrzB9a55YGiKW8kUdV9ZujiNhr",
  "key20": "3fWw6PxtocvakpJ2StA6bUtNt5c7vahtxH3kjkxpMPTrvCZ7R97qYMSMW93v4wRP8c3wxtEdQprmK6a76G3vmSC3",
  "key21": "xygNCQ1eSmNToU2HSyH6SJAjn1C3TTbpjMH4unwEQFgzuX2QuEvMr8EJyMjxevX6vkWXLgLark7Yno9vTg1RTga",
  "key22": "4XKkDF6XgHg14GWvvjMnqtnDVtyHt2K67A9HCPW8bETybmfV8MuGD5i3kENUtKf5x8CguJ8evd2QuknBuoSzgtPB",
  "key23": "5fKuRSgGsS6trLZNm3x4XoMfVbTgi6ZqnmwQujPNnjynMFmAkE2VmKWzguzMErtr5cuGTUPJA6qHxELW3ygEJfju",
  "key24": "2qYWHDb2Ldp7GndhpwG5KVABWD8Ga3Www5iX2EJetxjXcCoEyyFzXcuvYVzL2WJV6BNiMTUSvRv1Cw5WQZCFa14A",
  "key25": "2Q3z85TXmQWVisBbHi3hZy1c2ixKYLAhQJ5gyp58Mt95GZistke8Mj2M7NueGF2ssm5rJvExAWmisbrjXCvWYMaC",
  "key26": "DGdZX5rTDgjJypMgENDgvEMXkHLjn1uRsQKHkG3XiGgaiTXM4bVL3dL2aZ4rHEyoh9NT2uDjStCipZCm1ugEBK1",
  "key27": "5CAbZ8shnDz8gRJwV3WmMKLVGzJw2xbQtAWoaJAowQqCEfAoaTkQXMF92yYZNuz5pjrjJy8yxgSuwRRrZeskYysp",
  "key28": "3gA8ductf3NTnJEo2BjN57QPktSqG6V52MMxpGyBM8v6BCAT6RW8DynWbe9dvV37K5rGVmVcX79fC5RuT3XWSbLS",
  "key29": "4vmDsXC8wLvE6FubVExNKHx8P3mgCiUFrqgTR33BhstxFwm7SEk3RCtFTMCbhZmn1sgpoMNJWsrBbFYDN5QUcXdr",
  "key30": "5HHPTbwRADwzAbNXVK1Kq7TL2C37w73QhAVb3FDhxZVw14A5yq2VmuJ4vAW147b9c7MBY18sbjSWYwmVt8kYACU6",
  "key31": "EjogdguGUB4T4QMXNvc2VBbtrrD6sGmHSNMdLM1Yp89NPLUE3RakDrVckadbjqLaeZ9UQMrJewcbqkFL1xGvYEj",
  "key32": "5mPUaFSbtAU55dAM2JyzR1eb1Zk2id4fE6r59EDb6cJBWnSh86MHrZqPXp2bPMax54EGQEJnzCF5hzpLy7qr8fnk",
  "key33": "3BVWMnKqeX3R36MMuGs8D783Qi28abWtBkwPAZHKj4tNPo93V8yuUrqRPZaazBMWwbA3SBzCFypR3GMehBaMg33e",
  "key34": "3TchvVQP8GegEQAEc4QcLDe4L5YzGPvJzPHNkfo12ahXjCMmcBadRhK49mTpmsqfdGiqhztntEMZ1LqC2Dhp2jmU",
  "key35": "2Fd2jXoXxxqmgqzXxHjMJHURrGZZwHTC5Czf9QH2jyK2kQaYEGA3y99WaBRLpWpyZtykTTpJA21FfWiQoBqx9UA8",
  "key36": "4tS6vQtJyNCsLrJ9if819RE8tkxyU8qc38pHR1m4p9mMegPnLprLezuraVzBVUr6beWqinvX4EcnkZqN23pUgWLr",
  "key37": "2JoT2Z2FLeg1k7DeVefc4duSFKViT9FBdpGAH8FsMB4WoaJJLhAsFzgze1Z8tdsqCromK8GkwBWgJJxD9scF482R",
  "key38": "5sUa5wPwW54WVTz4GVE1GW4wogdUoTE4azEmm3KGdh23Tn7Kd8KGqqq21umFckuwmMTGpBwaxGe2k4fATACnZzzs",
  "key39": "27ZJXet2yAh2ooD9QagSqwWMDKhZ9t4ShiSvuxciTHnxR7F6kjgk39Gj4RCHKKbsmXMRd4JcwKVrBJxA6M32Aqkx",
  "key40": "5ivCsSGn7T1ixMtzwagPdURoQNn2mqXHwrv6NC5rbQezXrqpGBSU6AmwHzZiK92b88Z8Hcucvbbyh3t4CzkkBuy1",
  "key41": "32gW17xgqJLPk9qGgxXb6DANiUwRo4Cqy5SkHz4m7KxTxmL6936vsf5mpuUgEpmpbaabrHwwJLbxi9XQrittxzPm",
  "key42": "3D7Xbc6Pxmph5hqxZZLWvHvYoVkkiNAdRExaFuV2QAQ4vAbq8tEJAEEq2GHvmn9L7dQbupuq4R7N5qx83neAikSU"
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
