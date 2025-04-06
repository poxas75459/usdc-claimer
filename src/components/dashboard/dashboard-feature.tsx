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
    "5tdB9tx3zP5ZRb5emqqZV2enSapbKzY5WbS5Cb9nhRYZUjWpjX4eSk3f9KFApe7xta6jak6kngBgo1uyEbNGvv1X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "igeJNAP9nDZqfNUHdtuHh975cftL8aRxsMihbEjZj1bkMuxaqwdcM8NajgMyxhGHd9gL37pWx668dAgUAw5f7tx",
  "key1": "jUzZYBhmB57uq3TqwxAtXVNUxdwL7kBTJcPK8vJNUB4zxofqyL83KcLXbqk5XLXN3zwgkCi8qzJDyADYfhFbH6s",
  "key2": "215rqxoTL1Jd87EUUmhgC3ZvPeuLmPLbQsPQLv4y9Ynba9GhVv4VYg41r8nkij3JfA6XaPdCvqVVTwDbjM8jXymY",
  "key3": "LskxtEWddKcmRyrvu6zctbFiYLaxKdrcf1BhFSgGQcmjVNwa6gwvACBnFKobZXNvavuZBnJgLjLqTjpkQ1fxEMG",
  "key4": "42i8br3dL9qarbbpY7Qp15xR7PYjk6Hp77EHZaZxpdiW3TSvMZV7VjNBGRJWzhkkXLFYpWKWT9mWK1CoaJPo3QoC",
  "key5": "4iwcHq6vVwbY8ca7xaAQasqsPZWBHaYTkLTxd8rMsRjGyAyFr1WgxPv71TtFKjPzk7md9eK87kPYk4VQka1X8i9g",
  "key6": "3uTciALmK1zo4VLVJYcPB7TFvyygZBNcDY8e7CBMqXCFpUNd6hmU9cePt1mxzbbxr2oGL2sgBcv3UxzuyojUiavX",
  "key7": "3T2zW4PAJpwRpdjx3BhQcYuT7y4J9vazJ7ivhhxS26pAB6Tn5q9TLLvH2zwDm6uUetvxekA3dJFgvmSNHcgtABZ4",
  "key8": "3hSmp6QrrstVe6GCEKyfwtGyg1Ku4tsfw8BGioeDVfLB2DjT2jn8ntyiXskTBVbmxzWQXGDH2iTh9sFVHRmhRumn",
  "key9": "3Uho36Zyy4xTmBPBvh3xHCCLynxYaY6Q5oHfxQXNbFbfkBYt7HYmV6FFVRpLPzcwJNhJpJCPNoBwwP1AfShop5iR",
  "key10": "5LrGKUJeK71q8ze6d2BmXCyXBT27jM7XeUw4FsNGC74LFXC18uHUrA6uUseHYbLr6d8uS5jZvzArMMVMFhWiu9cm",
  "key11": "3aGhhPnBhX3m9b9yksRG2myTzS2GmM115QDeWDY8AXua3KWLtyF1LHdBKz4CYusib24vAsiTwtv3nVtJdfTkCVoQ",
  "key12": "46YYwFLCDABmAKRvzDxtCvyvBjTUG5UAV6cG3PD2HFwmvNddG7UUm7jzCnA2W5nNf3buzg14AkgHoYj1TKEyihyf",
  "key13": "3WNvqzKkZk96dT7GmF1wGbsPW3nzVFnbdEt8d4cibKhbxYeV2RFwkkPaAFeMurZPYTy7cP5Sf4gt6SXtMuc5XbNg",
  "key14": "2dRxsm9ezzKWY4LqKTJTPfN5XbZJg3amgXTMnFVCpDMsRKRAihTu3StQ7CLeYsfuTpTxmnPP1SWJ8hTf7CdZg887",
  "key15": "6KUFnsz4UQCnLS2GFZUEzXkRSosqS27TaSnym2mHVs8iXvrw2Di4knFSUCJG1qffE4G3c9qhSTVLhpK3GUqqiFv",
  "key16": "AQdToZsc5UeboHgeDN7Lw49N42UNAun2Mpp6cy9EUYxbeGwPgzbNK8vYwFNdyfxqTmtX84GVXQiMohPbPMmuvJP",
  "key17": "64SFRYh8uVmmyB7iRcZmqH17vfB6qqpBjeY3TKDqAzAULL2CGBbDf7jKCvDMXEPmCPt3kXGvHij54hntAwQjckwE",
  "key18": "3qJwHwTSHkLdJFGqm3vSxPp3P5FjuzowKmw4MVNYZH3Mzdd8zPA78CHRf55Rnd6ANwi6ZsfH7BUjB6zGehHxbXa6",
  "key19": "3q9nPr1WDzaYbGYJRUuktJWX9YGPGAoja2dajSAPP4zp9HMaayabd8pgrgBH3jSPyjVoqyugtWxJthrkTewwqCJF",
  "key20": "3WeTbrPKsTUBZHXbM3t7e6aSKQTeRc3UZuf5QTXgTeRexYkRYksD3UVbNF2ttr24B4BNV8aHzMY8QSGxDyBRXgD1",
  "key21": "dZZjcGP42k77x79xR7qgPmNcgUkgg8Wwg784xvZ5u7UwQ4d3heEpyM66imHskvr9ztDvuJsyRXdibv5xVQFV9Go",
  "key22": "vK5nJZeUjHjvs8dNWLdG9HLzFXfTBbjoCK9RxL9L91MY9bmb9rrUWnuGQw3WKuqNJKke47cvsT8g8P6xNowq89M",
  "key23": "5VsHZQGaLjLF554LRQ8G956JyaSpoxBbrbrKkqkY2geHQd5DRrbLc9WmZbVj26ZkmUPmJXauDVYVAKGz3tvbtpTe",
  "key24": "2hx3EsyNDPXbQr3b6pGAg43UaBLacdJZYoLgWgRxvyAHMVRWshR4FCdTRpQrEWQq84Q4tkXYTPKWXSHuPW4KG2QQ",
  "key25": "4ckBsUm5N319xA19x7zFo5D5wCmYvQmXdGQQhxDwnhgAAHmZsq8HRXAD7SyUfu99qeKQXT3LymdY8g5pv2UJviXX",
  "key26": "PAg2JjnVYsWPVuaq58j35kvXAnTMri9Zp9J6TfcWYNLyKJhxQCcRyDQNTPVwsS7y2zMrPQhjYB7sTaNzkCTQew4",
  "key27": "3pTMTPRTDBGHU4tg9U1d7DMxhhZicEXbK1v6crgF7J5BxbpxQbUdAo2XMEDxj1ah5iBQijKgadNqRtgbsjWZVtts",
  "key28": "38bgC2dijq9AkLnDxHigD4dyjMFb5gpQUhp5jmJDjySPMUz3eZDZ3SApU5Jd4vwNazYgGfea2QR1296av5NjoWPv",
  "key29": "KFv9nrUWp56C5FvZjVWfkiqE7YY6HXSKZmVU9GtJ6SBF7eNnjDs7WyTYftQa3J2fBHeeUSh6EbwKxGS2U7tHajN",
  "key30": "3e4jsezvJuygD5PSpWyRpRtTeNz4Na7MRC3QnjwL6mbL9Hs6Tztt9nc9rFL719pfoAFxtZN4HC8eY3NCn93eu9CZ",
  "key31": "4dftHPqZoVXTZVLiPWAgD9yWKKkGshSXq3PKkLvt1TCctToH85R4YXkZrncYQww884kV1CMFKu6Ud4x6YwtPvXtd",
  "key32": "HhtpULsRMzFcstkhzj4dirVjZEmZJ3XJ8mPnahpX8N5yJTUoFuuNvrnB81HWZbxQpJ192HtMa3s7LMbHFyzNTmD",
  "key33": "4VUk88yzP1zdALVRGMYb6pc4dmfAijbmgjrzZYdCKEDeJbB76YdQB7CaDKQPSQq4kESoyuXoMrBRkeAAg6FRyGw",
  "key34": "5qDeq1yBmM1BqGtCTe4t4EsSDY2iN3JBhGzmPJ26pPwgiwK2gUdZHaz1SA77fA2jqshEDuULm8ahq914BMAZXQVA",
  "key35": "4psuuRX1dHbrejx13weXVpqDfmLzwPaaZ4s23tvkoREQayYZraH4T7eQsjBwBQH7MA2jWxo9cQUHupQFWmy1Mku",
  "key36": "GTWDLHsLRKk2ixwQesPDgFqQ7Tdc7FiiqABpXpq1cJVCCjNJoVM32UQJj2rMxdNZA1fKvdSqE7j2S7MTJ37ixoY",
  "key37": "4c3LKsbiKhq9Famyhroet39P75BwUABfYdVg4NQ3zGFH3WM3F1DxHa3jheLPK6Jg9YexjTGDvyDbwWKgk4u9i7d",
  "key38": "XAuJxzuCQ6zaRGStdgeR9C5nFXtW8C1Uqi2rE6di3a5Picsp2GiKCxXMCha7hHr38KBXiq5b7draNwTe2FVLMca",
  "key39": "5uczvBvWhaxAvKg4Mxw8Sm7iSEkEF7j7tNq7hW5KHSfiewmktdPAjiys2sa9RrbtHtMvmbNSCmK7g73N5GbN3vGz",
  "key40": "5bpsMHLp7SBuqpMu7pZvPys3DAChyH6poEHBVuogVpE965k5TjscmVDM3aid9KaRwf8LrK3SqQUBJgVti8RgtcTX",
  "key41": "4DkQwFjFcQZaCv7nrR7zvNyQfW9KEKhy5jShdWngAsCdchhy5J3vHRAomqajEYF99QbkkydRxKGEzgqPKVVa2YkD",
  "key42": "tei3DjW36emcyD3ZzEVnErNVgWTBt6bqd7bKkgc7k3ZuNYUVQ5tUiTdhDhsz12Vcab7yU7dhxep4T4eRFWUr4ZY",
  "key43": "2KtJV1gKTahk1Rqzx8Tr6vxaRSp6suiPjWs9fHJ3zt8Tkzf2486NWReuiNKJ6guzaP5VRmMmbgK4Shf5EoQANxYg",
  "key44": "2AK3MEr1n1Jbsiq6hJwVNNRVtPW3a4nMxG3EyQPKuJWKPqQET15mRmWwmFw1rYypuDnwdWeDaGPJxq392AwNd2Tb",
  "key45": "4mbmcp2D2GEcAMQp1QdoFeoH1NgqPw17x56Zviwxc4FypKnhYw22Yp15X7vXQJqc22wMWt9aKWPGsnsiUGe8JGMf",
  "key46": "3RsFJR8ZNVKtybU6JN2i3BLiVPZsuo6Fz9kRYB9vo1sitKkgWBbbngrBjrU3B9hpoL2G5ovsPQZuxyNg3Bq6igg6"
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
