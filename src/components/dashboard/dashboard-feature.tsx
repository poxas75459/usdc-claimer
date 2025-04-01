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
    "2gKHPfBfxWriuzdok5F3YMZpWFp2PBRJiCuSSeF1kxwCPhR11bGPZC9CHzxB9kuS9y3eNVz5xXYYW3o1YULZNfYu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "x5GAJKbbfTBZgZhFadmH9PEV6vqTKheWvqYJFzDh34CRFj93auwwkQc1gWJCuy6ceh6oLYsjoYZvzxBZU9wmYG5",
  "key1": "3ETpmjQsZWP5xi2M6xu9eRk8H7NigyHGziUTQQRQwU1NwQp4KAyFBMaHTMaTT19Ls4MSUgKbTh1zxxL1UtFminP6",
  "key2": "Q1y8TwETDSzc6A6xZt1G3fPLCs1Ke9Dvu64uaVw6eRuHxdrLTy22QfprJ43E4McgVhMV93dC2suTHfxNuq1n2y2",
  "key3": "SLa6Zzp6WVz8JMPArpSCQaGZ6EdcwDTBEYC8iMeCapGTZN65U8n8g4skiY9E9CEcTYNCecAq4wN1n1A7hfdrdX5",
  "key4": "4SM9zfo2o3sGxgi3CYmTkUCPX8hxEGB9MDBTVtFPwVVHUMsM3poeV6krFx8xRV9tWykmpbKY8Ua77514bkPCy1z4",
  "key5": "3Jnvcky2hBuZZvCZCcetuuXoBxwLQdBHCHbZSwyd1w73Bqt7ByErbefzppFi5y6DdUbmUs5PkD36gaGxMetYT7n7",
  "key6": "7q5x5mp7yDQtsjSsc3CDnebopJYVnSeQHLmxQqNbrizomzVRxi85rUiTvXLjRGBqvWNZeQ9kZbQnr1TeRGevrqs",
  "key7": "xvvsTaayi4J4h2WUWDr6uw5cV2SAPmigiiMQ2GCdwXuqXNTtvRB9Tc8onjvrqqQfS5Zs5D4aA3RgcGf5AJStHLZ",
  "key8": "4tbS8dAhNStN45YpvKMpViAdf47FtqD8w8yZ9wyV2MuGp4wU89fSuLLjprZsAAYroj5qQQQrvAyiYNLDCjyMJdj2",
  "key9": "4cyVRsSWXRSqVXZZTYuTbDJzf19e45MecHFQcE8S4NcsyaQfELiTaAx6AvT5mjaykCMuWK9Y7mJUv5uNresyzdkZ",
  "key10": "4fPLQLLVavmxv3UwUTeXvyUCQKvAH1LzYuufTo7tjmrL5t6LESFJx5tBr26oHF7NGJX2F3GvkfG87sQoMpX9X65B",
  "key11": "5TixaNuybd1xDkaCGs4D2ud1CkRPLRFnTMqbh1U4jb3gjjm2YisK6yRx8nG6hfsZ3Rf7jmsFCUmq79QJQZ5tXTwy",
  "key12": "5K8MViEtxARMnqmaE4EgHPiFosFRsaaeTSMx4fmpsNbJrdufj2Ba1rjnS8ZkwS9xKan2gHLUBNpPWqHxoayy6M9Z",
  "key13": "w2hRE33oza9JV7XcSCvNocRuWsmsv9JPNtZ8jhBS3eKQQMb6DbSx2VGkAYP6j7GYzPXWUVkSUYJCR6aLEFQKC8g",
  "key14": "BWRbJwtLP1GriAyUTsX3rAwi8GNn7rVDdZSPa5VUZBnKqcgXNUrXPT1GTL3Uy9BahHhtRPxW3Www5QFjRgwN7XR",
  "key15": "4Dq2SDj92muz6UzEuBMxhHmT8gBJGw2X22YQLenaTedcHw51Z6gmcGid8YJia23LkoT5SB67LoVV5dgxEpHgriat",
  "key16": "2u4JyrP55rqvUi5VPd79GhUkc9wrvvpcgn7A7saT1qdYcVGo2zrAs1v5dGP9VnW2tBgXH1SXH8zbiVrfE1eRK4eG",
  "key17": "3rLoM2MUS8LqrFSqKdz8rk3hEEGLLc4kBQu9oxq7RrExNSCL7EzRvvz54htD6PU1VeiG63A39ixenAWZF3cA7MiN",
  "key18": "2E8FzWphKwPWxDi66EKVkHDoMJBJzyVJEraGk3Bkz6eCHPErt1LmmdeqkRGSk6xxENdEky72bDyc3TwQQG11jtRZ",
  "key19": "2PGtfULxwjsTtu5gdvownRU6FvYz5hJiQxpSX3SQY7R4mz8Gu2Rm55GmAg6PQx5fKcfFhhxxu8wUSXbS28QCpBC4",
  "key20": "5cwGhmaFy91MezwPyXaGybmXr5mLNPw6CTs2hYKUgF8yV7T8iPfajsY2rtVf7vykzroEdYiVAJznTPn6JUWfitE7",
  "key21": "4tdSMFi8UMPRSc9B8KZBfr2fQ59pTpaaRSghPAdUqyWgeqXX2M2tfJhu5iD3pcJbFcBHJkZ5qJcZmMiUNFTXwDCj",
  "key22": "2WJnZ8qEi69M5YY3LWPFe933ww9WSQ6RRMtSjojQkfydQ6zhQbm8ndUZNbrNdcPsxAzGCrcmBcpSoAzFLsBCuZPE",
  "key23": "CQDEHRkJykanYdouThpB8ra4zKwXJ19172UZmhEMjeYgpQtDS8F5wg7MRBe1dCNQtcbEXmbjUSfueqGvi8Fjafu",
  "key24": "bLjNKfLquaRTy1zPyBtZobf83VrLiZTbgZ9R6iTtHzjL31dU9oAL8rehTv5QgUgDFfrdVJvFUeMhZ43Ne5aUkFz",
  "key25": "3PTp8WPTEgCHEWZ8uR8ekf9wQRLB861hbxcoNi91FxGXoF7hQqmAqEAAFK3Fji8pLMxRjNvWuuPWKATthygSdz2Y",
  "key26": "2bGDBSXD19xnDqw5VxubgbGDt1sU9HqS5VmhpqD9LAZcgmC56n5A6Xo1XkubAFLdTNxmMcCxzU53VoSchxLvBRRa",
  "key27": "5rJgGqjdKJpQvvVoikAn2zNHrwQyQsHo6eeE8n8vFiyye1NwnhXySp8bVVcNTatVsEYot3NmSnNPVAk4oCBEHVmR",
  "key28": "5ns5M7vMx9f4TqVfDVn9r2d9L3fz3S6DAA6qm8c1aw6Ln1aRXrKV6pNXmFVyKG3xzdTo9af12Vzvq776n2GHFMmF",
  "key29": "UscdRsHFwMZgTtEEddkKTz4Qf2Nuo8hFZ7CsmxpRZsPzBeRg5E71a62va7HJ19cXpRGHNXAxtdasobvZfzGzoLe",
  "key30": "URwrZY3gU2Yia22YuDzcjGSCnN5Cez2Y6uB7dMY6KFpmvswSrAY7tvYE1SPeCSBaq2AiQ2gjRjn9ga1KsZLquEW",
  "key31": "5yNPeASEczR1Jrrkjv1esqNUatjwADNVvWLfxn7CkirMU64xPYU1YRKEpEZ8a7me8m7KRA4Tf7BUXtQPtZbvrEXu",
  "key32": "2fetPxhBF56GVEbSARvPJu9i5AwQLcMTnduH8UH79gHWnvwdagybmUx2vZZ4t7rqnksPT5tfkPrBzArfKXTTw6cj",
  "key33": "3PUAfWys29rPkts18Y6zbBAjjWEpGyTD5thDbPvfBAXExbMkkDHGpuJA67YJsrGvR45q8eZkeyqFS8wVgd6X5MZN",
  "key34": "5Rcn34JLrYMLznawK9CYhHaSjaYcujiBb5Aoq7NBn427UupLJ1AniYDJvuS7MxQ9trrtL5BsnS8uuRpLr3iFvKBT",
  "key35": "46Q6eRP4xyrjPxA8zywWbAixDkcUcw6WK6QutTXZ49uX82uDZ7Tu6ACiZf1SapoHmeKR4Cdpy2HRXpfxn7N5asV5",
  "key36": "4HF1E3qGWTYmHiBJJDdxVE53ZMyEYptdmwVBQWGJ5vJKaQnwfGAfDCAri7q34gRMhibhCu9JuMSf6tyS7rxovAVd",
  "key37": "5LaHtg68h6NEkoU5ABYttW2KzEzWDAqc4cbZTWT6Y1hp5FDt2M9gte8HcjiggscLh4FcbAcEQ2JFvDvStKrMhx1g",
  "key38": "3KDWdA26JF7XGoWcA9ht77CEjsHcSDi6vqafd1aZNJa2AHss9zFibMDtaLd662YHxPNE4tt7rbyra2oKf82F1P9c"
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
