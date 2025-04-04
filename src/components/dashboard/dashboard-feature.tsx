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
    "Nh65jWaLyZMh3LSLNvMrZ6TJ8GjgfDz3Z8xtSaQCCHoY8TfaBgvjhLr4oTrEJrfr1eLh5hdLaMydpVebu1PnxmM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FfvnMbWWjihuiY8zNFRhUyLxPumuyiucoc7XiCaLVzbeHnwWn4by74v2ZA8wfvkPsmQw2VFW551nziEXkFGFPM4",
  "key1": "oj4J6oQNX9mez4KPRntdrwTT8ejFo9oZGuGw4wmxDSTJxnWb7LT852XpH5b6TsniBn7rbU7jLqsPxybQV6Grv4g",
  "key2": "2SCiz7n8FPbfctyCM5gNCVzsP7f3cpABEWUV1ksLFnJzkbJjEW7bqnVULjEWYtjE56Q9cKUxhinqT2s44mmTayV4",
  "key3": "2bMua2qe5HFciYqWsUGK696eorxmA54em6ArPab66MsBUxnTpHnMRnstiHquhXjfrWGPT4PU6Nz7bLBHjApT5LuT",
  "key4": "4uBfegpzFxV6BGzEtemUJunRkMGCgPDmex1CKssP4SNMUjf1DzcvbBvHTsZLxUbbbDCcrthnq8U4mUmi16ziJi3q",
  "key5": "31UQAYLhbVXzGnDqghV4qRULRNUpkqVxhD7p4H9MhgajBoHAiruGxwA5mRKqepttFqVQhKS6CPVxoo6KuuFnrXiq",
  "key6": "5uU5ux5TZt2uJVZe6ooH1MNEbB5CC7jsY8FCuhXh4G7amKwEKNrhJZ3hN3KUhihDGpWatjJgQ7F6eHqukoBLHvyL",
  "key7": "2BxEk2cJLZUigVnFLTz6ZTeghpjMwZz5jesSKA8G7DgeeUy6Uy4NVnK5UpYX5gv7s58sEwcytW1gFWdMbgAVxpsE",
  "key8": "3yyDBw5beiz4E7GorPwKNNCrZs2xAMRTCrJfrt3XoNeLejQ9j4rZJSQ6DTSznCyfcPeTSgX3mex5Bc4d31BaWugd",
  "key9": "2XNjzadLVrCkNiE9ZXyWXgFnxqmnMkQJMYMWvyFe2L6j59wSfKeSLZqoAhkFkcw4JPx49fWMfPyeBVobAcHzJR8P",
  "key10": "5YPmm45ZYNhjBSQxLJcX6BfD12ZAh3uKhoYfkkRxkUbKYLa45gNjodFWnsVjf6BWUnD6pREZQ9QqnfouaEHrQfLc",
  "key11": "4MoNYcTm4n4iMfBhKBKWqAhQbAKbjYqhtucEdsatac7N7G8Hjiwbya8J77mQrmbxjdYdRV2p9SMGXQRJKGtwjmwS",
  "key12": "2Mmy8emj8V8q3iXvuvh9PNUvhruby13ob9xUMbJMsGiaQ3aKGxfwauy2ym4riATdvJttfHE43viGxhcsLUGosGnC",
  "key13": "3pBTELer15R8FT8qSFbzWX9g2HVqKY24ewCjxAWEUcja6m67LoVWc2zV2obBsqg8Gp379EyCvNrX5xiqDNL748dw",
  "key14": "65ZnpPuUf1o8YFcHfQJaNc9N6Y9p8n5Su4s8xxW2XUrSgQDKJhpHJEzKEaUWuuMaoRU49cE3Cv9svVY6n6ab8zfh",
  "key15": "5YCYHJCZC4pxqjMA8dWuyvyjRQU63oEhrXYt4ZYdaE3T5abNUW63H3tPDFjGbvC8KThsqzAyrLmzey7J65hr3mMJ",
  "key16": "2HGXcSn84LWSwB4isBzSqSKXFoi5tjLSKYgUa8brpqat4AhMYFUkf4Y3iUzhVqpUmgnQTtuJWvBPS76Cdk8bTpqz",
  "key17": "2snShXZhSaGynHyVeHUQ3NQjPRNUoh9eKcq49S3WajezF39Zfo2LX5C6GrABmtjW5tTPrq8bjJqoRzTubcL8TX5s",
  "key18": "4cCztbdmHFYY2ik6W1gQ7NGN1cSP46Hw1P3EE7ntC6AyNPmpyuRMHFKcMZDGCXJ19vMdPiw6JZ8ac746GanAGpPg",
  "key19": "4vH2VjgJve7mgRcZmm2vBpZrpWiQLCWkmF1mvQ69EjTNzhVuYK3Zgi985Ghq9quZUBEr8ce2eV2VHTH2rgnSaP1B",
  "key20": "34n5W5m6MK6TU8BHUNQoUMSXKomv1jZVMccq6fQdxV3PxSWqn3CYhsKyr6xB4igFaVMWytK1XHoLDwbjXEZWhBXy",
  "key21": "531HwAtHWhGsRhEttkpTYavYC25zSPaDYdWhyjRSDX49PJGzzNGLJDeNTz5NPFcfeanNv6WvgdddFNrRQL1CabNq",
  "key22": "2N5KDxMWrZFm4EyArLqsYpLWo5NvEzTc6eweXtgEyJ695WoawcavwyJ419gHHHPDoeVzqkmQTqTw3FHoaqbXa7oH",
  "key23": "3aTtuCXAE3kPvChoAGBAoVphm1A5WnEncYJxyPXpSTqpCHDKMVmR5zM4egMVR1HrM5XG1h5ZK4FTATnL9g8RiQV8",
  "key24": "669qYFFCyBxZ3ecq1SmQEPxbNDCW4NUbPC6n36VkaeBeVcWhwXZcH1mu2RxQ1U6pgFupoxDpMfEs9XY5xPS4Sb5N",
  "key25": "4vYeFxXzTeDf6ohMkwijEDexr3EodGw9eNfA42E6iFq1YPEnKpctDEdJAGZUwzMyB2bg2yVxiAhyJaamu9PTKG4",
  "key26": "4FMH4GXepDEKMaPmPmwUYXoqa8q5SmgTareerWRqgZD6VeBgeKsMfdF7fh7XdJ4mev7fqWc2KzBWhgNfd6Zd2Qt1",
  "key27": "5obyevWCT8xSX3woYz3iQjVMkpAy6xMw1juwitsPW7B58NaGXDrJVFruv1u9UkBtkih82giUXqDBDd57CCdJoPdv",
  "key28": "2fBtj5wSNb1suRP1ThSvNF6xX7fYZPisYj3EcRegK2KpNEGnHKgjfwwK7ibcPc1yiE7Xy3wPaVDyDA3CEtqHQi28",
  "key29": "3JRnicZbAJqn5h2akLyVXtHULSC9o8TzWAfcSPqupFWinfCfm5sQeqhizJPT8udHHx6b9xujMCTUiM7r8AkbxET8",
  "key30": "Ha9xfLvNFxDiKpeFSrEUhAHQbL18L4u4osgmPyyLHL5TEXxuJ9vRaBW3SKnREWUEVjDaX4jufqA5Zsd7mULztKo",
  "key31": "671PPFgNFxNK5cGAw6KxyAyMf3SR7YQQ2HXsBAUsdGfFrgNGhKaEUuxwzRR2WtfvAiKYm6URqXFtSuGgAF7cmP3x",
  "key32": "5MTKrc73sFjQbbLcuT1c9kSu9RwqAkZwWnDyXUQdPqipBBBZ5WMyLhxNvgDrGD4WSKpoERDjpi1vrmkv1xDfp4xq",
  "key33": "2c1VNW69DiTJjZ2s4hV1uhZ1BefY5HdzdQHd8EdBsStMp5xhTYN8xzqSkjWDvbakbBn2VxfoDGBnGhjskd33b2c3",
  "key34": "5rV7E6VjzQYbqfNpnrmNGPWx9NAfoznHwkXzZqPyREdJDhV3SgpQwc3wqCKwxdkpVFwN6VkU1AL7RNRkucUgRp4p",
  "key35": "ukW79gevB1bhLjfz2AxmRNi5DSfkLDSc2WVam7shJHs2SjbmxZ28LsVFWDdoEJAtcmpXUrHk5JGy2f1wxNucf14",
  "key36": "4UJPpjaMj2QQG4QAvwPM9Zd8mXDmL41zMUXVbJtT9FdMN4BTBNi4ZLAVL7HsWEcEyoLtiPXithiyvqinsHrrXWcm",
  "key37": "51Qx9RHACvh4QBNeXgr5ysDXfi3LBidNYP8a6aFJXpjkeaQiY5Ej2mrNjpwxaMHTsetgSvqndHicw7xAzpyXQ8EY"
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
