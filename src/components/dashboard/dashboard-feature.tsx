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
    "3Goevydx4z8pcS5eyjeihxhbJjHrbHJFSYsFmXu8GN1feTZvvrL6TVHYWzxpRZ9azP3TfXaGHqRKWdxT8d7vSh6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29jCMbtWQZLuUiL5yBW8YZib9i5ncLDZ9cdExs7Z5YphWfX8A2qDbpUBFVFsPPL9dAiPW51wKifB2vZR9ASDdBCx",
  "key1": "3WFnaFfEQGiNS4N2atcjt3vQPZTcSpn9kdCHkCw7QYwSdSnfHYBUUkjKRStjscixQ4weeUrXTLF1e9mkMXHRiBVt",
  "key2": "51tfxcsMvzGVAA3q9haZrnJMtzc15WF9rj1bBVs6p1kdhqqB9DiyWBpqw6mTqCX66hAv9vFiR91VZhEomFF2RYPY",
  "key3": "3AgoUpbgY5Vk82EnDrKkXA8DYbnCSHpARDgemtEjqaaVix6xtrpsZXTcgPsKW6nR7RqwXn3rqEoC6X7iKLSr2XVi",
  "key4": "4r75oxeDMQGgppjh59g65YMUjhEpdG37sbo4TjR8MRGVUgtDdjHytXsLtdpaE6ZmbCyczJmDhChtVgGKWMsRGk1s",
  "key5": "4nTwftRyVafTKuS3qPrFCQ25R1cQUk1QoH1cuy9sQtvfVN7D1Ravh7xmXwuNBC6zoiF55DEEiNnwZ4nNti3Yb6z2",
  "key6": "3ovGNE36W2xvurz6SvAP66V4FmW5h2xPuM9sUeMcVsYKjKc8jnQ9KFvan5otTergDGQd5u8x2aygXcDxw3KHiUy3",
  "key7": "jGAr5b8bYV6uLckpAq6Ry68k637uV6Cbhc1RGB4hNkUgoXymMBM1Kqgp4xu4jMNtAvEdChsfBteR36xHysQfPQ6",
  "key8": "4opcKZ5K14kdrW3seJg57WJMgWd2qpeLJyNRXYt7EnYxQQfbAa34t8fz9VGeTnc5QUmphWaZwCWV2h289mrpyTDr",
  "key9": "62nQBiLtrtbjH7V4P2UbyYAgmdkKpcsT1tcrq5jBGEHe4K14Ge1ESxsP65zDsyTXZHBf8mQSke755YVwUW9tztnf",
  "key10": "2DrrFBzvGSqF5o5TQrZwbkF6g9AseH4pvvLyXbm69inZHvwWFGQCW1QLKGXipSYjHrB63WPTMfjsTpacJzHgNMmC",
  "key11": "3edeLawvWv3UWpwk1A9DoFrcXeirQM4Ne1JEJh6HcoQPpfMCPW6wyUdf7Nfr4TPLaWyEQE1oUhbvJMrMuTrxdxWe",
  "key12": "GP5NxkWLJH2fVG5ZrSShScmEcoDCBVehKCstoJ68nAztj2ct97YYdUJpZZcTf826ag6r61ABzorx3Ui9Nfkguw9",
  "key13": "5TXnR2af7KLbBr9Qt8pcvwjqqw8ZLKX9ZZk1bhgBS3eC2MLRBaYYeN6Gjhh6ChCS94WCCNayNrADEa1g9raJCQm6",
  "key14": "y8trm5nTkDJYZC9zcBYGFhrQcFx6HkHBzQGGKuzPCqi9e6tDnSheN6Ezmi8cRmq1a3N6ktsLgygQbyxPHrMNyTk",
  "key15": "47vRvtg9tuSThSWucxg9yTdoXTGQDB34niMbxLYQeYijLVmruS6s6v1RSDzPJABBjVe2vjunR9ACyAPxhKUqKKyQ",
  "key16": "8qqmXQwtrtBP7u1AaoXx4ZtQd1dfsMn6mfdXf5tATGorTARza7DsdP4nfUZyLTvZSKbTbiU8f4Ge7QH4FF6N8WE",
  "key17": "4goFzcADeAcP8NCGL4ZMu7d5wXyQWDmESPyU3ySw8cw1QjFrzhvGo2PyFRYSMKA1xZVjGHkPhgX2hyz5Uauo6ZSR",
  "key18": "5Fq7W2ZC96PT7psLmaTLc7fGqaXK2EKyfU9VaHGQYuVmgXwqGhgNTsxb9G2cPCZZfq4RTr4Jzz74xCg8ytw5uKT2",
  "key19": "4WbEB6RdqkCdkp9BxxVAWSb7mTD2J82yGxyRPRKQwNberGaz9SXCFyus2mK7QvX3mpFq6etVcrabzHdXdWHJ7W12",
  "key20": "5Cbod8e3rr47qrppZdK2DuwHyoYu5mVJz6vEeX5tRi4quohSw16hUXN88FrWcczy1go87HL2YwmtqPLdMyRiHZWV",
  "key21": "4w4d5K6WBT4HBboCvoWihv1FNjpcCqwFeJhPEYHPF7QjVCrZZyptN72WMLVEwRpyiDqkcjfzwfx1UCoqx5jV2vpf",
  "key22": "3oh3PqEyR2D1QdWAtKxhsLWpVx5tjVaPKnqgRWjvUK5nkKBUrX7vvgZ8N78ibx9G13435xrJZw3592gFSZQJ6wfi",
  "key23": "1L3daDj24rojEpfD8KLKnYmWFFAuqVy6Mw921CqEZ8ozgmYLpQv4gjkCtm5aHezy8EnhJEU2BeyyVYqqhsuFxBg",
  "key24": "3k8CdUPFJ7rZsMg1BdMLztHsKagjNRezJVKgBEn4u1NGYkYZ9DeiAdT9arimn1rw8FVqYT21hPr2DLZtGkLJxhKV",
  "key25": "5tfoFrcqHvgPE4XdbEVTUf8Pj16EMA7DV459gE3BHWzsbe1i1rRjD8dy5m4Nap93seJLU3ygL7LW8aZt5aMDk21r"
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
