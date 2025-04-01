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
    "HNm9ApA93joQnSHqk8xB85A2wxEF1YzUP8Gq5igiRBhGfjXgsA8P6U5q3uhGm8P6C7defFSj5NupFcdqnJHg2VS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tmG4ixxWTaqvnNiNvmnqvjnrjY78hVUKkvfjDtP4oWpVGHAXrLWWiYR6ioBNtT7qvqkJf5aJHxjzxur4NsTqRD2",
  "key1": "4R5t2nkGXC3jKpdNGudD6nNz8JMRfzyk4ZEZd13eTfcieahFN4aDftqkkiDXWQZip23L9fLH7t2nT4cfC2t7hKYB",
  "key2": "2NHN4XXf3A5yC14dNmojATBiBmh9rbtYf7Kc2rhw3JevNX43sM6LNAFzdpQU1h1EgUsNFpcAmCmBw2QQh9puERpK",
  "key3": "31Esjn26LbapoHD5XgBfFtBvB4gWs7B6vZ3H7VU2fxDMdtoXrFYPGY4Sf7vfvZcHYVabqFr3ff6HHdTonF68NpsX",
  "key4": "5pLN4DHpWaZjedBJe24zhhSn3pi7VYWvkszFj76yJzyVcMhtd76rhMFJXa8q4Piekrb8tqS6T97XniKVAHoFZnfv",
  "key5": "Fzv1LiLFvt3R86ToxnFd4rrsckdDY1bXe42s1j3bppwpy6hKFn4CUueEQsTCH7rhF5Bt4tTKM9pcZoceDWGCsQX",
  "key6": "5famcgk559JofPywwVdyfek4Q5mLRrEmp6H1JCcdNjoaRJGVLHWQZFHnv4rjATPASg3a57wGHRyA1kzGiwZMKWEP",
  "key7": "4yz8mS1Q5CLLNp7exZZiFEVV2oNKWeRzx4CTHPe8zueuS1P28KPCjhvi7AuGkT57ra91UWra6qfHErwJm9Lc6ro9",
  "key8": "hog3kWsuSYrtjVhRCMzU2Hwn8ZpvqtWTXMMQAd1xBSV4F3BxgWMSCNQ8TJzDJVRHnZTohq59Htq5kSkqcEZSaa2",
  "key9": "2UREP9ruEctax4JxjNVmpxBz2a84UTdS9bsY1VRpC5nnC9vgnmxScYxzKVMsjrTGoWFDauvap3e8yxfxRjUaS38T",
  "key10": "S4QdkAnAi5XgUWCUGbE8aJkxhCW8h5zPtr8CWoRWuyPN5gT9gP2xSCwNQ5PW1FDgjmWNrse8rTAH6NiK4Lo4XL1",
  "key11": "37dJPBdRG4t2BbVXeisw8eSNaXFWhwqDT1qGNvUrFTvUCY8W7UgJpB5Z6WuwhsBog9kQszj8UKBtQ34kcZcJhTuk",
  "key12": "3ucT2Mp8R716xnLMcaKE4dYivPZxmrBHbrwXn6MDake5Ev39ANdHN1GcWHnTfcxEF49SHbAUkFd7yQjusPSbKER7",
  "key13": "53qW1vPZEn6jK1qbGSfn2v5ExfyzRfVy3RvFTr5uBJMXS9FctP1dug91xeZizLD1wn5sFJMy9qida6NN9EhkZSz2",
  "key14": "57nMk3fEwYmPwicQNN2r9qJ5VPhsGsUzZgrTuaGwMXMa4JjU89q4LSjo2xoMC49ioh2cjXx1d3SKMWuZnM7dZ1Rc",
  "key15": "5sFELYk5CQuEiSKZvTksSNFY2e5nypNKp4TDb4CQg1dQ4MHvk6VRxHL5AgnZatDgvbSRwGsrNjzVvP6rUobi44ZX",
  "key16": "2dzZgYp6UGvFZyjAhA6SE2tqkj7eJj6EstQyYcAAjjkpAhM5XopHmAGsEsKnGZMc2NURPLnz7hNQ174BokGXxDMY",
  "key17": "ub6sQWxq8DiysBXwsyJv9vQLAD4CDR7eEubMY4EpoG28CQepy9bH8qXu6QyWrLacuCpYPJHgVvfC4VgnNpFWe4y",
  "key18": "3crsUfdmkdMBHRj7pm5WPTMSgFmVouKgFS7WXUFPvnDKMDLLqnmA4t1XdNsj1n2aRdHCBsBNGfrvnwMcqpcrzG1e",
  "key19": "2miWuMd1mw7cmHBGDBVGuEdrJ27WDiKhnkYWASjF7n1pF2MApnSJcjLTLCuu9EnrcUUt64sacvUfg7UFm9Q4AuHa",
  "key20": "2keNF2Y6j5afFxrgj5CJEB6w7mpkDD5rEXgzaHcsu1azr4sY7NjRdAqw67JfTRcnvXspmGeQFnHsAAJ5ohocCAAZ",
  "key21": "3iUQnSa1Kt9iTrkVNamF4LA6TEMzX2L24zbRSLH5ZJCbqhEpbZrud2NtJW98ufoPKGd4RW58mWvFTmajn1jS75k2",
  "key22": "4B1dGKdhGsFTkidZmvkURhrVC4k5XKXJgYBP138ptkz6aa7nR6f1prFmF3vjS25Bbkqcvo5m9a2EGeRU6qgHGjpD",
  "key23": "oNVky8bgC23AfsT5TdpYihooWjTaPag4Z8uDrvwGAzhLNq9hoXUqb9h92JsxGfBbde2gPRgkPjiHtXW1UugBBgH",
  "key24": "43n4K9VMESdcqupHfBq8ugPYDzvPP5NznRP4PwHGnukvWmVQ2wT7GyC6i6M5No6BKq8CkxyLnLyQN2vHftdGbfYb"
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
