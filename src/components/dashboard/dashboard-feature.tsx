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
    "3JWQsKkCmz1WwBPqZ7uUWUvZA7QZfTFYHhBUwi2Stj4gb4fdCCa9yV5dBDs1q56gs5B2Ap7zBodCoFqEJHgNP5UR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vGy7TAf7zBMwQjJnGvaxRJYSR3rFKbmoZXqYfof2JS3qBTwzWTkJDtbgXW9CpGTKXC3h7n8minP7rtF3D4ofC1e",
  "key1": "63uhp2pC6zCGoqZAEtjXRV7bQGgQ2pStPxVB5sjYMieK1p9dLSkm5w6v1rZjGkSNbncTXuhhPx5rsYRNfULwn76S",
  "key2": "4iw39kau3XC2yvU5x8T5dGndzLfQDLUX7Hyghx7HKYLCJxTuM8QAuJ6YJExA5wyGG4mpdgWd24nQZBv5qybwDYTX",
  "key3": "3XanojiQJTWy2TiwuukeJPMN2bpLV8cTUhhXJYtygtiME2uXT3gNeTETQNBMYdpvgxySmYsisTwq9uNtkvND5AC8",
  "key4": "3kc4Vefe8NDsPwr9W72vody6D2fLupa8RTnv54LycWgTEYqCcaqjPVeiZXTZjZJa69zFxmhN1Y26tKdVN57ndt7w",
  "key5": "2CDyxMHGAYJh7HYk7zEgfJ49wdQez7DkVPkXXNifmUohrEXJJcRLZyiesrv5uXgQbqrDAeNgnhiHDyKW4B97LB6v",
  "key6": "33YyS2JesTSuZL8n62LfN7KyxHZDWQbdvT7hN2ifdpk9WuMoUsiRv9YdUWjCGNVZwMRGkcFFmrVTwaNAYM3xi5Dr",
  "key7": "3eR94v9CVy4MBrqj9aHYJfhM8GFiwjXHZokuQhbPDiqspjE9NrQL67VaQuozFBZGjNXARgBDLJJybZGGz1hq4sAB",
  "key8": "wHyadCLN7hvyJTuzGijrzPFdmcJPrWXXp81KuFggvcC9NuWZg6DkeJ1FqFjcCQ7PYGL6uBwCGESYwz5tPQ4Z3Lo",
  "key9": "38mdK4a4pZaDEVLbBx4L1D2eUR9kYw8eHVdVV98e6oez5XotEavugQVzKcvTF5xJASmF1hsMLzp3V5oaNNqZfQk6",
  "key10": "3jkLN36SqVnRf1kDy2DmH9b5dAAe5bQoxW5kpyZUJH1RpLSizCbTBFhPt2wCoHhnA9Ckib8GSpRutaRUS3aD2jFF",
  "key11": "24vbToPUmeVNc5No6G1FckDM9J1dXAhqxYHa1dn5D3tMyk5uP2d4ngckyaiX7tTsMbg6QYWNYLSnsL4Wh1RHF1cX",
  "key12": "pg7v8XJX4Szc9Dzkh2omzN5vkMKrHrN8hLWr97ra7dJ14raxPbH5KwheTAvho1VTVQDt8Qv91qTCpNcwMH3Zrvp",
  "key13": "2SUXAmk8iKoVG4aMNa5j8ca2d1FwDnQsi1n5vFTV2ZumVTb1cn2cuW1XL6tMgeomc5918VqinUvo3adetXBMDu2A",
  "key14": "3cxWfrFhRQt4sfV2LVmTkcbH8aAfGEX283kVE6dsV5vQitXwfkLDj4K7XFbEpSAw5iNCbhXFaNmB17Bo7sub5xPt",
  "key15": "4Kz1g67SnVW3CK9CFLeVKmWENGVvtEsgb6Tj65Sma4XuwVYVXsvRyGhPThwH6WcAm7d34QRopnWpBxVEs6nPo8mw",
  "key16": "2vztU8yauKY1M5ZLd7HsrAHpEomajH6nL7cec4gZYLwUCh9Gj67w79L6h6tNjoedUtZqdjRktLujz13f5eC4CYfX",
  "key17": "2eZaUha48Mi6h8hwpc7MUEmNigW4s9KqXzHy5kVnywiabACes8yUWPwGdjgYqZ8NF13HDtiNGnXixFCB7DTeDZMp",
  "key18": "qtvzQZin9jAjjdDqhw22YYYFn5vwrtdBqBMG8TUbHBfAkfAgAMBnoH8UxhS5RbnJfn5Lbf8u2k4jkdzdJSy1jfR",
  "key19": "PBqvoNXHn7E8QTy7icNqN4keLAmLip53gEd1oFGvscx5ud1QgJrExsn48jRbYNuxD4AytfVr3gZRd9LMxa8TFCv",
  "key20": "WgmrefxQZfBqzMkRC4Mye2yK616NxNr2zGA7pk4tT53ttoUi7HBNQcg2vxCjGH8rnyMXSLLiDjvtvNwmmND52Sa",
  "key21": "3rQJJcDYc6GR8M9p8rVg6sL72awoEt2JGPr5P8oX2ivXbceDCzVcyUQaPPZtG4awWKMQDBtP4PQ49WpcskscPV4p",
  "key22": "5Mpa51t6gnzkDiGCGEaTs86oFKtjLZgWAdStMocZ45QDiyub7DnygEQQZai3sgSXRygCd8qfmpWAxQYFZph4VNEN",
  "key23": "2yzcvNfSg7FmSrfmD4ChWbU73Xb8oJiUDW77b191XevsXdueuLagTtGrS51gXjJKuyNdaqPXbkVAspW3Akz45scr",
  "key24": "65jRNL1GLzErExk3C92YF1UAXkXmpSbR4BUHYdxw8dGLRtCymWpCBciHcP5hgHV6ZNvUDmdg8NxddAdrsVWAG6vM",
  "key25": "5mdoT8BDA8LXuunKdT9Wt1a8qrsaLfzvq5vSSgdzT9pvSQUkS9wBhvFq9UQauaZXNbnKMCCHXwFy3GNBKraYAC8B",
  "key26": "Ucnfr3Wp3m2Np75Rw3AmQHdiL4YPhamMj3Pj6aoSnsTBG182azAEXxXBS3LsjyWWbJYNopDtyxR9YoxE4cgDop4",
  "key27": "2wQ9RkooB3nmz1T9m5VLzjsDRpBtpoNh6LEP4xxjHFQwTWe4dbT75sSufBcTk8WbfZKKLWj89nLoN4beiwAU7KSE",
  "key28": "5VeMAzc1c44kNUHVVZBWFpFnfspxxLcUYftEkGD8yPZzS7QLofyXbQikygudx6bBY8B3QCfZprzG3QYLKekeKWcM",
  "key29": "2Bxeao5ykWRLya6yjTDPvr8woc9ND7TCnugYLKoPkNHVLtJnaU47HvQ4A6k4W7AA8sYmqg14nnvZSNeW8eCYDF1S",
  "key30": "3P6P4bz8CCBYx7Fh7sJY9oNbpNHFLxYggLVztQKS8bvKUNyGugkBp1KfazGSuztDUidSmUoTwTQexLf7Upp6PC1k",
  "key31": "5t2rKRAvswkHkzxtjwdpPzXsbRJwGFceRdKGNB5Tb8Ps627bftZbMcvWf3LYx41G7cGmv68Zg4Nm8CWrgpzBQKxp",
  "key32": "44MsSaSbNkDpoDxFLFfzEoK39it4fLCUrxi4eN5rkhCeeKLaco9My1A87Px5qSo6zuofegcWqfoskufpnrHTEzqB",
  "key33": "3mYB8Q5uPgbZZTjKXZgcvcxbNdzmWjyQ5Lne2U8z3AWGJcLhBnQNw7A3NGDxinjDkQK1XANvQCt1yf8eg7DCsnA",
  "key34": "5UfoU3KoejWJoJew7kVFumN8i8eEQBrQqdr9mjTvmjVCqqp4H3E6v59FqxXQqbtV1cHNxmnHCx8T91XsyBNvD1Gk",
  "key35": "3H68pDenev6kjHCTqGrDPiXazLsd9AsjBUqy7Jrqd7aPVfsYHGZXo2pLpDWwNcQ6jBTWquJqrWAi9RQemvG7KNZQ",
  "key36": "4DgV4FwWDzd4FhNBT72Sq4YYrujdTqSonAQYNvNB8wXZrnRSe2C9f8amgBWSmP9EmLYpS6Ur7FFBN8XSnPusGt9W",
  "key37": "yaED6QuGgoXrT1hZJpwNhSTxTbqVgKsbySXpUQEeu5JzKisW1d46Ebxsm9FErqms88aMFXWZtJSnNYWWrttyCFa",
  "key38": "5tFyNyawmdguu4Qs8NJPtDJhQ76gyxMvJjaPiqbYyQxwkNn7UyAak5NJ19TYNQB2VYqd8ZcP2T5irAz4b1HFWmXR",
  "key39": "28TqMQv9Kg6Lmw318xJuC4MiwQyQYf8QV5pdnBvp51f8DzwKSH8bPH9oqpisWDFnjWPo2zrQcG3Y6rEzRzvNMdbR",
  "key40": "2eiC2ceUXH6Mm1XMPfuHCUYGWn9ehfmmNE5vPx8pVJrRSGqoy6hn2P2DWdSx4BanWUtjqPRXB6EJZ3yGhREbVQKP"
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
