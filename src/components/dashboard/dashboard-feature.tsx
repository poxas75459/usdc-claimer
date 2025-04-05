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
    "5phhWCJw3ggHNXkeFEExDAMQoBDgy3ZWpLY2HP2xifGJJ3UHL5LtXnGGsEBaisoqsz7D4jaKVqek4d6D6VvZ71gg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FP9j8aTR57ywFircqVc2ABMX73MWCCNYmsitJpsT8Fp8tWPyMEtvisVqzCJSGzLzhP98H6vrJd4u1ewTwDzy6hn",
  "key1": "Q1pmjbENo5mCs9TCZXNwDhGPZb17d2ygEgAPAsq3SKR88kvNrUaVRQk5pkdM5obqKBwfw7ZtchE5rfEAVUfk1VG",
  "key2": "5BJHj4HG5chmiMHjd3beGzDY9jZKTYNC3NAPzHvMLTvfTR6mzj339ZF9FpcMy7UnohyqWWpA1odsFm5mX1bu2Nah",
  "key3": "5Fjtu5hHB3iEUFEH3s1CoEQkq3PwUnSGxykfk8yE5DLWCz4to7gHhdih4TDrnKjNwcMb9qdDiHWApagqoh2xpJTi",
  "key4": "3yrnjePAk3rX4b4FT3yf9kq4HcLXPQej4XhKUStB1vC5fYe7iYs8VXKEfET6cFx2paAq9EFHwWFVq3nSrE4481P2",
  "key5": "CubeBTSBx8SVp9h1UBmkAhpKiGYDXbrMkDNwV68sNuzasx44s9YbkVS6XXxc1CF9NhpPL6SJjzFzz3bp9vjvKr7",
  "key6": "3fHZXLASEWu6VYLgyQFvNR2gmniNsAFEhvnZr3rZdGk3X9Sg62REQeREouwA5poeW9siQhH7aXfnZeWhUSv3GtiH",
  "key7": "66VwnZcYPS4SA58kw829oTgVvysPDTC4XEuMAHmdo8b7w4pwZSKvgmLkaxuUavM9VM3QU4T2BUPhLXaWDoLQuagT",
  "key8": "oEg3q9o4mxxUBsWHezqqiFP9YW21GTLqnRWmz59DE8xZ4jsYWaT2mPVVSAHWCqnuJwrxUuW4ejBL1pNNf6MGdKT",
  "key9": "3zvzKJNr2zTD5FoRwKXQDaNKpsVwZR1xghjtJxyvmXgZzfo9ccTV3vuBsp2MJCpxHg7wAV1y5N3QW6s3oykczixm",
  "key10": "3FFxdPJVs6uSHGRDy75GdH5NF2DvQY4TzWWV82FNAyjaDRFhJyzmM2opTD8odjijpG5uvi3yM4aFkAmrDyyk7Jpd",
  "key11": "264HcjsPrMDYVojvZQofGJ9tqizVdFw5ayXfsnF2zSsWUNQkUYxu8Wn3ET7DHRbLQxrKsgsab4dSYt42mZwoGRVo",
  "key12": "WaPqt3r4DwxHotA1Jwkeu6GKjPRhFk6fqGizdwm75m9grPJhrodmVMEqUFxbkRW65gjapCznum4dw4c8KAp48uE",
  "key13": "63bJvTZJEbS5B8TXunf81urzMNFp8MU9n18vhnBXTeVAN9cNCqr8gh9o8p32nbgZec3jqsWpRT23m7ycHogzr9Tw",
  "key14": "5gjD1C9tzkAcy86Uw1ARZg3ZLkeyGZwHXdsSnos1jB4Ytm4fhHPhwwtQf6NmzngWCL2DJCKn8GuDYL5m83Bz1fzy",
  "key15": "FMBajezyux8MV8bBBrNHpzRUqmKDUFwTasYqdLJ9WD2EovihBWVnN5iJwyCgNsCP8nPYqC3tB4H8bmxshyfuo3M",
  "key16": "3K4kgdnDms7ovX8VLxWB5ejTaieCY617TUxbB3fhS95ZGFCTgaTD9e8AxvEZEGYM72ygxarbCmEKVxHYDn29seeC",
  "key17": "3aA57scRrqguDH7kPtXC2kWrziHxesD6Y6rUVgoVwWLuoHHfUB94uRsUKm2H5FVtAGBrmnjWxLvigAyquS73po88",
  "key18": "3e8TSL5ko67LyBpBcSWYa7vLG4gNANc8DDeniuQnS5gvyTAz4JmvFiF1Unqq28V2yyPYBHRR6ZjLU9f86woap8EL",
  "key19": "3hNqb3bprCjmQ32hVym9tge2JvFSkhagmCkcfyKqyW6LaYw5RRj4AJE3jLDVTeYqLeS9zyv1EM9xNN2ARXpUKnRq",
  "key20": "33DtC4Go5gDj7uLbNLWhiX6ZRLLuWxos8kT3nYPvmNn74a4EEf9xjpp5KzNSHSXfJxKX6u3q8gnTyugavRBZd34z",
  "key21": "57FYR1Fa2zCFVmZHrbaobQx1g8WffRVxCZHJTkiqu6DjHigEgcYqNYdTbC9FU3YmspJk8EwNVJBan7ZcUQGD72SY",
  "key22": "4UAidBfiEnbKvKP7dzFWBUE6TdQkp5sojfBEzqL5gqXRJjvG4vMe2PaepMFm1WM5gJQWYLxyF2BPtm4b7LDDJezs",
  "key23": "4ZWkbi6kqgZir99LBRoa34LLWuQHaRtrYr19CiQoUdnUPhX47DTJnQ5mNZAFEAb7XBWK2N4VboxCP6oH57VYUPKJ",
  "key24": "2ZxCbGFJnRAcgGrTH81AG7yCDhqL4R3MGF6tZ6PGGmc6fGYvXVsWSH3bsVHVacGxoBNp7io9UcHbwZCLE5cz9GZr",
  "key25": "3uY1ZPZASaSTHEgLbzMQ2RV81Zr4WbQ5wJxZ8PtyWjM1pbNrhWVVaSxfu1BG2rdWYpD7iJ71pdPnJiDvSFCXftXx",
  "key26": "2FkACPnWxyp9Gve7PZY2eCd4G6tqigFLh3AjBUQgQQMsu2aBXoNue84uPWbrvzk1hQ8mRYsSoNKyHSuoGAG6yVFf",
  "key27": "5LVWENdUKGbNYFGUV5yxh7GPabny77iY5XWad3HX685PtfpHL2iCrcwxEE3F59a6GLnjTmx23NCaRRdE4Tes6e74",
  "key28": "44BaMKsU8ajxgtA4JwTS2EJioNEvk6i1ArwkRwyx8oMVD5mFRv4DrC9R2Xr2pNQLESimPqSjRQTwy1DSSfsPo2JQ",
  "key29": "sexSCMRbz1EXrGtgnoAqpNAF2EbVc4czMk8YXe8DhZrCBnctHiChhprNcaLwcefH9mgu9izkvEiz8biFaiiuWQF",
  "key30": "4ZMqZhLCKRis5howgpkowrzTiX7WvX1YZJ5xST8EZFEFEE1DzZvUyQygPgmeKFaR9aD1h9V3b9YHYYQG5Y3rG6fr",
  "key31": "4jHkwMGBYnJoKMV7MdqhmSpYYMtHJwtEVe6mT8LHUF24yMSRh7v9C9nUP53QmZELsWFAwdHzviU3itzVQyuMrjUa",
  "key32": "3qR6wZ6ZQA4TXCxZiwiZxkfksizrQ8ybd94wRXKSJXqBjAU34ftKSXAYBK7jztzVEcjq5oVYbX7odoPFnj2AGfrr"
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
