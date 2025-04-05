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
    "3tywqfJjgH3wExTRZBSEYDbCVm36cSCPSGZ17ibR13fCZ8ob1WF4AbXP9kNKSsU2nrkKF7jnsvDkTsGLjiH8PKE8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RNDT3r5Kiz52w6r9SuUyudWJjppc9NRHwKrPyR4eQ3VTHNe7CMhtboGtxxpuRSXuqmrZ9R3h9ee2BRkjuGpcFkT",
  "key1": "359FKrvgUTcVNbUPFitwUWam3NGRHQK9nS1upS8iKajNM7SuzfkhfwQahBrjJLMPfUnoY7Xt81zZujysFUWeCLs5",
  "key2": "2Uhpw2AgGQxfmjNhUcDaYfH4ruUo1usqgjzCCwrbmxxBgP3YLqbd2LLyfRKjfcRaj1T9smcZ3AGr5qe3umtjC3rD",
  "key3": "NdaS564jVEGKZyjoDNxiirRH2AtyRiLgTM1Gck4dFAeA3A8sxXq4iSZLLVM9cwTQ9zusyGREz6eK2t55Do3Yhr5",
  "key4": "2AUffr6Eg94DxHeePLjX1ecZLM29DBNYb6A3YEt6Jr4DAkLBdhf6AugnXvC1SdKSa8ZXhWm4qqwXEJzXsLqE9RaV",
  "key5": "32JXLwQcHkJK7Crg6UstxKxzCPKJrucDVTjGN4j8cMDfKMy6GR4cW2DSuUv4gtrFBivL6p1MVGycA5wPqSV21Qq5",
  "key6": "5c967m4s22SugfmLYTFFAx6B9TUmxK8m4RR6SkR2KcCSjjxbZNf7HJJ6SDRz6Aw1n1z8moFKCwuWMKvRsoGutGRn",
  "key7": "2jmfjSTTYSD3FMy3UubVvj54g6BdEBxzQoagv49sABsrP2VkxHDMmcb3M3W8HpRxStFT8m3uSjcZaBhH5HBRaNyD",
  "key8": "3cYYf4MPdStKQnWieQSuwFpXQ9udSG6X7QTJMUUBEaTGHzfnHinvaijoTpNhzWgeXFt5HWMcZMECCJqmTVhQX5P2",
  "key9": "36UYLsJkeNfHFKoqeRqGxAURUpotBfMhBgU1Z4Bis8wvCQn8biCtXNR4S73JiiSzB9N6HMg6QQAhyiVu6rEbMw3r",
  "key10": "5zeSvJbhyKH93wHtXBq22prpnb4eZMADFBRk8nkF3vwf4n1uURZhjwKYyATYLrKj7L8S15UDDnHj38nR5X8q8sUG",
  "key11": "2vjfbNAoH1gaV14135B7ZN3X4NiVExsL8eQ2dR9628FezCXU4c7CrF1n8F3zEYhP3akRLCiBswEcZj5LNGvqQGrL",
  "key12": "42GkPHkfJAgQE8YMYfW2J6FaBf7n819aVdj5J7GWrxvYxXdcZ8HjZ4GqdW5qRc2W19jUVyvi3caDtynP4RwAdenj",
  "key13": "65q7mUJypPdq93ypKqeykYhbKm53UD7o1zBkQpbt1T8sdiNZuqXNLGa2taAqeFK9nWxQs5Bqa5wkJwcVCkV99XTP",
  "key14": "425jh6ptyeGoiKkpJnExrDs5smzYLVhyVCzAKjGLX9cp9LPUV9wGuax1fhrBh7rmcAXwwdD9e7rSzBXcw936KeRJ",
  "key15": "4mUvrjL1ybWm11vqz18k8S4MjPr7FUVLZQ2cJa1YYwotQc3CSbAfDoT4GPcPTqDZUgWG1SFf9KD5qgigqs4fJCzp",
  "key16": "5amdBG8H1SJ67NrpDEZjzWEWryccFGejbBi5rna4usttg2Rg2j798wyDLh8VkGrg1CjLxhq5j8oKWnFjEx2rBkRv",
  "key17": "vRYE8tVGh4ZxnNcJLpZCQGp1MMgXFuijn32NyAQ7mVwtTbkcrRXmDP1joCFPeNoepGsQ6FkShmBXTfjevnq8EGL",
  "key18": "25nkoJGz1kggEZDBGuiRgu47C95UK4GJcxbkfe11VDApimXfu7Q76fTtdnkG5WG6R2nJSGHBuWeW84rniSqeBKYh",
  "key19": "5eDzsrp8WCnbrPisBKdp8uP8QH2BKMZaWhTFcQE6V7BSsL2vtTZ8TWaRYX2fNrkgg6MXEooEBfZj17twV93i9NL2",
  "key20": "2Td8Cbxcm7up2PuXfcMP3DrLirC5KMCDVKnNbEakq2iuPFDM8UDxvLg2NsETqu9Gj4tqNK5d8JtH8LsLjGEAWUCp",
  "key21": "5su5gAdqJWVyc4hyh3n36y6uxvnvZYJToaXVMu4SiwZ9qaRGR9Z2uSVP2KHNsEJuTBBVVgARHGtAwabuC4fnuG2K",
  "key22": "2Yi7MvFQA9FNF4otxQ1vmnsgpAZimYiw24dyQ3VVYeqp5eizsKrYNLbCijcus8sph4Nc1F5W74QK9QMXuRcvUQBJ",
  "key23": "R4spsbB8f7SNJMTBBwtTtoAGL2HPNQNzoCGt5B4zkczKUcwY5g7qMkuGPzuuquK31kJZADnaN3gsCdUV2h8aPuo",
  "key24": "3ChWJZwLgiyLkUzzhZRyCaknCnewUNSjBC7NzCQFkxF5ESD7krPv4vq4TRHatTYuryTpjaEekqDB8oZq5Ys218VH"
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
