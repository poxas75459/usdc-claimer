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
    "4zA4g1TkiYS8dsEzCZy9Ue3pP8FYHFauawosjBaKxAdeRxmdWpc3in2fZ3GsoMnhLQXrBvG2juKfHsDKJti4iqHV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eUQwGjseTq8uEfo2PAXyk8bQ1UmRwGcDvi61yg5VUHoCxHgw6pcsh57h2bzerTJqijm1kjepvUjC1pSRSBJo4LU",
  "key1": "4BNcjn6ZpNY3BENA3tu9c1nwtdzkg1YYKktMybTxg8VKvyYembfks6km4EB5SZ38XYXsLzXXBJiRTB6NhaNV6Fpf",
  "key2": "59G2mQiwnCRz4ctUJipQTxkt9jVPLWzcswMqvxhtpTscvR4qpma9g1mLqcz28X8cStkZ6q8gvSxoqvQgTMNykHgv",
  "key3": "4A75gf1uBQV74RXs3wPzCvTY7ioW2zSWPttrCXKG6LvDYuv8HVVFYqYzga75BuhghUw1ZvMsEkrAdBKF6aSFxsKN",
  "key4": "2peSWYL3HfUtBRpR78aifUXHhJcCnS6XYKq3bxeg5gYw6zG58f4cwdRNkZytsboBTyVoVW1CX76oZGHv7vXnDDQc",
  "key5": "2JBkTX26Dgmjq7Rgpbhiw889JbqxgcENoDB98RkkMkNw2wxJdn3v4moCRf93QA8z69JAsk2BzmqM3ySMhKL3Evft",
  "key6": "36a6hqdSfMZJbrKTgDbusFYshBZBuUbDpXcfzrXkfxPUNpSke8niAM7RdKhwjh4xyXXK6jMTKyBSrTaM8AcbKPoz",
  "key7": "hGfMfxtUWwSepKb584nMdcFQNDvskC8vk6nkGhhiCcFkJv3xdSNTFFW3t2Fux5bV4RBcUkEMjU8buHe65pxp6Ph",
  "key8": "mYaMAdFKC2cQRrTw7u2s1xwiqm4UbNehhASWXiZjEZUen87XmoJitnx9n9f7n7ChwKfvXyf3EyDq5Ku6GBpXt84",
  "key9": "3SkYLoCJr8mSMwivJiXp9RQ2nwKaoXg1KDaf5Ffvov4B7jJNmhM6h3ZkKiEbcjaGuWysG5kWKsgXuieckwCY3tt8",
  "key10": "VCd37Xm7tKYcoxCz9MYTmHpDEv33Pht88ypmJqJYxkD3ZTGZ9zxbgZNPWXwmFSvT9wodpEwUfKCZY6NsRhNssLp",
  "key11": "5iega3zw49mnspbRWyLXUJhvZDHkvBmxoJABAsc2fwJTxYxCTWn5RmPhcmLnHUCi1atFoysM6KFfqPadNM4DbNfT",
  "key12": "3dwSAWTgtiMTWVxdq8gkhvYtjbQjzuku9C4xhu1n7xbg2WLkzpLceUdzTK4oorsfBCdoYHwjbGUTLEtzktbz9jxm",
  "key13": "iJWhjA3tCPXFnRsJ4wgwbpQ2rDFwNKp6uQc7j2nktVSJvwdhHYd5WujbRsP5LnnD5BsmwkCadnp3TaXpTHrmHD5",
  "key14": "4TccprwhmJtzp2KCV3ftsFuf8aKZQjRx2NhjhEHrqXyTVNFSbT9gPHUGCcRA7JvYpmjAvTQ9tvTx6NpdxYjuS5s",
  "key15": "4UXLGsKcPe4R4fGS6ZqTcBuPK8h1iZqFMyaGQB4HjVnBjbpv97d1XeWWdY2xSX4DsfuU6tSPXqeJBdBvDAjmh5a7",
  "key16": "a5V9hmKi4rPQmzRveZ3fT99XG9paJ8pZeeQUSSTdJdSH8aS3wZhdgUUKSFWggNt8kayrZbE9vtgR3dGYkxB37V1",
  "key17": "5WN5mG2XPkZacckPWLFYxYrxyiJag7MtUnk1yeH4Ejd7hCcmTF7Bo82hRa4QikRKqJ7KyeQeL4P89hAv8gVH2nsi",
  "key18": "4oKnKB43yrH6JvH9aM3Bak8EZaKr9e8QM8Pd8GAxNh24AUbLndcTEjfgK5TioBWiHQ4DzRoQBeJ6YZ4Ypqk9q9PF",
  "key19": "32XfEmGcFZn8aCTsGK144gPcvWqsV411zuPAyTpT9uHoqF3krivmSeyPrekTAhmcjV4iXQBjQgCkoGxZt1CLSKef",
  "key20": "nvJoRuVsmoUiKbeM9FJVqEnKAzPewmR15waATQ7XLVD8Vc9WWnHPAksKUFPaVv8bneBRVDLgDbwoi9RPfnWtuCU",
  "key21": "1MX3N6sCWBqtzZijpqeskYNqVkmT2TFS9yxpoEPn5HR65vgrNGpWqFdbkyKvs5sh8rpz3PSdE2ASt2Y7Zjuwa3q",
  "key22": "7wpY1qyJvh4wKbY4ZNRaSDaqmcrP3NbLQgh6LMHgySkocAqZJaPzicf8R14aHfWTXszcSMB4fNBt2XyNTUFxvy8",
  "key23": "2fJd7d5bC2NWU14QeKSpdWp7yFE6obTQ8ygHC7T88rcqQMe47TopVkxJRozNhpnnx9jygy3eRSnPwaPAmU3zcggp",
  "key24": "5cquoQsHiLgeK7Nbq8wAR7zSmmt2C2CFVk7oqDPtc6KrWNYzmQPVN5xx9XoAmG6nWPrbW6NGhmtKazC3UpxveUS8",
  "key25": "2aHBCtpoL7sWWXTFhpjKPfwY8qUTmKSMe5tsbHQLBK2eZf2XKT7bK1YrR7ieSrYYfDf34q7dP2ZTY7er3UEEMfpi",
  "key26": "cvBpFJt2JXDfJis8tMQih8rjTafi4xthwF8sQ7UmxEia8ZJNzGZeAin1P9rV2BtJaZXREoSMctc4cZpRyYGpWrk",
  "key27": "4JZZZAHDF1XLXoW29bR1Qkgnwb5Fepv1TZR2pBdqiHuFdciLoU9A5jjBDfjogNWg1NHWdYgPoJD7KjnCqsHzt4no"
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
