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
    "538vmBDePSyo733ykZRhkbuQqSF4qLjYzePeStQ5NTkmwGKUcSvdcAUTrD41NnXsaK9pHuwVVwzVgWsG8pAFnxs4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hEHcqmDZn96YtLy5vWVjvp8Yfs5bLNFe7AzemgrGVduMhefnPjSYAXsZrbzAhxHnJeet5BsCFZaTGKjfmNZoc1A",
  "key1": "49R4ungF9udw1bagzogXwv5VAdNv2GvwfiCB7cZmQdBZCDeQ98StWDZ8KZUPZ8CPDquqVS7Ad5oSMUrJH1z9Rk46",
  "key2": "3AgVywjP6vvx8ZAvTD7avZNJkK68G3cmNUcUu2dSF1UvhsogQPwDzyZ5YpYJ5KthWUoiofQHEjduPLMTzgcmJua4",
  "key3": "4kbj5Fc7KgooK3pdfS3XJrajC6bjH7qgZExxmNmCTHvUFjpC9ByUtRNnD2mRaySwSKL1hm6DaHNnRaPUee6Hh3vi",
  "key4": "3wEnULstSAJUinpaQQmhL6pA4kEE7YmJfj4nnTihXAJXUsaCq1f7QFxwE86XreP8NbLAnjUaNECvMDVg8ihs8QJL",
  "key5": "2PppMkxDTfdESCjU8XkHxaCAaMAZVNCzsYHKP1Hp3RDyf9zzsYsoVQV8TtU5w3Z4AN1QKKJdArHsT4T5BhJQEaEV",
  "key6": "3cpoCSFJZT939bwJtLwWjhRmMJb9j6A1jdKmLygkoCHnVTcct5P8Wwn4DMB5KJ47EQSX38MJF6Hy8x5sjuPaQhYJ",
  "key7": "9tv9WV54pUxhyamYG4t62dEfjHUxmgXnszDKZKrL38wGsckqQHSQaWLdwieUYNcZiJroAsucih6c3MxkdzjoPZM",
  "key8": "4JC3vSBs6Xj9HJPVZGv81xYiYnxFwbm75F24T7wxAois5PBp9cK4Y167ShUPXYz6sRrLd8w2BeJBn5qwJMESfdjh",
  "key9": "3rGQ2qTHA8VBRkGduPWRkLU567RYdFPVSF77fW84a5bb6KJvDKJ8H5FjeLRumSHvri19eVkCdfgfQscXFMTg54yH",
  "key10": "4aCXAbJwhRuNH2hRcFbDgQ7qTHN6zegMbkaws5voYsADsZzc7nwC31VpA16hcGCj6LGFeRddTP9q3iaJ65jF1Sdf",
  "key11": "44HVrMxtNs7QsWEQWipp9DsbnawJ3Yg28jAjd7JiUcnmGvrctG3pcAw3TRo8bC2RuE3b7QeXShG3chmvugTYfnG4",
  "key12": "GnnWKicf2sArvRpvSFpeSWBRvMh7uyQtVXwKAA6m3LtBeLkCfCnCJXPuToNKGHeTrsgSuzqHQmVd42rXP7bzHT2",
  "key13": "49aWG7aqJBtbtsRMNFrdrBDB8LzR3Q5eTXsdtxiLAs7c8vgq1wEjCbgQfeK2wuCvYaNkGCswL1d3F7ggrbWmMFtc",
  "key14": "3m35aDGu5w1kuZZvW8UQR1eXTBfY5AWYg48MJYLUzZ44BRbGLxuTFqmfiubFdRZeSGJJnJyTGXgV2M4vZ6zrqRiA",
  "key15": "ov6QWJEvzcsnyZBp47ho55XjFu96mZRhVdxmzJ2FuPxnEL16ie4MofS74knhFFQmmo1LC2o8BdmeTGtj7hSUTik",
  "key16": "3mBTmHhMPAqDW24z95mbQeznc6ojNSLUdCYs8ZXiXZdfjfP5BxqiAoRmqo1ydssdfAZ1PQxBp2WLDQV7j3JWUvJT",
  "key17": "5PedJLfXXE1jgh6EGDqiQou5h93ugj7ow27QpZisz7b38NaR6eoeNf5qr9PmPkUuFJ7qv9XRY2qvamq4gxhU3dPs",
  "key18": "3wdtLPkdxHgEC6oJdyutVkS8UMTGbF9cyr5jQacYj644hJiCQQdLkoJtNRsD3mELk1dXHvnm7AT2r15U2ADZyAyG",
  "key19": "3c6UVAL7hG82Fj3v5cp95G2gRhQeEZL4uCUPm4NqsJN2KtY1Hyh1hd5vZhLuC5e23i35aBnWaWaj6M4fP6CENHaH",
  "key20": "5KGBpjr1E4i8V2g8UKGiNgho5je1YU5uq1g9s3oxAt4sX94FmXwSkiSrg3v431LwLrMwXSsmMP2aazzuJxsetYdS",
  "key21": "3dYKrLoMXnD9iA9aWCzQ9QnRxBnvt6iJGG2cdmq8sN5LVrhTqUVf2RvPFa9vsxsdPJbDGh121z83c3jnAXjGtC48",
  "key22": "43EoTNrK883cZm35CcqjJtih3YWLe6m2gAkgKjt7whc8xFCc5d4cWz2tp28DMry2u4u9L2PoZ8SKyytbuHjJiFNy",
  "key23": "2ayikZUH53PVVgKEDbetBoqG2PrMC3avxkfiHjGMR1a3NfUHctZCzrBMRi6NNff7BZnbgwWgqAU9PQBWuVdPA2aC",
  "key24": "64cpMjirZuyBSRpUeeZMcz2EnZTsLCfF2W4FHpw2tK6vzQVe2PVVrGBMZLrW4Hz36NwkUwZNU2kYrjqGyH2Y9xPs",
  "key25": "2zLhNmRJKgRKdjK9SYBnSxJVK7XLq3rkMhWqiVXXiEZRWkWXeq6UQcDNpe95Br3R8BFzcDF7zfhGwtxp6C9aDjsg",
  "key26": "2qGL7nMSb991CkrtkEehXiw35QWBZtz3ib18rdaF2CtCvRjwwDi52vKEJr66kwA8cs7PtERjiRwRtDGnXQ653xNR",
  "key27": "214tJ2Ff5oq9oJd5sophnrkMLsHa6aPTmiRuoaSM4MyMGftayZsVqsxMUFpFnaCTUrqYkwrZUvQfk8heUUEaFt3S",
  "key28": "CCwWUq1QZ8qD7dVEJp5A9FLiB6GWmTfC7PemXodUAcMv5domL4o7kr5CqBAVHaEnQmxWeAvydWxxrkd7AU8UaEq",
  "key29": "4Cy7mWPv2Z13tW2hU2FpSRyczBm5JhapDYJcBwChcERdS4gK15DPEt4osignPKnq8kFguMUPiTupzKR8bPwMKrTu",
  "key30": "4chWb5SCs1DckF3GDQt1jNLaojJLXwEzZUQFRDBbEPxuufE3YnBtwzrpiEiW3qE9k6J4RpXY2smGPaFuyu4rbBrg",
  "key31": "3r9a48dbpbwZCdqhKYqqFnwJY35KUPRjc2784W3cRr1CXhhEhFYSYwy9RmopJhJ9xBTk1H1hiTSpHaLcmQf5FxYs",
  "key32": "61hitQLPGQV1ZVU44ACvKQqXoEnsW41THsRZ12LdcbCNhn3BT1YF4rCANaYJozkFWKYDrmyD6XZ3ZBnsH4XW2Ce4",
  "key33": "dS8E6i7ifwyEi9jmD1SfVJAqFcMRuoy7SVtV7WFKZRHp9JdFVq18mP9Jk4Pjhc4pRLALh434XygHaS9ha15ehhh",
  "key34": "44q4pwhDiVRgk4HQ2fWTgCDcdWSKBpgKa9hEeaYsg7jcvHa1xULJQduaJMTSRGaTDnWjBrmWKBR7bQUCj7XscEmh",
  "key35": "2X2xW82vkHyBcFQkpkPffcAx2osJnMdTjygMgdDQyJ6zypBX9kuvyiN5KSZxsWocPxtGFeGKQutSRXxzhJ6YMmps",
  "key36": "5jJ6j76wEyXAYrCEigg9Sq7B3NL87DXzUh7mk1rYNUBDRCWphaegKmiTcmSYzyfVMvHW3pw8C1EsL6art7gYgRQB",
  "key37": "4ynoSBeUs1jKejVAV8Df42pa7BDuXmFwFPseN4jYrDvvaLNR79Kv9S4pLbQ4xkP91XHWDRriETFFKuDufHV2gjHV",
  "key38": "25Tbdtv1u5tw9X7otm9p9YkMAmZ2dY15oEtcrqhnfFa8NpmwqVWM11F1sQGTXLynZWjN68i287Z4ct6ZHWXL6qwQ",
  "key39": "5fXQ1RxDm7G8KrL7eYTKpxmWWQ8PurK9AHfQPVT5Gv2YRU9Y1vTBWxFN2pxqZJX9ktD1H8LRh3PXn38Yf5a9FSHq",
  "key40": "32BWyqkHrX7dvMSpasm34FJbdAAREFbXbNFoSoDo7Vp7MzDDY4QPXAQjXpprERp8aeodHPMfwZFi6W48Q1tm9wv4",
  "key41": "4TVQa2YKCLdFuuZb7iTRmgbzP2ACBLdGEiEHAerDAdcqxBeGzJzdvNw2rF4W57ChX3aLShQf6Uks2QRJg8VG1u2z"
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
