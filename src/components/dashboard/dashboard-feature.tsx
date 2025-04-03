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
    "7xNab1i82W2RJGsqXzWDFn4z2hhxKGLVFRQKNbatXyUS9D54VEckDjox6WFievEFMgruAZ6KVeBiUpdZYyyn812"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JbTRrvsg1ig55o4icrpLfoDpztctWgAw4YefoKEknurRBJgGZZbJrprj3a62L9BNaxrHS7DfhzLAahcvetDuEyP",
  "key1": "58xVTusVpeTQan4pE5VMhoFgjvFfVSimN1aneVm8Pyng6jqB2iBD7jbyuEsVvj67GPc3HT9hMsZQ4FG23C8jxvcr",
  "key2": "2iByMifAFFypqZBrB6vyBnawY2FW9A64VkRPNLH7EEUAX7oCK6ezpYS9ZPVQ8pbuvTqjeBtbY6dLSHRTuvbxNSMW",
  "key3": "vpCGLNLKgDUhnGSCyevzFQ5fUKsm38UoLgd6Nt1AzkDrSypiR75rwqmpjfskBGMD4CDuHkMQfAoWhWcpdHW1ZHH",
  "key4": "2FbccW4ZucBBeifhnAAm49PssoFNZZqoKSEVBRnhBaJq2opWsoRt5t5LjxiuEUTqmeG3CCMkrLKWn5tBoELsUm5i",
  "key5": "4gsaCEAV5jaQ5iv8HEXB9i5mdG6Nw3tZmmEgtoL63BuCkAxw3pyefYQBk2YtefQwJoxzYyNJ6Tjjmm6ShUVXxJQm",
  "key6": "4cLBsTSDocXgvWUJ8GXhbj1eCZWWNf3PguRggossjgDxKDErYPwRoLtq7AXJAPQxLQbZLkYueDCu6vPhjbxFBVvL",
  "key7": "2xAYvw61vFsTQayWxSoGiXBNHRiHexw66B4i843xyqNhzHunBaQgxrVwVXouueQgosn3JPj3S7F6astVeCLJee53",
  "key8": "2yjwodYrFmb1N3AWUBkEVTH1s3vY8YAKC1kd3koVTS68Wcu6DkhmZRMsMzXVJdF3EsGRrnFMPapMB2yggJtgJ9EK",
  "key9": "5iqsPzhGgKLZyT4bCLJJrNapHHZcyfBjPnXWSUfkq2HNc3w2mzS6NRcAAieWVQEXAtGnQiLBvps1XM6txf1FKTWB",
  "key10": "3bkMCDWfQPJmYU52f5jU5sxqhpmaEyFvJoo1uhkU1GQezCrGbPtHRpGNzhkzJnfuUHcxsB38wyCno3c7sc4JSvj1",
  "key11": "5HnTDtgzSTStejg26GV9z6PeduYsLokUCQZJg3zEDyprL4GPw1AbzRBy87nzfdHvH9GvFFWMEQcfeCtb8m99K14n",
  "key12": "3fdTfZscXmaoFs2f9qCJunYt3G9xXYwGNQGNXAL1JatC9soHJo6ux7ndCxaPwjgKbbp3WMVShezfDeKXUA727mk3",
  "key13": "3TnsUd6c7sytSW6KvSZSaVqgYxeTHcADgSKqYVtWfJWi4dXvm8n7gFvwTLdynJ3iUkGRC9gS4tLT9RnveZm5CqNe",
  "key14": "43bWfWSWQYQia3GyvuBB2b6BtkozKZy2MJVgNKK3Myj7a6pz9dGRD2cwUVxCXnRBRKf7yDRMCPbnEgpowtPh7hGa",
  "key15": "jyCXKBjQLVBsVBtX8v5yh93z8AtnEL3UbSqfCcFAfB5ZbfPoKWwoiAPsKjFQqKFZopuDVsT6Nh9HzhkBvzEae9L",
  "key16": "5RBDBt12mSuQV8Aurvd8NypBXiH5sjVBDNfZnkHTf9u4wvMP9nY1NoF1W5pkm9D68MHmuJhYiEZRHckNyxg5VeiZ",
  "key17": "2yZno335rV4cRzy744vVETkSrYCLAt5HwD7YwFnPAXC1do7U86nZtqhcPzMKy8KBWYfxhwbSF7KwditYdUbmwRXD",
  "key18": "2EgDaWX2rxmXBwzEX8oHbiHWkQexYVpNr6gixi4Ba2VPk2v4QtDZsEDfazsVmZAuhxJeMVmtwfFVUZ2tcjCP3VPr",
  "key19": "553yrB5L4EECJkZuzyvFLC63QLRdsBQuo5i4qQzKXecacobBHTFig6UsuymKLnnqvj4vAjDa8iNSddUZ3VuENAEX",
  "key20": "2rVzMMjZ9ScFNx7raK2BpiJgT6FWTqccp5bphF9auk33X19vDr934oWafrrXsVHDzTY1M94BEtMz8mHkKA2EvqpV",
  "key21": "4n4ZREWGa7sbCUF6qFKwbxTH4WXtQK69DcZA7TxXmsJfZBvbNqfhtuVoe2EmCk6Qkb5qv169qDzePb4GGR9W1B8Q",
  "key22": "3tYiqcHZ5hewn2PuDa5qLChtqghjNhsqa3Ro7VfjN6smRkA111zxJxFVHTHKh8cjB1iSwQNN2fC5y75ns8QNhNYy",
  "key23": "2z16qHJDvyZM3vyPCDoqEeQUzmpYuu58o3rEugrpFmL9xnjuY536n3eUHCJ1eShkZEyBjxHtsNzdK1emYMJBij6N",
  "key24": "3oeVvbZURWf42K3NJxaXV7U5krWL7nLvQw5Npzx9TYWTAeFA4ggHhBBNfqEWWheBqyDY4XXknzn2m9Z8nN7LEwee",
  "key25": "5GhYtYdFhHb1Sin3GhUjWXsR87AAAK2rRsCyBCtHpDDweLEd7quj3dcupMzH8JD4tJw6jks11wwUKvXok83Tk2kV",
  "key26": "27ywJwr2NwS7PBwPPEf8y15wDaR2GiHe8jP7JVhmA1L9HPvhY7dKpNAejZEdwY1zYRbfauMaNAzCg76LuqWdEKy2",
  "key27": "5mRAiPVwapYWXdA3QfehGzc8UdTLRu5E4ebytGAycneWCsz9ZGexHt9tbonbSMQQ4nj3w2ncDEVjqja8L8gkc1bp",
  "key28": "5LgHzi8DWSkSurUM9V7jGTy1nh6fWGo7emABEzQuKA5ivVmKvJrF8y3z2fxspNWf7M9b4bDM72znUgB3kchG1A4Y",
  "key29": "34b6MqJL9zLvy4Ww4B7YpzPDxXHxeJdu3BDyQEg2E9VZrHc5dYR3UD3Ccwjz8UoQNYwmUSmjUMBJzPWq2UVcso3F",
  "key30": "Fb75WTW2SYdEgga3rCQ9YUfTg76o9ukUa8585v7G4hSsPTZxvtDGZaJqqdiL5dUsm4KPrYPcDbUpnyE6Dgtj5gC",
  "key31": "3jHY9YDxvwXgjKHoucxF79RbuM8R2JPHbLSyWuwdS3kUUXcuHm4pX2vrPTG9prxHeMezz4aoG2m8XD4nmGmJSJJn",
  "key32": "XHfw9B5CuixfUfu3zEin956jaMDmKRVzB31FT52F1gf1EGgGHTP2wKVrfphjJRg7FMrRiGHPaw6WrFJBx8cZSbr"
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
