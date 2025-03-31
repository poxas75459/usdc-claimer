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
    "3EkmJ5g321n4ENsjDt9UxjcPieP2FWLPCSF4PLy4vgGubnzLGKTLAdfs2dEJocKP3xDFcqqnmbCwgocQxmDDe3nM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WAivug8dNmPE2U7Vx68jDvBgjHN22BRjspJq93kJu8QNSoKQmguo8m7rXTFqXkFjABJJ8WJumfHcMPgGiAPC2nW",
  "key1": "5AcVpmN2MtoCAQGd6KY4xTaWFHhiDXDCrUYDUBsicZZgeNV1AaCsdNJkBmsMG8K914gv1A66TWCxD6qohxr7zgxA",
  "key2": "22AyjdeE2LcjcSTexwXo94GBXiTNJLjatmQkyVoJrX39xaZszetXosh7xBeERoQ7ZbLuMSJ3M3wtAnEqoBkzM8kU",
  "key3": "2wnFhMMZiDRakwaHZMKJNoyhYi7Gjs1PHWnGHKGYqfii7V5zcqz6zUkdXrL5G9cqTvExpm9qjMNiiA6yFt5JqmnR",
  "key4": "4c6gYiNdbZqazjZsofVwbAC86EY8B8m23U16NBD4qx9Zcp8dadvyWLaKqQ9mSGv2TbSYXe92YzoReX7d5udH4SmK",
  "key5": "tLvRViMuM6bw28wvxRGUEFUar9qgEFthCsDjdtfSX3oxQmAEmK1vcymso8UvRrmjhQECS7FeajnuLqnuTNiMaoi",
  "key6": "4iB1DJEKT4WU1geXhsiXbbmU2XJt2SK9hPRqeZVvJEUcraWwQjLazNoSqRVmypJ5BBRDLrJxBmAg7bqtXEfgdgnD",
  "key7": "4ixoRjqwU35yqC35jGH3mFVb4UGuNNuwQfCiizFVbup5VpxzvSFkH1LdU8n8fW2vsnxDMZjLuAzQh5CM4k46Nz6t",
  "key8": "25YeNvtENFysvqPN3f5ZLPEgendbW3TK9Juhtcpu2RK6qoQKvSRsFtXeCBFFJKXuDPPNZ7FvwTPrUxeaeCbga8yx",
  "key9": "5rPDtuzi1f7xfAGGHBdEEDQJHV32wEd5aJh3ge7hQh57a6xqqbJZe51Mz7ZPdNuT9K2B84YncUUPPcpHBuWPZSMr",
  "key10": "5bGk7iXqUAmPnDaautSi969ahpYDC2yzMQpfcyhbgYBdJPH8TryPnnhE7QednwCuxp9TajW2vW1vvtabXLMo4gYW",
  "key11": "2n3d1RcAymSmoXe5WzBJjAuLkDyHkTkLqAShFPajkRLm4r9PQDbL4wNM5nJDFb8jrpMdzwXioEXGHKR2uqcePQUW",
  "key12": "5egP18DhFFB3o7N8CEJSUCwtU7QGyWhpidxqm8KRkEnQDZSQwjn3xjcHUSWDGjyFvqWt3M2mZ8ESZfAJEMuu95w5",
  "key13": "39kXW4LfmJLs7CyQfrDFEdzQWyZSZSg36gFgqeWP9SRDowLZ6kfgomjFuuMJGGdRJqDJ7Uem4RrCGph6QCupQyVC",
  "key14": "41MVFKAXEBdW8KdgSGd3r46yJtWRgoNwHGe6yDgV6E9uU5ve9gUwCuoFuNmkCMkgektWT7V53FzmVBVZGLraTmHS",
  "key15": "4ccnAznveywoLbdAvjFEh81kJLF5oV9JRd4Hsq9QpxQhdknk8HjY7iFm7MRzp6AUH7wrYAbWcMgew2DPzWKpjFrf",
  "key16": "3Ky8bZKXjUVrv2GV1hCPMoqAFoLoN1v6b9VNH8h7NySoVcyPzezRmiUt9bkmjhSPzCfP2GiGS64BmFRWHM8YNcUK",
  "key17": "5xqtCoQLE4zYUfC3Yss2toiYEcJT8nGFcKAqvF5mQKWaxsk9cTgnZBf1BYnbrfGTqZitMGAJS16Xgaitfbk3AABJ",
  "key18": "3huGFCbbFJDvA4NRXy5FCLGizx6HmY7ymiqwdyvDUExEnG2CzPyQAQUBE1pfhMKFPuRKzberE3XpE3EM5fVw9uba",
  "key19": "63ZEEtTbw7Yc1uib5vLbEbWV17fh6sViBwZnuKxiXqHB6KW5x4CSfF3UagFKgj3sZBxQqS3yXNfUaDP77BkNGGxd",
  "key20": "3McF1NTv1pZBwe3C3h2SV2jyyU8SWwXjw2hMViAnpdTr2Zx2RHWGS7esiSe166fejprSZQWwY66At4MAxyma1d7H",
  "key21": "4uMYbMMcrghiP9dHnNMzEuxS2XRohPRp6AUrfj7Um4zc9HfwJA7L2nZL9vEUjPQ5FXRvjJpkLJLDFVfqf2ZeeqYm",
  "key22": "TFyQiPZJYMA2SChBHzWbKx5G8iV4awjPZbaZxjnskS4b6zERexXzho99pPMoKSeXFPUofupCPFj7o8cAYrSQtGE",
  "key23": "26URTFK1ArPPA8SF3ip9es7pPSgf94p1rHTERiRwUXBDay7ywNfB1zV96FwzdQwbyd1KhhCCGeQmFwB1tNbfFe5E",
  "key24": "AJDEaWcJE4tY2cEvzCqVhpCHkNe53pd36HGoU7wWsb9P9CQx6sxYge8CxXXH5tmCTd4wFNJzrvQcQMtLgNUHTzg",
  "key25": "2ek8CrLVC9PoPS8c8DUNLyMcV2hd3PZCWiGcrbjbK1RZ55yTK8vuYJdaAXFmpvyeiskKXfVfwE8sSgjFvwnEGbTc"
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
