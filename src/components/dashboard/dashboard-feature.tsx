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
    "5PzJ3E8PuXcKejwAGGUvZoK7B78SzLUnLJyo1vhrWzRnS8XgjN6RYSyuDPPcxdqnvKwEy2aRWKuwa2FUpCzQHyy9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4t5T8fdU5pgWuUFfAP8BMiQEfexxSLnkxTTV1S6NbcsSUEowYR25HCjzp4EXsuZyVhe4LsWFwd12Yn5vM1kVvZoL",
  "key1": "3ciRBvM6ehN3RDB2iayM435FdrYkn8GMGvJyEVmSzYbR8Ze2XCT6TQwyUSgiFPtiyGreZARr4yq6fNTaTKuEiYw4",
  "key2": "64VNo2FJWorBRYpfZrsMuLq9EUgJXSrb9v3XieXtUBqNkFugv5J7yEJirGt1smq78QfuixhHRKkScrQC6e4ZQW3a",
  "key3": "2twY34UfFtnuHwMwXsLxRDvDV5Vp2qLYQGTtx5yoV9w1VS7h2Y3TzKwWEwpbH9rd1CXazStgN1t7rtc2z4i7khMC",
  "key4": "41Tfuj1hf7tCu2L3ZHniuBEpSd3MJjiThG8ZXa3tAv87nb5GHQWntMok5GUUpR67Ux1mgH1LCnQsBT7WA6mLAX5w",
  "key5": "4JLPuUV1SSYCvH3TztkYaGSQHUyrmLApJejfm32ATZVMHcRGzCuzWB79NhABKgPfpzfJgUzP9JkrRrwQMDxzEYka",
  "key6": "iJ4JcfMRGq7M9YrAVrocUx5ggaw3BYgMswt9LBa8qSwvmPQRTDSMuD11YzBfc6DD1BhTw7P2DbkwLkQQWUwxD39",
  "key7": "53gRYR7VbKD3AAfxHUR1FHeZ3ZsyfXxLigi2Bu1HrGGahkrk4QGSeVNThvXWXsDF4RQi43spoLLAjPT4awTnjvFg",
  "key8": "3uTnC4DzdNnPT6YJ8P1N2x1Ctf6zkCHdjpwSvutVH9TNhAPgFYBnou1fpGXkXjtudsTdkWqfrDxYN8qUZBceyvAD",
  "key9": "5codPP1qijzH6eWqE5RMum7Y6JciPUHhZL2eXyPU3p5rH6b3UHUv6FWdL9Vdo5CFNjEGb6qSACnah5rbET4BvYvV",
  "key10": "e7zigv9bYJ69tCxdj6tGyTLpkkeqvMaEsbJ3iioMsdh5A2aBXMX8JNofiLw5oKgbV38z9Zkd45GX7WJSadis2a8",
  "key11": "47kTtxnEM7b6zoz5kuUue6EJeAWcNFtciwLmYZ4PAaPkvng2VtTBYzadocMaKvV7ReHprTsVGf6zQLTwUi2iDkTQ",
  "key12": "5QUAnM81uc9rt71shFARcmGvzP1g1Hkxi5LC3DL5ub8UrCVZegCd9fGijeqGbuczW9txZBoarPC7kZBoHR9Aa7Y3",
  "key13": "3762kpr6KnccTtgpdAXddvJN2ZSYkBwkzo4p17pp1NEqkYCeVyVsYk2VD6USmQ7PP8RQGm8F4fm5mUS8yGrh6LCb",
  "key14": "4bYeh1jMTAmBUvw3z4vuCJrnUVEfD5CrutuG36cg622dRSGGF2cnBTGVjjgenf1ZQzPWBb8QuP9z3xRKpyfBQQHy",
  "key15": "tU48sK293sDkqf8K5vYufDTGXhZBUghw5SE2EcMSmKHT4Lq1e2wS122myoBwg9WdzHYSsEZzn7aQAvGwJ2mXmat",
  "key16": "3rhj9d2arWkYtQ8dPksxRLmHthbh3maEwk5UKmeDAouygj3EQ7cQg23VWqxR5GgEpD94ot89WmV1C4kfY274dyt",
  "key17": "45Yiqwy1SSuKf1vK7DH7GumNgH1CbcVhMACXwxaRiC8JRQ1du9qSre4WxG1XPcaPVHG5SbYqyA4zc27wwtda6vX",
  "key18": "2Hq5YwpKMgFMDRv4bDgVhuPNwo55AYfcniT34Ce6nU4xHrHuHbG3bMPpx59UKGrGR3R5sYDH4Xz6xXCPBSaWcQyp",
  "key19": "2hu8XWUBWvcvX2KbUBSJMy4jHU5jMrmebZPSgozMrWVDC4ffrNQjrL3JwCzBz5UnYhHQfe2ofdBzJq2qYGD6WxH9",
  "key20": "4hLtFu3KXW1mdkV5epAq7QpbQB9SC9KTDCNZi3oBL4H2ZYWEkQCLTuBCZ8uigFumGVoJDfYMvKaY1TqQYtergC7X",
  "key21": "5RXvriDxAS7whqn4to5FANZn59Tr8UuxKk7HreypEkkf8cLSEizWUbg6w2cZwTobx27PBeqNDQJHQi3hDWXA9HBg",
  "key22": "4CNpGRTbWDMwgE1zeMT7DfgSWMXQbvukBEM9Jj5w6hdHyRzyoAimBPrE3WmXhENKKyoBmWJgi5hdAQumjo6dZfQX",
  "key23": "69WdeCR2KX6sxaBZ8Cpzd3VVs9g4bjbHoAjJXTc5VHQfFQy8meZAjwUx3oWfwqf77PdvqFfCfwW6cNJxsowBPvT",
  "key24": "YgXpZD5dZ2EpaqqNaFZgPZ4socqkY2zctj9xTXPuDSK3pyHiWPDSzFdLk7Uwk2mF2tgnWtdvQrQW1o5g5eMTdpf",
  "key25": "5rF1vmc9vHjyyMWaFss8WneGPaAGN39pe8bFLRcwNBTUL1TNNvqKnH9cFHwVNzEBJTLGzzPDjV4NwYqYBP5gS5CP",
  "key26": "4CPcHwj4wAbrcQjNYJm54jQkcJBkwKTe371EJuUC2dGQN6y8hXd67QRLAFidBgh5ycLFjHCZghNgHnW73z9i7zvj",
  "key27": "4wjErAiQoRHNinw4uGTqfbh4EH9CAGYwgy2YU23sJ4zgb229BMygXiea6nySSdwuKNxPYJeC5nnXGKtBb2jZ7K6F",
  "key28": "FZhCXxNRWBmikgZNZGRssuRBVVbwcMRgYMVvVGSgjJAQ96an8PVsDfp7iBrJW1hqgciAAjeFGXsE7mSXnRJHTJD",
  "key29": "5zmZJQNeaLaBzfTDj3tCNanMpomVzHcx97LiXjVumY3WChXw6uVQLvVBwiVqDAHMQnhsTSfoJ5XLPSv2acgyYfh9",
  "key30": "5bWzbNZSAwEigLNzJ8ZMAciMAZCbmY1vvghqj9nAgE7Zc6NvCJP9zbdgkFEEzJ8HqqvPXka3FEmFkccs3nDbEzmz",
  "key31": "2gWpHJcA1sc7Kxf8TT8uaA8tmX5jTTpSP43nzzRyHeZ7wtj4qJJdHduK6Qh73z6MevdWqXsjZfevrCAxKLFcuacz",
  "key32": "fNNtzLXPQE86FKRv8KueYqpTPy3ghtgJ3oHNdNWga7TfaNBc7MQAQ1kZtyR3DH4EE2PjfNM8dRjeTFT7iLRkXkd",
  "key33": "3XoY6CYBaYWQpsQWip1es79bbq5LBsRrqTfufSK6KboMAeVqQgv4zYSG547jdi5ha4C3sY3kJXC7uwjLzxoavsZL",
  "key34": "Sqq6joSJDCGhcgMhb6brN98VwBKTDSMqJEizTACccF5dsXmmWs4LnSXUr3cEqE2DhyJNQNvW8iXv5R1X5EvGruW",
  "key35": "nbn3aH8EyVYCtHCcprgZp9fcxRuXz4ZbPGPCCrWJyWezJyqz5nhUpJpxNVJ9m9yKJfwh3j2tS8FNMRMxR2UFo2M",
  "key36": "3jx1CDQskesgoPEcEmuGzQYAwwDPrE6eRLQ2nbB26TtN8dQ59y1xSao3VZcuPx1wmr8ko9jyqCpv9G25we397oUP",
  "key37": "pwcUzjcPGUWQNam8q65Sg1YTKydN4FRSuMt37A2DFyxwbntQFuVAnrC1ZrGDRXLi2Uuq7KAx47kDkkLyEUoNQTu",
  "key38": "2zsRQMkRMdja71epsSNYkzgzUfGYhYRKCUdde2DDewYSWfWG6FuHhSNaGGgPBdDnCgPqW82PcvSLYZcvew8pS1jx",
  "key39": "2Uyy1XAWSyEAvLiWgrHSmhVH6XNA3Lxjrb2zjbuQN1KRuSRtrYhXH5nGFgoP8hdnYHYai5WXYF5WcwkLmaH8chzy",
  "key40": "tbABU1RqzjYi1mruJZGBUK86yu9RJWqDo5zT7yLGXsb7wA2eC49CQNRjgcSPxt7Lw1o1zMsWkxntSSZ3dXjr1Wo"
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
