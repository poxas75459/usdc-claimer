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
    "2SiX7wSfZ8SBH4rLRhwRRHZLUWR4bsHBkk6Qiz5LbxYrY82DvE8Xa21JRGvibVRZuJqxWRkTec54niBTnfTQXLxN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "616TRjEcdA4GZMgjrMLY1NHMRcE6RYJk8nyAhP8CzzGf1eSNQDF6TRkCTSPWeroP8WB17DUbbBQDbDbP8nhxeavG",
  "key1": "5mtekcsi8uy2xAkg9SLvH1WAEhrMGx5sQg4uvQbgz1Fek2bPTTE2mXG7zSpgnzZmSCSj7hxv87sjTrDe3aMpS1GX",
  "key2": "4JrPqJiMoPzpCPFNht95ay9xZ4EV2zLq6wP8JYYK1QjTapz9Ez4oYhbuzz8CsmfhXZogAEts9R7xiirbUqrCtmEQ",
  "key3": "4Hw2ezk8teMEf8bjTkpgBA2UiEqhphRD16QpyWTf4h78UgEGnhxskHsjvtkYuf3ZKJ6hxMLH95GdiGJbWpQhCBKN",
  "key4": "3gEeHssYfuRtfJMbdxjS88ZxazzMVXNwRJDREpcy2Zh7UW2Cf4XWAjrbddA71geTdXfiwaquku4HigkdJs4yFxti",
  "key5": "3fuUPb5uu5MLNkm9rAi7hj3PEsaBiuKzR75Y812qc6s9eqdroprD9DoTS2CML4mPgtGKUYPJy5ASRTrUUEbjQ1xB",
  "key6": "8pcUSKZDZHzsmmoynsc4jiU5ytWcF49ypfuKAgCgms1t5YXRDBTQpWddfsxsDTwnHUXp6WUQ9N3M8cuNZcArWXJ",
  "key7": "54YV3GQW5cqJQMu8kwTxXjS19wKwwCazbQxgxhnTJXffq4hQ67XDkbQz4SdZZQLag49yDmkyjkhw4uKrE3vdiEJL",
  "key8": "43rAo7ZsdN8vmBHbsEp1c1QyEW5EFHALFz8S3PLFSbmLmjKu7gte5jJfYPV8jSCvxXjV7TcowMCDghb1btjXxytg",
  "key9": "2w5tdwPSd6HrwJ3h4hp75ifVSeMoiULyVTWrmqE7MyH4uMqFB5WHgQDsKKQVhDriyB5uwDCJcgBdYW6vhyf4asxB",
  "key10": "336X1PsSXe7i4VU1tmjabTm3CduMcfvArrWRX9QCUm6YByLrgiHgfU6iewfD5ZdoTgHTZWRs4UmBa39ojPp68Nwu",
  "key11": "2bTyXpCpiyX3AsxALdQrkihbJrFhdgCHxbmaCQjDCnwHkUsEPkS9yLmA7EhimpCxikpAsyNhMu6EXq7KTzyHgkjc",
  "key12": "2APSgHXMrQswdYXTUquGkmWbNCYEhjYgPWU8jqJ8j7xxSkEjF5L84MqzkY9SwkZbPNKHR8FYGxjfPCtUXhfhwMZ4",
  "key13": "4W1GyhccGmtuBsKC9GyoQRCBcr1zpwVFBBtJG9PLHh2DDJiLB17DmkTmqc7MQXiU2FXSfCThHVVM6574LMJ3Zhgv",
  "key14": "uiq1Ds3wcKcYY7Tri4bvA8LVAwTB6jfXhCRJkmnZV241CHusQ3vbo6VAMkEuyGhGQ2H7LKQcyebiVCGektNwXEo",
  "key15": "4NU6gL5dpf3N2FpNgdPRFmL7eHPHRr3EmgmFNZ9HP7DoESrr8TNuCZted3y8dgA4NYuGchmGbX2FrjCbj9ks5kp4",
  "key16": "4oGBPXMragyhqMXy7921dDRVmGjvnz6ixZYcyR7PXzZ5k1KcbdzfGVUZWwP4BAByx5pyN8SLvGTKpyp4vunjsfvC",
  "key17": "5Wp3TGAuCwNubtdh82CTqECgU97RshxL6pJxmnDEgHpd4cKfokhPKEQk5ghNtD9Rby7NhwLifEzyw3qgs4q9QDaM",
  "key18": "5Fv4vCKfXxWd28LJGAC1PMottpziQRrGdYNai6VS6qGERzGVdMfofJmqta1YeaTmWbPuDrBFWiZezvTtXR17x2zq",
  "key19": "4BH1TnaZQP4tNCJy9Yyn1PngQcmohmFkgwkrSP8U1xRrcXGbgUvy2y4hJArWeWNoydJGjizVXtrhjRxVxTEYAZdm",
  "key20": "4xXr7TZMP5ovs653mWpSEyNVkkf8QRqjFNSMbAeumBNLzsTPZoMymS5fDR1AkQEQW9FfJY3q9pVvaWedrjLknf4q",
  "key21": "GKi4CUZKTXnSSP63sA5i7SBkGDLxg9sp33WAu4BWfrFYaW6cKNBx4tEncnYH67VY5HeckftRqUnQ3m7tH8dkPPp",
  "key22": "3jvR8hYy8R3bNw1vEFg9gnL243cq3KWRogbzoPpGdrgbbUiQYAJ1WL3j9GqrSPYvdXySdeYrMt4NLa8xtzntpLNo",
  "key23": "toiZ2XDURPkb27YSHRUypKb46yrTMduzZKicfcc63dfjsseqVdqgQyTuv8cm7jXiWbsCua4svYjNNfkKzgnV6ap",
  "key24": "2rBLsd4X2iYr3MpdU7urwrh35c4FR4P3JDWzXnark8gPUhDGAiSvpVsbhjysNsm6aiDJGtoofHJpytkj7iMoqjpC",
  "key25": "5Fs9cEsZc9isvQg85yjdHfCU7gXVzPRMZxpQYLAUJoBPwmpPFbyiMrvxrtfwsAdZaJADerCD9LnEjAJwaECYp1D5",
  "key26": "4zJUxEVX193zKdabf3FnFfiXNLYmz6sRCWG4sqkbFPZTaM7kwgvKzahEvjR7981bECfKHWpuhPBZwdqK3yVXB83K",
  "key27": "mSd6csBev49H2FscHYuLvC9Ntkaq8b8uDzsL11fiB3CvFy5e3ECC4xngYmgxVk8cbj25oToqGZYgGhzckU1a1Fq",
  "key28": "5MA4vCajgBbg4XfSn3Gu9qgFYPRJKdv6r6U32gQzeJvZhqfUfvNv2npA1tiAiGhxePBQdnYGyV3r6sXWzAo86PhG",
  "key29": "3XLyPaDbjMsiR8vtgnDWqBJPgd41tN7SQS8mTN4cgejKWeZ1wRc7EtuysdYhnxi3582esKmRmuHirFmKuCSYpuM7",
  "key30": "5Nsftd9btBsyQKKjiAknyHqqQkwfcQeostqGuc6yuoRSFU7cCrMEVFNmvEVSGhvz634Da5RPwnCkPBXYigocFgHs",
  "key31": "21Tn4c2FDbcdcKoWKTuFz7QMdqhkQS8WWW93KKhFYSEwkoMrk5c86mhEYyjWBYJAYzDRWuthWuHRabDgHjXvqdwn",
  "key32": "5ah3kjz1nohx6hT6SzUowq2d8ysF7jg9ZDvaMgFdqow4WYzspCq41jugGV6wWo7rtMBo7ePaL3y9sYTb6YPYurNH",
  "key33": "62UwZKtyGQYjmZj9HYxdtYq37bQHUMzr27yaY8yfn8N2gjd1k6jWqbRpnAYjxW4myqTX7cokSVdE2Di7xxw8V4gY",
  "key34": "2uomtXRgYhgQV4xBz3sGas6vzVqSdHBtVZpPdtigdYwEFBCdrBxqG7EEunTm47DJD8QFefvV6o843nxdkPqCCJ9V",
  "key35": "Z6c5HmUnYW3bjmaQhWnaWdESJpgve8zfXoAy6ryVXnL2mGbgUaYqNyo36i5M1hKkRMLdSmidm7XKhhMunwMEhP2",
  "key36": "2jVPEgLyRiFnwszHzYan85geyV77gf6xYTBgQ3cHL3AXmY7EkNJtzEYrKmQN1THeZ9ftoLS5cKeogTEcwyu9BjkH",
  "key37": "35n8Q5x5s8mAGZcF7rHHAbstw2bqr9Jk4FV6wQhtgxbuaFLN65KMHFYpM6iZE4gaBPp77jGwN2WE1P2UrCJwB8rH",
  "key38": "32d4AQgGekA6TZkDLTU3enkjHwwBXK5D2Y85RhbYpUy82oGSAwaD33fVRNRXq9zko8ykuAiiBbNxqvwfDY4BpZJh",
  "key39": "2iB2N6TMkHEnx7RAQJf9nfKSCgdYHzaQp4Lw85BTtY55eqgrjyhBJQ8LkcQ8Cnqq9C6XfRLGau6oiNzBeWGdGg5N",
  "key40": "rvJsXR1nDYwH12knz6zuzbnXTnwGLjL7z35ybdQ2u9eMj27yRtMRsNiJEKWsyJpHUsTa6xpDoKAT9aJQFqBwZWx",
  "key41": "2qtvnEyoEA98bwmeKsg4aMX1aa2AgWTn9sbbthkK3QKD4XmHkH1QXfqPSJvyBW1Z9SUBr7oa27GasLV7ztza9p4L"
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
