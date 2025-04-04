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
    "2NTcQZvUeJPdDx5xyTtfkPNzzohNRfhAqVPoS6gG5Prb3mDxbtonuUT79JbMhpemLV2i2yXZ9gStewDcHqoiwBZN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rpzUvSvAYRiVEoeLmoSfidCC3haNpC67udiBYU6EeWcsiaTpwqFnrQmrw55BVaDBfJd86NJ3iFw6xDXMBKeUgpN",
  "key1": "LgLRdQjGzRuh1A7wdguodXxhZz24LSyu8eYHw4QRiiTia89EqrgjeGZ4t7Nh8nVXGt6dmmNmErhX8HsWcE9JEMZ",
  "key2": "65FQjdgnLwZ61Xi1iBuNabSix6394pxLs3mJsjzv4EYqkWjrJ4qHtRjeZeHUZspcVNWwDWqF2u5Wpjdca6pwjt3Y",
  "key3": "5RKHXnQaD3HCEx8YEBWQ1Cs53TZjznKWJu3CeXoP9TLCXx7L5bY5CA2JE3mrLBbAakr316EeSvCeu9QAHGWyDxr4",
  "key4": "3ty96W7Hf7xbmdJYXhLmoYwquEBPz5EZWDqrk29A19p14ghW9VzxM4nmVJtTFneu753LXpKZxJaSBjDwGcUppLUp",
  "key5": "54BBbH73vpqA7rKKvAA9jXuRXf2RuDVe5GjFCiiTLvFUeLojeCYLRdWAfh51yFgSKF8zgWf8eWd74Df4dn5SGNGu",
  "key6": "5mtaMhdsNJdE4tcZzFFk19Mw4S7nxd1BT1qBfoN1QERHFf4ydsa11fJnA5U28SmJyBMazegJuj76YtN2dJNQiJDj",
  "key7": "4ekjg6ero7a7MtzfnmEwBkRoGrZvxst8xLmm3LTstZyzLSsWGbXasXjgWKRcQ2TYLVW7hoBAPcQJ8h8SKRHK4Rkq",
  "key8": "2Y1VLjxaDoSsPqBknZGpbV9SxLAkEDTeru1v3ZpVUy94uG2kUMfSnCSXoqg4DdLvCRERBAUCaZC9qRpMmHazgd1G",
  "key9": "7hja9eU91Geq4gToKzMmZ1cWCJoHWBW5ZoGbDXbwTghU1LoEmorMNyeCXX1ipLeGtCToNz5AKuxngu3vePvTh7m",
  "key10": "KzftuTTwCMvhkpefs5FdFGRwetXQY1hDTBCmVz22BBMSENzCMGa3i2nrqEVxEoJbUmTbdTNy1q3WyfokcuD3Tm8",
  "key11": "5ZGpdxRJ4KQUj8curRo4NX5Mkgya4zz6EGyDgoJ9ofEhXfsXmDBPBHzH96anUnQ1MhjPCeFoPLqxraAwcUAPYZvM",
  "key12": "5Xmic7s5sDUC8MK77PQxCC2FkqzNfrkKxcnzXbT3MVqtVWB4KmgngSJQdUCqusUxVTJaGd38987hUcCkAeof9GKt",
  "key13": "5MUvsJcpKiC7USuySwhfhaf1Etzg5sghxfLV6bdSx1orjkCNkL4BszZjCN8dDcv4yCiV4PMVpGzXuTgaw2rLPXdF",
  "key14": "4S5H192kyCbTDcRUtiAbCbJFrvcoFovXoBsDfBh89qhsXbfpqjJobtdbRukdD7nYHwU5iHNeXoJnNcqJPxwADND4",
  "key15": "4hzHp76udwjsA2Y86V5Bg1izUiDEVw345UevvbRQij1cxwNu4ndrdUoPwRhVwHyJKv2Dxm87NEMc88Y11sDhXzyG",
  "key16": "BTHaj7NzLGvg62eMfyfgY6kGgoF9KtB6tBfizKdv5aFoXarCaXZor5XkjnXgi13C5QRwkdfsiKrSWLq1yrG49jc",
  "key17": "3YJV8L98PkCUACcPsdQoTMcoF927EfwdtJ4JSiapaJMv83LB1dPSNbpaddCTQRagAYGKvyJdzRG6H2qLtqDkChNA",
  "key18": "3kzsjGCRMX99PVodHi6YoyjUKVkb9BaGCWDPdq2FvAgtrcE5o5jPjrFGkVUuf6YwrhHWxYwB5Z67Zcx9zvtGfoYg",
  "key19": "2kNotrA8abs7REZzsfV53XDnedo76AbCqgowq63mpkCvTYbqdVaeUu6Yvn91GDp2yz9YeS22oTBLJJYNhMPmTXus",
  "key20": "5fR5EBUz7A8k4dHmJnGR84WvrwC8wF21o93eefVwchJTy98CZgAdUDF6aeeEVdPt7MGmeQwaE1D5qovvKdkdruWM",
  "key21": "2vDVqCBGjEEbta1Q4EQZCyKz5WjFMt9R9hRnExv6qCGvnQTPpR3Vbr1njMtzMMgEqzTQL7z6jdZKY38dqnPFBCm7",
  "key22": "K4NsfwKYNXsE8LgtLmsqwHGhYPck29fCYHZKSVKC4NuDyhDTz4ZSbG3RSP3yyx9mT7JW3zkXE3qRfAKC8J9w16d",
  "key23": "3he66Pu2B3ibGviuSvYHsSYBMcCjQrbm6vboGNatrMT28PzSuSQ6bBrro96Bri4GTM1ogVbZqUAsUQCGEgvLVo3K",
  "key24": "vYT6PtUKGyRhBoearC5y9YomowFqws3LfHMnb5fjAQih3sW1NmMw5dMJJWWQH5QDTV7Puw5T31L48EnTfi59n5h",
  "key25": "kzEMrdBPxvZxgjoSAQEUZfffrbdUj5yH7fpBYaKMCz1qRYBM3uk1ReQqPxD94UVVkzCe94tFH7SHy9khFaUhywN",
  "key26": "2HA7k4RX8hyGQf4jctbPUoDF7DKknXZVqPrDdiFkoob84TkS5PnFmqPyaJ6EtADkcBgFS68ZW5ZFgSpgaGodHiAt",
  "key27": "3rBoUtUj3qBrdfvH43fGwu3CZGTxxjh8sH2zmsYrfs2bkHTcZyZ8KiMXKn677fY2DZn6N6yGrcR1f1dcVTGQYfAB",
  "key28": "9nLrnaDgZD8mgVMNzMkzArVyKnCJw2dvPVzc6FY4UVtraDM6mTWpf1gujNvDGhzcaBLhNLupA9H2vkmr1sfS32J",
  "key29": "5QNtbXLSTeXeaHwuwtCVcS59Q1DvaaZnnXfjUhzaXAh5H5jSwXdQPC4QeU7bSeg3rpzYqG8S2J7NsT1d7Ch7Gtsq",
  "key30": "3mP9JK2qjvsDRJxMssw4dsZuoQFybyJP5pXa28gp56yVKobDYHWiATXN716DsYJBBaDaLALShDiFsq3T46jcqAcE",
  "key31": "5jyyootNWzPrnyTUeg4vtWQF1gkVpxg3EA7WXpiYvR3nsWJxZ7MUEkJdTCEs9erG9U4Y1XBZadYBxU76P2MFFw2n",
  "key32": "3Zw9LhvcrLZWsbbJPN8oExWVVTt736BVMpeCkBTbnUxdrX9AAYZTPfYiPksmtGQeyA6gZcbwbmpc91XnhmDdg44c",
  "key33": "4dhcVexYnZAiMJEL9LRpYzEt4e1CWo7BXYzx5J6NW1x5vSCgPbrUaq5DyutgY2JHAaVkjHBvJjD8pKbB2QLPGRN8",
  "key34": "2Ddx76DneT8kFPbP22JF8KQ1a8MYMkKbL5obAnFywi2QPefmTaSPnH6NhhrfAtnjScEgfJZD9rK5AzNoscUhqVgN",
  "key35": "2MaCJfENGdQUBiBnQbR7QBmxRTADhKKsB9NPM2tYYTfLbuYiWiYAJw2x4BdCSrqy5xnyAwJoBUb3Kx7my3dg7Z88",
  "key36": "2tpuNDj3WZRQLHMLjbbNzHhCHcNPMe9VWXAGiwfvjRQt4FeHScPyHyPhCpCTAC2wWf7xGAmi6CtmoWyVizvn62fz",
  "key37": "27YKdZZSezpouJmxqUsNwU3QPE4tXs2JUHjmLrqGhY1vBSJjD3s5MKk1sUBLTqaa6JFF7FWqqD9xedGhZzjSXitH",
  "key38": "5SpjFgRzEjZVMmuf7n16RZ4NBbhKZcaG59DY2ZeQt5kLXWTnC2h1nroBKjqbgYATHvLJ5UWwYKNPbjJ1peutjomR",
  "key39": "2DwM7X88PhvX5iGftu1PPT49FocmjmvwZpvuAS27kF2M7Ezfyn79n8EqoEYChMgx2dgSZfRYKDt6cdugBfpZyUjH",
  "key40": "2FXNKMX5EHRsYqhKTe3qCVQ3uMQqfSAPrH2Rn5526kS9igoAHHASKNFg7wTUyDETMt5j3JAoFpNbMjqhRMmBnrCy",
  "key41": "5bW8KYuFoFhEQjuTBcJQD8J63UqWapVvR7tW1d5nYwmiyXNYYNa8u5ZbFsKi227EmjFpdbQHTf1AyvngAmUMQc64",
  "key42": "5niNqNiJNDbomkptPHAJ8mro9s8MZA3q3XAkY9WZCrcLL2BrFS4TCy1yuqAQmgcpV9fApGe7hQdbYhA1jVYPg4Eb",
  "key43": "3oCpEuCN8BVy8tQhLcUJn1NFYD4jxbw28cXQPrDMqHQrtYu73Hkdifh4jSTYXHscxkoSJuLJDiLVu922f5HpkXp",
  "key44": "5oQKkW3PCSpCRKLLTGPSrW78BK1kzuRhhS6UpUecbQgTBVbwo85BsiDEKKoXWHQibE9Z8qAfQNrxYbxFyGxacPbk",
  "key45": "468TQ6pwU8C6w66gcqbE4C9qQxERf4G6T4nAtjL66eZPZennmBf88nCGEfwGjNWiCKbMPjFaFj9yykkCJnnK7B6Q",
  "key46": "56qTmj4Lx7Xy5EkHjhGYJPa28hkdxrXzWiMYZd7P5g5u1KDRAux2SfADCdxUu564akENy9LrNF3xx8BT1sAEzknQ",
  "key47": "4aY3xVDRDBubo7p229xLQXUdG8J73HSP52SAdudx5XskTy5MxuT9Faqq7WWBAC7cpPQ5VtC3rytas7GC3rEBgyJt"
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
