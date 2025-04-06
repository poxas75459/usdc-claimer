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
    "26diQH7AFyHBCEk1VVJjjzn6EnzWG8Ye5FaZzxjP8gx4AF1MbXgMwCuHKknHuB2ZKZ5FYbk4BSFZR6vtq5xBzKDc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rwniFbkmyWSeGN1XZL2Vi8HB6UMRnNhL2Mqc7K1uHVig7N8bhfRejLpPwQztDMLK9ZqeiZSYL673WEirWgXf3Ta",
  "key1": "3Yx8ZtQyWY86N1sNEhzQYcdREAQn1wivcBGPubEJ8B1DJEpLPXue1XcPPNYGGiUi9xEeYuJaUjmaJ3XwVdQNqwJ5",
  "key2": "sompBmVeZ3Mm5PdmyZrQs5FFKhmtw5KKtofSeQwJFvPgqcFb2enEtUKFNNtsqkZkXqS35jqAXFrBQDHdXWwNy7z",
  "key3": "4z9BYEE1v833xpri3ZjfQhJCb6xRAeu6qQGqxzJnD5LrPYw7GCjMoC6TNex7qxHgbQYNLuZP1Sb5jSHBX96RgGcf",
  "key4": "5gn2VchAy93M2cTuZouybtZnCzv6HaKiSJyryPLjeUAphvB9SRqfB2LVkTJc3qHWGHNoCwsyW6n1yVx1c1dg7q74",
  "key5": "53oATcASQ8hjwH5AdaaH8snvchYxG4PtovYWFndF9gxYJPRnsdVd5APguTZC7vHr7ntjnxszBNnEwy14ky55sYnZ",
  "key6": "SHPHyZ6bjsUuPuHvjbibZ1MY7vP486essYwmCM4HCoxQXy47k1DDSvNyFBPUTT5wiqrhMrbtWHZJSkWfWNT33zw",
  "key7": "2b4gG3ENfuWdBW1uPLx8vvWbWqyCYmPdzHzdjL2ehiLD2kxMA1kHzvL2QoXbzAQ3rmokzYTFp7N93oqGNQivTprP",
  "key8": "2U2QCcarvj4TCBqPRuSL35f9RiqWsUvEgY1NXusNCYs9Fa2SUrLss39V4w4qRRk1SrXjk1YvCnwqdQouVktqjTyD",
  "key9": "4V47bgsvH6UyvFmggbnxuvQK6x6huKqF1a7CyFwDZTnChgLQioFaMHGFsvTmcYNyvBrfuugXXjSFkChS2QuZv4jD",
  "key10": "YZy3HUA2xNtSNoAfNzKQqdbWkE3XPAfxtXgRY2VDd1EN14JoJiHXby3w84Ej2JPbxwCceKxarEF7ezd9ubmP5wh",
  "key11": "67cSNsS8YK8xFxnEbzJJ1yvREsLZivnSKvZKb371PNe4FqgUsaosuSS6jRd3i1bxdzarNvJAJqj8b2svrSZ1AoBd",
  "key12": "wNNPPLoExeQ69y7GLjZWGr6UxR99UJ6mvUY1EqmkJ6uXijD2pEsEDh5h4dMzGYrbmCvnta2RpTn5QNZUEWBbZmD",
  "key13": "5aPmUh7A3K5r7yPxQTsqZQc6x9BXRC1nyoCrnVfBbue33ZCmivcD6ASysroEo2ZMDRNg5gSXvfFCgYGNkauPiNZV",
  "key14": "4nDJvvrTmMKYSxMY9UiQWbJpesQPy7aacAbyYV6u1dcABHPtcfMDSgrpfyzMWkNBExYbNF9RmeSenL1N352Tu181",
  "key15": "2EVhXH75cC6Cx1mEzAZbbji3evwiCHQTJXgMxLaJsb11sZa1XgLsjchvjvaX8TnH6i9MUP1HwZtu3xMVw2imLXps",
  "key16": "3Cq2rovx7RFq59wMJy3fBDdiWoE3CDja1GmcQrLpkGPwgCfzmx86MyqrFd3ARSEHBHytw2xdR6HvwjvPtWXotqmv",
  "key17": "5xVCcYwUDhrSMXJd9PBR1ZJEZ5ETXC8uCXaDjKshY3UsgecAecis8JC9cjWTCTVvBPJ8f9CmZiV51FtDPw1K1RDd",
  "key18": "3iZuZUZD6jADvGbhfnAtZEyHpG3v65LKacyhyxLPEY71DpQu9c7Hr4mCHJNhLSeHWiyosNzMdL31qd7YQmqYvLoM",
  "key19": "5aPDRwu66VcQkuwQdMBCyR5P3S9gcYoHnxbstCcKc9UmNwiabfoKqJZjqPjyGjnTzdfdZWrrk3AbzMiFeTPfB6xi",
  "key20": "5WNEtQMnRbYkoM741ygQcZH4WnXDjXhN1PzDTf2c7ptj5K4NnrusKYdJUSz5Jt3J46Qxg2dwRNX4TeAFE3DiuUc3",
  "key21": "2iRRjavDWjsuBtxQhH8A3TJx4nq3q9ZYbskGqgksRQWWsYm5JH1dCMpUNmLTsz8BbEVZ1qsmNhtugbRQNWV7eBNi",
  "key22": "3UL3CCUeJxvTtG9Zd8E5c4TJn7Z21LagZp32mM4B6GHmwAG1eKim6pRVE9NACpKAZTcuVqMWedy9tzH34t8KP1J4",
  "key23": "3gvJ9uvXXtrcMmtwborqXRrHcGQutUycAu3cioAEe3wbN5THXZ4sSG1zioL1AQ2EZ2BEJKg2ATjG1zbRdykXCZZF",
  "key24": "4t7WAb6fvqBS9b1fY8w9oBhienTdVKz8pNixynibmARbWc2HmDY9oUz9UgbbsbxBKcCFxTv1ZGAxLC5tcUYKYL1p",
  "key25": "5qjbGecZDuDnwj5TTyCumabWLbjvobcF9d3QZHMPujyeQRtp178xSqsYkbTnvVKBNRkLWDGx7LfdctpEPxF6jXtY",
  "key26": "oPY4bPP4h2xfgDkF7RRo7GUdTZM6QiTxmqSjMX4pfWW3ywAGuxv8S3Dp1d3f7NZmuxpNw9fW1mt5Y3JhPaCUQW1",
  "key27": "3iRnNnQuR5wQFVjyUoq6bmMZGmE4fzqhymGSVLNqCvis7QdKAubfepzN1HrKry324Vf3DzhJrArwwWvqJX7MjP1L",
  "key28": "3cvkK8Yg732N7xjsVcMXMpxzYqiensivBuNYnhsrx8AKfyy5eH45Ymf7gE7UcXZSk6rjd4tCsh4yrg6MukSyVHTH",
  "key29": "43R8tjDdpvmN1fx5z3akUCp8tpGzvyKqy4gchupqeVvidRKqoYXFpRG5ECU6rTiptYqUj995DigZcA8ttEDtTpC8",
  "key30": "2pghxpvR7zYDBcPEJEayTPRSW4TK76iDNrteXoQ9Je8AY8GBBFnAPbhETQE1rnBLZN4x7FdFQHQ2sm4FQkHi8jRH",
  "key31": "N91CKVrmujEFeRQQwGyo4kwrsTwWep6xrFV64xy5KU8uffdRyavRkvfb3J1fzXCXthkYSFdrVtduo7q5a4nvUEQ",
  "key32": "G8Bv4hoLxPs5CC8dnB93sXHxByg55S66rRDjZDvKmjdT6X9w6YTs8xTkfzCm9WLi4rqENn4FYjW3FtvG7EzGiYh",
  "key33": "2KRZSjLrxcYTVLf32qwfApvA3RPABTdvvLMA4amve7n8zsWEN6nKrFP2YSf6gKEEtgnDb84VRTtHpHLZFzZx2kk",
  "key34": "5XPy7tf9KzETEg9Ay2fQBixUMYsQrFErEWGF9rWHNqtiUdn8cYyaSF2DVtDpgutgRbahn7wPLZu1fbEmMjqVrCi4",
  "key35": "2dSSmmcgP6pvwyrB5BN2JHapvx3qMtvfS7K7s3z5fU1Uj243vvrwYrc9nu6j4tzksjEg7dTn5oe5cTAfQocKi1fj",
  "key36": "3xr68SDJwZytRGfg7Yk7DRiy2zZQAP6TXmndn6oDBYRHWcs5LN4kABjRmrHF4m2pkvrAHjVc8mEchJQ6Z5Lwp3o4",
  "key37": "2eeYkjVrrVYwqL1ERRA1NdRqP91h9sP8Nwm46m2NhiiH23H9Z9Rtwe8v8G11FVEmsbb3MdueF7sWgKwHksN31zXW",
  "key38": "4qvy4CSvsm2yZKxkoRertK5mCrQyp24kQZG8d7XUpmMbD14wsPEHj3VTY598mYGCBH3T1ctRtbVabq9Xwsn4LwS3",
  "key39": "2Lz9kZnEQUfNZzUbGHWbRCtgcpVaqjYSXSUg8RokhMipUYyEK78JwpSpnDcLu37S1PsvzSzYwAKYfADnnn3kph3X",
  "key40": "55UVQKLxTnZiHArJuHmH3aGQS1obGb91T1eH3CZiVkjpwXRME9MwqgggWYyKgv9WwuSrLbx5vdq1HVpinrayzG3k",
  "key41": "58WaFzEBxtYUA5CfmA51qVWMAToaWYZaB6MJ9sR64RTvBapcAUov7md1v5cuXTSc6jUeTb7p2Ay5qjQZvrr1foV4",
  "key42": "33MU2PBjh1YKYarTiSVaQFwUmgMP1hBd6TzEot5hL783j842pUKVnwhV7HXsWTk9CktXKV8PywtEo9499j72upCF",
  "key43": "56AGuGUbt2ybSEpJ6Wkr85L8mNcjVaBnGYozQHnrUnXdc4Vb3pCUA3DNiRbonnWvDP9JTzmTnxG9zcS2wcE8cmEb",
  "key44": "2TzpVQ8NsatasJsGj6AxnBDksAhmX5UwLq2AzddGkQYuwwiUdEU8ZfAsUF3RG7AVjuN1X95SZQ5La6gBeKCrsT6a"
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
