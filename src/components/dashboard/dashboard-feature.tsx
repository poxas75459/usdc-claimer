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
    "2uC8GJffz6y3BEQgPwuNThPEDpEwJTmZdbx4fkL1z8b3ZovQ5Fq7r4vwtu7uChdNaifFgkqGcDAAsA99LQBbdsz7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vhupEMR7s54uYLzEHn8229SUxmLm34oFkuAxbomnta8Z5haKBcCJ5wVRMXJ57NRjwVwtfkZG9CeoYCWR1BWXdkh",
  "key1": "61a39AqyoD2Q7PAmniTupJupFkCQgqceBJNFBJo1NcxVaHW9RbfQJ6T55v45bbYb3b9adLxFGxEBgwVB8oGsBHeN",
  "key2": "97qLrXxwx2pdKED8FLzf73o8u3g6oXjttaqaeWXf5huvV4TNvnX8W3Kd9rVW3ArB6zqEDBTUn17Pk5VhofwL6HP",
  "key3": "ktZJeqk6zkckbYzTeeDheeC4hbGPmd3jqXTjJURhkMyQbYPLijbwUpKZPfn7wXfdapWeu1sz6ueFYMLmhBjXRSN",
  "key4": "5V7jVU8SoyauY5VYJqxZWEU7nhvZg8G4urXJKPsHEEQauyuFh8TbVJEkyEoRa73K5TQw3Fh2w6LAkX6HjJCoMQ1v",
  "key5": "3XcY8uf85XivTnHvQXKWpbGapfnLYaBcz3ujk6Ts7fvFmgCZtYNwATPoyfB2EMD7ZxV13w8ry9JHz5LEgoXueY6d",
  "key6": "57CCPZ8MNfLo58o3K8LLunhRHAnXnnDuszaUxLMc7L2kaLdumDr5QztCLijntt2Hyox77o2Lav1F9PstVa2Efhay",
  "key7": "U2u9SnQFCYfZQ6rPiCmsu8HwNwL4RcgJzMb53v7hfoEkJKaXYssRiKnw94eCGoDaCaJ5gH4H7bHSC3gtw6EbGVg",
  "key8": "2Y4NqKNkmf466ppYDt9h3CrU8t5FotQ3MDjDSZzchnXjRj6JdEXYs6NzmLftWSRASNAF4KDBzJq25kTJ7VadmLFY",
  "key9": "4VgMFHAzLuwrknMz4537BbdbeyoYiyUCexUyjRaWJqsmpRm3v2FfJzkmpbAgXDVSWzsBJV7qvm9JrE6ksreq1Mhp",
  "key10": "4uLa4vYsxYramksSi5tHKtKBi6Zd9uRYS6hSTbrc1Ko69hFj5dVDruX9RH2rnPYX27XTxPP9dfVuSpcjzY5v7cb3",
  "key11": "5vGpAXNjGnjhbXVQeubFFFwdC4JBSgQsCk1gGLKxccURjZGmBPo7Ro18mqwRwtnYugeDjM3FjY399wrGtY8e7ST6",
  "key12": "4bYxPATbheiHpwR8rsZcQTM1UDyAtABfNB5a49e2e5akMMqdpnXuYEsJJ3bj8bA76xoC9C5EKZ65FNzW73aQB4L5",
  "key13": "MYNp6kBNiCahgvhh6SREiR2eZnAAoY3zTVUw4vJSbCA68rzDBWd16tNg59b2ce7peUJT1unW8Y4YCVSguo7qDY2",
  "key14": "3gfZS76gQbjcm1zt3NupbxJVV9hQTbJnY18PrnTpLvadhphbNwebgYn2jiQtWgHHi3MnrBRvyQNMNqzC8zibsRhy",
  "key15": "3aJTkSbhhEaP3Y4isNCCSTtcewNmJprvdpGCuB74EhvBa8uowUURJtUvr4hmG14giTb56b7fQVvU4G7kux3CP6Q",
  "key16": "64VndcjgquBURGJPyR28srqrUkpUbz7ReFqq337RohPMW7v2Px16Hnoys7inLpNZzBTJj6bMKc3WdiBiPpR3XtVG",
  "key17": "535qxxw612YsEoAvmovyFHQ8tuUT5uhdm3N1knrFS9as3EatNh1jUnjF91EvMbGUfUdgc2aXnoiichB55FGdrJ4a",
  "key18": "5ZANqwMpMvweEhC2ugjiRB6YxLtLXVfbq57WLbzuPwhjZ4GHh5onF1pgVNCJWv74fMCvyWb69SHVcPLgzToRndiV",
  "key19": "3hFToV424BypfCuGGKLVSHojFvG7VfB9TcaYhwuVDuEymUrcQTSg5fNkNfq1BWQJ969VUCEdH7ohBnknS3UejiZH",
  "key20": "4wZKJ9jWwXTahLJNtrpM518xkXNheYsyjwz2JCXz1XdbuT5ycSLPnxncZHKRmCvSee1Kh8X1ST2vaBgVfecVN1Gr",
  "key21": "4G4KhERenMdH6ih1qzR2rKVHEPTMz3Hkea3p8tQRT1my79n72nu8TJJREb3CUoDh3DzJBd3Ht223q13VQPNsi5j6",
  "key22": "2fGavUiJ6HvVYuMzEXXWetMHfbufs3HLmnb5qHKVLRuvSft1xWB4Bq8svecA5MrmGvLF8AbYXT2ypcJLvqmMbB7A",
  "key23": "5UvovJWaZc58wFTpf9mZKyzznZPWKnUpPZpcuu6qnUWQgthbKrv89sVQCQcXPnS26Rn9C4aJofj5gyfBA5JfaQUv",
  "key24": "4bZrboETYhSNySskqMRhFCE8SbfjbRGachSm3nvTxUhQ6M5HwZJWoWxYpNPpoVELNab4W6W4iDmKeGRA6riV3Fk2",
  "key25": "2KFf8jre7ECXP844kcsPMgzqA4uo8gGEEQWWEcMLfMZ78zwbnsqrErJT5SdBitUM6m9B5XiUzssS8B1DQJPsJ5n",
  "key26": "2KwMaYFUMNtJthWfiiWfFZNBzGvuBCJMWR8QukLZCwBpaX5K9KSBb1LVEudcMe7tPMinEigWe2X7fQcgwZPeQGSh",
  "key27": "2SufrjRVxuk9UP6pM7RVWwBzG8iVRGWejfaHrXi4ASzGeiy2kEuU4zoFHjuvs4ufywstnCvH389N1SiiShFYGQ7N"
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
