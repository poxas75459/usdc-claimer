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
    "4eKJEsYnfryirZ8yEeGWWHPVatK4icWdjaoWnjyNVZoYoGVfHfKqpGvBKsWPoGCrouT3tF1uSkKHNJWP22rwhF1t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fZ1KXBf96DXq8uHtTGYessydHQkjS81U6zgiEGzs4LaDe7qM5vsbrVpQmznpcCH4mr53MdkVZVEm19TFb5SHH9A",
  "key1": "3Qh8rM762ZB3Yu7t5xqe7fTqMt63dfVSk4s29LxnMbeaNkEncW7p7EP6rXgNCnZKrALzgZAqxBbYC79U1z73G2FY",
  "key2": "3xiBrcdxKPYcAauGGeT8JLqxWUkRWZXmqUDo5Qup9E1Teib7KdLQmTEJd2SvEZeswyNtU7LUxKTeuogxnuNs1CYy",
  "key3": "5VVYcCiB7vMjizhakhzyH7VtxwpiHhWhY322pG6zJNdgaET3DJXaCQJsnBBpxaeT1RihQbhjwjiTA9x1QjKuZRVT",
  "key4": "5jM6W5eoD6rZZjCUYZ5ci5Bxy9oLqJ8J1qFz2T18qESSwdN8ivMYVWinMyYc1Rjrp6p12MJoFw5n8FyGPRfYmrNt",
  "key5": "qe4pmZFaraHDQEPALSJF3r99SDCpF48iyooKCdz2Ez9qEQcC1FCrZrHLyJFz1BRxpMkv9XhPnnXug3UZbKgLded",
  "key6": "24Dj6JGsLTy6zPUKJDUAc31hvHqxrbHxZfP7dGFcBNXCDDmsUYeKHtnmv1hYaXNE4xEPSbWaY9GfP1517DtS3BvC",
  "key7": "5MT7zck6TNFiyb2bwBy6qoLtsiC9Pu6E67eEjLQ7hmtwLZ4dQ6PzjHjvA4wCmuvdsZg91wxRBWvbzbjuc5vVMv9D",
  "key8": "4n2VNJSRBjrw3JhHEJPrdvVAB9LzFJafmNXKoHRJMDExGUJt5RY1tj2d5EG9uBA6XGBBzThaCfQbCbS5NqkcuRxW",
  "key9": "67BVvcmqG6K7eLwYhayg6YiY7Sats6CTzfvwEQ7vzTvjwzpMKCUcN8Fe8ByX6xMK4Hpteh7Bz5vVYDTihN3nMMUM",
  "key10": "3vYix4JbSdnyxCFEUQX4sBBtFjJG7XonLw5jHH5GFzdfmYfuq3mkGWNpHtaj3QkH7Dty6gdXC7WfiPh5NxiXCRGb",
  "key11": "2aL7RaaBCJ3qCLU4zf1FGQJTNNukspbbjgjkFcaPUXZHVvSj6MvUt7sXCN1CYffTcAYLhk8ng5evZKu2rUoJvpRV",
  "key12": "3yr73mH7Y3AA9twCyNfPkFdtMJCABrkVUzoEPaZmbpjSE12AGf5YDhQv9Zux4yr6YKmwYsNH3KjTPPxLDTLvNFjF",
  "key13": "2qnYxU3U2WdMmvNhTy7a2M4bCTjJW48bvbmrBtb9pM4FJyizEADdbeiR6BQfEQrimyHPMR8wokb5LZNs6MbCaa5E",
  "key14": "2AonzZ7MezC4vFixv1uGkgQ4uMvAdJkonzq5YiNEx859QaR33tTE1yqC7bR9YuaHdi5FzQ9bZdeWzPBsHtTUiZaj",
  "key15": "uwCujSuz4PGTCimyyDXaHDMe1LtcZA8SBQesHwd4FscgHzuzkgq5N1qiM6cMsUu2VAiRy2AA8B79smsEc1ceA1B",
  "key16": "3s6bV6BjRaeGEcfAaxWmPczBQ5mEexpv8pFZuFDSCR7JUK9NdKVyCjtQi3ceWEpgbnFhU1YQUP7SioZesT5Ga6ww",
  "key17": "5zifuKh1gy8siEnJr7PcWXz9eDtdY2t8ySxj2Fpu1HBkVxqZwu9uCmPiV7jW6ASTVkDitJghBH3Sss8TKRzUVZLi",
  "key18": "2vxiA8AiUwA97RygUR4XsWrFtdBxDvahXqNzWhAqMrZ12fQN9UwwsWsWfqenzT8NwdQZYoU7zMaUc5trEk4E8hi",
  "key19": "ZxEFyB13v4KZ1NioU8cAJuxwN9uhZaaSsLB8nzR9MkyaF8xJ2AG2BLhR1mS8uDEkHz6kw3BKXZ4FKTDGL1CZe1V",
  "key20": "3xvwNfBoFGPHGK6AvCy7hN8zWb5TtVMMchqmt8ZWB3UvAsEC5EKEQznZXfSHNzoT5ksthF1EggFec97Q1SmgoY3N",
  "key21": "3U12ZMkgAYPXBVwuGgjvzE7FcZp9vzrMhpzvrgmLvyBKoAToyJo8jbb8Tkx1vPKxMRSxEPoQ35YxwfVzZGhnS5R1",
  "key22": "4JNkrXSrDEY7a96c2BeybHGCubnQfgnpZyDsxCJPwR4dYg1TyR16EyZMH8JtP7xCpmokMnUVE4Pbrz4KS5ZABA13",
  "key23": "24cDXzq7FBSrMd7tKcxBWydhNZLdkfKtrrFDw18oJDv6RxDkhNMDyc6CNefJ4x9MRJgrwq8A9PHHv5WTAWioVoFM",
  "key24": "2T3rTquYCTYtM85o9aeSMscSdghRYFgDAxGAXUbwGhMk7q97wkPdNRGX9PRhSLZpLMyCSwpLhTumYapvXZzEzwTv",
  "key25": "3PSMMcxRNuj8Xwn1PbAkVXX4dAJWYY5tNQbwLpAhaDm8cDnDrup4exLweqpSM4p6bV265wt8iLALvjxRrPmfYhxc",
  "key26": "3hhAGmvxNBqXUeM1ZoAQa5ULMYiJdyVVurEtjh9pFgLfvJHZ6TZZnqyCevizXrxuf6ZV16n8FNzq7tRMuH3fz5h1",
  "key27": "95QRSUtzUZL3ohTyyRMDoNuGhgkSdhEZ7HBYTxMGFPLWaMECFsxPohXQsR2of8swa6GjZ63rspDb26qkuAPeT18"
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
