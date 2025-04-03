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
    "3JPKfhfu6ArTuh42myTasrWtGGfs7NZAr37HUaLYWHZHf9ZRFf42sbQW6VKJxsVhkXi96yv6WbzNqv6CabVjapaV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Nn9dFETArYXXf7TA6Gm9CfsrnKaePKDswD82P6LdtmGZEcFTiQ677WR94xFAwbcDBurErzWtmLAtLMVqryRieas",
  "key1": "2U7erXy9BNi7xLNi5DMf51K4Z6pKu3BsuMKqiYeXuyMpYxw8TgNMrTAUHySwXqFcbkj4ttf7XSt16TxYpDkxUCN",
  "key2": "4XV6KhC1u2ENuZfjvqwux12U23Fd2GLzHMXQZuo62Rz397MeNebEdaJddeCAkWAnauCPpkEWGHxcfpDCxNRBY6B9",
  "key3": "3Nv9agJuFk4iiUru9vt1RoWcMkxQF8QPBiXMsuDBubsfKLM4ZpbS1Gu16WJkpsS7MTqnMxVJsF9ftHP6ttzUzdVQ",
  "key4": "2nyidTkd16abgdiJ6cH4eYj6q12aP86iYB8Ej2qC8cXqFySD8LuWL87maKWcs7ofZCruNfwZd8PRr5w49nk7CDuM",
  "key5": "3bHdLRWt7NR5TY7XVkByjYfuMbMSmFZ9YJDXo8V7E1omZ8DwJoLZjemf6pGgGdaC8kkGWq2XbybStusbQsFsLNMX",
  "key6": "5sE1TKot4hqoAxLPDQH1p6MA3BQyyta1SfovtoWXqVSZadAMVei6fmQFuW3BfQjdZXZL6LVLSd6mNcLndq347jWt",
  "key7": "31QuszRFRyCoViquz3kupvq7tJ3jx22HSddUiWLegUAXtE3h2kgSEBSrYdHot5jMojXLA224yyqERjdvBbcD865a",
  "key8": "5rKbcdRvuowCbApkqQzxFR5g25XzqejRcni6daZjWk4LRdDateVAdq91A2znxreqjdCTUQ9oXHek4MpnNnFmaWq8",
  "key9": "5wB5x2CCkmi2tLCk5dassynNJB9WG9KKvoThBDT78CL5fpKsQXb7Yi8Sjda1MZunPtDrpL1Pv5rVwR2bVjYvNCrS",
  "key10": "5AJcWUKErDn69d4A7DbTnL3bsCConT5WMag48UmELqZst5o9ht5jB6YDkh5bQtwUPmYdaJuShxbdrNwtnncQDjuu",
  "key11": "Wi83e5BK2WPy545JzhKdeazvmQSNx1wDetNxv7a648i19g7HaWCfav9xasuoqMaX2zW7dpKe93jMbGHxUREnAxs",
  "key12": "2ubUUb5Mik13A7wBHfAfKKSQJzsxAJyLhXUCbFwPo1m8F4Ftbkbq5UthN4WiCxkRuiwxuxqQoXYWRB41Yf2uSncc",
  "key13": "2kcvGnX2VZPKafGFgqHDo4tEwtMYtHe3HG2QReDCRY3MCvaYYE9wvgFkxg2hXYxPe7cmJC9Eo2ccykoAYKewSseJ",
  "key14": "3ccQxeKyBFqzQJYaArPvgzwKF6ifY7qVS5gFBAxqn5yqwcjkDkB34cUeSVQZUwGMvzYzdnE38vDKnxU3VHnHJGTN",
  "key15": "3NgUiuyA9L94xVtYNaSwZMa1pUBrVJtPn68siNxo1HbTEgNDbKWX7hXtD7Z7tP2WB32ZLosZuU9RtopYKARpjmKk",
  "key16": "2BfLPN7wpQzyCDkg9AVToenYvUhPF3Dpuu2hoAtsYJPoHhU7BkrQsTMPB1hbAc4xw8KLKj525xuU5Aktxt4TGau9",
  "key17": "2g6eewk7dwZR6cjMEckCVoV2V2nx6kqtT9u6zbeu6RoUpNbcsBQD8WKtteKHMjBG5EPYexapu45pT5kSyQ32HxxA",
  "key18": "5JqmEJj3bwiUX1ooEQnu1NX7KCq5ZA5BfYSQtt2RsToLaDEctxsLzgBFpmEoXMR4UWJPmUTAqt57zYQiavFJyjnK",
  "key19": "5hMCyVFd3BewAFYmoDkRMz9KRHEwWvboDi51Ygdt21Tm3iMKak6x6d52xHxYxxZxreDrAbMsK7aS6Tddx8DTVPkM",
  "key20": "53RtLMbz8AZ9spDmXYCer6aZcLFdLN7xEc8oQgFq9T3LwFV2APhSkD1ZaVTkuQbrWy1c3YNz9hRHEFRhBF9Rbfvw",
  "key21": "62SMhyNVQcQvSr1KzLGckgKbNJYF9nWNBaCJRym26ZQFAtPHkiX5FdJNWuEJoAfjzUhMjU8KNMexYed4sZZG5K9K",
  "key22": "5m5bcCCV4DD2F7LSdpHA6reDhn6QS3zR2KcEdPbZczVPDJnRiBop8EG8VrGCgZs8tdFCtfx3S3mtrAzDuoKxJjRP",
  "key23": "26rH4RfT7ZtpJPdWrbebowFak4kxJgWLCDvSZVEND1GFRCQbVUQwafQr5JaR2BogyFzrFt4f3dmjeYgT37UdGiQX",
  "key24": "5o93Rk2WxkD46CekRcpDKVhnATioWdhWSW9vvos8FDbTC5Ziz5TxKm3NnQWdq9jdRYigLJmtKdu9C7y6tnWFuiTc",
  "key25": "4q7hqKV5TRHPj4jtQiWipP7Goce74BAyWLat1CeGo3uZYrkugbAFZHU6kfFXNYeqqYv8uPPs9itT5mbwaGghcTnB",
  "key26": "2ETRJq6j2rDQvJ7pytBjthpKA2Hx7Lv8TSWfUKahWFj3orCoZkMZaoXEt6uzxacHP5gCiXFdo2YYhtBwnzE82mAh",
  "key27": "5PR2MmxZrqU9fiZjhnxFAuHYikyif84xNo49MAs6t3fPbqTgV3mCwTVkLnpiRxzupPTCi9ZL7eUa1zaxwfTZFRVv",
  "key28": "3zxouMmWPNCW59fjbR6iXpZx3othJKxpCkYAf2r9MYLSZyAyYe9nGCAUhxXP2rDdJ1JupuB35bKigcVxM4Jq8xUt",
  "key29": "3v1u8LBRZjy3ekCaQp3Fua4oNgPRvmQZWBbEYwmYqeoi7shAgWKMX99MgGv9R7criEFTC9jWjfU1SZEpghEMtADR",
  "key30": "3gbFAdz4rB5hVjALxwkMo4aSonMpXeRRGVKQhXBTMCsk3GRGMC644L5SLVhWxUMzJXJW5xudXMJXAP3Nu5NCVAoF",
  "key31": "5tdVtp7thak8BfGVGakvQjbfkJzGdhBSFzp4gMh1nDkGyZd6igZCKnYQ8UpGKg4vEw8dfG5sULSRKFmZ5gPtWYZx",
  "key32": "2gXhfjyADVfNh3tpohy8KXPZQNCtdxMo9gBd5U9MaPL5LKnrkNWs5HoPyLXTwMpULW2csFdyDq5S8XiVhwcZBBMx",
  "key33": "9L7ahwejFN7NsLLTDwKUD7U1Z52BcoDBkrjJKwyqdcJvWqpDhLxSRh8sVa31XeMRtBhS8jTuqY2GKdcQVuz3Tka",
  "key34": "4CB1yTvXaLjb7jnSZ1cMfd1Zi4hz6p1nsTxn3648hAUfZiRtsRWkZjQqYnrUzwGknKrUbwZS2crqU5PdW8YmhMjm",
  "key35": "q2i3toctQNwCHBZh2CXozUr6wJs5kxn62patWahsXj4wLYfGnbSUWbFZdzvmFMN2G2JDYAFgb4SxarQZ6uwhPnX",
  "key36": "66HiLGMqNvaKhJVP5d6c3RAL11UPqds2iYCTVUWiwwam7E6JNhqf9PuBd9Ln59FfPw6bjX4EEZ4vtTdLgVsu7AFS",
  "key37": "3ruCybHZtwRaz7y4Fc4EjJeiahULsaWjcKmDroBTife1yAvhhJhXbHHrMEeoevPRDFBFseYJSghAPXy3THjHaed1",
  "key38": "2dDi9Dyx5M3LCJ4x886gB5cyhnbudzSYXY2Cby1pJN9yAsY7bTt2mb2HTJKy2BwZmrD4Kdho4Uk4EN64ArexS5QT",
  "key39": "4YQuEd2bsAJbcsr1KYY9VTsYRhDnp6135ukYtWNbjGBDy5KFQr5K1HGvJUGGTdgba4eusYJC1enavsnCPzajXar9"
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
