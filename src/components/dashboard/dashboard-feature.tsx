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
    "5ThvyNSqeByC8VKx3kyARk8uRuMXWxodQ2Gfo9QiwMAmN8wvzhCbyWs243NcDyf63EvvF3yJiLCDtATbAikxo7m7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53NMWhbQPc2c7dRc16ZahbzS6RgoxjYjyi9hVrWZefrAfX1dtErY1Ffkmx3jvQwKgvbhg3vtqQZ45ct6nmAEnB6j",
  "key1": "3bUyDz9MqGFXZDRgEioEJKEgnYXwhNEvxTVSef65kY8StPjMx466ti1bjBwxwcNcn9WAcLuEFcwdxjQGnZ2qqjfv",
  "key2": "2erU3pCpeukLKsDmdjzipzrPWvTdZBrg7G8dX6LYF5oJR1EdTtZ5NjUMGCwjzcpQuPefzcGxcSgJ4o9tNgkCEXHi",
  "key3": "3D7fV3NC25joz8tLGwdShSuBk3yepz8FYWfJ3gAetkEn8SpaU671Dgy7BKxrXzSWDmoM381RvEPdwGeatQVqjcMv",
  "key4": "5wnrpWYPF46n39BH2Bo26nWh73UACPmGzZeFXBSFPDsqkvQWKJtdK9TaXy8bUiBXJ7NGSP79pFqzT2TP5sUndUpw",
  "key5": "2hAVtCETsCSVzsaWfdnCt13DrnoyHd6XqKX2rUFn658bkNQrLucnpVNrGLoJi7u3a5285Pd3f3gWmwetP6MvhmSN",
  "key6": "TJYeN9E1TXgY3hSa5stt5h28ijrykzQJhxiPHjrTN9m6t22fyxv7jj3jHWVLyfV2Dsj9o6ARZKGtQDGA5oSD2Bh",
  "key7": "2e1wU4nJaQh5dBduFZZppbEKoTpHWC3p77QWmur55WzfPzuA8Yts4TfyB2AoJX4dkrsdmJvmQ4vRsYHJRhQatbBi",
  "key8": "29dNU2Z9Z3n1UGq6wPEjgmYV8cJBpGHgXcdsXDJ7AFZGFmA3qpbKBpXVBhsDSCDLVrgsXZQVh2sZJb6GbcykhftT",
  "key9": "3g5fHGEdUKZNM88xYExQj27CPkfyaE472gUjBBmQLAZc4fnS92nrYn2yWNHTAVqzLUQX9x1vGTWfGViQoPmR5M6f",
  "key10": "4aTzDfBswoVJFB5MqEKkAQMbsPbpekVDvJ1v9jsrQA7GeS4s7HRKFwk2aRQ5BH7FSZ33JUxPATzrZoP8jntaHB1N",
  "key11": "5pTzSchKFwChNYkY1NiVzxqrL8EHjiywmspv3aPcTBTxoHYzmFNk6uk1QQGH9JJaBJai9Loi634V4MBfLYhxaY9j",
  "key12": "5cDaumiZSSbxby5DJhtLkmLQ9snGsdKQGgWhLg3ELuqWSaXJgXqhpJdusjNMVvp3E6MXfnRZTyK9pmvKekJipTHx",
  "key13": "3uYktwk7d8pjRgWH9NW1KiiphSzWptV4L1shoi9v1e8fSHsz8DW7N91McTSJCxZiWDv9tgf4JBbqGsHYjoYfrTck",
  "key14": "5pthgDUuk2S3zHEThytLRDyrDXKDdm5bLD4zQu2xU1nh99ZzQnSaTWV4paAgEokyj6UrzMKBtmv7yvpactFHEmE6",
  "key15": "4SvxiKcVsbLjiYWMQPH8XEYFDXSSAKQPn8PnwXYaW2Kw8ub1kakGAzgbrHx8RTSDVJLuJCPmZh2BvitArnoXa4tL",
  "key16": "3uBWERt4py8LmRT74JKeKSdyhm2PLjD1dZKWy8VbE7h2wzVYamyqz5tmv6M3px1UVRuVaX2rzEi5kD3oRguK9EPv",
  "key17": "4Nm6VpNBuLx4qGPB3os7wyq1cqajhpqAn5rrpjrFfwsEkXuGXvLic2kdLHRhukSYVj66KagdoySp3jiXMEULuVEy",
  "key18": "5EYSpqzwdedanamuDdoy7c8KXKD539FFcwySz3MjvkrjYTTSRGJa3jChS1m6xFNmne2AYZ54tzzHkEAn3VALsvD4",
  "key19": "2vqPLoG9FNUjyySigZSN6ZqztxX16ZjtLpavLTKuHo6HrktGd4F55iD2BsqM8tgVucpHxDGbsScxJKCZdFp5p2hp",
  "key20": "4ihUGkc646P9vsQvXjWYdKXp8zSiVeVft8mHQM1TndWK8T3r3CLpYe8jUwzDihEUBomwTJ6icpSbNm6WqjqPwwTy",
  "key21": "3jSwzMFVdecu5UFGNiKQyFSjJUXE5QXozqK9nfTfjrFjRwgab6e5VgR1GeFBBMnWMckyG8foW4MhNTvsXwDSy2AX",
  "key22": "5QTu2shxQy4oo1ZgrAXRGs7HqLgGvGzs3F8re6XEaxzfgv8fvQsTSsqFSw94b8z7vAYEDULHXHgE6LeQqEv14Hu9",
  "key23": "5vx57ogitJVuNS586AyvtexKfAoRLB7bYhkQAipLt16LRxG9pvF9yo96wYK5Vf72HxUqUTaf4GbSm9W48gRzgF5D",
  "key24": "27fGmg33AiFMyGc8BNeQjK6K2tPnMBcdU4beLGWLYR9d7NStEWiYD75ZVF7e1vGZWTPUCaXmqLpbJ92Uv8xHmHJt",
  "key25": "3hHZFmiXaNiKaRhjeasZ7TXmiqpMe2KcfgSnxtpBDPEUKygUepcQm3A8knsiUqKs4gEC2TGZTrkJMoBvRuqL3JYE",
  "key26": "2G94HEpsvgeMNtcSPLi1L54r6wxnMW5KcUuySYFgZ1x6CeXjC1gkEEeSPrAYTUzQhfwLoJ6LdfVUA5rSNf6RMPyw",
  "key27": "35MWWXB9Zuktzne8Ao6ULKFSwgKta74EKWKVa4Wk3vwehnGmckuzh3fS79RGCFuuLf11WLPPisW7sxMYgW1RXhtT",
  "key28": "2GyLiZPEckcoNXFmrwMQz1BY8N2wzx3KGP2cENEZ4UtmeeXejuRJM8tPDXzwNuVRStdrso5i6JKUB7AAUTKnem39",
  "key29": "2nzWWmxYoGDTpRHSeXaSh9Yn5hrhfTymTBfssdbBQVpXAEdkJRsNzzXURWyeVHd6N27W45zgnnuAmxDNQb5Jy3bx",
  "key30": "3kmwptqh9j3DTeuT6W9cXZHzkUkEJiMbYGRt9t1uTgja3Vetyn8embWvMekSCUHWiQmbbSXt8815eKZsZdwCGw2R",
  "key31": "3wQYxm1Ubbu4S7a4eSJzqnoQJjNRZDF2ENCRvTzs5GDysYXZiNq4Am8DnKoJLwjku1SF2E5AiPS7L7JVXSXuRNYy",
  "key32": "3faVAsoEfPNhNdGhC3rvdCfoyuYpaHRDReV2pRYLSAgT28xXvZBxnAVpGhCGhku7Pk1BWDJAHQKm8f2rpoRqtst9",
  "key33": "48YKGBSdxSbzqWxhc5uh8FZLKrjNDjYrqj4mKwHZ43RygdisBuURhTtfZXdnA3xW33iDtNiW3Tqd5YrJv9EmGV8m",
  "key34": "3JBvQmGpx56L7HQHYF82jX9UmEp6tSz3DXo6EoR2h73Ex6dDgEtT7g76K6uJW6ELatjnhoKz2bCnoMbBg7vn2bPZ",
  "key35": "3KkX7ogoG2ydPHc8XLRhizXWUQ4Azmbuk8jt391cm5PmoHiBmyvgcjUbyZntdEfVmjBvNeBsU3JdZm5sTRiYgCMB",
  "key36": "GE7tYi6guqQEPXi55cLnZyer8sSPeEXLiZoaMutyQ27edvCgFnfvJvi6SfknsepeX4NhwYECF7JzpbYW5RUWcgi",
  "key37": "52krtGYCi8J2WmJA9LdMkXitvd4nB5gLUdaWez46qoKYsF2qu2gV64dhWp8xgmZJXH3mxpdKxekF3A5S2KuVqbVf",
  "key38": "5v5eTQcvuXYK93MTSnLbBCsBBzNsJ3esjwqdd1C8EuYiWiPyyCYoPGVaPsXzYZ3GiRPJtxohtQkYVs9imuN82SkB",
  "key39": "2KtwHRgeC41GkbWxkX6n6gkLvV66JkzBcjUd4SbU83FbyNwzRwFadtkqyPqd1CUcphwiQVv9XG43jQZptuHV3vhX",
  "key40": "39WVSCKedNMoFgjrsr97iBakXz56DD2fZF388EY59UfBzaYYzLSW5AYoeWmicK8FoQdgDHX7kc8chMHEZpEGGqVw",
  "key41": "266HKePipqLcJGWdpG6gA47fyzqtCgAVwXzgTu24xxScC1DVb5hZqUP6VqFrsPFpvgwwgpoJk9TCNx8efCn5qgDj"
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
