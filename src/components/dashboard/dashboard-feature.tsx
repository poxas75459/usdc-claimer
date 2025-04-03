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
    "3zjQg1KW545EExqPffDmCGSNBH4qXStr5Zr76iWpqajNv85663bChC7xcTo96EPGmePH7CArMdvbTg8p5dfsmFWA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WtCsrQwUcrmkHvhLx5BSBNwzh3MRYiTFwFMns8X39i2XkfMm2exERiyPW758Lu9T8K41y5nye49cGX6M9LSo7dP",
  "key1": "27bSej8svgQAVXLVTjmCMofvPXd3kqvD4zUd6bQBjD1tB1UjQnRAyMQ4joSajT4fvpmr7GTt1C4F88siR3tXuw2d",
  "key2": "4WTwpPsU8PDM8WLMmoq5xzMRQEbP9dTWyEh9qFyVCScXQVE4SsaxfCFE7EKYA3wXWXdJm7KYZCAAozDdWnAMHk94",
  "key3": "2Rzz52NzwbqTfy6gdxRsRYuMhXksCt4GafMe2zJAhNdke4dNUtshyq67G3EqMeGcVDz2GzWbQBNJ8xzyDH9hsHhP",
  "key4": "3V9bDPnLmkLAtgb94VzErQx6mNqEimYtCdDJRctdnofaDrtjpZrBX112CyRobQhsEvTC8eZ6mcxNHJiquS85VQk8",
  "key5": "3erZMn4MkhEzmGX3Vs5LsLJuUe6JEg7Q7bSzYUJaSkCH96uyZwx3hJyxBfNokLXCP1YcdJScF3a74JueRKZ5j1kH",
  "key6": "25c1xPzxC5DRgwLcyGaA3Hwm2pCjnxzrzgQiWYN68dMPX2ChLw6Lhyaq3m7y737w7DF7WsVSBQuV4cDp53UbzQas",
  "key7": "4H7YaZTAghZw2ZBeKmznveshTfKa6AEMxTqhLC9cqfBVdeZPcCTpF8h8MneL8MKbwe5b79oW2n8zKPtPASAG5juh",
  "key8": "7rmLwL7wqGGjfjTARv3HHx2esrPUDUawWZytK4UrdotSFabyvDuK9zvuVAQRzrBubR55Uf6Qucg95dd6wNooK1s",
  "key9": "3kxbqrTze1FvucAboNST6t2ttwRzX4hPCuMyU4hky7Zim667qSCPMxANEBHvKLXZNs87qggrV7kcAK3WCeTFNWHH",
  "key10": "2UCeQF8Z6KN3hAPQfYkKyVWJuwnP1gtgnhUcGVfUdjkuNazCcy1C9kVJxQnRBD5kE4idgTaYhBjWZoo8D5JSTD1o",
  "key11": "5H3d9DLfuL9i85Mj2GGhTRzZcRW4t6mqrcbUwJWHsBLNqvQCD3PYJuBmBu7VVqFbXesHAiCmhnYGdAsTKWgHStiK",
  "key12": "3EVY6PF2Vu7koCn1Un3t4qX5wVGSWUnsr2MM6ErtRUcrWsQhdT68AuXL7MDVoFGxDkKwwpgmGXpKZ1XF6dzM13jM",
  "key13": "4uG6FF4MnYeRoGaF4zsxjenPk3Aqa1ZRSyAtab5MYTeiauq9NEPgvhkSFs6gLc6AWqisC7ZQ2H3XhEB3QQqm2iYJ",
  "key14": "2kfBcJHqiCd7CMfuPp1jjTfNmJoCPk28NE3tS3iy2JJ1yU77f8ttWjfiVUJKyPiTRmdkvCj1cxpNPDzQg6ytzHxA",
  "key15": "L7ekCkayfQxXhwj1UhyspVH5nJ81PDp2rdVGMAP4kfAk8EvRxWUNZoHyMuRZ4Pbvm33VZjF1Sysjo9okfFimUbw",
  "key16": "362F4emE3LpzJR73cdceEhwp6xSFQwQbqKEZGXHNeNG9L89gGf8pyPB7yt24c5Rud4MyfiTy25DdULXQtwQHyghU",
  "key17": "3ncKkn67hLtEMFyhvec6uf2Mucz2mKeCcyBDXUaVjVSRizQzgUheN52zvvh57HS9LB63JLMr7yUX1yY8jcv22EhR",
  "key18": "28Xkm5JdGXAA8hE4ZLmaB7xyYjmz7GiRYvzrreDB8dNrFCotDyH5RBcs4qWj9vmGGAEDifj1BT4HCpGQb8K5F8Qc",
  "key19": "eUKvxGQpxfaWrqiQGi2dfVM7eBpCVeF84dVQmjTpw2xVgDey1kzX22xeZz9HuLTTHwtdRPdnf2Xq9LCmoTAA75L",
  "key20": "3mupvCX4CbsRbxCZfJomvYCddQE7az1dariL8qDV1XzP7mNU4XcaoKDMAe5kp4yVyFqGqGfZBp1omeyXpc6N9bna",
  "key21": "3s9qE55saEFv6oz3rb8Uwrv9BRn4iH98dLD6t9kXUdLxmv1TGGeC24HSbq1ZQgWQuWdxCJedgRrzA99c4ACuUuFB",
  "key22": "73jMPbd7kwkAe8NiKoPBeYcL824RonMVNUykQGuRDV1N6pvwjBeE8M2zWqDgEQhAgQh5e2pXX4JUBqBMXEh3NVM",
  "key23": "rZKMqic3QXP6pTjP9nhX9q2tb3jm3b6Abb3QFEk1gy9SWWgwGfTbqzUMtpD9xgTgFn3PdogkhwSW8nEjizoCwbf",
  "key24": "2551SRv4xH673ByQDm2rD2rThVTHnkk4e1YiJUFHP6tinGWVQgAXgQiVKZ73EpxCTdvKpfo2cnzx1z3af8KQfagb",
  "key25": "2rcWarTEMhkmjqYyXBt6hqzkn8Dypq1Dtmz3oK3APUyzYEsE8YPDFjGPpikvAxu3NdAohsfyAzDEHzQ8GJeuMc2v",
  "key26": "2xJbo3RPNtfoFmfAYu6wvGNhEaS9oQZAHYVYGnnXQL76zVgBtiJTaeYeEhJty3yVPVmMvVCjpoLdtUVkhmu1GyqN",
  "key27": "2JLV4UFh99BYAqf7ov3DjqQA9TQQ5PM7qzwhJJVaTvV6dhMUQgJ7CopuAR8y5GWtst5wundh6uz1xKZLp6gRNq39",
  "key28": "2kTa1zoUACQNA2y23A3kjPtdM26YkkfRjcVGBiKafrZ3Eoox1TuhKHWfmDiwh2VJqy4ctC6FzWiAjW2PbxuqqE4u",
  "key29": "23Zq3QVL8XjWgnkZj1LJ7zzfK3RDVdU72JUJWYqhNzyfKXFG6DMfg6SnELpmLKRdppawEqPuhFxjkgtde7AM9D3M",
  "key30": "33ZjY3N2q7yRis8nQzzCuGL4ggPVbisbehi7t5VJCAjioRr5AZsecwsZW4eyc63nfEkX4AicYVtmED4xvFaTL2Aw",
  "key31": "2tmwDfAyg2KiwikfWY9HcxH3pKyAtrsrqeJWmeCASjB12BTtRmGxjaZKW4zbNTz4jCYmQcFVZEa9MmzyipCLTVoq",
  "key32": "2UXqWkW1iKUhKwRzMYUq4Zs1A5bRrtC4VT8vmji7ChGC8643pbs2gMPTHmTDJyLsavdJ4WPzA1sE5CQ7SZBfNPKy",
  "key33": "35cSsrkCcfwsGqTF3q2foVaNbMJTgWoff2XmhB8GADNkoPqiy4pPnGwxMKBoq6gQtfxjwF6K5ytGPqjXU75zGULm",
  "key34": "2q6DsJMNjVTcofgHZ69Y6SWsokNfEQvnrqCsLQNZ5vtqGSb2ZeDBco6oxbgBnqTbvLYTzB9hJ4XnjyueZPCEQaWu",
  "key35": "5Bn3iDtyBH2M9dTYgBgsAv18BViJsAxsFuZPapxchgY3AUVLhkoV4ihvLqkTmohV6K2uL9Tg4Lby16ycmBFzobrE",
  "key36": "2cesWUsaWXJbg6wg123UTYdLbxRw2DgTeZpmYMr1jvtS2ovgEwm9zFjJ8vNa4DE9gtqErq3FtWk23oco2hhZbKU",
  "key37": "2fSsoc4LjGEt2WTH2SPspT2qNv2FNEtQJeS1P9uov14mmgjDtig4rz3JWBb7feopZunoDGkCSwdjAJQtciGuhaER",
  "key38": "3UUoeqHNfK1ApuQcQtzVM8k9Jk8PDp5TYHLGcz7gmmyYrR647yKXw7PDrWhH6nnYHkw17qD5miwSsuHPF8deKEXd",
  "key39": "5Mu6FXrPeAJtgf1AQP5Q2tcDmCViGN67XcL1zyUWhMk9wfp2HxbTGFGnsys3mfB8tEk6q2zwDZh5Fwc7iHbNB6Az",
  "key40": "DQraV5b5XfZ87FZkjZ3wqcrCM57ogQHJx1dmXi47WNZPHiMzZBwbhPxnNb9qUco5kpR82WGsXL4rnL2PdHas8cC"
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
