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
    "KpBhfGdTQ6DnwTxnaj3iczdeephgfv33MFx7i8KfdX57H9R37cU2ggFYXgxWhSkv9E5iwvrF28zzn7xbih4AcN8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eMpMDbVUmimRsqRWQ1e22xuDDjcEn8n7CUS3ixR8SxngBqpNgLaU5nGUKKZUuLqyorVSGscuhtuNwCDuLCohA4p",
  "key1": "5zFk6FN69FzoFbi3JRnS1ST1sx8v1RfwmSxdgWCLKH6sRJXmXRm7Np8oyyyAwspDRCNpSvXEBRnsNfyNxxzm83Eg",
  "key2": "5pHbo5ojRdBUpE7Wdfwo9uWx3wCEHxB9hTAgKg3Vw4YSEdJxtkhSC2TppkxvxHXSR8jmWAYWshTT8uo5EhmaPU5Z",
  "key3": "3X6ffKL7D4e7JpxR1Zj3ETdLQhqNvwYGdeSUQopemP2Rwto4N6vjVWrKtNXenpDe4dcn6FCeYkZk2A6xEF13Hgpd",
  "key4": "2g59qVntR7UfzrxaLyw46vYNFsh8FPjj5snGqhhDyDFx8Q5ncMyvshDiFZHYzLjtwbmCEF7bJ8taNUmHydNFr2pD",
  "key5": "AQKjmRhy5cKvCt4EEbzeTvgQ8aijmHpbVqtuh1c2StUca5Fry9RzC9Sjhbp9e3p38jvB7YrAEhDNxd671tgBXx7",
  "key6": "453i3j6xPuqP1prGTwSMmRWW5grgnSkTCmxwAR67hoDMvxg6dJSL3EcCaP3jjKcFmvG6nzoso7A3r9xP3R1fKWdM",
  "key7": "3XFdxp7GFVkEqa2bJVv18hTnenHn9bouUee9VXM84MzQy2X2vDzsDUXwzjZTUqbhnY1qrFtY9kQy5kY8cjCK5cee",
  "key8": "P1E76o7E5BdVHB7NRAF1CFK7XNsRNazSZ5btMDnKLx4qNN6P83oznufMvQPMR2Xkg8udMvZLpA9CXGEX54u6jF2",
  "key9": "2sqVajHLqpWr1kknpwxiiT5zBi78pBwnRmKBYnbUwoj2y6EqrvVKJLByNBQPUSEqjv1BZBERRnrQqwF5d6WpFSUk",
  "key10": "5jNdGEfXr1Rxf8K2KTEshBZBHLfFKxViUmrnRvNWurGcutUzdFifvjJNVmApZQPi7Zd1GXL6j266ep81Bp1iV15b",
  "key11": "3jkmjefWzuokxb67xHSpWZpe5CyqgiDYMFjs3epzxYZDb6psXRK3aA8kv85LMfgjU5qfDiJCLyXiPuWJygQMj8RN",
  "key12": "2CeHLmNdpdsEckqhg9ZfDdSMedwr7WH5Xw9ZPL7VifdwJeBmDX9okMwsYrpqvUnkvjcz6ZoauqzkCtiSTF8Q6Nu3",
  "key13": "4vFQYNGynLJurUs7p7mKj9K5qNZ2T3zmRH5p3ubaDGeyjt742kv6hXaMyYwqyugCvE9gnELp61USXLyN7EHmVSCo",
  "key14": "3FAfqqhCB758GYhBqM91QDv1gMQN6cUbvpLYovekosoyVv7J8q2iTzPHwxAspu5rVSpvpMLUgCBQ2Mzce8DrLSmx",
  "key15": "rkQhzwwXE1ZL6XXqqMkyzCCTaova4bnhk5gez1QbnJWNmiTfx8v2pCLde3fSGc4pdjy9UM4Sv7CH9xP1mrRyuoV",
  "key16": "45exm4KMHvB8sdXzX3NGAucAhJikxXQgFyj3efTtZjHCbXpsAtX4n3mNGYYvd94n1T2KmVfWmNmuj6iktxh2Cn9Q",
  "key17": "4uwEYRYqoqzQ6sfVa3Q657ut81Nihcr3djPNhkr4fYb4un7wbbxFTdMFuGoDUMjBG438cyExfgN9KUuK2vJK7Vjd",
  "key18": "4RbWtA2uvvwMGbhvjXX8U9HUxxX1TRVdBcUkZvv7WQMRis7EpABVWxgLTNetrsvUCyC2RZ3p8b1tPyqUghtBRQpZ",
  "key19": "ZAo1j6gVkR9G4PigHLUQgzK2iLaT6VQp1QCUr8uYTfe6SVnqivrnAayAtDDhEj1pQkdVUKnP8K4fDhNSfi3VMtu",
  "key20": "47AragyberrXXi6HdFiVBYgkw7KHLR4JRPzxDghnJQX9UpgCaztbSbytesT2VXUCzhz5Bv9ymQC5RanPuRScufH9",
  "key21": "2sPJJUyZzZHKPu2p6XfEwCuJFwD3MfAoPGTzLuxEQUf5nYGfhhQo5xf8ht8LZPyeUG3nXUaDUxEkGMeDBSwCjT5S",
  "key22": "2fJ8xPeT27CxxksEL2syzH3sB8LAb2B7knDqQEPoFCCC5CMN3qfohger4vkXJqQYS298ZrzJLS9KmNZcZ7xbkgLK",
  "key23": "2sJZ2spuFCuNFdfz3AXNzuVY7uPw8bkyaNVbtbkaGKwAF34vBqHmpM4pquQLS3XCkkf7RaSeo7oijJ2aLeqwKzxS",
  "key24": "2oH1drsLeYLh9pQP2CxoHVmCFYi9xpMLxAkWXKhhF7KZX29gDUtdY2b1uAdL8gWgbLVUqFDXNsnHqEz8B8fnX8b4",
  "key25": "3xee1mE5AY7YSpAyLtQoAsYW6izgaEsAMuWVLWeGbeq68fsn4GcNRgjE344tGfNnd6FXUCJ1XEPJaDDBZLojw4TC",
  "key26": "BzFMYQM7Q1CvCFfjEgyNGTu7ZVAfBi4tbnmiKKjprCzRrjUhoxKUCoVnZJGxHwNyHvL3Mq6t2Kjryock78VkyGc",
  "key27": "RRMb9PjJPbWD4B8cRKzYicMx5gQHBvELQ4rDhd2SupfcvVasvU5cuyPmvHxkumMxfMvbEertHtkR5VqeXBRC621",
  "key28": "3MLts93XNS8YK1uhWsWJ7fiqfws6incSg93LEjNeeaXSamTcq64yVmwkgAKNRpToy7tHc7fgC2M4MemtA9Mcqykq",
  "key29": "Wieir6GGtdzacNimkZ3xdyBjz3KWSaGpw2FGybwouXaZyJeESL5785FpMySM81uAYwn8D6hAoXkXB9b55jscmko",
  "key30": "5vBjUfA8Ckpgnq77tkcmax9sH71cFSVQzJp7st9HcqSwvep9yWfRKmf2oKvVt1fkepiy4KW4qHhYsWZ5jBQNtNYM",
  "key31": "3Y9q9QaHS313KBvZCQV61m1m4Bytvj6wbaQ1b3ZxbmqQsDZPFX73zRWRKoSSEhkT2Ut69WXvMNQw8bNiNEujQoj",
  "key32": "2dNVxWURYVVEM7DETBbhZdRSWusARitFSKiAJASf7xq9gtg2ycVhVhhMvVZMFFzrwB8T9Hn5Gh4GTRAFPbMR7b7A",
  "key33": "G63sSAzVvhqKxd1Z99WF9kA2yNUu8UPuQDa259xjK9LZJV9rtAp4MEFi19nTFSbeHsU652RJzYH8axcazGRD2Se",
  "key34": "2Q2qvEg1gWodoU8PCU4dSBQDafqqMKDx75NizDv7c8kyTN1xEe7gPWKs2NcpNJViFC5PKZ3kaXcqNTucSu43z1nF",
  "key35": "nFKRCx1FcpTJUqLRfGe1FvccWeKGHEovcm6wdbzFqaWHvLzRZVai1srBG6j7RvdaUJgXKXFRxssdbDTbTiVq5QT",
  "key36": "5mBRBQJicTqZrvVEJ5fKUPvzr4dKMqxTNYsikJngY4JAT9K38RhDaczs1GKYUf21EAwns7DuxyptkhVFhqj2UGZi",
  "key37": "3fYb7peDMxcbx8ABMdUHGcZPhL5YCJPDM2JNhuEXdjyh2zUEamAoMjg72vA9RPtdQu6RHdgwcx8wusNv2dMin2wb"
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
