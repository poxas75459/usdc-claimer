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
    "3F4id8RibRL9fxAWDH44PfouKbCwwBPh55a28Qh455d1bT7cPdqXaqNrk9f1yf493DXBNfhqQsvsKoEKoYbNfS2z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2N7EHRFxiwGUnyfe16p46nZ7KpyawmMpBKMHkj75rnJfGj1fvfmqwZER1uVexEfvcu1ogvtQHQKALNKKMS9bukXR",
  "key1": "5ckWnZrSkBNgiMcbNxHAUas4cLHZX2EQEHLe5f4UcfvptQEUHxynpN2GPtF1hCLxQxj6fiS5W9ixwCpUbQYvH5a5",
  "key2": "2fzT9Lm6ekeujNwkTY5LLjjeFfdfiBe4BSDcvGx5mXBb71FJkDkT5jBAJuDKSdFwyEkknthiUnapiDKgmBvdBNJi",
  "key3": "4uTLnjHcxTQw6TPDSLapfvhm6onV79KhFA8kRKfNW1q3bK3Vi5nr5p6SefW1cyYXwE9KmS5Gf7MJr62Uq49FsbYT",
  "key4": "5TtxcFg1tzrFgCDBoyTUZBhaT51i3dvLi5joB4TE1Y1C2jSGTW6EmJewzo4yvvwDFVHYr1YCLz9iTGZCqijEXNM9",
  "key5": "2sSCerQkPtSHP3ze9ZhMuuaEojvk4PHdXGdqzAASmsv2ixHW8XUovNTSRCZ6ZqE9cB3rT3tvWCwKX3xn5284trb8",
  "key6": "fh91UaV3UfesUGbbwgw3UY7V9uASdoTueYCUZg9xkws691CmG8AhAk2mgY3froSDzj6fqqRXA3qJ6YQCHd2Ps2f",
  "key7": "2b7Fs1PjhY99ciw9H7SchdiDctcigQPh4Gta6RcjJV5K3UMMMS3YUyGc5XnCQVQHim8xbp8VoRSh8oWGrx1gFEtA",
  "key8": "sYPb5sS8gtEb7S2rVndRJ3uw1dzfk9iHQ9QRkLMnQ2rRWQsC8SJg8n4fpw6bBJL6vd33PQxthuxiZ7xrWFUdSuf",
  "key9": "4r6MvreXTqRbTQHjSwsk2aT16UZD2F9QQgjYX9JtFAd7DrooaVGE1zzX9BAUrJYHzzHg5XSfrCuiC4DrQ6G41MBv",
  "key10": "YgoLDvVLo52VCWkndqN7ciyj1M59NnqzBHB7K54SU8618yePFojPjhnckfPyp4vsmMkH7DQg8gc4gsgprZGL63M",
  "key11": "67QELH1vmTPXxrGL1YR5nL9rZnGQcLQt4dww6VVLmsvwnd5bZ7JSoLhUtvQYtzGcJcj33LsnMSpurPZoSNET4oUU",
  "key12": "4HyN9k6cHJH4SX7QVMwjHi1r7xGynjdd5n9LD78x7Aqvueqg3GWFyWfog3cJDvxx3mqF6ZmjpkkEDAcyp6KpmLVy",
  "key13": "35TJoeX3K8cG11BgCPRHe7N6XUDstrPkJtYDhbv7rj23BZ4Q1Z3aKVh83DtJovhRVwLNjXv3MM7mSvg5jZXYTmtX",
  "key14": "5tdkWGvg67nhg3rWd1ffkNwmG4PfSEB99tNosDNsTYtDfdiKCsEawCCcrbpWm6UnMCmWfZ3Wh2qybth81m12geR",
  "key15": "sGdvYwmFzLgeeeRoHG9ss8xAKsZaSLuTGUkaS5W2zBipqALXjT6NdFBkmQ6zbxwFqk96CZnHv4uY2yFc9Ch9xnW",
  "key16": "64T6PQmdBquWBuNYpbASgTWyJiqGdQReXrpp4of5p8bLp8o1segX5jgjoc5SJUWY3mBXSSnXmin4Uh7CRK83Wur6",
  "key17": "4adoSnrT7pAqayFs2pPpTq5cpfskeCCPuceujnRW3jC7EhnuxSBvsj3Vc6xrHTYxuVu6tPqvK6tLKemCThFCaPXB",
  "key18": "2QANUvKnQKB9ZkwTmwoc4eWz52rjqPAeBbg6y44oo52Pb2ezWHSzDsoS6XFoFwCCq9DXReiYh2M53CiVL6b8AB41",
  "key19": "5gx54JQjUbagZHZ1A3wZXLCTpm2VQxyg3pxE2hrTK88uTqNMw757VmUaDupJyxAACJqRpsKLKad1TveJi1HazQiX",
  "key20": "2UcEewxmUaRe5uNKUxDsDakj3hqm3tb1GFQoGjrKUA5nfhJw5fAFsHLuDwWpCu5GYznbjgGAcSMxYVSQR8k7LANL",
  "key21": "2YQMxTQMH4LHLTVK3KVZknrpEErkN5bWzNV7qyHUK9y9Ew8qpFH7mY5QqMAC7RDpvVKvKzfpbT4C2a5cdxVLjR73",
  "key22": "4S3inHQ5MU8etaNsiQSkYM5tSpT9if7iXjRKvWqH5cfFupDcMDEv353NFbdfNUrGMRUYdxMpZsPCzRFYcLPUxbTd",
  "key23": "5GtGB7KFqGqukcAhkqt9QQWjLgWxfLFh6seqB2ZyHJhey8xE1C2bFb8JY9dGmMfwdUKxnViBg7ciD1AUma3J1b15",
  "key24": "4GmJy8K45eJ32NEAaznmpveagCjDRwUPcnf2QHguEUpsmkcwNchjNnb56RSXj5yiDN9cXyVaJD88stVhafgFFnUJ",
  "key25": "P6TQnPf2dvKg11CRrC7sNimU77V4xx7P6nZLY6mJ8AMJV6mw97wS3uoNM6niq1A3KfLeJUqpSFA8Md1XTSujcEz",
  "key26": "2ncJQeYRhweEu73nSNRpxwEeraJ9BxkfH1SCgH1va2yTXmwjADuETgs6SAaBaKJWQ4o8Ndexn5RLMVomcfnDSwcg",
  "key27": "UaKRZnFmhEzeebyEfDjqCh45smhdfQwZdZZLr6dBkv3myRmXq4am3AJRRZwPKet2wmE2NaUZk6y6YCHrfMTwEYb",
  "key28": "3rrVJVJrvcbPQW9p4yc3HypNK7uaxnq9q78nazvejGMf6FscFcjiB3siHAEH8X9A7y48baWsMTBDUAd2J3dvsy8k",
  "key29": "5ggK8rb47qoSH8DDynNQsFboNbXJ9ggBwr99Tvbg1jA9iURkfy5eUaxKLdSLqybnu5f9QhtxZhK9RAMfbQFSYCeB",
  "key30": "21eCFSRGnY4Kbc4VjpbQXSCpisWgSxvaGgcTRJyVkH6tY9qhkWciy8SFpqDJP8hf89NEEMY6ZqK4Nb4S11D5V8jn",
  "key31": "npwjE1HNwVpPVmqiMqQxAq4suJGWyAvNDLRPon2N9B4egsJEqBg5PHotcetJJ1n9LLstsiEoKSNePUFPD8YHHME",
  "key32": "4LsutLseihwpLtEgmyQQMs9HKdvYmsRPXJXtMW5XpkFhMaFgyU72KmtDt3BoZJJ8uVcjcn6wBXnxAewp5Pk4GXH8",
  "key33": "5JkYZU639ssUiUV3ozS9eZaKQZb62KtWTAVmPiCghGQX3KpJECPDNF8rDy6kXr5kamYM1WocGMQNRkHQr4HUCshW",
  "key34": "42bfwifnZfFvGL5ELchGErsRCEhgut7uU9RzArbrVnB1NcygLk1UqH8VvLqUcjHFmMrDi8FQVwxdhDJgCtmjSZT2",
  "key35": "3mPFDGu4XLXRYXRp5ZyRCirunsGVcpohAXeBMD69ZMcJjm8NmNk9Jnuq7w8mEDZo7GG5sXg4RivF5iNqF6BPPdjh",
  "key36": "5aCSpMS4B48dEpdijSxdjkcz4DuiqP47re7Htxtzui3xVPy5PMDpWdn2SkpUh2NAGLchyvrY25Y9Ap6kD9bwxRmc",
  "key37": "5Wxwwk89TqEHdD2x7zgWTu5uCU7rBkpJz31f5brPUMRbRgXG7naZZUEPcxoQg73Z6FkpSqPF1Yk9wo9xR92rRgCA",
  "key38": "537qmnn3vPzwNbQwPnC8mneivp1bg2jdbwLqfb1U4oX8PxcvhqEqovYzdZbT2nNvCLsvfLDhSwLFty9w9EdAb4hE",
  "key39": "oNGqvumujf5oy3emsgPPMq2Moq1mtCnNTZhhaHKg66vkUS6zU46CRJBNhWDepfKSCT1LDR3xBNsmrsqWzhRTVzX",
  "key40": "42KfE5imvn5CrUhwV8hyEztaVWr6PKr3aPQtC35925oaBiKhsUNCcMkuykweoGgJyxrg5RHkr7d5C2ADqpqfAP4m",
  "key41": "65TrUP2k1SMiFq4U1869EtwWiLQzY1HGEWwnHj2LmHmvtsNYuJYuNE7EFJ6mSwQx3iPaNzS7kW7QSHnomfx2dreJ",
  "key42": "5AJcTApRg3zomi1TdSGBinbUib3W6RbjSAbis4VarTJuquZEsv8HBtY9WEUMiTmJ122A1rJK22EePPUTEdJkhLuF",
  "key43": "M4h5i8frYEfA9Udwr2LhtSfWm9FTNzfaTyp3HhNLpLz4SLBb2qSZQhS9uR8xq7V1GPmzmuuHqFc38JcpGRZWw7D",
  "key44": "33dNrwMraVUTyGRcbEuu3uRgxdkdknPhVLLz9QayUCsYoEUDsx3LiQFeCqSF5MxQ1E9KaocAmwDC6EpEn6Lhejn2",
  "key45": "5cmnGAmhtda3sK2pUsxMFJCCy9B5SHMtLanZifHcWHxTysBATNyH6qyVADFMHq79QG8wvnT4hqyvUo8Pr4wN7W9o"
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
