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
    "3YujnJW32bZdt3gCjq6L3p58W1nDyT79WanTsPNQfLotDFo4okpw1qoVi6e4Sfq6xBnkyPKap6ZYG1TvRW6UW14R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wEnZze5k2fYFWD4z6UuWZMaotKC42hYJ7xeiYydETMXxncqYydqH6AZxXVxRdiqVDTSE8FgVKAgosjVH9BGQCaW",
  "key1": "2gsZWP1FQ8mtthHMLwB3p9MqgwHPsDFHekdTd3BQvD3xf1XAEdp9D4GDPjk177uzhpEXByfVfSkLAE6ViME8VMnR",
  "key2": "yDMkKX5gwQaqfD19NTbpULsYzPHrX2W6EvbgdSoX7tJTnf4FsFrikWtgFxGjB5d6zNxd1y73UngVJF6vYvdW7ig",
  "key3": "21uiBYoZuCG2LLBzQ7hf1FeNuB87rLJsHKdT8bPd5qF9f1M3QBCKk2tAk6NNLRjgGQ8eabtPi5xTvYGfFswE5F6U",
  "key4": "3E1N6zm75YZ264iKk3pydhFKKBFsM6LxbVvLYNLDg8tNeJdcvngPUy8c7SQrMCPrA1ajwsxFNQrNwVi7x6tGkEVF",
  "key5": "61N6dbikkGobhuZs6tq5srkrQwxpjLTbDNoH4Nq2SgvNNdjyVpHkjwwoRpfSVxFRTDDbJvAxVAn1V8F51SR2EYZ2",
  "key6": "5NRnCS8RzrrmGTYRnDzJg2ZRTCS6DuB7xTsRmTEmAeuk2E5tcKRHxj8dcD4mwrsvEBm8aC8ijqvDzJRD9o7ERVLT",
  "key7": "3LUSBYaXMESLc7zYBgL6hHrNk2beck9UUfeAYG9C7TdAju7icdYerz713cQEk7KGg23F1M8yYBJpDQUJdrWrTA6F",
  "key8": "rroCGBfFiW7TTST272nczELrQdovqCbFZeYWRpLAXE8qHebAkKABJnHTLikKBk7azT62ePdA8cSrpdrvEBTjHum",
  "key9": "2qCTLJXaUf3u9xSLj4S5SKMtFaht2vvnZTF75UCRV453pvoQ33K5i5gngMjGZ5zY25hY6wXxTBmMpzGnCrHLaUWD",
  "key10": "37BW8LBdFzDDi7Li41dnhFSfuN3783si53BJRC7rbPQjyex3jWpFjwEtKpH5Row4ovj6bbPQ4SgpJkwHEYZE4kAU",
  "key11": "3EVvVA4f8n9USQYHqz4YSJkE1jQDCvYAVbo1fc2fjL6sDkhaYaPgoKH3MBixhY8mhceCVd4pabU39Mu6ZkWU5FZP",
  "key12": "39WSnJGon4R4GxVBVFttpyJ7AfdUqNpmY7RZwK97xY3hD5C5k5SYutaWDzxTVtPmtFAPtNz4iGfxKsUZRK6fFpGb",
  "key13": "3RahdX4qw2Z3RBPoxmvT867fo3e6ZLfyETYZ2XFrSoDJeB6dbfJYZrxayemtApnyjX2VhmFr54KWJBkNNjq2U82f",
  "key14": "2KqprBXwHZaqLPje5ReEN5kmgLTDYUQiUijBkCxUiNNiEv9VnPiPpuAF8uTFwAkoBftDbPCRXizdVVnJCPYoPVpu",
  "key15": "4MCmLvYVLy1DHG3Jo3Mf9KFkD32WsWaCZk2jsdBw5ANHJaD6w2WHZfZu3soGeGEGFHk7SRn1fLczbzYUqCodrp61",
  "key16": "5SXfBZz3P1SrNPbhwk5FaWbkjk9mAJM5goRuzAmCbLVGDTVxhd5dcCMQ6zG2oCz7QK2A5ZFR5nXypuvzVqgjJp44",
  "key17": "3vQrKdK1kGNiWcbhMxNS6izar7zwMRuaVM9YJrDM3KhcKYqZTgJgDfA9j1AYNvaeXBJeD5GppgjGBhsoP8XmF5YZ",
  "key18": "4xkrM3YJjffj5x1hkSh96qMkdmSMvuimLMJ2HkQfdpRGj2ZR7PW6LDvtFRAMzqWZc46rFsiVbk9gN98AYksP2pV6",
  "key19": "3weA1YPPog86AmrEXmfpuNWpGRBSifKcAWRPXBB6sHSk1UAnmtDjcBggDq4barqcKdeXEUAUVzvsYbdTcnyMCn4h",
  "key20": "3eMVu5rGmUn5ViwMVeT9F4sfibxMAiwQ7vXtySjDfiKiFU9bEFVpZcTeagJxxKacLsLhnExcRpaCmR2fLmNKnjw",
  "key21": "4nyUSv6frUw7XGAhzfb4jLXcZvgHqVUJM9emgCazpcyXkfUpTMtfZRGSwjFL1RfG18V6oeezzP4sZz1gZidMFjkN",
  "key22": "Ho2cYoPj1GBqQfWkLN5msgWtqagoDUkZbNdZZq8tyYmbTxj5yb82Bj1adVydnKjR44bD4c4ycqUsX8T3XxtkT2B",
  "key23": "3DQUAbv8z6ASYESzrXwSUDAJyMbgDGm9PgAuSUyoM6x9HEJQithnChWtih3q4jmzdtnc5F58hdCrtZ2g6vxGCjRy",
  "key24": "Gwg4X8bZ9ZjEywE4nihxPZW2NTyHVuTFKieWGk2vPvT1moNR192Xgw2bcDzNimifK6xxxXPdKsgtB8SrzEei4fj",
  "key25": "C6GAosgAegmVSnfB1pMsfrXWHBwgJim25nPoKJ1f7oVLNo1LsZEkxzqXPhpEfj4xH9VEaeNagBFemzJRGCY6wjh",
  "key26": "5YW2CfVR3CZS2LH6PEdNuQM14mthm4yozi6NL5FSf5WBmJuz62iVgFbgEDps3Xcud32vK1FbCor1jhMvkE4QHLTW",
  "key27": "MqDUvCqkRUQBU1fWvRJZRiUAm3JoGwhqhcsuW252qqvjPTZTE3YRnx2UeDqA8suAe7JkMCbo4U2Z8p7GQTjQKgU",
  "key28": "2WF3riyRFrZq5Rqe8FaNGxuih8TkzC2kFckvk7LCCrcVMSd2ae9CFqcrFUfVRf3zbF3AFSFEKnap1bMHdBkTqt9N",
  "key29": "2jVUszKaYgKFPgQGJa96QgzC1R3zWiLUdyNbMiMijorBD49CDM3ziiotaExC8fQtSMkPd2krZMsCaERR3XqdCHWM",
  "key30": "55tW7c9T7kAWN4XZt4b56etbCjEULdRAdZF3Z7Fsf6k2WTaPQBTagEZQ4GPZd1ni47ftfR7dBQnCqUs8mwoKA63f",
  "key31": "5MeegMWhUQ6ADb66R7ki5M9e7uWtKzfFmqHPqRP3jNVsbwm7XNRkaa5yP1JnvxF77GFuc6JbdkRRYG68cdJhUB2C",
  "key32": "4V3B3F9qMZmrXkvt6fHDJ1n6aQb9y21UBUffBZCb4fConJcDkB43ZBS9RmUujv7q3iSHJP4UKEQreNRP6xn65dAx",
  "key33": "3frcHmPYRzmRpwKJZVfyZG39mb7o8ByStAhsGoia5Tj4o7PqGF1No5sW28jgWZoLc9YS1BL1zEYmLnz4b5AuwLtF",
  "key34": "3QEzkFcEHcvxQk8V5ZgVe5QtnM37LrHvGERBtPc6ZPiuAwittNAiTfTCQBbomHETfHByttStWuDkCrKTQutGBuJA",
  "key35": "3r77DN9tkcHaZTnK21x8fuccAYvuLyj8ykCzbS8XEoaiavWxBsx5SrUSebm9csiaCtFQvgJJ6fyMD6w11GwqquQ8",
  "key36": "4GPpRmcq7M3NC8qhsVgqVfPSxKvrs6SGPw9iRRrBDHgFgdvX1y6Bo1XL3vwxAFdYDtKFmASRDF9doy93zksbebQs",
  "key37": "63jGP9N6nuMjvBd858Uw9taZ2KGasFTGADuTuoR8ANs66x6c4K7Ab2oZ83i12mjhNt2FDty2T1nT2SdCKGEJEwRv",
  "key38": "2yTTP9EW38io7qhmEmHJCCkzfmB5ZoYxtHbX7X7wBotvFqGJeu5yYjGQfWWTBw4bEMqbfsJGXEVfy3bXEvnfbE3h",
  "key39": "3YbincBsiRKx7jWHd4DYPmmDQexs7n9h9g7zyQYCH5xEGxJWXBtbYdC5v8eQPnxtWPn98crKN6kDJmwuRUxJQP6u",
  "key40": "5s1iMfhurXmSYSo4MNrm86f5SnRs7ioQw43iF4rwM1QMZNdMqKMNuDGMWzdGUHSjiQ7CzGvHM4TPSay3cHph2JeH",
  "key41": "2WHScPf61XT1EMyvZJ4ycoDVYpLaNiHAjnfRkp6Z1P1dJ5KtSCUANBGejL1nXS7D6Ccyrv8j28aDN8G5fcRMCJJ5",
  "key42": "GuFx9vZ5qC5zLZ7BqQtfHrYq7FBjCa5o24fvH4u8LEUcvnDYVh4Atyrfq84FtV42H73LK3Rszz1mWewu1LjXcAz",
  "key43": "RLWEzwzjjZwsrvE2EVBaNyP81oCyj4pu5G6ex6yL7ewdt6mtKb7ViKTVnVvPSAffedLycAMH8AXuMP9NJAYkPxE",
  "key44": "3Gn9tga9D5d3ub2qkTDy9ks7X8jaDVXPLK3qSgDhnz7oGd4Pq2drk9boYPtbLeJ8n8Ct9wk9VpYrPMaBdwfGyVNZ"
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
