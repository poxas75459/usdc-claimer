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
    "35YtqJa4yGgPAccaWXcgQfKVYdFNbK5uMfhZhnqdEZwURzo2zhfG3RVoxWLqRUrYQsU8CXsipXn2iE6wbzdiJVwS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5S1GwCq2ztjn7THSgWyjbYM6cFAGPCfJJHVUbsQ3RNctSrsf9BPF9A73uoKn2F8AXSMZhytUt53n2ZvkPcs9RHTy",
  "key1": "5Dm8FovekYjqQbq2HEFtNrtLrEPuBz5jhTr8XL1VoVtDA3FFDuyzVXNGTG6WbqPZixpugPTNHU1jhK5xhomPCEYo",
  "key2": "2TVYwp4Qd8d34955kv8Rxv93KvcGND1sWP1vFHvA32Mm21RuH1xXbKmDcTSBWPukDWYm4ahcQrgaxRYN3oYfogzW",
  "key3": "SLgEkW83WHeDW4A9GCkyQDxuPyksd4Gj4fHe7mzPFsqB2JhgWemQe884N87eyNPdJARPfhihaqT9vCQvDoZDt9j",
  "key4": "252vDTRVyjVpPakMgcsTSs981Sipaicx2wCPEWB9FFQTz1a4nunwnzhcTcp1iPeWSL9xZYew88i1ueFFLF6grQUC",
  "key5": "55bMioCrz35e68Ha6qMXY59U74LmwR8gc5kQ62daPczScmm9FTZmn8yzdxR9wk3Qxn1mzH8gSU8qbYMJLYP6npFT",
  "key6": "sfM5fgM81CNM8ayatkeDfTMRd7UYfnAGfqYEtj2uNGS7zcrPFgw9VzAr18cokkNPzT6WYLxT82hHfduWbi4cgXY",
  "key7": "3s9H6QsKUHkULKtGDEdubWmTbKYYPz1j9cca1KyDDESzAQnhgXUx78ZFkXB4i1PYQDeMYbY8JR9Z5maVUL7WEAQd",
  "key8": "5oT7s3JVFhxSGPc4hGGTZGpcY9DyJPiRPmQ32vX4qRXrC4qfFqTcVSzm77ZyZ5ooPtyW9qo6Q5xuuCH8t9LFiif9",
  "key9": "3YiCFh4XQoUrtK2srBHATPa1pyR3Xa3S9rtyMChdAAEtbwzVerDjdHCXVTP2WwoaWosY1i7GQoYjUeSJPt22mQiz",
  "key10": "2qucth4PZXR47KXd1u6j5wAkjmKrvp4pMQ8uqZo3pjHpsfkfoMkLKZZLMch4o92t7xyr4utPGrRd2fvGwqcT1eJw",
  "key11": "2Jw5rBeZGibNwsin8wsV9Bh4zoKqZGGAEKPMmeVJuePhtEs5iT4HxHij9d9Z8D2cPk7q3vBrf4eDCUSkv6w8NaF6",
  "key12": "2gQcPgZvGZwTG2dsniA4h46bwfjfh9BVDDKXVnzm3ixiyKjJBihv2BRWF3LpEbUSQfL9FdNmqoMaSwYzrns8H14H",
  "key13": "4cJVCLHtKJGZCAQ7NuiPN5MU5VdXSmdzUAYH6J8UpJH5nMcP9oDfDZwVBL4STHpNtjGDVVZRti4cvbkVktZ35E54",
  "key14": "2BeBpKQyRdmRt8BtKGj686ZZF1ieJC8UhJJc4ecFoocnQYgSFpg7vdKavGcLS2VLuSYWyWSFEikbKSMX5kFWT9Vu",
  "key15": "5HeVbHmNpyE1sby7gM13xMzVWcFWPmY3Hzo7VNVot5gPomWxQtjXU9sw6aEh98UuzyC8K5v5iLpdJs8JjcSheJNp",
  "key16": "22xVPeHoXDWqahosK99RGcbH4gcY5vJrEdNc5NeN1sUiwqDg3cfdZPtPVmboFwocfzuCMrgMpFLq6ahNhQjXzbat",
  "key17": "3RxmCDTdb2iRyUbNZCEPyBUWQVL8rB6mTSZXvaYRFf9biR4pz2hFhMvxLfTBWEdqRrUzmqFe89Tx6VENJxfYabSN",
  "key18": "LAnjwc73cZggQPMpL4AU8ybW6mGCuWpUjdZMNSpBQp7NV1VuYykrhHbiEvwqictREoQY764Cszaxg2pLXKDnf5c",
  "key19": "434QhsRHMc7mLJSL6kSqucaYwQQ2RUqEyVNjcsAX8yAzGBSNJKC3AoNkuX8GDHjyyfdqwfZuaEzFiFfYwFkfCPRm",
  "key20": "2HTihQ9d5PMdKzcxBRU712xKzuMzaGyVxEs92L5UXJjqeYKVppEqdjYPVcSxkGNcPCf92yAVbeG4VCvPbB1JwTqT",
  "key21": "g4241UD3gFWkSK5K6tt21ejmhMFkr8aAAefHKAeKaogAm45GwAB6QFX15EKwwbAEY6fPoK25fmU8G7dqxa23nFw",
  "key22": "2yheMR468r9DUZkkVKqVRNHVG5ihoh1gPCsbGxAbzws4nEwCbstV2q975L3RRswazf96CKZS6MBG7P2Bh9gmE43X",
  "key23": "2TPtTg1UcBbaJcX987yszJJruraCouQWNzciT2wkqJRr9TWgJw7YginT24W9tkJK7WQjBMW8azsSFZ2LYm79Nesv",
  "key24": "4Af4DHHQjPmLhQPC66SwasePGyfTxrqjBWCsooejRKuYhqaZS9YSa28nTAzARXfLkMiMEHXa2dSkAkaWjZxrFjcz",
  "key25": "2atRsvUnsagtf5m7VQdEss6vYx7giH7i2U24JHZevwoB9WA4zH6LLqYk689beAjD2NEh5Bkfeq9NriF4wzC98jBQ",
  "key26": "38qJf7zycSuB3pw9KFyjBymGqcuJv2BxrRpNCJz7MvxFDvjzWgpKCKpxMxpHrQrFjWietzPbDZN7P39XSHUcELey",
  "key27": "5z1WYHkxfPhaZKbjs6zZ7xwNzp6P4PdKmVDUc46H4i5DEXXmHGk1Po23eE4aKxovQhDwnRX437Fgv764u1Xni291",
  "key28": "4taYnJtWpiiaJYZEHL3X4GN6aWipm4yZK2qcatAE4B9mv1jYdigc2AYtiMD1gtLbZVaPiQBkXQEKwEfyuhLhsWK4",
  "key29": "4Xv3dEXTtHrrH51Bowyx38W814NkgaiNjjrw7y2XZtBtx8ymtgThPn6cWGBZKdvC3Hn5AXTu4fm6gQHiUC83h32m",
  "key30": "3G9NoFj5bSF8p9NKJ9SzedaXvQiwt7DZeNEVZ2NdYjbji3yKJQhYCNTBhAwBMFWakdL8y6rCuNMmVekRudmcFQcF",
  "key31": "5mdeixFsbTsVZCBWh7uQqV614dXmAFcmh21T9diRJXMFKbprPaSWuzHGj6oMUQaUSXrTnhp3WXUJdrCYq3aLrNav",
  "key32": "4ZaETeNUMZdmo1LJqMUBgDjwrRqVSodMgfz9iZ51SNBdwT96bcEx5dYZQrpD3dXKbHE1yJkbbu3ot2uhcHEJMqPU"
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
