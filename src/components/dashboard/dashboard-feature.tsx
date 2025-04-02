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
    "3K76gL2fedSgTcCH9NtnU3xVToQLwJMLA37asjumtVW1RPythsZsHWQK5MT6KmWb7XVXrRBqwN5ooicVTNnjnpkz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37Qfrg5wRSHA2KWrcSWUp711C5a1rVZSqo4RbvPFU8pb4gVzLjBzEgWyUgs1Egjk7NsZU5egXffzgzinDjGjnXbw",
  "key1": "5aZLH9Wtqm3pahFLTUiWyvDQhgpmtXjw4TMnKBseUDq4XAEYUacrVckL17qRuWdkZpKiXsJxLZkUtPkn2fsuKjyd",
  "key2": "5omcVYDU812kWksSUwEkvURsATd2CeooNSoXUo728gaGx32fLzXZaTzDgnmL2RuwhK7PHWezsr8eJscTi1LmG34v",
  "key3": "2m6AX7yEbyeGKFPAAGtB31ogpcqkNxJyTqUGcDLmf3NmVoafgWMrctEXMnwNBKRZZngrwvLQixFHV1NaZHvwMwgw",
  "key4": "566RhaxWopNFq5LtYC5ur1EFqanxnPJBDC3crGTGbKDCT4oWhB8b63QhkgU5imqdNzesq7Z2ANjLRCF2Y6wR81kU",
  "key5": "2V2zz7g43o3N6ntKxNbAFWj7iFBgfbMFgrhg3mKgFyKS8tGs4EkhoaXoen8XGnsSE1vM4uzTVwS3dETVmVLu9kyk",
  "key6": "26qJNgywzPvD5kjhinPS54jiDayUnp3KfkyWnDkRZ1Q8kgNbdcGRE8NJPy9tvzPn3uQ1rDfNXLAh19jmajgjvHp1",
  "key7": "4NEkzWx9xtFy5o2emwBukKrU8JGw6LXBUUXM3peX25Uo2Ag1J1PxJLFkdt9Zc6Jb3u7EedpRuV1qYBZ6WWS9GpGP",
  "key8": "3F9Pgpdi2QV4Y6ry1ChKW6rr7rTYngp1nA5VP51mEgwdWFoYgMQgafYuEy4GA38Ajf5vm7Da26eUAL23efqFD8Rc",
  "key9": "ft7fpeMS9HooFUgeSEXM9gh9xbCd57A8P5rb5z9bUoTv91KEELiq26yMk49hW6MjKNAssNCkRLwxpvitv9Mmnk7",
  "key10": "5W8X93MjUXZLVH7frPgQ6QW1MjcUCozspwq8KQTsDTaWNPKzXBQNn8FkRjVzdcSKXkt6Qc68t9zcfoNJcFL687Rk",
  "key11": "2ukJ45HHz34eHSkCeiemrCKR29s5rfNxYdDtdTSsZrwjFd2qNnW9vnBwgYFK1BGrGWsaU9DjPwhYtUjU5iJv2TuK",
  "key12": "XigGRzHEdF8jsrdxHRFp8ThpVTT9GyxFKmNCTwTzzyk1ekynyoYg8sqk9TcjGDFpcieRqVSLWXPwTsZhTFNje9A",
  "key13": "2sK3X9DsPsGiQ69qbRXzScb4W1x8w63GdNC3XBmKXfkwMS82DSfiqddppRoDLyLxtB8TuEHJw6h6bXTRfJNZ1Xtg",
  "key14": "3WPfJkTq8YrMv1RHufrPtWQuGBSD36ebr73kGe4ZiceeE49pvMF8zRc3fq6sS6rPssbhrkcbzFX89nvY8BEaNPrk",
  "key15": "4vxjRfpGyZKJTwPqD4hwQBbMZxQTV9PqrG1WzkCgdaoZm7SHvUocMRkMCgLYvYQU8wsQdKe4u15iLjBFHpqfKEdC",
  "key16": "49VWKni4GFhmcGK9NkVYQqo7zCJoKqtSV8576HFHUYzLqNJvjDfkpPszUWi5CBWJqQTjgYHSjn2AdsbiBEW8Zb5G",
  "key17": "KVfedYRJ8LHDJsBHZ5nwLAJYHyyrSGewxqS8FHMU81RsZgPayp4jjrW8BLj5bXx7CxNfDUNpYowWWULmhjFzrXB",
  "key18": "66RWsCcU4q4Q7J3tLpn3k833zMp8Et7CiTptiy11N9p5yHeQBVbKT8dgUrWezgF5oN1fkWcZQ7tpHjrkrhMG9r8N",
  "key19": "5xkvkBP2yALrE8e4KmM1VRoGeZa4QsY2jvFs63xcrn5FMeCZXgCEEU1Y8rditqmkFjZfdr4uxuYaWkPMegTbMCBV",
  "key20": "3keDF36fmyocKiin4PDhgfRxbVodGJh2meEm9vP15xGPwRxLtGUoJbSuLkpiJVGKVaVpNUXW26CDZXY8DMC9RPD5",
  "key21": "J2e3YbVjxuj7cvQw6sPKvXZp7P77KXY5Rfnzc7GcPGSvEaWJWqU6BvBt6PdscqLLcQEWKXsmNMurRptSzTEeat6",
  "key22": "4FwqTQXe6jQVrHyVHuUvzBGHNoJpkwNdqxx7hF8HoTb97jUr9VvMWL4LV2xhkT6u2wB5QGShU5ateSvM69gsapSV",
  "key23": "5sQnV1z9zb3aUoGKpup5teiti8fRv8iRkyB1gJLagREdjLVbJUgHesC3x6jByezxQ3oz7oJnhHJNjjQsA44d4Azc",
  "key24": "5chzb7Aqmy2SVeeadxf99tq8CpKqQTtNrdDLena8RViYRpVK8TfAAwg477G6yrvSaJc7Co216rz1Fk1arz1m7zfj",
  "key25": "5wk38tP3yVGp7d3LiEnMuZXHnwbrTqSgicK1yMUmR9J3MfkhKit73LLAmCSy7bmgwQZ5eXnmd8FoioU1RXPVgVJm",
  "key26": "aq3Peuqaxbkg7RKphh1zHRpf6tcP7UyotJNUUY38tYsoZLbShCfTckCD3v72UcPHkutK4F2VGFBGnCtRGYw88Qf",
  "key27": "4vDKSsbBATaAuL2xEGGHm35zi4cFxBynLkkXyxWtDFJbEun9TuHWnhzVoa1Do69c3g4oaCduJcG9iTLUgTE1tf7n",
  "key28": "3uFYUzkAThwYLhvQeYJYTM1iRuNb3EHBod2wBjMBnhhnQPiLQEUEgRyeM1kHMXezKqAus7zmgpa6yoBD19FNhCiV",
  "key29": "z1b7M1tF4oB5D6U9v7nVsQqWQnoNUpwXYCFzsrzQVcPf6ywLx9uQcXDxkJBJazjt9SJMeqzujQYeHCyBGwceYdi",
  "key30": "5gwd4XS8Lu8UWSXNaRCGdKk73Efjck8iZypTLiiVAqqZLGak6x8ydd5pSrJrVep18hw8bWTS4bzrpdkuc973JGXS",
  "key31": "3xHXHHMp42j9wyPBp4dSLPcj6qrc45M3mwVWipYWqVvDfLr2qv36wwrumB5pRUYU5CQch6THihNoFwDDnrV296oY",
  "key32": "4sQqwXg1r8oCZXVcZseYjX7YWxwqdJcfdQFADywdXhq3RFxtL9Wt2grCRz2Nphxe7GyiafZFi8qLSY6EgzUj72Yq",
  "key33": "m1aSBtUVN2U6mQehaHQAQQS3Z4s3mjtCTUmKbnXRTFgNP6s1NBtUKfqvMx7jMX2TgjaD73MVGPNMqXmSnXVdMcY",
  "key34": "3PH6tm5bpTFT4HxGKymEZbe1qXLgZw3fSmPYc2CmurypkNNfrfeX79uG8HnKMvaqWiB4L6vFR5ZGwvvr1AdtNmJh",
  "key35": "4kHaYkb6vM8CLs7or2YRTGxgWdns8PbC1cw9TX63t1FkUroxuq9qfSmaXYRmc6cDquYmfMPQ7SnAzoG2yJEBudvm",
  "key36": "ngyNung5GLuAekbcbxYKKi2Fga3XzGWusfXX4R6U1NTUbYVw6Dizn9Gr74EMvukbF2qkbjgeayCjEhYghNCZUm8",
  "key37": "2U2Qa96KyEVNxjZ2Hngyz6GYP1MAxULGTqUzQcRE4gQ5SqZeuxC9wNWygpbSAAM1pzx9gUieMg19qJmgpUUjin19"
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
