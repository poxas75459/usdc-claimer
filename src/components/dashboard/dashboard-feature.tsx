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
    "58ZyE8fuEAEWMFGvGV4uVqtyofunWW1JRL62qttvyo1MD6Mn4pquUNhtnttTMYPAGNiBP4YEhx8yoDpJVMTystzK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "poBSM4a3G3HvzjVh44H8ouzstAJNYjn5dvrptAuHWMMt9cuuNs4X9Saqy7zcBa6yQa8McBEW1fS8VfomDMisuyf",
  "key1": "63HZUuji9GV4NFxvgusuaTopnYRNkHnHuhppbvQ8cMunGNTjir5HLX1eASNBp4dFnYdLPwVriGhfSWUV6jd41WKC",
  "key2": "3CPFMtWnRdQHFnvrYfQXjG6ZtnLX6Pyp83BC8Mwm3yEovD5u2dTgkdHmDADd7uSyBozZhWn5oHgpLTRQpeFZCg8K",
  "key3": "4u3WmmzXW9Q7b4XA1KTfd5oifhJXTvQzarFQPqKgKQoBegQ3eFgkXKKKmUSTkcZSELtCpxvTvPUgDF6zDmJtUVjF",
  "key4": "29WpHHG4f21KGpwmxVuQtwBrje8U6tx31qyxXtQ2V4K5Dui8QGhfgTsDoyqXk76TZHZq6MW3Cea9KVLiFrgqWVnX",
  "key5": "5rBiRMEZsgp4dkZPBx1jEkJCAdECMmE5SMouUKB19YMGSRx76MRABx6sX2XBYGK7Yhaumg3HWsHYK9q2VsNb8rfP",
  "key6": "3xKpRtxaWd8MfYzVHNw4Zu8CJ4JBx477om98VDvrfLy8kMS8FJSjgWvJuApNKHSCSJp7S2usGN9s42aLzBGr4HZ7",
  "key7": "33KxpvQ8AT2ZoPm43mpeEbkQPmb3wLfQajPyY8VWpD2ofuXosV3aMgYHw2x4of8vdUm92rGKephNM2Vv1SgBhi7y",
  "key8": "2K9tdvKwi1tauRcjszRi21QALZsMKiSLMMBFhndh5twJrkc9QnpgZVT9B9zYk2N8B64JgSo2RYuQLMKQokR5J8nc",
  "key9": "yjY5hyf9Vw37UzWvxH4c3AcfTsr8EDcQ97Fy84UbEVe6FJxj5zQVq1iUaM4PTgUG463XWTRnUro6GqmXNMYqKrG",
  "key10": "dFWK9ky8BBLWpb4ZdAjpNwM79w4c86bUwMux3jASBZYkHFmDFFoMoqJHd987x1qrUQEehfCs31KDBefm6LJuJoL",
  "key11": "4NtGt5GryKaf6fGD5NshMhfYBEvpBKjvLH3zzXTofgLXr4NMiSUAaj44VD6BLsWkyPCLnfKxgT6tqE3LhTHDeyLU",
  "key12": "45cra28fheS7GgpcsRyNLwBEmnt6jKUAhdoq9cdwCtCAdKWFhg9GH5fqTT5LktHCAX74b8HJ8nh6ucge7WUGVHDn",
  "key13": "236FHtbtxb1VeZf7UpqWQU35AY5wBB2Qa7Sr2aVxyrP3H6Coh3UaYAHMQEzRJamiNVFx5VPto1nb1tzuUAqdfnST",
  "key14": "26MbcBattReNw1BaMxsSswtva16FJU1T9CUX4YG7KndvMEyCGupiRm3vnMXsgBPNk6tMW514nqC2ysmNYGXxgZMH",
  "key15": "4nAAhjsnHynmS6idN3HW2tmJnnmjtoZDmhQjzcTBqj3mrKzr3sobPxWMxRkv7JEQUTDTkdKtucqafnsze1ZZotQn",
  "key16": "WedxRyGjdv3yg54ZaPbks1CurEX5Se9SB7Et2pgkMGw7Zfa7jt5qYbDgVnStFgiFxvnRe1Z2fk5t4SP6wz5NfJP",
  "key17": "5gbqZZq6goy98LN84AUBgc5jpFZu2Veyvbar6mJVpfRXdh8KbccNwM9gCCJFrYDjMVorbDeA9Q1CXwVF6PkLNxsU",
  "key18": "22Ykd1yegHYwbnXETkeZd3K8B4aoaXBR71E73W3jdV53QVxZW4GdVDUeCFZL6KXkdwuVWw3h5kArKANv5WtPF444",
  "key19": "4nTLypDckm7gsb85rxiQc1tRzzULenwNrZ5e3kGbhGN3ztToxTnCYw8k87gu1bBKnhFxyZUbssRvRCcEuqBFUAbH",
  "key20": "4v7me5T8buLTv7ZdMct1uyRkRwfqABDuDe9bnWnUkzH4a27k47FGVWXeGEMhHjdXgH75X4EpuaG5UAdWijJ5iR5i",
  "key21": "3R2TU4uhBMgUAtTKB678wyrgB4qHvDqwUaPUSZKVsnNQGBS4Ph2vqTAzBM9XyfK2ksdjj2vEjUvMTx6hH9gWgzn4",
  "key22": "593vzgDGDaPeHQv5NtEk8W9tkWCvE52pjeaNb7M4VvwhpWWWGs6CuSrXByRGq2pG7C1Cj4qLpkwj2FLEzmR4PaVf",
  "key23": "3qendUBuFWcghPz9G2DxXJHdFV5RJdBtp9j6cHtGrGqX4uqB5zDEXRa11RrzfAGyC3XNCpc4BFRxpfGaRS5gTQsh",
  "key24": "4hqf4m8HHmnuHR8k9PCo9cjBLgZDoCp4k4L71RzTktekHNS4V3RYWPEYoCjy9ADEmQGSuSLWWLpizvqu4woEJ4X9",
  "key25": "38eBbBcRH3UD16W8mNMMEtGXUeYsUxc6Gop9CDbBvrnTAzxiKqdTLJ7hcgrEKaJ19rpRrJHQnXB36jRzd4JY46rw",
  "key26": "58ku4AcAZ8xFmy3jsWWMCPVhRNoyD9dpkaukb5CUydiZuxz1jYYZAdgKc4vKS8mFM84w6gVcc93p8r4fppd9Mnwp",
  "key27": "v8FZ5FtDfdxFVskNrTN4SEBmQwd74iz4e64LN6PH2MwbQW2KKkQmEYsb3nqedbzACL4KbyU1ceyyvTyXjrzHX63",
  "key28": "3ExtWwrqiCBAHLP9xbVqojwSmRQ5dpXeFk7o4z5ombLp5nhP7kAfftDjBUnThaJafZScBWbCdN9r4eCCLvk9KJ2T",
  "key29": "ZHz2wR8Z1owrwrP1hahKw6HxEa8zz6Kng5CvPFQiY4ikJy5ZVS2uXwhKSCtN7gEKSWUG6suifV5dCDmxJtdC142",
  "key30": "2vHGHQq37iq3QBADzosC1F1RMYnpuMdfwdC8KkStPg24u4PjM77Vx9TmHfyAXNRfGLQEXUTnJ2HShfwVpaWWxEm1",
  "key31": "2L4UH1fQ8QL8kDGXkyTN15ePnWP23fo7zoZ6wLiPe8xdM5G2NUdfpTQWZyLjaY4zUT3oobLnNXuB4hvyyA5LaUuX",
  "key32": "rTZnxMszs6syE2vH5U3iv2sosyZGDFNfHVw1xfR6Nm76VUnQK8EgpXN6EeGepcrdNQPcEfBe3Do5htiErMiq9TM",
  "key33": "2rxYnxq2Y2FQdBHtBQCnKLfSuS7cfFw2ovF1591BXwsCnznR9kgFiNBSt5T7q3dnhPqodhmZjH2cjoy4EzGtK9pZ",
  "key34": "4XKmxLQu1Fd2mdnsrtz89Ed9JvuVP8QXXevPmmuuXGmxfYdGFa88GtWPuMEf9HNG91T7t2rHYcxGSxGYwq8MadAj",
  "key35": "4yhnskA7CS8CRGsm565bxhu4U6xtTMEffGVLH4eVxwNdSBUGnnXVDdrddA3VdDqVDw1wxm8o5GcEmFXX7B1z75Yh",
  "key36": "LqBfp8sg2gzLxhfGczYZ6nDyCmFm68vh5yZFGBrKxYunrrLvo9RU7ixshBuDfrGJLL4t7fyLLevJMFMQmPUfbUv",
  "key37": "2EU28F7jutAAUcJVbS8WbMYftTSAxVJYpkcm8GSEY1t5eYnCkShBorqzotbKKCHY1a5Pie36h9QQAqpoRmWy6zYM",
  "key38": "622M8ShuzCKuX4aQkrAsbF1mk69UWA3F9rGmrk2mdnemakm6Azx15MLoHuhYcoRCHDYR5bbZtBSot5Bfkd6RLE2N",
  "key39": "2teBxB7brDLNAWL71iy6SGKrVBEXY3gUwvz57MwtTLjAwz4j7JNrkTyppK6o1R2dsjpTKdQ4zrtiZpf8dcfVb4fr",
  "key40": "2hEbNiJcvNQkezsks4nHUEhmM91JfVMauPSyHTRDHVgygLf6nYknrQKUXgjh4S5Fu9xSe8c11Z7SuZ1Pm3rGA6Ge",
  "key41": "4sMcrVPKFQLd25JpcGtcEJqXh99hxaExU3FQZ9iyusoeE5phaDc3gKG9j92NygSuaDgkyiHwUqqo1y6FbLopDoPq",
  "key42": "4ZbvaaLN7EoS1c6VxBhoC76tThXTaeVvvtJDJtEYMwPTrReAd9SKMVXv8LGDRHfV6qwPuMQhyc27RUbEJhBYxPpE"
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
