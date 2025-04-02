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
    "2ThVfQPRdiimc5vDJf9224fJrUv69N1iErwN2Fb1e9GZriUqi61mYC9p3JvXkQREx6Q5DuSXHdzr6drDkapUmDK2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65oJRXds5uHbPgz93HdNKNDSh9RaomSDAp8SYprxsfkcc3PAPFUcJcQSgSB1G5a5qxpJAiscjeiFMXV4CEKowqQr",
  "key1": "2n1bDJBGGQDfG3qUdh1PM7VAQzsuhMx3ZSisqK5X7ayeeUPK1KrJefFTSaMwqXieRtdEyg3JYFQPv3tYTv5NP4pD",
  "key2": "5xfJqgeA5rmp9G1vEiogsec1kJoaM2TsohDkMFMDBd9DEPMEmEY7MUMwJiujxaMfFoPD7i5fPosKNcYD5T8mxvBf",
  "key3": "Tt2MDy4yJLPc3RYcAQo2QV9kezbdpmznGdL2hcuaRijY4Cka13iW9W7r4icyTK9XCLzSockrVusqmtk21gkNzAz",
  "key4": "H3UgnWoRLCu3ksJ96S7woFnAzPia12zWuL13agTnP3Yqhp3ygcc6GQMgAqBq2esmP9VpXQVMDwocbwH2nEXhgFx",
  "key5": "5zeSyEW2iZK9HFWbVvmoJkTrJk6Gp8ng72VYTgBiBpP4XJBrbbYmkkBv3wN7szD9C41fc6U77tk1qSv5bZBu95o",
  "key6": "3bQoBnBcXFr4ZVcMjUP66n2AeZScjtUwg4ve64oEkpF9nsHbZWy4pgEtmY6ka91z3QGLxnYSeL4h5uLnRbU1bWbm",
  "key7": "2AXeBu3oARAyPD4wNQusZxACuVEPJR9mg8TNmbJpxkQxw9B4k3TyWwc6uRJ8uhv91XqME2UVxDwAQB5raVHANY4K",
  "key8": "2M6kkvC76jVqEpSxkKj2LatrGe2FpA5mfkRip2aBZpphaBNuvVGR5LptVx6tkNQkR1mT5BydMeBsQ3zLoudrW2NK",
  "key9": "5PCoFYWRxyFwKKGdMM1Vwk8QVP2kZu9zQ2Ygs2rPzjdUYTdTTbWqZAzcDWELVqJxXKyezz7nzpnjdnmLwipKXG86",
  "key10": "66N4go9fbje9NU3hdZWv8FdSz35izCMu6sWe3dh1k2rRuFwPwHmJ98TpnrbyWriXA1MvM7bA7ZWiaCj2GW67FvUW",
  "key11": "3yGdmpj29G2zDFEygFZhgJseoHKbKHrqmR5dKHBGhB7SeN7Q2LgWMcUhB6YdFcw1jXjtiRsvHtkPXJ5ZudeQNRP1",
  "key12": "MdGnSeFjV5XJx1AhyaJ23eGwUkewDrLhczSqqT1X1SV9huLsnXqJ9JmUVPrYYxqxDR3bbRhNukPJAGa1rNfASGY",
  "key13": "TgmqWxCpTHWo5zLQLtFA52HBDP71P5xWAfrKsaWffQKATAGVzCtbnMHjGbqiSBL8nQMhCa58ozgDR9AYJiMjqHm",
  "key14": "5kvedzsWt3kodL38AyzkBggbMbCVM5aTie85gp6cGrTKKLDypTzjMy5AET67GDwtuFfiDWbj849qjHqT3RG1cwJ3",
  "key15": "5hrzQhDm6o5D4D1NzJuXTeyVDSQMLfFWsh47pywcvDsXfwxfH2iSiUghC1eRKRXTrrinTjZWVqg8KDyxo421YT8B",
  "key16": "hi8VMWBMSRLMKiYGPnZpFu5eG8JezRw6ucQoskWDw5kS5oF6uLsqh3TV6b85zGPzoDcRuCNwUWwQdsT9Hafb3wF",
  "key17": "53tP4WS2NwP8MrchLuM3NS9fvP3YHpHSpTTZVyM3PQmcasHQG1apaLBgMAwgdtLirD58bKh73G9WHy1CPqTpKJrJ",
  "key18": "533GFEhbVLPAP1Z7M7CnNcor3BEGvkj9QfwN4BwMNDPBLc4mUTXDpBqGbhfT3VSCK7CKbYERGXwDU6QDxNwf92kX",
  "key19": "xJf1s9fKzYcEXaoLgsPXJ2p2Q4kNSze4AMoZX2bYN6Krn1MSDWYNa4QQG1BPMi6Zh2DJMKUWjgzD78cFdMjYnMG",
  "key20": "4TaTpK7jJvssMMoXtLt7MvjsawrTENu7gcxZBVuDX4j4Yc9S7sDfJtdR2eExBZxg9E9Nn8eBdq4Y8xz5GmN58EdY",
  "key21": "3e97s3C6qAJstEyMVp4nRePArQyZtyYtCgv7USppguwo73ku8fepV2GXNXWu43hB2rNQ9FRdyiBKBgeHXtsjLrmF",
  "key22": "2e5WWp8Zy9zwzW1Gw1hyE2AMvuYueDEwUTUPpWtz6avrMKXa2Mv1CAi7AXf4GKQVawJGqQjD2RZnHy1ops4a9rRT",
  "key23": "29e4meB7TrbMJberSrtpNif4465LAAuoCEx8gCu4uJ7tCt7zq9Fj25XhjyuLjM9cfnRzYJWQaj2EPGbuWxXTTPrF",
  "key24": "3UV1gmuVoADFPGJEhb4hiPceNykULLLMUAjGHVGwZXqH7d22WDReaUX8yJHyGHMeMuSN6QR4cCUb4fWNnDHqyVx5",
  "key25": "2YQjPoy4GwWrGJmwpXFXyA7zyDa3fNFCmWGFgMqUGpuVmNjDaNeBbC8AioarQwBAs5Kk9RuGbUTUHY4c27Gvg4eP",
  "key26": "3QFZ6RikihPgnTbV2sE37LPeQjEyiJzf4azFMFweNwmWTN4XJs8SY4YroUmxfEMohmh2myPNZ2qMU8do5FoChnf7",
  "key27": "2464x3jPPiZjSD6vpRS293MnDfJSUiBsyvfLRkxPCsLyJHPAGS71WNVoWZ5B3AidprZWQYGGBVRDcj7tBU6yLRTZ",
  "key28": "cqY2XMszUekSYzjh1qJm9jNw8g2rBRC5RXbdTvBuccW8pNwwCe9pq3wPXrL4ycSZiaN2gs4wP7Fp7eKiSirtGzy",
  "key29": "pRtzYQmBH9wPavcHpreTJ69p54JCvdJzyPSDuTjNHDdhjRgeX8tLaZCHmEozzHPXvWbCoQAUveVGEPGLyEmKfCU",
  "key30": "3evKbkuKshf7R1CJ5z14NQaoSqYEVJMpKHFKC75JrigSJp24Sg3AHq5BGUbmkkRhqXmzTHBMQGiCsvwpWQmWQxsu",
  "key31": "WwAvqEkEr8kGVRBHYUXP4p2nYp3okd57V2YaUMmu3To8d4NQtsGaTMZVBFNp2f33M8KDYk844geY8vRxy4eetFZ",
  "key32": "5gb5nJz3S1iBX8gTXME7FtPZK26XyZU5kx9qUT8zoXNDerZ8RKghLwv1hiXCQ9Tk94FJBhYPBneKnfmjw1kq9WzQ",
  "key33": "4F5v9h1bkdZvFB7iUuznBWVzvF4op3AibgdkhLPZfcwEbumquVKZRuHmez8gA2WZ4gPei8edu6hHTkMSGGaACtWN",
  "key34": "6weHUZ6HGuA4SXxNnx1w9XCvFy7VXRow29Ua2Gf7VtC2YcAQfBQD6nBGU9QQbj2zPGxaoMyw5XqMEJCLWzfvkxw",
  "key35": "2eDHrczNH6ivwQach5pBztuUq8baTv2n4VsgfUMhUANfFVdfDkj1m9yE9cRGNwBg1sfqvQ7ScviJ3L3skdvdeZX2",
  "key36": "5ah5ehNo9jFphSvdXAZWwTDgLCvYP3YLuQhhRf5oumShwn7bd2oynNressisvBcQsDr97gSpYaBh36jy14S3dWmi",
  "key37": "5K5kSD7Sgo3bphDYuvJizVyRBot1KaAsUNCV42F1c6VBXnYPnTmdtBLZ88y6vdhSbiHDEcRpsfinjCARao4PV2Lb",
  "key38": "CgFAoLXQ1PYY1PH6mqJMaC8zHaS61wBXPFbaDdwW7dyurBTmeZ2TDdw7aFzfvtTYGyyYAQ3Cboj5VK6GFVBcqbp",
  "key39": "56LHSBYSiCyUBnfEdYMYs1Lq4LLY5BF9K2Vz7rNjaf9eu3tfythvA6BQhrV2ki8Zkk6MiFdWTQKY423EPzb9Pz1K",
  "key40": "2uAoscD6n4cPQkgmv3WtMvAEWqquQ59gJAaXM6UkgQRgkkrDq8bMBftVXGwhd4uFUgE8nETZmHwW9JtLiZMkTboW",
  "key41": "28wUEt1vSpwgVDyVfb6kvUhu7p8JST5tru2DeVSi7YDpMCdBWkRq1icHdBRbVZyyZ7B2EuDDi14WR8GuDJa6akAC",
  "key42": "3PzP7yEXX2RrdaUTSrig8CtHbu6KZ9d7oMG6fshEvsRkWN9nxbw1rrE7FndCeY4oZhLM9AwiQ4obXLkTZ65k1jSx",
  "key43": "4gniyisL3ZtJqRkZwsSf6MwMgdyzeoPTv4BoixGtpzLwgNMvBQhGTh2duvzy2HpNfwXuNrdWnec83zTpPjeEyXKo"
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
