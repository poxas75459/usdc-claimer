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
    "4B4j7H5UVm66H5TFWzH643YfJg2wWyF4Vsi8TcshkzQHdntvVo7Eu8ZSFC2ix53JAzZ6tykpeZ2PfWWMrQ2h2SLv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ML24apfMg1bAjXFqgJrxmYh3RQidW5gmPQPG2UA74D6MfoviHrVjzvaLo3zpCynYKUtkE37v9DJWdHyn5haUk6B",
  "key1": "4S5i6EcBhnkSqP6jKLZgurptwTaFREpLQ9S2CXLy3E9hfPzJ4g8D8zaTbthpsJvxA4NqPxfK1GmW8FbNs3sSsdR6",
  "key2": "4hMJxTAHQe3Z7rRV4zqafm2LqVvXfzC3tiufWSHKsXMkKdgnUN1zcZ4dtwqauAU5nRczCLhRrhEEGBA6vxaK2dFr",
  "key3": "2nqD8TPvkZFhyWxMox79Jec3rhnQGqVa2Yzuj4Pk8ccdLmatF62cX97PBr2xdzkC6Vtfkot53uWKgN8SLW1QNss7",
  "key4": "21uxHQjgiDLJvW6a2wzJFFgu15Xqvr7xcSD2r9GHdSrD4dJekNyfujHivScQ5ZiBZSekpManSZZz7HTT4YarVyvG",
  "key5": "3dzZezXCkmv25yd9sJjdQqsdi7JYCmZ4Y5e7xkVsfJDG77xmouvxeDUcW42HswwJZwQQ3XMdmfyfb2h1nQEdAY1S",
  "key6": "3u2ewp5nQAL56dPUeDhX4wWwphENL8fQQi9BM6buUuTZBkMJvJBfycj1b31Wx8dYuERZinx8LL7BuaqTYHnG8CjP",
  "key7": "4kVzfUS2cPR4V31jNx41eUWf3qvY6JuddJvAdo15yEX8J2cyiqENnFpbCQwR71UefdsWUnERoMVNtSWz7uxUoQka",
  "key8": "3NVTyNLFpXerCqePa25u7MB8ab4SqKipB2p52po8JDKyDpzWE9NpfqxqM4788ZUyaJtLpP59RJYfSDqHgfo5drvU",
  "key9": "2ivjz38brrAj6QTi9KMzwQGZnpw9eSf8iS1vokwUPXS8HxuJwYiWQk51nnd2QSekJmMCtVYS7sqy63gnWvxVBRir",
  "key10": "4BJvDm8r4UXhZ3N15jwmDg2hKqbW2CqDLQchkXAuHSYVUTwSXRR2AxzB29FovKZyrUQ3uz3AvpDYt1UyRVk4S5oi",
  "key11": "z4tVvwzQSSfwv3VJ4xKWWWKgewudm6DAT9cEprtJ98oo1LiPsF5CDt4M6YTSaXH5dvChGhCnq8WR4t83vfBFHu4",
  "key12": "3LAbbNcoBwRmVJiFa2eivEmYp5NP7mPTf2UED3ToKLtWLLssWe1Tv9xHMAbSYifueWDYM8P7mQZ3c3FHX3UU54co",
  "key13": "3wAj168PRMMHwSo5AFZzwTumqfv3BmfQ4aEg7Nf9KyXTi1a3W7yUMQut9eFL8TZxRGFhAV9Jo3ySUrUkqoR2Tkqe",
  "key14": "4wpXw4oF5AsJhWmdYdxLuv1kihkSMyA76zF2kR4LjbLXzQ3sUF5C4oTZrZuD38cBu6cdPrpmpdbfw4NzwNWkmVxR",
  "key15": "2BZfLLoTt2HRyabpq9xDrpFPtGxadk4cuWKwqnHStn4CoMtouLi5VLmembVdTw3YiTFJm8RD6qz1gGHUNR5MRFWB",
  "key16": "2UbC1jpRPhcEfxQYmLt43CoJ3tsqGFYAxWvp3wcGc3qYBQpDfQzTi6sQ3oXXiyhFqk51KLTKcnH4HyxLXMLBe2p7",
  "key17": "2nmx4v5Tw5Mr6DqDF6TEEB6ciRhfStVMkKgbxwqouHwCYPHiSQ7nSpvVsW9wDq1zVc5cq1KyYw29xifq1184cTkT",
  "key18": "5xTtHjTHxDXAohAiyF6HhgCk6SqbCK6WrZXp3jeKWJDJfDmfYYC52BcCZ7vHyJST3MJVwExB9CTRfU4R2zT8Jmbg",
  "key19": "59Wk9oYokijfJhSTvWbzAZkXkarudDuTWD2sCUvqSm6PtZuo9o3hH32WfxNJWWp2UHsxH3hjzCEc3nUTDBVe6PeW",
  "key20": "4ykpbQid6LwYcSqu8KJtStuvWUy9mWUstsyp7YTjEGzLUcyHxs5Hh85Lk4rkPDSZfZqW9MFbuif6kg5GeA9qwvS7",
  "key21": "2SNAzE8zNL3tuyuYCAk1k5AAJnVjUGqq1GunKGSSyPtPwVvneVJBErLLqenPMyFkEn3xXVgWK9Hu8E2wZzxZgVou",
  "key22": "5D32Ts8cnCd2tMdmyeXhW3Wwe37V75rXdkM1Mq3tkJznPPciCq2R5EhuYpSPwTn91K3F8WoPNE6Hgn4bxroY7KdY",
  "key23": "4qdsoG1hKxuuzU8vde7hfFqVetSPayp3V9s7pHJKJmpK5PTUWf8K7Q9bnFaCAwT2cdeySamhKvJPrmJQAohbYQHV",
  "key24": "2RUYggGrHrzomZWguy4oTrsbNyuZm8tgUDFmsgmtBe83DofETxtzU9mdVaDDxNZjmo2KACxHC2z4bstcgcgc2s3m",
  "key25": "4WPKxECmGMy94V8TLQQnNS6nkXrzR9tUqSLzsD7njpYtVmDnF7KFmUMqG9LgeBjdhH7jAL2W1v2VYXvQYzZRfFYb"
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
