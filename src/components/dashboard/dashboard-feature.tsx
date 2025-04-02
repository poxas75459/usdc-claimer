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
    "2u7e44MJMHexiCgtLDsqfprDpMsQgJoz7tytjK4cPvEEgbshfA71Rs1hpFLK1JhpfquDF7xWYeNMCzzsQoUpjmRA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mJJuMTMtQrbU8tmJaHwkQHwRbew3L7ja7ZVPuRytjXHd6tKFfxwBcLhnh1vqhzHBX38kmHzxUF52LzwUifKL1AE",
  "key1": "3J9AjrAyPLXCaswRxJARpStDH9bEpuesKSgD4gQBdWPUUw7TTC5RtE2i1xEduayoeZD7yGeLHcvVKNpj1BUho3zA",
  "key2": "4W7nmmsFSybTfjQGL2EiVtKWX14adEghd2si3iLQpVWuf7DJ5aKAUnr6BKzLTEWHbevJnBNVSuRHxbcb6ysYXwWU",
  "key3": "5UChdrNkXk349q3h7yYkb6xgd6JVcrkC4uxyRMT8MsxAHFdrwPwjq752sJeRDFZXQDbtqeJwtyrG5HEsDQoBFWQd",
  "key4": "3JMZ5ncdoHhWvrV6i5SKwjFcAWU48A9a44vELc38P37mh7aFt8NEfQbnWhGd1ifVBiMQGk7CB5T4yz7BHr9mFvbj",
  "key5": "2fM2ZaBYh8YYZuyLpxEHYNhW2xX7YN25vUBAKw1tcX7zMZTPeLrrzeB7SDv4RDWbKgkev1cUv95ZYsMj6ibFw7A8",
  "key6": "3doaALqF3H4fkvPob3MFJ83pb1xovDf9kyrASiLSkceqq7SKoWxivBXFZLjXFxraREZxA86QxCs8wynPwYigQBG8",
  "key7": "4jHPJc1bNoBa3iuUYqLSogH2RbhL9VH29nhaBDvvdv18arfsL1VFFsy2znJMcgZyxLjYY5Uhf1cf3NvgYLpJfK1R",
  "key8": "3cA3cvPgKsaqLyzY5otKVDC3ym8DP7ypt8V3raBPBgEEnxcsBa3M2exXm6Nfnik23NHWTygnoNwNc2kMVwnkwTho",
  "key9": "63YQr7dgd9P3jAFzVWbnkEdkbrE89W161Y16bqhuoyqWtL3W5WisG7b5rRRhKoxuvGNkyQEeKPnoDX89BQ761Gcz",
  "key10": "3APRYtnyhkRVcoYiEDNms55iUZrDCAJHznJQMBPxBm5qPBPttLTaWXM4RqaeM9oqht8g4qQVB8Wdrz2ADW8Si9zU",
  "key11": "54h23CgMWASUV5V45qoNH8pgrVn6qNH47wzjCKPwR652FDajbjzFjFwPo5HvgwL2xkqNZfk7F6JARHMKEXZhQWT2",
  "key12": "3Rw9VDT4944X4xYp1zrXVovdiyiht93dzt91ycxXYf4FNvmaNkF82Mu5bYopssAJLYUPL2ZiqTEh5hhwgoboFbif",
  "key13": "38mcTH1D5Vv3F5ujL9xp5mRVw6N5kwd9HMVKv3kf5XaaHupNXwuxbd3BXLSKqpcKyP6eeEoUGtJQYfj3Xn9oWzXU",
  "key14": "5Sb1zjhh9oqbPBZR35PCQswKucrWCKExooTG9Z9MypPVrhH9PrSpyfE6umMtT6h2WSmVhegN3qaYpWHPo2m1mJKs",
  "key15": "4waoKJrGVFrnBEWx2fNYEK3iskVmwVBK8JJx9jyW9zbiUmxGR5MRmJMd244noxfWowgkS2CkH5WbfCmoH2Nbfh11",
  "key16": "9tqHdnFJcf2ZYVY7bZZ8iCEPp7q31quccsyx3EWzbFc7Wh9WVUMCrrhEPCdKK1DFa6UJT4fXRk63znpBaBMPSHW",
  "key17": "5gwD9eTQZNTxuSLvWfgxp7X6BgKtmFAUQscLfjfMSFXYGsZ58fcfV6oYYVpxWCXY5kk95KJybrcsAGNjyBiZs8ZW",
  "key18": "2HnBSsqwxHnovCv8k5Cc4H1Yv5LBL9SStSxD9JD1GGgZQRcEXihBoFdQ1VKK62ZNsRV5HekAR7q7Hec1AcRS3U4Y",
  "key19": "CtLFaoxd6pnvGHDzwj8BYbxWUkTmB1VsHnqBu3VyLo344Qfo7tq85sMXYAdT266HUw8GBLeoFkZvuovVsEM56Q3",
  "key20": "3dAKZMLA4YheAui6xMYncQ911Ku7B6ukPJGpWfJ7VVPRZYUxMvfLSHeZEJZtmGw83hwGkEXznRaoV4rDurJXF1bk",
  "key21": "4KemnQGqWqYXCpTAz7Eyr3aYLAQKLhYrXhC6SqQBeBG7gxsyRcG3PSrdfH6XKogiiL9dGUmS4VUcDqhszwgf2FqQ",
  "key22": "4mfkcva5LTgdpGMjFpBzF6H57NSvn9G7twQXx56cHXXAKQtobjkRgkQWemokyMCTMV93QWSMQcr8FJzVK4Zkna4r",
  "key23": "4oTk8TGAxDzRew2fGA9QgJReAHoNPGzJnFurtJHSa7S8JFK3gtmyg8G4t1V1pEDWo5Bru7ziNkk9K4R9t1jb6qt4",
  "key24": "vh93rowj15o54FbqiFKypuasKJLFwHbCWgEw45oM7hCyBS9rU9wuPUW1YVZaH96qvm64ZPabc6YCXpRDq73VKPo",
  "key25": "3aVL4bTyKme67T2mRS6XynNdAAg5zy6R1vtYimP2xCEvAk7bjwxgEwPYzSvPstLUENxPCiqPoTU54MBkYGbxZgwA",
  "key26": "5vBJNTMKYVr6p1vqjxBrdE2BM8mrezRtuq1nYiwwkvXQFNEpbnPU1EDXQkrDGwQUzvwgPVoMaREnJJb6ZRkcn5ah",
  "key27": "2GhpYtxoHTDXVBykvAmGPRk95Z8kTwYJxiYavhMqCeUaBooGHnTEUkdn9UZRxvgChUu9iuG62cLPdkLu3W51WjF5",
  "key28": "3SmG5AB2UbxUz4ivYDfyurny3yYnAjFfJDy1c7SyK4XG6bk51kFexBdSH5jEjqTvCfdFTXKmJ9dRyXJSvqqkjaXE",
  "key29": "4ZNL9ososTSLirPAnWR3DgXpKev963KTPibBPwd8wpfmEU3MGX3uXpeET6Eh5Fxr5cgczn5UwdE1qU13hmo61Hmq",
  "key30": "MCkDDBT7DmPKmfGNoQac11Zx3U159FreSmyHk7uW2m7CSvhXwXQpLsZYLyTw1LCTejuihKqTocDTGKoy6FGPh2R",
  "key31": "Fqo7KvnpzQMrSDQK5tcuemoE1LUwhM2fJkJz32JqsoahJf6SCuMWXj5c2jSAGRRZ2HZuDxopxW8B6siVCDr4X42",
  "key32": "63yc3XoKwAFUEv3vYusLbtRhTaYSzNA5a63SGDfyf5Woxj61oM8xGDYvK9EUkEGHzH9zrEdB5Yh6MdtuQaR3kHky",
  "key33": "2euXo1CFQZrzKdQK7QhN5sL5CwyqgXw7geUhpXRp3yiDYBkw7m26JCQ62d3TDR9iFvUMkToRCd8j2XDJbKQX3gd2",
  "key34": "5rtghTXcREnaoz2nvLrT9NktwfnAY1iz8zspJUycbjwu21nQ4HCHJkPKKuExEPhKXpjNjgewNmGVkfuCyfDkhp5i",
  "key35": "49gfH6e2QBEzCNuSuLMzyguidAsEhFY3xb28W2bdqmnuFRCfP59otMZazzvyzvdATaGyhq5pULt2UUZB5iQkBxrw",
  "key36": "4BBQRX2ocgNv2fnosYjtwjvuxYy3orKwSimvN5Me1DAAxGsdScpAAUsrCjC7FfrrDfPEjv7p5BaBGQqwx6pNfy7J",
  "key37": "qiBmAKNZVrcc7LbkEnqLP1EnjSzxBKHaxKyC9TKPebJi4DXecXNmSwoyv7LkRnW3GVZS3XdeXLS2FRvqdqVY7qE",
  "key38": "3NTj1PGRfHWyzBNq6517yUFqSY9bf91Pvj5E7gK1usq8JfMqgvTB2MSMabBKAocCT85Cpj3czWctCG3sSvXe97jT",
  "key39": "2rhTrZPaJcuYmUhNYhFN2usFY9reTjTc4c6YKtiyN27yUHjYHoqrDVSuqTgA9ETuizBJX1VzWvvRzCEZBUiRi4xX",
  "key40": "2xtJt4rwdnWEQyEYwAGeX8nQFydozu6bsyqxmCRVe86gS4Z49LQUSE2vnNhYjFD3zZ72B5eUCBsHjPHdsZBExucC",
  "key41": "3niJMev9stRyj5cKAjTFwppNFgPgpLBzp6RHE9wizNc4wyH2W3z7GaByroNXjGt73opjJAAD1F4STfYXxJ49Y7gX",
  "key42": "2Fp3aiMu2VMQCa8x4fFcg1HGiRgNZXAre8w23ZhC5iCABj1k9epprU1AeoXvR36gMuHveBco7rTy1ikh2tFgNYVa",
  "key43": "5Jdisj3w2Ur8ymJJ1sT5ZKXUYst4bLswgjXtDhv1EPP7ejqe1C3ov4m8GfW1qGn78aEkxvoZGUWPGrcDuzopYg81",
  "key44": "3ujnd21dLvqcsmXyPBJtxToMoWp4g61VymjpGcUDpbmm4MgE4bS3bwio64aTSSkw9r5YSkfUSchNSubrRfs79aVo"
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
