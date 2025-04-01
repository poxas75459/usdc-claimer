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
    "2M3pw8CGa4d92s1YnkRsa2W6enkqWrUjYLTqbJMUsanbfKxSXN8zueWcNSg32ziH2WbkHb8AwRZeUrh5ioDrRfsN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57gjRE8DCNEcyCjDneno5ZZr7Puw1c2cYTWVc66Mn8FfCqL2S7JmWTKjssPVW3DBJqVJ6fiAg3z9m4GSai4Q2K1f",
  "key1": "4MxXTnHJ4du4nwvmN5oyAbcAAJs1pNDnzVjZn1Wimx3C9XXRQ5YoMN3NeVEAyMEjB2u2UiV7sW7qUjNMZFhUoHzn",
  "key2": "44RxFcfJ5g8E2mKC7MZrPCdvoTPqBMYte4Q6FtkkG4pJxemcwuHP4fis3rKEXcxqYZRTxWvKsUKbQcUNCvMqzzkL",
  "key3": "2rKRoUT3bWBcdD1BQ73cZNjUvtynWJsfnabCjZ56VPpzWmV9aKyDpaVSy3megnfJ4vGABWGSvYfFxWQ6FE9SeyWu",
  "key4": "2y5Qn48HuZo4s67atR74rqYEPj21p3SU8pGKEkLk7L4jQWjnJKbR8gyDb3kzuDyPKoYXJTAceSqfZLFRTpabBQ6v",
  "key5": "87Q3US5dSouEYNp4QbeVnGs8LfT5oih4BJePfYfzUP6CeTejJy3h1spYUa2ZHMh3HaqbcE4DA5zfeJC3zWpKCi7",
  "key6": "5smQajb93rn776dRECfrRuMf92MFeqNsmh91d5Ns1hkVtDUgFLRPG4dKibdSA4TwWGCYUdJMJFDjaA9ebG4k1BZJ",
  "key7": "4HBx81iFtoNX8c7odKHSRj7rN7F6cxnWAeFyhU8sRh1TfZnZDUW4EuMZ1u1ohzNFSuGAWkUo68BAbnkcj7XqKM4A",
  "key8": "5DSGHoqeQAi2rDa87vKKcCJgwgPbG8RmUAYvAEexLvEvKTSiy59pTzMTs1NrPgatqHu3w51R5eTVmdz1jG7L8sn",
  "key9": "3FHvcmkoyMMkdVtpoZL7gwmZjqyv9D3hqvskXRkqsM3H6Wd4JPSCeWQR86pR9U5KUY4KfrE79wXRBwBko24djZHq",
  "key10": "5Rdekmspkt4sFKScZFvDWDeJCvpBAuA7Pqxzrw4jQQtKHseK2g76KjEFVntAJx1FND9X1HixaBdQ4RFowPcvYD9T",
  "key11": "e2KfCX2HVjKUmFex8GF9xtCXpKTx6hbPzBYUbocJ343PjxN4zkBpujvFCcy5EUk2kQT9YhxENU4oJMFn7bGrWKa",
  "key12": "3Mb6f97Q7dsWa1nyYqgdbSYp4BsChED6qF2LphHQbP93F56PAG8xE8VkUcU9ZbQbRoKwJffiFx6n2HLwNiQdYaEw",
  "key13": "26nhQgqnQnAGmYZheE74LJuKkqQBghV3FVw6UWuds7JXqioXofToYG4DzSC6CR84mUuU5KD2MzYKmZSG52uMy4Th",
  "key14": "AKdmEqKbxfy2Li8KhxLxUiZZQ8SW4c3SbcbjKfTXQczRRL5RwKHGSzjkEQPmsPy3CJ3h6XXsw3MH2duXcRFPrdF",
  "key15": "Bg4gnTBvubED2NKtn81YFvoDWaLYfVbKvP6cFW3PWXvAQEgnWSUAdfEoZKbrRC7Q49mCmcmnB81DJQVNiRTpLuL",
  "key16": "p3g8SeJHv3oqsLSAqRZJPE7XYFtjCPwNEsDE8cwAugXcQ35nuUai9nBYVBQdgsLpXZXzuyVgnso22riotGredrp",
  "key17": "4F3nUCZhbqZ7b1g57gJu5xGHTbV34bVpDXAJhSrLGgPXy3uNVBNcQ6FUVvqdFp6YMYhowYtTS6vBWVYxiZgsy21E",
  "key18": "RuqpZWdx5ruF8k1mvUTMQsZ69oAxThx2MzGyq8ibhxjKrGyTe8RZQ9yitPTpF1S8ywuMznDAFty4N2HfTYxugCS",
  "key19": "2fMbbnsJknF44HFTP1zsJbhhYGVZUBMGwjHZq3KR4ivQU3By8YedQmduLsrrSN9ZTbDeAjarySZYd6GbCdFAGxMB",
  "key20": "2MWJnbZLCEUycPsbdXrgNA9uthktXwcs3SQJP6EpcgJiG51g8YF2EHk8oqfPqkiFuc4YxiRVHsYaRiYd1bMqpBGT",
  "key21": "58qghdRQoXYnhYGo6gwNTQtcd4hot2qbJooHmwRAZfAZZy6DvV5txWqsbq3MQcjRhCNxazSa2r7zCeg1LDpwMUoT",
  "key22": "53wguUofg7ak9qwoJKVdxF4tETbszQjhUBvjYJfXarum4sWqYwmUjzrzKPep3Fma2Zk84tP66ZXo3JKjjrDAt7b1",
  "key23": "58v7DMr3ZXQSXAvS64LNVf97R7dAs7Tghiubs88rQcVYoEvbuWRPt7aivzZKoDCqDdJrCdcmm4hTRcaNtPNSJ4JN",
  "key24": "3yveh5LzxrvYWR8iwbMLnYpiiCztX6Sgiu2abn85ch4q23GPJonvKBPaR7VzbjKxYogEJzfnrQQgBgCTRiessGMi"
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
