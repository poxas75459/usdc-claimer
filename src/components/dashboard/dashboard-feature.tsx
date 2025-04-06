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
    "2iqE4rUdWfGDZbiQpvRZwSJFV6uj44vhDin8ZnAcoihQZNDckVh7t1TEnfjcjM41Rcv9v4pczoeA5P8TMgkM2zrh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ddxowHCzggz3xhQXXkFXUimHoF4Rwz4HvDioGe8EwpDSP458tUJfGe8eiEwM2JCCzGvwU7jBvtYd64cPSz3AwN",
  "key1": "2RLEJ815umejn7nnCCYhavXgf1GNcik3ULHzTwTSSZJHKiZTXYfwegSuTD5kawiNQWkWe98AwBu4mktrjwzHEWm8",
  "key2": "92oiLuKJQUeYVSq1pyBq4VqfGL3ABMj2zDExLzyFaujFsSGfRdmo2X7gCEzaKdb41N7EeAzh7NVGeeLWwZtGwyq",
  "key3": "2XjZx1hePnsK9w4ndxCKhAxE9AqcVNvmvypzdmKhntz56Z4Chq2A96fLezKhaV4tFmjQF8sPH9S1wGCNkzSUh652",
  "key4": "EKD3qWd42kZugRBS3yxnBAGEjuCf3zmf7z9Zc6gMUfYpPGQCzCvDv4L2tfinLJ9AzsyHB5RJgWyd9F3b5z6MAQU",
  "key5": "5eGq6wVFLJimK1hmi5uVzz71tfTktpvcRjbipLbsVjymPpFbZoDCn9eziF9n32SBnPvUzhvCYopkbzPGwFaispH5",
  "key6": "2vstgznSceTYRMoTtNdKAUQNrQYSfCDoXGN116NDtai8JMfsdx7bWzX8k11hTCdmMzrESptdWS7A6Mxw6c9aUYBG",
  "key7": "2ML4ExWkyJ3Fw8kXJNXfnGxhfb9hFnEJPiFE5JmSHcHV7Qog8EdstnMJxukXvmbrevzYuaUDUcmYvMLtagSrStCH",
  "key8": "5GmW5AbNUAhMZs56uhRx3KamLgXQ9PKcdhBtSJQ3jE91MBSkQrd95YMBdotEvnZXdxv3YWU4CmEm8mDCNKzrSU86",
  "key9": "2VdVF5xKa16CeHsdR2AHwdEyaeya7foJUk4vuajjWjX9xKahQx3UrXYcNAkqtsPS6CP2wykUpiJ5zJLmbZr7bdKX",
  "key10": "PtZUPZogcFGvueBMwL8zQEstL1NaGcsY8xars4LgoHE31Rb1asz5bohFvgUmcVFUUdk4bzDiJUbJEHAdmDLpkMT",
  "key11": "sgdrEEVtQDUfAPWbCeTAWAZSDzf1mtzq51FyjNHvsTSYj8Hv2o2PCUd6mwmD6VMneESdV86WwhDivn6cary5Ah7",
  "key12": "29riF4Epf4qP6dtDsNeZqtLoYxZxT1cRd9sr6c3uamXLGmBMkAsoR6hJ8LBeL1m4HTzbjDPiCK2bnwgKeuxbGuRY",
  "key13": "3tYvNUwWiYA9J17cqLsSkhqUqs19StGSHZoDi35tJKXKFUDKDWC2vSbZDMVEVVM7uyoTTBYjY9BF3gstCupkqd2P",
  "key14": "5EvFx9hM9dcpNLZw7c8Dn4ci7E8PNHvcDYFw3iBGFf6SxeFjiPbhpiyuu4nnEbYP8H2Ai4f2va59r4t9GJzaKAJS",
  "key15": "4sqv1xuRbyUvX277f93awxEMMofdjS99nusSoyfrRz6GwVUJXVKciwQPiyqgosbN5QWT7dynSb6ukXP1npYdea8R",
  "key16": "4Rpuut8P9zQJqmKNkZSBvwhQPwrd2T4psJVXKiamKArsTdKhgSFV2XxKUvxHGvxRqYAgtkG7ZjasFxY1V4yjvaYq",
  "key17": "4j9gF5yTgmM27maKAzynzKErMUWSjEVDy7CUFRsAhAXjdnGn9dJZojnJdDz9e3AG7HC64xY45wuumG5CEauHdwNi",
  "key18": "5yEEFYnNEUMEpfXi9KzTpjqEiwyHZNnpd14cnwJ8dp2sPjrrMdzUZ9M4TW6EhHmjSsA7nr9o7ArU1NLpSFqWJXb5",
  "key19": "2sxhxtcp8K421Uhm4SULSZxgUmkEQJdtBUiUgEMc83A7ZmgrgeFKzsk6Q5mBhdejn42Yuo8jXJuaVp2qFvRjVQ35",
  "key20": "5ffjyqYV1qTEtcwhLXv7Rh6zhrjL118tq84Ah18uzxVFyuATavjMiCYQ5YtVbJYqXz6vmKkWVTpLJd9utyieUNEv",
  "key21": "28nAa32BQApbeKEdv7JoMGhyKEVYkXcu8eVR2R35xpGNmQBetXHSzxjKEyuEVDXQVxuK4L6WDpQeKNwCs9RmM3xA",
  "key22": "5Ha6kWgavdRwAgt4DPwR6uP8e6dmBg3RE6CnagKiKyLe4HrZUuVvSBZ4voECqXTwkxEqU2UYHY2ZASvLumAXLEt8",
  "key23": "5QqWfhkY7YBnkVVBHxuw4p5LK8UQcFWXBZvn689LDyK1iC1JjqhK8yY2v1BKvEMf7AmdLSmTvxZrUhjBNLHW9yjo",
  "key24": "2GjmSeT5hmaCd3xyDzi4FH7cpSovkLPwoLtz3Ndk2hNroawyfUnjEZJDJmbQy2E6NUY46RDM5QAJNqvhvKzGLRUt",
  "key25": "4qKbMaQAk7JJSuDMoq6ZoQPreeJkhNNsoKmfvMk14oypyrn5mVsBZ5tmPxSvz6juBk2dzSbTMhLS9mMQRK2cPVjT",
  "key26": "LghQ2M1LusKDnLN9317SizPQSeik2EccPhBYWk129o9sfJckZJP8MGyRnh91917QQfNrhiuE84VVbYirN6TWhQE",
  "key27": "4EG3RUqGQ34MavwDCAGnZihysFqPABFoiBNK6oQ8BXP2B3KsNoUmVjPXpjUotjLNiaqxHj7Kt3xJVaxvHzaCKbT7"
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
