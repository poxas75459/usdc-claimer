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
    "29NGbBr9JB1TPuZg254sbxMpgDwaW51BVKgkpf7HoVzvM4ze1JHRG3BMh5idRQoqykNFhP7FuF4zNymrhGn4pMQz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7L6F5RxAFg4JCpn8Z9ZhzG68sYSbjU8WtbDq1r4wcbQQQE4JXjQRLCp488skLJVoea6VBjoSTwT4UMrN7rLS31B",
  "key1": "2MQsAwufw6SBbQNjEyF5Gs1h4NTkWqe2gaEMPMYmj3AazbbijaYhneF4fFvGtzHbT9MuAbRATLjRC9RuW4EZTig3",
  "key2": "3WRR5HqHynA1PMLq88nDR5JFwiCRaSLuGwM5L4qiykg1nBBWV8c8AZv7qjWohZnyzbVJKfuaGpLZzXyRTDjrpL56",
  "key3": "4vTkaK17Dh5DDfZNNB8hRCGV7yjKrQVVnmBGSksJUFjYZEgkcuUmXTSTFnugAssY8RcTEe9JcvGzobWvNdZrDFk6",
  "key4": "34ATX3RXVEKkW1ztPHGDSN8NksevSkGBhkBX8WZP8Y6wgHcKLGJKGV6crQTfXpnQtpYtQmaBA5HsdPT9JbijwBkv",
  "key5": "2XhXhCkbCxopvYtmFngMGVetQ9u1jN32Wf2Jrf4gS9XPfH8kKzyX1ZkF9MYYrhvZ56LAAoc7nQRCmTXxk6uyPH72",
  "key6": "5tUpfaNw9vbYj9vdZ6xGppLT6uS17K9piWXjpo2bwvsrpTJW9ANhx3PW8CYRp62BSQa7aVbscaJP2VwtPivV3Fbi",
  "key7": "5GQaAFhys9Yoxtfd2wTtZr45wrD4pST8VF2hzQRjeUQkcfSgZ2TiAcouPzEeUkHdjsv2SK4KpcTzH653AyytrMNU",
  "key8": "3SV3ucGgwdMj1rnzgNDPDR4vuXJMJEf4EqBihAUP8FaRy8AcKTkvAKgPqyfSjbQGawa5CdfCjMk9hSRbsazymrXV",
  "key9": "2xr1Ap6U3diKYw34FuMj2ucsL4PV6LocLEcoWijn4RBNAtDFchNEAUQgPhFz1yxTgo88vhKUZvbU7nYVW5bxRqsd",
  "key10": "5NJNpUPh33LbcRXamZ41EBZ9jgCXp13WQheoffjjWca3KNcD1RvctjpKHrnMQD2Mffpmt3iVLkRG4pKtZn379aZJ",
  "key11": "4P4m2q9CukTRJc2KaowxnY5Exm1PrPLWQYCkHMfPBHdrSfLWnHMpqaDdLFtAieu8XGTQp8HfSMbbw5m2EnxUneKQ",
  "key12": "4opJJu8qPckZEPPnZRrBCEpBc1cxn3xkAvGP165E18ETFFCpeySErZzWmDUkCbPrpQPN5CMPgC6FDTt1oyhoKM25",
  "key13": "4dyFxZKTkNPRSsQVtd3sZKiK2gPWYB6x2JTgNnU71wSCrCC6dMyEN6RGx4Nd29eo1K1HMCUFNTDVvJCJq1jpVuXA",
  "key14": "5N67QmKRfA7iQnSqYf8Pjph5g8SCpCqk5zP6G8J6GrrBaNWm2dzHG9FD2FiCx2MbgbXTWMvLfKvcRPvsgtJ1gtjD",
  "key15": "3owWG9z1ZobbpLWBUmqZga6Qpj4uRWg7xWn9g2ExYP1jiVfc3Himj39xYrn34bQ1VeDTkfHD8ZcBxipqVam32pvi",
  "key16": "2CoczoKSdjcAVVuvfx7z4Y6r2i7NUqkxL4pHwaFUK8hcc9yJXA7DpGhZ11zUE1XZMPBcWigrBYQsvVhiFHcbyMDw",
  "key17": "F2jCkVBFaefGFc9ZGNBakgYmmHdonxMXmNoPovgr2UjMCSvEhHu218eCuYSeyNv2tjFjMCDqZoRpbdYcrEioExS",
  "key18": "2PtDSAc6oxLHGJkLJDaqfAGJhFRyaggPzPwPn8HumXLvVrSaKD219FMtfu5ffS3NnoLuJtt2xvF4NWcUSPcMrfz1",
  "key19": "4gpSbgYC1RkKb1H3desHiqtrye27JiGm8epXGTMhyUTv54ccVnxAsX4dPrDF1mMAk3uuLvA2CrTTXPcKaaTdzAks",
  "key20": "2GkDDqqwucPr768sV3GhqZGB9ejQGtcvkQ8jSaCg3bSiJgxD98PJTyabJrK2MvF875tYtX38hetHZMndfcfq6tAM",
  "key21": "3geBWQimyWFX8Za1Yapb87oghnw3mXCWgextHyom1P9CADGmNDLZ4oNdMWS4oHXhAr1xhn2c4mSitE2LyHeMuq7c",
  "key22": "5HVYdM95RT4Rqds4bWfDpzRcYBPKGoWye8X6brQAHPcD2qMjegYHAAEyvFrPbBCvEzfo2LaYvMY1zJexidWws7kH",
  "key23": "2qyUt11QVnNbU6jV46nVvHHct3v7TitChtAZwb1GKPdUNejAmk1Y4EWzVx87m95q8qey6J4GRNK2W1ETDJduswXc",
  "key24": "4oePUYMkozSzYuujW7wG81b7n5E8o73py4ttbPciS9X63yUXHQ4rCX4Ng11FcBTPkFhNVXWLEMv9ufjahN1XpMFK",
  "key25": "31dhPrDTYVagpLCAwNeKZNEDj4MjJtGh9XS7bRLS6qTHhTsStwCXDX3FeciqoTsQsFjHw2VDhe9XF3HpZqrjD41C",
  "key26": "2qsbMCQtPZro1tfvZoEmAP5SE5mv2DXj56nWbvACYLQbdCBukdRNoXW9oTo8WtNPfVGV1m2XVK3GvWj6WskwmUZc",
  "key27": "ginjdLkQkRQKKd7sHz3zYvuS1gzkB4d6ynXKoyRcAbERoiKRP7iHr8sryiYix2qSkw2tq1g9mvtqFYyNDV6pUc4",
  "key28": "2Ydeea2s9DhLnSjTSf8ftQmEHqGzfwv5RqvSLhk7njPa3dz9UBdEAU465xoFL3bjceF8kM1NUDkk2VbzdonB8632",
  "key29": "tCfCDd5yytTWLnLEjdq1QiEPJyXJqKF4jKH9UsLwyQktonHXBZwobh2RQKaFXd6Baksop7NRMyQk6pcjNGdXo3D",
  "key30": "4E3osxCCU9trrHR39JYcM35oGnYA9uySWA7JzmJn7rSiTCk983MLSiPWiP36StFhcHVPeDLS2u1pq8kfiQowUMYN",
  "key31": "3KU6BZ8Wkj4eUQnqonVqL3XSABNJwBy6SMz66CqE2gSy8BR6MWYU8sR3HWT9Cec3wWU5TLwAxJSvJt1t3Sx6guqf",
  "key32": "SkDen9fzweigGw2zxhs6aAATxEgoxrafVybe2w6ALUJjfks9ShtMK7QtBeU9SyMWQRpoRTk3mm19QkQprz21L3u",
  "key33": "ZuSq19cwAncSt9w7ECrDbaBkSGik458RHnaF9sXqFBwSUdMhZJZQGtSavkxYErZ8MSZeixqfBpabz5u3uAh8BM1",
  "key34": "3a6mqi8dAU6h4UrEPocDAthxfQKf3tzzhN2oiXttDHNGU5hRM1F4qzgK91vDVzcUjK9wa9K5E3eNhEwkXUKzh4bF",
  "key35": "53r6R9eEye4ZXvxMAkwp7wzcvvTYQL2bL3GCKdZzB4pu4PMZYLCihRR3E4dLhuginB9cUADohRBKdWvRuVYJxCRb",
  "key36": "5NBjXf2aEDBzZsihm15MwSjQSY6SAiWnZUyFTaLREdYKX6u7NM3wYhGUqfz8pGd3h1xcFMXUXvwjpVa9BFH8Yu7Y",
  "key37": "2PSTK8GJPkyWbSoELt66uoXB1VVefsSMabcKBzSuJRRFuzQ2WjcMLeN5zHwTCFAFQQJtdzmMfxy59XtN6UrQesZm",
  "key38": "65XutSvhAuQySg6hEEa4dg37XTEka6r6rVjQLP5vjYmkZQk3kdcyNkJWtuuHE4xkg7aDfAGKbMMgECNVCSvKAPD3",
  "key39": "2ooyufaiQzLyyTHhcCorMxjq8YFYci43osMzqgFzDFXTgZBHymxNHzCRRNcpViknmW2KBmCVtcPK8etnQxW5DPVa",
  "key40": "2Fnon92WLiEKebrXxduPD82sEFDcpwFHvHFh22ejK65Rqk7zyV4LETd82nTBpoTaS94vKm2L1dRKSaQzf91rriuk",
  "key41": "oi7QCzc1HtaewkMtd31JWLfHfuzNSRPQEK4ZUUMateR5CBJPww1viKWxrZBxCuPJyrmYyw12Cu1opzGqs8QEARE",
  "key42": "4u7GKwRM2PRyjeirhQm6vqy86Ztu4WFB5adG7c24AKM3sHzD3hbWwhXzxgYevU5CKX6tHhhYKMChoQf7HR2fc9kW",
  "key43": "5kEtgxHcN5h9RiePatUeGF5Unb7Dm5CNvw4GGoAX52tKJBd6CaYjw9GQdGPNBoV25EuToYjs47rKYsT8EuZeL7zi",
  "key44": "4gtRgEtFCMzQFsDFd3JCbrvkPBHTJn33Quz1tDTjpepH4P8pkBePrpAuwGEgw2hg8kMvYCbZY8UV6axwNTVtKN1u",
  "key45": "2iwaQnfs2jKxzFU6J3nwqyNtiSpuGFNxjJ2UV3Us2nWQtaLsq3XH61nGqKbxwPWXVgRi59VinXGTYHWd3GK3Yxz6",
  "key46": "3SBD8iuC3Jczp2f7FY2QnE61AFMa7ab1Rggn84MmYMC2K3eX2BNhcPNPCKJrp7gFAqXE59PRuP7LRp5CdSBDMKP",
  "key47": "4D43p3i6XrLFxXuDVNf8gXGbzQrBJJ9pqG9c8rpdgvumbtBL1TvgR5hMTRoirHP4btfNdtzvFHD1GJSMrCroKfBV",
  "key48": "1EFoZyT5mSSnAomg7EXsjAxUeUtD76oB1W6J8WYpz3WaLhhCeYgYJgX9Wcrs7Bj5cP2G956apF9VmuNpYo2tUPx",
  "key49": "2Xc9Q19uCyveQWRG1zHgixLmZiYxTrBvfgu9BHmXgtvx23gDYyky9y9xhLZtc5EnZMXhhHgpkXFYKzrvuxFvvmXu"
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
