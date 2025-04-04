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
    "5DoZUDYtHR7QLX2PhDNYVcZjfBAf14RscVS9qE1o4dXEd6cbUQkCqDNqEJ53GoHE21bbPHLsz1fLkjpKvz2pbDug"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JTAt19xqZsXYiWh7gBPwCdZZfT7QuNJwdNymF8ubu7r3NK5VCizC5baapVNrzTk9NYHgapn8Jj8ri6vD3ckk2V3",
  "key1": "446o9FxvcsMzkVzfx9HAbQSKydNoU7u95XaxdTaUNjDjASzTsRWDhAikN6Wfo56ckPLQMAsV4dVuZnw5zwnP78ig",
  "key2": "2eHRqxaQcRJ1TSvWT6Pxyszvjq1zjDjk3vqCpiY7DyjXYJMF36RrvMfucm2dTzTTdGRbhC7C25gV26F4o9ad1UHN",
  "key3": "5iFeTfbZLr4t7MWeQpJnUWb95yZAsQGQ42btn72pvUGziM1RASETNKoAiz6Snck95LfQ9zrKuo59MBmiqus2YjhR",
  "key4": "378P4RL3HUgTUfn3HFfb6q9myqG6oUzhUj9TFpKbyYDBCrGFcyRzgqfHm6QV9nPY74hBhi9nSoStKoPvTEhuTri4",
  "key5": "3k1MsLZn3Ckaua4CBaM14q71rym4UCH9zHJzhonMTkT6hyHNDfjAvdKXcAZ4oyyS7vn3mDmiX43kXJkoaHsCdffQ",
  "key6": "5nsf6YCp9BAvE4PXybr1TusxFjh5H1FVwUC5rLsSKpiwH4iHCT4sPoh3dkckSBKnroqZkaKQf8NwBh6dDerfZqei",
  "key7": "4FisMLgWhbnWFzZMEfnG8jobSb2AfEiGg72xXWALEBdsifm6xXwE7DHtcLWCgyHQdAFZcuwhrRTfo4DqzcKstsJ3",
  "key8": "2J1bGwLJFQUkWC1WvqF6NZjJ6T18P4k2fNU8cGUWAskmjq1h3aj1vJsE9pqxYMR9rNkLE9dB1a1oERz8fZQXwXGR",
  "key9": "4CKKqqKQf4qrRqy16z8y2BX5DyrnNCV42eBwW7yfiu78gUBvtCX3AkewCHrNxmJ7vJqjxpKezjXqZXyfCGgNcwRp",
  "key10": "3SuwA1jBwxfX2srB7QomqwbzUmczEQ8k7gVqBPhu4YUGVe1LtRdAsxgYZRkfYpnQPa5x2xAhnCQwQ4ui4TZ9N8fq",
  "key11": "2RNQ14LLjd4pHa6ea8GSdv83e6yxsratVkh7AusqJd1SxJrg1UNShD1t1KMVg5af4ufgzGepXzXerkCKyvUMPgBY",
  "key12": "33GcwZp8yq4ENfaBFdo2Ny5gGye2pwVwwKisyXw2yAFdQDVf5ujV8UtKvVyNWwLsCvDC8XTGpxgDwc3KMti7cU7j",
  "key13": "XaCYrH1LdVAuWMRUM9pk1fpPeinwx1GevC6Scy6cUvuSAdXMfVR1tiXNanFVEvYtTjpFLFRuGMh1Z9Uf3w9THTr",
  "key14": "2h1ftLmP1XLe4wfiWnBQ88sUH4gokqVXg1RFjYSg3dgK2xKyj9jex1fcnVQfvKZ2pT3ytpjeJCp7U7BCA657pdAn",
  "key15": "3pfMsXqFoemGV3WzkNn3GkqYajU6d7PY6n3EQqSodNPCS8RXXQHPzG2SePoo5HauDj8qV4yfvE3PJYKmnxrcwWqY",
  "key16": "4k3w9oWU25eJkhwbK47F3747gpE77Kd68hV8NKt5grrBL1ioadnTAY4Zr5xJ4jW44yHLMnBubTBwp6HbWt3yP8PV",
  "key17": "2sJwUMwi2KYH32sRJ7xh4jtoetAeg8zNSDP77ferTMahY3XrCR3fnds3812jEsnCMXsf1Ux3R4iL3ohMiH59ECaE",
  "key18": "AMvdU4shFMXJRU2pfEtmnxE6Qvva2eiimhg9HwFxidEYo8CyW9TJQnvXReZ8i41iQmnkobtcFCB5oqVwrbUHhx6",
  "key19": "51gRajm2CDH1BaGH8EPfY1C9cDKftzMT8HC8cyqQ1tL8z9aBmsj516d2xygqhDkBxK7BqDRxvpNioZh7w3Es68FY",
  "key20": "3hcbTpuqCuGCyv96SX5qgi9UQ1Dy5Dh7QaHnuVvWmsnWuTKwRS7no26S5ZGmZiq1GjcxnnFNKKKB4PhPB75JX85B",
  "key21": "2ogkDLYTANMiv2FK596CzLeZ3DET5wfNawTPRY2gFgH5usXYrNApwbZmPi1jzZXZMPtKSK6aWMYdyG3MsvTAr13e",
  "key22": "2eg88EWJib8QKNo1Q8QU7Xmy8ZM3veyNw3q94t1CXVUer5BhVUEjZ4K3mRyVnRFbvUCV5gwqdZUJTaTqEnMt68gt",
  "key23": "3LCxnfS4cDYtwtJ5EthsKdQavVygFhjceVSoqruARoNLA99XpGNEeEhD216hxhCQVgLUjUyi226GG9nUZGbybgYN",
  "key24": "4Vna8Ys3C8orEj8vbJR8zicWtgzX2cMn39iPpfJdkZSk2HXrCPuHo5T7JdG2fGk9czTwh45vAxkLwt5rKynuWBg6",
  "key25": "4yALFMJoxC4tqoXyX9bpNydqki6m2fZa3rFfpamGHrpaDeGBsk46pfnwdCkzLQxDbwiZ3iJJPkBH5VbYcEF6AzTc",
  "key26": "2Vtrc6Lg1DCdbGAHa3xLweZYVXKC9dbV6swa5YjJqxkTY2moA8EvzrDoXzy44npKN3HGzK3bEKmeTpofega8gAac",
  "key27": "4ZBCPQC7vC9GtXWLURc7pt2VrHuiMgYwVP4t7wE6iviuPQ1HUJXBQzLkTvEZpmXYP2bvmGG8dtR7qfHPXcVeyGZc",
  "key28": "5kx5zyL7QYSxFeTiC56W6czQtarfbFKQFwPWJi62gYraHNWXzim8AWQNCFMSWV3HwJ3qNxk63iwGKwVnxrZCESqz",
  "key29": "3rrTC3hmEuETV5SXUEAcMnUyybEuGNksGmXYNSdSFHmJgpmgYgH7TzyxuHQqmTxwzGm9bgj4MAvyMusaUu6xHgTT",
  "key30": "3eDDhmyE6hYJJEf8yRJ6PLaGURgVX3ZyA8emVcLAaYx8GMjz3FkEtnpGGw9ALYpLSdTWZxpVNrbWhJx96Ngkpt4D",
  "key31": "4FfptKVYsfRwHfYG5gQfUyvRteXs5XkTugneubA8WHd4YhuDvJNmVWjEKbbijQoZaVzqt85f2YBMT7HP5wvCWhuJ",
  "key32": "3avfNNS6diiEW7nPrWm3XURRL3G2HzjgE5abWiPQj87yahSq5ESFHL1dTP1rnUjcMVTE2J268Y1LqjBq7tDbXDg1",
  "key33": "4EJnNnyp7eN2DdMVfdUkE8vNZTNg7YLrQTcjbThdhL8UFyZSrLawDMGVhXU2iFNeYaqwEuDhAT1Xr29AAqHfPNvc",
  "key34": "4rKrw3PnkhbrkCEb7VqnkqxhHbk7GSdZqu2iFLK19GR6pYYUAEgw28N4ZMpX6TQCd374KYvJMyDweub3oyGU4ukb",
  "key35": "25c88hngGiGhxjHP9eMKyQyPUznMLeeQQRj9EZVkxDjUURzMdbtGG7bkmsdutRLEZSEKD1MaxaLejjXNdvjr4u1g",
  "key36": "3Rup4HB8K12gp9JEPXNq8nr4DqovTLdirH9HPtSFrJZTA14azC47AAo9dFg33nq8b4yj8wkqTQTnjoq8jc6R4hus",
  "key37": "2oCL8L1ApdMVwHu5sM9TycCQo61iBK7C8GYt8Ns1rKiyeWhnMXjwPpPiZK2TL3XRdPpwEY6A1t87NW9dDJM7SijJ",
  "key38": "32vDiwdHgaV9T3aRH5YEsrpUskStamMQUcEUtHHBUCLrNgr3ifJH7NCKG3aQSC8W5yW7PwMF52nUrErvL5miJ1Xs"
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
