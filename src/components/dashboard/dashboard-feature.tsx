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
    "sZGjrbXwGaLcD8tHREg63hYY4JJakNnyAWzX1WYQZyYZe8PVTBWPynkjFUmoQzZzqmeHm7rMDKYGVd3wW1pDo7V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FamgMgfo11hBkUZJt9bAhkHJ333A7Z51AfT5RcztGZFDgBYGu8xhnYsgjmfL8wxeYRjomdupuyW8MjTU7dG6Kj1",
  "key1": "3ps6fssVww6oGcp4vP7Knbj3rp26wvsZD7nvpMia36Hq1bvBpqkXE76RNUfxHNbDKuystPDKsUM6MCJWYb8adHx7",
  "key2": "3v5DPeMSqdfqSmnWVjWrVSdNVgF7PybY4KeEPGpYvL8eB3CQDnEY1HnH9Eaysum4ji96TUnAoBQEHZGbws6yxEN",
  "key3": "3AtaAojK9eLMA79m3buxqp46EiHbhzoxpSWbRADW9RFoxz5y2uBZtYH2nQyjjHdtTmz7SjRLffLYtWb7gM3cK6VG",
  "key4": "3W8hmwHqXpJqogtgvMZcT8LsDNEurYFUmNyS1YUZ57S17rz4eYQaqvjK9qjG4wceqyyT6WvAKNXqaVi3LmzcaLDh",
  "key5": "2Hde2M5fwLdy3janXA36g1Ywy5468sQN54u9fB8JXVXpXGSAxo4WAtAjP5jrzZTDKFmmxGQUnouppuHDfybPNTXE",
  "key6": "qke8mQoHBALZ16CnSpZMHRPF1m3iF6i5SDCQ4v2gKzuYjWFkW6et5sVThdMWiojKvX9Kq7YGvrGNm9hYcuLoFDx",
  "key7": "HtxbTee1HkJe2MGMdtwiEJ7rGNJihcoi9h5BQuwt2T62HNNTc9e9UmPSnwp9UrRzZg2MQDBgmJT34GzZR7dpVvS",
  "key8": "4hVgEEMo7afbGLfLjSmvkdRFGdTnGEVwHJtPKgcXugiMjwCdeaduHocM3vqMrHTdY6HyqmC6CKEg6UvYHHeCT6cA",
  "key9": "26esDrdikvs1G66fU1wH6aEBDZZB1h4XGMQpm2DUTcbNwdx2MNGnMbgkQiTSXqwvYZa7deugCgLxzzUxaEhj6baF",
  "key10": "5ZvnbKXntQiHFHuwzaHeBKUYpxzHfydXoN643MfbTu4y2Sr4FvjQGjdgveVTvhyEEHeC1EKEiftnDQzG5DMC1Uu8",
  "key11": "Fzu4JqJQ8gkTicUq37tv3mcZVGSMgRkMpG5PhYcN4XrRvBR3Ar6bVUX5uK8EWh7U5kwzEFPxm3bQfHmy39JxEDS",
  "key12": "3DPjkhthPSQP8NpecmsbKfG5tjuEYX32SUkVntkdFbB3qg7k8YwhZ9DxwMeoTqszDHGE5Yzbui61pKRVcsLuDCMW",
  "key13": "2Sx8jPF3qTspTLC8hbvAeKmr13wyoBrJBPAXiJ8fswa61CTbJ4TtriyjydiTqnbUsUgGezBFz4YJvy11vASYHtE4",
  "key14": "2f8znn33nP5NZRTEBqg7dFL51kkjQbeNNZAnQwyEFwsVDJMzteDwGtXBJNop32oZRjAbeC7x3y9xCQx4ihhXXrZh",
  "key15": "3BYUt9Hr91MiL6dXpeAE34NVmvtoY7UJp8SxJhfsMLVh4ozDJe4oG2qaEtfoQoPR7HE3RywzY4xzjMzqYMgoFeGx",
  "key16": "5WkYbXr6bWs8BcUsUJvTJALr6huRXHNoWFdtJiCEL6jobbmMFCTDkTFtN4uo8Rj6TSiVq8jd2hQGM3pGMyvRAxqW",
  "key17": "NWCf8xs2J9G61bCCbFwFrkTV83Y6GD3nnEdTeg4TuYC5hyhaDo2gnpbmvkatiTagXV2SbBiGDaCud1EAqn9paA6",
  "key18": "4Vs7d1RaAMJwK4FkN89NoN73FEEHNPjHCKqzwejsQ8vsDxZcyhADPrFnndkxDY8jUcWcWZcdJbwhmiMCf91DorTu",
  "key19": "2zj3gMaF5sgAVexPF8TVY2tbXYupGEFYRDPJVqmz57w2jtBhWouqTe7AokiowJZYi3PjusdvtRBDS8u2YCUoX5Wy",
  "key20": "5iihju8sFT86PqfeTbr5tkhdXEoZZWwXd6CYApT4Y5hPmevzep6WwJ2zfCmzMof9XjUxuyz6kEkLjej1HzVwHaY1",
  "key21": "mSdmYsadv7xfa9nPXKGxCXJJSoF6nj3Wxb8fMk1UXewFkkjGBEvBRaKjc3u4nYAUDShL2tgYLGVW9nRfjaHFzd1",
  "key22": "4jtpdPusiWnq2CZqmAwzKGVmJQigjPpHDCJ6K7c7kjgystitn4EpwKWt4tM818RhBWW11YnsdntHNREfY1TtK5KX",
  "key23": "292ZGMQjJbDDGCTWUy5GBCSvLukC7DdjJFWJ4pBbrv3adB5W6pBVUkcP4okDhZhKwBS5pVE8i2YZUxi9rrcDnQSZ",
  "key24": "5QqsDg5bFtqykSd9maiwrsiaPL99ZFXbPYToLyLTtcnTJ9SXNVvLaCsgehbv11SbgFMrit98xg4Zn9fKqQwxo855",
  "key25": "3gym3p6D3YSUD1E1ehSHNj8kvD8gxZsWBR7jj9txbRJ2giwtDWcbj2d1dfiU5NP4oZpZbfNaFH3S8NbWXTx6hpoZ",
  "key26": "2DR4wup3TEQ6NKRgVHCS7QuSaWv7xQ7KBdobH3Yt2C64W7oEAryWvfhEpxeRC9Fr4kED4RCwhtkT6QokSLCZDu9w",
  "key27": "66X5Hr38EZNkUmBLtNNVkWiVjQNpkMhwxvFobckqicjrwjvuWVxqVozQDpWoj8ZT1czVTFo6YXyzJ7bBKMm4ANeq",
  "key28": "3YJzAfbUasrgcbLhcnJeVu5NcxXswuJapcewPwj3LoKNu3mXxEpedPa4mUFQ6xagKMRKmY2MnuBZPp2Rt4L4bk5v",
  "key29": "4eYy4zZzNZeA4iG6nUnD8vmBnqxdXQk1zyTuLUZDpgpEz7ugzvFmckYCCP7F3dwMcKi8Bk7fBSLLhco1jyxqXve5",
  "key30": "5KNCDQdVABRXGDAt5GDvDZeDu9TEt8ELUG5GktdySnSRgVqMg3yu2qnSKBGvh47nuvuZRLf5nsH1GAkpeRF4jY13",
  "key31": "4hAcNmeQhZb363fn25MnxvutqKd9Q7upDRj9NZBG62KYwavos8tZQnbriSXwtCFcr8QkS97czKEvD9eBjbAiJF8N",
  "key32": "4ivtRFzbbMjkrE46vJUD2JFr2jtxzB76RAkGNhFa6ELtcxGKSFDuPMmz1UuxjRmHYsypmmT2Tfa8gsKUUcufc1tk",
  "key33": "6eNjd9v5ZGhgpsVgn4kiYq2sbVgGbawJVGKC1FA5j8UyeLfdhsxeGYsg11fUC6m6stfU7ReGwU7EegEmT6ceW2f",
  "key34": "3HoXwL55PWzb3fXB2VjpvP95vGSZi6oogLUuSi7rpD3UzDZGZfDjHSbqgnHHAoVBa8zeSVbg1i1R2h1Nw9m3H9g3",
  "key35": "5EpjVR51UxPa76kzZL74N4mWMJ23e2oTTEdTQCQWX2xwSaxfbyAVXkKJPjLaMsfcGFubKKr25TYd1r8eonLUyFwX",
  "key36": "4BrgKyiCQeR6G7PgNdvapeXLpiZP9N9thFRSVk9urM7tDNyd5ycnsH8pQbkN3RTsGADYxEAU1k1i9BjuuqfdDkk3",
  "key37": "2o9J9qCn8xC8mRtdG2vET2JCqxzCKtQgJ2fU7NR1LnCEC81owKAVDTNTgnRVmx3oSaZ8E5FemZiD4up45x8MkFTf",
  "key38": "2Ypbgzkk15Jsnu5uj1C9xgBb98vVXxCffWc69DJKHzVEWkCF91dk9aHw44hiyYwwTJtmVfSKpfYWt2vqUEpe6hmd",
  "key39": "3NJyZP2gipKD9wh1fsyPhDHMsaRzzhstHbJarXmgi68A35KTbvDaTJqSp3KzFEoKdAibqXUMRDf1YHJrAKDdRcsB",
  "key40": "2pSZLrxobGsg5VQdbiovXXEMUX3SMBvAb5FxifK64pTQ8CHvFhMMVxFbfPPyhdxkx6d7YcKdCiavmyEd5f9CZByV"
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
