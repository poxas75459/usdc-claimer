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
    "38UpxXr7b8yvP2A2dThbNRDuAPdS49EATamAXEBoF1BuyoHAbVh7cy6xh3GvM4cNyMKawDMs8AdMuKdGVPnoxeTp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hreFPCdcz16iaaKjT9hUG4KAM9WS7a3hWjzmDYHHqD2EqkiGLxdBea9DLWs7YeTTRyA5XXJT4DXXKcMoVzWEfPM",
  "key1": "2nYBUaY7grT2RNtqmhdorjmyGyc8o5SRewPKmz8pTuZHz5BqzPtp9wfUUEDqLZ3y7Fo7Lvgj9sXTrTo3cgLYaQiG",
  "key2": "4byebo65FckY9Uayg2sAAStzc7TgVpTEzKcwiAcyBvkefvE1S6MwqEv19hotmpd1UHL17snkHH24bH1Hw2L5ZGDg",
  "key3": "2cnqkTdVH8PRb8DsuZuKHFSdxifSo6mLCto5CNyBRr3ypdevdGM7hWNTJexBTYoenYhqUXDfv2CJbg9Tp2Na8t4L",
  "key4": "66D2tEjdfumSjHzaekNFdnrKTAYjTvVFw6KcwKZqcNVKe15MtEhTGkkgyuNNgvcnb5sYzmS59joULQxQMyWKZZdX",
  "key5": "3A7syQq99D1adbDy9dEMaHBZcghT4k7GGQp9nbJkF3GyyWi8ZbkS46Q7h37RYUSxkEj6GCL8YpQoCyNp5U6Lid2E",
  "key6": "3yMgdX1zZgsC6HAvFrr87hEhhBBx1GdmgJsmKFHVgBHCYynsCSgKB4RCtPeMXXEc5vbD8HaXiPv5fAAvpLJLoFMm",
  "key7": "2VVhmAWxkn7b8AosSin3kNGjRBA34wTKDjvh33tQT8GLP9hybjxCHHnz3sCLbPghtLb8dYk3xLq9i7yLystEA5PX",
  "key8": "TmstfmoZMsRo4TNT7yQuGQBiQ4c2i63GWL38u8rFNWZMJyAmN6aPUaCP7UJDUHUDDayMxrXKsbnPeNgLFMMqZhV",
  "key9": "5F812pA1ccyRS9RnRu6UC3zZW2iuU99EaJXpNG5FExJMcz1R6pdyjYdHfvZJf4FECg7EU7ZFmrUiKVn3UQqkiLvy",
  "key10": "43oYbXD36kiQ8KK811U381ksPLUHVayL9cU3q7brAYynThA5d7z36Z8UzVtBPD2DG5D5MKGL7Z2cnUKwA5xZ31gH",
  "key11": "3gV7XWQu9HfAMTuVtDexwBMRS8oAbT1ZjHH6c44GFce9NrXNB3MNpYyToaEP9tSt5RRNxWfnDrHvovWRPycGzvkx",
  "key12": "2UPi8cmVTYdDm9N3TfG53mSvJHXfHR5z63xbLQ3ZyRqXKnQ125eiRo5xNos6jshKucLwhb9gDsmXiHg9ATC66WEN",
  "key13": "2KxAT4Gs7fsc7mqanhJfset9h1obsJ2o2tE5hn5MkpcEAbXCUFMkVdduHvSNeaqgRKtBKpEqEJi8oNp97ggfHJe2",
  "key14": "2e2YtrF2zHFj2Eq1LgahZn6HF8PNaqHpkaaFhLPyMtoBwKL3pbLDKzHPs3D1Y3gar99zDqYJ4tBjvXmSmNiSjBm8",
  "key15": "59fktsm7HyesaxKS1SwfekVv3zNqA2r5MwD2BihrpN7dETAK7hS9TBysWuHGgC1ZJ1WakyFeAr4xZZqDxGshzrcq",
  "key16": "jJT4KpSrB4NFfsF6kVuwBY1YbSNo9cKTaznVUn5CSForQVTm2kKLvgeYqeqRMwbmUMzSEtRZp5vzLyCj2HiPtiG",
  "key17": "49DCTHthkgtnzLyCq2YmL6LAY3jFDxeaWFrdWvCPi3ZQWJ6eJ3oyydgsQPMRQ9NJaVzLEe9LeZN2qbcGEr6MpMwi",
  "key18": "4z8vZYP5vY1rR1QPyY7SJLcrScqewNEBDiLWDNmyzxZiP4zbKzmEHAsv4SvRe7gLMerzYiPiBX2UFXeaXxXjcVUP",
  "key19": "SjGEMU411zpM2sh6XK772cgw84YTMXnGHetQ16Vtkhj2nzMHtF71jjUYyhXG5Fo3Fwk2FPDLmDLzFNRSejbMTwF",
  "key20": "3xa6wDPp6kgXxBmC4Hybk3LWVR8NufMkD4ajFURyGPaP31nUxzviNbGHEcikPh6hZ1k8oTpxc6jRrEGpnzQxKFgF",
  "key21": "nBBekM59db9gVKBbTFXLdCDdLtqc7byiaHSx9tDi1L7Ff7uvmdVFFQ4q32uuzLzTfyo7gWHtdch1ScEeTHNvrJm",
  "key22": "4kHkW4zsAkNJSvhw5NGXvx4JuS1XxpzvntWoBRNiUGwriU3V3TPmWD85S1K5iwYu2LJMCa3UXiW5HUFSTk5McWnr",
  "key23": "26QjBLYRDNGg8gBZHMsT4g7RBiH73vjxbkLS49RbwcE5QwFhLWduKjsi39djbP7uLhFZTh1gatrJUNL3dX4ZJ39H",
  "key24": "27rcPdcCCsDRhcd4bSqJfZ6KXcMSQTmLcyq4beKnhGmHMcXNx2VZ3twj2GCkbQHBXfUQHPbA3r4DCPLsCggQFBmJ"
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
