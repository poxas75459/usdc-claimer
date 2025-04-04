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
    "t5sLSQ3YEf1AYF2h2DF2HYhQQVtUiiSpXtXrfq4LdboYJfuEw7J2AKHK9ZFShxzH3EuUiiw5ebmrkZxzEx6KYff"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MbHghF3sd5Y1Bqz4fNPTPonCiq6iz9dtGeBUQCgq6ASykA16t7ixerF5q9cAd7w5hkRDsoVU1kdGCkAUmAFvsmG",
  "key1": "2dC1o6zuov5gVRS6JHYxbVvhVkVMF96vy1DvvaGxfLsAGdVFUm5c3gDKoN2AqYJ3f5LNWLZvkSHGeLuXgKvg9BLL",
  "key2": "5otZWSv5vnsbJ9qf8XpuMKYS8hjeMhxuNuEBN5vHQS4NJERhkRMiVsYpMcz42rHHd4EsUitbhUsMc9NLvB9uEFSt",
  "key3": "54kBCTVr7Rqa2n1ANmQ3oWwupjkaPFb64bCYhumCVFXR2xCLCkce5hEBhCfAWq1zhBH3qYqiBan4C686ffjtwgs5",
  "key4": "5pBCykej41Y6m83eAbsQETibyqZohw3KHtPZmmZPSbBp4fZ7dpqqa6C61zpcSwTjHEmvwomdPvHrXjvaoL2A5z6z",
  "key5": "5eHcxMnsTuQ3MEHVKzqgq2P2fafap1dsxFZoHr4rrPWbYdepYZquhmH4FG8893XKw6jn8YyfX5nxzV74ge6ytC86",
  "key6": "2G2CXn41F2mg9DfMwP9mF3a572H6UQ7i6UheYupvktmNmV5cWgKiL9MdsvBg2cpFqqvq25WGtAgkZo3pzuDN47fg",
  "key7": "UEJYTBMMwaCCwo5LzCaVj3aUVqUTnuZBKcCJUWonPMaG59EQZ6rb8G6cVy7ApEX5woQdgVZwfB6PrLhFYQf9rGX",
  "key8": "5BK8jHN6rQzjXLYefvERoFjs2NzGvkP4o1y16k9BmycJj91Qg41j9opiT9HjJNRXnEyWiaDtR4YzJTtDtgb2mWq6",
  "key9": "5EkCPLJWvL2mb29SuFd7yJZyqi5wSEp5WZWEThdovpRdEwsq4hHkmScJeFML2hw4bErB4kw8CUC88LppoKAwXsUu",
  "key10": "p4aGg7Ycfctx3hxMByMvwdTnt4KxhtBcrUNaxgJwBXF8VNNmvGsoFqCURCBASSeWZAUYFCivNWXAxWc1o4E1NGi",
  "key11": "3d5D3TUoMMTxF9sscHCBGAiFHv9NkTbXqxjBw33UNBcxEGjpE5KCfE7kZjLDr377ixVW3MjkLarXmaarpAukq7GZ",
  "key12": "msWe6gVMmxURcf1DMFkiVKzgyo4ynrVXKvpUo1HaQGzggAfuN1NZmnMMyPgwt9zqGg8icsRL7SyqsvmuJfqB6uE",
  "key13": "4uKW6Nad6vAmjHgkCeN3E3iE6f7sjoRPkaN5CkyeCxEQ1UsHCCwYwFHSDCNJnUbz9fabuuPsuUhWzgYq5dAtX8ue",
  "key14": "5KqfrjoQa9XAroHDFj5LQHiJc3uahi28ayEyRaxsdtyj1Ls5CZNrQ2eGTv262y16cjbmoAUpW4wpVdnyJmVw7KYV",
  "key15": "5j8wzEkLHVUJr8qHjN4tbfQEqPeZ9mKjaaKJ3XpZ8dDs7g4xUTVKJzBidTUNai5dZawGBLD8yNvKDWNy94isCCyE",
  "key16": "3b9Eh48CZR8qZbhE2tTy6wk4n1QNAN3JYx9ZqPEGPHQEriG8E7PrGNWbB3kpefekrCN9R8PeUwkX5gjUsN1JFmNA",
  "key17": "32mi1YgaiwEvkWLYwmDxkHzkxRN5RKWnuNdN5SbfKz8FWhWBp9fc667cr8FYGiVMNNCTC4bF5NxfBo6bRz8eGYCq",
  "key18": "3e35Uzk2SMDwWkCUVqk6sVQ3paYu7W2FuEM8RVtxMQnNW7BYMr6iTfEySxXxrGxSqKxfLxKZCQnhKLihrSLA7dyD",
  "key19": "2EExFUyT2MYqayxsAyReS1h8t8qfjuiysvKgQdgvWmsojwSogkgkLGHEHzhwUCwHMkeazuoBEEND52cqCBkiGFyd",
  "key20": "5kc4DuTVjSfyzcNrpzDFNfPTYKx9r7UGqz4rbweS2TQsppW6BkoeWs9N4vEfZN2EsJrXZUFpU1gSmt65UKpSjPzD",
  "key21": "3Esmt976zJ3XFBBYMZAXDivfX6WafBwzaMZGBbtVTWwWyDRQ6qPJHS8Vo9oqjf7tinMfk6u4TAsD8DHuN7UHMfc4",
  "key22": "2VmQPqPZ3i5Ry1h1PRw5PowXfFP4JDP7DBJDkGwa8CcA6arq84KZA55wM8ChkE14xxDkqV8VKm1ZhzocJ2yhBpvA",
  "key23": "UDKimp4CqdCa4toYKPunEdcBcQJ5ujQMCANzkhSPSPD4sD7T7m3NtY9Nc5ywToJubusq4rSWZ2YuiaeycPsreZb",
  "key24": "5eUXqjmaBoyPjAXjEDsMqv7z3VLWAd1eFCF9K7n39HYAiqdNb1Y9QzAYBvFD5ZeKghTUHJSg5CPJuSJYVpWmPa9c",
  "key25": "48dbHpaCwtZTREKn5DRbj4rngMQmSTKWRG7qVMTxv55cKErYSARL1ZwVCYE8y5LfcbosC6gSnNvjU2emHaDzz6L9"
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
