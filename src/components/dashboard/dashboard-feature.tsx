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
    "5J3Uwpohjwc2jQKettpp5HkmcySPVSW9aDxSEbFtZUsDxfZQh8qEAvhAoeKZttUPZvat8VQmD3ku9rLEsc4PevYb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XeUHBMT2ZBuzCiuRpqTqh5BS5gQYVwbtsfkP6HD2PPQuFQFkF8bDNM3sP4JpTJPiaFyWvToq5hDuGWVGb3K4yWQ",
  "key1": "3p6jRCaZcFAzGZh6XBMKQu64FPBBy4fDcBc2efKGhCd15zsWDpoqa7idiUME8mvxXj8RNmjDXZ1ju9PeDvQD8twu",
  "key2": "3ZLiNV1MXL9QQBtGL8GJbwfgLgvJf6hFqAngGg9VSXok1XhX8SNksHwMno8S2qVbsdrdPT1BqFTqyxiFWC1GtUhL",
  "key3": "pqygiDwDec7bEQbZtJeBXHokoXeU5GakzdmgqF7u9t3Y8H4WALUvuvcpAtmY1n5tZQuFg4yfuW9SeN3w7vwVd2F",
  "key4": "nX9KBADDre7AgEYTYbZgabysyuoFYNZ95S6WK26YrUuQQupgiChJ3HE9LtKvBwNSsd6qh1YAsRUj8J7ohxqaqiu",
  "key5": "5btgzj58xzMGDtpVFaBwiEuKqyhFYd2bLZedSLG23Eh2aT22dMYDj5LCgPHAi2AN4TJ2igLmhU9MxnvN9sj7WgBJ",
  "key6": "2E6Tn8bU8kCCaZmetS7c7eqESmFq14qBXtp7pgUfQkipgwyTBQkH6jH99CRJBPEBE7nNEFPb62k2kNyAS8mfDAF2",
  "key7": "5yKZTi1uonhCmf2mdRqfLPPhSAzYnACV1uPCNhLZn1z495x8tqwkLztW4a4haTZmzKuCj6JWtd4MGDJKqmWEwEW5",
  "key8": "39xT66yJJSPHaQFMumHBZe1UrQkfJxWesQ6zYaqnznZ5aw329KGQrXQng1g3E3ezTG2xTFLCr64m3HnexTRB4F98",
  "key9": "5aL5Xnc4GFjRpANVrYAidqvZrJLPsaSFYj2jAGhrgo97EagMxN97oDrL5Vq3QRnfrkA4kKvVFW8WQ91qGkRkoUxb",
  "key10": "4Uh2hnJ8vc7sC2qSnA8avCwtCpqRyDZUpZnSVSWuGPYpCsLLiKBWGMzFy6YS8b1wBZX1VmYfHKAyfPM21d5ZEFEM",
  "key11": "4LSftVUSiCLLCaQ46Ckg3ZUDym5x34c55kxoqS9FhZK8wx79D9uTUkhR1dg1gqCmT9nSQuibmcfG13yc971fakag",
  "key12": "2BFsSERcY13zeRpvwJLfHJzT8LQpAtqe3nJoQDaNw3VYJjZQJUXs5q2CLd3AoHL6CumxfbVTWozaMkhtwmxdJ3HV",
  "key13": "6HFN7y9WvGWDcoMEUrRcguDn9Lyt9TaMRQUmDsQKABpNgzPQeqeUVMJdTuAP5tNT1a1n9Bbe6BXAw9tyYzARZFG",
  "key14": "5mphHrz5hnR2JWCWDRYGeJNC21nopEaW2AoVXRVbDNtMpZ5PHhyTfGtJo8awEKjqBnwKvbLS1qk5ceFfrUtjDJdE",
  "key15": "2wShedGECCZua2rNRW1RMiXvQRXV2F4cbUaHZCkexeWngF8D47ox22aqrfy4SXkUhURWAcRDFMJVMwFr3CaN51Cq",
  "key16": "nYBKPwuqzZ2qobJAgZDpSXwYsqykbaALHP3HezkYrdzXGq2WGJ2EZnwBLUt9ajaXjXUqLzpYRyj1ip994ECBBGC",
  "key17": "5SMpoLAnZBr8QnXviWRLKRyAxZ8C8pmTSog5g9wrrK2wKPfDySSAgWmsmxgz8TK9b2ynSARvRhbb7C3zAbha4qDy",
  "key18": "4cxwnub2cwSCcSZoJzwcGERDG1eRiQnBAggjnAj4M9VfexPoDqTxm7brYujeoQkWXFqiBYaNf53eE5GZQ5eqsTj8",
  "key19": "36WF4gd2MAxcuJnr8snjsH3rcEUG5uhHcZ6MT8E2dgszhSNAo2t85u3PmVEbG3C4HSDJc3QFsXNj9pqTSjQ3SXRz",
  "key20": "4djZbuQhvQJ9Aq9DLiLXETzGvWQCj1jFUPf4viSZvkzZJ4CYubvhckq3njyPrnHBJiBv2bCck7uXUTHuH66B6ZRf",
  "key21": "51NLCBTJuTEnad1k5kz2uT2xdQfbz3AqCqEaTAH7KpAgBYSBHLiT6rSPPPA52QnH8bDLSE59VYrgC8A2fugBNFcd",
  "key22": "2kXZifxXEq2A5XTGr19fZWL1kw5yNVscnb4bdY3LeawQZCtVJm5mUVTGfTL9sw3cjjXp9i9h4J4usYQyAy5oMZVh",
  "key23": "3Kh5Q2qVHPcusLFKUBLye5DeEHkZjdZzJSR7ajFceG4vetCiVSMwk3maE68r3VunZfhZGXXiLgNrSn41WWXGa3mb",
  "key24": "2szb1yQkCBfkDjF5qT59mh9t96HpDigBkRNmVEuoAAUvim7pJG64acayoXLkWpPvyJafUwHrkgCQR9dxTr2nPfHe",
  "key25": "5ydbx11XWFhEhUsH3oNPWiTJnwN2o4dqnUywvF4EuvhpZEavGKGFCicR56UXWXsVZM2LQRntZ7nymn9xh5d3e7Yu",
  "key26": "MgDXjZX3mbBqsUHWJhMUPF6Nq7WMctE71nPt5J8mSwGGr1Zjqmg2Ui8KTJc8FMr1MB3fMtvdudomSJCXLXqeQcY",
  "key27": "4Fs4Yb3hooZtE8KDAgCGFXBmdHZ2EmKUHt2rwA84miMbp3rTkz7YGiXN2wGpohmH3iqh4YvRvgZhzL9QGDB8AS84",
  "key28": "5HqyKo5sN7DM2yUYHjN9PgQU5ycjdvA2EjEvMi6Ann25bggh2ERZD3eJFtrGHdwCYkyHLbnomw9EuJgJX42jzHLk",
  "key29": "49FRL2Rr94NFYopbt9p6cCDvJdoW1hNKjUf21EofipLV1fAKLoEaLvoJLDz6jfMqCkZ8cuWD5E8fJykvhskQMaWu",
  "key30": "3KD9hDXacDKijAGn71RaU9S5F2JxTLRvW3wTnyjxwNd5zQE328PFX5y6KcZjPwJAYbntoyqAPVPhHLi3tKTBTZwH",
  "key31": "G4ThnLyVYM1c6MR3HkQ79Prvr9vCB68LmsG1agpKpCGTTtVPstBxVgsk41DiwthLS4Ffb4csWxhRkqjn5u7kvsU",
  "key32": "5dKJgZDZVmPcLHrKQrnhsnMPvpkC3fe6Sw2ydannvsLn9rphjqvacqLS6yyuyZooLFwDkaVbZ4zQV4DXfNowgaH6",
  "key33": "3bCmkYK5DGZuQCwNpUZTQ3XgMVv2Fvn22UDXRKvEDWcmHL5PBKGjUogrNQYqnu581876eVrhxm2QVCgNPx7XNKnH",
  "key34": "2o8VTbYYvi73LXSt482dcTXGBKjBcBjSKGqbRmCPR2ksLeKazD8GUrj2mrXoYQ4BffMeBaQvNZz5gzXpJK2Kzv9s",
  "key35": "5aUz5gKJLPEb8WNFdttkjpsejCqJvohCaF1WHgzfFyGqr7toAGYLSrQxBFUn6aos21uBQj73Ezb53BSXCkkWnVA1",
  "key36": "2jcswK3ZBbFWBRTPt3JgAp4wdmrw9PnDtD5ajnw6nyPw82oJzVtP2Ki8KcJSUgj6HD2RrguxLeR3S8AkwZLXLmYr",
  "key37": "5wWTRSZViX5DyyDrGBG1Bbir9ULpnhCw48aykLihiLTjPSsdqNVuUpfrHihe8BPNMpdU9mADjSGFyfUDG2UuSdSV",
  "key38": "2QsM9TBf6VqhuohauXYTEZojsfuAgD9d6w9zVGTyqdz4v4nhrGLbcupCRhkFNGELrfmeJWjUsnrJ8i9vDov1nptd",
  "key39": "3c9rGk2cEcVYaEeRHzzxDHvidi3sVobcnbZChpvNh6HRQPbtRw4WX4vNE7eZk4qmiVVAYBfjpsUVFy2xsN6q4VGx",
  "key40": "5tQXF1C8BMGdgDW2hDs2oLnYw9hcdGoGQ9LVQU2V4ojifMGvX1uTpMjwka2WBo9hRtJSUifDzMQ5zWn3JQ9PCWBs",
  "key41": "4iPYfDP2LpKJmPUWCfHu5HfJwQaXQLXjsvgbpbkGfPoFtNJhL64MbnRB49U9RUDbRNEbEV49Xji3h1ykYSosLTrE",
  "key42": "di6KLuXGYLX96BvXRAVDauUVcnVqS6a5F9c1m1i3crsEaRt5zTWjqC3rsVbQNgxhC2A66AADgwmS6XYf6b1jGTK",
  "key43": "xujJ2gbb6GKmZrkBfciBkYtM5r56KpXbk6gLqFZVxCkDPs4uDKi3bsfz6yNngJZJQ1XvxEmErbaoz2h7rm2C89A",
  "key44": "6786NWDkdy4dYcgYie2rfNpumTcSsek6hDVAZPCy3mFYbvZ4cXkMRNNxMDYbdYndUEtph6ebpk12R6kUCRTve4Pr",
  "key45": "2qf2M2wRpjQNJZbiV3qrdrDeMkJSFc9HnwMDWrR1C5tGtxiGJ7EMGFJdBzUgBQMhhBFK4QSUDbgr7eppNi2j7tRQ"
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
