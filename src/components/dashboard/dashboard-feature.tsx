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
    "2sQoij9sm3ASJvky6xEDqkmmz9GAutfgQz2HFhmV4oP2nTZLVmcZkuzzZ1rT6VFsZrR3LEtPPh8GvsHPUWBybj6T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JzfCWkeEkVgryWWaG5AVQRbYXkTcL2MwWY4EhrU4m4M9Dj2JoxvXZrJo8qWagao7H3YWPjobqudZjkX6NVfCDCa",
  "key1": "4fnwM8qHmyLRzEGpwkZxZtgESVNFoD1GKdbPH3HCaT4No4AoJuwd7ZDdrUfxiwPxPKZfuNctqEXyWLncei12oKNG",
  "key2": "4ofmC1FkRdadorxUhHFJgnrVvEYJbHCz3bYWWBZm3xo13HevEp5TTxctNCYnCzoFWFGL1NsPWKXBmpq9zj54MHhv",
  "key3": "4ZZmnjhKGRgNg8iLZAY3sFRNjkzDdkugXCrxshK8oATKVi54P72D2u7FGdgMS46HnvrkpjBpimZUcARQoMRiwQYv",
  "key4": "4oPcCyBvXdqYsGHxuz8T6Kx3SuZLE24XygcwxrR3pJtuH2XV9hnPwy2emZaKpeEQkfsgj9cfp98aW7U2pjE9NFwH",
  "key5": "2AiYFtT4vjKH3xqxVHRKjrGtYXG1mKY8UWg4VpTEQhtkuWdtD6v3n4ZAxhaV2Q1YDTDfdQejcy6Wob5BLgGSoPcq",
  "key6": "72e1yq1httEto9ftg8oFB1inktKqbJ9aSyjtAZDcZWee9DRrr3BBNQgXeajxhphAnGXyXMqscVcjKEWsMDSwuZg",
  "key7": "54wXU1brk2HaJkj8NC9CRwCDd3eb5PG6RuNpBmTdzugjyp6ULji9EJxpg28BsH8xB2gYsQASnzEiPPHxgnFUZ9y3",
  "key8": "4K32ggdwUUTinyifQ3xcStkeEEwJGNrUFMUB6Gi5qT57ZRo16ig69s4R48pKXDRYYfYeCKP2xksR9vFxYdS3GUEG",
  "key9": "2KWDSQDG2xgaUsFWNGj1e9DzgzmT9BLgLrusWHC3tyK7N92L1apbwbPNBYfAwzdE1LycLWgKVtXgHzQUqxnCM62B",
  "key10": "kpz2DbgayQuU9Mgw1gGhe7a5jYqTQXe2cLu1Gj83x1gBs9Z4Zc9vtUxJSfQCczzuqWa66U6tncrfcJue6bc7GTv",
  "key11": "3kqMee5jx5ZcuAfG1yEGhHqiCWaJh7na5MrryKDDK716M2D2VdEVhS3SKaTrxtMeTKEjXAjorznKgGotGtxCda5o",
  "key12": "3ZrvLx2GCuzZRE8fwmaMBzdHhNZBfZNHHkaAxD5PBaM11mPLxAAWPwsWSVyjXTd1xagJWy4jPdXV2d3cF7etvX8e",
  "key13": "4PE2oZNq44bJRyo1cRbhDC519iHfqa1ugZoui8CUPjyndjCHgAVk29gRwbLyrz9b31Egy973tuDLRyHBsoNBSE93",
  "key14": "3QGoLNgNdNyWm1y4tVu4yuotAGwbfPb8KdJWWPrqLy5SoqDVK2qPqmcPjRAE6TxJXRntUyGV91JfRaRjdC1fbHu4",
  "key15": "2GfAJy197Q9ALjnk5KV9zXfXuqgNWWVBVfQHLRPYHWPeb1gpFL5EsvJHo9cfi74Vk52VYsYZp2dRJi42equFxXv6",
  "key16": "5zBg1qXnqyUcPQPECR6XZUuQXD7BHeCLNFPHAGbj6nrJKnFCNURGhQUmjEtwyC1MjGoivL1bJX9WNTBMJ6SLekmh",
  "key17": "Xmks8apWvrLTdJrMmuNzwnEJ7iHrs6KDsaupczVickJwjJkEotxRRQwBZYXeAJvxYzqDj2yDDgfvu7kc4J5Pvfy",
  "key18": "29AKSxBnvMrUV3ZSbZHbHJ19DvagCqiAyK9EYjvhwzLgnZp3qiP8ewnsgTzqGa35juwofqUfoYwMHZbpx5pkkh3K",
  "key19": "3kVx69BHxUvQNFvkVJBi4pF16NKKbiUpej8vqFefcLvRtakpHCRTUeaLs8ceevvcixdGABejckjsMktq8gkXHCCo",
  "key20": "j2jd16FeFLCw46SxJMBqE5eHrwNbZVuW4ZwD5RFV61o9W79cH7Y6vUqFMWwWtB4c8yCthpfTwDLhMY4aNmquFkx",
  "key21": "vQmjEEXJea3vp33qWBjP6bTuUyDSy5yi6iAkcdbAqkHHs1tU2eqwqjzREHHx9Wgx9LXgqQbTszR2S2WGuRb7fZM",
  "key22": "2SpvzUa7cxc1sEV2RH6aHtbxda6NwRYargRP77NR171QAFSuj1fGsF85tFfXeoiXUVft1jzSyFthUbsJt5vo7UC8",
  "key23": "46kz6WgkyhCa6wqaZ1b2ConJppCbehw3sMcqfQ8pFGpg7KCUFfvUvM8G9WPUEXBJzYpKbZMJfMYao961F5FqJyxx",
  "key24": "4n9AXNK2komc5sPsGqZbaJvoQdS7boHcmdvGHfUqghjEDB5HUuw5FbCytaM6HgLUU5wJQSyd5PeB4g2qkcDQpL3D",
  "key25": "3mK3td69W1WcB7Zqz53MhoD48ArtfeerdUEbwBgztwMDg1pCEZpS6QY842s9m4FE4htgGibVH5BeSRc1y6rrCXB9",
  "key26": "oAVvhqZnaxWPt1ej4k5w1TsAZv5BznrE5fwjzA6qRoGCJcma4H55TfHdMUUbzxPe9pnvfV138J5m4hPTgjYCA1k",
  "key27": "3LRTUwJYxoDGGozZHSNbKnsoEgq5hvMV38mYx6gR4zVcEk9smDB9BsrqizEYJkzQcd2zGdqzmAgAaDXLVwTGqbCa",
  "key28": "2LD5S3MkPPYzMJBhcVbaxs9go6hWZpNDrVcnTsaJtYMdDAMrATBxDFNkbkJonooroWUxxSjkPYv1zDRXkTwZnN7G",
  "key29": "3xHAZNQNBJGWFY3p7MnW29UJ3U6HGpiAbz6Sm9Sm9VfuqX7YBtMmkdiPxUsFX9QTf3qJGKFqKCMqZNg7w6PJSGVh",
  "key30": "5AA49eroQEcQsbDSMLhcPHDKrvBPQFG1gNo1PXSCpX84dig4eLpjQSufUwinWZ1PEbf1LPy5z9XbrpDHG21r8H1E",
  "key31": "2Ay2Vrwz5mWykp94v5mGrre39nTEyQdbtihiJZy2KTRXuqdcR5NyycSJFGVqVE2A2NDe66JaR2pmXAuCYsVWnFMA",
  "key32": "5uweeVxY15MD5P1tu91Qdiko7e6jS1gCurpL8Ec4Hze6pWvoMbEaRd8LmEDsoCmaRS6sSv3yfQFB5QgYvkB5z1T3",
  "key33": "38UksQnuigf4WFgS6JrvCvHe48FyHZHEZU526bsfktTZ9dq1wn9N5TDJA5LzHSoYaDsqBaMb7AeNm2xSnqK49GLU",
  "key34": "4Z8FdUA5c92C9JiBwmfn6twkL7tGEYxo9tbH3KfRasmaEM8WjStGgDXiCaTg5uSmSbUWNCPiu2usLtzqjmdF7w2u",
  "key35": "4yqgHRX9vq2ekT7sGewasD3vG6YuYfjTjejux9YadhjbURW1wZLu5rSjaQaZQouuTfCBTQDjUb1s2pctA4CYPaDX",
  "key36": "8gLKcXznuf5b5XJMGMvSMmchpezZJqbeVZ57aue2YxRfb1QGXjTxmvn4qVA2MxQhnne51f75yKiqZsRvyDHxSA8",
  "key37": "3ZsYDssj3jreTSWyVWjfhJ3BTdRdWKrfq6qGbKduw9mo61nT49yYa5LuumGkSz36rqBM4AcCk5yi2okMngbndcFG",
  "key38": "3HPeMye2wWibv1L57be6QzoN7j8Ngsc4Gon7qV7iCu3N4w8QSua1PypHb4337cvxjsYz3DH2BV5fraUuo6eftCpL",
  "key39": "5hmCc4mQ68k2g3Smy1Z1MrGLSqUVn44TBLiFSsv6jrnpYYYj2bgShk7zFJX29FdhuUaFWn9tCaXY3UuHa5b1Lwcp"
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
