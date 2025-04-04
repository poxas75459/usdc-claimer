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
    "3FqHsWxeVPyiAJMiGHmtkTvTzMoqwN9iZYBhJrqcJnHqpJp5YC39KkT7MXr9szB1uJUeKm5oq6pDtFVgvceS2XNZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TCMf82CgPyMN8G72jeSuBtuMfnaD1yvqtnDuMSgCsza6BLQov8H6jUwDuCSZ3ZvKWBdcwv6g63saFAh3qWPrs3d",
  "key1": "CfFT9QqhJY7fwtAgvbRQK5AgarqDyhENPfkP89hytVNLQMScc2Lj1yY9QdLxcYJfeN9X8bdji5tcMkU7r3C2xw4",
  "key2": "4eBVpFPhVbTCns6MzicsdEeNJBPDp5k4shQ6yGgJTgZ4y7QunVypxP72zmSVTbHkVk682W17Cm2eanbX5xUuqfS9",
  "key3": "55NejTUp2t8XRKBVeDAgVMGHRe81sV1GbSD4vSQeLzMB5hw98R5YHKeSvKwE3nZyDo8pySHYNn8Xo6iCDQ9Q41Bx",
  "key4": "2VNzYcTcHNW6Evbq6tpJjzFvYLAEgqQhz4CtvDrUX5a6HNGCBV4GsvoMSsYzydhXraRSzqWwr8QZzPPSweEPAXQF",
  "key5": "4unDenzXQGe6AMtY6QXLgmcD4J4ye5GS7DSm576gg9FgL2EwNT7xwHUFeFXc9rCYpiT9HGzcU15qEdfBKBTw5Wt9",
  "key6": "62ZazjtzVM9ssfuSeZNxNLyaWyTa12BQsvow4p3CUu6mTwcjEct7MPkLnc5DaPPqc2htcc7HPs8hR3dsc6vTq4X1",
  "key7": "87DBeKvVzAMnw8B9UBrmMeR4L28ruNJrLMiBjw3pcaFivbSqKXZ8s8McLo8SdnX6W1zQrYoKtcCWXNocP7WrafK",
  "key8": "3SVAXTA3PR4JWvLS1LA3sr6dN7pXTHBkf2SSZUDbJ43hPsW1cZwGSHiKaF8saiskvkMWh6s8ShSCaHAMP9FqYKQB",
  "key9": "2AbCJA4dzt7VGEFA1YPenZRSWLqMm4MByQUPoakM9yehD2b4djZfLX8t11NyTL72jo5WrvFXqrHLHPiiusfBRuN8",
  "key10": "TmESehXRE338oLyAtLqqTfb99BCRyLn44JbdBkHKvwELoNLsqtRiLoSXnX8q3FaXuv9DcNuREAxC7QrHJyK1Zao",
  "key11": "4nMdCcSoA13rov21E9BkhS6ULEV6ULAeYW6XWERz76mnSTSeuSi3xuzpdHG4Tiiw1u9eXHWd5m7BZ55AW5TQDSmJ",
  "key12": "615gNpfnLEvZxQo2cL4DQEEQVoAo3sQdAUKAK12UXeztRHGxHWmxjc3VL1CwbrHSJ92MuruMK8LCR7WP2RSRzFqe",
  "key13": "2tXm3zKSzF9nsoYpmJxDEQg7gxVFxu23MPw1KGUjYig7gpwZZrPCBub5BYF3GbzS2MqK4zxpjYh1hPT8RjzcxMNs",
  "key14": "4jHcaZK7y2DGsAJffKv3LSvR1xyAkNxvXq6DhxVb53CvYTYcvQ2HRdDUc5w1Zf7mxBhwoShvNE7qw9fDEXhq3yQr",
  "key15": "2pNa5sgbzv19PhNzST92TyfhPnrNugWcLAMDqmfUSNS3wMubvSDF2pFDo2iu6nUcYs3BM3x265wqN4q3VNUQd9p4",
  "key16": "SfgmtXguVPg2teiKP2QbEpgtxu9iFvYsNeJfEertvrHKtE7vzSkR2QvzB2r2pm4wkFypFdbjiZqa2rBaaqnDZzd",
  "key17": "nNmn8voXAVCyviDu1tgagPs316qUmM9ZTnUPyW32LaCJSd5VrrbnAojJZYqpXecUDYcd6PCGX8CCBNWp6nygLce",
  "key18": "4G9mxxQtfChRf6RWofvHnhh6PDXWV7PgQNZDmBijeN94qMWT8KMQXMUZjKw4gKgp3GjFsCMsvvkTgnpr6GRZJ2Lc",
  "key19": "2U2PvxaQmNjVZrTvMFQapBF7mTidAgzWFwL4grBbhy9WorLX3XMCCYnfoUrHuD2uvaYSsYzLguij7N9Ea6Z1iKFc",
  "key20": "4BKAu1XaiYnK2h8cVesSKrFX9rdquPjzNvSgZeQ15QivfDFEcAr8jjMeqy2WfbMuPAAL5PQYzai5Yn6EBj9Wa1um",
  "key21": "4UWBpdnNJCRFAQuYiyNwbcKrR6eLT7zpii2sFyKG9HQyjESvPkLWFryiNhuwhMmkjpxrxWwLc7vYNyZu97Q8Mpn2",
  "key22": "5zBjFvsUwUSRGtwdNX3m47qDrZKqGAviYb8bBVM8R3QK9NzVRDndLquDDChN5eYmp9wr2VxPYqw3uK75eJNJhds6",
  "key23": "4kEcruZ149EQa8CKTDugxQ4xrEJNKwUW6buzkBqGn6UtZ4xhccuzh2H1tLmiZ2gytGH3qcE5cemxaS5r1fKWe9G2",
  "key24": "36izLQuxYBSXVErkzpGez9Gk8mZyM4UJgF1eQMopWZiw7RYtVS38VQAjVp1NxBgqgNAhwYQFrqmrCM9gAHexw1kV",
  "key25": "3wKjanRfiXJzmXT7Zz2erjP2ivwRY3WJ7EkSPsF94qc2mT867js9F6tQG99ojAuynHCMUwyRvgWhrY3jZokMCY8w",
  "key26": "4tDj3fAn9qMqjWUdcmVe8Zf2b9cyv13bhuoyjFzdseTTyHWiXiqsk1QPDPkfQ7Rc1oSHqHzksq249Hp4Ejv2a9z9",
  "key27": "Ni6sSwHmwTKL5qkwBFR1fFpWrgyFVxHoov5C2rQ3h7i3c3U6Zz2Kam38en7wFYN8CgKBwtKn2mHt5GVrpu7JtaL",
  "key28": "21wpuY2Kx6sn1C4cJtujonPGgHhCD66poao6QMCJkJaUaqCxnHzzrvCvhsGJcHfNdQRzBJQADzVMLiS2ZmozKV33",
  "key29": "61hCzPj8QJtu5uCrnbfH1f8aYCVrdRG1KhpKuB7YZcmBdVC4CsWoRRCQhSXsSnbjiX9yaGixMKoLZauVNeRcXMoU",
  "key30": "5Q8ycLtdsFnFytvb9exo55NvjtNnfZDe48mmTGtekpUE6D4Yaz2gdiApWZzzA5dvq9GrNZtpHQ7ACM42mxZdAEPW",
  "key31": "4inRQErYr3pMgecZVuQRt2B2ptj2SGKZgvC18VkshKKCec8XMxuRUC34SA9QD9geW1NZYsxeB9ofit76NHyU8wuo",
  "key32": "VnkuwzGuCCnxcagWhfNGpo5ZBuziSSYFUdGzMWxCu8o9FCLvUEQvrSyPVSALA9suagaPwMHy1FEHLtZUnUqG8AN",
  "key33": "4DVE9VcU2gP5CnqkYe72MksSQYZNMo3aBoNcsZjZh8XegHbbZsrWBCbfyH48UMKpwUcvB27WHaZpqyGKnLZ7RGyW",
  "key34": "3vopB6cXkftWjjmjWsBxce2kT8gySHpWEPh2hL4RK3GQW98uQgFNhNcT4NhyMncuAPY4prYcoih8BdnaJipgq4de",
  "key35": "2gyznB1FGfEDzQH8fYsjdBr5yLYMPVMUh5X1nSTBWT2Z1AzjyfWFcaXDWkDAh8A8GoSpvd14YHtx72DrbNWpw9d7",
  "key36": "63ddStxY8p4X3Fgav8FGDsDT61rxZ1uzKBMD3ybPAo29cdZsqpnMV6JGwZ46E36RebEhCEaTTfmSTB5R7jjPhUd1",
  "key37": "5znTmzr4y4E2RWxQooQdrAwTuJDqRQqWezKRCaKvu9xpjYRDxGseRReycDBkZhKxNibgmgn3tE1JfBPTQhyH1TmQ",
  "key38": "4e3thW8QFm1vK7deXrdy9ej6FvGHRBWEcKQMcoHoKhG4yHqaECKaULJ8RKs5MTinKEx15LpD6mkBYM14uPhXA1US",
  "key39": "4gHBTXohDjruqA3h7gnhNjSDHTEv5tmkGz7Y2jBP9jGBEagt39Jj7YqoUeoksW2z1WKC79fwzjZdMyHccfTrNiah",
  "key40": "39MbAcKKg4pVob2tAge938ABkjccpjSrTSxgYshDxafkQbPqu8Y5d7HZNdvHnLBdXMc3FKFfhpa9pgGxza6KXM64"
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
