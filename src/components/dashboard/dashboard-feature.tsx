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
    "4P9bQGZfJfhzSZ1LbLZZQiLsLonRucFWnSxXU6uMH1JH23JzibSVPMPXuPtZWeDUxtrM7E8yFshcfGWtCJ88U4zr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KNK5KnxTb5ZgUnvhoLHrgK1tVwVfWC1QWRYVDujs4cQ6EHDu7fAWivpqPxMx9oVuWtiUgbR7pY4mJiu7DENbtn4",
  "key1": "2Mwa5FouZEAytsbg5rPivt6oeF6uhpD1yCDxtN5xBnAuLdhACZF9WzB2uiJV8Q9xYPMaceTsTVkvd7smW9j49Md3",
  "key2": "3bSHBrQEWJyfjyP3A2Qn8TJhoMBjVA8upaotmSDCD6nyce7cRh2vpyoutQZ46o7ZVdhFuQ16ove8245fTw57bUrn",
  "key3": "36QqqL5mBjkqzeiPPAEhQTNJeGYaYH2H2aEpHfMLRjRULvNL1CcyTssmnVRC73us8eDzmwcEGtiXNwVwqbi9Vguy",
  "key4": "3y29W1EjcA3rk5S4wuNf88joCw2Z71pQdLa4CbRpj3YvboBHMmhBHV98GTFoNo9SQSnn44gnFyXoa8Tybyx1GBj6",
  "key5": "2iXesHDc9QD277rTpSxnGbDVMYtQz7DuK3DWGHxNdHr9JoeNGN4TxDgyuxKBfNVcAmHkXFGimL3hBcSxioJ5UURe",
  "key6": "38yserfwuBv36TQJdmkgVdnLDYdFP9VXrdXNweccjZoUtnJP2qKULHC7RZxLEDGLRp9Y8BjpGSk3ajHLSeEAMPac",
  "key7": "ysq2NU3zFrdxhY7zeJKcdLBvasHQhrJdoDToRvxhDMarrpYu8LuCZbhqJof8SsJsadD8L8qsWFGzEikVV8b9N6s",
  "key8": "JPNTQKphJeuxp6yz7jyFVSG84CgE8siQoqLkHnj8JuMsgGwswiXygWMvYDQjtS28YAby7os5i9VPB6R7VGTMf55",
  "key9": "5msnXJbP2rHA6w9Gf6Dzie4UPGRNWNxEL2dLvDJCxuyfKiaqCVDL4muzSnP8REqgmCkmytVmNdZdSyvikrf95PQA",
  "key10": "127DGi6mCrTwfRZyhfrpfLTUUvvGUoQK8ZaSPesxycswAL8DMwHj4wTS7gT7TMncoVWLoxXdQ7QsDd27VJ5pJALK",
  "key11": "F9AJkP4RgsEDnLgbUxqFLshYKCZ8mYAnmiad9mLM2qMyXHFnbtbx6bnjWpgmFLz7AoguLgbHbC7jrZGvLhFb7GN",
  "key12": "3A9DiqU4bhP1rZdyj5YZ7UqabxkXUKzbyTb9ZQjpUeEsfo9Ns4KW8DnQrDQLKuGrL8entmpNRfP3QLCcWnFL5PMc",
  "key13": "3tLXJZisnFYKRxnGQGg6LACnyNp5rnrKGHdqNEKHe7TXVc12bB5bNpg5pXsSTNWR1QGKXyv7L9BWf6G1LDfVCvqL",
  "key14": "3mQ5NKLCBsSNjt48NSEPr9dKQvJdZEwsWC4v7G3LrVCAX79mgL4RUknKRF5esGupRiBqhBwRk4jMtTfAiNhLnyiq",
  "key15": "4jUBkcyKyFoqBS9wwpP9RsEEgq1cQRjmE19pB38o6ubnQMTh3dekBWB4C2zH18gtexumKpXqezzHzkRAtcp519Pa",
  "key16": "mLK9aH2v69fWd4egJNN1KQRH64otaTok3FKyJchuPD92WPiKhHo6H4nSZPt8xq8UR83VGt7Rwd3UGKZt3Gj6m6t",
  "key17": "37XfpzU35mcrbNie1MM1mZe38b7eiq1WBo7D33RszkLpomrZWPoCi6cKzPPwSzaLc8b1DB9KirsMedz8ohMu19QF",
  "key18": "a5H4VtBMtVntELu3We6HePKfF36MevY89GHNNwdKwaBVoMS3tYoNGmdNvfDfVQYLJeAibJJe33cb8EWHWaLvdAy",
  "key19": "4Sgp6aFPXVuNbQMPcQ3QMAgSQjg8VhDaxKRQRyrQzKCGw742gGUor7qxe6xJfCqRYj6f5XPk9pSihszG1b7H22Nj",
  "key20": "5MYEE6dDWHXeXG13GfDe8XQipg6nEJyJVsUGYx1SqHqVbpqaiFj2wMQmqrnTWHrzH8pc5LGicgE26nDP9Ls4f9Qs",
  "key21": "4j5JPNcrc9chqjCP8Q8Bp4sAsLoRTQ4hmCqWUwVbDBi8A9wvidN1d2NoP9dLQ4z3bvcHAUHeTwtpT7rwpFi6M6R",
  "key22": "Ud7umWrG7fmYUQXDhxP7CRKMAh33JQW9VKFhubKFDoVuwZUyMJRLUSh9ruHQDf3b2k699AARihm4F3hrtqT5xgX",
  "key23": "3zrti9Rm4dPAZyc9sD37gG71Sq8qRe5a2SfBqXU3xodZzQAQKSeRsSKtA6hYa6YfemDzxDa6qEG7P1Fjc1Ysi1AU",
  "key24": "5CacrGuj1bccfLsgwHTCQXucxVyFBuatre5BAY4XCN4bxXyR4M5YzEMS63TP17mFXE2dkCYxLXzsuAu39kAzFt1U",
  "key25": "2XjCmcbe6PM25YpYmE3Dx1uX3Eu6oNajZswnzVZgbin8qTWGt1qbZM4VXR2ZBUB9Z4T6o6UuBUZveNNbjXwTgfmc",
  "key26": "5Zhkf1VHwQxoJkSzqwpV5wFyAzbyTiCwxBg2gpDus8ugg3TCaW3eZLgXncMCimj5zNxrSYKmPnrz3YSw8RYJ32Hd",
  "key27": "66ECZSrAzPVg2pefT4VXbnzQZaDL3bsuzAwDWzWiSdutZaX58mHZZEboF11H62UffHCvFsd1rjbypHjTGfepUTSG",
  "key28": "4E5oByWXDBA3wC8S2sEDbX9gbTJdMsFnSi9t9wsHewJ8YhP6Ms6vhdvDsU24NHY8cYbJqGQbwwCoNJpv6LPFgwLg",
  "key29": "4HChjUcqsbPVJM47mnJ2FCMPeHKFCn1YmdQejUqdSpLne4fXC8WbfMzAA8dvkjTyNBo1DT2m6x3ErdRXvZxEQaha",
  "key30": "5nNnbgHAuVz5Zxbkunmu1AJoDJPRtD1Brkf7RCMR3qaCr9aeF7DLJM3Qvm8dBQiAaUjEWoGuaY3DxkUCEjGFpQHm",
  "key31": "29PNbBpL9nPMrDjmMjyqzAnDQdW2uQX6SHWBhvxC1ZBgT9R4Z5zen2y9HhGrhyeYXfaHnehy96iyWBxNzxknPcXa",
  "key32": "4gKwtUoDxgJASPEbWKzTJwp1dsTfTPmtDhuwt4nEHbEXBPUMDAhP7FgStXEK9rsXbvhdVnx8ForoYdo7RZ4cC6At",
  "key33": "5K2EtUETwkJC4U49Qk5uU35BHUnaBMVyKhCyismJqjnvcq3nRHaSaYauGUwed8DGVKT9ciNayb6Y5gCGZb4dfFKi",
  "key34": "5QnZhHzSx6JMkgofkWHCpg8XqK7v6oxwtu6XPRaQCmAuNs2g4PWzYKipdXWzdCq3ur4RJ2JPigFtAxY592pBY6dQ",
  "key35": "3WgKgoNLSwUFLedHXgVqVGXtf7vsxqD5mNtLcicvS6ECWmQMZDiZEc9kF2HcDGpnEwMESiM3j14iGynabu2v5Vbq",
  "key36": "iQMi7BSuFZw5NpmN5QPp1hmsxw9y5rE8s6xf6VuwEddDDcLeCa9ESoggMrDncWm9LR4qCbQcSRTUP4CUdrSRL4z",
  "key37": "2C1eSugkSY1cBA24AENWR4ZFH93wuASFAXETBeUsG17yAGbWLXgHw7hgCQSg9CWY6iDkZEzoEWRy3YvGkAknBByy",
  "key38": "2pUF4Vrb4pGMWM3j1bmPAqtTCS48Qqp7ZnckxzUDsKtrCFTJtsqmgmXm56aFQhV34HoNCVuBAJ7gt4wZphpvz3C1",
  "key39": "3tFFQenvk9QnXB4pryTonRSL9NJpBN6tY3Hy1YGyoL2rrwwpFCY16gPtAwr8HF6d3pg3tTWpLZxkScSRwCWwjzcY",
  "key40": "3AXSP7UYqJwZ3u5aJP1TBdeDzzXxdqPashZQM35ScE2CtsNCxUxZAmNhhYjgugbquaig9M7BsfR9TXRrstDF7cv"
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
