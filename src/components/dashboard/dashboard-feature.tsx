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
    "4wMMi5gjD4tu5c2uaKttpv9ZAwVnaeDWYWDbHNrFKggVnsWo46z63szZJZxcKz1rrvRPtrxnuYUUPQSQ3F1NQw54"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eNHPeBw75V3e2mvNw73iJZ5Uz4qVZuCgeE4Pzr5iXbwzqV3qAhvCYN3yEAcdj4z1ysABUPrCuyPBmEVk5VUK6Ja",
  "key1": "4UpJVhjbLtDQx4Bkkr84BurVVbi4oP1GpeUNih9Z8oHQd3cJUHhLs3J7uDkBnivEVasv4s7a6m3jUEDScse8xjED",
  "key2": "2zFbMa1GApYLpAdsGQrVZRz4fUp23saoEdAveX8bs4hEngVp1UcqtfxZTXVfR43UjotyNsNdzenzn4dMxxYvWwfc",
  "key3": "46FKYBkwoYHfboQnnKnKpnyM7BcBoXGBJxiRucnG96TuCnZEtGie8CoC3hX2TEt9Vt3p3MwEt1ftJKTE6PnEZbPM",
  "key4": "64ZDknEKj2vpLPHwh1he14VDLF5ahRF6ZTmh5jLwVr42R78FrGCsgTLbDo4BngyrN45xyx96fPvAMpaVpEWYQzSt",
  "key5": "2U1UygwbJcKVV1bn4G2rHqZPhu1CH6KkVFitSa9Gx19NrivLw8EpPZZrc2rNoK7SfiWnEhVH6C6bDtuyFD84HJvh",
  "key6": "4DXMwjeNh1yte1mRxLNUkrtWqD3Nv7T88dDWtGcg5AHjM3Fq4ikYvd4SFK3CJ4f5ZbFRaiBGz6od3CnLPDnDhxYM",
  "key7": "2RkJQsrDmeEtUxhAa8diwDVpcENmsbDDpNXzfdLprwH4u4Sj5srgsAt8egXh5PZmwdRvYmiAyyb1fVUaRsbhmvct",
  "key8": "3NDLjmMtttxFuL4SzPq4phJ25AJSctQaYPdXH31YGDDbHuMjzoSQ5yComhtbWSRAZaZfnaxCs8s5EnQ3TmCLq7Q9",
  "key9": "5Es93swEwFvAiQUAAD7Xa78YfhDXwHccVcNwfYQmSXJxoJRhPG6zzPYd2JzdrDZ57HfGqeb8GVqYouinayj52vHe",
  "key10": "2K45D3xtgvCQ6oFbmKd6qTf8wJJqACG6o7axy5eWUQDgfCRP97f4XSELgTwWcYh4BZ923FXinTHZxCbZZFkpj7WG",
  "key11": "4fVi6nhVskwoWxqcQ4ePFCj2LYYu5paaPNbvG2HAVPwTAisACzfyHkBZXH75AJxrPdAvrBffVvmBX456UDaYEge1",
  "key12": "2R2xgrUqmwx8dwVj152ntUqWukbiL6giKXjMq5eyWLmsZL6xocW48oCoKh6SGGKYBHJhqraFeoRNqGo2TiTnYC1X",
  "key13": "4U5NRe4jkQ8ZWhZXWPT8yQS3VR9VDgQHxDMvJnFRcjd9FrBzMBYv5dEwDvPC6kaTYyxMrxu55V3tdKee9VYenBas",
  "key14": "32cLA6QLAUEYDLUWRMcBTWUcH3MGVU5TRL5Y6eeZddWh4o3uek1ik7LqSmrHXSTTudxHf7wqYa8bN7bfqhCENxZb",
  "key15": "5P3Cb7cmzaQ3grRkPUU5KkH7bGqMZ9o6jKN7kZB1G7aohvR9FGLBskzTBxyQNDe9RdFT37A8MKkBvytMetZoa8Mt",
  "key16": "ov4DcPBk9gZ9dcrjjf8r8japVSYLJPzYH1oaZjYhwKMzXHanL8oP1iKvu4iG3E2hYfXxG6HdMgsLYj9GC24Siwy",
  "key17": "4cjEb9cHfRNyWdEdtooved6fPzv6gWzMLfjhbL1a9xS5ERqinZZELWHRyeRBgAQf6QwvBBUJrJL6oPrzTtCVvdyd",
  "key18": "5Pb2eNj72N1hLCaYHX2KWcAt8aCzeFXd3hmPxu34B1LaNjG9S2ZoB1SNh2QTep33nfqXvYGXpXPkWTYum8918aTP",
  "key19": "2nV7zG4pY9XbWFFFVTi9ZuosfpQtEHpLC7anKDNkJJ1jp41sUgnAMAuZgWa2KiDzubmtf7uckBCDbnde8oAHrvbq",
  "key20": "Z7gudiY2991c4PYF5cC87FewENByRoih9ZWqFPDoUbUpnNDH2XdTk3Pm3SMpgfqXWF6Jga3zeHZtRg8CeKGHgVv",
  "key21": "5UUYxEdSVBHwgyBi5wTs8wKVvfoijRXZEubWn2FWUUVmP3VzRKZVKEHvfYpKFwr4d2kEBFK2CuFWjrog5xpDsiq1",
  "key22": "5zEHe4fCkcWk65K5dUVbQ4GFakoY8GM7z4GnttVdzGMrSFRveH7iXMR6oMpyLn9bt7gHQzyiCctUysnq2nDEbzk3",
  "key23": "4o1LMNcTwSsnFBwoxLF4v8GKEzEtXYq3FSdeJXXdUMUFe6fiEvfi2AZQfuV7H2RWmjCg5DMnkFGMATXDSUvNQZ3h",
  "key24": "Q66vwHP5p8hJkSrDe8YtZ3VEaNBE8VVoF8ZEXuHdrEvWHuqe3ZrZ5hUaaDsagByecvEf8eypBTM3Z4Qmm2YU3Sc",
  "key25": "2r3GZixBT77jTmNze23MTJ3Qb2AwL37CBs1GHAt5ZfsZmoXHgFUXBbSZJEJAJfhZgGmyf2oSPpezsucQ86kYPhP6",
  "key26": "4hKzSCKHsit4Z9tLWtfphoWodRhPLJGBrPxhNBjnaVWA3wi8DNZcqNTEEZCvReHrWbe5DQ9GQBhK4xE6sMtUzytB",
  "key27": "4HxQCMgcp9RWJXbFcmHGRuAEgJ72h3JZbbpzcLrxsY49hJvNuyWG2bKEE4tcwVp5mNS4MLPzZttYicZGvu3pQ79X",
  "key28": "vrw27aEEcukmyjNpFy7N581QW1ty5YvhgX4MJ2ocQc7ZfuuYiCrdZf4DpdBGw7ZdtrWFkXYAatiTGwxyD3pk7M8",
  "key29": "5xFqq7FuZBEbXrtSZchqXDujp45HHseka4huTi42gVLV8xeCgRTd88RoNW8S19A2e3HaR78PgYK5f8tSuK6gLG8u",
  "key30": "5hbtGTUmRY9ZPcwiS3sgC8kN2uEySrEj7nEvUyEGbBBiNGAr5c5HPqdwHHdHsuNXqfL3QmNCmEqn3MsvPD1AJeuy",
  "key31": "31VUfDgMRELmBc8cgHLrkUabzKoQmeMPMz15Eii1hzpMxgzHeBsPWnqw3ZeYXvmVzz3ZHBpuknPztMqKXU3PobYF",
  "key32": "31Rn9hD16JreosjDPu3pmpcVa3DQRzuZwxDaJyygs7GzwnHrxhdmjyUzdeEKAM3L8QGudeemMsuc73KWMXVqNWzL",
  "key33": "675zQo5kHfnf8xmzVj3tyoMX6NWfuYHUs12N7y5G6MxfF2gGwbjMTgcsUAix9579nSF7cCDLqQnpJvPVc8Muvvay",
  "key34": "enmYw12TJvyxmRyYWjj5JoXN8mJU2p1rAMDqwnGpwLMxXakTWPTSQfMh2ayuMHPsyf1yszdoo4LjcBjercmsHLL",
  "key35": "3fysAxbJcHrGbxpSmizwm6kyBs7J5a1dGTxs4zWrG2v7ZjbtSfFSUGVXywNjrU1F6m8ATSDxKps4uTYenkHb7gLz",
  "key36": "3irVt9GvquiT2HoyPSAWwbHc2AXRLuM6kAbfkdLarhfzks9BvjmzReJRR6yvadvghRfPAkiyXRJrLCuYfdopfFrH",
  "key37": "4uSSQhZMfgQC6ct7aMbZx9Fs3Xd4xRte2pErjmPVCN44xdMZy3TeV2ZYauK5dgBjzxQJSPva3sYQYaFYPqKviVxQ"
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
