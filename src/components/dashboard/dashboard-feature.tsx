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
    "5cXYQnh5XoAiL6dhqPViZEYZ3wjehWUMeJYQKDUSYAqnWbFE6G1ZtuWDUE8NmGUJrNfeVMTuPWYNMGeyaydEK5sL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NrD9ZGmcidjvmw9E6bVHf6hinosFkGHiznasHkjpp5Ai5tsUbTYEEGCXir3xf5eDxi3nwM8Ak7YW4cjjF9jLyQk",
  "key1": "23RmfdoLi8wzeTfa7hQgA6yMysYYaauZ2e1AiVSrRrMTd6aY5oQkp5rNGPK4sFHUMHyC4zCu5L6AqDyouDmzK2z5",
  "key2": "629cnFGuChqF1xPCG4XuuvyZPs9CEX6dJLmj1M4doPDCD5guxWSKBoZpK7rq9tva6gRAzXXan3PTyBPnLcun5uGG",
  "key3": "3bS4CmsUDxV9UQyA7XGCPLt4KAanFihZ8Kap54jgyJqJha4mAFwQBt6oxadf1ewrmN6fNk5tKjFaWuTMb5x8rV1",
  "key4": "3oMMLrJSXtAzuv5ZsC8JEmpTYyzevMY4WpgTX1ftg9ZCvJWCNrocoGPxcasU8kZx5ZD4q6Qd9zzeMwmJsRriww6n",
  "key5": "5yyCk1rCfFnX1mfgYYiLQ9wEGGkQyWXvytdWUtmococNqy8G2z869b5tSmeJ9ioNYBuiLm3YPKLwBCt84zwauM9n",
  "key6": "3oKvme84Lfe3jpFx1FLQ3nPbNzCqbEQoVXHuTfgpphwjDwaU1XB77Kmsoj7iNn2AEUV9GusdULnUeLNzn9oWevVL",
  "key7": "58KV5w3c5vRstNofmsAJHPShyLqZsw43k4HDoh6iT6d7GFbZJdZnbvtwR1zW5YgaAdx1TLfzvtaTGFfWKxjL23Bt",
  "key8": "4nmJhawwEakECMA7kiJu2Tz6xJ1CRpW5hWNpPZah8k4HqPmeSpP2WaM9bjC4UFWJ76xGt1Zqrzp4LmhZ31SrkhW2",
  "key9": "2mQFWgwJvuZidj3zMeKg6joQB3oRD5DqRYAfTuLLR6gogZJw9P3W9JYrBCR9r2qbihzZfEUYJci5MhE2j8VAKLMi",
  "key10": "tj7od8XGUiFj3evQuJF4UhrLgyoxmjfiDcjt24Esgv8riwV1RG5hxbjnaE58mCKBQbgDd79jsYRfkuybgAGMTvX",
  "key11": "wq9b5CtYAMkNEvHoV2rSg1PtJqL4cXdBypddneRdcQacukqCpEkJP2JpKVygDGWRTTGagcDzdba9f3DFZFtZAVd",
  "key12": "3AK9imWrYyffdM5Z9VHJ6b23Gsd6bjTne1ssdaCgihwvHL8V11uXwBbsht52Qmp7hD2899mo6DNbqEwJoqSYaiqM",
  "key13": "Qr5nPm2DgDQrGad8cNL1Avo1MBxqRx6jB6a24Hi2mLJxzVe1W4qQwuHDc5E8m2iyBwKi9Yu4sNvcny5qFMTYCZU",
  "key14": "2EbF1PXQXgNWgsSyxPE6oAEDVHprMw1VpSN7Qgt9FFiwipLW2qSenkrcsH4Us8ES2TjyJ89baLvnPK7VcdgdTRZ6",
  "key15": "4Su9PxXQ495GzMSoZXuBdy1JDUdpETrFHjVzE8spVm8WucDFVDrgecEJwxTi1TKvW8dduZTS9V5ykHHVSb2omX8L",
  "key16": "2fGSUMDRTEusaSHGTzpXKdUsUxrwMgzciDQmz82FkD2QDrs45PPPcGuTmaZhENvSiAsmfiWC9rBsErsKdD387zUg",
  "key17": "216Pu4Ckr71PkvHUegMU1RumpJPrvCLP98uodig29HwrmbETDfQ8d5vKjA2ANP5XCEzZGWZZfe2sAjVQnTfuiZ24",
  "key18": "26gMN3hM8qGohZdasknBL4hnJXZKV9RGcSk7mw3MUvmvwiFxh7uFPRVyaVThiv12qUimMJ3gQDKdtP3xyni2EZq6",
  "key19": "4AkHietH3xL6iNYQxvoGxYxnEEN7qXqasmnsEEVxYAMuqWqcP9EZyei6mQNFjUmiKSGDB2Y3nW2Gms13uhJy8kMo",
  "key20": "7dcAMnGr3jmM2HqdqpqiiSU2EqhKUaUNc8C2nZRddyHU8hDoCxAQyzjWH3UmWcQH4TZga2nRPfw4EwkZLefyGgC",
  "key21": "5Vcif4GNuhFXnYwzxCYtptoo6DQz9fqsBo78HbhkAh5Dd3ZqZymDC6a31Pu9Yc2iFEv8jvkVbHbq3AAi5RLWjjUJ",
  "key22": "3tUUuhvMEhXg6MNZgvU2c4SwqBESwfqezp7BWFxPWWWGzGyWAcJCC9eo4vXAmV1Vzo99RcSoVmq15EhACvaXU1H5",
  "key23": "4zsscMZtYcQ7v6qAgsmr975oe1sEmtmiwn2kZivshfFTWatxuEYnUN1i1EjmbdP2bP9cP5uZp87KMJZnx6fXMAFB",
  "key24": "4K69ao6FbAYe82sdkpouWrYzuLtFKxwTjMDWeBScBymRgC4iuKC1d2L7v6P6DgNKXxF1TwGP4sSa8efzN5bU5W5i"
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
