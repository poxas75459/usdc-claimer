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
    "4B6MUQeaEpQu2La3xnXGFoNPYTD1TV1vMfC6ECTaMdDFCA1x4cqYfpLhxmGfbEwLSTsSPRX34HYSvRpP6B9oANmd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SeyiubkqPSby9xwRk9s8N1qTQ5GkbbzyYkibBMQq7QZokdtQN1TTKkTrgX5XE4vPZs9VNVHRvn2UoLfKztuf8oJ",
  "key1": "WzF34MxL3aoL9dPxistEqC2wNZsW3oEa8ZVJxMgNVWebrDCastUTSXAHu5qDbiCxx9ctkjKswWcj6YeAVHi8SW2",
  "key2": "4xPAyJ8vHCHT4YgEYH8ayRRrkA1UsPXNihkhR6Fibfpsyc27fiDNTxH2UyRY5dxVTWFvVU7Q6XUUh2HTDp8fAsBT",
  "key3": "ysm5AT7nrAsgZaaKYrVsfyg79otu9EM44vCMtCJbi5Ee7ZptVuCi3uSXAYxgr7fY7QgzUHzbc7xY3ksxrTK7P4B",
  "key4": "2sNRaCRD4gvrj6RYpRggVxvmLsQwJbY9G6jqWhVLkiz6SYwK5DJ7p8Awo5FSkLUv7H3QLwTzan9W7qukgascEjVt",
  "key5": "4W1xsRGLcsjhcHrjc4vDvTvX3SZe7CqB6JzSHqUKsZAGPmEtPTs9C8Jg3oSWWMa4BwCh56tnrZknNyc4Xc1rJFwv",
  "key6": "2vMA1kULxQAh2tDXokiphmPpSVzisbvG6MwmZq3oR39TBptr4xZB3Gy93dDwYqgbgjwwv3R2q6ztTkszvpbFB8U4",
  "key7": "5CzThr6KgSMobyBJTkfsTyCzh7PY6P1hVEAs1dDTFbo8BcdMGqnxv1P6t8ZNKvaRUn1opyeaaTW3DC3xtGGDpHBW",
  "key8": "5NQJTAsxqLFjRb7qo9GieDinhKHfjeGf6Z3fzmYhupJKjSkh3XyaWyRJqkR7hSCsW7pBwmCsW7NPgKEQEani8Q1w",
  "key9": "nNMsBe9xE4iK6mcmV4pPsKdBNT4sfbm7McsriaK3GZ5DdmBSk765ttUEnRKsYXHtX4RKfFbFNEgig3DHY5VTHF5",
  "key10": "3Dg8Bf4mTdiTUEqrnFMEccE6mWNjCc7BvtwjS3b2ri2zBxi4NiMLqbUg51R5UN7GLCngrX3J8sQrC9ZpoNbAAcdE",
  "key11": "naEoPUjgk8xg9xAtBXdPD3VYEVPdJ4jporHWdpgmVFeoLFaG2Fx3goF3TBu2ckCjLqCsihQeiP7emj3CmMAW74E",
  "key12": "4AWkSG7jNEJMHFFKDW3hv4X3nT4dGfvR94VTH6GPGvwfe6bzaRoLNbZsyyP6cXeiwwvKVRHcw7JFMXm6iAmFME1s",
  "key13": "5rTuhJxjbttLPUZLxLuavgMt17KabYuk7ZSnSiswWvsNz3Aaje4yvTVvREz3gafCLi5ttEg9dkVm5pwcL5pgSJc5",
  "key14": "5VL8PKYydZ9qF8wBYQL8QV7wrLDU1MNQtnSxNYGdsDTyWMZQDYoHXYvLPz7J8GFLKneXKZGUyBuQHd6gLzAD7LJW",
  "key15": "itV1rzQsPFg6Nac8vU5W9PBGCs6CeZwMRSeRbkiv8ahMzGqYYrsAdaAismPaDdk1HgwtWbUG9gqj1cETVfYqwtd",
  "key16": "5qLuNoKRbxLb7ffutywgTBmTmwvaPhcEN3td2DavxTkrosYfAXDj5kiLSy3gcKgUtPzhMZJUjiihwmZuKZNTBXmk",
  "key17": "2Gsk7K1gHsrcPLQez6a3Bc4RQBPRZLYpuCwikb3Ug1U6KQjT13nKg2iehA8o4YKsYXdX6EoqxqYrogBBbhYHa1y8",
  "key18": "3BzJ7n3B862kuxMHMid55mBmFEPpJNBHL8HAeRz3gDM6GnDiCdxakz31Qrb79dwn8NwH4CVWBgLBxkBPSkW4N15S",
  "key19": "4N4ERkBQCXkf5fjvtAZ63DPhnHzwp69EgzguPrS7NaLX24FNYUcojrWWekyempbQ8CAEd2kDGNhw8UEvVwQt3Gup",
  "key20": "3KwoUMsXKBQsPRHTEjninn7pPiF4muWASMQNPHioew8HRo2NRcUi6QECF1F8beDH2t53HHVnB23NQaWuKMqK6dB4",
  "key21": "4WsdB19etsTPLLbx3rufwXumQxiGV4eJnAveLSMomVfyVuBzhdDJWvKEV9J8o34r7sWuoGEv5PDxJmZnaqp1wA5h",
  "key22": "AEsYvWDJFevPdT5y5tQ4NuvQDGiuBcqxgPdwoD2T5F3Fnoepdb6Aj3gpmgL2GVBC6xvwNsYsTwAvtP4Vrqe2i5Q",
  "key23": "4soHUdUYhWVc2TuCeYDfkU4ZcfXj1uRZj8tTV3UR2hHY7ST18D52WVZ1jHygmXQHPwCk5o78WXCgmGtGs1hY4cc3",
  "key24": "4owpPSbMnYWNfbhTXiYxNqDiYkm5KreTUPrG6UWqRLbQLXttUPdkmKJWSSBLi5Ve59TzkTpTqnzZyQjgJswPp6mC",
  "key25": "PzrkG1EQRt2nVigAMBg3hhQYeA1sXyChiMzXbbzTKEUqPp8r9CEY5gtWBMsCSEDGRAExEHKHj112Lq9BNGLukCk",
  "key26": "3M58aCQUWmcyQhpThTja8mQyWToU841LZhUuvEtDncU6NpMGgaBxFkDDFmQHFArGToVqp9AikMLg4ytcX1hzQnpm",
  "key27": "kntwW2ntirAkZtZWWvzNXJsS9NuoarXPuNiBhjSdMxCeLpPZi4tkdKH9cqWHzYJFGksNQXvaEAwcwe8iBJxHrpj",
  "key28": "4ruhJ1QhWpMoQcR32CP8f4DfN4KfvhrvU61Wmxh5id48wxVVWYYmhKmqmk3ASsPME9LYvYuAdbzbxqVBsSkk6u8h",
  "key29": "3mNoapdNr29v7JtbaenWuGxmguLrz9hQLGhtPMnBmNv8xBoLt7QeteBPTFjsgxJtWm3gnye9aAjKXxiK7YJHFGPy",
  "key30": "4ed1oWKGZExgdUgXKRwiNcwwPY8kCzATFf7BEniSpS3wBXCK48xcu3zBgtQQcjqhhW6sZxGggbSyMvaHY4hWK7E2"
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
