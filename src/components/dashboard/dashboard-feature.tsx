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
    "59tFD2iY4344xQxxoQ1QbGyF8TchveDmAqLw8hwfsZgHE3MiQ4UQgTFALxamRcJWTcp3Ddfmx42JPRDRna8XoZ1Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MzBgyU5g3UhZSVh2zj5d5GRbwY8zfSLSy3qtwTqUxPsa4dpaQyqzcuEHKPKdDhWYFYwzTUpmHdfD7mrSix9Qc9h",
  "key1": "5sUQvDy5ebrEoEMSYLA2gBkPKnk8295Nt2VhtGRyfDoVdN43QFAXF9BWCbVEwNWzsR7RRPAuM5HYxiYqD2Px6t6H",
  "key2": "23NapYfeNR4JLo1ryLt66uAfA6seK1g1DphV22YjnB6jBkDBQw8BpTf9Jz2Cv2nCQ34TfV38C7cqB2ULsj9G7Frj",
  "key3": "g2Br4kuGeXSPrcgMGUQ7XyeErS5NtZCwY7X14jsNDEhRye1sPrnAJvja3wpkNwLeN5eeAbBXnEHRJ8iNobNYjRX",
  "key4": "5EDv8WGPhiJcTGV3MCsSuVSpGbKAJnUTDu9GpWk4ZX9DQJvKrxpXxDNU1tS4X5UDoTeyJJC9QoWGXXYmDXhp1rZ1",
  "key5": "638p3rw9hFiUrkW6ExfiQK3wuiPmChZaGjD8okHvES1vPXHnkAtN4xEH941kbfa2r3rpEWzCYio1i7mKupt4u7Ht",
  "key6": "5jSLffv7TsSHvUeouATdnvWfExv9yPqpL2uf4iTVkqFpiaSNkH2mbmPvkeMn4ZqshbRxdByVq6xHr9kSfiF3NKrL",
  "key7": "5Y47hxprasmHfUr22PGJiukjeqvKhcJ3mHBXEMMVa9PmaifG9SnMPXyVkYDC9NdvCWsiSfUMqrWxKWU1V7ZHPLfT",
  "key8": "2vSzTpWDTCMD2JP1j52YsKhosmMHGFqb271jyQCzjXqGn6UcfXgwjnabszEyn2wuZVe3Xrdq4X3Hrn5QtbNagukV",
  "key9": "KMSUDhjyTNd9gtSDr3onFCCLTQvT9v8jXrcpsoph9XzyQtfvAxTdNcHqoodFFS7UejhC1XuD9AcKJc9qfPLc9ab",
  "key10": "4ExJcyDsCi4jPpfyM7TtkUWCcYnv1gqtBEqvmobDLUA7unx5cRjpKrcoRptuXHYDDPAimZgExMYh22aTdxTsAnFA",
  "key11": "3RZNgX2TDx84n35cCsDdz3gLJMnEkGmU2wBQUZTrrsmr9Fzy8ZjDkegmmhisZLLgU8MvXRJQBKt3qEcgo6TZar2K",
  "key12": "2SuHomnacrWhNmViG9gyDpdtVHR3n1oRCvTkAMaSwoF9M97hus8p14mv9omv5tJCApGXZ5QFW91UNJPTwSQSt2uy",
  "key13": "54aKRbNQzYsaHBadyb3tgn7LuXqiKrWhHB7DRi4k3GXQAfX7TPWSyGUKKyvQZ5xpeGGUnaWaBedh7NULdX148YbD",
  "key14": "3UqrZSPf6uTBfnftoMByUY5RuZixXscgwKUShU7X5Xj6mKQwTSvgebz93YWxrmDDW7QpqkKzriLHPKbr9TCBL5r8",
  "key15": "96R6j4d783tMiUvBTkFtCWkL3oD2tDAraA51VF4zyUPfc8SYdHfBG5d4vAHP1KNjGJBuLCG8J17p8fhhbrKicr6",
  "key16": "3ecPfbzCMKBSsnUc6AFEjYHh5FxjKYmV37v66YeJwvZy8C1zes7bBtbteQSR8KG7DgPYetmh8Kzr4kPMMuGBTUuS",
  "key17": "5f1jUnxKnLgBwCrxWwYC1BCrRsqgbuUT1VKANq9TXmQAHez7yREdof2V2i3LB7zwtHApVcjCfm4Y6U7gVoVmp5gG",
  "key18": "4dmxptmxBM2z1jBVb23qxh7WsrwnKhThZtXgkSuRZA89p9i9XFp6FB1ewBN6wMhxm7RKXHrPmkMVQ14XPuK87c9V",
  "key19": "2ghserRDLDLG4Xkg2Bmq53bzV6gF74RMyh3qRoyTJd64CqtNo3e4WFvKcRFJFxf2jS6Kte7yA5G1ETS5vfa6g5Uz",
  "key20": "3HGmrJ6WMFexvHE9QoMwPz4yVYDZRBDrNaPFgR4oWsUJMa7Bm5Udn5XowVNTrcbkwxRw3LvubvhJ8N8QrzWFj3LV",
  "key21": "26DJrCBwinixZhfSoENcCfgjTHyiAHdERKDa3hW2gTfoRh19aH3xMXtWCydQcrhMVuErDRyJH9BznaGkK34yRmpH",
  "key22": "2hBk18hC1S2kfhM7ryDsaBUViw5iHQvWzGZuchYvC4Rfu7Q38MB5P1bynxWEoMuPk3skM1kJqw8w3vgk3j9LHy2X",
  "key23": "2xei8gu1Ee5yGa1xVapqgjYgyuqScfsMv4QmA9t3QbpusQsRwGx8TjZGLeanfErd8gjpA6RsqfqdzHDWRCz8TYDg",
  "key24": "2q1JgeZ7v5qbFP4xCDdy3NxSNbAMura1sDxEDhAH5nyNkrXBKqLekhuK6BGLgKwztdmqb7Fw1unovtCzexzdVMcB",
  "key25": "3Mv5k2CKxkqSVNLpyYDWd1VgfFoeLthY8D1juq5WVWi9Lh3B7VyGywqKRQYVqDuwDKMjgKQzfFqX65Mm2hdQSzG",
  "key26": "2sWDpdY61Des5SYLdqkHgrxc2dhGkReCVe3HCBdQfDa8vvhZ2Ltfk78kXEUMHrEQEUyBhVZYJo4KxarU82BH8SSe",
  "key27": "4w2gmUSz7QM3qiUh6Nr4o7WKKZgAp5vPkRggMJrD8PeGejoqE3xB3YcxCvpcUNe6u1VH6wRRL6yAqxrTera6KKsx",
  "key28": "3raYTh2bFJ84yDej3anqek5wBxv9q62S2gPQ4QTRtVxfhnxBYBYiQ97GZdJfNVz9LieJM3gJ7E39gGohJTshuF8C",
  "key29": "3ZrsuDjfezWdHaVRprSyeeAJDsZh37EgGxibMCFeg44Gos8LHRtnpRGkrDVJFUanqdVmgM6uY8nMsUzNp74VCuHJ",
  "key30": "3BdoemSvsksPWiGPVDbfc3kpUT6cvzZJYAzueeihPdHa9eioYnNXwvZ8XncH3BXQFpZLLfYsVYiDjnTt5Y9VBRmN",
  "key31": "4GyQQbNtskF66aLSEz2CCqps7vK7vGNnRkG7oH3RL5v8SrxK5QsH75VhT6ndtGoj5969dsZCPDp6iV9sfCdFT7AX",
  "key32": "jzTdVoBzrqBHW6RYBvressz5ckRfvvApkJaHpRUH1YkWnkiqruJha7ZejSggRQbmuoQ6SguoEySe1pc2TN3oFFD",
  "key33": "29ERi19xzAhm25Kc5AQx1KmMjsutg5JxtYjGSobfnprCwcYJSESEGdRwwTkpb8xqn8mK2HgoxUjbxixjWkHQSbKX",
  "key34": "UkQXHEAksaDXY3ortme8qsmUT599SWe3foGatxvnFiZwG8teCK2ZnSZ3bwWPexC6sedJhVDcDWb7bmFxLB9ifcR",
  "key35": "5AwxyTz1s5ZtWBCT5XRypmpNfL8qjHm6GZEwJg3JQ1M7VszE2Moiy1EcSHvx4dvkomsCVNoywiB4aGJdbscmHQ28",
  "key36": "VesurTjbbRz163xPTw9hfvVQbXpcm9hvvLMzmvcuhG6zkZTmdoefLwXooQvBxiBnY5eZMvQ3Af2H4Lu4jfFS6pU",
  "key37": "3NE76UBvb5Ty2Lv639QwWRhR2NCiD7SUAzqawWRAMUgTzibt9WNXUuych76KJTtZuPnRTUqSsMk616eCD5JevcwF",
  "key38": "5yNeCEKU9UUfjPp4TgHiNhWQHUfFf3ns5BvdsfVV5gsAPZrNEbpsFFnnjaW8GMNeFQdHoqCQkf7DvWfbhucLn5db",
  "key39": "4GSzbHADn6sJGeViJhJj4DddeXe7xzRc1WDfg4ToW81CGyUfxbrp4fSWFgYNoSngd8bqwqCoqFhTa9EsiZUA5mFq",
  "key40": "3PWqe4Pd2wWEFnAv5YSX1jiGYSYN1AQxjmdrMwhFmiUH5niMRdFvAYP6fmDAda22KDENyCafzhU3pF7UeNcdDpht",
  "key41": "2LqMGwzRVspagzarbA3MwDCQNhBKEX7gzi5Fc65qfz6LBxh1MfQapaksWrHJ61GcDgWNQwC6Pz2YduGfb28aZVjP"
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
