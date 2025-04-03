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
    "24RtqFsPaszZmbdTKVG9ZNSebADdEmyE4Wb5fMrWL4gkQGSw4zxFarwawGxdTp1z8C2mDpEbPD9R459UNPRF7dDd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DsgGVVWmxPrfWb8n647Rvyh24CPXz5JEzbkdqwsiKVh8ASG5EZcU8F9cXPzHT8k21kn2Mob3RNAqo8KywPoKepv",
  "key1": "4WJdF5ocobDFyqvrrsceUk7SX6CQtTHk1nbhWSfHJ3eywwXnJQeoHrkHru3SY3mjR8iicr67g5V8kUsaxTr8t2ub",
  "key2": "4dTytU1vR9gsexpWLkUH4zb3zWEaXvxo5q8LDUss7TtCPWJQgzC8E11RuyNhf16AHUcGETW6EmXCC2veqCPjChZG",
  "key3": "3Km4TwKAB9rMub2hBuva135SkcLhGvHChR3uqnFufCTzUWANV34XBAtuUvgYrabAEG8YpZh5Vupv5uVcXLJPuo7",
  "key4": "28U1daZqUkFT8AciN1Af3P5ZtrnQzd1gyJt41jrHMhBwN17cf3dPKRoLWsuXANbp9hnPYckcrUVDvhdjt9zKH2WC",
  "key5": "4QRzLEqtdgXLxk32yu1eLPaZFF9m2G9beccdWSpMeTatjwKrWiXV71xd1uzLX5yQrHJ1vqCeiV5NyQU1Ve3YqTxe",
  "key6": "5eShsdevhHGzy2z3xNuM2a96vNZQpuxz5vYtc8LumjzvFcGApmEkuvjCrDAPU9Uox2BHP3zzYFSbEB36jtahfyse",
  "key7": "ueX3Ry3sDFhDF1BGU7VsLPtbDfWA4JkB1TrxUy6manpwbSKmbvGeUwt5rJCAy7pPVv5a2EfUdCHer3T66qoFUGF",
  "key8": "4xco5RVh9w7fNa5Sqn36trywkodPPnSfbsagRyLN6b4bcxtNjc1D69zRB3C8Rc2zhbNWaCS2buKoKvU5Got7DeUU",
  "key9": "4MxQiJ4KC1dxL9wsKackkf4NFnuAAeK2opnJVUEzgvo7EQWEwKq77c2ym2u2KvjyM5AxCQ5hM9VT8avyuYzcJ5yZ",
  "key10": "3NDtWxzTpawAWWUu4tiedNVCnk7V29f6Biu24PBRi4YmtV7fmtSAhX3M8HCkMeVbqm8j9ULH5RDh1B6o9fGXftRe",
  "key11": "4p38qoKAzJAC6cc2kprwRSTnE2xcvMXis2a5tqKcHTz8b7rV7fF15GqWGGnVoBirmScrdoPQg4YGv4iJr8P8F5ne",
  "key12": "2up91UV1todRcdVXAFALDqpeZZSP8o2oeGerTFmGUzBnhnFkcVTn7eGnkMEafPpgNDadiGqNwozcw26HgvSPJLZK",
  "key13": "35ZaUBiJc3Ytg44DAFSePxxYC3fjxAEWX4v3pnURJQ6XzAqwEnoJNn5u7fZEJRqY1ZueNE8eVJYC2UpTxLNdCiS6",
  "key14": "2Xkon5BsiHrHaFHQRfQ7u5PCV2RAPtsJMDDiFDnYHGzdYZdvqvLjdxc8zmhEFBzx3WPyGvttjVsErQzwbu7CmAS9",
  "key15": "4aqY8Zki6ymtcCwJDJB8oDVe7yxTV1thSXGQ1dME6cBzuxXuBu3q4QZ3yCHFRKU5SbCJHTFszUgmrKcMpohmP45P",
  "key16": "56MhJ2dWb7PNt5aJzuqStnszfNj4o3aAqmiYp27N4AK4VBJTi1KtXREiazj4UdhPyuEpVsv2y9wS3y4MrrttWKo4",
  "key17": "4LvF7FeemUoRhmT838WfV7tpiAcXQ6MJ8Lznbo3GNxEG62kJJEo6fASxWYbhRsjYu2vGf9NWTBh8eSpBFDTqM7G1",
  "key18": "r2adVJBFae9cDCjrhsaP4X7Df68VgL7LEMA7rgvXdaxUi3jj7eeovnqWYAnHmkBy9UrVobGhoFRF5xa5xFyZKUQ",
  "key19": "5GCVajxxkGwbuTdZesjz7DMyGy66VBBz5tLn3n43dB9SPQdK6qasMVK8giTXW1LkZVtQp8zWCzCNtcsgfArXKKCE",
  "key20": "2NEGcsHvW49EKthhnyPJGirujYf91Y4u6ZXwbuZU1DzcX8yhZAPrVwpnmvrQsRbGZdjrsotZTpAbhbvcxsLyRtEm",
  "key21": "3ZUMKJRtGLitcK9YeQVxFrBpSpJ95dRnZsJpqU4cDQatzZgZx6fdfRLS9LJAEcfkZywpwwHLX1nRtGnUsNNfDLJi",
  "key22": "4tygm5ZQXvrE5eWALWpoUBDekxUG6qZ6WTSotJVKd2FH84zkrie67GVByqcgAv43sLAHwhtVEgFdDVTQsghDk2Cv",
  "key23": "3XV1E5ZS4hWTLx3UM5Zws9JfELBpPTHxuDCU4ik3n3ems5dZhPxjp4ztKAR29yCbVmZPJxQHZ6npyp7veSczYnBU",
  "key24": "KUHZF2XCpTQreygXXZBh5EMQbSvR6HPLVL3RhjrdvChMjyKBH2TP8XJ4Ks9Xmojj4kb5wmQv4J5HH23ngD9oMeW",
  "key25": "hwAjCSA1LJTrzuuypPseU4CAqkHryZjPTDCneX7kqDuDMRHAt9Q22AkjV4e9rmqT5qGMQ5inSdHhsn8SSGXp85W",
  "key26": "ba7poqhGkJomvzzeHCF6PPKvCLzaNaXKAY5K9hjbcjdfcruxZjCQZUrs89bexrwRHXada32zZ7VAydVBVNnrWfG",
  "key27": "zHdFS8z8BRarUfdrZpTKGENCLqRCoFWvuBFGfxp2uRef7jtMUwrejRayj2rG2rmvC82m1i64rRVgo1Wgf7hUFoT",
  "key28": "4TLPJNRu4L3mCNDrM6fwkaCiJHSUMUsEkPz5Mq7DTv6pNSZMzuUmLD5YPpTXkfzAjkvERLB7nuJb5HD9sqjDzNNL",
  "key29": "5neg8K6k5nCYXkLHcXgxg2jnHCPD9Nw7r9uSpSoujZnn7PshVQCBJPRhgswVC2Gjhe1DaMvJtGKkK8ueFWXqZ7AW",
  "key30": "223Xa5uLbkjn8vHkEUkWTVfL7ddxWH4NaeWv8XbRW8ZrxDbPLEtviwVA9CaP3YPDaQN7R9KuPmZoS7X7CfhLLw6C",
  "key31": "2Nsbsz93M2pY4rKht6tXKVcEpe7oEbHui8FoBL7suko2maoYkm2QNuBhFHjs4v24socV1Kv6jgqqbFCMKz4AeLYE",
  "key32": "UAg8LgMhFWMCUMDicyNVfZE4zKB7siS6fjb3MVmDrDStCLdT4yXtS6eD9KuabopEqAeujXLP7uBfJcUNKLFw7zv",
  "key33": "3Nx1qxoTCp1bLvpG792xykJN4j9rES4pgGCmVQXroJJz1xrGJPHy6fTEAiizvh6gpZu47ExYnxxBMUsTPW2fk8tq",
  "key34": "66vSMjSgiLYokGHgS2ABCJgY6rpdU6TeKmaC4hoybCaHFFJKrmJEPja4JcGCwKo3gh7qbHMUfEVTtVggPCQumNyw",
  "key35": "52WvLu9ozpxdNGMtUtNWGtGFtjvd5ZWQN2CU6HQd3moqram9CSXs9yJ6hdTvUjv8v4kFhv5iE8BgBU5LnMQwwsNo",
  "key36": "37oew2rya66p5AMkqTdrgW8PHMGdXsgrz1j2JztdqsqGBgLGnrZkE7paodcEQUp2475YdPDNbSW2RCMMcrsprqKb",
  "key37": "3VxwEcb26NahtQwGntv1eLNen9uX2Ek4dTzsEtnwka2th8pwD2124m5tuukJU4RH9gBAeYZxXv33HqXVa1cHciuP",
  "key38": "4B69cQsWUWS2uycHJLRYnnN32Dmdg8VbBZytuhwjbyM4grNDfPJtiaCwFLX6a6fqNvrzapu5FHdzEB38scYTsMBV",
  "key39": "575EHbjAkUQZkQ1oda9P6UU4vLne7zWdZi2bJaExLCea5m1Uw1z7jdwHPVqymwbmxucg85pYXSHqyiUDDVNwpkR4",
  "key40": "2LD3DVdX1SQvg6utC3Ko72gZre3chL1Yoh7xMGN6ZgT2S2L7cM8n1dvPxenHS9xscCEZGciv6ek4ujrVDyqJ2chM",
  "key41": "4XjpEfrkZA6M3mZhWKEW1T8br26ns22LNvrGKga8cizXVL3Fjudcxz4rkh84U6nNJKqJaVZEzuhUQTS8pHGJe9ZE",
  "key42": "CpRCpBcKTLWCzYWnxanUy5fWrwvqXV7qhLWXcGtyLz1cS32BqUhCxcpp9ngoS1UKdQ8Ee2ahvTwnWveSSjNCwow",
  "key43": "2kXLrt4HXgzYo4WbHGdg4RuarHgWHPuTWNN8tPvzPiZsP8ewxH7bENGsBGzNznb1UDb2ExuV11PYJanLJKtELv6N",
  "key44": "3t4ETRPSyudNGKizkxmW9WM9LyUnvHCHiKuu3AFH4CGntmxixSvtSM82zCcgUjWdZV9nc2HfQ3LM481XYG3kqjxZ",
  "key45": "wgM8e7t7PNBYUZEwA2w8H9heorZBsiQb2VPpq6PEjR6bNfKjmhNybgYVgJigWHYdTKP6GvXRkFE4dU1HHfXvSao",
  "key46": "5mWHkLCyCu6ScUUhi9n6H4vM1dTY8g2drTf7cV7gJnKUDWArLrB6ng5edFrghDrXaJVVh8tEYeFFkBzf66LLbbco",
  "key47": "2rqN5hP6QiXW7R7uPofUJDw8w2HGiQjqW5FPvaTCXH66c57nYx8nMCXQ4V6vH7FeTic8k6WMgkVUviGLD58hCgky",
  "key48": "frizhEHfbVBLF8R58amvUjCwUT4DoTVJKgYMgYnEty13cc6a46GngTeWTtacdtzaczReV2bk8sFPN66LGDa7iLA",
  "key49": "64CHa1YkumN9xH9KxGJK3GkeZ6Z1pL3JAE6xA8f6awgdUhB1wNpdoS6FafkvPgaZJuPhUsb1QnXeqdMuoHKaUx94"
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
