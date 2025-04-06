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
    "B9YLWwXMmfAR2g35g5JPDnZyqjfKZSZD3DeKoW9yxakyas9MMFGS88hgEe2SqB26eXmafZM9ZDpqUpuo23Fd7Vs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48AAGBDVHdTooGhLzFcHpxF5fQ3V7V2HViCQVuXaoUuPEWVZVWgjzAoM7n4vcKLUVWbDUDitzzE5AL9jMWvcvoGh",
  "key1": "2Voi9rLxR8zRDCyEdw4q78h5EntrU4c3xiPMXDSf1DFT6AX5ABoZGxqQSHKkfdYpAJxNygrEw6tRyKADf4LZJh7q",
  "key2": "5UNSReuMcBkqYHj9UQ7cw1GDmh2fuXNcSziYT9nLnrjrrUAhfJ5FQnSW71s1KCkE2nhhwcCjESqeGfKdj3CUUznR",
  "key3": "4ZumTw3wPx1uspQ8o1d6kymJjAXoGSN8zGfrCuqYoe8KsntXXC5CVqoXSF25UvHf8DrUZV6WKSkKP8RQYn3N32K",
  "key4": "3RuzJUeHWFCXFiSkEviy8Jng2FAEWbGSGB5CLRrLsCs8NChvLa57xeTjoLx4e2e1eu1GUKHU2cMjnSTQVNQNyZoE",
  "key5": "4gQWTdvRgEFFSbKQpUFjCtXVBmjFLewtKDt7H8CkFsRgRUkJKfXYcxmg99kAqRt7cJxsNZcRuPvhcTbHgGUjZ4qZ",
  "key6": "44VvPFi2qThZFkUgVHReGmU96qbSa2jvFF4Rx1fEWKqJCJRvzonaNfERJAzyChfnVhyiNB5Fnk7rdDh7HxHbMFMN",
  "key7": "4iExryJrdGpYApgwbFJTCpRCbAwr3zUNNHjRT58mMuDoQxGWXV1dTU5YPEnPavWgmnSVcARQ7Z79a7ByTiscaUck",
  "key8": "N9CLqi5W9tpe9cp7SoEazLcYU6eywdhgNAPE7xZvRLkdeybU9CsSQzxHq3jxugWgKRKhJHRWJxCSr3NWAG1csL3",
  "key9": "2GE8SFi7U4dkzS2sTju1gdzTsSq9SLR4UYKrxTcgSudxcKXEYmYjPgMX48FBGRtWmEQaJFETfxWhY319xij1zB3u",
  "key10": "2B3DkDiSxyjcJvVoAgb5JfMkjYtv3mWCupWo4jkqApJtH28ejv3sxmHSaeBZQEJCgpFXRqeN97jJC9Xqa3qDxo2r",
  "key11": "4XiH9ZBRrDsLUqrZFcUBG1qoMBAVEXyxkN1CXEa2ZSj87y13dfHLV2x7JdfkhYw99nJmWbGxyDuhZtJujxtk1KQd",
  "key12": "2nK6fLtjrq212wHAek8jKYmiEw4uxPWqCRDKFMN8M4EPjTdegap8b4oRnVxQapUHeMsSPSTUxtKEzRAFt9rdDW7p",
  "key13": "64BeGKByH7C8gNocBNxKeFj3q65kLZAHDi36SHC8SrQahRiNhetJrY52bN6VbECoHRJfDLqteBpV3gL8KMPdXLd1",
  "key14": "5kGsgaUvQWCSb6macR7ozKVxAPSwMjYAzskYeZUbzL4wvsCYM22L6VNyZfRhUNabzAsKVFKf8nk2gMkCqU5jjd6s",
  "key15": "63YBSiN6Z2EFfmbm7DtZbHzRdLb4gbcxXXLwr9mp1rodpdNC1zQ6r6Zm9HNynnBXYzQVGiqogkRZG3Whc1AUK1cf",
  "key16": "3NY8y8C5x66DBLyt7Xxj3CizXwpJqpucyTx4Qxm29sBFzX843BHhgkBodXWgYbgqPBQ9aiEuHncjZtcw9JL8rSeu",
  "key17": "3UZMutNUKNZG4fpj53iiQSHJHiBaQ6QRE94mDPfwTx4Yk2AFWwW9PmPat6WV6W6UX1y68ExtHGucCd771qpCKjL4",
  "key18": "3TnLSNupVkywK4DNxqNwoke8iThBKQAEyYKUGWVnezUxDgMSmn2z3pChFg2T49ZKMVnCUgyGwu4ixHGx76hr87dm",
  "key19": "2Ry696K5ioZ8xUSQgX66nKwvZo5UVaDSRTtQ2fYGPdvrt9ShMWNVuCrk1KryjcE2GC4gXNft6FBvxfhSC8zCncSi",
  "key20": "5gMLuiCW4R75ywThtsCY9MYFc6kyt1dENoz6rGcxJLuzBWrHmymZTHWjxuk6KoxRY5nvKfN2aS9GUuxVGhKFoBYu",
  "key21": "5R7txJdn3shqVPj7n1z8LLcKYinZ4hx4in2FRmUUghynQHhqyPRbbD3y5SuJU4x1VHdaUTPKbA4wc7VpgKDyT2kM",
  "key22": "4qMm4HaLdqMXSEb64zo2fNT8Ryj42mbfznnS1UcR1w6KyQjAmmbvuhVjDXfGb7ykBFwS6UcrGvUaSZiD9rXD7uR6",
  "key23": "47KCCfnY9V4CBypN9RB6H7J6ZhySMUC28ChckbKKhEGrdeja2QN9XPqWHPVbJvSFp8uubJMv78QPDE7Rapnuc6GG",
  "key24": "3BSzLWKaVcDRsoQXUMuKm8QG4UZxFYyTV6MzT7qwomY3WGhfPd9UwzFmePd9WmmgLoDeUc5dx3RnUkjLEurVLvH7",
  "key25": "cqRqGPqBUzbb4R3PQoTTg7SLsjJiZah4uUuyV7LyDm9i895ZUjXzQcVVPnoRnUB8mJ8rQsTgwMjoXRZdSr71MEy",
  "key26": "64r8UD3CWvbomsm4XiSdxaNapv7gCgf7c3dVM7B3p7cJU9fvsxpfTqYog6rd8scMsy2ao8QHHFWpTurWddbSZX74",
  "key27": "3JAm582aSSWM1rNqjgz8gNZ5H1iEKEVZFJ8ifccyRgu8WZr6G52FsVdieXSA7LTU5RJ4Tm3ZDhCbC18bPhZZJEKp",
  "key28": "2zxSmMtHgm6ZXKNvVsBornf6RTiL1MEaAm4g19oyYjC2iDV6ayR993jbA3Y1vHCMe9UCtF3SL6uNBW4UvoorCC7F",
  "key29": "BZ6Ewmjh6xJzHmibUney72zpyB2B9PHERdJV5xbpSvhMqRc4LBh5B8um8pL9JPb5ksK8aQ5fLF3NneJ1TQzuMPy",
  "key30": "4zFagkex5iW2UM3MBeKju7bmo1i7WJgXZs8WTU2XMuNS4ukD8vnREprTFGtXDt21nsudTWiSuMgQZnmMWMMDhsxP",
  "key31": "5QajHbszJKaot5Lerm8A4rqe3gEii9e3AaFhgvfFm3K3ZHfPaSFVu7kMP6EPAGczNfZcBp54Pmi4iG1kV5XrTAzq",
  "key32": "3xxNHXRjZM9q3XmpKPSdsPY6XMC2udkd6Paopb2a9Vn9Jh2fzsv2VckpcafZZy2EQDiqzWpvq2Jb2JLHFzGb8Jtq",
  "key33": "2sz7zHEYWFv5EFgazfGDED9sVwkXzgD6SrMKvN1gPWF2tFnAU5Fu1GuiSjpTqYUbhApqLqqgVsE3ePkVf2yAqn8n",
  "key34": "5qLXoF3xyTveM12qLwGGTnaQkkgzLfQCETZHFJsooUsn4dFCUsxq7JhMdMQcZSqJUjXSgaDTa6jL2Ry14b1u6H52"
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
