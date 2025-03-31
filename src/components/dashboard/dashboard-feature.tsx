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
    "5eUrEDwnrd1de3w5BXFVkK8VCEfUDEBTbA9DSiAtmNMJFGNgMcnF5tgp4rZiNjn874g5KqWPLPzqdfNSUkpfwj7p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45j7JURUMFbj8tKYUG83DJpytdf4t9mdDjWMc99mUKaUQJYReKvTZa6FWawyFq24SRzTkpyQmhXjQpcHBDgKvwY9",
  "key1": "4ZYRJmKqxN4czc1GLsXe32n5UHsTaej2M6VNMaB2KAPBTmyQaNHvfDBRvv7hHDGvYM187WBVxvvNnBJPpX4tFfow",
  "key2": "KG46eLiG3VrYPFHTbNoYmLoZmKbJGJMjgBCV63vv7jUeQ1wmW833RNydJKGAVwKRYatkiVX4U58QGpLGuAMTShE",
  "key3": "3rHF4YH9KBMEUCpf1Rs8LR1SVt3sbm9VDJnLyU2FYx8Ys5zKNa7tiS85BsR4XQWtEn4QBHRm6kLuc4KPcvLhrxNc",
  "key4": "4CkMZoRDgY83BUPwNQ2odTBgU79f6qQDV7xmMcTjt2prGaKgojx2wzHXbN5PEgqtreMpxAGagqNCp2t3ecG9f4i8",
  "key5": "5o9tPdppE1TkRH9wADbCVvtktRodDkukGfnLVx6e1NifDphmqWBNHnZEqZM56MJUGy1QJ1c5KcNrYY4F2Y3p9cR6",
  "key6": "jXgUPnmwY3JFqBaLSLskEBJqu5koKSs4nDD6MmPGmVnaBAEx72ie4F5rVa1BcGTemQQzTQ2KaD3JrF2xdYxctHU",
  "key7": "427MFwPmbNrds97zstwDzjAL2RgebLXneL55zNiyuvfABrA2ZMXb2MxT5UfY2qWPoxtputAGmcgopYJr24v6iQc4",
  "key8": "3AL4XJFsxWtsXvr4LqQx6Gpf4x8LQhsqx2mwGhC8KrE4qheJsABYpbGGfnwgKS5AKrU7c8eZpRMeT8zfugzdNjw3",
  "key9": "a7LUKfcR5bU7gbCzMxvogijYxohsgGZLcMEwMjbb8jfFKmwEoSyJFWPS3FtRt83wheunLJxAaDeLZXTLHu6jeec",
  "key10": "4TqYADDPLLanruUMfadLsXWT2gomtpx5A6hov9ZfrpVs7gbazGevS2ZmKpmGmRZcfJ6CE4qcYtP3X3sp88XoHgP4",
  "key11": "4CeEeY6NcHCaHvtdwLGd31XotAjZcQAzd21zVHHJxpvNqLUoP774FXVxj9rgXfSMrbihQH9JkLxtEJEbWFjcRMjw",
  "key12": "2KKYceKzgMCCo38WQAMyS4hh15U4WM8d7vsJ7Qc3DQPzoyEf226mAKHDGcRxNCT9NUGstoRwb3nRacLjzHDVk3Yd",
  "key13": "GKP9KZq4H9o3YW8uzjX5pn3EgfpxMvWS7UoaCkCEQA48wYQHaqL9qQsi4mUnJJdxSX9FN5tXXHYwFCL1Hgkc1vX",
  "key14": "59uT1Q21Z67bkYEHRgefghEfLQ8q23fggmnXrNFuLB3wUweeRh6CKq3cvMtNScatSSYWSuFX6A1oHrKw3Bv35YMc",
  "key15": "2rRmoTEasAzxt71VJJuP2J2eDDv91TMtD4yfV8dJRgbwQDN6Q9wm6sAUEsVcmUSees47qd7rjqSZ7qLt9FuC9iRE",
  "key16": "227WQpY4mCeJFkaHZoUT5uMeTKpNyuqCccjfj6nRChnC1JUgW7UGawdZ2m8bMb9WgwEaZd34marYV65s3wtWDtiQ",
  "key17": "4BtQhf7PBuKyZtM3VManAhQS3d8QcfBKq6Xqs69a6Rrc296VesEVPadsnFggjHTYp8KfTMBDNuxqMRE1JZLJh3YD",
  "key18": "4yxPWTZVGhGHEWYbX7C5RnHosHqM3ZhgCWzRGnsxshn2QAdMr5mF2cpY8TqG5EHdza1PvCh7oH82G4T8WyPkQfmr",
  "key19": "2ANwqjKoSErz3i3dDAGPnQ4p7gCAuQX9zmV6spytmawsxb8ieuFmQY9qALeRYJercSM5TFPaHjwgB7gkGwZQKTGi",
  "key20": "2JMY6Jty8bDNpAyJdQhHuyNhNfJ5ANqyXrF89cR9PMWhtrV9TyWmxkXXCyNixrxtV2c12thhJ4c4tSrt1KYMcJzb",
  "key21": "2t7jEtNqi2RugwDD35VNxuh7z1UGwJ4xU3TCgCHkwdyT38xREZ9R8vCFwQdBgPLZqo8bqVbT2kddkv3kLePSM1GT",
  "key22": "2wAJgX2bzLRq6WWxmCbJ5LD1dj9p65T9ZWQWmGBhCrYbACVDepqQ2RbbNN7uNTZEtGXbwb7Pom2VX9PhxexV8ybe",
  "key23": "6vN7BNR28qUtfpKj3UnzWsr96mQ2zjQwT9L7nq58nD8UtyrBazHaMQbhXKLb7TyDi7equdYpuDNCoL9aJp7UHj8",
  "key24": "5ywFb6npBMfZ7ENqRnWBPwev2jcn47cvFztJHwFFQKvkptVSEbmqRVcb7LUQAmpEgzwUvAUZZVMUphNm9YmgUikc",
  "key25": "5LKqCnMxsMHRHAUwJHZESz5gq9wCvfajEXMuCnoGbaDkEs6WocHBgpkNoTaMWHzPEeYshQauGNrmtq2MwccvNCBm",
  "key26": "3L7JzH1V9q75EdBMuAXL5rGGfNWS4N6uZ7QVr3VwmgtuwWY5E7jFqWyULoN7TtWNeJ2xH8n9VxjAJPZBpDkzYYdU"
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
