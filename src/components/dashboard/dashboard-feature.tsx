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
    "5tiZAKgzU2DoA5awtNAPZSmpgDMG9UpEGPhgwo5yaPPsdkbsv2QwgsLMzr3DVf42eg5qMRSgr7k7tEW8Fa4CCPFz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47uCr3GDSpsry3v8Goc1zhwpEgJeqUQUKmMVzKLPKgsw8TM36DnAip5WPey9zcW5Ph6DedRxLJVjxMJLRrKV5uUF",
  "key1": "2guVpJUMXoaiW4bygRWEvNRADpGR2z9BnJ8XktdU73fSANGRyNAgXWeUf44DoBUvQDeqHYqoS1V2GxhCwXvwXFNR",
  "key2": "5QAAnf5vkaN5ccwrbPqzgAiwyD3rcR1NPpLipf3UazgY3GbRHiQmcn1D4ytJTGjNbVgzgGsx7nbYZVGJkCBiuq2F",
  "key3": "4yGivB5Yvd3dtsK17tPL3zkuT7ENY4UPwu84T6ksxz8RG5cSE3rxJe1dZLiqbQmQzSaNJP3z4q7ndc73ZX9sbnia",
  "key4": "286N542LJigxF44dssT3SposkMS5HSD94pD1YR93kGyDhdNLfzLEhfTMtUjPFqKb7HceCw76AXquKSJ1MzejzB5R",
  "key5": "3oAFs33t5xDkg2hdtuuzFjurmWbBzys8aGAdE3yLQF5tHo323AZdAg3YvGd9i34b59sjfbF57xDVthwaaUgsmMpi",
  "key6": "229vyUbCEtevaedAFjnaUeY3P95MLua2WxjYjf5AMo62YQsTg7RSX5sTbLQNTQFBEEAUYQ2NWb1AvNmEk6v7QMLb",
  "key7": "2pK4VRdqUKDdfJN8dNH8WgsNqXaWXUDriX2LDiimw2YutbcEdeG1Kn9gZ2eMDv51YKEi29axwPE64WkyydjcdDks",
  "key8": "4jfTmbJPNKruZ6YuV7Le5PsC5Hy71qGyrm7Ba1ai9u8Z3Vz1dHJ1wFGsFYHRNDt3Y4C28GRRiygwctmgnA3onTDa",
  "key9": "26wwhG77q47aWVKYfx6PhfuQRKLpBzktmTyMPQzzVLFW8jpto4JLFbrt8jntKwNDS7zmDkCCuktYZ4sa4QB2zrSf",
  "key10": "3UTN3rZQ9dqQ5Vrf4c1gfVcUok6oiqF7RMTmaWtr6HByh9b212gCwtPzBF1pUDB3HkudFegUVuyufSoq1rjULLsS",
  "key11": "37B6XDhNjemytNVDLYofKLVehom4kzSYeaN5GCRPMW2XA1Lyy9RhAP1iGMDhvWRT8GpccUgq5RtJDWHoNKpVdEsa",
  "key12": "egxMwjhdeoD742wgNjdXv7PpSq7kMycpJK3snrYz7kz1zzWvV7j1KwSqA5TiU8BvgzeRsqUKmsxSysx2myq5SJf",
  "key13": "JJaZbTbCJHjWpZTJzXUc1caNueNkuZajq8mjyLMYuhioRMtoVHXWSzoUhmhJGSKedAaorqLJ3WcdUFHYx8a7B5b",
  "key14": "2Yf47yR6WHZ2uNeWy9ikkeg8QpdKvjZvG9HGvru9HFxwxHfzMG8eCtFrPTAhTAGv7rC5bqjkxp9JeWHwTKWaecuK",
  "key15": "5WMRQvxc49HrY6HQYKExVBaLV7aRYYVeLvbfUQWupD79jMGpWiWu8Pm8JLz7yNK22eb4brARxAXQiTErdmCoRgvW",
  "key16": "5LXvRPAqhcY8NJqtzaP3c4fs2sn4eWr7eYSb67n6CbNQNGiWGvHNSrWNSBJFfR1Aap6fhKTxq8CmJmTvojyYw9ju",
  "key17": "3qN8Y1CnuyoTdnW66RHAinfWD7ASXAz8sfGoEzZjLfTc8kunixSWENSCheFYx2XxpQNDskHEKQ5HKqWfee6QvfU",
  "key18": "57QpBfYnzNeDxFrGs9wWHaG2NjvzdFSc2rdGe8Xd3PNPBjHjy4SLs4UAA5aHq1pR54mfLcR919WZ2v1YrvvYhGuG",
  "key19": "CirFd6UCuD2pwGXS3MdAUwCotFwQUHSdonQ2cr88Ub3HAs5UJG4j8VF6Yn1ypJZe9G1AK7B4ckFHZDUNDg24AS9",
  "key20": "2XREwbbRkExgHtdr4DrgJi1RdwFprxbmrWCsDHFfAffobyrXPJRYHEne27yZGRdQs7eu7NKfirTSAixsB3LCFqdh",
  "key21": "2c9rE8aAb5fzKPNCeaN6L11GsLthP4sVCAouzHFjDqcpk9XoG9KgEDMkso6cntqd9uwsGZR5YCyxsbNe3rDkTi8u",
  "key22": "2h9rewcoDXxgZrKPwK7YtaZTgR8x94FN22zZXTMJHmSRsuy6cLXZqNw9dxULFZsiare6zVc9FXCJAHQTW8oWfA5w",
  "key23": "4BB3uptjsd4Bz4d9En3JzG91gz8N2cP9Cat4qVye2AQA813qkXj4dSFtGTyJ1YvhdfbNgnTR8dX7ZbujrRJXKbfU",
  "key24": "5n4uQMHK7zGKX1gfZsjtB9Yx7c7yALr5UruJ4NSPjCDjyY4FKJYDxd4bGkxzSidFwwGNs6KYbsGHxy88hUhssva7",
  "key25": "5ecAEvM21GopQCArANNUuWmKLVuKsefHarQatNNaMvYSzftpgiV9Pk23jmwTttPkHbHrSWUCckjRSNqUjtsSZ2D1",
  "key26": "4axNoZmxeaYFxwyrp1uAtPjxCJiznF5BFXhbAWRpqp1GN2vFAWedAcyqt5SaCGKPLqq8oKvKnrU1hGeLkVqMZoU9",
  "key27": "Tkz72x1weFbovE4p1bQBxQRpFQqDcstWm8XCvauJTD4CSjejVbypM88ZffbUQFX8YdKvSvYcGmVZc7HqPYk4HHj",
  "key28": "CGvHDBvRiztQCE2UY4peEGPve8CJq913RJE47zLsbpaJWJsEsESEE1pXjsJ1E5r859fe2sENbq2PDnyoe3HfZSM",
  "key29": "6TP8SAdp8Dh4eESLaP4ZN6RZBFKC3t29sdAAiiAghTwUN5pCfM3L1PMPxwRsZ4qYTzpwyLtcAhRAdmPb7Dm1aBf",
  "key30": "5gERiU6mx9r7VvqsNkinbPHKTGVaVqfGCrxRomKWsKQhcXX7yf1ZiSZE1anDPzhJLj9BJxmFf2UWEZmsL8RhkUsg",
  "key31": "E6akESaVwkgb8kiXLDTkjby1XPAKZcs7mDQGS8WXyn8qFHouBnzx3uy9jzyejoVCikc9NaMVZRjHJLb7r8QUYzC",
  "key32": "43h4uGukHcwnzWDWZUS9wV17g2JZEgZ2f8Q7epUN6AsRqUKmuT4Mkmsi3w4xwaFFzT6FgvFhM9JngqKaUbL1g31e"
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
