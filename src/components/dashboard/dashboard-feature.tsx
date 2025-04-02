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
    "4MwzJSzQqwJM4rpU9NB9GvkG4jTHaR57TNTGo6QRyqGERZwmKL7zvM9mQLPtE5vpvN1UrbkcyD1rF9HEjwVWCEBV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2obbh5GeGrR5zwetkqY1jD9uNzu6fAdNYbPPg1Vwzo8wjWHcKmWCUjg2ipKdtNcWSydFnmwafp6N1nXoSy6RSo9T",
  "key1": "62pVHYkuLHnXS5ymaSZJ1QS9QPmNehtSCdd8EqPNBs24oa6D27kKkoNXMN7SGg32cjyXZStX154yH5HuTW7zNTGS",
  "key2": "3SNqPBagDS31b73qU9ENbaLdWe8vYUDxLKPxnzboR3QD8cjAt9Lo7DA2bdLomKbYcakGwFKM512HQR7TtCPhFjuN",
  "key3": "2xWF5xitQoUXAk9Wzf9pNJbcrHMY8dvdz9ZH1BG1bUZWxxw5XmYSN4xJJWsidMLHBD8xo8oxWc2q2jHLpBwAiWvx",
  "key4": "tmiMPhAy8xa3B2j4VuPtw8wwp5q85Q3Z25cEh1rd6Afs7JMhf1aHE8WxyQFPYDpjRqJGEzj4628JdCs3on7sdwm",
  "key5": "3DcTBUbjp7jb9bKLcPFTM8m9ekUDMtVmdYJUmguRs5Bys4kJwaAxWzWoGJMFkuLMgEwHUNrRer1VU4P1m7mBB26h",
  "key6": "2RButBY6TZZPWoGnjL9c3qi1qPkHRfugeAr99qVXqCm5RxRdwvgzbvTG8RqLu9uwsYpxvtefL2HXTMY9zqnfsCsW",
  "key7": "53FvXXY3Rh731omBJq2KVZDUnYFhZmm6aupeXoaP2qLs5WskpP4oyZB9jS4UopG19MHT4HWFSvxETmTooFWCQRQn",
  "key8": "2pmBdtCpKPW2A5UXs8bhnprMgidMXTY6dJ7b4DDLobxMcC7Loz2Zb9WF8BseX1L6TGiAw6TtKqsC7MieJrdc5Z6F",
  "key9": "3fgjxeJ6TrG3CCAcHQSwnDaBTeP8HGY5nYF3LuHc45MgvG8ZNBKb2cbDEsAWhNg7Z6At2FdgF4rjznRJgpnknvL1",
  "key10": "4XgqfYzBB9qUKJAY4WUHMH2pXYJfoTF2d3TbFeQ9hXqnAUXB66bDWh8btfGtGSZ9qj5PLKPZdsVAFPsDemuWHQ9c",
  "key11": "461yYZe2HwKXpni95NTMFJqfwuzDioN1zk7X1hHiRcAR7x1agGWMF5guy1eV7kLBE4ry1dusAzKyfdpzfH2yz1rX",
  "key12": "2Jyi6DG2HWMcBQiYGuWrjPMr9N8DQ4fRxfZBpiFk6HmBwMTfoesv2tpMRAdXw7XhDi1hJ92ERwbpwkDxY8MoVw8x",
  "key13": "QNVhxr5EiMVyQ9QPVYm8gFDNYQvVVyMXFGSrqEdUNp1ZQNPYDmUcRGRhVrxHH3HndBNvzAAqVTuLGjMjZX1Rnrm",
  "key14": "2PoYvqHy22dGZyH1W5P7nQgVvoRY8RhKdnaWvw5TaNker2vP9Ye6GjEekLEddRoTDmdDPuDzM3KqCbToCq4ZC5C7",
  "key15": "afrL7ZEjsRWMu9JF2ZbtqSJZkNB5gyH8UbXVyoTdbL6d2TQTR2AKuRHuHX18CmiTXbJb6Nshr4HxVFT5gYmtLDk",
  "key16": "4zvVkk3UmdDaTg4U5DZ15D53qar3zPSouyYH4HcTNGotp2GRmKDARKt2wZPLr4NJynCYJVJYuxtpUvP2E5mdPLp5",
  "key17": "23SPMYDTTyuNZLpdWMUzZbrYfAPRLVPW866kAG9NqhE7MrtDWiVJQi9FQQTsbQd1B4b2xPY9yWEz5ESwM5gaJhom",
  "key18": "5VnZbzZEyd7s6mT9L7LkEitXMBMQm7vTyrk5DVErSjC47AdMSLDWUf92ujiKNLiJGQTz5vxb5JC6aBxFrnULGrFG",
  "key19": "5cYGvRFUdNsBSdWRbddDHrQkkpZrc15RZ3RWu5WVP2UpcNFkTTDbtUxv5vUWpJyLrbx47GhrLc67VJFwBbhA4mcw",
  "key20": "ruKbadDj9ivepMVFQNwEbLvgAoS6n7HWCNtceS2w23CWEKCNnkXBMkRn3ba6E4YUyaEoxv6mr5kxgx4zydMqxuy",
  "key21": "5LBGHQEBAyBBGs6hXRZNE1RbTVsWaFpN8GpqSaUfGsYQmgHkd9ve5HiGjDyy9prqD8YcWBsnuY9AxCxH6zwFZArX",
  "key22": "2mMZuJ6o5GFaDMJDi9xjd4N6fex3ENb9T8VpnZCyiFtagGW4ZYcrrtutDNmX32aisGjbNUrq4Jbnnuruqr9sPuw2",
  "key23": "3x1uKRbG8QSwkhLN9NPCsqcMRceCeRhUJrXn5wvYNnuXH2tHtKkR74qsfUQnX8e2PeS5thqFwvLgZSmhnEXJQVEr",
  "key24": "3fCfGUHkE1qNehGD2QutdrNZvUKcb3b43F6ae319PZS1TM5JzSiskazahnG9Ukgw5GjVq5sGbdharDu43MsRd3Wd",
  "key25": "55yqtcNVYZuxuwMTQ9uhYvr8VRhrvoewgNEiBXMGbaJqwgCSMRXafpNnUnYyGsrd2MMER9BVi13NaCdPZYXehjnG",
  "key26": "4YWApFP1WZknz8exofYi8LDpMrNwLtJCZFSTHH7V4WjC2e3dXMJSV1XQQ7poUDSSA9fcTB6dNiyr63LBqh5D2Ztb",
  "key27": "4hEGiqw7yAxbGPwQsKwn8d7vPuehQcyi4fzLiMbgV3uCh3MPYfFH3wbamek188qtPf62bH5ZVLo81it7gXkDoUkR",
  "key28": "2NzBfhyJiBdQzCDrH8V5DfBZZxgvLEPdfBLyAALaCd3LtvdFxGEVFCKMvPAZLsgM2mFHMCmEosU9A4BWrib75uWh",
  "key29": "4Jh129EGPvJuGkskFtvF5Hpx4h5eouZwAPUD8RQwxDcxuMfntp634YdCTU32bQNZDp15odFbKoRC9YKVwXzMuYsm",
  "key30": "532pap4dK8jf6khttLStVv9Bnu4whtEqf7jyS3JeEczU1EEMfqFkuRLsQeZ6mXcg2to2xg4uGN4NhoewPbGc4QMz",
  "key31": "3dbtnzdDWfoXEysWosRT6CdEeeGLx1VRw85UKdwQGL11EyN2AMRXoyj9XwjEoDcXVzLgyPJKtzJsqoRMB7Rraiw8",
  "key32": "5gAMyBTgUEj6WD2LjvUt7otU3bWgUqryZswsdcCNGgQ9JSX2L8FGcb6czfuZ12uc66oLu8f3jbD5GHocYC6BRmjo",
  "key33": "25DrtHWGz6DAHUuxK6q1o2hbytSSgMRcMG8zFPfcQvQeoQ4js2T9JJ4FEjLXXoiKLrzx9E18ZQcPf6HPPcuztFnr",
  "key34": "25JGu9QLcezAQbNbbnRnZ6fcgm9PBThxYT2XFMZM4yNRrw4CCyTwc4zcXHusiJyDRdpDVdThd9xaNJi7viiEL7QP",
  "key35": "5wiG3319ymqseDz8mVZgm33EEuj2rEcAyDgeeMVTaKDugUYScygAQF9oyh7Fo8kXwCtfDsoDn34GnDaWk2kGB2Ey",
  "key36": "38Gp8DCZZRi99K1Pzrq2fWvPk3KkSEwGnsKcBADQsxymbN3Wchy1YzZi9r3ZTzu5d8AZMsTF8tQSvoEH4ddhpQpK",
  "key37": "297y1qDTwHZ7BGujiFPLGhRoJi414sWLuCF2SB4Y8ezPBWNuqsvmLcf9VjLWq7ceDmnsUpF2AofUBpqn3ELFMzXS",
  "key38": "2shaBNcpGYApz7QPfduVSB4eyaQFKQFBh27tX7TPh8Z6ovZeZACpHhT4i1uFSiMCuuRh76h3KgSFFaUcDunw8GSz",
  "key39": "2wsJGqYAJJ4kWTCNtVpgYecz2PQzXKyunRoMWgbVgQeknhqHQdpcqy6qMLk1LQYPTjkuv6BjHq2F1F9cX3gnQUaM",
  "key40": "4MAihmVs4Fxp5qcL4wKj4VFCJGPW6cWnwBPLdj224JsGHE5BYwPzonq7ZhqyzYyfFqYRPueVNLPa4oCJdy67Desp",
  "key41": "3jaYjmh351pSPDwoS6MxUDA2RcBit2XPgeie9ctZ1ubGFUgRZdd9PU635aURDd68ctLiVHLiv8vtuxkNG4UinkKg",
  "key42": "61mxmdHNgwVksSmKRRDmPtLLkrNpukebDPSgNqgrHG577y5NSoz3ptQRSgDraNuoZ3QkY9zp33N4wqxLa4af6Qvu",
  "key43": "5wW5HP3jydS2rUw5Gzknj7kPdueDJJxFifyTMyWgU1uFLwkAymtt8b3KMH4ZRGJGtugfTeMb8xTJNMQKtWcAC8rG",
  "key44": "2s1zBmqm3GDPi3hXmUeX11FNhKTPRd6fLsQzrsn4P2Qxm1pqSgbuqvypPpg5rcUQcX99bT9oqnPULu8MA5gA2MjQ"
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
