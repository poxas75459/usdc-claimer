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
    "5v7K3GdLpr3mVVPKE3BZFYuWsfHo1UNz83Cq5rgeZemrHRwBvvGhmwLobhDeVzKC6wRCmbMH3wgU7y7inDpBq7Xh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25ULVeFN45Fsk7HWn5j8CtBRSzgra8jGmDRGK9Sgq5P49ogJfXczdH9sPTPJ6TmHF18LFuR8dohpC4ffCFNMcurr",
  "key1": "3qh5LG9vtZDg12XEkr7SXj49PocAU12w9bFbq72TGfg8FVvuP9jumrqUaVTMAQ8aPBx4WqaktsXZU7txCjyDwtZH",
  "key2": "4oeAQ2s5Si2MWBFZyAZBkuV4tt6GDwcYVPcdK78FB6odSo7LMymxDqF7f8Wm1XcjC3Z1RC6k4fGwW4Gcghm39UD6",
  "key3": "3GqZ5etNjbdYF22JrzY5cxpiaq1vLdJfok85EtMzhd628gb9H5W8weUmATnf9LwvBGQrB3iwccR4tqVmsba5WVzH",
  "key4": "3bRUd3eWdr33hnEUboUJnKCuy6igt5EXQ6b6yz5vNLr9WknoPGGACnhmNRkBEAeBT2goR8PRNwmVe6E3YYw4VyoA",
  "key5": "4MzELasvieAmzhS3TaGvsLH3kxVqgr3HRRtoamq1gGf6eB7WckB98HXyauvoBtujJ7qehNKjjXhwUkq4Pd7ATeV4",
  "key6": "5vpq9RyLm6g2vYcsLMAiETG6RghGiZPSEKtRxSgASdGL3QgKpd7nEYnYyWAnX3or7u4pJBCvnrPj2hpnTKRaKtmq",
  "key7": "56jqwkzyEUZgrr5U126oDzGNVASQwK4fmj4wPy7ZBSejbUApChLTSKxNbQoAy7ZrsBsNqTSN9i58svXYJrfayzVZ",
  "key8": "2hhSHsJ2CuM49rnzRBCJtv9J3WxbghTJPviShzNFyuRzoPp6eyzGG2NKsFs3oAwR9EAF7xNTYYsizHxsEWZKAjRz",
  "key9": "CwGrUCuz6pTxtxBuCZmN7uhPPvifphNJRNsJbuGuanjt1MLgGHAhKLkHpEFsdfuNWKTYJqhZPQSNtHbSroAMZbd",
  "key10": "3Pr7aSrQ58aza2oCCDVbpZhsvYVbJcEH191absVNmDD6qWCFavXMfenQK3ojeiC3QEQnJBwtBzPmKqKkxUpXLqCd",
  "key11": "63MQ4gWV9juFeqXyFvmriWVDD8k5SvYTojd6Wz7BrZWAqwCESUCfskG5ThNEPoXnhrtcjcNJaw7bc5Dd5cvihPQ6",
  "key12": "5kgKxtcyW8zw4ivHprFSQq6P9QDwgU6akpyhn7PD265VHCZZuAdorM7Ybh6dTtuPgj1WyJ2PvQduCz2T1KTqPfkv",
  "key13": "4Xff4RtPbosxx27fqFDdiSfqCykE41np8XPzzLrimbUbHV42LTmVWM4Y5WTzdMHQxa68QhrHx42JZ6jYN77NuFnW",
  "key14": "4XewMxefJFz4fdZCdMcg2tZAWCxnGeQ2hFt7htrKBPncNmoSbERxUTJejYTuKi87tZ7v2YAc9kghncLNbXKsWLco",
  "key15": "5zw8oUe9yRk4KwnzfPv4BxuCd2a2mwy1L8EwU28KgJBFvTWDg6RGw7jSDxohSgWTMexvDEu7dTVRZp1ww8vSJMPA",
  "key16": "vctWY6KUrTR8KFq87cb9tjyd4p4Wh31tutKNd3LfMjb91dgpLMHMpVParLNB41z6m1s5WjMPxLSLBiP8EDyLvTG",
  "key17": "4ejmTYpiLqCENiRPm7RsbA9SE8BnXYHvHXVXC62db4weHLR82AcmoCV4KcjLDkiVVvDQFLtEprnYQkAUx7zjL4MT",
  "key18": "5AyDiFvd1EZUfB1wVPozVwph7RfiDwEwEhNBgT9rGBF8d4UY1SLDkSkSxaRC7pgGjt3yUWF9rrBXUGSFzoMAHd83",
  "key19": "5DQpn8QXsoJotcCQm3GaJjSi4RzXXF2uNWxbLpNFFPEiESHnxgeSvRkYAU5D2zu5RQ2bFk6SFadqc6hkQ5zUKhQx",
  "key20": "3B3aDhiGQpVE91XimcxxbQ42EJXQxkjSBpHXsy4PST1RB1zUmuaoAFniJuFdjQfdrNBN9BcwwqwuN67xKtDx8RAy",
  "key21": "3bEw32EGeWpUtdqDa3UKR3mGpuz6Qfo47s2fW1y1LTyHPp7RvX8m7eKhyYUbHNvzCzNayhZqU9Xui8ERHpy9bth6",
  "key22": "32EPwheUe8HvQVD5qW1sQXKbYCjJrZQvdyGESTycj9PSAf4KoPsDKTKAZ7FdwB986KJc3QS49FZR2NqvpyN5NKej",
  "key23": "3uuHNkXAaX6WggdXybHGab4WdWant5xuxiwiAwH79LXqiKNCzae7nu7k8oVuYDtqKbK6VgGCpkZ4B6LC6FP7PjYF",
  "key24": "3epfnKQToHtVK6TKweMvZ4i4himYXctvrpfgWye1mq6WnjHyaJHGQBxATk1xRq3GmRZspbV8GwZDMyA7Y8bQvaTw",
  "key25": "5e5bdpuL81f9BevUay43geRSBmCvBhYyaFqWeWt4wjqHThYXeAKE9fDdpTewtcGGtnrungssSoUNBbhx4hPRHuKn"
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
