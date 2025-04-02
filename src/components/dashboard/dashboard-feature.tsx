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
    "29HUrANZ26FZRMiQaZHK5GGVBdwGrWsu8VqKTeuNyLryPLLTqcZWikf9pmS3sYsvEQyWqj5BM76PSuNSW97iYun1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MhQ3hsLqapCjMMXSY3usEe4t8oCCBzHCUax9yNnA2DWtuFjtZTEW3BMDDjGUqkz37KZ6BsGB2mzCdXvrnLYmu3H",
  "key1": "2ELCphTh97RBgoGuAaMqmraRgTRCiePdxNNEN1M9s1EGKCRbnTNo3jq2jksFbMVxG4TU2Ze11z4yft8JouygYcLK",
  "key2": "3aNt1FKVq1m69cwFHbfCujAxSvic92pEfbejz7gGQRgTt6YqniKUopZCxe98WkdBpHRNqbDUiXJfH84HVALkj6gy",
  "key3": "2YexGx6ZZmzMGB5MGxbrUHa5nXGGPm6MVrWK7oYNJ6fWAF5hAYV3DfuSVinnh7q8QeL1jA1aLVfZDM4DLwnEnzqF",
  "key4": "2meHhKKajdBqC1XTs1X7NRC1zRTPkksFkqD9ND98nvGffeuJR8dUoykT5DpB2Ymfpuy5ffnSJHMkoA5QH2kjPKuA",
  "key5": "65UmnavuWWkpXQPGZgZn2pdvBcbkzxRVY9CU5NDeeUyfAkygZNeJbZuBHuMMq3NzcfJk8qaR9HWGTa5emxk8XrA7",
  "key6": "2BcGGP9BvTNmitvSaxSS2QQGkgeht7y2NcxM6S9hv2Xjqj8H2y5LiP4t4fa7N7Go5UbogHUHG2kLGn7pxEb4TukY",
  "key7": "3gGuYj4MrTHykEZ5i3AZY8ULQysuAWC58WrHyQQD97qwub6U748gHR41raKukemXrbRJtZq2ZmGctHj4ftRukHxf",
  "key8": "5gpxHVgMpgD4kkBJkkJf9j2ahvEHSqLSe2m22o6KiZvbBi5R84iLRqpxbaCe2of5eGSL9PtafvftEbpuCvxqAjte",
  "key9": "jGFD7fFfQFcq7dqSRwzr3EDAoenW4kgx1YBXsDTnv8gAUiWzdQcLBCDkFjU6ykaXBaMeGWe37Ystx6xrUvuyE4U",
  "key10": "2xBCfr6TvB3QVcCwCCFS3GwMvN5RZ5TJ43d9Vg9S7wXAPgyVtCqTYNre37vQWDyfrjfnZvUnyqHwNoXDnPcbnHVu",
  "key11": "42RJPb9bpdJ5MFQV96WV6rANirzmQbfHP8bEnjzMNcUdyKfkgzyEkjKgz76aesCzKkP8vrq9uan6Fbh6g1RCfoMs",
  "key12": "5d7XuXTGuWfYk1ud6q3eBhshBMNwiHRa9CB3LF9r89iCkax2rFgDRPrRndd3po1tdcGLT6YsRgECsmLf4wkP7tN6",
  "key13": "5Z48WahSzLufAtFfkcDPgqB9Dyq1jTKjHMK5tkx2cW58kYqs3fcrND1nv6xjkNK1DdfJPmY6TF5GMevNLa23CYWN",
  "key14": "ur3HjuG1iKSogQQH2StjxdggSjbamWVJtZ5NQYzKat1qvU7mNPLmj5jmNF9QHgFsnyyWHDUHkmNxZyvbJHndQjf",
  "key15": "3tHuSoDnGW3EmoVL79hAXDaowmfL6KH7h9HoK5s2wFZTLnxmvHFFfRfEWjExQqjhjqiABTYVyZvg9JHU1SLUYe5X",
  "key16": "fc37qqydrcDdPwaYeF9s6JhSaQ4Lobik31GZFfQfS2EjQtw93FZJrA5RnX1H4Mx9w5rtigFkCwgcJAB5Tqcdzji",
  "key17": "5o6mL2CgQHNy2yFS28TqLxHQtQa7XCkA89CoVJep4NRZFP3Z6dnkhexszwiHCpFXeztRs3JcsR7MLL1HxkguB9Cv",
  "key18": "2qYugLRvEsYxhAD2QC2xqetuAzdSCCmVyewFooD4QKJRAoWsJRwU7HXv7gfXF18BT5BfQVMJMEv7RazaXv1Ei2wX",
  "key19": "52Rc4YvL1vEdUivm2xSE9CCbEqpoZeScAZvECfkYVbq1GYSfxugqZvLUVruXNSeayppnRYsqaSsHH2HFd711SWSs",
  "key20": "TpKT6WjRx1o4tG6U6so1y414rzhEJKyuCZAWR4qQQ2S7NYPMaZfUNrgJ9k2J153eEgr45U9wnRpHFofx2y2vKie",
  "key21": "5CUEqN5qc7zYw4bdy4iwLWhx2kbeBNs4P8u6HJgQBGPjxRWsUiPvr3UoRo19SfUuQDbey4RPLuzHue3zvwMqfoRk",
  "key22": "48N4JUR8CkBBmgbQ4Kq8d8HZejx3jZZEMMSXtxoTfP2668Wcx5S8r2kKJH7v168VB5nJHTDZBeAgWzHQcpWHveN2",
  "key23": "5CuZpRjkza5gJ6MD8KrEHf94vspHVcDVChwmJwXcqpKRwgfmrUwBKycLKqaiYuKrLzhzeybwk4tudtvhnjWGEj9w",
  "key24": "4yg8k4Dj4LxPnTHamVaLAabXaXRibvtZewABK7KEZb4RaZekU6i8wPZM2fvTXx8JMTsTTtWZrNfrfvaAUTeMrxCN",
  "key25": "3kwkDqgzgtgjBa4ANLNfyP13iaC35nnEZsFswLmQGHjiYH2PV686dJ1FaSBYuvLEajvD27uzzJKz33c9rJFZnPqA",
  "key26": "3nwG5KsCfAejQU43LSwqh3nQxLVrJbx1HwSDHDMo2WkPkt2RemqVDA1gsJJGH79iD83D9ceaZ1ZvD4AmerTEKUDe",
  "key27": "2hVRZ56Hry3TKtz8rHwHJYKFMSJq5x8aByabbGw8QgWUR2nupfnkDRGCgEtZre9Xhnt2X9AGSoeAkPydCGBVacud",
  "key28": "5EVJqCkLwq7cFPZwbzt6BrQSuzz58jaDFWH9PmLVemZysCo4DwhXXfw2NCdrPkUVfYXMLBxEyERGu41a5kfQYPy5",
  "key29": "dnLacBYc54YmJDFY8842SULrksavLrbuwKYFYTqhafpf2RT75VWnLunwomF3VeBKpjzmWEGRcUXvNr34Xm8SwuV"
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
