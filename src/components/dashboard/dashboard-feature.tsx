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
    "5fat17maofkZP4opHkqEw8UCZiE4EXjRvXC9D9Rgp1y57CXYeAodG7SA9wHJQqRgTMPA7jem6YvVMsmCWpKau1uQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2v7jaMiYU47mmg8YY8XESpFh944h5uXY6eWF7LijpFydqn7Xhqn7v5pUW9TG3ULieFR6AB3JNqB8ePFiaTtUk3bo",
  "key1": "5u4DAdF3oYccbYjuHuNzGFmGkS23m55xJA2RR9zYmh1Lzqx3hkPG7WmxoLPGAXu274nwLtopgzrfCVeWiyNiGMnB",
  "key2": "3atFa8QPPoSM4BZVxNSeLsRbmcvc2Cx1CtaVmXT7t39DJPdvUY95VJQPcAhUFx9G317QSqzNFoF9yPHbQM9uSajC",
  "key3": "3M9Nzyh76HqWwzuoaSXcTdVEB5yvxyLwCmQ2CnvyfWbR7fjmrhQanRjhShZXWjQuvFr1yYJiPdVnz66Pt7NSAag8",
  "key4": "33c3SXswcCLFLH6FRG7HGjAWwYMzPkjqUr4jM27VA86jt3bR5wn64Dg1s44ehkCTNmVvBQt7pb7ws9xoYjXmyazP",
  "key5": "3tYHszzqv5otTYwg6aKzUFGEhmNudbAHaGQ5Q6VCTJXdryRWAuECy7v7asjodaJcyy6BbYv183Jf1wth4yBJZpSn",
  "key6": "3Qnn96RTeAhJ69perRKC4KjTmjS2QeoCQfEw8CjRVH5ZwJj4TKwgFThHu9GTMQwskfTmFDSeptx25nX6Sn5eRQtX",
  "key7": "3UG9f2HqyzGELF3uRat1pLEjywSa5NJLCG3bNAiKUQAMcMKkFSjLDyWJML6SHpGYMxw35biTSr5eAKDEiFtUnBuu",
  "key8": "5Y8hoU25SH3MKgeioBozp4kaumTVudzaRpDytgZgts5eX8VoLLUvTfFENXix2YJL2nkhRj1Eiij9Qx8uBAN1TYif",
  "key9": "4F4GnWi2sdsTq2CZ2BxMo1pkLiy9c8sT1Ja1znQBbWTNZyVxUCtRW7wWSJb6DsoByw5hhytbe54SHcgqLCBGUFeJ",
  "key10": "256JNZjkxhWBBGZCCRpaNXvEDyNeqq4kqV4Ed2KJHVcBemiiJxVgtNbZHhkChG6earFqYkUo1aFprP17QvqsiK4P",
  "key11": "4aHBFazJ68uVuDKRUDbJeCsCwhgHUuAZQv9fHuasPhgcALDWU1WBvXparjQtB7nSdtiNGWq6CFyBwzuZ6GQBgpHm",
  "key12": "3C9VfXHp7S3Dz7Y4fbuKMKWwzbHMMpeRT9jXjDqYcbWq2DtBqAdxrri5xKvXRg99HJ8ckkdiv5h4WKdj8fWunJPM",
  "key13": "27tsMCNouXATXPJrYUyErrv1hkK4yRdDdwXtUrD9zz3EhQLUPzG71sY4C8fV65o1tKqunukK3GwhcXFt1fSXVs7i",
  "key14": "C4W6gQ5yaFvVHC5CEZNazGNDb7fL7EXf613xPfjDSU8qqzsua3vbzBLFJWysqgXw627Xrq67QdkaE7CTvKFFdHM",
  "key15": "2E4AGpJWKVSoS28kd4nbMfFkDHWAjbzxNPqa5w3741yfi6vCNT4RaARdyUFPC2eA8vTHddMqXKHF49JXu3ox5skK",
  "key16": "3h6UJTBcMApqpHUuE1tXLviqddJCgHnPaC4sNXhxtiWCFc1d9ATCEqaUSVBSQZMUUVVyd2mYhH6zQ456qhWQdHwg",
  "key17": "3egyQcw1GfW9383H3JKUpWmcvkrMF9tsRgyUg9G8qsj45bRSJ6CzCo1BD8zMvZFutcZAGF4GiT4CgA2y6KKBHMtW",
  "key18": "5g7P6ofqkv65UrPaYRaHmyyxuJpu4ntYTpi79SbxWTXezxYh86oAsAw4QxEEsSyPdEqne3ewwFKSpZEyeVWfxZPq",
  "key19": "54hFbN6e7aWvwMJ5G9t6bZjGwQanazZUFVvGJJ2EA1GDh8AsKnsZDrsLZVyovzguoUiZmiRjZHedoCpTs4tkfXXq",
  "key20": "3TxfhJPPBCwzmrDn6iUBWeH7HCdjf1qR2aaTAoywwVSQc5aibNtobjrC2hgRPyB9gavpe6jkbTG33BJMDvJWyEHZ",
  "key21": "4HUSWJTR9g1NG2LEyhrdmXAXWrYpWAqDCNsZMEF4iK1q9Mmr3jv8GejFWBDoAHP1Qj2TSa1HfYBiPZ58gifYxjRd",
  "key22": "2xkjrckDTYaQ9fZEBQHp9VGn4Zibo7Zdi6anhzqS3Fg1QZ3PAUMcLm9xJic95vWL7uCj2R9niaHwxbPsJLJXsDaz",
  "key23": "Bdo6yDxbuqt5dXhwnYkgjkNpf4tpzTXh7EovBgk2CVmecVSJTzRFh4Pxwt3GtqnDjoqqZBwenp95e2EhmarEXAW",
  "key24": "31yNDX9ReCwMNqiHuaCUJfqC8M9BM78Qr1umzeXRnK4UHxFGaWf94CpRmtUDtPJ1PAaikxKj4Aog1U2JctXMXCih",
  "key25": "QZVKQNp1RJd8E9Z6fzbMpBaWtzr8ASTeVgmzECKhN1whbRGGQKXtzfye1aqE8qZftvY9eeB68E8Syxu7zEhyMwE",
  "key26": "VK4ZMmAfxejYMYeV5NyMMJTpc8Mz99eAn6w28acDKoBvCsRNSYxoKzJw4EPUriUh55zf34jh6f4CKKUHV26Se9E",
  "key27": "2Gz74ZGScqpP2Z1ZNaBbiXBtfcWUxjHSdtWj9zVPiS5auL23uN4iaGJAWySYqWqKq6kEtTJdtowgXZ64eSvvX2tc",
  "key28": "4gSKXRUWMDPMnBKXYGN6BSqoA6FVe8DaKN4nph2EoZGUpCmZ5UYCz4cDrPZVYoEEUGqJEkny2AzHifeWzWaYiMns",
  "key29": "hzxkdVhM5gGgSGH4DKu1QsBSKimc6RnBw77eBdNF9ntcRXtAiPTQWdkUnfnSun5Yu2TAjVeQYbnsV5Dd13n67cp",
  "key30": "5DUAokGeQn3B2FjcNEYJhHg7jpdFCr8c8NLuukcTLyrctYWakLZNtUBzSn7wsmPmkBJcJGQZLafxRRQSBUBATjfh",
  "key31": "GYfBjNSgrLr6VQdGmLcfheciim8BZcepfiHkNbRThg3Lt8ocDHfzoPfkdAqkhtqK2BMGfQZ5X4z1BTRjWr3bJzv",
  "key32": "39XTXrgVUUw1taF1PLX57hyscBkozr7T35xuWDxieWy4z6j8hC8XtqZKNowSfr7nBy4y8FJqeKTdzkVnvbiGnEDH",
  "key33": "582YRkREHgLg7bUmD18xBCrqiR3jhszDM1UFNWKZeSBrXY2zs4my3QzU8fCbBQbs4a8WwTJS5sVjaohJUrKHnBjv",
  "key34": "2iaVuUm4yQpBKAHuTXwmXqMSKWxBrcsZAkBT36Qjr7NGvuPKrLgNYdxEQ13zNAY6W1NP6vDvy31MRi14StCuZckU",
  "key35": "4muZXVGihwHvw9XXRX3rLLu49cB4CNuARywqB633fJn8Dpf85YgBpNs4V2BfeD7ASqyqWtbQ4kjzp8BtekNWvckE",
  "key36": "5ChvipqZiHih5aJCSd5LvVXsYsVJTfALMTL4Co4nzyJTeXbRg9fHwuYtfo2s4Afv1EMwsrZDjwk2FXfMs5Mfa9XN"
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
