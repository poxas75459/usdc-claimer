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
    "b6ggHq5YcR9nYpagXLqYHMoZ5udX4Dj29unABVGP9Y4gzqsjEj7cCnKes5D7gpTZKj5e2xag9AKHyMUfVunSkB2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LAgrLY8q3khZKA8uAruXRd8Qf17ZKKyPCUjfnvT9ErC4UbGzJhe3qRpcQTgctKXoW6KEPCQPzndYNC9MxiuZbRe",
  "key1": "2SRLP2xrdzbgVWR2xJxNSsaTaF2sP6cK94fEE4WAtzzkyzdRNZdEspf1e781xEj4MzbX2BRzor5jZhW9Y8ZbmwPw",
  "key2": "UQdNHHvV161zbf2UaKcLXwWFnbuTHG1BjpMHaiMPEGFgUZEKTV5x1BjNdT1twAYBJjph2T4HjkBydMwYhZWVRgh",
  "key3": "49EHDt8HUspzEF9ziYN1sDGHXThT3x2DHDTHbtxb2ffZKNDF3r6CF6cntZfoTzAPC9GGxmavEKQHQ5qzGJbJDxPn",
  "key4": "5TyrVDhXHgaKkCdEhykvoxPfDGxXCmWxvJuvw3uJe1ALZugzWgQ5k9YdKCRHmYGMW5HE1ykwhNSkDdpJYsqT1kh2",
  "key5": "3hFhKNnK7RuCewhTU8G163PGxMKVQe1DcFHiZzAnkqJfyomhwnqyt9RoRSnoaRxbfwNmJhiHRK7m8d98Mrv8GEPx",
  "key6": "3scLajUWsmWKLacqzKWyvTdF4YXMvBZpx5PHWzCS2mxioGw1xTZ3MBj3Q8xugbNKxzeLv5c5pxZR1zBxf1N8DbYh",
  "key7": "3ru5KZwCpwzk9kyGFzAq8snUWFgw5zmQonrhpnb2nAKbWDfR6HRyn492S9eRgQ98fcpXUoZ7aGn4JkyAT3uPc2wh",
  "key8": "3jKD3Geu1iVKLw3E9GXo7GfDav4AynSBnrKSawSVyiCVfEu6BrhJNyEinsXxAC1AVjL7iUyqur18KemWy2eLFaAt",
  "key9": "YgLS8m1PKdAiKzJyRHoS4p29r62UNpmcd5egNpktDsiDUFSkP8jJ8KV3SfZmXRP6zs5Ej7tKfU5wHsHDB3m22VZ",
  "key10": "zFvJmFU2uW3b4NeTjYET2fckQTjrmrVibCPhYx7bNjpqPkC8U4XFCrwVuHPdRtnfcgvGouAbpPY94QnPrkxPhfK",
  "key11": "53rfK9R3jrc9duFKiof5XhYS9fCHegznKa8z23GJNeGadW7487WR4Yx4TPnZFQ2meXkLzCxLU3v4k81rz4LUoXTQ",
  "key12": "5c927mV1AGnVYJ2dbActBXwhXqk9iJ8XEaDi8jsgnLmRtMmCFvFBUEsfPnxxZ59TLiBX5sV5wvFbwpXaoKYu7M8",
  "key13": "4ss5ey4dg4r9vxQr6rb2xWWAcewv9HgwmWBYs2ur6z419YxhzmuqAhNmrHhiZDJXkTpsNGQNUHU2X9wda7eoFfbw",
  "key14": "5qjKFBoviXKjQ5UTL8VKp1yfC4Uo6R56MkUDecUxYRWMDkui2ZNJje1ADwaueQVpkWdeWmYKYsUPmWmjqbJgN2Gz",
  "key15": "Fnt49XPSPjoRyEiDpEk3kjT6vEGUDn2X12QiYSWxaCrhbsxMu4Wfcnxx3exEBymHbH8M3g46dBgJYuKAuSWag1M",
  "key16": "4RE1fDAVTpXsf4v7MPXZbrDLtWAmyYGLAcaeywgACSNYcEJ2khFxFQm7HYXeVPfbCQZK6QSYLd1UhBwApmpRn6io",
  "key17": "eGPPoLkcsbRZAdgeyfsFDABdrEtU5G16BzMjK1xrRQ5BmZ7YXZmRCQf3i9KKZGoKeeNq3wMF6vVP7rmQGzTaBj6",
  "key18": "5ezLgDfddaUHqQQJafpHvvhSAouzx39t2tPF3wkNUzLE648GN1NsPJCHuoaWjQbugWrCEc4j2vs7Bi1zBvBxNwXb",
  "key19": "wTLmH7d7XsJXWjPzv7vjpQyNi5SFmNFutHEY2nxZAHnDLUZtY2mKFE66KSrLwT6hh6g29TmYrEAkwMrNcS7yNJC",
  "key20": "3kGJ93RrzLFDWotuCd4T7c31d9SGwCRJkJtH5jNQKefHSTAiFRTJnpMHKRbHgJC7pyEKZFbvToBVS33M8Pv7SmWV",
  "key21": "4uESG134XgzgJ1hLjCvUoyA67rUjctZis94sQ6dGsHd6pixtdrd92ahYq7WyB88By1iboyksjNWnr2YxAsS59y4V",
  "key22": "5BX2R5ZEi6jYMHJkrtzkkxxydaAMSfMmwhhm8wuSBQBpoSRSKPVrkESbuwQmvctNkUS55KcmvajciQd34mUsdomZ",
  "key23": "Qn9Spby7XGLSU1TdmnHMwCVtwHLAq7E7t6guoCzpCS6cKfLhbafouVb3h7j7wr1TWnP4aABtrUhjU9E1wEBt1KW",
  "key24": "2eRhJnTaHLf1Y94HayuTsy2X2ygqeEeq9FvWiMJwLauNbM28JH6pea4ZMQSLWZKMGGyzBD2xnKVpeFvgemEWpG2b",
  "key25": "3oXJiJQ42uPSRWWnHriru3xXJzgt4FikzRDMqUw2VUybAVpVekiX66qN1gADqnhPSr35xBjSyJEEf6JHhvNgDUTR",
  "key26": "4RND3ZAcariVrjms5EErwnk2tBcdzKgGvqbStihzFkw15gZvDcAeqb3kPN5gvMMqfqpcuTTr8tCe6wAkBZojevq2",
  "key27": "kWK7yu7VRLX6vGWNCy3qWQZfhXJfYGdGGKrzRqAdeXp1paA37kKrd3APjJfERrC2aHD9xJ82VjAGEcJTeqc4Po2",
  "key28": "3LucCsQkF9qGmLAZ8GPdVi5kSa3hLozCPDUYNj2KC2uFhCE1fWrrHYhsnrYX6rBJqSL4y7SxxisaUycAo9dUuSpC",
  "key29": "hHBKfi2AKEQJYWA3geJhS8Eu8umxUvKTqLuTsdsXx55zwxhZ211SvPKtnv8ppEVzbMbxvkedQufxuVxWsPsjc4a",
  "key30": "5d3fUdQ8YJiRGAevQd65VQx1AQst4W9rUv6u5EQsVS436bFtLVhnJ4S3HVEaHdkU4D2nHsgCK7vsULXsjiu7xiXe",
  "key31": "2k93wkBJtwVq8sKbwka3b8ay17W14UG2HvmHQdocxkhiVP4Mn1KN87wJdRGVEcnzfbiG9uDPWHxcY5dKs1qf5b5x",
  "key32": "3nhHpvYBa6QwRuzMS59BwVMBq8TRFPG6c1mKihC4vvv2f9JjsZ62B8X7S4u2V8nhb856u7sqTggbn1gJ48SDoJmc",
  "key33": "2gbmXc2FCYkp52QAqaWZ314cE53zgKPL9FsgbzYQbYX39mzBWmPZGUGssZUJPqQzWTfddvNhBG3KiomejthwviC6",
  "key34": "rhgCjSs5g11aV7Tnf9B7N7VmPnm867DvjxudKGggScd5imLbDjchFKvGkKe7Ng4be51dX7sgLtnikMYstUwxSMK",
  "key35": "aiCWvf9xME6fDNQsM1ZppR2ZYHJVKXiHMf6oHZnt8jD49JyLqPdJTPmhRLbDaPhMoqydCFhbsma2KjWp4woTum9",
  "key36": "34nxQUiXCxkdKsZWHXBi4ANCyYTQzauwSx971esyViDFs9549Fr8uanA1unxL6BnV2KHihbG72qPbxo2KzJRf6Lo",
  "key37": "5EgcNNJGGLJcK8oEJEe44AnpKSLeimrtL3QmJckyMSxpiDiKMkfVoAqFx12KYWgP5A7sPy1SkcGPNLZRCkCejhHz",
  "key38": "CwEjcJoKMH3ggPdoReG3cuS9R2k9FrjbGe7MQXRA5tJ4LfBkLY7snP4zuVnAyi6d8ggQztTzeHs9rzTWNALWU7y",
  "key39": "hsCYfZGvusMujLFU2N14jsKhotc3FVZKzw428BWiJo1S3SvvKhnBVE8L37UpPgagmwMb2bTrWarzHqVX2ehv9Cu",
  "key40": "24taKznnLd34JDk1j9p7eq9py2JCSA4UuCox4Big5VEkR1FCHbYoK8qiiiBy8txY98kPeM1NMhWcAvvRjUmdVtoS",
  "key41": "37ACXtDUaXwXp7eZgUQ7gnaTVHMXFAM1kLsfndt4LUgBaCwwggZKYDKMrhzNKvXmwC5JLDF5az3vsh14sMbNVbDH"
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
