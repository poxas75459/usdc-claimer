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
    "4wryASEd1xaQwG11VnAte1VXDWBVt2DbFvwqUf5ApFcpsXcG72C259PTvJwzeigQtYiVZBPzbJ45rYEmUa3L2F5v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FZXceM8q77wVuQ7moQjgRoNKr7nN36qpPjjr3fzYFh5m7qB7DHkNFfeYthWzR9FeKZkfs3bTJgiAsrSmGmezpjA",
  "key1": "2TDoiVNairRVeHvvhzQFwzvBigtKEvJrCuXG3YWGf6kaT6UbAPeLfcqQTcdiZMQ5zuDViCtENSG4PaFvUfQHRLYj",
  "key2": "2NH8ss5piNmmSZsKso3SChiWyo4oUMzeKW5RTFPkypL5fWfkx37KD2T6SVySbMfxvCgpsuUCLFdAaqweZhdhfehp",
  "key3": "4ERnRj4ZUM8p5ASk58FnXdjgCCXLoB2q5Qk48RNuLD85L1ik7bY7c8ji1yBZPRRvX12dhgQJHyocbJMg8rjyES89",
  "key4": "5APWVMuwEcF98T3ioLLm6bZHHU4XZePSvgx7TQHzpHg6hxD6FzbmYhTPfM9xBTTSzY7vBXcdbYXxnuy2osnyvYAs",
  "key5": "iZhompagyzdJ1fxXnHh8hsPpbjYiWPNjiSNwXAYbjwKskX2srPrnsk74WCN59R7YV456B9yrcFJHSNnYd5UASSf",
  "key6": "67XpwH4L3BMUN3q4w8vZHFXjTPUH5RAnu91RdWi66WUyxLeXkCgTNKnYy97y5MFNX4GmFjeCNWKkkxs3LapHZUzK",
  "key7": "2TENP1jRjE14LyiWnvG3oj6GWYUQMawyvx519z6XDDR3vfxKtPbFnAH2nFAtXJNQ34qQaTgnutUodc9b9EjQt1ky",
  "key8": "3bzHEc1bPn9PmhRUMasrjnFyMcMC9FvYCin4isDXyKDf7o57cAYbthsNg6ZRQZjnph1s6q9XHZGNrhoTF7HdPbrb",
  "key9": "3XyvFLMpCbF7nVsWGShDmCqZ5C5fK6HpQPiCvRBD4NjvLUDhNZ4ZewKDrgaKYaoaTJE9QmSq3s6QpkyukS6UnCQ6",
  "key10": "5Mbu2NKPL8nxTjphfix6uV51wwhmdftwT6zdPjSuAyqsk1R4DgvWU8dngDjQSvrUdQeb14AFdw2dX45DukuVxJX8",
  "key11": "3G738EyMMauY79S749rdu7u8TufUkcZEVYEb9b6kHizDYhFJRX2CrhLf5mG5RyWRziSmTQ7wbUHhfRTX58tG99Vb",
  "key12": "2MHqkGfYP431L6fjtTymXpfVuehgWnT9ew3qcUpYcjdvaWatRvLQRskNGKcKySqMRo2sgVsWhc1sjqUKhUa7fVfa",
  "key13": "3xZkJeYhXchqZhHqi3xNin6CMV2Quc5CECxtFagukgPVwMXwxSnRA4898wjvAsTrRNBFLKyHQNniB3NW98i6oGc1",
  "key14": "4aqw9QCGBE67pR2wTy2d9ZPGo6BHL76UUzWWJvenseL5Dquu3eYJTKvvkx9uTQhmDUcQoGUTwHAiGzNjCYLHHqR5",
  "key15": "28GkY3YA9UtD25n63eBQWETznoeg8zAKSDcv31ZrwYdVHgeT1AqbcyhRKnXSPSX89NFM2VtWdxTioSu7ckekUrLr",
  "key16": "4YTg6w78ho14Y2TjbPrYokDs9STapF3ffxP1MMVyJSe4Wj4xECwodFThiwoLwTG2acGvuGn7GWJRvQMdShE5T8Tq",
  "key17": "3am7XHio7fC7ssthRwzVhqkQp8jw9qG3EjE1EeTaNbmW2b9pg6NCibB5zCEXjpxvAh4FwzMsPsSabXkCvdLQBD51",
  "key18": "2qAtH9MsqzRafY9x129wVZiPSpc467Mfzuk8nrd6BE53TiY6gfBwB8ZFXqdHbLMCtBsPduQWqdBk7J7HPx6AbD5F",
  "key19": "4Lse95CUewSj2MhUUSqjSGv2rifCwQus53rhbWKa1d94Cmp3jWM7T3CeemBTABHUnYP3w7AJ6ZjctfunU6fZZQbk",
  "key20": "2rrkuMGbNy4iWhnJw3BHJiRav83U1Hdt6GacwxPXM9Ecd7nFwFVsTbvW7sphNkDWrznAaN4sS3JChJncQLSCgi75",
  "key21": "5yoahGK9FZA8CWs4bzHLaxt83ksjT5YSbkCJmpm6qnyZodjY1UAcRUntcxScDAtUJW8pkWKV9GLPEwb1eCwWjRtA",
  "key22": "3oNthfAxyyPRbSbmbdyh4hBp6zd9mJpJh36usFez9hYiZmq3ENpZMma9CZDoTEqnprjYAyDegAeVuAgy7dAG8dnk",
  "key23": "5Z1RFyhcZHqCwArDfTA2wBCctCBWtqt8xchpzgayw2hqep925wyAJNBK4jYHfyXwfvgLzmUdAL5TF9Rex94y47Z7",
  "key24": "eiyVJxGgpPK32rxxNqVvYbMD7KGEBiw4qEbEMvf4AFsWbWKcb48VHadt1jU3fhfGGrqSMsgX1UaSWnPaxXxFkhv",
  "key25": "cPLXSaKF3mCGgfQQdhMTpaTTGHY1o3j71w1hgKKNan1ZksaUgrVrmPNCoCFS3ZbLfc7oF5jc5wXphjP7y5MchNi",
  "key26": "ZdWVCXizUzXZCH7weZSn1gZM4QgBSBb2x8ttjvKhv11YpUdU6RbqQsHeaopG4FTNa2uJqQvzBoZ8p6mjDpKYKMh",
  "key27": "3fsM8WfSHnEWVXSRRC3zBEee5DG7wh2itYG1UdSMRcqGwzgzZB8AiKK65ghgEAz1y1fXQzW3r1MMHMqwn21i4wy9",
  "key28": "3DQWrZ4bjSTRcLvGwVeaM6rpjcMG4QNJvSmVeVfdb9hw2CGvqTwKkVcECR6gVyXrdF61tNzczvoLEKrZzyjPiAPG",
  "key29": "yeWkAJu2wFhDCCav9viLUUCVPCbawDSaFWYYtLMAvZ78a5swrUDNs4ZthHbhfEyWwQ1i4ZvNwHeJiyeaKGsFVJi",
  "key30": "4cntiYBN1vg9wQys5f63Vk8LS1YgCtVRPzHdfbAvo3rxYVYQtcaq8xihwZ2UmTKDmab4wwA4hCoGxYZDeC1mZXi1",
  "key31": "5VcuoWN44NqEo4cg1bpJCSQJJ75rkMuZTwH4nzLpDxqRFhnU43Ku6KExHt9LQ9npHVFH578hcHeFT4HU4jpE5UZC",
  "key32": "65sST2ncNSxrsN3DbqPA7stScM2WsrpVq6nrgVeayfEf8mKX9GTzKrrLmA5m2AGZy5LUrvShhjDwozyQiiovPdou",
  "key33": "5AnaKKUsBRCfJigF4truURrrSeDmJtiJACfLajw1iCWkrNfti2y15cWEoKpmnGNTYKKPm2Wtf2CiG2j6BkotYRfp",
  "key34": "59v5xLVLwQAEVxnR3jLCE1jdxm1FCeTYu6Qqb2y2RUUDF7ztZU1VaxenSwEAHJjFHLsSBMZZfPYqZfVmX9g25zxj",
  "key35": "PKXPWHJAQvRmN4kc2XvoyRgUjcD3o96jdMDggEFBWVALMP1b4kZEi6dHfEj3LkWHxGsAGESx8D2iUSruokAuhie",
  "key36": "5ZFd6EPLnVP12k3e4hbTyPywTqkqZFDGERvjkTrUGUgCsk7YXnZrMbNfsag8C4gzF6PjLucuLZLHr652AR1ePr8L",
  "key37": "6zeg33JuZ4r8waKtxGEyEov9RobzaTRrqxGBbsgspHNnUd5EzVVHQDzUNyfX1LXY2u5fSu8xp5xRSc8sFQWhdut",
  "key38": "fuUSWfEXQpMzEqjCPy8K5kg8UaZhjYm6S585kyqvP6KqGNdogVaNhXQmDceyq6E4N6dtPH8DGD6vnPBDLCgpmcC",
  "key39": "59xRKGKb9J36kfFt7QSXHUeCbUxNcrujtVh6vaZCsTyvhJYvGFD2HjhckTLBs7Tsp8f8geYjDhJgjeoE5n9DjmEz",
  "key40": "3gBCvogyjCzzrBE4bRoh1reW99HwdVxoYdmMWfqkt5CysJg6ffprsiDUZ2RMbhXcUbzy3V7gf7Lzq1VXus6GHzvs",
  "key41": "2pYsiZk8LkJkSEJmH1sjt3i4m6GUReV95btZ45Pg71EUwQpdkTuSwS5tZJd35T9sHVT4L7JP5hnjtWgogjGwbmPy",
  "key42": "5nKPipffCmxuiosNH6AUbVvN17Bk6vD8T81DKgFY1MBbKtUodGfKTPmtzeKynphpFuPqwrCiGs7qYSmPuD3B8s4N",
  "key43": "65g4JzSxdeWsuDagmcDyhsivSASAR8nKBnN2GJnKZjH7NXF3CmvTVVDaq5HYBFMryG2XyjWt47WZKXfjoirndBiD",
  "key44": "2BPY7mGDRpTb2GDJKM11GG3KUNqoezb5GZYJUA9nVd6Wf9WJH7hreEamQWa5GHwqmonP2diTsofdeiJou4bpzYsQ",
  "key45": "3no3bdvGW8BtpCSJDHan5vtrF5iyemDx9hj9Gx66JtZgjcnHEMSUTopVUGoPCWnec7d3UX8aEHa5KGhxSRpn3Xhu",
  "key46": "3xRm9gU9MWVPHcDCrpPUPtPS8gw37jcYx8aoxtzSyU3d2NmHnKr8hdKHro1oT9LBGtkPU9G12KPakkfhx8m3N6Qy",
  "key47": "2fK99JJw2M1Yv5L1pDJGinAT8yLaAp6rBp2gUoBH7rn3WcbDa2pvRrhQuoweRbhDL2fcBkAKixQZMxN87nAwCib",
  "key48": "Q2w2YJehfD6C6qoDCMxGw9RFjwhaCy6CKGxQnAUTbZYrPzsph6dRUu54XMd4vsVVJW26oGd9eHP7QoU69QYUMPo",
  "key49": "6JGAKxWhSX6JkWreCoLJn4R5kLQNCaYBTc3Qzyy1tPoL4dAH6ieH82hicddL6Wosgdr32LiHtAh4fA9nJFoZFRk"
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
