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
    "3irraYoVpu8gwNvfzTkw9y7xbzRaouH9LnxMvJb8rA49dT7rYfznJBchNK8psuCqvHKxWURSYZXUpoRYBktGgc1g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PDDuwAf4hxjMfG23wYCJMJyAkhyFGCbiYCWoxk5qsXMAZnM7RayBwTHqKCZPV6XiyKhnJqqYDs84F85iUsN7FXf",
  "key1": "4ng6D8WMfbcKL2a5xYAqzG48rm5NRrB3maQ78GGoyuNfc7W5StCUgc7DfGkd9UaWf4VZzbUWXt8WhLHZgfnf67Jb",
  "key2": "55azoakhAduM8R3YCejPn31KpdCZFh1jxFNvdDKzz2L69136PLRTkKyGFtofBhhnX6qnBRJguhjoE1QYGxhjm7Kp",
  "key3": "2jMMRhiBqNGEs45KzEJR3Y2ktqQxMJGuzQcGpvaJ6cMqKRD9oj59RbZL2JLws1FzBYQf7bWyjv5jfUegdGgtc3ie",
  "key4": "3YqD8M9wF3wzi15TXYkgf4tqXB6Cg2zjeRudUnMe33eYUGWKnypSBH9b4fWAhHphvwihjYotdF4BVZ1xNfPcZ9LE",
  "key5": "g3Eo4VY6XKNvfSVw3ohQpyHF3BKBbrD2pQTxYkF5hoek52wqQ9XYBiJ4oKFzgHYPhAgXcdWxprepdrEicJEjppq",
  "key6": "DNP3VtUvbPY8KVK98gHtMeEnVHqhxEp9vRfUxEfN1fmYBsa3Q1h6a9vZDgJUdUwJt9RiKxiJw61nNuUUXTdxrve",
  "key7": "5mqGxSv6Kzag4zuoYvjkxW3xdtz5jSuPyambjnAPHfEbA5w4aJQz5ecmFKHk9zbT8jPpbkZWRQhYa45L2JnjEUUe",
  "key8": "APJHE1spbDvbySSpf9XGXhjBjZSjiC5wY5xEUthBMPcg1CXfWiuJezLCQiTSRsy5gYXEkCSyUK3MxBoHnPVStRD",
  "key9": "5Z3KeoRBGXuEJSaMw3aRpNYxx8Y1v21iauZcxAe3mk1UwjW6MMMjJyq435g8AijGpAqGz3J7ziwSmYR9SRsKywBP",
  "key10": "q8wFuhNSodDzFi6QSHHfgUK2kRru2zybzvuwC7mv5pwJT8rM5CwZbaKrA9hDhPwuV9fEk8BF7wCTVSdhawBjoo5",
  "key11": "4dSqVGweZwjcZD2UKvfJx4ydjcHXAQVhZtHAr1yp5scZT2T9ta3xwsp4zw914pZAY1Wm7Us6yybNq3vEWTaubVBU",
  "key12": "4yGiRU8WAwdWXZvJnnpZD6G6MyjZubjceQ6aJcQmN2UnfZunoRW8838APJ57UJPsQVNXqeZvStA9wAnoCpahY2jc",
  "key13": "4ngiRHjjF6fp8QXp385XsJHGjeyXfYRcvvYcGa6TwHq4RrMM69ZcuzQPpk59d9S4q9GpXqpBaRW9y6ASUA5jG1Yp",
  "key14": "4xi7o7EFfwyMNo99vB2ykGHSZQf1pLjrd16KwH84n5yeSNPJAgFdmRT89trWivPWLQcpvzXKE2492pAKhhcqwZDq",
  "key15": "3tCUp6cbozJ967dpMYEkqKLMWGVhF9K7wshHvW2Q6paKm9GySEUJg7keidbLP6EhcW5m4NTzZxBdTCCRgxkuUURG",
  "key16": "hjk6U72PnEWTsuPe4MPeKpMY3gT1WX72tSW8Xz17awmeGeaqeFbHCowvDcjuE4Vg1qk9eGBSckPYTZUzqtcGhFL",
  "key17": "2eutvUt5NjYuoxwbUoMYerSPyx4Bp8KDEM32E7cAFXUuD3B4jWFH22WWKfh5fQTjTYZMwP1cKqtV4oKN1j4w2i7Z",
  "key18": "3nxzTWQySpksj1crZCHfY2BCXt1X4eap4wibgDvvKfx9QCYYV5B3xocgc8BiKw6htBaoVvVZJzBNsV6AYpquBkYS",
  "key19": "54WYXDNzUWB4q87HRywFnKi5RgGqsDHnvPKMSa4Bp7sp4MnsEkbzRs78tqUc1rCduzSEN1N5wift9mTN4uXZZUaa",
  "key20": "58tNBxVV9W8EsLqp7mWcKEKDmHvJtc8iDg7PUxZeZnnjo3tdqzyHrmGsKYbB6SPUZrQdQafFVjyLpDJCRz7pTdEw",
  "key21": "4zNCzEkpgKA46mpcaugNBrtHR9KagVKs9mpvkrNBQBhiGX1Di1Skd3vnBWJTrmnMeSC2WV2LFES4BTp7JGoTQc22",
  "key22": "4Vxwbs5x75PaAjp35Q2QwXoWbMKDSSxGg6Kmhx91khsqvJrN1LrxLvwwmSXYhdiH6Kh2ZreQ2uJ551x5s8yKiwDY",
  "key23": "2ybkTD2zZLSmTvQWt5xYw2ucadWBQjWHRgidpSf8jTyud8jYgPKG5Ny411qxU1dvsPVcBWQt6FQiw4ownqH8MuG1",
  "key24": "2cfHVE1egV5ucnahWu88nAwWmDMtqoRzvShmos3YSzJhFPVsGpFeZenoV96QVF4ktoikAMAYnZpyBNBk8gCjuc6D",
  "key25": "5v6B7oPL9fJ9WpEem74TQ98YhHDuVmBq89S3DiZA3uFD5KmbE3GsYy4EgWyKvokkw6zi3ev9UBvqDFGtDUg9n9hT",
  "key26": "5ww3h5ejJVnEH9hHuAXpAdGfrPn3Uf5B396oW64fpDLQegVXdEGRpocLdNE989JiK8xigVNzR4qkCBCJe2cJkuTa",
  "key27": "2Fe9aQs7PUVuwGV7jkEwqrKGn7bfPRQTjcuEugnXNhTSMpKrECaWX6jdTbYceQhZxMyNptSvjWnciehzajFi4qz4",
  "key28": "3eiCCH7b2sKeFqhxUad7BcP6M5M9C834hXfkae5QQo4WZ4igvoTLCc1dv5PFaLhVd929y98BjespZpwX1e3M2qVQ",
  "key29": "64mCw62SaghqoDzYAZNqUwssnAxjGgAkYtpDyS8HzxPskNyYRacPMn42Ji8M6sPxtfWNF5urM9CeiNoeGmwPeV2w",
  "key30": "4ERw6c7EUmmzisHExL39Ue54f5qGp2fP9Gi6UmBjoc8q84XmQJufDH2gSsx4Zhh1byqjsdPZQcTCjShRuWt8BfYZ",
  "key31": "ZLXZ71rtyyjPo1dkgT1827rDryLfkjEhPLYq9vqfDCZb5ZqbMPRAWWkfF4Q4Z29yEyf4dJjbgTmuRMyxopsW7JU",
  "key32": "256FCAxNRQ3WEDsMu9MJe9UQ2v2kShsoWH9NogvgsTW7ZGQ7SWRAKDVu6hFKRHV8uE5iszZYd3v9AdSLzYyxudJJ",
  "key33": "3Fk87trzeGvLovBtpF5nCJ6UqFw6LSp3GZgMeAcgt2n6dSiyw8DG2RU2TPS2xpo1Dkkx1WBdwt7WkzRCrbVwTbbx",
  "key34": "kAFUMocv8r4J4hi8w9qoG4rCDDgCyZUyehKWzG9TP5SLXwBzy3bLiyAkGZLRaAJPvQfdtF9GBKRNhvcuLKti3ZH",
  "key35": "5D3QExhPEBJiPmsP337a1osp18nA8E1Y2MnivZk5w6uqr3uxHus5h6HQkMoVf4dWvgqPsPo6raGW2PCHqTAxPiEg",
  "key36": "3wBR2Ut8CtbgxB6AuF57hMSBA3vNyznTEdkhCKYXfz157pgkXwN3MjAjqzPwwK1vt5VFco2asHhH3CCxDnzFMyMr",
  "key37": "5EP6TRKXo98gEG1WMJLsmF2iQPDzbsQ3KGVMocxh1KNMoZthRXQGr6EmFW2qyBHs8CxS7XW9hwmWDj2MoEJP2A5t",
  "key38": "5vmZtq7bmyTA1bW3RyFupXSEhTREmwMBhwrvdyMtkqp1RbuEp8S3VvLa6J2maNUoMu5m6yC9BTkCBZcmci2n2pTq",
  "key39": "454bSyUeSrkMYEmmD7xj6286Yo4XWKk4R831w4nGJuSpMvCH61USahPdP7WgPVKf3r3rNTMVE9zQLoa96ZVDskQY",
  "key40": "hsgYwg9dGG5mqYpCupophXiRNsBbjnF8S7Kh72rVNRuo5ymyD7xvxNpNfFzMqCnt5vq9L4GY6otqvyr97HPEZar",
  "key41": "2vyyd5oNsU4TbRESb4nt3j9bdoT1qr8zhPQzNBzfzNmbpCtAQW21hcgSpPbtuU3XGyaAnJ9BHQhJPfNMNeEmo1b6",
  "key42": "R1KPWdU3gWZGjpFsSbG96WavHM1oGqiEtfYwLe22MuGJL5v6qNWXtwi9Z9q4JNgQ9qCHg7qk8mBtbtGryGVAFHw",
  "key43": "5vjeSZNY4sGHMjJrDtPPwcgRaF1CwvsFejvL8E8R9MyjYFr7h1xkxAnK78LoFSqAxop75TNyTxCxbpN4k8uC8KQY",
  "key44": "2aYMPrt9T3f15xMRGDgddJhJgvquBRcGdb2zSntJwpPvaPGMHqrn8MoQXwVX8gv5ouSed8DBJKy84cxVA5sQUaCS",
  "key45": "3hK5EubJEHCsYtgJ9McC2GGBXM5NUb12XRiF4pvGdGLjyzdpUYqYBS77D9UkEHNzVWwh9hjDgWAebZj3kodDRQPm",
  "key46": "3835FBDfeHSCSH9esooHKqTdwVySBETnCVXCmErAWnYzP68TkonZKPb8GjpFAR8KBGMMVM5yg9bArQLg74CYB9Fu"
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
