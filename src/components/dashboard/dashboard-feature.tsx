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
    "4yXyGqCSF1nGHKmtEzakLpZTqmomNBBCRnn3rbdtmJxbDCNJERwsDzdzagkYevcpZX8vk1Ye4r8p3C7uyWCrk4an"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CFLVs99c228sWNUCTP8tomVo9T7ZjRHjdq4Ng6tC2R8bp4iLBEdci9EdvZVwbubUUwPE5BkHBdZFfu4URWhZxbG",
  "key1": "2Q1cduvEWEPph8bqwsy2Ua1g9Gpuqvpg2dbR12arJUqz8xZhNwWtDKynFwPdeFVVr9i15PgkXNkxs2Fow3QUfoVC",
  "key2": "3JweCqg3YYxdrYrDktkKUPmLvAGgQ74CQusW4M3go3ZYYwBXhxK4wnc25az8jngjJRntVKhjuu7U3EUBK3hbWjUS",
  "key3": "4Vff2DrRRtfZERKfzYVeAcvy7cQfm1w1WrTYhS7REAXa6FsfuWX5WTK7xRtqVpPJKKPBzzLCaox553ZqWvqo4ruk",
  "key4": "qNKfoD8BXrKi2zeA6F73Acq9X95Q4xYDkQw7fbPdP6CZPaBNbKASPVShT6aZgzGaT2unrJTuGn5qUjMk5HStrog",
  "key5": "56u4ywNe5F9FvY5DSSwdg6rgmRaBtzE28wV5D48NF247EaCmYe88DzhxH7KnygtiXj7NSfReVJB14FRTXm6e37E6",
  "key6": "3U6jrxJTMPVnWRh8U5QUmdfUz8FyUnUvNk1kuRs3Q4a4wa2k59GyYQFteQBXGsnhiLc8FmZSSxDTiCNApVWpNEGt",
  "key7": "5R9E9JZttpFa5CXXY1oXdyc4LeZspzn5euNhX4rK1acu1vHSRQZnw76Cp3F3NKb2QQwAnZf5ck38CNdPe3ipgh4d",
  "key8": "ELZ4FLg6ptvYQJqM27tntHzsxZEbrAKWtxbZzriuFmmvjieiK86BBSnB8qKu2qfbd6vusk411oXJV49cxiPefRM",
  "key9": "494hUcioRMrtquv7wnWpy7uzmrsqciRwSCP1ABV5LLUBAMMW9JWZ3CCJqEsEsgsatyit9xX8PtwT4rAu1VEybdZp",
  "key10": "5xGbaJrJE4UDG5t8V2oaSgM1XjnZXUDhU5MbAUY7EcJ261s2mWpABhQ6CpvGWzMRNh4dtUVh8pvJkysZoPybw1zj",
  "key11": "61etFQDD1Tifd3dS7ahNtVyrvhoaymjCHZXFrSVup7WWBefCeENkvMVrRcribRRMmHMEJSA7VUEdnBR5nrLkfQLq",
  "key12": "LFgopWJ5iE2yyapPaMsvvZ3zgcYxLthqKcE4gVJmRmeXAEL1aNwJpM6xNSn1xUZHPYjT5sQgjtHhVSdFtjAJj3r",
  "key13": "5RhDZkvg4frYeWauNE939S2R1tuGQqVXwHuvrxSKAmRBzaA2mKCZ499Hod7tLjS6KoU3AH3e6uMoxzvvFqnsxLmf",
  "key14": "3bopcZgWDTosHz6gdhp8NhBFq9fKod8tnmcJriKHYbzJLPrPfYiLoA1fks2nk6UXsLC6dose3PkRiBRpxitoyLnT",
  "key15": "3zTfUbR6SdKrctLSs7chYS2GkZw9neEhtZWdvSXE9BKrdmVdFnMVrGSn7ZuxLso8L7ZsdE8tNiub224Ty5azMDVh",
  "key16": "3pQTpoKjrSiEWpFbp8HjwmFKZNGbbAb5sGYE2XT9usrH99mu4d2MU9XCG2BaM4HTZXdwNvRHKeBzUNb5c99Bcq7a",
  "key17": "iWgnrtRGimGHUvJPBKdsS9n9CwPVu7GiaMxemZnzEb7pzZoJRTW4ExU2ejam471ezrGud3V8482z7WgHDQu3Aif",
  "key18": "CSNeJNKYBxecBcTepZ9j7nJtMuMpJFg31WDknHB8NJJXxvUx4hNcvuRn6JwpbKFjYuLSaoJVdud2zRqp9QchAaj",
  "key19": "5ekDnzBELJyr7YjQmaaPPGza8pQFh8SdQH5fe2Px2CZq7gEwMoiZjDyXHpBrAM4PaNfbRgXjpfiqN5ZBNiSe9PiS",
  "key20": "5kPELst9hVXexHMP2vAD796FKwoGXkWFLWcCGj82qB6LyTcUV4fECjkhbuW7vHqdZ1UEssUv4hWPZP7wZxdMR3Vg",
  "key21": "61gNT1Y5ZMsbPzB8TZ8iMLnSxEm4SDugR56gCsWnnTWbrMuqnrNQPqicoYZfeAcSiKX9ZySCgCEtW5fzjRzGAK1Q",
  "key22": "28m8LtACMnF7aLLV8czZu6fk6gBayzuxq22SpibeGkdKbFP93QYF5Y3FWoaGVgn3CRTU2H9ySPkNAK3MqH5Fh927",
  "key23": "2Kp4C1ZGAaF5Nwc8KbsTjumb5JQH9CUD17pW8NgFYxZmkJpuB9drmusifhcM6JsVmbc7KzFxFWFQFAiE645ozJ8p",
  "key24": "22KNht8KxhqCRbMLh52mUWrwKpMxP1BH1J4GXSd2SKBHeaFjToer2wo7bB5sLgwWyKoVVtznuHGVwk6D5XqKt6Pz",
  "key25": "4o55zqdzD14pHWaEvvotadkmHRp3UpYUSg7QYf3G4FbS1netZDuyVzsMahyvWUpRPuQC6WqSgrANGFtNZG5FDXV9",
  "key26": "2bLxFWcWBMVg6Huob1KvNQyzTGhDx3FcsQSrGTZC5jRXTFte8sAqQSCZbuWNCUyVtGKjCPBRBmCdr7TgPgEBoWa7",
  "key27": "2rZKqnScw8etwDbjzizthcX2c8mxLrNMwvXCARxcLQGXtTfVHcuq3E2PtxyjL9kiHnmxRKEaGgfYsoAcrUmRHDSu",
  "key28": "5q8Ha8a5wR7tvorQkWt4JKXuNChNVYhZUPyNzNpEFPpiTQuvWaUvPQTKVP8SmcaqvStTSBJ6jrfGu5okoP7DmPAt",
  "key29": "2JhBD8C6bznWgZ7GRfqD4in7btcTGAxGHTeCBKAtuxnBTS7uwZpbfgmonEntj8WAg6CgtovQeHRhMs3y3sHC4Cit",
  "key30": "2Et6RA6Km51v8DXAvmGx7kzCevAHwhEQUsEQgD2sxxwHa8ZcsnLroaRWGKFZWJ1LFMZ2u47R7gD3iymicexp3re8",
  "key31": "3Ke6GNK7Xu2xj5hhqSM4WPBgc3LH9Mfo24Yqc5P3VWPqX23QGeFkUEQ98zZaqwBL31r3j7sNmWbA3R7KQhG8GrnN",
  "key32": "58rB9xtqQS3NvhxsRCQxYjKoDBBP2S2vfejkFhrFdRS1HBaXnQ5maDnKgGrZxM3JU8vtmHuTbYQ85chazYeUZAb8",
  "key33": "4wk6c3QKmxc4Sd9AKDDjtmh5TwhteM8Exz1mT3PJBzwAe75UaPsSfsbE14fciKJtpsLcnq6A5qyZX9jCmMnp5YSm",
  "key34": "2wwFVKiWKJfyoMgPhpQACeM8BP9kruvbQtVvT9PWWsUgNtwGLseZDypLeMNDgw4rWxhQ5c4NL7Su4mTr5Ltczgeu",
  "key35": "47VMnYZTx2XH3PKVCVDZizpB1p39PiAFKNY7jdogxAU9fsxwMxfHXdhPwU6uUZfE7H2QWfQNNcxprqWQtaZG3dr8",
  "key36": "59EjjD8g9huGeQeC1NB9Kzu2kgycGzDkxAio1GzP23jezXx3Y1FGCosws7fkQLtzNReYwJ4R6mMJ66RsJ4coATrz",
  "key37": "33q7HyTBdWkVoXRwBaKopNeJgGQxsBgZTMmHH6WF8AKBdMY5ZKxohgwWg4KKqPfvzaBMqcZ9gvTEShDNjaR4UhnP",
  "key38": "2Bt1FSbrky1GfWcu8FUHywWm6MBpm7ehsLeoUiTTTSpTNW7QJW1NL6F5d7oT3NEkMoPVqUQux1sX8EDbXLrUT5xb",
  "key39": "2vRBBVgMdM3GJin1D3EhFtcUkLs8fPUwSShJmaEoLEmtw6E3M68vjSRvV6j5jXR2ZgnrjSzsTq2sQhwwLTuTuZnN",
  "key40": "fcKMatbnZ5UavWkqn9GxKZ965VHzXVo5veWbYpZVa98DqCKQ5UNiZjumdoGvbMqVXsWm2j3q2CU5aRvEARArxG8"
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
