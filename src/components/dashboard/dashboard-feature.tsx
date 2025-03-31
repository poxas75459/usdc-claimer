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
    "4yzEsUPD5JR7rBpTa4PyWPJRLPRVzLFUHPwKr2ExAbjYszMYU3FBywGceC5tC7e5q3XzHJXAoP6idhNZngg4Ge42"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zAcEy9QTRNJUqDdtXiUPFtNdUkyi92NDb85ntCPEi5tmhWD7ReJnfytM8euF4ND3UcT1jVnrxqFR298M3AbM8uk",
  "key1": "4KFejDXgWwVYGCKuNksA9hDHXcfYCy4Jyp3nEA87ubYqYco6jPLjuRs57a6RCxWaHNATjrxm7haohf7EiwqM1idc",
  "key2": "3LxNLz8R8hehxDxEouJtSDYBAP4jKsiU2KYQTGJtEvbEebN63HXmcK5AN4cZbiNEauxBbZXwte63mZynUeiCxjm3",
  "key3": "4cVRHZLamaeCkLLrxCdZ6992ykf5EZZGZxQrgnmP5gJufaev42zKhkPYQfgFufAs3Dpf4kBeFxKQF4foAYnt7mon",
  "key4": "SXZNsyMeJyMNGYLD5ciFEazukF6woP2FMSGWJPWKD4NujrVscPHed57NL4dbUXw6m8VAjxAnAvwg3FnEg17NygR",
  "key5": "Kax92H2Sy9MXwsFTqBXT9oGqom6L86iEtRD38r11raV42EXtf1mTHXW7fzEccAhvr3KBUkdzsqwQNq3BJqA7yKC",
  "key6": "3xehsm4PZmu6ziPh1wQp175WifSmkFbHuJ5RaXE8KSePZoQnQRR2t2qS6ZSfxWPfLSz78TmRMq8GNjZ2tbVHVRBu",
  "key7": "tWsDfUT8mT4Vr7YLSpsyeXeEPE8VJSrDCPKY6YkdBGLe3gkGb7rq5XDz9dizsvah7cxmHBXEmkBqoqvPgdddFyP",
  "key8": "34cRjUnLkh69obz179Yqx5qcpMbxm75cYGpEqd9n7QTDd7aFt3m6vgUSfP7P144EKmpKNFriDv1DAiAkj7A6K5WD",
  "key9": "24Xou5Pssb2DrVmDNpHMdi3JnS8FT9dEuGY2TZaXaS4s1UyT1uHXucqRWQZyzcabdu6TcTrWpVYxbQMNfuw5gUUG",
  "key10": "3atFpGx7GTpnQ4WWXr5ckA3rBWnqyyaaVeNx94983ZVhaWKBo619aqin4y7aBXQCVdJYjpgXC4M3iUqXvtHovXdX",
  "key11": "qFH63Mgz9p2ZKvsD12U6Du7SBNtff7D9nLgPfcostnPsjWASXpgrDbfFyKB6e1LTtQXQ6VYQoBc6fuctPdM9DZe",
  "key12": "2WQc4ZBj16PuM3g2Q8KT7VmhXVj4aLt6NUCXgBwwGRZSpaKm23HNGp8WNgHjRTyJim9GfZT88HJmybc1GNFoQK7S",
  "key13": "GyAwTZkCLXiqa9hrawZnq5QGuF5ei2bc8NoPNG23dXLjW6epM1G2APvwxbnQFKUyh7FzAPbMpf8zLt2oY4edPqW",
  "key14": "4tNz8SQNrCtLMSZzx39GYHtyoJF9Twk7xpeq52GLDSCtCvwt5VkoVWs7tuQRvFxZ44BFtEtA4ABAyB1EiTupa4ZC",
  "key15": "dHoMnQYJtv7YfDpRBWJJr4og2PRLsUckfgJU5Vfdxd3wsw43DaLBuEvwaTbRE4471PLvuHJNdFyhjRud6kkUEpN",
  "key16": "61sQN4fkyCn5HuGZKmKYQWbep1QQxGCaRxhZJNAi8viKgrRi4wHLbX7RC6bh3beigKrmi6HxkFhJvJtM9wQfajUb",
  "key17": "f8faG44JMiFx9StvwnPoYtuUL7JdDsdkeqwjXQmSaZmh7AFnMQneCaUKvNjxF2YZ1WyhtMhDNx9eUQdeuW1Qh3z",
  "key18": "4sDVNHZxnNHNpTRcFpSo7XK2dpp6Y32GMbkHdeVXsnJGmr1s7JoLuwYrpxfvydrtXuBv7m8hD6Gtw7X9p313LJW1",
  "key19": "TKdwXB3pLRT8LoXCeEkhBnePfkcYa6A6YkGw6e5Kc62WP7vHvy1hd612uU6rvEiZ53gL6WashLguC1kh67CDxah",
  "key20": "4GHknfz3bYEk9ottusSU6ZKP15NFkRXtJTWPTkBLpJNUUQMjhYmjxNKiH2gvsGy4VwqeGREkbJhWU3mLr21zxjhs",
  "key21": "3u9SKw9kyjQ6kppK7ARBbQAzU8Lc9iY38N9YU4HP9QjjoQA4J9HiLK3xSi3Pg5x7iPFBNrssCUXXZE9tp8BqDfsJ",
  "key22": "3w16niYfH5QqTiphDXgQcrBnP87Xswg5DprzVuSMW9iTMHAmJJ5Nu1TFJFch9NFM9jmzCi8YMYTPMMYL3WnAJ49U",
  "key23": "5FzddDdfuYuu8MC5yai8fh6aaNn9o74nj4KcdfH8g1gPpz9oFkYBNrK3YE87i9dk8bZPwbyr8pzRBJGSj22J3MXg",
  "key24": "5X4Rrwtd7WFCz3EfvEZjKeiBdYxNHSjCeS8QtNMMHrbVAwTqddh7awnAfCpoJmwqMey9dAWR8X9hikfz1nUZJx41",
  "key25": "37vaKmKkzZzhV6rmewYVvzCdxzcjZpHZPtw8oCSBGxWPbjRFPhR62DJUZHDA5Uvad7B61F1m4t75keS2KJoDkuTb",
  "key26": "3Y31Xk6QU6kwrUeoZ3JJ3jhUYv9cBBynY2KEfTnCvWvsSYFLKJ9ymc4SvqWJHkGYmLWS5jDbE6acCN1gkryJmRwJ",
  "key27": "2pi1SW7SwNzz5ojUxF1TdysmcSzK5gHXGpctXEjmeZFvNJS3VR7NAq2TR9BCtPsDSUezzN7i8oQohNuqjbN6ruha",
  "key28": "23oa4n9VrRyZcyDvaNacTbJjsu33Ltozt5VUnNDDH8FLnoJ7SA4CM1kc2duWnxjX3MwsnFAL8phUCde6SmvHgSP8",
  "key29": "4ynHXnKe5QxBNJrLQcRbRbzBn4zEx9Q6hqogAvxfsUe7m3MmH4GZhZCs7WeTSkFxXv881vguN3p6wDTjgGTXma7p"
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
