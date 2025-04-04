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
    "2FnBTc6V9oHidiFv2HXGdQRA6gVPzCiYqoF7sWTwxBtaVpiUzxTa3BshB4oRzsSkzC2gYa2NCUQPJ5FbMNTriLB2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bQ57i1SDFJjmYGT5aZZo2Jf3HArJpE9wmxTBsv7ZRBbRDtLzboQv6eABuy7K1zupHMGvzwsopk6boCiwMrBrYLr",
  "key1": "2bG88LfcRMHogdT5xSZDiCyPCPxaxbmFxGsK7hJf1HZniwwqQTPwV7WHGAa4kt2JN9NS8pt7wXRpLmHTHMhmXftN",
  "key2": "3ucQibK64zU8vt7MLeobG1FzaaTvrmFpJxKvtHZG4rP6TQcqWCfS1tiSXNN7xUfsweWMA3tHxTzYVZPH6b62v6oL",
  "key3": "RshugcgFzT31DTpgs67xd8uCMZMzPEEgPHoHm4ZhEGUnZcj7pdhgSEMPD7AMDPGBagHDaHngmLEDPuG99XxWSyr",
  "key4": "ptnTfYiKZnVjizdMhDQWNdHLpCo66pfykrbQw8N6M9cvJjgqvD1J5mg5hAVPiphiZ9KuFRBfAK5Ak3kSaZUfJ33",
  "key5": "3zzpPGndMCcTnBgL9a8QErHmp35mKyU5sSc6TnM3a7ZHpRDE2zTB3TCzfvxKF4FUedQ85r2ro5FWN4a9gjfVdRcn",
  "key6": "3ru6TNK3k4tqjxo9bLW6Qhsr8WneMdxjRtZ2FezGJm5vwJTJdHg18c5n1fo3JzSvGVRTxr5tVbExdNYQzTYJuEB8",
  "key7": "3o5BmjxL1e5Q5vvWmyUguYiUC47ag7j5d9D4nUsXY4xGDvgjRuUjtp5ZhU3UZo1em1dCrxAk9imAXh9FRk16u5gA",
  "key8": "5CjKdgGhozhdiWuksP4hUzApNwZgvdJgSfU4QLNbygzFa1CDtnbbAs81ebDB5RensKVBd9yd5PVhg7WNv9QjMF9A",
  "key9": "3LQbFBKJD8i9haRd4zDKDbJ4jRKWFQjMuCHAwHnhQUgcdmLAKrmRx83fXMpyHGBtTfS9Rj6ic4CUyVjKzFhmF1Bu",
  "key10": "2Ut5Bv6y6MNXLqsz2dY2QdkgQiZ6JmVhefj1a1cpXDNc9VnFz436EKcNPagDKsAF3zv5a797HE41eSwoSWz7myQ1",
  "key11": "3nXdTaveympHmpH94ZtArRhuUnue18X8SJTJ6phUZeFpAcME6zhFHArChEapnXUdZWycfhGLbHqCLF7UbJUc4TrT",
  "key12": "3QiprzJyXa8iwFZxKShTFDuyr3K23rEawUGBDttpyHK8ZK3N5kwhzPDcNqBaFvBXtudagvtXNYiFBRfpj8SrSG5L",
  "key13": "61K9Sci22ygD8NRFRQ7qbYq7JRxsyTUPT4372GxZB7LLXPF6WAYvqhYAarZWywPfMwDxjH5GTbjtP5eSjtEpzGhX",
  "key14": "3z51AERt9pBKacGCZg33KdDkTr3J4mAzM4VkG7Mj6GcsW23M9ycnLevefVpnUWQoyG5H6k3cpKZHVRKq86dFfEsY",
  "key15": "3iMmu2Dnfy3RQvaXVgjMXvXAKQRpZvUXipnRJApMY6cFeL3M5XodMipVMVBKJPdzTeLgWmGYSXTfw57xBXhcBtiZ",
  "key16": "gDT8jC8PSe8qgdo3qEJhirbz8SJazNcja86SiKUD4gK22reS6kHtkjWyaZ2u9ZB7wb9kUkceoJfATutX54BPpet",
  "key17": "TszRpo4onjcjodABAPcjF8Yo7rSeRBhGhqQ8TjTyXncTZpxyejwV27anT4eLvNQY1uA1tK3p9wxEV6RZSrZPA7L",
  "key18": "5AcF77AeQpZtdxJ6tBDP1yahGrsnCoF6nK7rKS957akD5iQKWqDV9jHLCe6M1wKHVinwLQR8yrNic2JuVd7UacKu",
  "key19": "2ducUWUy3F9Df7zL9Z3m6AWdUNdH8hkGXmBA6pyExyyNi7VjMQNiNxxsi8DNiPotpLv51Xww3d9cLBQtbgzPSxnB",
  "key20": "4puS2pQ8AsQr3UqBzbzNog5p1MxvjgpqhC8aTytMewHww8RQ1bsWr8hPpb5auwVnYZHimBSBqPu1MZ1VCTUJkcYd",
  "key21": "4tAYMvvqfQr2aFKhLwaPQQ2Pkw6d2ahA85gwnUcnFQmQheQdahmzSf8vu76GCnzTEVQWFdcdSGCP9deVD12W4D22",
  "key22": "4VkcPJWBQ5m9gBP346ntLpmBkWsddiXaVnMKcigYT7bYvtpqA1gYnrcHHGRkcdEYSEjDkThf78inD3noKyuf8sYH",
  "key23": "2xWEDjU6bHeB2EZ7whLyEWPa44Kt7kyzResS2FiiyD1Sco6fBBJcyKsKq4G6rBLP9DgUSoGAxjRGXAUQXXzndH9j",
  "key24": "45Q853WQ4rGBVj2WA3erQW5NR9cMh8NzPFPCAodHFg4CEyKec9orSxhDYSY353h2MDm3b2pU4UtUTVdNbG7NJghw",
  "key25": "5CEW6axxsH7ERHKkmQBBvST9sJKBohdurepGq2NeZxJksoZxvA3H4JHpHqyBNQquG6V1Kpk2TyAhss2TD1jSW93U",
  "key26": "3MnhBva4fBpZZEQPSfNQAWGv23fJSdcik54QKASygu8npkmxBNEcnLesexT6hcNCjvgHw3zD9csDbgfgs7iinbF6",
  "key27": "3j433M5CuCxs4Z9SJe2gtUB9WyrPy26mkmskVSSoAuWhUz7krYdJEQDCTERWnpgJHf5K9sjFBSaJcKEk6gbY5anc",
  "key28": "4KDtWSWR4cFtWZJ8W3MpJBL3LamN9cwpmstF4GTaFmfVgj4mW5PZBL1u1ue1Tw6BCq5ULFPSF1RG9UwaqvoSKqL9",
  "key29": "GSPZr3cr6ZVRETsGAEef3eKbXwtW4rdB3CatcLLKTc5VKM8sCsAsSj1pSHjym6To3mhsS9sL6UdyJCi48gNA7vF",
  "key30": "4ggBYGPPgjmXoLYdN7NnSF9MUFjKsuyJ7ZqfWRkKD26WKdPgWbJYnY1cmu4gxibRHfySSs7aUFbeE6iUeBvPPpGD",
  "key31": "4S6wGfywSM49aaU6L3rvRncgqrKhJCWaSTCQHnCkij9b6JBCp1x4S1MB4VpRzXiFaisqke3odSCT9q4DeaPpjbE1",
  "key32": "uCtm2qMDS1a6uDamQewvb51WBbxtcRptXw6e3FonQ9mfr9NVWn2P5KHsvwzYTjoX8NmMh5np2X3yCa6AW5vCMKb",
  "key33": "5kGudPb6of89L4Z5xo6jKvLHFxZry4Bmrr8xB7fdHZo2Hf2ZFG6sTadE6MeqtgTGQKpGfez3dap65GBrCjToZWsL",
  "key34": "S578TSqrxaHySHRysg3MtcS5tbJawNxG2ZhoLCJnNnzba9xM2PcAjbDWZc9k3dcXqgULbQeHwSTbJG8gEBSdFNi",
  "key35": "5KWjT3DLxfKmHPS5YU7K9LiQGzWiGRsS5RyGMMCytTbYEjjPEmtJkibrRXtvsXugXvEwQYZqDsjuHs8W93pWqecX",
  "key36": "yB9nyqZisa9Cz2eQTF2QwPw5ydBu6dyxnjZ1ZJQYZGNZ1bf6UDAQcsaJcubjxqqftaHgy1nRQcE6fK3DY4qq7yU"
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
