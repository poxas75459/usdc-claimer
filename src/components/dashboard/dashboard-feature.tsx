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
    "THBgWq5j8qji2bG9FWXtXL3aDG68juttbsLjXbWSvPnvRrZuB5TKGuKacMTtCTg6UC8uFPkpq82KrKdCY9qyRDQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pRbVtK4sKGn4319qADkR9UcPjcbZjdEsXKdGnUJdTbC6jHsk8eSkjuWhkbk37SAe8YqTRKJjyZkjLGyjk2GLsk3",
  "key1": "2VrWJwxd8vqEv7fX5iapuqdRa2DErxvHYuPLMnYnEoJobeJUkKHWJBnu56Vh7LGkoH4aBsTHr1Tm7dbE437SGjap",
  "key2": "4rPPawTjuRrerBV3bAQKQCS1BALPAVzbak8GMxFhZJnA9k2xaazHWTLyFqzkbFyXAjvPYuRDFF5fuwVfXhooe6vv",
  "key3": "4YncU3WR6ugjVzKschCdqD1BckbNPv5upUMPrGh4x9vCfSX5jU3ynp6rHJQdZZ62XPh39f2SZFiH34QhmQMtazxi",
  "key4": "PFbpCZNJcFiUZP8fVakd9dmPbLXoyqEdFnmhEUfucGocpAc4EYmRCxmK1cpQhAm9QovmexM1CK7AkTjfE6t9Syy",
  "key5": "2MWpnhrnEtPHbxmJnRfyUEiUgJW4BhwrgdvaTvEVkh8dTeP89njmaNXykDc5DAZ8CrEx7CDpn46kWKzSdTyZn3ye",
  "key6": "2ywuAgQ5rsLHT41HAVjjKCDqHWeZQegKfgQ983H98F9yp8mCDKa2PGPofrStAwokgcu2P5xPBJfhQznmYUH359mg",
  "key7": "4CadReePyzHinoGJsTx9Wp5k2noRxVxkYri5rZP4Vo3oCzHkk1a3At9Ww5uQcJenPkrxuULsFuY6NrRMCciG3qZp",
  "key8": "5chWfRW9EELvzG9kDjcgeWmxqqgSFYGBkmRmMzpPq7JvBXfXnVdVChgE88GVK91UYji8UrnTysDdcX9H61enahAG",
  "key9": "4A8znyDxhYWMHU2jECC27qnoqjtZLT8pVH9oepqAhyyBPnTkjVjm45W1V8WKdyxfkzAwwF2Gtqha5dcrzrq5piRM",
  "key10": "4zfpGVfN3Mfan6sSASx8xAaxGJ8t6z3BqfyU39DQs2kJFcfroCBoFU1dcn1zDpFPvQDnB5TPcP362FyrJ7C1SFjx",
  "key11": "3cZVxA7FBh2Sqqh5MRSx4Cw2HpwG7SNhJLefbpUxAXe9pCjQgX5GfHDsK5ai2WXhc4sUzReAJyCkkJgzvsFSujhv",
  "key12": "4ohKf7ZyG55cVTVMwC9K8Vt7gmtEi4ZYQDWmULB6qZmK9SoZ3UbjQbGH9c6eWv66Us6ft9VWeN31hSUSwYcbFmyu",
  "key13": "4vVTw2KyhLxAmpndo6QZDtvYqLp5oKV8qCEcdgxYAEsiC5h1cg5N445ByEc6KzR6LCHkRwxcgXJxDVCwZxUymkT9",
  "key14": "5wmJCp2K5CmJiYBDyQy328HGD1Zzs3GbkoTV3uyxgV4h5D5Z5VFVqUfQxCzUakc4x9oYCUrJdg1VnwwGWbhyXKfc",
  "key15": "2KN6sGyr6WQYwNALCqKzmfndWMRgTWLwsAaxj6xPJGjiqMSdTgQMGtuSe83qMkRspFMjkAnWAU4DpZDJcMmxDjp9",
  "key16": "2sEyYBSh1dF6uG9XrEmu91twYYPENCLUwH65Xg662cYo1S1ZDytAYR6LUvUbwouz29kimpo3GmTxZ2VrSS7Hom7o",
  "key17": "2E4oANQDt2Hg3a91dj1uU5Wnk7V3VnbVbWH1U9JMvcRbkYA4Bc1FKeREYN2LofPm3Yi1R4pYU9R6Wps5Wjf76SBy",
  "key18": "DCuZV3nWiEPqH2m3Q5uURVdazep2ReW8rk39EppzfeRMgMULJMFcX2b2HqQX1rDbompKwGZkFkiUnCAZwpyTCcZ",
  "key19": "3M6R5eTfuSZKQnGqesL4HSw1GkaXPe3mRmvCE4HzkjKYBBe1o4JqmSDfjD4zwbKnqxx79jkkWYvRyv5ExADpVViN",
  "key20": "4yQxCyWjw4mYuaAVPX22evb1gqg4jNas3mhamjvsf5fBZ9RvvG6DRge1Ase7Vsfc3WGf4F18X85zrQ7oPBxHNpiM",
  "key21": "4zQ9sTrRSC5bNFkYZV2iZ5PxC63keutJRd5QSZFSTtpggrrPtqHFjVWep5vszVQDFvF4jwuttYwCokkVE925vXZC",
  "key22": "3hUBSnZZvb3zHDXc6qAcxGexVJdjjS88pV3YSgVULuV3xRK5RwsdUXH5PDbcAm1WUzcC7TQBDvNWmxjUg3gmesEc",
  "key23": "4tkaDRrUjdGstX74SuD37fVsXgNwrrgE3mdtJB6LS8ZzSyAwv38MBKvn17oPpBeJ9p6WACZ2iYKc9hSrxi4dTBXf",
  "key24": "5EWShmyExKouEaJzSWABZM6KbgoXm1DxUBmXUvPQVvAo7pYB4uVsNjq3tuBRe5LA62VtYwMcSRiDJ3oWS3kj92ux",
  "key25": "XrjThAnBr5WNXQ4Zs9igR8BAAhPSy9ABPAPEkxxAKqkVVXpnGyXcvj4Ssx7rZkqBSKQGwwRvyAN1wEQNvEkHjVJ",
  "key26": "3XigvHwbvVp9dGbmvH2RuwgtWmAyrUC3R8m8KwcqxGBEWrNDnwUXuTdheB8FkZ8dEbH1W5N4LczTUVtfs84pmcNV",
  "key27": "3oMtwuy5YuL7ihL57cuorVJAadCG9a6rkZxUmNSxEynoUAkaYwuxSTkHvkPRqppUPnBuDCek7gf5UE3imWD5AsKB",
  "key28": "5DT5wZUhYmeUgBmE4qkVYGmshrZFP83H7YUBryxjLkK5LxQr42oK6fiQKDkcSTSzatrdMhc7BzAjT1rEbTmMRB6y",
  "key29": "4A1vUb31FERiPraxVDxeznbvMSeR1Tf6VPjAdJSTVtsxBqHGrAoCSC3szD5CVSSkRDQWHW3rnFtM6ZSXoysXf5Ay",
  "key30": "3hj42YiaAzzFjekEjAGdLqsVT9nEPyA8y3BJkaua7K5mTTLYFnTf2ZVYFZK7sfjDR7Nn22dK4FWnv85GwRvMjrBZ"
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
