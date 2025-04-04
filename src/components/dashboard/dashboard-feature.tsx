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
    "ZSwPbX5Z4aGAWYC3UCGnoDHH7egNHcRsvo8fXzENkPMF6Wo6gFZgk5AZzED9Z926iFPuNWSHszrj7wcQb3ZJ9hs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42Ri699f4T2Nrc6cEJyreoWKgddakULhqsSX1tLxqdBpib7bDXPVhqCor7poj6HbwGYm319JJnamMLMvHpQpa39",
  "key1": "5AunWbDc9CBJ9pbpPLQqTdiztqws5mmP2m4P1w7XvAbrLAWjvZa1WACcwtKHPHPt4d6cCzwXrUN7b3xUUKxAyh2t",
  "key2": "491Wt9gwSLPFpaK9n3RBusK6ssR86CeAKHZxpvD2kRdxnqDmrrtq1a7wH78WWfhAN5dg1uKW5zgeUkipcgWDGLNB",
  "key3": "4PRGnVAnfqjZGNYWxRZAn7dggAydeWpo3dBdA4EdG9ZijRi6oYsfR99CUhrqGJXERnQv1W7PrTAZrbKmfrxKMFed",
  "key4": "2Q67J8QQxr4hQ28mwE9aMnqzV7CUcDKXJcrcGS8rk3V1nJcf6n4KZH1C3vYyAqooqXpLXas4h64ddDFWuMBQvgnQ",
  "key5": "5vFRbXp29wG458FwhxDxhCpFfttjJYJRr7fZP2PDEEe8ZWg1ipKPqMCpCWCbGUPMMGtvmCJYE83aLoTsSkgoG2SQ",
  "key6": "4QsKWX7Gf6ggSJVLj2UsXViJSRnZsMWyq2699dtLEGuzrcTGpNzUJQFRNtkiKXqt9uM5X76JrQEGjLrCbYpLQc8R",
  "key7": "3KPJBeTiGAYuXE9UYE9tqEeThoGqaQ8mL9eyK2zKDR6ZcEjkMoCzDk5aUG9iXdN7RzbcuKHgyXW5KbdhiQjBKNv2",
  "key8": "2dzBh5ornuZj5q5mXYiFHuQn78btBXaSLNAa2eBoFdUvxyPBZANd9JrrVAPHWfT9PRv94THXN95RdTJafoi8rXjw",
  "key9": "5WR3fPDs5xD9UAqSdyWFMivsJziz1BiYjn5hAs7AksUAEjqtxxmjGsc3sS5WbcqXupvX1uVFsLUFTFgdYqwsHt27",
  "key10": "2cTfWjrcKTaXCgFbSYiz2mktHzFoEoJ4S2zdzK7sUiSyavmXgR2LN3mTmcWFtYNXt6VJiWy7WBHerqzkxN6iDTTP",
  "key11": "27BRqzki3iaSZbw634CvPY7wMygA9KSgv4jK4XJ8KShT7Yg6D7x2524jYpBHTVsNej8FEdvkA6ykWdCfsw8H772N",
  "key12": "5D66bqNfQR7ZpXcrNxmjg4jM59is1Hy9CYTgp6ck399oeTy4KjScwQdFoZfQSKwycFJtJjjmHc3t3qV9vBRga65F",
  "key13": "5sUKZQ6xjGcGrEKCFPbvYN9Yo4Z3wo9xKsuZXyUEL9ePZSku72BmVYXsYiGiwaUhscHrj8a7o9P5GGGp99YRA4Gj",
  "key14": "62AouqGRvHWNqmq3pyzENtuYutYqf5KGFprpqmRoqLnbEN2XZhK3C2PVLxL4u7N4BBUkCb8JEhqEUppQe85BdRrH",
  "key15": "36EPRFQ1Bs1pXf4t3AQC4CvYeLfJhjmpCdfDyGKNDSHbtbQBJowCDvdHXykti2rMiTV6DxKj9hy3fRJ7GUSifNJ6",
  "key16": "3up83V9PxEip5X2dX7bA1wzfpvNHoLL2CMaUR8mwCLomM8srUrvvCjTcBj3pvVusrsXwaupGUAZqAmQo5LA3TMnw",
  "key17": "4u5nnvFchwcnTSt7zFahUQW3p6mLwjJypR9dqJFC5XdqXjoTMzKwfgjBMiZCoSesV75cFGa1qEZ6mTy4ara6ajJn",
  "key18": "48NUeTYo3pKHELyxg69FmgqFnhLk7SndNLpLQuGzvJqFF4uhdY5vT9Dy9yg9WcDSMhLeUDouevwAUh2DE2Y1jZQ6",
  "key19": "3RaNPLJgNfuBePfGn6A1jt4sCX1XskAP9Zn9eMMpSrhG7BQ1mUNo274nEWAUtqbWMqWT7x6PdVKc44ieA6M7FYqB",
  "key20": "2DfrCTeNihP2uR8ndMYW9ab95opqkKn91Vy41a7iiGAxRhtM1KLieyrCtvdNtM3hea3U8g3MzXH8aaeRWdXcqmew",
  "key21": "33sjDEvv6W85rMTvtGsobd8HLt4ULSx9Txc6eKBQL8TGm1dmWKCYLDoLx4bAB1NxaBPHKmSyUHmCfHb9mXFT4WYM",
  "key22": "5AdRiis8eax3XdpeMB921n4ZnDYSMJho7hGgd9j9xFBaSzbYLNHqBnSwqkQhdtvzVyPSbHqHUomLxjPXR3Xav4ro",
  "key23": "3ABimZEXqw7YMuj4soSgBQC3RxA6hYccGa2msURtdCQYrvBVTm2B3GfHy48kHe7kszTSWLd2Vyu5ZTZCk9HGNbSj",
  "key24": "4ifLnJHuZfGtZfuMBoj2T8cJFqfinSpVsTmge4JyqqAHtm5AHAED18cnHmypST1ug2MtPpUwwHhWNHdCr7LFfa1o",
  "key25": "UY2P68U7FPUfaHigooSLCecR6SCB43skNxbhcFcstrRHYCxQGa2Sx3egGgrj4WmiXDWFxeK3RNQsbMV6V9MJE8A",
  "key26": "2f7jhRUPymmpMr8dNGjDUJETDojK4us756yx8RQ5TTzdeHtK1tyYcEjcCtUBenTcVn7iGD2efLT8TFqmM725hmM7",
  "key27": "3AAEosH96VRqmC94tNKzgNEUit2CFKZ752oFoU6xs6n4Lv8rX3BDwZFhgcJsAsXbkm8znPNEZL4Mwdf2uCYEEf58",
  "key28": "5JhmUs5ASoxbrxmzj1sfSdBMqJJdAJ8yESkgkDYgZpu6r4xxtAVpAE4QYqw4zrQV8jXcHWzLN1HFccU4MdoEpzCj",
  "key29": "29kunLbajVK7gtbFvmdtp8k61vNsGiCer8gPSntHhVnjFZA4PnzJU9keUz5ffn1XHUT58GrCok9YrZyV9SGxi6ft",
  "key30": "4PdTpDef5NTPN5ctuQJsWyUq6zEsCjp6SaMs2cdLM6dLJkRVyjuUebTxNmB9TszVfvE3P7BXhnVEytVgXPKh1KYX",
  "key31": "3R3vETXbUsBBYUGGBpKEKYyd4WqQhq18ymb8hwbb4mNsttLwzpBWKqrdQbpaAf7dokpWVBb65GxiKQNthg8ooZBV",
  "key32": "5Uir8vcG66cfixcqGYE9eeFNrQi4WXsyEYyF6nJgoD2fLs7nLRqfsyGUF15moxr8rYSGCNGwTsEfhc7TguqPCfwP",
  "key33": "41ZXZdHh8BEkkdJc2WiRLX5mmwuMb92yBkYRV35e1dfgBi1jpixqJe8mw3WrsZxXBimTrz9VwREbeqBqEAE4sEx2",
  "key34": "375wAs89Ye3Uufu7gmSQXUXzAZ5NqA6VDrSbG4anaiMyNp2pV6ipm9CoSRAFcmNz2fJ3kBhYV3oQBhABcniwfUHQ",
  "key35": "L7svNDVf7y8E4Y6KK8BQLZ34LuCmnkYt7RTYnhg1ChwPBZi6e2BdjvijAG1oTof8hyRMxmHgEDkn3FdACCTdFMc",
  "key36": "35XiE9Y1ZioTrYtvS7fRqeqJHCLiCBFJsBtk95KgHHLqaFr9uYAhQjoqQaVqwjXYQ74gqEz3y8mwssRSXqKtfJdo",
  "key37": "47ZhdWo3kCdCj3w6SGECfgsR568yGjnjakFJacqtyHR4Ga2ewRqLpz2ECxqwvJKzu44PjpKCdus2DPN5vGJeUJf",
  "key38": "66fHZquuFbedFr8KJ71E7enSmVos3vZqZjR5GbD4vUFzR1tCasmqvnsPnRdFJqY5NzW5cLG8snPbBw1J48dKnnjn",
  "key39": "4s7sM7VFoR7rMeoWAXd8mnmGjiZvhyzpgFimLszgJoPZD5qiwvLCQ4EmMHdUC6mehGnpcpCdFdPFnzytYhcwZ2ig",
  "key40": "3LCUkHuENmWDe7vZtJNd8KVEGMbYCgNw7gUQU6hC8T5eZ45EwbaJdS9Mkxv7yKxAcYFngLa4BZixHWSfHmKx6AkW",
  "key41": "3EbUARwfWQjdS6219soPqP6hMJcukryGaCMKJTy3VuyeiBPHYMguLxG56PcFr1cWPX3JjWDJ9Gx1wSp2NMXy6VC6",
  "key42": "2c83GEHUb4QqzXNSZwCdCcbffgrxrm6DqdnFDrUk2biatwXfko6JJcS24umapsHWkgHvdxLrERrNmncbVMxBPp7H",
  "key43": "2WM3LcfSkg8iipZtc33bWScmVdKGJYn3wN32Yk2Pp6pBPh86CmiXFY56J9zBhFSeRmepbHJUT427Vv7uhRH9mNgK",
  "key44": "3n3Mr7TCRZdL4CiEzcLk7EbSuZwTSvQCkbhJzEJbWHd5xLGUYNsg8LXYniMDizZKea9bSWohPiCKB84PuT83Ueaw",
  "key45": "5rYip8bKrCGgjZAufzD1HUBW9yV6gqWHZZ2uJoT62uh5XYeTpD1yZ5dShqX48CsCahZkBG7hrfE9HtHZ4QycRPiN",
  "key46": "2pTJfkrLWUJwjkpW98hd7jtruq4krVLDTmiYbqJAQ2jx5nFfoUZuuHVVozKfvNizoJXgQ7wDTrFrDDXM2t9z3SHH"
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
