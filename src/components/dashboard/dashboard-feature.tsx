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
    "3N9xcYTyQvNtrLuX7eYsYb7NPepKX5w1edJFWXTgA6yE6NibukzYwoqWtndWkDiudUdbjaqrWwGY7L233wKAA2mQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KPPwZjAeqpHY84drrpYuor56jGYLdFhsS2mts3Kga7g9FAjYY2mAcTVy4PfARJa1PTR1scbWTUtJ4EQeAtz3W4P",
  "key1": "3BZJx52wz7HBrkxw5qKg9QaFZdLLyUazPApLUuUay5XuNveAN2e74E6jaUGedXD3qtri51N2WbmCCNgFv7zBbdAL",
  "key2": "52sxRFviGNGXCZaUTmwrwHZSnHTSSWBTKrosqF3Q3bPote8gRJnxo9BdVq51VQALsuCvHaorMgvrZfNgBA21NTsv",
  "key3": "3BpHcpizR4iVqq1Navzvw9qYKFh72D1Sjy6funzXUXJyg3hJdBwPRdrG6XCqdq699jpm31vUba7RKcub3GS1u526",
  "key4": "E2LC3MrVdthfZapw8k1CaWtU1cE5keN7WNjEembekXZJwiB6MS8MqvEYAbgajkTSKpfW1JB5s27EXxmUABihWmr",
  "key5": "3esP3jb1GzroArmSwv1LdkEw3LrCnyoZhdXeFNEan75rZ94H4AKUnuxggcohginxbvSdTCBi9gBEiYULjNBNRfjc",
  "key6": "4zLseyLdqudqY12GYEKCi1yFiQES1EjxgSHzRJbjT66QVDyQ8HvB3duWDKNpE64gZ5yJFe2uDgQPQNLzMWGs2C5X",
  "key7": "2pZhr7R7jrJRFCfVxweJ1hboh1bB4Do7457wbPKwfZLT3NQ4oeu9apSmp7SVEEDk9aBeLfdbCGKSmPqXjv2dNa4p",
  "key8": "62UjcrrXAoMfVV9tHNnUbogbEhyhGnTz788dPCE1JnsAZtL3Qt4dQj95s92ZVPTqX1TbC4Njgr62TBjTcZbbBK8p",
  "key9": "dXcaxWeLfXeRruNhhz8Q1gaTqTaKRXdxkkKUt6mJuf8KgQb1nWcswvP5jH9hU9XsyGYE7yCF21v9iyaXiddj6vK",
  "key10": "4q5BtcQawtP6NrRWCMWqhZTVExswt3A83LueAyKUJ7MdbbXwyKE5Jv35agYxybqW2J4Z9r894ZLfRD2nckZowNMe",
  "key11": "3LD3pQb75oqBrQ3YdEfBpP9GaGzAcLp4B3stgW6UvzDfKpGPnC52nai9JD7tzcVDEQBRML1oHyYmfRUuyW9jX8it",
  "key12": "4KLHjhmBvCUsbDadUkJPtEvGYYqWM1hKMLnb2kBKo8Q3fMkDdXuZ4eiYkrT3tqpkYkm4ForPxCBxadScUxcHqEXv",
  "key13": "3cF6mPsNcraeq3pW2Gaf946axzVSCGrAP9nX9vCZjQmeFy8dF4nyBn5QZLL9S31TWTg5p4z7NokxcAimA4cnjkKn",
  "key14": "3SAd1BmBXuAhHpCLTxEjixbzzZwBaMbMQNYz7w9TNqRPzi94hm6KySySpY2C7F72wnZTGBNqQYPPE8fVPpH4REW9",
  "key15": "3sFb8B5n5XzBoRvQwNXbkmzs5d4fkahuTsgt3ZqEmMMFzPFvfgC5Q9mrVYJUgBoffSP9LqKhyG761DUt4PKw2eBe",
  "key16": "4MSmP39bjeyu6Y2zTXqr9A25jKBJddrjwjxGJ3b1jd52Ut5UqKAViMj9uLAiMoyfFRXWbuq3z4ayuG1tSquLoKGa",
  "key17": "4DJYqWCj8rPC5aPTnGanyg5AYkHGLkduRyzXEQg6WtGUoNQzTd1zfPHtSEhgpXoxne7vuaxageXECL1eV4FXHY1s",
  "key18": "48LZihiWjAUL9uJwXufyBPN6smdUHsiZ9wUdroRuCznfhroqGup6febJk4BSsr8iW1raHwrEZ1GKPY65cCBvZT38",
  "key19": "3s7ayfbhcoqsSrt7T1rkgbkVdtGtJG9CKZCYsVkyD1AmaiZJgnZH2HrRPHyKZ3aSvmYu4D4y2on4ZY8UkkZwfMiy",
  "key20": "5MouP8vcUUZZiEfW8eJoNnyXcejY83fspFhszwGCVHhrt1WDCdMpUCuiDFQBcy9o2jp617G7gHNYR41Sdc1fYyod",
  "key21": "ePRB12QK91YLR5KpAT5VPjCQuuxV3ndrd3Ry3CA9596AAZVpUncyFr5nbXzmsk7iMkpkHZ1fMYJi5srf5sLur67",
  "key22": "492qhktxHRZRA94SdYTL6TpiXBfpYgXeBGKHHDtZ9ZHCm1HoueSdUr9Vy6yCjpg9pTRsefQ4eqFBejbnLuLPF9T6",
  "key23": "5ZtsqUfPVJDFEUDMXdnaYB8q7EMr775x9FB9UzDk321BsbSii6ARA6p8cf3mz8q7Rbw8vXqKURsYL9vqHNsyjQAE",
  "key24": "27UXgJuSzdavTvqCBbC3UZxJgbxEoxDpjRV1cgAxFroRFvTvaNMDDatDdKjWQRRUbU4QJbeXhTgVmh55gBUxLRYJ",
  "key25": "4MQsj1paMHrwuMLgn7wCyURstJf8tgkDPgGH9waXB72YRyQNq9kaKGH5N767u4dudQjeyycUs8WH4iE2Vx2FwCKs",
  "key26": "4vx9tzPvDGsSnGpaTJoJdGKYk9jQ99cUvRKdJR6Tyh6tJy7hyjRwDiEpJS3XRF5kg2c8TVG2X5J87gBe9Nszh4tB",
  "key27": "2FLwK7p2CRdzXowxT5fCCs4RqYRP5ejMjfGqS2RsfD4J61g7BokcvuSPijYtspjRYxcagCv1bPSJ9Z2B6myLTFNm",
  "key28": "4kvrftyCjKRmGhQpyJXy2ypBkXRw4BLGNSkUafGZtuYUsauCYRx4mTaMZdz5WU9U9ZgYzsCkLaVmYLX7JpSVnRe4",
  "key29": "7tmzSQR2nVx7UFBXwppicppYeCZuUc7ZQwT1Wv8F5vSk8wprKuJ3LRqXXoyYWxLDh9dmkz1kWLKPVhCB7omTz7q",
  "key30": "44P1Q8GtVdTkR968Ge44S5WfecZsJs7GN3BDGzWxFZPAmh96PpJ3v4aD4fLV7bGyvkCBcBXtjuvU5yKsLewdZ28h",
  "key31": "BTz8wE3vLgTLQxD6zrFxzYzY6BAftQoDWr5i1VdPSYiKWheZjAgwQbsQSci4yazBppHKU1hrYVojzJqjxwcQy93",
  "key32": "5JskN94phzPoVkZaL8GQjqX3ZwXa1Y3iPfndLZJUZAqhRfQqzSYKj8dPAzzawqqUckkUSqNLWuQzM5Gymh392jGW",
  "key33": "NeQ18qS3PmHj1QPVEEosGoALnhYoLQzSAp2ihqcZCjHHmV8CAj5Kp53P85CweeWUXnFHXkAAstMCTwaxE5T8AVV",
  "key34": "5JhLdmEEmWfGw6bsjdNLo7AAxbNZu22PH37D7GGrk1nubNTk5zvjhY1Z3Lku3vigjrTy1vY7TLSMga9REryy5quv",
  "key35": "54vRPXB2r9Cifkr6moDTcBJPrzTZYDACKWFWByRxjXFUbKRLqNsgswuytfGGXEVAwZ4X2QfC5mtEaj4rARev7skv",
  "key36": "4kNKw3SAkfyU8Qm3mYjnWzhvyMsHUEMsjPxYVmgVgCJkY34qTd5uNtjaNbM1yetonfyBtNDYeNYtZkT2szxQj67N",
  "key37": "5uUQYcNY436Hq6oU2TEFanzF8p6d6A7TPX4muVvFdGeZn29tX1gZGAqa96rQesqbGC2pJFJW5fKB6Xs85VYfPPkf",
  "key38": "4pDi7ZxYh9KMKUFgtBadvMDhvT5PHutomxsPkptWy4J3zWeLdQbfVBta6XHHPenMRLrK4S8BfkZTA4WSdJSKxf5U",
  "key39": "53F3Gryj7gx6biDCiCRyJbhELmwmKxn7xWBgvvjeWvaAtQcudJwJceqoMJJGXNwMUiUA6dwNKP5Lv4CgWz9RBqhm",
  "key40": "4Qb2D4zkWe5wod1sJTMYxZbm4Q79Hqrectsy9xhQuA11jFswZkUEKEQyXuSrz55N4xULW8gNXA34TKLLKQwaFozU",
  "key41": "3YnXDyfAGWShmZ1tAJKgSnwKXMuqFJXJYa3YL56Su5Ruc6sZMNSuEDfMnuK5xZkPuMQ67gdnBxT5wCGDBnPWFL84",
  "key42": "4kz9ZDWmtQkfTN3UncwLw8wvCFjWK3xSUZC452Zh22Cpt3pchXdhWDtUgB8Dq8bsdibX6fKijxha3G4kwHB3upV4",
  "key43": "2nydDmJgFQcRWdPzJDr9rhf3qH5zMAz4SYbczn5gmmcAc2rdAwiv88ADqK6Sas8okxRwr6NbeBzEKgFpPbTz3j14",
  "key44": "3kunTk6HYJio1K7zbvwbN4TBMf6KpZZDXbYHRjeocTdemzSpq28Y51vamwPLS6KpbbKMuinAXKbqrEXmBb94yJmg"
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
