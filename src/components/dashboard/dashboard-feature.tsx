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
    "EugpcdVeS9wBU8nZVwPTLXku74M3CSFEj4kGS3fH2dMUtottNznz8vz57bcjFkdqpMWLhBdrmJweF4mgJfBwCAX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3giRYo3P1F39VQCUKRNRHP6KJpL7k1R6tdtyQj17m1xxK7ezN3cpT82Q1mczGurvUMdnopzdkWXxtWb1w5CmJxNL",
  "key1": "5uzHK7qNUM7gKTFncApsnyp89b7EBrQ6YyTZhMM4YJjBySUSwEAhiZyGh9zV6pkcaxK2xY38NmqdytPFcw92WKVA",
  "key2": "3bHWm87hLgAfKDffS2oKYAWvoeXuQ9Gq8GQwwFitYNsfkpDjLCez2Adc2BdeezqKuEPNfRkZ16pY7gnBBhU1gUWo",
  "key3": "2zXTLXhLgeot9gorobHVmdpMY8gYeQCFhhbAHJTsvoiVU6bwzQNUr5cEmMNBkiMGSpB1Jrzx1e6vRAXcvr1eYytL",
  "key4": "Mr4mN7s4kdrBQMZHH8aC16oSdjPeF9mVJs2YVhzYcNQJtZEne68v1EzVJf4xzfNud2MoENBJnVSUwob7FuTwZ6w",
  "key5": "2E5y9SWw8n7rAdgyBTbVFYDm7xApSyqe47sWgZZNJbkqPAbg7EHbhXBLb9yWV2HRP1jjW5SLna3pWwKcy3KfnXmC",
  "key6": "5pu86KqWRDQSzicLoEogdHvjbLTXnRHxp2vNMLG6zQayB4axfLh7fnWvcDpp5v63CpzESPyCac5PBQ5B5szaB2Za",
  "key7": "nms1GMRXaooEKS9eaosp1BdpCfCvCLWZMNMgY9yFMxAH449qXbqbPYY7Hp2yoNaHNBfVGZHDpmcnto7ATUxEsmg",
  "key8": "2c8BpGMLLk785PL4arVsNrq1RJKZoPxphttpfPThkztaBysCDZrRp45Y1wKb63nVtGg9D1sUmDcnDZYiuPsJbXNm",
  "key9": "5FJcSaKYxFwC2mDujRyVPGzCGybvE5NrNpxk2hnWPDLbeaP8bAj31VwxCJ6RJKAVgF2igaCG2gpTRk9nDmhNtCRj",
  "key10": "4ApaKmm4jgyPnKqGotMy18eQuw2n6KptNC4o3d2A9Y2EuDxDKj7CcCciaWmribbSbmSNMp9X53P4ujMVdnUeaABm",
  "key11": "26dWF47oMMhy1gZ8Hg2nXLSi2yy74VmuQC447nJwzyZBxCkvmR3hjSV7k9c6xqoh5H57acwQEbxJ3CcgQ58xfsJK",
  "key12": "45mhpjESUaPaiZBqc98NRTN4dCyZtdU7cHyyVywDVxCKXWvxYyJPtFQ4meYjoPVpVpA7UuQtWnsCGKCw9GmFJCoX",
  "key13": "hPZQA4jCrkmvQH4uvLmuZcJL7YTnWAryY62mUHYuLtBVsVmyJPv6rcBR7F4q9V1jR8SsbHghnjMeSQm8jgPMgkP",
  "key14": "Y7eU4UegG5divmQSCqqFhQFDsoKeitkNbrah6T9C1LVKtenChHwRD1chmHik83XRJN9eiWZqNi5KwY7j1j2bfdd",
  "key15": "4MYpLAdfnBzH7HQhtG58yKpEwSnUtELQG7mBr9EWKqJanE62ER3eFjhgqKw74kLqUHYkQFFf1WFUPxFcM1fT9PqC",
  "key16": "4YWLchkLzevkjZ79NQuPmFiFsPmscwL9V8YCZyAjaijquUiVmDfeqWXydN8Na5phcw3D9RFeCsPGa37GxYhyrakA",
  "key17": "549Y1ttAYVnLwxiwvAwtbv8ZJCsbfdzoW6tszy2jBSRKRxWi2pX4YJKCNLpp8EWMYKJMfjtRAbKXTKdFZ6yeBs4r",
  "key18": "2r7UTi5bsEWhJrKkHiBfVw6Vm3ynnxFU65Zgx7KtrwY4B8dFWALX5EvjusaSPmzz2fyHSm6C1upYuY7p3qFpWPD6",
  "key19": "43pj2t5KjzAuPgrhmoY6LCdqEAkRqZprsmDzW5KuhkKrKRXLcs3KugjiySCAZNFHkG3u3ma3ZKsqyoWVwCJhiCkm",
  "key20": "3RjySva37gK3HKinUt8k7EzxWFDHzxEH3cRiqVfEzyAasr8p8SAuq6woxfC8SNuGWU6eifYUyCdfr3bapyULShok",
  "key21": "4sGqpRtDc8yLtjSVpSbv3mxteW9wQLXu419dwL1Xfxsgc3QtDEAyJvBVsnCh5K39CkkNkmc1V58XATLhRfPuUU9u",
  "key22": "5XBDfoWPGuo2jbTC6PHw9StZNK7iJYhAmZRdvRZNvfif1CbRdU2ztYHb3XeUeZp4hmq4QgS9aPGjZnsJ6vm4HU4E",
  "key23": "41uXzh1fuE3JwEYtTgXeu6Mtbveg7wXjtvmpMmkwBsYjBqgFHvBPTYn78We1kAkDamsPju41QuggwJY2vfpLsJ9U",
  "key24": "4D1M1J8QuGDma2UpeZVkbknPmrSoZeibFJJrKNXVXWFS4KZ4xhhHptuQ9tZ6zsoN7DczQEfMfTdcqgsXaqUVeu87",
  "key25": "3FLPSoRVYnHmic1t4RyuS4uV9DmNRCLgpP5Sh5UmM2K9zamXSSC5fBzSjbxxEK29G3tSSzqyW9ruj6XbPWa5vwys"
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
