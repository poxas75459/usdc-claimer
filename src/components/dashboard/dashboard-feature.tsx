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
    "GmqGbKjvZGeJdurn7H57BMXLM8ctpb5CoCr65qhmFTC5wvFxcGYBiuta7XtMxUJji3AUHhFNS25W6Vm4suCrryq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ur1FaEvfSQhtwb5ijpHp82Vm39XzrhxHx4XN2FPwFRo47qcYZBYU1v3rng3p9rh5FfmZLvKduaA7p2VAzpiUpHZ",
  "key1": "3wcVXc4awvWP7hRuUYGXK6NtkUmKFVjQUc82dSZSLtL1ymdut2GheQaM7pRVPmDLBvV9MKvUVGXcox6y9Z3k6rbn",
  "key2": "43gHUwEBoXezqxGwqjyFcQp3JW9CpQjcDinHcS6bqdStaUxKFB3itJjvEhFaK9nvBsyv5H57yeSwy6jydFHJNxg5",
  "key3": "2GGmd5W17rRmtLQoG46xLTWGSQdWFFPNHdbAySiiy5zigBWgTXWnHmdSDyZxLtHcTb1X8snMkEwiYW9YYt2GsL68",
  "key4": "2PJpiWTtY23ix6Ja2XnFVN6yst6dB25np8H2weHivtyAWg5EX1Vzbc8ngjHxNExWYt6aJFYd9ZgYn3REtQLWLkcR",
  "key5": "4WkkQruGyTV8FsU2xExdWCPRQiVXnDphfAEUwGDjYVfC4QxRnsXbMNXDrhn3nBk9GtPyMc5QhizYypdV1FRXMThe",
  "key6": "5dKf8t4HzJ56gb83uvtQRpEfbrwNERfmG1x5R1sr2qFi43sbFb8QxUpz3MawqzbfKNNdJZhTjaQT2hurQQ9RPDVF",
  "key7": "5ZadAHLhfMrqjsA11KnZqxksV5VP92YHfgoeqhemuRLm6PjwWCnn98vBbS11wAAWZH3KVcEj8YN4erLuqmy1ykEh",
  "key8": "4AaHoBGWK3NhACkbC6fxzoDc79SJnTHybLbQ9YsueogSnykY262bj6wuAPU22ArJiivHNyA3K6BgMxJabjv3cTFA",
  "key9": "4ngkddPWkaWJsiRaLHean3JtKY1TkLgZvNpTirRAjVFVmahfFU4Sbs416jW1JLYDnWHpCBEXSMZ1DMTAb6wLoypw",
  "key10": "wduADwAAVF9TeEK2jJMTu3TnX565ZN6EQXfJmdMnQnXd4u81KcBC2Binr8LUbHycj62LXHsegKZ7Nyb5u1UrmGW",
  "key11": "5iXznebxQ9c87aXihjY9hPYNib4kG35CfjZtm1qynDtLPSkr16VKSVTM7c4goEkccpVxyUWBmuCEwn6JQqcFzFvp",
  "key12": "2NgVmLqaTnP1C28TR1umePF7LVAuFzN7bBdD8bfVwYLhsEgMMMqa8h3X2mNBT2HCehYhM489ArJYMkmqPHJJ6A2z",
  "key13": "3gHjzUp8cx8aRYmXdbgVhE4QSS1JJM6JVJLTKFMBeLdBnz2fHJQRQaBnFBwNMC6ajKyxme5YeEAhGoP4Gk6v76fS",
  "key14": "4UfJKQSQDhH9Rh6dvvqMJ3vNE1jNPLUSnkJiacNb74d1h9dSeUrvZ52jyLsXJ8upZspAgGJMPBYVpWcHjkz7Sxd",
  "key15": "4JsiXdw4Sz3v9BCFpVG37uscmf7JvY2ePUfBNdTRXU9KtnxdYm7nmtUrsKc2rezMbixrDHU9drCPwMRspuZ6r4zP",
  "key16": "5vnQgq1Eh6jD7FVMkB7g7KqCZ4ApxjeBbvc6ViKX2vgMswvXBRKoC6zS76ZwpVy6mHmgg3QwEBX1AfJpjUVAa2bw",
  "key17": "2BzvmxCz1HfoB649vrjf2wUQb5FeNNEniwkHr4kE6zByZtqgMCfY3BPSERLLYUgjcCYtzHFjcNg9tcvXAY4jbXWP",
  "key18": "3fMXnTRZokwv6w1kc58ZkT6TzTqvjg6kPNYCnaDnRCae3WiTq5iFAi2w9e14YDrLTbLFLNpCyV2bCsYdxb7AupWL",
  "key19": "2bDFhigthLki4MSpQbrMZH8Uax7k48VyApU6AKNmyuRaqJ3XpgBGrEGUeUBVq3Ejv71s68P6t83rssAGWEQBmVD",
  "key20": "2xBa4H3mB6jzGsN99bRmNMxsRvhcGubRAZ8zqvT52869xWopJMzXTu8FoiepnyTVnaj6RdAjf4uajG9gSu5iCAqT",
  "key21": "49QMo1W9VFf4r4V9fkGNmrYdpkYmRHvE4oRuyetDcrt9vzECCsHYQkAR9c15oh2irpTFkNUKNuFDcxTZzECh5ECL",
  "key22": "4B9sbYuqsbJekk3M1jq1nFvRuZostx3aFFEuNMDpmkCBaEEwt5v1Y8ik5BJiFjKQdZ3xfx3Ma7Sz5nE6KUgizLw1",
  "key23": "k1f2ibKPjxW2VZPAKDPNZ2F6Wz89rwnYkPHNk3oZiFtLEfjKGz8xGJ7fmJ72mZFrt6QXTZf1tCvEMHuSrNLRKfs",
  "key24": "3wo3RdLXZDHJ1HjKkCLwXNxSvQeZ16jZQ8nv4v1KR1b6TuQd8fEjtZmkUnMLwGbVJV1vPGbYcqNfVeVuFcR23nne",
  "key25": "25hhL1DK41zawHTe51Gt2fjakxCMKY1jTNeqkB4kNsaPUq7t8spvsku2RfG2iG7eLu8zQLQvo986c2i38kRdqdSH",
  "key26": "hmyG4a57xQFnjvj5YGKmt3petDeuMw2D8SJeRHuViqjRprFcAQj6Dg75NNVk4UTDL7FB3v8y9XFV4uU1qLQAsjv",
  "key27": "jykuLqF9j3v2v1eWBDFF4PNkkLkt9vqvcbwzuhAge9XUbefi949J5kpMBNwSyRbhywYaTFvm11KLUE7BejpPXDG",
  "key28": "4rHsj5JuPZdbsLoqMm4Hb3HdP6StXXmqg9tWrK6qFBB5gbjiuduDF7ARUKvXbRheo1NkwjiGydvKrqJKc1ApXoxW"
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
