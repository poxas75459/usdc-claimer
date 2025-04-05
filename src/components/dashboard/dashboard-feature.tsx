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
    "4LKVgsfWT9qikQQQxYvdN72zj9t9Z26J4GTDNEpVPduMwAWkc5k7QmwG24AnUddr9DZDqzi9v4G15U4e1ar7MZCb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uvnVUUBHHSNh66RPTJbzmwfR6FW6eUfR1gZoUy71TSrwcc6Xgic62kv6rH1nUyQ3buAZBRznrfJTZMW2gHAuhLZ",
  "key1": "4ycHstVgrD1QXu13MwuQfLN764NhaB78FBV1Vc6MHDAvkaukgADyWiSgjUvDh4whLdnmaHiMk8YHxWVb45DmjGfB",
  "key2": "3ACDmqLtLdvtZgKamW2QVrXPCBr2r7MrBFXQQm8AhQ9CTivRbiND1FHLCGdJ4xcnop9ihn67gzdra7TCWPup9Udz",
  "key3": "4WefNgxHZ7X41G4hg3jS5krxYo7xoG3oSP7ov5cjszUuuBvHrMnvMor14xLeFqoTVmg1YNCAgLvwbvdCCVdzP1gc",
  "key4": "2tBt9gtauMGSGFBmNvcKvyhDRnAwjFC1hiRCQYam8uFXpsgJrCz1d18iGscMeseAutC9Qqox3AhTZ6yuBmpBdyUX",
  "key5": "5eeatxcAv5SWSQJWBLECSCrSQmx3m1F1j5KEWzH79CynHZ2bgKPpGFaE1zjcFHvJ4g5f4UF1PJ9TwTMNAHupFXq7",
  "key6": "5dtCWnrgxBTWXrtQoHL5CibBMeCrC6RD6bi7Z3jXjYiAPLn9JPwivdoErNemnEwwxw1iWAuWXUvkVkcwjQjYNSbb",
  "key7": "4SSQTc77fSSCXmQivZttgvRLf3Vs5KravoH7fuCWE6cwrM5NgzG6RRp4KhjERUEXvTThXWA9L9JigdgHAYsoRp5F",
  "key8": "kQTc9Rj11di67nnXttoi3g75xNL5pCkuct8UynZd5yQJ8TBSDrNWFp9Eef1Hmuuqv63gSUvX3y1DFBQP5e4PV8b",
  "key9": "4Qbg6631uqfxmKa3vULCTvaQUMkeyQwjzpUokE2hriaTLsUv2Cq2kSj9jnPK7A7AhdcEQq948awGbtJBfksFQdjb",
  "key10": "WfREEqxARnhqNGsCSizvsMXUivyHFbh8NUAAbDHVF2SxFKWoCo7mfYrASgDt72poKKUPFPvc6my5WdYy9b7nJf1",
  "key11": "va1QKLR9H98h4i5aCq4N9ibbYs1y4FKGrx5Vdgn9s8fVARiurTqLxUVzeSsU2Q3EZBF2EUnnEbBna9xWFXjKD4H",
  "key12": "3vxhb3PpbR8zX6vzbjiY56XGnBUSxhyjd2ahrhwBWHsD6aervfJGDwR2xiZUFHmt57aL9xy77ZSACSwdMnCufMEc",
  "key13": "5jtECmELQFMVrMwaNcE7RdzeWcW8hsUU2emHYJ8PZAquUsmdZEzNzWkAtMpx2WSdEyVBiz1ncGK9VKq27dcRtLD",
  "key14": "273g457cNscUWw6TKyYKKkWtxL98gQG8sRdsSA7PSwpFYBcarh5ZGryZTLxWzYLKJmb1m5NPyrLReuSKKvpZY8gr",
  "key15": "4yWyUqDkCnd8V1kRfcTCovUn47fDiK4A4wuKUoGajRDKdoGEysnRxGYdaX4itXvZv1dvjyV6XnfrnZEnC5B1VtWF",
  "key16": "4ewWfkaqXoVpSipWuJTgN4iegMkaEgANnzFqJmvmj1fTvwEo3rzjCWCxgNHY96MTRdtzgQ7T186PQSMqWJY4Znhd",
  "key17": "4HnEatN4n7pbT2ShVXmD7thfrrCmRmwGDrf9CUehSYGgscwKTb6eKxpGBqV3iVeJjCEtq4odZLksV8nDgP9GdQcg",
  "key18": "5EWedmrNbqzUdGDMXiJfH878deexDyrwATWuCwaFcC99jfkfsmCTQLjD1h78AS9ExxBDf5qhW4KWnRJV4k1DYw2t",
  "key19": "2VRANKnpq1tkHB4tjfWgbyE393q5tcCpHiWf7wUnooJ9wBMnCvU8iubPxgPsX5Md9fbTRMAi95UXo75wTi8XoZtA",
  "key20": "4Lx1PmGCe9vpkdTrCcbGufCQa82fDLpukq5JVMqnHqktD4YeuQ8nzzTES38C76Zu3mT3sqa5SjCvCVz4mAChgqSH",
  "key21": "3BqmgXTrXeXJ2pYq88UaDjyZcYkLyF5zQBujL163nAbE7TycbbpCyLJMZNi1iztDNerDKjiK85siwXJ3D53Z38X1",
  "key22": "373Kj6ZKix31vax6KbgavupGCCpNFf3dBCj2T5RWrwdHhHisRpeRMBfzYu5Sxfp4s646585y1Ux7jGC3YEq5NvtT",
  "key23": "3uhSFKAAKmPukiGyiZo8Bxki6sFxkz5vyUG61YKxjokXwwAx8xPJ2BozGSo1CWTD98HsWr258U1FtMs6FP6KiJm4",
  "key24": "5kcZfnCimwzG6cMUevQEeaLCtsvejfWRGk9JxvrFN2e6wJUmpN3aQh2EDhVgDxaj9v7Ya9MxNa9FgRAxx9PKDxJv"
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
