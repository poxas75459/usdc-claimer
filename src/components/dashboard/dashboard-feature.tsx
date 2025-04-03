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
    "rpYw94taSadhoVmYdr1i9Fg7jesKKLqWyruUUnWUZAQjeUGqtKGJ9kWTL9FuWteNSqukccj5PSkJu1izF38joUB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JBiA9K4pLaAMryYC8Ub7ppQnr9a2fP4TM3XNkHeJyxMR3YTqcTNfZ1BbdmMmanrVNTQ3vmww6qEAzEEbvDo5wqq",
  "key1": "8fGNdUrm8zLgGNCAvuejicWft9DwD2mxs15Fqguwyw2CkKj9rKC6V3ExANqxhMN3BfUVvtSJb2Z1MLb4QyCYdF7",
  "key2": "48S5oq9hEV7fjW8GM3ZPX1pBGzbrrEvaM4ALmmuxm4a15fGo13m7QvfyRJ41yWxwckaXaxhyiJywg6byGN6LpG8P",
  "key3": "2UCZZEWcMfPCCL4v8S7NszJvXthv5eR59JRnp2SNarnvKRd6uDJsivguwNzdiqeE9ahhFRm8ZtEp2cvtC5fRFm3p",
  "key4": "rW57KBjDMp4Ht2nr28hhQeZSo59js7dw5StTU87gR7Mg9Jy5ZvCjxdZwsZiDL9zc9ugT3GBJHPn8LQALiFxuXic",
  "key5": "rgYMWh7WF7119p9cb7tsEhsgUUfnLPCveZbqqndsjB6uzuQ7YAGuqUuUHHW3oCvRDHPqa9isgLo2SdpYHXxiND6",
  "key6": "45VQ5aFLJWv1s1HrPQXmx6tRh7rPSjxYMs4ww8zobPDYbfUsWb4GPADoYMUgWPq7cmvs56JULE7msXBXQ4SKA45F",
  "key7": "5xzEEZ5AZAWwrLt3YyYeG9kBkvJv4Ava6ZQfPs7iMExHQxGmes8QhJu6zZehPAGQvYvZpiiqKxdnmJBVLhe5Qx5A",
  "key8": "4gTQqAKoshaXJQipTYsTSByxX4pweGSkvnGehXWw4v8gdbvEGtyk7s13iR3ZZz2CsBPnLV1titYC8aXajeQe295S",
  "key9": "w81vFTCxjuRpyFAcHvQKqRH8TuJTuG1KBpPE2bQgE7768LJ5xb4GM1N9oD9Lsuo7rbMfZ1oQXyb75DATKk2pK6n",
  "key10": "GxVdb6ZZyFFroV8ZP1nwkrWHy8i4fsj2xSH5YYcxqh5ms7EBVQhXro6Y3bJxvLn4M8pzD7CXV6z8C9eXeBLzYZj",
  "key11": "47BesawLmuZw49axFw5PhXbfs6z4FZFnZpvsWM6XJtBauTWAbG1xzWYYeTHZuKCf2JrshS3ha5bWBt1dsuX5qZSs",
  "key12": "2SAht6FghSzV3o5FvZ4g8dbvevGpWvDYDwfgsAvC7yc5UZ61Tv9KkCEjU3tzgREks3F8Kha5Rtfy3uCxcecFfQP3",
  "key13": "4gJhU34p7mSAEjTYXtKn8548TmmGg7NNNSTrTEpu7G2cDUDai8CKSjVCPPw4p4yjxvqCcqhWPnYcScu8Cy3eaTAh",
  "key14": "5GpsAu5Jte4LHpAQPP2fLE64pv6aPGv8EeaZMzitBBYHwBd7MfSBBPmKPywfL34QPaStfCtjSji67WP7F5N1vBNT",
  "key15": "4AHG7xPvxoqZRsXwjpLCaVzmRcES48JRPRboG6ZD5fZU9XVorZT1Deb7waGStQMQSeffA87Auu5ad6Z1WKf3PXjr",
  "key16": "4YCM8b4vNTJtPUUT1NXtdYruRYUPP5B3nByii43jfzTjqZ6SrXNpuHe1JCWQuuXTP9xeTQdFjgq8o6V348pnW6ca",
  "key17": "ndTp9rzKZV3ZuJptbnWMWs3fB2X6bfK7WUhJFW25vNQetMxfZjuky4beycxh5Pm9fRVSegtb6E9HgVv91CtYBky",
  "key18": "3naZc7PjibqXLVQqTJbGh5CEhcoRiF5ThvwHGHczzqju8K6LvqEuPxprn81aqKsKxqfPKZeeLmMxELQ1AS4E4NeY",
  "key19": "4yJSynHLPYNo9th9NkMcP7tH7XiCpFBYDahbi2GK8xnezUtDn9bF3zqZSgskorAF3WjM1onGKHFkT4F4eih5DYeB",
  "key20": "5p5XFf6meecc4ypRf2SRTYcCt1YkFSnefFspN9a16xbALAemKxTquPrykZyXKBjC46pah2WuQnoh8eEU7g1aqAqA",
  "key21": "2z6BLwP3feKC4ighGESUxjK2WdepeXcXuSVjCoTgpeEMUwqKUbHFveWHVdP6wvLcGfuxz5DThKL3R6L15pPTZ6BZ",
  "key22": "29z8Vy4FdXyRNcsaDAkcDkFg9zWYRvo7rp4kB2b5AQdhjKsUT3oP8hPBfbutPHfMxP5FqeZgrHztQZdreRCDshJa",
  "key23": "56N79whiDmdK2B9R6DwkS1fdD1TUnbfULSSJ81FXhdEV8MApm32SRkqczyPFAY7UsTC3rwY4xPNphUPjjVsZJQjN",
  "key24": "4Q746c52SCwAj5EnKYnnWVLb32m4MyeShTVWBjbptSpJMBxMH7LSZ97bNrepSgk5ZccYyPwWAEqFEhrDShExpnn6",
  "key25": "KLaL6o44SeBEX33UQ75VBnWouU6QkeuNn9HD1JS3ETAf3FipUa6MqqBUhktgeFnQAjWRXZo7JWzDUkDjazfoD3P",
  "key26": "3CF7bxrqhTN7D1RgdKRLFDceHJUPjrq2C6x3sgiZrg8L3Ft7stAzYNpMfgMhDZoKQZ5VtkdnaFrB5kL7S8GffB3P",
  "key27": "65odexqVJAq8n6v4NVncUB9ZyMQEnQrtypSbJUarHGkjYXF7j3QREJWwvH5d3vXpoEKLCk5GsWVyPaptrrAtxT25",
  "key28": "3EKyGAsjpQLsbdf1oVAZJQW1qfKg7k3avSYrKcLpw1FDJPGRW9yYGB1vMbUPszB8DUjbSN8q7Ta2shgc2R1rAfAd",
  "key29": "571iKr8XFgE5fDK7kUWiuxUj3WpMxa77hxmzPN1BkVRvo6V1avhXsgwYZRLbENex1RAy6jcu6A8JUqDG4vf6zQW2",
  "key30": "5Li86DbCHHvWeF1tPUwV9No4QhL7z7j2cEiJWUSFURyaWT472Kdz9C7dGWyEoengJ3p53gFEosQ1uYAy6CJSspy3",
  "key31": "4JaZ99inrYR7jnZMAd52Xvo4ZTDJ63CaxY23kaX4AUgUDYfKjS56K6oZ4adRfy7TcpgPL6udgvduQX57Ni7yVDp1"
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
