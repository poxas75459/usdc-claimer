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
    "4CWP9hZFYXGhg6JL2v5r4vSv59VXYzQFBY7otwkMqXmcMPbm1QBKhRnf4CgdVPj6p2yLF5gswniVqpoCbjfSjpzJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56WwR24H8okbxQNQK2djMWfhBYoFDfWGamXrWmepwBX9ujD1S8jCx5FLNTF6jAAiAEehSGdY32kJvSobmJ94svfT",
  "key1": "5W6RdyePKfx8jWkWq62JgqpFMrmqEHnYQ6N87jxMqDZj5aCQtmhwdmjerpuLaCjZmJviuwZYdUH1LM2YLNwKJUVa",
  "key2": "5eW8trzuNkuz7jUhAets9FLMBt7mstZRbsVrSVCyLSVJHojSGojJYtk8xT7x7vq2DVyd9voZiN36RvSuVED2aL9H",
  "key3": "5W8pPtepsGkCW6Y5hcjDxLeBbvW8NtWqhH9HqtKkJXWMPeyJNGGSGf9B5bWAc2eQ6YbqPc5X4xnauzJEPqssUn58",
  "key4": "3KaZUd5Xce3EcBEPD4LWHSpb6iLYjJrYuSA94d5riy3bkSY3RPZYmQixDsZfm9FAD7g1pNfWXNbZGefhLqnqz6cM",
  "key5": "9NdzWr4KYATcTS137EGA7WshL1PjfLDYvmXnfBkgae7i3LMQAvh9r8e1THFuPSbcjJUfbSE3EgB8xhiGwQ6Ynz6",
  "key6": "4ybiBVL6ayh7oGroeeX2h8e5yqLovmuZGVHR7voTAbxPYoWTtJS3yavSmyvh2SS61y6pHxCAvNoBbr4Ev3WeFrqs",
  "key7": "oHGFMzjjpNv6PAidZXcNkozqpBVhm7nrP3onV41E5EuoWejRLRfki5DSF242HzdTFkz2anG4xft8FaJ6Xmnk48S",
  "key8": "3CtAkHXgm3Dy4D6XwJLzYTQvmTPADTit1hBcTsUUXndfAGQFUN9i8mPFgNG3ZPR7V8n6LhYt8GEgrWVsityWZMD2",
  "key9": "54PoyX9BntQJo1SZxRQJuzaAiqgBWCP3XrSnhEiww4ZLiK33kXeopgkXtkJnVx5jcw8Z68YrvdS4ow1A5mEa3Ui",
  "key10": "59JAv8S3pA4uwJAbgt9V26jaF8UtrPMRqdBk9VZQSjKb42trHKpGDztHFL69jb5pqvd6uQ6TNiguEqtb3nS7GHGc",
  "key11": "4pFq4GGNRSwT8zErfdvkBQfeB5ieXouUHYLFwgCXcSxtR5MksRzD8pyPviRofWmv2u2FTVbL5o2wkLXJzHRzFXV4",
  "key12": "3zdvqKMhjhe9sqQ6X8QPkBugAzGNe91HweLK6nQwNBe5Uro3iPMGak6yLdsMGmnmPvE7G9ygCWNV3QVMKxcJtga1",
  "key13": "3f9Cm57ucW7s4nEaXwAB38gGnkxTRkSDH4QKojVZuon82x4tnFSFwZBarDGGRXtvMyJW7XyYWmFS5suvizYHN7Vb",
  "key14": "4PbjeEDyGrDRtn8wbzG8KK54gpgm8X74JApsBz8BPr6HN5ptXwSFrtH4jBV3yyN36oHDMGsnmr45noKWKY3M1G6M",
  "key15": "3TNNf87wpD29AJoeM9kKnQTJUJuRHh1dcw7YpbCw6B6mbojJM38WSLd87TaxDdPdmeZ6T89bTZf3G9a8o5Fqb5rB",
  "key16": "55nztrUFwPWc5r8iTs4yDEhQyK3YpRn5JRppLCUukuuu7UNtGfieBDe24KhJyQPYAGeUbuqfabzoSVEUAqct4m3d",
  "key17": "7A84CQktCM6WSduk2eT2Zo4QCgRKPg2Pn31rwMUBXwGWi7Qm71E7cXpGNrSzMsfF28KzYe4axsVsenqF1mmGZXq",
  "key18": "5fMqw8qRht3X87sTX7WLArHQLGtz8aWhARFb443uhCHdUXqBnhsAV5aXjDpSWaK79ywwhc2NCHGGUAppcGemYZSc",
  "key19": "3ogQAr2kaN6ADgxzgzMFUnycU55cYtmPbUSja7sDyJnNMZDw5gfwEYZXrKevy4Ry8CbW28rY1mm75KBpLKHJ3Bau",
  "key20": "GTPGmzgnDzZKD8quFyHfEHKP9WTMbj8nVk9y7WPMTBqfRCFxBNHchicn5aBtYiGn9fVT3KSn8oF9NnSJeUUBLsX",
  "key21": "2yXate4YGzvhxZyMXc5oBL2ikqyBbwSYzHXy6BzYfAAW1HNER9ahvc2MBaisnbhaCizF9d4n7kJqZ3ZvecdwtEwq",
  "key22": "2NQCPRY2nzbMcqq15NHWVVEYnpeqM6DFUxJQZZnhEzKKu8cA6iLZzxNty1zRLpXV418Lqg4TMzL6LQ15ZPk8YCx8",
  "key23": "eQHXUP2sB7reWz99f8a1CKZ1Kf7uerDq8e8EoJdV6e84eauwCCxcrc9uNehrNWWhwB36cXgQSNsc7kcB62L4g7Y",
  "key24": "3yRd41WwcVyxP6ZwoQLfRdYD6PkFr8u9fwmiatebCjiBcxUcLDa5y6QPRgb9Ff9QCEcAtU4tuWRP4ZSEXxBNPhv3",
  "key25": "5mWyVvLtkHBTi746a5ht4xBiPtpSLgoD9WdEvZmRa6ms3P51hDU6bg9F57NFW2DNe5TqJ431JTcRu1PkoVUG5tdU",
  "key26": "eJQ6AXdRzKhszJnGQcAywMxzQtmW7BcKr8Xg7e2hf2nUSZAyJVCKtnQA7cToyJJg4qdhWLRHwQcwoG5vGB2oHge",
  "key27": "4yR8SCXVoqNEPjFbsE417VqT7wbzRLbg6iWFgCC3WBCkqCtJSnzWmmry4xwPHAv4GWy2pcLemxgxiPpNDcqVbZcz",
  "key28": "2mwKDwX96oaVswbCHWr6mjDguckjSaL8Br51Drju3zFvGnTchtqySLYCdMPchZ8kTBb13y8Tmqzs78oJnZ1ynXr3",
  "key29": "4Rqp6YFqJiXJGwsTZpNBS5gF52F5hj1EnF9sUM9TfEbR8JqAzJbXofQQu24rLvxPHPqWzpiHgAQwQ7aLdCJzTjDo",
  "key30": "4YBgPwYg1xap9oKgtHt7F7s1cmx9wdQtEjQehbsTS6pNocvTx4grUbTKKwwowtjGjtf3kzebcL8it5cbdCfDGpYa",
  "key31": "3cp1gtVAx3AXxNsUaKiUV9NcYDKN4voJH2vHuEFPvDk3G5K3P1sf3rJr4v9vgM1o8F51pKCKZJrKQMtCuxHfsmC6",
  "key32": "oXmkZsNMWPZt2SwjGVt93F9jrkQ3z4CPLdhguN1GLzmMXa9zNEPvcu38bpDvnFUvnZZ5Y4PUXkzVNAUNtjcAPH3",
  "key33": "5QUWWPaUGDgRxWdt9uy8YmWz2QoE8sDSdqnq3RZj8h9Y5U8DK1HBrpZbSnuHLGhCHrK4pf95UGbm4nsGTnzLnYNi",
  "key34": "2Sku5iEp8PXko8pLzWP8iAx1S3bt9WRVFYhM5F6NvPq4dRXLKmy7VfRacrCabr8qZmrmZ4krv5FhuKVoUsWFx2GE",
  "key35": "28bdxXGLfj3Y3g4KXedL9uvmgBCDwChRMrWH9ouQyGKosE9Z2xCJWgNEqCN3VuzHYq9uDQoBGVUeJsNKBL7SgJdX",
  "key36": "2LjJG7UWMNkXGEkTxAkimL7zkJjhTag3kHa2ScEZayns5nv9QHq8hKjfwajMZnYXbjGL8BrXfs2ynG2rHTDxVUG3",
  "key37": "2KD7y6qLPAnoF5kiUb5MJcUtd1SSoWAUamJ6byNA36M1QpjZ6VagZnfheD93DucSAgbn4exaeHiNV1q59HfTDxxj",
  "key38": "3W3UQpTrEckJP7YUryQ628KQfbkqQk2Pwz4jxxYtnvHRrao4k2ms6jpFG66TrPfQYwuGboShM2cDv1FowCdcXxhj",
  "key39": "43tTbSpAhr2ysgj2ovy4qbTLW5vJbagDsSTdsBbdN52PMojbmV4BDCrTRN9WXyB3Cj1gf6V6TQG5Z1aQywYdXNU7",
  "key40": "2f8wZq3KGgWndMtXuATZwX3isWZXNVQtWjthPYrTbMGrCUzW5AjGeuaYz9sVzdUzvbA4hVLJpNEz2FdapDXBTkN"
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
