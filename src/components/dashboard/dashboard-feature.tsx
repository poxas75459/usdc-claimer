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
    "uw8SF4UpdVwEghSPmEjBHXkbKk78QpTNfR3hKHkKV45j7vojTGVg2ByCmqKRuk8SzXutpbL2jkS7faYfN1dKJTq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Z1w6hHKXGLknNztud8ZrxP4k3mMu85dwKqAQorcRB8ZTbiQU3TMBUws7zmCqjXssTRNTTvSF1HqQZNctyZp8k3n",
  "key1": "5tmuuoW8V4j8WFPvg4G4cd9bXKZV8LUd6cEft1ackEz9mofFfzDjsGT8qwUErcLtJySxPKsE7tPzNc5Xo4ydeHYR",
  "key2": "5iYd5MjKXKLpxPpQrh9DVidnp2dUvvPhk5eh5Ugacd52SaxHHM4b4WQd2H5vmsNDRKSao72L3SVqBA84VjyNPh4",
  "key3": "5PnifMbhxoDhRHFC38Dx33RdRXF5PFtHFLcBTMrxMhcad7mAGnYL7jdR7EMQaR8RnuYsfzekxUoNEVr65HZW7aKL",
  "key4": "5RphrSL1kSTUZTsrC8jquo4kwoWsPnfhpVWZFLUvnXKjTGUczPbp2Nz7Xwv7ybaCydBWUuxvLiaRZo9FFrUBowoK",
  "key5": "5jR1HrkG58YpzxWFMSuwoFpER7Tp9SWvgDJh21s5cPgkRBQhXjCPtfgdrX2Zkr5b65GQ9tJJnv945F8gcQMEi3eu",
  "key6": "3k4bqoUBCPU9QNQVS7v1d33z3hndGATbdBKF8bkT2NW9JxsWBVLYUu13EkC9w2MH19nExLf8k2qMxRsKtJNimQnC",
  "key7": "4iTRwLBxMwUKVKvN3SANUovqCyjUSZMvFososg42bPDPRfYpzQC12xaJtyGbXcbQqsc5LiZbLDQDS3Qr5eUvKBq7",
  "key8": "2CYR1YLTdfoxXp6sxmVbUvzZA5MVpavFZsvsBx9aHPp38y9DqGjP9mf2Fz67dEpxsfUZTtyinBUfZqMHjky32Nkt",
  "key9": "2ktvMsEnPPX8Qzfa3AuHuz3mM7SkM7ZfxUPNUijjofSXMz4iWkaRMFp9aM2fUZTH4V7yvWRirY3WWiM2oU5nTAbS",
  "key10": "5VdEi4woNukkMFVaQKfo38kFCmFuqkMY2rYWHcUvYniW3WcAYwCifhtXjV6daX92zH91WL8NpFnKW4pBfmFBBSDo",
  "key11": "27mFrKAXGKr3y29gcb3ZeggDWJLWNo6ETJDBGXaNbnccFERhKnktscWBuLDsf5Q2v39z9FdLyZbVDF6kZmtXeckk",
  "key12": "4NZB8FNCd3L8f1KbczP6yZ7z3kcg4K4jtLgkkf8nha76FkbNB7DGmVeaQRMfxMNvUFn5hPW1REBr77eG1ipTVxpT",
  "key13": "vd2F1cmCArgRjeUPact9qzVWshmQe5Crew9cGmoFo7BLmGPTp6UopXX4SuCfP3DdaP68zPkpdRiAVwKEkKGGbch",
  "key14": "2ZsfM3NxsLxMKB74VknZiRaP6tLTEfJoecFf1JFMQqy1Vf5cax8Cqymc31Bv2pxVgRG9xxxKvvUS2te54fdcdztY",
  "key15": "2Ps7xZHyU9k2BU9WQY9CeR1xePWk9gGxLG89Mz4wpJdti224v9Dhb7rc4WYxacZRjwLjqDUiBV9LRvANnDk5693w",
  "key16": "47BRmJds5vgZ73zdv7ws4vKttgBys84uEw1A9jBLfQy1GT1h5uc6zFrGJfqwtsDPTXWMZgmyLYHbZvhSygbvpydD",
  "key17": "4hsYomA5wwTCqFC6x2mw9R77rMShjdU6hhvVZKV1pQy8z9Pwyc1zDrVHehUiRQ8aTDzhghkt9GiWHb8Sp2y6WGJ4",
  "key18": "FKnsQMjbT7AhDVwtYjsqMzovyms8DbFj4VYvxrNDrDRC5mUFJC373ayY7GFY7CX3g55q6NjsfPjkEbLUKRuHior",
  "key19": "y46YaX1XkzbwMNB2xwTz4BC8mkkQFBcnZTn1FHhcN54eVCxduLEXMG5n1BSk15iZb2DLpCR7KbmVuRRYznWd7vg",
  "key20": "mCSHs48HurMNemmzxvYyGbub9xcMzdu7X6AH9MfahbEDyb43bRziWTLAqZtru5iogJCQhccL6L68udedKrWGuLW",
  "key21": "3o1e3aRpEH5UqYBMak8qGntkpp2ebcvx8t1oSXswj52YdGMxDmUv5oekJmehPYsoZFGH1vG2nXs1e8htThFfDGHL",
  "key22": "44hzUAVKoWXnSnzKdA1zyGxwguvugWD28suDfreGgQdhUbeGxaUgz9NqcHkzGJVHgAFFg7cCnsXohcPb1kUXceJy",
  "key23": "Gk24AcZX1AHonhHtW1kpnN4iQiKzikDuaH9pEG1wa8MrhhnkDWunK3NtL8vBrXqYG7HAEUiALujcqbK4cEf81dD",
  "key24": "5KbDmLtN73MyznNuVnkSpPoUpLyRt6MHsrgyJsUFq1ZpgjWyhPbFvb7FJ67xdXtMF1oo1WkfZpuPF9MWCtZQRFw9",
  "key25": "38b6MVkUjEH8GHtGKPgbLQs9QUarrxGxWwuFo22txSwatAGT31bZ217eDkSH3bYE4k2qvjns8vjRikhRKau4JEEr",
  "key26": "2neGJVekCXahsFyhvb3959VLBkhU8EMeaNCep5yJgVdDC4ZQzAxPN8m9vRkJBA4aw6ukBPdneQEucBY9aZXkxLkq",
  "key27": "5k3zq2KLpLWtFnxkKaT7pYFkPkRMMzxeRU3mQ6164tGov2b7c4osZssHyBUwmTkY1W2w4equoH6RppuMeTrr8CG5",
  "key28": "2UDW5pE7uRjvEVwYr6b9zuQG65keuQ3gDtnqguyPpg4zv1MUFf5pGkSBJ2t4hCdM152n76aktRQfQ7BectzMdDDe",
  "key29": "2hLhjYaCNVKiPkfwHVZokTk2PeYxZ7mg3sDNKPU9hz1T9WTfiDoUsQNwQE9f5yCYHYmLwpDi7AqW8pGq5xYAKAtF",
  "key30": "dfoAYKAKjerpmAQ55MHyo2SUivp6a8vkrZSxMr8N9sDzST6SWZR9wUiHrYKFD9cZffHWArhhH1SWcoiz7JRDcbM"
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
