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
    "3DpgBsRoXXAd2KX2L6GP8gFUAHtJpz3qrQvWJf1Ak2S32SxdGgmKo8gAotmtBVG6QrpRAFy6mLiW7Haro6y9dRrN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2faQ4SYE9Kbbp9YMFJYPjsiDguZAUMaj2KpkoHS8kxWjP3c8jvDM31FUmDsa5RoMHLKzpaxQVbNS5qWu4XayDBap",
  "key1": "5GzgQaohd7WJoBFbe7bDAqHBVyTt9BwKQBXvg643tS7KpPtC65ZTCgCAMYHpxpr2PGwPSC81Ddri7GVFosgRqcEU",
  "key2": "29GrvEGCotVfW5mmnvG44f5EuYjxu9k1RbDsXbA83XXgw2W7yQXNSSWJGpg76aKrDtfT7XuBvMb9yfZqwEyhNGYN",
  "key3": "3HADdeo5RxAAr2PUbosbDTkvjxfxBta4RQMcqYMyeZfj1x8yk5z3ndNWgyTGeafhYNtUBj1BAB6bzid57jxqFVu1",
  "key4": "2qyWtSwCea4N5tMRNi1dTCz5jJbg91gXTmEsE9u3Go4fQoLaqmu4ps8nGWoeUiY7VFVzweUU9MPa93KtcYfmW632",
  "key5": "3k13Um9cogRojvMqL4xtEHh3PwLgXjrKp3UB6HG8PgwAB7zoUKopvxJb5G9n8t3CFUcTU1kF2xbKXtR1C4fAoSF8",
  "key6": "3YecWmJWpiAdXd7us57qgM3Up8JWM9TWSnEzpcoiEyo6HNvJ1baGHFaytTV6ysBX9JpWi9vPdQJjqVGvRP7MA9BG",
  "key7": "2urqmtELjVbGdAycbzCSuXQPdggx4x9m7VAt6At3FAqktofeTLWecbMeauZJ6RPv8wzWxsJNuN6DReWWYeFxQ9R9",
  "key8": "yKyUZfiHm7eRA7881vBmK4cqJhPHxw38xiqYhkn3KtC2T3Go3odiny519V78xBF7bHEw7jszTAsgj7aetwkWoMr",
  "key9": "25a6Hvpk2khA14doftd3sZPjatL1XWRzpkkwFks5fAkvETkNbY3Vr5wbL8jFg4xW47YAZbeuihER826Gfa7bDHS1",
  "key10": "JYVMnSx2UR8BmsaS1hXvvoALmP1ddDPLReiC3ivHT1G3vR5JyWq95DZvPoEh7TSQ93roR6gvyuYP6Wk8csYcWfK",
  "key11": "4aTpsiTx7sZPihtwK596uXFA3myW6f2TN3YQQKfmrJWqJJRVcJsdrpcENwKs1PwfZ9JeY5dc1kn1yjC5RftLX91e",
  "key12": "4MPZKKSnQBGVLHNGTuMZ1Uh9d2VS5whDKtm61QTtdX6QqPaGLAojubYRySxedCVaX1DLaMugcRnc2pvYUanStnu6",
  "key13": "4MGRojC6QXyJA1RpR8Z4hvVQaKBvjp1LM9ACJiHRAebpNsi4T99P3SxnJaEr2BdroQk3rdWuSHLj7HWiBTQuXaKQ",
  "key14": "2MP4gGiCgV3ip9sQQhAqVj317S5JHgiAAJH2MWXY1BYhXXBEEQ8p1UETescbQJFVgzXrrFUFSVybVh8Kt9bapK3R",
  "key15": "5tLNBp7AKHXw68qDXNQknWnqJBTeUn5YUj1MBJ2HFjH6qA81wwDwnL6tMb5Cq2KuWGXuoh7KrvxdDK6tvaM55JKQ",
  "key16": "5Pj83Pqm2ZkgADvNG4MmJVqJ9CbqeXFfRzA8xnVj3Rvc7VUbdv3SMfdiqGLJ6d139zGLfFoXXwKDzJx1An6VomQr",
  "key17": "QxZCVs3AMUn2KNHZ4CxABQing4u5Nhy4tES9qeLQEkrYKF8UV3adUS2HwryXGswEBVKry67vWSN2NNzsyt76ZaE",
  "key18": "2E1Fc5XzgkzEBhCpkrdKLEWQeK66AVgmbZuuXy9jH8a97ez9JVDB1xQmGW2GyshpQNTaBPRLJm18RYC8zpodYqs5",
  "key19": "2XYdPidjVgDbyTPsx7PJ3UeisXsLyA4m7Tb4eS4eJ9G2ouL4e7Tygcgaha3sKna7Miyi41wFjWpcDkRaSULuUZqT",
  "key20": "cf2d1wcsixmP45HyLpJJM3TENq5cAkGcqkHfTNDsXfcWnUW84LfJUjyRHqPwWUcQMYT6xSXmKDqsAuePgcTSsBU",
  "key21": "22WgRMCKkb8mRtQgwUMRSYC9bVtL6i3ocCqTyBuBgBNQDtUkNrndj7UU8rsccSTuVGiGMekG8CD3vcDSJYJ4rptA",
  "key22": "65rEPV9U4Eo85j7XjbEoUTYj6qESkLFaXcgymeZ1zpQbiqHMP5jPT7v5KDqJRsE52QJMyoD8bUFMwkYjjcxtjuKC",
  "key23": "3oYvSFXfYg2ferojUCCRar37Hkqab7y8zoiPq7P3FPjvRAczi21r58rmvVLeoNPypkZRij3KoB6nfhj6ufx3LStR",
  "key24": "5M1jQY64Tcwz9MoSphVNdGRg579ShV7z2DnbWYedws4TncECKrVJEYLbpmMwVQSnrfkqQxJTbJ4f4Z5zgsho2sDA",
  "key25": "2ZXuREZ1JYjkQCJwky6KFk4xvLtu5gFGarhhen2fDG94xLMaMq2thbyVu7MjxuAqZwcbdTjs42BUVWztETWyvUvv",
  "key26": "4U951zk8wh9wgNEWdvrJndecoKTC1hQiKaM9ifDoUGiLmJKhaYy3aavhC928REoGYV5S4zCKj6eYJhmmKqKyGT3A"
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
