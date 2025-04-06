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
    "3Hm1nypiWDBVP2Hmr7xcaWM4TAaNuuc4ME171WrsZ1Smy6tiLiU4ZqQ9WRHuGSDpfeBPGaU2uhEFCJqnHFoqt8bA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49C4ro65QuY3fzPn1m7xYUavRDnNeZH5kqNqoyErrwG4MnmV91orhE8JSaHx2wurxoiBMYuxVg8rrAzZ49RwLKEE",
  "key1": "5AowT4cxCpFd7DWXVPgdTgpi5CqTQR9xqqoY3oTfaVB66VnvpGQmx3oBk5PKKec6LXUEJruseDvJMphBFV3i5scj",
  "key2": "5SiTmpU9Gk82TuL1XesvtFCCJxArFwQxWAC7YQ3HnVEbgeyNwsmJNoausxHi5X5N5WVzFk7N7csKiqkLyubjp2rk",
  "key3": "3TiM7RvGHy72aTExk73vxUZdWH3ijvXkTTxqt9VFfdgDLdixAmgqRcmLuZNFoMddWzgoRLpfwhS7tKE7CuMENypM",
  "key4": "viHj6saZiPNuceMTN51uKnAW4w4c59BieNA9pUYyR2h5P5izdq55quSf2N56eutPYA3Qf81UKqQQK46u7Uuug8X",
  "key5": "RnSHF9xwLyNNKYFUZNdNfvhDakaQTqngrJVaHU8NXBnCkc626tLaQ9asbHZ9CiPZZTpd1otYkoYY69HDhDRmTXB",
  "key6": "wtxyLRP6KDFYpgNYPbrtJWrDyWogpmN2ZNUWqqme5o3i8Le1Kq8V2Hgbyhxm5HihtmEh4f2X7tDUFUXJhopeTHj",
  "key7": "2f89itZx2pAvKhkFLVL1wkEPS9omTwyV5NUKbFaZtUSjRkFqx5GENF8iPrzNygUTz4u614QydvmGHxxMYqeo3skh",
  "key8": "5wbHkbcT5cjPvEbkM9uhifVdkwZtFoQKcjnMJHCoU8uhC42S1xioPFK269yHGaRkwgwVg2qA2JJFxC2CbBrE2mkC",
  "key9": "2unknberHmkhM9mdfQmdfQb82YQQPZGB9g7L6SghvRR25LVVk9yUtMhWTtFB3Ge15KAPLniuJCEkkLY7PBHpZTbB",
  "key10": "5LKgV4wDQxV3WU2m5dounwobjY6Tr2DbCszhXuT9dCRNDfTTCW4Rwz8mP8WQ4U4JiuWdcCeocN4EpWrSWWsUinQn",
  "key11": "tMtMZ5CK9BZxuu9A9fQ8CY3AtpbT3HxBfs5rkzm3Frf4Jr4Pn5gWMCCwRUkdW6owAMBGYoCm8aYFro5X81prS4V",
  "key12": "4yeVZBHyKMsFDVTj9ND8wExA9uHoGPHA1MZeB7txgHoQmjmPdGimjyNZUbFod4nmxh555GL6BJWrBZpX1kaR5B3i",
  "key13": "R2Dcm3Dhymeqmv54c9cDQVcszLjjvJQ25yuUGMDB7WNbNwEQMxeDjnrUtXGPo28BaUsxcqiazYKHFT4F3xozK9B",
  "key14": "53UBPh5Z4EjqEFxaCbNtsmzsnW2iLsZAvV5PrJjvbhK3BtbZphpnFjEnUM4kX26KAKQw2msyh9UmSAzic2uCZfG2",
  "key15": "2MTBGoBteLtUWXXTAe7xbibkLaHcvdMQdhQsUTTxGKKbRnh8fogqsA2TEVycobtEJpnC5czkHvqWcqqw5Czp5kBV",
  "key16": "2kfKBQSce5uqH2Gu6oMz7P1PR7kkMruEG3F8oNYJLrpbFqadDgbbHGy2QnnW2P7AD7UH6HWjjP3JGytzorJdNjSq",
  "key17": "2GcgNbY3K2mD8TGX6gbaKww6nnWk2ZJT2BCcVYtVfi2A7yMBiCMRK6vxS8Tr1xYXP1t6jGyYYSg4PqSGVgTzADdL",
  "key18": "4jwCfn79uwvPwBaWXGHNv9woG4foSZx26P2o2i9HZJvLZfWvqREDW6dgijrqdDJ51fAtKGatN3EL5AcWmmiBaytn",
  "key19": "61KqJBAuE943L6EcnzB1VE3iLUWEGvrfTzqo5APcgFwxuuNidj2447cbbRasHTmD2QzPkcBnonoum6q7xHJbKhTw",
  "key20": "3nB9Fc5uwVs3zv3NcjAvBnV5GxtXrGfsremafpmxTrbboQCttDZiGC2Tq9Env4eACpx8Kt2Ec6QR1ZRmQvsctNQC",
  "key21": "2SSNF1kK4augCnBLDZaqBM56EEL2ibi1o8kz9rg8RhYzCWedDfEreN3YJmVWJjrJy9Z91jXkSeBfHUBcjVRRnAvk",
  "key22": "5HLpGkfvcC75eV7BgVKLgGFPB6V5Q2gwkoHsDcFwwCkBH6ph3K6eapA3VyWNrUpfXmTLrYix6S6SWPqfXU7TiYK2",
  "key23": "5bW2tEo57ukpJ5jNDyioZcmAJNUJCQ8hV3agzpSSXawwEZbG9hHTN9E7AZgnbJCqm7UQKpicyiRQcRhaML1L8XMo",
  "key24": "2CDcm8XQaSiPkvU1EW6JbPVbjeqVgLHqqGh5fuqkmzaoLk8fH9M88amMqtH3brMq1EthBSKvYWs4JzVt1pfh5Up7",
  "key25": "4yHmbzCL4d3rqXf9LaRK9dkUagMBcV5CB28Q45qEUgmLdN7CR84sE2tg1pxFet9SpMdCFi2hzjXWLo86RaNBhMYS",
  "key26": "46rGE65NAPkQ56xShaGGPDZ8GxzABGCv5Ew7ArnuXSDAyJGfvtPKHSZJLgAoXvBUH5T1ib9jR7og1s8G1Ljrbjxg",
  "key27": "nCbp5SrNubkezdyDHwhWiz8QLBZ6Vye2nAF1vKeY6cGxRbLRhEDxxxA39fpdQztq12cd4s4n1ojUv8bYFrvt1Bf",
  "key28": "3fbBeXkuAU9J5bSBfQfoHULm8xgJUbYVwGcbtJnuJ4eEr6U94KpuviFJuFT2kRKrzorfaU8j5XJvm4v6wKCXmYDp",
  "key29": "2HBkv7AABEKFSKsYJ44u2wVcLrxEJ2R7UimvxkNSZySbjJz5GFqoK5N1TyckHYCP4tku5oMF5m5gHZu1H3zSe5jg",
  "key30": "3j5eMPhQpvNzJd8wnEU2Raw5hDXXxWad2fhUmUVQXV8mBKbu2SakVFoWbJSxj6ffsTPCxJv1f8qbPJBypfL8cUEV",
  "key31": "3xMtysfu5sawbN9y4iHtthnqobkMeCghtBkgbukPV2RWUqxmcGGmZNxNts2MQGgGGeQC2PSNmQvdqSS4rs42cn4q",
  "key32": "3z3DxMr6NYCMtmXxX82VnwPCpcRj9VBgbiGYhS8jmYqQfmQFr8UYAB8bEFrGUrDq9vwGCpTio9Rzixveu5bL2qNQ",
  "key33": "2iTDvEdvTfYH4PBmGbJe8yBm23GWW53W556MSaGBnmu1qa8yyD9Fpc7F727Q1y2CtHQYUSiRNhebq5SGjPmBmqQH",
  "key34": "5y9tLGFp8jY8VeMpxRHxD1yoBdiBUq4mJuQt213wJBrS1PMBLK9KcaAgUZqegrAfbHbNr2d8Uuy7dzHh3TfMFyb7",
  "key35": "ik4J2ZtoAsMdCtQSEWL6arz5RaPK8HvgJozXsrATmcENDm9L5ExyHLB62Zg4aMms1VixAtceRCkAJF6v2J1nTJE",
  "key36": "5Wuigr8pfNhzvJuoyxK6AYi4RjqkRigy12PAcix1k7ZVrjKUSXVsrWzvsY72EgbA8KsRKnRh5gXiFs6tEygNPPjF",
  "key37": "2wCiytdT5nH9zKbTovFf6aqYGcZkrrzQbN6itFDUSYe6g5LXGNtvDhvHJoZ1CMUGhHtnokRVNy1P5eZR6dKERgfy",
  "key38": "5ugY3TYi9ar6nDSKetxvQ6hPqpWba3PkSRiJPYYxxfTjeJajELW8aBYjYv5PsVq5MpYoYeQdvyqSDaok6SuB73oF",
  "key39": "3KNVYqEc6FGiwEro9ZgCgPqVrtYiQ8gUz96xFNE87fpQrwGYoChgD6euQvKzbwjCo7ay3XeM3vKGNxjbyJSbfev2",
  "key40": "DZsaeC89AkSKwAvnJpebLdqvzRRXeVrqHryEWzC6qvtndo9MsFFGv3Rnm3mK3DjjuYB1gJLHj3UXAAYXoqSYehm",
  "key41": "4gUQHqs7v2FnaJEYKA94gyR4rcsM8Q7jfpen1YGJ1jLt1gRzNJAzQum5BnHePGG1A4ve7x4SQHGDvmNw5XBETsHC",
  "key42": "2YAFKiJXvgBnZ8ESfWskSh7CYKP8VW3mqcpMC7efGeCsL5oUYdS8x7UwBbfdwRXYyxo4GnfqbZ64Fsn1Ao1SyjE"
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
