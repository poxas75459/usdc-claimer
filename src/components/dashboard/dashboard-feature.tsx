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
    "5tEnFwsAyRfH5MCiUhPtX8mn2ierhZwZ5UjaFA7qGwGTWdzaduaDvQdqD1MBNEYP7AKLuooNXEkVe5dRojA7yvtP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CGyHZDNdUzgtGeYW8EM9aPZhHxqfG8MRz5qk9RcnaH6t7kC72Zxt8QNeFyBVYvcHx9TTDqNTJjToPvpRa4npMwY",
  "key1": "5S6D1AphJgKKT871ScchgUTNTW9ukwgjgAey23T9aRqVdC4LTbUvt6pzPCypsHRykYUyE7DhMsWZL3DoUnWGz8ZC",
  "key2": "4RpvrUSGJ8oSoXh2LNxt7q17RbG21r5N2uR7xNsvxhzA2f7ULQUwxYyo6UbH4M2MazH7yZ6Y41HcE35XPRZsK5p4",
  "key3": "4jNeuDVtEFvATMQHsuauq9ZcHRoCKfEHS3k5LQGDGAytAEJLZgcm6NS6u1gqLTfBgvt1UBY5hyWdUPjubaD97R8C",
  "key4": "2r2iS5x2CZWe4RdPYT94DvXUZcNgAcXwxWFVYRESDSsxDR59y5LeMzKaiA47deMRjGgA5PBAtKmnMnnZ2T5CUcRF",
  "key5": "3iMdkDEyiEfA2hGVApN89NmQVR59c1Y5DKV2tSs8miQrf7ikTptdZxHRuEJMETD5Wx5FvNPxVzzEpN3c8qvXzW9X",
  "key6": "PhAcTKtiEuBMBL1MHPP6uFWQdAq49jmrqkBgYDLeFNqbW7zNuh4hok1Wsm1665M9Lwfy4ztNrWieXAghsZYTHv5",
  "key7": "3hViVizXz3XPzXVBgHZXKJbWsEnknbEU5EN3zP4wLjqSTjv5Ku2bY4KgCsdrWTod3c8ZXER1PJEzu9dT5hXqHMtn",
  "key8": "4DjbUTvE4SH1Q1b8qf1ZYjDWGp85biF2iXfYQt44iJNdM3BgBNhmHmBsZ8Jo2UWaGL25n6bHRfvEfsAFJERKpbpM",
  "key9": "5fkD9aeKrS3nLq8SdkrCwiQcgoiMe3k6xBfH76PSPnVseLXggU1QPnf8xkiZ11R8Qrtp2v65a9DVKEHSFQbK3Dco",
  "key10": "PvsxDW5PgewZWC1aNQ7F3N51Ny9L3PAYheZShUqgTfnsnVwewpoc74WMpQWHkmkMsYLhUgL31UEkkZxUbbeziTm",
  "key11": "US66bZXBnawV4UQvfN1CLMbEudGrSAY4s8z6SJ8zEfRqu1ojXAiNMiKvLM9hj9jheejHEmiK9eAMFiuHBUFDyk5",
  "key12": "4GuXcvCzPkd12hMLcqTH5JydT37PgZoEvABMNwWHD4itjL29guaz5PM8a3yQwShSZdu7g7eFEPrDpAxhFAvuN8F4",
  "key13": "2Mbswk5GpDAFGtoNeZSG2SBfFXvSyVqnEeqfNgP3p8TC1jrse9NoyF9CjXnJk4NFHenbf4Zaq2H2Bt9W9wPBoVkc",
  "key14": "2h4i4XRakqi1wxrmBb6WaEFt4EHqpidb9T1sDnzTyxeNAktEAiNJctQbEXrZBq7Kxq3m6fvt7gqbThFYpNVcpp4v",
  "key15": "zMc1Zeu2hkzdX2BLX43ZcXFn6qhkoGyXUSTdPbjxG1MK5LNbDy8NpeK6karVbcnahNwgMJrgftGny3KMpdKrFAr",
  "key16": "2Z4joqRGA7wheGywhafsRCah32WuQLLvQLPy5ZNffbBdVaVyyLbdFhDyUqvpXSRqgGGvbARaTcYsGF7hzPMGuKvT",
  "key17": "4iQsRGSQNT2guJxULhKM9EUXtivH6eGFM5GgF45darS61ZDuRQksogC3ScGB6Rf1VZ9hrrDYBVmAHcV91YJD8RXu",
  "key18": "2Y74C5r7kHG2mdJXRohxEUTSM99LdGrpuP1931QB7c7XvLabdptpNj897ux7ikNjaAgEzbCi8LYtYMpkveUw32M7",
  "key19": "5rBtn6GgoVRQSttaYKtHuwRUYhuYspsEjq1aD9Co4WXMwN712DNzBQaRHCXkXWqNf1WtzJGk9HzdF7TrCuBr8qK1",
  "key20": "4g6QPd4SqPZWzKnhPBC7XbxvAV5o6cUKTSyGkikWJCFwwGB37FmeJMrXAsqmygivvWwj53DMcfp9jEjdv2pfh2Vg",
  "key21": "4jZfEE3tbdPGK7WCCnRUX5rJZnekq3QyRrC3p6aFaVTCCS8R9VEiNhCcGpErRi2wEP9afpf34kj6uxwDrd4oQuBm",
  "key22": "4jkfAMiRNcKQt8C8bgtuJ2DfDNgc8HsHPoVkQU2QXDvppe3nQRceeok82sZMPawR7iVRjQJa8PHhXL5cQLbj9KC8",
  "key23": "2Lcuekyfvd2MmJkhomKSUngdskfurKTxjHwDm1xgCbwPqps2UbGLEBExzVhyQ6m2uKHQoX4rgxMozEwN1w2M2o3e",
  "key24": "4uWmG2aV5PATQs5n8VX74wCfzWbpQ14DX7HwkPXTZx4wYVaKQKVurC48xP3Sw1bWmCr8TWoxAhMAfoJR2o8CCGqm",
  "key25": "4KxEQbsQyi5u2pEs9xLYAC9hAMetU1rYW99999zRBSeJidoAVz8rrBj5RBAQJ1qFcCAqwfi6fQoZfDZzgT6Tci1M",
  "key26": "43mmxdmgLab9hT2DETCBKWuDd5oiv3xiPWYSNcL6y4FdSR8xCaaaAJsVWzfqjzTAVeDACBdjKRGn5g18AbvEM3Wc"
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
