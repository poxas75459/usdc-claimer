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
    "NGjfVKceehS17FsjtzKHQfEosNz5BZ7WQLy9hVV83YSqnW9SNVVmJ1KNBLpBxoMtvUtYrWLrcKnti1ou9LqKQuz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uraMWU7KwKoy3LxAPtJg6YuAv4BY95peCgzRWr35bfAmQkKj6ig13rEZCrn2o9KTe9AU4tDRncXXKT641RaNu3x",
  "key1": "5iNAtbqmPgwqkhgo4zSfKMHN2Qud7yY47BGirGRu7rSwzhZgemyZVbCBvNSUB5GiLvY9TH5Ew7zn3bLVSP5t4ZKH",
  "key2": "4dNkMyDZyv4dQnm5HFTgGQh4CZGiP2sS1BVRthqUwXwy7bwhGrY4C7w2eMHCbmedwMJMkSPCKtSd93hfjziGS4BK",
  "key3": "nbEqT5CQyakm9W2t9K3ziFPV6B2MXkph1eibPLUk5gzHK3ETaWdAGpkmenHgU57r2wDgk1R9Rs9fsYEbN8KQYUG",
  "key4": "5QdKhvPC7ztSeyFLGYktvaUu9HhvdLB6zsSXa3m4Ffi7xozebvRr73gNZ52tDS5ogYRcargDkB8qtaVgMuZ1Wtgg",
  "key5": "pTh2GeMPTS8g4LzrWxCC5vmzaHWsKMPddGhBiR5maY7DSUzc4KXuCdHoDsk6fiZDudArp4Ydg9Tj2MGqBtw2pzh",
  "key6": "2DkX8bpbyuzTtggoVHaXJvio17TuaUfEpjxuGdEig5H92Dy9db4EQua4E9VsB2c5mRQKkXDzn4YzPLr8YQhzr2dj",
  "key7": "3FKMMkHb9PWP4sHJSJMzXp66MSdF13oLf65D1hhk77aV8z8C5mcB4ymkVSmB2J8Q3SuSV48ZtQsvkSmdakegjAYG",
  "key8": "4Gwcar1JqyUDKgXZgaUAgXrzo3vKSzKhm6mAN4onZ4x6jvosQzEZKKnF8VqjSUUeWZPjSdbx37CrAwAo1WZVcu45",
  "key9": "4nZh9UGpgy6zTTPcLSTXJWP2qcJUu57A1DyG9xtUVCYgsfJYsSBseNTZaRqXhwSD6GaMMi3Cte2AyEmszY5BbXRU",
  "key10": "5UoBvsYuVMnU2NfNPTEEvHSXQTQdCoQJZyRS6RA6oYBWiKmjSnX2nRYL3wKbZYpDJ2XsDs6z6KFstD4BYiyWo38s",
  "key11": "5HYj9DZbheb8vhsTjC4ZpwnQqdtew7a4BdGxx8D5Gs84HmNQ9fSqQivNNGpmi7g7mSytfPqC5dfcAsc3TvfjiNK6",
  "key12": "4uBqPJLt2VNV3nwyd9mFYJiVpfs4kEVcWgrF2DFXX4RDjxiVpRsZhVtuFNasS9K3G9c8wTsjuz3769Vx3WzDRWn2",
  "key13": "2jeZa7gLvGiGnsnaCV4uP3qSnGMzDCTQ3TmvSF7BatU97fJun7Lxd89d7o75hi5Zz3rx1aYxzbG3NiSDm2gK6xBX",
  "key14": "ia99Mcp3Ldi61AZ9ubyn6pzFheGr4i7cZLr5bxCQX7aYnEZ7AgBK8DRtnUQ8YCqzRS83RuB77Fe1eo2Hut2Wj75",
  "key15": "2fKFxvNer4yQT96GhwsqRWXDHCLhRLm8HdUVGiTw2v5KbLcZjNshZZiEYRZjEMJhD2UyH886vAaFH917vKB9ZwX",
  "key16": "3Who6sL4rkssZDMoXTF6zQnb8a5GoapTQKv6XcXNPpH9hHRB6rXEjSPA7ymfpuzRknmqkwKhvWxBdgVCuN7jvvxv",
  "key17": "36x8Ysy9KQtSztk1uREtekrQ7yVTTdd3WkwmYomoCdDYGnW5PFce9mFV8CpzH3wXv8k8x269FsfPyxsrnS2dFwzV",
  "key18": "5z8rYE7d8ZKsQJmP1A6AmJ9hALERqeT4kkPHvEHJb2qw76bsp2xcEXJRtZJHHVYTMFB2CrihdhTpoJtsaxTFz6ze",
  "key19": "2bWKf5crs2isqReDBk7Dcc6X2nZA7q8FjL32dkG34KRdFGCc6gF2336ESAKtzriByCPcvFtxHymryCJhAitExAgb",
  "key20": "3X8DXXyeKm2JkmW5E2LPTjGXugdmsoYL6cZHV9CxCXHDAbHfsDvwai8z6bhevgduwfRsLkSs7vvzshAXAtSx7Q7M",
  "key21": "cmoAqTvLaGcM572wVH4qKJq314p7nDXLRU46Xb9Pf4hMgEoHGnLqP1ddswdhvGik6equJc4HZ6E75XP1d7kqjTj",
  "key22": "5iwxPMm9QRJq1JtwQSk2qntpcDApxnWfMKxMsvnryyUCqeaRxapP2LvUbz5hhiwyikpjJ7vetivpuj2CEh1E5udo",
  "key23": "3Tvw2Rmy4Yf8s5XdWbYK1NNqWpwmPBS8PMMkmB5J87dntqqEcRvRzQSEUKhcMqxhUQ7K35t3eK22pqoGtXyHTnZE",
  "key24": "2wbaYChVXdARsxKAx7JQTFJd9o4f7KKDp6P9D3n2ArB5BA9xdAYvtfymUBDeN9L9nUMCnhwes6zmX9X5RLEFdy1U",
  "key25": "2nxrfFXmwRB2Vs3UH8GWUGN3jEWAYPKkTBUSP3gAbRehiPzSh2RcSKhQKS6pn7vGowGDmqgRfF7ZVH49N7UtMnu1",
  "key26": "5Tcimq61LPWYDsfQiipNHbAa9As14vM7iEfnw4JJQSfCbW4qnHpR2NHDLJHgDxNWFfvqi68hw69yF7HMrbcXWkxm",
  "key27": "3SQFh3bP7JRkhvP7LQ3cgHyWa84Ei8wrBXtq3pNqSRZBYPm8jeCPWY3jnedS3J72iqGghH2PDrCqSGQPXQQ3f5pk",
  "key28": "kmpiWVx7Lwy2soZjsRAvkkBD5pDMpkuoUZe1aRbGJhRdc4nyzDuFL65uCB5XsHuogcVEe9ZNoN9kwk7jrmhKLjg",
  "key29": "4F5Q1iaLdhPjF3U4r9fzhDeoSfnLDEpBQLVbrgz8yfapox2zgEKDndiQCdbvxj56oST8yUkJwiQWpghepSJ3mB5U",
  "key30": "1Pe6q6MMESLCH2n5op7PJB9oAAaMWtdLf1fHGyty9aGysgZwbdAhTjSN79ZPEPePaCnxkJimHG3ThkBDtDxWuSL",
  "key31": "4CzgxSmMCJFmnQmrwK3SCSB2dng9TNY6DbekgBZQ6AbkjLevASFJZb7aPhJdLxSfGYoYbnc2ETxTY9e1SJ1ZTEfM",
  "key32": "46qcNwGGq97z3xGH89WSa3BMhWj4R2dWow3Vw9sg8d3Yp4CSpdg683vdAR5NSoWPQmhHNUj3VUXbWuZs9p9QzKTW",
  "key33": "5Yx3riDbGYgR55QZcZgqdGywiWqLy9VzwK82ECXRPs2sjpg9d76WcqtdfXUUeA3uDhKnMSswHZdcBGqByrFYtFQ9",
  "key34": "2K7k6BHhY8f47rDdZs2HcpKsrHVTpqDztahLJZL7erxt7Wkxfr3vDt9K4sg5tZtaWLeGs4kX6W4zFJBBZCfmvYYE",
  "key35": "UfqkChmpYnbGrEY4UoMa9FHjKzMBY4vFW3yuoJ2ZftZr18tRpupmtZKjHqwzCPBxQYhXi42otMRQwKfb95vst1Q",
  "key36": "2Lm37hH7v7h58kM1wkrfeLeSKegKpYsgejuzYfFk9uxorUtV3wEzcz7ZVtXnT46qkn2S7jaCEfMrWCtQ3MjF5HD1",
  "key37": "4mYB7cDzYvRJe1mbYS78tcdWGs3niYn7EVoEEGmrta2RKpjgB9vrVji1or9FZTKFsvHBkfHhvkY7kpCTSEtBJLCs",
  "key38": "Y3B537NnNVGK5PjkuLmVmRvgLXJWeqkSfMojxRuTR1HzHc5M7Etf2s68Pbk18hNyHVvFs5wbv81tcH3qiKpZ92L",
  "key39": "4Sdp3FHVgV5t56S5RQxXsLgeFzHDjDYoWG8wQR5bqQhGw5jUn4ZLVJzqboE3SMDCvCsX1FG9mcfL6iznGHcvh7h2",
  "key40": "4FXkMkbNC9hLdeqJxvnMoUrVyGvBv8PXYpcZnSuYzFM5yEn7e2DdL3tjDAf4ooUxeP6AXCABSq5FHdsfwWayWLMh",
  "key41": "3jkfzHoJzt2qNYp8vrMYojAN1hQ8qew7NPZQmFTDnwTA33vrc6N4GegkbrvT563JDucYKJgx6y9mNsrVVxNSBYMw",
  "key42": "616Zw2JZBof4sU7wAdpRfBvuqskTqPpUn8j9ozwwa5GaaeRLhg6vRLkp1iQ7o44QGSXniabRzDFx2TRSjWDJKY6v",
  "key43": "426ZYgwq7B98DBUAUdsiDVat88txt4TQTJyXgjGw9QGN9UfvjEUBE6pGDBQBvbParqbtKrQ9ng2wQuL8KUy8LwCm",
  "key44": "638uuQmQPmUspgfJq3so8qqn4yTcC2it9qGPnAcaZijHSP4smTAecz4RSGBN1hSHNCMcvfvSLXmKaMTnv1RbduNb",
  "key45": "LCEEv2FYWttNszXXG4ui1RJc4Cn4akmEj5rmfEghKPWJrMVH7hTv1MHRSxsauSG8fLe89K9PQtqbB7uWBS6HRBB",
  "key46": "3tDzt3wwrUw4a4eAnmnq9AZjT6bj3BuvhnFQ97VetcDogP4WtDRnhngWdwDE321QRAYd6DtzTj6oaTjeB7YgkMie",
  "key47": "4v3x1pGdLKowcQNVagMhwUEVJect4YtpCGj7P74MNyA3wySWHjAoZRtMeF43fmfHE8T4qCpCNAs8jiGpSaEdd93v"
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
