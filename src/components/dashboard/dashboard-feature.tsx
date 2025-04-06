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
    "26EcRqzGwNEZHH5oZ6pDcGtrdDRJrXdSPZ4Yk2FiGR8fTF53U2Mrua43pGChVtYUzK6AjbPTs91nq1WUBH9PMqWp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yHn1u7iQRowWL11SjNh7u5ojufU3ueUh3vDvungvCTUXtF7gQSzxDKeYF17u1RboVYk56RKmZGAfKXxq3h7Sv9Y",
  "key1": "63erkawM1g73FjqxBBFMxCQxtZrD9Ztj9wmxJwhdQ3iAqQbVC7LjUFHurCuhrasHkW3pBiRLQjBAkwsVUvGjh5nu",
  "key2": "4vrUHYFarHUv9nmaEr2PJ3Rv17AEyVyZGZhFgaAsr5wckyN3PTXVqVV8uBT3h53XcDgv74nf411MXfDqgSCPjUGQ",
  "key3": "5ffpDZUigamz7EovJbfnEP8iWBBW7fRRG2xoj1P2qUbkWBcSEncauAHJ7PFkiFyv14joPuck1M99jsXbNWarsc1a",
  "key4": "EzQYFPriUEYuTNq7cfN8dQL6aY7y5mFBwq2Tg776BtfwUz7qgVbi5XuQMSpCKk4cKQFKKc46qV2gwf9VytwVupD",
  "key5": "x5ertTB4LUnxC3zcFVBQt1i7GKqhUdTxXxSEaemEdu14XGHPoRNf96ZsMLiiMNZd5g6opV875xfT8v7yFRMDZuc",
  "key6": "2QMbs9W7EiNfsTuMvQdkYCwbyPJR7AFKZb78rS79AmnzVDDbuTjXXNSLun1QKhFvSh4FedaNyVShYPq9HYJnks7X",
  "key7": "3XjzNRcdF4gHwXTota6YJFT1qBTu3YhrkE6YDg6f98h28hmGxmqhShv8v1YNaYWyz2AgrbMa5nAG9gA3bck74wNc",
  "key8": "2SDQL2d5W9jM71BWWsPoLFfvYSqHi3KzFKyoafyGrfonf13SmVMDJ9aUUsUJMCzPVQDeUzNfxTqoK41axDrAbnvT",
  "key9": "5eyDH3x5wWkUVpLd4uxErkKM9EabKBK82E7D5skm9xKSNDXCZZwTY3jUz4neeF2gtyn8RTcQSPLWBW6Ngrdrm3Mn",
  "key10": "2vZGEJBUtbzqV4h377ayNKFNDGFt7VUU3Wm4wACtSyRZjyroBVZE3hxRbTPgXbTReQBSYUfFu6TLmGYmERqnX7d6",
  "key11": "6t6NBmMwNKeguw2wpZFoSd4qkeeMQPtz4uodM2beqvot3D3sDNqtUMpr9b9sPKSLh9rqYVGYH7J2oUFDyYgpPMo",
  "key12": "2CcYcFnQrK1AAjVzG2AU42QU6vFHZabvdqKPGdopR2RzXYWY4LPLUmr6JLGPq8KSSec2347Bz7bRDvu6RevJTrzf",
  "key13": "4wERJetrjtN8ZasPwWr5m2iW7kGbRsgci1f9RHEUMLn9oMLU7qohTeB5b3iVPnrafFTNznsUAENGUX1Nxy1fRMid",
  "key14": "331Tz1JxKC4a2ieot6a289LntnFfqHXGw5QuwNTnnoa7mQF3qkMKLXhrXjX8ypXQsMqLvtGw6qUsWKWaMsQn4q1r",
  "key15": "4A7mNWmhPKzuubYdgwmX3LGvQarRcYS6VUifET9ep18vYmZSUFtLUKy4KAatnhBZfh17uhqaFZfW7NkjZd7fLU33",
  "key16": "4ev53pRD55rfNLBn2JiLa7i9P2g2XQxPhwhgUCLDk6biUvtHHjYQJDuV1SCQi7X6wQMzk3iLUTREbf2CLinRXrRp",
  "key17": "5UaVZetJ8z7sQKDnrHLqYdKRMBapZLyfndjrEWTyFUDxsSM9FFWmS5XqopvYd31gkYTxq1rkzKAGv7daRRUPBJTn",
  "key18": "3YJ3fBdA2cbtLdBabfssj9b9h3P2yYd8qm38yx5ygDTLeTocdwMKxuJen1y2xerqRnda3W4Sy8A2dPX62FJzLDQX",
  "key19": "tF1eZ34Xw3t77axwDGbkbW5Ws4eMbEvYNWM2L2du8UrTcFbJqPkiaBihmfZyxrLGeM4F5mgkxJmW3TKaurPBs9B",
  "key20": "4eXKnSUwPhVR2ZpndSmHUR3La8FgXgjffE9dwCdvbSkHEv7h3bz5sof1hE4mA5Kti6RmbFBD72PGXBLd8EQ3UsTq",
  "key21": "59sbdeEuN7f6HREU9ZfFiEcPKLMZHsoywwCjtHvuP1F1vJ6jy3UtgFJNEd87bM9FMiK45mjrkTA3QC6QibbzQAqv",
  "key22": "3Vb6V7ULWHHgG8AwuudCwWxU8Acecyx7Gss23g1ZQskut5xxbm6NRaU58eufiTD6X1neiJNzEZ4uMSq6bM7yi3Wv",
  "key23": "QQVj3zXH3vaYz2eoozMAWQLza7hxWEvAiAZ6wTYrTfpvzi8BiVLJ5kQCWofJAehr8Zw44qJxFSZUB423XrHXkNc",
  "key24": "3XNe7VcuieHanJUJi9CLE7oaJPn5urL2Q5eCKAofVWxgEPKEBExVmsVGea8jCziGuzjfjeyBRJFaA6wiveoLAjxL",
  "key25": "2An5ZGzhVcksumaCd4Lpj3WGtvb5aY9cb7vKnZrMtg5KNdso7qCien8wF7reDyeRouRkeQqDmntwY49UAENA5ZrL",
  "key26": "dk4Rvm9qKQbYjTFjEqEjzyoAgGgMcX6RCAxuEbZdni9S9sKCpQbXHoCtuD2kmQDBzWa9x6bwpRUNYodVC7Mx1nf",
  "key27": "sLJckXqDuH3b2GgqGMEEonAuXWJBw76Bbu6KmHGw53vXNWGvnppFZUThXTG63hGe9KFUT5aLsKix2tsiunVXcCe",
  "key28": "2oyEyoXcpctZBg8jWp37nFU9UTKBAKnsiB1Y42dptRzNx4yUgxfXVCtrvboHQBR5apAWftZkC3JFvxRQBurpFJA",
  "key29": "45BvMVN6MF2ZqHYuPGXRT3phJXqotVPtasf3JZtiRuPEMXbw53DwYBpSAScArEjUbbVdKf3sgnDL8qmjHHi4WS3r",
  "key30": "4uw6YqKHZbKvzbF11P1g7pKxegyi15jH7cNG1RgGQFfffiLCg4oNHFTBQhM96t8xxKqpdxdAmgQUs8RbsE9XP3JK",
  "key31": "5ZJK7PpPYaGgBe3Dmvq1CvPxq2bsVm3aDB1HM6cPzgZbcYMNVFAKm6uTFaKjvArpF7zgjmw9qA7r77YAaPUhcyYR",
  "key32": "4mHy4A58fJZQiLtxK6jdASqsTbEqVhY4yGURQgk3JUSX4D1HQAhYZe1NoNuYiW8Ki3iAjzPAszTqpx3rdzE1WdkF",
  "key33": "4mKocgb3MH1mNyZXr9wAeBwPBkmmwE256UdhP2ZTMwx8axqeE2Nnbvb1TgQ49QjmbVHGEHhFV71TP2phKNCbcrFz",
  "key34": "3rF7JY4dCZYBTH69g66NjFVaUMiuMmQZNoCFPft6xS3Lm712usCxKctviBzRzB59uFXoqLA1WHJvUcCnmKMadhur",
  "key35": "LW5r22CbE2mCEWFpxoQdbMF5sLANqMsuegmsCMGTZU8WAmjp4edvhHfQBsYE8RZRWRJs4a3FAK8VHAdEWTL2rDA",
  "key36": "5rrP99ZgoENxrETUJD5GXy5drzMRf1ri6Tn1DLdznVv6ESujLJFm34k3bFwSuaNjkv5YcepdrRdYffiMLcfjkyMW",
  "key37": "2ZUbYt3BdCVqiCHSP6joYFwqerXFHiwVgk1mtE7htEhnz6ix8PeFTbFofXfWtJ1ietEx4fRmBqcQz5hiXv4nrFaM",
  "key38": "wMLRSzrqFmQUA3DWKsssWqL1cXTfjbF251pEe8DQiXokLGE9d6dtiQDxZArep4YvTQ6fSUAHX93G8d8vsn4MZvJ",
  "key39": "5zQ9bDhEwzczyFYqzUMSAQZFa9GoQUZ1Jf5VkqcnXeEGWFpaPmX4u4A7YKk6p8WGEGhGAeuQFxq8CKeZLEoooPAb",
  "key40": "xnSzpeWxu5HM1E915QtnouaWVFpUbwsfgAp83btTkm5zG3MuwKkbsmwjWqLYmr9R6RTT6JYPguFz2vQ8fPxfAPm",
  "key41": "4JfcEwaAGNoXZwHAqTvgeXuTTkWuVFSuYSEVsqC8Agi2SeG55jMqZcMzSRM7Pd6bJrn4N3eTRJGk4itrsao26Gjx"
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
