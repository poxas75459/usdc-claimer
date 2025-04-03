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
    "9qs66Ts4P22b1Lx3X6jRaAVfW5PujTcbbnUB93rDQrgUsMgMN9UFmPSMf4WerbbGKY4pGivkAXZmGD1eEjAT4vA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6ox84Eaqb1hkbqSK3WEapGz494rDW4kcARQN5rv8eY8RhE7Gzzwemr8yAqJ6xJpiNagnL2SGvFVtSqj4DQkDCk1",
  "key1": "2vtwaXKTGyGmFyFN3pJBaXUjZCRcxUh3CYLacBzWHu1cSwAWo4jbpKzK71Kweo9KCiSjwmHCeshnnw9thXyXQAvD",
  "key2": "32LTahDFxEDjfNFnfGxRivvdb86xzKs2gRSdJCMFXpdTLwjKKXXp7YuAQV1w7wcFWtEe7ZEz5jfFFq5dNjiLBy9h",
  "key3": "5t1sEZrbKC9f3ekUztuUYz8TpKquNRpJThfDsr5fjGdmvBn7DhA8NPxkJ4qaQbyqyuNobozXHrpQXSitAPjcsFEB",
  "key4": "FRHic2xhp2agqTJ9RKGz4yvn7cxaGT1fLp8nFMEYn136T38kUS59Bsaj76R7utGYiFsTtq8cg5EAWwsmQ8GoUo3",
  "key5": "21Svhcs288ehh8rE9rHYxFxFg54GF3ghEumbKzczE22My1wVm6Ypj4siWqk8DySDiMAP5j38RkL86kQwixtDmbyb",
  "key6": "kJ96zVLz1qwTPotFmBGVMxajKeb2GGBhF5mLMWu2724HVGNY7LG9YhMCBdYvqKu715rC67iWsauiJZWYaRG7ezm",
  "key7": "5bjmWFn9Qz1j4Vdi3JPSGxosgr2fkNxDMDFcFZvgodiYxpetvJwdTurF87rk4pTvhnvYTQ5ia2Ly7Q7hYwsLNuXQ",
  "key8": "3PiBesm9NWg9rhNbNFwviUh8Ri2UpQq2v98Af247DGwyUxt6xWZXKzk2J6y1UtU29Ej2BjooqiLenHdb9LxZdKv4",
  "key9": "3Kei9b1bLJXygjWCaCK8htPXWPafDFCynfQwgQR5c6wZEgcoWqJD1xCC2Dz2bg9RKWA9gYoasgYNX1PgJp9UPfQR",
  "key10": "2s2kAJhWuc5ePM14eji4ix6sVTr5ypN5ZUhvRh24DxjHcnWHmwWaFVXeQwamnKgNgvZTcsq9W5rS2KToF6PcMDYq",
  "key11": "5QghT3bGowrN82S9uNEoScYFSJP6pJT8H1evadRZADpJcNAKhS21hLDTzaJmoe9aox7TY3VmJXqg3fPNfDezXqRV",
  "key12": "4AyrwF8xhxeZjtmtfVoA7rv5U7tsLkU4WnnQtWNxAXbiD5yQqnv6pKBd85S1pXvt7sBpXuMby8m13UrnVEbQbNqT",
  "key13": "5U6ugN4HX5mfeYZg5S1W76VBVQQPBJxdh5i71ot2DEjqzb7wTPdUJsFpptzXwJjwDJadHwzHaD44Ax3t1vqdpXmA",
  "key14": "5EqXqp2geGbYGzvEGYkWW6Fnz2aVhpqAf9rjYXmXVGWrbc14CkteExPEk6wSQUowwZdRL6U8Y26gHrK216dVSbk3",
  "key15": "4bvRPHbJzjgxq2HiKEPt8Lzr3pG7WMqyg5bKP6UGfrXxeRmVbPpCpVa7C1NrRL5ENT8PxAUHAHbWt6zZYTHPqQkm",
  "key16": "eTkECEpx4TaYCqxyiwzJfKFKgkR8Kc85fYhZt9Cq2qWfPmeGScAf7RrMceiqHENdqz5q6zhjBUbQxvJDGCcAF9X",
  "key17": "yhbMjmfqLm9BB1tFU6L8TtXTXdCse3GZRLkGb8TdERixNgQ8pmGN923RRGBxZE4JMysguU4mu6MNraaw7SQwnfS",
  "key18": "2nwPHLLsNmyAtTSY1F8WR6TEcXGYiCjaXJY3eUtCgBFpjc8w3SxCBEc64731bXe2tNErDXQFFMDPoJqftrkMS3yG",
  "key19": "qHCwG88JEGPSrXqk14YrHiht8mS1XKAHKfZpDLyfP9b9JwbeTB5nyG8ewxyYPgL7VYQZLGdTNudqeMzxg1wWRi1",
  "key20": "2hjb7QyySwNeUMigbWKN1iyw4MVuapqyuEkiqqZdjtdHWHzhpzv1EnETRyQydYWyWKqq3Yd2XfZYLrFrUgDdoc3m",
  "key21": "YUMXZBqnG94j5fzfLUP8PkNvtYxe2ZZzCJSJrXEKcfa62z1eUtgacu8qMtLTxR2CeeJCnUf4VFMorDbRTkgKxph",
  "key22": "3qHxQJiSx955JpGmzBkABjQUQA9Z6ee4Ro1PFbPZTWc6eDqSUfSLHPk1azRMpxaBgDKpyfb5ZkbEyHxzGc2W8W3S",
  "key23": "4Sm5X52dwbRUvQG5TadATimdTqsa48ZNB7tRqLBfY5nG5PvwQeSGraDe3y6BvQfwNi1LZ92u4sR8T55vw9VzygqP",
  "key24": "27E46MyNpAeDnidmKhMucCzSNQvETpX1VH6JAr8STGEKJHsTM6ACDW8MehMp1zMJFQSoYVXjsvCA57MfCF2qZR8H",
  "key25": "4v8K2XrbKd3TLSH7gYMZeGLfsDtaaSR7nkWPqPCd5Jso7kbyLthfBdXvJ6yma4bZzm9DHV9z8wnLRAQLkkm9yv2o",
  "key26": "kqNRTmj5d22tdNScmFYZVm9sV8gmB65XAvTTaQG6zDT1xzbGwxHHVwtYSPg3JtJjQ4kVrWeCTGS1Xa1u56LSfNt",
  "key27": "3H3yymwo8CqjoH28bnuwmeGGQGjYLtvRihEcAf1EB9KPFSEQyZTFbERampVN3dPCUaJoavLmvJ8Y2WvAyw7PJVSU",
  "key28": "5fhxrbNMS7usMGsswUZb6UQMoRofzWjixwbMd4XEGuJKpaWCpBVP7Mj1zGjq4A7zrJfvuFx4aCKxh3vhXXk2ptqd",
  "key29": "2up3pBRhhnM7k4fEDviUZ2Aui3o8NYyVQiVpcgGwh2PRnnEHeWUM62J4934jHqrvKjRFCWk88rAkFn4uZJfLJFrL",
  "key30": "32UShPbWEHmenQTu2rjV5H41csGdVmWe6Y87V7jKwb52evTsiJ7yyvHszZJnBbcYijbitF3QngMt4DKVf8uhnEZ7",
  "key31": "4bGxG88KzZNuzRXTBpmtmo7d6Jd4hZeJSds9QtU3x3BGjdKMDa2HxWQiepj6CLV4chNGZz1u6wLFW49z4FNqbby2",
  "key32": "NuQ2LEGdBaLDEKQ326WpwaMavYCPfR197DccmR1ke2PSX4n9U54rp6McLjVW8s3p1Liwzf9Rspcd4QXAE4SQRNH",
  "key33": "3QaBdoBqLWMcwXgU149CEADEX5rAoyYfAhzUcY4dWMW7fj7yVRcvmuWQPzcaf7AURKgtrjPCsymQYfumy5GyQFAP",
  "key34": "6EgkHJgfeoYbbZRCGQaMZ98K9enzMVQC7pvjtM9jkkmS5ofs57fhCqvoceLtj7o4CSpvjKPY2jGq2niMoihdM7H",
  "key35": "6EqjafJt9UXrpBz3ANBLtCGBzDBEEXfPEPnrwYmQdWedjtJYjR9Twrfgw4jsYMPQinSczxAo91S3waEodcRrsxN",
  "key36": "275ac54deutqs3boqiw2BgryksnrLSj1odgpZfamDdJ26wbK2W7TxESvJ7qEmLZRroDKje9PFkUPxKUZVZciJfAF",
  "key37": "5s9sPJdjgDzXjQrqq1DZRgaBnJr9JnPJJK2zdegukNzp9wUZ2E9UW4np3fHNTMDa1t3LD6LzsTBowrfbBbKEv8Pv",
  "key38": "4szn1UU4W1hW8VAGdkV9XQ3DqWchz2jC25g1mz7U9bM9X9RCWKQ7KjtimmGhyQvfmPyjupAKcWJdURNbz8h1BfGn",
  "key39": "2ynDhvEhT8nFpvhSMpPwD7RfWHkP7PMujZUh2FJuC97me6hU5UqCwEc3JvgpcXi9Hj3yUQyVQrmJ6ea6WNNgu4EP",
  "key40": "2Wogc1BgoaR2Kx7TLy4gbjxiD737v42cbRR7EvsErMBfGznSKhLZRQKyNXVkpa7wN1E6sjHkwSxuzYwUmtpsJpn1",
  "key41": "24XLtMe23tJq1dsY9GE57H3ZvZ2AZweR2j3tvCRdbsiAYnEfaDK8m4p5vYQcZtX8as6JeoX6M4MhHH9Z3eGoyQ8N",
  "key42": "2V9VhwsQfA9FdgAUhQ4ZEEVttzHcrHX5Gwb7ndMrZDRYFErxF9J4uTPHvHL3CsJdrJWZFsb35QWjFKtQmUo7qSi9"
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
