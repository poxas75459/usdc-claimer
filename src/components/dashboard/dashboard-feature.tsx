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
    "2GKEF1iLJv7SSbHScFZs5wsbke49ZkdpTJRxRo9HCUABWFMiniPSeXZb8JjgzuVfKWyYvxQsBN674pAMcMs9udHH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zrxjXdZgL24ZDcYAeACfsi3kKzpUUAb4phb31WFvYscWH8qiBL5cF1aeEuY7GMR9cMwi5xiq9gcDAYZGbhLuooY",
  "key1": "7QExbMDPzbbipQgpqKSyXduYgHVEDaakLx8JENNVfgCuLZsoBbMhcHTr4bngcHMHsRcrfKxYLzWKkwCjQqLteU2",
  "key2": "t3tZQvujmup9aNC8eGAxeQKkczpJmh3hdxLdGRVLvEsMcs3zs8yJbGJAeVEUXu9kAQvKDyCH5vHkvBpn5kCguDh",
  "key3": "5Fsh9yrF2DGmEF1CqhfSG7fVq5j7LscFpdNeGTmqcgQHtKxeJjmfoS1RwDNDX9sa7BYN2rZLLXJUAseRg2MNU4rH",
  "key4": "24BRWz9tXw1M6jwwm8QhHoLfeN2senJ8VXR817fGddKf3ZGwQ8wiAoYUAAZuZeHhHgZwtvqCBVs7hCXCJc2zwP82",
  "key5": "3srrqHQyvbY1tQeH34RR8x6cy91i2RE4Zu9aENrxCdKXrhGGDVN4pfNHoCFYHVXwkR6mTwcgtgva67Uevc5HrsuH",
  "key6": "2TXNKAgh6JMyjSYUNVJASwG6ygw7jYfbP6K6m4pAVmeqf7umrans7ECqua9awMvWWZ8X2ucFANiHrpL6eqcH8jBJ",
  "key7": "4c1FvZ48Ry9yH4h4GBM1dEMVv9sNG7dJ1CxKRTaJ3E1sLqac7Nd3VHrf3byrEJEnuXRJKkHUDnPwzZJAUAq9Fecd",
  "key8": "2hLKqjGJQHiBpKqbbScoozrhDQ4xS3MmjkLu7PN6G8hNUeEpD6MsZ9cnLafGNoUFLrhn715EyRNG3Ff51cDkwGEQ",
  "key9": "4r62hYa2CxrWZJ3tvgbQi7CnTXtU6UA2SQcrZeR1eLMGAuH3iJMAwKH2DkyA4HNtu9L8Jpq9wH8badhBUuhoP4J2",
  "key10": "62rdvPKH7poP9sx4cFfPbXHprbCE844baqtRTii7R4zipszo5N7JqvzgzfjjjMo4P1T4KkZnJVfcASGtssjDPPRP",
  "key11": "27xVw7EyXTpa8j61o875r5VDPYnxtbJNPkZzNC4uvGaEBUgG8168ZRoLBa75EgccUzxo3e2NRJEKqiq8wrGRgbhS",
  "key12": "3obYq1Xe36etvC6SGpNV5muB7QXrWiDqsM3YfJbuinbpLTdp1KshWD5VQXtstTwTuA4FDe6ihukYdur2DkSdK2kB",
  "key13": "63YsPi37KW8syk88oqo4mpbCXUzQop6FofaGyLaVqWKx7QMf6Ykbozkr6dMixCKhzEEPiZWWQfMp5SBLB9qXeBXS",
  "key14": "5jwawS751WcmQrMCtudjVcpav16Mv2ktMJXrm3tcfoMXLe4zesAUvK1iH3n1M6CkhgjxLi3cuhyYGmeWS7iAGK9U",
  "key15": "5BhBjjLJ6FfBrbNUhujibAp6g158yjySRUd52z7gTejBCTtFXMJeE6wbVjuhiKreqrKSPdc3fCzGmrD88CCjcCJ4",
  "key16": "2WPKrSLSpKwPXUECzTod9gSim3VvvTkAkP4VFqDSiJKZACwiNtND5KetgVTEGFEj7q5Aa28hSEBFydAV6ehekbt7",
  "key17": "qrasSCRV99N3RqXNwB8CTvpJi2g8d4Bi8sAe1KGz9iULEShNubqc3QcvEgEVdVvK8wBKLAt1waez9R9ecibkFBr",
  "key18": "3D8296mXAW8pQ8SgCi4TgdZuKRwcbS8Nr2ZrawNmZWM9NkDKapF6B2pNmjkttNc2YLWcyYB5Pc9Cdsc4oHwNNtZM",
  "key19": "xVeM7rXNUxwEmrhBnzdf93L4B1tKbLQXxoaCCAaTCErmuAktpwojmPsEiUnL9SmxT9dKuC4sYaB3rhrpmx9Qbew",
  "key20": "5uY6ZtEzruM7ERNu3sGZGsFCkoy1vEowBgwZUKY39nFYmmHhY4varaL1SB3B1crrKcq3QiW5TFhanYceK2LKm25t",
  "key21": "5vP59k76CuadJpYvx2PfpgrWQnBwGHKwfYncSkoiMkgYAQfYL1CRdSydNXTRw1d6awFYVR4PWb2HeEcBmutvLTD7",
  "key22": "3aojgudPb54caUtjhF82BqkPNHHLnrHjoBoKG1tgvVP5eSiU5oaVgwDHLe4VVQtLjfMZRDiKofzBkhcLswLCXYPF",
  "key23": "4u3f2nx2b4hgsCT4T7ywZMRjWe6gbtiryFN8BTbLwFiEGfsCkPeNTYZvQBFKttzP8WeLqkWCYohHH9kzGrYc67DR",
  "key24": "2motXZoZwUE6L563fEbjq53NYgW3GxLS5PdGvnaLdFPd8FVVY8fdTNRggKssjN3XhbGzNmzVvv9J66MJsgiQL4Ay",
  "key25": "JED631c91X4cfMqby4yPcqGfE6V8oVbeubeMtNmmse8R7Db6BvPCbRb2A7BjLNxLrrtSpJWu8NVoHyW4B1tFsv4",
  "key26": "5Y92gBAjNnpDzJJZcYmqinFw8FBt1ubd9siZ41pYPzzcyf2WXZwAD7TavJjuFcz1BJC6C9FKaP8oAFTorZUfcSiv",
  "key27": "45e74DY8g6ZfnAcmZKYPaSgnfbBy8bTeBwS6C6FzFL46fEza4PMjsRjUJickVHKXX83P48s7V1ygehx5FvgVM9mp",
  "key28": "3xaQmEBCbieW5KLn8KS4LZspwMxgYrTL3ZwhtCMSh1bffgACPiTkExGrH4aC8N8S7C79SbAn9ChRaE1zFy9PHYLz",
  "key29": "48idWqA5mW34X5nkqsvHN9xHL2uANGCBpkGqyGCt16tM4rXaiE8SEaoDJPXMT49chzfDZbcb6EfoRdga9zbWYqgV",
  "key30": "5pmZwykMqPfcUw7bUsEZMbdtaojGWe3FE2oMkspWMvTW3MAParPzEsYE9QcpVBKkxTJRh9rw5JfouMrHx1D197yN",
  "key31": "5pASrFXkxCcrY4oibk4BYv4DqQWirnDGZPhTHCrY3cBVPoryX5P5cVRz7mkF7DP2ACGfkDWMYrvXu9PXehnJjv1r",
  "key32": "ioBVt3hQ31FrcjmgBzGkbmHt1ZjGWNsuq8fcJvrnCnb8NRDabBDyo8M5vtcFqguWXdb6bMmsoMeG3xEr3vWM93s",
  "key33": "2WFz2AtkNM3gE9chtQJQHd2bydRTuNTjwRfFHN2tqsda7vf1to4rRV8JhgazGk3VpuG91WTT5xf42V9KsdrapLtd",
  "key34": "3YtSiSnW2rZuXZ1JpvXF1vFoEZ52CGn1N2qRMCWgAQi2EvySUryreEorf4aobtFvcUHR7CZAy7NqVYstpBMQcMay",
  "key35": "4iFHKAYs61pFHHeAvQiMKKMku2ZPgruLrgstN4zqZGMhf8Z3MSNSKHvEFGBSBTLH8ZeuMQbvyvBwMmsETVY3Ty1h",
  "key36": "2jfHSx3n7R69D6XMggwufbjee128tfBZf8jyCvBWgWmmPsb7tP5gwpDXNM8Bmu3yTXR8UX9KtmirsW18vUVvbcPA",
  "key37": "4tGGiovoAfkhnr6PrkLG5MTi9JyowVkbaVPfLBrtstC15JAf1oXD8yBYVmKCTeNzHDTrmd1erZzQjWdEXa7ngBdE",
  "key38": "32HKBsEGogB3kqexoTEeMnmdEbAA6SmZjXShiZP2fDjGTPTTsCJwuvsAZA6wkZ8qm9rxwPovkhbFfFvFhW48Bwi6",
  "key39": "oyiM54KusRuFG92WHXo6Ut4xZavAQz7jEAQFgqdNY6LmVLK4FHCpuEWFaprzSLMJy7HyoAQ3Xvtch6vwmz3zxev",
  "key40": "UgiPV69841AicfXfxKTS3nP8a35c2tTVAaWXoVPRPKs3TSpnaUaLftK3xYgTyWE4ckXcVfa3dCprkxQHewwpz19",
  "key41": "2gh6EVFUsZD8g1UdMprqdEf2jwACuz5gFw7QbnqZT53PH8SW2MUHrnWxeYS1zSrhkE53nDJrUsswRrzaoYSC5XGQ",
  "key42": "Ny5jkPD7GRjPeMGnsu8Ge7dvwWe5d1yVYwfpv8JbDPhKgB6vuATvKqA6Zhby17xWJtuw5ywVhfwPofjraZvgHTh",
  "key43": "4AyDF69oLZVyswRHfQLUHBy83Fk8hUPZXZjU9e6XZGNVbY9UfkJiBJQiJGuiezeyd5DgGxVn83g2wusvjNgWXgeX",
  "key44": "5cpXsWcadvHUMqsGj3YkKdUUvFMbU8Txw9XAFB3S4h5KoJ8TBsZgzFDmmgTya8kVFJPHbGPh3cGdcSe3GfYtS3fK",
  "key45": "4e8A7ag9BVj95cxaFiv6m7GwPuyxP896DiVmp99v5BkEVFPhUiQQeBsUhmGZs11hfwRfcyHxkDWXbjiEb9hUz7rH",
  "key46": "p4bwy3hyDDSZ98V2Aw5wMVvudYeqETtcKdcEVAqtAzBoYdTP1uC6yzhDjCkWRyJWXXuKxvGonRNZ8CBF2aPsi91",
  "key47": "Fk6Cgi8mAfgxiW23Zu4guFvbNjYQkuABJUUxAT9bsqTUhx2JtCgdkKpAnR9EyjewNsjavW43BiyKt7uTSJjv223"
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
