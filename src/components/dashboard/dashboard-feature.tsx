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
    "4G52xFAbUw2CKSeb4QodKoceebtcC34X8yfzZavScPCWfBaQ2f6g2Rc8jCFz6cVdhZJA4Y3wtuPL9dmQnUtuuc3t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ja6cozeRnbcwLzr24tJRYMZKNyZohKv5sZhbz9Bb2LuRirxBFwQwDQeaJ9SsydSQv92XU9umwuMthxVKUFAwYJq",
  "key1": "5V2fUJnqABZuxugpAm4wrSvHjYcb9cn9pcEwCNNRJ2mhdm4m6o5HdmWRZXuTnMxKH2frfDbkphz8CP5ajDCCnjEh",
  "key2": "38Dmvf6HEH4htjdohSo9XLhUcSUtHXXhbg911JNNySM8gXjrUBWwk9WE3NLZqmPDw7aw8K3C21oLPe7LrkmB1A7S",
  "key3": "33ixrz6oSvbT3diaDKbTADsyofCp1zCfrYguPQaBUMi6CBAWTv8EyqEgJ7J6R1ji9cvHhqMchAvRTmtqSFQyAmiA",
  "key4": "5uxnWLAxncf9v1MX4ZVN8CoAfnMGVcS3hViGWoCsM83djEzcw5qwUvjMo5mG3ACVjKx5mfN8ZAW5HC13fTnnoTHm",
  "key5": "5GLfEnz6UyRATUx9iykU9s7rg2MggetyQMnJGSAfMrYVP9j1skv3EUwR77ZvFWns3JW2ATkZiCUAkm1qbtKYuLwf",
  "key6": "43toEaY9spugJiYUz323qCPzEEhYU7uUoBgF74sYT5g8RMy1ussXPiQXduCyvDBz2CP7SjDnMdRpg1JfF9huA7JH",
  "key7": "Z3eA3CSLFd7JH3TeavFPAskmWWt27dhb1RA57nS1E6RDczia9U2SHWDdRPVLaXHSbvwqjbpHvNn4DwUEGTvFh8D",
  "key8": "4ErBgT1g9VCLJKgT4tEkfHX6VuD4qzD33psBt2mVaQhX864pmT8UjgjKcSJa3bnYGeGckPoNARELL5gQUubgbz3u",
  "key9": "2XaYSexZBvCnqMuD39XgrRAYM7MwXNiJMcuombdgHiNSpzg75UGp3pcabytcNegjUC74yFh6sf5EM4SEMsAjv1xv",
  "key10": "4CJwNgmcKUr4Z1rsKY1z8r3ngP5LTpTJVLvcqX4rbxnHp2ie3YxNCGjh1BYSwTrhEHkTDnTZdaHG6gDgcKLxuHrC",
  "key11": "2EU4aZ6HefCzyijMPqLL1k4AZto7upa1tTqpF1grGaC2sBwZouHv1iN8xwnFc7Q1mt7i8gApTjJMS9a9pGsGJyy5",
  "key12": "DwftqwHKSyZ25maGr9hHWb4okbqYjdsDXzJGii7ftAtqVeaQNERVS7cLfyKSUdzYsAqeNnu3wUDnK8KeQbWwzzB",
  "key13": "5yFHigmiCRFq6wEqsyvEPdghhnwhWbxXJBZ27g4siPvjtzmUg2A6DzWkN9rLRdFjHoqCuBaAo3VgTRC6Yzj23W9A",
  "key14": "3CmeKtmyimVfJ8JXQGJ1oMBEMSkvECqaif4hHBy35No6LmRUm6hRRdtw686ADK43pmRmHc7CN1MMaTu7Ppj5fFY2",
  "key15": "4yZSqdZ2msfTnGp9ZConvMZ2G2oV5wdsfxZPhK4oCFTYXuzro3oJqirLtBK16Uy4o47NJyCRsW9voKfK2MGJocB6",
  "key16": "4AtS9oHVvA4AZa4UHxM1sjx85gM2URbg7uAuF8iexxpucLXumUJyPf6UNYP3kwsr7SJxfr91b5Ys4AZScHNsRCRc",
  "key17": "4EP8YkgHc4i3XpRNpsW8U1WV56dJEkYJDMZtQFj25EBFxnKfBR9mrcgxsifZo2yJFTunXkpCdRkAqYn7KkQq28tz",
  "key18": "3cD8LjBxi2FB3MB1k2DJwNPCisP4MGVeP45w4XQQG5Qq6Fkk4sBc86moPc9a8LqBEtjvqJFuSNRp4syf6aJv6jfR",
  "key19": "2jnB3hQfoQY5fwj8ZQ34F8SyQAa8y8QChrRAt6ckMzkjn89yyXPzMqxRmqKe8igSr3ZuyzkvtQMhXmdiaBNfVufK",
  "key20": "MbtXpS5QhxHsv2ZrfxaFd8VfZZK9Bbn5CB21onVbynCs3xVdo4x73VZY7yTVd77RQ5fJ51EPUtWuj1A1f8M48Zr",
  "key21": "5NJsf2oWG8zaJ31MacJVzSt6hzHZTrpTpLxTeswirXKKLuAjrYgvRsY62wsujhWkhst84zuQcFngREyc3gu3THFR",
  "key22": "53D9gDuexnzAw46LBUaiVZWADey3ik9kPK9iffAy8pcK1ADTLw3ofp6MucskuGNRgWqhc4y95JndzfzNqAxgp5se",
  "key23": "32jRaR1AR6Y59F8Su4bRbeNBhhe8sh512h829J79ZJkuG5rsSuEz9GuRktcMqutUxWahgxsB14FARhPAoCC7CZ24",
  "key24": "4Kes4ZZjveSAUAzKYvrBYNYjS1ZeAeAF6CSxbmXdcEZL4jYvcYWF9ERBXmDKVu3RqmtQ9RxqmesTU9dyxkvbkgmi",
  "key25": "3tizJQo6wZTug1VhLerUrAncyf1a5He16Cb1rmYDxXz7uh32JsaBb6zgLp3LcYokVtbPK1QkRQ9pitKHoQeqnQJR",
  "key26": "gxfxYdb6ayWiqUtttcz6ZshpAddXE8kMptRy9TehnptuiovgxE8NRJdT2aQSCkBEuXfpZUYoTNm8YmTBxBWGPBW",
  "key27": "2Z2fMAZf1Tc7ophg7GzjGeUnMryU4p7EDwkcVrdpKkeT1Vv38fKX6EzYEKg87gLxYBFNTbMrMHWdtFmxC3oZ1JHS",
  "key28": "62is6SKh6CdDozNRQojrNP7jzxihnCCswvmzQznwDECGY2r37HMyq9Utt73CFrBf3z4E2CDfovBQubWyN4aN3Ztw",
  "key29": "5UKtxB7pkRKB8iJoFWkbPXvcsBpShKXAnEWuvoqPqFb1EQZNU6bmYvEJhCXeiU8dvXnqM6AP7wHzVydAUP1QdpsJ",
  "key30": "qhYWrCKiC3zNDVTuaNV3voC1ugVAQMqMYzHm8E77xx6CsVGfxFNn1TcESDxkBP2U98omHF23FhfYRTgeFDDdVZD",
  "key31": "r1q1dopYok9YS8KwJ3gtW94w56Mk5Jx2TgoreAtBGx6M8UkdkFnnyB9Rhwid268R3bSTFcgMX5FuoM9Z49bkBEP",
  "key32": "4sjd9rmKY1QfSGMNachvUXW4c1knbwDBhMHrz7v4UkJw7jHcxNvYXzoYD4rvMFiDWYLi5RLdRcfC6KhUTzMoq6Mr",
  "key33": "2zW2iDCJgwYvyEVHB2VC8x62QVyvX2zzmrFg1kbVjjcJAacvv3A9b6xcvaLnaYkZqGZVdNS2gAWkR46yPFGY5xXh",
  "key34": "2xfxuRpar8km7XxP8MwqzXLdXp7orxbVJSUozwzmZ7NwhoA2YS2utcWXixuV92YmGnseUzV159fvtH63NNZ9n8GL",
  "key35": "3sc8dQH1MU93xBSEJiioXvz8EYwQXGsJSNr235WHdbBdzDETYVbEXsTHPP3Szowvggq7rbNyRB6z1x7GnEkjmVTR"
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
