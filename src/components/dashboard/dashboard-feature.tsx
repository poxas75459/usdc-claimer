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
    "3w8pjht2TFnGSmC9K5K5wjcppANpUEEL5pKtUt8YKPFEejmRYf4YiLVwrKWff39F2i87ALT4jLGTnc3jyxSMz4Zh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hf7CmJ2n7T1ajqubU4KUN4fQevUKPFYdNWNq5tGP2htVNA4mKUtEdSAsg1M8k8qdqUbmz4G7P9AiCkta4ULE2oF",
  "key1": "3CVrvHtAk8LCx2mATsaxPgsVLH8vidxA9dmotwxFs6XQTBvBsLvztLpjvDj7A6Qm3qpkgp12fJSympSFyUm6chXv",
  "key2": "4VkQBbqNGNNvbquT7yQPCWHD1kk3Ydft4Jt2cRSVPWHFKuX4hatGN3vfqRQWuPz9AB1rz6CysXLGM1FF9rd3pUFT",
  "key3": "4Meg1TfLxPta3ZfaqY58Nck4Ne1zXKZrVqVufDej9YxVETG7PKZamQw3w8WueaXR1xKfZ75S8uk3t4e7Bgnnju6j",
  "key4": "DRWizMef8k5JGjmqHAFZGe5MYzwaitLRXVeSjvJZami9B5NC6jTakCDodSJn466dBjLuvs7htGdnSv6tufX1nz4",
  "key5": "3SXspuuXpir7UqWrW1wg8U2osukVo63RFt7VWXLZKUhrAqkGvZBoGXZCyTe6qDq22eppU8oyqU3zQwfComH4FfwV",
  "key6": "3i83PJheaGbxacQrsYpkkshz8RSMtDN4TtauuMxoURmCR6J6KyvSeFHWPjUUZ6gLt7aZghyjhAKf6xY5bocJoBWa",
  "key7": "4YQGPdpgCUFZg6gA5avCdpLNNhhFkuCYiwQcLx7heBWK6dL3J2LdY8fWoe8MQqAuvSspZ9Uhj9KksbyMQ1TytivB",
  "key8": "5SPyYRMTsXwLTDCtAZBpBVBxUAk6Wns7c6mAsmmVqHLez5EiDac4wSrfWTPkpmGiJXYMBwXSqkBWMwZKL9uggTTH",
  "key9": "56tQvfd9qwDsZ1yHBGh9V1UTQUVLrKKiTNVYRYQK4rAZWqSwoE71Cg69nYL9DKvyLi9ur6zpdaoY4fPUzVeShJK3",
  "key10": "3cigDPA3Tifwuh1o4Rdx6ERbj5sbrA4TMuqw6YJhwwhivTgraPnMYvArcbP3wn1Rwz1jxenSPHSu1m9C5tHMepqc",
  "key11": "2L1s4E4FteXD24yvG4Pjv3cysuwA3dY3a1gzjJSaufN5qR6YhFswgSc9X4oQ98iLHKNtKk2BnqRsT7xZuVyhq8SG",
  "key12": "5mKonEHnnpPM4gW4URqN2dFiupaqLtWsmRHf223nzRpFqDRk5KXEetDQ5jzrAXbUs6VZ7wdtNffyqo62LZXdvLRR",
  "key13": "3T7YWuezWA7PE4bQm4qei61ZLU2bxQMRwhUW26fuC3aaNku6KcZbjDNUNkNQawbmLGpnMhGkBqRQomyfn9Y9SXLe",
  "key14": "4fDm97t2FaKxGZd9ckb58Ukxqh5AgQPJwGAiJNJFwvnmPoHm5B2VK45NemDK6vsqg8zQWEhg54yaeJrtmuLYpV33",
  "key15": "2jgnFD3vf5YbdkG8FWLkqPFUcSNRbrFwJxnPsggb8B7AY2JdmqN7VRnQqXR7VyE6cRgQpz91RuKdJfgPZBiGuajS",
  "key16": "4HzZLzJVbvkb2G6jrik9itw76jrzjvhyvQMu557nZJFiAacbZjBBUAVByn4cz9hZaYsAzPDxkXWBJ19Brz1TvxBC",
  "key17": "47VthFUELhTv5t94MUGWND62fsbzac8cFQW7NtodFzpKjGrgUbJGcDouU5HVUfCaRdZzcZapc2GNf7CLcYN2XqYH",
  "key18": "2tQSiwuRv6qjiysAp9fYm5YmPcePBKRUy58iFvkSEu2EaTQqJVuYPVGz2h39Xhrm92JP5qgiaa1Si3XXehxBzsmP",
  "key19": "3vxXTwK2kWfLt8Qo7mURBBkfQU9Aybs4qL2kYFFqWhV4yDJsMnaq28NbMRuvLRgephZq4vPvqPDpd8Eq35X8SdMu",
  "key20": "5Q9cDbU3FyNoV7YTzQ6hqbVQknHNtT4DXcc1PTVi62XBbZ6HFvMuC8NFH4UVjvfhNGPDCAQA61YJ5aToGYrgMSyk",
  "key21": "3uHSK9G6W6Z9GLzk5mYig3c3BWtWW14UfDsSZfnCXxyZhFUDszAqwXGrYeQRogR4fmdAZxwd8TaQ7GAjvDUZvWKr",
  "key22": "3Pob8Ucs2UhXvKH84FsoMmFpV1tdgKvBh4up7U3QoWPKwqpD3CgCATZEas7bccG73yN7aaYwhxh25xZY8dmnk64S",
  "key23": "3wCFpwEMCW23hBq4P1JX2Hr1G7CvmV4zrVMDLEcmvxYd3H4aEB9F3A4YgL4RuHuh5JX8288oxuWeBenHLZjZKeAQ",
  "key24": "5w5is52pzL2B9YT3SzsKN8ZVRd7F2BfW9Sw5NwanboybViDFJKHqss2HH5Rs1cEayBt2BmSpF9MoG6hwu6MQGWtY",
  "key25": "59ovaDiQZCPmTSqya4mEctLgmfojQU2tq6xX5wyMWuYjXVKKGGV9ShSoUkEzsoyWde4H2b9xVrTeoKn8HQwQPoeZ",
  "key26": "659zsqQEWSLSiBibET9ZjKezDS2D2HE5wS3x6aurbN2Ckf84LazcxsNUcLcWcPDiL4YiY7MA7tEheWRkK1b5fkw7",
  "key27": "7VtV7yvjCHRjsPSCg86oWYerawz8feef1GFsdrmFsP5NUwwkurWzRAQRKDzPpLtYzSYMB7sMVr2WA2zevLWkYgb",
  "key28": "57Z8b1PKwvVXosvVihb9X9LJbbF4j162vVhRKsZ942TdpA1ZJwEoBWbBgHLqkN6TsVw9vTk9y7k31ETxpT4a9ggX",
  "key29": "5xWSE3c6d1gdRzqopzijGWU3Hxx9WgJwR4ngsDWE2S58dRMWRkWBnTVoXbUG87VNMHJnpVjx9zuygsED5LT8E8bE",
  "key30": "53yzp5aBm6oHdfytkiK8WLJPZWa7BFTErSFa1BqFNpfHJRYCJNx3J5amSZcP3y6PDp1Xgr6Ge4pp2155wQu2aRa7",
  "key31": "5Z1wkKwvW83UQt5NhPZmKL8ZUnnqXo2iJQQSyCRyVnZX4SfkX8gXVWv1UAgqUUDofowcygHbRACCcbrFikdFxdzk",
  "key32": "2UQT6Sp8GHPA5pBioKGDqDs97Nj1sVsAvT6Yn9o2czYVvwdmJyzCuHPYvUtJ4pFPva3x9HELFueMySnPYaRt9Frp",
  "key33": "4bxwnyeeLHUg9e7NG5TYiopa41Z7wgFrsPVjJvhTy3AzkAJfsqvCvfewSBHTbDDiZf6sDdNeAZNSXogyuSA1hgZk",
  "key34": "7Go1KmJTdcnSnQMMN9fQwxbL5XeabGK9KGwNyqjWuR9qegdk2bQTMuV6yNcSvdPB8FLbTSx5PxonVC4XsuY4oCZ",
  "key35": "3LFcJm3xipzsrpKB8xqkL7vTCpyHepXJSa75S3uEiFsT6PzKFJ1NEDqZPuwk8NeKUNmcbYckLvi6uztsnoqy7xbY",
  "key36": "PRtpMxHK56MZjHSP5sjND14pAGG7ncb83QUVSMgqnbLpvQbUWRqLdzadXkRNmcHvk9NeQoX1m71EhozXtWrMmWr",
  "key37": "pQHioYCyzGRnwQ9zdoadnNzbzp4rU8MCSYS6EofkN9AX81dQnRCXwu3CVFKq67yCdEC1onGGnAdV6SQVY7VuAju",
  "key38": "32XajQAoMe1QGtgpyxksgusnKCZQjtDhUSVD6ywRccMNa9eTggcaKZWWRFumuFYF5q9pRDtx4Xcxhue7f8Xhh1rk",
  "key39": "1GDXTvTXxzk2CeiACbR87LRvwazQdQpfDRQQg1kGC4vcK1faoTADSXayJJBhgqPuSVP3sapuXpM1cZyRhx6TWtA",
  "key40": "3HUp88ZKNuXUUkTrea3p7SvkTN9PBaRdECwzSLkAposvsUdT9iCn5SwouEvKkNkj8YburJSkpaDBYsr9tpDVTcSi",
  "key41": "Z3d2cdKWWPg8RZi6KLAxiEoEmf72BM7iabybr95vp6i77YytBADnXEvNoQA3G9viBq21WT6Z9QcJdzeVdW1euKN",
  "key42": "3uiNXGk5JQuziwRf2ZYzSHLAtZZBkf2c6HBxBBkQofUQugsRpfTHJGGVbbwvY1bEauotmzSZZemDARZXV6G4j2ET",
  "key43": "4GbTvBVqrHLSVvEkHqU2gZPDb3fNdfKzUUqKsBV7eQLMinnaVKuhhxf1p5k6k1oSgPB5Fn8ADwJBhJMs4umRKT92",
  "key44": "4C5Bhpq1PURU777ysGs2meSWnbRqv4t2SGkuPoAZu2xJ3NZFNDzxx4X1XcB7jbhwtxoTd6iTzgDQWETuiT77Cf7e",
  "key45": "5ckpwMnGJxRnaCSKkGaQq1r7fZoaheLT1tn5NTUT81DBGy1R4xFcVwKJqbP99KS1Y4DBQ32nCgiaHkuezQoc67Hv",
  "key46": "5T6qNDQBwjryKTD3f3qmQAi6vapXCzS11McG925pCdEMg9Xjxr29BMPqM8i46uibZcnKVUEN46uZjdMmVp1RK6JQ",
  "key47": "3w4xocPQcr7XrswiY93Rj4dZKNcNNSLq9k6D9DPGx5gAY9ggyYmT6eT8sfkQxSSnycydyMtfHvCdTLMJ9yPZp6NH",
  "key48": "HnJBELUFNL5nq9Bg3u3RFX9gWfYm5ByzD9yBKneYNaCoJXuLZEYAkcxjMHBgkpZYxpkJFKJq2nHRRupTEpd31RM",
  "key49": "5CzmHUaTDbt5ZbUaf1LBLz2mAh1SQPz9F1VGv6ViTGxs727QidsnCzYivZhE959LJ9iXBWceG2jaJLQPPARw8wRA"
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
