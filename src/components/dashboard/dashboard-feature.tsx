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
    "3MRemLcK17zYgAvJGYxzbrA6zvRNWfzfWRbrCmg2ZYkP9TJiUF1KbTtQT9Vq6MstxYtmHZXpWErWBDzePTCRSA84"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hFWpBRWsFFb37Vy8Q8PHmhzNufiRmBX8Umw9WW4Rgsq3rdNdpf9Vm68TXrKQi9YNGD6q5PXQG5vSQPM3vraNgdE",
  "key1": "kHEnBZnkhncfsS2cCLGDNMqsEqhDRBcjNaqFTRwDw429VywQCJAbxYyyP8uQ4HnZwiJTGqNfzKoLapjfP5YdE2e",
  "key2": "ZPB9S1Z1yPJM7RZazrGg9x4FC37nodyNPXpoWmtc3rYGrhgutuAegiqKu8zpj7cyK6n7jdvhAEStr4c8reMq1DM",
  "key3": "3FcyH7M7rNKywvbpkE3gjKDFzsQkDhJQ8uyuqsxJ8EvfuG8ViDB7wgfHEa6ejb9w6KnkBvJRxXKw88KbTL1ePbFJ",
  "key4": "5jnY8kJSJgc4TEUWXgnJi9DyWDkPm7cC8Vttpz4ZUDbsxAaYxie9NVGbFhTQqPD5gqVeMLi36oyLAzfXTguP2ZwX",
  "key5": "3sYHR9WZS7Zca2oRPdMUTuZU2rEL6nLe7MtjmGmvjkLcQLetXVYzH7Hcd9zmEUebjjpe3X8cCKy17ucCCgQ4RPGg",
  "key6": "tnoKz8HorR2sXKRDTyAEfSksn7pDg5jTGmB5xFrXfQpDBXZGq5CKgCWDhN6EzVMtofCg2SQtHTcPBhTu2uPMgvQ",
  "key7": "49qhtTsQhayyEuQujhR8ZyRWavw3ittj6VH1ZQyT35oCvxoX3C7Qv2hpmBZojWd5BU5wsj3UUJDrAJ4bbUxE4AZd",
  "key8": "hAaZEHhYYRpkrh7hJc2tumnQBciJE4gmyd3qCT2ggw2RnncMM5FWVPrFY7tWQkzgddQptG6MCpXE9sit7UZdzFg",
  "key9": "23meqTZZJrR8v6Xf1Pr6gpZWYW1v3QnrwDL6QgebrzRmNymMnwXcav3VMahrUhQT25hDjRfvoBnvATGhNBXBRQgn",
  "key10": "3HeTqxep4QYXtrvX5K9ghEz6iNTJisci8t1gEDx8yXD5eKG9uYE3uQoYthtaZuJr1nc4vZnGekUBBKvw35MBU6CG",
  "key11": "ZG5TDEjh8H84WnaF2qdheBa2Z9KA2swFb4opubMvMe8VJPhF4683Z5DCCFr1Rr2FTgmY7nAKGAXz3mFxL337QQx",
  "key12": "2VtmeQyiYn6CwPmNvqD3Pf4mKEzCz3Wcdk2y2NQ1qoDGarfzziBjZW2yCrJF2fBBZHbfFrCfp9efHQgFQvFyGNnx",
  "key13": "4WBNcn5uSUga4EGDKPtV6dZCQ8uuqAdnWutWZeWbr6gctHwjfYwWieJKCnGqhJffMdA6TWrWcQtZqesGWcEyVgXN",
  "key14": "5y2sCzLWu7Z9asyQtkv3oGkeuExbuX9SRvoegy8enGxBATHbuJLeWZL5XTH8Qvg263pdEdANHGFH3bukcm8CBt3E",
  "key15": "2pkWJy4PgTCcpjKLvMSmXtKi9WHVRCoYm7dGYnh2VtGE78wMCikjEvVctSoijBSytbzXXegBsQLdxcN7TPjWgVQg",
  "key16": "3ZhDxVbLE2NxbBmaaNVY8XXcm2UUaZvCfoqrdmN8pqxsQQdetHMPVs3RwGrpLsznTYSiehgy5UXWaH9miCXYJiEp",
  "key17": "5VuYDTCeo7yyA4JYavehXkFjAnuVXiihsKDGLonBy7SxBD1jCuUNuHxNxDwbmeMdTKNRPQTR6J3TpHKjqeD3pfr9",
  "key18": "6Woe8ivAFFHwz8GFzfKnHsKuQjSWHrRrxVLP5gs3fmVoCqe2K4koGQwhex7AEgshiYEWbUL5g8gTYLhHhPudxPE",
  "key19": "NzDzDjL5bWbH7kncamUUDVayjXQZFyzXztxi1gFLk6akxHvWKEzBDSwtCUnYjFmEKWzAxEASiS2wt7JpFvuUFhg",
  "key20": "EpDHPP79JYS1QyJWuGrYCp7DVKUCSXYridfKa8vZMHrJMun6ifqzsJ33ToianJHMXuE75LnQ6bwDtN8VmigMUWV",
  "key21": "5FCnpy1yQLCvdN3Z4HaEf3jGpnUSEa2uKWwjHEtjGJAm1abuhnMauDgu845CfbiC95BkGmNHwryU2w22fCerK4n7",
  "key22": "21vrHtHLrrCDegXYDWmVNELgQeYrQBQnuJ6Yj3psic8XLUqAbHQ2TkgJzJ1E4C5Cj9UgfSKMKvsQXgWCn13wLqzW",
  "key23": "52gUTEHzxyzfb8qC11tGsGJAYqjRuBURuCSaca8f5FFxumjPvehk6a8KG4d9oufeRA47nTPggQa4H8RBdZdKipXr",
  "key24": "JYT4i79jeZ1PmW5PVsgX3dptdcdmrpsxkzqyYLBoahPrV7AUFnYzFWVj8DiBgeFPAcFSBYcxBgvssUjsdXDeNtw",
  "key25": "3hScSuTpReoRe4ZRQgV3SEZKxjcmL46op9spVh9mNLoALgMW1M41MZ1ZANNxfZK6HPX4PvgYJ9RzCJj1z134EzVp",
  "key26": "5eS3jEUNxUk5q9jF4MGTMfTV4WCiavwsGCjZ15Bt89uZuU7JpwLi5jD8nE4xdBSn5C6sFMFsGPKQKhQFWK3R7kA1",
  "key27": "Zg4YXexjT6QwnGxTm5Y6Y3JYwwEizqsufqdPjQQgABM4zZgmrdY51HNawqQ5WYCDF4xY9uBZAxdS9aKtNAboG5z",
  "key28": "4NMw3rjxaSEP7KxYZ6vCAHjTaX3jFDRuJ77JkznbfcjUSSdvcVU7h9n69B5K9Rm8BYbHJJTifMpq8QLH5wYUMovG",
  "key29": "5yNH4CgtXbQjhR659ZTy8UVnDFBHmuZheJXv5UW4MszUPstkEN6f5egsFLSvk9nxrUiw2W3ubJJXQXSftpEzPkrs",
  "key30": "4mxQrhedwDNPLZq97bG7NvRBtQhNb5uumAkJFR4cYXTBU75YVSiW9MMB7vcwXSGP1vVoDLx9Rxx8jhatqEsXLPm4",
  "key31": "4ALJpuKT1qHWsxvBZbcHkjXh8JMAd2E94qgCN8yCHNSj7ZsGyAVTyKKVYJQh8XcLDdjSn5DxvkV1FAyZmZdrvmM8",
  "key32": "33WfSrLywXCmENRR7M2Phfx9ojz2T7k5vTqcEkgeBpo5XnfWyY6FJn5iGcBw4K5DtHBJhKb1cf3YGPAcXJchu2KV",
  "key33": "4nhU6gDBbKzRrjz1QgpTYDue2JhDjDC2zED2u2DzojpiMHocqXMTHMHgiwV57QfZcyk6Vjm9jEUcCiFPDDuDKT6r",
  "key34": "4bnrDixDWxvroY3CWUHYrrEsXnHVt2xBqKCsKSS15XazTd8jSeacPvWy4KLwtQniuyqdRkcq8vhaWyr7iKMhpkW5",
  "key35": "myC9c67oZsV3N3AyUVQ4wv5e1k4C8R9BTwvA3y5fHLQLrg2mVhVdYrXmkuaQUC1HypMFE1rcwDg4SypscMtP5Cg",
  "key36": "2Tr67yzAE1yZXzh7NvdK2YkpvD3v6k2XxMCXTL2kBfsVUoTBY85ayi4GdfR1o6LYtTAG7ZxuciaebMyXsHu7SVXS",
  "key37": "2aWbCZAGLRbJXzLWko8uTWH6q4WdTs8stpvNPpGtNnaxN2gSCqAhAv13DK1HcSvhY8v6VZ5PsHosZpKUD3cmzUF5",
  "key38": "ufaB2MK2ZJyuZq41GdKA8chZFmXWaAwJ2Yz9KqyqD6Mvc2DQGFv4vZKMQBdDY5GFACfTnTfmd8H3s2tyTyp4Dzd",
  "key39": "3wAwp1f5Ct9YUPa4EepT7B5dnwYRsGKzT63fDTu3XLckunTdShEd7PpJNismjtBFr3LWFX4Rdn4bGx6EDPV2M5Xe",
  "key40": "2rTA1NEqb9cY87y31jpBziY2ZhLZMRnoCo7CNwZutxhdqo6m5BrcTRbYPfLWDgUwTkQk4ptbdSRZBx8kHNAwntAi",
  "key41": "2fmeZsHXXE1p8KXR96coUDXnMQRkdcZBsuQY7QwYQBnScB1eFqujihmU8UW1UriYUvvBNaXpqMqaEiwXF5GdUe8n",
  "key42": "54S7BPo3pYXQ3T2yf15C75fVJTyEJUyNVhHbxQJp2uU2gQrnEXU5ub7rRF9Cbbe97FTfAvmknf2JnvzVKFCGqv8E",
  "key43": "3ySynMz1ncswHEHLCxWN7WfW5wq8N7VRPFyFS8iQF7m2kJrSdANrnRPkzHC6roe8CfJS5UEMdBGxaJgVogs7XtGo",
  "key44": "UQQ5FPjWNQdxAbRNCHoL1yZB2mo1xLtMAhQZYZc3KcqwuzZVqeud57yTEVfdYSTWSS5p2Ph6GipYBAzRQFQQgyb",
  "key45": "5hDkmiruA4RXZYP1H4NEjhjSpTPYQ94RzM4UnsGWMaMF16TGCBJTTJVxqF193KYQbwFK394JhAHLqYS5T58em1QW",
  "key46": "3LJJmuDUR8LH7xuUfPxaa8LhUMFVyiwCLGu8csJSBhjZPqt2uRMZxnxwgS32csnovRR61nLx7CiE5kM26MVJmnbC",
  "key47": "DqUoq3XcofmUVWrP38MY128QqxncrMYgpziQcoxuu4PtqdbabAnxFiu3utwFELKtnfT2Z5WqgrBK5WPfNVXQWLb",
  "key48": "5yP1RJq8LgF4DUCdDp6ZthpcfZQGoVJQ1GSYtJAiKLoFmBJAByqna8Z3nyf5NAs7rg5W44EPxJqGkSN1bKUZaiJ9",
  "key49": "Qixj19vh5vJYt2jJX75nuGg85uSDneWb3dhibCZjF9zXLbaCYkhGmyj78PHtH9qsKYGKp4E2X4NtUqRUz4NVbtd"
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
