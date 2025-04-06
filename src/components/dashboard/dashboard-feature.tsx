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
    "3sRzS43mdEwtNFCeiihKY2VMHLBnEF7TqPphwpjQ3fU1iheD9iFKfqYpFs2j3wmztVF34gJBuxUskH7t75K1EAXq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sgBHSJfdZc7w7uwXqwNg17m8hfHDPuY6mD1E6P6wPX9bGdHgHgzH48G7Q52MnARkyykvfZUG5W1qojChoTJ4ELL",
  "key1": "29s2hCNGspTW1HWNJjo7EJXNbcgigxAfTo41Lvji4E5t93NSAyht8HY4Ucei9tqa9Rh1HkjBh1m9Ax9ums9ZXCwT",
  "key2": "2Y22hPAwcDVW4Am2LxRXm8HLjaqFQrrAFcUd5qd51Qx4BZXRgQ8nM61VJLTGZhnNqkHWXuH1i6H8akNjnndU6Tpy",
  "key3": "km4jEdLYkBPTVhiYBaYe8nEExhcnABpGpdNRVbYo1vkUtcSUp6yfjMMzGcYJUbyMFBdd53zFEJzQFxQWpqskfXp",
  "key4": "5dCqK5izNNsnb5roYjh2DCjtY8pv6R1NdpE8U1LXcjry45zAdukUWoLN53UG91eU7wViEg6gc6mu75CdZzP4Qn1t",
  "key5": "4C9ZynWCCsc9X5MVuhawvchTnpJnaqLsEEhgwQATF6BPJf13Xv8diV6FF6zVRE7aXbGgJ6USxBNJ89eXGjPVPwgc",
  "key6": "51YcNFJyjetbcQ1HSXMzYeXqZSvrjLTGuLMZhCeJceHmjHbVXg2ZMubBUwauoBPNTcxyzDn2BxNyDona9Cuy4Azr",
  "key7": "5j1kXy7DYKmXjEUEXAtJDgMqT4iVGzgvm18J7LVtaQ9wdiQhTRvQpzxDDtZyDEMDaQ5poYbwSDwrS3tqM4BKkPJq",
  "key8": "5pk8mmCkbjoKtRM4wyDc9Ljb1pESGg9zBiHhVKdd3pKke7nJuprBwcksMz7UnP37gWPNBFTgaoLb8gHjYQiEFr5M",
  "key9": "2ztCeKYHEo58ek2sdAaPoGzHXf6AM7QLGQNN6sfibbyit7gLPUy3A7SvAYCi3Koxx5QkDXskLd1rzgXjurajhsj5",
  "key10": "52SthyNGsSwNQHZUsqiTYXD4xX8dDbeoy6w6g9US5RH9StthPWFsKf8HVuBMsUCB71ZFQMKEZbnUNUekroKnJRvT",
  "key11": "34gtqxp7BHyuaEeD4csZFCJxqtE3Sg3VYcdV46hSFiakFJAeHnuwaPCXsDndMu43QSn7QJXxbTxyh5L3ScqwgXuq",
  "key12": "5H7eNvvyakwRaqXuZ5QCTTpkirXu7hLALMYFLmrwUjnNxwYp2RDTmDjLuYoMS6fMEBCnoENADCWotxFZsUf8nJer",
  "key13": "5oVEHh7mggJEZZA33jFg4ybFheBPd4ypgxWKijbn2mgHt5v5BVzHa4GxDU9BmgAVTHa32veixRUrNVLeKmqRX4P",
  "key14": "3yo5DiEiQaeLuC1AgeFshG5PtKMUEtEcZNe7Jv6YeUHAyXSKqqbhWp8ybdU3A6WQEry3jYYxmv4kHwbcYpjN4koK",
  "key15": "4FTFzEkBsBHfzUpVzHarxzAWd8BBbWycW6xwHsk2F4YBN8to8YSVQQDE9r1TkvBofyeQbXBNcrC6Vu4Z9uLAs5xX",
  "key16": "4rPq5esUX4uaH19c9ksr5RD4AsDuJ1vpCkgQJjuev2R17GvsNDE7cxa1ENX6DmTSjEiGUAFrnEmW7XjTbWvUr8FV",
  "key17": "3XSWZtbv7KSqrd8Ry51he6H47YtGZ8eREFP1JPfxRua5gpjbWbiXkhXCCSNd1gu699kiPTu8GZuRK7JzX4t9xmuE",
  "key18": "3iZ1VJr8gTW4UGgzySRrAxYP6YYgavDQ1eZRjfCzx4BqHBo7wcYM8YTWuiX34fwmcLLDgMmDmELak2SMAuP9Bpnr",
  "key19": "7hLwLUMpuGx88WpCqhy7pKhqUZs9w964eGk51oVRvuGJe6L6AJKobqarL8cAJstZkoGbjXLLNGKSosra8UsCM3j",
  "key20": "4Bk6aWQxEqh697XzgvQEuEnzD7Ppyt2ntXwiKxwDCASGaTBCMqa8drYbSmVeaTdFdES5SgrAfXUmP69ocEu8NNJP",
  "key21": "2vMCMQM2iqpzHgdYmsHvjrsbbASShJV7HBTyAYroGuwftyx5uWZABEVT88LCbWSjoH9tzZBnea49jQBz85a7ztuy",
  "key22": "vbqJ9D9L5H3dsxPZDTtJpAgxGSyWQ8vXBD81TReVmf3bNpegUsFA789vFbfMmBn6uLKg9LGgMkdKsvhpYXz7mzG",
  "key23": "5rnmo8w99MPvkLH45uaS3UPiW3Wf2dvPmZxuyezNHVVBJAF4gcr3qUpqu4V5cSydfcHWjYTijW5kBwCpaBxrjF7s",
  "key24": "MRTtA3yqwqJb3dxB9LBzVmxn6gMa1Bhmpd9swSbYGoydqKYgr2NdnWwPaNayyqsnCX4kbt9wRws2cWeFeB2UMfz",
  "key25": "3qqx37RwqfxDLRsZBQp5PqoL6PDvmoRy9jq1rbAVkK4k7G2Xw7t9wTfa5wrns7m5NYC1hwEAJUmLy8UXKwLNwLTx",
  "key26": "4mRmzTXCzmPzDFQMNo1gM2WxsRLRHLybEdJPWdHcL5xZHiYNDLBPia1KzcD7uVuzUh5GEYaQzyL7L21PKHdYP5f1",
  "key27": "2YAgvae2xFfkDjra8RSA3RUxSqYxspEYAUveKYVYhmWwgR2Un8JyBd69fGyhzjxsov1mdNTcU4K2crf3unwQqQi",
  "key28": "5fMhBZuxz6ditBkKX3tJyQkj2a65m1F5tHPbdFqYr4yfwKv4vbgNjpGJerJWzCAPygEYeh5WnpvEcMozgAjyUjuZ",
  "key29": "36SyzYJUPYj4HGMxji2wph4Q4LieyivhAJUwfAPATHsCvrJXAAAXxURp84JWuDKQX6YV4rskngNKutvpjWy9vo6K",
  "key30": "LGnPNhckHqZNexcq5YZq5sffo2mj5VCi8Xk7xDzuzaBsXKnoo7NQFeqcLjfpU2euyaPgyj9r2BWZ6pbAVDcsDmd",
  "key31": "28BEJ1q6n3ebuQowUZBmrTyeDGWVvQcoEAhp1Y8SBDEp1M6SV5zbRAehToYP5xB1DE1UUggKovAQG1nG28zqk87e",
  "key32": "Dbg31uG7sn3EeW7g8vW7sHvzNx18B6cB4cwLm3oVxKGr7gGE3fbej61oBPPtPEXGSyo5yFPbDQwyLkz1hrhxb92",
  "key33": "1jiJ6PFTaodVNKTkQmDrZ9yCCLY9tEv68HBc1CumxgBLfub37eT3Q3e7VxZYPNwYuQnnTwGPNYvsaFMp6fhYrP",
  "key34": "2QSzP9QNWv3H7X1DQhtF2Yg3SXzqawrMBQJYaeHSsmpLmFrbvVGhDCxi7eEYpzpK7AQanLEpbFzZACEoLEKJY43",
  "key35": "2PT4bXg9u9zqxXJ7VDy8i35WMk5AkERENU8sDbhC3WnWAMksGkYkBzd7v7NfUtnf9GN2Gqxhxnk2E6oPnqY3yXn",
  "key36": "2AsVvAhCimygKyvBtwt7gEU5PnfqFNK9RFpxsemYJhj4XWWMQMNCokDJ13jSrG2mN1GBqENXJk8UT6kNZ5CNAe3Y",
  "key37": "3fEjxFDJVmBVWCayW4gKQmwDWnNKMdzv1rA4zh4Rcs742UcDSP8eCNLZuPddquui3mKVrQWxShR8DBSqaAYYRNak",
  "key38": "msPHNeB1ZVT2oNnmuUT1ij3Lq16KhbdoumPAkSgspehVty7xXqdscV9uiEVTLeCstuDep1somD4ktMGQrbKcxx7",
  "key39": "WfHRbjbn4DqVGXNuieEsfRgSgNM1VCURe4dZzfwKBn4cBJDKXWkXXp5YZgGkSBjNUqZcBiLe3PbKWEzVzefzpTg",
  "key40": "4ZLq7zfagYDKmJGgo5zF8c8cGqHDnpPDvcyVRkfQyYQB4gTp9rMd4dJWUkp1HK47Pn43nZFwU1nVxCMU3WuEJuuV",
  "key41": "4hSLfi7eyfH4jzvFkNM9JgMpYi2k9gMUwHx5vbN47W4uHcHoPs3KyvtxH9acXLyTQey8PqKhkiieLJXfJWxs2ZFP",
  "key42": "3qW1rBptKXHnvvHJR5Y5tGjqwtKgh6YYcWpaKLcMx52RxzJwYqioo5X6mWaJMBTviAR55V4Cq8Nu3954JBzLpaHJ",
  "key43": "65CArEvsYi4DaneKS59Z7KJRo75ehbtr9Qcpq2yoUPNDA6rSVaqygvQicYMSV8gdT8LJsRSQnZAn7poRgriiyrYw",
  "key44": "D8QfH1yBUq3JFkxVRFVCAUH1xpM7rBk8HcseTsZj85d3frskaJgUNNAtMr95LoVpGcfX3QR2cuRo3xR1agodPrd",
  "key45": "3dkfPP7RkLNw1sNrRhNKdVcyFpJPaNGxbY3b7Z6yZCgv5NLUDpWty9FURddNTDk44HJ57mYat6uktdeZQKpeTELD",
  "key46": "3kmhJ3FaaWUBoAwfdve8xGCaBU15zXBiK2ST3haXyPDRd4r6eDNBRoGWpGd6o6yVrKuBUUkLb67Pj1QUxMGKaYxK",
  "key47": "4opj6r7c6C58RzRcD1i4MTf2Ebs8pufR59suZm1bEofW45ZAuuypLjid6ed4FHy7h6XfC9Q1ftxrrvSp7YofY8B4",
  "key48": "5S3kaMSvPnBx55yLrAXGTUqaDg3qm86ajjGTmnWgtwVEedQLo51qg66zWS75Hf9xBgGPxmNqgEM7Tu6EUkmm8GbZ"
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
