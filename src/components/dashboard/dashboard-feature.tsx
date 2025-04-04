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
    "2mb27QGWHTy9NVfjLxSEXkLmwospzqMcjtQebH6gvDxcu6gq7VPrUXJiQbUzJ99KuqJCh382GRogsps29Gv5UJy9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oG2d3vX99A5R2HGMzRVJserwFuW9czWNn2GzTJQgsDHnaiW2fHq6FkCAJXwQi3D6JZ3T6it8b8obYbhGrJy46mW",
  "key1": "5oPrFaZ24Jrtfx5wFoebhv7GmhHPhrWGDU3kmQnAQ3sWbCXSiSxs4TwexzPRrJL8E1fRBsanL2q8vSWeC82kBC4F",
  "key2": "4kbLwTAF83vCN6s1aPM6kJKcH2aGGN1w8vPY4QZLpH7fuGuhx4dYbXGs9dUYZx24WPUEGXAuw1TFU1oYQnFqgioZ",
  "key3": "9kicE1exH5NfjYdRAcXMX9krEXy35E6sidGog5AQJpFD8hqtZE4ScaxUHNj76gownhQHtUsmTaSkjL8wXyiKZFm",
  "key4": "3Mg3BMQwYwgknz8k7GFMx3ijdLPmViTXw6XSvAEYjxNWLQbJHiQjKhRwMQXVZBdkBdLdaqH6iN31Mi5SmBibLWBp",
  "key5": "3Uo8kJdVMih1xRWzStJF4Cf9JBFrgyCua7fdsyzmZaYvzAe9sGXUW7b9LwaUwXfHPH6y57sjqaeEd2Lp84rzqZuE",
  "key6": "4rQgC7Jk5EtvxToqqsNGHHAXcDRK9tdJLRxignL5aHagx5W3aY3PqfK5y7dGtt9b2HbE6538vRfxGf1uNevZx8CK",
  "key7": "2F3T1j65r4Dq3PT9s7Dx5R9buYBxrY7kY659bcMRWjVNgmGkdwUMue8EQx4QEucy928XoYnyTnqieSUDhHgcDcAw",
  "key8": "WP5GLBkXqUtbhxqozq1d3x5Xuao2S5inZfqyiayB2wp61cLcwK8cLw4KvCWyQAy5dcwmxhTZpa1qWpeQBa4mehH",
  "key9": "5q6b33hTVdWh3dgVhwkk3nAYGuHbhcLFppj4Dh4LGpzNZvPkgjfAk3GxUhKa3MgqvQmroZTfeAMxNi3YbdKn2KDj",
  "key10": "mB7wjvvsFVNhvBL8bxEd2YRkYVuk4GL4fkpsQfYs7jXtEfa8L4QXUVKJRaK2ttZwuxkioVCkEaJMYbfjm3sZ4Aj",
  "key11": "p3HharHQiQ7KowXMwkeLxy2hPh3ScVPpKdhfnG5H4d7xwxGPh4VNDk3iQfa17SqA2X3TTpFt6gk4qUKj9Nykgfn",
  "key12": "5NtLc5Jyfkyhxh8BVvQk4oUoekgbEGgs8JDHi8L5N8ws4Nrt9MA3nLmg8aYu6VhsrEGUoZK2SzPtyp5QCwuZbj5v",
  "key13": "4A9e46LfnhpaJxj7zEZwNJBw7oYwJiNriS7ehZP9RR7zP82vZi9wz8UCjoVnJixRDXL7eMzTzpEq3GSeeoMLW8CB",
  "key14": "3LS7afBTSEFqzYfVijc92URpydWxHGkoz7cihGoNUbCZQWUuUW8aHhytXWiGNjF9tF1wj26Lz6eAmpMDxZdtQ43g",
  "key15": "2U9vmj24Ff6rk5hkcg6UyDGcCADxSHmuTPFRHBQ2HrV7V59qkqpP6daoHLVVBxa9VwDX46S7dLqhrY41j7D8ZEFq",
  "key16": "2u2PuL3HiDbJvrwo9SLJ25aSUuxpRyAeSGMPjKaKoACA7spou7mWxxkZwFM6exV8h64Qtq2pRfSDw1SyUwteSawt",
  "key17": "2nvXsDwS44TFgYuweYT1jWtqs2Tfbk3KgSTyL7hqDzhqPo4mhUzkPJBMikT3rvniRVNXGJ21Ukc3m43AriyUx3PG",
  "key18": "KehXe793q2hETViuqRW3JtaHYzqvwfvTogTyJhLtukSsvU85yYyLKD6tGHdcgkznhHeJJV77E1hPfCs46LrkfFX",
  "key19": "k5BdLoJ8QVQidddfK6WwkHGFdZBRhQpbHyAyif3yvMZEsUe9U74cWN4LJqZimjV472GjDM6VoKy3yDuSTk7JfB9",
  "key20": "3S2bYJMBAkb3xmHHsPLziXorKL6HSg1xXonamojWWesuMR9CjJ3g4TziC4oydHwcHa6ASg7Pw5FNMsq3UyvgTU9A",
  "key21": "29F6jULibL3qd27an1R1G16XyBwDP9NZWeckB49pknZRGVGmag6udMqwUkq4vjs5UsGkqCDCAndc6hJ8P1m3tKu1",
  "key22": "3z78qkJRBrSrxkzZHpttCVv2CMGAnfYBBRoG1A3KQuKUmYy9WS6Cm2UCewpC17ShboU2zkhZGG8fVfHTWei2ureT",
  "key23": "6Ts9jsAMSAJEqbNquPoMPBBxZUJbmUeJA7CzD8E5YKHCGyHz2UZqBYa3exyzW2wKEyyd5b2CHkkWdHGiUfdWyiF",
  "key24": "4xtypk8MyLdnsVBbNvBq5V82nqw9XoaNbR1vTeBVV5ThxDKDRKNLDMSXytowFnaxopHGowUeuzX9deJogcXcFEk7",
  "key25": "66u8i4iEgtwsXi3c6uVeXjAyKddotcYA2ZPtzQka7jDw4C6yrC7ymayNmeAYKXj5pWGAHs59xbxe528T57o7cCDm",
  "key26": "3eWNNTq5NP65vrqpK1vfHvXH5WtQ2s29Pb4mKTfKKTMDqFqXDKq1hGje7MFTCAjS45ybjNvw6VsuvHjWxccgMACJ",
  "key27": "LFfR5tp1tbaifJ4GSRTm55Ny1ovhd4kUcHcHoHs7R6tyq6B1WNgVSKAB1rcuWcjLLJpKMhUrXBJaMTp9K2vAwj9",
  "key28": "3G7qzFf2ACtv3xtkPefmqQmBmEHm3fRyR4XVQVrVQyyqbfK32BTEL5uNoSzfHrQfHxEKeVceWMSxa6cFTvANW3Js",
  "key29": "a5A2KegECZFcvB7uwEHMhLRFiUsSkrXQfg8qMPL6crChzYGBaX6smT8NkgLznDHLEv13TrBEbJuAKxj47DFcG4s",
  "key30": "2xAYdErdBzrBdGQ5TaQ1qzaPVorMhucp9kZQXpjQjjLg1XnFZAyRRZ8y9rPg2jySvSEUZu2QT1tTYRrCfimKphdn",
  "key31": "45ZB7cz2uzai1ec7CvDUobiJTKAKNQACrhooeaJS7NCf6dSa84Aw2NUCRhjxQxZfNxEBk4xcR1MP54GPyuE3UyJf",
  "key32": "4tPfaCHXHH5MvZG79USXV2t6KXUt8AHiQFU2cUEU95QzjY5GFFFfWxKHcASvqMmGRNwFf6GbANe11YcraZwNmvGU",
  "key33": "5ofQ3GKYvzNAH9YSFSbpWqQHKBUy5dXWumYWXmH89AvHdHntW3h2nkAqGFvJZdk4skGWknqL3oiyKJgbSfeT51jM"
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
