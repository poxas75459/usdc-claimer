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
    "5EjTLhaRdZwy8dyCR74DZtry3U6MeVC7D52VpULNgEEqTxgdUEdNKRTkfuj6Mo1VTWFAYXXmDq1r45ihYtEdk4CD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wYk4j6tbBKgDozap6mWT61E2134mGKDvRiVsPKfWSVjL8ZYYAFnNXkBpDCa48pqM1yLbe97VeLzXRTMyRoqaR3o",
  "key1": "4gQGP2EfMNn551gAw9svNPUqLEvpmdXSHRiDXLJNjLk4xbh2YSf2rPgELHGHHgzFVsawcnSmD8XXKAajjWo43N32",
  "key2": "7fRnrBWN5K9k6ddN58t1vurvUoejjDpHGKHSCG4xfaLiybvcr1zKn3rGboYfPSs3V18R78DSDDMAgDJGXzfmBS8",
  "key3": "4sUbsfzLK2yVL8FLWiWGeWsWR245Y1uyUyqSgbTrDLDoBqcYEVwQtQWSaAY7J2C2H3sZkvRnZmBM6rpxk48wzzqg",
  "key4": "3q9kfmQtR26KsVXA81iWQSYg92FZV6z2v3j48v1jXYKMUebX1bB3qFRHgQbsJx22CNzTgKeAum15YrtVKzVZQaBs",
  "key5": "KanuuLCgYMqffX68YZUrWbJ6iH2YknhCJVSmJjWNcTr2NcamA3qox9tS9yBV19uyP35LiLZcwFuXjtQZozoC31k",
  "key6": "3NASiZi7CktuEsHKJTUQmdXW3DiE7NTVjHmPFsBP9LvRRZdezjAA5BDaxS21ZzKdJrWAaCeWK1MQZcotmYAhEcje",
  "key7": "4rs8nn7fdHDiBndTv4ssPnA9PgjyaA4UBpWU7qRciposVrYotqpNbeyFBGjBy5JUcst3P3GcxtuMKfQdRTLkXCv1",
  "key8": "4TksUhL5Gr2GLoWXK8xASM8jydUPa8WRFiHRwzu7ocn4yGcSEsmA47CyebZd3oxVrcSDXRnDQga4QrS4M4V1CyUz",
  "key9": "N6aVhatR3a6khgPKbZR6pMzzTU41uzaenfSsVwq9V9qjpL7U8zgzjyHairZjJ39QFcFQmwrQPC1xwQb6wNYjnMS",
  "key10": "kmPDNSoWkd1SzgFvTAvwWFtXzYGUp9cQJ86w4h3QPxsVF71CXFYds5LyYzCmKLPVQr7Uu6EhjntgserJKWHCWX4",
  "key11": "3uhwHu8K6Vwe7zV9uM9KBjvJ8XR16ccPcnRhpJ3qbudy3c8fzoXfuMftuaw7QPtLzmT2jzD6eK5wwYEeQcwiBp61",
  "key12": "3rNdu4VwcRjt3Rd4oVmwwAnNVWXgtSirwGeuoQ5MkwDyZq4vV9fuMHj3d8FgZUFgvY7AgFyTgGwnczqVfG2frQmU",
  "key13": "4ouj1YErviskKQk59jkiEiNS87B8DdaBbcjtWBzigy1FYk5cA4zHWuGF4Rf5nHq82VjJbGMWdScXYXnVaDe1kqqD",
  "key14": "3GrzqXnWtnsoHS68VsKakdFj1mEL7A1kPn22jmYBPfqfBsd3AJp6rXhfhJRTj8ith9EEDC6ycGr8btTw9zwtMR72",
  "key15": "2iQkGyKgvf9WmfRkRrcuitM8YqQcnwatgCnRB1qf8T6z9trahkqLMqTbsUeTys8XbNpNERubXHBFrPfgVrR9Wgpw",
  "key16": "eX2dDHkUYXxFE7WNShVShA6T99Xd7bygDrnAfxy5ieHtjou4S3vtyJU6iMMA15tNu8JwrJkGqe4RvKmqDHkXS9M",
  "key17": "3XZFjH6QitNjMiPX4AwyZajAcqN2crR9jzHUYYQbEBHqBwtHsZcszqJgzxbUvSqyxx9FwnhuRJ2TSJHkU5nUeXjK",
  "key18": "5RjEkn4AB22z496HVQXjHm62wB2to17CQgeT548CwThn5Ky1zV29FCq579pwYaoUrSciHhjRAw86yH1dxCHK3249",
  "key19": "cjDJFGmoXc9pVRkaaBDkAiCybxe6sG5DMFfYFnzrp6SHBB961urKsJECZ1Z3NwtHE9bCzrvDoz5PhKec887uUYc",
  "key20": "5LNzDg4atAk9xUoCZJBthtar8DENzBWKiXiaNuJf9HjRwcJZ9q2gJoVpsso6kNpFaoYJyBhvZFWZPcqRLqa93rjL",
  "key21": "3zhzfCrZmySWrfaZz8QNcVMT6QiGkDUuhFUdBqfRzbxLUNYz97bQMVKECkeaTYHpkVFc7i6qZf2gngQPE9g69KSt",
  "key22": "61LEDUHqzN8yuFysSBkNJdYZyhpNbeJfNQRWDGsUkiHpBFg7CSo8CR7hNMqvMq5rUaoLYvxvnzjnbCLpZ4DQEjCC",
  "key23": "5WV2ZkfUb2TEoaA8zCuFpBJ2d5RmnZGkdBKrt191KLHufE4fByYniehLNeM8ZYURPdiJjWcdgzNS8uUrqN4fjBEJ",
  "key24": "4cjApDaEYheWPDs1JPVjWZEzoQ5muxH3FNPYjVn3v68hpQ1aVj1Jvu1PZeqsyuNMMYuXGXFiLou9c5WJAQDi928K",
  "key25": "3kMasFZK3udpRXk2VmXogVffnpEVwdHdA1GbHpJkk9FcgSqiiC5BDeBTYfQJ6g3VyaADgSWpHMXu2UYBH8PUNQRw",
  "key26": "3EMdUZsQtrow2i7XzeMNh7KCDfjsieoXZsihi1EE5sxL1og4PdxXGwrBnSG2JiEYEW7RRGpmprr6VuiGUgR5TLe4",
  "key27": "4yfUzK6jj4D6Eae3P4oQHxHT4UBH5gDFqJEEHH6fAr33DMUpjFW6nNfJjgA7mKo9LFLpHaaPnn96n3DTqGREfTDV",
  "key28": "snLwpzLwZj2U2HAW2vwb7HEUTSXHW2EDZKgfDgF8QwLh6KTg3Gm7JMVPkW9raScCorBv3s5LTFxSJBpsLDX6JMS",
  "key29": "udaEh32mrZKitn41bgphB4PgVFHwjzHbSjhd4QhcAgTN8eGtf2RZYJKoCYZstptrFCs2qunMyczR2oRELBSPXUz",
  "key30": "5zLFQBrceauc6sx5BrLwRZ7C7LjrS17zEL5h3JN8RPdkS7XifnSb8uYnGW6ncVRvzyKbUsY7Tz4VSRQ1Vhy1vQtm",
  "key31": "5TTrJAteJYCvjFYPZME81yFakEbhU74L3BKjPNFCVn7C79ASC4gPixtnTbQ4Yv7ckabd5sgvxQugkY3vqKEYdRxi",
  "key32": "4ADNfzJpvexXQ2cXW4Jmjb7irZ4vo6aUK1X87QrhsLz4xw33pEYfSuhrNoE1aUqXQEoeEAWgqXVsaWBQG69qRyTL",
  "key33": "5peL3ivYr2Vex1hCmF7Ayg6pa5KGRpsDRapT9ConmvHeK9kSdvpHf38fsUTiVrD5EvF3qs61CajbbEUtV7axjojr",
  "key34": "5zKGSV7X2shU3JaXfsVSeQBgEjUjg26ceCz2H9Y72Dq5DNk9vUDpfxpPEm8X28ACRUc4QMfrquZVnT8vAj92Gjs6",
  "key35": "5ZhkhX9qCwazkdkdtmpK3gzTNDH2oKv45u8xZFBRnTx9DkjhJJYWr3zxn9Lp1Zh4szWiu8CvC8scPmVtibdkMFwj",
  "key36": "5B8DBJkC16pPbfvh5DzTDUEpQYoUwuXqwMbDG1aDWuq9vMsgZj8FrvkiERVSQvR5382hCHpkkCcKn1fcpttfykF8",
  "key37": "5wce1BrcxZVDF9ZkkYqMHhnGHZFJsMUJTGZr5Ja8WzscFeBQJQ3RD4HA5SSx2rq6fQasQrQ5bE1Fnj6wsJKncJG3",
  "key38": "3uxzPzudfTFBZSmhvEVZfc4d5uwT3stbxaoAwmMkNARp9S7T4bZusBkbqjPJ2pJjHcuWimVA5osG8EdzW7YP8Upw",
  "key39": "5wYSdxAPcxv74FyG7naAtvXMw3qERJLB2M16hJv24dcVPD979mMWpFCfdFnwems9yqepbgRcUbg4UCuAQFUk8WHi",
  "key40": "2vhUi6vW27H8tzAZ33aRk4mWMPTR5YQXgJ7331VpFHR5SbmqRbPsMruMoh92bWuCGtsoSJvrfLqAgGDg14cVPupm",
  "key41": "uKwE99EcHn8JgBrkTM97be35cvYZKM2QmV6aqTXgsCJNXCPrx7jJhM14jcxkVXvUKE5ayoX2yXy5xqG7Z6PGZ88",
  "key42": "4MZcc12aUz5VaoEV5ykdraGPW78LFq5RyLVRP2hJT52aQsrrRJHejqRJuS7addZYPsUrP6FEYSxLHtZz59f7Kseq",
  "key43": "KZDwnbp6MXBemxeXpDEUEaLG6TreCgyv3UHLXhHkap9NqYtz9yjVX8ttkR3hmDXZJJuVsK41KRXTzXK3gE5i5xb",
  "key44": "3eSsqErFmUBcguk4SMmXeZnFkV6NWYUcqSck7VmWLavj97vBLYbvFfm3UHk4wgiNvnsnCoWmN5K2EAi7JXTi3m8J"
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
