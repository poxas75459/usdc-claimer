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
    "3SrCxPMkJ9RvxnV2eHa9ikk7VoHdFHJ31JDvABNXFGM2zmcWZvxQSfRcX4r8WjQP656mtL3kgZyGLDX6BKDM9Rc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57C4SUKTautLbZuGU1129KdQ5VyS7aDUUmprbyidbubTEv3BM67g9eS1Amds8RfJQph61F2RgDFjB8rSxeVfr7LP",
  "key1": "3Y5xY5p1sA9xhgM8vfqjwFF5HBUNiUNYUjoUy8firaakRHnwcG5YnY9Sgoa5tHxAPk4xrwBdHDJwdMp3a1iLkA5F",
  "key2": "4Kiuuu71nHAipJqpn8HrvSR3MkpRbsY95WBWLdNp4y2U4upXQyw6x3dro3yU1xoTC8NHLTZSNsVcEjssGQzTP5yh",
  "key3": "3GvKWuUq2U7z6b6Y91qgvBXSHPT1ukyj2gBLBUWaMhj3pfZZXqJzc4Pnx26rqARLKS6pRGwhvzM5jjzXxEXUMnUk",
  "key4": "3KCtAxMfQtPnWLWempmGd4D1MuzrUXxmos27kJ7rLhtPEsT9NrBnwuzecNBoiDUF58HXd2wRo6GgCF5ds49vkfSs",
  "key5": "5A8Ho6BCVnkAaQpnqeCyNC6juVaaqGnoN4vuDDq4xs8X1k88LHtz8tqmiderXcwh7MKdBWW53QyDLMbATwXfPyWT",
  "key6": "4QnT1D8Y7wZdy621xsqKPk5uxTHr14fUn4t3niVFzZBgnzu4JJV9Z3zaiqrHRJcQYEbTBsj23xU3emo8Tj3ELBES",
  "key7": "3bGFHy5F4VD1LR3Ef21ANBro7QeuGRkNgp5YZtVTQxce8r4yXseZDv8g8E8qCiGrwFZD2pf6MpnZbDjdevg23wLW",
  "key8": "2Ypq2KHYiRTTuDRhaXvndFofbsp6ZZ2nuKWeEkMXg42nc58VLjGZBxQtdcd3BK1fBw74q9n4uVEtUyeHDxrrZXin",
  "key9": "JLy3YcUM2eR3x1nX2fACqmQ4vyr7HeBBvvdbqBSyn65JqoJ2u1it7JQeqK4FccsgKmMdzdGz21VwY51J8wt7sGQ",
  "key10": "4aVq8WaHhP8ieYJT2fXDJLfRPKsZfv3DswYcB3XjA9YLycTpGSCbspwtNHjWPeW2QtvrwVSn35wvdJtV3LtGMs9t",
  "key11": "5huGhFtrpDQYr4bprLRHg8ZNvTQuf9ogFyikAfQ9XEzckrVkkpEmweCoyMSbkjv3PFmUmeRpVmL5A628AmNcQc3L",
  "key12": "5UWG6vbbuSPoojBGUHphxBtZk3tsZP8TbaK5faSBTxeXurV6bi4PPzdr1MMTsgsbbRFCTa2TJhW4GqviXapwAYSq",
  "key13": "2N5z2otgFqcUXS9sL3yWJbJG1ZXTmUye9HWqLFYm3wCX4y9CBXUnPu6eXkcrKX6rwzRC6cWku8iM6rdjeE1b9fxM",
  "key14": "3qWoSCcir33kc1RYbuvpuq16LMMT4PA69b1jfsyttCZaj5kJZ4sLVtKkJqduoeCNexfFw68CbmepvXy1JfeaJkAB",
  "key15": "cHQFUPoZ7rzxKcY1DECf6GSGFbEvBb89EqFQgEP9UnjXK51gurdDofSFN5bai2c44t1eeCxgJph1GZT2YC9gprx",
  "key16": "2yWLZzNucxoFWWfRKzrD6gxTiu91Knnnz6QrUdR7akesTxqMCacRaD4EcV94zWVX9jfReyKgnFXCczBMzzRSrrNx",
  "key17": "2VCLLvCsBP4gRWb9DrXrfrRaRS4KdnRVuxHLZbNi6LEvFGc32qtyRDRPNcvLDAgfHdnQHUriqqLmsG4uq8eFFB3m",
  "key18": "41gfTpMh7EBuwLB1eQuigGJsFSwr18ei1Zo5CQv1a2nYnyTStvQmheTveJ9JxjFTSiYKZrKCdU1MzGwjXTTnUdxr",
  "key19": "YYdza6mA5EKDPgkQDoUUdKjhsdVBF68wza2rs7ZeiKCJ4NYPu8XYfST3JoAnxHNcunY5QUSsEouQAzG22tRHSzK",
  "key20": "3BeTbGHCczcHBcYrdrJNFYzuYndNpiqdhFiKUeGTmxb3tg1WbJ9iUfWLyKQVu4cQnmWok4JVyRi2DWuinkvw5T3R",
  "key21": "4MdwL13wrjHjwgVALVMfiDvGfT7ASX9uBEiQNHoJEBov9jEJxEK5xxEUAbiV9tv1WMBQET519uFv22mA4tQEESDn",
  "key22": "2sGxjEj4rDaf1MY3Tb1GFZSWGPzdqB8MxfWvR772sZGVbcmCn5yTRCC2DyZxuiFEfxqqbFMzSLFabHbooptFGkWd",
  "key23": "5UqBU57fbhfCuJ1LKQ8UiNdDfvBisq1v8xNtHupVcoR9MFSiVhcChrfKnfsVF1cCizt3MB9Nz7FLMtW9ZNxJgF6o",
  "key24": "3PTHdoywEU6UqhEJP3j1eYge7pA1uVFk877vFMKbH6pbdp8fVh81pGyXMA5duiCsFRDp613sbH5hoaWBdbcEcKhF",
  "key25": "2EsrErxXJXWC8DwR1Xhzv7wMLPq47pSBq4pjKkxvVE912d6P69Gt82JT164p94Muo5T5pLJKaeBboo7bG2pdDdee"
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
