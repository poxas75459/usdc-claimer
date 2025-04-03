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
    "5KL6rDGJmXa661ZybRKEAyYi5SHJbpijgXb8ebJw5T5UASbQ1Q6GS5PrwUtCMK56oT1KRbfmcGyroYKcbwzhpT9J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CnNEMHCd4m6RrApxERDYNTx3Y1PWr2wzSouoiUB5DrFSez2JpQw4hPuk99tCjGhAAfWqTGr58T4vBmu6HsEu5j2",
  "key1": "3hGn4WmYmnk5hTd3NHjZuMK8DU58Et7AVeVhBALg5dzVVKU6apA8VWeZUMw1FTedQrqjFnunbFWuCvJ8CfLPKSz5",
  "key2": "5bGv7Kov8zHeZwU69wwJHsyczca7kfKC9PeCG9FrsmNHR1PXb912ymTRj9y5aK7BpoSufEK3yfYQzjEPQKP3Bgpo",
  "key3": "3t14XCvxQkFKJokgjxeAP2q98AnS57bDh2528VBdCMMngTA3H5Xn6r4KSkkWnDmex1bkV4tCBqq4pxQZCZWAdkxb",
  "key4": "hMPty9VrPXwVn4LdbigWzWAUZKp7M6hD2PbewwBJ6GQUaCCeBbFHBeUct9xpe956hrynDaE5NtpWnm5THegdfGo",
  "key5": "3y4mxFZh1Y4c7wiUHeShi5Bx2XsKumeXhoJBytFcWamNcAPg5S1L4EEjc8Y6iNc35kudJMcU3AE6tTuMiGjuWRjV",
  "key6": "2X8rurETXSFSnLCpNC7b78nmtfjs3bcqNqiGrw92aKU6jEe88ekjznXs7VnLWBY9j2A466sFsaSrAueUFQLDoZ3W",
  "key7": "36ivaWxYsMwGVv63rBMvtpaokr6J2VU9LaTWQ9THoJaSBuMRuQEEXbHAZ2947dFHYa7b5t6RV42MYZ6mz68n1kVM",
  "key8": "2t1Du4U5qRMQZMb63nXXaEHjvhKXXxMtEvnZxu8dLR8nP5G4YsHbqqgsv5snMnsBFAerSyFzM9KSFdUgz1WbTCM8",
  "key9": "2HKj7pSQarahQAeJ5BZK3YjXL1W1JFSP2tq2g1fp44XYUxKu4P6ob42usRWQ4cAGNfCZW8w1XfrAXDLBo1HkZnZ6",
  "key10": "5sYmMMUxfna9CiJWdb1M4wqMc3CiKn5Qu9jBVmQtQqPScweFeDT6deftSnetdTzY3PkcingkRRVm5AULyN9Eujv5",
  "key11": "61JjRPTvF882vyUMmTt4DbemY9EB5AXhhu9WMczXE1YXD8MipA5eX4iGPXcBP7cd3WYq1geqU1PPqzWDqBPFm3f8",
  "key12": "4jpHzfPCNP4iyichDPUNB5cEai6eYJUnETPnqcmSmJExZntCXsHh7ptM9Exf5g1UPaEqNWJxPQEjrD7pVi7zqarc",
  "key13": "dgKnL8ZVCKNvA56BosDF4i2zkXFxSMdMQq9oBNh1b2224zopMaTTaZoXURkNw3V5whWVSn6zWUuEVx7gxBq4Ud1",
  "key14": "5Nn9Ve3pHK6FwcZcKrn4fb8KiGwNEdGwwTNEambWKrTnzS6hUdVex68LesmuRxSaRkQhLsSDeg8LVuuyyEXf89cE",
  "key15": "2KgJvzePbfSkvk7KJv6Kx4LzZfWAr27XaTbCA8YBJjEUR7A8HhG5PvJ62deQP8Fg1ar7asXvSfy8DikNcxMFiCBD",
  "key16": "zmMTBGVyiCYPexEFxVmbVQa42rME5CCbRBnGcbLdeL4bzrR38nEMGZxT4aXDfQXq9TqUK8rAmNfRgKztWvBkxn4",
  "key17": "5mtX3v4TeNYpQMLxvA5rwqNthc4SPuwmkmRnUFJzaNmZJWYLTFJsYKugwY2H5ovvoGgstoBeBQAP5gwBbJT6KgDF",
  "key18": "5F59NbqE1oaFnGG6zoELZG4xKJr7xizRJ2pPP8RR1P4QUTDVBaZBmQRLj3DNkr2bfu1h19gEC9Gh2SY3CpPvh6SD",
  "key19": "C7Hh9EFPidq4mCw97keEJBu2P9VjXkBhP3qiardGHGZKLSJt5nrs4y7LNiXK3A72k9h3tdUAHfC5gx5mEvrfh5r",
  "key20": "3ZxkpE4kkdArpcc1N1J45X7eUmoSisdAMHcLdvgdajn2CQFKUeuPgoF4XzafSVE86jTYYb13dr9xHnDu9gq5racg",
  "key21": "4F5cVRJ9yrQkgAva4QsUJZsUhpY6ftY7KMgKffVUvwQdH6gnveEfgB5A7PgejqkjuWqZykBrRU7FHfLazFw6YuZB",
  "key22": "2VgHuF3FpDz7MD1W5xkPHxx9vnuCjob8TkBEycycR438Jr1LztvEZ4kJLDFud7JyDfrdXLDhDN6hfyHMjwZy1taz",
  "key23": "47rrwXko84qtuJq3RLTjv3uth3NcRaU8pcGiXFfNum3foLF4xfjuzqbQQd7oX88m6EL37SaSqCVx8HgYr4xicgzT",
  "key24": "2xucCYczovXUkH829hUtGHYfaxHLTYShNri7joMiVy7J51HRuAaLjrz2qpcJXZeDdNEknLMmH7E2G26L9v45FxnM",
  "key25": "BnjWy96KEgXoqQ8efD3Uzf9jMDcVQV9Gp9m2bdHD68yeHmac78H8CNYGEScMRo8ytCn2tiAcBFAgWbJW7eCSCMD",
  "key26": "KmTPD38KAb8imnbKJ1QYns9AMKPuXaEXmGYaVQ16sybMdvmmgMLf4Qwmpx6LmFmGzKde74erP6bdxBxjywNKdUn",
  "key27": "2Y9hRnT48bV6ycxxUHhUE92eveCBDWCMthvn6WRi6rhuGSTz7EDnZaZd9yftHFFc3nknCL9UUJwNMetsXBtsyGeB",
  "key28": "5hMBShWAcSAvKP6asMuB3VR3eeZqw3ihJcPHoQLsewLNW9Uset4a1vnb9HSEQvkLfdL3P67CmA2WJitTpkzeBKLV",
  "key29": "5DcX6Rr9t1qWyQhj43Y8gruKW2S1wiSKKdTkixLmBDoV2MT491M1Rq3gRWZBq48bg3qBnuHNSJ5Ze4bpY37cZQSn",
  "key30": "3QjHrH2dT5eQ9F75wF5KvdNri8orRxTihp9thXE1mu8mUiKTVbCYoqf5M85H1qZ4Y1afZKtWdRNaX92CrhSjYVxG",
  "key31": "qxK21RpFrqF7ux4ceX9B3ArxUQrw9ghGyyeWsukD2Xfdx86meTBb8Tce2DFp8KuYfxMPE5cyH64Hse9py85NUeM",
  "key32": "3dZymwJDUoHWHsgQxaVmBNd5TzWmsaWBGoc13bMLyhw1GMkKbq5NzFreZsP6NaBApcthe9G5eh4DJpKkcuLwSsh6",
  "key33": "QAz6EmhTkfhw5BTxmrynCt73ii7Uf2eMchSehB1ik1GvY984aP3YppNqjxnBFadRBZPKun5sWju5mVx2BfU8tSx",
  "key34": "NwKxb6L7rdZKbLEMekLWuEYSxLYnEfR94QugQw7b4hZ8bUrBeBFSVGuH6LVXTffRYgKGfwdx8FDm9QAAzoYpznQ",
  "key35": "3TpjrEJAs2Gp72yBUnvxALFKe6w85V2qG2dcHLvt72DATXCTqVdW1FQR2qSZePHmLy2wERNNYzAD8VwQxHsvRusa",
  "key36": "3urK4n9hC21TZA36vZ2qVRFUuYS2rmjaBAuseGZvkiFNpgdqJu3bjbkskWVyiu77qNTiVMZqiR68eSQ4Vrg5yQgM",
  "key37": "DdvgcWfGZNSX8tykfaULGBqKBn9mLJrSRKBkDgqyzKmznr29zr8mHJvXyszsiHELBjZDP9QBBp1Keer261kvzZj",
  "key38": "4EV3gxAG93RcMSRNCVSAy3iy4bDjajfRkL2HKugf9wALYpv99PWfc3wc4bk9kZaZcLrRdEnzp3bVawe3chJqpHDH",
  "key39": "3KjofCCujjKqAmB7NDbvm22VqTjATqoSZMuXSEU6Kwvof8D5jGCXeFBLDEvCNMCMSzYagBiBZRiw8FvVhKRhsuLo",
  "key40": "2WTYh1MDL97BtdbPZjFCY8KdeonHuSAuVrJ6fkG1kmQKGWB252BLYJfAtrvmepYTYRV863H57dHWW4UKu5tBxvej",
  "key41": "2vUnBYxUFTqNkKFg9aPfRS3B8GWQVAoeRpoPzpGnPLPuJv4L2SzHAit4Y3xq12UpizNA1s6Q6DWnKkb6jk4JbFXh",
  "key42": "2n47FEQnWGhtAmT45cNs9z3Qx7GqMthYJhnKJJ1mgtXnEGvEz5nZybMbJ4cLp8LFc4wvUKkbiBy14pBhha4Wn1KY",
  "key43": "2cCAH1eQKmRCMLbNMbANwDeKsr7xEQxvc7bsNHrLJ5P86VrG5mKbomAMRMAD7Gi6jiLrpww16vtX42Xzxi4m6vxt",
  "key44": "4Ce68gBBVjbxZapSv4VWERLCj1DBTEQwt1oooPPvUfkXFtG5eWp1DtznEsU2pW1MJi6PXAPB9L42FGZZVb4j3oFS",
  "key45": "3jxDdwFf6bC23LVrUrPXjHyw34xWMrVR69Dqw3igos9hZR8TvkpQYwCVjQ6ufWnVLgTFgKTvonUyRxkJuGcuR3Rq",
  "key46": "3XPfF3A9sgvXJBAmUTgwJrTLNLcG53KkHysQPUjGgFHscQzNjCvL52caq6xsxi4ReBqzhFxR2fCK55kFPZccTaGe",
  "key47": "2yWN7wCx26u3QvcNHyPi7rDYhZvaqKpNEYyvJtATAKEZkeCqHGRheRsrc3TTwJr4kQrcwt6UMbuVzPXqewtAwjSc"
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
