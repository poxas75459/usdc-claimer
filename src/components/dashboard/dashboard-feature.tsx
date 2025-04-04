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
    "3dsibmTBcWMiKLwuScAHVjZq1dWRkQ22aKcxGEfCCgFAV2mEURxw9UdGjPoZV4VJ8SoHbHWueXQtCUtjsF1SVWx3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "coeiStRHcHe2mVJQzZwirgAcH614y3P573qoboh2HyAUmBMAhoHCkZtaAMXryb4KD3m6GYRbESswQpyox7U8Cj9",
  "key1": "crMyFGE2VuqvLq1SsP3BaVPRR9Wu4YLhvzaEv65uvkRcffSbWeBoFbtSf6JjckngJ9aq6HzWZXDRBHq354qVUjZ",
  "key2": "4br7wcsSao31isJrg1f1phqw4GTS2W37HVLYXMTJMGVtjvqiJECJkrVthqjVvJM7YdohkR66XwMay8yVAAZnWD3w",
  "key3": "3KYFRzzPbZc2JA9xM3pGBUZX4P9H72JVsFm5DXU968EyQpYPjSUQ3GA4VTv7NpLVA2JFiLYGg4XbqhUoubV3ryxq",
  "key4": "49LCbzUtYFNADt1MzQW9JWRpwH2HvTYoYcTyNWpjanYv8baUicCDWbypq3NH7V5hSthpwKqkNERYfdm32SbvMBiD",
  "key5": "5WECvcSzzk3ZRq6XFdhspBVK28NnbmgpD11Gadzap8kzUxtcUVQJ1S5XYmY85GSpHHFUJpD8WUPHGahCDqJn4MQH",
  "key6": "569hen4oqm9KbqL3Z1pX1tyW46a3yQ6pkfKzDKTcsiaZmwRYedv5pqjB2Wa4rqaxjGqqoc5t5EQg8TxXdYDDxhgJ",
  "key7": "SG1NG2tFQ2w24Lbxbm39Ue6naR1jASZS4f5bDwP25Wzx9XbdZxpzMMnxuYUsCPkg1GsnFWwgrrLKvyQzC7Ac4RK",
  "key8": "5KGGDNQHPvTvR79CvdwGEk71d5jdyKfJcAXg7jJ2ecQJua89zQjazxT2cEqKiHR9DvYNZTmgTWY6RGcrdcJFVFuY",
  "key9": "2eKQHSLUhhSpABd1Z61qVmyxXpVGjm6T1Ggm5vaeKe23wNakT7PAPHUXDsmM9xdoZQ8XYkhxSezPVU4pmE1h6tZH",
  "key10": "31obuBoaY6gNanVuBU6hrdWbPzCQFhrB2WmQAczgH9vC1NrixDkAtst3R8TY5HUASLx2sNKwZRmkrTHhYQ25awZu",
  "key11": "3ap8Sx2ux1MGaBHmFbxqqiMNJPkCUELCRrS76RjTpdYbn1bDcyU3QX3j2rMEmcuRmhzw3C6Ys2cBK1C86RC2icG8",
  "key12": "3iNMEFcrSVjE9nzWXJLm4JEiuXMnhgKU2ZM5YHM3wfLnbw9UmTnN5drufkTJmFFSVr9k8hM77PozRXTi3fA1eu9e",
  "key13": "2HrPyYYMJSpXA8WGg7cRsgXLrzC7MJTZoH1Q2PmCCHayDN7Z2qdFudpzGFVEJFBma4cCEUrNj8yk8kLFQjHWmKX1",
  "key14": "4o9SKAth2cxKB22MY5TswXoboaEWWiNCXpfMVk2YDXv8rAS6Wwvu6zCZLJ49dFGyRzXeFMQ5B3qSXiMZF7q2GfSA",
  "key15": "2ZXt4RXP6HDc4e7FwFQ4DBC4wuBJuvBdjyp8biRJDmn7YdroK8grDz61sQxysH3FchtPDEjQxPRs2DExpZeJVvxQ",
  "key16": "44oHCbDurGDwtysD211drC5HJCwzgTD15Y7nkQAgorYhcVeDdcMqPxsPDhFU6WKfVWYbV5i1shzDD4Gequ3RpaV1",
  "key17": "2JaT5mATwB6p8oNk6wJ75CxzHnNjjEe9VHUXDiSgEjFUkYzcZoAigcVNoGYdbrTXH2tVbr1QwBxq1oVpnojgbL9i",
  "key18": "3KdBWsHwVmMFnBMKmL966pDwVJRo2iC9zQ2WZgd8aeYpWXa6Fj3J2mM2mjK6xsg4pRs2NoLruxsoFhrTGfnAy8tG",
  "key19": "32NUMGGoAmr7RTwoq8FFS5mo82RSBJ2hExT2AqtBmBzeqHYtvgN3uMAQWWhZP3o2ot7TVhA7wwC2tK3X9SwHq9HQ",
  "key20": "59tWBXfh4Cq6RCgHq1wU2fp7K1wiZkcxe6m2vYomwLrbfWj56Fqi1915TPGbzWemV4UFdGfSVnZjzSQyjVTd17ep",
  "key21": "5MH89roaphMCPqsP7awFFWbVexiXNxwGU73yGeYuwkdfUK1PJvUvRn1Z1bwW65Kw7aUzdCmr5EMJiS5YPVw6iWse",
  "key22": "62sUp8o4dZPXLXPyYbf7G2D3CwqfJm1FzbJ2xtM1yW2Q82g4qub4yjzh7DEY2oC4YSZYhB7PxzfyYNR8wshdMLLk",
  "key23": "3x8FL3vNtZtaTnTcsWhUWisctrZeGNRsyehs9zoxqsqQcRsTUy7gYJAjFbfXeY85RYjhMkrZGWxxRbZDoNZvmYcc",
  "key24": "4H3Ke14Bp1aSx25E35GDjWw69dXQL3PHQLnavtCmBKa8p2euYpLcVPAnyPvqZAinWQXG42EYYjm3ikKyGZRvaFZW",
  "key25": "xrgP4cfmPF8KXs8gAANJaaLP6Gq1Xy3nAkR5dwM6ptfuTJi5QhPNbnbAZgN1YWqk6NwP8eiRTx8W6QAzjAtZdMr",
  "key26": "4XMXA2vvkb5mHHiYoHAo2Ww8A3J9Arn4zouGziQebJ8JNf7GPE3VwidWAUSsXyB6u9HYc2gqF5GwYrHUyvr5afVi",
  "key27": "5MhfdvwKQ4F8kSS8beUgvm5ahnAgQDkU83z984wr7SiE4KKyedHMTzW3TzS5FUVMUbqke1jKCae8PHm9wzQD95gr"
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
