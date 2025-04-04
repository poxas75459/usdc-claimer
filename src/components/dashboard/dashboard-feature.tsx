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
    "47AqAuPbVbMRJZ8cQBhmeSLh7qnc4WDhPpfUxQnVNh8HyurcbqwCy9zCgwvF6U42aVW983L84DwWZUzaD6REooZf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jhccXCPnK782T6kADkrgPmRL3sDU9UtrLxEPajHRvPAQSj4sgVLaGG3USoA2yUVw93z9B4aeNsM1dMh72igyj7J",
  "key1": "1YzTNKmsAJ9jE5haAqYycreNRo28M7b4XqhuPPESS5f1qK8cmiC27Nsjhtkofvc8dSgM2ynZxU5bQmUdCkPNr5q",
  "key2": "3ZJZWQDMmCreG3vWRXpMmvz5C8xP5P5KfFuitoeBjs8ftnFowxizsXGUYM1a1aCPq8vWwkgStiLmQL4GVuXm3nKy",
  "key3": "kR9HDhbWPXKAFxaoHCDvjEBih6hh7ZwUnBgRvo34Xnjo2PtuM36aqM69gRyQ86TspDKmBLqyNqWP7Tm4ejTEfao",
  "key4": "4chUjMWCEG9bN4fLJHXvZv17hvXzMTtgBT9BvPWeWeg4ekQt54Q76Cedak3AHR2CJEk766c3KfHE7uo2DXpKwqe5",
  "key5": "5Tq6Lz1qdZsjmpUvxzLSGkoMDMf8hQ6CnuEA3BbcSErDCuoXxE5SStFggfsuTV8WrsPuLesiwkxg1yoXSRg9Xph",
  "key6": "2jWp8ZyWDL1aHmbPCJxgGoVSUzd9QyvdQTmxoEw6BBTzs3BnhrqordvmQ7azZT6iPVYZ9q5nV7dRr9CNJcz6Xzf6",
  "key7": "653C6KMxV1sowTN7sBTfpjLS3Vwa2GEQr43XjRCyYsuDuJKw9ykHo3aGzZdUzsq5mPDawG2E7gmqsRXAK9Jm5qGB",
  "key8": "aHr4447dPUx6dBKq2iPnhdJ489pka5yKdgaccwSv17TWvpdtjAKxef6m7HJjTUQ5rb8VbpZmSuYFVcTWf3KGjC9",
  "key9": "3UDNR2NSjhiw7A95FRqVNHttr25CJDUGzzt7GB5bnThPJrL8vKnuVPGHUanANAMwfNx9JyMsJqMjjRK2pnvwwniN",
  "key10": "4UyVUh3Y4iUt1StaXhrzCSPf7GwB8izX6wAknrfip9SqGTv9cscu2C8zFFAd5pjM85ZM62HFMddhaN1LW6c8JM5H",
  "key11": "3XmttsdJVHwhTsNFjBibY3qxnGKNP7io58649qzgxeKuBGYcVjGHhRfLyAndEHRG4iowaLtGYjyifbjgwJQcJcCs",
  "key12": "4VJj1h7dSXzPD3tRp1Zoiu9jrfe76wyhJUgxz8gExmaWNU1kdxVixi4rViZthN3Y6EchYni51C5Tc4cbv4TjiD8m",
  "key13": "34S7dQkLN9rweu4UnUpS3H5K1n7J3MQUCDwdBWmYpM2oCmwJrn6gLM6VdGjySW7jdRH67tkXmRTEHzZsyxfMN2Ta",
  "key14": "4oogCyWaeHaGmmEs5DPi94DfAPgdyhvz5sNjaj1y9avcS1vb2KVYieyrYbNTHHi6HTDpuYqsYGiWZ8UwVqHncbCz",
  "key15": "2vp9AhAyQsxF6aPdMQdLTqpK2PxSsqwzfhsT4GYpU9HLkgtsybtu7d33G8WGS5pMitPUNbcswa5AbnLa2oFpKKfA",
  "key16": "4Rbqp12trgxcKhSR5LT1K4MCHKL7nxjpfVUpL7vZVVP9W6se53bQ8QMywDUrPr86vZ6TwmcW9cWUUtGXrSweVKtJ",
  "key17": "YPhVtkWitpyTmGBAheHknBvpjGgbmMDj58WEn28NGKHiXuL54JqFDRfgGZLFAVxreKLrhYT5VCq81bjqaKWWVyA",
  "key18": "5Wi65ABhzaawerVmFckTAhNUnBhZkLe43BB5A89N9szXCMkkmfiVtxSeqSteQ3vNh4dygiHd99RukhF4CyjNfCNA",
  "key19": "2yGk6se2KL7EFTJ2XWXoGtu6pAeHhMTTFLZWxVqRy7d5Enu9SDGp9fQApM5hd2mCJ7XeFmBzC5gAwAw6pekyNJG4",
  "key20": "6mjFouv3BMuyTTk5DnrMoR9GyijCfV5Lvnv1VUm6bdZj1HvhCgxQd15F48XsxiobsLNgbpPRdYZno45ijokUNgG",
  "key21": "4hMuokXJBbKwo3QSrUZZ9fwVgytG5Qx8wyX79dd5DZZPLCyFhoQXBPqV6i2no5dDZudgWkhbt6gFE5BhqvPpV4pD",
  "key22": "4ugjDQR2gQxnqwcMzPTKjKvLUdW95mUkgjNL2AkgGYCnRpwNaJXDHefpkckVwwCJEXXDxu2bD8Z66w88DDjoeJXp",
  "key23": "MD9AoMgGgXzzS3ZHBxGiAHfeR1HK9QUbjk8SqUmTNHpwwVdJEd4tgNnVEAJLsbzfcyBA91AodV624t9ps3UqV4u",
  "key24": "32U7uTA5ADcVgi3XUmZ1A3yqBS9S88ra6FmA5dUM35sMf6Qwf2v7r6vavB317MJodSjCjdtA4uRUJLqt6iYosjLG",
  "key25": "3RE1PZXLWjtiinjvxFaA4Pamt59E5rgWe9dE9sq93UAXNDGRRraQq5iWCvYsmFDoJJe9JteghAkwCqTKRCGpVVXV",
  "key26": "eCcV6pcTPQDAvY8Dz9svbxjC4d1tUWqC546sPG5FvgzGK2XdztZQ2h3QcAH9MKmELGnqqiaoust5xeQzfqJkAMH",
  "key27": "4nDjAJ4pC2H6ZgXUJ7Y2efzomjSQTzWM16Q9PeZcg6a3nqVCYA7tPaErajuNv5bBk35JYoohrqLn4si788UXx4VG",
  "key28": "5gd7dTtFiTcgcFr3vkiwrUGi5cpXQi5xXShUWZgDMeLmqnygkdxJowYuC2i2obrRLgn3fHWf4gK1tskbG9JUHRF8",
  "key29": "4yr1DjLBiMczLiJtpGuhq2N3vhKMNaau32wpuuWdnw8KobbjUWzS8LXTAgV9vcWu4oCaga5Zw7DrUtaAH4qrSbpV",
  "key30": "5jQJhCosCTn6Kat6piovneYQpUFcBjqPZwociM4xrqMJEqbmZcdA9NEQASEsUKEezp5koDzCvmF9APhN3C7ovmBT",
  "key31": "5sFp7qZkd587Xy5Av6JeLiX6a7dc6YpCBqDhfejQFrshWxrr3xNX9qQLfu5k56jec2Sb7WB6YfUhUai6FJkCo6hb",
  "key32": "4FpBXKNScHxxtPJJ4XkyAsxfh1C4kLEU66jLEThF7635LWV8ZvCNjNvAs8yFj748YdPj32CAXAnbR7gWvBAg4xj3",
  "key33": "66syeSfKudja3qgt3ZnX8TxA1EdfqWbqgkRtj26hDCo7j8RJWJiuWRp7MghoTCJVGKxFkRKn5jZS35ZLAtzMdjsf",
  "key34": "SYVqsHZmbSmJNjGAzLNtx8ckcnMSdE3nuBoQC6uUA55BeQH4B3M3pUNQKMid7dgFxj69xXVBGoRMQVwFRcWBq4B",
  "key35": "wDfkNchrAas5kd5WnnAwCLK1SwoCFtW1Ve5isc5S8yub8yL7fW1BjMffy1NFoYHwDBJNicie854q1wLFi1UPDAf",
  "key36": "34VCs2SdubwXEDdFoLR3B8UaUc1CcpSKpmMkb9uvwcJnJacea6L3aaHoaHZooikHGhbDUh6nkqCkteunZBeDSnpY",
  "key37": "2RoYxmXFhnQgx8diXUEmmBSKuEoJ7Q9TZGjbpJuiZKdgrrVioHXjiboCdgBJ1odp6pT6eosttVdJTiVTLf8Aefz",
  "key38": "3aMwQmkoGFkC3AxV6bDcgba3fCc9RCYnekiSamsZRvzj14WRh9dYhoUG63hFk9XUdLo5h8uemXqTpvwtobMjwp89",
  "key39": "35SXA2EfuDhbzBdN7ffmsijpWXELEmb8YwS4xETvKYFqRrjUdbtTtecwkfwKYjBzkzyfPAr33ZVFNrJ22zTydwvq",
  "key40": "et9SpZNJtWxr4BgMRqj5DKt75gnXByCcHiY1VzMjag3ENJzPwSFHcRMYZmv9YDPjKZSV2QMAdbGWoDG3DkhAGHr",
  "key41": "2NwzX8ZxakFTuBynCrtzy8QwQEwjbZk1Te5WHvXfhLNd16qZg2of4fHVxYbPQxprAHckkaktUegofRBzvRbZAsak",
  "key42": "3eCFs1M6Gqe8W4VaojmgYk3KExxDKgHejGbbYnYY3tQpa2N1S8CYd5rC8X6Wbogjiy2GJi5v7EoznCjjgU2iFj6A",
  "key43": "3nY2rWHji6eP777hyFY7mP9qWpYEzZhnKPgFKYYU1Pe9JAyJ6CKwSfe2fJubfvMyyJPU8sFyvCZr5mgdBo56cp5m",
  "key44": "153NY1npoGxibqmCLQTqaMnVdFTpVGTCCX8bXsvmETwBETTPnqnRgb1gC7vmGy5i9q8fXBwr5M4GR7y8TFRi9je"
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
