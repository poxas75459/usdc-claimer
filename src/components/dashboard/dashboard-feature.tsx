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
    "4neYrMZRBvA6hUn1zBGTxN1a6x9mBLfxXyGyYhjH88XXwix14FYodpfPf8z6VRsyDTWTS4GxpX8z3BAN5MRER8FK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MFve1qEHEjqXEUPHmzr6dbwdLkZpThqrcCnsUMESBpct6Df87kEXUC1gveoaVGHE648CR76vNXzcndojaDHo5L8",
  "key1": "15ifLrSKznSBT2GZSMURSQn21RjQHPdVHFox49crJJWwZ42oksXsYbxh8yDmrWeTug2uYEfWJL1JbPZq5SDthUv",
  "key2": "4xAKjs7DPinCFEYAkq6GM661yzU7ksMdYAfaS7dVudngZJXXNyvht9RYLUdzCE2NTbEYv97cEdwSXRyrgUCCkB1t",
  "key3": "yj5x2Sucqta73ZsoSnyEDvKPC4aUnFD3DSbWYbYuxw2hVDHj1MxnUh81YA32DRW4Sa9cbGhwHV9hyFoB28TD2pF",
  "key4": "kTq4YgRh6oYuvfXmSe85g8j4TozbXtweaguJsi9Wxs2yeg1yZWS3pQTYVJ39ymnt9hgrUSyf3QhYVB2moB8vx3y",
  "key5": "5sAZMrWQoivmFwjd27tY7wTg6ofaqbu79itEngicgWuT5mumFSJiEKpLov248yVV6R7s8EJJCXAW5iZbxqupkenG",
  "key6": "2p4YFNYpFvp4p2x4Vo6z98kHEarvbsdGE9vyVUW7pbRAMohknNKwNpE9ycAzziXidgr38yn1C1RwecxQBKrgvJ24",
  "key7": "317GxwbFJLMNYnGw26vr6Uaz7wRY4etGoR2GT83dHmykf7Ar6NMN6eXDoJL8ymmrF1L7DyonLqndFa3UR3v7VVrx",
  "key8": "4VCajwjbuBtyxLPEaJPFipyJwd7VNASQcABcDXvJtm2fh8iq6RXtD2ZnwnBoafPqpNEYrhfz7sShNbQVGpWwZUSF",
  "key9": "4MrCYYPv8bKJUST3qRWhD7YxxXafDAtot2d4yQfs3KbKwZmVfczWxDaXqBhvwMMMw6YfEAXG2CnnLZLHUU9z2T5o",
  "key10": "3FJzue9bxGgPZ6GaiGgvWZ3NjsVP95APrgzSApDmasguGhD5GWNhmHZnnn3ZuEh1aCZLxSqRP2ZE5RSM8h9e8HJg",
  "key11": "5prw1stptWMDqTMHFnkPVGeojjrQzuRG3CJeQNdUfoUFjpaS55GP2zxsk68Vc3M2xT8oLKGAcaLQmiRxvt5EWnAJ",
  "key12": "2Up7TF2X7P9UxdJR2KzL9axhYM3sTiBhH5y1qHuoxWor6pwdJtthLmQZWAWLnod16rYkVbKoTc7ZrRWQ3Z2p3FpJ",
  "key13": "3UkEawzwvtygKn3Ej7kth6NsD82kmXeLuVZZxWPWSVvvqDbd9RqHLyU9CXoC64SGJ7jgDBQFRhtUUqt4c36whNb8",
  "key14": "4N56coXVZc4H1pH2rimzyRA8dTnytwJm646WHHbQvoXhi1mg7YoZPctA3C3Mf9v1K5QWvdqRtmpaGq6KYJvHzbxb",
  "key15": "ELWRDpEdmeoW3DZJmHqWYU9TTRwSmep7EhArProD9xAierBBuN6g9FDQ8971abaSVCR7svBCyENDfeA92j4koQK",
  "key16": "23K5zJbSN5htkUHEmsfbYUJNdTfkCym4BS5zzf8JpAobdi59WXbGuUgApzMYz4WRBW8Gfsp3b8AJKMvD5UahcBmv",
  "key17": "8zGssd6xQpJdmLwGcQwoZpA825DT8wUuNfFu1aAvBRBZf9aBxRbtMRnUNE7uEK9v8Y5uZhmj5FmM39BH8ZGwxij",
  "key18": "5E5RGFWArs3yr1QFpviftxgbTLsqxS8hUooToFShtZQFs4LLng9xEVhvx5Gny6pkxNXgnwQBxGTkBoCTRRhH49NL",
  "key19": "UNFuuLCkwYi9TiWxq5ENvmHsHShgmkTMqN2wzNNBCQ8EnETKgEKdQbqyUrcbJsRYG6Z9kSFfrq3VoktZVeWYZ1v",
  "key20": "52U53GEGZWMKatZRx3fgagaEcHaEyyig2YWuSQskaLumC7xasaYVST6Bd2HYaa9C9Sbke2Zw4XShL4dMjsSLLjXt",
  "key21": "5Svj92j3k5mEp12nMyp92QAjjEbUvAL2FGZWL93nm6juFGNxkPrCAtohzVoZcxitr1x2LD684QooTdYeZtDJ7Jwz",
  "key22": "5WEonbhRapsqVfQ8AtTR8T9BLCiKqeETQQ53Z6LTTezr7Ddx24qiJDd44jn3EZcfWr8Mx49RidXyYeMaznkh2ouY",
  "key23": "tQd9b2uq2iAwbGG74WxCRHbjLPEcUeCcre3Beeve1BVC8sGhJv182jhny2zjYS7NncKGs7Nw1R2h8sLNCwjMjdv",
  "key24": "29VdT9xXp78yqY2ZhpCLXiLbvY2fZdycn6pTWSEYRUc8A63UoYSDBRGLS8VoPoviLjUYnXriChKCC7fra53X4GeJ",
  "key25": "54ZxQSRC8oqEaiLvzQvzdcW5gjXygh4pSh9TzR8hHr17piVNM99EWpnELpG95Cd7bsz2eCMRTVzkP4ZrN2jniV76",
  "key26": "3SJ41wu3HNa2AgPJcv5NDrhUW4hRNbY3P5jp1K8cbGZi9VCQVwDfLtiGY1d1hjHZgraRsHDiKRvoszBqHRxBWBg",
  "key27": "3RbjgXN5AMbkxy5CQircc3ufUWv47eS2jDsc8ZeV5XQyN7SC7kDSfZDh1mc2dUWgHBSG5ZbNoHeY4vBiq1ajQrvf",
  "key28": "25FPh8KNwGHZdCEeM7NgdwHnC1yYBCC5daBXRFbNBiPqu3mWt19iH8qzq6nuDQiZ3bTtMZszoDeVHT9wAUKaXxju",
  "key29": "33akDk3UzkJcBoB8hn6r5rMJ8vFQkE7CxWUCCNSX7CCdR9iyfz7CwFo1YDTnkmxj7X6i8oJoieKXZoaySdXL73vy",
  "key30": "5EoWsJkAgwpL7Y5ZkcoiW6gfQ3wuJshoZbKDFyNxsEGjuogm3yAJ4j3FnDYBBLwvf4H9Y4GHyRuLEZR94LK23RQy",
  "key31": "UsxfWeGfABcKA4EeqSwcedbtm1VsUFzcRTdkNqLA2ksKGvns2PE7R4eD2aC7kUed1L5wKd1hKgSBsRx9vdCjuew",
  "key32": "Cr7bwDuU573MAPc37rNmhof4DjAsXcPPRkJd3K4U8cdgFmPrpBPdNfUDeicC7nXcfPVMHAEa4yJxrJQuREbZ8ph",
  "key33": "3fMyoo5r8qfgZH21b4sK6J2Q784NxDyg1XHdePTePP8KdHKCZgP1Ro1b6z8nsUZLibtG8nWxFpYH8yg8zp1nAtW6"
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
