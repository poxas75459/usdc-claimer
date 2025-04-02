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
    "aHMDe3dNksTLkTgD5Rpp6LY4nM2AKTvqeyvx1gmQzf78yweUHJ3au4zSFpCcVVoKPdMSS7XMaVQkin9yKbhCi2s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4x8gnNKeuEGmcd93BH93CUt7YJXbNLMkjSo2FSn6KihunaVYSEZxc9Baa6rmpsh4d97DPqYEnRh2cPUu6DJUBL2N",
  "key1": "gLXXqiHnwVLHNvn7phtyHW6RTifwLwS7QjyFdvBLUQKD47DLfnP2rvpRKwi6tFiocN8vXLhcxdxCqKFkAPU4hj4",
  "key2": "5VNMg32PxL8X7wfApJCoTA3nekJ8fA9Q3K1mWZQ2N3bNLjHDF6E5RrBBSmCqqCwRXQ9nLm6h7JgZJgvapa1ftg4M",
  "key3": "5V6xB7JELfhkfUkudpoqPzvnCzCUFZHBHDgcKFXX8otdvAfLpkpS9KDAqQufNgoMctHcexNBSSUXJLLrdHdgoGNy",
  "key4": "gZ5LmkyuHncnzFZSt2jmA2hgimC2YyyqFZxWGaQCFDes5qhmt4SLvEQVwYtsdYfdTbLX2WSt2KA6pravVFvWE7o",
  "key5": "4HuJzYrbT15G37CPJEnu8s5489FzHPWXgCwbpVBX4s96t4D3bH6fFYGLxWJd3JNzF7whWjXh1dk5VoNdELchN8e3",
  "key6": "4Zkt2CyzPwgfNasHY7QqJvenM5JC54pNh6kSNtc9dw5Bcm7fg3Wax3NfPGVUeW52tcUQfRjpPM5cRMqdLsSbGMcj",
  "key7": "Pf9NdcmEtrEocTowGZZ5S3kwSbHaaPm3yuFo6iZmbu9yh1fyVeQfWjjYT2nUuth9jGgwkPYCjeU7zN4CvXe1KWR",
  "key8": "5YN7gicNnvxiwxTSFpZKkWfDAtnsRVrk1UkSfkNoQUn5XiDUaZLnsQTm3EDSAHbbKWzjgkess3uSvbfWMNT4SeQH",
  "key9": "y33TwqtpjqauhYhbWZBLU85JGbiv2WGojjSQPdiVnMqRTTcA4kwVYzhXfCLdGYhCWrmufQA9u6QmFXvmcDgprfd",
  "key10": "2F2myv3cmMMFQchKpCE59AUq9U6ovRrAjzqMsR23oYjuwqFYEqUs6rqCZtBEe5GGWc4cRSgFtczGrXudAYU6M8SN",
  "key11": "2oqTMCarGAfzQqkK8P9CAYuyHxwC1vMGYBrJMBHwNLmB9nXUEq6dgxxeDgNyVKFuebNam2MQTysyJbNGk98JYTdC",
  "key12": "53BmnreZeR3xZdPJz9DmXTLDt4okB1gXcVZQSXom8pNceRSggnLCApK8Psk7iscphkKeZYYzX4cesFvHRDN9wFoM",
  "key13": "5HsjnasuMJQUaV62Wh2ZZSVGDT8XwxAeZX3Hp2bZiTDqeZZswiWfPWXkxN2rGKQy9AtJp539gLFE3Dz5zhGXjAfU",
  "key14": "4BJSda37W4tGfpTutS3wRd2CCEyt1bhXdxRdmF1eC6HJeXFwfSt8HvkS7oyn4bvU3AwfiyXJXZmGUd2EqRpoWwuN",
  "key15": "5AL9P6eWuUX8TffmL5rvhhQPD3AKLddZJ4tKMjtvCWGm1mLijHexzA2j73DBxFjn6rTFzvvhWVdgPkWCptQDPvVB",
  "key16": "DPrMaDMKKn4tWWsDcjuEtLnGQ6wypghzsCQDT9L1RTB7H6GUDaz5CvrygwsVxizmcXAjTNspvUQfLch1fpW6Vgb",
  "key17": "45S8FPyjSgRQp7FUBwstiijtnDV8nmuGHr34p7rAgXeMLyiaMHHMhP4FQXFxCmJCNdm9uSfxpSwb9nXsUgskWfDo",
  "key18": "2TwdB1ZgT2MaVvGUAy7ziUgWUhLGBUoJS7ZrfudA4oFpQxGBEw7zkbsHT3S2XzKqs6bRSJdPx7ZRw2YvuqfWD358",
  "key19": "2aYJs7t2b85ytGfcLPz1sFHHGtbae1LLCP1QdjFxyQmCxqVhyH2eFpn273EGoU85VRTewC4fZBkfeXn4ATVBs4zi",
  "key20": "GWvgcKroYn2dDyDKv9BUMQc5ZVX1xFK1GmUHoQqkpUCNdQy6YqZqg5N5F54po1LGyvaTVu18qpJ5E39yERAuzZo",
  "key21": "LwFb8URkLgGCWvtU28joqEjPQ5DdVhLvm1xu9WRkgML21QWmGGWnLC7CfzPDF2gvXzshhSiXBdjLBACnwf6GhvM",
  "key22": "3tcH9bA7PBCZq1RGp1DDt8KAkmrUq6N5sJXHLE824chQyHbpoqgPwBZcoxGfc4JZR5PbHYtMy6geqyihCgh24wuZ",
  "key23": "63CLYpnXUu2CcZdh7VCf7bvZshhQGrdtW4rpbXcdMue61XwwDs9oKUdh8nbvDNXdQFaksAGagYhfS5BT1C2GHwSj",
  "key24": "Esv9S2oXM8dpDcf5VqaweKFKRkC5QPBJA4mZsRwnwCvVgnAZd7hj33damGi326r3UBxG48Hd4QQ97MRHvmwgRsj",
  "key25": "5xLmVqb5F91973WVmzEbg5ZXL4h1qLjaMKwhirsBov4uBXU8KZgQ9Lgy12sagYHY4WSPF5G3vm4Ycj2brChHyPaS",
  "key26": "3KikZWtWpF24CH8PgpYsMj95sHaJobY3dmhMiMQ9y6p54ojKxSwCABBLMK3D5UErtVXjJ5N3bzrpdswfN9xjbPcv",
  "key27": "2KQXRBYLaSej3kh4yg9Ypm5GQtKu8XYbqBRkGMtrTXw6QVk1i3uxqDifXp5dk9RVFTtSpGthaJiBpAJ1BNcrHwyi",
  "key28": "5bnHmHajotoKEhmtqrSatVZHPNKGHH5dr3jdf1ExbYtPwptxj5XFkxpV9fGTw9fxLDHDhDcUJbrSDcehT1Utm4mp",
  "key29": "5hydacsbRsieHkFpi8zXUM7FvwrAdSn8vpPtTpZA6DWVbM1v8J4BjggZzx6dMYiBmqEdwtBM2am4aDNrmPLmTxZz",
  "key30": "4xQ6BgSdNo7QoRXVn4SYCUyn9BLyDYmSRhJWv9jpaqz5LgdWUnYdNVB1PD7u1udDMzNDGEWosXyWFK4ciD5boVmF",
  "key31": "5oKUDTW83KfWQ9VWgRAAtcVdTiYQwhqNXRxhQu1pae7GLqiZefw78fVEZxJfBznQjXrugUaF3FDyxQ778SvQgn8E",
  "key32": "2uG5uUvU5xVR7bsvtgiZF3d2dGvJbcXvdAANS39yiERzoap6xhRMhK1miuseARPM3LanFyQKseoReXPP2SLMQ7ae",
  "key33": "3Sd5qmkTB7p6yZErSUFjXTw2gQi7v4VnNB6mt5pMcGcpVka5Ue1QhawUA9ao91mZNV8TFP827uxUoXBgmNZMC6hb",
  "key34": "3RDGJieEDTiaE2ftsyfmXCfkoifyAgGAAGQkTqUQn23QskzuL4jNHx7qficrVvBRkNHBMxmFaNVWuGYrZjtSSBcb",
  "key35": "3uNVMLdEzH3urG72nmN7eoaw5yYbR2jvKHSbgT8bphWktu6H4BEtysZ2gVRZNjdcN8hEi2iAs3zzmWjPfQH4Jz5s",
  "key36": "3BTQ65rogg9ryACQzgFbJHtot9GBk1AfwX3yMvVjt8WvraZX7bnbXqnrsGuF49maXfG1Bk5XQcsgRbQtNd1pJRir",
  "key37": "4h2MiNG1MBi9fPi4sJmiuS8JyiHhBoDnP5dL9NCjdcTJwLuAFkAfVM2Wtw8eCJaqETyzk7M1aSWABy8srxspYjXx",
  "key38": "65Qc8z1pMnVcNCZcTQSBFnLLUaGTQb6pm49PnU3hU9fF6rC4fzYSD5BqeeCsiJEhehecnzEv1V4Hj6iqqfQkfir1",
  "key39": "3Y9adHKPXC7Ccx1wsh66nvbGHz5VHiXAK6xNQkAksPXnRwk1mrqans3an6JEv7K6VSXwkqoN29Cg12mfB6Ypa1Jd"
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
