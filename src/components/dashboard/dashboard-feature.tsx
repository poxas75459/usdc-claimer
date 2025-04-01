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
    "2K9BKwVyrcynTzvC3dDk3UsvfgYE4k99QDdrFKnx33HFLu2TqzRdmdWpmvgKQ8WffSibvUNNyZpTVVtmS66DwUCx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aNcMKn1ERzANgW3T8nYm9D29a3yjQwHdwsq4dJh9Tv8GTxvnVW9GnMmYCLKUruCVRs4DFZzyvceHzZAVvy78pSt",
  "key1": "HHr4uWpWTGKPTBXFC9hvRekHDRjWoxsX5n254WqhuQKJbYaMkKn1FEzECUB9LwGnjuX1GHQB7QWiZMDCceBz7GA",
  "key2": "2SqZze7LmGd8UDnNmF7L6EPpYtrwqzKSL1Vh9XZLwGHcN3V6ksyM6fXfJ7WfCivQ5B51frstPhkbhNMJF4MrxcYR",
  "key3": "2tuuUKW8YuYq4k3d71r8m4fUsVoF1B9VRwNtp2PUHYRbkypzGVE3BbQN7wo5nsb2P8b2osFsJES5wE54noHn1eQF",
  "key4": "31ThwXPNVjooAz7RnJVujkmPfEahtXXQe6mTNxveDorW8LnKVWRQfmE8NxGRPH23oSrbHxwbxqqYUEPSb8m2ChQA",
  "key5": "3Bzp1fQkoZKSqbq4Mh3ri5WabifoSpye5EfYX7mLZFuD5zMAcMotbRpYm8bpsZPRjXovJ3j9RUi7ExCWTefgs4nQ",
  "key6": "2bnSz4x7afdyTRC8h3zvk5LtURpGU6tUeBv9aEWtkURCJx3UqcD6o9HL1TFGHfR4MPcYZk5U39cJi5TZbyPmnTsf",
  "key7": "4nfArKjXHojRvpBCVBLkss4DpktkykPcbDMJNmhHZ7FjyM8tuGdv65rieqtMwPWyidiy6q8chqGirTHwaNkPSFXs",
  "key8": "3DsegJcsXdNyHV1gnnd6Z7qtC2bHGnn6SUzcq8CJfxWBzat22L3tYSSaBtbc4zx6q4QsNivGMmcqH94L6iVn6i9J",
  "key9": "2cBUhsD1W5FwEbLeTKbTDAXmNbmSBKyNi8QETXmPAPUXTDjcB7uchETt6BpEJaohajNB7H4UA6hGPeYVznE3EggD",
  "key10": "2N1XCnB7sAGEQ4xKes9d8jhGKjxH2RSzCaGQoDrJQTbLbipWTRPth5LbbK496RZbMsT2zVh5J1LaesYKieXTfTWc",
  "key11": "4LfUppLnz7FRT6iBRWVLHqboRaJDpoQpkqWTmQSD4wSvxog1pPTo4R5CvT6sXANR3gmqhFaUxdGHqKhe2CcJkWnJ",
  "key12": "57NoENShuAbszyatpySnjKET2kVfECHfKUxE2sQNsYk8gmQSLwAEASQrcnSn29eLJjNm5CYcWXASAKhvbFL4s6Dt",
  "key13": "5cMUpfbQCupx4gHVapzH9ys9bHTw659TaNXUCJKXfUDMBM5Do2UCUyfBrCC8ptH3UoAkucr3kQ9UUz8PdEPSbMc8",
  "key14": "KgcGvQ64ENnopbsqhW5bzJHGrjaaj9NgcbJdTfnV9deiupDTDrBCPSJ7DZDmZ3zkdUE3UCzEdxQ6ZktcTUTWbwP",
  "key15": "4rWmVaNdFc9uVZL6Pg14Dx6pVhEPQDQsnDLG1STjvX9vT6sean2LMjRiE9FUkHNA6SMadWo6y5c6HUY88wgSYNJp",
  "key16": "3ymHCQw1nsGA2PrbiA8yEjoP7PwYZrrCiDucQrXoqAFTHFx1T5dBWoGb5TbvG58rxN4M7EChTa8FuzFNPeuES9z7",
  "key17": "67iWT1fYs24zKXo7fGLeuLHHp6opoJCekARLqsqFyvDemKGmTkq61zhbxjsuHK6MshxEdxBTTN7NgVZz7cRNzXo",
  "key18": "3E74hr4SPhzSSSzpZCYaNGddKb3pnD3YVY1g9Mc8s1LXaRG4Qkq1WTUcvgcnLn8hSdMr1ingHFgFRpLrzfauePPs",
  "key19": "4777FU5C93shg7VtCHDkrEoXfJhziDAUTJzKGqja12imRFdzpU87dqPzDqPb3sLPCFfaHi6fc5gjmZEcdoZYiheS",
  "key20": "3Y8E7XLtYxRqV86okx9NvKDqp8bmYcPXYquiyNX4oTBSxoZWsDRhjjxtauZym47T49CyKJVV9amQmAHFymtc3Nze",
  "key21": "5wnDEyNC6hXmLind4dM3shTAW2QV6yntitnPBLPn9zuQU61tUaP7y6JgVyqk5dEGwTD9TPuZTANSmtWD3jiBRgUi",
  "key22": "4W4pyJmETmVvqJbZ76VaDbsXM8TAnzrLzH9JzD1JQtpLBHLVipNXB1jbmzA1vEW5yeMLWUmNb7wQL4AzrAb5XBCt",
  "key23": "2z1D2iA8BDm8qHSw2qMXoYrbKUaFaauJbtGLo2ooY7NnRezTiJ7fgjoNjL981fwqZbxTeE4a5ieuPGUzL6ZdX3c3",
  "key24": "FyvsymG5R6dzzBdvKLFkigukyvoof2qvzvB89setAtUFh2ypnbQT57ri9GyZA1CfH4iYemqCuiJe38R93aeMZh4",
  "key25": "5hfLoCmWSqEMVXxBSjErVBrMiAwBU4xfSDqPwUx6QAvMbK4ZCBv2hLdsWq1jaTrj1HzEKKYGgVNFe3D3i5CkJ66t",
  "key26": "34QV59i5mKKQEmGeW3yw4LK8PBrKC2G5KN4nmQGNkMGkmqxhp8ZNXTYYupDAAALYkTu69moQfjQd416ZyNNKkvgk",
  "key27": "ppWNWPsPdDtpCJ6asnD5sMgWANsCTWCE6d9kLNdJnGXMhpiV1mYQJirGmJYyaXoui3DhmtQcoY5KBLPeECfEa8T",
  "key28": "5sXG2vNcHkW1s7zYkRtSGry4Ts9nykZZWJu6HxX6pHRmqkLxDBmRS1Ub38b7ktM6vUxBeMDAhPeWuYbp1Dhx9btA",
  "key29": "5Sq7EgLy791UHQo7wFX3opW6rxhqsvSYJS3Cu5LP7PXmMPvyLWug4M5ezt12msV2huNFr7tGugGmEtP78FccQ8a6",
  "key30": "2xoDPrkdz6LmuFbHSTZj6z2EYXMNAf58MWhsvn7SVepWJbGokBLTrxr9Qwt9oVD7JsE1zt3TPivU6zKPXYpDBQag",
  "key31": "28dZbZg1WPPGoSA3wYxRh22szQrjfFQhM1RJ4VTEk8xSbaYwZ5y4cYvBNbZTychtr24ShboHPRv7Ki4PH1QLMNY2"
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
