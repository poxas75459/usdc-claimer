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
    "3EABFkcxTnaxWLFNwaZvdBFzv13Us4hvupuizvLQ6e75Y6PioocJqofcbpg9SAsG3JWyitbkM4oirBeREV4fmV3y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mswWVDQ6qQPhG8Kg4ZpQqHGS8AEepNikAeV2ajHNysjkcdPhk2vQXzqZ6E7y36CUJGu9VGtGKUidvPADU5VbyAH",
  "key1": "26Sm8t7rkpppgJFEueLRXmdDpkstzAeekXyaxUQSRH3YR3iqvGk5CtB5cECeEo1ToJCtTsg19BNRNMWdgXos7ek2",
  "key2": "4P3RjWrmtBJsBKGo4yZKZAXVgTLyu85zMw1pSCmDTh6cDTaDYiK6PRwD55Xb9zF8rMEKbVfgNEosQNqkWqitAJxc",
  "key3": "2g6V1PnoURTar5wKcwS1nnhcg7MQPRa62wnVQ4rkRvpxEHtc54RCbU35Jm2SNEwE6ovgERJ1Do6XG6inu53xLM3N",
  "key4": "4dCVQRTc6DcfB7CyEkmjXrRctoZ6p4sRZWXRtQFhDHiPvZQUukXTLKREMjK845qpvbdbGbfTWjpdQxR341hMrotS",
  "key5": "31KQyyHbZkYzufLykDmS1RCTkvwesbcNzk1t2gFvbYQ9K8Y6BJUhhMfYKv2yczsRes3YDWjGTDs2aYBnekCf1zQo",
  "key6": "2zd889UFfyaV6xK5BmT7v9G4FSSVEUPxNFEQoCP4mohLctxaMxG5cm8oMa6SGutdj2BSrsnFbcvxHH9XYWw7bATG",
  "key7": "3YE6WWTcdeSXDNEaHkEd9f3QbcV79ELuQ8PNgv6fYdMthA7cphTtQgpvbsa5SLyzGaZ1osK7gEp76SH7R6zGSmT9",
  "key8": "tqrRuF1Y3XJfLuNXEkzsgesm1RZpTeegTRCvEDJyFVq79Yd9DE8BYraKEuyivvJYgP1huvzeWbFXoi44yMRSC98",
  "key9": "45wNWv3AV9uCUdNXc2fdjTbszy1DsSTxeEzpySrTfVZFDzoS63fdFPtJ9UruGaohE8P2HuNYP1ZgoVneZEyNGouS",
  "key10": "2QVsYSbBbAKUrQUt2JGWpv1XpztLGum5uBi9pJsM9ZKcSH231nRwN93N2pS5WSyC5HkMLMyGNRxWJ1FXu7d3QZxT",
  "key11": "33MPedzMsPffrxKe8y3AMAvdsmwAoQjAmUvMawXME7zLn6qxJJdsGqjqBjYy91BeQHFBLecBtNRxMYCsunbsfexv",
  "key12": "2bS46cRo8V4VwsTn1pnSJQsKuXc8ZE6jhZu9BQmsWgLcnorTEuE5suqbxKmvXTdeySgxM53bRZJ3ESxwvGgxE2T7",
  "key13": "g3UwFSZW8yzkb2myMeN8LN3GRK8xEgBkBjGo8pqdfiqxhK5JxCFWQMdyZxYDibr1e1tdeyRyy5R4mLf3VyQ6YxT",
  "key14": "4dHhWLbijPkYTscvoDn2ipXm2L5jkw6UmaRY8dsKE8BYTr5J1N8DvpWBoooA9cNmjcJBSmp84Wktp3L6zxEB6FkD",
  "key15": "gTy1oQZ72G9FsQheZ79qMhbY7yXmXgHyZ9bhQPGrSPAoikeC95fjcRmeqdGE1o1QPZ4bcHpGtGsCZLXT1oARPDp",
  "key16": "55zrEZJCFxqPtRhRfytzSjwYWJhXoD61rwNQzqTeSsevJD3BcTtkFtUBmrANLkK4MNprW1NGbBDteFQdeqjNLHwZ",
  "key17": "2LrUsb7YS6iG8HemHgX2HjmCjZwxYy8pyX9hid76z6LL9pArCA8PTH4oHajP2wJpmBS8mb5fthmyGDJivVTZYrrU",
  "key18": "HH7s6YAbkXTxCCy5Mu7nTYoRWDgQ959vxLfAbEcNqYinPkA5eKXYkYaucYP4YuPyE9rmWXNvXS45ZZxvWTHyec8",
  "key19": "HR8avkdgCoakuqNZWHKGCHE39bmXG8NrpLFKvsAzYFJvRsfjgomS6edXcuZTZvDBnxRFatWWgkCCEWMLtLKUYgX",
  "key20": "WXf4Ju9GBZFnDPHkTZkmLrtis7TAgHQ2R6baFqNAVwscBQdcN5MJQk2cyuAcke1PjxdT8qobXJVXmNkGAA3cAmq",
  "key21": "3VpoBaR1FkfWYi2gcZNbbP5c9Qx5vXk2i6YegMovr6DxLnszojWSnaeY92WSZTXVyWwd9vbfoQcH6kXpcpZJezZp",
  "key22": "5ZFp2pn4xRSSqAo4N7uP2MRB9XuJ4ph94K4n14Zxg9U8W4JqAqKnv6c3f5UzmJgyjSn6hoPT1ZEQWNEHsySSJjin",
  "key23": "2NrpnTNm2yHN6PjZFedNjm8Mg1NMH8cLa6YgvZ1F6QjHjMw8cg1xFs16cwigWSLTGT5CpWRK8U1BB7hDh2rE2cBc",
  "key24": "4VahXwgb1qJ7A1p6P7v6PBt3y2kdHxcQ6zKXzFf7wQ4RDCpidRZHxXDQQqe7y65N6otgMsxCGoqBngbPhrifBD3J",
  "key25": "5pn9esZHyZwTJK1EzUkjgpBpUENCJYDzEFbyyQzEt6qCteYFSQEHbQXrPWTmkx39tRA8XWSpHPU9kEup2D6KNuS3",
  "key26": "2uGyyaU1RCjpH6Ro2V3ABYcdViUKasN6APvufn2mFV1RsJ91vYLZnGVut2tsVZqpokUkf6dZy31BaQmFPMbfA417",
  "key27": "iPSCVDPs8YkrYBZHVRxknCm6CtgK3qPRz3uhJzS3VQyaZKKSpfU37ToLxK4SG25hYu5EQcbB8oCj6kM4EM9nYWE",
  "key28": "2gYq3wdscmS3qVaNXFgXLMoRp3VGP73iaq4zSrAg8g6Yk5Vk5JpVvCgeiVC48vhJTSCcWfZn2hyzKNDM5BJedYt1",
  "key29": "29W5jnAu55vahJJboRW2n5Zidigi2KGJLBf2jnu4Lhh9gYXR4hrntQMBQdn21SPVf6xqSye5oNpkoWmnQJNSbgMA",
  "key30": "2ixu4AKffCrjTBvWS7vP1WpHL7bua1F295Nv9uustaEX4Gb1nk8CwWcnynAyfAkqr8oeddg71BsuPyvjzcCWQjjM",
  "key31": "5AyBb8QLvQCW1rNnHryyaMdvEr6T9jgVmD6emHq7DxgoRm7aKFnGGEgANErUHZfvWTzqYTmmf2F88hjiJhESum11",
  "key32": "3m4emBwYgFWZ3cpK5RsSosgzQ9kBgjMr52KrcZLLSnUWiKYtABKjxfv6vrkiUsBSpkTfRCYc5PnfSUhWsRnH6D2u",
  "key33": "4DnNyhFY4rCPkQTymg3EmRWWag8Ctr8UQt1HGJDWGkBSmG8E9rmRTecAbfAwbj93QKxvrxkboA1f5Mu5hVsBN5F1",
  "key34": "2TdcM8eTJK8jr6D3GFkfkkJ74TMTmkB3a4mmTUnKSm8z9tc9ormsutKdtFV2h9CM9kdoYy1KCoTEnV6W3frqeahq",
  "key35": "3QnuMk8ihkbPMgD7P92Fopv1je9C3TXKbZaPFM7vmasDFHY5KhgXxxUumSUDJM5Qv6xTWChW4LZYaxK1Ph3f5zAK",
  "key36": "5Tvt5FdMAXsvEBPVXjveowzYKDvdpohJ9ZAF1XQrRh6x6U9itEmm8yn4jrjAntFyEbRpXUdCw5WddY5VLJwSpF4n",
  "key37": "3BUuPZYk6defPwffDCaRcR7yxYpNU3NHqC4uVsxvcG7ENBQTpurFJAnVdwZHtPbHVxMWAf6VxrsLBDgQXEvuCJjn",
  "key38": "3rVkaU87RRyCjbxXfUDL67sNKjUqfTAyxP8kXdYtT32btTpckMQeUXwxATX2BgkSCtLLANmY8sA64tUk29X57ojJ"
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
