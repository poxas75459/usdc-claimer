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
    "8K8veKLKG5HDn54JhZjbj6kNgu2a6rcwSMeMHjPg5KgyjiqbHWNiwSHLqfasNhupgT5k13fWGLWga4z1XNtmLhS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vh9XXTz8467sdsFuRHH7HSqkvjnLg9kJ3ngtLy4K1CGArDchBqtSTtTCqVSAAMHAXvySTCgefXftNhHXWaVBmP6",
  "key1": "3u7ms9QKS1R4qHgh5wCpND8vL2KfvwuQweFM9jc8RBAN7MnQrxrvEFNbjN6LjMQa56QazyL5afYQ2giQEVPSZDiq",
  "key2": "5du5Xm5wN6tRZmBjWa9cYVR2MHZHjJQoQ6bvDpZ9VKXb3rHUCPFqAg4x5zggFkDBvPQg7NAQXYi3TVDaB8giuiRP",
  "key3": "453DaPArTajmRtuq64jky96ZHRLjFL8jrLZTAHWuQFTDk35Gpn7FiZVvBtttLSgXdcpUTC2ZRJNJXyfD34xKHQz1",
  "key4": "APxSTjYD4BjuL3baJvX25dovj8kHifLwHgeMxg6DH7GQcVnwQ6DCJcjfuMTMtpvkVDP1xm4Xqv5ZG1bRKVVRRJc",
  "key5": "5CsGMBqyHyQHTnvU8zZ6UXoWF5vcQ5LXNqpdrF1gE4z8nLTAFxqmJAtR2zkcrLbX3nZZ9nqUh2q4QwQz2CznJWTK",
  "key6": "3VPmdAEPhbFuZJjg2qkAzyUzkSac2FKrnwn3aKMhdEb2GoPDFqdXdvv98dt2vrJ6ox4bJ8yhcrLD4LT95LBCTNNV",
  "key7": "4HGxPpRHiAk7fNBbhhi41VVt81qG2bmcuDrVHDumeyZWgMftnv7NR1WF8YkumR9GNB8hRENR4tKPEeFQG8HWATVs",
  "key8": "5CkPEA5FnRkPpkpKr6bjGxU9KFV9HT4YZiKvPbXkoCX78A2U59B8pD8oTt4ugsh1oAqZgAQEzdTLLwMCERqtvSS4",
  "key9": "4D7pZMbRbrxz181jx9o9Apbd3S3zUPCSRSEgQoCRWF3mJ6bQJRzWDgV5ZbKoJC9Y159FR1qH23mXDVC8Rgq46eYv",
  "key10": "sgNU6mujY8iCuFqJ9uort9H9HPee3qHiXL56BVdU5Gs7XmYUn33o1TMVnxcJSLphRfr1oXHc5G9v9QCP9gLqft4",
  "key11": "4qFXj1L8zySDg7kf2T9E5MApbsVz9WUQx1ucb5ZvuPSM8NvrUi4sQc6kZWLwosA96oHAvF77xJKGaeXreF7DWz4",
  "key12": "2wjyAKHG78g3hdVTRvw1Mh4hbvXAE9RHRfUeT6AtFwGtsvNwJEoLCrjjroeAXQhvENjV33Pv4RQMGH8oeQQZvGYt",
  "key13": "5zkUpDMHYBPXmGZDs7NK2nXJd8Cnotyf6hMFMgyu7z73M5k79yzbmMhFBmcAaq1zZ5ufS8HaAZU6343kRsn8oYNr",
  "key14": "4oGCtXJn7rLLQH7sE9afoRo6aYg3MACK6enuj3P4k3aV6cMBxFh6igdnWVLgCtnCQbKepn8VjPiBw7bTeTiXmLNm",
  "key15": "dJx9KAUVAS8pazX39y1UEMMrvpYAJ28sfBc3Yofb2SiDMzYjjfbELrhrxsySy8iL1STJdbtvBtatWZsgcbnJ79X",
  "key16": "8LPpKbWwowHQvLw5jT35nuxtoefaeCWGLjN2oDKaQo87T9S3fkPqSmdi6XJy6VAhpoz4uA5erTBHfb8QpuLMYdx",
  "key17": "5ws2HktaB3F4keTse71BqqhYzzkbDy8Px5trsjtiWMSMwYRj9VbBBVdZKPLshdJVUULvWbrz6ysLhipp5peJ6k4F",
  "key18": "5zvtaKQWfVsyEUKoKiT6GiKp4i82yXcTEyRwKmprZQUFZWtwM48P94sXrWZfmcv4A4CUo52xMLnykJPXe7j8U6rh",
  "key19": "3387mRoDLXgwF55RjBhQB4xG2cCus3BEHc2Xmktt4Pmy51iprXcbmkS8B7Rn6KYyyhkaYTTK4qkZKQUVEfUqjviH",
  "key20": "gpWS3oDRYiA2tzdF9cTonGXdgSp6rqNf3zfcdMmjjTThXCSF7SrmGmXEb4BwV6oRe2EVEviVKhpbDYEnAL2KWpy",
  "key21": "5J8hZcwcxB8jCFEsEgGRZmM5YAnC34zNn4u6sfxf7BkxSRAR1Wr5F2kzrwYdrT6t57PZLzoQ6xEe7ELfsQocSsUc",
  "key22": "WtsKdUNrQDnQReEhHZ3hCTY6Kwpbd3ohpCM9H9k43GT1NznvdtzipXmG7FVkLnJQzLrXQAB78eh5zuEZyDTpaSH",
  "key23": "2FQQqdbK5EPfaCmY1mLn8kwXegh59K5SCgHHu9i3CLYZux1HTkaJKKbEFb6yaY8pbKVbqNXSzk6UsnYAoJexunGT",
  "key24": "2gM7D9ZRoyhg7AzLUjwsD7CSLdJZEEVHyZj4nXufeXPz1vv7Hd9crPUcioefqVjMj81Vg1ocSFCZTns3SWHbsSYY",
  "key25": "34qarhZ1iNFfQy4fnZ84Ar1ivhWkkTYsTuLmxtMVWxoBgKv2ecxjsLs2rXnGg8kasYXroNij5a58eNNrGNJ54P6U",
  "key26": "66Wg92D2hQ8EchAQsWQNzEtiJCBgrgASVUqyd37VQn786gZbfWMtrGV5RWfq1zVhguGMsHsfByh3pjU4wtDCH7RG",
  "key27": "3xv8T9vZW9Q1xYh3yfjhDX5toURZRkHscxbXR9ayuCgVtAbYP9yt87hCiYJ64J9aZX7fZKGFgXe2PdawrRPHgKYj",
  "key28": "4H8p2Vhb7sEWVsSuMt6zxcCojo614sMRhe2HRVcyZP7CSoKoH4mudoL1ugEeRZ8uzEXiHNhxKwTJZVvYVxAXtKco",
  "key29": "pLuwcpeSVXQRdunWVUYCyXMqQoU5BpdHbVBJcEqij1Qvz2UxLHJGVLkr1EPpHzAULWZuKuuBucpc3gbtAujKyJs",
  "key30": "3kzvzknomzp7SntFt4NkgfpnS6sdx6WDdoacr2bTiKYVdDschSr6EtA56VHGmzRHEBSucu8m7YxDLPoaQ1yn6K26",
  "key31": "5cbbFMhYedFpihvjt7nPfffRqCRyowCZvapY9DHc7c3mhiE5a43LZJQfHHjLnRhzZsn4nhtsZ11KLvYtTthkkkvK",
  "key32": "AKihd7J1MyuahaAMqfdaAgnMPmcBGMKkVnSPjsA3Gho3k1LfmpbqFXxcBqDTLgsJ7muLtVeje1QRomQwor8fWmj",
  "key33": "5paHYYx35K3KPx3oF46n9NeJj3qLnLbaPZCtc3jydmkFRCsEk6LF6FCPr5gcqj7K8ezaMhbAAVhkts9qC9SHkNSZ",
  "key34": "5dhmBdy2MseHZX8pqF9wRY2wbY4PQV65xLj7AhevzhTXsadsjY7fwbxoTCaCQT4iBAW9rXkhmoNiGxkouocWScbp",
  "key35": "3QBrALru3czdfYhZCY1bzNaND2T8DbY1wY3Ms7MZy4N2x7LVfv7aRme9AK9gjST4kr7J9skwnfDwdCqyaGfHsBu",
  "key36": "57NnrcnpivMhVhhDN26dDCnL97GNVaPy6qNFwCMvEpvaMMT22ePw6RgD1esQSghLYubZYxbp6sDpSNp5eBVLdWJG",
  "key37": "4YWLJ9GULdiaQnxE7vwtv7u4HYVXzJxV8joHMg2fmR24nKziwEgEnnmm8rxY97LSKiHDPKsQt1fPb7JqrQnG1vQY",
  "key38": "54og9ChWRfVky1HxNwW5UrURpYStDzaiQaWD9d5wmNcML4i5E96XRC6qCCe1Q5BM1CEZafgs8FbNBbSf8haP8Hpr",
  "key39": "3BThy635dzCVVBJBr5miGPf7UtWLAwboQpRMFL5Qmjz7wvgCpBxDLbEdZr7x3qG3Z3MNbuT7cxbwJvTizAi9wZBn",
  "key40": "52stHkBkKpCHyMrNQVK7z3NqAPnj5noxovGzihwSUpbJ53psoowHdurWctn4yLCznReC3fXDpgsgx3nnk3WJ7LrR",
  "key41": "5q3Dx3fm9GmjGuVPXHwji9NVhYadgpSEbBUeVFvb8hbzGkYypjd5zuspKkv7C5i3pEAfc1nm2ZGAQp8YHgthAQdt",
  "key42": "61BqvHoEJXPur4yQ6YfjRSaeBS8wdsk5JojCxoU5v2m8mZ2y8QPKapxi5ggiXGbiqf91ugA3W2wd9LJcc5NBzXWH",
  "key43": "4iwKrDqYHdTvvP46dkahqGj3fzbiEWXigELwzM3SmYuozeJCGo7ydN177brmbi1jukTu6rnJdmM1FB5EHZDVQ3xX",
  "key44": "5ipd2MMELYn2REF5MrPNgZpULCbZR7Ajt36Ry2SeyAUykpxZLpvEJipSQ2P4cAEJ1PSWx41XciEgo3nms7Y11hyo",
  "key45": "WbPxRffj98TQ5gNFU6chGeUdbq2K5V1ViHWMCy1LhXKwWiuG9jq5v1u2YfLzKRRkxmi9jDuAEVAHFFW97VrD5QH",
  "key46": "5WZugSi8KK5RCN44s9vz9bBYUBTdMSCP3oMu82uP4gkoMfrSNJPsj6t2S6QsuW9HbFV8kQowJLEBweQfePDMB982",
  "key47": "5np4XPjPmaag4LXwaqBgcfA8PMyKLE4TcR74pA9KXykV1MkaHannTdWXXqUW71cpGZi1iXKc5Q5RrxxAGD7Wa89c",
  "key48": "3xMvZmoBakReR8sYevnLCnXmhHAX41LTNKwKfwbZ8tJU6nn7yZruXr2KCkHi79kZVZiWKTXfW4EiGWuEVszDgvq9"
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
