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
    "cjoJw7RWHiRuk1V2jzc6UNbrtRdXwngg1xAgjfy4SWehDyACUJURWvUx4nnBr5oX8ou3asDMj6TGaaEPvL1hezE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pvgqD451VdX88dJXM7fhqGugr2KfzfUBUyRv8UBurfpQByDHedsTHtYKLmyFeEMBjRnbY8bV8Hb6RPEu8WCtkbf",
  "key1": "3yhLBotuZL1ZgeVdxPK46YA4nFQzYFz4QcgomNsVupL8TyyhPMDLXUeYPGiBFPtrprRrw4UScCN6dD1EDabYT88v",
  "key2": "4YGDNRFcq5dqLesr6RX2urBY64XZwXmeNnUUcNfHZFRiY7UvqkT5G9LhFA2W1NnA6hFJR8XXQK9FJwgzKD5BY3hf",
  "key3": "5ZtcUz26NUp3LEYnQD4fZvqgLymek4xPmf47Q75Nm6Uc2QL36cnfueJ53KxXyBUNqL4p3TBhuJYH8UdcmqqVdvx3",
  "key4": "4vXpJg1uFHq8cQeg9xuC7vxzHu2kihdw9gN3QeNytNKnMvfAL5dprYn7RV3nmCMb9XEMyj5ThUb9xvnS4QUdW2Zz",
  "key5": "42k6R9KirCEP8qcP4SuK8jnpbZo6vxq4EQHy3nrJFVjFKxvyxEhoRqwxqX6QudQ5Be8Dyr6eZHGyzyYM9zq9PkbL",
  "key6": "5t5LZAPdJjB2uZVxxJ4rBKreHzu5ouF32qibGXw36Fpf39PvHuXodEXDY3z8ST34AhFjhBV6NWCj2SsZnccgEYgd",
  "key7": "3qgLWEU2SDQD567drYDWrrS6GAjrjXbPGyZNwa16hoiMuqy3FHPHW8KcH27pcN2zQ93GApcTwyAB6topwJ5LB9pT",
  "key8": "4qXHosHmrdTD3bHSixm9dUzhrrNnR77VdJRreuz2JbsS5saB8Z1AXGLFTrujm9PacAL9u2prb9Fe4KKab6mdbaq3",
  "key9": "4wqQgaiXyghSRwuovh8LENURXCNoztKKUo4bi9oKdgs7yXvy62ysKbAMp75nCvqXTN19c1HkSfBkXhchwAvQKyAi",
  "key10": "2yTM34Mb8gxmofUBTsj7Po3geDgTUziuwZjV1aqp1TzypdhmyZb3RC3HCDBJZ48etCr7foFy8x1JySWX42P1i9CG",
  "key11": "3agbHcKrVnTQcCRRwENEFTSLvfCgJgJwuQkbXgPLCK7zspY2bjwczTnYELZh12XWETs4ng7aNWuJyBEL6TFX5Xy5",
  "key12": "4yaTKFAievuwFXRtv9mhwWFtkkkLasdJDNhkZNxjhWXPBSyTRvqURWEL1HwpSWXixsxjac6B8SSTGsmiw96x1b2e",
  "key13": "4wsfejh19MughHwgfvkvzA6xk8smeS7EBX4ktVUmVCbLrkqVr2hWpyJGYmbuUPo2Sx68TDwdboBQojA6ENRwadZT",
  "key14": "WHbfja2Dq7YS3A6U74yhP13Gkv8J2AyDy3aooPWFj5uccWAQikQjFz7bPDuKF3HBdWUguD9hwJmtrFaJdntgkXt",
  "key15": "5kxb1CFM5MXDk8Weycdx6x4Yq3i7Qzrp1Vb9NvT2WyH36m1iJUgnFbtksDhSZp9E89jSiHrpT6CxEaefbJDidxY8",
  "key16": "2RE7wfnJFsPfejq9endep5oPDEQcRGNkyYGSX2Wsywcn4MDmYg9PzxtnsRw6y3q2bQzAAR3aRYxiHSjVyVgJd1Jv",
  "key17": "99QNyvW5o2CUpAsE2WFSwJkd8z5JWqMYvj3ojkEKScRAgSEwsUhY884hmHKXWMoEaPj7memCwfJAb45mreS2nYT",
  "key18": "4JT8H8CtQ9KPd2H6GUseEQexdm89MLUUM6RaeoCYg6gbq1rNnGVLmYrLUtL1HCCoYahr2G5TEaebXSPB1h7h69eW",
  "key19": "2tUzYdEAbNUcV4mNJcnV3G8jFYk5H5VAekKEJzXh2Ww65H2oTtjAXBg8xzXZPgq3GC5EmiBmn8dDAhdBPuy4byjH",
  "key20": "AHBdwVuHhXCV3N6xgtj1mcXo8U5b4NmyP8zvXfsMQvurpQurcFpLntcv9cLGUUR51weiYccj111PpnGtzMGPLgU",
  "key21": "2FsSw7BavfDku4Fy2y8Q6s4J1X47vNag23G7PE7ZpN9HREz3uSfkBKzp2kkkrDibiMggRD99CYhJYqnFPP9pXbV",
  "key22": "3Rz8VpfTyws2ZrMV3g9BHopoZ3kXMLt8JU7HWCCoX5KVmGGej134XRDsBEMEFsw3zrtLUzguGYEzSeYeGVcLykNm",
  "key23": "iHqXiCW616oyjyVQYyTfUQc8Rt8H3cZddnLhjbxJHPw5b1aPAo6puhgp1MyTFCKNVqTmKVXfwr56BYJhzUvQpJW",
  "key24": "21qGkceXj2qw9Ymc3wScTE2ooXkZLc6bZ23R19bFTtBYmoK9S6SzGNFsnwFfHbHEeoLQHn5LysGooAYHQyNhrTKw",
  "key25": "cLtwLJYEP4WcD2ytTjEiyZNhWFdMyHPKb4n24VHbRcy4dp1AHQE72sUao84c48BxScEwwH5xkfi8LbpYbBEzTgg",
  "key26": "2NG5oYNtQWzDJLsezvPzdcBnSs1Sp5xLdXrCePZSFVRRda9Ug3b56jVpYTtDXdSuD2WxP8rw3Ln8vgKxxkB4nqEV",
  "key27": "vgH9hjoHsSMsu8Rwg7ckVk91aaBLNzZGS8qyKM9RCVqzL3ZCv3utyZaySpD8t2QeMdGH3jWphvN2JmYjtjmUg1c",
  "key28": "2KVaYnRqE787A2ZpRvnYYBjqzKPdCpSfdcSx9aTuuUoj6beXhvFUHcNCK7u6uSzYbVhs1wQBdpVgXjQuJwR7fmBr",
  "key29": "5hPujP16WL4TKx5amQewva5PwWM6WhXNEP8rvCqeWPHB1Gf9pvpap6JYQgtd2a5vU644bduVoJuishAaVy96U3Mr",
  "key30": "37kwNKpCyJcYqCC6GfTc1ycqAeDSnREn3ES6mqv3GkERXwKNGMcM7XeqXQVnoCgpcvwgZxHsr73Dq3EyhfBpmeir",
  "key31": "Rn5GHWb3sTpVscnYg9xCR1RrbJfd5Ywr6gT7fVNR2yZ3EEZUQYdZPEz64yE1k6PDTNKvgmfrQp1deTkRCDCMSBw",
  "key32": "4fLW2NTNnEndkYJL8awZNMUNtZ8PfgxiwwLT7mMEZA6wxMnmuzt2JUtWHDPAq5TSpgu5aanyZfBNtwmxfzXSzcWa",
  "key33": "2Tv3U7wpzhKh5fw94K7go94MYBpvtX6oG1fuiB9y8mbNLvndjfsvtonp6yWxzzogbQixykV2TNSZyFgZsjZBDasi",
  "key34": "B9sR3YUbjvT95wn6f86vNZAFzvrnPWdWZbcWWMfEmcfbGUsFT5BwWV22PB4qs7CVTaLK173MUyuPemkm9YQdJ2c",
  "key35": "3EpJ2V8CvQPzhgWumxdSEdCJSd25tyuyQaAhfNGrs3bVZkyB6YLEhE2oKRRz1bXrHmtEhnHqNsngtnDJKT425BQE",
  "key36": "4ESsWoqo6FhTdB6b5FPmgFkKyx8ZngjAy971FiXJqFyzo274aaUitgEcYmaSJEESVtct1hSSvS1aDKGModZFDFrn",
  "key37": "33d6MizwRu4NPsbweGfJr1M4mRsScRE3kML68eXpZiGesmckSzcYPVqPM6PqtCnG29Vxs1CKtACNufTMJvQxk6YN",
  "key38": "4GAJSXfJQockq2iQgAfGzNVY2aA5VLQKqgD8rrYGqJfj1qakLsY1f5M1PyZFgW7yfEiAewDUFK8SaLMpefQLzet8",
  "key39": "32XmKAMf3AMZgDEazL3XmL49UppRodHmLAGcxki4XhfnbzvLqSxUKKkE7bAvh58QUFkAWuhCWvSqeUj6hjHMeaHX",
  "key40": "4uDzhYt4XSdVmAS8ZqoevPRTwSun1qLrvkrJwy2o5bjvFbhoHKpYrTTSLv1XnYLDZuUuQef1mChGoCEvUpF4KtQG",
  "key41": "5gARydsiyEzJBMZKgC7Am4dqoQtC3LpKwJEC1NkQ1cdMQ4Uq2CXi8tJNUzeCTxkAY83fE7MYUuBidQSCij9VEhXc",
  "key42": "3vHeBKn5roey79Q9dV1CGPSud5iCp9chZ2TxPHGkSxTGBB25ujqcBWdLVz4oRKwEExEEcirCaqiWpfCbi4tYjh9n",
  "key43": "27uaLzqqqpjVW5v33NxkkKTSeqomRc1QXdPWvXqxbSrHdKwoJfMscYLynxoiZvMdZo3YSuSoF365GyorJ3TipD5e",
  "key44": "3siicWLJBt1p4ttqm9JUVjiJ6w6sKTHUTwKK6UAmadjU1NsJY4DqJJHnmS7W1SMwYskrgZKgSgPSGZGJBvTqxvGY",
  "key45": "3oGc7YV4xuV9T3q89yRjHtB1ytXfqNzbLu2HzmJprsFBdEWE9KztJ1AFqnwFV7s3uCkbChySA6EZEzmWzP9C8Mug",
  "key46": "3X3tCdscCEAE1kN5mJdkEcqJbej8fzyHfEKpUC3ye15V9J5LRsh7cKiTa7owWsorLLHwst8k3GTu6wDwdHwSMzE9",
  "key47": "SD6n45TD2HPGeTRuQprmdG3xqzdyDidrD3EPDFxygLVwUagHsRmXxdN16XN9h9zSdS4nueUTVEZTKtGY2UArCUy",
  "key48": "89Gez9mGhGgzZ52yC1GSdVtfwQr9qHPxPimhibVxoc8jAu7QBTk46pgZqJcYtWsYZXXLhe6qXTkZmrDsjEKJh1Q",
  "key49": "4WbpoNXox7fy7wVmwYjtvrKpT4Zwd5tgBVz1DaoBDSeV2BtNMSxU9AXaxq6KojwDTCyyYLHYcsYwiK8wkgSZTRSS"
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
