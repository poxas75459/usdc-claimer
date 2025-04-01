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
    "4HUkXjJXWH8dzU97VwG8FnjcwuzmUCTSUBgbsoNZRkTgP3kc7LFeofsjPGkxSEnAB2hiUytgcTQhFnStThTAhgZA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Z7izzFhB9R7JfoJvn8D53a2uoPav9nYNR21fsontn6b6jccdkHZD9nMU1q4EhDjXGv3F97CRzWRACrMSNvDm256",
  "key1": "217kHUHGjzJ1jYopa6gGVACDiiUJngwntqXRQrfaNWT5UF16vNfhom1DMaGWZ66zm5o8hpuS3uudfiPiSbcovJ2A",
  "key2": "28rwmY3HarPQQSZUciXh2oLaj54gKLEvbAfKdvA72GmVxWkEjMf5e4xSi82KVXNhsr4fBJvDzVgu2adWDveVDHgV",
  "key3": "2mbVfW991jiMZuTFS9AUGebVYnMsSd9Z4Uq27U8w5fFEsk1AHSdTiXzugQxMsfmQKdFzHJaW5dsk1nFeA5WLtZse",
  "key4": "5va3Rr4jkkrAbBCdSBdWLmCqyhE8GS5mp7Rtb31h8QNhUh7Wt16xLarxYkEf7t4N35XkvWzdLCi65LGKdEAcBuz3",
  "key5": "R35hcqUHW7sSYBjfuX8MpGuAFpUHHThdPd3VmXkEp6SaAwLjZQacxkMLAGceaMzJSKDjAQjdv5Wq57sqQBttjZz",
  "key6": "3ttFSwVWazDQoEht3gYJ6uVTMePH1zJwxEDR2LfRuA2ZGB5XRAmYeuR5RLV4ZMnQR8EjVPXvb8uv8EXVPGVvejmh",
  "key7": "222zB8qZ5ePbaKojV3iPcKWeKjoPNRxdRk7YoHdGw46TYLAPTSKVaFmq4vrGupzKLAFSpRtvCgTzav8nZxEppGzU",
  "key8": "3Z2vXsmRXUT7eTn9EDPW8PSYnF3AzA5DqqNFmnGaqu5GdCaghkTmcqg5jGNLErxdr23APBjhvdZ4f9fua2RBdqTi",
  "key9": "CU1mVRUuLrTb4aaDPJACEBV7rp7QpQLzULN5iTd6WNetSkudi4JhhukK1Q7hTFNKegAbbzQSgPKSkahdnovEjwi",
  "key10": "66nGB1ENwpxN2LivfRtLzjyU91ANp362uJiFAfisENhzNAULvrWXPg8QwyuesifknQo1a9x1jYzfgVwLfD3yVNfT",
  "key11": "nEbBpZ52DFbbKaFsR5AVuLZ47R966kF8PWAV41rkwdWnFwipt9cLJFQgCvSXhhf74j1dDVtHmgHbrpkmrPr9Gx5",
  "key12": "5yCprMwnC3ypt4sbyfzf2s7qgsauSUwdXgXicePGNdWdij9gVDCKMPuGfW7j2J8buwUbg93JiwS1MefG8AqfViYL",
  "key13": "o87eVSsTwPA7cdppBzeyhn7LMkatFmGR4qBGeRDcqv4mttngHHEYyXESm1kptMo3GNbLQCLNVL4sftkuAHTWZMg",
  "key14": "125dTJaeQg8SPXTKwbds4sine1g3gkgYxU952a5YKgmMDf4ZzQZu62GUim5T7LBrsGDNirAd2BxmYd6HJfkGragx",
  "key15": "1FH1NpmnpnP6Mc3YmBiFKxVivzSF2RmuMVjHci7Wk6f7JVVMuKEvpNkzrQEFsjYM8ZxFEJ9xCvkTYBLbgT5M5SG",
  "key16": "4VECN6ej3pAYDrh5uwzoiGDsGGYmoFy7xVLRTSGg79tCAbnoeLBpQ3QnSHNN8eHnoeRVBsQsSfUx1NRJPtwCAerB",
  "key17": "47cpuRtWa4t5FqDp9TcnbdMF7kWv7AS92XVuW8g3cP1vVwcN5E3oPCi8dwsR15MHtRsACUWU6hbk6vTbyu4tk2KK",
  "key18": "3Wfye7W6pytwXrXemFXnfC9DFduF1kLgBYfuxcDX2J6vfCQzaeoZYk1jmWRhLQ3wJ4KRjLjkkpwu5y7Zu4BV2m87",
  "key19": "5Y3GftcTGdeV5ubagPRfYcc22azdddXLEehf7D4wu1yQ5bWVLcadkyTvDAPyqRqMip8FVLHKqBEHvk94V3b5zHHP",
  "key20": "4K18zZHwNWMFGyMDoLosLgUG4fEha4Loa7LUPHDEjArnfKaFumQSFptAm3EpcrRhitGNBfgZxjFm6WLgvuf2TSJS",
  "key21": "2VAHSzHTV5w2euCf49zgZF53FJ7AqJkBmTpFL25zddHq8N9gKF9TzdvzuvQvQEdWSFjeF5UmKhoJ1T2rZ87WUvHk",
  "key22": "5MebV3mpNvKRsKGEixS8Fu4HugZgT21VQQ4JsjqUntFK85jukZxPQJDizB168g1wTp5q3YGmTNc63Tbr49UY7VBX",
  "key23": "3VWQ23KifS7Yo94i7cg8YMFyXZgf3QkqjkoPCMbdeBxC5FKLMAS3D8gsJEEVYHov7dHumxaFnmyXB3dr6QsAhSm2",
  "key24": "3a7Zek8oP5Tb37fcNrpMNmbVFuXDvaV4VBGV8UiqQH1FkyxKu4J27PFqvd1MMEZ2Jf1Gm5kLdLCKqcC4ust9XMG2",
  "key25": "2K6joGwbPnd7PcqjwQGKCTFSoeGZjNSN1MxyQng1sNdmBhXZAwbTJhbaqPTC1MajvCDzFFK7Dch7jLNf2RE6GKgZ",
  "key26": "zRE3gMbzwuqC4J8kqAU2UNWGxG2JPcJrmqN4U4si7hTkM2xEUuYEYaJMqQsdw6LcQs3Rx6bc7XAcLkPWtvGNbr6",
  "key27": "4uePrBL4T9mgFVZ1xu7XEPS1uuPtNEBFnB9oxdUStmwrEUYrmDgfK75wDyjYpZYowyf4ZgL8AKmgyjc5YkXSv8xU",
  "key28": "58MTZyt2g3KgRRv5SKvEn5ZM45J9LKoKy26DAQnDvuUGJ8qpnTaUQW1ercmXbbYioMFaLPvoE9RYAfvvRQgZBhWA",
  "key29": "4LNAzezADULFemupFi88Uzv7LN3SRGMCQFvdSNmxZKHeTPkmLmmPcgRmPy6efw7Tsn74NLW9JKkZqP1h3UXqiAh8",
  "key30": "bSfhTBZSR5Y5cVjsHdYitypWaK4uU3AM1w8hXUo97TJHHWKhppKEL9rxfKojcY7PRFcsAkrYgmK49JqQLE5RR9s"
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
