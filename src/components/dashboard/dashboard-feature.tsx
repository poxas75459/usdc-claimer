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
    "4WrMoZbia7xnd8zvM7wxsJT2S8LLKKUavjgfc3PQkHJYZFieH4vmxLDRBVHzsntBok1bEUpQ4SkWePbzyAE2SY9D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QwmVv3zSkHPYo2bKWRp5k5ZtEgu8sQvePNGmjvtJ2Qmq8dnZCX2Tagv6rkJrLUqzYL7SkEMjEWkpMqsuGWbgcqR",
  "key1": "2kCcWtWqezLEEdrHrQp47Niqhq5bUbwkuDTr9zVksHwMgAAPyLDUrBpwYEEYCqHVzKd92xsqN3viqCALRemJPmUp",
  "key2": "48ctqC9Nqq56okpvhns2a3KG13yrWGQRkFQYSX8As8zwxDW9ettZy28TheDUBRrX5XpZjP11BxFMPrwTNuH7sreT",
  "key3": "2bus7VWuCdd14Tq9E8LFxpEnsSBLeKVm7jG3fy5EGBNVZzfJx5QnqzJZJAP1qYrLRc4VASNLS3XpNxe67a1owjjz",
  "key4": "5J7VDddC6vbm7ifZtm7xiLnzgXCFgY7GvrR3zv8xLzom23wGU1VMWMUFS9CZxGqV7sAh5DeYtrUkYSuo9W4jHhoM",
  "key5": "22ptC3fn12aCBYJdQxmB5jFRDZmcbv8tncMhLrHKUGTpa1G2LEHBxMDfVJhwWFVgzJVjeVhky7Ac2i94KsYWe6F3",
  "key6": "5c7efq6jasAxqJrm3EvG7Bnm7QrHjiSKSNMyRozCbiAGjirxZprAsmrBPfUAijkfBtnvhMQLeZLZto6GRg3AH7dM",
  "key7": "3pqLvpswdVwDWw3KwAHymhdZeinjxvmMH9Wif3ytXLbATmgCuxXc8sSjZFHTuGcoM9wUCfWysDK2p7ysrA6uDVqb",
  "key8": "NNWDub5AJd6xeduQS4wdYmxQdBwoWgRPU2vs8D1tH94uLaMZbry69hdmUBAanvpA3jryuzHpatbGP3YxiE87vdi",
  "key9": "3y2Ym3ahkUAzZKwuVv6pQuJNj4qSocfiudrauHcsCW78UR6qXvEAemLVwmno94Nnio2x8B17e1korAH2fXdwDjEZ",
  "key10": "2SHksYNYg6MxubeaHJdMMne1322P7HMupQSEfSQcXjXQBi1JZrYgqCDY9JMpycXfxkqHHXD8iQ3gKuYyjoggTPMU",
  "key11": "3pRVWSDhnTJfFoDsuDT8SiJ3YV5RD6C8qvCxix3RyFqG7ZDvZFA8qKiTp7UcXCHfKKr1PC4uCNquNzGs8XQRkWfu",
  "key12": "5Eb7WSgPLMpPgCwAbytxqa42oEroAoX1uYsycF1a7NBw4r2W4sgN9sk7xP6RNPKpjHFYYn2kFhLDK1ooSWQCBjPw",
  "key13": "VDjmsgsMjvjMUTnH3bX4V3JbKWnkS6Mv167G6SHSNgyoKWQs8Lh6xC6ofykGbcvPWGhCQhWv7Frv2Xo3C8EY5ic",
  "key14": "26VjtbkYaUiqWMKrUB8SpQbAy4KS5EiJFfrFuK3jfx3gW2iKsqEypd7fekQZEF47AufzAjpJLEX9qQqo2r3bQA99",
  "key15": "4U7d6pS5f19kbT6KvMYzsLbvCym8YhXZuDRNsdaTszbbqEmoZfEC8LfN3WSPTTWZp89fJaxHgWUbTGmhKv4zguUK",
  "key16": "5HxMStPzrx4efxa5BYN7Rp241Qmc9NjA6zPEZgYmAdqmeuyBL6qyX94mCjbyJLJH2816mud7KFqK8kYkgLpKHMzB",
  "key17": "4TRxdk44o6Xc71fvPwWKNPyfmyFis9gbzAKVnJwdR72iBzdHaok2NZ3UaSsPZRLK8aKfk831mSs5gsS3homyafqK",
  "key18": "5s7MVUVSTzX6CRskWU2KuVHjbhbfcfUQjAEswTtckr7RdHgqF5mGLXMxhCsnoMED8CNxUska8rCtW6guF8Arg6c4",
  "key19": "28AuyZWBteoYsoCnvM1fXbhYvy2vhgDwtuASEFpaohpiz3PtDWJex8GryA98x7Z3X4Eq6gox6AwYktPeJY7WXndp",
  "key20": "4mJoUKRUepgKTj3oQWpf7UuktnmjDDfYfxegoJ7WHtrtwJ9S7TNhskWDa4itCACYCDW1uZuo1UDNWnakqJ6Er3HQ",
  "key21": "4kJstAvpkoqBRyEFZZ8bZifdFTb49h4TVAWh1b4xdnY4b1GFY8mdjt4Qo4d7kJpZ7rSpVUYtrFTTZ2hyYq14DEgj",
  "key22": "23vj5pXTqGAMyXddC97p4EKphDPomXhPajoZ18LVyMxjCtPbZ23RwyxKxZE1btzpWiTZSrH4cgQR1YvDVoDVFtHe",
  "key23": "3wMBDR9Ur33X3oWSrthB1JaFmtnGtkZvdv6C5byKnUiv8tJDFpoApYXPWSuZmmrGrXW98HSjbx3ATGSGAtQ1ASRK",
  "key24": "4QZZQU6ybyX7d28MUoqLJYwjCLyXAf49o9Q9sicy2m8EMjnGuDXnMnLd1nX1jAFAfgJ631ogATFMsLkpQpQQJttt",
  "key25": "FARXurung1ZHqf3xXfqPxxrDk8oTJoGq4TsmDykTAwwfuXChMmGKFC27oGi6oPjNvoe6BNHjqqYVCzYkJKtGWLY"
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
