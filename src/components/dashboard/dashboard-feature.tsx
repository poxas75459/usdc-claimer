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
    "4nCTn72aW6y2h7pvzFZwMDMnGMUaX2TRKrCZiwd6UxnZWUNvd4QSPejtrvAmJX4L1NVAKsipXs5ZDnacHhVsicHE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bdFeTmwa3MG5dXnWDKUCzt57RtbRuN6tSkWD274zkPAyvfwxTdnL2gM8LKVEMYFtkNC6fydRYouNtgyqB7qJpE",
  "key1": "3a5RcCWawjzM7UXoU4xR43N2TTUx7AhtyfcKWDCjxScDzrdAJntnp2HpvSTDisy7y5cmKaM7uybU9tA5amPNnKMJ",
  "key2": "4WCTWgvq8xRfochuxWVvShs3mk3ya1pcyKrDk8eRFpK2FVHkpKhLtXZwhsxJFuoD7BaVbB2DbMXnxbzxwPUvDkYD",
  "key3": "31CUxG1suKrBKoST9yWrnQJxciNMU6zrUkEKxdVXLRnpmWXQqA3WSGXw7sFMmF3PPtGX2gLrzCXGYZq4WeSA2ZSz",
  "key4": "xiKbwtmieHKLzNbh6mFjtrk2EqqjvwHZPFNxFuJVSxtbfSFBy28YGPQHy1PNq6mi4boCgAKfV3Nf2DzQ3jqPmHp",
  "key5": "5AT4pX1gXnUEU7KWXmDtU4cLaPJb4frAmtYk1s6unHuE83zwjcx8AJ8ZBVfDFcK8PkwWghztBWaXUkVKDTJNwx7e",
  "key6": "4puMjfE7MU7ygotypKfRhLz5UXn6TbzE3F4Q6w6RTi9pWhxL61t7MqkEkwepCDpB4bMKM2sC6cEFckWK2gnNu1ke",
  "key7": "RAcz264JgYxLHQujdpxhrNpgWUCW8bDmfksQMRpTTJFuuXQ3JFEtveDT5yrWPgsdN34mckHZCk37Q6zhDERpDAk",
  "key8": "39t7Jf7M13oyK9sFCviy4kfeAocAs3KaikFL64wooSXmkh69XsukG8z6zhVNbzATsVLLbWVaK5qYVA7yEebn4gYe",
  "key9": "4Cr6pDNLswoG7dPjuW6UT8ikQUW9pjVQpZ4pdgFE2pPoRuUzUufhrx3WxCYDmYuwmF42TBHzTPzrgoA5gLTQGZUN",
  "key10": "659D2xJ818YYG7vdTQdGKU4PfUSvr6xWHYzaboJU82pPxpDtSZcmDwqaoDsTJeeeCazFDdRHd918XQ7UCQ4V66ss",
  "key11": "21SBPVq9YeiHdhpoUo1Af6bJjUqNbqP53BpabvYqPmHe4ctZFiN3CkyTaCzepNh6ko7qybHgyMJX8mjzJbm8HTW2",
  "key12": "4FYDsGRYhs17PVxWuKskoRACnBkTkQ5kKWF1A4SuKaAFjJVvvGi8FFKh9CqqUWfLBkhAprfyjujgzf8ewZEdQVeQ",
  "key13": "4RixAy9eSbxvgYZ9mF8LBqJnLx6eXSL7y7UfgXLqEHmdctv7P4tMAazujJLU5mYWHzntJLnoXsPQF7Ek9DeduSmC",
  "key14": "5kYuQ2kD6sRz2mucgnVZket32RC5wFpdJ5yY33HQ2nW492CBCrXVDaKdnjqnF13RztTac3Y15dEBE9k9o6HjkMLW",
  "key15": "37bTi9M9LHRmCqffGr4CwMryX4yoaCskeMwTfAiETSJ4nANuGkDzUeFWKNxg1qrR6mKu4tCfRDkKPiHBXN5t1TDv",
  "key16": "2D7RJPvYxSHpFXTSGpERbrdCeKNY3YFhTqdZfkyNXsZiL1sME5PCxjNd14QCfzXxxzdqDyzhEmRVvBMb6ZDLhhXt",
  "key17": "43zRBxDggJxUUd7fyP8TAN5K5QUQQjdtyGQaYwCuVbTjm4fQy89vsYKUxJ32imxdt1hMF8rVhXLo3t5WmKQyDXCg",
  "key18": "5xQEx1skD3UNCQMSSGkduJJzeWYBt5StG9jFJFh4YWgkUpB8SSbUfWCaPEG8q9EhfVvsB1gsMVLK8vuoaQyvR4U9",
  "key19": "52UW4PuztWzj4wnzXqGARVjSjJ9dtbgyBJxcbjknFibriBJib9qLAKahrPisEzQe3gzRP3LtX1cvfKNu9EAYmC6p",
  "key20": "gbK4j24poBmtr1HXV3Z2CRxthaUhxSDmdHDwF81MLLuMwwcnkRDe3rmJQx6bpknKumGJxWLgxuBSrdzJgEEQ4n1",
  "key21": "Jg3gS4fmRXX2rKXrbZqsYtU8ws1wBdpPH5qxfF3aXvEVpzAYvFMHzCf5LrAFm1mfR6WfjVmmUg6f4XFs79gqpam",
  "key22": "Km1QuaFRx5tCdArLr12oT3A48Sx9KXvTLsv8anodeCxTpb3vJxWdppwf5VBfFBLnJ6vcZVkqdaoGMkSvc1g94QQ",
  "key23": "2gLPaFBTFeoDvoXYhU6C6nbKsn8ZnnP3j3W8Q4PUGcgoXe4veHzL3DL1R8TtEiX7xMwXxy32cN4ozo5KcSP3W1ZU",
  "key24": "2RtwZP7vbaPQpShxFgYS4XxTjk3E5DeZYyUNBD9HbZNjALCd7W2sxNnxacdRiJxHEFGgdbawBChvWhdByqbPm2qR",
  "key25": "4HrcP3HoJ78E9xs7xkaQ1KnRhLmZAqAugorbwGvUautPPmQNZSw44tNXoQh1JQYPe9VqTw1AcbKKxhqpfzgYJ4eG"
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
