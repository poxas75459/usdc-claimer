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
    "gmuNDQwoFtN6KfS3kQ5RBcfccEs8HsLcrt6rUeNTNBKbrCKeTn6HeaEYJUMibJBFKyqLUp6ZtHp5RFnatSh8qB4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21otzn2SZ1M9NX9Gb6HzDDfXPgZgETNCG4QzCs5MuzU1YHRWPitXP95ZazHoswwqAg7vJVCo4Bu88TtfCvxrBGeZ",
  "key1": "38nat4fTUh8J6GD3XdCgKhJCFCjK9oaTNnkoTXxTn1UejEgW7vRQ1f2GHzZdohEdCy8bPARDaTsERreRQ4oHSUCM",
  "key2": "4UWqkr5int9LQLNtYLT1LYFLbhB74rgiERVPfbvMvmEsFBdyY7XEQLZ2yweiggvJDFnk7YtL1tzCkRQppmpRgMPQ",
  "key3": "o79KBUnkeuDAXFizQWN5a3CY44QhRJToQiUzg8VKcY67BM1kHAdEFxBFtszNnMbDCs8eWC63177wwFP1cw8EY7Y",
  "key4": "5mY9HwcKNkVNiXMZVRuqVNtzasbPHCsHzLdEAzZYSK3P4X7pamFifBJ2xwN3U4zJD1KYiQpG9dXE9CPuVhoprhby",
  "key5": "2zTHncjRZQ1TMuzXAfGxDzcyMh3vLBNfxPPgNUfMh3eADY91diMMjwBGAux1acjeEpfDq6EQivdYyo4dMndfGB7L",
  "key6": "3A8N6TJwj9svF1Qcdz78jeSWg9iE1v6rP5v7z2aQpHqYWJBzepWYK6cJsHy9HXjqfRMQJzEGoYCmLBrKW2euYPKU",
  "key7": "35GMAypvRzQsm2A3aXuzd4TtERfRAaDTPJA3oNXDz5fyvtw53DMTS64WYedPVU8H8JsP59uLFBi7paZP6LdGSfbP",
  "key8": "5Pd93SAaQmhbMkFZGg3g28p2ABw9ozjeEMtfL4XtYqzUN9mSD9QPTFBZczF4vnaFysaFPboYjHm7KozDqUiSHTj1",
  "key9": "62EeyqwW9jTCNyFbFYkSCPJqDr1fmpXJciYQDBNrWwfrrTTRkwEryGkPBq5zo3kBJJgfM4cGfhiaJkTCU3uKBpWy",
  "key10": "3o8tL4MaFP65kJqoFPNHHg6LPPjhL7mkaBqcnbPMLeFAwzYJRUUEf2n8AJT23pk639d89AxKvGfvYbjPNcXS6YKi",
  "key11": "4cvEXghGCxvWMKxCNqwb5tVYzkeyjnWizS2mfat2Jj7ZCpN17pfsWZCrVHZR6goHNohovRY747npftd4ME8useWJ",
  "key12": "fwk1PpPiWQQhULXPKEW31rP9x8RxV3t5T8kRBzSD9iUQnYHNRwMe8aanvewRc98oZQqCQW6aqpU6ef1Dhx6LKRn",
  "key13": "rtYsQwTc3Lo5d2SN2os2oepsYDambFssmVs2B7NGiyYDtD9X6mtMNDHjkgvVJJJrYkvn5poDFT7kGd5o9HmRA3p",
  "key14": "2qXT1L6G3B8ZrU5Y3yfJ5uDZCmNJQFxDNXFVgrhps3rUfFWP7Pjs2Z1NDbRtYbGiDSNgci1tBxjHdBVeW9C23WJo",
  "key15": "4gfqcYdyZT54heMwJQHiZ76BDCmiUi8pYfPPddocdii3FdDwB6FDgg2DUy9MEc9DuqAfR4eX5HBU4cQcFeqQzTqt",
  "key16": "5wTb9nJFpb3Yb9ddXie2e7jF3iLbuUtoyR9xrLGZDxiBUvKc38K8VduSLSjR5Tzz9J8gbkgdKpgcWFdfVqmoFW1B",
  "key17": "2P9BmMcrGwGdF6GYQgbMgch5frNDYw4iA1KoDrayBLwTUhhAp1gkk6fxRnUC1cNbUQrrfXiWpTgfuqikYDXpLUof",
  "key18": "2vvWK1FwNRAED8TVDDweMP5UkdAwbUp3fN12zaacGjcaqNUqjZma2aQbcxVDFfJ7cr386TyDmkjwjB6GvJ2Ckm7p",
  "key19": "3njJrDzLaJfKsMMBPp9k1VwRXXePksDhWi9BZC8wWA7EUhiGX5SDWmFn1t1rV1xXNJr4Bygs5fjjVLTEkGX1yKAr",
  "key20": "5Xk1czwZkVovNCs7GfhtZCEf67qUtxUYsgovTvAZoWaLUQMRZoXrn2EV2vY44T2vBUYicSq1SuhUrcJ748PnBA9B",
  "key21": "3nfttGRuB1pexJdKM3f7ozJwMUrVS6CATuXDZFqpKiR6y4ffqPPthTxcnoDBLMHJV4XLgcA2ZE4ig65CLW3ydLip",
  "key22": "4HYWNLAY8B6dXMfVBY5qemy6dmjLxC7rNpUYugB7NAX52qJsz2TxTBKNcwM5mn4E4bSn4A1xWoZSa4eRR9FZiHGD",
  "key23": "2jmw85YQa1MX4QLVSfy4hKjWe28Xu9ihUGEmD7AgGdJdfUwAZXwpQvy8qw865EKRhccgtaoW9amjGVbXTNnStZSa",
  "key24": "5DZ77xeEjCNMJ2hFgQg1XrXPDEssyunnpGshdc3NnjwpZrPsFK7rAZwx69yw4eLGHrkNskYhJiW68N5ACWr3mvMy",
  "key25": "3DiYnkxM6Mmu3eJKfn3LcCzxH77osNdA9Ns8vfRdtxdnyAjyAVUuD6paseXLzLQJBD7x8Dd5uNNuivcJ1v4hqNH4",
  "key26": "ytEJ31TzYiCnCYhvQvvSdP4ebqiH6WcSZgxxGMdZ5tYmiJBZaWnKKXcbzJyndbqQr2rMNvvbih2HhexRPAA68Ud",
  "key27": "2UkPvdqt64mr7svvp1TVVfFxSe4zWbezgPrtTNZXAGDvp58FcjuhmffkHxKgJtPuMg41dyR7iQH1Pf3aEZa27Pqi",
  "key28": "3Bifaci4sBrrptUEHe72ipc3Dgpt7yfXwrMRWsJ2qnHrSYG8P29wn1eHwvZXpqZ2wCDCNrgunPvwoDBAXf8jBbkY",
  "key29": "pJ4dGNSjx8165kp5X57kHEjiqSbGoS2pDkJpoPGzmJLHdxBa22tLi9RDsQHJyCAm82BKYhMdaTBrqa2TA1vEwqz",
  "key30": "xV7dGXjmhMBkgWRidDy1k3FUJn4yoeoCcjHJr1vCkFTxt5D5cqWBAcNbXCJxuLGp1AYQvnMUToxQBuTxnRgmURT",
  "key31": "3FMjz7fgoeSHbG2VoqpP5T52YeoBPHDgZvHhpxqwbYRbJWvvDY5LfZsjrbQonz1UXtXyTAHRH34XwgvFweVTzqWw",
  "key32": "2AWcaxvsPhLHT8B8wjYh7gu5HbxrdAaudn2xKnHQ8yvS4X9WTcwGLUUTuFydrBDxsaUyVw8UXLqxc1PAAg3iV5aa",
  "key33": "3axfwFRUDzfjva4V46QiAYHMAKPy1Fme2hmnQ9cMPQ9YZgtE1mQKzYNsxGXvv9RMHcZAFcyHQffigseTnBaDDX1M"
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
