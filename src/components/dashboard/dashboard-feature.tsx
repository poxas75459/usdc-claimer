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
    "2QUpKh4cHrnBMeATFbtYYfUfWKDFAHeaYnzX4EXZwsiDfRKEvaUuNN5QY6X83FQA1eWRhX7bKmdXsqk2b2e7siAy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yJcGK4pWaUtXrLQViF9uoSGSpAScqFfmAkVgLZTa9TycYZrLysSiym4wz8pPiHMz9gUu5mcsDciLP9bhZ5xMdL1",
  "key1": "GL5QaWTJZ84VYTNpaGwAAeDz6UYWSqmWigjstvu5CYAoXmPjgAftnoRCPGet4ubRMJs7gZG4iYLTNvroBjzC16V",
  "key2": "3xjvxt8dMLzr6HjCH6vQUjSFLbVCkr8avdkknK58dssjju2XTQV5xbTTdQEQyUvo28zwaDQbCkTX9w21FYUmMDLi",
  "key3": "5n8CtAtV7kJMGcZqg4byfn3GZsdMukXk9HMszy2xWSWFPmGg3fSGnsjEx5JH18fiGx4eFcGFM9zB5f4U59yCsnbE",
  "key4": "4Lxr5EjNyLPyB1ZS2WdL3MMFKJ852uycwXbMQAVtH9cosPLLG9ncdxXw7x7RXTN92wSgzwJ8tmc9cqUHFxjAgxyG",
  "key5": "3bUrpGmyAisvidzYbzYXsTMChXy1oZBjPsv9sEx1Q8JEzyY4E7JyAPjywR2M39eai8Y8o9UAfYFkYVR6fT5mbwbY",
  "key6": "2sYkJzmtSpa3cHhFAjNrMEFEv7ks73ippX2LTn1MELUWRQeueVMNsJ1eoVE9Su1P4JVirK4H4ebjbjsqf19y2t4C",
  "key7": "4RFMf6yHRb29p3dhSsjpUT5Q4kTxuoqLQgATimwYhiqxUQCCEgAHpNghqLbCW4sqhiPVjHNWUAdKf49rQsuffddH",
  "key8": "4k29gBYaWDxGzk4P1nWxDi2r8sy2ow7YNxvVJRw4r5NiBbbM1XsRwpGn7eAcJ6Gkor57UVYT7RpBeX32HmBJLRC7",
  "key9": "251yKRTMCqdqN96HaDRmD2uAEumi2C3QN65zzni3SHw97Rk9s6PYeGKX2tcdHCayigrxfrUSeU49e2mFkWr2UqZu",
  "key10": "3gfXLpCGCrsxK1txRaAU9NvkZBKCYYD535wVUW4AF4o85cximznqFpg7XLvRt4QsmbaMm8U25VxvkRoxY8R6W6xh",
  "key11": "64K3AnR38JcbBvqFNsZ64qGkpJZShYs4u9fLG7kBiG7dWrniDWsvaizuh3JLXEAq25QDuoL3gJNzMFH3sfqPm19G",
  "key12": "3uvAGfCvzJiVV19FpWUXa2Yb1qbNtMUfGRHTtffUxKihbUkPD8bR6dUBfuUgS7JsEecMKF5Toz4XMChedBPpPKwn",
  "key13": "e5Wnze4pfsEgY9xpaE4PK2PCPdbNHwUcWBEJLG3MVRy7wV6DUQ7LqZgE56gnk9Re2sYJdixkHN4jtL97Q8cKWxD",
  "key14": "5puiFVLrWmEdB2SR7DTKrJSTuoMWeXr7ju3avqrGY4r8SeGGLRbgTnTEq23PDAaok7EicrSrB8yhjfHYoydc2mk4",
  "key15": "3snwRmc5VYpQyArh1H9sbEvarp6XUjCfJydf7NCCkqKpzSaF47Kd9mqDXUnwBccJjUAZUS2yNnVeMTwDxTj56kLv",
  "key16": "w4k44zmqX4mEEeGezToR4AxWFn2US68P9tSz8ukta5zHw7yX2F8L8D66ypxQsUeJTSFseRJMhXoqVuFqfogSQDh",
  "key17": "2ze7EjrG8H7CSrASxouV4H3Vnc9B1fZcuxbLYxuUWgNzeGxUsx5sZLJrQnHh429ZjbTx4HwnmfALa2ZHr1w6d6hi",
  "key18": "Nm8eyYgQ1GA6vWhMxkFfegmjdWxvjTdGUKZU4DR5Nf3VQNkLddKnYn2hPDas5ZRqeySrw2UPMJ3z3oEnzXF2s4e",
  "key19": "mTAXHTLwhTNAJfmKs1mycaVG6fU5mNXKiNXwCc4zkysyJeNui6PCpAz1GXmvLoN1TryuxUTnePEejcM1JxdQAcJ",
  "key20": "t5e1YbLWz7Ewvn9b9rrCNACydmomKovM5hU2wvERQGQeNj9vmYtNSxmoBiZNtMCEKJkJBnszCfR1fxmM81Dc7Jo",
  "key21": "aA6CS4BFZR8ewfWRt8xm9nHqNS4twvka3WEE59tZicFsjZRGitxJwJChSXxXCwSQWtY77S4vNJE1YP2zYoKiFXG",
  "key22": "4WAkjQheW1ZpVNEJDcMYnLQhmbxCcCL2mXRUxaagQeagzqoezpum8EMF4eeGWbCfKBmPrqTE8rCPNk558n2PN26m",
  "key23": "4UPNg9ydTZGRxE4ow4ouFFGPi4Zj34YQvS9g5gWWq7Nq6Kd5LsXPVPK252K1v1M5Jp5r1UU5UHAGccrVZaVZcy3w",
  "key24": "DddYgp8ZbhLQ51owHTTqPzVtpdk4X1bPz9j4fptns54JBhGSYbeAe1fAk8e94hjDjjhEvKtTiiStTpjz4oUrE7U",
  "key25": "43bcj4TfWdCpz24SSnwATp8d3trtxFedn4vk6QWNH5sPvj7UurByNq9bXSZHMXk7U19dStKsbADKroJ1NJdGrmLx",
  "key26": "4S8xJU1KoEersoXWnVa7SihYjhcZSt14dkGHNRg2uHdFkqYFa7WY3L1MLqq4h3Td3ax5zSTXpoMRECXeWg2PNhs8",
  "key27": "4JR25nkixzm2u6UL3ArZQ9GHe8XMSm5qmMSc6RuLdBUGsp5yGu4oG7uZA9kdWRzhiXG3Ez378k1vJ6TNMWrMph5G",
  "key28": "BnNn1XZ6MLMeewfhg7mbMy5Hbg2PbSsgPz4YeZn93GpgjRpzDHFKh7y2s8teThH3dap1ohQd5xefy51yJfVoNCe",
  "key29": "5bCwq1rppY8ngZQ5Jy2NmhfJcpB1iVjcMvsbMGMNyivq5LiVGJ23WVedcjRxPM3dVi8qXX7yaxjCQBa7UbtLSXo6",
  "key30": "5K1p1TSx2CiY7qkd9aEqqyK1goSnXiLecnR51S8UqZSodJFK26Cu4tBCrarpdHSecPCtmkujUnrGxMyELWLbF2nP",
  "key31": "jcY9Jfw6qNTByi61iujE45Zcfy9jEBNfwn7J1wcwyUuQSwQ83nEyw9qgqnw7wRgxoGx7SCXPzxeRQ6qS6gzZ6Wi",
  "key32": "3YsD4WvwnKAVzcvyFPEUEXew18bkbm1nf5Rkn2oJBfTQMrPzXivkcrHtoh1Le6mhz8njeVyAFqEwX7SZAVpyprYn",
  "key33": "5Y9kqsrYsWrAXerX6ppPuV7Y2Q8Qx2VAtSxAWqQFCQj73tqz3M6Zqg9pefwLARK2fhfDWSaoyAPbiVqSwjXVazqE",
  "key34": "3HZhAUCB5cddqQ2BLSQNvBN9ZWxbYPf1zvtgs922JAJNQ1hPYjekK5bMYFcgCZiPyuYeJ8fWNEtTFyjzD2eVnJJS",
  "key35": "2Hz95WiaQDcX5LqbUH8mVxfnLDkUAyCgkumXyL3VbZ8ASMwoupfUapShVGuasATwfp4Sy9PHLzQvJseNpeUk2xdn"
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
