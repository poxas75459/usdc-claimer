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
    "2b8AkLqmgtYriuDBz1ELa5UMxiNhXtUBPtPBYbxNVja4Z9Rc5ja3A9Z7gYLxpRsTMuA6hv7A53dCTboj95pSzEo8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "457rL9DXJci5DffZBshkniTJTsgtBLzDgHSgK159ZtPQA4jRZaFKGXkK6dXv5tzXDP3ENXUh9CeTPb8jhey5gegn",
  "key1": "1RrAzRKZENW3jgBUkk8fSzM8VewHFh1Tv9udTgAFoxAPmrpwGpGHm9YU9ixeH9488vRifQJTxAwsjV4BUye2h4K",
  "key2": "4d9pA6inLMD24iZyzWdcJgBoqZ2sZhUaST343E6eNAEpmicQAqK7a5oCWvVVExaQrD55DcR1Hx2Mc4oJrECTq5P4",
  "key3": "3ovTUFfbxJbamobjVnby7Nd4eqpEJtBNdV7sE2gAd3E3BhZyBWFZ1Yw63ZeNk5GZu8hecuGa8gLNrrm6bE6cgYK9",
  "key4": "5EszkSnTNViuZXnUSmVxGDsqMS4Bn7eBXLrrEfdywHAsA83jhYGLT3t61vEwebjgySo2SBd9kADJZNAgXf67dvAt",
  "key5": "2Erk9uTte6Kf6T4BeCWQDLutJRKMVmPkvP5fJVsJ8obY8kmjrGW9Bt5cmuREjPrvCGPtWpnXKTBfa64tTjkLdrvF",
  "key6": "ekeJk5NitLKj1muEqY7CWqQypj65dZZfBKGYdyxGEKdLQebM3YWaakFie46ETf8MrgHncJxszsfUXTvooPPbCnt",
  "key7": "FUWxVnCt84dKM22zzho31CBa134zo4ZMpanfF1WuVPwngKDvJESt3aF7WcU7hx3iKVEX5qzucR9N9xJ2Uk9Lduj",
  "key8": "42XH5BLH6XDvgM7GshDq1U9XqBY489TmYz6GpUbjGg1NZsqAQo8TqVgshbYg5UEyJ8iaeDpuaDxvMwddopC8XHv2",
  "key9": "5vGMshbhgzD1vwK6nbY1B9fJFGBRLYaTt2aLNU1cADyABq6581bC93r6z5vuroymrusQ28d6g5T9jk2k3J5gJN3z",
  "key10": "4uPpyV34ExrfY7MeCofdDTxpad7QT3SkQ21A4UJqmZpTsSZK7SJQc1tNWV1qaZShgvSdY27SY4SvkmHaukrZL2y9",
  "key11": "2MTmRLQTWCc3H2ZEwXAqc6Dmp6XjNMRk3Aq5jN428sw7jYSUx5omBFr4HiuWuPTmGhn2jyECwzmcoLNuhtQ9mwkM",
  "key12": "4tgjGGFVLAcefCyZANw4bezJDtR9hXbVcD11TmC2CYVpH1bV4kmnTVACqRc96tpVddUk9gegf7iQ8uFqm7xZexST",
  "key13": "64tDdmBZJpSyYpQ3Q8BFnKVtNH72dUDq2hQ8FyJhV5ANzRm2gWPvrvmn7QitXD98Ftd3766bgezwjjNzesrpVq7v",
  "key14": "4ziCCX3Nq2ZQUtNVgmsCD1qsb2TQXQFSyELLcX6Fs8pyDwYbHHCHAMnVFXenx1GpLQxuGCZBnyPUoYRaYFPeZh4F",
  "key15": "wWyy3b8BLY4GAKhY4WKczebgNpJXx4CZLuLEZwcEFvAgAen1HDEo5NhzF3rTdKMrZaYDpWEaLGccCpT5DgruKUu",
  "key16": "4C1UTivXUPg1SfjegmDeRxHo7ysxvd9pjBu5GXcKX9KYqgjKkGyzDgzJe9Ks2d7SLrmG4711NJE7ERy87orzYarR",
  "key17": "2oMSXZd8UBxbgndrSGu3ViYtQgLZMo6L2eadKhRCkXdHRxP6eXyrJujtcvYZCKzDpoVyYZse4hQXB5RJfjQcuKk8",
  "key18": "2f3ie2baVXdz3Y7FLzrkRXJeziQPc7MgjUuod5M1EMnNVu486YZ6Tjz6P4pMDXk1ZyqqRRAk7QJMwBGUeJetsV3N",
  "key19": "y5KFWmFf2xEN6u44icnZxVwZJAgDGdibAqnsi2TdK8mk2bToi3wap8AUBA2kU7Yz7XBHHt2iNWiC4f3DAEAAE6x",
  "key20": "m6fCjgUgyniDrZdy1hwUw7RGoZtYifer6cf8MTQKWHfDuksZtGWY6aSbAF4Z5LGcMFAMfBZcb4LxLYUbnasw9JM",
  "key21": "iTFHp9GeSjeyW7AHcjkfMNgHVgJinKX7pYknisA4RWCznaFf2PESQ9iGKc4KHQkwLjG1BET3wQ7DwkHESQNCRds",
  "key22": "3Z4gKAsGwtEpqEwLw9utX9J73bY5YCtAwx5b7kphCKSjpWViqVgUy1ezpMFi9D17U8zqjPFYFUXUXjGkCoSumfGC",
  "key23": "FNeT5iE3bPBaetHtL4zC24GSQWJPUAC8MVF3TacUkub2qtDj8SeP8eiNdxsNpfTK8kDHmS955t5Zp9psHsj5URs",
  "key24": "ZZR1WnYHyE2CaZ4oy4cDQmKrKk8Ywv6WXXc5ErF6ePxVFrjMQea1igKvzXTkQaRMbH8qx3UpUSf2PczYLfBG5E7",
  "key25": "3hSrex3LtyuXmpM3wXhzjg6DxgTMsVXbvCiX1UM8e2abTuTs6TVoanSm1G58GesEFiGEj664yw5xDijm8vUQZwTA",
  "key26": "5axbFicmKvF71NUA7hSbCXP6VraLziFGVhUeQw1dSTcBnfvc27aJuajvBuA9AgkbndTNhW62LEwP25BjJ8qxK1BG",
  "key27": "3wPYMj5gsLLDpACgx29e9R33k1az3tGScxiy54EAbu3uqUVmebdJA67zRiXxmZtFwAmBx3RVMBpcA4YiqqEb5bdB",
  "key28": "4RRMjQYwq7eDRXjtLt43QZhKTwPbWFmGCXpYrMkr2Lq2kLkp6rFc9Xzr9ZtFksF5wDEREipJ6QwQt3Zjqw2Tgsyh",
  "key29": "3YLXoAE7WuPLBNCjizBXY9vm1jTMzBQC7YgFQfRLSdVtuvLF9txJwSrpbiiTTazZTCRhktNZDgbfer9NKMWXAtdB",
  "key30": "4X59NLPwgiLcC2vDksomcoYHZnr8BhzYhfe3pe1Bb5T7HZN3bbEyyFqqBw9JttYEVCzTorTqfNxML7y5ZFQmP7Lp"
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
