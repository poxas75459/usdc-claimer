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
    "5YHbVP1hKSb2JdhqgAdDuazhjpiV2a1XziyfPFzmHCB1z6AbwWJNkzsQuKr3WwYt1F47vF93y5CpFvBY8RNP7eWc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3D7dxaNKzXtNq5eqN3HteA3a2RB7cdPQDZmJy8fw3uQMqpyFoMCKtrXxa1kMhBoqD6MYBwwvgjxErJREGPiQozTb",
  "key1": "3hsJnkfYcnc2UjQ9cmfqxkoAPx6vYQYzs888tLn57SpnjPQjTY2nv4mrUjM43KcxrCRWhXt9oRJKFynrptqQ91Aa",
  "key2": "3rtHPZkuPgcwutvYLmGeJaCwRfWtj7ugzWEqieYiAp4GebffARGKeQzHPmM9ggcSDgYvoe8zSwbEgr9VtLoJc4FD",
  "key3": "5LZc4cwrMZ8WpYkbhrpvPKCfEqEW8DN9D8BXGyjCYFCeT6whiAkwEgyNLJgYhLQAvsa2eC6qcqXkigguF5Cn3qGZ",
  "key4": "2JW7vyS56UxGLCL8odq4BRRdxCVAYLmbjiPqrXgJKze2h8gPpXNsMstUuDz7Ugij23boTspSQeA1q2vBRL5QfwSf",
  "key5": "4qwe4TaEFdh3sjRiEHsf9uun9QJFBR7Dd8TxZ3tkfnby3aS3t86wnVLPpr2pTFXr45bEiFWDE3LQ7cUriFqWdeo1",
  "key6": "3SXnmmGz7jz59W1Jbi6patxtGDfzgCPTVWpmuTeSATmTKTWMwUBnQypgrNpvKqg2C6GcZDwtJw8GCjSeocskPd98",
  "key7": "2VttERBdXNkMedMwVeu7kkfg6LL1ZGUbaYkxCV3fP4vBmZWrq47vWuRHTMgBefFP5RmLUg7EGhtUPxUh4fss5saY",
  "key8": "2N3HbkQSRuy7HSxshRyeyjnUnLbBApMYa4vGTbVyKEaDkCQM5oGiYqFZ5vC4AHStJR4i9z4VVERZCS9uGP77fCu4",
  "key9": "5m53TpfQJSjEknWYYQwGwDcdbxuW5q7yPnGQh95HcJAfQsEaAmAmvHWw2UN9snM3zLth75FSdndwRYtA1UZBN9Po",
  "key10": "3MrR1vJCEERBhWC7p9zTXfrF1t6C8D2vKm3hjCcmHvEvmpsQ6VGqzGQ7EBStKwKrfadkP4bHsGxZPKpjAhD88kBb",
  "key11": "4TZMjDhiNe1Fmm8tBBVK4thb72BzReqkNJG3uXvRRTADjjSrTvRDVMGwghanghcGtdxw6C8PY3raT9WLBBPDX9qd",
  "key12": "3vCbGe8uYrZzKtkucLKrpLRuDnB79CaTbkJBqnuXzzspY5a4LyNGnyMyz42cGAcC5G5XqaMRnPFXpbqBUDUz4dMW",
  "key13": "5LqE7suQH8gQvkkrEvvczdU2WWgafBMLLyq5ZefoiaoYjoYLpyk8UrM6yKJDCbjtBQqHW2iAQgUpb4ByKnL9nBhm",
  "key14": "iYprhdwTDPNaUdKwLzfmKjdGhZDYor7RDWcBErJy6TcRVf6CuscJzthX9CJs58rRYD1kqmh6aMcxZH2qKgqVxNr",
  "key15": "2tz7vJHnJwBQzMCwWH8bFTighbXpb1Cds44qa4RbKjHFdfwczsnVKhqSmpdqxkUixkEMumk7oRkV58stpyhXT3RZ",
  "key16": "4wRrZpqamXQBnE762kgKJS6LxMNhPwTB53xGzL6gqoCf9Kc1uLGieevbwFRTAsQHXMUwfBF5RWjSarFDa1KHEE9u",
  "key17": "9AukYwHnhVL51JczQrd8hgJT5qYSaUNYBBSeHfpbYD4EhLvk5p1pzb4XvSSaUrWEcyBfTF3LG8JE7zKab1MZo4Z",
  "key18": "2NikaSSwxJGh4htzTkFQds5KxJ8w3hnt7gU1Ht5aTenDemKeCnJwLNxijGFAUJXmuTMi78FPJ4xVWz8JfudXTRPw",
  "key19": "55aEZcPVm9XFcL1bEWfAY6LzZBgKiBq9LHS1GyjyC3mUb7HSwkZS79hT1YWE9eofusLcYQL5nEUvVgTYFmoFjwKw",
  "key20": "5X1ZbbrJSMPEJrrzjSfc5A2y5Lj4CnWsET5aY8smPut7XhjCBd8MDrJRdR8UNSVoxNbtv5inj2Pg3fQDhdB6jCv3",
  "key21": "KHp7f2VcZeFtdhnQnmw3n1pptdfGj5QTJa3jvNCt1p9sfL6QoR4csdcRjTfg7QpHvCaVxq2rnFQQkMMWeAgp7L3",
  "key22": "64kyUUTMaa7WadnwwGEDLfptTAuejzhHmnFMEj5QGPUo6kaF4PT7odxraUu1aPFZJHQc6nDvWXryktjiao8Z5xW6",
  "key23": "5fRrwY7JqBX6zQZ71ToCTKNiHRuF5JG4iQ2F2DEdkGvxPz7dSWsviS9fGdmRedmb54onFhpupNUz5JH4wvGp6AHG",
  "key24": "zPwmzWFTBQhwnwKhXTjrzyvcdc3jywNjra2XeZZjbbrGsenFka4pEk1SdRs1vVM8b3ugtW4oGNNnEbGvSq8bReF",
  "key25": "45mPuFCagpZYPky25WPWjWBbTqUbHtYEqRxSedfS2rTVvj5sJqJRTbLKk38Qq5yMr1caZSnM3my6enxBjeVvDn1a",
  "key26": "2UNiWZ196tMmeDpM9S4kJFX7cKA4oH8odWTk3t51iLiW4GrdwQSXrMGq7R3Ncg4VWvDtP3QkUDJZTkBnLdMtwTrg",
  "key27": "3Trm9y9dM638tZhYGkZz3mYgTx4Nkh5RHnQ3NjiV8rDnGj9YLMUFoSHyDzzhJaBheGxcwE6EJDJWg8oBLbn4RPQv",
  "key28": "31J8TRdwL1rZs7VEsfgmtnTTtyHWBiRuA4jE3E522nNvHaHARtYZ7EQtFx45BenD2Avom7bKLAJjwq2xJPjZvRB7"
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
