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
    "4kJw9km6kgFDWEEgWMemaUf534KkkZAqR7T5vfyE92g1zzYw6igqrAxDihhyoRRCEp1EXjbeRVymHH2afCbVZhAT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3byko3WEFUJWAhaw9A1CFgx6HqkpryupAXjwpZkLToWCRq2GyywiN3XAspf2wEpggcCjPfyzyW8F8RPf2JqXa3Ez",
  "key1": "NYvPawQ2FFn7U1xYwgo2eeLYLSGphKKgwQHcXgCPizCikCkQtA9GuwgQrEWG7axsG9uEpqEQPdqT6CVMxvNtksS",
  "key2": "wVQ8sPt4vwGBZwe5p5QUdD53mQdEJX1DDohZZQ2U59x21pYTePGxyEySZwvpHWZZxfHjgthYBHKRPsTGwuJmYoF",
  "key3": "39v9h1TQNU9jJ6j11TkYAVr6FJeNiNimRuRCXFytpAjBye41CtuD15sx8CYsidCpzYjE82Wv5cwEvYR7pnnekFFx",
  "key4": "4vDZxYeTFN6j6icBnsGjCubNBgDPEPqHdLqQ9NocjEmG8NQbNbcf3qKYYfApixtDwefikQ93CHydcLuSHKiHQSJD",
  "key5": "5rJQ1HafVYaLa5HV9mv932qrxBQsugRRa1rFaYjjqQ4sE8pQE1sgDSRAvgJwpRp6Spms7wcrc292K1CbcdQd3QhC",
  "key6": "2jH5B9E29Kaj8cv7jK5SV3XWkjathZ7M7AdpVszf2JSRiPDjracgQk9Ypn8DBK6HWcCgLrRxkbT4ynWUhp1vHcKU",
  "key7": "4uRDNUT2Hhzc4hWByDN5Xjn6L5MzexGKvuVky2cUf5JkbNuLjrrTibJ8t68JW1pM6qhVgFGXJ8PxmE1gdiBdjgLW",
  "key8": "5eMU3eEWFG98DdEModgpn8pftoFiFRtB4vtAwz9ACYBbFMhCddCzgq3BJuS7SeefEDWuv8edcFqvRLfGAGGTDeAK",
  "key9": "4iz2W6nHmSNQ2MvYQaADGkxeQ3NhvUpu3qTSAxupt3LkiixtiPyLzWMSkexUdqAsXKZa9QCP6cNG88X9UJZrfuTR",
  "key10": "4ovv8ZCa3sRkFK9UiDwRtpY2YxFBPNyvySyPtcRKLkD2t5Mz3Wpw8QZwrk6ZJqDf5E8XfzKxMZYc1eX1fYpovXQK",
  "key11": "4L7WiXYKVaEDzmzwJXVbt22Un4vdA2EUPkQSyzgTYyDKZJYrLw233m3BZjv6R6oKFo8oQVyyQBHCMCHrfQsJGAcC",
  "key12": "HcJD9st4JTL9DazkpwGspU2W8ZAaNqon86xfTQPhNJFz8RPNfV6osDjYECf89EZe1EA9UGYcbH4MEjVaHNMyrXg",
  "key13": "3YNcZmF5H4i6gUyPwqQh8BeyV64h6pSc3dNrpZZkiccifnQMBbv2t2R8AdcFAphmVANuzcAjZCgiYundUrHSkxKL",
  "key14": "3yq5nUY37QLnUwa3SJoDpXyj2vWmGn3juAetZKsznxmRrn46cjjzvSdGj42i7oCcSgbF96pAHGPGbusWphKCSd5b",
  "key15": "5pbLDnTwKUBSGV8JWJdLbTCVEAcegXktGqM2z3Cti6azWWoLsU45ULi9XqLXDSC99WBB1XFog56wzaC5DiBLbJz",
  "key16": "3crFMMP9wztkR4LrkRSuvKKPWNqLFcE6mgJkisWH55JXQpmLUzfmnwYmmMiWbGauKKxxDVYSRYV4JJeWAyUPzt4K",
  "key17": "juvYsujPRUzHCeZruf4j5ZSSLWzm7Qhpg5AGkX8ds2mBp1ouQgRBJXuaLRYaQ7EHekYy1umGiKwRi7yQ2NSXDpX",
  "key18": "4GvaUWzmDgWNpzVJmSj1bd9gM31DqBDu9dQH1z5x68JTLw7dLXPWpvDcAEPe3GZcvSqfeoZvSxJK7He1fPkmQqhR",
  "key19": "Ndvf1ya9VXz1L9tWr6P5WRpAgs8VTMWkfk3pzSQfzzEDhKxvKNeZ87svjvVcAxCp37Bhpm2o8JeAfx9Fe1LNV6L",
  "key20": "5jEBiUBM8JqD4Wqqd822SrMcD5TNtF5fkdtTFUFeks9NUDTKYxqeQLrX5hUawzBk3FdU18eioa1P3eDUMPSLpjR7",
  "key21": "PV7rM3peAeBLjKHLNa7WtBGn1mGFL75NevVXDPJEUsV7NU8XLeJZteQnCSaAda5vTNmKqbMKdvfa8MK1vLzCREZ",
  "key22": "3DPu5kCLGuDX4AAs8QHqJUh5tJ6o5hLkK6bzik1wGcnHsYyWJaHRVz5LJjLNQXpvM1J8EJhAuV1pUeciaBmn59Vk",
  "key23": "2juoUvq84eVo3vZ2f7oyBGXen32oD1vADVSJW1Mm9qgHNVFwhiLwUA72vDGP1a8TLLABk7CkqfsvgVV1QTfEofHa",
  "key24": "NkHboFLbYszsrnM2zJyAztQk2s7VJKpjYJ6DZGVhdqH8AZpwbqfK17wqopnyNSW8ukiZr9FbmGFRfhLbUMo3jJr",
  "key25": "5iDBCfNG3MTH1me78oYM1NBWYfw1DGa273sJH6aWnTa7Ns5t8wr5EUVvK6WUVqSnbyFWL4p87oeBJATpnHsumz64",
  "key26": "5d3zWvxVzxgbt61HrdNmjm5w8uBDZgc7fZSMTZiHWhQ3PcrmBke3wCM8G7t9PmKfh4vEKWStXK7edaJVFk6c458G",
  "key27": "2Je3LLxNLGZF3RWSCAYrGeAq5kqk9uTp8NfwLBGeoZM4pq46PevaBEQkoANu1CiguETWcaihcovRnZmCYdcLmDZL",
  "key28": "3Z2HaSLNMxziL9KoYhindHKXwEC2wffFPXZtKTSKq9nxNnqAYJCpZRs1qbFagLUPJNBaXYft7E1AoYQYRQvtAxyR",
  "key29": "2Dv6rthfmii1HEySeVZYAchAWMaW4naMDvicKaTxo34vC1HvWQTcN9YMmF1thAoKPTGuqbVp3NQU6aoyBvW6FEaT",
  "key30": "dgnayyEscsxMyXxsPnLVt8vQQMyFGRiAX1vbmVbP7HU8U3Qdt7m7So2GWBsduz71a9G5RotydtzMo2AGYN9SjQK",
  "key31": "4QZyuuzqzmjgpdBg3LdXVcwtYhtv7q9qp9syeSAgyUnSyjtjBxMXnhF6EQpSJtcTfiPweeKznypzWjBJceMWpsvd",
  "key32": "3XdJC8ArTDFPSmSeKVgzRYYPXZsJEPWUe87F5jG2STn5ax2rcN1wx87S2qRjbRcnLUivJYRxTgUj2SWcQTkZ4vYu",
  "key33": "5tqWyWm5TzJzqqPSbYSGy9oYYhtb9fkezVdF3HtoHoPRcu7f3aESfkpPdezg2brgVjSxUqRiTMZtYJhUWQkzQZAD"
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
