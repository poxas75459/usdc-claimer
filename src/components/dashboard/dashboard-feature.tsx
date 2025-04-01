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
    "5R16fBzC1gwF3AeQUgT2zF5ytjswR9d5SFEHybb51eskCBc4zeK6dmjraPNsQDnrk9icZBS2pfWRTSUVwuxWzFUV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kssnDxyozwyNB6r6TTExqZfGiU8CqETxV5h8rrEeU19Vv3tEdij76tHu6M9dSx86YwqmsdWzq1pfsSVi8pFwZZZ",
  "key1": "4Xt8KvYsCFGudUtpW71uHhpq9CNBBV41bQwhvpuLH7r9hq6cCf7Pzo8u27o5wvPEVhxWd3VeqDctyQ4NgHsoWH2r",
  "key2": "S6NvPeZSMK4Xpzv8sxZaNKrU9U9ZvVngLPUxfYF1Fa77vKcRP9rZC3GJxmJgMfPhbJ2AiKvHPzoBk4e3Pvi68QE",
  "key3": "HdcAq5V8NQbWDKmEoFabWXvRg7UodESqhpfACk8FAgqtxopxs1XC4gTzSbpgZAEUpLPh6F6MMPdxqrJ4THtgXQC",
  "key4": "5iEukRi8JvRufdtMJ74dDemY1cEp9ut1pGdqhLdWP6cn1Vi9YuYYgWihHfiYPBahoJr6pRCPpoqiv3hRT7VgJfyo",
  "key5": "26yqtSsnYRy4Aa4jcXReAVjMpi3CmVkurUDBckLSyMHp9jy51NHuhnkET6E1vCzKCYvQmuHLNYyS5w1N3mkLkSok",
  "key6": "3rUyRm931TLUMDKhhraSLiwgEc61yDfKWVgSoa9KXdNtdtQruv2fCrRVjFoHnS3uk4tXfKLSLheDAHfucLKHooMS",
  "key7": "mAjd52Nnbk6aFN98qt5UPqeoLM4RNZxVweXvYwQx4n2kftzYuDUQVbdskTtZYzjjpv7S1N38smfFjSSG1eFwD9W",
  "key8": "5QSW8a8D2B6owCLjLwKLVuq8fq8271sm3wAyHho3Gr6siX68wYyJiPuqgitXJfnzWjbQBF4chWE7MwCq5Zuo8tiK",
  "key9": "iVDgDwRKoM5qryS2SDbTwd5kNkNQWTAUiDqEkY3FtgE28S2QzjqJp5wRZKfVwdDYN2tT8kvEZz1SYAC9pjgzzbt",
  "key10": "4BpSLKp4UxMbZJb8hPkvBJFTHDafKrT8Q4CHcs3YfRG81zGcHa2XfCvikzPATKHDGuCVRvGU256Pnq4yNiPXmPhF",
  "key11": "2sai6NyyNyksbYKUMgFTW8QAALTZcRsikbasKEubLhYUGqiw6Xt9f8iMGSRPA3ZFQM55NZskVNT8vzaEAma4MFtm",
  "key12": "5ThrJ3yonR2N3eDR7758FCjDmwk638eyu2E11H7QH1b1bHnddGY4SUXJR96jPwiDZ25AWpAgyX7YwJrg5jurktjB",
  "key13": "5EQcRUxEmeGBLDtFPffMrBjSH1fqzJVyJkuzEP5zHZfnw7HfiFKuZx2myHxTXvwVp5h9jREMexNxGR8jaKEHMGJT",
  "key14": "2pPZwv1YYaepcxAVjYRTJ7AvKYAPjTZAGW2r8ECgguxGhhWo2TZUdBWTBa16carshANQ78b893KZZU9Zv1DVULcj",
  "key15": "3qudYqKRwj6DfG4ShSezqt5FdCu4t6Q5xjLxR5tJUU68HF1sAHgaoSmp4jyWgHemd7C6r4AKk7ai5Jn1sceMPQXV",
  "key16": "2bDank5ADwkDvzWxWeJMw8UGEfiwb9efEa4EHgntQgkG8JESic43kEo26VpfvbiWYUmo4s9R6BEXtduJK3UNruyy",
  "key17": "4e6sYP9rhrDjVA1p6v2w3oNRCXUNYki8GTtccvAjpJYR6B6zd55jXas14JcLrnWSkovP2R6gxJgaK8n1ZQYwhbyp",
  "key18": "2CpWQHRWSZaCsz99N1hFixn5cb5BFSWQyVAzojrw7QgauEfetMdRMZzjx5epV8WcYSwLAVJ4CzCW6Rcih7CG49My",
  "key19": "3JeCBrX9vLJ9eXJU4ZELfQop5q7TEnV8Yj4fwYEUZhu8BqwYu23XxS8CKm1NxHTswYKPu2gJP3e7RvmpheAQWyZP",
  "key20": "3dPF3zj67TfkxfaqWUnbtvAxW95by6SKZJ2nqZR5YmH8ZrikkfkyHsLbFvauU57z4CvH24rNmeBbNsXVBSjYkbL3",
  "key21": "3qPzZr1s5CzU9RhaPu4E8BUm99ZNHrPkS8Ku1PETtJHo1TKuj7BSMytLEifBT7HyjiAqzVfsXJzxomU7v7bQmtbj",
  "key22": "2FnDo4gnaDWqmh6jreLdjdMR7VXys2y4rGbbBiMi8M6Fep6PqwyjUJpzjF6wde4ysQ16u2gXdBEG32ZN3dSDqjux",
  "key23": "X6mSEndr6C6neMVcd2uiDinL2GoPL45rr2CicouLxgf4xqJwYrX4hAKBv8rr9ZQkyJPF6mJZf9v4YHREBS1zdot",
  "key24": "5K1DB9M7Ph89RHcf7PDFm8sNwbErsL9aSa6265gYhxdT9rLdVpQY8twc9dzEUkwgSkDVkzensXzoTqTnVyJ4vCCJ",
  "key25": "7RCfmW5Pn2ddgZHko3Ym7GGAGD6dDd7Kg2xbfV2eUqzbxHaS4HZSxHc1NGFZN5wbUCAK5bW28tDZy7g49B3HvBK"
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
