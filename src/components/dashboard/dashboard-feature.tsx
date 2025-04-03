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
    "3RqXeZ26AwmwZGw885Aeu191bCqgnkk1MAjPGUFzF1EQrQ7tPBNELQY4ymn6qkFmy7F2mnqHmLiy5v4ji7LxzPCb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ycXychxN5kwJnb6xJwJBwpmvab2qUGa3eCbczqrDmYxaVGMFMLU79ahLAGSxW5rHpmGfd2pHiEnsxcnqvH6dYnA",
  "key1": "55HGr8RwpLURHoAGs7rmNvqdamn1YVCYh7o2HivpsY4dcSYhFcb7EepH9nAk7snSYugkvUZakZgWoXxjHPPJQ2PA",
  "key2": "3TZ9obq2prWZL98kpPB5tHgtv6dKWhG47hcofSdxW98Vb31ZLC6Cr9RfDG56hMe9kgpZMBSEV77riHWKgSBex7Sz",
  "key3": "578EXuUsccJ1uooz6W57GdMj6eG37V8bmu2vQEcdXCgn85DH6zBx6qP5mAXZeJKTJGZ4QTNTv8rqdCA7erVRT6UE",
  "key4": "4tNN8VCULKNCrTkTgqWUZnPewnaULo958NXqBGZ9vVQQBo2DqVk2EfwQiacwMMCXYZBtJ8jvTf1bwdLZC8eNKk8Z",
  "key5": "4EDKpAjhUiKwm1FvpB9ea89qVgrK1GLgJxmtV2BSQTDHo93nAkVA7X6j69Rw3vWmSMnxwgMPLKcDe3vkfJiLXTYN",
  "key6": "wfhBLvUTNJYSwLx5ZBZ6ySjv55SNqkN9hEEE1vANtcnpMqFad6oZY8T7f4wicnmx6xpeeXKvfCyPibbUV9srADf",
  "key7": "5ngMRpmQKCKTcoB76CK7obaNFj6713JxijJzJ3PM3M4PygiRU7Wd8GX36Wg5tSJYe15RtJAAtjQqg8ra97FnFiqD",
  "key8": "Df4D9cLBfvKyJ8vNYV511UxMGXo4NhCHWPdEwXMLLLX4GkjbrqUFoichgmBMZqHknvW1mHQe7YixpWbEXkemr4k",
  "key9": "2gYhiGDhsrR5zJw8hhBXHsfEKKfYhJVh2BWQhoa3XxGDfxqC3UjGs4xQQh4HAerquzxbd94Ugkc4P3Kb6eCqMSJs",
  "key10": "5mtvyFU8oGUuNDtxJtkUFooSfjgCSfs9wrqzXQg16swBeuSGnYubr8rtdHrybpksJVP2R1q8kASh381ZHn5AXMYj",
  "key11": "2N5kfC12fbBuvGuryRXj1qCpZoPYXZZpJCQYTfh2dreaoi17owrCLaeDRGf9eABzEyn5g82A4pmoycK4fusD7WcN",
  "key12": "2h8t9VCyg6FXH7GdzyZJAiaeP8UsY6mhgDURezdVTPXGfDfH9Fqr6D54wnV2wKvRnw3UizW6DWbgCPPLsPGXTV25",
  "key13": "tbax5yg51Rqp6bh2X4EA59v8ePc21eGiRQShdRiAvg2oLGjvWEmvXX8YqL1RhgbkYdRRvrdrAybKqkLBeSmKCiB",
  "key14": "2aSMwRvw8bTkhEjQ9tRXbweApq2KngPmcyTJ5QcuR8RE2FnbSt9Q5vUK8arHzFgbhHEzSEYQToDwnKFyL71QSgqu",
  "key15": "3SLKHDZM6mz1JYKGvueHwXB6FLPnpvfJbCyGTyK3u9RJJM6Xz7S5rtNnp7pouRXVuvGX2NknMuULUZ7opFmdvMgC",
  "key16": "4K8HuKTRtisM2s33aUsxE5ypBE1Mm96FzSDkfZEp3P6m2tVoQHNDTiLirq5NHe27wgPW1D7S1avdQMsGvK5SeRGQ",
  "key17": "3Tp15qSN27aiEmCUf3c4yC65eV1qXnxZtSSyNUzAcFTBP91jhriy76YHKp66hST4cP671Nh8TNgg7dBFpfbfi1N4",
  "key18": "thzdhgLP7qGVAsheyMgtzSTN5hRy2Pb6rGQD5nJx62MSg2aUXkGHBQuGnCDxS8nVFik1AaEncP8DF9Q5v721ep3",
  "key19": "a3KXkQqa6MEDqbH35R4EH2Q8ehPWtMFsSpAFhSMF5vf4DjGftpNrsfLqwnuJ15wL7VRrTSJYTfuQGpUhYmrmBHX",
  "key20": "3kEFpYFp5Webv2R5kyLeDD8PvsgUWWN1oR5ta1QctEnA1LQSQZc1oHBaW7zF5YULhuLFQDyGPK8WN9xxhhsVtuHj",
  "key21": "4Nr82NcxVYVjDe6Ja4J7ueLHEogU9YnzU4xHu7Xj9Dhrjax3RaJzoh5YWBJGh2nsPU5AwDw4irr6mNxzcJL3RWeU",
  "key22": "uKKRbBXjuGRPNY1gxRxUNLkwt6pDp3gdzb9jX9dqHctJXwnBKPDL8tjL5zug21RmT9nAeKpYNopmJm9hnH4Bsw2",
  "key23": "3kRoHpxqSwKdvmMb7962zRHtYj7q2td4yXnEHSfVQ8qHVJqWxpqi697LjMbKcaQWDW2MJTXD4znaAVDJof3UyT6q",
  "key24": "4wCQBceJqh7Ebup6mnmdQj4SAaKuoC17YgZnibUL7z2dxJeXvw2NeevZT94RCfkWsX3v5mRSLTZGsnAzmAetStEP",
  "key25": "3hYLThc6nhj8qSfDADUdxrn6jwrEpA2Sb73iavL1wVL38xzoGWyXCRBfJdVXgxTx8SX1fW4rTR9NdqhsnyCMHZsZ",
  "key26": "22MFtR9asUQ3zJCJxNh9DBsSRg2ipUZ8oQQwznMnMA6duc2j9LGUqa1qkg6PDbNDK6sQu6mypbsBRN3nnVRAQH7x",
  "key27": "5SFwyzjUyPwCbPjXx2dy3U3ExRBNHJZ2HbyyNj7rTWjEaEt9MfEf1dfMMCnJCX7PfuXot2oYXfmafnPcuGwrqbr6",
  "key28": "2fUDwwwUTd4fj7TemLJTbEDLDVVswVCxVCLBEUjYx9Fkw2tsYMQioezJUdn5r8CzAJmquuS3VAQsE36NvaKNFfvR",
  "key29": "gN6sScSErWP71hyASKNE3ioMCGGaYGrEvgHhtRAbN6AJcbyr1hbfBKkbwpcDgzqKCrHRwtQ8ifPfn1LhkJnWUJD",
  "key30": "gXWwkWg61CbTSEYNrDUigMe8CX7Aq7p9xw3pUZNKiyQ4taX8LzELGANZ4DSXmJ3AtvVCfajhpAMWNE1W4pnqzg1",
  "key31": "2CUakq4c11dr3yVzUbxYUX4KL8RWeXWGn1rUERHzQBFqC97WknFWZtGFgwRE4gAUgDRiNePP9ft2gNbtGo4LWtGo",
  "key32": "55FfwEK8Sx3dVYXVN3EvLi9MrjhNwz2T7T5yuevvHD3d2TtMcrhDm3SFw9bE4t1FgAMDda8nNdJVmt5pVWv4sTfp",
  "key33": "5tuKZY4xmBGrvhFAybKacfByA4jSgAuxERErAsvSawH2D7pVth5GXrLh49W4ZS2g7iKPwo9xSMEUmjHgW4ZfTbA2",
  "key34": "47eooQs2k2SqhFGqEkuqbARhjdJ28pRfytb4btQ5eMMx9nYLeGAuiGvc9Ysc1FoqfiKpnVHueD6X9RcMzyMScLRc",
  "key35": "21DBfGJm2xc9rgc2hGYimHsnaNpZ7sj3jVWjfzohhA5e2vv3PzUuTTRULyDWj76D2FcqWhc4NJDXNM4gwuz6iqRo",
  "key36": "4rkMPv68pnC49XtntaHiJ3M2fWCVhJcTjL95hWFZjejWSh9TzYb8vnVS6Ad8UgDo7rt2VhjUDGkqRRXqguKAY4WC",
  "key37": "2A8qZtrXZfp7NrZtHu4kCE8i3RRN7bg4A2D7wFtpXeeFuwpWLpqYuJiKubJFmZgTq7grnWTPTQyH6fUjTDLaCQjX",
  "key38": "ZJL8eYr3EhZpYKUsATz2Z7n3LWp3rdtamPdAK4zfBLceaBznzmiAMEbz3xVBcofYggij8MBb9VQAVYbXA61fGA9",
  "key39": "EXm9KTpmwJD2foAcLtwuCjXJ79JBf9gyod4wFC1EqhMPtPj1tWtoMNC17gEkEwJEsF6ARm5CJUiWurwVWnZruVR",
  "key40": "32Nf1mHeowNGGWkfz55jPABnp7i9vnfTsomaHj9BCDRvTcYL2qEaafF1imT3LGqPKjhwhfeKr58rX9rDeLBPPa1i",
  "key41": "2a2KJFCSPFLunxTWWgVau4FTLsZgn5wEcPa4iaPnwbEzhzWNk4pViWZdWJxYnGCemGjg3Ug76XpMVPRod4VcvuNv"
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
