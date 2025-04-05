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
    "vLaPLzTDYYfoQuF9AphSpN8Rduivs6wZY8BtPyk52zQKMUFBNByTiU8dEL3v1XfTiL5Ckoqet6W1XJGv9wVXV66"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44bgnFiFJhziWdrHKLESP4mdiyt3DPf4CQtqhvbVdyAwnLGw7pp3hHPYxc1zcomYFjESUd2bHsAbfQ8EVprHjiCB",
  "key1": "mxHuDuK65fkQPVCtoTSkTES6mtykJCdaaBV6tbaW7YGBDGndzp4SEAxJ7zW8ve11X7AR9Hp6nCQ7nwEaFLqEcfJ",
  "key2": "3VckkNVpXsQfRz9eSqXc1dEoPRTaQfs158gb88bzFzihvPJMXxtqPnqa1Lhw2Y2XPxnWpJwfknGWfTC9HNP6Mnjr",
  "key3": "5zSC4s9sb5G923icrZwgRxrjqfELDksoGkVvwXFs2nWW32JS7p8qmrhH4qLCjxKcHosZuPgJCcXSigRkx287Kj22",
  "key4": "4KFFctzKvFEQcVVPz8nGYK4Xt9XiS24EGNE1EZQcov9t7MYv7VmXWmmHUY9xbCCYm77EgQtFcWDR25YFJ76dvntm",
  "key5": "2MVSLqRfc4WFtcSNtns46UhtzyV3FVezvTaaWsFJ4xzkuZof9phNYZeH7u6gPeVqcZgMCViRiARSnPFdryTL5tkM",
  "key6": "3d1DYyvPfJFygWLQE8iAWeSUfrdu2ysKs9RNQa4SSPj6oFkH9p4bX33W2QUbY5VnbPJw71xWbQCkZUxyCK9uPBC2",
  "key7": "iE15eEee1y7W1RQgQUyrifP7F9XQt6VoRv8VsZYux2D889JZd9pih2H29jWgxubUg8fystwrVPxZHefPxFJaTA2",
  "key8": "2eRa13oc5aoc2wYWdBPE3VwWVa8Dd37aq8JUrxTuzTHumiQxfaF9do73rdCqADm191tfMsYF4UoonhKbfU7fyM9L",
  "key9": "35dxRDdZJAWMWSckXs9fVaV42sRRcNpuLwacSbmPLHjWHQvnbk4oUupDw64f93f92XqiHmJyyie3Lv3NEZkWzw8o",
  "key10": "5k5SE3oTcc1HV5PbpwmuMFSHuUf4r8RyWEoPwDdAKnJknUvCb1CUxyUUVogyS2xUAKXZSWE8Tt8sJgX1mV97Jju6",
  "key11": "2SVAqkMkTNqq4thYyAVPurf5qiZmkr4jCLfcjoE3sb4NmthnPqMhDzMzcz5tz7hSSF7kqKcirmvFqhAf6K3xdjU4",
  "key12": "2RvnZfKhgLZj2WYHsKr29iY3hj4DWCYg2q2wkhiq7mQiDZxUA1FRbVGJ91TsgNsZBjcBxmwwaURVJo4bcQk3k7Z3",
  "key13": "2XfyhhyTSTYNyAp8yBP1jbS8gDodAQyhtEzun4FSjPMc2rT136b6NCSrHP97nHUeqSWdXaeetV8kY3P48vxHHrLR",
  "key14": "Uw6XLkvNLzaQaTQac9esEw9qHmUKLqxZgmQHd1LhsZZwuDUDT5CbZ7TWX64EnZHTgfVs79DwSDB9Ky7vW3b9LVe",
  "key15": "4Yd5JQiud6FeEAvuCbxE6hNXJzWnsdqurxyrrgm3YSmU8sL6HUbB6gCUsBEX1s8UdeNvqF4HY6sHCa4Kid7sHVX9",
  "key16": "3mHxBZHnrNSthhRmgW3ET6kv6jUCdPh5bveDMRYd3Z1z3db3iCcFVYREtor5kMW2Qr1vz2zkDv7tSQebfsxsKgr1",
  "key17": "2LLerYAtRiHUUSNet6VJHd7ceCYBUWyHZ8kQgdzUK1bG4J8nrbi438TDunz1FuFM4QrhMqT3shBJufZdN75HY25v",
  "key18": "VfbAJPVqynDSKXuwPW8XKCJKwPUdWz9yuacNvFVjNwgww4MpA4LiNaVwNvBH28ymV9DBHAaMRehTS3st8J41uNd",
  "key19": "4DfYPhVrCpwss21HQWR1mJBp73ymAWZ3nMKPXZnzuihwv9jv81aJ5SF1Lu4LXB35yTTKgeQxL4RpTUb8JuPLS7qh",
  "key20": "64rSAePiL5TJ5oQdxyK7X9TkVwXuq6yWNtiF6CokBkCU9fczkzHiB5UWAKjPrQRGVnNg5xYqvy6BMqJuykB1x7Y9",
  "key21": "3GeFUxarYajJE397Vm2dk8UzEaPs7sGVBE1vinojSgnJJVY7MNWheFE5EHjyGYMv9mkZzxFY7GWJETuE58XJZxQG",
  "key22": "3uQNobxybXsRJZdoaCV4LesoR7LNPpc7suJvucBjSqRMsVGRBMHDFqPan9rLSwXxzmp3KPKu5NFezNbVrFajjyJg",
  "key23": "5cG3heRM1sQP3RTcrZsovkpVpEUE1tgmRfQZ7fwFjzEPMGPFvuoz2cZqaBdy6httG5Zn7Au5roEf9rM3XBUbnrud",
  "key24": "TzVakAhcshpS2pZBWkJqhdhk8vxY4SDi9BWz5c6FkTgGtwm9Rs9kPrUswwUcrWZW1X1hKGa12EayoHS9TwagPWY",
  "key25": "3pttPD4yR5exwBSrQxx21u9uTvaH8PStLHxFqbAmV67hdZGA2ycgLMLeXDz444pvXkTKuh1aC5Ru5ebpwaYQQgGR",
  "key26": "kfS4PCiZSykfipQA9XgqmBETKc7nHtFBEAZqvkGfcN4CvU8PU8HAQ763L29PNvt2bnmXtUjWBbEiFLxqZLqVRn3",
  "key27": "4VkkkyDhp8xFvsVMf3KuPxSKx8uK5X6EbjutXN8MoCpqHPBYPzdWHMSgu8UzbAFDtBkLksqU1Shw7WgW4SDfbqTi",
  "key28": "29r83Fc3iWWivtYrmjpJpbzWwQqf9s4NLNCBEb2NnNhFMWhf1iArDVWfQraYUX42fmFnTS6mGsT4Rgd6HtbDQaw1",
  "key29": "2r1o5DdGyPdmqj3ngMQSmbDPvvTzSgvkiEGaQqaf6DS5X2A5DVTggSmv9woFrT9gnSf7ZZWckm5cmsAzmmn5vDaa",
  "key30": "5CcHtjyRRui5nKNLy5BqqDvKExtt6UKYqJW3C5gyp4j4A4Gk7X5dmfY8GeY3YV1SegZUybJHW8zehSq51W17xcWX",
  "key31": "UTLVWLHhfJCZ9bYrBvwYPaXrnJ7tC8v5NhcydcafM5QLj78Wy5vsepFrBMVy54MKvUooTeWPdZXuBRALDyaebci",
  "key32": "4rdcXwcNQ5uBAvh9FqvtkD44hwyad8PthK8HkYY89UoGPRvpVsuRhFivixYi7Vq8AmqBXsfvKaszpHLJ5TcMYQHF",
  "key33": "2KV4tLzr5tPYeckvjjmfvn9TvjQmTijz8v9oznstzZQcbP4skjduGZoTmAryyTmvHceZEVDqGS8SWvm5ApbzstyF"
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
