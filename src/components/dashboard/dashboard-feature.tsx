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
    "64sPFqi13VYKA9TvMePyNa9oFWExkF8y8WRX4NQ8M1QvyNdnXxuSYs2oBaxGFGiQCQPqRk94c328HS6XSorEpJHN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "511ZK3hx48HEPe2TPobtTqYD1f2rX43K4HjDPApayGxB1QbuT58HkyPjAwEyZitkEUHJm5MrBVvL3U6c7zShJ8FA",
  "key1": "4TN4bttKETTZ3fj2MVURWUyGNmYcerMJhWGfWueTJXRiUWTLTFJTEhGKBSEZYHQJeKGoxNTxMqJwxtpfogkmQ5u7",
  "key2": "43wdboZ7ZuDdDTHxDNXFSyEcf1XguZ4FhsTox8RvwkCa582oyRj3if6QeoQhQz5D2SVeQRbdrKV5L2NA7oXBg2rj",
  "key3": "38EqfLea6scoaYRURyRiR1ifJtatBrSJNdkzVrF9Sx8dUCFkbvDfExSbpEGfcFseZEEdY1yhS9i4iHVF5pNvu3sD",
  "key4": "BXRs7Ff3ZCRrar1JtjktCq4gDXHyuuHJDmdVGshXp1dzDygDLJcCRzvCp7qXt85UfP81mAg3DtZowiKRc9n3Tmj",
  "key5": "2YHUL8nGRZNpK5qwndtxLNZEDmaEhhNMGWC1TUpyZ5g9JVgd62AkvwFSJDc9R4UvHoUjks5K8cLNV9H6s6J424Dc",
  "key6": "2ZGnKhseD3Ba1y5L4Zq569HoqjXwUVVaAY1Vw3voVxkYvLY6MqGvaLuERWNh5vx3MmvTTHgPj5CMgaxVDfE1vB3Y",
  "key7": "ZF7yVwh9hVrtViseEJ7mKPxrFQCHUza246wGR1iiyVyjcj1vcYu5VYtEGjKBQo4Bd8gpgRULHSNZKoVo8MCgSyH",
  "key8": "5oWt1ov9t7SvxXZssov9omaH1myPEtQmUMw9BWUAN4RFin7EMwaXFR5woz6hgU2bTDBUiWKNe3PSMHCGLCT6KPM4",
  "key9": "m1NeJTpTfBJQhS7t1DcDZB7ZkAy1nYEE5KQM7a9QUTTKzizQ4kvLm9ug1MJ15ZUEg1rYUaE5hdpdBtbp2gudHEo",
  "key10": "4sWXGpbNxX2Fxb6DExyL7bXoH9MyHX6w2bmUdYzDQFvVacZ9mujTAeVfS2QK3FESeTSMEipWxpQCtsQZ9rrh24eG",
  "key11": "2ERsUit4pFncUyhbcrWdBQJo5V9mtdUznCDQxUFK7RHNJ3k4xJUV4znzx1gC8AGjKnDstHE4WiPSKW1suG4w2GKN",
  "key12": "3HohmSjnzmmCg8SnatDf1y5iyomRCQjFXe9oZFxNniywzR4PznomJv4BdakCVjvAGRaPEumuaun4Vb4Q9Rjhtknb",
  "key13": "2tUbYx1DuUQWe286GP56ymsbj4FNj6JoDZMU2hh65ygjD58g8LR1mSxqKWWPpRjAB4gbHKzV3YMvUsxG1wePtG7F",
  "key14": "J2tnCfjbxtSCnvBjDf66JRHe5aYcv38Mupf8hTHyNzPcgcPTf9NVJbZ3AETgegAAARNmY1AFvgTLT4C79WfNQ5L",
  "key15": "46Q92xCVVqsqvHMexBekxUFg4yAsJ2NSxB2ZytQrA1fopP4n2GGRPtuvqcqQYUYa8BJDNyiAiy71BFrajPs4xyeF",
  "key16": "2DBUvxY3tWTtNUMyMFxx2SLqw1R4cPToJ3bT7jQXtbfmJfUNrDJwSxzr3LarqaKJjkvi4pBj7BDBdbKV2fKPRxek",
  "key17": "CVAiDUWUCKrMhMa1e8TKEnxxmVwS2t42XXD8imwgiUHVEhavWbH16REnWv2Stm2QwbjBwSsSEWFxmB1ayV2UgxB",
  "key18": "34WJDWkBq9QUjXxbDxDFCmTVbPuJ3LXLf551dSUTGVY3JiahHNnAN2MeWoCTc81jbLznGA4dQNCW53Awz8ipYhMD",
  "key19": "JRMcADtaYAs9ssNzNRFJyK3YWCpEu2FqQJXTCZBPc8PByvJcCL7H2wqHjHnkW2o4Gs15Ka8tAAfkdrs4LVz3eV4",
  "key20": "BW3wY4Xz5eajvukWewaMfP25wU1uqDWZHGZ4Cne8aUQ6YqCWQdhnzKk69rRBFAnEmAbKUKYuWF7myXSTPQC8qwq",
  "key21": "Ue23DGMA7vdJ7M5wn8vsVmEZJVbKo3cXY7oMCivngTjmLjjJQ56wFHgYFZ2xdm1CWktsVFkGSQhrxZKjt6z5DX5",
  "key22": "3pPAtZrexy6ZMRcCe6NZdgouxLYUZuGMcuwgSoMHsyo2qCUmk9JGW8T1J7xV6vpHprBJmGzCvvUKVQcWpQxMbJRe",
  "key23": "3psA5Xe4Soo8BVFvrxa1BuTTNsNh4Biwh7nhaLv2fzc41KaBadAKt8bnVmXut8dg7QkAZjpN1LYoBDjyfcpTx3Nk",
  "key24": "5ZnR3S6gUWg8BTCigT2M1URjfzaxsWCs9d3X58wiNwTkcY1uvKCHLTLEaX7miNzGHrckmLs5if2gYUsGJGmeK1Vh",
  "key25": "Wk9ouPi3jmcChMWR7y2vWcqxsXiRQ1nKvsSg43bgErT5fMC9Pz3G6u2hrV7ErsQgrBv8yP5UkyRB2ieqG5pPonS",
  "key26": "58pTPFBPCvUBFXGEEhgyHae59mWsNKpGrqXkbcCSepd8JyMU4Umq9qzTnaoihDbGmAQ7jMctUztAtEWTrD4i5Ly3",
  "key27": "irszBgAjuqjDGBejns89oTW8sm6NwqgwqUcx5LwLWCEjqfZDiEZjf9sRF8yn4TnRZ2VCqzLLQEQTDtJ3tFdJgSf",
  "key28": "5auNX9tf12uzyFXf5oc5q4cdrzY9K9aUE74M1vE6jwMX9nVJBvC7Rq4dqf76jFRH5o6v1kcRHFPzDWCYY3y7M2th",
  "key29": "YX2ws4pcdMmjTtavradGdgrTxxR5DGEthCaWQjUQdtQgNfZ3zs32wXaTRrx5SoyU2vgYG9xz8tYQGYkRoaLSvxM",
  "key30": "4xkTdivoeXDgB62c9BjJZGZxZFcSteA8tnkfAkUB9aSMr2JGXF1UvD2hiqQ7v3sX2JZKqB6SWhUo2rACDugutuP2",
  "key31": "5t2WdQrWcKsVYHzzxVUKHXdWggmQz5eVdhxBV1yCSpbCgpycAvuBjtZSgK8gUFaX2xJANQ9FMNavzahRmCifaDk5",
  "key32": "2W1tkJWFy23UJjv1DAF6zK7xQapMYHFAsqoTyyHt5dz93Yn9jMo8pa4YEsednPDoxuqHNWCXwF5NvjfxMQfinVBU",
  "key33": "JdB7Qo9GHhSmwxErrnCFhEqKVbNpT2k3udSbmy335xYUQULVRyijjpCYUEp1vHsNN6GrFHAPBsSqr5WhxefSomp",
  "key34": "4Lx7XqAT1uj2udgGz7Z45g63SDVs51QpZeofBEhYUbzgPjPXjNK4WPk2tZhqHhJij2Wu2TdtemDjm8EnJRiTh9Re",
  "key35": "31aSe3XKweW8w53u6NVmRrPuUpfUEc6ENkqtjeHpSqTiEYLodqUpseonvsE6yNy1D5J7krU6MoaqxvZXS2QYovDC",
  "key36": "4LZNFpnLKFCqzhJ2aLRaawLDRLTDQdbng1z23pCJqz6Em4ZDPmAhNBUo4LA4drWpz3nQnKCdZBRYt5us4oQFZZMg",
  "key37": "BDhBD7WP6kaXDqzSWCNMQENEsEkczoRNXT1BJtDrcBQwkuwfJPogy3XvVq8Diz22zQ4Z2hcs6ifS4ubD4ixrgRv",
  "key38": "LHs8PqreFSQKqnn3hG2EbxxDGmXschh6hHRRpWDCRbf4w6TFVhEWG1wWSvdidyJZzLFG8QEwCqpjJBzeU8hJHZJ",
  "key39": "4U3sHN8kVC5P3jYFiuYisgw3rAHqGvgwws1Y67wpTPZbCDAHwBq15dmGqpvE2Ynnt4hbZ8UU5RtM3r64RJ5UusiL",
  "key40": "3LpzxxTmHsJ3w5f6aVQ9eH1A9G2bLYMPBBZsHZ5mAqBLK8YSRd1hXxHbN8AB5vpsfynKPqwXpxW9Cbn7ZDGPVkot",
  "key41": "2Ar1rNqVNi6sJFA92rk7Xc2cPqY5fBUbWaKhQbzxQuxjrFxib7s6xn5FMfKmsdvF2o8yrUXvkNUk2wJaSvN5T6Pb",
  "key42": "59VsecLjtD6sSnv162xeEmGBCS52Rk3ph3cG2WfdpEoe89kfcDaTkZGA99Kbdf3HRnLCaERBL4vF3eWenpgD1aqw",
  "key43": "4CcqZ5JCBzL2tF5YC7wPsi8vsckrLkWJNHpXGxdkrJpMW6fSFWynjr5CiznE9qkbb1j2EF5y7XoeEsyqqheg6jnX",
  "key44": "4bBfL23jtVRFSCpJCbfQLfpSLrUVsA8EyoqVhDoxrbcXdbYENL27pY8aSuAwFgB7T21piobV1GgGT2Z4aKTKQVzj"
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
