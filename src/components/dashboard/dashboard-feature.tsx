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
    "2yfzuGmTTgSvMEQdnWcbw1Y8Qp5ckxQTVNxYa3f38saLav7dv7A83vmGajK9hnSxjxoQyrGhsTGp8ccyy1HtR9Nc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WJPNNGauHExj1tYqZpCTzSYyxTVtiWpdHVgrQnF9jeCEA8VtiQR9J7pq5suTLPVm3tBcMjhpYfgj7aDBNr75kDb",
  "key1": "3suU7qAkStoXofvwaFRX3S6eFosfMJoToWgXm2gY6JitsU9jeND5xtVqexDkLqmhXDMjuqLfYjuAmBoG69unK1Kb",
  "key2": "2j1xFXdPcyJkNJ9s2rBGMPAju4meRdm7xGaCZwc7ARXuDWYjhruFPzT5HThbzpSPCdEL6zsBmoSYrPdmvdSuEN3C",
  "key3": "542ZmDyqw4zFy2TKyhhmUujWmWmW9qvXpj3yvJndW1iwrcL6QVifDQpbHJaVFbE7pNyQhgG8HLvW3E4uMAouCHCq",
  "key4": "4XgmsrrPuKVFWrmnjGJBrL7mvXVGTQWAmfhuWc4JZzZAWkFacUH5fdeSS7qE5iamKn7nrkmhKqUsFo9TMWJJ7DsG",
  "key5": "5Me7yYKbzACA17tU1exwT44vQgVdHefvG89fD1RhxGdbiuVg7jGiQWd4QjE5MNY7fjU8kdWcvWkT9QNGEAyg2GW9",
  "key6": "joaAqRy6wazqfG1DgxvdPBmR7ZbohtjJjHm76yEWgqiWFW1xQ5Lt5moeYSZKD1yr6veTc32NVeExM7ZPFsZL7Ve",
  "key7": "5XHfZhowuXWoxFaRe1cAh7YKaTnC7Dkq78AzX1UyhHTyEqCYzD37doGJsg58VnRRPNZMGsBDHxLYPUiyvKHvNLPn",
  "key8": "45XGQpna67w2APSh6423sPp5Bq3xbs6Q9LAZxvnnWNbV8g9WvpWzYqGGoA6cEsPxnoExDUAaAgxw7ZxHpSfeSqw",
  "key9": "5CbGHPbqp2YW2NXcxK8cRcUCE94LEB3n635ePRCcVumZKsJd9aYNiHWibjdZMwcivyDQdsZpKdEvVK3xXMCfrcCq",
  "key10": "3WoubCx3Muggxfh43emQqZkyZxzqcnVh4jgyyyrtMK5QDzceVN2Xmv9vMsK16DY7EBsRQAzyfqWYYexHiG8tqoWp",
  "key11": "3ZBXUiNwwNZxXszKbrb3ohcqtffuh3rCf1hb1dWEGp5rrYLwHUjrvnaZBxPuC1PZSrmMzEEHKemEJABTcPnwxoWe",
  "key12": "4MvM2Eciu2aZBnXtdHg4rBcmYTZcNN3Ea6joB4NjBUYV6EGpbjyCiS1vertpQUYDXKEYzE14QHszNKXgMd4Gj8Ks",
  "key13": "4y7NhZxWhAbmdL2geaANp6aJsqZPXkRz67qxE1nR3fsgJEYvckPdiXfYZYkFtu9XQfhPNjzXoP7HVYDkFNc4azJt",
  "key14": "316BvAJ7YyJKmFDtSGG9rZaR3CKJYcrpLisE71RoEUas6tcvaNasauniNV1BxiDUZbNfULWmo5WKcyfqdyy6LmgS",
  "key15": "25JMsnS5kbscvuK1CMHdd2LAhtMCMEYVNV6wyX2kY7FP1KqYwjYhbDFYm3ncdBmPmV6irR3TKSeo89b53MGviySR",
  "key16": "xfScWYWxJREFHbZYvb6XzTXBvtRYKfvAZ8JqyZGtEfWzdgBiXQbjyJu3TvCVXh315TV89oXcjE3oKRLn3NPeYQx",
  "key17": "2DGqcu9xCAjc5qcwkJpRnXbL7uuxzYNcsErXDfU8Mc2UzWTRu7zWkFjaxaKXRRtr94N5tQv5iRBpBt1om3JQvd19",
  "key18": "5sb1smrj8DgnaQFjUHXo8gew3kfBAi4BPjy7djnhwaMRiWiGgpbp9DyAMNoXncjwVde7j1ndji5vUN38f6oBdKfg",
  "key19": "2623vBnfdWJ4ZUHmwiXXt2A8vrdo9GVUG9CtwEQUyL7oysAxUjKhFnpLxo1TKPV2MQng2HxKf9bBPCRJc5uZmM8R",
  "key20": "2LdXxftUN9pGbCrHy1xuuK37Tm5EjPwBC6zBbWpePqToMhV3rhxN8qxCNREFeLMWPGKJ1uSfzs9Vy5sfoiDeHsKg",
  "key21": "5Y7erWpUm98474Ryif8qxgkV7EEjz8e5MFuYZ9kvn9LHjoPG65PkLEHxfqkWPNEzvwGB2b4UCGacFeNKNfyDpgp5",
  "key22": "4ExWEyjxiweq1TgGDqDoF3XjUua1jtJKpuJV9auaf8UY4zdHzFU6S2zSg6oUKLUcptR1Gdge4W1CtJFojx3aJbcd",
  "key23": "vPawjtzHAeALUkdAcjiMjJwoYhFxGWq3vqCGWGhspWo39y1YzqWHUZFy78fTqimcMtTdCTjHwqLPRtp9z87TBhw",
  "key24": "4xZXVDuD9m6dcvHRjPSPzWFZUgv1JnxPtLw7axMst27aeAwxuS8vYLn4kH5Y4mLGMRP8toPEhLxYaKyV8xPKRhbg",
  "key25": "5VgoJai89nxvKiikbFYSqBwkKqDUoZtBe554Wx2wcFByXcEp4q1pD4kjRKTrARvKCC7yB3V25VR6r2cTYpBP1zRq",
  "key26": "L8xeaAFbTHnZQEDFxSiFUP1oY6rGEBm57BQu1xKNGdUCXQd2DkboeW37hmryp2QKpz13xZ3x7pB8QwFVAu99HHq",
  "key27": "DGmwKkQWmy9Hhr6HCAE9yvHBLESSwdmekLfG5kzuGHaLTGuV8SF89wbftZSAa1jaLmryL2FhRKxoegv1xYQ9fC6",
  "key28": "5PWL24Bub1y6cDZma82axRL3xwrxvRHcjLHPQashVn4rbqdphv1j9fcWJmKzhgg69Wdvuoqh6hy9R5smJ5AA7EQk",
  "key29": "4FmGwT2N91LcjJdzLvs7Vi8mosGkdKVw6bAznkKc4RWD8zYnnYU5b8vg2KDgSpa9KRv3dLYkFki72PBeqUq2R2RM",
  "key30": "4CTR61TtPXtEszJwrjBT2sDKy4beYzpFyQRBjiXHRuGFfvPjpJ9KtAKxK8XiaWpAKbiuiDaJKVZoaAhhj6h1NBfK",
  "key31": "4g9raySxjkUaUiYM2x3Fj8Nqsd89Dai1MKo1RxyTKF6W2SL8DtuFwKieqmFJ8kGqS7xR1CrZTuKWwMo1nJQ3HVfj",
  "key32": "4VijWTAHsjQTTUxacgK2u94bLoWVca5bZj72DZsXqrzZSqy9b8FBAu6A8CPBKK6255LvsNGyg5oP9N74D26Dun9X",
  "key33": "24rqmjcwh4d2ZTC8cuWu3rQ3vx3foGrDoGWSyZLpscLSj3sgB6CuXx5e16uHgpT6yvbQRrkELcwxwU8JJuYnUtsR",
  "key34": "ob9hrYevFv2NvSw8sC6HaMgKGB6Ma82Cpw8TfarHETpx9bi2JHQL9FrHXw8xz1wHjQtPCm3dZLufGrjNSXRoDcD",
  "key35": "HQ8yUSeqDAh54aT13Wxoo2QbGchiRrco1dTE1jsptbVr1xWfC2fThz3TMH6vTavQD74mgHQ6C4xk92zSnP9s6LN",
  "key36": "yRXyJwm2479NowyPZaZEhiknMSPCpQ4CkoiEEANecGGjrd1vRpMJpBLGqK88XSAiXWrtUdtZzNSbTSSbXTB17iw",
  "key37": "3ZnYz8hhs8fMMjy62375cbubZZFHMZHToMQrf6RPLXHLvVHwGmkQ9eQw3HLbJNXUjj4CoyeQXbvuhELHfGAUCiiD",
  "key38": "2Q6Gva6cDYtv3FMaWJ4iyzvq7DFXxQcJLPs8R4aFkdqHeBNQhcA28VceVnYf7EzTzN6ZKtmv1fhX43pGHJq1hHru",
  "key39": "3TvWbieGSGFVrvBSAgZwUqQ7HcpN5giaSpaGKakiCb2VmYozoHTWukXZKjpEL34AdzZaWfu6T8GtU9eDgeYG6kf7",
  "key40": "3DQ8QH91FVSBj9L3u2zKMX6B3og4bT3SLP7aGVH7qTd6FQ6h155RR3rE7v2WxiSpsP6cDaheUiDVCrXcanS28dAS",
  "key41": "642SvrFfGnRXfw24pNBc6mJ8sHw8Lw1g2a2tBLeyjZX1zypXkdwRV5y5CWSoVhXkw63zj9v4yoR2JeNdNqGrz4w1",
  "key42": "4pTcCd4kMzvRe3MaUqjUWaxRxjWeDkEXaQhcemxZRtptn9CVq8y2KBDhLrAM9GPfUfvYSynSVrkDXkSm12R9jJvB"
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
