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
    "36SU2JMD2De3YCKkeqaMSxRhA7xPwX2HnJvr7LzS8bcnWaC8YrY8hFRof9VSMH5TsRoF5jXwUbe2boTd79JB2pmP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KsHx86wsz5TBoEvb9TNLLzqSi2HpzdeoWp9u7hzcA8J6UWKiMPohyEufE2eYDivc9RUrmDMn7R8zW9vV5a56hxb",
  "key1": "2QuSewhVxYL2SLZr5tFh5PZLgXgoRv7nw8K1Rx18G2RtkTuseXv9C5injaWtEEa771qUrp8sWXovPcdSWijKHaGA",
  "key2": "4UVvFkMUhWMxEUENgYyJMbgb4QNUALroCg8t1KsniYyboZPgosJ5q5mmjwbxmBQg29FHVvXEq77nKKK79dAun26C",
  "key3": "4psYGfwkWvBNqkwLLUo5gRsMsNdNq6zwvcQRpKwMhkQzPuGYhekm2u1rMMUgo632Vo338rA7Xrmaaatze6Mj74Zv",
  "key4": "3zNoFVSDtRW1efSeRbdWy1zg9b56QtAuDE5BQ9eHu3rzY6wyxcvgnqUJiCTQ8W7wGnhq3q8PqeLwtYXQPptznQWa",
  "key5": "2aHchiak4mg1JM58twejyYoySW57a8gJEzX6ZELHSt5J2UUs7Pc2ayfRRuCJnwQHRdHu7SSDL1prch5UKpFoZG3V",
  "key6": "2E9AbPba854dGs2ZoecMA5agKgW1LcKnR76wFbbkApPuXWKQdU4ANxzo1MhRDxWN72sMYPMMBs1mGJdxcnY88XLk",
  "key7": "5v1SVjJMX5jA3dvk9o2sGpNhjB56zqRNYhwxx4ULDf4er2H5qoaPBLS7wCsMEiXUGXwnjd3qQfkX7BA6epGhQz6j",
  "key8": "5fN2fjudWzvWiVciWkssQ4LJfs5WA23qkh3Noic57LQxYqdD1ppQ1LuQRuCJcMgwoT6Pi69qvdxn8VxVwi3FR6c9",
  "key9": "5Z42EU5kvhduNgVMpz9vdRvbVMPPNx1ny3BrNx8UwycmGMuM8KArCc2BUW7eGywMZDbAda2VUDvR8wFMQmBaAffZ",
  "key10": "4jPXfyRJPMQBwE4ZZVQxBwpfsHM3PkFeBvtLs7Uxt9sKnehF8h7n1AdSaekrazqM8LaQHckWnmi5qJGjR644Hph9",
  "key11": "4jgmVergDdkkFgDi7BUzWRG5xqBC7anUx8no7GJoih9j6GZGbBbCStA1MvXoKosy2vuM5ygG7eV3WAHTGFYY8b6z",
  "key12": "5yWfuGmj3Uex4yaW6yE7FyPK8e8Z33pg2prhGtWfK4RJtxy6vWTGQB1w85KpwAzu8HNBYtQDsyNJNJGQGKyiacpN",
  "key13": "2MbmHXWga6Si2m2DMQLLQwTmsCUsXdYiVSGrwTjgN3ivb1reCU3cxU6UdL4gBkG7h5Yebo2M5JLVjwJGjLW6yPqb",
  "key14": "3GZr1QnigpyqbyZvJi3K5GtHHmVhBrVNGznkFkBhWGCCtZhRTQwK7rjgkbcL87pkmDnoHkJGwYHksLuaEwSAKXTT",
  "key15": "2PA5KiGYtAAmtSDd7uqFaABcPXkN9bd1cnrV57yj86iGFB4wNSejLeFLZPT44XqTAboSNd6G629hgYFEGCF5d2Ky",
  "key16": "47mbwC3ToxC4AT362GSXFxzwrsjbkQnb8sigUWAScgjgnB4MCZpYcnbTf6zsoJ5Kxj4C5HqKwUmAGsEPux55iCt8",
  "key17": "4Ybe4LT1DrQTb6Jm2t61KidRKeizXEPEfcFFDie6VG9E6nSxz6Ra3C6NWeBcdu5vUuQ4ptRD9gFr9skiB68rDcjQ",
  "key18": "24dMqqVVwfXEuZoiiR1Jptm4qh4j4gX84CtD3mbrtNoiwUeBBYCHEe1A2pTm3B7aeCDx6HNZSCaFaRLtxq6YotWA",
  "key19": "5kKNbF9CxKCFMdMGW9LJdSqTfBbLoLbqo7qnVJVbzose1VBtCHHFNLmKsSgv1kbFFhcPco1kqgggfR9Bhhsg5EQS",
  "key20": "5Xdo7ADSZoYQH7GNkHxEUsDUM9sqg4H4WFvjxNsWB3NbdXn7mQN94USCwofVqQSeHJ9jS3SQAcM46J3rmfprTDty",
  "key21": "4uDgxUKEyKMbusazepHDVW3KetDChSFiRokGMR32CSf2QdVprfN54jwJivkoQxQ39Uz2SguvLM8EcmoocN8WCmgZ",
  "key22": "4rxC7YX6Qcwhyc4jvwRTRHo9NDdLfTuVe8q8GiaC4wvUoLVW1mT7DAX9k5mibtNkM5UMoXBNn7eN97gdaPECteJ4",
  "key23": "3N3RkZrhggBEMRjtQB3THmrJ3g14QNqoeFBXxgS4tyKYkU7DCaMfyVDCAQ8SeVm5vts1WS7P5xP1KT1TbZ5u1Ccd",
  "key24": "457uqdbHz1qwBfmbJVkxwZgDbWHHJi5rQRy8QYnUCAdcUqCXZ7zhNQkfp3GBnTyajLqPx9bD54Ya1De1ryLZ2ptg",
  "key25": "52bonJPB276ma1z6vt4R8EWWTNnTVc9WtcZMgrWMrQESYDifaQC973vv5xAk94RJfMg3RtDmHvGo8dXwLJytrRoz",
  "key26": "hBRqa2e5zaGZenypGoiNt66zZnD9fnBzKLFn4Gk3PSdmHaYtSHk9h1MGRC4HdVThhoGCkHNJFsF9dGxXc1PgDb8",
  "key27": "4TdbUV2vGvvc5idZT6N4T2PxnCgNciAEQ6mFopaeYNZFi3to2ZJBWoi9jrCRUoHovVdSaVU9tJsYrDYY9uExmCYJ",
  "key28": "5shZGcSdxzC74dkDNdqsYyRLLkecYXEniX5GEjMQAoSdi1RERUVHtn6irGdYj6mM3KXXQfKZq4YmWxygamXMBrGN",
  "key29": "B59GxhPbWr3SpyMDSvyzXTuyaBwDXWocvtcaxrNRiAeSDTtsCrCk5JZTX5bn3V5TenAN4PJzpvriFEZY28x3pxK",
  "key30": "58eGSoTTZ2jDJGzVtGt1uyTLXyi5hvSsCYvdcXLfKxvGo99RMSFuxLNX8CZyWsVSKj3vki8v2nD1r76CHESPNQ1H",
  "key31": "3eKhEG8d45ys6wz383GWoo8NktwBkGJEbMvjqewXrUyMBnky7wmrgYLKGmTrftbXP7c4bY1AT7RRN24NDv6d2d1Y",
  "key32": "2thRkdp8LNE19LhG3fL6eycJF1edjjov8df1Qy5Uyw6j4PEjnyiMuBjhqV3UqbCjjUJGJE4DHjn2cL9bxq8oyG1L"
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
