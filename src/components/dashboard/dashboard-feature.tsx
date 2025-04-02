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
    "pgVri86SCGnFFEinvgaZLGJMF4d42q3mVFxD1gn9hXnPuwNPpAdBF4o7gkmmgpJrffac9JAg2CKgrLV5zEkgAxc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KtpJ8PEB7UAdyrg58oS88vpp6ScTY9fSAoCynpGCCZ14XPKYmUFrDnnmmpUSSaxJYJS8eyNyw9fRxxz41wZkbN8",
  "key1": "5ENx5JW3ZmHk3xmu7L92QYeR6b3WvbHe3bLazdDux4Yiqr31mPdF578nZAaqPtdps7PFSVF31gkSXbXPGvbTsAPG",
  "key2": "25AvAseQVnBEYZt8ry24DVUjN9S9faUXL5vfwLJgPJ7yQ3zRK26Ydq52iTNYd3tfgK6fDtJyYHqYYWusXUNerdhp",
  "key3": "5YvWpCgtFGyYnz5Z4B2GL6UaG8TmpsyRSuzPmXoDGj22tqT4xzq7zPC9tJEJavSXWUg5ohKvrd1rpNkPXpdN7AEM",
  "key4": "2QMVEkr17EkksKJrh7rMiVJJJFQfS48H719EwiPjs6YHFMJ3H1bM4sTXUCbPY8FxHCaJdGa6rm1A8mXk2vKwst6v",
  "key5": "2DdURLhjk4UexvDSSmzsJUodizu1yypmWew32n7K8QY5KXqFgttq4mqkegLLKu8VokqiABkVxFjUH5zhXnzcAFdv",
  "key6": "2rCLjNxwmP8YAwKoF31i64rhnMh7G33dLHJWKeqmEV4QqEj38EzgW3HpGEXaVhKQaMWfacxbEFt1hg5Ufd8ECeyR",
  "key7": "33wdzjsAazyioixYH6pcEhtJzus1zKkGhukAFpara3x8RjBrYpmXKy7YnfNBYUzNnquAaop8Wp6QmN2Q8AyZU1nJ",
  "key8": "3CGWv7PfiVJXgVrn9RyRqFXr1UwqkfCkwVhQUuo161RWsaKM8bcU9RrwQxFPUwChyotqWoxkjDVTbyxQS3F5UrM7",
  "key9": "aSh2oEAhHrk8iA4VwaoppQjyFznG1E5XTV9mCL6314g3w9CWxKXNKysT2XarKL79RzhSU4JhbU48U7wEe8wNmcB",
  "key10": "5si16wiRprv19JBRyCbKnSB5gEpks2jAKyuvczDPCFFE9CA3vrxuTvARysq33oVYvXy7GcSbwSbu8nJENQVfuvhg",
  "key11": "3wrfRHdw8QSukK3MXj2KTWYDGCeio3jLnNh9T5z28KZA6RPGkEXNwEi98sV1Sj6M32vETEH7b16Pgj9jjiALc8W1",
  "key12": "3dHttwvwpxM91iRt4rR8ecRqP5k79eqBu62XxMBexUwPR21UubFrtqLRq9Vne7heRy5YSxDTewj7LyASppFGqLT",
  "key13": "5BCmQZioiXTSntJ1Hz7w4kbCpML416Yjrd8Q2vBYJRNPZso3XtgxbfSagKi2ACwAqL57LGVjkBFTzzdTbV2b4ezY",
  "key14": "2qZLSrirh3cKwEqeYKHngtRX4R66crMR5uonp7iKRapKcHMmz2RfftDb1yy4MoHGKqL4q3a78H4fDZxZyyo5DQAA",
  "key15": "2PFDwJq4UcgGpwxzfkHyhUxreWc5kUTfBp7KViwn8QVUNuGBJjc1SZuFYe9aYpZ1oYM4wBraQjtYR7pEo6MUaV83",
  "key16": "5rie5FhYth4c9T2dXahhPpsysEtGnhT1nx9XPH4YaTCX8VSaKBtuMQZ1VYSvUU6bZLrRH5HDfcH2t3MDga74iRoJ",
  "key17": "38bEMt2fwxZswsrR3K1xbGq4Jhgwwx7dvYAhxNFZW5Ktj9NrZfM5L1h5kREgBLqiXeCiWnJMVtTqM8ErwnjtpDbb",
  "key18": "5cMtQN8CS5YvBAgBw9BpcHRVgb3vdJoER5S7agp9nCGQnXebW4DPS6quFryCHcCukpqx5uSiYpJ7d9rwzS7b6knQ",
  "key19": "7sZd2tmevBQif3ZthvK4VaCFnqD5ytHajcRQPfbChLai1Ru1gVdKJXnSNyzQUUg39ajpq9QkwbHgJ8DqNS3ULPn",
  "key20": "4f3ytCnCeUyPLkmotCQkiYFZ8foRbpJ1yTh9cFP5VKtry75iipMFuHxXbd46BJcb7vFR6jsTyne7SU4ZkYp9zg1r",
  "key21": "i7kMxyAuTZWq7yvFXmrATgUKE2Bk6RbLpjGdSigtuYNJethWBa15S2GTUtgFR4iX1Gfby5ChQsXgW1hd7FSwjCk",
  "key22": "uEY5h8Acv7etKP7EGqi7ztxuq7MyB24GmqiMCtfj6t5tBm2SP8nxH8FbbjL8xeySFS4QaDT7s6NfopZ7WQgC9tT",
  "key23": "5D7AYf8K6ZKurjapgW6BgdoHpD2AUe8xvE728ht7f31snt5PsCrypvA3kLoUCg8D13hxrqbVTWATbSRmUEnnQjcL",
  "key24": "ZfUi9ZQrL5CC3UepvsRrqaMfXfVmVnej3aoDw21Wv6bVqx1xicbjVQP4M9MtJHfipP3eRUARn3Raiiv58U7knNp",
  "key25": "48eZcQm524ig3VQ4TZK242USv6sbFHx6MvcnVkEdDmZvvzUthkUbb3i32rz3pD5raUiRktEnTtS1145dsiaybgJd",
  "key26": "NVrubqM3pr6AEfdRxYcAKjAkDRuvFYv11S25SGZXmoQ6QeMrUo9VB1qQxpHeX3wAPjFZssuMqqTjYqQUV3LJ5VL",
  "key27": "4afoeUDVhgueKbZQHAL8Sku5QiKGc3p84KcXYQZLeGF93pEtEGJBg2bqEkuPkutiDWsrWUmbXQ2spaL95NyVLPeF",
  "key28": "4iemzNtupGDGQJjzaZxjVxu3CkzkDYC8EKngLVipXWdjZffvhrNyFXp9zCSAXDDSzqcVmYUyCXgncTJ3sY1Umu4P",
  "key29": "55sc6sXPwt6DtTTrpK9Z1HnfVXYErGPA4W4DrVQzHscbCyijr3vtHNQzwP5RVQGbK1H4ASJ9mmDSwgfzKDWg7npR",
  "key30": "EmhFB3zACUPeoUFUeTBscae84HzNAKi1gYzy4SVbxyDLufkRdHq24eHoCgvAKJg6LDUBVkKTbADn1K82fsEiigh",
  "key31": "22EEH2dCEe2WD2kR3F1xWUFtKo11swht9xYrncVzvThkMH4HGuboLeJQ18QvBkESrUgPKGWsN4uGmich1rJs52N8",
  "key32": "3a3ScJKdEqU74TykUQgJm16rhmfXeunHRVegsvZKjJWzpNJsXNRagFMce2uKF6SEuehm8SpaRishCWJp8tMjx4QN",
  "key33": "26FAfDFSe9oebQfmfbPRzQpYDzwrhnnhFgG8ss4WwTj6rSNPcBUHVgUJL88hssUqhefCV5LqkkWkZNBUBgU2a5XG",
  "key34": "3ccnq79LmFCPnxwYX7YntFWefNHmWeXsgmgsuaDzXQSBGsAuVawD3fNZ2hPYXE6x4bNUoTuqfNsrFA7NU5yGHCDs"
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
