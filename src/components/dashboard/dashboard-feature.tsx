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
    "3LNdyPSeDegQUw165oLztbo19NZ8nTkAYSX9QBTdcXZahhHXtFpfQJmfqtp4Be8yXUyr3GTQf3pbmabisJ2ANMZF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "352reikF25bCinascoCbsUXagrdAEiAkVBPkUwAUNqJ4AkyZR6cHUkvdvbg4xu6mJcTAUMyz5EEsPvs9p4tq3BBi",
  "key1": "579FR48GjDLVzMJNLAHaMSAHwS8hqBrW1qcqC3JGQWSHV25tED1ecZH8bE6zCYb8MVBmeAAEtU7rUfq2ZBKQUY3E",
  "key2": "5Fng4oA76sKVrnm8wJUtx8AyDJELMW5qH5FCoUDjTssndFg3rvKoEaMZkwhsGyjq1K7q2yTrxue6BcQirUGH3jDv",
  "key3": "A6kLo2XW2bryg3SZFP5FBR9mXmQ8FKYnfN4KsjHj1M7dKokRqtAT9gG5Z8uDApHwim7j2h3K6T3KFyugqXgswzK",
  "key4": "5mbpQZ5Dq6Hoqye3aHyUh367LbJRfbeRz6Hi175tSiWF6fMC6LjnUj8KmhLhqx9FAnDL28422H4UgcFQm7Lv5BUj",
  "key5": "6FwwkfhDJhtEkaTExmCsL5cm6cLfJogWwYUBeXgq4ZznmQkC6fRDTCveJZ5r5myYnKmSZ6Ekbbcm6v9htB25Ryv",
  "key6": "36QzCYZhr5h9rR4u8LQLoW9x6UMLKjKwJ1Cb4UDwgDCTt8nkjAh3eAuv2dm2icEAHuB8dTwPdBFokpLqWzuDY4un",
  "key7": "2JUChE1jMmLUZ7zwQQ9qDjaAvEsQhsirGcPB2BX7BUENKyXCqAKN9TkeSeKKrd6bEdB5Nf2SYoxccG3J3LzN8pR4",
  "key8": "3PyTtGfSD73M5ZF9sRFMq3vHSa1GHtbJG7fQn6QK65c2zZvL5efDbJmEU9v5iTNTn3uLDkNcGZfsT1L3RmvDibWv",
  "key9": "5u6Z9CMF4ZyZEr4n3Kfx9bXAtuz1L3embXYQMBUE1Ed7TiuRHYMcUGAKkZrU6SLCuRZJYmHG66evutDTQcth8Zrz",
  "key10": "Z7i734jS9uiAUoNDNptdwqsmettSgQiduk3igfQjF1oetTA6qEif5GdmLmYsgrD7GNW6UYGo5JMrQXhC1UtXAn2",
  "key11": "4YHiCYEATUhgFDiKrnyKZ2HXLDuNXMySRn7PF21hQYJKUrLcmKhHW9Q2m35ismCSHv3UFYYjX3oLLGkgME1p7Uis",
  "key12": "3Yyhazxd5qFwKbGJPAvMA45VwbmEEFYLZq6hHJLqPnxgavJq8UXCjsjwt4woFReMmLqT3YjZ4ybW6BwhDGrY89Xz",
  "key13": "5Aj3sdcc8ZjSof55chvvz2JUnq5BSmdrXyDU2HcnGw4iqeLSKfrXwojfTPrZunsLfK6JDiT7R8TEQwuVHMaHQCSQ",
  "key14": "3crQPaX297YnSoCSyhAkDJhBMNfR5G1f8W6pDo9b93LNkzPAg2x1zmPZb8bMHqDB9vk6CSDfjhT56MDYFmE4haaS",
  "key15": "3Bx6dvfawqWiVuKVbfCK4PGfmBPtdgLiMooZQsfU6kjBhZm5CYG78qVj9yhjXAFnfbpoYVyHsbBJisorT94tUVFy",
  "key16": "3Q7EDEipBqD8r7Nk7qwhK6jQiPjxhgbbABNz7CexuNnpPxbHSZ9XDkSBeQUP1bYd7VTqmbyK8mZRreoVgPLUtmFj",
  "key17": "5dRFf8h8n5Yd4UggwAHxYL29AEajzJDBYzvH7xTtptPd6UczCsmRozF2aH3MQjnmFVHftCPcvKP2wWuEDSXYAL3K",
  "key18": "5AHwTicjDyvH9UNAZKC4hjwkDkcDe6Pf2ENEuWaGQJcabMcW9NvqQVayLZoKbk9G8nMS2XJcMMNaRhEyLJ5XNApB",
  "key19": "rUhCVG5mxXLeAdfkwmqvzy5bN87UVLnHYM4qWvrKLnmG1oDpqXFUCELTwZYZxQ6qa6Jn5hVJPEDhRJtStDfAAZH",
  "key20": "32fWHbAok1dth1hhmTFmzov4Sfwjkdc6eo6FtBpdDuGE5rHE8bTJ9wCwJKQUpQPPmQkpuhPkXwrHJNSBbTeuD1SR",
  "key21": "vfSubYHgBeJ57mFYMmoY8dQZCwK8Lfhoy6QFC3R45STy5jbMLoA9DSrmQBU9XUr3WjbzpgLDUdgwHR2PazDuGV6",
  "key22": "5bunTJD2mGJbR2iyaGApEJNY9CN8P5794AwLtxDoj1LNTnr5UuSeNLkMjvxYRKd7iHUqQKmoZH4vAKTV6TsEBD7D",
  "key23": "5a2xSYfYnkM1ygrP5cNQxLrbSr8PJ8RLTZQ2vUMoae1AE6vQRgRrauEULQbYLskqAWykja9ZJEVES9EEaSHdWpUc",
  "key24": "oDXiBZCnuka7uyhkMfGkXER3rcTNAZP9LBCkf5hLXi28FWNyARgKfhwZm4Xp3MtsEMuCfz9wJVBrMeWy1AQ5LKh",
  "key25": "5TLNPyfvkNpBsqwJBzPrZdUhZUeobtKuiuEgwyW5owYo8oGTfMf7YwUMpah2qziVJz21dPQcZpHYxS1fo8MpUeTJ",
  "key26": "wHaMRZNf6aYve15qae7pyFTdm5rDyw9EzoNt9xi6XnZUn2ddYXhXKJvyxBEfWdpNJgeTmUEotXAnnSG5wp92PN6"
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
