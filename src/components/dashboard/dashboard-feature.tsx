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
    "z2TxN8hnuji8YLZkKzNihDvGR6sBeTY4frQuumRY5UL3TqaF8T5F9jCNJ5nq1DLYmLLBAoM2pgXYvtS3PW6if14"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qCn9ThgXVigK2vahYpGvb2iHnpWAzHi38pbYP4vhPNGTr7Xq36AifpKS3Rv2WRWrLS2zWRyNTG2AMtRjanMLdJ5",
  "key1": "2DG9USs9Kj5FTq4agnuw8mHfbAEjcbg6F8UP9jfBbzHi4r13gkXfxGWTMTahMp4nqCnjkxauymeGvREmw6eWYTUe",
  "key2": "422b1qJnEsN5vZmdMjdRxn7ABtgEtZM9gYi2TZRQL1WAyyViCyZMBHGhphQC5G2pcD2FipUSLfw1Acp9D41P7em1",
  "key3": "5E1SPfnascLFBxbwFVXL3LakFyqvtadnRAUv2ZikTkbQn8uVt4i2m6eFPgpNcZDLAovpQ6AyBX9qgvxLUWxya4e7",
  "key4": "4WsMg6GFZD7BhqvE6PbviqpDYdvGTQeNAD7oz9z4y8JrNVB4yDxqR8Zg8MUkJdqt18ennjeCXp1TuozLw5As1nxV",
  "key5": "3K5vbzKA3M37Wa54n77pr7o5ZhBJHnwHMi42Ty9yQ6B72r3WU6AKAkDg4LD9Cn7RWnbJPLb5cRjefwEc3rrX9ym7",
  "key6": "21G8XNx2tGfQTJSUGkWExYboZ57P4L79ybRP2vpJj2noeZMbAb5KSm6BRvKetrQqfM51CsREDUdJoVxsHQZbwPQH",
  "key7": "4dkGRsij5aJdBtsM4eS77EieqbRHeWf3EHvx9SucXPwUGf7nQfKScM4Ara7Py2zT3zVo1eHxb8WAD6ntnTwVUjvc",
  "key8": "5H1hEfAUc4ioURsvo32W4pt6B3z4q9w6cfzq9MBbTKWbNEXcbok4LGRAobhYXsigc5KiF9gib2vHRNehQUz1x7ez",
  "key9": "2Qpz1y2QLq9qrb8U1ccaxQ6C58jh4B8kZXmBEGR3X6HJjREy8BHypLvVfNLV5ah3ipiJaY1XgY5CYbTmuEAPfRgT",
  "key10": "257DgWGb1TnbAifnTa7S7gZ6BTSWsoUHzguZdjP4qZTaSoTJvpGcdr9qhgZeFbUapNvA1sEGiXjjSYDuJNDUnd7F",
  "key11": "2p24KUzY6zabGmwjedzh8Hf4rSnzFZNheHb4iSSo1N41MFuLi1vk7DP5xeuTHByagucuZ3TUB28FiPx1TUeryxHG",
  "key12": "Q7djRnEUsS5cFDkX2GCYeh7j823rPFP5mT9cRzy1hiBwu8xSf2iLUFi29bbcrc2rK1E88WKUGkyFEx1KuycJ6ck",
  "key13": "2rGBHXgmTu9kAKbwgGxBeZAk2SdWpDoqUyXewWoBjqL9b26ba3cDaLhL1ASih4736qcZtYhdUCXfWN7RtUxttUSR",
  "key14": "4GgCqbyjRVXb7dLyMzvXHnaA6BT4Y6czomQaUAwiogHvH5XSm2rr3Be4JXR7pzaZBsdb8GbzUQ2nST6VfGNCyXgN",
  "key15": "4BMYXqpktv9AoC1jieGUwJZVeB1U1LAGj9UBhxLb39dUnS3zdAoRP1q3xKexB4C2J7HAeZF7cDECTcC2H9uNpNPU",
  "key16": "2r7735Ng9bwCoRrShVEhaZZsjSsZVLxnN7u49CY2qdNXRug2MpgpkyvCJCza1xayNSfJtkmFw4yLnP7ZTAgmarmD",
  "key17": "45MwvcX3UgWWCPDx9b1VDuZcj77Rw77ZMeQbQ5D5PL7DFbWBEufSsbJmZA8L4iU1cqniUfVkcTD13B2JsrUQGgdY",
  "key18": "22KT4H2aQtRcpLekruFF9r7H37PE2G3YvcaYgZ4o8KU2MCcPWarULrNpGykBcqJb5QGNwdAAweq3jBZRRmg1QfdG",
  "key19": "2dW4AvvXRuCRJFqp39AoEANrc9tY9YGrc4m36VVrKbjWeskQLrwYYmjSu9WMi35BtJyeYTnAtLgUQirtLNJXv3PJ",
  "key20": "4kgdJDvK63iymbHQsTLtYKp9sTivTYmcuk61LsjSTi8Aw22FgwYC5uieensnqcfNoqtMWu3ZiTBcEAW9c24k4jCk",
  "key21": "4tpkXXaBEFJ8N2cdhnT2F5Vc4uy8dAPUZYcg82RQEGWmZ2jRUheWyxm2uY5j1TcTyV2TK6uNV9btBuXfStaJdn2c",
  "key22": "kHZM681jR2fzyW55aTZVnPJNZ7Nuwvk3fKM6k3GeYuyM3NxVDr71SyCQ3NVyrdnEiFux5X4AU69PB9UV4wKg2wq",
  "key23": "4f6tKmGSsLEQ3yaVRSjfKQFh86NBBuojTQ9sy4XEgoHJnSDJuSw15cuV2s7tMsPZmuhBXB4xCVmod32t8yiw9sdj",
  "key24": "8FzLHjGXgYUoVfBM9pDTfNFf6mfmHBouEg16qzZGCTBcv1HDM8YLjZUKYnmc19fmMiyEhgweFk2CAZEUbT1A5mS",
  "key25": "32bMR6DZboGeK3mwP6QY6tXmmZwG9MMbAm6Aja4UABYHT8zmiV27vCFwJY2H1vspCuPQw9i1yvhVS6Abe3LgqVdU",
  "key26": "2wYhqNnCLiHHevM6KVhgGJkhcgk52QfiNgJk5RAzcxe9KAAHM1xc6e2YnT5FoNSnaSCYKAYJL6QBM842haXx5BH4",
  "key27": "3pYHhpyZSpzRNVTZXRsAUs2bsSqbKzxLR1HD5nn2RzekJ3Vdv1FgjgRzd5sc8G1CaL18JijXoU6zkchjxMffNiMk",
  "key28": "2W33EFCwiW2PviQhe8vntmUiYLPmN3BETyT95kj5cpexm4GxebqUWgUetbxwS9tQ7AZBEB4CJUSF7dBXsPxuuPD4",
  "key29": "2weM8EZEkLcJrjDDmxg6c7JJ8muSfjLGx5roJgWfcyuZNAf8WLHKf4sQ9WsS4EtoLSt3BUK1f982rqz4iwX7nrY",
  "key30": "gWxETk1ztn5u1Un5CzxZqgzqesCswik4yNXEQh5y7Bq8cZXa4E8MTZVvFvBPrxFqJPqbMESqMPedKmpYQZT8Udt",
  "key31": "58CTKuAfnWbxi1kdqJWpmpnw8T1tgqYQcg1UUk3M9YyuxhZATVZ1nCQWcc4iV2Dyu8edjSjX7iu3k2sLnZ95ChwE",
  "key32": "36wjSnXuTeXzXGUquEYzgroyhgm44MTnRU7MbWm6T2wSi8c3JeTorVdYv8sXhmFTSBAtgP5xKqf33MKHJ1BFF7or",
  "key33": "3V63x5M5YfGmPQUwA1c97wkVBhCtj5c3Hom4PMk8zm7abiZbKqzrR6Us3rb4SbVGqmcBdcsHc1HQh2UosMDUozkc",
  "key34": "61nNb3eGBErFXLe3nGe34fmnKw1NCH7k2pHpRfVUSQkdBbeXKyEzZd4Nztss5WbK3hrco93djuKBVYGhuEu62EcU",
  "key35": "67V7uhezeCmrzsrQ9WAZjPpuuXzk7dmvSzSV1xdwsqmButih1W3dBisQxVq34d4NUKftYppVCcKzj8XEKY9mR54J",
  "key36": "5UQg11xxx72m42oNtS8McrzFAbHiXDUmrrFxFf8TfHcZtayUZSuDFj9xWBeT8VYCk72fe8PGsc3XpwDm9dV1RWpE",
  "key37": "4CsRGk8pZPZWyk1w4VGLvj7szGjHnRqAhyEPd6MMxDytaWNJU4K1WXypL9uPgVkqgeN4ynSLYQ6FWv6SE654vRre",
  "key38": "2496W4KwNsi1G2JYZiFp6Lo7cfM1hLF741Rpa35up9rN53EtLcasWteqxGiBbVhB4y4RJZugdPkRp2Y37SowhhVE",
  "key39": "NzDFdaRmJwcxPDHjSLPLTCjRvrJSxmTnpF94fxDcQSn6tqt6RJT7x15Fxwrx8T5rcsx3HQYHJQ8KqktXsjX6t2E",
  "key40": "5C4Rey6uQgakXsvtVTjSnBRxh6B2fju7SKZc5FMhwqZdAvV8ZLb7oPbMmRbg35VVBhJm4zxtwfjt2ztW7CRmpzFw",
  "key41": "3kP2HgxoV3PgKqgnTr6dipfciMD1EpQ5HzrX2Ro2KJ9hnX3GAsDVJhdNzcb2JD4Djqjf4LEB5kHWGmik9M9jZj6r",
  "key42": "2y8gpytMpwNPiY1BGjQRQqW5CAt2SmK9V421LAHWLnGwUxRKnryjrcLnqBtNB8qvfLFsryyHmmVnyiTidakdrCSd",
  "key43": "5epmgGBzoD5soyAcr69ivPXPMJERwwF4FiGpPv8rzFmCzbpy7CCzNqFKkLtHq8cBcgYeofsEDSj8U6LuVJWjhJ6Q",
  "key44": "5YqWwvffPkWDQ4qtwuorTtGr8h9STeVG4fEPVKvwquq1grFAjK6hVeHUgaVwsPXb6vdZwxJ2ZvttsVR7NqcQ3Zqt",
  "key45": "4FA82fXTsLmxfycVLtuxQZyjhS6xxK1osukkbCkpwSCJUSWd6HLzvRXCkTbxPLzHpEmYkNes55H5yrdqkQb5iQYq",
  "key46": "38niXUW78wJzJibE4pZSDovHPib4hzwp1QbXy1tZDUUzji7LGxLQcCTL4H4Xep9HJFzYoFscdakS2Sab3AFf8WiZ"
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
