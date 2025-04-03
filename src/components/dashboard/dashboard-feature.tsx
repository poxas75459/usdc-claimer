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
    "5KnmsVXjYH6RnSZjRDJKDVcFEwnxhwyDpCCAydhFBq2ThLsnWS4GadtzL2MAj4zwGVdc9DeqQVMeeREW5D7F8TpC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VvM5vFdtFytTkYpAgUvwW9nvscZ61AU6ck32AFqfopk2JFDcurmzCEaqT75NocbiDTrcty6WKTKRpHnkvcKUmdb",
  "key1": "2fvnXnPFKvRNYxvgaQHewKcj8EK6XcR1rf8jrsignhWVhwo67dCLEi8aWp3WLzE4yXCQ4vyefL3q8GtsJbttZwQN",
  "key2": "42VwgXyjTgtBnkQja6Rruwp4XKoyN2gAoTm2e2vJzCniZAJT7a2MX2EWELb5p7wtwje8PchXki2PV8tYH7Gm5TNN",
  "key3": "4S1pg6PMj7J6Y3FXBBqb81RBhhPqGFk3nnJTqD6ksnHmDjxMhWXfAkJNT2ag5eegwHbQpgjNGXwAkMpH6mqCVhMk",
  "key4": "ran72bXjFgL496gjp8fQVmGWa6SGUUnjuA8tAMHKvFgH6xHHwizK3KiU2ULUAyQmF2DQYLQRyECaNfFH6BVQyut",
  "key5": "3inANPQHM95fHSv2BartpH1K5GQUWbEothSE6DL4Y2gJArB2szzjnR2JXva3DQFWLtM2jtaQranx3KdDtpRg1cF6",
  "key6": "3dEvdkbzC3uAbkK6sx65T2fzGJ8hD49XmbsPsJVVFPxJiuGNRwEaUixMAxwuXZXWRbbERbb5Hbd7ZQjiTNU8VDb5",
  "key7": "2ZuHqJkaMDi4TzFcKNUshBDaSsM9Wu2eYEcTc4kERXff7aFpDGfspGUY29H3GWbJ9kVHGpq3EHiQiB6fMLiaCJT6",
  "key8": "4tjZCDVKvrEYuiBcopx6i91H4AkJdXC7n8MZxVgXqRLSvgmYvF7a3V6QApgoo3J2Dm6KWogR54MrfGi1sEZGeA8U",
  "key9": "3mtiRxC5MReQMwyNt5fAx37orBXus1o8n2rTcTtcvZ9e9WkQDWYMeZ1ReHJtZfVhg1TXVRpRy6bpfdSByWDv24Hb",
  "key10": "i3bh2mHHmewfuq2EgmwWwEnmL8WwuPuHVvVFF1977uMjw8PNCnDCbDhtTrBUg7c24zQhvHATEp2W32JK5oCwbbX",
  "key11": "oCxbSTpQaZKdL6GGAxRXg5BxbdRfzyWTW9xzRzB9kTuRhcu32YuMqwJfAz5hKvafXscaVrsW8kPb4BkC5E2sfoq",
  "key12": "bnL47BTku1AxJARQ6ntDGMQJsrLhzqWrUvGPNxL65orYQyASFvfZCcwq8WbPfiFfW91oXntecASt1XF5vxZHhXh",
  "key13": "4ACMc2h76mmne7UbxknQ2D47tByB1xJRxEuJhb93y1XRFv3X4cKZHvRzkGqPWTJJmDeUbJTuRUZwXdnHnbcXcn2Q",
  "key14": "4p8ZixDskjQpvdYoUXyZSWRWChinmVDoXUyX6vL7iLSpERv9hgqZmTKWMhtgogDwv4uHM1bCr4sC6ecTt75FLrqG",
  "key15": "2L4u8v6ANTNZcwr8DEfNfUjGmHVAJbozhfCvkP6WSYzePryQPv7SCy8j3PTLoAvXriG24frEV3x8M3gRYTVqQuu1",
  "key16": "2naB54niCvKxdkX5DsQ5KWaSHj5tysFrEYNYEsi2nnFjFc6oJqzuGPzPsofw53CbaR1eAncs9U7Nnbeaty6kDn6H",
  "key17": "3rU18xP77VgEpsYM8ZvUBZRFSBVbQ5HjcofxkDCWxqrY5uym2y8vRudToAv99GkKJ3kq11RZngVw34wPD8qre1uN",
  "key18": "5ogcokK52u75CWbQXEnc4pmXN24Y7EsADeyxaKckRYaLHNekaSQthYrcQ6AX4kcDxy9RXCZdeRr1H91qVuuoPk4a",
  "key19": "EN1RMp6B5YRJxUuLeQQurUmMtX4AiCLB9T5Pa9EoTp4VYsJxRpqGtxvWodfnut2ctPHrGtBD4GNMHZWyYKN5bfu",
  "key20": "4ps33VPaBSzL7SZN7x7LYSoPNe5U7SNz9PErSCGN1atzyHzfe386M6FnCTqcyURtbUb2G5ger3bXEcN313zhQp73",
  "key21": "5RALxvPjLDvese8ByLwY3ba4y6nMk3AkPjpAz2MCjVWDehmMaWAZBs7yLgt55sH3SoJQd5pwH6SWSQX9Ufzpb7kb",
  "key22": "3Q6bPVK76QdAWNZaQDNb6B9eta8ZR6iQuatwhzi4gEcVCqmHTrsTtgDu5vdvZEQpQMi2EBwjj85WyPwcoTSjiTgK",
  "key23": "5UbiF8oeG8Pu6eHxSs1wqc8HxGxJgHqLc8NZ3YBnoDe3Bu2Pgyk53SV72SNj5LLn9xYpCkt54LpKv9zMTWuexCRk",
  "key24": "4UQ6pwp71fPkSj3BN9SZeTH1aPjSaPjNXUvfAh4UtknpvXe8tdQdMJWXY3NmKVjTpHkWthKMyCy6NmRDuxPfFhM8",
  "key25": "5oHiSuRf7GkqDFLpzNb92qGZXFjiBeNBGgQNQuNoAYFEq68vdHAZm86uK6uMCCQzFygDhwGvNHaPVgQSz6v9UJ6L",
  "key26": "4Ytmp95MYdCPAKRmA6e6rAM53vMq5nVersyg32Zo54kcsiwDwjHmXy8ytanmpcMhZAzSrZUPWwfeJY3iRxniQvq3",
  "key27": "8X5uHruA28sanbB75n3Ec4pxtMY5P3gU51nYQrTfDP4ushZ6NM6kQ4XWjYFrN56RRHCsaY1RVc5xNg1rW2dugck",
  "key28": "3ievRnk3sJGCMYzyhLSWAUF9b6EEYS49wUbsyaovQyZLHqJG5iHniE3d5knQmer9G31VAejJ3pVqm2VgXb386XSh",
  "key29": "2zb5Zvc82xkdsZ18arje1ShJY1osP4hsuhoRBVBSir1DsHjpcBU95s9aTcnF16vPt4tJBiDz8g5XAA9vaFPziL4B",
  "key30": "4tvz2iD8B3qE4VbTi5GGb8BYopqqR7m18qJhb86Jjdj5GkeZqLwV6ygqgWGwC4RkizgHyixa5kjyjNK5V8s9pgMw",
  "key31": "Tms2Y8U1FSF4bdavAaUQW6fsAbz3Zbf5hDfB8JbQhjYoJVcUXyR34fZKrKVhKE5SQZMHyhRjxny47w1kPAo4vcQ",
  "key32": "3ttsw7hSf8A8pZBusQGsUMD2fq24siY6zDtwqNPEPCso9t96qVtD112RYd4yZN2zwdpGQgzfQsTnABFAH87x75kG",
  "key33": "5RBFjWPXh2n7t8679rHEJDGwqNxRbP495ynfkKnMUrHUYriUszpXzeXaRf4jo4aWjPkfQsskwp8QEkExkTQgZVQu",
  "key34": "3P79CpZgN2qLrnoSUYqoxsv6yE3A9KBmo3j3TNV7mD3QFicBsNdiVf8g2B7wR15AFGHcRM5HGBjqR9oybM9mMsLr",
  "key35": "5tYY9ro8xAXhBovndh2tXzNDRrv44H5iMQ2fhSgGiMcASyL9C9iikuHLydmpSKM5wZ6b2C9oJFBiam8ZEG5bd5QW",
  "key36": "3hmZAhAHeQv27quehewCpcqii8dpjyQwmMHaS4jHMWR19eYasBhzWQifpQQ6uyLc4jLxb9WAaft7t5xvduah9nHP",
  "key37": "4wUvhU94Kuhr63ZchZF7fhryoevtP6SaUZimChGi7EqnpXeHsVAPPwSzZuQ5qn45K4GU2DdtuZ6ezGKWbw1wNUk3",
  "key38": "3aGbhp6LYC7zhUCSvpogb71pZsJSX3gtw9RR3y7L6ujkgSYne9wbn4aZmCeyRjCRmwpYLydaBePwsUVJbkqupJq9",
  "key39": "2byENxVVs5yJFNK7oSMKNWfBKFhUonneMVxKHLqiuATNT3gM28kUigsFKKR8qVCmvTRLmJv9DB8pNhH9odDNQdBd",
  "key40": "5N366pb2PQvWzq5vUcCAJ5c9V674eU9Vc31QGDc2vMtozTak3H8p83E1hQTGDyPxqLNXJxzo42BokDADZVrFFUiV",
  "key41": "3gx3XMPNdofiiFW1qouTTXV2ZLfaqGgURN4kGVyTRfaT9GW5T5gd3n3fUEGr7GMaUVgnuzqmxmh95aUZauQp6QmZ"
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
