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
    "5ioLgJT7BFPQKBVVJ76hrzKGNnWFNHqvnjWf9EFMdBnwzTp7pVYfDq5wkC2376CQ39NZ2h3rcpAkiHXAsgHPqGiC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "X1RStzF94mEvRLkazepco9k3AKWsri3kocnzqJvxkoatP1HdWbS1qkLSFGiyPRvXq3QEUYsmnErhbwKhVKnHyQ9",
  "key1": "d8KQMMZUdGqDu2TuCx9tmgF3mHL8a51sW33bKXNxqwGzjj1UXohcuUqHbRPkstmfsA8spaWLL4LsdHZ7SRYczQ7",
  "key2": "3VDrKTS8S8zQVyExsdbSQmCiD2zMH8g8CxVzwMQaAg9BZmAfx5n9S7As8MP9TUuDsF5AAJUBahcCUJSizTUfxzwA",
  "key3": "4VtzHwbMQ9nCfTmEK594Q95zihYSxVBV2EGkWS8CsEow9XTgxRnni9pSQmkgejTTPKKL6tTZssmQNkcsxVsNTccm",
  "key4": "5P4u9kJimJg5brWqcWiXt1GkFEEPTAgzBRdneanPzJcKq48McTJhZAMVo7Eo9KsAhUTtgUTa1ZCtStEaWfjY7ZiZ",
  "key5": "7oxvASpE4R2NLaCxJw3VERxQQzUUwEwNgEBnehb6LDUJrgkedtNguMv2uChxfqvAcxKdrvc5Uy4TZ6w1HNi2H8H",
  "key6": "jvhPgfBBw3DCcwv3Mh7qMBwR7BixZVihs3KgxCFvxcGuVirrTbUGo7YwxdogXQVZKrGGCbnArn7JX2awvNSdoPc",
  "key7": "3RD6Uyx7VmewDBsqtTiLN4bgpKtRhQEnfTLZA5L9k4RTmvH1ZwxcRenPxahj2PtZX18hRMNaag56e9BouKKg4kEu",
  "key8": "4iJgvTBroNJwg7iRHBh9Fun4oqyoxgrLiQhYucbdbmVY6pGEXKiH7wGZ427JfNcZ5AHCH3HkPTW5RZbg6cRB4zGF",
  "key9": "bdyMWSPiChFt1MXdTpeCb878riMn9dCRGP5wqMQ4fuu6cz9vyyzb3mUu5owpPvF8Rp8HDsQUeA3FFNLbtEvM39n",
  "key10": "5t3KaxV55x4pxZnpx8a9JSTR2LpHTrvdCpYYNsgHVEAszfKdtFRSHewTgeR1SokJYezv98vfKM26fpaoxaQrufku",
  "key11": "2zz4teq2osRXbSfNKoT2NRbcKvXQYn4S2SZ67djcESisLNZXGCy2NEdx8G4F5sWmKyVBnZ9RH395Ckk912HAvWyc",
  "key12": "urmErcoybkuerbs3PU9dR6AMyFPHDB5F3UmgQCVHMYWcHJyEr7MqyfYMv4XyCSibV5nBNb5DynxC6YPvsEQ95a2",
  "key13": "3CaQ824YwXdiKH8D5m8qhVCMYLMxT5Ne4aGSy8vUaqV7eoAPgySvnePN8RQeTTQmetr1g3FqHBRYozStJ4w1UXh",
  "key14": "3kaTos2Fpx4YhELkuiJScsdH7YPbk3n1Vvt85kf2xZZaqssrgYEsBxv7np7PesJLGS6rGh1w1w5578CcfQBR8tQp",
  "key15": "zrq6s69Auf5DSeR8vbuw54AkA2Uyktnvh8gp8o1aP5vfATz9Ybf9MwedNMyEwrozVNMGzSfHHKkPRUzxiUTtv7u",
  "key16": "ZHBgP2qCPGWYUAm2MkNHqJR5NqotsZ5kw8iFzLCYaHNZ12b8KNQRjhqZTPAhCSWjQLCQRjmpdkzExHDdDUeHEx9",
  "key17": "4aF5FEgxLQFqkDMVUo2yP7UAnj5gP98xKv89U5xEJR4w8mGCntVM4e7ZonvnfXSaLEuWBHRcSMSvCFwjgPj9aEJi",
  "key18": "4y3osMsmAjC9CKQUVf9uKniZAKrwnvVYfWbmp4HuZQxtoQYX746wY35C6XZsTJwUtQMEWTkHTd5oLF1b8QzMWLUm",
  "key19": "55KjGahJmtPGmmUtNMxcsra9umy4vEzrjj8eNAh8x5hetyKmrHr5f3RH83M1GEiuMMVQAPrgDyc9rpqNdGauf64v",
  "key20": "2CYQXNCVKuLwvwE4moi35EeWTsSZctMm2XFaMkfNvFdHQVWof6FPAQ6txnqgvai1rFMR2RKiace7e5Wn8NdFBZKy",
  "key21": "2NRRE14X3vB9KMGShM6LcZkYceaWCdBixR3rWgeZuPuToSgCfzHrHvfjHZct48gW1A3X3ng3z9Eu3YNzU7LhRb6W",
  "key22": "vTtaAWhSjvstToQ9S6QTFWy5gcuhJjt5SBrKJfRtMm4bJSyqUDXXdKCpNygMa2qUibCrVznfCnp33VzMcTK9TYT",
  "key23": "28qcF1nAG5S2J67ASS5QsVKB1cs8gMyaW9Ue5BFSmgodiWPpwA7rVCVCEKa1qrxVgLWK8ouXLy7W2sMavERMmCbv",
  "key24": "5r3Ww6UBzBg3k5NtQvsZPCQfPP2wtbc9TcruFY3Zt7K4MbWYTftVCy3tMbX2DZYSMwBiDF4cmrnRxdrKrts1SsAF",
  "key25": "64cu1dPmNZDe4tYXjgzcFT1AwPckzPDtXTetZvNy74R9PAzC64b5JF8PVH66C3WamyTguTJdLk8ybxq5NDx8Y7qr",
  "key26": "5aw2mBtfuhxjz55LvvC4u2u3DN9Tm1p6pBDnNknphRwNWfBx8ZVr9XCX96af8HPpKETfjo8t9wqVWPBNLiwcQW9f",
  "key27": "2FQcCWxvoo4MotCN45DBvEwLwDL2qMzoycJ4omNSVheG6gpqaa9LiUAgUS2fN2A1utYeeNqd2xsqoQoiXnmqVVXn",
  "key28": "4saPLUhb1TisB3XvEc53uX626v6ZPwx7o8zmmP5cULBnbKftZosEAQ8zQbMMiTskqh3rLqQXWrGVErwkdErCzdSi"
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
