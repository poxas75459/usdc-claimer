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
    "DZvJUr2DbqtAsmvPfyTDk3nPS5HvtaT5esRQtv12RAyarszyKLA1crPf1hADnTfuQZnndnjwiVvDPh1r4JqjvMa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jwo2zhfXJSwxUyhjRbZrrm1ye8m4hL3muDRaMpWkQPJ2B3DV2i5tipT64k68mBxPkHBUiCFFiJsF9aHSiTimMoW",
  "key1": "45RsuSCGbb9iedUWFG5jVMFAvvXQEjygiatAaxaKNFcGJj9N93Fpc6JZNNfmRc3JcdLLsTLBB2GRC8QA43zqkWUH",
  "key2": "58MSmJUVJY7oJ7mhSCxcsdNKAQsDXP1hyfurKTYJgbVE6kTFQJ1Lxd4rhqWXFvZHdKpYwRppS4tqasPiYjCoLgSJ",
  "key3": "3EDRKDQGks4DcjufkMQp9nTZHXFk8WTDyqk1U3tww8hWirQmuyj9yudiHnjCbU4rLWzHxBHpUiP3MhZmSnmuPkrQ",
  "key4": "XuNPAhXThUvL3f4CFqAn9FfiKCjNUEDwj8QFezXtEyT5nou7T6z8djg3gEBNHqswR8pNso62H3jVPyrBptwc9Rm",
  "key5": "38qCSq4yerkfKMywgPZV56bCWFAaAvotM51BtzgFb1XsBW6SGHwXjSJfku7cNH6qtCi8ECdud1BehYZbW16TLRKB",
  "key6": "2NscXj2BwZtWwgyqsvP3Z36oD8JgPu6GcCXh2isGbZFBjfgMBWMPBpCN11YcPuft7FUGpzkcTFtWfHvBsxWhaacX",
  "key7": "2PUGZRBbNYnn4WHVFCxJEskutDah1uBRa6hdVQBJgALo4jeKUVV8Bi4KhEQ5aah4j84DT2wwUUim1oLcFyM6Qqdk",
  "key8": "46TgqEFAukHXtuXBGQVYQiSoUEQ3rCxcwivqYZk2TPMS6a3hagUopRGPjj79PLcqneVHt8anckrVLcLkjebU45wc",
  "key9": "36SjmTeoTndKoPCUSEM6XsUwjrN5vM3FdGBBGZmiPXv2a6R73YFfRv9bqeD4pwsdMLdbzzSnUqYBAXe4AnqMEufH",
  "key10": "4F594QueLxAJU8rtaQGhKDgK6BFzZZPMj4JimPfNdeaHZK1VMCgYzeQh8jq2hKY4cn3FAPh7mPCoEmYrX1xJ7F9f",
  "key11": "21ZMWQzxR9epN6Z2pTbBGTusYNkrHTWsei67SsfWfa6cM4wgcV2i4qcFsbqcgGpwQVPiyoF93qAQz7fDs4iXaMzz",
  "key12": "4fqUffHNmeePV9kXFEWYWWHbFe3i5q3RUzyDPoJidqbKAj3FseBFCUTX5SLAGwUzqgA9d7pgoRkcNipZC7VUEwQJ",
  "key13": "5VLHT34pPrsKiQkLhdbMuBatxs5mo9P3rVVFTvm9EZzLd2mepBXkL7dAfQWGc9gqjLoqRbbWYJay9wukMakMETts",
  "key14": "hPDt3mH3ya1HwnpeBVkr8yHnya3MU5PyiLWfdeLacTQNQDNTaPoCWKCYQZcjjqFynRZ4MMrnpqCFqciPyKYSJJd",
  "key15": "TXzUHAp5Szc12kkUnFyEVN96SQBXn1RVJqHesAeXqK9sXNLgL6keK68sYKDEQyPn95VCybHj6XBFi1uKZyieobv",
  "key16": "33N7wmvg2UQZxC8Zxtf3wJPc1x16WBa9uDW5JbE7fxd7PbHAJD9v9SjcVjqx3oWg1YtJZNuiB7ndAiir2sYC41LJ",
  "key17": "2NVZvgPnuVqKBbd37RVjBY5oHzNPsjffgkQP9LXGiF878tYDg5RUAuFxLmnbwm1MFMHRbV68od3nXEBhEAj2RznM",
  "key18": "Pyc2cLYcbTPNSPV2N5tknHykJfYXDt5457Juq982JLbg9vjPmM6EpzynB4oJGX7Z1MmDzymunrBi3uAvruxE2TU",
  "key19": "3ZrAt1gozaBLMFcRS63o9n31UWQSP1iEuVT4H3fUfrDd92TdQham6uAPVzjb8VgS6TXeXVoHperCR7sQTzvbKUJ9",
  "key20": "2z8ugEg4CWFrqvK3D7NpKcXJtchJwH7zSFm7BH6HyirXgagqPyZAJ2xC1jsdpzgWLTEHwptwa49yiMcDozjbGVWT",
  "key21": "muoh6wPFFiNWHRDtnpG6Jp5PBkucCPiuqAMNz78Yb5RQrq28fuDuj9swQnB5hQv3vSSDiks2VVsdQjYsYgxe6Zi",
  "key22": "5ifUrZwyZUHsLsj95DEfjYf87va6LxJp6D1JasPbsVyHN1HG4hcrP92NZVPDgcp4CJ6mGaUtSZ7otS5FqXSbYgmY",
  "key23": "4dVopeh4TmsTurqDpqFeodbLt7hnSFYSEzXvrjmj4FPBcZ3uyGhpssPZoWLS5KVSagCXLZtStH2fiuTroyZqiNjX",
  "key24": "5fFntHVXnuNGDa7sgzqekDXL4ZMibqa8TqBpLv8kNVxGM2NMPGSxfvqMn4YiF5RCrfkyXixRQRAY4BT3nJZDKBgy",
  "key25": "Fr6co8YEsURj9PhWpajdQP8E1MbDCvcyyN9Hd2Hfs61EmbT4aA5sjHJNJkidtNDVP3SVyexUwji52LJVgz5AR55",
  "key26": "Hwv83dgyGygSj6MfRD5davseMQiHUXUuKo9uytZrHuVhQ38qEqZCdEA5NGis1XHCmNsMXYgGqFgEETSKbSr6irB",
  "key27": "3WgxpNj5NgP1UbUXPofrwHZzRvtwYM1UbLw3QhpTrEDZoB17b3QSHSJcgmi9srDfmRgjM7BSh5msvbmzHh26TvbJ",
  "key28": "4vny5stmudng83RcqPDJMpLvRAXUBeRQwFdjkKJpzjcNf8N8wTSTnLzGVQyxEakRC4VYtFBujyArwcjjsLyvmq2o",
  "key29": "tdzhYCwqUYiSG52cRkReV1NF6ghQxG8AtWqaWKL1DcTgRbVzJ6W4uFW4T3P2V7MrmfgqhxmaNrUm6veMni8sHZ4",
  "key30": "3jvRr4NAXcSRMNr3g7JEcgysDFaEjyQ2x5kPC6Vzut1r8932Df3eARSoa9bgUDqFuuvLgjN9JjBpaQhFXFajeejc",
  "key31": "Zf3zSWSmChXoUFK3EMYVYvReQjdz1F2A39d9AMHtRQwDtTedrN7Q5QRLyBvar5WeBcXpXBtLpghaFSYAgdUppqP",
  "key32": "5qjNC2nUg4DDytmPemYUAcM4CJNnofYv3KCwq3Dzs1M7sdmf8UsmZVdF3kFstN7oXodaGJenMmkSyPa83M24Exj8",
  "key33": "4kxLsX4wRpLhxdcAafu3eGeHwqo8rjwxHLEw7AciCMvgxz8922z1bkp1FV1iCSrTdKNwfYE68rPrdEGckQwpsd5c",
  "key34": "4MutRfhnQDxX4UD2h2wKnjpVUXbapGQow9GMwDVUXMv1kTwnZ644SaSNAFVjqwQb7qW1M9fAYRzEBNpqbrWFRHz3",
  "key35": "sQpBxxJA6BMeBa8inUeiykJ8F18ZjYoaMiVFUxpVuY1h8h61UY7WRgNvNXTnWZh6npdjDNCYdBe2tN1nJoobVRC",
  "key36": "3bmUSzARrZmcQNeCZKp4HGRsbfKVTnyW7f7iKVT1SpFaTWNXZk4mHaDU8Wkr3p24zoNGjf1tiamt2QnHzKtma9A6",
  "key37": "x8C1R2XLfEC6RTJjRo8oEA6SRvZdMn2RRY7uPHSBosb1MepF3bR4Lm5bvHb8zjZfjAGXmkB2ets2tkm5wpZUjFR",
  "key38": "3Y79ZNywt4a8VayawYUFt27DmVAEonXaF2947ieDZ4PBX6G1NZYUvihyLvNeDKZpfCRD2zmrgfJRPLZ8PRCTZ46a",
  "key39": "3yeDhQbhMVcxxPjo2QhTCB9TVHxbZH5T2t67jsbsi6xHsKgUuihum73ugohgBvJKTCgoo87Y8LApdkcAoxgetCMc",
  "key40": "56K6i7LyWsnaHQhd2dK5phhrAhcizwBbev2hr1bZMzxDrEgSBjD3LmBxcSAi9vZmTaR6K23RECzy5mhvpeGMvuLu"
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
