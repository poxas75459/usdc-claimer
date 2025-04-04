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
    "57MwHMmo54fWtB1AadroMpjvZ7bTRQRgYZy4Dk58cAz65o8Qg6NBzPbyyh549TbxNn1UGLQc123xHFzpkDfT8Kpr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gqH6ukj33opYnC8FB53NjkZ9zzU2sWFSXpzYYqEBEgi29A9fzvLRmvz4tafxauziwasoaojZRmQtLdWmxRrRHwu",
  "key1": "HfrWyi3HdhXjGLgqR89KjRM9omuzzZYEMYVG7T5ftt3SonuxFTWyr9EcsG7fQABxpHGrfspuCXnNnYmSxZhLJcy",
  "key2": "Vtf5LW1FYjzk2JwepHKureZHYJTyTLsyo5HGxSEn2miZZcfgGSDU39NYh6WUXc3vyDu5LBrg3ugSR1aeSQUbPTr",
  "key3": "yTzEbsVa7CNEHj2gq5T8BLqZ74sJxLTJ6LeNdDytq7AxxLHaLYxkq2NAVmVJ9EY2Qur6Bk5GwXKrEguP2u9WdRr",
  "key4": "5k3LpDLm8iFiWp6rYpk2BgK77Q28ApzYxmo2aX3Rjuhn468yfShDDnJWxP8wALxGpN6qbPSWnEhtaUCSZujuikUn",
  "key5": "2Wi1R68FtCeZvyW4Xg6fc4k8zs2fT1crxip1yX51Dq21FSzjVYU9kZVfmMM5GzDQHAhbTyjNCnPhw7ikTcksqfjB",
  "key6": "4ziteX7ADiJRXn6cvv871Uvpdjrk8xGoXSC19U4rDWmLjQFaJAaDLTwWjJL4p1G8bRrJBfrajQjhb24e4Ut4HRnC",
  "key7": "2kkFGa9Axq77q6nXRSrQaFyks8vvBEiDJvxB52FQjs9nLcSoXTifKhFiBVujfUFEbgLbK4SWECVCamMChUGn1gNR",
  "key8": "zptQ9b59GJctyNPw3DrxygWRsPp3gtB4mooUu6P2QWtPo4HiDixbs535JvRAPy5P2Q6A2Pgq9rARHVsmSvC7vcy",
  "key9": "4QdFNMvGF3xNe8xfej1YVCzNBVDhvKhqNSzLg2Bp1iDgEXBrTxK8uQjVj9gT89FNjYH7kcHhSDwtp8mpV3hJpsG7",
  "key10": "4pjPA9rZMJ7pakqmcPetC84RHmZ4ABNjGtA2e4BC98NZq4xYiC5Qo5t8oA8ut4kMafXGHYaMzdbtqXUYn9ytxpRx",
  "key11": "3kYfS8aisdDqoSjraA5h45ztZyjycAsCoJBUQCdubZwxTVVpgbffjjTYxFCeLB9x9n2vekEpb8n5Ev81Rgwz2EPK",
  "key12": "4K7rmbVaNd1o9WK16b6uMg7iCiRpsEp69YXArBGZyjfpDqKQBZTi6dE2cHvszbqQemtmBGspzAzcHproivGfRKbb",
  "key13": "Y4QFxhfDCyVV1UeFs3GrVR9XZWxWNz2oN1Er8VWnoR5dJN4DxefCNpw9uy9vxbH9pQQnezMcRaa276CmLVnkTdV",
  "key14": "qBZbGfrUhGDTkkyuWy27remtJpVjgmHPxPd5ZnGQgxsSAikSgLDkwA2jonbYDMhUmKH32bMeNsVNjuUVp7GHU5P",
  "key15": "4oR43gmmkrtfQmMLg6UPoSYgVKpkzaetsgZoTa6XGPMGoWiZhXXYyDCC74vSpeXtaFCfXe1CQUsRU2NqUet1EukQ",
  "key16": "5YzzBzCM5WK55YXkLnvbEKYP4ZW17taquhJYfceC9xF9j4RBmNKfZ4MXmYNMcvqD595Ufz6TgQcM2yUa9A5fNyeT",
  "key17": "3wcxCHGMDT5fp18JijuhhpzQBbUMbfD7R7uMFY7P9vs93kasgbRH7nVGGc8VSKbfqbhjDPKHkgWGiTKoFvSPBPyN",
  "key18": "4cMsxLAWPb4iqU4775f8tdwXJfteaAi15CB8FSZoRnrKqshcnnUF2LcqfwqCNHWLkVXEe7nZ76N6yws4QjEjZMLA",
  "key19": "3z4X7VPZ9K38oou8QrxEXSsLu4tXxEHzdwy6E8uDJ9HiopeoGVeHw4dUGqApQ5TFZKmthy4GwJsfsKSD8tNdWD8f",
  "key20": "m4cZ4KMrrR1eM5dYXDV3uMvGqPyKkSrcjYaZ4ecAAXPxYuiXwYR9kyNsSN1ui74jQXupAgFHG4dWCYKv3AZEvH3",
  "key21": "5dmfWxCGoZ7MsvBVPeRFAJ9xFMdAhmmQ3TTF3CRQBFx5Qn2rTDNWatYPwV2Ls53ZGmnSTB1RGdfDUaEAbT54eRnS",
  "key22": "5SGgh7uB6JUst5FLhijA7L113nZ2RRvkkbWnjs8DQg8f9siWfF2HFTnutdjBwFUsnncXip6SKURUPcpAxctpSMwC",
  "key23": "59TZ9eby537DJdPWpnw8aRVzUicHAxdn6w8DQxuR5NhNT8cXJmBw81EpUC7tKtATsBQSxvDVmRwsFmmfs3Yn2hcM",
  "key24": "2TGviJNzmYDHuUTioaAaRPe9owECPRKvbetZ7RFoDgC17b3hnkTSvE3JoZpGUd9CdeB5q5hjv6kobGyT3m1nSsKW",
  "key25": "591zfPcGGcnQLYFrPnEG9mk2kxwiBL1WcZUXQd7k1GiTKnZ53xHAdBSFpErAZAn2bWv2mwvFn9jxsmvaXbpSeb4U",
  "key26": "3LesEb6PfC7mH2nuzwo7wzGLCyAXRbLhyJVXzBBMCNFfuxx8BWhv4v2XXYHX248aAD5gvoiw4uFaszG7onYz6xBP",
  "key27": "4qARzww6ue6bETLiUT3JxDd8cCSyybMZLLUdNaZd9KFeYwHo4jE2hciFSnhVDKXmh7Cd7tMXQoX5MqbGDUh5oQtN",
  "key28": "3ghHs3pUiafcYMLuDeZy6XUoqhaATGWAAcPc8qNNqThBPTEDCANw3reYUaUfVegwndz8mdCAUM18L52HFC1AnFij",
  "key29": "3EkHCL1Aurmre9NLY8jhse2QEkjexUkxgp2icf3Fpr9xbPnKeQbLybP4Gpnc3YAdUMSt4MH3m9wjhBYLoCdQPgfN",
  "key30": "4qXYdtXm9SV8gpxJL7rCJwBhRiRUsN7aBSq3ijqLPB6cVVAtFtQnPDFkHwUg32arVQu87AUk5jENf9t6bDrqHeXU",
  "key31": "63ATLjjhDXpv9Cq8qAeMPBmByoFSCx33YTtWjHVu7xCeMS4pf8VTdvyhKXMQRcjL76wKcxLDzsu5o63XoEDERoBi",
  "key32": "3uERk6WM4pJNy4cigau7SqXkKAL6s1svYFdMVPyhS83GkmB1MRNw4RFmL6HYuZhBpHMb7CeieMYXgLWHSHLePWik",
  "key33": "3nQF7ZwQYxAHmjY9Hfh6FuQ5BKXxKvb7AaiLrVwRuU6xyi8CdNMnre5CEuMJoE6YEMu5rhWzqFrXHzHD4Fm4zcDG",
  "key34": "4iEF7KtVfGGdgv1ETuRGktSYsNhGyxSUw4bXA2vg6UEtBb15qeeMHpvwdmejMWpUSz7mTXEBsYg22nJQKzd1rXHU",
  "key35": "4XpK2EBszPc7v2FgY6T5BZaSqUp5UQ3coDrzXu8EQJ6FJyVvgfgWYeSdDqCcR8nbUvuM8wcwibrQjqkCVoFDwJa3"
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
