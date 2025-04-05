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
    "2tDipmHhRnLUmqeKEPu7cV1uxPu34U8q1QTuLPwa3oiYUy3zPC8aaDiJXoyXAvR2LRHtb7kYDrtF3TuN3ASyy81e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4e3W3YYH4WYryPxjWWtJwGzyqAey3Xv55jNbqknVDktGBGJCZPXEKKxoZbrWpAfFEtMrraorgCDVuUNr2hRSsy7s",
  "key1": "SdexF9wtAPXrkqVoHsEKh4kcHsZR13JJv2c5msFeY1jUsWf3Sj1YefnbJPezwYDJvGTdfpeZkJCQPiPB7Eqx2L8",
  "key2": "2iqkhASs4SQmRKnLkF3dqG48674mDb6uKSkPDXFpR2WbTB8eFezSYcX4JoBYFbCdgBiupFdBTxBoAYg9adFmQrQh",
  "key3": "61QSWCv8n3fuQBM55EjPnNGpkUknWz1Yu2TEDC2sLBT3MTZvZFub6jVM3fWsjvNoagRRnjD1mvkDaAS1YyEpPxFD",
  "key4": "4jbHyd8vSyX4HxCbvgrRHHD91RHSRQFErU6r6DaZU61qse3nEzDo1zAGHkQS3BayzRyuNDqSuXUJ2fW5f2MRenaV",
  "key5": "5jpBQucLi9mMHPZGMYUxvmajuzM11pggWw2svmj3zNLKzytWMD6amBQ6kZtMNuNjHiKgViNSENduBjtfi4AcxbfX",
  "key6": "4SjNqxcsTt21fU6WmC9L7mP8pL8HURbKGxk2Ka1KhX1bZbRRhXnRuhjaCgshCnAJf7TTZD4CxcP96QshbAzvya8U",
  "key7": "xTfPadfhZCrqQiQyxMcGJaVkD3QpD7EuZdMV6myVasRLsc9psGBLLrirkoEbaVRVNQq4FWyrvyNt9gYvn3tNozp",
  "key8": "z2hixeUwyk8aknwrmvDigKUGNc9acWWqaYiGgCSiJQUEuCjLr9Edg3khM3bRzAVv8w5tZKsVfP8Qg5Nb4KF3eYE",
  "key9": "mdUgumPcQxQBJJV3SYSKyPBpGPpZUEJvGpU2WKvMfgBSFAn7XXQsrr25bFnzmEAgkWdkBzHic3eAaJa55S65GCA",
  "key10": "4UZuA4EZGW4tsCLgjaUgDjoqcaZ4P6DnWeX8PGCwhPCut5mXDKCSaPxKmxUQfkWA3rfkQJ8s2nkgZGMySRCbXfPY",
  "key11": "2UxKLktb9Y6obNtsTRKqhUB9U8P1X2DnFqozCTv7dX9YL9REDRP7dQUWJU5j5foaffhVxm1v6wXSCKEFZMVeUrrP",
  "key12": "4oC5YMq7W1FwkLgMdqdJ48eEXwVrpWmiZ9g3Z84ViD5PGsaUYmc2ZbETDb3ehLzwxDq2Db9565DHDjZAQBf4LPTy",
  "key13": "4veLrpGvMXqoo5A3b8eak9gvXzdxaXytSotrmmoz8xqjE2KeEM8GtkCfkwo6XBxdsUVa27M6zvjb6jAcF2tgHJD4",
  "key14": "3Hev9WLHVXyFEgJZvG56qSKomSm7rRtvKXed842eZPzMoRixxr5kja9VpeZ5oUrwNXsV5aMSnNKSkjfcxfdgncMx",
  "key15": "rM9D7rpexYxM26P4eTvvcXwJpb89YLCskzARAWojqS7niGojQJTZHk2VUpEqg9mnPctBvKR6JmhtJBCKR3PCaN7",
  "key16": "3CTVA2hBsEBKVrqx2QNQEXCtrf6r289niokhCTU9aXVT31wuUFETkmUcaTyYXnyAMWecsgDgeB9MumamW8shdV8B",
  "key17": "63TWYpHZd6DD1voGemutixvMfvWSKc3J9WwQX7HAgpYdQMjtpNv1wW85SdQQCxax3Wv58zaecrYw8T9VUJ3LGk6N",
  "key18": "3w2P9WDzao3Bog7BtH9kfu9dcY81uNPZurWWT2KfxEUXiin74gxbDp48c99T9frTaobTRnWjtYQFdmxTQPyqrxU9",
  "key19": "2V9p18EhuYLiC5MqzdWddX5Kt5686uHG8KTHVREqcYKnRnt77thnBX9DmPTMkmjiZHr4wyEvJCvs6pavtzjVF1g4",
  "key20": "24TixP6NtxTDeQ23nQiLeoXh5mkjqwZkgDxbZuVTyHkgMiRYvwGPryRcthtoAqvRMsakti9SXgS9eiPqCSJ8Pa7J",
  "key21": "5wWo9oaPG42FCC5pV8jZaGdkPFZShEryoJSnH8nz7RmZVyvUQmkwiAVzsGHH6MdNHW2bykT7J4bTdrhG4SaAwcGm",
  "key22": "EAKEDrwxZdUYc7AJMhqnG45stE2hZgbQRBrY2c2ASJsNMgYUyWkkKFcA2AkndChcFBw4LsyDVPm6uYBsPuNHnWs",
  "key23": "EXsVTUvPRwfFe2xjCTgHWChmEnZbpwFLfSXWMVMA4KwbSzWA71bnLo3QbJgTmqV3Wd98aErgM3Gx1crFshGjyJP",
  "key24": "4ShFxqQdbfPYoPJKMuAJcSr2RiLk2QmStvgYeHxBdknd4Xt9cv8pHRxDKiC84FWmSbyixgLsPjFDgoHzPSNwWGXJ",
  "key25": "4gTv6AsWFzXxuSeKLyfuSbveT2AsK7tgZ4Gp1d3vTckZiKMRJsKNVu4mPj7G3HoCtUDY2HibSG57WB1AJqqBL6ei",
  "key26": "3hkqC4429CCBGQ7dpyP2YoyZh2g4r59LuHxrtAV1dZc6NgSqsjAwTjdaZ8DPpzsmF84KxKQR2pdC44cfdFVZnn8Z",
  "key27": "4wxGST7BwAeSAmnA3onnWBVrqi9cX2C56WrdpZZe2cCpoYAdppspabkTyqKs5cgp7pui1RqC26eDpjw8NmL6NbjN",
  "key28": "3iTdB4nBVirBKtt4p9CxVdwTrXGTwfuRrxJhcLCGwWAhYWrsqYwjwvw9DVHGo4FwUWuT5ngJNgX98JSUs59Pjo5M",
  "key29": "2YoeJHHbxgu9aXqwxmN1WVSSNqS8Y8cAu7C8qT6wMUTptBA9f3jfZbZ9RbkhBerNRn3cG2bNNTYv5snuPMk7U9LD",
  "key30": "w8qLkUdcaPA61jxrFGwfBHARaWAn7vTeMPodH61sd89JsNAADpJCjiLQyYUvs4PXpjwwzrptz7vQFDDKimbkJAN",
  "key31": "3xBme63f8EfoSLss398bQfMCrh96h8JotgJFNzBGDo7x2jSKH3xU5qmxaAy4ukLmNmFqXEfm5K5fz6YmMU2KCywN",
  "key32": "256gcdoeVbGsjoaLBJDoSFTFui2fVsdRwaVEZoK3KVVwiYY27vthEKsxQeXuzziWNz8SuQJLSLLRHTbMyqfTgnVu"
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
