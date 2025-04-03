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
    "339YEbrTK3oSy2eZTaLgS4H3Mr5gFf1zAjRmjc1E9iUr2zAqNXimLJUnukFUcF5FpV1RagVw4ai4uLUGEAmJnyqn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bF7EjL4rniuZpXyAQgNEkfEaFYae6mt7Q4kBbEDycYAWuiEqq7bupvoWDY6dY8rceXFjNh2dStEa9JUktH5TFjt",
  "key1": "38JWyUJXXGvhJTNPUJdrp5S1BxLSKWTwprSJLiLy3emyV6oWoBZBfDCW51VKrgfXK45DLmDxJQKVHv51e5J4PoS6",
  "key2": "2nTxnMo6WuBsydNvJMMCq4UnSkjv6uBT5ZbDBcUDkzXgpFtWS3ezHXoTRoVhT7Wvd9gyf8gaqdeUoaw7gBnyrrUj",
  "key3": "4jK96hUt2gnb88bgaNw7ape2Q6S9gqn7Uq5bZ1g9rDRNA4RMHQGUXhaw3oWvNCQVDy1u2c2dyaetAFZNATmBn2fX",
  "key4": "3kNmEVbckSHTXkMyUsRidDp8KweiVDuo8EiGU3RV8gpXPPW3dZPsEivDembp7et58T5RHp1qegbDTD2baUnydA1g",
  "key5": "ECBZgUPTUi8PYQWovxLmL7Fh44nBKXw6Pj5FnAxzh78yxFmTVfu8o5va5idrJbdpLi25mo5P3zAJyny1kTceer4",
  "key6": "64SyHXeNCFeytQ36okx5bKCtDGKrtQJygjEgfHaeoskkAeSticiSiDoahsEz8GNocDP25kjRfSzRLiK84uQnbCpP",
  "key7": "27qJ9LoA5HwnSvxKx7qvUWtN47YQkjqfD1GyWN7XtaysrniDKQ7shjahMr5ZpBNA4EAaFAbyr3heJGPJ2x8wi9xi",
  "key8": "37JoXcz7bZhMRetfbHyVTD92pYg4DBTtmNAQkMaPokSxp67y3wrzCdSD1NWFCkSpovyxNFekmpsPP9RwdcXep9w4",
  "key9": "3PXRNvWoWnDewT7NTjBeF8rfF6is3MV4kf5WA3gqebgnbX86Jr7JuExZ78Rhnbgsj3ycZ3nwNPq1ABDheRKwFZzZ",
  "key10": "3d95A1sDQLHYU4YJqqmDke8sQB536gogRDStry83dZQU3av4aSXvyfhycCcxrwm2Z4hKX4mtNguq34u8yY2s8gri",
  "key11": "2DWNci76bCpRKF7yCYDsCYVuLfFzR7MKrYsFFQoFopmd7QhD1KqFw44cHTVx2DWeTFj4Wh7PiZsWzWNgVDZMDzuW",
  "key12": "4nmv4gXu1YNKPRZvNtCmPeQ9fk2yHmVxT2M3PwqrJ1mXayShHH3QG9ZY1cqVjzmQYa18Dd9p4NSoHejf46YrDFXq",
  "key13": "3yS67YKHqfN5JLZqyZtjX7Ck5pn7Np9QBuhoyQykdJSXc33oAngHcD8yLHQiouKTncuqWFdcq62fxppWLg1SKP2u",
  "key14": "2f9EXGeriPzjw434rKXJ43oPGjpr2kZdGMQ9Vxy9pDe3uLCEJLWHUS4MoWgs8eyc3vsb7BnNQUyomVoGzn6BQ4Jp",
  "key15": "4pa4hspeLfXvaJzFYEeY38Jn2eLFsaMhwoPp7AoquVrQFxKKpaBytQbPXKvjHspj7DEjDUkiaivorjrpYcAseihn",
  "key16": "3q6v4JTbHdY1E6TpDbNVDjyw6Zt7ecx2MXHMKbo84ESfdwwu2NAWBAJduT3AuHN4xuYr57GtCfusNEjuJsEGJvLt",
  "key17": "2TfHByr1K71YwgLKHAvYQKBzZkRqDovPourBjBRFDqx1xLyba5ixTLA1JVDXkxDGaScGNbxWLaXeXQsiKfjmCcns",
  "key18": "5qxvbnJH2MKSTotEF9GusizQhrQec818hrYfbu9y6Zf5Z5FVawctxyJcgy93CPMrGwLWZmzifNnHXE5qY1uqoFMg",
  "key19": "pJmLkLhhiUyNu2x956fgnZepyqnFQhwZycuC4MQ5WQGZ8aEuW6hJRo4vVFYSfbaUdJ88tJRPwyMknysd3y1YsZB",
  "key20": "3Xn8uYuukTKHGaFNB9r8wvm3qPbA8J1d8aw8H8zDEXVahxXwaeNkQJdox3AyxRb3EVGeqyE4HVdKZ71qJwwe4t9i",
  "key21": "3kK7nkK2kjPFgp2Km7gQBVbKF3HGJZZ1Wo7KifRfzD8B5MDEfG48BcKwDEnJdsLxGMemLAk8xtwPQcMBDUqUmAiW",
  "key22": "3EcETSXK35hHLoeSdxQp2QpSoA7fbho4Q6TALxrRr5ZKK5mhXKNqKf7xHa2Bxq537ZwLpmdEP63MNspeWxuTLN3x",
  "key23": "Vb4UAZfwY8eMLJcQzZvGW2Mj7254HGWSTSDw4SQcqd2qefFFtNMVCbpPZcuHBNpguX3n294rp3pny1SHSixMyXK",
  "key24": "95bUZtu9eCgcrZbybZeCL9Se5Hq1jMJuYqR7QL4nwmvzF7kCzRajPNmkqgT4Pw3zjDzccRLSBmLgJ6zy1EGHaWv",
  "key25": "3zmoUq41Df8sJC4YrsKH6xC8KnxzHx5HFo3mnJwUYQrQz1Fi4TD3dhcd1W2et8TcSoF4CQpkBcWSNCohwrbd9Knu",
  "key26": "2XXdcvxMFbfjK5wFVgrzUuaRbsr3tQgYj146L3iV3YTq6KSGToTrY2HwJBVuesw1pR4zmRvpw1oS6JoeiUNrid2M",
  "key27": "rFyBMMqiutVwURNoqAozhrgSQ7F3wiPz2FUQHQxaqesTyBQ2kDpdMqN2kwqCnsFRwj8XUyBY1kPqPhui3pQARYr",
  "key28": "64C7h1vLC1GKLF5JYikcR9RYw9xFvRXd3zqkX5aao57bygGM9D2eyAmu2QVrXWtL1gbAB9o3womA3KepR8Uzi9Qu",
  "key29": "3jy5etCU6Sa8Yq9eo6kiuy22iTyWwGNLyYuKL6T1wtJp2XbfRwC46k34zf3tWTpHpc2Bo1b9QCka45rmU1vJ1vLC",
  "key30": "45HWMmQaDCTBh6pSBzcTgPVKE1JmxNvbC65pZryqoBKnLAzErxfbJTzS7yfR25tCfqJpdzNgmR574UEngXH3RTDN",
  "key31": "1Jn76xz9v7mHjGoqfbJjqwFuxxJRTYzJE99aiv2BU45GcVNV8JMG9ZWPTVTxYbAEJDsbkuHVontLRvyc9f4qHfB",
  "key32": "64TG2gSvm7UQsBmDcHpnqL3NfURdayiP8hA81ZGkTideuDEAiEfgThnu7WVk91aKfz42KvfSq4ExZfFFqprR2EvU",
  "key33": "5hRgmjnWsoWzuc4ShmJ7V4cyVaWm6NLPm2k7W8sgWgbGTaQCyicZBzMXeZsgRigBo6k8sgBur1gsQ5aqddwUrAE7",
  "key34": "4p8b6RPJA4oGJm6dEeyGkQ3DcLBB2z34w6Mqa1DBvDPnpBaeynJz47K6s8pG5TQwKgJuGCECiwvvpQxvfqpAsYDz",
  "key35": "5FJ4vh8vo5X6hNgsVr6Cuy8s1t5pEAMTPuxmJguMPg9A9BakTc8wvY7TqGGCUk1ZyADhPVchnBamnmPy33rcg7wa",
  "key36": "23DwdKNoYfZy2zcJn8oFCXgRWJ7Mru8ibSvNvGXvmNibDiDySvaJS8gPtcdZ3n7XLcjwpmHqLQPWV7Jc39Aa2Ph8",
  "key37": "41vBVXmLWwAz766FAvQsgdAvMB69iyS6deu2FzJ55gtS3LYgaNZiE8rzvfDx3NMW4L2iLCrHqMJgRioEaPse9dyY",
  "key38": "5qYkmAa8oCM4Qj3kAS46LeMb6CHwsWgBGgqW4RpZYC9QwusiWd9suMWdsHtovEYUHLRz9uz4vPtzGCN879jJBg9J",
  "key39": "Pjf7rwEUcGDLLo77DgdRD7ps3522u8AMqwFBwqh52yRcxYK7RH2VS8he5dWnrjKYomxTKMXi9RFFBKvqYtktEB5",
  "key40": "3cJ22Gv9N2xeYGV1vUPcyZZCwCAmJXJbQdeaVtXGBNUtshgSgjpJ24KdWbdsLNbjwFoPhtq6Loone7xqWiHDhE5F"
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
