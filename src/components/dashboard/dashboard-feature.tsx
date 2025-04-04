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
    "4BXpYhyToyZAmpmHSJ5KX8VfKw2WqhSfCVzPT9rFeeyVGfc83kB1m63guofEJgJv2Xcsdpo6X5TsZGgJ4QFdSChH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jbCuUXyt3cfhjihwYrvhRDGoVzBJLgyXHkikqEoTJW2xpkSGMWQ7UjQV8fTZBcs85DSo77QZRHpiffXE44gmyBu",
  "key1": "23Y9VRwWM3D2kFKT3NLan61Y9A78VZ8WWveptXEPei4zqQRWtv8qbrsnAsjdvFKVrKF1j3HURZiE5cqyArffS7yB",
  "key2": "2PphJ8kjN5iAXaFJSxxG3j7gr3sQKsGB91v9hKjQ8Z8biaDYVdQvZBciJfPVmd5w7GN7UXfLH3yerrFsj2BBZyTS",
  "key3": "6pjNVu7ggHyQ5V9hrZjN2NXXZN4VVeVEwc7W9ubPwRpwCfUQhAjuhJT2sTYB4VzzABybL7rU6cM778WLU5t65aE",
  "key4": "3HJthQUp7XM1TiEv2goYKSGd8aW4ta3q2MSgC4KsotB4UmbWJZfkSLA1PNVLaxkY5UwqthSHeppWiXjNSfFx3ZWq",
  "key5": "nK98iCtssYgkS8t49bBJ962Q5mpVN3toXH8CF76K3pS8C8yFBtj4uGiiX4t2Sti9mCA23qfqtNufNGizXbJnTHg",
  "key6": "4pezcP8MLQW2RZdWHpXXcBzD2gy2X2YPbsPVQr8Jc4Niuj6ns8AuEf2gUnN6bz52N5W765cTdEUWWAUDeiKHZVcL",
  "key7": "5wKoXDeJpN9baPNTEc8TM6txJkzcBRcPboVKtPgSrMJHPDrTVueXUN2D2xW6VvUDHRZhDq46ConL8bhpM2LWPeJH",
  "key8": "2SyLJbVQNMGwi7aghJz7PL4975tTW3k8mq86GXMqymx5WithHsVmfSyDa9Qv6ZE9jtWb4FE2twHRTgPZGd6z1Kv2",
  "key9": "guYNWPuCTZdzfXpcNjygz5juDKH4QDR1dysAoQruvgyEV7bs1qdL2wf6F7s4Ms4Fzv8zVFD8SWk1JaWGHwwPeKx",
  "key10": "3itAcpJnGEodxAaWmq2A6orfDneGHEbMk6pQ7MUwa75965qMLKfruZLLGFgKk6TBGqX9yZ2h7bncNdJ9zKsUc6zX",
  "key11": "4zGqhdED6QSSt7mGLKcEkvyjEUVPbnkFAPYbsdqmAxR725ho2vxihCp98P3Z9DMdTJsz2gpfHBesLy6qbbzEzDNR",
  "key12": "5ViaJTG5jjzM5Z6sAp2Ta6RRvigDVJ8dTZdB2NapSUsHZQ3b2Uc5YPcSzVjsPuNbAkVnY1CGPh4mp8t8wepsVFQe",
  "key13": "E4G9Xfb3QDqfCRjWtV2VyH5Q5AzC8V4wpCq22BCN6YNBMNyTyZw8X81sLXNiBZ7ApF6LqwmyFzVF4Nxc9aeTD5q",
  "key14": "3w6UYeTiQ5vwxurSoneo1sf3CtNeq5YbCJ2qjHB15utvatfTjoDjYarTKmd8YpWtPQJkAhxtnHThDYrDqiLhbtLK",
  "key15": "5BDro2ehyheX4pbdv9AKyntvMQgCxnCwz2wr2T8swAVoWp7sjHYDF5qJNuX5Zx6Ygm3MTgKimyA9m6e2TYdQLyzX",
  "key16": "3mdWNSeRgdSYBPWUUAARQqksYfHk6qBEnEinWijzbCbpHA8hJbmremZaFKJJ6s5RPyKPMvU4R51GXQganFn5yJvD",
  "key17": "USWLgtthtWu17dd7pchY6eHj1Niio6zXPEDSDfLfbwpL8GKHWvFToZmeqcBWpUkeQKkZVXsoA1AQh1jyi5Y5JMX",
  "key18": "tmMJJikWfc6DoDrwzDkGbadVJQY5u3PqJWM19jmk8PuTinQTksuceQ3yVeeeqrG6qr3S8QNRb8cJuWKfSHiRXQT",
  "key19": "2K3rSMxbfDx8PBRsBDTsM1CfWUuby5d6BkVjZigeg1EgveTajoSb26BjTSLvFmD5KXvU22SSihD2kSvPXeAH5qpP",
  "key20": "czAkDSS3mq8oaqZH1NqxpeSPWv34ZB7udXZYfeiAe3EBmJN76odqnnirgc4RWbC3BCP84sabq7gBMSJKT7Rk5J4",
  "key21": "xnwxG2W8UGfGr1TaWKFAqg7AXaJpCBkjvbgnT9PLPFSzCevyFic1i3k2VdzWKK9c5gBFiRSRk5X9QcjvckFw7fZ",
  "key22": "ZcGByFz6LLXFLw1dycrHQaqPL8DDchuyQGLF8kmMLXewNe21KBSv4LMTkXdeQQV1ieZeSNxp9PZnkjZN9wi8nVM",
  "key23": "39E5VTkHTWYkiLygTizogARZ5Q4BqLRj3QgjKh33nG1XAtaJNEdtBWAYZjKiTvt8VjCVgHcqoScu98wby9Pa8Qm1",
  "key24": "5CZfxEto95eA94ioJehKrmmMinMmcBPQyVV8beC2BBvsW9EB5oHixricUSLYciwW1w3n6gd8RtoN2rhmXiQtvjFS",
  "key25": "5NVuLM9HpFd12cxyf1CHbA9YGq3vyGFenfLadZvrWyUWRw4vPUg2gUTT8g8oyDeqAkQkerTh6XFipJc4B5LhTbv9",
  "key26": "32iddVedG4knXDuYe3kjTuzZRyu2omo4a6tZMFwaS2xsj8aQLnGWQSGE1MGnPpdzigDxzSubfbKrTsDGN7ZezL78",
  "key27": "3u72wHmDr82aUtrVFParGcMpKMSFz5qBjff5ZHk8McjG8jM7EEuUq3QAnsNdcLyMe1mWX515sMwoAaAKz9Erk7tW",
  "key28": "2CxgLRa5BbMBsZmhoWxdEdk4qr9igyXBrSPeM9nFQ49YG6inuUAyonQKLPjVj83d5syx1jkqtKy2j52btf6dCTv9",
  "key29": "tE61QLzJ2EJErvHgZiBm17ixXrVnMaGYhbLY6fJGzHm6kPYojg59bR3g9Uk6GT58BfWwAZ1mPZJAf9tmztVZ7r1",
  "key30": "5tq2rMseAJtih2r7Ngy8EiowsLkPFEo6KAJfqN5PTgZ7WDpBk2Knrn4cTL5dDWeBPa45nMDnm9ev4Vm7zrM57ys4",
  "key31": "3dFk5AuZXvrnM5f3xdpmuur5z1HhQV5s2ne2hJAxDC28R1Cwa9iome26fafUYVe25FYnDF6uKLaV4nJ7jheZ24ug",
  "key32": "5Derk3hLeHHRHJrnVdkAKcijDxXLK6FE2KW9wpCTM7c5CdjarUv3yizS9RRfxP4yRo7sRGKHon5Et1qkZQEHtrSu",
  "key33": "2gN3CvNfGbpELxa8Q6eis8PNpfM38om7Rahhz4uLqoLTDRPwWjwXLqAgJozjKMt6LUysBFGa5wf3JA85HSv9bsht",
  "key34": "2R84yHNN4Cjh59k8L5w3F315t2XqzK279xU1CsQugNt7KK5AKXFGvb8buyh6L58EmT8xFeFG2fxSEm3qrqeag7zn",
  "key35": "3bVvDLyoovxPV3R3VhcC8GzCBdpzJDv8Ra1JwseNvZGKiNUbrqAJ3sKTd4qu6phBk7FjZ1v4uyfuSjcXi6APPHe1",
  "key36": "4u447KctvkoEz73Rb28DzeUo6LgLZmKTC7AD9LSWdHzE2RjHSGenUwsTaR5hnPBSEXREPRjPUGiGRmiKbVPWYqZp",
  "key37": "WYKHq8yNpLLZ4JggeJMessUj47Q3BhU1gPPpKhFtDanp2D3jFbMRcNXP1Dn12EggiRf4t3sudAtGD77xJYrXait",
  "key38": "1nJkiVmKcDfiFbKRu4noqL4aGRYo3NdcAa4RJLNgjMCWrPbraJpFdyiRb5PjEsKYyo81nF4scsvFByfgwcun3rw",
  "key39": "5vJMRsG5XmvgbtjLsHCWQfyK3TUpk552DH5Hp2iBGTZuMSuaajLrAqMczd87ZQXnUUcqwhc8w9WFFAJoD1vq5Rof",
  "key40": "91LnySSX2WPnWucTq6eGpEMkBHRxj1AN6Kygg3CCb6A93H4MMWZmTLC4VT9UZBRXqoirziytjdEnJFEnyr3Soyi",
  "key41": "dNDHKiWu6NLfRFBqTT4UmiW4yRCdcz9hRMNVuehoqcPJovE9CoCaQ1TSEy4kM8GnzbQpL5dbuMAbGAPXQ4pdi9N",
  "key42": "YLuXgLdXZtj97U3AMxibSnoV83nx2cQXwzfJnr8ant4JGgigV36cp344rqctEAg7vyqaja4qbMCJ89KgpxhpTJY",
  "key43": "55f6GHfqQsFeAnRbMBxJLBfysh9KJi7smAvCBXBVpeHuJdpVcVtkxLeuberikVmubz7ifJ5zm6dhmoGWRdcvTwGx",
  "key44": "5YtezSU2G2KubGu2WfZukLNTeQABsASZLikJLe7NjGPhRfhjbd9aud3FQF6PiVLGqDKR2WwVxdWgoV4TqAWG7JFo",
  "key45": "2p1j7CQyChJB17Azi8UhbHbzkKQ91LCft5VRigt59YAwdkH67jCMU8UQbH1S1P36pFnofbBewX7SAQRyWStVAHm7"
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
