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
    "3joK4kbc1dbypQsewMXdY1XBnWqF3NX5nrmicgn298KDKNqLn7GVwrFgkbpxnvY6PLZZYMoF3mvnvccw3k69AAsx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65Q3q6786bNAUj31YyEnvaAy3nz76hKWjtyNq1z9fC8pFsCnWPwwUao7mZXUB3Y66DrzEtGBw6UZshpzGzUvdBB4",
  "key1": "hek53jWikhqZVwPu79GJp3nxFTon3Y29F7En2w7D8viXtpFVLHZvRe8zGmPT6V5brW6Ge61w8jiodnGv74ijB6x",
  "key2": "4dkDn46mcTeBz5fLhnnCAohHEm1BpM6RMJ47L2YFDLayNtTzCRsqnqGbTKcKd1oBYukbCiWPSrgjEwPDFYnqNvsM",
  "key3": "2Nntv1fQxvmW5kufDAcHupdGv5juZp2aqvB142cMS2DjEeEZ9hUpgx261vtTTg8wNVvSSmXxQYU9vvPAKsgfeTPe",
  "key4": "4YENDEZpBLTxNyEsxqQe5QVmfg1CrquDtqo1E6GU3ezVh5FUK3CA7jGCN4eBk5xopX8R1izWia1hWrJEtXihYQj3",
  "key5": "3oRab8mahbLU83cHnoUkk8ieph2P7K45TJqCvYUHamf8bqLFetNUu2c3t7rBAKUeFWAjKNRGvpZ2cWzUPSGaCkfx",
  "key6": "4t28LyJPvJpf2j36wJ19mEqH8AYCohf2J6TXUMCr13GgPx2SFyQYazJG6gEvgNczewnoMBEPZ4HuWiiR4wb41qBe",
  "key7": "4nTJRAzNWfjFKetQWC6SU6M3sP1c7H5nJMroCaBNWzShkuiWEgDoMkozG7YMkMMue2FtgrNvYtRD9EqGG8Mmb141",
  "key8": "5HotsGDk4xPXSzYNnqUuQv7heskEqZUdj5u9gU6mn21Gtcij9Kk6URLepUwqHWRz8ikhsM5nh7Fr4oxTexPPXaNU",
  "key9": "552J7PGptPuLemDnss95tWA2jFK5UF1ASuUjZWY7pjYip5CZMLEpfrwZczh2E1tUjQMzagoot1tmBFNBFSoisjzG",
  "key10": "5yVszjNNX8W9mDpvbpzfKb8LdP2vyE9je6LJCsb2sC872LtZsLavHZqHePnECjZ9QSNRriqWyze21HgXRbqPUjD8",
  "key11": "4ZXGXAShna4iMveUWTWwW3YZcE3QA77qrXXeJxjYRpjj9W2SPUUTtHkdNddvJn63XKSVpKcmfhH1y4xsUNzJ6YND",
  "key12": "5fLJnoLTm5w8mhnqQvTtP53NmLcjKrMZRpYcXnZuBUEQkWCStRHD2ttJ6X3eF2JsQ6wLUZ21Gjy1CzTtPSXoixe",
  "key13": "iHuKxxiFrEosu8raLPUkos6xNvi8EBzw6vkFpCBSThau3j5XJVK1gqgYu7bGWCgWjGLbNhEefiHnYXpisJBsn2M",
  "key14": "63G45un7e53QcNjp5mAYy6vSx1sAT9YmdDn8zodKHTrgoJ9bExWjWYMRXakSB3EdhXYLJDT8xFET1FbYTYADG1U4",
  "key15": "4vVPuYH3LZJS75rbHd9XbHXRkeMQtouhPRBoHnWMhBkZrXvNunEcjYMaHSe9agSH61Z3L1tGf8rZLGvLAy7DttP",
  "key16": "mmSCeRXe8r15Yex8wdFqSvVS7oCWDKSoLHNAJTremZMikFqjdsCK3YXjzXCZvipgU93DQtqudhVyK6TDZ5Spdd8",
  "key17": "2EZPmke49qQs5hBMMmcPFa6MfJDHFp2zkdRdB5diD8tAqPJJKyZaWNw33L6torZp5UoE9VizxFaaukaSGR6h3kNY",
  "key18": "e3yk4tSngi2L4rkaP1ygtnUV9h3FAYh2rLGsWZpbPZM1cE1ijyUPVAwZs5vasgwkRwH1k36gD43hywEHNhL6bKt",
  "key19": "5mNRfPNfwFrzAMfL8i2XAfGX9r6c9g4cLCuAnJYzbZBGpcNvn998pPYSCdf8ttEUUfAZ3YrVpQb6st4PZgtWuYjf",
  "key20": "4DLvZG8pEV1e4fCP5aTXK1Tnf1hWFYb9FCYoHMjxfwqLmCDUW8i2T3ciSQL5x29XhaJSWPQpxzntRLCmx56BiJjG",
  "key21": "2aFgZMYws6h2oyTiyDALHaeT3rPXtmHUW75PswjFHwUdaxiZ52JtbyQSxVx8V6UZ7yD7fJejYSUoqpYDsQp2ie8e",
  "key22": "3huMWMV5NVQG9TJZV3aJUVELNpQdPXvT3eLM5bYqEEk8LFQUcdm7HuNmnNUJjmNJQt6T3EQxCn3z55RNLTz8Y4rH",
  "key23": "3mRBJjH2bs99nw3rBHPQM71oxoVSLGqQfcHkL52QiyPhDKrDyJC3ug3gWXjEzEFaCMZaWZN8EsroeGqondDtCx1P",
  "key24": "3WWm4Ly6r2xDkayhZgmPAg4x7LZss6aHYxVyQMQvASgiNVDrKwKdb5Pd726zMzBV1GyNegmMjFi3dBR2o2NrcCWj",
  "key25": "5QajA6W1CukhVBZc8fg5d4qxk9DunsLNFYdQ81a3sVMtAfWv28eyD3wfMFKQ2mQL8EKygr8uQYbbKHBpgKHRsHyb",
  "key26": "CrT3eMJ5hvrEczZqvq64jkzaetrezcQKmu4DYyjhxEQuXf5fz3NAj1JoJRW5z649qpgjVmgBu62NwCk6uNtB9N1",
  "key27": "4Z2QXdf8pu26ZLEV8iesK5K9bnrE3FoHfkpaHULv8i18gYCcFPJZqmuPmqHhxEZWYBPRtyfV68cApQ3i7AnvFG2j",
  "key28": "5xFcpHNFpqa1my7KFdoNEPshY8VQbXCywrpHzzoFV1u1iJoiNthGH9udWK9vsN6FsbTcAEeA2aHtPGXQ9q6pWnJV",
  "key29": "4wmAhFGLSXgRn8BU6yRfTJWA7wFrcve9ede3exL6U1FKTyd6mBiDxH76bVikfFNHgMiQtn4x1web4qgwhWbaKUjk",
  "key30": "2uNkQrK58dX6VANBxUD6PRcTfTv8exucnfZ4XDnYz1ydZVHWn6hvypzTTjLfA5E9VQztXqQZTFN48RLUxogvgoMG",
  "key31": "AfYkCGRwhDtDmC8KxNb1s8nHgbVfjsgFUM5B1RduZSXP69jXBnvNU7e6duEsQBqZqib6KjoyFfpKXjL4tNa7yJ2",
  "key32": "2QrdvfBNDAtcF4FQ6VEPiCw2tNrzwqtaSGkwejFtMWkGpLbeociSFXCqkyuFeHSxJ4xEgtMg9YpiEkEo37VXJCU3",
  "key33": "3DLNfAa6pk4HDzCY6qMTwRRAJKZWgW48ZUFXULrzAv5TXMJeWFu2Vw13TTKaYqUG6yH9JgVw2ZyxM2pRxLEKngSr",
  "key34": "4SZdJ1LLpu8gEsqW47hDvWQSbFa3xRMfUinEsQcLvfmGD1MYNKGjKozncn1XLDhPeCJtBEMtzEfXNxTDeHYTGZ8G",
  "key35": "5hDU4cEpR7oceYJCtTboN9EJ9ax1kcERcDFtvBUXd3NDEAEZTzr1aoiZXSJZtWTE4bhbM3U1a9Hg8WUnWe5Jqaaj"
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
