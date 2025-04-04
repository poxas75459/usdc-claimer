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
    "2gBX8dxq1kdjUPHfqbFYVRZVH6cZt3pwotmWanE5wVuSAzoUnEfGQDFvMziHYF9Lvag7cKr5FR21ncwkZ2Ugi4gw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GXhVcHZcGYpPRJmsxKQn8FaRqbjuaL5gucFS78xZiM8CaXcEbbrYDPUsJbqkdnGY9fBvQk9i31aiixmYZkGiQmH",
  "key1": "2nuaygWRNvZFyiacbJSv3UvEN6WVVkZLZtvwoqv5ucYrQTjBAr9XoW4QLMdFJNUTVvCquxMhTZdfVyeoznrvfSCG",
  "key2": "TKK7e4aWCxitj9SZ2dBV5ACAcez3SoPTjJbxxeg3AKPfBsQURDqkVw99Gu3pPshEjeP23wrQEPw9hK4MDH2taAg",
  "key3": "GkfESkeLE8QfJAMbGaEX5N7LmdU46X9WUdXjTX17kdwNYDLFGuQTy9c5WxjkmCdVTjV7v4oqD4Sqb4wNjaBZitW",
  "key4": "5YDxfUHHgHcQbVy4VEf87xzj3APT5WPDUDEjJMycCbAas6ydKQnJDqdNFKQNg91Mby6kb6DBQ8uP35f3wQkmu9oz",
  "key5": "46889JagzsPzHfLCDCchW7UcazSHXfGukokig8AJdMHxuvbyEH295TnfZVxb968cRcGVVQJ2up9QRW6WdNG1gGpv",
  "key6": "S4kzrAgrDz9cjFaW4d3Ph5R2mW2di2hu5DvAkobVNQLMLPcEycYDBVTP3d5aLYvbvgiBN5jbFmTUufHN6tuH3bb",
  "key7": "4R4zQitrMXLBmWwbfyQLzKDmmMQkcCD1C161H2FWJqUsdFvL74eW6FK1DCJfDh1CTexTRUdijJ89V89ZeB7Dt5cx",
  "key8": "4VzFxAUxFVKWPTeccWdRsCTSAQKsSqmB21nfXteySc1ApEJfFoaoufCiCndFY65udsRgvd7yjSLjt22H6DczWF7i",
  "key9": "5sAyy82ZrWaPEN7vC7JfiSMBgCPNARUYYf4vxVW1N26xdupWtr5WmH99yCUUmVwxq2dQQvFDRUN5r7KZY3NEMase",
  "key10": "rX8QdoacKnSVCYMgWwkCMaDTnTRHcdGv3wUMNuoovJNyk7pK9nFHkp4fstBkwc5QKxxyLfQFtshdpmvYSEw6Yti",
  "key11": "31Fk8pr8jwpF3qi2RXEUv6k25NNnWG9HW34ZvgZrZn9PriALfhpHNWiSNobU9ofZ8UBzLpquuNNq8CFGXuzmqqjs",
  "key12": "5UXw9JSDXoit4sfBoNkrNozkqHsYw7yEGxV6tibuP1wa3RUMzJgeg1cNCGCxZnBqgG2jfjE82QcxrXNmwMaeJ9Nv",
  "key13": "5pk7ecaGU6uw6JfDz23CkX1Roy4MzFk16bHqiqC4rxvwCe5t7RsCQYHyin6vjCT9BdrjE3BfGKCkqdD1r27wNAsk",
  "key14": "79SkKL7V91sKwwSiQLoh7L9gJxg9pFZVQ5Tf3w4Jwmr2hT7D7yjtuXnZqK8uZEY3uEzYALTYHz5j8EXgt4bGJTt",
  "key15": "5JdpZPsiutVddrGMT5Ej9sFaHRPiyG9BGJyAwqe3aE3U3rWKN2w4XgvfYYBJxgmjgXT8RpUWCiRBoAGiHSUcEBXX",
  "key16": "5b4w76hdhZn39jF3nEJkvRW3WViedJkZEXjCK3193zwycEypNkLSaS1pU7oNsYKgBoUnhVVJAUCpUWutzGyub5Ez",
  "key17": "2hyZViRrxKEF2TDhYrv1wi5JkxfQ1n4j1vqjqNdhYSCiEUbecfgY4A37PwrGxF2224buFpDWTuPRfWhM9W1oE9P",
  "key18": "4xKVeusvZidCzm1Z4auzLHF4TWuNEo3nxoCL6VjgSXjyF4H12fcKSZBcsFkz4por2vq3cWgPQv9KzpVd328bDyaA",
  "key19": "3tTvJSQNkhri9PiLt7iFtgijBtFZ18eX4K48mfewjxES5rbPGY41aXwFS527Fo8HjmUQpVmpw54j9fH5XJkGEDRx",
  "key20": "5XFfjKQrJQ5uKvidRp5uK8GuQej3mj9xJnVdRQJ5xYuHerMkkp4cbBmef2kBqwERQpMVBCoMFJabKdKxrZ8NAo41",
  "key21": "2sNcUbUXMdmHjczm7aJEWWA8Kh9GWv8SXz3hJRtrxTKV4aQScKsT4evuTap1smYLr4KP5UcwsPwUkEWVJiPrvW2z",
  "key22": "twq7csFwPfKk7eq9BpXoaeiLRmtLWKBsFEJgFFcXGADmvGRXfa9KxiucVzCYSZspYnYohkR8rzK3xY51zC9Q5em",
  "key23": "P5rqEx3UJNpnuLQoHe8yBqzXmRXhR654DTkhmyGNweuCvnK2z4QkCEvj2pjtDPgXR17A8DXg9R2Q78dymqoNs8U",
  "key24": "2R1H6cQVVjGCFEVkyLv5LqArEeHSw8A36xSTVQjBhjHgLK9Mf2u4gs2cMCUrRfv7Fo2w3V9L4MJe3qAdMn2aQcKN",
  "key25": "5SGqfvEgsvsPetnLC3zHPExsVMQZjE8eezrpuXJBeyhLrgHimAyJUqwrqYk2BrgmgHhJjh45VVttowJwP2jWxpJ4",
  "key26": "4hhy4J1Tq1ocEURPY2WmSyL6iZf7uMQEQefGNpaFhFuJLE9yNDFEuBHR59KL3NuXaDxvscz4z4u6zjZhyHkrjfh3",
  "key27": "4STkiTWTiovS4KUVHnaKhuf4bPtQoJYiKVdX89aJLdw7t6rhdDp5eaT8rYpGdXkGBDmawQao9cADK5caBmS5V1mY",
  "key28": "28YDwJ7k5PYAMagWDQALva7CSYMSbipTna26ZZrTDxC4Mb41RnBBGkWP6DxyUeVZ1HRbTvc5gu1mHdK8z2WWCu5i",
  "key29": "4gvbSxs1Wt9Bj8pydUjoWLLHPYt9Wkr7pzSyuWmrPiWXDxadpUTzZspL5fcN6n5aF2YVU1XPfNZXZCvL1dxYSXGL",
  "key30": "F8dU4Mx44VWvUu2DTmwR2iXqRqSUb7pbyCxWyKw2E3QLftUqVc1TnXwrvGcorRvG6QBCVgUxvkM4HqgrfhNta3z",
  "key31": "2kAHqStQngLhH92YLJ86hyAbgtYJexRUAKG4xoLHeAzJCCKXQXkfo86u1Sxkd8Sa9KMt2HTjrnBqpZjyjrzqeLn2",
  "key32": "5c5dMhNkNZUxNEXzX1CFMXkbhSW4k7X47eGjLaA7BhFdH68rU8pxheB1CYAeHRWTMT9W6cTsciZhz5CM6jr5ihx9",
  "key33": "3fwM55TAvffsN7xpUAv4m45mKjosXWvTsfiyG2izdv5BU2QZJS88yQs1SvNHY2uSmDCQq8iwiVdZdrBuyVsyHsUN",
  "key34": "3p2sfqzxhZ4HSSLV8i7g4t4DEi1dtpqsqMpY3xyA3ytZh5VKRQiRiEGgbVbu6gUDzFEECyXB7t2DDfU8mpFV1pY7",
  "key35": "xfFegRXUa3AQBZpthwPzMFVr4ANvaA7EAiugCeKgxXTg21dUGQEWZeEkB1RpTyQHe5EEH75FTotoZmGcerX7CLo",
  "key36": "4N5ptDjYSWk7esWV7biyDfrjGeEdooB15icvvrPtouLzbB5BS4G1YCWWJVh4WyGaA2MG1ChJKZtLGTu2io7MTeoZ",
  "key37": "5GeRjq9GSJMrb5v8Vp14eC42zFCgwDpAZMLHpmCThc3kruKyuB7s1gUPrhUwV5ZaY5mBY6rm57yrde2mUC1QxgJE",
  "key38": "3ZmaSVukqeSkWUoDGt3ABTPcunhN3FNPS3JhpaoiPird7VoYf3P58DuJfu1ovEsdKFtChQ7AA68MsBAD7aknPVfd",
  "key39": "ehzR7KrXxP1hqPKHUK3EDbxB2eedksr4NtP4ZDxRr7QWDgqTNoaetdh9Ghj8EFtZ6UrWmax4A3a8J7EZYXvhBEN",
  "key40": "2G6Z2NtQt6cQtH7Y1vuDcUBBmFGymUNidedcvigDzWJWGZ4pmqcx4ETKcvGWdz63X2SbEEdnKQTREmG4fCV51o79",
  "key41": "59v6BbGAaUQgAotwNHeRi8svmw1Dq2vHaJCC1Kzm769oGWTXKfwwZdWjiav4FM6qsv6N7TGkh5uiG2tpxusRfC3y",
  "key42": "5pmAD8mZvYfSyE8Edq8LMHiafw4jQXZuhsrQsQe6GGy7ffvDqjkVvqVDrqpjMwaCjwaqy55QwcMJGNqt9Rk3Np6n",
  "key43": "N4AHjf4izHocCvpyfw1WAqNH7d4cXfyqtCrz98JWvQ8kGpZvao3Yh6JvkDPzmdSrEetVsYBzGwyd5sSKehiK1Pr",
  "key44": "219SRCMtvun5tJr9v7A5jYDAgWqqig1g9gfYEbYqUATNkTAzDq16oWsSBjnw9ndCNaZUmAzDwRBWqNkDKGvsTmDq",
  "key45": "KpG2yQyvsP28RQYbkQkm4AvufwV4u4PKPiD4sFyHraBpi6CNkmSm4qr1g5NDjWchorz3T732yBaEvMSjxCFnBon",
  "key46": "2WUav2abSSzEVeG3KvQeB77ZFwzhhdYYb85GMPQtzq2iWXJDuVT9WiVjaXqzFxDmwsLfdgwZk1Rgt2MhBVGgAsn1",
  "key47": "5mjE5FMfExM8G9BhWtsJSctYanno98nrksyUqiE8R8xTGAiTxsq91A6WpmQebojtPc7ohfSM3jZ4Ycbocgb1hK39",
  "key48": "5CEAu2Ah8qXez7ksUf4uV6H9HxSHZZjfdnDrzNDdiMaz4s63TLBbG5yxpSkmiuQwmoutDbf4xRYc1YC9fBAC6au"
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
