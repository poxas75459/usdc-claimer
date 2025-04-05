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
    "62WiJW5vTZ9BsAeh3KktEfQLjqJps3AE85UQwi5GrudBSfPw3AG4Hh5dUbP3gRbkAujq3jKr9DDxxKpvuk4fQ1fW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QHBFBCDr1Jq5vTo9L45PstZcSkX4K78nbFdXPmbJFoss9fVCTU1Lcxa1pWDt4v3GRrnk5eVxz3Z3b4jVSwPwpPf",
  "key1": "4zkiVjgnUZaSPE5hxUEPCpMtiHwd9YA5ARrHShoaryNGyA9w93Mx22nVyAX7R1UzcXtbSbbYSLFnoNuEndGUvDZD",
  "key2": "5p5pxBCs74rVoTKMKUbCHHsCf6UNPzUpN1LDjzDkYjNEr1BtvyYVnEHfEWUMnoySgrwJu85ERosGict5GYgQ4HDi",
  "key3": "4W4JqwF4L481p8bmJDgrJ2dVYxgQE4yXR8VknF3yEnZgfASUwnTN9m8H63pRcecrmF1wS4BQzoH6zTfupV8NfheU",
  "key4": "4b67gZbSFuUAs84JF4AtPLfdCLHzBQvJBKYv4sYPz3fanEyCKufH9gSq1afaLLNb7DdkYSABP1AGVQjM14QRJaiQ",
  "key5": "3p7To6hnoZhFKT9sY7QaAZQEDXXkGXuTdewkV2mXSkhQpYKLB3zztcxSmXxsg2c5WjJUC2WbHcc4aFQeWcm1mJNJ",
  "key6": "4wrDittPYD7UFgqcdJ3RYH3r56iyy5jtpzcmiYK7Ejie6m8rsRmubfjtRBYBBNxhAVtbQ7MJEQnfxUFeEdhGBFEw",
  "key7": "521JEaSx3Zw8NWC41pmaL7aEmKRgLhSuKZ65ybwBmVHFB94hKWMyeNvZu8zxXm9b1zFGUVm17MPTXHtnrnNyGLhL",
  "key8": "4mdZy8CMqKE3Xa95FxRkRshAP9a6VXiyr5RNTUU27dKFJPzWFkYeowh7uqLmjWPrB4s5fuEBqfR3iPtuw4gc7jEj",
  "key9": "2XiZS7yEfFKtvAWPLvKJXZK38EFbzSpAnLSnMnamfYuabiSPMtBPCvJtw839nCJYdznGkrCQeigaKkarLM4sREqL",
  "key10": "3fPFaFrVhfz73ie4fZ1er4h3MQZNTYtUCZdyJn3UbrotPp17vq8CiTQVe2U7KdNbMBpg1WZH48sA6VfKAYNDnjaM",
  "key11": "3K2PGu8uQdigNNYNsntBe1v7AdQ7x9pt1EhErgCPh7jCMSRAMzLfbgv2F7kMvfzApeoSHAPGmohxuqWGRnuDjXoo",
  "key12": "8PqmLonvu1CJre1Fku3nZwbUhApxSTYzjx37qyB5SZH3ZgAeF1XGvmQUyUJHuMjNV4TNykMcLzy48vNgESzeX1L",
  "key13": "rR4CSku8GnQ2FEuEu4uZECwVXDgjS3pop3wuPbDdKCxsGbcBP9xQS7XrNtKgUkzGZdJrtE6wLsTMFdTSx146XDE",
  "key14": "2BoYCg11zQvGLnykNJkeDr934KNXS9pQygTnmu8GghVG2TtoF1W5fPqfjSALRmAfRru1P64bnzUh1jexo7bD5z56",
  "key15": "4CbGVe7kR7YBp6XogPFhz88e3t6MDg19SdVrUHQZdnm8mvrjMTTRcXWPHTuamqxvSC9K18qgc95brC3oLMed5HBK",
  "key16": "iwyFfxik9idMiknX9s6nQQnU5CwwrJm7G2tke9K7iUQmizLEWFXT3tBxFPxvJd3g3H6Fty1xihsn7hFCp6ySMjG",
  "key17": "2AnU2mYqhv9aciTHgUrhZn5RnfimKt7vjL8pwP5aKYZcdvcTP89tujWzjDUPGSvy6kUXopEMWdiF8K7mzGEfxGPp",
  "key18": "5srXPnE16Vpg4hjedTUqJXWhe8sAcx6Rc9ggXpcAUC9UjGjNpWkrC4mRD4Fjy5YVtCaaH4Dt226bLKZLMUKe5hA1",
  "key19": "2PEah57T5gELY4eX8Sv3RDgwqb9W7VoawoSXwBNcYQ77RJkZq97Teim899YeyM1mUrxKSs1uhJk2PJG2grDc1JKX",
  "key20": "3UNssgoQnVKorf7pLuXpqrj9SLMVqbw8mg9fFXyoTiBVTC6HTwU1suaeFud7WYvVFKUtGAQHr1VHLrv1LhxijncW",
  "key21": "4ae7PXEdcyUtsvp8hUXqiBDc6Xj8zTeV1yha33vaGZfAHkZwtzQgsSsMzZHTYNj6H44VewfzTLzsvYtT2kuCRzyC",
  "key22": "4M8BRmqyrLmPRgiqozbqQgZAWbfRLhbK7u9whW4TiAA5pxpkQjr8nRJFeTA7SvNgtN1S8yebxCrJuG255ZJfkjxf",
  "key23": "7PtskZ8QReJWyQCQYmEH8Q2UKgKCPTwQvH5GxbgScLtssPuhZdiArX8kvBxfcBMZbsLYrYxV6zYMQgd7AYqXhLJ",
  "key24": "4VpfjfBe5zK4ak2wtuHQ2kyBQLrZGfhXxHYAAWY51VS1HjQ44rpyQm9CSUjZh8SzWfu95n1U2cZLbxN941wqK6oq",
  "key25": "3Dzi5D23e5JqwFaK7JkY5G5XkiWu8ycH6uXp4iMwdjS7D4k7p7LE8TsaKTEja8NpD9DGZY8BzE5XNhskzn4uToux",
  "key26": "4Mqo4j6knENm1LLbHAxUjXZ8HuLPyCrnR5vWwzLPtX59MxKtwm3vibyBvHEtKeozpnpGXaTBzDX9tv4LqUkN7N9h",
  "key27": "5yQCXZxwtQcNsKmAG6YfN4sbj1rWg1jyPnhHguo4MrQiEjHcMSBxK73dXrs9KZokSs4w3otjvfKthiQFxAS1HkYi",
  "key28": "2mmii6YLn8TXc36L5x1YVBsfPHWEjtb1gSWVSTxurf4RRDS1Ao4MPJg2FRSsp9r55iXTpEquirYXdEffePyKyccQ",
  "key29": "4v1LgACmeD9UQWMT9rLHepwhH4K5vhGxvkZStV9QRuCMTH1591CBro5xUH9apEy1YyTud7LuQD73dgynFMPQZHmg",
  "key30": "4vtk1d3bVMM74JePb7TmhmRubnA35NtRjnZCRQBpPPoymxYJMUYNnnYcnGNabAYkTy639G6HXy2xLTfs1PwrMBti",
  "key31": "58wgTjcxo56hdFLjohqyvTmYz6DfiwRcnTTc2GYBd7MTerDsuKZA4Zh9RE1qh4j3xQDcY5bmfKjR6EFwp2q1m3Mw",
  "key32": "3Ba7yKimXuRPXHU4HMAQFRTAND4iLZjJ42N14wPdV14a6HQeicW57m3Q26tjdLpSmmY8hRdJUQLRcQ9HwHnqTAQz",
  "key33": "qFwz93gDoPrsu8kMq2ExQDnQiaWkrGVBkrBVXwBjYMbhgxyqeTLDFWEhbT6F7JjgU3JKcJxBF5x4hCWkcAGspAc",
  "key34": "23SR9tnP5nMyLxC97mxokRo9zB3GEG79yza1U8xhT24cKZdq1FULZJ1UYaM8yBCKBehJwESNdXXHg8b7uM2bkev1",
  "key35": "4tQsNzeGswCLmMSqXjfZWyp2vbcvrPW6FheDRWT5LebzWTANZySKDTYZpVovzptDnmnF4oA9m5zVSGUkucgGLbgx",
  "key36": "5a4Mf2RFEqcbVsxZDtgE6L2JzjKXCDFathh6stpQ1V5EnBZDxAZTWnAnaYzKApNUeSJd8hKXGtReYRr7y7PdzZcM",
  "key37": "2XuN5K93opzCq6VYUXcZREwtC95raiXPjn8xRGvdLq8dcH7r5zT6z69f9qSoBE8YwhaLKwE4g1hbYNsXYt4wfhq2",
  "key38": "2sLjzZDF7UJjJcv7qEAK4ooJ4zN43mfdKWxrva2wZ5MjeSbNDn6xmv1AqpsCUC38iDKCmakz7QNtLPAipmyUPQGK",
  "key39": "NozREqUJRtfWzbpZjfSkcnZ7fCQb1NjPrMJoN6Dr9rQsa8A6HkDpf3FmAWMcoTK93G6D7Yv3TjtZDAGCnti8MXj",
  "key40": "4YNz6BEoncodfhK6Tkaja3iKUgLEUFEQVmBu2iDGdkRBFANotRhcUePAqrxJsskFekgXJvuFfEsap6X62YPZQpnE",
  "key41": "5vgSoikJqNmNqQAJFc4ajUjTfMyc9S6eiErCcktNiP8nnnupZzN6vKnYxfFHqK9a4VvKh4XB3gwHqFw5CQ5uKip8",
  "key42": "EKG7wkftygYWXQbfy6tNC8nJoBvewTM9G6Qw6ezjM8tfzSe4JkvgQ5ikKm2NFmRLBSryqUr5LYKyvjV1wJj3fww",
  "key43": "2moMyerg6KUebsw471M1rFav4R9g2UaxgMwkfm1yPe87wEXxfLicF5XBEJwCqxK381RxE7NshjcrFt58ed8niUA",
  "key44": "37GhuSJzxyjYaJ2JdKPkzgA7LpyDtTVGHxtpZaZrjeQFHnRxPH6NFU9RudD6qSdCEjrg9tvFNJxH5ogVArDyPtwh",
  "key45": "3aAQnWCnPZTZCYJVBbrCZZKg65vBbqpST6tKnpaUbRCsLansKXa7Fm6h7ZjA95LzX8qvuJHsoWYRNzugeogE5SmN"
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
