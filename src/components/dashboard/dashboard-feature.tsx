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
    "5eWnGKJ5ffGjj7bMbLMDg2Q5XLcf7yVxoFepigNg1sBcLDuR6rdnEukZdiwXHEMkZu3pu44ZSWs7cCHWcaSznVBp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3juGkusP4fiuPgxwdetjMeEYyN4pYFzinViocS6kL9PmLsShywfBB1F9BUW3cSBXSGaxVUAc443ueQ1beznyZz47",
  "key1": "3F7GCRUFh5j6ipqtRLrJjRgcyBKGc74HYiyJAv7dHaJK5cLhJdAcJXwu3eVUis7raaihKSGidUaXPy9JKFTB2viH",
  "key2": "3irmczZBh2KyubWbNcuBbusfaHxGKL4B1h1oT4Q2pbM1n1toNJ65TH8yEMaLo8XMPyaYw1UFHmYQTJfqASvAn7pn",
  "key3": "2yNtLGA6956nHmZVFQHcxxGuZzks9Hjztk8QJujuSoDogXVux4WYzM3E9UTyJLmuoS79WUdnzDHJK9GYx6afKg8c",
  "key4": "2rTdyKM27eMb3oB7tQNk17UPKMV2zVyXwkSVsKkALZY5pNPeJHwGPwv5xcH7ZQkLdi6oGs8AqRLYKYhshNpGMVeU",
  "key5": "2Zqz5Bjk3yCKdnYb6N6fsGv9Ly2VqWRwMj9w8TtCi9r2CC2rwqPUBWpAsSiB8UrJk4wxtwsxugULiKp5qiKgsBbn",
  "key6": "3tyd1fj96QQwBEAeM73Q9kvfs4k8k99k6wzL7qCxKDZKNCfnL91HVgGKqHHjKJ8yor7JqZeJ7q2CwGCRkKt2DqGw",
  "key7": "iyZDwZFUERZQYCwucEGB3i1V5mazF6ArqKac34kPKQHzZ1xP35grXDD4urEUnZt2G9y6ZDoJAJNcvyYarHZXVpt",
  "key8": "ZDnYF5o3FVnJUMVntgW6W5vSTfjKP8FFhyeEueo7ccSPKztdnNoGuXAUWKxJZ8hBs2dQfNiq6djHvkmYAmMUds2",
  "key9": "31hXgpCZzieBznm7J6Y2LfQESEV3Vc8FkavjCMgPF5N66XAX89JdsatTY4yFo8cKaavhEymgd3T2bVm7RwMXUwdH",
  "key10": "2GJzGCHfoaUrfGkFWySXFfkAe3qKarWaRyq5urGqrnqedR6Ff6LyoBh4ng4YFaPHfcCA9zoVKczZ2cT3qpyoj71x",
  "key11": "42AvxJi3Nr1gd9H9yRdgfBXVRk5c38Q4P9ZbDDwFo14GzTSEDt9x3zwtobB9qRbgPy9pctMetsgdr1BfGYEyzoiF",
  "key12": "CWoeMmk9i9h76mffnfZKrm3PYTMgMtCZMhePtTM9P4xZELfTKhc9zKLj5x8SkaW44R2iPByrHVLhmLT3uLMSCkK",
  "key13": "4R6sZQsgRide3Co1vFWwSQh37sjE6nKkfDfiRC3EvDakmUzVMKR28TZ2Lx43Yvd8juhxWnoKEomkx3zUXXtRVpZp",
  "key14": "2dkMVn8GQr5RCdG3LMo7w5xshGPaXMu6mxgUeMUhCUAVzJEeVzs2K8QVbWfxKsBcsR2zLLEhdywmmpvsenL8q1yw",
  "key15": "3RV8CBJnVmth63WD9Kgg22r6FmhE2ZaW7dx47VtY2tEqpTsUyPPdfedbKQ2kdkAq3p1tiibhD5C6jKitB4i2r5fB",
  "key16": "4JTr9ex2mkrASjs2L37WwWaN7HCJjWjbByVrJhTN3D1W5LmGeS5dGKCMYiiZcbGDg28PomMJ9cAs8sCbT5fSpaWR",
  "key17": "5TWZRoQKwThGApBdZVgW9XqwUUZPj9VKmqdQSav8DGjjrYChoqucEpXkpvPjxTQ6Lg1jP66kAQMHm7WVtpeGXzbT",
  "key18": "3N5o9DNEk8qyMkSXYyQJj5geAEAiv8bhv1jCiumDCN63GNUaUrTsaPc3UPRAfio26sJfPRpAvnFmNmCLNi4pRjHn",
  "key19": "4ZtbtT9uiMJCPKyfzdgqy2xoSxJH2MDPuyEjW3tzatPaADTDW5aSZeo3fYE8hwfgy5xftXoLfxh1dqvcrq2stA68",
  "key20": "4w9KGArEqRuBh78ECQVoG1TNbaXUMbL3urWy1KpVokqBschpwqKH9Ax3qwMZyQ3MkWg7e4VCJLtSHB9hQBjbz9FR",
  "key21": "5WaMWVQ4N6yTZHWUGPHSZCBujJAHFJGUtSP7j6ZM3u4D8SxDgPQZvhEAx41KdToyFimoHU91UGcxeXi84wc8YiXe",
  "key22": "3aDn2ZKHmMfJPrTypsPgJSpff8CVQ6ddGC2r8DECrLDS8hEGdENJsifSJCJG9USxty3KHovHnmyN23pri3BHFjdq",
  "key23": "4eCQG3AFUUQjdbhDK35yrvVie1aCKmxUrLWAkAs6fjEzGBc533R2pXACunBna9KfRE7CEWrKrLdphFupmhyn7mWt",
  "key24": "mUqexS11QtzmyQRzTCRP13kyFgN5BJsacBf14rSRUKSe7N5Ztup4xcPocbbe9Ur3iB5zwZXENHyCTYC6SYMSzst"
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
