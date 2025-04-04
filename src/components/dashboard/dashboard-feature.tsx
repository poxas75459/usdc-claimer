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
    "SA6isgu6Esg6wMbRWBB353X6SAUhm5BA18zhAPg545feFErUgwdB7rM8AzSmm11w5xwYdjefKXvz4R5NVAQYVi7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RBWzP6XZaLX3tm9atGd5scKz3iV63VgLeewQsXxtcSj7sj153735ALmWw6E7cGxyMjbrWTmSnRfG7nFvpda7Juf",
  "key1": "3kmt21o9jkVNigSxuhzwDnQEbM3177WiHBfQZCJ7fMsk5wWgcQ7DnWFw7xZjUrGVzWkRqQAums38En2wCVvH8B59",
  "key2": "42g4UCewWFqT8DGdV1nXAp895SGRCRnbAhatKQSEVquXvLYxtSmxvkgoxapzGZx9yjzyeav15hDyFyBCt5YeBMwa",
  "key3": "3yAo49K63GTeYkkBLJyXP43PL2u3iZevJV1rg1CoqtnECkHRtZKMqmvVCJdHUAu8YgkuCrUAp2tsTE384qze3NbD",
  "key4": "3LX3isJaYky9ujM1GvJGQdKZjoqzgaYNme3n3oyrvUBzhKEwLQsUkRLd9mDWHXkAUSskcesK2yPFxu8Jp82PCb4H",
  "key5": "5Y1jSkPftfX5JFwz2aGmNVRJwYnHC5X3Xok8ba73TZZvQXcGYeNmHLTJXbpcpUiTcip1dAqc71X6ZQ9NNE6F16Bt",
  "key6": "4kE7moT8LkZpWSRypF3mM9v1fJtRjLs6XHANocc3KLEEbeEk2hye54oEVSfhzWirAS6iqmcqJfvB6QVBzn5yuNtG",
  "key7": "BUzMGTJhyXAaJqBBMHnDSspTqEPP8CMjnjxHPXonnYpNnLec21mZzw6ZMjXQGAt2T1LVxBY7nsCcML1m8h65ByA",
  "key8": "48FRE5LU6DdDNhncR4Lj5FSK2r7RkaAFJ5e6NZPYW2t2NGLDqJ49FtPXUfLbeWz3we3sGSqNRSDZSpNNMfTzh1hr",
  "key9": "2yECLbtDecaBzF3DGBc4pdbj2vTqUzQs34MVjYAREf172j3UUctTzBxngUTSj843MHwsgXbD2aFftjt7rZNhBrAa",
  "key10": "5CaMh3aJ4rUhxaBfGNtsiYyepfpek2kVijrV7fdTfwku17U75HyzaVfLrBtfYvvCWUz7RncqcjawAuY6hQDsvnht",
  "key11": "5Kmx1tRweruj9oRQqGGaU8GTVnjCjmP2axUTdYfW5z7UvsbzzFyrgUNSzJcY1yoGQC7Urh3YE2CrwQXwXdY8yfmD",
  "key12": "4dCZtSoTwbaDL6cLBjyYyBHaNacWtsy3UVBer7hXHqWEtRTMEELSaN8L6a6jgH6ES6RNywwuznUNTyN1ma6sQKx9",
  "key13": "5JKSAPk5mpej7VssXQfxN9a5KUaksv5fBsfy69t7oFVRmWCE7yCApqXn28XHFfZ2XeY61R357bSHQuo1oczfiWVV",
  "key14": "5LJqXhpQuymcpNfTPCCMJ2sqPzpaoWnR9KGfVeHQXinnwDcTEHtjSvDrMmfEtSmGVvPVda3LSApJjc82MjJBTwde",
  "key15": "xitEMwfDHBu39QpFeNLGwNr6PKsnHX7t4mWtaUhPdhK9kUkXrNxBh3u4FwoSUEiQA3vN1ELTKDCjfm7BjNBCq81",
  "key16": "2UXbsdDyDFPXiTPNAaqQTY2KQSy7DdYiHDBjAhs8us5xsjo6G39jdmw1JwkF4ZmPbo14ipJnvV7Vy5S45hoxUKLk",
  "key17": "3DZFJKYXBN16PMV2J5Npv92DxceEZgFwdwnZ32utTjRYvSMJJtdTgJymb7J1wyaLqzQffYDt41tD4KEX4vGnVshE",
  "key18": "2jyhYezfc4Z5VjEuo2qvC5Nj7gMjw6zFgcToMc8HUKUeAo5aKeZZJJZ4PB7n9SeFqTcEXqASfTDuPwrSrXUZtpk2",
  "key19": "2YWFc726GjLgq5ngtmG6Ny29N2FnEw5ZnPxd1JWFK76WUZr7me31a75rRWGajVFeJVavxWbnrt1oeMkFECw2B4Tp",
  "key20": "Gj8ex2D3dwptMvKCgbdn1PH6fFfdYVR4joD5gmdZywnqYp4zY1Tw2N1Rmdr76EyfD5desPyrpXCYKcVDSE5HbZU",
  "key21": "2LYuFfWDXu7a3NM2sEHZ9cAkG1s82ZsQNHHXukpi2dr6ypWm2EBMwqjmpYKMPjQ4hEChzHefVJnhNro5B7C3kHdX",
  "key22": "5oFiH1oWo3RW3LYdkQJZk8uVTPUMEFerKmi1ziirnqK88DSLhYjMiqpSHeQswWL1WyRNFixu1JCj8Cts66GwVDPM",
  "key23": "5F18HbzhPCjAnLXbPMLVWYU7ZjnHcXw2ofDToKt33ejpocFSuoHvmBhB7W5atyyHw78R323aNVTeKEX3izauCHoZ",
  "key24": "5GuB83CoJZ5vqHrjN7DBWPcfvdz8p6Q6Cbeue4HZNaLyC3cWY5JvU3zVppaCPQgWdsW7mYYKT1kydsXQxjfadFnr",
  "key25": "5p3GEEDuHsFWrvcoaExPBSbNArQm9KC5yWqcE3gpeAjr9kZ37mVFzaLmSR4M7e6eA89MQnU3CGFzKspnCUMP581",
  "key26": "2ZxXzcQejz8B9eVnSKaU5ErMUHrbtrZ2LosE4pUouTTrDQG68qpjVzaMw1xQ6D3Pmz2DnVkpSsYTpQWdqc1TLnaC",
  "key27": "4g7H3WueafAWPWfxEBxrd8rMjGvP2uZyGd6GJqTuusE37iv8KuaJCUJ2zXA5LPJWoa7URjJaCqUzokXd8dPeUkCJ",
  "key28": "aQRcU1YhW4KGUj8ZxNbofY91HyW6pAsD5mpaBoV429x63i43td1rSveKDWNNgAnTfFjDMqwa1enTuL1527QQGSU",
  "key29": "3mGyWh4Ywk4x5cnQkEredYEkpcJjEdvGTKKVpjp58C3mNHpJUGXRU4BmEHYYq1fsKXvn9XhifgoEsL1QRUfcMBw5",
  "key30": "vgAxz9gyACAm8HmXYrK8MTCJtk1kTKvedB2Ces5EyMyJmFE35XUaC1q6jsoP4tUqBajxmdxHBqV1H3ikEbH7pz1",
  "key31": "3JiX4SqkmkSz1jkgH6gpzxZG1du88zJ7CtKkTjHGZhrrAGdRuubv5BBHJsKm8iMP5L5a5Zqo5Md5cBsnGtoHCA2k",
  "key32": "2mHpF5FNXCPUKm6cB8gNJedjwixwVKKyqus9jjyewQ5H3Th2NjPsWtPvFXvcKmpcApHCSKadR4kzvWN5TREznDvx",
  "key33": "nroBfY9nGyzoR3TFefusEw4XcAc8hC9qKtAdDFrEXacz2NfGkGK9dhs8xryo9BpQKz5BSJPHBh3V4Re56bEen3s",
  "key34": "55QfCmcBYG576c6gYhjJaxBCR5BkHKuUqfHKWhcdo8FxCBGo4QYhYzPBXLfpz4Mmed44N2bGmTTvWABH5EwdCnYg",
  "key35": "28XVL31GH8KNmTgSSD2tiPETx8QGWjk2uDmeYCqzeZfWkKGfL2SPYcTyWAwbTvARbKQsQZi2Q96cqBpbApfyXu1A",
  "key36": "5KWcmojkQskKskWtxdXCFSAA1xo6QE6Z19i3u1bz7p7poEoqqWADoWgU6f4DPHPuPmwt4f6TnbXihvCUatz71FUW",
  "key37": "5TjhDQoc2o8y75j5BeeLPMyfv2zx8knzk58VXiqkpkdu5zdD12g1LEmrF1Kif8s5MwSa49SgHwLMp9ppEZxL5t7G",
  "key38": "b2rosPGV1aJMU2TbiSHFDKEvcaSFRdD41e8Hrf4ZpscXLoUtF7nqarnuGUqNAmteezaqBWwZsatt4G67TPS7tCj",
  "key39": "5tfR2Y2xeXh5XA9gpF15RbFmb6XWHgH8QSPuSkC4Rg7NGbernBdkhNx4bpAYj8AquGWGTksYJCbAQ3jufwPTwAWN",
  "key40": "2CKe1jkzhCCYMPrGHJwEfjWHkVJ4P7adjsySfpdW1HRPDSaipdhm62DriZ4XbTJas8xzJycs7QDn14XkiYk17WNB",
  "key41": "4tYMjNWxQZyiLoH2BzyqaBe1qDFPhuDhpeRGN4fFY2f2EpLr2r1QLWjYgzwX69mVqJ8taKCHPnDK31pc9ZoAkVSB"
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
