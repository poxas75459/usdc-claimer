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
    "57DQRQc43qPFJ6gzCUiHwTzgSSWwvimHxEg2KDuaNv1wPQLVaLTvtLCQvqJgG9x12kMBcz3djz8DULodnA42PSc1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aPrJTui4n2kKKwDAQJPF57oGrestQGM7qxqdPo3ZFwbdvFC3ZTGZFEs3ubTCN79ffyXnDTnmPME13scUN3Kt2zU",
  "key1": "4swrRYCq79G3xqCFV5pdmvfBK5b43dq2wYCNW3nXnw1gPdMiSyUo4htnLGvPMiuZi9YmAsctGBgAbWDQoesywRDn",
  "key2": "38FcGPgEzzuqNZR8JYEYAPMnV7VoGjsESBHxknbEe1pgUmy1JaAbFyKTyzkZrf7TWAEpwZm47azTBF2rV6abnYQt",
  "key3": "4PpTWFUehhySyLDV1xYyQc4pTYkfNhND2G1sUGz1p4fUK74V96SMCeA4BQRRG5tvTb4wTuSeBNeGbvXMTKJckZxx",
  "key4": "2R3uV1BBPPfsLA5JDpBPEHGJ4NLwGqjQfvsqVUu5kLPzk7nb6ZkEGb9FPhG1BihM7ZeHA5t6Gg5R9yPAuDcfHaf6",
  "key5": "5kyCoMgBaztPCcydHb78Xibvm5zsA4aziApxkNFYExeJSuRkprKYeQnYCqwAgf6wnU2cFbC6uURzTmBgAc15f5kv",
  "key6": "4UGCyrnXru7vrsHpEv9VpBupLw1D3HJ3X1MwoYGNwPY6JNHUpzeDVELor53qPvWLseQxRQBw3K2R2U7EgysEkTX8",
  "key7": "2pc8S3k3XWpt8KsXMPePC7FXbSuifUjUHxqYS2CQb5YoePN8MNBkPL5RezPTWah2g66svFbnhE5a7St7dnvH7DjT",
  "key8": "4fv3ueD1ipBsUQjeHkdegJoH6LiHDi57FqQBgPN94UmQtCbZJNMN63oVMrZ9SSxkrCZHyr4NnQQAt8j4tiCZEgbc",
  "key9": "5qimbo93YbNKKrTDwE3FGLD56pEhNfrvfLR3dBttKRpSfGsFjbFb5btCwWgyFE8AL1yXnjd36VrtcbaXnFnxqJXr",
  "key10": "2xwJt8z2YU9iGuhSXTUxGtihBM8GBR5TrcvTT6JAdpyXoWKFzRZef1xVt3jmZau9izABWjRN5ZoTpWX5oAjhdcfW",
  "key11": "aP1DTxVkpn6D8DgetmquiJeXUWQJmJdU9T8Trr8c7ZsRBcSr12TGLdk9JcPNEKbFrFkMJEJWWNnctJM9wjNZoJF",
  "key12": "4Skurk3gyrjyk7QFfibMRLjXM866dwEsDysyETmAqXomxqwFSPhGwFwCRvrSHckaHBBHGxLFYeazuaLVvjar9BKu",
  "key13": "2G2ag8YvdSKJHCZCF34ry7FSZXVVgKign6SYw5EEmNKPXD3fLt9CLaqPpDx6HhH85k7PPNGJDGpqYQ57mJWLsxTH",
  "key14": "5Ws2JudzhNNMsUCSK9cMNyLhPRcJkVGKfp6ehEtegyT93qW9pjYrZGbQAFKxLdNYvUaGsncLCh1RofQmBCTeBrKt",
  "key15": "3oNaUSJweXZsggGdtYEVgVCUnkMs8V45SHuJuAAykpk8zxnV9poPMm9g4DtgbiBANTeJ1YMJaQ7pc9UU32vGNMGh",
  "key16": "5LC5k6bNkCWE1ViRWwsWeBQUEQb7deDzyFVCgu8psTQPLpm21jZfQCyc6D87hY4mvECYyjj5kJosacUrKDUDXmUr",
  "key17": "3fNQrJjvnDBrTFeXj22ZPgvUm5JM4a3SW8xzX9jXboAvGhB9GmoBi5ZZpX6ofzxvty8fAzhsDGt69ebTjxKpB1Nt",
  "key18": "27SmUE5xGSG9xffWTUVxoWSp1VuicZgj5fmYstKjq2fDSRo2ZL9ysjWhcMCtCUsvkupkBt7ncqeMVqxjrKEMh4Di",
  "key19": "35VLgJX5uymY1Dw3GR7v4G5mVNmx2V7Aad8xny4u2ovj7wHBD35h736X3SrQUjV7uMGxQ3dpEMB3qBqgH9Duu2ci",
  "key20": "4US8uYKJRK74NNkf4CXjZGMXfit9zbh4TZji23AEStLmgN6dsByCfGytccbAb3EtZjFQYPGhAvq4C3fiZrWt9iA4",
  "key21": "5rjZV4k9x5ySctFRqXmWVvXcpiDy2m8c747gcdBvzu7Uz3MXJyVDXYGUkvXhazpwq6vBLftCj3na83U71XEtNMmr",
  "key22": "64aqGUXwuueuTNhe9Y3oUaz8w3x6cVkGphtRPJfZ7QFE7yv1UcTYqyKMeeYojwfapSEz1a1XD3XMdYRb3sjYePTJ",
  "key23": "5TEGicVzhEJEe5NTy17C5oQ3VBPqq5d68JEqZWuPDwJUfGZWDZFpEhDTxAFDNXPmDZ6YoZMiZzgse6URwx1SHZN9",
  "key24": "5HxN3YUAww5LWwoifaSF2dHpkYKLbESV3c8UJqdmqvUEZaqbzbMk4KgQ2V9kZTtZqxa5T6oTZbhdwCVMh6sdGoEz"
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
