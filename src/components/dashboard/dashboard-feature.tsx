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
    "4XdiLgdYJkq1Nscacj4qQFS4yjsvaBc78hkegW52usveBqDbKy9ad2u7R4ssEkTXDh4JDNgXFkWG9GxDCp3Yci14"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GiyDU3xvKZ9bshG7uj1SE1Gymy7FNjx3sPhPevc66wmooYcGC1j8wK2sm7Lub4xkDz3rnaLqCkwkyEqKsqFRM2K",
  "key1": "3ig4RaLFLbjF3KH6W2vnHMBniHSXPJq7bNg3hXZVHKPfCbu6YzDF2BUDJEpDYD2LmZqAdJuXLauPmvXyZKQt4zop",
  "key2": "291TJpEejep9qn89HdqMhPKxMinxAcKEzSf9HEs7iUF2SQNmzVRanYEqsunw1Yksmb6txd8N8sozgDLW15tDGXhn",
  "key3": "3C7NxWUF1DRGQMXhipBwAeSA8zym8EKpiaDjFympCi2Ut1mxpmqEntm6ShWTnz81afHvbB7kxmiBJWJt3rXnmHKx",
  "key4": "3Zijc5msj7xYX1T3FRkniKy7NoFTPkYZUXm6pjKZ85UhoDoTBu6J9MdkEn3aL1uZVWiX7L4PF2kt9gQgAzNnVqda",
  "key5": "VvzDzmqpCp1YJsX1QFFGUXpnroM7bGNYYNtRhF1j55FJ8EM8kH5WdmADXMYRkhW4jwGX7SNuZj2aBxNrD3ApDZD",
  "key6": "42FbqxBzwdmydkGTj6ngq2jjqdVZSi5dXEjZY9sMgzdj8zNrvBobJ5jRUaBpFXKb84KQN3SUyHKJzz3K43PxA9Aq",
  "key7": "3gR4TvMph7zmtqE1QbzZKQ3DbjKqsJKugnY9e7EU6tooMuAAcxTSC3NYum12m4EdHvXeeNBbWb3n4ewB9KMTq9rW",
  "key8": "5fNTuBVKq7NSSwvzaBGTMJbNWEpvB9cNo5VGp4zsHLFYxzeJ4j6kPxeX4sVyYW2vbNSi4fhRsUJNzwjMit3yZM9W",
  "key9": "5SRf2zyChsjDVyHo1yE2DBedqCkvE9H2jGvz6XMMwvRBxJLm6pJit9VHFCewgYEk7GBmnpFpbEHucDzKy3hD6TfX",
  "key10": "4jRfydejitC9Y5J3QDF31nSUi675A9LpJ1NkkoAWBuM8jEtwwPr67y4Pn9kKEuUKpAwkRT6Uxd8CbsdMXW3hQSR7",
  "key11": "57zNdL2ZFeMDdiene9Vnt5ceXr4i9JvAax4Moxz19GeNMHq9fey4Z2FW1AZuvNJnkoMxnrnykXZyf45DgRZVcHh3",
  "key12": "3SnV4R4cEsMQKegLyp2mjxruZKyHo7j2fDKqZ2oiK39o1NfqTZKCcMrZHXAKnHeaebDj8edSBJydchqL6S8uTaye",
  "key13": "7BtYxfToznXxKU6BQB5SzLvimSLKKp9m5zecxiHivDuNs2bDnBQnZzHHbKXoj2sxoLVXy2Rhr1a9HG6GtpUGuNP",
  "key14": "24pGbVRmeJw4fSwzwaZQEDAsbbT3d1vaSuXPDriX56BQkiXJpWRPKFogj7iQ2kyNdBPnF3pX2aWit567hsRwGbQZ",
  "key15": "3tmkLRm8fwGfijg38ukYEiZ7eCRUAxJMCuTKp2jGkYoAtDmNgxxDswb46oozUA9MWDJ47t3Q9wTEcJU3WS52kqD5",
  "key16": "4aryMBPGryAPtNZBvAxxCyDdWLuWZrShUatYudmhhWeiQuCkXNfVpgA9am8VgeeRSP84caPdFf38vKWt1f7mJr6o",
  "key17": "2jPom2okmiohJqKW422cBQ38pQsoGxUZU8pvbH6xuQqztjyg7r6cWYDuFz6wVgT6sZp11KABMCvSxZoYhKxtTpXU",
  "key18": "5SrzWis3LNgLUxowrttqzNUmN6fC9C7oKQ9JBjX3nWAaNcXmXCbBf5R7fvWEzSF8SWbPZkxf67BT169ribqJLugD",
  "key19": "2NpVD4ZcpGm7wnb4f9hMQdhFF1JxeaBGc8U8ccm7zf2sAPErK66Ui15JrPDbptBdSvbkDerXZSbCwDyZ8W9h4jX3",
  "key20": "PkM9Tw7H5S4GUkBXJMfQ6TqXWA2GjyTNxcUPBmPiuSSyvy429KnBk3msRDahSRTAxDBNjPcTwuxpn7psZVCixuy",
  "key21": "3BirVVBeUGiZhUvWHPoMy82vazxxuT4BLNJyWydXvfbuw1nN8Ybm9U3QEoWd11ta6SfaxvQoajMrQ2sXm5YrtSFC",
  "key22": "QjxVf4YUzRggLFmWuJmWDYwoUcoDMGyTvNNVqoLfwJuXZa4xBD5zQXd64vFUTRKBuvEDn4jXzos59gVNsTxqiua",
  "key23": "441tQkX4DXAhmgTED9pYHaTts8RX64tg3pc7rty5L4FkKQUNpMa631zm6289YWmxf6w2oYmmTpXH13FiokMoGiAK",
  "key24": "31MUiGxctYEAxj6AUJ1NjKeTznbcDGjpeEfGJvdXJ3PJYcuo8fhFVYaHrYhg7JLZbkL8cCNQYWftButdCBJmiZ6s",
  "key25": "3rR8yBMVpXEFhu4X7oKL1FMEjEWkvsvcXMB7UVjHrQMRg7dxEyRftFd5YKmkgwWG9NZmLNHLBwobmt6bHLyWPMvH",
  "key26": "4RGWwS2LAuo2pzUuBHdGdXcg3wWK3HmzWgjC9bWYQhK9KufbhasfkwHf88b1cHvgcHf7VBsMZjLssVgYRcVTKjpj",
  "key27": "3CDbwGxEzBRQmsb1F6QEhqE7g2J1TPbhWuaUNjuwZFr1VZNP8JX4eYb4epKXowsGWLHde6c4L2H4mvQVwuyy4WSX",
  "key28": "2hBSLh1qksL64pQxhknpsb1iE78RvJi9eFogDvEbYzeBiLroVrCWwuL6o1H8TBqjphXnGQ5KUefp8n5npXUagDeV",
  "key29": "4i3ecsAk4BPbWwH5kSLnkG6uvNmkySTxBCUeJxar1S7roARUYog44osQgL9FNtrN6xK9m3JQ7RCWeUGtg3Uzt9Hi",
  "key30": "4cd9R5vDAwEpjv7p4mm382AYMPHKqAXw26THGyx8VBGB6zJs4NFCXJgst7iEjsn1yEJRVDz1k3kGae1VizMRLAog",
  "key31": "UtyGuFdgzdc767URbrufH1jATRgkej3i3RTpXz1PJn6RyebrePfNR6YYMeLuPqeppjjp1cRtgU9fFtqf325KqT9",
  "key32": "5FYa8PgpF6PqFfjY5DuWJkSyfV96HsiChJ39JPkdKLuCtVYu9FKX6J8fLjL1vm17ZQzUm7ijQav5DAwjB5Gs8Nks",
  "key33": "3vN4P8ypFUVU2Zuc5GATnpGJ1rVBCyP3XN5XHz9dxB99TQthe6rhckX7pMVhTjvhukgkXyouKMYebETgnEXL1saU",
  "key34": "5YiE78W7z5mUvVJep8iPwBowiChkvrafEDjhMBQu8uHMYXyrAJ5jGN8FMBEHkWvzabsxd2xtXr83BXPKfC97GE6Y",
  "key35": "5zSxBvmFuXMf8XHu4jvNKubA5s3JgdBpKPsvbzFt8Rz6Wbtm8tfWPzTkfynpL3ujYRsknKdxp4Fx6VDo87JY8Zvc",
  "key36": "2v2yLqyALypMPJdVmNwTfTxSgzjJCXphPe6YFmdh1xzLx1rrwSrjdG1yhsLADu8XnRgY4tGYhdd2FFbR8QRDajCc",
  "key37": "3ivQj2ZbH5iqkQrJ5Y4qQR4H8aCTpzBstDxksQeqogHamCw6YQURTHg8NuFpfosXhCCi1YybUjhos9ArZsRK6gUs",
  "key38": "4dkYRHqf8WUf7eskXxyn3SSdyDyqy327MRujU4Yb9xK2eoNJyw8jKJJ29QjCjiiZ5q1XSNrfLqfVkisyGakvwmaj",
  "key39": "5AT8rXVfuHZVZuDLoKo66CXkgp4zgVyfbMZwSLWU3QXPVq3YRg67JEYhhKCFaAeKRoSsRL6Sdw2C2mocNvdzp6rQ",
  "key40": "MfCV4dsrj69rqQnExy9M8suT5heYHaMVtYJDVJnDdnPrFaABroMZ1asEJvHvbUZGhX9QEMJeCUmdzbd7x2sAMox",
  "key41": "hdQSNc2g8Lw2gZoPKYLXcKa4nzQj661efi4sPJBo7RLKq9cGc7Y2yKB9heDLWCpSJ3aT8cTSoEb3nrmMJKwpfky",
  "key42": "2kDXMdcDzd5B3o1RS7Fu3vZrDEuKVhat2bzp7Z8cTGTxBT8ueREp3DLuQX1j9oG1zvjFdSzZB3uuevsvoNfdAYkU",
  "key43": "4UBANdX1SwmqehNet1m6317jBGbn9yaniBispy6TPiufDj9D4e9kCUThjFJ46RFcW1Bk6kcqFaqiQD3VyH9fbSF8"
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
