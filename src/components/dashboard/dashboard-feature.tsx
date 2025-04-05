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
    "54D3RHCv3XDgr6yokKy7tEjBzLpqMZddNgUmUVnzuLs5aja5TyEDiJC5cpZ6SQ1nLwvdZxFEQ5JSqcNPTkcXTfvD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ErLbZqs5dLn4ifQ74m5tJ75CGyc6jDvHne3tAJpGTkt9P3jhqnzVcZGZznr6eVpyXZzymneCpUPzFQVUR25BjKT",
  "key1": "4L6xitMgFrdHKgUrFiRmmpadqST4e8Ly6acLmPuCNqRHvQp2ygvaVzF2EW726smxWbbacKwwZXwhrwvvvft3t8o7",
  "key2": "3Avm2L8XU8TkRepogkKk8euCRguZjdMs1UUewVXGVyYswCFynrS8Lma323L5z8NPdcBQ461f6o15Gq6GfHYmuxoW",
  "key3": "8DQ6J2of43U7yo339RmikZmhRYt6DBD9zPHv6BtsZyCWWndvjhsJZMpuYpkP5osDECcEPAU4bTwJBPgPLYHWVzA",
  "key4": "4bj9MdU7YyKigPPbrYY3e2MWK5JjwaMicvX3HgkTB6tKynoArRwsQYf7LBPcxHUK29oy13seRCtc46cXQ9qKZNoo",
  "key5": "3kBDdjECoB6SkFFdW6ozUHZdNxLPrNeNjVhhdURU72tiY4oJj8Cmubd3b9a7eUFNg7xypBAqCT8AZeevANQ4MkUo",
  "key6": "6CffbpKpFRDiYfSfXr2vzF7edreFnHzbPw2gtC5wThasNb5HZ8TgAj6xEABjJF8Tc57gwkMRCNyQ7oxcGvjW2Pu",
  "key7": "48Z3jk5Fh1v8GKr8dB4kLdnFy6FyjKXY7KsNdCkmrTbjyUtWGXW3LdyK67cGnJuUyJhSHgA6hya1Ax8Hmd5NHgCt",
  "key8": "56oxzmq1bqA8joxrSPVAfhNviTP5KH6K411HBoxMiHhxY9a3K7Zym3Ays851FpDBayMnhvWRuMKgD4chKQyrSXLT",
  "key9": "5GAeGj6Dm1p81SUShSTsRpMrtMNtREkHEGVwNPvyQNyCrT3btKBXTSEQ4bkEZzMsboYscYcyUffLM8rPxkTC7EoW",
  "key10": "5Xjir7RB5XowHqV1uyuoyFAuawNTfBa3qACnNmQYPCAakPWUjALARo7pf4wTRSn2nnVT1AXfGZyDubQb9KoqwP7h",
  "key11": "4FC1SpK1chqD2unJpZkAvKj1xp4CM3GNgrfJGTHxDPJyeuHg93FCEaxSy4t6k8jtj82qoMQwjd65jJRwN4LFzwf6",
  "key12": "3w87qTqTD98oTJPXrpEENeQSea19xLUooMnX8WZrbGy9EGrtgXX2XNZ4e4HKfTaW9nFJwSXoLn5j5oBocdMvrbuZ",
  "key13": "2fxzGZEjp2UyRUPTh2ZDtLHmam1xxxN42fQDSgpu9jhZzcJCQQuyoAiGNjt4bEiP6hH3MHxKu89XMA5jxRB8gWRN",
  "key14": "3zfst6HjXcfbrmSnUT1eTAY1n9EgAjuF1S9TgJkjJ2SDmWPFH7nuMpJCg6Fub4GHKfXdPGzmDdQt8JkuDP9bLauj",
  "key15": "57zYfDmq6v7KuFmJTaTfxPngWaukjG35aFnf29cwK21WQ7cpdpCymsLRhwetapmnWJTrMvy8d5KSAE4EqNxvVccx",
  "key16": "5yaA9sLZvj4jb2Fkv5vknp8c5GUbfK4GBTiSSptWGsr6hWczjvpehJTgfSfNXJKf7y7GAR43PJCsEBYWeMZCGXQp",
  "key17": "5zEFcZACW7yb8BEscHSyVQgW6G5VUwRjCvrrKWjJq8hpEqAEAysVpiLiggdWACyGmnaBexSz4Yk9985psZoqSskN",
  "key18": "21JHiMeAWaEqiMuKVCL2bp9ciZkWsJKwrRauKu3CQM1bqDt4KyoafpyVzwBNHjRERNhYCoNjR7vCHTtgaVJ5gvZj",
  "key19": "21xLbrpXk34Cdt5W8UT9z4DUncekfwcSuuSxENUNPczUKVQ6fJHPvGHNJfwCYpXPv4qqFNVW9fnTE6YeDja7Sg1Y",
  "key20": "p2QdVUATdfG73o1rsiLcpLAzXS3UFgtiqMoBhMtqX5GWY5L7SHTccPYHDkpyRgkeQbdjBxaV1F2EuRqsTAMpM6A",
  "key21": "2TrSjpGKoNE2Q8XTFQF54MWiS2EuVKs9BHXQyGN3VxZMCiee4fNqP1qvHdDWYfh4YKHD1gqYztvfejT9pbczxWcD",
  "key22": "3B5MXAeQBkEbNhNNBUMHN2JhDVm45fTmyBys3PXACVzsMJ3uwzdGdES3fyZzXi8hTRE7fGXZPtohr7fonMP35zgS",
  "key23": "46gb8wTj5Vx1ng6UGtrzz3JxbJJVWbDVA5AAbJYnNFPnCjMhmbraUSz8TgckBsQgyXcLZG69ShXTH1pJNweyU6BK",
  "key24": "2RKZ3CfEi4K7ZHAtZUVxkZVmHr3NYZrumq8FaqpNGzmzCrLd6LRbwcPn1P9AXRcS4ZV87ASZ4db4L7C5jKcwLRqM",
  "key25": "4LcjQ63EfWTPtraCMqCCrAbzCHUavcV5SQuPLHAo49HWDgtypfhqUthQBLYTm3VpEBWF4cwGsJwZnUoxv9pGtCwn",
  "key26": "Mv78wsUejFAdt2Ugiu87rjJU4R5U5r3e7AcfCTFxCznn8d7dYUCmdfBA5R3SJa9Nc73mX4V6PtYCtpfon3KFrMt",
  "key27": "3KQ3PcWdk4Ej82CUm6HtZeNJTKKEPnH8WBSArHDYs68ip5qwDadJNkMTP8utbhbJarpJAVc9MR61dsL42bRh7pPE",
  "key28": "5dquzTm9tF9AiPvVZG59UrR2eBbVRoCqXDvYWXd8TNyQ24H5BEMFT8jvrpzv1oUuxASRRnE9v9i9Qof6zwe7g9fN",
  "key29": "5sQVfx3X86jU4m3iwT6tk2bcB4pZ9GGj98HCPC6VFPUJxYfVsDRjL9chGWCJUumEyNFUvNpgmbR25qiqogXs32v1",
  "key30": "3WUmaHvQcLMU3jYsYox9539oy59ERtr833zoMepyoNHHKLBvmGzA6SKM2RFvzDn4EYLcw2QXsCEivRAJMkz18k3A",
  "key31": "2ZC4ymZFVc2QMWNmTqCdDkPhHf4Wr8dwZ6C6T3dZmjZQTuyfwMDAkZSRiQRTvmubmq3xSLheUebcJawm2f9FfTQ9",
  "key32": "3ccBzyMXLYjkhfgsEkBe9MeZVauuMthkd5WT8tqh7ibuhhBk2HNYphfZneJt1PZrmYgs4i7CNQZ6QsMW8Ygasixh",
  "key33": "2HnE85DgVw4gkTh8V9PphvYjcWr6oPCcafkY13DrobfEzhgFfomrYznU2kZhweqmKRPF7JbjLQPACAkUK8dF8sgG",
  "key34": "4RPKdJ51P1ZP4XZnmBQKnnHG7VxtCHqk8QfztGf6kKUSecjAcbqfWzKnAF9trM9EBN96M3vZhPihMQysTFNeBUxW",
  "key35": "m63t85JnpTxionas8kTFRhpazMgfyJgexXMsrHWQNxA9qoEgmW6BwE2xQ92oLW922hprtzZ8jqUHt9U8nQpSKdb",
  "key36": "U2brHjmM3mSFDNDbZeRArQ99CY1Z2wQ3KfxBsMYrCdaVoW7KcPKbSUGSuGy7GKXhSCV6pzpwe1j9kwFAqfJmEjj",
  "key37": "3Y7c3U3rg8A2pmjMa695NJHuVt6WqfeZno4du1QyCcwk19caQTW3LGna7qJPPiFtzGK5RdoKxux14xoTdYV8zFwv",
  "key38": "3MCuL3g6iXBAfzvwP3CejqnqS67yRHd7THvoeeVf5mHokVMq4fe4CeSB8koyHJmdUNP4idLtfZ1e5mWLQu1YVAz3",
  "key39": "2wPTjdU75gVyYFmMJULYuWHd3mNFyzgRsFR7BNBvxvxbX3MZG3vKmGKGJPPiT2FBo4VzdKgYEYajZm3nZMPaiGqF",
  "key40": "54XAbrqgPxNrQ9UbjBnFvPJWtkxGSK3GMRqGGTVXg4caaRmBYPT7qMiynbS6fRPikgwuWjr2gGWopFKzH9SDhoEU"
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
