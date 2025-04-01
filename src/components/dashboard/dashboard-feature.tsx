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
    "26HyD1KrFY46zywL8H7qsPV5GV3EoLk5wmd6qiNYGS8gLSCKrJWs3DsQa5DcjJC15PDWuqGpXw6qR61veu1vvBkN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MwbKhXxaZeKP8RoViJUBchiZWz51keYrBzLYKoJtC5izkn5fyGee9127DbsvsqHt8QEPaP3dNY51reiLUxAHbZa",
  "key1": "4poCzdwninKUSqEmyEq5y8X9QCYDcUGRdSAgppazmtGWFdMcJUGRmMU5qiWj3ha7gwPwCpSoPan4dwjGGdyMkvre",
  "key2": "2CNCHLcdPxN8n1pMpu9PkAYKFA2gJQhXcuytQScYqNFyGPGsnydBF4UfULNrVbyXpCZCHHWkthHQ4RTP6sjGufEz",
  "key3": "5pbHVdEtHfqKWKPDYQh12sBZuHjUFZGRS2RAFfTXMor9hrDh4jJW955CASHymzdWtC3FTcvTcA6ysSq3jt4PokaN",
  "key4": "4RiwLyAxdTr3yW9dDFZaAMSyfexYFW4NtwopHyVnEqnEnwsiRqxqFYfQ6sQPjWwvqFD4eVp1xBnXdFb5KHrNRFq2",
  "key5": "Kv5LEjaDeUuycKfSC9BCYjYA894Z1ViByY7jd4BJxVPhq1Com6ivVsWt6JFQWJziYYDDDWBE6zDpx6LKFqzScEJ",
  "key6": "2U1BnZUhYxH7cA2SrHR8re7qCARqQ6ZakHxDtdEHPyyHjgvcfr47xUNh8RHtf5kbwaoFA76ucd1C5dkeajvoMP3L",
  "key7": "RWaDokm2LnhQyGYrdt9joomBmwUyDLDYUMhWR4a11Z6rVcj4bruYYj5AJswFQL1jZfKdjmb3kRKKhT16jrfndyy",
  "key8": "5Y4g5DvHKeA4ChQJqMQ7R69rRgRjEALsmgBjjA6ERz7ZF7tUwHRtmb4hyGBrYWfJdsfh3sCwWhvuDFaQDqmmsA57",
  "key9": "qGRFdNV9riW6FNYnPpG6pp4NgiVUPJAyvwCvaviz9G1M3Uz7cqLW5yG3rMfReFupq6Gkqhe7VMaDM63ehbDc12Z",
  "key10": "5L92gDeigw6PoJcEknDAdQYs9NVULxVZiuNXBnzmxGgLXKQfqaxYdvhPPdgg6TBnsj5njuXPFtdLA6egdNGTeSk3",
  "key11": "4GD1zB9tSLGQSV7s26vsgVe2yR5rKUMdniAi97ikyf9kYB4ZRcvgmtkGinUHhKfsC3Kv9Hwwe3WUWhGZtyDcMDcN",
  "key12": "3cgt2nSLV6Brn5BMKCcioCppAVjJ6YbKuESHBiHXv4F5hAuynEYKF5S1U82rpp8YKyn5i1QVTB51n1JfEpLeJyHk",
  "key13": "4BJ8cPuFJyDT11sukkcCgggYJ2ujEyaDiUXfiqSyRjpYD12HVGb8XdYAAdHMmz2u4SLA1dBUUxF2614df4DcPusX",
  "key14": "P8w7br1uU4uvQL9jG46iwoXctK1yDPY6CHQwn297rQHor9y5ftv4NMFEMHoHTTbWvirA4o1vSjY1T2K1cHxMoFQ",
  "key15": "3dKdYcwX26ZnmTjHbvFuJMbuCKHYxaFkFQB4dL7iPWn38Fohzm8Bov6vZXUP4ibirLCgjTyiKHNzfDZnrcxFv4jL",
  "key16": "e1kCQxn2eerpqF8j62t3DDKkBYTHMe4t8peu783fzpGuy1dcRC13eobkGLQ8nQEvprvoAxxMntx3q3HNqDnjWh9",
  "key17": "33tooKwTC6GhPguCnXCTiu58NTGNNB8d2k3eABkF1TbpLTYV3n21fWtgW8W1Ns1XEFLkH4QHsUwXtGatSJYbHUpC",
  "key18": "2fXJ2Fs3mLoRdBbdtWwLNtrepxjFf1xgLYmGSZADuC5zp6kBzpnSrn9GSufHEa3XPuDxLGGx4NFbABWiDqidZS7",
  "key19": "4CA4ajXvdPS5Zn2uvAi4HiBu2oUQUzzBJHk5ZH5jmpASCqf8Nr4UiMuXDGzFJVehYeXPzEwXrvaNXLfqxcBEqBe5",
  "key20": "4rtY2QkEdEvfMukFWRVnQyfHPcACRPVaV66GgtVMhhyJeg6oyCraPmqyjt3jTQqH3JdS3jkemkEKCPHazXeZj38L",
  "key21": "ERhzUmwo3kCFLEWNFHB5EvQNVMnNQHGD2Z1dr2nPig7MUSnSvsUYrUbepQmx7jfgHa35EBcebkPwFMqHN9zZ3i5",
  "key22": "4NdKzvfxQ9CuBQYsTSFmjC8By2tTrkTUSvEotPrnwPLz6EXncSK9aA2JSxB5kAeQccbfgTheRxSbLYhQMBVkEaqw",
  "key23": "5ScGgNiQYFeJpFaB1w7LcNjMkUNffiA3tJDLWNYZFR86BCgumLi4QVEaWz65cMcWaijynJXXEQcExwvfcGtx6TMx",
  "key24": "2bRHAx1eNCdjwscqzz56qckQVSJpeJTLTPwf7R6SNeKXEy4weuSLJZCnS31Vd5Sq2VKSzoFUh5edsPLDBHGSTekK",
  "key25": "5ReVvNVnJnfuhqqpRNDZ7LQHeKU8NddqhmuNkC52zHT6iQRHiYQ3AFK9b1YQYrW2C9NnXPRbSuYfyaFz884z23as",
  "key26": "4AcZXBovHMbtQFxMbvLvTXVLydFYS4HLx1ffA7b1cBrghkS2pP4iHhsp1niVwkTzDispaX6m4g9ZjaKvJBmaBHEB",
  "key27": "3UHpAAdtdaicMm8cfiZmCEgpyeUK2Y5QnLDaAKnEdTnkAvYsUqsfJ46bUKSkEHfG98uKWn1tFSd6BGpX3w4HWnoe",
  "key28": "QbBWiVq2oUpHjTDHRdQm9uwD6GbmBS5grnmSxCpoX7rFPXhwV11zY9yBwMDovXnJ2PT2ZyT3wQqgqBVGigpL1NP",
  "key29": "4cpN8ctMyfzhXsaBffyfDGyyYi8S6KzMA1LVEGydxcxH17uwSTyrjkSQLC9udZmqitmAbiyqJK1tXVELYcAzDBb",
  "key30": "42XXqMXajKUXMEEu68dWorzFbSbNHiGpqDMWsk4HZnQgyGxjGuf5g9t5jaqjmSKEVMnqo9BxTvj3Q8bGJcd3bMDg",
  "key31": "295e3G8bRF2gVy6xVoGtkiptyCavSno4TtgmAuSCGiMJWJ6xPKgGw6jhKMzJs3MMPNQSC1cJJrh6y2eUhFmxc8YA",
  "key32": "4tWmAezEvqe1Zj96EX3jvpXnxHXu9v8ayzZXFyQhi1H69Rea2UrY6ncpZBX5ugsRfvmdgBTeDquF5kHavzWbVRgm",
  "key33": "2s6usd77fYyisQZFxA5pHzFKzJekb2arpqCYyTFqnZG5gL4Bp24o8DHruSnLRsJeNDZwfJcqEfE7x59ooXXFCyQV",
  "key34": "39Nku5sy7MnAHQrQKLMMiQvvRMB1d8Pp7H73LqgRUG7umeJ5zPwnw2FbESesivkBDepN52n2KD83ibkvewMgeXbv",
  "key35": "62bCnDEzZnF8jcPVn8QAWc5ZbLdcxXfmq5dbQbT5XHN664whtdTjjqnZTURLWUPgdi5ey6yUJqKT4kHG4wQcs37L",
  "key36": "38aftC3kHv7GW3TP3uMpkm1BoYWy92ehEqVMphAwAf8GX6p28XXNQYxPjn2JQWGZ1aZqVVwHaUkqdMpWaDH4vRWD",
  "key37": "3gWqNUKKQ2JA16D6YfoTR7soY63XyJs482dvxnPtUEegJ9aQP3DQvetaFNx6u3ZTMfQ1u5e3tzdpq8Pp6tVdchE6",
  "key38": "39CQoD3b6CrbM36cWXw3fNCUSLm1FooJGPEFv6npiTPLstd3J8Vtf9sFyaetzQGioRkbBusnF9eVoPD3VJ6u2EpA",
  "key39": "5yKi4x37VrBDg5i7H4MpEjBudiLM8A1YbT4yfupvyoCStqKqD5yV1iH3k4wiJM3vwFYUsiSTSS29ErFEU3mNnBZw",
  "key40": "4CJdNfALQUnuYRD717v2vPm8YJc7whuHQGgz4qS1wuZ1HdDJzBDeJU5aAFZdTXxrgxABFZpB1QJc9QiFuvczp2bZ",
  "key41": "3C8R9rxupB5NJ48KFEN2mE1NPFe4rEg6mVsyanUCf1Qz8KLgMxPrF66SXmLYY6cPJ8VHrz4nXdHUv5wd5WMXjgmY",
  "key42": "545d4pno381DsMwN93HTKUGMyrFYN1QSFuLhRescDZLaFNzATBB9yVzM9iZ4Dc7gYBUhi1BUUDwxZA5LZvRyNxAQ"
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
