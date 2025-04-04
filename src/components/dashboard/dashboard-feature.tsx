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
    "imfQGaZ9dD2zZEA4aiHrcHsku5HgSTU15KU3YUrYihsPPAZqDJuJf1PCBQpsGBY6Dunz6mxPHcvxz59Q8BRvgcY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XWyqe7UP2hsFWg9KAbeuCYGZnqZUzAQj2tsCksgSCLxTd4Hg6kFqrC5xFcPzt5AS1katcec7X2QPAaemZjpeDiJ",
  "key1": "3mWcsheUccWHcXLDi9oAqajTp71xxj6KPHaC3ZFD13rKs17ESZaY2RVxCzik3XA3TceX81poEj9s8v2zmue3covV",
  "key2": "hPwaeWDDw3GtEx1LjrTtXbf2ZKeZJygDBeiBqni1U5vGLbFwWagRemGQ74To2PgAkNDh7rHSAswqbBQjguvdhy7",
  "key3": "58MHnLyzTed5RiHjZQdX4b6b6u2Ufe4ZeE6RgFnXwime9nhy8sdMEnDhCrkqdVdSmMCHdmAp93Xp7DHiL2zrodon",
  "key4": "3hPLzddR2Mjx4ReyyXdUkagsXcMnacz7gUc28rsysoGWkpVtk3Mp47KfwT6kva3gs2owYvCi5YFTguN6yAdvEDGC",
  "key5": "A6Ujv3EXxQWfRfYRtShhEn2tSre2hrhnuByKGPfApRirAzCW2afSPKhcmp1B5yAXBnT4QQTs6ctMv4GdWDcPs3a",
  "key6": "XG3eZN1F51BB1ipTMMw7taAoWqBXkbqrWW2u5BzCfFRtzeykrLwAfCh6DfzLYjSNhzdPub9tFToNU7yraP6wRAg",
  "key7": "3JZdXFMGDbdoRHH5rMnNFEYQEwqMhnY57KTUx4AYkhDGAdsxVAgbXkGsh3RBmBMcrK6ts5mXTcNPyVqra7VkZ8RP",
  "key8": "5tVQ6zFSh2WNNGYLzYs4FKMG4qmo5WiKieXkPyjVYEBax1kkNn3B4AQvb2jhHNvHviKyrX48sL6hzepKHXQAUjDn",
  "key9": "2E1RQpuQwTbV47H4QkRDt55Ez75om8FDSgN3EMoBXPxHr1tpZru1ndYgBqyivv9koCkq2x5rBjdyjDEvzJ7piANq",
  "key10": "5GjGqJpUHcESPTgwBRbc65t5sagqToyEPEpyLxcUwhsZTn1wk9YuHmm6o7CYBk1qTktNZ24aPs38hSfy3XKNBFv6",
  "key11": "nXqy6nw4truq6gFrCnuJnspPdUrFv7ouh4ZGwjWdJQyTBEX7gAQbk2GucFxscdFpNAAGWa5Exc4BGQgWWszcF4X",
  "key12": "5hYqGLx8E43oT1bhnXhYcYejdWbMvDPo9hhon6LF1VGGE142gUgXDECcRpiiDGtYQ4kpmM2Qc2CzFPXjejfdiw4z",
  "key13": "2Qx29DykxLqZBkRYMDzMHGg1aQmJ7oPEwwoYQozhprvhyRKd3txkBNs6DMH3XHaQUPmHp5NNVtrUKEjKfRZ8pmeo",
  "key14": "4JADLJFhC9JsRLL34s92H3PnzPDhivcE5gpc8cBkbqjvSE3PGaTFuw9SSrGhy5gPd8QwRVVk6tT2STFiydRmdbh4",
  "key15": "2jw8ghEDByn19thio9nFu3SBvqNUqgJhuLcZYkUqsxvZG8Xm36HkS9nDQ17xeCP2RjdVA3NUQVHZJtSGMgJ5J5Mp",
  "key16": "2v8uciGxxrPdcTewpAuqhhhNhfEj1nVBBMEVtbqcVAS5psfayQShWYwecQcTVsnp69NAhNJxDKWdLPsYfAZspcz1",
  "key17": "46H9kNnYDmHMtyHJzF99heEz3Jbd7woqzZaSWBVK5FrcShCKESqRWafuoTMfSeV8v3NsvxKJcYiMamQqHnRhnj6a",
  "key18": "2aGmWGmEQsfXYtUYyV2bjazhh2oVYfvz6itJYTT8zvczXNUaizBAHfMVGYnMGNAYL9soEWh3VhcEx9NYsRvd1u4A",
  "key19": "3AkzxgDhGAeveHuyhia7RgYiXhiu5vwKDgLDMJvSjZCbmuNy6wmy9RpGaaaXZasjLMVFYPkJHKTPwW7UcDWp7E8q",
  "key20": "ZAQwHrXojwWcUYwBssxTSGzmax6J7wubXdvrgvmRWsPhYbvTbUSpycqVCf8j6Y9ykNE5s8FqUh6D97Ux5kiWC4i",
  "key21": "u7Vrwz8XbF4MCkNtZiPZcS13U1sGYBybGMc3X45AbVBmHtqeJ2scWAtmC6UUMHBd3XdjFoKsXMLrx9xu1e77C9f",
  "key22": "5JwfbMS5Gv5W5Am4LSV3AXpBEbECFwZLxKtoZzSQCPrNhJ63fHpi8iJzkb16Lut9ydmGQnEm6ST3ByEzr6Kfct5e",
  "key23": "qZnPSty7axMVuZw8Q4wsJyFYf3myMW8mmr4VmeKGTG95xammGZmF2p8Tj2y7QgnFT4YjQ4o4voYygnKU96h4orr",
  "key24": "5G3Z27o5KWsjTo9g1kuTYEeyDov2693tV5TSiaKPnqTXZpF827FWsfA8vk22MF54BUTx3AxiVqiwgqK5dpjkdZYd",
  "key25": "2sEdNYXXvejPYGYUUDD2axzXhaqRLK6xom2r5k2rDQzm2GxqaQQVw8XyxSdPw9DFoN82UXahoJ3QDaaUdtsXqC2J",
  "key26": "2jdwJjKqRvscio5Yi36kn28LRmZX1tAjETkrWztbBSfiA2nvmV2tfEBocQCqmX884Tt8qTC1iU7jR2qu9ou9pD7C",
  "key27": "iP57bBPEQHzEr7idaroi7gSKHxsK2hbJ2WyiDzapeLUa9aLfnDazot7WPZ6f6J6x5REDXio46o3DdLejGBGPtZb",
  "key28": "59GXCtTU7Ry2rc8SqduHHd3JN3vH6FJRN5JB2pjYipo2yYKnwxNjC6FqGtfKiJ3DkXz4RUBPqTXmT5n3KMYfBeoq",
  "key29": "5aAZrfmMMqsdSjhEBWJCEvMRRyLHun2uVxDx4auNTmun8QhzR25HojvAaFxGnrk32wkW4BfmhB7bunyv36GtpDg1",
  "key30": "2T17dGLsnXXj4KrPCr2CeaWF8ASXaeczz7utMsEVB65VZ6hJs8SRZwoi3YQck8n1tWDVuLxkpAyFAXyvj5wwrW7e",
  "key31": "x7PAuK78bA5gc4EYgpsZVrTHNQLuvNVMYo1L6Arc68ZmmVig6BuMWyaiWqVW1Ls7QCdBjpKY9b2H2aQW6aEhSTh",
  "key32": "3Niuib9okjLKczukTQFCxHYFEg7wj7yJPjMmSc4MvNRWf3Z8Ace6Fsqn8Cbq44crqnuZAUyBHdprcjWhymaek6Pe",
  "key33": "2gaq6weusYu1rEwehnZ1JouCX7x8weNakHnU2SBuDsLBzDigjALBKTMVYX9XJfD4nwrUasvVGrrK8mUsteaCkJCS",
  "key34": "4jZc9kqXJQ57xK2KdG574f7SK7JW7NiGEKKnia9RX6P9HkA3WAc5KgMZRiP9UbRbanmXjbNCmc4AXVh32DywBiMo",
  "key35": "2bzBfe5DcprcS1EUX4yALYEG6HRa1H3drXojkLhh2BrA8woHE9BNS542MLa4HK9ukvtN4UgaSNs3YaJnW4CExSXX",
  "key36": "5qjRoaofvc38NRQjrENVysNpJ5G1sDmZUR1QKu1abYKZgJdHEwWGV8DgJrMnpSo7gVqcfARSRFXkfWtKruwVb4kF",
  "key37": "4o7wZCr1beeAoRmzjRT2QPC5hwxaz9auSU5g4vZHpCxFyLW7orkqsWnHqf3favuBPRquai5QTsNSjYggtdqH5d6X",
  "key38": "2Jx6pJVYLsKp9WBxxPaDLESwRg2zU1heYoV1vU7EStTd7UmWAs1XqdFCeQu4qVN2TBRwWnK1oS3UtfngVYoba8eh",
  "key39": "3eQEjFWhZTyf3CZVMHuwEWEU5xjmmN5anVZt7aeSb2LeYse8siKwSXabbwvCMU6jsDzFqn1gSjVik4QZN8Has6ib",
  "key40": "3Lh8dzzK6BfiDzxgCHaPXHuW3ySieaNSmD95an8ZLPo9qS1uY5FaUvNcHpFqaQAUkLxrn4b9zPaHR4GbuSfGyFb2",
  "key41": "rb8KDKeBK58itHTfxEi8ZQ15HpqMTnvxCdq6yxMCXG4w2DhCN3yA3ouZmhnk37T8n6hWmi2cmerizx9i1MBZk3n",
  "key42": "4p14T6rLyQVjxkpZQntx6hjr549NSVeQpZho2CyJdU7hsSsXcj6456JDiQuzZQ5aGUE2BVyw7GDPbe9YsidJBKxH",
  "key43": "4DM7CG4JTQbgbZWTxCdgVe2W559ZxiGN9sYULMmFg6WBQLuiq5U7DRaAdYP9FagEh9NkkpUQ8gT5uLVZqE2dAHjc"
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
