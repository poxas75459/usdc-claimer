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
    "4QzPfdPCmPbmDRa18oLYZKEsUi6myTrrNuJpviLyAEKGqXXnyXnJo8VNY4NmjA21SWSXygBDRgg6zMgxa5GkcopP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XtzQWDADPM5atxYRgmxq2zMnnGN3QGgvzkCeGgTNvsMjxDDogPukLCmoimxmJKjRSSXWyk2QaugCbn6pNG58qEq",
  "key1": "5cc1k7tA1AwQeKVdcMh4zDZYHtpuZKmYdtQCyZwFsHP4aSEVhZyvbcy8cMg2K2rtCH1zuukkxYNVrz1UUmUMAroV",
  "key2": "23gmjwEZTs6ffvXECJPgrhWy5RPbjdkKcDTPX82DAVYbEFd5ZA1FjYHQ5KVeZSafhzUPkpTVNcsL4aridi71heDq",
  "key3": "PLyh3rnhB8CKXMg9etQ2XN7MPFUTZxoUv3XkHZJueuHC3g1tMGG4B8FUy5jejmaSPxYZHxvJagMzxAtQzcT8Gy4",
  "key4": "2G5jXhjrPcrgx6a25ziBXasES1JVTqmHjmNW91C3cZJFCJYJU9QvFCPJPEWZ7E4EheXZ7oGxT5GHgKjf8PEkMXLi",
  "key5": "yynCUgKD4aKa7FtGbMY2wLmcyquXBNycaPxTkEnEDqJDWMWkpXd7ABQS2hMAPEq7Z8qjcx8nMhfm1WHA5c5ERCe",
  "key6": "2uTktNG5139ErGgQ9cb29go3S88HCn6yGjUuzpTG9xbZHsEBEyhpYjvziU5ka1WFLknm3eQdGjTUUJ8E5Xz4Vp9u",
  "key7": "5v4df3sPewPsC12KP1kHc7aKTT6rDTbSG6XdfN5UhgsqDqxZC9u3de1n5LYtYgEC5Rv5ZL437HwXsL6aaSBgnmnM",
  "key8": "51GBuWXtBzmrmL9M48mxk6KgrxjczF9SqvAFvaHceuT4snr1rnFPtL1rpeyV4hSEPwj4QyY9G935GtyJFAoUx8p5",
  "key9": "126hFfXYpM1oVUp4AaHTJdaLtWHwiuU6pKjEcMAfcjZ2Qyah1S4EUwNSzuBcyVX4iyvg9TGfBwX7ZqrqgfLrqy3P",
  "key10": "cX4ZYrRUPYsoQgMUtoo6zzDtQuFYdmcNP21UsgbSDWVzD94bWyLBKjW1tJTuFzFK3i7CazXH4mV23uZ8S4RAVRr",
  "key11": "4LaBWi24SZhk2kejosQuFrW2KbsERz6FRCemdgqWqhcCm1WYTgCQbQsyLAAThH8ZhGd8Yqk9Pn4wKb3W8vwDeusm",
  "key12": "67bMfkohZBdLVmGV8zCJpKk8y755JaX8BNHiS169mLb7wVHuuS2QZDrwqUvM9eeJRESepXkpKiTqUU5Lexzx4yRz",
  "key13": "2E4JGUjK3NnR8fcSFme4VQgdHDhGaPfv9huu6PxfDKapFx94RDgMzAAXN8toCc5JihB3b5us6tBR877QhzzVfEAN",
  "key14": "5KF24QnFnnuAPMnKoYugmruehhreQNja6oqQ8NygLxSexPcxZHqvjrNo4DLKmkrBgxvW6Zzyh4pmYpwC1UBBfn3r",
  "key15": "LHQ3sYvEQ2UsgoiUyE7xEnihD7G5VShe3d8ZgUeGoUFRqrEcufYF2ZJhnAGVzPLTGmHJxEx3DeEvLGGuVBej6y8",
  "key16": "3ifiGB7rqPWEupJupRRgZeQryDgMSsPWvF6PLm4H2JVNJsmP29vgbXXLHvf87EQobs2FD4piESBMKENQdJ62UNnA",
  "key17": "24W4UiZebCVESRq5gdczjKTWmc6BfJhHRdzTjoogEiMpvdsbhJg6s8tEWikbVf93p2R8EdBPuBdBpkeempsiRf54",
  "key18": "3UYvV7Pg3zD2Q2iHi8RJePvpm4YwnZNG4fP41QkugG2pwgxkMavdf8p6jHRXNV1sMLoZdwgCCQS3HBYUULUWeijv",
  "key19": "43Qvyk9Q3T22xj9bQdXLUZdS2o64CQJSEFAyJupqZwBTD2ouL4rWybf4AJRBbj9RHNpxWZCLuqVzUHtZnc36EnAC",
  "key20": "JTvN25CjoYMBGwRxqnDxyCPeSE85J89WeyEXAtY6RQTMfU3C4krEHdAFewtyQAkgw6o5WZhswX7AqqvWqRjDrfD",
  "key21": "4oywh8ryq7q6HEXKDjGVPENbH8KjNcv9zaXbo1QUjdBmiYKVcp8yvTG8u1JHCjBh9aufW5UKFHst3HUnR6Gjc6Lv",
  "key22": "2z8kHUErLStN1eRXWSSrMzvuZTrYJkrtEafFuiEStEDepjhj78eKX6b3uCs4nc3SREV1yowrB6k4q2vHJfhFGuvp",
  "key23": "4VFhdLFXvpRRTB8Wo48AQA4dNToqmkTC1wSbRGPmXV5GPBX9HVsByTe4keSVWkbjrNvM4MEbBzbKShHL71BS4wz5",
  "key24": "2frnDctvQFmgkSXLJhNzjE4XGQztQ69C6rjNRaLnioAbtBkqDsaFExgsfbsfdYe2yCqH29me4VVJN3ZhFkxuJraK",
  "key25": "5KoGed8Zp6nkKYuuzDVUFP295rzQKEgFmeRJL4LehScJafufsf8yLkfem5kP8ouhqtVjUjn3iqeNDMe5uL9zu9Rf",
  "key26": "3qrF2eB29jCSNgHnkvJiFexZJvgcAocvsobh22V72JbuvkxDm7fQjn5FwXC2Tx3R6y91yA74hsoCJBYipqVw865t",
  "key27": "2cxD7qdEQ2Nt6h396XnY3LfzL3vpD8t2sTh8VjMMGJeiwdh4Duy8Gx9Sz4LDTzi4Ncb1jWYKPT9LJYvEhPmRFdyv",
  "key28": "35ZR7dHuZFp7wR3HSXei4qXZkkeFFqxdUvaUErxPUsM9VnuFukPP99FPJuGf7PvaA643pgwzGgett7WDqtakSfnw",
  "key29": "4P83yXJrThzcmKD2BWZkkspjHdFD2AUaQyupjPSSp5VYn9JqrgZ2Caoqz2pZE6GookuFtWykiK2WkMUwT9Mxtsc5",
  "key30": "2BgacCytKL8XLPJ8rWDZ2irv3phZ3uZUJZVBdYior2zpGNo6vueUWfnLU1eCX9Tp5q3JfejYqkVSCEiQVuHSJjZC",
  "key31": "5HhUGphCitAdUu3ikXi29Bf9RVrg6uvPNpbRVacrmSZ1ocGUrKG4kx14E2WPrkZpLfKFvn3NpPGwvczrx3yG1E4D",
  "key32": "58ASWXzNZVG5pTsC9qXkTnEQtdsnxDjw2DgzSthiLrTKmEkRoWZXjqrV3ZhmzCZSJeH96oAbTPQGS5VKwR3vsT8j",
  "key33": "5auAMSAbSx49E9wiis1KiHhkvcVUzaTN4fQ9fiztdFie9R7fAYvwqnghULyDZHQXQypQbK6vftNDUMmgPiERKiQV",
  "key34": "4axoW6azmqi33X9heyS8FETovMcfCdrFX3os6VCL1Wy4Q59o7L8sE2VmWAQ1ucBponm98wgBvpW4RmsPujWen5Ht",
  "key35": "61UdJ6H6i5wiYvteYPNeQznHNLeBRBspJh2uYYeVK3Q14wpKi9NPNNYBvssWznbkWwffLvJ4mwyavqZqv72vT7cs",
  "key36": "4yRKxaR8F8z9dCjU5xiqvYRNQL4rUmmMNGKGpFYMNhKsrK1TivqEEbCpvayixuniCEdYw2HayYdnbPYExjHnVYuP",
  "key37": "udpHLN1WL8rG8d6YEYH3z16ada2W3UNzkzSaMzDFPnPDg86RqAcKem7bJdoKW2feqUd9GD56dJXQfCPa2DXTE7y",
  "key38": "4R38oBg1pfLD87ansR12DkpFDAudWLrmef2TgdrtoZqVHwitjpFfLTDMqDNMYrfmvYyoWzdTp2uRtLQ9JHfgS6ug",
  "key39": "5Stji5ozpm3Tdv2Fz4yXrAUYYJJZEjo17cRkEMCXZ7tCBQvuY28VWe8pC4JJNrVKewGsP1hmcv2ps5tE9mnWjVo5",
  "key40": "41qEve6CT2uYn6k8sbw8QA4G3UevQYjd2XFP5yDdwk86JypxFB2yN5PSBKVtrppGeXSPJmG3mTyjBYcTLRaTUsMZ",
  "key41": "jeG5vLzNwCFR7UjFuC1mEME2DMqNjP6stor6m8ZoE5BQxBjqdgtwXo5LEzSX4tTaELHuJsfzVkXN7qCsCL8MqKK",
  "key42": "5FwVZs3DoJbv6fbjspHbX4JteAACfJyj4u13fiQxtsiQqoQtB8VdRypvTsot5rFqjp4rqZ2YaEDSTUL6WJrjRMoM",
  "key43": "54JccxFWjJYAgjayfpx1fKeP7WmRVWcZUPZWnDxJ7Q2VoaCdwcy9BMZMf1NoztbHQGbkxNZdezKutRqeywBMR4cT",
  "key44": "2qpJHqmer4touZ2sfRjrUJp6p5ZFVn6TJcMKdVGqEgdvPurDEH8HH9HdmPw8QEwBLiYyGXi6mBGFg8sGdxfydQRb",
  "key45": "4uDWcd1q7TGFmyp2nbBw5eipBEG5XC9PExY7Htrdn1eH8HooSNiY86G8NDhzeHqZpeVK9ZaUnBpbW8mhKjfkmkBA",
  "key46": "22yzR3vSGM3ubqtcvFzid5ioNqnMMkkJx5TPnLphCxJHZoD3yWD3uXAwQf5wEdmESByvmcMF6A93KdG54WrF74yq",
  "key47": "61kVokWmXfCbR374unhjr9EmuHKP1vT3WXPJdJBRe4U1oezV6qGxYFpo27icN8Cx7pJ7B28A31bwHTUYbWsXF6ix"
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
