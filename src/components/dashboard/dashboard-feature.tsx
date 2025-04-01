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
    "vQzvTT9XgWtgwsHqTcPhek4gqBx62cRdGh6PZXhirXwRbpR6WvnT67j38xz4ZHknyFJ27haLv17rc2Y7qm1GyRB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RHVQ28f5SP27BgzPvtK2dcgtR4uxHVzQUYRx4CHCXdzf9gwWzjjdmj9UAP1X1DNizLZ54Sc9qwMoeo3sJi37d8Q",
  "key1": "2e666DDEveS6yvaLNLc8FmZiHPGERbzyxEN2QbvLsXZddxBejSQCsnd76cgPCHDp3rBW72SPWSR8BLUySPpYKgRs",
  "key2": "2G3Ad39WWGHJMxwTEGTnTs3qcBh6w4MjhVzd6u5uxmNp4qEsAu87u537bMDkGHffd84qqix2hdCRSitwKedLLnkP",
  "key3": "4caMMo2WGjLSJyEjneFYCfUA1NZJrKdoE43YmuJEqet7D82c1bYnn6HDXVXyNNMccHTXFknYH3gSUyduDYebUUrC",
  "key4": "4GL962KgrFFotqfAGzaLrXguskzc3K1CQ8GDWvPLGPXYxt4QCpyPsAXbmhykc3KnnsnPLdePFkzSqBfP1QT3biRo",
  "key5": "2rKmBjXnA3buTfTxDEp7y6WjcumGcuuTkqfwx6wYkJGVnxexu7McJctfc92FwubdtYaN2Uy5t6Bx39uGpt5NpWg2",
  "key6": "5rp5n8mcVByWBNzcKP3uLS88fqUZvBbqxqfPNmyHFbcQUErP53jf5ccv2zPt1ZREq3FqtnfT76rmpJJ13EVfo8xb",
  "key7": "3FCsAsvwtELRT1DfAz7p7qez6v2t2bBFgnzaMfM5XSkyQMoX6kUaCAprTnspqgzxNcciLurjFz9VUs65HafCEmqT",
  "key8": "3K4dHajfwaKEzLF7fSkhRC1f3CHKJoKaAEjuKEgEk62MLFH8HhTie5uz6q2LTc3MPgLX9qEbu5HsgatPJEYGA9ie",
  "key9": "3bwW2LCxbVFSXy4z9K95a2e3nTcgJwECcsTaH6Y18a8TB5DtJYAGG5MZywTjn8dKu4Vq4uhnjmpyho7WZieX4K1L",
  "key10": "2YeLQ5Wx7hYDhFKVnYFTN4NnmFtLwWLc5YLk3gZ8BixMoq51QJ2YdF6T9Vs1F1pK4AZCaf5uaHHAFeNFEQYppEpQ",
  "key11": "vFtp1aA1i6ZTpLHzHNuR3xgTnx472CuK5PRWKxgxEVfPztkXBPP3nKzhS7y92JznanFu9AThrs2oLKKFdGktu13",
  "key12": "4Gc6xAFeoPiBVfeDaxfF16qC3SSgcbuUtXVHCoJTLa3fLkYCzaNEK6E3tngcSHzMWgLQuHHGoedyVusCgAiTmKtg",
  "key13": "2JFQ4rz1xr6Mc7UxJoQvyNAu63G22DWtB15UxNKCKvBhuDrXSCjt4xCHJKjCdg13u6KKHXdZ5hoCdXkZabgmZzYK",
  "key14": "37nGitdCy9Hyp3RpGB8JgWWLrMuUckQkomzpNv5a8WG7Q8rY2sPedoWGeBMiYPjeq7XfynomosQYk6juT31ePbx1",
  "key15": "m91U2qR7L2yzpfdh6Ffa5EbhSCxWyTp3nwfeJ7oxBdApi3ryTS3YGjmeRTi9VxoxySxd1mFQ3G3QzBoK8UDNJZx",
  "key16": "3CrGJCS5eHYJKupVcqdKRe2Mhr3zNVbcFHifyhmnZ1ziTNpQWQ4EKJ2CoJDus4DDtH2w1eJZeJL8XcrQLQmqsTMG",
  "key17": "5CywVVNpdcNzBfeitbrdv1BV57ZHP5MVxZHMWFKPE8nyZaa5jbNhYRAtNXJdR9ZiVtQYca7SoeimfDe3VNHJ39Cm",
  "key18": "5s3ArGbfNiqs5fHGVvg2V2qqEqRuDwbtYuPE9c7kJJBVBuFnzw7YfLJtCznPW1bF8nVPKotBmohqMj2SDqt97AAS",
  "key19": "3zNGgY5rYZ69yMAG6zswsVh7nCJ8TuwtyVGxcfrUDFvBWF9TaXDxrubnnKCs2qvzkyAW3FZjB76QvLVUMb7c6SBk",
  "key20": "3G23z9mxyxbjFtLdS7pabcbQTo94KvM4g8dhFwrDQRe2etcADLhjaBJMiaQgbAEWVRtunDhS9vL84NA2BTsRioat",
  "key21": "3FcMXz1xEFirJCiSzvtBJ37QrJLL56fhkcegWMndX6sbVAbXDk8cmUkNyZpXMVRMuF1WHUg9fh8MbenswuGnP5Wr",
  "key22": "21VhrEiKELMnS2RAwTQX36bvhVTuQEDbNJQ3TWjxoFvK6tX14in4C9gLn1d8qs4CUnCwz4xHdNDwvTgvsSGGYQJR",
  "key23": "2pLkrLzUrRY7eBU83p6ZuHRNK8vDH3wmUzyqe9ppgFkahPQ188XQjkXnNBwzwtrgFwjT7qwYLgiD36Lqjnuo2vwi",
  "key24": "3dJUVBL8SvKwvLV37MpK8hHEeHhi9u65ec5osLsa9iNJxuQAht9nXPaxbBz87dDip9HTS6pTapVb1WSQxDKiZFiH",
  "key25": "5dSMQnzSY5mNoonZ4w3gD5H72KbUurb6k2ifJw5jF3PML9TLZqUR4y2VPMoCXJW1ErBPv1GzuHjnmP7S6NSscPx",
  "key26": "5rYtbjifrdhydaYfrVrTdGed6bpivJam9oYbm9XFbxbLYhb73krm2Vj9Mx4uCNe4nz3TuNHdtj5Syj8v4shAdoY2",
  "key27": "2p7nDRXmd96K4BCfqorVFhC5nsPdEbNwUr2uTKKXZNN5EHyoKzDzYxUpoASdLRaJnig6rYA2ffZs66eRfb6g4B6",
  "key28": "3v14Tcd8VQB9igb9LWwd9TCnXXXt1riHwDCM84xfx1PyWfhrMjJkjYktB75VFt9PZvV2cuuS6f7GeRgDYsF5SDoy",
  "key29": "5AGLFAjipvTwDd2HyCQxTHgScEBmVBog4VjfcBdmBt2fe4pv8G2BxJ17JF4TWZmkWe4Shf4dQNPtBDNCzk6NqjHq",
  "key30": "2kM2AqZPiDuXLkUeAuMmvfkAqQALUdHckEXgBfZucAhu3jpz8vsNvMhPsxEuTfBNjUMKDSc8cpv3Hfq2LSr8B15t",
  "key31": "VbmQ26PvnLEXN8WdSKaJowFTJYjJ1XwjeUhYSDyTASpK3sr9CauX6LM2ijTbz7YUZfD6WhFG3BweA54aFMKMmHB",
  "key32": "281Yv9YTYqthJN92srBSrWvbJifzWCTEvqaJ5oyZNLPQKBkpBPpPs8svUtFNMVW36xtZgPb5kEdNogoCZLMY1ZTF",
  "key33": "7v95HRjSncnk1AvhqM7nctqbhnF52YBeRM6UVdy7YGUmRx9KMzMoE1xGEaZaKY1oqgLyxEBo8cPhXYZNQ1uX7fy",
  "key34": "39pnEd3NcrXJunzJqo1CLkdoAhSKWyB9cV2ZH6BXRdV85WDzmMHHzHtY426Tm1n3XQfL3bFLWM1QUJRig1UkTQ1c",
  "key35": "3yPqht6isHMFk8JpXoJG5HY2oNJAAnoH4PnzunUc5JuEUk9wxoTLnqkN2o6ak94gdwQR6vQcsxEp8w2Z7XvKDXnw",
  "key36": "64QEdDoAmHYpfsFn483DibDaYfLBJ6xgnVCBn2ECcvQoQgzRu7gzWVmszStH4H26v9CcJhqYiht9EMCjtdzVwNGM",
  "key37": "mfj1zvfWzDrumAJa8gmXL5is7zAp8RE2y5tWWeeghhE5FYGveXRtZTiXkbzYZjHwqfgJyT4vtYc2wUnPmwsadqn",
  "key38": "4DLtPKn5KryMmQro843GioMMxCUAA9oW69FvKNiLRdXie199t9P1HQmmrw9wjZcqJgJu7TKbyD78xXnmQCKLPiHD",
  "key39": "jjr5JqUKA8CcsUeuLTdWEcRd2WSrEvAJogNnkbB93H43p1w1ZCKgv1roLxA7csBQ7o5AQbDMWzSViKMxZTcyCaY",
  "key40": "2AXv3DvLfGvW9LsEb1MyLXeP6qDthJRHPRGZWcrkgi9rPvgeWDTBMXLLPjhkVfTnKXfhuZHVgwNysatLZVVfyRMu",
  "key41": "3yyUsQHV7B7ZyQhdHS6pZV5BEXXwL6R2kEegLq4dXfAYQ7fShQzjeiPMPcD3qu4tNAyW98TWupuAtrVm7GdNiDBR"
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
