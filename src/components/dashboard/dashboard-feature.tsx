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
    "5mocA6Qcryg2PyTiQ47BKcr34wyG7wWhEJtm1fjLo4LCaXAc4Co15qBS153VHLeDceJ7UK4BJcVpGnn9pTqSiUyN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FP2zPj8T3jKwVX2VDZuRPgwMkLt6TykUQoJVe5rYQT4MGbdD9RjeBUYJTDBe2eaE9Te4gZjCNp3kpVXPFPHcLHP",
  "key1": "6ngqKUY1iHXkGctGD5RJsyY4QeziWQ13SaM1hY4GxTgA41g8RDAMbufiKsRsAD7gE5w7qJMA7WuVaBpJNNif2vJ",
  "key2": "LgRA8LU6vLBSH54pJdGQ89agpR35Dykr6gN2faSqwHGSNWtoTEhKNdeHuZjKucpL8ZBUJZd6efohng1z4w8gSLU",
  "key3": "Mv4N8of8rQJLXN9HFkpj3RtwaWQATn8c3FvSiynD6uq8LeGh5g7dCMvN7iG3V9XA5c1sGeovKDzS4iN5jeFwp29",
  "key4": "3yhcq7dXdaevMnTsGqk8g1XaASMMMwH6rxzj5dAWEhyE7vtMt9LT1mYCTiST8GFBgMiG7F8bt1SJFcreksJmm83Q",
  "key5": "2HTRRiVjZigzSCLZLKDh22ZGLSCHu2NEk3qMywLZHiqkniz68ceZcQWdk6xLz1ufDCJbYwvEHBUTUmSXoP4MFVCq",
  "key6": "49qwjXk9eeUbto6KQvJMTeDwtpj3xJV96oR4XggaybXt4P48zbq8jjA2noehX65X1WcKeaf5X9HQepLPYefXCCKy",
  "key7": "3jPzG93kWfEZZa7CfX559x8wwRVgQkGxQb8MzySZHFtd4oVwEi3u1Y8KafmhwNgMxkVqgGAcwrZKYtjawhCNbZKs",
  "key8": "4Rgygbp7Ec8wkKyvwQLEYNuCxkPokCnZ2SPqiTkvApESRHKardStuUugzyWLn6c7uiYK591Qk62EyMnRnLiPL7BD",
  "key9": "Aprwht7HEmHCKX7fg6pPGS5T1Q9BNRbmdCK9m28YMzQkaea3N4cRvDTcqfiMqNbYPf7yBRDCfjsoq2qKM1zzM9B",
  "key10": "3XpYNe11jmb7JP2UQwoGSKkRZAU4HibKwPN1ZAcrqxuZs9ZL9JnMppZUrmcQnNXLc6WMqjSzEjhjWs31AkdGUg3p",
  "key11": "3fbcrD3HWUsRXbraem59qfLEA34mGc9BeFni97cGw9BoiY1F8WdjDcwxmYUnRVmgX3GFThGPTdBcoTKfrf1gG5u4",
  "key12": "boWgqREhShbyjujB1uprpsKrwkKj3h7q7GiMyZ1wACTRhjDh28NxLCg8BM1pgcLM83Sa38jZKVniM8TZAjG81CF",
  "key13": "5wvvD6WwwJmUwm4tZiDiUAsP7Tpe9JESaWQrmfKtxm2hhVnrYTmExYSK7BVF1E74gFaoL7KQ3seoyu8KgQTcZgpx",
  "key14": "ie3jq1j7EVY5xB1peUidoRD1A32PVz15VBk4fLvy3PQvQebn8iWk7goYZMqRbk4mEMWtyirywqmq25CKXX2rWpB",
  "key15": "4NEFpQVQLVR13EJmhqgitoEDJAu3MeKSzYWEdcePxuPW79pXRfiru9JU4HanMspMLFPUi43VoUkEpP8WfbMpG8ru",
  "key16": "5bs3NgNpquxY9XWvsZa5JeRn72Ugxvb4tZnqUX9yGRYSxk9GMZHvQX87HTLEWrRrKAXfFazs4t5wuiN21JookYmC",
  "key17": "5iSZmxS4wBmJvVL2M8m8cjtPnjT3334S5G4juHd9FJCdJixKebvBur2jdwuXAKQNEe91eQdpMApM9Htggprpttu6",
  "key18": "4ahPEqbYrH5ayW6CjPXzVqCAt7JV13Kp4rJPJe793pGJvZRnSECYpkZkUFbN6JWwtp2t8QkwWchGfNzf1LSY2nCi",
  "key19": "3yXyu4myDpGJA729A8U6qhnChBJYNruWojx1wNPVMif9XeUmaHK1z8X3iPZwb57EWEmHB9PZB9D2NzzB2wamtKwV",
  "key20": "5rWmfHEDEzRBcnzZHs5Eb4uA3HXccEnzkJTfigLxTc7SuUtaocVfuUhqkx8sCPhWRLK1mdFiZrhp74wLTASbC6vd",
  "key21": "2Jw1WnqayvaAYXZQXratyuboq9qhHbAEgPWWZxgWJS9bTDF7BbJn9Sm16UjXafkPCLuXnpdurAzxJ2k929PEf2q1",
  "key22": "5awtkdRvgecYdGsQ8d3L4mTGXPagpfJT88J4TxSsYVnkahFzxBsayjttJBz8gbspASKw3pH36gpchPPibdsCTdcW",
  "key23": "5itQV4uLTBYRC6ZP9wH1RoKSgMt3WCF6EEAZHEvDvCBzsoTWS7ZCKBrAPFc5vK2fh6TeEwM7FgZEZw9PyUs3PPSG",
  "key24": "2umnWihDqjidYwZe9w2qv1A66kYP5kvdqwWaHPMJtrdCv7reJ5x6FG9UoTs6QJdXNkg8gcTmdyiJWpyUhKXV6kVS",
  "key25": "5H9zZ6RYj4bGbTDpCngSUB5yrKpvEamyJYf46hg1CmRFzrG33AstxUPdrfqEaPdDNkdWzm7GBxyXnRe74QwAxfY3",
  "key26": "4sXH3WjoZFEe1f3otWu4ABZ2hgJwxJJtnxyThKthkwVMCmumjjWc9gRTXzvnchF7DfhatymwnT2TNK3aDvS3DdYY",
  "key27": "2a4xH2ajCHJYL1BJsU4xGSEpteLuTpkrWEZv3GBk3PKhe9X8fnrCGxAy2RPU19gkhZAGnzK1qyWqRjwDCX6ZXpzi",
  "key28": "4w87JJj86e91u5krboeCaAb4CSzkhwEeh9ePTozuK5CYPyobCjv7F74FuZa7ZYwZ9k5wR3M5rHjmh3JsjzwNXLH7",
  "key29": "huSPGqnzWrpRD1DdiFPfoDixjYFSR5dFTU7QRxS59gZAXzhdK4pZCZMYKYzMWTbXrvi4inVtnq3zGQPWXs5LUvn",
  "key30": "2SpZNSyd2FLFstNGzGJUZ4TcdTExVySbHejdsJP6wxaRuH1yZsamY2bgpZ2fCz1G6ZZaTpCPT5Z1r8PFCkPAG7E7",
  "key31": "5b5YMN8MGH7gxCEFqxY9uvnTgNwJ1mPEq6roRZgGTPAya3ZM1YNRw2r3M4gGjpazuxrmGLPquEu7RPiFE64WSHWg",
  "key32": "5tnSVCS7PyYKYAB1oaveq5veS7eUzAJiQYbhEWDqAzkx1eR3X2NBqtA6QEhfd3Rbejq67BDJa8bt9zQ5AbAeHib9",
  "key33": "WABdR3rYMH7338qJGYfkpgKHtik4U2ysdkdL6JyDgL39XH1PzD4NKSjemQLKHykjwVGLLhjUzDg5USJv5fof6qU",
  "key34": "5A6faRancT79pCkEdLE17mnShM6k7Xzav8K3ceJGfQD6EBMaszvZYWwwLaVncwyfwp1XhVHRAUbEEMeLf8eS4Uei",
  "key35": "4t8JY1Fztaf48Bw7qYb5tXhCosc5nXWdc7P9NRXT4SM38w12jZUagMkPCaj5A9V9XUS9SpaTHn4Am9BuoGo867pq",
  "key36": "4iRe7upoKCULsY6EinhWSaTc7LHEXAj26BSMpEWdKky7fLGgx1Kfx4WanFYkZns4LS4aajhRgmz8kUgK6h7G2Jfa",
  "key37": "Wi1PKC4eLSr2G8eBo7WhTmo8he24LyK8jht65WfxVp7gyauZ9mS4nmhY8GrYAQgnGx2WfJZ7mM6AVmTKLzw3cAY",
  "key38": "42HqaE5owCHfSs8qYAtU6C9Dpnz2Rk1v6S8cFtY2bAgYz7z52swx3U5Mchh9CGog5jwayg4SHBs739VyaRGw4CBW"
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
