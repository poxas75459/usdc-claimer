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
    "2TsFe4kaX5YLePGaVNS5pHTz6wvtaNukZU6zYLQebYo18tA74Mcn8dEeXhWwvsfoQoi3ToMChkdcdcL5wNzL8qgE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4D3tRp1PTzi4bA2cHqkKgGKVWT2dyvjQ1pY81sK3TKXBoh9kZsaZA1CvVGiMZx94wmfAKQmEZXjMg91XDpg9XoEZ",
  "key1": "2GitP5h1oUbLYPPrd98Bz2UnVGCxrb6bvUTspsNaFNvBHXJJShHuJ5Q1LhZTXBkaX21y8moECeHL3pPNtZW3nQkw",
  "key2": "5CFx2hwwzKB2axPX3ktVXfkBenXjQUyTz15ny1kUa43J2Uzt7qtMEF3JpYXt6uqGK19pLaPEAoJvUQHcDybqXCh9",
  "key3": "2RCvUJfTg4rBkuuGoWb2Kq83HnJeMDJnWfam55igPmNZkMZAuPAkvm5jS1Bpc6aU14ReWKurb2ph8FhC24d1qrPr",
  "key4": "4rjV7aZnfs3zZurA5jkomKLQmvTSYSBF99uHJ7BxuNNyfkaNVuSh5EiqF9c3eCXvX59Eo6Kb9q1gsgbodW9be1Pn",
  "key5": "5SeRC3sYFawvGEiWX2bn2tGVFkm8quVvNe8WJ2EeeRoSsCZxvDKkmvqdyQcWABGkiR11JZhynADnYxbRMJG54yzZ",
  "key6": "42Hrs5iM8DgMkdWzsoAbPxuL1cFdhH5CrYM4AoPoPaKspCPn1345aA4EouDwvrewcYzdZmYzgWa5AeAn9fwgYvgR",
  "key7": "x5VbDJEoUVNLQ7sC8gSv4FyMZRpZyuKVef5m6bzNvXTc4kPPj6CC46PttUA37HVoLhT2GAMMygnjYcdMkys8fbS",
  "key8": "opNj67VTwo6dVUHmHqcMfWdPMwBxtNd3PYfDnvi61yU4ddtxfH21e3YmST2ycXQh9Gq1uizowE2UYg5D7fR8YQ5",
  "key9": "4ZneX9ULkzrWR5oMK4hxy121UEw8XoRbYaUxmGR4jLSFLHpp2Qxqp2nMBpp787Y6LxpaNke2C1zCWXJ6KXaMY3J3",
  "key10": "VY2pMVZcVSjMKQjZPXeJzywUxoBnVZJQgSr878rnJwKKerfJoaSzkvXEsnrLWwEtsiUJmYfoEmfQJo4SXptu1ik",
  "key11": "4CwrERYiYKrGijbEL73H562MkDyXyVghesXnRmviycjBHgr9629wV1VFnL46PSNqCYJoe3R8vqbNE88CMs5upKdf",
  "key12": "47NpGVRu6iN62wEKjQtCDAB35K1fLb1RwLVF5ActFzZwbccDxVRSEyGdbNH8REwJzt76VPMP2yXJKcoPxC9sd6fj",
  "key13": "5NnefpXZ2pZCZW6J3i7QcRfhqCndeQK9yqPHNBmZduSvTgQiLvBPukyjYDSv3fWPxsiCoPKGNscptEzzjZdWk4UU",
  "key14": "638FVDvCxKf77whGACqFrvm1tTjC4Um1qH711MxdJ7RNvUrqdbXdN8B2smmPo6PCEx4NMt7jSq42GDVCAMCW5LY6",
  "key15": "2r6H82jatxNLspaTB8UKfRiYWbnZLH4reSDCcAGQfa2cTmuwUAYhc5Yy8GyeD2Uh4ws1AqwLypEy52VRdtDNRpyG",
  "key16": "67W1fmvLdSXURK2E2MvRGbuoM1k8R1qgixXqJzmdtiGqZSmxW4uoXe9NmCD3mJTCRi48wuwjupz8UBPMcn24vKgZ",
  "key17": "xxRqzJLPUWeT7bxEsdCS1HY2ARyV76wVDPTkH1SQxDWwLjE5znb6Q8RVBqUbjusi7jEUBk34dXSLPvqDe4YCt4h",
  "key18": "4HcwKCmfEw7q5TLUzd92hR2oADVXfgq4GRcDjexJFwLcBWMJ2WnvrwuRdwr1Ek7MSMgCuCq4fxdpVd6THkPgSMQj",
  "key19": "3JovKjNRGbhfMzmyjk2hxZWHEEQEuxS9nKXdQ4eoTKoWFJhRqxhunm4XKw9AaR9EWmTHtYynTyFKgmYzmiDsdBcd",
  "key20": "2UoF1e5McYPG2ZPUBnDnfcV4LNT5SJtmPsyHCjNNewKu9kmNqiQqf8Xo9oUMmx8U6dBRXmuBUeLWVjvYD7BmYAHR",
  "key21": "bvCzGSPCQkbcxqiC89Z4VDLhrRENxRYoKBqD25p6DMHadbi9fr9G8GqwHtEeZHvs6ttSHmVvcgu1tDQDF2LaB6H",
  "key22": "5UU8wrqnwhDyMvbntznT22ZYCBCKUe6D9kjARMk9HwdrKxDMoRgZJLpMu8yRDS6cpttr6DWKdkRuzJx3xjzg797G",
  "key23": "57ikjQmBqzRhMW177QZQDzYVKu6yVctevRjaaerhTid5YgE71KtgZGTJyfczvRhF1XcZac5DGrcR2xPBUVdsygab",
  "key24": "kxmeDhQQwxNTB4nB1FEoNEFmiF1q3Wv4vGmGPQCaqyDq1DJr7VsQjYmr5naW1Bk3wbzCPB2on7RZ5nkHxtra9He",
  "key25": "vPNwvWLRqoHEimDKVPtPRyKJ6B8nqGGcQeLrXkZKrvk7hBjH5VDYn5vsrea2Vx5wtnt5TBkcag36PRF6TaFufPL",
  "key26": "g4spqkaEymCJ27Awk6uBNtfUTs77c7x2B6NVpmW5Y9AVTkXFT3UAoiwhHmSMgKXprig9okqpFAaH7FC1cjWL2jS",
  "key27": "unM5d1stVWrzjuhpAcjFcLcn2DyYFbh4vXcLfvcBUTd9xSYj5N5fn2D3r1ix6rN6LLNHrUKRVweFTCh5gRCpY4e",
  "key28": "4NXSgjFnmHbUjkzkihKu8vQ2oMHcqKVGYmezCs8nP38AdHVbgc3QjiBw1U1RHoh35scHX84yP9xYtDWi1u729BL4",
  "key29": "shuWUsv7AJxgwBquUkvyubpFG1qmVTaT4f3jp6Wiwd4LMw2U3ZfCgc4NwnobMbVzDYfexfRgcPyU1WeHsTyggUh"
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
