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
    "j3ttRDW1xBc5aXaRUi79u1bE3WSq5zeLpABG78pQmosp8Hy53wmbjTTGa7UC6FTJBFpS6EMZQDBRmJDfQNhUVbN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qpT8aVaDrjevmMVwKJfw6dSEeR2uynAd3XGWeTCZ8AZCTsctxJeKbGmnkcARGjK4LaWzGh7ynDYwAAQD3i7YtCY",
  "key1": "4pc6XFXL8J48x7ZRf3xdzhCbpEuUox3gneG3qboYvtXXz9MbLxXDpm6EDrWvAn3HKukSrCTezSvDVHtuL3V8ACxw",
  "key2": "4qdZdPbtnM8st2v97cVYCLqR7WjuskM1nb9hWxYu8u1w5ueXeGdfwp43AZWxVHTjg5HGweCNRrFYPKSdtqauMLhD",
  "key3": "3CL4Mi5q7gNdeosX5eYdmC4QV2PM5HegJwRLX7sX76Te6iNsGVTbgbd6ZxHbkBMs91YzqTuv4MPSnp1jPd3hqYmy",
  "key4": "3EF1yxZ3Te8CVMWxVmuw3YEti7jDcdj2Y9oWcyaMWsASzcXPb7uY4UxoYGCCQaBweuyGnLKyzwMrf6jeBLBVPmXC",
  "key5": "2iSobVjN9JkMWGpJ7R3HMYj39xBTXV4ddUhmyZpdxYkruyvnbLu2oarjsRW2LMUa1BG6VeTe1otv1fkBduxhiWuR",
  "key6": "3vJKWUHhRUwVrrYEeQADwiaqaxdw23C5cGnmiNGuV1P5GGXw1wGELkChVf3VFML3aozLgMyhsimwSCG81rxXSWhm",
  "key7": "2dsAu17EYvW9hXkv7pEtfjDnSnSqP4tfFJztWJ7GPw814gbbHRjohjAjY22fiNj4Vxsc1jrH2GEPsfsdniWB4c9T",
  "key8": "3JvKh3eJ6McNcsYncXc1KEuMBfwMZU48etuAoFH175aLckhMvwMPcu8SyP9UbpbE8719U9NYth4hFVMu4PHXgt2M",
  "key9": "1mCPnDaLvZxUEWPtqgGFw2pXjX7q6ZuZmRTJwxD7o7JD5TegbqfH9X6xtSfoji76cWPBkfiPpYoVvF1LtWSdCob",
  "key10": "3pZVWCs5R4XUfWzSiAzvTsZEdtpU9Dbc8FxuUVYiEPwiSqMQegc2cj5vinKx89LoGzjhBHRQK9otScqZLiDsD1W3",
  "key11": "26Nh9Mvm46mZzEuV5HkyxKA1injbsVeaNnHnqkVga2QRNscRcjCALUHPnp1PZzZE33WE7NrmAxd8sV6x9KEegCrK",
  "key12": "3L7VsSyCgSKXGm73qbkjgvSKYnywPFybXAUqUswavxsaAb8eeCGyvysRVQcdte4DUsMriTQiWaPfQGvDd43MtD4T",
  "key13": "2tNL9igTuBAswZYyeE9nvVSn7wHxcR4LPfwP5UZGaiMitX2UetAmFX3QtXqMvTSBFaVPn3mNLe1Tyoe1R1v9jG1F",
  "key14": "2Pg2ndX4K7U7e9BHKqbfEFFfVjZVzzrD1oLUpycZqDM6kWDY8neeXfQUE23hwsXSB6AqJ6YwzFWNAQRtMLwCb7Jb",
  "key15": "5Kenhn1YE9YdKjyPmn9LzPghLpTekeSmJh3gaRdSF7wSn9pKeuNF1vZEQq6yBnaxvY85Gq7KjUK4t4hN5wzAF4mW",
  "key16": "2LWLb7tjhMcpMds8KzVumoT86f6j8SmA4qWHhyt8KJmwNFhkKDNAdSD6r2K4SvmM5opnWUN2oFmEBA77dPEdJVv3",
  "key17": "5jCmuyjNkwuwAzCV56bJVduUsfB3yrbQF72PA7UhjGZM9MCu3JV7t5x2UeGMjUTVdgbu7ExSrQpo3q4vArHauyZ5",
  "key18": "5ZejG3ugVCZsuPXTna4H9dA8Fnd17bHYHBiBcuduNsMHBYSTr6E8Mf9pDyPxysBNmTro2rE1VWQcS3Y14zSjLwom",
  "key19": "5gdDAS69duharNqNbzESRrGVXqaSEBqLemFbTsMfDCA9RWgz48VSHxJXG4RTTc8syiwX33FZwn9CyUChfwHbtef2",
  "key20": "3vSjT6jJB7ZoRVRAGpUWU8LxAboUfFcEu1jSysyxPsVEF3qWCnkAYfCWFsrZJZdBRJfyrFrg9azT4KS6qwTFbXeR",
  "key21": "YJQxDodmP9pt7wXwYUKmjmcWijCHTq25sAtjTH2K9vx67sf868LhVuoWkvxvwKk1SV9oA4MBsArFbny9WkzBJWx",
  "key22": "3QHPqBfQArrfxAKTekkJZCZgC4TZ7pSHZ3WwMPKPudMbq43ch55JtUnqcJUkpxk4EzAaJJJG4tZ94LUwBW42poYT",
  "key23": "2wHbodUm15XynnnLBSMibjfadSmYoqTWhbsyh8cWcyiFopDbaoj9j772TP7G8nGpWKNniz73mCtXnRnWnf9N3PdF",
  "key24": "28ah1MrbQRBrEYTmVwet51D6v9zCBHUgVQoiAUGqcTi1hqe57vMcmvBuVZHJpgRgHhjjP9G6FPvqGA41i3px7A8o",
  "key25": "46Keg1f81QyknVkbRR8dLVSdkeVubR2izWmTVKvn942L6rLbyMxJZzzDCrfToNTZS6SxFK9NZDLwiQaaD3q5XWae",
  "key26": "3jpZT3A2HxLMKzVfE9eqZ9uLavFaxu3zRYdaRkkhXcAWdSk3UGN6iZqw29f9a6Kf2qfDskMqL1WgTv9cM8QpgMBe",
  "key27": "32UaHKtXXViDt8VgVJA8VUGNaarqvFd858rXLhuS39BW8AT3PmD9EM22KVnwThxxcaodereumDyic81Bj26AwEQj",
  "key28": "5ts52AfVCvfHZdpWkmgv1q5fMpnkNfJVFA1Ya72KP9xByj4nuHiFaPBa5VYqUgnv1AGWNN39ofErUmaQ56wMceck",
  "key29": "5cqJVzsJhS6s5N5ckKvdk4LqAVDRdAcozf5LCa6aqWXQAGwXNkkcqT8kpNwtSFRXRqS93E2rsaaZH3zmNHke7HDg",
  "key30": "5MsE73UbJVVhjcyVEwrZ4BwJsDy7qc9riLss5T4r4JpUAaC2UEjmuzsnLwhSPUZ89HPp59R97HFCvTtsUi9oD8TX",
  "key31": "5eZUmfVphSneuQXs1Y6ZxsygtzrjeHQKskyXav8dLF7Miopw91kiJQFiPuH9E86DrggeHwfwsX4b4qmNwfHAKjXP",
  "key32": "Qg6SaUH6HGHXwoQYmkY9kpiQPxeJeZo5ZcgVJ6RECBUed5xUAKuocLuNFinYfCdFX8gtMVPcdnXfuiUKqKmQNVU",
  "key33": "tPqpThff3jooTnnAnFr2UG9MDttxj6YwwYN4UYbUh8uoVo9T97qu6xhT3LpuFzwDiWqRNhkZFgHycHiCp35X5Fi",
  "key34": "3tC1yYgt5BtXpWjxgYBJofH4QybEgiedDFwi7h8fLSxmF3vaVjrke2sUa8eJRxBq26tiTAiMriF56GGQBKpDTzSU",
  "key35": "3y1Enjhw25G8PaW2xEEZJoue4d6DJHk8hbVrH43HPoELir1xH619DAUi64AuhxzfFRTomYeuK9UgzGJPoV6yJYxM",
  "key36": "4xfCBdP7RJMDhwkNbFaFQr323JJiHSYKqxVpKrgWjhiaMwSpoMuA4CFcEqM49ziqF1fmqFZubuZz98a6CmRFd2CN",
  "key37": "3DQfjJbpQjqJZboCRTDXLN1VQZwdL8jgnRbuGvS8iPKUFAgK3bt2SYSPoziNv5Ra1ZuUQeLS1297vA9GpPoLSLiz",
  "key38": "5DdWdszqH62V4bdrdqg4JdmzMmmF1GZY5So2MpTivWkcjfKJhLMKLphaD8cSEZk3bszRY6iztY2X3h7R446MinZp"
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
