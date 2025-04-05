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
    "2KLaatAKXmFYoj97rGCbKjR9Atbqg12LZVYa4ujFkmFELh25MKohdTGvMAWkhwkd7dPsfAJuVBfa4pTosNRyLU4n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZzzQs6x51NG2JmLtcygB5ypaamujY9tXncrpPNbsznyA51Bydi2xZ84zjkMiDNcXVkzYYkQrGZt7hbc3CsEek9W",
  "key1": "3G65L71dm2KYvWdHhymrEowtddz1m44mHkPfY4dRtqtsScj4fkcRfkwmz1oKWGsK6qHpv9x6A9PA172dDw317RdB",
  "key2": "4drz2xg182Jsocg7zCqwn1XhVqTbetUCTciw6dn9QEBaUTNUuhJNzqi3YbGd8uuw59QfwinTtGCY7Vt5wcgBK1pg",
  "key3": "5djsNRRKDddrtqpmg8Ggn7sDVYHNWUcE55YasoefYQdESXLuNYQ1YPxHi5rqBX11hbVFfYP6cW5EFdtrF5WFWuaM",
  "key4": "4kM8YMF2mzcrWgtPsU1X95An3dt39CuUZmDTSUm7MYVzKd8MyCLoxX5zm31bSn4awWJpdrp3qdyZyQ8rpJRCqNwS",
  "key5": "5Wj5U1TH9Xi5EVmkxZRyTRQ1sJ8jE3wxb5gtB8ufHuQ7hxdNHDfUyTTftxCRXMB4thaHgiwUi3QbHWUaErd1AQiN",
  "key6": "2mWhpPpnb7UDog3kqrWZ8rmgBe4Vq7bvXFsJHyKensETUkznGYRr9VrwzuzUxCJHTVeoUwtN4w7GX2cyEeaXa6CW",
  "key7": "2qMqagA8Pc11ZBYCaWbWbVTDAyCDW1npTpJrPQsKegpnPFLch7SnoxAaxopSP8f7Dpz6RUoodeyqdp9MMLfo59ww",
  "key8": "418iMEMY6qSua3Go44Dy7qbZxYcsaRUC593kzQb3RbusYVN6uA1S3v7QbqEPfMKgvjHMRYwaqmwSSFc2ddSSbMzs",
  "key9": "46Tpeh9mRLAL6wUyJmU8dyMbAkX5FZXHxPPVDidLKTMN4vkf5F9UzbpCZUnZYzawKDiUpFgC7pU8agex8STWQYFM",
  "key10": "4uA7CoZPXNNawp8JEN5j8nPUqFirJESEGNq7ZFCR8DyYgKhnzoNrswHncSjuUD2KVL2W4mZfGdUD3i27nFo4BhUs",
  "key11": "5eV7bVGLCit8CyNbp35aNrPuFp5YxZZY5TJRNqN56HVPBp1nX6s1tan6XWktTLigEATwk3uPo9RKQWD6MEQrz15s",
  "key12": "71XEg7zp5YiHCkpKmGwFit8xbuqFBtZwwCJzxZynTCbWJNyqZ1Udd1dBj9t2sNJMCywnvK28MrA94xWm1AHyfkU",
  "key13": "5r2GJ9fovviKYTfHW9eT8gUKfReDQkQcHxuK4eVCTWP9Xj3qmdvyiGKsnRDoUQYzaEJiyzJjhe2Sy4oE9biDT5ef",
  "key14": "5mZGoUbpSx1q3tqj7eRJ8dNidNeB6E8rfbk9y6dPq12ZAVbgsPcTTgHtEzyFfezbwNANzrqPzRHeKF2V4rfAmyg3",
  "key15": "5DZYxzcLyeQREY3pVZZi75h8UrLDzEExDCVSppnAGtvPRt4biH8SHtve6jixKBfRBiAXcEb9bXPAgkDxobRTbHBu",
  "key16": "5MxQCd7obTnwiaRLmMJYDSRAMwCQTCmqew8j1hqf9yneUtTZGeTTqk8i756XgM79V167m3HV5zWaYPteygRSeLVh",
  "key17": "2SDGSVxD77EAQ33p1nBTyKZUTxhZNjQVjzp4fTmcZz5Py3NvD5xrrbnizFStW6URXf9HEoY3wAhkjCoaEPhbezzR",
  "key18": "3ifVnsR7g311kA4biEBytq3KVLqxxeWDE82ovAWnctN8oEpcP3hTdSxFDiNyvVL1FeUgh5Cgn4VsUfvUsS3Qf3s9",
  "key19": "5wJRp8i9N9FZFKMd8xQJei4bahbWmvtnHiyvBRU6gbrL2VyMjwW1gwUgdN6HGvaprcNqVdh9U9opBViEngY62Ftz",
  "key20": "5q3tqfTfeXtvN57eEd4vJML13m7kgM6ScH2591NN5ba5VrZDvYrDTi4S5bn7adAXKRmtUGmEN91379bZ2jw2hc1v",
  "key21": "3hN5Z2HawRqFTDw1dLJ3Y7e7D9Ro1mvghLrmFiVCCgccC5hAwi8HSUFbEJu8HE9X3bCqMHdjtgWa3VEBigAxfSUt",
  "key22": "4f4tZq2BAxdYY6eCLK29pYx1s9WMY8BYhRHHSxcjpzVkU4KGjKdS7pDyHf6BvdKTEyhqEE1aovh7Rh581NrUTMRT",
  "key23": "5zyNDHxwvz6YNPJtHDYj1qqV3tP3U2xNjceN9mCpHrHVKQyB78Sc1bFhYa5K15po1j4Z8RuUdnNQGbex8yFbGL6T",
  "key24": "64195DQyUyiyYBTFMuyQWdh3VZ1iePqNFqQzig8E8jbZjSdbDC5dsPrTiAw6s7M1yQ1BuCPHj17fUrjJxFavNKHB",
  "key25": "3YAKJ5BnutYFbDDZJzeh8mFL5BkUgyZ8Ma5NH5C118c9Wgau3p93hMYSBi9qGoVkME9jg9oWvDtSXjewAtfJ2q83",
  "key26": "pweCfMuLGnHbS3qhUNmUui8j6DFUmua7bCCbZJ6WBz6cRHSiHYgWuYgVEU2TZkWxT3haD6368M6kGVSmcZAcdWb",
  "key27": "hzWuw6SAi8NyRxFFc5nKrcyXsLsexxagy4f38xECuP3poE8kYPtETVbMmVptGVvSzFvRQ9C3bjVcYSw82aLSVoN",
  "key28": "4MV6QWEQrZPZb4VrqVL6WMzF2BowbKdJ8y4QhAAZfUpAsSJanPd4dDYa5zFgGazHMTQ5PrbKVduYUWGRDpK6dmwu",
  "key29": "66cWduMeVsRKsxczxDn5PpJ3ebnwHEnbM1AyceCHCixgoe7312cF3ugaPkpj4h4ZFb7hQQKqdAzz6ZnCVwR2dRt6",
  "key30": "1MDibCe2H7ZSYYdn1uZEY4697ZpGcweUPYdFKHGA2fBxNWU574hxgc7TfDecgmHo5AN24KkkY8frY7G1ga8B49G",
  "key31": "5GbVigv3xdyAtmi1NLak42htFfenbiwhCHS9K3Riezy7CCeeoMeipEvgg4atTcRJqX319w7s8UUf6qzkQQys6mnq",
  "key32": "3J8S5cToMrqgF4hbzcnsfX8PjYmN32RjxH7EAytZbwyM1TwcJPbBtCj5VkKAc3ZEi5isEb6Gri551Yhq1znVARot",
  "key33": "34w57AkTZpB66Mm9wQD1i3SBF2o2ThC9HvqNB38xH1YFGfqAjLVxkCVW6Y3HSnghqexRN9QG5u6JYuGyUZTTSUgh",
  "key34": "3Hoqx29xQ9rck98jRbxm84mhovw6HCQitaFadAtQ7yEPDSNAqbWvgWoUnE7KU5b2gyMMEvDUCWSkEijzfq5ECXmX",
  "key35": "m2eFokhv6xerkJ1tDTa7QrCLAgeU7eNzieiF72YhACvYpdx9A5zYpEuA5Txh76JYJfXY42K9wmAshUHBEd1eroi",
  "key36": "JSZbiNmsx8UaQdXh3wmUKVVSTv8w7CtLWn3PHSMV5V278sV8M9MkqKLoDgwvAccr8LHQ1Dn7xA3thkqbHM63Hxe",
  "key37": "43wQZ6XNq7L2yj7xe623YKBtpFNAR36UGesvhADBMvouHoxMeLgaojDs6Zce9Y5FvuqPSNvpo6WFWLBkeEaBo3fs",
  "key38": "3x6xKDWbQ2Ui7V8GqcQ4eZLuH7JrEvBFfPmVs1miz3ooapssZ2Y4V3RRd7Rmpm5EaLs4WCNq6NxrcGcsLKYmtTUX",
  "key39": "3z34SJnZbkhgG8MaFy6E4JngHXi6HpnjyKMEUviqYszgi2AwZ3m3PMvWu16Ungoexn5fP3wokKp5LgUNstS6CUEf",
  "key40": "5m37btVwoMxnT38qBJPjBiDxKRJraik9zHYn637TyBXMfWUwEhgHpEdYubdgTMCzjbDbNhJKhrojyscNYqt4BjCa",
  "key41": "5VvWiVogBTwYzbGHDEH5idddezjUaLksCEu19gFUeN6E6XaUHdC1HZNRhfpk55kosnyub8k5ZnRZxhkWDQvNZePP",
  "key42": "2Zwy1aAjsZxFLGXrUpcVE1XHLQ8RRJzraUJkk6srr91H5q6bHQRjz9k5WkqFDNAqyAEKJjnkfrTG8cykTPYWMGpk",
  "key43": "221iE16JDLivQA581vCxDsPZx1FJcSwPKE7kmwyyHiLKBZAGzKQQPRLXVaCnfn7aM55FNYpB9VKPTwpnxFDnuNm2",
  "key44": "PM2AiZB88e4VzQLGJc5e3viRS68YLSS9c1oMkjfd7WoZk2PqyDtgBq15shspMT84uXgrShHmDgbuM1SJ1xvEG8F",
  "key45": "gKsMvfbFJnhoCqP8MeMeeSn3472UrdzqT6w9ufv2osQUrLrgcwrYkqbCSTbot9izqGASdmCCBJWMMyXUUN1PRwb",
  "key46": "ATJNnp4T37TePCNUt6aJ6GBH3cJCq1nhjcqUw6tpyRi5eyQdZTJMh5ocfTJTc1mQTLthJh1q4tD2XiGVejpaMGm",
  "key47": "3Vqn2djzUUgfYSqFp5z3yyhQzktEE3njDJ9bk5DFqDCNcspqRD5Ha4BatfkGmq3PrA37QXWt4cRDr4bgU71qTo9p"
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
