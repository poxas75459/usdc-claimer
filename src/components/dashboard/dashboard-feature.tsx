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
    "3dqyQ2SjM6XXeJoHwhMQC7qwDxCycYtotHXggntczGptXAUXn6UMF3JLEuVnei9KDPJpsxfgn4CuHnar7AnuJGom"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49poYAAnFkjM2szRy1VvkTYP2SdqjnbUfQj87bW3JTc6pNfinLyx5mhaaZJR2zEBT5HMbEHDEeWUjBEn4gaSiCF5",
  "key1": "3b1Y8B8BgziGEjCMxpM6eQg2V9z65dWTRRecMPt68Q2nqtgHv2pbSmPfdKDEGMEpKs2dhEy3Fto8tJxXJ8QAts2o",
  "key2": "4iHkDg8Y5aqLSRpQgYXNr9LdERSg5SUQs4UNuhdBnUmCrDAjFuXqSQvxs3arhqsJXEyCzfJ1yXDbqAdWiGJSubnV",
  "key3": "3BjRXMWjKwxaEvU3SpjXA2ECRYBNtJpN3cX6nS4XuN12wxi6CLxhGkSV5qFL7p831Q7UDEHyR2F7taHTbe32hd2e",
  "key4": "4cmwrPLWmbcZD4gkiCETB8t68ADmMDtFTMQ7pS39yokhUxeCB8gDkDhW67yN25A2oNPdTcZKdaUDa9zHEr2PVzaj",
  "key5": "5CVcgxmbDGdsKgoimKEiVAGeTjDUYTp9q1R5n5UQnJxVgNP5MEL4LtoKVVJpSf5bFmVLFBuLLLLeN3X3zSdhHr7w",
  "key6": "5hXVkDbCTVNzrtYU53QxGbGui9dDC1Ky4xB3JxwbRdkrnteAhb4EWYDFtXy8wDYALjWkwB2PmRXTujKo3Uu23ntW",
  "key7": "5RzzoQzBucL4FfXFaW6qCrJPR7JKx1Q3GFNGhReJDni4me9kc5SvozsSGPVjB8pbtoAoaHLiLVSkPJHX5ctpMFX2",
  "key8": "2xrbpkvD5cA6cJJ2FNMDH6vPVkXrhndQ6mtb4PY7cTC6wDWuQJ4zig9qSegBm3j7TXC6LRPxpvP2MEnNdspeEiBE",
  "key9": "4qsVFPh8oUrbMCjkbnRNXEwVRw1K6nU9VGwkM6m6BeAvDbM94mWgJNQb35sgNUZVK5nyiYpdmMvV5DR1wHzExTHX",
  "key10": "64kjn8rQ7cutwSAREpt8Wi5PixtZqhYMwrA9dGZcjKKrLbJPPhXPFmtPHYnZzPhafYbWmw6heqNxxoge8NhqAqcH",
  "key11": "2QDCV3LJUqW5TD5TJVKzbFvf8hyT5bgY6SFRpcdEcyTiVZp3bswxWjKXz7v6ytyz54hwyLs22nMr5qEkVMz9pcEe",
  "key12": "4U36K4CC4tupeRR64dampHQduUcE13G8PiLpx2djvviVQpx2Qarj9Grh4EYDxj5MBajuFef4YQNj9YaVYFzqPXym",
  "key13": "3WbLskvhkCmd8e1PnKjqhRxMW4TVNs3FYKZxV5YqZuB5rkSbvems2G6h2xA73UijA3dtdwfY3jw4RM24D44ZtEKC",
  "key14": "51uMSqqFRXU8rKrSz7Mfr5rUTx3uYgYSGW418NgHRsS8VGABsqnUFLnefq4HgvrSRD4FsrSxYFDQdRTjs3UQcJuf",
  "key15": "2rH7mWofT1M3XdfyEBWJr52msufbvDxGerJT1HTxpcQMz4KfDjhpkrmNNu22q25cXarRKp87TbbnuRTTTrzMKbSx",
  "key16": "nzsz6YKE3K9udTZmH4jjn9HzbPn63m7veR6eoQu8dox7mwZviYSKh8Kh1Bp7BFyFC2mhcSm5qw9QfvVfhSc1qiB",
  "key17": "3JaJZN6HGr43Aifuhw7tekA4a2D8yihgEYFMwxw1emLPMbzGqiSfUmhrkiZTCNSL9wKg129ziXSJJBmUpBLPh5kN",
  "key18": "3MhTxQTs32QEUyPmriPyeRLbrfPefDEzR8sMN4mBC2jP7EUJp5A6v2mgsqKiLYPjjLwoosbkPywi3WD5gbeG2jvn",
  "key19": "2DrcU9QYo6oT3by7DgCr6X6jmKdbckfvv3RG3fp1MXAW732hDJiLiKScdF6bhJkVpfJhDyJxdV8akXprGGcp1kGV",
  "key20": "4KorUYCrex5qUWrEY1xZpGVm8FJY1DkEW9ymuX8eUr9eCmzAqgXrbGQJVTLcjVYd5jQyAYWvBAyVrWoFHKSuytYV",
  "key21": "2NRPpPbctriA63YmLspSu5hogSazqKdAG1wrQ9AnEjY79XbZqFmUvgxPsN9nYfzuFueQVLSussQRhcsb24EFqtpm",
  "key22": "3fQUe9xGxzapvNae77uJQBD7GkP3UCy9hq4dqYJ8QgHRqfzZUSAZKHcPLYy6j5XXtcvc3fsnVUbBrC1mLCJEXber",
  "key23": "56uRboFMKemtisTwevbcmUom1BhtgueCfK7st67WhL3LhRJp2AN2iykSmvtRixBAEBMW9WZXvuJGfpEXxvdARNAL",
  "key24": "5Hiswgs3vzCZGT9P1Cu7qpJVFBZnv8q6ZkBF9fnwhYZg5z7XHXeWEaVbFYG4vbgt8w1NuzYnkTsML4v34cFRsSXC",
  "key25": "4PQ7Em4s1KiNnPiQ6648dYUmFuqD8ZVthvvdXmrt71LTE3PL4N9ibk7tMCUdMbAVs1TgDJjmRMm7JXux46PLmvh5",
  "key26": "47AkbEfP8JuEHhnmGj45dxc5rpBtjMSNpsa2QhHnr2eRqbZk2Rw7nVRHbpEu7FPxZZ327pHjXYGiANYNiopX8kpt",
  "key27": "4qjiMHgcH3V6NiB8FsucBQjUbkTyWg3vsjh9DPNVCD5ugwTDjRRh13M89d5CpvesMRduPHzU4yLeidytS7RszL5t",
  "key28": "25MKGuoXHZ3Ffra7UaKKUqTMgdZGhwfrSvVEvzeF8iiTDKzErMieR5YKj5TnG4fCjFgZzUUGm8TiikvZFHRSVMkd",
  "key29": "2KcUJNKtYusV69DwE4sb8wJpZ9SoMtrx9uQdkw1jVXQZo8B5avYXBSAYEDdJJC5agK9q3nAqYvtaPMDtv3wYJPnP",
  "key30": "KUFFSALXS3CfQqgfDAKu5fhADsEb4cAkkCfKJkKs3ZDk4bJzofZmeH4hXtWNC1rvyxikpFXStZgVA6kbp6hRQRL",
  "key31": "5KcjJw8SjbyZ56Frv7V4KZLrebF4wNcCzs6MUpPkzC9dEyFFWHVY7CcHCnx4WYpL8PT4hNvitsueEkYPaTCmqWgS",
  "key32": "HvcR7XhyNibJUKY3ELRg5VxVVtTWdHCuQxfNPBLnG88bdnwN7oBbWQd91ZEamZR6jKgpdrYJH4BZuAoSW1DNqQJ",
  "key33": "2ntW8u4pyaHmXKgSV7F3od4iFkKAXruKWAtAWNsyb37CCQYgGnsLR7LtjoDxZgYZZR1Td15bgUMAZqHN1zUaufC",
  "key34": "5PiZnf6PksLptgT19DnZxZKvovcgF1Y3JUPMge1c2HkUs8ZMvGFVutLhVUSTEVHSu8UVevc1WBzFrKXNKjkFBkWM",
  "key35": "5FRnaYTkgSdQxxphPf8NJigksXPh4hQshTS8MBhKhjw9eiRqNdjJTsc7vEVCzyTrnsg7sPZWyDjTcvMLMNME4BXp",
  "key36": "qPxZXuzLuwECMtWhRonB7d2JuSjZJeGvB5tdGKMa4yiBLBj2TpMSJ9gNNaUvLet6ypMJips8KccQxLqWyoS5gtD",
  "key37": "3ULMpgychd3qbvdqzg7B96LLfAyFsM2ho4TsABHmeT62zhbz8Z1cCJWDXNYmVnkKozjjHpVT9X5h1Sdx8FKL6ACh",
  "key38": "o8A6pLjoZ54FLGt3ZyDKNKwJx5sRxacaFWjr9WvNH3XttSR1wYJrBXzXFXSUNkE6Zsoxq4MExoytrxij2ZigwpR",
  "key39": "2tChThAA2TzxUpUv3LmZgGZywWNQqncXRFPCXb3zZd46NnCZVKVjVzCNUwJYSSLKDBfsXuCDRtZqi7WwZ6LSJFQi",
  "key40": "2mdmxN34ANLJQhFbUo3xbqUQwB5krrn9DBkH3PeXqQva97yc5oy4YwLG5dyR4YywxdsbHj6HKJMWYMbRhA2pyc1g",
  "key41": "4EQ6kX9WBGhsh5kvs13DLZzG3Q3ZNCCGg8ADBSiKaK1n7fvRdYVgZGay3GkJyTdHCWykWP3N4v4wLwhnNqoh1SiF"
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
