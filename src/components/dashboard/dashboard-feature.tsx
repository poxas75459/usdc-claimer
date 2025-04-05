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
    "dUgUUspsCttq5PiYhGksVuNER6ATszgREAMzEWwJPBxEEGAKwprq1a2RD1aEohZ5UmcEyB6KnYRYN9d24iTB2hy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "84UB4sbZ52xiFRkh1HMwDjbmvqc7vdB37fomFhg8CYLixL87S4B8i9Pb5hsLDyaze8Y5cuUSy1yiMoSteF1MTNg",
  "key1": "3gTauN5rRvos9Fdj1HuwA274UpokYrECM948pLkaxTXyH34zzDGJcqWes1NA4V9qWQvScFQz2aKgUKy4A9ktW4YF",
  "key2": "47cWYq5MjQtvGMPZQsYjMJmyNnWus4oc3tBz6Vj2vh21p2DzRJbQSMQRpdjxMS75wqDR4eoPui9TZCgXhe1V5XPN",
  "key3": "5MiZTBwNKV1xYhbfEDjZ8Xah1LdKZewiH1PY4bfa1WwiGNPwJKhEYZmK9biZD1iFzoUH6QLHSbdrdLxq7NoHiuhZ",
  "key4": "56QWT4VnKdE5wpDbPRRmyUzVMCug72r378qnANKSj54R3okyWMFW3tNyS59oXLrDWVNcYfD9uK1LXyjx2hupdoEv",
  "key5": "5dfhNfA3gawGdZtdYn5DgR1C5VVmw1LQjskmtQmUBbYs7sKx9cnuS4BDzLBCGLD51zyVB51qbzpjtVNxLEJXa2fs",
  "key6": "22dHvuW7CpcAvpb447DdDYHuXSXhpzz4BRsy2cgUsQorzczBrZx98RUsVxK7SJoczxiq7LTBUA1bfAHtkhdiqR1a",
  "key7": "46ge1xRgKhhqNtMxxruVdUWYKvfBfutbFrPhUwVyxyUD6wDcCmWoDDtbfBh2wW2fKXnSGAAZehJhKc1LVZfL2i6u",
  "key8": "66TFoXjzdW2osLH4ZegSMEQUDmdYYURNBWJunwABsxxopPYmiSuC15o2hEx9xRnJmmKTRVYzatsBQU85Aa8mkS3S",
  "key9": "pkzv1jPCzEJbyRYboDx7a5Nbdmb55NRvS1FsrC3ozsUdPscFjH86pF8nMfYw1zBhA2QCdrF5Gq8YwxXrWzLEy5j",
  "key10": "4Wvvxb8bmk8yskQwgHNUGqAQYzt25b86h5XUBuYFuAZKvn9g5ifDttfhfGKHE5GQvviyNhZLX7B9bRb259NJkVgP",
  "key11": "31PByqKXWq197VXuKRa65Tf8PhA9Wv4cVnXWVnBTh1BX2oKRwv9p8HeR9LNGRyhZuGxK5A2nuHsjUsqt7ERcbwM8",
  "key12": "viYjTbxEV3wEHAEJDcLYAEbAA75KNiVH86UsTCoW41ny3aQdZsDW5tvbkKqMeReZBL1QFNwGn9SudFxmChnEia4",
  "key13": "cGgS9Dy4aG3BjiteV8vqEFiJMUs3QGsFLhSBSRcUnHKGGitBr2owhXyS67ReQe5JMK36jM7Q9xEVnzfsKz3ehTF",
  "key14": "44qneZ9WaL77h5yy91LjnZnJ6H1puQ24knz1Ags2AkLA84r1fBYWAPNot9fbf7NBreBbBfCX8GpX1DGbECEAYgxc",
  "key15": "5rRZaYMU3CCBYyChjxGs1CXsehs3Q8dsXGvorFUxP1oivGhNtA4UnsHyEYPxBp2eDEoCtpjBDpNRUbvT4anr4SCP",
  "key16": "4BbkcZoQMMqzVFExZJZQRexpdhd297mSsZvQk8PY3JFKRFUxTeDeutqExs21pcwXHM5nNGewyusiF3fTG8o6drQh",
  "key17": "346i1QvEXkNBMNvoxk2CMjj8GiUx22jygh3bgjydPd1gv4aVvJvZ9PcEddf2ms18Z1mUJWwEzeNKiuz9vZ645bUW",
  "key18": "2bB88cqdufzmmbmDFP2Pdy18jtAckbqerh9fEzKaXFFtZ6NLXKrdUzVXMhuyGrFgiDZsLrGmTht9TBbnHpLHBB7a",
  "key19": "2mfvTG1Wnn97qQHtddWKZbqStAmi4bLkHj5WA1fNvVjcbgsb2KwEYvvoFeLaUsTfvcMChj5PfJUdMTsvCdJX2Pfy",
  "key20": "HZBE8RxmJm6ykeogjo3hKx3wLZ8mYCK3HhURegRSmKGLKvYuepFJVTaBvxkoyXpTzDv7sCx78vKNH6DVUSZzJwr",
  "key21": "3suteypGFJQjws3tePjDffSG6nSP8Ac1LhQksg28G2sdaH8vH2FriGrg9nrWdBvNYifahhZJfjHHhFjDqQ71NTaL",
  "key22": "5sTPZ3ERmeAiEebXyqindhusn5dMxH4Zuud6oTgxj7JMabif37GABCNTh3haDEvREy14BZThNroxk1hTVEjYoQbP",
  "key23": "2JRBKXCL4QUze7739jnDJVCbj3vSo9DAXP5EY6Gbt4usLG3k3zDrbF56mSn5uGJirgDLcNsYgGTHjLS5vo5Yrc6a",
  "key24": "67c7wkukmbatyrNoLotVUSRdTmcnPYqRMeXn33VZY86aHff5y9qsJsWZEfSb4fdbFvF1GXe8ykNqpA1taJ9aznZr",
  "key25": "3JFZMAKZP7ntJ6pTFWkqPMkoQ5mBcKpYSkVYkUupjdSXfuwcQs32dPURwp86QHGt11wUxJL98FLnvDX1yH7425fb",
  "key26": "3aFFpakFbhzGUh457tzBUPna6Mh72yRgU473BTv6qUoEKu6ea8iYfgA7KWuiwVfB2PiiW38rnGxX2ozAHaYZGD5q",
  "key27": "63ZwC9X4ouPaRPYLphextUFoyAY4HJkiJGHULYxfjsUtpNPGiuowRikbAoJxZR94KPnEKhzqjviAAmNo7E7EerMw",
  "key28": "2fBm8Zn4MNoYsgVrg3KACNGLCMLAJ9NP6XKtqGAa92wxw4x7Un1PgCMj4sLnSGM3YQq7peiPyvkunPr1deomiGeU",
  "key29": "5z8ipG3KAtFq51JzZ4QvP6qB7LM67HQrRncbPp8aEjSqp3rMXiuiAy9edJxBnaBHqM4HKnf3HdHudLpguGGikt3Z",
  "key30": "2RiTHYuMk2C4go4vEBN5wXmJKXqYZwTBeKKTy89sXYj1kLKwrhwCVHJ32NznmdQP3MW2WexAHPLaLnNEPbVBMCnX",
  "key31": "2tA48cqoBY7mCav5V783qc6H4ypxHuwpAaqMz9tVov5rCFRsDmAMRGU7KNCEcPYGep1BMnJHFSbhFTUgojgW11bk",
  "key32": "3x3fq6SYyeXWmJvHfbjTiUzS7iV98JnQhHKvRaSQi5zRX7QatxTy6dpguVHxvdGstwsXzzPBqaBYaG8vEEd65g5j",
  "key33": "5KSUMcBAadC2AYWJTQKQDYvxsMJmnXFE95Q76RUyPiFSu41CkeU7hmMPQ1bShRR9auzADrgc6USpSsSY9qLgdsVS",
  "key34": "2tf6mUinBi7VA76KKiN2qGHspZYJqJNvHr7JXVw3Ftn2Sr4beq2Pzho4HTLN7LAdjDSRu55E3ZmzEtEJfY5EQgiu",
  "key35": "5Q49n1bdbGXU8ADQkPynaXsJ2m8eUNWx2pgRU9VHQgeDGXHf55ESMmZgfVrVJCAqx9agqeQBC4N96nvKAsd2J6cq",
  "key36": "3ezitsrjnZmwxR5ix9ZjXLdR9H49c5frNKjQ8nyspWF9Pg1rm4ZAoKMVKYVXwkxBu1WUeLxEJX63MDwF8YmQvSZt",
  "key37": "4zo1MphhU8URDL9eVQHUkAM39KQpLSvP22KF1XRBofXLSgTf6FgcADrLxCRxfyoL5aVhaEKgTUURXovUtCW3T66c",
  "key38": "FYgG61TtRsAiu77rCqB1axwUCoMbVgkGA3MnamVY6umuua5aa3cv3eNbQKx972G6fArHPCtq973n6dq4hp1r4mo",
  "key39": "DYRsHUUXj7tXSG6aiCG16vPNnGZH51KCJpnbq6AVL1NPbKw9C5fj2oR6EAEwuW9H8Dio6uvQ143FquE7W3CWjHu",
  "key40": "5rCnSFj5YvaSBdgi5EwLaN4qxmPkHejjxjfFMx6GPyyMdGGMd8zjQ8GV8fBQaRwb85MnZT5tD8xMpKDMq3x4519s",
  "key41": "3ZhdKbsRYzmDXk1FJCvNoTiNyEnVtxHksL795ULPAWYL2ZLEs77Zi7RjLPN1q1Y6k6FFi9xeajdm5QAKhi3mS3KF",
  "key42": "4bycPqJ299V33PAU3R5zRzsWDQFmmnRvuG8Vgb44ptce1vbz9Nr9WZgvGV6fTo6Uvu1txA1SZsHw4GfKNRUx8Xrb"
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
