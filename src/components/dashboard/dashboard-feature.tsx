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
    "5MtbCtVe69t289KejDX7RGv8A7HPfPsQZdNBHpZ7uoFC9UDaJfY3R1KfHbuisErVJabAthGmdqZstUnyPSNoCpNb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bkVY1qNxi7ZJCxy1Jg5v35FQGuePeT7aLFJQ31UGw2841cfmL2FuCehKPFtyqF8mPksET6QK5xKT3G4NHg5nZSd",
  "key1": "36CSsgWJnUqJEgKzBqaAkDYv4QhwKPZ78XQbnfY74bZyddhiJjh3F5sDruQv152U3rmaYReQW5Wp836RghWth6wq",
  "key2": "48H4MZycFV6DmhYFm7sUBdZS6B2MSEYJTaxh2kwz2Yk8TrwgzVoeUUYsXfN6KEfZ1hfYfXCV8aJjqM5HpkoBP3PW",
  "key3": "4WWjGvFTWRRwQjVwFVJpou9mCi6w1W2jmuoYs2KYrY61GZvc8yzFu9sVfWSnBP4Pp2L6tFxUrgWabkwSRx6PHSpr",
  "key4": "4ZTJ143qaGiu3TZRNQ46v11tj4G6FFooFgQBGX4kXFad9o3TfXKHcdrXLfXQaQHQhdJJdpQxBAptNwmGgiEzdNjx",
  "key5": "2GQLHCUUGaekFK3PBEMQKg2uHjNjrHpcqmxbbtMZZwkK99ZZsiiiYFmXuuMLk8FxhG1TGYqH2tFkxyWpFneUSmfw",
  "key6": "4QcREDYGQmVU19AmP1jbfrvkBhCUe8wV1qe8FmmVa3BfNwT54gBn8m1cofwvQQbwR3z1wfM4dYjjGEkXjuyXLCEc",
  "key7": "1tnixayUesdJ7GiAaquNQv9RgqspcWWHpwhHtC3rynkJJynArybkyZCSXDyHAQ9sxZUe3pqvyNBQQH4VRB9763R",
  "key8": "4XrYB69NDgJrcV8ZDSoedwURs35mpfi6L2o8sxn7qWUg8rHGHByY3PBQmgiduxbD95kdwo5qEnZJuPbb7NDh1hWM",
  "key9": "47oHfRYDHw7yjpbozRMGxkqMnWyKx8ciFjWSVEF5XFsxabM8zkC4VWo8RERQfNQ2otjx8WRExf7T9eyhjDHEKcMS",
  "key10": "4dmv4rXfFoG5iYzs1vLUqjxHbLvXWZJMPzwx4HFFvrZ5XhmXFXvbg91i37wi2d7jpASbVcoUxxwcQhRVu8TsdeiG",
  "key11": "4v2NEjxo8Y3GgWPxhcngQ9xQgyT2MhMydJgGHzrbFvmYDWuQmn5cAs2AjmwHpJHer5XFMcG6rjxCqHcLWRJ9FrjA",
  "key12": "5ybRZGXDSuFiu1KqATydQstzjYoUSMLtTTaV12LJA3iLmqpqoC1NGMC7yA4XL7ukxTbjdTKXcsTgSqhbcNvt1zpW",
  "key13": "2UPXVGHfCRC4qAJEUvV8gsF9eNXpSrTVTM77mNzAWtGWD3UUPfiRZKuLzVHpmSShFwPsfmNe61n2mmfnWojLykiX",
  "key14": "2uhRuyGCb4bEQVAJ48JBYdkZhAhukgk2A5whR4AqdwzDJ9tDwRUKCWUmVEgfzYbsYDHFMVnfbZiuFLwUBWtU7AXK",
  "key15": "2Ln8dp9GCzBTwCMkk6hPmg3LNG6kM4ktX47Ukr264Hr2MQYPrNkRvqKDo9XnUEnbbgcxwbcP3a1jNpbEhyrp31bV",
  "key16": "3sXWfMJ818xcxzToGCDfvr1eTVSWRvkuNFsjfGAThr36N5KYKWJngt6GYHi2RtqM39NHtcGZYfP369krdJ8X5JYc",
  "key17": "3pUxucueT5QhVXZ5aKJ6ayS8pLz6bMugK69fcipMmYHUKBW8XBpNAXADq4B4aokQDH9iqtaf2PPsKPspdeFVuABg",
  "key18": "4ThWUHbAYLRGxRYZtj9kon1QYkKBp4Zy5CYNJBpKjzedv1RtpsHRmzPJ8aUUsZijb2dtbMebWb99xesFCr2bBNE1",
  "key19": "3DDhS3ro5bx3zGJHSLdu2WMiwVxZ7PEjdHs4zAeu7TCyYQ9d5dPW7fHLRS7kWEVUrKNhbcRo1jQAac5vRFnDSemk",
  "key20": "5JxVYk8CQVW1SuWugFf4vLAVExm4uYeLLhqj94GTFMjGGtPvSuHXn9b4cGxu9fHCZiB1xj991ewCM866au3kVs9p",
  "key21": "3LdZrefK5nuiHuXYxoxC18FmFzB4jmvWavcTt32p1uNFzaN8ZFBtaTvTxKzTCiCnMUwEBmuY3wr1uBAqTrFQvbpN",
  "key22": "5tXyaL4fef8Mfr1ZtuYGJyJNfmxWNQBwUCPa3M2eCEvGzkGKasW5DQduieTTtbNzDSTiH8cWzRusQyf8UyoJs9eo",
  "key23": "uCV2XvJC28HVS1fXMNzujNrUxc4Avebuitu7PFAAE1HiANeJYMCxsB2Kc98pNXcnkHQuuZVCBwjGAyKxGYuqqi7",
  "key24": "2xwEqtCEPpk4oRz4HthiRgyRuai7EGsSQTeASRPVwdzKnaFgTkVMQk1j5AbBzE2oKHvBTtaBaRLDSt6KfKh6msKc",
  "key25": "3tEP5GdJNvrS9LSmQrWGTTda3WvewCgVTqzcJ2WKXxL7oH59mAfgFqptdyPnPWJB4pLQ2Xbb1u2MaHrhx7vY7v9D",
  "key26": "2hiz6KRzq7b5MX8sSVV5VAj5CbMLDq4zR3QLxVCHHds3FPbawVk2tCD15LebqbsgvPHKzSmAt7PSH4PXXXKZEZJJ",
  "key27": "4M5KJsnsaSn2uCwPoqaS4CmHrrDg5yHJaBqt54NjUKGBxWzGsubZCSzx49yNW4SMU8tTN5arynUxBje6jUdMptaZ",
  "key28": "3Namof9uEJa2KfRQyV6wAoXP7BYmg5jLuxceTMuMUGJ9BCMuQJ4Ge8krLCLvaQ5ywenHPQDUpEixinUvaWZ6YQxb",
  "key29": "5BJS3o8hJZfZPqPAUyJSuxbmprHCQGqg8bjg7UPriCKruckbwmieLDoa8nPKv8UJAfZdLf6VFozSq9MrdZ8Bjdnj",
  "key30": "4fAuDp3PRajtqjUE81tXRF3XqBSaht5dCbyysay8rztnZH4UrFWra3V5aAvFYM9SKLygrUX2tuHwCqdxZ3z73afj",
  "key31": "5kFe4ZxqFuGWEEPWbmQo6C43o5d8Frnf78sD7bkx7vAaNbonwrnoaoHTJy6fKQcTgnP3iaJLmQnk8u5T5Rxawdhu",
  "key32": "4k6EeZXMsxD78ym1KrbqrR7ZA4k1F62FK1hBFdnSXkjaj25TQwdVVbvHnN9PrhedSo8wfEgBA4tY1BXpV7KneAVa",
  "key33": "3hBJNvYneCu457kqNvnueB2HEgFNErLu5hQT3BmAzE24Q3bWECGWz3iZZeKui5x4TUKgA1yY5LMn5gJmX9vGf79t",
  "key34": "4mq6Q7Twnvp6VL5vKgWHTDmpzWGpmY3vfz2wq6ExYHUM1pvr4jWf21QDJXfLoryGagd3DSbrksjdvTneJ4fKk9oS",
  "key35": "5dj4VHZ99PSmewtrp8cHGUPkUHdgGQBDSNXouASfZyk8j6Qhrov457nEXampYPu3S6Fj2e5qd5hzFeNhtw6zofBM",
  "key36": "37hS2MoQnTxUsMZbQJS7PjTEeRAsQaD92BignmSfiM3BhmqtxY15rrCKkcGUdxJyLhW4bHUb3k2L383QKG3ubc54",
  "key37": "5RBWH87DgE4rUEanGm27zsD2tQCUR7vNKedFgyTSn5GAHjy88Fjk8Ngn7xMgXYq1CBzZd8UJyP19iHF6diLcmphA",
  "key38": "2qKeMXmgPaUEnXmeR1PVY8EhSdbjbfN8Bbge7iX94wMBUo62CkmqLbn6Y5WNK8sYRHcYzkCHLJqSQatEeY8rpmBs",
  "key39": "2cZaKcMWRQXg8T6NLqoFHZxLSpFVR3THSviWcFyiie3DbnYpSxQ4v1XiJkmv2pXKosr3PXbyeNNRCqDvriNLxM7z",
  "key40": "2zmVqXk2R7pu9pj2ueuTQYDv5vMJnYKvGywgJ1u8KTir2gAJB7TGUphKvZNYv1gGScP84RgHfESDLb65oDD11T6G",
  "key41": "64Sg5W1u1xCU56G8pEcd2VPaWiWSzYV3eRSwYuuRJdZ6WHQovJH6jqNcbA6ttenPud4by1PCE8Xhf3xnchQwXWuX",
  "key42": "32LDBM8pJRTNDfHxeAbsjw87cNSf5d8XYTadLUwEwZm1WWLR3xji9WH6tjZqwJ1ocKRDHt9gjEAxoLrgcHKAEvsH",
  "key43": "2edUto7YWv8ADVBEyKxjMSXw9ySZ6aGb6Xh6hPAvszRMXEV51aW3AUpoEXdJGMFNLr69DEuBZvK5vrZzTGT4Utqo",
  "key44": "4WSFxpgQJDkbHarixEXXKaeHopNDKFYeBigZTtkYKJPLAkeW5VSEfpUizSKZuP496rFhhtmj2ZpjL4YaLXaCm6BN",
  "key45": "65FTX5H39voGrZTCCQ5bYioWAp7FK2pzc2KhHZYwET3zuizK87e9sdzz4rwVbh7oiMzxpbJ3bce1fwjfGhsWLjae",
  "key46": "2hsjjV7Qjv8G5euSHxNrkvy55Fim3p5LnDbAtLMjGJo3YFMagTPHzG41RDgwRNnj642e3sxdKVKz5p35MQ4oKTg4",
  "key47": "4dMKdHaiKMc72oUkVncP2DBRm8DsbbPZ11xn9a2VpSDT7TUzrfmpoXuiXQYCrSqGrvriyxzUXaa1F59G143KxThc"
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
