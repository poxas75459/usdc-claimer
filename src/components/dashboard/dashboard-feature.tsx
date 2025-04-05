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
    "rPS5BwAKjXmUcw2v6qV2e9JfwzMoJoTHYz9PGkw6g9997Ut7EEDbsvpie7RjV5BBa9PMFQfdj35csp73xeUwHse"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rNXtMwXHBQTWQWpqc6crVi2stDn3vQ9ApmSMUNqcTVZAJ6s85cEC8xCPL9unFizoU4TuetvpXKRgnUDdYSSbEcE",
  "key1": "21ykackg4a7A5xr1ancvxwRSgsPz7j5nE5vv2nq5x8vSm7nPnW4NLUwcoYjigkrad6iBGuj7JXG49jjV8YuPT2ii",
  "key2": "3yEAxH94q3irRDCocoWFHG3aJ7hAoErUt2CiRuMZAnant5vZreBNWpzQE2AygMC9CWbDcG15qDEFivir16RKhE17",
  "key3": "5H1Yvg8pvf1gjrTmfNqw5EzYDpPZTRLj33zTJY2TNDn6BXfKo6mtXU6WPMRfkGGrJf4ArL6KmqvNjBBseKoALWtK",
  "key4": "QPNA6bUYGNgsnogGvD4hdAgeP7do75JX99ysjnjFLwb4pqLmS3GXzNSXiL9CFQwEauEvoNMUJLph4qSAqqf9AVK",
  "key5": "2s89UToQ5szdoCJYQwJjbM8QZSQN8sRTUdKVXnqiPKZgF1rpsvMc1BArGZmMecBfhiiFbiNVA1PuJtLqEEFNkBsX",
  "key6": "4X12iTBKqr4MxEn139hWcqh7tJoTb8QXodCW8anSd9Bmxi5qGsur2U7F2mG97U59ZH6BthtBNTNDdXu8W4Km98MQ",
  "key7": "5pAgePxTgvVU2xpVi2yYw2r59QY9qmsnVukkph4iELhEFrVZQhckrHpS9xNa8a1MsLX1u4pPqEtcrWWUwi1doSgm",
  "key8": "4VLCdJaekbRf3h6oBrRej1pnpB9HMD5HB6bgL5xHSd1QqauT2WnGdwN75v8oci8T1yatLybMSHo5PtV9xkQVy5S5",
  "key9": "5StgNMGFSuVBXSR2AVsyJYyAeEMxub9gTFo9ae2mK8hExqTo7imfZL4RdyjExBUmJhzE3v7akLtihJ4yn85rPveu",
  "key10": "4vXE129B4Lssg9efpfS4ycYhqzagsFKb8evf1Sd2p92vBKTwNjh96pUBU2BNB25CuuEo4ERwcA5yJwBzkdTm8faF",
  "key11": "2J9hNMf6dp1CwToG15VfgYbTBN8DRU4iHGF7L37Kf73z1uQyCmkxgpGqwL6KwybeVuRtnNRFjoqEXJqxWNt4rbLU",
  "key12": "wkaM4saLeXjm1fsRpyLAWKPnbbY5iMgb3SR6KUJNCBnEZ72k26yKmZXE6Lu9w7ERJsffu7KwhTQRdRwroD1qCd2",
  "key13": "2MkSW18muLijbUqKE4tnasgcXDBJkqNU7e2X6ezW9K9rR93CdoSY9Z539JPxx3DCHRpLpZ3ryjyLJr6vnXgmqZfG",
  "key14": "3swF5JH6B3ymF8B9Nz5mdYhrDaC9YhJHdA5e6aeeLVVH3zdKEPSV85YJkB7Nwhg7MN9vSNEuoeCFduuVpYtugfoB",
  "key15": "3gG5KZa1Ppe7YEmpkBn8JXdYGA4f1cACXCeZ74KoLdy97SvmM5vSLGHgGdcbsPMnwbwGNzGUP8pyhwD1yoFP3dZC",
  "key16": "5CLSDinTYA2wTgP6uzJ1YhdsmTwvmL2er1c3aTsHx7SKor6yozS4dU7kfUjqQLiQE3sbkUPWZgvGcAWygptGec4v",
  "key17": "5LSmYR6JmGNioKshtM9xrGR22aKGHRDoGGkPgKKE5qkFiagvqNX3LmQSNKo2siYsB1vR5NnXU3pPkUhKGScBeL8m",
  "key18": "38nGZi1hgBWXNy6xhAzHSWrZQ3xPTHGo1cRgzLW8ZYzaAT6PS7bR8rX9QaV8agCzpybezx3nvFofapJrEozPPUmu",
  "key19": "3fVEe5Zo4zn8WdmjivjxCvn4bTo4rodgbEX7o4pG3m63S8At1qApk3YNgmRbLCGqmxntNAEX9vUpTmZbcexVvRck",
  "key20": "3v4JRq9nziyfDAteCKFcj3wyDouvZQDeTHCoBkWsKtt7rHQABdYXGewwJmDQGcBxqtq7323seYqroGE9u12KiMUD",
  "key21": "2bZTf3qxX8Nujyod8jRzcG1Anf8iaeVTqyebGXdUsiyn6G3ga4GeFGcfPyKELdaZxRzW7rrF47dZGK57FjsYT1JH",
  "key22": "3ouhT41VMKxoSnR6veqrK4PmtQuJkQNSkYMya8CHuWnq6uQqGcJuNgKTHiusqNkYos5cTVzSZXrXd6oscHttqrL8",
  "key23": "3uuVAKEoUuxsa1EvUepTWWzDpSzuSUQN81c6cSaaKWHwvJdcz8DtoyzY5NvZoF5S9SDWmuUS8NQrJTiH9mhrCFjv",
  "key24": "45UiMLEFywkBFMVtdpRcR5h44dTfSmnLp5NsY6nKRXZXCjxMSL4rNBA1e7XYb6AsSabcS93jQbuhzUzF93HqmWGh",
  "key25": "5PewAXxmrUGs1cH5hESPy1yqd8517PHfx32NTksJzw31QXGh3YPkqUGeqT1f9yBRAmQH3jboon4VtMiEhhedvdgw",
  "key26": "SKEeoe4mYSHeTEk1YrujPEpGbYMtR8k4YKmUD8wCP8ienb5ZXu6WtrY42Xp6UwnukQfWDSh8pApB3AKQAqKR9i8",
  "key27": "4jbd89698Y5dwy6zvtW8kk3gjLwJpScWbqk7FwLLNEiW6zwf44Q1p1UyjhyRLPKZmb9dxWmBB3saXpCcKMoV61nh",
  "key28": "rHyxBRvoHkop2Fa1q1NmdAnnVoVcYXH3DD8cJAfPPyNXekzXmdx12jGvHap2dYXn2nyCrwWRy4sfhBUwXoWAUDP",
  "key29": "3GZd6MLi6N7eFYE3ERnLaGVXhBEi6QbGRXLqnhXsw5hihozsDcvnrNpddCwKTjB4A4o3rmVvDpLfKrru1K8e8Njw",
  "key30": "2ahiRDu3Tbp2DZb7UE6wL7yciLaxM53uiNPde9BUjSo1rotjazBQj2t2p2cEsugDHYkPxyAffCYhU1xKk6k7KncU",
  "key31": "3JdLapXCwjmKQXLDqiBmFrYU42zG3WiXeqornTrNsFWPiAkEfFikdG9HRQ2EKkq95DwCdVPY7Bhuq9yKTvPg8yRs",
  "key32": "2ujqFR5DFvqcP34p3TCbXSd6cALkcUrMf4kVaU2JbQuq7ru8SUb8sfMsnbzdum68HUEQnEf2K9adX5CDoYzRBDPj",
  "key33": "3BQVhH35yi25j6vVFAXCWp6xpaZNnNq6167jckDKRiRCMj9BnDD3SnT6ApugBoLCLEdsbVJgQReGmfmtypvgt816",
  "key34": "29GHTmaEFuTwWk7YZ7piAVSRGeNEVZU8u5WpmV3D1o9xxTFFkNyTSzKiPuemRZ7fEeYSMSMab5m5feo5vdqxrYtf",
  "key35": "tPs7iyENgVheMPLrWtnZU1KxBXJFn7euZgGrBTcWCEDfozHKXdeNqs8yXdX3eoqT8D8vNrZimMNq19b4WF4sew8",
  "key36": "5sWz7g1tzaoF7EfjidRbzGpemG25jiJSHp6fCiCJtJSX7EfXbUu4qPtski2Tx9aPzzdVYmE4NniZq6bU5NUdR1sA",
  "key37": "j3UByDWgrhXVLQmkgbbLzijRAGh53bPUbq5kdFReCc9HMysBazEoEfZ72XNhhRRwosfLTbrtexksVHt5S4EbeVa",
  "key38": "5RHAQMnELtEYz2tNcSSQaNZu9tGjyKLfr65oEEawTxhPe1NNNdra4Zhma53rZigheai94JfnxiLbpkoPP8KKymX5",
  "key39": "5Ww8p69KJyYykDMDYD8YtZupzKKRKdsFYSq5QAT5SUBdXjXgNcTHvsuMSpBFfn42Fbif4KtkrwVBve9TC47BMqwc",
  "key40": "2duwD7sTCnV1aUKQxrA9n18xWP5a8AarRyHNNMcAMrBmMCJSXdypcGguugsbwG7zLDN3LSiGVByrTiRwJjAn562V",
  "key41": "2MBKxxfoQc81rnno7z1w6iU3rkrwhWBn3816wpANJn7QuhiF2PB8N3Fg5etEkCfg1eeExR2573nVXtwu2JPBj89a",
  "key42": "3ysHJmrQKJn1vGrMEZR49GLY4uJH65rUN4PJ6radYYTQ8DPXXTEsN5xQR9s9n2ktShpXhwWNBE1udizYUqGVM9iK",
  "key43": "3Vgg6z6hHx6EMJedKxKtZR6tYVTzGFzoQWKnKCBUTNFictSgLiMKiP8KBTTstiPiCLXXDJzvaN4fsrDH5dyf6ZJf",
  "key44": "3651kX1MCP6rWHdRkQte22i7q2gBkvtTXjxG2Ts46bqkk2f4CFRuajgcc1wAjVsB6UKRMKi4UGRFBsuCnLw9zWQm",
  "key45": "2e7kQxhiT8WTupYCJFBwBmGrqK21W8wCN3rNxWqc1dVK9TSKQhG84L2eNmqZ9zS2bMsex9QmtCeYG22aehuKGKgh",
  "key46": "5ocktrRsuzDWzBkwJuG8tRQTLMaVppJDP77Jwv3nEuy8Ad9vvzzyVnhbg8uPEuzwfnHKNfNfewGVgRcAZjzkRPC7"
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
