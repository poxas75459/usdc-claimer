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
    "n2YGjptQn4rUkTLohYNPBxSUMcbf8xUtSWnK8LcG6TaE91qVm7jzFdLL1WdS4TdhWq3sViVBLspeBBLbjpZPUWf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47mEcQtAwN5tgZiu2ntCPcV2q6f6513MCWSkrM8okCFFRn4fGtpEMHSkZ4huQ84i47hwx4RunHJpFgrCxySv1twE",
  "key1": "2G1mYe3BRDYAXfkosg3iHt7rCpZmbxViAtBPZP8DDkZhVUQ4Pxk5cWs3pg3rt9GsPutigoC4xCTGh7yV2gtco8XM",
  "key2": "5S7mTnHo2pCPbcwMVSzRNmZt5g4EG51fvEpf3P7HVgTk9itgdbD3pKai6CHXxeQKxNeE94vfRiZKiCFnEiH6pvKm",
  "key3": "5iJWVmg61q7AdFyseam9E6PNCd2w4VCkqUepGtBkPYUezHuvXQifpYJMRxQsmutj4b5jq7f47nck57Y6y8mf6PUz",
  "key4": "CKhHFt2M1ryjHJLbUHmeqkThdBHYPh4hxYjpE76xRkGzwfu5gLTbw5R91GoFrBe4nkZZ84Aga8i1kdAbrtDRXDD",
  "key5": "4t7XFHGXEVUmJfAnd5pWh3aNQNzZBpRbDj4bdf8nTUBHkWjC6As84w71UXucZyuFjEeb79NX4MQtvVt2FQWKqFNV",
  "key6": "F4utdMmgpBb4fPpRmWaf727avHNabegiE4LhBz88arV48rUtBKMwGkcxtATZUucwpE22RAg7Pk2hGxd9Me9GzHW",
  "key7": "4bpj6qm296g58vgaHA1hKpgRvXkdGWRx5HSoty3dEASA5WZ31skW7aC4p9hXD74hKPHodgUFHw3PQTXHTd1n7wbx",
  "key8": "4ydTwaLcnxznJon3D9okAL9tK1pTC9xAMSkuYU3dVoWC3p7BF9pbBGxpMWvYFXe6mgxpDLVRECLJfqDhymmBmXAn",
  "key9": "XNKiRRinXpgCdHVVNZA41WgK3i2s7n8HqvMUKFvnAbTwJnuZCvPqGoMxWdWXUMH5AZjnpDTG5DXthKFdnwGuCa9",
  "key10": "39KS4pfBC4uUoCoHJX47pGntULanKeHNzUL1y9NGx9rYTJs4x5R4hWZoNGGZd15zo4mkdGNtUM8eaAtGn8ofWWEZ",
  "key11": "218A7SPUL7t3XDYxb25oUqh7RnsmLoE9Bd3QnAbsA8Dc8dEjY3hAE37DW4b1LPwdSs7Xc2YeGTn7uSq2MW5uXQo3",
  "key12": "4MexfuqMTRRsGzhxFMkHUsNwkpbPyjfeenS6ojoZjH3brjABwDtQYij1tVxTiiAXJ91a1ehR9hhWypuQPXzLzb8H",
  "key13": "43AjuH3xGgVrvbGvRj91P8HuE9gSXXqsYJoAHfmaT7rkiYSExDet2VrR8V5T8K2LAGfjdwFQaFWWijKW82u4vW19",
  "key14": "f69h7aoeZ8BP2GQHXS9BuXAdZkQZJ72rZVzR2zxzAPZfQMxuSpg3bUeAp8SMoeg4mYTURLx9r3DjeTgwFXPqTqb",
  "key15": "4LyRoycRNsxfKquHpa6mQnEZ2gGaqYnGKE3Gu9sPo1WTrgmK3t2yfsPAxJ3PzPc92fgDrRPwne6Hp7C5p6bU6qSD",
  "key16": "4MWG1VdxSbP4qrGNXycAU6Wu2LoTHvbGY1SKLD9Gg6BDodcD55SbdHXEEoyoW8D7KWBZAyUEpAJiB7wu1XXAPa8w",
  "key17": "2Lv2qAXRGyqFmRiPy6yTiZxa2adtfNmJyZBuzSzqX8AFr7hv9mSs2fJLXfYPyPxRgL5aKxuYdQScx5tv4VJqhi63",
  "key18": "3xDnfVwpTvqHkzN9FyPb1NMEsWjMF8iNo52MUvyp26oUQuehwh1UBcQusV1XreLmMo5NQCCthXzwnn6Sapt8f7ED",
  "key19": "2PxYjU8sLkpSK7Voqnuu1AjEKZ9Pt1gPDYs2RxiDdSXgFZRd5tZzi8NLw9ubuuJsK3hZtisbmcFDLd6KpwUU4USP",
  "key20": "23Ju8pP6ffsxvuQ7jcMXz7RXJvD9bGXNLujsFbqCtMEs3sKbTnHpxjwxBWEkf2pyWSvVdRJc9oJhFMEZqXjFTaZY",
  "key21": "3SFAhKJaTExZAfVdEvhf3okmyPgmDirVKwRoUpwZz4xd7aZeiAYzXbyxzMkksUd8V259RJwGz78JJVJ16gWhfDKH",
  "key22": "eFMem5JZKVEs9hrp3aHxoZH1Vv3uLbg9yGfsEWB7UXWzmj97amUrnp7cmLCFCHGMQTW5czp3jtXbX4xUFKvPHhF",
  "key23": "3JBtpTz8hNDMacrjiJ2g2QL6TzhRnfuaRzEfPdUNmEhR6HMCN7g443Zy2qJgCYkL7KbcbRGWoJ7L7YP5UwTCeVkb",
  "key24": "f1SQQYqvdFUsUoajRS7tTjYSETMXQUD55QLjYduACfCjGR3JPTUN6QZwM4MHRnYbFx3ZSTY16SsTsnhMvGWtCSc"
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
