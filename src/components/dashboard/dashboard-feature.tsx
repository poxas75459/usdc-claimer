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
    "5uinX8gukKuL4NXCWzfceUbbZXxHZ9TNAEUFNntGCySiaupbeih76FwXUqHcwKjJbo7KLS9TC7FyZxZyBEQczcQh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4omWfaUUpz2XyMEd2vd4NDQjpVTEZWxXNfKQdpJpqQLpvrDvnmvH4vbGX135i15MQbf2NY7os3CZsSorqzUeWrDF",
  "key1": "EaTkNW9YE2zVyFqcCAJKZ33pYawy6HWm4vG383qTpP3VNvCvU7ynLhhmYQuzLe5DFsUT4Kov9cHsfk8bTVa2gD3",
  "key2": "2ExRBghSqh6U9fxT47S46uH5h6iwXCTwebGDGB83cRLCMAPKTQw1jnoeZvUcRKSb3yiShbD9n5DUG7UGZER26NSG",
  "key3": "4cnb8SQxuKZ5UC2WPRe48zwrks5KWfjzdP5rDcskcbWkth4hzHMpsPPLQf6CvmAXY7p2nHTwpwAyQ9WNXKMc5qjV",
  "key4": "65DrhnN9JDkVV73vefPrKx2FcMHD4KgCDH6pWDcjZVCEDnq1KNsbB9KWuv93TwnXqfkvuwfVZaTNcA38Qa7aXpu1",
  "key5": "5Cvu76DpQSajMXRPpWqvDujfQvaR4ZaNkGpY7KgqqdCWNM2ouUiAS2UeBcBW6Ft5w5Ymc3c92RbbKLbBXibumay5",
  "key6": "6616dF3Ai6bCS2gyMxHF3fXtBjJ8MYkvWgqvGTPEZGsyzKP9sUKWj1dcLkMp5peMbZrnC8rvWx95AMziNRwVdyed",
  "key7": "2RgbYwCiEN6V4Yz7doNdv45Mr1HL5aWQnEKDzbidav3jUckQyPckXkwZFAgksg7FqgJeZS21abhnFyb2vSQxkL8f",
  "key8": "2Xi4Jmf529KUwiZWe3HcdfE6VanFgMX7dgPJ66LMd9T4AqouCg5Mr8NWM4EFsfqDK58n8bwSBH98P4qoPPgQCTnm",
  "key9": "JVzTq4x75zgCprFejNYU4V7hxDEWdBSuknm5Rc2hQHB8emyKENvPeMEASdSazsSZQhXuUiVb8K9gXKrMXYM9SJ4",
  "key10": "575Qoi6Hp49p6JMTDvhcEctMksfE6aLDqDWcUHEWReUwJqBXnrcXonEj5vejLLkQMtwypRtjtgZZK4zWFP3ghcpg",
  "key11": "5iACzBBvn2EzMndQvqLT6gDrQLfLFG7ghfDnGTYG57YSeq8manLhVJ2Ey3i7Euj41jW82aLyicEPPWXCZeUxHgDM",
  "key12": "2RiMR9nsjPihtfnKkogKBuxUXRVJUF364LLk6TYtZEmJ4ahpUkMhkwGBogZmfaeMbdW6uTXZD3eu2qbb5RXAFq3N",
  "key13": "5P7Um3Bdbe3rGYkU4EETBBD1vTH6cpYSzL7WtDJD7ULY7mXmo8bpaNpdSn2Mr1eVP1FyeA31Xe6rYE1nzyjMagUN",
  "key14": "4RMeoNhqdjeZ6MjdnecMdj22J8zsr1eaVvAhWQxak1Qb4CTzSzE8vBKCsfbMQkbWFQjiUm8GiXy8TSYnqN58fFm1",
  "key15": "ZK5PfPgUSFTYEd2QS4o3Ec1pbiuVtGfgAiKx6LhXh4dKA9kYkakgQyAwiPkW1McSTjeSJU9eS4EfE4oC5g1ZUbT",
  "key16": "2GkQ8HbyZpN89nsp8FML6WZGdNoAWFYjM1gfMS33eNNnBM1kx8yRuqSfo7bzNfcJnGnzZhySA9Hn32yuTANGYbF3",
  "key17": "Wxu1EkmjUc51wnbwVgtXThCdPqGACsuBw78ghCseK8zbPcWeipumL3sJkCMVwGjJLGVZcqWtPLg3376V1ZgUqrB",
  "key18": "2SRPnjyZcGBk8DG2XDaz4xDd7bih2cu22dPa1cF2ExWYsNCkixfAqNQVeeraEzPngLujVz5GNKv14At3Fi69AgAK",
  "key19": "3raZXAtjgs8z2fZxDnNV5xUgNFhAt2guJBN4DEiaNjH2hNY8JGjvBAM2NqmJZiwvJrG1Duq7RNA4srXvW9Q6n5uo",
  "key20": "4X6mQ5ochN9VYXjQDPhgaVbpfeU47MWLwVKym9aS5xmtW5NSo9xM1P7x5BsH82A4kHvyeyePppw4PCZSZ71rqgyK",
  "key21": "2oxfuhTUbFxTomoAJUUUveATyaYUFhZnjmPLSYaUgSderJM3gWbA1rh5MMtFYH5TS3wTkita6HcQSR5m2A2aHU1G",
  "key22": "64zbQufPDnDdY5neN3hWy54A4QsqcDjatcDhyTRsEnEDgaQoNSYMA6fRiCaUqujZztBxcXyPPew4LBSdxjRb7g5H",
  "key23": "H7Vvf6ut6P9jYGiYwKTkvJbFYBDsyBWHZfgbpeB1SZ1usbXmWWHRi6GG3kodH5eFk6xYrA8uXiv75W3tM7ih5sL",
  "key24": "dkqnrrT2gbcN1gwfFQKfrhGKN718RJs7kRiWKuV5zS93LTrYRMCkLHTQD3ZSSCmp4KN9dg41sdv2p2TSZC7sk97",
  "key25": "2AaA3rAVn8CnL56NfdwhQN3J8tZk4wqtGR9BXKanByEsCqzWcnovEsS2SepmAvrDRdJZV6vUGyupjqDYEUXkT3eM",
  "key26": "6carotgCBcCTGqEvs7nzsEwk1y4gCvbGCQw5VD17ZyHL9DqYzfnJeExjA19eY1nDUr7UktsoM37wX7vuZ3uy18G",
  "key27": "3rf26YGLeuz5PZEgb5sogq6UcrUJJ82fB3LvwLGe97Xv6ADu6r8gd398E3vFsPzxB6jGqcdWg5puM1WHmhUdfBaW",
  "key28": "3cE61vAbZqJRjCSdFE5xSkAwQPCNJQX38ogiHFhdKnV8m3JuS7Jg7p3Nz3M7RCYJMo7grsjmp9pNCPCwcGVgNd4M",
  "key29": "58bwfj65nhvynM4J4PmoQGVkanfFx5gzuMZJpLUJgHXTj7njBMtyXQnsvRzXNrhnsQjaei9U73PY96tURzY1YU9M",
  "key30": "39w5jNMJu6A8ohK8MgVvy6bmY1waFnYvVMQhqdhxTi5hrmqgZhYeumFtQ4A6cJovkz5zrVi3pPdzgPdcCBH1iUgK",
  "key31": "e5PGc1N2SLUHRomrLnvDFmc1aj1x2mdftbiBMGLGxpGxGaFSAwzTTB479DtiSpDh34oNZ6jXfgA4df9nwUA7VeV",
  "key32": "4Lm8uJEis9MS4h8fqRNtn6gyJx2Nnpquzbfj4M6sodvsrFodjtGknDc2TMDniePsJxCn2eXAZEq2KGLjfZ17hWLe",
  "key33": "5CVZgZbKd2apjMrWacbArzZ5Pn6rkKavRfJFzZ9eVuUrthDqfEuosTNHrWWUR7XS9MD9je8c1sGJCS5FmnAWpHdD",
  "key34": "2NPpxxr7LAneasFqrH7qmNFyanqD3Coe4Yy4xAZnB7RYG3ZWZ7keRePBJFzJ5YRSNu5VywGdzocu4ezCADevaxSS",
  "key35": "yJvANxuRZmz7yw5tRuEeQXMh1qT1wATn7ABeAsfTAhMQW8TR4vFiwJvCFW45MgQWPK55jFfux49LaRwnBGcAboj",
  "key36": "2UFncTHd3hgLzgRUPEiZBMaanN9nW1cjAH6fymHMd29MpkF2Y14x1phqEdjywGrLBruv5w6qZP4s31GmEnmorQjr",
  "key37": "4Lob6x4zHsVhj3iCmiVBNQ3cvjLHdYFUBHMspWSybJyzLzYcka2RXLwV2KyDrZgNjQhp9vQZ66fA3qef9Kwnppy",
  "key38": "2Cf3vNikpP6JrsJrsUUY5D21xqoGH6i99cboNht2YUaaMsqFceVjW4roLJRg6HxiTAtqsBHt533JU5wahznWzBV5",
  "key39": "2ZkfFwHq81ESVehfpFaui5xP8ZxVctNrbmDcg64gfSjRpbZuLuTFPMicnu2QSkSrNsen1KnzEjVMxA9QDPut2ea2",
  "key40": "3nZanEagTGCtRjBtXHm9bqSLMHqkhFwJ32MV5pWF1gmUZBmDnfxyUYahS6MkQyy9HgCNakkeN47gAFdqaZWspSuK",
  "key41": "45NQt3L2nTGq9iiRZzhHDCr4ot4qyMr5tRKbivrPuNi76Dsz7Sygp7LkuUxUzLdqD8f11tRGmuNxn15yUb3GPjW6",
  "key42": "5zXe4RaF34vsEwPJ8uhMmvk6Xy4WdkRVT14gHdJPhqQqSHX6ExMX5M1uQvs6G3Cz2S6cf8FFww2z4ZvW2ijVPb6k",
  "key43": "7i1PqSYrCF9tQWaZTFxV7YdVExyJTEYT97R65hqVMNyy2VtHg9ugUPimjcxmQ4NCwdkvqyqz9gREiabexyDtGFM",
  "key44": "4ogoVD3gaeZHeantsjoSDMV72eKkT2bF3jMtvEA2mSCLGBSB8VRXFfsXb8PBSjHVxXvFcWvKLUmySidpAN7oDQg6",
  "key45": "2aGDJGY8g1n8mnjNF766keS2iygFDEKpjCowKbLFk1531eLSyX6TLNzDH8ssaScnUvPWVyE14YBdTJK3oxMD921S",
  "key46": "UTxuAMUZ72qRGJrPTzzrQzThDFiYKokfYDid5F4MHeh2D7NcrnSTcrVpDDiGRQDZDKfAKWbCwwFSfa8rYEcSdw2",
  "key47": "5kQHy8UTwrEuq7L6bDuSLN9Azie7Tbskki29e56v3GCLpmGYmiActYAPm9iCBXJRNpKHcrpi3r6jdhsFSBZkaKM4"
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
