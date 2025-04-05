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
    "2fnFxouLEs5e2QEXCWcFvASQHqfCz7N4LWa15RAAqJSTCji2ALzBhvKzFC1W6KKQ4tLXwyqX8u5cnrH63HyxGBK5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5e8vBrUKs2D74tw24mupeRVEgHwcz7etHm83fCujFVUQmyCzJk432S4xi5BcK794TW21rAoPHnxYgECBCGrmRD2",
  "key1": "4qBprk5WugsVFZMY3mWgjzU6CMjSVtSAz9L2DYDK5gv4S8kHXbDnKNixWqdfUwWHEiSWuSMVfyFeGNvVwJ64GdHP",
  "key2": "5FdQk3rMXZTgoimzuFgNcw3G539u7hv55Gw3DxpKnJDi7fhJqLckNRQZfFyNkGKABGJmxKZUH95hyxXeUNKFJSBS",
  "key3": "2zMV6RrdnZ9bCgqU1uhU8zC81FUNxKuaQvT9UqevCZgeYaxV1N9uxicRBiuNwducLdEMyu8HDQQnjYHKCHT2M8Mf",
  "key4": "399CeWGngdmc5bm5HMbXKdWG2xuJCeeq7bWVAwBdLawubryViQv4n99TuqEQx3q7vTBbt97p1UAEJfNhBHfJr69j",
  "key5": "2TZrjGYssmEtUMjzxqiTMWX3wa5BdGmFuDm1w2Mb8LBNKEcdC7tpDmzNMJhAHrUeCdfyHKE3QWJcbghapeyDpKjH",
  "key6": "2oNaFWVDqBtGYHpquoWRk8TbT6USPhjQQQKPaUjzVwxDo8JQLyw5o4TDe3ts6Gw96VsGxzexARsxGjj6p3PAhm3q",
  "key7": "37qvWS7ZcLLB7YDdpZrkbPW5Six18Ypw1DaLdX48XmdpU2fuSDXhtaxm1hYRTPVmkjAoHw4Gbk6sPaSEJ3JVqk5p",
  "key8": "RdxRqnTEiKYTfcpqg6zgrYSqYZcFP5xvhfdZr4FwsXLvJ1bx8LphbR9D8MzLr1jErLzcSSWhh2UtPJU9LpJHbqJ",
  "key9": "2AJX9ankKQtP8H1BMWntppZhFyySkmKydVG4JS3vsDDGWQ2QQwynxpUvuU2g9qeVeqBpgVnNshPyVBmRihhUmAfT",
  "key10": "5hHEhQ9dLFKXKgWmvguaWskzLKyXhMESQNFAWwwNSVymhwveEBG64MWeeTLVcYqK7AUcJSqwBinpxYcxEwK84rmy",
  "key11": "4VTEpYW5TNaa1WE5bWRmYbk1go3Cddq5x3K5sUNUS4tSAUqc8nBt3AwNE23GCjHyS3s7sCipVMCDsw9a4ZCzhdFX",
  "key12": "L9N3e9ZgvxbB8uExQepmhghJbnRZYiZpwssqwrd6N2MTZi8Vmu1dgNjyey8NSNtr2BHv5AZF57NMvbSZYMjsvP1",
  "key13": "2TAeh3JVEyFCfbBXNhTgk7LFoFDx9Fx5Y5EKJVwMNW6qwhFbVfdWFvB6BGB69iVq2d5VjgNcfXwWJJ4EuYUTnLoE",
  "key14": "3YMADMTRzAEiYF6mkBKZ4Jme6rLdLBqDtfQjG1WKZ8ouz3HwtfZYumzDo27Nx23aSQzbaW9kdaLXd1EwhoqFurVb",
  "key15": "4jJncmaS3eSqjpFZGjnZRrJoFuYGrYCTcT97tkt3szwCmVEP3NbAius59F54PkhvmgcMuRgfN9hgArqdZ9rMPFGX",
  "key16": "x1vhvncSLjDEPw1QU7PVNxhj4ULKqchK94RRxA7xzs5LUaEM4NwN1xDywsEyqSCFuCLVLemWfVwpzoaZCEtv8p7",
  "key17": "25D9CZDv4g8GmPLdFnhUGdhjh481iuRp2G6oLuDowkHdqA23QEJLpnV7fcs1d5no9yaN4dSoBZdVtXFJqwkebHaf",
  "key18": "whBeFVV9zHcL5cn1jQ7a8zGEDePjJapSX4CwCU6446jZK54uBSeQZvxKrGkEoFBGTyBw4hTqRd8bfsS8g5G5ZcZ",
  "key19": "43URcm89ympU1r4iuZBwxf2u38dL64gYJHgHczYzTiwsRqnf1NrW13u3oR2xX1Q1UYGJ3KU82DRsB7aPJMxX2FDJ",
  "key20": "EifuybSpeLTzCde2yGihoVxDjNDweRwdhztNTVoLmDX54QWpoY4ToY1nkYg3v1xjHMZNK6f898mu2FPsyWsnjYr",
  "key21": "5SRKfKVyska56RxcNrSk2fh2Rd2FLqanmpn2QZF1teqcGERv29C8fUWY3gsFx4pcu65Kc8D3oZsZrxZxFuMytWQz",
  "key22": "23Zr9Dyk5sPnUPft1SjdZTLYmwRKy9vGk5GrPexTrKRvQsDiLzWoYi48dngNvM7gLz817mEgCS6fRGriC82wTaHR",
  "key23": "3PaQXRr8fALuFRsLSkfMzQUr96JbziVDSSzETGmALtVGiJDEKWMTAmZKKoPFAaxCh1qt7EmBxyqUiiZCvUVcPbqF",
  "key24": "dyQGZK9wGF6i77Rb8R3G7Q8QDwEXZ5WdUV6gJYJzcwmPtH7eNz5KXqrJqkvfzySFxNorRced9iDnZ6frBBcxPtB",
  "key25": "hxr25m26etoe1F7ARtpxEnShFdDcKt4t1GvDnXyXJth2sCXeJWVcqDqURguySBG4QashaaDyG87oaKvuueJhFSP"
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
