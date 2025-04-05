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
    "42gPWKhHSBhkA3hNwy21a1aoXqjxe1NrbfkyiG2YSDLEPGXtma4TzPmkys3uQ2qnWwMwdonprTpz8ht55NViman6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5E6vkHgC1ssXZ9L177xASQhpw2RCdbYQa4KAuqDpey9cfh1tzexf31Uq2k94madpYD3FfZXjCxaQkx4kejHiUafo",
  "key1": "21fGTg8Q3pVFWzmmLdutq3vXKdW76zqQmydEEMGesK6t4MsqsoAYQMWmw7e47TimHthUWpXe6HuhLJbo33PQr5hT",
  "key2": "5HduhUQUs6pUAtno8tboUJkry1S7v7Q51oXgfEm4TuD1qzjuMJLzjya55CLeApvCDmgsrX2x8qK2UFycAEqZ6s85",
  "key3": "4wz9ChwxjJf4KFTo2Fd7L31gvwHXQoRwJbGDMgN37NGtCCMyY2hPiDjqkShXtCPne9ERbqZiWKgvscTjsiinBUVu",
  "key4": "avpaGiLGQHPR4QzZ5JRxjHvNSDjnUCvHknLY7KWa3wNHJMUnVavVdHkAUwDDCWcyvaZu6swNYNcd2QVybpMvyAe",
  "key5": "2hjdsMKM1ECi1PuvX56WCy55YMSt7hKpptuQ6q1LnZSGvbhpU2VSiNqG9k1NiGj6TdJAufYZBZnnx54S5FYdHnz6",
  "key6": "4MgVC1Z3D3DRHxnyGuzxGB1AHVG819R3RFwYjKSV1oy7r2HYCNtFXUugPtBgSozRb7YBk1gomASL16hbjzCpx9t8",
  "key7": "5oLbuM2tnNHQkCJwirttEGJzSpV1EWHvTFXNXNihoeH76hAK8kgeszHgAhQafcKhigRLxXfirjuwic39yyX7JHpn",
  "key8": "w5gJ1hZmZjLh2hxjHrWWVc2errVXqKN8YTEmrJrbavAkSqttMrXyNZiYkkXVfbUt74tWcXNka2Re1xsT8WzoLeF",
  "key9": "2dgvgaK5TXmWDDASMSUp47LPRTabEnujatqpSNQJN5a4ogmBt8f3PRCHpvJr3NVjzaWLa4AovdtgzGPyDTaCXboc",
  "key10": "3T3eyRNUqaeA8No85Kf1L37jFmcowBgaBiFiznvcSo2BxvuUL8FuPktJ84HYhrG2H6WMn7s6FRyCBWApQYeEJntm",
  "key11": "basYSk2ee6dA39pwv1XVw5GCrQvugn4jcMS7MVebiiTrZhGRHyUwebmYSmXz4gyrL1RbKCHtx7CrGxyRMStCJ9Y",
  "key12": "WsvruC4DAoZyEMWJPm3pa4fvBQCt8u1obVNZF7dos4P1kNzcHjy19N3hykcZZ5yCDgY1YjdYNrgW3bvKocF5Xyj",
  "key13": "3SH4utZLqQYQPcRQEpp2oCWHrbMqRfuFKoXe4AvsCtmjZg4UX7dGvzohspWmUabYZoZpjAHwK9hNLx3edz9i5e4h",
  "key14": "2NezQHDpmCSvdpejDVcBrxbt3x5mUY9yFUez1Tn73vMKSahV2usnWhMjuARuwXbFzxGo7z3JGkiNhg3PNdivkzsf",
  "key15": "kSkCw1C8zbhcmWJtjZshNn2Zbe2okTzCWoT4As52EKfds8xZjnVUbGuNtNunqr9JzS5f4qTwFM9dCLbwxTF6Mq3",
  "key16": "yEjCrQLa9tjmvT4YhEBzvycnbUQgSk6htPBMVUE4ShBDDDwPpBA9HWt7N3oj9s2QF3QYEiVWU9g11ez725JJVCR",
  "key17": "5QzwEe1PfmN342x44tgXEYkLviT5WbTSbuAJe4zAFETYiugXrqz4y8tBmhRaaZmi2BJf1dEoCeRt4Lq77BCcfVmr",
  "key18": "3Z1a1ZXXaiJ4Ukue5418BFJwnp6d6iSowxnZiSESzuv1cnsq2AYRRroEBNWxfgGCcZCgcVFCHzt1sgaAD7gFHuMr",
  "key19": "5K6qGeQCoMjf7RLCj9gcX9Lj9ohUiREJZCQQhyQ9dy6JbHavF4mPyXmzsLGgyhVYreTDDAnegfL6qDKYugNJymWk",
  "key20": "4XXNqAu1P3cSrM21bGL3ySJdx8AWfj1ZfUBi5Ck9sRBxRb7e1W8bcxQnYpKQ13BY3sHKUTcVLhEgmiyK8h4JJ8M8",
  "key21": "595z9vPoB6ju8sE2BqTyyygQFBck9AKS6CnGpYMacVue5zih3AhFB7LAn786LxeoHrw8a3hnSJuRRJnyQUYBHSvM",
  "key22": "2FEZmpyMwEsbE21wSw6w4JBHvBwCSfRuUNmcH7q7w7cWHc4n5U8Sgt1FPg7wccxhiP5FCjoGnGrzEiRkKCGv3Kz6",
  "key23": "46wyCRuUp3HhtnYYey2oa8uv33ZVXN2Bq6UBMzfESyAXFHYp2xQsoGFZj2yZQgAxrpJ9r9jExp6pPpv9wR8spTyr",
  "key24": "2D8JcVwR7raacVb2MZmv756iJDTA6Feq19eg8fjY45dzKnVscfbqBBa5mtcPBaRHqc8x4ia3yKc8n9tmbVhUCM5F",
  "key25": "HweATg5QDdqFTFPdMKqQ6YyjvfTzP7y5n7oKeJ51FNVhbPUWyzNQakjPKAAFB7CwTBTL5rAsL5iBQzNARCxvcaY"
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
