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
    "4yEj6HEEFnyAzQ3v2i2chLKXwg9NvkEcQkQcqZ8EJMqsvTNaWadLvhyYJjmEvD5eHFZmXU7Qio5ocKbBcuBzabgR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uap1F8JNEbaq6J5k5UrJWmHNTBDv8Aanqxo6jDazi7ruKMdGFv5J22r9DEbKihooqfCGqXqGi6QWAtcBrMEbz9Z",
  "key1": "5jqFWK2h71ew3UX2cuCH7jtd6dmbudbgcV2fvJqtdxieZHaL29iyk2dktD387e1fVEjrb4iB18q86NhvHJecC4s2",
  "key2": "67Br4eauFQHttyAGtjPUQfTr5fFhDH4SKe14KYEjEUMNTbVLsYqRxYCi2bvqitSVU9axRFVuJbBWfMnWDdqmNhQC",
  "key3": "iJhwbLtXeFroydBYjiqUdL4K5TynKavYBihAUR5LSF9nSzUVQF5DGT5MHFikczVgCdt3tcjJkeQuoGNxHfrsDka",
  "key4": "5ma7izVZ9QbWy4qs7MTpqcUuwfyizd2BW5FhmEkvV7xTMfbQCDU5riF33fnh87xBx1CyBkTvqh8LWVpUjoqfdVD7",
  "key5": "vWkTY9LYT58SeHjQLVXyWXXVVAX45Voqww8hM6bRvQCBrXmN738tPTY2q36EF9pPGgkgEfQJRjDSVphmQEDudqb",
  "key6": "2HCuu9dbbt5H6oPJTm9Y9B5Rcwf9TddGEpaDvmuaCd4KRN3ceejXP1nyhHimYhNjEDdSFUDCZBQDGm42fTHJkzLV",
  "key7": "2NtykmrD2XrSE3BLdGfX6FFFYXgRDhzbJKP2QEEfrUvzvLZ3UVDpfZABWahDiLR8YQPgnKaZM3vfULE43pDD5yXn",
  "key8": "Np2K5ou1BjfJQUW1xKRzxs4TqmxErEsAtU2bm5Dn9H8KUPupgL2QHhGBNHC5v5j74E54fWTSfX6BteeSA47o2ds",
  "key9": "4HCYoHCA3rxPbEsDqeEB1oRea97yuVJJdDC8h6Ar3Ty2SWb3qYpyRm76yHLZgkcpbrLSfuSGaAi9G9aPCmsBremR",
  "key10": "5U91QPKy5wZ463z1jtzwhSC2JtFHMKHfLYxva43uoU45Bouce2uLcYNq8q77wi33mJzKQfYkB2s13KmCQLSMESdX",
  "key11": "4TbmVqRCCTtyhxJ2CUhyj2FKkXsu9GE8AjZThBzSiGmoB1zbrCHiwb5gLBMd4VuLZmowQQRjEHpuAmZPaQPGR6ZA",
  "key12": "2djghRqEADnZuVuB1VAsq4TzdqfKT4uUBqF9dBkxgCYtR12X4BvSyyZQVgCa4bHpWhHvzdd1VsPtFiBvPKdNsJHh",
  "key13": "rTGBJzyas48D4X7kj18HHEEAM8CazzKz7Fddei3LFYZtpA99RqPzmqYWcSV47fz3vm2H6FySJwNBnjQyKjCYWun",
  "key14": "4QsfN4Nv1xW3VHkowyTJ8TGQumK1N5Tjrb7ppEuGQgr7vVS6hnHF9YjK9H2jYQcjxXyEwwWhFwt9XBfcmTWLCqDN",
  "key15": "5zPhzBDU4EyZXjjtLvLpWG32tdW3exNzKuU2iTW8fkFjHDbLWXZPsqCje1Rgtt1Aki9HtKP9PbUmo9MReK7hRD4h",
  "key16": "5DGVnWfh23WcHSEQ4JyCAdRGaqdqBZKELmPKnWLa578guotKBsq9RfnSBwLYRoK7Z7AyFNBCNttNpX6wkLTTpir9",
  "key17": "4mpiguuQpczNLraiTMrWEvdZmq8HJSJ4vF4JXRkC7nFz2KL6aTCdwWgkCUuE2TEU7CaePsrERxDnr2if5aBZAdv4",
  "key18": "2PppGiYjvJwPVnvYHXJPJ7qPXUJYY9xzQ2ybGJiUnoM3nddgQ4MRpve63vocjSjt4nQHWL1pWGeRmdpfVmGmQdh5",
  "key19": "Lf7GQRPcvevFMP4dPcYgUwxY1SGWVWqAZwY5kE8GRTUQaAQ8341BTbW9fx4RTrXtMpnnwPLWgYZr4Tq45JB65hL",
  "key20": "47dR43td2xrd1pMDMgCS6TKhMTuWVkPgpzwUgdQeBEXPDdYJQfQvdSc2fiBKkoJPLxJDVYvKEeyq3DGY23fdv2pb",
  "key21": "5gGY6G2MtfpNNqQTkCMdTj3gKssKFNHY19BQpqWCN6RMWwoqrMWx358693E9ohzp3NjyZv1VZxvBy9vun1C3RWPk",
  "key22": "vvdY7X8R1iPKcvYCoM5vRmDsHHSMRF8vbYVM8x3DqVNLY7aKdrX2Ezq1CtCnn23Ue9XFP7J29LeKzVWh3vcFJU1",
  "key23": "53JDS63WF45HbWvXzaUYmfZve7adGkBBu1UKPrLKbmgu6LYiAF6CzDEK7HziwFbB48XH71wvCT4y5vmJoi66iWWk",
  "key24": "3RBXATJZAo1yq2fofmeVoUjcR5VuGJQhURxM4himsifTxUBxBB52BVZWKX7m8onRA6aW9xwTnoPXW6X75smCbrnT",
  "key25": "34nouGnHocF6nsSXqLS13LJm8nuPbsXMDvrnWp39au4nLtXbmtzaP9yCdxKKyzPgv9NiyN9tWD3ZzjQXzxQpCgjM",
  "key26": "4EgJREcGipaJwNDfcmq6yzLs285D4GGbTeb7sXWWN6urXeufQZxsNbbhzdhBFYBunjikpJ8pwg8Xgx5vAwgrRwxi",
  "key27": "4nzCLJTBifHn9LAoDJVktKdYYnriCCpZPQcPtBHKsvZn2VaUUt3Bk81LQ1kHRA2dfBT4PLZBpUtzVCPqiWZEAdcH",
  "key28": "3eFPyaRWoo7iNFBT9ZWcsoGs6iaLxQyBJyN2p5qefkK9qeqsR69F9mVugKx9f3wFbXcs7T5XgGUFd5utUH9qnKHa",
  "key29": "5BJWEHHBPd81nQC3a9swScKoTwMi96jbkvwevygrjDt1LqNRg3DptGTHxp13kh5CkNviBh9C8ZAvDEHZuJ2bizDT",
  "key30": "5xY5LaZYcb5yVSM2x9ThxqWqcHeaFsGfwxq8anDGj57zn9toxhhBKszYnynEpSaZBFPeiKryY1A3BLTUsVVmow2V",
  "key31": "4s4U3zQiCPBbZCXq942nmwAG9e8JQaFMvKR9iNMSyShn1owomEJPtbdFhUnWbnFSqDv9EigeM7p6YiJyXkwXthqn",
  "key32": "41EukqA7N6EfZN2bEvv8GKUMxAuzizWu3q7rPez6F5TAP5BUYuj8PS9DV6zhm6nThrR8J53zAFYL6rMKjsSsVCBg",
  "key33": "4yejMRpwrWUDQR1CUDbaDJ6nzrDipBkLvfqV1bcELD5Pyboo69743wi1aWzqDyBCqfCowZYMyMZZiR3ryvK6MR2f",
  "key34": "3DrWdbmF2EqEiAeevt9KwgXswsQkQvb2H58tui6M5y1usCQhxztAxXUrN11UToUYzufV5CBKEJDqNpY3YpTcHHGN",
  "key35": "5wJEkiv8y7wtASNp2w6JLLV5UaVeawQxWpBsxFqLjdj6SLxrMkmVRxwtLN4tDRye5bWnLapqiauAWm3wL7SLwExX",
  "key36": "63t3FiNzrvox3SkkmkBWM4NwXnmg4Vysq1fBbPJcBhKFDDoBrhJAH6tTtN7E5xtdA1LQUb2rSvG5jsEEKF6G2QzF",
  "key37": "3M9SC9TRVhtWcAqp5PdTJpWJ3dkLGQQewGibq5Q2KR2D4jEPoiCaFwYD2o6WUKeLEAb6K2Pvo41rdcAFJwdLmyXV",
  "key38": "4kGaN1vSVeQUXAKfhoVJ3k8YHusfDSKViBmhaSVbyt9WKWWoz1DseGuWDjbkHCCBoVwa8fKpX2B4FbVgGm9sdzcW",
  "key39": "2Tt2rzg48WcSnnQ9bse71H2SNLMSTfXaACFuUgegdkxcFCedc2ADJEjcNxU232zvkaPuJuzt4Ttg26RScSTMLhGz",
  "key40": "CvR5uAei2Yng7rbDwgmdoDT4ZPkY3QDpi6fjSVRRVBLRmvwDvJdq3whwFUC75eijr6pzjYojkWxjYKULnNt2aYt",
  "key41": "5oMbAfE67cHVN5BxDzAkmskNgqgQkcXRkfyqjRP55nTh2x25cRQKNeRg7hRZmyy3cMU8ysN7LFGRmHh7zt2eLCDq",
  "key42": "5d9B3GKNpvNQ8uC6CodJL6NqXt6SsN8dngdQK5vxtBHXEkB4KhfiGmMX8vJngKaaX5yRoNcmYbw5dRzMK3pYW3fM",
  "key43": "64cbx3Cca6V2evDjEeX8kWE2SsJU4Sd82JHnHnDNTpLTgea59ESkqNDmvNEbQuNXB7BHqvan1qj1JeLzkuhMEDUa",
  "key44": "3YKPuuKSJxP9EMkSV5JmVxobi4WwSXQHfpGZj7WH9DtgpcheCDSEzJGYjv7rHwn3Bj9MNyfe3j6pxWnqYuyvFTFz",
  "key45": "5V1zaQtDkjW6YwY9q6z26MDmaddfeXHALzdNdGfsVZs6FHdHPp3jhtHk68jmqXksh1FPvfLyqZLgRFQ1Gr5Wc592"
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
