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
    "3wqjSkT5tqbPHZvRMPMtTUJE9UmE5HPfJC2z4wN787BGzBmVbDcu6FcLHAxfvMNrkTM7U583y8RfvjbkThQVvhKe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pXpeopiFiGC4de2tv11zuunbcXi5k4NCsm7cHEkosw48RqvHuRQGm4i2DdLKpc8LiBVqC3twG9ePiQECgmvxEUo",
  "key1": "3wch4ZYbQiHSuL94vgcHA28LbG7gZDs5E9bZenFvUZpjjW6YayFTCP7LNGmWnHmJ3iwbbTcXpn1PJZB7CodLLX2b",
  "key2": "33iBzBUGjGbhNvKA81AM3caGuuSGCMTnRBo5Jm3KWwoZzmcBp1NERppAKN5gc42VvZ1jHwxgK1ShGaSqP1bqGTsk",
  "key3": "4XJHGtF2gJgDQ3pmY1ottGVdyA66KPqJYCpbPW7xAKiyDac5Rpd5EsBwjzF9HNhUEErstw3LqvNe81ixVBS38Mxh",
  "key4": "45vD1XkddiWLLZMg5iKheLL4hHLY8dwJgXNMR4fix3ThixJLMv9zNdZmrAb5yySWQBeDEtNc11LeyUyAUhHtXZ8d",
  "key5": "3s7FP1qGfGArGKvg6nCWVQzACogburggffXfqShEotuTipC6XVdG6qeh1JFGRiZzu3cswvL2hZEEf2rzu55DJwvG",
  "key6": "5ETqp6LZn8vVkJT5K86n8J6z7A3pmZEmXEtLX33uWfuDXiH6pP2aVj1yQ9hsqjrHPpvoSQPCXfv9BPmBcTquBMuY",
  "key7": "2ucUCG1KmXYtQxSRyfTw1ddmMA3hZrLTRNp9xHJGUDsZRhwo7LriA5HHAtdt1htAX3tar77VZy7UZeaAtLNuoncf",
  "key8": "2YeHZvwAnS3DNueKug4Z4r6uuvCgvYs5UbhJogcjhajLN1ct7ckFc9JgrXSyq37AEuuRT3VLhjYo3MVDZajEo4E1",
  "key9": "54bKjdcaGtqi24xErT5KSaPq4LkJ3cog4kbJ5EHedGrAraKtNo4f55NvYyykXoTXPxsdRy9ZuRJzGZJur9bWhzA2",
  "key10": "4Yc3CEDyr41vWXYwWk1pdbpFtzHFKCoKqcFCmfSVDf41ToBvU2d6G5yg9FX5KaYeGxyti5GW5L71H2ZFXSnm3c8f",
  "key11": "4uGa3vAqmbVB2nWA9px1tYypfQW7CiA7gimDmBuTvaLEJ4SqrfMnb71EcvJYncCmGNdHnoxY9sk64ysNeZkr7Eb7",
  "key12": "4G8PzosTfKERMZX9C8jVvNZK73tt41g6qCXoaWtwuwddVsMvx3pr1bRPmisTA6TSLZQFDLUEyGQG7XdseSQWGaqF",
  "key13": "4bgoV3dTppwnVbD8m1Gui58FtNPtg81HcdvbJP3xdsueMMfQ7Lvhw5DifTTnshwsdBx1n1P4X97zdEv61dEe4j7V",
  "key14": "5joKtVFDMLECfP2JGtSmw8iwYZQss778hQ3fnM5AgNNztNzt942k5uwv6o9J5avXAjjQPoRMrMtegskCfvUjFEhx",
  "key15": "62bdDHoZPCx9weSzVvjiMZUNaZodjQAKYqeNbA83vv5DhmDEWLU54Cj3ekbhrdq8m7rcjNVN6Ap1kgFv8wcaZ344",
  "key16": "tykr9BadsCRQd95hra55SZtUvu41BKKct45A6V1oqwkmGzL3wyd7VJHW4zQw7xGEL4vjdRLDBEZdm7KYugUxx1i",
  "key17": "34BRLsG4YTaEA7X6y32TdBwFVjMeQ1Zq5XNegn6tKNxZq9tvV6Qb3kgHQoeaEd1PRvW3JVi7YNs6Y2XWrLzhnBc1",
  "key18": "3SiGznwmXDjatqzAY3AUBbedmaeomEQyUJfxELLnpewXEpJDtRrKZG1vAoceNVVphWhDJ7Q8X1YhqBAoWYnJ9xmP",
  "key19": "4BHwM2ob1i3urNUagNNLjrXUWD9oMN9wWuVwTgUzFzaGpyyZKJ4gKRi6mTA9k66QYg3aWXqe58Zi1AgYizMQn9KJ",
  "key20": "3hdpZULa1joFUPYYrDcJwgpL6jP4nnNmf5UYoUX4Bt3dkL3fgN4nuqqzUhcLQGwMVTVkKscWpa9CyYptMvPrmAm4",
  "key21": "4HYWv3vrhGt6S9Bm5dUoV4gWMgoLTuNUfRxx52jNp6eYTHf5b1jh6BquifE55b3y4XKo6wBCQcQZMJbXrn3LbmBz",
  "key22": "4UJ73VJn1BnBnhh8DZoDHH8dvWHk8hx7s4qva6GWTuC8KZfd73uvJbssSmktLAWooESQgNq1uf8pkS8jBDb45j81",
  "key23": "xhjPKU91eXgrMs3ke6xrmnT5ZB7YU6xCHnJuT4PiZu2BBLAWxit6zPPHCvBjfvr8pEu4Qh7NkLeMPirGAp3NpHg",
  "key24": "4qvKT6msSdH4WfZ7dZU5nhiWDYzyZ3aZGSgFWXXhPDhxDKrxc3xfUBZM5HehK7GHRiWc5yJuWKNE6EYD7infcuJp",
  "key25": "3JrPqV1EchB1J6vgjHgNTbQt7M5adozMLkf42JRw9hZJ7XdHXxuXC4PihnRqmB3ZeRUZptspYYnX4NnJF8hQXm4S",
  "key26": "62ey2RY83TVApuvvkr84MAT4fwsD1x9fsJwWTA8YtSBiStQyaw56TLmKKvgU5hVyCqkMomkrH6ayT1kSPvVTBCXs",
  "key27": "3NL61ezoTGwT69piUf4BHBQmJQBZofYx5KrvjeGhbBr2KjMSo9ZFDEjTPz7dypPbMeQNmKSoscJTUjndFXbHj7Uj",
  "key28": "2rV8u8zK2aMVa6GFYo1WcEC8NMuPg7KUZvYJ6NTC7UaeyFzf8HPh5shSnGYBmDAWRQUfqUhWTUAG3MfjHXd5hvhT",
  "key29": "3YqLp4d5fEHPSdcK3u2LPZ3JsLxgPC4h8PvgzgZyK4sqLu1a173eWBDgNoGxi1nk8ZCSWAYjmwtg3EmVfzBgS9uU",
  "key30": "wu65iTWF5ove1apx9rRAUKVRxi5mjr7r6ymJqdQaAiDZVf1N7tMzZQ4WDQnXTYDYuZJnyp1Bf2w2uvbgN5Vdh4S",
  "key31": "4ydj3jyzTRTypFoRqe35TmhcU9NtVv4hCLq42ZzVa8SCiCo42iL5ixoTTgCxcJoqHJec2Jeo7qjYXNjv5Nj2NFMB",
  "key32": "38gM51FWPv68b9Z7pVVHkSSV4SGf5XJsFx3GCmWMcxMhggx4QU6vu8hQB8UkhejuRVu9Q5pYeARjHDYwLww9RXSw",
  "key33": "5pW6Twegj13VERux2MQ1aknrerZDESG3p39BXpe4yo8U97QWuwDekDcsHY1sLEDW36XHvDBNsBL33Vr19EvqQpzi",
  "key34": "LVwBtfAHziTZ56QY3zzGFTsgLUDpjtadAgA77JGTqu8eatUVE9wxyMgrQpe5LtcCxWVyzXgj47wSYxfs7zpcofU",
  "key35": "2rBoM1Btq2AFypvV8cD1r3yMY7oxrQcFkMeRuWFctMZ8zNhUZ2inGNKRjx5CxRejRSZthYxjSz32F23RXKb8joVb",
  "key36": "51FPuatEi73YRHjWwUDGZUDbpcdydReZ8sgALUABee8dWB792gBXp1a5WQg8xhTA3utiV5QLwVaFd2EZtTwEH3R8",
  "key37": "uDjaRaEmR468r84V5qDoeaz3rJx3EPtxJfGLMkcw3H2uXJRoLGQSENUu3w9rM8cAXdwMzfTKy8bz29RDkLjAdHf",
  "key38": "2ibwkAPCuSpdq3LFSWLLc3stT4MLp177Syy1h8vSbw8fDEki1qEGKBeniDaiviFnEePudG9JT67AX6ooay1f6ES6",
  "key39": "31EWTSnogVR6doFLQfFwikTSriVWFksgEBrg1ThBDidAVAK3CtmifBzVQ7x6HFReHKQoM6Rq9BjsGfzjEqYQDmUB",
  "key40": "4Abwan9rbKTPYSbvbUpYCgwSHpfZ2ovXqKAcu49GVQa3FYKp1fxwUwyULzDkdiYExx9vvzNJnRfiRQgtrAhDgnHm",
  "key41": "3K44Xnjrm6dW8bvDkFREag4eyZZgsfoKQqotJ6UjUVY6K3shGa1uy2jBoB7mrXLo9hc9wM6F3ApaTWLPKcoy8MjB",
  "key42": "3Uhm3JD3Ag4qUG1Jfi6wNLkAPiu9f8ngcwb9Mz7XbQMJebandGzYheJMywhspEQ6EKQ6PdMN1KHymeNxhn8zcNwm",
  "key43": "4m7HAQ7hsJidEokkMqYHbdS3bW4nfgesznK1adhc11ekc7vBDSnKyxWDD6QhukBrCZNXkxctPv2EEB7XtRzDDHtX",
  "key44": "2mP3ZAqaoNqcjfDZ4v8kQUMXBdkPjUuZEFdRXN95LCoSHBvtE8edx3afSrqKrSH7YovrWLsgH3MgPTiJmTugF8ci",
  "key45": "5PYj2Eu3Vr7zvY5qq2DcTJSGubC2PSPbwFoJw4AspKdg49buyK9NAz1wvwMtux7wGSvosG9SZ5mnMVaGbHimT8JG"
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
