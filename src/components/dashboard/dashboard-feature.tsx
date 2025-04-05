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
    "2d3zXqry8gHjs767UiRGhKFGtNhRb83gEducgQgi1sGTzUNz7CJjJrHQVZrZ6ZhuukEg3eGz3HQiEzeGJmD83VyJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yJE4APCtNaM1zPWsn5xw6Nj8TBByG4Wn8ZpbMaFWZPy8saiWBVdwmoMSeYw7nwH2uSWHhhVaE4AMJxLu9NeK5Yv",
  "key1": "38qE5zWxAuv2d6mMbK669a9VY33EKf7Lqy3bsunyzZjucgo56HHpcsUhRsNNGbApyKCYZ1WEHmkb1TabeLLdqFUa",
  "key2": "5ziqU4JVcqF6MRguMhMrPQ7UARuLTSCxzmhgjtz71M4th9cT4zaENsKKVmc6u2AeyK3CtbqojtRLX2FndjiNdYz4",
  "key3": "uNexSV4B42D8Gn9Xo4NDq34h9dBoHuKKkv6HxURpzvNEMF479kog6j46t58vjp4PnuUXzWtnhFZzPnP2Myttxk2",
  "key4": "5peUQNwqp6WyqzjBcMF6A2mxpoXuSE3iKeMUvoYL5pUBuzyqLKq7zKc5T8rTUBemW7djSD6TFvQMdk6nSvsXswSY",
  "key5": "422ZfviwEdq2ky3pcgag75zUs5XYuHQaL3paTUgTpJV8iWuHNb2yfN9inkgaws2cTSjYWezP4PAMruqmqyykvkPX",
  "key6": "3njB33z4S6x3gup4x1nU2yKZAfjwEwYFWX3DyJ19SnfSAB2VmpZayTKWS8kLhRdR9cCf4QiEqmGpTn3pzufsYhCH",
  "key7": "2XHihKdsXJ56hXohkCQKgA8oifBfx5SzkS5vNRaGTfiZHwgE1SUeLM6VJBUng7RRq4ZgT8UYDXWVeLF9CR4h2m1P",
  "key8": "3vq1nRw9YrihZwBM3theW7ZLqTb5vMxvinz1DYVYhaeaUMQoCZtB4M7ZCCDcK8VyDtsbc6kaHvXRNBxSvotMBN9v",
  "key9": "5CBzJxzXTmZf2BDMfGXKsaLYDWNfCiaC8Z5XiguNanas8YhJSbSDcJCRXQ5vFG76s7di2C7Nf81ZgUcdRJS9SCXa",
  "key10": "3pDtQRGvJhZ46G43MNL7gWtAo8Y2SXTqeNH1Kbbd2YnGiVQAG4phJyN5jYhoegjX8rPMPZTE6VPV11FcNAubKzdm",
  "key11": "4b8ffHvuAjwTHaZfhC4GWdYqWoiFTvACwbXE1uDYf7rBAbkikPZLCot22FP9YUrqcojMvXTJVQXvhqYZmsnJa5Th",
  "key12": "3xudCqPLtt6jBeNaShxJb5szS4JsBCkhqwoZNhW1eYsiHcY1r9PsGQ2aBFfcoPKjwswDdtwGNR96wRPD55tBcdL",
  "key13": "2fNfWGzEm45rezvKX9PC2GL9QfZSTUYARCxDGv5tNUqAX516RQh7VUowaK2RjHVsETSx5U5tS4v6dmMGyMMt6rcY",
  "key14": "2CS8ZRsTt3qC73ARGkvtaaiSVmkVXMjr7WqmLE6euavJSj2eP2EjzWVpsYBfJczW5BQgEJDWmGUrxYPb1esrfS5X",
  "key15": "4ds1y6DUmg6vtqMcR5c18BVPBmkLHBo4nD7RKYnUxqqM58TiAx3e7393RRc3dXLTEXJazsvXbYhyRA73fFuQ96m1",
  "key16": "5nM1KXMm8sT2cp5U5sqv6dAPjZQwYuRXutP4ze8mGoBbUwbEq3W23C5xFooHFGNCAHGu7MNvEnWdVGHZJuRwsviP",
  "key17": "CEQ6i1txKxDzaNki1tNL36uhtVjL5teEEobKoP4vziE6u947BajWxPEoRjw3ugc1GYJU7NWMfDMm88bBazaqxNQ",
  "key18": "3ChVG8XayUAcGuMAJENnZQURYJXhjSKdfPAZcRg5CwPwC575McF6caSSDjWRwMpSrm6BUj3vWsLKba9WpPhzhy29",
  "key19": "TqaeiRaCbpXPbXf4pHTWWfJq1QT1nHR5MEnajf7jjPYdVdT5Rwu2tj6nHQL8C6UtT14CwRU5exAsB2at4icJgvM",
  "key20": "4GW4jNtqKUNwa7KRh2bWKc66mTUrJDEGrE47HB39QW633PQ8VdApW2BFoMCYE2TGvcQro53XqQTvvoz593Gv1yKT",
  "key21": "ToFLaBenrUbN4Z7AZ6C71Z7nELanp1Bb3hbKLFswc3shGPq7FK4LLAJFhYKJ5gD59rbEQ1VAZoQ5cCsieXEt9fA",
  "key22": "Ad3eZJoEqpQxrQcmUyx37p1aZUde6AeQKaSudyogMCzg9WBtom43ccLRXihKWYcg9SBX19zuBqL5RLFAZttCQnM",
  "key23": "3ZvSLwNymNVFuAS1UqMfGjfQdpTb194cN1zpjnb8aWLussz7ZfS1ZeQqPzjC4wRoxRQaVCWwKMi342m6ZJtZvUsN",
  "key24": "5HhM7d8yZhjbgbdSV3f7wWtuMjHcTJKvczHzNSugci8d8gyQNkxRi1yig5ou2JaB5z4P5tCbdGrXVRRLtHwsEJBg",
  "key25": "3BJS7vn4UmZwZCHnduH4TJqPGUq79eh11bb5fNss7McCtA7vKyXNGgNQKTdgrkHVX5NSQWtsTfxNCNYRFFodcBYW",
  "key26": "2aDneZJYdFPWKUuZnXYoKCqNekwYDLm81M6EwjgXu6cCq5RtP9ovuVcMGfcXd35fdzUtbmcjXSMRpze6fVsKj1pP",
  "key27": "5g5fjctD4Nqunv9mEA6XT5ieFrC9RFDjf8FfEEB3GnxARme2vosRwj9AL3QcMYy9PCCLXPiqRfswSteKTRi7Vsw8",
  "key28": "2n6CZaKRnhyGApTAWrgU2yPPz8Humx1rwGurCLTQatUyCEtmdB3wmGtAfFm2THJtToXwM4c88WD9XhGkdb6qa4Gf",
  "key29": "4uZ7NUwZTf3dF3NbsYEZdzehJQK7VZvrSrTrNJ7BQAhm2nWLGsP4QDSywNnEUD37AwSxjN2uAGy6cMNzCGDqEGAe",
  "key30": "45KxKMspwxJgwsPBb8HuGckk6uRQaFEdAyHS5NYBT9RRFCWayuYUqK6APrkv4vzjpUxSo6irdteqvoVEZeBuFZSf",
  "key31": "2uFxLyT89rmj9WLvhL5CTVSFrKLfCNjLofesMXdrTbnQbJqsBqrwTCWdJHaqRzGj9vLjpy8PRsVHEGG5UmLkzwgB",
  "key32": "5nDuNJAFffxV4UGUKwQaVHT2y5N5NPz4zxzVbivKjvTUMqwteUUWBEdiPjxzPUCTkvaibjdTzbxyRQSUqg8SaPHM",
  "key33": "2F4FRhd3Zz496UJo1mWDR6XfEmQb53M5PdQBYUCypBuRqVBopPPji8E93G17Skj7KHmR6KiFRsv4jvTDF7RU1Cog",
  "key34": "54NYeUYAU3TAvNWVQKNFiAbcjDGs1LMnN9Bs5mkKr5p8BXJ2fy7i95pPcNzT7Dcs9FfUjvShreWk92xhv9M4rnas",
  "key35": "5hDfu1e3MEokv3yE6ady1a7pB6u3EpFxb7Ta9huXe1eMdGgudVwwHjK6GTCaF8kkCMqXj9zHVGNiCUvKufyzmWiJ",
  "key36": "37Fk5LPQXANKFXQoeMRK93JbwiCVbpV3kK82LKoqNppJrf56oMeuBCLAopcioPMaCdkE5HsNTkBjUxbC7SP29of",
  "key37": "44AXLyGY58LH9j8K1eyZFUL2wikmLw7M1raaG51G4Dg67QkJAbsgxViqExFqrnZMgGpSVbNcmfzkueXTdJ2KEM9h",
  "key38": "7D6ZnsAXV7Prup1dtS3s2oGK3hLFHvRhJjLbg1jvhPcUqdyBxrndqNGnZ5J3mR6we46n5aiJkAwscjZdf4FHsCi"
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
