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
    "2uu6UCVSMynNLYZFXi5yibY87HJ8h1ZRrh28Hd3qrMQioSx3DttSRjGPDPAuihebT72bs7AwpJGW1819ZxoPan8A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1FzsjfYvhf9JetpgwDgFfYsryqDoAw1YLo1C9hgyLtz4Vop6ZHE3f6ETBomotqQYz6pKfJhU454RiduavxGgT22",
  "key1": "zao8UQ6UpTd4EXw2RomTgW1bHbAb8CMbA75TUoTnVmFusBrEbcXqoiy5ZnPhVB5fSXvy6bgGBeB749AFTMLp73X",
  "key2": "3sKJZRxaJPjLLXu1dGwD6XVQzygfaqYrfvWvSJyuEtxqXiU9ZuWCDurf91SshqT4dm2XDv5aTXHAWY6hnqcj4Dv9",
  "key3": "3wzUuGejNQLWde2iBMaLBZYY4CSXFeUT1oc8TtKC8Z2p84sfycgHPC71CqtDMXn2F5h1RQ1XxJUSSmVi4vS8c1wo",
  "key4": "5q6qYUCtK8GyRHjUsn8u7Q3G5zqNYeJRFaQ1SNw63qDFHbhFdFRFbvBRmXvYH6GmAZbAXE6AdsEp63ADLPVn17AM",
  "key5": "4yvU8XjJZB3Eiyn4bcW1911voG5o9rM1bHu4HWRYemDLTvuba49moSk77kAuXTLcbeJBovgM15HwrN5iXozDXnes",
  "key6": "2Zo1njjwWs3cJKc5r5LjJgGwCrGNLskuCx6zGXNz8hgerA3uarneb64HYmPPKwp5udz3JroGyyrQhcU4MD4iVa8h",
  "key7": "4sgs9qhrYjnLjzR1jHyoTcuonP9BU9xwNaoQyB49UZTmgqViDSotNiqi18x2z5qGEMWtijTCg6oAWwyGJAjmkmY8",
  "key8": "2sUFYehqmXJwSH8BZ2zFbZt6rwpz2MCBv4AYy6jDLr762n1e59qomEewNN9BXJfzwRVRjjj19w6AwHG3qfVkM8kL",
  "key9": "2pz9LY98ExCoguRry9eEDAYobeTT2SfdwKGBQT9tSgrzwMKXVZjtqq1gdzrZ1fzDv76YoSPxP7vwqZCWWJzT9bvg",
  "key10": "5PzQ44LbQGsuG78qooSxEYqe8CXUBjgQ8xL9BRuYteuohGDT8rFGeDDaiYnW8ZycpVnL2rpwVQWkaHV2fm8zmYTP",
  "key11": "5SJc89zGH9kCQWPnMPqovF694mDwthzK1c787DVyspMuKrKQgDssd3SD9R1PJJFzL6KgHRcSyKeWAF1yvycbyDzT",
  "key12": "2q6MKyvsaxF8oyqKDiGmExeJWcP6fEMXxD7kQyFRDacENvYrkgxjUAfNfihcb9H2ZJ4wYrCS1tdDL2HvxYJ3Bi3",
  "key13": "2X8P1Z6JX4sMefcyKCSNEgrerSzTCNM7RX8Se56XwvRf1zmiucHwLgwnvxNmbn7XWAQC5BF4528VsGZbWmpCLEdr",
  "key14": "5TevuqNxhXmRQgTHaZqAjmVhnWt5isLRhN795SRwXp2PaFqZnuEwZr2ERnjKatxRwXNrRoPHXsjnoQzDAXQio2je",
  "key15": "3aqxGfEfys9JoPRQf2EVEqpjn5MuLjC5fZuG47hC77BbVkhwVeAbUmRh4nqSLSqpgsx7U6Y3HeuYyT8CiLEShPk8",
  "key16": "3D8ea4xCQkihNcBsW55j7uzwY31oK78A5geYTaPfG99cg7kVSGg1PL4dAFMgkykdTJKN84TnGpxsaSXtfoqW5inX",
  "key17": "2rJQTuewsFse2aSDkUMRgYP2RKaQbgxEjcc6z6P62X7SUvufYksm8MUbw9M1fuxgj5fQVvBwetniPhyj1hhoB26M",
  "key18": "2hvFSkAHGfpLZ7Kr36dgSWnqi18HLrwADS3uDp3FhJ21d5aCih4jChFCjH32LJ5Qi1KaDuqZdMcn3e12nrLWd92H",
  "key19": "2YSpAtF8CNhYNaPKVpG6fgFDGLZqPmaWZ6LpwZRPLd6zEDNZprRaXuQq4oB8rncBJdYYhraGDdghn8DeUVABCvXC",
  "key20": "xYTnPL3obuPSBByyDRz1GHHSur83W8Z6aXokdJyiNGdWtKby3u73uELGfi9iJbHGzog7g2R8Y9rnGUQUuy1V3BE",
  "key21": "iCvjmoQLrDAYy2YQKzppCEp3uddPhUja2i5aQEnAUxTXWhjYTzHRL1rJKWmU3ARmKQmdMpceRCTfRf9YY8BhvBM",
  "key22": "5jK3u7JAnA22ytQTircLdeBEtj7XX8sYEkTjjfRgXd9cir1hqZcR3amSwd5QEhaLdHLseM8gSqHUui76q9JoiutT",
  "key23": "2s1QryA4kpBbdCizmbr8zgZurzrRZAJY1sMHXrUxoPJpGnREd25Mre8zdhatqGBg1qqqks1CQqL8NHYYyYyDnxxC",
  "key24": "5ECaoimrFhha2fweQaPKsNs97zCq5M1QkXHeRMunEtEKPSNAND8MrGb9XpwSCLX9gaAmEP7KxpU4MGzTxgEhweTs",
  "key25": "2uzeyp8cpHnqPamu54F1xB148JsoHHqzQA7JRNhMFBrSGsNcPNiRQBnfNVWXx3RbmHEMYZqmShfk5Ny32XPqskMT",
  "key26": "qztwdiUgu6XU5cWyytkeYa7NfiRx57dpx5ZP8bLxxpyiBc76KqhqqMpHzWiijgk9B9JJquVgFChw7KgV17eS721",
  "key27": "3bzCdtKW2Tj9w5kcMTw1f9QPLkLtwbkHr22B4gBSnQGQXerkw8gR9oWodhdv7oNW5CXh49Xcw5BTWxujNfkRNzwe",
  "key28": "5vgFRkrxD1Zx29fA2qLdujWe2xXgavdVpUFdegHwdBcaPKG76mNEfAu9cwquSGzbw7qNHpeJfKrUZoBsUh94rnqw",
  "key29": "4GiuiFFpK1aYWRUUnk5SpS2NwaP9TrGqGzfedJWz4xXE5V7n4s95Ea35HeRks3jrBxWaZHeHcQnL5rwKASRxm1Mp",
  "key30": "3U8naK8nkkFbRRkXy9uUoSyeni9d7v7TWJoXSRuTrkZMpsvqKjNF8G8j12N3SiyzLfgp5rLNmJGi9XFab1McvqBp",
  "key31": "4nsUTKv3YTrKsZ5aBCHx7RYbXgFNUdceUv5hM8FRydTLuEnRCcX2t88A6HwBBsQnW2pYbPtBSDGKTvBPzFvrnfLj",
  "key32": "2nsvCu7meE7wQjA2zTY7hHb5mRPGkXsUKw1AMiqhLnXuFEZ5D58fJjrSGRPYxCv38YjRsC92n8xtsPBNxbwWfros",
  "key33": "4XS1FksuLVkfU8Pj46ABDSeDaEG8iV4hGiaCmXeFhJ3DbCgVXkP9J8qAtwvHEbQ7UFkHD6pfThxR3zbPZWcbZYkx",
  "key34": "52AW9XxzJip7KtscnU3yZsGjNYPpAsTEAXrgrr8WQzhCu13KeDAsd7CHxQDYB8Bhqy2b8fg2zMq2Ych9WfL1RAU1",
  "key35": "qdF4YPBWAF6qq1TpMcRiTeHUCGh1Hz36BDBMwo6PDkRDwr1U7M12gHE8hBzC6MrS8ZAVSdXEKStNrrNnXJxvvKB",
  "key36": "5JzUQBsgLe6oHJ3CV7zc8B2xvnZqyH3nsoFikrgDunw9Hf7B5RHe4niTy1JaSznSGRK95jeLySE5g9qLMjwgg5QS",
  "key37": "WN6bHTgofLceP8t5m1597jy47v5SRfujtQ2827rXYdztk91TDs1W2RP5r8Hk94fn1qWcwueQFr645DhiUWvnSYb",
  "key38": "43af7LL2p82xGoAAWF8UTjcNBZBPJ3UMdwmrwCNkEbLFuX5wRyG49BkwzMm9qDQgaR7iLxpr6Rnysya4cNHd8R3e",
  "key39": "2qaq66bwdUuJiqS8tY1HCdu77N4TSktx97B7vPjn1LwXqrfexih9pZ6T9Q2Do1S3tiSxPmCi9ohEUqCxXBgKhjzM",
  "key40": "2w9QUYWfC69VQtr82HzmHtwVVVi5PgCteqRiWqxJaLDaNbqKMetPnm6VfC6DVEEbsnhnugXUsYw6tjpZgKt2gTv9",
  "key41": "2G1PWjBRD4PMe32ketkKqP2eDQtgt6kttM9ttp7868Nx44sxnjudRGpeSA9qfVxnQdrt7F1Sb3SKCj15tS6YhVRA",
  "key42": "4qxfbwJEmJSswjuK5DEFX2CNTKW2waEv5HKaXPGFg9FgdW26g1JwZNgU2rF9Pphx8gVM6hZUgcp3HPh9A2bfiz5s",
  "key43": "5eLUfRxfVeoEermxf1M9YoSQkQ8FSoDXD3cSSRWo4LE3dLPC8ivTgSAqTfqJkmrCFvF2kQnouWjxG9DZ8Kh4SapL",
  "key44": "2qthWzPY2pV2sz1ZPspGw72svbxRGnjr5eFReHSmhH5hgejpDUb8Q5uXRMppNWcki6h9ibfsXHqtwmswrAdvDxnK"
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
