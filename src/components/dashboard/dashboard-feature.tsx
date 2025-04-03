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
    "42ymGS4enJQUgAD2WpQyZ5yCFuQEbh8UeSgcuxwEsqD2bvXs3CHxek8N5gPx49QW3vMQMatnzCP6ibgahZ4uDR1i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zAxCoCTkUYuE64cbUA7ZFXhDpgfpLPoSi4W2LWhYUYZHAqrmsxjsQHUTPDi4VkZcMryecBURSJ7zE43cNbBJPuV",
  "key1": "3q9Y4xMTpXxkrDKhM4PBca5rBpy9AVPEY36Yi1vtTa72dXHM9FkrgrmpDC6PAy3LSaSkdASxiCpb3SwNN7WpwPKu",
  "key2": "2pJAaivGbHbU8sZSgiWVAz2v7D6aqsMbc3sRSEPKyjmoHXSDZLAfKb9pPRfiTnftV9tN2QDPchBssmzYG7XWEUZS",
  "key3": "3BjkBDSQng1DnPWjWiVW1t9SkN6YTPTEzzT5tHRLLrEzyrsB14Tpg9BzxFMR18Ug2EnLBtpeNeuegSLHvJdSfwL",
  "key4": "pZZgLkbjfY1iNUxnya6VQ3aWngMuFyypEd32jRV91qtTeU8tRW4FmxxhUtVq91GU4z2BiHub26DtWcweyFNbchY",
  "key5": "7r3RSBcGStHFDqjMMdTnwbs1A4y2x7FyaME4ZEZDr8MkyfKDubFfTxYNDx2izdKL7jAJXmtEk9fZnwVDkbFFKcJ",
  "key6": "2DtvfrKPL5m2o1LWfTM4CXht47KjHQbPt6QTkJDPQwMp36qJiTCuEYf7xkjLNfhQwmxERwEbfVUgCGTPCx31xoQ3",
  "key7": "sBSgfvg9jAjQzZfonmUAHK4SPS9wZLotTZ8ULJG9QCgt3wYz76fAocudu9aRxu7Yi8E3N5R5JTC2JctYdAxf7gq",
  "key8": "4BNbZ5WtoAB1ndJNzVPUovnJG7HgkurvpUqw782NwoESGz7ZFYm2yesvfkW7knCkiSBtP74eirQcR6japExDnGhi",
  "key9": "5jJPtc8xJMAGVhZHWV8YX767pQPyRz9sKbJvpcmYHyiZiCKCckhwRp3JKscoKU7ZU8P4DxVaFWGeXasuZEuWuriP",
  "key10": "5DyiJbYDoKJoCZq6vS7JzX4BcDRzPEjbHtrsbs3ftsXx3fb2DaYqiDpzKFLhTKeCqdheSy8Jw24YRpsngUvMrYXK",
  "key11": "ydUQsT5vkAQZBhMo9ZWCxYbjzpfnZJdp7UYrF4RvBL9sDcS7yb2KCqg2ZWp8Kq71ot9ZSpNnRWyk2YbufQynDtE",
  "key12": "3RjycoZCr6ZpQVKLXpSJzbyZgt7N5XZij65WtFLLCpx6gstEp3g4MCg9QTUuHucBTjAw2h2vwARmAZF1msjppgpp",
  "key13": "2hZCoZeH4JiMFA8RWf1jQNMWeHVdasvWcygJKMuByXXjmm5TcFDAn8D2anzHNgkn82PucBKP4yKCNxNB8zjdJbGo",
  "key14": "4ex9mVzzMSCDZALaD5aaXUYQURTFD1GXosZ5bynTswAA3j7LtcCoGy5Sxt459ZyLzQTZ34QBrWbVdwF7ynNuAoFq",
  "key15": "nTSApnyVcJyTN3HUUDCYda44EgKSzZBoxxtv6xK4Q3DkggBswNYrJPMt59seNUPDDfq6BrTbWHMhs3uYWey72qB",
  "key16": "677Jn5fkZteiwbNzQbuUDi82MZ5dDvbQTEPuJDWv2z6c8sJm8UQhxsAAvj9Wu11m3tY5ruTitk3xJa7tLFZSvQhs",
  "key17": "3kAqsZbSQE4bHGvehJyNgBQXzTSkxYWAYDkfjWtJJzZ71HvNQQYWazZUzDFUpcmBu2x3HXqgRgKdqQRLXgxDxQWJ",
  "key18": "4Us8FKhahf5uq4E3snauTcHhpdvDYqCKhj6uf21kGcK8QziWYVjAfqCUkeSCbfGNBHVx4xQFQWwVHXKkXg7ZK89a",
  "key19": "45EG9Q7ij4LLVhfNrD8hjBsdd8zKgkzaxH8H87PoKhWFUwWRZMk94hjfMvNCKEJt4j8EouH4JvYybUzPY3VQiCRv",
  "key20": "zDcZagLJV7Tz4aqjM295QXtZtpjfspPHwHhYASfGEijT6LPauCgkHoEBYfmwVbeE6KuW1jSBLvVSV5qCMCdT588",
  "key21": "5SdMTbrJYfBhha1RZUnsiEgzvuYJszaxRcoKvUAWDpva6nb6hCDVgxajEsed4KabbtL7Uc1rRxuUDt2JQrdcmh9W",
  "key22": "3PgvGcP3n998yw7s9aB5T8vuFfsHTmMLs5eVZUi2193ArwG1d78tbM139RFQxJaRyXyLfi6sT1CgMrPiqJUZr8Di",
  "key23": "Bu7gF1BMuyLvXvKP6WFb4t8hyEKajfiYNtCoGJrzNZCrzZinHk5H8uNR6nymRPhovn96d5ATysJCdiuwTUjQNTT",
  "key24": "5GKyEutYcyEswB9MC9t4z9b968nT5G3Pwv66fMEtZViUknvbZGwZV8emJsJ5thvYSTrZJup2nYc4kmx5TKTmcgJb",
  "key25": "4XSTmrYgSWTrqB1HauBMHvvfQW8VLoR9WvdD9WjtBJbWJ96tSqeCcxnP67gptUd9uvRApHUfEBv4GPmcQvrS44Cj",
  "key26": "4bPxc3CzYGmk3NHH6Meib5mxhGECkdbose3KJJVV9Q2uJzfzDfQ1Kw36QMbEy9uVC5oGNGcfZ7EpkLJVAzcoAWCp",
  "key27": "44cRc6jwRpQUCphDkzjuFNaZXGNPddTMjUfu5oJWTiJPyDySNU2acBZT4zh9upZ31Jd59QwADcejzfhstVKZsMmy",
  "key28": "hXTuXe3WJX39DiB6AY5earU9PT17MuJjs1s2xdt1i9DGrBM9KBJ9Bs81xAu5fDzpwcNJytXAr36TivcP11whZ9v",
  "key29": "4XeKTqyTnNuRheAQK9XM9TZcDFXdKbKzsYgpbRq3KyB8seLMbxJEjPjtvqmrk8cGhcpLXGu6tcou9BYLAT2DgKRG",
  "key30": "2PEdgtfHMdAJCTPEqJUo8qgbgvoZEXdGM22Pi7D2ajXi6K6cK56RfEirSqCvapqWxiAU3RTz1ZZG8AkurswsCYxq",
  "key31": "5Kw5SqaRoGiPyCT1cpfzkHRkjftHi2smceK2Jig4rQkYDCUpfSPdaVrMNXW79pTh6QMJbWfYRqTVvcZVpaf2nS8k",
  "key32": "2Zys5hNcpHnvdLz8GVc62f8xhjiH6NwjPKQLKBa3M6SgjzxZt96B98Q9uPQBcEZFmy1jhoDMhVcLoAaq9S5aNGTC",
  "key33": "x4vUBqxXYvCVCbANK1byi8AFcqd19ARW5tt1JVvPnMJr8X4iubVDVi4hqyC2MijhQ9UVVcUErTjmg8YxzjKtHNM"
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
