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
    "Z53p4rnkNALZukPC5irJ39hpP8uFEbV2sidomRWKFdYBvFJVfuyj25HZNmHanaThsoEHkBnd2thMLLGbPF9YRSx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Pd4w739RP9zLhcmFhwxnQyTPwU8yU3TvaUxRx7S1CpYRvjJ4xmiforjjxSw2abasH15Z7vHWUm7ZWzhEapCNQrL",
  "key1": "WL1ZjupXAB6PXZukNWHSSW88zRxA84oH1QicPnHyJoWmLVh7k9TBsZXtpzzvH3rWEwHg1QFJWt4wgqG5U2kH3i8",
  "key2": "3aPXppAuBb6QuUZNRYC9h6xwo5vXjtrRytij7VpJzQ9iTLAXGA6uTCrpXGL1ZcXwdmiFtVvZDwRqgtobdYGfxi5",
  "key3": "3YQs8MCkNSbV5L1NbNbsuNcKVgHs1wauKSZkTEZPvcF7CdH9GUpCLSoWKZKQvnzfkfxqEdADfZgzjSdLWh8R7LU",
  "key4": "p4RtcxczibWR8rG2KCwMhRSHgETTEj4661Ud5QsH2x6g6mn4iQqPrDXmmABT5fj9WhLn2hCQrTKYkMwanjB94fN",
  "key5": "KH9MZE6mLus3J1H6raTFhi6pFmzKVoDD9DJyKK1aqHWeAm2dEBYLUVMoSB4nozdT5vrP6iC9s72pH4hG5xFdz1v",
  "key6": "3biE4Bja7nAGYPsjF5HNK2N8SvKHcHQmeZZyrX6sKNp13PqcaX7tH7jFFZqjSWp6fbBkC6YdY8Vj3uWxiERkdW6F",
  "key7": "4V7hEcbKUCnM9wUWQJMVnKwZ7EdaQECKLXzXAZLo32BSrhxLwAgi8ctgZoD5uzKfbgaVNNebULYdr2UspthZELXy",
  "key8": "5WtJv1FUH649VtdycMyrww4J8xPo64ycZvDjLfUhk2JwfncBRe4g9NYotABUtZrYSFBvCmHq6sF9H8JcUzG5HdL7",
  "key9": "5urP59XVV1TbfdfdMyv4QxkxuYoAR58TF7meuppWvRT4h2eFZXfRbC7RncCmGwmufvw2ZBosgEgk6WSKphMhkAr4",
  "key10": "518vnyh2f91Rsam2CX7rbRy9tGtNDkhqEAJUFCDqu9Sm3g1yBDx3ZwsqPYe536Q961NEmAQcbqPJdid6KLW2nwKg",
  "key11": "4vm6W8MpX3evuuTxh8Srn4MwMx7iAsdPf2jGpcXGZobndcJnn6L16PV2Run9xuw2EUy7YhT7cW8YiSzn9QELdZ7p",
  "key12": "2tjzeSng3wkM2Bx2m749PwfJ1joQWi1rsUyeigRpuT5E1toLfTDJTYwJvnpBCGf9gGEVoMK947Bnv9e66nu3aSNw",
  "key13": "33jae2uURAQZgTs8dvMZcQoMCV6fPnQsTbPF4CVFXxzA3W5dawwtgUX1eAgJe5zboQsBvLdL5ZYHEGxDRT6VL7rJ",
  "key14": "52P7m1eZB72zDTkX7KquWZkFuh3TeTBYGEJbwxmKMzuU9nzNcXsgxGBNefSEbYh51r5D8y5ScafQjPG53VrNWEiX",
  "key15": "5fdPZ24RVUqVZzXvZ81qo7ELoxp9BhtuCF23URdqUDpsUoPLVKyfhRoW2S8oUJDgYuZ28Vr7ZAdMiDqokg8x5e7M",
  "key16": "4fuVEE6D53oWzFpPLCu8LgD44AsLSojpk8bkyBYohY8AzMJhDHtXYbg87aKFLGrVbAUJhBRDQ5nJX9vnWV5fd65",
  "key17": "UERVfKp3pe1AQwFmNZqh8wZ2zCnMNrEqM7rCGVMzfXe8ztpBD4D7YjnWNwyU9B3NhcvCs6q13Aoidww1RGEkc8P",
  "key18": "5NEL1GT74F2EqgdeCGad9sYGFxY1TS1brXXkbZY3ryenNWKLDK7UwuC17s1QPshkeeYj1SDYwnRLF59YFZrcQuUB",
  "key19": "3K1sTtEZyAcT2AutjaSiCM23KBTm3J1hEr6KdkFzWP3xHr1h6Si44LeKEy1eih5GFnGQNVZBNqSSodQHNv9qfUhb",
  "key20": "5gjcjkpS1gNNvMtUgAyZi1ZPpEqhwWat4CRKPVBm669iVogRaHjRQcyjD7ZvwyxLgbj6nJVDC5uVVivwHNZD2ow6",
  "key21": "2FZbXoPhHvZX3af4ZvWAjqBxsB6UkNE2v9vRdqGhRh2bZZ7smgUabuzQscxnN3Gn49kEUEFkXt9DjyKuZWZmXPU9",
  "key22": "iYwTFrS7abveMfY1TprZiKvVUjg9EuoECvJr2XThxkTsPnFtWD9658SHZ3Rro1zkgcZBrR4wy3NukzafAPGzvGf",
  "key23": "44BYVXNJrx6PTV2YqcdprvWeXTAtah1eHnBH2JgVU3FiHP9ME2UqSVerC3qsxpEVX5FopszdXnmS15XdnWGL6MwB",
  "key24": "4HkkLMBEbrK8nQoiUZKgDqPSpLoCab2vh569E8iDsXHMQUewexdKQoU7kmaGUYYpXX34hBGPjJrHDvUDrpGgE6B6",
  "key25": "5vm4YE1y65WJW2TwhNNPAuSkQtHMjtJKLSut13dwRP4nej3cm4gS5EDw9wQzXLEXj1pyzRgzLXktLeU2HDVxTB6q",
  "key26": "21PrwNDkZArazA6JFdgQhtAiCUoruqrThwXnXPTXc7iGJUmT1QRJ7UZAVUhahpXuSZ2SnsN4eUgs555M7kwjdF4U",
  "key27": "65tTJH2yAxu2kvubErtxZW4NUwWsPDoxbxkDRgzDeFt8koebH29PfRxiVKgpUPTS5c4KUe51N5qRq5LHsNNm9M4d",
  "key28": "awWrAYvTReiBRVjS9DymFecrtWJyXbabBV3GbwSDdRDnApExsZirZcK85T1M5XdzBcUdcQYf5j3EPyh6WB5dM73",
  "key29": "2tAoSuReeqCFDyXN6GJqrnDb32CMcZ1XSFXVpiM7Y9Xm1NXSqDLJTP8WrjpCs1daMsQLx53YQr76P2VQPxXgyrWR",
  "key30": "54TzYLibhN1so1LH4UuS5sY4U1RGC814sa9GZem2zgWeUyvdeknjeeg1vVvCGvejGb9zWrZR5E2MX9PVfJs9T6VT",
  "key31": "7ikivyUyVbuyUo9yaAG9AsJwb9aWdhPHDbKNLPqG93S8THkGjz5XCfxSJPd1qytJXzV196jqsLgdScLcYeMF6Gn",
  "key32": "4a3suQkFqxrDdsfhR2Ydivzkj7bgJ3EFJVfwty5Coan1VfFtKQcsixe4RNoNvB55CQoovUJZktkhxSXaDrakfigU",
  "key33": "NzbGfVvbY6xbmqV56R8SPsjz6LWZaMqLSrp8yWVB1JV912n4ANgJzRdfd3gTyFZbU7PUzUyLitjpET6dfm9rasj",
  "key34": "2scpzTCBw4pAxVWqSTuzEomSd6ijFJKA7YoMUVsmR4BJEx1vtFFfXthcoZPfsD7apNs4e15RbW6GLWYbKtdM4VnR",
  "key35": "3cDekEL4FUDmQ9Lk4WdCf15T7ycPsCVYXhkVwUpGFxFB6wijWEbExgat17wLQL8CwckiLFzMzKi1jFUZX1AWxtB9",
  "key36": "4tot35sYa1K9eabvX6brtoF9ec9tfqDZDF9a4k89x3fDeteKXStcy523wpdgA8uw5TcB8MTQkzPxdefDSUvEjXNV",
  "key37": "2RjptciRFcGiQP1cXvVePwj6ozSBKovfHmu6TZcpb9eMtD82s27ETRXibZovjBERJr8hVgZprqFbHcxu7qd2fSVq",
  "key38": "YkcmPMtk1dQRpHkQLCDsX41HLwDXQvmsUzWsej5QY3qpzeK8U1vTE8KQ1N877dKisWujJywCT7mThR6dPtEy2c3",
  "key39": "DKhxWrwo2YbSqzKbxH4whNmdhxNdHWS1b2twZ1ntH2PzoUMBV59QyCQxbN9ugfZUaUjJ2UAxsEgNENnd1j4TQKj",
  "key40": "4RW8FEBj1KqchjSPtXV589PEHts7N7uYo25sBvEXKNpqW4FMLfaoKGyr4rYuNWoxixJYTqJovtYchqNfFhmkrWzp",
  "key41": "JJA3BgLEHSYuto14f7NyQpnu4Khna8JoQaavAxqdHP9SBwdebPsXUBFkLxNu19hWZBK5er5GZo7SVfASfB13L8r",
  "key42": "2eFpUTnRfALeyHJU7jV8GQqWB3PmiVKEfRXPazb4M55nuLXDAjhbZNVYokxcRLTcYjdWmYxqrZnBm7eNQhDdeN4X",
  "key43": "59etfsU3ksDHwY51bcR7ykfJfdeZUoGwDcULrGgbkNZ1zAjA6ejoKXjuj8H4227BEfC7Ln4EcCKgqPZ9UCjXvNkn",
  "key44": "4ai2z5WdGMr7TGp9SAtcAE2LL8rnPZgiXQ4nVmSSNaX6KR6v4iuixKhzbK85FfP5HdR3DPpscqoYp7VbhzrafMZQ",
  "key45": "4ywT5gK5ryTQUAvuBWEe9G6qzsxnDAtKQUYQQnLmZCxb5TkAZe78aHpw3a285VuFda5Cejyn6vn9bNSjQbg4HZrK",
  "key46": "1kB7VabUBVWGegkjSBxA6QqJ3e6RRYnSjwG9v5sZLozmBbGV8Fpi6mwkApCJg35VrKuNErV1zX4iUMeDbH8ugHg"
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
