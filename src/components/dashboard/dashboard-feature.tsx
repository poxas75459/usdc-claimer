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
    "iMM2gRCwJi3UinD6icMhKbLX1B2b6Mc4sk4sD1hQkiCxWn8MtWPzH7UYVMLPu9uPv8yRmckdRy9S4bJPCqercFY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ywWmwF4uo8K7vXzvN6SUGaJ4xYf3yPA3CS1gdgrh5WMZdTvPWweRAsZyM4nQ7XSkm7mM7TjhNG6LCf2qjUApgpV",
  "key1": "5bVMbcngPzd6UjTHRKrLkPJScsvMqT7A1EsHXXDRQzU3Thcdsna93EMBYPC5Pypoiby8PJvVaUX7TShWAghaQL71",
  "key2": "2TrX8Nr9ZgvBnYNeMNAUDn8EyMVD4vJyWqnRgCrxguct9mbmdv6bgV5DeTyJZUf1S1cA1bi5vhyEAs8FSVtRZjmk",
  "key3": "4oB9FaxXPQGRa7mezwGzAYYDAMtnZj1YSnVp8L7e3oAUZJhounFH39E4hJuRJGcorFZBr3A4SLDks3a3ZfFH3nRi",
  "key4": "2pRqnjK54Y1y41AuCFMBnetLx4oLJNdB8etnSuC11We5W4tvDg6FT94nPqKZr8Kknm1H8dQwQ2peZdBmNLGsiXgT",
  "key5": "2naAXTJoTfzucWa3H36rCojkyH8FqBhGrVAD2Lhrip9UrvZNkwongREhSrABXsCQGwDA6WNL61trtjdsCa8MP4SB",
  "key6": "2harkx9GWZ56CcQ7pxpW2KJFSczG3r7Dm82E8Rf423nnQXPVnWRZq3ebvhzxsEUAVozpJhihaKb7U4VqegyfaEfR",
  "key7": "5CKy1QMYeJ3oWUm47VwY9pj9F3GRmEB6Sa7rBsiVzopbotVcjRe3wnmRxzrhcPSsLWyeqvPfefTaz3o6XAXv6SBP",
  "key8": "3F2YpYcH2phHjsfBJaHHNQt2oU8VucKrgRDbZaTjNJ4xyDXbsVmuy1xYdciNF5tRUcMDtP421dpJzTkJ4zQNMepJ",
  "key9": "4HwSYHhtbTC3DVhswAV9hfpfsLmxAa8S2aBiDmUCrYTrFgdBge8dCN2RUKqp79R7X5NqtTEDVKASFoeKh167snsQ",
  "key10": "3R9GeudXe2yqeMeKRraHY3suf5mZGKC1ean77Z7bKkXfLZDtBqvZX7sQoNcr7Lx3sp9hD3QXWaYKqbuH4uvuVFEw",
  "key11": "4oRyUyfbaXS2yczxtg8eKNRCcSRpqYooR2zwxutQszDYuaf5ZBFLacQzZLspfbeW5uDjMH4vPj8qg1GnuaGu1yxA",
  "key12": "2dXwnXx8rntCv8Z27vabf49t6HYEpArZmSGAVvJPVWwogfJgEy1sJEXg7xQpoh9gP4cKDyF6HtxQKADN1ajRYDX4",
  "key13": "538KSJVEYtkHBc1wNCMAumbd619AP6qwVjCb7f4vjbm7MVJYqrL9gBF8R57CnpgWPBZ5M2yMuQmFsx8HrxgLoiRk",
  "key14": "3yE9XGMLuFSRxxPywahtzFgjKnoCNnFsXLXTxDWXMv9aNxjGLpGvMDfqWARqBdLJnqzXiPccFGBFk83M3d3YnwbH",
  "key15": "eQgoi3kd2NUZTzvrNLTcDBdLnJWHdxQUjAq5AegxWMrSu5J5hLAcsjfepWJRs5qV8qiqxfvjqaiESxJqQzFRuJg",
  "key16": "RAhc3pWhenn7gQ6oBRL5TTJzqZDazCqFCXMn5hNsQRSovGQ2VzG6zzmULPGZu7S8miFzjWy4CBYK5c2FeXTgRjx",
  "key17": "3D38vUcvoeGwts46T6nv3TMFNfiEB95gW2yR9ZexSCErstNGRBz4oKLHsUiUAib8kBi7QA1JMQzECX5D89Km42aE",
  "key18": "2CUK1VwCzvbAvv1qqNZ3SXkZi5R4s6SSXD5WPuMRR1SRjPykZ6KV1gZNHShfVaQYXERSJ41dS29VoZ67NvxCYJnU",
  "key19": "FJLBTxsaf1xxxiHFdTWr6nPjngKTmDLBe2kQZvJGM4794s7kdfq51T29LZR12ouBXwc2Rym3B7AmEjGopvDKvce",
  "key20": "mykA6JVtuQnuUV63nvMPxbKHh8wnPyVLqT1SjyxQ3wiupvUNkonsDZFjFHrjZJD9P7Megbwb6wy91zFthpi4V7L",
  "key21": "4zcRrdm6U6SkoydHfCtZaWnzPGmgVnpegE8DZ7DL1afcPvNYgEodT7kozwGAvYDPbSEPQbz9AgBMEaJFzRCeSAKL",
  "key22": "5MSytJCZ78tt4gNQqHhwfqWuyuNZpbK8PQLUYUgw2EBoHmmo6cNpgHaUM8GjfnWKvpcK8doCcEjrHPngB7pb6siz",
  "key23": "2FEykgTjz8At5xVhKjbfp4tAXNmzwBwsLajMZHU7aV4sRtXirsURwHv3x2NSTjykjLZwdu7fDWcDXZVV96TufXtG",
  "key24": "3aymJ6cBNgnpjFxiaEAUUAr8DCgmT3C8UXRvn64WD4Cj7qp6k1pmwkbb14KE5h19jytUFrTXxiLpigXJSSHRCGUF",
  "key25": "3kQjQHyXoKVKMtYbNmLiotoEVXGDd9qa7LDt3M9kAeWGaftMn1Da9BwCKPn54VdzpPYCJzc1UjNKtSut3WAp4SHV",
  "key26": "6448w7bC99ggHjb3bB2LkXuLA2RpBYpz7TvG9druAkjDYT5Afb6aQenya1FoEQ8HMbcgWxo48KjdDp2pdbYG1ei2",
  "key27": "2TvhpRSR5k5bh1Pnrvfr6Hgysa3fDBY3PqRiH8mMvQE3njpoW4jZ2ovi93TPUEKq7gGwXK6sJCW9if43YYqAYiJ9",
  "key28": "PzmMSiFqJ3DcCxoKRWqjnqbemzWbrzJtsku77SSfTUQJNQ4e8SqFgyDRytxqp7hqMAMeiwtSNGFdJrXthYmViaH",
  "key29": "33FGkNGGAizhDW4Zv9tLdaHugNyqF3gTy2KeRwau2adhp2abaU5SAXU9QNtZLd25rucNtzQde2NxT1TJF2asdJpk",
  "key30": "3XbipzK5WdyeWaq3YJZiyDXYqkMh2QEV8EcRRYKDdfGeAj9TUjJqjrJK8VtLxyPoDBWeKv2nEZy5mjcp7oSYitQv",
  "key31": "pAEtRmNmW3vUoDgkv8T41txuGdWCS8tkrbYGGiN7MkpaUJ3zRETcKyRBfouQaPMZMnfw2xRuRbtpfRfznPgwtDR",
  "key32": "62T3qyRWANXLxfahBYt7YKvX44vajSyESFrNRShm884oSwz3inNyDkvEF26ACSi2NB7aPTYQCgZxfi6pgMED6Xkv",
  "key33": "45BMLLM2eUYtpmkbVNw6SK1ZqihqnfqAS1edPkzAriDFchFWt3K3zUreoWLBuJcCwP8BBFZmcF74DPy92dwaX3f9",
  "key34": "4Nyvye2bXrqk9TMQQTke7zmS9Xg6v2Cr5P1ydEg6uHgFQ9v7LNruzgw2tEKv7PMCqGdkWbgroGdHovSNEYNFoMnG",
  "key35": "3nwxQxVHMZN8hMhVuSoy5eyN4rLFigJznrCNEKUELHGY4cxMx99eEyw4GvMJEZwjmtNoZG15oftyFEnetxSzMsXV",
  "key36": "3NCXjK9pHvTVJdCPDhrd4nMs6UxM4JAodB2eH9QkkaNPvT7mVbuBKVhMdV4Kchz1BFdz6RWA5ArRX86QH7hh6usM",
  "key37": "kmN4ZEhCLGf6oPFDPJAGryK3H33qsUD8K22NyRKJuP19WQWHEavX5Cg127yYPBd8oaDasH3mJHwLM6tZwqcJUzp",
  "key38": "4x8n3FeXpAHTHcBBwEGTBJeWxZ8E56roNwejdGKffCG5exgidZr7yofnJvTZBbtAJVbujofrEk5QXejU7eyY4tP6",
  "key39": "5ZwjVxGqbBqKbo9FgtRxYFM6Y9UXYxKBduSBPyns77PuUCmvh1yVQWgY6PirTsdaU9R8w2vDzvtrqcmJHDhkv3g"
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
