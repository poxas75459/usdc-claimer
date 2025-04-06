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
    "5p4BCe3syG3BwpzPbw5tPmsrJ1xu7semvzfqQVT84E4LzvarCb3n7Mx9QXcEKTNRH9cgS26Q8WUkBsRh7GoRmc8U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gjSSkvtNEkrq2TB2EPiRMVgBiSdm159qWBp2DkMG5Yg628PMmFD1wcJhBLPPtU9x8PknPbid4aRaZCFxv64QeBN",
  "key1": "4pPPzxMX6wt7hDMMY8Kc9jo29uRWwkzYBXiR72v2nDBUqujgM4cQpjhXLPeJdDQmWMSXjpQZB2DTgGBwC9nNLMQC",
  "key2": "RkdGefRPBQ2waT9kmUHXmwAwyMk3MXfpxhoSb8YuvEwehuWb78FZ4BmdS4izpzbFEBfkcxvkioWn2PvGU2by63j",
  "key3": "67JWJDN5vZjqrB6DtEBMWskyXU86KNBzBenfHsFigtDna1RCvEhicBX8WuSFv2QhNKLvXujjXW6N7M38KNPSkwQj",
  "key4": "4D44oxER91VzmUtJLMp5kvCSs7fZYcjioKoE2t6sWUMDpToQxHjLvXbYh34n6LF75Cp1c3A12medwpBDiXDtVCVw",
  "key5": "5MGySMyCvbjVKXX7qF6ydLTfiMNT2D39HC8vrYS31FqnpbHA9J7MAhjnwuYCWcKzLFCLNRE2DYdeJ2XN8te4SLvR",
  "key6": "4baUsTrXGk41pFhpzLTrwRqLwV5gJvgojRK6ykVFhZeKcvnrwoCoK3JTeVP56fH4qJE6Eh5V9EkXwsG3EFMRSoZf",
  "key7": "4WkmD1rVHPp9vgJmcZiEsMC4xgWYq3K2WHmhmsrd6oF75wiVZTVaddyZod7oAjio23jHHdoFzksGERuJCNbwiYwR",
  "key8": "3njy45FZiPRfyVezJz24PJcS7Nys4fYt16VRaot6ea9RdbbppWAGJMowh4RTyr2oS2K9waXBHsFU4HRpsYqFF9bv",
  "key9": "5cjU6BqQShaUzxcPzTAapVhGePwwMJdSD2EyqXedrZrqDHQvUyUnG8NhhDi8X3CDRMexrQtdCCxxWQQ2fdfk4mHU",
  "key10": "357kFVhqn1ZCCyeCMQqEXw5ixDivks8U2mqKARCMh1RKcJaS8viVV6bwU65bG8iw4SCw4MzWJAvXcUYKGManrT71",
  "key11": "4at2R8kaFnvSDekAgm9x8FizAmgFkd7xfyUWSVr1siRxPsrrYotCh1jABM7BrLbSrHkCZ2WmSQmWuBQbd5PSurvK",
  "key12": "BQbD3rtbWpmFjSRmMHC1PSa7WNtrrH8K1iQEgnu3eY5fNrih53NXfxHux82zYZ2mM5aTLjJUZwzq8JWeRiZZAjk",
  "key13": "v8HENxPd7WDMNC8dSNyvBNK3bCVGRHJABLf8SEiqwobMctNj3P2FBdVksTCuHrCNwcQ9tCiR14aWcSU6Z5Q2zBM",
  "key14": "25ZRWSoxC4LMXc83TukmgvBhUX1mrp452p97GvPxXtfoWfBkmZhiYmVbkABPteEcD6bgofQtskDaKRiGZZLmvEhz",
  "key15": "pzhkTutD6tTFZ8YoTvUWwaz4YfSZrUdtzsYPW8b5sLjJBpKS676WBd88BunePRjZbGNWegLKnvzkqMdS8mrNimi",
  "key16": "3me8FBF3orx1TGXHwwn1qDgCgUVLiSymEGMfqnmXQ5nKLH99qDzqLoh2EEvNtKH8GScAzZhbuJVbDToDrK2Pp4FT",
  "key17": "3qv4MavKRGonuG8tS5BhkhQ2bCaerWtQEfirj49vL43AxLSekV5Tq14T8BQXUnHYuowLv5vwo82K2Fi3qRe7MDgA",
  "key18": "2ipgF9Pvw1fd4ofupQw3GyPkQd7puuoiZBhu1aq8gC97YMYQXQoiNV8kn2BDkYbqPdybG7Kg7rwmGNyHKdHHoPJY",
  "key19": "2WLFJm7T2GRaRz6QbDhL7b55AbG3r7JBRjtrE1esDH42pxLKoAUaid1tMsoMUsSBcKGt6S5Z4eLWrhjridUj8dJs",
  "key20": "4DkX75ypyeKyN1Zx2PyK7W2NsSo1gwDUmyPjuke5QChsWweQRrBa2NgEqsS8V762FP7aszxpxeuxQeGWcCs62mns",
  "key21": "4M8WtaQBjk6TKap263oKJua48C1tpvz85WwXdU84wa1YDeRY8T51sasadHg4qemvaHnWBnuESroJ1H9fZF1i1oJt",
  "key22": "PcY3FJCiwyvky85uTLHPGMy1ZrP4KT3y9wkcn7SKcgVKBEMmzw3nzhRW7HPG5HeHzt5Dk44SHWCoRfHAwhLNtph",
  "key23": "4tw4nkFr1NMfw5nhbcC11UuUH1hL5C6ADzXuHDTvsSd3fEaYEF5nYSyTSM5FaTC4rSxF2dLjzdiA1Phbgait2cNg",
  "key24": "a6tpjWgQ6at45iikvSXy4EbcCWsV7gPbRV1fZ5wuDJseDeHKWozHZxy3jkAcs74Sx7ho9Akjt9cFTeGQLTTAGvE",
  "key25": "5w9mRubmM7PE9XoBorzRQ8sUWKNMQx8VNJAem4TYMhNcWirwnLyXd2v43mGswUvJNxPCay9ptCmsd2vT3vJDiVy5",
  "key26": "4q1aPe4XrQErHNqU3cnG1Q8TjRGNRZ63eSWi85A6oLUPutHHwR8QonHb5QPycjAiEhFtX3KRQ45Tphd9gra6imBp",
  "key27": "4Go9vYG6fgm5FxQ8s9JTF88aqcnP4crni4ma5dsCMPMb65ReTmN3m6NqpL8nfTSBarxshrVWDN2oVNvFMWJZkxBV",
  "key28": "39dmyj49tGw4oY8y6QjSCABSsi7LaJuhdvALDmbbGATVguzD3PQ9eLeNqXPgyfjbL1u4p7ZmtrxkLZKee8huoDzK",
  "key29": "3L81CCqjNcpNtsxpmg2B3k9RVWp7h4XxbmJZqWFDpZ27qLg3QtKHQHhvYqh3JrMZ6WRsTrJgECRM1HNm3ZVnmgXf",
  "key30": "4dLQbFDrsMHUgMA9gqJN7zagffCPPbCzN8mJNNsdcCxWjKbdREBTK1njFHvGXFYs3RcXTGdmahNz3chbyXCBFQza",
  "key31": "3fzB8EudASaavoZQpfyHNjDujvCcAkHxhMoEoNBMvWd3iGRizo4owZSrWG7iHX3CWAHHoB3bf75LFbQtVXxYwPNS",
  "key32": "5dkLy56pMAYjtk2ifEeakhgNQgnwXisMmmJTGbd5TVZdCFmXh2mHbhYBFrGY8hXifN5nivptJDb7yTb2b6kwBmza",
  "key33": "2tPy7eFrLEqBRaNCiPSDXEfpy7Tv9AV6GSy2pAfB1HruMF7Wtmgz4bzs7WJMNMHgNQSmTNS2UQSjuTSgCQBxpqBm",
  "key34": "2KHVXdaib2KqHZYSSUvQ18qoTtq9UtEE4EGTjT2jb8JwejQmgYJPkreEfaRDrCgN3RTZE1tjp6MEBtr3QCRP2ZRW",
  "key35": "hGJ5ZY9PwqXxVSCNicSWzC8EZ9pNj8s7C4wNLZZ3RhCu7BbGRvSZAUy6PxSJdRxRQyxmoTiFXfvW5MWUBWGL579",
  "key36": "51gWXWhdV2PmZAD4ehaqCgXn9VmbBdG4FoSGVkp4oWYUKP6e8Gr8a9QaNd1FQfXekzF7X4nCjg8r7DQq8GT8bzx1",
  "key37": "3Ws9szdHaooMzCeJz9WiMguwS2TzWVco4K7Xoq5LS6YRpwtq6JWib4AJDMFzTXBkRnhseWPWn91vzNJph1KeHWxM",
  "key38": "DzsCk9VkZQZY6YoxBaHso2Tz1bgArdrom6BbnofCfxAckBzJzVdZkzrRnuYj49p7wKbE9JSuTeBrc9r38BzFPHv",
  "key39": "56XDK1iwmMN52Cn2LdiLWmzFcfhUbHoVrZWFdNGdDcvei9qkrQK4V3qx32ugWcYtqfWUmp8U3NJgUJW61uF1sjLX",
  "key40": "3ki9g3PN5rZoo5CFSGCttBzVbP192EHk1jVmBWJh6ZcYc2D8c6ox98ZKqdatnCMA6mo2SfC66dKzxaJrVfKev5ya",
  "key41": "4VjAqCWqDUJvUh43XJnufjHQ8VH7Dp6GdMo1ccpgrYsUn8KZEDUtApsnbYoGq34eRRXqHWDhjQsbRmT2B5AWVcVd",
  "key42": "k6fjVNEhWGinLpXjqAxaqWfoKfUQMC5FLrDzXkAaVhmBdAnXcQkLAnhmRT6x845G6jaZRDUoMK5m36co494tvBK"
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
