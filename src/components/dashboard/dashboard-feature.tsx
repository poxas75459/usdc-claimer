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
    "3RhndKkYtGxZW2i95ykr4evZD8ahXAMkmgaNwrN67fhG2MW3K1GLmqpYkJrijkBQFvUxYVteW8Bcc2qbVWze65ux"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rZq3xsPvm2EZtaWUNVdT4JD3KbUXCR5v45ApWce66GGZBhn81pmS3qNKDDiXY9PSs3BmBjpGYCpJ91bcz2sZdJ6",
  "key1": "5Kji8bHoaUUArwPkH8TNubnvY9EPQcuW4DUGn9FDUx4hFXQFSR6JPRd4LzkkDbGcA2N73TgAzHYW512CF5GMAEFE",
  "key2": "4UMm68zgy2eMc75HumNrubK1Qz31q8SYeP5hxasHdKxDjb95caRDYVwZJihLZJBEyJxysoWo5BAbc7268Vy2iZrH",
  "key3": "48Q2FRNbeizfbwJmwp7QFd3DePe54yMBGHnBar5c1kmg3S4zh8tNG56Si6QtkLz9gYadZSXTn1ogPnFjmzRTSRQn",
  "key4": "3WgYjfZDo1dZWGoDkCxgjXCEKGJgEY1YBYh5bSAC54rDpHW9bUcuPQvLv3cEJj7u5bLtGihPTkdU7WAiG3q1DjGi",
  "key5": "DaKtjf7Zpa1ug2G3cXw3Qzg1zWvz7qXmpNCY7RsTbRCcDENfqaWJ1rvgdTLnYeu7mPmCk5Ck2g4U8yuVw2Z6BNW",
  "key6": "2rn2iMiEGbhwDLf6Zp8pswwbmTKD4hfQreVF2HzcQSrs5iKTafTiABpoUgVo6o75idcWbbUgWeQGviNhpruXhG3L",
  "key7": "2N1FyEBRp4rBD6hrgU1rNpJefqkGcxBixirULViJ9uWbfX7iyBjxJ44FKJqZFdceMr5rmuCJyhfDsDzjPg5r75NL",
  "key8": "hpZ8npaAGvja152nrj2wd4CAte5DCjcLxi7vrKgWaMwGDJyZCb99pKi6dju5uWyAr2kAi5htiQbDcNfsQrhticR",
  "key9": "E8Q8nkxSE3qEE3wcpRXiJJFwfvZGF1SRvQqkQVdhQjBu922w6gxxHjQ8Dz5g7MebkF3iezdWq8nTN2BVkMMvj4k",
  "key10": "Wkk9PjXWCS7KBZUCy4nbooL1v6ZLvbP3KKyTavNuNUVQj4F6zMqFEnd2PU8HuRNrRU26rj6k2rZDsax6qAfzTVw",
  "key11": "ornqCgE4VNJ2JZxfguGnJZDLmWCGQ5LzrEFbZQcqczftsEPGGiMMqM7T883Ks9PSPoc2hyxUx23dENqmAytRrx4",
  "key12": "BM6U4toYeCGHMDu9HwMzp3jM4x1GVqCu4jVd8X7MMbxkRxoCZw2su4yKL8nJr48zZ3RGzUxfFKoPDT8suERadwc",
  "key13": "2xmemavRcP6TyLWXGy8WbN9Uq4nd2DPXzujMpQMq8gxdJ6GvvEuKG83xZAHHu1JnmAQR7oDmN5ALo2XQbGA9Z1cj",
  "key14": "4T7DznvZhaBnDDr3vxop5CkXoF3pX9aPESuZT7Arh9BW4R5MBqWVzbtsBS2Ja1xzMgKT6sTcZM6BCbM9teAdMtC3",
  "key15": "2cts2AA8gb7RZuEC6PYyHTYzQXhhC84cwFK9viBHbPD39i29NQJTk8xLVx4Uzxvwk5joXUP51zf8JEydVTb1jLKS",
  "key16": "3xsfpgyUeoo9fzLpdaA9sW4uq9nTwm3Easn3MC5xvAByomEoDhutcgkFXG9uajv7byLibj29LWLQxVanPJ1P19VV",
  "key17": "YYh7ehhF5oyc31b5KkX9bjgvRkVHYYc9o65mNN3BAmPNcahq1vRp6pddWworSH5HmSdiNDDsUTFrXBZuv4EYGki",
  "key18": "3ZfvbifvDQ9zB11PyZHHWhg9xZZKbzmKT2SZRoVeeaeX46BvNobD6FP8uXK9T4oRz9q2fujxZVgQtxhRk14RFfth",
  "key19": "YEiD8aUMw7LJgDWE5h3VUBex3yyK44NHnZ2otiT1HLJDr8F64XamBDHbDQ9nejm97PmEGbvjUNUSZtnu4b9LHZE",
  "key20": "5sPS2Wy1uPMy7D9i9NXr2FE7abwoAS8v6tEJW58jsdConfiMLSu6XKFhUiMGeRKSsY3iRA8JayGsK6UJYhKVdjZp",
  "key21": "BmTRFETgu1m4ixD3YRmNv7dHE9mgcrhxgHfD2pRtedZzG7Td5gEKoxoPSUeMMHZgqpQy9yUXf84yth8HoikMcF6",
  "key22": "4C41FW2umqVQ6B6YuhMrCfvW59oDmMNBBb88ETeBqA3fVfg75ZJuvcTo9r8xduKzBm8C1wmJHXVrXxCZoQew2dJw",
  "key23": "3jTwJ8z9ML9YDpwQYPKRAbthWB3hapRZHAZMHCfbQuC13zpvZJwrw91T8AsQbz1kBBNDKv59QjhbH4b9BUz549TZ",
  "key24": "g8wV7ZHhWe6oa8CCnYHrJr73hhxRqdhuQe5zKqA66Q9jZMS1KzDGicGCMUqcBkYBLSFk1KCV1F9Yvpzj21yiSqQ",
  "key25": "53wCqCMg95gcFQjsHSez3EYvoxx17RvEe1yqFjyLrZjbBTdY1KrC2xL42YgGq2vdXkb52ooDUGVrRBtHviYan3Fh",
  "key26": "BoTY5a3FBJFeDZnf7ucZ5152gtMCDBNesv2g5sXYe8L99JmWP4RfGsNmUAq75K7yZKno5t53J1A9pJswLHBUWiC",
  "key27": "3dRqn8CdyBQxkJvBqAdMWMxhMJNWusbVu9MsaYRoZkjP4eeS1qqjUxgzciQV9BHQsHcUzXNmz8iHSWRp7NDJJPRV",
  "key28": "52xiwKn76iaANEiMdWDuYavcNBpP6LrerierwuchjY33Hnz1synAcs9q6KJxxWEfiFM5KFMAxnFS3LmNmQ5ojSFN",
  "key29": "4kw1SxnLi3n5fKK5pJUxNCFMS79M3YUYpW2LJaH9LDtZRfAQbe449kyRhxDCBj1gdpTJA5Kpb4VoAkrjKnVHfFaS",
  "key30": "2iFydLWzvfgoatFXbvhyQh2vXWmG8XRT6TpNXmAiMq6SFr5Wh7bxYBhhMFAEGfKLEfiaYtnsHAX6tdrDjSwshfhm",
  "key31": "4GSbDTpQaoY89kBwfFYqBBRDbqLZJjFrWuBkB45UYUAX5pX1jWFounc8yNPHHu6fRufQUTD7Un33QfNoQscVewUZ",
  "key32": "5JwmH5Jp8U1cSP2FVaGtcXipcxqK16HDdxJ7k7hieQGWDj6wGgK78UEAgzsynkXXNtCpadvWCrgGedqAT63RqFMx",
  "key33": "8roMzcYhsA6UpNC5BXp2UqgZ3M7LtnvLT4DF8hufrwwvC8QjmRsN4TjMWEyfNfLmvEGsr9ZWcj2UDH1H4mPysZk",
  "key34": "nm5QP7HRrw3jEcWYNXFf3M5CUkcbSuHfdAj5SwNQ5jt4ZbAVns9tD3pUNFAKYNfMHiS3tpRpeVVYrGJmeRggGL3",
  "key35": "4q151u2YdqvV9JgHX2Mh2AYts3UyufgZHa5oASJJozngPdJKcGqxmcPfzx3b7c46iZ9ZZtddu3t64Ja7uBkPVCbr"
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
