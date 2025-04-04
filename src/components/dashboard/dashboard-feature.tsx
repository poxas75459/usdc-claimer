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
    "65dy7KZigawuxgxg72aZvyEXz7eATNjL4W63avQtj6P74JPzRuN5KFVLmG62SxoCndbp4ovRiwuFUtUaXMGV1DnN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27YhfTMConfqNmjNUfproK7jCEvGYHU6yKqiUjsTCsyaRVdq9VfVEKqCo5kYFhexfyp7adZhqejfUs17Squ4DCsd",
  "key1": "1aPffywyrZknFg4eZyb2mkPYyB5DvY5E5LUGEB7owbLYeUy4qU6Wp6w7H5zWX8HBWZrfKeFFhr9HFiGWKyiDyoJ",
  "key2": "5EtGD7jXEQp5LSFDhYp7ARwnQn7L9Gy6vADKcZ2N3L5jtN8Sp3VJBFNJn71ptBd8F5hQTjzP199bQQeDYkrfZine",
  "key3": "4DwKYbhMWQcgbuwqrrwpmtqkWTkAkrHyPJaid2sqN72pknBJ3oUS67mhqN9djRueZCggMVSfUVbveHeTA9Qg3U5V",
  "key4": "2kLBSX4VVomJGcXpqjMEsCcmMCogkYgo59Dbv5MHeC9dSAbAVqw3EBcWMm35RegaZJg7vFMYpzfavHKnUEbpZqcx",
  "key5": "3g3QmxLnoW2G1aqn9Ju894GCaAhnnYspyLTxJGeWFimKFhx9MkWKUAQtAuARCBsPTWnktyENVeVea6kZ7c9kDzRZ",
  "key6": "66ZBEeYeSZr151BAExhiLCDVYgnQN75QRzeT3WyNs31m92MZyzNAK8H67aUrCJRDfzv2gWfJ8vvYdmoC2ieraDaP",
  "key7": "3tiRaDhLgJnQAuXoYKjrz7NhKg7YXcADfEB4VEXJipfGYYZ7MjqHcwfprRCG9GGwVhiDB27DWvnQr6coRdhfQNMP",
  "key8": "2dAvA2yCREBpHF1A49Xoo18KG7kFCHqy1N49foe8J5w3bwhZXCsDvWjSDqgBR6yDVrEwoarD44ADj5StyZxo82vH",
  "key9": "2gByQUq5usTYWvc1dpvTht4xNbT4WSUL2MXJjWJAG2k1mcdAXusy1dbn4aVyhYr2jRAqtExZzDjftTP3xYiPSmfE",
  "key10": "5MBXKbkicYCzXwq7v3FLp499V4K6hJE2rKfyvdBSCF9zexGqt3SsCc1wsFxtHyiqpmvvZopsfvpWpYMqmj3gP3Xd",
  "key11": "33wQimPjyV1SkvfHWiZxyALHYmCF18dyeuCTVkDao9kS1y67sMZ2DN3gC3z8Lc7Xxn9je9D7aqxenV5djcpw2tzY",
  "key12": "5KKJ4S4ErQ8XS3dpSEzWgNqqr6o6iK32CXmqZH3nnnB4SxNXXQuaEXedi5vNMjWvNx3CWsLEiDYqBUo8Ljbdaui1",
  "key13": "4HLQ1jXbUikjAKAch3qjHvRhEJNTnngJrqFboMyi315kh6aKhFRq7kQH4UXy7eVbzCwQEKEYCzezxojrBu1SScsR",
  "key14": "VA8T4e4w871c4cFQRRAzEH5uUxPegpQsDoLESKfEYxpzwuhUaoU1TipWZW4gXVHQnPg32yUc6YDG2ee27BvzmBy",
  "key15": "2tYywkQ6thWxupbs8t9wCjhs78xmpjBH6JhaLERXyxdogo2VKEWFyNR1WSwMsTEYY8Sxook3kxwDeG1gkGRz5w9N",
  "key16": "GHMLyr9gQk6XN3mCVB5ZiV5a2eZibJH1iMuYPrZMUzevDawJeDST35MQEbB3w1mkkq3bZ6RZ4Uimx539W1NKi24",
  "key17": "KEYBffZb8Bx3S3KTzJ4G8voveUuJtiSdVe1LMFSwwhXPTumbeumscp5s9gYQqpmB3x7qtyVdmUTkg9H3CxXtmt7",
  "key18": "3MZ4HuXeqheUfrgoC6SKBgaJCXXEF3djZz2ADFmXbAEREjNL9r9LZfc7HiF8BVoqgxZsdicrX9aUR9toZ34nmYti",
  "key19": "5XWBppqEwYvWkhEgRHvZDQJrLMA19pFsR9kwCSZ9uYMcX943AFc7T57pxQn3rLYvayQWYLkdreLJijgQpSThFVqe",
  "key20": "3iorSDyCjrCu3BVRADGsQC9NwuZmzg3Zibbch9Wjzaf9gFiNVYYymLGqQ8paG3And7RXDpxrLUmpTW4QjVH7Zk45",
  "key21": "3jAcaeJ1jzQPaVFTYCmNXZ81uS4dUPUEQQxKK2ZtiX678otuq7Ya6Fne8uZet1Z5yomwjSqgYgSVnYCYnqf3fWuq",
  "key22": "23AgcZgdWZJgYrttbVuqVQj6uvqqBwYs16vsgPg5uibvKpUiE6G4tg4GhhwFYZFQ1tWv4KyAUjmG8ooNKkPPwBAV",
  "key23": "2aJUMc98wyY9WwAC3Ux4WHjfmLnnHnwVXG7GD9SUovWcax15qxU3vjwvgytJ1ZgvR8W7jiBdb7C9FjEFz44frXva",
  "key24": "5M7Sh7QqEprtV8KnQiC5UBJzvhFnhgrHk6CvXagy2D9srH98wLyg7inpXnDhnPm5EzuMo8WEbYWjg7NyHaXsThYa",
  "key25": "4sJBNyozBSmNPoSkD7nbYyTWQ6xdSWgn1UJuYnvYesNXJmruTiE7RJXg2byF2au9CeNG5vLQUp5MoXY4Ln3qLEcD",
  "key26": "2x3NoH4K65pv6ptadw5GQHaywLxUYPmTYQbt1G5QpwJRaNXeTGBJFJagkzJGzkgZCVTgiMvEiwucr3rWePJSRKfo",
  "key27": "5ac8kN8qnA2bYw3wYCkXFtBoUnJcwgd8xQTo6ztfFdTLmpvkr42xzqockJYuR2svibtAygJwXjH53AsurFyLd3MZ",
  "key28": "2wJJ1igUQM1ys7TvZqPfQHhyUdPMQVqt334EYZxsVqZuXBPSAosvPqACAqP9sekYWx5UEst5pbxjsYJvfZVp1VAe",
  "key29": "3mbNdjZ5gDxU8PgCNXGBzsx9Ncq3bqm9puVYUNB46Nybs8NpygBt4hjzDaaeKcQJ79PCFjUurPB2QggnT3h2bjCg",
  "key30": "2MC8b6bZG4oKK8LCezTNC2YotG9dpFzLrLN2eymg4ZhGeXcgKh8ss9tDtkRMn52wVqL9LWTwQmgUpYfAecMNuzjh",
  "key31": "5SnRXRBryui6eWVK5bcz5w9sC1ZwQRY9qEXEGDh7rRJPBhhK7PenPWMVbZNW4k2WLGc6rJ4nuNGJmHzgxXhbqpAP",
  "key32": "3PsKKEEqPoGx7X73vFfXh3H64CX8miyTiB9VoqkcjQ5oNHSk5AsLqBhM5bRWCtMMavYCuD8YxHXRNDtxL9RungkY",
  "key33": "56a2J3c4SBUTywabdX2orEVUzxXfur4DzQ3Gg5q4iygHVpHfd3fLadRRt53T9mD8vgNkpoiUg8zCqwxAFFfYgLfv",
  "key34": "4ztqUNc594yswLRNogPdDAVPb4ZtiCpxzxTAoMYSPSwFunoAitsfPey6PLEFV82xJYE1muzmKEnd4H4fKUkMVqgn",
  "key35": "3kCxC7s14DRT94hhVwoDZEp3N9WBAS4VNrdJMhx4DWWr3U2zGfNGppnrk2Lrg7PFH9StfWYpRhiS7qJSqYJxHZJ3",
  "key36": "23ZE7WicuUuNCXqDTAZJWVYNKuCojqS31NRapPT6RWRuQjuV84rJDxymE3c7DTH8GpfC5g7x9RninVBLRpZ93rzM",
  "key37": "5jCpkarAL45SvAc2J3oNxARiv9T2fr9pvN11W4sL7dPVTxPJoshehHmKUzSMdgJLSfgfGjg7Wn4hrjnaVHbSoxjK"
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
