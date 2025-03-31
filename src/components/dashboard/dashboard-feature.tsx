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
    "4kTjbMx1hRi8ZjctSTnVM5EhuDPerbqLksComzb2g1V8J74AWC3P4qwfwGkKtUm3mwUzAqAwZ1zWp1HxEPv5R95U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22rDy3XySosN728qm1QeLzgHntHkLDgB3LUrUivvM5tp8qrnuRbCPYcPM5omJ9V959GniopspN1VMQgEqVgifA8r",
  "key1": "4RP4phJhcff6u7pnC9ajwavfV56jBwGVa2i358GgV39bkU1QgVj8itqadzyemMVwKrCjojRhNspL5McVQw8iuAKt",
  "key2": "p1kd7Mnmup2vLsaDvxGtrHjbv4oKCLnRweFqSoKx68SRrBmJnS3UhYpKAgjtGXmQiC7Jg4JastSeJN2gkFTu8Kw",
  "key3": "45u6KVHbwdkCVdkF8WtpVNqv9ZKffS9vHs7qZv4oBTrUeSZUAjHctJ9Aqz3xKivavUVv237gHDsumYd4TSN8g76B",
  "key4": "7PQbjtdK6SV2EeXcjSMMSisUabQRawjAvqXTKtTZvM63Zo7QPbPfbnj2HG3CKnwZcct2yG37MEQ6bL5dDT2ij8j",
  "key5": "4XvYahDzMumNfav4iQwqdsDrgz7CSDbAfy6zafawmdLwkJtdKeFvCvsdYqUqW1XvyssCi8Tu3xSyE41f1ZErFMeA",
  "key6": "5neaz99fJg2ZaJc3gGbqLxMUXQHQCVmCBHFkZzaZVFAxVsiosa1xZ8CRfXCe7ctJ57V2iNAtenmeLK9Xn1SQkiJm",
  "key7": "5JUnjKtpoQEAz2PnLaKnHGjkBXSWHHyLZmqpH23tMXrLmKnshNLX8tStkbMQAzrC3kkT9fZ4mNkRY2KYBPZ1PcPs",
  "key8": "bNPjM6WP2L6rY9dSBfuJoN181TfhWimzJYA3wQv5iGydtiPvWXXf6637m8YNUjCFxZisEYh65WiCPw92Qs2wxtB",
  "key9": "ivLQMz9fmQUDKfR2w8uCDoms8mopFXUpyWzwZVvUDme7SNdiEoZsnnThKTTvUMAAtt1uQh7BX3f3CwSgsGteC52",
  "key10": "k9Xgi2gV3Zsc1TrP3VDNioPVyFwQohGw4VWGSftAALA5kVsSJp7xJCJ5UNPiKJKH2UxEKw949XZycmECiExQnGn",
  "key11": "41aME3nw95butFVbUrtE2qxAXjPqcd29jedD1Mg5SXQS9kvUyPkUvrZJZNwQinUoo9fB3Tco1FErMNNA2EVqZNMU",
  "key12": "3GmyiVAdWC8hoGXYGXfX8j14CzbkMJe7soxGNhLUwP72cAJ4MroHKc8QoVbvCkUgtbQaijz1WzsA4SaD2GsyRt1z",
  "key13": "3ZZ5v6tCagz2UXhrJ8Cm4AYvo8BEuR9gsvHJhNo8k1AqP2UMK82hinWwVgDDA5hZw9BhHPKftLCeWAPoFfLWYDHm",
  "key14": "5GHxmz1b8nBWDP6N8BrLh6wrjKMsiLk4phW9LHDUBHpCvfdUgjHqFtRpqjnZFFbSuu72XvbSxPjooDQyJC1g97xe",
  "key15": "3dBo2QnzPmkW6SZ7Ln2vmfnLT7oYrW2VAdKiuUSvLq1GMNsREveq96JAsrganfwxDN9LYjZpt4B3PKD8FibmS2k4",
  "key16": "67qZyJFQfGQFxtC6CrGJTrE5PteERxhqZeH2Yb4zDJosTwmskqt3gAmVNpjLMtQ6NBSWJuC6i5JXEhGCbm94DK8u",
  "key17": "5dRrPmxepN8eaS5qWSvk2nkkQcwdDHj5BYE67ZWncpKJBgKRLiJfFQ9TbqcbxaLKZ7ENZGisdnpbLMy8ng5idh7u",
  "key18": "3ye6HJXP7bcdpfCZyUB6aAiRpsAp9Fa47mMCudtz3HpU7M3YWgKutg6oPFnZww8SaHkaTMzjU83yrH7vhWoMF59c",
  "key19": "4Tt6Wwr2a1mk15FkBS8ZYhfacTp8zFedxbfdG9KiToX3YxKPVJA2oDyNsLy9c87byvF2bC6xoGu5Q1YdBaS8A2e3",
  "key20": "5Tnjs2rShvG2rbFfAno3K6etaGf4giGP1YuBXKXa5a4fHyRFt592Skp99Kt2BS6KE2nZFQUaxRZJi7jNJAkVkkNa",
  "key21": "5nzLceUtRWZ1YADd4fN86W26XYnP3VJGQTCC6jDVF9yeqS6e5VApiepGzQReuUmqdN39Ty8ub6vKRMAiBLP7kMzF",
  "key22": "2PWLVRPzzSTd8WKZLekpDZnTToTSwxtq7UeN87822SRXSovHm8Q8wdZduee8P5E2xZQDZn5VEiYVmFHcM1uGpZip",
  "key23": "363j2ncCsta7fEFzX2c2TxRWUsCeUE16xrCHb8opEfNcjyVyKXSjCmzQ3vP63fzWECZC8TnPVscw9EAoXZVrq1oR",
  "key24": "Vs1hLF7KpoCeaDcevd1D1kNVZAFWNUbHCHrgWs59xRrJsWYxWvxtdgenFQ36bQUG8dqshc9eajuBD6ci96f4ykj",
  "key25": "5ffoueht3kMffyd4vzETnmtrZHqTFpjuDsaU9pb57tusQcxWa5y915UCJYWApAaBYb5Mtm1jgRjzM9Q97RjhkZZH",
  "key26": "5dGGouGwDZBtsUhtrC7U98QPPfTqhk5nyhycRY6ZJ2NywPLAuxz8s7NEReRk96SHYgGVwR4K5FszJENpdCNAh9KM",
  "key27": "3YPzw7tL7gJ9fWxDBTLVvfJTj8C46jH5hn2aFN3w3ksenZH9KJswzPk927mEz2nR1xRCRrRp5iHzusxxnvG5QeL1",
  "key28": "3UTMUo1YG5BFrub65REnhMnU7QwHvRx6h9adSEQUE9jpZ8vu6fMd7fbrzAwDT6AjoBsMh5RurM7WqE2KD6YSCcHP",
  "key29": "wNVqW89zWBDi1LjhtNa6wVnwKiberwnH9GbXZoh6RARkmoraqE7bAmsHHYCo1vjCHKPCw54z5rVvCPCJpHRZMhQ",
  "key30": "2K6khynFT3u2Pa1BsAgFbdkNyzA2vbG5E8ixTv31bVinKyXVBgmVCrzb9Py8tcJjJj3994RmGCYjV3pD9AtR9n1r",
  "key31": "dUdBZzbhSnkbMADoxJxPjDLbnWAfkfQrLS8AgwUZaYj1qSN7wgR6VKCVE9CoSLweV8bukxHLSrp5oojj6xJJf2U",
  "key32": "4XQ9v5pW5Yq9R6DFusfEiHsE9SfxUWFoztsubvNhMtyQPikj6JKinYGWKCyc7rUbeNyNmN5PF8jYjBCee1SsQPUn",
  "key33": "4txHep1MirKv87Gy8Xd5iSnTzvBLAfbv2vmyWnobjPULUM6NpNQbvyFspddKfspomVHCPuf4Mw6H4Kj5oF1bGYoA",
  "key34": "3s4bnK4vUvFBzubzKVsYzZBkG8tANidpBQ4URiTBM8tCXsQc81FhgvGUDsFHmTmwWLjdf53WgsLkQLQ2G9C9E5RZ",
  "key35": "5WdinmS41fLK7y6Vu3GncmhzD4ebxvYKZiidnGmvToTWDxK2KMDJkYsPooobrG2We2eqWviMFcqikRYRju8iAT6N",
  "key36": "MJ7X7bTnMUgaxHeTSkkRAC6QBCgC8q7GDkB3rLQkRv7C2CYyRtMscehRx9LAtzdR6Pwcx3nuPGQhXCP8QwcBeT4",
  "key37": "4DE48aMw8RXiigTk42sHNkXCEMacSWTmUmgcsMtZG5hmhpyMhy3eBMDX9Z4fZU1XdBCwJCYyoTUDBJYZkNdxKGRk",
  "key38": "4ggLgVtcGF1xzAXnXy29CA2Fx8P4JubVbsMGV8fxRrBFCNZS9rpdCg8dghukXvPtrTKJvDPV4sMGR3TpnsUfKHfc",
  "key39": "JDvSHiBLrRQjzVjHPo2rYxY9LEBwKNVP8C8RvYnGDqdV3yErWjVMGCxWgu8J4MD1BztMsrmyZdWofRQSCswWXbc"
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
