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
    "5RD3sHWAxmjJJqWTYav4p4dgcv9E3spUhN7jrUagKJCC75DnUEF93NLMSwCyNTd6yQ92bGPyLUtzJ3KRAaqsLXd8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KhevwNoEv8GiWxrVgDdKgouq85TMZUxyAtHf9L8jb1pYXwyo22DYY7xDvR1vHRg5Mb7z1idNeb8LA5xs4icHRaB",
  "key1": "3xNCeJigXBRPk3zeJVevSoGqrSX6qMwZh73ZEZKkrZ96Gnyi3SKixDnqbf6HHpWkeui3ytToemvAMt3TGr8YuMVN",
  "key2": "2wXqtx6susfNDh15B6BPCUsfBhN7hdNNgQ4hG9BqhYEouVSv6pg2WPvAnFgNUcEmDYMtL9dJCfk2n8nhz3FriYku",
  "key3": "5CVi8PJuJt9FPyiVqhfifREBS6ij8VywF1WfXbQ6SvhVFZfrsob3GVuPuonyycsegUZaJCUguBVtSHie2x1CfEZg",
  "key4": "5AF59UsnWiHSx1yffNczHTaupeEqGeuJTX6aqEJfLcFyrg1nW3RaxSbhmXj6Tunc8inF8H2YPeXvJiSY6cZGkSwv",
  "key5": "5CxE5rfEKa728LZ9NzSBpFirveZbrSczqJuBUjiqsm78it4Ppta5HnT8TAkEGtbZWLDCakNofkWXMrEH3rkhYkaa",
  "key6": "h6ZHE6HqHubdeeTU2NbC8rwTDbkeJTTDAzKqTvwK46qhTKxofdXVxerVRRbq1V1zXNNweeX2vptRHW52Pp4bYPu",
  "key7": "4mHnZRMmXpYoYXbKpFkQNkRwphk4zVzYs3Eoo2hM5BEQNTPPC8CkK1cLBoorCTpnweeYedvfen6pL4S5BqcVmyLy",
  "key8": "2wwQpTmic6naGQ4JRYi5m8WXVHPTjQB5y5SrrkNWxMTfW421YuJcSrM2vBVF2Q519v2Nnob2DFPVvJX4fSnt3nmN",
  "key9": "4Wf6PBUfNA5ifZerFHooiY5cGt4cS7dVyjM7q83ZeNSoUy5Z8yLzcHjmiMxmMSjTjbtBt3WLCXopmSZUTs7niFf6",
  "key10": "4cjCgvf1BNpDCiJTUQxwbx81FzcCS3WKCQzzxwdUvgSbAqVTTKHXRtrwXdHXmuSgBgeJsbHH7f4xMebZUB9d9SPL",
  "key11": "5oZ7KkLmnNyZPax7XxxK7mANBGT32aS78zjg6RXEBT9o6i2C1ehh3znrNvhZNTy9JaFsdpjwbEBfMMSznvia97q6",
  "key12": "2aUgqmcFvu3yYZKBkXKEaDfaiU9cTbTrCazKsBDCDYLhGFXBjQwBcwL1xNHKctnkbhXwRLyGsRxuHNybqnxujovL",
  "key13": "Erv6WFhj1wkyGg9cNBgsbrumvbZWJ1WJocZPazUu35cUdSXDeVapqrKPKeka66bkYCiRN95w4QmD2BdY5efebzt",
  "key14": "3ZhSaYts72PctbqSndyaNCk3Yfkr8wcoVb8sHRuonjPm6CNV1Y5qR2z3SBeFe3NfwQaKSek2QfobetQzA6YpUe8B",
  "key15": "4QGNAppXUaJwcEPUbzNVsu19ASXwpVfr2n3b9PvdYmH3wKJmbXfAbZWMdSZ1kUxnG42mJh2oWgs1Ut2VUzcJRR3y",
  "key16": "2H1gvD8xomGJDfo6KzCkDgvwbdEQiH7ieNX6NijStHTSDbhnCH7PB5bQTEXkbG4qLujuskJJ6HQfiULUdBQspjc5",
  "key17": "4jeL7dy4sc12kR4oFx32nCM1tMuo73y2oVbPN7GGtSA4kyx8Mv7T5gE3cytAMAD4suShQ5seEiL5QNojmTfKgxVs",
  "key18": "2yF1RAwGfvJWbh7B6tEAfGgu6ySfepcsMBsFQiYsA5o9naxjyuVBJraN2siXbAV4jmG5cEPtMr98NdtPaXp2P336",
  "key19": "4sehg8o52p1Aqp3RgYu6WWXejDuLfAQhvx6qRVGAJrpaoHvHQA1sGxTEQe73ZM4UGok8h5YUnQncdwptvn3Gk1S1",
  "key20": "2Pdb7meaXGwTFMA3sfWTRRw71S1Ud2n2J3pVRVYtQeVVtvQwGTydQabGPGe7o7JiAUXsjS3iYL19U4PPYiBjZmC",
  "key21": "4m5HsCKuQJGqEsCoSrVQX2X7Bz23T3t7fYEmz4V1JGpbEmWFf3NujT49FYj9tX2Yx4e7rrMh3ZWSdwAH4iNoEER5",
  "key22": "28u5tKCJ1DJM3qyrBGg8xA8sFFrQG1vgP3CuMHd78eha6SaT5qTftSVXCWoNSw9FfNue8ySox2jddyXLLGHbG56H",
  "key23": "4xv4pyzkKuSZwYpFEZUGV3JpNTXWt4tgxuiBPyPnfgsDQjdvzSKgPJUuE1oqyhjS4s8QtYzcKBEBg8JPJHBKmXrF",
  "key24": "5NxJy4Y69Jk8QiqV6AZXF19exZXmyZpH3UYYfWSCEghd2qcQaoENCKb7nZ4dopZ4itoxxZ3sWjZioy8bkb1MW9JT",
  "key25": "4Sz8MZx63APhVtRoCC5WPCtLUKYQ7WmWjXS8FWV7VC6Qw37aJFLjwaah7dd5jtwUfkNpUogr2HaYVjMT63o4qSQh",
  "key26": "5aEnHjDorhkTefLr2quoFmqnJKjSj1SkHuZARq5BckaBrwZtVhpnWawsWsk73UX1vkHoYzk4EHGTMDg13s9ZrpJY",
  "key27": "2C9DzkuygTsVeHoz9QEjaeLTWF3o41kkh2WKuvrfrrk2CxdpjogWPCCGcuyhj9eLS2dquDA7mHX2UnEnNAKuG1Kh",
  "key28": "3DmGQTJNoAE78i2EYEmdMC3As3kfuqnQvFhS72drty9McZwhacU2nYaUPjeSpCrVFHnEX6L9fUjhfzhZtX4z9b8N"
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
