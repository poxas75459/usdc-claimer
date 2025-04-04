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
    "5vTELJ5FFQ9i5XDfDziBSVF7NqVqVAZ8FHtnrSai2W8Vcpx9fidXUcH5aKm8EiKBQA9h6nMNs6s8ewiDmXsVuH9P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2crfwDdrRhNR23ykaeqW3LnwA1zgcjSMub7mVSR2z6MXkeXBmCwEQWZWFpZw4YsDBkqVTx7BuTyigS1fW3CkePaL",
  "key1": "4a6WeTqT8J4VSqi8vVbgZTBGEJ1K1Q7FMBDHRWnDPiMHJA4jvns9jPnLWRodVU3gzYQDrQCTqM85mB4gz8Dpi6Xd",
  "key2": "fa8HKLSpgbjuwrC8yNzPFaasAWVKrNWE9LWmhFA1TurQj9V4xiNG6igv84gLToWF9JqFSAQqtowcgkE87ghF9rY",
  "key3": "2CnHjjaTruj2GTbSHaXEk5uzr3i9NJBKz1XPPhiYM9k1RgQz77XX5RVSoaYGpfYLdRwsV3wgUZT9EnkyKmS7ouEc",
  "key4": "3WU98VPJVj1Vf9yVk41WmFkdgPCJS5zk8vsJ5vNok8rVoNgxLFdMjfxtqYprggZxSERQDBTvhgcsF2LLRtAZ3ymh",
  "key5": "5QJMw43f477oEL5dsMTtz71GgQ1jccsdRfFhLzLvCp3NaJgjmM1q6UMwcbbpsHpHssSCXzLgsm9iZXHDBmez1g8U",
  "key6": "26Ds758uHdddThV5UbaAZsHNbxFHe6sUp4FtMSthcBfPCPPfaAhuYAPMd3Xedqji5SfXpSXSXHK8hcKRRTWnTCEG",
  "key7": "4MgUutZPRSiZwTU6QNf8yrhnrGNM5HBKj4Zsbt7ugDQkFemnG6a3JHhXEFEnzBEf5wdLSxxGvfa8MkifMa1cGKWX",
  "key8": "4hXmgMbTBR3NkUEQA5DdGeMmxDMndmm4Ve7BsUhLWJKsJCkyHwKeVqdArnSz4NuDGya3t8xDHMzi6Zw9Byu9VpHp",
  "key9": "313HVaFJz1R7sGtLsFRVSKVEQpbdrvaPwZdY6wkftrGGVpdxVm5o6jTdLVFfWCnyTEFdSofkkYRxRmmHftj7Q9HU",
  "key10": "3yvBzw5P9GpwUAA5zzinEcpeaDcpKYcgFVJiXALEMJZHQ51UQvT5vE4rnzVMbrphWbsoiq4hnbjfb9RJFm14QF7e",
  "key11": "59ATWV8fEVmmSiuH5vVxYgLBN34TrAFpNLB9pg6QoFtQij5uEWCU9vV3J4aXNzAiP5tmnZY1tFxQq3x1LoZqML8D",
  "key12": "2u32tDX42o66Gtie23t84wk84Z3UQ6kmKwrr8P4V35r7iALiRn5sLQKY999JbMmbiezBLhikiLvvmELdzCPFNvNt",
  "key13": "NvC51opR5R1kdKdTyYrbzzkWKxsqiMdhZVgG21tgLMDWAZ2pP5cirwGA2kJRgTCHordxRgWkZcReRm1HHBZtWdS",
  "key14": "5gSAp11XP9c6QvNPNF6fs47Ucz9kyZDDEfRvVFUVyASr3W3vio3RfVse9j1nPJ1TPYMWbwCXEMiZ5Sg57hLLpQdM",
  "key15": "2vSVzD4Y4XERZafZvS7FY3F5X8zz7aoRcWuMhhRyEz1v2nfGYfAbqmCiHBycQ8MWWWuHCMCZ1NL1EhxjwqedvYBY",
  "key16": "5SmnQa2Fig1Yf6ecFWNi1Ydv5V7CwZFobXSiLaKBiGiGwF7RZSAnCRbxKjwVmQCZGPPZeif5wroTSUE6bsG3f6DM",
  "key17": "2WkrsfYJbyNzzkngGyJyySj3CN1KNMrLzMsE4TR4gtZREsmCzY5FiN8h9e9TbnqyYbjq1gnddZzuX7Yx9aHNuZVi",
  "key18": "HrquDZVL8dreZPaicUYicWVc7q5GYc5tJaYmEaLPEoZydJQfA7gzoHLF46saAkFjHfSQRjHGpj4StzV9qG2cK74",
  "key19": "5ZfXZpoeSiDovHRUoBsVk4DvNPmtChaPm4oeFMo5vTtHKNHKuaJD8Uv3HESXwb2HicWCDnyvhUuQ3RU7EoYAdrvM",
  "key20": "3uBAqtE2KNEBCwcrteREWkmuJcueKiSd7UjHuBqdFCaT8rx7Nf1hdQjc771YxqjkNNs3eq7gowQ7kUFBk5KmgEpT",
  "key21": "4vTH3SgJKZGHPLC5daFFtqvYVUErGumQg8PXqyF7Ew8RKh6ns9xNtaXw1hEN9vk4yzrcGbfj3C5XQDk5gfF1RpLd",
  "key22": "243Ndfe2igxLK9HXQceWYJkxTbrdPeb6i1DvoTuZSVFfrVt4csZfe3f2R1JkjWoDEt8TR9ExK2kH8mQXXLk3u2bk",
  "key23": "4iNGungegawE28dPvqTNJRbXgAd4SvXx9hHbqYYr4AYYaZcJT4rCr6x2LrfwWXGWs372aKLGxRAfCxMCjcho3qz9",
  "key24": "4UoWaodJyVBMxoYYk3kFovtsQNX9PuwXHqDeRvn1tkSygy2a12vtV9xZqAcEJsYmfQvhDow8BNae9ncxCQ5ADH8z",
  "key25": "AGxLXQ1U1kt3P2Nt8f4tuyYsRp36mtHiNrZ3fjXdhziLqrP84HwUKv94oFEVM6Ng4NZrceH9b19chvCYBoB1Wfn",
  "key26": "58kL1bQjxHbGdEDGmxpf5LTNxGaSBSU9hxqZZrdNimPZLFwu3jxz8tSk62WS2LhWuqCAbLn8ooe1VZKvGThbFJtu",
  "key27": "4REmuWYKWHNyC5YGgw5GcmmzfE54akiV5NmWWqpo9iqS3fhWT8vhD7VrTrN6LCfPLrm5MwChodLiaHV4uxL23SSd"
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
