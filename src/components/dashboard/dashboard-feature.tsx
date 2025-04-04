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
    "2LS4E5n38DD61kAbLoKs2WejTZ5CmNJDm7CEyfmhh4Xzdt66qJVKQ3vcAa63TCAfJ3bXkbB9fG2vGNSM3kftJQ1H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cWD5FsbmcA7SAjMb4cDSxAhrnuUgFM2XLqA8S9XQa476axRt1Zh3x4bBnob1tCqceBvHpDqj1KyKCAniiTbzCtp",
  "key1": "5dB94qdpMEW8Ud4FqA6RdVKEbgrDdLe4cv8HtiYUuBPdWQxLoJcJVruZG3CZBsM7nWGMavDL4GEKenisbWztdHiK",
  "key2": "27CUCWjZ3F8nXdUtiRABe1meshup53KoawZaoPST9kSgsbqYRdGq8Vc52PSEGuJSC5k9xbbjYdizhsahVFJEEDvq",
  "key3": "4dUpDfeu92jZkkJpHvxVVDUD3wwrXCTk4qjoLQmLm1zMqnxHdkSppVjx3hSCD8CnGbuGTWP24zWtrvHDZ6y6Kn6P",
  "key4": "eVBzkwxwxBmJXMNK1QPdrU7u4tTSuGv5nkrWRMtumAE5ekqacrtZVCPGPLtsejo9KDDANfn6WrAJqqHYgXsHY4f",
  "key5": "55NmJubFrifxojN7CXJP7vtCAcxCo73Mp9RkhzMCEnv19PaLQX4udRoS2JLguJF8TEtXnuoEnfmphULVXWcEWefa",
  "key6": "5P6djRqUpu4p6C4p5rbq6g4BRpwNXteSsqcyADyJEzbfgaMgtjeXP5nrH6oSfqXiZhg8ANso9446h1XZMx7sEGAY",
  "key7": "4bXxP8buPetvdoGJNyCqdVCMqW3oFR1AGAtBgxWuESgukGMFsMN4h3VSHcy7wKnp8TAoPLhkkoFTxd9rponyyDQL",
  "key8": "4hdbcPG15NWpeCo44d1KbHJ8asivVn5psXr9uYzepKQjEeBTXQwe4p34dfAd5ERc7cR1rGoiU95zpAY77sJZiFWm",
  "key9": "a39hge9ba6Qh5sLPgtsoTZYNmyhQ5je8DkSVH31c4etPxupd5LGvxtT342V1m57MNHKA7VuHjAr6ujcAvseZaK1",
  "key10": "3sy7GJBStEbjk8BE8VgeGidimigs1kS6gvahp3ECKQ1pqNHRjm7SjKuRu8bwVy8hWCSc9EsQusuPtrbjtDKLxvpi",
  "key11": "dWP52w12Qc9dcHWzqcbuoQCkejQKwwJjtmSZicpdvabuZE8amg9sw7UaRUSSjUcd5rNiyeu81gtL67HpXTjDpnF",
  "key12": "3369VoqmyCDncmno1s5BtNmNyjAdJJPfTxYZ7zpHM8w2w8giFMDMzBWtNyp75TaUshaUB4WSSaPsDVDBvNMWGXeZ",
  "key13": "3ruTzpABQWQF6SG3kqa29o88svv3D1hGZeykiuwf7QvHRABp7Yc5T9w1qM4XR9Zvrx4xJ4QRaB22xLC8v186UdZB",
  "key14": "5q3FwNna7qmxzGyshpMHNrBSRM2Q1QRigtHuKDAiSZ3cdjyTpf6MXJk8s33k9vaPmVBzUpJjd5acjVGLj5ZNPTbe",
  "key15": "eQHyJDGEvRP9QGWPxQp88QrFGwDMPH96RLhgujxbCa7REc9vAhHHnCxaRGeVMCasB5977Gz9mwxkcxUTNzzVwnt",
  "key16": "RwwpGKEQjkcnbggnKsVdMqVRK8reSfMmPek7q9MaUinDnjnMipHe4i9JBAqD3eKb8rGoq5kABmwtCWV9wkxbW7J",
  "key17": "55PKyEhHxQmWcAioAwKB28hUuMnGw1XTq4F35j1zPmAKD1uBUhLWPWWv8jXMaUtsCxrMbHtDK4YRe5Umdr9uNpbP",
  "key18": "23opPJUrXMHmrt4oiMR8tCsKSh68zFs15Qo2hHiYCVtvRx9kRuHLmh27NPJH4bWcFiJYnJ1A6SCVMVG8Cm32jpyn",
  "key19": "uxK973XJuifSdkFu4RQvsfDpNCFj2ReFR3ZxzbnGvjvsGLwEEqxQxWFuD2mGvX65JqjGTFEa1uKbHhGGZpH4feQ",
  "key20": "5sDRyUHWixDsJaNXwjxU7LduePQLtFNypMqWcQt2P7WiLuyrXjoAaiTmivqayWo2S4axw44jwHe6jxQ4vCh5seFS",
  "key21": "fW2VMC2JQD1WSD1hVw5P8oUnQsTxiWKqre1rosvTUMdaxGbzfZjrnrndAP8f6V1JyaavZESyDK8FenUS5wrxxpA",
  "key22": "1Fv5jXk4ViudG3crbjDzKWuc6G9owDivkLNXkJxuE45hVvKkuvT1dNU7mjNNh7NE1WX8BX1DL4XPnDzXfgbE4mw",
  "key23": "3WJWKsEWYnf9Th62MdN7g8v3DZH9PDPqAV33mq6Emcv4E5wzp2gXYstdhop47DbSj7J7QBdmJXLT4hXF9MV35SR4",
  "key24": "2zuE2Yjmr78xyGsqT6ZBxcAJa7Q59fUoYxK97fLrQYKA5ib3CCMEjL6qSHAzabwLSzz3V9qrFdoFy2eTkqmQmjwn",
  "key25": "3hit645jpRtGPfSwjUjKuMHRC3BpALy3F88t7sBJDWwouqwEjoMsDKVT54fDeA5zzu2Hk6dmgB8AZMQL9xaS4s6S",
  "key26": "4YuHoUf17hArb7eqFQLN9tYjBFw2NUmahuetP58KKAvyqGVPM3yykFLvQv8r5hN8JJ8tzKHvrC58ymqhxhfjb4h9",
  "key27": "2buUKk9gZBxstLxRXKHTtf1jFV4ZNTBJ2u7rpEh7MwUzpBEHoBJ5e9Vxp6B14zFC4r2AqJexQZVM8y4iF92hVRZ5",
  "key28": "3ykXvwxmQfqWgNRtG9vRtuotC4ajRdXG6C2W6hxTV9pfRKSyW1hRfg4DsDcTQ2YEsFPtgAKvNtjsQs3TW3DU8vwM",
  "key29": "43fccxPkdbSaGgLQ51PykLjg3Egnrdi5KmQAuisj4BD58gznjqs5wCSZJ6Hgw6yCxP5r8LQoiQ3nQo1wjgHgx3MK",
  "key30": "2RmA9kURhQV1RTR9UEDigpTV7CW4XHttJS3UrHr51b4SAKbq8V4anjtZM36v6JaZ2fa1J9NWQ5Mnty5FCTQqsLTG",
  "key31": "2rTmxWRGNw8yTNpbMxqNSNh5Hwqtk29TELGKk9YkSi8GVqYM1kUMp4n7tKPtduFD4KpdWKySU9a6CA55r3NdGp88",
  "key32": "9zrNhFUuHh6G537njbNttM5Lh2ajqvvjChrdvkTGGm2B9wZbsjYQ4MSGQkBQWY4wkPfxmihSKW4tRX5TdAsLuQ7",
  "key33": "5sbNqmdiUPty65ZFfscLNN7MUfvojdKJqxqdv5PX6aoP1pJZ4ZL1YtDyg8gtdW9QV7F1U7cyWDyYMDPfsRYnvnzT",
  "key34": "66w32KcvqiSNirEimvjg8j7WHmZAsCCcVpYcA36owDiQE4pEd8jFGsdB9c2ywMdVJXk5RggUT95jZyH5fUKQXEA1",
  "key35": "3ohn8s7hBZK2tN6282BpA1x8a6btGaarhPkNPe3defzJ5nbS3docN2d4Fee7qQdFAYTCCwQrLRG58WpiaEQDqpWy",
  "key36": "2ro6ZSesVun4HEBc39DmKk1GVxsU4e8hd2U8fZYxaUUwE3Xo9uP1HsWk9YKwRxkSJnKXQtmiUeB4BcJuD4mY2L8w",
  "key37": "5Yzd1FChZecx4N56J3Tmfh4HqSdzspRnvp3pv3bhGbeBVEq2coHTzp4eDb1NFBgdGaagXDbQq4yGneeAKv5rdneq",
  "key38": "oAFECRUVs6UgYxPtfudJCvn5p1LiZRazQX4pCaAip2cRnJ9nkSuXkXmR6wUVrVSykEnySKtPRfUwEVqccuogrwH",
  "key39": "2gDraVaWM8JoKbFyUoZoYPspcWejgu22HqgXeavHwQaDXJWbRiKbvG1R2XZgMBJXYX61QjTgUuW7MGaRf9HGDFbq",
  "key40": "56Z5eZzr1ridSB5yzTWHk18G5a4Q2FDhXzFuN9eSkiLEQwyrCQ3SaYHCnZeTiZfQJxwXd6Kvs4CJQYhiSeByDq4E",
  "key41": "4uifVQeTBgwsyUpW1WiPhTq5aptSmTj5evUpZEcuUh5kiNakFDNLqm6Qnm18rTXRZQm7UokPcjhFJ9vNyCtEvgQE",
  "key42": "4H8FzaJ4tsQ8uZGdkF3HkbzM24VHBwo7F45NW7ZWZ9P1we24a4ChcXWBTjcNekV8JFnrjihKtTNfSHobiNE8LNJj",
  "key43": "4JLANzSvYZSRairkC5NFVRTSR5Wn3oGaZHfeUDdXvjSmPX6E9ADEEMEK1pEidz5cvKuM3FP9AmxWU7RwtMQrRNfB",
  "key44": "3kfSoybki4LE9KmFx5i5bHmYMd8CFUCcXUUjrNRH6zZ7Gfq8qAEQAWW2xUXWUnVmppVdFRZ1zfa6A8fSYExTFQBr"
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
