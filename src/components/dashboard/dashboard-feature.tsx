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
    "4z2Yf2tci6r7D2iofWA9pKotFDMT94ijzBrPQovA5ddpGj3vPZbaV6Whoa9SQC17zd7BgdnoRjpmRuscwppp78o1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6oo86K1on1Qjtqki4BKZBbeRWcurbo23s8bqKCi3j8NaTcZttnT5Fix5dZUYRGTEhos4kx7qWonSc8ZoiiA4bez",
  "key1": "2jPVL3VPVACnk8GxCgNUuMQpKT6KFTeqPKbPR8p3RZkt12wqWy41H8hxqCFBcKwmhCEP4MUWBXGRW2uTvDG4Xvbs",
  "key2": "4X6BBQmX2zcQLECG2xjCG6DFxkqHsdiNjA5smZcfqcwPs762Ss6hkeDbNwj6j7bYvV4NUUmb3gn2JYgYpxN6HCZ4",
  "key3": "5YeyxTfx9R8Zi653sLjoUeDsajw6MUBTqaBHEgD2vWhDf8BA7hYadVdsgqNHF9Z73UqRUnNBjdt3NqgTfx7sM8hS",
  "key4": "5pxrGbVwhYaDgFdh9Ure1fUgGbWWRQhZcaXVUQonyRrHKZvEc7zfRX73JXEYyBrcURwuuhB2egEoufKYQjaYAFjH",
  "key5": "3zGN25sDgXPhtmnVDP1TZW5yczcVvUEnyeuW2zmCYNf92MCfiLZRyXbFSDHcQ6TgsCua5Nk6fnVQwDsvezjaX522",
  "key6": "3B86cA81w1YCESnNSE8of9qM28fcgKyHnFoL38H8sFVT2fH4E52WvgFRBZN6vwK2JRwf6R4f6ArJzuqJRdDF8ct3",
  "key7": "ZmDZpNjgY9WWa92VKYNThg4TMXt6VJaYMnxAvPSidNazy43ipCzbYfGW8kJ3gnJ3uG6TX9UyxWYgaqeUAFeCqm8",
  "key8": "24aSCWeSUzeKCReDfpnLapDNs8XB3WrMjj46bESmKrt8twLpjjK6QNknDmN6jfPGwA4upPywG7vjQdssvHEys2fg",
  "key9": "4WRRqoWqA77hW8sFjQzEJ8fVbcRXzCAyY7GPu84tGwuthD4FTgF8gmK3Awbne1ESpERvnLCh9y7bjoyd4uag7zaM",
  "key10": "2uPqKRcXr1pyiTB3NAHS3tmhi6jWpr7PBZmwrQQAZfuEjhXsvQSZeQyfjGYAoqMQZ3ADCR9hHnvq1UxJxNwZYhy4",
  "key11": "4WQY8qsqW8SuXZDWFrvSrLsVWD8MQaELwBD9PxVu43ZrN5kXcAsLQqeozASwx2WHaYZK3vWxEK9VsKWY93jGZp5n",
  "key12": "5zEDmgNXH511KKP2x4msWK4E2cURXWc7htpgbpAC52TJ9GRBEJ3QbsF7S9zmp92i1kxsYAnbwvX4rWJ1ybhwx4ot",
  "key13": "4wKmnHkV7WtwXAawQmefBMhaMscUQTbjNC8AECLAqWCpVABwGg7QZbTW6mTaWWszpj2Nizrf8k5WXtamZqERqVBi",
  "key14": "4wXWpwRHKbVJ7bgUYbB1kmerGUQNnJRwcpCnQSLfL4daCuEXaMDkDPNH6aCZ8ZabEiHHSkjNC5CdM3vwRbJbpPGR",
  "key15": "5oQXiKdCkaAmeidGtFzYA8xe1JuXF3tN9WjhkRMtcUH5tLJCtpRydrpijngps57hCNzVdN8puUHq7FFB1aAQrSxN",
  "key16": "3f3Gdse6hnVCtggJnvcxoudQFHND8r9hSHDKg5s3HmynkBdjXuybbK5H69KtP9jhugNUbo4MWjUNTHmArUrS7P8S",
  "key17": "r7DQDcoujdrtmtVKytF2nGr8DTPgKjjrBa5TAsWFRgjRiZrcphjFaNP9bsp42BqxC8XJnM56XjnfTpgZ6wAdVmF",
  "key18": "2TiqQdczNuVVopZaQMTvTFRrsSEwN6eKZv1ALUu5xXK2NFBRVmAzayCgXhtRjtyGRWKHVxfYPfWqH9XKh3UGzh1b",
  "key19": "7yRrbcWdcr6gRKGjj3XKcbW5GzG9G3JwoU6Yx99e8Wq3n76jddCydp7eHQYbhoUXSw85QpBGuU1VuYHKNv1xiAp",
  "key20": "3aqDjdYrCpesxTejvKHZvFQf8USjcLBD4LjKrcgySYCBTzgCiSk8wkaVVyCYYW97pHeGVGaZWWhNMhzJGFNUx7Qk",
  "key21": "2WdaZh1FdWpfiNaJJfXZeDoRTctGfT5XvRKG6BY9RQuFhmkZnhyrXT7gbghAXpRcTH2AwBKUGLt97rzodfPcPupB",
  "key22": "2wVUJmtSwxTsinz2684ogmLeEwhzJEhPFhxiutnsxBKcC2ZZCp5Pi3Dd3XPZYTWD3J1pKghEunjoYM6kdgN3H6Mj",
  "key23": "42Lu6gBsQdViYEKzijf3iAM8ARDBCNDDKsrmaKj32Gm4zibM8DJiFZUTCDzUDP7Ynp2dGeyRM1dnpj4gdct5Yf9m",
  "key24": "3U9mRBRieADn2HRRMxFLnYsNqk9ddB9w2Hxo7vLyVhx2WooKAucxLBP6A8CandmZvCZ1EQ9JD3Qx7LfQyYVfSZhp",
  "key25": "5v6jSjC2MsWoVHNc4rz4Kf3kETpVXBpuZdSYKhk4PZTfRGRWifdszrs9qFHBSkKLESitGeZCY3JbEqyBVpBFbYjP",
  "key26": "2roYDPDvPrNVow28VNs67TujP2hyCEDYuwGuRnwzPkw3jzQdGvgVYU2WQmVtf4PTMv9mG6kEzBZnoahethZW8vjU",
  "key27": "3khS3CuXDYuFUtZnBPrWzmTti3qqvCQvwHo2D5uVLh5y4DewFQqMLWHDsW2ET98UZuznwPSPCZZR9hsG7H4gUHCV",
  "key28": "2KLxc4H3Cp2LpPczbTx3d9V7Hn7m1omvDGLkMwkoU7VNwGy6uhgr857MDVqf1kLQdXHhWN9GtUR3n58P7sL8K6gA",
  "key29": "Q6nLuyBfRYAkUHk9jofV1AzHSDsh2PyUhajzmpcG3CoiiymBSqaUun7zzwDE2e4C2VrfjsQaPrAL9ysSuVQrE6m",
  "key30": "4f26Ffd17eYaJWQEV1jT6L97VS1SusXDpEvYHErBDjJwb7WdBXXHv4C1xX9oS9oZuSdvcZrxEnGDZwTJBMxGbctT",
  "key31": "5jXg9isAehXKFDRDgJu5nmaNag9x3X8HxhzynB7mYTCefM2zZi96hBEraPzG9U4C4YyhPaQU4aATZnM7xLThh62U",
  "key32": "5ZbgCdBMn5cAC7jzG9Fbp8qXibHU7tRaKZHoEE68jtRNZAcRJPZvhjrRdPpGmFKQpAMg4BMeFmHjajLwUWF7Xf1T",
  "key33": "4onNuyxb8wxcdffTVYwKUZ8ZeFuHht8sTdYWwemGjuRyb3Pb8ycT6GauyTdyLivc7KFpPcnSeBJ8wnUspavDBLJA",
  "key34": "3Ld7dKP627XAgcGvmzTvJ51BF1sATA1X5S8dsNMPCMKncXwMPyh1SouLaQrUyMTMEgXCFxhMXuCuFRayKnX8DYRW",
  "key35": "sms4xzpiyohcgVmcQ6j6jsFg1TNaNDjPcQnPxpKX1BCXx8CN1uFM9qrzUPZSMnrg8MWTuy1toPsXh4P7YBG8G8g",
  "key36": "7cSR5En3aNyL414vnS1nNK3jfVwpJnyJgPTvYX2jhXBvs8UmoBLijDZ5nhdEPmkB5WuggwaDyAsTi7xq2hQvc76",
  "key37": "HprmDNB6YivxJhZh9PAruthauPTgdbKcypWwkRqo8JTy5ZtgFGKt1Bh8ghPv7bpQDg4DQsDqpdwVJAypMF5w7HU",
  "key38": "2UWE5mzdzhaPTXdbrkVVDLhggbtsqBTr56AQ4WP68WMxCJWNe22qDYnPbp9ierjvWkud1bHge3XUAMnB2RVoBBRk",
  "key39": "4iVXECxryD2QPArHM838DnjjjCRpA6qRu4pGCpApTbGXkByoBrQ66kErAGrszC84bYuW1T4okbxN7iVB5Tvh47UE",
  "key40": "2gXjwhXxRWnmb83uo1kVvJbLwo6npCacmhNhNU1MHm6ZkmDtkLAZZWCYBVDhhDM5QT9irTNfvWSaCj1A8iCCV4DU",
  "key41": "2JLHR5eFi3SHxXNmA7BJhjA6cgFEe5EbVaJqVtGpdrP3ky3bT5kwcx21BibVJM3QH6kD6EEMxRfHFHdPFxafF2nF",
  "key42": "4SasJwJ3ztXKvisZTm82bRLgLTqWAaYrX6631JTxXJHoM2SvRxz2Z9jQgUBkfoZUgtbdvBen7k6W5zpRNkAH737C",
  "key43": "5Zf8ftnoz9jP3BTwBUAwTGEwsn5YLFTbFEE9AMZEKTLio5BEXdbDXnm8ZrTRUPa4AVn37MJ1SLkuNCAWUEzr2xVC",
  "key44": "5cqHyjDRrJan2kE3iUwHANXbys7g2Lrm9diLRYxaJfcKUASJ53GkkWYqYpzjVPB2rUnJUYfmgjkC22rKkzAHQEx7"
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
