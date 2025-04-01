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
    "58MfzrFqWZtAHvBdvMYYxuxiXUQFwYgqv4tqPzCgtg5wZT5ioafTXwtFTyacTh2DazSmNYbgkPzc5s6sB8xFfRbp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3L88LG6mEkLy5DgEF6amxxr8X17SL7ibGxskV5XrYPhmDnVPwK2RiEG45T3bV8cxEM8Mnx3KrmF2sDDtfnBPWhfb",
  "key1": "4k5ThF5Wm9GyxYeKZDfCCxAHqZy8QVEqQ4w7e5XnUataf8tAnMEwpx4CiSRL7GzYJ47uM5CTQHub5uF6FyeJs7Tc",
  "key2": "21MD5tCQVyzok2ZeJgtndMxNRopxMs9WQJvpg8LnMGhLsfBxmMFHaPi5GKXTFWwcTmN7sFr5DVdiYh8n2gJUpWGd",
  "key3": "5fzoUryuoyosjuHym7N5J55B9MhnJ2UaVWfqny9gLmSyu7QttGjJ8N9C4BsmvpJL2tHNARhZxYYacigZWwfBXarp",
  "key4": "vTgDYegGmwL1SssPR9mdwhe4tsfxqDy5mp75hC9FhVSuppKQ5C2najkzhTgmyM9Bf7STsykdNrpwFvq4J4qUrzZ",
  "key5": "5PTzNaqh9o2V4mE2S8yZhhMRS9GAP13MvfYziLt6TTpVvnofXh1Rhje1v29sM1dxFEGFwdBqKqpf5zJ6KRxxp6B9",
  "key6": "XnHCxeyxaBW7vtFVTtxcjDJEFAb2UDoJkcVEbrwZub6SaQKSwrmGF5bbUz3x8HTCUG63PZQtP3Y7JCuSGTaNwwp",
  "key7": "2MFw8m4Yuz4xzFkjKddqtJCSd1WuL916mVg9dgnTzGcLvdsGKW5wLDRBHMQC7BZN6ywGxiMHM38GjyKNHSxApJ5u",
  "key8": "2gHqUXPStt2G5GT4pJerNtr63NHAUyL9s8YKQ7XpgMDNm2bbkgqmieQjCfLm1xpLpyDcqNwK4Zk1pivx2pq9Jz4i",
  "key9": "3Y3obqRbtVutBYePKAKdjweoAAnX3auBa2tZaW6QJifmTtvbgDQoPt6QDGjfyzJe9TooaWGhw5JyW2VCjd5Jh8Q8",
  "key10": "4bndQu4qQrVWzpwA6XNFJSZRM8VDK2prXFPTYtaGkaCrdGATmMUEDNmzusCWVkapATP6JBKw1cfJ7QUujKMB48P2",
  "key11": "3J6arRT99T63bKhCLYYfMK5MVx9JF9KT4VKYi5339mVMjb4SjJ7FmG1x2K6yQHbfrRsoPeD2Ekgky6NzVNfNYEfK",
  "key12": "te4sx4nrmBSavvmXcx6t1A1FX8NwQzkoq2KGNQc5yzXYjK5M548V56ww8xrx763fPNejVv9o5Vfp4vi9kgK8Pdq",
  "key13": "Wrrhggz7CZx8TRZKsXF4YSsJqVM71G64hPfJot7RcW5bVSBR2dmEnGobuarhzR7xTpP5hSGUge3GJeFYBtMQBgt",
  "key14": "4zN9HcwvAZizafpZLEUywarYeyaTMqUG9eLCH5TXeSXcDgG51MghBNvYXWfriuij6macmLCBpvvujUY8bZuzm5ZY",
  "key15": "3KxLpEFU9kwsKM9aK2hztuZ9b7mfEzGRFkNv2TcF9V3EXtR3cTy2md2tbHy3TMxCXCmWDh82TN3ap1Cenn6rGaRQ",
  "key16": "64WvdChap9gvPbzonFgTv3f6A9hWMj4ijzakVkDHTUp1YukJZBTbHbTdBKX2tCrPRjzYW5M4N5LJeHPtTjcH5y3z",
  "key17": "i5XNzVBoKLigSFuKfvTmJuf2Ck3ShVDZMcXyZLjrBpekoKxPcvkKz3dJMBeVs28gojTakKDtPe3AxT6NvXGQ1gs",
  "key18": "T77dFqdQU2q5vkfh56T1aue7CBJJZ7Zb9vjmhGaPem2o6dXLZkQu1h9TyybbEgX7xWe1MJALbs7D9tYhdXYqKZn",
  "key19": "37kt7CePGCwn3D8JLjgPrpb7n9ZfxxyAwDuv3w8nFS7EF6c9kYA9X3pLALqjy1HpRQiRY3pnYKdV4ACSYMaUDWan",
  "key20": "4DSaLwPrcMSMhukMyzhrnH8fND49J95eqhtr5o4fna1QN8dErB91FXaL2HQcRcB2KXaRPpEBfgHz2Te2s4W8NwGw",
  "key21": "3AHiQjoGQhGqtg5uzhLQuVUJ9CtTTuukk6jANvkYevdFJh29CUMgm7RHjowYwC4zodkZTmovMw9brcH2rvypxdec",
  "key22": "47EptBER1edetrCDcd9JkaPoo6xZiQM7QK7fiykymjtJbGHbwR2QWS4Fsj6oGotACxjbt43JWgjgFGUpKhGPTfVy",
  "key23": "3rpBoqnXdutBe1k7zLnbbZMLnQqeVWhW7A2UJKRbhthvYZHRGUEfuF4B41u9oST16K8NGPfSrJHr2T1KLqBapn4m",
  "key24": "4YpeGfU4U7pCmtcDwx6kig4XJwoogjXA4N2G8epX2MiSurwFK4x38ofjojxB5ypxF9efZJDsvXeKyM1Ln7EnFay6",
  "key25": "3Sg7wfR8GdGaigamcZ6GzwFQqBcr5KUBLtz3uBM6J8k2RxePo4yFAAanEPC85g6MpfDPmehUv9Dp4tVPdwqkB31Y"
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
