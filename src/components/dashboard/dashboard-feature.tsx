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
    "2n9oViHmRV8ztjU7rMeQuoS21RbAJJWxdDJWcYi7SSERaZq8FM3rJic8Q3mwMqZMEzv4z81pCnvcdwhByQmD8vcY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rgj3LijB6iHAqj4XY9QNV4YfLXQFH9p9bJ3bK7erYNJZ3sFXhSHyKWMxwBBaTnfsSe2zFFQRnjhE89gaS1CqNGp",
  "key1": "4ur1eurHGbnaZWXd2yTb5KM9s1tsd4ZUMmZGpFyYX67XF2x1rwtHtjuTKZPWk5EsRLSthdmaS83GHA8BjATdiFw4",
  "key2": "QVCqQk6xydKzDyQDRoMyK3wWheSNBV6WG4XsqF3bJZ3gwtTPUvZzTEJ8fKArJeDuFGcEeAuUxjFq4b2DwdpF6n3",
  "key3": "2ux52nbchd5qpRGfKg2sGoxbTBJERgBVcAKexqdQTaLww6utbUurjWGs9MbxU46n2c31y6SG5zMF9Y6Z1YKuNdiL",
  "key4": "3ZyNEZeuKEdM5rT9eKjneaYmPro2YQqCstdueeGLm83XGWipo3TGHhJg3e3HfDgGw62C9d1ttHHnYgAreHkhF3X7",
  "key5": "3TzDFYtv5FhEkhe5Fj1voiXYDMbVF95qsKCxqFmNGtYrM77F4yRVLHCGcQ7gq1fHhyJStGkmqtXKDUKYRZzPzDn7",
  "key6": "4q53eDQb5M9vYuE4VLsBKWeYePbbc8hDR4VK1BwomDp9RziZqsFWwFj1n9YnjgmoDiUvM5QjouL8MWJACS3nszBk",
  "key7": "4ePighFhSWiqgfDvErTc4vxaBM3bQe3mDZdUrwbVkBkwX4nzmFf18iSsroUuSojdkjXrY6L3eo2pewvh4WyehGXH",
  "key8": "2wJBpv7MA1BmfzsTqxpGrNDVJd4CnDtyBGXZAeBapMY9moXqbUT7SGuKAsppBrVD98JMAjSQkxztcoDSBj6hPjDb",
  "key9": "2kbWrqLEx9gfsuFUHgttvrrZdWnduptaejwqgzGGBUvfiYfJGvgMbEoTXH2hsGDhoMr9GEvZXUR8i4Bw6EK8dC7E",
  "key10": "K8TEQKGmYmV4cDCNgtTCZgKqwP5ABN8cNUzPZVgZnr5tAfHDSPoxP8WJnzZ6bYPd8ujPnzKD2xZwqozZ4T6Av5e",
  "key11": "5KE1CUaNGz9C3imB2rsJzgjZrKjewsYmKFAoaUzNpNLAd7qpVCN28Hryq63id5ZSxv9Zhwz17UkbEN3xk4LiVKDy",
  "key12": "5HBHNVGJzJ3xsrDXsC4o4NaMYB11pCJdVKPAVwjiycVt8HWEPxFHjUBXVesZjcta8BsBxvPAvGdpycz7nyhYYHW8",
  "key13": "2MLkdeHgNPM4Qs5FZXny6ePjcu5gex8zchMZvGzd2U2VqrWYhaaYTfpVZAkypUw8nfdwNWTmfASSsuWhnAdWcbxu",
  "key14": "41Jv7Bcpp38y4EAPZy1iMkNjVWw2aLtBJe4cvsDbbjJoVWaFwPRAKxMF73PW83qQwwneSbMByaih47RNFCLKzPN6",
  "key15": "4QkjpZc1SUsTwLvEP6isu3FPVCWrbwV7BDhQ5JtFsrygwCcT1P1447L2SVDXfLepCsgtkMfYTZo4vEvq8RKhJhZN",
  "key16": "yJXZtdB8wKgjGhohVuuthszzdjVgyWFEnakQCZN15oUSh6daGnmc3UvXBFoTmb2CUVYPYhAY8hVFGdaPYzttD45",
  "key17": "4c1kgkR19gMLAd5FHTAUrNnDhLZqnoZ4QBi7RFZhzVsSXHEv8mkwqRjpf4vjwFsg8bitoqWSydPQBy1HGYfSAepi",
  "key18": "5Ho6S1SqjurNs7h479A21JRSJw6jyfcbn7sV7e8t8wKjcpFwstvhqgVneh71Nxxq2FF18iNFLyFhQacNgwW7R7ao",
  "key19": "3Ko3Kf9G5beSS7kd9hch57MM4KvCpYhmsUFS37XMhVfRJUXqbxm8yGG38dp2XhwBVso3eFdvdckYULu3tMYw1nsW",
  "key20": "67FtDnZY8jdgSETm4kZMZQRw8984NA6jG7EwQXXD8qaNLaVJMEjLmktdAe5XdJnJK12GvEKw2sFQos5SHTGEYZGU",
  "key21": "RA6gMy75Ax4TMn4kSpdL7GNfMbG9z57L38C6Tv6qZCCKJb472oijAASASAUNykSGQNS8xwE4V6aAzV6s11MnX4B",
  "key22": "2dbg2hdPfJpg2u7EkDEhYmgVpBYok2hU7q7VLqgSWJXBwKAzU8qiEexQZLLLKVNjKgK7BiCz5HSPcsWigsvvK9tt",
  "key23": "2tWuyhf2M1DqKJ2JK3ox2AhL2LEstENaUSffgt3KtYNkkV1wjkzWe61AHr1PVrTfJyKcxu43yie29YRwNK2iCCCY",
  "key24": "2xWJiunG3QmpkyJ1uzmEnsmjX3fhQssH8AzZrSLyDAMdUu58MgvZUsyY4D96C26FPSwJLhYN3denjHsZqBkG8Kc8",
  "key25": "5MvDqS8yq5K9orJ46P1RHFoq9jjqC2VnK1ggAovMomDw3WVPjnRKATgabhHf4vbmM9ZSoKGJc5cyoaagp4ohiuE3",
  "key26": "5waccQCyqAjjz2DdSXvNR8JYoEH9DCjfugKhQGi4TMVi6y13Jop1c4W55K73iHWmuoAGo3jwoCm3ooS7dXpr1WCw",
  "key27": "4ufWw5FNoVBxJDzDJPxRnKzPbFsNiKiSLYBFycdcTkyLBQiZJiFkPL8cxRpASnZ4ZABMTyo7976NELB3fiiCi5VG",
  "key28": "3MPu6cvrN9YT5fMrANuLH83V7RekqWKvqtmXt3p37BZxM2V9Z3qvqt8baKRUC6NBASem3jLufnoLAgr1XLtN62eW",
  "key29": "4V5K9NZz1am3AmQky8Vf1tKfyLzB7YNBWy6vrLNgpWhzqwKqkgAbZVbNZxdmwPZGp5uwqQJ5tRn5RfZdRD2TptrU",
  "key30": "5oboJVfA2UtuiRmPokTnVovuFnACzf6m1LsVK3J1sHmdGtFXNEWLFHPKkNzqy284LK9NHyMfwfJuHHYfsHkmj513",
  "key31": "3Yf1eDx8Da2dubvpFJV6ope3xgHJJt4aDoG1mQiwxBLak4h17tyf4VStGnkKRmwikBBJQCe7ySNQNnXn4whgKBU4",
  "key32": "5Esz9BzarodhaP3sGuQW1NMVNCehmVU1fjwUxL6LKjYP7e6um4XS8wwGJbkxDBTpJrUDQ686VxK1Zs1BM3wYXzEu",
  "key33": "3Q9ZgX32tmna6QFs6Ggb1KrTEp4EkjdNj594c683uGMxnB3TQGJh7k3bsXceef3cxJGSn61ygfFamZUUmKsgxQHk",
  "key34": "mogKYiLUd9Ec9cTz96Nenqi7jtuASN8kjX7vVjTMhR9oGKP2ATdELU2n8DcqiF98Rd195nDHZ398f9HiRmi9Djo",
  "key35": "5kzBG3hY1z3i4aqRKrhqhqpP4Z8mTkkt4FRKfYab35DHGMJs2X9m7LszrZ2yYiRDeNiHFyGgsV9k1iJs9kkH5JW4",
  "key36": "4sU6Ksk371GBqXiPzoNxKzpZaBdffRBaQFnjyT8h8qwQacKphMJpEhFBnREQ7FgSywqRakNaky6AjN9SKExjYMot",
  "key37": "4bZ5z9P3ooHzgq8kfCixgZB7vWmbQyKPoganYprdd7ya5MYirCg17pgN3PfTojofmfcxmTdHCRWPCH3A11E78qDN"
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
