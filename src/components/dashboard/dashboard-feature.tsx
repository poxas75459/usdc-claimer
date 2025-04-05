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
    "5kNwiYrqvztT6ANm1dyw63YXFoQuu9r29Be3eZjCeMQhgHj4rpYeZcJDBsYXDCva3E4fuVD9AztByHqZFCZUjNb6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mRqEjiVmMxZmmSTBzdbw3UeE6eXshV7cgW9C2SwNDNNxQRvqNpxLPHkc3H6hZQZyeW6FmdyhatYisVvhgSTDsw4",
  "key1": "38uqFeoucmnJYTHfGxb76yYcBYBoe4FdvngTebz5w4dgvB4oRzCD3cHDLhK55aWU2nNeMZAMYpog5zeNSg4hmcpg",
  "key2": "41bW1yGRfV2oBcxdxkwMFNA3NzoHfoZZXw99dAodqNdYK3rr7fgjN4tZm8HRNfK9mCWSdGRSgHekU3iymPvqf4qZ",
  "key3": "2t7SsDaWG8AqFkU1oigiGDYLi5Wz1xTShypjttSVCxeCgXWt9rQwa4haDvmszYqZ4oAsUd7gyjBP5m5q1FVLm87t",
  "key4": "66PETrN5WKxMtZp4e2AfTKcMDf95LfmUfQjswMVYP5kRL8xmDQ63Yk1JrukZsjdCwZDgSEtbB3UBdzqKTxkBz2mr",
  "key5": "2Vas4otgH5prRw8uTmtRNX1p9jRtHjDGwBXTjR7i6JGQWnePyhtQuP5apXDvErcuSEsNUkFJ4ELFRf1o4fxmw5JT",
  "key6": "2w2s721QFFrLg4gApFjpZQ5926szpgwhWZ3ri2D13CjKQ7fQGeq5u1ES4bqaCZ1TWrNNE3TYrSauUUDAzC1Bf78M",
  "key7": "w2P8cmoGryUqusVhLdCkiz2ncKbXrgtDWbZnKGWeFVHAiZkmAMFP6iS1PnqfEuXatRVeMdwnL3ZEdrpHGVqUwvE",
  "key8": "4cvz96xyvw9oaP2maR75y54iv3irLHfDLwvrHRKjoiZiYxHpvqSR6BST4jcmCdH9k51EjZ1W3HNAdS16hgfp75Nc",
  "key9": "5NC7gpWxkCdrNMytchCbWkWeDCNLMMxd3QKj96tyBAA6XRFPYattpJYs2ALjrKYRo6NT8sYD3wbno4aPU7dYToek",
  "key10": "R7EPxuStg5q24SWshtYgnceNAVLwEMyieGdzS3urKbgqdnp5PsXcGc6VbkL3PB9Y7gBGAETZhFfJDf8zgNsWyZR",
  "key11": "5Ux4jbWmy8drfxMy3mevqrJEDhoaVMs4E7V6CBG2gyWjYDg6DDRk6E9BiQ7wwQmNUZc6PfpWf5XhyRogAtFiWe3A",
  "key12": "RKnJCs5QebtsJ1DN8Rfr5oYFRE65GpBdBbH6KxPAMFrQPLksfXVzpX3LrAPsaaRF7JpSyx6HvZkMLVmdoXBAbcv",
  "key13": "5kkgLxwtX2WhKeVBN8Tpi7MFee62hrPPgk9FqrD21zMiQKxwoz1yoZ8rRBxrHmZ18tQ8d7MEVwEvKEZfW6JVqzhD",
  "key14": "2Jg1XagRQRwCVK5hqw5uNxwrx47s5oF5Mc8VEdSgZRfabQMG71g94MUvd1XFvEfdbFGSXQyHsCijfiDPu6MVPdBL",
  "key15": "2kYth5EJsa3eUJWkXqdszVYjg7ULe8vE9dP9XEfwGBG7HYfxXLqYkjVTu2ZjwUrDaYfeM9tUV92b773oJhuLkjkr",
  "key16": "5WiGsc1MeuwYKpApt5cXoAoSKMR8dWuewJfSScvuuPKv3gDJ4QcVLUHgpYTY2bdbVr7ncuXrJUxeNqEjvhcjCeBm",
  "key17": "3d6cPzfcXKzYKjLR2ziXu2jFgsvzJy9BWZp95gBHPcrTKU4jsfNh8M9UDYH8yJ2o4fk32qbD1ovLbRsK8H4F1nEK",
  "key18": "415chEfvcVMZpLnqkxeKxjfpgim5GVbWFwrFYRv6TE6AsmoWDPu9hDXj87exr5EtfTbwAsNxPu33tUddVvAondcA",
  "key19": "5VkRxy7HKqvZ5Eb8XzoMZ3892ascZSeujVSqCXbXX85wTGsdtHfTHdgih2PjJMZnG1tkySGGWREZa4jKcFwZwxpN",
  "key20": "5B7QJKHCiDvVhJpbyyB8mJduBDF65rDmJuo5PctXHbGzMAQ3qCjYBgt3WYCidej2i8AhnsCtuT9DnQZtpQ5NF1Yw",
  "key21": "2xGTrNmm4z1us5xKzoDgEnAhr7NwYjJpYAtnu5dDQDuxA944Xjs5Qahf1nFY3b8Sqt5oomXe2RJNX5GpsBDp8551",
  "key22": "5qeVf8Z9kkkYgRdqunKMAd5KnSm9RV8Yc3ojwy1e5gqPcRsWjzsfGgqp593mYgNo9UYVhtuKybWHmPWMgK6A8GKt",
  "key23": "3eTTJnhrsL3jhXJ3XFAmDgrLaE9QfnkDAwDCvjPrLpFHJWWt6vntoSP4WueD9t44xK3LQ8qZ479r77jBSM64PsoH",
  "key24": "2cCE3dHWnT8M4nXSx8x2BqDoNy294f6LFfA67vYtH4j7j7WuKJ6gC91kb3LYyE4JBt5YzBM72YExDhKAdQNqq3Un",
  "key25": "BZoz645erXwyoCDwRmCbegQvGoALBWpP7fx7XuosfxzJdrKpBkF2oncXppForAcCpdemouFBxoEeYSj9cnRMF2w",
  "key26": "3EjsrykKNzYM6sBJETucVQgg448KHz4K8nxrLUzzX1SMGn6NanXLFkXGE6qvFHdPLXZSwdr3YSyR1K7ridRdVbMo",
  "key27": "GALzuaorC8Yde9esBttrdqH9CL1aZFoTjHonHniMf3goqokk8KFX76JEVumgMMVmFSCffNnX9pnEVHCBUVexPYb",
  "key28": "5Mu7ZVzTBYCV1YHfk1tY5amKPWLQfpmiUcK1GkigMqVBZh7sKyqujbZsDFmtu3Mkn4NW3h8qqGHNAqDdoJFRJwPL",
  "key29": "4Y7SFQS7BbZnty8ZGc3x7f1DJZGJrEz6an4vdMKqDMTY6tCejx1aW5n2Cg7Z8LvJctc9Jc9vPRkzRPaFcSaDUbcN",
  "key30": "2kv9fL18BXz5XRewEJCUUxkWEqTyosa3nHJSjoRmY257ZG3yYN9P3TBdK3yzGixUHzZD7bmZAiKyfHYjAmpLFiy2",
  "key31": "35RDewuYREMDinAaD78WbXMUEENAD3t2VCyzTVrM3exi9Bse3iUpLA1EfUdu53ehsnwzdHEmF6GCg8XuKuXfNdnG",
  "key32": "678JU1k1CzW9f79fV94YcySgb97USKMiWLzF9atzYB7eTRazfqQ52Wjbb1paFNL8R3mcZ4UqRDWeR4D7hDFD8hE7",
  "key33": "5L6Qzg7uqzpqXkrZ4nMmQVY7ApGzBC7D5YxYoxxer841vTvgx7hMXRBWUTA1vj6WspDkzzVBp6eKySk83LPKorNn",
  "key34": "3U2dRhsNhJCFAQM3Pt3aB13ixpRJV9tdabcVPY9QwwMnNnjbqxk4sX3LAixrp9ocD1WnQFMw4JetAoWBoAKfihQD",
  "key35": "5R7J9r1DSxHLB44DWuK8zDp4YHJAVAttyY58tr4zke1gtQtWW6Edp6gXEyWuHSCbzgT3MkuhGgunjEdz9SZXNzns",
  "key36": "3cHpAPZk4dJCnSCM18hH93JPuw3rd83SH6g39ex7uTk22oaj6aip2CT8eL4UaJVPvWF3L65cxWGNr2bfBvMF1nca",
  "key37": "2rRY8vRhALjj67mbBuwkihdWjYLi5eHPpagBPVf6x7J7yN5pU77BP85JsSLGA1RVVfH9GvHxqyidLJFYLB4Ro39A",
  "key38": "5yEKS5qszU2r1j6MEpLBLVFgk5uN41aL6TYcbic9QJ2hDMeJbgbLJ1Ey5m8WMDJcxypHDsjDVmkRfNzAkuAsZsQM"
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
