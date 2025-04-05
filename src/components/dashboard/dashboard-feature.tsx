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
    "34cwvmkWSjZ6J9bcG9tna98Jzc4f2tBwqHkhAqFkjpUByFovcMn5Jt8sVw6F5X2rdfE1TZhTsVWUMmhK1SdXHUPX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "589wZpKWhdaswKXguKuWvVtJQPiJorprBhsmq248Bv9WP6r5Q5UEdw4KoZi31PVvTuzey9ERHS5aWaKD6E8XDcgm",
  "key1": "3Zbs6n5B1YJR6B4cthyTLDEfG6gGt74mjeeqCWPBVBCtpRAZr4v7sUeEPXFYjZFxBF3gUfhYn8LzwGAVkBrXkxmN",
  "key2": "5VnTQVXRWJvoYz6Q77SCh7nV2kY48j5X5sYMPaotVAjmPY8sMAWQorfVRghqfZXUX5ThHc8WzkP2648Meu2Lvrww",
  "key3": "2GYRqyLF8wUgrwmJyNJ244zQNDRbRwRwrqct4Xyb6npHWLouJVRxLMnMc4MgQhf1x2z9Y6qsjHpyCUuDo1Tfteoz",
  "key4": "S6hfVk1m7UGZEZnhE53FgRpDNUWCqssvycPtBGz5CGMtsio5xMnZ3FgJLR7ik2mgbiK6oWwYDFT1JS3JWNiyuab",
  "key5": "pspkuuZwE9RKRbVjXsFgko1PAE63bdvEcSsTGQjELNN2mu9hpThcpdNp2FYAPLmGYY3GYVfTC2Y9gVKKyoLcqQD",
  "key6": "55McCrXHh4ggAoUf6eDqEJCNA4qzD1YSq9BnkuWZbRPyMmVMQ2XmoRiCnfScExCokWnVUniicgCLnZnYFbNavvZb",
  "key7": "5ey7pzjdtyzUEnJr4znTQZEm93whykBsJKaez64yJVU7cdfU2QB4m8JKsQAgmX8SJG94D2dgSUJ9U7hXjTQ66cWf",
  "key8": "2ZjR34xKtdaYNeQZtGCTTSdFjD63oDXeZgX83hSkBJLw8dqbito9MnTNE3f7a7cvsax7jxfC3Bsgg8Mr1aYb7fGX",
  "key9": "34u1KhQKfnNpeq64TQbsuaf2uyk7MBLUsrqyrr4hhMBtgjw353fTiKkfBypWZ3uAg2fxvhKa75i4PZCYQp136kns",
  "key10": "5p8u1VVrEcmofJdB1PGm9VsMgA3mHthxQaEvKYT8X2hx9Jmuho7Nf532cBwdFQLLq3FqYJsDgVBLUC5phQQSjjgF",
  "key11": "522uXfCMqQDzCA9vUBj7PCUATevih78yyexZXfnZh5ZPxc8fzVfdjRqawkFL88Ym9A8rqvxCDcmhdZZSDuABorPK",
  "key12": "UR51NCPVZ4NK6HJrqphPnw1yygrc9q1RsBTgdxrZ9rfcKCAJA4cKpcyv2XWozcqTXYQkwUrsEE1JSfMZZTKbC9x",
  "key13": "wiJCY3u9WAiRxZxxKNokLv2BPCAqaFMTapjDPPSyfypqVftkhjGwQu53Lq3ATXRZ8RqbBH9edZSMxybprkKEBgQ",
  "key14": "2kKcaoaeeLLWD9cbvdeeDzZyoBbfpmRLgrbhDJY5cUo89SB8ysKgoMkzddjDpG86XkkzgT3zStumwEFXphsewBWU",
  "key15": "q1ddHRJAp1vcX1gJmCg5taB3oHvQjS5pMSjbTypQW2MY1hd3HsbwRDXcwSg99uZ28LuAbAFLNF1uVMHwhdyyVhq",
  "key16": "5xMyMFyegyFu1cjPGnVnzftZbY9pQX5oyrtB2MWZ3uyp2iBZuxefB2DdgC2nLRUBccNW8QQUJWs444zcbaqGpDLH",
  "key17": "2Xq76GjA3Q4vZ5jME77gA88GBeaZRFu9t2pQmJUCFdS5JSHg9LJrRY4Dn3A2VPRv5GDbCCp685KqZfaQJtvaS2Hr",
  "key18": "WmJXjEnh2rVqgEFSdjWJeMRAuGxGA7sfJnaTgZQf45MTeG9B1vHydF8bSi1kGrY3ATXduJntTTmpGxQSvnsxLji",
  "key19": "2V821r3wDtVMyZBDeL7ziZoaLFvem8CauemzVg2nEthCjwWJyaDohkLtV5wKh5tbwUF8eNwU4fgii5AC6ZZ4s5G7",
  "key20": "NgZ7hEBTTk8V9F3FxtwMvy7gXK86TVhepPRvyPRs7BcSwrvUpF4ZGdsgdQnjKgjsqPGzZDnaS5UnFRKcQcekP9a",
  "key21": "APFfimK6PFYXyMfYX5My1VPRSc2CYLiC4VcNffJcy2LBFH46fEL6ys1o8Fyk3sMTLhXafqstiNJHCGZ6dpBHxQJ",
  "key22": "579ZswLAu5RLTcwgys6khGpUVdmzqwmF4JH9f4gBLvRjZGDxW4dF5g6HNthQ35aWHvvvxqKfMsjFU6RmeXdCGjxp",
  "key23": "TQKbAYu9bM14Be9YjT8TMoqyowqJZ3pUEJpCeMsF1weBjfJ6j8Ds5VT5VuYMfQ2XEhL42fhkeVYfptMLcDHRi9n",
  "key24": "5yEbpjCzAXTAfC3MhrQ6ai8AEk8S7KyiKZQHuxyQCky92BKmmsDxc6ZMe3um6fQ3Gd3yNXs6SkQNkJnjCZXvqimQ",
  "key25": "4NzAkMU8r2iybnbDJfZWw3vPbRXDUfB8Gtyy8yrPHeM32jzCGXkizkUfJCfeka63Y2RCxiYbnYzSqzYaaSq99B69",
  "key26": "3mYrbiVUES2PKYit6Y54HNdWw4Ht6rKCGYn8aNoQxuZ2pg9ESCG4PxJ8GqmxhETn7GgbyieHE89MpvztUrvpHj6d",
  "key27": "5U4kH5cKDcKngCmQ42ftVMvNdvKgXQ9yahkdDL22B1x6CUWhYk89y3eY9H5Q2FhEYvqxp5etw7Srbv1QNUtgs3FQ"
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
