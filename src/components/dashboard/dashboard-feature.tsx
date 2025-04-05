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
    "61DP3sJQwHr5HKkSYD9S47ZfRYA6syiuLyJwigEToSKwMrCayFfv78KcEW5YGuHXVt714jeJs5E9Pcc3MaDN8T2S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xb75WLkCcsVCE5VzXrFWjYey3cdUWPazesVfwSsEPMaFdeoBz9rqPm3pA4wTefUWHELyFnw5RbForS3cpxna3j7",
  "key1": "3MFVewTsmwuvvWM8mZy9fUSqnQ2hp9a1k74z6bFTjYwCnpwK7h1pjsnTpAMmnjJAjK5mHHAR6S38Lm9mD5T2vxiV",
  "key2": "4LQzn1juHmhuQzqcuXrc8e2tRhq71an9u9sg68SMukFd2EXNsvHHw4KmSwVGuSEKbg3Q2Lv1gxXQ7RvjVtNsRvYY",
  "key3": "Y6oRnPbDFLqeWQLvFQFbeW9Avp8moe2mT5LdfdPfo2e43iXCFMncydtJque48m4tZhBqcHm3jut6BBcy25UXTqM",
  "key4": "4dgTCDmdEhYqn84tbnXkMTcNMZzotPPYS8b8cY58ehpWpY4Wxt5UocM2ybzB38Rv1rzobWed3SDWqEoo5CA3giZg",
  "key5": "53LNsPJRdmxgFuM2FpXbm2M36Rrw8NWkHCWCFCJHdJp8yVXYptweNKh419g1meTtDQ9PSntnqGvjh9d6pag9VQMe",
  "key6": "5xVAp1erSEbz7DKouxehQtNDVepwtfCwKwKQdDV1XKk7rbe8N8P176eU42GxcvR7bq1fnHaDmmfLXWmKYkAYMFdC",
  "key7": "bt6FgECWvwpgdLvAXxehQeviMWjN3SP8KoBQpKfnTV99C5ZJPzTMRS4CGAuK8HGr5XL9Bgz3McQWX31nczHQSL6",
  "key8": "5v2EpPhUoBR6vMb9G1tp6hux7BqetKmDeYDNEVajH3YoogTepXe8R3VFf8Xd5pMjMTB8LAHUXZmcnzaRdCPSj56x",
  "key9": "2maL4hpvZBnBpfyU7L57njAmLFVAQYTvwTJM1oxDPfGoturuohSX5m2jngtXcWEHXJs6AwJDBPHphg3KPypCQGVW",
  "key10": "ro54e6bFB7mF6jEjQBVjvQDDj2hRqXKvCyaCJtxaRFcEtRN9CdUS4EALbGk4heohwNkjh8UvV2Z3XzPis2UfmL2",
  "key11": "Fyf7TRcyvSy56LsPnWf7wZXZE72bsatQYF9GmLvbdfeAe6KxJDJ5Go4oe9u5nBq2pTL593DL4qppARmpBU6V77F",
  "key12": "2Q2q7To1ZsnmoJfvNPqqGPV9swjeDksqHFZr42AnXVE2XtbJX3KXPAvgCNhEU2TCssRac8PNvAoTksHM4avD3Qiq",
  "key13": "XQgoiAjh8Jn4FsayrgQCGniiZyi5JAtkBoDV1zxZucKN2XNz1uCXBeFsBxzF9tV6EqVXpDRyvwQDHd6QcYuGQsw",
  "key14": "31jqpsZSaqyG9acRLNMGXgb8mUPxxp1Wt5AutzgTHzibyaFH3U5ADhXLGFfMqZ8KtJkXT6aPfpkqTyUxRaSbFVyh",
  "key15": "3SpSZy9vHFH3bBsT2WpFT3Ca3qXxtTBXGdZR2Xo6Ydj2FVmiLRmGUb5Z7U5LJVhHW2qQZfnrafqDA7fQSivpGTeF",
  "key16": "2BoXwAowgu4vrZqtkKekn1cACD5nMm22hRv81V4qeiLZevpZ3brezJJmMSmDnZBUH81ZFqGoBRkxc7ZQqV7k1hyt",
  "key17": "UGUPvFnbvLNRfFHerLt2NbgBjdssCbFEKqvZAWczqj1zXKfmuHQxvro6TX3Q1eriVFo4HGjwo14XqdUnCYh3yBp",
  "key18": "2moda8xY9DQRG3LX18sY2kkQRhRDiah8NFiMqiQf4sj6GgTecKxurpdiJhZCiD7HuRC7sRQqqsum5i1dVeqVAB8Q",
  "key19": "639VzKDseQXLZojHsYY3PvYbtuvbsAWcxuHhuhyagfvfyD2hxXiGFEcDTr5k1XV8qaT7uyBjaHhQLMkZq6Pi4C2f",
  "key20": "5r7zWNBwVVyiLEGvpbc4Y9g87cd4drPtGSy8GYsEtAV7Hv1B64MgzJCw5NCi16VrAM9xvQmoaHt5iExBFNbq5vn5",
  "key21": "3CsSgKaMERwaW6AwCTKmQunUKjnzncEH478GqZjpHcMV7kpd3rzuz984rY2p8Ez3CwDeH94RHrAK62oVRLY4MP7j",
  "key22": "25MgcaEaEsHPpwdwHwdvZoxRfkXSeYjVhsd2CNorXRx7APRbkwny6fRanjyvFwvUviuT6kSmXRCSdjhDuCGEWVnF",
  "key23": "9NaaL3gheRF6sxanqrZGcYYLcrad64gKPhutArouGcnzkZCAFuQndrasgzg7ZkrDq2f9SaWN2rjdB3qpqqgPdGB",
  "key24": "4KJ6yYRAeMcsYjc2usjMxxymvmv1yewKfP14A5kBhTWH39hXZcmNpEmtd6Bd3nHZvbWXh8hS5LLdi1PWppRYerXP",
  "key25": "62aHBxDp5YucDE7m87E5qS8AhxCjL4XSSt3QwXQmc1NhPj1tZzNgCBo3hjsGdW2UZJQAX7CYCcghZGQTTyBb4j5w",
  "key26": "5q6gpDtpioDEorix24tZq2P3Rn1YPZptEjuuT44tqL3BDZp3qmLD14vC7SmngB1ueAUsnVgutcM2fWGgu1kJZHpf",
  "key27": "33FrvcSH2E9hBXVoGAmkgusiATQQg3DeGpdjbFe9ZcUwpNgkGfzGWqGYjPnx1oTacUDFyCwwcgPyMkgdWyY8cccg",
  "key28": "3LaNoc8m4wzA2sudz1xQhqyUKmyBjbazzZAFsnei66THg2EiuRv2UEKzgosPwjLR4dVZw2EJq8M4X5zdaxCSpiC9"
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
