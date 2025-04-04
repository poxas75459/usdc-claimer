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
    "CU3hjWwiPBE2fq6meUSVw5QF5uK2hQf3f9c7qLJLqNdV83DK3VHY4GhkfzwKMGrYALRV3mfixs7NGft7dxSaNdC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ojhJ1rh53YtTvjzRthGLPaVcMRBxomQkCJzTDFgKxdMS6weBzHAPXfr4UXiGATeLWxqRSt9Gdq5scxZfFj7mVg5",
  "key1": "3PAc7GZ19LRn3LGKnqaHgjeHB7hz45sMqPNsmEj8Jxjg5r1X6rjsRNh9qossPsr2UHnAGEbxK4iXYHj6pUHtqKJs",
  "key2": "5AvDNrEKa8wPM1mV1VBWLsszXaSpukiP763HsvpCkyECUPTGofmNg7vb3vcTGYZicmNLf286aHTXji93ZZDQXrvR",
  "key3": "UjfSVGYCeDNBKvKTryRFfyjZZk9BXaYssCKSuSbUaizgsrgFKrzhwdycksdNeJpzc9L7qDAt9e83BddStZ8Luge",
  "key4": "4iKGBHdkQU3DrcDRHJpEhcZR8NCxgUyDQ6Tp1ry4WGbue98CVWASC9XHhyNhjrNXHBoxCnofZ2aw4AmjnnkTp2Lk",
  "key5": "NvKoWwPNBasDkBeh1edtfjoyPz3bEwSeTKxgcRzJMBETh4gsgUmM2JXmjfwX73Nor1jhbM9J7TseT3kBfuagzEB",
  "key6": "3vQGA7cDBfdWUick6tPgQkae24w8NYSvP17BoCfBsCQkMN4TYaBCQWzjP5CDxNi3igDvByZANjLHDYQ25gukaJhj",
  "key7": "3h6vtFrtkaY1qRxaSsDfuGo5bfPNPCPuz6YyHogzpZfL3qcLHsAcRzwqQ16qbvkQs1LDimwojQoF6ySfbHtQbvsm",
  "key8": "gZC3kL23uoDzK5GT5rEzojT2zthuMvmAhE6ooZHJfKo1uVMGFSE7QMm5boz7DB3ZiAA3X7yNzu42XeJ9roDrMzr",
  "key9": "5h34U34rGU5k6cMFDjwZhhpZKtHZizQQJCaVy1uUf9uoRmw1mLchxanQ9EjFURCkVzMoA2dFN2WRPEBAeofFc89w",
  "key10": "63y8uqTtvMFMiA59tUdAvUURuaPMhcdTLf9Tfr5FCdWnNBCAWFGWZPbTNef49c3GrR2NVCymk6DZA72c9WMmRwNY",
  "key11": "3nPipjqYuQSWqAFnN41FEqRTb2373AdVZAcu3a6FACqa8SGQcbuVfqstSvxWsq8QMksMPpTt9S8ADBhnoyAX21ww",
  "key12": "ekQmsRs4fp6MHw3Mbed9WP3odJcfmfkSZDuKCLhcBs39yhKGJF4Fwd2jyqdEsRR2Tzjc9VKmWLsK3RMX4rE7j2M",
  "key13": "57EiExzSiXGdexLPrPCoddjf5kskcgaKUiuicX65qpQ4J9wkdfEn4znJ6q5GVuHjVhnwQT5Anhipy8j1DizjsrWC",
  "key14": "5Y8SWikd6km12kczLFaxndJqj3MWdXKEUkFDyPRLd7Td1J6FPYHcD7b3zmAmSz6QmfXLPbP66TobVUUfFTjM8ddd",
  "key15": "2D8t6yd64Lym2FwBp3g4fks6L4FRJvJWnCSoF1arwmaiUhyG1h8wCcH5b4CBgLK61gzSwqzEg7NVGWAf5Y3DWvma",
  "key16": "4PdSwGqgSUrH5y8Aj6svierhA7x6QQaX8dxwUpAZRW5NdZBXEiHtBd9A4Xss6BKFD4CDuVRsKcrQhGLFTiC2sQdf",
  "key17": "3Wb6L6CFdVViEwFETLm6ynre61Yt8DDknyCseknyWtYzoNs9VWoxsMpbTYecPPYwmtrxMF1jnJL7ocDbG8U8Fcdn",
  "key18": "hCtyo2L4itq364Z8gNLfU4geYFg6a7QvY2aar8GWR9Hgh2AykQQqfYs6yNTGJfiiMLokLcuzqHTZ8vC1cCi3kgU",
  "key19": "3KVDmUwPLVr3kymytzjfsgHfctMDVB4NTGwmP4V5UcWWv6uubr7ybWUYH64T6Jz2mSxwZtchoGVuGvRH6pqtJFLc",
  "key20": "2Qyh95JimGag1UwBeVv1KKHvZMFygU7DxkeU9gM1dxh3LwDN1wGhoRmf58YV389ekZvPeiFdmwBHduqBRGWPgtz6",
  "key21": "4hXcVNh5KTevgfRMyJQfZzk2z43dFPpa5B3oj6V9GQURMw45GCWdyXSsCAVhY58kzsykpkZ8SDMRkaBk6m4fjB46",
  "key22": "3sJHwPSazm1ReQPfUEjZzVAw533tEpqaUo3N5TkrpvFUYW7L87fr5zM1RKxn4ssVRvHbqYaMHHcD5549FFAdyTCd",
  "key23": "3yFDee859tr3ipeNrqRVdZNZZuFYmNvNNeq6R2omNndSMsWzvi3DNNho9VjSCmvsa2CxmT1t5MHhjUWWbbuqQqf6",
  "key24": "34ndMWV9zPjq8FuxiyhHcDZXJs4YDeE5w61Tu5LAGDAZqkcdPf1A9xu8NfVVA8axayVbYcWYgNmrV5vde397VbMz",
  "key25": "5XrW4yKNaent7X3uYAsU9HPfugcUap4inBoVkSh2RciMSHFTLQ5EBg6o5CMxBb4yZBZqdDAWSTYuyCw5JF99bK5N",
  "key26": "3JBwACSzzdp9q3q5ERxX5Eow348ucbEb7gVhWJ8bLLSArnkFB2z5EbzbBpBfJcQtbChpiK1BDGq9Toq8ac41xhBm"
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
