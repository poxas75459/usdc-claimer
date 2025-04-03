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
    "59Rr1LxE624BRFjRPMPHicMWbJYniMj1zphCZ2xVR4buhiLZZdMTT7153vTzTB6u5NGzvbtejP5379VoW5dQX8KB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hJfGdcfvN8fUQ7JUcNa7Xv7Jpd3wpxngJPM84NdLsGHwMX84eoe36aU3eqYFXZcHFx9N4KxZd9vNtgVYRxhBqWz",
  "key1": "3M9SnVJfrt6cgQ9SJwPAv2qE35mvkLqERHEbCebvyJKvkm18DVeD1Ayj1rFHsb3fgyDLzw9ZXyYeXqG7MpSex9NJ",
  "key2": "3B1aPgbiaLv36Pi9LRxQCNtss1Fzs19N4eRgE5dk6zvTmmToqL2ThoEB5aNm7suqsLYNDi9UAPeZzPq7pUE2zk9F",
  "key3": "5Xy8zFnM1jBz5KAFLUv3CVKnncLEY8rQkDjDHACKGyXkgnwMBjPaTCfgNnyjMNugYgdFf6FpJjm345S4MPCzxwiq",
  "key4": "59dKymuP5uhRGmyyCii3qZgucibyYYdihaBBoChHxqiQKXzKCx9KG6Vw1fETVu3PAERusXTJoKAQfKupJ9oowaPk",
  "key5": "xK26Z95wKJUXx9wDovnDi8H7gxzcKfCUsYx2E1HNbqGT1uDsGEGQW6JDcexAV8RHWjtxHMZKibsnp8eMCP8aUqU",
  "key6": "3uyNSzugGDNWq662JNfeKNcWXS6agUnNpiAyFyfgVPg3pb7mQtA1Ckd489FH6EeiwdZfGVhsqoZQPJwCtwbJRSpJ",
  "key7": "5nK2qyGwxN2SPjFG9t2BuwdoJC8DjudcCBQFvndbnCww2sWKDLKDHc5C83PHvHKCQhbS48qX7LAkdZwdSuH51dbN",
  "key8": "5gzmLyNXcNjf6MyysYNc7VjGqeqB75BnR4yribVwNiprhQfqMaQTSWGWLhEv5t2G584Y77ESvRWW1aE9D7DkdpjK",
  "key9": "5ePFthqhcbwEG3YvgpWKbgB7yYxn2k5Ehur6XyTh6kcNYxZ7QZ7gQREwauEoQ1bFXyKP6GKS7iZp3LAiV1WdUf9u",
  "key10": "5kTYh2Jsfa2Ek4ncZKgt1dsDG7rf9jvM5LH4N4JvFdagW8rtVyMp7eWQn821bXkohANCKaV5QSNXZpnQu1p97YTk",
  "key11": "7SSP6hNFVeVGwtRnXkPHfSNu6VtXn4ZHoaVGCcwnavDtx6AwBWiE8MtboaVLM6qCS1SDmUqd9PjUohwrp8bke5U",
  "key12": "561CzG8u6M5AThwPQnoGkov4bbrXJssvhPkdTRFbjKr5vCivBkoeHJ9XDNhwXX5PNYC7hK2BoGSL8V2PUkwTT9GZ",
  "key13": "5XT1EPewdCPnmHtmSHM6ULiPHpsoqBAQxaaCSXbritE6xzxJyUYboyFXUnQCiE6bqHfYEP8WJRz5jjYoNWuNQHGc",
  "key14": "2GrdmeTg9UKxinHzgfuAxTnt47VsPMSLVcKv1EBP4FzNN8keZMwGxrbWJZKxEg4cn5GU76hhCChqgU3ubugdxCvJ",
  "key15": "22FFa8sK2X6m3VQcvo5qiJme4UbGWsnqgo7G7HC87dAC2WG1WESyuVKbsRBuSG4RiSxjYsu4tCatMNZcXbASGsfz",
  "key16": "B7wfa9J955iSfrLXoXnvnKNXAe8GkRx1hK34Zf1CLrfWHDCUG7aR1iS9V543LBt6r2zvCwb99qoJ3yFe3ZZT3ET",
  "key17": "2M5cYW3rV2dkCKzHwSDuWPs7c2BwQDGPipEiWRQLwf4SjG56R48JfMmZ9JSXZK7zNqT4map7okijZ36X1A2yo6pr",
  "key18": "4nmSqbMu8dme7GVRHYBvtS3kGtuFTmqfASmpSY1xqd4Rp4DyVrvLwrcHjcMZoXqKS2xtgYzmH9pHwpR3TDCaDUAk",
  "key19": "4T9qgZk1hrzeqgEndMsGGVDuea79LnJQYb4LvKSyEHkKJpbznMobDtFaHrCQ8Xo5rS9Q9yumhR9M1nBd7GFSR5jS",
  "key20": "3FNcdgvLRtVLBSBk4wQJzemQzypvYJiyerbsQU1FuJ368KRtcqE4CT1B7qMeKkF9HujT4LMyMY1u7nqtfdNvULXJ",
  "key21": "47z2cMMSgG3gXE1NvunJXvX1Eiac6jSWhr6y7R9C3R7wGG9zwDTEBRyVdgRdq3BtY2kqrh8Bh415c7TEz9grv8Yx",
  "key22": "65Nporu2n1ejjTmqet7dXZGvdC12nRnhHiRNZRDwexNYKm6B5QPFP99DyKHiY6T4WgKQAGHqsDmJSwFNj8Ma4NHe",
  "key23": "9ebbyB9WNtS5hZaYndF6fnp1SZisSBCXAbN2gDvYU7DtrFpQ26CdM13xV2m9rVxqv19qRUn4gMsxiNdTgHKHczH",
  "key24": "66QGKffaAsJCL4PMLt6x76KAzfKvCdiGyUxdDpGMhNQmUgS4GYW3YUAchf42GJH4y63pAc25gMMXvLj8Ww1oqVm5",
  "key25": "5T6gpcy6EztqDV9wnVP6zsudv1439PAGsEpDAYs4u3dxVrapXfQZJAgweZr5pfJSa44Lj9SW2rExsQHZdYyb7Xv5",
  "key26": "3TcBXjBEJy5WNN2Rmr6rc7y87PwodmpMp4jBznPXQB66MuvqvYX6ujoBjWYTrxG6475rkCbsoccfPL8ED5CqLyqr",
  "key27": "4WGXACWy8g63pHP6DKfGjTV5MCR8idXK9UKb7UAc6GaE9oCPycc4UYM5g1CyvescBivHr6sf8gnx53B23fEZy83P",
  "key28": "o3yQCdSp1vCrFcJrwAmL3YanD5eiXBrLnHNPdirQaphXx16ytMKHDoD17uBau5VG3kkskjHy7xGmvwrSH9wgBQ5",
  "key29": "5afeCiJ3uE7qRAbcQHo3pGftA6tmkvct3RS5UEoDohiJW6Li5crskKx2rnBNseFsUoBZNbEe7XJiuAGHTPzdSjW1",
  "key30": "4VQBq5ZBDWnGtEH3HjRzEqMfHogM8AC9n6XAGWqRCvUmKGju45SGeearyPqR4nJ2zrh1iczJfzLDJf1KtNo3HXNH",
  "key31": "4oBWmuCnBxFwgoB49dCAVcuftXTn5VsY754XxSWe9NAU1AffyJjJoPACYwKMjtZzzcaynYp43GAEDoRog4o1sauk",
  "key32": "4VGJX9fgVqS7ScKPwpAKUf64cmMaVWCKzFPJMuHd1tGx3ye6o7SYWMzViyvCxiJdB9ucCcz5Vi56wGpSQoLgcDZP",
  "key33": "5cwzj81kzwP7VcSBGrfMZGk3dmTxW3UPUCVo7MZtjvGr3xNh5ozLHRwfn3wMrgmFtYC6QgZoBNbmxMNqoX2343tL",
  "key34": "4QyKXjZuyJJfyNN57MtgXoWThv44d1RLFw6jGkzQs9hVPTbBxuuktTpoN8pdix4ZTGfdvA1robgNyJNALYC7LwgB",
  "key35": "2t7bYTQEQftW5gWnr94NWb1dfY5iftpVYa3m3UNHJMKyrBV9fja6vYG1y6wXWWABUFn7Z87XqvcSorp3rZwVFg6v",
  "key36": "4ciMduXR56orxNsEmbfdLGmm5aZHhF3y1E1eJ1Pv7evwwGe9f4TnrRtDs9r6Gq2A2kBnPgQS6wECBytJVi5fE2cn",
  "key37": "5vGGqW9SjtiWvguLTVLQ6c9amfwdYPNoUhendQzCeQxYxKmTtAYnfyjKqiX96nddthWgbzSDXVfnJmCY7pq5KWrS",
  "key38": "2zswQegvABNeZGWAfMEw5gnvY1ZrRDRdunkLa8Cyu345aMPYQyqnxwF7NUvK2VmjdYLPjRVbECjWH82d1BP9qMdf",
  "key39": "Ww7AsV39c5j3tUv7QS7EWiWVJmGVwyhbjKGWqvBcPtNThADnrzZXh1u1m332fhXgUDwXiGM2n47xy5xNo1839zK",
  "key40": "sfFtyZ6ep7yi7QvDU6sVqenyf7rwVFJfmzNrM8c5xN9Q7xSrmbDF9nzaqekC1NxqVRLmxnBvFgLxsknKn56g4WK",
  "key41": "5yPAayokKfBtQ572wSdQL7GQT4JRbBL1JopRJFH5iJU5jGQUgChVxgGpeeSCgqLohLNuyepHz5UXhJyEcmWJwr6U",
  "key42": "2aK3qcfzkVJBVEom8pUeBYnadtmWNZGfzognteRs3f9axPZAS7iGwomUfdhkW5WC6xr5EuDZVAQRKJGWPQRSDERE",
  "key43": "kkAoWHPTS8hQgQ2mvjrPDJQoDfQCBH2hiuSez8X73XzgCrAc1j4tcKZ1KKdyFXyKQuxTPXV6yVvEjwEukeHPDFM",
  "key44": "61kSx7MW39cFNsffJ9UVL9thustRcgWRQjXjgXphnbKnDyh6DvDAWnRp2KouA4MmNay5XCrBxc9ycizZjnAC1kC6",
  "key45": "4hPXmD3tDwpJfRcuniSKokq27ezikUsEVa1Dj8FvbMCH1G19TA75jCKtGSsnbqMTr2oMuGi86P2YMVdtzyG9v3PQ",
  "key46": "5C7THKG3UAXiH7TP6rLJ58CUmqttgtcKRCE6RLETWonggE5FQqKnjE8ZYQc9bPeRuRQP2bL24BjHCh3kQi4K7jLA",
  "key47": "JFx48jLPTuUsAhFEhgW9ErZFmxqVMw7bM5khEMtSYLMDTKWpE2Ng2p41HC4emdXqjCrYamaW16duk2ediMmXWvZ"
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
