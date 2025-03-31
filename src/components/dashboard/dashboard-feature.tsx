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
    "qVX8ZsryV5G6qYSGAJDVa8HYXac9rxGdpZgmELtC1vj2pv2CjoJbKftQXuWqXRQkKyEA1VcsEuKBZagzjyzS4o2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3i8NnXPi5zFBaHkihpNViDY4wNLvtsBoxvRzJ7dhy9cKHLDfVv3UgLzRjPKmeXoMatzdumYawhHUsVuY2fsFpeuP",
  "key1": "2wZRzL3hwaPretMLG2JBCc9iYVrNQWRVfzCvXEMRSKEFiVaZER1E8s2hnP47rVaAMsTjiXVezGZ1tP78j2kTi3Qk",
  "key2": "2hEVjv6voxsN4Lu3mkZhonfuuPYsPzb7Y4ijGdHxbCmQMHrB5kLdQ5ZA19eJEzxTfqYyxjoZ7zGDAguXoAYVFbbw",
  "key3": "5KiCW73VzMgayJbgFsnPrnHXitddPNgfjEKmi49k8FL9E4xBocg4x6EEX4mBMPdMUpf9kK89adQTERPqTuCS9hBY",
  "key4": "QcbKatcofQmbkTSMTtc2bCkK3JWrbTAeMfKpu1iYdaA5ZeVrvUHghfYRNMbLCWPJsYWgq457Hp92codq7G5v2E8",
  "key5": "2Kudy7AjjbyEWueNA63Q1cQ1dzBEkBRRuLGdEKJZyKuZHa9GeDyfU9YuYm1oYunVHyGfkascN3tZZ6W2uwhTaoux",
  "key6": "2QrZSb1grmL8WaGHvXVqKR3VrXRYvjUSQXDRNzPZMtC1pZCMpMERkpXJDDqZxjHcd3oAsmAwoaEtAh3fC5JuETqZ",
  "key7": "3JHxEs7gGgFYwHY6qVQhD1ymjGxbZjYFvf7EVMv5agLvuYLxqetyU4aqanVRxZzaTkNvhCskzRY9JoaiJpeGyGR4",
  "key8": "CwZXYBgXddbzs5CSuwQccEr48cjvk8GELcBJ5jgXuZVJp4N84iqiMnyZvK3uw9WEAih2MAQgCrLUBtviMbTsGHK",
  "key9": "uCVPauXosy3KYujbVemtkdWFLj91t4ynPNn8EweELmonYdFycKm3TVRWgBqbm6it3Ufwvafc7CK5DiZzUFrstWM",
  "key10": "5TzfNScPkvHoLmjAdMSo2KUwgb649uuUue1fVD4cCmFt1XaYUJWivW2etw7smRLpcb7zFvnzor7Zgv3ZzqT7etVo",
  "key11": "4oyyt23YhdN4WsjKDAYUZW7Q1YbkVmMaZWoJVVBrir1GWbNtdubMfS8SvZKFPifvKTtdJBZYTZ6H3eeRiT7bvZ1D",
  "key12": "2bZUFRPmWi9tN3Uw5g3yxehQ5AqPvCDshAsCrrVNobfNASBkAdeEEUV7WgrKwSvjtZK2Zdr9B1zsLDgDTMsPREgG",
  "key13": "4XnY8NDQQSWwN7cxPfGs5inAaWJNzQt5hDsQH7S3PJT468xEi4MfSv5KuuH7ywTrkg5mccYunEYsHj19uvieZd31",
  "key14": "2Ynw4BuzHjN9Pet1Z59VxFzT93ch61J3CCR58dhnqTvLKoMebznycduJ3AnwTj9hkCZwSqJa8tXyYEpnEM48GZkr",
  "key15": "32aJtBqYAF9e6GqJazyebUc5qvHuCXzLJgka1B82d7go9yqN8wsrXVNFCyenSVGoXB9ph33q56e9uuTz7jSvafwc",
  "key16": "22KKzsof2QfwLzj1B4FXmXsSGgqerSNLjkE3mjpCAmDq3fgpz8W9Qn4eX6Q6B4bCfzkq33urLQr2LgT5mmyEAQTK",
  "key17": "4qfpdHsFqjzT3hhmhHe1ns47KTvimamkDNT7XFRSnmc5usbQm6EriKt6y3wrNnRBK7Jg735RGfXg6cAqCeeex7D",
  "key18": "3gubmMMmT1TTAiWpmnwiaGzzhjSDX8Gp5GvHUJW5cKww8w1JPhPSsdHxjmqKuC66FPXMLLVEdx8XzdEmL9frciFx",
  "key19": "22KiggDrtuVrasEWdiEmNH3kH926VhFb3TsB1Q5M7CeXGNmfxDFVJZB9sNVqaP5u72rB45PM4o1Gt4FVS6dQC9yq",
  "key20": "4vouQ87x5ppbeGfFkqF7LM3CKPmgyubt6ot2RC7wewacHupXoG3RpYMGNUYmjBRYz9fwX7KTm82k3tyrD9NJ7kuS",
  "key21": "AMJjKBka5oj36zywPpEX2uP5n6eZMMMjJH9s5xNariL8wMvjTWEX5MpddYCUvrvpizT9VBh8p2KgyhWk6G7mioa",
  "key22": "SD8uxgmamEHKgmuSqLmxejEdkdu3pfdpKEWfa3QGChTdjZRz4cy6nE5qUrUaDbmd14toViaoJQ6jFYRcqK3oasN",
  "key23": "5eoCfjY1cdNo4h2sNkXQyiWaUi7feyNoMpnt7Xu8QGwe324ZunZ5sGiPDeZsvrQ1of5yF487eFiX4vaJVrKkEreh",
  "key24": "4wxs4fKyjyQ7Wg6UD92V1dYyMyh1rr5sqDeNYcg9ouBuWQu9BiY7bc1o39EUzGnKZLceqJZW4XJFrqJGY6xWb47M",
  "key25": "5pkHxKnUumvxsMM1QVGkYtHn1CD84KwkRzG9jKsz6VXSoejVhAY95hUEaotcSrTUU1k3Xjy6z8GM2bcM4tabCRhK",
  "key26": "3sqrF7K4kBnyiYHKib3LzBZrBhKVSs2GwMtUy5kDDH8YMYzLeJpjhuFACMCUPCmuZz9PayzHYjzpLjDForbLvDNs",
  "key27": "4k7m4j2bUMXNdsgdZDXtbXpgTQ96yfBxKgQ8FuSEcV2qe91C4kRYfyjUeoXnwrWmye7dZX3cpELrmDwJfET63F4S",
  "key28": "48qaR8TCztSdoLzNZoiCZNQiK8gegMxau4dXzE3Y5kAuHbJGwr2k2qwxKUzNpPR1UQLCLhtvpNFsJ6zReLiaSJ7M",
  "key29": "ghPav2UibxmFkZ9pZX7bT82vk9SWB224iEbJy341x4MrEniBSSRP7jHKK5fCb46mfjzLnfyFpJE3XavXkYtp99z",
  "key30": "48knzUUR1RCq8aKRTWC1Mepiywj9SPodztVdKafHitqfUXdJZ7EMq7BRfZCUozH94VCWfadRMSCWV8KtLSCY2WhM",
  "key31": "DZnSekkzmmp42MKwBL6kS9e9mCvW9DnkyT4Ktkc16Em15kEj45fXpKr2aLHYYU9CbJ2jfwjEXHT37brCrEquPjx",
  "key32": "4ArL4bdQN1WSTse4XhMkWKMdg9Wv6XwRaSHnrQAd8ukv2ZQcGk7oatS1wWke5bFKfUD87Ps5VfdnrTkVYgSx18Nr",
  "key33": "488r5eNWh3EvRa8KRGeyjKyYrvEutLLFLYJvE147d29Hbt44G85s8xy2ozuxW8sMoN6cz2VmVdVcZykH2Ri8Sfwe",
  "key34": "oWvPuT4ETasUgm4uE9pgxZzddVxwyMyCtGXMEWmGcYMWPiNzV4kyZvdbdLK65YdA1aw5AWtXo31TTtgduc4YcsZ",
  "key35": "3X9zUNHPF9gmNAskzqDKvDhDfBWebMAvyMNrWAD4vXujSUC3Zocy6EmFbSMHZuUG5Pzt47MCfQdimumM2Px2M9rQ",
  "key36": "sj2LhiSoa1eCvYi8Vza3wCLvrtbyy3R4CyA3Q1Q3z8snnYhjnEnzijt43F6nb8y9z5TaMvjJTZvhphMUxgYNZgZ",
  "key37": "57XVMfFiWT3voHwFRwog8VF7YEXzcUFTnfJuebxz5A1XxVpUbxMxxF5nXcd27zYn61QcJRPH5TLSx4Dr3wNs55Ux",
  "key38": "kXwVP8osfVC6uncwfgDX3T9xTwpPmP2CWJ2TovPTEViREbnwM3mP5gAvkYFNVU5GAoMoz8K2VfHeX8rm3aqJ7UQ",
  "key39": "ecBEutKCjFYZD2K3ZDqzS5pcxssJDnHyNLdE5Q7yuZdq8hxJCucPSBeKci6aAEiU1tQ1setaCeqgoCFXStbMVYy",
  "key40": "2uX6ZVyV8nX1ZVYA1eAmvikwLgDLfS1nsapNFVyWR7WexjP6zcHUB6RnWkzgUb6qQobNZzToxbXzeML2tseGy3Q8",
  "key41": "mmJ4jZEvTVw2wqF3R4cY694DmTbseQ2okw7RVrCcz8o3ofN7zhmEAJrxAfeecJg8nzK2NexCo8MPigP3PucricV",
  "key42": "5oTbCPbiYpeH7bk5aG9HXJvreUAkYZgnqxBsLGxNLQwyh2jv4B81Cq874s2ro7cuUuQ21Xf3RXAWyvxG56ZQZMfQ",
  "key43": "2UpLjickNjFoG6r7xeVNc4V6LxA8oxGznB9Xz6g3fBrumsFRCZMJiD9LqD3RuTrnUmWvnuw2RV2AFSSDkkrKzqZB",
  "key44": "5SFcTGqXPdjTg2qYAP3CFJZLrFnvJ6A36ach52ztnR9tTq1NSYm46MT6jhGjoNB23HxJmCWZC1HNTcRHVe1GWCwg"
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
