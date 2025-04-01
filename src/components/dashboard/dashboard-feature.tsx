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
    "hP495b18EDTK38Zn2MXGLwFbd7aqpTFD2DB2ajzQq1rMfqTnX3qVkDZ7KChHGLuEi4gr9dKfK5kKToavU5TUPtP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dpTgoyjjggfKtHRtpE5Lq7ZQJPbg5z5yqUWCASA3pths83iwVZWAKZXrKZrWJPzq21YfNytL5VKdF16cpQxZw8e",
  "key1": "3HWp5ufQafZTZsy3cbc3VAG5jx6odS9JyiVUa93GZfG1DjHbZJtP36ebwG3VTBM6kR2rLKQBe4rpKySag622rZEq",
  "key2": "5X9LVbNwLFFhEnREjLQ4WzmkVxgoxB7uEAKq4TqHD4Mhqf672Bacp2GB6bEnowEbgFWvbXhkCh6y1SiyC6Tsc7ig",
  "key3": "36aEnopyydNzkyEAwVpJ7Adz2mvGsdvEJybXSGcFED12h4Q71xmA4R8BXoy3M3HU5WtM2MYpgUq9FZwj21mdzyvE",
  "key4": "2Yk1Gzn5qexWCmc4cpL7CL9gKqV33FrWdXV15PZP2BVfJXnSEjGBVo9EMraYWehXNSSFnn2cN1zbtjw6LZ838erp",
  "key5": "5FEesV7XXQj3v2XJrbhhtmYBRQUaL661eM1RjmZaqZYVSQEWvVpMcQyHbLnMVLBvoDtBYbat8tUUhtiQ8Hs7xqoc",
  "key6": "3ZZ8NetfmxNjkUW1d8Bff2WaDFb2FoVrDfeRdEGmoZTk8sFFG4xwo2avMPQxZ9TZmHk4Cm8T8y1mAgvegCQAQmWY",
  "key7": "3Ucvv3zykoYvFUk4Dh5xhp7PEmaXxcE5BFuf3wZ3KUpw9Rp3pgKHipnX8nFCwqyK88WeTLymTPSJKV2WvXvHiE6A",
  "key8": "SYAtx2ETc5yGS9QDYeqhRNTJjLqWkw2JzQ6KAuHZ2pE49CmP8JdLbwcC4PS4JDT5msr6ydA7s3qUR8Fre6FQoNa",
  "key9": "PGUuF2dPTywQB6QvdckiaycZoYjYzZ6oYf92avWsWj7jd18q6oHD4Ff9VQ1Kw9q6PtTnmqSBpBM8CmxCajxRvrr",
  "key10": "2brJ7Bf9SoDaGzB7vdLm9mQsjEEfUXxcXgNinQv8yHkBy3g6bLWbE9p97xg2sbb7PY1cJ7sRXUcDKRCPR2vTRTwc",
  "key11": "triGtXPHfXtRGbsyAHSuyGyauFTzhnLX4PEcvJeDMZvBf2pND9vHbBFwcBkioqjieGXrJmZxPqztt8DmEt1AcJh",
  "key12": "2ZwQCxwRu3wr25xwWjEddw9u2Mv3FP8YrowQiQKouX2EBapWxAe2J89gnV2iEiV6fFtRkRYgnFtqdaL6R1bFT7Hk",
  "key13": "4mUmbmV9YiEQ3MPu3jVTQkPaUiizZ29fx7PNoRG2BxEAzQbGMhsXENtmiEnksTRMo7fufAp2gLSmHBC97gu5jk1g",
  "key14": "2KLtexhXbq2asubRuJS1J3jLmrRfo3yibPGSFosLQ4gN6Be5XH4TgD4miaTjnWhVUwyh4swcqFH8sAHZiXrRViSK",
  "key15": "5qbXw8Zjz19YNbYbTFjTU3WbH1coY6FnS1WtedcweQfvsDvReu6UJYUuzJusEUhSHZj2sVzvHaeEpZQkPWyayrZS",
  "key16": "3pGu7TvzwKf9fNZFwJmg2kFr59nXWZAa9zjub3ybMw1sp1PJD2JjUfQJb2FQxL1wjQrxSu6LbWxoGiqPuUXhm5Dh",
  "key17": "5YsLHQgrSTvPHnzp9dMuqUfWSFPo9S86cGPBUThmrW1pGbe5Dk7eocXDBZhjSmLZfkqFUxMP5dRcuBT95CjLtKg",
  "key18": "4EnZ7ZuQTjXZ6QtoyNH7yX5uH9TNSuQu31t786X8GfmybeREFAqKJrqCGJBC5rHBfz3AM5SjevtXujBcDmLbzH1V",
  "key19": "To34ikxwH1HLKMHm6N67nGAG5DG9PCVBkc8MdZLVFt91JgzCCAYGtxqcuEiQTXTfDpyAbm6HJfKkZjLPsqjFsWZ",
  "key20": "21mCMpwGerxdQfFLr8K5WnTJjvzGsNw5kXVB5gG5xEMXZgCxK6wGNfv1yji4b1gfeKKqMNkLBcudX96F3vN46a7f",
  "key21": "zPzKfEg3uWGo2Xmx2XuCVPPBSjeuq6P8nw5Ei95JMcf8VWCdMc5dLRHZsB2YQw53EaiAye3Mc9YGoupK6LDg7V2",
  "key22": "6LAbih7xs82xyjuW8P5xSRpRvmzAWpHwVM8kX245JRi8TxsYzz4cBJTcdoT17Cn4i54ggMddVShaXdi4fwE7qFA",
  "key23": "wQE9FW4MnewxD9dHHrfFE4HvYUBYqwwBY4KbCehf3NGq4TrHGbHm4d5C5TkcFCcGrM1jRxuQ8ehNm7oLiFqH5Dq",
  "key24": "2mEV2JkHZ3cACxta63PPHFZ2epaoX71ftdV4rjb3gYyA3PUmjwapfVTBY75xRWhpgQuY1tusgpW1s6Zcgf2h1dS3",
  "key25": "3Li6KWxBBrcpdRsSVStp2KAWPkg1WsnhcdRa2Mx7GTnzD5vszXMi6MmnGQ21dkff1Cmg7Xe5dYDpNotLrNEKdqHJ",
  "key26": "5zwXTHew4QUvHdyb75PZBqJkJn41JKZtagHcqGAjUtxLwNPvKyhcomJoGcpvENAQKgSoBHZyffGT9X9yih8748jR"
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
