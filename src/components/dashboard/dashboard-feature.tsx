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
    "34zTeTPGL7hke5BFyfsjxjVQgsD5kBX8xRpu9hz1qBE9crsqXywRsMDCqYiPjqBesPm1q3DbMTPmMdn4BGBxauFe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39jiMEuvDWjDtBfkAG5imwpNNu8qpXVfEDHjBM8Fa1jdq3agk5Bptiv21zLruqg4AXthsgofPbrdg3ttXy1FnU1j",
  "key1": "5gdBezNGDLy4Xycmr8VGmw3SZqs6kNPESbLZPnAYRY36R3SsrBVNoBxNgB2FbThqWpGpGknbVwCHrKcjPZfwKHui",
  "key2": "3QXLacNrhMRYgQ62ss9KqeEzgN9PsFXXN282arTgrZLsAAguFi1joF7H678As47esFDcw4826at1pQUHuguWhs4e",
  "key3": "5WXPEnAt6ZnsSsF1djKTK5akcpZhqhDoHi21rS81pCAeRea4LRWEkTCHS1o3MvRPsyNXkBLh5VF22oGhVqeCLfnY",
  "key4": "4pU6xPPYtejx7fSgxNTX1UQ3N8KPXjRxRSabD27ktJ11EopHeAocuHWZin9xv5RMM7EgMduu1qPmF4NXGWMYVEKC",
  "key5": "2apumiHggzaeckHNMJA3nWH2u1bdsrkKYB46L5KZ5h69f3c8u5tEeYxwmLarffMushWuoyeY7LP4oHwhXeQ2T1NQ",
  "key6": "498351SZHXVngzP4YzDjpJ3RtSrYg4BvA23oBgBp5g4XYRELbESa9poD9N6Jn5GFZUJAkjF9UQe3mfNcC1JNp5Qu",
  "key7": "5PmQ6cfXuvzfXU6fL9gBfwdL8t9ozt9PPnwMZXPCXYERKk5QHeYVhtaJhVwv7Rqwc8MYL5zs2tKXwvEvSsryhJJD",
  "key8": "dQUv7UocZNbrkX2EpbJHzGE1iNWRymoNietc6qVpfHEiZmacxhcWjrsRroYqTvqJJgyBLKYct9hhxvos67vzoyC",
  "key9": "2rVduXxtZv2kPES56CUrPuhJPb4ATcnjKkZbMxbgM5J8RXPjBS5za7mgKWsLH6i9b8JcnKxbqW34mBw6fa2fMNNZ",
  "key10": "22SJfvUjCgcX3sG9yFqGheG8UjNH4UJhDCtRZf9LNvT6S2tRSEtfEsgq9xwt2x5c4K6VFTfn5H8aUR1mCA9es5eK",
  "key11": "3oZbe8tNTFCXLQj5hG5fzMe9CUTFZb7BHPDiAXg4fJSDxWteDrn1SuN6X8baCDYuehWtxkeRrdhVGWeAb2fMPL9z",
  "key12": "vKHd1Mma8759EH7Sz53Jeb1zuZ5E5EMt1sQN7SyRuuDVx45wJJRD7F4LVpJ8uRpaSgNaNbzG6EvpGffdTTwcbeH",
  "key13": "2jQTcWQkP3NZ4iVzt47fBqws4x2VwPghEkS2TqSzgjdscv7Y2E48H5tVPk9sZ69q9dGSJ73NPxf4ShxuBiaGRHi2",
  "key14": "5xfVxwkH8BPkY5GAxPiA2kQFTzoidgqtoAgp9Uc4YCkbjVwbAy2obuWDWxMT9mLPgsPnhrCcyTCUzJKH17RsYm6N",
  "key15": "vi36jC5CTPSaAE4kvyyDqr7iFDg7TbCoWQKRHPN5wdQ5GG2fqSLwcnKSarMWewByRzUUTsCT76ogRYU86inV9Xz",
  "key16": "2sd36NozVLPQ9FF5Djcm542VHpu3nukP4P3xYKNXg4jMRNB4dKmrydG813CR1WEvZBLYNgMD5oU8EFGeYZVEoCZY",
  "key17": "4sYc9146kaHycCHCLTjYFuhd26TEgRT3n93gxBThqDeqyioC3AW2thSkXGptP9LEFqVUYk8AipEqu8xw9pQWbNzH",
  "key18": "4vd5AintY36r2xuq2uB33zYRmcwercZ6oybc1b3XFT2MEzgjnW7GudJSgsHuWV2ppJx7ro6RqCTWMTCmnRJ6Scho",
  "key19": "5J2Z9qK8mR3Ak4mSXS8AKusernt7stBAbSpKryo2VXTtGBNYPuiLnzSHWeykgcB1RQJ4ZrD389DsbbZiiAqwUfUD",
  "key20": "55aKXFijzHoMvvwmSa7G3fDqRrcdeQRxaRU1kTk88oKZLwYFwmtD3jWCq7ceDnm4FzQBw89H9wkUsm2B6pGxgd9D",
  "key21": "2d6XRBjh5rSTLJ68cfQNjmqJnUBbQc7ZqT3GqyUttSqetnEPCoQ3C6S4iDXQjmCXCPdoPj8h1mVXMYEuqbreQ2nC",
  "key22": "5z7HLmKGEnZwFRKpnFqnSfkvMi3oVEfxESamJ8c4jRjLW6nz2saT5VC4MYkbWkWHjTWwLqMJH3Am5T61ngcstTC1",
  "key23": "3dMzqha7L8qS6gcGN4LMQX1KuJVoKUb9vEPbfUiGp7Sa3N6xaza7yxUgJWw9aKRnQfMHo7m1ya5dCjhaFZPdJpqy",
  "key24": "zqGtdfGWEpeZNoVyBTjHcv9TiYFiiygTP5kqA6qqZYa3Hhe6cmJ17YsZkqnpuUSKKX2wuv9yHt2tH2Fy8gWwwvk",
  "key25": "5PVFeLPBQJspzasKh6njWxDmWfQg2a2vAXzKUNTHPZLd4SRCGY71wXoh7jKYTCbDvkrm6Zd5yR1wTS9PARb3YooF",
  "key26": "5rk1RvuT7va83i6Ljx7zAKoP1c3snKEsVP6FoKdNTmbU4tpeRsbPvHZGptxXtV5XKonXVFrWYNSZmukQSnTGXX82",
  "key27": "3W6RLLNo5zGoDLyedd2gwSEbiHzyQpd6NCGfx77TVRqMskEaSB2WcRWNnqHn87Fbb2gQcCKtW37yG96VcKQ6EPdC",
  "key28": "42JYAzshhHXJm5qwy86HH13NMNSMbdrqjLtc1dzn3wEj1GbP715F2864qwUXjcqwpteDYEfLaALV1ynsrnLajuSj",
  "key29": "vn2ZgH6HqkQJVzfXYfJX37Lp2FdHMi415bMYdXWjpqmSVqhoMpcjgfnV1u48HxtZVqeiiNqKbLeo5ZzjTJ46sgN",
  "key30": "XMh7KcBCLkBvyqGdDempytNjhfaf1aSDkNpdi1szUtKZ8KAZWQ89xyuHjutXYGNHDo78REF4z1hNXGejR9e8bYK",
  "key31": "3PS1sbLBwRmVA8hXaTEKn2nWLi62nN7FqGEjwT9BGQ6XNHY68oKAxZNLnh6x92wAWxJGLA1w5gmqcSMErUDhBbWk",
  "key32": "xqCLjiYk7veGaL2TTYtu4wCmB6iFHiNYt2KZeW6F2BNo3ctJnqgTHw9JbxzzRRNFsxbju4aT6UNZrofSTA9hTdC"
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
