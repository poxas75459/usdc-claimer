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
    "5AEbapM9VJWVkaS35KtsJhpJtMzxRvhKBJNiXn3tDTbaMfuvSQuUaFmCGJxyXUmgdqEWQvu5Nay4xgTRVAqK31xU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pj1qgq6KDrvzWtZMG3tVTVWfq4M5QQXQgnzNRSkbo15E3MsUTERiswZ3NUniJY3k2g9YBH2aiYmoAMdjYBtSVon",
  "key1": "5RjD9p5n9N4GBHGoTwRexMfrtdwmx5koRLzULgd6dD8gMhFvovnSB5Zbn573TV3LC1E8CgYfVsNjUkNPg1sd3uQR",
  "key2": "2VTnTYQquTwRSVEYaQW8yNHvTJ6xAf8JV7pzcxJYDNjBXjXMKPah9cr1mdZR92A46mZbLGXFmyL1MYcf2jwAv3Yv",
  "key3": "5RHdZDiNXrPnpqw9LwRoQ8KfZmKwRk28iVxxGy5KQET92gB3BUuMu7wMC5cGqKcomuvWbZpEvmUcpDhGgGYCSKHk",
  "key4": "49Mxi9NAKChdUY2x79gWTb99WYagp3uAZW5uyLCKCLtYPZUATGMgkVX6aqUFWfJkDLpdWeeAdbXdJX4HYG7n8PH4",
  "key5": "4DdbXckKCUzucjNipVT7H9g7CkrsxUjsY1jCYZ9WTmrimZ6Hq3Z9wvgFJDpPg1qRSz5JhVfyH7HKhKmjdQaGZMi3",
  "key6": "47yFk9tRCiXd1XbjvkYkfuoiiuL9HoqoWHWtE8t1FcVWG7gzpGLMspwoXQcfSS5DM4ZMyyHjpWqP9yuUwjqHFKW4",
  "key7": "TtPp7A1PutuwH4BKbLHyEvMchGDZYd7JmT6P6G7vjphuBeabe2tx7WerRADBiCwsWJUytj2nAa1BJ6yvGBiYh4r",
  "key8": "5rY3qGTQK1sEdvf4qgREB3uAUhdYQd6AAn1mVNh9sy8tugvo33jVHTZ3Kut8owkssSoKksGLR9DiPAkQV5EkUTQR",
  "key9": "5eZ73kHAqsu2EpT1yprPVPguzoSzgkPGc6DUx29ydjAHmLuS8NbonHwermBgwhyNAHF14AqN5krYkvCbZwbrujBr",
  "key10": "2W4hu4KmP3awv6PWzziZ9xF6LJn4CCzZ2AWqgnwmFtnNkWtn61nvkXoGFFDzdwman52VswJ7PAwDcjgAMRXJ2pBR",
  "key11": "5o3UxVyEHLsCGJeWiZazKghtuDUWH9jTVnPyGjq3hQETgt155sDZ8LYV8ov5URwgLZcFZ5muZCXuo9FDymTckhJy",
  "key12": "2dWMLXXdNnnbpaS5nwyA4ddRmT3hHRHcfxmFdSZ9Gt5Ep8EGXNtJkLNwnkSTfH2ZRmSThHoJhBkfok1HNfH67cNR",
  "key13": "3WL7k38K9yRKvcRSKZWW3Ewve1DTFbnawBagUa9iLevgCSEnZYp6Bt6CsDK1p85LFBFvhmAAxHKsQBuXmYGdZWy6",
  "key14": "3aTarHQWzJVpNHHxhVhkzXo5VkFEaigFCeUqCXqzFdtztGYk2p2u8Xgz6HuGKXjJ1RZ9gswPMr1GhEwfeKoAGsrz",
  "key15": "5ftgXGYfbufF9WwzSKC7H8v2YawDP4SCoHp6wgkYe7uAzKApALn3WjweemZ1L3yzPWW45aK1GzjbrXtUz7j1J6yt",
  "key16": "4JJYfkEkxRjMooibKTWzWkw26QzcaZTFj5RJyNuXkPXt8Yp3wo6dUZcKtQYknBQPjbJ7M3simuC6AbWJje9Ekus1",
  "key17": "3V1p6z4tFHucDkeeXvAjb7jVj5ihwQpK5e3cUhhKMrc91zBkXm2SKErnGTCiP4S126uKSQCfCej3u8YtFc69QybY",
  "key18": "4YqCHsaTQhT5Xognq9ctLrqkWa2NQFMWfZuFM2oZa6MQjYfYht1XhC8qJstopjHzSZRTuAQt8C5Xt8Bkx7r1qpW6",
  "key19": "2GCTZCstoSi7K98dFv48PtM2wjhomjcUvZAY4SbNADCRC45UZep5jobHRNrzkJNjpDrwpbGWeiquFVBnu7aRfDC3",
  "key20": "54YSpkeRKpcgomDPogXedEA14vZ53SXjXuvcMTNg3sE36HHKs8BLr2aKqWJy5G2tCfEtkn7Gv3hkM6Y9zrVConS6",
  "key21": "2R4x3fRvSPgUu3Zaozc8sFubNhwi9Xc3U4VtaAxJj8pvbR4wLA6w6CJVHdkCDXNRdzRQycF8mus4EUtDLaQzr8yw",
  "key22": "WhCab2K5r3BrgkjxcLyAdZdd4sftCzrV4b2RmyNmgeVxUUdRXjR1gSv5x1H3312KEqG313h3z7sTB3EA2sYssjh",
  "key23": "4DKdmErRZ9JRc3dVuXMdF99gdt32finiEHXaNVVDQ3EK4J5BZ8E73skvTCJEzGAdkxBRiQrvaLEtctrF2bewESjt",
  "key24": "4E4aeZHAjZiwafppYa7f51yMDnhyEpT187XGW4SMaTcQpAgbRwgBqb9tCC3YLUNn8p5LQG6wPD6ynTTp7TPg8mk8",
  "key25": "59epSTNSz9ypk8m2csk4xtqTzAw9yD8PwB6iRmcNUACoxnP5UUTdDvpV4AFb2YSV9JG81FCoPHbb95BDxC6VxDRL",
  "key26": "5zhQHomf2JsVBrKSvgTDLz7hP7P6JrX6JLHLuq8SLuFuQSmj2QUzs52rFqK7MB71PKQATm5pJTDA4sxav9oBCb8n",
  "key27": "2Ch4hVw3jqCrpFFYYATDTRaG4RQ5Wq9kymFtEggYPbqWxwVU9Yq6qwZoQYiexbCVJfryhW518NL8C2MtPEiy7oxo"
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
