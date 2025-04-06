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
    "2uavPoesegK22iBYLUpLthAdRk2Z863uJQ697M8NBSqW7qqBqVfE6FCctJUXdYY5SNQtxgVkKJv98bYe5EfE8fGQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AxmM9qx3jnnrz2oUWkq5yfCc8Zwqvgvy3TpieNjKueT937djV5ig18Rjt9GWvrwnbhjHzQ5PHyq7UqVHUvpg7t2",
  "key1": "65zczfS9Z66Ka5gY3zoCiRh3pzx2JKXUQfaeSH9J5u86Kuh2f9W2aLcXu6QnZzBcHCKaPrhgwY4aUp1ZazZZpdeg",
  "key2": "3tUqdxKtERJi9ezZs62u1BuV24D67Hj4pKBQwtmz4BtPEgCS1q9Tmerd5WnQHv1Q5rqhUtrtCeu5oEV9h9zMaBsy",
  "key3": "upcBZmymT5keSsxCKvCXfDb4wHJapbaYHwWdiujEwNNnacZEGv3AMZMEF1dYWe9nN3ALbBfwUyShuusjnrvAgKx",
  "key4": "3b5RFDggVHMWGKbwoHqJG1zktZdZ2fWqgiSisTCky5vGyqXktWxEgTV4YaJviecyFyd3sqLYZrdcmSPhAaCir8D9",
  "key5": "pLGDXfu9FJ31BQBTToCrAHpSNF2mPpWKmYff3HLqZttzL9TCaW7QfQXWyVG36uZcPXhUfWDE9ozrfJgRedYzENu",
  "key6": "3WnpUqzAxxCXnTqUHp97fq2FjyZHCr291DtQnEo8AXfSLRcoK6wTeFoYbojvj4N7KD2xbZXY3TgnXV6PdxpLiJ6C",
  "key7": "6ki96LequhfwmbF9LtTSyHoMWir2664fn6cj3bL9HgP61hQ7efuXmsyS1ck4Dg6H6Hq76wCKTLUG9M2tuXZJ8pv",
  "key8": "2S17Mb3HrUikxgpoPDnkd8HBzaHQy6FTAcmBbJowvX1Ejc82yjhadJVZMDknSBYCWv2PbEQ3a8CTgZ6EqUooveij",
  "key9": "2mvw6VeFC1eaq2y92Qv9qUqv6WTLmVo8vWRTJi1KFDsD4gCfWjxKyZHK5UYDbJdGbHpDxBi5fXyhQ5YMmjJ7owYS",
  "key10": "37iTCHiNi92Nm9ZJD9v8WJFNodyDy4H2UQftnVRm1T2YHxnzUraTr86JkCdogRZhss9uEdPptveA1ue5xFEsnz1",
  "key11": "5ovCW1tVy7gH273syHoi3bd36nHz3ZRxzk1B8KG9kjaznZqCQUnK3rgmZuXnW9iXHMDWq7EBCCCojEkVrYjLWiqJ",
  "key12": "29hPiyW49xqGGqxer7efRcyMVswbdan5RgLqyQz1rYmJh7sG4nmy58P4pLS1TmrVf6FM5y4LBnzvMMSYY7Jz5CYc",
  "key13": "32Mzj9CvSe65EkcWTFxNhvbtdacNbSLobHzN5wmMiJPLmEEgupvj1sgKyXvoeQY42BtNuyUMG4nq8d5Ax5w8a9zB",
  "key14": "9Z57URqG1eZCo9hNtHWRJoZx8vwpoeLeucq3vHoLRpKEZYewASDW7fQLRDMZNSZuguojnKKRRNL9dM3Nep96gc7",
  "key15": "2LzWeM7f8hTHhmWoxQTFqKs9SBFqStTbWsjGEfod82gGdy7p4C9wwCx6C2CiFRrs1NzPPqZidUe9niVeqy88ASr8",
  "key16": "66kPLAPLje1URQZZ9itqUpn1wqAVwzxvrbeMn41Kee1DMsn39Q6Y6qDxxxZPAYycJKrpJ59j2NrjDx6WWzgrhoKD",
  "key17": "G7MvY6etr9WJp1RVT6st6ZUUM9oMxNDWdc7qFaKoWAfHJ573RuH18tZdk5aRPmxBGyhVcC6pGU8kFjYqPbxe98j",
  "key18": "2v4iRQYork6aY5mxWuiLoM8cu9fgkix2Zbuejq1QFtMA26cGNNQDNheoE2z1VJaMnUdS8SHqNmoGZTsJQjp3uz6m",
  "key19": "nj8T9nr2sFoXfPHe5yNZw269RvNMDs41XU5ssWoxouPWW7QFjTe9cDEbjAxo2Ega3Bym46H6L9SbAme985rBLj8",
  "key20": "5JAuZKQFxQHDH1edEcm8VHYVBQyV2BJ3FnzWTH5Ly882s5vSz5gMkBPwsNH7FkLq9BEUimU1o3zyxEW2QBYUrVFQ",
  "key21": "2xgYXbCNf5s3kbhSC88NTrF1y6Uy48WC7byz5XdSEyiQ69cCnjBp91hZpd7uxSUNvhZCSFKwCDzMW9utAH3peS46",
  "key22": "5uzK1EPmUqrH186SUbQELLCXT81xbJTuR5sFXhNy8mBAAbABYNwtDXvZEVz7hQ7KSNwMTGiPJHisBaUReqXWv6H6",
  "key23": "3ZxoF1YQHWrwNKxKpDRfnJfWifXwmpP3n6DGPtvaidH5j93f9X4F5TtZdqwK33TL1FfXhQ4pv58s4UwD7wqAvgte",
  "key24": "2PQ661SuFB3gKs87nYPyoxafksQkghZLVLQDVdAW4wJa7N1oqcjnV1wcHkG9CBnJprbmyAwMKkLiimLSPz4pgEPQ",
  "key25": "3tkAApu4Fpb744bBam6NCrJ6hSk5q3SLdnSpaM89JD6fGLJnAvActuUDUjcwMYAXzRvPmCR9tL2v34HdK6X8NCnQ",
  "key26": "BryZrRe7vXyBTHwFaiZmALyKbH9xCjFph3BBwnWC1bhNLBtjfs7911XJFWx1kLficrkqkToK34VB8sVhM8mNZBA",
  "key27": "Ak3hoWK8ZXEDSGmMKJYr3ePiot16aPCW3uDgytUZGHB1nXndXkg8Hi2SzEJ4pmsm8hJomBHe45fB47F6rBEePLv",
  "key28": "85WjDGBmUiYQAZJ8vEDksKgqGbxrpDpQ7sZbjMVAv8S8RmhECcHPm3MuYBg4tqyjbBKmKg1Lw4ouHvK3V4Vjr2R",
  "key29": "vUnyRseqha59gSm7NSqJFmhFYHvdaMU6Nw9TUo1DNkWxyWpNJeW88E1kZuFQpGCSBzH6TYaXsTXs14EyeQP7aZA",
  "key30": "5KDX1DswqPL2cvs1iiPz4ShPXhuZs6m3yhPwDoJBrPf8KLXRKbkbyMgksxn3noY58V9iZdWsDBzLFvaRgW8XZg84",
  "key31": "5uz9A4upqSbxKp2hL39evqAo7xXKrywxYQNLtXQTprvQgb9g9mqGK1xpKzygL5v42dziS95Dj4c5DUeDFQmhkrb4"
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
