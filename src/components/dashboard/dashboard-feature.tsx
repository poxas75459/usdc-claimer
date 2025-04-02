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
    "KWUaEVBAM2vASmEUWNEaNU4JeUjXoUV8bb3FMqzYXHwkttrA5GcVUkbB1iGKtLafQj5E87UBfw8CocHmFTAtYdk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39erg28iDKJHTfRjjSxgwuRhQe4cewxZoiVYAZUXJNBMYjg7Lvb22ro2PG7hVu7Gm5q6qef6JCZj9q3cDnTN4ruA",
  "key1": "3eFZcThsgUkTSU2uk3oZuXzSXWq9DrwZqjhKSKp1fhF5jEwhnNGKZuJGLoGTVmH4GMhjYq6MEaPkUKth72V1R53g",
  "key2": "4byvUcHTffSeRXw1VkP81ZByG8JWGomrB1aKEzgz5XfAyZxSQxGtxqFM4aoxWHUN1jJVb8PmyNRDxvM8UP8NT1PA",
  "key3": "66zrfwqJxPaf6odt9wQu3XWdXLQoBBobg1Zkn9PnJPPJvw7FitFtkQDhgp12YimhVMdvRL13u1phPxZGsGfMJ4MA",
  "key4": "4eBwQAUz3RrwDtMtxWngv6YTuYYuhWrUzUh5QxqfAiHfXATR8FYb3MQxo9wXizM5MkSTZgdMRiVjtwPWfkX6Ed4o",
  "key5": "5syX7wHXdUNFSyEUcFFaCP5DTuFYj6GJv5np8TYCPA53ZPdhcv1kfJa55RzetyG2PKEYQ5vRyNhT6MLPDcsW1MUq",
  "key6": "5nWGHsjvQAJwrGVZLFJy3UijicaVBAeJaFbzMeQLnvMAJfRDCR8c6zVS9TYRA5vcc6pwW9r5m3XUBQzdN3y2XkuE",
  "key7": "485F9EKHwe7nmhmNF4yWFK6ddShLn4hZqD2F996b2DumpxW9dAeVYA9RpHxEDNEpwAoVpsWqViroiUf5ozgmQ9xY",
  "key8": "5NHTPSr8ipmRJn8uNf6QGVQNfQzxESpG67tYCGYRFD1Mb92HRQMEo4LdC2RAVH6S2BFpu5K2gv6UZRfM7uPMFgGq",
  "key9": "4LFDUy98JdhaZ1T77XdJDdZqQq7p4SULRcTrkcsvZFovfWD8eYM4C4i4tJpe5AoyjRpucD6XbEMvNXq64sXYXHvz",
  "key10": "wKPKK7vGpPk1v8fCUF6MiqnuEAanbsD4e9wU4VioLZSETQLsLErQGtuNKeWU7cmmMxqw9vJgG6Wh1yT28rsVc56",
  "key11": "5HTMg2d8D6rCY27TJfpKj27bVaqLbVqw2Z98pqt8gQcU49fHMNcpsYtpgwffES6eHPU5BQ7DKGtS5rgPDGEWFGwn",
  "key12": "5Bi8RK55CQewqbUGHyeVd95ZFaR1DEQi5B5PMxpvURQdEtT7JjeuD1GFavXgW6Du8dWHMCn6ob7LKFY7g4JSb5xZ",
  "key13": "5PpjJS49TEnN3vXS9WM7hFqUMj7iqytLKXcMwzZkaKR9oy4ozW931CUcfpJdoXmWz5VBrqJjjP8ZweYzE1hZYiPG",
  "key14": "2kjb5tpQBiiHMUyWkfiqB86XpH4A6eKrms9K2cuHaittcnH99kwLLn3FgXYD7VmUpodMiNiXtduYFRuLMrFEvesU",
  "key15": "5CAeu6tBaE1Yo7dVivUeBKy3jq9VZEhVUBvYf3Gb7sYFa4B3A8DBjXVsd8GLtubiV8ZTD2ZRAyhdVBhHEJqkYEcx",
  "key16": "2v4dyKuBVaQ4bqZstHFXqzBR9YuDTtYgmHJZryNQxFQNaUdNyiVQzbjggtMwco1FrHSQnbYqcGjfx5XWYgTEm5sX",
  "key17": "51Ck1WApZbNxMUgjtxcnLTiQ67VezU2qTjbB57rR2SpiHotMvtQpfTwajfac9c8asGKkSrQZZLeHx9wuzkSu3s28",
  "key18": "58K2gpdoy6yWbrJMJjHAzeKBJsrJ1p4K8e7n3WSFy3yygdy1GLf2kzbDZCTL9YqGxBb8rP1EvvcX22r7Bf3FVXPK",
  "key19": "2qUN9Pg5ny8gpWSTKVoZujwWJoraVZBMkLvJ5VBm6Fahwy2BaJQwuKU5ds4iQNfd8nYiye26ncjiUSoAvL2amPbT",
  "key20": "fd9MvSYnrubMWJBYUhsg6Yn8o3aYx7gHV3MP2CgdrtxfniwmcNn9PpLLnGKtav5VJfUxu5JkJXu5f2GuTv3J9X8",
  "key21": "2TMR3NvV6v946AAbuk6CRVE2JPJfJnLxynLCjR7c6FkbK5q7M2dmCTk6mUoHFnTTFNwtibcfBWVUEfCaeuvhJwvh",
  "key22": "4DmfxkqUmZ21hvJcwsKZ4D9ou4hwkkfU7LrhTpt67L5NAqcEef9J4xZDXCtuGKhhqaXNU4f1Da2C7qHoS4PpsgNL",
  "key23": "47rQzG7Zihc7u1CLB6q46GBCDmYNZMRnxrv5CtS333GaQpQ2mwz8D1C2LQnhDyLUn2TBtRrawzS5N7K2R9TLbYSi",
  "key24": "3ZduruqQUHhyyo69N316jnpgdRrEFbypEAZWPwcS1Z5HFSa9PSDyeAWRfckgefKbYZDdYLXNsQ5uTP5MsfbPi5Fo",
  "key25": "ZsKrqJvRr5393X3cwFpEFgbFvACmDBXsNFGK7SpFiGnPfRkkt89Nsbfx9ZHX55zz2hYCBZH55UEpXu1qd5bmJo8",
  "key26": "3NRcRjLdp1ZrNpy8B9WV3mhWbtiBioLaZwFgULZFHmyGfr9HcbVt8UNWfGryb2wuzk62XgB9ppsh9yBycJgzbxFb",
  "key27": "2c1bEZnCFhN9xmgkzmzYTsHNjX7LEKQCCa2pmVx6PXoRV2KeN6myyoAav5uCkkoBjY1EQ5mppuuU5gGYhRbz1ZrS",
  "key28": "53RqAN7vw7DUWuk9dnNLTQGkWZDvtBu1quZZgNEyzBp9MREGPUT36m8kkCQPgNfQPTntX4pshy8YBrBWmujJ4BTN",
  "key29": "2nwaxSEY5aYGj7rzX9Vb2sggCSKBPUPaXTDu1VtA6YTonQ2PdG6chocq2ycCX3ggT3YssFvo5zAwDwGtHW7Wf8tc",
  "key30": "NKBQFnpmiGyrMH43aSLLx8yMFr21UGtFKWm4h4FW5YBY8BMmk12GFQAFw7sB9Xsz8YAR4DgHwxjgSJjs7u6BFdW",
  "key31": "5TiJsawv3Mqfc96ZxAoEaMVmJCj9HvHSRwh6vGNScFkejzSoJGVKtRY1Udwy6kmFaEB1y8TtdSeCVUXftgA9PT9H",
  "key32": "2p1HyZgt9LmP92y9E4a5g1K81LQeu24Jam63UkxufD69FwhbuaUVd2c5vdHuFDv1Mg4Ync7wLJqBNtwxYUE6uUiD",
  "key33": "3s3d8UpMYRZ7iYHzVHfZ1qFPvVhT3HeYN71Uhd8U1mrrPfshyJoCHj6W6q75YMbhxv6PVz4QT1rHcdisG1VFnxMc",
  "key34": "4fH26NSW4G1C2eQkuw8bVmHLR3ZgZcpWZ2fz6efT8XT1rpdjhbzsrpz2LsMShMmDwNAgAX4ieh8KmjMq2nfAkvLb",
  "key35": "4E15LsjEKSfn5qxJNjfr4oQ5jCZ7q5izftiFEbFrmBQLop8HNc1uKvwsdc5zqKoD4x9fUQEKWBeqfr5zaaP5EYcM",
  "key36": "4i2N46Dv6bLfyWpFtJJ4ZAcRcyoTwaFdq5fyJBz5WHaqEiUMqz5baS8zPibqrJDF4ATJydSqNagXrYmYPwzH3FBc",
  "key37": "3GrZMTu4s7i9soJa8AS32nprjqPKjRA3nYKcgCHK2PyYCdJchMcisGKPiemgU51LZJqhKdFhKYgejQ82CEzcnZ1F",
  "key38": "3ZnuBzmMqLKyiBsSHtZVh6JP13b8fyBLFxPb11FqRyJ713X19YfxxxTEMSdGNSgtkQtiziwrv85jM5wHfVNGdVgm",
  "key39": "3TJCVS9c7uxgjJrntKWufPtwGZMYPdd7QvCcSdBFKkTjH9uvLG4ThpXh9mt2pkj6uKUVpbdTzREpsHPjW8QMsMyB",
  "key40": "5f42NhgVjKroRbVioymcF4x8tTZAd4GXrouZuJHiUeThcYUjTL2ZEum25UbEWJ7kpxo9DXCP6iT5PebjnmKwAQZm",
  "key41": "4j6ueC7vSZEQxGsvjswUCxsdvhc4FqFWZaABBuiUFyh5d4QzVwA5Z8CbVYJRbYVfcAm5MZWR4A7RKYZGQgbPFZhg",
  "key42": "2ccixBHvk9NqKKmrJFuP3uHAtG3N2zrLW8gjuPiMMXu9X5vUYcY3ivkAbCwm5u7reBhKCivWnt2a5bqXx4umsxXg"
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
