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
    "4mKqCPdcKJ2cTxR3XFPQZxVhEiAJYSw9Xb312aVg2EosKDkc7eHHWqUma5EeDD65vpmBdV7PvQXHhrwDVcCZ3kUH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Tdd3xM9F9fCQcEfk3cpJEosKxPZXEXRh9XKTCEDpZmNE98vS2FzJtEH394qEjcEq5HU9fkEd4yt2ynupGw5WJm4",
  "key1": "2ibjN9WAVpbx3pZUFNFqgLuYKbVRqEoAApthDpc5BisrrUeLfa1pkgWytvTKD65eS644diSjsK36ELeotwHJgAcB",
  "key2": "5hvhnHBErAzBfNRKF1qEBHUQYbc9CDZehCKMqQzmCe8exba7YiXCSu3MaWMV5oarMJZFDK8ANGwAEVkYMfDVkx6K",
  "key3": "46aEkLERy6zufbnsHWHa2Hfwoqu6MtLnm7GWra1WbxyiREuQG4nkeJiE61LxfE3MEUFF9LLZqdLcMBRDEJtobz2L",
  "key4": "5aWUXzZzrg1JtSLzZ7nBBbchwwACtSpsiQbcv6ekyk3NMyGVyCZYYQHf5y3VgKCStZmZunxqAkHLswsM6n4G8yrT",
  "key5": "JkhAiQ857fKDDVkPeQf1W4z2TvTAdHFb3zK6q1frwbRCfvdD57JJgMyDtQ6HCgpBJny6c4D3KxjMNbxnmejuYXf",
  "key6": "3Hbi2BvCp5HMoyWth54C3fqSdgUH7ni9RhxkezdbVGHnjsVLBB1VJZuPKK8tUwJHmrPbY9TF9fkh1M3q8YphS5MY",
  "key7": "3Ep7yA1ghcuMxcjaa4y2UEkKadGnEGNQYdLmahyFf4VfukLVQz2RYGTo7MaPezPpuSAMrETkTTsPW9umZCBLxoiC",
  "key8": "iLcYZSUWjakiJboJc93q9LW95EZGKLaHNQzQutU2C3jwHFsMTe6DrAjjmSVdUx4yxX7fZhBQcAZT9yX79gJt9B1",
  "key9": "HhYuHmgXEEdBbdhAgRN4WDYoiJTAgeP9MSv8KvF9HCRRbSKA1HFRo3UderNyAC7dK5XzAoypXy4pffxD13yKSfR",
  "key10": "KMipwePmNM1LT5KmHLNLRaB7CCLCecnd44Xh8zrK7P2CmyH2iHDZxxcnz9uYBrJ5HFw8vMWXCthmQtBJmAmj1HX",
  "key11": "3QN3VzhKVatpfN9gcrBuCS4b4otdUHWX28YMFgB3Bzv6sT2C8FmYgnBzJQ72beuzEDCQHdUDAinxs7Cb3p8E8tvo",
  "key12": "4QRHdxMHScu5KCdcGd9DqrEZu26aEqP6Pbzy5bGq5dQSNdPUpYY2pTwhgo2BVorxSiDYwRf7DRLqEJkN5Fq34MFF",
  "key13": "2Y7rjn6hNPEnv7wakzVQXXjRougyfxaAgjdoejewiZ3ozn8wGixfZiBYcs7tyiwn2iPiA4ebQAtxf328DSkuJVRT",
  "key14": "3hPREyzTLH8jPMjMeSEPqoAuDfiUbT7ZrVKwbFXiLad1NbkbCcRvN5dDsys7F4YtZNLkH7JrZ5X1xt9mXHsbivuY",
  "key15": "4NMZhpZbKzqCi8Ru7JT9repckKVCkc6Hd7hcC1982wLHYSvu6zGzjW9RMas8prtwxRqACbpzUU1qd8haEkjVntXt",
  "key16": "56dURnDebfW1JwZs9kcpNarjLpUrWv9AXC3sXFbACHCsXJXG1i29NGcZsoQdfwJNsR1dk2TXy3j8V7DZDv8ypLnQ",
  "key17": "4tye57acJWaGcN82x6LNUgJVHRy2qPcvboKE6FUB1KpzAYFg4WjXvzf3WG7ffvdkxs4KpSdQsexJUwQd969nwaQR",
  "key18": "gKevbh1v2GHzsvgSPwEoLYXGykGVtMoXtrexT5TNXVxCSuUqU4JEkxSC2uHFTaFePT93nK1iAZSk1gwSqAX39Kp",
  "key19": "43a3PvDXL75Lgeh6sprqFbfvP8V43jDkLsGuEXEzAhCL49ShhMthfZUfq8ftFQF3CjtfZ6z4kymwKLbpakaa8fy7",
  "key20": "3YizfuN7bk3CvDtJXqNqfWdtYSLeTJBd7zhHgqiVnnNqz9CE3j8GdqKvr7VztkqzwDexpZ5CD1SDNYea78ySQEZH",
  "key21": "vHkgUi48fKhqE5PfRWQ6qhaiNvKfff7EkaB1oZwqib4zRPvEE87VGsWZoNXw9d6cFPyuCYoMY1ZK7NdXuABF1us",
  "key22": "9y7fstoLegVUJ7wd7Q5daNnxeAgwmDFxFMnkZQxr3Z8vgRKmpd57f3wvPRGiDWHybN8NYbniwUF1AFCNyxHHTms",
  "key23": "62tYb5Ti5ru3eQZT1R6KC2DZsMagQ1hYTgVeeoH8vdp7AC9MjvfxKgByw3LdZYpuejpSL3hH1gWt2UEJyQoirJiA",
  "key24": "5oo7PUu7AQ8n9ftwXo5ijwKarWCuhfcq39Tsrmjtbzdoj51BeByhiQLcAA8o5JWYTTuvbsuvbKbfTSLNAhRKVA4o",
  "key25": "3UTZbKaoxLXDnEAvVQMTBsVMaDphvk7wfTHi9XgWZR17JtgK1QhBZc226w3obXKeFaXER21Hc5djwDyGANLdddcT",
  "key26": "4xjSjqu9CqPAEraNHyJPQU2Bnju6cRAnEzqP164EdoTiP6XtfJoafc2B8QnybBD3mJkvYa5ZRMYrvJyTU6wNK58z",
  "key27": "4uE3c5iLTLmZdc5qmLu212vsSbT3qywkRER9WAZupAGpknWa6dfk6M1T7v9RhneZcSP6r3oFubyBouPyBQUVVVcd",
  "key28": "5AC3WT29U2mdgwWpUkb5WCGhheMJW3e5ss57pJBunCr4yzVSbnrguxqG8ET61eCK6fKZjmd5qA4ZkiQAa4nfeBid",
  "key29": "36LCzNEPK3gJKoD7F1GLAiNo3j3uiB2hcNeuqDLb1p8pR2Y26FiTU6gzirNacE4ai7dsQ8B89oKSE2dYCWs23rWK",
  "key30": "2ExLp2dvrDFv5zgaqxq3VgWq2Dt3DCAiCPvxf1LYsaxLzr7Dv2AJKoX1rCYa97UdZNio7BofkKh2Hrx7sQPMHz6B",
  "key31": "3voW7bc47N8KxAQ9jGhsca1yYpBz2DomMKuzHRL1Tir8DMcMemCBb3Yo15B8hbizbDnRhArgs8EFhY8BqpLfP2wg",
  "key32": "5fjva35oWYCFVZ2N5ptwxGjJereaYy8yryE7YJ2PtfTTaFCrN6vDb7SQWLLL8itAUpGJ4X9DHzTiRTrLvS8ZUcu9",
  "key33": "2jQMRrBY4rJ1ZSr5wvRY2aqdCqeQcexxtcUe95r8AuTafeCPkoJv7igMtASCz5nV9CUAFU752EYyJegcHsbdTYFj",
  "key34": "4KH86tuRvYFLaAoJEviL4gNwmaWAA98rzajc64SfrEm2K9vMqYX9GH2UfbXqcBp8Uqh6waHDxK2tJjX8T4XtuyFt",
  "key35": "271LiuR3h1gr7ZX8eTFMPuonyKL7fteHQT2WvzfyP3t43VTdK39MPjnMLXEcCaRH6x6Gvt1AHzLQyv4tqucN9YSK"
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
