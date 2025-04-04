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
    "3KNrBYJTqvg5mpBgau5GZpeEv5QdbcfFEbw3ik8MbfXtVUQjXGh3aTBzobGkWNK2LMXcdXzECmr3eQU8hM6D6gJ3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59xBvqLhvGmmYLbCYM3vSGeqNMmEbzE4TLf4RFC9rGGsQDtPLD9NwarQwNJSxHEJZpKydmCU1CNiW86iTzWNuA3J",
  "key1": "2rfzpb8GJKUeQhiwAcKcVxxr5njzWjHdnA73U4ZK8Mfe3wQppiWJRt8c8poEvwif9LURfkJhvLhpwjdN2p7opWsC",
  "key2": "4BuWJFhdcJ7Nffc6ePrxcoyaZ2mgWXctGYzDenve2xZtSayVGRAUMSwcbirMAGLKjSDXs9v2LFvDXGH4qeev64fM",
  "key3": "2jJ12THD8Ro7xU6pvHHqFTLiDQZvF5Vyp6vBDT5MbSx3QBeD7cMx68vvrjEgemX8bcUdNJhLb1tWo3jTiSKfsmd2",
  "key4": "43DVg8UEyRJZmiTJaRCuCDUZyR7iWFftBh4o8Pvye35dWf8dVwUejGrtP6xXsJ9sjkK7ZthjJSoZedtSyJenwnZN",
  "key5": "3ud4T8kXG8jJreU87Km3vjy2cCSWJDVXdJKkbzH1eyH7qGzpZMT3Pk8Sss9cpfANXxdkdiMfVDnEwKU3sTXGGtTn",
  "key6": "2ADG99tySJC7b2umsXDtUwpUuAqNqtkaQLgV2et9sJ8iTLypGzfaWEBTsrsM3BEnvVWvmermyjr9Z4rWoWi7qc8V",
  "key7": "59GbejHZisP7txEJJ9rgtkMYxPv4Z28hqRuSGRoBZgdU6VeCooDrTqc7WaGzPCEv6BrhBDtSEno5dFgaNAUCEvqs",
  "key8": "2zG1E8233QuhnpLYtzyCNJ97B2VwEfFkdBUKwMSVqfouvbPUeg4qZE7qTcvMAqBifSmVaJDALhfqwuqqjweiK2Ss",
  "key9": "2c8Eg33xoT1TykvEQWL5JLnHDbPK1CXECdEVrjDLHybLeiYuPBaaM98YQmgcPErMD3Kv72ZoDoDjFA7bxnCCjpDA",
  "key10": "2G7JcMjBXH6nmEDGpsp4wDJ9nK9p3NPKnUoUyhZBCmSEaZxWztxzHiKQgcfMxdUZWnGEuTjKMf3TM6TsWYY1ZvXt",
  "key11": "ev8Nb6RvbLo6NwzHnET4gRtEr1F1aQQTi9p5N1YVed3HrH8Uq8tiBvfAwMtUfHd7Jp4BiekXXR3RwPerz9RTexu",
  "key12": "5aeiHyAX3ec3bca3sxgh4ediGyEGBY7q3Cr2RB9iQZrLUmyYyBgkCER1MsgyUeWWWgAKVBdREhR9Nksi741oh8gX",
  "key13": "26MvJC6W1LXTiSpusWVb9f2U5ptHD2VXeTSMP1we3oRQuKyujhJDVMQzvsJ2xAXAvdmHeGMJdAuWofk3LgDeQ5ih",
  "key14": "2RBujmfPABoic9Wc6is54aRFSSohP1T7yPEZnh5XoiddEkgYaBncPQPt2Yauq8tsrCCC9zSZTRC7E6H7vgdj6mRK",
  "key15": "49p2MraGrdC6v9TPodaAheGqFKjmr1CYPyb4Rd2HcHrAYiAEwyFV5sWahvzyDp6ija7duMWz1HGYkFNXNZhKCmKU",
  "key16": "5eHpf24x2MzAnSmozZdY2wBewbgU2Dq7RKFLPhznWYSPpVPA9Yr25GttrxDA5588uWpdQQhRH3pqS153zQpEs8cn",
  "key17": "4wFPSED4aswxMFqHsZ9E8417t5NDGAUQfjomCdjATsTMTAhHhNtnmUq4pecED7nCQm46tRNwaABszNbjnjMBsB32",
  "key18": "dSz5GCtTk4xWE7de4WzdjpxNQBq2DDnavjeP7h697q2fpN5EEwhjTvypMCSAs1U7bn76JiSju6hLbN5z2vP7Jdr",
  "key19": "2NfeyKe5DXc1y8G5c8h6nkt36iQszRmt1sThNYRcVnDB9JdEdCCkfBmvo9n5GgdYKoB3vEwGvfhE41R7x9FTTsSD",
  "key20": "4vDq6kUfZaFAHSELAvqNWPbDgSvDbDockCV7odVeVeFZBhqEgXnoyu3UbAUoH4UPRgeUoW1chiSnzrWrbmDq422Z",
  "key21": "Dnr6Cqz6u4wCZHqmNFY9ZfCKcbdSzhGMdny1E367bhHPLSDv5uVQjQxBxEqSoWKaHz7xhHDjSryJT7XSYFjJ7aP",
  "key22": "5qzVnmMhuPVNUvRy27myj4RFcp1rHF5r5qkQmsG5QXjAPvTftFuH3eiLQfoxHC9CKNyeVoBqbNACprPwicitXpf2",
  "key23": "2tKrTasu1FcCBRAJSkNWbEhqpubcYHTMSdi98kRh8NvmMqXYFrATUyQZ6JftNiD9YTsSkcDGzgDmuHK2zosUbwAx",
  "key24": "ZfLWWTkN83hJaMWBV2H1mgpxhRs6kcy7U8B5UnXns9qqBiqZJmdgiwJCSWVo4kaWbX3EJgz6DYCLCUU5u7qVYqG",
  "key25": "YZB3YStH2ZUJZHSS6vaosoeWbZimT6adhGZHR3HVNpEkKE7CHkL5oiE5CXo8zA8fGLCcXffj3upW867BznaZaTZ",
  "key26": "4saSLxggsXmh94g3ykQka91ycfA5oSeNPWunmwN4xzbuA5JLEUkaWJsvsPpBookKR3YXJVkCwppYVPgX91n6dTHW",
  "key27": "2SVbxuoUoPPKUAzD3zUqEkfUXt5MZAS2GSSaHTouVNpQdgmeb58Gkpockugs3RnGrTjRvX5eEBst8fPCQziQrHZG",
  "key28": "3sywAsQzGdTbyqGn6BrQCFaj7F3YCKaywpbwUaV7eoYZsTmSuZjNMDu6K4NtZxos6TVsvQbXTe97HKuYgqTJstq9",
  "key29": "3zGfBtSAUvBR2kYFYXFKASKy2NxGs2nLYwaSE1M5YjeLdDtxYrUNFGrrWc96SDpjZjmjfNShKjNznpgkHcoiGxoz"
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
