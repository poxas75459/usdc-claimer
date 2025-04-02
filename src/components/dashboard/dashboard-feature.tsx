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
    "4rT712v9LTpG36wf25rUqJtSCZ7jPoS4J6QwAoinPpPuvQfBCheHJQqfG3dEZZiD2ERmbo43bzP4ZaZpdzGNN74X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tQJ3f4kNNS2U75JXdHpuGvuq2PpNdvAE2nn2pyEFCPUd8qF3F2KtXJCeY163L1VnQosijp1y1Fshmq3jbnyBWoo",
  "key1": "2nKPdmtvB37zrZmKdJfgoPJt8sorFeLMu3SyvU2bMwMkjhmPjc8wc8icBEsMvRrUgMnFWi9vj4A6fyeAsoPJj2a9",
  "key2": "3odah4Afm8V4AZxCpNqkE2vcKRdwTWShxfKKx2UYy5irGdnBoGH5pcCtY24nFwfVszYGUUageW9spockrGCeFXHy",
  "key3": "4Xit9QEr1KMHWBka1DMX6mxBYTRFoeTrGorufebQGuxuTvntLMXRQrZhK4EzcSL3yqJXxtiTa5RhFcvxewjX1EJ5",
  "key4": "DK6MwYF8EH2bZeYEM2pWNLcXaxJEGY2KB4zcBe9JnfVvqKSq8tLJbRwiEobg1PFhEjgNgL9tTjbXwuxrwrbcAut",
  "key5": "2G5hSWMqsRRYKcB7wibfrfnqzumzK4wtJByaG6WeoqCHtZTZ2Z49bNhEJGoty1y8g8J7d5ePBhdS8VQuQw8L6fTk",
  "key6": "3JAQ6hDpZn4ffDdZA9DLMSFVGgxm4Lhxb2TGWRf8Vhz91x9D6QbVeVdqvBTXJJ73gWkoGBo6foPazZUviPFrFVyS",
  "key7": "3fvLnpUMfcS6uSVUnt1mSMNZRWkKDg7UtWfWcrHSw1A2DNqnKVejnBteqawLhmfwyrMohscNiQUCbkhoyR8a4TZL",
  "key8": "4jaS4g345ci6seoFeMgcD6t7pHLqBVSFZRiTGdUYvJjDjSV45jQB7fYy95WNmsfes2sEGCsRDUmC8NkfuMnzRVrB",
  "key9": "5PBeiehvPTVfN6nhLZqcauHXTwSezN5HeqvtoX1bePZUDxogUrm4WftyWa2KJxakN1KqP99CKnbGY4inVHFrHvCE",
  "key10": "4kFuhVhfvmmme1HUxDKZaAh78UcRUD5GX5bsz8vF7L7t3xiaqG1cKRsknGyMfab3Zxxn2UtvPtMnxgoTktZkRDT1",
  "key11": "5GqMB6JifACGuHyR8vKGRomv5tutM6VozXvFLbJWC98AWnWdSn3xXYpinVchd18SUbERM9JhS7szfxYeqPFieERc",
  "key12": "wcS5eDZXnMk9A7esc3gMq1oF35TDrVFkBwGzyQfutFBNFkJY6W1Q82Naac3YXKCRi2K1HkufWKAkzbLmR96JuAn",
  "key13": "RkGEkZtteQj8n2uKKxNBcCJri8aw7DEbrJ43eUki7ScAQaLqqoyCDqEkUM2AsdSEgGozNjxi15c3MHdbwDVFiJ7",
  "key14": "R6v1VkeWuU3Fm17xfjqMZi5ogvoRVWT1uxRaaBkC46mvATUfK1WGm96GikMjQzsfC73SjoShTjJhv7sRLbQjRhv",
  "key15": "2Y44xFnaDHZeQuY9HgW3ifhMKD4zC5HCgTGhyFSxr5uAE7BbdKjYEB4MZEJxNqUzNZzxpWHzrctBHHHmHi5E9s6U",
  "key16": "314qVp9gamfurFSt5FjWyjrDby9HcZSRkXeRudKNzN7PKa2koyz5KEuykbDjVnvXxJBafZcnGmYBHJmdvTtgUtVz",
  "key17": "3RM3fHF9GS9GBdGvfMKJExioKdt4empzXw56mWAzgH8eQQ8hLtuuv1e6jfhNYZhXiiXSrER5A2z77PGRHhgqojeP",
  "key18": "42Rtuy8s4mJLqi1myp3yN4cNN8muzUQ92GU1FJYHbA4knw7VS5sYknWvzPqfZXXvM4esi6otaf5UYmDN62EvUJca",
  "key19": "4LFy9yuGDbAkxsFm4bUk9kwQuj435W95uSyE6mriBZFtCVDqWCZNHqmDRWb1uHi2yfbXiEnPeWbdDffnGDkpbPrP",
  "key20": "FQcczm86aNmfUd6R2uvWPTJW2pFxs86dgtzkxH1nfiwfp165wQKX7CsibMScw3csPXD6obgzcs4Z6sdgH5CmMeS",
  "key21": "3nryGiuZWvBqcqEjsXHTqJ7GsYbnMxKg4SXTYTq13LCmg4xmuh4bZMDwnd7WeJKVk45U6h2sAPVovYkRv4ZgXC4E",
  "key22": "2NXQN9ccqmJJMuGWJSCfb52UerXyn4Gey3nfhjMzVBwQrnmFZCeJQTP5X5kssdUi2NGvv83AMYHZaJE9SL4FihUk",
  "key23": "4WajpFzAH1i4k8o95L5TR11ouLnNygVN16X2LyyuEAJrxRPvVQjXBSSi6azD2kPfJTaPiiwyG8Ho9de5WZvUMAK5",
  "key24": "2NMRvfZqTmXEXhocYhYG7vuEMG2F24Wk2uFQtYVmKCvJ11SMSwHYgg561H6EmSpX9rB6JsmEUortjwuBMxgmevz3",
  "key25": "35r8Ext3ifrLp4D19256WcQjuw9toZLnwcFZBjMFiFRhBiFRgii4NGTCy1vXTjfG6aYxwdVghNWhzZe3VCMXp4FV",
  "key26": "4GqGZSQmVE63qLGkpJoX259DRQYhjtdfKWfSaBPHQu8HkNB1CBRidFhDBhTJriWT99nHayVGAwViXFpgtECUWdzD",
  "key27": "25man9zgwA8M4HeACitzMuHhqfMgzS3s1gZMBgZvRcpuxU97HmAiKbXGm9T4JW8Ek6Jx84E45vLmMsJxYeZRgGpd",
  "key28": "2Mka8D7ciXrDJbJM1eiy5cK2ZwN9tY36KCRheZXs3jLVbrFeG5rpz6gWe5uvy6mMijos1ntaWAMqhw7SwrNdreMT",
  "key29": "FfpNfv62wh8o2sZssY7mp8Z6AFPQmwF7rzy3fNyeC1sMibENBGNvKhzVLrXtpYqp8pb6cMx92ZNPyMGKFzepJQ6",
  "key30": "14rsCyXnhEKqeP9xocg9n5K2HatziLr1bg3p9mBfRb2A2NEv4H7zWpd3WG968LQmJAGcxefbYHHkDsB47AUUo6C",
  "key31": "4Y8VtN8vafMKKuMJeeRy7Xuk3GR1sAcrAHbfgopEnsqU55kLVSPSr8sd87LMLYGoxxpLQMH3bGGVwYTcLx2PYBiV",
  "key32": "4SkTBm2AMuCgKAjUqZuhUr37buKv79dAZqHm1NyrJKHVbW2VSthyn3wkjQbrWLoWFGzxkfFYHsAyR7xa3Y2cae1b",
  "key33": "3Yy9ziPPSeq53UX7VxK1jbzmo4H69ZT9RKwuKmi2HEjauATWxvdEA8EPUMPYmPMBMEv6rhp5dEF6br9WVa48ugE9",
  "key34": "4V1SU2mBpqpMNiryCgmpe4xrQsEtZZ2GtF9hLnNvk9JZKHcMWqYQA7prcibVmVCcPyVzTkxTvqKDz4BtMYuhnd5x",
  "key35": "4mvfPUeEyMRBUohvc1BnBb5uTkYgq5vyjwvs5xUAAZHPKeoTbzS4jAsXD4mQ3DbWZMEe73z2ScM3FiZrmop6ZW5X",
  "key36": "2Do6cb7RnZ4RT6HXGN3Ag3phkqnwEtthvjqd3QHB49A4tMSzUFtnTq7SVQf74s4dnoNpHL5bpkL3AtNxsX3zCd8y",
  "key37": "4tTK6JfJ6ppf5HDhCjPHdj8jhL4ecjfhmc9K1c3Ym4Luzm6ttWMbDEAERe6j4GssBRLPMQKLMhZtPEpg9vR4AhVp",
  "key38": "ePqMfXjQLJXXpfAMaZ4262F26Cf9tkRXcQvA6VxTb37rW84hJx748wuhNFmnGXXPg2K83UX4UgKtGExMVbCtK1b",
  "key39": "3LKTSqS39QTrQQumVG7HwrXboHXdUUMwxLhnxTk1CFF1b79LGaPcoepFa6GAsfDV5F8DzkvjABjUQgxsrsPf4UJf"
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
