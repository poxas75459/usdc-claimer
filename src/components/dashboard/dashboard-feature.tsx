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
    "3BZbdLdLm45ZPtL2MpudiFey1ygs7YdwUhtDoSs9xudcSWaurM5xi6m1YuPkxKAW9d5UYkms66EivShF8QNVhzQH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2emNJtH6CegNZtH4dX3YXSSXrQJjQH3kggHFCyKrCREcrU6xf2YyKbVsbgDbYmet75UERsvUahzkjJyVqSan55e3",
  "key1": "Qi2RbvwRemuJt5NH7gWwQmWKmJHmorwr46wiZ4oTJ8HTcig8mfiT4xnZAi9XXXCqxXd9F5ynmKj5F5epmvq6M8K",
  "key2": "4eXS5VMiNFpXkjTjBj3qzuuHvqfJwXxZjebf2jUrh4sHW6fk38f8snmQtYewbLVnRVNn4uwVd5u8AUeXMgdFNin9",
  "key3": "3Nwgaz4BU3r5PLBKo9KgJyq2xjpiKGudi72ANin3A742JSi2giwAk6rH1xb72D9FckHjC36cWYKzS2jV18hWcnWK",
  "key4": "4KCw5v8uZMYBZUdc8rME2mkQhiidAhoHDfhxxqqo3SSGv8rmjhAH1Yu6AKEXLYLRGvpKsStmaFb79utjbm8Gi6rJ",
  "key5": "4ZGryt8bvVWELHvvw9V88BNmemfmFd63KHEQCeEgbTKpFyB54Jm9rBaeJGE7bWJwi5LFRtJsUu6xi6D6hCAYiiaz",
  "key6": "4iCXL6UkmMQztca1UN7rK7V8yz5R7RhQezr8xCG19BHA5uQHCXTxLmQEvuvfi75VNGDkaKZLVFQZzT8opBdgVHUG",
  "key7": "495yV2awkux8YGSXgwsUiJq93BpEQA5VoZTUZS2Vh8nxK7imSzJTWxfhhf18kBkjo79ruHmuWXsv1Wn1PYAhGPtZ",
  "key8": "VaWKKpiEvidX76KruzdtaJnD9iubHewAvatxpCxaWUPbxN82i3BwqhpnGLHiaeMuZSkNDrwC4af1BM59aMmcitX",
  "key9": "5kuLpAc4gD3GvfhwuHiVy3oMqh76AcNKEs3xENXMzvJE3JnpVreW6bM3WG9iM3BuXVqosRTWKmmqDs3xwTbmt2mv",
  "key10": "49WJc86epXUWs61mBsoQi6ffeZJ1rVHegPfF772uqQvrSZEyxhrfTSpGk8RuEQ23K1dzaCjZ2Un2334NYk8SnS6s",
  "key11": "5dhKvjB3e92uZkn7qMy1YGZi24SvGFngPWaETwNzGv8sUkHBa5wg8YHWPiZs3GdwAK4ifNHEZ6SCPGUm2DdmTaHa",
  "key12": "5n6JGc7egS2qhnAcdn9yzxBhf4JCqcemQoH492SgX3TbREbcEzvRzLEkhps2B9jTQAGd78ikhm5gWxKGiAn8KUdc",
  "key13": "KTeYNbmFb8S3aAgCMdV1fzWLQRcgZPhLS3kpo7tw8SdnmWP1k8nGTXaSWbjGduXSJbR9bLFaUyDB9F1gL4THWq5",
  "key14": "5SXYfqH4uYu5crUXwnBmjbJSai3pg9FkpvW3Yuahc4gMaY38hQoKtW5jUBJZBk31T6Ugms19KZfzzh3buk1UeSid",
  "key15": "jDZxW5UmdpMpD62jpLVEqkK2yVN6X8sW7L1LyQLRB6HFeoRq2i8CEhq8xadNTcBEvW4KnUf5ci91cEAfi5ngS9F",
  "key16": "31FfUmvamgDkzgu4gEb8rzTHhuT542Resy2JZ3qPw83WzENDYyCnErTpVdyTBhX9c3qjSSSsXo84ZwtBBX6o31g5",
  "key17": "4CNwDVmQnWXjuhVFZeLdWBZj1J2KyXdUn5deRFWhb2QiNXYDAD1GBefxJaTDXoTz1jrTxuJ5LoKYXzz5CqyFJNgG",
  "key18": "2HU5bq4mdw5BDk1WgeVG22CaKXqJwK7pfEyKEiKfrTt85NTEgXnqaW3pXyJhYKdENMVoPYbkzXcai2SLEyxHd8rV",
  "key19": "4TDKqSrP6iHPZ7hUqDBGeiYN8CadQSjPqBX3DvoHXgnjeDYebTnAefjNb2wbtffbsimmTF75Vkw2GCeUrDWaNGj2",
  "key20": "J4MeHsNL1BJ5ZKh2Hp117L8zJzZvt2SS6cDVdRRMS1PFyDucZRCtUdsfzcNGUynvSNo2ZuygHff5szXdjMRw3Vq",
  "key21": "5pCmm4g6xHTok6zNRNMxcsMnaGxzzgj1dZ7rmWpguQfjmsXMnFrrPg5mk847rSv73GauHHQGTd6KFM3LndNkxuJC",
  "key22": "2WVF8o3LBTXUQipDGrWpVj6rRVCGJHd3efUdr8BAsFp1zxZQtSc9dL5yRTWdeKyWKaxRhZeLFAAy1ofFCoHtcAZw",
  "key23": "5ZQr8j5Y5DysuzuWjbMfWCG3VLuecV5gcKHiqvdmS6mMBUcJc64MQURyE3MhDAPM94qdUusL2KyLY3vWJaPzd4Kd",
  "key24": "4LCnr58H1trnPNECExd9y5H7n6zpKx23uV5AYjohzzb2BAxj5TvCGWuans8zGeCyr56eupuETj7zfrwTjAwP3Cyd",
  "key25": "p6jq26KBAei56WFC1QUrgtMbpDuohhVqBffHgwW4DsUtXUQWY1e7XgV6gSq47CxGtztpB2q6KhnPzwCNzSEL8Vw",
  "key26": "63CpETUiuDb71afAGrpd3DEQjf2yEzS7eDb2QaETtoRq1azEoEbm2ydh6BjGKL5pydJM172Z3kfQM72ouevJV3Zq",
  "key27": "3kXjqwDzHshkDXBMNYRoiNwDxE3ixioEDNVwTXwocRgs87J4sL8zvrN1ZtAqnTYZAAhbBmoAjqPZqXxJDvvA6Bfe",
  "key28": "27rUBbLwFWASLjviHJxbxsRpAZFCLSEARU2ibnb2bc1tLD3fteF4aH21KGJrB3SacfYhd9cBG9yf82npQsDNFtTa",
  "key29": "2JjPZ2aTXzhPiC4qbVnzqmddxNYbxymFjXdjQxW4VjuexKdZruqgttbEF4j1fHG5AoEUBgcjKV8Kkpe1umXwmNxN",
  "key30": "4f2zGBY95DtzhDcAKmFa4Mqm8o2yJHF9Wjh7zfBS87GZnonZ7hdE3BXSpykcc89Wn4KFzPNWCiHjhaeC4C7eHu3t",
  "key31": "4cTrLjJMXxrFmQgC9Z7Qp69JMht38skxkt8WzbiQKd6hw1tgjbkZzqLf2smCmFfVh6JQyqbb67Du4mgwJoWGoJfK",
  "key32": "2iKbyzZ5b3tWX4SCxGETppZt76pKnefDBbrZTwgVvWUrpMTgjBUy3X6KNLTdcRbtMcCAh4MGeXNDMr7caUL8B4EL",
  "key33": "3rqAgYY73SmBWF8Ev9RwQjLGaTTbJ9XoACd64Z2yMN2wLXFeXjTwqGruuUFb6Ms2AfBD1YoYVomKBVu7UGobcxoH",
  "key34": "1zkSWRLY8vD6mncqxqKYzRFqdVScsniZuqvZWoE73ADRH693kevadGBJTKWXJDF7AkwZ6vuMcQAqtf8ubPZAnCm",
  "key35": "CqTDrG1R3Db9BRaZbeCt4HA2b9K2cqmmHs44S6FjzCPzcaMsuzTSkx1vXB9CvTD8Nj3oBe9Uh8zUynghyyDcVH2",
  "key36": "3vmmtuPMuhJCibRFJeBKJzjK1zFLx8TXGrsToYp88GLmfaXSyEX6AQZgUio7MrwchUYt8sySqAJQsnKY8Wcez4Yz",
  "key37": "3HnupQ2K6PH1KbeWVTV9NLzUvzQJ9VmtDJm9XsAsMjDooqh1VYCyiDHNrhe8SmCcJPus1BNF5PvFfm56jyQ248an",
  "key38": "4houGnowXWtbxu5wCPUwNCEv1VxeYqe7jv7qjT2YX4d5U7WUkJvz2pvKdcVNCFefw4XfzYuFHL8UU6BBpbRAhy4U",
  "key39": "61DLvjWmSWD4eBVugRGG1vYum51k223WShom2CUWThB7jYK86bUrWQRe5c2hn3E8LsUMenvieva9URimZaZY9UGN",
  "key40": "3A8Lir4wdpZEvS3AXxAnb31V1CjsZGSrkM5vTCD13hg21Knus9dwJvUcKVd5s7xS3GAoZHoanE2kRaopcpZgX9p",
  "key41": "5afXzLh9Lt1SFiotk41EB58xkQLzJgBMaGw2CfuVpEVSA2Az1fhUbGjxp9cABfmN6umourQpCtxVBcXcuEXmAkaa",
  "key42": "5dTE22z5RyiLLbfV7vF4vNvEap2L2JwPeFJe9Q7q98kVMTGezKHtLL2BEUBwaViWN6jcf71YfqfF4aHRwWvjCg3i",
  "key43": "4CNGGWL223KtiTrmjKgSiXsbMHmavovW24eWRxYgdUHKMqoUpM837CW69UAsiFiqPjNd3UXJ1Hv7C9UGos1dQpDs",
  "key44": "2sZ8Xkv71UULX9799jc8HnEbr8kemXR1Aj9qrUYBS5QDtdZmF4ZSDAhJCmygXqLUQAz3kqN8F8SxyQzwgRvCjEhi",
  "key45": "64Q8fHLdA2yi1uHxnBdypS3ryAKanYuHsz3YPALLAi7vVhaifpanU2mZimiaiWoy4MtCfZXCkfJ9pKAspWgXBfA5",
  "key46": "JBpamGDfdRZi4rYEe3pN8FNPUawZUcjLqNHeX71RSWrDbz53tcZVr2wLniPgacV56pkXekeCkJLqbFBBaQzzzAX",
  "key47": "4C62Ci625Fy7u5iD6GkuPyZfXDremEvw9QDk3b9gTjhntExKBXKRSQudDh9U8Ch6p8Vd38HvcupmrUPBcGVCUfcm",
  "key48": "34S5bZJBiye3T8at83W8yESD94LnzbMLMpVjQNCBQKFCjJ9FcAdi2ebBZhHEge9LbVQAKZ6QbAqU3UF34PxBFSDv",
  "key49": "25TeFD1nHfivPMqwDbuLorB2x3Q3oiChm14bzMfNns9USvEft27KJ88LHutk7iLojmGFx1jpNN3Gv8XupRJnPsBM"
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
