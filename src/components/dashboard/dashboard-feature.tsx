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
    "5ojvvzp4rPJ74HuVzhcg3YUE6joHDPpATTe2r6fvUuU5hEiwkpnjENeaxCcHZoaJKXubJhnE2wKVcnf2xLjuyYoh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3brKeJm1XNYQUPF7qWZGprbDzpBtvueRC9UEj8RCmE6coF5WnLhZV12YgK6V8ZN3DrXyRmyUaWXVHVpGjHAMQH7J",
  "key1": "5dDEQAskuVAimeFSQdH1M2KbvvJecKoYjqS8wm55LthURWn1u1MegQJ6zAbQzkrPwSktUxhYnenEsZ3mQytbob8z",
  "key2": "4PXPQBdSmMzis9UAoC4YacK3mvg5nNt4Cx1gjDQbeAcoYAsttQbro8SZfyABwQR37tw1LRuowj1Mi2QvvBHex6xv",
  "key3": "5SJMuQEhfZ8xpuHfcuG3ekVDuRrvtKBSUZnFwCk7dsWbsVvqAZwv9wZySghVo7ZcUKY1s9FHn2ypZ9TzKmj5fPnA",
  "key4": "2Y8jAYCJar3jpx1CxkxjfRYcXS5BJRefop1sh33nKX9Hw6QH2UwH5LKZvDi1Xfte1d1jbojdLsiRe1ZFwjzouc4z",
  "key5": "35WW8UTUNtMqdNY9kdZTuh6fBdzLjN2rY3FJcAGVZi3wqCdtFDjYJYzfYhmedB4ohmanokQ1JZV5ivBFG5quXiY7",
  "key6": "4RAfBkKLiTVNFduy8898mp6aTqgExhNiBmrkxw72GFbCcNs2fBogGmJ4dFkxLcd7GGGL4NxypxHr1cJvdSyqmRUh",
  "key7": "5kxUebSQ8AeP5JSCtwbjsECUiGfFKtrYH9TxDS5sCNdagGUAW2uvHPtRh4Wkx2LMjh1Xq8Mk1Yg1bKF5Nh1rNZ8g",
  "key8": "2WTrgtwsPbtjRz93su9n6Hsn9JUXmpHu2ZKb9wJEExDi1eWdBfdeBbw7beVVtgPGAXV7dttwWCYJZksYt6pB7upQ",
  "key9": "39Yx4JfmSuNn6injcdziz2skqsZDZR92dWP7nJ7fKs9hi9E6VMUD5b2CdtdkhAcTCccRghEpF36iHfaB9dKeNeMF",
  "key10": "5rk7N6TKqe3xkow4xKyjN7JxXAEeZpURrhrean3e49zwV1EvLzZAF1xhckDcCqHjNjQmt69HL286dUDWdTXhSXJJ",
  "key11": "ab1UoJhUtrUU7cdWNuXiGLxfd2bo2Ma3vC3Wb5wP7RrT3U9KUHTHdPg5FCT52tTcNP2C8WpQxXCKuL5867fbSyy",
  "key12": "5NDsVMB2xGJJoeG4WtFtPZWfav1oAPaPYBk4ufrDMSbEc57mznkN8adwWvzp715CKn7tZYPwtUGHwZBtWKADSt2o",
  "key13": "2o3LQ98MSNNuLaWvcdE41Gbm8AhrATdyqtnNRY5q24nS82D7aSGEQAaR5eTDqv3srACn5UsC1UJk9xtLXRewz7Cm",
  "key14": "64zaec9qjizWTy8eAEaR2FxTZ7x8Zz5Up468t4vwiMg3L6JdV6HvhKHgHSzNS1arBMvcjFe5vjVvpYvaKPYuhhR4",
  "key15": "2VVLaJDvbCRzLi744PvEV3Dp3iLC9Q5AYpnwC4cRiECqzBSaXEmQKiHTW7x1vjaftP4FUJt76Eahh1DwyQqiYZLv",
  "key16": "gFnDPxq4uLWtXY4BYUoZBSMnbFDuw4iZP1TMLUBak7zs2yC5PNkJHkJXAaTcaTB5U2jc7VXkzzqQX1tQZjUYJpA",
  "key17": "a7pdrzio92RjyLrMjwH2K1KF6RmKrfgdmjzHQ48Wbyx2Gqjig6bkUsiRVrMxkkXSRkr87dayUcxfgmefz5Znkd1",
  "key18": "6nabuY7hGX1Ayet93LV35fCfiRN3vAQ29CknWzXi7jwjeJQNTYgEex1ePaDpLpsAyfBu8MjHCavaBU1wgFbxc6E",
  "key19": "4FDY4fRb7webDK65r51nyaw2QbFH1sEYFhSVaCbn2bi4dQ7tL5SiWSEoRudfepu8mNmHd4aMTYKoTcxXsAZLYLVJ",
  "key20": "Z1TM1Ykm94EHd3UGarzJwmcdpwXtUhMoAmr2rVXvSB8Bng7kKA4MvchBRCfZwnRGZNWKz15iD62NEDPBA6nrVCz",
  "key21": "47Laif6KoRiMKUXqiygkR3myEkPRrynm73Z7G1vw2Be3i6r36oHMduDBoQXvq5iixLJ59XHqewCwUqRN8zzU8gnw",
  "key22": "6aZdiFmK7VXxGM4cpufhxCMHy8Rz8CgRseMkEkWtDkQhoz762u3PxZr7dhSp7iXo8ogZTf5ntEV9usk9MDc9zWs",
  "key23": "5jkmJJNBw9VKD1JYbt3JRVPFtmZsVRv9XnaSeSsLgoFDFi5H4SEadkHEMgAQUCBhXu8Gz5PJoAnZbgjTQSneCW3n",
  "key24": "ccaEGQL3aiwUfgYhJaMUc6pPSNhF165BuJMAU7xwpJXdugVPxhAfo4YasB8ACJkbyf3t9fBrduegu7jhtrKcXAU",
  "key25": "4hXsRu9gdhZXWHVi4rh4ZNCbvEBbrc35TrwVFpsoAFPjxDCnZ2iatA6fxyzRiK2d6EM42KmS7qE3WFuYBe3Sqzgt"
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
