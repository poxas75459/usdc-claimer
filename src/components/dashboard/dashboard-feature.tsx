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
    "5diJU3d7NYPbLgM79WMv7UNinq1uZK93br3MREA1T3fYYRd3oD4ZgDjAwfAF8fB8pBi5nQDosuxGSYWJ9rubHYuW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iN9x4WWKaQD4NR3rBT3E95BrPUMn9thk4G5htj4uAk99eNFfgASsRCmityhYskV3whVhdDR8dQ4SXcsDKHEKWYy",
  "key1": "5yaf41DArQqMGiRgnMyCET5bob7Jx3tnoenmbLrXFiGNZr7ZVpYVgTa8z9ipF9LWCkvhXpFPNX2jhvTCAMCN2EVo",
  "key2": "4g7CBriMDmkyHxpDG2kPEGUrDtWUH6WxuFhPoNfLFmrPyFtzJUsZB4UxV2tEYYHQVVYEv1ireKzpyseFkCqgfRHF",
  "key3": "JA8Vz9xunT4zf4Amh4hm3MbzwE3x6MmzMfxFgwK6mZ81pz76tYMR543QZ7fyhHC7jmYtoVn7SHjmLnx3X85hvop",
  "key4": "4jfNqxYR9v92znwTUAPCgpii8ZKbaCE1rrnQnYc12WriSyoD4bK85W2raKZTY25nruPov8eDtjA3SqFWcaezHhxa",
  "key5": "3QUSJvRMLsPqD5pz2ao3HW2PW6NKqEeENo4TDpXnFSGNe1FwxRnrhrHMecvtZ7JAFDveiJ9xVTZPAAP7Dbm4FwLk",
  "key6": "5qrbExYs42vJKkCzpsuKFncNKJZ41Fg6XH6ETRqQa47TgDP4wS3TyLZzZocWDTpdwu9ZiyFTyEjWr1QpGYAtTTfa",
  "key7": "3EFh3j26xR1GWvkhLp5rYsRHyjPccNJ71AYATBoUHrMWdq5qsJDUaYy28sULsb44Ho1RzecxVw69RbJ7zeNUugsJ",
  "key8": "4PxNDufqKUwRvNWmmM5cGeAj6NXTyt4bUwxCfM1TQMSYr4jK6qhVaqQK8uZmqfyeVDkesN1dCQvz6hLiGvmY4seb",
  "key9": "o7fEWo5eNxFYBLjUywpUDVLL9dxoGdikX2GEFwpLpDBmnpgdvVgQ6jPr332TyQw2ktN9FzW2snfmxcHgZZtJkHu",
  "key10": "4g2NnoPndRWfCghgudaFhEwyS49QJrctZ6Viy8Pnchwix3ncLStEHvjcTJ9JM7F52MMowTNTZtohjTo5w15kUgfb",
  "key11": "mo1wvbPvQyXh4VcdoXQVkHvK9ByzEQ2QysgNmdP1NhbNpAgTaw9ZRBf2EbiGFx1ujjPrJGVuteNjAtr2gGRDcig",
  "key12": "5Tx36nrM5NZj6nSfU9ABFMSjEq4BzvPViT9vYM3TzuX5tCN4kHku26YAVm64xvyvNxXcbVLhDHsf1F8M2xRVtz5T",
  "key13": "5NhWToc4E1or87yS1a4bLDHZhgTL8uMig4H5Htf9vBxbfaZwjJiWkibaeZjGLaMxLbDpsWAtXvU8JSrQ51bKq7ba",
  "key14": "2UGWRQXcWuogWdg1t3AMkjg5EzeEe9PbexLJZeFTHdVhi6NEXTpRMwTFvWUxTKUNHfQb35zuoNmTSrZwS2FuPedv",
  "key15": "5NUvJzZX4URv5PjWJwit9ZFTr2oo7TK1YtCWN4Fhbwj3Vr9Q9xijeu8sCTrScucmJwcckRf3HFSPEFkJWVfTm9SP",
  "key16": "5Y7EWELoVLxghS1ayo7CcJjrWq3LZcbwKaeL38CCJx781kBMtinqgkTWTtydtLqwnTn9rBQRwucffHUFq9uf2zJ3",
  "key17": "61ke1BTs4zCqswsDWkfqKKWzBBarTFcrnm2XhkxQCF5shzkTYKFs3KzMdZZLUr2denUbAKhANC1YxzKM2C7oyG5E",
  "key18": "JjUU6Bqsb1nsXoKtzXqEaLKNShCksCDKXAy8YHXKsqtnNwbzAzD1Uu53RDbh1KPJthevRfajzX4bxUSTSnD2wem",
  "key19": "4LWPpZdSmFs1seFu4wrS5g9emraN7VFaRtdMCRWA1WvKpHS5mSzDqDPndTbYXL3LgwuSsmy7F1PXR87DMEF7ZYkG",
  "key20": "QAevesAg5YoxovF7aeULqgukoPFWcqQbuj9vXjXtgZt1mJETm6VAmbdsuedL4TXN6tdt59Ue1AocBJ14TVvrmc9",
  "key21": "qACLU2wEJQKaGVaM25W8GXGQCVQUAMVw4vGpZY1uFzVuAZm2yqjKNq1qbZQh7LRq35HvDnSPcsnYSR4k8cd7wYk",
  "key22": "3ar4ewqX1Z2CgHdp7DYtikiqLKHEJJciFjTCpkimvh88FAwkmgkQcYkAVJoB2eLKqB1EpHnzeQFWjPieQAouwLrf",
  "key23": "3ERLivbAY7QdjX6AcDVXrzpdqJh8QiPaKvgXhAHuNtch691skbCph4UZqzUpvbaqjVJmPys8T7jgJwoPnFSwKu5i",
  "key24": "4dsfKa4JasQmcK7mt2ypLbcTNdjy8Wt5XQq7g8U7HARDuFW2yyZHhDq5L1DqpE7Ypt9PX7xBKYLZ1Z1iXzqwSnRB",
  "key25": "55nc9FjrwDBdy2EaubnJ8HWekhC6LaR9G1RiU78JgjGUQhXhB1jX6kHYhJzjiqRjzaEBEBvfjKeU76iJmFpfKvMT",
  "key26": "3zpzYn5noRT8bHTkKizkhzbPvHsJ6zbEUDY32SXwDfzW4Nx3KRQxqpVNgAA43H4wMuTsjGzXCubTnWh2vXapFW2j",
  "key27": "3Ejm5gyz2uo3xQBJnGWtJ6d3UnvSmdtignNubyNhtkn4zhoDikCotdyrk5RWwVzEVRdaj1cQj1XryHQrDbBwprvM",
  "key28": "35SmU1o86oB9ufgjSB2LSSchLBZoaAsEYT2n76mjdCGZsHm6fedNUxqkmmSevC3hWDvpNxJMg61EMtdpBXfdf3re",
  "key29": "2AExQUmhmpE4X7hBQJUC3zcf79aTbze7DcyaNvKQ8v8hVeudHEJTMWhRzeipbpPRPoFGGGtiEdzasUq9AQrdMyHw",
  "key30": "47bs5fyUQxjLz3kcsTYUPsiuJKBpQkLfmDJBTtm6CajpZrJHJgU3We16HmUEKprQq5ikEmMHVF7zquqZz6cGaCfA",
  "key31": "36NdXyWJ69ERQEJaGVk2U7rsTecgzVDdNRWTx4E8SWGHwxwBGY2VZXejknFY3BURLpR7hJeCa5wFqV16fdq1vrFw",
  "key32": "572A6GtvFKbgdG7kDMTYzHqdTYZrYL3nbqKH21GjHChNbpJmwUJF6BUV3PyMEiwNkh1TEYcxG7JSvELXKM8etu7o",
  "key33": "47b9MHjjJt7X2xs1FSftxpccV2ewTcQZpWi5ebRc5wV2ynFPFZB1c1rBdEkcbknoUygTM3KW6eqtvEjoe3KZTwep",
  "key34": "kfBeo8fMb7WZ1SHHsFut1pQipWpgEgtLfhmMwxwGjtmjMRUemnpRXm668H2u8MN57qpF2MLNnviFNP5s5GAVBNf",
  "key35": "2F9WDaQxKfPDKZDXtcViHT4ipkbcUEAdWqKaZXtV3MtqRjr3SS1ixcUiYXpwYTtewvXCHnaiXU9bP7vjgcVXTTDi",
  "key36": "66WHiWRcvM9YvSczvF39e3eZUij6CbYXnHJUghsFHSbNwoyuSAnXveiXkWr8HMfLDEUko2v9RtgXCdvhEqffX1nc",
  "key37": "62x4cxtSDvdAvEAejKzgAUToXNyvkcYygF4HZivz7AKcjuoZiH3p4DYaCuoUJjej4NrCKozyMQs4tTuUbG1QMofX",
  "key38": "GXzcQkbRmX3zBVXvLXuubHb4A9fGupZsnJrAJuMWY7bUQUVs6ZPvozBvgPV4rKeQuwVoaLMSksBQTF7m38Bxhc1",
  "key39": "J52JoVNgaZUwkXF1CjP4RbKHnsaXKfky9qAnJuNPU1W3RHkzNaEexXAJEF4tELm1CrRvZhz6Jyt9sCX3JfzWhzJ",
  "key40": "5UV43qiei7XVuseMS8MegVmiAMxv5B1XB9TN2PCiRNNvE7kWWimSkJXsbAMHbaVdk3B37i5AqQJ9UCxDGJUneLFu",
  "key41": "4R5rUUiahqKL4UM5JS73xUiB4u36HcgYQfsve2giPTcfmfe4aC5KDEvExY4VJbcFeB7wi3RiM4h76rXaibWSsHZ3"
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
