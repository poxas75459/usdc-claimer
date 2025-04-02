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
    "52QaXMK5Ruj7r1UL49XGi2U1WLeq9ERkfK5tBV9iM11CJ6Ycf6etzYwiwe9d82pELQiCe4P92SRS5BTTWo4zoCNJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tnLzoiekcBMgeZovADk2vbMXeLawwWCqShzAfSJtLtpRtmsRsiFvMiVQxaLYb9DKZ3WKEtYQyswxbNMuj58ffoj",
  "key1": "2ddbNjBNwmJ7pwPdGCFG9hBQSUAm8gCDWCnZVbafWJVGb3wB43HWeSL1GsspfsLckQxG8BXLiN4cPbP7F6REwKfy",
  "key2": "5Gv7Tb6x2LshJQdFPn2T8u2WxKiC1uGcEFU32EqeevarYV7VRttkAfcJ9ymh6pKKCycEsPUjhx2UYVTMVpDH7J1y",
  "key3": "vEqQST85szUt9LpaAHLCk9BAezZh7U7py1BLVCZP2ofqKxTXiZF6evvvVjPJz5jweo3jsK8qKhCewnma2W9dbab",
  "key4": "2tLCwfK7pHRJCWssxaWUpUKAW3qb2AvpZK37cMNgJFW4qZteqA4hgLzWhiegraey71v6pwBazJnK1FuGBUbCmzzN",
  "key5": "3EzHjBpV6RJN1DGxGJvHz9BiaE5HA4vKnch3boMoyjy3GK3BnFVnaHTuw3PNvBuCfN6zyVfvYcxP3AadcowQdMeH",
  "key6": "KEbfr2GPe4rymBB6Af97SHCKi4WepA2ziAybhCN3qQGZ3BQiS5YpcLdjoQ8XB25D919qhned19RryYQ2XwmuEvQ",
  "key7": "63DdgKrB2fJeoyytS9HNm8VNhFFydts1qiVSgyRXVrWnTD4s9tuTsbidJHCihMqqZWVEWwkzkVQRH2h3oPmBRe8q",
  "key8": "5nd3Jbh1XACXDcJRgc9qXvK58CGQDkZuYr7kg4soRvpikVZAmmhtnRcjPBx41CX8wXHJMUCMXkRaAypk453MV5ak",
  "key9": "5xuC6KoygueFPXDPueq5jVxzidU4svMCQhkud3uGZd9Au9qnZcoEc2MRstFhZFTYXeGfFMY1454TaBZ3JCX2ewru",
  "key10": "3V7bQweTKiMhzzwdefRNkD7SZyna4WmTycM42uivMWSaQEuRiFWw6khvNxS5NGgQxbFWpBVCvJ5gZin4378pdiQs",
  "key11": "34At1Hdt7QPsFyu4K1dTTT2NTuT3VV1E9XKRhZdww2nrrrd7V8rAsY8Z3Yh8U7jX5eZ9rfqszu2wC2ajaYM4j59L",
  "key12": "5uTDBYQ7zY13nah18Xzm9SbazkXDQoUjvUPUnKuswgMVt6xnHLUnMBcVE4ZTcJjHcgw7KcxLfZ7MqLyVgYD8iX3K",
  "key13": "3UQNTFQD4GJkU9UYuhtmXh1eiTPELASC5FR3FLGGgdj2okdTV3vxeGFSrEki9CTBkvf8hKjBZfPKL8opXMR9aCr",
  "key14": "B4KWmJSriNwYXoXokyz5iHJc8NyQT4jTCvjTayokZUhDfweBhGYWxR3YzYMjYdPvAnbd9MjfdHZj1HqkKuK3BZj",
  "key15": "MQGBVaKW7mn77JqQ7sEWvMYAWsscaw9NEiTq2uXJiXJ96maJswLUSTDnr8jAy3rpbj9jxAgrPLe3eZYfLEi2r1K",
  "key16": "2fewkKcGGZaBMWQkGFhZNwnEwpCawYo8BfcSj1dtE98foZx4g2BY3h6mtTQqHQEoaVB769CPRhh2csCaHFbyhoDy",
  "key17": "4YdVLtMCj7dBVGHjNvGTUoQUMJs8hdkMdE87EqiyzBHiTyTChtYRbVrf9VHsQ2H1DSQpV4Gdi9VzvL8rsmnWCpjT",
  "key18": "3cmUqDDpRK37Yk2coA5ouBVMLzUHUrHsgFB9b61JZoDwuUun9ipWykdkruMxSvcsQp2jhnvN3qNNY6cpQ4QxDxa9",
  "key19": "4oH82Z6wEhvNSqiahmPETiNxJcDmRUCXRUhH7VtM7i2zJUL4r2j411KJHed2bSiFppac7MVZD4TEqcNvRK9u3M69",
  "key20": "Xzq62uwvYoPWAJXeEBtHuBbH5fKGSaS8dn7zu7YJewSyHgm9nCBMvkCECPUMYC3SokxJnmoB4qJ2Wn6WAzcdNu5",
  "key21": "3WkPBRevyk3pt9pb3aHWYLkfouVvbttosav65haQFcbaS4UBrwN8KvsKoeWntHhFNEvQf1kCnQMmoMZEVfzwHqMf",
  "key22": "4UixVZEE7ANyUgV9uuutxSNUnZFYao6nBqf6JpdTovFUHdh62Egn6vfSqgn6rxRYRf314ByXhS2TjoKfQy5Ewyg6",
  "key23": "5kFtqVLarreUdEyyrSy3QuM7RPPSx37B7VnFcu6xgyNvzJa41VWuzv3jcx1SqMHTSmSaJ4jGUBfDDdMXLZ7XqAES",
  "key24": "m2R9jJNgDTUNxXXBHKGn3zaK3EtUsb3C8oLMaHMFJkjhma1wwqWNPycVhsbyt61ucugSWk1shoqX2hAtQQjnTyE",
  "key25": "Yaf3cEJqPkD9ZvuASex9fWPnxwuuZcAjuqqtoXB3ZJzWCpj5dRw3zP9eJPHhVJ9qBjt26LgLdH6x91oSxK9jwsM",
  "key26": "66Etx6m6yy52agExsFP8FAtDemJ67Xwdq9JRCrtHcjSdXQB74aFKdEarXp42SibRztdZV6DmZD7MHCSYuJ7qSS8K",
  "key27": "oST1KsTs3mE2Z5hsGvUABqBAAYj9Fg2tvoM1AnqR9mj7zdpmfW8eZQLzCXSXkfdmD7yEyhuhG8492xUsa8v6Ejz",
  "key28": "4zmifdFGLeqwkcXZqmNduziu2eDJGsH7sHs1wdi5cKEfBbM1AgNfNJdzwQHgnJ8zGY6g4w67ucsyXePQjxKnJRzS",
  "key29": "CAYxZxVRfd8J7SM47dRBMpiA9ZvH2quyJGCWcXgrGbnjhbss3VpVg1iWvtAZAcRzMGJU96qLmyPLtKrh8Kf4S2e",
  "key30": "42fJVdYGTx76UHCzhfhNVptKiGoMwYUHaEnYB1xPLCL1MXkWxg65bTxq16VR5pe1qy6745ehCgSk4YGrr6K1MhS1",
  "key31": "3vjfj6Z4f9stP2tKf4jTj39UgRg7dtbzkLPTbv9xAXoZa8K86cfqN9NwYTudvuBGFbYMGN8veFm6CFQGeKJyqR1H",
  "key32": "5LJ5rbUmFUUWRtFr1bv898XhtP51EwpGny11VU9oE4B7fJjHLJLRTHsvq17y56ctKvzJgHt4hFr7G4YcH3LkaWJ7",
  "key33": "2zKnCxhsF4u9Fqxs3eUe3pwLxFh6m9VJHcLYMM8k2H519pTzsgtJxgSwAqkEZxXWzqR4DjtWJ3WrYmWkCMSgdgH5",
  "key34": "3XXwgGuC14a7zHFVxZP7mrXJEujiuCfGekfYGQycGxeuM3A3KtNgF7yxbsZRckLCjobjp15LiDmaH2q4wLj1puv",
  "key35": "5L9JXNS6vzmrTY4yepsZpm3mrTHLZHp2h3hDnarEXDGhgXAKjLJwQr4Zs6C2JpcWGR5wTv82py1oagWazQjyXN42",
  "key36": "4WcHt1NU1N24e58qpmgZ2YZzde47x3GfuDwpShusEUMwcTk7173wmtG1WBvoJgErqPL8xAmSNxcCNDqBmAZQuvYm",
  "key37": "ThoTyVUssFhayyzTHTTQP6FfYQS6CjwMVGeEEhWxXWRYHWNJ9ikYDt1JsasuewxSf7xDTwqdweSDxct6XmxeZWa",
  "key38": "27X78NHPhjm7sw6RxVNxjAeQoB7bCzHq5S5mE1i3rT6kfULjfMxJtGY6vgHevktjRF73EvFYRKd8GLLYJxxBThUo",
  "key39": "4vqvcXeCDQLtHhRLJg4FjssQ1CDrSRBAQymAWkUH3XBUsZa1mRMxK3BrawT7rb7izM2i1Zs4nuWYkPZW6cc9b8jf",
  "key40": "45kRTH7JLbycxQGdwaV3J2316WFJhGEckmVkWVzvxHm4Y99afuvWUkiydqthM7eFX56tUJdQdEtvWKX3QN4jWYYi",
  "key41": "5Ehrttf5Ju3g148R2xvJrgupnDAvmA9ra2CeaDkPU3KaQfWtajbP4oC9eaCZqUR8FpZYjdVZfuejYjy1PpNRHBA1",
  "key42": "4xfLg988gdGmRGTEmLyBn4HFs5BydkBsqKPDHeRSjbC6UBDDJiYJAQiuZU7NeGw5RfhANA76NbzkeAeraHEAXTJb",
  "key43": "2pFXvgJQ2mNn8361QkvZYQRteQiiooqCxr7EdgwQASoyfdcxtMzt6PZrruZsPqNGRSqT4BXze7L3uJzBvn19RVyc"
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
