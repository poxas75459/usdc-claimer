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
    "3mznQ1M5NzpX2V83uFwHW4aPHPh1TN2FwQvWth37c6mpCxW5a1V1TpEUJZWuvzeMY43Dcw6HF3WJAQrEijAoKnaz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fokpYWrHZaA8MpmwgvFY6ft6k9mMFrPnYzZTN94datSLPtmk9RK9oChKTySnSHaNSrsUmwL1wouyqqqoZLgyNAT",
  "key1": "3vho1HLNdsSua2Vn1LcYFaSH2hrh5M6qjecve2CPgs71Ac2ztx4WHw6Bzi9ULJJRuMBoVQupwCypSWR6pS99kwm4",
  "key2": "4qvJyvz2A1ZkJmdMFCaRfD3YH39ikHGu4C7mQFaaFsmdPEia9QfUtYE3YagtaehsxRz143u4g5QcS5tGMR2vZAhn",
  "key3": "usogzPpR4DbBvKfUYAaeptpiBVVYGHEYxCxxT9ikaZJ6Xc6kDDCKDim1Eb64JgVsErbDPSPeG3pwy24PwscTWbq",
  "key4": "eYWubgG6ssY2gpydv2ejsBcFDwBhdUy5uwxtfGTiSSypdoJpqjExhEVcSipiEs665eu1waDqkDsiLrshjiQaoJ9",
  "key5": "3eCcndtHvrEGa8TnHiksJM12q3nnpVwBmXtc9DxxRkn7CkqtMheWnFeyJBQudjibDNTZCAHGLMZqTd66tXjMQjC",
  "key6": "3aKrjGuJs6UgkLMFUoKUv5BrZcPyXpjZATkhcsefQFmr8Z6oBM1zzC5Jt9G1WoLFYnbNVXZvvGzn1AJgKYGgGzfu",
  "key7": "4gVVq9o1yGpVhfgCVMZUZRKwthFtJ6QcKGC9FDMA6eujZPmCxwEpxW862t8YhLQANVEhfKVkt7vaLoRowhASCCHG",
  "key8": "qDmzj9RyUw7FfYshBz4qLjKBqDZt6NZpRU3ARB7eGyHQF4HPVdqnNmZJBBgU9rqqPRRC1WEHK7ivHY8r74K2y7A",
  "key9": "63NwDmbKzuVVa9aYqhygKJ63oJ3t16wNZhPwmJtVs9sWQ8nSGaPLhiPvjYpz4ASQ9dERLrauAtaPyhEUkyAFGECp",
  "key10": "KyJUjWyx1vv7cAsPjgUPsVt4qgM4988zmna6pRvdtpfykzEWzJN15JP9bESmEsLFkQMqcFdfossC4eu8RyZwZ1j",
  "key11": "5x15mtXvR6btZ17ic2PQuffU1PjPc7jqwjhsszzxErNS9TyUS7VuigGSii6q9XWFCPwGPExiKyVQW1TFqYogBiK",
  "key12": "d8HhR7cGo8Bcar1vN5YzCC6ybcBkcrxeaUyakySotgj2xPGZp5VxMF8dZxrhKZY8ez8BsX64ZmK3vqfRcUVLfoo",
  "key13": "4956txs1gqCykUq69StFvk3mSDbVEGEWba47GgBzjU3tDBTbReThqwxy6ZV73gjGEBWrwj5536PA18fvEc8Q6kQ1",
  "key14": "hDC1y8Xr5oVuTaXzp7kRGk27P3sQSgPWtPV2KvifkoxvrotztG6SQ4hM1FVq3mNfr6y3fpYGYEAUNxQSQoLJekN",
  "key15": "7dC1RzMULYqX1yqFnWbeZkQRBocidZVRW6N1jrTuM456G6fxAa6iMa3GXGARYFN1jXA9Bue6mvHPpgaQ274LBWC",
  "key16": "5JALT6W7tZsUJV8CEcvPHShub6B2F62W4Nf5qkZAqaGbpskX2cxi9RSC6q1hoxt8WdFw2Yug3UBW6kqbQJtbGmrb",
  "key17": "55tpYUJ13wuhqtF92xda45i9s7Gvn6vfg7dPV4ysnxu7rt3F4je7oBzDX3TXKP2E94or1iqsqkLFiyaSJr9s5A7U",
  "key18": "3nF21cuXV3Tn7QPxB77furtqXdPRqxnhax9aCPop1s3tiENQuFnfsnx8WUBTXjYVC9QFXhSmAFv6Q5o2tC5nXmiw",
  "key19": "4tZToMUade7JPqeNm13LMa3jzdbBAsJpuJuLSjoc2fpia55PY4MKJeQhXs6WRKQx1k5CCVajFs8sQzXoBYXUhXwt",
  "key20": "5insoerQAkwxS16fk8AMicgVH3k4YHqAV7FuJ1XheoHBKUDgP8uBTXFxByHCiSC9htyqomwjkmwyrMVemQ9k6471",
  "key21": "iMbajjYJCsMyVjJ2h2t9Jpqi14PgrxSVx5YP9A1JtuyLtrkHSuMVzoaHVHruJNHNqNKNPW64ozFUXYnCYCyY5iU",
  "key22": "3SSJyagNTSRVxhnRtCz7GEbodukkzhxdxQUQoiHRP6nqXtdQ6bNmn1ejGkqTUKayosVMRmSVmhUgLF3hVK5YrYmS",
  "key23": "H1eRop63t9qF6LF4oTfjYKBDXyHT8JgGRznCaB28oJeUkeY3uAEn5LUKp2QoYyLCaqHqiuewhf4tAsC31bJ45Sa",
  "key24": "3iCcyJu7k4s798iUBXxTXb7XfSoUrRdtccrSEugtaW8V2u6wAvpdQ4n46DgLfF61KFEphQBZVRXXFSmHPxxs5fHh",
  "key25": "3dRKCKnBtZmrvayppZiFwuox38YGfAevZbMReh5UyYtZXq14qy8KTpexAk9Cn1uVQCYx49SXfb5ozvK6fSCdpMiP",
  "key26": "LMJY1oKFdsJhJnWJZP4aYSW3ZeaKFswfyAVfo65K9KxCeE3SZEan5diYAKnvZQB27Ztq93iHm1jgw78FMQfBkDK",
  "key27": "3bCtdRvQqSHTnWR7UYxo5yZay9iv3FgSa1MP8tKH7RUM99v7Kx7QGVK7PwhH6BhHLXKH9xcgn5bZkvahasChtfYc",
  "key28": "2Y445xPWrtvxEUhDTyqQ88UJjZuoLhepzBYxAmbtmLwj4HjWpvRmN96aNyB7nGeVHAo8Mv1S7FdtUTYAwBH9m4Cf",
  "key29": "7V6McSXx45qFJ14EGJ8EtiAmXKf9YQRrtQWFHjZxS677qGPZYsRjqxJBA93HNeFKEQ2616vA3wHHZ5cHkbeFo9a"
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
