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
    "2B5WaNEpxX32DxpBiUiMtz8umynwqnjU84T7vYuupFnDWdRCgNYWRxvs9sQwYzbK1AC8tDyq1nhx8PqjJnG1ek2F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51Zav5zHUxCUZp7NvebLJLRMTEKmSUd82xw2D4BnEjpeX4rekUCRb8Um3YdAfjHQXq7eMLPep3Z24o4Q9NPTgw9T",
  "key1": "3C1y2hCCWdYiWT46kJECnQYCR4BLkLzuzydn1Cps9dREqpym4bTyKZLGVA9idqpbDbnUxicBJjYdhwb1rxfheVfR",
  "key2": "36R6rezZo8mQGfhxvEuw4ooC4RKhQCrUbm8Q2jihyw8eUEjcvLcj7NLs7B5nKcvwefiY8MRFoTQYdp5KuwcaDsCk",
  "key3": "5pDsdHneYgZ5yUZca7HnKeSiqT3y3rfEfN4Umny78RD6hmAPRPKdrNj2tV76eTSqWSDcMJ3qiNRqQUndXteqXH6s",
  "key4": "44GoeJFuAwN5mTP65eLiXiATkYS3LAYUW16QCfbNxoCAKEkhxnz2dqVFQocjofEn3Vf5Nnd2Hon6gbAWfASq6uwU",
  "key5": "5gbqboKF9xbeGBhuxaPxLA2r9tL2W6akdXzfPA1e53zPft3Sd1tCSDbfCEq4jhypbqVrB4G6Hz8QY2xof6cQ68FW",
  "key6": "4y1o7yFXSNj3m5CDtDa2EzdUmtSfmUU6sh6UKHp2oJoaZHRH7KoLavneotCBJexnqxU3ZZENwKd6V1JfCA6VF4jf",
  "key7": "3iQXeWXPufQeeor57Pbe1AornCRyjpLyfzyCUHtoAkGn3WrFp6kEaBhN3ecvJGVFmajH1Ln4Pjhufv157Xi4Fg4b",
  "key8": "HAhtViGYtXgZHL47NZHicWZ8wMvjUZt9JBdbjGWomuZEGqSta2UVnjbUc854FejfXhFUJuJn4E1yTvnAiecn8UN",
  "key9": "bttxqJvvCTxC6gLZmD5ST8R84E44d27S8Z9bneQtMkdUH83r6vJcqA7aF5x4EPaqVo1bir2tkbupwSA62A22ehD",
  "key10": "3a7ZcsD38r3QDkLSb1qU7RxWhBACe5vuh7tGxrRcXafCUsDVgLyb8RVYNe4TBowudoWkG2yPF7WeGbXjRNWUtch7",
  "key11": "2rFvJzye1fe8JpAiKaDB1YXLwZeLyNAEizKgMkbdesmAksKGqphoQ2Za65mZinjUCS1pYxncxJJAKrr74XDvwiFC",
  "key12": "5JA3JxZfMpRKk7zPnGivH5Vjg5Z7iYco68JksEZiVqRWVnS5FX7K9osAQLNP2TEqkmX9JHiTizAUSFdq1Ge6djFa",
  "key13": "mvE6s8pdKmu1o8qF9ML9zPMtf57Wo4KxvoDC1hmuWLDGAzRScMxUQq3XHwE3KjjZY8YQHbk6kujaYTSimcftvvg",
  "key14": "hjevVSj5UQDubDjeitoxwJCBwH8WhhkWd54JKUPUNxM72CtHUTm5KjeGK5fJd5sgivpNtYMrYoVmRicTXzd6Mse",
  "key15": "41jCHTHSqLZBkiFKPLtrCfEcDLczt3DC6DX39ziySjoKvKfmCFFtMEGBJbAVBJUtsGPTRx2J6K8fr2MDjTQgiTFf",
  "key16": "kMxiqkrbF2b3xGhkYKX5ELJGm92AvQGMJygunwDyc9LCRdu9aakvxDZeGWxPGTeLCy8vDXtN59pcSLSSaWaF7xC",
  "key17": "Yu6L36DkYxF6JG4a55z8LEdyGDS39QCqhHQTCvMfXRAE3gMbvBuAN6x7XPYw8RmVc7jbQzVtk1pcnsTrdB112kM",
  "key18": "4F9RFyE36FpHcLaQRT2ZnUqJeu6FamxMb7m7B191GAtVKHVvmA5JUzFovnoDYE5E1KvUqGgqMw7td2fcj85cHYz3",
  "key19": "2qY6TJQAin6qzHqARXZzswwMWsTNYR3VxCRDZ2uF95nQcYzWNRWEXfXA4KPyz2NW3D7wFQHKB1MiJGgpQzmwmHLM",
  "key20": "5pZcSZXTTk8qBhcLPmtv2Lcdy6M5v8skpWTB3W78KXDo8ZAm9jURrcafo5vZw4GXzyBTPM4Gi9QQDZUxzfePUXxb",
  "key21": "45RFuYiBD5ayQSKnSx7j6WSVrRUTebXdvCw6NwVpBdZWtfdHFk8YJsedXAxWr6BTQMaWXLaQqsZVMoZe5Vk2hzBe",
  "key22": "3CTZTYtYKV6dmkUvJNNfEekYdtjWKbLYcz2MgiXbj1JP921wBJvaeTiwVLSBp8bGGbsJS34CQPuroYaeRMDjq4o8",
  "key23": "4D57BB4i5ut4yfC2MTnhy3FYK6wS1CkJvKCj7k7Y5Xng7KELvdredStBKYphNdXbBeD7joB4KYCpuWv5gBDQEhdn",
  "key24": "3xS8LBRrprw8D2qGQovV9K8WegmX98GGhhwYBzD2B9hE59ackP8TrT45PXSrQ6fgutjttNRVH5WvPDQeqnPu24uE",
  "key25": "26GqiSSFURBbjhDYb65M5qpS7QBSCcLCgc6JQt2dfx1byGaBKPHfbHTWpRbkmfq2tACLEqPFGfV2mvceaqX5r3va",
  "key26": "5zaKtcUrDB35fGEUtPwzr7EN9SPR2LDZMep3sHc98uX77cvrZpUGyAybEfYQTFu1EodJ4YV4WwsRCP1TrbyWYHds",
  "key27": "XJesj3TE337drDjQP4Ek1M8v2RKmeDPKzoKCt4VY5jxtVZa1JZfv1GykxNPzjSVhtaHB7fLX3fyQZMZNrtFKjku",
  "key28": "5juBnuGUfV7VSwirHEyggc1pMiUMSSVmj1JK4xknTdqBsQZjdVLNqpsXhymtiswsAEnAbUzundKnCpi1e8UUUFLe",
  "key29": "5YK7cK7DJ26waD3n3kpy6wXnSrgoUjUtHxAepDDF5zw2VUAMFXxNreZXcmMNzKDjmmcNbWujqzpwDh7fFLZaEpZM",
  "key30": "bQ4r3J2v8QEHCd4PXr64smcQ7BjveW1RkaCRmWPNgsfM87Q1HngRHWEsDMP4CKMzurRuZde2eWJP8iJwXrUFSvX",
  "key31": "4tdT9Thv17fSoLUTKdzebUvEBZgQaQT6xRJF1R4CccZvce2QbJsvZg2gw4UK56noCubkkXANgFJYYeuC23nxgDLp",
  "key32": "2ZkMz13ymbrUCNxU3iejo13BYS6mY6fm22ZUCr5xoSidcFun8uGAYsxRNrqZVRebwq4arVgd4A7zzrDWeHbyeRMY",
  "key33": "4DnXhSWMRkLDNyYebs3xdd9yBp3SLRwdaa76rQgKWKdSJVoVZo5MfS94C1t2d1Az5ZmKkrgFJ1oUr86hBenQxqwZ",
  "key34": "3aUkJn53QhkU7EfsSG8vberwpkeW863hYPfRKaiS5wb8z2yQCuGxZMVCDpbFkZPEagGUA2cy4n1K1bRwNH3QXfzT",
  "key35": "2sF6XN2mywjCRTMhKY2V5BYtLcsMPu1fakgQKbKiEsUPVdEhH3SUyrVCtpqCkU3LvfUDBZEbqpvSrxyzcpTnyDRM",
  "key36": "4oi5MJ18TELj9YXPZDFY7QgXDqcdTFTwcJmqQerDYty3RzQ21emN3H7hMsHPMCYtimfd27MBMHjqnYx9scZATU3Q",
  "key37": "3YAtgzrmX1GTYZtSpKDH8ukyUS21YdbS6JdWQUAnn5VtaM9Sxm6R1k7XAXmCVsyCPMtnYt5ViegfWoenyb2c9Rfs",
  "key38": "2W9fEWG2mLc4w87R3ygVCw58puSjgr7SWmz2Xnkiifwu9YU9jCwsSaLjdWKcSPEYdRkNTyX1TvQu5YUfYhxbBER4",
  "key39": "45foesninP55EywaiGFv728u1ozCPXmWUL948q3oqoBnHD2d55UA3LgeiK1qUMpei8T1M3q9C4KdqPLu2ajEfaug",
  "key40": "5CZ1mgJMM9j5SPcnGE3bXqxhopeoHhabv23CkHVoaFbMdwaaSwYnQGBqjjSvVvt5znWNBk3e6jo8zaucJnMuJU1z",
  "key41": "4YsX9XdZq1DX7VPcuepqpvBWQ1mnJmAiHtnaTNtSM3xNMc4HzSyUwJ1Ggur3vTkL8Fxj5bPNxStiBzeHmZJ9FCKq",
  "key42": "49aZpDaGSXRJ6Jzv7BDZ6Li2xbRycm4P3Tr3BRJDFuMMok3rMetwZ4a7dkd2FUorn6v8tUa2zaZYwVoq9f9iuiNB",
  "key43": "2ymmWWC7vYMb9vfY4RBsWphkg9iWYZFCP8EsqpfTG48nw3nKALpfxjipXCTyC3wLj95QUDBWJuxiGqazdZzS67nF",
  "key44": "5n8UBq11jtdfexdjJZCJnAp1fUqVK9MTtRxJDUcYQPNZm4FxnR68DYakLYJR8QWYqd11NGGZJwpMnoYTG2HH91xJ",
  "key45": "2x2qWu9ubEhP77Y5mBbYrfD16kvHzxUe7xUWtEDinVWJx5GQVLtesuL7qjKJFfaG1cPrdptAi3GourcDgENfP5TM"
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
