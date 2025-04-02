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
    "4PNbKKZp4Cfz6WBAH2hmLM8zHbGpDEkfbrtLcQcVoGB1CEQ3CRna7iHc5dvkJMQ7Bs1cefMYf1hfCHA5jMCeuY9j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21QWWekoaWVHtkczxeZJxzXJNauj3LZ8GSSLv67abfdMBxMXn2LEWJTtXHtknKFK4N5uywvehwjSLjn2Pev6RB1F",
  "key1": "3hiTgN6NiNXSuQfBQgKexAQqqPDecY18vb9KfLaTe339P5DRWngyTQ3ciYAfJAUGgb12UK4KncsSiouWXZNorKMT",
  "key2": "AjNnLwDiF1CJRuqqmzj4BjTjUtcxFEXve5LYFDrua3n58pERyJm7pyWgK7c2JN6LvmLi4XdTvxQpLPk595Gk619",
  "key3": "5SopRchw2RgV4D4oX2JjjSHbkSRw2k5eq5by2nFEtP4z8ojmTFUAxFRYnRecwgd9xwUJZRxjfGE3MUN6poBNioM1",
  "key4": "mw7hStSYHV72CtKYyKf1jV34qAJV3TSfEgrwMX5EwY8hMDUBBV24dU5nxXQwUzh7iFa2nNQsAyBs3n2i7FLkmXq",
  "key5": "5Nu5HT3F46BgRn7zY6tNZ5Yx7EHr3XXnvNQvk89xgnsDdAF8DXTwNgqLMgumdB7UgftgwZ33EBUAqyr14noLnNXW",
  "key6": "3WFPHT8sJcvBZqUdwuB959WDafhb2xnLq5fZmAgHVCwvRcfkNsmLGUL9igAEikrNww5fNRXCtCEuFNxLE73xUMCx",
  "key7": "61y4Q1eSwYbR7JYPhSxFfayeQ3tLepUTJLatbh6YyDpjF49ZyAVvNokoWVFiNhA8vWLv6dni8knnFvvwKus5rRSU",
  "key8": "5wAcZb1mwxL2eSvGt5A49QhrVpRFb5yTrUFGV9oUr2jMCftBZhX1UX8BF7JdJKEzaRgxAzTrNzwP1RQZmN48gFip",
  "key9": "5LTi6EXpk2sJFiL39PjKpPfBdz2SaTV94MtsVPfZM32AUywR4BpBkZTgbY2DYqKTxM7EcCNLYJS9cfKrCoESovpR",
  "key10": "5TG1yHgubTV3nrAt1wtZiFhFTDUXtnsE2GKFUC3RcjGdQXv1gt5nVpCEPHe8LHWLUNKsKJGG1cZcBR3Naw8G4LKt",
  "key11": "3rXDhpJsZVzpfwaGHD56prutAr7z8HZMpEos92jUyWMni64zaSA4srUddWgkBX4ieeoj4zVi89B2AcQct8w44BmE",
  "key12": "3KaRNQce626RuziFF3rLRQ1qfEKTtc4vVWoCUrGo6SFL78Ur8z6NZhHsbm4H8V8cNMzaALogHp2YGPei9BJXXcrE",
  "key13": "5m31MtVFmXddcV2f4AdFB3VWKUW5c7SvFNcdPGTUPHBr7fyc7fvNJLk4iU9AMiUikkV5g6GLGrryqiTdGx3rXdDm",
  "key14": "zgnZoHCUibEdvvWvJ4HPWjhMV3VzZU649yWzZzMgueLZFi61cHmZfoXXzcx8rV5hNKvhdJP5sVavmFArZkNbS9r",
  "key15": "4cB7xJRgaSB68BVLVnYbPEjxrinCeZmMLWyaJgnp9wWq8o2ys4GqkZvDCfX8dKZEwscgQT1eUPatv1ca5yj3oAvN",
  "key16": "3fZub4x7fZ12sVH5f1K3vy7XFb1qnuKzTWCs1fpgx6yGNXEoPoKqFwDSJMUToJGozJxagNzEqgWs1Gx8ZG3qST8U",
  "key17": "5pNaE8ydKwbiQZ9pVt78m2v3t59tjV8GuaoWxYeZ6G4rDZiHSGY5a3nMddK8hAWc49eThNBHXTwq5BRUj45HzmEU",
  "key18": "L875p1QP3DkU6tfNAdVgv8iEFXmDMik1Te9ctfmweTEJDDFUPsGVP3ujFxxR3CvcEnMDQBJWrSg1ntoDkSHkmXd",
  "key19": "UToc7Bp6J3R9hGFDLM8UfznaXJ6At31BcKdH4yTFdDiap6x2afB1mdj9mqWmFCijTm6adqgEAvrXUrFgFX1GLEY",
  "key20": "7B1H2eTP9H7bikPJtyRfnr8y4tYSkbEqvnRjumihN6ButbeQT7PA5mAqFXkHcaLCfzSzbMqP9X1iMhoATKZAfAM",
  "key21": "2MPoCnczyytKjG6B8cPGALC5GCmRBrzuGWNuSVJFhibXw9sWGq6JvLmoUcsqAwZFGFdgLpecAZXWFMCLcSxYGcBV",
  "key22": "5x9ngzQ2qyWvY6VnAMakiq1cv8QC6T6frQsopNcGKqmzB9khGjGjjRJN7Tz6MD2YWqJDh1q8MMaZLgHpFHb9Mugk",
  "key23": "3vATyctHRkRtaGJnUgHr5QAmRFmCTf7ugpoWxg4Dih3Lfzc2hXicg7MVEw6VkBRo77YmPADtkxyxRgKsB6pNfPWm",
  "key24": "29YfcTxiKr4HuYxpUdy9grBJqseHnXaN3XEj2Y1hySDGz1oW4Aj1FWzNf6Y9yzVqzAtLnLoxDqrJ1qsVBAR5qcmX",
  "key25": "2ReJoRzAisXcMc4nhkZPiVXSUiWN3KBA2LhSh8Rz7MPDFCjuFrbjD6bh8V4WmoPQvob1MyCCVwWwVJMMBZJg6D9u",
  "key26": "2kuk9fkKs2DmmRL3z4fs94EeRn3PDP1kq9mF775ALYYDiUWyWUy4bxydesHrG6d2BZaZCzFeAevSdMtsYh9G7buB",
  "key27": "5jR3WUD6XutVKxQkFVZvuhPMT6dR3w9ct2umzGAph9yrnkLWvS2PysnTxqFgYzbVFokmCvWEmNj6QzdTZJgPQNaW",
  "key28": "26Twhg66DEfC6V8gbpFmsSXSfrvZNfaVVPKwwDxpeWaiq6iRw6rhipvkdQgo7ys6xZj9U9MVxZ1PNTmjW7PQQSAm",
  "key29": "sbrztXjgT5Wy5yYteZjBxxMjnvVdr6NCTysZAsdE4DYE5JLvrvn3FG6w1cshn5Y52dNwKxpAYRhXjuB8G7HX8qp",
  "key30": "jrHGqxNCkPhaqF7r5mvgfqEhywnFSKVocH9jmeki7uiCbxWraZMdfHyKNTy55hXJcGtWrhfswsPRdRxHBnZgh9X",
  "key31": "4MSUKw9WhEPGuB1nDPzTJLidYNLt1rRQp4Up3g5Q6i4DzyZYGx9FqkHCvtvcxLoKq2KagY8Zwj5ghmJEqPjuSFv3",
  "key32": "3Q5fDJ6LQ1QFtJnkMoeSJPKK9ExRK7dsFwNB57eJoj24zwmyUFiWaygvW4ZQ7xJZ3AuDgwosd21C7VXycgf79akw",
  "key33": "bZb3A2svbfyDzJ2vB3t8BrsbGcqaHwfBeKqTpbDhLFfwQ3CMQW5zA318aNA24Bw3K9pLVc6oafyzrtTgfN4tJ6z",
  "key34": "3cSigVrxNB32Hm4e5tioAjdP8RxFCUtUHfrmNMkMFaPYd4EJemSHL3xZqGC56bWVE7ohwKsAoUkyQWXMwDu45LCG",
  "key35": "EbV86qCKqmj7kDdxZaXjBK7ow3X78VzshGjmrKcHdbYJgydRQvjSpWHYnX1w6n557us4VmLBzy7bP4HgdsFF4hX",
  "key36": "3wopQg97hkim6tkmVe2MdsLisPCqwWGSZPhGLyqMGomNH7JegVPvUodAKvcK1sa3iAJqGT8CYa63zFs1MCsvFehJ",
  "key37": "2vNkaXx2FpNZTnZUrWVJ6wDPToFzmByxsdrahTUDX64QzTbM4Uiy6P4XRdCK2u5pDTcfMuquPVo4m7mTkFK1WsuL",
  "key38": "2ak5xVKJyyGLVht7Ky5HLQjKM9BHXAotgzpdN2jroSW7CgNQ1a4DwrJ9b2vsSMmjBR9YaNwJ6qgDnTu1ZzgvtkJT",
  "key39": "5EVr32By1CkgnX2M5kVhUxMnhpZoWzU6E42oHMwYwRX5MUPtNKHRMWPdaWCvpgUyN3hDPhB4JUe2vLtR2sPG7Xm8",
  "key40": "2keBhsYiZoeVbvDtLVP1ZcrkdnJpJNLVMNA8S82gHFKayAPFNNUyqEgSXUgA1166CBWAGdfzDWyGuzXtH7wj48Qy",
  "key41": "5Npi9SGbd4nWqGA2FeE5A3iNeyTseDJkWNJrcdw1393gobnWGwNgokhzkYYHP6rENAHe6ADppUr8Mb83ec1Y593E",
  "key42": "5S6owGcqa1JUSTKLyz9mpBUynpcfmSo62xbYnpbkwn2hxJQLr8xQJb9CLKrqUxaa4FTBRvSuB76LByMJ7tj2Xd5Q",
  "key43": "3bxYddHAPXTBaE3zv51584LmGTMge59fBEgFHS4oZ31UPEa2jGXR6nrjHwXEsd7xvcJmBcCjs641zBtCfR2bKggr",
  "key44": "4LLSUF4ufdkhn8dmkjoidBD156zTscrBLxbE5gB1GzYwFQa9yqQNCgnXKHTZhqJrmFjA4aFSba3mik6ffTM3UJ4b",
  "key45": "hmL4VtM1vMtZp8RkPy1ymUpuymKUGffQyLjc7CAqkbzMUsGQaHeSPm4upNMJK49mGJvcGC1GoJCVjDLx96ycx3s",
  "key46": "5AS3m275XGVP9Dw1gi78pJc2F8MU1NFJ9Fu2zpPdTQEKgpVMk3h6dxvWS1AKFC6VGj8hv38uotssCwGH7iuU3PhT"
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
