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
    "3xiCEb3DVNqgRNGD8UFyF3nxW3QvRGKsKnT74gFY4o8DNyhQDwRWVGp37365Uy5N81UAKxV6oYoxVasmxmbvy1sU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nmbyE1du3WxSVN4PKGrx528dN9iZ9S81GtQb4wqxXmRZuUTLYuTEsWXxtaEJrGuT6A3CMmYhE438pmUFAY48KEA",
  "key1": "4B73pmwieAxzJy3zhCmF1QBVhenWDvYnPH54uCP9Q7ZA9Q9rqWLVEo9p8wBKQ1dM5YWYo2UKJGZjk72L9UQwz9Ca",
  "key2": "4ex466FEqAzcf9Wid5Vuu18W6yyavc375ydh2HFcNT8wUvKAMpBLPUe16VZPZzCRnnmqCu4saZQJ1QnXj9BzCHMS",
  "key3": "4bJjMfkvvLbpabsiyTfa3hPcfsmiUWRRZAq5beff9tEtYD9g2gn4NuPC9VUuhMvcbDRSX2yfg6SYmPizDkYTcZ38",
  "key4": "StRCB5b5XaFL7dL4qgeqoLoKL8j71oC6BXJpayQYcTZa1p17ZvbeY8xpzYQeLysbdGtQngaimeNRbuFa2GChbWv",
  "key5": "ybjG84BXfRAUGPo3kdzmcPbdawaqDJZmtTJkNvMrwZ56a8EbyAEduo145j5mj87DqVG4vHyUaTky9MraD6T21bM",
  "key6": "3J4dcqdHCRPAzT4GZofRrqvyWcusnae6hBEjxRFA5GujKcVSMRt1uWZPzfcanHmeVTeCYpXFD3NpCSccVc9cjd4f",
  "key7": "52CNmHS1twwNdJWs6KewrcHTYMw2as8gWrDjvwiNzaznZr8Vw23uhRB2GZTpce2HPbMxUR4QMADKZEAprojVoDCn",
  "key8": "SmxpAtg5qJe6M118JU56QqtwfPW2Cb7pcmwB3u8cBxZiJNt89Ejsi9bp2TLnAWfbzuKcsJMHwF61DdzVHzyZp7A",
  "key9": "4kkEptCK38WyZ9DHTSVeNFnK8X5gMs2dgUubytLCmU69eLyzzwW19B5yo6LqTqZfAAwUrSUuaKz9ndKZm5PU1LZs",
  "key10": "3gEC9KnUKLHme3Pwz9Pd6s9N9Xe6u496Xu1bzuJNHFaakJjqsJ8GqocwfyvHaCbrdsh12F2cmypXBH1RHDXr75Eu",
  "key11": "4BW5FZVwx7zNibfLySJjiK6CCcsi78UeZQWSn9NJ1hrnAYbjLVKdX3zDKPaydQZWNFmV2MXQU5iB8R6GYpioMLgf",
  "key12": "58EH6Boxzu8ouvZsP7eNKjNxEpmLS8vE2cDymMywp9dWLyzbpZu9XdRHKniz4C3N1z3g9z5Ro9eqxo8A1GfUFUVa",
  "key13": "2QhR1Yrg9hRkuvSgUfHvfkznzBHAaefqTYyxNCyCTGw3e3xX3MrQfKhHKkGdBNjYU6bkYjZf4kFQzi1ukW235nAH",
  "key14": "3PUchc8gjYp43XCot6u1Z94oX73oAqCEabAKgNQDyvGppztynKz9hEKanNsQr9EYdQaqZG9fQCoPkz962D2eWcac",
  "key15": "4ftrW8JcJR5PYgTShSo818yGGqpwuHenEFcRFLFRFB6xLz6PrT6gfF3uXPivc3FsSUKAG5huK3of47ZzqX9gNxAT",
  "key16": "3fbDt6LP1SbsTPYGTusym6p4YLThDq8v2itGfeVzQPVSvkGncVPLMkNEwbAxneiR1vL2hFUPkses8yGvAdkaPD6X",
  "key17": "5CbYgY3d3fHfmbu2jPdPdhrcqvRRYZSNnB2HS2XHeUaMcRqWEgErGrbHdb9LdT6P7VJjjFMUoLuSvWc7m5kV3vgG",
  "key18": "XLhsYJufr4Ujg6BvLPJWqaaVmhQBdEHhv4tEhKkvMXg5NvRXgyFkjhr5TSHxPxm9MFAVmeS74JZ3f5ZY6EwyjSd",
  "key19": "2Mp29d5mC8HYMUqSuYWEdMRebe7pfuFxxa67gawkdFBHq9bLd8uPTdXbfnF53EvnUyw841wgvu7RoF6XxPxcoFCT",
  "key20": "3h9SkVtPLV3FyVxtdStVEFNSmL6oWCAZhqVyfHCTSdLa7xTELgxCa5a89zihF4chdr2gdAQZK9gMKHejnk4rBDJn",
  "key21": "3WpQDArEEo8ppPD86FWM3faRMhLfAo2fybWaExzdrZbHy4hpz5vrwua24tVsCjWdxzedxrcF3wHUESwo98srNF8e",
  "key22": "5eLqv1npeEjQedJTTtYcFStwyEZ8xRxZjDzgA1jtUgpcGf4PBwhzvEaBSpQLJpip43vCN9sPuSGezfQiZLV8rCkW",
  "key23": "3vYW3mTHy5Fs4pcoacWL9uzYgqD3orT8sDGs1L8TWqa91AwUsdGzb6RzqY5SN8XopL5H9xs6cxkfFSDWaz2cawKc",
  "key24": "39scfKgBgyxBWk8RF9hzMYXupZqt3Pmw236ZzN4MzsEL9QYEwYsG4CwDZvii5rwCFyKf9nP5bvaVHMgBEYfeKAj4",
  "key25": "28b84k6zANuottnkbPDAxhHGmEWRLF6EfFRgqpcDfYVPLuNtt6Vpm2fDgDdC29XjuhzveiD6r5yq7pny9nvMjrLt",
  "key26": "R6FSrUd7Jiyzdqrf9CqfG4LThEFKoW6PDVtGBnXLgf6pUyjLVm1BCGeYaS75yJdXPhAxbTAM2XnVZyWvBdPd1QL",
  "key27": "4BvFGt31XQZYa9eRVAuGsp43zFstbnKR6oEcRTeygnbs4ZFKUiVxAT9KgCM9XaePi7F4rBDyPNKTqbnsffKniRJ6",
  "key28": "91btj9sFh23LUuKj3QgJ1ecigD4bGiUqCPiCnvxyB5qtyDzU2vNS7uWsArtSqMW4JCWByCD36wR2xUJGqfN4DTz",
  "key29": "5ZPdiqQovTugPXpn5BjHZF2U7EJG7KZZWo8YNnSMRijTM1nRbJx6wiDLUU5ZpsVMLLBkGLGFDNqsYngARFBCwU32",
  "key30": "jjxmRbs8zAXhoBJcX4kKMDsRRmeadDc1ve7nEEc1mVfhfM4fqCZqLbYMgnUbCZXH4t8GGFeZgtopS6paKDd7FiJ",
  "key31": "43SDZK1gLTS7PVUBFfi65WNacnGAHvHCMvQhubUddjr7rkcT4v4MyznVSvvvjMLoAEkQiAxm5N9hsR1YQyRDsBNv",
  "key32": "2CFbeesQg4A5TpUKCcyMev2KS8jwANUhgcRcXB8BmG7SefVhoZv4amK2eu9g4zuXqDSUr7ub8HxemDSWFkdSN4d2"
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
