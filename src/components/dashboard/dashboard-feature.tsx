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
    "24rNmJNcyWkA4wnb3pKVFfqNhqfM6eccbdFbpb5YaQ9Ae8CAKL2WyHt6yVtE2mt57qbcvyQ2QxnqP8Lb7Mc6WacH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41R6TRKZHD4h9KFF7ixqw2NFcevqoNmEtZorJ6owi6MYoFgywaR29TuwbpVec8bTytGW8J58frvE1cfmD4tKRQ21",
  "key1": "2xqyE6xkpqnN1qTc9N3amf4AS4MDKDtrLNMhQ1SDmNP1vJAHchqovzNYTzSmWrt4SCr6DZi6Cmt8MfMJeB5beWRt",
  "key2": "5hFB74xjvomcZJVgToaqReAEHVfcqCsBnTScLBQSXzzJfKDmahnL4XQSiu6bb5dc1ESKgrR8wb58pKmYtwXj8M6h",
  "key3": "5T5phwMSPCwuhmfdNn7kzWfLtxsrQLi2FMc9YmHoqN3toZB7rKFG8GYGE3fbUBfPaKcqKtx9BNb3zNseVWfqfmEA",
  "key4": "5WJ2cgLvp4Y8XdXgLzvRHZCPk9T6QAJwMxFeP7yNEkB9ScZSHqGpB9HtDDKjgCJiRVfJBEssrLzZCwWFYoZ5KmP9",
  "key5": "5xjpXU2LCds7pfus21vYqh7FHTRbZt99tprLbd9qq22piY4spPDkQEgHVzDzszZs2SGjdvraSzVQcACJEtpggzJv",
  "key6": "gjcgixi8YsZfzwL8ZiZjWCAe3cGLmnm1UJ1shBG6i3T7QGCkkwqdYue7SBz1mBU4MhhScktrFjJzH2stkDwh21U",
  "key7": "2uuJ4eZxMzGi2mjoPh3PDbKyTPVJUtRnVssQgVgHfsPd9rqRjo1GCBp6BMMURrFa9hmir67mFw5FtE2hooGXaLfc",
  "key8": "jnD3vzypayQ9u3JP8YV2wMhNgRNhCEevz25GKRxfqTL87gSRM1xs9BHD8m6xhc1WgvvueUbx4hW5UwyWgAKK3b4",
  "key9": "3q7zTFuhfyr7G7wE5CdyLfZMw46AY1KBQSXyPMGuWecR95PymXNUMZqYDkV1Qxv8pntR5wAQYt7nLBanAR4txtts",
  "key10": "3SQwNnjJJzSB921FmFTHoSbmi7kjiezGsFko648uSm7C9W154Bug5Q6MvLYvdFRkmeEYgsn4AFoT1671V1ZtSrrb",
  "key11": "7BX89U3pbjm1r1vjiExZT6PTiagVQR1G6nCo1Cy9LMVLXiuuMctPcpBnuP6p1rdRhwWnwXc7JYGAXd3HTtiwtB3",
  "key12": "hLmJ6kxRrtgqEEzM7qZJqYrQezwW3Z7vCutxZSBa7F3KWmFoY21cVwMzDkCJfAATFb5izmmscv76nUNjudP6h56",
  "key13": "59RvKA9M3kam2bHvNdBpNiukWXQh7SwEYCoX1VjoHEbMA4bLxN2pe8s6RiQCm1t73rUMU18R1xTRq21a5erKLobY",
  "key14": "5vL1wBax83inok9PKz8uDrMdQdPK4ahmdK46XtS1PtJhXwdcUj4W844RWuk84ytpAUH5rmnDTjRWoHCBFFdWMD9u",
  "key15": "3gtxxE6oPZdE4kqEcwvFxNZK3grFExMBUgqqmm8vUuJkJEUnLBeSmYpY19P1ybZQvSCrj94B4RSrZm6sua7j1Yzw",
  "key16": "fSDYg4iep4sKdKXfkZa6k2qKbd2JssVhtDBoCEmxLdVfv62m6SEFXyYdEzPkhFLngsuqu84nYVwAkbsUSEV5ppm",
  "key17": "2qTSq4nH3L17i952L44Upck2tPSTeW2ntTG1Aw18qowPukEDnXEiJGnQZ14yKSM44xkZCMw6odUL2usK5faCXnDe",
  "key18": "xe3HwMnBiF1z83AegnGQzsTmPHiFxSj5e69BXoU7oWWZWKnjvskricXhqQD41WVxUMrW3dnnsVRJMen4FhPcXhJ",
  "key19": "dPfwQSAt1Jy7J1au7ShTmw1rd8MhHf5KNpz14LPs41SaN6ma4hrEzj5o6Luvb38coryLCPCEeTM6snEN165qBT9",
  "key20": "5MAgPJuHpRrHPUWt6tRyLbETYGp85LSVLLpeR1zFswcmcgAr1n2SMZzqrJdGDR8gjSkc5oN5kvBTnkZrSNVbPBgz",
  "key21": "3GYoxYtzv5juFG3W21kM6vLc3w7UHZXQuN2582DwRwXsGi2h32ipjzXVFn99U6QzakYnK9DSvQUw8GRztzs1r5Jp",
  "key22": "4zqvV6UMA8F34d6NKT6iRpwTZdUZVCL1et6Gvvp9cYsyun3nSo9qz9svpVS2R6wf3pa7WQcqDzKLjV6r4b9aZj1r",
  "key23": "5eitjTgY7skcA1fDBbTBEPfW1A6w44PdGcNEjtWBLch5WYiLWyDE3mCu7r3J99cMmPzJAN8V8KLak6PitEcve3XH",
  "key24": "4dWirYBhWHxVpXfHDazaKmBRExQ2EH7jqFuaefjFEem5tZpCf4cFMZLwr8aLSX7h9uvo4zAhm9ATPz28xySceeZ2",
  "key25": "nQLDs567mfDCVM6sekntMpeigwTjNrnPdWNEYrgF17JRiCvt8R68EzWdo9E3jc4LeR1NkNwFkPqQWgx8H3yZkXj",
  "key26": "3vMbjxqhjPgamnN1nwKTVdPjPit2iqqPL4ru4sb6nCyJQM5AemctoXaZKP8E65ptK2nZEwauV36y2Mve34PMEvZQ",
  "key27": "4SEvDCNpNaMGejh1baCPgG8VYF2Zmd7r88zqhSX1Py9Qa2pa24kukfwUHwM5adn6vQmVre7NdqAwt5pGJBubjwBB",
  "key28": "aJt5CLaTXC8BJZoky7fjHeFjYDcQhpc6WWo4ssHZiGMi1rVCknAya2SCCmSEsFJkKqtvrcNTVzPKZgUVQN4Zp3Z",
  "key29": "2iaBZdhKJfcpMKRM8U6nvFBz75BAPKYukZwSvRhqz4PLDBr5rM9uWDKB2kip8FR86NjLAxzkyNGd4E46F6UGpAmq",
  "key30": "7ikj2Gje5PK1ZednVbupwSavJijaYhxpBAknnzxTwd6NNPHs295k6mysHbMVSitqZ8YyeUseYbeNx2BxpnqAjVK",
  "key31": "4Jx5GeJJwKErncsGjvRoP9f9vW2QADH94FAdkTAXsDeqbqKoVBCDtS8NhfZeF3NVJbTpkdGKRCUH9MMwpmbgW5x5",
  "key32": "2w7sJVSohrzxeR46hd24cBQSxaBMptKKiKf6x2FMM4YvdxnEDeDuUxcKJiJ78sinioGmr6LRi5rQimTFFkfoW3yu",
  "key33": "5CpGKEo2afozKpkW9UNos6XwbgAPDbsngX9QG2UkeNeFTi2Z88JuuwY29bntgnDuy8QZH5fX2iTUoK1GKb6YhovG",
  "key34": "4CQa1kdSgbCJJ9JFZaSLxyj7E34fcwt6eDWGuyAD8C33JWmcr4CgWDjorK8iSPPojSv9fBDG9QArg1L5BTyPB1jG",
  "key35": "3MVoi1HfgARuF6XBwGv9oGCgRoaGPe55amhyfir5esGPPYXHeqNYJdh64vkD3yShoMaYTRf9YNxT7cudCZt5iWGG",
  "key36": "2zeCWGFuv4HDSPjaWYGfWTHpnJV4B5KjnBDQDdU4kPNQAEipnnpTqynHuQbZYWWf1jobKfcwicRpdxcnxGcF8kEj",
  "key37": "2xcr4K3RuQD3YocD94QKeDUTVzDNndhvLNX6HuU736Jzo9MLqhb4vv6xqe3qkaXvNkzHCyjWcZhB1ys4w9TxDFAi"
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
