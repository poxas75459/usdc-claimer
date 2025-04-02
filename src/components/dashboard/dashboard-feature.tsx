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
    "4ohBB1nTkiQTSYJ2rpSrKyFB68ENX3ETYDXYUBgDND7LfpchpBAhXgws8KcNWDrNeVJaetNrDtdfHNruZcrpLZin"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tNU6JMYuHg3zUU9aHdxCV4qv7aymfY3HP2zJt3rdmJZqE3kdrcoz8xqGCoCMBeb4QYikkrMAF9K2MyXPBzN1UCk",
  "key1": "Z6iv7k2U5j65nuBxNgQaLPxfR1Pd4ubbWT1mg4EDugrX4aUrseSQ7tCGcofbZv1qoYruHysGmu6fzPKTdfS6aUN",
  "key2": "63kASTW1Q5wR5S98aTihhm2puLNZKFFve9r4FmywMwn9Nwe6mbrwKeQwNveqw7D3kxV8zh6WUfpBo2rJJkBBy3Gx",
  "key3": "63NxxKvPcsKsrJCrWmqpvDMSnhdzrN7sCheAAApmnRGwsSX7ynnr7Uo78wbZCGPMf5EWPWEAkZmWDhA7orJVUKTk",
  "key4": "2TFJNFXyLTQab6J3LNbCwEZtQYaYPHPGefLioqrEhJnSBN37RZcoLZqfGpCwEHH2Aq5FjGdyXBu96eFGjZdTh2Wk",
  "key5": "2wHnXvMn4MkmcJDqFw4WBQ3R7NjFaBJzto65gSQHJXmpb8k49XaiwWEMy9deFK9Hz2Q67x9PbA5wUMsrEANJhwqb",
  "key6": "5Vtsm66LVopUoefywgaTymCwvtGD57R3hZ18svg3GApXfBqtVWQ6gV7FceuuKWtFJg3SFViQHQKPfapBoCJfkp7Y",
  "key7": "2SaVtTsokqCP2rydLUgiGozxyvoD9BEfdhJVDDf3MR7eJckRzxuSGgo3Cwnpk5HSxgF5xMu6gcxvoZ7UiMCc1aMd",
  "key8": "45hzAURbPgvwGtdkEx9AxaCL9itRsPmgeUjfaPgRgqwcB6KBPCBh9C4o3CevRzD19PeUQri4H1ZwetYThZ6pESmB",
  "key9": "3UogG7G8n3woCV6Bdb5MdWTTVtpkayHAG1tfyh1x839zSJANXcWKmuwk1VbYf1LbwVfjGezd1BXmsXtXb6kCPeFD",
  "key10": "3LjJXQG7PHMnfB6quo7AKa2bhKxec9degHepmcj1aBC3GtmQqwx32NUkD1pdaA6getVjK3QfP3CCnNzF9N6ku4PR",
  "key11": "3gLehVsBW2XgfVG4X3Kvsd5rKeCRcndHQMU2fTuExQgA1SadESmmRijhZHA5CVfSTwRA4o6azFaH9bfeamV7mW5L",
  "key12": "FNdpfLL4Er1RpLrGodM8VXceeVjyRnwGxguiBHEwHmt1o7jHAnRYA5XsYmZZHPxFRCmHJzuy6oNhR925Gbebzif",
  "key13": "3WyyiNiw5Ff2mpKfbgHJZadW2FurYUZKC75WyDT6PRDTXe7hrmZAVf45AVhgB6VkChGZLJVdZA8jn7jNY2NZcQUV",
  "key14": "2r3gEvUnJBkdsdRAnD6PFJQLoE6uXeH6ZF8UAQCd7mqHms9EhfJhgER8tE5f3Zfep4rqqHQx8E3KQPTRdr9nctRU",
  "key15": "2EdGu5f1V3L3MTVHpAcUS5QvCkP9m1HtEb2Su22z1sBJx1yCSjXn6JwKZ9D2pphZWyRH1LMprETbXUupwzSFn1Q2",
  "key16": "gBc3gx81XdUJZNbMdqbtcXYNoyyjAaRU1aM6oNdm3Woz4NNLgEo2zBEhgU1zbiv9LrQekDzcUQqYT2wLZC2i5Gi",
  "key17": "9qpxeatTbJ5BruqcpDP28dUhJQVHpxtStKBXmBEf86YecVRjjycS6MTAskoRavhUyjTSGoHMRcRaajtMS4LH8bB",
  "key18": "3CyMj7n6Qo4nmFwncbdETSNvzMJw33o2D3y1yP34o5rs85cqgRNntRMw6Fye3T9ptPjpipKWQwBU8FW9m9pRZMDE",
  "key19": "5GhdFtC3hCDNLpkNDmjXAEMvvEWyDDb8VDMj4YNQ5zWqpTgDAAjMUkEJPMR5dbxPHrbn65kwPGRSe5EGqwyKc6f2",
  "key20": "4e7z1yNAz2rU62BUBmT11PdwJQRmyR1UXyuJFbjXRQJipkaDtM1nWxJtWFB2hMVd88yY6aEpfJcAxM3E61yVneCe",
  "key21": "3jajzXFVzfqnvHgVb7GYfNGVNf93iJNzEKNRk98WnETHjdxTf7NTfafp3MtEW3csVdqm2WNApUhNfx8yZknHRquT",
  "key22": "3XcEPfAEVQ7rW79BDcWypQ6nB6ugHLCCfNoQnMCoiCr8mn4BRjxoEFG3MapyyEau9xjzRZWg3Wq8hnoUa1eDdNc1",
  "key23": "3mj2imRjsMfP7gZzy9oQ3ZH7RrfUCaoqTz325d9tDWgbjWrCgFY8ws3qmvZZbYJeTUGdy1puys8gP18WhwmExTnq",
  "key24": "59tnRK6M8td76A2cftjXRLW6zh5raYnr1hKGqaQ2gsP8WKMt6TKQ1orWo3aeHifg1xcX174xM8FHiqLzVb7PoDvw",
  "key25": "3CK6PngT98i1ESCftP15ChjhcKrD6AHsJ9VdH57nApQFECa6Y6U5VQF6D2oBVMCtgTxVTuHaKBqPRAFQmu4TScdd",
  "key26": "2UrfweRPfdfiXEvkWRgjA3eJNjYjwTNT9FRnQAgw4V99AA3imPafDs3GgPKL2p5U5VHKVGiCq2A1jYBeVrkxsokU",
  "key27": "313QQ4CxmsLNXxLixMJMbr3G4h2ZCY8D8V3SB2khNdGTfP5dc2yLhNEcTDLcYH7GN667oNaCwrGoJTYMhmfunZsH",
  "key28": "gkjCcYFpe5yk3iZJVfF25CJK3b7rXr1bNeZ7gXhPvqsN1QaWoNZk4rSShfHVwh9g9qBcPCsBqgcmx7h5pCXGCYt",
  "key29": "2dxB8tWiNJhBwoM2FkFQQrPfot1M2L3j4Uhwur46X7zvptyUfycoprxnM63h6Qt9dsNyboKugPTDqWtQpumhU7zD",
  "key30": "4a4nAJfgagiATXPZTvcFKs6eeP6YgoSq2m8ZS3evUoiVXqDULoGcLPfx5o9QGGz2TrSuYBhWXRYrS22gzC5z3g35",
  "key31": "3TFKKgjBKHPgvkw4ZkwmAUxghTJ1ZTQtTsBTAmcEqWnC3TeWkySzf5ZGBs7gFMr6S989Hak18vYL9XxfSHfk6XKA",
  "key32": "3UpBXdAHP6rgK7yxH5n3m5TZZnGD7eirx5tA5PPJSynjH4xY4qRin1rEvRFGJck9qpPLtVU4oQd6EXGLjAhAowV7",
  "key33": "4XJHxm6DEQDrJaAvZ7zAQcYR4wVxB5AihHJ8LdVjK6rizVdwqcDJSdBscdayaKefi8dKmbgPTr8XuytBLbgsEWLw",
  "key34": "4T1BHeofY5bGGauK8e9bf46QC6wjghiMUvmwuVT2Xi1eZdcZXqFLB95CzrE7LiciKDpScGwQm5QKaWRpfsUetqGw",
  "key35": "2qQWJuknZQHab5AfKyjQxvp9KcWmFZ92HwRVLunnTL27tNUdV9xmN8VU2i5X9aFPVWZF5xUgpApvoWuQHWdKkBML",
  "key36": "2wbxxwxXRLnExthRfN9J2ZZ68YPsCBDsz2VohQLSmqPbfKTHKzaU78mfoCvqjfwQtcszUvbsB2CJ3TX69oj38iPC",
  "key37": "3ETqgZRMxXxK8HTP9kauMcEGtwcMPeQXPfn5XnZVM2fZej5LcQqzgxFCVduqsRoK2YvHeFM3WtdUxpDqEStEcfWS",
  "key38": "48XKUadErrCJiAiYgis9oZ86ZJGDGxZWBbsPFdcoj8dd5cyk5wfAjbq8LPHTVuU2zRpCeCHVbppBXfAiaE7NKyAt",
  "key39": "3WYxL7zXV598sivvLxfwv5UQU8r9rCrdaEg3VbgaqDhENm5GWmworwp2PQi8TDYA4UMbNQ3xAzVT5d9y1Qeqrp1n",
  "key40": "4UQGjS1KtKeZW7UEVQwwWHS9e818XwbkMocFTTTGnaqF2zhg5isk5HKXspEzuofDGUQvKcqz3rxRmPdqyMun7zf3",
  "key41": "4hG4D5KT9Z1cXuWD1Ta9psZseJKeWUiCmQMRv2uT8acFPtgaXBJ5XYVqyY9b9TydRTBrQzgX1EWXSTAuc6wFcqKm",
  "key42": "5oMdvbavRiZLtCZDXSXzXSEMEe2zpmg6jKBw533o4GyEMAW8TATArW6Ubu5N9L5Bbw7LoGeNRK4piF9hCYVGFok1",
  "key43": "4rdnM7nFmxRZGTYQ8fnZEQ9xDjfhpJSPF8uR8wrLHHaRSRGDcF3F7bHgnbNdWSjcsEr4mEdbGpmRMuHkD5PeqUwZ",
  "key44": "S84hZrFuGiczns9zfPL8LS4nMo1nDMD5Sg9TukuS4xnnXAkbQ5cuUsyPTWY55AwSvhakP2kYxbTuNJjrZrLHxsh",
  "key45": "3hAo39K8SnNgcd3XhzJ37rrh4wkbBBVJ65kN4FXyj2m295puDH3rJT8pXwsHoZXfQ6GhHjgmuAeR1HNY24KgrR5M",
  "key46": "5PzAcbCUFeVFk3KLYsyWydMaYv8GWQuwR8QT6oyeEqirvezPQyUBcWPwqVacnVumTUeY3gXNtUA6bBV7UVB2ohs6"
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
