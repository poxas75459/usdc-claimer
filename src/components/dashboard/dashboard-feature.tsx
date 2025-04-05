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
    "52cHnBAFEVLvsJ483tA92TMSaCLeFhaY9AhqiTW4UKtfZgLaNB2NbtYTFDmRyLGbPDSmeVk55TEyvhMa6yFMqada"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mSpxV8xPvi1iapqM9SYufK5Qj4Waf5bTH1Y78SanUqrT9TMaHufPCbR7AqSkzoqrYSBhdKEYegXSXsRErHkXKny",
  "key1": "2s4JN239aJ1eMTxvqxahWBC26TkjqLnesf3AjWdFKVi6DRjm1L8Kcgd4LeTePXArUS4aGsqHchUN5JxrQDSJ1PtK",
  "key2": "63FaMWFPmhG82ACsqiyG9LkyDcjVXqxN5iPzNEgXKoqzzm3xW24e5GSbE11z1HBVWweHFeFbxLEs3bYq1C24pPkF",
  "key3": "pD9C6Ngd2dnxRwM5fBNUDYawHx1GbUUhqjHhAkjKv5GDgLFEPpsscAYg8GnevzivPQCe2SqWjbDoo3S9iN3FJqb",
  "key4": "4bCo7WZBAh6d23brjzSzcMDpUabmMR8WLz4HNfv3f4tqCJKzCwPHNZZYHxuq8C6jP97CyEz5qRyWzNBS4xk7X8d7",
  "key5": "5h2ExUSuNnFkftanwQJqdE6GKLvMf9XR78z4m8jduKy6uE6xtq8gxbWhE3g6ooWgPvf3mh1ggJUNptkUCvQjmMr7",
  "key6": "NufmbiUiadr1WTpqSCCjDrzTFx7sBZvsVbepJ2FGUM3YpMYV2vkqTMySZ24rvP5WUeyibst9TkCWAJViYHzabaL",
  "key7": "baF5tkN3bV5wW3fxxTXaa524jcEST28WDHsLxBPbfiwWrPUPJffmGS27vyiri2fprGPfLX9o5WcpZvbWyptBeid",
  "key8": "xovW3XERvhMJGQEKVG1JwxC7i4mhgdbX5Q7pwpBYfjT81ahiqHiPk8wNxQDuRiCu8ihjav7Gh6zbHC3D9rviqDU",
  "key9": "3ZsLEBQoAJbgVDEZRQFy3jZxy5A3YSAYwvaoiDC2ToSvgGQjyH6d1zXTzM55PUfw8wExJLbAyuZjwa27weDMxpzX",
  "key10": "5VfXwbVz2vKx675LiWBrxc3AM4kdmQXfzfcuVuJhEhj3uNDJdLmrkR7r23WFbS3nFRqhPzHAiv7wywNAykbd7gKW",
  "key11": "2iAFNw6eWm8bmSpsvf13A3x8Vtut7DDCZBGDmKbkovBfrakWfJzRZTfVSazBXUdeL3SK8gKsH1fVEHAkrMvDJKE",
  "key12": "3D5anATvodcZ6mkBM9GftykhwwBqvZP6ui6G2oho3VbZdKiN3dq6ekaVJBY2wFWWZDPr1gcYQ7pSt7Z16qzzc9ki",
  "key13": "JquodM7hFT8PKvKiemirGRMgRT9NxuzeRqNLCuebN5Ft4MCVFFVzNVth6MS1AFwznzJ6Pbpo9cbdVzYYgobJKCP",
  "key14": "4EZNYC3cCkZSGxpwbt1QR4L1gj3cr2tdHbhiVMNDtzVkdpPaTwiUw3CziFd7TpSFUCmD1JTNwHJmabK5aEfaJmRX",
  "key15": "vQRA9NwM8iWACoPiDWCQkbaQ6iPLE1RNydJ3MSaWHqKSq2BF8AjsmnwZatG21bh1mkDvtWBhy6hMY7ANJ6JLpQs",
  "key16": "5DgCGsAHLSmXrAouRXKHfrYNMeFSreTVj2eAVZ4wMtNbpQhHiACMLiNZ2EjTzjSUT6xwaQF6W28rGGVqhZUX4kHF",
  "key17": "53z3hFum6zC1oLDLYD5GKYzVNRR5pCuJD7MGMPFgNrLBePX4ygCGtRmkBCVNLuf9t3QxKrDJZxKWAAFMW69CCmMq",
  "key18": "2GPSv3aVsVyupEnQsnqkiKrTuG6Shncz3yw32DxeEfWbxT4i2vVP7MjqpjwHetarJyCvggSLvRnhxcvAMGJ1xMVv",
  "key19": "TXCRs9j8Lqqoz2fRiut1oqQ293d5fWjJdA5tWMRgdwuomAzh1G8iWCWD6zDDDRLyCLWLsH4Ms5QCjBGFtnH43vV",
  "key20": "2rJ6k7iXnWRG8aT54zQCen9eaUL7Pp3QWTpgaHXPxcfQCj3PPaBgmyFhaXXU92MwpZciF7kZ8iJE2WvHX511yaCH",
  "key21": "2qXNNqa8xxeHJDEDmQYyBQrYuFHV6NL5JKoJUougPwjZenKnZiSjU5gg5fBBu3r48RQpAZK1iNL1jhyhDuuMqhop",
  "key22": "4WaJSSfDLM5vtzkrU1NqGtHVmzpAR6VmAcoSpkBydRaesVqLEMmtq1Y1hxxWyeko1Vqea2WuYTiBKpLB366bTsyz",
  "key23": "23GipY2DUMkkAoeTKjWErXnpPT6UdMdyKwooajdPAknsfXGsUR7iAXsFmVkiryZmLLivaE9Y1JpS4tADuGR1MKrJ",
  "key24": "237Q5RvmKGHJCtWXouSCWk4j4gpHZCp9nSGG1GLuKqAAWU7BSirqExTNm4ckqtKng9oABcuPAjb8fNYNCCB7rQo6",
  "key25": "2BM1WjbNtMSXjNY66w98NefMoceKkxkguJMUasqJbEeVsL1gRJQXbSuEBS8bqmkXpReJS8bctZ1ohvYUCnXiGNCa",
  "key26": "5HXGM2NXdfcvvwd8mT694TU3KSoMkRWx8B74mp4w2G965WaXGVMaubbhpTfkyr98uoTRzpd18iNJ9zBio2aNPx4i",
  "key27": "24UpKoLP5M2pvHXCkiBrCxmmX8BAyLmZTH9a686fbMAaNsn9fZdqfbcUmB966CF19ZmJSet1bsYx9iktTegx31CR",
  "key28": "YMjjor2JWKC9iurAQSQorDGfTpVoUHfARBjdQwbSxFWxpQnrFJXV6hzcfwKVHMaxTD6GWV8i9MzsQbmJgLzhPKj",
  "key29": "7GsAjMTpkBKTnK5ddfUwummoRoNpWH7JS9KJiccYLe1M8SRGVEPdLPzJe1m3szn7Q25UAfp5MpcE8JGx75dTrxG",
  "key30": "2BJ5dFv7WRUKWoHXH8a4LoCrJpxwp3jGeD4WZJpHUoybrtLEViwB7bFF5N2qUTHA6Tb637JxcWcHUmXveKEMSPy2",
  "key31": "f77RwqwZ5E6Uu5HSwcfpUgjJfC6BScoBw1CjnVu8KiK1Pwdaxf2Jfq7x1LNMbdiaoNmvDiWnKBnssjXNiWHMYpy",
  "key32": "3zEWkK9VC3h5W5dnxej7csp5bwopPkjC7YjYJUr4iiKYNHrkQTWtHuJZoNQRus7cyZv4owhDEvWKAeRJSKyFjjug",
  "key33": "5MNhPcAzyYPMeWvjdcPAQgX9uZf5Yek8mYFAKKmb1uXkaH1mkRJBMmvkFaxGjdXkw1rySKxrqfqjxnKqr4izKpbT",
  "key34": "3n61oJEA4ntcQagaD3evsAJzNNwLLPuBLfE4dv2gm8t5km8Sdghyd9agP3uBzKehXP96P9k3w9W1NfaUNasdu5nj",
  "key35": "5JbMfm77um4NHFTJgXSmA4pGU3e1QHKyYQPLpZZMrVu7kw4cY1PEPsdViJ78a33Vv35kcHbBv8P5sCJGqGfqJn8v",
  "key36": "5RHxKWpkA63xwS5nFu4WS1A7cqXwQCRXTPGh7PwEizZefVHYyGBryTPUYGhqgK3TxTRTgie4w7t1f684Kh67jLKc"
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
