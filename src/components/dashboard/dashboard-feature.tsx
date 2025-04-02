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
    "59eN2xU9aiGfZHNTzgVPYqZMaV5fU66d7jUh3QhuQajDwGYGswjFYj1FusahgmhfCVieFowZ6e5pLz9RjXJEjVkN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21iXBF51A34kx4PovtYQdxL77aLvbhmpNtwosDGNNmxzuWviVuvex7gnVUn9DY2sst3WC1zMBNG7STfcoNWC3T7A",
  "key1": "2ykd4annQ37Nao6Wbr9dMfkPErFdqSMhcCoWhD4Gg343B9st8S5YTiPL8EsmXvGXK4neExaQYovmJurZqqKkNiJQ",
  "key2": "3uHq1fH73AHuNvb7NxP2w9K7kNpE4c8qr3snE9nQPfEo2qXJAKMBriuy7Gct13hNNAXVfDvSUxT9cngSvF6qRiZU",
  "key3": "5uWuSZn8vYWwtsjwd16dELFUFVEq3G6ZdudMugbAtGn73abBznhHFn2aigcgfoa8AfJzSLjeRR5S4HxRBnfPSAhL",
  "key4": "3anAetGUypb7aw4StaM7gAPA5SjtDsSMxYiRhYH8Y6y9YvhpbN2Y78jKdFHxqXJd4E8BvroJzzZ1U49fsNVj3ZJH",
  "key5": "4iULC5uyoX8WRu8XXouc2TyTvYfJPxAPCnBZxrSb4Aq8uGXrGs95nMiuZYE3UdZtJfv1KzSLh1tkiBc2hBHwSX2h",
  "key6": "3fUgJavuxAggQegaJYzo1B7xUL7t9ktzbQNADHLXwc2TuSFDqybJsPnQ2NvaVH6A5jupA54LfEiFLXnpVYaGEnQa",
  "key7": "9q6nDaMa2uY2StPh1paVWtrFi3H5JMbkReu6KewsiZ9PsXrc84q7tiJ9cW4XmT1At4TqyRUHaTRcYsjRW7GPjCh",
  "key8": "3A3n8ztL5YfB83yv9WmgYxV9rff1Yg6bWrujR6wHCdgr2VJSW3wpKqkchNQXe6bGyi4m2XSzVdtq4iU1V6zz7CMC",
  "key9": "3qSTEY6rGMetjWo6rHrjHbmshKT678GX4mrDENhDyraz1AMCU1s7MrPEKLeqgF3ECC2HWgVpaDk47jzFfeMyxgrQ",
  "key10": "5TkfQA3rE1YMBHTj3W6RyznbrjPgya4xYqeNz3qH1LPL2HAExrTqdsKpXjbKftYsQ7gr12HPcnC6SbTuUFNsLFo3",
  "key11": "39uLLM7Ssr6pqmhuVgdUq2cmoAjL6m18psz8wwKNCe21uc7JEk5zAPLXDMu3P47PFkgfp6QGVfNofPC1J9dW6Ymk",
  "key12": "48ztnw8sWjVhorhseY9JJzApasByn2bU2rcGx5fz4eDqtcwoe7CT8VkfSXPxQmns1thrdvEPsxBGNj4KgyiKg95g",
  "key13": "66cTcMFTBYXAuJNDhCfTL4nCQNSSEybD6LbLZU65861C67Y3hdTnPZo41mzcDsm9z9LM9xcA7zeaXRrifBukeJgb",
  "key14": "2eaHCJh2JATy63nzdR1yFDRsLRLQC8JyioHv4859j6Fxdvr8PYb8inV9zCfwLk3qCossJYaZXwnn91P8NbBrzP84",
  "key15": "4K8ov5ArsVysp2oMnjCdh6WggUWYAmwyF1j5Wkk82ACHZUbQbD6PKcwspQJJwpb7LJuUCcgsxgNx39ZyEayXVM6V",
  "key16": "4h6ANo8aW8YpjbDUSUadGkR8ZdPuy3pgGgQ7eU25aEaQ7P6xKuUFuFnerbSkuQDavwNyLHNtfWWAdbHTGbcodQAW",
  "key17": "3Fb5naV5Dp4YPuUxgGTPtezWfjzEcAbeyRGL1GNbwybW1HSxNk2xaFy1Zud4oUwcVg7CcBEnquq1FYgngqZ6ZV7S",
  "key18": "xCF5i4thkcXRnoseXf376ZBsYSqd3skgH264vUNixnc5sBritYacPzKgudD9fMGHfq4EKpoJ2xPUHc2NuiV2HeL",
  "key19": "CEb2PfTrKtuB1JxFe2XsFTN8aDVobCJ9LXwbZK8U2boyL9uaFJraCWodUkf4993tBemXoj52PVqMFc4azhayfKZ",
  "key20": "42fmMPgQdKwqfJ1F7Tehd2iQ5HitjxFWdzJwSpiAtAzkZB5Bix7F6REafxdkpshPeRCmNpE66JF3Zwh1HSvkMgLt",
  "key21": "4x9vfH6VkxmE9NSHEADmmwG49LMXRkdwfHiyrfdVdqWoDp9ACoNsarAE7JJqsbqnCEsxKNEKegUkKrCLgRyxNmga",
  "key22": "5sKR9zztD2CkidKic4mYtfVCCdfDJzELdCNhhJ1jvfE6vn2wpQQWvQrEJ2wkdFs3kaMAwsQxS1W2c5UBBtbApwka",
  "key23": "4D7KT7qG2zPJSsj1QJQTh8xhCqXJU3BR9mK1u3NCBtaNjFHyVEHrytKBm6ygxbbyTNTeGCVQaoCdSjsECiaJbRjA",
  "key24": "5BVK2pnbX7UxhPxzjEtopPuzTCgMEQesuFJM9rrcucCph5TFtAdvgH3XiLAvhzmCezU9BZ2Ncjd6FezGFhmZoF4t",
  "key25": "52RfivvnmbUbVtPRxUWetaUFAC8z95Qq7wq5V9aeBNzBcLqet76L53UhHu1LxvwvQ7xzv71R7NWrTf55gTWyKVW3",
  "key26": "3M1yuGJSh3khPfjyXS5DwDuonHcXVx4M7UQcgng8tVfnWBCMiXLKCMjHMfjw4H9heVckFW7tJ2VhyJ2nf51JL7HK",
  "key27": "2SSn9VPc19kLTdAq3nLdsRYVEtsNAEGFMp6bVpYApEnxetrEFPTKVHVynXB5u9q7NpLUWhn4KP8936D1RXeK7vwE",
  "key28": "2CkwLdYE7z2dubBC8KbSVgqeQRpfjuSLzafjq1WfScRWLPPu141jT771TaucpnaX2RFDYNCn3yZNU6eyAGW5hckn",
  "key29": "3nGxnZugMEppyBLnykzWoW4SaujzYiDoSpSXj3Z6DvjvyvjHBJn1Cn5EJjhCqVXmisPQor1NQpiPmSrBUzvqQPKo",
  "key30": "5pGwULxjPDQd8t8B633pUofYDY9GEVVcXsegQXNB49VZCgoUuncRJrP8PKvY5Vxu21B1BWqgBGCESbEdXDyw2hFd",
  "key31": "qy6ga2HSPyYJoMpfDn1mMbHkD5Ny1dsN8q13rxHzUBi76av9eGy4hQayB23QdPkGSngNcxnjqADsFTz8tvmshkP",
  "key32": "3cHiLZfBcveJub2FvrxTfkF6tLqryxnUJvf8VNvhFXZzVfEZR5r3sz887XaoJz4KyKcQvTiWKSzF6gFN1hkVNMLi",
  "key33": "46QZWnwUXHsm3Stps4EtNLccrvHmnxeRut4BtudT4ubAVHbC2tXiE9e5wxg4gX2diFMssVsHwcqXEuuiDDWo1JnW",
  "key34": "3aHrVx7RvHr1vnCcEeL1A3eExgM1YPLghuDLsP6muVqmwVFdHuJW9kyWF2LEv1ta8Hmf8R7PRmdJkEw4mVv8ZiKb",
  "key35": "4mXhT1zmX6Spk5uTzMJwP4G6V71nacktyXw9eEs9eLstkWeUUgdzR2QBBzywb8ja1CvpDypY5oqd1dnGmWN8SRUe",
  "key36": "5HDSniRZfYqRqWnZvAkJ4wAcRwiKMn6TVpvYiUNkJhTcuiHjGqeuJpDYsxWKqQ7bbHiM5cBptzAoZYfpDsczPtYu",
  "key37": "41FQxAjaBBd3eczvqUGraqCeTFnP1QmnEEaSiSSN4nv6VE4W7JjLkVDLg3nPdrTXQPzx4NheLSJcsyfekchmTcff",
  "key38": "31eY6FuWzN11G9Wj3WfvWYvJMxKhVBcjqLYzzQGrEVsWHLPn4x816WnYGGgWh2Ca76W2yaWy1RspXWGEZL5TxwJf",
  "key39": "21BghquR8PZNPHysL9cNrCzNAbr69XpKkbtGkXQgRPhTRr8ZcUE82ETfZ4jYQU1T7bbMm16tgC8pPuFjrcJ3pNpu",
  "key40": "4Bpmcxafd6EqSB28Mv9cFGiVYrwRrrdbThyyx9ePBe13BEU3oGEhuV6AdCivw8qjEKEVqQ7aFwoJxs7CkiwteTi6",
  "key41": "5JXiDqtckc5KpYzda1K3Ko7S2GWkNJrEWj8WgKhMPeAqBhUaZKfm7dbzV3UePXBiWLM1rSWZu9g6BwSJPgkv9G9B",
  "key42": "UEQMUnxdKWwkMj1QTyCQZjMM8cWyMrUNc9TZy2y6D2p1axhBkuCJg9M3haiCDDmw1c1fpXZNUsLMt7TMTfXu5TL",
  "key43": "4tHRoUXFBwHqxEDTiHUinE6GL5g5cMEHJXApw46SGWoqGh8zk5DxpuUWSREKTok9cxYEYnQCrTQBgTc6diT71fn9"
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
