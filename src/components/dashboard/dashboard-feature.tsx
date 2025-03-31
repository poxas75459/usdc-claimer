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
    "4hkRstQeRFRFaF9ufrcQDk1YkEy5qanLZLxQeRAWaQnJHZAVbQiibGRoYH4zRQuvuDyGWQWSWi5Tyh5U9YA3sw1K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qn7MR11xRx1fvsbt6b8Tu64pSUymSSDMwFB3mfGsVZJka5hsARCB2s4BNdGskNSembuD6c6qPoVGKRMMWC8DcRa",
  "key1": "8jD3qmkEpUm4uq8t2sSDzYg6QYrKLQ1J15ZUJCykvyAXpuqUVkiiK1JuyGeshVXLnXYiCAdikFAsDKmk9SjSpd6",
  "key2": "5f7YkcHqSFufSdHMLtfJPkyhisoHhSXTeecDeVvWzbnpwGaHh4RF792QQ1eWJgZ56ZDoEJUzBnK9pSjNaScsFdS9",
  "key3": "54XhTmpMepjYBmFG8ofwM82c5JYZzWpbcuCah3h3ZwXCqF4V51ZayJXSdNWGVbA1sEevtDayC6GmP322tkQeB2wJ",
  "key4": "66893VJ8r6XYYJPqLF2o34TdLoPgU7dxaiQWcD9CYtdWUTS1QsrzstnUk8rg1W4ViLC3Zy6AT762DSeFqg5PjDzC",
  "key5": "4VgSJbGqUrzNEjfG7ZMDBVFv14yUo6RNMbLSimheG2Bbkt6rVj3Gbqi2EsRdxaDoCkbPNhm8hwbCJWhwxzGDjHqA",
  "key6": "4XHbExotvZyHg2FbkT58DQur5ADftTZGs6B79NoJUdqrqM6xJbL1qWofAbHTQ2AQJALRqvt1XcyLiF5CLSwkcWBb",
  "key7": "67XCzCCmEcyiBt5p5G6D5ajucUn1MSMeaf1FoxUefcH4a1Qpp8ycWbNhpWDwgqijiN64qpTRMPMBaQ4rs6DQHfqc",
  "key8": "2R4tgJ8feYd5AjhMLTo2pmonupzSLuxesjiyF4vo4g5r3dMWYhift7Xd2pjN4DqP2QE3NQC6ws6pcPU9B9Gu1vJm",
  "key9": "2DmXEmWke75djRtgW2323dKkqJkFn1B8sHdqviH8j3rpQfQ8YRAd7AuGs7FHzz6pP7wXu5eD1N9QbQeNkoxVRUQV",
  "key10": "4wnfYfk7DSCHBhaxiPydvx4A6uDMjd6yxNsYTf78xuzXXhFrJL9kbwjF1zG5e9ygdT2XmzQEdruFVF4dhJTR2Td5",
  "key11": "3NoP1Wyd5EbisPDeYCGCzoLCxjmgftyXKCaZQYe1AmdeFSA41FhHVccfpDLfqZGMEhRBzeWek8DTU4EwSeFEA255",
  "key12": "61AMnRx5H4vux1dqDmTGeoiRm1vYjP3eNFrqQyJaf615p9FXbZ77JEGUorjLaD3ALUMvCFY61zdHdks2BUS4pDfY",
  "key13": "3zFJzZkTDLMoS9nPSUHvqAxU1keo1KGJezykQyZih52vkUZknLNWUugEiV5R8SNh391RcqUj7Z2WeJxne2ptUZKL",
  "key14": "GkJBr7kktTA6oFXwBgLg4yziMgM3KxqN1Vvke1AA7m7fXf1jNbYCP36VPWySbN8sgYpgCn9483sCR98tGrf2qdW",
  "key15": "4GNFpDMbBJV961EA1RtSfcxE2Sv3d9Xq6Wdh4YJazMFEwg1sgJLAAWXRXtVR4bkmbrznuZ2jtJ1ZbAGj1ABH2sFe",
  "key16": "4Aga9nAZJRhx7RmG92hKE7en1nYXrXBrhG4iz9h8rtspenAaAWCZbKh9ob8E8QskS5Eh5HZeWQSAVUPrwk5rapCi",
  "key17": "B5mANTuPdzgcTxYuAebRb4fvyE6oFWCzmhBifqp7eyGayREwhx7hgtQqLSDM8oTrNQLDtca9LNrSbQA6TxMTroJ",
  "key18": "3XrbWXivyx7rNjFrgjehypWE2Ys439BC3b7vm9VTLQt1RNz6NcCVRAjUqXKCPK5kEcEvd4WB1WmsNiPqzMBvfBLW",
  "key19": "4Tn2NSbiEHiZQkezgZEXoaBGmE2yiSPD2QLezkqrxevamc6i7F4yAkF6Q78EL8FujEgZdZhAGmNVqqsnLGzsQboK",
  "key20": "4DpCqi2oNujaFRsbBHxrCWRA72Wko6AuzjqVH9n8djMc2NpqYedNuLQkArC4KQi6YawU6vPNawZkr3LMQTeEP8qw",
  "key21": "3PZHVbNFWBsg8uVvd73ha4T6epeiL265p43neSWdPZqq15guabAtM2C3rHV1aELAbxL6RNd82X3gH8sG6qvuwqxo",
  "key22": "4nrHPAoUTBUMXfBCby6oCwrF1GmyeLj6mbwZFDwxE6MeX453ipUuwWWxUKucB6yeDpEzhhrrfxB1zVcVRq2dSGiR",
  "key23": "3ZfQ2iwDDH4uoXGzxop1oXGNebxchMA3Qrnw2xQ2m91qDMHRtBg1ZAyAWj7HLWzTFUfKhpYayJyJt5q4EUHbxZik",
  "key24": "5EDeN6TfwSyVputXB4Fvv47SaeBAgPnbyQthtwedyJGe1qjxKhDzbuEGTPtVBYNHtpnhK6AVhWxG5pHUWBrNVYnY",
  "key25": "2AsaGpFTEg8bxCadjsQLMdrvL8x6MN5qH8Ybtts7RunuEufkcPCFRkjgRtLSG6UL8Co7emnt2vVGB3wkRX4RCa1v",
  "key26": "3UBqRFTyEego65Yj77s6CkRPpL12RiszY9uFondRhXn6vHwUmDo8Qcm7RzRVHTZaUbAYa8rA5LrXL5YnWaaAnpHK",
  "key27": "52KiFp6CMHpxXhp8Dt5FmAAvut8v7eGuq8S672GjN6TP1BJ3hP2C7r2nBonw27S6wpsxukcVFhB5zje59jr1BwFy",
  "key28": "23UzcHPhAmq7AieQktsmqdhMbhg1uHvWAqTwWy2gs3o1R9Mta7dqPMijzMAeek6VbZKfzpU1KQVBuTCLFBGN4fbf",
  "key29": "tsWamkEXANTmPRau83RjoaY1MwKgSbYSCQZLY6pXdRuGjaaqQp79nMTmaNohRxFRWeXYV6yQdrtPjvu8RuBLDPa",
  "key30": "5FPp3J9vQAbBQgZGH2Z9h3xmEbcU3AQXGRABCsbUTzvHDm6MgumX4asFSUfgDXV135BMwHKQR28kNZKQx1dQKic3",
  "key31": "3LhGE32k55YrSENYBgbv1ykAsbMR5eEA1YL9j6po6rCF1mqraDBo2nzucqWySGicjekrSsKLjt3RWPQcUkFE5eYB",
  "key32": "JBH3uY2P32Xp9THENpAt3EE5pTn3aPoKMZ5C6sVJLwRtgofee6G8hFWe6EYRaqBEbPzMEdv784mv6iP24fzvpn5",
  "key33": "2ALiffjymtG3mk3iwBW1SYUYNBca2ZGjXoekZVvToZtj4i2NxWoB6ZBNQUDcDXR3B7RSZe9fNFabeeJP55ZtDkGL",
  "key34": "23HEDzjcVkBX6krBWnRzYgAdZ6n4uW1Xq3cnt6DqzVH8cxURWWhAqBCtUCCZarKR8xSCBna3eiQBbvLv4vGXuiq5",
  "key35": "4apSBzpkPk7m4U7TnyvQphpaxpMteoyNfDucfnTUjq9SFb3pL7Yz6yFrdb9RiUH57nDU5k2E3KNLDZyZysx1924T",
  "key36": "4Hyxk18NqLqBQ2k2xuhJ1dwACvT7GGg7EBHWPqTSN5TE9prphVCbqMHAHkRdNkVtqKpRoGaK3jfpjUFCqiXfJfMP",
  "key37": "7JCxZDpXuouzrYKSTm8N2S9ojwhzGN1fxsLjWJ5CZHWLvhpg9JqMEzqMArjKSkxuLowa8e1CKaYLi37rWwQFhkb",
  "key38": "y28ZpWQoCrayBczercAtUPZSCuKn1VRgqGkuYRPkAmZQ7ijAkzf4X6upQQtpbm5s887Xtch7H41hbmS5NEMw5Ee",
  "key39": "4pkkmn4Wji7gZ97dAgPC3kjsRbNewtsBgUStJrWUnGj15dMra4ZtMcDT9B2F3E6wYRuLq92bU232JtFVb7y4CQ5S",
  "key40": "pJABaLa5bqtRcHeoF98cLxhjQqzDka8ZD1Vi4d1uQFre3Vb9v56Z6cBKrHLQbPpMT7Epz7X2fpybB7sYzsLPbBD",
  "key41": "eWfNhKLnHfEaggnmbycv5ujygfxT2LM7X4RhwcQeqF2zWTCc9xNoCNmGqk9hx3EJu94bgNmpScYXxSWzUmm1WoP",
  "key42": "3AkaQT2kq8zXxuytxFNYQgzxq2Q181sgj1ynbSCeZBoucZ8pQWjPi3495of1zN1ak8ZB8R6XZuCZGQ7MmoXgi1EP"
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
