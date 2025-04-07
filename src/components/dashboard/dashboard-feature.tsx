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
    "2yaE8rWjR56Y7VDUi53aPe7RNG4oYs5yHeWrzZ3uWF5MJYBr9wMPGVJTYRiN1LCwU2x5M9HyZCG1KcGEx1ABoGdk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JGkG3TLuCbVBvwV8qz11AWoyXxdQt4bUfmHn5E9Q6dZNWPGYgfZtyimYGKFNvrRFNPTUhskgkk6PjrZTJ9hEXKv",
  "key1": "3WbDYwFZ3Bw5ekBUyJk2RTpNvPU3zfL4AEdAc45npxSwMZFxPNqrsnvYCZJP6HQDT11nWUPQMKqJtMfXDitJTGCm",
  "key2": "3uXr8r51NSZikmKS1yGo8bZaP5vDyWW3iAAv5qpACm3wt5a3S5cqbbwASfWxZoYEd2FLt5jWkmDqXJzcHLW1dUAh",
  "key3": "2bF6WBfN1hTdo2SXWBLwn6W2GF5Rm8HMYhwkedYiQWXf4GNvLvVmfmtSbXUspjcZVbRvhbyTZxexuJfiTbL8A8rA",
  "key4": "25uYegGtHGTzzuARKZWmHmW2YNnHaGcELdDJjqwPtrgJDXxgwGtJtBwZvLn7tneQyNSSYPKvjkuJ8K9APid7gF5g",
  "key5": "2CVj6kJuUe6wBZujgbeNjBDK8G3SDgD1Q2g6ANQgq2Mvrg6tkFEUeKyhY1ARWwnoxBwZH55d8KmtYEkNTHvP5u3J",
  "key6": "5BkYVGcPbrxVm5REqSbjX1njUMNK6tUBeXzmGJDiM5Hr8qRdqmtcnG3RfDNuDnVvQ4J15B2xPk5yFdxnYoafajfc",
  "key7": "3Sc4km9oA2q66qNddgvRQGrKUP3n8f3Gd2DgV9ASg9eGAgtoJX52vAatUEyf9yADXeohHe919HGNX95b1KggtsQM",
  "key8": "5W9NrUE12S22cPzLQXRP4UT4wV9z9U9daLXJo475RsZLQizgB9jPFXHFo3vvzpKRytsGEpYQAsw5qjggg7jwaMM7",
  "key9": "5omcgxgxq2uUzw8yFKxR4GLLL2t1fNzNZg4j84tk4VqGbX42s3EHEq2MQgJk3aNz3kBe7zbWP4Te4g9SXmuwWCfU",
  "key10": "5GhUUVCDHnbnVGTYKjRwfC12siL7SGb2WCCqoEFYqFALTGRrKNDEMqLpZ7XJKAepNmyjf6BYK431govfWQRvN8GT",
  "key11": "4PKscAioxjh9Y5E7sPKHvtCoUTkuySEushZeFeNM79hqiaDtUEc1nmNQXC7ZmMS2GtmC4uaf98DDsymf98cwF4fs",
  "key12": "5FBcsA3X5zG711KzDbpyPUrNZSgeTeQWzUE748X7YJC8GfJwk4uQ9P4y4f4q1ubfuuLsi1PEywwjwVwwcaAoXzeS",
  "key13": "5TJaL7TY6iZ7zrPZyXtY5RuwQsodRNGuXPs7JJSJ8deB7Ch3U294VC121hGAm7o5vpXz4ARMM9fCnc3dsqvz1aG9",
  "key14": "5nv7wB9o5V9y5ULG4edgjFFwbyhJA2PCqRJhFgk1Ze8dVY6LUU4TxT98SB8JZ1C9yVfRh93SFvkJCcX7nRkNaZj3",
  "key15": "3GWLATM9H6Bg2pTVxQHJjZxzzc9yQyVbSvsGqLFuzWArooXZ2t26ToJcnNgyKYYewNfnFdj3kZNmHBbsgAbNEyUh",
  "key16": "3z4kadRN7snfR94JYNTdKQsbw129uksSQjUTBBggmapk6E7AdpHmVcuisoiw7Wk8Qqn57562iD6U35oUkQaEJY3q",
  "key17": "3k6jtQqnUsBkER9EWuoB9sjeRysEVAhZ1kuX4h9eJFrDr748ngPG3DVLR1W1Cruf9ikstSbHghAVNmFuA2MiW8gZ",
  "key18": "3gic3a2yfJnr2d6gE7Jba6brh49GtH6uuTPfS9JimdzfAahSG1N6TsrmKfQkwu8Wgc39wMLscHDQwupyfirG5RUW",
  "key19": "4PBQ5ban2ML8mus81Fgk2heCUrfiWcqfuZQtccfHX2fECTa4BRFM3azfHpWMXgiDg7sEibu7qFRDADUmqiSKHpkN",
  "key20": "67EKLEmZzUNdrNgAKiZiUdTPrrCobs8TDd9GXrWznCkFS4xGBmdGKp4AXs2y1jMMebfqDygz8acceTuWujxR1TDF",
  "key21": "4SzH1nFuaX7Cutu1NiqT59xYfedMWXEL9M7MEhZTUFHKadC5yiGtDZLytHdLwyLnxCtynjHbCgobD1RN9T1mswkn",
  "key22": "5oVp84raDnTK7mrMfm3ZgECwPgQCsougnQxPvqnz3kJwn5ds2rKhm8K13RHtHiVjLzTMuPjyhd68X6qx53pdrJ4r",
  "key23": "2PGs4ssCk4YZodqMADzqe8AYYUGRwDKCR9FoFctkXMwQZxKcWMikV5Qjth1LJa95eD1d1qhm6RJuRZxDLqLQY97J",
  "key24": "5rdMYR9JLY2MhrcBz4QBXysdf3TK1zvt2pveTp8F1s8Ks5MTjbyiey3Xzdw6tui141RauhGH6pb51bESbGjo1KQq",
  "key25": "Vtd62U7b1yPCKT2Ldz2vmnpKiTx3dYV2GZw26w5V8fJjyGCL36vUNqCqWvxPyUFNk6SyYrNPAfyAUsFc6AaEMsu",
  "key26": "2FEuZqDMYihUiYUMTLRFnZ12MQGromVFFq55MDsCu8anob2HbKkuDrvzWteRDV5B35oefSJTsYagaueH3VXtrxMF",
  "key27": "Y9YWtSAC8ZHViLxNdKSrCR6skgeiQQ2MT6UEGD53JhxvkxJeyoMqxwKhNPHD65eibT6aEbaaj1WCkVwUNrACJ3d",
  "key28": "3cqfZxxmH3kPY3GCMJCSUMGSKojG9dMPt5AZZ55jrwLk9g9aJHztcLGiVGEJGjMJ3ycMHztPcEuFWyvF3ZLEy6ER",
  "key29": "3srY4u8v7mBnk4SSMggTX5VmEyCfg6sTXpVH4xRr34d8xDq3M5ftrKPiwofBZThTPmqAGagTrVLVho6dcy8dKk4u"
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
