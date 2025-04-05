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
    "3rGbmve3HWExpV5Grnt4TpZNuVyqARQo1rxtR6ienqcMvr3BPLX7kKfJCPQJYAmvD13d1Rg81k37DgwP9bm8jHGB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4W9ycsmHiy5xwfwXrcNjkhRYHPdsFjkCAN1BJtrCQAJjq3GUcBsJRY9iKVPebWyVmmbysJF2Xdbgzecz4X3yLwmQ",
  "key1": "5AG6aoYuKY59kCGGQ6f7Eq3cDZcksRJnpudJpVVYuM1vzumcxf53EsW8LKXwsSdgnxqdGRqNKBTPvXV4TR4hgCM9",
  "key2": "3XrqRmxcSQAU4EyrW3CfpYUtg1rV5DM4hqz7YLJ5s56NhqDJbGin6vMazix14N6gUaFf5BFxbnjhyQKLmwrALzgr",
  "key3": "3wWPoSVC8U4rP1F4Xi2We2rWUNFW9idUaUweYTBv32BcX5tGinA8LVA5DSfUKttiAXYDCYCScunhq8qSr6QNSdQc",
  "key4": "3CNQJVeaXSGQVhWN4fynVaq8UcsioTUDEFX4VRuKyZdvHew5m5NJgoLAPfbXPYWjDfYxQttDvSGif5hZLfzkSaZf",
  "key5": "2dP9jfdUWEtzKkPiZF7ouK7vsyUJxD2yUhNnzHno3RUUaybJ4C348fcf5mQcRdJpNqZZmQCxUMsSjGu2kFWXgSds",
  "key6": "46FuVvMur65n55yNeo2PTYdrFKY8hdG67DqcTjX6rq8AsfBfKaeiRSjcphLsJsBDHv9TanA7pMwTmUyhLpj9MmEW",
  "key7": "6tWjZ5EdsZRZr21eY9sPQL7MMYc1tynTPpUyR3431BSmKmYZuJT12xKE2WzSzsvCkUiSCAwxVeJJVJ7QpxJpgWX",
  "key8": "NP3FrZ9rdUnGckZhjEfKkjyshK3FtQJqkXP8Aru7xa4ikWXVZSTgH5uggwR3A9geJSkBsU3H8pSgf9yaA2zcSKK",
  "key9": "4Rr14dfeRvmYaQxQd7uMjdiUiHbHPBTFuDCwD1euU2bs9PCwkifr5vvw5nBswU9PrTr9t4ghXdtbM6pUR5F2KRWn",
  "key10": "4wKYVwh2GdhzstbZ7uTzBUysDPJQEgqxbutenBB87ozhvZvvjrD6kB2HdtiBPidGKSkqpiJaQ3rCA7S9FgLd4jyJ",
  "key11": "64Bmfx6cs7Nt4YkGQbEV8YtftbENGVRLe2GVGLH6vZG22vdMowboJCRHTQcr71UpDf7s8NHFvvf6BZLH6BF5HUNN",
  "key12": "2YBy4Y37by5WLiqeFKgx9bwoHPWvXgNBbaS3BpDoRAf48YX7Esu6tKVrSjraswX8awfbwWS8Ntwy6HgkZnSqP2LN",
  "key13": "gmir2V1yFVWHv2TbJCxE6xcdQ48srMBWVQbz92aBieMpEMhbi2jDqRTdssJ6RS4Wmy9N3cb18YAmFk5BpoYAP7i",
  "key14": "5p4c8B6Hy4FNRqC4y2XuPfdjHwr6XwBFMEqzXa7o479NLpimNkX1q2JGDv3751N4n1fteaBE4si95AAbmSSBWkrq",
  "key15": "3F7ptbUthYcmyKF7BfSmWJYNHBKsWL69EB4atZmGdFsWvNv8mBNBiXKa2Yjixb8kqvLgYMSMxxuQWCKpTZ2meWvh",
  "key16": "3mEUmq5TRV9vaUZzshKnoqktiKJk6BY1QCFwgHwBEapWJakJvuf66CLeKgQMCKjxE4p8BuSh3zVCCtuubXY7RVny",
  "key17": "52NsLokQhg83xvA46sYcKUqTfPFjh6qv8jN4MyD9xruy9Psa1qq2t3MwkcjzW2H11CzbqsP7iuSqXDGwzoMh6K4s",
  "key18": "P5NQXMthhHbTUtVKycMWcaiwQJYQzw3KNsBBxsVYS9kJTBb7kyP1itSqiKVvW1skcAR3vag66U1HqrvDNtqvSAi",
  "key19": "xytcDTfFgmjjJBezbMSFPCg239EqWrPCqySP3k7ggxiFJh4jKSwP5SyW4BSJcVktNiiruDG3FkE17B8Uyb46HGd",
  "key20": "J7VDfbfvMX7nCBQ5WKzPZ7scYjsFzmwMV5GtXfa1ekkj8tyQm3VHWdTjyZYG3TwsE3oUEpVQAAvYaqsnUmsL1tP",
  "key21": "YZz1swv4AbrGs5teWkTSupYui3FPhXHamNzCAD6fPJg5ZzsbX3qdwfPRY1cxu85MkZvH2dcNbLQXgiEBRUhq1uk",
  "key22": "3qpj9MuKD23QYJw3bKVVT3vjYz8zaU5Rr8Pk5NDgS8YmZ8VK8YN9YEPDargaaVHZgMzrxtRpJYP84fdDz9uiTkW",
  "key23": "2FeQRwev5nXzAePyLa1BJfqRcHZJomJ7T9zqi8NjvPuLhwtZaSxkvpix8cGt1ySyvQamLGiN1EHryVZn5L2tQPpF",
  "key24": "37UbAR7BJ7miVAaucFtXzfdjNZwStD1juCxWrnEWpbWnSha463mbTgLz8AbaGXMJXyPXursXeLdXzvTjZcJY6CY5",
  "key25": "5AcmiKVXFBQdRWuShFmKoaCvEkmxsrBJkBoJeU6zzQKHxBc3ZLiqZTFXAY4WrgGqbRVGxdbDHY74pYhb33MUJdSE",
  "key26": "3UgXNtpYJgrhfCQr8UHFp7XxB5XzKi7nNhCYT2zN1At1C9km7ccDpHEJ3dcxQFvcB5NQ8WaPYsQheeHAa6R44Qor",
  "key27": "4rKovMtk827nhRTthvyp1pnLxUNEhzg9QqkTpc8Hdy727PZNAR1JUBJM1oo9kzuuAx8J2ADkBsH64koW3faujjwq",
  "key28": "2NmmTGyjxki4iZywEXKD6jD6rtduaz449FEKgDCx3mvtSU7xcBdvYXHtB1UQusDVqaXjoN95cHevhMGGEnhEdAWb",
  "key29": "3bKf5XcfaLi3hFnxnQi1CrqrXuYSgUVPgUc6hKzpN7Nw9xZy395YpUXUYxJ4PtoNtGJCyLm5EuuJSWAFQco2ScwD"
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
