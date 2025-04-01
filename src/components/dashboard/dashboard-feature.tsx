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
    "ymAMC5kfm9p1TwibAA41mXZUHdaUxzSUEPjthoTuxUEDUcbxyJpz8xvsDa1JdeqiK6qyPEzYBDLQJySpNbwVEyc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qTyMVhCo1WUTffnTpV9fcWnZjMckaFZjtrXZkX8KwY5G8fUyXQ1spQTGbSzwQr3CKEVuWS3UjYj8DmJHC1jKqTV",
  "key1": "4aivoPvAbNwvuXd8gFfsAZgrBwjECCXM7PAPRJVaxxPQme9NQr3KLy3jTstKZWMnLhGX4WYKWR5Z5ZV2n8Exan4M",
  "key2": "2jqE6EFbo3WQ8RCY16gFV38p5M5ddKdmJLaGsxg1nrZzMbpPZCoCaAtiLubRh2YxvjjnwjUtTyXp7LNshs4T3shb",
  "key3": "ZeHRMGmnYsuKMFWzm1gDqwrqjaZcHYGNBpRGVhnghFRmZng2rCXBLQz5EvDHHY1SssaibEt3mLoCmbmYLfCNE36",
  "key4": "3dL18FCpPpCtVBtPCww4p6qKJykC3ZamLnrVTBcV78pe58p4WsLjSdH9Wq3dMqqbZvSbmbVHYwxwFChKMwCMqEsZ",
  "key5": "22YzqJ8APLdV4ewWhGfynkWcFcUNzL9yVVxtFesgLnFimbPVzqvwSbjQeNq7N4NwaWbHu3fvfozqk2jF9A4Bw5tc",
  "key6": "5SnR3BZkPvQzeM9LHoWgGHDwdamq2vaG5thRcz3BSYiNFDujuQvnQdxMHQaYq5i8x47GmDiNmufMf3pPZ1Awxtjn",
  "key7": "3xC73XxFtZZDH5uquAETGPGop56BfLHXyhgPGi6vRLKoJ1dDMrMYGvYeddFxRrKwnXHktMs1ZaTdK6tQSxtzYcTU",
  "key8": "5xkm1YFRwhxwZ2P35uRD3aZ8nnYopBqdtQTnxgHhTpySDsoYQsoUwgSgj1tMwmNXpTYSq3GHaYQrvppX3kUku9jr",
  "key9": "4k7MB8bkvHgmNA2qb2MDfRU2AZjqjGNM5f1vDkrKZi4GMKdsN7NDk4Phcye7FaVs2Z4gAVp3L3Wk7xfttHreEDBJ",
  "key10": "Wwmsz3QghrZHTdbiqS9UuqhbuMoUUUZuC4HUvS6xJNEWhiu1MQK3yjt51RBJQP5SJV2eHXAHXCNqPak3Wb82oAt",
  "key11": "33SSaBUoMD4gQVBb4SrPr6Ef2JGs8goi7B1dsCySF8wuomGYXWsZAtdGya3eFqAnzrfUDZkV9yoBKhMmXm1RMYYk",
  "key12": "Pq6dt7K1onQxHUWPeykCzEH2Do6yRViSeYBBSqgAT6d8agtkzZpDS6eyRtAtTDWkypybw1hFskBukq7YrVzTQbx",
  "key13": "2GGEuFHCcH368KcCR3Q53zZYbpea2Wic23rnPuViZ6xGwi2fTT1R3tQbreXjcB261TP4x4aqHBHVMCE2M92hPePe",
  "key14": "4fuHWXXi16ak3qCUSHFttUpJFSgVPDvVe2WAdtvhTrnLdLWzCkH97xCre2rf3AbgR3PmZ7FPPiZy3YiBMcnjcNZK",
  "key15": "2X3hJ5Pc9rmJNH3FgraKRTwUPmTCffdVgERcX3z2hxe2sMnLTLdKVrq8usgHHRXX77BXANB3mBPCnk5iahyBHCz9",
  "key16": "342ShK2pqZN9BsQSGLirUiWzDauqyDxTSqv9NeB1XmV6sFRLPbYJzB6CYkxUtcAG2FKUyVxTGgxrNjDN3kpjsfBV",
  "key17": "42avjuJt8u6hDFj1vXYzeaB9aLqXSaQoLwp1gxXMqHTkkbPUY8qoHya6nKmxLXCUZzU4dmSTAEC4ymjmPphzP8aw",
  "key18": "26YKLmV5PRmh2MyZWZu7UkweTQGs9ZgGAq6dS9vWHcdzTksL3Q6bm4HdeuECtaU2GSQaCm34dS64Nxu3qtXo6SaE",
  "key19": "4cqB7bPVzdUTqQKt16GfLkTBrnpoJFgZsZa8JFXD5j8973XsyUV3b1Ve1e2HeiVKiCijDdJfcTnuqtPxvsae683R",
  "key20": "WW1GHPn9DJteAhfaZvXc8yuu16QBq8xhTVyvbszEsw8ogrfTNg3SzQ1puKhMS92DbXQgDgFN8TByfKbD7R2yN7T",
  "key21": "3yVgKHucwZ9ueajQ8vVt3UUw3XTY2zHdSvNU2hkW5qej1iUnpeVxZqmTz4iizaTgTAdJexmWK5ef5XyyqPkMDn5h",
  "key22": "4hjgVVyqaBRJUBYDDWcqfhQrhqH6aXYqoVsbASFS8yUYYNsjvs7GLkFBsYZhUeviDunZsLs6Z96XnmLm4S6NPv2r",
  "key23": "4JGJHJCxUJTmukvg4mK2ugDvU4E8y6esZcMB4AiT2vaLpfqCh3DvQUAYvWKDUVTsHdR4ouRpBCM1PiGturYAbQKd",
  "key24": "3DrsYdruSZ5xcp5gaUi6qqiSN5NKrSqXvAAAxHtYWRhsiv24f7vurzuCG7pg6NTGTDsin489Up23SVGvA14WJuPX",
  "key25": "un7gY6ZPKy93nJuBuPPZ6Et6wA5vKbS4ntv58rjyJHEdvXuuVxXo1QM3oH84zW3tW4Ubtonu9XrAcxEttLVuSTD",
  "key26": "svxCQ91jK4m6xz3omBMsKWHtAqLuhJpbxhqqtEej87t8DpzjgX2mXYDZWAk6NjiappZhfZhmypPEjh5zPSgPxuq",
  "key27": "2oXLV7wF88eWmeMMxHqVuCRQ8Z2zrWoPLedkA52mPokdDNZ688S5HcKc8EaPtrTcHaTjZPGNd3eHpPmPt74Et27j",
  "key28": "3Jqh4FXRnPtTBjGzvChKPJttSH3EWWzXoyfrKS7wJvmtzyL47WXc7Txfj6vsMGRbLYKDkurHTNF5CXFRQi991GCD",
  "key29": "42UMhZjAi53LLsLZBpuyLLYeZS4us7S4Jbpe1Sjgu4moBRcqKJajUDSupdFwXkWLhEKAYGU5YS3H8N63pDkkQHaK",
  "key30": "2YFCHaiq3AUUyGSQ9TXqJWFkMasoQcyhEBPsCy77JaFdgjjJGyrBq5fsVsF9dnZSF98QdRgVHfnJu8MsVd6qB5z5",
  "key31": "79sznxgD7427vVgCkZGPziueuFKLc936umYGSesWX6iLLcUEwExCSnBrvzWEXekz6hSLXNZaFiYg7sKVr6kiPUi",
  "key32": "5JFfKzrKPbNpPAd9TyqkevjGTbhdErYbXnFzucoSZY9Cja1fVZ2N3gJuVczryzigFkMGEjUXouAa8pUqzdDWR474",
  "key33": "48BZRts3dUp63eVu62wL4NF4J8pqGJWzG1ci5ykaAwsBtgKuRopA5FGTpiE194K9EAf4rtmUJw9ijn9FNTyU42bn",
  "key34": "4RSjqZJXgpzxUML2pmsfrsbJ2kAM4HCPcVxVAQAV2iC1umuhY6UpXAFeQMRbJA8p1qvmncACxiXwfkVxYfq8wpBb",
  "key35": "4Eep6qyt2N5qpsDajMHX1pV9826j1gRbp1EvrpiucLwD8WHTGeAhEK4GpnZAKUMcL2LDfUYjsDqS6BwCcH4N1Y36",
  "key36": "eJGUC1zVAZda7H681NYfrPLKHgQYrqWwsQxnfk8r9R8XwLQoj8aTGXoE27ZgUcsYHchm1hHqhDyv2b6Nzxb8Nz6",
  "key37": "3se1kyJhepgMBgx5k7Z1o9VQCvj4DXbQoaYbsjWiTS82VA6dV4UDaKDZeWhVcDVmoKdFZuSfGdiVykFVhgY3vSJr",
  "key38": "3Eiber6i6be8NkZZqHkRJyDQG1TiesX4MNjNbAMq6vKZEoXz1ASakoeF9C7uVdMGYfwsYGh8zVs4P8b5mEftwRby",
  "key39": "pTNJyKGYYDPqFeNCBVNfb7FbNCejRCbNLZmS3zrGdjeFf1zKH5ttUgTZQh8j5AbzubicYMtG51RpXQPMGVANnPE",
  "key40": "2YZikta5spbBkWAdcMtkNLjhUPvjSPj3N1Zqv5FnokUFjBcbvqqeyKEps8SuUVsDA3XqjwgkAiC2GDHVuM6Mh9JK",
  "key41": "3T876f1aFd41N2eakK3tg3Z8QAYNwknfJ363PpTFEDZKp5A6GJbwsbfeiDuV1r9S7X7rfaSmkkE4DCTMEXMRWZjb",
  "key42": "2jSdx5Gnzx5aVdp9BbL731vT1Rt9urUgokoejxJ7FiPrauD5xtreUMsUbvS3cBo8gT3GnJ7agqq6di87MwVpXbrK",
  "key43": "4b9RNnB3hdBPkPMo4QDpxEwzu7Jfy9AtSciwSefTsvF2R21R6Qojaai9D6trxaiY6GSbzJSjHA31PqGf2c5cFEFd",
  "key44": "26EVzaBA6hmZqTo5TWQGA13dwXcVae7GCJzxVRv4A4QwBbiZ5ch9nGnBseNhgJFwY7o3qTZ5r7cPb8JowPHvCqoA",
  "key45": "3EZjXuyT9pKEPwu1WctY77XfJkKtxMTow7dGJEiApuJCTXiGTSodHz9nrMSisXUUQqp1ya8beGe6nVhng4TXnY96",
  "key46": "5N9gHacz58zFeY62nMD1HWAyc23ETeexSWSThNhSPV3bzZsTVWsfjRbNQmUuwWt7pVWX8tUcqQpBR96bxJ1Q1uiH",
  "key47": "oAbBvNVwqXHgScRStsDERuMZRpuHVbAifkSmGieqrzGzGtECbGZmkbxJY6vRtUDdNjM97kh2X5TfRdoS1CYqTLA"
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
