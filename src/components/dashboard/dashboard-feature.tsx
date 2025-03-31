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
    "4m3tkcGafxu41sAgrZtfkCzJX7W4bfkMAaRiTjME1TGfyovUdfHERCoDpPCuaS5eqwGR2sg2MDMcctZLfsjrdUCb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EiLecN5uXTcMFR9iksXErRMZubDX9RRACe1VNMvV2mTp3gUw4ihyk9fAV3mJhJKvh3vt3aJBbJNUmprAHYtjgMh",
  "key1": "5u8ubsugu8kkeS3Csds1BWYwpqPJRMMvdGoo6An7nMHVdTpsVUZfUuYYhF4eeMNVsnamGLzkMuUWuXGJa57ymFdV",
  "key2": "rTDZNTkgLLkoio9ca7y87XfuTBGSKXmuTKndSvgXCBZTVHSTZZVf7BjUs1GCdUqAUkKQpTmuGPUAcWo4a3qa6Fx",
  "key3": "61TegXdHf3HFyzLHsiyrWdg33pS2dTRD2JF5aHbCcZ8vFaWnaSg6ntBJPC1ZvWfoDWcDX8SdX6v1YMQ2efcqyG8g",
  "key4": "3PRTKSrqHvmr2d7jVerCW1M2hNv4ZkEBMps3oezidSWiWdcmxDpdYXGQWvWP97rwpct26xYbiEESAB1HMrXLo7Sm",
  "key5": "5sHgW314RZENEAr4h7ZCA66bL9Se792M3VvckxNuArvAJYUbUQy6sB7bnKY9BqBt2JeHiNxhuXaPTZngNDv6Q9Lx",
  "key6": "3UYHaaUkDgp7zxJAgwzCDBzUJkcWU2Rz3kwhKUmQfphFF8jT9nfLW3s1BAVjPaxnw8WGaqn758TZFBcs3vzNzD9q",
  "key7": "41fheHBnmYzTGQ4YNkvmzgKbDkWtuNHjoAyrov4sY26Pne1Pb573mFvFi9v4KHM7Qi5s3Ye6peL4994ivEWBuKnp",
  "key8": "5LCsPz7ZsiEGzvGZTpwPGdh5c9RfEzZKYHsjrTMPZSWbkimcKjXo6EqF1XmK52nNmv4t188vYyiMEjkrvBAqyoDz",
  "key9": "4GRUq3H9oE8DmAfCwPvbaTYnJRJRHmcasWsL3EUUsib21rEE6v84Y3vUe5aMcdQQzD6rmEk8XHG7ryNULqnWSceM",
  "key10": "2vopssjUvmozxeZRqhj19bsahaU1MuuWdqK7VA7RzySiWvkRs7RUhdbN129NqeJ8VdTTmckdsRvSCfRGGJX5Jap6",
  "key11": "63u2Rzv1oYUSwFV4s7FN6uXWVfJwpafJAsN7dvGMrA4yFmEj3xT1sTe68jovLne1J1cc5gR2Zjdw5LxDRD2VZnqi",
  "key12": "4ZremA366KBNcahHEp6FEzPsyT4Pr2rMkQfd5ZznPnJ8bLqCv9M6gKTTYU5i4neuduzQ9bMnRQf4bKf6GXSNCkNs",
  "key13": "2vJdkTV7ziShTVweoc4zwUJ91SbYhFQYidR4zhwhPJjrujje7LiVgjM7WEHaRacshqjwfSBxC5xKnUcrXLkpGuiw",
  "key14": "28pm8awGLZQonGXWJk26SXGPw1FEMv1CAjjbV77gSWyQC547SREx1X9g6i8YqXozvGXM6WBFSVgNvnikGNJExtd7",
  "key15": "NaemnfdZkhJLBt7LbsxE5s3TwBygwtJ2GHbEdhSj1ceHRfYQgBtrZ92Yv8CaJXKhxEDCQeQePjj7yxDSPJ6fWV1",
  "key16": "2qyusyGtyb18xL5iMqBxTnKz9eCaagGGkE8KqoQDPUB7kmHEKtF9V7fhj2Tch1gtoU92j7df6UFN5jAjPn1EeN9j",
  "key17": "TFG33K2Ro6GXArSE15dA6hc95WPYQt2YiSxzENX2FMhvasvZ4YtVQ68ucKAnrzkqfp4jJfwmTaQRu7zzdnpv3rz",
  "key18": "4tV7V7dmbTezKwbfD97dRAEHVc1q66dRP7sB1RXk53SMUGaqiX7apjapjoreHSYHB4YWvMJMa9wwN6FghCWPMeRF",
  "key19": "21bLrPdX7m3cb1dNuo5smz1sjni4H2qXkkcLhDD4e2PU4yXaxC8DuQnVPDCnEoNFYtYyV1UDPR6TfUGi1rW1YL32",
  "key20": "49LEVzDmnCf95x2ihRp9j4Nu6kv6VSZqGhkducjcogUQhWiQvpG6WzpgbHHkmy9DZqmuUM2qbnTF6TfrjVre5mf5",
  "key21": "3qkWaGqsGZnzLoH5tMdZ7H1u9JQTEXGhEmxx1vn6bpUKLfQBJGddJcyRCwezDRdUJd93ZSGJqR4zAQDwHRCe8Lnt",
  "key22": "4NquiwyKW7EtycSeLnNHT5RB1XPzx4ep4sZrrX7njgSjgMpiLs5gqR4n16zuJmryihuKDd2vf23mtM9DxBKc5S9U",
  "key23": "2MpU14eNScFfFrhWmYXxNEU8WQCZ5rhB1iake5WpLMrnov9s6mS5W7dUA118TxQg3kuavpcPsBrJjKynjjQZhPRD",
  "key24": "5f7k6hm5B6kyJnwfVbm4GjUu6Wt8V8vzTYWZukxBEbpiS33MW436S4j66MNJEEUPR85tKeAWKNRpcFDo6v7MGQkk",
  "key25": "3LnA3KQBppeNWbxk1cb6gCxCZ52L617quMWmk59qbGvE3o882JfpT2jV5ECieZLubTUYHAAKLjGqLCzr1np1Y1fU",
  "key26": "3bp1RH3zbBzCWGP897z4yweZUBQdYqNXNeUVS3AkjNbJaHivNyvCoSkxxsPGaDoVp6nxb1i3XyEr9oFYrtAnK8cw",
  "key27": "2s5h7wuopXpacZy5UEwGCuonKn8XBHbAnWwjws1E2eo4jAmjnnhNLKgLhNeJAW3MdMrfk9TgpWj13D4gTytr2hRE",
  "key28": "4pvPoPGtyfMDrzeA6sxH1PM8HJhy1p47HW6WycG7qDMhhMf5A6A3cbM5TxonuC7pfMgZVoNvsqTMafU6eRPunkfG",
  "key29": "4kbfgWUUiQ8yFeWiFknrK1oyjkxJxnYCgPQhpi2aKM47XovaNSsXyXYhPTLnvVdgq3eicG6p43LeZ6Z7zDAiAufq",
  "key30": "3fTFUK4ifpvp3m6rNc56BhScJMoDzv84a8t2Z8hCjTsA8i7JQ1AvtgZYf3EzFKyz2LNW2KAxjCZ8AJMg4o4XAMt5",
  "key31": "2f5KudwseScMuAJK4MGCS8tmg3tt5hsBDtBfLVHAufAj9e6gFyxiKHoyamnnze97SgAqhjGMEHDegLeyzjz4B5oV",
  "key32": "2QprTyCkpf2dm8NKmV5dw389JaZM8RKKprQV6tGqDK3HBfkpKvXNtJ4sy86eYVQNjcCJ7AREdd5pBvQppYLVoBFj",
  "key33": "2qeZfq54p7TrFzhnsGHxB39HdvMsPWYC7doh4DZGxDpz3qeVMpGi2ivbHaNSyFzHnVSFaNTG7Asg7BxPVpFicUCr",
  "key34": "3WsZvxRNagHiDTiNHBMHfdfFm9v9QjnBTiXgadSHcLsoLYE9uynaofUooRkDpCWzCweMgmh7pRgvkRuLZCkupAkw",
  "key35": "xxVX6cZDZawtP3UV4FCupzSzYtS9E5fyP4HKv7zDMwGVUH3wBz152ovttvN4RxBy5kjokjAjc6vzSzs6qHNYWyD",
  "key36": "3qRVJhj59X1sjsGeCnxagyARuhj3RFn8D5zbJrhQrTAaypdDTG19UW5JCeqyvfyRgsK8pxgxPMsxeNJ7TcvGDj1q",
  "key37": "2FNxuVsQkc4c8VCt8Z17txHiSe6eGE8BK8buhEvKSbP2NH39n7uYPWqSVezzohAm5emAb7fx1HZhEWWhy99Z3dke",
  "key38": "4pGm7k4jrgcB2MPbYd8ieLVmvMHytbbM6i196295QBkSL7txy8qYoChNckCSpu6eCR2L5rDvWwraFhoh4Ly5kPBi",
  "key39": "5BCX7254JCWoBnmh1U5DegcM1jNYPWPEEmRqNZkdTMtQNBMLV6FC4gMFfMSUu6CFP5u3pWYtzVqTTovhER9frNLJ",
  "key40": "4Lw74sJacsiHLNcfok8M5jJCiSwLBsCtN3L5YbR6eNPefN52YW7KqaRzccvR6nEjDzKqzrEx48ngU1PvtCSaPT9v",
  "key41": "ZFyFyfGKMXdCATrm32kDRJgkhCWGHmrd47QazGxSHP72aDBBJTwTWXgoiJVmkNQLCjezN2gNsH9FJcK7qkBSDJB",
  "key42": "Ldn8XSHWxHhXEoGzhLcq75QQpzsQ4WM5MDMvzF1CKENyXi8txKJutqUvLqxEd6UDPSBU64iVwBSS9Pfb3SZ83xM",
  "key43": "3Dhq2bswoJHg5YPeNQz3UghnXN41ChmTLKQ6tE7uR4eHbNBXSfKTyUAXVJz6qMifW9Zo2n18rcmQKGKtkBAmEXvF",
  "key44": "3ACFPLwYSrmqkivyqXWoaLc1uySwHRs2G99DTL5Jv2vgctLxJLUmJ1Wa5sQ8hUoqicHFjUZN7JyX7j1mChHpJf93",
  "key45": "2gSz5aA68pw8xTkdpJdW5PWFjSkaDmVYKZhVoP9sdkePgPMRYobmEAmeRKnBdXRRgb9szgV4U1auySuuftakUKmD",
  "key46": "KXZwAiimNG2DAUAbwKF4hZg27pPHQca4GwTWnuYpJPsgTBxNGo3nNKLAcZQ7Jam53YKX3ufBBNNSAQ3pBDFJjeU"
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
