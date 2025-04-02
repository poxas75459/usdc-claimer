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
    "4XYAw6ZjBfwP3aVsDsj1r39fPU7AEw2YChz1mcpbjU2qo7AL7BWSCBuni7uVABo6Eb6SoarL1YmxAUXZ2gZRxmbq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Bg1waNXsxdx44cD1rTSkXT6Rum7ZVEB5RwYvL42uuiTWNVbWQjWWds8dynshGKpQc1EnKD7R8GVBf9uNN8n5ozc",
  "key1": "5a2DFETZVfE6yaA7pwnpYiWDka7EASgBK68KWw6SYV8g9aZh9WxmrQB6xGobJmmu65N7cEL6EErfrf3821cPfwbZ",
  "key2": "pC9JdiMmaPo9ms9JEYKEsvUeNRUoHD5gp3XB4z9NaHaCwGfk5uH8u1QqnanyC6dcCezv3yC2ax9upn94fdf5c2b",
  "key3": "DcdXyzVtvAjKxys3ppTtxhfy9UJR71aoRF9FmxwRPzb6o48M4RHpkDE6tpDytBe9mifwJYS1rd5AqR5yd4uVUKq",
  "key4": "3y8sHEe8uq9s6K1iSxQM35gZotys9ancoAksaCLXQqFKNzCzwDoXmQJN1J7R7apFfFQtBqrbXbSTMEQqNnrBTYLy",
  "key5": "3sgoXh3rtZx2eAzUPBJPLg7rLNnV2nMvecVaf77zfr4LC5rVWUzDvHSmh2kcHtSyvXX7abk2UkNNWj3bBxuQyFmu",
  "key6": "5JXuw6DzZwXKAhYppxz66tZnVLDuLjy1AVrMUNipqPfqW1k4zjKvRvaVNaYgMNkFYHBgwj4UhP8Vf7G1Xu6ozB8L",
  "key7": "4CBpgsQV7FRA3EQ6m54HJpR1CkQYxK6NBiDGcTkwmP1WJRxF4dz7CHxstk91qTqgx2tZBsw6zNmN1m8dGJ4LNG29",
  "key8": "bQhxP85MQj74EaHFRi6JukzhAW2LoAnV4phuMM9B7sD3g3CQ3H94MqyRgCwwD8PWhtDhBQjqgH7eEEAy3u2MrHC",
  "key9": "43Cis8C5bkUp35TPWrYkR1Z7jZzfm3f233rNXaKUcS8MWy8MYovhHtuxvf3MpSVDJ8KdcrSmfjMrAqrbq6V4Hr4x",
  "key10": "4tnQcLpeUWNhKEvQrTjQjXSf8HFZf87LiXsnqG9uV9jDqMQpHWkkYCPE1VfQY6G52Z2Rmwr9QzC9NgKZsQWf2mUX",
  "key11": "2JRhLL3KApMpUHvtEzTXV7mCL1DTi9VXgrFxqmDQHo6ovK9VaQ5FJuNHLjkaEZC7KoTt1PnJaZuR38CUDxreoy3L",
  "key12": "3jeVuCa5xW6P2QnbcTbBRqyPGf4s3e9EzXZADK6UXuZ6madwNdrGT5GXbXM4MxnCv93ZQdrfcFfaJsDs7CA6MeBD",
  "key13": "QU1qL4oc55BnW4o3irYmmRfehiDLKD8vEtDXiMZArr2EAEegq57r3uE2Hk36Y8KSPuf3DW1p9sJJ14hvrEyBw1b",
  "key14": "2PmHKR8gvTN56a8aBkEaQT5J4r2akr1ZXszNMNJwZScZp9uPSCttbheA5LcGgUY8nosG4kiMVEoZDUrqDbSJZnE3",
  "key15": "4stpgFRQKoYz5g2ikLBsSjrbafG3BGQNmh6grqq2htBRo1wVUcTBCbmbPbq1SAdTVkiuHdpv1zARQYkAkSEM8zY8",
  "key16": "Q9xnF5KDnaxZJHpzCWfjXGuUD9Pwbp41MdLmzCLMekgiNQz49j1MDkpyPybXbcEK61ijx1iVRBs6XABykhcZhNe",
  "key17": "5RQfhRkmmHHi42GzMBtcASN3ujhQxL25FKbRajXVufo9Kf3uBxF8e3XiyWEZ7Fkmg88zQEsw9NdHtn4s3JXB3SJU",
  "key18": "3wnmcArxQaQLaAgDWpztYJWFaVGNSjdi8fgDANzPJq1YBAonwdPi22br4w8KaNVMWDd2ARcNmU1EXFhSoX1ji7VX",
  "key19": "4pcGddK2sybNYm6AkBjxRrKxiCNCSq6j4YyYjgw8KrAM1pRvvTawoDaSNJYUWv6te2jjpTLhE62xvPhNnFZycVZX",
  "key20": "5BD9V6tqdCPfcSAPf42gyPtDhzraD9BCpYW3buC6wwAqCabHGSBW68K7ba1VY7fZccG9ZP2puPsPDPtE4vM9Qs8e",
  "key21": "4nCyLhh6sX7fpNrNt8J1Xrei8Ef3Dw9LenTvpwkgcgfmki3pYAwT7r5Lz2pJfHGNo1fHcUCypJpgtQqevXxhAchW",
  "key22": "2F8UknLFBYY8tdHyryCFz1w7iQWsEJLk3seR2EZDMsZjeWYz4hZVYV7C7AtaeomtJodYMnw26acWbSQYNo64pqHt",
  "key23": "2fq1EsvwkxtRL3zPWujX8o2RQz5VjtzXT8bFs11hZu8pmz3J7djHpzgmWUBiCQuMTXtXc8Hh4JsHN5jQtXcvzfrp",
  "key24": "2HmypSY3ZVaBRLk2MsDuWCqLTwEi7hjfitLTrdSDRGVPVhSM3tUbVbPYMK4RHpcwfeJodtWr1hwdyFXjD2KmQgaX",
  "key25": "5WhDs2D6w96He2PpVA3pdjUSsET9agpUPYitMFbwzg2mwRdUnphDLuRqNkH2C7M9VGBwF2JenRfq3MU3dwWZdnwr",
  "key26": "5RJa7YYQx1Mc3BiKswoVRRTM8pbXsHP849fkq9F7dW8iZbhBoqskLN9GeMXqXz6fLC7FKqqDPzuvrMBehQvpo2aA",
  "key27": "wkVDn6FP8WPFK9PdZrqJ5EBZrthehUsaPRvGRg5vXbrXp2Xmsy4YfGva27W5xyY1GXyKe1y7niZc1wLK6ihx25p",
  "key28": "2FJ4P8zcY1szJSVz4weqRACBmQx82S4aL1p3ZjN1VZ29CUWbWH6936YiHSMYGcGWBCcLxY4L3HCD216wo2vpYc2k",
  "key29": "ue4FP5q6nhjwWtsh6gKCBerXj5qH45ECRWnGpykw6RfTKNew3pvaXjDauiwxsKJmyGk2LAz1Pb67F4iyYFJra6H",
  "key30": "43TacQV8A3pStiAHopb9eQeMd4n6gnvf7aWrTpt15HZbuUuZNvT6sJziW9vg42nnCqVVMu5bpPYPjZh3NqYAe6za",
  "key31": "YiCQEFiBguxnvAksm8RuNy2vYaJ99GZ7riRPBvUdZdS6Mp9cEBw7EAdB8w2MhXJNcXWjtLMjLy2WtZN8bcymWdE",
  "key32": "2eXm7gzfsBTXMwXhQ3i28QZnFEzqBR61YspfoziGzKJZfE2LFqAQ6McirzyNx3JZ1vM7CjXfrT7bumbzv2VfirEL",
  "key33": "4j2EHYDJAv8ZFjdheY9T4pMEipwdbM3JVQr2icWFBbLNo6GKcaMvANqWJGFVBvqqut5Z5ypp2VaC9SfujoU1t2Qn",
  "key34": "4nBWGn279XYQo7mv5Ng3ux35gWpMiF6smaaJSq8hjUVoprzUeJGp9evAXD5ZaTwuoZEiEpgZnG9eGK59xoo8mSiB",
  "key35": "5LamwPUsEyc3nBMKBQQjrTBjUb5QntR43Fo6eA988ERgNw7L2hjt4pqZsCoUzHH9opt6ZX35GZoFfs6GteT7Q9Cp",
  "key36": "3WFwUS7X8A7vCwd27deW8qFUErVR4irRvvkQorh8ZVZ9DZFYfCMeUAGoFnUCFiSsgfJ1FsZQjY31i7qyQoCPfrsR",
  "key37": "3agiKwSsc95VEhgvqzqSYJhqU8E4MALxhMibiM5JTVFGs8vDZsuNf5pfwBRvXx7cSgXkVEjhSn1TQyD7NHQ61dzv",
  "key38": "7kuYGXCg3igghQziLPXC7isfKaBiUi8qMzxxCkTgb3g9rsZgNZbvuXoAwu3iuRPkqDydGGMExe1CQivnE22p11k",
  "key39": "x9mNEBGC8oPcX5WDs4jKgWNDZqbn3GxVx1qSZhmqxiZM5F9VkJPVk4ca3ZEy9cRdoZhD5GuPkA4LeNK5TnszAe5"
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
