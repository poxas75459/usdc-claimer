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
    "d4RZuojKx7ZCTAq7NNWXRnbvJa1Y9UqrUed4J8eZvkWnp8UmrqHo6w3gfHWdztQ3as541y9sDLeNSmMHJ2Gn4w1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mhsKEhoS1zGH62hKGtkcZ8PitnhMh3HG5s1cSvxUAhZqL92Avi8DDhP5h6uyB7fyEbVJ3rBGKwZw8hNrY4o6jJB",
  "key1": "35sPgzQ2t7QPwc49MWU6CVvaQsfxXDX5LpA3pk83zcPA84SxHUtPyZCY7b2ZTxy3EZP9NdxmYTEgSHdsGQiHmKPg",
  "key2": "RAHjGM1bfvYdmiatUFi2Wr2LgCgrkYivUzxABtXCNV1AC7EzKiiC8jSR2YgXDWj2orCiU6aTNscU7ZhKobyNwNN",
  "key3": "4xqnBMBnXvUHzY4p4Gopu4ZspkhvBCVLut2hfxyE3JeEKfZaFotwQ7c15mJA2BpjVQDYWx7RxahNv52m25nBFo6S",
  "key4": "3DERt6SwEkivN7FWXBu1d1k49TPvNrNTd21JJ8eJ2WmnpD5jcVyxcjcQ2SeGN36pCNEvaseSd2TGpDhFkR7gtQq2",
  "key5": "4ZRyPRaNEy1A6dPRaA8wN6W1Jk2FaM1VZ2pXcHCk4BZbeNoCnDuSzYqrqspvw9zRV6Y2VyX5jBkitWz7fvJr9VkU",
  "key6": "568CUDgCxPtwwaPND3QbYmgRcRJ1EDpSagVL3Z6Re16p7qTiMySFGxpUi5z4V21trd1647eLj8zu3R4PxfL8MzCk",
  "key7": "3RNym5cT9LL7TainzrhrmmgNxgxwvuBKoLk7QzS3NNJmsTWrcYX9PVPTKof4xXuDxu6YEQgDjDbjeiHwJK1VjkNb",
  "key8": "42mTBNXtjHTUYTm8x58grPbMpSLoSjoz48Di7XNL7SG8yyQNWiWfFEz3bMW5NP8nNrC9kg5fSCzoYuqEJbbkxVjb",
  "key9": "4HWYBjiKkJKfWE2t2U5bYffcbrvpf3rCHLqdXFZGXqRLAxPVEVbAFR7wj6RRRAEDhCgD6MWgLutWMe8emAtHZbyx",
  "key10": "2btBgHMtGz4nSe21BxjfKeogJJWyEPjXF8tx3Ny25KiztavJQZz7C8ZsrgfmiJ3WV65fbUBqeXPB3JZeXFwVWz6b",
  "key11": "5mak45Ph4HfnhM434cHFjwfhYupTJ5F9Pg6ikeJxaZecegkXaTi9EHRyeB8d2As3X64oS9qmszKmjni7ey2tZR9d",
  "key12": "4rRgzcZJCLz7QEUiTKoMkh1AEtE8hZvKpP1CfysgRsjHMRZ9BZmfFCiz7rdvdP3f5H1n4hUMH6QvgTVEZzikdQ1j",
  "key13": "57QFkubXWqWTWkLuoyZJeAwEZ47qbmH95ZD35iSRba2eHtnVQiVRAoqJaVAm6HJsvzfZETenPjdcNXKQHNY8mg43",
  "key14": "4AN1DLGVD5rJk4wCUdTRcfi6RXECV66kgrq4q9oTgeWk8v1WAywe6LYPQVgJ4HUGXcYLDZQdvzgXzyteuVGeRYnV",
  "key15": "UxR2Fut8QHA9rHa55pQXHQxWp8pKe6bdqgNm7D5Jwnh97q1B9ynykw3WjT97dxaS2fsAzZnDzusRG8jCRAe1VUa",
  "key16": "2F6wvpcCoXhQabiiSNbNb4b15K6ggycmAxDozQvtjqBvAQXhk7yrdMDbwjkuKwybsoTTvxcKhNLAuWimSz4LxJfu",
  "key17": "44LAsGBGjVkpXzjtMFQ8H3u3GzxqrmLwiEcNrNW2ro5pLoXXVwGbrudjjuSJX27Auzzt4Wkw1KvKj4m1kevZChnb",
  "key18": "5eoGoEqbduZpG8KXqd9aLwBoGPh7PgSFVruKUFBiB1jjnUPJi8agq6kP6JZKGyV9rRbvtgZx2EwxMb2LsbTswFf4",
  "key19": "2H1WS8Fjt9SrJGkEDdbyJjFLfXEAGVKfDW4hvo3dRSLHBZNLBhkQLwUyJ7Exhb1Z8z3ZRTj7QXfMphGqF7DhYjxf",
  "key20": "4aSfK9C3W16zoafrXb3BVkPz6Xxa15gemwsb1p1X3c3WKMP5AGD4rgRpN6V8qmEGL8KzXwNHAjU3HPZrgMh1VVXi",
  "key21": "3hwTfpDXr7r9S7v2aawxZyoGTRGhFzctigrztax2FGSKAB8PZWERMMQXrxsYvAHyNUWFMBGK2YzwX8yAE8QAePDy",
  "key22": "2A2M9pA9SLR3aEg9Q13hjoqKrKpHzuhUuChUDreAnXhpTdH3g4YPJPFqZWBffRSNTuzhcSBJnb2gUzmHg5rLxZBS",
  "key23": "pFGsJey4Wa2TPeZ1WvQGsiUyVz92sXaR57LkLhYeET1qoM2mysqezz8HZYYX96gQiXEdZ6wx6Jz7UoofuRs3Wiq",
  "key24": "4wj6FykL7fAUQX2kaeWonhf4fBtTFMBngSa88JrRZfD7aSv7mGYnSiXcU8ehoC8ARoZUQig3jyP4KTjCgSZ3k9aS",
  "key25": "4DEXMDhXf4EfppvrT4tdWgsMsEKTAyr9GH2yxvTTHb3vguA1gLMg63ZmSVcdF2XmM7uHsSqPmKjvYTkqpRt9g17N",
  "key26": "5X4P3Z8jX8UJWaQQA6K2mQQu9XMapQcmHkb6ctm96WGvwMx22VF4x5rQGEV3r2CHipGoNT9xQW4Jw2jB4xLf8fwA",
  "key27": "4to73ASarDtsQDqrwTpRXszJW7MnTiq4CTseUCgjVBYpzgFJPBW4tQ8mMzsfzTBzJqBURpuAHDW6p2j7RFw3ULZp",
  "key28": "3xCaMHegfPwxFUG8yYqg1kB1yd5ouEnjGTytTrdGRefE6qxQquUT6xjVXfh6yHKL8JomzatepWi64uyRpYsX6k9x",
  "key29": "4hGygQUnPcT6rBy54JRGBwHYPmtyPiNjmzQ9tKUeUF8fxpw1AyFVBuiRcAPMT81kH4UtGg5aigtv6LHrJpeVoA5U",
  "key30": "4ZTgPGMLq6fSuSxNkFoL9yqTCEquDy3wEj9pbW6P8oLMsALXnRBR5TJHsQNdqw3gA9c7NQMv7Dasip1jbrD5xmHQ",
  "key31": "5sXTiPqgKK4KLmHnPW3HSWfNkgoLYXgCAYfx39FuKvrDV1TYH2dk5RdY9Akt5dVABbpGHjtfNy5RvH9fcxXXeNrU",
  "key32": "2bG3FZAvP4zskrA9fgjHX4uJawk6MmrJzPdSZWNzAADMxE9BXpudagAeDsMEfpDEfnnXSF5s4jH4p95EFza4CGtF",
  "key33": "5JS6SHzbzW9EAohjwcxRyjA8oeJApakkq6z41zZhpN7M3zeEvPEkeEZxUWABC4xM61WRGLNQDebizAwVsEYzvmha",
  "key34": "2qVWZAX6ZN8Twh74j6exViD7CNevyTHgM4njL238WXq4mhCNxHdonCSLugeGWibkvQFNEP5WHGXJnKViKN8kuFBK",
  "key35": "53SdU1MrAzBeB9jFsUNYAhT2WCzDiGm2c5axFwgjCqeRKtowDAP9McY7nx28pfQpsJKySsbgky5YPyGjZUHZgSTY",
  "key36": "32vt2KxBFuJwdixtshMNfnNs4qsTVUhTicyrjuU19KaThEp9z8UTyWSBfzyqvke2Vd5iS2ti2eQSoWQ51T9e7Yod",
  "key37": "5hy4A2PkD64RMSp5S3CkgcRnAsBw199QisWaLE25nTx6L4jSyroBkXb6akTKKQSpRKxHpFa1FtEDz2QntzAuis9q",
  "key38": "4UeE1xPsynmfSohd1eKpEUmtTqoBYtcMtMREikLYA6EJofzd6fQWi1QVBfATVhyTofJPNfK6UThc3KYMPc9zDK3Q",
  "key39": "4GSav1s5M52wCMUsuJbmCsEsVyjMjXcNDk1GbDGSxbc4qLYnovyqGfqLEszNtyUrtMXMFBkXytCkb59uAd1a56cp",
  "key40": "5VkuZPWc2nPiYVwcezQEHM22oZyccHKDPbtqVDSoYjDTN8nZCY3iuvup71xG2j1u6nfH33j59efSQjZF5qK4eo6Q",
  "key41": "Wu4nc4BvDHUdkeGHEkmvxaPcsyerBGrCybDDbehvfSAezzFDNNyrUQ6am8HEEbaqWjRcVyCd6UMkZSPfvWen4im",
  "key42": "4gbHPZF4D82PvWdZbtqAKsYL9YaoodVeYPyM3YMSJNhyHTEGQVoULAZWosvZLt3aiWRwS9BskoxkKAkMvBpBcL5k",
  "key43": "2Npj3JujygJXwpYgTqA9uu2TNmEBkoRmrHPwpPUoqazZHUr9z8HGPHK5FGLCcYYnnq8PsJXQiW47Zq4uQd9XS4Gd",
  "key44": "2kvkiD2Q4W9veXSu6DqaBd2Ky4yMs9LAdxZQGDXvVeKCzurhEbZ1SrgDzBtEyc3wwXBnEHVM3Dkh47u5N4q2sAA7",
  "key45": "3hZfxLRb1ZzvyBFrJAyJL8DQeEzZeCZaJhyAt1ZwXaLtzGq2VbFvRn4LBm2nrKVuq587ooAMcGep9C7zT1P42ToP",
  "key46": "55EYR3VnYnbBwPjRieeSTnTrTNvttgCCWfA4EqQ3BJD5tqZ919VyxqU4uBRP2AS4eh9QxC6C5q2h2U4CiUuPMuQm",
  "key47": "ixcdQcV8htkkinzEia3vcaHAvCTk25fyWMLAbdA5x8HyDcUFhR29SYWbmnkWGYcwwM52DXhMuQ7mpJzuggtgGft",
  "key48": "UwEKvM3PySK9ujqLSTeyW3dsSPm9hoGAdwYctP4i9hGzxoYRgKNg1xDTEur1FmH3tiFNuoKjZoEj6S9pVG4vNC4"
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
