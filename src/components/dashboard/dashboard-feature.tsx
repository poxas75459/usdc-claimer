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
    "5iVT7QivwK1YDkvuvS62FohXGH1Uh8kqwbAND4evezLXtMH9mcfeGL2S3aZQCj79LuAyvxqpRsF9mxC4YcWVkR13"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5en6uf8tLFEwkpVSTTtwGq3PYaVkENWPToRVEifU6Z9EJPnPUqsg7GTuRnhSw7k1HjDMRG1kHyVhELoD5Ser1VxZ",
  "key1": "5J6Zah2EY91eMt2Ezt6L1NwhUtNo2sVajK9CA8bDT45QnR3PXWBeYKWzFyxt9BgttuNUW6r6cD8TazWHTeNo2b75",
  "key2": "JcFnU41gFMxJUmY4FVB7XtWtwB77fPHRXLpwKBxeuRHE2mZ4p1DEHM4DisRCRE96LubuPTnRDVKqRdK4ub9F3Kk",
  "key3": "3C9tgxw9gYR5gJgZ5dMEyuasdgmEhagGXWS9C57LaErgxrWBNomWHMtpKtES1UTYUPCJSnggPhTdcrK7S7ctcaYp",
  "key4": "qCYcyD5q1q6mHwZxmssgRL1yiyKKhjukZGPwNWMZm6jefsQeRHSJrLdH8biok7niHhj6o8gHqLHMRKS8QK89oXk",
  "key5": "3zrbEJTSXwMQB4EQf7AqsAGcxdb57QwsmFJQk7egzqBAjpTCPkHyyqToJYfVm2Bw9w6nLEfXj8UQvYAL9PxPCq1C",
  "key6": "46qx1hLUC1RBw4Y5HwpRtmjAWy4baxHqnjHT4B81fcdDa4dLMJemk9rkD4CMLP8MLCjieGff1No7bNrwrZawTyLt",
  "key7": "627BCJkwTZbmLVZtiYNKHAkkeZcLGRPFzdJCBHwdpTJTmfbcYpDzi44ySDqKCRoyv5zGYyszW4rZ3DuGWLPufoBj",
  "key8": "3gK4PtsGSUHo6uUghfZvVLvjbLEC3yVBKYx991UPCNrjezD9ZJqz5nwjeFTFPaEmteAP5qxqWK9EXgbHfgHrLo9b",
  "key9": "2zew8ZSedy1uhVmLj9apn1gRH3vFUgG6ttzUSePJUcKCvpkTuKp7DZJ3dtCf8DX1egosMTFaHcXVvpAhuc3pzCR1",
  "key10": "3gWeBayLcyiQtYjgtcGs13v9gnT6C8pxVCLn9r8A58Dq6bpet8eeB5MdeZSnAiS9Md4LjEm1VWwdGo4wTq9qAqrd",
  "key11": "KZaQ1873xuLcgWKAYFzQvswFksSgLD7jhKQB6i5P4M86asD2T6NWpZo5y4kBWGUnXygTn1crmVjywpVUtH6it3G",
  "key12": "5TTwx6G9pfZ9sozwEwtds5NyZwG1yCCvcQnqu8CxBrbzitzgUKbTJs59VwV3hp1EhXqsxW6eRuJJZP9GpGbyr1f3",
  "key13": "mmVf6ePHqdM3TPJo4wjsB6LNrcwcCZLUb7TVxuYj4J93uhTQRyQFkR7UjnJGbXiiPxiKTL25HGjvEddhBSHcwEr",
  "key14": "2pdhT8rRJsnMbHzwWpzDgiXcAiNyLL6kp12a6tbUPyrkCGnCRun1MsQhjgMej6gGJanmN9tPiMe2yqD78ZFtwQkz",
  "key15": "5oUBXG1d9NT9ieAtXLMb6V8xzhQ4zsZPg9ek3hjT1WoqU7p6wYuLc8aGAS2mHe9z6otemvvxeqESeeYD31KT2q4N",
  "key16": "2bRoPBLUPhaczHizS4TaSsgBCHQXbXiV1WV2NU88sjYL5iztd63MX74g4WubyVbyRqSNqtmWhCGkHFL997zwHref",
  "key17": "2SqujKFjkdj96HAdHebZPeGAkKnA7HgbyBgSyJ4NjF3wHhWSN9W4Q6Wqh6vQNAH6MScqjUXTSxasSqEDhWqvbs2x",
  "key18": "u1dUyxgCBKuauuxhUFznFgeMZqBKW1Yw16KHSNdogVW9k6tNEaob8DPua3GomFnL88Z2WP4hbBxDGo8t5kU4GNC",
  "key19": "FLePMHc3ham3CoPzz4oEpL4Hx6h5Bqz2n59mAaunb7DovYXZneHaggVyM3K5jqeBKTvrYAXi3jScRqsQJrMVbjZ",
  "key20": "23S2xEqbnkjPBzbBHcvayKdhRyhfGEsTVvgi196nncww2H71B1guLbdGh137vqowHmQsW9tZ4RVqf6bwoG95qzNm",
  "key21": "56uDmVmhTQQZQKEiYmCmLymxAqadwnGAM4SdjM2BKY5eh9wEFKxgQ9YzHzf8GxU42ZQS8hCekFbjSC1qzdkFN9DQ",
  "key22": "5y9KouS93HAoKdym7Nuvt8n9cwUdvUv6Cy3TEZziDYD2Bv2SbKiUVBgUSsUvz3AoKGg3kmX1pqtxLZuoCFyYq3J9",
  "key23": "3ifcESnreks3M7QydGxz3Kh3JWcfkAcT84HMHHGCBb2EkyeKwWfMQqpkrXaDd7H5BmW8uE9Wazufwo71pJrVp5cf",
  "key24": "5wzCnUHQJrpY5Rs5xPYorAaMuiNuE4yoXShDQA7YRe3QnSW3KDn8fFyAX3B2vXSoNMjB92Btgpvz5hFo7zgYNKFm",
  "key25": "3Ez1YZkZndWKPctJKuQfHWfQBxd8f9TAVSPQBr7TCWUtTbjbtxzHQNnuiRcdsZ9VpPctDkKmerFMFYwCBtcLWZmJ",
  "key26": "62YepaMJEAfm3jMwsNNXDbXCct5doD3BT9NLeKUamhfyDNsS4RjcFGzcKGX39MzgvcnVkRz9duVsRoBbhJqYpzTP",
  "key27": "2TKuQz4PHrA1DgUHqy3D1qWffYzP53cirJHQMoU3rvwj5bAQnaqomehUxHpzyj2rTWLDxVDXmJg2uvYjdLCYteB7"
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
