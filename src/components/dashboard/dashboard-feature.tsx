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
    "4Dz57LVaWM9K7de9hAwkN2dHMJb8qFYdbMQBWkzd36cHUHKzhCZH5zHshL5MqHmoqoP1aTjaT87ee1YUuzPmsRxx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KfZvtEhmo969zJ2oELfPmbxFQBAjoeUQ6WNX4qbrpYwbWd9FusJA2EbQWcfWhhrMKPca6cXhiv6EToaaRsoyR1o",
  "key1": "4VVV8MNCVSDBqtvzguNrZ3JD5VJz5Hfekvr9oyrswp5yTzFqSd2NMfCqik2ZkAUgdG8GV7vM9eLLVWhaTtjdMuJc",
  "key2": "5wnadt3kNK1bM5QCc3UK9L2RacK7eBsVraW6aHKfGUneajbRkFkae6i1MAxaepaG3Bs5wVerwcT21ziEQH5TkDcr",
  "key3": "4yhVaTFf5PjUKh3qfYYoDR3rK44jgSQq37ZMwtgsohbMpSrne4mu6TuxhmQ3bDUzsKYwwXjN4pTDDFHGrqGxkRdd",
  "key4": "3ULqm1W3ZfnjMkwtgvfvecoNNpFHDjH2dziTWJ4qBXjeYWAsf76PKET7XC1DA9Nf2Mdktm7FNssRbvW444tgEaQM",
  "key5": "46p6oJQ3MpS7NoyvTzS7r9wEkG274BmDnHDdUTz4JvHu13HhP1HSNnkvUQyZT5sHxu8mvysJNVtvPHSuvy1vBMFq",
  "key6": "29sD4ybP5FuBQ5GW7fBJVgysgYXpEbFBNqzetkxhQz47qQHeNECJkZcaFfmqd7TkeCYbarKLt8GUakZQDCYRxfgR",
  "key7": "4QmBz22NYD1QKHKVHsebuY2bkUUv1dcs1JbbdKNyqwFtDQo5aBpHvpSi2hcbQjDT9g6js7eot3A6qBf5X8Sbn7ih",
  "key8": "54zcvKShR99U2NKuUtFf4q5BCxPLxYo6Dbhiv9mzMQ9irS5yuJMSCEDkFoDT3bBDjtK7VGKQdQ8pdqqcYmevynsV",
  "key9": "DDWtoNXrmpE5Q2TYnTYMyTfzhEZBt7HrW4mTBbM7Jkrv3GtZiSfUBf6kztJR66zv3fG53YB7NRQh5Xi1bhVnPE4",
  "key10": "3RUJd3TXVK2RiHRMsjx6aTSaW5MzkbGjum49RPtQbUDoM9EoQMsovgvFuRH3rGTzHxVLXKZKV9qDC4E7QqgpfG4x",
  "key11": "5upDVzLy42buyLxoaWuPrm8RtnWMMPe7Med6KhCft7mHuB5wVWwWs4GcTqM3zPbX54VsqigqL8tiUbUmQvQDTPVw",
  "key12": "5vaprBtnTJoKY2NrWxgYSsrRDfQnjsTRmeLLzjS8cRagygWxXRHEtRBmnCs7nY6RSJsprj6XgPk8iivb9uC3zyg7",
  "key13": "4JUsDMdNWBAeWdhpE7BttGsnWdhbopJGjpMUdxtmvuWADqvdeQG6HuPuRKWDzp8nQypNQUv2a7mpi4LZNcujw8hv",
  "key14": "5h2rz7NX7Wm1xGAEisbn1tLcJGquQcE25Ka3SE1fkKm7fGeCnU1dfp9St9giE7CNAZdiRmEqLNa3QLgh1QbE9Qfm",
  "key15": "3arNRyo12o12L8x4Aahpwa36SvbDpm2X1mqrxY4nZN7cQSwVPtkk9wEQu9yREatQck5yPDscvwb3tTwz4cH3ubyi",
  "key16": "4PWmwVxyqgyE77nMYoLamvrx2FWqNMZvA273XA7afWwAdJM5UWFrTzEQDWxSjsDRxZBRLvyn92Lm5Zczp8BGAo99",
  "key17": "4rrumAMVEgVDWj1bHQdKjVqnMda56vvm4NkAu3hgDyHM6uho34S7g9Uc6WoKgTtDuDBQkEXvcoTo1QkKQhZ5ggf3",
  "key18": "2TqzdWiCXnuYKKcu4QKJipD9rLrAvdpbAn1XjJB9yyNjXnHfEGTbRRUXkaHm3bNStvxF9t1pJVj1fsFP69vXNwfJ",
  "key19": "3a4VxrdQaP1MHem5SWBLL5rKsVMLnSyKRDPWtK9KTkhdryiT1cLYp31n4UQ4CLHzGxNJFqtri8cudnngRteZ5wvK",
  "key20": "3TBZh3ikHfYkgB1k7RpZw7DC9rRGEcHz18tTSVvHBXJ8gdVYnmCtTTHhNyntUBpt73QTf3ZKhCpMNhjmtqjGqRpP",
  "key21": "bJ7hJB7iN6UxRWQrvdL8yZZRLmNaZ95MxzKJFdfahFvVoEfqt3Fo5k9zpTEgQGooXxR3ED4t3VHNEiEXSTWEJKr",
  "key22": "5KmBsj8yk56V5XJ9sMmuFNnYjdt3JibmUoF6QGa6pYrXnLF4mvSEV6XQWaxiChi3C36Ai5ZH9i682ZpjT6fa137j",
  "key23": "36hRcFUhuURiNrqnXaLFUBJkfPrGfACdoW1K2zxomjgPNHnFxiuzajNLEa58jrCg5UupKck8JQpSMzJCrsVJCnK3",
  "key24": "3wYF9qy16kTqjkc1etcJkL7Ag6sEiX8HXpEsdJ1cnKnnxRmFsDHn57A6MPszoMJxvdoDykMLJFNrJhkzyH8gWc9y",
  "key25": "k1uFm8FWXV4XgbQdScEGbhxqT6KgVd4c4H72mVfBU5nrqdd97nvdyXNh43oUcJAATMKQE5roVKjbjVuU3BaSJqr",
  "key26": "5vHWyGayftgGHnvSWGLgk445HvRTTsiJT4PUSXCp174QNduTfXLozixfrYc1fFdGYm3oKqky7PXK9b1usEmDA3g2",
  "key27": "5KUNAG3tAX4RQEuts7ScaREptLARvVzxMpQKDHHzVMkx3aAcwFaPkZCTZ6FpCKepgd532pfbyGLhqidjoKj198cW",
  "key28": "2rCaBG9JQF6iEy2y1b9FNoWjSUTtHfo3aUFeZ4fWFZpHKv6jUMEPJTWYTf2s3LB19ieFxBqnsJCypv4ciR9kMN6A",
  "key29": "3tc8M6G1kKqExbUAFgNPQ9rrhT2YjJtzNTaPfZPJkhqS5ueH4zvmgtauLvmrBhCqp9NHbPfEX1tbiRxyEakVonKw",
  "key30": "3cY5Eg3FTutdbqkKJJRbmUqy6HuX3ThnP4NmWd3AMuTs22JWXngj7c9DnJbPAz3KG4T2SqG6GUbj2EAnWWJsRLAU",
  "key31": "4DWxgxim1xqkCZUyf3gKV9Ygj7SfzxTFRQnNEfu1rpvbRc8kYFW61EPqg3EFiQm4oqG2ho8kwDeEG6WhaGLiQGn2",
  "key32": "pmKi82n9hSUX82nyZed5CCaiLTQRzFCDraU5TnJi6dG1LEpYrKeDxLBTRrHJr3sFUMbkPXrwquNBFzgageuQdMZ",
  "key33": "2SVzhiepaiRvmH8isTVxy8jgDboXzUR4nqggBwLh38f8opbPFHBfZF5QUo6ikhsUQFVEYqgjUKrjb2eYznM7LiKv",
  "key34": "3zSH2kpqipzQWeM7ytdLaiRFDvD8XuZThShQpK7KmNmWJ8iebaxuhaPVtpDeiGxc32m35TitHq1B8nsqVSsB8HT7"
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
