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
    "WsU6SRBva35z2VUvHWqqwVsuGuXGfx3pfkJPWt1Ku41SjxkFZ2z3iDnXLz1wjTwicnhivcDruBtZJt3n2X6URiv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WYYZdF283QDiCty9SoiiWJ5dvbZevf5ThKknQB5pwVQ16H9UUfZWjqBWLyYa778GTwUJ3iwaieihmGbuuGnCh1e",
  "key1": "iYk1dEBNzeQASAXBEDDUxAcStoX831jmR9MLcjWbXUwQ19JMV8PcaTMEHMLYAgvSuqnCNGkMvMmC8QQ4uVeCyQU",
  "key2": "gMrx9fTEYRCn18NXW2UbuUWpegQsBNgpPTUZF7iuwhWqRU4T9oaqwYsmvo78HXdfrCdvJZvgzGQwmEtu2heTaLJ",
  "key3": "2YKFzgDrz8xe5DCpTtV4bobqEYnUcGSGaWp32u9XbCpAAFgncZQkTXX8TBjWeYrkhiTz4nBDDqvBFXjEPyqwEGSd",
  "key4": "u5D7ocxZdH36ZEC7g5HZRDCJk9C9V7ns11972XGbNPiPY5mEYavQFhXAV7tcsi5Bwc9Fgb9dPGPysPAG3KPQVLB",
  "key5": "3ghMGAYgHDj2TaMFYyaFHDX1NsbsXd3zRwQu9BrjNbQowK9192ATNqAWt8NYKpC9b2uTeJRoxZzvf8iddMTQwY8K",
  "key6": "329LFqq7AKcFiWakckb2G2te2mKLpu2uFS2a6AyaEQKDjN3dXLncEsnSjgDGXSrHdcxD8EMGHbx6Fu5t7fkSmtEu",
  "key7": "5bFvy6wNAqHVrMFExqj65cWHT8kGHGZrStKSZqVceRL84h4CZz5c6RqVH5ViaZaUZP6tzvokYTQvfdPDB1zd7FKK",
  "key8": "28QUWCprzBLGxdW9t7maodfaUyyEsUG2YXwNjAYr5zHpqwHq6Ar2t4ggkr1bRrBuSdqo4HKRCQz3bfcqMbVYV9sP",
  "key9": "5uixFMyWtukpYFGjFK9DFiJt6cnwMMakvRFtCH1wnw3PzS7cyjLe8agPDBFeA68btDU8ExibsBfjS6CT9JeeYCMv",
  "key10": "24dgioXDwG6owEPwToNtvtKsxPtvRuk6twWUH7KNtYCF9KR4mxvGA17hMU1L9GXSrcBoyV6nujogLpBb3g2QbBQv",
  "key11": "6348mkE9mXotoqqfj2TzCsiZuCcwe215FfYq7gz8z2JaKoy6aSNjecXPmvGkKEsHpxpokBfWt3zqHkYJmD47Tj9P",
  "key12": "4F94BsqPNcFMdJNvWisUFqXwLt5WScQVjUWiBnxMjrestTNp95xR2qz6RJAxoLx2jfrt53uqTEqQexnsBVNTNxZN",
  "key13": "64T6aGfKCVwMmtCHdRpPZ1crxfSQzgBVSGJjcFhpn1DoNX6ubJSgLvKaDNuoozbph2gKKYrS9ffFcM8tdAJjVEfR",
  "key14": "2aEBFtvJLgyQLbzSVQPDhkTb3KbUA5bMbgZAR8f1deNpp7R3X9FAVT3vYzhqcoH2nBnP4aBqv4UZHnxs815k2xyd",
  "key15": "3bWg6cFxVTyDPqCdixD5Q2j7QsFLa1GYXg4dZ1c8Ena8tkjYrNjkXPmuLq5d97mPJhD8fYN3DvXjvxR9wH9E6JhY",
  "key16": "4fRxjPkEqc57bUKZuq2x5scrsG9q2wYz9kiJTZPFuM8S4Botng3FxVomZpow6L1mUaheYVynHDGe7s9Kn5xJmdoL",
  "key17": "2HEuo4cjN2Yi1cHF9QeTFfVAPkx3g8jq6mfCBteoqrkNDN2oAAw5r53zCqgueTkfVHYByCPZQYrXE6wHJKHZTh9A",
  "key18": "5WMGy1wmMe5agCX2X4G35RDofRQTLeAxSYx3qkXonT4TLVqKXoGvMrVSNaC4oBLdFsSGmZEviF8KZRAerXmGH5zC",
  "key19": "36tX4hh8xL4z86X4GgjmmU414C2aUqP94c6MPSd8wVxcRkx45BcVo52dnSDiqe8T9ZqLoQNUMJ33gfcicFYPsm26",
  "key20": "uqdmnmRjnTkBAq1v6wRwHnQHYc2kuKTPoyNvXc4qG41911ct3jMTAsnUuQFKgtJopWR1EV2vSm7RQb1jmfuai2u",
  "key21": "4QV7jtXxBagurMRQzLQMy1z4FT4bGdo1MqfXJcKZ42HHHt4mcYm8trPBoyTb484M1SYAyyuaEzxC4BaH2jpK9Sxj",
  "key22": "5F71qmARh81oMPwanJrBoB2NaAiHXYdUfNi3hxxaGsURpv2wKbGa9qSbfrrJCX7ZAjy2AfuXssd3dPTePiWwmDvw",
  "key23": "2Qwi9EwyEjb2x5Zpi2uvTczA2TLkJrhFGQw6RpDeLrMB2kNt68oUr2YSCGCb2LZYfNfTwXfuDSrBHTvWJgi3A3xb",
  "key24": "5Poi2xafCKVZ5MhSP8BqnJu77PZPdWBkKSxLDT9Z99wkggKdG9pKNxgMaCNFYXa1Z6eWdhrWBEYLHEd9PpntLzpt",
  "key25": "2Kx9sksZfm9WLnJCrsSUiRfHmUyVaUHtsbbkUFpJmiiWpHfppEUmYfFFBPrFQw4HmgFTpuPuTrejQmGos8Q2LVe7",
  "key26": "44LtvDNiJ6g9GccPFefy8QZHiGPDEQNnZApmjLBo3Ghm679TxSSD1hwgQpEpSCZXqWHgidFV4nvXy3m73eebSTFA",
  "key27": "2zTiFX5x3dFjAnyoRhaytHhvUUJXcKFU1mioyetcdCEmwDbw91gNUAHMJRNjpCm8YsUZJxPzQferDZE7Z6qnUuJf",
  "key28": "3rZKcWsMdyMZzEQRWnbPnejKXJtR5y4Sqascb3vmw6DDeDXZVeEYutiQG1URJVHHsSwfMbafCLReTDGWSnRfh4E",
  "key29": "2uB7MSubV3x6niYaZbmfkd9jkWmWankKs16kZbJbEWBxq86aRR3LcinTuG1NEo3ewFhKL15NVqic7wwT7Drf3LoG",
  "key30": "12A39tZ4ub5VAQHYJQRupMrvcByZ2VXJocubX9ZA6EdxMJ6z4SrDjGfvsZGFCNrUWcqhFEYYhGSfsPVrbKvnZK1n",
  "key31": "jr94ctyMAmbE7eRnxq6ogeGRAFwbTKVoNXkuXt9axAdVoYGsrKHpbAtsSD9Log35B2sizBESwEBtYzbjdEU6572",
  "key32": "3MddMszNfvDzdcsoMDkFH8VFEZDWPiy5R7jLesuDotjkGZ62kG1oPFBfb44RLq3hVPrHJiFtRqqh3yLXtpeacuMs",
  "key33": "PzZsA3XrSvBsTJ7uXLysuwab7GXXjiNd59yAPQJy6kJPNzMikNzb2pPpKeB6rwoY7jS2jnEca9R7SUJLRCF51GJ",
  "key34": "4u4DW3rnAoQ1X9bbfBbsW7E7EVyUDdQRZx9x3a7zqzExrEAsLKxcmpgKnuMvwP4BqkqkLgcN8VBHiuHpx24mdUAV",
  "key35": "62ZMyFmhwGQHGT4hwqyXZushHzypwW1Fw4anJBn8Pf2hY1RVQa3Byf655BpYZsqbBZ2fLCq8VVT2StMqf4tgSTNm",
  "key36": "XEtRgp552sFSh2RzVXAc24ZHMQw8o2DkhTiWEPzxUkLM5B9ZrB1UEqqrcNtCynpusHeTxfz7e5pAt2HzBEiDFh1",
  "key37": "3yb2jvrMuFvqshrZ3ukqyb9k9RjNDpmo69gKVbF4qbTUS3LNVa7Qc8rEHd7K8oiTaMKiRs8CGfxjYiBrWZUizSzA",
  "key38": "jf4SLchXVZe2UiHfMDvkVZ5fVmM2gomfpAQB99t47w7nD4U929YcFJ6LUFLusFJ1z551A7KzP7hwnsSDZ2jbLPU",
  "key39": "3xiAiM73AutY8TZu299DQVq8gmGpkoXn7PWYrdJXBMkuw84cBgUEdaVpYRU2D4XzGFCGeUhH8UEc4LkpEnaFqJa7",
  "key40": "5VknESJhagMCHDmUDrSceoEoV2Bxj4oGswwEnVE8fC5b2q5oYru9xk4PnwVvckxFYPDFw4ksCQHqgQerzX9A6Avq",
  "key41": "3Bs9h6QKLCKNrR7QKVepJm2NxUHo2v4LWYVdKcfMXUiPmrEqH2xDxc2n1KqMZ6fE9TXojU51sXvJfsKyYvYE4sQY",
  "key42": "2jetzh3YZsUCbk4i1ZYYjZY4WT3igMCy6Vy4Ryc4746oP5dGHix6M9NpiU2jesDsxmkCVuZDKe6LLuyHZNjWhU5y",
  "key43": "5AyapGS18ffRTsrW1FgEDb4kh6Crsm2fCfgXFLaGZxxujktn1JgZ8Z1tGdBp6iLfJ8LXHurcTW82p92jRtu23kKp",
  "key44": "2GCPWtvwLrWUX3R9BQBrcT2o3u7EUyFYeEp8rV4KNr4b5qnPm7U3yV6XhXvpKgirLquXThsd3Ubip1FHeA4zDcos"
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
