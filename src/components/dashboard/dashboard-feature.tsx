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
    "3nfxLkYpcdKHTbQGqZfBj1XaXmx7tYsQJdLVVY8BZSgnpZquPiQYZK7qSGo17NP2HcraQcwGeB3gqA9fgrJGQU61"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2StXaSTKutwSed5aiwq2cHSqcccftRDPe9LcsK5ysJ1qHM6hBHy14Xnn2NTRq3XPQRZeTg7HV6UpmFgBd6G9ym6F",
  "key1": "4X4EQPkXg82aUTtavswSGvH1yLfSHrkTHL7LFu8TrnZTKrU5kcvXMMexunQmuvxFTCbH9myeVueSeTShKVvBJAVc",
  "key2": "MpxgjbmP8BJZrRxXv7WUR9qEbeyMw79fD1FLKkHmSzEteZw9qrp6LJxME6TMCG84zmScBGa1GGBzs6TnTZA7CPG",
  "key3": "2d3jYGqn1RufebDvSzVHEUF6DB9Cg1nGno1exTxQDQ5A13csE2nfBiFweajaEUxZrHBcrKCQSuS7gqJxB2tkgRJW",
  "key4": "5BEzfThZo9f1Lo95U4BNuqu5ovTPK4UQbkbEWMC41ZyWzARxThS5JSLub4e1dAShmsYWgyZGpd5sTmKpFntFX1Vh",
  "key5": "2r5h2hcYCx6TWessPc9KobjRJ46CytrPSFthdhLAyUYBrqi1s7grhHxwwRtVnFFSMaDq45q2SaN9U6G13GR931pc",
  "key6": "2A5c9hQJ4KfJ8Ggu52eJE2tWthGqcXPey6hJmY7s8LWZBtcJtsUwTRMGBh2XY2CiCVmfEJ7wHbaEuyt6GGPrk8pe",
  "key7": "33LAtjwRucyfjNQzPPL8J2cMaoyzW3AEZM7LUtQwSFEJomiYeH2v1eHLkKHviCr9f8RemKwzL9RSdnGaap2D4NDz",
  "key8": "65ZUvFvDTKzZDEBNEGbN1n5Kt1t2tnohuegW1xjrDiqBJ11EnfkFrNd5n4g38ZqQS7zqxKjXnxovojKBMPfMQbPK",
  "key9": "2zDUtXbTGo6ZSTBbnUhN2E9pREK1HzEDH7UBoDqpNurtwn9yWkX1NevU3k2BxpP4RqQcoqRY18wX5QbsBqoAwPzE",
  "key10": "2St4JvUUNKyEfvEKRwusU4SNDj9R31cxjUmii4zxN88CRvxDtZSzwdC9in3uRi2dsEayAXQSfZfWLXQXW55aj9e1",
  "key11": "2kqTfTVgRW1VmhHgFtqCrJk6tUcarz3gNaQCDUUaTAJvu6QXY95sYjJpZCeXJxupLhj9h7jf5KkKe6cjmZ2ahvoX",
  "key12": "31whyn3iKkoFRykEdiSUqznbAggmSgvDFF333znEuBMG7gYyoHvL7hvM8nPPfCnkLQMiU2Z8wyp2U9M3PYiTxmL5",
  "key13": "ixPNnTo9EJzpDJBWoTL982aKQomjhFULF6pW6VDD8a8Q2iq56pJBb1Z1p7DpkL8ZnzFsTgoBzKiKUTC5vnSVs8c",
  "key14": "2NXLUUxyjmj1K7awdGCuBCA7G2YrvKPnFgiZfViKkfQRTgJ4Yu9nCMuoWbvXtEyL136UCN9RjMz6xefE7jWtwAJ2",
  "key15": "5cZwnBRPV7P7bj4ZW4K1Y9cKRRBzdKeWr5Xh2xbcUqN8Wr1Vejh7reAbACZVNu8NJ8MBS4XoxMAcVvWmyEgHtCQG",
  "key16": "4Hj7R6P95cwSLUcFo7XSPRxSnPBMMeMdXTXGXGPnZ9A5vcckTeUi5KHKjWYEr4Tnr4cFqgmcdM5LxhnnKb4fDLxR",
  "key17": "5rFS2txRYwSUGJLZnSr3KVyh7UNfPo8wNBcAXW6Yndz8YnVrBrg9fxw6USQVWaQVEpKurp23h1G9b61mJqXgomXo",
  "key18": "2PgLBNY8mBjv1YwQHJ2eJPJJcXQ1rwuF9qTBbZj2WYNxJd2XgGSoiTiDsG8FvAmRWvq6NbFXBcTj6qyCmbuRxFPK",
  "key19": "hWHH2CYWYMg6nymEQScvuqN5q9FQXiZ1y9TmXMaYrxUst51Zb375SnZ7JRKbr9pga4BiV6bGyGQoawJiyLL3a5Z",
  "key20": "49xj1jgbR3FgnehLDrBvLD99JkaNZk1rLibHZfB3fBBvDmpDtkmpugGoGMjeEjg4xYyDQ4tstr8Zs63eCjdjEDWi",
  "key21": "36LxNsvj3JEC6qyaFWH75DU4zyxD6FGRAU76G1DbWWj4c8quHdfio4z9yEgQdbG3YucdghHoDyuZnkQutvfdt4EN",
  "key22": "DvXNPcTxgDARJCHgrPuco71pPFSAdcwP7ETawp6Qa2n5yvq7DQbPayMxA68jKHQXcX577zZCd5oCD17NQWU97wt",
  "key23": "539WW4m4BKkVbcavQek3E4gfmYV9W6vQfKtihmjMQVRPu67L36FRQFvGpRYPCNEAcoBfuS9KJqaHpst1i2Ktg52C",
  "key24": "4Kp2w4SUSu1ism9HXY3arye7dbau7RYj5o2sAPtnYa4R47eEARuPiafXygxETtqqNX286fAxoKE4E9QBYiU8tmZK",
  "key25": "DfwvupqhY9QZNzKzYZQHxRwVBKrpNSZS5czfUJVBuznB5Xa8U3E5UB7unVnd47iWSBYkkrT6xpWBNfv9CDCiZgq",
  "key26": "2M1LQkwALHhbVqw4in1pUP2QqUPeiySBQWVWhoTQhtNXkbwiRmjifR9KxoUh1HcSw6Ud9cBtQLPN6JFygmSRoKN1",
  "key27": "1z9qwE2rCUN5j47Sxu1SewUZAzCBoE8bJTYkPUjMTaNozvkqUiG74yHLLKk5X8fYFv149Z2JyMewZv89mvXdgC",
  "key28": "3JdVVvHY55MU1zkwx88RfcQ4xZabtiT4LsBq74FxSg61zS3diVjVStW99pY1rkxhKep85jG4Wn9wzLkg4Z7svUgY",
  "key29": "2sEpCVenUrEu6ysRX1L4bMqtPWxZADCPnX9r7da8Gi4Cog7FqHpYZmUDuAcitJVyGNMqUsSX24JMinFJHxsHpCEA",
  "key30": "5wDdCWAnYFzausNVCAnDSfsp5SRiQK2jVLveypqTaFQ1GVeNSx9xD7psky4Yc6S1u4MH3y6BKFDkAMxMAq24azbk",
  "key31": "HGtLDEYWJ5KmUoyjyNWKPnmo12yMJp4Mw91zJzLjsvZZRcwyQ6HLAUGPUqaV1dPv8vHVPWmHdBaznMEjHSGGL6N",
  "key32": "22m229qoqyidDxuToggsCvSEYwRJThpD6efE1paCkHCVJ2dKKRnHKCUPkSNtQYdvLC6BSNedevnEoz83qJy7hxjh",
  "key33": "3obdGjEvLXMrY5tkgHRp2sh73keEAa21SzhG3YtjvSWCzkb6NnwWLvZARbHg1gXSbcC5tshMzvcCP1tYjZZoCg2Q",
  "key34": "5kSSULxQQNUrScBvjTYmjadDBqMj2s8KihwzPqeuYk3xajgsi7XA3dZz9tVg3j8J2Cu1jHm7vgn9LVWBbWSL3Yqq",
  "key35": "5r91TAQiJuUeejm3SpdLPFdqh8R4mmd7Mg82n2Cduv3kAjxhMJLMH6VrwVaT2nTqwsqp3Xu4yJPZnbnCSL9hNi8",
  "key36": "3EDtPJpnJFC4iYckmVgTY71W3bp3TA1sUbH1RSu8A7JWzfy3FEvV3npPFZ288M4iZN65gjYxf85aspUSZyBcJkuV",
  "key37": "4ihiPbc75nMrGJ6oP3KEjZvnxFTstJg95HdwDLDvuDvdqrVf583gz4MmfN6KQPtyLrLr63PSNKMmaB1Y1qszGNVf",
  "key38": "WxKyC8v6XqrGUWoopttK8wtNBe2bMrvU6wSPcjDErP6Ee18z3sZKu8JHhgsYq4c9maXyf2EN33b5qeKD5y6u6ES",
  "key39": "CUe64tTMX7riezwuai9gea1swhFTCdxTnuZV6gG8dRXqS9pjgNmMRxuNjTR2bGUWRuUgWZBPjDRwDxuie6TgUqc"
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
