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
    "2uNwp2qTeUpdaQF3gktupEDTS4dGoVGcy4dHQmt63QiSRbf9Sq9z75gasCJnjY3zDCLXMHGfkshvs6utxpCxpNy8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kA2NmMJptKM4xHUvfGhWKBGuPRPwujb7khEyQmpcZtJV34wbWdFqTh6nLfSLD8JVZ2Nbpx2M4tu8BYYPNQBPwz8",
  "key1": "5RjPPvXcGHXj5nEhcxWWfbbd5whmTAEZUzcmzvxrEMgMgAUMDy2qBxM9J939LRxjnQJ7JrBv9rF1a21ytBAtCKki",
  "key2": "62JRcbvtNxwRT8QDGxazZryxwsjvUZqEveo1coFBWi8PVvsXHbDx2HfgL9AGoV7JHnz8PHYvn5ugpBGkpa7yw7Hm",
  "key3": "8voDnGKrWCaj8X7krnK41XTgqEcfrVcwWYuRmW5RsCFmRQVqEHQu491Kbc1WgpzZovkZkPdhH38vnoCncbrmkYU",
  "key4": "2qiv2ezLuG79s5zCqTd5foUFQNbHTenmTs3fdednvzBSfpjkDpbFzNLbrAvDsaEKomTybXC5Vabf2A2kmRDtkWqA",
  "key5": "4akSrzLCERJwS4pT4ArbkqSv6N3eukcxCmfuienBjqkQ67xQBM9rQ2c6t7AvysTmzgL27pUUyryJ6h2xeyvE1iQL",
  "key6": "4dscxZcYuUe3gzNw1EzqSXb7gMDmqhraE9pSgJwBQPDxnBy8CepStDCKBif4qTwi1fUYKRdxWoyKazSjfw5JSXrX",
  "key7": "AtaZTiy5ysrdEkQ382sYbjhzjcJQvPyAxnT14pQDHAX9QLQSeu5SdiU46ibxTP5XtMY8weySuz4uwQqkhKUKrhU",
  "key8": "3398qEMiYuScZ5yE7GCntr8CeahQFndXwmRhY4WZKM5ZsgD9SJib3VxHYp5n9fn6s9ecs6VDAas4y3ym5YEMsXzR",
  "key9": "4g4T5H4nMNQK4KooxAm4Jpp2Agt7ZXi6povacwaZjRs8psjuL62XAi5c7y2gWS5ULhvrzvTz1Sy3H8pe7kmZq85R",
  "key10": "4ojf9VVvc4GX6F4AbdqoeEhvaF3xbE9dVPWniGDMrxaRbe3AQ84ADqboK7mjR2wFhQCLWzbHhmPuiRuUe5yuGS4P",
  "key11": "uApqhBUskKtqbxtccQcPBThu8VsRkoMRFrvyZunghQUy7g9CN224stcdbKvso5piFPQYaFNriFu9TmjM1MFA82i",
  "key12": "35ntNahKsVNdyVagVvc4HqysjnDk8e8p93P4HivN1d2Y64AS8nvCvLswZ4TrVWrPmFcFB9oYq9QpvKed1cZrvMSK",
  "key13": "3a2zk2ApbMXdrXR5fTPwpgZHKucVT1TAsNDSozREuBM5946dYct1GEL9CXoq9N5sLKb8asoY4hdWDJ9Wg2AcdR5T",
  "key14": "3a1YEj7BdoRKSYbKpWmhufksG6jNCKgTnxZZdZjo522XPNWTAwRvgv8nRvydeykLoaZXzJdyTZRJENM66pnAPQg6",
  "key15": "3vhHQyueTDuZVTrsovETSbZ3EUBUZfKiHbs7UMSiUxJrx1nHZbChcJAQAFiWyiycE5tV91878XEaw9ZUfWvFkAZJ",
  "key16": "3H1qn51LNNW35B3rREw4ucJyJE7tKH5VavLCnHVbb6QrvYURqKBNUDhaoogw1JWLaX3rTYxNRLv4TCdhjJ1QzAFC",
  "key17": "4SzMRNy6ide2w5eRyJe4hWsLfYzoAPk2JZ3p1RNjS4dvW5qmQtJbBQjnUvvBCxhDSJq7e1yaJr14kAruV1iPJhjD",
  "key18": "4sBq16nbNL3ZNws5VSY5QJS7dEz7DipA8i1qDsjmSpATfv9Nuf4aUgV7PFbEDdWY5deRDqkgcBmnyEY6RNMohL2Q",
  "key19": "5U2uNa57gi5NE9TcXta6UULf4vr5XXq1XVcoJiutqvikkCnqMqNiuf1kWSMSjzArejAYaNfy56dhKV5cF1Z2usKy",
  "key20": "2Cpg5mMA9nS8wxPQe4XaFNuYMmEdH71VVKGnc4xsUap69ZYaGCzZayPBhhpiJpTTHQuwmbctYaNuPmwm8nVJk1P2",
  "key21": "5KBrucJQyk5g6tw92ShHiAhcpCJAwjWoT6Kri7xKyC75L4KEsBXBzZz2rfdHjzTgA5Grj8YapoYMNgH7s8Q3MpUF",
  "key22": "ZM7RJge96KowPQphFYi6CjBkncMYBiYfYNmr8FUsFahwfnCGeRPTvUWnmeGGmNpAquMT6HGzH6CTQesuHSWLhxe",
  "key23": "349CkPMi8h2miumXrnf7wB5pQw4XmizQWQ4kj41goXK8ubPWV6pNjqpHj9wyGmGYBBXDcrmqrteqWrxr8DyKVsbA",
  "key24": "36xP2UaLG5oktQjre4am6UByPGs7iCx6Lt7vZ3MKwy3cTBxssbdjuevrMCwh8q1eZKfR9zfwkeTgQBk3vvLBJYg7",
  "key25": "5h5MFwEkPKnyh8WscbsE1nFiE5hr24dYALDDiXiTMBs5LUbgTWMsfRAuLBYAR2srHgLDdZRCXsgi13Gz7qsiu7hQ",
  "key26": "2i6Ppf62keyk84uxZUuyQfqLD8WxmtoqubZDbugDN8wSjedMgzB85D9t1MA75MKKdcitQqG8UKgQM7wKRwQ6mfno",
  "key27": "3wDu8jCif4R48jhiSoKEYWD8QCp3YVd96WmeKSpGbzMZ5EyjYMZFQnsuPjXXU24H3rCTDu34ifU32Sqa2gMxhXFR",
  "key28": "4FqXd9X4LP1T4dW4ZAF6JAyEaCzonoWd9YFtd7NcHwwKvg6GnAz1fYGzJD7Rw2aMSb3q4vVxhZx7cJfRFBXTj6v9",
  "key29": "5k1LPXxK9shxxE4JXkAyyi5XVu81mc9dwXhTj9tmQbTMdpmQsC683TVbYaJJNjpvHrH5C3T4ik6zDoyU5GoT7xsr"
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
