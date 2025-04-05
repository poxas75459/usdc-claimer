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
    "JpGJAucCQ4XmGf8tmfmuwQSnHyiCqyt8UDnGNjxfuBhQP1ghgaEm5jz1LztuWEZojoosQMnnLD5gmyn78jzoeRf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Sfdo1X2iNJWxaEHjSduj5xAEVu8TpTafxfs2EHPMVaXxtsSEvsBzs7L22b8stxMKGLqkMUr8RartXFHXSQFGNZ",
  "key1": "5yyzQi1eWxiNb1fBPjBWZzsDUz63vZ9RLDfTc16UaQhnXKDTi4gkycwcMh9ZY3mXtn1FFc5UiahHdeggKNnjimGK",
  "key2": "655EXyaTaPZcDPDkLzACSHBomuWn8jrAdFARrw1Fw9R8qdRcxVoi9uLRoHDDEVS9ZBL3my7BwV4VMDr5PMFuk9Bi",
  "key3": "KfZJkmiuvzioSjSWa4GJKsDJ1uikM6pcG3fMe363aDcyRsbCzKGdWSLMLBEtwHUkZXXf9joFPdAKuqtxQh63Rvt",
  "key4": "4Z2by8rdPw2mwDxmK3m58UZw8PWVRwJ4AJoLwWMFcCXr6m2t3HeiF5dJKTnSKsNFvSfUrX9X2pdKyNC8xCdEikoe",
  "key5": "2QNcgTCQCK456fvKgmqzBwCXqFFBnohbovPxSAheszEJnjfybRc7Mk5xEPwZVDcwXTM1KVETzAg5BGNxrgHvvnwP",
  "key6": "5vM1rvJ2nA955EyPmb6yBc2sDV8owcyua6hF2oHvfaRynMeB5kvpaaTKd1X5Xx7ZCMYqJy5hfTjX5HLd7jFZ86Qb",
  "key7": "5EWfhwKxpVecmHgjVZwY1rqALtwoMt2pHQiMEtD9qYxUqpJYCRBoAnbavANm2cv6ZA3eJNowH9juya35zw3F2HDh",
  "key8": "46A4LJrhAjvd7wgGwzwMXvmLdyqf3tmvwBQ8vCxCPwd7GMrsWKLqyA6xdtHtx8EvRW77BX48UcBriiVyZuuuvUvB",
  "key9": "5VptZNjkGQA9QNwtKBmSQYkqEzBNjLhUH2dhaNqCRk2Rr8855oxEoR3gTCwwvDBNmmMcHSs26wpdNBxx2ErLDfRE",
  "key10": "4NAkicGAZqd452JCcT7b5r5THM1y3EWKZ61CA6jTJA4wCGNa3DzSiHSsAkXQweyfLDbCT9SQXQGTHeSzYfi7g9PL",
  "key11": "4x2WuFLaFJ6ApH54SZUPFmTP7TDw2jhfmtgvoJAQPUv485ojsDwsNof4CbGLH5pspnA76zaed4WZybt6RHGhVkEJ",
  "key12": "4EQeRuqxZFKUBCbK4tSzPUjABFDuP4APYY8dN9g247JF4p9MGhJVrmc2m5uPJFCSRKBs3XLGLF2BY1ucpTDYPizL",
  "key13": "3sZzjC1XSaYXRTpmyotNKcBCgWf7fr2ooLtPNeyrPivXE61TLUwAbH4iy5EzErL1vyxZLHKc9L3jqcBaxSYetWg9",
  "key14": "2Ze44FRobnRF6pWtt5DPvMZAo2o83AmKRKK2DAurwMWHXrDQxVDqbinjNNCiip4MLxvLbragE2FQMqxRnwQpymFm",
  "key15": "5W1sLzYz74Ff8rkdiUMzBYsXmZJStQ9usDXLXGxS57TXr8124JqpDmwCHpgyEPspCHU5nCEntEEC8FUtQ477Ahtx",
  "key16": "2CgESva6Pb3sF8oNzDGhJ2JBL3L6PYpc7SW2aqgmezvTMB7bmjd5RK1irUTtzQSW88r3QcUQEfVw79DotfhmtMTu",
  "key17": "2DGfpjMwDZSwhF3KxyHVhseBSFBjEFb7C8xFRPyi4wBs2LMsUjTnmULB1bpePr5PPR8wC7XiLUSiSEXRySCiqnWV",
  "key18": "4PKDph6VNJnkEiuByx5QreG45cRLsHeKQQRUw2KPaV1xzWR9RBM46sLMXJhuJQ9vGGm4H8ZixrFLLyM756akAUkE",
  "key19": "gn9Xd7QFKAP48YbL4zzdWuqi5XjUw5z1oaa5q3fuskTAdoXxwhbznyokjzJMFBWb4ej5b3FKzpB1PyGnZcQoLS9",
  "key20": "5go3ESuWUFjuroE3s7jnTmEVrNGYdzr8dqJugqL4yvot9xZnaeVNbJxTJwDV7GC9jrP4gHmRnbGtfENeoUQgsku7",
  "key21": "2NG7ZyXZY96n4MWt4PDiHyF6n2o19CxjS4RnB7T2PRwtE5MXu3qEVEQiT4U2rx7TJkCae3Fmh5fsZ89qBBirdQq3",
  "key22": "24xJ5tWBaXcbrgiDm1gcne2Jq7TmHohScMLRXT72ery9Sg1CKxMMQroG6tumAQXKHKZoUMDtmi5pwRcVJxcJH71H",
  "key23": "3okkhe66xH7ZaJEpFWJQVL4xNExTaogPTnh2MfPtdCnPoN9Q2HSycbfTAVYQrrcNo4cLXG9AEsBhPWGWDZtKFMwM",
  "key24": "4TMiin4MMpF6L8zGnFFSgVTymBkK1g1tamU29xzvdHpKreR9PCQwKkU7LJ2ZaQg7vWAXQ4tDmYbf4Kt4AJTzHqXJ",
  "key25": "3UTiYH6PvYo5VzEqeWmmsC3yw5boLvVAkYjVAYcN1vF4bAVjustwJgTs4ut4A2S378CwJ7vSejU2E5tmwJutRfco",
  "key26": "3xY8ic7eLikBCpzK2FzuAiVCoyBap2okxwvKx364kdnAEDymhV8VQepnqHvkd7txy3z9Hj27BhinuuoufMJ6MRj5",
  "key27": "3P1RNuTrJwruuczxVMTRMiod1iipjEAcujnNRzkgmruHzvcSNw5HRFvRn58oFc1E1fs4dE6b9sw9R4u1Y4YhxTEE",
  "key28": "2scUvKbkemtKUAJtw6HRg74HhNj9tsj2v1t2Tyhr17nLAC73EnCXEgVWbVnCiaovLdjbNCXYLw2m1rq927W59ySJ",
  "key29": "2giTVp7QXXnoaXVfwEyfCBzBeKXBe2a3y65nzVg1zsHJYoDVBBwKvFbZyjiBFgCEbJWtCA1TTzEs3ED3z5Qq1eBg",
  "key30": "4L4xyXbcNe5rxsc1Wdz3kv6yj6MrLen7GT3SpmrLLNF6weVaiEf8CR9ogyVCf1JV38ZRqMzsJXXonx2JHvKcdivr",
  "key31": "67mDpVdFtHfYSFSYzQkoL6Tqn7SBc5Arjo48gzu5BwddWczwJeEQSwW3MkRpf2LDivwLWkqnb6UnkHpTAGEa3SLG",
  "key32": "5VxJWJdWtiLeLDuQUhdaLFhMYfEeH8nM7YVytY5jUExeeYyGUi3aWSNwF4JAzR5dGSGN8xA19gvYCMazVGd2pLvT",
  "key33": "4vMCaX11CypJyAzSCXLGfPfL9EkAXFKPNgBfC8kFTX598MMFapESUjJD3KJ1fzJgtvYXyoQ4tLrxSu3RDCT66M3k",
  "key34": "3fnM4oXnHaRyBYejH95iEQZd578CHXiPc5SArL8RFLntZUjvbC6hxAMV8cFMfiDRMxHc4XDxkYSXE3rLVBjAaJCR",
  "key35": "5aQeDHxkki7nkfEjpTmfeRGLTbv18jbSr76KNdCgpAZVhfjrJPvg3ag57f7AvFrHPJnqixEjm3uCtK5Yi29wBdQ8",
  "key36": "mFwKuZhF13KFRtfrC2TLBjgcjYnte1GH3tToayRMxLYjVLwL7ZLQbmShfJfD4YooPSM8CCfCJchTTesSWGj7f6D",
  "key37": "2ih8ujLMGariLUyyTj6mUT56wat9NoYjftKtKEtDDSAEcG6MRfgorTz7snLuL7VW26s47MDy7JKFZmAtboATGjf5",
  "key38": "ejwH5ge1fdNNF2WgZhCfuVgcLBmULU6rsqviCgWF5QTbNE1DLJ2F5wkQvcszpcEmoofpeeddeYnWLiDpUm4sEyK",
  "key39": "4T6xWhgiQgPDtQakkA4wKEcPLUXeszaT4JaoHd7owPGHtYoZjvR7mnh24ixGPPiZVy7fEPUPVnqnHjycLcBUa2dX",
  "key40": "3gSM1HPwbvyedB7Zj4t74sfsxs2Xzu9w9qZbdoDZH9sCQNbyXczBf7anF6V5R2ijr7t61FQdxSp2hjBEB87bGJZp"
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
