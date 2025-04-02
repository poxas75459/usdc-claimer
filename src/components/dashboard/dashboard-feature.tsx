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
    "37BW7YGZtCXv3xgsVVUXo7WYd862s2P6JA6sWj5ckZuMduMV5TgMeMSoFuFE6U6vqZ7sWUmsd2Bs1d5YnACKBd99"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4p9aeUhcXXyrQJcYcrN89zECsW4GSPkfoYC79KDU4yZkbCFKnJhXjyEwJyFTKqfzV96NCurSiTPsvqCq5M3zyvSa",
  "key1": "4UP757MKr9Lfeb2oyqH2vw6LKzvBa8rbhUK6P7G41Zr1XcXwsDccxZhhfsAaKtdDtP4KZM276ZjYVitgHmq2rBdR",
  "key2": "3eeZwLfb2XjbmnMQTFeaTGSsBdhi1BWXo9jqWJk4w8u7g98N4McLxmaefGGXbSaYFu4kwnuY8Xb3nW6xbD2PCbX1",
  "key3": "36Nb9cbq1FLYp4CH5Qyq9snjzw1CRA1jx8jXc5Qt3hSrRCHEHfp7bdvy1RV5XVtZMQNguKPnZocCQrqCDDK2WNgM",
  "key4": "34uYtB6zpMFZ75s85rNWbJ2mAd692Bt3Xpy6Qysh3JceNvPJuM5tzpUcywLXkj2mdvC8HpvVFYDNrkLhRiSYvSvu",
  "key5": "2MQ91V7g44j3VgB1fi5ocodiwDjHwQnRcEQQ1eRoYHxy8sFTt6akGX5QXbqhXWbJCVkYm8bi3vxiivQGNLgZe5v8",
  "key6": "21ShMtkJw8SqgJgqdRu7EaoDMQzqqc3gjTdkCnT44Siai6JkqCMkzsVQV5QaLRvRUpgYzbjVzP9K4UinEYo9Dwxw",
  "key7": "uQE3FYRCzxEfyzBz8onrmaCoJRN1qAg3acChiA96XMmew62H9SgLPefgw3wgLu59rhACqHnrFnfyUSD4NGTSYLu",
  "key8": "XzgU747PgawihKHVR4adPEK3KVkVfR8PPokYHHZYFMG7Hx2VHV5tZbcT2hAQN8RW6G8tXaseKGbcduE5NagwyMv",
  "key9": "55u5gSxtwDmrVj4YiQbCUjdMqx1WCZcnEypXFwR1xVMrkUh8ETaVw3a5LJjxGFE8fHScYpBm6NYdc2Yco6mrxroW",
  "key10": "3JE2GfXTc8uf42AAdog9uCfjKAMrSP26Do9SP8rQhboFuom4Yj35xqjajbgDuR97ANBp5hkocg2hR5VjGnBv6EFM",
  "key11": "4GepWocMvD21HTmR7dhtkzmdjYAxQQTvQn6ug5V518cdm4kcJF1GjWNBkS6m2FRUvH7X925zwtMY299GUhEqBbtr",
  "key12": "5VhEGpbhGQn9d6hggo98PjVFTYFryF2VgpjefL5bKmmTnQiUghdxVJ1aWJHry92UVVhR76bMjk16Rx55z93bChAF",
  "key13": "4Mrd1dGXSf4b3wHqN6vmLJhAVSAoEkUKGDYKgH5cfzxGebf7K9bqM1zcsX6ncBqmaqtSrcFUJaDit66soimCbUuU",
  "key14": "8FxSiHxwtTa2SKBcQ6MJ9szyAk9yRczkitq1h58ZeSbiCN3utdD9Y9kfF7ke6kShQrNmdK7k5N31gMnjwDRSWUq",
  "key15": "5BDQ44woVxvG4a2b6j7AJM4pD33gLPjCdrjhqk8pX2Gny1eiQLVHasXrSceABSufZhgMPaRFWCc83zYooq7a4GUu",
  "key16": "2EbiihbwTtH5qKMVbekhgmghu2HiG8Kb38iMN421BGBCTJwvrophpKuyPT3nktvK5whGDarpry57MfYxeftzDp4q",
  "key17": "3yVKHbESGB73taB8z8YP5w7geqHYpVBe1iqUNE2f5jCaoz15RUwM5cZVhmi9TmvjHQCgYhobBf55eN3KLJeMeLmJ",
  "key18": "4f3afNqYy1ZoRAMjvzAUYTW7LsH3TiiXwqLJJGZehFfbhTB5nb7kuB3FZJMVWKPhmknuxz5HZwppz22mpkP9BCjq",
  "key19": "4Dc49CEXDBW8GbNWURrk6R5Dpvk1gbzVbWK899He9a591ZsMDZtCZvQHDiqwHJ9hkvAhsV4AmPBjuYCfdQBcJkLi",
  "key20": "3ykDuRg7ktM7hZofMYSgJPHJxBE1EML6KJB5t382KGqGJ2F8Sr4zFoHS15tqRrR5YzzryDgdoV3qwN1bvqMxQnk1",
  "key21": "4RFfY9hZqq2owdnTg52upNzvms4ciZP9ad61PAWpSmxrKQSB8MYi1LDY2W2wVAo71iMvm8P2mirBnxfkhxkjqaNC",
  "key22": "4HC79m7uH1aEYFUdsHUu3Bz2GsHqkwakeVSupKYGRTTdJMvxLLfZcdunb2iaqhy1WCFqytVxAZYVc7ntJoPZggk5",
  "key23": "2z7rZW1UjbA58MEKLCriw8pMWE3XcxaCciKkHs7eH6HFNUZZjJyjBwWUQtL4TLemJuevzS4GVCj25eWsQgXExrzz",
  "key24": "3Z2ASKr5NwphTWeBKqjtUm3LRAUbXnkF6npmL8uAWcpCfrYaKgxQqXTup3ghSF4FvqgFdF1nsLZHWa4uVSJi8DvY"
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
