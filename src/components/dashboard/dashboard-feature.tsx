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
    "47PCME9D1TGVezr5xeDtWGtu3iiKu5RP83jkKuHDazxhn8Y5DaXZvAGUAvgWxwrBR9jnu1EThBh2WfndakhMwhEs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52tuSW3bXTf29S6WskrpEDjYgnqXYPq2w3h5LiM79Uo1JB6og2sQhgezJuAsFLt1n3hPX3KK9dyZNgNEwhrrzU7J",
  "key1": "3qA5S7ytnuZondjafJwAXJfF1EWedp3ZWuTqXmPdwiAXUSKSnY1LQrdP34Nt8p8VViEDpUVAR6vHEkmTqsWsNYp",
  "key2": "5RX7BTv9JF32LdZP2HF6VGdwUF4odRxD2Xpz1ksAwhQSWZFjdqfyZubrMdB3NZrv4t8iMPRCQKskwEsLJr746qv6",
  "key3": "3vAFzKRSvYpmcVtSmrweVdEHVLGBmiLrgiNDa5vjz6Na3ZrntNZKwWRSwdBPTvoZFC1NgZrXgW2iFneze38ZHGWx",
  "key4": "3u7CqAVuBART1FoBmKvLbV1rGSMWnzHp9FB9Ln5XWe2M33rmJatYMn9YfVYqn63riutHkjrQPfGgwydffM17DL6e",
  "key5": "4tuTZd98jtFvmSXCXjT6rMyShEM5iqua1Q4c8TdWzkpZgJUjMzVPQur62CqeNeUYaz5LZQ2wYBfmK4VRipZEfbn6",
  "key6": "5vNcQza1T9UyTSr9kLAxQgftijWiQco5Ho6eBqzBJFr8z6gyR3oUqqdrEt78FyNeNyyNtJ4Z42ETUVcqHxht3tb1",
  "key7": "25MwMkAu1FoDLKwqTyDDYRnCcen3nHY1zFqFTnHqmCTNVHbEvBA2ciPbNSqWApZJJiSUnigZYyTTQAq5tLYWLWxE",
  "key8": "5jEg8LMo5FHhmfuaLwQh4fojbqj9krpa6DGpTcd2mVucge8ojFhDbwTUauum1vwz8cV9Tr5JqK65KCebNN9Rvgah",
  "key9": "4ooob6eJkb9Z7JCbVBu3njWWxLBzeRnA4m6PHhmxyvBuSzBHqsdxzM3fAhjg6eZ7v338GUV6vaMDQTkmrCN5Efi4",
  "key10": "5ZnrGq2zQrJHSZY7adqndigAqgEYr8hNpxmB8GrUW6Ga3iajhzgvvs27Bk3YF1qzPjFZ9N8CZCRMuqRCfjZYmm3p",
  "key11": "2yqnVaDC6GfU8S22gAiJtFwHLEc7uhJUkBd626WzdDvuUbZ3hDLYyKXUJqVthnQien3o7ZUQPVJASXzRTYmYj9Ba",
  "key12": "5NoER5DZ6M3UAxZyez53fG11sKTHonzz8ZytgkAEmLR5Nsb7D56deJSAde9kGoUbmpYUKB4EVwCKArqiVvATgVw",
  "key13": "32mBZCLBrfGQr49vCDraD6mkGG9s8oEeoZJ1aPS8k1CryAGtd4jiQLBrqyWFCrLu1ZUatuCrRDaZSaZfyao5q6Lt",
  "key14": "4nQgHQ4zbJ2GCEETD19ajuq6v8gbvdaSFjc6KNzGyj1h96AwjJ3x5xneesMPeefKnE2ArMABpB5woJKmb4WgKub",
  "key15": "639qVZVqvNcDvCDeA91cqw6sxm9ms9UoXwSvUTvenMYSxDAMK8SnTxJrxZ2cfupYGmcxweeeQtkngBkjwhWHSTLM",
  "key16": "8Wn3uzbZGfsWM1Q3XWtfnyEn1tAxkdYW8fNMmNMzKs7zJ9aBiXCvdjbZqwCG4wtB47WyhM7hskuAAyvfd5TonP9",
  "key17": "58f917XRd6i1MCBdQka8519PJaaaaaZM8X7Cjs5UAYiGvXAk82e9sHRNbKCuC9RXUx3GxjEfGVvPvNstrzm5RgsT",
  "key18": "4ekYLXysNga4FJdP5pCJPQ6KbnbmsBgvfqu8tVJ4GTkjKro5ARWEK5SwfNkN3jPpP1vaMqtgzbLBAePUXEAzC8vj",
  "key19": "59ptxDPvpyjKjpNNGwKb1Wx2cjbs4J57djDKBfgzDNr3Vi8Pq3M6RPbpMBo8FZqVfUHPk531BwEB9ZjwcfGyRfms",
  "key20": "4awZrja1Hr7FMVwSDqRww8Zb8FH7iohZUmpcwRjFvf7NyxD4CWMuFnMz4nXhowsiFBP7rDy3snCMcCLF86RzDDdr",
  "key21": "5ZBmGU4PCFzXWzA4aUc9HMj7jRtNYCdU5bj1K4fAuTWXwVRpqWJNTVKsTJC4FcuJMJEpK8Wgt4Bq5UyRnXQ7Xuff",
  "key22": "4PZSEW5bqYgoHg9HV254gSK9ZYqKXwV2HKZxRUiSNBUi2YvxKrTTsYVRHUntWTKDVYkD1eMB3jjdLEfCLSMyutGJ",
  "key23": "2PgyaDGa7k5ENU5Mqhm8vwsFwCK3BpKytECHJCqXpBrab3cnvNuQMQNxJNasns2CkMPgvaKDugjyLANppKpzkpZe",
  "key24": "3vmRYMEEHHVpgFbMqfQpvHt3W8MrneosVN9VhxbmDyBG9W4U4ga7aN1EQ241a66Jr3sQ7ifVMnTAsTLrbpKzYUCe",
  "key25": "2D38A6VEcp7x1ZHPUMCmaSc7LyXigdD2Cvukz6Gp3YHK9n3nSXQD6X1G4umL58kNgxSq27d6kbwzsyPu3fjXshii",
  "key26": "2uGWDfYfDKJ36n6VT2mV29d8v7sRFEtpEYQADhBV8yFJCfNUNs12YiDBBv1nQu46xZTEVB7cC3Foy9RqCaxj9SRD",
  "key27": "449L7qcENWkvq8gpyzmkdET2ehaS433MUwwjpo7TWAoaVgPvqe1abyjBmqwFZWtkxeUu4NBSdKqqiEQ6XeaDxRsJ",
  "key28": "4xTghZb9Tt96CDjUAjVFW7jmR1kk3mR1iR5NJGrpbpoNLsY8fseiJn2VpjhetuPX1yMg8Z5LbJzgp77nBnXUiiJV",
  "key29": "4GEMGY7kdvJnjumusCzMWBtocUH615d6nQFyWsXWgvGsKfMzbJ3XSpD7JG7RAJZCLPBXWrNecgJL5gMT46ToP7ii",
  "key30": "3hWLRLEV2kF4fEnsdUgyATdFbMP5cqP8W3FSzNHYtZKjxQEd1SRCiTETmHg5WpCWfrCbpyyB814MoRVbfcpJgUnf",
  "key31": "E4FXwMvWAYrSZcF5ev3SYCmqPYPA3oFDGqHHssmdhDgaxzu7b9DFduTVhbTpS5PUaEhzJTABYU5pxaDVD9DPBpZ",
  "key32": "3JmgB34rTcjnUGMnFMZUAPTjy5brhKwW6kJtSeUMEfPixYJMDeagZMhJXCVwaycTfxDzi28xNap22D153gAKPt5S",
  "key33": "2jpPRnx8gr5Gu2ETweViWB5xU4oaq6dsVousdSqKHLFeiUyhiHZPE4tXFTVmF2tDAveXbhETLDPoviHMjnXjSTbs",
  "key34": "3j2VuJLABTuzV4U4mxSbwPA2eKqz7zgmhveZUkNi1txNjkE4BHXAXrsfy15ezLRhaFwq14rLNyTWaiEic2ivQBNr",
  "key35": "Mfj7GaKwM84AaSYxZQ6wASmgGDEVhWtBEyrAQFgtMAoPxaiDL4Zs26XiKWQC1nHYsUq3fjbjXGTvB51Co6ZNEfs",
  "key36": "5QxXDoxRnoMHU52ZSMSTEr4DQ4crPr3oeB9sD37D8XUh6wMjW46RXp7Zp2HqksKf5QT8G3bL2XKNqPWwN4HANCH4",
  "key37": "5YkXCz4cteHCoopRnhpEB4Pqh8CZcV6NMy2bHtgGYbbpaqNCJFoTntuiTiPsw4f65yzmnQ9vL8agem6df3xQ7p9D",
  "key38": "4HvqULcDWGon2kLhbq6YzTWDHAHMMMRGC9vCGbKvRQr95faFKSG2avQZk4BDac7ANdtzXbTYnTnxRx8dLjuRmi58",
  "key39": "B6wnvXcb76jdBAwG256P8mTftxwgup8iJAgVQzxHma4VCi3Zv1GkjuigfZLR3n1WsENyr3uuA1nH7GD7ZTesxoP",
  "key40": "26VR2vKpcxvXDyisBQV69ohkAFfyMEXB9AZzfzJQoEBNkzME2y9qXUDbkhPpkgKbUa2nK5RgWYvcBi8V1DeRU6c5",
  "key41": "41YPYNd7BPFvzBniQ8S5mq8kuFm7RvqZ7DLsHv6EgJWafRrTAwZq4R5hiNmWrWbLk3FpjRKrxSJPkrNGRtGPj9ki"
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
