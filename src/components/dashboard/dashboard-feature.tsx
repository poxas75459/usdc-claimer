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
    "27gepULjWx21eCnaNecNfJJCLLcDG6aRoQaw77Vs2WzAZ3LsnHoRdBSgZL7gLanoUVTbZTKQHJmTMduE3u7RMSD7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kNCxQ214tV98So8AFXTTVtLZaQA61PLq8iJB9x7UaLyx3ZRbv4J4iZTiidnw8fScE9a7wQF31jqTYhJdDdadzd1",
  "key1": "4pVoRw1i6XNAzk3xhrWAy2cZ9Zmap4Wz33azJS7f6iruFt9QHTswTV1j9hdYrmrWCLnNwUoVgLUD4hptvtCHNhCy",
  "key2": "KLxkWkFVyeY7h2vupAdhaXArohE5jSCLzhLZ462ovapennUVpLnY8Qjf5NbHGoogSUPKVAC9qg2XLwXbGZ6PZNL",
  "key3": "1gphHCU8wt2mbkLdJ32UhMwpxBHEoPRKS8abRVivMEdwhY29ZE8PTZvtW1Rw2gSBB15VDWQVz7jkvTxHysH21Gm",
  "key4": "5s3BjL3wyUuaJRmMK2MQ817R6i2r16Uzqr8kcnBDzgYTBHSES5Z6kMhzHXS1SfqCzHG5YUMjJzYpTguRNP5tJv45",
  "key5": "33BBkK18JLREkMKtGJPdi6S5c8skoKUHshMcHJ3w6bUsULJdHhgUCbyipxSn82E9m6oKM5Gg2UC1ztv9wvMoH4cf",
  "key6": "4zqhmrzZv2MMK1S2AEeMtrMT2KvFfUWMPcD64RPswZZgqv3fcU2pVYGgZKyGfuz7NQMacX9a2QArZtXVwqKpcG5N",
  "key7": "2ZnuGYC9jWazqdKNfT3zKGGsiV6m893ZXSCbAMFVj7nLJLzgbtSjiXtAhi4kBNL54cnnpMoLiDV45tnEUFEDFPmS",
  "key8": "65QUG4SzXv2hJd7dDTfVKeN2iCqCoGZiuURNpxPos1gcmivsd9z4KEAPxUDHsq5GDzm3XSSUoRCrDGNFpozVZ7pF",
  "key9": "Z7Ae73W9ahfm86xDf5EQYhhJ6g42AhuTKKSBjxGgfRQro5KVnxdbkLVf5HPXzTP5Ltg53YyFGcRpVDE6Y3S2r43",
  "key10": "2aUDnGecUGPtdDw9tp8xWoSEb1GSWPLjcX8RoEw7KbisaAj2yRe4PXRZgwz7ZfNQ25vY9uLRhqhCuDKFsb7xDDnT",
  "key11": "496daLjScCHtpgRZtCZis9Kw8Fy3tdxvPDDRHibDxswfZS3dytBa1PDeNfz5pDv5EtGt6hWDdrh93PXtBnLW9eaF",
  "key12": "4BnGaYcMgaNvucHfxfwmDHeTSLYQVpQeDHRppc7cYmnm5GxxdFy972VKpoCAY4bgYjVCaFKKyRDWpfzyt5EM1q6P",
  "key13": "RRhyk6nq5WAZ1qYRY4UwXdaPc6zSVXjpxrB8kvYNr2AVP2QTW7cqm5mURm9vbcCZkmaRdv4DhUHmmEMCUJUemxX",
  "key14": "5GKVN6nt1JtLy3o8W2gzJTfu2cZy2zt8NjxGinM8c48Py8LeV5RUtH5rKVZL785Z9FpiscJdCUD5QecsdjTZ2Gzw",
  "key15": "3g4Uf1QCRacM2mhaBLozqdCELz7YywBBn9Z6gAWDMzcAjGJg5yA3mmnXL6Gk1STievN3igbqeh6b8Ej37BWH4fjj",
  "key16": "5GtBjpsRqL8kAif5UYxHNeDLYkjXfw1StUN9QyvbubuCssEBahi7JQrrqWW1sWdKB9Ux7KXuSkgkzgAgFvGBdhiE",
  "key17": "59oWfUFjg2AMfP8V7AV9sWrNumSh9LjJWTYkC1SD9C25zamwKPDy5Hr9kUq7pW6jMQmoW4JLsQzNVPQ5dtfF4YqW",
  "key18": "65jTczRSLJPDWhVbtjABsfFtJCY2fmjUFohPNP4ygZpcttgBWjYuRZ4heBeV9XYQUGLJhKLegVaDxryuyNdHx7vm",
  "key19": "eC8PJmKsYRvTEgv26AU9Chuuv5efLsMe4BiQSseBcNbCRLUqE1wzPsaFEWH6wqLWBoq4ZyovyGA6GMt6NGiHsKU",
  "key20": "2Bg13vyNPX2uCpit1XnssPXCkceLWm8HBE6DJ5VNDv2jx5ypEopQr71QYcLkFVcixv82a61dBkRMmALCengdrhc3",
  "key21": "2cn8uWG8cqYVdC6qWmHktx3BdTf6WS82yKqp9L51PVotuHgByfXCZ4z2hutNs75Ctauce5TVjwViAomDDj4jEmYH",
  "key22": "33iYaef3UC3UrmS7KhXZFCUmr65ZynYSNqv7hYjJ17J5nkzCZeYbxw2iq3kjHLJ3HWy15BhEDPTpRFWq9GvGL1DB",
  "key23": "2WCoHA4eFoW1PtQhHXFpteaKf8H7iSdsmoeZXsbV6oauFsyJbKYiZsBVtwR7PaJnST8z7fUqiGDVFhAgjBJiHp3r",
  "key24": "5qzK3PuRJFHd9NEEKwU9MtjZvfFyRE93QTEYUWCby62mygj6fyinufY55DhGEvV4y7ma5YJVwA4feCfeBQZzYwZH",
  "key25": "49JUhorA2aNkR3UBbuz6TvY4HYtGot945teYydNsQY5smrXpc1Lm7uagw4YnkjqjmtMGARWCMEmZSosfonCbiGUJ",
  "key26": "5RXNGACwebmtFFDPVdWDUdM8aXohoKunsnjMwzwtJvLBprj6scZ8BnMrwmFK127he7qpeHGQF9DRiwXWnL7jhAy6",
  "key27": "km1CWaJvLWSVvrXvqUaCFVutdFJYZEVDkVxfZuR78fUkZkADVpwHCMCvt5GNRnkoBM1DZ35pDoaE4En9axQJ7zd",
  "key28": "VraCdiX4Qpk6rftfCRzUXqEKBqE3uHJedoaPeDhMrxRRWESD6S4uN4WrpzzXqM6KsCLHjgUKVdUcfr6TirdJZot",
  "key29": "dtwbHyGPvKHbKDGcQrSb8A4hMfvgSJwuSurQXfjVaGB9L5jj9hZW9m7m4k52FFBU5JmP2dB1aqHohMw2gQgR3df",
  "key30": "4J3oBd8VH22GRDgnmdahe18eGsVRDNeCHyjNQkU5w6o4Q8EVNvZoVv7Y4tymw6kWRBx4xZnrjFW7xcHWnTWMM69d",
  "key31": "5gtHb7hDyjsky86s5o8ynUApBHmVjJmCrjPLgFDLVBzueBvrENL8YBzNazLBKUTDkiocjVnYkcRFmwVqnWEeB196",
  "key32": "2X7eRxNH4FooeUWK5NJLCi5QXH7EGowG6wP4c1SQzmxXcegxrGmTHNDaQSNSfQsSK2MpqGPQKEd8sVT9b2fMDba2",
  "key33": "26HmDxNUcJvM9amYNGk5dx3V47iP5Aan33Tmi4dBNsHS5QiffMjnrz3HoRgA6GZpkZGXW1aeuNXgG5dXfKjvGJSE",
  "key34": "4BWzhTE2jnTUaTPRjeTVBm17yiXhbwgdHMZFyp6466JsQpbyPvUe1VxQwZPLRsEuidVgGBqT2K9mUnUUsi2u5UsS",
  "key35": "xrYZTfNaf1CpnNdkxggCK3CgTxZL6VpReX1UyVCKeWMNzq6j4j2FSdidSo3EB5AGakfHHnqygv6hhqX2LvjQeWq",
  "key36": "2kJapEzNtYLa73D4KkePYCjx6KdeGHEPdN4Z1AfEDDabjR5tDXndoz7Yy1mgQKrPYaycwCTr4BxBj2j8m9YM9CBh",
  "key37": "4g78XAJhm4qxfuWpgcFKrw4PEpWDxv6DQ1u5Pmdvoam1SwcXvD2QEi7soY5UrRAw2QPk1TGRhMPUKaBW1VSz5kYw",
  "key38": "3VR92P7jTxigt3kVWCv9EkcXQs4Fn62U4RDfX4ZfNoRJgDVbHz13kXLD9xjx72ETRvXiY95cwHbZPrYBWewcHVuv",
  "key39": "4PxBHJ3cHYFGq7M1DzNoBgZ2EwteGBPMPNt9fz6ZeE6ZJQdZbGnZdC3Ht4tmdNnYU5zUtM3FrdQ65qaiUoFtVwbt",
  "key40": "p3sLdB2qMwED5eAeiL5eTi1ADSpfBLMBBRYu6W8fxktUVCsxCUmFEfCyLNzTc8fZ1Fx7wHumHNaDdsQqCy1zzQw",
  "key41": "4tELs9oCRcRAdNoNYAxcG34z6J7LEt5CNorDFT6VjW8MPhG4X9QPqGkB3sFtd8kPQf1umwMHvDmVqZEz3wvCGw5M",
  "key42": "464UdsyrbMMi1mG57yy1waC5pyCNEGuzCEzbw9fAVHieu8pHaXoF8Ms2snUhtNVu5LbzratnT5TVuwSuGKkGN3h3"
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
