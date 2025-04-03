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
    "2Xjqsvij4NC8AWeyWuRx3tqRLXXsfaEXm8q5WzbWyNY7E1Gie4YxVw1Z18Ac3yg6gUPQJPCCz5GTfGfBDv5HQLBf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YfaStK5s8VdUUr84gRd7BfzS3wMwitkLCzPKy7j7byq43bavEbR1dE48GohhTfdG48SHhyf1qWQo99wXbCVubBR",
  "key1": "MKvMBwq35ndW2ThpCxyGgWVmatPyv2ZThNdbmhXwqGaXuQFMJEHRhAgLKtc3Ak8aaRAG2zQB8FBLwBoKGw27gJ2",
  "key2": "2xQdqRjMSePAPpZYJwmneM8tFfQ4UNitDsZ6bLER5JVCXD9AryZmwCKWiUeahWkE9zwqQ3vrrjPpvNpDRUqSr3fr",
  "key3": "5gUj7wihgMcCZVzdUjQmVtYuEmB2ZWrqardJi6iBcyjniekaPH9VQJmjPu272tEt5YhidrBYujrc2Us81bC1ks6F",
  "key4": "5tqgVUj8t9cTjD2eySgBstKRT5g5hvSy3qYK2fbbUFTGGCxsracSFLhrENpiiriNPA8SrFsG12kDi96JEM4yxv43",
  "key5": "3a84wzByeWP9w3Xi1u1uAodEMHjYkyLnThFeHtReKzw4GHU2i4tVTXnf5c3Wt7Q1gGYFQGC9z14yhxzRw3Df2EB2",
  "key6": "4pC1aqgPiC99ejBgQLK5wLUWs9mK3E5DHQBia8xn1FxENcmJ4Zi9T5nEr1JSG6Qo3ANFYdDtLs21ap1VGszYNLki",
  "key7": "E7fewNz1Q6MwhXWd7RE3Q5p7hgPxBTbz3bAvpwkRECEnZL5qq89F4pNdC6Ni53GsWmtTzpW2J3ctaDX2BAzAQ7v",
  "key8": "5j57dJZDS33B6J83e1EBQ8JhPnALouViXv3dt3yrFAt8Jcpxk9NZD5iqX2GxSRkWvZCZVnUeYv8SkJiGrYvxsySj",
  "key9": "5vFJbZf294L386jCiQ1BUKchabxqmHuDW3UKsn68VXVGYcTm81Wc1qrUidXgKcpgxkVcuuZjCNp7BFqxj7T7Apdg",
  "key10": "3PQdTVn1GHuH8MQ9TbWeEKCaKjPiziu4YdoECJQuBJp7Wt6kP17yYTHLRnhzodfDiLnRzkLHQ5kiuywLtD4zE9L1",
  "key11": "567b55orqTeMcwBzCnuHVNuCwJQ2fe47x5VTrcnJ9Ddw3giYgoojsXgCZFhkAZwYi8YuVwo8j2EmNU2Jg7BtfPhU",
  "key12": "3DfuG733z2BYQN7ryWp4SozAaJj4dB9Gryk7rQPAEQb6kD1QzjPn9asxbpRtoQKPGmxuFLjjNueK3a7kZmRqgZUK",
  "key13": "3BxC4BaA5LCFVAinbkfJGa5qDJgB3EDDL9r5toUFH8Ch1CnTHXcNPzBLJVKSGoTasRXQWnw1dMowq1d6ezzFngaq",
  "key14": "3R4qrDXD2DUPXo5w45e488aVLpSyuiaqksrYx2jKMGgCqoU35mGxa8FPRM5jZ1YrniY5HyjhyHCBzu39ByMQJF4F",
  "key15": "4KLbELfQvs2LNz4s1vD5oMQiBcawns7avyY2dKzQphXihxj1usQT2UZr73EgfBSfMZX7izmmnqEAYQimF4AQxQaQ",
  "key16": "4Aup2hxazU4aZyFYvaz2a2ipKgcsgo8ARa2ukNubgk6Df6KeqfSz2WMNzow1pJxLioABK7vaKL6rRnveUmBcBdMq",
  "key17": "2aUgPrvE3RJSVbKqL4Uxr3iS1eoaZUZcef5R42xxkZEGcbEsemUM17voWfrRbwXtYdSbZRMzn127m6KmTRMHnuco",
  "key18": "4cixmC7DyzgWyW9an8odcMrPwdp9RXWyjNCcRtig7f5mcRRsRRf96WPzUVBxxaVxHCJXZTzroJ3kXwVdYaWhvHCE",
  "key19": "4cT61iPgEnANtDskVicDnvDZwWyLr7QfM665pHzhFsgFTskXh2vTcj2wgGMFnkq6oaZGtuLZcDRCpMRzxCYSMnPn",
  "key20": "3kKrWRsSFSf1oA6i45zU4u7tWaHa1Fccg1e4cHyr8arJHAUJLvGKYnRhK3jrZDo2Xbh2gbu44UqnmFEmo6roks8o",
  "key21": "3MSfShii15LpK85fxSJD2MLX6mihFMGSBTja6exz1nU9FpSJUBg7HPyHVPCopKWTUVUdLFTvi4pzogP6PaSGSK6z",
  "key22": "hCnAtnh4T7x2ard8vuhbTAbBoGbc6yubC3gX4bfXjMocjvh1Ssfs97TzrnjsEmZVLEXLXsEQ5FTejeLauFFxVBC",
  "key23": "4VMTmkyC5YKZ1YjtZfy4KTMhh1sQYXi2p8ehHgBeUPZ7RzdzFqDaeWa7W1gJyoWVs8acneCXkaxtwEaZe5iFqDgg",
  "key24": "3x33mXH7CNvU5fvdNHvFMYB9KxiNQfQBKtMCdBhPLKRx3Y65BaRxJu9zoEZZis4aiEt8qbomwLih8UeKLHGedSqd",
  "key25": "5QLBmDN4z4i8Hp8nfPv6E3E9dKvrxnyEGus4wYQEKrVJxKgqxSBBHtbv1HWpdMFdVYceVhUVh781mbJ8Ne2F7kJz",
  "key26": "2gmLLkz3X5G7pKfm2DaCvWbWv8Loq266sE9uHPMPHVqRjB3qcQ9WeuQGjZYuT3QGyrKs7WpVPnq46WVwu3R51kwW"
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
