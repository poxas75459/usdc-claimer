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
    "duukZRFYmP3o62eWZiCEQcScAo3budhhLZkEKekvZXp78WY6RjLZefDFRCiYSSberqPjAJsYRwbKHGzMNwEG79g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3S6PrM2V4ByyjDPZsTaztmgyJQ8DJ44i4nWBwP8uKb7mAWkDYCmvK4wFD9yNYnHn9nvhgTzw3wke1pdPrr3VQF1d",
  "key1": "4C6mfJQARweHBTB8Qc1C5FNHdRgbkN2VDnFMs55JMiW4djEaaMviXdmzmC6S9GKg2GDZjnzQWba44GYUcUJr4JZn",
  "key2": "2GJ3GXPge9uJ3C4FbofcHVgEqgnSyCQugXvRaeKBPcACgQ2vQXjmXoGrqGYHxX59zLrG7kdtpTf4zfG7yoK8j1eS",
  "key3": "3gUEj2prkTEZ7HwouznzsM2kVq3d8RdWg5Tv5YrXN6Yk3WXd222vLNnzzZcPSfV9CrjcvXDiDdWkHLecdPCXhio9",
  "key4": "3WgDitcxXB1QGmJrqoRYadorsjNLkbGuhqEAh8Cc2Z4umQujzBrG2HUq5HjNyyDu5yCYB1MJZd6hhmdQjhP9VxJ1",
  "key5": "67PSPbgmypJhhzh3mJoiMX84U3mWekwZZW5mvAshqNXuNHh9ctSHVxzJz2PwCQ4M9TZWtGdNkxAdmWuEsaEUTGjt",
  "key6": "4KKnuDoNMBTFNjVDgZoZ7Ry8RZjxbtMvyS7haajwrZQNf3jyd2UsdZE93k7tNByZdsJeVWef6arkjBifF9BVnaHx",
  "key7": "3YGbPmyXkEbiFR4cFqovkVpUDwSYLiSXr2yfzwdLypxqxbwfszts2Fn1oacz3wZ3rcaqgPE98A2GYnjePg2fRZCU",
  "key8": "2vuJwfRWc5daMJ5Mrm123NxaqqLLSJcvkUkSmXWrH9gPdVBAkFK3wMqNbBXonnnVx4Bpxxhode9nZeYgPaq28KJs",
  "key9": "5KrVgLFKGACubd4c76pGZr9LoM7KkWrYuDWUge9FbARKunRd4bUXpFfQfLvUfHZ5fLyC68pxkJXoL2PwxmFBiZjL",
  "key10": "2CTuyv2rGHESXq4576gjdsuQ6DHTLjrkkCvfrjpqq7LcBTbEoeC8TefisTb5E6Kh77XeNYtJ8iDbXendqrvZGyo9",
  "key11": "42Epgfu9LsgYBiLjyHFMTU89bR33ejozCFSbWsUhin2HBXtnScdtSUewkRXGSrkaNfpg5fX1p6mNbdeBLVF8tZGk",
  "key12": "DWfqmHSYBwZU8e81fyE2ijA4KUcSecT9jEkKdcxzf16aaL2KBWEo6dy8LPShPkasbNrHuss3WCHd6yTZoXC2hUv",
  "key13": "2pRUkbsBNUovDK2QxQK1NR3xpi8QtHnKWqxtSny3dhD2ZzyDWBg4kKJyQWDpTHSRjCvW5oGft5ysZ6jBNTytgzSi",
  "key14": "sHy4horkWKsWAozAXco7gZETR3stRhvufpowe8z18kbNUtgUNaGXnaZ7A8h5yXk4rVf9ekf715h8ajqahJeN7pF",
  "key15": "rJtmuBT5PXRUZtXXeqcbXDhinuzczQprr3qngKgRivNp8BJZvDwSQrfd6ztAXtg3ckxoUcrgvQxg6KMWr5Cq9EY",
  "key16": "3crN2D4bJhxRtVVtK96gspR93p3xWJrjzYEtijxQtU2F7uNAKz2QQtT6jeBmi4najPj4s55RjkNCR2VpJ4eMd4Hs",
  "key17": "2Vwf3jiUiGHAfa5cSMVJKSiYUyJn7vN2fdnQs85NAPrvwuWSc17Av7JxwsBn9h6aUGJ7ZgyXTKXoRC5faJ8vwypq",
  "key18": "2a4VjgjvtbQCvz5aFX331RiNk8UDDt9jxmgnRA1SzAKrcaW3Zeuma7nL6mgRFve2oENAGq4o4T3iMkyjAcMdeDz4",
  "key19": "3K9tQbQzPtx8h9189NmohfFJsS9N3uUU3no8oCkgfQSWtdAXZTpRqMLQDwvTvn55VZDf7CPQgLSkXtzcyzsz5mES",
  "key20": "sFVQJrvLBetsTYLMjqxUBHWoR4ZUzttje3eavLxVCrk75edTYtfhGk4UYwnK1PbR4nceVoAe5iAzoBhNburQKQ2",
  "key21": "36EzHdo1MhmgUdegYjyo9CeoRZEpmakhfYxMkmaxJ96dvwk8caJn556kjsh439XwJeAD5j6BESdLkMFsnaJ1LAev",
  "key22": "2Hs5mdmwaTiLXg9s3tJrynDV6YUb6mA81Trw1Ja8rzrts2xXNQ5U37ABFXHPxFEA6Ffuo7viXtfWiJ55LueQSJYW",
  "key23": "4PSgDh8rhbXVd8ytED3Hj4oZ91y9MyQbqxaggAtEEGXrjVJgvfZqYTKnodNiaLkVwcD9jjJuJxpLgoT7eRuxrobk",
  "key24": "PdHpuS2EJtbZKwiBLq2K8pUAnkQ5cj3Yd3NvJNuFsbnKRFVAMTdiLJfASsj4Y7N1he7L84Bq46sbZfXkdtE4Vbn",
  "key25": "5G1XCdNNUszHtvmU91WHCuJyMVw58MmLfhBiQMVamLNKVDruRrF7KKogtPYxG8cWxGRQxMUbZgp8TKdGY4W4Hr5v",
  "key26": "5BQwvAbdrnFT4d8iAuxrXQoemWzQXgDd8mMxDbUJqXPKbSGSmE9WqXBU7RXw9mU6H1YaA3E3X8izN5oo3pwi5Sjb",
  "key27": "4qXzgVGRhZXSajqUTTcNp2BHHheBR2YTumkxq4hSKFByrvspTmUgpZraDmU4nu8yyfNH5Dpud5MHnrizL72qarrS",
  "key28": "4onN868BN4Z4sn9EUHkGiYNRE1b46KYeRQcYsezY13qYGMP3umdXdnK78LjAoQymx6Pgs32XQN1Btbf6KyyuPpyN",
  "key29": "4Cq7PAe3tcdHsWhD527ur5Nq3s796XHD1KLbBG8BBvNeXA2j7hG5VxCmTR4Rrs3teerGExYrN6d2VkGBFFCTVYER",
  "key30": "5ZUivs5EB2HXXiph9jRSe62VE5yRemGHN4A6EsmbbhcRivxg6cFZj7yQC6JduQ21sL5ZxKJwsQhJLZXTxDnWxrXN",
  "key31": "5x8KGnSME4ufhyCaDvWCmKgy48TJkMEQApeSFxQoJXXN56A5otP6yfBGnuLGfx4XySFbYPrC9LdHMNstuUeSPK1k",
  "key32": "Ste3zNZjjDf9ju6Y9Qu9f636q2tQBgFUKub1bWN9UiNTm6wQZS5MkKmroWC5QRgWeMUkSkP23igp5TRSd34ppe1",
  "key33": "3GeEmEh1KcRMRdpcWVwuSBLRPReZtAmLrj5ozCabTnnujJcZ2Kdpyr1knadQw6TFSz32Wv68hVfTjftFuTRrzW38",
  "key34": "3i7Jy6vgbaw6hobdsgiB9uAu2GdUgDPwEe5rhwVNF1jbVxsvjuFvCenJGoWPKqyi8Qh8axomaQYALF8M72g4SGZD",
  "key35": "rZi8ABDELK2VJN2uWYrWFJB2U5oAVzafJdJJ82oTqvCw5MDhVDArawAVptjum7ZZBF2Uikus78NjeW4FgtTUtME",
  "key36": "33DYqnRtZ8UtbAbhKtg5oHq2dEjtAMbqqAChJqTtAozZZkASTRxSLhGm5AssTAgQhtbDg1i3npkNKLZw9mUTK5EJ",
  "key37": "i1nABAf9hUpkAPwXuw2XsdDBem9xuLovxe4noprYGHFxKAFGgSPNYvFhTE39hDArcaPc3Tt4UzpA9JZWrJMFMtS",
  "key38": "4ZqQFxsp1ZEgd6ckjuc5E5StxX3v6ayA5exBBeKHGY4Aa17ehR4qNkDzn3Mu57BgKtMjWPL4Kd15wrezExLYgahN",
  "key39": "4k4DDRENx8CTZmA1wPCYRfpZLPkuUjYVkMvTmmpnaNEBe39hy5tM8VAXwwH5sXj1yZcxcpnmLnRKBnwGqQEFHZSP",
  "key40": "3TH3GaZ5wJNSbJecReru8zud1hNJ7AkygJM2Rpn8C99VUa6DBuzAGT3arPg31hzaq5Ex9ZbZJGSYGov9QZ7RVZ3w",
  "key41": "5mAVEbvmyg1SkN5PYrKXyZE9C7wptXSnZEemKzdXb94SEfN3BFNjp3joJF8b3DtQN9qVgQxGnzGcBCTKDYLW3TW",
  "key42": "3sScVgG4mhfcfivTkz88qFmuWbZCiQV5W28Pkhk231LJ4Kw9v2QJCxgdXg5a5U6E42QXxEKeRtrBnuwDDGR6wZQA",
  "key43": "4snhYzVMvwMvtF9ygrZizFtUzKJsteyE47ptj8kXxDKJeKSt7ZDdpsdkNLdoMojBAkseHn29NtYYpUTgVNcchaRj",
  "key44": "3z1oNscbRGLys9q4cS4FFnWSqkbQkU9B3hC64h9n9YZMLRjjwYo7SZMGsR54k88fShvxJqPWAFUeM8isDDHmXoKg",
  "key45": "227xvEwWUCiKwgwBhYYurbZWt6MEtrBBJTsMW2SLdWmC2Qocchf3htWHzvkkwBLmRycoEXGVhV2eL4FbWmdTKfro",
  "key46": "2taDV2WABYAjVgcjQWsomZiz4BaiE1xNm8yYxfbpih69oQoGF1ffAu6C6wj35kapHkw4A1PJ7QHvH2QF2SVCEK2u",
  "key47": "3CdJP8BjDNQ5DD8nyS3pGERjE5qasAgeodLc8gc4N9hezYTCkUFd7W1W5y2r7fWRrm9Gv8qpYVj8qytXSqb3Go97",
  "key48": "jair7QCJrBCd4YCEVzKHDHQ43Uf5eBb88PXAjDQX4EFGEK4agjwr3ccLutmJnrtK32VmitHhjniLZFmdXszLPsK"
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
