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
    "2gQq9gtGWwLwcYT4K7Kq8T22PUi5QLoKueifjJhU8sm393AcRM9Ws87AAfuF9bxGbvssaeZ9ZSe9c4QUFoseL84P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vpbLQcprRFJfmVqGNbMVvVRpFYZnPDq4HZhwXXv8VTKupQjZsLhW7HLLeJXByq1Zd1xdyHuPq9E93h7erw87TBp",
  "key1": "4WdCpWXE87VzsyYgnd5cqzdxYrAvJpn9nWofb2mqcj2r2nsHn6ccFVYt8y4fTdA6CNi2wMgckM8iS5y6ohJ6dBWA",
  "key2": "3P2UW6LJ8Pzavw2H2wz1gTg9AQ1Teh8kUwgtoX3dKNe3xU9fo5Pzxq7ujDqETjRJn3FC2ZvmajNNpdJahTZGLTqT",
  "key3": "4QFZmv8C8PuULr7j2SSgE1gXPFzLkki8NSiZUNd8vEWm9pgq4SVho2z9RuvpeEpcLk2eeWohGtoasi3Vscd59r2x",
  "key4": "2GXetmgUvW86d3DQAYMdX5LkZ72axgYVvjWcojqC2wwYij2nvvFr6uNLVSRCiem4XdNiYXz254ZiRzCHjAaCdSjJ",
  "key5": "3aWq6mj2f9SKdhjXwpVUUYns31o93DoKfdZMokPms5p4KuoasjPSkaAy5cf8s2zzg72i2zsqzZBcaNBo3QQRwe44",
  "key6": "5ExsqypzMMr6cTSNK26s2NJ1fvSGcdnfvNeDqhyBHEjHRRMwxHGKNfS7ypLjePYCnDsF5Cvvk6CWcG8q1hqJ65qg",
  "key7": "2okvxyzToHWtcoAKUJe9KUutQUXU5JvybjJFir5URv1SVgBDRZaZMQF734tmySqkcwdPFqy1ueAVMADhfjMbzZL9",
  "key8": "5WqRQXFb7h4ixuiNAtskC1QrNiqY5AP7vcWvG8XDfP1TK5WJA2PYakEQin1u5b23XWQQ434jfNDGhV5ksZxGA61D",
  "key9": "54WDQps1tAECFdUwrSqTSfzXCS6tyrRmU7rXRXoCbnvs7RnX4GspjNcgBZrwDzzKwAhsrCWZiWm4QrpmUNK1nkwC",
  "key10": "2EL4YYDXNcKQycYE331J7apPKyxQNB9SFWDcsMYDNdyDbjsnoDwdDaAx6GYXfZ1L56Gpb4rrdWqY1gQwsPHMWa9P",
  "key11": "3xPNoUUKGfM7HM73nfGFXNrKbipkZVXTmRQjLsWiWxL25p4ajoXX2LA9RDh6e1FXHQ46HXUGUJVRHJxQUXruWDUV",
  "key12": "5f5gwg77zZXsZe3XfHF5QndmmbEakrTZGwdSLXGzTcW4dTQ9AjmUEiJ7Zso92PwQhqKdSfSxu4vFnaoFZJ1HVPTr",
  "key13": "3ao2K11FzyNA4VfQxeGUg67HAW6PhQW6EVCUxh4soxrQ2sjX9CabYt8uvRCrQcaMjGNyCXLiREBzo1jvhW9A93fX",
  "key14": "5FpgkfMzc83AiawKLbjXBMDNzkLMDvq6d4dLwB7ktHtLFZwXEM27uu3uzCUgSvoVakSsKQJTcsPNTLAT1sfwCbww",
  "key15": "2iMRycnuKos51tyA1iam8akL5B4WzGonmB9knf2oBpubx6p5eECsYWPGyf1E6nFPLkNwGC7pAVZWDZQU9eAADmXP",
  "key16": "4onTy4cTYQixgPsodXMhgznnpAKqkRwiCvfGHrQoLUeV7V19muQbdq2u7SCCtjKKccd8998Gp1mM5zYwVSijV2SZ",
  "key17": "urKuYSvBsoFFVQafvBY5RrtYqRDojzxwcVTGnFnzk4jrvbqPkwTQQbJUkskBysidAJmbSpPtoeWvF4y9zsUFaDM",
  "key18": "3uUzkMEShHAdyWfmhVPiH9cjsCpfLvDGjQoPokGEUWhR2Rbv99iG9ujQGi5RD5oPrHWkfhujYyc7cWvYPViRY898",
  "key19": "4fNrSUHi7DQ39vwyPa4aFfztL5eXexk1VJ3r6yWgu16ThkRkQpwvRVUw3DGHMNCFENSqPMfGdgWa6HuRo9VAF1bp",
  "key20": "42fRbdzV3r22a9F5wAS9rrnwSwWiJKg96sXDH9ZcUdmJDdw9hb6oBzjTp34Q32K8o6AGcnQsdjdj6c4mVuHMguT6",
  "key21": "4YkXXt8bfeJBXGbYW9K4rtcxvHFgECjEUSgC9buM25mV1CiTEhmLgMYU7m6m2giGe73uzGdCHKiU35qzBQtNkyxm",
  "key22": "5ELottFcPftpytwxvA41hXUKxxW5oVDVQecjRb4Fd1TiJJjo39XfP4SuDRMoXrwyuJhNBCZwpxiFTfHbNugAXEf9",
  "key23": "3dXn7QcsXHRvTiX1xqi4frCP26DCFhzZ3AUfLaBAtjKmao986cmeKJqvyjbmyKm54VGHtu9udaYJT4rcQDEmBNUD",
  "key24": "5JKQGTkg7CYRbvGRXBgvEq7NXSmQiz1NmWdCwDZHptgiXF3AxZT2r1Hy6NkssEbVw6275fsf5gRhqCSp1znUsuyP",
  "key25": "472t9Yh11ns3vtxEwJhLocCypuid4imEUWGokoWriKV8MtVmSRQTmgZopSr3xZxS3mqrk2gkYyvmKD522aio9Dum",
  "key26": "RmM7TWw7sLwu5YpaRh9b7eh8brHzXGT2GgYi3ypUPQXTmwjSoK8GsYCs2f9EirgULkULeGsD4RRZUDTXGGHvQkz",
  "key27": "2MqRnGdwgobgR8SPSgiT3KGJvVXCBQ7cR3gzLR8GCT2KkRZCQn3xCA8E7CQtnBV8UTcjbQjxB9bQESqiXP9WAVcb",
  "key28": "m7F2Hd9XHoHW4kg1M7gAur1MDs19pEXRu73LD9p6amEF6bUWZs8xnzd631Tp1muhM4xDTuHYRQoNLfDNaSLoM5p",
  "key29": "3d8vztpYAGnqonTaf7HHgwxNJHRTYFZN5nBAzWB7ZePVSsAJcyEibuac8ojSBs33EFPsPsrwBjeCNH34KFSfxeZU",
  "key30": "2oAazi687HV8gvSftD2XLVQ1bYfSCUoWeHtZ5FDddGj3PUerSZpu4WLug8PkdPnXxHV1K7P6nNXATucHxQaqhkVw",
  "key31": "3YypKZuzvbd7c6xEHda2irHSbi7yaoRa4qLtA9sw13XKrrX8SGciAHvV8HzfE9xABpLLvERY3h84a7ZViy5VdCye",
  "key32": "41xTgvWFrjseYrdmVteATU9bSM3uccwq1wZJBEaeNR3L7GijNxjBidfCMRS21RERBcU9FBLjYpjBbydqr4Hju2iT",
  "key33": "QYRfZ9aKgHbD1oSHWkHqeGFiF3Jjtz5k7fW1yLFFqEwiu2Yyr58WjL7QWC7ujpSDKTh3x8KtNiTNgPxNdPvk1Ff",
  "key34": "3uzYchDWf2otdqDL2efCxqHsyXJ3gL7NHdtLNWJ292n5s7FAUVAYWgs6LDZDzHffT5YW3M4KRPNxWoDAMoDnugYC",
  "key35": "gsRxEB75e5kFYec25hR4MES32HNVFo7hTMJV3aHVvGE2THSsi6bYfLDbXhX5acducuNpLk1Bh8QZVnbh54mkxxE",
  "key36": "5oQFX1zeJEnn3Ku6mky8otfAvBYakESBXwMga5CVHiVGRc8jqp1YTz2HJkUyPJLibeGeiDLjMCYM5Yg28A46LXR6",
  "key37": "4ZKipMa5qUsuDvTL9XGUSRVhL741gejWhPz7qForvmqgDFHmY7mJCrnwDmMYXomXA9bQfPEUKnPpeGKpCJMmMZk8"
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
