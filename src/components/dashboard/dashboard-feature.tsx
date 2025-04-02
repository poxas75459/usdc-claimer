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
    "s61mH9BHEiZC9HjR5KvmAxmUUdTKiQfRFzngH1VmA9gFZ1f5njAPwYAmuYPq8VifF4nQMCRuR5JNX4ZLa7bhJP7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NKBpBzh9E13FkX4da9nwVeYKWGn5pLNrQEp7xYMJC5ray4Wz8wG1LrV7fNwA8f9GUCvsLSkFCQPLtriANDbJRka",
  "key1": "39DRDybzCkGYTYm4hUv3cpmmbrh7tuydhVm8L11JKacZUHBtTN5tHUP9cPgXsvS67CQcTZvCGi9wMgJ4D2S139VC",
  "key2": "3c6dWLJuGm39765XNBeWeP14Gyw1BcQqizCw3VUPnKkj4cfzg4rV5iiS5Gz21NeZt5acmMepjdW58wJQvapbAE51",
  "key3": "3pcLo4vaujgGab5HvYUk2qA6TdFBKmGBVxY1G2HbSyMjqvWJLYi9mgNXLD2kb5bNWQyLebaTZ3j2ANTWLn7wuWys",
  "key4": "5wRTKeHX3Eg1GqU5zNNsLAtMv1dz3xrVHKEqJTFx7F4oViNma5nWSdL1sjCQMPPJLwgWB3fXgy3LcmoNtyqKPW8L",
  "key5": "5EhCBgV7erM27HSLYnx8TD1fR6pXtLonPcbg7bLoDZqXK3LmwjtF8P9cQWhHLmTeJpoWX1UY3YgFoHSuTtE5YGCj",
  "key6": "HHfoMjFrUhMxew2jsHWD8NHYxZnJNsbkvTZk672R4rhc4atEfXzD74x8Yo4bAk76xoh7mZzkEwTAxW75Zy8x6Xe",
  "key7": "5E1jUpMY2NhstPdiuTFbB3KPbDeaXwAefTva58LXesYvbs6U3Ht2mmf69YcmToMBr6Z6eCzfbJhwwNGumyDqAaL",
  "key8": "3USCBxYNVuEXVG8DsGG3Ky6DV4TtCAcLW23BU1rgatWEMFuSDRWktfNFULoZZDhDP6BorxMVgz9okMeRnnqTMknY",
  "key9": "2G4de8xSBiEEJy4X3JwZ3QuYCeeig2Rv2kXwdv6ah6jaxnib9EgnaMQVQsvCg78vUfXD4yCJjnbXNB2Rznyc1Rty",
  "key10": "EWBkK69gcPpA8iRVNjjByoauYbZ5FZxBQKfhwtqQ1z1jFdpTVnBYGHUMXCSSY4r5pYWtnEpiL4cS45PJ2QBhEnz",
  "key11": "4Ej1oeusMUEuNspynEFVF61P5jFLfZxXWZAJJHSy4RTnY6W5RayekSqA3vQrGzZibPeURfMkWBs8pvLECHhT2kFA",
  "key12": "4uBvjfCrioLUr93ycajuSBQyeCd6xD1SwmvVg9qQYLPgLn984sU3UqyWAj6WyFqZSLQPRbCbBcK9WruPwQTrQAi6",
  "key13": "65pBBzx1zzdsn84BcSPn4aaPVSjAii7Um4EvpQUosMttN71X4RV1rBbxM8jC1XE2Ko393BCax1LfJG8nSL2NH7Rc",
  "key14": "63v7YxMf6yNHPUbwmS1Qqqz78idTX5GUQQZNLgJtLLGqjdMnahJafH6Vi6r9dixMRQSHW5SnEkbpWZZNvisihrnG",
  "key15": "5EDnyiTf1NhSyeNHYSWoV2mqeDFAixjtta382a1f5wrhaK1pEdkqMiZBDUg6QFvrgyRLdQRNRNQPmeq5ZowBfrpe",
  "key16": "2Vy6iKZxFdpNVkMQxJafe5Egg92T3tEWwwCo6AKq7iMbbLDUTxZpMYfWZdoRuE4ATM3PGh758paJ9h4x7RBA9Wgr",
  "key17": "44ypHEanzYNUR9SjrRiEGQG8E3QbPzkA24nHoVUFCLVuRQYnP8xiBXULjHcL75PUqXEYUqgfYqcyfZ8M33Y1Si77",
  "key18": "4usqtoBj8NY4SJea2MiEFRoDUaXYShDKdC7QWy4DKn9A1soSG2aj59seJ4pTMJpGU67vJUpU5xDAqjmpuWx76oJL",
  "key19": "YSueom2AUggWncLXMpaFPdsQi7Wcn9bWUSFyFjqngJ93RvFEwNHbx3MjAx9CbyVEPS8NBMez4oyPoKrJQ1a8MxF",
  "key20": "5j4TP5dhAw85hnWdq2mkFT8kxJafq9PffbvBewhekh7WqHAEZN5cCQR4qSTKvrSzHvrtanzs8qLrzWZPVoVy6ihT",
  "key21": "2vTFJj5S4TNgL6B9KRwjxwY1wJYDMooucFFooDZZsAHRVryXA93Ur3NXyErA4yU9WDHVqpfz5SZZmLXnH5iJ6Nyk",
  "key22": "ZAXfcN49fj176mr6dXTaQbG2nc2ZBpY4GfrmFiEt9fftiPzK1ZvUsyW2LccXJ36TEKvDDU4T5fCJm8SyP3qVbvz",
  "key23": "3BENEJx1hck5y1gwcfJjK92u1hTen3WEsoRUUBifSdRcAZvppMXWFKjw4egtPK9cgSo9FQE4jRtQWKCLdQH7KvuN",
  "key24": "bp5SDjSuMPvTWhuFCnmcGifSnCySrsV5wQAgKvWvvpQdfj72n7foTUSerGncCNxb8wvv4V5DLBRHPqMJb95wzKL",
  "key25": "48LdyWhrULz8dX3dVjMLzVbbAg7FvzNTJB2TXU4QvF9bP2NAxg2aufszjofuKwXH7tz6MbxJqUWs2F1DzSbCaNU9",
  "key26": "2P6GXdFMskBPMF3ZbZx496ubz7K73hazB4HuL47StoKVWaAfgmYEkQBDvj1xJgdrm59DHK2xSnEUWoDYQoUqS9Ty",
  "key27": "efmx5s2ZhLUmgK7UFXm6DGHmSMdiX777Ys33sgDvomRddEHnNKHRAkbjct6ukSAEX9TSFuBrMp6gaMUcThS7e9c",
  "key28": "5WV5FDrBz42m1f7uo5aqv7oeNHgJ78tVFfz6tVLCF5SDLthMw3hE7uAz75ihn7MgMwYCuWvqEt4uzjSjkDumsJdi",
  "key29": "3wsPWQFkMTiFkzvymX2aQSjZ7nubBFA2nkAh5XgF3y6GchEiLUY1o9fHSphNQ8VuG74AaLvtSe1C3srjDjrvEJ6y",
  "key30": "65n9K4VUrkcU5Fuk7pWukdDgsXeBuHMGz9QsENkqdeDjz72S6Lziumvf7hQnM4f8ertzS1DNxiDqyKXJn4nGrfh9",
  "key31": "3g1M5KUBUuyVgFLQGMcnMR61gd98YMMzYk2Uk8QG9cbJYnmsTg7M5rCPoybxsMJKi4RXJpzYoDr3R6tHtJRUf7sS",
  "key32": "exfKfNSQmaVgNx5JXQxsgzL5xbYdjWD7MWLEh8DucCvdDvTfagFbujVLzftK7FNbHogRuBVAj7VE37V2DpMv2u8",
  "key33": "2UunfPoEuc6QUp4krgzoMpzhrTHrVoN1aAPHmEsydrmn1eYLYFLMPhqLE6ddP3fZFKehVb3t7UEk2h998ztntBwm",
  "key34": "3RSDfdNL7eQdK3bFr2XF8ppE72FQj3TVTAXc1eBxs6h7zmUTjXYJsMyXWevujvk9F4JiJL4Acyx599hrcXwvSTY9",
  "key35": "5EWsZrPn7i8DbzaA6n1W4an98tQFJE9HyQSgCiYWG8s5J5YN8pKiqkZfKMiTYvUDT68vYktMhkWwmeAEy8NTRZ4a",
  "key36": "2cyFDsZxe4yqHjJYWoX9mqd6HubNFrpqfCTh5TnLSTW3819xsigSVwSSNGYvm9EK6hDx9ot84G8go6d2HWMZu79V",
  "key37": "3WEnxf1ezypH7zVj325uZ4ErbvWePksZH9Lf852fPBexrFFX9hGtMWKeGLqxmKttn2cWzHRnGCRT7YJAhPjFMuzD",
  "key38": "4RhSAMfsrqSXPiabiMod41vv5AdeBvxrxuBZZpdXLNnE1rW5S6QNJuZyV6LLgNSAU6LEGbt1wrEpdBdYUBbkzuY",
  "key39": "pKaoCDJgsDHAadwbbPWgUcECZUN8tfFENvgwqAEQbVBXRwXwgseYS1vzi5UCQoMUUcgiqTtiHfxTewkKhBz8X9M",
  "key40": "5BzLxYygXmm3YQ7J4RQeTMLRuk22d6aFVQWzQZ7TELgFWa4HZ85atksiUWxpYT9572b5uFkcriTBsDmmWh2m9p9m",
  "key41": "2hTAdF63Zso7MQCL67WDsV4GSd8P9hksJhjTyrFSHGvQfQ844dFJYRFV5aCXwyHLuQY8mnF59LLnSxh7S7hRr68S",
  "key42": "3pp8Wg1tRj4s5oqYQsDqk72cf23acim4s1m5RX1eZoB69eJzPAQTcTHqjN8ib7EFpnvhPzvD9pyXY1GCtkaKPjiW",
  "key43": "5qR4eyKtGqcGeNbqwwKVqVFqzoL8Te1EgeaGeD7nNLVfG4r5B1UKxJtwvVBBi9SNXo1AUL4E2QAB6svss2HZzTGD",
  "key44": "52kTPFE3fNP8fPZnbgtMxz9gUnscieSAurV5EjuuLc7Vjtdj7LRrThgHtpM427t2jhp3jL7vT6HTz94jZs9u9tMx",
  "key45": "3qg9QivbKHiXJkTWJs8cWmgVvaSnWL5uNHCvp92J9UyTn3bjorjiKFNwmCMmP2mYpSbVr2wrL79EDCXgtCXs6nJD",
  "key46": "dMqANkBFJoNBEdpwnc8wZ9GBBipaaMH7c6rfEeEbewC8M3z5jeyKGHxdNWhspotguz2Ag8pFDsLtgC1ZksgCAV5"
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
