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
    "JNXF1yPh24v83bpc1bjW6DzaNhjTaWeCxwKUoaSD6JHKNBXffUKnY5mZUjwV8p3p5ESFDUbeYbo2sv5oWX9Ryk3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HM49UkPUsse2EiZfLadGwieL5hRbS4gwFHcJJnKZuWtwLwVoR5KHgY2Kz7N89nnH74nUTdBMU3ta3sV9NHqGCtq",
  "key1": "3Tz3Cy8zAxBcfVCxmQkRsYzw1DcjqKLmpoDproCeJS1TZ4CuX8BXcSMLAsyYbcRqWRsuk5ed7jT9bhVc9jfBiicN",
  "key2": "cMHTKbC68oVkqV1tXwPXvqQaf7zz1XZSNeuqa8YcoDuJnUGMepdkc4CE1B6aPXCjP1W2JqKga62pWsWdBNFSCVS",
  "key3": "2Go1jtntiP5kSFyayyhXLfBgMDCxUqFSvfbryYeh3ZLXQmJVWhN4h5uLBy3bXU5ea1BktKFCAptit8GfzQz7jsWp",
  "key4": "4o6dNaEbdftxdFpoPnR9cWfgKBkM9u6KV1gpZ8DDN2858QbMSmwVHor93HfnwmJQkfxUZxCCkwCrWdLA6toYe5PY",
  "key5": "4j83TAbtkrSTwRNyiiJ3Qo2xVkXR5JFYYkMY8ZMa238U19gDhUxWhzm88pDfiJhhKo4ED2ZEM5irQBsNMP6S6kNK",
  "key6": "4ojao6dTgY8EcWc7dHE1cgqLCQ63n1iWw7VfphmHffNPgkd7ioT8UHNUhmF46521vsnW9xdxPioc8canDqTZz6ZQ",
  "key7": "2X9AFCMvnr7LYMHDZsJB8Kb73zJo1qZqRmTw2NuPZkW9mZBHkMeQ9PKTwXWP7t3bTZMbu7Hk92Zu27sseciNaCxg",
  "key8": "YUTCSfV9cqDS6kYs7MGWKMVT659NvEfZ3MQ1cXBi3Ec7CVc9sxYgGcUrJiwoCbHBK4uBYXAaTQMMee5HZfGWoFF",
  "key9": "2zJYtXP3qtXbdKKYqNEy7sANbTBA856PMLmPgCKhhhawiW3gbKDVcTrVXGcW4jd4nofrVb9EqeAU6ouwLTFGasSc",
  "key10": "2ho2dULNW8NyhMbNgAhVbXzFwfhE1S4DZzGWUhbx2wNy1xy12XeLD8MQhWP8mgEHvrX8NPLSwtMkQX8UnBvvR8pJ",
  "key11": "3Gajih9L5bNg2SGY2ksfNZqH6XMEMSnRw7p1F73sX61EFAjtQRsBEmM7RJpfdZDXjLaYBDqHsFfhEqog9hg5R9rK",
  "key12": "5VaYuEkSrbHb7u7wSMe6PHU2KB2YYKZ7L8UDwxvY2gf6N3b36dwkdVRz2gnZw9y43nZpShJdNhs2h9VjTHDixPea",
  "key13": "5p33d7sBacuuM8J3NegeNrEfr7g8GdKTL4aFfffbk1LQpfQwKvA27SXn15jMQVJPVVUZragcruRXB2b44hqpCWNs",
  "key14": "4YJU6dMxaoLdm6RS7moQsMwcTgQM7pToepWkRWjad3Zgsm7db2uVqz9vReLf8f7e8VdFerDzHa2dU3zgX9neJqoj",
  "key15": "2juRvvZmUHSzDUEZM8a7jdKuTkbXHio4tWf1wxpaMD1dtdt75mkfd6MyVczXApuu5p9XLG45y3nMp9sdepm6ytE",
  "key16": "imZ7CH32VZjsRvZ3iqKLGknFoaApR9D3y32WDA6intwvUigQHy4VQMqLzEvRxCMLmZiHXR9F8ePwaCk2ViL12jW",
  "key17": "2tKwa3UphZs85Xmn7RPdVHT2arsmmyC2ikLMn1hdYfAHVpHgT4J3fREWh6UhNTHbEnVLueRUPxarEBLb6pFoprxR",
  "key18": "5r6uTXXFbDxR7L5Cicmnm9ygNzqmYXNaC9uXqzQVWtAVyiuGAGMhZLSXNXN8RAnwr6DxQMK4xm9R4njKPQiZPGZ7",
  "key19": "3yWDaKbV3FEJpEGmCZEcxsTWyDEjE1bX4ZKta9aYx6RvhVLyyiomNS2tvRE3AeVPTnRkat3QrMaBSFGASXQ9buCf",
  "key20": "1ZsD8yALHwAr2N3BKT9vLvLvKr723wecdeuLh6Da68jjSiMhRiLJex8FGgGTuyKPPhMFgZGXc7KwjS3yfh1y9sa",
  "key21": "TaJ72FSTaERWKTCbrrUgcQY6t5ZboPhDmK66afXzRo8SAGdA1o4XFriouvqKpH7BnUW5j1wz85DsFLKt9ixUer4",
  "key22": "5eUzXp2qAyobsseYbqCyXMsJHK7FfqD35iJxD3yRV3JRPqHfik4DnVTkNp9Qkc6xsxZidJ2sQTQ5Ker63XgxzoMY",
  "key23": "28v1zmb43vu1Vs8uPt2pWpSe5sE6FrBqPJbGZSHf8WPZ96xLivYCkUFp3KJf542bR9BAqzaqCNyr7nTb25A9ForG",
  "key24": "53ZZ8m8ezM5ymYWS3WpE2Cn8gXBimGmQWPmYGiPEwWyzYFgkN6J5TvDqBaF8KVEqSCk7EjMRqn2bj6YRDwA1FwHR",
  "key25": "22Suy4LXSCjZ2RoTkMUHpwM5Bup2kb4wWU9JTQ1G5gkN9ktgjUp6mgNEiRe4jX2QRWyxyyecvtgNwJov39KWFKdD",
  "key26": "5ZyqazhaGWfHPPXAs1tz4tL2uWUyFXJr4Aurx5PbeHyG9mHMG3AtTzxosJV1u8JZG2DhiXwSho8orrZdNsFgLMNy",
  "key27": "2gvkBfUeMqmBcmnnrMftDa5YjonZ3subAk6CLaFx5SjJzs1vMUExKssEPQ5cieFqyAHrSXQ888HnUVJsTMtnimHm",
  "key28": "5Y2skCS2NetBbGvtunVc5A6XHGQndabck68jSM7Q8svUMzY5n5F6BJCRE4MQJ3Ym6zE2L7MJjBehLpWXN7VWazbo",
  "key29": "5uQhQG9Umt57Q5H6T1Fq9NNqRF1jcv2DCPKPEH3fXhKpySTvtLpNcZJ3d5gpa9JPrFfSuvPzyd9BdWyBK8F8YHC7"
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
