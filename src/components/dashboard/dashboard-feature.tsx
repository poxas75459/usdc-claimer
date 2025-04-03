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
    "3ttv481eLzdyrBBuDk8LGSvsuPbD3pTnszDR3ZTb25z2NLwfztakJHDgv9C3WBGUaqM7BLv273jkRmEcJUBvL7py"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PtHEi2aHVyM7pfV5ZP7gRCtSQXbRdAYLWDBd4pzkxaGosFFPRj7QoS3ud4csk2mqQvDq21VKkXxcCW37zZrce4",
  "key1": "3d1AVHkTs7xQTSJARa2PX2fn1M7WdA54zyg1hMPkZRAuGynPhqaozSXEaWPNPf3Qg8WpnYdc6hBa6qQZySX9k4Vi",
  "key2": "3vhdKdf2ZgGAvWTG5zNnyCZhSbSLk3rGotL4Uift6b96viocxjs2KXnakuDTPAccLtvgmCx5fgDUniVcssS14G46",
  "key3": "2aoo1EATkRiKtWme9MqPQiES227Ee3pbzrAEsKz4zN62ioS5fmdAEyMLPRM12Hg8VVz1uQDVnaWUYqS9i12Pe6u5",
  "key4": "29kH6pZqT3zomRXFhGbQ2Su95TdUepBaKzEMHnNBtCoDEg7kZBEA7qVvvVwtLxD5CtUae1TL7ehAGXX31FpDkkxs",
  "key5": "26DiiRVToBzp6kdJs44UZ4ys7mqntpmCUK1pQkLpVCs7U5HtA5AVNWhdzKXNedfRmsJc6fTEBadg9gJNupncgnc7",
  "key6": "2aHZ5ksXem3aJQS8BSvfkK66nRbMwSoeyMYCYUX4TzdiyDeYv9Gd1Rxi6cYEqGSpqmHmZQJBBHBGBEGx4FTzTDfn",
  "key7": "xjSJtMW5FSUWLj94HoMNagsXro4MjXjxjXaxyobySxi5TLaj6mmX8QER8A6yb9khEuyGidQ3Y7feAKDqoMwCs3D",
  "key8": "PRRNJNPjAu3mH5pJ2hCtk1zpzj3PZpnXtr7ugQj2vbmay26RFxkbRQNfsYAxWPzhSBPWaVqdZHSDV3yQqW2Uviq",
  "key9": "2gNSD91jdUT5AjKZt7zP7RXkheHTBBSkoUqSJzvrK7o4rhvp4MMxyz7wVkMAino1BjTMQkqfmMmPPMeSzfJTbqn5",
  "key10": "4VygFx5yChRkErLqFL6UwoxtqtCDLxi3JpnZeCqZ3rxEF7DosJsxNZbx2R1Q1DL6YsZ2kMU5DEceQwarsNKyDzW6",
  "key11": "BXB5kXPYxXNzLQrMicesHm1eKLqDxxAwGdoztEan82R5re6D7Dg7QmPNPxjqde9hFSh2qKN9rPdYG7Fsj36LwFU",
  "key12": "5GSPmKq1pBoJpKm3F6zffPu9QkNLCjhPmRQiZioPyx7Deqa9BfC9oqHwuZ1xnrv4omhAFyn9AqTPJZHREK8CJZto",
  "key13": "562pesdPmNHCU8hXJrp6KcwQiNwk7xze8AYu8f6vuEsbRjnbcyBVBHurQfqNdi2eqEdpMovHVSZDdAWw9Ac4kxeX",
  "key14": "8Ue9GwJzeeCAXHtKNrjjM9P96Nm9hd9McVVABPQo5ARKhf3kihDMUg13jgN3VGqY1wrSBDz3KFcwN9ZPj6v7dUB",
  "key15": "5DRBma9LFgx7BgcPwHLcZcfucqF21HCvby7jshF3bhaGPCPcJPEmvwLRuiG2vgJMSfzZu59T7GvbQQw1pnSTw8JH",
  "key16": "5KU5oB42gcvYM9o1q6hPaB31asWk145A7i8ZvbcArZwEoSkCWoNJKtbsJqJ8w2YbKhWqwtMHd65kS5khWT78Pq4U",
  "key17": "iqcvXVnXTMVHsf4RUKTWN2H8q9ioLppe6W46r1JE8Efuffnp3sXSK6DCteGxiDAJtdFYAwNS97QsEpScVYG9eDq",
  "key18": "38vJuuXC2XmSzFAFqDRb3TwFraoHY7Nw1UnMDPTzU3mKDiuPHEcdaN8wyJFYsFLecybpGBb6WyZf8P3mqSVUA461",
  "key19": "3swWURB4Gc8T6iUAxiswcpvMN4DHiMquRd2KTNXqBhpWw72ASwd7i331yuvPyiYMBUcumK87M1U2KWX2YRjVEDnK",
  "key20": "5mbmTEKRRKHUqgDKfgox4FwG1Rvnn9x1auX7Juy1hbTV9ta84a4ak1pMAauWt3FhFsLcss9LDVMrywoVtBVxoQ8P",
  "key21": "3kRZk4ffjvYrN8JAjGzypauAgspTzavPA3X4ZYX4zMvNjnoMG7BUdcZEDpcZVrAbLMrvDZTh3KeNSuat6LDeHRJi",
  "key22": "3g1ioK7QQos7eZcj2NRG7GyygYubf1TXgb4rxQo4M1QW6VZ4EkyRZpStvJPSuoSi5SPuysXBuc8sRYzDtiueU1yW",
  "key23": "3zRoMyCGxirMTw9v36bcgEjApE4rWecz9AV3uZAXx3KKtuhdJvnimxFF6FBvMGAdtjJbBoodTdquzqBD44D7hvyB",
  "key24": "4hzKZmeLKH5RKnZE2sXWiJSp73GL3g2f3ELwMrTySiv4S1fBKi9gb53tEk66a1Bk17SPkTitRxfzHsbNJkMqWJgR",
  "key25": "3Tntj9JkmeUEWVfHqPMmdTDSk14Y5bkW8aqw2gGV8ZkMKZoaEsy5y8x3q6uESJGPrQ6vHpk4Zt9VKC9ATuyULeCV",
  "key26": "2gLHULyqkao9AXNGt8DAbYFuyENHQPiqhDCd5HsAtjtjUM5UaSvCxihKFUvd6RsYj8689xAetDubamJZCydmpH1Z",
  "key27": "2MybkXfLizYuouKScNP8uDyUZpNBFeRvqdZKcCPH8QVmZcrohfqhetfiTZVKcBb278chhNtBqjL7TJSmQAEQ1pxY",
  "key28": "3TwMdXNSuTTVckgmLMXUQzbWxJ2jG7xLU4J44mXbAFy5nxL9UiS8kGKFjREzZt6ifp1xQQuLJ1EgfRemcgUaqHku",
  "key29": "5EMypFLW4Vs69fhRjiAjdskP5Y5asR2bATsKbA3sEq856LH5sYR7JkTbssZwu1ppYdu4kGebKxJhuC3kH8cbKHsH",
  "key30": "C7jaev4GABR2226pwbcqrmPxAXu7F8FjcNaygnuALF6XrdK5NYikdQuc9n9roKHSBSZgisaKa7KXCQXaJJ3YTh2",
  "key31": "67hrNvFVKxi8N57W14qpTdhmD4QhUmgqWPYAyiVbk1YAjX7pANZgHsYjnaEuajCnqAo3dnNqEvJrsPBGZBb1etTr",
  "key32": "2v9sc7uUXgS8RF7S2Pc7QJtjGPynKccTeSNQ5Uoot4CTfM4VHX94BpzPbxUwcijcZZZWYFKfZzJ3Q8vmFf4efLGK",
  "key33": "47hEET7ZSyaWN3uaKJFRZrXFQWPvPqNrZpApa7PLQoKB6WkFwJjYaBQomC3VU3Z4vroPQK292XB2Mw3cjEpkfBmY",
  "key34": "674vzH68ARFgxGZugmj34kqTpQNkDwssb2uUd8hnUjzvrAEyxSBx4XdDRb68MhJUswx4KpH5KNRFnU2mtP2mNdj5"
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
