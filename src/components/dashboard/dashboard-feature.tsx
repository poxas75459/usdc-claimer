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
    "2aH36wMr7TiFLbSGsQTAvUN51vdgwqKjku82wxzD983vWe65MyZKsxQ45EhFSS4fhFkYA3d5Nyfm8Bxh8ALpvCH4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zY4kzQfcgcgbtKBeDr2snybr6qRYi8vDwj528Zy5yCCkxCcj4rD2kALewqGKNCFmh23ejU8NUJgF4ZTQxb7npLV",
  "key1": "3YjT7DXAdpy2xf6et8WhwyX4azKmGaopvDFhVqo4ifEo6XacTah5qQnS3mwENMLQvpSszUE2DgM9k5ekYCXw14a5",
  "key2": "2uVAMry1B9tLVjTu9upeSainjtuDspTJitEfywmQSDEi5XT7o6V1XKrvkrJ1TghNtHvD8kydnJn15XAPLZaTPKdm",
  "key3": "2sfJ8t9ANjNe3LufTiWGWUqMFz75owDQ5wNCyjGAsPR4fHNYWLJQozqvpN4gytXyHcR1JaGYQKQ3rCYWcw8V6R8J",
  "key4": "4YkgRbY7LJhcM3qGLQzyHA3ts75FqkpDR1ZkrCJGP7QP2mUWpPXhU15nb6y6e2RThu2YU5F6wc44NYCVs2xTzMMS",
  "key5": "4PaMpXNkuvPyqmT8drLTPFN9mZ5ZDVyAdgutpxDiHgZuQ4toxVQU1HxV8pCsFUBqS31znDMa4bYw5awth6w1TS1q",
  "key6": "5vccjGHScg5rhMuHLcyYvF24UxNDL6yB53W8m4wrDHSacAVxBiCTdk1syh1yAGbYGcunKTmrN6c6Y96YqD2owyyP",
  "key7": "2SHSR5dVoptPdtT46VimGFcp1sMGBPDHb5WufYpUtsm7EdBicNcxY249WuYJRmG3H33Lqo1MrgJjUQoRMT37MxD5",
  "key8": "5EpibbWRkB4y8i354rnRdSZDcBFbnpVResctXvX87Fo5pHH6UJZ5itdAsDF1HmiUnvt1xkmGfzH29T6NNJ1ZPf1H",
  "key9": "489fboSSPtvsamsHG2WdruJUMUQcBqEB2YPLvZJg4dRdnmEf9WDWsBKcKYhnzBb1khuDD3Hak6K9hKi2DT8LJ6jW",
  "key10": "4SunFMWWDfWi1Fon327WS3Zhb25TQFusKZ8RSGJaAnHnRnQppzMsxGkfLBZkcGG7WMCaihyNyfXTukZ3cefwA6tx",
  "key11": "2ovwYukckvARGsZKyXsMzPCv96P8PE3jjM9B7L5c4GcDBHh6zH1cEaveQs7Xxb9LGUoMZFQrGAvxFaiLhhJenjxR",
  "key12": "3sVBfF8CokF3mXN6143X5QpwsxUJqkuWyaQTYTRfG3kcpTiNtsbHpJoK6cD7x64oHUDkywsYUPszaLQH2QyBKfML",
  "key13": "4hwwSSXcMyKc1rPN6Pneoeh4ZXAbhMdYePZAb6i2caG1QRjHRWMAt63CvqrjDDvEb5gDNCB5skZEhmoZUraomHp4",
  "key14": "4ELFSL8Nrqw4ikaUXJiVBuWs1VSVqAvvFsZ8hxAzHfveYdB2mfgA8Vk19pqfG45UkinPADahAfgTtZrv3KC7cjyU",
  "key15": "2bPGBXzvJzGSgM4wF2KCVAwqB9yCiYgAF82U29QmxEdKBsg7WiJBiENbk2DLpyCK4CppVS9c3Zr7wZExT2cMswFE",
  "key16": "3vHEk7aSH3BXum3QwGuCVhQa5CCodFNG6a4ZbGW1MVq3ZqBqJ4B7e38ouqFqyHPQNFieWwoM9UcYCLfwuK7soirB",
  "key17": "46ezziyFGs5vdZ8GxwDApGPG4EwWbSBYoptQuQwYcZL8p3cSAQpVu7z37Ksj3qfDHabMunrM8tAPnPVBymXemgYd",
  "key18": "283umMcDNrTCvq3Jee6U1Y63f2rmgnxxwMmaUtRt5TQcDcgEgyUXeqhZ82rFS5nSC4TDFxnyevZzPjocBTnVHFbj",
  "key19": "Gtjew46RwPouB96NZSC8BuKCgXVJmFTXJdSbdPw78aDWs25PN8p7h9o3gPMtW3JRa2Rb39urKtrrdvPp5RGP6Kh",
  "key20": "kppNmqCw7yKTE1ghJK7U8L13aVNEu1pJ5iigkRA8MQANDcvBuvhGkUyZZNM8SCUYHkpYhDsmBrpu1a3WDixjYj1",
  "key21": "5KaDeVAuSZ4ShTYWQhJHCcR6LsL556kbYLuZpUGj7y8YL89YizAT4tpqx5ijP4YcVptt7aBAd1v3ooMWCcH9q3Nu",
  "key22": "5x6wSyDR8r7deJaXWxefWc6HvsE3j2SJX8A46iPxCW6hnEaG2cKSC81UfBEQHcgmyCvTNYRgVX42RK81vLCDkkX6",
  "key23": "JmnovEkistr2qDgsiZThf8ATbTCabnw5EiM6TWqSS116o3pS8LzvNVk3g8ZNjKqdDhmVcBLmJSLZMp6A66JR4SU",
  "key24": "5oXLcAbjATYNswvif7KfUsvK4cxo3n5qAzT4pfMP2eK9RZ1gD4bVJR2WejNptTzvGWitMpADmfKmN2rVNBjjJ66C",
  "key25": "2M64dYxtUm6eS9hFJUQDHuV3s1G6VA6Rpz9cHR4zhnxyWrfD7pTy1WqWenQYuNow8d8NegJj2P6XhUM18xancrFL",
  "key26": "S3nhzE8rc8PrLDqRjkXL2Nq3p8QEA3YmQQxC5iyFSfVBF1nD83aVQFBcwZkGBvDoK6YZJLsSVbz5mfBFFMp1cak",
  "key27": "3CUwisEe2TTU4W6WT6bKTKbVXqKwrNVwHxkGxiYdQ5DFFtuaxHKk1e5uf9MA82Z45BdRtG8hSVo9sec6qavV1gY8",
  "key28": "52GVmaz1CVZFxbKjB6EMMCXqXk4VeYSveRouZB1HUgQ8876yTvhUbirqC5bqk5jJnmUm3H6sAunY59y2p517DJL8",
  "key29": "X8rTTz8wbArr5ZFmaAeaw21JnYTqGe5N2RXL8kUdEWco3KFLDsTW9i65rZ5mtRTd9qN9Nce1mvNkXBUCBS7WNCM",
  "key30": "3vSaz6GjtY83KnmZ9ct2m1h2owJPndbqx4mP5aoDTHxRYj5DZVLF6Z2LGLZqgnxjWRUqPvqvEuUyaRaeU89jsX8h",
  "key31": "5STEeQ8LnKMnD3GPwTAifZdF6cN13xPDzURSMbv9LTHReLzcTZKi6PQGbD81SH9nChyWzXK4kM6CZXVQy4fb3Dp6",
  "key32": "5dmNw2z2XMaddC4ppUR1iFoMcQcgjNCAoRGSAMt4i7UhzYSBFQf3Htr6XRUTzptK6hXb1cFqKbmFt48QN8dmzFqB",
  "key33": "qPjPpGiA5EuwZxhVRc6Shpy6Ck9jVtrGSaYULe6oJwTEVKSLr4cuf2yAos2Du8Nxw9mNjFuiUk9kirzDCt667ay",
  "key34": "3Pee1Noj1gtMCayCHeDaEi2e5HBD8e8AakiiRkGF1BeSNzRq1m7yaGyM84izTDXDAiKFXyiwhjwcjpou9kLVGmLi",
  "key35": "5RMX8ufgtpFt9SFpoQM1AFTkTALcykaXQypk49xJdnS7Abj5Gf4aKvvXNcarqgwNUbK68fiNHSREPnj5nuqLoHGv",
  "key36": "5hjTwDZCJe48TsqiiABz3zwPTWjN5wCC9w3V5eswqf7DyqrqAZvqviU4y4XN88NKAKPShtQjhEJBeEyxaRBFwJBz",
  "key37": "2UCi9X9nWVExn4ZEqjVSJw289ZfpVto3LcmXWd9mywgmCBZgsoMZgoqZZcXdWKeij6C7vvkCPnXa4XNZZ6upN6HQ",
  "key38": "5pMuqFipCXPp55B9y2YDMB9jVPzHtuSviXRBvxNW8ykGkWFUjqG6jiT2hR1G1R5Tcpjb4BAyBdUKD9MQYzDptPwo"
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
