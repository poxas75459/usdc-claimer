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
    "qrdUbHNsvDYC4AiUXRvi1nLYgAss41SYgiQMiVSWty3N1JHVzCzAjxYYJAKCPY98SzudVqnizzLrUFPH7MNTMV8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MXEZ2P8wWq45E3ZVyotxqjUcs75sVwixUJZShFwM25XgsKp3vvzY45qAexWBPAVEhmFP4zimfkdegjpazBtpyQt",
  "key1": "46ZcLV3X7gWLaUjnTR4yRRsTjkrWpaaLGDk5zyFMCyDbkhJ7j39f3NFQiiQ8rcQ81Bsms4N1jBBQigcT62UfHqSz",
  "key2": "45kpDrLvs4m4rTiAeoqnknfVez1evEm1uxK3xKSY38mfXWjDWduG16nvgYRUMjpa6WzGvyrbZAPbhtxf63hvwGU4",
  "key3": "ZzH9CAuJaxQH25EByMAvMkaKxCjk9evppEQPQDjcoC5eotAxmzDK8QZEDhfE7SmrLsFyHeVXj4EGowAV8hV5zee",
  "key4": "2U8aiodT6EdNTvmRHgjqbEB2Ucgh9vBkV8Xs6zSdUaiTCwJVZ7CGk2L7BBNXQVJSWsyK1icg6GuQjz9FPUfC9eC5",
  "key5": "2CyLFyhjeHJBPp1fmrotLLzE1NK6FbQfbxfEddsYfAVLWTfinv6TJ8CSDp7GHbsdL9VUDHEfuBfeNBh8r463evFM",
  "key6": "5fBbhsHGrAUHVyqMjTGNzQb9mU91SdQr4nwJB9YhLDbmb1Ew8LYqeSeCLgKp53BBMK62eQqhr5x44UJkz1vEj8Um",
  "key7": "W9YaXzLc1y8w5nuGMdvH5opSrr1crPfYPj5RHriiuaZDCBxxFGSCh42gWZgusdA56YncL8k7qMK9hKtq5FscT1G",
  "key8": "626GUpAhDFNUG3hAaU7aXrFRH9ns7qYvNn4k4J3xJZnqz5M8yhZE2MUGLqjdyHhxpXmAXu2Yf4ivRydQUJH27p2d",
  "key9": "3jD4KJrKX96qEqcBUhwGhj92hzMHzUASM3UKZsD4VktAkCXX5GXqSpQso3Bz6GpbFuqmpy5bkv7t9UdJ4asTAwwh",
  "key10": "3JTMRpGyAasrs7QfCD5UrTEzwU3zjz7cyBPQ7RyQkhrgNMc946qqJpb4NUY9Sd5qqLHgx8a27nLY8JL2ohkhgY1L",
  "key11": "2uaND7nSSJL5p8B65KREn27HQGFuWUbkeCHoAfvqGJiftP1kZGSaKD9KDaopnXSpRHFcxqENztx4y3goTLZtqHZz",
  "key12": "4h159UPPiFftw3SKbrRLMvJopDuSfo9FcVnuHExXmxxncwpMCZawFpsf7TzgMPgkUmchk8euSSF7gHALNAabJguY",
  "key13": "5KGVxzfGdchR55gqX7t6nRxfgwmGTNnVnup3FwTBVAvtiJamG4wGyGYtY1di7pcQCteyiefKfzjhSdnqyM1wMBEA",
  "key14": "2e44e4mWjHh7GgnukyTxexKSrtpc1JECvxSTqGxn3MQJLus1S3JBYRJgD6K82XcZ4N4mbpri3kuC1ftkFEKUwrJG",
  "key15": "4bQMjceBE3oAroEXPUeNF4SM5gKeLuj91ZKMdevztdVU1tE5rh3XgRJ9kuAejdYXiVP3x2FLmWNERJazQDckrztt",
  "key16": "5SgAgQuFK2UfD6zt4sDT7pN9JtX3j8KndDMNBNKxJmeiNywXVV5aUFSKfPW77XghybBXoyzyZtoH9cu8hdzDfY5M",
  "key17": "P9B71nFhrGNdWu58RHBVAkBRRf5KG3xjXJbNSsXhGCgyd7DFGhbQgH91GU3qYLLN4Ked4E1JoXgpYN8mbPPxiAA",
  "key18": "XU884Agy1y1uggSHd5pcefvGVvQmT1eCdPsSWvkDRWcLtuESHPEpjnJRSVAYa9BmT5gdeT3C2rodtaeca3sDWq5",
  "key19": "4swVasHvX2wzh3LSWCZPyuuos6FNf4rJpQg2gha9a7a73zjTk5VEFnk7WsUPvxcgUh3HwTBpsaj58cyzBSVLsWYH",
  "key20": "5Em2SgiZyoXrNEuV86Cpawv8dRDZe8Jbggx88QN9zn1AgZEBrr8e4nNLMsL7ZvDRs28xMh748LMwWMwdfEoYMAH1",
  "key21": "4VcoLuMRRhzq3BGLfcbqf9neGUPQiNF2YKYRpv5bPFeWSCXvhjzkTPttrrP7Cznu4JAXDV3wfTy5saAqG2RsXYPn",
  "key22": "9vTo4v4sZAYj2uJXzHVek2i6fb8AqbnRhKDNmcdPMAECWisVwsfM5ye6uwWCeXcNHLrCyEYbnkz4kq1dN3JqT2y",
  "key23": "2pfQ22fGX5WHpJqUtFLcUwisFw42HEaimqaxi2SzhEWZbPqoFQC1pRpd97pz7YtmrT4QTMeZ41R4ebuUCFdd28yN",
  "key24": "3sP4WDUxNUUh9EXa49JCnW9dUoiEnauRXp1tD7p1EDT7TjXoe8YshUAtUkuyTrHjx7REjqGM6AuKB32uYKQj3BGn",
  "key25": "38Uiu5RNyUCE5EorQLLnrhEt7XDHpBqzqpAgDkrZRs7BiXBqx8VrP4fodGTXALghCMksAsdfanCRE3hdk9JqvxNE",
  "key26": "35vwm8YtWiYA1uKY7g4X4RZ8rKVesmMHTjFP8eeKEh2n1eWRuWgpHv1pbexuMrRwWCLjvkLBxHx5k6des6zPysdB",
  "key27": "hzo96DgFy9snMyBoWrrr7kQbZ76m2eGgWYpHetx6q2QVgMfpRWEVSpYrKF7GyUWL76v6s184SUaoWBHY7XDKzP3",
  "key28": "4WnRV7EhJ5yyBafaFj6Wbi9xj8cZ9AhqPUbMgE4L5bSL3KMdH37pz6Z2iu8xayJg2v2jj5z7htKUgbyPWtoP73VT",
  "key29": "4oWpUGLLKwA8h1MQYeJ7KrGUUpxEMS4wjtSsV2D2JExkNoRtqftHtU8HhEH6H5kLtzYUrPxTXMHX889eTSHQ5T13",
  "key30": "3bvoLdCTDjWQQvybCEyk3o4vX1Kvfqtvz1B9qzRkAc23yR6M3PaMAdBY4XscyAArGvzNQ7EeqNZ9EapuVsstGxd8",
  "key31": "52MiqFP2UdXgCvNe4PXNZEFM3nMMj8xdKPBxKgnfxQUAo6f8C3EvavQJx812Li4GqMdUrWTpSQT6jSK4w8HLwQKV",
  "key32": "AunEV7iB6ueK9JZi6u89Fa4zH5mwXTiRZKWp2T9JGtB4HCB14Drap6s39EeyJf7yhWE9BUhAJ71QF8HtKx2o9ij",
  "key33": "3wjirWrQNPf3XHaBYX4goeLx2Af9rtrfjS14WDgNEy16ZNTAB9qaADqCoSaKoUAfM4jTiNFxSyDT5FUT2i92AWQH",
  "key34": "NtxAoAJo7FLaDppGdDyZ4V5GbLZGRyx3PV2cGf3EhGu4LmzVZBHtVrYVXzjSW1VKq1bdKdzssSmUaeMEt9167UH",
  "key35": "4ont15uvJyBmVEvN9dXQdWg9uc7j2BYgfkgwdYmtsDoGhRZTae1D4q4vqizkkWYciTxN25Fu8C8Fw1yqoRPZfNgB",
  "key36": "cRt3TRLBhm9gAK1D1FuN8ePP55e84bcNFBayPKUK6G9cCuYuKQDDTeD991j2zmx368pcxbvfgr1McMvSWq7BfWF",
  "key37": "gN1LFwjUzjLfA6XKkfgioAYnRVnxZzXjZgCZCSFiWSyYLvsz5auFU8jEAdRanP7BjrRGmf7gVm6Z4EFDhrH3tZg"
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
