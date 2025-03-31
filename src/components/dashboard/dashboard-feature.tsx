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
    "2Fxvc62EHphdumiVZE4JXUyEvtxGos7q1bgkp1EHguMa2FpAiQckKTNb4fzmbC4GQ9nMLYNkQck5ucP7G5Fjwoqr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33rhtbi51AnBhWCnVWoLC9PWKV1x7q29Cj1bUdqttUhBfX6bxWjyr3nLmxrt1wUG3egc2orETS3B8y4A4GGYiBQz",
  "key1": "5KnAxA9CGBpEXtqkSShXGcTzcatH5LFRKYT7RgKFBP1GAqp9ZEWwZFfDBU8ANaJbphZ3UXF66MrWJpYTBwPfmYY1",
  "key2": "39G76J5UfhU1qeHE3AQXq2vTcmEuTxJfy5kMA8CCSEdZd1e4252FchUZF6APmzthvUAjSjpMbp62tusrr4FUedUu",
  "key3": "5DDZLsZjLZbjkJ5zJHMETyw3eMEoxESzAwSbhb1TwHHxkrMEEtscNdVUPqoD42gyhjPPAiw34gabGjnYdLuJBDf2",
  "key4": "mDxgb9QHBSKdcb9geLMCggfeZjvQ8RA6FnQ6BRyLVoVNNna4bQ59LapPJfeAyRMdVCetGTWvDF86TPgrLjEVNVa",
  "key5": "AeRLrtZ7xzvF3ZG66zedS1XB1Jrybfwv9LqBGCsoaM4FeDDJ5GkWptqtYbgVPdDK1FYk2LZoe5cMq9yyneLZhzB",
  "key6": "yczAF75NzrhkoeHFmHFbyVokDUupuFaw7xxcWLQfrWkRHaK22YTSn8dmSFbNtyQeyLPZGwdYBWTDdmiocV5HEvy",
  "key7": "xm7YKtE46Hb1T9DLNB1ZBuQZ2dUhm4v2shV46XT39BQDkTuScGZMvvvdcHYv29b9S1SMXJ4kRF1DFzYGKMJyxGC",
  "key8": "4S6LHHvKESBDmCQwRjRctyjbmMeZAXbriuo57guyV2wqDR4PHrhK4ycQt572yEKKgpCBGMJhtTn8m3ppWZapNxb3",
  "key9": "4K5vPQ2TFpAZyd5M2AcV5RqzApQDXj9Ndb8gTtDbdSQXJZM5Ap1NKBcoTRQZxJgRcBMXLdcp6JvKv9HjmWxV4Q7D",
  "key10": "3WV1hg1nAnwwuM5t6tgWDvUinD38u9WPA4PStR5BRgDPzk5o6GLVAWZmYrvMxn6TipLD53AxdoLLhnFMSUp3xRAb",
  "key11": "3h8fLADTMPyGtPUxpm3hu5KBxUwdwL8FAcJo8pA7dVei8KFV7gwpeU8Zrv1DJ48syZZST2nPMsM83qhkW5qLrc4o",
  "key12": "59faHY65yVC2gybgSeR8bUHYcZyhbheT6W7cwCsahhSUPZiLBBPNkNr7usGvpnbpY19kSjQjJ9dLzjqzVuJmrU9e",
  "key13": "3n39UGYrrhzB9uvNMCyGK6nnDHGeG6C1i8aV1Ge3mz7eZ3hSDPs7RSYZ1XUxdN26VyAoCXUoe9M1ETJnV3jHuYyp",
  "key14": "5J2UtXQsrYQ15mFimKbP6JdGXqcSQ14HNQykFhRz1We9eKv13VozxrVcw7SwyuHz2oztBymVdzui6oQgWwc7Fr8o",
  "key15": "47T5LaGzefsBWbtfdMttZhK1gzDjtwvT2VTfF3hrY4a9rijeomjcFBCJm9154S1A6vkW6AwRjBNvmufvX5BMFs85",
  "key16": "5j4zPAQwtrHyScvCBL2xixct1rHDH1MxjfVRbdNU9QK7vcAntFuJrh1hhP7LGz5JKb77jNUT34NWSnLx4jXpv3Wd",
  "key17": "Bvs7my64TxDrQqV9Ru3GZ11BoY3gVnCKL338e72PAjfJc8RKSSFNWzNs4LGHWK2z8TmpjqKT6NW3QHZBfMVshC3",
  "key18": "1AoAAt6yhJhu1ek3q3zSMu7YV5bUDMyjm6neyGyFP6Ca88buA6NAyEMGYmjqNdjP7AzmwtScbh8qVxgpjTQMeSp",
  "key19": "3SKte8HyVfsTDKbfmv86mpbqJKZ3fokNvT4RYWNAkzWVpRSXrjv8n16ea1PKpxtNCuCVmczE8JaZAZqz3GU9EVLB",
  "key20": "2Yhatp6y5KSKguTrMhe112Scua79PaE1d35fW43NGm1REDTebcWR2U3HsrWoKoX5kqe2oD17bGbKBzTKZpYcqGwM",
  "key21": "UpyUmVh6S9BSqqqqwKFuwTbwC4XxT4umjkz9EneBDsjydcGKc3EgYis2JFBTWQJ326UAMLASBKrNDsEoSN5ytcV",
  "key22": "5ob1bPGe6t17pLeCPFMBZJK8s2p1AShRgTmsApMA1D5rpopD68aSWC1pHVeu6at8dTS7RMJCJ4mipEyxjecDNQjL",
  "key23": "5UQNWYx9YygwSJk8stHTo1PQP2kmJdNNHAxJb8JSwmzD1kyajfnP5m5UESHyrSDqWv3qLVUjWAeWkgfHnyBs43dU",
  "key24": "Vf1KuYiDxqpZ9C5A46vsEMiU9P4WJT3nSE7ZbFvxuHjiHSa6GMz64JToW7FBd1pEfGiL3ao4v7z3U1DrvvQuHUg",
  "key25": "3Z5RLvTUdFZUSXjXi2CnreA1TgfR2HQJ3fcKpC3eHaT3Wk1w7PswcwXAUf7tpQvPKJy4oCP4jZLf2KnTAnSRiD31",
  "key26": "3ADRBm6HoNDtJReDEVWZMNaHFzTDTPE8jJpThPkMkEPwVrYRMjSr95vtsb66op3h4MRuLYTk92PQrqKssFXsueNQ",
  "key27": "46Fu4o9ef9vk8cdRptbUQ4GDN79L4EYXpMRSvU9eyp8PQFcWVoN3oZ6pG2UMG1SKikH5gq33ne9RiBpZQ3DHniTu",
  "key28": "58DdSjY6JqB7qTUQWkkDCx1FThUC9j8dMjEBMywrfzpR3RYJExkjAS2U7ShFMmqvtiFyxrWRB6Yx6FxX4pxWU1da",
  "key29": "2vytZBWJPKYCE6pKdjXedaEzgvSQHkLGKvvxZTKc3ZjDFu6Z6MGuzXubuxRw7TdAfafuKRHoXW1sVwCNSBjua482",
  "key30": "4LZb93ZJVCw8vwJTkt9mM6VVRrhiVSDg7eyuxjNZujPyReC8qogofEDVsdbCBuqTjGF4NtFRM9NqjTUCi4HxRqxa"
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
