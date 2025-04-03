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
    "4wDbdQd2Sov5yBHMfYS8nBf9mqXxxwznrMSGRuJ5T1xY2kijBMGcWzANE2wuRBdPywpLRpcV4J4N1abSPBb3EGwX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FRWfxQNpfsw3QCffY6SL99wNbQBdWngt8K9mZ3gwgZSHysWcoiAA4PxkM1smxRjCkHJ4rY1UQv4jthQRcQTFMwF",
  "key1": "foKEE6W5aXo9jtuT4SQkQj79JV6r2LeQWX3Xcx9TsQR7vah1a8FhNSqNzxY7JH7hnfKKP5KpqQVGQMebckeTZCE",
  "key2": "1VSM3LrSr1iuZdPjaJjzh8mjuQexsTDMW8kiZopQZwnx4VaDe3fdnE584PQaSbj8mXAoU8SX28G5FvdRAvcUE1f",
  "key3": "4a3wtgVySrMyUCQEmK2wPQU6WfZNnppGfQN1C5PcBgoJrhW1DNYsZLjg5kDvvPuDeR3rMkZ8sD4Jkmc8CvEj8Z13",
  "key4": "5VG9bX3JtCYuLALC53UKSWwWLhhnncZHU2oA9kJC2EPQY83671EW2xTvzyK2ziNZ2Xr4UpNyxd9QX3byyM2irWFg",
  "key5": "2Gpof2F4gj4gM7Db81JLxiGLozmJVbLokJjsdNfJbWt6YBhbkfHd4iG281c7PmWcJEnRKMxmFXSjATTqiWFDijoZ",
  "key6": "2qgKfK57ME6ht97uss2HRRZ4xjaNnXtzhRw9gj81ABQP3DZSBP2SsFeW8EguapGSYhuvQcJ1RPJFtkbfwnKxdJrF",
  "key7": "5E3GYQpXQhHeBsuPbPdGgpVFrsaoYwFwzx5qYhfpaCF4Ae3fobqQXMYxsBqGpE88GoCPEfzgRiN7VAEATPjwwt3x",
  "key8": "2E8FhD76wGRojbcR4HxEAVxdAtxRRfmAQHQe2VAVakwV4xCg4DUmooJ1VrKENTtFkiyKPPxbeszeq1ME8CNioAF3",
  "key9": "5eZEMEknPGFn8yXjHsUkacdwkLnmnvAXmZijCspmeyYs4QxrW5HDoG8mqBQQLMtKrBhu61keSP9zy2iRPeNUEvt6",
  "key10": "3dJ8TYXD7HmJHXGZsREqhqX5QGmkpPMho7MfhAQrpRVsr3jDk5PqSmT1G4R9Z2F8ScuQ8iQrMt5joxAGPkRJFPjr",
  "key11": "2S8QJUpqHaTfwCtv5etQCoLUCxk4Z7uoWAfTDskX7mBM5TLAm2NzPToJ5CsE5PtvNxXAUdwknheavPrHNfMwHYUm",
  "key12": "4wLfvJLFXfTYjLWtGKwASN8DKKw7UcYRZ68KQNRpxVWhh4LY5qKjodDQ2yciYDAbVcToEyo6yYyF2QnmaFfbnZMr",
  "key13": "5FADkrvkWtmYsiS9QzabEGCgeh285N6zydpp5YmBn7kSh41kxe4vtgcC8famFnCGt1NBhxLbRERuBTW1UDDwvRyA",
  "key14": "3zVxEY3bY8cU1Kn416rAABPB9ikDiT6MWBoShAfLej3eSNEPazzAm9HYEfm7e9oXZTYaE8kwXQBQFryVYL9o4zjq",
  "key15": "5ahsMCKi9L9cHTUe6wEJn8cDzFxjGu4N3F5DegUkjMx1kn565nyzMn3n9ELWsCJKjmRe2Uzg9uQyexbZaX651ukb",
  "key16": "Bc9K9PwfnqwDM4cC3kjZQS2c6Fz8mM12Vnkc6yhTTvjMJppuNxQtgTkNm6QNnzjVHy8t9oXbTDV8fKFxxNu1Ave",
  "key17": "3SV7JtmqPLDa4ZqQ8PeWV4hcpZ3UWwFHrhxPX6T8H1o256xUm5DYzaed521Q5ma4WMMVNeQ2aqCFvk6nYKeHkFe7",
  "key18": "5xKwm22LRMoauVNwSYU8TcxwSHKZjiEwf7Fh72db38BZ3VpHqzUFNNKLznKrw37bu4VQ1qVBm98Za8T3hg95YwxG",
  "key19": "2MH5jdrK9Zy6wbLTyjmx3Jdzb1C4bgYxCYx47kqW6ChWMx3MSqXBmrMV1LQVWi1gj6hr3hY7EheTuSJWL87cDGq6",
  "key20": "5ytdbKENGXARQMkQFYB1Hb4j7SRq4bWc85rTXJxZLweeCXjQ5pEX8LGVFkY2fiFCKBqAiXxdQnhoYjyfaEGrpJYe",
  "key21": "2E1d4vJMRzToJqqsFsoLhPA68k1yQUQTqa49SRCTry7XJ6ZEDbboMr8vUoSZmGi5sEzdiMTe5xNy6vJCHxNMUW6Q",
  "key22": "2PPPTXrNbjrVdsaiDSfxXNud42Uv87KE36UAEjMjPrHeG8o4jgLBdmjqJtAkNRVXa3KNoVLyxV4j7HZbo8qpz2Sp",
  "key23": "U7mnkkPMDs5arc2NpqrRG18QD4hrvmzyAk8CM8oGW11seFpBqfcr8tNMxBcoxqSiLJfUpjgZqov1hEpywVVjgWg",
  "key24": "4BLUqhMQQBiKUk7bCLQ6FQcAxdjz4DcEKUMTzHvreJhR4saAjbBt2XuiFKs6TDTCezictDYrYd8JFtcuDcqp3Uhn",
  "key25": "5wRKAeK1QJrmkNWaJpRtDSLu9yPcZT5tvYnqG2izwJQKG7o3uBqUxf4TY6iUCzzdhMeSFtLhicNPUNYpKtZHHgQi",
  "key26": "65J5UtUhdmag9ccxpojFzbSSTtWFUw9VRYxPR6qCEavszj2nBJdgQ6B5qzjajioBt6pTJkzESyFDuWYJWn7HjiUh",
  "key27": "3T4rx2p5JHupwkrKT9AJWz9VCN8h6XvwZwrygn3zurwsn72kJ52Fmkv4u43Zxd75ETkVzyc7ComyXP491GeRW9ge",
  "key28": "M6PFH3Gf6pHSS2ridjooE8xJYZjSZZmGLeZxyDALycXnXYJjKBPvQ7Deip9u13o7tJqxMUq8ytdAjA5goyYqWUT",
  "key29": "2vyVdDQRez1HYjGBJem542xbUmfnDKBq5YQZwv3dwQEFjFZK9W6p6LjSVrZaH9vTpxEhThWqkf2G97MU1pzmWRVJ",
  "key30": "SCCGmyyHSf8XDVvYac5KZVmdVNUS9WZMKfotJiysWPsDeBPPwqmGUjBdwrNKJoCGUbV4J3SbBq24KUc3q6S3Zqd",
  "key31": "2ErW87wQVn2Ry1KsmjpGJYPX4ixQpSzznxASmjSfuz1rKKoF8n52iXFhFUbA74wfzWJGXJtA9g44EqS1eSKubWNw",
  "key32": "2m4zTJazLHab4eEzzLG8cLsLqAc5G5zy4uvhDHWRVcSv9uxE51DeLWP9Skbx81gH4AgYG4NktYYrSUqkXRzgDRgf",
  "key33": "5VfaxSCRkk538n3saFDp48jtML84Gy4W1b9aRQcNnyKsueAbgxnPZQu8xtvtPTKEwHh1otdLJ7AuPGHL2fHFiebz",
  "key34": "EB3y61KCCRu8ywqkmRSYYpevFeEEVtahqnsAY6Tkexyo1vUDHgVN616MCwpRTpGjKNdu2FDWH8yqwkMgJmaLeuN",
  "key35": "2aM1QYU8TYEAhG435vHbALvS5K6R1WB28DXGucMJ6izXAayTadfqJA8PHATYLFnNNcQLuMRZzX8Ye9mC87UVPgZr",
  "key36": "5rcULfeTXitJfgxCucSmL4oLLyth9EX5h6jAkREiEjgbtG2hBAwV6VsYJiACaKrrsfsEBXZB1GKebE6eZtbXDbZH"
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
