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
    "3NipXwpdWWfbtmQQBCwEbAB5G4DfggoUhryroiENRrG38woXc88fYk3A7XKPJsBhASg1p1D2JyJP4uRDBf6wVsRC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5umuWPoLGkS4zvcNx8WyfRQxke3wMpsaQSr8n2EBG7xbiBs1E31pFhhe9v9mAaFgwn8PaKHECSpXqiG6LdsYkDQJ",
  "key1": "4WYfeoy86YNE1qGC8TiDBR8vSRYCt4bp9TMRSNpExoQoVChd7YzzgeVsYumQWBepJyyJLMMjhWomfCDp4pdURBjQ",
  "key2": "3JMry2pok2YAjMpKkiuUeWNax7YnD5wG5czEmdw5J1KCR4eZNvVeA8Z7k2y33TeVj9Uxf9nP8mqtwQ4sp8xfzxZd",
  "key3": "5NWE2PeXHU6YAMiKsGpRRA3nxNGizh2edcKM7ng38HHFRs8r8WAJ7GBrKTiiiFJJzZD52zbtjLyynVcqEi9wY6qL",
  "key4": "iYcfpfqSzARReMLnYtWEHApoxsNH7QbemN4SqTcLUWGw7JbtgXBGX3fUcEEHejAUV9F19QMRmaTax8exPNfZJKh",
  "key5": "3fDiN93Jmav5kCGwTs59qALkp8cMotAEHCBvjVc3RFn5bnk3XEVfcdAK8ExQENVzyouR9emYNsPLzxoxP2xVUwZN",
  "key6": "wkgjiPXee4VcYzYe1iND6ovFNGA8H4v9vvj6CcH8GVZRNMDahamahpaYDnV2ZK1CHiHj42cAjuoLBMm62mAGY17",
  "key7": "4Mz81vRqyJVVKw5XbZ48z8p9P81h4mZHJ2FEkyM1B3aLmvwCezkeFvcHJQ8qYKuXCihPS5xQZEvjqNMkjniiAf8q",
  "key8": "GjEgzo3x8iFDVrEd31o8bkpXNJo7a31Wa4kksBMrMAg6SPUy6JnvrBu1ZQXx3cFS72iNvRRjuAS29Ezagb6Snyv",
  "key9": "oams3K9Rk4TYxvt8k76e68VxzLwnTcdKN46vdA3r7hYgNF3WstPQFGASBMQLLvS6tq1HPWePHryr2z1dTeezDhn",
  "key10": "3rjsEotqqcbLgoNGNAaHgUBWDi8SehrYQzd5QprCZb2VToGM4VUxA9nembG8XsADiXwJM3GVHwCfzn38mK5bm3Gh",
  "key11": "5hBcpMGxPurwZYEsEtHxiYsQkCMbiqXuDmsPN2qD4fQzBXB1r6GK67s4JNM51cHsCmRKnaQpA3tRdfVvQCYmKKkS",
  "key12": "3WiFqMDNE9omiarkkUZePgPLiDtVNYwRAChotEBWexyfTbm1qFZdSS7NdxAmy3KZhRPQTy5A4j1dFPUHeJPv59Tn",
  "key13": "3vcBgZCft1TdqtjhjSNqwdcmV7X8J9o7dvgqGZXtH1w6gb5P7f1qB3C866s5b4qbxwhFEirNzFraqDQUa9xZ4xno",
  "key14": "2kc9Dv7yc2Yf6TC3uKq2miiKqP6WXwACu6uwBBsbkUPnbNL6xUXcvfgcHX32w4KhSVPawFDSzAT6ywYwaJE5kcH3",
  "key15": "4LWfWLEKw9AMv36Austbsd8jSvb8Vpw1Rkx1qwoKoCDC7FZH3PQ3QPoeWU451AQDrL2h5fVJ4JsdL65Nzw2LYaSV",
  "key16": "3PBDQx8F42mwNTZ1bnm4etwYNWPjhRW3XJDHAwcQZeH5wFtk5ihfbo93xrwKEtKXLm8qAVcQvNHag7sfhNf8DDpV",
  "key17": "4d67f5UCeqNhNHRDPAcNxGmWfQENLKPda1nRGRBZ3aAaBraXs7e3XxgLZCvF9QE9MjAbgZW6fJcntZVx33EZit4K",
  "key18": "5mN7TwYWNSyutuQVY4RcysGo82ZhFvcVGyybzEmgRVvmRVN2TMP6DeHheSp59aB1tv1u77hMWR1kSGtJPVYxb6c4",
  "key19": "4STuWQqFmpmTf7fpoFwdB2UeWiASPcoNh7BMCHFZPcEw6TQQfrLZ3fVxzZs7UxPgp73XnDGK2n3mTLbYbScuXJxW",
  "key20": "51qHPnnQW1UHR6nfhKtwTtCKiyLxH5VoKHfFbiTwkfd6cyw6uRbBAGvFSzFMbGNrMAg6wiQbwmhzxDy8k1K2tNrq",
  "key21": "vLBvogRDUzoSL8b4WXE8xz1Nbjz7PnVuMW3t46ogvUZhfxf6Y6GN5MVBB1Y7HgeiHMVJHXjYj4FjLdu3hkQWXd3",
  "key22": "38KjcvwsAEPTxe9pkbpkBqEoMbWjHK9zmafMe7k8Fpq7cd7hJKu47b27zmoHVc9AZz8nMvW8uPy1B1eTpKNdK8aL",
  "key23": "4raM33AaP2TjGbHBBwQ7VGppzphLVfFejadCh3B1YuLgx4Tp1yqYH6FoKNCWoPhhm1ecJH6REPP6ns21rMufUHhA",
  "key24": "jtbQCggareEyN76khdyf99QaRSQXeAwSoEJqBBqC8Z8ZtE3KUxC4Tb3hVJDH1hjt69nqqoXGG5B8PurF1hU2JRz",
  "key25": "uLYDS6DtZKDFY7MLPqkRyQ3V4bH48XC9cotaVGt9QNPnd2WcMwLaK3VbgZpGmbeYogoWjkG51pKz3k3pUNHzzsq",
  "key26": "4R2Kmx8FXB5DJ8XhpZ1MpehrfThYha4rVTC6LPiGPYpCLZAttTbLDeHnsvx6Pz8Xy9V7rhTycaTp5LZDoQWq1KN9",
  "key27": "2kaTQE5DjA1SfQ2snjwzwjvC4U3ky6A78yrx4naz5tmTsP1Bkmhbygrw2XY4BvcKuNdnadxiGEzcLdkCiKSJ7RRe",
  "key28": "5q2YuQ7RcmVLq2myqHbVzbmRhG2qqMP9ZviUNjzDHXLhYAiFVGVmFT7PG4pfxfYdB4taRKPpziHF7bcb1uPL3avD"
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
