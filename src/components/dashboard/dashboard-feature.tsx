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
    "2usUMFDBTrxSfNzJZZzLPX783aX54nMow4N1XuQVrJ2e5wM35WWyUhWHXDiin293jLx9q7iwdWRC9JS8SdsSLZ9g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JwzQmgsL8GW5BV5uYxAfHFrRtB5MeLMjPBaabyJZw3XuUJJgdZX43Bc4sh3mHJPeySJ8QvFns1FNLgDf7XTMQFU",
  "key1": "2EtznFCvgwQ8qp2oQ3J5CpjmeqLng8vcjC8KGQMvuemFcuEa7ye9HGFM75Q13ESTibHyN4T3AArosniECiLz7e1y",
  "key2": "3UUXHaFCLA3ydH4DQi2dBfKTvuJinPMYTYNepMNfT95mp66E2e8n3JKusongfYKfvP4De8AaqmNBGdSfTi3DoCZY",
  "key3": "nM2sif4GynAnrEHXECukiT6sWPCpNFMHykSZEmraw67aXFrJRW2FUrAozbsQeE4hghCEvDGjj58YKdFqB9z4MxD",
  "key4": "32MZZq2s9daXTJZd4j7hzxv3S7cQe225pJG5M6xv3MwSJuCNfHGt7wrmyQudPASAjsLCeev4tK2Xsy3YLhBrSUU2",
  "key5": "2GnyQvCXdWrdnHzZUCDhDcJFC1A5hKZu2a9viemxFz4sWVMGYL2y2ieRca4Q2pvFxhUAt75ERrrhFrzehPH5o7jY",
  "key6": "5nxUzDqvSvq1sGJT4Sf9xhEZMuBt7CAoEijkcvdFjM1vEhZX1o37v52jzsuyqE4hRzRh1z7EvgJGfKg9c8QegRpB",
  "key7": "1XVcFLW5DrQ8fXMdEq5cE2eaEVBesxgXb7HgLfaL11azMZ556fDPTxBM1b2Ca4PM2nVGEZb71my3C93CMFb3T1H",
  "key8": "4rLLjjrcDCCdSys3cCgnF4RpCuPq2FSuyCYnpnrzbKz7mMcKvLY5DZiT4pfsPupWBezTCAZg8W6mhDKbk4pAaxVY",
  "key9": "3GRTRb8MaBXVasq7arq57CUgrZXYt3H4prPcv41GG5JEfJyeiUX7eYHdJMbcXfKuyFdUyR2LdhXcfH8HMwSfmjch",
  "key10": "K7cT7FkHmTaCd7YsjtydR44Mw3PKxTrxUp5CnnRjyGu5K9eLNGDbtQuvgZUXSuXx6MRQQBKpgdQdSeMuMkHziD8",
  "key11": "4MkLBTHAKPsydUZDt8iMvKbtJniuGKgNLV86NXnhLhCjLVBh7nXXxcZAYmQhtjrviDS4mfzdy7idip6rZ4jUADRS",
  "key12": "kZZ1rAJ6rEyFPPKsJsQsnWmS9z9aSh9DJ3uFaoQ9wivbCF5HhpxHzyDGVLyVcWCxqmGLRtLjaTaQnTfxRoSGvJa",
  "key13": "3oqJGQ4RiDoUS3TfQvRCihxao66YvZ9TP3bYPtpiaK6szfcYDDWV71JX9WgGoDexA3wxJUitRnCaBwmRozwxxh5Q",
  "key14": "GWSMiSCxJfikrzzCQrjpxQXV2AAj7ZtVJ4yY6XC6NmkKYEGtymkfgRQhpjGiepNXe6j8FUAA8Ximw1Ji1gBK3B7",
  "key15": "3gWKxgNtw5i3rrrUUkC5uMrTdYC43ZKtuE9tdvcqSLFJny6JZL9YBEsptDJ4YywoBif7nTb6c9NifcMNJSbP8TVQ",
  "key16": "5KFZnxUXBWaPCPhDxoYoB6ZWu2nviJbBW5pZGTnNYMX3sUXnZTNzWaRnmhddUgYaL7v4uNXgY1aGzsiGPptsEvFk",
  "key17": "3dSqxjTqXnaVdXhP8zsJhR3vYhgAXihuMeALnDQ1z4Tzyd1sC4rXv62vm2qgU2LbmqnhTRCDPzFjXbm5HnjJEKm9",
  "key18": "3koPUnU7eUHv7LJQnZeBKGs8yVav2okMwdVsdxfT7VbbMeBf7QQtVcpTTkfVsGcgNhUR1ujXPKpDyDZMsoJQZXQq",
  "key19": "3Ud68dMUQs8TenNpjkboVN1mJwKgTfmweSbbJLcJSee7T1QqHZyE7qsWPKyzvyXMTZFWUrmd7H5BNqnwqDVHxEsS",
  "key20": "3NBV7yqPzx2FAfBj1yECcRdyqWCP3rTPvzYwNvULPn5HbbDUts6hiABiKHfECvZrKCLnPum2FqWKWJFaWdJVk7ZS",
  "key21": "64Y92V1D9NyVqUN9rC1PVE64LXZv8p3CZLp4bYyzkzySWaSrjBMUyJo5iJm7PSJr2WXytxgKUM3fns1QJMvKmu8o",
  "key22": "5jomthxyTVGykAZb3QgCDraVK6pnn6xAnbjBMs6dVXpbsAaXQWj8dZ5B3hmmqku8YMsvSAegJxgPLzZHoSsd3A87",
  "key23": "5EV4ange6MVKdFTykbVL6YfqZUNVTW5DD48fsE5KyneFqbPumbNbPEVASoWPL7EPLwvFjKKfgMUW5gXrrFnGLa92",
  "key24": "58h5fCe8RPV3Boo6SueKde7vZsWA43fVi3KcehHyL5aXmsNHcq2YP94r626AqwUMwxTAUcmkr62Dscn7rhxa2Pny",
  "key25": "5jeHvdeRoyoqsMwmLUqL8XhzEh239Vj5pinsfWBj9B4Zw5TsEkBv5fgU56S5TPZMPBbSktxrcqxVgTL1qt6XB4si",
  "key26": "2Kx7xyTwEnCUTG9B6WLRQ1tYwcjG69kv58bza5oVjvZMjQ9P9fvVnUtvxT6EnrbUKm2bqsjcF7M3ZRqkkpJ9p5eu",
  "key27": "5Su85ytDfLpypLF3axumvbFUgqxxKRP8grP7LL8DhnVyseBSyT1Gz4mpj45eb1DP22beuYnEe1jQ5z2cLHVNDGBt",
  "key28": "4PpoiJuWNrdZ9uVcRVTqN2cbusjsEtbZ9srcLyUtXFoDKqADvTXm6jCm5xHJwMf8XbE3WEbRP4tNLT6MDo5CDqpS",
  "key29": "4n9VESAyZxqoTkvJQ44fgFdMcDjce1B6dwpKqQ1JKWnZGLJQYD3aRfDMKakdoVtJ6TFtkto6yJijJJiEWKdUHfAP",
  "key30": "5XWoVh81XKoHcqE7PeQfR4wUS15MvkqMNAUva8pf1Yh5DeX91Ehd9rTvWGKUffXCnvGk79HUJDM2uQXK6Ras93np",
  "key31": "4UfbzVetgS28HeynreywJPrNMSweor1XZGCDY9LFfTgdmMyeuLRSe3CdrLVRAFsfLt8y2iVraYhgDKDfybrLgqWx",
  "key32": "RYijp2TNuyGk8QVKaBZxbLCPRwHWcYxXNc1zompm5z94r3GCmzpPdQ7rLHmAk6y3ijAbK9X3yPohiuKdBrGzhHL",
  "key33": "4mB3Ci4Rz1oVkG3j11H8N8PpMMCG5ypjNKYfhgj5CZWGujEfcY2U7gTnLuMUtZdF4nH6LyRbQcMAeZo7pQWqgjKH",
  "key34": "4phfwxRDFQc9yYTtKNzAaqEXxPv3XYkQ1rBqLBjufK3RL85c4A85Dz9rGLpBEBkcjskq5Ht7rMR4sdA2UFvUDrrB",
  "key35": "2NPUbgoyoZY3eQwiQuwYeiByF2F8C37D7gWUjGEDirwHty6K4VuSbjELN7XXipkzXoMvXFuShpKx691e4FkifWGZ",
  "key36": "5W3jNQc7sWuy2fZomPEo6zXtzN1QLxrkJ5S8Wws1XPB5vWxK6YaArK414MQJ3cGzLqEEDKj2eqrdNjuaTquqTaNQ",
  "key37": "4Xb8xkM9Nrhp7r7dLFMAXoYuHHXHYsa1kXbGb7p5SoAiZAZpcKe47yXfkjuttaEt2rbdGK4LcuGtecV89pxBEL3H",
  "key38": "2fUfQbeWomfWB6x8MpRpuQ2XjGQ8K3aX9q9utS7GP9wGAMhiERncaaxsNmDaqzuG4WWW9ZQahuTL9mrRvUsdc5bT",
  "key39": "4pZeeYEXR4V6ybViDKSpNsNqSF9jP755QNmcDNKzzK6EbFnwujVBzDmqCksHhMcWyq71LEoJPKGgJVN5AyGxUb8o",
  "key40": "3ZnNoLVvpDifbZXV8pv2K87MWTQxSPVtuZbLXyVUXgyRhWVFC5B8nciZnDrkgxxkxmM8d4mkQw1E5zpQqz635Zf4",
  "key41": "2CHGcWputUwEVBic5mA7TtCEsCcN42B8guxoX3PrbEgkYw3fmi8z6qxqWjFiZrDr77juKFLX4Vq2QtQVf4zbLrTs"
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
