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
    "mZn39oGB6YsQPM1huU68hZaVar4KDvM4zvM4RB8zuVYjBQ1oKwi3WEqwhauvhM2wLnu2cFvbSgQU2YkPqKwnaw3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oGmzAPMnoKNJZDAQq5AMQQEiHfRMak7or2hB5bXHDdp5foiyYYx4cuGAz1BfLKkhYMjWiucsLubuTby6wV24w5t",
  "key1": "3fUejdeuM2h3sEC9u4H6hEWEjmXQHEkxzGJzLFEUYJfpMo7kqTBw2JSBzukBVqfYWu417bbM12mo7r2TPKxseFMj",
  "key2": "3RiQbAPC1cYHBFzarAFvc9GprXU4ZGHYj5opeN2e6v4P5EmxgBFwknbZe9Bq78TcoTqziKj7HR6n1CsE767g6FPp",
  "key3": "4Dag1bNe4PYzT92QUKzs42PVJW8PGdLJxReAvPiEkzTukGHRS9Kc8BkSnBgrN9cnPknN4Rv5gzL9m8bMLepmPokK",
  "key4": "WMmbJyK1r1WfzQP4QGGQ5K4JGq9Lv8XNyR3fNH93dhz51ekavenSwdJhJrvMqWwqqxTWF38sAYCTHFRubn2mWRJ",
  "key5": "5ZmTRJBSeFuqRhAHBRhyr32dVEWnUj9x84ZHc2AH8iKteHsjjasL7mwgAMzRWW3RwNhCVxJz7tV6H4MBTFCHrPbm",
  "key6": "2GFXZrK9QeiuagQXATXLDd38dwnDRfTYkfVcjzMrArRV2335zkVs4c9oT65Ar4LQ79WPU96sgn53TxajVdzAsrU8",
  "key7": "2SayMYMGQgwED2SAMCwBASuTubFvyUpYZBkq4y6nDnGsnUeuC69AWPPAjbYmCfECtZAYdMgxusQ1jn2MUQ3jGpky",
  "key8": "4fCywiSgVXYcnMK7U1DVWJ1VPQHF2E4HsB8yB6hEJuqmguEpBwf9R9giUjFWvpdVKezZNR3NPc4q5Fie4WzB6ygy",
  "key9": "64h5KFJT4Z9e1ibRyCrY88a7hdf5YL7s9YiYvp5QUEoM1Xq6o6pttG9TgaFh7coekFCHuAmqZ9a2QUnwPRD7Whxj",
  "key10": "22scUn1ghpMM4FsA1GbTpq67uvWzS5ceN2PpZuNT9c6hLT926cJXgypwvBLSsofyEfZb7vMkCV5rYK7XRUdkizAb",
  "key11": "KLbreUmNrrk7gtrq3yDGMWNZ5eY87DXWcuXG7UUQzWT8yT4qdYbsCQ8usESRRkyBGmnymCYQhTYF4nc1JWX64bj",
  "key12": "4q279MJFUNSnshTRCnYTqSEed6TXy6N5KDfwhPPkbo3DXYRfC6wHEDAYgkvo6jR83KfzqSfgyCam8AQdLVfbjoXs",
  "key13": "bymtbMUhpbEqEDs6jrpRu2kVWkheP4ZHc6oRYrSDKsxgyGsBGfCRCUuV31BdbynDQKq7Z4GVdVJdexgXufwzzts",
  "key14": "9KrCeo4w7NDadfpdi7gWzdgkhisBZcd2zjZ1ptNY5LhwRfwygBBZj6epGSJojDbqi2bP8jAiXYY1ed2hHKZrUh6",
  "key15": "y6hcDoNa1DE7VZGifc9cQX2HmCSx7C6y8m5LuJbZwSSWBwfEebnKDXqDz4dX2iH7USQofhhXZfAN2D4eYk1ErMt",
  "key16": "3QGLN8Zro1RXVgjCn4oZiFzr6CtZHYFMa2ZjgRbyPbgdcZTdNGMq2v1c6vc1jhdquN727TMK563pETwkDo8Lo1KV",
  "key17": "37xK35ABNuF7WnMSUKMseXK7SJT8zfcfeixBLyv1Vuu9egJWry4aqVupSkYHc82HDJ2fJx3EDR5yZt5cqseAULiS",
  "key18": "4EhUisBnrsxzggSUjj2UiN8TVgiusNrhSdNCHhRdqqa9NCWbFAUKKwzxECQmKf7bVntHEWJoC6KDFbo9MdFrCn6G",
  "key19": "5uR1UpTPACHFKk3F68sJkqXYb6yZwxDyFWVATx4z9iwN6QLq1EEUvSc93TATunTv9tHvi48G21s8HH9NHKPghyYj",
  "key20": "xbLvt3TR8GHfzwhsDBaCmcsXzWfWnFSL5D4jEeCWvpfhd2sXZRBE2txrXM9MKZSFdB1tN9goUhBK6Nhc3g6cAKq",
  "key21": "K5iU21pFFDvSNxKjkNSxg8Yp9fpacmiAaAAJExFC71Vd2cEUWZBoPFEDFWVAyhHnkjZNgY4aXNvS7sS4KNyAUtj",
  "key22": "g4uZ9mtKtt4vRbMK4X6cPBF1uuH4zuVFKkQSNzq1492tim6bwqGHR2NWzc1XwherFJDxzX4zS9U4Mnojymhppnj",
  "key23": "bBXgJeRpgRgxgXAgZuj6Sjgkzn9gQWcwYv9SuSep12nSWDrYRnU3oWM4E7SvPNfjTHkd2pe5MGRCbkBkP26GJQ5",
  "key24": "3UJvw82w37mRvm9eDj1dDJZZ5tKCnMhSL7337JJKqycS2ZPKfZNhU7MohxfTEXmXokQ5J7E4anB4NY8f3Zx2zC4T",
  "key25": "34KBC5vaifSe9aXXmPHxadYRLSrcH1LaQNAQ96XD4eGCQg4nvFqVpdikwdyHX3MvFF24aPndHRiW2JAUZRt8kG1u",
  "key26": "biw72Cj1kqXY4yHYAgMLMUF9Y6zLC7o4QoPAnUrp8qUMwiFP7UC6Mew7Vit9k7hrbjcHZZfYjnmEFZNk1iZptLi",
  "key27": "2tYg3FuzafJUEvSu8UYB4hjuqTweNt5SioSNB5BdLWoNMv2w2t3WwuF7U16JVk2G9eQaH2UpfNLrPxuUKmudVYea",
  "key28": "275YFLSkCh9H5x2xM3tnMAbUU7ng2cvk6dqC5ewVWrw16r2DXPZ6Tc52CNxjx2b4YuyuP7UXNPP7uB71z3STr5Js",
  "key29": "3HS3gM45L9ABkQKnthD9xeVLqiESNLDiRhdVTxum2gnLvdmbqhRwcAUjNyBQWfced5EgFXhP28mvP4cRuZvVbwja",
  "key30": "2hQ5EwYTcnoAZCewuw8bXoAaALwc3qzMH7dUA7ry6xcqu9pN4uG4EDoLXKUAgQ54Fd53X2i4h3KxgAaTEdWRQmbt",
  "key31": "4QSYknMrLfHDjkT6mLJ3H2NaKphqqo39KUiZrKaM3Bh3hBGQZe6dBhSypc9psSciUQLuAJsrLZ1BGDTYP8JhfTAa",
  "key32": "37stLtdfqx11W3eqnvVzKTV3KSYoaxSXQ7FMRgBhTwrGLzH1pc8zno6Af4fm986kg1ihRRCJrQqWa5mVp1e7Lbb6",
  "key33": "4bc5Ri2tDYemx6MVgMKwgjuAzPMbxDcXQHUxcvGAZVHS3ZwxT6u5VgSoHhdEngWPQQSuxtjgPUY5KTACAcptCur3",
  "key34": "3fyjkj8UDnNXyHGukyG3w7pFCrkiurfCArGWP6HtigYWGSLgFr35UWbTRoXZnSAn9wC8xb8x3VcBP7YRx3Azj93Q",
  "key35": "4AgZnG7RD3B6GLyEXQfpukUk9HNqQdHKM2n2NfXZhb7sP5rmRDiUyGu9DZXWozhfEMG1wrD4i5UgoxjM1R8dzbyD",
  "key36": "JhbMBKQgKAeqrA6vgp1eJjtcMDs7b6BGa1sEPnZen2praLPx1Vt7qJ4Uhwwcf2Jh6RuFSaDpLbixpBrH547bHRB",
  "key37": "3EbepAH5Jr4mJt6zzRw7UQx7TwmZDpedkNstJ1biX1KoPq9PiUS6uLHAZ7wNkdg4PmhtGGFbWUaGY8zFfJ6e8uJx",
  "key38": "4mnzrtbtL8WWfgQLpo4SqRMKhTcxTTTQ22STWhS9frWcKrYgqbo5oGDcSgBMyQhj5C1aSucY6fqrv1pQdpSPjuJY",
  "key39": "2h9zpdk9HX3Ho6z4VJrZQdFf5GuGoqPF1DcynSAp7LuuivC9MZCxzbFJ3GLbLvYfbcY5tEAKsDNMEGNBbHdbXkWb",
  "key40": "2NXZsBpMP4GJaRz8vi6dUMRUxyioz3pPajCfKwuFXdSdqd7LjCspukwL6BqejkKtLgZgr77k6YnVm6hDpVDPL6Rc",
  "key41": "4SjEMiDCu6XhRidyUNah5hs9pyM788RaBXUHJXrhEemhn79Z7venKModbeFZdh5FyG3s3hwaCoGycPspn2ng6dHL",
  "key42": "3QMiEVUEBFV2a17JXBybenxLsMBSmkHZgfaCzsa4qHbwtUcUpW8bf8Zb9AKgykinrUhREGiwp8iAt1WKX74TZWBg",
  "key43": "5zscxmnJMuxUHMJTxYsTFBfEs9cEBG2xRrfmHgoZefVXQjjAMQD2QBzJj4UCm2ARSEeCXz3Fywvb32unerMQmEqv",
  "key44": "3b2t24ivxzgCHFsNa1wtow5xyJbWaaXeXBZtxYgUPmtDFF3m2GCD9kuWxDeFuEqkCYjHR68tq2x9Kv1mksPoWmBQ",
  "key45": "sz8yuJWHA4pBDLv3TY5LchoEv8u7wUpWZr62gAuWJvuzNHvxGfDdre9EMFspYTYbbPe64L3B8794UiD5ZmLpjAw",
  "key46": "5x3XARXT95xrXhCmW6MxaCRgSJsWCVthXa3JRQoLWCd1Yyb6cppjAQYZ3dGYqyiKYF36Y2SWEoEGtKLfjDTFGXmQ"
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
