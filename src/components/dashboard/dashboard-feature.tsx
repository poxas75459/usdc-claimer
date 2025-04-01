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
    "2ft3vfcYcDRii24nshCXB4EqiVBwQxpiFmZukA4scUjEm9Gd8UEChbWSNTAaAghYFaX4ixsFrKi2pSuF7Gpfdidq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Gzndn6SuRDyHFD5JNGnu4hcbV67Urt69wGBQxJ2iHKHohdxsW8yxf8amvA5ZTSxEKFoYGW7v2TUpgMvRDvDzHqY",
  "key1": "4hRj7YFEAVDFNhgxW76ny1pnqfB79PNeWPXF8yvmUhoQMAqtWw88HPAqTXaaW6fzP1zenxgt4pwuHP8JKkZY2jgb",
  "key2": "25GhK63Ukfc3fRiZcvfwFzT5YCU5xkxJrhzev57u2RbCvVTMV9Tk8cEj4HwJ4QayUBgAR4aBEE23Q9TrjZFEZ8hf",
  "key3": "3pZNDeYG1t8ZGhw4CYZFsasuPsh5LvWg1UoedAyFKanL5Qwe84QwJHtbipARwu99K9XzvuAZYJZC2ADC1cQhuDoP",
  "key4": "K46w3ACH2UZHNrYrTQMhUDwh4376ifh2p12hrD5iPs6WET8Vbv8na41XVHRj8nP6WN8zecgX5FEfhVEWqRiyYi5",
  "key5": "2uBKN7LuKzeoeZmRNavxLT6knKyA5VEWr7RSbYq1zz8jH6CbZvkyxQf2L11uvF9T9f2MMqZeZNjauN3xnSbSmn2F",
  "key6": "463bHdgbFD8wGVAdgdPkGxKsb26Z9fbiv7Bbi4eZsJKgWgm8WBWGFo6BmpCksVrbDa8r7JcjFs3H1pzZQRvrnzan",
  "key7": "4RtrAQd297GMu465rQycKyrG4QPnJ4AF9xH3G3F8gi4tXczwPgoqs6WkQ7gL8T3McFc21ho48fxg5FtUnszgxkKR",
  "key8": "g7xPw5mE2hTXkgkCMne2uky7TecZtiGC3iK1AyT89s4Ym6CLXcgZJZhHZUbtgxpZZi87rgVraocGuwCc64KcXDP",
  "key9": "2JJuTrjMkaCk4ddhgNPSytdbKRxJE4Q1UyTVjrm9XJwWsAfKb1eYV3gsbr8aBVxS8nPjK3JM4a35rXeiDbuEPowz",
  "key10": "68QcMnRNnu73S1KKzvZu2b1uyXzZCdUZwnyBMmh7YVy5bDEi6MTrBayYxy5pZ6ybbu1UCQFzBhAJrmUqjMp7Zrk",
  "key11": "4S3GN4sygMFTLSTVDZdPje39Yar6HW8q3u2tsmET4aizUaRusrvVay57x3j9xMJYhi7qtiX4LdQcQrPvYDmiCCwX",
  "key12": "rEqvDNwW9bLKdDXEWuZuShs99TYGfwgkiwVg4TGKYfZBfZmx1iZRYvSKdGowzdX5U7XwnSeh8zTF74MmRbJ4ucC",
  "key13": "5cvHa3hNdfEWQNTui8hnyxLzxYY4c6Zoxpa2e3LX4nAozWzeo7rxM37Xru2mZRdjRtEiNMvAjByB6MWayRkqgv46",
  "key14": "5G5XEZvThTJVWvRt2t4NTyJN86Jx16CpF65NmTLGo8W5UfHhb81FsNnjtczC5yJ7fxnd2vLhe9RCJf6Q8SExwr7k",
  "key15": "58UySQKFsC68xBjHFWrkAbU4zWx2SN9iG7Ez5n3vzdUyJfPfbLA61LmnQf4oZHVWxGQ43syQ4FvBoLcB8w6iawTo",
  "key16": "3CfZPBBQBf8gk6wk7ADEh4nAazeivrcGBBzVDFDxF5KwWd8NzY2crDqA6wraFZgp11UmaHfy7ADe7VJrk6B95vP7",
  "key17": "2Z27rbRSyWTZr6diJJ3QrrqG61WqcdTM3Mt4huU6unxmhTTgnDd3MrBVVWyXCg3kTUuhAxmhGdiTEWnei1GCJ2h8",
  "key18": "4wcSs6JviACSRpa2we6wFdu6qfNy6oxTsTmsV2mZRfZzzpVtJR1vpxbyXhmUC6FnTetrkAXpQmpBxFuHGKmnRECr",
  "key19": "4EmrVCPAxJiwW6wHT3fxeo63GhNQVxcKM7DDidpYjLMoXjDqmX9yep7ci7CMtfiiwufR2wSaz7MJKoV3oQaTXgcb",
  "key20": "4HQZqXdXCcPujWEqrN4V35j2uitdLnEzDmtKJv47GBrnMctLJwZ3pBBnwrchB7Jd2ZDU7BuSrwSs8CPCqTz7DsCu",
  "key21": "ZXHJKzeGueTsKVsfAHoYfViadLwCR2FK5ita4JQ3Y9NfunppySjoSZDR863vaAdzvEgzmZ3RRbeNiMqsDmsYCi6",
  "key22": "4fjKAB6SyUHZDXE3mjJDy1hyQccYz7cGPttjKM3tfPBfziRxDFCS3c4mcpPF6r73Vu36GcbHYivpjvbMiJmAL7UZ",
  "key23": "21FDw6Rt2zFEqrhC8hHtrsfgwa9ntfKZCgft3XNnqo5GRuLd8fUZMWFPiVndEAQEZZAnaoi1EDBF1PEfL3MSqrhF",
  "key24": "58rp6tsA9Vuusv4b8Wcsrj1nchsa3Mw5TYVKeHgjPgfzNjSMp48Dcy5LuXAvnSyLjEh1b9XgKg32ew5hTV3PcEyP",
  "key25": "2c6L4Tq8AMmXRTT2a3w5napBvGVzteQCA4V8KWa727puSyvGatveg1cKTUt3WDh7uSVjm6KTVGX9wcdTs2fiJEKM",
  "key26": "5gSxcFNkebDKj3usG8M7GaAthQaZFzoyuJzmLbh9nLg1SMoTBEBtrCnL4pgncDAmYCN1VfQKQo3AaeH61pMsPAJC",
  "key27": "2EHr82QDoak5LcrCLr9ZUeHhXE9a1e4JKrDzu6gZVkWabPg4LTDCFmZicJkGExNzQVX5YuK1oVkD1DJktR3kwoR6",
  "key28": "54woXhQoRbu8GrgA1xn9Jf93EKv8wJTamFp7TLYj23wmHw9fMXHCj4L83qRxNvyCKx99JD1qY6KAQ73x6H7FMgD1",
  "key29": "3ExWw7mSx2pQqZf6aemo2w6KLQunWvN1ta2pNF3BzTwuVj6VUfhawvgKgczkfGu9ih41B4hsTU8r72XW8jcKwgPb",
  "key30": "3FE2QJpyxNUNsm1p2Asp8YsP4HGduL1TJVfjg6NGEi1CtsZxjB5QJdGZWUHWQC2Hw7inCNLQVhRv1vcv1kYqRcMH",
  "key31": "48YBz7qVz3XVEs6cVbdxJU119ircdwQL7k4FkM4DaY8shK26VdfEoNVnKCSzZ2mi7Z7JUn4Cutdv2j3smfUJHtFp",
  "key32": "3eHkUMcF5aS85BLJTQrxeCSkvMr7YLxMsdEyTzDQGuLU3yR3oH8DwVBE2gtJnhfJY68xGmuAbQnDNDqgYSxrvbPq",
  "key33": "3mDVnCKGwLXMPJiHFsGdNRDA3GNNgr3cwsvZ6qgmUanWqUYP7EcjuxfU4UqbxJZBrzeobmqF7tCp9pJSrjosZJi9"
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
