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
    "3DqTG8ya5qdYeyY1et8WtFejAgiszbPbANn1V9wYu87KexTFQogGU4PRUUP4QY7hRJxDFKpDFZFyo3oMs5tFGYtK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XTGGb68xNCsCwhdyBzHL8FYJFjU6k1nKZch4bZ16CPPDm13rAtMNuDpVYUE6ut9ifxQbJ548pNZfCMWEkyKRjx1",
  "key1": "3L579TGcFMqom4GMBXaU48htDsZwp3cZsS6Fadr5jR8PvPwBvKyYp7Eh7NjEsNq8r9hffxgtZBCudYpzMrA82SMt",
  "key2": "5AcrQQnvrSJ4pGfP96ZJDmsBBRaCMWFLBk8uURksKLWVUAMdxpjExiefjShMNy8hHntiDaV6mN2PfKtz14NH1QKv",
  "key3": "pYaXN2nxmdugnxgbuYXZuK19YQk8TAvNr8DdUL9N4NCVPNqN226BLJwPgenoHZ6EMXGBChevkcc3hb2mKw5Ai2r",
  "key4": "3sMr5YXteeBQ832CPdhwJtXnYmHUWBb8RvsBS7ND1JA6Y9P9Q6Xy6bQ4aeMei6ZEoFgLNThzM9AKupEWeSCPwqP3",
  "key5": "4hGSEZGht2gKRkY77fXxXyfssoHHi5ms1mYoRW2mGxojxFSLJ3TQqNQwDAMv9PDCoKENMWN9b4MJEA3r59nXMYHc",
  "key6": "3VwxkRM7g9Nf7y5Tgf92GRF8fNcHWrAkRvuGAkDWRqsrEQpSPWX9zr6p1DtWXsiFCKMRZehLwn583pVrwuLmoK2z",
  "key7": "5zbaNE3vmoW33piEqadnA8PkRSyAvBCAFwRncQNdfrSxRMznu4uqgeQvWRGzaiM83nAaZwj5qp2HCLXCeRjrfHRR",
  "key8": "vDuKoMipWuPkSm8ft2PECHMqVhsakUTtYAHM6gAczP3Ncq6mhZUKzjZQGFqBUbZfE73fUUtGT3PmQshqDtxWkL3",
  "key9": "5MHVujiBQC24fJYQ31kuAKMyweGBdu26TzWB24HTTRCK1pd7JsjGV2vpPPgp9znYkWwUS2FzdHwjWJ5nZnn24JGz",
  "key10": "5AmXpQPq6Gkw68ejiQw3NUGVsDyuS9yS75ttG27atqqAsxfbhiGj3rbt6rp8U8Qucsrzbpju1XHB8pgrBDnnM81B",
  "key11": "5f1jkMonsLnQuG4K2Y7xwAPr87Bys4JQTGDWHbD9aWwqj9Bpuo37BM4rgrXwLLMLJftYvj3ByVLgwfVgecuPaZTK",
  "key12": "3EJYRxhDnof2uAsaEtnnov3TmUGRG644dRW8NxXDSZYMN5PonKs1kMZiJZoGVL8MV2tnG5FgxbNzcDJ3cKq6ewhq",
  "key13": "5psUmzyZvn39UrMAFAswxNLRBub4zEiW6Z2k24NRAVPNkepPEYbo61ZuH9X6pKbE7wBPSRyF9BZ8t3rprzmh1sHN",
  "key14": "5v1Tf4MBwaQ52tk6ZzJYB52jLKgQTfytdBmFXaax1PvfV8xdkBQWABnbAX5Air6F8sBZsnnnVvE3tFtCvZ71HxbL",
  "key15": "3q3LP4oYphEsi6kX8bTAxzBXvqKT9ZFPqkaAPNJggm7zPqEiyhqJvxMaJDSYDiS8s1FKQ2d6FsSKFyDWmFT17Xca",
  "key16": "83GG5Wow3iPvz2B8crH7D42BtgcnR6smdbtSUcgpxNXQREByF6MhnBFrF9dW9YNAWnv7vTHLZvUvqr19sZ5Eu7b",
  "key17": "35DVHRRUYwqsqmNUezyLwNBuE2EwSmTvU182fcUWmyvpRqUTjY5SbN9hDS64i9THbjcnti76AxHsPqMVhgJWGFf1",
  "key18": "2GE98RQLq2EDPArZozfex3CftL3d9mSQTXSXcATfXjLGrsu4scwfb6RpbEo6rqYHaAGpfz9Fn231VWktQ2PdzPNj",
  "key19": "4xpzGFAApRwHaL4pQ7cUZfQJ1hfUE9RPWGa9iNX1yoBZ8rKhueRCZjZo1UEVpjo62k22dYGynsvCZiGYMTBhjPLi",
  "key20": "BNZwRWW9vuQBcLzfUrewtJqPgWcRmAhxxmcw2amn3X2ZjCFm6CuFyNkKXCdxSK9TXnpXmdpk7yPpWGAAMvrv7Zy",
  "key21": "2WGQoh4XLzGU7PbicbDb9nygefDQPcqVrKneVM2zT7EjnGx2RiMj5jcp3iCdb4zpgW3ZiCkqRb4EBakvv8o14aHV",
  "key22": "FoKcHm22Jyr4Un53bp1WUxK1pnYcYBXtHrcUUmSTvn6bAjQsxVGeTyjrr1wLdhiiWnuVjBZCjYrVXL9oTWKFwXu",
  "key23": "HhNhSEQo4HZTicuwrdCvS6kgGtcwj3fs3XqRUpKmuoGPQ4KmjM5tCgVFh7vKk5XgYVGvjn1sqZLmHoGqUCZgTCq",
  "key24": "3QhhNhox6F2ywCnbBmQLLXsxwc8R5BB6JBRXtbAA1Y8jcBQ3S5QpFqQJ878zKimTGaJWb3pBGu6L86Gp7sSFHC6B",
  "key25": "5gU8NJ9vHzziV8HnjurEFFMqkuXDNvN6ztsd5fVh2D6fee3QvFtbK4Q2Wrg2NvP2gZEsFvisw5C5nGwJEd2Umtt5",
  "key26": "R2HhDRSJW69dD1wUTM1sUoa88vuXcp6Ntu43LLDycfApBTqMmqMoiuD8G4VHM3VaqqJrQ2cpFDDA229jDh2nZ81",
  "key27": "2RfBPocnUY6dDPYVKfHBqDHLMx69FuSwggjWWxVFRR1sGrAAn5snbnWY3U3ur5bYRZYqzCpmmt8t737zDghUbjtu",
  "key28": "5A82XTP6qEVecHpzdzXmGQpshT2srzbnghbfqbaWrjAuutDZm7hZb7jcftwaj47qLhC2CPA5dXPqX73c7MJYdEKL",
  "key29": "2JDECYN9HLsPVxkeYu6hsosfTLwAqSKB1GuupSouZqV7Gy3NMLkoQCkrHKzVc7GwzNmtRGAVLuYj38vNiAK9z9Lo",
  "key30": "5K1aGvvW7wS6sYDhQb4tyaUsadfLbYQC3CbMfSdbEMt1W3cnARPmdMVXhjfiKTZSCsT45EWpzz1gtcimm92TnkSz",
  "key31": "54J62ap3L2jcW6rBUut9YuwFMDGHHvTdQSdbFvn6D1C55endY42L11SqmNfvzbJnh6t2b7pLqQzzMeZEjxNHkYNk",
  "key32": "5KYAuDzvSBRudKqHZBTRzddJRsEYsLBfKDoUQxSkdYzcpbwXXGa8jYxVaRSV9XonEFBcCKEbapwwvbBV4RsQD9A9",
  "key33": "48d6h3gtX6pHXtq3fPZ9BJq3Q3SRXSKFwcCBkNm33wK8qsYGDzkjdhJEyspN3iz5FZQkvKpYVks1LKmBsnQ77sJy",
  "key34": "3S93SQyzoepa37TF7MZU5JEAGG4ZaCd6KG1XmXGffhCAHNuqJ53WwG7S9MjSmShUXRsSFT3repsrmnWehABBVM7w",
  "key35": "iJXhT1Cy81fnDXWreMCadDwpAyFULEYKsjWqunxdtzw4wg6wmnrr9cVjkMZYapfkRKJ7gcdzm2FPpo9K3iirdXU",
  "key36": "2HtrVZGZrSjGicmRJTnzMZBvDW1pk1XP7xPygs1CymYtMQ1NmC62Tf4Uf6uedtZB8p6Uxyd4KJxgZfCMiEJv6VAH",
  "key37": "uNMYMTMHfygxTxwtqqwUr2GFBJ2mNcSUNSy1ZG8C29k5vSg13vbkNeNuPpQTpYZSv6smuJBVbgaxAtemKVUAdRr",
  "key38": "2u5arRpgy4HQ5Zxz5nEjPiGnbYh3QxqbP28pFLVCWgWYVu69mHEgsWTQ2keLivF5WPfV7z9pWN8gz6Eaobs2Qgij"
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
