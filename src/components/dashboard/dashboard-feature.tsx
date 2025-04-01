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
    "4MdVst1CJJjU1SX3Mmm2FgQbJcuu36nLdMRAxfUtsRbknu1sKS5j8Vi52rXizqHBVG38XqdTL9ifDCFmLvJU5Zy9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BogVpeLhXj6EecMetVxE4CjQPJBGMS9TxVaStaCwzHasCAuA1sLx8twgzHMmf27aTqPQeCmwSuKMu1siN2GkWZS",
  "key1": "VEr19LeenQojsaErKna1b7cVJGvgqFcdES2tFtDBxdvQbGJja6XYjMgLrte9oFVkDJLuNwZBYhe3nrnpc6Ev4Hu",
  "key2": "3u6yqG1QxivrUQpr79G1AkPsTKipaF3PUoTbgWS5fVHE4etkYPok8ndZmTfSQL2HYWdMS2V2CNpdTnrX9zosQajy",
  "key3": "2KdNtniQqAqED6a2Sphqqndy1x2VGmMbAFu6UnVCSuHaKkJ6hKNtxsuURtYqt3sJzCefEy9MS21Sb57895u4PgcH",
  "key4": "4de23YnzJW5pJ5NzUfkdD7TTF5bjfsUiJsVb27F2ZGSd9mJtEetC5iYwHRhn18vCyMnBeWMpaqVt6wKo2WfNCQ4z",
  "key5": "5X7rrdMsjotMMHwF8LQd81q1zxZfE4naVQ4DYLpCiFKj3dK9hQwopovhYmjJzyCCtPwMadB6XunKjZKg4MNnJiLq",
  "key6": "4KTVV4ynMjWWCjE5U19CPrLthzhTx26rhKSaZbYrhhizsXkk5i2Ytj4tCURf3SXFrCA3mmHQWFvBGf11UL92PxiK",
  "key7": "5ufK8ARkPgcaAbv2DaREB27NHMqQ147sTq312hJVDwhwkrQwWPENeBYnFTZ1ffm1sanUu58z7DBtsrYaXz3Wxog9",
  "key8": "5fXZrunfz22oXQsjqrZ5BYgrHb1k3xHETWfVqiuX66ZAhNsMdF7mnPpWGnBiQpybtmhvXjAvEiok63ohNipihbTQ",
  "key9": "3PrSrx7hXCY7Q3hmxa7miE4L1qEGLjSKpkh1W4nJAQ11Uv9Mmx2fzCdBAWWLd6tdGaD1qZ9QgQy5kMVdGwq7BtNp",
  "key10": "5WXnmqVy4RNBTPiF4qZeyucDif7jjuS1hNJeRDZFZxvq1cnJ7ry89kacHyBhyWs3eNH6WXw8B61kD3DM7dRU761x",
  "key11": "656e5Ks2AHmB5PkSpZPUWoNwLJfaAPUNhEbNccScRovTJH6rsNtwst9eVztSSP62qwPjbn9hvhX1nrG3iutWFC84",
  "key12": "64XG3G28yTLJ5wRpbfroc5M4tZS5BXfNqwzH52bdRqPGhuTe45WY1QVZfwXXdymzfxvDVXRaUYcXb6amHYQo6xDQ",
  "key13": "kaQw4dV6vdna4wWFumAVFNHyTRn89HQ9nc14EPfJBx5XimDAUx2XWKrWx2zyTzgRR5gBdhPTELLn2WLqzQuFt3V",
  "key14": "42Pmm5jeevstTQvvffoEC1RFTi1RVNv3U1NZCerFbuKK9yirqVpHbEQ8PVFF2c5VmuDjBSPcDAD2XYRcNLTQJQEf",
  "key15": "5FByA8KNsu6y3TV6H2hmgJhNMj4BbHqtJi9aaySfi3Cs2KVqu8nssncsB3FMKRYTaWJ3cMKizJ7ABTDW9rvh9dLd",
  "key16": "g4agSzLLvKXyq1ZshiTiXxG98a3XbPkTqo5gRwvSbtqnCveakbmqSUg1ANxffMGdQwT7JVy2DB7G9vkSmqihktk",
  "key17": "3eJcgie5wUVpZ1XwGFbFYH4YKfyikqiBP7c7u9PyYkrqBuwPmw2NDCuzrFPSinDhFV6AnpULvaeGNoTmckLg3aMc",
  "key18": "2VVvKVLUyQe7iaSvPy3k1qv2Zr6pStypsS3xSNXwJTUtQgfZbh6mNsqAerTVNfMD9L85AeWMcf1NqaP4v3gg7k1H",
  "key19": "5Fch6ANhtHMqbGkTfuTgA51kEykt1BimdpyxwSmGPbFwYt38WAqvn6KR2R9xYyJo9wWe2A7g2cmxVr6uisg79JP3",
  "key20": "2FahWVcFGzVuBFyAN9FManXQbAwkWAyKAZ2LCkHQQuFnbqGaYrNhErREPhgMRgwN87tNLPe2LMfvQsbVmoVgNTze",
  "key21": "aF7nYwGZHupcJqWxGD7zC8Skc2VzXxeD41YrfVikLuiruaUtyJXKHVzfogDyrfwQEVe6adfwxKSRqAap1ERpWZn",
  "key22": "4LmdJxecLvGkZzKNDsLELFRBsf3Nz3QmnGmV7YamNucm161AyiRQhoW4Ycmb311Bnpvn22KSj8S31riTLky1iTCM",
  "key23": "4nhMkDhdvn7hXzp64eLUeSa2hUpJZNQgs1NHxqUtdkY7iRKhrQPoiBoDTfXdX98Z4yy5BQVLdeCxVzF95SrJGrEc",
  "key24": "2MFLeRgonU5YrKUNZwpmhm8oopXZZTKbiyqHVmonTyyLZnvAC2msWfbXRyyirhwnmVpZQkzQmsCvKgdj2Chow2sf",
  "key25": "4Sq1WvfYuoLKjL7XdiTBG2uUKuSz7Tz9U9bMN86jBFpQj2XYGD6rPhQpAKLMTxAMDYoEk51hekSajMd5yUEM4xmm",
  "key26": "5uRfYFbRbgvPL37RvDRKMb22AyPR6U1tG8corZbKZDf5PTA8gQjrCQUK49AB9SNftNf4ocZnkdvyDBvfMZWJzuYj",
  "key27": "67k214SPZG1ZYQcYFwAG73VF33Civq7Lop2XjA7K948Btbrkt3Y1e5qx5rjKD8LhpC8mcfW3X2dKz48fv2L7hS6K",
  "key28": "4y5fzqoSh341FtVzXmwjwpx8QNN3gJCdvsbp195TtKpxcp1yAjfGFb9sbkgMqBKQbqcKsPZ4KFU6jZ5TPGaDUdmY",
  "key29": "2LNMc4sh2gPCFQBCN8tbJ5ndtvP8j5FSzQjifaHsVoa8td89EkT5mnsUyrzr1z67gXK8gKc53b9kzhJN7tsQgRqV",
  "key30": "548Kn2tzBjL4JZzikYHuxK3iCCEWwnjLUWDQTS8Y7dMSMMLxAm7vDptJUdrDU82DMLbzUMec7PM21b5U88YAYnn",
  "key31": "6365ZaZKsv2cJV266GhEpJihV8dLsLF2qgeiaYCannnEZCGWjFk84WJLGe9KEfjSd99T2qkw5kZMvvjjfhxGq6NK",
  "key32": "4xnMRjJz75ibjc1Cso1FTjApPgBeNRjuo7CjbrE58mExhg4ae8YCjp1hMRXbanGcYbUWD1vQz9YxjPWcdLCSWRLX",
  "key33": "5x56n7aU78mCXCpppGvMxuveE9MnghYTbcLv2aLhNPGoPtFfSeeF7PsBZ2QYjRZT4vznp4x6YQtXdYFeHYi4hmQw",
  "key34": "2KqCaERbNLDbKrSyaX1uTWBgd3hie8fRaq3uZRp8SHWSYmpgmf8QPNYoWthZXWB22EDwMGqVS8YFLnnun6sHYhTf",
  "key35": "4kQxbeaP6mPmN51gUGicgUHjFgFUjSCbkgxJ7fWxfPPYBWzVsnyyr8woKrGUhpYW2Q5FbnY44CTLytYtboHDYAzx"
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
