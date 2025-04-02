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
    "4PQq7GZe88Q7rb9b7RX6wzhp3kZ5WXZEeJViFD7aDndaUU3JcB6drzXSywzMYyB2FhcQ8ohUkrkrxd8DKgZcsphh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2o91CSCeYncx6gpTUKezpszAquBFteXuRRXu62YHNTBgt1ZJSm95X8AWoqbjmfMjYLjFjceuW8GqGWJPjki4RbSE",
  "key1": "4QexfDAbswfCivi2pXwc6hSLk3HqeG31vaHuC2UnbNeUTGsGdg1YxHKrhfm5XUhNAHMD4MeGCiAkf8KvC7zeo8nC",
  "key2": "5cAfqBqztprvSqzRC43QMGHd2RvK7WJ8Noju9andAZVEY4WWysbsAevzG6eXyPhgkPeDiGwsowHhyxeEPJxDNqPE",
  "key3": "4wVpR7DZWKWA5PHUdQGkAtvEbKpYpCrNprCV3z513wKboaPPwGMEu1JkE1ZWdHnwsagN23nuMEYfzymnpMJaXEPk",
  "key4": "5F9iEKdAeihyMTNMUnZ1U3JP1PsFZ6S35wfXHB3jCgB5s7SySYH698YgQNanPdZWEZo3visfANk8gTsAccZhQiyD",
  "key5": "2CqdW9cGqvG5twL5bwoRRVVJMf33TnoHZTdRm6SGWmRHPicboz5c796kuvujiLdFVpHxMTgikm83GTjyANF2PFLw",
  "key6": "5y7Sj7nRrf1tGK2QUteU4sFBD9mqSBduYrdZvJAcuB7dstWEF7W6HgdhfUjRWZuJcJvh4jwJWBHuPJa6WFeHMUms",
  "key7": "41mforEBEF45xsj4UHtHK8P7gexR9YqbP8YRjaWV5JFRu9KQkARMuG5kspFmpcZ5mwEx1yBZZXwX9CM8g6q7CgDm",
  "key8": "45gJe9uVZDvs7duDBd3Kyr3WqScMFsZ6DZvCn22HMevENTT1tniFhXxSFC8KS1THFTFbGir7ZghPTGr377zshZyW",
  "key9": "5WDXpGYWzUaEFxmCiYDVJAa4B5JmyH15gPbMKuVK2X3Ko1atb4HzNFCZxgDD7QpXDQMB3qLSU348xrYgyGoXHVCh",
  "key10": "ppPRC7crnL2FFrWy4KaGY42QSz9SZbdJYEp7M1rPvNg29EZxXWDdUozgHDv59LMwzZVPXLKeoQeYduuSJ8GbDLN",
  "key11": "A6PHcJ9V8s1pRDMoysfW9A3TSKXmhYyCi9N4TTN7ZBAXYpMwEuFfsZwNLFEKwk1gv2eXQwdokNXRXaDwLmULRCF",
  "key12": "HPm2HjohMkaJBRxjaHKy7Ntd4s5zbrmSYVsX3FvfyycLqpwqYwX9hVGAXZfbZQYvABNRvKECHMmgqwGX2DdhUxA",
  "key13": "48BfsoBdnoeMgX2cAwoDV1XLCRCSHdL8B6JWPYcXtMdd6GNqyPnR8jWRtsREL3o6XMYpa4LZcvZbUwBwJAesiNRE",
  "key14": "sQwCp4nYPfRYCBYLEVMasKXnFPaCnDBZ2MA9LkL2SoX3n5kh3ZrTeFrf9VJ7EAf8aSFsUtSYzsnxi65A3YWmV2b",
  "key15": "3jvCozYfEibP8mJYGwu5FYreASGkvisYmBjBbjbP5soMY9zC8EzCgzU1ujB88LcVyoTs3J4h13YpxSqGSi8AJvrh",
  "key16": "5dnoiqzYncQMRyy6LQhSwWsNYgmjNF5gdaaLKToWFg9K3cCQNer3ry569kn5WDFYs9MCw9KYCXRgysjdpvy2GRFX",
  "key17": "22iJz2NpgC8d4u3TbrG3MWxSu6X9PWgH6vFn8oAmdvvueiVHEVpi677eAc57rCRC5BrtiHi6ELvqpJfFnXFUkBvB",
  "key18": "4BB4py9yRchuuEHiVwJYs7DTU8YVdF2XKNa8yQTRzLxS3Jnp2d6maabcyEUhS8Wnc5muUASjkDARwEeR2Y1Wu6rp",
  "key19": "nmPf1x63TUiy2wgy5MdwRV1ve7SjbuwrULpuwWrkFfsxdqqB1f49zViN3P8cdr5AYXGbHb1KkrbLL4uHzeTwPa3",
  "key20": "2uVM7ipg2NWfUxxz8xueSt7GavP7uu6N1tLDTDEVq6ipAFStFNpJyQrVLsmpvxXByyeUsmoMBL12XXysF6eoPZzr",
  "key21": "9T26YFgtYdS3zQvrhfVUCPT2CkQZR9JkVoBFEbarAeMNU8D9y7451jifjBLDdbTVPf8gZ8xFUrWgWPGEngofLyk",
  "key22": "4TK2sCpwFrHoNYKugekahXvRpC3mBFY8ze8ATiiU5PYqD4HbyW4jXePVrPJtzb3DKmj5X4nq4QMGVywKV2R5GsHi",
  "key23": "2D6ftbtrmJUbewx6yX8iKvohHodKZA5UA3afUATQxGzbnCDJxSPqam88RDVgWvuxTXNTZQxe7S9TAK7WBYaWSDb2",
  "key24": "28EujjmANWvUpCZjanSoAA3p2wYjp7eV57PTC7xSVyaAvagg6XuZZy3SPPWi2cdS974D18z9EAKkhtfmgqinwJhA",
  "key25": "5bCPpT4gaHKSkEHctofUegeff3TWugbYyfQMooEcxLbTwzVuPaqdakDqe4WS5xk9BqXM5h8uUiPz86sR1qYicA6d",
  "key26": "7tbFHExeSzPxTrQnAjVx7gHdHub2LtX7jdns9cHYAvuCkNwf2uHWYaftTfwh32kdBNDcDQRfzfAiy6ArCHwee5P",
  "key27": "2T7BAJvdwHXZ9Vm9wAGbUL136nZ3rJvHxoiGcuthb6NoCNZUNtVzwkXFtsa2xysmK6gMSkKzt254tT3qi8ctKrrH",
  "key28": "ESosjrrpnRbBUZe8pbkapBWRwZpvpMCrxScn3391csU8cbtCNt3UB32FpN73j3QUp2pYfB4QJasNEAUDjRHK1Hi",
  "key29": "W7NX2X4ufdTfho8UvBTcVh5gNwu1yQRVVM2GgAV9MtKYLvLe9qkSD9bDs6UAV2rqijgQaQ7iycbBfHcSdm9Muae",
  "key30": "PyRKBMcvXrYp8naeXeYjSeR4LxBGr2USq26Mp8xhqb4Dqx8YP8mUQcCKnDaBo5StpTcwzYMyYnkmCZjrYr6Gtib",
  "key31": "j3eapweTu1axLKVNYSGmUk7NPePvskbv5SFWQoFpniNpicupCgSExKzpxrHqijgofnf6fQMshdJLLwcgLpVsrug",
  "key32": "5FZBBixHav455EkeoFU2RAW1YAkWKysojfJLZPoQHa4KrjZ3Q1LAojFGaro4FHPHJXQDYNicEz33XzT3nxdS5tu7",
  "key33": "561LpJW2q8F2jpBbJSVM3YjE1dTJ2SEwy4k7Yhvh4ZJaVWvTmYcU6tpUMjuzVJAFcjXfuwGp2B2tacCmpcq1rNvm",
  "key34": "61FUAen7bFCvGiicJZVDVgDwN4PoyLWM4gKqsv8jVSxoo1xWWVCy59UjE5QZT5ZPtZUrzzrFKYYfy3gb85TLV9w4",
  "key35": "fkToGhXhudmQC36iNJLBwDFtZePP5piR51bTa5VQuPH6mfqZkGHkvckSf4VuZLKLsdHDDUtmn3bbYcXfAhdzukM",
  "key36": "mvD6hoL8zYeXgcbkLjMMwrAmMBQuZjCni99xrJFtRMN4MzE9jKZ1WZufDue3LLgZBvPSujMf6UvbtJmoaC3UGFk",
  "key37": "2Hm2aX831EonAydvJ8ZRSyDAtrKEMjMhjhgya7uDhTmTmdgw6ppFyFz8s14VW9qDydsF58AgUc7pArXX9Ew7AiQ9",
  "key38": "5VBewoTSjWqaVKLde6ZMQBeeWSPFwmfcAr7EG7TstkqDZGhVNJnAipRc3sWY9ZkEfLzVj9dxGbYjZDkAXL1dFzV2",
  "key39": "59mCmE7ZR3TBnB4pKzgg4EU4S8aPbZJFvq7eAhCzT3W5kN46dGMPxydFoJ3qg5K7F6PbuZe6fP572mMh8Mb3iYCE",
  "key40": "63nnZNKqxNFid8BhzK95FHtaP15R1DUuFRV7uRTQhMGK62rudDpEeDaEbFoLtp1AvkEbMnzap19S758VZpifmnsU",
  "key41": "9KJZPwaeU9St6swq8tENPm6eRNFXgeeB6dvdZBCFAeJGFRKhd4qXQTknVZ35NC2v6WaW1cQziKUPmuSb2HXJY7d",
  "key42": "2u6wtAxLxGywu9qCaKTyJfYT7qsCquUhhSpThBdrx2WhpN6bLC6ic7481joYMHwwwm1EwQmMPRXbJmdP6ijhGjqE",
  "key43": "5g9PvDh3uBQBnfKeC2wBeSDudEEkoSZLc13NzP2ueStuXXwW62KwDQVnHi2aBZvzSxG3TCRQBkYRnQMypTqrhhiJ",
  "key44": "5Fw8ffC5cigMoBVYUTPL6jneZvkGR7L3APnnKLd1QMYgcKHEvFhA9u1U99CpX6GNw8wWh3eqa3W5NBhkP4Y1Ro75",
  "key45": "3AkVWt9zAW1m6nfRqrhzGmbBA4m1wsorgfcx5fzZ3BNaXVygMx5yz3Eo8ySr163ymukhHHvid1Jhqt889fgifxAx",
  "key46": "41z8qpRXo8w9ayXN3BtHA5XFpFERVL8xPGndaq9hPohyFHdUs4rwcyn9rXkHUKwtXYmHdK7na5FTfsF3JGcxG6en",
  "key47": "4JbbQMaok26BKmzQFdna9ymm8BKePCkGn6zZjnqxCk66CpqLuQDYAn9WCBVWpCq2aLChYRC1fgrvZeADZ1d2eUAd",
  "key48": "3LDMfcHxBc9yBSqTQd1FCjsxXiAXe3mtKf4rrowGgsx3mbchzWJqr8LCEcg1Qn8ttPQ6nkxxSCxRiaQbX1nQrbh9",
  "key49": "4LtXz2WgdLdsicBBVyTM7KaBQR4pvYJ841KLjMTFkP1AtUsm1NSywEASAZosb4n5mxEkHZoMAX52VSEYkYP5NrhG"
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
