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
    "4redSAqZk2tHW5N6sath7p2ffsrYXptDeLss1oa3FZCo7V8PUfZr5LABzjsUJ8ctpHS4DAGyaKjPowgZN5vF2RAq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UuC8G64MsoWaqCeEgpunUKMFqg3jv5zYV9tN2d5mV3TAis6zDdhdFFaVBPdfhrfT7JAqSFLuZtoZdt4NroS65rB",
  "key1": "2aJNwXmpqrXxT7gSgsw86nLoyYGdrSRVC36XDQL7dt5E85PDbgrKef1R2qWwiwkzdQxvYX7mBe5MDwaVfPfhs3j8",
  "key2": "9Av6zNM7pxHHRc4hS5Q2bM8Unp58tiwd19B8A5HpBf9VvJgj4hbJXdD16N4z8GrmNFCh41VUBToqdoGzBaXtabS",
  "key3": "rQQwjZ7ZZxw1BWMYn3yy7ejnaQ9q6sh5qNxN2nSn8SvFdwo7VNtzaPtJBy9ghEySSBQMAZ44ZThBWeRBE78GLyF",
  "key4": "3S3Spz5qpygscVizL8aCp72eUe3hg6s7yUxDvmdqW6rphD9ZfqScs54VFibCmP5whoJPDjVnNt8GV356vPTNoJx5",
  "key5": "5LhWCbkvYmFPSEQodK36Cbv4WBDJCAwu74bex8xEBRG2LQstMsnHem4yH4TNa59FjRJh55T6BMHMmzBzfauZvFAK",
  "key6": "3T8LG7imAatqCtotLX2R8xWk6kjCx1v88fxF9gF1VYCCs4aBv2zY41HHhc8wv2q2UNu8N36iAq9tKSxUU4KW6CoG",
  "key7": "4c1njFKUibRP5R4zGDodGPXwTqaSLy1Mo49wGr7f5HGLSCyzEFzZtx7LJAyZicehfCDLFsmHAu7VDxjN3ZBGxSSe",
  "key8": "eZgroR8v9f36RoATfCLHexuDaP756JvNJh8ELQUVX316YKueU9vaWu8cgejzaeEEN511BvkXhD6Li8BJzpPMaNQ",
  "key9": "4MAopAkytp6QWCf4XKN742s3eWY4zU1k6wPe9UuAE4AJJwH45vza3Hh9MQEF3M2VERW2mCJnazzZMHGtF5mo6ADw",
  "key10": "4koWm3ZUEeM4ngsTLEetyXGTUMc64i6Ls46vdL9kgYnTfE6j88UzqbackzSnGC9E6YQzQevvnfGDf31qT45LQt9H",
  "key11": "6HXWGFXaFSBNzoBrXPZ3Xb774o9yASs1MDBhr4GiqiA9zakfktxq54iTjhj1f48P5Ujuw6gQFo6Eb7GgqNv1SX8",
  "key12": "vizt71iroDTZw4bteB6myL2b6bz8D2MeCGt9w1JGcn6CLtWvWJjYm5yU8ob41x3TcA1MDzbgPinGHrSAJXdSFaT",
  "key13": "4azqkb2dcKDitEK84fomexWS24roVMAhfMddtvg9mijzJdDQtGsY1h2FFSYyLgb8qqEuBywm6fQhZuL3LNRC1ELT",
  "key14": "98x8Lwv243JKum8sHTGdvmaoAALZ63TK4gza2Y4qnuQWRKGkghhaudAtaxeUJnzwJ1tc92LpnmsnTNt8nTpigHR",
  "key15": "3WnCzGUFnDqZPg4q5bJ8gaFYyD8QRoWZFCwRp3TmyY274erDW9vzzGzeb1Q4Mm1VfxKPC8PygKf8JmAdgbSDy9fE",
  "key16": "2PWenobbVd8YdTbHBDWFentN2MLxVxkett2EHXcfCt1EoppRCAdQVTMCdiqfKFKyr54vwQmfnnbydejhUiGB8njZ",
  "key17": "4iwXAP1Gsdr9LiaMHxs3JkqUrWfFxNNXAx34d6vTAWLKhw72ATwYGDQThe25uxaV57JKgTBHuVpeQTbs5aCkSqot",
  "key18": "558tXQoHzAer3ZQYoPrzjzVocJG6Me2vcsChj47dkz4jfNV6B5HiZgesWBLKnT5iK1GrkrpcDWNx7NUEejMe5mNH",
  "key19": "5xVS4kmD4aTxhFvf9dtAp3HSvxHsJ5SHy5DQEkFezvRG4ZQi25jKzPuUPEg9cX93GYB7JQkXp7mqDbwWWX1MfUGM",
  "key20": "5TyWPxqmQVJfB2LsNz3WwBc7i9ASvZmdP1fDGoWsNEycna9nPQVca8DiWdKu1amxBYwHEiNHnxt1qVvcJ3MFdprV",
  "key21": "57ZqwwWBrNn3pBBmCdioGEtJKCoU3WUr5g4zhj4yqDEWUYoajry9to7ZybfqWo9t22P3EqawNtp5BizAX2WbVAWQ",
  "key22": "5hARTvsEarNwfTsbjHS38yVQJphx5RRz9jwdCnLkHU7p6QFnpSQmLonCUrQrkt7AxJX6XR236VeBnzqef2wZhW1u",
  "key23": "d1PKwPpnDwUPvCfN5kX5J6NS6j49EvY24AApVz9AbnP5KTbdxf3zWi9i2ouaoXx7CtYCtcMibHZ7wDo2fqemR5J",
  "key24": "4qPi9mcYh9NYreSf8y8dv5PFCh2C5iy7RgCJwQUvZyeN23ugVG4W1j1MTn2EzgpisLdmpXFbJVkfUFHYiG77pi7c",
  "key25": "4JUQwpfF7FQvvyUzNzti5iAqkno8TqzGzAy6WvCgybKCU2wugigemqYuswHbvCytoud38qYHA2uzKYf6ZHusvdPA",
  "key26": "2ZpX5RxGEqpye1MXt1AjU3GV4LBMMDHqB7U8W8vYtg5tYf9evkkNLMzkMc6z2LJb9Uy3NQJ7kMD2yZbU9HsPNooR",
  "key27": "3jinWBj7TwgcdZLRoQAWHwop1JWLuR6EaVg64FpaovjecWHnaULqVpoqSn4z1La7mUjGzkFQUX2BTypMgej48CH3",
  "key28": "57VUxuQgQJLLQpzeHvYQy19VDFsVj291XHxLKTvhfzuoBxA55xndGKcJmddWRMERUm87LBcBfm7qWCgNp4GRimB8",
  "key29": "37NJJJhtY1YNxjiaHFawBKbCdUvBPe7sRqscpZHu2KWmQTZucXmmidaUjm51fPqsU2Qa5HyuHzZ14vAAgkEZK1Ev",
  "key30": "5E4fMAzGyi3xubFypUh547KRXM3GekK5mPmqWjWBEQqPqoo2nFPaGbJMqX8iyMu3h3CdTxC2uQ5r2AXPGWv2gep2",
  "key31": "2xDxd3SpGtQw9N8yWj3oMxsZeZ7zos4AxsHQcB7i3xJKuaz6qGH6mn7ezB8JWK7Sh8v3PbqV2wRSntyEqxXSpDsu",
  "key32": "4GUpiJEUWfoFgKqHPYZBvxJC6zmQuLwAJhddabSRWjEYwUfiuy4gsdXTnNrrY7BQn86rDYbMLEGcMZu6xpeMCoN1",
  "key33": "26gSM1Ej2r1QZXFkyPDu6pmHZQroNXeqty6zgD8Dz2f5QvX5vKxEUmBgL6DbVfcCB2pUdsLgQ6p1EjtMHyatVvqN",
  "key34": "3oRqPpW3oHYTwsniWqrQawvSkNRyza42TyYfGRHSqps9fGQSPyZomRpS8a1tfzi6U6yvvaoh5sYE2mjT9bd1Cb2m",
  "key35": "614ibBFU6X1CBahwxo5tBggiZFqQkpnd7BzZfq6BxmrC3fdwm5LPNSGepqToX2xBcW5u64R5HAd5YXWXBxadACXG"
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
