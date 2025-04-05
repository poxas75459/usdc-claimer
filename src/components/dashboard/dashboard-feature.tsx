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
    "3VxqaXBNVC4Yq8w3mJjSyWs8uaEfLMmyCEXFhgXY5xao6ewsU3Yvm2ubugXkY8VJyEMjaT52LvkTJV9P8XdXkNY4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HvSaS9q9XKbub2JsaEGHr3iL1yPn1V1XLw4TSfWHBqw4Sv6mW2TYttiNew5tMGJxsip4UEkTvq4Tv5fWPRbZcEW",
  "key1": "4xxZ3erQ1aM8EHzaDw44y9FrXSNBetxnFqfLFyRZKWQV26m9phLAipRhyDh35jynppP2xsknzT7o621wLHWCDNfN",
  "key2": "4Ua7LFixKoJseMiCEE5pahfxr4Hb1M81teU4SYzuLFFN4N6pVquByezuCyRxa7BU3S6a7cCn3RkpFAto2YCs1EjR",
  "key3": "5AUoRGeHFsvCgwUmHyjR2gErZs7uF4iefkCNRQJApXNdHdwcBz6cth4P2mfjN8VifbJ25GA7sUHgXKd2RHxww9DJ",
  "key4": "4L8d8bWyMCQB8YnXUTZkAoprgCtZXr8ano3crY9kLW2tiGoeV9V4ACGD2fF91PCWr8xkpbigp9jv5HfPiNxxjrqe",
  "key5": "LvubXWkwxskcCV6dR7mSKb4YkvWx6uyEJuoZnVQZ5sDe2hNephKmWoJRGJ2tjtJW7CS6TdjUydHw7cCuMo32veW",
  "key6": "2UsttyKGM8ChaNHCz2fVPMt4p5MDABRKEZmFmtHdoe2mDMwNkHzfoWJBh4tDmhpEUCbTUo2ifudf9vPRRo6TqXh",
  "key7": "5GUD4sgkWgCcdZqM1YMcafgsPmFLrJnJyS6B9Y62BtEPNft5kVsWNDdKgdESEV3yPRWu7x5YQYLpGr8BSLxBsiK3",
  "key8": "2W3M6on7ucRHR1iAqZi6eHx8dmfChXCvhHPaMvhmPSww92ob4zugFm58qh9RvzpU6ToAqgJsuz62QGqGZxCikdPf",
  "key9": "5GtwLuLTVCXRx33Nd8zURRqBV5awqUBTPVGvt4A7S39x2B1FxdLpKZrN9BUkggBgEESvvUPAxypY9dzRGafGmrxR",
  "key10": "4qLjyNH6T2j4tkML7dW7A3LA7DFHAkBWka3XYbUAgt1TDyCb3udyxW6djduzqsfsdZMMuZL6p79ktvdTHpvYKq4Y",
  "key11": "5nRa5UZ9mdujEMFLweRajBTcSMR7ECEWXBN8TXXaquf9yjSSyionxGVJJWGgjKt4xEcHSYcUh32PECkCr3zDYhkR",
  "key12": "DQTRLFGj8pigfkEYgyRhFu4ZDqfeDABWccUN7HKkhGaLarSgmoE6q4fJ8SwsS8mBTBDkpXfHM5owvRHMg6Wf8Az",
  "key13": "SL2PucSPSvNhscUmtJkzoXGDsqRhTGTJF7Mz7yooy3VAMWSeKGkTH8Qe8StaRB2rSSjXXjoFwvwhYtGZ1dibJAY",
  "key14": "4cA3y3DhT4GD29qhLQ2BRn6f5jNfABRHPfMQeKG7p8vBXdq6bH91TQgPNzfWMVeJT9xUSVPpsbRZgF22bttpYNg9",
  "key15": "52NNfavkoBXunJTQPXs5unh56ufQpqyTqHE7dRA5ZA2z7J6EEELvB1oAu6ju866V541VZXmHjWzxUugxrVXhGrRY",
  "key16": "4VYbYEYuxUHKBNhWTsTZFKNAD8w957mssfXTu5rJ2653FBwb2u4oHprj2zycwvhVt5NXbTEbvGazUGoqCbV9rtu3",
  "key17": "4tCzYUDghTx4Ht2dFwDhen5yYT7QM5j8kCFRxqExBLULiZGxeteaG7uqWN8BdZ6EeULDJjhbRTQ9Dr5aq1doTgCg",
  "key18": "4eP6fKerRu4kpFVbpFJA1e6vfRAsHM43dQewJKWoibspwRtm1Be1vCnrsPJTNVZmFPgyM6rnB9h67AxqAoJtQUFJ",
  "key19": "WNL2of7zbgSCZmcEHH6N8KqQNt9PkWgMf5K7EucabdzWwMDo2qwpkYYdaSkyV1sY82qijZQZaRnxP2kAxhK1wpW",
  "key20": "4U4qQhmBaW3kmR2oY9aTVZTMTWCkC5toNt55SRuufhdMKugpT3oUfTnzRZkQypXwPMKNJoqjmh7R5s3dZH7dtyg9",
  "key21": "3cQoPBiTWtJbsVMWKbhi9Sbbcsi95UbWq43fRDQpNqD8QBh9TLMumVCTqpe8ocxsi74ofGzTD8dRZ4dPMMAFvuv2",
  "key22": "3mvS4tBaS8XLX1XGTxNoDepbHsgma332tCG9GwEEmjhB82zcaS2ZsmTyZyGph3irACqvr4C7rPbjrzhCa45qAvg2",
  "key23": "5QqWTCzzn4GHmrBm4AhDxyXDqkKjC12r2rrGSyen7GCWuMJVxB3N4cmXnPsJaBnjfbsE6CeSEZ7ijzZCrgHqYsY7",
  "key24": "5JRJnvNm9TLKrCmR8SB6WJLuCyyTZ5eZWDW9Z7fqM3GvFqtvH4JFzQ2DxLg3ZHGMrf2M5vY8Hpdhuccvc26FNGya",
  "key25": "MV99TeTCiMD91qyBvXfkE6eGV9bT4NA1RtqtxHiVeUwzLECSEnAFRkfkRTCUp3ZzCGzFTbLYbJNeHdkaX3xVmgU",
  "key26": "235gjUS8nE1hxN5LFo8boS32j7BGM8KRu3aE7JBa4sozbyfhZm5XVtEYF7c6AmwFXx6wKJ2emrHA7C59cXBuWX5Y",
  "key27": "2VjpobWswgMNFV1rhTMNQ4KUmi8NwWe2uhufBQgLDB5o7sHXu5uD5cSE3X8RJ1mtHW5QLe4hMvdJ53PgNkcS3hn8",
  "key28": "53K4EfkUm6nx1nCSxYF3dSQHqphPVW26NWUae7t7XY3pn73DVuTyq3GcWor6sB1zfFEJMANiWoDiayJNTJFjcEtp",
  "key29": "SQv6jGkmjVUeqZAWsQR6BBQXmVKFVe9nhkJvnxj8b76Q5DFrvcBZUwakXet5KgPyGbJkZF8J6HawH52F1v6xH3N",
  "key30": "3eDYJicR1y29RFBND6rBQBcYLHFPJQoLgnjmX3q9CA4CzecEMPbKN8YoF1uxHtpxdkFTB8dt9F1F6Mo3xXfgy3Y",
  "key31": "4pqfjLPnSZwiRysZnB4kYotFT3Azn3DwxGfnwmYNBWRzypZRF8spYsXrqZYV7DZFz5U2dSRq4f1HPGNd4m6SWvbK",
  "key32": "yAjR2vyyv8EyG7SwasjwRK49umJapvkT1bWyaYjCbmWBkyHJEAHqQk6TjBSn6zA7ZqxPbMuWdiZyt8eJ18zUC1p",
  "key33": "5tKCS2GmsG9JqbEorVeFXjW1FZyUY7cTMn6BdDzHkujcChLam16zsEf1Y6Nv5PeJBaGSNT1kEwrHRKdAPEkt1sRc"
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
