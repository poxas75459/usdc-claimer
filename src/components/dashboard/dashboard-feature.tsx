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
    "HM741WPDD9gHbuKUuUcyRuNGKAQWhXn9Jxu73WkR8bE2wpYPrNkkNddarWDCxHCrzwe1ZGFVuWv3SXo6aJSsQVT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DC8g7xZ4cGANKQwavsuVqjRraxhL4HJCY9HD7hmGaVRF1UjMgsuKojuQaW5enFhZvk3THBZFUkMkcRwrHV6X1X6",
  "key1": "2Gc3PXiaw1xujqxnk9X9h6YS7i6gJKtMZGRbeYtALCQ1Et2dPxUEC2FtwxN6PwYMKwyhWrJhtGNWNpYGQtcn73G2",
  "key2": "5bXvMgvtuN2j5ZBVhg2Xc7Xe6DLHtAHVnxtYR7avXWKfPVD2aAkZUhVXT4dpGPbRAr9vV5K5UppKgt4qcKhRZn36",
  "key3": "53CC5pD5Jcsk3tZbeH9czcGW88ShzaJRdccxUApzVhQiaCn7vWS2cBG3aeJomLCXVMbzjJcUCUE4w7tVBmN3jr3s",
  "key4": "5TqMnGa4aaYqGRDpbdpb9RXfrrVzwNsYX9yVT42P4pFJs7mukckEp8ZP5uDbHSaAb7v136923bi9Ke2T8tcvQR8q",
  "key5": "37zrvk9hw9EnCjxr11MfpJ6461RmT6nFe1TW8nXVFmZwGhmbmfcxCLsHUcXjXnfkLdDmECakoVJne48mBmjDDrcK",
  "key6": "5ME9ovmo9aXCbJDH8jrPnjYHYtdgBNe96PTGJRrQkFKbjBbVoBBLY97ZfcnEHvPsEn5qZueKCoVTfUQADJ3BtiG1",
  "key7": "MafC3uw7UyVLw5EXcNp3m2Apz5QYjjWqukA3rTQWJsqycq6JfdB5MQCUm3QknhwehszahJsCgWFVGs1p6MrAeay",
  "key8": "3nnvgormct74vZpBPsE2NUzkBrfiZnafFXspgPkJCqsVEWrS7Qsd63ovErYwLzEXmhqVWFEbmtBbmEtjkTY1KdvK",
  "key9": "2JCVtk4TvhJNBMYSdsxoeaPXrp7NXxFtHk9CJZHWYqx99bZ6BY3aafk8RCoj43JSLbQvsqyhKWdg8QqKtVZBPcmx",
  "key10": "2AVNCnCPpPip2aNAXrBZyyqRtM5169hEsPNycX1of364fcPqsTCAQofoMtx7WUy4LZamReiQa7Ra3wqKKNCrGah8",
  "key11": "aBmhFyppcgPdi3upaKrEUADzfaZy8ftyV24KHfUTbHfnepV8oTH41dwz7d4W9PWax4feZmHiFfPphx9bRqa5ZGY",
  "key12": "Voq6W54fMFRSxjUBhCjWC5YuTtC7zXrXU3DQ9PQLgRB7545j68D76AbxmsaZVvSH9ugCkPNE5TnHiKQQFAcX1dU",
  "key13": "2z2ZdytNk5zFCH9c2dZ4S3P9DpcoRHgFuZxqF1FZvXNDc2vqobwNYg5MdbKTLrFsJ8wBfek5LkMXwjj9uUY6Ac6h",
  "key14": "3EE2KQtps7XaSrkx39ZmeJhvgqqS7Dsr2F6J8B5aMr6xHF6XCPNca7B5sp62X2JYwsoPa9WnoM6CddkHGLyDhk2i",
  "key15": "2D7AGbiGtx28U2kYSFvyCnSa4Tr31uqJs5zrzFTW1Jd7oihus5UCchMWcLmyCiGT1tRn4jd71JUgaEQ1V4NYJR7P",
  "key16": "2fQLTumefymjFXj2R8f5dKQ12iDT8DvhtqoHxe3fhgMGahcwN81HMJSECD4qZ4HG4WVdjeaVcjEDt4G9BFyanJ7j",
  "key17": "5EUHi7gw5zqiiH5e9MHdXdbUbgfUvE2rbW1rH8pASVWBi3zMULpWs5pETfcru9cfpW4SqvYRUCeWVLWZnbjc1EnJ",
  "key18": "29QzjFv1YBfjCLCS5fa7W7nNUPMJo289F73Y8P29Xg7qjVvUk9omdEi52F2R9MKUveqUt97YY7VZYxGk4XqYf8T2",
  "key19": "mJeuiX26iUq9XtKv8gUPQHsHNegYkaKm5KLMrSi8zkENss9wqT3hEGiq6HBmmH2BP4DVr36CoucFmDXMj54QJxG",
  "key20": "xUcGMfj4771Q8nV8udYqaNQM72Yv5q8acNFodp2ECPMthuXj732preSMFV77W1NHG7dBbUZrJ4YSnz1LrGrJWzN",
  "key21": "39bPawcUEFJ4jYwAKMQpUiy3mycnHdzSTZuPriPGBs6nQUdBYVE5cbfxhZpbWtCEJMTSXZq2o5LQuuyNDjRVoiXk",
  "key22": "4c9LW8JKgXGhXoK9e1M1PjQwBjDjRyaRDF6uDsSLaYDCozL8VyHsqbTF69v8CRWyu5ZHizz2GJQFvtv3Azc1pD8Z",
  "key23": "58WiBWYxxJA62n6wFaf8WhkxLe8icJ2M1qZqjVFeD3mSH541bgoKGrRBrqP9S1g8AQYTTe4agMvzRPP4PzcXRGbV",
  "key24": "2b7ar4y5iLWBzAvHPWWaAzpoKtGk7rgaFwsnvs3bfTSKtcdZWEjHdWCCLkFFCyqGD2TU9GvnAAseHpdGGxTE2KDb",
  "key25": "5ifzQ6QHKHCQv55aZnauC7HKnV9YAC45Mu78ZcixiERjoLVejbxzywYj4poCFN5kZNDFA1NSV6M8FUVJQuXjmUAS",
  "key26": "4wZzEV3V865mN7ifK6trTzEZ9ZbwNAdx6Fto3Q86rX3rujywfSfMVrbu11fFiH5qHFxvo8pcCoVMfACXwDxPQQ1f",
  "key27": "2fvatqydgn1nnHugvsXHn6VRcLzMkqnxAChEw6K1QA8JaMrNPXh5vymLXUwHKTyMu8hGuErExjTxxMcpkeoMwBe9",
  "key28": "4TKmpnjiXeHcJMYWX6NXSGDGuAx1zoxSSKqbpT2vhfb7GYFNj8XZrr24PYft7obaUsRz49XURzZpyno5b2p6d9FH",
  "key29": "3qU2cCCWcyaA2ESbz1SzG9wVxfPsoiTpM7CzZGHQJ3EhxJiPVdU5Rrh1xFM9MuPjbiA2H3S8te4pXME64esG6N6s",
  "key30": "2LUpkg3b9Trr4RmEAGKCeUfg9FQW47mMPeaEhM65qZeG31svN9eShHzKjim2SvoQHVxVMhbu7p5DqTcn31UmMJva",
  "key31": "3YEff8mMKeqJHqsPV6wwXtpLacbD88L6gok6A8AFQdMeaG7AHn5Q9qo5DDSsXgcLJ775no2ZFJNF14HkoedGTr9d",
  "key32": "3c72vd7hnEQ3Jz8CZzXwGxazC8tFRy8WhGaXyDkCfFk9z2v5q1yaqL7XpWZjdNgsgHDE2D542aZHSr1rgzeKYHKx",
  "key33": "kvKJJCu28o4cANdxy7YxXVcUbpNAs6tVknyuGEtnkDfVQFZJ84sd9WbrRtX2mfqPhTAm44tBMUjMfspPBTAv4gT",
  "key34": "2hJ5p4em6Boi3QBFNp3oSMQmWESWq6HZ2qem9U5ZzPSTxAKZFLvemXN2i81RKZZDJnm2TWueQhsQbkABq6Yht6pC",
  "key35": "66v6C127Cvc3714PEu3Q1KjDg7KXwPRqfcPdQ5U8LEPRpzik4s5wtB32sRnKM2H5y2k5vmqYonKggwuvrvDG7KZb",
  "key36": "3hsVSFB96jNgbxgiWGCCXomaT71XwEDB8CVVw54gutZ2uyt5u1G3tDzfqmhwE8pkvntwoTUD565tzkNERr68nhMx",
  "key37": "3BFaRcCES28LGDWHAK8uRb3hkQYVehjhAbYQXUjtfNEfbmS4zf41FeQ7GWtW4LYEiQ3km7aNpBZ9EMPRpGPuRWpd",
  "key38": "4Guy2TLkYW1aVDuvemrU6iQEXchW6pM2cWZoRtPvmeoG5wS4o7hPeWBnB7jSteuZgVuhbuGyuCHBEtKU3MQ5m8TT",
  "key39": "2aVYmT42hk7vA1wNhjUDHo2DpGRoFyK6awGtNR3UUGgYDQpoJECsFi21xbNdZLJKAP2sEJ8dc6cT8KwrBNRKjeeC",
  "key40": "4noPE5Y3uoDDNNXLRWa1eGY5eSEwoeV6CxBdtwdXSugKPknCtnrLcz4tCbEXVoUMcHoxVdwjVuZ4DMzzyDS8AYut",
  "key41": "5kshMsVnAsEcYE6u2oiAXyQJGHHfw8iGsQP8mpszzcfWaATFmvXKmjtptMmRdv7qQc2iey6M7ZLbnCWNbAFeiGco",
  "key42": "3284JnU5kmU5dA8JhHgase2FQdZSx3yd8zQ8x8nmHK6GFkbvbYngbwypwDNwLJLqquCzp8gMEF7y2xdU6cHs8uYn",
  "key43": "5u2ZNSs6xbJphL3LHEGLRubVNirdQjDGm7ippzLKaBvFp6LNZbMR97UnSHHbxupiAECzBqyAK3rjatAL6tAoB3fw",
  "key44": "5LNwJutkVur2QAfjRVrt6dXy5C76cYq5QdSC15JHTvNpD54heBMzFAqNEfM7oMd1hnMGfsdj81KCQhztb6XWcq2Z",
  "key45": "rk2xSB6FyLMKrVEBAFYHUNHJ6dogbgCnw8YPUE411sa4aKQhnQMzMBH3A5pfZLAKUSNDTfgycVTXSERkkcVZwAi",
  "key46": "529mZg7pddRwVewpKZS4b1Vg1nKQ84nJ33KArp5F5X7vJj1ZQTqfCRPkzK7QtiTVKSSARg6tf86hitatoeBDYtWH"
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
