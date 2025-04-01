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
    "2cxd4vtE2fvEnAo9JZxcB81mhQP2tDwNcS7FA1WKfc2YuhQGqvUqSnh6GZBbtK6M9wgiDLTXczLV7sdQ9jS6jVmu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qb7wbdewTWHDPsqCVDGdorZAdqMf2fvvwAqRsvdoWHSs3htAA9HWfVvtHXki4R7eZMhTUNPvtLFKB3PxsBFaN8Z",
  "key1": "JFpkATbPADj6zmzQUzCf8vqcuAoDtF7Ysp1rRRsRLGhrk8UfugqhmiggRZcPGpkWsZaK1eoEMNbN81GE2pdvgJL",
  "key2": "3T2UrGqd6g33PVvvBz728ZDqLVE25enfamudRujThnS6VuuMgYbdLuAb8UQPj6dnGRXLwRVyVQ6Gtr33USDCx5oS",
  "key3": "tnbtAE6VCWPJBQDpbYrxPY5uP785xmJqjQ5jJamRZttxnSG9TA3ywKzntLhjLKbJzQkqNxJ9aCdZU9BGHPFbhUN",
  "key4": "5LVgHJe9KMtxib2ADA4EQ43uVsiqbGFTDr962kn5tBLBvh28feXbvAAVRzU8hFedqZjSnRKUq6RRk6Udg9ch8Lxd",
  "key5": "63CzpfdLBiynDbyCGXPkR8rkLxfLVNqLr7qLJUABNYcVfg1bY3Uey4H2bXNeBi1XUDFZ5thEFGpBuSmYZW264bmp",
  "key6": "2g8UUYAwy4xSt59PVN9benrep2VvjbXFMv64hj35KQvDJkCzbSJGgBmW4b5SDoGcwzdMEYqoGyvSNm5L2kmkE6nA",
  "key7": "3BHgx8sUrb2BJ4LTA26eAB5kS5WdB7gCpHFxt4AmfkWPQnpz8XidsqksxUaMHoNku4ybgbRdDBLMbAPNS5ZC3DzQ",
  "key8": "5wRmDvoQAKxAGQgRnJUjMy1RmGLbZTNegwqy3SvckEip7LNq2SANywGDrtRLhCdcLrBHqLHAYCEa6NgTMc4ETjoR",
  "key9": "2QTEYmjYHYpZeCTBVGzrQgPYiVv5mV746nifuBRFHGrcmdthE2NhRvbmkV8rBAB4LcKKGP1qsdwCgv1xAjYkibJu",
  "key10": "2Ydj5mg7H6perHcFz4RboSWxkAejWcHr7rZzHtpBXMDF79ZoQzyJeXB7ZBb4u4oCPTnTJfm1Py4ihxd41ibKVhMM",
  "key11": "2RhwD4WJ5BiQhaMWFGQpvYTAjoMYL41ttdcHe27XmNugBn95W2WLL49FAxHUfzqfPocCnySRSuCjxzE1XsPHmU1d",
  "key12": "5Rw7xMpRqLwo9HQn1unvGYrqineQpJ7vWexXQd1RTJZUU7FQYeVyfKVmP7FH5nV4oeXebzbgRt3VWZk1FDakinCe",
  "key13": "4MsbCrqL1S7xWsnkNpmzp3e6h3m5G14q8n3Qi1Q3asMwmQzCCcm36w4C8TaDiZd5xPDd5Y5f5uEwDP1W2jB2p6yk",
  "key14": "3eJwQCd1ZZdqP3HsW715FVtYXWxYxo1CxcMRsGtcmeQRJ1wr3ZecFHHUHhNXxsJaQm31zzud4RuvLdntUYYTXrUv",
  "key15": "3MD2zdqyL2TN6MESzhXrhDVtbBtmWDz8YtwEWVXxCYE5mJ36rqg3Rocg6vaxQ2c3xjvyZRAVrr8N3hANV43JrTgR",
  "key16": "2d1Yun9Mddtw1MvcK4hQa3URXrnMEUMeciomk6MNijcM7XP3qd4zHW9bZVrELa4MrxYD6XKjQ8z7ySpdmsnUyWWq",
  "key17": "3z9jv15DtmXGS9ngDYSddEbhop7Xhregapm4PbQtFxfdTe7P2U4qhRY3VLsJ2BruPVChtkULR2aWufwNMJk3W76x",
  "key18": "37mtuedg9CaDTaHr8hB7pDAcW9MPhVcBY72szwy4cB9ZKZyybEQgVSC9uhkzeVvYRQSbePrHExtCGP3o6rrXvWpR",
  "key19": "5Yu1LuqW2a1epqxXm4q1vSCMDmkwyjiSU5fzDpKB33QcmoL5dXaHBUzHzwBpgxkf29SHMjkqrByk59KFkRELrm4o",
  "key20": "55xbFkFyQouZujntHN5FwL4tmtQfYB65o72W4EZ54dnu6RMtseJVFmxe4TcJjNA9FtUYgPdBMrE4GWxWtLdBT1G2",
  "key21": "5paUbcxa5fLkjhfc7JLf5fC1Qzj4unRBascJESYLvj36udet6z7XWMMxJ5zUtjoiWK5YyAQ3JsQsDb96zAKgM1pH",
  "key22": "2rgscTxLGiwuXT61Dxm7v1HMMrinKF3nLPtmj6CPBx326JsLWKyDGhnussri3Q6EF7Yv5URRw6K1caLAnA5eFpQu",
  "key23": "5TWCEZhqgZJEDjuDoaDJgJnMPfNAUzeHDx6Kav4PvwCk516mpGzb6sfS9mANamA3phD93bTxvARufEpxvzTQFAks",
  "key24": "5tJf8MHa919osJiwM6w53yAikywiny8kzxiyDjdW48ojbHvCRkeS1uUbvGpMmRytE1ba9MvqE94pffSNTnZq8Z6m",
  "key25": "34x9KWr2kFuxbhaPbXD2kAiaxaFT8nEeGu4ySpHBdPjipbSxzynMi1MvchtEU3WM3aj1YSiAaXG6ECiRXk6whsvQ",
  "key26": "3z1BSzrx9B5Tb3Kf3BvMw51TLp4Swih37BXBPFLYrndwZ5ETnvip5VFREmVDYqxbatAR5RnSggCNcXtUXjzDCVV6",
  "key27": "2X22FE9qys5Sp9NF5GUkMiSHpHoi1mfBjPnaqpocUZX8KHfE1HagtAPi5v82tqhBsyTroQqg2xwyn7d7TnTmcm17",
  "key28": "4FWByVzB7GgnuTyCQDip8qoAos4zYmeQqzgm7Tg4Hf2NuyzxrcSprf8DnkMVJaoQPYEsK1NjKv8rg26GhLmKLZ1D",
  "key29": "4j1a39t8Rm3Sn11BvcRQ5iwv54sv4Avp4LpL61apoNv5sGsKmsQVpKfzL9nAZ6kL1E14ufxk7sehdCYAgGUVR416",
  "key30": "5FAr7yuMbr8PewEaHpvnVE19cE5AS1W81fxYhHaWfBbcAmBjncLNMdFCDDsBFWfj9BDDHkfvs7FZ21pXxaUwXt65",
  "key31": "3YSCTDBwJwfRWBgaPGXN6dY4ibCMmv38UQtFqM9MHYTxriQWgJkkMWUxCWKTcKNSeDJAQ2EFn87y1muGWCijLDs3",
  "key32": "3HvPdjQ3j4APFVNAvZnmyVfFgHAMwEwFKkdqxBvH6Jz1wbQ9uTc7gHy3b3Jdsotm1H1HDn5FXnqnMcLtLUbLoSNW",
  "key33": "4QEi6KLKjZzoguSTZgCyLvCmsJfUXMFwtif4Sv1buyjryPNK3tioFTZrkRzHkozMpPQfWeukhTWwDZ2a3ZqXK9Dx",
  "key34": "2V97CPebNRRUUo4Pj5eR8XgxZioUjTFqx6ZKyqYpBDdtBMZhPpZh462rVRrCui6TJt4BvPWzrmfHU1aVDKykXfgg",
  "key35": "DqgEyrKywBUaGn8XERA3cbmLW6B7uLVktUX4CDA6QmapBq7E1UtEfBuo5pkukyYP9cXLkdLbtqg1w7b29EChc54",
  "key36": "3LfGwjeC5xgiq3wSng9TfwMnvP9bSXCvZqBFQu8rSiiRUxYDvjEuTjFEWvNX2P1iTDsDzHErBaWM7vH7SGrx6Jip",
  "key37": "4heheMybKjbrLPwJVSe37qBH9Y7DxDQivaZ1JBcE3nEqWzxDUXELpzxA58m4M5NGK5Q3Lq3kqnB1izfrHujuiMiZ",
  "key38": "5aFQ2ci3UrEPR21Q8XNAEAnW8giBD3dwKfMMEy9XhgxevZncGbczwpauXrKbAdF2jdtjHLLDv4xLBz62pFHhyYNS",
  "key39": "4pDrWWjbx8a6tvZ3pnmCZQ2DKGh3eMu4s3aPNafu36astiLaSX2k9nsteGrHr8r4shHdAXP5S6zp1XddcjAda8pQ",
  "key40": "3VVAnQqASKxYSqBG4RQKU15VRCxVtw8H13vwm1rxpxoVuY5Mh59vEa39nk4rvdVCTxuGeWXS2FJwZbdQtBbxfjb6",
  "key41": "5jXNtearRW1hc3RTd2GTVBtFzYBrXjkADoyRrFYr3kVCB85gAwwiQkVsWbJRu2KFi6sWNRHpMn6i6fp7q1kwzr8o",
  "key42": "3RyyQRp66K1HdKn9UD9xC77SBiXZFAGBPGXZkquePs9nqHnyH3tPGH3dCKeERrrbJzMiGNjjbQhNEZSsU1uqnrBV",
  "key43": "4vDYZNcG9bMxbVWHtM85iNXL5ePErfKAayaeG7tXnmEk64Ld15EiiFj3UKMkKLBuRpTa9Y79tXdBHRnQ1K6z2PaD",
  "key44": "4C8TLr339sg8tnNPRf7vkTsx6hMkUfLwvwgTCD6Cdx8Dpqd6aqmkaoKPywwWJEq5aKMrvC5cLopbrNp5BjNejmXg",
  "key45": "5SuLBpdGGYAUL8TvTWriSeYLSbm67hwz3b4TQduMeU8dGnEEwia8dssLjYeY9LxFLF6rgQbiLGp5SNueZgitCCPb",
  "key46": "4cRoZhZsieFrKH2mEoU5zGRaGE8CiyA9kwMUr3bQpNKSppmtLhQRvBkgKa1MgnCwxtQfmDzFqCiUUZ125gBBQnaG",
  "key47": "vd6odtvAYgQ9PRXyprT1kp3oPjs3k5qwxYHEhMTLKSQ3JNmyAodsBYwGCH8eBhrx48Gs1izrx6UvD2B8vS8TT1i",
  "key48": "3kgSETwS4r83y4R8mLkhUbNS85eCiKsekeS7RRx5iLW2gVqWMPistPPDJk7GVKQxmC2SeVKSXKo6Uje26AgXUsv3",
  "key49": "4beFrAynamvgHbw7D5Sgj4ghjJNsfG7df2gkVA2jvpEe14YC7UksA1GjvN8GzxWvryKhba3Lkq9tEn911KDaYZhL"
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
