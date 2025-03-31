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
    "4JkspeMai1QbDd7GVZURT5DKrjz1dHJQCrBkAcWTcCao3MfLgymgMnTeRY89qyVeYdUDFNMkh1ZjnhoTda9EYruW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Nczzkc2beM8NcAwvj3LLyBrT83AXP8Lv7JLs7D8UHD2cpjAk2MMt61hotWzZ2APGnVru3fMqU6KWJxqmURbaREg",
  "key1": "4LrpQfmQspHK66caZb8iRQDnyVtaunUVSozmX9AZwWZ6347GKDTR7yBCTy7yRXKRtisttXzcNQPfMkBebqEGVzBD",
  "key2": "QuzVxxqmpe7ABb6aJqPKVdfvf6JyMByiPYvoegj2CW2uZrVaMQ8i5w9Y54RfwyaHyT8qFd7BQtFgqXxjnAsuvJJ",
  "key3": "3VuqycbzL32v4tmf3FA3kYkA68HwaLXM3CKQJE8jQ6fh6Z7XnLjncVhsqT4HSMeX1PU2CZVTsKWVJTfQAW6KRBnv",
  "key4": "5RFpn8RZ8kQmHA4EK78PckSXUx3969CfCG56vKmWh3dGC8BtbHLChUDbT6ZNz4i98fKt6DdT36tXMoy2sANbSFPA",
  "key5": "2rHfXPzU9Hprqcrh8S2egBpwpYpAzBKsCU6R9qfsZuMMW5QkmBLCLjQ4oTsG6njkQLqzjCvEuBHoDDBXmZjBqdMZ",
  "key6": "2ZmcLnZwsaoGKLP6KhEjCNcbjFFPthwcho7QwWQyBcQFYWdqtgSUgA1s2xy54CsEjuhd1MeMf4JgwfWk5RBpA7Hz",
  "key7": "5H5s8QtEwdASdn2M9Mh5VUaSyLizZBPyLCzTzpz1sVLKGthJV5WF5D4Fdcu8RxBbDDHJMSHdWhoUkVvNzESce6Bo",
  "key8": "5JvisLAjrkaNxL75ZiyumAtr2hE8K5ntrJsRGpUQ5ChTbMi7ACN332qztsqGqrTV6v1LfxCFmSzNY7M4iCVHLFHB",
  "key9": "59eVwNcUEZfckUGjv9qkQLRTgzpZVchujW9grksTvpJJ6BdGHzFAkoZKXS85Ktnm3iKfFzNp64GEn8Dd7YTW4kXb",
  "key10": "3AsjW3ZAzwjruge3BrYBAehNX2SAkBKnajWWDTScSe5fCXEerA6LmJRWM6MKGkzXsN4eBvEcwktStcANzDHHv8bX",
  "key11": "4mD62yzGS7RGGzTXiaEbJRknB6gLXpnn4KUFwwU9XRDuAY8VpxfXVL3ZaShXTCub68prbqQM77uYaAWKMwhWEUAM",
  "key12": "5odEKpXde56S1ybQn8y9CaKH4mL16q1g35o8WMARDuX2SvEeRsnQs5BGGC3vWMjaxY3szMJypDgpgQjp3q85g7ez",
  "key13": "37iZ8NubW1ty2fiqCuFNry59xKVM3ERMzf98scF1qMkVjkeeQ8EEpFhfmQCrts4PUbLjGJc7tD873W5HK9JsXKQF",
  "key14": "PMpWJDtPxHs3RN8WiF1a6akjm2XMSAV4Bem9VhvGvaATr1TxzbDjssQdRamoDgsdo3QHpo2bTd92Q3tifqaYmBp",
  "key15": "2xEkS3Sbn86QD7c6aLNXsDE5PAyFXihMN13jzXb8gwn2WV7gYwnTPw5w193E9CkCJLB2NhKqciixmCkGuTrvBbAs",
  "key16": "bUo5oRBQ4Epjb5cEBZkdTnVz6S6TeWQAhKiw3r1NkvpnaCnXxXy2KGPuQpWsUWD2RQCRNmapQVjbAiv7AJSxrw4",
  "key17": "5ijJyd4H82WSsKtPpAMkzpzC32F7MQeKmVwN2NKBz3QcpkbKf3VnG3iPv3QeNp4hZZP1LGch75oLLmgF6Xrv4yGK",
  "key18": "3tMxfrGLS56nXSL5ajpucuWSgeND3oRHLYTJbPNwBnaWWbYan4dPkGJXUFru52tLDkBwKrGuAMpKGne2QEcz9Qiu",
  "key19": "3gpijLLeyahh9sSJM8khmYsdGZqNtY4XnWaQqMUuJeTXUodoW1KLTcy9KeMjB5HDUq2aPixeYASGGNtBftgg65tr",
  "key20": "XKkddeoofXnqXjwKkMVLRLWpx4R28gdfyNT6FHngGhT4GZvh3uPnsUNeAifvU7rAdKChyhQwYnbmUsRzqUT6DAm",
  "key21": "23y64ZPQfzqQekPGxdXG3xQzFivTwc4uo4sLrSmsYwn2VQbGDyfZkgfaFQvPHxYGfPGoH4XAQ2bhoK8ZWgXEMMhX",
  "key22": "RNYP3mDSKSuLf7QcdFctzjouPMB4RS1wBg6H7jz3XoN8M7d83RGnd9DgGJJ99iJEWuxaGPeEYeR8sYNvyzGH2hE",
  "key23": "3UFQc3ucuQSshtHxwCJDRpZYz5ZaGEynx8EWdvjEBpm8KmWQnjGfERFhGPn9iNfDQdMzCjhvzPqAsC9LBx9bnoV3",
  "key24": "3c2CQUXVHozxLoZqPiMiVjTxReKHAxdEzkWrSF9kvuHa1EotUWr4qoBpDgu1UV3NEmuJzxNDGWwYNMiskymvPsmt",
  "key25": "3SrhA384o8tyeD7EL9Qkyq3FAdTKXJcM8SXXw3Zxc2yLnEKcodECq9NvoXxybqfw1N5tb8vDj1vBNmmqui6WgCBq",
  "key26": "YGtvS2H5v8dW4abqnjBDPA3ucf4MagT87A7yS7V6bow5AtM6GCM4B3iS4MMHVVYLLUU2fV2nDuudq1ZXMJ7djQS",
  "key27": "4qsozr2hjGYiwqaTYedjtLB6sDUX7ivyKdhnYV1PejjzAkif9TZQo3mMebYtNPQ6JWcGq3St9BtA6PcMijwPbjT1",
  "key28": "5RvGf1axXNor9RmCZB3nVuQniw1hCPzVUNDpDL1ucELuTTEZ2k9GtKRCFW11ZjSpG238ErohjG4GN5P1YhRCAm8a",
  "key29": "3Rguz5etYgbtMHmvkhU25Azy4AmZ4ocpMD2wpQ3why8Nff5SL48HA9fNJt4Ni6jQfvVqcWCDsetPKjtmuR7ZLixJ",
  "key30": "2CCco9rzizLAtw22xjNJnX1uGjP8PWPDvfpa6cXGWLHwBUJ7sXWuHohyFT3J9UQQs5J4ewp69H56WdYW7iykmHdh",
  "key31": "4pBNGvQcJqmnczC9PVhheCEp7kktYbmoA4pPenQPtQcPQqNgukkP5aK2NTvmrAx7YknSDJzvkYpXHpXQceVzbyNh"
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
