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
    "4ENuSjA2aMmtNV3S9d8pt4Q7eddde7XTRVag3YPD66CBR3g4xZjjTn6BY7WQ6bKcmsmBjwQmte3Zo7LzunBviXuh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "393mQD6Ba3VHpQgd9XdHTnQJHRKVmnkgrZuGXrJEbjb1FTp7inTeRfqTJUGur3s7FoVBnyt5eqzXT1aN1DVhLKij",
  "key1": "MDgLxZrTz8F9PsQMB41ksPtHfQk3idkzv1Mv9DXzNGTKrixRwFGcRLycgoSE3rG2eMuW3oNQtXDQuzf8rd6KXPR",
  "key2": "41aSUoz2BXDqvHyeNRdjot9avhx2AaLXPPzwzHqaSAT9H4KC4RVuaLRZPbRXRaCcAbHtfN9fvcbQWiu1gaRMn1da",
  "key3": "yr6VbWyuwTE6Y9191koPsZ8VbSEfKVDH8JP81xURR2wAcWXdkpV9GxKP7n7Qm9d2YXWiUJgKCmeGsbdkC1okpx1",
  "key4": "2ipCv1QfJAGSUKbNsbMN5kchtzxqUUhfAPaxjCRxQzt7UW9jHyjGy3upi7RooFrCYB8LB9g6BscMdGgZRpFZW4ez",
  "key5": "2EJ6WhB7ijuqHgr9Nmxnn27kf9A13gfsdYVJ98avkG8J2Sj7ePpePogzUWVGVRwp11Kyg1HHLEN1DrQhPrL1EAKG",
  "key6": "5gFjLvaNgGC141eUQhqiCq6dkSaaaojajdRELY8zydvFdZRChBXgxJG4YDn6nuyfWXHttBxjwHdr3xWQ98XtgQYV",
  "key7": "5GS6KJUu3MnV9XPRENY1UfWJeWAk7WLqtcYxwa3D9Q7ccFx8P8MU5S7JKCrp8h6fN2U9qyKCmL5NvnnqSQmQBpoC",
  "key8": "2X4hskBHMj6rr57dFcFvYfGAX1FDxYfg5nFpFAsscaKSn92hJ7AbRjZUoRNpHqN9Xiwet2mciqBF5E1E3Cpe8WJk",
  "key9": "153vkZroGFNP6ukauEUUY3i4iviQU5VcqZb2p3oTqE9bZXVZgAQk65RE6XMyC2C7omxcsYHccwVvKvkULDEGYfi",
  "key10": "3MmnzxcmpCiQnZY2yi5weVAsc9biHu7f3phx3UUWPDrzFAsaFeTrdvFtmTfa9gnyc2NmeHjKuq49ELE5soAcNGKM",
  "key11": "4GVxUSih9GSk7tyhZZuR9QdG7UyFh7BUuxhHix7ykVBBjmMXkWBt5VuZX7q6D2roWGBXBcVxoAxSfoBNSfRMbN8q",
  "key12": "3NBnnMmHVuxLtkU42QUHdAEUrq899yJWttfCwTmZQxiKRdD4kahENwZ3oLFeZQb1WU9VZHQqqxENB4dVnWkpS4xP",
  "key13": "2wCSaY5H1eKTK2jRCAYzj4utPq8Suu3xMo2bdkgTvevG9Yxuew8W71hda5th34AyzGBhaLFotfhJUxTrkS5bC4i8",
  "key14": "3ecHhJK2QafN2Xy3f5PGBXYAktqooJj9PuHnkmJNoBgzh4P16Esh6ZZXVBZQBVUYJF7DNuMJL3t6dwZ35KjvMejZ",
  "key15": "52gwKYABtHDge8Pqe2dTmqHPwiv8TNx67vp3NbUV1TX6ubuFDsorF3VjzNSFgNPhmkDbZXPvSbqzfX7bj9ypEbZS",
  "key16": "4dF1swFMq2AgPfZtGDVEKmCpmRgWYqkh7D6A63tixt3Y9m99VpUsH8af3AvLNdWnDoRfgGB3tddorttCPWzKKZmQ",
  "key17": "4TBhBw2DkS4uwEgXbJD9X7ptFyoykPPyh4S3eCEKc3i7acE9koKV3gTqhDUKbtg9qUCmcu7bkq69ZVyZhYKcF78u",
  "key18": "CJwfseTcsspSYak9jt1VwegNGxMnVpT5RHSPkfyAcvgLMeGn2PgZC5uomMz6LJYeRo9i2q3dKAwExLtGk3hUgs4",
  "key19": "J3r8TZ28qnp6agkav1pgDdWvHEKuyb7pLkJ1LhyQ9f87BWtpW99TkZhrQoWHPjkzho6KGFjSgXG6XJR8GXp6SFZ",
  "key20": "5pSzhjpfmMQNEr7N8DnAvfAiGNA4mfnZwSj2SyNruyAoLHvAZHKkGKNdwRaJ9mAiEeW5fVhoUodPfTyGACvHuvaD",
  "key21": "3wV5W8hAYQAxXcQthXkmdvD2kayJeaEkFao2ST2tTW1BZTjaBPX6MaexE7ZR6Jw6aTV6dLTeWjM6xL1eDg7c7fhZ",
  "key22": "2CVMCyzghgUB1uJFwQzax4LPStFYCEs4uNFny3fWSdcuoex3wkL5k6jWAm9n8EMakPXoKNxqP3oKXfVUaj2x3xhv",
  "key23": "4m47HGUAcbdtWxQqBSpmJeZL1FnDJYaEK2KccfEjUvp69E6pqVnRjC7mivFJTrt2mbVxwKH31KaLpXUBfzo63M71",
  "key24": "2rgmGYyRiiq3Yc4UEjnGdRXYHsZgAbffgWdHum3ykjTcQr1qPTkbSNpegkrx3FQPXdSEiWrSQ8cEyWaUkN2wskFd",
  "key25": "3ovjH654YZFrJwMw684C9gtMzdQCCvJP1kXtYqBFm3VzTerd72tpdPXTaV8VLzUgD6q1VH1Qn1yGMMAUsNcDmb7",
  "key26": "5Jc2BMHNWAudYQCkVtBhjvruwUPjmHbgeGD8Soprm64CdDZAir6F59wwbxKTqnJNtN1G8zMsPBGrvVwkwVuWjiBg",
  "key27": "4SR9kpGto2EacsCd5ToRAeV3FEHfZo6uVybBZzX4PTyWWEq6aiza9mugMLtZ8BCGE5mjWk5Ygivtpu7xWjr2ULvg",
  "key28": "3u2wPGaaZNQD7m34sKshFYeBd3yyaHtdC4HMbL3mbknM8MpQyAtsKn74UBevQHoXtEErdfcHZogjJW6YhYHpAXsD",
  "key29": "46KEcaURWWhuGnNFnsKWQG9k2aqhMf9hKiCgw4TGzNaTcQzYY4vFZXSciZe8AYG8pm3QkEsMVEiWRQg1888ySMWr",
  "key30": "qAn9qz2FFM6Cf8ARb2KdGcxxBCXG3AVHehHe3ZGdbB7cTjKcWaMRFdWXU6ykJNVxwjD3wWakFXtMVozhh1uDuio",
  "key31": "5UiHPwSJYAW7k365iDTvRHtNzB2yPe75GTykF7FYRD7W1nCzAazMgKYGF5tRA11Cwwbg3KRrdm4SA2YcbkEmD8c9",
  "key32": "qDLqz8RrSFDTr6UatLBxuJ5KXkfvZKbJzKbWL4nekiiTdsBvtksjmKr1hXnVXVHYz5ydjJs3t5jZsYhi8ctVXmM",
  "key33": "4AxUm3JY3bcgz52V6qrmesTVaxKns2mtoKfViySCi9MufdyiXd4cpXnXhPhjUZSeP53qAEGoTv3KbSWqKLCBYCEa",
  "key34": "2ivB5ZpsaDZYrdvyj8LCW3S1sj8EvBRyCpMKnD6Y2A1BfFXXhhMMsVeHMMRVp1JNQXhMQRzXwXcCoNgndKpSg9hf",
  "key35": "3Xiqa9rs7V91goP9h46eWt97quearQjaypkMSbmHoghFy5GvJRUWdmYzthNd7Kb5X9R4ixicaSsWXmcRruY8Mgih",
  "key36": "2M7t1ARjzxx9ocShbh2fgHvvnVhtoA1K6hfRETc1JuX4XRt5PXr4bu8kwfWwiBUtev92ZKWtTuc2xzySwcisDadF",
  "key37": "59LiCLm1ggJEKJdwBHEjGqZeixpb6BpXqEorctVoMmBFFSn6UHAEQb726w6j5SFZ5ULc8KVpyxu3Mnuk3sJ9ZMRD",
  "key38": "3L64HfFTdQGpsnSeWYWtvtx3Q4r5E1wYsdX1m5P9GwUbHM9M85HCC4745qZq7eLFahVRu6JUd7dQTEr4LmkcqjNY",
  "key39": "5GRJffNxbqU52LW4n5hmu39eoqBVcDgMwLchXVbNHfSMUTtaPYujqKpcU9hwTD2RLmPprXshgN6KhSo1SFFve6fn",
  "key40": "5Te1NM2i8BownFgoFAgFspCDZgy2RKsJGcXG7uyEN6skcy2e6VqjDbB2c3iAHjuyNFLehaYiRX5VoEarUAjjYv7Q",
  "key41": "2hhyRULBCSJ8cVbh9TxpgwL59auzKHfKrm98znjVrSQJLhic9GRdDMHo9XRJtbsEkBFRRXW5H3Wu43YuZTcwMMHy",
  "key42": "4BvJkj6XFMnFtyCmdd6mfx26eJDbkcLwUnULL18eHhVrzkhqEVWRAnfptForJ2tvkHLmGWkXzUtQCpiqKFhyLfj8",
  "key43": "jeFZMCAoyY5v5iTn9n9YsUzrp4mzBFGzWcHF6X5wPTysmQxzeuHt9iGFbftANJSdJEsTAAa1mfwkkiF2SjuRknJ",
  "key44": "5yBUNSRBjoXCkbsjUukYn2STPQwm4cCWa2Kb89KryXbAiXpQaUajYnMrdUwrZpaWW8EJuVM5EgHwNefyAQEK6wgm",
  "key45": "5Ry2BS5Enn213MnR495TZf8iLrUcLsBGTqgDjaw7vPfGh3YRd3STCfjy7RTpBrBb7LUDntKJfma5keqXHW6GURfB",
  "key46": "phVu3bvdpREtXScc19ASbpVA2X2g4GaowvuZgbCbZTjGh7HoVguobw7jwqEd4LMNsW1399qNWY5ENWYQmD5z2n6",
  "key47": "5qV9cfeycY7E9NcTNnPPxpVtRTvbXeCSkghMDWmdQMLBKRjA8EoHd8LYKWKXtdLy3m6npYvtyX173qj1n6aDKg9z",
  "key48": "2d7ouVBnabxyzetc7VJcdakr3iuozidGcFSYCcgMfBYnZy3o2uBSSBj9nYWQxEqjnsPnbS6GnQZ8m8828JvWdJok",
  "key49": "vUTkPC3x6o31xzEvMrADPaxgD9F9bqtF6GpptGPcwyU9ZvF9RGPZ15KbUtKbDCpM85G3zZCXG3thTzsN7bd8XSJ"
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
