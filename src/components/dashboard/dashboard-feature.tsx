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
    "Had5DBfFZDgj6cWoAcpUq4QpA3JGRGyC7WQXCgeGrC329DVMHcThCfHyHZX535dAURumUthRBhDT9cXeH3EzxzE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FoioiuzSn3yzm71EbhsMdLPfB68nwL5EWrpst8hJdsePCg7ejsGrNEub567bwXMay5RNYCFaN5nGtqSxhUdGMbo",
  "key1": "3CMgfCZaKqptMdtu98ZNttEh1KNqkEfBn33mxAC9fwPQKLXj1w38MM5sQaRXd6UanBvYUyXCTNQxpZX62mkYNuCd",
  "key2": "rwhNQXsK9bPGza5cH7yy7j1C51eqrvLVc7LbcqsAZfbkNXusFcGjNk17VGpgqidMiatXpDC2XvjF6wbn1B7jthX",
  "key3": "211LbDB93yajYBkGWJGvnsTdpBBphAb8BCjdyTjB2ffxZ7PJ3k6UJrfSV2qV4xnP4QVH59oHjtXLAEM3gt9pvfLD",
  "key4": "5G6zgz88RtPqjobZmrh7S59givcaxjJ6tkdhGMfc3yxzz7sWMuaDZejfAES2zsd3zd3iWfAzWRazyDZ6v1RzpjP6",
  "key5": "43mTfSaWb7AtDTGybb8LZwwafyU36DgXT2soVwRcKrMim3THn9Z1gGZxVGtZe3vFijvWCjsKsxG8inLzaX46y1up",
  "key6": "FR7VisvbGmMMarKqknQPr1rtXcCnJkaXPpgpxxTCuh9zXjMB6bSCQxtfAEzvr1GqFACsRwmCSXpNUz25PzCzKxJ",
  "key7": "5UDKxYZkvfViK2pL315pfdp8Yg1oBV7fXxPDCPwLUr8Qutg8SYgU6uxEu6dsZjtwmYMWizHhg7Dou7cAz3wpAW5d",
  "key8": "3qTrdXGQPE95Z4zouaj1LPC4v1NEuoF5ds7hFHuU8ExC8bgfWGXLiYPRkv6od1YFVHQnAyLXzFHinqr5BCz9mUTB",
  "key9": "5uxanmQFgFnMJDHViFkWYAsMKTF8usXqr7c13Xukc9qUte7x5vQRZG5zrKQMyoiyuSP6ZYL2RnyvGgxW8oT9WKoB",
  "key10": "4neVAWHUt3YjZoaTY9q7mY92sRbqojxRHWVLntZamvAjfDRTwaGPQCFjvvc2JCjSU88wzvGrHW7SdKTLn5NGXe3x",
  "key11": "4PRbMdqFnwt5bDwE6gZaiigxWaAGwRqheckUSp9skGMFCL78F49TBFPMScyVNW6i6gJ3ti9Qzg56Ty1ts1PK5UFY",
  "key12": "5n21xoUzoCaMo5kaap2NuCC7W2npMrfPFbvSim6XRbd1M7AvvKc7zPuYxxLG4wJmrt8or7JrspjbLaY43ynThspG",
  "key13": "484QXfCYCKhh3EwFQHU4pcV14uPmds44CjyMqqfG9KgVhPcb8Rv6HPJqTg2M12zjUzKUhCaLXSKy6WmrifqQ8rdU",
  "key14": "2tRewuZMGFQkxzkzgkPbT5LSPkfKuXeYgE8nfpTgx5yS9tF2b2xxePb3Do8M9HACsy4hZDS2Z9bFcpnPFjj3S3X1",
  "key15": "4sCrqTGQBp8PoVTgfseSAcGB3Bzt96V3dkHFqVp5V1M6Dhr9K6eUEjsPwn8qMiiiJqPfMj5hkjW4hcWNberd6Z6v",
  "key16": "3TrzETundjjjanZK6k2bijtZoYWoJVDNVGE97kJ8sZRidgzXNnY7o6HtxLwcXieYK7jneuh4YWLsNoJasNUMb6wZ",
  "key17": "7EYbBZV185kkqBD4Pdij7shZzaQoYeLQfpfc2hGeL8RmVNAMGwV49KxcwXJfSzhQxYwmgA4zk7TMDvUVh3RbP7H",
  "key18": "22CesSQ1KszSU3Y69UeXr3zKVW4T4ChfePvjbZ8TLgJDzMizvT3FejLG2iXZ6EWdfrxQ24N9ST5hXYL7YxiCfuDv",
  "key19": "49512bRiQpSmVY1R4VAbAqsXz26kTiPCanF8ANGr3N8cbuTMaQooNVXX2WgwcqJN3CRCqMRMH8vPL9K19KyX1QcS",
  "key20": "GMkReYsbbVujdJ5zv6Wfw1E2sXDefwFryE3JgtT4PVRLyQFiosgnm8xQqtfXcxsV8BXdq1oUimfiCtRrby1Yxe3",
  "key21": "3EbqMswo32Lxui3uHVq2ffnRhU93Fg8QJutNtvhhPq1u2qvFkhS8LUZeZwAjNnMz2biBkHk3fZU9jbbMju8oiP52",
  "key22": "41fj5gBRekv2ZDLom95bfmdjztoinDJSqsbQ7o3ajzZmvuhNLGFYJWcyRs5EcWF4gJTVuXhMW7CY2N4XhxwDgDWC",
  "key23": "3qJmCmBttbBxRBQxZXWtNDCubidWetMP24Vtz8mmoSywGktF82jakCgJ7NnXAfgfyULuYkRGF56nBBogeEh6f3so",
  "key24": "56mtKcz89fFznUhwLNXL5BUNMG9sTobmWNMNwi9HuXiEc4BwLLuz3pH4MFD7xY2J6jtXbBUyX8ybGk8J5imEpduZ",
  "key25": "3fZj1LsRKqmpMWZ1C9maDmBR7yMAUqDXNDHbfe4hutRTBRD3R8Qbrw7dFWDmd4jpHKFqiR1tJUwKPvZYjjhaDqGy",
  "key26": "5CaR1Ek8HsH3ELYhEcn2gqQiMSA5rRQypNePt826Ctv7Sw66QAhtx7cBahKJxhD1JbAE6PyMFTZmWfPfcRKm4c6j",
  "key27": "FHqvot8J4GJijwBYtGmgEJFvdfFkgyeaP1wjS31UFcEpevZgNHJ3ZhiKYPvbqsrxXU4gyW7mVhi7f2UAycMGxm2"
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
