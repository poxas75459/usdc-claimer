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
    "24TnX6mMt9SEjbkXXRfqrnHbFDZXWR8CR2f7bdJeLJCxr1mLPAYgfcj6rMjj6SBkytZ4KYoKHWu3yHYiuhUySFwS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WBziaHZxjcmxdFQFXKXvGRDBfBfbxav2uB63RMgNyqVGsfmn1qwA2JGWnqCksJ1m46ZM7DMcFwrqQoq9aN7487K",
  "key1": "abTx4fbYEEP5YA6Ub3jNTNSzZzdQxsL8w4yq38QSkgw7QPkD73RjF6afa8irMjBpsDun1K1hn5bCH67UtGj3CPi",
  "key2": "4QtD9MV5GKAkboXrzE6Np118ycz6qKuv6hudux6ni85e7ggwrepm1zdPLwJ17VTenc32amnhvvjVYX25gQXrbkaz",
  "key3": "F3h2BWbskF4yHZ5FE9ZHmRgTE1EPT9uk86zedxc32k6FDHwtWedEjj21MzP3JKK1f8xLCrhnVbrhWtrw3yik36Q",
  "key4": "53jiNKKoGE4ZzaL9CzfZB9stDbboKr6KdTHdDDfvMtwfqRhKzEufbEJYCTRyvGaMxNiNXbPNcsMYnV77WNo7n89X",
  "key5": "5oY58okYfaN4cHk4dphq6LUKHQWsuaxmvbWtzFrj7p6jnwHG5gvxwqMxFbFK7TLRm3jyNV9d91nwKovmtcB7x5gb",
  "key6": "2FXUT25zqhcVU6XCQ3F55GdPozqwpfceC8WRBD1KP8ZuoehSHU75DB1h8KKjmmPvCZjdk23NUM1N71H9imocSdJi",
  "key7": "38WuFbntLFXM1iMMsDRS612yxei7DYgwUvyYDw9rP93x59gwvMt2TFZD1Uj3Dy92z5uVVHgg66XrUyrrvfkQDjpx",
  "key8": "2uUA8zTGKcxqSWCguMeB6BgdSzoiyQyfkyCJtWBrbQAaYcM85dsAgH36GHKJfe3pAW9QnNhX8SiKwnyLGG1fEi3L",
  "key9": "Q6imdaXkkcjRUNcPRtNz3RjgrrYvPYXCQjh6im1ATkuuZncjSqZrnUMjMB9ifwwZUBLDwYssUqz3a88u2tK9jf5",
  "key10": "5U1gEWr6UK3S9eEAGvgCYCHjiRbDXpQWpVbxS8jCy8HXKadbwY3prdp6n8zimHnYdL52vNds3fmvxRp1UVBdezNY",
  "key11": "2hgXzWvT6qNAtiBxbAWf5621ayvtKGjqBXbpUet4QTe72jg5vQNwm1fM1krVEfxtw3pwWfnPAKSEZJJG36j7Ev8Q",
  "key12": "8JcBfkhQ7KgTzobsd2NU5mj8BtvrftYkEvJQxsHrrsgCSoA44eMv2ru33G2ZAawYHYiXVM2XQDQAF8WtV7rZ6qj",
  "key13": "4XnmWFJA2RoR75JPXQQRNThHH6fGUyc9iyZXHsmdEpkqaeAWeCKfVVFZNRMaJibNhcvPP1gW2jhNCUBUgPnneou7",
  "key14": "2PbvwVuE6sxLnZct4vkpPMnJ6anJGrEstv6U66u9Gt8SDqmEFVCm3yi5ZVQEsgHaTejjRHYp59uimMLVDg8XVTTF",
  "key15": "5t2m7zDXFW2i1oKztrtVsjJwj3VRP4yvemfVsGWQ2ZPqyR4egNS1KgHQ4NyKhcu7V3uixiBdg68NKJApYo3SZm8F",
  "key16": "5KoY3mZUhU4Q24VCPfvxF8dibX6qACbwicP7c6EyrApQMMp53qguwZM9QKDKApg1mdLyvUaa65iTCL95ouoyUcpZ",
  "key17": "25fVDwp18naBwMQL5yL8CzJT1zcs6Q8jfayb9LUQMNHUuAH8XwcRSgBXBJNGGG4vZCroe98dkpfiifkLVeq6mD1g",
  "key18": "4pby3Y3YN5TmUjUJpanPCsdfcwb8cPc4kq2KMQcdj1cWgpouR7spRt7VQkyaswqranCic67aJKNWrH1N61GJL4fk",
  "key19": "2g3NVyZZgWr2xVm3k3Y8CJLJBzYQCQukJCYvYPCggLc7TWLw3fAhvMxuhqQeLqNj9xDvpHt8Yb9uu8hsv7ibzWAC",
  "key20": "RYAMQSY5hwfNyu4DQBQvLYrKkHBPxFAQXY87h4BWX5uVSL9dSWpSchTLtvS2WLhrU2nfY7wP2TYQ4pmgw6CYbfB",
  "key21": "46PAkYjxfW9FF9bHjagmehgUpnAcP5FtRhEXmWGZQdi6JXLfu2ppvhpfcKXywq9G4RhgKgCPZ46284RRmVjA562d",
  "key22": "3SUzgUzAXDo1caP5yfRzPmPCZcdPv26iDczMQGjCWrB8tEQHKNYu5RwcQVmvu7yeMGCJZqVSWWdzARN6weEkVLTr",
  "key23": "uwj6t7rNtgMZpCCocQyHUWwjDwiFBVyA1H2Z9r13v3SwyWcGvFL11breeBXQx9Cd4efU3mE3aNcvUCT8TCHJpLJ",
  "key24": "2vAhCzaYvUMZ8RVWJMvcvT45FRccvx9KFL2w87xLnXjnmDYKztLLZE5UZ3mrr7LsYEWQ3Gnp9yntVSPg5D4JZ7GW",
  "key25": "4VGKNMtemotsySvdNn97oR5wLj1e1EEiJD4FWMg1zNM92YZMBPEov6yvEJDcde4fE5UyfYKPZuQRUx13S61iU4q3",
  "key26": "CgDYdFo53kGhbmmN9xu87bvDH4dhqBTFJv7cjJkWUTxLF2a42HGmGYwE6SpMwkBET2cfbtgWrsdJWiHZUpV93PE",
  "key27": "3pj8WgTdfQn6ZPqumthYAv2iCsccrpD7Fv22Vk4Y7V3MAvx8uTMK99R3dfuveg1jnw7wGbNquAvFBc8kfc3nfARi",
  "key28": "4e7x9WuJ3rumJxKJeTk1cU7tjDZczAbmezW6Ci2X22v7jWtEsbg2nyRsgch4DUoZZkrUrVH2CWcVPN6GezP9BhJg",
  "key29": "49MXsc3h6y6en7cRtVA9Gkvw4jGvEhMpMeBqDXeZgyYvWi3xqmL6XREUSHEx831ksuoSWwbmKAiMp6mKJSfQ5tYa",
  "key30": "4zz4y9cK8HqB3q9GrxWhrKEMff4688Nv4MFtvJkMiUCfL2SNGnsFmTScGZx6eJ1NkmXfK9X9jb8LnjshdL57GKDb",
  "key31": "54kn7ZHYgmsS6HPR1oHFcmsAno1okHtwyWB5dBtUDhFxxMT7r6CWhzoXqznn8veyvpbNDBGZ849ebUkiEjAJiAbz",
  "key32": "2nG64oTXToN9y6btYqBDZNnCdEaLFNQVxg7teozYmXTDaLJGbjSd4TC3h3xAYpXgERdFH3NYcbkaAGqRTnwSGheP",
  "key33": "4zg4Q9dJMYkMKHXhPhL91G9FhX9JYJX3Vo7FL3AAdvCg8CsnEtDL6AWRxGocXTZDLrw8S7EXZd9ZiSadGkrHuDQN",
  "key34": "5QZDYSfY5bjKQvBNbfs8PjXf41LBpbdndcCMWbq8XrztzwhGsviJ1wPi6772CxMBKXihm2VqNRhQ4Hh1NLkPy3Bo",
  "key35": "5Tq8roubHfHccYawm7YkEVXtVidbPrzLMqPRDGUKgncnmtGyy9uJndqKB5vHvSwhi796YXEZTiXmWtaY4QchQT2T",
  "key36": "3zLDSXXwaGkpnMy9C7iRXmLkLsmwmLAdM2yB2CpLn5YR7pthcM947k6NzyWvc94u52CGJFL6oKNnrE6eZt6fP4Z9",
  "key37": "ZMZ3Jw444A2esXaiWhcpQ6S3pQ42MZzU1q7UDajciaaMN8X7KwkNjXfKwHMCE5BKxgEfhMkPzbG9QjmJaBbRUaW",
  "key38": "5k5zuRZcZHSGgzd2M7JBAcCnuu1Trn6b6jdN9GAcAnkxNCsWyD7XvUeKPz87sHX9NxX5iRH4uAcik8TkSt3mkG64",
  "key39": "5uvB8bZa9ZG8yeU2AoCPTdw9zgJhneVZFmNmp1aRJ4JmSU6QTfhmTwSmK7dEy5o7UjS59YtKKHfzLonapQTbbhkF",
  "key40": "2qMXFStPVSJPsbmUdZoycZLw7orbZXQpJM6cPQkqhVVYeMczBWxm2hagqoHKXehu3RpLMePDwnqEqKS9TkNHRbu5",
  "key41": "53EssVg5L2sLM3JePFa8EVw6EzFyDC5TBu5kEQb7oFrJdYZF2FcBjSWHog1f3GiHs6QLBX9TiQdNXQiqvXaUKhrA",
  "key42": "5dZNrcWsfXVAZ9HbG4cQbx8fbwwDXehpU3hcLeSLtKmwDtoFAtXw7P3e9vdD3WUiLKCoYC9xTJBDFwioCUspQ1Ek",
  "key43": "5UV8HtWMqgTYDErqfzvuku8Yg5D5PxTsNJNEL3vte9dMn5d9fPD19taW7mfmaDJY5uT7extPgT8eeVtrJ39zo38U"
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
