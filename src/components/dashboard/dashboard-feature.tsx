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
    "3CWP4C9wsKeRAGAX3x3RCN5x63KrqBFRrxQ8KLfLzJ44AaJy23Eaz1EBhyc1tuM9nxSw4wfmwMpSCAbK4NedbxBM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2s37GGu9rEoRrBEPJdEJH2MfFKhNEXpNPaPDCGbhCJWMkdsMHp9irQUaac1ALTfZ9A5cMC7EzQ1hSK5mWnBEytyD",
  "key1": "467GhL9SjcsGdc4S65y4YEmXkxyZQkAd3u9g9FCYjABwgrLg93tLMZBHLx4AxxBMTVvNeTZtSfkV8T8M1vKqi17E",
  "key2": "3HmrF8qE4i5cCzDg4Xox7zjv4ZnPGvyztSYJ7BtEEJGWJw8B3FxYPBQ2VvKZqWNsBmV124AJ1MwzjHR2qJHU8ezQ",
  "key3": "3eM44jyEXqz9rCqmjnQJWiwzniHvLBiDU6vPRB7ZXc9N2Fgh97kMPKwKYqU8DK8Dp3YM7AfR6qiQutizAWWrBHK5",
  "key4": "5Ea8qp2DkNxmcE8aMpJcXeFcruJK5ZmqzokvAJP5hChoqGUAg7ZfCZ2RZRtcWzdzzw7hioqHBfFfGrV3q1veNrwV",
  "key5": "4FEZ5RR9PPnrdWfRAT6d4w2M79Syuy8K3sTQXfupEJ8VnLhgJMSvzP5BFcFAVYuFt1nRp3awB2U6zeDMfLAqRnTQ",
  "key6": "5FoSEG7iFBs2qMxsp7n83rbGxbLP1zyGV97QLpLKrVNJ5XZEfKR8URNdczgzPeVzfuxAaaYAcVnBg55kSHRcCBMG",
  "key7": "3MHEUNJ4uBPpd3tUa31BmyKaKUAWgSXXJqRZmfP5trXUzEL9ZL6JkTjobY7wzn1UF6sMrxS8Vn6iEK7DrjpvWKbn",
  "key8": "5P7cyn5HiuBJkPuvD4foCMg23cri28EX7AJc9pt3FmRTVR84WbyLohdJLDqexj3s4tQEPneCtxve8ukVwpfiuBMQ",
  "key9": "5JRLiYHNK4AdmeEz2mzWXXCybpRPpkpTTUBtK8NDvTNUWb54fCLCKNjkvKteViLEemuh7hB8tpnzXH7RQGvG1y13",
  "key10": "3LEvHsfm9vHoiTGSHx644SNGPo9dJcYjrdPf8wWp8ZPkaMqvrXEaJnFhooTt2gc3dLznipsmnrGxBqYw6iCz5qnA",
  "key11": "59xKUAUtkXtVFBwCnYRDrDpoCXo9jopSBWXtG2iPmr69i11S4CCE3iPjAUWmnpCsAfgC3sk1kh28zXhP8VsAeskc",
  "key12": "5PfQnnuYEQPgYeuvm8wwKnEXG6k1yonVUYi6Ghb4htXWVBS9fod7acTjtJJEQckAQbwDTF1NEKQwGYN8YYFVKuTJ",
  "key13": "3FwCSAfbWhmBVaVnk6szvVkNabPsjF7JET4VjmghgyFVpAg8wTXGRZkq4SSJXvkYAbtAAEWbC63h1Y7D7vnYPRGv",
  "key14": "3tvkAG2ngXCJRiS7oRiJpEH83cnDAsnfr6rvAQj5SWcGTkMY9hikedo1q1TSFUeFR3748D3rKTGaSr2dDRhko1WB",
  "key15": "4vMAF7hkS567Y2tXCdre659DiZeR9wTxVpJbFZ9o2v3Gg3ByNXBcVogoGk6GevxvE8s8izWig7SkNyZZHcKu3eJu",
  "key16": "4D85JnwW2z2WdahHqAbT2XKxJA7rk4e6YkLeZSg2wSiwj7xBuxTygBqjDfTEBYG3xxBm87fvompSKzxES3MxV2uc",
  "key17": "NydVtCYoVwmrRjw1U9SEFrux3NX1y9cd97adSfXr4mvFFQpJT87UhK1phaNmm8kNkm8aRksGP1EHMJh11syPF2y",
  "key18": "BuGnAPqv5UJddik4AzZ6gmz7tzk1b9M1Yy1Epxxr6L778SEBUY6jDCy8Ai78F14xTpL7hnQsYAgshPG7vSb8tX3",
  "key19": "3qNVcBHrpS3HM9VUXcvdzN3fZxvXKRS5uLmYtSJTWBb7gMPkmqiCgxJhyVwn2JYmhb2bfde8UFKZZaYQGMJdd6jK",
  "key20": "2VGRxXXxR2LBd2nVwNJ9ERB47ZdHkQwrVMFWbdPfW1S9G9q2Kx8Wg7ZqeeM6NB8B2nJ8rd8EAyji9Rnv8UTsi6Qe",
  "key21": "3pym3TEC1UFgpYwcg38rEFufDVBU3nUPDejmTBufgaQoLZeGpNRNkhbDWfuAsgniB18CxiSrhK1cxpBQKUiQH9ci",
  "key22": "2KnUPsNQ36UGCM9DfNb9GWrtFzWpXdDpQPUBYeHRfxEbWuqtpG3hSH4nw3rGB86dWED4p6cuJGYPWfUpZW4Tr6nb",
  "key23": "4j5bztXE1SNeeptz6QRp5uVMDDZNComGAMDyNtZTxuQLnZj7Zmq9Gb2ghWLo6oZB4vMa1pJhTycF6NPACTFRt3r2",
  "key24": "So3LF7L8QxmeR4eyzkkX9oojJJBAG6sYPbNiWXECDwAiAZUxwoFFqmgm8yPj8mBSLt361SEEupEoJk7tXh7dpK9",
  "key25": "2Au8RPU7R9cLyD6UFkR7f8P8oyhaimADaJgdmhTLxxuDqG1T9BMykJtWdXKpXgMxPUBn8RKPS5A3zE5G4bdmFxbT",
  "key26": "26bPkJFkhCsMWnhh45hhrKKciyWgPd8ogjQcRfox1HYFsnkfgn6gQALS4qsR28eFKBEX2VcTxwkyamjiygVCeyHg",
  "key27": "3uJ4npUPAkkrDzR7sWaujntmRzfYshtKyX1LJghXFjt6y4kTqGKiiMPFfRJyxJXvVtBWhXPPVknm6iUDDyybK34o",
  "key28": "2osbbfuPEA6FppKasMjcTPgqN14uYZpVFjkzhkHa2MTZJNsVmeqSufUkWThNn2jx75Taauq1MbDcDcdJBTpsxAzs",
  "key29": "3KeehP7csFyW6mniBLVsDxyJEUnM4ryQgLxANwAzaKV41WqYQNib2ujMGwhgAnJZtQSXGRJz9wmmn9TT2qcqq7rn",
  "key30": "4RW3rkHWLZGrWDL6pvZsjyqz67NCqgDAUwXk4epLDE9VnWBntfFsuPBPkeSsqhn3ihYS8A8SgPpv7jY9HHaQh7Wk",
  "key31": "2McpJitgMqkNiVr3KR8hYA6m5o95HUL9r6Ey8phkSMSZsMDkf4hmgunW6J5t5U9dQvL4L5uQiCThT4dqa4UofSWu",
  "key32": "3ouRnvXdZybg2PfmeXi7fL2gVFpgDGbDctgiCXG451hVSpUxsBn5oWKUCe4yrX59yLxWQG22Qg1AN77maZWArz9",
  "key33": "21iZnW7G3mbj5fqgzJrYuWZhqiZVsFAPJ4sGERpKvNtZynmcEtAHzjxNf8j97ZnV7Q2Q6bjVEnFWDJmn4Lb4BHGh",
  "key34": "4bRx6VAW2wEwKuYoecm3zyH3RzRJ6nKV1uWdL9hpCkZNyuuTwTaxrQxeKWGs3sK2uejWwPyNLmhJ86GbW4xNHCda",
  "key35": "3ga65uGxJHPmZ3mixqvZiQwyvyLEJNxTibu8sxSfj1qpWuks4rbW2AsXxPwnEeTQEts3FxLNMKtqB39hQ6cuPaZW",
  "key36": "iX3LHRnaNXC7sXteAHfppScXeFm7MQv3ML6Txsu3mb3yF1C2xaFaUDVjcShoDkxLy6RfuuGrHEnkrHuvLcu4Eje",
  "key37": "67reh61WKYiQk2tGsszo6oAcpPrnBwpAtAZgxReWNfMYxELS5qZ2we1WkM46ALNQBuHEJcsdXQGuJY6usxD2dhLK",
  "key38": "2bahVjbRqG45CZiTERYELtB7Cf3V9mfdoRNJZ5FnZxw1F1HYvkQSAqMHqeqt9tjcWg3CrSPoNcFGRrzPYKPZk9Cm",
  "key39": "4bZRWu8Kwss2gRNpDUAB9a8D9Kvkwk7mToAQ9bXm38vhNonSL2QbKvu7L1TDf8u6gqm65N6UmozR3kJRrS9wiymm",
  "key40": "5Zha3wm4KpAx2Y9NsbTqCEMe1WuxAPecAr7bvXcdm6U3VboSrVi3LphrYGQ9ieECeznnz4TrmkXKoj1hTw1TXFTZ",
  "key41": "3HV7m5h1bPbzCTofF6NK9L13rwschYCvvs4HZbh7sAgZ6vYBXYXYqmsbm4YwpxUcBA8T4dtrUBzGjgc2YWpvkSSv",
  "key42": "5z2TeiHgckHghcVTVZ7hnhG119Z85MMsqEZkfKGSs5v9D9ZdqXsghkMyXDASAb6U2BRJksTLxHjyGsPpyznV4QwV",
  "key43": "615F6c11tqPK54dNjjhUERVqDGZKQA4yBWdgXn4FcF7kiR4enVKEz4Y4krGtYo1yEhJVNiH4qspnMV13azbep8e1",
  "key44": "idNx5X32CNnWk9MVf9ygEaZJGs7dWshzigkDDpyoT9ujnnEydBUFj4g2wzP17V9mmESBdgu7b66wLQVsbeecSMF",
  "key45": "5GPTs9CR6jiGgeyJQG1ciVbEk2thaj5iDeid7uzgM8rV16eVMUXriRYuKxSmLf1u4HsCEqNxkNXSyELiMWGbJ2i1",
  "key46": "7FZY8qwmvyREWVvazQoVey1WVc6jNAh2KYoNrCLnPgEQtviCF1mRvgFNp2s3WrEvExCbwKn1JnHBhEyvgZAHnQ6",
  "key47": "4zmS2vfnbupD2y2kHAeVU6t32vxSjyRiQ4bVVNpsZZLbfeAgYz8iA4pX6cBFuoTDbrqRiQtR7j91rKShtzgyE27H",
  "key48": "26yrGpqyvGUbMwTj7f1CV2UK694RNwnyzV7dT1GoBhB8PepTfhYmSFeFSjjgQrQArnqxeEWGq2dbMtMdqNE7QSug"
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
