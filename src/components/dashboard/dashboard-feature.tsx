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
    "2oHUYpU8V5HG1ZJuFGxLSfLbVpZKHnzeSrFNUEUfPtrABAFeJo1F9ktqkeEai7HJStkpCB7xZuQsLhCxtPykaYbC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rLpvSzPGVAL8qkyEm8bretiNQ7z5rFz4vVLSKVEXB4nPscQMyAceM4ypNhyLUsg6T7e7J2Ai252asYLDNS32mQ5",
  "key1": "USVjZ2UL77mWyTGLaKnwfNqCL4fkLCArANQ7efUxo52dTbR3yoKJUtLWx1CY7YWKUntMuQ4iaNnUyNbUTYiuubR",
  "key2": "2Va5Z4oi9kSGAZvydb5te5kDH3Gaqd7pcBBunhNePD1EMJMg3sUeo6TCQw66rBFFqzri9QTaudHb1ZA9njjhNxaP",
  "key3": "4A9XEG5HYFF8Y2oSEUMuqYVf54KgKMYUBEThc2Kr8jpTnMqjCcTEQxi6pcn8HmJezg2nMzaGJDe8TjHsxB7Q6WnU",
  "key4": "CUderjZJvqKa4pCtbn5Viyp4p6jkNm1Wvo6moadfoV8jBgYCu4XkafRfZfdVHf2UEYcuSWhzYaftgUW8KMVgPxM",
  "key5": "2Qmkd96tNLPL5xJrS2BsES53jxbA8zJnKxMsTGwaFUKMuhCNSraLDaTzrMbbiBzByDbkMntC2d9xStoBrFvRaWP5",
  "key6": "4xzKeomYY78xsPTwaVXHfkxQwFzjepFNmf9XfCXwjiWCytG1fYrTYoQqixNSrNMQDSkbgHRKh9xZnFa1NVCWjDec",
  "key7": "2ETWXcASv1EAhjKoPeGweMJavKjf1kiq6MHkYhiRGqB7kmRZwjSLMxCZ6bzkJJ7eH6ZcsiGTCxjVx7DVxXYjkASL",
  "key8": "4FyrELUubbkyRZzheVhfV2HjNNXXYWj2MXbezvfFUvNsLHUs7pxVXsv4YBv9uFJUsPJhauEq2edo3bNyX41PYoyP",
  "key9": "3UDbPaKKeNouZMPioq316VUermXBCquz2dC7dBY4DaoquNTi4uug7DttrMZxHzpWoDNKuHH9mopi5qDEsmDh17wH",
  "key10": "MXjwZVfwH3qzyPWuCbBQqqqakuQPYiXmDNTcTqTHP1vrmMxqt717PWpDSFHDEvff4u1mhH6tiUzuayFtJ6xKUNu",
  "key11": "5RFyTLWsgfL7NYPWRN8CxrdoaBBpkKznurFPehB5ZSgYyL9bVsZCAXVurxNsjY8DVUXEVSgtFVszUsuokXiwcfQz",
  "key12": "4wXTYxrxwpGqW8bEi4seJyDXtzkb11J8WFToc3ks72pGHhJwZLp4bx9siBF21mARgxrQKTTKf8v6W9VjasbjY9xp",
  "key13": "3sYEGKv7oKXuG1iKdwqBWmi39Hd7QubfUdTYr941rBqQQozh6xV2wKSp6GnSwnaSbbjL1JNZAoXhuqQh3qiZCpc6",
  "key14": "4Ni3Co6cNguSyXDMUjTwvDYw2Q4nNjvdq2t78p8h9a5aJha3VYan5CJmEoa7hzUtPCHYeLb1X92Rf7RozaEUGS6x",
  "key15": "5mYbvXUjx1FqEGbXBNG7PFgETKYxGvhHAHHjDKnVZbvTuFFJu2vG6XnqyZ4tMcWnKZ7iHotAdxQanu3TeY3bzzpR",
  "key16": "2vtPGBokZCYFTDfbhWZWQScYiR4hKmvtRN7FSrKyMU8792hArgmxtAmwMNnf4JkVxzq9tidDEQ3ejb5MT5ybuSmc",
  "key17": "dqk8AhZ69PoKt1a2rbfbTzcaGwHsFUGRcnwQrjNDjqc35aCzN9UhE4QPiEHoxqQjiTF3K3va8ZKT3vjSTbCtcND",
  "key18": "4sNnN9DK6KHrSTvYR2je7rdp1X9XES6e3V2vPMg5NZswUfs2tP8AVHn2tUXPUadyjXvdbAJwS8wxHGgd1ArFDv67",
  "key19": "3oMuTcM4fyxLD8FJ6iMGyxJXocRAtJn94eDbM81Rz7j9gkLJSfTNN7j3t2gcBaqH7uXDB5baQ7wRfaCrDUysvw1L",
  "key20": "66JgPLJ1DjkpnhxoSRdC9W7Kp1PizyKEzPVVdE5prwk274UKgvm36Anxbpd9Gg4kDSAfqzmvo5pKsyn1fgF1TmNA",
  "key21": "CwazSxt2qfLQMZKBG2yEFEwPbdXYro38tq1b2N2m4Pitud7BHj9uXcJXGWSVWAFCiZfo1xofzaAubBfuPeGfwUs",
  "key22": "5vxLuCZ3jv1yoKeTgC9pgeP89jWtHDpCUewsUTZyFitCczUuSNd4BEDiBvodBh1yPCgBhNBxTeJFjfDwrHb8wKzV",
  "key23": "5MughBP7bAS6JPXgpNLd9roCNzUtYfk1QCq58iFPk7cNhV7EQcJTRrbsPa31VKkuwR8wwXLtUnUbDGm7Dd4nQ1mQ",
  "key24": "2feQKCnPpyaBfpmi8eMuEQZdk2WAo467BTVBq3bMxXWwabRiUcuYh5n9Ct42o5UDYhs9ubhjRhHVNVoxBDgSqEFy",
  "key25": "482gst2yGcwukv9VPhbyGf155ygykGBE1Bz1AsgiMTy44JdcGfZ3fLaNo9m46pGzSdLD4UJb6V3Cs4otcYn7Cz3n",
  "key26": "5q2YR4tU5KLGKfLU7VSLQkh4Hj6XuafYg3xox1jkcuDCCLQey78dyYSzEHrEAGc35Yk2JTNTBdrv8Lznq2aBxKQ5",
  "key27": "4K4KQA6VhCzt7VWJVYYrEdk2Qo88JCNKNuzUyKXyHFwB8p7J1gN9C6Qu4XjHEakX2unD1PR3GPDH6pFw5FVqZCji",
  "key28": "5Q3wwi7tnFM9T9WWMJ2FAyg6Q8QppitLYCduBAKi7rV6RtzRYEBSQRECKNYgWAKSqmkC9Ce4pyiUNsG48Bg3o8AA",
  "key29": "2A7Qg1agikL7w3jBLtRaJL83cJ9TzV59vp4BuqYpWzeAEdBk3kMgFkjfor2dKgZ7rsY6jw5iy8EmDPSG1V4qWjPq",
  "key30": "532LB73XNos89cU7tD7sw282LziqomWKrKvFGemddPar85kYdEEYvP1NN7LjSj5g3fCqc27MqFTfmqWbzmHfFNLX",
  "key31": "5gSqRN7oZPT351HcQgTo8tmUHgG2f63SgaCLcvj4fB9KQZgEQ3HLPaEJuS2J3aMZ8ST7xDDXcGWNfE756KxrD4K6",
  "key32": "4TQqNdKo5z9aEfm6wmgNXTXB6YkKZTZArXFfcwVnqLez2B1TvugBqVqnE4M8GiroSUaTcrn6rNwzkh5MNhHnucUV",
  "key33": "4gEsR2NgWws6b3StUNrtZ4Uf2hhLjdneWczibrNwTRKzQv7TQBprkcVjerwHQS1gusNbw6UnteJG5EtwhhsmbYcB",
  "key34": "5TNVHknTGkx7sBpSiDjnwu6324bDFfmZcvSuwNwaYkrSQceNvBGZpg8ZFwyauNc8jAfZdWweDqPQzWipxbQqQD6d",
  "key35": "wvRe44GqVJvZ2ZFyHejsizFJQgB8EXmWkUiGDofg8N9qbn178PuiyFeJPmFRcVFyEx72fpEVNga9EwsQHNgPJwc"
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
