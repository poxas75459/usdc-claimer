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
    "3TepdEWANREVkiBEj3rrBVw57gggfh6zKwsEHetyn94Eo1xrvkZ1196tDRk2UQNbDV13R3A9x8NxBbcP1eBCCV4C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wzu5HpR3AhNWQQFpVNJ4Vf7gNnRNyHdiZ6kJxExgLpnZpBjTmQ33NvCiDPx6DsEWHj4s5KJjF6UqxEePrCQK4Bn",
  "key1": "5AnedhnjZdMkimeqZd7qoCRHFpSQY6GCw9cVokxjD6fQLGpb14LRSXfzC6yYYc496QSeGx2oYief3NGfsBD2GyeP",
  "key2": "4SmA3cfBSToQ6eD2RoZ12m2zm5kiyiCgLPjRtnCWAPLCc6NXa5nvEgcYPnukEr6xK3nVXzTqZf4XCpZSsu98gUqE",
  "key3": "52r9tn33iJxCYsmiB3SPuLFEpSeYsiCcUYSYWyMXagBev653kD38HMNv4MjG3rbmCrMRAY7nN3DRsMQprnZeKLxS",
  "key4": "dMrozAL7HkAYW4HvLdjzRPRa62uJoQfjLxU78ayHzRMPkm5uqYbWJdChUjUjqFixXdxkUJRUT56KUVB98QCrxDr",
  "key5": "3tyxmqjAC8XnwqvtPAaDCLhehwDhp5rXWZHzabuTF2kjTXfWd5znMCAPPALaS2to6hj25QZVpWH4D5NLiit9G1K1",
  "key6": "3oJwaY1ug66e3uYdkxdJ7qhTGxDLAhoH6ycTi679ojUgNRNZXjNoGB55ocsJVUG19U2Fix2prjfZgRUzS4fwMJY6",
  "key7": "x3d4yipqakskoy2CHBGQCkqyEmdtfdcYrp9yMPQZNvPat4paUCrrh2v7zEEFrAEauDvCg22NkxtEHzcsraBGsHp",
  "key8": "3YZF6buiLhHRFjoDBaMWJWkiHFS1bugwazFDzfMWXdgDzGJ56EuRUKzSG9YQWuiFx7jbfRDzF1N7GnEew4h19Dao",
  "key9": "3o2PbJnMBMwWrYD4ufj58QhYZFYFPwjcADCRr2Bb3mZxaTDEXVMecoYaVzXyQfQD9Uv31aL1ZJpendm72d8r9KES",
  "key10": "Mc8eo8z7Q4DnVNNNen1BwWDFC8CU9zGML9wkgrAxpkwajjEcsVwTVwSsFWVBNcrsbGRGthFA1766E9FPaAKS2Di",
  "key11": "3dZNeDDfTa7RhGdVy6w9M4WcK5WPeL9EJEJN7tP25JzntzCx93QvqyLcDJxdvBmnLRRtke9MBHJAtAZgHeKQaQTg",
  "key12": "3btzAba5FZnVxdddtWgPVRzrvgMuvXonax4tFQRFLs7MWvawrRmD2U7RHWnoLycqvRBMTS3zzYZhGwrJPemU7D2X",
  "key13": "2d6hCgYxFPHjCJE4WZA4DZNkAAYEEbycrZwBt8465WRxTZjvDjvN87MZkuJLtcBFUgWpFZqTSUerV93o2ADei4dH",
  "key14": "5KjgHsysrznFVPCTEbAJFfUcXMiHQimQbHkaqkbXWQFLmvrdGCfdotu7Go3YaK1qmqg2xFApfTyi8dQvvpgHeJSQ",
  "key15": "3ZViTMYAqZeQ6E8mz44ZGXkqip2XEHKdRBR7bhLdPH93W3DkgwfBARyiAeJhuBTPv7ULdbm2UNsmqPGtrBQ94oFq",
  "key16": "2Fr1ype261M3KTWLKws25N5voNqp9B3QKGe94wp9xdDfSZVrDzHcyenf5QKtdTA2vYBPPkZqpQGDTYx7Ubtnvp5a",
  "key17": "3EHCCLPFhKJoC5hGLKqVXPAhdnYxaRXb54mAEjzEYcK2zXoWNzSznBrVF54x4W8qUCCDfxub9w482bcXSCiL85t9",
  "key18": "4U85F3U8ZYiffPzi3p4ceHrEqhqZXduJ98Lp8TtaASSjLVzbUjhbtkdCG5b6ntqzMPww7ejh67xxcczVRCmY3xa8",
  "key19": "4k1wwjCefUJxweJpbW2wt7yKfpJthAB9hF43sm6GHicBLyvCKB5CMqqZdY1A25z6tzN1JBaWwJCvPJ4vnyFVx4oE",
  "key20": "j9RPdgis6tdrkcMuSyL115qFfecmT6SdratCDi9iRpuPHPRSAFStKcph1H12mqA5aQFe19YKh8w6Pdb8g4RJUTf",
  "key21": "29oQuwxkgFU1pWfc7i8CqRuqde1Xp4kGvp43RzPgnP3KjPoSdvpCyniQgkicqGGFc6ZThdfbQBuQqQZDWgcZ922Y",
  "key22": "57p7DeS6jT9FXFSsKY57vfZePJX9X1QqUWCqUuP8gq9S1Rr7bsFMDxnrTfRisewMD7JjDtHJC3w6dNny5GtdJTbi",
  "key23": "2kjNzVKNGnCFLYXjUbRmG9Ab4qLd1QDi5cQmJNe8MyGBdsS3Yf5eiiS8nkBHHirHDYRMtwjCW9aHvPxa1brw8cfU",
  "key24": "YfZ2CD4SqUTveB7Mv296MPeTX7gyxhuFAtkZs9vpiqozmd2AVPd4pXZUF1XSfTSAHyTmoo8St7NsArBF4BwhXdj",
  "key25": "57spLhNFtrhjnMTkcorAGGPCrFAKRJqxTJtjf4k17HV3TVsA95WEfaed7KmadHmp7QHKWfKVLsswNvvamMhQRCix",
  "key26": "4SpsZg2qPsCnUAnx8cjHRHup7J1CNmg3FkjJLVhNzvHfhgEvG4DH5sLUaQ1CnDsNi4ZydSyWpTsTEiDa3wAFMHB6",
  "key27": "mZukCo3abTC4m99qAXRKw1asnMb8DZJz8AoDkBX7XV3kddQfYedCdAeJjYMAWvqwKuSWeH8nJ9Djqy4R8g5ipkd",
  "key28": "jUhQbyksThZCwSsmqdQaWZbVxVtNApg3NPzQqFbfkSKoEcMxrz8qkrndD383vGB3PEZcCPkbNWzRda2UtbCoPNL",
  "key29": "2XUBjpynAxxXN2XuBZa4HcjzK8KxT4DZo6j1HFUdKyqMraGSiRwjx79zZH5LozemguxBDs2snXUjWFredJJfaxGH",
  "key30": "G6DxgXhbwNzCp4Adrdao4SoSSToTAF2SWrWv8Hx1SegZrGcbC4nUzrJ2iXQQLvQycZK1BwJ3e64RvSG5DRnot9F",
  "key31": "5LJEeSQrXWxrLGxtZcDF8c2ffLMYk88Uv5SjDyeeYkgqaSRBnGJb8UjJnpJVW4YuN3BAVh7NPvWRWHC8iphCSCUt",
  "key32": "4paZQX7bqC7TF73cnmWYKCYUfUxJsqmiNtZuaMmsWH9u44VWp372gi4xNTDXo7hgLSGrpd27cd1xVhuKMxozapzK",
  "key33": "nqSViSkfTaBFLKvvYrY2RbTbF7nXDj2VGczZQKx8jikiP4JHiZHBFZ7xzgL2zB7sTpvs9sH897nCpqCdTpkyE3g",
  "key34": "QVhkSAWhcZh8khmc8FZm2FTUqrR3DJwKFiAikaiqepxpCaaKvGswcqBn1iqATCZsT9BGGBZtJbzXFetjrGWR6U4",
  "key35": "4kpPAJoxMgGG3zuPf74T54qGhgKoYYBoQj4jvT6Q3S75ESj7xmdBKSB4DuqN9g9LpR9T415VGiSnJKnZ8TVBhVgx",
  "key36": "5R7vWkyE8rHtAFPzx1D1q9vXR6XMfYjgohu15tNwr82rha1xr35WuMYn14GVGKP2iL6Xdio9nMJUBDomUMV4WYpb",
  "key37": "MyHiGncaEgXvGn9a9NePbreWXomkWjhYVfQqzBpjjB7Zeczq8EVn8tUkCT5ERSMmw8WpRzbig3nCc3kUWo3W2Vp",
  "key38": "9FeDM2XtQdgySdo5WYUQ5zvcc9XL4UheD5NbhXVeoBvVZxbVBpNCYWYzHGDdCUBFB4RMjLz3DrgSmEU7AhXTAm8",
  "key39": "ifvYtof6ZmyKPf1XzsjEboxTuZgohjEsf9ADU38xNmc1t9qC53UAH31hsifXnDXY6XtTT4Uu3ZAxtGQMDhJRA31",
  "key40": "2JfBzixhmFD8SKpkw7WTiHerMiGVW2Pe6hsRMdmb3uZiutg3H5T2mAPnjgxtYmeWo8bRrc9Kuys1T6RmuqcJxw3d",
  "key41": "2wWonKdzTRUHAoBFkqUztu2ems7bVeCdzhUd1TQWZuhvvRfmKxi6C8jQXdx5NsSZCy3ezTDFJe6Go8PDoKk1bFyU",
  "key42": "52x9NxALa5SuSJa5ECTn9VP2sngf2SEWuwk3wyDEcvTP6awNwiasmk7B9i5fWdpdTJLWBpEjV1utV8xzo4pPMNB",
  "key43": "CKmF7oLyQetJKSRamXCoFGJ1fEGx9vnWv1aA8sFpHaGGaVU1etrwjKnraxpHuYuWFHgAN7uP5zYW88SLUbnxYyF",
  "key44": "4MXEXFvmYW4L4KrvAZ5QMQhmwhq74H1Pme8xSpZuFMFbdEy5zj6UqDRPM4CtwQXHhNHQ2BbXYvyq6M6hdTEEb2xc",
  "key45": "5hS1BU9KaaT5wgob1Jhhp3XszXuRUuP7zrCGLXPJ7qwU6vqKSFcRfHUjuDNWYDURAz9KBPjq22LNBHEmktpreNZu",
  "key46": "4FkbaQxbCHzMLFaxnc25pYYfsK7ZGLTghp6niWQQutLveTT96F33rbuW5KCVwWkmpt6M3oapiHvatSieYqNt1KVe"
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
