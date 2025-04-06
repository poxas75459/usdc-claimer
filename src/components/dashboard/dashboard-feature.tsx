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
    "KDYsaYy7nUtDH32fgqoZjSzeMjiekrcCjBzZLkLBwFGkQjtF6P38yTE9ZbV2V8nG3CQEwZRBLvVfUe3abTznjAK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "335eTNMWqXLErmEo3kDfL9atCiDgqKJz2PN47wFqznBBfbBCPzqvaeHHBxiNbFzEYuKBEtf8qYJrMRCvW14rc4T5",
  "key1": "3qUKqjm6QAa8LcnjgbxQR6KsEjhWtrkyVKSpUQtrWTStDFuxv9Jfz2PV4ZkmB9V6dqgRrNLYW4e7vyx4VX6KiPd9",
  "key2": "4v7qJdARqjcbpr8JmFLb3RDJgFFXE49qrBTjUPuBAv3gFV9kZbarcMbnU9hj5zjgRgaFw9TUoTB4sadDK7woxHgL",
  "key3": "4zHpXxWH31GS9dFM9eHWmW87nxNrxKKY26qhXyvwFfQwreQHsYFVG4P3B6YNVwJE1Xjw4FmW7uSDHk5NaSMHXJEK",
  "key4": "63YzDRCKd53xjT2ERhopCqKtgqS6sHajvbfSsVMg9Q2UYpzaAzM8i7F51PBfnWUiQ7ewY8waRNwPwfXzXtweBCMz",
  "key5": "5qKzUa5csK8ydyNAFGyK53fFKmgiJNjkyEDk4nhNRBbKxZHr14RoTq3buz8YE1gge4SGXUH47UevwzC6WtyNuZgq",
  "key6": "5epz7y35AYy3Vkno6ngjNwdSwJK5pzrw6mCZFPVedCT3bFrAt37xgV7Yo7JHLFg8vKChDok9uZeorgAkdvGEhu29",
  "key7": "3nSuH8VtQntjMrhXqmZTpMK3Pq1RBUH8Q9FvCy58MYu9bnzqv83o1d1EDfxszjicMRiatBuNH9As3RjzorjhAcMK",
  "key8": "1vu4TxKVgXEi5nUcJyvY6BqtiPFwHH7X8J1PxYeM6QgYeQjgLKderVRQ52frx8Ui9SVyqHHygNXqSsNLy8hqScF",
  "key9": "3UX8dLSDWP9mUPQGjKQFxKCbZ8aRAfUERKURMdBXADi87s23mjaiDiymGJWqt9e6M2JgpGSxAt4vGpBvq8Xr11JD",
  "key10": "xMNaA4joqqdboJ2b3vXS7KtDNm5Qvo2Xi6PuqmE42km1cN3RCe645auKnhvvGFBbER2ECZri8rqhD315AFpeGGy",
  "key11": "4bB5YEJtp7dJQg1jCURNdAPLWkMiFDa2T9KXr19gN8Gt92Cx1v2kXgaEPTAj6MqqDxiuuGNsJVHTf34v8U78p6XP",
  "key12": "4Esgw7xduKstSbaz7BDwf19himbMwRqs9qB7hx18FvPGyjmRAQgqyL5GesdT4itBeuD1wxTTL8LwX92STKorL65u",
  "key13": "5zp1FWVgn4hihECp1KVndpHRy96wWpnrEWQGnpYtuGceBb9y7CtRXqRuMB4EcjXVSMTv5qAuQBKKncbGYY1vJzuD",
  "key14": "xsvyYr2JPT3Ub4vMVPgu2L9SJShDA5wgw4DBqUEJwwha8B7hPBUqMXSAHCuJby5Rvxm8DgVACD6K5TWQBKAWtyi",
  "key15": "56TbzAkFzKD2vGRYdi4wJCGzVEMjQ9PvhBPBRBtGYPx41f5MHDhidwTzYL4o6YWRJUzkzFyyMzsixCNbLfESaBML",
  "key16": "jekntdVnies8ZHqMJ4hUpvDTLc1QNktPnb1sEqAfTnoQm74m68eeWUpscFRmAVBK6e15ESpaBagZhzWDUE1BySm",
  "key17": "3VZRyjYqTmVSAvzmYemStTgPZuVVviSh9CpjSPxxniL6zUXvAkFZCCMvpsGxubBqHNXmhNmTPpEgH8csShMGqTdW",
  "key18": "384SeKtSHpoc2p6VbyxfiF1Vb4s9KuQVEYp9fjJ1HifqgdsBXvQzMpjectmpd9CxxVnrUT6s1FHSLgTYTbZjqmhr",
  "key19": "JGsDAPiUVyRwhAyrNxyYbUdAJhtLe7iqra33yZTJ7iAEwn5YwXjpPYLswwLFm1Qfw2TuxNZRhp4ZfFpE3XN21eA",
  "key20": "2QheoR2T3j279Uu1b9rt8epmNpEb8EjermMmDgDp3fCQP2Q7n7PHmmxWKcKgeNyKz8icRdRJsmPMo7na86qLBhx",
  "key21": "dTt2CTAv2WuM6iCfeEUspeuooJDrVotXeRhaQKbTCTDQNo3zSe6cmTFeqnn6Zyo5rGjPUsCuZUWQyTmStAAMrVu",
  "key22": "4eee2vZkn1oscBHE1a8RzzmTf6463qJSAAoeeCc4RQEv4rkLrTCCbg3gXV9y7Yh328VHyxZ2WgoYppcyCmWT5Rsu",
  "key23": "4w4jDobmpPZ2d6rFrpnMCVRLbm6coSPWCEX5TxYt94xBbLdZgG1erUcbyWpvFCWmTWZtZH8kUTrckQc9wtZLyuHK",
  "key24": "3JQsbQpcEe5JuoaqhTkpxCytFPYdspZzWDR6iw586xE2nvot3VqyQispw8yVdnA9L3XBo3wEyTNtMvkTJJxGz8mc",
  "key25": "2xMvQLVZaugDLKRRPsqyJaUWDVJs3NTadu5pr9doGdcQn223o5GwTK8bkHqCQPKAdBb4rxSq3W9XZoAAgba4s7m5",
  "key26": "5u8VZ5a7RRamAqLDJ7zM8hwUTCmvLZsEBn72RPWiTSXn9LXz3iwKfu8Mzkj8JBruz7LfH9Ydh347RAByjdv1ku4m",
  "key27": "57pKUsf59rXrCB4ePGk1wJ25YLX8rEhCUoZ9i66mYPk2FJvvB2cdwVf4WR73ieVftg657pbabMzPFckxSHoGiwTo",
  "key28": "QoiepFSX37SpRWka2J1Fh18M6nhGHUT76uqMgxRZ1frqUefHZiUTthVR4dhAkggtLgENgodvGxtVJGwB9YB18s5",
  "key29": "59MpvFo1VPrtmXYXnkwvMjzruua2WB56at6nAdCD2X5DFbUb4GbdZxaZ3dc48YLJ52514cA7rhf72M69CFpjW5jX",
  "key30": "2p3rjkucUKJAUBwesAzXU7otLprUcpKM7Z5Hv1qte1oEhcAUe6WGnqJLrzMVfW8hTeVME84qayuP2ytAW5dqAZPd",
  "key31": "i3hxXWxuohdd65cikhwbFq1pKXZFXVPXX3Fqd3StPD2Pf2BcwjfUb3UxyNiQLrUnJyY68h13FoUX5DWm8ZZnGzb",
  "key32": "MQNgGFepVCX1XfiLRSpkJYXq3LYSfnBMXBhL5r7a83PTQHV54RmBizx6KbMN4SMoB1PRuvNtxA5cZ2i35gkFomw",
  "key33": "goNqrJmJSvFbSH3KFWA8cCc3HmB1dNpftu9m4vWTuQ5fBv7WDVj9BmmGJqYnNndZzARKcDSomjcQbYT5xhgtVmE",
  "key34": "4YYdoEuRGzqUTJPJokDdVVdEnREZkdRHzqFLfeZYPqVMSX7vT4Z41kvkxxJJa1gx5tP71qhTU9FCgPaQ7UmUNmkQ",
  "key35": "5WTC7bN7rBHdr95JBgB5TpcLXEEHzoysgMkTe34N8UqYdQeGbDU17LeBpALq7vGLYNroJ3EvMWzCuSN1DEHKw2ex",
  "key36": "JDvjphnL2tKewfn9FM5Qo49ebwmCYooXj2qqdXSLxeq88kdJe8A5X3uMPepbSV9uz9fygfvRnCJZVnDfCY8LtpP",
  "key37": "35X5xmhhNvDVPDdiRrKQoenkJFAJYifi743REEo7cxMpDCmAnRwVUqWJCfii5SG3vi4SWkCT5ysPuW1KaoH2Huxs",
  "key38": "5YiJhcRxsp8GpuDpsZkMoR29LKgVnkrYCbV3CE4xErcbEcYdm44i5bSPDy6xWNmJ3aYY3wSRN77bZwWX2coRsjmq",
  "key39": "3VeFYmYZWNqWCqkqn251K4883istGHr42XSodsG6Bq4W6mZQb5gEanC8wv2sXNTy4bJqBYrptAtQ2HqzH72UrA2U",
  "key40": "4UR2wsjGVWsG8rf9QHg1Lg5s1gBJAsWJ1U5b7jNjGdchdVQr3fxbrtpwYZtAgQpXrNtwx3wEQDSjMPtWYuWk8grx",
  "key41": "2i3Agb1KWJBD7DnYfgzGVceHVirxmh1AnJLHEvR81ZDqkM5EA6aH8WN2Dm4KuzAvk5fA34qtL1DAoBStJU5Yz4Cv",
  "key42": "xzGsCae7ugM6KFF6SB8ZGLgx6nTwa2qy7biLCGp63HtJNN9yT3mdpFU37PFD4n44fygMPmSPCauiyMyHHtPJ8Zd",
  "key43": "5dBN2pBi1YyErvb4qnNnTybyHTY8FfF9rRDFjRmEeJmGiGtEKfHqPnj4gGeu8P1N5gFWPG4phFX6JiyW28gLviJ1",
  "key44": "4i1B2YmmAc3qbxB9R6Xd1B9WcGRagNGoCCMkh3RYhkjfiAiYptHf7qQig9y3YjHGN7r3GTBFgqHjANBmQtthno6w",
  "key45": "2oMwnqdRd6JS3Xa3tG5f2egPKtrbmGzNqHgHKxkJEaPZ1bK3Pk8fbTBEyJKYgkgZSm8dDVJLi6EcYT3QGkJh1tLv",
  "key46": "CngDcTYmW5M3WLy5FGRUHNWjuHdD9T9VFumPwuuu1fkyST6Ktxf3q3zLXG9XmsfJbQzheFo5t1MyWKCR8iATHrS",
  "key47": "4npgLpEyTMLUv61bNepmo5iVVK6xnZqfBR6zT9BPUsXJbu1FkgD9PpZAtpwA8r4EmPCwq5nSyqPfoVktKRYSdVfL"
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
