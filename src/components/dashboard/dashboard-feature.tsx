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
    "ws11C3uceTLHjEoTanuwZQAscvnSxKBQag69ZEcajzCzg6vMo8ZUr7eKY4BmnRHSPLBm5HJha5Adni5G8xLq3Wy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DYCkVanxNdAWNd5bEAjbQH1whCqbo3ZX8TCm9w9HamhaYAbpG9mnoePb4u1LgUgMwcrADgZatFb5S2QkcysZudn",
  "key1": "m7McFVRozRKRqx83MS85YZ8y78j9yUvW6opxnK48CbaaAw9sivZafjUuacyNDLiQS7tf2nhcKrzJwo1FhprCTuq",
  "key2": "2ZeptjN7dxTjh7ZeknsW7c71g5EtHAvwFcmfwhHxiDLH52yiBkFtppWd6mBmkdfasNhJacfDqhKUymkw7fce5DFF",
  "key3": "3jBPMsSjoiSVLz5bjU19tZsz6kJSyhUcVFduk1F9b8w4BFHLN9ctGRkdhLCqZFa6M9N7JxcTnshnwDGgcThP5LQa",
  "key4": "FDGvt6reWMmzTRkK2JFinAptXdmM65uCZSheHY1kfqXjJYS8ooW9TufW4BTJbBq2mXavEV2QtkToosVTqRvajTX",
  "key5": "5bYgTz6mYU6HSwS8b893EKPUFfUJuto5HTcryEPWiZxMcxE8Lzm2pVLpY2WtDmXdMFUQxdhEAKD8bfX73MY6d6jK",
  "key6": "3b9MWoQwednk5GDBdFYFvgUfaga51qNJtjRWkZKhQt8iT42GqFn5gz8GE6nxJBqJH2zfd9Qmtvw5G2MDHtGdchSy",
  "key7": "4hezCHDcPFu5jLqhTmcZyRJ29BTpMJWkYLEEWdbDkK2bZNoGcmMcJz3LABgrYU8hWqpsqTTW1ndRBMHV4JxVpKf9",
  "key8": "489gQpGBYqCbWfBcishCXgLkeh7gcUbrZDJCGXZsY9brgz2T299yAPRx3GaAEDGmLxwSLT2X58qYgwvMPtD5yo7f",
  "key9": "546hWqhUNboEakHXk9Yc9Dr5T5nqxRJ5pR4goXJ4vfuShQq83qDMi2LhnQzVh8mD3GLeMp6rik8cNe8RTWTcqQpj",
  "key10": "4MFyV7x5tvQFjFA5jj5LPTSLWyzrbtMxxfA8DJahvyMgcK7wgwDt1avW4wz4UjSyKcrCJzmur14PB131mecy4oTh",
  "key11": "5jxWMvqJD12HyZ6Wz2NYkpsw8et8vHrdcvf4zX9yhb76LA8KUXdkwbHANqRhJSwyKNBVTGfn5GT1SPQX7V1Ruann",
  "key12": "5Smwtrt3qdmSkWE1WUnfJ6nNMe2qfC88VB9gzCFgz2oWNq8EB8hHGAXky9A22vm8yDk9mE2RnmxpTMhywRu6t7eh",
  "key13": "nYAtbYwW87VbsuZF3bMkhGDsryG9nak87bVeEYogxG7GP1uBFZPkZ6rCFyXSAaQeRPvfBoA8naKdS4SuYmP7WfR",
  "key14": "2NJBC65raCSUvFhHWwAu1xCg4iDakvvfgSScn1nM9gUkFVWvaiDcWRjtJKFg4ZsAf1FUTig2mLy6stT2yYqYwp6B",
  "key15": "2MVjRjEWfVGs6Z8r5Y9pV2SogEYzA65W1y41YAW5VM8Ke9tf9Y5WBt7whsC3kZdYwg15F7VkroW7nQzHVPzNnvTW",
  "key16": "4PjXmZ5mjxCLZwHkkAPiVbFsumGrYKCWB34cDms7n2MByRVXcshJCW1WruGAg3WtgS181QE3mKDv98e3rNVvZL6s",
  "key17": "5AWNizFrq9Fnj3rX1jMJzKxvmGcw3UadVKwRvjsMFH26NJzdqVEdxhwadaqRHqPT2VzQ3k8vxJ7dZtCA5JudZdpE",
  "key18": "3UVqCN4Kn5vyZZchyFMVvobWtFgUL2PCohXrzZqvdkTvWr1f7uawgExK8LX7uSdcR6zMCTwFQsi4NPmzZkoxk3yF",
  "key19": "3cHh8yYHbrVbjzthcBQhYELM99igApxjnHCs4sPLPZg1776CazAQYWHhCdbJLHWrKK5nryB5kxKbagpEvsm74qdy",
  "key20": "22hYWpAr7sZFYVyozxSX4DDDKDhJDEpitghpx5kLMJQs4JE3GZCgQJHMkG36MxM7kRZLgrHbZZ5Jqyg1fqL7fvf2",
  "key21": "41PfDDZr1f7TdeKA1vSyR7sBDsxwJ9E7MHB3abiCDirYzPndZjfVHip1dX8p6puADiRjnyH2YS4RSUssaMoib5yK",
  "key22": "41jQ1qFhBuzeffRRoeBxiKnQqSq3jGgZhANvewQD8V36Hgqaj8sU9iH3ANLUUW311YoNh6GVtKP6uR79HaJ89SP",
  "key23": "61H6BHFEwsiiRJmtCkujq7mJM79W59fveePpo6qcdi5xQFY22GvYTJ3XhtoPAtJ5tCUskZTEesFVCUmJ8iub8bkj",
  "key24": "en83h8eRYenrhvLYFV9kDX8bE6zTHHVs7bEkU7gsdfFvRnmeYz4WSE1J84RCHnD4XddcmaAhUiAdkdpqGomeP1g",
  "key25": "4KYGozinnBVsZaR9Zm38tux76ydkRhsBC278XiK8H7JpFEAgp8K9GzyXoiRjzAa6xxSXij7oH2SpFhFP7iyUqj8V",
  "key26": "5pt6bVAkvTSJJ7c96k1B48X9vzvgW73mhBRPGyMrKZdHgZLR3iNP1iYUVgwvFmVrTrgWe21Lk1PtSmNQUWDYB4Ny"
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
