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
    "3gTjUB3hjZCBNbHw7nahETbftcvvdPGynBRmzacC4yQ2jrWJuXZhTpA1mqnRxCSiDgohqSw8pUeRkXNyZShZBaX8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TUW1t6UVRXUMSp9tcaGPCL7EKYhRrdYwNY4oNZtqU8WqcRzLfsULx2aLv7YWp8JxVZJCZvwSW3zWZzT1krUkGkQ",
  "key1": "94BbFZsV5Y6mExCTpn9TjRdsbpD1fM3LWd6wxqv87jE65q8GzdDaEg8qv9HNJkyRKMSQPrgSRGhquh7HNtfW3ee",
  "key2": "3769SiQkeqVaFDWS2dPkmebALYmBDf5u3yjrg9bVbZR9JHQv5KAxBjrCAEMcYgfDuwcNrBhbpDw7Fazdb1St5rZd",
  "key3": "2pDHq5V8juEWhpvhkYprxzxgX6BS33vTgTHACPn5Q7WVQcr5XYKxggjiiSXCLR8mHCKaqyaY3gjtgsd224sS7zRt",
  "key4": "3DDxCTpgd7gxbxN4GGVo6SArNAohyMbNKUmCnPmap8FKSjGCgCW8Fs2o2FKoD3DKgU4p2CdLD1TGZtr4qBfnwj91",
  "key5": "4SCbxWjQyWJsUc1tucs2qZ7Ppkzgt3bhT8tQX4WS75ddE3JKBn5PCnRAXRoJczQA8TR4Sr4FoE39qfX27DcvjZja",
  "key6": "4MQczBzVS6Jc6K6QoGFviQhiqqVy9tPe1RCpxGSRKG9Mczy61kyNKMdgTyS8fAh5BfP1XDfBBDnbBFiQbVHxBxZB",
  "key7": "3v6oneGvn5EiqzibVAE3QCpqq79LbCjGGiskZ67Bxj1ftGt1qGnwf9ypiq2gX4amAkurYCcXtnjmqeYcWirwjR2v",
  "key8": "5awYANsDaqftBGTsUP9YaudzF1kU1zTDsqhH79qiSPznGsKn4ucKLzcbQDcovDYvjtkqhYqxTpsGBdSWJqF6uabi",
  "key9": "4K5cYJ6ALFSH2AV9uF16PdpNC3c5ApxwcJNqqDSy8RV63KH96twwYc5u547VDqo6bR3QSTB6g9j7YGTKRJrbAx73",
  "key10": "94ZxABScNjNegnxS4iFmi5qp8DnusucrXw3i5qAbuCmeDv5kToEXRZKjRomgFDMKtmthPxMNcfS4PdH9bzThNjo",
  "key11": "4i9MqTqn6zygNrhEmBpecGPSDE3kUaDDPe8rBkkvh12Mv3PuegXJwyZJxWFtmsgAXPtACjamUSQiPYYReK2dTryw",
  "key12": "47Eeki7mdPWjEHR6FUjsLfxdDMbHZpeQeM9frzXGBZjxGZ9zhsYWXbTdnxdxNqhvgGDKuLhYn85VKEzc9vqwRcsp",
  "key13": "5LZ3Szdt6EroHp79xVcp639mqQ8rhGwNYqHUChZHwL7UsKXhEhobkck3u4irRo3MvC2nepznLMPTekXgWxPFZ1RE",
  "key14": "bjcqDnPJ1sEPZvfgrwtU22V8iSCEA83Fk535wjEr9awL5rYnQcumQ8cjDpksEBP4owQet8inBXNzkomH4FQxJ2C",
  "key15": "r2A4MVj4HdYzeKG4ypsfwZNoQfo26oYqZsF3YQnmxZm54TMThGLGgs28iFF96JMp11YmGoSceEYwzaSChUgDqSM",
  "key16": "3jC6yPdLtNmgtx1jtcMhZ59tDu8RgKfkCLsYAxrzAAcuvnkktsJCbZpZtFDceTumf86ZsMzrZxfX4JWXzPiXuRAr",
  "key17": "3dWWaBGLDEMZar4Mh3CG3R2UkD183dtru7UgxLbDKnPnXJyPgYfKp4dsaa3KSiSNUJZN1JecK79Ac1gsvzruTEgT",
  "key18": "5QTihdBLjkpKzKWq3Yew57WufnYGeF9HrQfeDjbADm1vDLXssNpyYUw6YarCFHrYjBfE7pQ8eicQwyCuQJGQ782j",
  "key19": "uMbtVhuHig9XwBUd2mf9LPYiv1PtXygRbX7S2zdnCcbS4agDdFPZ4CLUQ1LRHoZvTaumodw5FFfYssbp3LpcVX4",
  "key20": "FCiNhtGC841QLhwP71mK848oSJMUEvrVGaNUJGkUSSs9rnPfqZmDP5a7K6qFnp2hLZ5ArTBFM7cgAjWvzTTBa3Y",
  "key21": "3kStP3ZmSGmY7sYVKphqtvby5S8ruBBrK2dtSUm8n62t3kKMoJP8DLaGbt1oeCGGZs14sXSk5FMNKQ9bcFa5VpXe",
  "key22": "4zggc7mzVXtjBUuhQ1swngN6MzkzXFMufUt6VdRKZMFGJVyZ2YJCTM5wtNRJnHwaXhWRkmGFVdku33h962mCNMnQ",
  "key23": "4WdT3Y64aEgRNMswWF4NCo2y49J9MjvRrVZnboeDDUhtaPFtDbB6zLvChzb2ZW4B5RLah1CZdgQz7TEfyLvwVMVX",
  "key24": "5xdBJBMyaX2FDV4rb6G6HUd3HR8u9g1WyvSSQcfNVx2YskCHCfiVziJKfxb1zPgq7dQqRFuPq94qzP8iQmCu1KgU",
  "key25": "46GqGbpGbqV5iyiNfsYbH4reQrsShgWwpngRUuSnBokFMtB2eDqmLjKGNAoTDL6PwZjDjouN9CFnvxU6uzVxsVR4",
  "key26": "46CSfriWvEY5BCFCB7SyieHoPdgHa5KiDkGbYK8nP1Y8i9ZJk423Dh8eZHjQYsJoXxMBdhbckZ4bDDjostp8QN1T",
  "key27": "3N4SCFQpV6eZ6t9dRFL3ScCYMbwSLro7PqKCNiHvmgDVGmcXZDQHKyhhCoiAVHN2ukHD2KcdRu8mnen4Bj749etA",
  "key28": "642eAZJVuhFeY3faocKYd1pULVAqDifqHPnyGRvmPHHGT6ijpa8jBXwj1kUnyBBByjWD7UEVb9xtjXZGbtgwwUJE",
  "key29": "4QF1v7sDYn71Fn7PC4WGkrQW8TQyc3benr5vWTfMzGup4EHH68xtkGDppyPzXUWGjfBUJfi5Epdn6VHxEe6amrTk",
  "key30": "3ypBuqYwCDFrCqz716SfnUkkDhjcJMTdQikYRvUcgc3QTomC6xG6VNRjSVBa5KXuwTqGHPD4KysQvwwrshYFTq8x",
  "key31": "5jh7YWc6DokP9bTWZfoSAC4WnMouMiHNaCkzxexYjFvYgbGdJ8TwJsUY1NGqkuibau3jLZSGUF5odFrLyKqSSvhs",
  "key32": "4rLNDrU5fcru8VYKSdrXvtNmyASLm5nxNYeqQnrGs35aULUCsjYYWmVQxv8FdCfbMXAA2pd2kGaPFJ6UUH4DFYXZ",
  "key33": "5tFfDcnrExCmjRSbaJ5GXjLVerPLzyShZ3SGTCzmgit7cB9P1No8RTVVrGQzjayMVhQVab2itwVUqupw7e9RDZVq",
  "key34": "NNqq6WcKttwG7m5MnYjVFg9vQiX3DTVKTAMDY5aaWxWx3Eaib28ScHyWMbCxWhJBJBkmtCdYrAwicxfVcMrRfd5",
  "key35": "47yeDMzwRtXWFG3QbaGoeKnY9awdP8Rnz6r2FauDLYktxJrrpf3HQpZBuxAKrUuN7NZ2kiyHtQeVwQkx2mX6sUoj"
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
