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
    "2T2EZWvuZkGvqhvCH12YnrvM7UEn7tgdGUyAs2qAsDLPmnMfzrBpwRSx2vD77a5rUp5tvwiQ9uYU1EyG6LdfT8sg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63npaqwNUtJrf7C3X6g7YJt43SZuHNXmvRWtwRTKyL6KQHU65NnovzWWm3p8fBt6sJXYeEVZnrFFYw9DNQtCV4vf",
  "key1": "4GPWdtw6ojWMScTG9D9QVDRbbSJ3d26M1egWHb97dVnQCEdgHni4sXUoazKX6VonoLfL6KZo916WApHqdh3pu8iV",
  "key2": "5ZtdT13KbVQkXAdut1PP7d5j4vETHbc1D8rxcNUp5LBfgmnnhZKvv5nbQaQmXUn1apzB6jNmSb46w3yxQ1TmyUFC",
  "key3": "fb9aPoDjFoa35pbwC6Kbx1PqLH9dFiRmPGX1vaeSBuEPByaiBHELhzcxcaRTFvKqGQ79eHv7FM2437yjrhTMcBS",
  "key4": "4vuG2mnXk15fax43DXktLzwMid2UboFT1UmmoTruQwxQKDwGJxP5h6CgYKXdSey5Yco6FRKVbEt5TzoKtohQSkcX",
  "key5": "4bmmSZy3tjUpfwTNtq49Dd9di5NvjeMqf3yuRQiYvM6fppiZpYLec7ZqW8MPtHJnFYZNx5pWkzrFp8N74sb5nitD",
  "key6": "2MQbCV2R2GDd1JP7GKFXoHay2xd1hAN2wUFfe3NFsgKupyH1cQEea6bYBLaYoiLpAY7bEbFzuhQorFUgLmNMGLbf",
  "key7": "pnWXwRptZzcPqrZXz5oSSrimmS5vjh6LaFJcvTdVG7Ain14EFixhfV6n8hRgX223gmSKkb5Wtmja8gqk8vBYY6D",
  "key8": "2DrRvwNAUgYnX9peKg3eo3HZdttqYoPcHphsp18FcEfphV7Uxqs9bCJTqJDz1y1xfb71hTRJphaoGZs6UFtWmuSJ",
  "key9": "cN1aaU5Sxhr7zXvXT7k1HeitzCoZCBwWrQ7upryC3iXLpMGTdQbyYVNTniqPkHrrULc3oC2zqC3ns5eaPqyCdtG",
  "key10": "2f3YHDPBhc9thqYEb9vgbnwKkrsysRjwXZF7fwjUSBh596LTW574Wm8RdBgE6yejFL3Bf23VAqhC9k4fX9uhwust",
  "key11": "2nLYUaATEEHYBdet1zGHYozJUC1VXDqrCW2My5FHAEhyERJriLDUFBo6tBBYa1wFa2sVr1Ko7RtqfFYoU23J8ZGo",
  "key12": "23Crvq14ko3ktTxpxWPMszQ3BDLgKFwm8b1c5h7pwRw7dBBAojMhTgP6BCVHTtF1vJnUkNxJM2eSZLwXueAdp2R6",
  "key13": "fPfGJSsbTwELD49v14BJjxpgo5djwQkffNkGxNhrLUiEYpVPXXTnr1cT4uzGFLy4XkPMH1Z1FDQXHLo8xzTTTDV",
  "key14": "47G7tygA1h6PZmhsfXeqHXU8Y1uuUm2bRFshhZXYHvitFthyHAFcxr7y9ZehzytazsgSMKgYEdbsi7EN7LM767Tw",
  "key15": "2JweFi1Lu9dvCfi5mhvehKWabsZxvfB7GJ8mUntJJReFwKjyJy14uWeGTh75isWm8gTe1V8ViZe6ruNYkt4KFfsa",
  "key16": "5VhrMf1xiiakL6NEYyw8U9RM7YiUFhAEq2GWVxoka3pLXWoeaunHH5w9zNGU1DGyJdvrQxegQCbvkyVxhRrye5cu",
  "key17": "4bEJcTcUuWBqKuDMAJ9oSF6SKw2pm7cZTbkWYBNpQ2R9ZUqsgS8z4ynCYAV4J4DV7CQvfRT4CtEXWzX9sEu3xKor",
  "key18": "2VoJrxmzZuWCZmCti5mx4u8RVU47CMp65qeepkoXuPHD53GYrfCHy88grkUVpUrrhQZ6iCdAKZnmBgJYgyhwnKeJ",
  "key19": "k1kXBnDLb1bWiSepeELgmvAujjDFEo17CWMF6US2GyjqoA4ogPBpP4rBy2bkYc359Ud2MsY1M6o7CW44xU8HAdp",
  "key20": "5f3UUUfVBxPkjVMxNo1VTEdnSfFwzjccfa9RbuJ3MBAr1WfHB2xfbiPz1kTSyzLFgpsf2Di6Pdzcwdp3gbf1vphq",
  "key21": "2FL1R3BytoxNfzVKSGZwj4eHEhpZ4ji8GsrNPDfRRZSN6hnmtXrjeyWnwmXSioG3rxa97FsJ39PNRAJTW8KgVAD1",
  "key22": "3MqabGdoVkwiJiqpEcFofuDL7ut6pjHkM2KHiUtP8QA6TRR6H5RcbqpFCQKdg9pCSz9TigESvysBNdz81yxTHkuC",
  "key23": "4H9qKFC4YphPvGioAetFVYYmCgdiA4YjLUUWbNnCWeYp87u7v4UBdPx31brhdPdT6oUccE9gaTN497K9HQM66qk",
  "key24": "5GmtoNajF8pUAR2SECrrThEgAAWMokT2snUoHSqGhNZ7RwZL8EwvzrPSGfnbsSzSWX1L8WrxUZtHX483nkRUoCgx",
  "key25": "5hoyd5SWQPzfZmpMH7ooJ5SjwKY7VU3yx3rQKhPmeUWmcP6dMs8fFLqzYHLJizpaMHjtabytKRY6vuzC41kVUHz3",
  "key26": "4VoTznBgnDSX6EKniD85hPyw13zp4TyHgsXAoWXete6G9Hp68NpPE7LQkDzzNTqjoUxgKeQLcgQqFjmNvsc7UCKR",
  "key27": "2fEuEDsdYkbSGsV5s8zQ4kFmMEHS3NZwyztc2uyYRpxpWRKDKfJUJc86rRoSWVEVBnj764gedEewAcDMKPiwDVQM",
  "key28": "2KENPtaUXN9eSY9qTHguqGBWa8KfPdiQnb7zHeJBL3Trv73pMw5KMcQNDEcx1qhmBoi1r4Je9Z4ymD1MnXM6nZtg",
  "key29": "RGoFLFeYJ11iYPDih4eZrGCYmdqze3j1oz2gCDKkmwmZyans2EJwCXyyWku3wCeBZ4rbRgQ3V7RP8BDJuJNhGBA",
  "key30": "4WxtQ3oZZDiwS3uPsT9AKLEAw4QoT3k7pzfxvywksLVvt6ZTv8Cuqm6xfATcjz166ZGUyNawXxgnHeVrNNJFf5q7",
  "key31": "4KCYjNHUgk5Bw2NkoZQLwr7kGinvpDLMrMLYgiJn7MRazARTiX3wWbEBAFcgZdsbUzdL1eYwRbysFzVvaNd8BV6d",
  "key32": "2Qx1ZfMSfCYDxDLPgW3sPMdzMosQVGTd8MRV2UJK1LrzkP3kStDtEc4ZATUSyVfTLhB9QVQKxo2j6dEaaysrof2R",
  "key33": "3L442GM9j7gWfrpZHXnQsvtkCetWncYCwvmyxQU2nNxKQrwMCTyUT3f6Ct6a5TR6ppqGnXSW5XxY2FTp2ec3Zhgj",
  "key34": "47cox7Yd9yphsvXTkPbHBAdmJ23jAcbMamKK8MocFLfwmBNM7aBdoje4UDmo8sHykbWex9x9FvqnLLDBEiReWYCD"
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
