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
    "3TDSZ3huKbztp9ynDCZwD2n8TKDm38Vn2vkLACFUS2QByn5RuZaQmsMCWdhtkLHCPBupaq8Z2FyXaVAdVSFw8GEZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LDGYnemMkLRzun8Z5cwmX5EHBNShFaNHBcAsNQ2GxKGCVbSUJ6rJ8dNMUxWutVt8qQRw3UrqEqwYfis5s75BdeC",
  "key1": "56M6j2dZ8tZN4gE5iCXFymSDheXE5K9SPuJE8CtpFgWCZyXMkNtLNAw7BxtjqVBqiNCieuKRFFh75vM8HqZa3ThP",
  "key2": "4ZEfNe3W4o57XmkftNcWBxJkwcKgp9z6wuyWSJqmdvFf9khHCDcLGN55LURav6bwNq7HK99SiwmAUrvYaNZThmgV",
  "key3": "2RpZQZrTd8xRnUYfcbWG6gtn1F18L75x8Mc4kJtM3aYxEdiyWBNgMc8aJrbwc6qGkjAaR1PaiDbwM7BFRf7vvt7A",
  "key4": "4xsug2PK4iGJ5mNV1iKToXtoEUGZd1mk5VjjB49c6i6zH242vUvDnD9NmfPZ2wxPLy3n3y7ffZCSUufjJ6gEZnQm",
  "key5": "3CYcrWK4Go2rV5mehg3Ey1rYd9ftXMueiraCHufqzz3WLz8vmizFt4cwf9amevJW1fdrgsS7PbWYnYAK8osB437H",
  "key6": "2C4BDuV5iyR5WtNGa1WJTpvVA54nJEuczR1j71qVYpfNbitR3qNDNNFs3nicd1DnKvqfguJzZ3g8Y9ZX9jgUqFT9",
  "key7": "4cDfsweHbaxtHTiuCb3YsF3SqQmruQ9jPXNzM3PT834kZv9zv4K2SmDz9rYp3HkATrgG9Kk6fek24WsDtoTu8Epn",
  "key8": "oJERUwDSnZ9vqDoatGRjYyq6aDhvxHZCSe278Hc7FTcKUe5GDpsM1HG8PpqYnBW4N66bPsTWsNZnoWP7JBB3Nw5",
  "key9": "zmfQ9rTCX3EQw53sfVRJ9J36Y5KpkEgQgdCxgbdMSM2M7RCypCvhQFCHJ2yXvDMiQNzHZajV3V76UjPBzTwR5u3",
  "key10": "5t6vVXetqg4ofJYz4vJyz1cxitgWvtRumyPw4BJgjHSrDyhqPAMDH6rk1gT2W5E8uWsgR9r8BQgThK17ouBYDDrk",
  "key11": "3DUzwcZzuZqMHQc8WyTCWbeoQpkWY8q2T5dZE3uMSP3YK3m8WiwysGn85ek7LjZ7D98Ap3pGvDdFgKTPFXYjbdQV",
  "key12": "5wtsP7ap15RCKGH5BA2iqaRGxUrmnHMRZdcvxAhAri7GYqKtXSHxp275uaPhMucMqXRp6Q8JSfhdMaEMoVQ5VsTc",
  "key13": "q1XV8VqMR9HQqqJZ9cAJXSN1VhVHXMEbaRfjCWqksqaTuStUWNWpxZ8Dd9gbSSj4dCcXaWXrjqjbXnDy85KBkht",
  "key14": "3eYJvWAQ8BRAQ28cuiHCR4b6rKHf42ruEanfutF35xJxaKzQSLmYVmGCjaUsnd91pSaMwWPWWhNVrYbUsFtVoFPH",
  "key15": "4DCfCzhLrp67iNyNcqzkKgZKfykXfC8LFeNnZKtPsftLEUpLjeChEiKivfVd1fwUumHewm3nEYUdb85biSv57kxG",
  "key16": "4E42LUr9o6BcRjPrBWraoKjkg1TcuARH3RrA7HPuQoxSawXxipwPeC7Ka2FcnsS1ezcGxrdnRBTRv4QDr6wdvpzR",
  "key17": "5rmbpp3321FHnRCodZH1Ac7hpeBywJFHdMWGJ4nmqXDXd65DULa49tNAdn78ExHV2fSda486R8KRJDUTrsDvZNdd",
  "key18": "3sNwJNG3Vpqn9zTkE3ndU61gYhj1FBNkc4pESaxx73H4ZZvW4aGBSArz4N92NaVCDYzjQ9w4qzfbpiXHxfypUoMC",
  "key19": "3WBfz1jhwXHY8j2dExRoth4RUyZrd7gtNK2du8jNfzXzSXY4ggbTsDyN7gES27A2fAZ7NrscmQuZW56YwsrnB4Sf",
  "key20": "4oBKzBd8qkxH9465ZDANx1epZAwrD3bYNqFgRVGupGAJRwjnupDcGA1fb23zhR1Zujpu87hQeAm5KqA6jnDtQG9i",
  "key21": "zPYJKuRLPQMiDyVVW2icYGTkao1sbX9YrgUqgjMx4pQAQFnkiFuAzfRPiynBYejyTSFYBci2jBZq9WRacgKyqSt",
  "key22": "3zwdst4J9Vj4gp8XPxsQ3ukL2jwDt9vEWm4MqmChZSPnb8VQhXWPLXGri8ScZKoRFFy94P8RZ48JAiKytuhLbtLq",
  "key23": "3DoDU4uPxsYcFiyAZdaYHN3De4QWC2ormtvnkR4DUCauHeaL3ogZrpw8vLA3XbW7EcttWHWcX73bXMarawTzi4MZ",
  "key24": "5CG4KmZKc2m75LYUPHGfb6rAu3TPCHZCugLXhPPteHP4im8eYdSQ7Gz4Z6kxE6RR82cHsdXjMzvWkdy25fj7GKpc",
  "key25": "27HSxXHz5L6qPwetCuiod7397yVPWS2nRwK39YEGS7Qmdr6x3YAotKLPWAt9Ssh7Unnxg7hWCRZHa9hF4AzST3bq",
  "key26": "3AvVpPvmmuhY1uUkZetsJq3JdW5cdd918E3mSSQgehuaBoeG3UsjMwHmo81ftgvsj1CE1zJ8qVh8Ug6LXhxFpExU",
  "key27": "4SDvBPPtUycmKcy7BRS5BZFSbabZ6351ZTyzRmCyzveA9A2uEd7jx7EGEHhV2hr8949J5NsntCzmLmYXcX6zY4po",
  "key28": "4yBndNAdjGMuxuybNJ5qEUR4PE4QzQBtRitoiWs6GnYBfUuascFSuSnQc7p3DDGnxoAxJeXW4fa3qGEfGJowdLjJ",
  "key29": "5dw5gKmjjwYsey45qm1AxVuksGwSTsThLEHNbSdet4bQ3z8PbhPHgABwUVBqa8whTH3gRe1jF9L9moLUYDr2bsJc",
  "key30": "EhkA7bNd4iVR5mkRaN7EFxkhTH1KeZur1o7Q3CVdwkvXxqNZEEFgaBXXJjNcQh6wLem5TNfn2qoitS75Mda4QUs",
  "key31": "2CTchd7xmfYTDpXf2nFP2mViwqD8zuS5EH5KM8CJjsZb3qejnzM7AE3cLkzaK5srBzZTmYdJGjvDRoZ2FSfZ5FUA",
  "key32": "3cdLPKwAiUjDxApdewE9htZh8MSboNQzz7TBHpLj2HgPZb1Q5n1H5RJSphWmCfXdJEYbV7MZUjG6qY8z8XYrt3S8",
  "key33": "323H6sMwwauhmgigxwyv2ZBWwRJAK859jDT2934nu5oUd9pmqKfGW18bLz2vYdPRx1PtM4q26u7zxDszG9X9eBgt",
  "key34": "5cuwr8PY1CsyQdbMe6PQbmFpjqkAdgQffhDXq4HTT7WCV6Gsu1mQUxUARgQ6355XDXReKgh35ov7nX8q2eiUq2te",
  "key35": "55JD6PDM3a3TPSeRsFx7h81xHwmrmhbqAwdp4BThgqbT27QkZUdVxQmD3w4WoVCLWuAj6Yo61nc3eNw5Jq84dLuX",
  "key36": "4vroN6T2GtuomTmdLnCS97RuiMqhs8pGtHhphkPGhHsRs1moX37CZ6VjkBHPazkHXroLeFzUVTCPGAaFNjuZNUmT",
  "key37": "3AwCKPmRiE5oToZPwfrtrD8d3Jh2X6aWgMQ5kyFtqzN96UkyFmMPehyJum3EKbKfddG8E79VPgFzA6kkJVdCcd9X",
  "key38": "2oNwhfZcjKtyrviQ2Awq1eshbUfBGuDZfgSpGnACQV7QvvejoPiTKPxen4PBn46yuG2mY8ZfYzFsHSECDt6JajEC",
  "key39": "2NHyhC7ADoKVbMruz49D7DvJNY1sRZGZvSHHe87bxGoJFjCretUPohk6QXURLE4RxiNvQhKZkwFpUsvZhJnLwDf",
  "key40": "3LkN4Usk1n3jGVnsW7Yj1ajTZK9RPvGjyQJXJfcbjS6HmjoFLCbHa9Mwnpgw68MVvee8mUscBi6pNZ6KmdYrrw3J",
  "key41": "5QbqCQTqtiznb1SPwQknEvoPJZM8D2wj68dr7i1rSX6LqyKUrcRG5fUkQWMAT5VAo94wQdnHDSc51cVrd7Gdcq8y",
  "key42": "4qVMcqtnifpucHfmVzModknPYbThrEzAdKTtHrv9DtPHpu39bercFeNiqdcUfQ11XS1PTj97MGiwnkNZFeuUeFUo"
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
