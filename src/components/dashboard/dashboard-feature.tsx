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
    "FMuFx22sWbD7TiVSJSBKNkQEsf6fQEBDA6rG4oVFuX8E825EcYKKh436hBkNiXRyUH6yD3T4tgCDScVS34z2L6L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4D63YfzUGa233tm2CVaVo2biS6m2fq3v6r5aRKpypU27moZ3Y8JiiLU51eao3cxeBENbYW1tZPUuDHGbF4TYxmL1",
  "key1": "opiFtXybHHsqYyMRrg8nERow3WVkhcgPZTtfucBdHg7AdZEX9CN2ezMVzqczDErbs55jNWJKjeMJB2vz9ADK64k",
  "key2": "3T7RPbcV8uYTrAKpzqNUL2nG3o4FXgXNztKXomEcqD5cKG3dnCU9gpR3PxRpc6JViK2ijP2gS8FaEtV8XHnJY63v",
  "key3": "3jPz8M4TMquV9XzqumeR7Zoqe9tjJ9QK61JkrfuBoxqoNZBrvodAvUJh1YJtVSitXcUQD8NZtuev8SZPX7hv68RA",
  "key4": "37KcgfHQdh54uMzuFmykAVFK5wXoYwChiiTKXGxosBomwt6uQFyoXsjQtEiD5UNDAj57BszXw4RYTPxqGEQiXxJd",
  "key5": "5mEUSKPFnCA4h25DAP7YN5ALxtKjZNxQTpnJwAuMm7D7QszNBhBEcbzKnCjZE6Ba9fJd4cSivnrcECMDetgbq1vx",
  "key6": "5fmfRsBXCbyjki7DVafmJfRzWZHYCaePonTZv41G47MUV5wGi5t6PUz3HYmQhsRYPep3rA8HNbh7mdgc4HqbLeJn",
  "key7": "s9Fk5uFtrGHHfoP4FanKm4Rx5gPBtF1tsYYMHJmpah5mrcjVDCqnA6eFhdda7HEqZ9gCu28caFKiWRbjnVuvcS8",
  "key8": "56Dpiqy5PQE4B8rv7tp7ZQ1DNshF1HDRqNFs79jh9Q87zasTZGXR5PnDFxrZA4VxyPPNRckje4zUyBQ2MVFrkiAz",
  "key9": "4PvCqzRBdHAahjyK6Jp3u12wRxrJBe2repd7Jy51RosXdxx3WzyohirSG6soTrMKqSLAZ3L5h1ogUh29aTbm5kzG",
  "key10": "3ER6qaVwye3xpwWYZEHS7ZYZhgJysggKKHia34LuMaXxthFnmzYaActTkJX1onSbCT9hP4xD8ksXdt7St4rhnYvx",
  "key11": "47AvLKbdhRDrbEkUre2mLNwHoFAFcC53wmvi59aSYnFBgqjrsewxL3fqkDRe2bKTNar4dWzjx31Ub5xD28CQMygR",
  "key12": "ayBWjyHAxaYDTcbhPQ1BewQoGNFLNE4Doi4yryRo7g3fnwWyYVW1KZnkBPRtj4oPjaPgnXSBk2xnidsqmxxJNPc",
  "key13": "nS6LsUVZ7tL4582SrcLqkzkQ1B7gjLTCdf7tn8X6b9haPhKEsjfyqgY7r7xb2waYKAZqJEfRCKjPfGr15NBYbgA",
  "key14": "4VVCG6AgoTWBrkFtUm2LXseY6JMvuJ8MoSKqg4Mn3uWv4D2v5jYckjjDXBfHHrPSCWgnNhsPbvVoNivktX5DhzwD",
  "key15": "3QTQ2FDhkSJhGvFe5nWm8kNLNUEjSEX26A3fwvamiGwkcREYQ3PCGG8DpDq4tauJ3v7qpKCQvuV9h7B2VFgPVg7C",
  "key16": "28fFs2TjmLVtVkdNqox5cLNwECAMzaqFftXtL8KprzpoDFR8SZmWjkubA6dzgaGYRpXdYhnqraYNSrL9o21xdAKw",
  "key17": "KdnKD3NUx9MZup6UwgFxsbQgFbB4d3wMyN78FFBR29ax8iY3AT3DHCAqivaTHcYGS7GvktRAMfdMwtrNrybpu73",
  "key18": "hP84wzEotJWwwqVDuRi77n8fWmirk49bDe541JRzpCKUwJGWsV1icVBmm4TuLnPZsSjXEMdAeNX5ekiqJFsyEuU",
  "key19": "4oaPWEqX15m4spPMtaAmbwDVydBo2SFKnpzHFLLYCXLethMn8GE39wK67DSKDSdeooRFWpFfymm4hhBNR6RxubSR",
  "key20": "67NtjDf1aSV6GKiRAhf5TWaoepRH9Bat23z72AMGDACVdnZk5heiYk1cRN6Ddo5AyQaxKDQ13Tos3akwm4MCEBZt",
  "key21": "3L3AibYXPZPDraEa7xy9eAnEfZUwz4oWiSnaxzZvRwgQcFWbbvwyCTwGG5hC7nL4ghR7eRp6SdSYyxroPAocnmpt",
  "key22": "3bSJKYF1bPMH5aKKWmpNckzVJLhpd8CviaAo9XJvx9WPZVKHd7iD8mqCvpupPrHH3dgxS4oTU2okzXu84aRwtAvE",
  "key23": "3vVCxtwX2RvMrvs3DJBVnbwbusVq6qRaM7hjeYQHYxQbesyTmToheMYWBHq7C55fauCCAQoXYC5d7E8VXKdY27f",
  "key24": "3E1w7xJKonepJq9dZUJgCDk7qk277r1jL5mS5sqov36asqKtEqCjsW61q9BX6pFxW9uLAhU3ND8yupgM5ku8WWkN",
  "key25": "4k5bKx2ZSuBT3Ta82dixSjf7YgUgnCAJ3nygFnyFVNCLiiBSUiot7MjYRYqA5CYemCkc11bPxkB2ZY7SSckvvhBu",
  "key26": "31Zse7Jf5EURmos2NntZhCjDCL8JXc2JVnRycK3WzaJDLJvMri6b67Xiqpq4hyYAPVsDTkPVC7PG8YwtzGW59wRN",
  "key27": "4VsaMq59PHs3QXay5etWeMk4Xw8t3bX3eZZdQYmCAMCbfA4Uk9ymagZRoMRt7UqyV97mk5hxBHk94UTW4Fc6g1DQ",
  "key28": "3xgHd9N8CDhACLnPByQZgy9gDBKzJK3oXDsdYbpUN83fAwrFNrRqut8rshcb81tdgeLbmciMtjcUyc9Z4DzcVRzf",
  "key29": "37hjBD4kvFYG2azjG2ThGvtydwc1VRizuRGz68g7VNmujDc84MVQXB7QLHfzDidS6mL9Zwhh3GER9qZudv897MZX",
  "key30": "3SEiYkBuFGkyHqyuQJx5c9WyQ8JNK9hjrbhQL5wveNzGWQAoP9KDcKo9u35fHqss5QPUxXfiXUqXmv379Gtd1wUH",
  "key31": "3hKHdHxv9JQjohQPpU74PLhiCYE6hCzkUn2URbE7G3WRav2Bb7JaQYet9XDwcUpprvxWQrtVuERcfjHXutVkKdpj",
  "key32": "3sQ99kfmxnramaU1GPBgsVrFJkom18z1qXPyUoCf5Lt8nSpuYwPmoUKivtavDJqTNAtF291BHqfYEYawtRs92hS",
  "key33": "S6QkPh8pGaZfkpQ6ziSCSMxe1j6J489jkxynJgnUgaJJam5MP9jFKVrNQ5Ac2VKWu8dSdLLgTsvjijxUdhVszPa",
  "key34": "3p2S49DCt9gtgT12UVERzQzQ1yFqPKQewRN61wCb2QfQoHbRpqEkhBXCbjz8xzvEXkuxgD1stXU1nfkYonZ5toRK",
  "key35": "2xoXZvZkeCWdmaSjFY5dddgHfvQmZWamVLMNsz7BATTJfadJs9qW6Qoj9oQfEUVrHb7Lqhk1D66DYXMsqK7oupHm",
  "key36": "2fDEvYHfKBwQQp56mkqYwJEjDECV8NdgJabgt6RGoig4GmGmNZitbfSx79eJpog2y392YgzvdkFTVnnJkQH15xHp",
  "key37": "57aABiSKuCgQjCYKySSfFxafbRsMieq71dMgCmmu4gkx3poog5trYGz2czLRrjyt9A2VihB94GEHf5vwNy7NQwmE",
  "key38": "3LUz5YQx1N2n7TB6LFc9ztpqrS9DvieMLitsqGkrdFF65uQgtFCTtWZzKE6qdJopcEN4gwpc9va4grbxoXVRNrJh",
  "key39": "4TsV9vs1mNZqBMoN1GpzKgfeES5LwDCtJrNqSwub3cq7UrGKNeJsEkJcbS7drGo7VsvmcoJoJc19c54kdf4i844Z",
  "key40": "2F21uNvoEESoPzZzyxG4CxF9MUkjkLg9cEfY1obzfJdfpszgzjYG4yecr6xxtSiPFLcdABURNUwzA6LwJZZUMCB8",
  "key41": "3z3GorDGDfvXQg4AgHvpiSQsX4KLpwyHvEw8VUFRhMvsrMFfdZnUY9qZcavAWbq2x2jiWvp1Sa1JebBQW1e5n8VF",
  "key42": "4p3XJBLmA5HrFYMCSorWxFCMyv3VKhZphEWqVbnxjYQgad2aMXVWHJNrcCVyUxLfCt9igy2PavoKokGmZZZ8CNpK",
  "key43": "3LqJ1PPNBNUbWSe1SDKrvAQ2nXiL2WH4rn3qoduQRYJ1waEpukZEctQzUWN8RFKA7o7xDCCRutpuBcuoXbsrqHdS",
  "key44": "2E6W8JsEx2ZRaBbG4GQw9BxzWRVadfxxp7Yhbbt95uXNk9ocY8zwRpCsR6TxDV2Ppk6j66S1c9ZnA9BHKkBZC2g6",
  "key45": "3kXDsYgWr7ii5ccF6s9CxHFqNxuGgeGFgSdBJzs9B51G1rzxrQbkDDCwLGyGFzzHrunCEWrQXj9JCoJJkT56mbAz",
  "key46": "2AUg1uJVhJAzcqE7mbn2AgaXWtjykZpgP7GEbfk6bpFsaNTucox2sArSdu6fjYcLjKAL6uEgMAAsHgM3rg6GsqZ2",
  "key47": "48aGweEAhwAvsMr4dnL76frzRwntUEhkoP8PWgussQXUofZEzvPAtgP1RErCuXhXCrKL59fsqSsEkenyaXzH7Xct",
  "key48": "3z4q7HwbPi15dCV5RGzn1F9nb72ubY6LcuFJmoh8caAiGcWAn9Qt8Eiqwmg6LsrxyprArun1CdgmHVvxfRjYUH8p"
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
