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
    "2XT4Mj2i9ceCQU3jHFRfiykkGGbeYw1mCb8CuoAHzBAu1nXDMbY9YSLqbkPvzcsdyCknMiyWFYPGVkZ89tHPEnGM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43sh76nyT7PVqtgFXpqgSQ8T2uuyusmt37PPh7qCH2Js8bTY91XvVsRS98j4os8expzrefPPdZcq7KQnMkbeNuoC",
  "key1": "7LYvzupvCZSXg2QVvdez6zBkeKX2D1dmLuMUv7EDo4p269LxDThRSLhYDESH8VA4QEJWweeA3orYZfAJXrECc3C",
  "key2": "3Qi6Szhi322wJ1kScHLgGMjahr4tDytPE9uiPDQXzyyyv2VFsU4Hw7yYVd3dGoLu33BYEammTTT4smPHPE7erDSK",
  "key3": "CsoQDkAGY6h72cbsxVCmKhscXvw4TmauJoUEktWfHb51mPTA2kwaMYt2AkZZyRXPuC4v4oy7ssDUakmJXjLpC6G",
  "key4": "4yJftBw92rS4kQjrihzKsWkpJ2fJyGVHmy3C4pWaSS45Hdu21jUc58RFHt7YTFHTkLZX9bdgV4gsPVuxUFa7DiJJ",
  "key5": "5QZm2s1APrLqqGxTqmHPrd8QaKAA9QdsMmtErcs4B8NDELBeFNKsZ2RTQ8gjS1En9M5yHNHvSGMjRidiDrBs73et",
  "key6": "5bwy1jREHrte4VSDfFotMXRHyZbBCtZWiRTkFrKX5rmid1bqpvLEHZBEyCZgkBVjX44HJP8JLJLcVUGHTvaT87rv",
  "key7": "5DM5uSYajSiUaHrxKWcBhMdFRs3DaiUPh5y3fDaCutiEkzjhGbs4RfCNDnf9LhyoW1iq1XG7PQ4VT7wVn4zjw413",
  "key8": "2KyrRLaUwwmDuvELxtXHU5Efiukik9ghQViW93XQPwshRmrQWRF27qSwEmeJKuHnQsuxTPzBwA6uKHtv6Letxmz3",
  "key9": "AD7YNsyBVwMMu8cA4qxdgJrKrWrxTBGogPpMKNYCSMdAzmypofnBNWzQchoyrjjx97zN3RXDk9XQwHpgoYxugtF",
  "key10": "2drvA845NPPAMPPNPfHBK7NLM6N2E7kMLND4JzfXpWTR6crQuQ6KzqAkK52RknzHSJpvG5vZeaBwNGSwayX4SSS4",
  "key11": "2nHoNpFLtEfV5zNFVQCRh3QF1z8NchzqjfKAatZZiQPGZKPwPfYWtXdksuXDUUfwPY1cxR7a1c7GrgJcQr76nY9V",
  "key12": "5HJhN6onEPeyygShBmzzEuAEaXpKDmToaCHZaZDyDqLJFUsHNc6GWuMLL7gHwTrmXrzedByYYNx7S9UzbKQZ6U8D",
  "key13": "2fQ8BHkgwCRCZqTjVMc4yDH6ReYP296qRJYzkcNGjYBRkmv3HykrdNCVMZwMVr2ZTVfgcePtoNBuzD4NefwZMPZA",
  "key14": "cZexkjgrCNRsjazCbpLzSc7feVfzqvbRscbbC4JV8cePA5P52uWuc5HydfAm3FBWJiAPvzWmEmpqQZoU4sFbHU1",
  "key15": "r9ovJzuTiXHe1Vcj9oCpU7niKsVsf5aW6bBHNUXg9wnRNt1VtLRiTDCbiza4FXgnWr2sqQcyNFL5rT5Qmt2Yu3N",
  "key16": "5KjnCdpFHJFWfG7i9WvMj5rCFm9CqSvD1gayosWepxDjGMgYfDPau1swSu6f65YYVw8sJceyGVFJwMDWMQWJuBGQ",
  "key17": "35caiGWfx1XXwkjTeRhukP2xZE5UR5iZXiW6jJkScHTjxmbx6PL91r3Xb4uPnSJEcbHezf63z6mkcaDJU8H8gT1K",
  "key18": "3owmmz7Gp1Vy1nBm1QL7EyPQGp4Lzg7fHSzAzF2eEqq7SrK8CQG94GKAQBhEqJEPsTj2uA2Xtnz8mScU6wod4Cwp",
  "key19": "3RzJmpp7uiXVCqACVVBGTpTWYtaHfq26ehG2Q6GsgLBCGBcLUi7mPhVxquTCnGxPGRenaiwq3dvHa4K2VLTbzRTF",
  "key20": "37cpkshLU8GM6QK36puc9ihho1SrZyiXgc1dfzfvGjbc16HnRqCYfh2c1HrTs4VYxeUBMvHvkLBx7f3HNKWY5GWG",
  "key21": "4rSG8oY9AN922T4mgPWPBsLtCdzRXVjUxXo5YGsrL6YzsTE9DRtPJHe2kU7HCTTDs8W9KeWJLMXAXU3NhG4uoDkH",
  "key22": "4sk4vdxmeNZHDTXcDK57pZo9C8Z1tTMH6zMtmgteeA5mcHac9MzxCQcpy9iHaazmTKzqq7YSCwS9cVVZiiWRi96S",
  "key23": "4HthRuqzagBCd1cFUCMDcvnJ5q3DPEmgvjE8k5s9ZoYorRYDd8cD5YdSRLuofLGkHNaycB3oXAsn6uSUBvGZVQME",
  "key24": "3mjT6ffgp3KhVphPcAVg5TCeWMLBzQfrHSHxvFHd8FJ9H7CnCibmCk9YAjqWqrTSoQmmoa5cGyHHvjvLqn3jvmk2"
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
