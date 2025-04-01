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
    "5h1vEeU2NSk4uHbFYWjPZUFgzZTwpVkc4MyW97paqfeVbnj377Y85UoFUcsyw967ywgKvPcJyqFakJ8dZSJ9tnsy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zvWwZp1RRpexW5RKcg1tFpXVNAYUx9XmDQnAD67gmpga1cqLVZ7szz4gu8Vdc6GT4xnP5M7T9JdbxAsQNvRYqy6",
  "key1": "DR8Nj42JLWrLEXwDAj3hWU8s6UC5Rf6ZLRviXu1CWedbn5WvZDz7RN36LNDqnt5QaqcY6An88GpsZic2uZ5gotZ",
  "key2": "2Gng3gG8TUxHC4bz2Ebao9pj56V4qfppLhWAgdecBP4TyN2DkapghXFBHYyPhYycg4GvEKi31xZgeUmogcSMUx3L",
  "key3": "3UV8kEPzrR5DqknkJLBpbFeNoua5PViWuLxpcZHSDsrn7FykBQmVw9sv1ZGaXkgvVtnpp1aSsvSNTwnt9E87M7E2",
  "key4": "2ChiwiXD7BjndbjKapvNaooowcbcca93F5fwBgfjAYqa3gKqZi6TdGSSQiJUY6pk4xMqsXj63sg379tJ23srMJxB",
  "key5": "f5QQLSrKiffCcDA6o5dNAK7hNtFvisWihRnLyFNZqNfug8j86s2PZFnteDjfjF7VmdznsxDYs5EVAgESvKWdpwW",
  "key6": "5gDZat84tfTnnhfp4gNCf9s8EUAKUEpjm9oSQxmH19hYgDkS6r35GRLLHkLG39ZLiV8u2wZbaSx3NQdKhoKSbqrK",
  "key7": "4EY9tbg6gaS4c4ref3tZ6jcD6LYG6vnFGdRYzYx1sgoJHk6j25Tm26c8wjwb3CaaYHdDukHPX6RoubZH5wbwMcCN",
  "key8": "3bJAVRJwZCMX4HMhb68zZzsytap15qUntHoiDRVZ96oNHRrCaMQoFvNE7R2LEZtM5ctWeKw3z4R4ipuUD69xBf4W",
  "key9": "23JxEdWX4yCbg7eAC62FdCcRnvwsnBD7F2j7up2urKx8kCbjRNgqKwh222ufJrKnxqsysCS2JcwUGLQfeSXn4Jxv",
  "key10": "4V8hHgU6YyuPoefZx3wj9coSMyAdKLN9jBVYsNzVUAg6ncEuTm49sLXwGz2wdWt5fp6Xf9gUAKHbUssYkMohFAmL",
  "key11": "Wty614ZexmYkAk7gPRs6z3e9eWkmqTzkTWiWZguxQ9BohNuVacnm3FA8sBs5e1PwBWGbEXEgoMbsoRyvfDuvn3L",
  "key12": "4uVb4M8taxySrWDLEVfpuYThTCKpCvAQW2nt592e9FPEzN5Kzfmn6QN2QxKGdeDcXz11Dc4SDc78U6sLjB1PK1Dm",
  "key13": "4P5JohKLpGdnxEoSKg26gs7LsRDXEH4CWGU74tZAJA4fttNhJ8MFhUaXk4ewjmDihqX1JuUhtu1ayVSvCixb21Ym",
  "key14": "3XLgFii8rX34hQub1ism2rvYcqFt6yndU9xzLiPr9p91ZHCtt2B1dod6iMr12qRiQze3GgnNcpd48nvmj24MEKpw",
  "key15": "3HVw9jKibn4JDhLNmxKuyrzZ16kC3xYS4Ls9b9VfcgHwSXoSwiv2nyoi6d4jSjQMujeXWkfjxWUGdgHZH7thGky6",
  "key16": "EKfwkjHyCvVJccyjcSFs4EQyWVLYVPQWuJTyZY1RgVXCiZ8bYFqxkhHNTx9HX3anNAthJssAMqzYBfFgnMH6ALV",
  "key17": "5wa7qv3VS7PqywQas8ZnmMKhmbDB4HJ8YqYc7JRgT19Na5o31WUrkdgduBvKeQh8DF4QTkLi3VGYQdHuyceVd5dZ",
  "key18": "5Qsxoyk6yC3HeWu8wo8sGHL1YYD8BGfe9EijGnMzQdBysDEQTHiLjyTsA4xrUcu7GTRsVx7m6J7eMaMMruZsSFQA",
  "key19": "qG5K7c3VXiwaYVfC7WwV6ENw58bTBMeLYJfMQbGPhutMXUZdngMeJ7vyFKzdh2hebQ6wBz6kcdJc6pDsokzfZEW",
  "key20": "4U46abd55AsLmJr8upmggY9vypn9tRGQFAaEC5pUkfoGd5NKXWZHbJYXSiDveR3FQQ9j5o12SBCpAdf1NdnvqRjk",
  "key21": "3a2g4pcRsdacpSSFPupNfK81PtZj4nLDTrFJ19SFijiVWoMBHZuJYdScryCUixqkjsUMXZRkfWuwnEtSHNGaAxwv",
  "key22": "ch3d3b4JujQ1CsX1YbynbD6kuVzVECF2f7UAJF4XyEnWSA9VCe3voPKTKn254BKHAZdnLrQq9VhMNxdYJw2xMe6",
  "key23": "3SB5bRVKcMHmT4v92MPSBVMViq8d5fwAYYdmPdhZR1WDxRQheDSGpBWbmjQtip92xHijAEsgk5ypL7SRxbpr4GMP",
  "key24": "3z39ynKdmiNktU35SxaHDRHucMC5TFsTYWZGGNGqPoxX7cHSySPFRfZ4aH6wzpNnqQ3W82UH4gAzdxd2McYtY1AL",
  "key25": "ozgEq8J2Vo9KDUMiYwgVzWWfyYymVqeW1Xc7DGVB6QCz7rAw6NVwDFvygPEf18MFKqYWruwwBVk5YnJdAuRX33K"
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
