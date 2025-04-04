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
    "4NWMTNxD3sDEKqvfJYB31zQyVpvDYcxgAwUCb9hH1KCbDPrU6RYgPa6WnQLYTTuMzWZcWziFS3gUpwcTLMbtckSG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YcqXDhLwhoov15W3e9ZVJ8Qred3Y4roYzq3vw2Ys87ZRAh5LRBTsRXhmLC1FFeoigsXdPK3WddFymCKLrLfNJaB",
  "key1": "3cxAC1GZQ1YytPHRz5CNPnWERGPisBBqgWausKAJe3osR4qXcmouNZpEHFtvq2aECYLm8DipJ7swSbdbTLJZJcTA",
  "key2": "4ixpskSR7Si7wHcGP3ePg3CL6qRegJkrJeJ91Yxwje18X4a29t3equu8rPJm81fvnFdek3q9Gag872wQ3A6CaYSa",
  "key3": "52ShrX5BnF35UfNx9iqyd868h8ZWMxjcVHtxgZE1RH7LCSt8pebg2rbtnewVJvzSdNbLj3S8W23Qwc7hGSdBTcjX",
  "key4": "375f1tXzJD8Np7dWVYqoV8FbbH7FiuiijqhEgtFghUhxRquTEwpV756CrbcAJVHCZ3NnW2cf7UnWe6BFfmLkQWaq",
  "key5": "45HtzGdCHcXV6vGekmMAjW9t9psUnEcQF7E34Yzb85kErfy5HtfWSxLs1kWufcfMQsHS8d6MpMztx8SLA4G2nbqw",
  "key6": "4R2V4ThWRjvZkHv4aSdw4a69xNECk2T5BLo4J3qEfEJSDY8uKV65aDH8ywC5PwX5gyfLnFSuSrFna9shGndfnUA1",
  "key7": "2Yv9HRKpxsRKpVBj9TgtYgqxdquD7GFzFW8n7758aPASKNahJy1S277aX4ch2SfEwwrb242RRdKMzMo1ZRhko9FS",
  "key8": "5pkrtAegaLZz4HUADRTzgxPgSg6yd7a3kzcA9Tfez9Mtj8hedZ6Pbfq7KXUmhY9c4zcYZkucppwUrzBRkJ4Ad4G7",
  "key9": "rF9uTSKrXP21ccKzhiECGaqH8Ywms3TX5deBdVqPujHDRSPgWMV7XeR4ncVUVW8Vvrmv2d5dbVpPZZLUu7aW44r",
  "key10": "2vtYPAatGiZjxf7gLPduX52xBvJniDdAMACHQ5nMoHsdD697zXqHevj4ANYT236T4HJ3d43YxFGVU7r94qhgH2i8",
  "key11": "4qoMKXXPS7RrELX7Ai7eABac92NzvcLeDG43H5SokoZgRfVbiCtD1yStWU77RweRaegNdWtcHRbbJqHhfNRq4Vhz",
  "key12": "48gavxuDVUiUmVeLujZcp6jByxfSFoYrfMYff9AdZJ1a1HQgyCbXcVBsdknzESVYrB7ch9x7fSeetPmsmn8bjAsR",
  "key13": "4yEoTS4naMPJ5WzkHwKdsZbuic88tyGEvZUxxXedvqZBeZFPD1sKU3Y5CHqkNLDgiBN26cYCoxK1JdEaPrjBnDN5",
  "key14": "2pQxRu861iDxG5vLPbRa5wSKsa8RN3sW4HRPM76yS744hWwquBXKX1WnVHFgmQSwRG8ZxGEBLw9RRQsjLP78cKwE",
  "key15": "3iLGhQoxHu72N2kdvNeNbhEdAohPdZPR51ao4xxMie4yAwfVudqYAVrMaS2sBK6hYBjbKpNzeLmqKJ4R1BBRGkP",
  "key16": "4JLYiZ6bYdkqZVSTz7nYfDgBLzZ9JNUeaLjowtuoBYAqyGQgfKxGX4xfYhRatP6bKymgvBSUFzt37rE5d7ez5G4D",
  "key17": "noUg8vwUyxUVB1xBvcXcAsqUVZBJUxqZ27e7PNp3t6Ju54hp9BdKCh1HViYbMNgZfLbRKYdLhH5Y5eq7s1a7ayq",
  "key18": "3tasWU6Ptu2eNHJ22Ub2sjZitEXkSdFuN4ajh8jdSu7FDVVwKQCLVM1jvebqXCHyRdypW3hgMPhn93Tfuqi6ekYz",
  "key19": "KaUg8nqvBSpahYR5dtjvoC1fdv5KAj4qnXJ2GRaX3mpf5TKg6iaL24ZJ8epDR6XwqXGixFKw5JwtQQ8Yoo9LfsV",
  "key20": "whFpN63CcLTHqfVDr7codzgbQQZxjepo8jHnX4PenyRtFbvv89TcwXS8D8oKAxXLA8pHYBXA3owzWwywqs8gAo8",
  "key21": "4KadmWRexSS3ebPR6ZMMY6Px1ECZy5h1BMQegg7T3eMVpo4A9eDa1uG26PNsGDAfHAqrevhSzv8U2JhUkvk2YS6w",
  "key22": "2XHR8gPVM59yKs3p16xSRSHoz2rPVk3dsZmQq2ZqfEXPQz7kxh52Fo5grUzQ7knkv4Qajii5A6wDQYdVMEybSoy8",
  "key23": "2Tka8Wdy9d2S6kRESngAws1QRfSrfa6YkVUNF1T9EJmLJiwVzGLAgAHTnxaARvXD4c2TkNFmJm874L2rR84P8n5G",
  "key24": "zMFW1rAojnbGTkJLM4c5jU7TqzqBkdX4iAUvRq5PfD3P41XwidUGQtrPhL9dMA1vc7KhMmktKNJPAoSuy3QeU8x",
  "key25": "Bbn3fYT3vGeQ9VfSzwqebVoEddiG6n6LgTchFkBpwrKRWT5zW9GBGsssbCyuY2jvB6Szjfqor1P14WDeHBjAhst",
  "key26": "4iUnhP4zaHNKhkHMz9mDKuvUyaWpJeUg4H4AWqZfLTyZrXWBc4Bpts96M57LkyyuqzPUhJNzJZgyuGq434TnspUF",
  "key27": "4vNhmnKutTzJtmYAWPjgXkcqZZe4AGHzD9NEis7XcFRma8DHEsaM3RWjgoDhMMeDz8LWnLpUthhoKDmqTDCzCyTj",
  "key28": "2pyRnQPbVmQX2iTL6WvLdAgYKzv9SGNtoXYpPvvmzRaHWz55i7EegYRsJyb3fa6fuf9RsVB5NkXQiySTo2hZmMgn",
  "key29": "3gTXKmhigvZDKPnEwoqgEGdLwKSy2A3FdyTF3wgHT9HiqX7k4WWAwhMZzfQ75HiQXXruZ57qBZbYpxPXQ9Zq3Kiq",
  "key30": "5TbhYNyyhrVkY69aHoGu72SWwaYrBxQ9EQP6mowdUJ1PBKNWkmU6qW1h4R8JNdSaoZc1DScDkQxwqru32ESehSGr",
  "key31": "3SiZHM66oZ2dJJbNaCZqvQ8LYN6rLseyE9S9AubDtArxPYJKF25gAhYR8YqbXAKRBiwtsbKZ2wbkxoSoFXcNdKso",
  "key32": "3oukRdAxqqL4jHH9rPWf3z7yMoxheHdiycdxDApz7BpxzSdNdKR1h8ybBVS1r6ktLxfMFEnV6BTDNWSd7Xyakxzw",
  "key33": "31vcmoAPPtu38ua6MBkjzNzp71XWcNhfZvhSEQkmRnAxi8JWTj1wTiB8shoxpLVQAbtK1TCzALyhPdoperUCmFrQ",
  "key34": "4jVsKvMusm3SJcXqzAuJkapn59gcigdxgM6A9vA7iy1krBeUb4QDivhFQ21T7MpXYd2xBDHJWKT8ZtNFUJiDvixp",
  "key35": "4ZdzRwEd9Hfbnc8SFLid1WXZQTymqe56XxAUJ4cLdqjNygPLAkCZGFoEV5xYn8Dc6G2aeKydKGks69swvyFwvBC2",
  "key36": "45mY3EPxRchEfaTMeUS5xGYkVJ7fE9GnTigDDUc3KMffzazc22cnFdpdUbYyECmVjFdhm8Ub5qUToLW1uqitdgcs",
  "key37": "5mH33J49JgyNf1SG2e1wGmCeUcPcWStBjc1NeknSJSngJkSTx11kzknrExEaVibZLUqxzLGZp87RjpmjR8JyFjTA",
  "key38": "4XJbP5kviDy1STKJadTc26nub2aEgAHmWQbpkBwiYBC76DucBikp5afWhfwvkniqBumtzrwJr5tYvT56Zzejh1NK",
  "key39": "3B2k4z329b3164EQmKT6HV9L4wP5gRD5tZCfVj39fPbkistFxgCREqEQAvX2H4Dfo4MEjDLwQSAHRmb5nZs5jWME",
  "key40": "92nwEFMxEQAnXggp2AZ1W68snwR5yNzxZSNdpr7NnsizzBphvicKhtD5T38HoZfZpfWdJEkQS7BwyAp8NWo4YY5",
  "key41": "2SbgqBbiSF4BVEb6BMMW6mx2EhFAk3PVaGFnjPeN9cYvk2fPoGBtNhWx97fzNZSt9pWDQcLa6cm9BF7nwxRqGHy2",
  "key42": "39WkMdoGivftpgRRLCnFF6T8tcaYp6PBdQBqnvA618J16iQmWy2yAEoUa6tA9K48zGW8A6M34ehAnkcyEBaqEeMB",
  "key43": "3KpZNGJUzDetZJ5r58kpYh1uKJTM6HNppaRrX7nrhzYcadRTme7PHwaUvRoputhToGvQdm4CiguLzvezsHQY3pZN",
  "key44": "5wosQ37b1D5TFEeKAgay7vqeeeopkagSeGTwQP7jX7oGcL1iouuf8Xs6DG1Sg8fkbJpZMe7eDHQgrEZrxBfSd4mV",
  "key45": "5pYgDeThshuVEov2izy1yZTgYiYDtAYMw5o6PkHACn8VZ84in1yPsvHzEx8B7M9phYGFeRJ1At1r7WRYe8iR6Qk2",
  "key46": "22LJjCtQ5RNbmfi7M2W832EhbUKwEszmXBRGB2dHZ71xYHRLSsQEndvygyg2ALcKQ5r6D1tktk4CEGv8Y3XNTvCr",
  "key47": "2kRjeRKJbz4wDpTnJSwNkuFps1J42847mhMyaeYYjGhHmTvfU7SkXuWRPiysLCBAG7cw3Lpmsj9Xmb5YUUt5eBKM",
  "key48": "3o2bCdiYt1DBe1bGt7t5Sko3dBEdLSyc9gGDJuov6MJGfiNYBqLRzjgfk23kUNiTf6WzKMMWZdrHpt2cbpCT3mjo"
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
