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
    "2qcLyXpzLbmAUGPMpJWvk69d4LjLsa8Sx8vA8nWNY8akvMBShNyKE47WUUgXDACkhMJ9NVsJ9e3yTDp1PHqrZyEM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Xecc5aSbTBn2MZb55DwAHCTt6nJcPaMdzanPMSxXL5zweQJTZ1wShcyq1vNkhqKdaTrS5jgPbDPRPF8M9oy8oag",
  "key1": "63s2L5B1uwEpM7dWwQRUadTF3PUyf97gY7cGTtBh4j9PNT6gzybkUL5z3sQ4kTQbaJUz3GmnmBue3xf9aBuLJR1X",
  "key2": "4ginuDyb3LaTL9HnPXU7McoVabEjAgGdNLQyC2QmKBzpEEiRrtuU7NfJ7ZvmFzwCGAgBu5pspaGvwmRAWvistk86",
  "key3": "3w8G2a2NptNh3nTKtSSqKxKBXdHZnByUXEzuQUHjRMfr9ge5CADqmzHk9SXALkRexxW3nu4CmRieUDQG9nAcNFFh",
  "key4": "3xjwJGDwerqLpJMA2a8rdQdAmWSJAsYBPLCE7DxXQ3xxjfeeSc7USDUEFHGFfNTh6YzbANXtoHGXthyN5CsEmzNS",
  "key5": "m9F82DE2QnPaPEwdCmsk3yLAuAHVR3tWLCkov9DaYNB3xRWAJVFoctVnG6tKFfDyBDWfmLjhoqR9MHiFR2u5ufC",
  "key6": "43oZ8QJzPf8P8xMiB95TTnM6j5VheJYjswMJDRd5NX28ExBE9DyD4jGggGivaDdTpAT757nsdq2fN2nSauCYt1ug",
  "key7": "EKwqFF776qf5Uctpy84qdZC5WRsZp9LukApx7Y1rR6sDfuTxYaeMvvSHR8Xi4WeMK9116cbHxH37RpTKebRts1u",
  "key8": "535aCF1UdTFXtCZ3yWjBF2kRnW3APgkshUYxQ5newU3bGGFf8CLZk7L33U3uvZtfcPwDhLTHVBsiPNRFzYVsWrev",
  "key9": "2CvZoFfZVsXCMNCGsDaqEXTSTbqNvuoTNt1LPLw4aeYq7M4wgvBp6kXX2CmSXFesae1ivExpjjDVn3ktbdDnDDrq",
  "key10": "3Qfq9sECwb3jFXVU9syARZAjJnVq8iuYAeiEua16hM5zgTf9J2zbJw1fvz26aZzHaYiaotPH3ggwrbq7Bciygjnu",
  "key11": "2nLdK87C4jqCS5o4GYNFAs7cboiDgpxwMp9fh2aNfgBJxaqP9S7y6MZzL5imQaUHKmDpEKaCyWZAsKApmrF3RSC9",
  "key12": "3ZpGbu5AzvGWLtZP2JbK33s1Kjs83ZtMxZBn8shqJcinxn2F4QWFmtLygkaG3KQ7Qaw2mLLFrTYMtViL6JCB9u2M",
  "key13": "64KFXbUakAYtdELesuTPsdnQ9i3BopSXKjR7xxwVAyjTSXucNfx1nXzvzLJp6SLbUwB266QSbGVJumwukGZvgJtQ",
  "key14": "2awp3NmVfKq7nLCPXLJ6UPcrN1chuZLjFjHb3RABwfXwBkwCDwkRg5zGSDW93u6c2WPagnzjJL3FN696DgjhVVZk",
  "key15": "49rHP9kqRZMMAG1XwEAmjKxJnQY4W33AqU3BktnsVJT4zCntMwmxj9WAe9gbUvKso4JsP64uzjv4xM7yAPpzaqCj",
  "key16": "453YPM25bwcSmTaf9WGxucX6BgaYqG3PriciStyujKaHPau94uZt7YGbDXabk5UjDNnfMJ6tqpB36mZrS5VYPg7K",
  "key17": "3aGotE2nomJS8mKaqA5zGqzSoPyQbzwudqkpH4jTnFUuTGe2ADTQ6XReskpmZ4X2NoURgnDvGFGDDu17q7NoGik4",
  "key18": "5C4ZgEZtimNshzURq8uwHRSyQiVZx6f6uYCinNbT9x2TJ3ck9xNbpbhJHZpBR8JgUT23bkjmQDoDr9VhktFYGBLk",
  "key19": "3SbS8uGmDCDKUbY4XwjANSDqmucBrN2ut49jHR7JAMGnYRCosqgnSCyf2nj5uG36p8LyCh3aNV2Pgw1qpMuroDtv",
  "key20": "4rtqhASEftxDCE2vXucdQrcR2GuFLJ29HeBTi6j3U6JrSRsrpYMHgTqnVixs6hRWCnQe94B8mzLRCkq87yn4wr1Z",
  "key21": "2yvjnCSL5kJdkVeYVM1TEqoYvDMNkuQBQGysgNvVy2azM2PeXGSv7zUTif9kyzAu2tUqTEUGkhJeToFpSDWUWGN6",
  "key22": "3HCJXC65Ed8WAGjV58cHMy4yMqf6MW4huTio8d9bi2uPTz5nVYTR4peWWyegHgR7soVV7sk2kFGuz24FmwvaFyZg",
  "key23": "3WhgzeDS6wXAV15gDMQ5w74yHFzLvb49WJFLir5q7PbvjLS3iFLwxRdZnb5EvkMvfH2GMZg8oXxTPCimkqfFK6TJ",
  "key24": "5b13Sp2URpW4LiJkCX3eaYJ9ataSGrfP6JGu2zXszxseQJ3N5jY15ok2NLB3rcPhv2tVhDD4LmTLBULMPFDAvkgH",
  "key25": "37TEuoeRazwtxDwwGthahuYYZYw2zBXdERnC193UEzFVBsZA3RLJVkgUh3X9RQeR3JvSwRT4pZtmWhMLvRmZRDDr",
  "key26": "sjgVAeDC5cpsht3KXnHzpeJdCajLLkKaAp9vfP7t8qmzWdSNJa6sVdFtV6Jhq8z4ezR15EMYXEx74AvXNWuRDdu",
  "key27": "4xwhX7QQMv7kyrcULTnajrbREgKDviiJdJHZCLEBesuVtoEKSfYgr4gh98H9YsrUvB5EEu8MSJNFvBjq78KGByan",
  "key28": "2tkPjTvWEEqZcJFU9HNAX3DvArrMBVZqTL1JFnPECXD8UDhcPRcYzGZFtgABuhFHkycdtVrJjW3fJTWLwaGqqexb",
  "key29": "449sTJsq5yiYrhxb1pJaZmWGyvQSoQzi3mUWGK4o9mUAUe97PjzostuoufkqdX2QmqmokJZkVgPnjfrxEZMGVNig",
  "key30": "4n1EcGyAb3gMRpEG8GrXwKzvTVSfwKfPnEa6RXrSHi2zZJMdVNi3Egzyy56t1YWFBsiKURTi5wwWuxUPLfANvACi",
  "key31": "2rupbz9mwTPokt6ZKDbJ7pd5uSgDvfpcnsZs44fmKVYTnLGSsweCfybB6f5NVyjWbGEbNRR1pWtHWvzADUoZpqH9",
  "key32": "4ihVEfZBtKoNGtBCsiEwwck2gNPg1Znx76QJQTN4DjEvCT1yteGELL8yT9e31CPMS3TMzFkKocSKqJL97yRRFeGx",
  "key33": "4Kf4bqPJ3hf1ysFXV9ndZCcpmtmbTBT71Gr7rUdhiFAhFxzMbNLxoitR9BAhsuwqNQBozMryzWqs24dEYimjMBed",
  "key34": "h72EXmSM5rKpV9S7CbFzwBfB8RXvEEuZhdhbEFTzkCexcwTSsCejH8vU9FzFRmqak6QzCBaPpieoNnUZwMmz3RZ",
  "key35": "47udwJnkytqRH4h33rMmd1KDJKXUteCV9oYTKsy1txDoFEDM5MccrurRkEuviRGmWUojLUfmEYgmtdahj6Vim2rc",
  "key36": "3fwCBPBNPhptWksn2GGKDrthWjcnBzcd9jaNJvMKV65MMy1biqpnB7BXeQXNeSjmLNBWPGMJoAbLvnyYNReAUCVt",
  "key37": "4yDyoooqqYAzrTJn3n6b9Tqt5AUcXXcZRpncpdGNyPEpKqefp419tEqnedshs48uM4dbLLgAYcduuVHCiqBRkSF1",
  "key38": "3NgPjGtjWGtkst4adK5m31imnb3DGi1MXTwpJs5SngDxyHTDFfUDRkaLyhmMarh3YwtboQchvyWZLXiVvegup3rx",
  "key39": "55dy8pTEecjvM8rpNiywDZYNeLVNERRZbMF63ntGCWQLrpaUKS1Quv6VDQocfoWnCNukEGGudug42fs6UrMgyc4e",
  "key40": "2p6DMKkbiwKV8y637vedCSiwaPXu6iEz5AP9tVDtaxPRgaJGuiASwHv9QuHCL8iDYKe7Sx4w5UTcrAUcgaTAdnej"
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
