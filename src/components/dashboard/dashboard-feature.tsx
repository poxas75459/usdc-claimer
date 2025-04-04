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
    "2potgrE5qqBs6GNXHyMDAX9wz6JgLo8FDeh7EEwL1LuuPjPh8t552iwSn4cyw69HSeAq9GWkWgUHcBEs2cnBeN2c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jyeBunQFQv4GHmkwvP6DB3sRSFqXK2maRBmL58w6HnDnqBK5e1GiHHM7g8TRQzuY76jcBznpRocniMku75p4m8G",
  "key1": "39mh45PcCNT7UU7KYSiJbpd9WK6poAEbk2W54B8D3BJSt1pFRcEJB6b11zixWLpJJSKsmSxp7ttDmVhK3Z5P92sm",
  "key2": "3uR771vjs6ZKUiDfr8caSSc9P1qQ9JJi4SkDASjDmVRmbb2S3iRN4mDeMgqUZCXDNB691mskkD8EeVtZ8PdeKxAx",
  "key3": "3dYVBnGS1YgWXYeMCp5NjJdpWHtw5yWo5ATfmvFFTgThya1NAskxx9BQ5KiQUe1wXSiLfgvkjVhCsZEG9TqU2pVp",
  "key4": "VhDMxHALoi8iDqeawftsKVs3JAeXzuCW3Hv5qM8jKAyGGQVfHqS6RCsz1Xz3CegYe8Sw1HmM8EsfX1ewDY3f5BS",
  "key5": "4YuHvWESZ4iPaajyHwktrcyC779Hnec9dRWHVt1wNqt2Z8mkgeQCLVuq3s2PPcxZYAwivZRYKpsMoD7ymacHBAaC",
  "key6": "5tsy6Ypihd1kKMGz6UAH9jucuXqgzbhxvX6W3ZFXHVs1S7j6JYh8xgFjF5f8oGf2LsyaR4Qyj2q8pdDMZ7H7Ctm4",
  "key7": "2DUqPTxfFUNXPcW1MWdAH6DRuNoak98aFyPrvCQVCSiMjix55mk7K81nhYMXvRdDtuWs69HDAHYM4qBm7bc7s2YJ",
  "key8": "Nc4PBrSiSxwNs1UvqTeVWEiWfjqN4pLweggUwAP3YXzzpFufcgGQWwEDK2qBCgdoLW1fCQsEMyuEDF7fJ8kdATC",
  "key9": "2zBykNxA9ZDj48bJjx31zY3uq9LpbBik3QKwTyaLYD7suiwVHV5prY3SCN1qbAnbog39PxaqgWXbwfRb8obiyw6L",
  "key10": "4C5WQym3P6MXxEnWqiAcWMQUXpSo8uBDgicfofoErFz7wxbtLKwfgiN8BGWCHEKjpRBSw6M9bVX2o8zy2H8jH7Xw",
  "key11": "5iojitQCpkbc2tfVwZExoUKXUYJtULFNDRdLJV9HNM1qz1N4Dk5mvGRiBD6cC9viAd5vUhHbipxYzPphEAA5hkmz",
  "key12": "5GwZjkSL7LbbzM81jRkHinasqiwgXRaXwhr3yXJxNd3fnoDVqWdzbzk7C5ycQbxn47FutfAziRpHmVHkRi5hyYb8",
  "key13": "4Qd8ZAfUErEqa9qNJbfBVXYpjFqYoi22mkLJvhHnyMhu7EQssiKwzsCaPZcH9ybMfFaeNZmNrZE2rkQXB6h91J18",
  "key14": "3KfRTTPCapgVVypmS381pwC79cvoVaddx6AHfxAQJWRd6QYiSVHJCDMJyZzSLJ6TuihsRck7NcPL9StWj8sRyqQN",
  "key15": "2t7nBsByBb1FecxD1GQofDdNWnFM5DV3S39kCF4vMSNX5XgmsSGHdwMFw1CjH74Xb9yBp8XJMUCVR5rf6bvgDj9S",
  "key16": "4er7CCNoCXikUYLwGFBMKwGKnEreunsgms5cMWHc9yoRb5b56E4N2yakoXdi6Lao9Jk6Fn4J1cB8enJuQmuYrCRQ",
  "key17": "3urpHwrnx6JZdo4ABNuzxMqCxxT9twj3tW2EJTgas3SrxjmB6Uq2b9nefLEkP68xudsyNrD2rWwKVcgDGjRkDiy",
  "key18": "4dVKmJWnueDyfpQCCZ9KWPwQPdkBQvnXcMUuUr5q6WzY93gBFeG4CshCUZ51UmFGXAsgwVGbN1B9RSRfubmWFcdG",
  "key19": "4QcVS1argWAqCY9fPdo1seK8N514rp7r2S4X9RUwYpyEQre7p8wW875H5JNWET9iYYV3ogNVXBNV4y9tHN6miq7o",
  "key20": "5bNaNPGdXctdLjVpCWSaPgD8nXqPt7VxPr1B9QVJzgxckjrJQZqsDRF6A8b4jXuySBJ1Q7PHXDphEEH9VpY4KDrU",
  "key21": "NqFCTryVK61vVe9L61RuSuLnhQ7LyXhfe6kqrXfxay9nWfopGefaKFkDTjQbx7YwTurcdF3KbMdtkzqUvQfMKH9",
  "key22": "3k1RtQfN4ibKj1FG9zHNDC47MTQSxKsHgLfBmCrx1UQVb8xg6S7YeEhZCMFK35mjtqGRNtpbmnG522nJdHjgMdxe",
  "key23": "62gtTmYCDYSYzibcLendC7GbrVieJkvxK4PNu4BJbxx4MyBATCv693JB7xNAmp7gTLegc5eksXsne9X55Nz37up8",
  "key24": "5tiCHpSs2HpYR14uCM3QxmrwVq1f1iHVyoM9eEaLxQXLpCNvt8b93mZpCvUHMyT1jhJXsS1wwGkVSJTtRB4a4Qn1",
  "key25": "38LrD1ZUkTLQWVja2MPwS189HVXL9pP7n2FEwpeefqvoJXzKsoZ1wi5a7Gq4fXXZNnWMLooKhwXutADGfm56iNoD",
  "key26": "VM4m7TA46LmNJwhsj6dPKnsUw9pNnvUaKWuXUfosyzLuD43E3J1ncSggvGLA9B4Kn8DDtXnkmm8te9bDcvdfxpL",
  "key27": "27hseqiyi13FMxMLCwE7SXqCTNhCdKHp47KV9aXdRyPhTakNKPRNpqEsny8Da7cHS3UbxkFBjkCqQB4fYi1sA45Z",
  "key28": "4eJ94M89Li7vnD3NkTbSauhayFX8ChmqQFa9hxdKJCFioYViNsyjNJy6EFgC6v34LQnFtsGiLVB1sc9fNPPSiBrV",
  "key29": "wjrR3s6fRfkRpv6a13d7Eyoo3R4RmNZZTKoEuxTfqEwERjKy1fuQxrWBgDyXdxhguDyEyZNGqr8ag3HmcY2WKpF",
  "key30": "3mFp5erruQaEy6sJWt3tELFKo7tLtNLofQennyTDkHfpPHYk8uZyzPfawcDDKoUseLFj9Sad2DSYcg7ThvU1ajBW",
  "key31": "67RsdZNSQh1U1iZLJT1NPi8qhLpvTyN9jqSxdbDnxmSy7NSWDBWANQ4CP1PhUsvaDh5wH5jqbkQNTuXYUPUM2uZU",
  "key32": "5bzx23hBVXnMUCgFeMdHPdubmxHwHiiBVmraX3N5h6k8tPyvMHEpooo5FsJFFgc3Q1NPLvA9m6hgmGGamdJhUPSV",
  "key33": "uF8icNwRX71uA9LgBB1j87xuzSJ8WwyWfwUGiiPK9vYSJm6tB8SxseF5iHrJ6ftAFM3qkXM5Y6fwBvV8JYFPFym",
  "key34": "4b8qfFKebTPjkunKSUD944r2aTQYwim3apFuBuGLT1DSSYQDKVgfrjfX7d8X2HYpoy3u9NRdSbri5MedmrBjuneA",
  "key35": "3mHG1zJA2QEXhyTsTtY1iRSGvvaiPKNAH2wvcNmmtSgoZY8oRQe3nj69YGrrU1X8ymw3PziGv87URKbKCQhHefkE",
  "key36": "2UAgopNpJPbzwA6mMpfx8cBsGC7wS9Hj8gpyPgtghzgt3V8nxYhJs9j3vQzptnAZjL4n2pbVNtyXPFC2hdoyyoVv",
  "key37": "5mzW4Y7t89PDT8opfozPAknYwTxcLq4hA1ivXGWm4T6KADxqDpJsnf1Xif8cuuu8f79PRbstd7zGiksxbj3K5Nkh",
  "key38": "2oJkHRJDzaS67TVj5htShVLcrYQbK1Y195Di19Qq13KSuCyyLsCr9SFb8wGXM5yDxw4PBQwKEy1U2AA68z2chWMA",
  "key39": "3WwpYdJzYwqFjo882vTAvfpeRhJbYboVdVwQEzWDgowSVP1pVSM97twqeY1zTiEHUBBM1fnHiUuWGvzEKt1yo6ej",
  "key40": "4RwcjfYLf4Lcpf7F53XdhKx522Vj4A59mh69tWHcjTyeth7E1GSHc5ezhPrUF79V4kXh6JrsCtoq9uTbSJ2ivkAJ",
  "key41": "2hQCrUhxVV4sfxj5e1wqGS7iX3SuxCdRCPVindLkcQkw9gL4jevv77efELcoT6ximD88THjKj3xJ1vZss6WdE3v7",
  "key42": "2jHVzN1MTL48AViXQmvjSF5kVQZ33MZsc3hzbxw5rYngkuPE3cP3tcoHGnZX4hG3WTQcjz5aMsVancsEZ35mDQoN",
  "key43": "WcEWGdigqYyPRGkzuknT3vkCcrNKUZMtousBNz4iLfbwfe8JComAFbXa4cwGYCyFL7VV72ZpifRWAGUqGyAWtSv",
  "key44": "3dx9TyXDeMm3xagHF21ma5tZJbLkFwXphgwFnk49VdY52T6dRUt2KxjhLgVGS8CKXn56kpFFYX1Ktu2fdcLnh8m",
  "key45": "2naTXtTs4ai1j44D72rxsDBGhv4jMkNCSuyrgD2PaJq15Zi5Qv98bowmu65NeMuC5SNFtqwAv9QWF7FYHRHgscMg"
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
