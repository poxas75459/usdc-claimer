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
    "53fZS5H2B3GdVMJRfcvfCRzT1Tw7a2ADPvBM8yV4qwPvZ23Uu61pWyFCDBZMHHbvYg3i4j7QweK12cAZaxTDJoYH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "223rn7YfQe8TrNyogLT2opj3XYoTD2f7FQBqa42ToMvfrWdmP23xpSkmCrz3phybf821LNSGHvbj6DX2UgCP9G5z",
  "key1": "z1C2X18VDRHUiRzV8J19VPeL8AvSYtA7Zrjo39reHVcJ9qMGZFdm1AC2ALX21bDQb94hf7gTRZDeaV47Cj6kYEW",
  "key2": "5dUXUrASgSPcrbTA1WBYjPexKfmPmJKzHqkAG1i6ar7LcBfd2UNo4YjqeNNu412JtvNfT39aia49psw19bqKYon9",
  "key3": "2KSpTK3s17wikeUXU5n1MCgRNTrgTPgW3Fp9S1gyaN9ztb5ZgSdywVPyRnohPeGEeAnQEyZ8P3N9xqCGqrgWSgUG",
  "key4": "5b6RSAUdKp589hVABm26g5UtKKscFo2yqayQMqScxsb1NwQ3LeEu432crDfaEyH4UFk88SyJqwPN2qyX54bs7Wok",
  "key5": "24e6nG7MQ8PiW6xtadbgNxKdKVBz7mFQFptV4eXKyWdvTJ4YiUaP1sknWVyHW8mryBjsomC4HjFK432Z769PfEm8",
  "key6": "36VML1FKhEKB7bvcHM9QK5p1LvbM9dbeWHsyZc6x5i9DsM2MrgnvyrDPKe23yWQVWQiCzqWr8r3vCh3coKNXEs7",
  "key7": "65nVXH3TRGZFHmoRomN6VLNHanWKXchw2UH1UkQHxens2TB77kFMsv27iPPNHgHDRu1svhNLTgTFsCbxfypUXjAG",
  "key8": "3GHFYvsdcYv5gxLXxvqmo2hN3R6m3Zd6jBCTmJAoR7fWwMr6n3X24DXGYu1EL5GjEL2AyUurQuPH8BSjcuK6UiPX",
  "key9": "5Sqn8dsCdSEYeBbi6sMTNZudHAUNEjgmCRXAFs58RBBQULQWGrG3JtVvLvmgJuZkWxhVSmaRfvhDU4BPWLKtHaeh",
  "key10": "3TT7ExVub85wMFCATcvh3JUZi3yz9BgWn5f2XXzws8isSopS8ZN5ZB2xNB6XLWzqDGLyR6CfTtqRguSr9rKmuEth",
  "key11": "4w5uc1gRKyAbjw38PtArEAWxhYUtiisnAd3XVBZFLXJvoWFYLDMHfNtPzg5b6is6B4WtSyPJnrf9ydtp1iZq3Qs7",
  "key12": "5RdCVdqk8jPuXFNeFr8zEqnVaWSJJBK4MxH3Mgyzr6A3ENH9hNsSepYPQSE14hRSYcyQwE3yrULB2LYnk5qNbUpW",
  "key13": "rSerGTLbaaz3Kotpzk6iSqE2wtzxkfBjGPqW4za7rAPVLoopFp1SsBgV7cJxU5jEmwEfehmMAxK1cit5gskFpxV",
  "key14": "2mCTriMJSebWQejDgpLXJnKH9EMbrHsLTLV7pyLmEeDspwhynUPFLadfLf52vLTgCzmyuGtukptRR1sMgwiYEQXB",
  "key15": "5HjEad73MHWq4tiTQmDAHqu2gj56twe1hoX5aVFSpKkCrJ1gPdPwNz2UaJMzgZLDRjr1VBAFBhfoSddni9WAxX8x",
  "key16": "TwjjZkWwjiCUGzJf4Vt3dNQZ81TXvUqGrsiVV7ciGEMLY9TTdEmH8wVu79ZcRDsQvd3TLmjyPUrtUzEHLRS9fAs",
  "key17": "7UhNfBeL8ucYq88VkHwT5xnPj4QZpzeMLyDCWwGSNYa8BJ24Mk3NTxs8crk1LmJZpPeWaLBS8rmmsVUjBgqZQG3",
  "key18": "4qJAjH33Hv9zxiWAbncYTMhtJsUwUAJJ75Xak1aSq9BiVeBiQ6FNuHt4JnGohSXPD6zwcFyf3gaVKLfqcTEJpNKg",
  "key19": "4ykmCPUgeaezTEHUMp83mUMy9ncJtCfBitWqADNmE2eSZPNWyWAnY1P8AQBWNGRzNPsEeNUXu2RfzewWF4w53TfY",
  "key20": "XkiCKDiS7gxx6PNth8GTCgiG1j2rCustgnxJVEvStRowk94q8KKDghJLCKLqKG6T4D4hiWTCP5aSJQopLLwSk5D",
  "key21": "3x73wyQCUkyTeojFvzw5ZA4cEM2ts9CEefNBbMre6oy1QBziLPWxC8fipi7bG7xC5g1P1pn2DWDqq9qfSFVSee4c",
  "key22": "fMYadByGrzu285L6v19xvyngECrPix8gVjttxcdibWqs5pygFsHzDdWpBPygZmuxymmZWLiFnEvpnPSpG8UsCoi",
  "key23": "CMiSieugEK2rNZHWUBPvqKdz7fD3uZExt1wmXX6g5gwWcNj56C46HL2TgFPEETZ2sqBBC7S1Dgu7wEbxDaaKzv9",
  "key24": "29f5gRCHoUzeRacdpgYAQyr4HnBavsWmpcify4C3Rj6C8KddDJADJf56ttPqJP1qDqibjWTzGUE7sW4UkYMgb46h",
  "key25": "22TQDgh3vmkENjwcHYt5fQwxdYYGMKoa4ahuEusJe1FVvmHr4ux4rgSY295K13sBW1gXNZPYBvTP4Hj9MFxmDnGV",
  "key26": "4WHYre3n1Ke4iedfKir36ZZtCZTx4As3HUXuotRHMq6CMKsVD3s9JoNxudoGuhmQgxhgAL4b5VXGJ9UKt6PJc4oo"
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
