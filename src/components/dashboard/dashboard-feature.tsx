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
    "2JgJ15BiAfLmRWddUAqepFNdUgi3hrZ6ybTLMJxG5Zdta8YWkAvSr5HfhEGBURUkA4iQxusrJygCKon1rtzAAR4J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25wMpZJtCqr7U2PmrqaQe1Nf2gi2XADNHCYbcQGiU4jrmBp1TPfr66wSDR2Rwzx19CM1AvkByefm69zeiRfH3hJd",
  "key1": "5aAMp2EAkh6Hm9HLgiQtzZJW37QaZt8ArwGcgGcDht9GJ2TdAsa9rAGnVnSnh65mZVj7pgPWUFrcR7DDpUSmt8Dt",
  "key2": "2yxMfMUbCspsRz9hqAZUesqLWu6UgT9TVjp4Vkn5qfVRFQrJzqs6VBfPhULZGoUp5ZaLGb6nL6ziq4TjBkRajd43",
  "key3": "UUzDb9CXd5XX9TM45Yxd1uyAH7EW1p6PtwqGiADiw2D9kC2uA8yyC6zoLqkR5Yf8QyygpgdkvdP1J9SYzJ57duK",
  "key4": "4m8kFtj1JUygH9Tn9aRgxjXhq5YkNnEerLJFqKTwmb1UXtrvb5gA92J3HViw9PDc54D8qhU4ZUcH4CqYWM5vrbcA",
  "key5": "2e79NKWDSiMDAtoSaiLNuDFNj1Ena1u1UtVLvekNnKUVeZV3D9upe8C3D8RhviaTzWRVwgfR77vwgst7B9eJQTE4",
  "key6": "4hQPAXH65h5aBywi7rj2nwL4fE6Y6kmnNJ6g6EkAFDXY59WixcK9gGcWubdABrScGFH99Hh6eTHHKECbVrMdadF",
  "key7": "4Ltcxtsu1gx1oBh9fvKyHLRKtZTGYh3XoQEsi3QJLsBUBkY9GTcQoMkDJ9Ho9hxXV9ePUMoBJJPFr63oWJp7CQkM",
  "key8": "3mJFjd7v4rEepRVVFmuwkHFnig5TqBuuQqyqRWgb1PEDu3FqeenKmRuGKkdpTqdkT2B5Fpxre8M2eHTrEyENAnxf",
  "key9": "fup93hZYsKP9NpGNa5UcLwBYbdKb6CmCkNhrTcu7tUJZDtEcKPj9oXWN9ehL7hQsrxWvEPMBR2Un5TDQwPoREe3",
  "key10": "wAh9seyLsqRYciTQUtX9FRwoqEcSsYB1u7HGLvSotHKMCJh9aG8ZkBuyy9YSe5oLJKYRWzwKuzYHRronNuYreYV",
  "key11": "k9oNAST7WpQvX61vQsXvCoDemVJAyxXfnmBvHJhttZg9NrvtB3dUJ9b8QQJc984WUuvHGATDvjzy7RNHCZDYdT9",
  "key12": "2adJxk2V51hnZnZ4QY1uivMb8ibwbi5v2Kt9YahFN1ATw3o5ZCxfhcBx2kErg94sh5bTK4WhfSzh1qDrYBBXqb9Y",
  "key13": "5i2kJq9CGNvYh3m1kbYy469dfPRMog8V3At7nyDeeMbrpGHVB5RbMSHA2jLfUs8LqQURNbc134NaFEFbmEW756wn",
  "key14": "4fnQbF4CLtu1cSSPLXotfrcrdiMATQgjMPyKiV125TVuaeoDZ7KGnctbeaNtwTfkmb7XgbDcmyqLs7fc8smvMfPs",
  "key15": "qCEo7gWCapiDfrvobP5heLfdR2iuogjc9yqDbF5G8tuaKu4M9nyAthnk2T9DvJbf9MeKNPH3hmjoV3bh1Po9U6U",
  "key16": "FTTk9TVKWkGH8EVgeEMX3rVQByfqAuttZcpTzJLRoMwheztAwGuxtTtfuAzNqshhJ23ctyYAXgn8bpUbJMordih",
  "key17": "4eu1XQ1mfFnkKWvXw3AuJgYjeDcpFJzHjvcApFtCGSEfVM9a83g2Wc7PkwpjHReCQrPrGzmbQ4gUKKLJXvyfFsxH",
  "key18": "4Evhbw67Q9rbC7UcBoWsTaZKG81dVnMNry5fVT9Nd1nJcsv2GWU5JcTCRRThB9QGhAPaSpGY7xFH35cwSpnRAStk",
  "key19": "5U7RWCXQB9p8dPHN6metmhgcFCvWJPt5BYaRgkDrrfcppNDxnTrtSLSYnRoNa5Zkzz6422ghogg5aZNbzqadBTeU",
  "key20": "2v9A2oRLWAqc5MhFG8YeAskURtvBsA3FhhGeBYNTGKbd3xBodjdwF9LivkZrLEq65EbVWY6pfgmHnF1ASkPBgqNS",
  "key21": "5uYvsKWZLMQZ5fPJupB522hVbTyr2hicDZ8C6rL9kjFYaoGKiaDKTJmXepdcvXHBSTcRpSgNKARzc3Mrd4Ue9ngp",
  "key22": "2eeX7himmyvLB7vhVBq4LHXaEddQK5598ijcGMxaVFG8sia9Ch6tm6m49dCV5jsiCxNxjnGf5n5SQ3YMV6DrJ9S3",
  "key23": "GeSLnPzgqLSjLEisXr5FJTG4WAp7rjqFpjEnEcKLNoJthUnwjcDszPddkyeSTwYDMr3xgrCm72KvU2BvpVJjBMK",
  "key24": "2gaFmoXqvdKrnt5zCLLbC8ZiztHy67jRUuQxXisEiJKxvmtfv9F741CWGQqDdt8TtFT5xvN2bDGNjLpcupc3VgHm",
  "key25": "3RDAxU3bM5wHn6avWiGPcg3zD2U9zTLtLqqzACA8rNtTUv2vVM4GNkW5YxCYBKpYobziAWsKigd88jT6c7gzkHRb",
  "key26": "5TUHqor85CkNTeqQqepmAwY6tWBQCKP8B8rfB1vgZ2q7iWjLFDBWXdjy2TXSEZiBe6qaWNp1CMBp3cBXcEgZhVZe",
  "key27": "5ywUgEpYszzBGcuYcob2EJpVh5yBnGzptYpLnkvZfSDQuTupNPpuZjMbSZ3KXfvowYQL8gu381dg3XEEZgAj8gFb",
  "key28": "3CquyNKXjs6pzu6DT6VWQ2dCnAzeXEuGhHGZq4RPGBbmXxaCzg7uCZPcPik6TkBw4STdnJV2fdrUwvFjkrvZGcBh",
  "key29": "5RFByTxLvsJ275VLYLpCkBUPqX5aVuV41xoGJWJvLZXqDpGTgidnUkKj82EpiApZNL7ANE7QUxKxGARtgoZJgAFu",
  "key30": "3gaUKi9YJoYZeWfy8t3XLmFJkmvTaSvTrv9crU2cVkCx3PUDrJZePkw5eNxtvBb8tZrYzhcLU9XRfHwhWiaxA24T",
  "key31": "2HWgGSE314JEX8ho8WzjRvG7rDXMUwDZH1Uee7qXuZci2kMN4KBfrHAKFhZpAofHQ79y1R2PAAw2oDbv58YdP3DM",
  "key32": "4RctKsPhWhowpbULZ3cLq7u5tkDQUcPigDixLwzD1xtJP6yHYjDjzr4skfun4HSSTm6juqH1rUWeRMuBP89g89Hw",
  "key33": "k3Ahkk4dfnXqURrPQuEs6g8JW8TPFQ2kuPHuRX2Q6aR3AXZR3UKn7gABUqBvLeWiMm2JeEQ3x1T6uKLaKRYsKrT",
  "key34": "47nbAAAQmx1fnCfzmMTNH5GfmBbmrAkqac3tcxr1HER2MFJfeEmXwo2zMURU9cfW4q7C985DCNVWZ6PGWz9it7xm",
  "key35": "5gkwdwTnhC49JiP4G8sn2CzeWkLxi57JXM39EX38pKpop5x8gaDbS3EeUCBZ5vhmhddBUPNvjtMDdkyNukG6jmNQ",
  "key36": "5AingcnXUwv72BPkLUmgS4jyQYsvaXfVN29Y9vbmAXYC59DAvYd5Doxdzz2Uy8A2CiXd1EdVcpvi1cVWs1qenDmE",
  "key37": "5RkJ6B8wmXaeSp8BkUeqNDow3HYzn4EbrpUTXrVWxocesSn6ev4So6qKZ7TBmzBTX3X99giHW9Qq1T5LCqFSvdw1",
  "key38": "5gNPtwURL8nMKCETzup3vLfjP978a1hWerdidmmsLsBkqnW5y9V6TC8MKxjvBrojUwtmYiC8k2zS34bHankVqvDd"
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
