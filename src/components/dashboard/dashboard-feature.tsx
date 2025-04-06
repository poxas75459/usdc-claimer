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
    "4b4Xqw6AMZ2rjpbwYmamtfUo3WbS8NEU67BZURBJe9xaAv5uX3waATf7Ej7CWGnfUuTjDoFceCtMWtXkLj4uSyX4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dcxXj3BJZSLQcA4P9Fj41wZovTUjE7NDv6GMJo4ecjorRiTJpyZcXVaJ95WyUtCxjQ4PRp1NGB9VyHpznkcwb89",
  "key1": "4vQREMvvDrKiyM8DVAzs8sUnmnV2Yz7Ftg9aXEopuBoFpBs2SkSCE7XTEXdQZzuW9QxuG3Zfqd9RyinMjETa3w1J",
  "key2": "3UmiPFFCk1ugVGGhJzB3DeYyoyzRVhWRVSfCWKpp9hPSUhTG9vUyGR7yNmfgozgmndbSxsBBqfEDkAneiL6UoqCg",
  "key3": "3EN2UUmGiNh6GgJQBfdZswJomwg16nfXs2LvcBjjtEBE5Mz7G1M7Dbj3yj8agCPqxH9Jsuq2qXgqMd7dSifW8e2W",
  "key4": "4iAQ4HvK5VHVBFZLycJJiGtLpfUk212Gbvx6wtycuyy5BB4avdTHmSwFY1n8ZZLCM5W2Aa9yT7smhCcXvGzSyP6M",
  "key5": "pwxkPZWVVm1FDWYnuzyCUbEMtNbRRKMZ5RCxahPf8Z48LjxCREa7ximx1EsHhWmCByhgM4KGwGGgmxkYVifEZaE",
  "key6": "2a7GK3vsPWic8994M8kZU5Hufq8WfiJtbhnQpChWHhN5LHEBXpQfJ1NE8M31Z2F7W9aiSKnomSDWapaNaVNUkKGb",
  "key7": "5o4edsaeaGuaf4hKznoC86VoS7oXesSr6BXaSLqhNo34Ux95e9osCxVasKpa6KSUMBEdKS4hhvgKA49B2uKr6iSr",
  "key8": "3SvFtasPjHQsWbCX22otxZGP9FpC149fff7y1bD3WNZaWDJz818ppSpj2hoBh53bixzsdEWgPX3WHQAS8SeATTc7",
  "key9": "3EjDLMSbakyGQhY9ChtLYV5QTkPeD8gozB84LwYWEug7TicsHQtrVwwaTA5TLupXAYFd6EPhptwgdHNEAKsDwH86",
  "key10": "28Zo5D4zn475DAhCVvtrNyynmKgkawpXicdDzonD1fz4mtg6wM9Y2feTxLKarSZkHry2rkbGiq76QBZFypTe6xHH",
  "key11": "3YCF1ddYL2uNXvUKBLe6uLSjmDpYasphyfrsHKVDLqZdpwfwqxdPySu3HWddeZymwccmWyW5FBW8PxnDtbcypAco",
  "key12": "QNeyWQ9TGgXcYFtZVS21LUbKrzPAHYbXw4j2ZqGhNXLVzj54S7M7hf98Zrh6s7gjNWDft9Zx8pS5gdmATSwZBjT",
  "key13": "5sDJYRzLTY7jBkZbpkyHJr2vacarCbSuN2cJ7JgU27Myz1DN1AmvC96fcsfdwsdyBV8dTxWJ8yhHpqeGP8D346Nf",
  "key14": "2YHZHXf2spY4uxDqiH7hRv2qAGLiTqj2w4bQ73K7zFVGpLapM5fDRz3N9eb7f6ArfLtnJi1NrzEp1pBvefffsoaD",
  "key15": "3brtfG2MydnfCmt42sX4nhUsxTb3ePAxGLHSx2tn366TNjs4pe6FJnMCtJL9ZNzPZ56jQmnULruEX63t4BYuw7S3",
  "key16": "3V5xsmEC17xdEUs8JV12fsU5aUc1ghWvaKb4Fmg6HCysNRKeuPRxE19EtBe3YL8evrSaVNE5eNFQT6sdPjwo5mn",
  "key17": "5KyUDtyrxxJGjWqGRS8quP2BXkKLmTfdLR8Wcrzu88wJmCbd9qj3MRpQ1KBddMs9JXkwENFSyd6sw9dRXxp5M9dc",
  "key18": "NbAfyfSawuFp6zANwt42dkVPN7Fw61be9hyMrnVpT1KTQ7ch7a1Q8CozFaUfT13t919W3u9BCZCnqhSMX9tjaX3",
  "key19": "4AsbDVpJZ6nfNQLijZTR5Dhyte2qq6mzYaUEgTtYKuKDSGaPs7Y781SYEY8vpT66CvLs84XdrmMzyK569xYgj3i4",
  "key20": "2chXGVjqbKxcdruumQeSjxTfqcbJHNFbH5Ng4z7z86PZ7cSMpaTkvGrarWBA3L7QWsMQinUHNeQYh2aSfGvXMv2b",
  "key21": "3Qe3fXuL467QwGxm1EWV58FvMHM5dXovSQ4Kjzps4PtTS226hwVrC8zXMwRLBFm8Fnu74ozdVD4JTMcmF5eQeh5g",
  "key22": "4mGZJRA97FSFJZK3CeBcpg9KvyacJXUnUvFNHajzM939Cd5obqwajCRyT87RKzF1oCJ7aet8ZJ4iV52fyzLHSuP",
  "key23": "4PQV5B9u44RPg819QBMDkbt1ms92teFiifsm3jKARSeh8YD29M3RoogoxXzLY8cJuWBnQ9ePurKvG9tZJ7aEQik5",
  "key24": "GxrNW6rgcJWkthuDDDVoHy77BUKc4RKtGmraMxGxv9FAhY29hSGyfgEm7Zdh5qGhNnAUcsj1rtKbwPNNrs1Q9u1"
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
