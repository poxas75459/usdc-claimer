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
    "2VThB5cgHhUT7vs9fZopjCQU9gVTUJ5wSZitZ3qff86KFRneApLYCrYL4uTufCoAptFyKCnNS2XGW7RThgmR8t19"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NuyvcKVBSyUph57TTV34VvHyAiN4kqE1voxSsrmbVMLjymjg3BP2ZHydbRMVF4wub8GhEmuGHMBSeKG8eZWcp41",
  "key1": "65T5k1e5KfoGm4G4tENK9LiZoz9i9bbTocbVE2eZNFKDXAtM1ieE6B2kKBT8kfK2wEcQ9gYVswBVNwFg73qGk5UT",
  "key2": "298aSuM8EUUq9ibkyGyA3xj4qfs9XecWybw97iVKRK2rxF8rGDorF4PE6FzJejG58SVNiJjX9QojkHuaDfYqkjPT",
  "key3": "bbcjqcUiZzeoiqC5BWT2wwGUi1Sf58JF8aHRGMdyrnBzD4EHBbrQtmiHdE3kNcf9RGxCc2fzdyUc1HRYQuDANFC",
  "key4": "5TQPmCxP3u3Xp9mbqRGkPh8zGoPvPG9Sreew3V2rooReCnT5sXAYbqA3wPDKjjc61hzKzBFKFoFy46f2VJ8gUpan",
  "key5": "3ohUpDxfiTJoNS1bg8kb2MDVizGgqaSXWu59uyGJzuDQLBY6q1NXmi5cTQaddiLFxs67asQ41WKkxtPgUzZiAZDF",
  "key6": "3ts6UdwE5v32LBcsE9jDczC71yJdtKYHjS2dbjssgqbV3H167WwhmfuAitPJqPkFoW2aaBs4nH3U2G4hdDD3CBtB",
  "key7": "3Nt8t2jzQu2xfjSYZeDJzJ7r6pXHCa4RhXYLqjwrUJk27HCzkoBcKqJaE5kJPevDnJRy1FZd4PZTosgVmh7T5kA5",
  "key8": "3CK7Mws8Skpgu7RQDgPYoNZvUpXzHW94fXBUuAwo9QD2BJoWJutYjJnvY3joPs8xs76pCpbWerVcpbmapr8XgS4J",
  "key9": "3x8keGQ9eBXUbXknw2gvuDoXpLiHmpc2YJCg7xAUZVFP24ziS8AKKKhgTbm6Axt2sZVFazekBSh5HAGnqoDVU2Sn",
  "key10": "ESidG32vCHjMsAf4M6qXVZTud9xas49AWQFFXUuadebZ1FJCF46vMPurTSyUxMuzv3gpAgugzsqWBqsoUZYYF6h",
  "key11": "3oCgCASyAxopEfB6ior6JpwPUqs97jJ63SS5Ks7FKMmTnWfbSc8P9jqn53ZETiqcSnnynPXJMXUaYfWxLBq9wYLv",
  "key12": "5uWNqXGG2EfcxA8FDKY4BqLgAKWK1aeE2iz9GBUCh1SjJM1VcgYR2hCqSuGBMyWXBxibMt1N6jCW2BjbouLF7qjK",
  "key13": "4MAt9Lnq7BWg4888hAC453UVTaoq6qqdM5FsjCaP1dvMoHHr3su8q1r5ykEtxNAvnRK5idcw7iV7zXsxEjP8Zqz",
  "key14": "42ebFLzZ4ZJUF3RfYayC1mYLEaUe2bVWPrfc5GrmCkrYEY8CtH7obYjab81SjLYZY6SqF2iFuv6txkhLm7iRh1uC",
  "key15": "4Uv3HX5GLXXrQU8Ts4HYWRZTeFY28C8K39PNoV7HWGkFoYqMPmRScKNwW5kULTHAnqer8bmPN2Mm7VdTNQ19ZEgb",
  "key16": "31FKmcJsQDxMek4k6BF6cFPss91D3KCV3sQTWtgQhE3quTxFLPecvewrfnojVZF63Mncx4GboF6P9JHUMPqGGoFV",
  "key17": "QL2Y2tidbkT2BLwZZPtqgqrZFJCWmo8AREp3KFgVNDdcHEp5gN5yBdtRWAJ4nFbC2Z3XWEtDLGaMTMSjQQeaAUw",
  "key18": "44q32ismbEjDfFinFy6wS7FDHGE6PUFLcqqohnh32yiY5iyMnXBWQQTf5HLfK3WF5VxubatqM4dSLmHVk8XHmBJg",
  "key19": "2DjV3bfsAAB1tyW7VEoihT1tPdaG9jh7n3nWbHXJiSHkfFmjnPGodjug85irY4U9ezFsi7dqkP6JCsDAHoemairn",
  "key20": "cxdHqf9vbJEuZPTurifFETiEYSLgqQQSudVT5BJhLc7VJQ7ozutttmFLRMkwKr59yCynSjnS7q7XqdSCmsdf2eg",
  "key21": "5xSJeLpjuLi5SBw3bdq7Vz9bJyef5f659NrEFobYaZZQbKhAQAwRQaZeu5FHzTTZFkfzUef4ePCZNL46sMQdoBw3",
  "key22": "3UEpjTxZu2nSdB7qXKFGrginKhVoptZJAjSb9ADRmCLv2eLA6oZNprcwuGNzpLG4sBNk69ouvm3yiX6SQNMoT3FM",
  "key23": "HACYfD8D37Md6mNS1zo1ipTDkDVWcyRFL2qQg48wXWesAByDcX4GysEX9MzXoUeP9nZqFRETPetHqBv1zwSqEz6",
  "key24": "36H5EMYjaRPMiU1JEhBUHmL67SMNLx7oCvnREDKY52UhMScjQUy3oEGPxF9mZ9ob8bAg11c8DpKJPQw8v8GDk4Xc",
  "key25": "4JU2Y48YQWpTRR2a6hJCggQcs6NEhKeR4ojFtEpdq3cBNB6oks9cwQVFhKGcwruhGYGDN8sexH1gMpLivn6JSWvL",
  "key26": "2avU2gfbd6AKy4CcjdFyT17vS1VpuyBXa6z2ZPNxJyVVSBWgVKL9YndR7yXoCQzhgB5sQsZpS9XaLmibUG2LTu4y",
  "key27": "4uHN7MQ3XPC755zCVrSq7XPaCxK8aW6CEhYzMRcjDyqRKkh5fnXWUFCYULhEJaE1EGYLEW7B6mqQRJenf3cmL7y4",
  "key28": "3pLRJEu54ZhVLdXtV5fxU5ZbUJEAQNtjuugBJNRHKHkjEsMd1eGRX6522eGwCjhCvTcPFPB1YkVsgKfRwu8SQv4h"
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
