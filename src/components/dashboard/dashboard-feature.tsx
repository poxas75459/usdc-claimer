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
    "3xikb3M9sMV4V9v8DKnAUf4czdetA61GFyZ3tPt9UNPv1jZfZwDT3XcKFVMm8ce3G9j4STWuC2wCvqh38CMXUNZg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oNZxyszgdH1Km2ER7r4dqbzNNb7HLEYojZa3gpJNaQj9wMLuFcKL3VfD3ZuiwTHAgBRJ8oZ8JHM1dHWEXbb5beY",
  "key1": "3gS4E5yXV8afF9TK74MW2n22ACgyZPp13xivcpCy1NGbPufC9AZDfaYFARipT3wgqEKy28KWP18WZoA4YQQsQteM",
  "key2": "4CNtUQp6wtTe5jwn6y9bgmdZqX55d4Qm2tgqaaqpndu97kQANEUfYTRciuSbnQBFTSR7TWEkAYVtaTMVED1F7A3t",
  "key3": "Bk9jBLCiJwLUU6mpDN7C5F6Ko3GxMSwVd1DD7Ef7NMtLwKeYKZGLPJxUNtBi6qbJTcSCch7P6LFVD2MLbAsFNUy",
  "key4": "2Sj4XqMuTspsEjpDdf6ZwiUhjhmbPds8MjKGXNguNEMQSsdSSYzRxgWLZbHHJWRAYRtWDS7jmxhxyFMctYozGaKM",
  "key5": "j43cSw4GAqnZPbPvmVoQVPQw9UXLTokHkkX7VtqW1uHtaMTfUbChPZXgFNmScYR9rnT3ccxoJSbgK9Tcoj1TmYP",
  "key6": "4atgpHNL5e2zukeHSjf8Zx9U3ptj2gLhXYvD3XYdzo79AqqcbvdSw241izqKQXeW2L1gyEpu2keuZDFbJXpZpwac",
  "key7": "4Uj293JPsAzM95aoe52ELxnJvgmRGmz2qnqo2mARQfaUXDN874f6ipm5j5SycADkp7dQXCa7GNW3YrupyNtSDV8D",
  "key8": "miHqQNFWZBm3KusyKkC55P2afQASGg5NCmiPEcgEKPcPaqE6uA3FC9MP334EetFkFuKtoPXUzSPaMZofpm1jQo8",
  "key9": "33rDjrNf9WRtt22YNo2MBX6damQiFWmjvEYD5sK8RbPzwiuNRb2ZYqLYdguTmeXiJ5wr9Jw6KUu1xkpwrcdCJobF",
  "key10": "5kGZefanL3dLNDEgbJDbHfFHpWjWrdRdBT6DYMEagZ3Y86nRD7Suevwb6StV9RHjYgu8nck8p86bNbwnPfZRkbrd",
  "key11": "21kES9QWDjRtarsQDNARBpTKWnauyY79P5JuAJmCpxZPk7PGh9MUJtscpieshAGMkWPtXDcs5YQ5re1FpgVS4cPq",
  "key12": "24Bf7nCjPGDaC3vvryuQkYWig6YT2kfDHQ8iWTRHWWcZwWEC3erCiCU6c8stZc2HM8uXqotFFVCgGoh8d55eJ2EB",
  "key13": "63vFiJQFSUjCwAEzbjaCKnVfibQHkSyqXJvpdgeaWSa3XEcEcCDJMHQfFWHx8ZMYZK1TJsstQrgPEnDSLRaPXaRj",
  "key14": "EoyCVGP4FASAqPinMaFjp72ABQzi4DbezRSTQtMzmW2hk5pyTFtnANpn8RyYPMqcBWH6KBMLYSHqc5PHvzeAK3m",
  "key15": "3REWCzXaTEyJi777NCWNExAJLoTs8K74Gi37pwerizdhae3FqmAPZn1svrTY6FwuXyn62182ndxyqaFxStJTBU3a",
  "key16": "3urSusgMqmNSG32ohRSAoi5ANxHXDLG4xmhPDP2pVKCV9PxvenJf93bCePPuGgi4L24npYCS5xVRw6hV5eX23jog",
  "key17": "dWnMTTdPfQ3D2M5ZJCvi3ftJhKfJSu4Lgm3u8fL7bs7QFzLGjK6moxDujxE15QyxxL8FKhwF9xHuiFMy8Sj9GxM",
  "key18": "5yAgRht7hSdpTUQsb9L8m5JXty7wPnvCFQQhhgTruTqEdRt9fGA4o89rDfrKjmka12C8Wd4xM8EVmTuny8ctzDnu",
  "key19": "5WVwwk4jBZXvLohVicmP5XADhjybcdh8VXkw8KbdhPYj8uAW4SL8Z6n5MGN4CEj7uUTu5uLBt9nDSxUsfgyyCEWC",
  "key20": "5depCDMdt8YLpGsozBFvaWfuytrBMdBMtSzaFV1Z3UG4CpVdoLPiWYzrW8bHNnPP7W5G94XrsuVLG2nW8EJ41rBY",
  "key21": "4LoYKi54rv2Q7pAaB1Voc8eBKYUzLjY1WJRsin9gTiVVqesj7ovoxVWZnrorThhs4Kp92YN95zNNWaPzYW65qgUZ",
  "key22": "5oA4j7Fvnvx9qSSxk9jLqa8NuHg9mdA7fkBNPfcSLfAvCCZhHymTrmvvkHXevZYpWfDxg2uw8z6wtYzPf4sEa4f8",
  "key23": "64VaoNZwy9bfCWEEBpPy3HWXKBww56jnQeP9ZZ2QVxHDMZnQfzoSjQZoNJ8yxs17Se1ehCmj9FfDx1k3YcqydN7F",
  "key24": "2hdLdfFS1ac46rfyUJs57C1VQkB7DNP5ud7oJwkbbxvSeP3eLHk5nZc6mf4JxTaCAJTMTuhe4xTm5cWKQEN8TgT9",
  "key25": "46Sc58UDnLm9SbgswP2ycyjtaLZMknq8KpoAEhgiksQnVjckLQYJY9mBrJxGKNYkoJGwWqdgkedoCECvXhrfBKLj",
  "key26": "hiLLjrY2wDfzit5bAnBQP3KYgGetyakhdXh1S41YQTfe52rxvnitmcrZ3x5minZbRJsAJTtqEM7Sfdz13JuihMF",
  "key27": "3VhZyYw9FsXQN9jLgXdrykJCYoAthfu1yeuoCuwptQaNwDhK2NweQKQWgskEQEcNzYnxesHDiKfz6cNeVut5YP3Z",
  "key28": "2bFExoTxaVoysg4yzBzMHkRtXXj1vR1AHL69VeMAGjyHMooN5kRX9Rr52aRK8YBHCPrAuMxSd2ECAq2nQ8rWUCt9",
  "key29": "5gg3aqAVNDXLY3GrujH1SjoNRxxhXTSY3eTghhubpSMAoKFSrGZfuzB8DkZrpLWfxvm3yPeB9CoSXxnrwTuPT6bC",
  "key30": "5ZvyMZCkBjuzLXpF48f95niMD33bsNzv4uTVEXuBGS66zcD1BkKmyeNzLJTbPEYN8gTUq6gu31RmCR7u6qQz7hxN",
  "key31": "4pncxweQUZiKyX7hnBT6HYoX84H69C757hWN3pMZXckXvtKD4o3mPgj1QyfuEoTVYT8g87EffhjbvTFzLSnNUFF7",
  "key32": "5U1G5R81WXycN9P8TmH5HT6ZNi6cirfJLLEvmCQ2Q9LhzBNLMXPmnvkMNbNfVjGawc4hcBzLSCnrCsTFbEBx4tXb",
  "key33": "c5bk1QpBxYehisG8jzgTKTzFSJWQSzfpoVv2jybJiZa9eX3L9on8MZ4W9943xWGaihBxc1ZtFsQ1DTkhks8B4F8",
  "key34": "3WELwEskP5AVByBYTqgWGq9cyHyTkhHRqyCo3cdZ9uWgNjsoENKTQgA3ruYgXcVpeosVCEmbCDU9LqFZzGkEJKMa",
  "key35": "4pBHKTLnT2cPTgicNfQ1sycTBUALmHTP87UvUDK2seqLGjWvoGdkcHo9PLEKYgoXEYW7mwPugruFqj1tydwxS4Wq",
  "key36": "2ouuF6GYRHH22Nd2YKpZ4imckwn9aoTWrPknTwGgDnJwiHTVXGviBoHqBJh56HAQEuTAfYjUQvZuhKB8Sw7uv64y",
  "key37": "3AvRE4W9jMd5tm16dTHfL17b7rdi27hdFtv8fScFtiM78RueSLqJNuyLk663RqDQfvq4KMR5DHnx6NTaCZy96Qn3",
  "key38": "5KKnLEfdNgyzvrSyH8Z6UExCKgrBccg4VjU68RCbSwGW4SVxbmPRU1QizZ7ttjN7wysds9QgK9mBLfQnQxHoVJkP",
  "key39": "4qcSdv6DjXXQvGP6xG6KmgTyzxoMsjprZgSzecMNaMAmMEwxXUqPUnzLPu6eEqGHS3QTZBG6VR59A3XvPKmWe46L",
  "key40": "ej9TWPTaAPkmWaH1QHuFeqjRKoNQC5U53dN6n59DMw1iA8cedgtT2Deuwest7XM8rPQ4HxGMxPbbL2kYKoLkmqL",
  "key41": "g75qtQN2TX8JEeghuuE5cswDgX69fNN3ba4EJycNR1RT5zRu4JavP381Y3KqAjDWVFP9zJA1G5fvc52Q7EgcPZR",
  "key42": "2AWnqjrtU5HUsaqft9KaMo9jkSDS6o7vCTX6ua52dzmWj3bDjGkQQRb2PrBfUkPb7Cqs1g18FRBTeYfUcohnaEzq",
  "key43": "5PyrTcBDRN4yxSSUjr435JGU5yoH1M39RxrX2CTqiqgAaScFD7kguQtWznb5dSZEFGwMNjTYdNkV4GXV4UGXjVMT",
  "key44": "4V32iaeb8W4NzJsL9PDgde2sSSVYSCoxtGapzyLLrKYAxUXURUr9j6msNNhxqiXE56aW8eewDiKxptZCgKVw2iEx",
  "key45": "3oA5eGtqYa224PnV23d7roG4GJPmdTT6xuqabYqDTnwqavF8pGMjWUpmif7R9bqRofH2xamMEq2aCMHKQBBweLDY",
  "key46": "3T1AnrZQCtQQVSUGrC9V1BSQRDMrGoUYgw92pkvbPqdzXe547aydHKz2eMFHAp9FQjQF5bGruu2HWkWwPDADhMQx"
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
