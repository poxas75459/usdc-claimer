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
    "3YAcvuVaWAviqqw175H15cST2gMwPuLVxbHvixLgjH2fn5DVT4XjDkrQDA2W9vEM7c35y7khhB5EBQpaJyACCNZ6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55ndkLVSzq9pFfB6stmxj9MH94MRYYsUQKjiC1fTN3f4U1LK2iMM5cQvpcxnfAJfSgKXmSdRTYpETy9g8kozuou6",
  "key1": "pDbADisDn2K6FtiZEMwZsWQShUuLeduJMNfniJPzYB88jqZVPjsTUWDydkeK5fY2aBuj2kDMt2oyYfk7FesD3QG",
  "key2": "2Q3oSrk7W2SrzhZL7wcff6GNXpMF5KRmEkr9jDb4i4Qfg48mjjGBYgzawVKTxRk57XGQCQHtwdQ1ZdXDZmJnE4c9",
  "key3": "4WRiq34pvgCU3HR5dYYdFA8pVmVWKbxKr2dvBLUYP87zSJJY2d8ojVHuCzK1WHgnztyAuEhC6JkceRxP3pmfLSkj",
  "key4": "3nk8z6czZaFwc1tc6hHNiPDnYbhUXETLnFWtBdy71TPscQnqdAu3W9ekT64nMVJ1echCSZLKKNjxaREm4aXAh679",
  "key5": "TR3z7D133zWXwJo15EHqBZWgyEcvGLvBaV4E39PUjJDAxKtLKXTsYPnKi9FJMDZAcWS6shMtkq7jcj7Fj4Qgoja",
  "key6": "2rADdgR7h2jBK3V2pCPw492sHQvruuEsdkmoc8iJkGs4nE8vxssuJbj4pyc2WekoyuhjJm2okG8Kv4ZkQaqHJuNv",
  "key7": "41Frt2Ewtf2ziV24XRdgvBoFvRQGmpN7ztLDWmXvMhyNn86KToGEZEgA1rjXTAMMDFwbaLCio9SKKpQkR3eDA7d1",
  "key8": "3DzMPZiEXxpaVT1FSKU6fwVFErejxQbLD4EexQetWfA8criiySG58kFi9cSAbgz6pY2DTotiqLd51Ts2qTP2A53Q",
  "key9": "29J68P3Gp62ZfoWqJZqRtivHec2mywdKDNdynfqBmrbnQS4dD9927jha2dmKtFpk7WNMKh2Xtp5rhcMhYHRwQCiK",
  "key10": "2Te9fWHwXi6Tb91TnG7LUrDiXq659EjB8AvUU7WDXt6EiTcUFnjtzH812WRy7W9wHhfXcFDvFY9mNaCYfsNHmeKm",
  "key11": "5FNVmRfVJnBAtfuHpDayyWnXdUDDEq82hSKbfPRL1YANDPoGJVYkZt8FVUTeAQiz7Nv9Qwj3ToYgR7aNAe8TMZNv",
  "key12": "Lkx8bWQP8sXLyBFKh3Q1yrTkxnUYX4ii89UiWGyAp86qEckxNCKh7sEn8esqcRJmXiskpFAW4cwbdLM7qd9z2dc",
  "key13": "2876MfdnCtivVZ7QSiUSXhbtpUVoZCE1K428KqNPaf2jzyLbyYq1iDyLVaXAxY684qmotVECg5JBXMCgDnhHkw4g",
  "key14": "9qggwxMfv3MFxVrb1JdpiR4LFuMJtFPtJhWaqHoU7UokCJaD7VguZ1rSa6LU2iX7Cofs61J1TXg35zm1aqBpzGm",
  "key15": "2hnLPRxFNxyzV5J384N87gwganuQSeF8cs8bqTf9C6Rr9R8aVMTZqx3z9g6jnq1Su1d5iMyR2pC2ozQW2iGNSXpD",
  "key16": "3Wh3Cgh89KgbZ45zugqSqhCcvL2FNMk8whEBTgGKeCug12pgJ15J8D6bSfh8zo4WG8buPHZdF44FzuYELBSiGgZ1",
  "key17": "5KuqspE1zDp2NeRrnQ637J5CD6WXtAxjnqGFt9vsvDxSd4YcxJXoDD1iANiRd9UeeR5dUsr8oDgymeMk9pwnoEJE",
  "key18": "5Spg8agrzvz296kZQPJ4R5FA4m9m1b2kaoEC4ieAdD4JytPA6SPLzJkahuYDSWaD744grtndQ455tshAEpkKW39x",
  "key19": "5BrG5gqJ9r2eSsYQb8FUvxEMni1VXfw1fNKKTsUmZDFWyrW8SULHsfRRLXzs4Vxf9uHRZKY5ebNe2GMnY11zzGkL",
  "key20": "xpTEszSbFUD2V98FKTfwzau8b44Mja39e8YyjkJPBViAETVMtuvwYmNHJAjK7x5ypXWgEBD9wfhvoV2Y1v22tyR",
  "key21": "4m3Mj8vTJ3aMqPnRg7vuc3EBb2UoQQe8hmkkjVsofF2gME6e3S5JQDhWaGzVeKMqGxEpfbEsax3WV1fsXDxeJzrc",
  "key22": "4nBHtVWKahZ4RGs32by7Lz8RDZsRe8waJfKmPS11K8qiQ6TAmFpjH8L4EASHd6jSgKLR4iHdtRmSbke1vCYv755i",
  "key23": "3hSvUQdSCdJJk5YcT1LibjytD72L9WXrw8xFkvekMa1v2BS5yX5WTQuJoWEoU28j15VkBQmhCTXXE7RdwucUC9bs",
  "key24": "6KagG2RAPfx9Gm6zZvNcRD4QZ6oZ3AxnEheQo39HThEtzMfWLgXppjVbkyAQDEdXkQiozqgHgW8SXWP9e2QdXrx",
  "key25": "2ZH4Z1GD4XdPC12S61pccM3ZN8yHgohsq5cevmmoc3JFgW3SgaFQiHS4MHvMFiWray3UedbMEfVFRcfdhZHKvwJc",
  "key26": "5VJVsbxZ5YS5ehiUpAhyvKVRt2gMZkifdvKUy2pKC8NtxoGAW6s4HGURjbbnWJFrkeA5nfcErdfgKTQvUyCx8XMX",
  "key27": "pqye7Yd5UoqZKzRgKvLQfK7To5zD7eoNUapBwyGygNF46cYLifWgUUTwdF7qkmi3mrVRTUhAWwQ74qR1rijXcn8",
  "key28": "iLqD3NFiitXwHDEJWu1c6m1Y8Vrt9DhFoST5zYCShLa1bWtabrHydxQrF39RUAKoP8fAbMFSkBiM8CyYrk7VKwm"
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
