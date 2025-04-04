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
    "q6deWek8z3H6XhhYwjCNY8k5UyuGpCHGSYn4DPWznpcz5y8pAYw4ntDQXCgWxQEx39NMgotx1G5ZJGL41VngpzV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61BeDVkwJ7kNWDDVmsoVC188T7KejgMLNPP8ov6iBECs42xbJUsdvpBy2D92VQ4kvLMjquGryA3NFn2Mn3FFiW5P",
  "key1": "4pabQ86PsCuH8UktYz4hb17fV4yCZgbfBU2TxnxuxYXGUA6vL3GT6J5xrEkJDGYskNLJdCTsjBad59tNWrduLjVn",
  "key2": "4WHxkWsKtSRB3YQLrujSBdVLkdiQvqXPTBFYr3HaupRpGsgtjZ8wGWiPjS5UCmP4AQ6ZYjkW8DnnjYXUrX9sKHx5",
  "key3": "4GNpQinxCUrTfPFpopXr6b7U3Y3ywyuBfWd9AF74ouf79nGP8kTe4JsKazkwwJgYFqQCytkHedejsHrURzoZpahj",
  "key4": "2n2zYUrbHy9b67xYUDf9uwrWkiuFeTZaiNrKZjVaLkXbFvKGEKq4ZM3zGzvKtnj6WNtBJPkkTBbEKzGm2HrND7VR",
  "key5": "5dq3XuoTNEFf5yzfy8pExDfDin5fVYZYjJvV87HAV3iPx2y5u6KiisZhXHCsxGssBfNsAFCfyNbaUFcd7u4g1X8q",
  "key6": "45CJGfq8kwt579BUzusK2dc1nCGxNM3eFKhWTSHUqyNbCsk8SN9WiUXZZPf8jUnNK2C6JHKjGasRt1iyuog7QoBQ",
  "key7": "4PFXEa5C4z4oF5fsKYgM3paJ93h4ZqkoRHppqwWRFkay9bBc64YG1HuEdTucb81BEd7DAARcbuFLmg4AGJhevHgH",
  "key8": "4xVnzEMSzntuBvQzFs7iCDDwewYjTM9ho3aGPVmuNZifEoKtUgrjfnEkVzFxpSSipAVvVn8P34XbB9MSrkSuZ68Y",
  "key9": "53mTSFnQMowoLWqFfm2T5cGnUxs2kXdMFmhxWfPqCUfXZDvXewFFdUPeD2gPsf57NKCoarCzotEUKvwWWjNoMRXX",
  "key10": "5KPiBgLQznotwMx8zJP4hdbSjCEszUuMouyJAUTqB8bng12rX8fcaUoU5FYkWo6HbdZwxG8jQnm8c9QEuixa5M3G",
  "key11": "4PpWGjovLm97x6bPNhuKKSxVj29jxKK6R68YXV2poixnat76dCgA5X9RYyHyxxWDuxTKjtVzqNu3rRYfKTpvzys4",
  "key12": "2nj1SRHRKyWnSUmxVHxtmWVhUR3KbRSALAjoYvtpBjpBgKhPvqoX7UnuRm8Ux53J3qaz7fHDmRDjgAbXqTfaseXc",
  "key13": "4YiQJGYoGWCwX64bprJgJzEWVzwRxqTEnE9HcdiPSZkemf3eDXJdR7ywKJSEeNDj7WhbftKJdvfAoctckUSPa8A8",
  "key14": "UEW7PuUYjHf461F83ZXFDZPX37F1VX9MynHWT4xcMZkfYnZrzwmP1dAVyKPVSEWUNN6i13wsuzEZv8kPST3dE9e",
  "key15": "2DDSXaK91T6ZRDbxBBudXEr6TBHApJen7cf9tGePDH4T6hYWUitijiKguyzn9srg3Ye6uu39mjXAz1v637NQbyE4",
  "key16": "31hLT6rmPGPkK5vesH3sGao9jS6XyhfjAnvuBNFNMTT6CSJnt6pXm1ipEKADtLzKRjVDSFJP64SuU6MFcmWYT7S6",
  "key17": "Z4CrDWyVtNrULWNd5k3zWaeKsm9mpcGTZDXMUKrNqc26cCsRha2n2odEQ4zkFwXmTX3TK758TZZjFSZ5jQagQdh",
  "key18": "25XgDZVdUh7xMB821QkF1hVbDT3HgLhUiSzBWumMbbd7dTwpqbDTh1KJpzaHiekGL4rpAgLTQNpV7VfEDoNhF48R",
  "key19": "5M5RRzeQaNGgG4ZZsAQKwoh2hXwgWwghkg1sq1kxGiEYyicX5VHsexQFMka16K8jxvcCcgJh8xyftMNtJBFiZ6nu",
  "key20": "4e8SRth12XGRXWstTRULKEcwXho64SuVwhDuBxGJ3m8QFRTA9TQ5cX8w5MUhTsm9vr7thq1WvgfpN4jUL934pfk9",
  "key21": "n9busPeGCPT3epbKZtshEpcvVL8Bp57932yeyJcsZFgXC41iSHnAmW5A2f8PZV4K2L8XFnWU1R5qY8NVDELnBMn",
  "key22": "46b5ZkG4qy1baVfJE62xLWEBf9NTmCc1BciAYMTvMvrkRjPS2vZuUtXKf4rFGWokYGGkJBXmpKQcXU1XQ3mRBFbF",
  "key23": "4tfJAa3zDADA9bsWSJGcPctAFq51S49LnuDoUing7QYoLg9PmC2TKfVXBAXCkGrnqimRjvRy6wGZ3qxsjZe57hLr",
  "key24": "5WPf1p1ja3HTYA7AuiugPw688sxnQCFanfm1DqcsZDKgfnedMdTAd6DEBDyy5oXakPWC8K4NtC3Bj72Am6AS86Ug",
  "key25": "3zmDdmLcHjYTMDXygGntJiwkGoXPhzjPCmWxynAc8xSYeJYzRJVT4KyJgem6AKMTEpGR2vuRR7quLCfiGcEBwPof",
  "key26": "Lh3H28NE1ECq5Ye7F9dA5vF51wHN8Y2T9XzcQJrvNtXcAqsiHucvtmm54C1hfQhYqAyvi9k2yx39MniCiJf2ZWx",
  "key27": "qHi3xpcnQE8vxLjDKSBi2KBeQh6EkAHatRKxm5AU56NSHMnWgh1Vn44327Wj4F1QmwguDHhgsckX6h7vG14gvnW",
  "key28": "49dfkaMFUFHruVkabGh84RXgggkqWmJ6tTc6P5GSPeZqHJMQieVa5Ct2HsRF5bHfNsNofBF4aP5dmoebcwqEShr9",
  "key29": "ZjfGrakyRXAtRKXqEJcQvFGSaFVxVxv9kD82eYNw6nCmxUvNV2V9bj7Mf8xKafB5aYgMSfb6HachLNi2CyGfJTN",
  "key30": "5TkUtPhoEh3aJynU1TMCBL2P2bs65epx2YsnKvfaavMr6VwjBAShnDts71z14ZXeCDoUhySRiiSkv8YV3bF7MYUC",
  "key31": "2t4HpELT6RaPjLiUzKsSQReDBthfcFXnwcRnDSgiL5gX4V7ceGfoxdc8b5o9LJVPGDe7sVQgewcpQMQFVysigs2Q",
  "key32": "4JSmoApCncHe692mgPVGKr5DpJxuf1J9RXYa9tmJkT77QbAUAj6ZZazhVdZY5fT4DNm8DJR923BAcwvUtajgRtuX",
  "key33": "PpYSJHmENsM5G1nsb2yhKBWdLz3jE5N8Pmbtn5cWVEp7SrAd1naHLdT9Qo68XihUw7qeBSfJYkzHiK4P716v4aY",
  "key34": "38wGhxBY4bLGaCkLtJVcwwF166JGjomXEeRBuQ6X2ACXmyHuuapuafzwRNuL4jxVgM9XpkPW61HK6dAi2MmoaV65",
  "key35": "4vXXZ5FiQL5BdnVj6yn6GPvubYtCsAZVZfLaXF52v2iYuTW54WTmfKEntvsLMyqVNKhsHoQoxJae75QLBV8YkWu2",
  "key36": "339WxDZaNY9qeLEG6AFsmDG9jNL3qtm9k19Lny9T9t3xBuLv93djGzENSHDq6iJgTTNPqk72WfxeLVC8mdymPLvD"
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
