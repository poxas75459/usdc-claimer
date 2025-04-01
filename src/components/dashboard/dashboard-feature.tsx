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
    "5dwLimLXfLh1QUhzG5bSR4vW9uz3GVLt9V6Zmr8fZbxGHjtZP1V1XjXJxi5Tq82eZnVBpfa8sTHyKLfAfoddvSNc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hbL52DbomrFVTpeYZCwjyMdGqAEGM7ZRb9VFcP3CvPNoGQ1qwdDZQpqRKa5qXB24jBVrYmW8xdJmFYdZ5iEAKr",
  "key1": "4dTZnQoYr6dQXD4EKCDp6A6UrVpvXJPPjvtVgiBTvBxUFKNG1SKULmrUDY4E4HnNgEqmcSLDxQ1joVNij18nVrFF",
  "key2": "2cVjdzSDts5yUezUPNA5s5h6weEP77YVckUu34C2RcWBqW8sAPCsroygbYFoRvpCbS3Sfwy7q7sid4dpRuosByge",
  "key3": "36xJAjGrc7LNdQT2ozTChvmeXw6teLiMd5u9dM6kTsEophk4Wo3xauouDHU2ppKqFJQkvVTfsNiWgVdGCekewKb5",
  "key4": "5cdhZGHNUEMb6kK3bg5yKbSzZVx3XdT9BaSysAKxxGzMdVFjtBZRb2Nt1c7WMphMRtYoHvLiDuJNSZuJrAbQsbQY",
  "key5": "3X1pbCtJ1eFvDffQGQSsmodhpMDqwuB45rpJzQYcKejNaGPQRDirpvLbZ1XvDAs3s4zRwUdbX1NNZQ5wa7TgVXXC",
  "key6": "4YcyyAgRSUSGvWtSpZCUb7mbiY8TkbhbYCvJdW13ZzdnpEYUkNWZm8q78BJvCQPVAb1L4RnLQfKhg3qEpDmensze",
  "key7": "5QbRMCAoXTMHvvgoxVJf1BS5zUsAb9Aden1MQ9DzjAM6aWKjG6XugARFQPkJaWwCrQ1Wc7HbrgmYYeMLtheeDj9",
  "key8": "5rg3LEAycNytVJSShnWjukUpYebwNJCWGqiY13gsf9hMYgjih5A7LzkGCswGyE9szzJMQ1jvwzTKtr7kTLhth2xG",
  "key9": "5Hh3nuhWw9uoWmqYmUPEDJPcyLUZi5MFe1874XaY2XhXt6pQoyAaAkmctokgkpmA2aFBxcU35MafxR4GUqymSWTC",
  "key10": "61VvcupPj5z1HPsYKxZfezT89pxHQjQKT8ezw5iczrEYupYhw31YNjuGRfrkjpmEeejf3dFUjSYD7X7wXSyGBfAy",
  "key11": "2QvgaHwSw6Ct2pt3SfEvMDL2dSxxHu6Cd1ssSomfvoEvgBJLNLmSw4RHnYHPGWGvvkChWhgB5oxZ6ggHS6sRg5du",
  "key12": "5jTvjtqjec3L2KcWj11JywQCJDsQuCeWcojjDv3zoo8WYNFXsgazkQY4PoHVMCEenghE1Ea2oxwgtYzCwsVBVvSZ",
  "key13": "3M6AzVLNz8L6JYfJF6tmMHcQtKv4Pc2yaUNKDXeE18Wku6aDn5FRgJFZJTqwqKABtNher6fPzf9R58XqPVT3SYH7",
  "key14": "2FE4UWxiaXyUrGmeUUmDe87qfQMg4bPRVFbfrDPxfXiZeNL8WU2bzpHDisKqzDPG2N69vXEQBeoLU9i9XZYk7Mm",
  "key15": "46CmNEWpZFxUUkftWvc2rFU18B9q2BKe87BX1FnGcENCV5st2jUwFoXpYLk7jYno41rnf1TmzKKnxo1na7hTXDNB",
  "key16": "8x8mqDBgBZ13FCF7Q5UmPKrnNRvsFQLmf5aZsV4CoWw9aMG2jpFXwfZ59kzuLY5nbsRqH1MapZnjnDPVVHqXzBb",
  "key17": "3yXLW77UvzSG3NPrUZe99ndmNE9BK8dHkyGarn3Arf4L4X58hsUgmbJ7EU6b2du2r6XLAxfnR7yiE2xaX11jSMDS",
  "key18": "3t4Rj4uNcgWYU2nDXqCL1m43uQ78ugGikFEAUbRm6RodG9JV1PKjHAHMdwULMGziaMgo6Xp2JqcFifyFUjbRFMPY",
  "key19": "2VYsH6PEKrpWg9qgvKy7zB74jmxpk2c5W4grbEhG6nJaRg6Eohv7ahnsF4HDD6dHSN9NY7HhVeNURftiJDZH22fP",
  "key20": "4cNErK8htQu59fRZbFYFNdzZokxeQ61u1nR2AiSRkzMLY7ML5CywkhieLGJbvdqFK9MqgjCaQmMSftCv8XLyszjE",
  "key21": "3JaVqfacx9pajb9P5VZqJHA4qQVAgrxF89huHCCpYA38JjsSKSn7hDZg3WTRxjEcJ52v7U4crXo9rR9oTnE91ySS",
  "key22": "35j4znEKQaGviEVz9R1yEr5s8iFTkfM5J8Q7fFeRMsgZJtCrXFjP48qTmxSA6L8PRg8YetdAMPbDjbCAHDhqvLr5",
  "key23": "3btxjG44DHtQWxuXyEsKZWMkRohKB1jGQvWG6ZytZZ1YjaQrNDLHz6ZRYMi7o6YdtXUSbLhXhwScoqn7gFgpminx",
  "key24": "3WrZi5xSCk7c6fRwzTWNAGVhhZuF9J5WxFjnzpQ7x7bq6CTtYz32jaUMYD69iK23Zwe1AsW4pmW7wn82jPxKi8ca",
  "key25": "34Q1g6kjTEva11FmpC9X3L44hCkJCmudbLt2Pimg3bmQec1MP36kzwbKVS31y2AVQA6ycc1DDck5FZf9uCj9oWP2",
  "key26": "3VYdgyf7zftGNb1CCRFBacQWVU5nNG4SSxmnMsYYqeAKxw3yzKghxqAyAhNjU8DXQHKLicznP5M4tAmEQQVqoRtR",
  "key27": "5X5CVMs6cEXEQcJzWBXsM17jE8yDFtV5h5FJq5tWbfysyH8GGVzSSJ12DEUwAdexnZPmYbjbNKkhXh1tdKibMUVs",
  "key28": "2UwEViXYzw9d5NXYsDqrHkaJZqmamJV8g65pAVFZRGKoX3AzEEexRQqfExhxSxsAHdDa9ENcq2GxAkQ9KaSpppDy",
  "key29": "8JkSqP6dhxTVcdqhcYMm33M2pXneChiRceC9mp8qQUrFWemqqVqHSMcXNM2ympfosMAmF9JPyKwpRAjJ1cNN92Z",
  "key30": "3MQqwUyRc2iXuL8gEnLdShCwr6w6ajuay72tdYBLkup1sDwdPYby9sfuXRVehm7JuRiqK15cRHyE9X5dvXwjV7RE",
  "key31": "4cPkvecwP7LsEXRSQWjGqMC8YV9tLJtzK5g3sHqbfWitSpuKHCyJDbWekNYmyCPUnwvTF2hWwpgXFDpNq25xJwFE",
  "key32": "26tCSAFtcvSRULJtpgZDFAnbJTHuuscK6N5vAqPhgfALmCzauQXz5apQ7xmBQTQs8bBfCwvCAx21xyhTud1XsVan",
  "key33": "3hscMM8m2G3xwCyibbs28P5fSSVVeGa87bi1i2FM8qsYfjcAmoqtBHGcdP1oxsUawUdjZE71NZ3WQyAUgLRNCWSe",
  "key34": "cD38qSSkRNCPNeKfSBHAMeR5hukLGRDsrT8fm2y2Jhh9MYuXuMtJigRCvuxawtyG2ziwbMZcTdZVrQ2VP4TPhfP",
  "key35": "5QpdtnMYbTCEi29bJmyUYgFwoGwEttCiS9ciogsYBgZrV364wvvnewL5VXF5zjpyGeVJDAgtuMKSVyjgLtwT33dQ",
  "key36": "4ZWYbkoJ9Hb3xAWK73zzTwckw5jJAQT75L8qfqV8TVzAKJN2JAEGsLaGr4XHbh3XyWZfKWEhUiK4esQRusvKdZyg",
  "key37": "5vE9DWuPLQKxiYWzQ27uFgbXp9fQw1fw5Gf9yLqMZcGCXhjirUAxerpNN9V4wfdN1mvodFxpzWQ7beyVYNkFNRXv",
  "key38": "4acQ7aZ74WUbcLketMYkW1byf8gRwRh3Gyw9d1BvWAcEPw5xS4v16RfHtNQkcs9rch4GqFy2EYYtGPfuyRHGfKY7"
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
