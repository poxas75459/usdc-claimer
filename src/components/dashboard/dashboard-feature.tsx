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
    "efVr1K4UrRsRaUYfWwh3uxS9nyoysENWp3suwGurDxUzwQjvk9ywp4LELbWZRyNmiSmvuN8FL4SonJKQs7WeEvE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YDhgAuRfJvHXdDzykuHaqM2UCrbQFkomtvgjxK6FHoKyV8eJQDpggBCkbFrrKRnNT4R95Vug9b4CMMxXPxkNkGA",
  "key1": "5iNonr49wjGNp3htWL8sLsz7hfjNSChTRvXtsx17g5DJGvVqHk7m2HoiCJDCqR6cPRMU5uAmkaED5dYoA9pmQ73c",
  "key2": "5GLocDmcHWTFpcnu53xhBgoK7awggMyAiQ2PCWDUVxEQs5GKsjmY6um8fXRcDbpmL915Z97khZBWsRD5gUSNyfBa",
  "key3": "4e2ZNCSJAoXBsBgf1X2hm3iUGUyPFFymfhCpZbXpwH3y8ZhmvdfszErKeeTpMshik1ZLUizHtLXgLQmYVousWUN6",
  "key4": "3RkNW2xrxthnK7R6Epn257bYdrkJd4Fyny4eoXEw7HhAJPVUhMCmQsWg2ozevPMi7VfyGefYfhexmdpmMh3HG2yW",
  "key5": "z2aTVqF9akDxT959YNNPzng4szR6ySG6KkyAJc3kEcP4TZhX6gnYn7mVWQzzWjXdYpSRqKGTVM5wUTQs1vGYXmW",
  "key6": "5UiD3qgZ6zqey5Jay5Ze7cd4a7GrC3GgopDvigCtZymxnGG1kNFK2CRYuvqP1izXckrsK2qMZk1nEmHP446qWYBZ",
  "key7": "3YEYYqt9gDSGDb4MqubFWNSPhRF3RjQLSu8QiNopLJd1au4nPa2NCB4WYwLvJY7pjSFEDsqCLabjFQkzrQJvfYiT",
  "key8": "252eL1oSR6Pba6Y6VdSzKREFK25pNj92G7gQHCiTg26EgBx39BvApU1Epkcgce1KAMgmW5WcSpaj8yFNUgq4qgey",
  "key9": "cymGX6YeNZ9VwJaeiUQLN3Nqgv5J2ti9Fy8eATQ8RCpgyXVmrbKNmF8F2AcGKoxsKo9Sf2LDXyCdqwhrNFiJtp8",
  "key10": "3XqpUAmqJ3EfdX51RMnzjnEGiipyoX4TpRX7twv1V6KJd2KHn4V8v7dZEVusEzN9Z8AUDN9vDn2dN5weLQ8cKoJn",
  "key11": "4Gr36YgJ1cuXj2yNrvFvJbSW3fh6RwgzEhwrmGFFwFdY9sQSYBLEsGze3SKnkL6kjLR4vzmmAaPtBsU4aVVQidt9",
  "key12": "8wXb1UTL6UYetaBAW3ZPwhpFVWh9V7BGLd3vrE3DRgmbor3HYKZLLGALdoC5FcbfBSHSmSZxVdRRsf6L5585JFA",
  "key13": "jnxaf7Dakq8UrP7SsAzdy8W9pZAKbTQb2r6SeFjC6twMMSaBN9b1K9v9dGj8cp39YwRCWnkVo5AvigLwZoFFnBp",
  "key14": "5HcJViiZdLUTJKqj7mZrCrfvWdREasxVYqCCv1qCgvQmHVXggPNYZEmGy4Jb9yxVtJJkkt9STaw2sGYH3gN8tHFw",
  "key15": "5CjDu8WiH7LZJMmiaH94TgAKgYbLSkWZQHLiefyAU9X5aHLWN9yEenueP9kNTPLmsA5ACapyRCA3MEXYZGduh3D5",
  "key16": "3GuB3mDi5Ar1vosYe5fsbBmLBSpDKWZsXJkny4w2UsvMt3zQtBQKgX4Eptf2DY8dRLUwydimPy7LdwSAsAeUVqKr",
  "key17": "2o5t6Ssqop5ifbkChgWsUeM1ZsuU5DhB3Bqwij3sFfCikkCpj9YmyiayQnpNiGqzuqokKJJfXYx9Tfxyfeo8cKzs",
  "key18": "5Abbw9t2sA1AjdB3KCeiqyYs2wKjJhhCGrL1Xz4rUSgGg5H1f2JubZKPNU9kj9ZqeQmEwB1qjpdPh5SBDw22PLaz",
  "key19": "33dtK8QmuVkHKygxqRhQXpVMrkM5GZ5xyvsUf92JAkUTRTC3w5MRddduRJtgvdJ9VtK9mLK5Fmg2DzZdZ9NbMNKd",
  "key20": "2JtMPkZVQKTz9KPPKjLfa3v6eN2oR47mnQCroGqaXC7rmfKcW2DTAZpybm24LFwMFiUKFPX3FQEAYS4VeXCbTHdA",
  "key21": "3GNLYMGcBCfh1FhyxB3Ss52nVSNTFj61XrpqXvWFcpv2Nk6gkBJpAYQQcJ1wCCU2FFufgvwMKj4ByE6JqvxxLx1c",
  "key22": "3Ujv4xG27wtC93nbj2zvBJLfwovF8y6A176vA4N5G3Sw25WWxUWETvZYEZbkE8NjwFCpVdjKE8Wpa3op3j3qmbTL",
  "key23": "4kq9DujnaHB5tA8nEeHcWkw3saznL63Ucq8YUeJqeWN5MJ6JwoJfw3ZyaLAsZ9uxT3U8R7HEnd5gEsHuxcSddmKC",
  "key24": "5hQbZ2tCHqTfWZtNTyrQaDMLtEqnnMVtYvEkC2emPAcCHS7VGtUMxy8jE8Hg88nVnmNjqHwsUHqz7tHfDkGBxJwx",
  "key25": "5KgQdrai5vzqv6wXCEGvHxQZwkXwWggSoaXkuBkxEqcpGZ55DQNoFL7UWef5u4FQnxzue3BspTg7HYoYW5E1oWM6",
  "key26": "3aBq3jK259RLqymb5kmspFtXySQ9dfnyUhkXQBJUpWSvkwcVBKbNtVVNj5KPxDv6oiEDBgNXKSCFkvQCi5s1S78f",
  "key27": "35yhZYQhBnw6f9pYemP2CCMZaKcAESP6m4Lb95D54WEbiuKWMnqCiMsG8R1UYKbHEnDnpVV4gucP7aXeEGt51ciA",
  "key28": "3w2UrDUm21AtXoNS6GxD37oVGwuG4oVQQfHy7bofCGxduPd5j6TkGqniUpc5k5KH46FtcyLd9aM3kqmr1GqkisMX",
  "key29": "4V1B4WuVaGYiaeMMs9gzFnK9ADdbYaKZzx53RxD7SA4rbJEUucFQukAYmytDYi2xTk4d9cwypEkHjQTviDghVXc2",
  "key30": "TofWmo5HQC52M3dnViMTxysFxKkWVzxHocJNqR7Nurwwt6iqdnaB4nSbaUQXvAkjsj48fEYkjQJdSXp2BQWjtby",
  "key31": "5cqpoXEJ9xvvX3745vVg5zcWc1aHjdys5UE4xUjckWZmUjQEzVvTQy3UyECvWNHoFcLDhdEJ1gi8Kazy9JfFxy5F",
  "key32": "63fdY76QnAvBkiqLszFXfPfWLKRpz9KFCmbn7iRs1hWS4QLuBmyLrgrwTvSGEk1G9VSekdRh2Wgh1YZ8zHzhECTX",
  "key33": "4AW2BX5Tpn9HnChXv7yP9j3ufVGgVDG9ygKU2Gg2LyAn2ZjkPyPxmCtPuHmohQi2qQ7GJafNwgV65iMWbUeebqej",
  "key34": "4xnbPEe2cGrX5nvxXNfn25sgxc8uqpkH2gbP69L24MrW6P2C154Fs3fdFRsqxW8f7NWncfMbshBXJjvac6BzwSjq",
  "key35": "21mHoToAeaQT5cERtnZw3eNq4zq3ZoMNtqSs46GS62PXgXdCBXYTs3piyBGmvo73QtXqxCjJ6yVAt9KMcULGbppa",
  "key36": "9a9fidjUEcfFxfWvGvzq3HB1JVnVWvy7qiXtv8fAxbRZybate3oBX8VymbXUJ1Ti1Wt6NY41B8G2PGCxD716akB",
  "key37": "4ph5h3qcJzethFiyC228KRchEitAmwFC9LW8xGdiL74QHAXuQPSLMXyhwNKKgU2GMqwQpeFhfqymY4X55NyRwVGH",
  "key38": "AUBj4fggzDw2oY7sLxYwA8xX89vGJpGEDYizvV9EE1aDM6NBsyUMF8cBtTxS2u3bctASao7k272XdcvQV7gGkjN",
  "key39": "3vJhKdZ67CgmH7mRNd1guD4UMcUGtu5Mhy5wR7rPNzUWiPyBCFCFY3a9qxJnBMUe3RRUAHtzHZ73AFnbkS2TqDGH",
  "key40": "2qNGagu46pKBf6LVQF8QynCk4t7Crme5G8cqU4JJJKU6KVhHgXTWrywnh8ZMuA1PfYheehJFXbQVSL1HCTRxXUdF",
  "key41": "2MCQDZ7jWQTQfh99HcfM3F5KnoL8sRS7C9iNTNppz7fekaxXMgbTCDKSaDBjuhV3DrxDHnGWC6JFfp5Rcw53LjQr",
  "key42": "2JqX125wGiewoMU6GSxKq2P9VnrgnYiawovEwWAmX7sK2g2tBrc6SqjgdB5nSchgNBAE2h1AcnPVfdae16RfigZ7",
  "key43": "3j1X1zTp4DGt81h4w3Nh8Paz7fXJNRu1UUnsZqbeNxs2UcjjiQfbZpB1LewJ4iqxhHFi7qzRYNuSEXY9tZudMYcw",
  "key44": "PBxLtG7PM3oo8MqsqQTXLzjGUqCqxakM5ycfhUDRzMerPPmDw3VUP4iNGrTLMJsx6x3Kg2nsXNbyxe8tmbj2ZLm",
  "key45": "NC7nZp7WJiLnLSuVCBdzKu7jH4EdaspcCxLfLu3nV3scjEsZUeJ2TkJNKUtt7En8UryT3i8uH137GYC875tLQjX",
  "key46": "bCCdpTGmxKEwcj1GBZgmUbRnjgB1PNtocqgLMB45mTKo9m6ifza9pAsToESkjPb1KM1QH22rnd8xZwvp1VDnEGg",
  "key47": "3LzuWiVSshZXMaZFzmoq8WaEcp3pdhXt1KFD9tF1KnfoBwPztzCzeGW7NUy9DtYwnfTUymuvYQeHym7rqyJAQME3",
  "key48": "2v4N6fVsSW7euyoC2LspQWQpHTxuAk5uwDJruVywUUQmzpitW1Acpygnr6TQjXLtLpZnsEPSfJpfQfmY2gf79kTB"
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
