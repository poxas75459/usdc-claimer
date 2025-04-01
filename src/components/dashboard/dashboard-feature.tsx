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
    "XuiAGrQ1ZXaSvcxwmLFYY1oYNtXwKJyUb178UGsd9yzMJS5Snwx5eQcXeCsh6NDqEGu3R55G2tqFmszbWEVpnE6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZbEA7Jh2JBDBkd7WBPpaeE2veXMjjyBxyTz1Lfywvs5V7knMjdDP8FoeY1L6pwBW2XDuYUCaiWMDs5cBiBYkp9p",
  "key1": "3Dr5j4e9AKEQpncV5txbYy3a8axHJ9QZdfKTstZgGzyPnmbHhDEe8kdu2gfx37E7BymEGEeKU49DRXX8AkFhbpmo",
  "key2": "51tt7TKXet4TMegcHN7dhRQHEyZrHd9KtZomwLcxBonEKh7JQwZXHKc3tcaSHTedKUNuJueWTpnnerHtyp1ECYg8",
  "key3": "D8WBR6zAuAk7TdxHzvdps5EJktLxoXTRLKQBWutVYNYM9RNusCBEDZMHnoXjxC7LqBgqQSEEHyysRgLxsnrtVXZ",
  "key4": "5PtBkfGLQQEgW255dtQrKPFYfJ2qaSfTvDE8CiDXthxKGqvJzJ8Roxkgy5w8zdwgXkuAtppy6ZMi81XuzrMFrR6z",
  "key5": "3nX4eLaHbDTaWG97kzvd9TuZgTU6xwihwR13cYLDnVn6kRLCvDJDvbHkKKUNMsE1mxQVT7sA6KGeiPTDXcKNusi",
  "key6": "59oEQDsktPoZPfDJmo28uQQx6tohJuZaZMKXgCaDULEceq8ZjVdb4QD7dmt9qQK9JS4ZsP4zQx7w5yyJHKcwydFG",
  "key7": "5D5Bqyqzm7iA8WoqsAxVqg8CsrBLuZpLYSt9e4TRCpvkZrYDAt45RLH6uwSkfAudgTAGkdf1d9D1d8964yVXQFWz",
  "key8": "26vVj9wY7xBp8WXj6H3uCxEx4xL9egnZu8Azud52tf1Vd82FBrc4shN4AAaNt2jJjDhCobSkcGGMrc4rJ65xd7x1",
  "key9": "4dzNSAqhSgWNREb9dcGe9E4zZwKK9vYhNwJHqZsjcf6RvNBdqLmKHyPpHbooPLvhkKsWTVy9zbufZb9bq2W8ekP3",
  "key10": "4Vnrsgwnn2ew6ATx9F3JpvRhuRezeq1n4exborULXDGLt6zxsXKFxURsEMUk6KzuTZeib1nioDq8DGgMdcSnFHx6",
  "key11": "2KcPMcvp1UPhi1ifyb2QbCNdk8TYBFnE76bhhHJvtkvCGHAgYnvrzis9KFRS4BxxqxSz1rrg8iUiekaAWPgf1SpL",
  "key12": "4p6CSimRZ58ssy3Pb5jZzPN5zp8ffF6vnPeoyz2bZX1eVpMmK5Ki8ifk2wt3MnpdoFfs7dFTJwc3UEhKqHs1NQBc",
  "key13": "5EfeydjFtA5k3bCheoQdx4sTebuqpyzRzPqhXnrNxUtAYygupyicPgM1BQxRuA9StkB7oQ1N1wrWj7skWatajRxU",
  "key14": "4M2msAr4fmk2Pt4AtcrD9cyhKw5muoCf7Wf32CKkW6ZBz99HrfotNY1dNQkD1tQZFofVSLxpd6MMmv62B6xdoZyj",
  "key15": "5b5SEHG1KEEPZz1EN7JAWhfvJRQsFP1eEcKFf9Zr64f5GakGGSwz1Y1iMWDGEZyLZbWpcwwb9z5Xwieo2fzsYnUn",
  "key16": "3ZSzAv9pxGgwYThZ14fhKKhJr4EVbgScTzDxJfxj8ihZYgwL53x2pox2N9t1m3mZK1LKjaEuyDRWZnzBzQgCkdSL",
  "key17": "3vmk8CHd6VPyd7V32JNpeRgvciQ89U6r6ddt5jkp12XrrCmJK4hq382snaawD7919eKp9XV31dvauCKE66sva5Qi",
  "key18": "5TkYpGA8Ld6dj9BYwbX6RgZvjGN9n32aXghXJEjcqKdHEcqPX8L2zJo9NHsaJVNFv9QEnss5PQzRJzg4Veqp2Sr8",
  "key19": "4mn9zvgNk5x9Y3vz5ZvYrm8Mv79PgD4TzxPKGV9XuRBm1T6wWgUFtgkwZ9pFCxNLwFWHNdyKeXfxbVWky6X2wRCY",
  "key20": "62sY5RjoYfTHm59Xxe94K3UJeW4HPA4fF8Mc8P8dCiZaMyun2gNgZSXJQfXxtJiXDDZ9Ji78hHn4xfGjGXagtSCd",
  "key21": "25C4reYvLcUmqpJKeE4UBJdbxubxddrBtsR5QCWytzGBGpyxpWmimeGYJ3mLamQw2UCasQMBSWEeaLbtXuRLJFSw",
  "key22": "37VwUqGq8hU9PVek9wSz4RsMZ6yypdrnhyCHaSh37KkH39vfoeJk8yrTZKsLqUJ26WMLV3N4Bj2tonEt19YjvQ48",
  "key23": "2XcfXYRjG5P3rSqWcAi1r4vjoGjCKtWKym1MKJC4UPRVVFjn7HjKdyUZsi7jne81KVSMU8xxNdAe7enK7Fh1935r",
  "key24": "9eVMMZzz3KMCLaxv7Y2UbTNZJ1CPkvJZAF69Rk7o5pfhgEvuto1Ef8oDE7zDyEx71kM8cZMamNALLquqRL8Re1L",
  "key25": "58EfkJ8ap5bMNtSZ5Z7jAmxX9fFviBFhjNXWApmKR75kFec8AyBZtwrkfGsBcMtQYHsbMSkPpmeYBMYBz7dLs8Q6",
  "key26": "3invrAXv3LFohVmL9WcHxEQnBa5mRbewAUiMdBt7r4PgXysgh7TXsZRa84oX7k2Lc6y1W1bue25399hFhaARpnd7",
  "key27": "2argRS699KUBm7fsxApMduadXcNtovksQRifoQaD8dQarnZuhZTjUNtkbYFEVXgVzp3rggybbTrGpxUeXCUACQNz",
  "key28": "5XHp9fHYUNMo3dm3KKdbAFeHD76ZRD2sjYyDpMgGsiutx3fsJ17HnWfQfsZCFhDfvmUaVsjbwLRatF3rAd8yzDUe",
  "key29": "2nNDPFTQJyYNPp5Fi8nk8WJ6qmwaS8wXLsQpC3spsHcRtKPKJQNhTU2AEDYagFaRCbxDKvQKuB7L7MDw9Zk7oEBD",
  "key30": "35M4VzNNjLZVQ4gWVtmRaf8abdt31zHDQzyrsQUVm6bgVpCNCpPhQmY3W7KbdwDoqmt98GFTAxHrXvRSHNEpdNy6",
  "key31": "3zsAr5GvG38a5NFvtMZH3xmXGQ6CAjU7Z3YKy8MMLfNkvwDGhwTp2XXUYbC6nwqhGr9Kp5MAWuNbCABs2CVgDExH",
  "key32": "3JoSHVETi2V49mS3Ma4T5M6AKTWbuoNmM883yMeJtm6eNu6ubjWjZqhVnWHE3VGYYe7hz6VuNeRBV6Hms2FcAoqu",
  "key33": "61853vy7XLWH3ixfNNY5jjHhd1tLmaiLz98im36C6gzmaW3Ht55tHRnFFtZjSMURMgQyLJJoQHb4ENiqtGeaQDaB",
  "key34": "4bSo6XNaKHbKr56sBg7gQAMLncEpgaQ56vdZXcWuLmGWdNuvZSGh1c3SxSZCqfeDBcz7RNFUtaNgKfXBN9mQq3Ss",
  "key35": "3aM4kdPZ9g4viAnX3Pr5D2CihpArvmmBQrJxNdUtKGbopP66V9ykpkd7qUnXZh9yWgdqSmpwWS6xZJk4kfgB2Uvh",
  "key36": "3AqCJp2p9ES8Xsow1XtbpmSAjY7UjULRC8fZQzjUsVToXqN4QsxJGYuobg2kLG9ysLQJJcNZ7V4xL9xeYeuXFzsw",
  "key37": "4sxEj4Z2y363t36Y3ysNWrj2Jtjsrrtysx6DC4xZR1Gb5hVPsTMMn4aX918yN8CuGMUkKLFvAX6AVZZFjgsbnjR6"
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
