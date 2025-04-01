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
    "2m6eHMuMCjbiAAGESX4Db7aR3X7DkMEM5wCQhsTaYLuvL4CgJC4LWVHPuy9Lzz8GjQvgvFqNDuLPVw4PVK8qVyvK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EH5Twjb4xkwtJx5vZVtkCBk2hJfGbpQ3v65caF7cMENeaALhKexEiHjSJrGpG9adxgMSTMYqwQArWZjJvPrzHeY",
  "key1": "2JDCyxcBpLU5ufMxmd94SpjcrtELqeRf1nKuzxUjveNchVeWjy4Mv2Lz2Bdaz3sXpvNizzfkvhs4xNb9iy5H9Bmp",
  "key2": "zWveMQZLbVApFGuX3oQ55BTNniRPZQnQJbb2aiCAfgqYMcfzKSLdjthvKZ6KB2qPP8UqjzZzHxmhdLps8zUgjUY",
  "key3": "W868ZeijRjRg9ZL2HM9VxVftTK5ZwBbGjeYBRap2osE51RTwjpNm2MtkueYnt5LbEJ164C9SJA2tpge5tbQXYcV",
  "key4": "3ykTmTJE3W3QHaQGvz9j2dEp7yVAU9Ha8cdNc22Z4boC3koMiTJ441rM44g3J8wqZUeyvSmAdMtzFQd12r2Z7p6u",
  "key5": "4CVwk8mPC12zcRbDFsqUxRkiuPTauw8EC4ZjpZ5Cwp3ikw96TXuKt2TCMax7zTrVQQvtXV1dF78tYn8fNbfcU2NR",
  "key6": "36j1kbV2gMLBW15CpN5zSSWVrNqWvZi4ptZ3GQ2SxcPuKWzZBCy7kSebr7nQ8cgtSADjQnwjKkoE7PjJ2LhRWRax",
  "key7": "9pJa6xhXWRwUCSarw4KtFPEGVHu2RgvWnwhVv5zn6A9YXtX3g3KnxyMpBZ9pQ4D8LKjrQJQqECmGJd5QbwzYQzY",
  "key8": "woKFAhE8XVx6MjYfJEgtZJ1XQo3RAAn1nXtTu67Uk97v2UzWufZtFELYg1JatcQqXWjjY4rFQcbetSkKiVs3FFB",
  "key9": "2oPshh1RbVedfhsZBXQXtzRojRdfKUKHFqLkXHvpEYXbkMuF2EnJtARjWCppJJscRjfe6Wn64ayCy1ZEpnvsNXhS",
  "key10": "5PvGiLcpSnLXxa4TMZs5K4FDhy6MyfiNVhcegg7cxvvmVMUQrVGJuTsHoLvmYGNoKHt41xXcJKs3QkJu3MvPCvjX",
  "key11": "4g1EKRKPGdNskCPUd72goAAdVStfjCKnSy8NYUFoHSyzo2STwW3gjqn3jzo1EaE3mAhHXKy1tW4Y2QWVbhn4mtRd",
  "key12": "5iDWvVgQ3N1SypRqPhyCWNvtZfa3Nwo9pAxQAhMRHdMKfnTYNnHEeLxyYr6pGEExzGtpRnjkee6pdSQ3JMvWLRRL",
  "key13": "3w1U4Rhj3EmBZxUYZqbukeTTwAHf7WkMQdqfe14JRmhuxFLB3vgoQqqMviAamQntgMptxwpqK96qD2B19crCMf8t",
  "key14": "2f9eMwpAkdsWr66iy11MVCWGh24EBV26ai8LAJHKTyrZyVWqnXrudzqhYcPmr4DsVZKz8NhmxEtGKZxTC3vDxN13",
  "key15": "3WeMNVpe5F95ee4dcEsUbLNmvb7XcS12wsVBNZ4bw83pzKLkZxj9dBnXAMKyNiS4USGeSBi5vfQbQx6oHuEH3npR",
  "key16": "AjXZx8nCWPojuvsF5wgBxBvCdx5huNRVYjgiyA7R8gfdqnDsBdRd1nBfKbhasMEd9h6LQVLNvDGDCLJcVr1axUA",
  "key17": "2u4W3d4a5XXeKuwY7Z687yj5mVeiCqkhq9EfkrCEfMiaZgGTFcgvC9JDXnNGkgnfJQ3pWxy8BtrHCZ9qnknST97n",
  "key18": "3tKBWhG3Ji3W7eSWj6jBKMJ8nHwfq76YKj6dDkAZoShVwPSxvXwx351FAQAWSkjKjUd6b1CaJcpFzCsK629vYxtL",
  "key19": "2WA3VnkYmrTNahiR5uUuxrGnj3TmSvwMNMWKTjhfdhueShKcYT59DNiN41wWKE5FRLciGurqL1SLJV7ZyBoarWTn",
  "key20": "4UDbtdigmXxUzwxqFBD59FCL82idm2R4zz9635jtjhdb4yTu5mcF7gHaEUpcd4HzsVqLAXHhkGuX2MQKdVvpn3Ur",
  "key21": "49KbeJs6Jk3Ax4eUHEwNcsNLpVjbcCQTqLJRwo7qyVqDwbVbY6ydqdU5xxd7wJuhiJWFNbmr7cwLmq15wZ81zDbm",
  "key22": "4FQ6j99BRZFHWZhNQVoKjt6w5SVMrKDDLQnHnMMUAruwqgeMwwTKAdpNCy3YxJgR2wgE9Sc514HPi7QNBzmkYzdK",
  "key23": "4hX4tcorBc2xQAf2P7Aq4gq6JvxZ5E1AiPicWZCAV3yo46FGieYMWevEtD9VxpMTtFRT9EsbYFe8ZCb3v23LAu2H",
  "key24": "3h6Kd5yBJ52Vk5LkhAWL2shFSuf7p5fmJivvnuvRuSK5WXzBfLs3fMYC2SyPr4z62mJspyUoYN9Bk6244naTo7Nz",
  "key25": "41ppkT6j5Fv8jqYtSekxFfYFcZjPuhTBpJWwFJF1mu1GPEGVNzwA6FgUEL8jBnchxpB7quCmzniv5Q3VtnsMxmGP",
  "key26": "2MGFBfgjPsLVgEFLSmm4b7rerjQ13FKtzMtkE128YKpnZshq7Q4LiQpsg3PjHRTHbbF6LKyhueSc7xhm2Nrk8RC4",
  "key27": "3EisYhTGaKfhWACQyQQ3wWUShQWRfHdfnvLWFqU9ZzJimeBkbP1viGiZ1KWxaEow7jjf5yLJLPCohqtCSpBAcqri",
  "key28": "4oKbuHWLz66JWNJ15CFoucLTNPQDQ2mX3ZrCzWjXQjpR6DnjrkQhrVUgN4ZfFGbk9YwZKaLqkmwvntoj3c3weLKe",
  "key29": "59GoCpD4UuA9kkVTUmSsJnDaoqZjpERYttekhHvuYyZgebNFvv4qSBYdRwYr2oaajavtF4B67dAN4oVBp5SqZJEK"
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
