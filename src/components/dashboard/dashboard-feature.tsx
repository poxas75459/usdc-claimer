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
    "3jYW9qMSwzDCQyUgdcGMkCb1FWKCVs3QYLi2JhxRWk5AtMSDTECrKMdjSSrCrVgS64NBWnUhRr43dYoqeQwHK1FQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jeA3UvzpBVdaShtWWhEfteS6fpC5v11YrVqadxvgg4odA2W1AtiNGicwckZtU5rvRZeKoA9GNr71vqSJkAJHUXT",
  "key1": "3aYk5QJXZiX6oPK1QQ4zD2z5vEURKg7gMQFg1FZzMJLASNYXondDiqr3BZut6v782dRAdtr7c5uvciLWksknK8Ao",
  "key2": "AC1cyJgZt9DheoXRf18THtskhLpCGg4oJHH3wxACcK5TEazFubMzXqJxkmixXWwk5Uxwn97gQgUyjDM8EQmuqF5",
  "key3": "3paFxjY7E7fw3jCj5T2dBCChQxRwL7yLo1s3LVWwu4EYyWyhwArb7WScaxpbkrWA4uYJj5v5v3EHzjtPy7XtanRW",
  "key4": "4cBszAnP5xAKPAuRrSo9tFnJ3xULtAE2K1fKrTFAFvMnHiwA6N7K3X2pme94ktnYcSdy2U1wEq3nxetH8GMoJM8e",
  "key5": "3SPKz4WdE4eQkrQJhWYUmxnamsQsNLhwFL7fVLnALJwCxavhye3cqgmEtP4QomYFns1RjMN8k89UzTyXPkq56zkX",
  "key6": "3FKVSt3Rh5sNmnw2dFgw7R7PXF9KLdyZ8LmTf3K48scg3wJjAvBFAwQRFQooCGRYFsKYyu16sKtWLj3r8viKQ56t",
  "key7": "sN3EDh7duRAxWf5o27E5FhUtjPFze7r3wJFWzDdHGSA76dt64bsyaUF81YsBLX9YGT6fuwP5eGK26kX4bJWDgsW",
  "key8": "4TvyFcFMibKh4sSd9yAonLVHxvxLB6pi8ukGfQT3JdUdegHecdETFNg4Wgsgs5J2T2S1yVCX5preBbr4z5TfYeBd",
  "key9": "566CnWboxJ97EpkcKU3RGUnk7a7TEsnA3VTsvRkWZ3VpFb2wFpsGqX6QDVTuio4C2ieJ1yztYAYGjepxmghbfgo8",
  "key10": "33MYnJQQAe7UM5WqApB39EgZaEFMmRFCSpq4142Ab3E9enDTQr39RHB2b7k7WHfACkDadJ6J3xEGsp8jKbXJKdcW",
  "key11": "4Zy6pDqeskfvgqBfmJceFqrzDWD9iqvFdKgtRCS5pJ6tG41KR4Ss6xy2TapGAJ8nHLLMZ4mpETGkdmLkigov5zUy",
  "key12": "3dHodHWaeY8KpvZxi2txpjtaeNyzhd1JBUySwn18k7ePjCqifuY4xLtGTo8acKgVcWgFqT6wxhG51apxzo4fPdED",
  "key13": "2m5yjjA7kYQq6Hwod8FVRHhjXRHmkCs1fB22ET4hJP6zxP3MVm3t1KnLAaQQmoU35THtT5XnD8bPwHutR79stRKr",
  "key14": "2SBmw2NNGzuNTUedSzdD9cE9JvUUyiysU78ZybRTfe2xxiiPff9xrfUk8tRL6EotWXTYX4aLU7EFt6HbiEDhRfzz",
  "key15": "5nqumYfpJcZqb6hDFuGPQxr1GwZQuLpWpduXY3Q5D4YFeLNacRiNnvgHJwZX77zFsYQwf84LeQb3AGDFknP4XJLB",
  "key16": "tFx5kURrEB5joZWEv1CAE2zZtQPMFv2UQmnRnQVePVhHx7x35TW8Mrr5bvcsyXUHvgj2xTgQBimUYNQNCiasCG4",
  "key17": "r5PkBjBz77JCYVTGAujqzF2JLDUPq5AQ6NTBkc6P7Y2J1YdpEz6kDvW7dbm2VyudR6GYzs1gdbf31kU5VxU8A8x",
  "key18": "bqVYZaH1ZrSdJLFaHX3Aw68rgWbSTM69Jt9Wdy5SysAEq4dUkQ7rQYqZrchRJThUb1kvhGtPjUVmrAZcgcbZqsE",
  "key19": "5GVBud4ortbs1762K9QXDmZTJAcafQWaKh8F1JNGjGYefYZrVpLuAo3VsfFMESLjVy5vU3ACVZCK8xWfa8uGYkKJ",
  "key20": "3d1HkRCojYXUHULZBGNLxoybQbhQztMUjp8CNuiQE1VD5k5XbwWzx7kQ4rHF58XEQF7Xxf6aAU3CpMvXCLvJu5yn",
  "key21": "2kVCGRCNe5bpBHKQ8Z7jLt86YBm7zjUmQnX3V6Ubwh9sKdWu3UcNqbUTXLY3KieVQ2yJS9fGniupTrSiHUTpcGuS",
  "key22": "3xDKGUzmPR164U4fdtDS1YzUj9tEDowSEx9JE5ArMVkecDY7yEyYFa66K8pwSwx8mManntfcyZmUz8b3qNdvfdBg",
  "key23": "3ZveVayzYu3KCRPq3pUEMQTfeNqNGfdKikuoQasde4DkNdjLpZiCRLNvNJxSRGkQyv2HFHDJXjGUbk8wDqWtUbbX",
  "key24": "46EsAF1pPmiNQvs5UiUzqZjbJfS6YnuKtf2V4BfEbnmkYvqR87x9M8nYvxZm4zArDg1d9VRGUVMpv1ihNwkfGGXK",
  "key25": "2gQamd6ib7dvbjaGbsov1t7tq37GK96Kq9A7T5VFfxgj4fK2VNuFMkhpaw1m7WrQqgdPcZwPEf9gH5xry9P6qTEi",
  "key26": "5QGBmoVaLPyw7AwuharGt4apqr47kEoZFiBMNQN5jFn41oYLS1bqRHukCdEAsx6dPZB5vnJyj4f7mjGJAy8XYb2R",
  "key27": "4F4B5NjutXKDZ6bnzzk9ZebdHPw2AydLSTE2yFHnrS7cGB7yQtYoM7W1Xk5C5B9HZHvMURozeQ15HvDoeTatJEGS",
  "key28": "5LKBYShMMKXDEbcGRQuhkcxXC4qdNL12S4uh2sSXJvsWQyrjk5CuVtUYjnzsYKYUekSmDCYK1ciVW873ZGp9znZr",
  "key29": "44mx6SftRHupVk8EohKdUSjJhFXJaGZA5hZYmxXoabjXWn7rG2Q7iWNp3ehpscZJHJJb4DhhYVf8k7AmeFD58yUz",
  "key30": "2N18yyJsqVeeydKtmJJJmiFY1J7bYpYd5Gfydht1ETRiv3HrCXh2FJjL1AaZQUR5XWPkjNTXi1g58Nruizjy1GuL",
  "key31": "5M64d3URLgxvn3JNdmkuEUHW6F7CdcR73SrNMs3pZ86ZUwKFcocGoZon94ZHC8fbZsFTfCefkcSEcyTFT13mDveU",
  "key32": "1cXu987KTpoKUsDh8nrGZ3Rh1L6Cdt5oz2ekbPx5wdPUvQXfXL94HV7d4NrH4qb59UspqYTvDzgCqCzB7NHyHQs",
  "key33": "5U9VbM813EveV9mjXk6nUqMWeWjF38caPYxn8A1KBgHi6uYJHJW8rmy8Tn76ePfippdFtY7K4ZQ4c1WUfYyg4a4F",
  "key34": "4c4n5kkHQwizTNVF2kbaDw4wdwnUr8AcyzrfWBTyWR3wjbTuBPAgtC3bh4p7DGBuKkLjRTvC2GUVXv6xSK7MYcVi",
  "key35": "UEe9ZHa5RVwoxoqKc3DXDRtgSDjR3UsjWQgRQHq5aRQKBUHU5vrjup175MY1YPRpXXtiMQRxehtJrXJKsTKq4DZ",
  "key36": "4UVPCELnyPTcGvPshBChvEynTkrq25yiTupUVBN6Ssg7TYY8YdVgRvmo9VNxiKdVWegaCu1qNLSpujE6uSUHceEV",
  "key37": "4Ta22FXDTabJLVQWCsU7idqGmCrdkAP1auJA5mV6GSgevWShXe3kJ285JJF2eKDEvVg99wvJNtyodXnddq1L9Dqi",
  "key38": "2W7UNU2Womx9q24SLeXFUNh72ACfGPgaCjUuCznYPXV4RWi1KTcq5hjXWU92ygvUha5Y6pDj5kmYhrMcgxuBJbhE",
  "key39": "kvjosqPquoAbrbtzZnnw5joe8kqFjXs2D4BU1SKfvWKFigtsBwMxtKWPxoiqXW81ARqmYLWyeP2xjFVQ8z2YWq2"
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
