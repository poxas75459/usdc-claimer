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
    "3DykRyHfvKsphSieYePc3cDEVTsSx62FjzGQoUygsrtaMhzJjQSt8ji7PiDnsWwbHwBYwE5RXfBTXrgo6vbXbPBi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jMFNZFhauR77721ax8KgKiCVvNWsoyY1yYoTVFJVhmkcFCrtd8QGPR4ytuHgWyJvymv5YkUwnYG1FwsTPR5V1iT",
  "key1": "dTJUW4AmNab1xALfrpKK5SFnSQ6vHP5SWCwd1VtiSVkqxGQcAUbuc8hJZqVVZYXzvJ3gs74WyqouBeLmqhsye5Q",
  "key2": "2a8quqHsTv9pHb5AetRzSES3En2PySaQvaSK6erNrHXKd9c62jiF5mn8j2S5kd45BgAq2VRPbZqdrCP5DXDDigVJ",
  "key3": "4ehruxDWB4RprYRrq17gHmhnpJs2A5AYWsggxNbqGGGAx93zZ5AsApqMkY1n9H5oDoJ3D1ZQtkQzQuF1tJKYPnB9",
  "key4": "WjyGsWeoW8FXj4eeZHb4f3r8Bt5C7PCYiKN4mVCxgb9AezP7LyRYodCbEyy8WLh6vzhbup5EFjn7VHn4rDaY3GM",
  "key5": "5r7XvUhgk3DTmtZbGM6ztzPdvrdNMxoop7QxXsJwnjgXYmqdMWCswuhWH9YBsSsNJ6E2xApJD7Geu1vfkQfJ8wtK",
  "key6": "44Mnjk9xriRVPwXk6mw6SvdbZFAtFGvt9KTB829dzxBdPAwkQWKTsqH1gXcPQ41ZK6paAejDozReWM4329Mqxt8F",
  "key7": "44HPwHG9U3GifLXLBZtv7KTPjfEAvDN5ENiB1qYchziuL7uwAnU5n2kpzitx2tJEjviXh42KgsA93hDkSLEjAk42",
  "key8": "45S6pGKwN3UcQrnTV5ZSPpEmf9movaCR7nDKWU7Z2v4AyGVkwVko4RuKmXCtVzAqjZapmfvgF5BZFYoei3cr8UNd",
  "key9": "4fEFQDH6sZUpLeNWXehmzB89gkfaGtkr1UMBQKLfDdd4moLvSYEY2GqzyrXVCzvk8oSDNd3KXdAr7uvBStB5zoiX",
  "key10": "Xt89qoxNk2Eb6cpQv3eUuc9EHTixD5kiokfgXB3QuPR8djxRnGcrtHxSNe1wF4TWcRobzAmaTCf8wQvfnbb79Wa",
  "key11": "3DJbXFTej6S5Rwik6jvYqiCLzTJCwNDEr5YXqV68DyQekqeDjyXTjMWPJtUrCjCu8LFHsPuGKPEp3GXgVxaJY3hH",
  "key12": "3mTgEya34H8fwQVzP3JrRXzzpbF9v2he7u2Z9zjhaPjS7fWZ8qvTVYM188SkZ8q2KHVxxqwcDopjtJN2meinhqYN",
  "key13": "3cAbSbAmsGH3hEAjNpE6sjQfcxq8ykTz1aMZrthnFuVxuGK7Ddc1AG3gK8pbUDF5QuiU2YQWGaQkiLWoPJrPm9L9",
  "key14": "3Us2m7mQvmxFi34SNXKHTZ6rnVWacxCcmsBsZxRGqjR5GHi9qcxcUb3e9c1Mu3RZdqvNU8UemziB6WpyTVbUXrxS",
  "key15": "5VPSzjgY8qAEjJg5egPLxjj5JXax3aEdK1SmFXcVmJpTVXgrbj1UjHQhCTUkcfTCBAHzAQ3kSX5LGSc976QqDxcS",
  "key16": "3sNFmTERtQTsaMd3Khu1uhQTH6wRCW4dUpGPSk3cNRS9fsRor7NfEgNJJPxrKeWUtgpSVFHcNrDE1RSFxSFP9hJw",
  "key17": "d5Si2eptcWmXUkXiBKQtaYZALsivJajG5HyWXSGUzcYr5TSLLrQJ7Qg3hqGYo9NC3D7M5a7bjxJgzHZYerXme2q",
  "key18": "5Yci38RQ8HKtVQ3bBedGLPWoSH8ZfCmLjeqzWKYu8rtgZ67GRjKcMBefm15FdfjEMghMgJicK1MroyDqVNEavyCa",
  "key19": "2uJHWfPjNN9FzrVYTYSieEExXTYt7MKvnRFYJkVf5s4Qj7gkW6i2fVm7PbGPdiYoLGzTJ7KRV9xSmm1bHDy1uJTp",
  "key20": "UrBL8ya1HoZ3BvBzGNadpVeBKCGfNW61pvoHPG7Ka7THLNiEnu4gvhBpwzJjBcwdLptY5Yx14g99NQBa5Wn8Yog",
  "key21": "3HtqzpEHQX2TJ31kZHy5Ux8Hb9cDLyBHy53Y2bmptMuApSXCrGyAvnJmDVCqcmqh5iLhSnnAu2vZ1nmHAySWfgFV",
  "key22": "3HtYXYQ1Ze8T4wrpCaz2KPvjsE16rBUfcNaQeUwBkS76yeNLhusbmgR7fP8UTNzF6HdcSTojmS8Svuo3qUPBG9mU",
  "key23": "2DWvmJh7ZFJvHqNXNHkUWq2hEnaW7vjdBGhvhnBhKVairaWKNN6LJ43sw3xeKuxeDFaBxY7hZuUsPbGHSAuWpvjS",
  "key24": "4Lmj5hKSFuXPPXyeuMFRjYr7yRsUna4GK2Si9q9NsMSMT917ytSTRSKQodScAzVVnsx3vUgZRyHDSzxCyzRc3eSL",
  "key25": "2TG3STNp6aUx5Ti6G2rEWrU3HTnWwzTB52i5q3VTBQWTxMLTt55LjoHm1y9vNDU5oosoHkNQ29z673UcNnChJmpi",
  "key26": "2ykuD6KcRsySET4SQbyskpoY6adJLVe8vXhLZkpYMQASPzncbk6uuXzrkHPA7st1KhpurvAzk8ye7kZ67b8ybT76",
  "key27": "2uhMMrhZ6kor2rRbpkZj7TwKC4cjqPzo2EajY7LjE915sKuL6bjHCbRHr5kkvU367dMYB9MGNPCKPbT5fREfD4Gy",
  "key28": "vxwshB8U8xbvbto3MmSmbPJn8ptU8ChvRXkkfFwkVUrkxb18vMkeF7RgvsKgxMDpbfikjKMaKiMpLraxQgfEfmL",
  "key29": "4p355m49cSsJCbSbDgQvZKWMk62FnGsrTSRBckgrKsoYp2MRukh1YhndBJxfjcKuPPKzZYSgiJNUL31ni71asWCX",
  "key30": "5ts8NoPofruJ2dxAnDTovYbcgeBPY1DtzEfhG8juTxkUXg2TGbuJ6x87sRUgXsYjejjSZYAdeuFvuQNfFn71Aqx4",
  "key31": "2dr8RVxf3r6Zs6QEDWe6TdQafdKSabx7KvSVMA6VQXz2KgYkKoVoDhS4h647VxdvKyCJUESbt8oc59dAjDcTkxhn",
  "key32": "5KMg3rihingCb3RjovAkC9yHSZ9rKq5EbDGa6KzW3GS2MFdKyH8G8h9BUJVNrzby3rGGxwS9ApwhW7YMwgGyC7xK"
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
