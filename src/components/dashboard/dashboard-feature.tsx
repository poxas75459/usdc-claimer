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
    "3VdrJNJu8CDGJmtYdNW8sHsqnoyzoe3aueDZA9FbgH2iV5L1Ao8At7xgrZW4KiNY9HH2r9nawJxKyz8DhDbf2K2U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KZdzqgk25cCqYzr1sc1EFQL94QoD7fMEmRECANVaR1N5mVQBJ2GRFNwm2QL58TZp5eYuV1cFDxmucbd8hRgXwvc",
  "key1": "4AEUxdXpSy8LTeAV8iQDacvNN9KRpTsL6J3JjHL5EoqgsnWcbjqgXaijD39Buo9chCtxfARKQXmsmMnP4syeEAfn",
  "key2": "BfDiTn8yqWnPw6xc7dXF5aWyVhXiKKTfuotSfapxRxRvxLshFTzZZvxCeQdTdEzUnhuSMrDgKLhwe725eyTKDDH",
  "key3": "2t5RYPXptide6uPj57tpwmrkFfYKxvB4T5DLAsaGZ4Tagi9QQpGv4SGNosZUdc1JVzeJCXWkr9bSq2n5SzkKigMm",
  "key4": "eCPc5Yw6r2MnjbT4Dcy6ABLaiCxUMZR5yxHZB73fCGjfgN9bLQKS1AfcD9ABVeufNbWneVGYGAZ1zpyCkGy5tUS",
  "key5": "2Pa1mM8Sghy7MDWDjkguFyWcQYNejUP4HXtfbTuXtPuWRF6ZFbJiQT4EXVfU7iVSX388gh7kJyDocMKNi49resCF",
  "key6": "3Wzq5WqKxhkfFa1CCkSY1Hs8kzKZ1nU1ZeZYSLrnNnGFqytZBqXKxP2pGpoWiwtABXWrKJe9dFMPg7xx7avRsgPu",
  "key7": "2n2HAygwsaVhada2gsrQonkwR8NFxsEHwL5x1rvQ9Q2JvgogTupAmrYgFBoaQcUUNiDDZf73wyc8FSyP9x57ZLLT",
  "key8": "WjQf1Uhs7QihyNrksZVK6ws7mvSz7T9atidwEuYvaHbTVob41nye3vu9yWbKRTssgTUDojMjtVETD2ynxjq8vKQ",
  "key9": "29kqpzn6tWdTQR4ZC45Xhu3PWikU7asr7TG9PougfXGARAkc2jDvYiGdQmExuxRfY3xdLRKHo6GLrTvvzN44DAnj",
  "key10": "3xkbAaVPB3utppUzMWoz481Y2ySgLr7Ri8R489wAkskTABuNdqS7DNU9gvkKdVLVJj899zQZ79mxRMhkR3hTix3B",
  "key11": "4qWjWwF8gRu7moCmn5SYAGvbKMEwCeHY6uAVggjxRWTkUMtajVPMn25PRnBUx3c3YrZZJdoQyeby6bYVSfLWinCB",
  "key12": "5d4MRPgBuj1q4iMHRoe7EBuf8hXzVswJAcs7PmHiypQAFA9JNvDh4eCoE1ekcVuHajw9SaQGASnPfwrWXFbkAPJU",
  "key13": "3CKWDFbwbQwZaNDkbom9wwNdqhXSn7oLQmhcR7mgAqkLkYAZZScizfdL7HcwGa9rfe3xrzJmmkxW1YFdg4ga4Tuh",
  "key14": "4iGLdxqJDeKCQ5Pv9aASqfgY1wfPV8Vb7bjpcuri6qirRwNJkqYr3EWm54qvaSxAvqMMwpW4Mnm5wSW9BXWFohWE",
  "key15": "5F82q1T11zmrUt3MC6yEy6q2tXZtB9ha6FX1mWKjtQMuYj4DZmeKGvssyBD5EM8nCFjPc4gfSWSUMdaBHCUdvWoj",
  "key16": "4K2p4c9xVxvRgBNThUgaGfhUCqyYYyPfTwLbbvmwgnSFuHFYgaS7h7Ud5CBoAiY1GfZKfD41VAShABgFv2Vi9bgk",
  "key17": "6JtZmBRb75TNX5Ef9HPWmk9CeUbtG4BWrtVU25vtGC83CW1bCWWtfvDxPttRtyRZjGQve8eCgQHF4qJbraw3YBg",
  "key18": "33TVqDKzoKdNf4BPhtnVKRgoaP8Ak7aQCs9dyo639jVfw1LKNEgmF2xTXn2WctPM7ALPqnK2BKpHVoU1tPHNnvoG",
  "key19": "3u8VcygBGhWQodWeA1qDbPCnGJnDWDWBMaL4fdNUTa7XdNGZVvnmf5y4DjF5hLveWxtQUR11XpZ1PouKNzEYMmAq",
  "key20": "4WtgFgnty4cK9KfXQp4FQRiwTi88pRqNNXsgSf1U6nK5jrowt8kV3jit8wkStkhkmsFPoCxzc1t3dewRABLrdMUU",
  "key21": "ZNYGcSKENx6b8SVNCGaKn9jL4gA9yZDdamfaSRXGrmndxv53NvJgbAnvAWMNiKU6xT4YXa4UYAwd7PMhVWK9PJz",
  "key22": "9L4y8ojoF3XsAFv2qcY6nisgZaqtWuHF1uS4KmLtyURq5qX9g3NcUYGNcLo47aFeCq7HwzQUNo4HXNQCNwavoQM",
  "key23": "2K1qSbqWMDkky5ZPR3LBufNR2SH78JJJwe1MUXqANKB4RooZ4DW8b6z5WUFbGwwb7DmXpHD8CqbKGS5ueseXuFW",
  "key24": "2S33EyoZ8nZy36Uxcaxd4WMHYndt6Rc8KBzheNnzdMpmVn4XHPAzsJxK4kEB25QGnyR2m8kP8JE9B3s7GALRJmoy",
  "key25": "2Hmtaaj95dQm9WuJNfWZGscAHoDvZm98DVzk6cahLvt2dwnJy9HnbTSGV4D5Y2PTVkBGtRHPiMrc4Q6eetyZiq1B",
  "key26": "3y7PR3dHrUuBkpWsxefuJ4fThgnYabNE7DWY9UEfsH4tvNwDoJo29iJowtkUPSmK7aXsWmhYjuDx26NpazUxF2N2",
  "key27": "5MTDGugdhFpSNwtPovoKQTG27peTCcN89eurw3o3N1C44AVixmmjSXk2gpwmKPDG4BeYqBuJmciUrBqHApnk2m8",
  "key28": "5zkyPbMXT6UZgaTUhbMmcM3z68BaPSwTRCcY2Yg9DcodG7ZC2V97YfhwCBNqp6qqwQwmGav75CVBi8ep8mAQxMKc",
  "key29": "5Bnkocuuwm1aA8LV53mnxKcwxoiYMQRWknwAk9SzkSJGrZx7vNCWSJfqEHHjshjHHP2PY3SujofqgqM6Sf338mXt",
  "key30": "63MhigaaoGSAkEjVzVHk1dLMgbnuDdeqjmatgCWd1nhPPVr4UKrn5a9RXbiS9T2A5yHoXuBCTRjDQUeMYuKgALdV"
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
