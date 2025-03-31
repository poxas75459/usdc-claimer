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
    "2QycBXeM6AtjakRGNHZeLmwDbApchtSB5cRTMxbrjWw4LLyK56L2awZfniaPbLn87sjNZFtP8yPFcCiPyXTN392h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UkprsZShymCRumd2zJHZQS4fbzXwP1CFTHZgkn7sRQCr855AfCD7mt5WqqhY5j735tmEoqGEhKFh5SeQ6ixBZr4",
  "key1": "5MxJvxecHX4BZmgkDHDUN88h7HSC8JyaJL75Rz6nxvegupiCGAX7qpVqkXdhHD5Tz4eft1uK8pGEdrNjCpeTSLg2",
  "key2": "4FRf8As8DxKcaTnmdS3fTVTZkG7aUafvMoknAiAv3EWCBBVE4VBDYHJqnsMWDLrBCg97TC9fzmoWdnFvPZKgFFmq",
  "key3": "BgtZd78bSXjzR57gbC7DJY2LTJfNfkeSPLqL9KeLfJzspj5PFiG9wFAq4GBUMFWQCTAkjpQNi28F7RcuHzYMffq",
  "key4": "28Sm97rmH95ittZv8x2GujBZAbWSUMSnUUJ9DcBumCi49JfRdvXdevxdbteuujAdpAvGk9MgxvRmAqiwa7QnWuE8",
  "key5": "5n5KWpSt3gfbunacH7YZpwNDQFPVrpgWtjfRQAAkiZpV4DTgMj4crQp8SCJYYKawvWJkbsiuokh9sLFmiFuwU4uS",
  "key6": "4kgPrxzZH3GLb5Y6CWS5UfUC9mwHhWoojrdaT2VtU6JuRVqJnCQqwQidiH7R2uGfXqh5NEcN4Cu4Mdq3QpSVYbxH",
  "key7": "63o1buH3t1iNEq67ZyfhYHFXJWGJPzQeXRgmktjJAwkX4sgaGMJDdHxUJAHrqBC94PJ9TLiPJVstunSwADzBjT92",
  "key8": "3x7vRYazwN8uCaEM6wZ54LxgCswPiRXRmjnuibHYTu4fmx7vrGPbm761fb8grSaXmawDLhjBcGp7jF3Wtv4f1NWP",
  "key9": "27sVQjE4kgrEe6VSwTC6vW1jPibAXpzMYPRXoQqtuocgpeHndNG1joDpzMX14zgg8ctzSvkkg9prYcHY7KmHTsNo",
  "key10": "5zXF1TFU9x4bXDbPKfSgEsnvG4nJuQzyHQKe4bh8erUfykyL5nsoB8prydWHYUaZWjM66gAU2nLCCy9Q8mUKeApp",
  "key11": "3X4veJTiP9Eb87zuXqNFSDrF8erNtkVP1zn6VmYrNWAE7V9gdJUeDEC2G2gBrfdXWXN7XFTBWzPSrHJQuRK3pqnB",
  "key12": "4BGzjm5tu47xeRbsFvUhCXgXfUZJwYbLrtCab4GwyUGhRurNecHeJ5nwqpCa8Apgqnwb7fQzveowt2PvLwwnvaNX",
  "key13": "2oLrxfUSS3uG15aM64rg9ABmBv97k9XoxPD4Ebmf7r9m6TQ2JWk2AhaTrNieseRKKCTSXLwDAkYYLfh8RE4evQEB",
  "key14": "4dHnxvjeMmq3zinHaa1PtoGVr8uq3Gv9cuGH7SDL1ieJ4rPmp8wuTnF7xvTWGvj9zNw3uyrcmV4pMN5eRJqefaeD",
  "key15": "53bRsT4KVZXLAUa9BufBiT2YWnZL9TFgBJKSGnKp2ANuhUcZdqEgTMmJBSkNGKN4fqj29YH9k7PMye92JeVUJqzD",
  "key16": "2TSodNcrPuSQos7aweNLwDSMnKxW16Brsf6UtjCW6AbvWfpx7LVpRpksHQjLBATRQKvLC4ty51X5ffm9ckjLDLwn",
  "key17": "5G99ykrfjqwjKfykVTkfrYBguhvF7EDvTbQvsRGKPEmjjL4yeKCFa1ZccY8xERgkRfAeGNqEbpM7EJYkLKR9T4RA",
  "key18": "5QdHZrxC8pymYoQAwLJkE2WPZbTnhRM4mfA1X1yeTyoyUK1Yk2MPgiVjaMZhQ3dUxcgNJwD4dHc54KKGYEAsK6ao",
  "key19": "557Q6695tBbu5N8kCSbBDpH9HMfywnq1tueciPtZ6TD97qXuFWc4izJMxX6yoE3aY35rHwmUpe1D5gAYaPHsRkSS",
  "key20": "3KcCvUVaVv4hZ2MnDhYEPCLuqfRaFQSQnrpcBpFpU3A3HeCsoWnFzDTDurw73vGy7j7QsL3Bmm82eMJNpFW4CrYS",
  "key21": "5Hk7X1ghpk7wGuY5Jkm9tsoMm3gpqceeRoYq41SA4KjvostXwe9pjpGyQekfPnBdpJUDzkucvmmyLtzq5KyBfu4F",
  "key22": "63L5ery6vEHkkMMyBrJqASJBcatLUPF8hKtweEAUjmoE5GgP6gpq13s7bQBLMVRWozkHo1eS8gNh1cNWXjfseLCS",
  "key23": "4rkAiDuFxmma5E6kGBjpmuJNWdjMmVVPYcszxGcARNt9GG432GBquxr78zaKXcDo8vuSva7zwjdde4NCSLWicoES",
  "key24": "41amsQcv8Dd3KyZuHy4tSCDNob91EhF1e2VwQPXkjnh9SCu74wbLNSF6g9EFBYrSvBRYX347VWWUBQJu3Px4Z9Dv",
  "key25": "T7U7CTFsMTPbcNs8tNcf6Re377bLfsh9mA8pYGqp3qgn2E1Y1jo1pPtU71MwHpZ1nay2x6V6kNqBdCMEJ9hMHAH",
  "key26": "2qgwfWaMSzvj9SZFbiFV8FT5Wwt9mtAp52LeCzEWkEcwvAU2EeL5ASmcMa6mwJskbY5SHqLzZUrNn46uQjJnAfA",
  "key27": "43s8A9p2jYRv8LkqtgRgU6yjhXm8LhmoVyvWksAqt81sz2818nBwABwSRd35rMJVJ3DVBqimMfA37dxgs42yAgZA",
  "key28": "4i2QqhvdT1P7pJdtjhDm6oCEYb5u6kVs64pYsZc6ateG6AvhZ73NAggNjpbxXf5PiaTtrYSpVFcEKXzvGth9FNF2",
  "key29": "jd8VWgNsnsSYBzjUYNZq4veGj1TcXAPDEBP3mST9R2QxA22NkYJCsMdCLXsCd8u46p8ZK7XJTy19CqctXTdPK1o",
  "key30": "36iLTPD9vG2xCbeSFeoRNywkB3FwnzAxdLUHXcyE4ZVLvjk5Q31TauE22dQ4TVbwkggZFSeeCdWz9KhN6E4s5XZ3",
  "key31": "54DwhepbeQdR6HDJwYqa18DVyc9zmPhV5exFLUA6V3m8VaUxKKpGJqP9XnsauVKsjmUVtvJcs3qan4xrNJotoNzj",
  "key32": "66Qepvh4tqqwzip1D3y2ieFb5Zxf5qh8ivx79GRzMgNq2F5WB8UuZ37d9cuBkLBkEkgy9X8gPWZBHXQmRHpx5X4C",
  "key33": "VzPRoYqjodm6xqCse8bC3T2UzjgkqmLWjnVSmGsk5LPp4Mh7qH5f2jcUh1b4a3ZCNCmoNuDvPbBYVQAyxhF9iyC",
  "key34": "44AJCxcojgEMjS1G5N3WfMhsddufbksVjZn8yyeujBLSFp2Cm6rpGHff4sK5zsq7NeM6zghrY4pB1UJmewDXo1B2"
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
