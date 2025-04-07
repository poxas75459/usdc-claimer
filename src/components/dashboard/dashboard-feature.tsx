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
    "EHUjJYP3XpKueh6ijHnqVrp1U5nCQ94eeiFjQsamhaeQFh9i1Rcnv51kruuDqFCa5iiRceg33kNoJUZ4TNZJVCb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "398wyc4iKnWHjmwbcDcdaSWmDV6jo4cXayBfbQCW3k4ks4qXdjMhj4rf6J8o9dnEYofL5jUHuVVQ3HiQq8gtCR9r",
  "key1": "67dSwChcxKa6aASZDmsa3dWEheeV2gqPj6yZc3w8cq4ByWpypSoBeifEQqpgqZBqrSNSiopmPBkTQkwbxYqyruX3",
  "key2": "5Lx3k1xcgGJ87UQaF8Ngug6PMGMXFrYfnQoh9qbqN6mPW8MTrPg6Hy6C5aTMf1K27BrwaHzxFwcasU5HM6kN5r3e",
  "key3": "4c1xzGboopBCpihZMQ6uj2xiZu3FLmVAtwTDZNsrsJC6Q8qF4nEJVX15UGFrv6Z1tAFAPsKvP3tvxgmBejdZMjaJ",
  "key4": "WBoHsmrVZXr1orDEu1y9QyDRpkFpoSuWTLh96HevYqn9sP5ULU3FDshdP23SAESY9XgbjCcjGzE2h7rwsdfog7k",
  "key5": "4rZEFLajiJTvNHtfsufFeb3qhxgZLAbnLESeok6t36g4CUHKVJQgtyoBvKqXfA5eMqfAhBDRXMTFnZx3YcQwaxLy",
  "key6": "DfcbFxasKAWmCGPRsmfrBAbtpguM5uqESL2eZsihHWxi6eGbXBn19pMRsNpmAkrjxWRVmUVwos2Z8Lv1NvFyqX9",
  "key7": "3R4jEzSJYKHQ97t1t1CUYAiAVeJ7jKN7iEHprfJeKtH8TZN98Nt4VzKnsDe8Grx37uXEhomedYgYf87mPYnfKN8o",
  "key8": "2K7Xq17oiJagUmqFWUHedpwxt3ntmz7Wiy9EyUzygGhj1w393m78iJ9XAySPY1JAkN2sYyaGzS4tSKHVFkjJjcxb",
  "key9": "5p4pg3RPFhWRaUyqUdKSPjnukapUYcuDyLgzYRmN6znb55H5jVJVEg8aRwWVgx3RuHWM5qsKHtKDkPpPs6dkiXhR",
  "key10": "E1RC769cpnGboCYr33kCL5ti7WbjBo9imCae5MtHexgSkRbT5nTJbZVUNFEPuUvqaACJvWrpjLXzJ81XeqHJdBZ",
  "key11": "5iwdHgLHAX5PuJavkyJ2AxwrgLyFeKzTBJR8Eq5EczVUVyyDAgya26QET8mb1nnJcfh5KMpkDFnuxGp6HSDWqmP",
  "key12": "4ckrNLeQaLijbgajfGE47fSXkyGDG7iLjKAyPo4u76W2MUTfwjgQ1rjd5rQxzfR8FERiZGru2WGAgEgxpjJQyZ6e",
  "key13": "wFXftnKnTrL9Zcu6YPARdiPnvUEoka17KyN5gE1o8aS7wcoDW6oEkxSVF1JPLJVeogBM3ywCffBjL1zLdUPxV62",
  "key14": "VW3iJrBnb8A4ihrV7CCp2jfbtAJiZv9KaSaLmWDEyFwdiL7QAAXV1fYpahp8DRb5gGcSkC1frhFv1vA5uBPNpaz",
  "key15": "4RkYzyjwKhG18DiGaY2kN7jtS91uguvmSiUxHXQSfWwxaDDdQzdYsAicdpQRw25Mrz8oHX2ro5h2AnqJZriMxCVx",
  "key16": "2HNkVbvTWRAoucZTsDaBdmDUVdRRaQSv7p4jHEfBPfCczeumWW4Pt2Sq3VkQfzzxtFGQ2yfGP3onqxPPCjub9Mfi",
  "key17": "21HZMnEBHZMAPKn9vqgYwsB1WwBpGvuSaxwpfUsABAP4ZhhJ3z1QDTxQN3LDAwGG2QYiUYojG8PpfAynmPt6Nggd",
  "key18": "2BwHN55UdAcgUSYw36ThXCJ2zFbjZsABa8qTBKWgcDkUXdpkHseTk3hYi75TYyuXouMDsh8PcVMVg1CGeCLFNFu4",
  "key19": "2NafPsvbEVLKdYFJUGdCeFB7EUoEp9AEJdCzYNDRYoRzPmTapPk3uZ694FJJawkZJbjoLmVF61PZJHUDTWvhkQQy",
  "key20": "RYnKZXhKGgEaKYtD3CkEgRBRYKP9J9Jt3rYVfwXLfpV9BvGvLk5eSSj6GkTZ8SvShaCx1iTBHiAzLG57rfJDWn6",
  "key21": "61e76mTnYJL6yiS8JCcYwFBzc42ZXdio7CZa7YuQLkgMEtcLwzo1doKVAEMyvaRtRF9HFGVy1zvJJCfLGgRNNiHq",
  "key22": "tUKZGanaJPeF4J1F8PaNezUDoL8vPJLJRTxbHEGSDMe7qFu9CUEjDV12XVXymV2VFyvxY8xQCXdBbntz3Xj1XSH",
  "key23": "345wkcLwqdm6qp6rBtXCEKMPUNitfE5Xm74XggM4xfb1icS5LtpoMEAvGpUDx3fLPSmFF87Wfr2zNaAZPU6KnhxK",
  "key24": "52S771ASc4fUqLBqU2RHMTMdzGBvTBehssrsKd5YDXujAWCcxyCKchB7Tj7jtWmkxQZQeN9vNV2sSKqyhbwEuvBh",
  "key25": "4NYnqSj8J1Jy2qmpzRf9WKmnELgjGGjRLsHs8iTa5oNUwMRAeXr2f5VyB5VHsyfgE6fRuumVSPdP4vsF5cnHwb1z",
  "key26": "4H5vSAbnxFeDN69PGm1jDSDTErnUBLAZzEZ9tvbj8Wj7bs2AzKdVXjyNBroBqMDQqNPMVqt9XRgZYN7pEPPZUYJK",
  "key27": "4eMKvoB4PS3wiyvUXKwRNXCpYN1DBa3TiAfpDNcENbjUpyDdioHRewrzqH4VDWXestrrGwLkFLFq3JJSJz6o4WAm",
  "key28": "2QQJxipSM8cQ75NJDb643yrcHURAcPydjWizPysY5LGT93NveeQ1ZWRrtcYzVXkjCniQmpujq8JD5dRH3RukecRm",
  "key29": "5suHqLgMV59p7HqBGTb3oZTPbsa7r5uc4HZEc5RwdfeauhwhYJToWL4dscTCEjWvhmdCnPx6TKV9cTGYcqq2VhdD",
  "key30": "5pszTs63X3FZyHGvhkYUEJ6aFjmSCEkrM52J99CgGJpaRQmJiLYSKEhz2pvFm5Zc3NuWh2jaTXbB2CbpsDb41x2n",
  "key31": "2ELBvHyrQaEzPHRFGF8E2fQ7JiHYhbfzANhQgQchCjnd8PdYZhAbQ8e2p4d6t6eMfxD2wUSbZvRzYzkzy9T12NTz",
  "key32": "4knzkENrxFuKAV2bzygYTef5G6kwT2dHMHtWK7N29wekneGDjqnqi3KHP1RTWk1txALt8C7kUCLPp5VTNtTjgyoH",
  "key33": "4zqkNpG26hgHzdA4by3AdX2B6TRvkkgs2Aanv5KL2bZ1ADqefbsR2iPoWf5thX3rwNqDAcCANwv2AtMTCrz6jnp1",
  "key34": "5yYGaLXS9F2hGsNn1m31X8iyn1vXpBvSUxAArvRryE97gvfU8N5iWyAcgLa6g8fWkwL1ydJ43rgg1yHLQAZKmHNY",
  "key35": "4dCc4E55RLAZfG5DhX7PKWoC3JSLXwP4G1cQjoah3S4CQPUV465XPp2nzrs8PGP2x2waYKk3QGWz3Dw73b6FiXTG",
  "key36": "3YMrkeauxgZihQwBdRJD6tojkWL1vsLsavgqAhvwHxwg8TbTwMa6dZShoP2GYFp8t7u5D2UbCamHjmCx4MQVmPH8",
  "key37": "2dZozBeQhzLHLNSa8t4nB4jefmSo3pXjMeDLsV5NFdSFBDDBKLPrB5Z42ZtQy9cuvynciRyY5voPF2QL1xjzSj9a",
  "key38": "5Y5jZhbZmkdaGu3fhgsJdKZ15QbSmBcynaiV7mzYsn6vdTjgWQQ22FWk4z7SqBAp7zrwuSd1mKWLopSWxjEn3avm",
  "key39": "5gv5LXgi3ubRNwBxTaPXQbJ81UysrMbYfy7DMP2k2iGCmnaCVKVR9EBUJRLqenCsnfCBiwv1K5YJFwkUGGU1mdwW",
  "key40": "Wi6PzryqFvZHssJvFTYj98GoQSjKX4xfHzinuqfr83usChEtLRikS5QHqYxiWF69BrFszu9SgUgWUNmZfmw85NH",
  "key41": "5Z6E894bA9PbHggBK5KhPrNmCUXzSNrWn2hrxRNBeLHRHwJGVurATfwoy6Ck8jh27d2Tjyk7AFFs86rYmUux4nEe",
  "key42": "2QN7sNXU8ZFDc1m7AF1mQMtzeULC5FiVyPStwe2c6A9NevfGaX89QE5awVH5nEKhQS64LgThfrgTLNZUua3h5CDk",
  "key43": "2jb3zkLYUnPpbYTwiB2nsuCPAMLJBhYfLiVjuHQKX7vUeYHwSKEZH8Q1uJpc5ceY4wnFVWXoc48RtV7MZqRsnxjD",
  "key44": "639f13LegfRULq8iHDhB6peRdChusDQdAFWQSeMAqjMvve3EgG5NZfz2pXU1b4uQp9ix7puVq9DfnqWU2bHD2jg8",
  "key45": "3LqB3HCAvnQaEKbfuTmminPdxKPDdfjay7UXvXQYLYLPwppCa3t5kfi7jE8f5qdL2HvEGqPEmfDwaTPvFL9YC3vC",
  "key46": "3A5RixgvfYR2siCzDs7r6cooNKMu7L7PBCvSAmNAz7RxuV8EKnFmv4JgSnUxd74wELr8oeE9Viz6KXowuoHSQsDF",
  "key47": "654oqSJFknj1y7SHuBxcZh4ALCTbStWdJDQ4uJL6JPiELKueNXPwW4eNof8GycwwrnvZy1ySPY8FXZYXeU3EpM4h"
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
