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
    "4jY3iFPqdDq29PgC2kWEdKWPcMjgkVaV933JZZDaPXv6hjwn4qcY31CaEtnuFE9VAmww9oaVKjg7KPPyyzpkSx7N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51Qn8ZjtjhQiWG3fPAc6AC8YKFfgLuQcTSJZ1TzuE8GXLVmAjZ656M3ywFJJBDX4RJqwvRg9ZHCtJD1cKzikxxHf",
  "key1": "ot8WSNM41fsP8xAJibinLCGyfx6rkF2xHXnsRCdazHMMVrz3RuFzRz6wdEAQY7VJVDm5aVnuZ5LxgaNuREQsecw",
  "key2": "4prPerZCU6QXTETiFzMEb4Uv6ANoUEcCRmPthDHaxfweTedvfK35yuBH2Lnvx75U3cZF7jFr5BQSghxX6vim4Dn9",
  "key3": "64yLdebNoUmCPhxLuymm5Ft4UTU24DGThFz9yh1MNPGCxhRSmMkmJBCetyAFYzTGoprPgw2az9gkXYBAS4MzSF8t",
  "key4": "2LJ9nqeHueAhVvXAEHA6ZviH2ES7gSkx96CWm9rTbjyCdezbQ9S9HveUy1uBKnymcYhrtAh9toyMRsvho1Gszia2",
  "key5": "2MZ7mEWT3pCTChqn9zvwcAKkBaHj2Ac7FJPUagoE19H8k18wviKj966B6EBNZeq5GRRNcYMU4ti9AgLCSFLi18Cz",
  "key6": "33GWMvhisoyRYnuGja9kG96hKFG8egxuUgNwZbXHaW2oiAKnNuurZ5TsDHBSqYzU4tGSCEkZk3ru9wGZ9LHFEszn",
  "key7": "3m1GV96Rm3DW35Lbx6vLtS5jRae4W5TSaC8wVWFoNvg5mXEAdb5Wc6uxdA1cPimYQK5FqQHGcqeu4wuYLyP3h3bF",
  "key8": "4ySMSZKF7uaD2TuowQbUricGKjTnAnQ2gLYHbJRWc8N1tps9g3bE4H62akD8LQ1j3gg8pW1wi5zk7krtD4KKAXXg",
  "key9": "4nhR3hnRedXAmVt4b37AAjVqcmegFwezFrQpKTJixNGhks71xvzME1mUMi2xAwF5qUR23Jhr1NH9ycTKvAmYFmk4",
  "key10": "3K7E3xzBNDGubG8FR41AfBmPb3CYnnoxiEqoES2Bd59KkgcKbuMogNMh7nTe7M5nWHbiym7nUUsc5F7CrV5WBztZ",
  "key11": "V2q1aWrRfxHFd2vQqneh5bqKdGJkFKRWDU9T7RoNrC26zZ6RqDAbTcQNWxyMdYTgL9G1B2GqeaF24rWL9AM6fBi",
  "key12": "3sDZKUJ3ePJqHxJjuN4XMLgqnSPSwyZSnGkKCcSE1WpWvPL4NVT92Eo7sKCa5kCyY5jXLqNYhLFoCWsmmN6yD5wJ",
  "key13": "Nwhapy9vZBf53qUJmZkNfpxet6evo4Wjh2dQ9fNPuYFZx7JtfQEJCgH4nG1p2QUkSDQs5uP9dTytbRz25TTgye2",
  "key14": "ThSuYSRVsH4PWQtz9UgN66R5bddsHybpVxedqV6mUu3YdBaQe3PtEuwckeDyzpCBMf3FbgCzMmdkGUDBTzXFEx2",
  "key15": "56GxjqktcG6DdsGQmkyrNysJGZpAipcRVEeqMnnKYquMFz5aKm3SH7ddwVdsPaJrAAXoZVWTbAKjU7qKygTNAhfU",
  "key16": "3zMfSwoyyddcGLFktRRvGmHQ5YekkiSK8sExTe9ytp9NKMo3r239WCE5eDwicMNCTkDVdxcbtCJUAbVHsx47uZMq",
  "key17": "67CxBvxwhZLik74Nez4PdnoKR19uHSbuzNRtpAWPXjiLxtzReiWou7HAVtA5SUx7XGwcFSwhu4sBryrBdWHQg6rJ",
  "key18": "3eAi5uuG24Qh3XNCyrYeteBU1Z42X8vRZzqB2aT7kFzzrwrkjySKyt2zEidekPHaNRuGrmJbUG8f1QBE8Y8sEccB",
  "key19": "4LWtYssovKVnTZvKja9f7hkwMQLQfgB9ZKQbS4iZrquy6FtXbKmXCRFupvPTxgwusA4gjUmS1AJfmAcMz3YoCqTj",
  "key20": "3WEG765mEa8uM68NCcmQAs81qo1HAdA8CdzMprbtRh7vawv8GiDtZV5MTpL7JUVwyBQBouq5zxxbRjf4VLTdTfLk",
  "key21": "i8SXEcQBtJS5fanGV7KTLNda23iSDkvFgEZiEbR5dUmCo8XYQ6EUdZzSJoXcQnJ19u9YsoyW3VDF1kQrSgfX5yA",
  "key22": "2a1Ld3Wso31GG3hL3fw8rTMe2pcTvqj1KLKafoAPa7YKYBSv4HNEZVNcCNwctArotrXcKdJ12Dmg6aHxBR9qEx9H",
  "key23": "3YVLaWWaVbMfFxaWzFRu6FqdGkkzwg3XkKKbnXS84wZifam34ySmyUr2rSW9L9mMcJFmiyKtzWs4W1Az8XknRnZj",
  "key24": "4YmRNFRf2pe4Wb2w3BPFasvuvbCjCAA5GjR7SbuwVXJbJxXNVPVpcMAx4iFFCdMJ8FY2ccnPzyMSGudz74pNKPgU",
  "key25": "4NEXXUapSUYzxsB4hmSxAwuvHre5TibsuZxdTv2tjXRJcteLP8dSFeyoEpumciN1dGmJQkTS4mhTaUdmnsHdvnKT",
  "key26": "2WNYKCnfBXhUZRHgUpu1jhU7JhvqpwQtduEHXmW4NExEKb6cT57JchKgXiZmokVyu5Vr2BDfLmisvp7nBuNyj797",
  "key27": "23pmhDTdjtWgn7oGwiB1oVy2rm9nySdvLRGcBeQtUT9ugtLp56RgzV8Ezrj4WYH1htnArmG7h9Rh326RsNuu1qBA",
  "key28": "2kYuKHYpUjEJtrurYcHELKfRuqeNtkSSK8gKFTwgHnNaVfrAdLYPxCA6mBQdhgw2EjUa6bmruRoBnrPNM3T3523J",
  "key29": "g96N4JFY3ANS6d4CSoeeLev2TosgMFJ5KezeDTMtAR9m75irD7XuuxLWAPt1uXJbpUwf1CLiLmRage6KwszTHVZ",
  "key30": "5BWRbvpxxRACz6nYtp2Z6mwLySH9sB4Th4tL94PZehfq8Y5ZVxvzBafPCpyxA3xufaijNQLrEyUcJ1QUVnn64uuf",
  "key31": "62T67B8VbAbfZViwkX1M5CREHJvbWxr7rVZDCPxrh1X2MdaNYNDWkkLt8Ru5yhgvQJAxbqAqyPFjnsbxQWJ5vEd6",
  "key32": "4KUrwozMFRQEKGYDVS3yS7TGAdekK4oVPs6ommMwm9qi6jrapq1EARoY1o78BNqXRjHzcAFfGwhjKdZJBMrumUPC",
  "key33": "5VMYzNS37AfPcdGagKtcgVTech8CixEy3rhvzRLbvAHd1pJEY4fHECuCpp5gACEvXK2MrqdQWpn8dSFpvS24QV9U",
  "key34": "34oHc4EcwSr1St4NEXw6qd2p1MGzsyCrrv9aYTPkCeusvjBv2zQrnMRn414hgxiso4mfP2wPW9nPoirL3C4XRLwY",
  "key35": "4YFsAeHe5tPiCDhHcDYSXehm6fZaVVxm5Mu7GWX4hbucfm4RR8TtJpSSCeGPdK9hCFbHoHNK4t5hNQghUE9vt2JG",
  "key36": "4swZZiUTpQXgnqFLVVE6yzGECGdEauo5Zvd1w7GkKcUWn4LdZvud7mejHVBpN6TpMcXwtU2K3Xr77XTNNm1kdbpQ"
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
