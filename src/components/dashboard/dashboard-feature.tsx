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
    "5VYrojYiFTaR3bZecJ4f8QqMUWbrJCLurg5cQGXD2VGWxowkGFrES4BqJhqhVs4SVPtn4c6R4fq8ZUJ3af3dJJsd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sxmPjAqTz8BEvKCf2DdjKHyhnRWWB71U3oC8E4AAbbU4bKgEydpLbdkmAjgTvm2GUrW9p4owGbqxZpJhEdR3hx5",
  "key1": "3NNRJWQ3vnY62HnTaBSc7wiDwwudf2NAx55US4bgKZGXthAL8qGkL1qeWmChXGgvPfabYvjGWkiT26xZpB4nAghZ",
  "key2": "2oNhjoMcA5b98jiyn9WNVxqUGJQYpET5UvgLJvzqEvUs8yLpHoHfRs4BZ5cNDJ3kwoeV6vdiufWq7sdmofNDFmV1",
  "key3": "2tPtVX2PgBLeL9n4G4LdoQoUHmEL8FcufuwVTnrHG96aDZGXyyLURpfNzUUFB2SFwWPN7jHpUuVm1GMLS9asnnoT",
  "key4": "3KFWm5vko5MXHPzweGPkL9FyAaJmEoKFcK9zue35N6ZvnUJuMjmFfv9oBmxZEnVZ8jH1XnFgZt4LaYMRezWtXHF4",
  "key5": "42ivuGRKGNJdFM9HmrabXrAHrMbTTbDMKccYdfECziyT6Ax5j53C24i7nE4C3b8N9ND4wgkDsA5vuidQ2miNx5um",
  "key6": "5SjF4qpSznjn7c1unhzKq8xJ6cJB4aXMXdUvnoRSjnM6JH7BJDjuMYJRGErDaUKfQwGEGeqxkAkTkFEmJUVpAJrb",
  "key7": "27Uaj1cskekaXQPUsVRF7smarnoBVMJBVy1wuCRfVbEEBUwEquYFTQUCWFMX6DgEK8yNTBmLyBdxk3RdkMdqouGT",
  "key8": "5PMtPUuiaSMPoTPtKSfbvFr3FzJdkbv4Mkbs9Qy6FbfyjSdu5ASSMofNHjgS2Vv8TsV4URhw41JjBbtxedhjnET",
  "key9": "2kuGe1ZxBcDnFTZRpwpJTmHBDwCgt9ypJmDujEAbK6fYkdxszzpFLPwvCTBtKetrQwofZLWADKTbLFYKYpTxjpqR",
  "key10": "5W6p29LhyhJ82vqy3qEyTEP9f6PpnRhcY86c9NZzUQZRA81Yv1piRyJTLTUBRBJsSxPjcn8j8H7Q31omwjj2av1X",
  "key11": "53TatcRxk2yMhkT1u8fpp951zr137KdS7Hb3kBhWTM2qECvGqvsLbi9tGNoHwEyHLVM3xNDE7Cz2ytwHdgJdwLzf",
  "key12": "2BSagujvbNfK8AWTpcuAAdN9buvLic82h9GmDRLt9zWFBek5wFD885woTz4bTyTu8cuTagNb6eTMxTqJCiQFifc9",
  "key13": "75Us671XJFoxn349NenQBE87KhPmmJJhK1efedRMTvH5Lud3LXKdPvySUQLAPVscAZL2qkV4ZeiX2ovtHqMWNxS",
  "key14": "2sx3sYvHTRi3Abi6tRputjX8T3jeZnRqSw5fLQKDbYGdWX6uqTKW7sGt6movzcner8JjFW8J3Gy3hBw9Tya5fMar",
  "key15": "5dbdSujqST6NVgSdB9a1hRCxWKpZ9qYNBY32jj2266DAp7hUmivodNnc9QZtgmAQgqwVjc5mnte5Tgt34X1pK2w5",
  "key16": "5sw78RmhJENDs5DBThp3q5ERW8B285EV7FrJnuntTPBiY7VupyPP4P2YJWunX5qtVFpp1cTBicWTj4m2dHAsXPXa",
  "key17": "4upMcnG46kYbGQAgsTnmLCET3B82fYMBYfXBho5u7qZcpCAwZxibqFZ8wnyZnrpKQPac8n1uGnzx5ZsdKz6WkDXD",
  "key18": "2NacGwJrSSMZE4pAVoCZ1gBMpuccECNbyUg2k4uqbrCwHyVfVXvS5CrLmyd3criPDGSVbtK3zxqqSTtDtySrcfUc",
  "key19": "2x4B8BGV6ABESW86hzv3eWmPbExsQqCXG8YHv842FrKJdtc8ZUHqqwciGnsp3gqZkJ7LY3a3dmUEuAgwmSQHZsQp",
  "key20": "52jPX2Ne9QXBe5yo7tKJ8VHAprXmAaS9ypN6eDPxnsBo1HF8omykeeeQt5FQtpRAUVhtiBc47wjs2M95MPUCs3qo",
  "key21": "58j1JHb3LW8vsBhh3BpCQcBFsTGJ17gbkmoXi1Sh8e8nfijpVWCdTtJCNgxfdHZe2YnwcfFycFF89kjbaT4rCwJQ",
  "key22": "2CZAKQtMSudD6hHPAnLwfsiepiGC95bmGZjVjiW936Q9tYR2STLLmF8xBYvcemySRPsvGNULDHmS5Ns2rzi4RscA",
  "key23": "4uE28pUSUCHrZJN41BfygsCm1ty6CBShN1bxCxePhbQB34m8PtxaQczcvp6ouxWpfu6z3uGvVFVXP38WSLA3b4qu",
  "key24": "4HbdCjVX4E7pzUri2QfGgQcEPqhyC9MvTQxAtKyMGAVMWNo6STjoYZDEGA7qdobXgXRM2mtQ9hbEpy5aAF8rV5vG",
  "key25": "5r1ch2rnvDv1sMpp46bsNNf8j6ZDotAyWf9u6QYwdFGdemVBXKTCHK5KJc6LH6dpwHVuemLm8txYLWrrFEhbBfcg",
  "key26": "V2TLByZCe5VWwh7os2vv8ALjsEZnuX24TS2qtgqzRzGaHKNb5PpiRKtU2xY6s3G2Av37WAunro9e8GYgWEDZRKe",
  "key27": "i4arXGeUBNMmqYHM154Y1BuH63ggHXA94YSamTCW8xWJjAExewUCzyvWj3yrpUzJjN9C5ELVohkVDxEFfEHEwf7",
  "key28": "3nqUgUsXW9R2p33NR4FGmYPoMt9mDsHDV58qnj8fxFfnKQn3oduASvf6km8jSfjmwzX7w71bMF8tqEJgZVqs8MBT",
  "key29": "2rsk42kCZK2tyoUGndmWnjZhCFFaCobwWVCo6rH2YhxRzG7KVJjAtaFGsKrxSJxCcZNgFnErXfCEPvj4GLE1319h",
  "key30": "5QQ8pVNpbLRc3qVuwZrHK9CrLupUd4Wh31Gfo2av5JnzdTZx7mYs7tDa8gYvHuD4gcSjAnA8wZVwL1sah3VLXHis",
  "key31": "64nyRWqsPbaPdAoU3Sko6tpf2CkyuqsZRLk7Bn5oJW7oiDp3dPUa2nwhxnaaGQGm4PvzPNm2cHMeG7nfxpzdmUfL",
  "key32": "25Y4o9h8L1BHXpSygRYTeko76Uyd2SRZK7qUWfJU3U3Ufdd3MkXnurUkmnUtN4tRkiWvWa1GsoS8TJTbuzaLyWbg"
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
