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
    "3iQgTk3qMy3CBjKDmFGPB1PgySZtSny89XtCLVqKTkYKyBMPN3hxfYZExLBp5n7QiqR8cRKVWVJBq4AjtW6GFXek"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JGbbujpGmsoEqnq3WumAJnjdcafi2oxffsnRykfYLcGDGVPh9sEYud6gJ5jv6RQDfY4iEYHDiGuGhZDnuZubEJq",
  "key1": "52nqy1qrWQ6cqrAHdXKEhyPmRD6oJXwiWZTHxN1BhB9e8EwE4uRpjp2PvqGB8XPMLoG4xa2pYau7Kyt5QPk4QZNu",
  "key2": "3gY8oHkYjcGFXgfTo6LAwik7hj754X4StfGsEUZ92A9WvXpH63XyJX3QL68hYD27zCTAAn4atjEV5477chSnuNan",
  "key3": "5dtDwwvvmL2YPUCBrhTnLc8YX2XXbYnVisV4GAC3NrGvjzkKaedrRTBuEazJjzo7AMJrx6tdQ8dTWhhNuD4yBAeG",
  "key4": "3AKxcWS8nr3vZYgqqxSMKWgU9ATdwfcehG7VpCNfUJiL5xbKtAqkB5bfCkNCYc9jLQfZHjL8GmBA2wi9AvpV7PNw",
  "key5": "2oLgyMpo6YjMwSPitZJ2BJXzMnFHeYC4JsSid5aVPja8xaFD29tJ8DVhmdiL4Kah28HmL7yqCd5azNLBVLAb9VHA",
  "key6": "TLzwGoE4n9YKETXCS1b3V2j5DXdtEbxZAvWtKxzfUXJgwQLzP6nk6QRSGBzuX1eq5ZYiYRRMCZrU9QeEC1raC79",
  "key7": "4Wmau5ebNbEfnhwtAUgpz2eE3csX7iFohhTNMHaDQAe8thQXJn6SGKcLDwQkaWkMdb3KUFf3xZXzXSU8Kmg8ypCq",
  "key8": "9jEnu8exk72mkpzmArHRn7MeLgUD3ixMZAzthodNu9Gnne98SMJQoY7GFAXaHFepMMKdpeq3FXRoLo3g1B199kV",
  "key9": "3aJz3odWrvzLm8LuQbvp52PWoftitMGcZXLtd5XiQucJBSXamMuoRYy9WLf54CRNsaccaFxvwr12MnAWMJKGmXH2",
  "key10": "2XTKmRdHFa3HeqHsnMpysgzqMfm5nq3SJ3iCkWipP5qpKh5ShWe2are77xnVecvBgiudnqxfRw4d1z1mr94pi7nt",
  "key11": "4zT8iLiXnXUqHXuEzU8kwycAzqvNRi6PsVvPuRtmsNJroqJD8nqzcfoxpABaziwX3G7yhwqTTvPTpw9TY4pUGcdr",
  "key12": "3RML7SSnLRaMDp6xdy8HezVKoZC99WcmC1ThhUQqRAJ9T5rgWdKoJfpcymYt13T85FzLgcUFgzhvHy7Sje6x88z5",
  "key13": "4eSYvdL7Vbw4E3J5VkAW6Q94GdF78ZiHM7KD1sSKpZGUXNDVoe3GRxc6nBxKm8mShZbjxA2WtAQfEbAZhaBjPb2k",
  "key14": "CZZbyoabb2nds3KajRGM3ZnxRoFSQvxo6ZamajXcAEvNw1NaEJrLvDicmQCDWMLcVRHZUDB7RgnuucKFSZrv5JD",
  "key15": "43UHJxw4naMEFbvn98KPnxePykWuUHG9K1TxfGq4jzbthBuDp6YDmsVycA3wmmEPPCQQxM14HTRNuEpbYeHUKXm6",
  "key16": "5DvpChrMNWxwAzgqdHhbm7L54cf42wsWMVFJNUQsRxhuuWeoEWWHYFuHiBTn99kRrRoa9znp6FziTXFWNRcJGbGk",
  "key17": "wWQTsdneveDdo5T9RimG8o5B989um7HhnqmwNeYeSWKndBxARkCcYR151AjxmBfK3mnLeuB3Yc8Noz1HAX268zz",
  "key18": "37NXZz8WjNKrT9CfF8dFsdAhXy3CrbYq4xzK1CGZj8KsubaLvQ7BJjwXivpqZpRNvoC33XTMRC8RYe62Kbd7bsP",
  "key19": "2wazY45fmhXLSDUwVpjP3nzjFqAxvcgDrue1F4JhNJcevDTZHrKb1BqfrZg1s5A2NCbEkJL3MKfNAG7kWNz7rzL",
  "key20": "5QBZkxsJqFnYMemUQ1PEcsLCnC8DPUfQooFvwy4ivkbqYdLkwcMy7PWoW7rSHAbhvsNMJ3Ms3zAjrhFfR3RWsYWW",
  "key21": "4FZnBD8dTBrvXoa5unrWNiUbqyxf3RDaYn6CdpXmCNGcEc1uuWxuwgXQgCjhgStrurpveWGFj8SxD92siAyDZuVd",
  "key22": "4KCiC52R6nbd7i5bjRR6TXYxHzy2kWxqtEj1pouKFKFRfgyQ3efDgQAK5jawm6dYmyBpKCzu6VBoj2pXHkYBeiyV",
  "key23": "3BgvzVakYuSyY49xjkEnkcttkv6SGoKZHe64mnTcr1mdX2MhWEdfQeudmVutgba1EtwDnRBDutptSoN7bF149GRP",
  "key24": "5stYgMg74xDRtjBt9hvbf73ACVteERGTc1ggN9Bx5obYsy8qtkSaYeU7fe3ZYbNXm58atqp1PuUdRmPnTqgedMJL",
  "key25": "64jMd9YJww1GMSNq82jaKqvi4iCHNc2jTNUNHzfb92dbiWZxQ3CMTFzpxfJmjwvjGxaLSnv8EKFnGW16vQTmKyBH",
  "key26": "43VHVBqNhysyBSXgWhiB6SUjBGZL3DDGPgkwf5sJvx7d93zGuMTHTqcnjznNTUFsM6XPRsNUhHd1oHZu8bXu4gHJ",
  "key27": "3htZh3G2aJVnABsLu2oh3jzpw1P9icYYt8ktjD3gbxFBfgrJWwMiSdQuJ2CsUhLutdkwTP413GjXLXYbXorcJ5dm",
  "key28": "2TNQktdDCWbTF7PvZ1AUk6qhPAbKisezNCmai4SETMGBM67kvDNs9T3Ci2h1fvtrRCPW52h2KtTHFuYwuwvGDCqZ",
  "key29": "3wSRyxNyWJXEc1L887EXgHebE9ydCTjbAXFD6auCGJ6fXVU3mapH5ruwR4orQR4zLT9sG5FSLApRsCKG5nmRdgNE",
  "key30": "3jYxUXuQKSk88bLJ5rCVzvAXvtxWUypiiuy72t8SsMyvU5quz3AyK5cCWga9HTFYE3AWmu4eRmMoJc7BYGo9XVg1",
  "key31": "3PU8TPsaC84yHbKViDUhsHGwjBcsBtCmH816P2YJvGpznrT6bq9TKSx1Vq8F7wJATVFvfFFnvBAAYYrEiE75v1WK",
  "key32": "3SkRHmN7G2vr58MQjHtDfGzsq7JwAPEXJtTg6eE1c7pE7Vh8Qqv2GEKByXnXZKMnZZ6v5Fr7ntdT47EEcpUx4dhj",
  "key33": "5p6AhmEyXCDFmnDrzufyN2wDEAJnJ82Fi5LqhFA5yPjDQJvHqkLYRund3puvLAn25tSWQkSwu8Tw6QkrfPEmNFpz",
  "key34": "4rEKkbyVxyrS2pAPX9LMuuBpaXDzxJWMZ6BUbzRgNSg2kzLPjqTkDVgSf6NPcyJCpZ22BZsDVmGXL4cr3kpGbqq7",
  "key35": "3ehrSk2ewgD5MTRN7SJScnBb1kcpNPPXnxsge8Dya53spLcLPxT3azx4YMtJMy8RqYvQMuAep8B2C93dYWUXbKL3",
  "key36": "4ZjcSR9uEJZhxW5fDu1dv7doA8PD2k35zf1BK777Q88awg6qr7jo5sFHeA9cAyhHtJrrKKpCz2fTchyKGj3WzXZQ",
  "key37": "1g6J7KQSUETmMjskKHtburqF4pKuj17Qp41xW23FD822i4g8f52mFyAsiGEcGdMJRZwQsfgLhhYqACJKny2cVso",
  "key38": "L5H4gqwpcJWU4i7QSih73m44kMEs4cXPxNbYmtxaHs5Z5fHyothQntNX4wise7n2kfR5kCheih2b2HmQm2whZ1p"
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
