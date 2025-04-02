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
    "zrLiRdrHQyrBM5fJ69KAkUSxQZ6eLTnN9VPFGM6rorSEP3ZCu8bPuLLZvQ7ANrN7pdvPXTX9X8qXMw4p2cE8ou2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vhj9imfJzXGVTY3artxbFJG7DDc1E4aSqFCPAbXfT1GdquMbJaz92k923PYTX6AFyZoCeJwbDprq9SkTvd4WpxP",
  "key1": "2v2CrLGUzyXc7SHDa3o3atxHif1SZ7ZonPMmVEefPN5uJAAMGnnJAsaRRL8qgnN5xwa7miEcwrY9akxNpTFMSxok",
  "key2": "56x1eoGFCd6xS74aJ61cE1kp2eg2upXYxVgcVcAXkLmKWFScLHfbsh27sSCGT8ASwxvAHPU8EMbuy7G3fN5Y7RGZ",
  "key3": "5dNm1tmV3TzXc2vdRPuLQwSp9hWytzjvf2nLC18akFgQxiKzd8imBTQLYUQG4Hq1R2pxY4asTrMfuq4TGX8CDVsu",
  "key4": "2B3qxXhQ4AdSzv6AnkUUCqHC55T8AvF4iWhtSF6fpGWCSSgQx8BypBUJM5dYU1RMXteT9LS6E3yBxEf1JDXfUPee",
  "key5": "4WWvYNqrbNqZ2PMeaHKt2GqFg3TPgFmHYAdt4AqfEmN9pjsQroRHhEFLedeo93UsXzYzfE2DUWWeFPRPX45WtqM4",
  "key6": "wQ9HBBciiyMXP48yZ7Lh4CKYApxZ91i1XrX4pWrjNKBhrLMqKLn6vaHqJSGrApqE88VZ38WEVPZVqMffLWEZvUF",
  "key7": "5CNMfCDzqi9456adKXhTB7zUPKvaTobATcKsZMtdYWXPAxdLv5t9Kmj8mQwMVN46yePk9N5ziE9QqoPA1CDDDFzA",
  "key8": "3xvxxJoTi8Jco2uJqrNC6EEQtGGAy31KiPqKvz6jZGEc2CnUU35aYjXxQnhRRFHfrF1PJFBprC5FrHCJoBhk2T1A",
  "key9": "4FZksp1WTNDPnepRWb2tqrCk64m56XkbGLoTcfZauyLzC5NLzdqoooD91dcPgrf3MPLuknHoa2qpRP6rrQR9qQDv",
  "key10": "4FCdhSPSdRG7rHjRDMoNRqK4rkfFKXrTrZrq9TXkPNzkW8zzT4qpbzEXZEjGPHPfdH9mDSKeKYz3ZzrLyRJ4d3Ss",
  "key11": "3oA3upVxe4wubTniBBkyPivwxztyrHQVrcvrmf6PvBfL8mC2RTPmHwF4kNBYbCxvEkAhjXyPTNvBH6yCftfDLaiE",
  "key12": "3DdLHmaYbcKssHaPGUyHS3HZ5ZhY9amgH7zz5dNHNe9jvZowfTHKWhSq48ZVR8izRDUA1wPebeWkaBh4w1tm2UTV",
  "key13": "5c3D3AezrUqemUFWnoZNAuwx1gBPkakW4znqiUe91gQY6CKMsXWUDMGRT1kLyUAfF24vepjRM5Uy2VApprkvhWWm",
  "key14": "5hr8d8PghBWSLnNV1QS9qzwnPTaQjeCfVNz6VaKsgmNakWC7zuzva1zt1FTo25PJjS9EPH5NUtRMUCj8vguNc9xM",
  "key15": "vnauDBHWPVwA9RkCDKmjsyrwEDHGVGtgMAHBFma7EtGEPETaT81uCrCjE7WsEkFmfyJxuk2KWCdmjQx975GDho2",
  "key16": "5DhaFNvpP85Nzxyi7kBHFTfqUxLak5Zq8yg1EGecAeawDC8iXq5ZpANQKyV5k8LKT3L8h6TDs2bb91QXnfecSWFd",
  "key17": "4gMnJfPQDvrKaFeyRLnye99Y8hUaPwHgJvP9GcoiaeMM1Di9BLuMRKFL248ZW18oaEnwnej8MnseBZrQ6pHavgn1",
  "key18": "43C46J7ecD3eH6Fpjxx5hn4f9AWeVr5Xg4bhJq18HW2kbMhcUQp3TuKgyzzBfiYzD84JAKkwBVqhV7eBrGj7tr1a",
  "key19": "5fwLfe5qLuDuVUmxScDBuUAYp1PUrTDUSFUbzd5udBXyjfPFsteTrSm9CY4SAptuwyFC5MbCrD9bjqWAG8yhBSrE",
  "key20": "3GrKCFG4j8pdNihRCsRzCqHjkQKVMXksgh1tCJRFymYaBHj95XJxsZk14ULWLFv8F2XWWsj2rYXdLaAoL6oRkTqc",
  "key21": "YWamgiD6mu6rVBxgEbi7TCvUPCKug98ryzsDLRFhnrYKUhCEq53eFYjDiNLPnfBiakMKviQQJJyjQLEVtUtqXR2",
  "key22": "4DdoucMBwPpDVG2Cj34opSFbQ88mq8EaJ4sUbyS2NBhMSmPGVE9QMz8WYoeoZxi9B1Sq39WJa9g3A7mHXNP85rKw",
  "key23": "5ejBWSkXhPF6rTV31AinaFdtMUd4yU5a8jfYK665wsqenB94KNnXES7B2atnHTZCL76k7tN6KyxJYa5VxP55Zjp5",
  "key24": "2CrWxSq2kMTMQmJReX66tJUx6f7tz6x2suRpDB7uFWSoEN9Z4MKV7pL8yJm15TRoUn4pPpGgQrE6SDoqCirPeSgP",
  "key25": "4a85NGdLxdW6KnFazujsXFCr6jLjJR5Aekr1E2rAGYkoDKmN7jVnnAhXiB9KR32tBYF9iLuPdxmuGHriWDpQDixB",
  "key26": "3Z6vdghf5Jmicjoiu5AwAyGQvR6UgKBCJpZ6nwGQKDtEaGSpcsca75stfuTwj1pYRc18eZWLQHQcMoeSi1NP2aQT",
  "key27": "123Wjqc6rtUQMzCjX3Db8dHaNV8HmVfDNtWkBqHMNdgUFhpEyWtYB6q7VqHNrUN3uJRLsJKEmQqjbK2eYXG1Qmpa",
  "key28": "4Gseg47zcJBJB7bMRd5PRvkkQBxGnQpGcTFWHb84eSuyruhHnjbXpmFWLftbCevuBMxactbTjpBq9JUK2WCVAiok",
  "key29": "5XAzSnTFQhHzVqg8CvzSLaR5FyXuFQPWZ6PMyuTFS68AcF1fpL3TrxjvTiZeNiQQ2kdsXy8gDhx8ybN2HrV4ZcqM",
  "key30": "4oybKnk52Rg3RRYmV2aatrPTqruUmc6FJAcDSUTuhkRm7ZPzVUtNcwWvmxy75mRMezSmsP5iEN4Kt3uxvmQh5nKS",
  "key31": "4AGm8XH7pQkbgisSG6ZCEuREAtgZ9WCTMiXs62UhdVEvaZ7ibf3zT5YYr7R94pAYpmyFyYTXhRebaZ83EshAqhnn",
  "key32": "QWFzKPDFsPMYVNkpj6hXUF5XhWceA7vXQMtKKz65jCjjyxgnsBxz6Hj9XjqetvDKA1NmUVxdSV7rgTidAdNbkQw",
  "key33": "u2g2bCe4RXbzr2uTyop6jenN24h89JBVxSNz2iGcd6XY2GnjJZBPL6SHTzZ3JbD7jFr9pEAQokxsheskRxK98Zg",
  "key34": "5YyqWYj4ZPHwbmzPXRTVhXqmuMdCxjrymmF1q4RzGjHCRAtbYjEg2VVzWbmAe7gXVyrqnm976xjrJzaiMUMF2Db2",
  "key35": "5nf5hiWmxeTC6pHLTMf9r5tKEj7qtjELhnoVGrkQDieM7TrbxpECXSaJdVvh3HwWKUDC1ATzWTYMAUzS2oeDr38a",
  "key36": "3uXyQw7YrwFeKWUGfAWGqBF2XzsmNMnwatUH2sWtMGf9giga8RAVjoVi2ZPwwjfk8kAnvT1Xh9fFELLHAYuxqjcL",
  "key37": "29qDVKEiU49Z1bzrkSBqepuq478B2mmN5iS8zuwcu6df2Fz3kfE3kF9Eisa2dZY3m58HwgUAVZMTewj6hbeUSFBR"
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
