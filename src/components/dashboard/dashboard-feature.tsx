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
    "3wAcp8VRTogHmJZt3ikvytGt9ZRvfquaqSAcRCMsnwkak82BdbmGxUvpWx2Atskd8ii3fruUPcNGRffQdLXovm6V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kmuy3daZEjmwiXHhoVuPABaRfzNVxpmZSzgEhFJZNx32JBLVbLyzvXPPcvVeP2xB2J69HxpUzDfcvAxE2GszV3",
  "key1": "2Teft8ca7ZWgp5fZZjie6Z99adjJPHekf41VzVTgCqbFvmkpFuxTBQgHZK1he6tfLeybcpJQDdH1YEGhzpFx6Yfx",
  "key2": "34Ci5TpweoEV2M2Dq2iGYopSANb5p47xQcLhoKjVKsTGBN4Ty6RewgK2AtLmYVqxQzPdcFmWnReDXHigsSvqTi8r",
  "key3": "5d5S1Py7ZWutwqybhEhnStRAQ4eBawG54QcJLoSykrFyLSauhzYXj5WrpNmAmCF1qZjivod4eKbAhB9p1cVETuEV",
  "key4": "37wZDjb3sBW6nUXwjBNytm75nV1GXTDUi1zQivaEs4rsxvehEgQcUxjsHXq484kYNJgguwVRwuGgQCjXQmfnQTBQ",
  "key5": "62FPxRABjBospK5786XMnLHYsUDAx6ryVtkd4Dg6VLWS7GExensA95YZDLxAJxvnSaASuycKiMiXMjGYFRupPDCj",
  "key6": "5pBA3dzZ7MG2kQ38WwkQXbRwjZKd9hXYWGJcHapVUHkcd5tSvtaPQDWmAzJgiagqBBipBYsX2dwpY4Hmf1yoYFcH",
  "key7": "3RGbbyTpdtkfky8oxnEBAuRUcsG2kA3Qe55wHTdeDkzbEkdY6Nr841vuno966QrD39kNrRfof1z9xD5cXPMLDy4V",
  "key8": "43rJksvgcybgiZYT2snRv466B1PGc6R5h6YJ5MxWApE7EW36Y96ATK4Hv8oK7Qxgk5YVx9wtkPRUtQmmmwkWUzBR",
  "key9": "27G3nhFBiToAQ9RVtWdmrr8w2TZ3kuM8Kj1RHSbBjrv5UKTHJx5gNz5PUyrExkEUKaLLxDiJjUpF27hUjtoqPpN5",
  "key10": "5BWLdm7QcL96j41yBRNqvixw7fb1C3K5ogyLvYKnKFjEzVKfUR4j9oozjy7kbCtagnKmfWHGViX76PzXxKi7h5XE",
  "key11": "4Px23kWZFLvijffcnZgEpDEMHtKKxaLa9PamqQEw1co9qESQMQzhaECf68eocdGC2xc3wwM7eguyhMY2F5znCeSt",
  "key12": "3BtormQJwqp4syP3cqF5ZpksaWq6WmoPC2JvcrQ9S5m1G2u6SRBu8F1RAdncyFFPnNwV4Wg691rvRPJC2HkJFb45",
  "key13": "54jieb4nUFoUPwceqMa8hU1AVM94cworkzittYjo7vHzrTbDK9d6ybfKdFGpJUGVycMEvU1wZHvr54L21nhZSbpL",
  "key14": "4ndZQbh4GfwrcT8ty6Zn5aTEkvdXRw1webVCMjA117W474imftf8BX1yXNzyCanmCzmntia5EvLaTXJE4wZ4V9YX",
  "key15": "5JtZ9N7JwwPwV1hYTshwjyxcausTpZNNzt71Dbg4EDZAxvVEJx4YYgxhoRTUj5zpUJVuhMJkWfXmjJ43GRGV6GyA",
  "key16": "2KSwhBVHqC1SxDWrjt9cw1ZtoGhiur3eemC5uFUEbhTzeRjYHyFqfiFPbZS3YHNPhjVaz9yH855MpchvtrunK6UK",
  "key17": "4fy57stuczetfqQShWTSj29TjYrxFKViZwE5jRDDGrBrqmNdYW6LYtmzswQMt94wD42nxxza3pxJhMGckUKH8hTZ",
  "key18": "2JVQHRVsXwjeoXgD2jgad7ZGADETJg9QoDSz3WrfHEnDbbF1VtpNXa6H8KkTkYnFSvCozkRkecwMtitz3MDZgXfn",
  "key19": "yHCv4sWdjYmyRosNYRNGdktCZuEu2ZxdA1h8pfnBs4GJFHqbewX7LRWE1YEYCxB7YsY1HXGpxqVJ2a4GZgvZhyB",
  "key20": "3TJxjoG7nc1A7EN7JRFqAmss44kzrveeCtq99n1pAq5aVRv6faa9eGEBoFRu5iWX6DP7D6eT12sbLgkRooPEZQXb",
  "key21": "5m5oGRNwiyt43DPx91U3SyV6tkcmyxj9uMDj2bA4GmbTNghYU6kUHzmKBmDU41aZkKUWqC2uVn8iZC4z1suWnwsf",
  "key22": "3zWd6gqcX76WU3TeGkXpLRoqtDKMHnWYtR9jCnEXHtffMa4K29sqjik93mLCqFzFLVxYDkBfFdZiLpXRmcG2tr9W",
  "key23": "272LVE42GogEXP3pGiTzJXcKCnPiE9s9KZRPnzFzwPETYVZyUEf23Ea8LL2o5KzGGVyeLiwVLnuq6KEiqvL8Yaw6",
  "key24": "SbCS2BAfJD9Dxuxngj37PmXCsca4VohWrWXUxGacyA5rp3smrQCzX7fGLBP9oFkjZz5CHi3pgqKPz9SqsXaBe1a"
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
