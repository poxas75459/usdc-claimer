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
    "2J93KQ8d35CPbGVoDKAzkH9Jz5ZK2kjzo4DsxvC8h2Q86Ap5TRk9GtDyL3J4JkTosoBYWNZxVxX2Z2xYgEZGd6FA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yPLSUUMfT3iAz6guuCP71Yb9bXJyNqQrxwQRGRQcv7pyBvURdifEc2xKC5k3rg6gpmTtLMRhpaK2onKTS7aq8qy",
  "key1": "5jURiSZd9k9LCbEaKFb2f5h5FZQzbigHm3oHN6YMBWp61PE3k34ufe4YAbjGwje5senGtq5pHJCZ2K38f4rijhYv",
  "key2": "3nVMd3xSSb4DEkDcb5K3cg3hP1DNqjBHy36JZtsDK88kX1JTQkz5JcCPoyfkoMcJFN9z8GNkzVp8mHqe6suB4sMU",
  "key3": "4RBRavHCDQTVJcFpQZLYzPn72wjEeaXwVWqNqCwFzc1vyiNADebXtY9wCUggE2QpGZffS1bsDnft52Dqh3yJ3nud",
  "key4": "4Xv4h3mpoShBodb928XakwhAzssot4ZsNeqHm4nbJfAKmYMT41HqTqVvBzT1oHwtKJ3EC1DwfWQne92fkAXNs97C",
  "key5": "5Eof7ZX12K8G6274tZYTRWhsqpLcAg3NVuHdfwiRrJRwhx3pbUcPNinbpo1q6nr6Z7xAriBdJkdAZjRt42xX7y7G",
  "key6": "5BQqT2wULv5YDDP2LgFxScRsBub4hsWtWrbz9GyUWQN5c8Kj7dERukA7fda1ZeuRgJwVeeePkhPRH1VJEgWt8RC5",
  "key7": "5czX2pEsLxGfr86vGqHRpBH7XoqfnSu6PJebNuE7YdwjJGZQLKpRmf6GtgMwSVdEEEwEXh3TA8Qo71hxgBSuggQY",
  "key8": "2AQVMcoTN2RbhGPZJ5F8MpN9b1eRhHvy7kMFKPX97pwmJKHvzYAJhtQhd2jzEHxWW8A3qmJrtzmDfrzNVmFbxBCK",
  "key9": "zJKxVZeZBzm3cvXowL27K3Je5ob1C89noJTMPRXNVSjrxnmWs7fENVbXqzk2LpAtmLecckEPoSnyk6xCmcVsV2c",
  "key10": "3Eo1uJ5Cbw62tymow3L8cvkYGRzf6aPeDoERvZjhVdqWLZvbVaCXjZT1cagEpjspKoPLZydJT9uPTnyYeX7fQNdn",
  "key11": "3eMfhfBAZ7y122Nm3PofhCTNWy3uiRddofYv17XDHFqwCYXJ7fVyvj97PBF4yewa2NyE3GZCp9gGnFaQQFR9Gpzb",
  "key12": "28KQJfbAFxUerTFQMSUkaZgxqjsvaLbA19vArriK4j9ZJrPKSnduE4XpgbVV6rfDG4cb528X2TJTfMgTfPZVuf99",
  "key13": "5Ln2pTu9MBLjZf4U34kxM1dyLocudhcDtY7f6DwbkDPt8N74xjrNubZf1G3TfhvvguxkYKmE8i8FvcCZtfdbDQag",
  "key14": "4ptt4fZKKRezLMHQUi6qDWGeFko4TGpR2XrBuNPnTJBo2pviJ7ZCqkpzm2DqRgs8XetxQB46MJ7MVDgRjZ24EJ3m",
  "key15": "3YRSHLBhwoEuZq1b6NgTbcwqRHzDbaeDJdTJQB3FWUSaTe3Y9uCwhFz9cUk2dkCn9c6YJAjqHYrFN3sJdPcMPD8H",
  "key16": "3QeekCJQBzEkFwisLXyRVgXSW92izhC4HruimaiUwrHHWy1vLBZxHHsZefjE967hRgHHgZWteTx9i5xh8ZzfZA4S",
  "key17": "5yVPdj2UtcU5jSKcn7bAtcFLZ9beGubF4U8DBqDDrkWxZiiruSfBSFD9RU9gYY1vTA6MyG7Z2gTcdyVrNFJ3QG1D",
  "key18": "3eHxRnEZmidck4Q7SZubwpkFds4WTDiNjvYFEX1sLsrdcWwg29H3qqxvZm52kqiskDZ68LTCfLbkCy5Usm2hD5jg",
  "key19": "3mLmQy71LNrqqRPn2GS3ag6AkMEjUEK9Jt81PSu2CzZBZ9dHLrEsMsrErzhd1a6dQWEfrFxKsewuWapvjoZiEmiR",
  "key20": "4qieZtTBXcWN1qzpuzfTiNBkwykpmSzxVMe59LKojSGACjQYx8xehuLNDeXxzNxmQJ5tMow92aLLAuqA98esry7M",
  "key21": "51frMBahqH8qtJjZhjnKfxygn9gVaqXgzGyZUDDdT3uFvNT1WDPcvwSxqoV6z9JwhfKk6mgRMzqpw5vfzzPLsYM3",
  "key22": "4KCYb1VA3cAUC79CpeqkU8xU6YTTsFqPSjV7iFC5mJRQJBuPYjBJ3oBGd8z3778axuSY9EPrZQHssXJTY1udNoFP",
  "key23": "3Fn9kEhYZxtYnb1iagWMT89dsGfmqsHpQKaw1xuVCci7MQAZzcBKbZsJjxqYoBsPECcg8WwqLiMXcJwNNaoYckH2",
  "key24": "39aMDk1F2sWbQdZJhEb8jTsLVjP7hXmWmGtHqWVwfqa5uW1cTZPm9YHiimyW64u1s3EZmQVNRNLM1Hk2e4XiQ4PX",
  "key25": "66T4a9ipB8kFUhoCKn6bEbdh9j7JpSwNxYyDNiRdqbrmRvuRvuBCiL4FrECZZsYnvekyHmU7nGpBArrEFDuVMoqa",
  "key26": "63wCi1bXDLG1yWH6QApNGUmfjWSJgAEquF9waLVCL5W9r1Ya8ZeST9Gbo5MpgK3vo9FcNiT9emoMv63PPpGj7jmT",
  "key27": "4N7LBucesn3eNfySAfuFWWfM6KfRYjXp5nmPysShZimHiDdb982dAKaQA8ykLgVJUzzupW1SYkstNarrvwHoadRM",
  "key28": "42FAmGyVEwcoeJmMZP3htnY2h3kM3bQouR5ghZiQgnVJe8RvR3XNK72qX2QQu84JtxHT6rstxLLAzbuBr6syLM1Q",
  "key29": "5Z2LLYdZNLLN9qjs2RDigGfu1L8Bu4VAiCtjYhmSZHjUtG7tZJ4RZpvS8qd61zYzHyLeBEta1uahDoWm3QrU4J1X",
  "key30": "3MGEEBNWKUfMUDXCL1fdvZNR5XK5xQn3jqZxaavsKje9kyX6ZgWzpV1XUXczMHUPfVL1XfVZoM5KV8nhAhxpBA3C",
  "key31": "EaBNjgVSExyLj6sbNSAtm78yadN7GGLb2bs6pgB4m8jiVhM6Fp7p5caon848i3veRoiBJaGs45ZCwa6JtKdKV9j",
  "key32": "5vZaQXTuwjm1xriw5WqEPBfnaXThnmEHSmbWF2yjcJPFVziZupGPzvatLAwQn2mBkJwttep4RESZ2SGHvfGK7PAf",
  "key33": "4UsMsB2Ptr8AWAKpE9tRvJGXHbt8BUQkZHnvwS1b683HfPUoALcjuizhE9BBDPh93eiybfBbmS29kAyq2dpkR8xH",
  "key34": "5MPB8K22nmUPKYRAwb8yD3ufwnrSt5K1SMadBBXHAmcLb2qa2jS4LW9jSdx98Dze7ifZ8gs5am7nWWjZxBo1szj8",
  "key35": "Aq4rKuzxNT1WwTuYRBunGrZyR3wgP9pn2pMcyj3SRTp5HLH9xBNb8nWCCMNY5eAjbkk7RuqHr6mxJMmjpr3pqT5",
  "key36": "413QnctNddPE22o52qVLgFEH3VPzSuCYhYAmTuAgbTPLvrnP1eMXyf8LGHJUk2WuSyCJH3x6yPpPEo7o9edGScqg",
  "key37": "252Si8v31CE3781ZNTtTyMPnWWmXpwHKDw9xyj2eUG2rmuoqRVwMAo3x1BcdypHEj96wNtJFJK24xyAvMqQtJM9R",
  "key38": "47cMEiVNs8rpe5N6FT55WMjURtoRWQUna5nYuEXGUaf8tbDsRxeJBXxCvCjvevrGaBT8GK9aBKpXHuCNS8zhhrG9",
  "key39": "Z5gFoHzwY89aDDMX8JMRxXVsBqr4m568Drmnj5UvsA7jSYmyFtGqvSry2MstjcoyzCvriwSjPizRTnQxKDzcUoF",
  "key40": "aoTs78GumCrd9wkzegQgxt89DUPSEM5nmJDVq7msk4bATwyBwQGV5pG8S29uhHcvGFW5TXUmxyozGQ9ZMWvm26P",
  "key41": "5twJ2V666uNNRm4qUV7jA2M6Pmw8Y9XL1wfjPy75kYrEkzBTcG5qHzAc6hE2h529xmvnfwHWGqqVtGaSTzXsaRDu"
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
