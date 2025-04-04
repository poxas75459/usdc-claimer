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
    "3awpzhmvHmXuXEKx9jX9kmYyUSYpkNSFQexLaRRqLkv6Rc56EwXn6fuM2uZTnWb4zJRBpdqfTyx5Xk4394pX4g3w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21meGb8SMQthGRtFsBAp24dNcqS73isqdeMopi2KQEpT9hoA1Ut8D44bTUomtKivwpTxYwc4eGXsmRJsqRJRzRMb",
  "key1": "2cmXJ8QLGVLRvDpnY7qe8yfr1H1BH3YT4XhZFEfccrPm4eoGrP5RKwrZKzS75DB41TBGCWRZtnEq3YFNdnhzu3cY",
  "key2": "DrEZtatuDthV1cwyHupnLRgYwWWKQtagQ6aTGpB2SCQibcYdxKJKMwrLRiLNEAqyGCv6kZPef8KASt1CF9orUaU",
  "key3": "2jLSzEEwxR9zUsDxSZLmhe3DRtSsRfhGFRH2F2KC36AM6QfRoqep1U7WEmUHTiJQiJS8NwBS8WnHj9uvriGHB2mc",
  "key4": "5ptM5ZgRsuNJJFBRhuQaYm5T9BoGELtNXUBsnYjR1vSRAr6is5aZMrSp2KvexFvzF3RyneijinEo4YmYTKTTBc6J",
  "key5": "p81RhGZXsNn4umt3Uh9LXFMj3A6v4TbjywDMby1aZC1T5w7pWaCwZXVotR3dNLwoXmipo1NcZY9RroowFMSMFzf",
  "key6": "2WH5nkFZt3aWocAi8KmuW4kb5r3tFH7yTKkgeDspWMJpJ3VdMKVF9499m2zyHFRvzQDxm8C7PpodDBW5st8oSR6x",
  "key7": "5JXqLCeKtWqmMuqaEmVgWc6FZit6hnW6mPVTkQ2mKsTKugwtPcufXaM8rBrDd66nJzdz3rvLkHE3CBPaweN488w1",
  "key8": "5TbNW3p9uDWVeHfX3q4XigZfN4R1iX645CYQKHbLhC9UaJT5rXyqKzP54BLRBa1qcgCQi5hp5P8smHxCPUsRUgi2",
  "key9": "3L1yQrBAp2A1SvLBKacVvD13cYz444Px9Ui3yhMHGGm21XLpetkaNYYZuct3SFq5iZ3XD4LDAmaJEQyjeTXnf339",
  "key10": "5hcrAqgwSPNTk5JP9VtsmpoGhdor6ix2FrLmnvK1m9Poc4FXEA8LZJk1PuhUNdHhEHVBZ6XUjkkWGSbYi2BqCRF4",
  "key11": "4TMq8tCKHWduPkzvUr7mM2yLp8nAEpKcBPeGsLSE546EeGtSNtkh56u3sZYaoWroxhzWZzoKtB29AESneLpNPPnn",
  "key12": "2jEmb5U5jP1Gcp58kX8ub2ee8p9LcHaM2TMDkp7iUAVB8AYoK8w3GCqpVbycCSSE1sWYM8AAJsfbmt7FNdxQuY5E",
  "key13": "2oD29y7ZDzsVgPNkcoNsND23gdRojRbKztR5UHBY681tEmx9qbZm5zJsMfSNKfTgsjP1MdwZqMkEBQeowWWAbeWn",
  "key14": "3nByWHpNNaMcSjpZ76Fs929wmQBeBtuirBagrz8kpxvLpyFjMLpE2EASPUcZt71Y63NuKHJRdoSKs6pAX9rVD2gL",
  "key15": "3Rwx5hUzEsb2J7JjQRvXQ1dgSxWAnKnRoErpzDA79yFWCSHJGVXbDHAEGDdMerfaPmPdzbJdF2a7itfz3anPKtZi",
  "key16": "7uZQxZ5SuvJnbCR8z7MpGuyvs9rXADiaYWqu5cLLXiQjPewsve28eAj4dNUfbsxsJ1LiHcZsMWny2Rv2EhGQLxn",
  "key17": "48PADgwFx6WUUAUBpdZ2Tf49vbheh78bSJe99ZT7HikwWksxKuD3zj3Gvbh6hw8YshYyThUoeuhgNFG4nqxyiCUb",
  "key18": "59VEAn6EhCKSXDs8YCnuKdaionNaS55CtZiJPtzXLfxJFdi8S4t1xEqNZgBVxKzz87yiy84GnBfN1BY1Fp2kmG8N",
  "key19": "4dnqviiXUP344YfDzzXenxA4U3KteZgQELjqECBx82H5jpFoDx39tfrCW6VBGfR3NopXGPTWuGvzbKqn3g6fQwgp",
  "key20": "2kRsFA4jTDCSgr8BU5rnBXGmyjphtSQPAeZ1Co8A1JxoGMCXrXWFAHxqbUjNG521jtaFaPyR45sEytKJhpLHxddK",
  "key21": "4xVMF92p9Ei63r6xgrXUSReiNPqxHZ8QmM7uG6VBE2uRu92qakBEiLmsYa623NuqPHCqMZuBZmwqRg1YeTuM5asc",
  "key22": "4evYgcnw61Kp9YiwmHb2QghgpfxK2WxwZuRqwuR23ZFiwtzgDhPQuSddGURBGJSY4SCfQjYNRAusbACx9poMwijc",
  "key23": "4SdPYCKHGnqXs5Ckor33F6x7MewuqNMki6k5V9Kh1VS4nHn72RVpkudSCutV9KZFgc2njFvCx5BaPPEwze4ovuSV",
  "key24": "5xnXjsGSMnFSgQVozXfPDtgiqQxAnazDEb8fbxBSFTPdSSbrYdtjB3FMcApVQbVFopSKrhoWR7zWJL9MwdheAez8",
  "key25": "5gocd2nQQkqQRb6bdrStFJtsye66RNXwYm2v2hkk1Yzf3LdHSzgx1xTzTS2QqdeNEkfgDL9c67UEt9xwuyrLMfAX",
  "key26": "2sMZzpgJMCq5jifSkhRtxvcp66X1MqDjGwrmrkNRrqeySxN8GfgoeJ3tj7UQiSCsYi9JCAaqZwSqSv1R8RSkjw5V",
  "key27": "44aceisYyYW4okx4moL4eYrhiDycmcbBXNeUctEe9zgHuobBwwjj96oJgu3BP6PN2Vzh5bHP9TCUoWntf6KYJxCE",
  "key28": "21ifQK97Hj189YcAnqSqMM5oJybzySYCZrGiP34LoeWbAYTGzp7qL4dKzYYjVWumXvPPdyk1eWzNSaNhFFpQncPx",
  "key29": "4NWnRj65YvH3mANpZwmzpEsTDDwnLAhdnR54bVY46j4h6hkEzJYyGNuxs8fQp5Dwi8NNV2e8NTtkSCppQ1816ji3",
  "key30": "CSzr5MJ6fJ5ogeYUdnwb2MiFzbwdpZcBKbmb9fmq8bM6hkCFf2jDuouuRq4JaCYeMmJwmtrzGgsEznUBRTv4Qws",
  "key31": "4iWpS1K2P2WJmWPprJtEVv5Jw3HP5RUxRBisdBgNuux5zUMzVdfS8AYmjCj8KcKRGdvpSiQUkY71Q8XbArb43pwf",
  "key32": "35DGp4RwZPrdfYSxJUpESMqahpiNrMbxPtP8ECaaYH6gXM63VFdTiMdLNgF5j7ExUTxs4u2dBtTkBgby9pzqbRa9"
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
