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
    "5qn48tF7P5RG8KvdjeTc8aLqGnKihwLEf8yL1eNCbZ2dtDUCMovFs5FP5pRy2HYqGMEqvN2NRsUJBWaTuFUPj6De"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qVGJzer7megzysdFYqoJ1ehLmUfCMPpcRy91aRxeS6ckDLkrp2ENPZnrZtJug6xmrZBVB3tHL5q7baUxh8i9a9q",
  "key1": "2KLdK6Lo4biEkTpfnL8tYNa3CbpYos4ZX5HDNpST3MYLqDxUcWwsERvj9xVFF2XxPcwUJJRoBnyHKjah1ADKiZ9G",
  "key2": "UrM8AuUhXA1zPQRYPxdWM4wqBPFWr9KHDfYXUUhbhtbzRdzPASQvauE4tdpcb4S32bPY5KqZTu5xbDKhphu143E",
  "key3": "5XUXgCyMRVUPMKu1itW9Vjw8iWBSzex3VawrrPSBJnS8nTkYa4a1ToygSnJv24HKhMReGpWVWT24AichFTPo9rFC",
  "key4": "33kDVR6YbWJrmkbK29oQctuJv2Agm5CLbG3tmdqu9tNDrNJh2epAD2AfQGD2c1TT91tPvxENSvtLMPXSHEhGLw4k",
  "key5": "5jnKwyahcJyJBZow8F9jkGGZZX1x2TPQkPjHBR88vDWTtfX6fqysYcEyP7PixXyTvAC2qekxGXqLnxfjCdPWYvAd",
  "key6": "2nvzeGG8SemZLm9mdugeGdnDUG7NUVAZvqwVjvEeFRptqCuGoxcnpTWerH4ivZhytfbNpoEPpoR6VPXZnY4uzwh7",
  "key7": "i7ax93NkVpWQu3iqcQEhCpe3rf5M2RgG5fgFWxxgDUxrW9E3vo9rdMHcAtHwLP7ZBM6nUvet8vK75wbL4fLGkB9",
  "key8": "2JeC5ozneuTHWPzcxQEJtmamCWMTtAPHioBZEprfzoTy9QEU4LkKd7vjfxvn2d7ua2QtsAQ11uKh83kRWAEj3Ai7",
  "key9": "4nL2yppyXhqPfxrYBAuzTuGsXjd257jG8cxrfVBKuH6SiBZAsYANKvrK5rT8RbgqwmELHsHBPsCFnQqyqiPGyVoM",
  "key10": "kYfKyYhuoSFtC83Dz1kA18j8tcKmMQFdrkNe7mNtjj3Z4Ntwrn1J8McJyd7DDzAuY9Go3gvbGZ4fcgpGRRd2Amv",
  "key11": "4KwLZuotVDoMnZqMarrzg2eUYvZYWrMCJmSfU9Xprsi2XL17ourzCs14sgAq2XnPjzExHJZwMdxYQcT3hTXy5zwS",
  "key12": "5Jv2GPGXKK2kgdz6jaYXoD7u4umsv4UiYqje7iqkbtd1qzVS5U4W8tsZGPUEiruvCSQisq7haXFmZbFHprXco3nL",
  "key13": "3X7c435Cn7jWLTekCBDT1MxfZvEj9ijHSbJEZFgKxri5UEGnGwEUYtAZ2cbarVDjdcAKxbKv7pWJiJq9h3tVx1Mr",
  "key14": "f8GRL8RHzHNjnwgcp5iuX1Dxn8Wb2DaCdzUAWKpsUwK74ZnQqeBwVi5TTYwagcqPPBoB3BgsHcUbiV6i4CGuSCX",
  "key15": "3vK88UfaszTi1uLnmehzzwGhQES7Tym5VgvweYvpyuy995kTBq3s1SBxc26ZgqrVn8a1MbMAPe8VoxJsbN61AA7n",
  "key16": "WpNrrFDLrw9HjSHVSjVUWqdG2Ke8j5JCheKbb355FDULDikrxchzWcthEto7KYf9PieNfWtwcVPFNHoPePRmco5",
  "key17": "41pqGsF7k7XFGjMSW5wutyZJyFjPhmtE3ihtgaFJof3AvbAsYXB9ZZGLrUZ25EskCB2xkyKmLtAhsTg7KS1sBHXA",
  "key18": "2SsMrBFHwrokKETBoZM14L1dZwrhniva7ZVgGjMihpb6hJEdWBGqCE97drzwUoqLGj2dScWzBbZvAuAPuvBzVVpp",
  "key19": "HwHmWyivzepnJVS188of4fRnnHfNwzsM4SMo7JG4TZSMRWZZStDEnzV98QucrjdNt4KJJ11mDt11ZPRmGvi3Wbc",
  "key20": "51AeoTCZUmH5mX5nJjzURCo7zDaEHfWU83NjKgkRRuu6NjQZDEzrxVi1RhPczu6jHJ8VmRDYwY6XHdL3HvAWCNTQ",
  "key21": "2T8pcqQ9bcXJ58sFxNa2QJFaNcTJqEwdsWsNHwqxtevSnXjJazzzNakgGVuny2TazP8QHCEBi9QJfLuwTTXXu8qr",
  "key22": "3e1Y4ALCKpivvuw7FDDvptM7ExU5yRAmUndnmWDzWD3ZUJX3B6xjA13tErfs5BSGcpDVGL5e1QLvCktLX2LezEVJ",
  "key23": "3yYeGZFuJugXgZXnguSsbGmgDuR4zzNjw33Udc67t4hYAADPjW7ztxbMro76G9xrS8vT7mWNw7CT4TH51TS3wt8J",
  "key24": "5c8jzju17aXhUbjNAy76DHmhob6Eti3baSDDnugjhCeGEWex9b2vzPoNS4gnNCxDECJCoF59xYdrYayAB94MXzA",
  "key25": "4oyE1F5Wbrrk6imCPk4TecEVqnsHhmTaiQFcBzF61zbzZAmVU3YP6b3osTnEbFhDCTU7kuMmjDh6qy1ybZqmbHH2",
  "key26": "4uzgEB8yHT2BkKdPtJqb9GYfBCqgFHsSTZ2Kc5MYYKgZVXpvqFxn28fM9bbM6bV8N5b42jHv6T8m29TEAA1HGtEg",
  "key27": "4L1uRVYRYc5gCT4bxrJYuz7nZcJzXsmuw8TYTHJ1LZ6DowjkkySbwfgbLn42iCv4qtNZMwq8nJ96XPvc3t67UKpC",
  "key28": "4k5mji4T9Ng6Ui65rzzA7sarPqYsnMkSNN5LzPZXBAZysJcv9Pj3ySbQuAs4mmJoeGYRRfAM5v5h7n62K1iKyFcG",
  "key29": "5PC1ar814isF9otpU43yK5g66ceLFLGq9PEUPVS1EWyJ6SrWnazE6bA67KDqRWWfb8wey6UAEypVytgDHg1FtECd",
  "key30": "kEefrdYA2qZen7fDJYyRV18rbgMKHcrmR2MCkZYtUDx9pXS8LATrXPZLHGk55BVMLENGQKL8EqYG7VAvkbqkLV9",
  "key31": "2hNt4RTRmZ9L6cjx6g4jpmHMToawYjuqDsaDpAAS6psJgWDAtCkp6mUKfvCTyvG4Z7mjKggLbG9WBCjunDXzMoDW",
  "key32": "3UN9DsnoY37ZwqfAUPc95KtKJTvkK6tvUx4Z87RKZK8JqhCMHTLrDGbZ9Yvaic8BPmsSwooZXNt7RPNgQbmcZMdX",
  "key33": "2mzZoiFXG7iTXkehfmmGrshavZGKvonMiQweQrBQ1DEHu3Ti8eUxiMcTnM9hM1VFaJdaJsBV9TqYm8pSs6dPFBqm",
  "key34": "3exT7cDwTngoKYGWAC9aCTbHFHQsweca97x3KdnE5pV991qNA26EUS99iuLWLWweyRNTZz3UHEd3dC5A66s9yTq2",
  "key35": "1GRm6DBCpbPKTfGS1yktdCRhojgydveq6TrdtqWbobwE3LXhwfwMpgVx3f29ipr4734C65vq5BySSnLcZT1T4AZ",
  "key36": "3yTwRGyud4UUAbx4NjJfJ2HmP6bZfQ4XWLcY6C8TN53uLruDqkMbMjJaHN1CuexS1itpfCToVV2VDRVQK7ebPU17",
  "key37": "4BVM3urXKjMymtTtUhatJHYaSrjTaSji3mXRmtitrQpmNb963ytcuUaW9Tcgy2kQSM9Xhibqmi3pcvphgX6o5S2r",
  "key38": "2dy2WBfju2ES4Q2fFLXSwwKxcso38W8enb19PPzDfqPosi13NegY94YgXnAQ2D4xNGWHmdpbCzwy9LEoTNgcD3Si",
  "key39": "33g5tieNgp6nJUT39gVkd8aPY62Z6QYLPCNv94ghwyNohAE1PkL44GQFM7DZXeiKXNPpMB8aPNPS4RLjFQPf9z6R",
  "key40": "5aQLB9rRzTUVkRABHk1TJe69RDPwWfWRczEVeXDz2kJcNejC4UbvtWPX938nsK8AavXv32qjfK7akXESFEp1hJJB",
  "key41": "2kMrYp4Fpai8X5ixsNYr123RsKzky2WtxxduTB2Hq9jX7QQzzeUWbjDPG21LSRNBisVUjVzcUGZ8WfBur1m8RfKg",
  "key42": "UbnKFDNaSaSQaJ8NE7qf36J1cR3akvBVgUxscBMDGQxUh9FoFXj8Bc3grpubcCjNJm1vX9iBMrxLQizAZVNA9U9",
  "key43": "57TGDeVyK1C9SupPoqNh6M5mEka6BSfSpihxT4qFpXgcnYdSBZcQ5dgdpB4tPSvsnEnz1CeXX6DVTQv4TMHCZr6o",
  "key44": "33rXLWhwLKFv2rX8Q4kci7ZfYWfKFXnEuAaGGxbXu7qx5bUUUJbPzvkrWkBDVq9igTgedtZcng2v8djuhVMc2AYL",
  "key45": "4fZ6PXLNVJW1w7zbDUn4vCKHNkNK1qhTUhmeynHfYaPZvudf8wtYRVqqSXPhQc67HYZqvTKborHoQgX15TxFuswP",
  "key46": "33f2dyi7ZYbqhwDCZB8nao2vXvUeLcVAGnECrYECRiMiT5Ra2JaAf4MdM6dhXovJPdBT2ZhK2JKDR3qz7gpW9Eiq",
  "key47": "soJGPzUJ6CeLPizhJfGWry37bG3xzcDJwoMNeRSctMMChvoP8CDXGBBuH1Z5iQ7m8JCpY67pMhGuJ24o3BASFE9"
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
