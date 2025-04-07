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
    "5aDMLMfXb8UyJXEFykG73ZB885pvcjGLNx9mdtmEZ29aTPzt3SkR7CF1X1RUBkdfgqBkPJHsc7jT9X1NbDCkCzkm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ch2jEz9fkoepCKZ45Amy24XgR9wdEvzStvDrsZZ2o2hdu4gm7cnHr4qakookNZVakLqARxTd6wG8z1Kw6v2FQLN",
  "key1": "ek2X8WJjU9gDt7HrF18scxjVqqHAGeGxz95t38zmbvbwUV9wxaW6mSrgQnhbdRfCZN2tV5iwyUubd6sc82jXsW8",
  "key2": "WR536jK9EoUgnqDtAD3YxHFKMTaVirb6MeL8cmnAaKB5YN3fvG2q8vLhAhfG2GDSsZVkeZZX7Mnqd7zDcqQuk5i",
  "key3": "5i8Z4g2FRC7hP5haCP9kEf77k65RWRtvauGV5qmsWJir59TF3DyJGTvHKBHEHy1FRsYh9VQtuQfcyVYcdmQ7FxGn",
  "key4": "53gzysCcjr7BHFwGKe8VLHBztATXNGzDwy83xjDZX6M3JaxHajiVrPx4Zu9rxFHq4W1FWkUfTKg5f2NRJjpPNztH",
  "key5": "7w2rCDLvzeLnCWmAsCZyEzPfEBD15sm7kWYmTrn3NcjZ1oVz95cHw7HqneTMduVJTTo6FwM8VdwWKvpbJ4oJvgo",
  "key6": "AtRzg2s4G6T1jnKQNRW8Kx1EMpyxCEaDzouvgdyZapooYt6NiZeT77cUs49FxD7d4iUMUK4Pn6jfRTfrTCGbNjJ",
  "key7": "zFJkJH4GWP1poP8jtby3icum8DQsaCY18LAnve6BNXfj2tEnNFvsQBfVZ97EBf7t3YqCSdDGLFPUQA6sfWZ7q2V",
  "key8": "2vc9jZU6ss27u5CtLQqq996tv8jdWPrf7tpeYhwZRWyP3mkPuEqvwL8paGfE3FPxZBQsDhQarb67Rg9RnAaMc6wC",
  "key9": "3EnN8DzR5ViwCYgCoSqHSPgmftGP2265DXyXoi6vcFWxdspc5F7cAeSKxKzgMxfVxrxxfcErDHjc91xdRKYUUuxP",
  "key10": "2LnitJt8rt4f7ETDfEqMgEF7Y1X4vFcTpxmTRX49XPYPWej82zKz1hAxmUP8aqyAjavVh7kw3rPNsE9wmTgMHg7s",
  "key11": "3NjaEhrVspNSaenx1DQdTMgZgkQtVhNJkytcxZT1772w7Fw1RJaeUoaAr6TCJiJheHoKi1L5sXC9QJsAWksnPy8g",
  "key12": "22cc3tBHBtiYNAg9ATaaAC5asR12fsF3N48JKik6T6CoxYbyi4r1sHnbtdGmXj8fQuQXNocrNJQuxJ4SZBKXm7W8",
  "key13": "4Mgk7JiEce98b4KSwHDNiE7uSLqRka5GvvtPp4u5cg3NbEe7t4NdLQPcDX6Sr1Fy4ZBpcr1fDZaZszha2uuEZJSi",
  "key14": "5iy5vs6x9KG7Bx3yGXgjUZXz9RPAFqSBaVnR1mK4HyqcMMHtUPaDrwL3qw5ZKUTTqNWbBfV6pgQhLmyJFkNoJbqe",
  "key15": "4Y2VMMjbbg81iNDtECZh4C84UdTMR8kqNUTGHxBpKWhpiJbMWdNNLXZwmJfnadiAKaPXhY6nRVkcE8k3PYQEofKh",
  "key16": "2GhWi3sf6JXCSPhfNQQAwcVt6SPdk725Mbocd1DY2fuCNuZj6iTYU1sA79oMcgAxBoyky6vKrDpGXhfW2ocrAbz8",
  "key17": "btyNzRWmY8UNYAa5KvkxXDQJSb5ohRchcGq9RzjQXFW7oLax7sEeZbkpAM3GcQqkzz2f7Q4qbWRVdqsM7VU6X5z",
  "key18": "L9w6zYeAfUfDHbYViu51tevS31XouACY4aTHMNoi68saRw4SWuNMMrvtHbaRVhsNUqpsRHQbtCq8b9LofLDeHNg",
  "key19": "2YWT4x1AiiBWUYSPYS2CXoXJpiBhGzPrEQGnD9hzzT6TppbKN7Gb3tSPMaNCD3iapmqocR8daf7agQgkqkdsSvRt",
  "key20": "2yjtYWcaT3cQri5C8rAwH4owdWA3TxKKujwkVKKpKd8jphyikkyu8LcFuq4NEXNJuTD6h2yg3udoFBTQA1hJwnUT",
  "key21": "4TCr4RWdgbYryFho6b8iJqst5aLpQQc8PrXsytaH25YHecxGoNkyiXPJqy5idnraSPvD7XbefALngoD35Xs5Qw3S",
  "key22": "3QRNYw41HcrmPH6hQfrQJBLBbD5uForjxUt5qmz9nL5Kimsb7NZchvUs71Zief64tMHJimKvtcQhHQLgXfnrc3C6",
  "key23": "51aPh3nnT8UiPNHuLE6KP1NRpptgNZgduxdr8jUzM51J3nmpNT59YeKU5JmtTwcDB1nj3be14QyaajxwpQkX6Lah",
  "key24": "W7qnEZUhMywW1jbv5cpjrPMYJ93joTVXaM76CA1C2aCu1NmvnrcwXtHV9r1Z63E4gsKoaLvvCh2fZ57RdwPGQDY",
  "key25": "3xYh67cJheLncozfkTYcEkaytDenqHy8uN3qkPK355vGKYWLn7MNGjnQRQ1bGvxcRL6LgMK975U7vG9j2812o3HK"
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
