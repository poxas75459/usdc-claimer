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
    "VkjbEXZ1yqS7QQc1cWCdSXxiLfVZkkDkHSqMEi2j4o4WWgK72ERrtmLSJv2vwv55CoT5ZYLe7JvFxyj9r312ncE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28bCAcj38yeNjCAhgRY55pCYKdZh89vkpqS8qseCgFLak4NLVMNBuviam2cq8oibeX9hvUnhdy2CQN6awufQBZhD",
  "key1": "2wmEwwAqVWoBJHdfaqnbgRQGkJb1sTn9gdTGL2cVNkWfyHSb4H68TAGQf8bKMKopehyEeFCxWfFbWtNiHniPtuNP",
  "key2": "2UAJVfRNk36AA85htgMJuezCUow6VrTaX1szBwQkgyAu6BJ7PhxA4MB3H9NVzb7mMKJoy6ccYCZPWytLd4Wm6pJa",
  "key3": "23pEmrwqAkVwGAVEFxeKBzgcEE1aa6vhugt24WdygH2EQLjTKgiSG4xksusVXQgV4FRXWNCgJcZ5HhcyeCTWQpzh",
  "key4": "2KFLMLVMeeWQAZbKsX8cdyu947Tmtj7TD86fqvMiih6GXdUt73uux3Ykc7RY6Su8gHEb9HuXCMen2ZeUdtRZ1e8P",
  "key5": "3iwZAiuVAoD5tcW2kmFzKZosKpjQ7GnteckN59RsTNBuoc9kEZHNquXRSZhLyeHLdjUpuLjaqitSHBpRP2FczfWH",
  "key6": "WHegsxWGTxRksUJYWPdPTiPeeoiYNnHZyYmz6XhBPKwHeZx1NQyitg4NUGnbMMKMDuByznTm4eMKWxh6adB95GR",
  "key7": "2KMaudTc7T4K68xjYoJ52CwQb12ooiw81WRxEGPcjfMwk3bged7wU9CXBMFcckAQaEFz8RecZvrSiF6KXQCrBjnr",
  "key8": "BDpzXXVHChmwF39BkfQYbLN2GRCbbaTbDxkKvn5mSe4R77YgXnz2asMYMQ8cvBLvwJYqt25zBwUfPc4c8t9aTZE",
  "key9": "ZL4toxsCTnc7bTQ6mWfbJQZspqJWpbNNY5s5a6Ty3VDt6AAUD8fsHSiNe5C61dGT1iQqYoouFco89Zh4xc528j2",
  "key10": "5o1TLK6b314aW9M1VQtLDH8wsaaRR3AR1vuMMExFoxP9DRf5FYNEcsTLFFCgrrpBK5gJxK2fEugFzFLwAfqtcHLJ",
  "key11": "2x4FEhQ6SQRh8E5BFdSx7h4uj5nzDj8o6uV4RiZMpRt8bbDPLhvouRz99afoC1f9p3Y1erUtV3p53je6xaZkb5pP",
  "key12": "4r69UEZobQh2jdjB16BZgbRHNKoh17oq1FnUzT6SQDyVj8nVe2vJChakgjSQKk5nZWt7J8C4NHYk5odJLuizEAcg",
  "key13": "4xEzBQw8iHyoEgr2yWnHBuGMzdmqed5aqQAcciPkmVDGgRMyswu4C1CmLDXhN4pe4xe5VFcwSS2SfQ5SoGWnKpdj",
  "key14": "b7RbNxrbgFZaXX6ZC8hiXPqPk7Yi6t7SMLBfN5kmoRVxAP2iXV2VVP98LsjNBfUceterZQs2QLQtW5wpbpUAA2o",
  "key15": "63W1ySLoteWkTvJ4X6ncGERgnsLt7izpDqJP15pfd89qmPvviA2rbxoPF6N8nez41pxYX4xY5iVUzoWpKkA3EdrC",
  "key16": "4KQcqxow8S8ByoB1UsM1Tn1obPK4GstuGsGQkC3KCPrD7eTZPjRJrFSG2ipu9cPwjsj1mHRjxQ52TodCq2KTcydT",
  "key17": "kMTu4y6WjrCPLfEWTtzJMDWhzzZKy44mXzAxeJDpHZeS8Ns4o85DaRaPeCQmdnhGEi36XpVNAR5TfEEycWGY5kD",
  "key18": "uCwQkUS87VbPj5MPCGbC44QqjeD7LsJmfd5nx7sTsFygrVmLfdX1mCTCwn46VWZhuES9xuJLXA42uLJJQSNf3vr",
  "key19": "5d9Ccv7NC94AjQXq9YY1PdKTPAuFfeBCMEYQQVMC1qLwRUsVAQ6hVMxLmXRwnffDPi7bGDDVhHuPAXtqd8xEv59c",
  "key20": "3u12E8sfp3ZfR27hmPhVCGF5HbZZSsPTa56groBTyfEbGewVs2H78QRwoRWyy2b6VXhTKonNx5Nvx4pxVXm3S5s6",
  "key21": "2sJqymq4MefmeypB3eBLhr3G99e5vgHcutDKztxY4NPjXZfRJFecqpmxka4r7dvqTCTgssaDmxBnyHE9eH1NbcJD",
  "key22": "5h6NSQkTeoB1ZwzpQ82857FdjxzgTQF6guvKxMjDBnyK3pXnfYgbV4AVS6vPiBR6v76n4KiVsQ2r8WsVhW211BJG",
  "key23": "5pM1ioyK4ar4uoLHKuA4wwvy2yJRKDnr7unCjSznSQwhdvsdJfrxeU95GPLRkY9jPqMNUR5j83eHJGw7B3KFfMn9",
  "key24": "4fcTia2D8pwmdA7n9Mu5snXvWsZPQAj9bch26jLpuCd1vCGYMVFEEmsh3444PsXGk98GnojpVajhur3noBdAg9Wk",
  "key25": "38jo3C91QKpkmYfdzXSjnMXuwh4r7nimDCHBsKfu7LCX3umPxQaSuCxvoHcgCJjzyXVfjQeY1c3A33iNSTb9qACL",
  "key26": "3Wm3ixmn9LFA8sN9v6QcGZiYKDBccn35mZQzB9Kcd85ycHMcmRs64EZpWAPcqEeijH1Xx7wsroLg7mNRFVfiM7jM",
  "key27": "3ygrFzvu6M9aNP5YSSHxEupLGagyg3mx5X3y53rnw2YWSNJAUTTxmpRXW36VJdrwWJwBpTuUo6RfwZ5oemb5NVpR",
  "key28": "Gey7QWuy4FxffP8gck3o9CbdfFT9ooRQMXzxEmSfHvxxnhF6uA3foWPnEzydihSrRknDbnzgDraypd2DirtH38Q",
  "key29": "5q9429nTmgkfp4n1ZEVeXhvxdghcrAn4dHXwgf48jvNQhuYfniv8txoBuHxMgNBzXVaV6du7b3B1B7SAztubdkqj",
  "key30": "5UKLEWauqrc4uqvhP7eysqEiENWcK1BTVG8CzDNtFbs8wRivChd86pbE9GT9EFkaZb2wucBGK52zmsFCA4eAPfFt",
  "key31": "3JcQRBiM2f1m9w7K3xNnPb1zUsd7P3ze3hkTCtMbdhMD2ma5nteFoRGzaPhJ2mEx9GKxJGq6JhR4EPYVb5vcHdgx",
  "key32": "5DjYk7psBAzibTVQEwEWhefT6cA51u7tAb2t5m51iAtWdibsSCs4qvimrMmRKfBTgBKRTPQq4Nte9FBkAuhdjx7B",
  "key33": "4RpVoeBQQb2Z9mPKEbe7HwWNn8eCgmhATet34PiVYowsZ4xZoFGuN94pmK7ymKtWNsojQCYond7HLtaPRDxFCNkV",
  "key34": "5KVFZgZWzbzP5jRATezJppKsNxNbFrHZiUvFWvn8cuFF8QKooba2qWDUS1mDwZikQM4vUuj52si92MBUNaoHwGAt",
  "key35": "3yeLydwRSkBRyfmx3Pxb6Gf18UVeutA2AEhstkgpBzjc2GXXDFfkXadYLJTF72k1rooiPDxgKNHLsLUrX3QKu9t7",
  "key36": "2zgcvPUSygUbRaE3N9rhrmZmEHc1uLSNDYsULKExBkvntxuK5P3hzzAw7yDCskEQHndAt9h5PTPMap7JDDmPcrsd",
  "key37": "3S8eE7YGFuVfG3bCfWN5ZrJmyJa49YQDgn3ZZwGck5bDQRaSAMxKNcX1EQDMggwWTULBJ2tRYbZqGXiSA6qyu9Eg",
  "key38": "5AsmbayavQFfKTQkcC5QhkYtNQVGVPz2oetYZfadsmxYpFejMwiFovsSTAbsznziJaLzpKmPG6hSYSqyY1j2LF7i",
  "key39": "376PgnW5mHSBSM46QreGk49W77xxp3fGLY6xJGm8tkw2Gow7ea4iZL3zijXR26N59iLrLB6MHWjy5gvBT2k4tA9F"
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
