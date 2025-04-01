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
    "5DGVzZuChyCyd1LdGv8McZPKqXvspL8MYBwD3fANr8qB6qC6ptSNJUdhoCCYmhARtk5u7K7QodM9QAkCGaSES6Cs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2M1HBYa852WDZuedy9J6y9zqxxqX7iuJC5ziQtPfFeNKX8qtGZbewRGqizSniroD7heLf8CrAaCikQYpfW4sqiGc",
  "key1": "2n6PdhNbimo6V93Hpc257BvyjoosjPgABk5xg1b9gbGzBhJ1sSfD38atn83mwQVn5nyWqRdeNjpPH4ZmK3tb6eiw",
  "key2": "cuABnC6AVcuJ1giAv4YkScSYeSsN4mUHekLnvFchLCYDkNwmaaz2pyMSht6E96Zt6v6VjJ9g1TE8RsoBs37Sqp5",
  "key3": "JFUAQU5WpAQEs4WjMZGehRFKLnseUPUnsiXSnkUzSiDgnZmx46msHF8nJ7sUzz4dAKp3ohPeRSyFF6ZP5m2zscC",
  "key4": "5n6vaLd1yu85Zv5i4xzA9FNPXoXxiwp8awVqa7hUd7QyyqgA7bGdr2v4LuUCnk7xP77wMJuGYbnRVqLoHpLcQWfa",
  "key5": "4hMZ5qLEPwcxCJVaQN3cA5Lg9ks695LN5A4BGtZmeNFGtGsy3rxobRSzk8NVwbjtpnnhG962c7NGaterwdYXx4hW",
  "key6": "4pQJwbkXdHaVdojR8XvJKryhhb8jHJJ1MK5HbwfaPGPpmFwvS3uMUCeiTu1BG9G5RAPb5SVKUAEKH1afHMcY24cF",
  "key7": "o1RteUau8jVQ4pVFvR3DXv1fGvu5pUjR7KXmZosRGqgyPzYpGhuzBPzyc4jm2sn7P8MQAXhDcaWtnskQfD2FFqs",
  "key8": "3BqVRsqSFGPzzkXgjtoGFZbZ2n47j9pYurnJX58ZM15tLyNMv2sTzVAibBwxDa78kV25QepcxHGykSffSW5yJs9e",
  "key9": "4UC4zj7xbGeruo6iSwkHRhK8HBqyec76PQQGHwWBZEhWGFSpDh86ktwW2F98LJtyd69txJ1p65sH2WJDEEQDYcCG",
  "key10": "61atqCvkhonGqEGFEFFdc7kEDhLHAWVioN9vdpQoRJUVVtJAK7JEUJYyMABcZZqnDx9XAhcp9FhME9LsPqZ49Yok",
  "key11": "4YKYYKH3qR72TfiLsGzRHQ9yZhtSgoLfnC9VB2zZDH9vt19FPwcaPpFtvGLGzcFHV5JAxwSA4ipFfkytVgEvJEg1",
  "key12": "Qna5jtr9SBaK1HVZRG7pPSyf1Q9eKCePULrURDg95jxL9qwfXjXsuBU4m4sqH4m9gFT4N7n5Mvcjurd8JyjRjPc",
  "key13": "2iskSNwtjQ4kwxUUyyuszJLFzQ9kogkjnFMiKQMWQi2aNeLyJz2Vix1fbNEopz5NCPzBWneKNeod93sLxFKAWu9Z",
  "key14": "5muWHiNtxq743BfxYoBumPDebuncDJKkepWm2niM3AsEyHDz3EmexiN8ifDKYQ95qL7GPW7HPk5wdBCmpYDLjoGZ",
  "key15": "3JMyRbGsYMQKcsox22n7hsKB26kN5nESaezNcdKfqX3QhmD66gMRSJLezdnob1D7QV2bbyS1H1fRaZviRySpVaRY",
  "key16": "4iKux6RsDhpWBSzLPc3iaAGiDwfywzugzV9VHbfKR5rNQyh88EjzsbLj4ApCp7LYF51k9zd5b7TGAGZuNUEBFhGj",
  "key17": "2tGuyJ4pxhwe7ALiFckUPKEr8bKDeYpLsnYeDgjD92wh9rW4uwEPxwbiTciZ851FYRAuyd3Rbf3AxBBcF8Bbgr55",
  "key18": "mJiu2ie3mn6Kz8cuv18L9rHCT8qzCmetRWUJjg4jGdNqhAqWWKQzXaLNuKdwYDeRCMqHHTaAJNqrmRzVidAyCg9",
  "key19": "5JzXH31nZiDQpNpQEuvHAnPA67SrHV4Ms75MDaMCDxExc6q73SnX4gb1y3CaZRA1hSnxR6Rrk9uoTaDEWp7uyZnU",
  "key20": "2ubjvKPrHnZD2DjK1Vmgy1EwaZdiywJ1m1mCYyLNJwEZEzQsuTfVJX3SDCxpRhpA1nBb1vrDM5HhQHqEtw4TKfsJ",
  "key21": "5Va1ix4ea4nAqgmUQj7huKiMpFf4PYDVVKTcWEBsxjroYPqAcCUMQT4EXwV1UyLtRTYuZcQyEirytuc6XJLGcJqj",
  "key22": "3h8dgEszm2q84mRJtAE9Vro43d9JJjCnKu1tgmfkECdhbs2BqpipC92WAC8PdUf6r13Liybf1kmVJ9YeiXghhvnA",
  "key23": "4RiNABG91UDFH7hPJ2nhkJrMETLLrGN1U42XyYpR9q5Ch3mvLVbqZ95VjocvgH794Jf3pex4Ty97cDxsqjSzvMrn",
  "key24": "5iDx2GkLUNcjCyrTAQGg3nA3KUFnru16AnXbzGJrHMMJjdvjjWgXLNYynHgEr54DS6mEx7Getg8qsafGhfYcY8ww",
  "key25": "2TZ52eBaFLQD3HkGLFX1ZpcXDpGGmFSnvRhLpEzC8Y1MmiHHu9n1sRJMM7sX3jNWPGtQwZmkupcsXW2F9b9xi6JY",
  "key26": "5KMzvAHmVNuXr5JvwwcHJomFxjbXiDiqB9bovM1YFRqEo85eAfiMHoFfLSiGghGxHUT8HeqNFjo56hEAChvpVJaB",
  "key27": "4v9wQPNTYS9wZv3upDBVTAkQtJryKzh8jioyXsMyNRtSJ3i3CEgNiS8xfVzVF9ThemXALrejazGe4kK8v3BwmsEo",
  "key28": "3BKBoh9XJSktGLUeiv4x4ukaGiivntnVRYeLUyysBqCBBsG36GWPmMQL6E92Snh4MTXXWwqGswC5UPAsERjzKXoZ",
  "key29": "fwABMpeD85aKU6ZYqhM8xJaDCBMbvGZjE3rdPm7kwG49D7dHTA7rqv3BBir6MMYHjCtY79aw9WTyzC6ZjC4vXGf",
  "key30": "3pJwGHTpzCg5fGVyRi9jpeDie3vDSmR4s7uDwDEacKg5eLsYVUzhuwjwhh568iTJ4DxEHyYbDrkg3GAoGxbV4yHd",
  "key31": "4dgftaJDhrmuikrnGhmJB5sBiqBBeRrL1g5Dkj9aaw3SYBxj7LNqstZtoqrT2xkx4NxZaX2xedkAwq42uqoEvcsV",
  "key32": "3jiaCCh5PdWjADpGoe7eMs5uM1sSfXGSgkCUFEoPvtRGoN76WAbgoUFjCr8x3H7sQASMb2TXfwBjb7BiwZ9mRJYU",
  "key33": "3WJ2XPCCLF6ZJbWCjTjDFKxzPVU9EWxz3PWmeCZbTxojPwVBMViqXLN8TtiYFXZtK3DthNqsVv6C6BGkXN1tzaXN",
  "key34": "n42G2n7evhgxMj7jGEjzR8L2rgCYgCjd1d1jswLQrVxxCGXGQCDzdX1P1uXTWGCgnSAZh6PMDP6DAZcWRzaKBp6",
  "key35": "WoGnvxFMg6P7ZJsjq5CpZw114L6HHK5jRKnqsr5fBVqvbRGdKsfsXNYfH7fYWB54y6VJgY4cnnFMz6vx4NpBbX8",
  "key36": "3T7ui2vuEB8pn6xMMyRuyAwcH3Y85ZQSqz2aChm2sP9KLexpAAbv5jHk91s8c6kPg8SNVXfxLtpde9gSQ3mLS96W",
  "key37": "2NP5BCZxoH7b1k3zDSZDRfA1D4oDvs6ZmFdc3NKLwKtxstjh6AcRYwuRZgxePgvME4citQRSYJ5Hx912d9dBaSdM",
  "key38": "1oABRyHr4Zx91bg1rmiydN1kYLXU1Tz4pv6X5nevdzbMJ4iLadp6TVpoKfqHxuiY9frW23MKEUSrgbvgQYD7i4n",
  "key39": "4qKGP8jM4eyJLNHN8FTdjaxSKKBZHg4WGuXvJUuobx9Zzed8UadhUjtnhmBU22E4dozgRvxRApsDpyVytopfzGGM",
  "key40": "5m9CKA8hoPeUV3BBU9pjosmxHAwL85RskCrynmQBdYRDsbsxZsSmCKYjnBakqALANGWUPJJ5zSTa4N8LTEVmCAsu",
  "key41": "5wyDAWWssX3zVmEGfgafoMv9dKdapZvfJwUdK3tNxY4HwG5zzKV7dSkMEzrwTVxW6JeB6W7wYda6nkGM4Gk5AMU1",
  "key42": "PFWv2NwrsVfBGnm2uoqC1hHAmV2BBPMQFBqWbUPSbiR2YrnG9xti62G6GedkzFvcuBU9Y9A8r1vRxk3h8Go8Wdf"
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
